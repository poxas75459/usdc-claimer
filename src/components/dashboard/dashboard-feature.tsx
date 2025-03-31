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
    "31rifKCWjowPW93Z1pmWpG9pPfrh9w2jdjYDsE8LkLHeLQq9RyQkq1M4EUR5mA4YDSFTj8KN2ZGvZur7Xosufafx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmpDqDrwT6YmVwikuFNjxLa6NZd5fAYDxW5JJ1d5tgoCJuG2UByHpiEo9jHbs111psoLtZ5sfNZVLbeASt9axKG",
  "key1": "43mRhjX9PWZ29PVSn8w1Rg51WBTb1W1uPwQHqWWnpArAe14rHVPto4z4hJMvvQvSk7pJjd3fbrWx67yVoYKjNw5Z",
  "key2": "4V4uaQHfbr41jqDMQZbRkmiN8nyuk3SdnxRhoo3mREw8QuWWfRyypYVjrCzmeKJEZHMKKhiMa6DihQgfFoFCDzn9",
  "key3": "5wzEFrqwyoUoyRE5mfMHF2H22pyCNbC6rVoNFDeSzyAfXK1FF7EF8xBn7jiwXpr3LgoWGpVfdJJmL6dT5HX5hmwg",
  "key4": "2zsVRtyVhYpaFfayKcyjutZ9Mn6W8HBV7o5Cyi98bXpivq4xQuqGstukUzikr8CTiJmAQw3nSUrpRDiqdxnTp7FS",
  "key5": "3fUdcgmbpKaKE82kLcmiHMQX8QM4GWj7bxf2gTv5MAjTs2yVxFR69ZdcJMy4rsm4Zt42nD6MHkdVQSugbAg17JFZ",
  "key6": "2M5gJA9cHVRMXqgNXm7CJEaj4DA8Tm1KxyFJfKv3a6gJwc1D1Z8jrhLM4kZKfhuLQuAeTsPoekm5eCGMZ2172bMB",
  "key7": "4j4JN8i523YLDdnvhRb23inya1UvvM4yo7n2odW4NogzhvnJZvczNauJKqdb51HaiL9C5P75LYNKTWBfnjrdqhJY",
  "key8": "zn3ueM5kPuuZMG3xoNGD6xiYCaM2iwWYWSBgydUbae4kYsB8sXN2F6NXRrXvR3RjEd28rv2zNcmxNnQi8fH7hqG",
  "key9": "63T5GRUNjVWCFnHxs1dcCag2MNif8RqC4pHCGeRGUrmfsvxNNQoSwyxp8evo9DihrsTG9gmM6PtWBFA5XggLzMPK",
  "key10": "2KqbUqGy8A5S1p8eDvctfLeaaHJbyFLgJzzq53HTYmpo1dF3Vdb2X5EVN7cmpBGjErreaZK9PSsvki3n9pjSTbg5",
  "key11": "qQgnDNSEPie8LfR4Byz8em64N3LUSpVYkSyY3YViLKC7toY3NHijCTCUzetu7vquaS4B4oBHgL8FoM4wauAoWRJ",
  "key12": "25hyz8AcKvskEUAHs8PEaEQXHekJDDRpknEMx2qcdkaEoR6C2yijkMzCZJXwQgaT95Ss1J2bxX81tvRhnAmAHdjk",
  "key13": "4TaPMcRZ1dtt2atN8VnhT9DSG4jfx5uh7QWNpiPP1rvW1aWv8a7iyqeZmFhip9tRJLBvig6BaxNA2ZyeEKyZ7WJk",
  "key14": "3zpG8adGib9iVN6kyBenjxTW911puYc8rPLogRM2EsHbcufHWrPtdgRjFrxHfVP2gVBPRewjzgtCigqpkhwzghD5",
  "key15": "5NUnAMtSdHuy9hpcDmzVRtGtdjeJFmDiHYy6YreGHS3X9UP7DuqcfkB2U7MURWNjCtFzFTTdUjKrrUEZpjA3F1Si",
  "key16": "57weeY456nK9BrSbEhNoQkpoQCM8riUmt4nyYBDBpTWUuxWfZUrrqLYZ78YYqhDqxcVpcZBungjND2vgPbQ7mSu6",
  "key17": "W9Q6YwVBjTzzvfZjmpS6NayabCDpLr4ipbn6m6QReweA78ZyCKyBNTjJFu6hwXzsFdnMtvZE6dpmXFQK2GiEGsH",
  "key18": "5TxenybGr2FtWegg3Gq4DTvfmxqmvMc4xSvFrad2vjHMmbxmeNmqoAtt29u6qkyET1xUeDrwMNALXRd7rGZhywa3",
  "key19": "4ukECK4dfrCc5BgKJ9CVR4hVRo82KA3eoov6x4y9M6wsYmxGKX5acndwjNZMtJezp5DdLtqmavupxvZgcEoKcPGf",
  "key20": "RPV66e1jEjYPzomrxaskjmx87joD78erRr1pbrUGbvAzbymxQ4BgZG2d3gDHxJj2MD6rxsQF6BLtGSJPUKQD4SD",
  "key21": "5YM5GMYeSUgh8ZbxXhNDobHZFX8FzrMkaeFbRfbuhmFTu6pL6yCokKCD4Uhge5MX7gE7hngN6k78RuZvmGhzoJXm",
  "key22": "3DXFhU4BkxM1PPon3aFGzYD75bkafDSzBNw1Mg5SqkGFZWRQEraBSdmwbrnNPrUYL1f1D24SP5CuPjEUEToGR6qC",
  "key23": "5R14EMeiFrHKPdbvu49nvUN53bxfK6tFZyBv9MBTPJjNVEYpYJHTGgYgrFZgghZmCw3cqG9VxFURgs6mKXFyeviE",
  "key24": "5s9fsTVL1nBHHvrjSTmDmTSs8kjCc1kXXG5hA4we4PLE2ULp5y96cjJoXqnBvZnRFepTUyJukByzubWDHCuaj4jw",
  "key25": "3GqqYFuw1N5dDdXgSQqpaYRdW1jhAcuun9dcy18X4K9Lubz74bVUUh8P6QG2ESAL3DmMurA4ncdm814aXWZKDerg",
  "key26": "4Z7ZDFvJ8vEGAc6T9QSsoDCSnariW1UMf9w6coHfm9Ew3CA3bBiKMjzVsrCWLvoh9BBoEQgeFXhdBT23pWjgg6cA",
  "key27": "39tsF4KgMfyFnzc6FWGskzMkjRdRo1PbKthmCsQoQkWne9811kE7cmgKX8DJTsVVrk3ts6yo59VQRtahd74C8grH",
  "key28": "Dq3zkG7AEg4cuigNexeDbRLvT6ZUHZAP4cNHxzTS3vWj8qKofjRWygFS9JpYBaeWgQiz2avvwgqhxtnYxNhv78x",
  "key29": "32DnBNY9hGUBymuK14ZC4uPbNDo5eg1fZtHYDMZFpQ4aUCsVypiap2NTGLNVXpqQihqxLd6ooYKpKSXkxjugY14p",
  "key30": "3gGVqpBkyg5N4mrA1eRTEzaMyLhjDZNF6BUyu7U4jugDwFP7cF5H8GPgwrHxWP71q89RMjHakNdX4dxjxPNmKwfn",
  "key31": "2pA7LjUXiLkDSLaSAL7Mc3sCQhJrhd7F8mEtQntD3TXz5sBMLS7jriaW4kGvq1bURKDs3Kawna3ihZndocvifvb7"
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
