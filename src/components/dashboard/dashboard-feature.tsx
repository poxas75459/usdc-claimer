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
    "2NDeHxVTMp3H6snR4Z1dpCT89nYZSkU2j2V8XDkkDNAUqXNDYt5oWaSKHrog3wC73QMEf3setd4QvFGD7nnyd4W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66nWUeCzKUKxRaFHb23gchffxte4hxvWmCH5Utwt7ixrWfdhm53c6haBgiswgtB94Bt7VyN5tF5uJf38jXhFbY6j",
  "key1": "4NA1CVbnnVf5xW74TsgiNG2LG5qjUGhN2wJHA7WmEki8Fh1jCNAZvAnCsxogq9LvaBVAUzkEh4avhesSUy2MYdEX",
  "key2": "3uqM5rdB8iHrdEGckG1J9DDXus8TjR1Yv9M957o86i6sbZMR5oiE3StyXRv49kcKytSxJNQatmEDr9Ks6o4cYq2V",
  "key3": "1296A9QJEox4DeJ5BEay4axKBpDbtk8usr39tSMXN7BhakAU5ThzG1mRFJrKfovyXedWg8QC5y8tNVGWKMddydiQ",
  "key4": "4H3LuSk9kPz4fZZLRv2HrJQMCnXF8SjP5YXzdJFRraJFy4QR4UYcWQWzG7cqQ3qKk6KaLHzbk2zavNPWp2Fd2E5",
  "key5": "5r3S4zksnHnj758erjWLh3stGh7dN3eVdHtScoNhF5jSDoZMTiYEWvLcNGBbfhZYiJouPyijNRCiUFUAzu6nyyT6",
  "key6": "3rWXRno7f39NToXyYZi7KuzVQC9hmTAxhirSJuTpBvEK7RnKsdJEEjfXvJg5ghLhoBWcTEy43n1b1Q6kehmvbsYD",
  "key7": "S6pybnhJ6eCDaTddKmS1XJLpgFRGwTzCJAYCYPrCzu18bkRioGLKTSjPktGf6ZaVZ59Psmw81VEU7NqzG3Ga3dL",
  "key8": "2dd9d6XzPMbwnKihGfAQgwzAHvFWiGTWKJ6B4WVWAygPpGDPmBqVj4ao7GHeqW9SEX8G6fUYvwhFx3iEmKCAVCm3",
  "key9": "2Mbwcqdn7auNiHnNEkSFzoTR9iagJZKsdadVyq2qDMH9NUygWbD8ht4cZJC6JSEvgkx3V45yHDS26izA3R6zaZTb",
  "key10": "49FG6Hzp8fZxPh2oRcXGSjt2hesJVxLyLRXUhZv6H3LyUxf675Ju6JYVopu8vDuEQmGTuNsBkb9WgFKJSgD8W4bK",
  "key11": "3msj58NUfD7zFsytokxrmhkEWQtCspHao4aLePokMZcGRGfRCtpstNbaPqjVJx7Nt6qGrDzD3CPbBHqCYrG5oJry",
  "key12": "3hAjEdxmbRR8EkCyGCRBK5v3cwTCDjkbCpeAvUo1MyoEWi1HFsRQxTJAUE7WhiW4H9LbuFyEmroM7NZTPVfD4Cbe",
  "key13": "2ibSVQtgJ2yfSJPxK4rpGLesMiS1XZhu8FXnj6M9FfEKU5AnFm6w9C9QoeQmTTayvLpreorxUPRU1cfXoK8qiQtD",
  "key14": "4Xsy8w6xp2RBJRmKVRuh8ifkZrk9Nr9QvZFmi1Jw8aRaZjK8mhL2SNzCV5wwgEsCrDT7ZXgYKbvPjxvEwT4SjhbS",
  "key15": "5Z1H1XLbaPdnjDB5ZxseHjnPQAxtj5G5qzhBjyaFoqfYqyXGD4KdJnC3XgNYsY3D95fh8m4TNcnBrgLnRaBiibHS",
  "key16": "3R1mpnMKeq3ggRKZKn7hnuxG6y31QQgTLFFppTVSx9J8b31Jrk1W5fWbFRvMLjadKbvBZavVa5E5oJDZb4uRB67A",
  "key17": "5qmzfBhV1ho4fctxGaXud3h3QzGa4KLbofwNXFFTaJTKYhEiNHL1SizdZYPpZKZ14nD1WzGemPXFXbnWFn7cVnQg",
  "key18": "2cUdtsYYH1WGDSNvoSPo3r7tvM2YqKiJ8DPq4ctsWgMHAcdUyqGFqENRW4pzC1JgrkECh2mP2TLy51uGZBNJ666n",
  "key19": "3jjiRSzaHu4nB2mxJ7dopq9ua6SLZaLdwuGafZLgYkG5DuLg6pFyiRVQmEzn4ZxiZLiQ1NK5wmCXqXoCFF6akfdK",
  "key20": "3P6EEWQnS2w69dTcc46v7D7AaexT2u2EKqXZQMYXd3XqdggXyU7snCN13GqfFoXtKvfe3qk9pHqu9PkduuHoMmVh",
  "key21": "4PhWieDm5anaRiozBtn4aJMyzdsrxQxnGCDGKB9kh1AzHczT3VVZmbUH2BdQBudRhRs8cB92tg2ruu3DxoiKdAqG",
  "key22": "sPUx5FteHx27Rf7Rm36U3pMHZPBdmsm72N7rfmd4UR1a775orABFjMbk3uCLPKUuRkGvxn7cHXa6iEropVzsB7E",
  "key23": "21582RURBzVoM46N35Q255YE8ZXitpWuTX78i1eFm3i4ekkkDoxqWLM8dcurAQnhK5m9ydBtYc2vvSAq1BpRbAMo",
  "key24": "FcZ85yuReBLEgDJNzJCCruakTig4Rq1zuyxNKrqmTzHhw2axaW9nvomwjD15GzfLX1ZXJ9At8C5hZ47QxeJwREq",
  "key25": "4F3sDeo7CAziuqkkQLDcbEGa9MLApeLHpbvzUjK9MFyRLdh6FcPiRbzqQzFEBnT4rH9EQo7gqFBZEYyXwEi1VwM1",
  "key26": "5zU9EB1aS25WkMGuyws1zvsBADioyFvBes2y845UDqdPR1nm76mGLGMc2MhtipDhegotZg4vSXEs5CUiqzQztVDd",
  "key27": "323wegGmShsb2RCR935gdwsysb2UPLZ5BXxYQyqAkNndBAsq8y7nyRSMJtck7dGAsW5WPVdmRpTBpnd1phFLP1em",
  "key28": "65rfCaGLKTCVacWx7JP6ie8Ch7d6xG1y9RQD6yWZpMgnLiciMg3KPgRtGg6m5qPwZp4XNKGSY7VeA4QPY9uA16Fv",
  "key29": "3ZiKKSXeb4HoSddY7JBXwME7Txs34KvwHr4trRwCB6Y8oD1QZQA4VgeYGvuqA6AqcCSzj4oUJASf7haZwtdYkqxy",
  "key30": "29ZFAuTTL1RULPUVxtV5kFnv7gpkCuXi6uacJmLYqdSzHBCAh8NoCBH1EoXpKUx6P57P9iWvcaNWnSL7Mes1Vs7X",
  "key31": "21sujQR3DFgXyKCKg3PK9HkrfaDJqG9uLuYw1tuhLXfsL3kQ1USWC53agMGcNb5Joz1xhp4ahbN8TqNdyvcLKCcZ"
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
