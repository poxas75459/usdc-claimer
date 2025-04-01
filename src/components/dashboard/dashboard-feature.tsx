/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "44c7XL9o2pT5cxhEbHo1ENBzF7eKXfbZgNurRoz3DNrXhvazE35bdSxswJ76ediDhP61v7VvBmg89Ca5noDzzWL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oV4xmHLNN6fJj2aQMohKrEM9cZVSgwwC1TfEz3xUmo6zGccFQjWfcXg1ndKzAQ295bPtZe9GamQZ2jxGwsRKTSs",
  "key1": "2nyvtAE12YDfYnfaLvfvxPoNVwWsG4H7koEok6JCkshBeaYNaN4xfunXCXJQAs5JWcvZYtuFpp8LXQHnRBteUSgX",
  "key2": "pvbCtXgbg2rjmNzD1QaFhpRnihyvb9pvtj5Q3gV1m9oBH9rCxJmybxXVxqxBdCgmh8nVY6YZRsNKfxHSVwR2CEP",
  "key3": "2QDfhBkdwUsF8LHeRwdM9QZdJ57U1SaB3TViPxnMXCAXrrdGmWTA7mnr2QZuJnkdFHB5JVhLU3RTSfVvCVjoBmS7",
  "key4": "9Emq5mwcsJ1SFhvUY2TH1oDbsHHNX4NzR3cfxdxcBo132zqZjPTU6tsqMYqZ6FtVNYoBty6uk4vct8UTA5bmW1U",
  "key5": "gXzA7PDJr11NtiSWqPk4cEJsoKPsVhCSEvEWokzda1H91cNnF6Y82dQhAZs138EEHuLt8ssAdSrh5zuJGzfqfsb",
  "key6": "3wDtQznWimp7EgD5bNYywSma7H8hMfBNFHDmnTFJMxZ5xkrC5veZ1Cd8zf3H3sLyGvEaJ5f8ViqmJtdpLX29i4ut",
  "key7": "4mqiWPEMawU4vLRPQYv29SUmrJ766BrPDzCUxak1j8iSabHKm2spE9AdykM7Bjukoz8ajqvfBdSzJvmtrSvxaTD5",
  "key8": "3KPPv4xchpusn1qcsmGh8tAML1s5pBcUaMcTAVieEA3MSpZVmpTRLFy4EhpUCtURAyWN6NU6jsu6cHZMezYx6ZGh",
  "key9": "23XLH9ntJ7kq4eG7Xu8A4smjX37ciBfXrUjL2qaGUSKbnZRYbuxGNUNnSecKBcSBF8TPEsZg4UJ4G3JmVxBcz48j",
  "key10": "4NSnHVnakbSXU6sQ9879q5jaedtPr87aQB7E5orpUbEsSLjAcqpeRpmgffLsk245VXAx4p1Ps7UXJTEmg36EaLrg",
  "key11": "hTXdrr3WiMmVEfhTC8mD1bM66mimVoyK8N57Em1G2sAw2ruYFMneSfCz4dQuq8nbcuv6FxXhd9DTYHaEqufXNkt",
  "key12": "2Bz7PabVMoGwBvzVYhALapwZXqaQnwynTpFDFgDLJSvjkZH49MCrZx694M4i6pBmVF5oFgargQ8FNbkDriPAVDav",
  "key13": "2tDMiXafe6ofjDvd8JdkK3P1ezBiYGCHYc4RHnafuiAMvBq1dc9ZYKfurJAcvAk9QgcNtpAQyaYceEM92cdK3UDx",
  "key14": "5Rz3YApkoZiJJw5sZoJxP4nVvSdThcVjr69FeAjX1URgtEqqsaxSNMKpWWiRtTTwhZSHj12DB5Eq9iT1YCWxfbTr",
  "key15": "2VLU7TGb7wMPdwRqUWF5uQLwsf6KmAiTGaTtEVE2sfL9g7uE7pooorcd3Vbq55TPVpSmZ554jxLSFeAT5byVAHGG",
  "key16": "2hD9mJCPa3hv9yfrbNQmPrTgAjgAzw2V8JKzV4j98FvttJnM8rEFKydn7V66UM6LXuE9VyLPVKvACRGYmptM6of4",
  "key17": "2jyN554UgMqsPrNtquEsrcp8PwCgiTWCAYHsXqaYZxPGZmBssZuRRfyg7uinxjwiVJsRwp6fXp3stETNEj2wZKvy",
  "key18": "qy3rij6UwJpEDDvW4BUeM5AZSQKUBUoxkAG4jnVQQnNMBs9Sv6qwKLc8EXg36XWQuhDL7TQM2uiprq6DVAdEWmn",
  "key19": "64y9QPR8TA1xJ8dRxS72T617bdsAh6TnCERzVXuUUJCcPUmGpfSK2wJQTpURBxPt2XWLeGRkSsazEzxeqXF8mH4K",
  "key20": "4pif2mSq1Si2sc2LR7mGsk5gY46h4AsdiWLPYB6hdZHcQjnKwRTXwCjonrZmtrFfJyoEcTar4AVMb7ptmgFotPHr",
  "key21": "5r8HKi1rwQTSuU4xzjp7PWFPcAyXyr2cvfHohNHLHN7q9ReLEb3YBjua66N2ft9F6oVT6ujPZSTDUj9r57gvJxkR",
  "key22": "5Romf8Vj2uAgZCCXWdhZtYaGwHxaY5vy7m4gCnAAwswBF7RHkQxLGvmVPBsuMr8UA9jEjfNapzxoARTxExQVYcYN",
  "key23": "ik5swTuWoryjAJNnh4SVpggwyQZFynopdecN4jy7bvxZvk99CAQTS4QJXYDRY2T33cEucaLPysX9rPe3phLHKKm",
  "key24": "3pAkVEM5HfPpsUSFpTYS4thzGKuHXLbY7H19zWACiaJ59s975yQm7xQFghS9j88HfBz3gzTwvRKSHvPnAH8BMifB",
  "key25": "5Yf26PR6JcW7m9UyQjm3EnnJ33iXa2k4G4xAqfgvABoacjrqE2Hz4zXtPewAWPgkqtqVEWMeQUuCcXvv9ZssRLkD"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
