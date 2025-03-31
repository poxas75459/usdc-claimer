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
    "5NSp48n9rJP7nUm5wigVWz4uxUFcqrLxRLjszGXheWHXTPRL23idZYQoiaP2sFY7doYhQrmUDcZWxicZ1N8TZpcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7fWskMLsn26Wd9Vh3UtFrxczD83aKcXpCjsJiALWfpNqsJpdQznk7PGm6nkGEbGzycV2JEzhdeY3iXdqA7UUiz",
  "key1": "2fHkE2RdzQT1fAhUwdG8Y5995z4u5rYHnArJws3b87P3pPJDZDi6XD3FcyBNMeX34wXE59X3ntHh1JUzj679ofex",
  "key2": "3bNDj8Jd1Bway9tQMqZ4HsP5GLuWQVwauyApVaAfqVtXsNCnRQKCeUjXeJ3hEa1nZj8vCbwcUhS7oiUYZqFGVatK",
  "key3": "4y5okFUrtbFdtc2BdjGGtiP7x4wAAeUR3UGxmXucPUxQAnbDxELjyTo4YKkGMwA4umxZGo9oE31jnpf2a3saTbGr",
  "key4": "u4oFxpNxfP9gwusqNgNAfdDseokJoaEbiXzi8UXABdh854p4dArmAu72wbNZ4fhusH5T5jDBMx1AFzBHyp7E4RX",
  "key5": "5x9jQwQWu21GFBexMCvWNDbZBBjrPNcJAFvaoi6zqTYHRHNhPe3CSNRXe3RWNjxEpDcyFobLDgKeyNkqhpdqt1S4",
  "key6": "dNzMAhKXKEeDHA6QPxqqFZVd8N4M8sqTz3ErWSQFwLes862oPi2BR9rKqBw9uwG5V8p1oGjfWgcQwEye1e5BrrV",
  "key7": "2BjBDBFZE4EVevNUxeXPGMUKgMBr3HWA6CMjtT2YozaTPcYZX1RW53nWPmedTCYeEFvzbecY2Y3RueyFfMYYP5ur",
  "key8": "4znvqkUfyphxdbsXDnkP1xGrJVLwo1r4Ph4hVmg9nqdJDfQqafNtmnzMhhX2nhhwY2rs4JDxAHEwHJVjozs5WBC5",
  "key9": "4NpRSZppPJUQEFZFiYbPtvKgXm8zd8kZHmdHaXgBYVZKxPo9m7rZPuBEPZE11pUQN9rzRNZq1Zesa3cQPG1yuPtr",
  "key10": "22H1A58m23no5xLo3PDLu5dM9A6bvhfKqre3r7NbcdzmWNx3vRaZcQ8TjpxpwArZuxFQAH3JZHuarrW6pEnPoZpr",
  "key11": "53G2RpHKaFmFMEKXpptB4HPXG9QsYFhmUbH5qReqZXzo4U1ULJvg9ucZUtS5b1VNCXhoZKRhEsBPGX6ffSf7DuSk",
  "key12": "3zA2NuAYbQviPZS8rPAqKX5d2wh9if2eBKQQ8mSF1nDUZ22CBcAVrCAcmJwPovGKE4EnbX8cMoptYqua4FPDSqHr",
  "key13": "3TRwfUtvTWL8qsF7eCVPQ9TftLDwCWgoCEZ8aWPkmLozf4PH7DGYWp5jWJb2a2rDoKhVvCs6HjdAVnske8XAPa8X",
  "key14": "2UD8eGE4zZwfc7ckgyP2Uttwq4BLNegMmwRrKTM6eki1bbrunmgG8U4Nqmr8WHTHdGgyDGDpqSrMx2JTRryA7WbE",
  "key15": "e4VhK1g5XfHaoSL1GDJDD64fR5zzdk9xYbdvW3GppCzFLpJLNWLwEUpnKzUoMdcZy26xSTS1irvVegbCjMA8npr",
  "key16": "3yEpmKAArdmbaeByzuh9fEp44EbCneRFTarnNDWb5iFAmZUxQorKRZk9PrauScGVnagG1MVUoB788AxpehnY7tDe",
  "key17": "3cyVdDRTm8ggjXrzSA8AjWCFfSbYzS9d2USB32CPEyXTfDAQitwW9T9qXk5yj4KVW2JXjE5vtKVGisVM5kPyrC3C",
  "key18": "29GK9rf2EdkSXnpzPpJxb7aDC3rae9LkcAWQZccVCHwzs2smyMXP77nQJ2rnapw8eYscRS8rU7VXKes7QVADDkSz",
  "key19": "4b7RnEwL9SR3wQVGELFmFZRDt4UaWba9o7oVTykTyX3No1Z4rgeVnc2pBNPWmgNDkVUNzCytvXEypJbQEpzWTLXs",
  "key20": "3hTc96KoEr4sCWf5wYGoXkzj3SsfbzMaGAq5EYvem9SHHYudYSTD5mdDYFafKcwcokDoht6NiUJHeRtEYoBfnqSB",
  "key21": "21UwDrbT7GXzEG2KQ6jQ7CZmHsib7zaSryuHG1BpLJsKpsmStT3Z7s9cHb8U2VWLgx78AHTyJcP4BYhCWFZj81TU",
  "key22": "3YfzdgwGnxAzgQNgo4pHXVYEAKfj9o5gWAMvWWj4vgpMosgieM4vBwvZZ88T1FokdybRehYSnKdU8yZsRGP9jzFe",
  "key23": "3Bh9Bpeix6jUzRJXpmj95yu1T3AM4DSXA87mq2dr9c7vxQzQ51RHD1FV1y4NmbpR7dVbNKTGTQqfubtX6aD1GVqq",
  "key24": "9Txigu5J8PntwdiJptJ88zc2JUTj3f4zhU2TLrTmbHpU8xREo6TkXGsbW6c1WT3U2HYciZxwevk7Gogx4FZLGZh",
  "key25": "3ZQerav26Rzxc62D5sAnPqYBi2pRqunbi3ZU5moRxTbn8auYRnZMJvx7RWwNb3KN8xG7kNUqG8cdcPABzLySWGni",
  "key26": "2zzWw3kCqqfcppjps5QgyWvMECoeBtAhvbavtimycUMkcgeWuxr2AALSfCYuL7zdMVuVk6eZKfHD12TE8516xhBC",
  "key27": "5yx5gNPcVk999t1D4rRWx6ZehagqJEcNSi1qNcLC614RMKhDVPNVnkc33apHRKMFH44W41G82PvC6C53Ztpqufr6",
  "key28": "58UgkY5ByrWL1NpWLq7GdrkkPpTveP4CZMTApybQCLTkzgjDbS7p2f4uXWX1AKj3ifEHETrnZrDbWBggBigApxSu",
  "key29": "3QyRhzYKw9pN36W4i4JoFmuD8wpHvKrQw6sBPDBK8qCsbhS3yaBiFmwYJVQLU4nAStbnnh4FJMpw9HvfAZooebNX",
  "key30": "3x1db693X1XsEBSXsfFAj8vNM5x7nxe28QSHZTAkaMq1GGXLSa1SgeModvKKDMWgTr2vxadiAYCeCPuf13o1qrD2",
  "key31": "2F71g79HV75pRT3gTTZL7oT5FbKHUJoWtvECXVLqx4StuLDr3Fc5CodrvA6SbmUbkYdLhPSe8rqAFwAybEPtdG9d",
  "key32": "oCX82WrsywpKdpcuu1t8fJBp6rCVKz2i4LkgcdLh5qz2PQiTcupt64t6r6yh5tzufE87jB31yopENpbww8tqcqo",
  "key33": "T48URYz55W5dbXmFDc1fyqq5hQH5pkTpAV9FQewTnM4W7usuhBmQjtEadT7Vi46QqqhcPX3DhXo7tYTCa3YD3Z4",
  "key34": "2FmEp3somx2Zw8v6cuvV1FTLTUizkteTmwFFhTJHsvmDQG2BaznEQX1Cqy7C3ZECoPu3FJcCNFExoMsQoBMnpjyD",
  "key35": "2MR6W1oddvDLWgY1f2799n65UGD38zx4RhEHKVBLjKpXoi398bWPCLSBtXy7p4vtCvVgW86TsYn5ETPM2s4MxCTH",
  "key36": "2J7mFGTfNELLEqgN41YSjowe5ahN7spq3y1AeXrbDbWr9Fg7UCYbyoxx8ctfaoJsiY4dUR7o25qqmTYmpvWfsH1D",
  "key37": "39yMtSo2yghH58px179F8VBxtKPG6u4mWfDi5WG4X1kFguxWDmRS3upgg5UH9bBirfSS7encDFgoHr167WKwCr4y",
  "key38": "3hWEixy7ASCiwBqsJ9XByu7dzekrYTyWyUY3J3HYQ2R5SkcKemfneB9iiMShc5Y8kKyuzYPKBBvjeqeh8hafGqwh",
  "key39": "5gwk7ednteFmpwt7cDHcdwrwxmcn9MsEscSL1WA6BTpKQSz2NrySHwjmBdX7cqfh5UtsKRUKuHASJD9EmD66t1i9",
  "key40": "3jdVFESzZwTFNS6GAAUPtEo52GP75EpAtfeY1qzSRJCxpR7da8oJc4G6ggi4XtCT4Xk3zixBsynGYYpixzAinjo8",
  "key41": "5vJnYC4e1QH7kRvPnqrhNLhXtxBsH5ACuxsvRihh2VW89dU1j3PAxLXXC44Y2D372VoKt194LgiCstJQQLnyiiXb",
  "key42": "2i8xU2Wb4tm4rUvhNqjfxSsfYMGic6PoYQP2xCUyuKYTQ5UEVbR9fTXJii4u9bJHkmrLq4BJ728hCkavNcGwdDpL",
  "key43": "3nvqfgsENJ6YJ8BKWCHgBN7AWE4h1v6TGc8j1V4TjLtw3fHJ8tNh4MxD7LU9uXayAJuVPvJcgEQR9oD4AANNNsGW",
  "key44": "2Gjh4Bzjky3hqV2dP2iYE4gD8E9794XZCn6Jh7RASdoN5BVRCFofUiVULdPpzKewmMeYkvHqDB5uVoYGJHQF2bkc",
  "key45": "4TRgjVjnYSeQAzEUZVsMjKrcL2QaS3S4XY43CWvDoDwHqdEEbhN8ji6qFHTimmFSxHdw46yPvqL79nPffFGPZUm2",
  "key46": "3FSpP8BwE6bQhYuw8u8oWurNyntorkzuHum2vkRCKrrkjHFESaM8cR2Lwjhod2r6AAuMiSHagmn2fwfsasQkY66e"
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
