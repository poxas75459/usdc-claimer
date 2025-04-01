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
    "3DH1cteKVjQ7jm3qTwmf1Jz3FkYMCNbXLhuYC38gygpD5Fq9NRfWzBzH7Qa1hGdfwpuRffQweU6CyBPRNgGse8H8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKSuUXYFhkHpNXAqi7ffSSUVpuoTfhYsiw16QKEe4sTTptLxKGSzfaqBV4whmfPgoQRgtCPWAWeL1MnRJSQKekz",
  "key1": "WFfa8TUyiHTs95puaiev6gU5PPbW8oYXAaxg9AG18Ag9MVmbfqmuwXyZKRgYpnN9h4tqQfoo17ZUwVs5wbMMuDC",
  "key2": "4JnGrNib1RzXbcrk4kPqqoS8MUR2PPuhqErScGAJjBtwPwceps8gWNStqwSvjr8wKhNkWEcMzRVLNGd2q8A2LA3J",
  "key3": "7USucMUKfA6S9mGtGCF9gqmExKgKzSxp2AZewaR3xSLyha8ehi7ig7fwDbsKDBRwrS6cfdY6zaLUq7Kit4HGbFm",
  "key4": "3otWR8Yb1MworNH55wX7LEgn5311dYydpHwt9crH6fsJcELnbG7SLS24QZfr4KNAk4cjpAxQw6oueCgnaFu6iNbm",
  "key5": "2SS9iCi8GFWksQKR3JuuuNhneZMb8vMoLobFPpV8RtaDuLyFSGV9K9vMQcvD3ei8jfEyrC4bLPNBxmb1HfS2tAQn",
  "key6": "58HxbVTGkU8W54kmbBvVARZAQncwZ6wiuvSUW2RCTBD9wsd7PJfuAMg6Qb2Fs8idHs55gRAu7tRR8XNG5xEZjMEu",
  "key7": "2qJABTKfh21BDWLmhgVNJqd1Nkmm1VcWQyZrJTDaaavkYjJZi3xpxsEU8xUFcMZhKTHPMHiiJQ7zhjrorXdbFJr6",
  "key8": "3meLcr4SpMshJ1UNTpeAhjRSxCtHwHmzdNXpFabLa4HuUJhzHeXRaY35cu1usonB83RtX9UroZHoAhpcSHPSV65M",
  "key9": "4xG38EksifrpW8qVgeeuqe4rEaz5rRa6nZ2F6gb9Gv56sJ7bfpb6kg3XffmxHN9J8wAsMtLd4eBKRDopspZbWMex",
  "key10": "2nJzD1s7BxnbayMw9sELkjDK7W7zLSVg6JUqYnsBp3LVJFdCYTyhkiiGNM9eapyCB7RK6GnowAbt5BqKQa1wxv3e",
  "key11": "5g7gBGuD11UT2ywQL3svkEDJdsGBCarqwaGJBBRpwHU8B5jfn4HEVLJMd5dr8FvjdoRmtTdXaKApjg6jXuRAm17U",
  "key12": "417Rwe1b2YYWpd2mQhFjJn913GmaAjY7FMvV3ktXXV9wu2rhiXkAVVszB3zsU5ktyWbTpdzDMRoYz5VYsaWsbfYm",
  "key13": "2KuMF2HFv7HV2bL74ETEVqu8eCii3wvUWyyicRDZTgvtgFZhjhZD8o1MaKPPiktiFpZqpX7XGBALqPnTvZozdjsi",
  "key14": "5jBEFhHpDsgp6ZBf9BTPvfitcrvxmfufU5kpSmZdhusxYJyJRbN781XQ8t55zFrfAArmn4L5ET13sbZ8ARV98B8p",
  "key15": "48cCdZsUWBzEkwiRAb1cFpaPtbwSQLUoQcLXUMVo9MYpcaPBNqnxV52fWDkU5PXTNvHcUxubiKxTh428TE3bwmXi",
  "key16": "4F9JkhgSfXbZj1WsAxyKfs8YsHdcVBLz74F56cYAaDk44N4MxQYB83DJFXwhyxQVLqFKaZumAuHU24a1M2sqWtMR",
  "key17": "WSGfNZmqnTkq3KQ6EwkuHYVU9ys81hFUuezK5R57rCEGc8eexsFcUde9DCj8oFdsTRXAbxG5HoLUdHyBMC9B5JS",
  "key18": "4DLhxNEbDExP1JpHb6XggUC96hfk6sWF7yZL5mkfnmSNEVmKkmAUkdFgnfZ6DDga8dgyjgWHy2NrarX531jDigtY",
  "key19": "2vwtcgQdBoyuPWxskYbAKMhXSX9hrHcF2umzTFX8QNmSZdGizzrsdnT5ZewFFoEJEqoM6XnQr7HrLKCHAM2vHm4",
  "key20": "4Z7ZKyNCzT6RGiN3EJDRdkeStkLKSbVQBxH4FWB6uqo5uwpvXoKrGuFeF4cDk1BLepP5YRNi6srfhtS1qGyjohtW",
  "key21": "5Xm4VerE52v5yboD6c8QNciwUynV2NAFv8F2thr5H9PpCkhipV36MMbW1fHuumuxY4iQ8mQucq2v3rZhWkzoVPUk",
  "key22": "66Z2uzHVLhpha7ATJu9z3P2ugZstesoUCHKYkx3dsEuXXXriFLcRc6eRhbwHmxjxKXEixizxbDvSD84e7K9JwPTN",
  "key23": "57Y3S3X1n3dTgh1rbrt9WmmSoEMWfWevJ9TtyDkUNFPGC665Di8Cj8vYe3egunC7tS9JG5qnRjjmKTjyxSo1RBkA",
  "key24": "4xJmQyEpujC2UdJQannPJMPukAgJwYikEcrAGmnWrYiumSQo23Ghe8Vg9i2AhPchSMhBU4ohtjob6NfW6Tmxur7y",
  "key25": "2VPuyPQUaGDUxYCA3R5Q88FLWb1GvkQfA8DziuW6jUZBFigH3bEQqweibU2LH3LC4YtFbbP37oppZRnMn1MrTpfw",
  "key26": "3VTF17tREmimdDaB9M3Md6EcgXhDdRweARTjLad9cM2XqtLNvqWbLW97LLAY2PazbJdVvKsFgizR7jx7d58MEJy7"
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
