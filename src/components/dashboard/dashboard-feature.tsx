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
    "XvJm3uT3m9QPGbDXTvjQ59opUj46iVaJytqtj2GVAB2niNp2Gifor4HZdjueDQxn3spYhgLJwigqEZ6mDBnwUKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2poRK1b8o7XqyJeYrQaDLVKAcChfKJ88E1a56zLSgXaHgnzNANQ7VKGgTExZ7Tuj93GbBXWK9Z7R3A4qgVV5p3De",
  "key1": "47srJttuGYm9JqLqKuD6nLSk4MvynYMG6ajphbxobnjAC69tYWALickMfXeC5NaAE45BZ7VowCESMdDSQDvwbR6F",
  "key2": "4UtdwF3qHvnMYR7C2MgLSy9PorB6dZPcFzCiGRjU867yR7PKAyiQtePEec4ct77cLtUcwVUkgEZyTpHsbtB8zd2U",
  "key3": "3MQyJSNZ5L2ygxAtVgzvFVBrYMn9YYJ4PyjBxo8tgHXq8WsstCTXsYdTTAkc1GRdSTWascJvwkeZs4kZ3t428hVy",
  "key4": "3HLUgAyyPMQoXWbCrLmwjmH4HrEznb4Qeuphfg9P4UNSto9h1pjgxmE1CNN4QddbuoBsBiJNUq7yMV5jtMG5uyge",
  "key5": "3djMUB4ys6AUYBnnxtDj3sFuQxxZLTF9Fp2sn5ww4SbynzW6DoAGZjqSy2z8bBhXDYivHdkF5bVKWTyJaTTcjiwy",
  "key6": "52j4pXMW3JvXE5kBLe2zyCD4DzuSf14GWSucLzUunffe5AsrJwdv5aoW4W7YL6GaMcnEhdc36NFhj6nrmxgUdtYR",
  "key7": "5FyzFxTFKquoMB3zSoSf9Eh9eTtLeLJQDbzhLed9wygtCVQuMd5dhAGZ4Cef9aZPputZKCHpwuNU2kFna5SXBsdD",
  "key8": "3fpeKkaMGpeSHdeTi2U3c27ZuRFg8pEiYWAynYpiYgNMHA9kc2pUL1B3PVvfhrUeyuqMmMqXnTBk9FRnwMMgyGv7",
  "key9": "tZkbrhC9MqQZRppsvZr21tdCwG8s8mwWASLycXKuiE77nVnVFquzqCyiqRcCD2NEMbLkrU6CjZg9MnApzqHQaPJ",
  "key10": "4kgATCjNNeUrBVz6BN7NNdWZzSZbyfS9zgiRVLQQwwvV3YqR2L5EZ4uMcjgrNwMKtt4AWE8EeNHbezxmbRymBDvE",
  "key11": "5NGm4FhC24kscFnvMJzzd1vRC6rQu3fdeHpwa8pwBuXYkuj8c8s2x3ftoA136JDTzSjLdFGCLEzod5f5nUg4NFrV",
  "key12": "5iWmpHE98spBECRRcsEt7x4NC9U2Y2mgTNMvGkkGy3DhYSu6CW4xsoe8ygj5d7FrSfudTLeSvZjj1hhgdCR67bW2",
  "key13": "Lq39E89SDWaZXqKWey74mFWMY3TuMjs43K4TYbqziMDicYTidmSdv5oeKp4cbdr1GhGU6QzRbff2Jkd5TkpmL8R",
  "key14": "2vdiUraDQHZf7sxmnCgCia7AntmsqEKdu8cGuPV9ejcBa2G4EtSRMDhriSmv7ZXnjM4BCWWTiKm6JdWEywivxKZW",
  "key15": "3kWbM9zmjNBgdRnKgbw8NB6HVbYjpX9FH15CVA7iRgDTYC2id2t7rkyRq9X4DiTNGyDwY7UD5mqDdJWwHjNz9eRB",
  "key16": "3fNWJVtFK3vfBMPR2opZoKu96kdaq7kWSYsYxC2Z26qjxzUxfYaAdMFMSupEtUybRsJYQ49qwgtAXJVPrCebCuDx",
  "key17": "4nAxnwQmt3HrZBYqkyBGy4BMJ7BxnRFk4hzyogSaKsF2EyCrE9pEHE5KS75RSpDQNSJ179dr3an2g8myFvKndFF3",
  "key18": "66iFNAoRyqV7Z2B8PCmkwPG1eBsmGgCySPYKWd87QG7GByx4sj6ksXQ2w7ruULoVC5eXaRSCzccTJoc7zLvvPFEV",
  "key19": "9q7o9Ptx1DDJcf6ramXrs8t8gxmXUeKwJjE9pTATtT4enBosp72TpcAsvS7J8Fm69Nb3nnA1qpruJMJ3ZUuBZDJ",
  "key20": "2vYAda7fhvGY4Cez4niu9b8S7hTvT4yZ66fCd78ZHaCWFV1t7kWqpord7NUJp9o2NuX4hKSs1m8UrkCCCXSqp1sQ",
  "key21": "eHwGgLqj47pS9X1jevbwPM9LxT6EfyRX4sq8wX4PysZ5foJdK8QKaMAZfWviDK6U4qu8rjsc6zwQSJz7f6Wivfb",
  "key22": "3ducFVYCfUR76YT5UACJwffQ8bF7qtwhCxMHYMxArEVp2Q8ucT4ECCBgJSxT8AceyUWGDqr4Ki5svD621wkk6XTd",
  "key23": "27PY4rFEW9ky9YNXahC227yVU3kbthK6odgY8Vo66T59FFM15CDECvJPWjxoXAipsD5SjpqeNs72sC4dXxZwDKac",
  "key24": "5jF7urPhsc4Z9S2xUbR8gX1VvAxNx3ery5SHxDMxqGmhkKPmdwCqkQQKsUcvwMJvXwCnNUkhmCKowBSVgHGrKWgg",
  "key25": "5DaqkRwGbSmsscCHEnKG48tVFXokJmSoqQjzA3AyF7k6WrGHPrXgBCnWqDgwAQ3RJFkQXEMiRNGSrxLveAiexJkR",
  "key26": "drFUQU4QHJsaiL81ASdZtpnjjozLDStSkWq7PnpC9BwJMeQPqC9mNF1wUApQcaGuADEtTKPmCi5YcBi9GeMs1DR",
  "key27": "pTamWAFkGmxr2tnHCshSiYnNy9RUFgxZwiLCXnPk8rem18RQM47q6vvddDFW9UqgVfJhrqhb48ds9PjJBHWMs76"
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
