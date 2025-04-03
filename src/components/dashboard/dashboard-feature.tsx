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
    "9beKqWS8oqCnSJqs6PaZwEe1Bc3ENw2AzKMD3Z7jBpKGphuhEcoG8kMRyPEEprndHwiXv1uC8uUscznJmEseuwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nUo26CqHKByrtKFzaDS4o1KwA4ufsgizuf9deDTK5jofKmZHvsr8rJg5JYtQJxVXtiAe8UEQPksJQ6Z9Zhi4gyB",
  "key1": "3AHXfAsERawk3MykpC1okgiUiMFiAknJHLKZ7MhLWkdssBUboECp84pAXeF71rXwjB9dLxqHuvC7cZy4u6vUzMhM",
  "key2": "3siTDzmRNw3aA28AxGVUzUMqhguXxSgJWJJ1ZLMNBoPVN1bjzspU8z4WoRgcfJgk4ztjpYGrLvFzAzhXVnzF4x4f",
  "key3": "3ZzeUbRGAUdnZJw79ZcoGmjoWr52C5hHLeBYmKiZC7YeJHuWuQx5fB8sET9M4F6iUZJfvy4JUEpgLsFLbGyie67F",
  "key4": "z4v82DzNMtJK5G6R2EMQ6hrxtRSw1oNYFehspCfTyKvJmJVjgcrmgjBuDtFjwhHMP5mCeZ1svjNCvNGimdx65UZ",
  "key5": "2sC3VvfjJA62nw2LTvhCFuGTzELyqLdHaedKurra8Vb5af4hfvhSZ5oPTQUQHtjX3PSAkvqaLdtGDFUHUtKaysoq",
  "key6": "5N6xFYeeMN77V3gP2Va5sNJ9pgUKL2PPgEzvZnoZqdH7P9mnMJ28RD5j4msyGPKpdzdu7V2FV5AzE2ARyHykLEES",
  "key7": "fbEGmGxmNJLyQ515ZptzTqFooMvhyKmkSCifHQt6T7z6KeUww2xmvqtesfoevvs5rcwxgYjc91S3RFCBkYU2Nvs",
  "key8": "2LFJQkjUjaoDFRtSMnzPUH9EDPPZU9Xx1BiDphow2DjzCKmTf9aXphqf9bXmU48zb6vfjDx9h9oCTT6QNtmTpGWT",
  "key9": "542fvEHMApiNGcp3Jx7mZtwGNefVf5FeX9hhQ2t8qBZMfKCVbRM1pLpAxdHQeHzePCA9CCiHcq6KcerShYQ282JT",
  "key10": "B6PCWDZr8uawVhitah5yphY5EXa2Do8PuxaZRNxJFAuMsLEsLuMDnC4vkgwQUDrPtiohjmf2Ur1BCp8s1LKuEjn",
  "key11": "2XhbJSs2Dvp3j1XmdCFfrNvFE67WZJ5rS17NtA4rjrHMNqEdguigt4wRkYWnypQGXf2aYq8Yzkuvo1edZvTEgDMp",
  "key12": "2e5rXYD6meRjnRYx17cEwtxUosKmu4k8aPF7WB7HZJaYNHzhjzdVKgGMrnbHN2nYM5Vk9Dd6ugz4tZvoNtcMmFh4",
  "key13": "4jfxPJ2SUosKeMc8Dd6iFX94hzzhWuESh3TpDLGfSxL6DNS3n517mEaBtqGPY5XqPEtW7jEVXpqQ4VzcBWNzCTM2",
  "key14": "WUHdGacE2FhmEQbzavHPKHyEVjukRYUo2jz94wZJEdGJjPwMNp8G4eNMNJr5PN9Tzek1cQejcrSeTsmx864hPdC",
  "key15": "2RGeMjpXkUdsiDWZUHf4cusV6RqF4YMzRfzK1iGVGetoYff7akGGmNcT1XKnGc2d6Z42tEWhHCVAC1bBUQ14z9c6",
  "key16": "gCVXnzAzveSWLg8kqSTUjzL5L9pUAt8huSr8UJcCCXcawmoJSS8YztDcPcpK41eBWpeRHinq3gF2j799BQLHFBe",
  "key17": "5FbPZQPQWbPpqMPEMeXZoNcJ5JkBgSRb7Q4J4imSgCTrVw7hnDdSQZNc9uh7AS2h9EujG8fNDk4yoUxFJhvHKMRq",
  "key18": "2iCvt9dyQ95rqWodedtKruxP7BWKRZK4vVUrzc2N3GmZ5D46N5BN7Ne9hgYb259iig1TSK4fa3zBdALUpCCqD4RX",
  "key19": "3DDGqQT21K9SY6ommLdxWogznmvhHGmR87xaHXieLeAqys2NFDDNVBJzpG97b4bNhH9qivqhb8Rr6h4XwCQ6MRpF",
  "key20": "7c4dVk1c6g5ykvcmUju6RpdRkZiz8iJd5kSwTjAAGK73g1CLZCsDrrxndkjYdcyqi8VnyPNEFwoSjBoAWRfXFxd",
  "key21": "3miMKKMN5HSgDNQ2Y2jiiqhZRUdZy18davns6XYhwMd5zLQshy6eHQ9NsTqgyqrnYrUyMHjqhUxbsnJRdzEohu2u",
  "key22": "dPyowu9ukXsE4g8BnHreitGR51iq8DFgRSmpai8PrTDdGnwnsmJhacn1c6tYMM2npuQYZzmwcdJesrx8Zy51acD",
  "key23": "xmStvHDUoxj6usmahFZP81UB4XKAqbhYwNp3q4iQdskp15uLNTgidVbsyq4uQBwmGsRE2woPZFTde9nMNtjxUqH",
  "key24": "5z5LLZSJ9vYLoPeajg6qpoRSTWZLxVZtRjawVcjBD7xUcarwJfL28QH27AtAGRmgRgdzU2t7opCHLzNF8PgJdxHK",
  "key25": "JRhbzRJzxGLfWQA8HmPZH8FnQQMkFucGov4XqVAagkw1kxUCwpQ6k4r3G3hDHsWrhPWa29TooENRHGjz5Nzp1U4"
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
