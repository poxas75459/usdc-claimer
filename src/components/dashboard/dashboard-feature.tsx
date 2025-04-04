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
    "2ZMS6JDLXyeACsShHWB2pmzsLJAcrVNvF6JwivJ1nrCBnJ2H9zjb6xxS4e8tMmFq9Z5KiAT45EqVq6u9teNw5FGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJiUsDiyYLMEbpgtBjs3ozdbio53vNWLhwmzJMbAXmgnbpGS8yWacUbq6hFHvJ8JWTXwocZRe9ikuTovRDAMeVs",
  "key1": "EQLqWteXJ5ZHLpHAHFhaj51vqDZJsBwJHm5KEQtWqdZbd2yppJCcy92xBHpWLdREWgregt32EAYUamthcHH6Rwd",
  "key2": "4WW3fH9BB5X331dTWh1EfSbxKkodsErPLYVuv6syEEU6oxbhpxpV1suhv6EJoDZRLbwMbjjnawKQJXiGnakBeXLp",
  "key3": "4XexWdBgxY53GDKMDWCRyE35mS9jp7oqogmAu16FULRS6pUyyKvyyPVyT5Pk3cpUEu9o6TKz1SKH5H4ahpoMA4mC",
  "key4": "4GCkHU94XGcfy2VBetNX4idGZFczVKjeQ46uiW3HKEVEYGYjKZTecaD4TSyTR17tyEbEpfnCmHwt9Raobh9UhN4i",
  "key5": "56r1uqX6XTKu5fsW9vtBTTmbvNARDdYXcJu4FVTKYRr1KQLHY2ni5jayuwqRVDn6sMQmY9RgFWwJxKLf8KRyifRz",
  "key6": "47VGBjLiDgJchqvG4zbiTdvANXaWYHgLbcZQFKJDForbzp6C56g7iyzV52tKfEb3s7SpqExvDpwXGpbFmiQX65Fr",
  "key7": "2nV8vdgHKgMNJ2mJk9pddnjpLvzsFuforToaPdCKkZnNucAWydAsX931fZ1ZChmDEPy9X3ET2cSt1jP7ZZxBFV7r",
  "key8": "2JuY8KF8onFxe2ENf9MQBn9WXneKenN3jYNVd8p4kbP5QBKZ79vjV2ubyVZw3vjVzKZhjXURbuFKACMQ4x6wHxnP",
  "key9": "5fUr57qkBwYcrEjU1RYbiSepXpnn3QJsDgURFuaRGuhH11Lhsvkrhhr7mQLP3ugCxqCyZxXSMJBwD1Tbg2c59cq2",
  "key10": "3XhmvsBkPjFavb3XvgNQoLuv28NaQXdsznrHZQnRo6z5VgSppJ87yQgfSqi9biyMuEiM4sKso65oHGPPwDPm2196",
  "key11": "5fDxve7ZDXj7rkHQTk6VG8eKByfKdS5TqfsspRqG3mc5rjyXtintEn5489qT1oRF5sqtbwc1f5epx7u2bUArcjpX",
  "key12": "44JMoh81aV8tGDdbgP9hg8DVBzmpQrNttsJsVizPLwkuGrdWqSZeQa97SmTbpUtkdrMVpmTDRtSxTPM7yfNDnq1g",
  "key13": "66BvhRM54JsFo9APwWDsbXMZZBGevBSTMCaQzYvuU6TyDkoiSXG9fkje39Eu5DL9rxiTgwdDHzPNk7udhPFFaYy2",
  "key14": "3KBJEFtbkTMoJfvm4Lg91NLg9hpQQKvYTPRet44J8infwbRo1B9DirBkbKmabm8PeU7AL94SPGe3iPbqSK6XLHZ",
  "key15": "4MVfenLREkikaJoRVTsWAo2NNPej8mnPM2zz9cDF22yaqafBpnZjHQJ3yzVqrJ6XfFjkgUCkGZbyyrRkDiCiPLm1",
  "key16": "iXeb6H5cGfMGMQUJvqLfQzpN5ps7gLDzkQoLzbN3PmgB5CiAB79dZKFAnZpBccoEY1WHu5qqJtGCLCyd6vt2LLg",
  "key17": "5H5XtPbcj9EhrTHgrLF47VxUo1qCcEP6zCiefsxXiqUfwnCojE9abhd8a6Hjp3EYgxFYZZ4ddVXqiwfJUsMjund5",
  "key18": "mRmBcz6TNkDUuwyXNr4sc9Xji4FAkigCrwuMKvHD2bVoVMgxpWqqEiS5VfNysmn57gLFqEsP2fQDLE3EXGnkQji",
  "key19": "58Php2hzfFZXXG2S8gabBGSaCasDhvEKb1ATaE1LuLBp6Fr68ti3KMYE39iU4Wswsnminjf9XFU4u66xYn7cXqLD",
  "key20": "55EC5Pwncb5mZbsZnjpNxcdaBfETXzapyTHLbHiGVDpwu2d1S11zf6mXaev2znrosbKp7GXZyBXJ7RswxXejBdVj",
  "key21": "43cugLYQpN9JD8HNRa48jyzRw83Xj35AM7mGg6VZxiZ5ExPqkn7R9mHaeQRzyxqk79xWbcs8PYqRUdkSo9kqwquc",
  "key22": "4k8s4E41w27xNt5FW8VBiUBca57phMezPicSsXaRMEwVgEcdkUdcVMBjQL2g3AC1M6Grw34RguX1pHjPt6j6szqk",
  "key23": "JwcuxE58KKcdH9q2QSiXnB7XBoQFrMrPWRGrgfU6eeWr5iKoPTpZ3gaaxrVz7yviX6W3d48qyM5jcApEat2x8FJ",
  "key24": "3Q5oBrt3YLPHUfoaeQDjQdq9SxsYn85VSV9oTkqiMg5LybM3Hg9ivao6TFzPUWQJMFgN8SSD7HrzPSb7F2iMqEdv",
  "key25": "btcpepzQdtqm1cDyN132oWkFoYzBdeKWyRzLdVgmyhXgW8EUSa4iVLPweuXXgEaQnRm1ezYqfu1DTnssQ1z4Yau",
  "key26": "4v9yQQTbdCbiRWk5PKLzAs7kBM9yaVvrzGNTiZNsfExs3LLVBBRau7oofzwohsL9vGwBQXGmBSsdUTzSRfEQLMSs",
  "key27": "4Qdm66K9qzB3DxDoWAHRTuhifuiVi6YY9GwrzXgrTSkYky3EXusFxmnXwgF2wUMKc5L8H6vNhjyHw4f2LHCN3B3J",
  "key28": "61gpnueEJVdqc8oAkP9kusP72Dz9zkqJ8HxfdsWKxs5L3jo8mSWaBpqiZhkCDxb86b2Nwa1SvthdhX7RZkmWjiUg",
  "key29": "3jtaNwKUDXHEocvRGtXvqaBFPY842FonZetHHD4FpcvxGs8AhsrgQ8i86kzzt6PGDdroqoGRt3AZ2gkWWEydzsLw",
  "key30": "44KCNN7FoQkcDHwjx4CznihKSCutAX1B4PwpKQh22DCZVf1ntBMY2AXkLzjYG4ZfNWsfTv53A6VsXRFn3MCuFgH9",
  "key31": "2EVfHSBakhfAp2s3qDci1s2JpqLBMgZhHCrtsQ11SVaHkLYDxK9xC59v1U9RRSJYFvQp5JDk4Tq8zPt67k6HDkqT",
  "key32": "4fV5Cmos9MiADKN98eL6xPihCbVzziztpLn89R2qcpg9xWmKU1dRRGmTJ5QznYdrMaCjYgs4j3qn1c1sTzEfFceU",
  "key33": "5LR4hCL6utGQdrBsPwmg5yKDdCcvXmMfh8ikfNXzaJDJvHx92DwnDj4CFxjucBz8dUN9mAuXGWAxrYTAiqYiMCEM",
  "key34": "3p5tbzyJJvTExDKDDXZ4pXUaHGrsEMcjyPbzkwaV2ioUbhSdgmeyPjMiVa8x2wk9ynLg2xUujXmkiiyqfr8PBwRG",
  "key35": "2Sx2rH8544VQhgM3s6ixdrwVPqf9utcqUfcMfV33PF5wL8DkQjx43VLZRUppWjZfEgivNFXtycpfHXm13V1BShTr",
  "key36": "2KBNYkqWqU4Va4RE1R3DrCWZqBmMHXtzJPQBKtSEbaXajze8YxWCvs8vnrPhWy2AdcHeTUHE65mV95EXiJh9Qi6s",
  "key37": "2XKeNV72bMVo5Ry6qGcw6qUJMpjZ4r42e6VUhAceoF7aqtNeWWXMACew6nygEKayWnUmiPMWfm3ZHQXH8ctte2DT",
  "key38": "2NDNVUHNDvpnwHJ4o77mB5ADUFGhYojbWfiAhpEQggwRcc8bZwozygFUEpmNSthHFdrtP6w6CxUnrHhUTKiqtBR8",
  "key39": "2QqxePGLB97NP6mrGisQ331DXDzbUdAkgH6jU9eNLeyVizxEeFKaVgGpgmum8jAdiEeNCSiLAsPDkcVu1C46nFDQ",
  "key40": "4BumvN87GjVwBvvNKyQpKRwtrnKZnVAySCryKA5Avn9AQRN9zJ3vCPBHoobLG2kyTGBriPBFvXv9Z6QoRdmtrDij",
  "key41": "5JwytUgU6hti1qubK9qKGWnQEPGZUPwiMbh6pgMzaJT7uTwopBNrVN1giziWuH9piH27aPmfhbAHMbEQuV5yAccv",
  "key42": "2kCKJZdhWUjCUzwa6kHLNZmqR4oo6ysdga1tiRtp4cYkCXX9rLFiDmsX3Mqm3e1BeaiN831teEriTfTzVBbG94vp"
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
