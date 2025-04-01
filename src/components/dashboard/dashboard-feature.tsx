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
    "35LbFeqMo86XuSPA9yukcL4eDHQFroKEWhsNGZyqp92sYZCJ6FXZc75c86oWdv7x5m1juiu357qtCWyyJKEJfvTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJLFB1qGsNX2EKESLQFgKajE8GV6dziGx8tiaxuHjn94V29xUsvUSWTrJqKizpLyEs7bZFLoGLGGaGhk5XVE1gs",
  "key1": "p2jap2tVKfeZvW5No6jp8xtvDfgcYsPWHCqA2Zg3t9zsU86J8HV4wDoRFx6X196vkFJgYzGbphPAbaYEyR1seEC",
  "key2": "3VXCHH5yhBwNgAU7dmPDAze8FwZJ8X4AgxHYEhv3f8HvuVjLhc4d5VfrmLgbfJradM9aKQcsAy8FhAkuv26yy7HR",
  "key3": "5HLBdNHK34yfFqTcNiaRuH5rgBfVqrcZz6xUCiiA2FMP7CSnrbLH6X4NCvnYxRhA1k8zUuyrkjZ7fqYgHHwzZJZk",
  "key4": "4tspzAdpZWX9ZJ51LqPeSyarxz9pxDDQZvg7uxnHjvv87xMAhdv6eaa78qi6LrpPpVXp6JHV8We5dtb5fshdqJTR",
  "key5": "VKW7oQNLVM6uemq9BtiPtPUCtAsZ7mUQdrsZJHTTvqXGycbkbqfjrne79X7Hg1a6Km4WZAid6cbPZHFRr1m2jf8",
  "key6": "AFED19KT99gxC9dpckNQn1sYtJrj6BY2dxAkBAcPQE1zUQULJad6ukuCRpNTKSjtHdn7KALZwdatxRNSKNdHhCk",
  "key7": "43FMAsyqQdCyeYKEWT2LaJZYuq7r8xWaZZBng8Fjbg8bABwaKQpi8iFDodJyCrDAEYYn53cohXo65pLeNJFNQsCZ",
  "key8": "6HJXBaxqN8WywFKj1M9XGqDAemrGos7f6fJZHaHuMddxBJKWmxEvT51PugJAezjyGdAzDY984rc7QCtEjCjncdk",
  "key9": "2FvTHmPYkHiubhDCgVdGC3qCLxWJc362uZFodM9x8DxREQMuD6Ev6KqqZLYDjvqHokEsrrrgmr8vtv7oGiS42bVT",
  "key10": "3yi6NHwBCpucfQjWMyC4zMCLMqUyArfvdDqWxvoRtdR9AmuBQ1mhnD9ihsgLxWwYG4qQWz9qwhKaQbXrjkyXNid1",
  "key11": "4QWUhiCFg7f4xa6ZZjPxhLzgFv6PzFFUUSuCUJFqNFDz6UVRysEbo4C6susKV8uXuq94DZJzkroGmraRYfaQhZew",
  "key12": "2BH4PCeu4HiLo6J3cHiCoYmvhPKPHEvcAPkrTuBStCGWRpQv3gqDFYgEcFexJGgJfAbxpNBGCarfyhi9XicR83xU",
  "key13": "56m6GPDtCFpiuJbnEg7EZEqss1eZ4u1pxps3j7BYarZey75Kjyvjbf5q4GqFEPxwyMmdEk53fQ1BSJ8oPrCidPjg",
  "key14": "2xjgAhmNLnX8BgLTTAieVdaBUHS7fie2gvQ3DjzJofRMVsQm5MFKcBngYnPyt5oE6XtKw4eArYTLRBxs3XDGZF28",
  "key15": "5EP2m9Xyws4i7wkD7Gbdt7sLDMq1XDwmTCdpZvfaxEEGdr6kjXAxYU3KUEgRf7gZqk6RrU3KV2d79D2zBci9kAvc",
  "key16": "4C79N64mZjTy3cfZXK84bazcnPEENbDqii4yya3QucSRhamSSjk5tSpV8k7wZW1yUVVWumbsLM5Y67bU96YzT6k",
  "key17": "dhHz9riaaVFXMagMiox6os5WHqUpk5EEUU9JRphvqL2AEXCp4rpvKGkjvdQRpBepPomwKSdhA6G2bMBCc3hdojc",
  "key18": "4AfrbE4bHtqPHWjBUMquKFQTHWz6bgoUrH5wWyCYzPceaW1oEMHhpfXvqoA1u5bWEDbYaAAW8ZsXgzTYAGom3Kdr",
  "key19": "2g7UML4BdDBR6AUvKEPc5MTXS2Ka8kJzbCJzZCuZQtaKPzYfpnNHWanDR2XJWAfKr4xmfruRn3UFuMSsqVyU3Uqx",
  "key20": "3gJZHsiTLcix82TDt9YQDn3ag11sb4Ku8SX2U2Ek4XTH7zSPw2TXsBTw5GiKNFjjAuZUZENH6XjewZeS1KCa3aKW",
  "key21": "a8eva7c5K8c1uxwVUqoarGwnnjTug4hEUs8B9sgTAXrmVtV1PdvRnn4MMfHehYYpTviRhHgtuYysRLUYekXJLYq",
  "key22": "3Dphg7e3Vi1JtYHupSgfLuJbL65aVrC7FaFFV8fpQz8cwtBAvu48Qi4EKDoTVtqWWEGnM8ywj35kUtszNJyViKhE",
  "key23": "3zcCiXssKWAhUnGy9K5rBiDmwBgYS6oLdsejByfcT9fo87WmTc58ScSkBJUAi1UQjNLRB8bzhyzy3jZy9kEQoxbW",
  "key24": "ouBfb68NyhoMdX5Jv7FiW3MM87J5714JATVMTRV8bGyjno2tRsUMYX1tnmFPkJZFaimpQhBNtwhf57PV7VAc7N6",
  "key25": "4nJB6BNN1GpEK7jdMfaEMEAdx7b8itWzhSDEg1i5qhi3ZkEo7Cw4eEj1D2JwoFusQFHverGsoaMjB5zcd8K93MFz",
  "key26": "hrLu28xdCuPARdUMgwFcaPyWhzU5adszZ4PfBxN38kzzbYnAScQCBPv76W2MdnSDcSZVsNU5sYE7TdxZuPVcpXG"
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
