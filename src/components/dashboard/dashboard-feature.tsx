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
    "2dPF21jv4xDEyRyK96ZmXCLD1NjhfEe1xmWDEpypymfw12wrJhvQbAcR9KXS8ikuMyxp6EsKFxJFYxUYGn61d47M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjqntVDCX4ZLtzrakd85a8ohsQ4AT9ySRuU7mxpH2Xb5ixUH5KEGbgoSeN7xBc384w9NeRF1MqVV8JYrWpsazbY",
  "key1": "jPb3norztXfGTkCKHqKEmmgB65HKeosdrB3R4ajAoJUkTUFACEGd5wnJWKJqsJTwHa8brkDL1mXdG5CJuHHN3dC",
  "key2": "3nrVzkfS2jDH4w3tPWwFWTP84BjkUUTiNiGDL5vnNtyzU3L7winZTRwGwnoMFeNxnrkrVQtgXMr6Gk8moG3FmSJr",
  "key3": "2zzE1Kx9mxV4cR5YGaHty75hjR9fvLmowLQDx3cwjjxtQvK1rCdymohXYuxRBbxsxWKuhmqiCvadzTdnn652ixSp",
  "key4": "4YL2hSBU2rkw3dKkRoH61En7wUKmMqGig79BAT4SAbkwpsTAbGi6P6YJyQQpV34ncNtTXi1Aujn8SQ3ZaqWVGzjc",
  "key5": "eMz222ZRrS7nBgZdEKokcFd6CZZj5DKGr7FnYj1Cmz1pia4ZTazdyzC2yVraCeuwsJ1ToYRKjs5RD5x5CozZtca",
  "key6": "2B1GDH9goMJhbnPdFCpZx93mX1Z1NP9qvN2t3j85mq8o5TE1UMwe8QRzjcy7Dux9VpGoeXJX45SMhSzExLqxgEP9",
  "key7": "2x1ZkCEZLyjywgWY2SdcJR1pDcTCvyUDWmANnEHkrAy1jWeT6VvqFVi2juRGymPRmMq3sjJMyzgQNjS4BYUAC5Y4",
  "key8": "5CGDX4od2VsVvRLzaFZciacCAZQYeH6acNx6ZMXxyVjtX5dZv1iH9yyCza5hSrF9EsCsTo59TsTt3Gb9bob27N5P",
  "key9": "5Y6p4UMBnqjaTNh3Vagjxf6jNagT1vkbjexv3tGCBpwJD7gFpJz1miXNWEKm1swDL2tU1gS9nNLfcN8M2JZCzsKY",
  "key10": "388YdV6zPfSFTg432HnzcAbqHdWdyMeGccZsJTjuPtytpwUPKG6bTUS5unS1YkV7eTRD8CnhLUoaogpTUvXpx2q1",
  "key11": "4hT9Wtn3BBGwfLGAWbW1vgdsGbyGny64yE47UPfLKchJbgRRTJmWVnetnZwzi46anAiLDbwNtYH7eQjowXK3npc7",
  "key12": "2HgEKMFVbzvaJZjoXJp7wojv3wf736EQLSomAFGWMQp7NPvfgGKUaqhVCNbqpirrYgY7GgV1wCha5ecXfX5YMnyc",
  "key13": "4aTnv9ELaxrFACDLXtShz8i6R5po6fJrQFdoCWyvGVcpuSW9HJPFWvAahmVsyVhPD8vxGaZx48SPNYPmYdJF6zdE",
  "key14": "4Uv41a9Kwb3paFcCe2kgbqVDwLdcJmdgUNzmeLLKn1Wmoc4VfN7CGSChMcM3dzp7KSfxRNFGpBiSUonXpHUiPTTG",
  "key15": "3DkjedaWNAdnfTM11nS8vwy3V7G4ShajLksAAp1bjHEgjb3ire824zJRLDi6nnhaLAdgzFZmmwyY3CP8RZnrsBdW",
  "key16": "3QA5Bmo13PdWbpRvSn9P75UJU43C6fitUgW9UL6eEqERwrRhydpEA8qFMikzyfFDFCG87BE36kKUDnGhAYCmXFXU",
  "key17": "SvyndssXs7nsqnrkgw641qZLFVy63sMF7XhZVkRFQgLGuoRXJWjL3gamGffiF6wRUR1A7gw7j2fcNhL5dX2n7fM",
  "key18": "3Z2tPW2NxrFjokw7mLfcYXiyLbjTudyqSwa91fdcf38ZDyo9uow1cgZCeej79UJ4MVY6ktHZsPtKTtqERC6QdU8K",
  "key19": "4XSgMCBqLjZ2GHsYpCq5D9f9BeftsRazoDJQiaKGX7ioCvLRVNCcjmXJji73kywDxCCTSfKKnhYkH3ugHLvg9RbZ",
  "key20": "2vEypNw2cSyYCxWhb8WjGLdeFBL2nbUD5fJUPjky6aVd7tLtsvfDt5Rk6mdE7wF96vnSKhFg3oiwEK1DeR6RQ5VM",
  "key21": "2FmKtz6ZDRnF1MBdsDgLYuLRcRf141mRPZwtMXKUH8cmhDJwNiCPEB2tRd32cevBLJVjwYnFqUwW5XaJYFR1y6gc",
  "key22": "46k4jVJkjPyHPvTjLEcUQJZeUPJjdxjT2CHoqMDMgFK4wfs5DD2uNZPt3uU3YPvumPbdckewJTXf7G9KPHG4qUjg",
  "key23": "5EhvAKr3epkfvMixHQvyEDUTuAuj7uDnMW8N81VZLHUgk3Gcz91sWYAF2eMTpgPQcLD7Zzx3PLKr83QF3Xo9Crei",
  "key24": "5yiaB64HmHx8NwQwA1qPqCB1eJESHk8mYUifga25zgUGWYvQ1rkYLCiBZVMowxQrBQdStV41ZTL2FptYtzUxxRsm",
  "key25": "44qoA9TS7mnFxz8itBiocpdLg6A1qk2SCYzEyx9YyWNU7TQpJAW21MpFJDnSrvVow4VYMmER4LxaTFMhBxG3ynYi",
  "key26": "LQpJCmACgiErnFfx5wEEPbkvs2F3UnHtjm4nhjoA5ZxAs4D6H5MVTWQocoiZ4qo4Fc7P5Rdp17iVotvaCrEDNzT",
  "key27": "2CrAwwyguXu6zFzkBzSsbRFj4WdU9g7ZwPJcY6xSzkUTKUoyGzbNDigg6pNgQb6XaGg2jHaqG3ZRkETUnujEDd4S",
  "key28": "qv3MQ5hthhSi87JvyUz5gbGtvu4ogjLTgvPTNFqtVnjEi3ByijRs5nnqaH28qDH7kwoEd7hGyxU5b7hCAaMQg58",
  "key29": "3zPo9jNXcva9heeE5jmwsuGhNERcSJH6ejakWe1c3Cn1rBpGsByXWZWMt9hYyfHsjuzsnsP1bDdgYB8FxGJUS9aH",
  "key30": "5FG11dWL5A1oLDFQvK8w1AjH5EifpXzwZJC8Pyi9q6DDfoREQUxgxnYDb5EmukeATDZyhJpxAM1nvkWgk1K7MEMt",
  "key31": "4RMAHJEJa76bCaZnxoYfbtnD2VCtcZeE5bawH4ax1gEu2kBfMx8o1SDzDWfziXix23h2NExiMhNbk3qtRSc3TpSC",
  "key32": "31MKJjC8Bqs8x75FC5tiWck8ZqvfmV85Drna8iYEwsy11TGJd8Cy3F7XXbwN4rKMRKVCVD5zJdcK7qHcTsooUzyJ",
  "key33": "2SpnWDtNAH8nDs4Uq44R3TTc6MPXMZHsMww8gXz7TMUPQPg6aFFXttvf5WqygmuTLNyqqjboU6RwwhCuSRvGZE6n",
  "key34": "DcwSA4bLJTJXr1BbdjX3YckLW231bH4mh6iFdGug3J12fkpQgm8d9gX45Mqkz9S1LSKmptzs3UFmxf2bnvYy4hz",
  "key35": "3AZ12Xc3MubTfFkaZ3spEWqPMkn94ZQw2QRoAw57rBWBDVtbz7jbaU4Xy6DqPSSWkSRiHpiXrDhasnLfHLTppXxg",
  "key36": "3fRtbnrZjPH7nB8zAuaBqsdhD41nV6UtYYwpm4V9gPBm5RadUMb8sTZT4RCHiEkZvZTDp2KLvLm1aNPrXBLiHZtx",
  "key37": "5i2jWtWk4MCVUeJHn1nii1wHM7Mu3s4n2pSyzNRtzdP3D4VeyzTEQkjdHCc1sMinfNrFzBiAaaD1Y7fnbfBYaqae",
  "key38": "5Xizo2PZoYVfZWCsFj8mHSuvixvYDhWwxKWNMavHd2oNEgySDZwwNpYMJCYjtJzJ83o4Zeu67EPYZUdy5z4E4hJG"
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
