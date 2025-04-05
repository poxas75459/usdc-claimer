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
    "3Yf1SnqaWsfZznqS4Y8eUrngupeZ6YJ2ucY8nV1mRjbk2hYrSnbGN8BCKoB7byULtGBy2fvNHSP3QCKDEi6kx7Rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWEEnchMRr3Ut9rRLkevxhDqE2pDz5noEvBJJvc21Z15nPiUe6WLYAq52vXdBFPvUMWQsq7CvAy7DTzjghWExCF",
  "key1": "dx6bcqmVTMUJghnGD33SPHfnQ7yFQT1G5bzM72WaDTKMFTtNCPdyqjvgAhasbnEprmjLGE1QuDStjGQHNnppeBV",
  "key2": "51hGMmTLizioAzR2M62DgUGfdm5ZWXBgqL6FQpMTKz5aAUH1NPTnu7PXGoeJd6RvXQAy1PECET28bDzAe1y5C2xE",
  "key3": "1Qk8JLEcHKmRg7y5823Tm2piwDhXTxdb3Y9euqCC3mvKgEAF8ugzQ1HcKhUDj28bRM26BMdyK6TMpqH6PHiFEdK",
  "key4": "5rV7BoB5PTgtf56f6iTEwVtUqVBzoQg1n5spp5cixyKVgAawXKbSERnY2JcBv8VxpWbEkFvRw4cKnP1CBeXv3ZHC",
  "key5": "2DGgoucedV5m1GUMYfhdHMMXocxDCxkdDK9uBW9A3Moh6gysP2r45nCBjnsRpF6WcKsfm989wbDsyut9LTVG3xUB",
  "key6": "5BiXVqrq5eRRydbvKgf83BTftnuqXoWubUzMQQxCrsurMu6J7A61EghpAojXB8YFCJUKf4Gm9EepJ8DKx8qyntzm",
  "key7": "5xpP4kxgJhYkNqiKJJpVEFkpqaRzZG8Dx5uYdGJdxU44NiF8q4o4KyZhvJuR6dZY8bnSG3Cpj272Sb5ETGLbgWAD",
  "key8": "2Ftqm7LbdZu8cxJQvhNbQLqWzyoyEV7Mk7gNti4xJPVS7AeCyEMdKEGetnwSVveT1Cd5uThfhWQXipSc4cBkdJX1",
  "key9": "32Xy653PbcMFhtNHdry8CGNnM8ztXUvDfe843J9PG1JUur3w2Y45Qc8XYx4Lxaj2YbaBSupx8GMPhNwnHHQWivBa",
  "key10": "2oBebQgiuEcgzzcKQf7PWKiomkyf4PmzLq6tn6ghRmUQF8XtDJMz4RDJXw1KNp741fB75U6S4pZSooJG6Dv4ebbP",
  "key11": "2WFU47S2kLNLMc4ibeLbFAFu8uJSQjv91fH6RYinR8onS5EC9LnKmGiWCRKibAwERq6wV5shKCZM6TWEHHpaMzgT",
  "key12": "3pSkuYJtzKMtihyMgfWAm9mfd6AZXV21Yhgmcgo9tJhChJKXWHadQHtc9YEtMqjxviJTXGDA58HJWCkRcdA64SQE",
  "key13": "5ThiVjzGJ8Dt5fFG3kkjecpaUoLjxfj8c5LTYK1rZGWtsqBQi9NNBF8CWkEWEAsa2ZF8v2oCPrKLFz5XbFGz7AnK",
  "key14": "2rqXaqpb1iH6b37BXq4JZ3yvPJboH35yktSdDxqffrNu9Fv3SUg55hWdPW3P5CbYq9LRSYeQBdkRuQM1PCkWgtvQ",
  "key15": "3wAgkn6d9F3qB1Uwz566f2F2bkhXNmCqpYsqukrstUiE47QgbzTBKrug4eQ7LqYYSBSUqvJACneaQwEMm8qmd8gM",
  "key16": "2BTEWuaKF7GDd8paA11vbPLN9N41C4xLbeagHQkjnNSNkTznpYRjzQ9iZrR8NEhE2kLQJrRYTghSPkLDRFunxbju",
  "key17": "45bCDu44wWPDmU2aXvGjQeEc6PJ4kUAuhZHdQH98mqr4gQoicormhwdzmipntQZC9SF2au5pecBJPF5omgJbstdF",
  "key18": "4ydSKTNHpA59bCzeHYqG774aNvTkEyzgZzmd9NJK4EZHJUK8Qfz3zQFh5pL43m5EdXz4LfmBJyXUhLJjX9tf7HfF",
  "key19": "57BhUGJPAEUNTjni2M7XuNHJYnNZuQB6RjcVq6N2HPJydFfXHM8zyH6RhJhx1ouuuuBmAen3YuRbWRWuxHpwRNjA",
  "key20": "2DZbBD1xhXzo1Ry35fdLoJctXRe75obMoMQW3kUgpsgcKvgUX16W2FsEdoYiP4kXGg3mWZFcUTJxiGm5mqXQdUjx",
  "key21": "cpanicPNKRCcn4X7CFeUwK8KQprcsoNRMkWykJjwrjdQGDLSXmLDawiZScMEnNcyjeYpjPBvaSDApn5vmw2PR3T",
  "key22": "65naXoryK7kghjBmtMS61KN79T69UedfvsKbP9W1PvqXQgbfZZ1Lq3GmMN2RVP3y7nQ13xbcKPUnU5zQ9JdcSKq8",
  "key23": "4kzeuQ9WBHMr9djvojNyE4vG8dqHmqapBihQWajRDhHrHSQ1n4CJJywv2ewicWmaMLBtYShiXKUH7F4CffUu1zrx",
  "key24": "5xdqHHuYf5teVFX5JneVm1fCRLm6sRXVqVZHhjm2sE6PjReyqCgs1xw9cV1Z8f3Z5K8YnoMNRa2qmbjXRjW7Jkpj",
  "key25": "4w6HjGCcujnTXKjNy8avzebqrYt14GEcqrVrpdATjusCHBnQr9T8LUFRdPNKZbfGFH35ypTKC6cMaw6KPBH3yiTQ"
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
