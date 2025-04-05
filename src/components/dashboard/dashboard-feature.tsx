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
    "3xf8WCbzzm81P2BbRmfxJ3nLscR7MWoZHfSNPvHX4e7z2tYhbkwtKkFuvBH3XUNf4hAQkhreiDg8sPz9abnt3Xz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dnqJKDsUXiyVmkWgwcoFJC9pzKzsZUmNBXwoR2TCW24J8vvBW6V9q6Me5oXVHYM3LE89XHusS9u8i4odgG7h8XU",
  "key1": "5fDcQQYWggEQ5xXqZjX9aXcWTRtQGZ2R9XRrhDkrez3S9RSXanv8d9i4KoWTNPY865GFE1YpZABowEyq78mQZ7GU",
  "key2": "3epvoCjwiPkBADQFpDwhPBFTP3gb4fKxSHDPWBkKm4R8jKZPAmzLWWrDMje3AGtfBqUCqTotRusb28f5fFft6kec",
  "key3": "4PUMbgkmtVnQJ4ajLfaYHwgtfQarekN182Lg9x1XJiAxkunHcMkV6UBeLgXqCW7Hk1DZDy5P6HWCrqPGcgH9SMjf",
  "key4": "3LdGr1r9JNngir81CiUuxprK98CXaYyU27AQ8FFJ89JST1hJW94V9m8Feye6Y2UiYq33wgUZJS8WfV1vUnLUvebm",
  "key5": "4y1ReR2R5zAqNYtRjDUTXMDrNH8MnTFG6XuaPrYHKjU6pKFb95Nt6YdXyzP8oTer3M6vU5sNRa1HVAJXWFM6rJDN",
  "key6": "4JHtypwL5azTaYZYZtkcj4eAuJXrLLopDPyaZu9XVrLNJwHU84dWdX3bZ7B95SKoVP5AqFdL9ZWN1Fs1L5k7SrFt",
  "key7": "n7JXsA5ii67CVGW5SZQhbThVLN4yZBH1wCYKjy7cMopdmmgKqxAmU9jC5TqShxpVPXzbK3VvoYegJaxWTPAPzx7",
  "key8": "2JgRmte42Z2WdSd1xgAA6xcm9GzAVqkq3h4oA4QQMwQ9Sj2jmrvQsYq8vZcDnResa1TZST62vJ7EnHuEF7zTtuof",
  "key9": "pna5vajUWCiaWNqu9pbNzkjw4vHz7pCDtAaqJKouJCRovQeJAz86yzuxuRo4N4UsBpkNQuRUXEgPQhqHGkga9QA",
  "key10": "5cxNrz29JTySD6fD8EGcw1T5YHbCgRKQdpMyu59MfyXZtGMPAbcsWJcVY6fgankyEeDzbcrD7A3612gR6V4FCN6d",
  "key11": "4RFpvDuWhiL2FrN4QCags3sYxtLRyQYJyWhLpaSdGeHaQQ9jaFsQkL9oyoATJqd2GzSe39u7V9GaJyudnPsWDABr",
  "key12": "2wFSsSuW2p7Q4DrADWkDk5wyVbcT2Edh22utM4ijwfGK5JryM9Hywx6j1JAtzgM7wiWUnQW8TX8e7Tc3b2yaaR9Y",
  "key13": "3Np4x1byXMvBDtVo8FP9Jsbz6UBjgCC3fzhNAZ7JHAwvvPVdvhgJ9JmfX11PL2xUedUrdC3zGSzkMjAzNCXFtoti",
  "key14": "5oHtoEdFHj4p4S9pNpbmcCQPud8jrp2Lb4jcPFbDbC6x3tz1UmwYrhD1KuRR1YAovqt4DtNNi2VDf2wVXB7gSduY",
  "key15": "gXjNPEzTp7aSM3eetyHWKcNvtkzeN8jPtuxdftBqbrPPcoPjoAd9SBA5pq1vgtDrK6snaFMvu2LUTdzRxpnRYXM",
  "key16": "3d8XuDqFjuvi3KyZqqx7QYduPHMA1EFfGMyTFCwY9tFUDA2J2dbBbBChRpH6tgBFM7J3LrBVF2ybuiWiPMnHXqFQ",
  "key17": "hZVioWDwN9jwa4vHkRFBQABBz2AZL4g5A2WScmxeM1JvXjjiFqezqviLWeE9bZpw3jqQyWZNooW7diDXGpLaZjU",
  "key18": "WQybofN98iyGYu9eeTX7fUK1fg4Vrp4Dy5bTFgwMApF2kZWKPALyaMHACEvFVY8HxzRWTBayAbvxu9pbxNsR92g",
  "key19": "56DLHYTsLtK3moEvqYvXTkdtAnUfRKxVQwLziv63jrPLsaa5Le4x2NsE12SeVvbC8ChqaoDMLeFSUJbxMSav4S8F",
  "key20": "3GtuZRESBzyXjexiufYTiqPZWnb9dJx2wnAq5AhbKiYYoETa1yLoQa4JE3PurikcGoErU2ZkKj1cz6ukxsuX1E3V",
  "key21": "QjXoYPPgubJNbAhWj6jUNZn4z7Gf13FFYPYPRgurRmKK7f9Fq5v1Ge45FnLnJ9451MecNzVWuMhuE3p4vraFt7H",
  "key22": "BHD6ECrPJxp9V8aG4z8DAHb2BPjuhBsiQ3nJwSyVy9Unf3BspkiCTAe4MBaje8NLteWkPVGTqRM3Q4wjGXL6auh",
  "key23": "7fpqoTudH6LQ5KeQ4wRW9bZFbKZeDM6FPjJu3QQA7gBFP9UX5LjGiR4HScf4Bk9JrD3XiskPwe8QMsKfRXcMiHs",
  "key24": "w6tt26otn2Q6XBUEhMDuZ6k5Fg1ecbCDTVtnG3gnpfv9X6zNF9oirH4ZXkAwcvd2B1p8oxXW3HT1bMcjtVJJU4a",
  "key25": "4woxo2KEpCcKocCWmSGFH8XaH31kai9XDA3bAZfiosc35RkaEE55jJvH8FVVRgvr1gkFwZtiwxTGqRTJRTRrBEGn",
  "key26": "KcDZa43Bss59egcd2sSMyk1GRW1rLmJ17XjE3TzDYkBz1dmWzo6ZbANpDcEFKJK5YpZvnKLvvLnZa6GJgiGpPD1",
  "key27": "26uJboD26XRsTCWK4puVQu6WNsZ9MkDUpBMYTGYzCt2BNrps8rSKqqZu874VJweY6DKcySCnYmevuXPrtXYDov8N"
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
