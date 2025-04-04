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
    "67JiFzMGHnA88e58agqZJqBxb8ivcMSxaeUkpyPTimLmuL1e1XRbvvTbeBVH7pkubuRvGBv6fCZ9Hy116hXKcncM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsG5qUjppCyWSaWm6EMrmvydLiLe8DgFLjaNvhnCCd8pewAPFjvAY17KhA9KysAVzLKSaPZQkPYjxgy5BXmNL9b",
  "key1": "3okY1j3drQXNacdzDoc8eto95qZVEFcrXFR7FYw1zsgfZketDyeW5w3TBKepA3s4b9rEbW9YC5kvtifZBTAAQnRu",
  "key2": "2bnuRk8rPPA245jVBk9w8TwA1rW4xmUrHb3o83o4GwEStJ8SangBRaNuvLiqgV591vkFhrDzPfpyAeMji17yigVE",
  "key3": "3QHQTb6Npde3D7WbqpY4vvbyCAnk17gXnGoxMSTbq3NnE6mvCGL11ZKv3J71KxMx9Qwqqq9wmKVMP4Z8qYnCakr9",
  "key4": "3zRqrwgSM3ot58rmrN578CUUVkv18o7c5yRGbeBe23EAyAcwdyUK3cxndbdGskNpSzh4QYUujyscJHSzcpPtwsWC",
  "key5": "4oLGtuWjmnPzq8njfgGeRpAhwRY4pFMvGrKUo23A4PYjuBt1F91uLWL3TQe6D7r85g2n9x5DufWSKagAC7JAspsH",
  "key6": "5ao54iLr3ZhuFurBmcDzomKy3qQokPoPtHnXkghQ4Fy4tQpuRCV2dupnyuL3Wvj7erfjJHZBkCY3rNkMRNtpUzim",
  "key7": "2CFNxD3Xj39ev5ebDzsfXWo7Xg1X5b5BjGAtsWu6mJ3Ghzm361SPtbiQAL9L8PPyKkyUrmheA8iTRDNxcsgjTqHP",
  "key8": "2biD49AetxN7pdQt5XxtDH2NYczeTkMUgdaEHxtRDrY3ev3ySAwmYAcLi1UbBMDbhY5JZpKjs3SWB9sKaaNvaYd9",
  "key9": "5XTcVz9qQ1dQWij7qpwvVcmShN576s4WvbX83HjPe2cRc1koStab3RnXZpfTDrQRJg5wnLUi121pbzUqHCEsiH52",
  "key10": "5bV1itRm82xw9TaCDxLgbYCgKmVhHmnrEkb8jqXfFpDZZyQgpmWVumszwqsRiBXjKQJwkABp1tthn1LUPHk5MzEw",
  "key11": "4L2wigdenZzvkzb1iTEK2MWnGkTcTRbymQAXBJvsW1MGBCDRV2JsTMUaJuhPzkeQe9px8X9QKCaVqiRfpt6Utiwc",
  "key12": "31fRBy8RPxwCaRgFuUhXX5SUBrhZsMzmUgcDRegqACDp8WKd5z19sTXmWqwvgTe64dmeQKa3NtgiTaidMGdRC1ce",
  "key13": "3m9o3biFZPkx3ZJ97qa2m2nRqyVq8d3CfaRmNnPpjx5xzkQ8gfgqkqgJL1f7ZaB2CYrm8cbanfQeWrkhY5DxqXJo",
  "key14": "5KL9NrDFHtJiEF6mgAmvBG2V2HkkMRgWPZV4XVCuuanub9tgxdRDPLGo7mCG7BrigSZgCuhrpQBFXSSXZu7fA5Mi",
  "key15": "u6ch95TULtXMEGfJw9K56qdHT2PAwmFuzUvny9YniMAQSm35P8oz5uw6HHRc67KjitzaaXSjR4ZshDzvUAALU88",
  "key16": "4sWQE297rEvbSGMU5pAwfW8nzPnDyWhisUnTL4cn6JrjtdTdPwycEsgd13JtcaxEMYLjdB4C1tM9jm1EsZNJ6EKZ",
  "key17": "G48vPuK5CDcWg44tvNPL4eKMpJAk3UrDyeWRq6Lw6Y7G8PDdSmYbvAr5JPkbjJ97FYu1Qg8Cgsuj3ckrZ5nJePs",
  "key18": "4VXfdrbmjQnpx3ew1vb2FfJuNCLMXKWvi1hFm55Wj6J6LZo6F3At62QDMdeL16EjQnCua9mbWK43XrFk2qAie7Le",
  "key19": "46KY6DJ2QEUEXbyKaXdkwptXMAukcTu2kGPiazAjRon41QMK7pBtYzji1tsDg5SK13N6m9VEh8wP9x21WGJwuZMC",
  "key20": "2TmreRefQPmMv4wXXnKShzHR3Hwrdv2d4vphGJUHYWaa21KVsUmoZTjSuhsoHXJPDyjHuR2JyX8L3Cg6EHDj3Zvz",
  "key21": "4M2a3US42VMf6PSQDPBkWJsYwguVTq15bqf3TDo8qfyUiNjaUqz32mYsv4aF726vfeZNxuXyjkRvRVZ4yAFUdcss",
  "key22": "ir4NqKo65j6ETKiGTHfnw94xUT357cbYnkLZ9sM6emjsRBEEE94y6v7vPkT2MQc61Rc45iGtHXJPAeYbTSTHWDc",
  "key23": "2bu4fx9Lkk9hmA7xbAbfoEmwgjyTkkJgtxz5ttrXVfzAAx88fdGegoAdLtX6htqdwAg9Aiy7G5GSNEQ2ecFJdUDN",
  "key24": "4rrpxFfvNjxasJCqEGmKCEHq1AerF4ZsvRAfDMKN1vwiCy6zD9xnGEWmW9aD7sdmkCwpKTDrVEfafyP6cuLAc7AP",
  "key25": "n8EYjxVwixPend215qdDxpy1LeFFEGAb3R7UZYYuGTWU9Bf9v9RPkyirNq9WvxUxU9Z9Bs7jhJWfhF6sSWddJKM",
  "key26": "2kybdV24RDNNYrtNwZY6k7APAcKb86MgUdgiiauKxWRpgVHBzBv2G6rsiEnruPqwM1sKPoJ3RbPMb4UGbUrKgo6e",
  "key27": "4C52iD9zjyiZJjHXDJQPmBZfkTKNwaK1EX19o5rc1sDg9oxnV8NzpXJGGwAygHgJjP2J6KLUSdq1QjcsKfaYn3PY",
  "key28": "cTWB9WBNjddVYScnQN2X51FUjgiYu1i5Fd3ZfqczjcqbHYuLYC9xCR11g6sCtxYSmF1RDUM53qNRBswaudiWhgS",
  "key29": "5Kqz5Yu9MLesbsffx3TNEoeSFHUNpJpfnV2A5WaNhAhyheXCLBisgnLkC3Gd7dJz4u3p7Ye7aT8KLjkJTex5VDee",
  "key30": "4Hfy4PvRvoSreFpiqL5mPqvULqTvuUWiSw7nQGEroorhmDrCuEggzLkJVPtTjMgG4gvSbBLzE7prLw51VBRSmK88",
  "key31": "tkMGcPJEj2QJ8vRuxy9aXr5setDUX7VLAyZ5tN8f9zCLWYuogWGyk1xeBoE7uoTUW7xAFV6qre8C3eRoZcxL8gb",
  "key32": "VZmAgwuffhPhYnpjh4u3z7VYyYfMDHoW95dNQeem5sAyekQQRqZWeVVcd5TQyNfH7oXXv9DZWbgcGWC2eXDFGeU",
  "key33": "3hGBjddTbECkBkDBXoEWvD9N6Fk6bNTVakjTAeGrAhU6esXNdCaocY6RJDkUcMA3tXf1kLyNWZm9WFEfimpGDTuQ",
  "key34": "3va9by9k31ng84iP1DmNfj4gTauEamtTfxhbQPhBqQMcv5zyyotK1tP14Amk7pbaWHyfhHesiuveq6mLhvvSz4KN"
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
