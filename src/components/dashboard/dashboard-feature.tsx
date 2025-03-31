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
    "4kkkPjqxkrvMhtPWceYnf2mZek16ZM4dJxf2PmkGNd3B8rbre3HjKwxDmNsHv9jK4bEf78ZbhspxL9cPUL3FvUi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4LijxLzvE4zKuMrrE7XZA6wAghjoEM8BwspRtr4wZRipmpzKGm6gwJcb1RD7PqB2rG9tpFqwJ5CuNGcbShosf8",
  "key1": "33AnAr7ZyD2YjubTa6yia5PJbQjZ1WhX7k8DTuKzBPiVenYPzzQ46rngJuXNyEf6keeMGqJRJRfxhzdEeT9kXXGy",
  "key2": "4vMdceNXpKeA57VAwRfupZXRJW3fSeVdPX6NQSixbWwWj12ey1UJnrnH1PzKYH5A5xcibyCBZA7TXuKX9CETUTvg",
  "key3": "2TXw2YRHNHazTCZAgRc3bwmjEzKf6z2wFNEP8qXByBwp1mPy9iyU5KVq74tYH5yCNtiHYDbyMB21SzzMqBB4ykgN",
  "key4": "4UEvRK4gic7zZgJxBYqvLSXWrFtoiLC2y4Fm9MFp4a82UJT16QuUJpwYh1skyHmPcM3tXrtX1cvBnV83LZtKSziy",
  "key5": "3AErgUQ7rqgbAZSP4hFVUEyfTKWmGbSFw1peGhUUEr4iuLDdjbEctajf9zMTK9Kx9V2iLf5Q7DnRm6M8MvsjwMDq",
  "key6": "3Gffrjm3CKQ6wc8acwLr7rd54SckD5YbuC44dEzjAKuTm6MywnLsLdXf8FrBrktFv6jovFYj6fQURLzEdvfGf2yQ",
  "key7": "5ChVJUKbFD4vvpCxcgyx2rH7dZBngKte47PU6G4gCyAvy643ohaSufaiLpdARxPhvCj5mHaerBeDZbWQgv9gbwvH",
  "key8": "4ymMfo9g6foELtegTz7qZ32oD25PHEceQc67GXC67XLbB8vgcZ3qpScaiw1yeWZjXwSVRBtd5WzhACQ8D62km7dz",
  "key9": "4JarJuTzJ39636bAWqiG1dfZjNJiGHvLY8SZgdnbyJQ3D62e9Hs423QpVTiCZBXM6C9iu3ZHChzwciSaFGVvgG8h",
  "key10": "3t9NyqrUBGaCnMNrXaHGDssazUAnBuxKAoDMAd7RWbV156EhpGe4iK63Hiagp4fNTPn3CTmf1GxtZNboucqbTnv7",
  "key11": "2qWxaPWxT4gTcwDyZtCRdvvn6K3AH44aWDP9KQ7dntqY2kafZuGZGuQuqet5MsBy7QckCptqXUL2ET6YrkrDDnii",
  "key12": "2mrcpJhFjib4uSWmrUAkbyEumRGtHb427cFwpRvwx6uhMtC1fmcGT6eGHpqfqkozriY3SbXFQGeq9HWTxMGJL39Z",
  "key13": "3p4jyhVuVpQK7dekbRjTC2YWvjUteuYidLeTEy2nns3pz7KrWuTDEyVZHGfFi1CrZWoMExvG9TRcuVS96FZPBBGU",
  "key14": "3ci7A6HpyoyhS8yLLCuHRwh7ngNgkDcvWxrr31eDRjoFQctnqHKVXaNmRMcqCk9uifYNFNTdBqf8PMay71zMEW29",
  "key15": "4FB6199V82KMREPnXWwFgxa736MwAai6BT6S2fuaNtNz4YW4YoLdNpon76vFcqgNXxZHvJuZYVS8GEZCYaRTKLqo",
  "key16": "2noExVXG1fDcRbjnzbJn93FExv4cY4CCmS2iYohgdAjxjv3jzqikrp9PcqZXDQLnputqhFdH6y73T3fuk4jXsZwp",
  "key17": "32WuxsjCkzeuPvrQXH73JsEe6xnaqEBKoX61tVtXs1DjtU9SHiEBQqQmgsKm6pVnw9x6PEX1vpF4PjefnstqayUX",
  "key18": "rutBS34pwxd15apW8sPXgzXjKyybpVYiQPtAhtofFdhorLF56gZ1JZ6MEzSqDXzEZELK6vPNwrz4YCaidWUYzsn",
  "key19": "mehjydVXUWGar3AA2iR6JE397bZt5QWqn7vduW8V7415LPen3yr3gftViyidvATtkuWvaXLSpz6p52ND1Xr2XUG",
  "key20": "uRJoin4B8Q478K4ogfiQqaepij7SqQysyxfhnX8MfukvtYB19KJ8mvhtNDU5qjd5871DN9M5BdF3xa9AGP51vfc",
  "key21": "3HLFXkteWrNgKJVFjYSyBbaY17yUwnkPsxRD7ifYw938272RcCT4iC5iDUEPotz3xAELaMQVmxkAUg5ZDtWyv1qR",
  "key22": "4h71DZLqW2dvNK8zsr7f481cPVKvxGqUj3q8gZE6SGsJkDJqHUPB9YD3snQVpDFCwtMGsFoP8TyBoCYA5GPmB1ko",
  "key23": "SEFQtPLXJQqMkpuEA8gPv6cTU39sr4iuPfHJtA6Bunm6ijNEQAMZZTGvUhqx5EdE5UHTMVpgv5vRWDEtfQxtSnQ",
  "key24": "5KLwYugSWakDWTjKaHUWjQE4HTmg3qzakVrcMW9ewZkFuRVGzPukvwdwo4KhiwNQ685xR1c6LPwmJobqn7Qkan8M",
  "key25": "2WmSsK4mR62SM7sFgE3Hwm9nhjrwstPUdcnRcVwSLU5hT5iU5BcPhkj3BghHStr6s2bNvDmzv2MyqeDpNzfcncPu",
  "key26": "4sqxLEvYRSyRaunpGRdZEq3EqXPVar6DVZxwnY5wKdyvuTh7wcSFpcSvDpU67MVirUi5PF23UDH52d5MJidZBZz5",
  "key27": "5Gu8FULMAj1Z8Ab4tALUhQ7g7Xupfo8qNosx23iV3Y9dhGsW2cjqvP95FMXc17jwRb6qD74ww6cjfrMA2vMkyvM2",
  "key28": "5sZ6wQr47QdhCUzbjZocnGNwLENM8zWKqZqx8cBcchhfGYJm8pmNtYRQCM2hdWawruHqrh7yB5TiTusQHuspfeDJ"
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
