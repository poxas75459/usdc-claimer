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
    "4fYgSuoMZLPPsYxwPYbj37kH1G2v1WkBePASCEp89YyTMrCFuALbxKfVMUrJy9oBDCXnRnPMzgADQsXbfYnPcKb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bchMijR1XMfh8EeCiRqq3in62k93iwVv77BT6EEETkBJpArArFp1Ux1uCewUzrADyKcQPLgmvbmV5Pt3h9ifFry",
  "key1": "5UYXQ3r3eB63uyATav95zUidd7ut5vdkf8vTWNfgXy3Ga8cncfrmCdtE7AiupSmvPRRTvWV3dDkJt1kyWLnQynC",
  "key2": "2nXn9hmBeDfnAqMqMW8RtpiJ2HvCivqes5oqDpuBh7LcGJF1FxhFmKfMfXu2bKZheP1uE5xtXq2oikUAq96EMVvR",
  "key3": "5PpW4DcoVBLEvSfSEQPmv9mwXpYcJkR269Mj5nZBamHgKjcD6LgBwrHUTJdaxiSGwDre6mhNXs8RzrexfgUD1rUU",
  "key4": "3W49ypTpB9yWrnwZAJGKXAU2ccZXjJ4oT2VrBEmSvdB1Lhw6o1T5nqTuadTJmCSU9qVuckBuHrCa14sAgRi9nKUR",
  "key5": "4tFrzgj2DUc2L9h7xfAp1tgqqWvPVDigjBv8Xs3HByjAB1HtDLW7thHdQi3oeLW6UFgLPRrAoEUDLz8W8LzSu7Nq",
  "key6": "BfRcf6ED1hK27aBbeAqbk4zWeK1uCZdKWnVyt9htJrEXbxiYt81y6onkhRdz5qe2anVAs6GxeNEz9TVV6qw2Huf",
  "key7": "5NFcgDz75ynebujLXPoEH1G1YspN8gzvoXrGpKzEECSzW7dbKtGL1nyV4diwhKtPXM6rDkkszsKKVt1wug3ks5CM",
  "key8": "58qUDRfGGdpYz3XrqeEmF29m3DDSNzdCSMjjUYH4nQpVpuTr2NoyfXG7LAL1SpCQT6R3k1hL5zAYGDo9WaTeJVRF",
  "key9": "3goHZyXj6onSWXomzUvmG8pPD87nTFSzXrk2zvfHUzFKtwRBqiQNZDS4qxhixaxZVRuZUxQG3fb2wGTrLpWf2y2V",
  "key10": "425qVJp2Z7fgYsXpaBN7DQ1RJFrS7v6kpUyq7Cw3QNfkhDXwtyvJVop8PNCbkShLFNtF4WJnwCYEmHtB5BSDpdHo",
  "key11": "5T5Rx8UJFbtxZn6HbUWmzTp4yUrGi2do7Qd9WNooiEoWpvNG5pXJjEa2Fxn6qzSPWjuqRMbEV1Es5cRrx6Th29iZ",
  "key12": "2fsqj5A5ELDdvgg299wt9DhosJXvJ4rxzcNB2HGtG2ckD6Mm2anMamWhPfyySDjSQW8vhTBiG5VnMbrBSooXAP1q",
  "key13": "47Z5Eqd72wfu99rfVB9w8dQcKUHusLxvf6r98tWhwLQHFXHRfSwmfkZsrUaRWmcA69QQcBPvviJBEtcQyitCdFTJ",
  "key14": "4MdeExnY6KzJ4Akq9LbcE3NK84xjsqDXHuy5C4ZoP6v96PA22Qb24czkkXCkRmcN1W6C5LxNDZLvWEwmbFrHgNG1",
  "key15": "qt5LGNuPQixdgUUQYdvJkesomDhutC5c4hdd5z5jeX6VEE7ExhmdCdpLutPXPU8LUfQZay2vSPmUM5LDxh59QJ4",
  "key16": "4phQRpmHb8A2csqHRzurnLfw4C5admBJKF9P1D1ebK7D4yke57Jjb79i5XXq4ozKsksRLUGRgqgQFpyyBhc4U94w",
  "key17": "3USfCMViGd6vQ3z1JphiBLiHWy7W53t6SM4PkQs1FJtjyYLhvYvqAJ85aV4PWTSMfyqyqXsk97PtuW9FeVHGfT8k",
  "key18": "2D9Exush1U9MiphXbyM8sGtKkrmU5jbXnKXwKDBw4AjWYeFjfbxu627DosziXXpbwtojGq8V5Afe9p182zBRMUaf",
  "key19": "5Nup3k5wLQu6vnu8w8FJrRfVAKoe7ev75yQhCLy7ADCz3jJroxrapeEaZmeL5L2gvGBiD2XdENR2wWxEhes2oat9",
  "key20": "5kz7KB52gK37ydWUtP6Z5DywER1w5qFCGPTEoQzqY67NnrYnpXVrUt8yh9E2APhG9RGVderam2b5zGj3rvtN8Xeq",
  "key21": "21x5xRZXCoxHmW4Cqsovx2us8exv225JEP37oyaqbzi1Wozvwk3AAqQqJL93o3Lq3ZmVEm58JiDz6YdA57rjrJUx",
  "key22": "4unDMojwKiebJ3NQNsNKMioJumPKGhQ6dLfMsh1KbrSsQFrsZp3npg9LT6Eon42bo4PkczAg1Uyvk8V6N5Vf8Mkf",
  "key23": "2SVxYyAQxYNdJXWpux9kkwo9WJNTgBtAuALVz5x4N3XM9roNGV4Qu6waYcE2KaF3ZYKje1X4T9mUuUoSSBnZnYQq",
  "key24": "3MskdBGzQoviFm8vHYXv4QcsqDjLyg3Hyrpm3F2VtVpiAHGsfN8aYNr75V5kwCjahdQB89cS3E6zjnmLTk1S2GQw"
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
