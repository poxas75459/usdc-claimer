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
    "2DnXHV1RjyawLFeRLNexQR6aL5zTY1yz4DkQeknB21yZEV6LLCmuKBYP6wGvTmwJQLhcQq8YbDxhjkAjf8ebHxrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LaL3xEFZA52tnWm8jg14yt3JfahPTeWTJ9PsGPPKA1Rjg59nBUmxNN8axmsveFv9YkNSg7JRLNPFSUX5jcEkd47",
  "key1": "2P5X1S57XLT1N5to7B8MvSFi6EhzoaJKZs4GmxeAk6TT8anyF11b1cocHGuqmuASxmZCfEW3gcf3d8N9c8CPsSbR",
  "key2": "4E3i9X4xgrEry5LNsk6XjL5dzGSBee8BPzAVWWq72puNFwG8JiP7tGtxm6KsopoETVPH2ZdnXVDKD3Nuy8J1DpBA",
  "key3": "5USq45nqhXSGkP7NUCLX9YeZbFoYLykL8Suasg9zgaJQ1p7xCXTzBbugKNv6Tc6ci7KqpArzvss6pF6gMsRi4XqQ",
  "key4": "2bFuxsJ5x3UtzGB4xB9WkUFGPShktXPZXffXziy3f8HQx7FXvDTWLwzfSbwBvmXLnTAuBb9J35MmmLNm4DsayZeN",
  "key5": "5VSTnSNivKvnkjncW1BGiLLtwU2kkTpzqyFcjDUGVmrvAF5xjbGg58ki9iyNC3kchpQ4ntCz8HyeX2grcr3HBUjj",
  "key6": "2GjnjiHrnBeaxzLBFGuXdGhGmntQ58vS3v88SqcS8m1S9w58rRJcz8xZgcsrXt64Gi6zYsHqvSLJBpKc6SrJ4v5b",
  "key7": "yPnQTXcg5LBhEqqXR8AGA6NvpEcyZwWrasPgXnkhuPKeoRw7YQSY6576ttLivDyjzES1DUqYsrkYHb9unmLGHX3",
  "key8": "5UvFah2gntzu95dPMh8CKT8rZoZC76EdYbZpFt4ne4AXrC46fwaLBEmagD7rhZaRhmqaXYgKnQ9Qu5uWTgdUsXPp",
  "key9": "KEHcrWEPb71vf5obVFNA2qauUCVfaDRf93juNFDiZuWaCfYR3JJWLG9xi7PxkCAC87p7WQikMzKrb2Q5ZdS1G7a",
  "key10": "2YGpS7zwk1864832LdkvThGoGXCDytLE9c6JMJqm6xWMAt3KhRjM2eArbQWnSGc2jwi6yBPWtSYREuxdGRBrvTHr",
  "key11": "2RW47rek2zXQGabmf9L91s5fFyJxk5ZwmDgPSSkJ329sSRosFm63VsWTekJNeL86BRYb5MshQtCxzcju88x6xPCQ",
  "key12": "5R6gAtvWuMSsSu46dAfkbofCWiCQJoc83da6C5LFTj1gGfEbQ3J5XPRN8LpTesbM9H82J37sNxT4XGLNEU1SBSg7",
  "key13": "5WGb6cJCivAdJXrg5FzZKM8ytMwc1ujbriFtNT6UKiGTgamhdgumhgDKfmUU31Enr5mku7wp8QjVNK2yy6DqgWMs",
  "key14": "2VruG8KBstc3szC6pjxZULWDtvSmRWHUAmwPTCBnrTVpdxucwfpkwi8MKtUeSr7s5YuLWqjSV38pSDfvuxR7wedA",
  "key15": "5X1c7yHg4974yPmX6MWwjFEvwFEC36SM7naxM66ufMXNT1Y8icyuKuehe5dsBB1uoSvU8eozYopLdanaBAfKrQz2",
  "key16": "3JtYh1txiPBYoboMBNJQTzUeEihY59XFquUVcp7j1KTu5f1A6HZ6HbfQZtVft7MVs1a4pnhNFEaGX5j5UxHHRPs7",
  "key17": "3w5bPAmazwTjNChBA3zg71mauupe7kZzEDtumw5Wu9ftUhmBWEzrcymAV2PXEtvAk7i9Qv1uXDdqBKuZTtXoGcvi",
  "key18": "4XTmgHG3mhoMMUN7JTPrJEZAqSvdDryT4R35gGth7gtv5vKiCPLdE5JcY6nfkstEC5rSUef6XxHx8pSuMH57AXvX",
  "key19": "3tFcZveU6DKWisDK1HHeUMei837zhhtAW2GsFChH37UijpHkR596n9FYy47KRZSsE6FQ8Pc7ryFUDLZ7bGYHyzje",
  "key20": "2sAk81xD3UE5s6KSg1b6GEZiHG1vQrdVrbtN31QkTwUXLqvzjtyXx9eduWvWoBEdMttdDgwqm7nR9rFew6Z7RuMJ",
  "key21": "46P4aDzUkCx4ZtF2PchfyGNEQryGL7eLBS3rEhWTivejcJT5326Ap7HBni99WT5dV9iG63RLY4obsXhsW5H9fkA5",
  "key22": "3bjfmYWfjQCTZMEzpaDVtn7fv3LWcsQxguECaecfB7rFqe1vtCvNuvGcpsvpWBvxjjELbXHvfDC1jD9JRoNiKhGT",
  "key23": "5wYnjpHjXzgQLS186nVTF9QdLEBsx52yJavMs4qbY3diqXa2gDTywPtHDJMm2SM3cmbN7oKus5L4DVmJe4qP19zK",
  "key24": "3qeNoMXQ7axuqAfc244AZ5uGrV8UZkpHKCJrby4Ra6v2uZoBNvdsaviq4gmjdaoW5dYEzq5VrTnmmXpZs8As1e8W",
  "key25": "4KLVG6FMPEYx9xqPuaiTDGy5wBBtG2E3D42bYfFH8Lkyj4wYWJqh99FXx4svFxs8c5MpPz78GHKD663Pug4q8uqw"
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
