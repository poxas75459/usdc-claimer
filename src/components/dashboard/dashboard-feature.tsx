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
    "3R8KBBTZaYPHCVesn8VsxwQVozNyC2FVAouYabB4ytBmWsRX6hG7NTFUMdwSCZkaNuwSTDTJTuLUpkNGdo28ucys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUdgJJGGvkwST2Li7RzrtK2P75i6qtJYMHhE5apbvw2N8v3qoTy1A2ff4QGFkZxMSdYutv9PHEUBMEdmU45e8zt",
  "key1": "Y9NJG4evEJ9jv8CsbUXKFxdMCuoM52Ye3NaL5LecUpiQXxMLtXw1mPuxaasMT7nhXzXSeVxMZmyuJmzwA2BvAHT",
  "key2": "5k7xQ56TB8dL1phz4ZwREDd8WFggKut8m28xVS523wzPxgkcE2MWLK6WCKQryidPK35PdNU8tqKegMTvnApLne9q",
  "key3": "28pU1PypNgAMov11rW84VgkfCxVoiaiwsaHjYp45HPWCkc9db5kjPMo7k48UM2xTKKehAGJtSdTB4KTdRHTFdVap",
  "key4": "2Y22QT5zPnkTHH5n4s8wZJtvrs6vaEW2ETVTwJvU62BCfjBa3iJjG9SwdNCFi5aaw6mhxfTiCrsKUoFmKDbCzPYL",
  "key5": "2kgD8R6JBYFBH44M4Rku6m6yWgh7FrQmYLt5ezPYzGr6ShewArLvoLnv2rxfch1d1oLQWeRo3mnakjsL964kRabR",
  "key6": "2qx5napH7EjBVtb9FXJZ6G4k77ADTACTiPufkT3XEfqywhd3VTWxgGNHsxTAUiPzfSwnEUdPMUhbDr5iekuTxgKm",
  "key7": "4hG4BxgKgQXnPYceVpXBWUo3FXuKAVSjgvi7UY2dKBPDVCZK5xYtffWptCddLqxXtBHWF4RykF2nvJS13VZF8av6",
  "key8": "2FtEaQopymXeGb5cYiy3DPuJmmKqZUXbwNQXuE5PuxNgyBDotkbDkijHafPnayh6aB85TtKUWEct3oCZ7pmLtfcY",
  "key9": "2kLNocSLSR88izsxrKjfS61kNVr5CgL69ptciDmFtEsXwJ6Vmp1ia5A5HgKvWZUxKrPinCXojdS9pz8CxstomgNf",
  "key10": "5eMEjq1kfMGhwMe14dEXQmQB882cjQf57hMspmYuEasQX6L1MmmVRe6Eedzngba2Mwgzo51ugcSFJy3UtHkjs5Xb",
  "key11": "zuwM1phTanQFTJ4F9qX1mgiQFtLuAbtj49dKghaN1hiLmvqhEeG3i3gf93d1AeFVWzuVGD1QNMj4J9cScaPseYt",
  "key12": "2fdfMUF9DYQ7J2BQzomj4QP2bayWBFnzJZMNBW6so92PJCcnWKdvAztw5TxqBHVJ4WMyg3JXuCp9N6X7FZKNDyzr",
  "key13": "4ycE35gCMTyfN1ierHXkqnZCKuHwhFPNsVMvGXqk71nJLjm4SYgatCGSZw7jwbvNk1hkzWWVCWQahcNyiZCrye8X",
  "key14": "54Pid5AANKZoN6vDr9Q1cA9X6aJgRE2YaAJWrd1PGu9CBThh43ehtJEU6JfBEjZR6Rqj1rJVZihaZET4jx5vqaZ2",
  "key15": "Gv9zb7DuJeXsSkUb3P3wEU5SmzxjWpEcX7so1X3pYWc76ECzkh1nH8BDeZL6NJgNpop4Lsg4fwKxfNZ5NdUAPs9",
  "key16": "5ogdUSFzSoRAFQWpcN1G7ci7u8MbQ37aP8gReJY7xPcufPHJtx8q9G6r2RnV6DXKkwZSg5UkmHMGswDWAhvdyype",
  "key17": "5rSpBPYsDjxxZNEb6jLxgg6XCqzUAs2behGPvjWkoMSwSAYnDSZbDxJhBv2SnDUxM8UxM6shcqjK7DQAAQWgewSF",
  "key18": "3rPiR5jbLkDprXHPf6WYop3xHkyqQ7kGcs6cst9JEbUhxkF4y4SFcHkTJDqwMBprq7QZNSrger9SAFwHvGL8BtvY",
  "key19": "25MBhgD3BDN3nJCjosAjV4Eya4vbU5ux4HSs4PEd4JGmiSpJ3Ai31EFYRFz4j5Lbzjnks7TL2gHAQe6Ue1rMGjbJ",
  "key20": "4D1N29b1qhf9YbrStTGnVYqHPw3o9Ks5pmAWutW7qCfzbynjeGhffXLuNEmBejDaGfU4CbpwtrSacMsQc5doqwCN",
  "key21": "7BTDm81nDif2KG2vifLLDnTYMJ3bGCFeiBPXhXoHpjEVhSMUTFg3q4jC16sHRtADvWHviukFjCX8F6wzBw8GKtW",
  "key22": "4SKZqy8DKYjYTntGkub8ikm93kaYoqQmPKR1qMM4eKto36iArMrSvWjnjzjjWnEpE3HQpP2kLu5zyaJeArtrsuqC",
  "key23": "5QMTF3nHUUTXL6ETGBYbxcvcjMH97kHkAQNsfnnCebQNjdSf2cqRsPSTmdvYvEZYi5twneaKeT5UqJh19MTmDPdq",
  "key24": "2E1ZwCxcvFRBEovN3Faidx4XmzDdzoawD9pXbZA8wb8cTZFJAMcCjb98q5UVyHU8tXVNiqw6JmYLUuYj5uTegzZ6",
  "key25": "sADxraM6rdFFN3AEhXjGPJFzU5yPzjHmyvychvbqgaV75vYy8AdGsdfRNSaHV4Y6exqmYNJwry9Z9rD8S3eGgsz",
  "key26": "3JyVkwWXgoZ6e3Uj9syQiz6VwBvkdGwV8kufP8zs8cPh9xmxTGQHLudEfwyTm2JRFNv7cTvJZVnWxhzez8U6ftMY"
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
