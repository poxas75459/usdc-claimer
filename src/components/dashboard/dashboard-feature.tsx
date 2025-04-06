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
    "uBeUu4WynZRL7ZGixgK4uTnLVpydQwRLm3dbzFpZd45BLDofvYPry4fPcM64c4jDnERAmL3G9z7bBumQh4CarWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49xEMdzumZkrEph74hUs11EJN63dSmxrR2QZ1h7Pc4Qpsn6wujFDeppAq7ycSMDP5WCnktibVG2g6vt2CNUmg1Bc",
  "key1": "4ifHc9hzC4aKaL71zckWjypnCAXD6MjY6DrnVvV6695YYPsF6rVguPBGn8o5j1QeAR6qrmEMisepzzgGQiq2doLo",
  "key2": "3hSm8hD68tVpJU7GcB7F9kwbaqpYVWHWnghCyBMFtWgtkJVE3FGD65dWuoMVUZVPyaSTkEipKHtyPEhfHrm33pe2",
  "key3": "35f8moRhtvB9a1Pbt4n6MHZwJasefdkYWpSfxqgXJwJfDEqSnr7sn4KeWBWSYBWhndZaT1ce3dfoMo5GEzhsLPCo",
  "key4": "2VWk76Vce6CZsw6Ksct4e9Uwpxc2CpQuiMsV6bzHkQpBNEDucF2Vu7mrKQEAs493UvExTnFVgGei8K5ssPJ6qqcN",
  "key5": "4Qb8PDsGL9yUx8oHLSd6BgFFV4XDw4qxYPQwY3CcntWf4dNhSMpRKMuzbAwAa7YEPdPAxBrvPmFYQ93Q6jc8AKCx",
  "key6": "3K1f58TCyfcivC3NtMPLpDDPdFBiMF7KzSYSZ3sMenHPkChw5rdJfAUGigkBN4jZCUVw6E5c5Kh1WonD5jdm3gRw",
  "key7": "5iq6W4CMAxPMVPL3YuN5hYkayUeKUW11pfYzpHQgUHUQmAfLDaMx5BDJLLGst47tv6PcpDxLBEsSPVXmJ6Spyxk1",
  "key8": "4pyqLGXr4mPJHMDGvTtzLhjV55ymWfGyJ7Ca6k5w3RoGXSkFZ9UWsuDsm2r88i29owTyuUe4KkokEyFteb3wD1Yi",
  "key9": "5WfrphYyy13xJh2vREPZGHgxdbJFPyBb9HbRQE3JsS7UNBmfmKSvDgFoL2ffNXoUXKsrsAkM4sKVFFbau6fsijZD",
  "key10": "2UBHwXhuBfrVn2twvyFCYSdgGCTnqVFoNwBoPoraSA3t1LDjuHv1VwoAwC55JxkJp2vC6kNEijLRzY12qAircgJj",
  "key11": "3rFx8GvbnukriTXrD654k6wQ6W1WFRk5kA8JfGS8PTukWPVeipjaJzScmhK2stXkizptA8FeX6QRoPXeUVuGLWbb",
  "key12": "3RWuyapdJ2LVyPcEkyMHVkA8iJnkymHAEA28bXbErrUXp9yt2iguojfnjBt2LBfA61ANZD5zJtdmQLmoZwWwWYbX",
  "key13": "5ux42oE7cEcohpoYDVSPncwNBj2YHAKSC46Jb5EkwAm16cNXA8Pxygu3BTM6dkmHbAhqRkyWYMm4p3Qk8L5YFr65",
  "key14": "2eQjeZWiQRjubc7sHZekaBxPA22DBdppbaQZDtKwY2k8S1zjF6Yw1Dvqy6dKcE4dVfCprJUA2H3imNcEtgtmxQkK",
  "key15": "5ramvdvPXjPCSvv4GdMr9HprGvW21kzEY4aeMYfun8BRGrvjZgCqADbRhskBbMYpC2Fa4ANxY6Q1hfxkumbFcH6u",
  "key16": "3HUHxKBZkyUYdfaPG9SkZt1YVZYk3dyiwNYjpYxHe5MYSgUmew4jc6DnbNZ1V1JAzxwpyLpz1anYhyFGosSAhzuU",
  "key17": "5MRfrxX1vzuUqzYwNPwRgfvH7Vs3VoA4YE24q2bNECTULNNEbb8QoLc9FEs5yUkwTe9NawZxpxcjsviNvWheRu8Y",
  "key18": "5dnHLHucXoV9G1anfUPs1twJEAuvd9CaeayQYXNpLWVoxVSKyNuP8sQ1KpPTJKh6YZnUarSxH4xXAztHGGNKUvuh",
  "key19": "5poRor5D4qdzaK5nGrLPEhduod8Zv4VdZxkXH9kCsEmiDwXg4mFBzt64XZqpvQhc8Zg3iJiKwEgpjwC7izzw1nuy",
  "key20": "67WW4TjddCVX9XNVmA5FVBtep6MVEhW46MzeYC265mabaPNp5V2qyMfuYeksmhuvmNLPGMT59pNbHG5wRqdoudHE",
  "key21": "5KFGS223WCFT57rUxrTxS29MabYRrpbMBbvcQFw48VbhVGi5NAgvNWA2qccoDBjL8Xd2Kf5rhV4Ho4TCZ5pGCUc2",
  "key22": "2FfwX1T3TxHUfY3h9qs3seRc7mc9JW5HVehND8kdTopjRhfrDag9GsPCAGjB8op1pcUFvgzgBhuoNwPnMWi7W1TE",
  "key23": "XRSC4MZC6U2Ed9PzvYWfiaEQXbGgXeB8pbGWyxH3bVh71Wqt4y3hSvfig2CMtpFGjGaP4cj7vaVuvyAfuSL5nZF",
  "key24": "37SDXSpZnsm7pPRhJE32it3q7VRLtHW998aM6WVXWuvVHyA2Fb57ZQqwsvWsUuxnf985BArZntC5d2EEQZCGX5xx",
  "key25": "5dA5cqxgysnucG26yuMg7XBuESD4cYkEoe4npqgpvtyyP85H6e8o8EyQJjDooek8bKut5xjMKzsNhooSxz2zpsDc",
  "key26": "45h9jMqTo1T9GeXK6i26MahnD6sH5eCrXZ54ABq6M4cfcjVB2X5aGX35eDrkcoT8N2Coyj8L19R7aRnN2VvLJhyy",
  "key27": "61c3virEAhhBjvcVeU8ezEMvJYQaMc36WT9pnj7tJN6m49tqRrEkp5Rk9VvuFBVjyLY7FdvxvD5R6D6vGMWsRQto",
  "key28": "3UcouiAmjJt83PDuX2qbYCAT9wZasJKRyDZHP1KbC6h9v6LS7YKZJ5RwqbBaM4MPxzKRpjJUvXsPDz8GwDn2BKFi",
  "key29": "3Mkiv9Vv6UP71iNpXZuF2MczweMM2FQnxoxb4f1nKsWaS7DzKJhGCeqWpyjX8Qk59CdYYAFvbsdUD7WYzHxKafRe"
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
