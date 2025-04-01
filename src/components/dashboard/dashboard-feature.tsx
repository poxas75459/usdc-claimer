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
    "44NmZbusAHMaWQeFoiXth7bqhVKLvXGPZjtjZXCQ1LiMXHwGvVgcjvdDhrWX4DbY5Bev6p8jep1tMNuQjazdRMP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nAomKq67u2yHELkCYoadjUdHDxqXr83fP2UL9LAyWhfDBCjDqLS47348Q1oM8CVr91PHHuQhFACm4g3v4Uo4PTF",
  "key1": "5Eur9w7V5VBMhWQprAFTfJYks9ef7keJvcSgCMmBhrqCsrarE9YXeYNn8sktEoMwiVTr3pnJvkywjZRkDg4cNG6q",
  "key2": "dKLhceQvk7m4ND1Bh8ctTy9kbS57uCBbk6FYh59wssxQe2NBskqjtLvoC9RqvDYt8PgNfci7g6XeLpD3koei2Aw",
  "key3": "3fHQQdwMoUQwYYeW3U8HxBZjFtpNvq7VVSm2ZWXeVHd6LPgg1Pzh9EyzS6Xjc6faDi4baBuQ82XzpMsRtYaG1A89",
  "key4": "3hbm84EBYLuqUjooWLtFAMPjqWjkMZ51SHGctdk5WSRvbD8tLJs5PooaEznZWFjskUJ8JD8BCYgPhe4teJepyWy8",
  "key5": "2Mc2AZvYyJQgLpFAX9Cm93NFVMBSv1MtCnGtYgyBXM7iLdYxDQb89zSkbPyGqt7xkHx7QV4nPLNdGSZW4EzLaeNq",
  "key6": "4ruh6oWd4oiHvCcXx762NAJ3ZzsPGAXRGmd4fUXgiqN5xRxKAKbMNLTg5rH8YdHMtzsPf8Ux874L6KWKHMLcfZwo",
  "key7": "2xaTWeMEFNpEyGAGztzBMrmvMzg2MGzyeWC5VGFPn8EmfzizSBPfACpqkkUTe5V8arsWZTjfQTzjZ74Gn8q9zaz4",
  "key8": "2E7kT2U9wkHDt1VfcQtmD7MNvrEraCLRoqakYn1b5G8ZKNhFyBN59rN7XRVMFV8ZTn6LHtWAAa5RZhSrnAbmPqoJ",
  "key9": "5sExLaMLBTN5n8ngZKC4Z16AJ2NcNE8GuJQQgtfhA8ctABninLTm2QZFqEAJcFCeoYEgfYSg5c6CrTPQvExGjBAW",
  "key10": "ytQNourhjUFU2xEEGXcdTbs1Mf7fmrPmWvnPQj9zo9M4f1HKtRuMGGwxgh6HWQ45WcTZHYLFDoKmmRprWdtQ9Tn",
  "key11": "2KyCnjNfTT8P2Vz7JTEno3fnCxwr3oB1hAoB9BPgdfTViXbaFruiB4zkjQUTurCRU7Fy5PsqGWYBCjCGCPKs4VC7",
  "key12": "LzwMonEGHT3sVRn55YpmMamucTV8dH9haHKrnq1cF46QnimbMzccb3kpUFwqpkRAJWV61zvV7a6n2ZgERhxmQ7N",
  "key13": "3qGizKCa9rthZq32iSrq4yttfHsBjTyBRKAFsaw97e421yPTrzCFoc63EwkCeLAVToSG8defBq4Vi6D7DhZ3nZoZ",
  "key14": "25XfvPY4NRjT4NVRWdAyoFLQbYj81vdmQ3NiP33JYmb6WNcnCY6mwLwMUCFks2dd6nzigfif8nPjKVA62CU8h8tX",
  "key15": "2MqoBT9gHkdb5SMQW72bYYUgze2QaZUBJhQAKo1nCLTq9Y6rrseqkw6dt2c6UjFg14m15G2NCxR1z3DXVsitKRV4",
  "key16": "2RpeNwPGns4wanagfW6sSGgjhsHBciFAqxPozmAyQ8y3HzAcZHh1ZkvGzWiv23iJLkLwHqaErkMyfYXZbZYy1eUJ",
  "key17": "4h7iyTc6mEkddK1hVmd6gY6dcDGr8X9qchCXWUnL49moocFjqk5weNTKgBfztf19XKGvgMqXGnLLk2Tukam7uZqt",
  "key18": "4XPcMEo7wCZ3iwrWX8NQhZsxeZ1DU1P6r5GXkeF8GEpmShraNjG9dHmeqHSAhHqPQNXWyJuCtfHy376CTiR2w9sj",
  "key19": "2dwDZ4aiYELFQA1o8mjvVRm7Lqmqe8Q3RT9GYDCPxG999HJnG9buJRnjnLXh3BScnuvM7xWPMcr3rF82sz24r3tn",
  "key20": "2VxPFsGB341LHcr7Ek6AFPcJr8ReJXC58ELE2rQi4JSj8UzDAoojRMUSH8Ji5N76rzTXgRMX4ARQsQwgQ14YCQQf",
  "key21": "5zrSb2d46YCf93mjKonT6wwz6ETDTVgMDNm1ev4173oBKi5LuJAjqAK1cbr1e1SK1UW5LvfWrv5r7BKiNZPp5kug",
  "key22": "5AMGSvTYPQUgU9H8S5nUT5jYpjC5e8rXNt5n6iHEeWaJCDMigf2zBL95jZAwUh9SHgMD94aJF8PQQDWMQCLJjmoi",
  "key23": "36tewLCbtzSXShawppFLTNxaX54s54iUaAvwKNMEkQ3gk35hHtur1rtJzYTKReHqGooDoPr1Vr1qaD197NKyKdzx",
  "key24": "2oNWZr2y4A2Xw8nUu3tq4cmH9ELDvN7a8MmzPg8rzgyJnsq44J6nZKSxJiNW5Bb95MX11A3Me9GdLTQJTLvzzKrg",
  "key25": "2QACvLiHsJmj2fw2gNDs5Sf5VYw88SDLPUm8ZTEJ9ta1FfeK6xJDK2K2hA7XxuzeTrGkPHtH5znQrR2maTRBP1Cv",
  "key26": "5UiDS5Q9sXBn9TkeTLHjvNZgmSCeJJjpJyhHVS7t8DgyMykS4LQ1o1rEgUTsfYgu18Eg2Kb2sDpg7TYMgUD7Hhha"
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
