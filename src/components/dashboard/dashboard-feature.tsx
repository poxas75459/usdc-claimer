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
    "2hcUhW2fjhpVCcRbZsfMFWYf2YotoGpHmrcoJy4QcniogJo3sgeGD3xZykbPog4bKUvsB7VqdJVSorzyGmFEk456"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnDnBrQY2HxQiizXe3WVTpRNWhXoiQMdPXQD9ZfC9CxnzLSMoixrCiZdt5oxrYggxxxUgMd94GrnsWZDWsQsFGM",
  "key1": "cukNEJMgr58XTgwnHDHfBBckgU52UupNCpuz8GUnaYXHUoaDeNLkqQkqYM98KJYNZ2KNFH1NJ52qrmcQZWvMwDC",
  "key2": "4HY3JrCdVx4Dy3JRcWQmQw2mjhthTjixWb5bHvYPRyg9Br2K3jQX4sUUkXLJzRLTbc6oCkwqtZgA66yimPcYhacv",
  "key3": "2xsc5gHHjP18ZvdkwGn117mhyG1SsdHhqpB7E6KmjTRMT1siEfF4gagEx6qgqKDo94NruJHYzH59w74WJCH3PA4P",
  "key4": "5FAjG312EctP1nRNegg7xdYhMKLEhkCRFjETNbT4eszY9JFhkT1ocSvnAnfdANdGMFRwXtZ3VAnnukGDQU7y6UuA",
  "key5": "2nEojmaLRVYFXpZcCTE4McYnck3TrgzEkSJoYzhT6VkuNF7B7dfDjaYCaF31VQ7YtPmYtDa3VkBSD2zaqKmitwXn",
  "key6": "5QHtsefxctZatdfmoU2AKaEQCVCYHiXDbF2ygmzXou58ab2ShMfw7AwAjXHorPooUKfAbEwx1hABBbQmVX2YEc5w",
  "key7": "DXVCmDBs6jgoeNyD3ZqnN5UyhVxRXFYXPTk4XoGnD3LDLxsGXF2bK3pTjsVgZ1Afnq3VdJikn6xdnYpnNuALG5V",
  "key8": "5CQFmesx5JqPcKCYEHMK7Dm1MEyfKaivKgPxwiwNDivPLpjLhMEmNLdR2eciXTS1cVcgUV91aEtP5JF9ptsVoqBm",
  "key9": "2Duo3J9S7V6pE7NRcwNEej4Uu9WuJxJaxh4JE7viDX7BHjhipbJqPbyXktyCALU1XAoqrgLGMvpda8LgPwdFVoRG",
  "key10": "4FcQ75AhSeq8ckNeZXko4EVEbLiwgB1tYt7LjcxTgSJhE51C4FC1N4T6LdVc1yRjAoMd5Y4R5QWi7BtwUVQNtL4g",
  "key11": "5cK5ndqmEepCiMwgeKLz9atYuAcMhGmRSDiimGKNdCMpGmbef5bFUfmX6qreNUWotFbtsjtD3qTSX39TC55SPK7L",
  "key12": "3qrf2UVE8mZq5SjwHQir6sLCXkkuiUMGTc1RfwRkop2kS1v7bWLadG7kxJtTeAG99RHute6Bkuo7GY82BFwmHLY3",
  "key13": "2goxWf4upCHurUbX4vMLXwKZDpBdjKqfR34sdQJEC1Ab5aFDxva6CrzBfGMUT9iFfrtGGBbb4i5Nm711vgKrnk8R",
  "key14": "5UdqDuHmByARXDZ1Q6cDw5Q7zyHSpCqJ3bGZrYdTfQJgMjS9z75PEmDyoM36bUzG7hUq7yVsMj4j669i5VwQygkf",
  "key15": "3JjCJpc2Kkm2ZqZNWJBbTNbV9DqcRqdpWAo56YFMKYuTAXXCHSWBMjd7WkeyEYMa5satdfhPSHopPzqvrSyey8UW",
  "key16": "46LSR9Z46QLGhuT7eUKNzhRgtEMEhsKh8tZnAe3vihr2vtpA1hEjCo5MojYBopA1rZ1d1Nq5GFuKRdemvL9zmREp",
  "key17": "5Wjc9dw8wvtDFJFU574g9PncHa4Tw1Lz8qdZgjDkcXKqYxweDhBaez4RFQJ8vGzWakFWmbu6SX9yPGyU7ySUkkC",
  "key18": "3RW4B92u1DFim2QJeNqVkwJN8UFKXGB2TN2wk1jqQ7Na1veZDQF42MUwuLXn1BW4ewvhsv6nX6bUan1n6k5Q3YGi",
  "key19": "5jj7bq5qc995AoHb1TTAGGk6Q7t2px1fuuhfYD8dDKQjuuMJZtyVjXS4qGwPiUDmsRt9w8V4K7wsVuVhXcYc7ieD",
  "key20": "3HFLEKHYA4hV3Sy4xTcwQsMSJvebe3MHmtYEU8BNxz6pPYEK5b2BQEwM5wniuWLnSVZbFUwHTNwQUXF1xV9Rgjpb",
  "key21": "3pKUrGQ4V5mHcfdi2HXdZvU3bb2uRLRkAerRDrPXqaDiUKRdY24nAon8r56EnGMpXq3MXrRSpG3uPQsAEPRXoV91",
  "key22": "2gc32bDTGPatoKMcUvz924FE4phJWNUYuquFkiXVBGBKGfjYaJGba69z387cfZh9fZsiCvBKELgh8CZULKBG5uDk",
  "key23": "3BxsDSmJe2wxYJJukAfS4AC1FuahBizHFce7cKb9A46gCU5F2hbv5B6NzPLy6TkzwFXk4C6fyb3f6ghug6LQcfMV",
  "key24": "3Wh9DihZRL4jqU5eCAvY7ZUtV7ijTF7RGjweUaX6rsNdX5SQvQghZduFYauSouSAsQEPm5TPYTwb7mLCBb58LJFB",
  "key25": "645DDoJUTVZFQmWU4QL4R3xGUSa13c8HBcWLwSCfUzG7Qu5PqmGAaJUyx6LfdqWjfaJ3XdDxvoQsw5Ae2nBb2ZeT",
  "key26": "614ciKFoEF23zDVJXjwMp2qNH4Uns6qSqNFggBsUigJomBj8N4sJXVeJEX7LTQgB18vMk8FzE668JsKchBa3n6mT",
  "key27": "2qVMecTmUfWfStk38p92LgGRjWCCBYo8sMD9f5VvhV2tCK7hCAKspfXbv7eNqp9pX5tkQN7yygduJVex4w6cd7kt"
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
