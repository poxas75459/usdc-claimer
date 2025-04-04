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
    "551jPPPTjYqz3LRhTnKBmyRQPHNdKt6xfaTDxpw5KAE5Y157bEgv6C9Sefu4mAaXawYN57jkWg3k3taT4Z3acYuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmEc8dPiCYbpGEGJ8d2zummoKysk8nnd58hGxagFxDGLpJGr8Z1GzGZEVMzvhndW68SLvR2iqGtorc33xwC5xop",
  "key1": "4L32pnFGYip3UgpPT5AjYCPjf8N1nBx878wTFNCMrnWyDKKNc9EJYG4WvcsFEEoRyziMXMG5mKPRCxdinwaWPMen",
  "key2": "4cRcwmukyz5XVXCDimwi1r5NuhW7LVn3qh2rU9G2kPiAWokpd1GnrrXvaCu3g7FcWnbfWN2pwRfCRzjjZuC3ktnC",
  "key3": "3YxUaxav8fTa4HiwUEwKpMAhnZjztbhMbAdY3U6eUcaGvVKW5CPag4CxQw3BVHDijvWFPEQgh2pSbudgThvB5dga",
  "key4": "5Ns2gy4psoBD5yBpbe2hhrKTzjffwTJLCeXcQwRr2HJK9MNirRrY2ZvSDHL5RmzfL7jiyv39pkUezXwsEQpPVPpY",
  "key5": "7qD2nYjy2hJrvU2LpC1ioY5LqgQUcs3mdsDaRiR39bC13cNa4fJZUGaPqdJbrULcwM5JqJoTuuHn8hibdjE67gr",
  "key6": "4UtgwiRkngPMVSWyPXUtspdH4iEfypcy2PKAA1gAWmhSqiet4VM1qv8ez9ge5WJJJyrYNbDgMsDePtvyy7pGf1NQ",
  "key7": "2fBr3wUJAgMsAyMbRgjnFmNEZSFYFU84gdbFeTMxb9SNMbUin1b329um7Y35qVrAKPwt5XUz4HQKqd99qkbjcecH",
  "key8": "3h9we9PfvxhXisXUuJMFXrtdsDj6zqiUr98dTjQu3SYRYLsftPv3LjKQhmSrLQ6pqvDqSzLNw7k3tFtF437tH7Y7",
  "key9": "3kzpkZgH8KUttWbRC6yd22FuwLSC31To8njVT74zMtDg9oPhxZ8vN8PboA8LzPFVe4mFy8ofGke9S9xM6ythmFJK",
  "key10": "2TTtrqmuPFUoCdUqgmLiuVr7LHvCTDJYT5z6XdZKKyHjTvjwPSAt9bVQ7aMidipNSY4Y2d2iTgCCseLqArgvWyWE",
  "key11": "G2j6UeBwv4DYGCHtH5B42SXkWCm9WUJ3qdxEjhuH6jf1TQ23681XWrNyhYWunsdfBF22jrLK9EfV1KrVF76XHPh",
  "key12": "22dZHK3JBAvbkVU74J61TXm1LpSdw4XMr4uqAQgh1v1AmQZZaznb1gX17KtymMbtgBx9MsPq4XEttQYQKvRDjyde",
  "key13": "2xsGo1eX3Xgb7x7ocqZwXE7icVRzZGPGGFzXrD7CXMRB8RxKS8khp11YTZZAR17pAjzAMf1WyK23w73PDEUtDCGu",
  "key14": "23JZ9MVzWe9eiKGjJb8w6W6de4MKB2jPdwtheEGpwB8ui2TgguqtwL1nBMMEkEnVh6CcnstCrotASCkkRAWUvEBo",
  "key15": "3c4zo4NQkhEBP3hfycmVTN8o4ma1x6fXRUkTyqddBjF3DQGWdKR4oWg87FS4kAurdarTP3g1LcB5PnbU17gAfNVL",
  "key16": "4BmwheYCWBcVkazuCirri9LmnRW3zifXP4pykjz6VW42Q5GaEWZwzAS4kD7XcRXkt6jzWqZ7SNAFkCTyZYHdxZyo",
  "key17": "47HYE5ciVWqvJBZ9S74fogWfUWAeJQEk9Pz3MPaN8jryvarJgfDMGw6PK1g4RGubcKvEgkUnLwbfZm3jJcR4FDmA",
  "key18": "5GAvMbS8zqADoHsfEdae9Qzb6tYD8CM4MtAqpyad9dySivL6n3q7FbvDmbBrAATHSE7Q4qixQKg7h7bhTqbza6j",
  "key19": "359jQsJRh7k2gkNKsBg7EKb2vSS38CmU34b3rCjQqus55MUWJPDPvczFiRZZfjEMPwdAMUMWnruufbrGqsE9E6mW",
  "key20": "3XduNo54F72neZVCjcnH5DA1LYzAxJySwDi8uw2Zvgs1zSfNueqaSDpFtZoqMVxSyLR6ZFyZuUd3wkucKKEY4PPU",
  "key21": "2KehNqWKwsZyKmSBhqWyqthNZU7HVRZnafZbN9wX5ovkgPSuhEuBCaCaBh4NNkFPwPkQ27r9nHBavGiRp767fzAU",
  "key22": "bCW4A5DvUsyahRtqCnRProU8A8qEAXb32SLvtwmoSdUfHVdnAB5mMfCvz4JDURJYiqhCYxz8Qs3v7FCgxUj4buR",
  "key23": "Q32fC3Gai3wNC54mmct2NGEoUoieTTynASmFYzFXK7akBLMwtWRMhsNsNNFfmEy8mLotfSaX9wLXKB12Rtgh5fy",
  "key24": "4uDXgSiVDX8JgHhWbmDszeSjU55ZqivnqKccmPDVBx7fMAnctp9AP85eCuJj8YkHha4gZoXCqo7XvXxHvMBctobn",
  "key25": "2fZemxSEsxZ7ceG5t8HQDWBZ3LXz9ueadZic8J9dVobLvKzKCptRdi9Dz4kwnJ3Wp3RLJX3Fo8ss7GtVVrQUW9cn",
  "key26": "4LDURKASgo5nB1ahb2NqwCUw6GSn1HGoAzzG5XkjymN5JdFgS5gkbFDnbGZHeXkhMwG36upYRY6HQaDKBtfNBXPd",
  "key27": "4TWnsWXG4SKyUxcXGeRMtm2dtxFGVJvDk47D331oTcR6fAfWrGRUxFjwD3H9gedKcis3yGU2XahKfi3RLP26TGtt",
  "key28": "3t4AhahKPkmtPfCrpsRJQgJo8dspubcCetj4J4ngj4mVm2h4YH15rtpdhjNJDkFoiKyLY66He46Hd7UTvRmd9NUp",
  "key29": "4MaofhbtGok2zz13k4JQcjhNFDDk7Yo5wpXvhPMRsFeDzydZsxydBJRUqqdRuiDxWm3Kgvz78sPqxj6FXsBPvcd6",
  "key30": "54U3qY2iozPqZFPj4xdFQZ8eekeFpgKtpETMRjtEAs2XnbTayWSaaMXA1gWxdP3TrJqnPNshp2giuBm5E3fmU3kA",
  "key31": "62WWu1ByZg4izqmBk5nMmU1zXMzEsx93CuSS1oP2L3YwmyNJSGN9ZB7qtFxrq2GXR96P14KNLyihZoThfGPKdFn3",
  "key32": "3Hsvt9Bu4pt4LWNfyx9aUx3RpitZ6MauiAQSZQpWK9QBiAZ6iGMk2JwcBHCtRGxB1CBzQLjPnqrUYJqxBfVwP4H1",
  "key33": "499sM6kTesnSmFwms4qHVYLHTSQiQWiW165uZUWbA5cdoYY5D1eqJY5FoFvLmcCFbpaHR2HDzfaL2Qskux8gV4v1",
  "key34": "3y1zvBsUvWFyM7XXTV4irtkWVFgVAievn9LCAPKaxXxPhDi65VQkqrLVvHHQ4kGbXADMfBUGvohwJHRAGqfZiNUk",
  "key35": "3NcP26y9JTu6NsqdMFcRFy1aNPuikxSzXpjo42cZCNwBeWXsgrXx1fNqFXFoUmX3zZdtYP2h6isT9iwUYZFNm4dr",
  "key36": "25ceH5bS8P921nMq3jEjEFbDS4yrCZ7XYKVEeoGCtQXzx4noHSmebsYdmes18zmZLr4fv4xW3S3QPajpWY6dfKdv",
  "key37": "wXw7V9GgqdjEnoSWTjgswMVuX7KogFa4nuftycM44azydSWgYpe7fEc3BRWzc4fZzut4to2kinnrvzLbZh8hkWf",
  "key38": "3iVb5oJntpkqPgzr8PUPk8MJ42iq1VNeRDnSAYPweGZ7RtBKk7peH8h9TkhYptK2f7kpSuoJvw3kXE7WGzyZ17ph",
  "key39": "Sbmhny2NAihQcg6dapXK1cwx6xZngeY78kqNQZsq3gsrM8jRj9ZFoWBdGBNbveuaVTrs6PKYhN32uxmUPggJLW4",
  "key40": "5tBAg9vdTwCLdisSKQjsHANoHtUiTjB9Qer1uYQf5RHJtZVbMMERr6wS4ZoLqocy2jyxGL6g9ggxo88GzpPPe3rE",
  "key41": "np7SmpXT6y8YyNKgScUYBuppDmyvV52pk6yRKMbr6rWgZSvNJuSR5k41fbQCUREyTX6228iL73h1tFapVgMfw4E",
  "key42": "3G3jSLzyATzTRfRL2cxXX1KSKWWgSHWwqjN5KpsFKvpR14GBT1kZiW7CYuZt5hb7rEkgEmCjnZBMVmLNgeFUBvW",
  "key43": "dFCapKXy5K5xcp4vfR531FRsSzvitKobTsRNm2ayadAPJoeCqtWHYFZA246nPK7L6E8CfEtjunLWfgXQkdzN1F3"
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
