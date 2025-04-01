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
    "2m3VfugKaxHrGvRY6HZz2FqJhg5Q8LmnK7Ft1BH7mdU5aXRPwCoJwJVmQStg9Z2h4K9T4jtv3bvxaYsnEWFDt746"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64yXTANuRbEhhbBn8QpobngWA7M9ZxqccNWVi3ZN3xNNoR7cgPWq6N789yhZennD4wrg7NvbmZ7yXs3ShRhbz9iB",
  "key1": "3QVSMAPmuThmqP48hrHyNjaCrhxZbCgWcCsf6F4ezUEuSpayDKtWZ9tRFVd21EPKhytNSHzBgqnPQVYG41PG8VQP",
  "key2": "5uKMLE7awgsufFySEHfHSvKYYLrUS2Mwob6FhCEyjNykJSH2f1rFiEqnuXUxBEEVyx2kCm2KhahqRFLHKw6xv1AV",
  "key3": "3XudGVE3pnpNiXVKVZ5SqbMVq7PBzhmCgeRask253XXMEtTpg12b6BPY8V2FfkLEBsXYeoqRCoPnrk1CLSN43DBA",
  "key4": "339igV2rTmSMaqxKzGbhGgxSEqtUy5P3Lo8npnPdvRaYejFa37Zz5fBF9XEGWriwxv5aCqZr4z5GMiCpZWaugr8y",
  "key5": "5ceQCigwNHLZwFJkYiNFrfu9n2mCwYEwGCNdiNL3LEszgEA6kcSTB97wqsPKQsryMFARcYCXsh6876ciPSDqj3dn",
  "key6": "smzQenoRA2SJT8FUqkcqLa2UfzRaZ5XDwsshiEHkwsU8KopEoqgZhFAZ9fuCWZGqp1QBy32PrKEsjHNB4bWnhXW",
  "key7": "KWfoA3SyquBd5q7Be2hg4j3hqoX3dPXvcJEiYRYCpD6HHmTLGnP7DFV7qeNPrcp4WuGapH1RodvQryzWbwyKy8F",
  "key8": "4c2v9m8LPHL3eenpMCiQxGrkDrQpncWP6kLN8QsRJpVPT2EwtaPJv1hNqb8VuD3GbZY5Hdp1GG6vzmL6ETotZZrD",
  "key9": "2cuggwRkWnvRj28dNh5C4WNEibbc58ktmbLFUNzzURBRbKvRLYcK2r7GLUrp1gRDvbHH8XvX7EKP7o5tN7WjEu3y",
  "key10": "sFFt8SSc4H71meXND3gfhtZeeEF47WoVpA9BNxd98qhWZhQRuE28v8s27o6TjuebaxYcRhNkVGTy7gAPc2VfmBV",
  "key11": "3iCfUG2hqu6cNTpYRncbkW9nQg94SFZhMvieapVBuU3crR2AphUJx3hEB36bFUYC1WUz7vZhEfB2erxUith5PZpu",
  "key12": "57uaivUv573C8r5rdSm3EsENUziV4F5znep7zBWjR1fGcx3SJ2wG2hVstXXVF8RjCr32izsqSjbUxL1CVfjbqBdB",
  "key13": "2PTHhaXsJYzi5kRgCeKgMFfVNjeWfgRAWiii985bRWgz8LsZVvUg9tXHErAn8Wq5gq4mG429whurXnwPri8K8cyW",
  "key14": "63Ryx2q3G2r4BMT7LsJdxF4hxqyRGoRs5Y4wUL8cqANiu3qH1QqCWfRkhtvATwhTN5Vp4u6oDghd5yUNL9JDY3VU",
  "key15": "TQASxJfR6tosB1huFRC4YjzqEe88p2B7pFZPD4wnPvNvSs6gYShn33qtAJKGUx3jScSaGsQNoSs8kadaCC7tfW7",
  "key16": "JKAzpbEhSdtppayMxaqxeEgKDuB94HSYqCwSxYfsLZGroKxU4CJtCfrnJwqbs9qZw11wFBsjvR1QiE9sSuEQnQu",
  "key17": "51L3J1R8K8RqF2R1bMiiVY42QT8VCj3GFPtPhKLBA7g6oRcDCLBvvG7M7wpPEPMft9ebg5C8JDF95EX8h3hZTT4J",
  "key18": "osNbyrLXWwcCtPvDgAMMrQhcRpMnikququ1J3Z8WLyhpP8whuW4w9MV9PD3XBUXff1hf3FX8AdQ6oD453wV5jaK",
  "key19": "okoTsMcHKXqZfbG8sqk3SJhM93nmWMDfwmo4oNrYv9yivzvtG5oJnDNmBdG1yvvE2PtyXF2W6qednF3UXHRAVKj",
  "key20": "5B2NtLzHduPo1j3Eoz2rYxBTCnx6rnvMvm9Vm1g4WhXCAbzNXqc6Rdw7qpbEXHzHQvCdnxpMy2FbuCHnhc6sh239",
  "key21": "4WKiQC3x7mWLNfuevADkEXjhwaWy2KDbG88Z5rYhKxW3Ah5odwALb2UMYGKvKTiPUf8HvZnCTFxKY843Ft3jiPGB",
  "key22": "3D9Xc8SLbmhyJAu77K4MQvMarL3gejX3yQXcqjkvE55W8b7RNA8Dg26F7xt2UhnSnYzEyh2jeEkmHLi37wmEuR94",
  "key23": "3ChaSqXw6gEgdDjgMZ88usegs15GKYLrL6ab42UusVvy1Uq2XYrHGymd1kDueYDBZPMSSNWzFDgvJBPLmJKwK9ZS",
  "key24": "3azUKPbChrDmYcaNKsd5nVFq1G7KBPcNhmovhggAnwhnSayHNXnQb7dcj9xDfWcK3xHiCPxwbi7873ZgaSzQWTwf",
  "key25": "39yipdPDSGKVkMSiQzqbiYhfonq6GZQvoznpApkeCW25sZZe4ENAWJ5DUNhXTXnUBV5ExEVzYhMBiCet19BknZXo",
  "key26": "4L5NMXSBAb7dHcfBGnZBXWxb4JfN1VbUk1QeXqSFqeSbqwJZZCA4hX6wbyZjfbY2dKMLAW3Vted8gLMgxKATjjvk",
  "key27": "4kebUcFkbwpGC3jRNr8V4o6pJERtUfAxxxtBWE4xNS2JQipWHvPPdF2Tn6vxxND6wVSgSNKGfxfxDqu9GDuW8NSq",
  "key28": "65LqBGNhtdhjjhTxxg816UUSR528Yt11QfzAwHfHBrK4sJH8kNtCdCzTrcYS3wAc9uok9mxiwx4hvKF9vLUY2rYo",
  "key29": "JQMsRLDF8EnCuu1T38q3qvX7LaWxFCSG9UfjKGZYej1grx2RtNZiWfSjquYGoD83W5zogby928hEY5417Xz2W2r",
  "key30": "3AZTMJ3uHEoVU5iVZwXW4r69f7UFztdEBWBnbD6rt4AAYKN18gjkKtC4r3VARyFbYmjDYQf9QtZkqoew5Ms2ANva",
  "key31": "26ACgxtkgzGZ275u5XUuEJyUf5GQWrhokYBUbcfnfBpAry7kLbxLkBNPd4hWH7XbiuLSjcFytg3Q96d7NySmm3Pw",
  "key32": "yjr9dayy6KCX3AC3pYtZwVwxFCtQbmQeyDUwi2Wp1KwdTXPXmsuyz24L6rPZDLm7mU1MpL3Yb7px9PBExA3ge23",
  "key33": "215qKtEFmNSFYEXU99FFK5hqZ6b8A8x1B4AXBijarRu4aWd8Ho9HpTa6tsHRkNJgj7g6q9aXjWkPREfMuweVaoAw",
  "key34": "2NvK63bNrsF8yVGqRZPfQeidRAbpxW7sQyRSvKbVqSc9ENVi9S32Lzhndq5Nz2dtUmVZF2KXBy2kdvLf7SMMgupC",
  "key35": "KUz9vSWMTT5hukmhbEvPDZRwnvVRaA7zmp3D1sRFsU6erEofXe4sm5JokdAxyjBPnVUYeoyym7HgXB83gi3L917",
  "key36": "vDCh9iHtHEeRE5GJhxPLaChv8cXMJUbgb7ZYQKMmx3VUQPC2KcH9NwfU2LKoLxKTWqU4yZX6L97KBTsfxUD5nJq",
  "key37": "5mxuQasPFxze2rNHgjZAD4Eh2NWSBMgKivS5U8AF8fGLDv4KjFzGiqYj7XEfeEsJgsK6zjMfs3bU3eha363kNnj7",
  "key38": "5fUjApR1ocMMBFQQZ5ivtuxTQUqadfGH9PTpVpspzCSjLQ2fj54oCttsMLjLSEuzf9QSpsgmgcEkAbve8pzgEeqe",
  "key39": "26tL42Nm6NSjEripuSinVxSQsLnv7wxXLrZQegpuy5Lwe4mKLpCyBRGSBya36kQ68zVNu4xqPpqf14fUd96wwS15",
  "key40": "4ZGHcHGh4H5ScowxZkqnCALiJU6jMJvQgqrAnWy571QK18TnHnwBqodxQVwNFBfqtu9cuLvKf4DDTQnQxA5j8K4H",
  "key41": "EKHPpUc8yUerxpHz9SEijTZ7kWxqoprA85nVugaSYnnUicP8uTx5wsHaiMqBxWErtaNGdsrYfWGBS5ieSRxzeJd",
  "key42": "2U5V4BMUdj5GpPBarA1GwAxoA7VFtumSBTNidu8aXKN3PcaeKr1EAPDvcNA6x7RVterdgp2jvikg8EcYM93JVwAi"
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
