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
    "5eAAB6pqmmBy4txt2NDACn1ZpNuZcPuKWxySVq2FjzFzBZy1vK3Ck96n2ozXLRvDhMscTA3TgLT1XRfff5hYmnZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BNNcha7RESnvf1e5F7VKAscsh9PzPukuAoSeojAtNfsi852kug5VUVQ4be5zGAGiYb95DkG5bQQd2D1dX84wH4M",
  "key1": "31KD3kaUvekRgFqzRBNhzSeYLiBUdb231EGxwv7szpygjdeqzFFQHNG5vfgUpdA3fuog2bS6Pp7SJ34RbMrgHVAi",
  "key2": "5dfi5HvQv3vXNjCCh5fFSrEqZhfGpMJMAHS2kvyL7iLrSoUxrzbBreUXDNZBNc3gD5TkaZo9QjETHCkutV3YDp4i",
  "key3": "4UGmEJnfJ8J4jbsKcUCK9DKg2kLqNx7TNKc44gJDDL4KWuNpnxNoKpWN3CJ1iVwxjpeweZx7hiWEbBreg6gQuud9",
  "key4": "3UY6fHxriZ4qycU2qqFrgjY6ocHSS1FXELDVxcfyWBk5Gjfm9TrfpV2ZzVqRWxaWCFztXHbh6zWJX9wYFsndPs7",
  "key5": "5Bjt94FjBEstktjs98eLegTKzrcPwKqZZB1UQ7XM2uycjj2Jc2vXhJUBMU4kDXio5ZuhV4xV8SfUiR2FzHD4EEpX",
  "key6": "2QU87QpodPtV6kFuj4pm9AvueX78wLd6UmKrz52er26LrecNELnBp2sgKbHYzkfd4tRv4Tjj1eStNsTTeFvxC3kc",
  "key7": "2XoW9oabfqX1ioRVwm1oCerbVnAF6FREBodMayc7u29mrxdQLSCibktn6MU5RcsEbXo9LyMdEHTFC9mtSAHrHnES",
  "key8": "5sbCuc9r7WxWAVWNMrrJYSubFVKToJdZ8npJzJWLLKFfYjvbDZovtvDg4WQmCeUTZ3RakrQ3uY2pi3VaRgTTsoMZ",
  "key9": "Vh5b2v1cS8aLuFXWwAwXBGQaCNNYRKucPCD6annX4gHjJN9pVpPMyoms1aeQmGsg3GntcHtCCtS8T3ha7dnWcJ4",
  "key10": "9MSNhVRSyGpYYkwZWu9RGT8txqnYFj3z3YA5WrGvabV3XJtWihsvi3ZwViGvwtK7hCNgdgx5JDTro66LDUtawsX",
  "key11": "3GFWNWuPc3tDZShgY19toRYthBvTeFwQN3PinKoLvJe52KcCTrxLXxWCeeZ1xrfNzFE5HvhS1ZyQRtRd5sG1hhBt",
  "key12": "26VAQuTt1ag2aPVYWEKF4FAu86LKsmCxgnbXT4AbKTtUvnZrBgRGYCpAwuWzvf421xiptNRNvJ4PrkgqiGdtJyj2",
  "key13": "BRHrwNTdmP6BRHTP4mTzZ8HBpTX1CUKfTcPLWKxsWf1sDLVouC5vUkepJq9TCCrgkevE5Cyex39CaAUwkyPqgi2",
  "key14": "378PpM7tUUKKNSXycvoyK542DhPQWqnFAzo5HW57FwLg3cr1s3mFKMkfgyhspL6dWpaZcCGCXPXxxpWMJa4h9tf9",
  "key15": "44ZSWej7Q8fLGVEpP83Vy1pzWFhk45XC7hVr8Q8ySfn6d8DcfpTjfG5hLySnjnygFgCvrUhHSUcPxriJ6z3eehio",
  "key16": "eHTNQ3xT2zX3FZWy3JehHVfbAea1Pw4VCVTe8vL8jCRGxjtCJDpNRnzM9su89uP3WkSbZnksYeNP4QNs6SiT3GL",
  "key17": "3s8gSTPHNvkBFa4zTTMnzm8TJisBaCiaRXVhLms87Nvwp6FMGi1ysJooUYDUBZy52bGVG2e5DG61D4jgzvvf5XQw",
  "key18": "2aFYEPc9uorduRJbmdwbfUQreKQ9MhDeyyLN2BK5bMRmWMHcpGEd9DJFS7ByLN8etCLgB5wkfnXUZtYqmHHc3qBx",
  "key19": "41zisf6JQKPoQK7FZWKPWxRhhWqLegd4gy7PqmTfqw5uNgQuibw897BSVQoV7UrDLjzhecWQhj1EKQCtMPxwS1Rd",
  "key20": "5BWiQiiALVBRVXH1qR5jPjY5xFyvjvLWxqXR2BvzqFkcv1dKmCe58BJuc1UdvvRoqYtiyxC28kn1XsC7SgTnqtxQ",
  "key21": "41FHxfu8rBX4KYigNRBKuhN1YqGW3G5sswW7CdPCtwXSkpmsR4yGYQ5aJsBSVmJcCxbsrnjtgexRB1286UTivybk",
  "key22": "4GuhHeaBBRi4FTxR4jrpnbJDmDtHfifkKeXwtYCzV5dw9hA1Ykn3MezkSqoeT9DBDEsLbWBD722TJ3gmpqzW5i5g",
  "key23": "3eKJyLQYULZUQeU6es9SpWtWyVB1nuPPvRKfXFNyCEAEqRj2J1frUXzSdMrPTwpoqcUyA62VNwVNPz8gR6UdYnMX",
  "key24": "5bg5k3uotLDT3tKPazqbB5X4XxnmCoezvqRSfrDpVfia6JuNahbSqVpxM7Pd3ssWT2kRHJUwrgdNSy3Gjs2RBetS",
  "key25": "2UWVm5iFop3LoLBfCun5ro1UkMhLdmmdowCXtok5JsSfvRewjXVXmycFnbeDiMdu5ii5VSEVvmvLNeW81Nv9muSF",
  "key26": "27hC7spg9Mx3QxTFfZZnDZd5C8SPsnP2ZkfAW7qxNiCLNhnC1Ny7NhHav3AawAxSEEZYNnJy4CnVFh4a3AVk61ES",
  "key27": "oWohR6nkgcQBWZ64rhkgCZsMLbgiayngyDeHtZFgtpYqTk4tWzdBoabWVFTsGBJC4SdSUf1B3gJqvKUomrEuRVC"
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
