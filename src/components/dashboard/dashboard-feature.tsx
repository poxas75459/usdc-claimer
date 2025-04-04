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
    "4id5fzbD67jEeKMwNC1LDoNw3v7hpB3FzdukUoQu76PW8KhC46pAStJNr1kofaRuB2pk5n9iCRr9R59TdxYuTuUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wyC2jLrQ5PsHfF7rHLSPmJ48SLn1Hr7hA1myej837G5ymrRWJGo63T8pVgnA1cf7MMdPW1F5xPch5femCPi9Bhp",
  "key1": "5SRfqt1LWJni5UWn8ToWNaZuagat3rua7CmbVni58F5QUjAZ7jRXaxeVhNr2FSQf2khDP7supNftSKCgTQvR4Fy6",
  "key2": "5XB3oqzdrcGesM9GzSjFUhwWZntqK4kX7oTec4mVGvEvJeMWmpWGKHN3sqy3a2FcJqhy2P8UyorHKf2K2W9ABeVG",
  "key3": "T84DzUx4BwbxnqnjqdYdwJRAWdQcuWLbqRKgY51Pq3kkzNNQwKxZ5qbgUxyohpLx5WeuEfw1ATBiu2gecZKRL9i",
  "key4": "4YPD8Qqh74MUmBtx3QwhXWG7PSPrseR6cf6cFeGGuiQpEo99WqUiyrFE9sJFoYmVPr4CnjA8dbBexcJpAiLobWmF",
  "key5": "5fVCMaCagBFcrvdkSd72CytN3zXZkp8Zeb22gTr3hPcuPpRsjwKRx8NvHNN6D27kyCnAizHCJvCRVDzWFBWtB7Kk",
  "key6": "32eCzufu79GEhpN9RC1gmbTG2Ex3Pc75cKV45qH3cyWjrZVj2ro253Ln1pTBx45YtJufoHd7MM1cCQKv1i9Px4EM",
  "key7": "h7gVUEZoTFLweDWSZAV8CySCQggfTvKr8KbpTA62XS7ztiH28v9SwYE7TgFMKwjUTmE7wBfzZRtdz7oBv2EbcVM",
  "key8": "3wHmdLqKVLW139xU3iY628jxDgfs7yUDLEKGtcZ8kLCDG4EcUJfj9QTMWv97Ee1J1tbDdWbKXE5Bqbiy2GzXSGVG",
  "key9": "36LcsYD4oVWTCEySMCHfSfLYT1faJCN2s5fUiQhKsEZgWM8XtTGh33odhGHbKXTkGCjWZwGoRDTCfXCsKkiqTfuR",
  "key10": "3S5K2Fuaw5T2SHxGWZGfEdiLVB1ubcbs3MLC1PAHR8WnunibaVjcNU8F8eKMRgaZxCSGpsV9RjN5YmR1JzWeGrk4",
  "key11": "YC8Q8ANrhsk3pL7AS8ybstagktN7GovqxLXkt1naoZetWt9DY8tEYDWc17VLk8FwrZfWV87XFoWhmWPLGGPFb27",
  "key12": "4LXo1iYLafX6iH33ZQoUEfk8imKR6vbigWgnb5SmE6PfgBtaZHi29APx2JGK78E5nbUxi4sPXbA3Mb2SzXGpJCMm",
  "key13": "2u44REz36dr3SdZ2DnUotfHNwReL3uT7j96UpcagF5cP9wihmHMEEc7XMYACktHqPpiorBwfTLnntKckR6ixaquH",
  "key14": "CGJGssRMfWCTBDcYkT8mV3onsLUWLQpMChXAiEUDZ74KJKWbwN8GQkZ2rSzBbVDZsUmptNZ4QjhoXcZqbvPLuN3",
  "key15": "KQQfXZhGGydi2zZedtgP2qBDzPubiCtWuKQVDjtCsnoudeTpLLDu9riVgbhtuKSpY1xDLwjtDc5MPNZHhKCWERr",
  "key16": "5GpfVCWyXqrpFDU8gheWYgYjzojzMUSTBi2M1dsKi1QTyu1Wsfk3FDAYy5vK6h8Kbgzvn9K3868NYpzDGbToVWtp",
  "key17": "3K1P3Zeg9yXJ9TwtgQ3tBjpnSnoMBaZ4wcx86YiwKsyZibLfB5Y2f2beK6FNGztAaK4DrE88RKtsWWiG1puPk6ix",
  "key18": "uJ5qqX5xHNANSfYA8tj6oFFKAkdr5kQJWKSu6GQCojQZUeL7GT4MpKextKZEwKjF259ACAmDnwNv1QkUvVu3eXA",
  "key19": "2finQMKrbrmx5gqguaDVLEVYkLD83m7EpZfc8TfXKKyAmeZnYtZ5T1YWLkee5Ypvjxwa8FvUCswDgeA4fuK55nVv",
  "key20": "2RQnYnDUpYK67rvtkKHXkKoMMXoTwDCrX2J7unSaNGhLFjTuP35frJNaVYf1W6wNGt6MtRZCvwZpCqGdMdd8CPbi",
  "key21": "5eTywv3Xbcdpm1mVvkA9SagH5T4rPcgTn1p8eBdnU5zdxaBXDAmw2V96rTcNELY3tZpxYEvxgBRXYPC5Hzby2XLZ",
  "key22": "5LUoJUZgP1jCX1o3FcxcWGDjqXRK2rCHi2z9Q9gAGv47R6cxicJnoJmjqFnu6CpkH4QNUdhxSs8dUP3dCj7JoXih",
  "key23": "YhQ8VvkTiweWHaGwwkWgvuJbgrcDUwL84VS8v2QRhiVcpLa74fRW2MWRKPewrjYwnAoihRXhY6TbKMXKf7nLaz9",
  "key24": "3SbkwoHCWUsLPR2bGvmoTFWLrcEYebm1k8tjamSWq3XwR454H4LAAiTLiCNFyVALrCpBSdHTCTf5oEVmJdp68Sf6",
  "key25": "5UTsV8sDzSWizUUwu3ajfyDoKU6SM3Nh1FVDEZHEz8GnYd8XEDoVc4GwmSEoNynWv8wviLJtEeqFpLwDy9Bh9foq",
  "key26": "BKNKsqywHzyKDizpDeSxwjZiaKCJD5GZdTWPkQFB3xBh9qycThr4GgRkpmV3pF4jdgFfeBCjGSpWvqC1dNVPaqn",
  "key27": "3zLyr7VDAndbjLKFSMf45oNAneFz7BmL6kKFdKgXnk8KkyVyfFhe9fytfybLPXrbrBnSnXSdKAsitYpFW9fBURye",
  "key28": "4mQ1JHdtYKJvBNL9MLqWpo1kjWyisuPSisz4B1NMd4kdCTtmmoCSi5zNGK1cU2b22x22QVM1qmSV3nayvQEhjNGQ"
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
