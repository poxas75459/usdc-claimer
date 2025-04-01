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
    "2pfxoPLG9Zs8jwRx3R5rYKfNsULcE49WC1KREun8LXzuXKBAE7GQ73wZx8WjFPq2MQyS2iMEUVgJqFA1vjLd15tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JE8mWuFaSvKhg1twd3HCdEzBWmvmWoh1sMNTcukd56Nhim5DG7ZzbWG8a7dv7pRTrmbUqkGJFsg1eB2bHRj1oP",
  "key1": "4EsgKpiPe8NCXEtstHAFF8rxpdni44f19aKfDLtsZWtntLnPqZ6DKu2cSp6PBSYZKqbgGHmAS8eDKK4Vs43wUoUa",
  "key2": "Snx6JChZyimPjVdQc64h7Eh1LREqkizNvZAeNQk43NCKD1XofG6sb7L9KqBEU5UH2TVRbdYwjK69upocsxetqBn",
  "key3": "3mcbTX7VT5PqoeWRUTCqoc5DxqXeSnMCypD2KZRKaWUPrZjQFYKG3pRnyaK8AJvaGWWKKgWHkS1Vm2U6u5y5h5uq",
  "key4": "4xNPHV6KJTRs3s76gbJeavYWL4evpkXQtcWGjNaBkd3natusMmPEGMEPTjbydpQK2oTKhvM8DSnBRwZznVv6bCYg",
  "key5": "4iqQ4tQJWhW94x7zkqFftvDBQe2BB2Gq6vAkBwfn6DA1i2AFypUcwhNcsxSGA5Ctzr37sktV642PeGe1r1BKM3bd",
  "key6": "WgodtPiv36bNfUuqee4YvaoJqySfSQEcG1dqyVCt1xnUNS35Rsuk1LJ7K2Twj4tSDQpv46J8zfw73rnKmJjWf38",
  "key7": "43KmEFqwHDkJTGba9fT7aNEvE728e4AvGyYRbxQmnzL9q59661N7xdMLB6QVRnVvMjrx8VYabK8mBmXGwKwYZceH",
  "key8": "3iudT3QtcXJAiiPoU8iqmi26HLZx8SEdNqie5JSdaoxRJu8MyzY8CPwLdQwHHRVgPDWva9bmcucMSRxYxkfVyK6C",
  "key9": "525KXDtz3knBQZzGg1L1BPnD3askCkoXCQsS1ropWditLf88uHV8hxSuJqxMr6FrE7cYT8QuBbUKxJG4RyBhk2RN",
  "key10": "2bxJzHVmMgTzkFhDnmA3DAQinGrsxwK5xoVvsvisX3NCgWoTaqsAFuNJzXcppvB2F43JJ78bW6gugqybrFK96jNZ",
  "key11": "4Go8vbJANr4KtE92F4fkZtW3wcceVc5XnR5ugUXE2nEySzxnyGuR1u7AT8k6BEd2vE7Q1e9g4Ys9ZB4agwKQkru4",
  "key12": "5LNcyVni58FgES5sbc4yusLeXJKRA4e1whPFarYYVh1N8qYUJCDG2GiNgZZvFGxpJdrzf8pqgdPFd4otNMifzsSH",
  "key13": "Bmb3hkMn3HwwV6EREUcKa4WouPJ3NYseKE79kfthG1q5iX791oE7M5wzHkhjGmRVj5spfmVsfZi3dPGydcVK31Z",
  "key14": "4PihF8pntjcuNvTbECs7Lrdvj2KFr2bzCLc6go78sMvqRzhq6auzvSapV5pM3fbBWZ8EfzTwyBDTuRd5MCUgkBXT",
  "key15": "sCK9wncPiJnXSVnptHgbuyuaaDirTrTPcqeQhe1aoajbBCihKiytEdaJ6matCtUpzXF7YS48GNG8EPc2a9sr9Ro",
  "key16": "5eZiANBMyRMkTzrWuH8JhBYx1DRJyexYqv1pPuPPi81ho9HMsP7dy4XXHv43ivHgVJaC1hPMhFQR6hQEyquvEFjB",
  "key17": "421Eaz76WX48L2UNe6Sfw6Y7oh3gTYkYAx9LiDwAUrSqeBYGhWSv5Hx22QGjZbCawY8xEP38yMAe2a1ybpngNeV1",
  "key18": "2oWywADqW3Ei3GDmrtwHY15Txyxk8xfEXt1xQfh3Nj3KJ5N5J5m25dLKeczfYuawrx8tdQVQbFT28JJgTZn29yKF",
  "key19": "39NsBMN2orqSjY7nD1qbLo8mVWT2wmj6Hn7eZBkkhUeC8sJy8C9DYjV5i1ZzF9cRCeWXoVouB5Uic7FFbQsZb9GY",
  "key20": "3Bz4hXFJKGHUL2JEb9EqV1YVKyAQKkvTMLDrUywsLbmQrj1pWMFrLRCVEpRaDfLc2sbcMwRxtjLCvteBYhiVtBuf",
  "key21": "26D7sCrF9WXiEpqNgErZKewnXqYZLpeGhKorcjWnyFgwHB8HzqabZomdKS2yS9hPYQ7iocNXBgfPj7nJiKq44Mna",
  "key22": "63QRqnEeyGDqc9GwVqpgNMVULvVZHXYRrxnfA2Z9zsD5ddYYFSuXLUDviEn6rHYR1yEEGDAPQ1XxcSbsWy8FF3Gn",
  "key23": "3fNE4fKMbzAmAPh6hShmbLpJMXUMY85TnK9xDsxeauKcea6NbTEqMMzQAm4ZAHVecMqLK5jtHCKhZEZRSJipXKuS",
  "key24": "4f5Hy8FubtHVNYtwu99eWi44eFsNoCozNTJNZghgKMFH3ydQVwm4WLRG9zbdT2v1Af6KNF1KgLPMDrrGyRzKc8Kw",
  "key25": "JPCKTBSqp6iTAnD2ZfsG4AUD4zvPqiBq6VWiF9c6xELcfDxfYzEwXxPee7K4QaPU2Ux57Spu1n4Sgke31SexM3S",
  "key26": "vhazPieHAiaBfxPKRQb9b5uULo6EXzQ8D1o9phTfzH1MoRcnZN9ccoGQB5nXc26jpvNx82Wp6BhcgD7yGNQnizM",
  "key27": "3tZgtVBgAyHygMjCrcfJBWGd7Lr9sB2QrbpRyLAnT2dAKej6qNNrYk87pZgR4EXJpaPZtL2XB1o1cz17TuyJpf9t",
  "key28": "5WedKtgVMYRu8hJgDn8uoJWHDS76dEWRMCsNiHDqWsBrhBRYxKCRKpRAzTTrdxetvKRz673Lht1KZJg66UhXw5LP",
  "key29": "5ZW9QMdG24s2SgKnt1mQt64wKwsUfomohG4RvW6pYMNA8JujFsXJXpkBJUyVPjkRLoQKkM6r7d8MNsB5JKgirNbg"
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
