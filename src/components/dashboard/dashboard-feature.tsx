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
    "5jLv2AjhN4Mk7SouknXp5EofCsRMrFNxQfWiVezQs7K8PsaSxq7rcC7XLqrJKfnFovEaDGrBreFCEYdj5TujTd6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LWjdDqFBZgagaNKq54dV4c6TVgF7iJ9JvvLimytFQYsx3eDinfnZ1sB8KtTEg89aJwuHRsANo9Me695L9J8dzP5",
  "key1": "3QkEmGgoj1ZMV982MEWcYWQzz1JCLCALXDrSVGhmruzbuWV19M1m7zErBFWJNwVfPFCNHTQfFzjJP9JioWY65ZrM",
  "key2": "2TYoeJnGNJ52i3Lnhf9ByYadRKaq1Q9QjnRxLoCN38vyVnJSDX7QnpBTcRT5iCK6GqdvytAtH7PLmBXjQp61Vq74",
  "key3": "4HDTqhsxMhqwFGMnuNo5U6w2kjp1ZFpKZ7RKKB6TFYtjDJb3uVt8GAhXr5yhg6PbBBuM14D8yRfwDwuPSMW1Gdbv",
  "key4": "5gYR63V7JzUTxTDMWU5rgaEDuVcS7hykBe2TcpyEy63cAmrqrkEAC9GDRntT8c3vYKvS3MjyVQm87o2Mz18Jmgbm",
  "key5": "33DMo4ge4ZKVZrw9eUfQtdn6oBsHBGGEGcpP92yx4BwH44UKEd1AQyA8EYKfXKpymSKdnrnDaayQRKMS53RBxrPb",
  "key6": "2h6df4PcYk1uxy2uJCuwhUVfjLxVUJXAkR3du9xdA3Cdopbat2co7kz3He14Fp3cpMUYSbRGFWXnWsSymvKbVQgC",
  "key7": "5mpNxhMrfvsrtWCytJ8g8PhjmQqHjsWtWsh58R2XZeAuADVb7zjDeMNPVAGWa45d72dhnccjmnY8Da4fp7oZBTX6",
  "key8": "3Q2SNN4Qp5W5DA7wdpFUbvJihMag7vZosqP7ZydvKicwVv89FztRLSdGEnu3i7uxFPoeKuRNs5vx1jqyoTrU67Ny",
  "key9": "4vJYz1FztTzQRcTDoe4DEZQsW5rTkJoJnpw8uku4UrvgjwzJjkXrcbvoL3NgX7Zt6NH7rETyma13FTgUB64mDSQU",
  "key10": "481uBYZPBsNs9vUc3RbEd3NBaBrsPLYrCFULD5GChtfmA61H8P22PcYB5QGRL5s2AECVWZvLnvr2ini1RPwcuukm",
  "key11": "3qax57uqGseJP49mzdnKcraS2riTnMH9kvcMYwk7Kp8atQXZDw4pZL1eUrJTrdW4N2ac4rQjgTB6qpNYwPbc3c8P",
  "key12": "5imnbX9iVxVZxkmLU9mpQFvffj5UJ32zcM25iAfocEKL2jgt7FmKQTCoKv9renYZQ6UyRY9Te58DMVMas8xJCTrQ",
  "key13": "7NnMPBuc7UdZCnYARQME9Z5dSGE1PfugTxcXpDwXrRxzYbMNqRVmeeJ7hubsqtRvWs5Xju34nATMcxydtTmPB5R",
  "key14": "67Vun4aswLZJexa4giMe8E7bxCKsVAYqULK9tBmoYn1ZDzEr3MyxRDRccoaNchjwZtJKU73y5H1ZgJTMmHxDNLb2",
  "key15": "2Lxp3vCpnGkgFGBWoe7wFbzLwxVbCq83vLgQUM4FYfywApEVMkPR4dKAKNMbsQLWoABBs2Pf2mQFryhuXdDAUVpS",
  "key16": "37JSFfxtNxzEDTfVYTcf8bsctVt62arGmDBdCbV5Q3QVEcYPFnzVFpfhnkYhF3KRsYxkqz9M6XyAM429m7bFpCwL",
  "key17": "ZZRr6qNyyszEt4ufQ8xyFrgPzFR51zVHfMGobWt2LnbBZQ5PQEM9CHpv5LVVL2Gm3h6e3PrN4zv8xP66qyRdYNw",
  "key18": "26kPb7YWLJeAuLyVJiXnR5odyroeFcyo2sjn4JmGdStbHe1MoSQLiJpi4TYL7QJoyHpwHqjAusyM2xxFXETSHXAY",
  "key19": "4so4V3em3r665vbbMnqjLkHqVxaU4VQdxTFC9MAKPyx71M1zasYKDrBPfuJzUfW4WK5HvjCmRRRJVs2t6E7aCZkw",
  "key20": "WwN3sAdVy8r9TBPa9feAJQXUh7tTbPNKCD1ZbeCJR6XTgrL2GYUZtFEbNXwqzK7Wti8qBJNuav1sgVWf3AZyLeg",
  "key21": "4fXyTSy6eidjGZk1aXvqmzVVmXYsxBTH3Lubb6jJ3Fad4gf12xFZFZyKEw6zC6zu5LZFkMG42iJq4Ubiwi38mvMg",
  "key22": "5kGXc49PG7j35NdemSSpkoLUsky1nph4wkp226L5kfRTt8Rekh7LzqPBkJRHQaEZS9VKtm9accvHmJi1eYs2561u",
  "key23": "5hyvNdnhHXLn3uCzMFjzSnMw67jK6aY5gaFkB85tD31HiiHEzUZ3Sx1LmgErf6dssE2jJdnPUKZbifKRHkou1U18",
  "key24": "387P1D1kwGeufLHyo7guLCzK14bVjJnSrcC5wLFfzzXawcjBHDZUWiAkYdxgDsMX33nHqx753CiKSMCCUc6hNXVD",
  "key25": "4LW5NgJK2jMdEBQCXAPPEH3PEk1sgXGdtfR6UaxcWNvadjWSEgEuM1D42t6dr7qPdQq6rUq3VizsxU9m2jqTrxJL",
  "key26": "5tcfwEj7vBG4AM95LXfvcCTC8CN9b9iRjrGjzktnES8G8EWBqj9nZHkodB8X2X1bos2UHboysAbPZeaJGVrpA9d4",
  "key27": "58yv36TMBunHw3cHXbqNBYAV76xYMj29aog4xmuko5n3YpBxrtufYa87KuweSpn54k1FuD6qdDqAosuistafcsau"
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
