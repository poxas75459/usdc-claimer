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
    "5BCBmwiGnVaNwTo2z11Lk3wGgkHtXiK2Fn8UfWph7fJTZRM2b9dVLEKbKzsVjntUD2BzepcRDB3ia9E83gt5nhVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AsiQTZKGHryB7ZqYx6roBBhongEBv6mGmv4fPL2XDxxb9XddQNqK5Wcz5sVb3Buy9mzmMGgJkwCzewjdK28uEM1",
  "key1": "4fiXPQt6fkiPSZzQoPDxVzmJAZ9w1FPS9ZRhUkBfMUAVhpqxkdGteEPmLzJ1ZqauYf76MU1LU1n9BufJS5Y58HPB",
  "key2": "5Vxv36fFUVu2p9D5TQRX9tztVkmKoWm1jr7Z2ySjL34u2UhLvgM2JsciE64LhHmCBq3FTh8VFUxR6f2ezMMSCdmV",
  "key3": "4Dqf6BsLpbwZ9LESP2dKey7rPBgbf85gewTLK3eUhdB1PorqMLEFMbfpQZPiY1ipsik4YpKMQXd9uJzGB7WazU3C",
  "key4": "4FaJKdu6CfqbE4Mdiewy19eUAYB9TzdYZFPXCjcaGaaujSETWWtgvaRbtj1Ac5nmbN7sXm63u35a44DU7PQFbuFB",
  "key5": "3veNp5TSKXozw2r4Fkied1Xuc9zjrkBjHTYaH9d3GCRzBF8JMeGcGMS4QsCZ7kqTyd2sCS5bYGUcypnR5U4Fs9TZ",
  "key6": "2LXNavV2KbYQHv5M1pL5xGxGLC5yhPiwf2Gs6CqvJYnsMUGUXNp8PVweN86sy7weyidnbXeMVBSgSNNLLsZfT2SG",
  "key7": "3xhCukjhtYER5bpkEGdNFv61a7b9NCpS4CQ1ZhvYUVPL66oSmNPcMDhqVNMrS2EX6NXP5hmyhHFYpkhjJGknvhwQ",
  "key8": "3JPygF8XvPwrZokSPWRMm81KEi5imqDob8qkzY8F2yt8rHSbeUfJrm48Nt4HEcq34XsWYfvBs8LjTLAf6NSJ9xxm",
  "key9": "5kYLZ6HkALixkJfiXHcpQLw7vhtZAkuePhmvDzUg5kn5CoRi6XFJTsatyFrTHiqfAwv6dkJ36hThLT8NNvEB7EvM",
  "key10": "5bYGVwMk9h4EYmxyWwBC1peqXk9xNdXqZq7aSyiJGfcSjjQExxiUugEZFaaqR72hPkwTe4FxgPFhsZk3MinDCbgG",
  "key11": "66b1hxyeFpQqcTyfgA5nqzmSWrjKuNUr3zuWh3g8z8S1qhY2HxTTMzQ3w1AN3gjAba3A4DNyk9HHhGgk2jcQA2jq",
  "key12": "4fr5JjSxF6DgmDMe88JsbvVM23H7FNVPEjKxT1obu3e4qvKRK95xyeUsDRyKv14jV5ocJ5MPqbxfv1ULbiebhvKj",
  "key13": "kDGcp1s3TA2r4paz8gGA1wixSRaTwJZQxFG9b5pKmPF6aPzB5jnURjCV4TGsMagheTnpWxE5VMGMjNKyo6vihFC",
  "key14": "3KiVUzXsMkiubBza8pqR5mQQjnyhJkCUsHvx13Nbr3Ek1FkTxNC3n54sYJAgBansVG5JkkNjGv662eiWaAEgcAZX",
  "key15": "3xMSeV3Cm3R5k9L7vHurmNp5QcDyXsNjpeJmY1mW1e5PdjJYsNZfhxxEBuHaTcuYkj9ynuVv3UEPJ2z1RmDqKTeF",
  "key16": "49VAmZmVyUyMVZkfM18R74cFbV8gzR2fArPDNmy8B42zLPJaADaZSByZvvFvYL2BEy4qJutV6Yfq2fRnAaL4HRwW",
  "key17": "5Skga1rbt7WuXqfJZA3zqDqsbGqcmYdHVSprdTDH5Jr4DG5Agerr9kyEAkm36Gz1VYS5FnWtE7BZAJ6498W2kDKm",
  "key18": "4RejpRNMzY5XbqZcT5q7GdJhc6GM5rP6CLHwy3Dq4uiuUwuA6kJkKjjsuQ4jSkqa4fmZETqyUMTarPUPpU4ZJSga",
  "key19": "HJYynqhLYbPUk2RfNvPbFwYYbYymhtQ5pzviRueEmRuUBXDh5dBmx9st2XTsMa3fxnPZxWDQYp3qiELb1LmpbfY",
  "key20": "5kE6pFFZnubHNGZDuFfmodZsvseaERoHS4TTrRGcaWsxogUcvtw8NbudTyunuYAzmfHCuw8nFc1eqVaP7oFHHwWm",
  "key21": "2Y3kgqeM9NZXqRkTdW4g75HypmacuTkmPhnLKaJTC1kREsrwWFycx5FicVqJGu7c9PadzJ9pjGAxhycda2pKYMSs",
  "key22": "3h7M9w2yg3FzTcmKgHbL1DwNr9yp9PbJhXrp9aeL3GChLh9LsJBx5TLeEy6NDTf6zSYG9Ybghy4ozL7eKqbDtWxh",
  "key23": "3ntHqAmS4fdFg3qPdeiUxYkYAmshCwxeJFnsxrRKMxyiVLQJj1dhSPgrrubHYRCjvWfVVyeGbnWdQL749eFjcbQL",
  "key24": "5ab88u5Tke2i42mgVwDUm6Jz3wSyfxUaRbsPPBgrnxwF7ChRqNmbKoTrHbNLJ4yoweeFXMyFpz2JmSPMDER2mig7",
  "key25": "4g8emFUETRXTZjDiiugQb53rJP7A1TTtP1PYxgxHhjSv8u78rySA84tBUU5VTkwBwWXb3s5KKDif6rzDHEWhMbLk",
  "key26": "3Wu1GTZ5QznVSQFr6MgSxQroEgRPFzsVGLYdfveZcBcVzQdVJaL83aBmv42AD2xRUwQhbDgs1BbE2sjAQUTjXHLy",
  "key27": "5edrFKdoV1UWzLX95HcPm8rvCw69eCwvaihX5SRjEQBweiNXxCFnYZvVzPRKg5ZtTDGDawEYYvwda4iskHph7Gj6",
  "key28": "3tsz5K1hXEvRoAj2vMZ2gA4VqdfsTavEt8VoW2orHQHUQAaz6N2gegDdqnwAnHEisUineArgY8yX5GgbQFPQu7Xi",
  "key29": "2DtrscdQeqSqneiaR7RbEdtDuGpnuMN9vgJDwLrB8LJc45hXQmU5dzhHWmGvsvL4Q9mUJtLzaxjXd7UyActcXe1x",
  "key30": "24EfeEADNrXdJADWTEwWgzdgyJM7RCDbFQ5TbTC4Z8U3KwHyKrMnxLb5PbiSQv85vMuHN5PzQG7kVonJHoLshCfV",
  "key31": "21gWbHqNqfwGYPC4rRnqJxyC9vnFELoqgvyRY8BzaAS3EU4TRvaiLssJYM659HgGzM7fjSJLGGw4cZVZkj6VV4gD",
  "key32": "4MTtuBpu5n1aURy9736ihiQnATuSusMY2JhH89NtRBhe5NH83HZ3GM2bV4meSXj2VpY9g9yynuAttJijKduxYtRq",
  "key33": "sZ9YTtSM59XpLXVLbJj12QskxbZfepW5sFMpKfqSu2NNyPARrNkPbC38rubYxpqB5QdpAZpPmb6CQFUpejXjAxP",
  "key34": "yXufAd4SoDqZWmQQUpQm1B8XJi8VMBKoM7So6rWyz9RGDCuzHdJ2Y9TxLwcia8NAEeZTFmKXrrAi8ztgXxEAUzi",
  "key35": "5i73FDdR1A2t1FVfF16RbAmLyqdSiFxF6QG21Ti7rBxdNAKb2jNbrFJjc9XZ7qg71tbvqmVYHPw9zkJJ295HcGGU",
  "key36": "aGKmvubnMxfx2xRY6vF5EcFV8mXuLhr5ffW5R8J1WpLNZPCxN2x8h4rrDLeGKE4v4BgMELduQ5zCSicp238o2V7",
  "key37": "3WobqCpRiWFnGE62kioLqwuiumm3sFBjTSeHgcjRo3raTTxerguww75xgmPEfR5qzsjPceTp1eCGAz1aWiXqWzk4",
  "key38": "2vMUsbgCGE9QFgRz1SV4WhnNFfyTU6VUAu9sn8daUmqgUuej2trx2qiGnrZhDuCG2TBQgv3XhghqJwETZ1eDvZWL",
  "key39": "2qcr2mF13YZBqM6xpQGcWZQWngZxCnkdWxihZ9kJKBsYCE6jiCL1cRF3Kr7tqNRLfyp6eVDHjrZoGVe9GuzqCr2P",
  "key40": "3qzttcjcA7cr3qHiwe2o8hy6J4X4pw49cs4Rdyshge59AQzHfJJDP3g9zzzTDtnSCJ8iTmxvvprtRLBaW78WGhvy"
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
