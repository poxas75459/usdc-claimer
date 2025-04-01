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
    "4QaNP8YK7T9tDEezAKLC6HSHrciSNg3Lxanty4X9zdgJk5DFHEqXtaq97NvomtUcHuZdgcLuJtPDoV39CG95sWFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GK2uSX9VsVHE8Q4JGipPhy24PzXNaYwf7vTfWyguWhPpwbtSPrhbGAo1t8HoKgELBika54WdM9UUxSbMbyiov4p",
  "key1": "4v2eR5qL6RS6ngg1Q3NZ1oV5Vmej9dpDfP8wu3d2qemAtphvji836pBCjSTmvPsUjoSyQMpx4HzSQxc9BQfdDqh8",
  "key2": "5YmhNr34oj3FQ1GUPBsGPsViPVkcwDKbcbcDz5SWieypW3cTDBadb8NEVSFTp7Ec1sizG7T3bToi6t9QCJhf4BpT",
  "key3": "5eDUA2PeRxHL6WWqLHNJWSJoG2VdUN2vVpeSi7Ni9TL4WXbmBeJGEZL2bTYeTTM7xXPbmkTkBJvLPbTBE3gFqH5Z",
  "key4": "u8RQU4uFbnXEcTVGUH2xKw8dy7L34F1wybrkM6UsgfZfJWiLe2mqLmtVQGCyZKwu3YmRbBesKh9HW6jBheuNcR4",
  "key5": "2hBbnf2xVemmuXrktRW3PnBbsmhV34cmM98hnUj3j8oCKujE4qBSuwpFdNpniVBHXp5v6XfHJbVk6cfzmHkmNeSP",
  "key6": "2Gfxd2UBBLMigLwPSbKcUbAgREEBAFUYMYEC57ZBkbn4WLqrK18dgRMLggVC2npcGaxXNypSyRXsvfC4VBdwYMkR",
  "key7": "5JULJtRMFV76iiCVtPmt8zMrKcLjjgWnX7h7Vz5jWJraV3q2xtF66SeMiFTQDbc7E9oZ2PT5tonh1LGPG24kbVrN",
  "key8": "EnFoUGwuKgzCCHKvHaksXzqtSCvjTPaooswtcc36DjUjy3BpuWxXNdbBhJSKDxLyuJPdBrRkateUVmxUSuiBXX4",
  "key9": "3LmUJtw7Tonr95SPc2yCPvxhwJ7oEYc7zJDovXYpjyKW4iNqJtnk2CRanYB81uLBzrJvAzoTjW7gF29mE6hwikGQ",
  "key10": "3tYEbVaKCU1suLpPsFrQBedzrDQVjqcn854dA39uPM14gzPdiRXvxa8LAqY5jgKKJ55F6KGAncyERVgs4HfRD4BE",
  "key11": "4tWw3NDvSEoG73V6kJtXxHpgk4hNyDqw7Kfmz4RTvgnFcqAvQqj4Kr6F1wuCbNZG9BvrNqK5hcVsmXWrqsixCw8a",
  "key12": "2khrVVcKLMHvVLpcLjH9ZFeaVVsq3ENpny4FC8sUoca1CkWApt48cy6yp58BQa11skJehSGkZweVXJCnE9Z5pEDa",
  "key13": "5Q2dB8xVKgxxEBrueb1aEDXBbLe1aeaWZH8Q8S3nisgNCh2oo9hHUwb1j5FCGfjZtNGExamrWBwKcJb78bsmSWtu",
  "key14": "3kJHqVS7G5X9nNdQ9Z2fpXMDcY3agGip9eCCPGang3zXEXU1ao97X6yEcZuFybmBPSRnsCY3MPQofcYGXxpLV3f5",
  "key15": "4J1z8C54dsnyUb7B4JpBJ81Fc5m7NoaQbAmabmgaU6nvGEJXohhYYZDySThhL3aFA2QMjTc3UCg2sEmNNpAs1XKS",
  "key16": "dDzRpY9ZAbWHx9EYeTLu6u7H3F7GFBMxwj7by8bd367WrcHdZgzrbDy83qU2FGYp7bN4rsQpFhgP3LnndRd3QY1",
  "key17": "5BzLNcfpZ8poZqzMwcVsppofTfc2zUpmCJZP5Cec4vdZG3Nth1ARxjqMJCrsU4RFQW5uWnzJy2bF3DH27jhccxrG",
  "key18": "3Hkd4PrTaq7EiHKeftWnoSGJbSMC5BRXmTcFqHA4VKhXM3zjW33moYZdxXzy2pEtR72c5TT8UBTjtZuYkkDNdiZq",
  "key19": "5GpvPL2pF5x6HpSyVjhJK8Kak8qXe75AZQr7VRckyB9i9vQK1wfTvYrXxhA6XsuA4C2BNKSufj45bSe6wUT4rSVj",
  "key20": "4667BPLg24K7kBN9aKVXU8USfTqkMmZMLxtdnQkH33oKi8BjZVQRjNCpd3W59BXgxQbPXKvZYaQb5zDj2o3xAP7h",
  "key21": "4BRmhdK6eBWMn9nY2aCBaEAoB3nbceef3NqejE8D4EpjaH2DGPM9iBy5DPo6jftG1zUETDBERfBaUuzCRec8LPkU",
  "key22": "2TLiQwqKhuD7ByfkUxex97bs2XGZ4L9ZqB34nr8LbS5xmjiWdGyKSFteoz6dAAxxkQNer6etD3fYdLRM51qumgt2",
  "key23": "3c18kxDqU8RvNiVhRJvRJTfyQnQ4xvxAL3Yq4xaFz3j93pBvLQafvRL78RjwKaojYvM4YXhaLE2kQnFisRggXJuy",
  "key24": "jdjVoC8mJecXRwFHYgMEYkdq55mitPQtUftanmZJ7iiUDiKM4uSsYfzu6nVdPm8zZB2nCn8k3U1Bw1fGXMvaRTk",
  "key25": "3Z18J8KoZeFrAwf3MTJeqCtKPbNajokMxEgqDDhK7jC25CoMFXX8Z1x5d7bVHzV9fdH8cNxipNNbh259YCqyoPqL",
  "key26": "56xBj9RSq1L7vhMbY9okznSh8UkRtW1AZQSxeRFYW1vJuxz9FkT6eLJMJAW2NgLMcR9iF3UrdZnRCNzRXSuaeM53",
  "key27": "3veAJDgPEcw8u7tSVC8o4vjvL5WjGv1LgwhWF5UrmHKSs3WT8jpYV9ufaTbvz4V4vKMgZkZ9jnr4fdgTJrTwdvdb",
  "key28": "yQKpDxngzUf6QPrwjdCyHp6h7pJ7LjwDC3rvPSKqMUzfTX3Cub2SqY2fSknZqgNuv8mcu5ruozDhNLYVrrJ8EB9",
  "key29": "52STRsJ61kGEa2bU5SRk4JmVUh4w8aRkw8fTbbhFDWoMG3EUJmfdoH1RMnPHYtP5DGkAsJKmmWM1vPWPi7cQx8Hr",
  "key30": "3qP7ufp93rHuaX76NRDXp56q2D1Laiitmb8kCnsXKYaAQZb22D5FJrMG2WiKYb8mQ5x22pjFz17DbbxCnowdPiVY"
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
