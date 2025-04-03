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
    "2ANtn5GNSiYks4rJmZg9GpaFDVx73AH8eZpWCrok4Huigr7XSsPWyxpmY7VY6cLyWVgJ9Fna1aVpdNoRu7wmSH6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cY2hwmE5kretM2dHPqn9wFtTPFpV9Ex2GSvxLmGAkpjiqwEZnCs75hwjLqZWLpaVb1Vrn2Gf6TbqbFGgeBSkgwy",
  "key1": "DKWvtE9JZF73ZproNVXUyh62GNjebiXj132svW3RoHsxDwXQyF1cnD8C8RPQZWuEAzjfLxPGPtRficYDXvDVXmU",
  "key2": "2wGMhQ4sT8FqJErmdZVPkZ8cdGFWBEoZdCGQuKGLoDP4AUzryG9Gj4kKw4ZmtESAVg7DgU5uZoGWioUt5rbMEB81",
  "key3": "4gabbcfHr2sh7A5io7RffmWF7Wp5YDD7HCfveEqUiGCKq3Di25QBLWU79Tp8Erks3Xi27BxN2XqtDn2YFjJ9bwr",
  "key4": "416Rf4Yr5cvUXDtDR9zmVWeRn8mBpEEmCnf21J7Nh5LzigCzzFu196qZ585ijDu3oGnxigy4J5uGMr6xTxS5CYpy",
  "key5": "4ngkeN4DB5ns3NRydV7gt194hpgnd83R5PaTSeXBvU1yfNziAijU15GSJYMUC9tJ2LJciemrkaiJev4uJVMkGeW5",
  "key6": "2vv6N8N6zvHJbqHaDG564P4MxkSKQXJQU5hHNBWFrLSC71Ah4j7iAoPQtGeLqd2Vp5xUVxXXeGTyweUe8nKgnHcE",
  "key7": "3pjnLKa7eQ1mfemvLp6o3m5sSG9xfDznMmVLccwkYkkd9MwTkE1SsFtzeo6btfUMRab731hXvhm3kZhWWVDAsfmZ",
  "key8": "5Qhpux7Fc3JyXTtYiHGEseS2NdfUSuzeM3zfq9JBNmd3uDUc5R1WQPT6zpbE5km3k6AQ2BX1bzAgvD88imSVz4HE",
  "key9": "595HdFGYt71RZVpPkoGQCb5T6i9dmAhAG3VfGa5pT6AAZgU2omgAy5ZDetTWtjqx7Lg5khxKHmkz2iVvRtwCtGKt",
  "key10": "4DpYXq3drhRTitbzpftjDjnhTtEW9w3c86QmiPeFXXEQzog7CfRoP5ADtcCYzX1Rfwy4uM3qpGRTZ8KotZdXaqUa",
  "key11": "FECTLYcjf559Bhb5dzPqBhNykRZjcwYmk9Pv4cejqWTi8TV5YfS2tsaTWGiNmZdBYKDaMx9th2RxwFL9PpvQnRE",
  "key12": "2MKovnLbPRP4N4VfDMKQYFZz12SiA55WQxyu7dVhHduezyZVMre3RDpCSGCRZjYZsRXNuPTEGCegrCLzWUj29d9n",
  "key13": "2qzEJ69zzU4KCgnfdvNDJb8xg8bJenhkid3jpSsL7y9hdKpixp8ovq6HtdFmVu5pkKs4TTEnnqw2Fufy2hxgmCvz",
  "key14": "2grEETapU3CzPX3HsfvRvFcTGL5jFcTHCTmPa1TYuMKqb5BfWHiEJgzMqaB2ESLNHaaw9hVgcLuZCXXXgs6HZ1ce",
  "key15": "5EZudzvwsi1qrf2ZnoyqdWgNyjS9EC1mdsFYvuZGdk2GrhuAqYdf1wPNwZU9sve29xPB58KhFKyt8kGXEidKfSUp",
  "key16": "2D6dTVRan5TbxhAxivEV7KU5ynGisdazYbBEaM1SaSFTiEj5ADwoZuwGTw9Bg1TWqLGteuG24oV5WWyRPYuRMUbE",
  "key17": "EbXBdpiAgJch2rY5PZqMRtW9HrMUTg2YgQmStdU6iEozECKmZfwAmBmEJjoLcPUQzxonztS6k4hxQzEs41VqedH",
  "key18": "4BwdXR7WnE8W9pzttHsK8abgJd7gH4AX86A21nGyRM36K1UauPhZLf2HdtVxDD1Fpb9jbDQ662FoboSHpkYSPJMD",
  "key19": "3E69wzi6sfS1ShyxhpGTmZDko9gGL9BeotUC83xd9MfbUs2MNYSUHWcKTp6NBrbBimWeQQG5Zyg6JDTSFWqVVXDD",
  "key20": "pKBSCQSo4Wjh2RU2ss7vazuoxuokUxKGo31iErQXjtq62NKG8vuMV7wYht8vtFbGCYDYKLecJvTnHo1JfZihLbw",
  "key21": "24s2j3MGhBdBrbjjbsvNj4NoXd2oKVAbgN5TLJUCTYVPz1xWS83VuizweAqNa7N2xVZGG5PdPfErNUGZHJm1Qoks",
  "key22": "9bBq5w7hzB7PEvL3oYeP9jLQxiRYJwQdAnphutQ217jJaQxvvrkggALFpABxNgoRfdPMGG1UqmKkLuWfyZBdANX",
  "key23": "3PRwzuMrq1ht62D4BMUZa4gCFsXzpLt9R4NqDytFCk3XWscKda1kED88Eiyztpw7ZYXDo6Py5buqmjhSbSKjo2Z9",
  "key24": "5e8L9t2dkBZbTcJ2i7PvgtiikxAeD931BtUvGAyogLz1cxh22VBePtibyyU4p12cxkRxmM8qStmqteYeQRA925uY",
  "key25": "3CayUnZVhDpheu3XWmwfczf4N8WrZ9CjKgsvipHxgZHvjqYK6FoD7CsABhbccjbCWNisxNR4WQUioRpik5iUwLmQ",
  "key26": "57uNBbe1zkBBePADgYe22AgkJvuxCZ8dav7gi3pDsfPNk1CwfoLapvTRWYipj4vR63PkJQnorHJQUWUtqBvr675k",
  "key27": "3mA18gAFZ9vQCkaFkhLQQULJfdcBWZR9H5jD8QTvpCJ4LFtjEJXWyRfEmiXE9cUWXr1wxPGStgyV1ge5KhXGHpRm",
  "key28": "8xykoqBbLfojeVijCSpHGAiDgdQsQSREwc1MHPUAU9qKZKKazR5N1rn9fsogTroGARvYmKaLQWPAJiH2Vd8G7Md",
  "key29": "5dTQfYiEnwNRAHv4ShxDA5KiKbraR8dC25LEEsishkcqU1ZZnwLzW7gewkjdWwUTo64vLDAiDdCsXuLnKZ8wZNHj",
  "key30": "3p2jhPg1B71NzjwvJvRszE9BaNWnt9YtVStinZWa6U8krgSd4AmGPvVzaB1tRWVaQ9yLcuU3TYktJGmMWPc2SDUd",
  "key31": "3KJejNp2Fe1di6DMytKGHnzHov7sbJEYGRXoNLjxcYHfHzeGqf1vyLZzZzEvmDBUCgjjwChTXQyJ7Adfm5wZHBn9",
  "key32": "5bnuRvvZWPkwBjBu5AeJaW6SJomLF1mWCrPHkN5e6YGB5ibir87EzUHuUvEdQaD1LuAXgSsCAYVW3oDF6MuRQptF"
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
