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
    "2rosEJcB9TTFYr1qeATaVYje8Ldm1ErTmRdGyVu5Pr8KjZjRVwcccAwKuTw9JxJCeG7LafEp8iCALauLcRtz1MVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEN2h9FJdzqQX1oakmVnNSxsuJ3UsTg2twTRByrqHTT4aVKbqCJAuAxr5fCGvf7joPJSkVjTNBBVMFACJuE5WAd",
  "key1": "3q8kR8PU8XgFdtedS2YABrMrdwA4A5DCCziKY6oTptdK4ZwoaFFaWtCwB5y7Wgdc1s5tw5VepwRnn1mAX3KuYKPt",
  "key2": "2jdpbZQ4Cy5UnJezp7rtzYEzm2eKTcxrSCQWwdvTMnDv97SRnt2w9edFgmVWcHCn5seCHADZdXHk5MqMzf1QYCcQ",
  "key3": "23DrhsTfNHJzETtUpEKBwXfBTYr6QDtFuq7CYYR5nYjJDb6fpBfZBC77tDZ3BLih7mfnfzoWNeBg2ZTVcBLgq4Bo",
  "key4": "5XLYg3DgJEBpT1PBMLk7mpisKNzFhpD3REKED8uhuV7T2qxAjZVmVSPwKvPswZthrrACgTC7gjCShRrnP87rUHmh",
  "key5": "fjF8q9RnaoENQn2KTSn8VJfhavyBw9Q43C8RuX2XVbKRD63WXDLnMcZhq8kyRVXCR3hycikdDqNQjpjGM5rohmW",
  "key6": "1GEoaFPaksyG637S7EULXFJ65RiSSbEGUaKSpHiYvTHyUk9q2ohPhsPCea1bLE1czEctSE4C3cC7RMGnbhZ1ucJ",
  "key7": "5zPkQdiaQZAQhsTBXn3H5qu1LKwQ5gGakn4m1Xy6aaZKeghsvKYB8oEAtdtUSejGkGEHGg4ZGAmpRw9dqqjJNSPL",
  "key8": "5sFDxsFvbg6Rdi2gYYw1yjDjzHy27moMqhXJV3DHVzXWPbyHaHUpemH4y3BcB4KPSSzN4k7zZCwpVcfNwn3fWZLo",
  "key9": "58CyB3Yjhp2QpofaFgZFpiPgP5Qqb8qsECiYRjK1DaLMqj7LAGGDjAbEDT5zJonfJc9XqDj4zQ3DweucaAp7p9zu",
  "key10": "4WoJYkyoJgnCfGNjFF2d211FmoW49BLBoGMY2SAz3yzu2RUhS7WVCCSQ81Qn3t9RzbqLasGSX1skTnJEcmAZaad9",
  "key11": "44fsokX6h5dctiZ5uF4J4R5WY3C7xqpoYAiiWCVqWefXfSwApA1LTKJiYL9WjZrPWWmbYUJR16GCUy7HeoAm1jRi",
  "key12": "23utnh68sVckw9M2vcj7JodEcyqLEJr5sgiWy8ZGN7sobuPbHTa1bVkkbv78KQkxsW8B8FWRDBAGwEp1tC4mJTDk",
  "key13": "5LgEAKyKCndpyur7DeGp2XBDGLcBaEW3gEF661v5DKtaL4FtcfAj3UTeAzv4M5jb9S5zEDVuhnrEaGYRXPB4Y32x",
  "key14": "2FvebQ1FoHjnZbK4pP242vsQG8RDxp62NnLhb8t35GJUz7oW2VWMVBazG44hJs59koXHRAjJ7Qg78Zx2dfZrkdaD",
  "key15": "3FFEtv8fEYy5Ewjs4DNCJ4EEksLtFHNa2GvjRui4qeG45YoXvKWVTLjCGNwoMDpjjojpb5888hb3juUuS3bQGMmA",
  "key16": "2CQMBoMJjMFsZjT73JN3i7QcqgCaFFq9RwAyDZE77qHe2TQanRCX9Vkggz81LD5LiManFX9qx9wEU9WznRSDNEem",
  "key17": "3DhELYy8QCNCknwjBisRQdts2tXcDmNZ82SmXpE6V7FZgE2K7enGPuVMkV13Q5SaGRiLchFTFQxQnFHJdS8JNUZz",
  "key18": "5P4vVWo768siJtNqAwuKRsbpe9UDDtFXJr8NDDbzocXARXJyZTHwVwq76YyRaxXEuht3V9A2DpkReiDct8CvaNpN",
  "key19": "62iJEmZTirCG6RZbVvM9qYdNgFQJYmyPaUNhfJgjcRFp3iZR6ijn2vvCbXfBiZBA7Jma7rvU5Vzw9n4ASRbMPngm",
  "key20": "3RBvcvwFwr6K4fLvfCWANLVj9ciTFfoh9nswaeNGWia1VWb3USyaRnX681oVWnPG2QSFp7MXRdgbMH2KLoXQxpwj",
  "key21": "4iqrxqeLBhwYaszuYRpyVG5m4mjBwUkkvKd4PjUzU6z3vB6tRtSjtpLbtTaAsrWSLTxF1Tphs58ikqTGtQJgFH9C",
  "key22": "4zGNGwega79SPkpSy5aMbaJzNyPD4JydzReuJJ2Hr4FNyVXkqyxdJikXkeEPrDpzXV7BD4f9ihAvScndpXciBvNz",
  "key23": "3pFRSnJys3aXSXZhxyRf6voAzqsb2wJm2yBnTg6N9aTWncEQAq3FPSXoGDzxEu6p5Z2AeHxFpAGZorbQPvQ4st7X",
  "key24": "3C6jz2XVg186ubpNFHNGTHXHsetdxbkb2Ta6T4r7yTEFADUXfM58SwyLZxoc28nH7XroRisKr18UPhrsQ7bmMJCJ",
  "key25": "3o3DhfwVtzMr8CozhEyY2vhS2i2XAcC1F1snLPbPdXAbfpymBw9FDugxCDCe9WhfD3Vbt3LPNx8GGe2bWDD8CxCP",
  "key26": "cHeeJrHe2QRmPpJapnQCZdCxiLhZ3Jew8mm7Gozwt9SmtDfZSrFjNUmbVCy7rPJGLEeHSXyVGv2nEthbJHep45S",
  "key27": "rBuMYEGRq3xs2yesno2uKLwaNEsCYHuDjGmCvdfStFuigsFoKFdYgb71mYqF3ZNn5Dp1WEnyZ4gfxqNCJURGWtC",
  "key28": "4MQxZUwoQWiwVDTB8YWjpuVZsc4ppnSeSZehWKZnBfb88TSQeyccsL3xvLT4BVjmc3EDEwkKkSNvToW4owBKaXNV",
  "key29": "xyc7MqegtpAs5hYYnqLYJg4WM4CzcAruHiXrpjV9Z7ePgadHW3jqmoXmXumravSfcNxCpDczrff9dUGMqLuNkrD",
  "key30": "3pCurtNdFE6Kzs8kbjbZqAbZnqXcsnDQYy65Mghmpr4tMbkfpvmz27sLqKcGHKDtx5ukZUMuKDJqRFYFqJHyrmT5",
  "key31": "BDkjobJ42S1ry6oPV5Mdm6tkBdNX4wPRYc7WSueNAgswLCvk99s6PF8gNgyhkFQUwWCs3AmzkSmBgDBPZsdamoq",
  "key32": "o7U1MxNr9avHQbKq2cEHyjnZbAcpVLvpoFuRQR6EiTtGDE9GwhvaHqoe8EWeQ3Lokie3iADrUJSVQZUb6yVp6Bb",
  "key33": "GtUfUPXAuHBrCjhFme5bqyRxRg3UstbZzFZ7GsK719aFPBYQ13crqaLo4iR2yRXDdMMq4iXugGk4BJWPPBnVcUM",
  "key34": "3rNK8HmCQRiJVnkv4Njtb9d7wS9SCDgs2N7caoVtjwdHcap2Rr6JQYzTPE9uzwXCYjJPka5GVt4EJD4zkgWpTtWR",
  "key35": "3oLTn5DRpBWy6VR86b3tDZ9mHPuMf5XAfi3tfBGFfGe92V5vjWLkFoehbnrnX8doaiAVax369RAkezr7WTj9PCeh",
  "key36": "5iE3C8Do9BLpsWgSrrKkbjwKa2TuWyVVVhctzwpp63WVn5WeKDwqxc5D6PUW4txCv69Uijp3uL7mqcoWzKE8Ck8S",
  "key37": "4n4GXX43F56b3kHr8NHDpxkXgkszRfsq9meTj8PsAahHknRQ3GfvFT1gq315mXQ49uueb3RBar51o3pzKs8xczEr",
  "key38": "5CUQuQ4qxhhdmmc4Umkky6rbLRg3jwHZrwnMJReb4bJU5cDrUJLie4tqw2k5FrZezjDDEkWXnW2sa2DRLAk3RvKN",
  "key39": "5ANUnT4dzoEsBqfdvzC9Ydu8PxBPvh7beraTyENQSco5bHhRVncPcSDCUy5rwmJNGDSpgQ7xmt6U6KxqphGeDGpY",
  "key40": "2hzuKAfCiMVzDJA8kJGGt38KAtQ2G6C5Hti4j2hTqXbCNW9ou3TrXADxz78GYeQc94tLXBbs4T4grqrFgabVsVQH",
  "key41": "5GXQDKt494gHr8tjeFxwzhMCVD57q9PpLFVv4pzM2pH24tcpi42WmP7SQgm6h9VjTGLqTC2qFjAAU7eJec6fcUBZ"
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
