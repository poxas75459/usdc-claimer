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
    "2CCbTgwX8Vv6Rcne6jTL9UDCoiLNh1uGWQRZmb1kaESF8n9BgFrhNEthdHarKhgaM9ospask82x5vrkfd13sF4nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmHcpfxGXjiEXjZZ1MJnVqXkH7zZkXbdh1piWJT7to2qv1bEqP9pmBBUMVKPFj1wrfXC2fSe6aE3VtJw5temufS",
  "key1": "fiwua8inySVgHot8ZkkA3TDrstDgGs8py4wj2orbpioWo4XK4PfSgroSYwvkGmYiyBF4xMrhLxJnTY4qEPV7Skg",
  "key2": "4tMQc67zzn9XGAHoR11STVgmDEmHbYA2Y9QZ9cd3UajcTAFt2RKJ5AceGumDiqdSLUa4mpdXPPojbtGehPMfGfeN",
  "key3": "2tFHsVihiKSq2pHsFEvDJT672gruDwG8p7ZrbDG7HvpdQ7agihPAd4tz1x6dBqFBNLPHvpLMRnjLx8hwvD1bqeac",
  "key4": "5ibd1wYH46hwmQYxWVYpu2xNfh3xAWGb2XdgZRgnYTMYJeZLg5Bs9WSn8GSYhWmGFv6yqk1iwtZJoNYXaELdoY7d",
  "key5": "5E8cG8gXgRqXUETQDtaTGkreVehKG6L1YeFasikyd4LuG1NoJ1kKCfTiUNUrVSkRJEkCEABXPWp4VMXPrtwJhyQt",
  "key6": "JwhRcH2K9c19HTBF9KQsJVm7d48eiYSS9E71MsFXbeGdVFecuLwgTGU8hT9exqr4uLtv3c8YaPLC4x7VqY3k6ex",
  "key7": "2Lq6YtjPS8fhAEkPsvuaRmQAXdRvjjk4SproDgvsKZpqj76FgFt6KN8VCKw88iDUa58HXEWj2RXpGCvT4zEtXDxM",
  "key8": "6523uQWU1ZfMou6Zfoo3ZR43qXCRxRYSPaHQJPvu5bXQEpD3oHfxDw7Mn6wtvHJcQECiTJSGxsSu4gYHTM67syvd",
  "key9": "2HNoJChEX6fPqGCDQkxBntToWVy3YNGgUEVoAR1q6F7jtggr5MvcrcgXoTSUacNNxiYq3DgEJqPB9vqedPCMBG9A",
  "key10": "2JgtoF2iXJXxP2TVJnQ3hCeirgSEug9WPDWutT8nUKdWAQ7ob1S9NyC3VwL8dLHrb3m2B7ymHNNh1gF8HqKvfQR",
  "key11": "4K8s1TkvEuTDB1JsgkQ2PefTeWwNpgR61eCPkX7cw9HvH3dT91TohpkYM8o6RNAjiVHRJ7Ppsiyd1bfhERJTZBBM",
  "key12": "51hF5skyGyVCncB9usNnWLZRhyZtJmayvkp2vX1FCpRKQKViXmJLYjfLaYM9uLMruxMxbLyAuJRk5urMa2sBRZFv",
  "key13": "spWYLjyZ1hhnj6YpmApEJdA6429HLMQERwmLHbpbHNmXhefHHEd34z5cxd29MSNRab6QLwgCTMyCv66umwWeqeX",
  "key14": "4AQYitktDUj846q4YdVrE7ViaMNrDE5mkKLZjpb9GyXEBddkvxuKMN96n6X1iqnh7Jm6KsnhMAEZiBQ1kFrKVXBU",
  "key15": "2BD6EhxPSvP6aqfPKefhHTAN6mimVQ5mA1SeYBcm47fHqxAE8JBfy7FECCXBagL2AbcKqgQYrB3s57ACsqZ9nQ1i",
  "key16": "2GRWd1gZunqCabyYRihxiaHvNCuw1T5m2groEXezDTHSBY7PvEZi4vTe76nMeDNZ1XwaRWQu1ZyTN33tru8qu6rR",
  "key17": "3jGa2eRNV6WEcBiDcNVanBmNmbXxq8CAMSqS2fTskDnEf1dGZQ5ERw7kHpRprsH34wJSypAiSFrBwq8UtYJjbj9v",
  "key18": "BQZRTgzLpvbzs9y8ndfC34t3z4b5RBLB37zcAnoDM5RQFoYKZNETLETFmciie6vSC5xqFsRLn3SFRWsTZB1iq5u",
  "key19": "2bPNEcYEHoxRaecKSCobbuLgXYMjE2s3A6QFoajbuqekkjtYUvpLDVinjTQYzjKuguiYNPGLcSngSyuhoiNGPABc",
  "key20": "5jQgJK1Aozg5PuDUJjKDqgxwnYCiAKNibcYLRwZncpX1hWFxoB2SRvNgDiuZ1h7Y2z7o1qkTCiskasDPpsz4ehh6",
  "key21": "4NWiAynK6Q9V3SQ7FGuZ7sKMih448LnVLYNBo6UvmcT7oAVZQeGG2RD8F8Gme1apbB97skCnMgmhpwRmpvYJJ6J6",
  "key22": "25RFYzgAc4cSLmXqBJH1TgJeerpYgZAD8RCEqsNh4TfEEN9ppVXdVdNjKc8pPib6MF4wqz36APunE5LMDUpomjAC",
  "key23": "5o5vksusFuJKbLnCiiMoDnUPrEPi8UST1w9Pp783pccRj8jQbfr9ifYAK8MNNvGudHRjJAx1rKL31YnrcKYrQYnE",
  "key24": "38xhCxmnbi7AWRzzDTEV9opcXvRQrVWcgE9k2v5gSv7Rh4HPgdGrruuysu2AcwBozNFqdDR83xnEXhsDKb8EC2Vw",
  "key25": "eaRY47K6w7gsMbMybpMZfZ5TQqUryUpqtiVXsqdSxgN2gAuW1Jw3tW7GhJ2ZxWX5rrSXFoFNNKxnVevxGmK6Krk",
  "key26": "5YzMZZhwmJFzwnWLhRb27sv26AeYm6zKGSnSdSGW2APZzvWaGEW46bBCnSCQ4Gy3TA63eVxY3vPDMfR3ajATbBkK",
  "key27": "21GtEkeoEV4q1QKjVEyrkNCZGFBLFafDP6QNQzeeNGx9UHVaLvgG3Z96vPrDyGaArcs7Gz7kDt6A8dATvY4z43n3",
  "key28": "5zzMUoTqW2BjRnVAthpESPnzVqTTi2nqDCbwvYpehmcHqCZex2URpSeveDUw1QwCXhgZ2EHeiwTaNMhiPmeZg4pj",
  "key29": "48tyuUD59UoxpMHJ4ckBnsA5jtwE9J5QXrEi55UUre3eNS553yVHykuHoHmRjoPXt25R38xSLAHuD5yrSwSZBzsW",
  "key30": "vHt9fBbAYi6QBW2f4cdMbpkiEXreRPVg7VJ6oXhspaLV5r4t7B21TazT5jk5KELtphoC9QvNTBMSJtJNgc5ywL4",
  "key31": "2dDr4NFDEws7MKNzycJqfc3aC6E7LFp5w2oxXAgfDwPUU3QJuLyp8V2YGRmLw3fiZ3mj2yQaNHJRUfv79ViGiHwr",
  "key32": "647ZfR77CUWwLBWUshweeZoqBn6zmR9GAJx5QF9EVYkTn4thynXe8b9UifcSvokdbXmPPK524HjNenkUvBYeQkAB",
  "key33": "4pbXVQXtd1eKuMMsXUmcttq7BcdTt3mk1HyKMoEqw4MBpyeLyGmdKPatogCa9WTbYCZdGNJmfFbuXCCePp6RcFXs",
  "key34": "5fE96hNtGDZuvSwZMFoV4gewbqAbxM7wf6zxMsBTcQo1ZZhdLkhYhNHdLFKSWuQWw3P3TL9s6j53uZ98b9gF1JAL",
  "key35": "46rbXGVMdsLTRjzikXH6pG26hn1WCPGeQs6WZjvk4rVZgy4zCoHkn3QBHsLqT9TPLVeiuTfipUcMFXPXwgmeDT5p",
  "key36": "5EDUowQdcmy2Go2vB6GtThzsgaw3drVdgUErVcEqAEdF22EmKur7Dk5LV7BwZd3Ljp1pEfVusuiZ5NvJeR7PNbgy",
  "key37": "9kKfzuWsFdWYVFzcnoLEFSywM8wpVHcdFCJY2pNXDPzLRfwcHS6kMjrM3CRiz2kUhuV9ZAzcWhsXcZC7GQnwLJn",
  "key38": "2Jnq8h1tambhx2q3ASfLVdv9bEWrJyEGTujpSVVUHGEU2wnAoMTyFzBFKQ9BqFwixcffjfwWBPZiwRLbxaU4Hwwh",
  "key39": "2dirdktbaL9fTnpHCu2qgaAL6dH2qbU7XjDv3UWe5wJ9h1Mvf9X45MJLspbWWTrXEuyi3zN73MFqBmSNffLKuHAn",
  "key40": "4trPk2To4dQNpNCZx38iCD4LvUCFaaQLqf9wYiPNQYE6q9QXAk4R8xuqs5ik4168kvobRTVbG2sZEnMwt3MH9Mb1",
  "key41": "4fBvoevv5aWBtVyWt4xWvHVwhSGKSktv4rC3GnFcT2kTMxZ6JDwq5DkbAAES8F35NZYWisEiwE4tdDJTK3FbN9Ao",
  "key42": "2aLhh7Wc7dzo1njwCSc8vkS1SMJgGysSNsAyJbNbYs1hP3w611pfZzqJutwQxj2mEGHZpqp5h4JhMPAkVT1sCQQP",
  "key43": "2C3X9YBtaBkNbbY9zRCJ6PunRCXXAAt9WouRkQhFqbskerCvkhwq5gg82f789iJmeHZr2agSvbx2UHq6VRQfPfmp",
  "key44": "3GGBpGHdbfjWjQNN2sxNoyPhJm99axpy75UpdNQv5p6uGtMPdGURxbwMg22iXRQee2btCuzP35Y87PbQSvKx3g4e",
  "key45": "5Rr9UJcTKN8HLRjTYG8BnhaAaV4NFrEeTycABimBwCL7mU9frPGSszgzQMscZC21h5zJQLFFHKCFWsYXAAsDSuzF"
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
