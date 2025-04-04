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
    "4LSMWHTsKwHYR59fKtzMmdkmQ3aiZFr2N65XMvwoxUuxaAyiVuG2FoB3x5EZEQWi17bohhuQsSF5Zr3gTPzSLa3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWtRLZQedb7Y6Ro2KNAB3c5nZfpXGeY84BUhiFNUqiHcMxhTgURFFMPSBTnTD6vrsscHQyXpCEkQyzv8X3eqjfC",
  "key1": "3ppVKDJBuCRiaHcBznNqCj7p3jVfF6S6BxUikbW2M2zMyFYhXyff5mFuHs77DnB31ULa9GesxdqmGjkxMTbA1NMr",
  "key2": "4LoqXMQbGYT5GNkMBbPdxi7eGHPNYec1fAVKaAecejsyBz5VjtQsET9LfHTCsnaU97CZ9NRXEe2LPU4D129BHnX8",
  "key3": "5Ww7KRwGJQFyGPjKAN6BjoewwLKVTHoo4zc7kC6mqQZp239qJ4nLUw2HduKPtiBQqRTB44nAPk451gU1cbpBPSYu",
  "key4": "2FeJPsTBU53ZaPP8JW8CwPSUEJzP92jkBMm1WQk15cnFazPrEk8J1KZ9xLf3C2cNqxhoH7o19ArrSoWWMpLAm3i7",
  "key5": "3zFjnTxjWFG2JR7iXVxwFrVqNpFfrqcte63WW4XsNhUHzn6WgfAuNrTYChA5GF5Gxy8n4bNpxh4zSet9yMEd8fTR",
  "key6": "4x4DfRVFDbCZMJvKXYyifMmBLNT5UAw6MUAaMRAFzmnVC68Vn31geHfVVYi7ZNVd8bqQW56mmPTdWey9xYEmyo2T",
  "key7": "2huADCkH9fhQ7fZGQSFQhDkv3T8xahBxVngo36yWUPhAeMRdywewpFC2Fx5ujWEDoMvbbYyDTr5AEh7ALEaQE6HJ",
  "key8": "HY2csQK8csuw9n3xWg6rwSsxWQZnBqoEyBc5TMuwwUMEBivwyhFj4SVWzeVFfEvXKkVU6o6RpGLhQ1fM5ViYUXD",
  "key9": "22yZMFzVBrGiP8pfoeNVxRqGYmSWg5Ts1YaBYTJE3zzQRnqpFJ9b78HuTpJ48LTo1L6k9CRsSAo8UALNSbSDhE5V",
  "key10": "2cS4xT5ncBeaG91fb6FNFXHwEuV9oAeqrKDTrzt2ECiFMod9djUN5rsXELMUWp8G9nzRn3ragNjnADZXmhHKSz6X",
  "key11": "GFZ56ptGMVPeTnV7iuKLR3z4szTwECnB34hLda7LM3tQ7fCMK4omqSvc6mv6zT6XrXSJUotr81n1wXGocEQD9mo",
  "key12": "qTyrxZVN96HMv3ZStztBk1xGZK4G4pdY7Y6TfU5UBpNgE4GYxRgCCfRfmJU6X444JUkwHnEhzBJ4Wnqv8y2hxms",
  "key13": "3SdM6LJEqwsoZnicdTeALbhVA3jCApjQZBKFd8sSJUSzy68DGW4G4QdQFTkfRPyCw2mojtbVD7prVBDCru8knNxP",
  "key14": "55pnueZFWSZmoJ6Qe1Yioxm5ns9LNyLJHGPFLZU2Rv1czTvZxWNUjCdVULQAqEMePkkq7wfP1Y2naXd8NvS7RwA2",
  "key15": "pZmozKaY31ARPQEeGobuEpgDVrsURzufsoc2UJ9WmodVK3tAzkY24fobq6DUY6ZvPmTaQQw3ivYpAhHhabmF9UQ",
  "key16": "65CaJznCdLNTvg3dTDg9U7yGPXTdzAbHvdK6gxb6JiuX2AMEfLZX3vL2Dh1VWzZbKdQsTR65kdiNc7ib13NGj5o3",
  "key17": "9akydZe2wLdeDQK1mx1QFLNAuALsBkUmMX1BzoXnwpeMF4UtssCGFgtssPq63NGyi52oWmx48ak8caeYpQ7kKqz",
  "key18": "4AyTsb22pEmN6CyffoHcqxnRDbaqWZ5Qeozw3qs1UdFT5q6Vdm9fJvQ7q6U47ak3r6bQFNYspHiUyz5bo7AdryB2",
  "key19": "5ZZ79eo3pmeg1Wpxg2kdwKcqPgvyWpsak8zEXBptfomtbXS91wSPmfomiHvn9M98eufzHF5TtBMtJ5z7TEv6v68i",
  "key20": "4F33zV9b5uwAoQDjDHYfjNbB5yDuBaQEAhoGtteeoyYpSeQqtrZoFpTJ7BG1YJcKKYcDTfuuW2NSHWuRspTpBo9n",
  "key21": "4n5VC5NbRrVieh6gjwz23baKCkx28gW6QJh4V7Eb2qzDdJkt35yrmqG7Qq7RG7DdYRro7tecdAZdNfkEh4cnmu8i",
  "key22": "3w7d7c489AMY2VTi8B6jc2dgbx1L5qFeveC5Jcn6yeLeJ2MJRte1MehzQ5NV67FiQn4rU4JmP6zMGgJ1MBjmGYDz",
  "key23": "o1HzFYeFWFhqDGcwfLKhWrxyZnzEdtuKx5FyxgkjfURZDGasQCfqeKHHvwUP7toXfoCWSti8xyzwP6a3y6ALhSS",
  "key24": "3DBGzTX7Vz4PNZatL8q1RNf4CHNKrmQCMHWTJCib8NpGUkuCWZsy2KrtVdXYoZJortnAwthyo2egR5wPc4zBCWeX",
  "key25": "jSg5fLzMT3y671cpftMsrKhh5DsQiRBkrvzfGji9oQtBYzvXuJjvDrFTBdCftv6eq7SDzmXNMHPKrx92WA7rRLp",
  "key26": "4eGb84T6LCTDLrdNdSsax4JKoiJmtqUnKF8cg5KhAJsACMa3vM4wcpEWeBoZ3DEcyEWLqxwrXcgLxBDpQ7duo3UG",
  "key27": "whKmyzRdCTuTMdp5tYkYn2qseXim2GBy7GxEg454HJ66GxHHvZWsXBZAQPWRFwUEgncCNGuEnWE7op1iKzYoTBy",
  "key28": "5mhrDmKNKx7xGnQ6SxDFrAgHgCZixUusMvYFkTWHkMJ7S1kqH6BUBPZTtWBg3eGwdAUfyjt1e1fLSqwrm7TpToWg",
  "key29": "3igPRgmUVSPAkEXXr6c23SpYzLgUC7BfMNQs1eKJ8UywMYrv77PNsM1Pv3HSYUUA9sCK7yYsXJPHCoZitkRXjocu",
  "key30": "2bJwVwUZqwMTQq3GW8TUEtCDSzARPQnwknzHSkaJFUb6UDZGanVZyBW1Zt4BSrbRWmrVe2QUahXUvD8YUwVA1tV4",
  "key31": "5UQCR5ZdUrjqMKZcpgzaYwXrmmzf2UsFfCK22kiSei7a6NtjnuVoGmGhcCAfvo3seXP3aPPxbcefyvPaUNAGKJc3",
  "key32": "2t2RsfwX7zf5w6hWPBe4tSyj8NQqYLhrLindJ1pLL9UTxPWqUcTreyPbwFxFwGAvfWqUBaeveiaTMKk4v26K5GVc",
  "key33": "3r8DmE46e1vJM1c3ATCQVMiMHQFJxhMWRoEKFVRW428EcEnZXP4ee1gaRA6cgoKTqgcRUCxBidWJrEo5rXAivbjA",
  "key34": "5JUghVEpAe4qB8eCj5JJDW4UoHNawC2d5Jv2Wn4RcT8iCfVfpUo7tn2nmh32qu7tTaSHfbZguk5NcniPPXVPX5Jw",
  "key35": "yCXqLuRfMr1cYHcKxzCRqUeFgN1T7X82FKDTJshxJw5xRY5eYUwrbbqT57ytrz8vAV9d6rHmm5ykEKeiUgjywU4",
  "key36": "3PZKaofE6UqnVdWZx4YGSDS9pccAKjiZFXL5twvLSsA4kJXdnKFDLsEc6nTyT8qHp8QhgNGkYokNF8LnDtrDhrbc"
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
