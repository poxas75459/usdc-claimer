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
    "3SoVMpNtKEApwhCC4YBFwYZzZpoue36kjrcKQPJsWvS5yowAfJu98jcBk432d4UYWRGEiYFH2fVq5DtPigKX1TDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ey3wRL8ffqkmyC7Lv4jCQRfJLagL6aRNF4p1SQQwxAfFUYv5psUVyxRhVgGRbMsFMF3XF45YVkE5pNBWYMYEbSw",
  "key1": "4YmnajAKRMgapTUkYM18aPFuaagUTPwpvH3LcRJwGfmRtRnoX6uk2YdhX822Ph7kb8AjYZ938qx8som7CYsaMRpE",
  "key2": "t3np4q11roQGhRoG1PdXaw29MtuVN83S5ewvHJnbGPXFXHcefUSRLqAh6sqbQNaczM6yMH72froTE5M2z8HF6rc",
  "key3": "3V1YnJxHp5BtZFAPkLigmYLKePfT26FurKVfxCb6sR8uVkfG22dJ9KniH9EdgsqBiTQ56mGJVfNNmCVPewUFbpbB",
  "key4": "4bpTEBji6BrvtaVUbEsvJ5ZscrzkW9LFCgYrsBzxxCdWqnCy4UG2uosGDDcdLE8SVfuuzhHmuQXnJPxQEiBLJH8d",
  "key5": "3xhjjYFSNqa6hexctM7T6bYNuZakDjr5TQTrvY1XtjFRU14LTpSFCk6zzLCYvPJq2Ms8rQjHHLoMe7dNNnprW4wm",
  "key6": "4bXB53LFXvsUaYARkga5CnShoVRMPMtQ4NabZSHdxA17yxqR8VbL6mW6N62wLPvuZAX9KiEkNxcoo3xMt7EjTjW1",
  "key7": "3F3VaatefFmkMeTno9D4qdNKef1RH8xj1jYc4siB7xcaSqJxXYAbwp2dTBf1T6LoytzermMG1CSrMQRBZ7xQHWbc",
  "key8": "3ap9ot8chtU9WJP9AuifUWtzYpgJsfabPNmiC4DTpfPeRu1YdemFYo38gJb5uu5thqiUZMBa8AJDXMDiGU69C3ST",
  "key9": "nGwtAED3jDwTjbQFDbjwmh1xK4ue4zqfwSMosqiyf3E4SDnG8sBovDrjE1sJcfHpzMxAAPAxgnyzAygwzeyEWCm",
  "key10": "4jChrw9pdxvBZQKpGVTA3G3M8LDuChZaK2V1UPMhFnHBenSi3EjQD2FjpLj2bKur4YfEegsTBARYqqmfzai7MvAg",
  "key11": "5rABNKLCAeVXM2Ww1hpcvLsAxZGnU5XMxCXvcJoNnpoi2rHS4R96V8mpwLSjwAsBdtXD8fSFqmY2Hw5Fb2aeG7wH",
  "key12": "5AmJSd3pH6jcVWkETgbBt1eBj9LNEfZbBS8atRQAHCJgr9JVr1Nrca4aqPFej7LFA8xsJJpP39bFKXC4YMjDyme1",
  "key13": "qw2JwjGt2V3H7GrKweqvxFYNttTS8cciCrZuSGLFtaBqiLBd9fYVV4oy1ZCSGmYFTPHc6C4PZubDfRok2k7FKKZ",
  "key14": "5K5RVpHX5QqsH1mn19GSL9G4YxnkDqdCe11XyJdJQEiLKwWAATqEFP2WJn8xJJGaK95UpfQZCoXj7XCPufTTkvn3",
  "key15": "5mrNQx4WMtKRHcKBqD9zzeR4ajGxsuTUaxdbfQqTe8xTPvaYCMkZmgHKVrNHqdNnJkQt2uL4LCq2GRmtiUX5ZvFh",
  "key16": "2bhLpyuzCuyYLEw4H6FHvqQghFMTaSsHtEmnr2ELYQfhbfsewQFGyRQ4jn3xa8B2qCA7rCVZJiMSXdHFT844jQNz",
  "key17": "4e15zKmo5dcvkas9rroWPV9LWAUHURLAK7W3jCAG5H9aKjT8a434rPySG8WJ2AAtQjskC1ZSza7gEmMGEDULi89Z",
  "key18": "siz1nUEzAf7SEGj7hJfWueq7VjYkp4JwgUrguEJ9HiDzQvGCWnNuEvUuFgLcpcTza1jCgaPZWxD5Q6QkFYCcRjD",
  "key19": "5QoaWmvDZX6bkf6DxZPeU69MRYmtSPYaPeKnwFDfa9zU3txPDGgrdRoSjRwfxZUT56BWcuP82VnXPPcJVEagtggv",
  "key20": "4Az4D3KTwc7tebbC5pYbaBN9nNWtFzhc65rzg4tKbNjLkVJsnjKtSHBegoPf1uyfNTbV1kmBpa5WXQxJT64Q7xM3",
  "key21": "GM8diMiwz4Cofv2h8dJTZxL4dyXzGEYd8Ew1cPkaVwgEMVocZHw383Qh3KL1XbJuaKZnt22HWzd5FVi5kdM4nJk",
  "key22": "Ydy6XNCAqkSboWWBwepEtpwe2FJq2tBSP5W3n1p8c7NefjZiX95UczpWFCNiUi1AVzgEGBmpegAUwWf6KQjaFgW",
  "key23": "5KXrT33wjQyNtdmVLWxvhy6VTEBzLTjZnAKG42qLiu3ZAKTYfRrrb51NZWwtHH3cHY6j6dRLwx2zQMAyhkqJybs4",
  "key24": "4dXRDJ2AWVrZSo4VaLGB32jH48uAM3aPTF1fWCUpc14eEkDkXCswTgFaxufBZqMHeDiFxqad7iAgSWwTqT7K6EcQ",
  "key25": "4urafrk5QyVu75PjrFnAAW5CCY65YVGys1rXG5GvfmsFnGBu9935XBTaCFepuZji14fjA1TWCT1Pp6zj2qi2PP7Z",
  "key26": "2TiTgkAF6xrHyhJiXwj1u8NvfkdHYi5QeQyEhoYtCGZaoZfws6LtxBhNS3StsE1FDEdwWhychfKHexQ68uBoLMYq",
  "key27": "2M5RLVAh51MrZLgsmckdqS7hDY2Uo6YG1nB5FY3C2R1HbLXs577amtA4PDqsGco5aPTWdhNs5VE19m97rQg9gcQJ",
  "key28": "3aonwVbaxiR1dAZKc2rFLxYMRsDSqFQb2jCted4jCmguuNqRiTtkzbQeWxKYD6RtDK47QTnk2W5zvqUao28wD9Sr"
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
