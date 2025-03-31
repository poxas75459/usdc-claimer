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
    "4rRPyQtWouESRVrgsJXZGhQQhRcH6eqyYtiZ9RjxCsRAUGHbKZcepYhL64nZBnkqnxSBxoFx8zpDmh2rkPY4oHro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rk3uijFd6uyfH6beXq2Wbc6DchLUGwZ1K9QhF96UAQ3Rhta3wgwTu541Cf2rAwPvNLXD74YryyT75s4ugRZbH8m",
  "key1": "5EJwUgfvqUU28nT1UYsU2h6xRWAAkyyLDCecybiZvuSbr98AfqR2iGgaT5TKyCmfLx4RucTtDz6fWr68fbv7dAEH",
  "key2": "vHVvPmw3BGiAHrPeoMTGSdpzM5ddJetQphEFTqobEU5jR8PEWNCjpUkQmk9KWqMBAvXPjNQiVXVZycGxR9MQQS6",
  "key3": "5Ss5qGk5bwhNdmu98zypQsbmJWh7Fg37LGgpPfoZ6GeRj8BTafhjSyRtkWeTGVz7hpkZPiQPmQFSmLamFFF7bLzN",
  "key4": "2to8bdPEJh3zhc8EHGWfKePqyazxwZxBDWUvgRUiZupp89hYuUXQpYxKrP5V7TJAyHUhM7YgMUuLkdd4asHYP9gn",
  "key5": "5M3RcUXebuJn7gG4MGQp2JnP89mzLynZ6n1pr323tTdNqVAqPLvSTyPXN8Q6bURZmqvCNnb1B51aUosM5ck1B5ko",
  "key6": "3BpEDocGENaLNrzqn9FfrR1iJnjrMSAYbRjwLYxKDqH6Jf5cNvPAKLh6SiXWivuDDwd3JUESaU4fEmKnb16LPpUn",
  "key7": "34yHJdgMN8wvi5W4GxNzB1zUZWXFEXBACEVPf1zDJ6t2Z7apyMkqjxaSoajYGBNTFyFCjRzx65rYY4PzMUZBtTad",
  "key8": "2ttuKt6dmyoofnAmFxPXswUJrq8csExS5tGNxHsd9AtcFK5NSpbD1KWcGEKJHkEnNgVhdYb4Qc6r9REmYXKycLSk",
  "key9": "4RbQVJkHfmGdEQQ6Ncitoa12cCvfndbtreeksHqUYsYN6FguRAQ8aqE8krKEgKBkFs9cSNMgB2Md9h4QDv2ZFWTT",
  "key10": "3SH19UunwM5HJERuzCMXFf9CkyPNbuzLjQwSLzXwto5G5iZGDefh879VTUs84xLqrzUg68fn3AF49BcgtBN9q3As",
  "key11": "4S565KFDXFFTCBrd8rGa45HZNB4f6kJz7ish2gz2qgjySP3T9zhXmGAxLbsK5PnGWoBAzREGHs6K5V1QTNzR4JcH",
  "key12": "4aE1oqMnwPzi8gVbcApn33iJLBW7dWay9o1Y2jNTTuHX4YFCdHZ96sUVwx6ZTFW3SX7Mu9ZiaqVnjPg69vnhoaYv",
  "key13": "4EMLK7cNPVD2u3VoaAL1sGJbqA23Hr8NVE1gHf3E7W8cPZjrFQ2m42NK7WNeNEiWguLXqDiyjNCSHHzAWCxHP6ZF",
  "key14": "3iU17PHeBxufoXviww18L1wFbkQSfYimKos4YLr3AjQA3syEnJoLFcFHU87X3T4nEapxhFLbTAGDY2UqzpzYYs4d",
  "key15": "2BD3XihoHr4Ry2SmycVuPSQ824vULFi6pFANpgezBiC1UftnSpDFHQsSqxsedCt9X4tUJ7qQYVtwaV13nVYxZ8Gm",
  "key16": "3aYHPQetqggFwWe1jhmj6V1UbM2RzDG4BqNXoFEQKAe4a9t11Rn3KCXH7HRbbCg47dm8u99HVzVj4DTDBkYL4u83",
  "key17": "3NfG53yhyDfmiobDg1w32buPNYsoMU96mkosZ9jn543AkGnS61n8cZp3KrFYmWKY9gedJwbrasfiHj6mjYQqzpmp",
  "key18": "3njGtse5X1e5W9Xc9CUDiwoexFid4d6pToEPwBKZq6j9HBDqQvWNzT7fjqdKT9T1A3MHwVh8rUxMEPRXyFbyr2Tk",
  "key19": "gASS9QJ4kVb6YabNq6FxtDUXNSjkdUMvfQjyXUqpvWarx3yAfehENjuXRpzTsCmYHA99B7PQa2hYmgdLrtWnFk9",
  "key20": "3YgrvYLLFDYumKgxxStGyJZYiz3irT3nVLxXeHKeR3JGLbqrxYsBznFBXyKpp5BNgG5CSvYhjc1Tk4nM9FPkkN3Z",
  "key21": "31XuPwPijs8AaA3FvzbNy643o5iNe4FcmtHPr1EcSLQTRsV74sULEoaZXbDgxd3bSrnCRViCLsetptRCb4ETHWXF",
  "key22": "5gvQki9nz2Svdqs2Nv9TTxXhcsvNbWnkkZDrGZsKgRvdicXb4cmJyHBmuy44ETSJpBJpsjK4YKrH8296cDScybKk",
  "key23": "2rCL3bCC16nHKzwU3YHtim8Dqd7J9upXyRfvVgJgq2yj2q1356XU6R3N1ZEiSJoSbMzDz5f9Mkjoinnkwzq3fDvp",
  "key24": "2KdruWY8cGR6EcNyMAaLuB9VAnR4YLShfmbxvLXyWKyWGJe2z53rQa4TKN2h8SarAkGUCPv1DpqDmtxhsz6Fn2DH",
  "key25": "56ru6GY3S99guZPj5icBwsk44kx9jvnuwu3JpjndXo5ynPmAfXy62pfcGQf26xSjhPWnZaRRfzpUpe2Meg5cYctq",
  "key26": "32pR28xMKRZ7owoemz4mLLwK8c8ZBeczEWALdkQsVaUWcR4nWSWvmDAPJZe1ciTN328qZC5mdqc5iCTvxtmkHA4E",
  "key27": "4VXMEPGxmCFeufaMfxTLWum9KxTRscVh34heW8LdniRvNWzcnACAc6E82VAVbCP31ZoZhT7jLR9rE7ZiV7gTiajH",
  "key28": "3fzb4a73GPQPmbYB6WEmcRPXHEHsvvpFr8y4xbU2pCw5rgNE8p1BrENkibxjLrbofmBuwBZXYFfMSEPvWV7vGqaz",
  "key29": "5x1PVYpXFoq8uQJrZHRndkJPSwUcE3GwQEMtL7VemV3Cz3QK62qVMaEsKjouadcLmacu8iEiuCV2bBksCEJovXm8",
  "key30": "3A2TtqyekFtq3DjsbLFwfpYzybASxs4VRfYXzj1qt3VNcGddPcVa2YsCHueKa7PJH2XkC3F2FbTpf2cSit1J8BA6",
  "key31": "bFJcuigGb2aBEq6KV7acrjTrHcaRzWypqXhCNYd2Dw1u5fF7PdoWneWRpqtg2K42yxEiyCs6ww3PxqxWiu4wRN9",
  "key32": "5neMhNCZMrg81Y5aDzhbaY1A82HJXf5748Sbygw1GZgrbwrLRiK5FHwVvsqZPvdu81K1YXRfosohpbjyo2xFsWyX"
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
