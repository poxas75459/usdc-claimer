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
    "2RmUuaWbMDv5nss211JXCz3bgkPgvqoZxikbEWBGaPEv7Y3QnJS2JEmgDjdoKAwGPJ8v6GLeYpwYrExzKdhQXjZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oTjXHYeGZbMMF2A7NmiTHm1Mpta6okPvo1Wck7fmQvvSHdfCTjeTKb3Nni8jihogfFAUzKxfV62yqTExAA82ZF",
  "key1": "2wmif1jQWmCvzhKjduEed1bsnapL16nit1Y9rKRK5aE6tmeJPuVoPzeDqboPcJmi8wmSf5Dtgq46xCMzh5hdPN4y",
  "key2": "3DwThB55W41W1c5T5z4VhZLc1rJKfkuZPiZGJoBsSFrQ9n2xSdYvgRTptow1THJivJKBUKvveTqGK5sfgVxhigfb",
  "key3": "rTDgcWAq7epfLDc538Pv3vYNfYQzqfNHNA5VVSBiZkv1ZnNd2khYkMkBTB3FB1yhgrnTbeZUnZnx7MSZJwLpcdf",
  "key4": "unJ87egWC15apTaU62h5E5Ne6SFEVWitzHsXGMRbLK8MefSrukttjmcyrhei2i4J8fm2zQP9tcWoGKwVRGneXuG",
  "key5": "FJrzQ23HpXGXTFfGeD2m2WWoyB7QdHyfPzjoSr99bCiVaR4e7kS9F32qJxLg3t1AcJ2iKCGZC39jb4V528E3j3C",
  "key6": "2G9Q5tMEuj9EU8Uq1qKk9Demt2grw3tMqoWgrEzwb8WecwRaSAizvKfodMNzXe9qiu5wviCb2dwvrwGTTdNuKJxF",
  "key7": "hpKgEGzqDHVCxdxuiREWoUff1sw8R1cGir8PUMFnPajcgnkQNJEhz2LmDsmvBx6WRrWJqqm7LtFGRty3kG538Vy",
  "key8": "JwTUv1gpthV2n1Kc2kSaLmCQ53zRZMawX4eKcr1QomUrP4ht6e9XMgz65aZswRgFDXFNyKczvpp3bZn9siaJvVo",
  "key9": "eUHzG6x7cX7esPQvKMMkzfB745DHFSH4yXtn1QnNTQfc3iRLJ6WWA7oSbGf6ysw9pSgWtsY9tUYdrQKLTrNMmiK",
  "key10": "uAFRkhwovzFRcPsoY49fGpkhHtNBvKuNABxf9PjETcyTvQCTnqgZCbQBgNSy8xCBuy2pPrcikbthTFUifC91dNo",
  "key11": "3nRGJsTmK2tnnKxwpZZ6MZPEXezztkgxNu2Qkir43eaigKfmWPufBWGoSQETLrhTyZ1ctC14hSKFmMh9rC6TFSDS",
  "key12": "4WobbENBb3NNkiKoznzBB1fBMEWJL5ThAQxw5GzmswKEuvvtwesJChNgBtJV2p4CvFY2UjEmCqVvqo3ZKiKwvzYc",
  "key13": "21F2ZnC6uJeiQfnA1QWB7szNbgC8UdsrUkvNTuQ1gpoNWPZui9MoMfZJRZHHh5NKdZJiqHA3UdnXhsymRx9Y6jR1",
  "key14": "5dKLDyZfNduh3YqM6x9PDmwB2vQNWMrehKKtMV2onnxpvR9ShjzEdn6cZXrNHzMBAZBmQjtoXhvnF6tSnFHkaSeT",
  "key15": "5itFLo1CpbMoDLHFfBktaf2UAyPsjDgufwNpuhHUEW6Rjurw53UvuEEdTj7oxsRX9TCEnsRTGmz3G9gdDN3qesMf",
  "key16": "3WVNQxZyHDhoabxxxiVXmPWxVoTi9BMKW9PK9HAUGjBd9ira4qv613txRFPMVK24wgvvjC4LKfWCYtKJvgNXLAu1",
  "key17": "5toct3wzrf2kthaem7BzKm8VYsTmZT3y9gWvXptHFxnURpg55NDQmEbWgfom5qYpXWHycrdchErFxaBJQ3DC96oF",
  "key18": "4FGwwtXjf6fCVd5VpZED2fkEzKE2uxEGj2NnGuj3Go8jpgWQ6KrhGMNmry9vf7c9tyTVezND9pCnVSkqUvB2H78T",
  "key19": "2X5eQtBXhtB4rRGHvebe4vDdpPGn9ziL2V88kiTSgQWQEnb6tZkkNXpLaJFn6CW3U6yS3w1o1NuhhF7fNVMESnuU",
  "key20": "5tZboRkiVf4msxKq8q54wsTCKwvRGjNBqwkEdP7ZWoVRK3cW8htbrAZT6e9jeRWTYa6SpMZKc9cyhrgPuUagz5BX",
  "key21": "2Q4nhASKzvjixRnT1uEtZrh75MPHvvobudVNeQ7AfU4huQxFf3fheSkcfAvPa3MjK78v7FrPru29bBRE1UMdLnhg",
  "key22": "3MPLP6oVTmSErQ5LDorGyarrRpFfobrUrzMrMrbzKEJNkbkBj1aiy2rdUd8ux3yuukyiNwUXWdMiDhkP5HSmDwLh",
  "key23": "4dst74Pf7iqa6FN8AP3CdbGtrZbi1kSPKr3RLX3ne1bBnr6pVLKEF71SN3MdS4K6boDX1jxdCTMcwDd4gA2Q9S2t",
  "key24": "34YKiebHvDPKMAt5J9avXPG8M8ijmF77P5w6YmpXRJ5iMcsn73PnN1kP6EUHCcBEuYj9mPxZmj4K3rdAzce2sAc6",
  "key25": "4NobDiAeBCVj6hfXc5H5V2wtNCuBfSUhHweX2zDzf7cFVdhBMx9wee4DFGeD3bKfYRcxSg7hBdkmeRqfBR5SDahU",
  "key26": "4W27CtKbjjUoJeci7psaYZdQ5jpCmiggEJUkx8RwrBQ2RADJjUfiHvmUmHGm5M6xF1WJBLLUewFQnRTH1B5qGsWP",
  "key27": "3rkmFaMA7WrL5mqjQkJytUa76DVAYXi89km9EkrKTKVJvyN69X3A5mHp7y69LrG3itkZJN9bQBhYAbxmmdJkANTu",
  "key28": "4LfzTQpkQNepfZ6TWUec9R1rFGwZXQYd9Ct3yp6X3Rzp7gXEKGtcL44ZtLbnrgYxKex3CEgx3xBVciTDm8sLnY9g",
  "key29": "645BYTAid7rsQS2brpiNN4EEzAau9of4HuiVAURaXZG9WZJbcoWFqWE836TntAocZ89ppLbCQx3DpiHY9RgNTt1F",
  "key30": "2zWcaTte7LRf9B1C8Bk3GCdhhDZC473yKmWJbL7Dve2kHeTnTQcMgnourxe5qurFRaxjiJASES8mGUi726jVZRbH",
  "key31": "pitPJYWHAapbYSpygyREFm8cmF97Rq8ZF4gDXKdoTD5iUjuwatEZwWmACgR9gHyA7CZAqULvdPW2Em5fxdNW3d7",
  "key32": "3J3jvEPr8PQ6u87icV8P4abAdpQzUTswqPra9XnZMitYhSvkkkuR9FrBsqhvB31bapAeoodvDvCoCWrKsy2ySj4N",
  "key33": "TNGosH63y8f9Sa3srDgqn7W9mEudCvrnqaVWcikQrUMQCn1Sez5zDgY6nhC18UFjKcf9b2z1w6j3PJyiDCeBjmp",
  "key34": "2VfqtsyEpjmqiz1B8hpYjuQ3yUY4961vqa6VxMwJdCoaZk27Lh9jCy65n4yAi8wuEzS8ji5KuA4jfUJWeKEoYgit",
  "key35": "44ihiJAw6r5zhMAfReyBLXApJfHuW4prLSw7b5R9qrckApm13HSXzgy2HR4V9WPdHqUiSwYCBSayk8QCq2Bv1JLV",
  "key36": "28eHNiD8TDxoQ9pdVSVqb9y6TJqqdUw1h28WZ94ga9rytn7Gypdu7CT3b77aos7CtPdH3LFe8MuPwjaQD6TbaqH2",
  "key37": "4KwBcu4rjgA1HL6EyLstB3vrZLiUmYG5JKSXj3rfJ5xFg2SyThv9YRYVQ8zNKZ6gUKbs2SCy2T2dKhh9wSB3rU1C",
  "key38": "5YNCijRuKkoWFMv4PRtxKNpWLSc6EtF8Cz85rh5XCtFpig3HUhrLxWhwNM9VSjgwKgciYnkdhsS9cFi35BDvX8GU",
  "key39": "24p5iuSenJxBPRcM5zujEepnGM4HJAVhW9jVYrTcDiwKWKmXEJfYRq1vuJDtgwe1CcBz8Scatr837LYeQonRYzeE"
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
