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
    "5Wmyx61f2M9is4Jgq2knmutVCk2Qh49PPGoFj5UAZ61F3dVEwihLM4cqTQ1Gepv9gcCRZitXTYuhorpQwsq5rzxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwiTJSjJjUcEhd6cTWnG24kqFGovafvwVHPC79R1Wdo91vf3NsY7LLr4vEto9X6aSjRx412TBBVQ83M6Hkkcznq",
  "key1": "2npPMAiX5bAnraPgpcsBwqJANFjiwaU675Se7tzc6sKDozfvynxSb5oMsTYwToH4dMJv6AUFsN5J6qFfGtiP4pzJ",
  "key2": "ezeC3tRqDEbkfuUvEwHzpAcaMBcDw3QPk3AqMafyLhJsv9uazEJHbJvMkMHqsdfpmmVwFxLdTMBrXnMJSZE9pCs",
  "key3": "67RQf66vS8dgziS4fPhmjDewGg1HDnWaByvhx8SBVjJZPNKgPk8euytrnML9P7LJGRmgt4MFooWr1p4oxTHyoi3Y",
  "key4": "3dRo3sizFKBKc6ngwQoL1YnMFdeXAH745JdbeRntYAuoost2fA1egGRmGaDWFqAXxBTouYbQizEWgLkciCG12xqE",
  "key5": "2cxygxqi1ipsBt791JS3vHVyTBGbDq9inNErruyFA2Kef47YpxJUnwERQ159SA7LyXG7AgV7nBMcmMmpuCUhtc8U",
  "key6": "4UPHqXGMXzCcWmFCtiDiBrQ2PpinQhSvCC2ZDTERHJ7bMmMbsuWVYSWmYiK6j3BfQ8iaeWqF1ioAZzBFt1QFX19K",
  "key7": "c9rpBdw9AgWBKGzLUmf9naHZWqW5tnkTEqBvy2tHB65CbRvAn1WHV7c34qEMSRdB44u7H2BLUEQjnHxqtLncYAi",
  "key8": "4HFeC2CU6nEBv7wYdyRdeYaX5vdTXS7dDqCf5JzVUF4a7Li5H287G8dqWCPdi8SCVsRxFKcPrqNT2ZbEYK4zYUvU",
  "key9": "kybjXv2GrUzUkob8n53eigRAoTimgZurBtDoSvnnQronRUBHaYxt4jCPuK28VyScDiGCUDNxikDxhPVdU8FSkjN",
  "key10": "DWBXVySt9pyztLiN6k11oskgK5PUQFcKA6KtcsoZmy1dyQYPDSENS8UfuP5dXrDop3KesUMUeryfHwdC5N9sNAE",
  "key11": "2ZijtxNHxorq8hUs6BwUXsLk84csGufaUDkVZJj2mtoT8FrULG9HbH1AXHip4QJDXHDJKHvfNJwdF1Ju5adYKzrn",
  "key12": "3foZQ43uGQ6mK2vZeVdUbMMb1Aw5zzpgfng7NFXuw1PSFqiFurB3nCkAgBPxBDbMgZP361zbsAitUidDzPEqXkZq",
  "key13": "3CnZ64fk1yYEnTWjyZfnXGgK9yUV7uDwoZmwwyTt91EBHZxaLowXM8TFSAQTLeBUrZ6EjV7yDjvCCDty92NoSVLe",
  "key14": "3tHQZfKHkbWUSfcud4JYcoyqkRpCu9M69DnniSU3E2G6AjFniz4G5qZiykJinyMxA6jfR8juEkQkKG1W3YEj9FwJ",
  "key15": "5mF89pQrcQXna5Lkm8Hhm89iWyFrRJNsANq3X5uLhw7uwQHZVAHac2JnvM16hFLqQAjMbsvrnYSbvRFX7PnTuyjC",
  "key16": "3wfSDAfzjnY3FVCZE9WmXpa8fGCtCTeAxPJVG6zvP9JZdi9qnp8jHpCVffTHrY2YCRdUJYhxLCXgZcjjXqubQRSH",
  "key17": "29npbFJzpX9qV2JvZzTjHumHzBiEUpbjKebk4f2rTBkc1pKxXfCC2WW7aHpSGKAMtPrbS8feP9KENRSUVrHfSQgt",
  "key18": "2opevMHSwfgN46QssRToC7NeyiQ92F55R2QH4vtEGTV29YXCqEz15i8rbSV6jEywZj5uX35KTFdbUTJepikP3JAK",
  "key19": "5zfexwYQ7CyAH9QcLD8EaZ4jj86AUfNBGhZM4FFxVFSfJVNjGypyYiUGsEAEJ5ieeBSgJTxJKFTeH8ZZNANJD8Nn",
  "key20": "3dgZubhhafGr8GFyry5vKR2mQwTGmFdQKUbxw267AWjGm2zrTUFwMBrJrSzY6rkpM7RjKm9KS2tc2h4JpyCzL5Hc",
  "key21": "5SnWhgq5fZKGtF2APQXiCbZvjpCayZsv84idLUXxWGTzWHanBqfpnNcsP1xctVpsqv75mXXJvEwVdvCXAS4LH7hx",
  "key22": "5wgjLLag1vrgLiZ5cA61wBLLHmn8SdyKAa3yFjJ7v7R4BVJMsicXqWAYZaKUsdcHrz9nMSZkMBg7oGrfgF8dPZnU",
  "key23": "3LmpjCBgr74EBAVuXUEJTJuev6E7sHWd9c8Hh2kFjYPUrsA2FXU7HQRtwURHMTxXUTWLYpmo8XzMXG5DGme5yC6L",
  "key24": "5pCwRTFsxCBkyKGsxdypd8mbfcWNvHx5F8qEoPjeJZgx2PrM2rN96jXq2zuiPAZQdDek5EfH67sxfTPy9kwbqExy",
  "key25": "2YmkFTBYBaNtU14i8asTzP16b6CDMduP33TpUPt6Jic8x2m4U3KGqJohjot4LFqhLCqJwgxmJteEqNvVemkwCj82",
  "key26": "2hKphGJMzsUonqXiuVo6FJqnxCuBBCTPW3c562cGkniCTu4e6BZp1YxHu8TuxMdTfkPMNkq3MtH1viGPkudeHX7Z",
  "key27": "5AHqJpFhGjpPPutBpQ1NavnEs1UU69cSUBJ2Yi4fk38rC7N73guqLZCmH3pprcX9g3iuic8PEPsc3A1Qb3HjqaUE",
  "key28": "5qUpjTCvNt8NsZvECWbwNHyuJe4q68sQaTbJfjtS3DhvV4ePFJtTzcC9tbVkcrB5ynXSbauYjQWf6mAG8sqFxboe",
  "key29": "52tiiBWN1fJnFs7KUJAkFCQTAQqXFPvtRhQx3t3gg6hsUJHjXuGDVrndAAsHJhtp8aEi49fnuYUTC3a7R4tmHC8q",
  "key30": "jRMmkz7B2W6BxB2vLqogyM1VqnfB2kseDFVfTMmvee5EpanBan6rb2Ytxf8SghwUiHAfbmRAYxeRe57jjqJszw2",
  "key31": "5GdrchwXP32XQZpN8srwkQsUgymgRNFfeea4izxspqMP9VnHHR4MrMuAY6CGUAYAWVFZj2QQD5iqDK4g6khFLR5g",
  "key32": "3QMZK3uyQz9vVv3SH81YV3xLbbbQWoWo3oTgSYdz5GZb57RxZYq5HQLQcA8Bsd9SGoJFgokb7JcuSPqE3akUB5NL",
  "key33": "368vXnprAbS65Z7YoRwjsdXsEScFF8iJ8gBVfDiRh93zawdehhsZv5LbjysiMBPLX15MoEdY9r2iy2HCwGwRgSyM",
  "key34": "5YtQLGM7oRcNpT1oyGXVPYh41aXPA7E3RWMn2iQ5ES6qf28BVwdy4ctShViDmCzZ5S9PdJmCJfQAmhXaM4eb1PP4",
  "key35": "VtEUU4tZFhgHH2q2WtEafxjPyAUYtq98S4J53fd8gM5LEvfLQUtzbdAbT2Wti2Y7m1p8JCMN1UmMpVAKm8EfpZm",
  "key36": "43QSgqbMhWGwYDNWEEGigv3fFKwmQZnBkAV5JVdcXPBu3skqRggC2ZMhyFvZn6QBTirh99MFnyRnzYJQPqVUbps1",
  "key37": "5nb4FkNwdTaa1V3ZnY6AbKKBJfjDW39xJ9oLz8vfkLSLLeA4aQtghiyy4cvdrVezx2EuhxB4X6ABPH1aMjb5N2mz",
  "key38": "5DFzdLyQgzqBRmmsygTZG72Ho3D5saWQwcva9jdzk7utToqJ5UEi7HRaeHE5F5Ti7WvmtoGrdsVoPT15Nd7ABgyf",
  "key39": "aeZ8TPEUd8jxd7QkyrnMNTEpqhWJXggFi64f2EQ34UhL5aA3JA8Uo1ZWmb4thaciY6nkF53DXVoGa1EkdGGbHyM",
  "key40": "413T1eYUx6qRbiXRfbEUxHHP5hwpxtk4LFLbsY9U7zbo2FTy9qgF2TQh8jQrVEDNpZzZ42c9QyrsrEh7efZsSNNB"
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
