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
    "5tM6N63UTXVdDMtkXEFszvHJokkuDkxVaHf93UAYrnqufy3eVWMiuJtNnoHr7Nr2anb2djjdaHHV8R7FsyLNWe4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8eXu2kLZC7vupukiQH51WbgtAVA2vE8agRcrkYaM1nxH5RyjS1m7AMdW7iEpL92PtkncquybeBKPScJM9EEj4T",
  "key1": "qkMiB7Dp5vNqnnTcPNtNmHYQPBwhzmZtq5QQJjEpyTbsiQiDjLgvqrgE6D3jKfFRJuewMwCcw1GTPiw9hscd7jr",
  "key2": "u3escuoEpjHCrbu7WcqbQ7vM7goioe2BVYEvnrLE99y6iFDfoULRry84NT6WttZj9cy5tGJnV5s8JnaCkghiq5F",
  "key3": "62FimJNbArNwom9AkjA8cdNthzRrE3XRUfksDxci2pgYbFnUuYHYSf9bjDtjq6ATtfJHk1S56Jg2mEXNgCrvzEYd",
  "key4": "5nHSY1JeJekAxEHk7HSjGVYbGXCQYELxvZXaPduuRrv6XDJMBPG32GLbApqi2N2XoGt6CAvxDdqfBajcpJy9h2jT",
  "key5": "DNNyw9suAuCZBASqcFsih9ND3kzzB27MT7gX1ZHcXvqm95LtS85ZHjpaMN3zwMVEAvvvgzEg6nvKMPNxWJCHZqJ",
  "key6": "2jDqWKTzB49z4fTLBFqoRbPkzuRZzqvM2NQSYALpG7knU2R2VRxER6UhmRp39CW5cgfDrNUCXhnb46bL6H5eHqqm",
  "key7": "3mZ4kvu6XPhMcH5AVBon4UmQPhxJXuth7kyQPvBgC5s24JX66njn7ogycHJQZfxBaLpBr37mWg7zXxUov78ZT8jC",
  "key8": "3cupQYGXDG7RNtwRQjvxZnjnnGmoxfpHxd1jeemUYaakaoWxnB6C9DuXBecxi1BzKAj5mLyoA8CBvwrqdCwXh5dq",
  "key9": "4ueRkc75sS1FRtCjXmHnJJ92ttZsAjndWJYQQkqrP6swRuePTAi19AAQTL2Vcy6FPHNnisSpH1tuAug7ukHUCNgX",
  "key10": "4m1bSbkXn6BNN8z5TAZ2QbsgK3UDCXwwWqz8aVh3S9FUXpbC78YdH2vBNJYi3DBPC8saNW7C5gmVXfX7vJqzy687",
  "key11": "2kSv62Qjv6ufVXDSCmHp4BDQsQrXNUopBGNJctiZMerozSFGobLYmavGB2YuyNK3xrq8vRcN75PNUtpatBTsCEWh",
  "key12": "3k6dCjoPTrBLHLYGgqAxZ9GFiznYDVh9wLyPKjUCan19sRoXnUinY5cSzp9rwAm7VmiaYQTWwcDEreUrks2o7xHL",
  "key13": "3dR75D2nZt7FE7PesA7YeucmUatrSe3EFGi59a9LxRJLaUTgHMpAD3DXTeu8gXMYMXPuF4dqZ1Zr4UNcPk89Ptou",
  "key14": "5wGskaccLZWp5mf68VHyxVkGRpgPdp2bL8wFUFz4Xsf2EdbFtdcG8UX9J2Gzeae4QT2ZHBwRJg2AZBaBx19YTqVK",
  "key15": "4ozAJxLkMuUhJ4VHF7FbPAv2PWWguyNJaRDt28a3oHNGfWJ2zDwmghdni64FFxTHPMf2xayZKSGpmFcn8tZ1sbvj",
  "key16": "5x4PKTSeEPY1pAu1YAC9vvagNHWifiB5BkR8HS4TdQGj6K81poJQNkXZmhQcyS53pcKLpZMuiqXCmGbtS5fjV1ow",
  "key17": "5uLRsEvP95gLkegyKVffnZJ86ioi24hV7A6tnFDjtf4wgUctFP5WuNc9XuC62bkWt2DhEVPhYcL9o2x4hcbEGTUU",
  "key18": "Zj4ehU7woc6jESQXFBH1BtcK6ouHF5BtX5yCDXrhFhRWqDr6oF6XVGtVR3UMzHjr9uf182aoxoKuumapbeGR4ZD",
  "key19": "rqDM5W2EKQxgosrF9JhuuzsjbDDGMVzMJEZjjExvJxDkVRRyJ3DZn6S86XSfnRNb6E2EYEv5iSkWkxWzQcFUDkR",
  "key20": "2zhYCcSuKpXVNL3ttwPE77XFCWEemE2AcJPQAF1URJobJD2bpvFUqbewz5mo2u9iVRqrqNQFNSrRX7zNiXZiyt1F",
  "key21": "fQgPs4DBTvZRq85WLgUA5zzERiKfkUZriupteg74aYSRn567pCqRhaGAtJekdxWLKaaA9CEz7GW8eZtJRnyskHU",
  "key22": "5QmJDfZVjcTt31T8qULobrsngCyMbDYfBU8pYbxmerTGmhV5mzdYyHoEzHLMAEPhMczFpKxsbuiwy4mzYMaJnnwX",
  "key23": "4zS4VN1mrEjLpWHu94yvBFkK1N7xdXJM6LLMN6WqYhdbCenEwr9TpL26RP7jA1JVCMfD4uzv4LFerzsqjQjbXqui",
  "key24": "2ou7MtQzUBDfRAKrSa2R1BL59b1j6no33kcr8wj4RvND7tmLnUJz6P6Q8fK6qxg92Y7mAP9wM6yB8dxdFBVL4Rpz",
  "key25": "TtDWNLJB92QJ6r1JUgc931RF7PhZeQpdyoeJYBYG4c3gyxCTd4qxETCie1eCKgcvginsAWy1GpPLyh4PmzVp6tc",
  "key26": "3KvJCJzJJqmyPjb3a9NpRye4dKyu61canfUZKqPr9aymXLoJ7jRrscG3k43cDFCbjC6jNQBKygHAyn2zPZ1YUVrp",
  "key27": "4HxBr7saeq1QSaB5MMNyusPbVWTNPFrf3R8k9KKuepnPxQeo7CTvdWZQAKRgznzCyiqgjj33jpePdygnUoCNYQdT",
  "key28": "kEGwwMcgxCnMLR9yyMzwqTZSgnBfRMs4hSSw1xNS8DMA3ZzT8SeBkXYt9ZpQ62biJ65KjwVpegZpwKXMS33f3um",
  "key29": "4KJQyA71eDXogPkEQjFrwUPP6PVk4QrEbtkERecRYBWJtUi6QU71nmCFHWi89gwiqUXMh9eSn7CbXT21rt8WjuLS",
  "key30": "3xC25twJ9rTu8fTfXGazNAGLnpkJwRHXtGKzjcV2SLh1suVaXRYqL8ZNZcBUAzJB9ubMKpAX8cQdn9zNLtSikrBz",
  "key31": "3U5r3WTeSo1cJ5Linff8NnVo8bF7sTWTsurtfGenLa619QWoGoSzMBqzJhpTwy13YJWS8MDYDNLR6i5Z4jAbjJy3"
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
