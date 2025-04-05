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
    "4ubPW4TCSRSUkuLHZj2D1Hb4syrphn9TFj35UfgqCSFxSKUaHXBcw2RjeB48sajaeNHhtCSUHif7RUsSQeRoRQb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SwFyomKJ6anSZEZx16SWu2veowS1nH2SXVvX44bhH3Q35mP27pEKjPHKDyPtkJ6gdE6kFRT38Bq933msxxhFZUN",
  "key1": "25z1iCsuFMAqPiQKwc2cZK3BxMbdDtxbNeA6vHSsFENMNXcdSPaQTTBq91gkSeFrGTUpo3M4GfrFEpxepdCVa9xx",
  "key2": "2FmFnngc3G5hj6v9knTp5CnYg4J3oWf2MNY7ipQv98Mm2siZjA58y7SD9761Zef9RoCN8Fxg5hLankszVbR7nutm",
  "key3": "2gdqbAvJFUqcHGTshidWVkFpWM2WKHYwBUkKwGKsuYEjfxKimLQDHqNN32aQoPSvd3qY5z5eUweTWuRAxwz16B8D",
  "key4": "2RMbQZA1VYjoU4tyFHTaqKwLdj8Kg3KoikRYkX6oSAzUuJhNHQe1qGE318sKCa2eUMvymhoGHDpQfyWNQMNbDiUp",
  "key5": "629ixJmiygHzQaL2Vzgk3Mf5Yne544thqwgTFEQijf9PWuiqXaagEE5GhNkxzPFg6cdXEfkDvLPKGpewRKo9uRvC",
  "key6": "uNvUxh2owwqky888z6ksnWCWkVrkvmWswxZQaRrZ85cp3eCscsbtVhthxx3HCsG3J1dzWumdmJ9JdyHiJMwut6c",
  "key7": "23uwSRp4AoxdKzxonbSw87AwyPs5ZHsXPV5YadfBFHHmadMKUYftbqFA6ubpe9QtcpSzhw9hMcJtanhVKodBAKnq",
  "key8": "35f5AHcU2AVn24p2CrZpVNQRDr91TcJwUzb5TV9EcZVqcTevkSKu2KkSyWRp7DKjD4FWd6MKjLzTM1SAB7yq6KTZ",
  "key9": "T7R3ECmmjxPm6rMqoouT9J4MosBVWA43ReuKTvPStT1LhSsYavTyt9LUq86jSrYUXxRDBKT2tbcArpGcigdQaC7",
  "key10": "K7rneus74xvhtThxgS8kks2RrBCFfuEU2JGBoy6PYNE322a59LndGBw52CixkamRLku2GaT7ThGe4pEr4orFCcf",
  "key11": "5e7jQgtEmnMR5n7KqA7T7D7CTt49CE2b1PfKiFcgUPLTwA6pofDqXyrWJh23qzQTkdFXWmpzJqEZdeoLdunpnDSc",
  "key12": "4X6AwJtzPD33PvJEyRzGgcMWEZy8TMtHwCDU9mdeZFnabtyocqgUv5EdzRP8GtH1G3aVBSevHQnrBxy9pg1JHkyS",
  "key13": "3xmdoX4K87rqdcERaypTSYE6TvdJt9vu2pQRU2zqhzZ78VYQDDLpkS5eVCvs7hA8di9BYZQX1oBcBnxK382q6syL",
  "key14": "aRtPYyB1SsMfsPDHtyPQczGzrcJdffzNgpYnVtmtx23qH8ja2nLwEyG46sw4kTfwpvhmh6pC4JD4YUAGsWufrVy",
  "key15": "ab8qdKJQCGrfE7XFypBCCSgx94XZNYMfhwKPWpjdmjRA8msLNjrfPLA9hHTdxuF3st5JWa38fGkfbTf6NEGaoxm",
  "key16": "4KZCMFGwuAsGxVxo9z3RQigX4gVwiYBvjrbHBFzCHF6krPUugZmNQGbt1Ya7v4DsBN5kvXfTKRKiFNESWKB4CjJJ",
  "key17": "3k95LszmPvB96w7VfMd2ysc8NyzKUB3mgYrnsitK93pQ5wqmtDoX5575FM7kJBRYN5dVnw3MjmgSE9nRghGsrH6g",
  "key18": "3PVkZ6KVFLMovYzgkLefvBiZjC3mbFRN2PTHhKw2VNwTMzvfvD5e7xk13iVi3APz14N4bonoo1PjmB2Tb5Fmehtv",
  "key19": "2dpPj2Q2F1DVV6M2txTP3AZcQWbAkz8gwWGdaDNscCTgUtjMt7xEMKXN1p8p6Pfhywdvm1VcWZ3ikWtJvixoo4hv",
  "key20": "5iBKw6CyoeHR3MBXEpcWXRdMVn4SjQzLgYiCfufnDrWz5x54xrtLLMJPD2Dy89Tq7KqvoSGaFFEMTWaXApsMc9F4",
  "key21": "2avBmeyZNgseHYRRS6LzufQhTHeaqTxzqQHq8Rq6eee5RvhiGt2yujNrJto5hp3gydy3LyGvXpQMgJAy4KoNMkfe",
  "key22": "48sNoRQ9CAVYb1pXFwhCo6W1qaAX27GzFAghfnULYWxFHvRamuGKCj8xczpM7nRKeiqWx7yV3FMDcWKJ3g684LBP",
  "key23": "3MRiSG9W2tey9iwfexTDoTuQsLgydcLu5nGnGB5GTejgG9yTMysV4eLH3BqCcZUoBuqMTRaEaJdp85kMAjSmFSnd",
  "key24": "5niLLkLdNFTUBggNYaprpy8BL9pQbP4rZX9agAmv6HKT13YdQcnei5ydSifcCQZzpcyipLPVohKrFDto6og8Bpu4",
  "key25": "3yExmYW75QsbtooUt4hEMYMQ7MY3sJEAcF5C6rmfw7Pi5hzzztCvFBG4Eh7G7KYxzvt4L3hZHWF4wTDMiQiKx7xZ",
  "key26": "5H6y5bi13fB4hikNfbuJ7oapq2jXme8xQUDodZEyX7oBuXdUoxEckEULdrxPqnU8NRqMmwQbUABGBZqy9QpxD2ds",
  "key27": "4qtUa5RZvoUtJm3DSzpKMcCnuSbvV6PjQo81mBHbuFgyG7ZSmMaGFuZZPXP7XUf6nc8Jo3Hj9QKcgSv13Fz1ZdUQ",
  "key28": "41EKvcznikWf1vZKYPdjmnBnecDNodqYhYmUAixhozhp4GricNSVHEukc27gKciQU2xpQSUQ7TWSvxAZQ5GaUSuT",
  "key29": "36nBsGBYUKuk7Tjws9yKL5C5Maing1cZUxU82TFXGhmTLuVSxJwuTyw4aVh4r5gPGknBwfgkBYWtGNyzFr7JUXtL"
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
