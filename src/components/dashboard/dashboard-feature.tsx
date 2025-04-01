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
    "5LoA2WVBnxSGQeT21C8o2on2fmnk9Q61rtSJ1Yc9PiLNh2r9NF14VAcgPgKPEAACLyJVbJLFwwPDhQtNfkDdXqU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbQM6nAZDbacMmpirUUJhxKfUSoE5AXJxGziMgifEjEzWasnA6F7YanveUNrggJGCxKHmzgdMfmokmUX8u2anEH",
  "key1": "4gVnqwBhLNYuAPzNveuizp2s8DYc43v4y1YFeDqaQGdQ7zfoMJzcHtoaNKGdHGHCBavifXvVNof6RcPJEuZMFLfN",
  "key2": "4ngu38mW1zCDzq2aRTNCBF6JAF9bW7P3xtPszgbrTJqa7U4Yk7CkyFZ6zHadiHgkWdsmHJqQiS79wQmYFVtrZBwR",
  "key3": "3v3YtYft4co7cgebnB8doTXBTeiLBzLhnrBF8oDrS33Ko1vRFktPUd3szgzpaED1QTrcrFJj8KvJM8fPosFpdbUe",
  "key4": "3iNZQT9ZS1FMTEeVLggTkCKbWhSmmM8bbfc2J1Eq1VB13sZfMgjsAAB9AFNpdesVFavj1NfYHpqrYMc9C7foQQLY",
  "key5": "57fPdvVpR3BQwV3BC3GW4CvfeGUFPTZnJrTmvyZL1jHvezVA8AFVrBco5GKPS3iy5sYCDzpg2j34tsgHDzm9coGG",
  "key6": "5mXVECqZerCAfCoFpkVGXRV5UFNaLhy4Nvhhx3BhYpT4Zs1hBjYhqMm7Ue3xEgn2roPb4AxEiEKzhuzqTQ6VUst1",
  "key7": "jsr9BExmo6i9fN1Mr1c1qDU1sSn65YBCTKA3Fc2p2ZAvys23XdeiSEp7tYP3RrG8JWHqaDTPJckGcutycAhFRFt",
  "key8": "at5BPqkocexyKTddwW45FfdWSb3FgKZYEkEx6m72BCuYrMa2XPziPXMNpX6CxyJ17qPcbDDAE6mpk9DYdYDhpBk",
  "key9": "5EcCu37ZaZygyCNK7kJAupVoBxbuGv84Q2sWtCqRuPBJQKsSiTTuQSuXeLP4Fq94Qkd4W1aWZd9GrG58GHgjm2j5",
  "key10": "5c5EiuBPW3dDzrQcvjsKwr7JpkzBPzKwJ4suL44RnZZqRpiqGzmUqEHbC6GojkZtBucVShPtYmGa2MrzZgjG5t3K",
  "key11": "3fvrSXvtopEf9w4PMFFuVrcRzRuYnhr11HUsWAiGKbzbCqWxeTVAX1k1wvUsiygCk3L4zZCH6y8UhxqYq6FHsWrg",
  "key12": "2vawnyiEp7R7Ty8aPra3pvQRb4UL9AYvaKujExXSWemZfHYZm9nACRWg6MQ5TZCRDbPCfY6AKJCiWeKZKCURCwkV",
  "key13": "5WJRhbXroswp9PgH3Jj2LyySnXhQwfpmEtyJbuRWqAq23qmcP2dVFJ37hCEwiMff7MEqMZvxRSQcPs3qfzqS7nPD",
  "key14": "Mw4iQQAxvNjhf8WNuqNZ6hrRJd4SxiZ7FaNh3HpkVh5R6RQwpcHutih63i8vnaJ2B8n8JDtmopRfnExF9aFjZko",
  "key15": "65NXh9sqvxWgFJPxTu8q8sZEcf6gfuBYf8iyeQ8dgD6JsdttwRPGcMZzv3uY5B46Jd4yDtkNZdetBudE6UXFhZGt",
  "key16": "2qvgnad2QDLGx5QwhN8YuSZAG7FGdBLJEMqv1qLq2dt76iUocbK9LS826TFrWq4nE8N4KdRfe82rzaZURusQRmxN",
  "key17": "HupYAjg2VhmmNCQBWBDA1gBFZyupnz5ykzBLkZYu2WRpr9WWFP5Q1miKgyiGDc1VsywqFXihBesXLhgZhAqHHLH",
  "key18": "2hDkyyCVfNbMQMNzymbxBVnqGaT2B7nRvmUAXhbAwxV6BhyJZx9rKt9Nq9J1LR45oTtbSyqnQiUySCnexT9S4pk5",
  "key19": "5kBGV65e9FodW5f5rqSuJnkq31jUhUNgidJVLhzyBw46DwDcGt8VTXnnfjKzyyJLG2ypnxTxgCrcu76jbwxyBZAm",
  "key20": "3TkFudvnr58QGkCV2KJu4aLjxHeM14MZBh8G5p2ATLJyzf3LtzTR6YuJk3caK4YKNM3EKAsdNocjqom3ide1M9G6",
  "key21": "4iDbCQiv3Kdsrnfbe65x4jzccQB8oLf3fmP5p9tYeWac7qMAH76m1LE3BrYRUz9t72992cdRwkgKf8LdUndXREq",
  "key22": "2YadDPhxvw7TPFHiXePubsisXbKDVoHcKT22K9CrKDdP28yy9BD2Gy2tYkXCN1BjP1J3TxHgGdzisFsqR8PRUgS2",
  "key23": "2mtkU4pc9iRAsBdxFoTWVEzrYso5ePRxsQepwxTB7WGKhoHgc3Ni36sSF9jsmqgQSzocXFR59radURmiU96NhiUZ",
  "key24": "aDy4eVW2mzmzUrixF3QeVMxtxCo9ZKsVoEaGEjws5dbPqT2zZ2ADWKyhvzp3bz9XUGrhVSNs4nkpmrHDpCpAnzu",
  "key25": "3VYooVBxCotrKMZfxTSUmC2vwmrRdftgmg6L5ZMfbt61Zaoh3i4sBCnoEuNuwwdc6vt6F3gowsqM6KPJoFHPDJkH",
  "key26": "X6qQRy2zWGVJ3cWRJF547Br7BgF6nPkFAzS3LBmkYjXQNuFrqMZMYZ3ZTPjiV7VCVyajvNq6cytx8DKEhQzXLQv",
  "key27": "Uff7FiQs45GdogkiFTyXjKB6LPV3JU8w4uE2cwnSFdoHbGULsxMmrb9fFSEHByr8S4RuNvNbqpxYdq1wUdPDNot",
  "key28": "5TQYdbm3L1YH2jETMbTYnt47qPSVMqmoDVvEqVTdec72VEwcxc39UontJj4hjystanAXzh9a71seCZGmYQtXSXsz",
  "key29": "35zScAF4ekMbiLKDPSA89cGsdpQ5BHDy6AfSq6hW3131YbLpMbNZMcNhxPb5sxttHzCuFCKaZWamM4toBdWcHU4g",
  "key30": "4CJB7DSt3fzBV4YnutA3dNUotUVtCYUCrifiowd7ycv5YQiXEUUPgJS1SC3mM18KvSMTDKqueavZsBvSgjmzKSHi",
  "key31": "5bYKUgDwKQw5XmV6j8m2aHwCez7yVoyGy1qMkbj3tBroC9o7BLBb5MBUygMxXvFymrwBDiMpW2ro1f4NjKVUdzWq",
  "key32": "LhuWWc9pTQowHP8Sx3uX5rpAXo7K5iVE1kZsi8AxVoanSAKWyZ73Go5yCjWUui1y7EocV7QGsQ474fSdGnqKETW",
  "key33": "5M8pMSjtynxXncBmAsKSEyyc6Y3vZ21KBi6xC5fgnVYR8zW7HZkpR2ekAKKrC8fDuEFZMDzDS3HnHakhqXEeBx5d",
  "key34": "My9S2hfnB1mZyMGY6R6dd8xweQrchcSJjKNApKwE4US4vz2KWGHCgkWDMmgYseMmRTgQU4X2PZHjAQ4ZXMNpUvz"
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
