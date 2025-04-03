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
    "4c1mPdVKBoEmbGmsftto4J25bryT3B9HcY2TNwBgMzA5NLKBx4VWjT2PdF9ZPTfb8E1b1dzhi5t85E1KXfNrkRFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sv7fVaPkFUXEBHudYkA3kYQonBwBcnULYcuYcV6adaS5PDMsBFRbrdcUs2apRajq4F7CoZ9T1zbkEGXo2nrGbPj",
  "key1": "2NLfgooiMb2xm1kma8uXHAmoJuz4mXZt12EgX8GGqnQEPGMnLdEkimERPU5C8PKVngAm88w7S76XrGv4nY9dQhU4",
  "key2": "62HWazpJFe93QGdPowpPoKUnGd7KNRVRoK3qxuNsTZyyfemAPYviAWQhxrqfYhZFBG14iFLMpsoAAGFezHkcQz7j",
  "key3": "2J1TfhG9SKvVh5jQYaRNF17E2T7NCyjrnW29zMUEXF83QGAbyFFYTqXaC8Rj71vYepYiBTt7VfKsxHzTq4dFvtSm",
  "key4": "6648Zbd8j9LFZnE7Fq44Vbe3WHtnQWa46nqbdHGN7frwnDNGfzNo7dyvuh8ekDMV9LhA6AURQgAY8tRw3K5x5yXr",
  "key5": "PVh58KFE4sgtsMPHenYjDsNLsuruMSYSv3sKSowuJQSHMUC7yoZz1QHRQGMc75y9GLGAZWz6oYfvz2cbFTphixi",
  "key6": "3iKoGB2ebrS5yXd3WuVDE14SC4Uj1Z6MCdAPtBwzdJn3YwQSwtevhe16wCyTP874dggtU9CQadB1SYnNeW2a4Xwp",
  "key7": "5tfTWnUPCj8fM6Rpqgt7F7Kn2q3fpz7VsoDY2zPQYmcvL96mvKhYPnasRyowxcN3LFKGquT2rATggddRHbXTpWPy",
  "key8": "rSn3gR8dXjGoUkt8w8yiQFZ9Aafv8FaZEn86eucqwSgap52jw7xMQ1zbuTUFJ1vB6HXgX1VhPu4XE9EBKqPacDT",
  "key9": "5hmEroM9aVDpZNmko4nMnx8VJz1m3CHhfSdKwHr2GQFy5TkCHT9uAvSisJGnWKwCkkySsyDEWcLrBtKhidvgNgJT",
  "key10": "4kMopQSxrJayveVEyoVvzHDcz7ZpM52CLNavDjNrLLE89PdAwTJcaWFiKi33Vpdo6RaBXU7KMXjpsjrWvqWG6Q3S",
  "key11": "5fdmew12r1JG3pXdhNPVj5KgPbbaAutmJ2fDuXaApRHt6a84iQjjpuvcaqyvHoSH3Wqx9E9E2bnEbnPL53cf7WAL",
  "key12": "6p4f8qkVGZNAT3s9PYnqTjRvuoCFT4DdGWLmpixCtGTnmQ4AEGFZNQfeGUvzZup7C1b9U651ithJvNsHyZMLTsN",
  "key13": "3NJWvBE1YiF1qRzw8jYQsPnbuiBgjZx6JCZkqYjaqmrE7fA2qww6kX7HqW85fVtdY4pHuTjUSMj3jNFyttz1WvP",
  "key14": "ygn2quwXjrpGzwP3igekx8SVz7bh1DwrdqS41DAWWhSkNYDquwT7ZRdPVSpyv7bFpvQhr75kH7LNVv8umSM9D11",
  "key15": "38421MpNLhbGUWMXg4WK1Wj42Spxom2qkHVGQURAxFhQXgo7S7iUgF5K2apAH85poKy6AocntsZQnvTwg2gBKnrm",
  "key16": "2UomqriEVNMUvDbSFEVyJ3bzosbNNHRq5qEWroeUweQmNsZF7Ep1wrVhonrzwNyizpyuAw6txwd8ifR79U4Gq9nM",
  "key17": "3jju8pkK9pE6gZmxPVVamrbs37bEwUeoimiQExL1Eq31hNxktExYYyhWrdEWV3BebueLzHqoUXjiQ7ERGozA4skx",
  "key18": "2ZDL1gEdgeEBd3BJFZBGkMuzLqtaareJsLUbDpx6VoB2go2SUH4gTpVNhFU5nphxonxeNCqdL9VD519r4x7Shvue",
  "key19": "3KhNPsN5ABhCiKPbWt5z6n1e1yShvmEfF67jxNV6eXsR9UDbC6rNRSRGoDCjd5RqHWLtUhf8Da6CwCLeKwFZaEcS",
  "key20": "AYthTdu456ZDUkRzt4vk4BNCCpPeugRGXDDSMYZFqi5Pf3sXjLLpKu43LcFAMi99KXpaRk5bEifjfAA9Czeark6",
  "key21": "3Ygb2nNRt8295uSbTwxrCkNh53f83A7jsVY2WoKnsCDnuVWva16GE7TnMbabhN3JrdjXr3b4UEBgXndfrd9ftEp4",
  "key22": "4D1oYVkbb4QNGoJWdweP1tpGvwFmLJd9hKqbi8d3o9Hh3xij2Y6ZB7mhvNdWWmem37dtkUY4ScWu9mgrCTbiQPWN",
  "key23": "2VPZ9FsGzQ1sWBTd6RQDi3S32YnbinNzffMupwWeLF1H3DF7k9XWNrRAwPev1XaMcyR1Eq2JZgagPoGsEMqRYvB3",
  "key24": "29RpGU1wewmLMBambwq9WL4n4aJweS3btvPQNNPzsBKwCaEq2CeDNL4EmHzrEa8NmmTEJyePoaHexmWCsB2gXCvR",
  "key25": "xxRrRa3QagentV2uuu8obkzLXJxZ3QxLn8uiWggM8yfQy7VuAfHEuQBdfGmCfdymMuA7fwDrfsfnthS6d149c1k",
  "key26": "551NLUxTMyEVEWQRaMMqrTfHYmgFHFvab1ctujfx4Kux1jwfBznKtmJYyru9bq8QoJNfF8Emv62xhJQkydoB4hhy",
  "key27": "FJoq6xkPjPpvUYtVUv33D3uHJiXGaiyZyKUnjuiYb8bdH5NnBBQKr6DBFocYKLPiDR5S2PivP8L7fQd46XhkQY8",
  "key28": "3goYYPmfTaamUevPZBDR92B7uLkqRU5WbfkZdXB3VYBCz28LFtBdKhs3HdhC7XKxdJM6gqHc2PGBMz8rGUJCUKKc",
  "key29": "5kqGcLexUXtHP3eJVUHgo1ihLodkMC41yWvyY7DZy4CfnRjrZPCUyC3pq9qeh6uNynYiAuLC6SZShT3Yqos8qKbG",
  "key30": "27E8JrNFc8UvcWeeHGSWRfk5vMWuawpJDLmvpMa3RmQbVqWZjgod9eTUk8j1SphU7gn8G4Ru7Q71esNUoN9pUaoJ",
  "key31": "5jCAZgvSxYMGh24SogYQdyB41mFcSYCD4XApyvxzgYr28tKKydi1mKdssw2fuLk4hv9y4vqJP7ZoTP3mBKZUBZof",
  "key32": "64X9uqDGFyFySkyUUtmaxEgbhdBuxyE4bRTM7dZPuB8ES2BGt6X6hKGyLJcRudbcZCP9yWbN5eajs8ftvqhZh2nv",
  "key33": "Xydd61wKKfX6YqKGhhWGcT7Jq6Ks9cE7MESh4pf19hqXu7LbDdhUXAdHxzUngdE1bGxaV5nqHtgoLtobb7QuzfL",
  "key34": "3Ho97iNuaaaogPXf12w8KQTp1bfYReT3af3xa5q8PQKSzZWbhAzZFhvcWqDk8YC9Zh3oGfivErJQoF7Bsh1PdiHf",
  "key35": "5H3Y2hnrU7xRBwUXt3vRr55P4N96oWReTt7XXT3YRCoRabkspAcHZD5LVAcNYtkq6CMmtZTynf8TLt7nYLnMospb",
  "key36": "3gwYE6fnctXnC89PVpTK6M1pqdYACgJq31TcsD3rnmYwYSUk8AbkirDk3Tev1fYWHuzzPWYc6Rhu5v3ka7qi6gmh",
  "key37": "2s2zk23L6oS94YY1REQHw7Ggbp8gZYbfLvT6HoLZc3d6fShVPJFFdScW8VVTSKW3rvcWpT85nGAvk7RwXabnjwHz",
  "key38": "4BeAUZ2k7njNUUXrXHnhbP9dEny3r9379K4bmATu1XbUGYoAVfFQbwEijVRKdwZMp5oNUNJx2Ue3Pt3ZfMS525S9",
  "key39": "4hVjoDMJvZ9EAg7xg13zySuYMUpp6aMstfGPpm5AgCnGG1RMKWYLcpo7x31Cf4bVy4xK7ZmRReTthZdeD1AFV12Z",
  "key40": "3gpqHWHNbK4CoCEmDTnqxqYEYcZ7D4dUCXPduEm2wGPApy2iEYYjbesaywUSwo4dk7TjXEbBmHxz9p84coUuCgVZ",
  "key41": "5kzYa2hAJ5Gv7u8MkFYSrkQCzRaMADGSWp4Tb5q9tGZk4YpbLuRFCRLqEj1kxwWoguTYK1Ex8iQJMtr65CYKUF3v",
  "key42": "53R86vKh1SCV5BHrB7Ssvop2vTjUcTHHHxXmUXdaYaqbuPiph8jNH6Nqg8ctRTLrud4zLc3hdixB2XjpYFdb333m",
  "key43": "3N15TXmnJ8iC46qdeUiDqAxKV6KMcxU7VHahYBpPSek62vVB6qowTLX4ThJs4WDm5LAGKRbAkqEXRyJ6HG8qPaKe",
  "key44": "LwdK2FtiB7fe7HMQFKwKrRNeJbaswJKC4B8grgma94hmbtGJEFYAZemfjWrizkersESyzftEkouF2ncBQ2JQ7UH",
  "key45": "3BirCvFcDFBu4e9hxZ5toSVLrq2sMCqunz7fq781j7j4bRXw9v34M3F2ufCJuwmHko5zdtysqwAWWMfFcCEzA2GZ",
  "key46": "kcYh3UT2L8y1sNhH9dxMhGcYEhQZTGvn1hmuMm2oiRj7k1vXyFRhoL6eiLEKyMY2UFqp8QFJuBTfa8zPRRALYwK",
  "key47": "3i6aUL4Pn7PmH1J7vHTqzstRM7scP6zrrQDXJiJ9F3Xz6hz8NEyHKaqzzYDVfhR9HXEF2X2bYnVL75LqWAXB8gk2"
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
