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
    "5NRBro3woir6vK74mFgTZ3NFmDPJVNQ1Yk8vr4NmAQypGDtMMDqZU9y6V2dymRtACp7ZJh2vYMHL4vV5mxH6T27A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzu9687XCJiFQvcTFtcdsrgXeEd3FRxq1LB2HZkqf8HubuaFH5Uuh1yCbGbUSiPxR6H2Ze8d8ZeCDMAv7iAtrRh",
  "key1": "5Uz8PQFkFZEgcNthaDBgEZ6iT3pHwahABS8eXFw5WxMpCycTtYibYvxT6N8mrEGxguKS59uiSgNyv4JNcsxj23oh",
  "key2": "cmoSB2CpRP4XdPCWmUMUcXv5U8FpHswET7fMNgnA98eV3KTsubCgmGLM1QiFwW1i1YH4VJRexAp48bVp8wLv5LF",
  "key3": "5b83p3g1qFQRca7b3pcXhvesgkFqyuFJyP9gjPoxD51hfvT6br499SQHQbSes4tkj66Rp4R2bi89u5TtWAfFvSEx",
  "key4": "s8LozJKFDA6yDVTeao33Z4mMpdC1Y7fMpSAkpHKx8Fq6ycdvbFAwRX89ysdKBS4x2XnywhGjw1St3XLbRZzb6ty",
  "key5": "3UhpwJTyMXq1y6LcDowiku83yuKDu1MwH8KQgWndrkGFA9gwHMVf6SuATJCRjnq1vnCXZZ7r62pqbgHjXCHNy8AG",
  "key6": "2up6t3ff1uReE9v9XLXt5ZmR77NJS53ta2bKt5sVfWyw7cxiPb2scsffPXusMxNQS5ceQG6DTV7YMtSGNGJgvyEn",
  "key7": "5qHD7Tj8EBr2NuLdxfU2xox7ddrBgbLie11qZymSVcYDdfiGLpLdEx7twa5Qa9A2kX6ktwxLJp1WWogcCa8NnFNG",
  "key8": "XwLwN7EXbBwuTPk4SETJoQfpNHBqa5Q7vaCQ2MtzecFACKEqJTqqmSAL7dN1M7PrC3AiRzFHKssdiSLDQh1QhhD",
  "key9": "4MZvgMyTBvhN7CgV8rBYrnHwx7dFoxwEkxhemLCPuGyb4AekbBRkwC7Jj5v5SW6gpjaZ5thmekeX1MB9Gmo1zQAM",
  "key10": "s5fgffZaxQfXGzyshDRMHHSupaUwfetZ1hADn3xzYDVmQQbBsLhyMsxmY5LHpVgzrgaqEQ55ocBRW289w5wXxtn",
  "key11": "2gRR5L5gg3Ho368gnBSr1UGKxCyfqWznnWErQDHaQjxqqeACegJfcpP1sZ8TnKmUUTru8j91HNMNuFWr9LdpV7ga",
  "key12": "673XC6MvUutYs9WJajA63QiDQf17TymUtzrYQH5XKc4Uz9ENM5CY72xjo7BfU1HhDyg9XcvRZCJfqw7yKn95Qoco",
  "key13": "5BrvLDegn7meScf8gMEwUsLzUL7ZKEu2mQfc6wSi53FKV2tSxPrjYERyyQBboXj7MjwAqgupBD7RUnQXDX51Yioc",
  "key14": "8WwjbA9ZgWyCKUdxFiXGwC1u1eixSPuvma3HXm523VE645pNoLrqUdmK294iXYyFVLupPhxSZqjfJxwGuLLXu17",
  "key15": "8ZrsWfVRJQgGABvmGr7KombWhDcNZL4yEcdzStaG8FRVkCw4Tq9iHVGqfSZ7ip1Y5hLe85664eLdLTAebWFokwj",
  "key16": "2eUB1rXZm3WHWEGPGv9DZqjaL7E1yD2UaEKnDo9iTUTaP9z9aXfGMmGncW6wMARrpSozr3YksJX3F58qcpZ17vmU",
  "key17": "Pm974pvSXytnwFcfp7sj7m8gKPTTcRmRrXoCCFW6pr8MwfWu4MzSgk4rqMdUWR8eNHFgd1yZsDx4rARQqbZSXUz",
  "key18": "5NaKisSofjACn6MFu7neAQY3G2aXmJDfMUdfe8tdb2JgYZZyEEdEpNo35nScJnTagZKe4K9FzUu4uihnRq9dpP38",
  "key19": "4PiVBfB7FmjJEVxfjeA7LWNngFtfdfUK2uyv9B4k3G3NuR4GkvVJvKJJK1kgAnKc6Z1PSCdRicQDhri3SigCNziV",
  "key20": "3bDE76aT62dH8zJZs4Eig8RoE9EVaiwKmJJiHtsEej3j7T6iu3WDhZg8QRscPcwxo6tnkyz92kx3UMcEyB5PTQ6w",
  "key21": "4FBN6FLXMFc8pKzNBiR1FmDCr6gQYMAooGPDCdceCwvo9RexgzdASC5saoPuHA1k9kXsernMKVyaYZFbF9pHoe3y",
  "key22": "5tgREhrWks3dZ9t6kiAAQcDTbdMYNdkp4GRemdRRKQ6cyrfEdZ24MNzo996wmB126AC5yFHJBsiUhnMrUD6BDinb",
  "key23": "2ikrAnj8MHJ7VFJBQ1NB6DpLBkcTPKUafoRuD4XdTXW9jtaAUqpjTmLtTYCf29eKso2gnbaqWN4QQasqH7srm3eM",
  "key24": "5E4wV8cFG7dfJY4uzLzZG58p1VEr5pmvLNDALwHW8ShLpipwqDutxBe7QuZh3SA4LwURPdvZj1QkkZK1kWsZSvo9",
  "key25": "2vihshV5mGEP38eZG6jfAYhYdB4TFZqKPX39j3ndVp7g9AGoMREn3opj3uYzBSTG1SjV1xaLKNFwYKwJGE321rJN",
  "key26": "rbCEezEP9UFUxKz7T7T5pP2wkBEYQnjQ4PycFLYYJ5fQTSkkPuTK6fzZ3eT67YGYKcPbB9pZXeEtHxRSDKAWrEm",
  "key27": "LLR1FYUm7NtbDxk4UYHhk5YcPVLnqSY3V28TSSfm4CMmRmoL3TuujoLTMLbuTHJCtV9NpgaXGSg6WQcaJYZda1i",
  "key28": "2mUPawwfT4GvMxy6jfiKVhuyHnmi3V8mm5T36nHxDchgebyKemUtmkRz1dyi57KRG8g62AawdjqKaiDkc6gq6aqz",
  "key29": "4CR5xixoe5RALa1ZJajUKtE4GB9MncpDfNwPAausXBWkomP3be9NDTGWZq5kKhqzG5zFyerY8QmpAh4AZb4hcveL",
  "key30": "3YsZLS1NaZeafthVer4bdNaxkakWMRVxbvxq4zYvJEs5BV9owthvY8ubAzQwxXYtCkVTGqj2DpXv7vh8jr7n6ns2",
  "key31": "59TixLH77PYQrTiBDeATHrtgrjipqofpJmenDZeo9CcL5wYoEe4snbaSD2LdnkcsjbYW7GpErLtRWNJoVH3iVtSX",
  "key32": "2wEinF7YMARL4yeu22dPZfLR1hgCRSPZdTBhCHGcPczYG4MgdC7m3mrdzRm6FN485cRxYJmMkCHCJeLTuUXcQZXH",
  "key33": "TG58uDCz1xf5WTTPBJwoCGggQCHicCiYdNU5E1ZHRwepx3rKUrfzn85uhGuSaVSircw2TXEosBFAr8tgrrSfnmG",
  "key34": "2r6DJ5Re7M9qYV66V2gUmt5crZUPqA2LqPLBJcWCqxRMCKoD8HgFccJAunYf2WPsKstMPkxyTh5ehbDbFEgpoFNk",
  "key35": "31zvp5t4WDqezpDf8jpFLzTAHxaVMemZmmeaxb4ddxfgfvWa8ddtziSGgGXKanVSE8vA7SgGnYDwX3E6jGqGSwxD",
  "key36": "61XAxzff4Mrt3rkh1kZFsY7ECqVPh6UgqGp9Q3DS39NGfN9N8SQN4GQhQDkrWGL9RNWcruue1tJXTC9JfTZuVSDk",
  "key37": "2ptcUU1Ty9p5L8NzDVWgt9G6udiwggNmynEdZU6CmvTWrGxuTS8Li89pxaHDRFVv4wpJjZ8gfSPCYE1hCtKLTRQp",
  "key38": "nyFtSauBomwoXJrzgdgVoX8HPLbqAXhLdvK2zznC7jfjvQiJNan6CeFpjXGCEDvN87vN24h7UQtT4UXr4eQKnBc",
  "key39": "33YMhCkSjvCPs6pJCY7XZNKJKVd5LuywyawS5v9FtxjFRzCoqj4pRzwhtjGgEseHewQEGgbkJzVF1cxf3cHf7jw1",
  "key40": "5zab8WKbgPQZ6BWD6gxhtGDM4YrxLszcnVk67d8yhtW874SM5y19nmRrKS2Sx4M8VzZM2EDK5aWnWfNv9yBqqrpB",
  "key41": "5CFGJVE1gGzVdFFQUfjrRR9Ft3Ktg9RHhFzw3Nf28T1BGQJXpwA276v4VMV3PCg3csci5VhZfkQbvDQAsvU1CG5x",
  "key42": "2sDAKz37PqmDf5KEjYTTHnD6deCJNjbvbSw9udaCeZYidKaRnezxZBw2YKVpmTxymDZDRxbsLDR4ETaCybuQKx1f",
  "key43": "2nVzfy5q8q6cEe7jZP4EWsByEFipXNJ5opTkEeHrdY8TDGZXWReU2qrq1xxBZrZXzxwMiQnMhW6Y4Ghz3xVqk465",
  "key44": "1zYi7W2YNS2i5V6uuXZEMY8Fx9W9fsxkm33jEwirPnzEGfsWs9iCfJhtCxte9shCg3HWp6Tkqvax1SSeZknUCGA",
  "key45": "p46UU5xVaAPiiJn6tEyq1oNVUmLv5QYXzscNGhefYP2rqiTJrKxeQhLyYDcLxUN9XEDZgiQ2mUNYN5uU8o8ST3j",
  "key46": "2eQJckg9sPvhR55MAsCugN6mgnHckbyEyqUNrbqQpDvyoPBMUKP1pDBuitK3DW8Q7h9xbAi8VLN2Ch78U2oVFcQg",
  "key47": "4JwGMRtmQPV2vQ7rYiW7A3ifZGrb6fV9LPWNS5NZv923bADBrbvepByP5m1g6EK5EUmXFWWQ8zzxPFqXx7qiHnzX",
  "key48": "2hw5bFCRfA1TkTM8dddTm3NqCrK6jNrwSkKkLseGWP1tiT8jGjMfQ1LXRrh8Dncok5HcKMMB5VhP47Pe33nh51rz",
  "key49": "5466aBx26SPLPed2cmy7nL1nmXGt56WyRKe6ExWFRdwf2wwnescQahcybNx3HLKbNAA5xMinSQ8MEQ9fAhMj6VJW"
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
