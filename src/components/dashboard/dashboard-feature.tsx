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
    "2NeLm7dNbBqiEZcm5Xzm6nsp9PpLG9CC4HmwP72SV8dDW1ntjUT6mLHh4TARFyVa1uhy7NujyG1tenng1nzNByM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mUDUkd2xz2RbWpPMaJz5WJwbk4dHRA2agDW1BUSjJyh9ZVqoCEkPQeUVTE3TskDmp3MWu8qbvZP8t15Db89aCJg",
  "key1": "3fP5tXy2Qro9JfZN7VwSBoST4qPGLYqbS1EjhzPLBX9Sko4tFKtAK1GtFZSmeMvSRv2n9aunnD4KHV67ipmmx89f",
  "key2": "BKEzLvHyHDFze64rM9p7pyK7bd8HRMeQemmT9MSW7Z6iNASKodvxuRfjCGLYTmRHjeEgpyFZ8zW4jNHC3Sxhzhj",
  "key3": "5wrgGv8LrANNuqqUsS4w4D983fPnJajg2qhmWNtCPB3eygmTGwPz1GikN6DF2CtBSGeNMiKnR87XvKNJtfkipnUU",
  "key4": "4TAfHoih3mn8RsRFmxo3Xp6y3SJcSXfCVEgry8jd2jNSscvY5EEVFEiAr551ugHcYUtjUYuWAY3JTwWN45p2rbnh",
  "key5": "3ifr4vvcn9onY3v1ApE4tEGvPKW15s3UZKooPE1yT6qcGWN7ThWKx6Q13Lr99C8QmWVP1pdFAnhmxQEvrAdHxfa2",
  "key6": "QdYrNFufPgYxzXP8pvjzeTDVVzeTQkB65UEup19pchCFnH3NviyCLTo9p7tULj96zbD545pVrtZq12xw5XbXoUW",
  "key7": "y9c5PNHrTbThoZqaVnqfvFLDn2tgntyQfdNi54UJU8UUjSgAXVia5UEjdD6DpEsd5MsXdFpxULvDT6snVkWXwsX",
  "key8": "3LGAzUJdzysaTqz8PTZ3YeUocJuBH8sfBGfeP5x9CXig7U3y9W6xaLTCFSn4UNdusL8mipHeAx6Z2sY1duP7qgJ2",
  "key9": "3E5XNSsX6Yk3uKix1AzCm7UsRJcscuHn62vaS1S9kBpz4nGjXYCTJaNCsxPGqHcDNFWbqFgSZnzJs1RvHzGBNniV",
  "key10": "3sFVFS7JQuc9zEmYEBnwwCbr1EUVeUS4ccw3DHkC4FHezd26nqTdwNZ7Sk9oHZxMJGLuJrtmpJVPhAr6xKFi57z6",
  "key11": "pc6ZNPhBq3dodkG6BbvKzdMNScqke4pwSi1ZepEv9KKkzAEYqJQicdx9GVvubYUxmoYSdTiWARn5DV8AETf4Q3T",
  "key12": "5ATvYe1pFv3SxughhWQtmVK4sLpqAiAAhUzxrJLtZBNGrBz3q1ofZf27vnAyjmtd42DgqSX9VzJHpsLoWn4FoKbT",
  "key13": "5igb63WbyVW6W7euXQy1Qo3Zr8DRrjwfHZuYM1AftHQDd2rUZ6AEFHcpXr7TZdkyVZX5957nn4QfCTRJE9Bvycc7",
  "key14": "2juahMfhPDjT3cH3DvAgAT2oiFzCRVnmJzzJisHsL1rhZJkGVsvvmRXGCQXxT7Ryc3jYDv8mchoosnzGXs6FvJD6",
  "key15": "xoYvEN99NgxuaauNem9tuAh82yT45vv2EFAfxmCnjE4tPqe5oPDzStqsM6FWXPCi5aGWxWsnw815emDF4WkMLwm",
  "key16": "3mcXuTFaV2ey8agkZaFKsikVAQz35JnmGtzn2SX8nteUDco29MiMALPLd4sV27thDKrLBGJNJC7jqvmE6KhH72eY",
  "key17": "2Dty7N99qcfQB8dVDc2AoP2xmyFMQiAJ4hi8yGNFnajdq2bRCzu4cjtADmaqyrz4roMxqVPPBsbPC72VJLG4HCJv",
  "key18": "27MzUsRomjHyLwRvtezzrWSsfzh2yAc9FSoVv9Ptcmih7fLdkBczmo5ENu7yYTsBJ1SwtLi2ikcisWdc7Hk7QHoZ",
  "key19": "egbm8RaCFSz9HiZgYN6LDAyNVZ2ZKZJRP1DWfZBci5TcSP984UiGQfvcpFGXYuGjiPrn3boPbn6R6jqPkqobciV",
  "key20": "32TChPvYDucRc7MxLMmvdh2xJbW56GLw2RAHkWAzTLhMJfBiUnUXMazzs99Jxcdk3FkZkH2bqMKZHigYfouRhdCt",
  "key21": "4DKyQSDf5rracvHuzSNN5MP6WwYaWhBbrmGLwr5qsNtmWAwYJQXDbcQ3gSsiuuCFLv95dTa7s2wSas6B3vRN2it1",
  "key22": "3VAmTRMN9fHDCTTJdeLJf2SbRhB8B1GCbP9YwfeEc6ihrJ2gTJD6Vuz6o5Zr3NawKEWpdVueb69gvG4v1zHYqCLT",
  "key23": "57F2gtRn9cW2SjZ8ZqNxUYys3kS2qHdiaY5EB9rqTCo4HJof7vRsDo2XxNr3xZBhfKU89KK7Ztf8L5qLUYVJH2GV",
  "key24": "467yVuqSeuBRfRoCpeCHrfjkVGS6ed54sYGHT8dms9qeibRLx56kqxRzeFj82xMB6WJc4S9XRxMHhX4sEiZ8WDUQ",
  "key25": "26FAQBTHCjwGZySnyyXhYnT8cQkMxrmahuYKuBmnUowMEEY4Kxn7KuDv2LzP7BhcDNb41AtXNQUYEMzJw8jdJTdW",
  "key26": "2VYpmnYKGm4Stdyf8sWm63srmdKUKXSLENMCrPsWeJLBemMKx2pK6y7CLuKsC5De6mNzV2ZMN9GmgwQXHaqPyKz9",
  "key27": "5EPamPiqLuEKcViMpf18TEC42jdWR4zrBrVSMD7FjdV8SivESyrAKBbTrv8S8TQBqNTAvcgM5yKUkbzHEat3Piap",
  "key28": "2Ukzh7xDJvA8ytBnTLPoNzsw4mv6GqVB9Y1douHhQc4WafwXSLCA386xrCvproF2o1PwXZpomMvRRgKUhJJp9jvB",
  "key29": "3f8GJ6sBaXWwymW12tGTv1EbYKaxf8Qp9hZ6pFPXguwkhckdiQsFKRxDVh9Pc7AmJZpaj9EbjsB1w1Kh93aPHqXW",
  "key30": "Px3TWYq3G1vzZ32LWTMsUYiRhv5a3AhQDLPMHp5cZPbCCRxnDBhVQBuB3zvsL4BobquLvaL1Sm51BBx4N6ACi5y",
  "key31": "2722jq6wetaYa3mcqumizVkTDG5SoFLXuMYkWAirEvJEa8h97pjMsN6HydEmojwhTRVEX6n46J2dRcZg4T2LqB6q",
  "key32": "5GCN2SwoxbWSU41z16kbzgEBkFqAUjJmaKqchVTicddFHT31ysLTeYL14mxzUk8JLfJBvHofMLbxoVMs4kBMy11T",
  "key33": "5TBq3uAzMusrizNQ9JztqN6hHYa2yDyaWDSmigKGKjouDB86How3NFYdwiBXx5esWTwuYRaLCamXmoxuHn9Hhdk2",
  "key34": "2TRBQF6TLJB5dMb6X2MBdHewWzvJFzmSspkBUBWy2wXhYYqC2dbHtR6JrfaL8XMCqruXKka7TJj2bCmPhvM1hC5z",
  "key35": "62aD42VBp1Z9QQuh1rhSQHiMQVY39sMw1SUERBwQbSrtEeuoBcGHKLYpa6qQfuZ9qQ1ryG7t4EvzGx6yH8rVf3Gq",
  "key36": "3CNbzuX96Qt8dLDDv9kVXGnXCr7q1u6sQsuCpv8J4QMopzXUYQ72MeDuAiZ2U2PWGxxuzCkpGzkQbzFdvzs2is9r",
  "key37": "28Z3JLMxRbW68Tmkbzy9zTeiV4pE6m3A7L48TG2PpRrVMumEzzsuKNYYvHXqvnxmVutGfQRQyu5RKUVRPfBrUrXy",
  "key38": "4rvjYG9dHndvnANreDfkwL81GeMEiP86KF1iPmpZDzCV29BKaJWSaYDK1pgmq7UDmVexmoksq1pibZhpQSjrfh7p",
  "key39": "3MFUdpmqUt6daPo7eua2NHiLPpyz9j55ixWUip8Gry9Cg9PHoYxBy69CiD544HuvVnGroH5LpLDTaEaABVfiD1xk",
  "key40": "2qPXihuq4Zb1STKddX9xjjQp6BNzC3tQ6465uZuUj7wKxNs4G82WLSHntUxYY84wB4Dgy3FwFRHXHvGHAH6gwpH7",
  "key41": "4gRg9UULUotZxQQwF33tu5JKxJtVktWbCuSa9z1FK1fdYeqiFmKgB6GC8dnSAVzv3Mb5SazpA6Vj31DW8aeFVhhL",
  "key42": "gyudmqCBTfVvsz8Cn8rYoKwxmHAAdK6E9cYVhZns7GfCdvCWcKMHzp3rY89noVv5fsiDdYpett6VSkJqpRq5too",
  "key43": "fr8ChtykXfVE5AxcyTQWGE6UnAt6L2AraUZDV4kV3C5rNgk9gVtXfw6HeStdJdC2XApFz2h6LJ2UZmEKJgrdF75",
  "key44": "DDDhi9CqPAMZzQUNuCAtaq1sRssW9GKpm55y9z89ia6pDg1covq3JbbVoo3xTJukSjwVHe4yfKJpNfcGwVNHdRH"
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
