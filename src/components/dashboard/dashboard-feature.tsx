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
    "636SguV5amBmeV6vBb37K4rzadXvHbmSvi6xPYujfxv6byvkZLuhfgnK4sdmjJjZXguvumLksHmGSqe3is4JyDQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buoj4dgRBfHyrhcDRtqhMC31ysExioRAbZYWT6it2dDSsrUtUBxk3DKqvtEZ1eCnHN4j6ZyisUYxPLLGUSYRYXG",
  "key1": "2P6NEiFQsQxZZEnAgrDZ1AUB9HLBFKVLFgDHDrk6Ren9wKTq3r42Y5FwsRbX3mKTDGFsk2Tt3LNNnyTychRkq4uq",
  "key2": "3TWMS5ZZmxHUqrrywqhZnbvci3KreszjShogenShs8AoEdoTQP5eXWbjZJE3h9XUdnKPDDiqR7jEmNewEL5L6w38",
  "key3": "2dyJLi9mpGxW5e5o5KbH5dB8zNkMri4dEe7VyK1jsWEoG4wbnHZTDV4krtEYsqTpBr5WkgJcgSF9eZQ4R87HQhMn",
  "key4": "2GqVWcgLe9gcqTLMMwAMNcS4XvnW8973cubfXXQkhac9j4ZTyLQAShLyGGCJ1Hd5z7jAQjaJuuhizbY5f9XQgi4g",
  "key5": "59ggbavgvsPrFXuJnptbdYSjAq8J6g84UyW2fvi1725cFDaYmjks3upHFZjAW9SRq7GVKwQCysFha3kUSPnTWK1e",
  "key6": "2yK8sk7S4QLNSAeXFx9PxFDB7RGe484qXp221c75czbFmfcNeA1gcrJ5f6r3qkd7YFKujKpchL8gzPnV1JPGqRuQ",
  "key7": "4BTxdG58ik5pt2sDu6rVks1GWB583parAWE3PmDs5bkGagMdJW2wDp1gRv7pcGsKhKpsTxJJjoD3iGBTECUU5WAj",
  "key8": "TNHrbKP2r3kW2yN8jseZVHAh2d8EaKqQ7VHGcPa4C2gFS2CnNknfijZ98MEvjACsPT8yypiL4DoJRkg4g9R8rGe",
  "key9": "3qUhZaMD6qGC89GkvULPxAjJLYbLgpiMYsare4hrcFNgR9wA9DLF7Cx4qj8U8GHT9XLoAQEYtA8yCJtdAc7vjYoE",
  "key10": "kXe4Hj9FPrz3LJZe5DmwsudKTi6UFZ7P5WRatRCuHJvibVQHuobtnXB5uqspWoogHyLyjKD4CbW4S74FwrjkW9J",
  "key11": "q2jrRMWVEiCoHqqShp8o9MvUDgQBi8TEB6K7cnT8ZioQwtAYxwCDMoFQ5usqhKtnFCSm2icqDkUe3oWxicRXTt1",
  "key12": "8msLsmv5xu4XuUs1b4uAaPjav1hbnhKSqiuxqR7cZQUX7gQpweDZxYob7JW6hPgJZeiuRj8h8erVxi7ajuoGPVY",
  "key13": "WtCjN7nVukTZwZBoS6BvCbgqK6qAjATzJNhMG5FekcqWmzWTDu455ZNpgThRLnNdpaVQLfqtjSWUWvWtVjzaARU",
  "key14": "2zaPZvSEmNpGBcFk66LM2znb2eZEtSyZh1KaAGqWFyFNCrawu4eScgzF464UeTHXD3S49prh1uaC94HZxL2cAV1U",
  "key15": "4YceaZx2Pogp5K1NXJvRbFftSUF2F2stWk81ts7PXmTysH7jgfYtbL78Hm8EpdqWdj8ACnKfoKb4EBJGQ7TFLeE",
  "key16": "37fg5yJYQXUtXTF1UwhNAnvUiNL3h3VZLUj83GdzuYfNhV8RZvaXepoPNQgckRGZ6HSTQBV3rxyv1QdfsyvA8KGj",
  "key17": "34buAqiqSfwdhDeWhRScDdaiZJXKp9HwDytrTr4WRPfgnDi52hc5nUg3HU4Zd1u2GqiNtXkTENr2k6SmdnPb5mkU",
  "key18": "5qzYXG2EDaw4cKe9tVKv2ZKjLwNo7yAf9yZmo9VE4JvssHH7SySimsvyMu4ouvvT8ooWBkwzuGko7PaneZpHrqmV",
  "key19": "2KnqqmzkL93u8SjTB9qXMnNs8MnZeTZUT4Yunc4Fi9U4J5oLHesJ2qZeUSpK1i66HhG13mVTGbUv7rNzh8PkVm99",
  "key20": "2u8mP5bLGH3SzLBTt9BjMHxW1LGcwQTQJMYPcFKmjJRpbgYg2g2dvc9ijHW1NGRUnTox7iAfckFh9yq4VusKGDGj",
  "key21": "qiajBihXrXJRvq72ZwECbARhS9VgCQb5UTibFUJ11SiTw4XVP37rG2HsWJbpguXivqak5tHKoJdotKdUYfqiA1t",
  "key22": "5k378MVED6Cqxy9tyNt4nMpXJMZ7HmEg13kbCkZPgEmwdwwsB9HZdUXscuS9nCG4RAw8AtKgNhNL7mCDgtG1cubD",
  "key23": "21svEqw685L45L2TeRbMwJQC9VX5RNyY95uKQSPLqFwtmAiZiPKM6ZgUEfD8HZHRTjsX2zEcVKtAKGQznNQXX3a7",
  "key24": "5Xm8BUpFiWtkmDQejKWNYW5a1L1PPMhSGFTADHZJJo3NRCU45FqLPbYxS5im4ABpNDPAyRjKrcBxJUhcYUPWUgTX",
  "key25": "3FayehJJddQZai85KqbgoDYRGn2tjJdKC61ycwCRKdLx2isurRrjhpMAHWjXZQbouLDgsvTQbuSDcFuBX5YommF",
  "key26": "ntYQ6foc5rnA7LoYnFzHfPmUZtj2ThMfS5tLkVQisHficVeQwHEKeMcijE93aSRre6hDBbnpJb1zUWPriDGY5Ad",
  "key27": "d6LSuXMhwTjN6yY5EKp2VFgtN8yHcyu3Pvt2cuwkaBHcp9bd7jnBoNBgfNNHWmimSDLphnkYBrtn3WDZtR9iaaK",
  "key28": "5FkGMRixQT5XGKcaq9YGk2DA4SeBwW2UXhwRg8Wa8TGmz8XgCRuMv9kzsD1yC2wocp7zAVmDvZNgs95t7WcX6Qyt",
  "key29": "4MsQT458U9Qfb3MLqu1545xeo71H3tNyvBrhHQgD5Vi7V4YbDoBz1qwjxW47dV4s6BrZRDqKrBEup98VU2v3synT",
  "key30": "5SRosTEJKbBnNStgXGsCNsyB9Z18gAKtACFXw9S78C8AkKo72KjjvAqo9mVncjy4HZ9KLaCicsdKqboCob47FYmP",
  "key31": "4YfdUswtS1E99UXY4fcFgPEkmfojLs8TnEuLTYycdFC4xgXX79hQ3tPGtXcNSmp1BDCmmxkkNrzuMREZUtcPqEcf",
  "key32": "nv4a2n8TnyUyWPs2H7hWiM6zaMg7amryA7LS3BVkaxf5Vpoki8VG2JpEeuoqJscLARNxmdfSWprQGBikuJQtjxn",
  "key33": "3NyaPZrxzVS5mAQNCSMtNtp5ayAbEn46JnRGhT2M3KKaAriHG91innSmosVwjeFFJLYDFe9i7qJzuphct2UbRChC",
  "key34": "4AQp18iSUcEDyCv9gWtzf1wzEXbuTJLS8EbNjH5m8Beytt55HH9y9Cg48NsuPhU4yZZZwfoGzuDcKkDpe5g26Pkb",
  "key35": "jW4gcfYKJD7fkw97pouAXcBYctULWA1hAFnmsEnkGnADX9gXHTHpxVNFyc9foEoXMP2n5hUhVWaTJ4WYTNuXcWZ",
  "key36": "36rGZm4E3XLR2Prw7yXi5fmVUsFDoqGkrxx95KcV7vuhA32byAQvL2eTiCLj22Uby6NVRLAfSjzRt8dD4tr1agj2",
  "key37": "3NiKoPTRiD4XkSqsqAjToEwCg3h2gy6CGXxQQ69Fm13T22jVoGKDizh3S1zg3bsvVevVASsAvfsjrYaeYa3E8UDF",
  "key38": "2GpFGL6wnYu8TY3HWPg6gHsPbcmKDtUY3nH3mSrSrf4b2hRYWVBTwoSCHLQvMxt4V81xM3kZsmvistGnrpnbttCj",
  "key39": "DGPWkhZS8q6AQhyBoatPjfw1EReY2ceCqBphKfCJQzjxwMvTnffYdgFbnxpKFd6QSW2KkbPJVnRvFgghWTk23yn",
  "key40": "32nXqeDszH8NUNj7aNrRcKLb7zb5vfz2thtzwWDjrtCdc947EcJ9fxPQBzqwF6EFm7LTZDopsFXn19n3RfsB9gkt",
  "key41": "2UUUcFGRu9ciaThEMEWX7nxpc5U5NyiLuVwRmccHzwvCRbK4bwhXqAEDBPf55j2ifNujJ2HXFdnskLB3q54YZhyG",
  "key42": "Ytco7muKbJ5VNrmkcH7z39Wu1Bda8bGuzfL64gVSU44dq51EV2snvZBqt1W9eYMU8RjjGtiYwSaBsrFf4AiGTAK",
  "key43": "5HNTGqGMpWUjCbj3ReVXTQhjvg9xw7ifitdYhXrNgmexPxha6tDvtqzPXtwNzPGtjdMX9bqozEagQjw17BBZSJ1D",
  "key44": "3qgtph65bisVZgU5ZhSW3fzLkP15jfEjKqSLpxsGntNpJCP48hXRu2HoewEgtJJ2jWrLzna1gzteKHRxw7nmgv4h",
  "key45": "46GffGmktgYCLYV1eQ99XdNvXzSHxhg846EqqtLPJ9k8qUYB9YEd1J8CjC5ei9dcvpGmnuvDt2AYuscjc6sMB5S2",
  "key46": "M7LvrCXELDzws41auCxGT4QDFiwTcNNS8kPyH9PmvvuQ1eLrRZ8t7LhWqyFHKDkwKq9EXtZDTaD3HG32PNW3W3S"
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
