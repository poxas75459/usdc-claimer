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
    "3QEwi9rc84RSCmyt8vMfw6XNrPS4aZZZXqQ9gRaaM8sLuaxKRX9MiuT5A6J8SpD4RK96TufNVkjYaHJN8phapSJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4RcQex4tdQwtwg25a4AtDvktLhxMxsLPWcacg7mySxjEEY8din8SunjJA3YoA3YhiG9onof3tWhWK8NFzKJrXj",
  "key1": "4H7XHPirgRLU5D1of3VFHs2ydTQVCHkUXwVmECJxeci3Q6pDKjBbBAL54grinnGcPcBG1JTpJ6oQdRWzsTPNLpV3",
  "key2": "3Byyjx1YsX3ch3n9V2xvzoAsXv8XXgDPRYtJNo3xzJzvAqyxad2VvDCwvsNoLbDqR4SLr4t4rmUhETsmkhjjAba5",
  "key3": "4UbsfhxiEvC4d2YtyYrYzNM2KBRSDaFMZp6ecGk9rAcoUDEoEzMWi67WYEbGqYm3khSSo2WmGJTBPSqfxBt4mCFF",
  "key4": "4n9S4aZJ6SK43ygbHN6M4hQhAAkBZR2jY8XNtDtc3MPst9pfgaYv8SQxbvFeKouZHqB2NTwtThxF8PAipYs4Vi3S",
  "key5": "2nCcQZMRcfHc3YrWXn8obgbZKShAYJNCVtAXZBnxiR2gWo5aAGtmsUbaM91Yf8QPvSu6hug29wTGeBC6rmTFKvoE",
  "key6": "45GghHa6VPiYiPM3jsHUhvp7rkVincGiG8a6XyX22PUPAiBHckEpPtGEJiRuzRawBcRwMzMqQe5CWGkuE4h4ok2c",
  "key7": "2TvKQAdoejAHLbrHzfpcEmaZeMqwpih4dDSQgH27mHGWfWD5ocxMrAzJ4YdiYRr8JhEr3oDfZ9ufE3Q1V7d1KMyB",
  "key8": "2RPJr6YHitaDS8v5nMHtNcW3uDBHHUvevG362qWn6nF1WoWQXNu2K47wcAKDh9DxGaRQcs8y4x7iaoErdoNZCzyY",
  "key9": "5QxGq1GWYvCemsXfe8D7eAhz1Pk9GUG7HD22Bqcg9pQCW5mdwUkjqXDMYdhSPeCt7YiTZ1KnJHXKJU1YD5qFenPm",
  "key10": "3BTjHc2jxnm6pWLJgkv25NCgZvQeJUQhGHb6NNPvf7dVmxbeSDtp2NyytnzcCSbV2pwo7bgywUKB2RhjogwG5nbv",
  "key11": "5KbiUnKSrfbQ7oRTVifGgh83tEU6pTPNoxPsy4NQ5V24Wm7QN1cVshykeankti7vafGrj96BCx5NoWNUT6aveSR1",
  "key12": "2A6LCystGieJR3KpXBBqerbTWXynR3TRgiGTiZsKc3fn4SMFGvKDUbG6rkgEHMExEYNY5qZpHWNgA68m6ZeNV6pb",
  "key13": "3Z8ZhydFimZwxGQHM79CUQsPVR3DHAgz4eL5qTzjzVDHUoRuHVCTAaBRuiPkbPkJ97rV6tkAg7k6u1gpvQbu5shT",
  "key14": "3Fmpkia889RzMs6u2Ut9JFFMP3GLAwLT7fGDve6WvQABMYkgkSZ8WByJyTu9W1w1bCizvWHyKApDdpUzAodieK8a",
  "key15": "WTMnwTkBXkTMXSc4impf8e6pwnvTmeG1g7iPAMgpJpS4cgQ82j1icSUVZwq7sKAB6PZ4GcmxJyVA4YwW3vu1R98",
  "key16": "2PFXQyEajvFNw5NfgxKHfeFuVup88gDnFNDpMSRBgVSL9d6Eisgo5PYrePGcpMvT5fG87Vcovz83apjJojtVMyv3",
  "key17": "5qpSo7m3jackiTJZTVHRQpjL64e2YEFjkp38ojEGYWWAKJs4dxZg35NPRRat84QLpjNESDwVh1qjvywxS1PkzNTt",
  "key18": "56BfH2LQZTML6noVnK5G9vqXGN3bqi6rzmTvusvyueAgN7PrVZ4gK1VBJNDBqctj9P6EnDKzisu3jKNnho81TmMd",
  "key19": "2BDiMta6KjTyoms8AwZHy1UQdQuD37uAC2AmcGzBnV1P5AaE3ryzEewK7QnWxvaHNvpie2eDCE6yewDbDGnWJGZ1",
  "key20": "3p3GNALBAgw7RvW3dY7U8jMgFrccfdoVbJh2KzQcoTUJbWtqRoPsFcp6J5UdC3CphhW2ZLKgc7JZ5uaeP24nkBrB",
  "key21": "51JFC6fXy7vbYNTzWL63nBXsJcqxE58QQPamGMuMmgsBnH5B2rSTJbtWRS8ya53Hn8LUV147aqxB3zXUQszR9V3S",
  "key22": "bF5NMSdwU8oAQVWFxthZLrNVLny5h7rAMHiEFHhNkWKx3eBHx8WTu4VFDJ7wD4G51y19fVofCZcsr3URNJovUKd",
  "key23": "3cAE4znc4SQxgAtVXcV4tLEhrwDvDeNojgL1RsGDPbykz2rUhNhuezWeoGjs8fg7Xx2t8oXxfQWKfWWcSvrcUUWu",
  "key24": "55LWtCrZ38Ttdwh1SLotH9jZZwkCzBAaCgBWaicBkdz8VXuUBEZWV1iCmuVH8eDASWZu17e2h6vEmqzN9Ac3mdrD",
  "key25": "5cyoEcENFUYqMEvtftzwxRQFbS5xfXQdcsMoUCBf5f5is8MyYXN6C8zhQKCLgNoi4XrgphHSnMFu3HALqa4PZ3nT",
  "key26": "3qWimVPaAAa28vB2F2iX2mSVDz6jYLeJWqT1rrv3MDs4VU3vtj97RPjUH8s2oJCtCxYacFbb5Bo1GghqbsbZht5M",
  "key27": "2B7CqDCJX9AFafVrgu1siLVthq6omnqfP1DwzPFLM4dmhnH7ZbBYxJX3Yd8BkM2aDZKAXLTKSDWYnZ97KgFDYFTP",
  "key28": "4QiPnb773Ro89uqB6syHBs7aWV5AdZDW6epGS4nvaZF8WgBKXfomxbUThtQUhMDA2n1cah4qMcSQPGub9TzYjFji",
  "key29": "5zd5a2dHwNovC1nYWs4k3sVYPBHTKeG4VmqzYpTwMKEGELnV8G1zrLsZDj5SEjPzcuZNSztaoKNDv2XpjanAWzxG",
  "key30": "2wSJiY1VAHDXijDRgALyMijuur4sy5UJKvixbcfCHmDs2QXm8mTwmDywnvcN2spZgXEtWsZFJGruMycaqxhqpkom",
  "key31": "5ksomNwcw6bYGxx2GA8CiRASHcT6yamwpu3MGMkrVKoS6Ey1saLUYCuNFxVXPxWh9L5DTHuPatu65squ4aHwmJfP",
  "key32": "4Mur6g2tJxLMRRp45npn9bqsCg4pDx1KNpyc34ceaDMWwRjWQkvFvhe3oViqvPso63HG6LybXGUkFg5D6Fihxb3J",
  "key33": "2jAvw3cqRFRcSezASuoevTAquBxVWLEYHMHJapsTVoizkVXs2pb4kPeruNu5E7UnCYZX511EcuT3qXNY1mQ9HE1S",
  "key34": "5yXatAeetpEdjagqWdSzZGtWsseBaRa1zUHULfifqUndXGbLuARqiVWfS55XHpNszZyeeoNxPdZmJb1KYk63FpbK",
  "key35": "4zZpLcEWJVW9xHhZQfMR6bfpbUvn7XaywY5krpQ7CBAxaUxURwx9fYWmqyx3ReqZuXKVDjjk1oA7ekHRaDaXPFYL",
  "key36": "5y7gmtDt8dBqqBHeSGfFxd7kA3YgJWQ6kHJFDjNe6g6whk7R5RJ8ZMjLTEr8fwBUV7SvnVuUP9vd7XFdctvG7fc3",
  "key37": "5is18qub99NdhM3gwRSJrTS4uZVny3tgKpEjJ8rWVZs4ePRxDFN1eG7UNJEQSFu4PefhKw9XEjfVaWD9HPv9mKtY",
  "key38": "8oWq2YdCWYXRqZ4cm3AU96NX4UUhjH2AQyNvpt4Qxy5ydpufX1ckd8v9TYrPEB41yF5KvFT9BCG4jQuJCrbRYRj",
  "key39": "5u8sSRqA7SM1AGc7NKsY2pHf1V1BiGb5gLdnsAYaLrE42Poq5hD3JyhKZ2FPCYCWMjACVDXr1DjF2DSbzBgRGjA6",
  "key40": "3U3ReGPADecxz9nXqGA6VEXs8kh85cRz5XC4BuigMLCuY2x3WW5anJQ77DHMcS3D6Rt5LjnnVkfiqct9VpbK38Rc",
  "key41": "2ohtsyam9SheyH6QhFgqP7DwLiy3U1txaqBKkVsraXMA1Zcnrc8M7mqFVvsMhLye4M5myJ3Ezm6U5veU6abmQUrv",
  "key42": "2eBjwRwcN2VHLNypr8vUPR6qcBx71Ju2teenvpu5svXenoMWYCAeUC8doxECBzyqh2mxW9urUk7giVo4tH5bqWiN"
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
