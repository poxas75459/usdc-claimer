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
    "5U6FcLrqQ6FuTwkoHZeZcpKPV5CzGNKMjiQ1EivGPDaLbFakbzwAHXT5RWDkhqHzUf1Y5WwMMnoWhZXpKymJWXJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sF4GXekb7hbufzoBzgC6tgWrPFWRPRhN43NDNwpryP33uUe5h5U5DZLpEZWEG7tfb5srX6yKHrhiosFYMebh8wq",
  "key1": "32UFc7b1zPHKoRWgdu7kvtUGMBEUsJdG5kz5oNeY6S35biirj8bF3UvB5FsVKnRktHVi6kWEN6htSAsGps2Xtb4E",
  "key2": "5sudkUqtRC9k7nCAWZ2ekeH9gfHWezVTrp6KJwnW1r6Nwh9ks32ztkD41bgd13oCAkHoCD3GbDGdcdxsbbYemggp",
  "key3": "3zVy381DkAccnoZsz4gYXjcR2JUUS11Z2RZcRHfG4X3wAiuVXbEePpRhUunkNszGMBTvhUXD5C8DrnGcsuycZY3d",
  "key4": "5hBrUVRwDP4hjd35oyN6WGZDwaBjH7gc9c2AUN4Nbn4JXs2QiPxvaHCnLhLUa1pWTyTSm4WbpRc4WJQhmfkUnfEh",
  "key5": "5XnctEeBK454F9TNwyP28zRUYZtpy95xFn9yNiEy9dBRdfhHPqJebmr4SQ7Lz7yN1pdgfhpbZEZuR6cbNy73Lfmj",
  "key6": "3MPBZUjfKsyFUSredua3H3DagFfkY1a4YgBaN1iAtpAHtCcNWXGfb63cX3XrobCvyiKrQa5q8NJRfyhHNGMaALdX",
  "key7": "4UaDsiK8iJakHQCfxFHRMydgfGmrLKZkc3uyGo5cw8v7QfUJLexAB1v9yq1GcqSPNPEnX46hmsZPGDyhapFPHxxr",
  "key8": "3zHqHjrnLJVuF8HrLq8eNnhJYLwxPmU6FVGXGT578yX5oedHrd8VAdRHgN239E9TtQ78UtJP2tZigFpBNmEea4iD",
  "key9": "3Bb5jNrJE7vKvXXY5MsNtGggoMBe5WfQMCcc9YMp3Y8E6FhPcmHdK6d42pUN2K2cBLQnYp7SVQPh67bjfhPtsQxo",
  "key10": "4umZ9LHgWNBjzg96FqyL5o8Yj93YKGcyCsLNxSV7LLTQWWe4uMsvV1WGgjvgq8TE5gnSLxhBPnwHNnEFdzRipS5G",
  "key11": "qxWie2VQQwZ1WybZyvoGkWodnoQgYcWrAUPyvAhsayoBg8EYSCc3ns4f7mwneZFUFcjGM4Pw4UvS2sX7c329RzX",
  "key12": "xX7u9fUj3HmhyUZbr6LLyPguizxxk1BdFHJwGNexH2qqpLgvvHM7ejo3SXjvBXeNZtmwvKNX78DBndGstvYXQv4",
  "key13": "3QdHFqhXMjMH7eV3SvP1EK5t3hFiUkxS5JzKzCiAiBgx4X9bTUBMPQaA2UDxN5AgLZ3KbnAtWa7ovLa4SMGRjyKX",
  "key14": "2qsZ6xv98UMUTvkajK5n7YBowhoZrjsRX9iz18GNAh2b9T4NjdjUV5ojV1r6iDBVZCTh7SRwQK2SgJW7iTVA3Ftx",
  "key15": "2dsZRtVFYwPXmDSNjRMTWTni7vSvYAKeQQn7MvaWiCYdwYdLxhTEqu5dEySPe46DiNwhyNH9zovu1xhW1VCA6LZ1",
  "key16": "5kaFeaZLRd3xJy3jJjq4MREZACxA3ACHJKDrMqSZVP9QT5crkD8Uy7ma9PntHCvFYVcyX6CpacJ6WSpL49MEhDCT",
  "key17": "5rPn92j1wmwnPxArp65ZXLiQUsQNPVMsg478f6Az7oCh1ASDiYXDtFMD8PYB32FDAP1KSn1rmWbuhvLYap13h6Q6",
  "key18": "4q5aGYMntyrCM8quyNU6AdS11GmbroY4vgKS5RzqxGXYMP6tA67YoJKqPrq4KHPNghyFL4nUSTxKEpvVLfrfVwBH",
  "key19": "3EycC8uABDn3uZNEhFKE3E1KyADrBJVW6tp5T9S8JQSSwygm6MkxDd1RSi9izmu1Pq3ivmYbZG8Q57hcrMBS18fs",
  "key20": "59kqGGuWzSATKRYdXdLCx9u8Bm7dom859XZtVjyBA7nuFFrMu2hiLbTPEzzqrbnihdVatPDYwv7aDCjU32EfBCAt",
  "key21": "2JYVvossww16NoUSifqDCJGNRGd4C11zg7pdD8gVF7s1eNxg9Spwz79ocAP2zur3FHpEqjZ7H6bcTjrgrd1Sm13h",
  "key22": "K7ogx2WS1AKhuvUr43zJdYWpf5dY49MbhFSRvtF4oaegu9pYEkxw2FnuQuCbLknFjEiENx4vAX3nF1ffbjm25nk",
  "key23": "3xRSxUaTVeTzwDYdBuvGRVbnFTeR8LJTS65A1MMDvUdBDKsVvNr5CVVjQxD8CpvSPXUmd4jbpDyzDkHRP6Jb8BbF",
  "key24": "35RZfPxc4CGqsaJFa4QS5xfsep4eqtQotH8SRiSGyQAujU2pyRCnwRvmy5DDUjhxWagnVY3kj3HjLwEFur5aXXMr",
  "key25": "2VEJNptgQUPxwvbRqmbfhenkqk6xp69fidvaN8KMNMbDyKN4DAYF7pmFnMSnWcexULBqaK4HEV32ijw5Yxsa8hdW",
  "key26": "5oWaLU94wXAjv78QbuFb73xYLdpVSdYVyDu4vuyJ5qELs47ZQQ9Gk4nuQkpT3mEF2CjP9UcaqZzLzUYfJNmnF3sL",
  "key27": "XFg7jXyiC2hBi1LX3B9vHHhLPnYMLxXUNhzm9KwtrhAKdjREvHSystUoU2fJe4WbeNbP6gddN5YRzRppbQaWDTA",
  "key28": "1VJSwNNPGERMKok3eE1HHgaYZYfViAoRCFdqbiaSj7owk4jv4zb2KukkCteDgYdd9hFXeekwkgTCdGQ5wY8dYQK",
  "key29": "P5ouv3FWz43zXs6GUi4fzJE3zY8esdU1vqF2hc18Ap4QZCrbRMaFsW2VZTgc8aFi7zojo8pmXecpfutrZwHCTRM",
  "key30": "TfEmZ5y8kxpgXnvoPZf4fN2qSRNkeWTpuhJdaBAzNLz8ap45zZPsnmsjNVUC3uVEcr8L6aM54cwpqgoVVYwwA9s",
  "key31": "3rwedVA2NAsuVHJyyYzKesf9yM2RcD6KWXgiCpaLmaCUDNmPU1eDCsDyWxXcvaAApzmWH3ooD7QSA7q1gF2ZaiH",
  "key32": "2az9pT5kgp8BYkstdnvr9coV627LPEJmwRqKFzaKPLBX5gPBTActP2P6hHRd3RXtGWPDNBdhLLQB3a9w1p3gQaF9",
  "key33": "62iyLtckYcdo1WnZDeoUKsTfkEeyT6tu4atHmasqtUm3vkbSxae93xjLRTR7uopgTMLQpT1X61y1dzj2isPvXgaQ",
  "key34": "5PBx9cYuweoZ99QweMvVAtjCSKxeCd1MvdZjNGaMLqXS3q7W5ayJs3PuE12AgHwRUFet2Vf8ZtYgmnau5fgMRr8Q",
  "key35": "2yLswHSKsxPnMbbHLtfgdZuxVk4nSPi1DEk6mWmHcDE1wxvCAdb6jvNJaRRXY7dB4SmEAcR2gLKuqGi3DAJzfiUZ",
  "key36": "4zxorq9pwKvHey6UYMpER2eXJmZq6iLTpTCeQyWx2BSkEsiUpWQQAZhPhCKgFynTPVktPfVMQrJv1sNE3GvS6eRY",
  "key37": "447mfp9gUL8gehd5sr6xVVpoqKr8udhJrxwMNBk5Gzd4PMkg5VnkwgLkG2NgqfauV2iE9fejoSz9oKnsMZyhQTod",
  "key38": "2MKhzdkbNXXSBnUBMy5SMUPMXSqx5e1xs4bC85q63Y1GvkWM2tW4kzxcPLRBtGbPW2WwNEmWQWF1PTCSZLZuechg",
  "key39": "5jUhjkj52wHwtxtzDHNohUqzKHLBcw7j2e6Xx6keVFmgeWar7GKmPS8Mpg2m3FP2VrfA9L6YK58QHESzDypjjxZV",
  "key40": "fxct9KFPN2qyetAUtPinW4PAYKWKZj3rxnjoRddGRNftMjE5KiXpoG915P4DWoWRpwaBwzfFYUsdC9Wy251YCvW",
  "key41": "57f3PbaZ49Eks1q7c9ALx56q7c2f57vr2ELhFPEvZ1azbXZMqY41ifNxUZQRWgb3qouXyss7nDmEHP1MVoX1XdpU",
  "key42": "2vqa5bjy82FH7Xt6PXU7MJ7xeAkiASvL4N2u911zDpAUoSeZzMHCnbwejYdiu52JFZ81mCF3GbeReJx674aXH3DF",
  "key43": "2b1vh5B1MzxCG6gHQ5G8fbChG2VPAc3KfqHAr1SiAuHW53BnYm5ZApoGgcUc2z2d8x1J7RiRaGYXdEDFQ8ikPPXY"
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
