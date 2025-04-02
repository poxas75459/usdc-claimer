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
    "K4Ng6FcfQSz9M1UMEvNCcvRBmzgh1tE1dVsQToPfJfZdYvPY9atqSj7z4MjNZnYEPzbiF7UhJguZRWK5Uwsn6TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srkgDEnAPQgpe1Hb6TspbqBUQEEWGAbsh5H1aWwYkvfGBuHv7164H6gKVUv6UTVtfNFHNkv6AWo55fSHQxPDVo4",
  "key1": "62j8n3GNjUUbaGqNWCZ8LWaT3PGRU6D86SvwSPFfNDtw8tq9wvya3GrZjAyhepBULXBHbpSLRwizfTZeFRgMv4wF",
  "key2": "2vdMTRhh165ipAFvxYuad2mx4Zgubntmb9GoEcaxtrKWLcY4op2bwANSPZqtKShBw7uPyn4Y6gR2c3rJ95GXBXcf",
  "key3": "5bsAbb8g3NBAgVs2kUsjY1UMtoL4f57NoqfXmnKADteYgzyWkiwrLuNUhVXEFazrBYZJsCwV1MgXSN4vos7FHE4J",
  "key4": "8q9WTXeimqKSWV1DqAav3qE92rfAm1UhP2k2387WVDbuuVwUALDf4xZ7dcyVb7y9a7LHbed8z6sjcM9YY2K3uQB",
  "key5": "4nxveGzBqmvGYSr1aBzjSTpPXnSW27rXQMwCLKS2swK8L6HjBuzkYWP3Fk8s9CZiqf18feVsGgDKn3yHEMhJhziR",
  "key6": "5EpfZkv9VUk5vA4gQn5dn9nRtxh5qQYX5g2qHBbFiS7okM6WrKbi63myRJDeK6RWKxqfDyFrUaycuwaZk8Fc9BGG",
  "key7": "62nCqexF3UP7nbGVa4yZLN4KL6rd4YVSWc4P8Cfr5z5vxh7GoLxWoHFoVfCzMrCm4Z1HCBG8miEADo3FXYKqr1VB",
  "key8": "dEJ6o32whUgbJfYE4ZStt1CM3Dg7Ziw8oTt9dR3M9evzv8ANgD9J2yNUC3TJBY5xfEotQXe9bCda2zRTVLf9hRY",
  "key9": "2TtQ1EK5SqsthMmiwp9df8W85mKY73youYhC7z1XQXtPvwVBPKhuE8wqz26p9LsVF78w91LADR2F3NcPCGBqu1ZB",
  "key10": "41uYk1hbdoU8NzUXZi59cm3wT3rijKiQB1qCbTdesb8DMP8fyPvuRn3ngMRFzuY2FExR4kTJKS1Dar1r8dTSekvy",
  "key11": "3Hf5zChzug7Yiwezfa19Px6jWpRGcTcGpAjbeFibYXd6qoSgh84h26i3LGjXGDhQJUDsiaARrhmdgKgCVaH8NWg1",
  "key12": "4yqxnpRwh3oBobSiHQ9rZkAK76QwgmDkBct4hWrojpZo9jh2pG9S7ps9bcCb1mJH65KcXLYcowribREdn3PLeQAj",
  "key13": "5upks98AVo3Pd3BFDjLJAcZDonH7y9mfY4pHgptgndU8ka8a591pce89LvjWoj1QnvbkE8wv4JEsCqB5QWuXEi4",
  "key14": "2SaKknwBGCSKukSxGuATxZ4To7Yf2czB9VAoU6gVBqFkRn88by2uT1wqGYKPUtCYUjdJZ861P6x1Dg91mT4ddP63",
  "key15": "2sgsu5vX8yxVL77aMGRmpFbfdE63fqsHNxtdjqp2CeagRVKE3L7C1Qj5muA6iXb115vYfQPLCAHhx3QYtCBTNj3Y",
  "key16": "4k8GCP45gHmivYxQ3H3jd8Xtmkik7RA21Pdxsds76NZGSgxM1qBjzdQSxUfdrKniXZ6XeuYGsPK54UCwCdCGwe2h",
  "key17": "4ysBFJR7v2YoLp18KUXgZRbxzm9Zod328DSUxKq6ZzbLvpcQRAfzJfZkJwrmFoccNaNUGHkUNEQw8imyPwZ1kCbd",
  "key18": "3GdyWNjBSU4h7Rrk8s3gMAJsQuLDp8t21o9P3g2SErYEEBf8dzzaAxLfQcceGfWEtTJ2gbfKv3qgTCEvZforujQp",
  "key19": "5fFLZnh771p5mzkjehNUxTJj6jBowbcegZtnydbK15SWicGUs5ZutEBW7CXD2Bb2fUjrJTBsi3y2fDEs9gdkrVDq",
  "key20": "vtgX1Ph3Fz3W583wXrKnhAcZdAeyY8JmoKoPLXboBpgkcqrqeQ6j9TKR4LTqz6EwpETNCc2418tA7kf4o1FZmND",
  "key21": "3Hcq5Qd3Yq7rW5K3uamuK7cxLL1CYx12D3wD84m4bnbizKXbiNkMw9FoEwpnUA9tgrcipBfSNL4T4fyeM1yLRSYV",
  "key22": "2Ji2U6QcQBB8YcT7KsUMvKH4G6jYmJBsAT7cX73pj8M355Ay641fm1eRBSFAbPd4YNk5jNE8vRmNd7MCAhi4ZMPv",
  "key23": "J83RkdfkTsJfwuYQ5iQvxrZpAEs4UyRhc7s7R4SnH42UbgiBBxGK3C6NrNfLT5U8vbQGKfMW1PMd3ynBsdCPnNE",
  "key24": "3zBCD2J4p2CurCZ91jN4SGvzbo2aCM5Z1AKyxwqVEaZyfLYQp3SMqWaUYLX2ozRz6o9ijTf5ey389bSELUBa4Tva",
  "key25": "tA2oJtxVfhCGzdp1PmCvxYYBp7CXASr8pHxTQyMj7hiPW5QEBovqPdUsUGpGVvqgoES6avgUfHZ8uK7QBmcPe44",
  "key26": "2BSUeSxEdKhf5acvSP2LBxLLTig4GWBScMPRPhmmZ9BjmmHZfSwaCUnSu6n9ed1KPpUGmudz9LDB6guqirGvi71N"
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
