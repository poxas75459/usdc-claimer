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
    "3B7X6ufxLUsS53x42m8LJS8JoqbJG1WLiCaCyN29EFt3EsJ3z2Y1Znqfa8GDpebPYL6muLTHshwyGME92GZDMeSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6Egv8MCtZ5i6vDho6J2CMxvi5Po5iKoMeUNNAJiXWtUFt2tKZHasknWfA8dpK3SdRZBtBMv6mMxT4QTpQsnZEf",
  "key1": "3fm32qHa2SAzsC326XMciwNVqW2yfPP15VjFEEasmXHRU2fLHNMSGYo5Z4q59Yj9e9VxLHXuu8Q6GjYaaTHJSjCZ",
  "key2": "5KKoqj2XhAxGYaHQAxwWMq2Zi5mtEY9VhbpRwt2KLSfGxq9B8uBzmfMCRisQPbZx2NtRyFraaQqukWsQit47ZJND",
  "key3": "61JEMNootFhuLAASqAALJwTdaPjRh4B7h7PcKhceGviKyqEGSWRFjvdS7BGxZjwP59mFHeNMLcVzEqVy76wsZLm6",
  "key4": "4CC9ybXzZzktLHMxikkud8PzDR7kZg9ax4zC3RTAZcRpx9WQ3KRJVt5LaNoqCzeTKoBzm5yr9a3WUxRBaZZBeMub",
  "key5": "3voQ1qXeqgYBxLyBXJMh4GvBuJygc8Uukg6WWnAAV3AfVbgCyaaEG4ywim6Zf9j7PRFmrcfMF3tKSKdVuu489ZFQ",
  "key6": "24SVHfFavovo2bD3fqt8ed2te7XpQ1CqcPk3xpQR67eSyuhJRPdhGWnZYYhstFqAvhMyvvgZ6scVEB2RDJgZWEet",
  "key7": "4Yz68NLDbxMNMGaHv1tRbnWA6ZJfjcA4swEdUpgmjS1HH4w9tioDJa9abNVxfjy6EEC1o7zvh54k4QVSvUARCZ7q",
  "key8": "2prP2xYpyogbiBUss4P7rui2eTEnVSu3hCr9pcv8QsMDPkkEgchXithH331PELp55wFpSDEb1opva4dmZoZbvoZb",
  "key9": "4un9eubmYVX4iPDpG3ajwBhC3ESbsTU9WbDXep7Zub2c7CGa3U35iwry5eYgXZQ8ZcXQCYJ1epzXKkoceKZzfq2p",
  "key10": "HDnimAzEvVpERxWo8sm2cAmXrra6Qx26dsCrkBqJoLWgawgkqhsUM9eZKywqPcwYzTCDXniiRsJVpuK2g4vRZBu",
  "key11": "BWBeNqD4afkwRfaZmrFngidQeKYbH7TYnsEL7YWsXtvi2TgxUTLx7H3BCBaEy4W2yr62RgPH2z4NVojWho4CqMJ",
  "key12": "P7jyfDULehzqDRvtvsXwUzHLWoACcmVgjkwYN9xUL97CBeT7HbNM9Coi37Lg1LGaQDg7D6vALrjec2xVyfXBHdY",
  "key13": "21AnUhBWNR6fBD1vHXBRgq8QnV2CavtoKdoGKfULsknGXZMJptfYy8RFoZ77LvCW64i1Fs87xWtVskW6D34NVVGZ",
  "key14": "2p33CR1jbAmgRtd3qcPcpAznq3QsF7dFLcqcUgdKptT2bYhck8tkQPGrwCVr7hf15BrgUvW7uJ5kG8rZqXsRtfZ4",
  "key15": "2QBgyX6xtuK3M76PdUa2f88v8F9JgRZm9rkfDPojCeeRw7sd9DQ8eGTpgXKt9fXDfBcz1qGwsXAHwRayWdMKZvuY",
  "key16": "3B7dGk2Ffs7kLQDiAa7STBYzq1oCTYUW9Pqvgvm8io9YwCEd94WHGB538prWahRbhfLLvyBft7DVDZbUcpFf534E",
  "key17": "3JcZ5e8RvudD4JZCpZksENmZ4eBiQAMAMprWuKqnx9hNYiy6KDsg4uijq2o5bnqVCd2F2Tkn4PpD68qLfjx1JMki",
  "key18": "27kU7odxbMSSY3qwUKn5uJ6CtReqM6CprUNbq4aWmL5YykYvUs2ZzXTWFBKkVoFnXavUEqKA2bMh79gsCmDaA42M",
  "key19": "4gpuASdgUv8tpQBJRzCRUa8837bWhQv8fn6FWYARd1QNcQNQa4d3aB8tMvwtwCBLP8NkgLAmQCr2TbLUavn1oobu",
  "key20": "5y45HkJQh7TQjBoHEdPx8aTwnffSAEFAfPikHidsGfcK6d5e1qKRUy6u21GSV9cRKvrtdhW8yrjBdsP3NHWsPVv2",
  "key21": "32EExxZAA3kkESjqaC6Ccf3PdnHcbNGe7AhDasuUGf2SyH47kVDHtvtJ59Aqo5mUCxZXGdaxMnyPgYhSm99BdBzn",
  "key22": "4qJ9NYCfYaNARGfTXkpsJKuUHQLhwD5WLcyXDAG15RsaLhxcz3Hc7xTikkDVs2SXdKPvrdVCYm517BnP3RGLgym6",
  "key23": "xWH7ZNhk4dELwrY12b3j7hraz2SSvVXsdUdd17ZzmczukEbCyf7wwS9bYi9QsaJVVkkHUMxcN19noRohbvDvGCc",
  "key24": "4FjkVRbLMYQiS88ugU9p4DuFZ9aq6RHtHbgAcpkT9E48LksEe5Seqmz7y7mp5H5cqz26ULhgxUchd4dV8EiAL3zq",
  "key25": "AdxcvFm7YeC2toom4iLVYU2MRjgZJKina2RRas2JzQrDV1Un3bcyqyQReVk81T1L8avdCsNW3fbxni1gfvY7JXL",
  "key26": "4YjzARMrFXmbo2UeuBzPNr6bzuv2mjy5hSMe1pXga8Bjbr6qXsDogvLnC4SzsafjHeQ5vAxdhKLc34yQDAKjxbHS",
  "key27": "3iVdmWa4c7Vr3M6mYDNY1YSKWr4S7EL1uAsmJBHCkUW2de3DEngZ3A6zxYVW5o9jmLcCTLqMevycQy18KaJTikgf",
  "key28": "5pdYPWX8gR1jiTWFsWPcdcfyyntMsHQtmUF1MYZ1vr1KwHMgBFB4NGyLBMPVyXxJsBKxAeyrH8y3HoJRnRqaH37R",
  "key29": "48vVCZwEAKRrz6oFsK5RfhxkRcoiW2YD1ywtvGDfYjmfAUQq9PRYB9Pki3G2xiiz7KwmjdoLcuFbxS6Zf947QBLp",
  "key30": "3tigRnCzk1NRbbzncjRP7Mp3zMFwgMYuRJtiJd2f7xsSBbHPigRTapcoJbVbA1pvVJkcpnBLkNb5Ly55ZatbRVpi",
  "key31": "3Y7PF4mL74m71bRNXWM5LGNdV9ieX6YiLjJniRNBuvVspKihSPyx414Ru6SXFcPEBBSMQg3aGgYkCHTpYtzJXLXU",
  "key32": "3wSsPyya7bxpdgsdcStDHMapNn4WoCsgFZZ11k5bbyHyyCqqNrFPzwCV9KEhFLEJ3H5a7YvfqwY5SbS2sFm9neRo",
  "key33": "WSAyrGXXj62CYBdokdkBnyp8c1qdCcytszEBU3YAEzUedavPBai8bEaTY5cKqradP4Z7kw7Zb8H5cxut1JJ3UjJ",
  "key34": "2Vfv1kYL7yCUM7TmkTLmsz6SjGk7uEjAEGKBS7LZESYVgHiu4kYFRbT7wPLe1ucHFX5JDwLwMbs5fx1aY6iWSkfe",
  "key35": "62EyG2xhDamSTvK9Z445HDpc8MAXfTrcSbbW9roVyh8gFqtkpjcrPJqZ1Gn63LGFcwdkq2ujzNeF9ogDH1vxK1Nu",
  "key36": "4XEbZBsiCoFrKG6iUJR6Z1r2uBWk9DbEXUmXe7P6rABnZnPzCEZnoBfcambw21Ra6A5E91gnCAfLSo4dHeLZFBrB",
  "key37": "2zUBeuhMGHTCzZJTKDreECTSBmKjwRPUJDDwaGsSSRMVpp2KLGiGUb9nPR4MNwAmeMpQ2C4e99r9YwHVyfmn5EkL",
  "key38": "21JpygkHb7F5mJ9n5L9CFCzK685DY63F9x5zPm5y14TuNZSKyQkxNPVshbTJkbtr5HLrhwhXvuVJ5C89RSsf7QZb",
  "key39": "5ow5RxWjoFT285VojWAGcjiAvTQreREYaQWaxe4FGEJzQ2bJ5r6s34PdY5y3v7CXgxLuFPzJjzzW1wznTp9dxe3D",
  "key40": "4dvbgegJ9ya6KB36zZfhFTo8hLySp6MkdyiRQjceQJRbSbakm4BbbEEick2XV61V9hMuFq5PJWDvKHa2o2rcwkzV",
  "key41": "3MpV6yYzRrqRTYu14tsEAEHdcuVBGafTVmmngjgqW8kbkx41KkPWDqMN9ndcgx9rZrpeeivRFfrWNishPrLVYYAW",
  "key42": "3p4AWFvVuoM13PaGjicDxECkSkBpFcCXmdGH7CpGtJzu1vbefP1h2pqDUmm3TzePDFaSkReCWjN7vGQBEZFMhg87",
  "key43": "5rT4tMtcnbFGXn1kt7R4bnCASNbq8m4synHFuJDPovP3WEvY42ovE4QZMebsL6MacS179UUPEUDKXJeQ5BPr9aei"
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
