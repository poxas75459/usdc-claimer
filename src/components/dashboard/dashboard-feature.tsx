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
    "2QKs7LiyKVqKoxHds6SMX5uJvww2MxqFMxmDY4YJG1SrqpTgrtzib293Xg84WeQSWjWT1JHUiCr38xbioSdxCR8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sziHrqAKWBZoH7128h6ZiddExS2zxDVM6uh9LgGmGTESSxRBpaukGrKnCoh61KwFeuyeH7WbLFarddRF4QTR96K",
  "key1": "4HcyLS6GzzFKzzFjajdKwcfztDScjwT7H6hhUPQjeuYj2HVH2DM9RihDAKUtHM8jGGwdDbVv3b6a5u9trGX3cxyo",
  "key2": "2YYE4nHhGnJf8UZBw7nMWK4qmNbwfSwRVMqEvikWndmRGUMSXADv1VC31Lp1XKGFtTroyb7W27TMPKSdFKgqt6kr",
  "key3": "434SnVMf5G8jC4gGZpjEN6UabWJaNmcQsi7ZNd1XaFGa7EEw53UATq9zrc4MCkEFspTVBevCQhDQp7aSVeatBSso",
  "key4": "4DKeuzArq5NMfj65pkhcA9rZHSFDxd6vMdCH7Q7GWSyKwjTtFLZCXQeA19a5LCv4jgYwDWJ9XGe535aeJMMMkrht",
  "key5": "4iHfxyvS3ftDFr1hzc4CdAWeLj8fmtVGvhotFvRy6PrAryhRm9x9HD7fiPueFw35BjyssmBmUdzLgq2ebNEyfThV",
  "key6": "4x754KdyNuoWF7ettR8Gw2oCzQ6kUdDrhQcZ9aKrfo8a2K3T9m9QiGhxNZEt3xbyKn2Ztet3aFNikAoUDuqpv64U",
  "key7": "4ozhe62DiZ9pA4KBGxQNJ7S6R9XfSaU5C9YNEuPPm4rGJoeh4ne1ww67Tq1NDmj62R5uLbpr4WJMqsDYnDojBFu1",
  "key8": "35n18wfX8Aqa18NwyrgARtWJvNa67zNYgqKPZpsjJVHTc4Y811KfKHNn61iLYppsHBzJNHRH7umU6kfsF5cztNsg",
  "key9": "4mhhXrktvctCr4pfC231aNFYSkqTHSqNkBZyTt5zDhGCJiukYKvcfrBB1tZfVUtEgLA4pLrn2g6oa4b5nKyaWrYW",
  "key10": "34FPmUEkLrDu59RFncNQvm54NEVSCegmXeRTHiBVXakgiTHgVRt8Zb52kQLghcvwMPWQNHYcmJvT16RHm2WjwVx3",
  "key11": "5UkhBqbbXmEnYE8S5dxERykcwnHxF66BHeSiQqHWQTZxnU6JkS6Y5RvFSadWUdvjgW5KXZLmpxTPo5vmLHo7hEiv",
  "key12": "5p6DFR3n5pjf5LsbehC7bWXLAG2oF7uBq47MfsxsoXNrTZXYKbnZknJp4U8556M1WWT6pd4TeR46LKEKkBaw6eL1",
  "key13": "jMXJLSaqAYJEBcZ1eZ33epJxqgC4PeU6QewsCAmxwe1FtVqed1HL78G8CCCs1g9amrRmiaLauq23v76hyVTJQAf",
  "key14": "3ugJ56BcAHtCkrMCxnDJ6q2j3Qqy5yRwTKGjV495PSdyrQk3AAjGtxm9XeRR85aBBnMZKt5yvYUT6i1zfVk6PMT7",
  "key15": "3tfnD3AHc9HcPuMirwhFKpAGcWPf84xvHV31k9kG2Uxi9f9gr6imb48totVTNZTqendwNBW6x585g9j5xueQN2Sw",
  "key16": "eKXDY9B4yW1zf7ohWKRzpcCetDjyhgHgR5b51b8Q8bkfkD2SSBrTh3ftg5s2N882SiKQND2qM6RmSWiXvxQkj59",
  "key17": "4uy5pZ684UrUtpvG2Au5axPanMiw7F9ai9uQfx5kXszh6Mw8ciGwQpYjjZyv8Y6fXN8j8EASEdo9W4LNR8RRsm4N",
  "key18": "3eBGvHBxEBMpnen866B1diu8EvJt64VnhWMmGxnRYf6Mx63iu5a5PjdcDAPxkK7ZyUSQxRMMdjhdHmZPSbGYxthR",
  "key19": "AXpurzdtUmGYBGikbtddXqvp7NStbJPKBArX3EbsqbMbwmwASTGv3U1VQ38TgEsLCKgZDaz754XmHVYsUHodKHG",
  "key20": "4EnPhXySfGg8R4fZUosZJbTY6VDXnPX7bbCBwr89Qa5trkKF3bSauPPN3xkKBg5bw4JSZzHMBHTndEguv4kRCXii",
  "key21": "2tWhu9ZsrbSgm51VWmasVa46THzQKKXjMfiGkZd8W7sCeR5szfacBguWeXAjXHfu9kStRNRFC62vXxiWcoLCAXgJ",
  "key22": "5S5f9dzs7qDSYa17LzURdRBjfZ3vatGGYf8BgwWQUri9pr4VG6kqKP6DNzAKxCHMjFW3CsCTSUchb8GJFhLbKBAs",
  "key23": "4crheV5kCh2yaLkg7xGsBdDnEVhCafA1891yMEWm6w1P9hvzUd2uUNAPSqTVjHprz89pSTQNMoy9eJgQXBLCQrFP",
  "key24": "3tjU6k3e2UrLJWMue2GX843nQ8ea2pLM7Dbqaq1QPyjVAjxHqz26xBoexuW2hHBmtVu4prXUTFx7X9ipMTSpd2jJ",
  "key25": "2ZGiDeCPTCms4tz4FNA4gFXahA7Mw6KEfqf2gouyn5jbUXmn6yCBH98dajFF6QWaxNkvE1jwSy2nVEcexh6NoBiE",
  "key26": "55NRrfXa8NUtZeGYfUaBZrbQRgnCx6vMVQ3Ba7s9pXHeGPMKYhnGNDF8qqyY4T3Yz4p77Ei35oKNza3jL49goUkg",
  "key27": "2XBGfomABixVMxheqni8WxcbMXTGSMdzWtXg91ND4s32GnkY6jzgDLgB7HRccNCeNsyE3oW48qLbs63EakaczDh1",
  "key28": "4kP476uQrVWW8CQPL5karThCehpgkGhtiMrzTQCpTdRzr6NVJSsKaa4HoZseEqDuXyiRCeeAHNHfRu5ZFCDmGDiV",
  "key29": "4DkgdrtYYeFgQ1x2chpSxWZvCTDiNdsMfJtQ7Amo8vyE6qimcVdae5R31KkDEFWNSxhwW3AEiuUiYUTeJFHUsmTB",
  "key30": "4kgQsW6shmSHx6eY4J3gYKnqYHNJf1TeHhR4Yb1TryqXtNiL1TD9mutGRHPXKqEN72TgvpUbkgXEUPF26KGTZWsM",
  "key31": "3W3Qhhxdoc2KEt1tPiWYmMK9PwdJbu6h9dVAprVW53iqaCCDmUdqYNDbHCPrUaoaHrzrhmgUh3NTKLU8xMSkJ3HZ",
  "key32": "HV3ubAw9LsnHJNKTFnLWn5eE5sF9XoPe7v9cits2UNPBXrGSHZEEDf8XAzfn3s36k1pdGdrKZvT4GcdqTfEANjA",
  "key33": "5X3RLXQn9WAZP41e6ZShNiYLYQnay3L2uYpt1pCC6fGjwDZN8aQ4F8dmFCU5ygoQ72iMRNLAPrz4ppExAfDGjjff",
  "key34": "3JvbKexss3nFAkD953itR1WG9KnPN8BZ472qbj5o7ESJ5xpNcHByk1NEJ7d38CeaDh4rZcszUVhuj8Casy6i7Zvs",
  "key35": "5JCM6YyhekQ5PZeF5uJBbgfvjCDM8pn8H9yeWtqxXh3nfkfK8wbi1pJBcs4o4F6rqh4UotPDXDpsjLyYGBWe33Pd",
  "key36": "4sFz4zBUmsLrEWwH1LggZaa9vmALJPvZuxJaGZ3FLVqsiwsQinArb8r3yDQh7YhFZGCicnzJtrhgkwH1riKPhy5U",
  "key37": "Q9cqVjH7S1no9LvE3GdPMz1VL1Wa1WuYd1esKBEHj5pda9x6QxN5iwTatBHgJYqwMq1NdQ6TiDabkLhbCe3MGHX"
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
