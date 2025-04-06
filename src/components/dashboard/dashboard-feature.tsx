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
    "qX65ZaKMeWp5MXehY7z4oL2Jt4UrKmTRYAo8AXEbKC9Q9N8Nc9t5DC2VVwpNQZMW3i9yvHMQ6NwH2t4MJ9HFnFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HtN3Q96kaDXHK548AxenHaaZrimvRRVoUo4RKBTrdpMyNwEi2AvdgDEMTykYZNGSGtpX32UPUVVQcbsGzvoPHf",
  "key1": "5Q7ijFc1dkmmKYhaRTCmFbfxVbtin8RsgVKBXSFprHtWgrAEFhPxnS8dc3inLfQdSJ5VWD6nnppoLiyvfWXX1uHd",
  "key2": "5dYiy5pzHF4G4U2YJR3jhXt1R2RdmfqWojp96xgAWDCAVtUctadXvre78RRoJGYS1oVE5zMTCKvuMJSphFjJjTDy",
  "key3": "2Ye2v7FjAnjD6cLkdnVTwRvwz8ZCUEMQ1CL9Fegk8UpjTFjenY95mxzCapUQJvXrvM88pHeX1wyH4fwZ6SDFNhsM",
  "key4": "HiWWBC42DB54dwhbjL6d6ANj51zi7nR7pSKKRGJvmyZNCwg1vHX8sUWUmYhGeTPjVPa6XbSwbjZomnRyazfLRsK",
  "key5": "3sxr7Ro1WPLs99iykGKn9EA1YznLneigbJRo6crVe2EtrBZK2YaKEQJeLhEyXkXhBMGkU3Epzb7JmfnddpGrMb1K",
  "key6": "4wr1gz4b9bCPKMyru486yebdJZ3APiS58sQ4FkTanfXMLEPgHmgacYMMpCyEAXcAenZoMRKNXkYzBg52AYtTG5GL",
  "key7": "gPsb5mThZsWrszje8wNjdj3SGgDddiiLFX8kKNJvp6BHqjhXzvHn13Y75XKFm7rariP8SnxdAtBWs5RCB9kn7t7",
  "key8": "3mERNFmQ1FQsVwk19CH368vayvuNsueyL1k16YyvPy6seKAgEcoQUUnV6DcTbkB46NSQs3m9pjVy2b9BoRpskY4T",
  "key9": "2NK6utCU9p2kzKb1Up7J4TgTZaNk5SXXSJP4LNu5vxncUjQF3PKJs3makEcPfvDUu2S7LociBUtLyZM67B5NeQ14",
  "key10": "3wiDBkPBAk55ZnDammGL1rUo1yFCHiKN9ty74Ji61ZYeBpoqqF7TZ2Vy3ViDWz7q2eSzsDGVPZ6iCBEvWJmGATE5",
  "key11": "4wUG9yPAnYUsJ1zxG1uwSimFHQyjjnXDstk8q9H4YGyne4GboPuDbThk4Gi3L1i8vMYReqpxHCLwYomGfVSFXG85",
  "key12": "2CkJ3YRY7HfrZxowL3yuTPPSrRaJgRAa8CTP8XPQ9R8PWBKiQ639QdZD5vX2nqSG5XtB6GHqzCFqj6RBRiTTLrJ4",
  "key13": "2jxU3WgbXwQgf54hfM2rcbSNwf1oYBS2R1Uxnie49eMKBVpAyFQ178NRDqsePnnLtQ4VxK8WhfZ115VWcmgP3xog",
  "key14": "5exCrnVbgq9z1z2skeYzSkPzhFsbruEAurzZfakFWHk9nee3i4uf9JWYw5yTMUzHSVsXLp48VotPSoxY9UyBnvqi",
  "key15": "57cedwENzNdVCMoBvaGo9DM5Rp5YntbDqthgMRDsSQMn9S74C8C7EmDzX7aqo1WHvtJM3aacpqoZgtBYgXguiPkg",
  "key16": "5h58P3vTvvui4jHLE594UfgX16Zfwr3xbircFK9xGwSkaTypwShKBGWBCouuDs1hDW6yg52egVwd1XP4VQvtoNuh",
  "key17": "5rouakrE3bBB4qjdN1dcocwudu5y2aQeWDQ57WLGA5xFdrP5znczsY2WAUsiotV79Z2MqLDMb7MuSXRwo1HJVAsa",
  "key18": "36DtmJANM5FobVwizcPGqEDafvLh28ApNHm7FgG3uM1Fs7aH6B3Ch9NegWsTiVa5GkYUfKPYhBQS9XSqPoGKRQG2",
  "key19": "5PXFQDzNy1veUtoozPq5uRceWUC7KnoaBvKFAxtM3qUuDrbJZLctMK6VJD9fGh7n2GQcQQRUSZKjePZnTHFPSos1",
  "key20": "3QiwPPxdbzNutCunSsTpu8ptd7qNbv286xgW3enAdoGJWr9w9VFxpeqpw8uvXkhyqWskf4uJ3M5bPnJEp9SbJFFs",
  "key21": "kZbpWTjQ5iVeqHE6tSXxFTX9ogofCPpP3Z7sscoUZ4tiDNMZnjvoiyCJ9zsny3dviXHT6uMJr9j3U8fPBECbaLS",
  "key22": "3f87pHdXoj1TqGMhZaF8TGbUMF1fWMg6bMnyavpzqtEbKCzByMCrGPHG5YjHZgKpJy1pLfdpLB1kwC8dhYQaznYA",
  "key23": "2BuwXsvS4vV86AWzBdQtJds6m3dwvqZmc1bHP2cwVwcrFKNFmDM3nd8eXejR9rZqd8husre2bXE6FbgX2cZ7iFv9",
  "key24": "3uMVNrbiTYHAvagtmJQiPQQZRdmN3tTedn6nskzG9WJfD6sbDCqC4FAQz3tJy6nySrRUYHpAwBfHj5XFL5TgTwPj",
  "key25": "2N1vxqdtvaRHpKHYzoVeJxGUCDvnJK37jsQsCtkaeTJiogdXysWYHUeqGPRG3xXMwX3BCNB2jXnNyXjeTSiJP7qQ",
  "key26": "2XGZtMY3BWqgAVHJgNiX5gjS7HMKASb8ktwCGZfArBEsJCMRFTyCiJVv35nk9i8aMtyAsn7UucGaYuux1evdF2Bu",
  "key27": "gGQnXTcefUspbadEhDsPgqJuQekek86gj36oaU9Xwxfwr575ZdHawzpSAbDo9nDYYduoutcV7f44Zb58d6Wh7B7",
  "key28": "5aGpkDkyDZ9op2ew63c33Lur4ERKKGyxX1yzYvuBnu246FB9F1hnM7yRJH9bRKhg2ibBJhQFjZj1W4C16Wi9V1kc",
  "key29": "4QkDH4mgWAXmGkQY3344WzbLDtSUpDrgETk6mC1Sx5RpJUHb2ayrGQkKHiJqvm6bPVbE3xtcVer3Sdvg3vgDvpPm",
  "key30": "33gy7r9GUNhg2wCfmjs9nGbiNvSeHYqpxDLvH9eqgnYECAwajMQkUHBcjiSLXVaTQCpyKJ1j4yGMM23AiBWVny4Y",
  "key31": "5YeYF2P4x7mV5bt5peD4uFRi67YJBWxtyi815naALb8KpRhzaqm4i2RE3zje7s3NLkCSMT1xe8BGxKw38pvvywis",
  "key32": "2gi6sNswpzwMLp45suYzBKNM8j2mweZ9RUZdwAFzkTXj5hBKes6Qv7okXFP7PvFzms7Mjsug927qTuFPn3WtEmaq",
  "key33": "4EMCw2MB3ciijdiiwrGq4nmPHEVpPacapvDFWAsYPWHouK33gt5rC9LZAwNWJ1mnQ8qwRi7fBR8BG7Ei3Gr3wWwt",
  "key34": "3Uruiec56mhSDuba99FVUR82KRvMgg5HBYtbuwGCQ7dw1y5zEg6AucQ5n1yrdsj1nKJjpEw165cdXZDiVW9dYaov"
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
