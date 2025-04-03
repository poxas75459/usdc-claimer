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
    "5aWBmBqQPSwrvSbJk5AsevAvSpx7K5C5oCPXLciFdeHQKZDDZZm9kkxC83FL6se3PeuhLf5EdQDxHRCsCSrJHzKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4taVMv6CLGhRW9dXxqS2DWN1SXNpMfBJnr1WX5ETpvDJmVDXbzPpSvKMMG38yTNFvsxYh17HkmQhGvXAviUpQRhR",
  "key1": "4XTzifyga3zy1t5scCGKd53T9bJ1uvb996FGD1Xi4wCRAX8Kjro5MeT91DNiK6yhpvfHiJccMMLQEChW8KLJn6S",
  "key2": "5XfhHbWNR7jR322K4f3wdg4Dfpei8tkdw8VapDTPKHGPK7F77AXDrZK5cbmWv6Tgp4YUwcSejJHq3Fi8QDEXsVyq",
  "key3": "i2ho35WGhxumhy66AdozKT4DKEjq3uYNZJxrEbb6GsvFckLczWyFj5ComoSSx59CuLpbHfbYHMqkUbT472C4KNV",
  "key4": "4hdi8sp5RZc12N2tfa8BhPdgSyhxyMypJBcUetY9VcnUKCtRfiTa5A6SMGBbMrSRGyTyeDnxUbxg7uNrVaqKHqJG",
  "key5": "643xvmYd4qyezTdkyzJDSDDCC75n7Was5KiRGgJtvbpmNp7MLESZwyn1714oVKQkjJ1Wqxa3qiX2qiAVp6PZiDG5",
  "key6": "57zfBFstEuBbQAxWUZpj4hV1L985BGkHACWXBKRuBbiSNfoYPGNXNNHZDnzT8LKDYh8WAqgcRTsCL9SYkDdke9p",
  "key7": "4267sHo6gUJDA9fAfp8Txw4JSqHVuxXPWMJew5Ne7bm9AZGGWdgNd8L1aa414uSn2BaA9SRfrUm9NH6ofQhYPkmf",
  "key8": "4qs1HXeVRxNDgfagENMGWs4517Cwt7tv3YXywqoXtXciR9iVdfFoUJVNeP5T2Jy32vKLqtX4vzY9nVDKvnph9ji1",
  "key9": "4owUrbdETV8wDCRo3UvzHCTEjQLtmWwoEsiwHLTrwWp2X3W7W5X5GGcbXLs4hyqTVF9gFKsm9FYo4HPKZZch2TMR",
  "key10": "4235im6PdoqMR3TqBTPpfhTRmEof185aq6UMVMVFmsMzYqsGS8V6NNYD11vEiQyAmbWmHc1cffu9sCxqMNCF7M8t",
  "key11": "oLiLPsjfX3DgFS1L9TXgQqVMpYzykAJ3JpzLUURVcmsbf8vK5EanvaK83Vcr7W8HnYRyv3A5Ueun5pMf9boSL1z",
  "key12": "4DQ4KHbzDivTBQyGMsEGg8N4fuD5XpY7GBbhndBSvCeqEJemJ8Cvw7Mj3JLXashDiUe2Bsweg9CQduGkrWjPcgvq",
  "key13": "4Fi3bpDsDnKSYidPSyXU1scBeaGbPPyC5QLkpT8qacTSmU3oKpEd95e3fnMazmhprudcLEjfNjU16pPR7a8CvxAG",
  "key14": "5vh3MUTwc8QQHsm6w8dkrc17ScBMHTC7S5EwVHbuGbiyenJUG3EK5hjwksrvVSDmuVMpekXZF8KekRGyxSypzLKF",
  "key15": "2tvfgZKHy6VgZTjRYYX42KMouSmS3Qn9s6B8WSkcecoR1aRuoYdJ8qHduYZPTuaRoWqjB2MxFvFP24ZYxauy1Vut",
  "key16": "27Bet9vxdogNpCPhC1zWb8WK4MmeNKTHF4Y1rArt2pjJbqD5fLYDnPtvVnZaqweJyjZxe79d1fRs3YZxu3wxFd12",
  "key17": "3Uq1upGbjW7ongvbQVBpXLLZ2LHQWX1gAduAo6GUQBrhEJ6DRvVXLgbwCQMCCLZnvQTzrdDxGXzmSMLqaaV3HAi1",
  "key18": "66yv8jQAjWsZGHRuyL1uWmCviAz8ZY4dFHDYAcNXzXWay8KeL6ykMBdtKNWjCmaer5a7So9evV4n1mqJxHzPafKy",
  "key19": "6stH4wq3GrCviKSGUiqhLM3J9HR9wFgEWdLCReJS3b3nnwGvWNmNQn4CyBqHVpyr5AEMFbEcJwRTEpgVEtNJeR1",
  "key20": "2Yi9SQgyQuxVBY8VwJBZKqModtwZS1L5u8DG3foGno5gRErsLp677wXYwBsFTRCyVenFzzNJKUcMvCPu9yBjkCYV",
  "key21": "2RHjXo9Ftb1TXaNV9DhFfBwpp6Y52uzvmni58ChwwWjtEdw7p7xQBE7drfHrMiA3powoK3AveQqdSxGZEPwQpEeE",
  "key22": "5V543vDVERzxewN5BJgyBSByJr9noR2ZDted8AvZQLff24GR4ysVKfPf9VV4MYxWgzCHN5w75BXusP7U7iVGcJG4",
  "key23": "3cMsF2ukwGx1nKy6LgPmfkHcLvUbhnWKAapf9FMA3U5W1fcFSqbs4xDE3qQ7Bz7nrUVLB4vqsquxEgmnJarn7D86",
  "key24": "Xnh5N7qyBq6uZr9yMsp96haBcQFTe5f8Q29rqipmGq65vsNqQ8davBWdZA8h9opj4rashxsLGkZ34ws7v11WE6k",
  "key25": "2o2HhvHz1iNqkDVnxNaKSwiwGTKkGNnbhYNA4ng6DUEdwo5ouJQvW65ed27EuFxk6u218XEoXauQFvGdHtNFLF8m",
  "key26": "U6WNcrWXzRw65cD2ayUDHDhQrL7HxM3z1j4v4g5wnupJetbhfHsdgykr7rbkLFqtZu8184TPVHGQarYAaH1Uhy5",
  "key27": "YjgbVzEuttk2Z346uATmJsLvwzkpTFEt5HDJtPqYcHPUHxf2vWZHGvKomMLViUWNF4K7UeCq2eqd3aMPM1JEPqW",
  "key28": "3NxeC22UNiVZ6tyYLR4HEGWuG1PaSQW8XqVfPLFPH3YgqbMTL9n4zJEFhcDJ6vRYMEogNiA6nddFGQKWLMaT62K7",
  "key29": "47eX74znQceyKZgUzJdCRFSm5ZDWXHGYyMRUFhGQeZv5oga6twNVUPiZj1QCskrRssj9Z9hb7MMJ3Ey6FCGfrk3Z",
  "key30": "2NB4XPboFa9mhLt4pn1jMcP5ucoaRyUPjGoQEgAqtTikfkhSe851JrrJZea36S2hNDt7ekV933wCby6oW3yjKSft",
  "key31": "snkHjFfZ2VkqWRfULJJY2VnygmEDDuAD2RGHn6xsgwvtN6yG7DhiprNRjwh4mXD9yVyyQ8zUwX8W6DDHZ4cdKUk",
  "key32": "4pu7zQXYhhbwmt6W9JsZGE7ja2DL3PkdfiUCxTCZPLrhxyMmoPBm2rAvpG7koBRzp7KYTtwTL4Bgb4kpbxWnaGdQ",
  "key33": "3jHhLt4A6sCUQ41Ff4BeAJY9SmyWkzkvdcEN7erKm2V8FETK5sNeGZiBDQTFDrYQzK7hcwABz6PFcYuU7MExR8Lx",
  "key34": "4gd9q9pisPuuF3FvHjYC9rjibihFAaNza6R9AuZNX1YCi3wZVVGtoi8yvb6PXo3UDwdn4Pmu93yfTQyNGn8LzjtN",
  "key35": "4zgqEze2zDzZEeYxUwyTuuhu3oag7EMdw997hvM9MfhWxaajmEPoGPwopatQZrM7NCCLqJPT23c8bqKnVYAsv5sh",
  "key36": "9GdHqxGf2wVQD9PMLstnbynkN9Tvqmpkf6U89QmdsTPvyrgUw5YwYubkT8qMBdurRwjTyraesftjKuVT4aRv1bv",
  "key37": "tzMmYrdCYSBf5ESvwXB87NDpX6pHVtHCygMwTAymMKysEZuMBrnRAR5YLUTeLBqak8CCzA7HkTwsPc3DTENCKGk",
  "key38": "2PQgSEFEmkeEEmzqwwz4rwrf5UvpJEHnXRVqgaSKVCFYJvZiDWaZLSDbbqJqy4EwtDNPuVLxSxtjwuBE4JwpJjN",
  "key39": "FffHoYARMu31KijUjS2F7BRLyxLSc3QvkDwyW1F3S3NqDiefm6yzfZbBEvKGuf6ULcCf4tcERSMNYY7wBsRNvKC",
  "key40": "4LFh5faRPXzeaivk8BjvMSKqZ1T2EBEXZmUkwyJXDyDj9FBi45gpcpwe87YxGaFoVXci3VxDF7UBdZEeNgEH273n",
  "key41": "5EuHwGrirndZ9Ac3qME7GjKT9LnXkQixwuqHkRg6WLk8925PJfn6QnmKcP884stcUW3duoC4mkwNs81oqoz5eqkG",
  "key42": "2uPr1f3ahkFuytRJ1Ng3jNGhs9unUrUBPYupittWhmq1Bp2xquS7qh8UtYz4evz5ET3hcvq9JjPn6rohvUoo758s",
  "key43": "SgfREo4pxkL89bcxP54yRFzrHkMkp1Lno1nXZZxE6oVCb1RFWgYDuDpu5r3ZGA1vdAjyi9E9R9BKZviVybLgGSy",
  "key44": "4DnvVky6v8ncQnuMKKXTb3hXBrPFvDy4tJT1UdUBDpbET4Qz1EkSJZ4rbFi3yRBV6K6WJxDHqiqdKWRtWEwT5NTL",
  "key45": "3fEBpre4hQCswoDvCx6C5dii8z49qoUWBqaBsAroTNjG3GKsfoAugdqLLJzbu5YDEHTXzihC4AgeG1xjjNNT5F8U",
  "key46": "4WzYt51w8LbZTpJ1jwuYVjHSpU3KSz2qbnL52D7cgYEWsMwmLMcQRNCNvzJ8MfH9Fcp1gYgikPnSAsNa1vBvM9K2"
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
