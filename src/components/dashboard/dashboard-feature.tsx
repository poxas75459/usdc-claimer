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
    "5A2Tu6j4E9URjBQTPP7AJpNkhpKAvw8QnfC7e2ardB6ekh6GA42nb8WhQPgEHerF3KmYwUqJLGbyb13KmXNjDPAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAEPrDRHPZZhvPTcjyafimhw4KYu5tG4hafto6mVn4fyE73qGc8NpmiFTCUrqjfZEFDSdxybMQEfZR5x8E1tgLy",
  "key1": "42qEUMETdcjwR8SHNxSWyhM9ZNQtL4uZsxeoLTpcpmrbXnyfegRyjSjTCjYjmZZ444rKJ91QRwgsR4A7fM1x5JzR",
  "key2": "3v3mszL3uA2TdsJMpGtCPHnNyR4HFUHYpdVUygkfMazmBCMchAKhMyCRnETojrFaLvkVRAxgH3gLpjWTZogLxi2Y",
  "key3": "46BgS9qQpH2YcCLqJ9DuEQdP74hs14a67ARELC9xZjFmpbMLTz1hs24eHH9KJyv3weEDyjqmsUkhceEQ21gXzRAR",
  "key4": "2EVYPPRXLHnud6uYBxwbKrd7WYSx3FbSXynJbyb9fzKZsnU5QDV5UXBDDA9tXY8VU6EwZiTgKJVQ1eGaVX5fRUqd",
  "key5": "4osuUoPkaeFxGSPNZQ5DGu6DeZ2kcJK79B6bqq4x15CyaEX8gx9xhgTWAKfgyQV2xbYQQTJ2euGFyXxyEYyepS4S",
  "key6": "rfpB5j1w3AfPshmHz5hEK7JHg8xsekiGAWRBTc6LEhG1nbgyc3itY66bodAYyj2WVoV8cyKW87X1srEGqVEqE4y",
  "key7": "33ZHqqPdmSi7fqBBmxg4zqSMbmHYYiHnSc6941aT7jc8seJdAguhKti1DRedyeojkPn1dyEQN5TXAvWxf3E92P8b",
  "key8": "YquydaJRfSazurs9P8DDdYWFLXFC7AaYsRSpMD3DQWXcZ4E2GsdrmYVe32bJUAuGy6Zxc97wjDXXrQbmEiq7URt",
  "key9": "27QV4bhf5ZFK2h5iJSPc2WhJasybe4vNMF87jCaUvdcFZQQLfaS8SUQZcoKQZxvJyZxsCfCACUvnMGXN7QBssB9B",
  "key10": "215s2AwvU6UPSHgVafnUaWoPzhrH3XSkUAD8GvyHCPja54ccv2YjaN5pm6vzq4rNh9nEZnn7we3R4P2KZUuowyG4",
  "key11": "4C4RsfHnv5ZDV9astVzQ3EcBTvwodM2PF39wn5yCp9doMPGddj1yXyLPqy1fhYoPduP6DaGAY4U6Lo2n5z2QZRpq",
  "key12": "4sXwK7WYGZ8AxsGpya6dEpD5yEYefJznUjfUtapRVdANQv84y8Mbu2Nrak1CSNnS96QcVTYWcMP8XsLaiDU8KHtB",
  "key13": "3n3i2kQhHbnv3UYGT2t9JcJDDiMkX2Fh1MJTQHMmD1LDzpDZkyFHeHQSQDWRLvnJPn6QZ5jskN8e6W5sfBbX8kBV",
  "key14": "25oanThr3exau9gbrHnuZm4DePJRff567oN7GQtvnbezZtMCCVBDb12jF2cyz6aKz3dA9FZHbKW1ZXdELnKkByfM",
  "key15": "4VR2RqEXBhD87ZT3d3drnxnegTANQ1ezHQr13xPU1a3o2ZxbsonzhZBrwJfqvTuFMmMNC2kzBxNptRqu5KGguiyF",
  "key16": "2YH8e1oz7C2E8QyTNhtxhBqeLNpTopr3TMKnTBbR44RDw9BZUqjPJBAuWVAe44V52m9Hct9Fi8LoU869QeSJShGk",
  "key17": "5cWC2CFfsnfthS53TzZCtKt9zFiamxsBYWuqg9x8bbVemC9A91f3Hh8zgWufjR1r3UFDjbvFkN3ckj1dtmLmCg3A",
  "key18": "2nmA2E9hnfLtJkm7qYSpAQJLek8Gjm2H1cSjRNgnyrwrduNTEzXUXLav12QqvaCqtRRtWmHvqoCiJUJ3a5cu8FoZ",
  "key19": "ePqBzd4bJHA1LLdjeZxpgUew5QcgVoZCxRvAoFwRLqUXsDKSFq3hpt7MvzQNVk97UU8vQkJBchh1QMe8D3Ni4ok",
  "key20": "5o2qQE71vK52Za2CSwkquer7iukmvPAv6b9rxKrWvG9ToK7xgyNifnLfbYAERnitnEcitBmUH1cnuPD3aee6cdi1",
  "key21": "55iDjhoYiFZXTf2d1sDrF1HxkdfCLoamXhkzW2xM4WnpRhqmFe7CuuYqcUDPD47u8jjWkmaqtm1jqvpyDwafFN54",
  "key22": "2PNjzEb5oUPRi92mecFv7YWsR8jZhUERXi9V3KxabBtppwdU2XMVBnuivn2h4h3EEomecRovfKRAp6A3YCstnGEA",
  "key23": "3o4ns6DEYTAwWp1Z74KCvGNezknx1cpdGULziscBNsXJuEZHDMTgRumaVc3vWcH6sytcnhAna9iJBP4KsxQY358a",
  "key24": "4PbnyXNcyooRbTeiNyojodiCrxqCNa7hGA7MJcXxGMGo6LKYGTMBBNp4FBHfKdgLRu25sSbJveqauk7CUEUX2Vy6",
  "key25": "64BB7knYNQpubk1zRpmY5Ew33HcExDhCktzL4KKUNmuEjm9Y2ZvuaohphHVZCky3wBakAhRLBfyatMLHMVNRBoo7",
  "key26": "CZJzjfX3QUvAtjPs2EoF6yCAoAHHjMKrUtdXEzWzLiQwWfcuQxouUsiAU6F5tFHg4F7Abphm2AccLWEuxRWqPFU"
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
