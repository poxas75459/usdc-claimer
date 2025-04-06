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
    "2FfEPToxZyGfq6x93czYzMTY8ysGCGfzwf8UUKrBbKH8SML3DnWDFAyk8ktxJNd8xWX1dAeFqMPn3xfXLZDHiF3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZ9UBp4u1NH4qg3YfmUoLeHcpRS5hvi8Mx9W1pKXejeisg9jj9ujWjju2mweyuNqeunzZpaQgHQuxSkcggk2G1N",
  "key1": "48vp2dwjcLVKi153C95Vzwj53gmaLdbftFXye8b1vkLTouEw1jLn4rPrdZeVHhniUbEjeuCvZpRSGhqH1H5XaJx6",
  "key2": "2sQabPaP1L3qyUcg2LauJmu4VZTaNZmVmXAuTvSrBMdFAxz7TbsJVt6Vc3FJ6TGXKsFgQ5k8ABekBCGm4g8mHTM5",
  "key3": "2af2bEqNSaBDTZTXrcZW5trSvWUSNUUa8kXJLbUnmqJyh7Qvn7zY78r3xqdYyf9EpbB2iqx2YbJcxXBxd1r398H8",
  "key4": "5NsFYaqnk23BwuVu4Yk64XAAJJhwTCdRAG1jKnk1qJ28VNT3XHeUAo26LrZonHjDfXZtzDGXdBURnoRcr4RZN3u2",
  "key5": "23XiYrWMupQYo46qF9MVJg65FNdDTLmhVaZrdNqJQdDKnvGEP8xFqB8gJxMYBuQoxT2P9J37YvgKNUdc2TSpuzBf",
  "key6": "2AAaAo29tSSt7r1FjqnyJRaHFtFwCX5PkZ1pr8TxPEAB8pdAe6H4eBmy6qh3RVkg1FwMtfDyY1hCLBChqdJbyCpP",
  "key7": "4XaBN782XTNRXqoc2zemhzfgnz1NnLkHkW2aMxD4rcRBLmfVm7wM4BtK79CHEapicYocBSsmgqA9ibR37uyqFC5v",
  "key8": "3DfoFYMqxD79NsJPaLbV6o5tkZdEERFQwpieZzoC4fJdHkT3zpyUvTGaJSutHd9vKik4K8bdDYLH9JoDctmCjz28",
  "key9": "5QFzXjXZ7SsHjyPUHW5FFmCD7DWyMTEkQgcqVDJ1rjYccsxV2NAJDxER6DybjZGcwdtMZwX8PyhJrbzwJPfBJiaY",
  "key10": "3iLEMKofe2kuwVQz8ryvYYUyZFHmmSdbDatfACp6jj8Nmg22bYVr2dHMRhzcpY2Z5G2Ppfky4T8qtF3th1HkTRbG",
  "key11": "8yGWJZ2ZZ3AKXTpYVxmPhFCV5viBdWcqv7VhtrHwHoVXjs3PfFjo2Hspmfnp3sCYWj4YyJ2CNJa8Rio3Xay5C8s",
  "key12": "USEac6S7LT5Fc3Nby9g6aFgg9u9uVTcCkgUGtahcBEWPRjDojbB1bNFzXcHzKDGvLvPUuxYR9TfLQpR27UM5Hht",
  "key13": "5iMeBoYo1WT79nhhBCVZMAd75vDQLvEjypNehbuP3cbDuKkzfaYbmmierrBh5g73Tkp1R9mdCMTPzRrKtRmJMHum",
  "key14": "4t1JQ2N9sFP85GiaJ8r38NFfB8vH8eosuG3AG5da9DuC83aX1RS6GyfAsMHfRvNnPLzxFNS9jRRLpeMaGWVMwh5o",
  "key15": "63ysPJwvDQf544TuHx3tpSDKVvdreJmNaPpwsgN9bVazCeY2XofXXJZe7vMaFjTA1SoVLJVzR3hcpiyA7JoNyh6y",
  "key16": "5SNB8MkaUBu8m6Wr9btvqJqJhiyHfSJbZ4fNyS9DU7Y2rZvYhM3LaDXAXf9kqnRj1rVtnLmqdLjQdFHKBqycweSk",
  "key17": "2d8nps7BfSgex7NhosndiA797frk4Qa43iDM5VLE21k1LvQ6yJoaVdkBaYAUZp7RTuhMfHd5njzLghYY58LVP9uU",
  "key18": "4jwTKrwg2MMqT2KX61Eqw1UYxxBstZADYLvrcuPsBSEdBmgtmagLoxn55LvaiDwKdwX5LEoadzhmG5wpBGvhQrUZ",
  "key19": "5C6ECkr7ekxe1MfDgVGpLB2PDkM2Dr9n6wHX1ZLuygLDdKQKkXjBEX68CY2Z1mKWvYgHgd5rTjFEmfQb6ADKKEHz",
  "key20": "2NgBTsUEbMmPBFwpwLX5e8ZntvJScRQoi9zSYUZSzEoxjNiCQRCELkQUTWom9zeV9XcSgRZah9WB1upQJiGM86aW",
  "key21": "5d6KFaTL4CBCeBr5YCK14nfrzPZTgUJ2QHjq99z9EWhgfuzGAK8V6YdLqVF4D19dtw6pwjGe74MA9B4jR8jWvqE2",
  "key22": "2cktDQXAaZk41Z5vz5QLzQFqXZwqGRFnk11e76uJo7a4NnwJccki3bzUg1yCkaEwn57wMdbL4ZdA3e5FsWCn5AZ2",
  "key23": "4XmH7Ga6MemaENULgh6VcrFZqapZYA8FgSRt2Dyoj8z1KxpZrG9ATXpytGKUNzFAyPBezn89ntgD4bYT86KmCFci",
  "key24": "FsvoNW3p1oYiByUfifM8DJg3qR29S22bJQQNMuhYbTGetq53YDdRJHRAi81wQG6U7ZX289ptmWEJxbysTR2Cz3s",
  "key25": "4w4jLMT5NEut6egNopjaJ9xrdaZNwcwKyuEu39k6C84UqjtLaRowQgiZ6U6S9JbWoSefLLZbN8JGLY48VtELFfQe",
  "key26": "5wTaHTjezBNh8sN6Juw73ccVVyhDiBEGrkTEDpevFRed7Vwcz5m8YEcpPrvLtweDXzUUwXDjz4vyRPLPyuXuR6o7",
  "key27": "2WLpqHHQWmqqcaB2ay4NQSfsKQngjHrAZ3raMAVZamq3gSdoSVczJHjJPCwfi3QPdyLTFZXjKZM51jcsBKCC8nLu",
  "key28": "2KVnM82BrU6c1e1wRnT6VdLJdEaABsDMnGhAfGJzYPTT12s7N8dT1Z4NApFPJzUKMjLbQBCZPxqeEMqzS4ASr8dR",
  "key29": "2muC6kFu8nqv8MfmmA1WNRi6bGB4Yu5yNreod7c51DwqnmF89banD5rGD8whosVbVtrizYBqhd1FYLTcq8SuKPKo",
  "key30": "2F13iScvs8B8ZjaqAvJzvL67NSXRt9L12jvkR1VDqmias7ZgxwtTqLCBW78HKdUETS3jdNqnk7jrBhUpaCVUHqNm",
  "key31": "27XAdfos1PDGFUbvPH1XbtuWKAtQxYC7rTYr87oHuDeaALPF7WKF8YysuNMwzsxEe3xo8HsK9rk4eSj1nRCQ3nWG",
  "key32": "4CWB4m3tUaEVuhGvatj6tbwLncexEDpGLosoXfizsHJ2zAH1hLtT7MQh9gjeHKPr39Y2DYR8ajEHgMyYqnJ76LCp",
  "key33": "23w97d9rFLne9Z16DoYF8wtx3166qqqZ8PcWjZMdTe1c1rBAKkbkgVRYaPBPVa4Z96ZhVS47vooyrapBL4FrCoGz",
  "key34": "EyKn1DgtQZ9kaxAhK9EtUAmyF6XnSpUNnN67kXC5DEPXNjMs8Wpg9DZsSefxr51GddaouqNi6pE83hNugEmf5dN",
  "key35": "gbhFKpDvkVFvSotHiA1d9brKh2CyeQvcTqBDrXw2Nf7kK3CmCJZaWDN5NKV3gVX73CEz3H6UYHPysabK94BKPeY",
  "key36": "PagfyEy6BnSy2yCPWB6gkDC6Ybgad6mkHz19aBszxK2ahtibJaSeLccMUj3N8xigQsv5bjb6u9beDsBs2oosARw",
  "key37": "ckmQSPGw1vKcDQdGZPLqm7wz8dCyd48zJMNuMYWRP2LmYafvfP9ZAaTYZNVDZGe8yXpVrqZDWeb79LQHMmcPDbg",
  "key38": "4sEcpk4V6Cmjw7vD7pXLGNjrRuKWgwGCXnMHLbS9TsZaZ4ZmHhPDTTJqbvE4VyuNkKsELEeqLkFKz7KSCKW45NWw",
  "key39": "5kbdkYnnq2J9hNj8JDScuXRJ9K3Ay1aJdKVYW9HQtduEzzX9LkyEakrfhvWvZeC21pPRid45ZSSK6nF5FVp4dD1Y",
  "key40": "vLx7E8iwESW9QMTNs1NMWFFTZkjd6mgNSDiXm6jmqhgkJHcTGi6VPrVCZAPEKscdBAg8yiMjFwHnoDnWfNwGbLF",
  "key41": "2AUPXMq7cndMgVmZ4u7ckMze5sRyW724DtMHGfV861om7fNMKG81iZxw2QXofeyZYJjkVzqhhV4WB6rLtpyVt64T",
  "key42": "63VB2hGM3Xyqdquvc4aKRhaTjLHCpvuR9dWeqx1orGUyqLQ3xWGUPYSmckTawH2GBDtSSGfag5y1iBnfCuFYUmEz"
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
