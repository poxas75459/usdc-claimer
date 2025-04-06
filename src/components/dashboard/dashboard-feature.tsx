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
    "38PbHKgRqNc8eEaQpCqoP37WuTQn67NgiY8RrRVvWdR4e3FnGubTNtDEM99njkJrXN8gwvMooAgFoSEnowKAd46j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GE8RypQTS1v6SAFok21MYhg71SxFsEU9j7KfSeoLXoRsWE4nryFAY4uuHiJ7k7TEb55iBjQCkwDygBRko8DZF3d",
  "key1": "1sT7TWPPBi4AgBWbDFJPXSmh7DjFwMSr5aacWwed77vdo1fPduMBo4XSxEihkvX6ZK1gmjn9j2sK6efbmHGiuRp",
  "key2": "3VD15pk7souRESGzgVBmBQ4MkshHw5D3cyi9j5SswpNSBWd8LcBXYbrvgqhAhE9sKc7nnkZbTz376jHjCEzGBEzG",
  "key3": "3mPYm68S4QTgy4YY8oWQZMjvTfKybMhUFDgznLstKw5N2Kx5nxyfUZXKx8dz9MiTDvQAadzgQpvYoeyGwkZrieLP",
  "key4": "4F6FKNYr33iiC8mCFnJhFGZj46nu9H7jGR93FQtVCz7R725bFwyfjop31ht72nbUuRBAWYus3YcfCievPzeKqoy4",
  "key5": "4a2MjYPkXpvkbsJGVUiToK96fAvYuwNiWQqCAW9exM7gh8XqePVQs8txDBQRTVnb9fCwQXSBWwHQ6gLvV4nEFujy",
  "key6": "4U5PfEGUxwMfh5ochAKAWz7EusmGfDtrSCCArZ9FzVMKRHToqu8dfzyd2p8M7orpFqUN9CZhN8k6uoqSSLkjr3As",
  "key7": "5GSYvo9b5JqYMNocM37ujtgz32e3M3ryLcm1xB8Js8zjTsubYfeNNBgbLvQyA3HmYyuTZUC3WS4JyKYxx2LnTU1s",
  "key8": "2Gq6D8Y1py1o3rm2kcVK1CRpy5hNEMSBmEf4DHzq5Crer2GC5Dui5jFT7ijaZ224eDbk2K8MAE5GnaHvGeiAEEKg",
  "key9": "4zeNajorqDxoxbPJBHtPDX8AAmejg6aK9WHULisg3Cpkueyi2GPEF3fZhShMM7qoh4PwuCxDT5inZMZNDWFuYTw",
  "key10": "2JbFdPDCSVU1JNjqhjaBquzK9nrSf4aH8x4bTj4zEjoeA3Gc1JtWFf9vJ8qPx2mjxDWwatNC1SmMUTsPRPf9RTzb",
  "key11": "2jBytGBdsn4J27fdpqZQDZKvKrFLbKyEofGNjDttPiMEDbUcrs6eeriyfno4g4pHVY1r3QiE1vysXgcuYgXU1CFA",
  "key12": "2LfVcrfyVnceeJSa9R7TkjPkdvjgbjXoU4m7RC6FgS7nPrFR4b1oaAUSVypULffS3PMaq6eEFWyHaB4a1oYpHyac",
  "key13": "5orFhjUsCagW1WoWzYSKPR8GExREUiJKjmus3BeAKDUL2U5vHKjSXQVM2tzQVG4tUTbaTB1gaGJUv2oxSpLRGZFr",
  "key14": "65VyfZ3P312juuvCWULLCmTPGbi8MjbnseFNdv7MLHax5jngtNBFxydETKLVnzgVHZExpttf1mn7nbNAYJPY4j2v",
  "key15": "21rh5T8FcA3srJmgGeyXenKKje6JhWW5vVZTGSda12h925Dmmusu8K2shJK9S1DseXdtpCq2ycum2GS1sncqucU4",
  "key16": "2myUpo2ks4mmgcrP3KJXbK9LxfNpjWyNf98LfsahpAc5GpnBU7YhUr32ZMBJWtvPWFabLmpZiEeBkfECwWWEH1ZD",
  "key17": "b7svGDus8fkFPNKpPy3tzL7LU2z3TH6dbxitXv6qRD7A7rv6wReGzGj59FyBSPjmte27ZcRWS6X7c4gaKLfwDLb",
  "key18": "5FE43qsfJNenpNNUs8VSuhYEE69dyxG8UDZQTKNxqjsdz4vqHdu8x7KV2e5hwTMHyMNk4E2ntsRmEvsQFpXrTJRt",
  "key19": "3oGgzoKG1xeWwSC2GSVft2gDvqMJGYnQs1VYuAyTK9p6UkpCWYG6oZqzBQxkRqWL88xpfQEk2FXSFRS4ToNWEYu4",
  "key20": "YXbPxegnAxMYn3NdwrH6NSmdqQVPC3smU6JAunc7MA1W7f29pXLee96oq181Cph77vHhzq49W18NknMHLUgRUhH",
  "key21": "3wFiz3NSKrjxJx7YK8YCCCJs2CpGMEvUs6fFgHMXij4zimXNH9qrwBELK4V81mgw7TgA6vnyErBXL35fTuFAJYDu",
  "key22": "4q64dtgnGtGNXRZmsztSMEWTerVaAJRabfxpjQ48oE8aZJwrHAW5mB1gdntVn5wwxYWgmW1QJSSiTvvV2KHHPxWi",
  "key23": "2s5R1hPvsXQpZQT7hscyvds1JvcuQepLy3KybQTPL6TjxB9jRjfjjTUnC6qKvutd21jEB7A6ix98WhLf9bHEm6Pf",
  "key24": "3iPYRkZR9yYt2ZujguZLeVq847cxuz2VyFHPLP3MpTaGKrwDvdykWbnRMV6LR8YD4ZXGwrsoWK3JstWB4gPGWbhm",
  "key25": "2i7X4ZYuFUno75XJkBNXSD1dWT8M1gLyBjC1FuAiGvVSWpAaR5C1EBoU6CKJhwWzGQHUX9iLCMX91XKSZzCkSuzh",
  "key26": "53SuUKpF3ybcok8FV9iZuY5Jmq3kS3PUxxmg2iczCgMXeHFtbtjFVNB54DQuUuTCBc8bToriUScTLpywjoUSshiy",
  "key27": "52zudh1UX4u1eyrZELyAnvoSaW6GefEcv7xN67nShh4Vj6cLFys4tpyfe5jtXXkH685SBqQaTpnye4AQduB6zhj5",
  "key28": "3ANAo1Me4Di812CoaMjuWts8MUJ6UHb4RBn5V5eNask1TL6wF7ihTBzMabYC9XN1ZfzqhwYu1D1NrWekJnBhtQk5",
  "key29": "38Th7NGGXknXTwkfQ5ekJo2winHos4hLMhRTmEt7PZjY1fBJo9E1GQXuUatgAeFiorZYqhyFmfLZwkYLPXBY2gAX"
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
