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
    "2ecGM1uK38tF7Kmz9TZR8t4Z15FQ2WCA89mNxMhdFAorYcA7VkgQjVaKprkHRRmrtsBxhcC4hSorvNvy35Hjanzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihREYFHyCHq6TvaH4jcSWHrFVt3Qyp31M8HSxxNjcqbPGDqhAfBnPafXU2PGDsZQTH8LHh95iZESi3kZ2sppjBK",
  "key1": "4vwS5ZSxuae9ZkjQ5tT2gP2vPyrfBZ3LRFjY5xNfnWdrcan4QPUw5RJu5VLNP65oBACtTuFyQKdxFHxiLXqHkgH6",
  "key2": "YWyXKE8zQn6oQ1UD4rQhR8JG2hMNomBUxKX1LZ97CdNYkcGHGJ3htLAgw3Mqn9WHAEkz7obEYMkYcVuSMNkmgd2",
  "key3": "55joa2zrufxSGdKPNz5vQ123WsM364L4qE5CDE2keUeQbWmnvQSGjbFyWyh8ec5Hii2Kng5KHgmHVz273UrLYxov",
  "key4": "5TpB2S1T3wCJpfSjRrKagWw7FRDoCb6XDbdvrQsuDVKQYGm9b2AKFHpzJVnEZmfxYpdjVYMz7L22XKJHAnZksz9B",
  "key5": "2pU9QsHgQfhr6kpbAt6PQJJiSG4nZvjFRHStt7LrdWT2QSUwB1aVsgftEvqGVUjGFAt5KDs51oquufHWM3vURsrQ",
  "key6": "2bCBB97GzioEVCTwLTTaisjwwf2mEhy4UUgKZTbixQTVLeoJgU4ZCKVeDvW9euvHbgw9v8iaMdsrnXTngpo7MRHD",
  "key7": "4Hip7PDDKncNV7D5r5xsScTKav4pFb6mo6YhtL8KnxvGTq6HtiotW4f4RLC9DcpmU7Cf6gbrtWXoG9GVYdruZ1jd",
  "key8": "3MeyY2E21icvci6jgBeCQjfqBUjXfHEzWeD6ZT9djKNgxfM1xJ2Frhgomn6XTj4a79jca7fNDZTcY9HYZ5Y6ffYB",
  "key9": "25bEpHnk5jLpWYCh1ThTYFUFSpiRWWLY4QRWxqofr21bpPpJKnSwroLpnPojG5zzeEmmWXF7hPMosv5VTHjmtf74",
  "key10": "s2ZixW3HjMUEuYdy2r8jpwvPtv1Pm2V4Wyj9LyUdxDV6JaTML6a48cajEEgozPwiNmUfhuhYHPJpmqQvbXaW4Rr",
  "key11": "25yLm5v9xNNnBDmVVDFhBMAaGPfdHNRJsmfxicqurYxNiRV2LfhSHQNY9SFfhZnvWVXLWLgsiduRPLDkot9naL19",
  "key12": "2PEdZgAbRDCNYk7cGLgD6WFkD3kJXdLCGmNJpUdvarmhKcVdayEZ8bV2Si2WnSYr64won6cEF42jQYCpr5zTUSKV",
  "key13": "4cTDEXXELHDyYvrYrkghVZQJRaTnesSK4y7tL4QwBRGwbknWBX4jUdotcXsFFSyLq8iKjphk31vVgP3GR55MNo2e",
  "key14": "2LqJinJSYmb1F7yyEyoBuxyNUgCYRPyrEJdHD8tWSz81pDhsypwRkUJ9Wbwf8ftcmRojLRs8s8oJ9LZFyJXieZ22",
  "key15": "5rDUGHghxyRFXkpBQ7dDrF2XgoGEufbgqibCgo2kTCisVQNuiBGcTHc98rSFGnjAZ3j2SB623smRcqxLuiZJxRef",
  "key16": "366dDTt8DCKrMYPeRH1XzurEFxMj1Vgr6UYHDvTyxKGayCYX2YRTc9TDqEc5NcYpYH6QMDJf4257mDnYmiFj2JBL",
  "key17": "4bGdCnsMSLFKRpTuLCAbQm24Udr18pMjN4ThwmKG8xvWygbJtDovQsjPJssNnuHmh9UydjtATXAmL7FycrjgSYr1",
  "key18": "2H8JkTSjMSFh8Xci78DjvVY2RSU7UU3q2j1U4t1qWPaWFmq5aFbyZzms8mKvtZU7n7gy5JbRbgNBRaK5rC13bjCF",
  "key19": "5Z8cWo69EiQt8VbubvRbRR3N2Menfoe8izW6JD55xnPnVuHkyfMwrdcYiQ8QCPjVz4JqPyzB1E8oXRKoz8QPBSeG",
  "key20": "5dKVgQf7HU7a5CCnk5RPzaQfKuFToRHJsrweHe61C9vscp3MhjyWw7PeNh4c3PJwV5qC6edmzc1tjYZr1VuBgpfX",
  "key21": "3omt1NnMD4AgMmvNj8UZsGxrybATn7Jy4kFAGoPTXxMtmHjafxXCberAoB8FW9U4Zxj1PCjU2qeD7rycQQPuUwxf",
  "key22": "3xp4qDcVTVfei65AXiJe4z4B18bxj4QRij2cFEMrxd5NmNuomKNebhsmmwgdu3oN2sxKtSuFgC8wh1ZTbKyQzSaa",
  "key23": "3u2sKArjm3DWQ2qfbse6umpkjz1BnjpT5x7DPWGzycCKebTgu79pcPdGNWKQa93zet1CBvFkEVLyfBwMjojsjKgx",
  "key24": "8AF6Airee5eHVJN6SyjTMHP4gKLBWBtd2ZAKpYFP2E4uVVCuZ5D8aaz1yqdaXSNb13E2LWQjcE77FtK7W4RyNXm",
  "key25": "5WACCFw6DNGzfDJoMfpCebz7wxh37iu1Y6TTezNtA5f9sQ64oumF72dwvpm9soG5qRpPSRtEqXgMpXDS4NhXyv3K",
  "key26": "35LrFbHYEF3adoM53eAk4iQ1zVvYTkJb4g4wbDZQmN3S34LLLBbRodcSuuvG43bnYAevrK7ipQoLntSo7ZCfnemi",
  "key27": "corLgu1GhibyhfeFspm5P9J7TkzgRzounYWr6PQZCsjF5RSF34LAxFhZE9xz2cA5vc1XbDKSEj9d8dFqc9Z8EGp",
  "key28": "3wPdyoS6igtm58QmGhbvZgFT4MBk58wyAYNRvMWsSV5dQenRLHugRPeR6KRoTsYcgyuosYXi4dUBa9bSYpAaqetC",
  "key29": "4Z4VdxUQpLZinsFsnaxadoaoHeUkLwwMiv7Eijb2vGX9c7Tehtjdg8LEiNWjoTBHkBkvBrf4RvFGDeHJioPKxjHV",
  "key30": "3cWzqPkxU5F2tFfAocasdhK5TzfDDozMFTMdGNb8YnS7nU5X8Qy1nLwfjLbhX9Gbv9xzLvsQL7Q7ddfZe5p9rBLa",
  "key31": "64Cnd1BDFWrPKW5FAA6Z5vJ1TL5bWj1kCZMSazMAZeHEj1s3KHvZ2wHFd2YNa8fPiZJjsVkQmnhaXGePY7ixXSPx",
  "key32": "Mg7oEPQnhrpdH8bSptXxrhMSpkC41y9onqKWeG8vBAztFv2LQv7ZXwf5HZSjyGhuXTm2mAqh8MdsWi29nFxwrgP",
  "key33": "5k7XwBEsGs6w89o7xmkMXFWnoGn5p8L4eEBMaGZkvBtEMFd5pdae1P81X11SiUA3osGknGyBFS9xCh5fo61b3RkN",
  "key34": "4NGS3t3iU8JNiTToum3j2zp16nyyxQX6swmTpwxu8ZVoNKE6aMSNBxLmnw7aez6TDTYuhxPzuSTKbiv5xGJYgcSB",
  "key35": "2KTtwsq27gfbDyZS3gnSD9jcRVbGTA49JWASrurK5w8VF3y6VnJBW8uX3NUqjKt5fxXTrcUjeWn9NJWwgYoPfuhG",
  "key36": "4H7k9rABvhvzRiNz3Dfsi4ZLNMJxb4fY8oSyZmSBzHVVJxhJc68NbEFkbC5tshzKBAGtk44b65ceBMbFrRJ7JFs2",
  "key37": "5vZuK2CmFnWEkrkPJy4Xfzaxnxd1gpiNsNb7CmaYXtKysTV1nn7xMXkCkLrvhg7kGB9ko7fy2C4bzG3LbQbYSL2s",
  "key38": "5832DQyJM5GtDriWpypmYL6b68Gg5UEAU4eBFF7MJ1JqvMwGVciiFup9rTtVo4fngFJaPivqqsXSifXWNXVC8zzz",
  "key39": "5NPNYaFVdXp3nCJWH2H4SiU5b92VNeHuDhcq3xoVHa66NdxveEv5pqLkhJ9BuwhzRbP8y68RVnrM1qo6Cs8i4fye",
  "key40": "xMafA7N4EcpK2JYg1YPq63TXgvJFGuZd1351s6JCJUovNxHTmJVP65A8HRwdvCnFX4eLRvAMsNg8VhXDwnAPGPV",
  "key41": "25XFXaQNo34AWowR9cB1b7pCggEMYxgUhWKTDGjH6gWqbzNwtTBb72TF1E1Db8eKTmsESHVtQcnCAkZ99ynotQwu",
  "key42": "ytQQZ3ZAizXU5KMeJTcb1PWgtD7Fc6H9Usj7TgiffgPFn7fQjERTqiL9Z3E7uA7ArCd3f4kDAWcuxXWaZTJZas5",
  "key43": "62BLFZhhpu34BwkfUhfY3VEP9sYzq39B6mgK35TwgUHPCG5Evf2d5TY3vKHaDfDEaFQ39zS5tHGPUmCbUQVhkkys",
  "key44": "5eB1SvLFeMmHocV1Ww8VZyARj9AcaJWKME4Wk2B17fzhxBZZQU5ow2ebrNgQf7rWBDMGiANG79SqpfSd7m3T6RV7",
  "key45": "3caCFpudkecV5fJD8J25hH1nc39J5LNYawZBkiDChfnNeFus9svhkuMQGu1Hi4XDQqN2Em4U6oW2i56sPRAe4P37"
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
