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
    "34suDmx69qLfftCXtGxhk1FRDZwwL6JwhKGHAbUv3X7taMuN88eahDKatz5339fUBY4J79oJDfcqKW1qXMdG6YAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hk98eiEmnuy7ckz1zSiZnGYxoNpq8QNqBaiYjXyn41jYrzH3Bu9XNr37ww8cuXpPgK1FuPDPpvBsVnD5eoUFxSB",
  "key1": "42wTogHA2CZNQ5PECDbrefDUjLEhU86Hb24NriStPdm6oNymTC31LtwvxzUHt95ZEFKWjitgnV16vwHoPnPTCLfU",
  "key2": "3GWYntdQFs1o2pxM5nrgwmjGnkrRXQnKGx6W2LfPZDpKLtV3GSTJbVqmCdRhPB6mgWXUcXGjaVJahiMQKUp81mG7",
  "key3": "2dEaeYmrj8jHHcXye7SHhrx843Qzde8nCYfBEV2gxAgKwTADmh4u7kxUYXrxJ3NNb1HdGQdeTFXXyQw8j1znqYuX",
  "key4": "4Xz8FZu5vvYv1MoyGX3jJLJhz7bzFeX1jUghBNuGX6Fk6feG641CwzREftCBGnMwgJNiX9kKEh2yKaVX65jHx6Pc",
  "key5": "jkQpUZtSzq7qT4gq4JUbDo49SCcTetjwZuwYoi2dPw5wwLGKd4qWPi49CUWXbEu9MPmsTPFXgaoeZbQiJUuvVvP",
  "key6": "29kHHL4f8DzsDgMPNCn2trCLqYQZCtSbSaj5F84s9vXHha3nJS2nGijWC6Vuehg5FZn7xoUsFXSCS1w4Yg3Axz88",
  "key7": "4Yq2fZFuy6JXxduzwsd9ccjDd2HNnB873ocRECF417c1K1dokD51jNzoJGsty9sMypqBmnXXor72Vs8q62knLkdS",
  "key8": "5VBE8pXw2sZ6PWkMnCKEEAmJZnX9xWFNdFDZ8a2oT6ETQpLBqdJBgFbzdyLX896xKEDgkCmATD1Bj7mgoEvWriem",
  "key9": "mfdTMYrJ9LiAyepeSzA3Zo7tZ2jwEZwX6dBLJxPV41Y6hGdxiGdF2h91eDdsYdCSax8tcdfdYtnBTNnk4Ppc2RB",
  "key10": "42nfPai1DF9H12VX88T913oMNSGrGvcMBDiWRfjcDVk1r9ySfSkWmxvknaKxqYNGU3nXSNvXvnbQiFE13nNWmxmo",
  "key11": "5fFKwTQkP5B2CBtJtR2dE66QJKZ5z6VPLmmEiM5kX9GR7JZSZsxRGp3vJCWFsNbTYWPxyPH1E9pkkbdgDH9XWBqU",
  "key12": "UZ5cvxL6odzEDGLJJZGaqLcSMTqBXuCi4gA7VspwsL11tkZhFs94WwR89TExjq4jvMdw2aDhxJZkBN7cyGKZPqM",
  "key13": "3WDu6XHuqhnhJqLVYZh6JxcdTCAxerTSGJqtM4KFCoGm89LeuvWzu3FowxfcG7gyfawCYa7nCFJt5ffCcEGWd3wb",
  "key14": "2eUzU79Nir6Cgv21PbQupHMs1QMwyA395pwo85V7hYxwmqhWo6ra4qXUe2amDut9NTM8pXyTDTKv4YAo2uaj9wQj",
  "key15": "V53Tt5cjpP28cTTVgy3Zoq6ncW3PrwpDUWrBGus3nmQyh1T43if3Bow7t9XmjDuz7rFBuM8k9eKtkLMr39Njab4",
  "key16": "5APfcjWxDcHt6tAnqby1BKjbf5nyBtmjZSH6QkTCZ2C1GfqHZd6jz9qmNG6ooEzkPUaAut3YqzCW71u5bGzMu47C",
  "key17": "3rpWuvU2QukSGTqp7jCwdDyzFhSGuqFe6NW5ctKyuepLL6jRjVKpHQcu3rhdYv3XkHzRFdmfzRG4qBpBgVV37Qx5",
  "key18": "4pTXmduPCnL2TNXisgtYRQz1J87kqPpaHR5VCx6GCzYh5Ryv2oWvZRffGDoucNsXNd3U8YtsFvdzfSSrUQKrAV7G",
  "key19": "5BDLxjw2T2PZQxxWQYpS45x3WiRddq33wMWCs8tNEbYvv8ck4BLQASH3iPfb4ZQAmYQqnm7TKE9LHQA783FYFkVd",
  "key20": "2pdDxJbRQ8MWhzL1rZFWNYq3uCFBrsZJybv9JSbBoojFXoMLSCQY6pB4WMGeHh1Chfh1xMARStD9YfnENnLKmNce",
  "key21": "3zoKK7rK7QHZqzSpxxgFeBegna17HpaffsEEHzSzNCnNujnjTqRDLbSXaDJWYW4UXFjAdU1zM34aHKfNNiPayVux",
  "key22": "3gxKNqnHH8kcMBP1cDLCoG71H19Bq12mY593rpdvvZhyciCxXpBm2EStfGanPCEV9389ztRvWC1DMnyqtmWbxHNw",
  "key23": "4PG5KomhWCDgx6c7s2xYom2kWsg9oz675Linb6Ao4R1ciZ7Lp7CcpH8HMpMoUeErC2EZtupKrM4YAGGNWHrXrGQV",
  "key24": "5iTgudyUHWUEhgrXGPMhXNoTm5GXQan6eLSHZL7gKbWodBw1FsChJy2qQTHvKACWrh68AEV1pWrXemqR26LDASch",
  "key25": "4txapxc8w6ZUo3twx7GQNt4srqXBW4LoHUSevVroygcPfZo9vtu34gtTtV5vGv9ZS2mYgP567mgFigM3jEo4GBpE",
  "key26": "37wfvkx2k2dku1riFX9eY4Las3jxSNUgATWKGG2a5VRfDBwXmFuy9zkvW8sno3foWFDcazgSB1qeF91eVydr9Zte",
  "key27": "5FxWB9KhSvQRjSis2U93witwi8ze78ChRVXBJvG9byQEXgfsh1LMeGjPDo8MseBV6fcMFRTcse1oHgYh5p23Rm99"
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
