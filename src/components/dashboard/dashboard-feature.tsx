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
    "43Kaw8RwGGoLhQZFhA7VPFXuggCw9DyCFsviFoJGDE32tEWk7wEpAA2HbMkFi1QzJxZ4HruHjduPV95mKmmsATNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jP2fnNC9E6sZ4MZELQaUrFVAYhWidZXAiXacHm484VkuRHJUpATJyMz418vWqAdN49dKvCZ1zyeADhcx8bnk6ga",
  "key1": "2JPps5sDtjX4vSHZGwcDc8T1edAcX19NkWqA1dMqFPtMaVq6mgMe4g2roYC5NrTqQheyVAKh4FGsujB8QKkeCB2c",
  "key2": "2UE8mxnzcLnF5weeyd5rUtvZFRD1rYqqtL9BuY3J2688iF9oHCiGP7TUiBQt3C6TpmzvbA2mem7okmRRCFKtvDSc",
  "key3": "4Vw6WEJPWBKWZKT9ZYM18AVvUQ5Z4HcCcc1m3GdEagBHxGG5h7ha375zco7ExKixKxHvwSBXCWRLUD57VNuN3ZC6",
  "key4": "3PEC7Udg7qTmaYjHu5GDbG5HDGpGd2ceSPV7rBxqZ9bzhUjDj8nfeTrioD9AYWswY1kFok1uKT6WyVjksqxpD2W",
  "key5": "JFcEFE8v8b5z4TmCDjb77wVTnq6jQWcpqRcvWvTVSfZQsJYQyyPAfvYY9nowdGEEC59cB5biCJ1uoGfDu5SxfLX",
  "key6": "5LwKijWf5E95Mdho2ft2oGicYfXoPa2Ro3ciau2afyNS538BiGiRgL7vBDwAfLpfGgEbs3gi1Se37ogapmTZUq52",
  "key7": "qhhdX9peNQRWeaKzenjm1LEbEtZPdkhdAghBGMDfnWFNBHAwXSXPG4Yvuuic2Cb8fHNZT3gt4YhVKnMJxRc9apb",
  "key8": "3J7zFvGQPPUauBygvN5NevEEfpjJFKGtZCvvPpqpJGqKKpkKUSmk4ZeKVDbys2rVuVL1hwg8NT4oU6Mw78JUqDgs",
  "key9": "3n2MQRAv7x3PUaJzdCjv3K2T4d9G1anSA6NExCRmzanH22ME2YxaFUuVrJp2memnmeUJaDWthdrVVzsUX2uEChvM",
  "key10": "4x9WPXXSatchr2qjRCJZ6ob6tvuTuY8woshbDH51txYqML5Srd6Mcqymedu3yc9TttbRStSEPzAJMR4sRExLUmW6",
  "key11": "2aJR4fkDPP3TpUuqg8z92JmRHah8vfdSy6Guy5MeiNPrWRjccFPnkXuY2U2a2dfF6frxBvcedYMHuxwtD1WoemeN",
  "key12": "3wnBkNPvgtiHt1RdZDuxepHK8HiG2foasjEokyEmERyjfGCpBTrbcmREEnyxfDhHxJ9NVUQruFDsM3VFAApLXitu",
  "key13": "25CPZ72TAwAece2Suw8jpSw94LbFeHX7dC8xANLkPpBcrVYsJ2evMpnEKhTfX992SkkgkV4ZAtndXZgiKzn4cBdZ",
  "key14": "r5739LfN51AMu6B7Tt7gshNbi5KDCdZXPHH6oFbNqAdLGAoKo9iFqVRtnZaUP3WesoCEX3GfQQM3w7sWsz3i6xd",
  "key15": "5LegQAjYfVVUTHYryvSoy8hszXYuL4n4RrEjUWnYAuRVh8bEfXsczBhUbD4uZkc5EEcmQshxk8CtvHMeuFm1KPK2",
  "key16": "3JJsLfwava3gZYfid2FNBDMb3Vg2gTgxjFCx7uUhidZcu6ToTi7ir68sFmnsU9dBpmqY7ooF6mUVGbKaUmHo7yR6",
  "key17": "4UaL1oQC8XjGkac3teQmd8vZDMQYos9wsfvLMDdVCEtUJn7pXXCdc6NkPitZycFnLHxeyuZEMoR2SXFf9gPRGXNa",
  "key18": "2bUCZy6LzZoXtVL6UCLwmHohi6yzFxUzDceZqKjntBQgbo2CKrKaX8sgEPGrhrnfE3VMuvirtB4ZZLicybSGwZhs",
  "key19": "26dxsK9AAqT8zGFym5M8LnGBg2nwzPkcrRifJz78ftRWK7UUD1UVRP8Nx7qGGJn68R568k1EZBxQYRWw8qx2eNq2",
  "key20": "2SDhnmqvWpdHBjEvbW8CH31PQbfj1kjSQEZfoHVdb8VbXFhC9SBB39HVe21uWFmAoma2pPpo8pXF1jezE8e9ZV8K",
  "key21": "5VMVEGvtoWaoBjeh9LADF4FtjwEaChpgAHDPQTSrtDhGtXmcNPXZWZv7tepnzw6VpvumD2EWqHN8eXpmjhqELuPq",
  "key22": "4W2HaDybXtXw3L6ceG3tjmwshxfVmuKbEsX4Czruk24oSozqAYCmzSMMsZCDm7dxxK5xHXfrz5NwgPcQqoi5pqX4",
  "key23": "3kXFAQoH2Ma2riNAV85RufHMdbacWYgFcpgP6cVzX5DatmtfM3deKqnJ9i4t2BCQZLkn8sJskHu6dW6nPTVshd7g",
  "key24": "TedhdjJdCwpBPZW2bEg46aucsAJoDP9iVWcZ7PRHAmkmGW1HYXcSn1V9ixoVQV18EEbsQJLwN8dJE78k8YjG5nP",
  "key25": "AVC9cgakWXu1GEjDudFV7gBwLisFBaCVnPSKbnfRqL76gqJCAdF9F1ZR79tn7LscvWqsksygwwFuvNs2StrCZxG",
  "key26": "2CrucvERNtuXpmMqc5FKBbofdDQcRKqR2JW26AQQGxFMbE5JVQdzjvA9KhCjD3HPP5veKcZRLfkdNKu4pPRJRUAg",
  "key27": "361a4jKFKwFttpCxyB8NxNiSokY1dY7VsLJX1GfkxjmKe2nxxpk2tW2bR3iU1g3nn9WNXbKPcm1XSDVxw42EPWWU",
  "key28": "3akJC6kqpCTWudRCfuj66wzGQmbcDZkZxZcLbywLMUipi1iirFDPHq7hznhTRoi6qfcXsJU3WoggvKfWAmNtWnTr",
  "key29": "UX7AozxQs2cAFhDPKSzJauDScr3sPkqs5rJTEJZsBP7rHNfrK1ZYkAxqq6PVRakYpR7VFfpqA59hfPJFUyAdU2J"
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
