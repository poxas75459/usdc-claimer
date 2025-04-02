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
    "62wXuZJ4rJpivLoicfAwNKcT3u5uiafPfL57G9NtiZ2Wpv8e553WjQJ4EC5PowAXKAVCJZYoLfk4L8RjSWZ8oDFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aUGVo17FKgSre8jzHYsherqTw22oSJSFE5RzTPe3qJFNZFidQYFKUV4YANZycNtcmuJjkE3FSiEiyscpT78p31E",
  "key1": "NosA5YdvkAsgQ9tDqhdTSpS73APjysW6BpApHHDX2kyfQD1u1B5PFNnSnWpUCVEV2T5wUpd3XAVAopzPaXYTvAu",
  "key2": "24cU6ENqYuWNNXwGn1XKZZy3YWJoSdQA5M2yx4ctvWAdoe9p7cQB4iGQ3mEJD2tZtQn72KMD49GUV1URfUEs9MFD",
  "key3": "2Hd3CDyNKPHZxiemTf4CuN53L3ku9tbeHV34oSpsnNjcXDWd8QYJ9tdnp5B2u8Km1NKUfd52wjH1QtqbyhRz9GW9",
  "key4": "2gt6gMJ1ieCYAVpr1N7QhmozNYXJXFLsfEMPAwfeVDrnYg9Pe2vLKyZJbq4tXJieb9i56FYxKEAMo9gsi6XsosXD",
  "key5": "4V5BLbg5FMMstdTJpcbLZRr56pr6n6mZzj6RwJrq4LJBTtiW5Rgy93ZN1CHyhzUuJwkx6Rdxt7jgQQsKdFwtVb2c",
  "key6": "2ZisB4sNJKmFz93esuoWme7eW6GXhKHpzAPhunfarj7AaUhGniFdq3D6bkgFrwKVpTfGd5qhJ9mncKFZSRmK1fkR",
  "key7": "3crrFhh7J7MXKCWihHaVZ95uF44qiWaJ1t5WH6vrK8NVuyNdg4Pqhqt5ju8JiFC72oZMb9ywiwEL1jraDvno1WwA",
  "key8": "27vRReskHGJkkmXudv4WS1iQxR8anunSHH9Kr3zWsTejkJKBfM4EAdLEpu9vioNdHtpsXz3kdCh1UGJVScvdfqZJ",
  "key9": "5cwzBZMdatuH9K5tqgynYGQzoQHrZCq8Xb1erFoJwpJn8ZEQQ2pEd1mvGejhUUEuorSsA8awJDgwM1uLhLw6K3ST",
  "key10": "2tY6rB8bkNVtKr8qxQ25yyb6onbFJ7ATWjTQv55HWhwfCLAkExSjr1HNUuWKNjyGhWsTxXEB2uRKfdiTDSGVzFCg",
  "key11": "6tzo5pwd1SGePBxK9trEV1dkdXBwFVDqqsYfQfFEHrVvv3cQbXhi5PWYoLcLK37FonmkdLbQ5yhupTdAXWd8i1h",
  "key12": "5M3C8n3sgJczfCURDTkxzHoJy5UtSgF5oi2hL8gXNro6DadbnCQXYKcBLf7vraPQxdFXupWLGMD6sCRLCj6BtNTV",
  "key13": "HuLgsc5DVmfgMis8WZ4TkFHxoFyjuEvVquUVATGWgBL3DQRrBrJeyAwdkZFoKR4XMhtYZ8zCb2ev4yvagecCRBB",
  "key14": "4PpRy4ZwAgknV9PTVLwYDVDupieJzxAikKH1iJuYvhn1mfxFQeM1vpwQ9z6UTeWGffAftd7XZ1fp5qCGgJQA6rsH",
  "key15": "3dMG1ktLDWKejM6bDGdEWT1EQGm4DxSeksfMMp3ae6oMNB72LQZMkti3WKSodMm98DAdQagxuPEKgLft4d16iS9R",
  "key16": "5XyUMPYdCL7hJ7LHxgHLGCRDvGD8BZMEMXNQPfRh6UXkx1Whi7SytRPmgx6vKBVihVbbwTAtjujG3uruEuUTruUU",
  "key17": "3fUY1J7xvcgnqN9QHkoDWgM1BAARLpYcVxZrJwJNtB6mudUwSnUkcNEy7FppUvGfyipjF3F6tAAHXVwbf1Phxr1d",
  "key18": "4aX9wYg19qc6jcQjJLHFtwBpd2JvgynpGM77uhR8xKvCLxuo1YLb83xwzo1gwC8c2ajsVzXvzR6pbWoxxh1b3PDX",
  "key19": "SHk8usyZur1i7t1hNNUxifodhn7odfCj1C4FR8sf6S37oeUSL7GaNcARxSdWUGvwSiodDv9Gyfj718BVZWXynuS",
  "key20": "439mkbG2L7bXQrM5FEix6eu8RuRneJzHFLhjQJ4JA8RiwuG3sCW9B3y6DPi2HWK6iEJViTeN9TAoxUuESpjpUk9D",
  "key21": "3RLVxyoFj94bZ3ksoRvbSUDoSZvLG7p46PUtZFaHPmrxyf7KNBEHcUZk3xNuv8pcdchF5WN9PCGBxuwT6SbfXM4X",
  "key22": "JrqnNYVxUwW7jQP8QbUFAzUWnCfiNorkgEB8yGaA6cTwVzJJzsWG5Ep83UugAHcdc5zZ6NK76hYf43UVG2uPdh6",
  "key23": "2nnR3T6YTFvCuwniaDGHo4NxsUPiK64wsn4Cc3djypAx3w42sweSpHJEckXpZysFj6z8o5gccis2eSu12dv95ekK",
  "key24": "Dz1Fs55EnjtrnbSKkQg3jdfo7cNPC6qDDNhtnMaMuGguL46QygnR7HHzBaw4GU7WCAeGpPLKiVb5kCpSxpZQDkx",
  "key25": "2o2TrxzTqrk4nt4F3UJUNAD96CvMPX16B2QBexfPVim4sdznwv2SkQqZuqqS4xowHQLciLcJJvnPdw1aAhw2s9LK",
  "key26": "4yagu3gQqJH8MEUcXCQi2PbivNN6L4U9RowkhJr5tBf1jBwmVXBMeBpMZJX9iPTTASt8YsHdVUbmhA1Nkf4zddcJ"
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
