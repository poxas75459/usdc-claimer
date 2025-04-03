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
    "3pTJG9QnaDZg9YHHYRavS3EXVXxRMwScFJQ5a18GBxnyLSdTGKiVnFwxn3PHkq2zzr7KbZSEjBq6kaTUTMP9RL2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdScMpQWScTsB3C9NkNeJ6GxJrdY8nhZGyQ8mkqUxdAMhNNuWLMBa482QgZkEaSrMksv5VmWFMv28ZbypMRWVE5",
  "key1": "apos6Bscy4uR2B4SMgrPV1xsPt339DLMMQAm3PWyaxgt7FBP1PR8nGj1xEDfT6gXBX1zFFdZwGjYQKm9Js3jmFb",
  "key2": "551ZfiY7D2L5N7auovce1uVfx7NMgh43FFKmh9VToJ5iACo9hfDjUSPBefaq7qh3EVyxZjW2aqJaXFLJocrCZt5E",
  "key3": "3EtyKUrgcJ75WisVreRdKBZuaZR6KwrJMXmrnuQVyR7ixEgkNmRn34HmK28AYNS29PSPDfQnH2AxkoyXZiihQVQU",
  "key4": "JnLuxjQYpxiCsCNaA1mkNWhowKAX3fiTuA4ZpKnaXpr1WtKH6TNXGTV2gCtvw2xBBfGakQ8PSGL9yZBu8fSW9Gg",
  "key5": "4KR7YUnHzk2aW8FgzZDrgXonFQWmU2xiSMBjZMEPpWvGEXsxiLQG7pRrfLdotuR2NX89oVi6MdakguiSk9WTif9f",
  "key6": "2ZjbWdJ4NrnxQWJraYSh8Z5YtMfnpe4zuCtqMZkdzeUy4KYC9GdvfqumFo1bc92k1WMqMuy9ApsSN3ZHM85m9FrP",
  "key7": "zesoswXsbrjPZ5XTBppwqZwHufryEJweoESAzgkyVsYvUg6gFxApjvTjBecHSLKjpWi8X6QiGZp2daenvtqtygw",
  "key8": "5FXnkxpcqavULXgUxTpSnXJHqtpDu9DDC5Hq6QKtwFNdPkZzCMYPzPnwhgeuJbfMSPonWe9vjG5C4pG757xcEqaQ",
  "key9": "3Y8GXzaMdG1c9F5CcijDvdP7ATzQ1ExEGQbEwHufRnVaXipwVRUD85XNFhgRGZF8uiHseDEG9h2RSr8yrDaeTDPS",
  "key10": "45A9z6cWBtJJcY9XJ7Ze6Yizokj9frRAMGQeLh3N3ZT3Q6QJxjYYLkmcoqV7eeewmo8h2ZH1HytrTpi6ZgnanPKz",
  "key11": "2vWQzkzxLeLLbAJsusaQqZaTD4muAVK64iF9PNWnqjtGuCmgT4fN1YWphKEX3WtRGbGsLaCLWBb5PMvGPqYBe88d",
  "key12": "2a2RkJo2YBr1C2ts8j2CB7AeGKhXcYwNTKkfTJ6yyAtT96Mjg8JnioY43bXiJxf5fQRQiuMJaqyS7xzffPgtcxHJ",
  "key13": "66kniPR1Np3KvwSz1rjnRmP9xnqvFdE1GxkNSj2on5AYKyfbj5z4BwcScD7FZ7gmnLjjviHPMQNr8VydKzG6BFoQ",
  "key14": "4YtMCBhvgMWEMz2h27MCvNof9ApRzeajgapVBLN6rcGVTxpq2o2GFyyYzjiB96hsrfnjkw5T9z5fXB12SxqF56yp",
  "key15": "4dcqqZhSyZ1QeQP4E5zt22cPamjrBWgnnBh1CzWerFTerDWn79QHdhf7hjqcK9AhuGDNvMoQ1nXkZRQFUjvHD4ck",
  "key16": "5N9zgSK7P74GSLWG6QE8wJpBtgcoAF87EFp8HXz1jiRVUG3C15QLdikZQPSvcAzmp4HDmhc2Dz1pHHDfy8iXw6TH",
  "key17": "K5eor8Gi1LFyHUT8ieccxPdj1y3J3Y5miRwg2t4QBEyBjn9EN3gNrCvWN1Vptg2DyAfZjSGnaAgCwScJpsidHQg",
  "key18": "RjMn675rERV25CA2b5pMpBSiHM5GTi3XdsR25228mbWxne86718mxrKai73VaAT7AXkxfDnxTkHnGR6KJwfeFE7",
  "key19": "3Fy3718UNf9MmdT6Shh5zKg21kLmC9FR5VqqU5HKecvyKchSEftp1kmZevf4p9wnMqgmUC4qBurMfaBEMsnaJPPa",
  "key20": "4eo2TRjnV54XR3FHgggipDJU8wPqqGKqfAkPqPXfYA7hat15FzCHQkWMLtuqLyVSJNKyAGskedjCVfGHBaW7GxRL",
  "key21": "2gyvn8f7gAnfnkepiD9mqzkmn5CZU47GVLTeDwBBTdCsFnvs7CWdJ7SXgRVgbyiGsVVTsG6fnAqLZVGCmYTV4Ehq",
  "key22": "AAcgmP3UTJkNvt1ce3sJ4FdAHfcZwH3AQi4snUhouj4PX1crpFY5rPn5BTFzdJs319oHeDUq3n9hRiXfW8Pezu7",
  "key23": "4xVansR9xHihqS4dNtVUnzGk2aiFJMhQnJTCnfxergVg6XfnfyauXGwyod8DdvxEET6y6CwXYvo2WGr7UJnVZXr4",
  "key24": "4tP6Qj7MY2Biibo2cJTF3dAabaHbb9ZiJz1Lk49SdkD82ejofESVqeUJPCbguTKiJugSWoANEdRBLDueZSDdbFnD",
  "key25": "44DGT8e79DStPS7yHztzAQsFndkNck2uVMwNYaFRg2c7BTy1moyEXi7zrk6Mo9Tv3nAZVq9CVUFyvxntQ2jKMMUq",
  "key26": "5pBwS9Sr746CCpSS8YbaqjT6irKUK7Kq8in2E2eiNvWfQPwrtFRCBetQ7jHrnrEgybRgaQxijmcEU8KbdKdjaTzf",
  "key27": "643BQaqZC23oFNGXAWFhi4auTVkL9CwGWw6eLxiizYESRpX8Wfxks4wERBQrv42aZkKjHwTdSWirzCMmfJTh6Hqu"
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
