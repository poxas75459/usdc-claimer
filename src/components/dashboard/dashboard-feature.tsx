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
    "1a3dwiFFD6tCV3C1Jd2hGyrUbxPj4aNx4oZaAuWFv6FZ38rbPjm1N6n4LVkJgU2G75SPPSymmFtwkqz412aV1iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MveFDdDjhkvJADHegZRUpCga74prue1v2LJECo63onGznSpgGriPY4JXhs4eYJQvnnuB7F41UMrnmejX6YT1XbJ",
  "key1": "4864N919Gd6iH7HoYu7cU7d765exqeULQPP5RiWhCo272sqWqFMgFWabhmhdMQD6pYrwVMKmzi3EQUmMJSNgsrzs",
  "key2": "RyRnsYyXDFCsz4TU147pP8Lgy5Nen8hxWCK7u1w47WScuKia22KurszZvSYXv3rXBNeCw8LwsWudb8nuBSiWRs3",
  "key3": "5fYVcBxHdKsMyi5ALk5Qvhcbatj5hWfsNV25ZbvmZirQdfnAUJ7QeRjzN528nxZ82bMQTCCLT9fJBnJqVQzVAVAz",
  "key4": "5riFdC3Q9vBUa9yZYGaAhTcYs7f8JzTDdUQ2abYB5XGJR7CbvSMjM4nfxRQoi3te5Ax9iuv2G2shx49JrchrgDa5",
  "key5": "GtjEijtJKee9yj2PWTn6FSd4kyJi6G9ND3LihHExdZWC2UJBxuUkbCUTpyUuhVW1FU2LuAh5HupXmjUqrgmNaXw",
  "key6": "2WNFYjbTAMLLHh263aQ67KTeVzH2sVUEE2GaK6t6J2ba28oqKbTFNEzP923PjjvXfz3JHkWsF9cXBPSWhfv1ViFP",
  "key7": "4LwrwBxoKkEsVH4YKVhFkdaYpFSSgGkkTWMhV27cZdod4XYuhqgKnwVfBTmcTz1qAFDPgaFoWzC2Yqzu5RMLTNtz",
  "key8": "5c5rjK6tmjE2s2PeFBKYcrFkgZvsVTNuCqo1uk6LBEcBu4MMkFJ8qcsKzVYsmPXH6tARLo3vGiN73DRSabSix5G6",
  "key9": "3PJa9mBJeuYmqQPgJSZ1mR6rDaWY4j2r1eiAxpbsVQAiYC8FTJsKWmjVugBDVmgPPqUWe6ES1EtQtks3FqBVoutK",
  "key10": "4mhVPeVjs7qDgaCHaFkqqzP7YefThz8aFsGyfNyFKv2Gu4x7JvKcppJ53aDujCoKuDiiy7ai1feb7DSUB1vsugFz",
  "key11": "3TGAp5aZwr9nnoLidFcC84CfKc6RXNYjeZnerDHx5xtSkJAzBseMieBfVXwS6X5G8VRjTmTjRnNaLs9knhSo8GEo",
  "key12": "21fUmDaqP7CTp1ediLDKyhpJzWvcftUso4LvS7VCN1TJ3VVP88x8aDmjgU4Q5poJWBRxePsgP8fggn8TctcvXBbL",
  "key13": "98tdaRNBmTrL6hpg6Q7G5yw6EaUkrQ2o3VPbgTY1p5SSxBQwgxzpDFZsDSWMzjrLXC7Z7ShyVAgakMoyhyQJJbU",
  "key14": "5nxn6SWCCzAntu915UnF5Rn2KkEQs9GXXfgigGWJn2GsU2xdfn5zBLS2kuVURRAnvw4Babc28LC37mu6ym9D1UkH",
  "key15": "5n5exiaQJ4pakdNvAzx6ym7UVHhTaWEgeuJTD4RgMvKPtgGTrhQJ9QdiznczvMmb3PpYqme3FonwqpXFC6zHm9q3",
  "key16": "5xQhYJSV7c8UwjGhYhKF2NBGT34XfBcMLdbn83yD36AsfshxKGPuH1msbTetJaw5b5a7xWAWHzJD2a6R7u59uGnu",
  "key17": "5ipqzHsYsEbsXJhonEFxN73TEamD4o9rAXKE9DbqajYKGAj5qxDmGvhteLJLJx4MWqTo739zQKJKNewyYJrhiwyX",
  "key18": "4XvX5iyJCcRLUCY5pB3gHih9bgWA95EposbaeV7TV4bw9AtxPtTfHPCEqrbcr6mDmybQ2EjyR68dd3YRzrV6BBrN",
  "key19": "4eSfHfxoMkkSTnRb65xUjdyWLYGugAAZjCfo9Fd8n3yYKAe1XyqLqZxSw3N2d7Tbb4c6JJ7BWAfCjBh8fXzT9bpt",
  "key20": "4wERhTuWWtjJWDWtTYTaUL88JCsyy8Qre9mFaWPsPWNn7yQoGaKpeYwk6AE3vMZXWhLMirNnnXg6CzX8ARnynkMN",
  "key21": "2jXobjZ1HGin7y2RmLgLrrPrMhG6UZ8FZscgT148TvFCof3ZdvGctDaNdTG8hojLQZ3yVv3dcBGTX4Xnq2eN7WJA",
  "key22": "sKTB2kwe37wHQSoJfvHbujhr377A7PudkTn8chMYR6Qn8e23krXRW1iiS8E5zWK7iAy8uRLY3zA5qBHzpF9JS5d",
  "key23": "s4BC8KtKGXAZFNG5PHEZAVQ7AkmXV3XKooSU55Va9vAc3J5jJMKaEAs4QaNoYaMpyNKitY34SWPsrHiP1xx2A4V",
  "key24": "59b6TwALE1RbQxmzkDAB2xbfeBCgy8yCeN6rgFDpUMquMwRtbcRif1yJvHdQP8hwstG1XG1W9K9ggjqKCHsermjc",
  "key25": "4JPNxqrNBmkCzkkiRFCweYVEpFd6qodR4iuiT2tfFFeMpohYCrHoVaXdwLWcwHbYrU3SBuHDS8vG5dK5MYGcqRsU",
  "key26": "5z6AnKAkPoKgAvnfmNqfgAn9uKHaXzhqe2GhQJZmtHwzbKkv5zhw468YmN98UeY3JVM538p5QHXEhdu2BBm6ooAu",
  "key27": "2H3bM4s5pMjGLfFMpKWgGWsSWnTaUsdh5EVPueknSs6sKjRkevKPUHGDNhLdQiiWiqJpS4s65iScjQ2Kky64fveq"
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
