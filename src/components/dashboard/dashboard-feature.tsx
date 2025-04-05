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
    "LtA9KyPHz4Tyt7NKGpMqjsvohEoAsvMA97yE8mHazbghnftKFYtJKdRW8FFMJnKjqD4VLt5wb5KGmQTC4qEnXs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495SpLdNsmo5gsdhKHQDEogyUiu3RSwnYvELDZ7biXHbdg9bYmLrtGRHM4CTwwtn1QNAV9JbwE94DthxzUiDSefv",
  "key1": "F8rUYfS1hs8TYvW6kL63VDdeput4CL1owUC5DQLsRQug5uHMctmjujhHL7hQMGT6nxRgj5RH6LyyPWtNAvoFXqz",
  "key2": "5AJhdM2PWM12V3eFZY3GY3HLAaBsALmTmhaeJdEnNEcTC3RSmRKiCUjn5VGFwX56HfMRLL1iH25gtmjDVKznVKyE",
  "key3": "Mg8Xhw1oWLqAyyXvT2xyU6EEaSv8QHSh4D62sRHVYqAzUNNs6A5A11EkKNdiHuenMuDVWXhFPLRmN4S7Yq69vtZ",
  "key4": "LR6YsK2AJH2rKxPkcV2Byv8gXMDK5Kcb1ma8D9zdgs2aCgx91ogVhgLPZ95ZYs3NEHK5hAXJvLGBUKe52sdFo2J",
  "key5": "5w8TnacKpkY7L1hDhrMGsU6mQRdEWw5DPzxGDJYSeDruE12dyA4Bkvbiz6HprcJ8rjJKXgovCMpn7wF3tLyGCR3U",
  "key6": "3tSZ4unChN48k6pA3UV11CzaUVAaKAfokvAVHYTLMYpNALCkEPqqFACcuMpaErEL1qjfoTSNLkuSjxJXRbcJPUuX",
  "key7": "15BPxNxWLHzdQN3MbhXEHd7tvUhGiARpDr6kGsrR6pJx1NMBBtEtRgDM6hwyQzbScq2zkFeES4c8RALTgJjLQDV",
  "key8": "4c8crTgqr1ckEFRt1XUycj4WQ5LvsoWc25epVkvwuTAbtyLCRX5Fph8zWXtEkJtNNM2RYWZftbhwceXKqaP1iqFK",
  "key9": "2fEZ7D9YE31ziG15yNQXM1Wv14rxwxNp6kESTfPHVMwg6F7BpjnvTE9YQ3QVEQkbDXVc4ehe4o5YE9v7P56A4asc",
  "key10": "2ykT49g24yze2nNpW7n6kePRjAgVujYY7QS274rCYKHSoWY3X9QyHK2aasrhJjh9ozQWWB69ZNQer4xyaZsinVJr",
  "key11": "5CfuzBD4uJDFD8apeDMRKk6w4RnJFWdZUAuZW9WUxzBZDS8gyBhiLmxpXurWmEohgRSipuqazghEiatum14KTeGc",
  "key12": "53r5Y7zKFbNm8vp5QtUGGPn15HRCvdYM1KDuo76xSipvinuntU7QSuk9mTajt5biVB8W4vsJcx3WtgrL9Y1jc8vH",
  "key13": "59bF4uH6dNdFrzvzdskjH3LaEYFvthLZJBpVBGYE56M6Pp8J9p1hRtc5qhhjPbGVanKMWwwoxz9MMbi2xCZDVRdq",
  "key14": "4Em6Xs5LKtRTKSDyJDpAuJ2UhjqCcaZtodZ1uwkG4KSdqoisMd7KooZqbuqgfd2wYzvZFvwbjp4cBccp9rZA63JY",
  "key15": "3NnMW4sKWN5FhhENVvRz4dbvnTpMeJDjNt5q1rr57wx3otLGq8MzXnbpwMu2LfrWavBtD5Ph66yjVGLMLJ5H2gHx",
  "key16": "3EUBsiWX7z2XG14snztj3xgMULfBwx2CmCKU9CVFJarN4sQYNc2Rp649PecAHkfcB2asNXSgCtNpJ9BqkRHAGbri",
  "key17": "4kVrszVKxRAk8qWHu3167sPpQU17JtG2RdB9JCX2NQTqy6WCbhMnHUWMchcNodiwjAUubSLXvPzAKsPGRx1Cu177",
  "key18": "4B2neKXw3WdzDD8Dq6unu6GWtECPda3HkggwQs1SZkJrpfjAurYt7xQDAg9JcJjbeq2NHbBq4YDZkAMtuawKUDWt",
  "key19": "jCp4NniuT82WTKZVU9yo9eGxubZUHeVp264EUou1wTx2nLbfkJWaLvjoLYEAW6QJH3xWxSdXrVovBXqS3eLhf8R",
  "key20": "2u57hS9faSSTeRCimuYCDPZVxLqSwZHjqyg65Md3durwEeFNMSRK3Rai6cjZCBzUSNePKFiwqB8vQxK74oNZDd4o",
  "key21": "37WRmNS8fH1Q7nwSq6dF4QbutF7BpNUkpA6N2rX3b8fRxcUmXtNWu4uFKrnbVLx6mGoEEUB8rBLr7ziiaS9bsdtW",
  "key22": "2z8HAcQTpA5JHuzxUViqTB25J6ma8vht9YFwExvY4N6o1FpkudDNUabfeojUk1HVaCgqiNFMxchPeZr21zQa66Qc",
  "key23": "2E2N4Wsy3x3rrw7T5oDpS85kuZb9fk6W4MoRXHUoubomCZswJaHdRRz5ssmwY6ZnzyB9Ta2X2DSMt4Wd8F3umjdV",
  "key24": "2iyopyTjgVmbVv3GdZR431WMbZWKhftSbgH7ZvJumTrHjjAj3KQQYRr9qkhViE4GWiZcLPhqq7NEh9eva61KAxGs",
  "key25": "3DNMwgVhW7pVtBDoYj3ip5H4bkgUHfCn6vy843PCzdMS9v1Fo6oBJu1dUGveTozSb8Dh6ZeZhugDdwj26SnsD2Mt",
  "key26": "5g8XooKjQnggRhwFy1dKKxQphTYiakymHse5st1C7nUzoAFGcj8VRk7wzdzLQYsByF7t9XcUtwN4URAvuY55fB5S",
  "key27": "31ZRsEPgquD5EAVUrEkAniBjCeidzTpXSDwjeducPiFy5LL7hNY3YkV7z8rdfuSZ87LeB8vA1iXvKiYb8HwkkBxQ",
  "key28": "2g4eVTMy5iMd1HE8aFiAZYFKzofomvtkJTDeuj8y4Rms4LntH9xwkNdZus2QK3TfV4HHSgh4q9o3n6jrjaiZatz4",
  "key29": "4amLVHvsY8mNfrzm6b1iGgCqjjEX99J1zSjcCmpvXZvoUvzvkzug4QSLE35sV31JRQfbdKPZKR3Dg8YYLC9etNfu",
  "key30": "5pi9M19XaSxqRKkn9wwtwH6bxsqsk8Pgmx8YZ26yaVwYKHk87UrR42mFmz9DzrMBuomBAGnLioHMQAhWgAVpcqbM",
  "key31": "4LXLocXW2HdQddwjg6Qdy2WsSrpBTM7Mdvb4zKbcRYkGwKvu1KosHgtaG1uZiUAbShpdGqCJFmwGL9wRqxi9WWGN",
  "key32": "4625KiD65okuvYQgXYbTwf12eMi4YZvxM6gTna4MmhD3kDckDSv8AtYmzAodcFrJXRXEauxKX5vXCyaYJDv67wMo",
  "key33": "3WykidSfMHG62Z4ZKocppvmYFq1AGhnoKbdtec4tUvot6aL6eZWDAqesPKD1SPKEopeBEtt7fu6prj8VEskqxBwW",
  "key34": "4VnUSg1EPQDSQdn3S3ovJQGiRTZ4a435Vu8EmyRENCE5ac1nEHrK4xh9gnwfHusnC61CdjERU87XUjX5gHqW2bDi",
  "key35": "2tj7Hdxad8sm8CkHhRow8BfNnhyfogyQLGyj8WnCtUbSgridpY4d82trnWHerEpe4jA5b7Z9w1GU7UXaHn2FvU5H",
  "key36": "PNv8YBzZ7ZTp54chGzUMyX7h21VNcXRg1VJe5bjRTtMszV5eNxHL5TtVxgsjP1Qy9w2Uc6chqec2QVADacxyYpK",
  "key37": "5NR1UZDHYBJcZUA7ijuAW75pc6ZmeYwtJCPQup2a65im1JbAPPcCaTjFhgPxH3bfZSAtUN2jr9zRM3N62WaSaLx4",
  "key38": "5qH66j6scX1tm1bX7pkJP5DDXE61TfwGrfiDV57VjmjELPrNAvY6gfRaHm231MHyeavfrqtMyFN1uoumX9egVC1e",
  "key39": "34cNkL8m6XSF7zekCWqLTpxxWJxAz3oTwMJErfSzvFrEU9RSTRZ1N1yiU9Uu3CeD23qWeGPVD3CJ2jQTtip3Eh8n",
  "key40": "fMuRtStiWFTqVHsF9X5F4j4HY9FphHznhL9GcTz8UcMdn4Pii4vFeUmxxgYdjbSPXRbadSLbv8TFrqd3fmMKod5",
  "key41": "4zEeQxsBnYxHQjZttK848EkMrCKPP6vQNZs8Bfxzi6JJsMyunM9FF9hvumZPqYwC9WEwteghaGJPU44nffijSsPp"
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
