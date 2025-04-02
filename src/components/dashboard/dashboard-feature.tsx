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
    "2bwiC8Z6aXYuATMzEgt5vXvYCbHuo6mDvptVD1qeL4iWcNRPbaCebDFhKRbejHozDm9cJoYqWsAwDTRzVPRrJxbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1X3Yuf32LX1pMHs8DUQH9dfNCJpvLokZiPeGsb4y8m2fjg221GgDeGVjozFqz8ayMnv5MCPZozb1GzrpXxw9FF",
  "key1": "2R5Zue2RVhsoqUKToKVK78bToWsQnhP9SPPirth7Tx79jPrq66eC6hGKw2tPXQACnDnaooSDs4iH8xrGLUMSAykx",
  "key2": "2iCoMvrn1uiNjs638QLHmxJS1jdywB8CBWt9dvZqoqvpKea1Ga21h3qrWwgPZWv2MAk14EGw6KiF2bPEA3Zx4td9",
  "key3": "3JZehZNb7c7XAexT9cV5TAdxLpGK3FFLvrJo9khKVJUNW7fb5AtC4vfyZTbdLUvBzL2MTap1cbwgrKwvCaq4x8WX",
  "key4": "2nXJghA39be4fw6zaKvyCndu6zZcDxUbZiLJo3Hq9BHDrikwZbus3Dzm9qnWpwFx4eUjBfRi36raBvzeiZQAAhZ1",
  "key5": "2vHQiPGSRAVdCT17nSXMqgFkz7QScPaBdntkgGj7Ur3F3VxfRU6i7VeNyunHtZRcaa977iNny4iMyx4ddFvGhTP5",
  "key6": "2U7Xo8QQU6U2uMbLX3uU29fcWRkXWzFpkj8C8ErC1fXdZT3zeFAWiH3An14c1vdTJ1XepPPi9dUQRoJW3yAQmb9J",
  "key7": "3YeuLHjVppR1Te8Qs99C7RpZMk2NkdDMo2tJrfcVoSQ23LWXwe8d5EbTrmYsViaGqhKT4njtizuL5RZHgiiPHQji",
  "key8": "3YCSAYV45osjaXL2f6qcadVvHbaHs5XCBuRR38FeKDFDRKSAVC1VHtiKA9zzH2EgXJdwnuXTuXPJ3jSe6vfFRTfh",
  "key9": "5Uq8Cm2Uysav6csWG1BfWvNdTSyFNtPY7aSbpTCMHNE9TpFywVtt1moi5omaNLJbTHcuWqE51uW6Th2VKh6QQHoE",
  "key10": "3AshdpNdbxdwGJGKcAkVPUTCTNd7RXFaAvQ3ZFeUjXtP3nfxjpfLZp1wvARc8yEhCW7DR9yQakhpE1PfheBaPZFg",
  "key11": "225xP4hBgqketRPy6RibQggNjNCRo3K6myUprYvLjiBLA5ks4FbxaGd6FbXSdpWQddJrEnAa28tDYPCoyPg67fdk",
  "key12": "391vhYbJ7VHosYHjSoz98XX6hFGAQA7TMRsdpfAgk3SGE79T5LCF83SvuGb7PMhLGurYutMTZLG7FBridHvHGCr6",
  "key13": "2L6AHoWVxCuNdqPHPocacdB9a3F6GAwmT14zzh71oWD1QzzyFXurZPe4erx9iZdCNDfMJePLfrSNCmhh55magaRZ",
  "key14": "6M1X9yDBKXpBTCfuSyapTnoMc8yWRw8CELmTT49hAmUWtmfTxKbqzy5mbapxGsR4y3f1sF3e7bK95t3mL9hCRVQ",
  "key15": "29dRT3yLE8Usugt54aNKRpnrgR1dinEADJ8SqYQfwZUrHoEHQ1ttRUREPHHmB1EwLtgV3XCKZQ6qg5HDyXeY8cHa",
  "key16": "4RMxngpkEeyXPCw7zQtXhok7hXwcRLvkkeX1G6vLJQpwqwYRvEoGKi5e4NWyw6jB4uVKB7HwJFWArnwDcdQipfYm",
  "key17": "48aF8C8ww3NrxZY5JNjiL2rmfGLVsZJFv1GkxCdgT7Wa4swgnas87Ze9xPkuqr1Xx21YSrwxLpEepozsgRwrvpr3",
  "key18": "4EpCgbwUyXRCPsWhw2BLXJSoxnU3Q9HvTTgHJXnWZik5jpnUHgYjpw68H2xsTW43BEgeWck7kFJBdPCTGRGYF2Tm",
  "key19": "6369dxwWW5PdPFMAzmhm7pmxiuAL2qM3oNkMePHUa4F232rsyJkfxLUq72uywUMbG4czFTt6orTnsUeKGrd3HWtA",
  "key20": "VUM9cPMqZCUWzaeLABX8jfxRLzKpPfdcZc8XEG4dfQKf83mCYs17hS1gXvPkcNtEHgrPCkYbR7FvNGCSKqFJvcq",
  "key21": "5FDqfSUGe4JF64zPWX1tk6GxLfnqzdgEhfsSjop2ZqbbL4xFBuNhjFm7d7kU1tsosuhKa6g5hmPjFfjRta5PQwfk",
  "key22": "23NmKfJ3ByQqedoJsHJZcVRVcuc5WmiBuiVUodDYTzdSrJeb86sef8THHKv3SPv1S41VFZHcsHJVy3Re8ERin5qw",
  "key23": "41JqfSQxKN5B1v2Xvtsr2SseDhVZwAhtSR9SgJH5LXTtKA42xWKUoJouCw5dMXu3tTRxcrzmbNVscN3SExqazgJX",
  "key24": "CpRvdyitLnxarYZDdTrWpeYo6URSiAD1w9ch3TF5tiPeDXyYuMvGE1D6cGC46B5aWVVixsVdU7ua2oGEJSW9iXz",
  "key25": "5YkiqfDT6aEFPxDXdytTA9oDVuyzDPgFifUvcCMgzziwSiSMobmcmfi9hpv4za7Lw4ZvzVdcixPUaJ9shYgFuFnB",
  "key26": "SiqFTj954X23yYPgkWBHtYmDq7EgMTHcDGsF1pj2y6DEhkv8YU6mJA6LjTsYuKe1FeozErZa8Kczu32pEYqigrP",
  "key27": "2UxnDCGK4P659t3YWpGecTjAgH2SNqDQqKUxavxEiqtwar4R7KP644AAnaHMohidhKwVqudhXkpb6JzhAtM3Zk1R",
  "key28": "62etZ6NmFJGgdpnWvyQx4eqWfhuYjh2ShQGrqPdCScEBGEQMNhNZ7rhEyqkhQ55dDqBafDUPhV6VHK58tNmjyxs4",
  "key29": "2iAkSN4gswsR9BFAMtnfgoa3ZKcvAmVeD8dc2XcMDuVeSra7cBqB8Jp3TU9WsWnNNQKB1rHk5GAGZMGDLsBBzPcP"
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
