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
    "26fvb5cJfK8955fy8wLDjCCWfLypzcnz1ZR3aExNTM5efDmyhGsUvYbwZMGuy59TTcP2XpRqEMAZtuxjtzJa8dGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnZyJcSBbBiN7QCcZS3xmFq49QXCdJ1LPaWZF2DFezHT8XxaW6aqDU6pHipkauUfiB9xqdKzQj3HDU9fPZccNpe",
  "key1": "NCoqdGWFMbJTNe4o4cvjMcoGEDMrJKPKVMU1EMdafrKfPoH5c9evcSrS3gpzyDuwf8xu1oLmn3BBpg65EyB4XRh",
  "key2": "3v6RWUQLBVGrd2iqu11zaQq1TPb32G2GfofUvCv7w766kffK2EGupUjEDHJuz2agJLt1a3ixWgd323Jif9S82SLP",
  "key3": "2PgH88HsugwHM93anS9tmvEDvmKGJuv2YNFcwpRyDdLpGaEQGAV7fPY6D7yGzwAJaM2mxmpD4F9VEMXGFt9ZH6JN",
  "key4": "5yVsiuCWFgiNZqskvFumuee8ZUVfNWrBe1AVvyvoMNF1pX1Gy8g4hdRoz1dtbEpth5WFBmoVpfuMEN6bDheifNXt",
  "key5": "4BNuoQVC6E4Sqx6jh3AjsD4LT2zBRw8gTrnc7zrvtQVvQTz2YqPetn4FWHDZjGdnAsU4iNcUyg6UwrAyzUMjcNM4",
  "key6": "38RoEFxEqC5jiGhrBa7mjcjCcokVXXGRYFGovFcXnjP4psTgCMVeH4eecRvSmRETJrUNRcfc4enxpmtH2RfVHDfv",
  "key7": "fmqATB6SbVfaGL5GysnULu4FBiCtzMhydSBvGnXLufdEJ7CFuECHeyGQCy8WsML9E3Y64Zx1d6x8fkSayFAa5zb",
  "key8": "BWTwprk1qSTdzcX2wPwHARnkoBy47nqoyzeUvN59zYV4nsYrPp1b1HBrSzpHP9g7md1tMmYnj9TjZkScmPCrev1",
  "key9": "2LyGhWMs7A9Q5NXi6EGYiBfcqCkuNbp9qDfSTMg9HwC6g9Dau9RJJaxmFbKRngwbXABmd2Vrm1M7FxGuTm2Lx2hp",
  "key10": "41D6XFk31b2ascmgkgQ8KJyWptbvzYpH7Bzc8w5KM2bTMpZXxtgPgyqAFoebcSYpze3HFhB1cDUwggYwb4SpRdrL",
  "key11": "3H89wHb9gxTe2FfYXzuPc51zcGt8MWsvkyU7XypJLs95v4Wk352Tpp8zJbjKsgCnW9fMY9bxN2hpAVdPeZRGyxRo",
  "key12": "5fSjyZi7wStNGsoTsUgSo5v7zhe3KaL1C4LmbF9USFN5eYd2XwK4GdJcjXg72YBJtJz8w2D3hKkwxziGGRyGkrQV",
  "key13": "5u5sqD5FpJnSzEZU285rAm2rAFoU2qwLwAED7HjT6tH5qTwzkFNFP7kdDYFrT1pir7SwjGsqPBC3EZWhhf1UuBag",
  "key14": "4b79UqfNWzbEBhd3EQ1BMoUguFgVVsYk5jYYgJqTA5bpydHNofRjrfKf5Ad3w5zyCsjS6owkxwtUeQGE4yC98DnB",
  "key15": "3oBFkxXP7uJRSpfYJbCEXDViZ72j2Q9BEzbBKFicd6XRwk6yiwzXjxa2fTYjV9zBeQovaJ6MoY2gDt1VteVwRUXE",
  "key16": "4GyXobqA4VmgKRWwNs9sb6Yc766pE1SB23hjpYApeiN6rtMQedMtot2goZWhAxtjkLsiLmQffnw5Gq1DSSm3Lqqw",
  "key17": "dfbzDsSnHHkMm2STfqwmzX9kxUNGY7ivFLTbX6CKJS6ivyyLaDNTjCYjLfrGcQUezR6HD9oA5U86W5fFBdQUnMW",
  "key18": "2CeLTFPBNfgV19ggEYx9v3egsG6NiCYkAMKy8HwojEpSaBCtkRcZrjxboqnhzU24Eo7DZKAsGgQYxp9RH5FhQWkR",
  "key19": "2y5XDdpg5mfVyeZHAeBpiH9ZqLq9rzmS2vbc3PAAJ298oBwT9NikHEo9F3G663KyGCRGyeXvEh1qd53yPS1G6q5",
  "key20": "oMtyVHUn6fsmeSKcASBcqUqqH87yvjMDGqqQyGkrp491CV1xrF2vtT3zEHkQnymAh5sB9nTZXPQkoNVy3H8JChA",
  "key21": "64ifwLfkvWSnXwbjPCV7wFvaHvGiC58pqNyrT4SzxmQhSyVy5qZUDkahEauFJBsoSoMB71hmgu55QaxYVTRfr6gH",
  "key22": "3pmnhPHNnyboZbUbhs9jboTzsP4wUaa5Mo27Rzaq6yKT7Ke4tVnAEanbg946DQdREu3mwCnRF9Hc3LcJPvuWckND",
  "key23": "26ZFGCPUAqwrNnRqKje8dXo1zNuw4okttQNt7BruUrbPoKW9rfS7maE2MgqctVdvSx6ViwWaJAc7Lu1oREP1SkeK",
  "key24": "5gwEXyW2R9TCVBtqMX8P5ixkFEkst2UM8eE5CXqm5ECp6tj8xL8rvFrykSGaKx5Q4jQwVGmGyEhtSKWrhQggKPzp",
  "key25": "4cMAiGdWyWjcBYw6TNYgd3VhTgoo8yL1BW7bYpmwVHpmTMtcwxD8z5ooZSv3vRSRAvLPDxeUdwVEFp8YKq8xN1K1",
  "key26": "4HfRAFKSQdAUtggfyKoFuRxY6Y8q5KxjPUuhEyweKFKi4x8Xax9nvdQSjwkGMhM6Kj5fEqu8NGFm5C5kPe91r17z",
  "key27": "2jZTq8V5eSmTo784LLD2z3TxYiaGmR6A9y7zxuDJcuXghE2DwSwvubLwjpnMzWqLu4DR1vDxCX2cRef115sTxxKr",
  "key28": "3v325TDwV5LPrdRpSeKdZzHTAiQT1ob99vozDBtFj3Brh1AD3nSSM9P1RkgeCt91uHRX56MTKUg6DpSVGQ9xbZ3Q",
  "key29": "qJDud8ZRA9w1baJQwCenwYrouhhRfUFLDKwhHn5zKeArrFNW6SyZkpLt3XCGRFgmW8Mm4S4BWbJ5kC2wfe6eEde",
  "key30": "4Anha4BETpRSYF32yu3DkYGWYmY9LnQmDzFENQLekzfWwUYkvxAhgCNfY3BusSdG9cu3r9edEifLT1ehyxmGRDi9"
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
