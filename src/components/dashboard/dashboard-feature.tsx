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
    "4q3RGTNTjZZSXZRyT6c5hgUkWTLiSPDuH5VxyJEC2KMFqnNeKBK6AhggHidmfpwbqBy7btWgBLh7fdvCXSsTNLa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wqh1FyExAKfJgRdLQ9rEVaAVKkTiPsiJLWAxUc5hZsNQkFVoJJRiHFw7DheoeqLbDcUpCikfCa7RFAqvdnFWJTd",
  "key1": "2tM6KM8U6ZBD7kdx1seFV7aoQjbn268FRc5EzFfGmUGJWxnCytD3w4ncWDSEd5SjNu4httSuSjBSUhrtTAXT3Mg6",
  "key2": "5hc19cCnpz8B9aWqd5rvXFVrgfozjYVEQGet4RBYjZrQVx7NNANSM3aeMUPACZarDnhPNPGewiRkYCq55brq1eCX",
  "key3": "Sc44XmZdx6N383EE4gES1f1hPXfzDQWvKgq4EZf92Jc6BuJo58iJTPNBaHgZyesPX5rwMHjG8vkhi7fCvdHs496",
  "key4": "56Y6emxPn3gndqmAXRGsFadYGDY7oSDVCTRTX4KE2tcCymUfyxUDKhCBPbYjebhfEhzHgUHQVtjWYprijhUeZSTX",
  "key5": "5tRq3vFGoU43aqMYKHCSTyrcRBjSBqPtN2R3um2MxN1KFdNajhuZCQWMSvDDbg3eZ6cVY4EMspHUU5wCFhTZBz9h",
  "key6": "32ybzTLQwPLwVtibHgW64A7LtT2kzzmXa2482NmpFnXqakHELYpiu3xGZW4v1mwgnW1jUpmbH9bmPD9mJnQy4FAx",
  "key7": "3rXmeffU6hZFvPp1Q243Lg2kxh8Dfu25LLAwi7gpCh2CFfPKpaE1QNu9cL4gkVz1zUx7sMQDUjpSDr2L7ep8v9nC",
  "key8": "3dhh3fmbG8N8vbWyqu6DTCbBCUJXH1auomkS85PfbvV6WomzfTtmwWtgLMmUcYfy1ksNiFAyXhh7xrVky8wHidVm",
  "key9": "5923WSdZn5hQggWKQm9ykk43DSvPxjbYG5Q5fFDjPsHBfHZHL2UReBZHtMKaj2sA4X3DkZNAHsozKmMazKrUVvii",
  "key10": "2LmdSHQjLjiPwtfgVdAKtncJkJsPUNmZFKGhpNKcgQaaW9giwKr4M95iZhp4H6DCDTPP83K4Ubj69vnnNHPfMUzC",
  "key11": "5LMou6o4TqGDHeQkuG91YHBgbRjN5EiLta1kgPwcwWTDJWiFPfMSWk9pJ4qq43cUoXpERjEivD6bXJn9TqMR1JK4",
  "key12": "jyYojt44zdA2M31F6HcaYRZ4ak6Yd7f8XZCfizfZn6z4wvrU9UQ17uUBr9i6rEznsFbG1NHiSYKrix2acPPBXhd",
  "key13": "2fJahQ3nYBBSTLCt4cwKMndTcSvCXSTJb7HyB3ExLpfLbr8befQvJae4cPRrKkRLbNRxuLBSP9kBrnjnVVB8Fa6h",
  "key14": "5ztLCz5Ecz1zGJkaLoUdqMjiY5ZagXWgCgRoB1vbksBuqAMW9QFT8LqiUTmLorr2EhdvgXec4BKF8TzzAKPvEev9",
  "key15": "3Xv1XALhhUZCADjmX6TEhXeNx4dLwZJfWW6NDrCv9sRhaddwRvFYtBvoiTZSJ9NJPhDAEjsS6f3r4B4BkgL5r4Le",
  "key16": "KKYQoCZ2C5r78dNiSX8xX4cUeF1V25io6VjuSeMYxdi11UYzR8N1iGUUUqB2wGqPqEP2tPbmXwsrzU5iGXyKbzh",
  "key17": "kNCbMTPLATPAsL8TXMLZtpW32n5fVi2wFGCY2ZBBJMJqs2G9dUK9bAZ816JJmPkKQbaK7WEKKWX6JFasm6RW8rc",
  "key18": "5j6MZ6Q9eVEhJmGbuM75m1P7cQ7BABsU6BzkSxFGijfqJwLgaqEwiZNLN9PaaR53ZXTicRuVjFKpPC9XZwwrkFcQ",
  "key19": "4uq48zPkaHMAx1p42PkpsXudrw6XyTNHXSBzwm5yoFfGDeA4eFnqXj8mbA3skQ24vdpYMHVe9BMHXFAHAt4RdJEe",
  "key20": "5YyfGYdFW2jz2GrMHPmQFPDn6MMYr51kmm7Tde2zYPR4dy9D6pD6WvG1RysZJChs4UZceHHKwBMHAz4T8th2pEjy",
  "key21": "3wBhyTFNyvoctLjRfRfv5t1hsc3w9C221MQFSoneD31CzMVifoNLAtssiXQmaMxjeWioPepYytzt3Ktw4iGD2BPZ",
  "key22": "2WQWAyiu1zoRoAj8Xce5XB3TRra1gtqnrWo8458N5bSxXwD138KCvM4x1TKhxuDF3jdcd3rUU3TpeHww87DPf8DM",
  "key23": "R5TvN7g7UAQ6Ki7yhQLnXViYjxsAYTQAcAnfL4vGB78d3h2pXGdHYwdb2CVDFH7FDD6Ps5HoVyAsypwKQRXFbT2",
  "key24": "Da2tGUnhMrybB3E1FWzoaUpaLTDbqJJtfApEqCFXpGRBYpNffQZbpLkMDADRvo3wdFfdiWNpV6hPS84m9fZp5kV",
  "key25": "4hzRTZiNCFVm9h2UTDorjsYAL9CfY1vGnLFqkyvJmkPC6cWor1oc7wUj2QP3EDhC8L1Y71ZoiDooAqoGhoW3oM8X",
  "key26": "5jykJVHmRY2EtnENBrHMBQZqKwDfTa5cdDKc7MEegnGxNFJK1EXJLZPZBmHtQyKWhRs6htUe45qymAUM3fPA4YWJ",
  "key27": "5j2BYKVUxfQsDH9u5afDaMyuiRyXTqnScG6y7GtxMjaWSjwxYd9zeZDgNknqGuhMJwEzBBBJLYxZucLgohPQJK3a",
  "key28": "wXSn8DkZZuZNtwdWc19yCQnoMWMLF2gtC8imbJs8UCCAhEVUf7k5sBybak919cfemykTbnKNZ9Hw4RKiHXnwhTk",
  "key29": "2gWr9q1Ewe3GCG8956iFstE7XopYHFQDnHSD2aGFJHGerNPY3DwHZqiMwMBsTJKdxMxDhnt4iu147oxhfzp4AyKq",
  "key30": "328PpTqZapoM4AY18QuhzSDMrBwRv6ELJC36KmHuiL8JHMvu7pxfBQJvaarjZEWMQgytPQ6UFQxo11fUkeNChWuP",
  "key31": "5ktbvjKgeQbGmJ8J85JfDRGQMao7MVrVcKsfhK5GstVMu1VdmM9K4WmAxJNzLP1t2F1c3PQMJvg389CHoffbqevs",
  "key32": "5XL7J6oe3Mnjra74nkaL1vbKSyZaSDcZ9Xbq5QKgVHbxHgaHS9JsENT66wiyz5R9JnTDhJbjRRzHKdaDJsoBMgEi",
  "key33": "5qHDsdV25JAeMMoA6Twm3WxAwh4FfHsxm5ATW5wE9zbM1Dcw8H9wzcy1Dx4kk4TjeXwVLoxdG1qnDAzWL9fghDPo",
  "key34": "378Qyags87thKSEWVZmDRrvpaLNeWUUNSV6NheoSrUD1yn6mGGqAVBPF6WQHFmgYP91vALDFPPonAgmz9NSigxFM",
  "key35": "4nLpBgifc4ApnfLMFvPWA5CPEDYuFvJ6DW1s3opFuzvQQHYXRkWTmTZn3GJvTcNvHGWB9ri5r9fqQJRR7fM5uC1a",
  "key36": "4R6i26KUFB2czrRqPsPJnNSW3KpsacQU9bpcQ3YYjARDU5CvdCMGFofAuuV3MQkKhwDw8Qzdy96AN8rmaeFxGEJG",
  "key37": "4QStbp7SSLjXsJbBiQKg9EpDATYtfqms9HbWErJ86x8D2vcJzEVRsU21LCboY2LF9ZvSPgsp4UeF4ZXUKcaG9Y8L",
  "key38": "4iNNaZJHYmV5KZKmjvtj3Uc9nJ1hMXxqcDZnTLNqN8x2yikMuN9C5cvyw4aaULtmE5NMxwPMkW5s7rRLWK7upmtD"
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
