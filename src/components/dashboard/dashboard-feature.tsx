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
    "3nv87Wu41kXV31BabL7QDXuSpqM7Rda467AWdmrHfieGs72M2DrR3mQuoMdTFdunLygAwzVfvXVSM4AaVHEWS9EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jdfqcpK3gmFRP8JtsDSP4yVvDF1fjCNSqzyPft7HV1njtphvyPE1SFJTbT7WAPKLr949zDxXdcUxk9iUvDoD6Ue",
  "key1": "3Y1BGWH8oG1bYSiUQcQGQkRZYSebjd3s44hun33oqiJyTAarhSKTCWUwVvC966nKazZKgo6tf47DHxZZVNA9JdpK",
  "key2": "3Q73Tf3qxFePanGSbQjrp9GSSWDMCTRGn2jT25UiA7GGnNyJpuRdRfqddL7otjLCyHM2qs6ZkXukiqsZW3ZMq6Kx",
  "key3": "5ALvcsvUbYnJQ4J1uxMEPdn41aJpu8QTLAR3quTZXcmYkVXjacy4cnMYpqBc4qKXKKKC8HLQqJcjeAwqbKcDB6F2",
  "key4": "3uPue7ZB5TSchA3sTo9SGWaRj2eUWywA2kQpfv1epjEzDq5Dy5NRTXHtWgyEtE7WPn3b4hC4yDDDq3m4gKDH437E",
  "key5": "vgzbwq2EstoHigcQZepb8qC9HUJ7vF9n7JhksVUGbQfzyc4YaFMTReLwXTnhTgSwKXKafSvnmcn7ZPhGPH4sPxC",
  "key6": "5wTumxkuLAD7GePEmh89dApxxj2HVfT5uonjb9qKZafqp4VEaMJajBgoeQgy5WztCRoQmGThnR84a1znMA8gr9wh",
  "key7": "4z6avAXBVCXRUwBZma69TrA64ZgNQ6DqoJGY7bQCE7yiig7UrRoxKxsn6vBujvbKaBZqSYCq2zNcyyrhhNSs52yv",
  "key8": "2MFFqha3CASKPYVD8vqZKpE4Fde8kL8r8rFeFH8vcB1epxqxMfYuDZg33EhAbXwgQCemXTuwHnVegczv29jDPGn6",
  "key9": "fPvqU3TQ88wMViRHyssmQtHgxuZ9th2eMwiMz8AxNUotQtRfs8k67VBiJtNdHpCXexkaGduEdPiDoLmr8w5tsf3",
  "key10": "2vNak8KWcnjYWw6swEaqADCecS4yVXhvyBH6LVwR1eLfRtnw3s1KuWYrjXeZ9C24pmhUftDefnUvXyVSFTgV6Gx8",
  "key11": "iiyWB7jfz5N4wgTpJEfqErpkqutmmMVWw4ZAjAZHvtFKzwAfoLif1eTD31MAB8SgkYsu7pjA3gUnoGq8id3Vkbs",
  "key12": "3ZuJMXJtzUPYo4YPHESnYZZbLCQAaiq2nxa3XSXCpD6JQ2e6LjQLvfqttmQMvhaDCP2ZkPm5e634kttJtYsfaTTP",
  "key13": "4JNhvm1bhYLgfqUa1hqokAeUHZAofKEuraBue5hTmyo2CaxSSM7HQXn5VJcCodLvhyXoPTpQosTxp1snV9iwNFZ4",
  "key14": "326ztLKtv2NhcF7ta9xZoRMZREZZ98pzDMbpNRHycrkFQckP2w19Z2h7HuakA1biPECGno6TWTA4CrpPzhzPEFwf",
  "key15": "2kmrnUpBvj2sQ8wNvPtXdyhUxsGnJjiHQMaW6ij9qT8nHcBKk3mLq2ttDf2kz36BsGjoCrGFinH3zgMbDzpDVjtw",
  "key16": "MPxi5AkZxSVLzrhg2Ri5wEvBZ46d1muyuHewVV2Bv6nfv1p3M9X4tKcaQ9ErHPGc3TF6wmhii4C2kwgUPokGvvw",
  "key17": "vRLfxdJ2v5iSJyguP9DXDMXiaP82SHjkK7GLv1ipLE2aNJAp3u1PTJWoxRvuuj9eYaiiBQuHgXzw6MMgMjFs64i",
  "key18": "299NpcRFucDkuwB3Pp4mPkYq8SWhsJKeKFzoBkasH95NxC6BXTSp66mGd4auMFkzQRaY3g4efMRzVa97XUHUNUeS",
  "key19": "3MaN4WXtDpu4KvTcw9dJiKVTF5dCQ8NWMDpib76C5QfbHGcpfuHrFwN5BXgscN2efJwH7EnfE9ni3MRKgbUmSkUt",
  "key20": "4Bp1wNyujMhEJcnkJSY5D3i5s1gE4ynC89FgxQn37KKEnViDKL4nmnj1nnP2m5LKTP4M89d3AFC91Lhyj5eBxDB3",
  "key21": "4b48RJ6PyuKmUAb8wQ65JbnpAskbmqE8PLhzk71UVXXEWAu78Cr6ewUFUQBcLDPBkyMMHw1aMmMsUFH9xuzJLUG1",
  "key22": "dU7ExbyyWuHeHHf2gL8aXEDBeu79gtxLoA2YVXo63cf79ovKsYGPYRZ3tUTexLZHCFJfERmtGhmu5Z33vaSGEHh",
  "key23": "5spN2kfdkXyjunv5Js2QpLtcvvukSxKDuwNHRbq9xwpmSEepAUjVdT7WTTwzX5rVGWyeyn816SypWprB5rKhFAeX",
  "key24": "26TtMehf6rCqxVW3WPYQvTfwiRdPwpEQbRG7XCzGJ3jMzi7dBrc69w1S6nCuJpC1R949uFGxBeiMWWAzWxYKdDJY",
  "key25": "s3nb9GRXqLosfZoRrAZyPUZHmRwgeJSHHFi9g2mWeTyJAH9ip1WFAECXB3G25kc87xRXTz28XES7iK2ESuV3Sjr",
  "key26": "TWbyaP8vrk85ATpsYPhXZGUx8j4jPQgLeVnyGaWCfkd5yMS9j7PYbm8uN45C5uVHvRh27KCxbp9pnBnHEZmmqQ9",
  "key27": "4BTd8dZ5WMRADeeoUKjsuSRDdA5Jm7tsBfKc8FLhLFE38ABL1TzfzYFwYSaGyEgFHqrNwwX2G8gQk9o18hTfKSKR",
  "key28": "3uamZmue5FBD3dvuUkUVYLTp84h7AUgbjbQBsFRmRqJokqKTHTSZ5NEQf3r1bMGvoC4TLgrUSXatCzZpbTKuDSNu",
  "key29": "3sqBu6DU5cTF4E4GjbFDoyBcEx7jJ9WGMJ1vdfY3LWYf53hDfacVgCccCNX1TGZWQh9XVti1jGGm8SxuTba8Dw2m",
  "key30": "Eyf8y4buLCNM3D46v1UZWuXHZoXLUJWLaRNyodLPPJWKZ3e8UftUzXDerjiQb5LUBwcLMkDkrunGfPWCJR8mnpf",
  "key31": "3pq12kXTrRbiarPABeE3Z1afjdxzCfaGobeiYWYsj46QbyMQqQyXiMZxToq1Z654v6JgVNtv2mQEtPsMJKAS7TRb",
  "key32": "5hv1PfCuvSX1u9ucz9P3aHeAuRoY9UwkPP1ii8Sm6JZFUp8Y4PXpp32vc419wETTPQU6Xi2TLxtbZZMz27PNcLR4",
  "key33": "3rtMsXPhEmbqCvSTgiakh1kvjV55exj3fxf8yxWhmNAtUR3hm19pMgR4HQnzwB11ay5LmWzkpRzvNvvF4bsPEVN9",
  "key34": "4DkQ6A6nVd62MZnxkvZJpERzEHHZMjadmMCeTnjHUXNnvQYU6Hn2DbqGkbqLi3sowrUnexyfSBK2Z5uYCRagLAM2",
  "key35": "2DseHgYonfHpdKMTvqt2obj1pUnckGLvAsuv7jmVHwizAPcJgPVgoVfdGddT5W8b4PJxMUpzx5PUS1VaLeThphWK",
  "key36": "5tkAx4LofXSbvZjAE2oT6tjAw5FpRSCHYYipMV14cuiT6Y6KLE5SdJSAqYooR3FBFB174ymswtj7Y78AWMuRCtRt",
  "key37": "4bjQchssxTnrzhbfV6t1DxVXefCUdU1iCjzEbJMpwLeZrRmxToWq2G1vVqXCMmmHV85wXnxP6c8UBMsvVCPnv6ZV",
  "key38": "5opKDrH2ztzefTTMybm849HwxvoBdSnxtV2xF5qBA8y8GcEs1tiRh9nxCy9GHEurBNpvFcrmwpd4yQouCHdtgKWA",
  "key39": "4yV5RsiNQKD9xtrnfqo2B3aQ7AGT4MagCXQoLPNe5tuMVw5tL3nBL3FbMwz9Z7C1gL262V9JCoXscNqt18mae1q7",
  "key40": "4dPxTzT8WjjnXvA9T1RnQx8HJbtzNr1WgTKFh1Kp7KzLSiWUT6J4jUTjENt75pMWqJL8BQMFhUcU76pghLLc7WYS",
  "key41": "2n13MFEX4nDHbef5wrafbDoo5YRsKCym7ZfxGgitcakPkjRUwpjRqoLF6LSZXYfNKmT9J2WFPKNA1RgpQ2192KsQ",
  "key42": "5MERgQ6gd81xUBNMmkSaXo9V2P7wjnTPE2zNnQvdwMKXbGMU2W62UignVKsc9KTRM6rHhVsxsPXTCmkepzbVsxxs",
  "key43": "3o2QWzwoS4qKmTjMkdo8Etn1S2XY5TDZjTquRvhgKKihZAfVQPvc2Yqq1sU5PgFhVPkSbDdKKN8JC7pjMFpzE2uK",
  "key44": "5XexH3XUxaoSmTxNCDMoJyAVMhDy3s7eEDZ1zPkBCAK3jd1vDBJ8jxxcnbFD2iLS1vVCmNeisuFarBurkQ9B2WLo",
  "key45": "2SSgHh4cC7vQoE7FwpYDBZqu8J7b6paxUKoUYD1igXzjku9eykpux6BY2goSt5njux9pevSVWphNGeZUiat2fJuV",
  "key46": "4JRYZdZ8fY6KQazh9Rbhsfxk3bV1KDMSPRQMw9Eoj2RK5VoXRVfviM267PHxayVmMYoUb8DajGguEeH9jPdrFDeS",
  "key47": "3i47E8UjETXW3Ph36FsuAyU7VNsAunti5A1NGehFEA7LF6et3ouuoRLrpgCbhVJPpF86irQVWnAY5he6NBWiud8T"
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
