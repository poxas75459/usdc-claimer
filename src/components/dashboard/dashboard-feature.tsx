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
    "2TraoajePGUUhy9VydxKXz7yXQ5PGBHVFSoVTcqxfEPvi3BcUJ8dCs8UcKoybqaDJgprmv4ADqGxAeo2SuzFiESP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wc5wn1otYrav8tVpoSSisCtWpGx7HU8kdg9BKjRym4E8KZwq1ZvVTtEEyPTzFuw9wA1D4err68HaQDiuw1UuBad",
  "key1": "C2kL9kdx13fCqEyQPMmEE6ec9QiLx7TTeFDEo25zWQNq3H7sJeRxiMHF9uXorHsWGrX8EmU7UPQhJWkHTvvaeSJ",
  "key2": "2uUycQVNLDfpEJeoKCCbYwdDSBF1MuVYgK36oSFvuMJqpepugZjjzG9B5agjfdqDSM6pSsiwTJUyetzzP6dpW4tS",
  "key3": "3WUaiN9i8wepPPGz7uKFBccqECZ6sSNRADUWgeDT38iSb9m5eiMYy4CfmKkQyvhieV27THLF1DXNtM3V3korP1Z8",
  "key4": "3ZcdhQgXdh9qXkLdLjVurpukiNZDeWyKnYdxioDoXaijSbgeVi3WM9694KR9P1WpoDTqoX2ErQZpQShdonsKZdoP",
  "key5": "5PLqfnvHndefofhkGEfS9BDuPZXkrfpTadgj4JxhUG8ZhYNt4JFsoC4QuM2Uy6NhTXHD35FTwUpCyEirjk5kLKKF",
  "key6": "di3RbFrWYDt5ziTBN8BLqTiaPfYinVZPVGAKiDkzuev1sThgbRNc77x2woVZvGrYhi2CQ6Zfnyrm8erVR4z64Jb",
  "key7": "2jAnVtuLdXq9E4zb6rbCiRVVmvHWNMcAuCFv8X5Rm71EpMfGXQgKVjZXD4rGP9i3c2Lk7Q2NEMnDCXiYQ5waiJHe",
  "key8": "4CuorYbLXGNDyiUarEgs6vEBkp82p3HG4k4dXH5phWhbzGpwLBtUz99FsqPbQPHm87cmnJbbAp53JyGv7v8R6kjf",
  "key9": "55o7mZLMuaupdwCYFZ1aaWhuP5uwMBxL3otsab71amuvmmrzMS16YkQPBKswBL3cygesCujfcepZMTZmfxgTqgif",
  "key10": "3XbCjeJrYaD54srUSbY2845UyJuU8EmFRDzyY2TVqqzWeJjumP3LjptCgKCEHz6r2dJ9NjfNv7ysKMHkTzrRRx8M",
  "key11": "2xqcpkz97Gsnq8ceR1zHxsEpEn2Dx5mGzxpNaxpo4VTKYgXwqLuH8uWy6hy1sdDvjL9dqE34byrKTCwAPgNC4yv5",
  "key12": "5WJmSS4p4tfNSQtxnESCA5cLWTsk4fnQR13m1RYsx5WBZEC9LTD7EBgeCcBCaJqbvzkRbWi5kDXLhxXhdwewVGej",
  "key13": "3VEHZeH77N1useKbRDcS7xjK38APLVV91Lf43bHnN9Fxyw58Q2hGbs2fL2V1thUpDVf7sj2TA4RezM3dD4T7yDXb",
  "key14": "31VR58X51MzCn7LoEu9UTXhvjB5pdZoD3ZjfJkqfLgF1wfG5kMNcGXsQJSwcXDmKSjBLyVohyJ2eQw4kN6xzdpth",
  "key15": "5iPGAEPx7Fe3um2dNss29rZR4LhH2ZHSM9iTW7w7SBhxbq8mWmw3mW691XsjL1t3dUqf7MsAPmApQyDUvB78DzHL",
  "key16": "5bNWroEXSe7Q2pBNSXUxMv2ba6GeNGZvLDCJ5BjnLySC7GPBNxufsGNKShktLBAkUYGv6pTxNa8hwGcfT4J38vtN",
  "key17": "29prUdwmJayoz7m1mJX3vs8yMhNnzsKsNEhRXqm4p5bG4Do6vjU4sfiX5bVyZLBdYV7CbAh7Vuauc9koVtQy3nq6",
  "key18": "zdKMFrhQkJwdDCJo6Mb2D5rBdH2Z8p1YpAPDzxwpCaqQ21rFPQfcwwknjxUcppyA7HX7gx94woT1gte8L9qv89H",
  "key19": "3cbHReJ63re8K7Bz2mE5GjhL7cAS7EE7ZBhQXB4fWU7NGHRc3zHfzmJqxHvw2RuSSwG7ZR4iZguBSQenQiMCnsqu",
  "key20": "2AviYXWimNujNJe8ZTE9qXZW3s4tjBzYLpkUkzC9JoqW1T7QL4p9kpyxeC13uFh1Nyqfi49x84ENxLRFtoUNJRQf",
  "key21": "5iac2bxVbSzFDx9eG636oBf3JJZAmC3hyDixgom5vS4U14jpCPgQbA56WsyDMvypuL4xVkwJ5V7wa8aracezVERH",
  "key22": "jH25AofyM8dG4CF7LDqB3NMAZjh5YcXTvVD2CbiCHTi3ByvyQNVMBR1d41vP9hGgg5JPh7VURD9fZwUxEATTpLP",
  "key23": "HJHwHbcQpcpN6bJrxRuMof9APbARYWktHRXpHESoJ6EHSDCECu4pS158CZxnU2RzucsntBfLehq38fnTzc7Twn7",
  "key24": "yh5Mxt31VyGtJ5HsPZkrfm8UzqP2jGBfb53C15APcYaDDBfF7FuSLes7KcxE9T1krANVyfKrgnHJ1QWoE2wk4zP",
  "key25": "2WkHYdApKahUjJfkBbZbKqz3ZBQTcgQtvjkZMWBch9zgvzdDd2Pgf8Dy7HQuAqdHZ7aMgKg4QinZG8JnPYcfWLTN",
  "key26": "2aUVTPxA8x1PKH2FDz1mJgwPYdX1hsBvvz8VyBvsPELE3QAygqirUaQrT9EkMkK6LHfQQDb6K6M2hWQ6Y8SmH5Vr",
  "key27": "2yMFNGKqL8tKTiTEHL66DT5ihDMv37XqhFbfiTUmLYH2CqNCi3GnG5GBqveRSbEraq7HYhhrwDsDhRwBTUFBDYme",
  "key28": "2oTcoQvxnUhowB7RPQ686ui8yKBYyevAE8A4EAyafXwz1SUrwVXxL6Qyf2TmNh1HrsYeBaHa2maeG9r4sXdK2vDw",
  "key29": "2yVN2p8VB1Q3CU3Avk8zPe7gxwh5X23QLJhBm1QSpatXucNFSpYL5ReF88fiSpQErTakLQvtfS79D3oF9rN4QM7g",
  "key30": "5bt2RdYD7r7PmWoSoY5eZLoUiNAq7afq3khEyft6TPiLNNouTvyqLt7UyhPFahXgpJ7swv5fBFjDMAxwDv6ZdBwX",
  "key31": "2QcEx998XpCHADLQNXcADywzJxxCNp6NEaaEfuTXyKA6hjbtfDpoMoTxX9nLoih2pW4ht3mHHGVVDQdcw3EkSCoc",
  "key32": "qUsQXz3mQHEfLqZD8nSr6R84jFhM58obhgDF7L7Pc76pN6tBeUkuAdr5BNAf27rLTNEnv8gQFDVD6oMxg5rc7c4",
  "key33": "aQ9q2NNEpEU9T22adL9gnersD7W4z6tTChRUm97vWVEE2Q179QTBzwXP2roSLHYkvk4STkuKUr9PVtSdtcBYjdL",
  "key34": "5ZvdHEcMb2QmFk4qz6TfcVDVFXeJ49vaU2obDeTXNrwXNn2t9AGpp7fQ5ixXNUToqKhafrNEvJ5dor2zEf5ESTtE",
  "key35": "2ByWsM4J4V87aejePqTzLrNfSUeLYoaPfQD7MFMuFc89Ufs9orKiuZS6Lyh1kTa3VjzjRtEg5Jp4J6p5yQVbPjCP"
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
