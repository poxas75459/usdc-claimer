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
    "4NGh6h9YehRZSJNtrKM4sQezafgoqaQXxp1DsuQr8sy9vypCVjdHw8makH8YfY3hzqMMN3AiAAZwuFkRUTtWMR9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCXeFUdyGuQ2yu3QWd1FFENRU5EMttW8zpHfNFyEXnHLKc7iQsAjgqmrU6f1RsVQ8BtmjgJBEF7V2a4mSf79F7a",
  "key1": "4iiGKHgWcseaiyMabQWrvsFwLvyktwSmQ7bBtKEp76eVWhrkhEBPsGqDuYfRAVupbtptYfkexDKfpPXDaMXtr5uA",
  "key2": "4dAqKMCom8o5RbSgASeFSYzHxt4DART5xgk6Dxz8kAqNZoKVUs5HnqrfomwSt735b3GK9BEWmQoZZ6W3TG2aj2Rr",
  "key3": "3jN37z1Z4SjQHpyvYbj726XBUebcojfUcZiQrL2Kdj7Q9fYNqAKjfNoabW4PiTvgFKmi7EN5TuLzL11p4qYUhwdQ",
  "key4": "3729UcFPK9DFX9GZgppfbbXu6DiR63B1aPu3cmw526P8yPGJaxUv5Eksf5j3ZfFVbpKbB28Pbnq79dfwgLnUdG1W",
  "key5": "5KMuBijtKe3EKr7uyvw4uvjgiGKkyJkr8HMWs9irofuhHoVnar3xXvZxGvwQ1a9BaG9H7tztZ2D4zwCSFtqa8tJ2",
  "key6": "3QpoNmdq7iVraCKxAGtT9cFxch2Md3RReLABqQJLdbGoNjQkoq1ERt2Ubp7BRwWELumGHozvHir9tgomWEWkjFww",
  "key7": "46J3BTkjjD4rJ233LQZi5d7iwfExojxuXhnkw7PMymxinsvJ8Kmzv8e28C9fKpNgeHRvLmBZSd1JEq2jf2BA3WvV",
  "key8": "3zW4NffS54Ttv2WNhToFXK76bP6bWK5Dvnp4ABiwg2TkeHuAK5zQg8Cbr6a92aVWEukvwTD6jt66KqijVtxsGPe1",
  "key9": "QVWGbdemJNKaXQiFj2Kp882WisStwQr8ekcu36TGdrLB3nPB1SdMU8Qujf1WwhyU8TRySyotmwepcV9K1Hkjhir",
  "key10": "2LoHWkBR9xg44dcqXqygrMMKV1iuPvBoxUgziMv7RVfAMBk2YkHaqTnwgBAUR6Br8uigmyBJxYVZ5akjr66v4Lap",
  "key11": "2kNiFiRvBapeHRZNBXFvAUJqAJbb4MH2eX26GQ3VqkLobaBpVs6Wr6CqBbof4qzNqyVPWAsrzzkaqx1txCjxiftm",
  "key12": "3mkGQommenSwAzeNiwaxfZ6Giw8AxXfp8p2qPr97TyagGypFdgkbvZYYyLFU7qPZt54baMzP7xbBbMumZf4LDgtG",
  "key13": "49weymVXTYA6kwc3qg4gC2qFKVMsbsPehqh51rVaHvexdMNMB6n5wKoQwwKuu1m9qJXYSMYfA2uktoqwJFnZnxDb",
  "key14": "3vAzKXgkK3KZHgq85yaHvcQXEvyFLHoRqZ9gnL4J47aDZ5uAHD4kqsVhHqFFc4zh29Bya5NWKQSbWTk6rcoRarAK",
  "key15": "4jaMa3bsaKQ6nR1Phu2744fpRgGS7XzAiRdnuHZ2V7HFMZCtBeQmJpmUuU5Pbe6rqteg9bDqdmNfeW443cnYSjHJ",
  "key16": "3G8vh4Y6SJvk5pCCvtQXqDt2gQpnV1rUvUKpmikHqViXWfetbG486Sgwh19Ehf4g5xHLyE4wLJzHef8vq3jcgwPt",
  "key17": "4US2Vh2LBp4oKtW1NopidYfd3TFsPTzRN4pfxH2oJDsPcZw4KD5Bi5TsfXWsD8Jnu2CPRyj7enkUaUh2ui44iKek",
  "key18": "62h4qBobJWekhzmu6MMunEZdAiYQ98dNTqCkaHJEn2zgj118B22tPvpCEkGSdvZBYFqY6wFc9G9ZgyNTpRooqAow",
  "key19": "5o5cbiEZsbLsEvbPi8CVVZipgaFDbpVxQK3PAaRjD6N2oPXLVbDmD4hVBADAGCGqcZaPanbEXXM2f4D9d3zXh6ie",
  "key20": "2wMyR7Fqdio8RCB1su9FcBcGLUmL74vzMALbUvHASn7hHMendbernQf2f5h4SYJ7hvHb8dRNo6tRFfStWjzT1N1E",
  "key21": "2UPGYBUeC5vjCUvgvk6fe9fVqVxnZPjaqqFhYVZfTgPT7kp7JV1fkvvM7DZfvNjPVkwgP2Hi6k8hLQBZ5DnT7hVe",
  "key22": "3u1Qez3gBrBvMuv2UvdieeH3pXCS54oZcNmcBkXBHduN4C2qar34smqPQB3jN2FPpGfRfUuWGhEMVpqTpJZ6j99r",
  "key23": "5DDzKwPXFKsCUeHTpm2eujdKGDH4CnNJrSAJ9iRMZHuc1ACn7RdJ4aK5wZLGGGMGGgNyDY637rZUag7Zu3FsydkL",
  "key24": "2cyFXvfir9ocSrwDsDkCp5f3DuP8LQ3M2VqXuW8kbDMjecjtKWS2E1immkWTF5tq8F8CJ6h8NMinziK9atXwaSc9",
  "key25": "5zvwKPEwSpJZc6ocAj1itsfzWKpgR1tH2gSxTiV2mxG5KPvgynbLzceKU6Cxw35xy4eYRL7N5syaWLbiWNdsXB5D",
  "key26": "5u7jWZmEDU7eUeqstU6h7A6NURGTLfSBHDYpjJ8iXKtqdCEsPz1cwWt3yUSMkhnnhqDZaUFKgMvrUZgadTm3QGbF",
  "key27": "2cpMFngr8qMUM813GQvfhtndANUSuDTpKV5A8Yrt161pHTBJ6mVC3rAVx6rHhrFfb6tqRTKB9XELg2sLTV5d8NA8",
  "key28": "26REDZkmNi5TUnYzYfXUtnq6Pxdzn2F2E9VqRJ67ifsFUNuRU6rbmNW7fGzBX5gMDnrv1xyPKth8qSRoygSqhC3e",
  "key29": "5Ws5Dcyo5gwwr6SRB1ZduZjDRuzWaq3Lwjzwniws23b2nrAKanj5eKRkjNhx8U1JBQsD2TSRsb7mt7MPLnviXe5i",
  "key30": "2Rm2narYgRWKpS4UCeK2zdHygQexXrCYU4t8vLrByGk7ytvUxvWXPTHsGPzjsVz3r3541M7jNQkYdB3FeBBCSiHn",
  "key31": "HS1wzmVFRjYxurycnDgGJZfk2bLXUk4eivxMquvqLStPD5aLAcMQavpnLcDcB9RgHmybVtRUU6G15EwA4uTM9dA",
  "key32": "5pXemeBjNYCCrSejLegsChAxMdj4dhhxfxQbVyZnc2EZZc8emju6M9zpcgCBoaoG5icbM3ZrXNtzmNh3pzpXvZVu",
  "key33": "5VmwWEWgQK2j83KwZu7GNbRcEoZWcEDffqxr4J99wKBWnG9n7BHrEm17j7ZTsgNa4LVsWPzw8DRkhgdevcZMSuS1",
  "key34": "3ebeCWJQHP3LtZnvRCYpnqqBgeEyBRmRszCwV1Fw9mgvwnw55cVE1rWN1hjjq4aeHp7eKmZcvBGFddErM7qGuh1x",
  "key35": "5eWdBM3VU2UH2Ms32WH6r9LEwpCHaN94cdQEgkk2ti5oDRR82QZE1ZXJmoXsEAyZFRDqEHX6Gj3FFXFzyRiHAegd",
  "key36": "5B95MuBokX9r9BAx1UHtGQY4cx35b7FhT6cjPGTNM1jphGmiCL74UXSDoneWu3dExbycVSUbYc9gpBihMDcGwQWX"
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
