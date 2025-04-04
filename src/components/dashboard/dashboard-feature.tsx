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
    "5zXrAUt8zx2qvhBMnd7GYZDq1ZKr1brmWNkQJryKz6Az3N6baBEA2eTyJjwawwysBusGeUkvJNRdqdxq2Y42gBcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3BEU6krMGNkbWxpgjnr6fhBibNrq1n47NGszNwCtCugAC447Kmpodty4g4DR3cqs4PoaiWT8Tp1ta6nPh77WYy",
  "key1": "2ZXWHSk7qSNmqPmBK2g6qXxWjyXUsHA7Q4ZHRhuvsecDTwfRce3f4Z8btidituLKcXd1uarGKdzgBmHyAGYTTQVv",
  "key2": "2qMhKsy1dcrTpEvytQBqDkQhMCJD63n5jex1Qq26BDmmJjLXyrV5DwcN1FnRi5Exdxq5TazzguCfVAtZ1gL9sbA3",
  "key3": "5NjwMZNPHBFEFJ4XoSzp9UnzH9KPq9T9n6QLstAcSZFdFrg5jLgiv2hrNSvPYia3Hgx6ms5jrq2A85XscLB8Q496",
  "key4": "3GEHZvNAjjJQfkbZ6LSUzeGU5GEUtuZ6KvHA7z491TFY7zWkgTinL18gK7h7vzC1nmBArPHDTjq4QQqGkZNC1PQ",
  "key5": "4t66pR3U28aeMFL7zbux6VhLtU7YxjPvt3M6gBhdhUfUTegWPnVxvXaTr5aFrVX2sC47VzM58uJehVV54FDNt7Wf",
  "key6": "p6bjmP1xLqmFUAc9peXdUYd6S5hkNjruVAA7fpGHEd8eFAgN9dtRSQmZLs2CwyE97xYcj2jc4gL5tniTFFBpftf",
  "key7": "3VeswnVBvwrhJmps6ae5nsYJuVhMqPDaZeyMF1dwnkPjuKoNdZPmxQFi5tH78QF1TKauyU6Vpxgu1JLJb8JDBLTj",
  "key8": "265VNB2YhZuZJNLqgeDYmoMWcm81mjHTFi6bYwpU6jjCVnT4kLL71Ags8E1heAe8gRvw28w5n8PfxSMdELn16U23",
  "key9": "YHutYanrQjvXUToicLYtXjLXdua7cNQGAAHCcvvr6WgK1yWviKUAPU2NKdGm9bhAuFwd2yHHdGtyE7m5McVSkjS",
  "key10": "4og2ybSnMEYB78xzYgHnv685i2Px67GnGaA37pBfnAcUxKQofKiiSTo43WmhdiEbRpCNga6649GXXbnqHPJbnYTq",
  "key11": "2EnpDrZe4H1sMmyjYmQHyAFGS1KiJXNchFD9n5m9SYjoVwAWBFot9tRjSeJhUtoWtDzo51fXhzaVWUhCE5EiuwDi",
  "key12": "aNLCsAzggWuD1Et4xhwqXXTDC2Q7EPmZRrqgsERJVpHSQWiuVQt5MqvxXUGc3KdujW5WCURCparKtsg8WdgxYBU",
  "key13": "2Qv1Yn12DxVXfhQtrNaFg5HtPVwLpensFsgJWNy8fgv6qpL7imazA6L88ibb1AVyaAKkoNzDVci1dvYXR4vfUNXA",
  "key14": "2yKCcnNUszAoUPtmEvuXUkKF5e2V8kMGZ8dYkYBoAqwpFrd6Lmm1ygw7CmL56SEERo4Fa1uhLJEFQAMifJXDaWtX",
  "key15": "2ipXJJGV1cys6NSbsppyqLhUQQzTdz9oitCGoijBwyGRJ1pM1RMNhquVqMtRvPD68UHHUTQVLp4qQ4LF87DuDSAk",
  "key16": "3s4R2nKnTnau7gYzgKKXdzY3q1A4jzJw2GVJjnhGVLZ1i7yYzZwhRFo6wTViMFyjtWf2bcuMJyZ5R1dmwPWEWXmU",
  "key17": "65VArPL4hGHSmbhVnFqYokP912nvD1qNfuVc59f6HThN3XeqpviUbfMfMujnpZQoP6BYNafhByzGRwktXS14NxAo",
  "key18": "5pcXdXtC6UFWvHabjJkRsoVHrVCPGLqKYxVzfu8SA1YVYp32c7aAYyZSRCFjp6gaQAcunGACBxD9V9KdxxWucGXg",
  "key19": "5PR7czZVwdRLUzePE3H7QjbQbo3B1C6kbbCzhqzEXKd19v27yxHgnPk9p7HhkFeeXLvCN6xYnwpnfVAb3FUQi9oK",
  "key20": "3gvgr3qM5jNga32rCKt5p5ktuAWYqoNq3LdVqQwThtovLkXqmwJQRAU5hjzYJ7R8A7QM4VRDqdHhJxKVtRGiD5ow",
  "key21": "2MNvtXVRSN56A9XFWP9S8kBhYyK8pStogpRr5SdThfjMvfBDh3gxfjmLAVJPsr1T89hJXLo62oXWinrgb7QckXWX",
  "key22": "BekcHbhhqYTR7nRwxxWnJsYDaR3yiYcBGok8cJAMtS2pp4r93jgJC6JfgF7ff4SEu4gn7BqPBEc8LdAMUXQUw5n",
  "key23": "4DvQGjEYb1Vw3pzMCzUSMn44wRgnovGBiqR1itymfo6zBAHsWCq15a1CST4TFmgLx5MoCXuGbFgr7D7nYvjKQ9gG",
  "key24": "qhvYktkwMZ2n1DAU7cgVzYJJJU5HF91hhwZX9yQ9MUjf9u5WtZuRuWiAtFcUqbb52eHbFAiPxxcVx7q4SVxwEBa",
  "key25": "4kKvWXGGVSK5CVnt9Bv2BEt4UxbCzCLnA3hLgR7gUvaBpwecd12YxZB9Nkw42iohHcv7whGEvU5dHzHY2MjLkkTj",
  "key26": "5DLtC6jwgBwT6egTZhQ8k5C4SKTtGQAcLYfNW2C42qF4hc7kGPqRCbAwDE8SFjaByaqFP585eehDuoxsDJNPAYan",
  "key27": "38UwLiBuDamGe6Yrd3Jpkpa1QLwX9qpTKoMr7ArJwSJbc1UNbdhgv4JKLPuQg1oqNjhoFCaGYqtjgaJ7QQG6pUhJ",
  "key28": "2nRvJN9ZbjUfZPJ24CUM618sCiqyn8b7Xa72X8aEVxmV8hTNWH8tvJJq8nvLZhgPnMReQymiVLS9AMZ1nJcLHbc",
  "key29": "4oHbwzNpvKaF7DvQmh7wEyTSxTFPKzasG4w4VHXgiPV692pStzvSfw8c4wTyGop2RzN9RUCXfBABwBwzDvt6VEim",
  "key30": "jjSqfrkkuxQobfzuC1fsYi6hPzb7PVDeYDdyCBTesopMyHYuoxsZBP1VgshamnNXTzfF4gWoS1vWPPwjs9Ebnmo",
  "key31": "2QiMT9okdoE2sYJ2NkPc2AD1A3JMDEPtSfGqe31oFj2ScQzABMokqB34darLDpi16cLCShi39duxH55e1ywvc2eW",
  "key32": "2nGbUhMsa5B3oPVS7J7aQemXQuKccnFzKF3Hkdh4oijfgXVLbm6bQBUhUurSttXNBwz9oKRMcCnaH9QsKbbJQfkY"
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
