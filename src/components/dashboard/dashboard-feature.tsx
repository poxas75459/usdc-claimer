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
    "5EypiyfT9tSWSFrob4JFCLDB5X5bS7b6y7KhmuFNUDhs3c2BTbKEnQELufvzqhRNrerJKAqUEbEijhU6WWedqZJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvLDHPJbSfwmYdvCX6sVFfstKbrzHy9ge1kBgRB28wunSTgS7j58UPjpRi1ekTGBbguTSqN7J7woMhC9DoVGxtG",
  "key1": "5ZAnVkrdS5AKhnsWFMPRKaLmZnvDb9JsVWVNyQztCEKZfPSYoYrameA7yUHuSsSf4xPx18NkGmePwULQnCUbG9VC",
  "key2": "2EsfVBhLqF1HtJCTNV5egCLsnVtZ5JBzEhdTAntnvx1gy1GtDXFsjL7mDnSKqFMbqKa49WaHP6u6f6wBR2t7DrWA",
  "key3": "4QFLRJctNB3AiAXwzgC49ZSW6oZziHQHrEfg2mZ3hpt8vzzUFHTDhqBjusoaSrsaqBRLJsAktZnTqqAKcgNBd3qi",
  "key4": "4TUGK3tukoT7GShChFMkr1odaSZSu9xGpkvfFVMMPq9kPwjvQoRcaDfS9GK9KWzmnUyFo5F4JThWJs8AZ4CzHaSL",
  "key5": "5FPRGP6S7DjYpirxh32kNU1FGz4Qc7TvZnuvWzbnKU4bzneGjNmeCBWWGsYo9WobXo3jSQjMvPdwxugiuGyQ8YhD",
  "key6": "2yYEg9CdTLiDHYcZfNMAEHxbHEg9mAynmvGexxTAW5BxWMxAJ8kbsSNXJ41Gv2ygQmtRZSjVGWUHRxdsH4ZavRBr",
  "key7": "FxZ58HzwAKaSoMLiZBDfmsZnW1RqZW24mzZ4FmF8PqnC9zh7vYghSP3JMYYGtix1ZY4Y8VqYVW9z6Gv2tkUVXXG",
  "key8": "55kFcxmMiarrJ8HPAQrYhKzQe4FV3HWivX234g3RxABFn8FR5QxmxezT5arrk4G3XF11AdRCVC9hmXVnByhwBXLF",
  "key9": "3SbsyLvwmD6Do3zkEscU4Sjw23xYS4CyrmHBGT5FSBL9hpECvmuJy1hFmG2boAcnZj2FDUEZ9nVY9LGfaQDh59kM",
  "key10": "w2MXcfsejzNtqewgE4wTNXttaspegsdFPiakoCmDnHzrtxRkvTVPYsVGQnKMbMQs2c6HvNrTG8MbaFkYpx9pmji",
  "key11": "cZo9xBX9eCaTCW1xoPusPfWc5JNHifbZ5tGep465mtVvNGadLDU7Vw37f6xH2RdfTnXjTsbsXpmQuDTmUGFjCFk",
  "key12": "5aUNV4dTop5qANmbRcdZDzvcTmYXFhVhhGkGnhGi68KsJrvcdUM2fwaPji9muzcx1aPa7PFDyPW6t3hVoHd2sC8X",
  "key13": "38AAteHQcLWsjkbsc3VeLtoHedJPiLJNNZzEsdoSFDEMPZyF1bEKbwveHxNLH8sSDtfBQdcjyNMzw99z2tqEQoKJ",
  "key14": "2nA9VfiDEJNK9183rap2pfd6zi9AuET7w7ZcgSuWEfXpe7CYWxS4koLDEfqPS3uW2cy4kkkdgjP85YavzrRRsKDP",
  "key15": "YYerbmwRJrp6CpxXmKFS8ADSFtzeiDS5Jc2ZSXC9xu21rPLXP1CkVoLGodnHedzdR9Vtgo5taFZEnoxEkTPyz3Q",
  "key16": "2DXKgzZdErgQngec9FsuRVQp79PVDQRmz7pMQXwsaUcMrcrEyiXvYLGFnyzGXubfgmK19i2VCw5wCphNuihhzNjJ",
  "key17": "4t7a9D4syT66JsJmJ6GJ5uiz2mWnH6R3jcLRZCCWU6Etye8ChE5ZckzkR5yekjCFvezfBWhuG1331afpJa16LeZA",
  "key18": "4PBb6QULVx6etrRmRRyuTgYJgwgd6RRC4tBBVLqSuyQZ1AZxturt7CvNEAJ93WdZ8FBjMeqeFuMSMBg3XoT7GaPs",
  "key19": "J4RjahLBSRbzHmt5uL2HjJEaVUySBaT7tZkhyABfTa7Po2vqT6Dm7cRZRiH3jmDEvKY8GLp98SpgdFQaWDFeHa2",
  "key20": "2JNQ2uPnr3KzLZgKmSHqwno7feBw6EccEiNqQWu66u9NYTuwRbXjPoZQmMEyDZsjCfnBRRq4J1UkBWPSuqJz8D3C",
  "key21": "MhoHzXnGCv8xS7wNMDSpMCaUy6Dcc1b5VnpiHAXzHTcpXpgkxxW1hCR5X8ztqYfS2QFG6kG5iVk4Se7oqzz7kkV",
  "key22": "4kUgnkjoSPsGE4tE7UvB6HiiB7Pk7eVW59H71HvF8UH3tgzX3cUGfKVSYbTB7e1EJaBq3hwMLmayTEyb3bxQHVPS",
  "key23": "4KmhsxMpU7cDBr71sPMZLcTY757UuZ39V2pdHhXCvwe5acTCVLA7kD78ygiu3AWxDPw52iTWoSBXgxQ1xgpgFFAf",
  "key24": "o4B7RxubAtVFmb4mJeVzUAZZVqEDxnjCRxhWLTKDei3J9kQk3TtJtB3fX9V6vLw7cg5Cogz6aU3eepoQDXqRtZo",
  "key25": "5HFo8C7rYbRFg7rxQRuMhwxTWzyXZm7XvvozRp2z6PuGzXcaoaRpmaXZdTR7J9XFcv4T844g7ko6bpbit1cTKvte",
  "key26": "4feouABJGfXeT99qSv5UFq1JeKrSLbBAbXnEsj8h3VYDqVFSwi8A3ZzZvibhVRetL66p857QFsdaghyqW6Bi2oai",
  "key27": "3EnSmVPHDDiMmCLSpmjestkbmdxxQmdyT5yEroKd2RZZk3kNT22XmXEHyikg12iXYuvfTJoJFYCJBrNcz7ynygH8",
  "key28": "45CQd2HY3zkFwSNdVDeLNsQjL6xhNK3s18jQ6XoHrSk3fwFgqgDEDJbFPQnk55zznPmc2g16ma5JQ1dNDHqhSmkW",
  "key29": "66ti8TiskEjvdsQHFuycqPuBMJ7mdEjFdarXLRUAswo78ULomEA3DCAd6MZhubLPYqy7axXJejWcH17ak97mbcRP",
  "key30": "w5qR8dgGTYnJ1x4UcDtVtvoGFRTbntgpK3M1aNq9aN7NjAs57h5bPKd7idNrtGn719Hmkghx4QifcyBUfDDwHbJ",
  "key31": "QjeZSCaGhicU2jE24iapnbNm9Z8Wiq5PPD3eBT4JtUTdzis5nTmLDM14e2LhFBypT4Grmf2rZ9UeZKBqFbJjaLS",
  "key32": "3uWpGeU48k1A97Xq4RXebbPbhe9cRc8FXs84jQdDYqH1ZeJbNdZiZjDinYDn6YrriDVVMESswFV8Zj9gS6jEVToh",
  "key33": "34eeRJt3os1DK4YDkYTCHDRgegq3koN9k6sNaZB3z53GxmtNpAoSgypS647jpKFEWj6rUZeY7QkmrmiQfuwwGUEj",
  "key34": "66zLnnkWV2Ux2kG3cmkfqD7L98imXqmQwAhNyX9yWMowjoZXxWFCLrKJtrGw36jS8ArFnbvVb6BaF3owcEgbDRGV",
  "key35": "453Wq7yivaxE53sgtUjFSoTgqV1MquLy2Nb7V69BRe7kpu6QgrHfMUhyt532KRcQWLHz8EfaTmHFy5pZWRZVwMog",
  "key36": "Z7h19wKKZAzVTHXxnwJSVhJgQ6QPKfNgAhQ7JJdGTnyx4Q3mLxksw2jW1Vfx4cQ3f2cZSWvf4pg1ndSnpv4ALUA",
  "key37": "5DRKSGaK5ePjJVL3zegczL8PDd4C4KZ8yvzFoiVB7h4nu8UPqKmbL1rzJzUKaiJRT6sBWNzZ7rcfht4R3rhJQHUk",
  "key38": "43SUAyYKfoU1ez9ykVnDzrXCikjvj9X5NvXoyZafMgFN1ZGWJZvTVCDrmT9wBDYgMRWmvDB4qiuBUsAogDDuSNWa",
  "key39": "52H76TdJVsoXe6ary6rXzSWJ84X5wF3kNr7jvWWLBvyxpjWUL5SgHnroRFjvn9E365qTgNcgWyz8a4H6o8hqyzSW"
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
