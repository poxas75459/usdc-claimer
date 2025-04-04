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
    "5DUCoBHkvQbjTp2xfbna3aQ4kf5N3WVz9w8MHngUT15TuUf48ccDxaus4bYpgZWYRJKF9ER8Hwfwrro1BGfy3wNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHTYdTdhA3tTLoCiPPANs3oAG245w9owzum9xaZPoku2occoYbfnfoS6maRoPWRpVU7YadDeChSKb2Y6Y3Ayv9v",
  "key1": "4EtqDqvt42p5itqFdT4RWnZ1zYuosui7EQSgLsP7FcfvGmYK4K69iLmxfqG4amSpiJr8zSd4veQiVxU5qMLV3QrZ",
  "key2": "AancuBV4aHiWiZ9j8S6nCTneUhqxo1xqvSCvREcxKnAnou3c6JLfBsM1Z6RoaBee4HpG5kVkpvjqPNqmx1KGfSQ",
  "key3": "5wLqCsrFgophQU7kz1yvTsRFAFJAqUvQnk9ZbmpZauhG8Cj5nAjgqbP9yJja52RCbaFjKyNxhrJWCPp3qXvxvZ1L",
  "key4": "4FrZ2z6GrUPpgnWTSBBLDZ8cNcQBjc6HXxyvHfNtHiTJ6dCSEYYSPH3NP5AZoUGGuxfVdwnMoy491VCRPemH7oV4",
  "key5": "5E42s7oFYpdvnUHueg912ATS3nEXBFTKpHXEtetbhCPkhbHQLY2BZC2otGqTnXjDeSZW1D8gdinJkjHRwnpnCKh9",
  "key6": "3HTEfqngitZnPCo8JyJdWjJhzdRUaLZCHfUTBwKhnYnS3vMzk8hC8oUnuqRFk3D8hcWNLFSvR7YdwGfN5B9jLiTm",
  "key7": "3xBB8Qt65hXFijtNPr6tr5B1876MdobrQDfrexFeGXLo6oDnnAKtrBHFCxsDzek6J5v5M4dTQKZ6ixM2BSwynxYt",
  "key8": "49aRSM9xbQY3NuMExsqhbQgMhj3mUCfJ1Wz6S73PyC6mFAn7JqxNHuRk1ERkrq5C7fMjYDRV9CsigWFgra8gBS6Z",
  "key9": "MKtZ9ETvv74AEABmM9ZwK2JbtF38MRFSUCdRqFURYBQKL6oZb4NryDSKeeg9MkbK284uPdimp7jB16scbrmBkrN",
  "key10": "5iESPwDnRWavfKZwCXy7Fs8uxJpPZDqmAJAvfiCMh3s86HkJNjqX4eNhvxBZVjyzh6c8cTjD4XGLDqKYkSRwSeW2",
  "key11": "E2R1kr7121phTrUcaExQa6XNfLfG9GpuZZYNoRdz3oZpTDLoV1jskfZ5EPLtexdWHP6cmpewDShyDfbd2iSrRMG",
  "key12": "Bs9hyS9BsHHCpABd2RXQpFzjzcQrWWNxJKUCFcTGM6DbYbDhibFV4GZW1BJvTeRDLwtmpx58pimr2gCS1EwmK83",
  "key13": "5uooeERvbhQitE8Ybs4F5J9xYKzMQtzUCoQ2dZi69KL6L1qWGG4qGuhUPftckeob8MswJLtGWRfRAwZAsuVNkXBY",
  "key14": "5NnrwU7MBj3hRscZsHvhosLxuT8Miim12WGWAttL8UsRxnYE7hXazfsQoE3LkDUUeDU5t9Hy8FiQLu2uHUJet3dx",
  "key15": "5zGWCRF3AUDkEy2X2XTkXYg2UNCCKHpxVT4PLUDmETh4zKXuzLgYZYsSYuAyXrhyWKLACVTjQHUdQrBJJjKm9Rdf",
  "key16": "2QND8ZsskLRWaCRAhiDhitypQuYQi24p6PnXZvvnwwS6EkoajCzxjhrBzaYSnBsVJM4WeYXD8w7ACVVkEs6Qii5k",
  "key17": "pnM6cTnLevUzBKdVHeEq6JK5L4hxHFcuaXwUBzU5x3dqXo8hhfXWbDKW9TvrMvnoJEPgE4HME5TNnuABaMtyx2a",
  "key18": "4BGeeGZkCZ2ok1CmrnNYF259ipMpa8jArcbEUPB2GNQyySj5vGTc66Gn1cA2m3oyu79VnUAK4Y4ANwKELQMVW61d",
  "key19": "5ZuEqHFvNpbj5Ft8fYppGMkKY641oxce53nGN6SqWdWcFwnLakF2sZSzpUhGzcfLc8SifT1SPFUXQP5GmBUxt6TW",
  "key20": "61U3WYpPAB4esKkzrjCx1AS82n2suWnU4kUh9Aonwk6hQ7NSJ4o1MYgjZCHtz96vHk6Q8pctLuBSK3kUkqrShiVS",
  "key21": "2eqw7K6rGshHNjXRHTyd1sE4PcBx7GT7McHxTb3UAnXQ8Y2pSBeWTMrRkX74iF2S19CmLaDeWqVtKC9BGbDmwabw",
  "key22": "fNvWZV3FTiGadG19wuJZMgbAcs87BsPn6bz1aRhv1RLA6ExLW8U4ZW2WvrsjDVLY3KZBPuCKTbLVWFHF9XfXGz2",
  "key23": "MfszrF1RyzB96g5rXCoGxXGN9y3GUQCy75VRWrNLr8xMfG98gfYZf2HpntbrgKik3pD7jqyVbf5Dtu1eSqYihpz",
  "key24": "4Dejmi8fDiCZHcouNehRByW8HZftuz18rajNUHVq4YSwgcDKpNvpGDy2cUVkNbi9vkhnbYYhc1pUaiG9Hpk4pfdx"
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
