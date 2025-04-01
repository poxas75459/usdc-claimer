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
    "2avQZAYzQiNeR67uecprJybYRKD1u9sc8vB9fJK6UxenzNPDcxkaX6UU4c1wuTSkBRMdsW5SUj8v5u1x4ZrXYAqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqgDMKEY3rSMXAYyRM55R996mU9Zn2ov9bkQyrK1CYGdexryAknnng7Pg4sp8jbjuFwHj7boiAB3T3CKFADej6H",
  "key1": "eUfLNN5XenFkhdhXNHx1Gq2zLmENrgwYVgpCgghZNqxcWCZjKgNQvY42sgouWzzAq999kgrZkyo7FQ3v1jCo9rT",
  "key2": "5tYtyS7BSiVvAv4C8qhp7SxE5uZTrRtDj8C8HUHPNCkVZtDAksAomFRh9NFPrk8EjFLmoZiin3uroJbJYFWicSw9",
  "key3": "3hByJLfBmn2KC4NASZYBjm7SbL3pDhJwCLbJPUBMgHMevcuqSKFtSK3ddqZsukfiHgniKo5JS4jkXbfXRs3v6gZb",
  "key4": "2J2hPTB3HcTsNtdM5FTyd5uSq3EUHeppjM8USm7KzCJXDTBYpmk2yhpWB5pQMSzAPaNCpHyRgndKMyYDJ5xgx3t",
  "key5": "5iSutzpQXDAWNQ5JPWobL1gMtLYWQ7UDHZQBYoANYPFMdXS6EusUrePfCsaZoDJsK6DjRBQTv35s2UkZGehVtMHr",
  "key6": "2qcyXzNo7GN4G6HzLxrDxAq2zC5QecyhXiBURNE1NyocYPmspY1ucrJi3ed9GNgrEwvSYWaufFRy3RXF3KgTwpKc",
  "key7": "DjcohgxRMB4ec7qFemSpKo4rWvz3sES1VuGm23394gecVcYZriVxBBDifzk572vpthT3RivYMQ1ZeaA5DvHbB2K",
  "key8": "5a8pzFM8mm5CoSqvSLvDoRBcLCSdNFVzfzBV1L2tQj6uq3BUyq5dL5vpUBGAm7mCFXzrTcv6jhbETXTRU7uvc5ge",
  "key9": "F551hqBj2ZCDomg4W9TV9oyrRX9aMTi7VaHmoqCi1t7Aas1pjXkEFck6beSqYxvovPhTU39aKi1Jw5yS3PxmTB7",
  "key10": "zUYYKaFEEtE6YCCctp4dVBC98RyBEiuPh4kLrJgZy1DB9kndYgTMMEwTtTfH1H7zykJLjMeaHaND499FqMX33ga",
  "key11": "31KC2AKEomsdtBti66WfKTypvp3DEdGEiSTAkL7RWWDXm7wjiFCPLxhqojiMg5RXCezZKFyE9gmnKRRn5tfPurAi",
  "key12": "2NraeU4XRotRki2ZmwPF3bCiFy1RsMktfAYGrHx5FTpp85HEaZnotq2RSf3kKXfQwnEtha3tLXmiujhyMoEZgkWc",
  "key13": "2SaF6cAunghgroz4bCbyPZzEjpwDSH7eHJgvr3QxdvjCKgaMUyriqu4oxeiWN3yVEnk2fVPiZngoV2jQYZgZpXwJ",
  "key14": "4gizZZ4HFMg2tGPyTvuVcB2tzEKPrN5DnDBCeGvLBSALd8JBbHH28sZie9bnB8hoj72Dy5s8L6S1EHeNRWQ5vJ1s",
  "key15": "5EhpfHx9vwy6zDRwyB7gS39bqUPzgtPLiUNhA78kFrBwfe7TKA2gBbPaWHmAXJdfPKevQM76bRU4PvKaAGyGQZQm",
  "key16": "2HEaoSLMoo3Rw4hUAHkwvaaGwiCXri7mTTmWpM6usjyiJDn4dZ1yf7k3XiW2CjhwFver7mw9EpRJuuQawCdA6ph",
  "key17": "473SE4k2Y9zsQnWCU88UKsmhQym4ETFKushiYkWQUdFD8W5KqbaXDf1FfXpJw3QwZKaVcnHxCkNEQHwqs8Y59nSi",
  "key18": "zV4mtcYGzvBAnPxmjQP5ybbQ7zKzkZuF4ejtt2vYJyQscwH5xsCP4cLjzq9gbpF6yzwCQrSr3fFNpDvv8ZAoQq4",
  "key19": "4CLY9M1yHkoyxA7i6icon1UmDLhbDSFUqdmXwdEpJojLTbV7HS7QdkrMVNXBNsE66d75wf1cnEQvfpxVJPxDDksB",
  "key20": "4a6pZPSR653CGttDpeUf9odfnyzRCFEmFo8h97QsYveNX6iQ5ua7We6Xnq2PwYfkhf9ePbkCp1qrKUKbgPjWoXSG",
  "key21": "2vHUe11t6e2uTrZiFtroRXD4Len1LR3bpgb1woGdvMTvutSiAnvxkR3yMjTv1dCwG6esDxdnbpLZqZC7KQJqMf2i",
  "key22": "3TGsJ6yQnw81GaqMA7MszWWJ1ahSp12aaFpzEzqN4zcjuw4uj9sXXfVZkR1Lye746gE9gYnPhVdD68m2aNxzMiT3",
  "key23": "1Sk5aGowoY6z3a42AuPrhmCPcuR6CcHjDbkUrX3TA6H8fooVKohEBq5YgX1vVsV7CDC7Ch3mAQw21mC3RLQWwcL",
  "key24": "39DpUB3q5SNDu6kZRuHMuXLEQ95X9xEdtYhEpJZn9NXvxrKkp4ft8ySC84x9iTgrAkwVxT5Uzpa7pBVstFgfVCzc",
  "key25": "kiQ1pLTcproPu1ajMuQrZsvo9bSkASMfWGnaQbz47XGFwGeUxarh22xemFJJJUt69vofWKjEBnCYXdLV1n3EFe7",
  "key26": "39kG7JAFG9wnWT84xhbke4skNrc3fyWNdMUGAgAzFbUNjYgc5KxsRtCeiae79Kq2k6h8tmxmcuFUMX8nMXG4vq5c"
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
