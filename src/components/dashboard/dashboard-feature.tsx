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
    "4SzUi1p92y6s6KqB9tZ9afNPnXT8ezWvbkBGmDWTFSwYfcLhHReKtUWv9MinLm75VVkY7Ch4J58t9RyrzbdQg3ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msbYLEU2JiuxgUNPBzut5cQCni1V8CoxiRu4J8rCuHoPMoRh7eqQofBGqTBzuofYgZgV2tdfNKtXgWUJbF49v8r",
  "key1": "56NYLtEqwKhDwAVTvWKCk1tizDLQy2QtBC6NrTw6sPK5t6vyEPsF62XDoPgxiSCrpdi1RLxBQAYxDRH5vTTfGmMc",
  "key2": "4GXFMHRfsRdaoNjzadDyQhk94UBKYDPGNTK54oLScEBg2x7b1aTAaLo7gTPR6Ae7SGPv6cX1Ve6MncDCpgu5tsRj",
  "key3": "3pRNvoVcZPijvA4Bg7tK1FSxfHbnbM1GX3NNE9UjAUZ8vv5erpgf2wc3Sj9G7WT2hrJVx3dk2DzjrfyfXLAAZ8Rz",
  "key4": "vxGP527tJersRkq666WQEvk2eHbcEsBwqhnWmaF7n1W1s3JfmRzFjWfrkHkzXwHUnUNbHvoDsEJqhnNEX1Cfefk",
  "key5": "2QK3na51pNzwASiWXqSwX7nzHaa6VSDNgjVdNd8oC7qbRjUt1wK4dtEJ8VsxBJNHT5e7MmTSJcXUqxt1h8hWPU27",
  "key6": "435rFg9k58cZoafHFNaiL3TPP1xVRdkT52kZTum4LGQLC6JQBU2mdC79njBSdCMVbS94TfHmFcxEeL7yGTnWniLR",
  "key7": "4Ha8DrJGoQwN34LW72wfrE6kEU1FwNoPq4ro18oHhfvFMVEUNcZq6NukYq8L6fZUHhz8xVHM7yxJfMEv3SUotVGA",
  "key8": "5eH5msQx5zgmSRn4wFvMkvfzqaGNxQRtf4vTNKpFhtTqnzhJZrPpA6p2LYUKxUj6c1VxRs1zhjbh2ZEWGgxDYXFR",
  "key9": "dzF57nvL5EQFQEBjTVT27e2CQcAUkn42Byg7SJs5LLPeGyx7GA1tFwhQYyUuNojDBjoQXjiASL6cjwXUjLRutVP",
  "key10": "66S1yfPxaDCYr4NB2Dxd1X6wSAujAKnbTaGjX77JWHVtjzFg7zPPafPfhsGRKYgEN7TfdJuJ9xVUi8A2GRR6FKST",
  "key11": "8ttY3cH5nXF9vWKDhgDZFRmqfh6ub8Qza5WrxAukQtF36qangNTH39cfk7V9QkXWSc7vgkDQ9PtV7BKhZRY8nZ4",
  "key12": "2GXypyZafyXpcoMssFGtdTRa12H1tj4cDGijN5pt1qzN5Ww7cPyWEaEygrDbw2jvMjsgGGQcBDmqGCH8dKJJjnKM",
  "key13": "3tjyHGUk4cEngFyrL62WsSV3C6wB4avB1swPHqLcvp7ngY39WvXfYiby9tcJ2suSCVYKKMZXFjKYEL3G1RAMWKnd",
  "key14": "YGBpfS4hBZ488FG9V7mfjbbsyo6PZYbT5i6EamTJ6UjYXr81WmfigjizvHPdQq2gSDzaxQjLWQrPB56S2vwMJGS",
  "key15": "5sowyrWUETnSi4TKsdrqyK7C3cWbnzeqEPXDVBotePrW26w85oQeWFhTGRUpLtAGHuzQFKcydS3icNa8626A5Uvn",
  "key16": "8gnMSkiAUjjF9d4xcB99JYb5X6apgPB9heE9adhqD5JRYWrp3ZbcuYsb4nLDdpnM2dLDiFaM22NdFdqJh64GekU",
  "key17": "4cFWEWUWTbNVJqc4Tj9qPj7id42AJozTSiafBaAukTgiSh1Mr7uLdQrjunkKgkhfi9FceBpBRSBPhRP2DnkcYART",
  "key18": "3d7W4w9KmkGXKGBB9sFiwZv4iGvqatPE5xxAWomzTDZ8uc928YGG3dTpUw4tNtkLRc1vxd6d9mgGjyC8Jh8GsCjt",
  "key19": "3ez1oFjB8GHKam7bib8YohpGKYNPtWTHXQvF9RuPv4Z5PLZJjA2ENAxSb7y6rXR4Aju6zWb3Z6cvBJUCsSCyiR5W",
  "key20": "4QZtNe5C6rvE2ccayex9ktPJxK8d4sQzUEdaRFgT2RSzmRXh6EqthbfrmBFHApMdDuMe7B8x3vwpJPpAvaxiQTv3",
  "key21": "2p27VRiHscihbrSwSfHB6DYAikcJhQXSpzDBLcCWuaRhAgbQemqF7B3R9SytnawFkh9vbGJLgaSSMAqDtzjQGLZM",
  "key22": "xsAFJz61mu4QGPscPpoGhHf3uqDP9QcfPT4hiSW3LdTDLg2KvtRZkgUHPjauHbiJf5XGqyMahBAo35YQuoGTCnu",
  "key23": "2c2BS623vGSmCxCDZNZDavnNZNe8eTJghsXghF1MoBeLZcKxQFDQu5vJ62hvr8xf8JYw8WHragw1BgymyujdhmKF",
  "key24": "5zxhNVZUwtSkpUdqXXfXc9johYjBwh12qNoLNStvbXvNaDh7JYT68ePYmKTkypchyvzN5ckZ5wN5ERY5Y37wvmKz",
  "key25": "2WPGDsQZtmjFffnnobzUGQ6GKNvWw46u7fiUW6GoFYBdS4ynXnMuJSuK73thjKaHDy1cBWZhqAoZbDaFwwaqPsFF"
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
