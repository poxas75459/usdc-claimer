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
    "2cpcfhfHkoMKNGCKF2dkKJQXgRzeoQ5eSS9g4HsXhYR6eWJfHrThyDYc7E5HhFzTCSsYMXA9dW8mqYXmeGJYNpia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqNtkX7X3x1xb2gDmMSCCofCBEJeGFthzXKejbsiMudTZx2XCGoN9yhtHHRqaK7c7Qd2ZJazcTeu8zQxHkBo9TM",
  "key1": "4cJih1pUijULpxU5EdUUp3YEcCytmLxF4Fqjeo23ibSH2E84mD8Qo37TKPUYgeZ8TNL2f2CjKsMiaaCUgYDXtiFb",
  "key2": "5R6AEphrFmv6sqD4mm6cxCGr6QiXPo8CKiqCbXzbAm4FuLTM7w6JG7iFzBNJ6NhNqrHCLSBXVXS1bgpuErLJY9uE",
  "key3": "zhKzpxcjcx2qWsUmmBDv1nfeeDvkpvKeGWMW1uxQuiT6qf8Yko3kg6HrVB2CwNyEXcaUoeTGhMhuJHpRrRgL4RU",
  "key4": "4fFgF2Fnes5oZr9cFR5i6nj8esc3CasYE6Roch1rSurSoQfUmTKNybfm7FzRCd2BwraMRik1vsRyAmLgosu4hv2x",
  "key5": "gGV59Z3yzUQrxkJiSwhDDd2Y5VDqTXWBS9jUWRGfnzZMGtNzne8wu4K9CkWt5yxn5TgWWsBXu6d7z6DVP2mayto",
  "key6": "3284ghGNTqVvZtf4SnBTe1hKUjbdVAdxHSrpPcD5UkNCp38LZ534Mdacab5u2uUZP7WJTMTP4mmbBFpMvpekzLsK",
  "key7": "2wgXKNwka6Ei6k9TW357QEWVZTYLzVaeitgTx2n5c2623fbdxL2pxTfQp6LmjQGd2oAKa9mufT3K8phGSUnDf2iQ",
  "key8": "3zYTGiVz5T4uMGiJhjULgsTK7FADnBB4ZxTsB1Gw9RSdoie2bcrcn3ZKYncKf8M82WXfxC4xdj6jq6LmJAKP5sBL",
  "key9": "5rjo6SrCDWdTAdwgXJFnFndwh6RddREH2LGuB94SF5wPYBv372YpCyBav3nFUZy1SpTQUNDL7J97gTWKnUDtfLEN",
  "key10": "5fB8rgWQtjaGaJkxv8L6Jqr6YCy8kcMM7j52qsUsRtsN3cXCgZBCSqaHMUxzaSBqdCTR59ZDpa5E7Wexx1sGDSio",
  "key11": "2kA4vTCwFNf5GVF1N22sgw5F8HpBdE5jcfk73md5xe55UuNrE6uzMCSpEsVhxL6XMyiFgUceEqAJq49xiDcmHSAD",
  "key12": "4TtsFuQZt16C6Br8exqMbM2B4rQa8CUoZaRahZmrXtKVMCGkUJkyNTkkuFjj329bNjPnKmJNZPRv5WC97jeqK1zf",
  "key13": "3fb1RZE34GKetavf2mTRi1vUXEWMmG51fFJibGG7puTS9yjQftJ5V9KMjBPg8Bu1pNsKqzgRFzWFNLi9hrrdp1Gq",
  "key14": "xtJ2hdoUyZHSEDGAcCAwKQso2Urtp3rAq2R3KDHho5bzsh5CJMjyNwjED8wgbdKAXARsWbFtJvjr4MAUBkhM2bV",
  "key15": "2qc3CviZe1ifXCYCADzajkMVn8jKPh7QR9Gs6S4EbQVYaqu4uD4fkmXbmGEnFK8j24xijK1khDNyqCX3snYtKatR",
  "key16": "bvbGcmeL3kBsdKTFRLrsWMXBpowNo9WSEiyMUEQwMoiDhh5zXAGpRXSu1MnHKnL3MM4CkZJPzMbYiRxJd3NpX7F",
  "key17": "4ET9faaKshbMTsXuAJRWJu8h11zfEBP8TTxV5utnvmpMPpYPpEiGwLAkUWKW9jRVKa3t19weTd4MWYVdov98dwMt",
  "key18": "Q5Y2LswJw2Yh14eb4RfMCW7sMYvyA7DHyvBwrzEKQw9nyEBx5KBqSjiNatdqw7kQtPXTfYRHD9EPQdn3Tvr1sDy",
  "key19": "PW1fqjkB7bv64ppebqdwhQzyy41NorT5YD6o7ATa5T7KDNrwqff15b5QrneKDMKW7QqWFbXRmHBGhkixDuwQ3Y3",
  "key20": "qLCp11qdQS9oRkPpxeqzdAu8a9aspENfjp6RMg1K3WsurfxETdpnnEsECybdKV3rBVkk2AgUUfisRXRfZ3sSsyC",
  "key21": "3NXUoJQHUpKv8PhMqBKaEWn8EpABRmFMam43mEZC4rnJsGYcGWqjgEUX3FmV6zVaqRzS4HqN7MQMqfJafmW24TTH",
  "key22": "2s55Ao8dMEJBh6DabKedAVdCVSrm9qeYrnYndsv38fyAo4EwzqLGVt3KXMibuaWBMw61o4brPZdEXGxPHA4iefzy",
  "key23": "3RHseCpFpDvkcTThCFurmjoAubmGVi8aiBq1V67T6DgmpwtwULNwo9yDiovHa8S6G6y3DH7PWjaKiLbRoZqgj4rs",
  "key24": "2XszTBAuXKQXQWD6QfTVQNTxq27pfCS23MEw3sKQagMMKiMjtvQQ6phDmJxFfveXTS39EAUZoczGPDydA1gq2XDq",
  "key25": "y7nHU3VQC23hd6xhQEdDF1dTpY68BoCHW8zfHZVGY39LHW5daERiRG28wMhjFnoT1nhYfexamxYsjH4niAoWU2c",
  "key26": "4TdEQwZ7gvRRHYZaCQEq8R6C6mAG6MQjn9NbvSJWo57M5zEMWXXLesPsgfzKZRfu9D1or1zpbTiwAVun7wC68oDP",
  "key27": "4gHvugUjNPYC6hSdUaGdQx8VWCZFWNyQHsBioDAzeC5w2KztzMDigG9pdQ7md9xSFHbaEYXWHAwQAiL6ScZrERgJ",
  "key28": "45yq2z5cHt7gZpiP7emsaCNddxXMrGFxWWeFx2qzLz2LQYjuEMX4XQ99ubZvy2HrfmKKKA2aquqgjk2qZ2tKciZK",
  "key29": "3AzdpWtVAUfYj8PtMRZd8xDQA828PeFyvhuKVnyVdSHJUwuZxjMeiuPUFm3pfoKHq6bKaudNdouKWwPHNBiiiTiT",
  "key30": "4TfJxuZGhVug6VcgnvwvuX24c68uRznqxuGCQtyt6oMQudRPL9wY56mC4bSZ9Qfqva4Pozz6zTfVsPKsBn6NRQi9",
  "key31": "5P2EPuSqGGNMGb3pSNsNUZS4tCE6wg5AoGi1Xvxe9sCtjPJcaVfVFR1iGaHCkMYAhT3mShLNGGuthMVSh3bZcJF9",
  "key32": "41ccQgATJDsYZXH6T7V7h8kjQjj1CH5YxsrE8T4Uq2rfBuRfsCidjpiDwekiiSBAcKRmkF9GSTTrm4iGJXbxDay6",
  "key33": "Z9RDcrEJYviSkQArccoxfR1oUSXRHyiKauC4xU9pdPC1zSCcy6pE5t3yFhyvo485Ak8MAeS5iy6RzzwiXo1qTc4",
  "key34": "HMH5cfXoje53WWhFTMRd1T7JjDqg7ue6eYk6e9wGccz8UsxmgeKj48tMcyiguDZ8cADqS4zqR2PGC6zCCpNzFub",
  "key35": "2MhgnDzFwXx3zXpCdAo4WFDk66ZSfYJwLEbQJAdBGjWkSL64H5vKAywFZUKFZAGL9cTi1YPkCpdiz9AZuJ9iyvuv",
  "key36": "54aMj1D9T5Nx3EYdwPxPjT87789gagY3jSB4P1s6yEL9MjjdUCwoBhGWhxuXLBRdiFSfRZn6FdqmyQdBV9Hr4Edz",
  "key37": "3mjF1AmDdoU8Dp9ehrNAf2RsrqUNTVDUbhTTkux9dCMqLgNmD7T5G6fs9dZTMXUVdCjenLvr9JkZciY6B9hVMc5C",
  "key38": "5jbhw936AV3v4PQTbshnVth94r3fvjpjJtUUawADNabg7tyPinkkkxp9bWsKC2Lr8pXPrZP9maAyVdpgSLVcDszo",
  "key39": "4VttoEQq4uyxTcJc1me5ryPGwEJ5cspZWbXH36zjUpbGJ5ux3n8UwZzo6hpd5N9wmEA5PapSfktKCp7BzV3ExVYS",
  "key40": "41KczXrjzye8rYUUjrUZe8fB3vmVTpnD9jsABXGiAKH8vkHETFoUd8j7dsBLrwgaanYah558BXKYwFpRmYfS4Umk",
  "key41": "3DRit1tMBWsHtECm2SKveX3nNCJ79a7S9XQDEYC9x75JrzVCnxU59p94L6jFFdMh1FW8nVUrhnoVP1wJEJSfeadZ",
  "key42": "3bupqpdtRJrhfXJYgD4mwjrQAGh4h3wiAAD3BANwspJRdYnDdcgj4PeC5CiiQY3vxjEKsNqhDRDZmnqSjazYK7BG",
  "key43": "3kcRuPza6FCHksspNzDAdMUK5sxJgfSTsZMtdqbuXdjM8kZSesi3qLqpXa3YpF2uaxusrEL47wrMKCp3YR2unHD1"
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
