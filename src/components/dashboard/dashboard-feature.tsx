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
    "5tYbFwRgzD1ivn2A1bik1dLcYG7mvwF8c9aci2VP15cZA9Wyd33cjZ3pGrKfNz6gnhgwen1odyaF5TWtaGMXt2sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28a6h6BpByj4z18JgCdQQubioopTtvztjEQrEEtnPEhmjmc3Q9stBBsYZnzwbYuU7SYpx1vYQam1C6wgdFDDeT4Q",
  "key1": "2HCJ9wyaLFH36t8SgMukiqcabz7DPCPuKieh73kMV6mkJvZShNGGhpCD9E8Z316xZX6V4YJm1aZc72SKnjiW3JSg",
  "key2": "4st3zRmpm2fzBPQotSmNP5LYYZBnaCEQ2JLcUezo2p7bv7dJbsz1ifkDZUtJHf8ZBhEsLVd6ciyjGPepgudUu4Nq",
  "key3": "3jiEj1rQrxqNVvF3T5jg6dkFmnRKpLWzaYVzdHKtom5pRgw2X5KGngqdTT53asH79dhs6YzxBRijDmLURawNuoBv",
  "key4": "cLRkA6jy4yypU1uKh3Wo8EuR9iTdYvyHuwASWytn9ZPzyqju1Sq1dDp5kopibTrcghbVPvhcmqFCV19SVxPytQE",
  "key5": "3wfiAXpGnh2LEnArGKTiy8AmS9QYnbX4UHTRrWEJCbuMtnMRaW3huVwTHyAHKNfYR4QbkvFsgP3giAfF9PqeMLNP",
  "key6": "aEx5fGf331asSxix1et1wL5vCdWXUuVynZ7nuDeZ9kAnCnkSicmTtzKttm6pZ1UegKEgEcxZFXPhmGA3T818dCL",
  "key7": "5p3Je9RcKXbCZ7byNbRYN7XbHQFgqZndpQD3r4RLPAcN7uRmTkh5tnLFAMuuRfcJD6ieb8w1jSiKHNuJrA7Swhg",
  "key8": "3wEe2dVveJsstJrfJBqRuSqPp8iyKoLpfzuQxpAekurUw2yc8izKMbEAHLvHJmpsyFzWhoy1CHhhJ7Ha9FVyaEsQ",
  "key9": "UQoTGAm9WLozjLDP4VFHFin9s4Jt3C4cnxvUscXcWLXiCKSyemD6bQssz7NWpTm9vjTZMDLXSNqMjz44F9sUY4B",
  "key10": "fPGSRr2qMV9RuX2jezFMVDYBwp5z8cnWng35iSfLb8xrXxaPUqctLe1eWxso3yH3p3TS95nzcffRqUxi5vDL4bd",
  "key11": "4dQCHNLU5Er25ApYtp3vJWFnSft97ekdPnQdkBTxEQ4bCuEVMMHb4rKogNW9MiB5i5n4MGNNHLQVCSDhRHNeNCKb",
  "key12": "3KCCd7wQHuQfqkuQqPJ1TSg1nQXZxqgGnW1AR8J8Zs6htjdkYto1vTKXjpiqMxuuwg4xJUDW61jsTGq4YrEAbWoe",
  "key13": "3PHyNAvmHLXxY4GuKhFzd2KnXtf19cKWLsq3THXSTz5yFTSc77rfT6K8mNVrUujcxQqHbXHKvs51gwcffcUSXkaw",
  "key14": "SoLEyRbDEAAshDo48gfPG2jv96tWJmFvXounPLewRjU3awxbA9AFKBZsq2wQvNKf8gy9nBGNQ3HQianbs6Lqpad",
  "key15": "r5c993DciGK7q11zNcXxCdxR6sqiUT2u13um2rGKv8fgtxrNVgjYtHm1RXmWnhnCHZctcQX8fiDH8vTQjh7gyS5",
  "key16": "5LhEyFJ2LuYsigX21mALPT347KK5zAVwFUiEmswLH5x5p2HUPEtNLTTJMWHLFW58mdsrnW1bD44xgmXo6XvrcNcJ",
  "key17": "3fL9VHDij5yNFomVw8T3swzWz46RXqAWGP2TxEcR2NrX8sap4N4DbTdtDFfuiVWVgdbNfYEz9KnjLBNJw1YpZ5ur",
  "key18": "2Z8E4DSvsegWn2ZwGvtd5kDAo7QLMJv9U3zgo7RiRBE3tjdZwU2vxcsDK5kRDn8kvBmPTnwdtMCL2SD8NimJryEX",
  "key19": "eCzhLgnTyTfSfGqy5u4GLgFzvYNdZdo6byoMGi4Q7vt55NCpRRnf9kzpSN2uiikjUq1hsbf9ESxM8R1TVrqQtvv",
  "key20": "5gqLRWqrvZRESJkWUUrEfnkFWQ12m21of6FFWW8TpTvpBbTknPtDvvBAobUbqVpkDSHeKkTg6Xt1yfd1ShqrCbpS",
  "key21": "5sPGPBV7n2XfpSVi36A2yxtC2gk468wbTuzXhq58fiHz2nXez5Xk72B2Ywbu78ZcfgnZ3itfmCfFcXMts19ySKV",
  "key22": "5af7NcyAytRE3qkNr7iixUobb6kfwPfTo5qtYpMgaRBtDUUGgrBjdCCd6uMbp8kXNZX8TytR7b46V3pMBFxyEnB5",
  "key23": "2z1NQsRpUJWzm668kd94U8ZQB6xiKBUMLdJPvM2xU8mHp3Jn2gAfPXw2ptE9SY4gr2gkbNrN47XCWA3Nf8nnPrKW",
  "key24": "T3H4ddT9G1DAsZevbL2XYUcTN7YCWiyPif44uiNXvrosN9YQrCsVDi58NzxnCPW1VqATDWtmRmroRQ2QSzUrWBh",
  "key25": "2mxaCJ1r6QQuBzKdWAfQU1ZAPFNEy3voDuh5d2Vtyq9adgJBs3eJ1ZNMwJ4b9LiPXgd2f3YEoPEziKz3BVWA3J6B",
  "key26": "45rMf1ovLSrerL1FhgSin3nPsaHyjQT6tfyjYVkuHLMQPqjknxMPy7LYp2jSFnTbY4pHN7WpCmyZyQNsum6DN64a",
  "key27": "2tKivz6ao5opDdwLhUpTfHKN8sCGY7tTG858AyESSeQh6gNt56C4gW5z41DedrVWLxXCRokFDNsyWjPFQs5MTmqh",
  "key28": "4hKfwF9LPoBHvZsCzCTPcNTrcSM1UW7ZjrkduX35CM8wH1Y6agVZ4EzhgDanQHBx1iXS22vPxeJZix8rhBC96UWX",
  "key29": "qGBUprijqpXLZLA7JbU3xNqYY3c4rvUPEuUgPxytYmvk5ZmhYXLUK3ijVxAh6Z3GtBG335znMc4xM1Tke4YYjEw",
  "key30": "34ewRwc887r1bVrXJzwzAQ8vWBXNZYw3FrwM3DfSzo6gkruJsxjQzFF6EA91A3GqDavTGnEgKZVZprNMJWLxLvuc",
  "key31": "5oaxX6FjKbveSHHX6w7Q8qdBJiaFpNe4kmvZTsCh5x8NZ4GUYsNhjgdifYpmu6d82o9KnHGCH6QSFc4bxepPka8c",
  "key32": "5rh9zrGNjMohg1ZbByjnDNvtFtnz5T5vC2AAC6d8HDZr7tLhaekK1VkPnp7CgBwvRi4pZfrqquc4AisXk4PLPLnb",
  "key33": "5EYAS68cBHXBWAefbhyQL7wvrP26KskUUdU2o3QUfS3EQu1S5bNBwTQc8uNRUkohfCj5pc77ZTKPvyUQ5KVgYPcn",
  "key34": "3gusdpKyS2Q7pSewnz5VT6qSwohqaukLMW553QFqE2shDDpdXpUyFRhvYUJZk7yU32vLpraCeFAaiGGJyNyBsAC1",
  "key35": "41ucWJvGHJnUL1iomLMXzqx2CfwhpLJHV6fEgHFGMkv3CH3tSbrneoKtyVEPCDkyKYP9J5ZLZTHoVHaRtJE2GMTR",
  "key36": "3ktUq1jxkuoc8A7kYakSWDd9ewGFB5jvCsTSyK6APLPH1NLvAj7U92GHvpzkcQBXkeEeGdSeHqEa1DJhF7hT7PFg",
  "key37": "2Sic2hG7mY21m5ptu2B6YLbDWb4mZUC9GGmKzwxdRcgpwu3J8xykopgVPX2LWih58xPU95bv4uy6VLJGW2xye6cj",
  "key38": "3M1yRrFjq7dZjbbq1Ef8yiQBhetNC6KBui9LVfjnNyxMnEnEviLT5LyGVzFJ6hhfdQnJonCushdFawtZkE4Fy4sA",
  "key39": "4nA7Qn48zF1ChVrdveXzNewwbhwUtsw5NzPHVpVspV7Nfz5TLWzFhVjheNt1tAnHtUTgA3NZVx76ZZu8rfqo5unu",
  "key40": "3ArbjFKjcT22k75Dqgpg99kckFQRG4aaFzUFM5SYkLxxAHtG6ShheNLWdjXVQNVM2jLjAKEg2vGTkgV8Hm6KAe1p",
  "key41": "22DPUkVTWEeMfcbWMuu1zLQ4vtnGUU5uk8r9dhxiwTq1Emjrw6XRF4Agd33NrxD6xj13FYqehGhWikTt9kzHFid1"
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
