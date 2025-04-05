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
    "2Vb3ofKirrgoX9VEQ9pDwS7AAi61SmoEXRykmX14oZsQShiKq2qYVMCPtGSjrhDdzdnvrJRJxyg8ZnZhBUZRuPUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33uhGn8iagdPY175u6XUCXeQS5Wiuejf6wLe2P256zEBf9PHaXZVtPmVjn6gVoWZeQHWFZpDzHoXFN767Afc4yvL",
  "key1": "26w8zBvoSPJoFodC4b1fdo9Z5wtVrd7J6G6D8gkUqmoxs1CmzJncs6J2BSBzaKQHFGaBmjJgjNugR9oX6eVCWMcm",
  "key2": "29Mm8ncUDyCqnA6ZuEKvxoyfJzgYvbY61UnMuFfBkKEXyZmc9QTHHvujopQcshepnVghX5zDKqLzXvarH14zhTPS",
  "key3": "MDUhJ7SueG1riv3LzfYmjRt2FMto3T1vjSDwM3TWsADVip6xJsCe5TULJuc1Nbtsh3tLu6gVWbL7Mu426hXR82X",
  "key4": "25kvouWbuQpFZzcgrGKuy65raD4XTigoiTftQMcWmHtwDLXSwXuNomkCTfrRZ9W5w48yPvZ5nSNzrjS6U4kuJFuG",
  "key5": "2EHg8iRE3TXyRB9wc4rb1JW7yQ5oaJTABt4QwKevyRziJM3NEGKmD1snqxZEkXc5kc3X7th98u8EDr7m7NPAZ3NP",
  "key6": "2qx1BwSFhCNKmJr3cFkvskd4wTVcnjFSKwLS5n5WC71eCt3Yco1McDHWogGd59UsQbTSfXbBntXvCMRZ5GmQiyEd",
  "key7": "4MSE6YV5FDaLEa9A2N5xZEszEuBKeXKAr7dM4x4YwRZwHXisxzMTWTp6Vr4Tv9NBDGWjgW3nY8kXHWhYh63ETWXJ",
  "key8": "2gkETkL66227PVaAXky6QGinh95wgwf3EgME9okrNNKnLaLKDjLeLCcMSnH2KoNrFcA4vh1EkjMxpbtBwdjmd7kd",
  "key9": "4oL3dDcjzayNWHogvz1Rb9AUtp7WjszxnV3jaVRrREKR8YiXgbZdztDjjuXRvFhWvG3SDaHpVGnPenMBE95iM6Hb",
  "key10": "64gQJ2BvB1FuRHrfeZarTj6EAkXzuQUo4aAot8846Gdz9E9nYeUqNiEZxrffPqdgae2WGna5ZPLVV8r7d1Q8sCq",
  "key11": "3VfrJELpANJjhBPCMUAqzLmDYwVTjiZ9oTwsgHCii5sTLQjWaWPV5Rb6RQjSoWPDWtNCq52hFwdX6DPQ6W3bnsMk",
  "key12": "9bCADzkjKWB9trsfjLmpM1Vm6DwCcQS863PsjtEksZCLW4qTGiq3W2DBstrXCL9tWrR5Fk8QxcBQ2orK8wiASQ6",
  "key13": "k4Cp7RVugXcnSesp1aAcwvZfHjWYDDWm8qS5T7px9St7QPadgTywby4HTtbb9NF9yx2RW3Yqi9ANZwXsSqhS1FX",
  "key14": "3ioWJ7CjLJbFfHBfw72U36LV1ebtVZESGVmjQaZdgp1d4LQfh892QuhixWZjXJPUjmmVwAZ2JbMUQpcc8LuAz4sW",
  "key15": "4GsdEuyec55Eyc6f5gFiDgqmMdYgCnVrCX5X7kNfQWSk2RC4u2FMsT4xWY78MZBfy3iK9ksZhS48DBndXXoQSFMK",
  "key16": "4eAnugScugF4gBEWVdHu9Kiv28mJsxUonQKN9B3LJTnnhFa4cApjBVVWDQm4frjwWwwrx1goCD1RUJhMDS8Y3vzk",
  "key17": "5nyJemyzMFNqaxJx7N2h5mgodpkdNMNGm8er22nosjgjfrq1Byn1myWLpdYchxtU7LNSmhzUk4WHUTdUqBXbyRhb",
  "key18": "ktytoWbZSSac5EZoagub9RvXACE7e6kypQo9cykxF3N1i9GdVHUspFE48mw6rjss7DwGTNX45G3WzSi6MVjrTYp",
  "key19": "3N8eYf6rh3RTUQjydp6i55JqxTVUvyqEpZjAZU9LwruArZ6RUswiSKuZvCaUKkgW9cfKWfYvZHgYMqPPxs6YvQkn",
  "key20": "2pzWXFoKo9gKWJKAWaCk5sDgv88xNJvnR3HPkQn3zSSv21Uk8oY1ZJP9MPvBMzStn6GyavwsFpiaC2mTshTnQnGS",
  "key21": "3FxVH5mPbtb81BckVn6UUEPmWHxaSideSMv5sK7TkEc9vfcznNMYquX8p5ioysm11joHZKZbszGyc8cUHnP3d8Lh",
  "key22": "9duPhEmuTywUp7vaiJ2uVdFyPn8LVS4AXjQhGJV1Fs5nQ2ZWD5Rhw9XdngVeAcYABXRQB2TDNB65YEGE9rNGngE",
  "key23": "7Ntsdgc6dDvSCNFDkBN1BLNQSR8GsLrLNwK14Fp4VrtZn5QrTDRgMtKz72DwoRtdMpXdtMTyN6o5pLnf2jSbUG9",
  "key24": "MwiBrcgj1tww3YVzo5GrXQhi3QgcdsuPamb6WzYWh3ehyviGAAhsh6rF2oWxPNCKVchr3H4QNWtx2Mf9FizxpCT",
  "key25": "2tx1LYzrzouh5JZ7cwT28VighcDFFZiDCe6naGigcYQ867tVmCnyK7p2bJRU6wjGKLv1Be7QmyCWQ2PwdQGSydcM",
  "key26": "5zkQZxNa2A26ADKirFpSmikV9SD7HNDsM4BNGWXtYTAeLRSvCFNMLGTM3ECo5ZxDb6Tzs1eJfTfnneb27V4UyyxW",
  "key27": "3Zwj7JMmM3CNNmiSk3AazN8PB4A5gerYHRcocBs72N6pZp49DRxp6ea37rEmFwKyUiuUhpsvvoDXcimtfNhj3diH",
  "key28": "2ewHyE8oUDgwv2mku57G4MAbS5cTVYj7wEfcGSyH1UVHQowXLJMzUJGg4xhL8Km2JkJp5J9oBFfHahcU7F9psiAR",
  "key29": "2JuyvHKRzDWobARKRWZDymLL1nfDst3Sw63hZHD6RxFhJWH98pE7Q9oT6uhGVheBMXqHP5hr6WZZYwMq4Zv8zKuR",
  "key30": "5EoeUB3Zhpmi4bjqBqpNogSwMVAzfhqEZqNaw2qFw44CJdHcnVYYFA7uBhtmXFCaQpEvkeR6DUFW1prha1CPAVfM",
  "key31": "j7VUH29sowxLhBCWzRuwWPKFRVR2SFMjdTuMtmo7aAZFSQETo7N2P3kSMNaixPj22tXbFXiNBde3zVzMJ2Y2dTS",
  "key32": "4kLxAcP6XCfzmYV36iLqjbbqujBPdsUAvLoEgKJbA3kNexnZiwKASxmyQASFcGn61Q14ffYhPh1DWiNWMaUaBBbk",
  "key33": "2ggLiJZGP944mdCzKDQXygVNtFdEgd25u219h5S5AaBJygWt1xskRudtaCzRhGkuCgKiMdubGZNXCYXRYhAgQZHk",
  "key34": "3Lxw9PX1SMbC1nXduX4NQDDYS3jwhe3q1XcNaVmdFeQeYCRimDu2C3Cx8NBAGyzHxTBnKZVkuW1XAahmTk4brX2K"
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
