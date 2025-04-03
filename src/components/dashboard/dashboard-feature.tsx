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
    "5XHe2bYu5a6hJWRr94XAyajNzkXGBiUwTqwAAgFQfsRJrkVZhfffgnVHe8JYUzHQtjQtj6TX4ByfJzsJHhr1pqWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G116LzRwG7p7rhZ6WD9sNF2jNnEHSNQboRDZ3UJ15DT7Dp8RLxnqjxAjkNXXcRbAw631jb6wkGQjoMPBJWsTU78",
  "key1": "2g6GCpoV5gJwMXx5KQxBiNMDszTXjAjdTzkvySoHDwyCbards9TYwwzhToV7QrE33JSoDwq3eXguwMQDWNxGw1qz",
  "key2": "2jYTr876qmxRKEJ3VybY9HeCi17Wc8ezeqaiiDAi21rPBQKLT7z2PAY8kbqRX6VPXfNC9sCYZAksnXPShw6AZ5fT",
  "key3": "2s1yXLCk5Gaf8fGWmpDK3kFMuKqgFJWX9RNd2zz9E94VekGf6nMnoutiBVbc2AW7PugML1aokWCDoC5P3LKTzZ4z",
  "key4": "2VBCF1U5BQHe75rYAJkif5kLm8BLxWA3VQhLQbbDNzENc5srLXscTJYrQGRC95QKtLr5DAkMwJ1BtQ1NS1H7tSon",
  "key5": "36gpa6aA91i1NQL5x9om4USe1xux3tvwEAwfxmPu8HzqaPmNJDkR5YRXFkqsMhWV3ouPVZzfuHLGB4n29a7wufKi",
  "key6": "2WLT38dsE5e2N2nrfhpg5BjUpZLQQapb6jDREHpdEw5YcdZ5AJembAfMNgfdJsgpPy6kDyws8AayWjZQWfwQ38WK",
  "key7": "cTGzYHWeZQpMDYchjJQKoAc6pi8YFxoxm5EB1enY89zv3Hgu5neS9GRpn1bagpja2G7noxZQqXjSM3paVp4EQMi",
  "key8": "5y2QTwZxmn8X26MLkYFwnqujxhvFAsK2gX9NB5dDFcFACLUEsSw6HSU7cqb4pDgNYPhdtA7SLo4fozHigbbZc4VM",
  "key9": "9s7uuJkLpkiWZujBiJkteNxeSbPfMz48YNsu18M2NkfCByw4UuwjjDsZpJm9TpGKuV9ebMUm1BXgEWT3ZN5DEYN",
  "key10": "t6XdxQNbsPdULK7osWfVzzHuyb2Bf8B7GTYXvrFbuzahvWrP2LthC2tszcyCQuqp9BkuLfb5meTrGwLvEGEBEgg",
  "key11": "2AXqh7Pmk2JzFPLCK3t3SL5ceoTzuHXAzkBD4khMXdGjUD9tE44jEZRi3acSm8Et8rxvqdd74NsjfqCBXJYp42hy",
  "key12": "4QGpQtDyWPHuVK5k4jVUCmE951gVoh1fCjR2Jxt4QewEp52J78eZGisbRJdwhVtRauBEyPv34pMZHm7QZfNAJuWF",
  "key13": "2uwXtovm3F75Bmwn398LESbq3Xgbf2MUaZjaVAbhfTcKFfvzwFRr1ZjStscA8LRGgKCtc45FMULdtPTpuJpBrnwa",
  "key14": "23r3No7Zqw3akKpu9tYBgneufZL6xmEiCEgaCLbbhjiqnFbjeccADYPCAYs7p9wYq2PD28HrWaSiE4HcBaNzPMrE",
  "key15": "51ab64CZ9qTAGnLiPvWE3imCdi5jBU5gq9uDWbtjx38k8MVhVim7LuNFTzZNWkhAQVsyaLoDoS4SRwfpSmvAurUg",
  "key16": "3hBhJBbrGNgEHvp4zYki4FKpNw2UCD5e19uSfpwHeCdUpoQ7HZHWsvuqeATVcKamHkmruYAdFiwMm3opAerPX6Yr",
  "key17": "3BPdvH1YLosviNw1BQyZKJAtDAnXJuUKBbXfuFNjAwwUfVkxz2kZwnacxTC6V2U48fBQrBAcPjBaZ79ASTaxCbVm",
  "key18": "535NHUbUhsbnafgXY4nGAUXL1Y4zsjNqRjUenuWvdmyCGaHGac41opyXwTG1TKW6nptg6S1M1xbx5ivmvcnpQGQM",
  "key19": "2hYSMmcqMstUFwuGXy52RhcKYtbRvup3GUWwnEcidYadVFnmLHxs5t3RkcX8uocf4kmBWZxaqpEouGg4GR2puaKm",
  "key20": "2DbdnpScESUgrz7t5dTuRRF3ktgd1wa7PcDDyoLYZMJxZ39qDCRKbb7E6oCYzUC34qMYJKBZVvR5RSHyhQtsgVYS",
  "key21": "29kz4TgmiJ8omRYsefkNnrKivzBzS4tQt2Dvr9QX3aMh3d75Z2nmQpvnsvRSuH58ENUFxzyY4BwWyeqvCCb9tfhS",
  "key22": "5cPTg9fRKxr17K73sueJY1vFJovpsY49bc8QES6mtgr1jGcMVHCAAtZe7j7v4EjwnPA7XgagwWodzr3CQwdCVCuC",
  "key23": "57p8U1x7X3zLTYMSVZkixiWSFk51PKrZ8LVN97XqiWZN5Pim3unTXq5FMybTo7hvQ9pwby19MXVH6W75i8noMhWZ",
  "key24": "5HPYzU3ZK4FJeAqwQ6TBJLKzPYKTccipLURdMyZfMqxA3JKjFik9MHmsXCheehqTBtbbXxhi6j7dSJGpKAcqkHh2",
  "key25": "5rbPsf9BsfaTVt48sSWDWJSafRH4hnieX3Gkbu9GkqarNcvp4phJqFqzXYyeMfcmfcfZSCdjMrPW9FQ2WnLH7k1",
  "key26": "5nDuMokdBpW6xsYo6xs8KpCVPy9C3xarPz91wYcWgKmKaVJoyNsJVDFvg6VVvPogWBADYQnWamnrP2qbsJ7zrkcD",
  "key27": "2UtvHqCXBCUoXdJSW9PwGjTGiT5uX37xcu961L63fsAjo67ZgvtSGqUETQRa5Sh424wt7L89n12fH3ZUqcUjzv5D",
  "key28": "4XTo7dsABtog2H8wMzfYUeAhJQYHAmqUL29YCKPGnpoEdF4gtQ21NSgRtKG8YKjFXWdjMfw3QcoK3nRyuv5KmdLF",
  "key29": "3fwcq8LcyQLDsUMe8pYnb9jVq6ySgEdxNFi5yuxWDr2vkqX5cG25po2beAv8bVVfRTdEZpzwTjjBPeP2fKGCo1ms",
  "key30": "2CQsaZMgtLb3U3Vq8QrnreNEReLGM39RoMZCTCemm4DtRKHajCKDLwit4HmXrpapH3o5mx5uorSR6RnR2SB21jv2",
  "key31": "LeGPdFCpvtPdfbSAQjdBugDGrAEQhyr2dCUDMLurpmyHV9oEe2XcPxbYyy8hbvMfekW44zD8HNvx3qpeDEEWEah",
  "key32": "2xcHUr8AzQZ84Kc7EDKYQCBxTseDwuVHnQzqZn9TGewrbGxShzSkBB9XBguifQ1sER31yoqUuBmmMc3WeZWQqtkm",
  "key33": "3mLFAXUkm3R2q24C5gDYkEifLibStZRVVQqYVeKwnSw4zNDBshvg2YeroHkmcmED8nJ1yEqdy6TxFKz7kXpyuxGF",
  "key34": "5dxiAX1a7XSGXttnPviEZyvdHnksMJ9bbRKQez6DYWYycRtzpybdVSoaz6VM1xQ9SstbgRaY2pUWmYhuJmk7xxxP",
  "key35": "4chJmMiy9TneymKmNMhyfW4MWW4Rt2gT715VV66D2CpG26S35Ft43eeDc1AFmxxByWtSWJU3LKKdmqAETzF9MDy5",
  "key36": "45zzz7pD65VrjgmYfENQp7b4WiEDcczy8BYVqUB3JBUZPfT7C8RJhQpf2nHxvXjQUK8MbqLVjYLJ1tZ4mzAtpsyc",
  "key37": "2Gi7AUgC6L8h2EjTVHNVxmwgR2xNpCySt8mhchtQmKE5GM3HSQggrQEwoADFP1GoMYPxbs3pVhAPQudFk1Yz3Hih",
  "key38": "2936Par5EseWGqHpoD6QNrU6A5KyuhjK4WxPPM4F1QPbui1wV71dAh2EMwBKAp6cXgPyb4xCLbUyii6dsXKfyMUk",
  "key39": "2X24jv5W2TFRcfF6a1KCwcHqbeyF1sinDqaGHo8sZ1wNCX5ArSPFBDrxkwxRCfbkTCKFqeLtu2pGZCQuoTAyePyH",
  "key40": "531yQ6Ta6XapNs9UmvdkETV4Dam11hHknR56W9paNg8gEpZGdSma88RrDBTJUWtEAgvcbHFEBaAVrbmC74svSG2V"
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
