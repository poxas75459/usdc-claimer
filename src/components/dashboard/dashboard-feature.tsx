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
    "43CXLd1WY6Tp7nYUmynPL2gVV1R8wGHRm9saXA9HFXezF5TnBeb7e1DWMUx4d9LozgaVBshRxvMuWBejP8rA4zZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grVEDNW8tv9jkF5CLQyi7DmtxsdEHnVLq3N99SetK4EL7N6F7DuPhhHAKwxkZZzgpEJcSkiJHq5ZenxbK3d33Mj",
  "key1": "38sFEtKL5uewnks2nNqCtwfvyVfqSfk8ADoGUSx6e5FJfxRZZzuB861sbRZCr2WHRMxkCtPjTZ44MshCmMWhB6H4",
  "key2": "2yPPm9HqeFP5jge5whwnwUWfaKNrxch1cY7omCMXdYvq6uVCcsAFJz3RunnvZnY3SZ1TAmvM7ejBXguEaDXKtEnq",
  "key3": "2U4NudmnS2DQ15qfUbQPKGfUwY3mPXbpku7W1kvzURkTjQf2wiLmrEd4k8XSQeo6mV1GQX3tJR9X7cUHmMLQeyeF",
  "key4": "4H3fk6puH14s34d6M4bZ2osbzoS5pWfknVcQABeKM8xbL3aj1ZDawYoHNrghhiSuzEBgndH5fndcjSEq4DNbKSbf",
  "key5": "2i8W72oCFYF8jNAJvBhh7ZuzJRehZBF1jdKKwGoW5JauxH3Xd92sv6RMHhTtXRawGKkmBcP4FRGewAYHcoJCcBRV",
  "key6": "4VUvq2PQvFxfvBNp2voPL9sFQuYRxNjUDwPnF2gKFkUtBEKUTw5U9zwLFxDFcz4ZmAc65SNiX7bf8UKzYEpgYYZ4",
  "key7": "5RacfbKbFeQC6itLT3T8icuJx9gyiyN1HTkD3seP9v73DLUXQkwhB31PR3wSdUezAD6Sk9QLnAetzVFf775c2sJB",
  "key8": "Qcmwc4YabCSiujHy4SMYgYG1vikjgi6HtqiL86BMXGChasjsLtmseegmbppwXsJbms18Q3WoeFqicLKHNMT8veh",
  "key9": "23rHSYQjbthorfc2cPYXLUVZ56PEYvjUV4LRVrAQfutRCqMaCtaXurXgehAhWUSyi4oaQE3XMe5ZHFYx6YZG9JwG",
  "key10": "2T7wKBzWyD71Z5XfrQfxcrNpjnaS3QSEitK35n6DsQrMYPYFsu2esQd4NEd1gyayy2qaxLYQ7saNnfLi92yjPK8i",
  "key11": "59du5XLGygAkq8nE3HwkTrE8znmZ1u3Kdq6w5Zfh2QWSXjbmNiDzH96vtSpSF2WP76TB1YrCx8r863uYQFFCNQhx",
  "key12": "kwFdfGottj5Fht3EPfw7TgKdnwo2d9FJaswEdvaVMVZfBnndcWYZZuGRznbWdBsuRndz2XdysCv9gHq5FmjowAN",
  "key13": "44dePBbhQhikyraMncPxzTodbDfQQH7XPfL4h5Xgai34sqJSWoxEi1gLDSngoqvAnRiLXmjS1bF51vzYqqKCzayK",
  "key14": "4G1gXvScTVN5HKhsv7wEHqEU7jb8UFQGkC6FZF8f4QbCg5TT1XTs5jdXZiWSNevRkctrUsL2i1tgmEXExsF4fNse",
  "key15": "JLTRnaZuRGuon2SkPzrdk2Bmsxy8yzuoa4nh4QvsfRybb1HkhV8zpLQAHSqjfgYg4YamE27V1DAeiiz5Jfd5nHA",
  "key16": "47FxW2Md8AYaGmShyqZqS8HaQo957YpVWCeCeEiq4qkrsCiyRZjrYBaAVyLhuwVyYp7hjssGGZoEtNbYBDyT8gVP",
  "key17": "2Lv7ceFU8ZZYNXc4sSdnPLrsfu7hN4nQutP2mGYv6Ek3LEm8ZuNEzPnUb2pTKdQGrMcxhQbYQUFuMiUCY7Mg7PuU",
  "key18": "53voiPx6BERqx9LN6xKQ5EPJf8jAi89avpDzEAzDtM8QuKd5ePofzH3FKYmYws2ENhFbnMimDqGC6CqhXexxCyV7",
  "key19": "62fwJmenZVJDHbg8g3GJ29KyucEPhngsWpDXz7gZg1mpZbY5ucXhFyssDyjxzheAC8tqTVzv2EHRmriy1ZeLB7gk",
  "key20": "2scm35PvK6EDAMJG9gxv4VGx5g5SS771xwdi5Uv64dRVK5Z1NzHXdwavfmyM6JDrnEPd3Q4hBwSVJn9hPm6vam4v",
  "key21": "4y5hSueuM9dvw6b8Bez8mTccoFQGkugzNP1n3Y5k8JpzjZcU1ZMx2Cxfhrd5y2PCKf75cdSXqdZ3d8hG6Y8Eu9Dp",
  "key22": "5kFurTqr4dXv2zdYY6zGtzua4X4SDyzyhF4qPBbXfrmBEET9L9Ga3N2Po1U9eZXbXoJ3kWAATUey9EDrWENex3KA",
  "key23": "3n2CwF4xSLNEDNZJccXK315MvtCkXaPLTngxdGRH5UjKHG51Ykz2aChxT3KBZJq5pSsXiWBKNAoY9aEJRHzDwFng",
  "key24": "2yfMiwyfihe9NU7zeBNFs6KWRQ9AwUMnGGdve172cqb9K7BswWEvGvGhcNNca97dZFhgtHbSpgYq8yurrKiLdbvw",
  "key25": "4yjsyzuV7DaJWTmNphzcvf23kEm3L58UWe9H5VKSesDkVKKgioWVmgyUYtNdLfboXWqcqHdwMEUNbHELpQbYe3kE",
  "key26": "2pqxV5tghtj9zuoQrmAHeP6AsCS3y66rQaapvEqK5KhRH2gCd3TrQamAtH8946tRY6LBeJGWt9cyU7Xa3zNab8bn",
  "key27": "4VBSX9or9jB6ui6ZX3JEeMpAdLHAG9VGNPg8uiRrpUKgaEU7PsnLhsZcxkwKSfq9ij5o9XYrVA56MNY2mdpqSGP3",
  "key28": "3K629dP5JEDQxM8wK4xVqoXDXDbWXn6ESFqBsWZuoieQbbbQJDTqbFhG1UmQ56PPys6CcgeRubpFZnThgsa9FuvB",
  "key29": "27SkRVJweumLKH3dXvt4FhXH9PP8TDfTAD3byVzb4txkTJEHGdUCMXWx1iSAHRuwHsWLDtgsbi4wzbQQGZrkadbq",
  "key30": "2YvJWWb71SNnjbqwaU2KDSC9zsQKBUpdWNcjSwH7cmACHG3t21iyn3gJ9kyoH6fvHym11AgA5ABQGGtQ6otrrS4z",
  "key31": "5U8f4dFdtXJNHwhZ8gPGCh9kUXvYVg9frwUiZ2zDybC4nyP3KCC4HeZ6JFYzPkFPGWWpGojGm6BCXXeDTH5UbZqy",
  "key32": "swasjNrB5yosip5NMWebUxzFf94bLcbbS1ehjGfkmiJGttV7vpoPBtw95L1NMJG82QPj6bnq4vuMMmPVoMnArTt",
  "key33": "6625MMCqtd9ZFoRcuYxMzFk1Hyp1QSW3aWzK87puha3KeXMBEFEBxvvv9MSNB9BQCRF9m6D5GNTyZ6eTcVh4g3S9",
  "key34": "3sVCVFhc2CvqreECQpZSJir4FH6YihhAMhK6U5CRDYgMZ9tYuy9PAVVoce7cqCLBfjynMZew8tzpWqsr8jFPwvkZ",
  "key35": "3tGbjVZA9HN2R3UWej4BcXJTj9KyJmRXDokENvEqHeueuis1ydoWpg6vnQ5HpquSzYhHFPGFXhW2CnLJ1Brsh6ni",
  "key36": "3QvLbaafacRmaYeBAnxhVZoHoHXQ4hehhSxnK5ZzBcYfoMDZg5xy7bYirzXyTJBMmqEfPBLbuap82kw4aM4zRx6z",
  "key37": "5CgwnjNQdkrMTrrEEFYxozb5rU3WiMiSBGRdnBViXJnt7XizZCJsRmNN7wnywvVrg1BWj7Yo3Gn5EhLATtE3N4m4",
  "key38": "2zDR68Q2hxnku56zZkjaBgX9knabyUaeUEnarsdM85jVjPsGgLmGXprzkypsjKfvhE9sZHZ2dqLJaUED6E2BWVyM",
  "key39": "3HxxVSH9WfYZSZcnowKSyDMdFu8R5fDX1HHGjHjEVJE2SoRxJVcQwArhJ2smboPsRxX5qx4r6ee7BV7cdwE6kMmR",
  "key40": "5XeLp4aDPjG1puH6YjuTGTJh9ZVVT9FQdwSjUs4Hq1Hgmtm5kzca9kTGZyLiYcQYNyBssh3X5JNQ3ZF8XjeQmPJq",
  "key41": "bhZRzbHteAfJd1QFLFskdaybymYPFKrGGG8i7XhcUXvJ9Es7JNGcvF1iKMxKK6uuouPFnkXbPoQni1Y372C3kvL"
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
