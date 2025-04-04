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
    "2BPBqDbwecsy4FE63k2TXrPZWAdQQXumj4zXdPFs2DSpHRa4Dbikyw1wjSxvpUBEm167xe7NGCcnfChpNJpd5xur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xVESdCumSBGJUBuBp2X8gAG68dimTMEm6HsXh9xKchBMhdPVKsruhKSX787XMrmAJc36gXXHBMi8QRocydGMC2A",
  "key1": "28d1mS5w6JGtpMH4NZ3KNgy5yrAvyimz9qMaZezYiwUTQyWaruzvxSYooakdf8jzuxyCkAFB4DVng5zR6B9t6N2S",
  "key2": "3xtHWtZBtDhrcUXo17JHjfjBrN9Wur31uLfGX1BprsWHkD67QC2h5DNiHj8aHsik1RkkE7wCYXixscCsRy7GL18T",
  "key3": "46KzzxuKWNhWL4irHJaXDk5hHhd7NWEv2d8iwTaYfPwPVfxjrgWASBkCC5mRN45oX4oQjWdWHdCVGVLBqA9QKzzP",
  "key4": "gEuCPYfXnTQq7EnfatyteLs7RJ7tBD3HGqpkQzzFRviyu9Ny3X5r4goJ79W4YMotnqZyNvmKbLrVAQ7aXFu4UiH",
  "key5": "3k2fcMdLUnh3Nbo3VJtqN2QyEFPCM435GcJnHJjebjDH59VM1N59aPYVtVMhFXPMW1eeFGoYm6wccG38q1NnXzmw",
  "key6": "25Nn3JuLyhUEp1J315e1wj5nm3mm8dD1duRcdkGpKsjpAfSYGTbDMfGkLT5su7CTFu6HnBqtmDqgpS7nwz8iKGFA",
  "key7": "5XsnDD4i6Hg8vzT61N71HTczNhCXGQ16jLKf7h6x3mWaLF3BmxDochbRWwNf4yYiWaCXrPGSkVX5jZ85zDbAwSEx",
  "key8": "SqGjA2mnCCvtSoBdGqxsUrHtzGPvrS76dPKbFcbw5qchzcWGe8fig7nQ62qe6WgC2rvCUvavbkuMvAw4MEye63M",
  "key9": "49o5GkW1tRJaYwvz7Fx2AaV1B7e7egUu6FtrnhXZ3h8gVtsrX2GrBW6q77u9o6q6YsorTnzf2MMbbFh8G4GbxsQi",
  "key10": "w44mx6CtKHxpEnpFX3o7kjjTkz5kF94RrEfhY4MMAzwz2Gg9jdD2Uxbx2UBp3mfJQk8Zy9W62ubBXgDD4RRVVue",
  "key11": "5vjSJYZKBfj6rYY6mGJBuYihZs6V7opTLfCBnTj2B3AoMtuxW18XDtwhHJHrWMsYJSYEu3QySH1iMo29wGHfiqEJ",
  "key12": "3hJNPezsyzvBDBM87GX18GkQBRMp2oGW8t6bpqyhiLGq4bFLd5Fe2XooXcV4XjAc17UgNgcwhRA9XAeeEs7Tiwhs",
  "key13": "28zn6BxvRcW2FwW1t9L2u4sjoNRrsSndNsbAW3gAJHU8atL3QatJHPqnkjQ3GgbNPcrku2stMQZMFo6sNbeKd5Rn",
  "key14": "5VB3amG7TWsPST9EESgrwCW1hqzZh8Ga1kRGPZWfhSCZ2Qk831sKAhV3beWadXai5pYtJZCbU1d78CER9mGxdhy3",
  "key15": "4UFtGCfgJP5aPTn7MLgSBg2SpZ3KUzN8ZacKZ93qPeW1uAg7n2hG94aJQqizpzgdm2p9V4VsuYGVN5BeSYWbSjKq",
  "key16": "5XA52gnMmto9gk5uw8n9tHkEh2xts9bTBetRvSWrzuezCR9PTpJwhTi7rGi11rFArKpdmVUjyR2RekBN32htRHED",
  "key17": "Pmoya3vNe6SbbV9SzbEp3J291hj3AZScDRgTAQmyJcYnn9jwv8KdyGLW9kXv8L2A3TT7Fzyo47YvuvW12eL6LXV",
  "key18": "bfJrKpkCMrvydtiKHNExjQP5a6zhqzrgNsKRk7TnX9AxW61iVjg9CJeyhL4LxUBFor1i7D8neniTJ3RMw7sRKGm",
  "key19": "3xKWMbGf1ndvpwQzqJpRspAdDFet6fuvNZ7WhMYrf7e662Yq4wRhFtQoD4vAZGFbhGSaSQ8sERZtNw3yhiadhfWm",
  "key20": "2jiFo1tBXtsrrCK1vsrTs5i73Z7LPTqAa9chU929h8yiK6xedDGPMntHbYckmY3u6Xm6ucrpzErCABp6hL8qyVdX",
  "key21": "8gkEcDBGpp7dpksJiq7HcPU6kEC5tNAj587bfqT79h6ZRgWacCYpXcXxeDYgzXa8XSvCL1Xv5WvtggbJukSzCH1",
  "key22": "365nL2UXR4LrYaQNh4xydKHHCdCduShdreEjYoKYHFjC2RTkVc3FXRWiQ3JZiqnNMq5TMRsBY6CH9JBNTx8g4as4",
  "key23": "24R2dkgKNEWtsU43fs8VnN4XpWBG2tco4BDnRBAiZFxWi5ETXMK9tJoSvKhL9rQeahpnNR6z7NXavp3AZ9KwVrf2",
  "key24": "wA9q4Nv25d9zSSNNEQGdX7mNR55X75xDno9SBPJ6rZhvRDS3ATv7b7yGw2KArDXMR26rrUzjdMqEKKf21Z8cAC8",
  "key25": "3Cyf53y914JgLJo1vM2TxLWELCPEYDuJDEpRttR8dJKJZcfxEng7GSr1fgxpYmVbQiayCyNoBhxgR6iy3Nh4bEEv",
  "key26": "3pkpuJNUZgCEftiFc6ScfGiomBvJSVhN6VfmVg5Ptk4bcSK5zXdQPaYHLX2jxYwALLjUteXEx64A5tshWoHYWk9U",
  "key27": "4iMev6bPwLSdABZXp4WosWoHpemo6Bd1R5pnnhDvLYehFwFMfJpHn8sCwXCSh4jJh5A2U7QjtVpAK9S6Gxi2KvLk",
  "key28": "3YCUNiykuQzwTC8eTHMhgiRqE3AaVUXq9iAHvnmA1xuKsLSQVJTVdrveGLuq87NdDWhSuFSRiCFtY4WaEK1aa9TZ"
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
