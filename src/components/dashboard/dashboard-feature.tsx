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
    "9iVLPJBGeAr7ATatEtG4BLbWQLdrGdbPF3exwcCLHQMr8aijWaEvXYci7S9Ct2DcFQNKyUwcB9GbukTdz784TXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41SrWCS6UetNgLUcJrR8mZCeUppnzNNSRQV2JHa6mkKw56V1P7HbU9SzNHf3ZMafL3Q6S3mE4xxEZWwjrQAdyYrr",
  "key1": "JGppkEXncNTcSz7CqXhctuJsXcGXcWG685xHGuQzSGCo8EU11ApXpAvP3uPUBk83h5M4VH8Exf9vPftR6QYXttb",
  "key2": "7DksScFvF5qaMa2PYsqGjMm7VJyQkCAKhwmJHytJiyo2ZjsAEbgdpEeB9p7rBXP9qQxtcmtQgcDv3Q3EUchnH2a",
  "key3": "5QQhj52fnuoNgTNC7qCm2z867seLFP2UfzqhWjT8iYUwsssdsWJz8xnoSK5Uc7gcxSG9BZHoJuJEGDvLqmny9wJf",
  "key4": "44xS8FZYUqgRj5yXxG5qxGY5T9ZVqqsBxXd5QXpEBssu8kj69QBLs4J2bd5HBpnQL6EYrJowh8YuGbFjyzYPmFjY",
  "key5": "2EJC3JY95rDVguaLoQUqAHZ1f4RpVF1n1C4wmR9Yx38Tz9F61Ac8NfcTQr2AXkJ85dYQWynG6JB7kNCqAfQ3WKsb",
  "key6": "2LCxc2U2dZYNC9U1UAU9pGSA3iRzEeFztvC8sbtw6rf1ZyZZvtkxYYdByrzxK8TkJTpCGk9zkU4ermStatZbH586",
  "key7": "iM67mHW5bn62r481wrRQ5MLys7Trt2U218pQguN56dRzTyULUyEpJVc4iXQiVQLBPysqC9HoP1ht3jw3skS6XRD",
  "key8": "25Fq1cMqkUoABKPvQeZQsvMEFHwrmWHYbp7DYUvMRpBQ9RWV8atnVw6ZNYGCMChwjMZiwfRxJodpPwrDNLamZXMd",
  "key9": "4RURa9j7xQdsMeHiuYPH3Un8G77p44qu5sszYQXtnfUCyzcMNUUpfvVe1omA7HaDTUyPHNaXaanMjXA5tgo8FJXQ",
  "key10": "4SHpgSo8oA1tBwCJfAV2yb3VyQamiCsHgQBtn9PXdJUZ2Kxnk8STXm5yQKhDLJmKYcjUGAYHdqamMrL2YdP6WBjh",
  "key11": "3G9JZQvHvzAWNtGBY3dGQNwDjjRi1RrDNsWKztZNicmKbxC5mj1tmaC8tFFKhQSsmoLg2hLWeMjEmYzj7BTDTz3G",
  "key12": "2DAX14Lw3DYHkw6tWetQGTpZhFKz4w2u62j9kzeNBPw8RAt9oNXWCfr6udtqBGa8TUWMfiEwbrCM9kZe3NMMnLEJ",
  "key13": "5P16w79bH28m7WWzhsNNZqSyszjS7irPBJq7P4Z397M2XB7XjkGNoCq813mQ5ZE4TcqnjMqRN4ieE35tJjXfWb5W",
  "key14": "5FHQLL7wdie78q1fGBJPmPTRksDiY2nKyKaqaf589Xdktmp5J9nqF14X8sVJx6qv8Cr65BF4nBkp2DQ7ubyfYk1E",
  "key15": "ZAgCPh7TUm1yeQxAgGvsFoCde54iTSKyYjyWGsN1Wk8SAx4mZPtMo1eRNdBiQM5jY9C2anM5qsLonFj7HzLkzBh",
  "key16": "5YEF2dUNiLaxvzkjbQuDrJAMsvDZu5Se1dALgSFg6ZkDuuGWfvtvxHVK4MyxfLe4QizBiDVBdfreTzzbVom5nxqh",
  "key17": "eonsHwjYGQLHnERX8j3RLif4UXsGJoJQJqGYVpXgDPTxxULcmxkSh5M4AyFgWpFXTmhaYakhwjSvrSamEgmPwiC",
  "key18": "36tLSUy3xWcmSv4hUzdHXrfRisWRzFHeLReLxmwoyz6sASRPouj2qoxMxK7ot2PHak9cPqgka7N3pHyzoGfPmYRm",
  "key19": "3Fz4bGuVKMncoGU3vSgVMpvcXw5P1RQ34jNanVhFRrMLidn2MG13LXDWzxMKHJ2XpLecyaCdt2g1qyfVDes9BYqx",
  "key20": "4CDVA2G192DVbJ3ZULC4PcNDeVuQu5yPpVZHFpK4UdqSuQnaFF1Xrnw8cHkyQzBVrrKmXJ5rNk5qbPvHVZtDYsDG",
  "key21": "63iFCG8xJWNFC8oG9pbskPNSjREXh1KssG2MGjwKx9AgWGUdyFQoD2Qmf9S8aygJBWxn7vGMBWADPeivYGGrtLdM",
  "key22": "5uPjUQ26hgbBMzTYLqLVW8mzX1Lxbc7rB78tssERbxC6qccdKTqxXXWD7T7EBHghUZW3VmuuK7q8RhwHFKmaJvJT",
  "key23": "3kxBo82H91Bft1Xa3qY6FSAgDDxPWF6XKXou7zJooAQbbchsHXMLvMAWotQkGeSW2byvK7mT974JKXyU2jKsKbG",
  "key24": "MWM52RenMtcKfPUTRSCx91HzPaUGZjsyuXkc7BKGBQYBeXdoWSVZjYNxVn5YqHtBEop7uJEFyHCCR6V1hJiznXB",
  "key25": "5skTn8tAB8CWosmJnerqnbg3mMepzZ2pEaPC9j3zBh1hrXgwtmbsdJ54ErktmzN1Vy53t7feoD542PDw7mwPMA1N",
  "key26": "2Rb4WRqK5ECRJXRZAyr93suD6JKsMNUaQA7TZW3rTEFHMsNnArop8w69LZmiNfpFc3aWDfBd1ZLLXtwCsHAdmusD",
  "key27": "wH6deyY27EG7wco7mQtsPg7y4Vs1aQM8tGgQGiBzEQ3TBLVNXqxa7XPVyJmfKdnmGLC2AvWr95sxh3V8SmZPp1h",
  "key28": "2pxCXPc5DvZrwHdb6mTyKumYbyT6yPFswnnYZeoVgmbCMBC2HNZH2hHPzKWc5PWfcTVnDi7hhd3zmpRkurzfxty7",
  "key29": "4ho9mbFFfyZ79wPfNEM9ZroKgVGY1dkmgQ3CDwPV8BxohSVr6UmnGJEBnQ6Ed2h6jm2b9UACGJGbMtkz3LowVtVT",
  "key30": "N79gsY55NzPF4EUt16k9ytTngY1VAW82cogA2mK817mvJEM3JnMyYsBMDNiG7HP9mhvp8RFF2K91VmVGQjMrvRX",
  "key31": "2MexCCF2WxTezArfk6J7F8e7rN75aCepSZYs4nt7CuXRZQAt5JARuyAA5aWWMtnhnHcBq8avw3FwHPCE5F3S8kJg",
  "key32": "2EQfm1oSuuwh19PngP4Y9iT4iTppJ3fBqGd462Yh6z3tSjReayqSDvZ3yCfuDZSz8wVWbAsJE5XgCK85fJMYxDXh",
  "key33": "33HSen6LzoczXBi36PoEaQBJqD4mciucZXaTSpYumX2atAuvk65Z2d9RcBHfhUoWGY5YZEpDwHkUtBiLBNXfwUcj",
  "key34": "4VDpnLVzVitUyydKoqq3rkyDSGDSY2kdQPz5GsGokHuoFXaGoKXEQF6t6kKDbfZ4iCsi6UaERy7z48F1Y58erkjw",
  "key35": "NjoTpSkN8kP4DcASny5WPYNaQRcrVJ84ocBWSB8ptyCXLh5fqsoKjoEyFiMc8GAmdLNAX4JeE6bAaE1WTpyLnze",
  "key36": "26susiaTvZZfCR2wVKkPuevfQgd1eycqRP8oxKr3W8SUiJgTuaEgR8trrjNRfcw4QhFx4Kizumkhec7QJeBcsgbV",
  "key37": "5en5FAEeBqRVoDMdQF5wPQMbho1qpjUsoaKKWs1tazzdYbFDKKNmsDLavVKSHFWL5ft75KmHaeRQtBp99sW66dBx",
  "key38": "3dvSmdVTCLzmem8wKpFAXoCGE9J2ER2zBb6bGao5MvGaXhKXz58rsbEjm9fu5A7mMXyjGLjRE9xjNCh8zAnW2VhP",
  "key39": "2vxgGuKbNR1a3e4A1w1YhiwwZ22DR6xx82JQHfmEedRXi8Lv4j1Ksb88CmCKW4ToLszz2qFs3JtfHM7Be628CEik",
  "key40": "2o4vdW87eLU2J4Bpx4LgH1KRNvRLqQi32qoL3m9Umk53QYi4yGWPb7UkgXpxckFtBYkQDyzpswikndtivYBSXQwQ",
  "key41": "5EbrkvPYtk7Mg9XecMdQcJEuuoRK4AUFw8J5krqoQtaj9Dfxn684aVrJDcDVCZUetVCojzKJkB48xyjN1nbtiCbV",
  "key42": "3HhZzz7N4rZ7vM62xFCwrGD5V1yNeYJNcFXZHQcxD7Tez7wuASe6ngSoMKFVLYuJWnxQhQyziFp9TDLnX4wjtKpG",
  "key43": "2F91R47mgCSzvxeati1UhwzBmYqSyQ4rUQMDmARt6HcgUMG28tSG18BffshGDDUGT9DPYN3tRA7ZW5uNKMtCawKE",
  "key44": "98VE8vkiNnpTRZUqdrTv73yzmj9AHFAmM6j9TkV6fLJVJ3cpnSHgapfkVizyGGUJ8dg6MN9uehBUrUhVgHgAt2q",
  "key45": "4edY6GFvYUfsdzc9871CZAxophSYnr3CZptZa3E9RQ8AyhWx2ZTQnw2LhaGi2gG3dSuYbRod2fJ2dCmm9f5dJKrp",
  "key46": "QYsZxf61e9RtPc1ubEZ8mQaDS1ZRVC1gdmyapKN6W72yJJASx3s95Uw99rfoGZety44HBZDRKRrt9kgNqJBsus5",
  "key47": "5NAmRKtHzhi732TCXMwnSMCVwhAwYGY7EJDuBeTEZ1xP27KhZ3G2YMBRBaxo5ErHwFLL8pz9j4uXZa6LJ2RHMUcF",
  "key48": "N2TQNX3PnW1GxrHKW7GFeoEtcFM77dLQQcgkbStzDAuoBC3bPq62R7trT1ykSCc9DAzUUjyoULYZtsnuxBg9wUE"
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
