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
    "kfGgtH2dzUpdFhhiNBsntQaBWyiDP1fUeeY2BvLHEgNJ6azAcXwQp3bqD7gGqRpvREC4b22PW1YsnafuzabnMNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHyZCbfm66Ehs8XkGSgsWsTpEwSSQ927CpJjBKgUsbtFhNr9mmDmeVG3XuKpMuGRUmfb3reciZsPPtd8pkoTXK5",
  "key1": "2HxNoKycMQXRBPpHDS6CYUQPNcGKtHHQH2e3iDQbVEYumaUSitKX32vEXcqLp1mTTSMCVjo4GYhqaPBboDa6oEVP",
  "key2": "2KeawdzTeN1S26goYEevGmSNj7gV7VW8BtDk1RX1RWaq65GTqsWNPyaMvnyCcuaeMuoAydFLWdVRaFnEL4dWAbiM",
  "key3": "5uXff6pmpsiJg2FdEQN8KZJgmifbRtc8ngsTnQba84Lvz2UdtieF2yThrWZs5xW8ogG1AZiYfj2LFG55JZz5nNxM",
  "key4": "tremRiFi84hvn2B79XZeq3q5Wu8UAetqdjed1X9aazWR5ipm55hRC3VFJJTFQtc1CHpiduga9KXPBR6XGW5mFko",
  "key5": "4o55X9kR8UJectYrARbFCEfv76k7ridoC69Zgzkad5UoRNJgbpnEd1nik9FPPeyfQMY9QxsScCGM4SFRRJy9RfGr",
  "key6": "2nm9VMKoG8eScoGZPgEthFsAieu7Lykc3T6ekXpQ5nmWC39VxHCXMv9Dakvvd86o1d477tiWb99e4r4GAMYe7WvB",
  "key7": "2jferSk4KLh5p4NbtE5wSMquUSKBGJRWTV6HxJd9fxNxY1FKAzQterHAKGyJ9m9iTqmXkAiwkZh4VAcFUYotn9Lo",
  "key8": "5KgemS4af7E8XAjp4sRnmTCZu1nPakUnHFx5zW9Bi7tErShL1TRRwBBkcg4uPmtq1d3C7cbGKZhbWoLo2TNFxdW",
  "key9": "3Fw5LpZTw3cppPJ2mGHienWL3VS2LRhMn9bQxmLJLzwYGqcWFGchofsb8tVSCNC77PbJ9em9GjoV2tSmJXcJtWPD",
  "key10": "257cJ7ESTe7ztyRGhWfoQ5q43Xm5EdP5hkRYz57JuUYtdeuDd1YJV5MiFPsULBPE4UQaHyM3HgUUhFu2XHTJ5eNz",
  "key11": "39N1CbnGWJy2VSv4pouj51khUN35rLWUnwTEwua9RBHpjyHPPAG3osZXPtwxh6yoaktCE7yz8tuSzh3Mn4KSLLMP",
  "key12": "2MPJsBuvAWfAtzsoojJgSz6GUdQGs9K5ugGgerNmZmEjYV3sb64xrSPiNkVdiC8jGYWypa4AA1DTwkstd3HPJ3JX",
  "key13": "HKpRrS4QarpauLsXNxPGgSNxLrULyFCxF8Ny855ddEVZjHPX2AAdy1sc62y6sCHQJekAQPshj6YKPkf9Ve5HNza",
  "key14": "ewpU4JkFxQZQpstxA31gp6tVuHpfj6GfETBxTQrnjKJ6HygLAnzktRr4k2RpfCWTT1XxduQv2Er8beM9Sz2raiv",
  "key15": "3KNLQW5ooYiZdLt4n5dCsztb6AxydaGyd7gQfR48Z5Nh9ydsuDMPzNSa7Z3avdBLrqxVGGbiBc3YjDKSDdBBQrn8",
  "key16": "5xG8kXd82vCRfqTzaAFjUC8QPe4GdDQycGU7rPo6j7GXfRUVv88RnXSsDXa5Np8V4DQC1wgh1yemMaLu6qSiVBiB",
  "key17": "2nHJJi8U9jkFeqUEV7JctjZdyksSUX44Lo2TJ6Er1o69P3Gw7aBcJ6fRDdjAz7vtFaKfK4Lnxbr57QFAqUYcCmjF",
  "key18": "4NH2H3R5XHoLfuczBocqmf33EhnzYyPoMDT4MqCmqJBwTZiKhQ2pMeK5MvUqK91ZeUkXtHjkN96JUMhozriZ2fMM",
  "key19": "3JsgqXjNgUSbrPr8uRsCqPYvW6xobRUrWeY5BUYA91wZ62CcTaR9WrVBkYNPGGmC56Bphm5rF22HqHipvwYNrAZ",
  "key20": "2UFopzgpTEckSrhvFnbKouuoqK9wza3Y1tFauHqysUrMfjHRmoEnzKJqs4xE1Jnvumw9xAWde3UALpzrbHdJGN4x",
  "key21": "wAV5o9fAk9HJLw9T9XvXaJtVYsJR6Y2KhWfoZnreFMDdHesuzBS3ASr1mnquVQaSc3Z7XKbE2JqLbRwdoQJFN7Z",
  "key22": "wY31PmDF9AUhgcRf7whFB7rKennbV8SYLjGPLrcxcsQibvzA3nmbUS4SxhmXPWURUvuHjy5W2zBuBeYrWdeMLxC",
  "key23": "3pkUMadwV8gq3CEXLQnrW7W4NxJj6Nb5cPzGRyQ8kg4tqWWa3Ju4r1g5bTpo7XWU8MWDZPGwHc1gk3hVVLf4Efbw",
  "key24": "4oKYuXixDSa5Kr4MBQSDhVGFMCPP2XDyCrYq36aLAzr1yorNr217MCAfWUdb6QRBoQSSqTvP6ppFPUrt5yXK2Dxa",
  "key25": "27Nr8tgiN39HS6S49HwskcSKPwRLKXWGVHYRBBNvp48Bte18jekgVUCj1dn5R81s7dk17FbBmVqN7uwTpi1GXfs2",
  "key26": "3JzBMjfyVcc2oY7JDK8pGyytXehgLpFAPSHoqF4eB1w5kMfNghQVMx2Q9ByWmo7gMFvR6BAZktdHfC679Eb6Kv4A",
  "key27": "2YbcAAm9g6zzTjGeDD3851KtKv8MzdphHuHfsx7kiZJW9SjFSraEFRu6HM3PTHEwjuRzAMqzwoHLVGNBXvPxcpSv"
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
