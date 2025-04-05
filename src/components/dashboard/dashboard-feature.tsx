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
    "445xcBs77zxastJjutz1bD82GRYhDkWimJwFGWUWB4kq5hcxu6AagnksSq6p4jrzZ7yW9GsjoYSfDTXoXFQ7zLUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgCKHDvLtcRwFYMek7PdPFXTZbY6jYe9q7XCw9vxHDxGA6aE4WGabqedpJExCBHVhsp4pWX4UxhNP5D6PRMGzim",
  "key1": "PyEy8LvPcedXBZJoHj5MmR1UpqTEH9TWetru1HaZayS23JbywDxv8irAvGaJpAEfvP3B1rkXtmXSaAxhfwgsJh9",
  "key2": "28ZN5Lx6HEmVEVXxu11xBnpREXYpf5osNzwaAue6yuVtQT27GTP3yxePbh24DTqDcLxFZtnQqijzYkHfcwXLScU7",
  "key3": "4KnuwGPwQhfoWu6niKqb72o75Fu7RLUfpiYWQXfQwPGgm3FdC3MKgPvSbkXe1FLzaTXju5BAJ37gRG6RbDBA3MhP",
  "key4": "5Q3inZRAZ3bsV7EEdxLeRdsLyaNpBynhXYV3V79yMMf15imQdXeg2te1iQRiibWwyuk9WWnRQHR7ctonBAyuHgjV",
  "key5": "3JFNafVVuJ9wjz7W2NDSF1a2yXAKwLkebBSoKPADf6yPbeqZqtGDvbSXrzcSkyYYw29gr1ALsA6eTmbGUB1ano4M",
  "key6": "62ABKj1hmWT51geXAiYi6AHcpb8oW17wVQGyBuqqPSC4h8eRDkFdgFV475gFg1TKaMEUvJyaL3XJipU1fhEtKh3Q",
  "key7": "5JkYLwAhojzcwzReHS2YEGpqjx1rrwyu3nVMn6ZZNmN5JxWBisgks7gLc9NHb1mzdwb1BY78tRmAWKzFNsN38MJ4",
  "key8": "4vwcJXjP48zoai2hsThQpDcEPEgDyoFxhFELrcqGmQgVGYuLKBWrirec8yqzCJH5vVgTzcUxcAyeViCmamHbEvd8",
  "key9": "3rLVe9fzL5rPeJjL3bE1c1sqMBqGYDsubRAiq6A1afotUUw5h9uUZYfoAQwqWDEdaxu1Nox4UU7TVr5ZpWBL6pyD",
  "key10": "2mjiBPiKkZtX8sh9EpRr47WKX2urmN1qhReC4oNHtxwycTR6EJBbQ1wuNZjhvD6PoAhMwbKtTFESgmp25UgaZkj1",
  "key11": "2G2JzNHdiyFQgRxJDNaAxNRsjG3YCTfASC1KAjfEvQAcjbJnp7bmsSnEUGXvSNemEutE7enNyh2z3ez68bynxCio",
  "key12": "5Ur1HBzAggYnfZBbBhBojryNW4zYzNuxtFiyGVz5aSBgJPMoCpQwp697naGcysSPkw3fdqiHCejo5ZcVTVja7Upr",
  "key13": "eeNwWj3tPDVjCcKMw22jZJuxmkVS7bkeVu82YFuU33mZeCe5vpAdRrsV1cvHJH6Tj1jnu3U9RDyBSsUb5bEp22e",
  "key14": "63MfhTppo8PLmEGbd9sSTrUZj4aUQYnKbaUn1xH8rBkD1gkSQ5W99GTjX9UC1dt8S6NZS4a443qw33ScYuZUhJYp",
  "key15": "3EGj9oohcf2CZJcsRQQBjY3AevrJkPV9krKvjtZmV5PdLLh7uKu5rRDcaaj3T64kiNJvvd8D5B5LNXCEU1o9nLN2",
  "key16": "62JNEuiJAHyue3P9yTcAq8kPXPG5Grx7esQ5QXyHKzzuTvG83uc6VzbXtiduchB9CKbnQnaZMzWA71wg3juER87U",
  "key17": "53dod37KAY7DmZnKmyy6ES2Fc5dfRkKtKTvC5q4NokiXLKJhhfrekpeWgTKBv8sYkWvvmfHXuifFykfPAJDEVx6R",
  "key18": "2hVVH8FLwaApCTaXUH5XvfyqAwPnos2axuyscvdsfLKjQkFSS7UJhYFdvEc8VbydxoRGQaaHcfJ4RxfRKz2VQHf2",
  "key19": "5zVuicZXwEPyyJAjJLqDs1Zw24CL5pqb4DkDVxDgtVduHrAioBowMRN1hTWDKrsXiTJzKZfG652zEtqfFwerSxXV",
  "key20": "5x78MkwcuAQ4sg2uQmFrv8eSYVdT6sPWHUpxHLnUtMQDoK2hUt12XCdYicrRucdF18DT7CjyBo6ENofUW2iteevW",
  "key21": "PLwojEoUTr6ueykqpoBEg86EZ2QkhnLVEWuWZrkcvtLhq6TWwHcfAHuwPZyV8nnQ3xrrFbTHGb6K7VbCieQnhrM",
  "key22": "5DiNWF5E58wHqkasdzpWz5PX4LWEMbMnYHVNRNSkfZvsm2oYoVCW18EMDHPVtzhx2Gwi7X3bhnMWuZnvtSy8RjkT",
  "key23": "2FGYkMVvMCsYjWMe3HZp23Q6i8vwjefMEst3dddvtp3aV8oQSrEUaHv99BvpWQ4mVeY28r1hBPzqY3dtmzWhh8Xw",
  "key24": "2YS6TVyxRQMg7Fk9CFzfxN21mjg2eXGckTzErRZmArrdKjpueq2vyYGghimrPgnZfeHCeKxUxs462GkACZfo9Wom",
  "key25": "5xp7Fus8Ts8f3FGv3v8EPotA4VoZ3Yk4YEHDBJ6dpiV4HeTLHr12iGBbaXEFT4bUEYKfi81c1zXXs4QTXsG4ztee",
  "key26": "24TKmjWvFVwKuYVtqUf2D7GtaWgMPBn8RF84PAVZiJfmekpk4rcQqgELrBDYPfdhSav8wEc5TZyd7YVoSon8WkSq",
  "key27": "fmHEQyGEPx4XdxogapTmQhmDvSacMWeUeqN5FhwEJF6q2Nr1gDxQ8NGDtnmGRLuDZ8HhjnsnujBWbsCVHDVmjwY",
  "key28": "2ggSwsTFHBHScEiANqdcxeksPT4rWEmcPwcx5MXPwWeUq7FwG7bid5umty7aKBRrQEAfN5TvGGQKzXJUeVxDWU6k",
  "key29": "3Q8jw69mCsxsc87Xa8hWB3GLSvnTnHwcQ1GVrZvMH1hp5TC7YFFdwy5bXbfEhyZKkTNDDgXhjDyjua3fDPuQVa2v"
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
