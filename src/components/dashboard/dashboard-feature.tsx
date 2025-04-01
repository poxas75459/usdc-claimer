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
    "3srVpP9skbgzwsE26SZ8rRGHJz7yP8vMYUSSUhtEZnuBVpYDyqym7U42AcyBydLUfWGru2TTikTyQQuFSwqiN4Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sU8Adbo8E2J9fXkLdos6khneQ1GsbLRtXNCeYfBz1gni5abgCa8C3jwtQZBux6ZMShxdyDrvDbixudkpKbWDYx6",
  "key1": "51FEFZhnSSqsgMpC2txS3Dmgd5nn7thJhMARq4meco6aRESt91xbnD2E5sXmJtPiTqEMhvuHWfaxxSvcKaNXhby",
  "key2": "241Do5XPs1DSgv3gGw64UrCd5t8ysfBQEQ4KuZBpSoqhBUB35CyF49Bn5LMTMY7uwBv7caSqMETHKX7iscKwBR9M",
  "key3": "ZWTVdUFBSbEXoAdZiUiz6G9TFacbhzXUgDp7PhdfUwwdU1agZTnJ7hPBaLHgJ16F2NW7mtpqYdgsqKCXbgBvLKa",
  "key4": "4E82oT6zPNzH3NSGKEZzJPfTWwViFuHKr1ybjtu1nFPLm9Kf7hwGRw1iAjhGKadzetu2nSRWN6bokPAk7QbM647A",
  "key5": "32PyzMipXMTenVsfHBSFkYLafWDsNdSk3UHkAxwtiZS3NZCh4HYkj9Ax2EQqLz71HSaqp521xMpJYQF4VNupPmUg",
  "key6": "4hMvJ72UE8BUZexr1oj2HUi8CQ7ezMx8PLeb93a4tLPbwFTsMHGoRC8wwGydMVXapmTfEPDijH2i7rXnZTi5Hre1",
  "key7": "2HgZhYyud3WEm4eCWBg2NwUN6Z1u6t87dvEq234hCaiRGdWRonzxPfHur5frNPGnPMDG7WY6qj68xsMXpVXkiNGY",
  "key8": "5hZicPH4GccCehdqgt2ZFP35hKYEEYGm8BUJ9bcESQgVdQD4uE9gmADHeWxxYAARBPkUwq1sUcCRtZuE2bBJDjhJ",
  "key9": "2xDur7Mvq5LdLzYTBTwgBze9KEGDTTqjm6aKbDudQ7gpJwngvXdrYoenKF4hW58kiFXA72V9cTVQNmMgFXYAJYzn",
  "key10": "3JRxiYZDbQbqtJTYWbPY4rVKG9HTi1ZnUqbwRBU51RuuLB4qZi9QfXHQJFcmADPmjvUQuSwcirVq7NfAWSM3ae8o",
  "key11": "3HMqFuHcXw5dVvukp1Nvb6RqGr3DUgVQRDHnEwSXosMAUYD9FkCTfq42vJUwsyt9diuseAqi6W4M2CVUdznvJjrt",
  "key12": "39bfYu4faFPujccU19VGWMWA8kgwVmkueaMvbpnNieusWuu8obVda2NXxP7WXLF8DUmyoNJGfQ5hvMgLVUR7X5h1",
  "key13": "4mwRi6wYjArChsYkF7bELbymAhKZZocaT1EZUAGRrtB6pCwboJRXwgyKM3j4jcJL9YMTyRq1nayqaZsRrZpR3g3d",
  "key14": "2diDnju8fxhtQDWHXSQGC44FtGPNEsNZJueoRXxgR3anV4DLWWPRCdg2rsmwaGJKp2xv22Ximb3dQFvYcPyghBKE",
  "key15": "21WGbhW6ve8YCQbX7vzvvZtwj6WF3f5vEPSFDUmCWJ4zTP6gxgf2kkEDH5Mc8V3S7RKtz8NrhaGZAxXj8jWZyiov",
  "key16": "2q9vHq6jQN6RWDofdPKBsphJPUFwMbgmAeRuZ9y4kgDBCuwZpjgo5yyswc1AR8qp8ijoXaLHHBAPjtaKGpgC11YU",
  "key17": "3PCyAYXQBCAWqRQPzpxRMCNMF7zp8NBWQFt2BDAx2K41iyHLbyRrpGLnD59NuaG9GecPGGqzUzxTb7VH2s5RaMTt",
  "key18": "33HG2i6H6BaBH7mjmQpYuUBmw9Xxqy27iV7b1yFs64CxoYV7UGUCftCh7J9H5kRawFdPj2uny6qd3Wz5koD6nRtF",
  "key19": "4oT1tpQWJRzLkq1E5qE9D2Nq9h1kx1UcCcaX4i7QATsY4A3Cn4kTiNzJyNapWLpGg4omDrjnZsHNGb69yP6zvwEo",
  "key20": "5TfQ5sNfEsoTnsZmjwTvgBzxizGxVwhMTE8uhxbtUMuv86Tq4NHjWmhArt6ymWjy588yzB6kBye1iAYvCepwsnC5",
  "key21": "uG32XiT8tx4UgJAByYsTiWSd2RxWTbhVD7aeCxiCJmjmf7ofLqvqmMo8bbNCvh2wuoNLVKB1oJChu8mmg1kSc2k",
  "key22": "4JQuKeM6HEB4QvuPdud8fb4Pr7eSUuB8LbZ1jmz7SghbN1TKmqDg5hN8S3PXAYDfU3fyoyCQWQMexAzMqpuGyS3d",
  "key23": "5zJmrPUxK9MhJQQnQq8JLeo3dTtKko9ov4Mtq5JeGk4EMpwGK6qeupwbVeNmtjSDUNJ82bgsZuSMVLPk9A3c7LzJ",
  "key24": "2KaqFQzzcihHKTficQH43DFfbtrZx5t7nHZoqReVLLprYm2DHU9DDNw3jBTA8uZEjLWirMzBkeELVW8W6ZiDsefz",
  "key25": "oX8ELgXu9FEYqVB6aCtTBkyDkTuvzrJTeTK8nK196ZX7WtLeDHW7AG8xfE9W4oMsPHgcEXTH3qcQGLQeN8Z99gr",
  "key26": "4LVCMiij3XaAeX3J89CLKmuhaFnK9EPWXDm6FXhPViFkh9LoTsMN9YRfrJWbWZJTDxYBMimBguuDdGAq8c5wqsPn"
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
