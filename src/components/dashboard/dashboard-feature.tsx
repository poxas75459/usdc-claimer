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
    "5ytJJR2pam1fCt3LHUYtWwU8a3nYwBNZZ6ukRuARBRnW8PdkMgAgtNZbXLvXvo1v9fbVToypDnkXJ8ns6WRFxgNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eckeqywwjNc2ZkLLt3GVKbQWgr1Q8u1d6BNR6DkdPh6LCR2YbdPKaJSW3dtiGZpqiuRHfYSvrCZzeqNWT8RrzPj",
  "key1": "5Ea2vsdBxF2QUzo6zdzN9YwsLjR2fmnp3FYu1M3agJCSieZ3CUqkXTNC6xMnKF9YV84fZUJRyxWy8YiDB5CDocJX",
  "key2": "2RUUoVfpzX83oFhrTGGg24pfiz1KEQDi7sxEkRiSBHNDiJPdghvCYhgnBQZwZ5QopWH49myxBEvNjEbTSm4agPyq",
  "key3": "6YvrB7tWY3NutgiTziTJ4iEh1CJVBxGqcgTLUnWPvhGPPJoAnTMx5aa7sDWwSqppsegaqzepXwPfGrUgFvhDguQ",
  "key4": "RMRNKNgagea7bcvAFLfERJVgYezawogCeXTMLXzoTmBXj6GckEvZxkTtPnP3H2BZXLtKBKrtQvRFK5Ajdqqyntx",
  "key5": "FXbTqsGKNtdanF4GEJa28swfVoKb3y95dPn9ycjBq46pZACLUCJHKigyi1aSmt157geHY2Mo9BMw3YxT5HEBuCp",
  "key6": "3gjyYiDEFwMr6Mr3xptuYrnKYLnop65fasBZFk3hDCfycrkM5SDURefgPo5bKkqbUWjyM322YftgmnEATVBE6L8J",
  "key7": "2m9bN4NPL6HaDC5UMFnkMgqmt7Ez2dtgPdvQt6nDLKqHj7Knw8DszDenc6FgMcP9w5FyAXHQ5g2YWjXEWgJvGgAc",
  "key8": "5FT3wsLsU1XXUQn8A6Yf7r2HJ4ZhDocZhsKwJSnDpCwa3WiKVwFVNHLHZPMgyjNjQA3b3G5mpDua22QFsDWWxzKa",
  "key9": "5EEfc4H72pPTVxZF7tt4yyPTaq5oCx9t31yPBNTpsN4RBScj2YfSeYQSR9TaZbFQbmLuhKTG2RL3GmLpq1AJkCN9",
  "key10": "66T4G3j9fk4QcAfaXTRi6edU5LEKasfYGb4UiqbFkEQ5nCVRft4rRQZ1FjyjvhYcgHkyCnYqeF7XdBr6uJuGv5RP",
  "key11": "3zSemQawkR64mYELNTpakYPLowbsFBGxWPfe3fo82HJFdVF24rWF1z7F9LfUKs1os3xtrzCtX1e3LPHXv7WiZZbQ",
  "key12": "3SYPpHPsyLgcs1LgVxpxd2fp8vwdgvidB6WksqyfJWWPrHTN95fy3P4hPvbzWS1CFJDbp3nM4uG9V5GQ2jCXUyM7",
  "key13": "52apgAjxZH4FiAnA6w9RJVSfphh4ekP93yzuPoEnvqmdzthnzC2kLbQUdFLPG4jTued6Dh3JZoeTYdP6HYxWrhzm",
  "key14": "47jwiDSx2RhVypaJgUd6ZewtJepQqc3m6aJPHrgMdsipc9dPnuNko8dz7Bv6N4SavZsAvVjmjyrxQb6b3e7WKMXQ",
  "key15": "5aao2ybhALZQFdjdnTSUFUo1vBAjTV6yu3gHFFd2WNZUgdLxJR9Fy53xadPhvg7WmznxA38xfxvL5hTAE4iG8EuN",
  "key16": "4Zv1CpUB1xxw8iurzcTygycZ82RZduvxaHkUq2y9raxoz13QsKdQAYGM3taBgU35KRjc2oeB3oaLXiyMRxNk1uUr",
  "key17": "5XSPHiTxt8FxCnWu7C7oebuXi3NabmYivvg4pRMTp12ToYtwxpz8atZ5xiwK6hMWDNqLqBLUTLv3U5civFNdsDS9",
  "key18": "MSSxvsjTAmFRwKsBMg4PxuihWhMRe6cXS678xn9hXrccx7pjfx7Pg8tA9hW5VJCAs5j6H2AQTyuQ5hsFVj72rND",
  "key19": "4JFp7e1Rw7L45woiDaqszPD1KXwHZ9k5xs467Gh4G58tCFkfvg65KPAuNqyRTituhRTPeP3NqWv5pweB2PZGdz2T",
  "key20": "22WjCeeq69xfdHyL8dLANb6LKCP679YL6QK23oFFiSSjUM79T9ZVHPiB2CQGiFj8TZ5sR5tYVh8uNTNyG19wXCcB",
  "key21": "2XCn5zfSUXDXju2dCYg4xiv6wR2UfefzACsnZDh23vUU4TLPGcEMysejicZrSpy4xkbBv4oa2Zu4NmGpC3ufzBzT",
  "key22": "5NDM11hh97UduAhWDMMBirqLuV9fhgmAqYjFYTtBaAUzM4NwaMUxmA5DJbjtCqKcUK4QGnrS33DwFSet9hqo6q9E",
  "key23": "27TLPNLVnqqTDYtMrioiS3WuPLxiVxWTA88xRz6FosHiFotmVQLkrZNMZFSKULx9h8bHUMNZDkmRFQKa2oNFLjaR",
  "key24": "5a91dYP4bAxyg8GRaaktRZsmgvvbLiVbh3qmvcCQE7fZ9xjAgFH8wuWDWqj5Uy63K7HfV2JmYTQJj66CBQN18EgU",
  "key25": "61eeg4FmuhBZwkg7StXo3fQPoNdP2meQatchHYVnwB211iASnwQhaPpNeu4deacpbeZVzQNX3DFse8gisfCTvah1",
  "key26": "qiKLprqsd3gJCHeCMySaqvGP1v1hExbSXuFT2f7onLuFkEZZhi35pd9gWkrmSheK9SypXrQ8Eq6DFx2WMd3B2gL",
  "key27": "4AZtjYq8K6yygyR7QbzsAZo3fP6LPTAEKsJ7mDGsf3v5xgdJL6h3CFfxgR8SFVj7SwPcG1379hGF8DN9jwkRt7DD",
  "key28": "4bdwNCMBCx4u1YL7LcESc9wKXR6uhear3n59BdLCdL4jT4m38P8ufr82sRRn4TipY2mNnepQfiSZ69Lmy3BXbJu2",
  "key29": "2Lz2z7DsN9cC8AerUdGBQ7oirYWJMkCeGtfPb9xKXHssTBtMwtTWrcT95qCtf75rZ6E4tEHoZGxgwu4nX8XAvswC",
  "key30": "2nzWi8pnJA6zu5fYhboC7Azu3YCQws4oo6ihMzhXvXT19NoPxVojdjpPn8CiazHFECS2nWLNBzJA9Q2ianFc9cHM",
  "key31": "bPoJWoaZfTCodBjeKSPwitCdrZ9CrK8p5NjkCmSQbgk9C4sedhbihhJu9Co5DFXSULVxFhSEBe6FTJtRYHkJJsU",
  "key32": "2kkHPiEUYjiATnNJ2yLgaCu4CcsHsY6zdbEy6YrPYZKptbsJk7jmRXFVQ5ye8Lxsym2pg3Q2p3JWTjzTipgrcMWh",
  "key33": "5JeGPBd4JwK92AMJsgddhKmBKisxRk63eiFj1nG19gKCsCa5CnwTrr5BqsSV3FSDoTCu5cEMrxQsAiNt2QSSzxQZ",
  "key34": "58N7F8aCsMWvhSNHTWHBKCV2ahZXnYfu4sq2uDZ2h4pHM1UdJhom8e1hxCVikRvgdH3CxpLnhGe7XVeUWGvqnXCe",
  "key35": "JTaNN5s8BBgF4ihFHBqpZGVBNXm7PMR9bMRLneo8hJU8Lap4G4YNoie4T99msej6fSkwbuaL88f7AEyUCBTtJ39",
  "key36": "3YiGYA8XnAMyFnhLnWGwqQqYfSrY3YmAKBjCusEhyQ3nfxcNdWtTmys3nEjk6a1nM6VQikeRCKxUxWsobKkzA1PU",
  "key37": "4vVveck6b3osafj63Fvg5Hzcrqx3WAHA2onrWpktBZDdeh1vxYJsTSRdSRYMhHJ1GeN1L2BiN3eJntrdk3o7TZBk",
  "key38": "5KxxJnrwoPxLLGZUA4tEekeFLXqyk56PYKUJoPFMwNgZAmqtnZHsv8BwtoaJ9YcBPQ69ZS3d5m1nCBfnGtz5UEVr",
  "key39": "3YrGuvHQprjBfJSmZYPAik8t6dHChRhqKob6hB5FuTYai1wdRM5jcFEr3epfcprquYBdVtUJMfGqAX64f9yYHWiC"
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
