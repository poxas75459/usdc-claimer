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
    "4ua3mpK5tkWEKwTRuZXhsKEwGtQAiK6qnTGGy5CPr9zhv1RCFUaPkvYsTBzwZ1LKQ2QhJuQMag6Kh6xU78u2iV5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224jLunU7jLub3H67BsiWFWNvWC6M7huUUWEqMYAedzEiAt5qBj5fPkvYyNiMVFeBFVeE8KtrpFyMEkhiLtpvnXC",
  "key1": "51kPqNkYwXqUtW1Ysk4bBCboo3ebP8AnbnCtZKmbo9pWjKFR4PDatp7r8JGuNWEndzLJEYrKYojNojgnqfkavfL4",
  "key2": "4DxjRbUeVT3q1edBuu3DUeULJ2RnPZ7xB2PAQT3nzDM5sryPToRywnAi2RRZh4FQzMKVx9U8HzM41jR9bNfDsFWb",
  "key3": "4dm9oPTdWyoQ9qjKYNYEiW3AA4sYopHKvddsb73QM7wdEDtunXvac1oGK7RPtKdExWCBoPaDTZX7H7YgyJWVLspe",
  "key4": "DbXRDiPSTPh3Adk8faFLkhBQZZTu4PgJqB2a7wBhFBN7YuzLSajWbvWGvM5eqJ7EybEuf4Cd4LMsHvZq29gW7su",
  "key5": "2z2NJpRX1JQtvjoNVzHfV6fSzaMLUTGr5VWVQh2wFhTAWzVeo9ZUUDR9mdRnehk6X7TtQ3Vw9J21fr2xTViaCstq",
  "key6": "2rEXgGzGMwzVgoRa65CACNMNF4UCEkZTsqGRjTpfAw5FZt8qZeS1B4KrQ4vTnoptsbnJP9ThpcWXyvV8K5XACutf",
  "key7": "37KNzGKjavrqxc4oqM59rUuJKM9icXmMth4ai6FhDFuavMWeYFwtsHLTG7zTXor49qZMp7oSQKfPrRBdEvMsySAy",
  "key8": "2iiupBZLhHPRCsQQweXHXg8yqcUS8oc2cHF9MKVNhV8EAJ5FL7M2vtRHWppU2YkjNhMSSbWKRgDo5km1UmE6TTZQ",
  "key9": "5bPGf6tWxuedr1tYEZMum759Mf6yuKTJPwZCgDsYt3SmHAuih21DcxUgW7DLzLN4paXpHJGi514bDUASk5d5gbhb",
  "key10": "5doSZTRdxSrDKDe4kMBdxFhU4MZE5tiiYmzmeHvr4qWdfZ47jZC1RDpsn83f77hoFeAo7Fugm9nZwnj8SDsxRR97",
  "key11": "2Fhi33MmDJUchSxTFsVPJejqzrq3u8yMGbCMzjVsu4n1hev89gzeXHW2A5NxoBqGTh3FauNL1Qbz1Tc6u6QHuUmm",
  "key12": "qtoBsMWU4rbc4P1nFbyN3HQMGqNDopFz1MRexWAFXfvbX9LZM5fEKuipEqnhc8vd8DXaj7WmPkaR9x7ani2bVmj",
  "key13": "5jUejhXiz2kSgdhqLh9U2W7p92EnSga2LhJy1RzedCUF28AnFuzpzAPEvHiCtXNTgNHPGMyp8nvYoLc2Pont5NFr",
  "key14": "4Qd8n1UcRZKUp1KcDptvKHug5PjeKwJvRqg1fm9UhwoLzj75Rrayetcbuhi23ZVVEvi99vRhfj4BRQvvgrUDjkD1",
  "key15": "4zcyPqqxquhwT8Rb9vYnUWkwv8kZMKJaDwXqx9d4KNsCQLBQzY9pDu9bea67pcQS4dFUdpeis1VLkmDFGCqcCR3q",
  "key16": "sgUgAJXYuNteWR8Q5i6EtTTFfoG1RSf781Jpc99TdT2YuJE55J1fw9C2fgNCUzLSjroatoMiTiuCogsKNrG764E",
  "key17": "3cBLFP48AQzHRmeZ4Bc8M6ETGB3kXsYr2c2aVCAW19JBvd2gxb7JFdtDi3rfj7ykDZm67iUM7seR1U1p61f2xTnB",
  "key18": "4LNPfARF7XaRSxp9SdDmstM5BeQRfU2jBAWBY63HDEP8bBf3h5HqJHD6R7gqsYtWK4x3wAuVy4nVuhBBQkBNX6Wz",
  "key19": "3TRuiZ9JNax8Eb3fEgJNPaZgMGNYtAttQ79Qzj49oiHSKcndpXGEXM4RYLxiYTimPgZU9Lj89jE6p8AigBLwVUTX",
  "key20": "3FxgprJ5UqLmyZqnQxopr3Hd7mohyzkqNNFNM7nNG4KW7q2H7JtxUnWsYeH77pCuZUTBzPo1CvVF8bnwZJNjaUi2",
  "key21": "33gWsEScjBKnoi9e1e5NReaUJmxt1HAE8Bo7Rut28a87Eu3iSiZmnuY6DQn5RBQ1xTF5xS593aEy7maQJDYxXrQG",
  "key22": "5GSuvZacN8LrJ5aU3M1fVU4HfworotgwVZ9KK3KUDgFg4tEHXbNs6W6cAfsS8jdht9h4tTqKC6HkuCYMHfGQs88a",
  "key23": "ErNuE5mQHusLr5wvcAmUeM668QdpquRDwhpGMCgSbrgdBWJFW8Rk2Tyw3rDgN5RTX5MDtfhDycoZxa5AbkA18Fe",
  "key24": "4u1AsSTuiqinbtUFuiWEMBMPgRjCvPLZorFoijqrP2sC1H19hjtYzpVB2JEHfdagpE3gUaYyjj5EjMXMdvhMuU9D",
  "key25": "XRa87X1ooR34UY5Fe5T7ZUiwFiw3mZPhup5GSBBnwUzun7sLdVkXzCCE6Ni2H1F7AJ4nsAKCfXncjfR4fScY4tV",
  "key26": "5p4pD3KSNSun6d5Lcvw7qNXgvSsUzCZaCgi4xxeNnGfkVcbwjudEJnLaiFs4zqd3BKCajmZBPuYnWWkXMrc29sCM",
  "key27": "5ucz77ZCyXtaRZrSLsa6qo7pyd55ASVnWubEJ4dayJ5JvPsz5sy18CLRQCSn52bng9WfVkb2sBWtM7EiZoKzrG2U",
  "key28": "51sACNipsZjG56xyCYkQpgzdVMiuRDvqMRSaBaYtLQshgPH4bjPaoJTCXFSyXgU6uLhXZF9tPRWiFSiZjHAxdrQz",
  "key29": "2UdaSBowMRek1R2T8GMN3DeTm2GFnfoWNGKbUHHhkmUunNNkK8NBNAwzPimPp1M7uBntxYDDDyWfuFjc1q84Cynz",
  "key30": "56gW2yXd3MZEPUrdxjkq3WFLAP9nEbxfsJcZNj9fLa49oTLCBVUR65TMHDiNfsZonzFJnVAaVAyraUwRprHYLKnu",
  "key31": "5SyY6xCZHjQHozbCny9FnTTyCdnXGwZqHVMjhUDjFBWkhm9VJ7uHUoYbjPvXbXUkEp1tSRLehx1gn8vTiecfB7rB"
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
