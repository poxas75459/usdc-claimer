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
    "5NHG3F6bGMphecQqH5dEpwh2YWHrLoJPJ2zADgZ3mVcwxtbdEkjnuD4FfjbeeNcgcCgDbRLM1oV8dUKYipiRbC5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1y2Wmx8jkRDKeFF2mkdyyU5SsemUyj6EWYBWbSeu9EX3vb5ZGSyQDWSdkunu2dwE19N14QmWyuFrEMvyQqM5s86",
  "key1": "VDsVrti3rwNk2vr9t74E5YBET8L7AvFnvaWqJGKwhm3VVg8Y8tZmEPsYhETGABNTRbbPu3nhqMjEUCAJsyhMF1c",
  "key2": "51TgAtiQcyFaTu794r9H3S4p8hR36tpdgiKNdP2oJTWmMkvPUuawbfSavrbjRqnCrBgaevafk62JUkkv8kFMDGHT",
  "key3": "sxGfV8pJh86S8pGvWEYJgRWzJQ6xnWwdgw6y3Evq1kiVPbsy2XJMfGbAaLdPg2qpVfeuksZwN6K9G3cAyJjCdoZ",
  "key4": "wZZuhkxgmQ3DJkWqJFmvEeEqz5rX8AxNhiGBD4MwSrehtPq3RfmfFcvKe7QJaQ39fWpXPwGh7Y6dFVxjhPy3nJL",
  "key5": "57yGnVVFYXzkKncCYzSZKFUiA81GCuJnbXorLG5j9mREhUydD7qfHLmRnFbfG68z3Rqqe6PRbWcqqYKwUai7Sne6",
  "key6": "2z85U1Nv74KvTG8STFSVb7snVHSJUDDExyaasYLwZSRoq8YaYSk4B7dJTdTWaM65h87pq4LikCgXQES14N54kgfY",
  "key7": "5xFqxPPsgaKnMtVVyoNPmuHp78hW5BttYeQCmPdaRWVEWaHPTkcYMMNHJEChXWGJ5TWsLA4CrvzMsaD9Cp7UtxEx",
  "key8": "2X2CoATuJbgdoqdJSUdtLtg3MUrtemxChQUrJNev1i29pEasZ38FNE1vpEUhEWZRA9CVWCQTW7qGfUByBtQkjXEa",
  "key9": "3eZiXLSyhbkpTux4DxZ28v38FN7PurH9RqeETpUYVg4wtZFQtWv6cNqsgpu6tEYDEv69x6Gd9u3PoBWcu6p9diEB",
  "key10": "4PpehknMoBSMR8WtxxXK1oSmUJdrjDB1TjvLaBsWuzVYXtUXeeryDux6Yt6Db8R75oTM39ACcD8s9uiJ27pBqtqF",
  "key11": "5MbGzpTnEaCfwQp4ryJj9TZUAhk4R7bQkbrM94Wsq6T2xfnr6A6GuVyoaXKDDP3B2v2x3UGu83WHsX8FvcMQCvzr",
  "key12": "4sS6v9B1jvfoJL8kGsHBv237WpV8XszEiKtqd4NRchmZRKy2UVn54bbhw6DYWZRXxGHGF6QWEj22wAzE4UAkMVpM",
  "key13": "44afbCYqJ9urt7giMTfLeVd2ZirR1FmMfu6aRaTeXcsNDwrU2UDt7SNCd7uydycgLFLgDMj3vrzPs2viJ66XqCvz",
  "key14": "gbktBsJa4mwx7xZ96b1bK5mihayjYiavhMi1ca1RE4QsD136qWZXfmEyXi7EfRfohgsGQ23ioc6W22VUfTUFrDD",
  "key15": "53eHCrwyWvkn9uUabpGF1WUQLrNowZfpK8VMW9EnKQX48WF4Hr2wneKb8xtKQQEA4VvJW6n1aqitvxtraG9RiVrY",
  "key16": "565kUfrLmm35ivzX7pgU8euycc1xP1qk2gWVrdGK4pxfQaPQuzu4Ji3BAgBzj3w4pfBDEK4xYrcnD31MZkiCZNtQ",
  "key17": "NBNTzwbrMaZyd2WKKFwdhaKzk52jwmYgtB8pQKjQaFiJDiDDcFPmzWedq5XEbDaVr5Sb19vcVTrwv8QUrWGH4Yv",
  "key18": "5wuW5XsFWwG8WLUoRUZxpHd1XDrx1p2sH8FvLZVLg9Uy2N7vWghi5WJejyahTdWwqJVREkFhnT17tpNkzkcCtCoq",
  "key19": "2iM3Aecwi2EfG6suiCHBL4B5Ek6u6vJoRGJEwuAgWKpfYNE4UzxxcW7TYLspKfDzDmuxi1ThdSdU6YftkzFN14M8",
  "key20": "2iLMwJND98BinbUQJzfCZbAr1G59CYCxQqp9yu4NFRwZWD83Dh68tKX9gEsmfMf1kBFVWohmj1dMgRNBPb1njKbZ",
  "key21": "3kH2MQFz7hrSzGEdRjfQ3PQVBouZDKrWzSRSP82Rc4povUyL9tEkMR28M4MrUR632bStP367NqeCenBhRD8PQk1H",
  "key22": "AYwrUAr9w5yNGHqbnRqDmfSnVNMG4TQdjkbxYMQziSEwbCkeTbZ2DWpgKhj3wKcf4czPW1SSUn6BxxuCBuSrZkw",
  "key23": "59iDvcRz5mEAtcTimBXrdw87emoF98DP811kxYQAZ59xhbVrcHMUwyUpJQqo1D9rWbsHAgrjbmJndd1gRtYcaX4z",
  "key24": "3zKGLwmDUXV6advcKTxhLxwyPrsMmUY6X1Re19H888GBKjAQJxSML3yhWtWzaDc1ojNUZAtothcUKPfMRnsqJvdr",
  "key25": "3b6ab3HGXhwUvERrv7drw8PVZdJfrKTLSdCTg3NGKD1R2KD6oFLkLfpn4AGt4TSkUQb4R3kMGdgf1eKhreUDMCJY",
  "key26": "57XnY4GewgTSq61bu6iGCXRMNQcHZdTvPZwCupeN5N34o6tBjayQNujx7jXFYF4236Xw4ToHHcqpVjFWfs2EbUiM",
  "key27": "Q9FfdmV7oQ8Pqs4DaxBRNtymgtBp21cDhBhQffCWuX925TB6DVxy7mnf9YqxLdqAnPUv3as8Ry417B2JS9KG4tr",
  "key28": "ER5hQXusgENAG8oqEBftx5iQnf5JDPqPF8JuNnj3k47bykRstYkfcx3kTqkGhQVSqXAhcjmLeAHkbgVJU5sSVD8",
  "key29": "5c7tbTDnCTeCVQuekVARuP7WMLUrbXG3QP2dj9QFfeqLbUiQmFvUVpx4L6pg1D8YieHQ1muzED61SysN4z6EfCWM",
  "key30": "5AeeSAy5NvN5nNVRFKGWZdsmhV9Wdra8mPQ6AqwxCShVZuqGDjtARiC5gG8nwD2QNfzw4dqfFjRfV9xGpghbAF6a",
  "key31": "33xJRMDVJaHedgTSZyoLtoqEe3zxHGMAgV78q62wZeB3nq2JakuXxfmUunBCbAgaQ1x5p8WpdKPmbBitxoPdd9Xh",
  "key32": "q4SfSn3uPFihRxAryyZ2Wg4wr6sZFKMsYpc8GeyTYESfma6AzpRWGffgg2vwmvQoB4WGBQJtLA1YauB8CF9qPSu",
  "key33": "3AqRgwzGBCNVTPykFgQX6P4xCSks3JxWAhxvkvLwndzKqiyAzSQkhr3JWce4JhJMRBoDT2og3uNuHoW3h1awMVdW",
  "key34": "62d23sm9YTZro3VXNWCgXpm7xU7HJbt5Fi1eRBaxsD9iQAAq1dcaWtty59Vc5LeVactnVamrbkwmXNhvnq3U918a",
  "key35": "5ZQPzMR3JKoqXYanwoSc9TKii1YiRk6KWYfLX9xQthU5aFNZhtLwzStHfccJUmci1UnBbLYZkEWkXG6Tv9NSa6Z6",
  "key36": "4WXxfV55gUxt5FJAkoDAdM44yrca1zdVUfM1BJJAqqV3odx7MuvtCAYzGD8EJdXukUuJMN9RNS75VRNyNVpjsg9B",
  "key37": "4n3P1EUgdvqDNEBQEhirb7PffgdZC6dHqrxbHcB9MuSbcZU6uYk3o1w1tWjiAMLcyfeeETaeXS2taBstrszqVTkZ",
  "key38": "5DCA8RMrVopiq8tNzmARBZDCUn1z4pBmjQ4vPN8qHGGTCQAdmiGuYr3dkh7z9egKdyeNobWiHNf1kAscCViB3x32",
  "key39": "EduAZs6Xn1N4e7iG1Jf6fSf1mTgNserASooiZj36pJrGZ1HufcrBXsam9mbSyK1Pb9aiwece5r5zCuWKgy4Ykwt",
  "key40": "55RTcnikBDKLbt2fiy7Rdaj7jny4kQLMwhnYr5C6WHwCGtoxwzNSSZA4ZSuLraFmxW7Ni8zMUib6RtbTvPsemWsf"
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
