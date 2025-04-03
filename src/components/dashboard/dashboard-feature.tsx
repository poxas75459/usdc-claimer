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
    "3NitkogARZip1adfXK8b6TKBj2TtgPszLkShFN4KZ57vqHFriyobPDZE6SajHo5Q8L8ZxG88dVwrfDx3JUV9RTdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6FnvcsJd7QoCncS6NMzYzMxgamanagsEYj3cBA8fkNvh87KZGjdiemVRBHnGdw8ipAMnppqKAyHDE8ubpKWCbA",
  "key1": "3f52xkCTnF1WZtfZiBkYwUcXaLwbvCG6gSM67HBeLn3QJEc9SzrYPgwpELkVBZ8GHHkWLGBWLFt8pAwbW1bf3PTE",
  "key2": "nVmQRDNEjmsW5wGgXwekp9u4FDXGJyv6bsJya6a8frCE5DSGAMWnKv4pYa8GRX9QDT1K3EAjNC3f7r5VxpWrkyD",
  "key3": "3f19MYKhzxLPsX6DhfPo9jR7v9An32tc2UstSb4FQh53G178QJbdQyF4VdoGTyYvZr3nRovqST4oZzGhGwazjm26",
  "key4": "21ZStnEwzFM3hMbemYhSEnLYKjmtXeJWLQ1Spq8qW4UEE9hvyRj9ymewUv33eF2KWEKKE7XsKZzLpQ1wTuMvyEjW",
  "key5": "4bwithin1M18r45n2jZGxFUUAo3fLAvLkynnoiD4kHoumZoqZ9tY2euVLnwYhUHVMZdqxhEG9mvvKShR2FRAm4of",
  "key6": "4HFP3BEV8yEJHfJgnKtRcJfsbZm69K57sXfczVfyurdEMAMVX6gU8efWUkpFRNMeMyeoMBzG5VX2uqCd6H6UrxPi",
  "key7": "fPoefjqJCxCix4PqBR89PAjuU9fW7h25s13eKBQArBwNdmdSmPZXQpRcyWZMTjkZkFP3Mnozr9JUe9wb3iJ2NqY",
  "key8": "3KTV3mNckzAAubH6pPhnVG7FBUz8RrLFnkpsoUF6FMMy5LDFQvnV3r4gBe7ZSXNKpBnbXp4JpRG7KS81uc4vndGr",
  "key9": "4e2CreHJjyhA9VvXcHeuPaK4vZ4mypVzr5jfLCmXPSjdrCFsVCdFrhSVh3Gj6VckVWB2eJNYamP7fJNZCj3Fdgsb",
  "key10": "hNH4S3LTQsogfYNh5oMXrH9f7T9VHtpiKfBmANw6roPWjS9kCCcjoUbFscfYbbE2YwhHKTfQyg3czssA8c182Cx",
  "key11": "2kR1VYEyAKKbrKUd2ETRNwFm7CdK1wZjN2zEttwGMPUE1FpPJZo7HUszjLCYuTE2Vnk93uPcpKqq3NGLRByWUjSK",
  "key12": "24SP8hQMyQDbqxeyEwjMinbtQAitk1GXREnsNBt2NaaxSLogi9coyNqt659VPVxWaPYCQvaqgQf7ZEsw847JbYrV",
  "key13": "xo9HHmHcZSJ7r7got7TMqWAendida4AnRTABciFYN3NmAR5J47hkhAPJUJJ2r7CsRcyrSC7oaw3DKBMMEDT2mNw",
  "key14": "2kMgW9GkVGoaQ29pxkKS2R1oiHaijsdoXG6RSwnff1Cn3vJ8RKXVPXftmP8cKh8v6VjfTKnXEViQJNSs6Yxs4ifk",
  "key15": "TiH5ChfLEut6XXBuSYwcKDnD2QY8uS8YfHbYKtLD4wmHpimkGJQQEy8a1iqKBs2sg8bv7AGZjYYUXaiJgTHPn5o",
  "key16": "3LgwakjWy3WgGR6RCy9EV12DowyubVeWejNLQk1kesCB91vf1cacj1nZy36DZmQoJ9yy1qQNRBh4TRtFsjhLNSBM",
  "key17": "5QHJnpL38nLoHyMifTfmhZpk1sXYuZsHJxNaj8TAXdLvUisqQzynYWzLoL1GgJhmHZx2dayUnUvjFW86tQvV4Swz",
  "key18": "3iVRhZZnhEpfD4Gqo4JzRPYSKHgTTFzX431hc5mukKvXz4Ws9WBWgM2UCUqZBrtraFjcpE2CJStQ5MBXYnuFC3EW",
  "key19": "2YjqRkcyGYo8JxLahDUZYCLrpX5i82ErTQZNeQt1dVQs6GEcxH9dr1oWsrCDQJaXNmocxsgEMMtsXncY1bCCyJ2y",
  "key20": "5ggFxeSvbgt9DFBHVCGxxFV9jWdjwLV9NUtwm5nLAQx2hP12GKavXhZUd76k1TUiG3jsxj9FxtweJCzFezt2ffbo",
  "key21": "2W9WJ91ipsQnJt49fUBHQt7kyB8LAo67ERd9wBgUnNzQXFAhHHt8vNtHEbk6JnekHtqwkExXh1RtyE7AsmpQiuXs",
  "key22": "2bSQTVQ9ZyWkpHrdVVKiXZSXkM2WDL7kZHzsUZUWkKPX3asNY9TPMZcm5QCWMPC9ZGa2y3kvjPULdz4qVF3zHoDi",
  "key23": "3BAMYXrbqp4c83q12o4esFtNbycwCVducVX9SEkKqWmDWCs1BcPryLQt5YoBZTeGg7CqGwMx6Vz3DrUAejyV4cSA",
  "key24": "3f8pQ8SpJWsKBbGHHCzQ8Z8onrPeWy6gBZFnTGoxJarty7Tii8iNPEuzwDctcB2mZTm974LGxMNR8seU2swsBbzo",
  "key25": "5nNRikThqv4Usta3sKuLrViG8domTt1jZKLEvXctmy9aGwPa7S9tHncdkFBLVazh97sx9mEU88YBwRYijPYta2tP",
  "key26": "2T4MXt51W42W3HxxmTvMG1hJRFEg2V7VLodTT66afggztqYQu9Qv79zzCbxr2Jyes3smLXhdBDCxB5D1KguctZwN",
  "key27": "WHR1zC5QbTedTNQVzLxK7uBJuQ9rjFP7TQVxwAkw9aLaCGJa15Yw3iZjUtMxoPBtYMZRPHQdww4cPcqbQsuXCdi",
  "key28": "55RTwY5gmkWQnBAaukAiWb2UcyKYooCjws7x9RwWnuQhjWPjMjmTuc7PRPgXY2wwwf1zs5DTxkEmkC2v7aogHrQk",
  "key29": "42GTHppDfqXKQfuQAM6vD4vMHAquT7GQvQYYrJbHaaeT5M7jFFvABEVCU3L9wShvZCESSu3xSQcB8h8SBKHrxA8F",
  "key30": "Wrix1snTkVpbcaLzranEAcSct6YFDNc28WNMzMWcRa8hkXoqrh1pyRr7Yjy23hyjncnVaYYmUAfFpFhwfyzXJt1",
  "key31": "Ga74Ja81r76syXjT61badeGGtypzmP4jrvgGu2DELPEarDM78BWT3bBj2Wx2D8tvrNg9cTVExUDa7WT7QeTgBwm",
  "key32": "4C3fXbNJ8cmEjqJ1nopMPBKx7bqF9pk46xif7f9PSWnyAp8Jef6v8pdsa826KtoGbFV99CVNMrS29w45x49BoNPV"
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
