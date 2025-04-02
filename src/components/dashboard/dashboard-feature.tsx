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
    "4gdaXH9f624JtJay6TRD4n46pbyZf4YDM7QvoDL7zS15SwjipkhQPwwaZ8N3DjyGJuu5NpQV58Z8jgyfKh2YDkk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XrX8RuNbT8GkUbJ6ctagDBpdqERked5yxHEnZ8rAeapo1pqBX5ao2W9VyV1dzeVN6hSurc4egtFZvWUcTbuwjVk",
  "key1": "5XXHMyXy174Gef9qtdnfPg3iJhGovqQbsNNdv82Wyv8jSvfQgQbyWk9XSqrSuEsWFk6gLjNDrMnBr5Y6iy7ChREa",
  "key2": "nmpT7UsoeviLp5eRRv321mvP1Q4vGmsuPMuajs1eHZCkjg7BkeE4apY2Dqdoe9sndhWKHFpCT63RVvwfcpafvKh",
  "key3": "47X93t4LSjspZA6KC595jZEZDWHAHhnStSBQHTxerbpxpJJbixmp4PCkSev8m4maS5734SaXzMdYRYcuAJsUVznh",
  "key4": "5PwKYoeoB6dd8uG9FxQjSN3G2QroQLNGG331H8myYgGtNAvCnzDwYxuiJXJVAHP9LgASGsrJEhH5utnK2RwkzsD7",
  "key5": "AKJQiMEg8SMR6xcDEjvBB9GzHecM92esdm5xmmgz9hKVNbPG2e1FsJLivXvFiptZKfdaaR3Q1SFbqDZMGbgxjs1",
  "key6": "5VrZsQJuB1SRK62Bme5fEi5jiycLYCYkYKdrcE9DknXgCfNwZQYNhvcR5vwQuAKWRk2pbs8zMwrdvfG5U3xFVtdC",
  "key7": "2sEpWxXHN3BueuGm4aWxWcbbbL3eyTwNgCq4xpTgtV5cgGXBCgeuhA9GgCi7PeXtVegAXRsBhD7oeQ9pirgTT2hg",
  "key8": "3rD91WG9NjvuhkYLnkaKrbNJHzXMBAnpCEvwDU9EUWHKiTyD2uYa1zHHdUGEUmHjhXkrKuq7jMQZPUrCM7FA1pzZ",
  "key9": "5yyWXMeVwGJqk9yfmVnqgYEy6KBJSnZoEaQ73CwBW4caNAcvdCnY43cZoX7ESn7ytgN3mFcPj6fNGJeKaifqshbj",
  "key10": "y1auKmASe8qRCkEi6efK9yVeN1pchKN9VzCa8yi9J3WYpTXGeYoxdDdWvVkGqRH5DGCymobrvgZgBze8TXN2CaL",
  "key11": "23ijP4cAyQoYVVhDNWZeErWXdpp7t33QUC83RBtUgoJFsTGzQ26FQhqUdSbAcTPUCPKHABpqFHadvXCzWU2f9c5j",
  "key12": "4S39F1gZHjDmaPh1W7rLJt7i8RR3dsqpQizUTszqC3TTdTAmd4CR59djv56u2Bf3hJE1xKPBryV8BKZzVRKKmhTF",
  "key13": "RohqJHU7nuhEgLLUVM9WeDKcrb1f8DV6fM3AvYp5H7muc8swo7xC7cSuPqgKmVWDhMsNiA1mZxNbHoFujdhrBEz",
  "key14": "2WboDEsR3JfJMHL1z1ZcwnEdfGVw5VE2gR2UEmwfH1kfNsinib94tdANU6ZKa8yddG3MsSAhCJgXRzCVVbn6sZ9P",
  "key15": "5xtM84GyUm4aoLT9S15QXnbzSRsUqdH33u63Y3hjih8vhdBGHR8kHEv6scCsqGkbx4hqEgsoZ71xedTbB2wf9fAU",
  "key16": "38uX1m9BYpXw4cKCXB9gukdJ2paqzejMhUdqsffUFDbUXTPkQceUihiCZmPBZgHwhe6hvRVCEf81JjB5X6PdwQaJ",
  "key17": "56M4EXrMa6QvtqkwNtxYXBUxoNvmK4NjAb7bdPgNbefdL9ZB3c4xZ5dZMdAhwaEiiWm72dfiUcJn6Qbi5CyPJRbp",
  "key18": "eJWbE6Gv8fvT5seXfgePegaQQxtGannbk3P7FZ5b6zEdE1bTdpKoWyCAmzvzBQNBVfmAzcVuAhPf8nseUYuVNxf",
  "key19": "2S2Q4MTixizmUteeMCKPDV2Tu72fTTbuwCU8oDbagM9kRhYmztKGmqhod2Pwrx6owBHDiVQLzhfXQK8J1KMDwvjL",
  "key20": "3Ut8anJowp1FhAmusSNYcq7CPToTNZiKQVS4zZzURKdSkQFnsfQv7xFjWNL8VRyZaxyNbPQ3AHzJ4ivp6ELus5cW",
  "key21": "5gEBqsmxixRDiGrnFaD7StvYDvTn3iDZ36NBrPX8rKA8NLCwjEmtKdbgCU6cA1D8dM1EzkzfFfjTE2QA7JTdmkuG",
  "key22": "5AE4tsHubEBZNqnFzW6TAjTkvY3xXBF4EVqJKM7JoHAKFnCxZnmMz7i1dBq9QAzMn6tETADR1bGZFHTRuG89PQdx",
  "key23": "3Jd75DSqCrXwYmVifveU9fAzSAvgzCYxFGZ3ZwExh6Uggx75reAPnbDAKwTnNt5p7Fj6pq4qRq4Tg2PsNTyZ95RZ",
  "key24": "46k6rcokWvUCruqerpmaaswfpjtBfEGsMsWSSdMQRmBweE8in9ef38nyEizkgkqHJPhw5PjArz5xAQHdHQA2VYTM",
  "key25": "2afSufNYmQuTNsu6AsFTfQd2D6f635AZk5iGQDqK8HhnhwpDowUMQW5esTM47ePWWQMA5xEv8AfH4FH5sXavUA9C"
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
