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
    "3oVRc4LL9f2ay8Ax85ywziebbBp3cSKRDKoXEGxtgoLcaK9PLQq5etXMJaNvgNpuuUnnjczKyU7uGHBKKZmawWE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJbhn439BiqN3FXeyuYwSGm5GRVjKaoVFRRLDjLb6MdWquz5zmSDWSQs99eAMCXyec7Jm5QeGjUnrtmysjZvTFv",
  "key1": "4YTpG6UxXvMa7FvUhke57bq9gimJzGajyBupDidHQ3drX4pMWa9npZM4debQyYhKMqbTRaF7JyXSyNKFBCH8oDSg",
  "key2": "4XBcPLRVNNs2hthPN9UQY4SFim86r9bxoUzzNHJ7ypiC3kRvcJMuiKXYoUFh5snedpzfDxd1CjUg4UrnAYuHweRL",
  "key3": "EpMp3QnHVdXjF87s7eqotPGGdUst3gDFJtwLajcCE2ex9ofPBmf4t69fepc1G5gwrEqVj1e23ZALaJRwHsitxc8",
  "key4": "39UNkpTwz4enkFw24xs3CJou2Dkzp1rouuuZfZKk4c8jMitEykbqsGcXFEhS2wmGxvZaPKYXpoUNrMNcKPqF55or",
  "key5": "YgtFxDiJYL8LZvhcXA5wQcdBuVapo8rrn2jrDBwVzqEFZr6p4jdYnNmVgNzCAA9XUHuXw4CdcDxjanXQoit66Jg",
  "key6": "331Knmo2JPmpCFY6HdYdSVxBBLf1WqAdSdr1R3vPfDfPyeR694uSYF69jEVzEd3Znwu1C5e41FEkHNSZnpqsMn1R",
  "key7": "2GiEX4bb34NgHu2vBEPVZyJqmboiaqTkQ175ygpBTPshSWcDJmWzraHBJiACGKejdKEHB8uiWyV1Hix6jVmUmkET",
  "key8": "3armX6yfSxFRvvhq4CjTRp6DVjnYoygVXkTWoYEooYzsQw5rQ75w8y9T6NHKGPctxyUVJznwKtx3znfuoxZA1rLt",
  "key9": "3BXTaT3EQqn9KZxuCNqw6dG9K4g7E8xZeEiUNt2jp4PqQSRmDyTGGjtg5w77yXqGMyyiFsVofdR9cMbtR57i4JrF",
  "key10": "Ahwvi1QmAaw4Sf8HiD6xkzfxC4Hu8iGPz48teb3KXfq2pZsxysgWzjDL4av7ZFsoW4FKPpD54NikV5YgbaNR6EL",
  "key11": "2FcM9XfhvjiU2Caau1VoPLx3mgpncA5LDm1WzZWLj1eccdCsxpZLLCSwFQ3UfurzzY2LKtcSV9Lg89Hef7Thg3rf",
  "key12": "5VT282mn4SXxxGyRS3QLH1U5Hj4bXLGV6xUV77jHtPXH66xYVvXz18dmJumGUxTRnRwDpnVzL3wKPuR5ytEX4AyF",
  "key13": "VFX7xT7KS3Rbm47ukuPt7p5ciVYKUwgWLeZVTBb6MfrQebSspmsAQWgazGmt6K8XJVQM1oP3TnfFzvLgPSct7GP",
  "key14": "65XqeozDk2CW1N52VUV7QZCEnWPrhYMakWwcjNTbicu9M67KZMAjWbuFitR3LGcvqu4cixw9JJmaZWoviHM29puf",
  "key15": "2nWyy3pqVyRR817pv6foiskd65paufmAjepRN9P38aYBJgznNgTihWWcyYC5jySgWCnvT4MpbzY5g97cRJARS8GD",
  "key16": "3M6pNFfEdGwZ367g1RrDUXtrNMQcNJiUd7buRB1iALFTFjNYVaW1N77BBUih95aLw5JyiTEAAQ44w1S4AVaXjayP",
  "key17": "KXEwGFQUW7Usy1xT4VKq7gCbS8G8kGw1jzoeNb8bj4EcHnpcpm2f4dQCrtMEbqbthmjZFRYCf3tEHQ1zrkM7izr",
  "key18": "5j5bTSLx5hTcnEAwUAR28vE1iUyVrqTAk8AZZgifrhHoLL4NZXFKUiV7nUByipLPb2uvBRSNxEjCMNuvA1Ck5wJ2",
  "key19": "2N6FkbT28Ww3QWQcineGDMo6AVKkrajLieuBzAAANirhxm7XB3XFHqwHe2Lbrtzby9SoSgMb9qUyP5WhnDfKnGrA",
  "key20": "5Xq5BwZNHKUTtqdzFujYYhY5xWrM62NhTRjvER5HuWQB6cY7SFvPXp6r9MUx4tc72U3aHT6uDMr8oxtiJ6qAFRGv",
  "key21": "gjLA2t2E9qgTXa61yVTRBobymoVM3RzdXmdbCwkJseeTD4MEWdTQU751yQMqBncGcqTtUaDUjkLM9EZ9cmC5YfZ",
  "key22": "328aqhUEYnJ1L7tNzUKvP4sKtK3dDW1xrwD7n4yzvYGq9MKwoUtaeWC6fsqkqwMHBsEQmnh4oBoMx47qkntrHQBG",
  "key23": "2y5Sm2diboyQJDJyJi9363p78TXSuQFMQXWJKoVYGE5iVW7akruHqDus7DA3U6shYGg5fNX6ewTQNauRQ441E4Bv",
  "key24": "Mj7abDP5P25LFgUyNvjmqjJLocWsMceaJj4KmAZzAPNgPXtu9cAdbvgcA8vQ6NWwZixXMibcArKonjpyke2cF4Z",
  "key25": "3fKMj8D7knvfg8FouwPn9A4PCRD2hVJXB4VW5ayim2171JTKnjDo8DbESAfTCqsAxGapok5teQVF8ZzaarrHdrg9",
  "key26": "2F7dJSPmcaEGtDt1evbDi6pcfj4bWKCcDVPA2gBk6KXxfffcHbPLwU9arWMNqfDYSCduopVQ9zrvrQCrapCFNL7C",
  "key27": "2mc5Enz8QcxvcYPNmSQaKJWeAVxtA9aU8nWRMuiiisVZsZmuokH8g6rKT29uBkDNn1pZkB2ZrxBmjjpDaV2Q1ud",
  "key28": "2SojQmrwA1F9dCs69Soo3ynB1EqGNS9UeD4SXCMJntj6hynsYA8hKJ5QF4i8MSK1nJmagk1YqYJ3Zb3sC1WfqX6L",
  "key29": "2i57HEZ1duHksVvf99hjgU9RsnkZ6r7NsrXV1xNNbDjsoZmqn1eDRB4VfTT1FTVppYbXnokGijYoM562kqg6tZJg",
  "key30": "3JweuzhQeFTC62S7XLz2UXJCyCv8TBKRscgqjoRnNB9FcsMC3aC2kVXw4j1FQupPV7LdRunCofFqzAHBwgiLybAh"
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
