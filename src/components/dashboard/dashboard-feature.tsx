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
    "34fEDQULskBUQ5hWJN2AXQ2SMANiedJAZJ2tS1W8MW5ohpXVDXAqbj9jp7zCpD4713M5kUnQMwcXxYR4MDZ1egM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374pjFDujctRYzb7xELF4vbscpMQPtUQpppKVCpCn5WGm7yCSzoPkbVRpbG5zsMvBFnYnMyqpj9M3JHvfeM9bkXH",
  "key1": "4ypLKwxscmp4n883Rkg9s2dwnQZx5Mnw6d8Sf5rvd9hLgGQnrkLQzerPRHJZUf8v6NRgC6H4mjoKShvNMpa8Sch",
  "key2": "5Nxk5rCQniSYAefVad4JcQNoGjJZzxeBMrjiGoCBXEPZNDEAw3gtiSiGr1G1wbfMHugVwk2RkVQuFc7Qw7jSEeHq",
  "key3": "po6BmcDSX4BD3NYNE769KbdiVM5bJLVffoaZsDJMfDw3vgsuctiDtPQjuwi3xLob93qcvHKsFqGqJAWR48N7WdM",
  "key4": "5ewXwwzwmwt3XqqrcKPNnVg5fSBSpJW29h6k3yQLx1jS9EN8SNFBLHhvQfBNCQJ63hMkfFtD8SA4u64aFjUfVvbD",
  "key5": "3hc5ZskMvjTKhuoZ9VetWA6JV2HFvvRkBiW91iqvE14SVnxmrg2nTUJiQYjrRauP8f1y5B74QgCThaXJ6EHdAAs4",
  "key6": "7nibdFJxfX2bBfEfeA4a4p2xpduyfDXMBn24WwmFkoaaSoAkRGWEBxh9ZXNdeZU2JMN3yNwKQfVDiuSYkqmAhLC",
  "key7": "4QrassMZjwQMa8hchkr3A2FRi63vYzBQMDHYyvQ9NDAq4jyaxTnEt3dG5sHh4SCcXHTxU4AExikDQWriKkXQWdrN",
  "key8": "48rnS65qZxxBGmL5f9rvhvoZiP9UEw4A5UdissYRSKwChvZmPCkNfRBPhbnjWnbZCYUmC6i2Vh9ChU8fa9bcwVgY",
  "key9": "4UPmtcQ2HjH1QqrdH6VceCKY9WNZskXmeK9VttUfykRTScUJZH6QCWWhuQhVb8ZWjnfpDaKzjsb78TscebJjLTj3",
  "key10": "Lez5cWCm2Vy38eRpchzAmiZTSTsQFVkKrzvALBDX7gAzCBeto9E8vCovfgQtzKuqW19r7u9qgF23C9NFCU9yRGh",
  "key11": "3qfjHQH6dRfaNDkXFMZ5osfffxvxwNnqJkfm7dJqWSARVKZ7MthBJQT8LrMnCgv1EqMQdAAbnTan4yZMNiLjTx4H",
  "key12": "3aVcxQg9YmyycU4gfJLU1KkzgUNDDmaThL1JYAdgfC8hMhQBSjBEGUB1JjDHgFgb2bJ725ctKzx2KKGu41MpCn1Z",
  "key13": "5DYi1LakbRtVKGQYk2uHJNGabzimd9HxsSQFpd7wSGv4MhPgPQJHxadmSx6UsE8k3fjVApxVpZ4cUEcVVuDc7pXz",
  "key14": "3SDj1mpRhzpSDT2fwhpf4aA7K5KLibn8Qzit4At3wWaQsdeatqZAaLevtR5eF9HLcEWHgw7D1UtbC5vYvxB3dhSt",
  "key15": "3gpXBqfoCMN9yckswsgiFd8fNjEE4UrQKWiLU6uLE7wB7EPwvKLFS9aP7xCXuMz52zt7SjjWAy989bV7CmTG9b2x",
  "key16": "3NMcxkTsQouSnStwz63DQNrkd6nXGYLg18RMaNUxsFumtyvciENUrnm4wkYjRgb5KkVTAQ2RjyTzyaNvE2wjGC1J",
  "key17": "2c5u7Kb86MV9aCeinomzVWq9mJHyRRcwYfKUS6kvQNwsqg8DubEiLGAgxYmTMGKsbZFTNDWkKNXVmq3rfGT6nocY",
  "key18": "3DsCnMGGDq8cAHeYhUe8Dwqvxudzwo9HKNBcwvatHfY8MJamkbThPST2LTfy72NGsTKr9Up3K5hYVx8ppsGvf1K3",
  "key19": "4w68HDhbbHNmuvsaZH9PqkdMih8ifeZ4c8NPNThRJJuc3JecYnqF5ERsVcpqgs4HWoJhUQP1bKjoVK4nbQEurPEu",
  "key20": "31JpzwN5s1ENz96SEMeYpRteeDJ186hxBG26GQbffwHyyn2CQEQJWGwvUXFw52Jgpz1NtBgesCK3MNk11HXqgJri",
  "key21": "5qeVceaCQz1eQqSSiCLJsJ3AZvtwDAsUpm8LtUP3WCBCHrrbko5Mb9wczW3TNXTccKrH4T4vPGvqofcJcjvSckxR",
  "key22": "3AGosoCYEiSR1narDo6KeBQz1TtCRaWWwDR8EnjvgMJFcXxMW9rxp3j2jZpHceU4CkRRH1S6GcWU6KbBUV3vWh4o",
  "key23": "2FnyJ4EJy5jXdkiwbm4FubSDz6Us3qMU161723ijPTNc2E3MS5RtD8e74pJRGpqZZa4boiE3t4bhHUmwPL9PcY15",
  "key24": "44T9Fg4148fersTZowZt4R73ywb8FB1UUmii1H49J3Miju5TvT8rnHBm6sxfQn1aR4bGAQ5e32ry4rYgfpBWe1tz",
  "key25": "hdtw3wPxCdGiuAJc1bZnBRi7ud6iLVcyGy5fu6AjL4dCqAAFDL1bxr1nQ9NKJcyR37qadkL61h878nVk2a5QGPY",
  "key26": "RsRTZXiEYrCwSzZq5f5tp17dQbgmjgauiqsxdwPupGKieWMFMfjUJdFPTJu2vpgx9PchhgT7e5VTCjpiMUkz2d5",
  "key27": "5hbwgSXnvXQLkwxV4dxb9Mxuznpqrdf6iEW9yp547g2cjhurecoHYbPF7JyKhGeAumfnf6ypSiMWNxEfksCriCWZ",
  "key28": "3NM32T8gEzQsgVgK7hrKZRi5xaG9oWg71Uq3DV5XrSo2vAp74UFEM8YGwjYPgKSASJwPiyVymjwvQgiBv6BAz11H",
  "key29": "2f9m9vR1KeqZ8tzsSsVRRaAZbsEHYw6gGFx6UzfZF6x8WtWmNT2HDjYbrkJJb6VzwGtoF7hfwGsFNhZWiRMuXcSU",
  "key30": "37FtTnHKwCiwpW39mTpgEj8wyAuMsRmKYbpKct876Mw2pCiHCAUhwhy1EW1C1BaneTmzXQVtWCYdMdnJrh4yWwio",
  "key31": "2LvXvhiYvDrMvjAEvVjkqp5DXHZoN72QhsBRASbsSSX3E11e1PN7DnWFC54Jk9HayEjDRmrGa7ZgTDJZi8PGdu8T",
  "key32": "21kXTuyZxu9RATbPTaJLvmQ3RSMSHq7MeCSZVbdpbxDRcyQa1caSEqydH9s8jgYxNcnzfMnrwJLjcLpLrwu94URM",
  "key33": "3CvPAyTYG55et2fuSEtKSdsjGcfTqYxrLeunPjQcUpAxPEQMSZyrBjvTe4WWwgZP6knd3BoBNJW7X8k3ELMHJwHP",
  "key34": "5ALm9qWJqZFb2ifR9vGWiR5gHozGDHPc3gLE3NVY5vGVMPjims5VYRwDeWfp6wnougyrSsqzysWrugsi77cWnH7k",
  "key35": "5kKrfuo5RJNdCWADW49xV9qy2tBT56LKGw2EDD8sdhjKygTDzAePHsYfdMkgQHaFPbM2gM5q2bgAop2cxqJtaCfb",
  "key36": "4ZHf5rHY4yTPpQLFs3BJwxQw8LWYdkt7qh9921g8nAoULsTQchWoS63gSwFMS6GDV9MnfNxfQikWcXJACugBtLHZ",
  "key37": "2mNdc9rpg4GuDMe9M6kVSFJ7F3p1J3weCdg29LbX6z96feThLdip6eHpbzeXbyib6H3SXAMCZZchSJn6gXKWXghc"
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
