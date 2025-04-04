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
    "hfvQiRrx3LH763hwXQj9BQgXgFkefMCN4kfQHNfTYzgaAkP71kQE4ps4nyrb5Te1oNBd3KzNPsKBjHVGbbE7Qi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cBNWdgTdR8GrUHZKxKjRdWsw63w54nukB2DxA6QRRi3qHKWQyvnkUpLa4MC88KL1qSjmJWFf7Q383FdYHn9NKtN",
  "key1": "5pTmQv8JRKv8vkomAo8fVNegfJc5kRpyZotLM9bTbh6gGg5kN2UJbFnqQj7zXekLiwqYcQeaP6gRM3XED2TNRaPT",
  "key2": "3vcJJuXr1mQ67JbD2Ew9oBmEnYyNXvTzqmxV8X3QBMdPTkJTp4QK74qmnwR9rfec2jQpgzQFCE4r8tySTGWGsoNT",
  "key3": "3Rn5JjSZTrUMHSfXJb9R3YmekxHq74Ax5F6Gi84ntQbZUX52cDR124bdRdfT88mTdfFfecbT5aEywctZ57uxGFWh",
  "key4": "2XCdjn9MnNtoM8R213oA6xtJL69SLwRMh4fGwcMCrwscUUEhnk5VQeT9TPFLDCdSCmG6kie1Dd9oU2YEWJfobzar",
  "key5": "FJeiRFSuRfb4wAu6mnXoggK1mdwgq6XmYQTiMTeaxdiNf56NDqZa2A54ahLBoEZunKKJfsp2mVuYyEofrJGW9Tp",
  "key6": "2McRAUuAMd34awm3jhwoPafbo41j5RApegw7Gt6vfo8iuJMkXrHbi3QwxVNhUMu2KEUGNepXDHHbgMgxzbDAr3US",
  "key7": "3gaPawarddZXm3UPTvSfNxHYkNejgQwLUAQAMwvkVVJQ75yz9w8hkVJJUEVAfbLZ3MKd7SRDNFTvzYWmoqk3fLZ6",
  "key8": "3C93gTrdxtGvEQMwZSDqQkyjVLXNZFiajFAZTEQW6YEP2iUG9VQyy3KP29QBVAxyhiu7FmS5SsNr1ydx3ujmpBpg",
  "key9": "4vhtXC5jkRRCaTA5QTPH8nwFouDAFTihWotgJw2HMvitT3ZvYDHYYUhwozHHmyH7JXrqwCaUfHCTdUbQswfCCfkJ",
  "key10": "2PeyZ9y2arR6GcntZkcg5VhoyRtzGey4r81oSFaMxkeGX1AHzigPXe8owdQKVSLbbi8EEhYDS3KKRUagsSAktHFB",
  "key11": "5RuCzf3Q1oNXToNQQZMWQiQqci1QYzjmH4782AFhLbDhm4ZP2cDnX9XnnsMj83dd3DK5pfa6YuZFhX9pCmS28pJ8",
  "key12": "312EgeGmorhNyR2rAG5LACDAPo2omBYPJwFYPZ3wEz8x98CPFzCtoR9zcMzxmy9ytcxeKX4BmpiYzegjyLcCfRWJ",
  "key13": "2YQLkpNTZL52PBpF2nuLfpszSYi4L2MDUYnds7GnE6YAQ4pPuvpETFDEipwMDaNMLnpap57cpKgehUSLLcSAWWYf",
  "key14": "3PuCLfefHdXvd5uPA9chTcFBJY9ioLtgEcJvryehjRVP6fWGEY5UtR8hikGmz54SCUKdw2ZoYmpUMXDWAMYhacXa",
  "key15": "4KGLAMubxX8E82VXvrWXKknvdcirjfmNZeqqhQE5AqjyrmCnRFPijjLGL8iy3L5uTwAFD7tti6ysuMf1bP5X1Hcc",
  "key16": "4zXpZu41pSfLcuoAUFjPnMtuXUGDqBvX9CiQBTdfwoN4iwLHPGFd2XiiDuUSYfkG7DM7B3YUBBMZAVNSugLSHjaN",
  "key17": "qndQq4tVfHnCojLahDoWDX9FxpHWfyWxSBTb8td1ib2oZa13nWnefiSjJ7wveHaqzrwyTGnbBviPynJZNCHFJaE",
  "key18": "5qu3PLvxzzgajnmVeR7AAuGMkXUSvBRxJ61s4ojEgJwiudqbPvekHD9pyK15wfwd2DpvceXuup7nmoi5CQHERrNx",
  "key19": "4TasVS8vxpVEcihD4HoCsAvSgfSyXmaSKKZVfpM8vFy7XWqwuMCuBxihoPJxzHafPHdecrVR5xtmcJ4t3gRwdMXZ",
  "key20": "5RGC7huxH5NqUM3nLL63CofNvqnpWHCd3NFVAPoZ3MXKNn2EYHoF5A3Ztr6vHdyqyAkH8XGfZYRZywdCUgVDMepZ",
  "key21": "2PcJ2cD4eVx2njrkkcJvGpj17kyFcxRnkW8pbjFNrRUBqwYAVfWiy5hCMSyLUy5F6pZi12CNEgcjsBT3Mv1JxvV6",
  "key22": "57V6bi7syLEHpEoz2iuwhPn5niQ4fbzs6SKVGWZbb1wGEWXaLdbDhniYSN4jVxSESRKaewCrAb78fWsUR4S3eyP5",
  "key23": "42JssJ6DYV28cC3zMG4BwTnLV2sr8SFec6BUakwp51hzSUVzJUtpo9SWL6s16D1H7d9Nmn9U3EPKXrRmQER22Ht5",
  "key24": "31MHphJsafToKwCsBhQCq71rpxN8C9JQYpNq8mvau8nNHoXZyGwE2yd3Aq2FkJBGHJCyh2wscupBPhiqghDeegXw",
  "key25": "4ndPLLknpSxFDdKxpdidAERF1ANiGw9TnNDGe6PeEeVPtQrYbfMBtB4RzQaYFimkfy1oA6JWdUV2k3FKe8wTWLm4",
  "key26": "21wXv6m32XLEzFyeKixSKTD8D3pnbN6qw8oF2yLLLLeeE3VxqPbXt6vdetKMtdeA7biT1PMes34aYwq5j1CbcwrV",
  "key27": "4HxRDBzsE1zmgopPLbwGRvbW1DYmC4GmWVhsz7FgsXfi2upXmAELNQacQWo2p3sauTC45EDdrqoTX5f5eBCaVJYz",
  "key28": "5f2fvbM9w3KzkP6ELcXQ4d569J3Fkiz2bQah7nXi4w9NoZhCeaUfSby3nyyrdhhgDBwziiDH9UyJzHvBa9a4icNj",
  "key29": "3SmGCm3uGNx6qyEj4AT4wjNkYFJUTyQcAhamPp5kNSu3rhKXq3zpf6F7XL2Nq7R4nk4yh7Ne1GVoXCnTvWbpoKQk",
  "key30": "29kTTENQBsY3f3XMjmsQ6VK2KGR85rewcaBC1GjjHGh6Dq82bXcsuyESbbEGpCUQMVhxkyKGnRf3pxzREstuRigm",
  "key31": "51P97N3W9o4zEUPuxo3PyEFsPXF2CHWorC3t7RtF6SsV12hyesrYKw1fCq1W7Gse9wTRUChVaor1H3J8M2J9gALH",
  "key32": "2rwzHNYUM7i54z2Uy6ZLgMcGVTfksYwJ6gzGtY89fWFsjFz1LFQGi7z41nytWVKkbkc4ASAxhTShJzzecbRWCiHu",
  "key33": "2Yho3PvB2XjWUgz5tFUdUvHYcjt94qjzuRfjfYc5EPXt8KYyfUMCPsApiCJ9VcTnwttv2Ek4q74AXMFpjjdWLhT2",
  "key34": "sJXqdrscGyXPircDVwH62opRBevNAvTDYoBeJMtcA3RdRenNJf9BZmpwwy7d79a1hAhVCm3ekFgAQvsYtNL6pSp",
  "key35": "GEHpKPjEQqmsmMcvBPNJhVw9rWJ5tpAPq6SKjhsuaQhQCmaytMyrG9xkCRXcb8bv3QrSNqMBDAx1SGwf4p527n1",
  "key36": "44wqeH5orb3bQwqWVyZFwfvRVtr7UPf573KRrPDWRbFMoNekNDsTiU15AFPhLEnSdqH4phPSs8eDoC2dSwcQLba3",
  "key37": "2q28hKnWHEtDGXqut1u6znpRkq2jwioFFy7A6hyDk561xvGpoyhNADxMqYjrtUJ8DMFd9Tpc5EuStRwkuNTA68qi",
  "key38": "4WJHVZ4499B9bte5b4hD6MzFBcMPi4bwFTJ4zXJ7TEmbYZhCp4p5m9fPRUZSRo1tNH4BC4Cc1ZJKTaBZgCeJQVdB"
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
