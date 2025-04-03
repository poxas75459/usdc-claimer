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
    "46iHb2rbd1YooviFpeHHyPYYpSSskVDCL143CYjwNTMNpMnXBBvAs8brXZk7W2bTTrE6a8ecGUkE9Ft5jAZ3uVCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGZKkyaiqYgVNQuabmcSEeC4bVBuqhyvFhxzR1bshSf8zdEmiDRSExq81HjZ8CDLigRRWy6mT5DpCVKcVJeU5nL",
  "key1": "2yMT8nPeXTfMjmTWr5xeFDiEeQKJzETBaGZucjEs8DHKjW68NSB6JpiQBsUY2XMG5yLkn6RPxDNEUpY5geBiK6dQ",
  "key2": "Memcz3US7vEuPa9bd2AoCXBjv6fv1YYggDpZtXkXHuHNYDd7G1pNdb5D69rVWaxM6tbPDrAxrjdUSPMSNieCxgQ",
  "key3": "4SZVEssnWzBmqBTAn6indV91mpikMjd2szEBVE6QqfiLxioqwKosnGKTeFEJaGgeQLeYKQ1GxWzqGsWSJprwP4Ke",
  "key4": "fFLccLVkDDY8rAFBJ1L31UMFg6hbfBcd4S3iy5WdSw6s9LMu5uLcr2wRS1zw7vHxN9mXuvoySYhjGvxKrFqBFUA",
  "key5": "288bYwGVQf2kaoZP2ENHTWYkWdHtcQHB6zm8Vi63R38csBezxz5kHkLYMYpGJDhsrz5eSCWEq1uefgQfzvyuL3EE",
  "key6": "3KakBDdnT3cWHXZezWv1Gqa8Py5BHetyuYycqfbmYf3BVQeCewGBH6jnVFKG3tfSduQehMn6YwHdSNqAc3nhBHpb",
  "key7": "uUrBJPyMKSAXh7yEh1uKD4U7MaC4GxV7eT3ToDx6HkHZURh58Y3ASLY7vSeHNoSdKckGNf7wn3UExx6fGUkqc3T",
  "key8": "xLaYNZAh6WCDGjFNzbFfiXvM6URVhQ9NyTkJMD4hLEpiKxjCAAgpCp26oZKebS8GSJj8PFUzWfVgm3CjQs75Se7",
  "key9": "5EAAfYF2NAoNGvHZw6Wba2qhDuYoB15sFCjBfMW8nvgF86N53DbySC1QTwJUCnMYGtX8hkAhDDyNkM85Az2mQEgw",
  "key10": "2np68Uh1m2bSJrUvk2zLd6FzctmbsqEZm5VC3iysiBxUJSMvSwityJ8imuNwdzSBnnEZWEgMn9RqJwVTAzQzzJaJ",
  "key11": "4NXaq1VpBhHYjxpaSvJw1svPu3vA19NivhfkFb2uqxjuYpYpVF2CZTBe1WJB34Lxhk8xp15wa7GJhxgdSrZNQBHu",
  "key12": "5zdd6qrWAjN4wsBAo8BRMf7aCQmJG3VdZQcJxoQRaPXapACSbTn6SmojGMqKUXASxfTqbd7hCjJbCrj8m7rSmfF4",
  "key13": "V54wzwCzhACAdp9Vx7UiQZcVz1PsM2QCTJV2GdFUvhRChAAyYWF1DgyMoAanEDvydF3rdX5JHag6pADLS1e3w16",
  "key14": "3JdRA89M32yvg4rUQh8ivDaGbeyaaF7LaDkCwDQKRz55uYto7B1iJzpBCaPF9mLnmkBBAtuvuQsQL4mZSzHFS6gS",
  "key15": "5FAnba3eaPHubTMbDx3HqndFDHvAJCyChLyydBk8bzAnoMFZxbXZRmYVgSPbfFxTdYNYsun3u5CC1V7EzNfNgpZ2",
  "key16": "4Y9as2rRPukuyT79LnacamdkVvrPe25egjdKVf92cwcRgHyjGqUbDADUAuwFfjG1STMQ44yT7rwDQZueJdAikt62",
  "key17": "5MAMUR481hF6yURL687dPaCiFfLW7h53Z4WgJAXi8aywJLv56iceNyfBZaUiu6hetiopUKcCwgzog1LdeRAzkcuS",
  "key18": "39tVo1FfRT4kTt7ASgprRU6iZM4u8CiH6gjai4cdHr1x1Q8xKiezpMUCCTxxabAZUnp4j5wEHJUh1YF5iWP12L1m",
  "key19": "2Ktpv1hp76t1cFnZpRyP4EDchsjS6cPTkEauS5DZ2qT39kQKZxFvAUb2rCChoXoGv7vCCWhhDmKVthdrDSap1HVq",
  "key20": "3UCDMha5dBjKJvWDrtxSRD4AFfQwwDvNM4G3kDxYFr8SjPPnERScUoG4ApGJqSu6bym5dcQMbaGycWPkfcox4XHU",
  "key21": "4zZ7MBrGuHwZhweBSBx8nU6nUL2XYwtiS5YsyGFEqXzk4U3w1LvJ7NRV73dZ5wQ9WkhL3MfBVghZ8izsPTdj4Whv",
  "key22": "4TqGwGRc5R1ZYTTAaGTXGCgKhvxEkCcmNPb42CzGiD9zzu9AKePcVWVQPrUoiNebVkLfiU4Z5eE8H5VqskmX8aUc",
  "key23": "5mEpo1XDvvALLZhZMFQfbacSPshV8JsjcfE984dvjYs8vgwAyEr2UbgmBz5R3uVoJN2XXmvS3Lab8QG6UMZp3ji3",
  "key24": "3dEXHA3twM38a1svksv8bLfPswzz8isn2MK6TCWEQWBaE8rjqEVFxv7jbt3o5pXXoqD63Ck7fszJW8bZW82jWHrz",
  "key25": "259jgpL3aN7ECdS24HZp6317z3WEmzS1zFuGoQikq9TLSZn8JHgj6c9GdXe1eMYHNHe991KVuz3dw5dCLwEVzTDD",
  "key26": "63o4YsfEqyj3QogPHw1pMz7N5YmyZfzYG6UzSKbGGLa6HRyDbcgsucAFBRspje4N9JUpzpVn7JdogE6gYnZ3S957"
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
