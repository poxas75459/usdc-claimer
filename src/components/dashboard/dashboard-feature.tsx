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
    "2EQ5JyS57Vt9LAjsESr1pw92ow72RDPk2rZTuSjaVS3i1mzDLRSsqVFiToo94ZhCtxwm8gFad1ZkgbPM7gLyiHEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFD9XL5nD1ScWuVH1RLGp1e2muk4e9kmrr8RDU8bKTY9wpKDfHgxvvZ67Sjpczek8oiccN7gZHNrZPjxUJnj4Zn",
  "key1": "4C28juxZi5QNiGRvgxZjpvBbfCsB66mqy5DVAbiQhukQzWAZpuHgkBKt5ZnwesQmzrq3uLnBZX87XCZ9qK8tzYEx",
  "key2": "2rPTtaSQo3ASWUZjhUAj7JvL7HTkTtCKy6njzWqspkASbS8JpW7DDkBfwRaugXnaQdf77hXcSy2L9ANiRiY5sPn9",
  "key3": "NFZCXi396Ugawzzr8pDA2hrcwSXGf8tTW5eK4QDjcLW3fuuUEtALvTPULJiiS17S3gXTzSe7yaEYrsf7d4mAqtb",
  "key4": "dxsq1KYhJTDUD5TdRxnjRYeGwaZDCek2vLzegYc6zEWGD9xnFAosuynNyuFGTBo1jCTpQAtf2XvjSS8usGB5ZAC",
  "key5": "2dXonF5ydcNBUpHzC8ZxCoWyF3cRCdQoJYaYFobi99tgkHCvTZ66bA2vaCrXtHmLY1SXut3WvoGvEbRVRDAzh67B",
  "key6": "5kT7GwkFoq4M2PXWhDFD51atp3eGeUeLg5AovMSdTAVEGKj7WNLFaiDgSg4FfFC9cDMmDApognwwwpDUCvGwm176",
  "key7": "5S2uA61y1ReFhwfQZWdqjVqz4725dS6ZakoTYLAdiRsy97w5xLtJU1scL97NeygBPyhDhxQTHU9CocvyRvCidfdB",
  "key8": "SXMPuvRbd3bmxJtE5ayNkuPTP4Qv9XkgTEqESvmvZVystbLFTuLf2CLvKPehHjdrvHhfwAnubnR5NAG7E1Mr68Z",
  "key9": "4DYDh4QQe8xRmqrH8ozkuGuf228BMHwZqym5Gcso4UpQU3c5uyMJ1Z3CRQ1KG7GqKQHnyvEkSp6DXpazv6sjAzqm",
  "key10": "2r2L2LiaraC6NygVisUDQyLr3C1rmx4iJ8yy8raanJPZnAaEp7EXPABgQoQ5GrN91hBFXqb4mCCQpFs1rUW5jF4x",
  "key11": "4gCbQ81f5rKc7aesC4EuuQbWSW4HQENn6dNaVCW5RNepNxfwDcQSKZUw5dUp6HGUtrxqsMvoAfgV2GS4pp68bPzM",
  "key12": "3yQWRx1dZyYUKZWZc7Fyd7tPZEVY6VbDzoBb6TkoPQwJyEp6PMKSmcEoTqtMe8zT9W6yJTpMCneHmmdftDv2MJFP",
  "key13": "2dugBJQGAX33a2QWaarLh4ZPjLtid4XDRhHw6p63qQ732F8WDugeas9SPEDLggkP9rCdgUeUBZn7V1avUaTXhNZd",
  "key14": "UL9WJukVzpEX8FULcRrgrFCajxhUcfdWmu98SsXgJUTRLcAswEbXKyZN9xChCEQi9JCLZpbvgHkq5PArQmdujX5",
  "key15": "3fZm7Tk3JWoUDkDuEwqAHyNr7mkquPmF378X2upSQzabinfovKYw3DhgDSBrknuva3SYtd9HLxfJJ7w5DJqBiBuc",
  "key16": "32fKCv4mpWcWRgA7RrwForGMXyFebbowx1HsuWVkrbu6GAF5JSDVn72jYRExuQ9566ZtdgizaofZHYg1ktAsBYyq",
  "key17": "65kucTrsSvMYp7QAXMASYfqzKBVynNrTM5AYipViUSvAbCn2AYAL2RhqQmG1GziTSDRS2fyTszkw8Tcdb1UDtHKn",
  "key18": "2FaBB3RifppVcwFRaqdbbHxwQDzBQuTL3e5gDX8A7AGCy5VUVqLDguGizPbrA7XqKT8HMemFW6FjMUijfV3n95UQ",
  "key19": "7HwkLKTmRidtuXDWpeiv3KYCQyqk8ZAzHrta3u4D8TabM3KdCZtwkdPR2DYFJHbHtU7V28ywJ2EpBsyY4xYWK1g",
  "key20": "4cVkU6NK3r1FfbhfTFucELD65FW6aLoTtN24oQNvhsmwu975nc24ERbN99szstxpThxy5Ws2guuiPxumvger7Wvu",
  "key21": "YnTvZnzFRRnDSuhtQqXDSyf2RiAE68bDpJ54JWWrtiTLmMp91M4d6YG7wdS53swQUboNpRwjfQudu4ez3xRKUZ7",
  "key22": "5ak6a9NEdCXuFtF2j1Pvdon1xpxoRTVPTpS7E5we9eAspNrSBZ9HvgdfGeqnWUtyicDHuZwzoz7nkMjvuaVkgSqj",
  "key23": "5dLE1UzvmDu11Q86smDwxcXZuwFwpqXNTJZgpZRpJjtwbkR5vGi9tdWsooN2i1twzyF4Q9aYx2bKcBzQiKy1HKgR",
  "key24": "2iq8aHi1zzioRiKusBvaQPmuaLGbmGgam9CD3LrzKfa14uUNZriwdTG3o2vY8nrLsWQUbj9TPPvP1eS7V2QCd7wC",
  "key25": "3nRVdCAfZfBFT37C94VFiLnQ6kQr3TQdsuSF5PhTVF2Et1AEWT2EgY444WoeopzfiMhVBcH5kw66FMeLHuURUJBV",
  "key26": "4mWgFzmww3uDQpKyaz28mGYWxzaZZVqgqnLXNFoPAnnxCLu8hTqxzGV9fkxFTrN6dot57FXNk7nbkA3T2BLLWPR4",
  "key27": "4hCgxkuwvB6sR5tJjcgLXXYZpYniYMpJMXA4NbEmozR2tg8kXBeCV8krXNYYBhKLi5GiQ2dTEKWm5gKsGVUzqZiK",
  "key28": "5Y2hv1ft7rSUnzGQUh44RVyZDUZuVtqhC7yWYCCudrQLTvSa5FjZUJp8wSPrcc2EoMsXzzZUzZukTt5b5C541t2f",
  "key29": "58QsuWC2KLHRN8D5zJVWypP1DTfsQ8zJ6zY1tRgV93S3TLDbbUhUmQM8iLfBDXKTVPCdKDP7dHJkgwaDY3YgviLf",
  "key30": "GeXZ6Rm1b7WWm5dV94cy7EguEoztTK1LsGG285GXMgF6mZw3jUxcevz5VVHddo2etGoEhmjfgZ7Xrn6eDKuPuwB",
  "key31": "4JUkzDkrJHAueNu47L35CuVpG5UAvGzroxXzQJiXUcnButbXN85mstyvpSneFyeCxRNnbM7B8GXN52XYredtgUZt",
  "key32": "fqaP7rk8bKBHz3fqdwaX946c4zLJJWoJLN4UgQcvXbyM6a6Ui4mMXXfzXwCsh1e2c12tPxKTKQXZ33m5UUM1Kps"
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
