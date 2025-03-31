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
    "3zrVVMQ4UhmsZJhhjSuWGtm1YmasBMo7XvWADwf3NeAiYtYFzLTvcyDZFxQP5tYzZPHuCKhCkhZwJx8cUAgbTQ9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hz26zk8vKdLM3SdooEFbW5oP5zL1Ax52WbidjNnHxLgECnG6U1jJU6FYGUmQtFPjVA23SCFGxxmtUVZawzJJxkQ",
  "key1": "38YqPhRVLzd9Fe8w8fz7BtZXEiVstBKbyzxNFZguNjUGt8tdRh1NuPkxQ348L4cPJtVyjY38EN4fAgPpqhzNrRcR",
  "key2": "5YBFCEJnQtvxQS1y29WiWmug2iJCxB9vkkHrgmmLtmxDV4UR3NGDdWxTbbJHLE8BhZPbXmc1j2tdW6S3mzAXqHyc",
  "key3": "DN8xz5geTwqFbaPtBrFvDQoMzxgaFXEUsmEx6tirkCCcFTqYPa2aZKWCh2f3Nn6nKRuZUaTEPBFtVy6sAwW2f2i",
  "key4": "5EzdEmDRRVyXwVezdvHqhZbAELYoHhDoz1i6e2UDiVh2WNiGdwbAv1m4bCpTLfBqFC6i3RgbDQHo6hBCLQD9LtAT",
  "key5": "33mYHdbMWreu8Vtse8E3P4osoFLbLyh8uamZjyzqPzPaCw41gfEz5osh8qt2uhdN2nNpTufRWUXk2viijuFyARcR",
  "key6": "pg8XijmPMbEQC78zD9eFGW2KWmKCxyiA7rPMUpzQ8QFtsUuV1YphHrnmNBa5PzoneGX4k6brDCC4sqHR6Z2H98k",
  "key7": "X4aW2puZtXU5UpfwaTU52nfoZNtqwnb94QE3tUtbRkF6Wu5TgHMbUcHmidN6gNnX9SZcW24bDhjF9AjCwzU63UN",
  "key8": "EhTyZcm9ppQaAGXRNi4dyh3HrkMJUWXa1ejhieTTbFRVijP9dyD5DNNEJDT3dwRJYB2r4s5pbnERV5fLDxfkTtr",
  "key9": "3KD2aeDtK58LLRbJPk17ZSL5KkqwgasvqRy2U57b9A3nGfQM2Uvp45TiDzGN5CBxrxMCTZD33kn9JN9f4tkdFBVN",
  "key10": "55PipszqLHTiH2aHquREKXDu2MskEHjvCu2evxCfJ3XbmaJ4tMWomcYVT31WdvCz7ijejBuyvz3iTatSJtjQPDKF",
  "key11": "58w4PtjAYhsGZTqqjWE8oFScouhnRASDjP48DfCr29DWX8nSekbv4Le2qM6meThR3kLtLsPKYk3AELmnvQ99s1n3",
  "key12": "2XUqRsmJERpSkGwnVZucUG4SrYgLpqHDSaZft4a8SRMF93NRdFqLaqW5U9DxAncoMpmS7rJwtk6fG4JFyLw21TKN",
  "key13": "4rqSSQToS3GP1UVVbF4N4ZDxiCKn3ShR7R5BEu7pdhzN7MmmxAS9SHHQmH4ddeLZcgL1ERDn8okFmmVEWYiScG2e",
  "key14": "2owaNYirzGkEgzDV1DUaAXedCFcVYpmZzdmbsY9dd3pAUc4sF8EC4wdeiKzBFW6Rh1y9SDtWW2bqLTKAmC8NvVxq",
  "key15": "4d4uC8os8KS6357dktMmRLw3ryueQyodLtfT3rEAbwpN1HDJWBBfZHd4RMGgtHe6HtBF3SRfg9iwYZ1AANTu4WMe",
  "key16": "4BnPWaj1S669p1kzreDAQoXAMsBviG85PnPxTd9AEFMoMEWoHQcpF3GMpj1qdS1ZWFpcmH21AGaSSztWXkyPFv3d",
  "key17": "22t7AaXPCUpxxmry196P3xEBpBtoXficnJTXsxYr2bYWS4p2DFoQs9wRTfTdmEUDuMx6hdooqj3L65oahjRsdAMP",
  "key18": "2d9o8cd53s8TztogxxTXFhQXE8su4N9A1XRzG5KwF66BJWvSE9BVnu5nMf2YCyyv7NHWrEFVCT4n9HDQXx6DJPjD",
  "key19": "4P9RLJ73RUQZN6Vzpk82dXRG9xVtfr3xezUakjrdDhiu2QC9bQUdZNZsWzDdN43rUFRTBJnSkKyzPCVnGQJFbWTe",
  "key20": "3sBr3DzcARbpDcQHuHJ7rLkcb5CptypC3Kuug2vmKsjiSDHjiDhZasfEPZ8iGqry9Lv1PqLheC23wUfNcmmFpRYG",
  "key21": "5jKTPC3NRqWmR28bcxtdv8UjBVNYyHeEFCLVmBQJR8SnmkPrbH4CNDuo6PY1rX3EGgjhpgxTPsyUWVgzkue9ndTk",
  "key22": "yRC7TUQzzmBP2kuCHNYvrrKj4YcFyM4R343HRD1ryjtVa4y5qrXbN11P3neBbWysaJnJdeX5vKeQG8yTZZeK33F",
  "key23": "241biFZkTGhkxbXsh9xeFtzBjzGuW8RJSX5nNdpHxqNY5xaqiQWZNF5W5AFwLnj7rb91dtFk4jTUEXVguP8d5Ktp",
  "key24": "3DpCobQHdtnw9433hF7uuqR4YCchpZdTtdj8DuQup375hqwLnDskaCqS5V42N4PZmmDRx6Vmu3PBzqSHRwQ7GNaL",
  "key25": "54QatGVsixKPKKWcpdNH49tpuVMtwq32uvywchorybQfYyA438Aq72PRN9ma51eL6Ss9FRBewA5VyfDrqreLncQW",
  "key26": "5kWGBLUEoohrPRBJbrCiQ3c9CccspNL3joRthQg3NZptyriAJ5hjngrjJrhsZRgCFqJRULsE32ZbSoLSfd7mhJLA",
  "key27": "2NVcKph1JBamuV3UWdbrH4axzxCVv2YS38b8CexD2TvmNHL6zGJGGst5MzQJcWfLSaJ56dGuEAMGzwqkV8J9ZVxr",
  "key28": "2fBEJN5DBNGjZwutKbAz59AoqVHn7x5TerKMRvnKBWw7dLGGpU6vs7MXFZ5XAqcG2DxaVJRyrNJbx88kRBMYNM9o",
  "key29": "2w16b3KeCzsApjNwRQTNLPTqnh6Rpe3JPLbCRjG7ZQcwFoSog46RCr1dm59Wzbcamk8TvcUbsB8w8z1VmWnWNdZL",
  "key30": "3fjnYuMbfhrfZzo2egLFgndY8xwqihAzdfK1YGYc1J7gP7KtywrR2ME54ho4SaNjAf9fi9MvgZHeCHPy8yT2NSY6"
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
