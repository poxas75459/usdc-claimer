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
    "qeeMPtu6Fb82H4vyniG9S73PJ4cj8exA8sE4Rtk9SVi4yKRsVfTcRFBkzocogn4jz31aochJCrUySQdVH2mhNHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVRzCnecF6xikt4Q6J8vRs24nWWe4RUFzrYKPbUob3grcfrwpmsYqo4e8YLDttWWztaDuyF1Ujvfrj9t5Nw7PfS",
  "key1": "2nZepD7uHo6BKFp2yin4K5w8ySpKzzJDL96FXv6qEViMR2ubDPsabDZ2PBbSMyBhn2g5Ti8U8F8CEi1p3AQEUtgS",
  "key2": "3bMx3uSN29m6dU6HDxBQYc7HeGDzPAGk2sxiTtUjpJSRaYu74KRAHahwZeL4AZx2GBJnseB9LD2izA22ePov1vxz",
  "key3": "59Y1vnV7wx25DokK67FtLgPBha8L1RLXgrnnLwaKFFULp221mbF5wZ3oJfMgPUvSBXrYNMVQsfYyF2JAD1dVn9oT",
  "key4": "2rDPC1HDmMEoC6MEowXo3Qp6g5RSQmadpDvefm8mx4JFCbWwV1PawUKSWmZsFvL8KPd31d6qzAcrjHTbH51V5i7P",
  "key5": "3p9QPaT2hqZrF8qkPo5MBmCYzqPKXZ6vSz84Nno83Rj4HYk7Lce59tHN7YgqxeKaimrWb8nTAbNDdggt8C14Vd7V",
  "key6": "3dj7obr5QXorZKrNoy1a26ikykTo99vZWKuHAU5veqKgGEqeKhBZBMCUbdZtkUywoceJpELUVPBGfcDWjZ2jnQC9",
  "key7": "q8ikcRxrc32LzheZ9Y7y34VKbN3HENzn1ZMkhYBVpNJJMYQMdEzDKF1n5KQLeFCk84s1VFUzsq759ro2ZgFtVcF",
  "key8": "3LsmRK6Vucbkxt65uLxaotDinkpnVxDVPWDPwjPEEtzxRXgyPP6iQnQpbz7wQpf4YdZoYTsGp8ZNwgHQo4e3h3NG",
  "key9": "SYSdLt6DgghGgLdpnxFiEeAHiQSDNe531Mi4W6C2f9EyR1JgkJfPd2ZASXqA3BQtoWBaWxrCDMBHo6hRNyg3dwn",
  "key10": "2qiqkFDdnPxLR571nPtvg9bFAQwDUB34T6gBZ2ZVJv5vfze4jpndZ3JXKSw2b125DBF2n4S6APRHZG7hUCCpqW62",
  "key11": "5pXWF4eBhihJ3bcZhYuDkv2rJCxrph2DGtRVAS3F3HnP1YcpjfYjXfM4t9aeT2otRY6XawYzLZ1xow1HgRF9HerK",
  "key12": "4LkWW84iHD4Knk4n3iBuFcSUA7y59M3u5SWCNV77mctP8esb5Q9HkFyNVJreBGD5esXgqi9DyDozaKe55Mng6buT",
  "key13": "wdZrr26a1uQcnsdRZnYfuosv6b2d23E6CsRw1jmogTy9ue4RAFDSnkoDHjG2A9ECHJnPUywzTto6AsN66RbtJMw",
  "key14": "QfR49oVSixqszhhLLnYS6reMRfiPC1LqcmF9YSJsJya1DnDM6uj6qUJvZ3bsm66PmrXNVKuXLCg3y4wAHTJuzpB",
  "key15": "66oUqM2Swtcro8vcfaFoDqjcYuWXAMy5Zh9qcLsTS7ry2WjwreXYpXGw38z6RhpVgxJiFbkGYN6c6nPdMQQoXnzo",
  "key16": "47MZM6J7JMZBPFhWnFZpjKf1AQR9NCjivWWetzjyWpQLSdTidTvHBmHn1gYJgbAYDQxWsZTQFFodgtYdHikKP4N1",
  "key17": "5kxBT8vTgg8CEJ8zKFGaVKE3iaFa3vHd82ELzoSB4tm88MsaVjtoSH7ock6pZPZXyhUD5p4wSjFiupcP3CdUsRLV",
  "key18": "vqhSwFrtRS5YiRZUbmAWErdjSU3eM8SvUzG1Xzk9YU9997YmVfjkjHjaifcCockrodBnHM8MjxGP3vYSs5bUyXn",
  "key19": "3ynjaZ5kjF5pGpLxjJ1GU9VGp1mbg7qKUqfH2EikZfabUFWxobPZJWc6fqoLQi763jcY4WDbqSuqdDGswYiXHVaU",
  "key20": "3FmR6gcewYbUGdu2dbcEhFQzfn3c9PYbVdLJmrh3JBdnNADQd4S6T31ywzxAMQ25qnF6wJtQQKQBsvwHXvcdf4iH",
  "key21": "jMWzquM7MDAbTt16kqZXZbn8CRiJyaqdSesCVpaEs7yNVV1KyE4qfwdvNAdaubuLxYMvfC3XWCAvUeke2EZ8gmz",
  "key22": "41TRtfVzX93D1uSGkXDViC3LzZcutG5yvR7qHC59A4doR3LDhwDFNXAzaG437axV7qzjwF6V7BLTaA9UZnbaWwvu",
  "key23": "5KiaXkv2if9FBwnFGHjbnvV2EcvxDWsU45GNtWdDdLgrANe9tTpLs1VLhwUMwCQucw8HyRJWY6JmMLKw2BgBcuG3",
  "key24": "4ucnB8UKyC6rAfPwW3ArPjV4UKm4gK22WX1Y5CZoDavV2dNHNJX49XWUonVLCJkFxx1Kcm9pPfzGyPZx3mmC3q33",
  "key25": "3Lcb6C8BnTjaCse8mrmXD3GRzBTx8E5XKFsUFMUAuaH783TwuRvHSRAU9SsS7fecroMsdPDdo6Gv1KjtKvmdwBvP",
  "key26": "55rErPe5T918aNwZ8HDxgpk7ckMb8YtNuy4bxWjo6Pg5P4dyDpMfswCWhu3RFWbWs7VvnSHjQaUimsfW2941Y8aw",
  "key27": "4NpDVem1YsEB3UKsHMnFEhphp2hYAqWQ8o5aMbA7KwYdU1TkkhVaYctrBhiUYaGMLMFghkrvcHAxKxbnqa23NZBW",
  "key28": "4Lx3dqqVREDPyX55oX37TGupGk9JP5RriJXTNqYKEQcxuK8LE4x8HKhbqGqzADPBMoyYon1Va5ryPXNtuon5bgcf",
  "key29": "4mPCNtPihiCfUGVb31HwsKzYVPW76AtwW2Kq7MkQgmpJQVHwqNfSALh6rMJjXpv1Wgt5vRFFNGq8T76fGFRcHoCR",
  "key30": "5ASNgSWJZWYXrxBMYKdXBgpGhPtKjG6MBbyuXpEtCWpphrSAyb27g2ttNeuMz3aBCd5C6f4YfkD1Ea2u3sCueCjy",
  "key31": "5NpDirxSfaqneLXbSiMQqY1i1kLwUdZFrRtVaDUSKyqdn1dfvH9NpUQWaDtyxU48nRodDTmxo56Me1kZzXaTp9ty",
  "key32": "2oRGDBeNXEuevokzsCyHDVhh2b27DRZuyeLoMw7hBySnhX5Q8Rfy2Qb4LKD5PvxB8fbyU3Ut378ap98CWRMGLS7u",
  "key33": "5EUCamYZ5ZiGR1GaWwNGwUo4p3iDeaxbD6o4NvF9HxsZuNvJLXdXbeGbDBZ5WzKuNNuSHPCatZiToTkzSPK9Aa8n",
  "key34": "3Gbsps6AepEU6PMSVdne4VNkxgkbuAQQLjD19AsA2x9XgPqB7fe3rPJ8KcgTCvKY9eWYt3Kdb53b1WLj2Rjm99Gp",
  "key35": "2ws5WLgPk8sAHURK1c6AH4kaMu8iKMRG1E2Whuz58bzkfRnxvCGUGhxmqwpfsyLMJakMPqiKhBEXyHGqBahGmu9G",
  "key36": "27MdwVAMpakq1LJjmoaG5hSrudfpsmM6j34UCoF5DA6K4YskS7NQzHxHUrt9SSxdzYA9JynSHS75yK2y7gZGyBPk",
  "key37": "Tirb83mrRgjzpu1RwEhVaAL18VZG2yJ9NN3zH327km3THc9FKGoUudyk4phh87WfcFgNp2Kqga7REL82HcrhJgb",
  "key38": "2oqj8mxTXS1jebEXbBuqLrPhKcJneECRLkLxg4nU9ugiD7mbsk69uGsKDzrXWM7vTkoJZj48YVDKYhwNicueucro",
  "key39": "4yk913DK6bjweJLEMaTkyNYRnt3Rjnc9V8RjAbczMEZsGnHF1vnNv23SVGMpHt1SpLk7UeLERd6DR5KXYdUkTS8F",
  "key40": "2LiwP93rfGebDYEDCM7BXJrLHpSRJJoncAAv4i1Urr3xRuBhQiVG3oNikofoLMS8DfFDyA3NMeSuhKx37viLjpBa",
  "key41": "36m95HHAsduo7MeQKBwSL2Lu3qRck8XbjqgtBptpA2FCRtE5mARfFVyEPPWz22XrQJmALNm48pkqGjhyLPMRKJ7v",
  "key42": "kjqgVpqRBsojA4vQXWtqG8zoxz6NwccKg8hfJAuL1tBVrvQ85toDfDUW8evdkxE2JNbxxfC9sA7AKNSjgk8ewWQ",
  "key43": "3p9KC3zAn7NjDz58vqmvWwCFiidT5QhNGsQTAn2WvCoHX5BuEYBCvtZzEnJwrVKCkg1d5T5osDbSNTLMfzxr7ALY",
  "key44": "3AvA5Sgw85og7n5PA1e3XbBQQCpmUbRETx5iMrbD6W6787ogyiFnXXM7Q43gpsKewxLbPUxzNR4xtA5BjVAbQFbw",
  "key45": "3X1rWfEydZeHt2whW3nuCGu3Ud3RWp8vJDSiPgqYu4RNczCyJUUdj5sErVifVUbzFwbouS5bNbipL3W5WSW3aVb1",
  "key46": "2SHXTDd2B2tb6A6HqNBHH9DjgxHfHfjCAV7R3S2SUACVvV4tyBJVhtM9YyDU2oVnDe1KpVvcFXNE2XYMV8fRELfq",
  "key47": "24j7R4hxgj2Mr6ZbXUX73DZYHDhYTLdANAoGd36zdjMxP6j283xcsDanAqmApQXXFDF9NDAatvHYDtJ65Hk4tHQQ",
  "key48": "2hcgo4EX9Ye1cH1taFkv5ZMCLEWTbZQbp4Fq3iqoZUda9hEBNEmBZ8mUYNBASn4PPVydDuweJrVgzzy6QLbhkfK3",
  "key49": "2ysYkfhC8ebET9wvxYuaeAS33AYsMmVUjGyKRDDGD6CS81eEPXWXQPYPzw2odnSdU7zVnH23DNk6ybPKpVJoENmQ"
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
