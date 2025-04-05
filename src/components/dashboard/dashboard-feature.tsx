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
    "3oUmhf1h2X7XJau5jtPFg7qEFzqM2dSSgtwURTv8kg6zXrNKRqkT9zt6i9f1e6M38xvGqEiTCxMgcHKMJUs928Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGdFz1uiUP8Kf1y7r7gXxLbrHevnGgPWmV8255gcLVde8cXEP321iqFfsPeZfByAmvv7YaSQbEtutEMEkPHW5zC",
  "key1": "5Tax4ryiEi2CAmgpUa8nv5R7RPK6NVSTKjhYi6KLskup2ReT8TRvFfMg7a25mpdL1uN2PjXeTtStLXnFBNk7AXGe",
  "key2": "2kzcRd7QdULyN4HzEJsPUv7iFPyGBgxnCQR6AXS8cBjLTGBc43jcSFW44sPsX6LeVQCxjnDoVSZs2ovYwE3tU4oV",
  "key3": "4yLuB2N2pBkki5KBb9YHhMcQDvYnRaQpN8Hu6W673L8SFcSngLP94on8h15tet9iWW7KiVQMfS3mRHaWgQ4gfeGz",
  "key4": "3h6wQNKsoMuDJoHSQDjYcz9iy8ZtciTG4muL9GDoQMGYSMDXUqEiDpgCA56pMj4ewXwBpUNM3XYdCihx6WMVvyG8",
  "key5": "4hyFQiXpc7fLZHJkwJEd7CkfM4D5sJcrfXtBbKEZTvkxzhdnkHkhYBJCERVYHJwA3apB4Ax7G4t8zZrtBJMXxHHH",
  "key6": "KuPJPL5UZsGVV6wbXgaHJuZCn8hCKYzrMYHk9QbYu6NdyASJix4kHEpf5kaXsfRKE7ZC1QU5HKCNRoCQEt9Kfqd",
  "key7": "2cBqTGgmBTvCaNpoz5QicopEz389kdFXKxUBUCUmyXHJGFh5Qv5Fjhn2SSAj1AwFC4mUwrtB39a11EH3CFtQKEu8",
  "key8": "4sE5Ld4dCAWQjbc5xgZfkE3KAcYn6AdznrsE9QckaADHTqENGeJoyk3vUNg1fSvezyG74oCgptJdLZTppMav3GHW",
  "key9": "4EUVet1SspdjM2EhvPLEV7fqcyrptPUMRrk3QBL4HXHejd955Gp9XujEn8fKEmMA95yfcP1ABjoZWtnuWENn7FQN",
  "key10": "Ckh8qW38WP9v1Q4HzLpSmBmFN7qqxZdVoNcYVF4VFwEUM77z2Bf5dMktZQzR2T86qoSdnEFHeteRB8tDVbPPnza",
  "key11": "5BHxrUA2DRMAFxxLSzZnctfCCBTbnFG3A65HzvvBTLheEcnPfafgtq1x3y8WFhkAYTL1Hx4mNKM7A3DoxdRjrsZx",
  "key12": "YgQoxgRkJo9xpScSv6V4xzkFC2TTai4RNd6hv6rhK1dS2NWB4KtQH3kK6YnS3p86Y69XUficvbv7Mm88eMRPKtN",
  "key13": "5n4L1XCeheoAH6SRRZaLPPoh6BbMpJnhfUPgrcahUUHUeDtYiRc46hZrYKF1aPN4axeuPzKEpXowe9Yw8qRPsRLD",
  "key14": "5zg8CTaWomuuPHigfjwGFb2knd2K6XaEH1LiE8q7imVLC5qoMBZqH85Ws4Ru3NMHjVecpXZ8tV1pPFSVU7F98UK8",
  "key15": "3ZLzNrzg8e3t5BxeLZVLSVLwupvKsb7HhVDfGUAvcrb4QrMhQq7R6R5HbwRD6J6Vx9zw9pLs5FfyGSKzdCzatPGX",
  "key16": "pEWU4tvXbYUa384VKmnkYhb9UyW1hb4NPeQDaQ6TjJNR19UCtSY8iUPxdVUVMHXEwCjbYowYcuNQhC9Tieuam69",
  "key17": "5duWvhCVe3rtkKYKmJajcoavXWfft3ognh2k4iTSq2wY3x3sjyLf29kHJXhYEs9bJhxDvfA9X8YQtifuQ5wpKT46",
  "key18": "Kw2AosL1waGvKu2FKM64ujq9rW7MUAcn78xkuZbpyr1952WUP69m3orG5NM8MbZ637VqwzbPDYUvVwhaGJyBob5",
  "key19": "44mwTJEFydjgyUANhNTYNwbkfcd528XYmzczCSTstK6C8qbeWs7giE3pMHeboVWhUfiVfaHuoPYDW86DNVF2fXoN",
  "key20": "bpzSPQFyGZoWTvjwbeP9xG1kcq7sfQzFLYMSTos4fypawA5Xrir1GGHBwTwuEkHFq1YhsHJKntLpEfK1VSLngAF",
  "key21": "3EaVbvzkNSMSgDzf27J2RfmWruMYgFp3gvvRToLDmphDkxCveie1PS6jRYRBEwtYVXQakBKtPj2duTwLpkbRcBVV",
  "key22": "62F9kAxpR3NXwGgwKQ8KGDHzKrFexXEhkRzhLR5LrYkgd9wBRfTHdoDGzQnZUzN9rveeKUmuVdeHRivjaG5rmYhJ",
  "key23": "5zrsDqCQpQaQKrLx4R3VdF4PcT3BPbjRCngh9zCNPEHxq3S4ge45jfoPW7vF31353mDAGUGtXzUMhxMkT3GGmicX",
  "key24": "5yrfWxzNuL6JRZDHrJgpRVUoJaUsFjADr1gTzJgDU4hzZZy9cpyWfnxX5X24w9jzcSdC3H8sS3ihA7v2VTWhJxjR",
  "key25": "2rnW15gHqgYoyA9j2pFuBa2YMWBcCh8sNgq9WsW7JH1Qg8L2X2ACVnjwJEMvbD92fC4prxB7dzywcGudSsLbZ1B2",
  "key26": "2uzkHHyWnMvhU2XXf6v1gw13myACkDP6HcxmVVjRNKdS8zjyJPX57Tv8FvcgfTvVspSnZASSqhV2dtCvcpVb3SmJ",
  "key27": "5HxFrZmDeZJw722kbmCTwUWUGqDdwf6cCnZXYiJLsPtBDt2dcUoaKSxmBD11k5KKGrFrw5nMpk83yuTiSoGtp5Vn",
  "key28": "4uWvcmkZsrbhW4JcetVG97UgeuntQ7Kdpf6Qy5duBvGz3aGjABHhPPTs6YewmAWd6yfGKPpZZTU6EZxQa7J1XdEK",
  "key29": "4hrtuoBB3Yopcc5QhvvxRbeoGK6kjghCctUvZaPbnTh5i27zUV8zD9X9s2FNsyHFb5AfsznYozYt5SFe4LF3VDz9",
  "key30": "3Lw8JX76CMyHMApZAfqMszW7mSJS1DZvsKqkHYLjEENQqYhBAnRcN8gzDhjxhYYc7oBUd4UAwahdj5C98UE1XHKq",
  "key31": "58xC3dccTCdVKiRm9rbQ3GokEK1dp8gR32UipWRwXZhf7TjgBABkFmi9oVyHBGUkLP5MchYM32QfxyG6bPEeQspV"
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
