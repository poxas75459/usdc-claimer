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
    "1RTkFUgcdXsBufi2WRH1FkjB6hqg7m4vSDMKdy2JbD86userbAK3ZkLmB4o77HARxX3gMdyPjsqZmsPv1huTkNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tB6K16EGG9jvSBCUAvNfvRF3AcZDniL1Wbf6nBDESmZCrSR3N5pv365XSHcwzd8UbAgxdV5Uet8k6beHaq8e7WU",
  "key1": "568T2zuhJsRBZEf3TYt2LbQPtkDtG6Pyub3KSEpr1syRKLaveHt1S2o5cZwuNiSH5oZJEySTJvZHGih7v72xAfdF",
  "key2": "2HhNQGxgcVb82Vn9GMAV1vkxKspDX61kGAPzFV8tLku5Q9d3iHumgyvLbHPHhfWUjW5VHzidbv4GAmnwRpLqj4FU",
  "key3": "2ar9B2BLYYo6JRiKQGWeLGpGC5ngKhPnEYhJqZjjqSmJYsDbquirijhKJpUqyUcqGkEp7LYFKwvmVo9fDxvorK4s",
  "key4": "4pxEkqasLsTFnqQD2Po16qi4xNQognfD6eqyv5vxHzm3qhVC6S4vFhRkwYz5bw7Av1n5bPrMEGMGxSxokiT9DkBa",
  "key5": "4oRsSn5hUaXpmMDN5x6ZTPGjuQkyGnMosqYKDvUyuL9bvXVnhNUBCwejAdY5CsQv4pgLee99jekkEgEJoHhhBZLG",
  "key6": "3No54eLjWBfnVk3wKxmEyNefyBbyXgABJyR8Z8yxNBiTJ5XoySDqf9SfX6nwNmfrN5TwdRzoK7Mz1huknENiHGc3",
  "key7": "dHoceMa2K7F3jQwY9ZPEk45syXNRp4AY2NaSMrpfckaNNG5GUZ8i4G4DA8qVFsMzCAtJQWPdeVDcqrW8dfTFpyJ",
  "key8": "VWbpWPVHeWRRUw4AekXd9woMfgdf6B2C8eKRkxdjCBVajwUqLn3sd9APzurNRTbv4U7unDKkZb7LVPTnmho7dEd",
  "key9": "3v3h8NudttgmHXu1Y2HTH6sbZVGPZeTQ1SBwR2SyxqqFpBetdt5MagGA3MHzEnTPJZZm5vJnepTUBnSWHthigSvG",
  "key10": "5XkngfeWoAkWQmfBJ8axefv9MqRaqgzfK1pTXavCxogg4xaEy3S1MMF3NxXK6yk7LJXQzLiTdsRZoWk2suCysoY5",
  "key11": "hL7sMA7oV52HnZ2yoEXqwXqfu6YLmRKy6HCiZa8dX9ms59XRg1QSuztYpAgvjrDPKUv3YTkTuKeg2tayfRP4jFR",
  "key12": "2xmJ49KLno19RJkr9aJKAiU6vgaGdcp9wmYpgry7FRncNYg35PdMr1LWPq624jQvXgMAczdxUrRQgaTns9C5p7Vt",
  "key13": "NTaQPzWuSWARtPULSzyoZiAgbJYNsEzZS6qeQZ7tReYGXXRMB23U2gsyy75rPXXRKKSn4BMDNkTMrMK6EpvT5E2",
  "key14": "3BqUvq77AZWkKgu4GTyr8mwXXKfeH7GmhTG3Cx3daJAgYoTUSacwESGrHQiFQkuBnJJwF48aAG9t4mwQY6AJPtin",
  "key15": "5HPtYKrZRLiHWGZQMAXcnxdjFbwjDJjX6mCfvTZoB5Vvmg9QWQKAUqyzbhJ35LxZvBDHa6zQ1T3AYwpscEZzWVnQ",
  "key16": "4V2yevkFV8uG6Gj8xJeLkweicgUy5cKJC1V7cMjc8Sykv22CB8BaWoyRWBDEiLdtyP5y9E9ZnxjxEDX5mFZ7YwyG",
  "key17": "5FFebhWtTfpWh19xvEdAifKGrqQsSQyuKy7Ly9PHHLGkbhkVRjQnxmHLF2hLctCuPhFpPRFMQ3jPsFo6hjhDQuGH",
  "key18": "6jvLRbmrVRkTvJwDMQaX6gvnxKjext37vwHqinTcWNLqykqdVMfFV28xjociAesmU2tBGa92tAnSZ6yuyXCRou4",
  "key19": "3K11LWFHvB4EahTdFYipTRZ7v4reMH2SQmVhsDcn4mSB2rxg5EPBvYyY9ykETKNkMffAkUMck4yDBKvQxrp9AdCv",
  "key20": "7M876dRZxMyg4jK2xRab77XGSyKzMvnvDyPq4gEaVA47FjY38BXUmrguTBeqaJFiceNkzwJQPDe59yJ5nXWVZe5",
  "key21": "3WzokPHpXi3TnLM9L1SZNUn67kQ683GwZQhkdprX46UoFaV5jZA2dgA5jHSeA9ZkPxgGaFvo7H62ZhPwJwLUcbQt",
  "key22": "5uLnNaSW6Xd9s1z5n1z2mSfBJrPf9JQdjB97oKYtBMVhDQXNBBWAwedXnbbrCW2eXoMmKeQ6HJebG5z5XXUEk8ww",
  "key23": "2sQjiU7xfb1erusv64wHjDHZyibm6BZ37XkrmguyTPnFE9HSwNjcxRnigP5UNm5AzRAaciDWg8Kzc4Etygs8y2Uz",
  "key24": "p14QZaYdmR6fLhQT29tGHNrnAvPzRq66xHshSdNdy1B7LxpLTZfd7vcji7MUR6qGnZ1K31n3ZHtKmWqx96bfAzW",
  "key25": "3UedBzPWbtHozNqUbMvSL5cNRho2gHg9ffwP8Us9sonLx7aKNhD1u8ahagvAV81XPccQ9CDS6JFZqa1i9CaQXTH7",
  "key26": "2BxKRghBtWu7rLmk2WVsN57JTh8Lp3fgtrxgDJriB1KCY6yw9kGpcVPpkogSSux7vpYLDXR2tPpyTpgeGQtYCyey",
  "key27": "3TDPfdgGczWUhHB77bya2Px8mCrPraj1So2DBuPgQFmXymAGBvxps6QDLUDD9uAmLQspNDBzJr9S3t5aD3rhkRK9",
  "key28": "5tfZBSPS8XDyvsUqZTHBGgg4jbxAbk6khup5ydd9ZgsXipagrTAK2efTuHGUyoA9ytFL4dUDGygkDrYAfX2zWc2Q",
  "key29": "64E7uEWxYCnuKPKbHB74jQeV5PioHZgtEk4feDqxCBquK4GUEdjABbL6q6NMeunXEXytjrPCzr1rqTvsLuz4FXux",
  "key30": "3VCjaeLvAqsAQ5h2RysTNFSYXB7pRbzEctQc3nxg1P1jeP4AasbuP4e3wn6hS5YQm7Vx6XP4h7ZRht8fDuDHvPc5",
  "key31": "5LMQTB5ZEtAQxLmhpykbfcbkJEsUge7nfpiXopWdRdQod3qVnjFzdgsxiSCRntU516xsx4hpRC4ZKpD6YwfTwyDZ",
  "key32": "51sZTmYBUqvB3tQVAArLVqfx2oodmrafBd1tH4g1AZ9nnvF39bnP7qHXto8XWGk9H5h5V9QvQ6wBSeMnDxG4otjH",
  "key33": "xmdeU28PnBs417B9ASHG4f9VWKwT7MoYoycZLaddhVfsFm4zPBQYqSghsh5gNzWf7JGJj4Gnrn8p3TdxHG21RoX",
  "key34": "3UpvUTxgiK6At8H1FP261XuBFeAjX1NU5rhh99GipNkwZdo3tDSkyxg8c2m5nBXpB5atgP2MYkEWwS1ykxT144E8",
  "key35": "5evkGig7Ssg8dHJDnS32KCP3oW3A8d1znnDXanN3V3cEapHivE12whHidRx96g5c6NESpgsaKgms8exG9DKCfFBD",
  "key36": "5iuVHzJmHutMdwDfnS5zLHA33jyprtenNyCWyaBr7MdmGc58oUJ6mLeuhCrXudjmm515wiEUSznF6uD6hgULzRY7",
  "key37": "4QWR6uzYJr2HrhUmE4cNnqq1UYYFaofjXFsCx23NDSVq6Yk6Ku496uA119RvQe2dc54nwzq48U9s8EgvvQDyjw48",
  "key38": "hPy3TxrrP2ecNYDnJCsuoXAGssj6Umx6VZi21dprrCbmUZDdaKNavHsz3usDBacGZKmQ1aX6SCeHuykNg1vsCju",
  "key39": "3emUFRdu95gr7wHuWernumk8PidiWR9vd2DTsJi4Dvf7QqbNUBm2vqcMFBaDtRRpbj1ZYMatCiauv3aYFKhCTaex",
  "key40": "2AHu6uuNzBQWCDS1opddu2GhTb5qSVmMwimcwkkzJii3WmBXFX11J9ftdrb9YXPBGLhphZu12FnUxqwtfuMmyeZH",
  "key41": "2ahQD2ZXzduafwMn1Qq2caJWT4AUqaycpdaLq5JbqeCa66oP3QCyAJdASe1L7zDzCDTzKENfLbAjVrpVdTBTcGnA",
  "key42": "4oa4BcixPwrEeoWXa6XUpQ64ZEoBBRKym6AQYTfaRYVYJQAD66UHRJPNfVgPqQrBMYV4AoHGysFxskbnWjct3Vyw",
  "key43": "4U1Azb91vShc5njUZS1uz4NnUqGMfBZuR3LQCdCZNyCc4VrqvATrrPVbWHouxTC9yxjMR3hx7BGKf87giWb5sxEQ"
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
