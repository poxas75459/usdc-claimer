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
    "ttKuj1c8TJrqkSfJ9Y5QFx3q5kh1qukvYbUSPKdFTuZYD3TR9R89LcZVjmxXj6UV8ShFHHiMBjUfAUvitSvu3h8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jPYRe5z2wdXTbNSY3DUuvL3kizfuJM4C86T5abD4qyMB3wqTfJsofwZHVoBt8LaD8SDCqt9x8GJsgtwBx15CSy",
  "key1": "4YKqCwp9xAkvw1v1crLXjiGqZKCxzxzxtfdHnaFre8Cm41fKqUWSrbTUdpV1bjnd4geREyP3VKieYjMxyRx5C2ke",
  "key2": "5veR8snjuf6ewDTfKnMjEDcj4gMv8MmfqpzXtu5HVwTwZwGkt9dN7A9qow3vTH9NRjXh8hidDjXtcahW2XgZAnwP",
  "key3": "67LhGRD6F3npNckJngmrh5fe8hgH3DsQRyonjam5WdTTSCQWhMfj5G6cXWU7yAejXgVN8SJm4ei1b6qiwAHanaDA",
  "key4": "45PRepi9wH1LmAzmJuVUfYYWH4PxC8PPL2ocLv1HNuxZxcP9RySEG9FKfh7T8cCdnrveSoEhEFzMhhADP7JjZRFh",
  "key5": "42K4JSBs3WMXwwUFzbAjDUE52NHTLz7ddFeFJmEWkN9Y7BkKA81Yz51CvWGZmKRGnHdzeT3BWsGKzkL3FyR5L1qo",
  "key6": "3foAvA8hPMKQP1FnFkR2C7EuA9xpPKUBVqxBicYHnQbdj7ZkX5LXLxorYKFLzGZvxth7caueEAaAsaRV5656i2Ev",
  "key7": "3o5vDjxgGJthjcqPXBWdtcJEqEnYyu4JdTBin57uncwsXWmpJgyVWWEUTvgUmAs1UHLtJJqPZotecF5KgkdRp9an",
  "key8": "5dnM5CewjQrptFPjewBUv3mTESname2hzFue3BAJBNafa5YEXoHiCZYad6rvWXGNdofFdBkSYhc9Bxpi1EgMjCTb",
  "key9": "2mPzGzmTeijpCzU5umR4sRAfiL5oU81WjB9b1d3Rpio86mT5HuJQnZtGXVkQkatL1wEMzJPezSaFT56rvybvTFkQ",
  "key10": "5iBxRELQhTar3pnSPzA6zVtZMsX7JiQAu4wd6SbuM6Bqz4vTSL4Ve77Q2H6WaNiGGmdAPNdVfQzyaK2h3buR9uxs",
  "key11": "3wPrYSTyBHpgepu614xE1Awx37sAXbAknG79gtCALP6EBXwJ5JfcoLURCkM6TZbGJoVJbqqXpKwA86rmRAzKnLbE",
  "key12": "u6xwgtQutfuLgTYzrKmP7AkyGbLaKxab478jgWJDxY77sR1TcLLxG9DdrcnCfW849bZ78YKNjsz999XEqxUUt4F",
  "key13": "3MDK17UjqDNhHafWhPGUn7PyDsv4nAMZUV64uMMaUqYRD1yxYMRKsjRFsjvTvmxPdoeJ3mQgAQ3ton3TYCiv1Cgo",
  "key14": "3cvfWNi6firnbBPHqEN9LgXkjin5tmrGjU8TyLq4zXMhcNpaJz8YqexfSbp9Pw9ssMGBds5YBLGLcaDdxuHFLRbm",
  "key15": "2jrvHFkBdqud4Txn6nVUgb42B9T4ZRgRQ2cf5icKXS6sn6zJvDuSArnXycJSYj3BKm6qfUHU6CajMGF5WhJP3zBh",
  "key16": "3ZWdSRrW1RTDLikjQ3nmi7nW4voKbN7xi1ZeU2zx2iHqudvSCJu6zCTLzdhYpb8dnpyEjpnSnCmw15wwiCnV6qP1",
  "key17": "54aD9E4NNz8ZkhFBtw9HHynok3Lrz2NhdPaUFjkGUiLraZL9YWjiW1fH4a382Ac3vnCPcZYqTPVPkjFUTS4K63wN",
  "key18": "315bo1fPh12vPLUehJNiNX824Ww5N4xjYkk16PfSwVAg1amcMonNFGyM9eCs6fBn2WHM2bmH2kr6tE27TskeLmML",
  "key19": "4wfKdoAickfw1CGr1M5MT2C319VogDLgoqjfzmwRDygNrYfsrPeEp8jYRHLfUsoQZSd2dfpoMcRde7iywRKtFG5H",
  "key20": "4ov9Mpez6tjqdtLxF2PW6zHFKTLEodnxhoaAayUDPb7QsvFZohnbeqQFmYsh4q7TQ9qEQ6C6GbPYYFMMn5bWnbrS",
  "key21": "NqJA9TmJ85EXRyWEKBYWzzsygXRBJczDmR9A5ZWkVPVERW9gEpVLbSHYzCuhFo37yUvivGAknA937z5fPMUknD4",
  "key22": "4Qj4yyJMveZ3V2BQT42bzNPQryYVmaQHnQH5ocf68Qf552KyJbXWUNw34k9omzesEaMRCKwqURybq7N31AFo1BoP",
  "key23": "KYk1b2wK72aV8chWCPeBcg7tXTpZihpwsiPSNAfsnDeYyz3iGJ8sVjd67MafsA2u3Qno6z3jwsYA4DQSspjQrHN",
  "key24": "2mkwbUXGbE8LZQKYNGCCyaajfhAXFXjcdoosmdydXV6GKHJa7VTjCGceBMhSArSJ7JttR1dZFvdzJbp9grcNnBJY",
  "key25": "4cHxrkdFcZAqJghLFxC1sqySexmY6rjJjAUHbYaLYK6vckWNrJS94YfPges1qQJKLznBi2PCgwjUUDFmYoEYzWtw",
  "key26": "5xEvxcyyRY6HSaduni1e9ZpsgzHprphTwB9Lss95AkrFNVnomrFrTYfamZFmBae44ZkhwS8pWH7kGTrmz6REETz7",
  "key27": "5PhswEuBD6Gds3AHKDf5U67hbXeBxom95HoXLvQdGxWWzPCQzeDaCc2hbWtgwLCQsSMLkrnWgr3JwXoJo1kmNXL2",
  "key28": "4FjFZhvae2bSgJX6Szcmbra1vU37rGNqq7YJZ8KDY9Qn6nxYCXaV3KWgym4ZbgiDys7yUh55sZueD2T41TYfd3U9",
  "key29": "2ojDZt3i2qRsJtyaWZKvsguyrzirgotCoWw9qNdcoY8US3LS39DujXh4sN2U9NaHADU2YTw5mRzTcku1fkKeyScj",
  "key30": "3xU4tvoU55xT7UjjVoVvEfT41KBa8sQRh6gGNGbZkbgmqhdNXRAqp2Udo7448QoFeisqQuz7TvZ3BJdztg7vZA68",
  "key31": "2ykb5e1uRGzZBQfBggHn15ESsin7u9tB8EgfQPrDBt1brZhJseMyjcTMWf4K7Zz6Kfhy96cztEdjrxgpc8SGfNyX",
  "key32": "59aRx4bgxCPRw6VzqnM7kTMjiEtY21xa6A9yBaxCUVtmQmiz5QnMi8oU8pBKfR5c9rDHLDLHRw8CjZLSU3pshhsS",
  "key33": "2oVm1XMQXXYdeFWZu1eiMuMgVmf1ETxU8XhpMN6svFEKnhijfGtGT6ejb5D7puZaoAnYusHyuToi9x4UewRbZens",
  "key34": "YvKPsYGbHMaZ8Ayh8FdQhoGrzHvjg8bXMqgzm7ypavCHFzN1od2rimDpJrX1N8jFHPVY1znDxrsG8D4HHaSWWiy",
  "key35": "2fgS44iGXGXtUDLqcWmBozNSbG2ZaYhS695AeJs778kiuqBxmwBWsgXwyPex97eQgttjn2hULH9K2chXTjQMnnwm",
  "key36": "3aKCGshTjNgCqEZ6Q9eFfRWhZgPRWZaKkCQrVG4tunBc76CVLePf1TAVzF9tM5U2mGx9jpF2oqKdevW49dDKety",
  "key37": "5MbmCUmmien5AmXTTSsYoiDJ4hqZuHAG4YBVz5EBpFfaZwT2hL4CKaaujfcFGgJ6SeB6sEAUjFocQw2HW3z1Hs87",
  "key38": "3bcmFVjzeqr2xVpedZtgAMmGogvnsR3FQssv26J1FiezHVHB9dvv1VYS8KZeWTexCrm4QYW8pEoNk8YCkiuVRGpR",
  "key39": "2MJuyMgL12r58WCcpWP1LRDAdNgvbLbvn9YeWaK1V45grS3CfvxU1FLDnaamLrJRTg666x9RLswPsNw5vHhJxTy1",
  "key40": "2Ay6BwkE552nu1HpiSAMEZ75jpcEi5b3TzemvjmLf6hBG8Ax49svLzT2ZpXRemuhakiB2AfkGxX3F1dGd5SyYLVR"
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
