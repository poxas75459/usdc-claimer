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
    "5afCBxdJVjh6dV9YB4gHNW6XBrUZZepGaGw4aL6hjqj7JoEWNpHs4Dawtqut9QpkDu76E6BbjnrVAe5ozEWaJwGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HcZAZPHGCWUA21VR99je1NQtf8USGsmpWB6J2aeaoZvcrr2axPr8HumyPtYzAnjeprCJRvcnGrvYFDMT6oR5dKY",
  "key1": "3TXzUJrPeAuHZH2Ym9vydE7cwc4SMSN2Ax3mH6JhYAqKqWDUgti8GAwQYAfehcxE5CVSx29sktXqxSxGorN1wJgi",
  "key2": "39vbUxfT4c7eKxG4o4uAZKWtQ1oXJKUYT4uXqnUSnm5eQbnZeuW8W4gqab3riDuxFEUt6B653rpEzhMfBguMHkeE",
  "key3": "5wuRnAMgTmRePFz1DPcYRRTjwYMW2KhU27yc8fA7Bm3MikoaSUuh5o9s2ZAkzwnuMKsTTw49nKojvjw3xsDe6uMp",
  "key4": "bjPjURuwmxtfPYPhZf73wfEmqTg7UaiJwanmhSiLZndsbrEyFVPotQMGMtJZvdTMkeP6Hpur6Df3UNw1PqrXjwa",
  "key5": "3WH4zeY5kFPY5zir4eEyxJZAFoPf7BtiJ6pAq4uTVvVZnLeYxiJ3LoVjhx1NQ2SXdsicNrY52JARqZotkHpS3eGJ",
  "key6": "41xsh3vpWgV2paSYqx5wKoRhjsDmuaxjpyjZsidsSr37pza4K1y6miPiLEu6Atod7mciK6PuAWcLy5FdtG3CcV7c",
  "key7": "2y7sCeukHMMTVNd7JwZD8nvqvqDqjLJ5dBezNvUFuarBxEUETR2qAKV3zoWLa65Y6F7i5q2fH6BNfJBA9EFeMXGR",
  "key8": "Q6v18bjuLyzdp5FXArE82Rr7jdjzW2YXwRHJLEZ5WnrXugPFdYLgjBWpcj1p81Km83SASwkbLw7s4m3SCk98agF",
  "key9": "3YDYU561WqWjCW8ghcAwHNnra5T1mwFbmbMweTWjnGF4pPYeVXaDkiu3Lwc3v6ryvgZPqGwUtZ47fUYtxbWoFymg",
  "key10": "2g72NVZUUp3v5VURqhke4y1RgqXLxF1TL7Dm2AzMcEiZmJK4LuXSxRsK4TEYY8PYh4iE9Fb8SR3LcVLbcRbuDGGg",
  "key11": "5X3dZHdhDnWP4spGRmAbfrjV7udCbgBeapFuJqQzcNGVD7NwyWCNhLFT7Zif9tjrpJwBrJFqwuS74qnUtftiRDtm",
  "key12": "Wq4Mj8WhdVZZxt6HkigmZVrxVj7aUa4iQ6kXe7DVuY1sgSewn83f3sQqy2MZjfYsp7yr1Uj61DmqmfLSTbwr7gE",
  "key13": "3KacdXNDasaToJe1DttxfsrTetxLudQtYutQje9ikjLzg2xF2xG59AeiD3fy5ZqNie5zZNvY5ftXXXz4A8NjTBzp",
  "key14": "47qqzb8pWvywJEZnEo6JLaizXuAK1gZBsmPR8mGRUMCbn3c4AxjR9JCZqGAYrgYqWTtpgi61BLa2c2gNr9EG3Z6K",
  "key15": "4TtBaKLFj7cYpUgtc1Mi5LDcgryFEu98WDsKbMuaiTTu1ysxBh6G1RwVPQW8pqTT8FgCuBHHNuW3vazHBhnFRuEq",
  "key16": "3d41sgrnQZXGEBaX62qEB8pTPVbaRG6kAC7qSSFSWgspzToRdGFqTkopjNuhLuhXdYfdBQdiijVD8fbsoFAdTVAA",
  "key17": "3hpQHHZu8pq8LvyXPiF9jYFa55Ad8TCKoDqUxYDHf3jct5ybzUaafr5L64czUHZC1ANd32nV6FnkaJLCtrnsHB4F",
  "key18": "2fYAu8pV8mhPULN3FH3X9o9qmpgGkvomo4zpR1pXSZfHxxmo4fVo96n8KcMEfBworRZUknYm1iMDGs6b9u2smsxc",
  "key19": "58fCLQRLZpTc7NYYyjc4hx55GMBVhTYADNMrdnwHXhevT7B94nQegxud6vHi5mCvN9d8DF17h94aR6tyHBHe6NzF",
  "key20": "5UXPTXBu54pGsWKq2wRawRfDcfMEBcDajzrqxDPYqa4FNPtX1v4pwV8taE5aazwkvcWawSqMAHHJSap2mu3gN39X",
  "key21": "2PexRsr5mQPkQd686eyXCztU14azByBNFLuVevcZmtfgudAAp2Y837Rjb8zaAja1FZqez6JHkYbzEAuXN8wXeUwj",
  "key22": "yZUFz2feQXGoiU7BmMGnYwU9EecEenJ34qyZ2Td1d35yB9K8ba5m4hrQ6RmJ5SCpMSck3UxxMuXUgFoa2r6m5is",
  "key23": "3WxAFhgodQkpXqhy9HyNyJ2SDFvwZAPvAgKaZRyk87BGAh657c6BzTsugcYhbKrzNeLXQ6BVT7sYqWecf1EMEni1",
  "key24": "2Sz6jjBt9uavZoeDFwy6J5s64fddRAhXYNdag51K4pkTwuTCo6RRrJCHB9zcikscTFDVXkhue7BcEUskpx2SQ3CE",
  "key25": "5v5P3NhyjQxALqY1hEqbPHZYUrxkuuVozwst9XzQhffwh6Jtnp81xqHazDMCxuNpM1fJs1xmznEvJxtjg2eNR2TE",
  "key26": "5UqRHp835bnPy8kd2vm2REcpVCuoQmk6pBJ1zTSMkRd4v3CwpsPf9URn2YNxnMNZeL7HX2wU8mrUaocVRwgo5GUA",
  "key27": "3NY7iiqhhcJf7WRCHCyYhfc111t13JbfKHMYtK6vbs8UwwosPg37XUD4p2ErBPCXDZaJZCBHf7GimPJn8ukHyNuQ",
  "key28": "2uHRA8nWXeH9RxbSAe5hqFFWd1gbWaeznxbDFEAPEKfn2SFaH1hi4MHCUDobv5x73r6nSSHXvHGmycUQUbmL8fgP",
  "key29": "Wmhb5CijS19nER1jSTcf3jCtHkdAH7r4GV8vxu51FeTYoTZpQCR3Y2pvuRAiqg96cpWWq7yMsS48asLdpNo5z3t",
  "key30": "4G916rgJEWwgXjNf6tVLWuCNj7CoVe3wKvbXLpTGQZgkxHMZXzMQ6mjqMLCDiEHZqQKAuwbFhGhAkhfWW1N5dSjD",
  "key31": "5QxeP9TyV1jZtE9N7v1bNK98f98goc48Z1WRGJEL6Nu4FNQkY8NrfQ82gfDMGa5N1wYqbJbbyiGDZkNbBACmPHFY",
  "key32": "5uvAbWbgvtZL5HX9jCRoDS1cZCz7Ge4bAsX8HHR32FPfiY6hg2cpSV5e8B719DbRb5LhRo2bN68boEyvRxbQ8oR4"
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
