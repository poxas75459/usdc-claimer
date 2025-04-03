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
    "cgKd6WR8XTM1LTy9nsAPqsCmeGFGErE9chbemJN4FojLCZKjVgjNwkJxt7wszG6Ro4zF5eYbh8P22FrXoQZnxbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N5VYpywnNsR2UVSP4QPznnuXNHzjichuHaUE5anV4DJ1uR2bF3KFdtM8xXHeyrm4RyGmQh5oseNCmmWtNnDhs5P",
  "key1": "31oRJTnKfLdx16gT5v34cEzQNxos3Xbc412np7iWem4jsB1mPvFJAjFmjqZAWx9bXTtxvi2F5CyMtjebVkvXHCx",
  "key2": "4EZzDW5NnSdEcGVNn4nsERFP39cpSs8EGnxjnPHcsFun7kCNZYFk1jtbkvx2ByUQNT5fcWRcDXKz7C9fxBsWVxFv",
  "key3": "5Y39NTN8uuyHGKJWqySFurHobqP2meZJCagR6pEGFmMTavfvsMd3bkTZsNJBXUfH8tYBPFViKKo1QNQMVJWfna9r",
  "key4": "4rKBmvTbF6G4zJzUwUMWUotb4RD6dFTfkA6h1z48WAQU8kZNKN7qtYV9GQkJjJDtkmMbvjQXG2Fe8cJmAiwgFRs3",
  "key5": "SB4hoRXm4st9LG32PcvRv5RWkHLKqUBRXU8Y1AewmMAFwXQ4rxmWD9KddmVr3QuYWqi6pJrdP9DzUokWGYUw95J",
  "key6": "67D6GfgaUiyAfpePxRQV5d7Dxjq2pZ6oUC1Pn3wMEsAvZo1aB3UJQR2YzyvLzAeaZdgkd9HVeHkcnaL6tmQhDsJG",
  "key7": "5X2uYHrg3WbyWPaepENXJnkN84TKqEToM1LsQt9KZhSsaR4aNe3WF1ZEsCVegMx29UdKgGjg26kV6jeLYHRZBeGc",
  "key8": "3yhpjgH1iYfDt7tyDRid3LAa9hVLLhmEaTgjuHXaY2SEfhW6dLtkw5g7BeYqWnVV68LgoKhJnKbDakh3npUE5ESy",
  "key9": "LALfXmeSZ5JxYXdE1cWDyWiBiuocJ293LbPLP7cCub7NQECCNfUAStm3zmeVJg7w1FtabDsKXMTDJkpMvbRm5MV",
  "key10": "2CwQLDEFWSzfjr6Tm48XvmKHvSfRKb8SybdYSXu1mxqUyccYMDpwEqUWNUZGQpfiB9Lrnr6aPCLHnMUD9at259BG",
  "key11": "4Zj18KgJ4aY5dC92fq2cKGP2EaBybKcodZ1zsTK9cLm6357uW7c8ZjrJ8PL4jcz5cQNixkCqLCQsKs9Fxfzc2zfC",
  "key12": "ME14eHDZJ7x8Z2EeRZohUSx2AvYqJxwA23hC2Fts27AHdDBnwjnDVZdNJ2wt3y5nLRSaZDmhDriJ6QpRovHDzY6",
  "key13": "5sqp3zaxuG8MRRNpdaNXR8u6o2QTf3iCAY6gDGAu6AbpNrcsD3VC1YcGrc9ExNCkkGYQckPT8f6zZJ1gS5ufNB6w",
  "key14": "uh3LMcLyGfUbCRFWVuwnBa4sesuM6py1dk5mDidC2iJKPqCJxNa2r2Ff9keSN1CiHzg8CpQEgYxDFfZLFDUtaPm",
  "key15": "6UiHRWvVEt4oFvLU5xz6yLD4p4xAqkCgdwLR5DFUXKBKbvcEcstttKzVZ7NKnzxbMwJ3WrBeap7ahXkmvx24qN8",
  "key16": "5xBc2XVDc5JXj3dYqhevLPRkrMHLY3Bcki4CwAUo6TZnjpB1qcNAFn4nP4EnaLAL2Na67qY6YEcgqeojVpCBcKVh",
  "key17": "2N9T1EtHbyyVARUWgs7Uf4dWS3mgzRZ6r1iuf7SLeHJyvwb81gjv8s8Aktyp4kh3bF43Wd9NRt9qeCSV572Q3WwX",
  "key18": "nznXqi1eV1PNB3qYn8zarHNFxAqJ9b3FAX8E5kab68yEGQhE95YaWekZN4AmZvVY7e2B2UZ2Gx1MPQheuUvye9o",
  "key19": "LX8TAz9tSTfnaUZufUEDryL3ThXn9pYgJoouiXcQ3xA61PUCNxj4jY7vp8SEg9djxxdjkw17FVUVV58uuzTK2kq",
  "key20": "61YUptEuzedrGePE3ZWTkT7PDHc7mMD47MVMoWKZ9YvWAHtnRaakFLaWrayJjYWTrwiwWk6UoACnEkQTimZdhcGy",
  "key21": "5gdjh7DioDK2mCm2GyU8J6L65wui485D8ftSSznWxszt9unu7iEi7ZmLqzc1pYKGKwsq5RsMgXypNWyX3DCoP4i9",
  "key22": "4houXKWr5sijAnfevabYKgwAHpb5o4vM68XNnBDvzdsbun5mDvbojtwH9b1ncYz2tku46gLZ5TnHeQmczgMULhgm",
  "key23": "YMNJVH9ym69YpBNVknAb4R4vcZR5VL7wX7gDBMiKNsuWVXut8oWJtXhit9tJucec3UfMs7GNAZVEcTmWdNz4Xyp",
  "key24": "31pGz26gqjFVuxeGoU5rBzctEd2f2XfsSo1Yz1gMv9Dzxh96uYDEp6UDqbnd5GfoaaMW3pczXfo4kvX4XPXZMpL",
  "key25": "2mXWncPFRuj88nvtSR1ZtTAz3cHhBHQsffSu8Wb8Cy4qP55Jpenpxe6FrKnBUePTeZfy4sv8u9SsUJmgoRziGU34",
  "key26": "4sjuNsXYonY9cCbzCSnS4xNkqgU41746VLCNaAFdBe8ATf8ionmfUcQVEjwpuBiebNTUY4qXTqSmSmCibAamUWjr",
  "key27": "5rQc7oWzVjWFZW66wzNxn74AmWRKNKPfLFqYbJFT1VfXhnPE4GeHQqFLm4Yx1S8RUEDVRJLQqFhgNXTnMKdoD1gM",
  "key28": "2bWLeSRFKrRwbeU2JoG4iVEs1ui5ixHaG99XeRdoZJnBhmbPXsQoJX8wstpt2RgDHwZLkBKDYms9EZ2goV7YMKDk",
  "key29": "5wKdtUkra7U25iqgNbF6EN2dPa1LgWxcMWZ3PoRMsrgBNNQq5PdxDZke6qr3iqy1vBdMafKqRKVafPQYM79Ch9m1",
  "key30": "2AocB8wd3TyGurkoovLEkyMKv4qoLqM4UVw64EAEn1A7D2gtQdTZuQZdgUuwCiGyEgbRkWcwybYrR11Pa1yoxPVS",
  "key31": "4mWMvGQazkFNSMkiT2GHj9JZGy59EmYmQRARuh6AqQZezDx5zfYsZhvTLz74phzR9QrV5Szdiue36JsqBzui5cwa",
  "key32": "3GfSDvMCGE9FMAna2zjit9ifc1R1LwNdFQTMdPLu597C4FXzwL7FhuB6Yohog9hfNss8RDMaZ2QCLa3tM8Dp4EzB",
  "key33": "5LpVrTuD2icxQTaV6RKmHCJBhcEDoMSe2wdfvEtMFdJyfUrQ5ChDVHZKfDvV9aZSob32ueWteWhXoXhUHmiJjjgs",
  "key34": "4xHZyLxhZbMVsFeQSCe86WrYXiQhQ4qjaDXRgC5y8Qxcb7S4vNTHVexJpgWnBXy3hHHVPWWWHfziZnVTk8Q5WppE",
  "key35": "JnnRr9ZFGzkbLTD9VSxwaaGvcovWNdHdkSVxcA7AK35VV74kmcusomg6a63Ee1dzrsGvDfuKJ5WMy1eSyamS3FK"
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
