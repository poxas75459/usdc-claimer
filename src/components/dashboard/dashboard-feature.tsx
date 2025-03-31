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
    "4Q8QSMZTnd4oiCPzmWN48nTEMB948MyWXDWybT7HYqdxTPxw6TWzpxmBCdsLc1sdCovC3VAXBDdPEjfjy7jFHfEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDAhAf3DhikSHHPx2TN7Y34P1mztVwskQocnyjbd3pBxrjLp5VW5HCuy7Xr3jLCzCATf16cauFMy4BA1YNfB9Y3",
  "key1": "67Fwtft7MjnKL9nLnh59LcDMWcJoKkuJHPk3JjGNpdhtbHj6Y7LLKNH7AWvLYDyUv7ZymKXYGQqaKGrtBuGp72F5",
  "key2": "4DCavwHJA2BbnAdxYBbWXdR31N7HqzX1AZUhsUgi2n2GuLv2hcrDqHaBV7zpD2pYUVErorKkisfTG3b1ERgf57nA",
  "key3": "2y5UoA3gAXEJR9FbTivxGXdy9L9NdmtEF44Q2u75yyQV5so6GETbabRQoji6p24ABjBeQWzfG1AFnrAGDb6GfzLX",
  "key4": "NFaehtDdFsNCSRKMEKtzibAsbcvHnQJLsLUSq5xu5ieWE3SkoN9hzqRoAigu3jUvHSoGujU5MACQJVzhZrJi2F7",
  "key5": "2GF7gMna4QXLoDJbiZUBSFg6MDhFTTJUUEHFx98czT8gUchposvtqyS3Ph7x8pHZurBF4tCcu8nh5AW8TZUGyMiV",
  "key6": "3m8fsYjrLoYLVQ4JB1Xzo7pVYqhtZYTeUhS69KPyVx1vnzr1ATZmPkYEM656qV4zfCQ5zb6Leazt2rNyqHsdjsiQ",
  "key7": "2n3iP1FL2EVo28QWSuZfvYNy5YRTb7xx5sqXkZDsCXRJoVjoYfdmNZZqUVKXnZEQJZULjFMCKKP3yAyhxFc7Vo6F",
  "key8": "3ePRbMvYGdz4cbMwHHSA9sYuJhj5sYMSJGM9XgxSbftiefgnHqXYD9vD4Ce8Nj7c6UVv8BW1Q58oU6gC6P18Sc4Z",
  "key9": "4FjSU7SLDp1RPSwnTi8xPKhhowcMScfFHZeshB9JPMQW1Q1uH5FoyQ9iE76igVSYodcqgmanh1YkFfwmweF4mnmh",
  "key10": "2PNGE6rF8zSinzo49Ba5t7UqywAnmCFnacnzj75UYq7EpvZrKaP4Hs2HbBhKeubs2jZ8j9JRPYkFYzuEEknVoLDv",
  "key11": "2WahJSLPuCNhMoiyDPZ8SW34fkrW2ewAnyK1TkSoZNMNZjXeGoFNMaUGJuL7fHBVaV1aptAniZs5fRpncdS1avon",
  "key12": "5UfmPbAx3Z4b7wPTV11NnH5u9yxrXk8sXVhGNiG8RNLvGnzLqE6TuLiJyWAfNCYLBYhEPjCrZTqjnY2cAyYDTep5",
  "key13": "vnsJcBmxuRevQ95tQrWExcy5eHVPhiKfdEMvHzw5zYQdz6tGMPHXirYtXUdruBssCJ3WTxYVqadcc6CQCPMnaM3",
  "key14": "3QdV3VRjxyvaheV5mSAXM8UUPeaiTB1sTb5bbcfuthFkQVAdcr418dG9uBVMeGuN2K9uovbJrDUXF6BYp91RLr4y",
  "key15": "5gRZ5UXt13FmxZ2zmRgDspyEgy35T1fpC49EYiS8HjRRo5owiHj8GX7Bj5Tsmu5HuFwgcBsKBuCn8QUo3oQ2Dura",
  "key16": "42PM9RRnaJfoBKjai4Q1K6BvqnRyaKsw9aSMi58rBrS7dFVSv9PW7W893mVQ1JYCjUAdK44i9SsqZV8jqvQS1Dto",
  "key17": "3NqGLDNyELDb2GXAfUGpFh8LV5LyNpwsve5iEyFRXqxAdgUSkoMjyUwAoH5CVha7zX4zdfrr51WSNyhVuuLRfLF6",
  "key18": "5h2nxMPx7ccpjUV9QGCcizgWx4fUbsvj7h3wrXbRtg4d6qXfmMyyWPmonvq93fA7i1UWS1akdi3RZQTWBRhXQacN",
  "key19": "4M927xXmx9McmD35EsoPZ6oW3WiFt4pR1x3TpUAQ6iGCEFRdcpaMfnFjRtxjsY96DEXCe1PSA5dSRewHptmagmdJ",
  "key20": "4tMxNmt92G7gtdrppP1sjKrQdAjUKjeyofZinBL7HnRUpVnrbM3qcyHDNMj6Mtv4fCCyLT7iwphjf55QCdqVroMg",
  "key21": "5nDUUXfdQATPTC16CeiVMcYEAsCNHpuaJdEgpD5UaMfWf4Nu9gnZuRGQvTR14FeoAbWoG3NKBZV2RgZASY1RMZhF",
  "key22": "4nyaXW9ZBa7KuKxBbeoS8UBrCuQitCDNPXzFejqBpAjvGyKwtArSEEa7qseaeNQFSJVnuR9jA9BWcw5ddTYfsN4L",
  "key23": "zAYGSLdZrUa4GAX9Zj5nypQ5LQJ1zAXCxdsmbTexpgjhBMkb1gfB3hvyCtz1c8VfwZbUWTQ2XJdWDo15ZGpMx3Z",
  "key24": "3NSDdTkpPVGqNDHSr9beG4QBDv2ro27CScY6zJbxfoocBvuY3EcWky5vnN4ScJZ7MSnMpnc8gG4sSiLgDMU72bbZ",
  "key25": "3vuwWRna5wxxS11Tt3QxYR4DMSqvCJFHkrkQzYb12fUzomf8UnmbaqvgSevARxQtopsVQJymQhWDSgcQ8UVHbwxe",
  "key26": "4Abkz5rg8utzmCvf9sx5wL7ERFCvz9UVGxuUptbZXw1SPJmgesiwxhGEPHUts5NH35pWogpxmMNRoqRJcrhiZbjF",
  "key27": "3QjZa2juxm7Soy9Wt6qD8QfzKz64zN87xdeZ2oEZSKP2vuHNPaq5pJfyeEkZZf4AosrWWrAGDxseQ8zX1eLifrto",
  "key28": "34VgbQkKTyg2g83dS624uC1GF28Q4PnjF12dEShgLdNjgLPu28eBpDQAES88CC5WFaFPMBGskhSRqfyQbf7viBjz",
  "key29": "UKhxQabRYT3WYE7BvcgPMEGom4mhyPfc68a5Zd3cfYdNLa5mtCDw58MTKzfdF2yzasvXt5ubAR2q1YSBotFFDcL"
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
