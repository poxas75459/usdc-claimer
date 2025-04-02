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
    "7zz8GM9XgR3b9rKrofVMB3iDNsgSKiwYE73CNzQKZYN6Vxws3VMjKRj2mLojSz5r3AEVBBLbMGPZry7V6XAwCoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33s62QHTESk8GYPeLXPkFvUmMSrAoXrybxYHzNHiUqUNB5VPDkjR6mdkZGiCQo5WbpsSXikmXkRagb8AgHAMFwPx",
  "key1": "4Aqn5EUgkEsiQvfXHcdXkf7RRkgibxANuZk51nghCkTZJxXfnNpzS4romxft3dg61DZNDv6yvJypTp1TwDcWQJVd",
  "key2": "2KbwTNd7XFpeW5gFu4ax78CisSSeuq22ZVQX4jHWQZnP1Ak9sJD4EfVm7kD7c7CaW8KPza17k5wCQt8L1Pp1Hpur",
  "key3": "66hwgpQE1hYCiafwubzVmBPwMAcaFTUeCG1hPLXfpKYNwupExLnBGmxTyeGuP6hGNtyH5A43Pa4tWU97ruP5zhsM",
  "key4": "42TXThzdgT4kd4xjoLohosredVMQyNeFdtm6ajxfaJx3vV8vNP6QNBeHrQDVjfvGZuViKt8SiCmeKm3pmCb616on",
  "key5": "ezjCE9H84kb2isBKW23GRW9PDUZesfhtdkzeR5szapZf5GNXoN4qhNFJ5C44muYA7vMd9XC5SEeGZ9NBhJ75etS",
  "key6": "2m2YZrcgzEkh5czWSiZv18vTRZc37AYsVPybVtRUHGNXbbJh7f6LwN2gMWvg13tsyfyn1zkVeQA8Cvp6Zq1Pkfu5",
  "key7": "4wAVz3j2MgogndFy4aBUxdudFMN2kPYt7Xn1Kcm9KSy5FprjheC4DNNVfdPeenQREg3dxfJQVnPRBbD94sp1BXEP",
  "key8": "3krZ6vrPrzi8KEHQedQsx1ckTfVLPoxRrnm5MjPK1CiRy9TmzT2fqdPFcLN4QJLNXQnrH98vuYML2dFfydxvUoK8",
  "key9": "2U5QqkaACEgZ99wXeETEpbKFy6LLh8R1p3m4QtvL3e7hmW5nyvJMmz1bACi3wRYiysKBCnMdGmTsD7xGTtwLHmyf",
  "key10": "4JX9DYwk3U3m46xCgWhRUk5JxtoJ39kM53VfPjGJKqKmkuuEgKbv8KZNpxdujaBoJ9LM8P38GD1abvD3ERu7uy7a",
  "key11": "4d41SqB5bqnkypf7cUCwE7Xu8NKgxRZ3CMvGfVzHNH9KtVdPMLsG4XRdbV5zu1dL2PVWh5D8DET9cTEUTNN46koW",
  "key12": "3YUu6BKKKa1xDu27Y6DNmmKC8BHHXkDmgUKEkBeCbJ1yLSaJMvBvnuSn5TwBKLBrRkjtPKpKodRn8AyMq3q6RpwC",
  "key13": "5YxmosvpQxNqbTCRcoVbE6KtAacvEupPj8UUhxEVaKXBMyaSGY8wQVi1CAiBtwZXwRbj4VngRzS4NeNfLxpZJimj",
  "key14": "4kWurdg721pkECTAyYEiSaiqKaL9LBNYRtccY3opmxvxFDrMniMsm2DesYFBLBcwb8omz8Cu1wAYFemPvG1w1jq3",
  "key15": "4QGvuu7ckaZUBVFob2MQhdetJsCczoFAcYXHXrWyNkWk46eDSzYrEPBP8vNoYbRFi8tubh5QaUN7JR5XBgEP9Y7B",
  "key16": "3FYyB8EKfDAM7zKwpE1niU47FAaCjD3nMU5WFNg7SJS5QVkPvDCDykT1LcVHHzNFhMcYGsEgeGMJA3ZZQH2wyt5",
  "key17": "52fMxLknqiRGmmmuqDYTSWrCfQ2uGvEqucZBt1GYDGFatwdGR2CJWfaDoTNF2nB97hZ8YSa61uZdp2fcpSuEbWyS",
  "key18": "qAAyRf1qrB9tWmAU8ydqB5iCJL7W5HVEdsrspjFALSms8aQTU9tABS6jKWbQXj1ys2GxnPaPWhYoA9JiDyRW5h4",
  "key19": "4ivxNtUDCBs3REKfPxPqGQuCX1jyk88zGuNDBPsmJPbHPu1ZrHL8VJXp9TC3C99L7mmPBzqoTxYcXr9kaDu3q5RL",
  "key20": "2h1AQsPE5EhzqTJAQYvNYRX131ftarvuR2xPKDVRd5HT1yiCPN9jVvoWhMSL43UevrqZ2HPseJV8sk8LV7LapVzr",
  "key21": "2ZqDRTrKejtxb5mRMoUXg59mcpMQgDYW1RrnDusXLh4jpxZHbAsyMwvQq6GviJ4U7TGRXyueRiT7haEWKNPWe9ST",
  "key22": "XP6jMXZLyLdxaVzHo1e7hokCwYKVeTUiS6zZW9kTbKmQbqEqreD8GUthRHiX4paG2mL3UDz9Y2aThPeYd7C6Egn",
  "key23": "5GDwJGV4q1vazawnW3njAZGotiz5kKPY4LRmiMTvGK8HUgiJCy7tXqWLTHWkGtmHmKSyyXUYJ1qab6tofLwurazq",
  "key24": "XfcnUd9nTsuJyPSvZ3upDKAN6Nj9rHw2ko6TJ2pjtM9jy6Q878ZEdG26dogZScMZosd6jY82guVoSJKwDxh2B2v",
  "key25": "5xyEEDU95cVn8nD5VxRT3jtzDTeKRjcNUtLScNWUc6wB3ynRcfAJhYb2JHsVmZMffa6o7iuJ1zrfvRbFcvfoFyNZ",
  "key26": "23Zg5SnGNGYuZxsbsb2Pa3sAqbk1Yi1ya6X3kZapFiEVAyEiVDiVtSzksnevMwdi6DnCXxnLgXqeTo6LxmwUmEXW",
  "key27": "4CraFg7mjoRjwGYJE8GuVTBPuDmznFfPTjNfnWdDET8x2uFrnDBLed932Udqvx3RjS8htgqt8ukn4ixoKN6GKpc5",
  "key28": "5BUHjT9Y3iZjUDF3MaDzQtKELc4efaMSWdmGNR46mNt5qZjjVL2sSgowXxtCQrv5gGuweCGnZHngdEXCzobhQan3",
  "key29": "6QWcew2TqKAwTBwjXdPsHiYn3mkHhTbAzqp797QV7dbcLVSxsZFdSE4VRWrQhG12rMtVhqqxizwDS9wdQVL5SCU",
  "key30": "2eSioivxZCuYfuP95HjXfKfKoV6SyeoJqyFhxsMmcfCjzze9Agc9upfpgLGaPmWCWQaELkCVPeeJD2XfmRZ8RXNX",
  "key31": "2LwAnhWf3M3y2mU37VTZc7mEE2qeZeHBUpcbntUzRFktYnBFQRcVHkL5TZRtAXrFx2x5WEpfcvwvGWx14v2K3vJx",
  "key32": "2o2t6m3KXSQGURgZbuVyUwWrZ4TvE9u6WV1LDMQrm4gLQbSFUTH7TX1k9WuvSSN9sE9z846YaoGcfAxhYFbwDSmE",
  "key33": "3Zm9KRu2ELivfDp2wGAoyzMrG9DkewqwkH22K1Q6dq2hUYNvnkSTQJqe8XnFHDe2VWErnZ93VYQ9RcV6RNWf6Hz8",
  "key34": "4pfTVCGAKLnsQxDLFTdt8NxjvABLadRJXyKQUddrKaxJLKLRv3pFzRutV4E37oRoAbRSGHmcVc6jTMABNxcBsphc",
  "key35": "2b7S1WddGa4MDc56EkFJmKDgjdYmpXY6hNd4KGdJSS8VTW2pMtd1o5tmttnidW8x4RUQG44UtzWDyCLm1CbZSu4e",
  "key36": "2akMn9R8a97xdLpiB1kxGkybutqsjih8fbxi447UvCBU5JE6fmTKGV6V3KM4S52HhRUM5h4UcFbSNevKU32zYxc4",
  "key37": "3oYrLS3aESLy4QMSCz3S8dWwexKarGKz8DLKFuCtnncid4NosELvu6w2dVSeVJ8TkQqqQzVNMrTFG1PftauUnzkw",
  "key38": "5SdQhFEC88HHVWk9rewnmkVwbMjA2JpfNsaTd7Dth5X3rDCu6EcXh9ufXEy8u1FWzPBRJbTDN5bEkHgZ6Max5xh3",
  "key39": "BXoTHZhPKxmJZxyEeMuLdL6NGWrd19YTcfvsZ2bxzVV5gLE292yvRneoXMC4T7g2dexfUqPT9gQgXgm2Qveov4D",
  "key40": "XSDtuR1hjmaZi28UWRsBgUp3ybfadKag4N94XpdoUzr7LaniZC8j3iA4BQsSqeqoeF2WxoQ98i22wyuqiZfPF1s",
  "key41": "29VmEDJH3k22XhKJBSLxTnXg9yNMYQrDHuWRLisotc2uhCktnTEGR2BWiA9skCH6aUvKiCWBATizsCny4989cnKb",
  "key42": "223boWy4aFx25Ass4TZCvnrc6suV4MsjQs6jDYecmFdwFrXGTqTK8yE3PrUjRJDDcj9tPLBvsMDurQehNcao2FTu",
  "key43": "Z4oRp55k6PNbeXqkshKU6Qw6K1Ao3v67cRSiY7RXkphNC4AwM9gqZS4yELJeuDsXr2SKdDBdXbjx3pzhR3PuzMA",
  "key44": "MtyXE5f9mbyDhEfeV3f7VhASnu2q3ph1VKEpj8TMTCskXcMYfGNgFr6pRX6nf4bsRzEwBCMZnQMaHgeNScWa7WU",
  "key45": "5a8FoYpbwzgmBp99srAecUsPY3E6CvhG8CEkyRtJdgLEVDuQY9C7yxHpGs6BaWvKXyRgttarYKiPDhBe4ncv4Xm6",
  "key46": "4JQDueC5V2zFn9SrLCmGUumNcm17pVeYvvrnWZBhhvGJv8zFA97kQ9XQAbEM9FhV2Ga4z9iczhmrkUdRTzCpXns4",
  "key47": "3QHuAcYVxbYpKhQiG7U8dHUjwE5FaHg7AJQm6djoZNXQ8629cPozsJUz3Lkxz1EjkXgtt2aCe9DZH85grwL7wgUo",
  "key48": "2ERGEmk2izbnwXPSv7FvteVttB5iEtaWVMQGqMMzYua2PC3dMC8oemz6PkYtyaL7N5J3hvrTLMmfHh5bgUH38U54"
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
