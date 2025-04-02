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
    "SEgTmWGKUKQ7nDALichrsJcEbD9nmZso4XvTaMVMSBSY3BfKQo4qxFMLW4VhbdnoUBbm4y8jzRJWEbfVRcN5EDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LsovcYPSBCUMNYW5TTvsrab1KvSbMfJaSYjbFJjVKJuseZwxkPfGtVMihv4GrCag8j169bpVAdYfoW67nDE3W",
  "key1": "4dFVnAWf56r2FFozSd5R1rfucQgTJzQtxsRMXP1AKgFeaS3r7fdhAyCr2DS6YcSq8droj9HMKfBUn1GxA8x3FT1q",
  "key2": "P8AWQewXzbk4oXQSdknuctJgpfQT7Z5YLXxhWZw1yvVmv4M5SsNgaQ7K8RELKq9ftxLfYpEtSy7aW8rWousbdpV",
  "key3": "3nm48pwcLqNgvXFV63hsE7p7ap9iXULsPDqsAaUG8CuwXrMetcVUG4ieBHudNJGL4JKJkfLTcgg7oGdxvKF72XsS",
  "key4": "4NtyaicjgRjgezZmP5eTQYKnfXSy9vSXY8WmsAYxDhCaJMpYgBuXcwNPGVbmHEhTNzHiMPMo3jNBKZ7J7YzDnhLG",
  "key5": "4NB4m4sDLM79G9ZrZPdMJFHiDY1HiErTBRnyndB3FUpcQBCxo4cRjdUfkWhnARaXNH5HLFXuH3v5ZLgS4QkMgk6A",
  "key6": "2D7HG9p42GtXq69iwCtwh72HKAbJt8TDb8Qm2fhWqsvkxcbTisepNvFef6dEt7tugcbmyELJXN8W1abtPsFy567",
  "key7": "iVFEhhybDBeAUdK7wMr22NCgEc4MEjmLJNq4uRB7tGPYspuXiKPiQMeShDp79Fqy5qxHAXYKomCQWEZAJjDbT7L",
  "key8": "74ZXhLm659nBE9SHWqohqAphUMG8C74FLu6EBGBUud8uiVBPSHkL2YqD3TXDUqsgZQPwDvHhzx9HiaapNrHYfBx",
  "key9": "3kSMFUMkjNhRLy8omcgmu9c1aQUXtBh6Nznm5DqQ3qH3eGzba6MFJ6VYcUaQwLZnox8thy9SFDPT9hxL42UhKE6d",
  "key10": "8z6SEg6MksNL9RgubVKZvccnsKakjxFvKKa84SxnperVJM1WRnoR3NG1dmho1oJGr5AGv68HCD9Ak1P2oVaPkgi",
  "key11": "515nF3W1xMDuPLhjCHqQFe2qfSkxsvhiqtWmKEhks3j7FVsyQ8dHP3rhjtH1dax3MbeQuqFuGuPx5rEvGAh6Kuwt",
  "key12": "34pK7Rieg5nvL9kSc2ArFWpUVLKJqbzceJabLFxDNPSXhyyW4iD21zpQmbZgkiu2QM1uCymSrMnqxJEANt3Uez5g",
  "key13": "RW9c98SLj1njrzT9YaFEAURmGvEMrUwCEh8aWiXxW5Va1jvibptZHfxXmJP4tTSCL9dfQ25Ht5BESwKYxDTPYcm",
  "key14": "2bE1QBSM48ZfPC4c9WVTTkKAKDZGtdf1q2LBEuJkrS7o5D3eQYhGEoSGffrfmFTUNr6xS5ZxdAQqZ5gtLCrRKzpu",
  "key15": "4NUjSkVVnoje5a8q8kDR4r7bgL1T8KqW2RSCtSX4kcuzVDi3RcZZU4cNLC5QxbyEV8GAEFb3o8kSyEdJFxWo3SWN",
  "key16": "54RjRp6zmpTLMmUiZ634oyn7JntF2eNJCXpeRHuXb8pixiZCxLVouFkvYXkajda6Zv8U6EeS1cCm42vaF1R9Z6pt",
  "key17": "28PFaGVRDGjspZECyadtqBwcqtJbFeai5YK8n2o5T5hed7vViektGSCmQZMiXB5TZTJwFESPy6siPhe8hXBnhsVB",
  "key18": "46abGrVQVHntaLteMbNitjHPFQ8Lc4FFgjhVHz6mzYY1gY8xatQX4inFF46sEgjb7XUd83Y6Av4wvpcdbi9wixhZ",
  "key19": "a1qMx32N8Gnz3c9AtjK2vR5cEnvoD69oXAki7Pbz63RVW9V2rSdkh32CW5GRtsUchvpgkRRA4dhMqHT3WnZFjMg",
  "key20": "4wCx8rnCfb67Kk3PGqvjgwfaP9Xc2FCEQEmgbbeW71cCX4vLPgnRNYHmWkHnwHnkJbNQn4Qm3AATbFk6gFAviuz",
  "key21": "deotkmu2dHMtrUE93Mdvzh8JHt3nxrCQyqaqSo75wKXbBXAERCzkgPYV4KiPfxg4ibo6V1VHuvJi2zwxtr98DZT",
  "key22": "4KzaiA1XXTeJwZrmAoq4wrtMZsMuxhDroE3JEQxRnHv8uhmSnYuY7eB8YWzVNCGiKR1k3ESX81Mey9H2rZUPC49m",
  "key23": "5VfkSH2afLwH35KuBdcpLKezpNZsStBzapXFinVyPW4axreCLW4weMAwYqZK99PJHVDnJcsGUTRNTvPDR5xHft6x",
  "key24": "2BY9zrcu1aycGnUhgDVWKdFmN2JqH48Xy4MVyxSYw2k4N8xSYpwSSF8w7WxATtkLxgvviDzDJ8rbGobjdPQzfWSu",
  "key25": "4Tz9RRicMwApafX3hutc6Em3nRtUCsjDgeaQCcCUXfbE9GvjxL9e9RGsjjycX4EdJHoYSgFgXBcPGeyzPAV8UYmd",
  "key26": "2B9BbMksH9uugBbUN71duYLPhRLzdXWnVWmcKZFN2AKASAp4kN6N25Bfe26r6e5rdUJp8K1D8ZwikKwuewaADwQ5",
  "key27": "4F7nyvHnKdrfF56uUucyF8CSeeUsPtaCt1miNS8bNYH8Jq6vpQ4yfyfBWUKDevEUBrNCvzxVFp3JKUGua4xGygCW",
  "key28": "4xUJxgGqzQPTRM8fxAyyPdBP6fwrhMsKQuNNN2rXouAe1UnYQVRQjRwgmRMWeftRLL7SG78iu5CCA11oSG6H8SjE",
  "key29": "4qEnDyGvy98Tf4zxC9zjaUbHPYu2uNoC494BV2EFCRZrEUbv9xMrv9hCBbyue9sHwhKXsXjwSprYrweV1ohKcvBB",
  "key30": "2Prcgk8NC8RUB4JGTc2s7XHGrBj51rYy8pWcpFGpvNnkiLajdG4P8vyf5XGmN9G3AY3rw6JqCdb8MCcKc1T5QWBb",
  "key31": "3EAhV8YwamqF1qivTWL7jC4yVK1bv7zTDUfmecJyQuYmLQahpXrkvPkPuHixEcykyTRVh7sH8iwq9ZAh8yX4PcQF",
  "key32": "2Vyx3QDfpKbR3mgSsDeGDwXYXA7n2tHYJsye6KeEEX5g9CLZRbqRU1Zzb8bbieMepdSYAvDVT5p6sX58Z86UWiyU",
  "key33": "3Tdy9J5ffvBikpzSpthLNqNDqfJi7hi3Y66Rou9G6A6fLH8u14RRXYia2nVLB9So9iTFyV3D8Nq5SvcC415ZepLA",
  "key34": "2kAreYu1FepBxVQRLx4sphaHnyEBAj82n4byfWtPSRCo82Fy7DJWfMWkWaUtGzqgc5bPy7hCtAnpss9qYfCEh4kk",
  "key35": "4MkZoitVprZ5uqwvaW8iBfSD44bPn8ehEX8H14xREeWUaVNJdYSqEzfy5HYodSd8tFC84R4jDJFm5snhUx7oqbjZ",
  "key36": "2owaR8pAYyKafQKrEcC9CWy5rmRYSvnDF84gxKJq42144qcuxFHfRkiGbsXRcg5jCgAN5h6Z3BFvfDFL22vtQ8H7",
  "key37": "5cGh8imZrC6keppyNWTKX1VGDBHFHgRc8Q6TqFfUQAn1crWqCbj2hGPf4u4LKFNBrY9nPCSvipKVc7YnPLvkZAcs",
  "key38": "2EWoAz8h5xLHd3yufx3CKzbPkUhmLT5Gexz1sbvvesRYCo5WEtuKk6MdkUDmV7hHVexq1HtBsmTomdmw9tFnMu92",
  "key39": "5RrAubumXbZpAnP5z4FvrSXH7zvFgi2eBMKsvFzPZooya1urgNevmMKcEf4MYYvF62pFtq5vfMggqeR9Sux3zNF6",
  "key40": "ujE4YwGwghfw8yFaeXjnTYSqpH8a9WFJ4aZ2txuwK1ZKfKu8Zp95C3PD6uQd5MnrfQTiqK6zSVjiF63X1E1BPs2",
  "key41": "5ZRd5FyPaC7J9ip4uPF4kRnfqiMdFsTN6BYumYo2YMMa29wE9g1kYsMAPAhbwjKRS81RTRiiwR2nV64iC3g38bBQ",
  "key42": "4BNJrT3eoNikP3VMjmSmMb7NzD3hGmLqLxvMzFQnw7Spd2MCdCifwwZbaPEputRYsrrGY8ZdaePpjMF86w7rHvTz",
  "key43": "2NYvXFCA2fiH7D42HMNMbSWiuWgVvvytVDYkaSrX384mnnEiQswiaV4JWmDjtRwKsByPn9RAEZcX8ijWtnrZVmyJ",
  "key44": "h83nqQKPBKhrBqN3ScnHYNWpHaC8DdGdDR7q8EbBtJHTwGmRpXEy91EYW6yrG6cvXzLJ157rQDVguJmGKteqg9x"
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
