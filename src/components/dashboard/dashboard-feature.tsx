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
    "393i5n18z6mmR3ZEUq7maQskB7RrjyHzCAPXAWpcKsKkWquwUy3wvZN2krDx91R1iG2Serk29tNzxkT4cFi1sE76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23NmmbKcLFc1nNHPsciGW8YcuK6fa6WfEKgoJvU2k3mqNs63NguSrSj4eVt5gxWJchVVX5tJ3FjP1KdTzbz54USu",
  "key1": "4bLWkBBVuyymdD7RXxs9xCqRjyNDDC3m8oVuQKumGYLxehmb5eooVpJGxSKLszEUtYZZob4xeFcAYFwLkN2myZEn",
  "key2": "5QDEmDjCnRKh4Y5TNedpq3x9kaWkbqE1ksXpyEHNfccTnJiJYpQXrx2zM62pMLZr1Bs4VRWr9T9qR4CHm34EoE4n",
  "key3": "3fHrxrv3Kg1MUmd8uKnPnWH1AuczYjHAqq9Y1jFHtXsazT1u8hX3NQEU1PtG6856tpjYbgnM42kQNbHrNpnr3G8j",
  "key4": "2Q8gJ4X8wEACea2NQVcxjRAuaTxbhMjK1cHvZRNj6Mqo3apqKyhEv1VGoUbnFLaEPztw65ubPvqbiwCQi6CjhTb2",
  "key5": "4qxdmCr3LCnn7LRN8DvegbN6KjonPPaf3byTwD4iuffQcVtk5KpJWF6jHYdRExsT3Ho7vWUVJr2AWgn21sHa6mR5",
  "key6": "5GZzz37QKNd5R6gdPy8XqxLcm4RZQ4SWf7uiKSJNDJZ1PxfPkZwdW1dNxhCXtKL2e2RUpatyp52T5S3AxSqyZrEa",
  "key7": "3PEAUacTPizMNjfNnMLFHr12JYawHkTpkrgY49vH7qZ7fzkY7swfYJjwKUnRw7UHahAbNLwyFQ2PNRAchen4qs67",
  "key8": "4mZHtJKxgeoBTRsJaaDFxANtpz8mx4pUrY7xJqtY8mXw8grHS2wiFVBz1psFBDY6Jhcd6ABCP1TejgygPYd4XRU3",
  "key9": "2XZ2XL5jkM7Azg3kUZZGG6RyDBpeKAagbPwQa8QuT42rNWmDWzcdekCuxVhThPKEyJgdX8A7kqmXiHVTo6hZa5k3",
  "key10": "ukMJfKrvv56AU24vmpRSYMkUvgCMLmNN3kHKtY1xfXeiu8fAFmrgGEgtBZXK1bH5qzYrX2pHR7erpgDU31mK6K7",
  "key11": "5o8CWEpSmxhsCgQ7S9oxX4LNtuWuRz42MtJXprXXPv9CHLtrmqK79T48qey5cEN9WCSqFKevu5rgrjFQeE7WhSc7",
  "key12": "2ECnntuvsdELvRskf17ey8siA3Xfj2Goy5p6peBUhhj4f3Ua6SEinQq6Dj6u3JJL5HZFSkZuW5K5DLaPVuEvvsb3",
  "key13": "4z1bWHFCBxkWBHxAfbUbwXgkyyWooDuaEr1h4NhFR8PG4Z3JUxMTjQj31YCwS2AwgDXgNSM9thrhTud5HwYs6yBg",
  "key14": "44e33rVxVUhsdBCZ5ymSnYLyswtEgicBEwv3VPvRvp6P1cuT4t9SiCHK6ooBozKAHCr48e1LF6ZzuSWwhC2YWxtd",
  "key15": "3Q2zccL6xZrUNm4qjfhcEogrsR2B1p2bChSSZEHUfzaWtfunWM6SKpVA9nUwWLvmBrK4QdRRj6f3MbHxUtMCJQAb",
  "key16": "4ycLxifs4jS6HsysLiALAyYmWQi8EkfCU3kQQ3YgUR64CC5Mvex3pe6gfiadHENSDhMwG4PW3MRgtbxvc6c3cjCr",
  "key17": "36kS19zadGMxcfy1e2yu1NcwFmNioYT5A2pb4Uc5B2pAcupstH92PRLdVHAZBM5p6n57XgBrqtvi2JHpUDNWcJ64",
  "key18": "56SDua3YPDYXLogJooWudhcoppc9ZwBKRBESKpJKBmBaguBCUwwTiDkXjwR6Q6Pk5QUYXHkrgDFC5oKkVmcJ7cJK",
  "key19": "61EByy7b3hqdAj97dKT5P3rFtPYmHk8fXvXVEW1NWXGa9rWctANdCvuxitCRZokKgnhT5DSVMw4b17ADJp2YRGMX",
  "key20": "5skwDUs6sJgmsUJpCpCTVibe9ehp4AwNWkNkvswwPD6TaFxjgmqMahtQ723nPCCE1NZbrMm3wEtsmd956NkU2YdG",
  "key21": "4kB4gRTP8CFzf3M4Dx5KbinogisyYeUEeL3fMAU6V9kDhgfnn5mv9VUgX1XfWA5RLr7v8nXuedCNDDCa7QNeyhDn",
  "key22": "5M8e2bAqkjF73BTyCJQW3yfmraB1eegNQTho7AYDqBsNd4Q3XAkgJC9Rmjawiyd1ZfoU4yi59oEC1fKJQMhU6DwL",
  "key23": "2TAX26CRjWH6uRAXovr5nBNPr438QVZbiQg9wvQ4JE9Vfz9bnUPge7HHchTr8BRMwn1DDiL7Hg8fwoTaJPZnYo6c",
  "key24": "2Xewrd9j72FF5ypfn5j39JtK5RMuWFQTp46uStNbP2yBTxmCnVEYkoV1vQAqYa7YsrzDAaW8irjyWtsnEkUqMoE8",
  "key25": "2ZUSzGRZoz1PBsXuvMSmRuEUTjQaW5aenMqCGURo2meWz8Jsnh1GvGsrrFZFLzVjfABVuQ785Vd5rd3xURJx3Zr8",
  "key26": "FPpZbgGFkBF98eBicbpt1U8RYk7hh4DejukwxrJKyYg6piR4A7bijT9dbpp4nQqoe3U6tCVPBSp4iu49rEthKFx",
  "key27": "QHmhemSots2LBitFAC1GAuUhohz65ciE6YfCGNT7Fq9tJxw9RRFwtfi7oPUS7oCipw7JfNKsyFfrfzcNdtYHBjp",
  "key28": "LEpsHhR7tcPnUwtGDs6NT5cgMW8NmLTQDsDAhYX67cvN9S3AtaxF9JpXYevFTjN7N26MydgdSjtAK1RWBwwfEVJ",
  "key29": "25ywTxQf3LDtnkTufnnkx4LjSgCEZciynF7aorqtLeZ8nUJYErqaVJWExebu8W1M682UeZacxPuz4ZJphXXFmHkF",
  "key30": "3FHMGiybTTVQhD5u2ZCa3MJdftTMqsfyW2VWqGvqRUTK3cmx9ULmvFh9PhDb8RAe3thVdA9awxLFietj9a3uvqKa",
  "key31": "4dUxxrE34bUvRU3r3pknUDh5vjQhUTeWRUnMYd45TBYmAsa8qv1NdEVVzBLUZWavmZhnvj63oj6xDA7D1Hvbc9HP",
  "key32": "bohnHFWwxGURA7WHyDhcBf1xD7h4Zgpa8SgRhDbNAu9Nmdfvuf8SLkV7XPvymRF5J2ZgUVWuasEFCjSWVEh4uqh",
  "key33": "4pyg9dg3AHqNPxENoUfBocXvi2vyeThyNcsizKN2jSwkB5fYYGmRhxaxM8My6NhCNX8BDaAQ6MeQ2LjYXVCq9Euk",
  "key34": "3489vXZ7DaY9s2PrctvjGjwgxfgdwVoi7KEG3CMrDzK1Xz6GfaNBZ5r59zrzfV4oNTBE4wPYhheowxQfmMEvWYZA",
  "key35": "4uH49Fue7jid2utTAvDo7FNzHguxp3ytE6oq5y1v9ddizfaNd1JS7gWHiShTK42zTxVDqZCZw29hCBdie2XafQqF",
  "key36": "42sCfzHJTpsBU1iMdWS9AGaerJwrJUFjBLqkAM7kHSH7d5nCXdR6pFZc9VLZjS5F2E2CBxDsNqr6EBUFWpScNNBe",
  "key37": "5oASbzxZbMX3aHVYM2MMzwDHbJZviHeHtQGyUXv75QfpZbwx8n2sVHXee5D9BS3Uyi5oyTqUtXKmPTN5UrpXuFyc",
  "key38": "3Y6KbdV63ZRPJQPTmX1xxv9bQdvJd5FnCoFtNRTk2CD2RPnGFW6JV3uS3msN96qWtfSEwf5vMzPRkdXhyPcLXK9m",
  "key39": "4iJ8DCTrgHdSTfjLV5Mn9A4pVGkrQUCd9AK9mdb5hyKs1SaqqnBgDvXTJ8VF89k1feuF5j7UsP2Pfa7ME8myh7gD",
  "key40": "27CaYc8gkZpFYVyXfPtFn31NgkJe4Y2hLMtskBWxMUCYrspAsZjU88H26E1ng9wtURhNEiN2m4tBhziN8Ju9TgLu",
  "key41": "5Y13WizM98VFXwCj5t4cV9NLQpt8Hy6g5UyJAK1H8zwbP7Cn26s7t2ciJHt1fCDjLwgqmRXtzHU3e1zjyCgzGLpz",
  "key42": "5QeYpV62JaoCuyfSvciGskNzZu1g53udD5o5MCBXAnENDMf46nXYHmy8oprpXdUEdTNk8rWDPHz8tWW1ECewU8xs",
  "key43": "3Fk6hJUzabyixPabJnZswZw1VgC2dT8SC412MNGiEtP3vgCKYy2z3E1MmYFu4x88DrZyXLgvBSgXxWbyQLnyLQDu",
  "key44": "3q7px6wCmWMT6bjzt4Lu7KdwZB1157fUCpBwmoWwM9UgRPCKqQXZ9BBWk7YCDWZ8GnyV3tCzkTdNAiVH1kKjCb2z"
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
