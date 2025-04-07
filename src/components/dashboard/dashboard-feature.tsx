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
    "2RV1GQMTC4VLhYJ3FReCo1NV5nbnMEdaZKyrQmMivYPLhcEEqDhVkbiKSjufm6co71KoE2VmVmf5jyPDT2qUCN6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eLvRRbB5KsEagnShFpnyhynyk7noQNnaoHdjvVehCmrpk6Sc4Vpi9ECbNHGn9btW8Xe73szMEWcwjYfmuPvaq9",
  "key1": "3GqrjASXPmJsLcfMQyxfyo3MtpDvij9CjrPibfqRcs6yq1Lh4i8pEkxtDk8za2g3US8cJ9vNUrCjhVrcT2UQukFq",
  "key2": "4rxff622if3oxN4au2Z2pYe6wugdejsS9Rq5GwB34st7Q4VzzHYf5UQJzU4xbggoNGPbte53SzjDkXzjshwgQYu3",
  "key3": "5FyGMsM6wbhkVt6XtftKoceKZMKTn2Xc5ND3eTrhicA4BmESwxrbq8eFmQV4KundM4hKRdXT19HekEB1KkpVT4Di",
  "key4": "f7j2MBNnXh6RS4nf7Qwt47JjyomC3r9MSqQVACnB2bAL9KMgVrucA8cJ4cmUE3zYAbJ3eKsCDihfvQDVLyzHD34",
  "key5": "2kcDSSdPCXdQ4YVxKmeQJC7HRUsJ6o7Wty2rGE836PweQgoTRHdhLnnoENEUp2dUwb5DvDCPeEHnss2jMuGkyQ7P",
  "key6": "4zTEpHLAcsu5P1CLpCBwGsGGzTxBthdoivtPxY2LHLXhm4np6CtZaZi729gK8T6Kuu7Ua2RyTQx7rNPKvnUJyqiE",
  "key7": "5oZ8WrKZMMtny7D46L1MDubJ1dBoe8kYAuevMU6R9i5SCwANYUjsXxCmaq5VNpyJjEExvrqeRcQyFQ4146yVuWA7",
  "key8": "x27DgvQvJcHo2S8tJZqduuTDvSdjP3wBiTqaWH55UW5ocYicNXtyBqAKXSqR5yxRRCtowHzKGvpTHR5DTPaFNqs",
  "key9": "KrNaY8LcopEf2kaEQEUaqKwNo1SqQ6h45NDbMMZYMK5WjiB4QvNCNX4cSj9srVo6zC1fxozv9GGVSMd3KRGWvYq",
  "key10": "HFdfkKHo3Zp9nZAE2fbEZbSxAjYZbdwigqreQGopGA19vRtZeYnxjvQDbnzn6JAWrSHagNiJx2ARjwwthCs8XeE",
  "key11": "2fHGizd7RTbFkjKhPFBphcbeK6MZF6nwnxhiGmAJrN8xHio4fzBCmupoFo8DxXQMoTXgiez8eXTXQWzkyQRob2w1",
  "key12": "22yyGHcga3b94zoLMdi3NaQd47c4JkZPiAfxpSng6pdPKBvEyv7tsreeiNq2zyTsmCA9ZTwnCjWX1dami4fXH2sL",
  "key13": "658j6huJKm6sLLzjJJRFQ5kd4b4PkPompC2RAofDCH3j3ETZpFSnx1ezXnER738cZ4Up8n8dsqmUKa7XeZKbHJu3",
  "key14": "4nXbs7R76LDMLKBV2SN7BELX5XonALSK59VRkVazkTDcQ5CyKeacTMnesvnX54vyyXngTQPtom5roJTCrJfN6dk3",
  "key15": "Dkygn7sXsBew5CcXGm3emfBWfFRsEqtGYh9z72kVZ4SbG4F5v1xWjVC5uHC6T3rM7eP2jNJWJbxvwyQvwuw2kQ7",
  "key16": "3DEXq7RrEGcXLThWUnCvLAVczKghh3DCYXN45GQhVS76Fy7idwczLuebvFYrDn9TiDZhBFkAdRfaDLLTPNFe3Dw1",
  "key17": "3r8Z4JJ6LvhcEQJ9x2MxaaLvicAsiJKwYPqgWX6zufV1Q47z2u2MGQoJ89AoCbsQVHu9ouBjPMPJEzxMvygCxwxn",
  "key18": "L1tSrVh8gizr3FtfaAcMrD3V7futm21RxPrCaPiBTTnKyr3mC6iVVoywWo18VLLdwS8tdzhS83xG1iEKcVdwboD",
  "key19": "5djR164wypg9gXA26e7Jqu1MpUr1deD5KibczECkp48bNkgDFWm2foA2bPLaCSAE8ZC2mqEQkvGcZJLEXqNpWkNA",
  "key20": "3cW5nto8hLhVKPNfvwfBcM6nHaiesQVR51TZt8gANxVWtp9Vykbi7FQvtDo9nN7uLPjzQxqq4yPUpwUirBgDNKKJ",
  "key21": "2DLuw3EdPGFCfyMc86k4hMcnN64dZmHVFfGAALgavuFnAk6n71uxAJkQNHTpG3wGyB6GsczKHSZs7CiUcrWA1ek8",
  "key22": "3GX3bAphYvg7VJRpivguG9WuESxPLijik6PtEj1LqbZ7qjxp5h6LH9k8BmEqRc7msYwhTvt76D5Guo4E5AAb5tew",
  "key23": "EEgj9rJmWArgHXwYrLQ1ykSuyWC62Kcj8nRvS4tbmh74KvX45kovSwsqyDHf6ie2TGJ9N8eANSaotvmvZxKVE5c",
  "key24": "4dB4i5DEjwTRXw5SPTAfwPz57LwWXrFMwotiN75tKFayZbzPLkg1NL3qnaYfEAr1LMyg19gtLUSg16xXtKrGHCvW",
  "key25": "2QEFvG4ScU4CSVpwMSgJjUos8UNj67txcdc1JVW2W9nXMKfE9dDDkXvG4h2JryN2aTED2wCaBw72qfbrsMsyRNUk",
  "key26": "41CzHf3nb6sG7JAEtQQvLUzUpDnZs1UxkcgUAjEjx7NReuo2irwRfyS27hkgihGYuMaLLtkUjuBBPuGtbioj9dyZ",
  "key27": "3qr6BmBmqV6Hg1QYMwnxvmav16ShgnpCGM71ZMqr5PgvMqr4NnjSYR9X9jiWSqtizn22wE1m4WSuvGaTt8eqS641",
  "key28": "wTiAEVUjxGRFC4eRUUXNC964HmeymCXLPY34kbkSNmsoE85Rzjobk8DtYEf42gS4hs7MzBi2FNFbPTugvd3txsd",
  "key29": "4KTQ6suS8T5tmjtSankjJcywfk4AvRekanHJN2W8BrTqneRz52iQwswMQdfh9Pq4ivPSMPBXxvxVjF8rmHYbbuwH",
  "key30": "3j2X1ckYeS44fK54p5vKuukfxXT6kZG5f7SZHaqcAx9ByEUk6hKNKPcmMUosfZmCGPb1sHM5zy5TCBmGRdiAApLx",
  "key31": "cZMJVyksEJ7N7WE5hf5a7eQFze1b9EGt6eBdJkWhEx1R2mbVDsz8KbcNpNk6DJ6yQZc4tWpPwY68aRskUxZspFW",
  "key32": "5pmVu7Y5fUg1rJnHRfX8DT1zis64vbW8bH8qHUoDFbhDAz45V65z2PhS9oWPtXTNFJJXPddgd61jATQyje6Zv2Qz",
  "key33": "3Ssi2HbVbNrzfRHsCUBuXUDpZJW4QicgrTsNZBo6tiMJ6sK6rRvbuWKaxP4BJkdwbAhkt5p4FCP2uWvkhiMuo32X",
  "key34": "2268cg2V9r8YeyTTySmVRkRwCfQvd9gs3g7TYfjzJ9FjjZpyDWDoxpPckXAtX6AoAgyzMRbgDfwwfTJzHQD3XokT",
  "key35": "oKPFWok3PNxU6FF6GrSFmTQEgSrveVDUvJMzyGW1HMEqF4C7jgGtVojHifAQfbaXVQAVXY82BgbL8Fd4aseQ9Wv",
  "key36": "46wpGuf7AcYBTFR5nEjDqcpRcu3WA5zhC2iWYty9CCYThp5bQxc5mSECKE69RF2dQuBUtqkyRjzUaRNJdz9Up38C",
  "key37": "2gpHBzDNc7JRynvF3ubyCwvLfMi5X6DZzgjgYTRN5zc4ihD2RR971Fi2k2ET2M1g4UpG1QBfX2osmJ3oieYbztjY",
  "key38": "5dLoU1GNkzz9UwNkv1UA1G3LkPK6zMeNdjskvHjQBJPkp4saTn51tLzpdy5RFYyFwsSCHeTkode4h9YJCGSdL6ik",
  "key39": "5w72fdJuw13aonr77UG6E5R8vfMLnNC5buphgVZXB37eH4YjQrmK36K25RkiSkcS9VKVUPYyd9eWupMupT3sXC1f",
  "key40": "5srronaKCMfuqE69gpxbrqD7s5zrXFqKfqiAxv9WhsVB7c9rxWFidCFkhafTSiHZAYt8raY288vBPjj8QZveXaSH",
  "key41": "2SGcFi1EMuyXx2osSP7nR7sMVTBADD9mWttdtTNjMc6TECYZEixYvEy2uEDRkK9aWnkvbG9BMuwV1P3pXKWX8whW",
  "key42": "5KZoWX4t1ct3u6i63rD1fY1derteHGNxjJK31r9aB4yRUVzrMW4P2XDPHWskQvDmEN4XJ172R6LrR3wBM6hK39t3",
  "key43": "3dN5j8ppYRczAACtv4rZ2mAbbJdYduJzpcGp271D3amZRcTMyJnVDH4NyHb3pD7fMioWLEZfVzD2ZpkMrhQTUobs",
  "key44": "4mDqD4nR5h5VCoAfoWWDHDk56AJwF2x5PN82hPQRhqnkjekQpgsZMhC3dAzuq3hWLPdc61J6kkiSBSrAo5oEAwyS",
  "key45": "57nGSbbyg5Jo1i8yuxHV5EeYUobnGvZh7jdA7YbXpxHZoNZjDoVnwUPchAtvDW832aDhP3daPr7XpHnjU4TMDHhq"
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
