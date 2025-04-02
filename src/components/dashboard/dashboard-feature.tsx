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
    "4KgPiUxHFyuMns7K4mmusiesy1T2oJrd2xaT2YBCLJM8NCg2eanktHcAvKnRvi1VvE9TJJVi9XaYpWELPoVC4asX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqvLCdKTgHsZmnKsbhPNLj6LYtg7NGNoUAYpcKmwyhmn6cqnrMK9THyoDTkL9zKMg4qdWofiH4hxe3HVsb6yXnc",
  "key1": "onbKcqagJZMPBu6BkVpVTKrgMrdBx1k23MEzhq5gLEd241ue4zAGFEZG5xA69uwD5FwoQNeDxh4yqXRyTAF6dSJ",
  "key2": "5B8AJex6sUdRm2p8LhX7xnK1yAcZhJwEfaB2oCbu6Gf4sMcVQH7WSv6nLGgjuMLfZzRyh7mMurMRTHytv4erfaXN",
  "key3": "q31hbycBZxak9GHBPDoqTF1f4zCGZcMLq5LHMWrWn8HdK2TrYZv8VfnU95TmP8nkFQHLwhfzDHh1D8irCh2ZuCe",
  "key4": "4h9pu9s57fXqvKAP8yMGwwRxWfHmoLiVFhBtEEGzXuujY5qjtPCr5e3ng4UuUtN94kU8i3dou4AHv9tLHrttvZY5",
  "key5": "2ysfTEAQ9oXqCHuB48nSPvkpE5Pj3TosH2nw736CrvL8hMagP1HcjGG6rpDcHgGnZ7D8N6F3s4Z8AraqKcXy5c28",
  "key6": "2DeHn6wczKv3Db7TyQkAC8EVikRb1X7diHywoVxrPt3ekuWpWfUL3pzAEHb5jKUSoheU5VFuuvB6C9YMaG2moAqp",
  "key7": "3e7UU94JVZ6FRrX2SJV25wbHWfXGTLfkD861PDNLxiSeYZHKNHzW8jNS83QesZUgiBqcPsFBcg92D2WdoUQ658Dv",
  "key8": "aXeJDCcz5WN5xoEn4nrWafW7A85Bv5QUwjZL6T7nMw1ubqAzE5A8S1pkb4g1DcgztZLh6sZuLWcKdsJnAwTrgcF",
  "key9": "3xwRmkyzgoW3WjSaarSSLAvvd2ZJ4WsafCieqptZcFd3KKpy3nuVZB7mnuUwqacvAtKy9MjCfCZVsEkMV67iKj8J",
  "key10": "5c59WTWyALdJWA9BJuMUWSvzvqQbkVe28t62jsY6fwKRf7663vQKckAziFGdCttWQWossqAEto4weLA2mvbtpp6h",
  "key11": "2TrCbzZxPZzBXV6sMoFfkq2zzTVg5J39CnPfC2deo2ykTQENm1dXvjLbwGABEyXqMARmdehm192yYrwHTKPaMtKM",
  "key12": "4yNt42TJzAYx2AZrVkuLed9ybKTYb7vmvpA3E3xCS5JjN6ZMDHNH3McQ7LszcZDZD9HMGrkua7mBjjQopQHzAFRQ",
  "key13": "2gBwtit1s1bDXhmaKhpAbtZvXdcqcCBXMzYFzPADy242KPsgLWgogxKAk9hB1NcAMuYapA19Cy2aNnptbsCLbgp8",
  "key14": "3VJQQEaDeEBctjK6jUY2EjqA2RiiGbWjsUHS5vqWptzKxMc2MKa7cLNKXz4E7yAvtDFeosPtJZ8dBy8bHMAtNif6",
  "key15": "sDUoxtvX3anrNBMug3A1eajnd9KvoLGsxzooujRdfxnNdDaKLaREXVeizhnHQdFWjpwQKViphFdBafxKxuUnJ5K",
  "key16": "HGQo9tSe5bwVs5PA3NPzk5Hx9z1e2cLhsiwz3E6BwAhgEV5Kbis6yY5pB4xJiyusQmknniNUky6YcS9gmt6PDk1",
  "key17": "2oR8xFcxaybScNdg2YvUSE9CcJP8NSB4VwcsyJiKSxavSoXXsWQAmEQk1m6yZ7hRn6DwzmDf23vnoDVirvnnJGYT",
  "key18": "3SMj8oWF5XsBetd8aiZbapWeLhVQVM11znXt8uQDCii3b42EEvzpY7GL6HfUfz7tvFDvJmqY2NjuWF3bxXq1dA88",
  "key19": "3EVB4aysrjWeEe7cyrcRMGq5hyfyf3Re3iFBkXvRhi8Bk7Dib3h6vdyZA9tydVQ7hxXLcZQ7L8mtt31sJrRgxu5y",
  "key20": "5LTPznvS1R1PiBxDrQf1rRdreUdthnwU27RCuCudJqMTGkPrVfNdNiGyUuHJfCFWQAKnHqMPdMrCpPyqHNk6zxGe",
  "key21": "68HjURCYT7MbU9Rn6bA9o3rKoDVDLXzEfw54ZDg23rUrfUJt2Chnssbr1cu4BmJ466wGNqg3hhCDhg562Fqp1bF",
  "key22": "5jnYfv6Rsvg1CdXNUJeF1WatPWqjizEUy9UTufTvRL3DQg9bmUEwFExdo1NXtc9pi2BpkKkqd8McjAmWi2GUpwge",
  "key23": "3dtyvLGYZJ6v6fGmnqpUXnYy8pSJdhnsehHtyrZ3MqzmFAAf4NQS4RshFYBTSitJpKrDvzrBWjAJkYdcH7x7Bohr",
  "key24": "2DAkDHeaXef2LmmVT5hqXd4iHtFeJqsccMYdzDTF8hmjJ9YP4R9mTqzCQT9ki3NhDPN5BSg4BuQe5agpaLEt7tY2",
  "key25": "3TmhRsTDVzuJTAHQqvQFeNxQLdMVNhHhdwDsew1rGRsPDKpHjWXAHoGiybNW2iFz6JnDxiqvqsR5Gj6cjQNqwRbT",
  "key26": "2A25f8qXAW2pzg1aHZu6sauWQsz3Z2Q6K6B5dCzZDD63pTQgR1BnLEdRhN2jq4WdpYiES3FDmy9roKbwpbP5rsjd",
  "key27": "2vzMxShw3mVa9hWmrpnZgQ9EVXbFfbUVRYhcZ9bHbuTE7p4p3ZKoLSoEQPMWq2vQv1iiqkPrjiNcVUeqfLxorhuk",
  "key28": "5p93dUummL27efyKf6VADjLcJhQbnfMQZ1H85ewoZJAhHor1UWahdmBUH4YnLMnwBH6WQdEP1mowQMdcLvLuXkZh",
  "key29": "4tn6WtP1Yfjiy8A2V5tswjd9speNhwvpWaLay4nM96pbsj9PQUPaYTqsnaw5rBxpUCGRUejHxtY29PFKPob7jzQM",
  "key30": "4CsXMFXQCqJabPABkkRsE2N3ijfNRzTybXnimY9ZjEuU9e3PSo75E5pLm8XrVtn5fLUtKKkpUTNfaJfqngwZkekf",
  "key31": "5kJKuGzDnjK7BCqZupoQVUhymKqkrEGMqYmUzidJ2dM1hys1NcKpd7wGGG6TjXsQbTwgzH1KFrHRkK5QJ6wT5wVC",
  "key32": "2BvvMVhC2bxHQdF3MCRW9jmwSPBp6dtbpDW9V1S4qQxzdM688tMj8mzSxYEdShNixLEXkNMbK5z5tezDytdEiyXo",
  "key33": "R3ftnrSUFcFV1HWFfA3afeckyamJhJ3fDBVHpTt2FZiYkiyXxMhwn4cW9qPe3s595NLDuSrC9QfqG8sZ2PpvvWo",
  "key34": "Q3z3KWzv53anQqJGpadrsk3ZEtfbrgssdqEEWgRN38ATUstmB97HyXaKPUhTHrFbB6g6dNfpQAwyFTC5HS3HzwD",
  "key35": "4m57Mz7jGTCmmw1PRSsdytRvvW3Wx4AcwJiFZ7UFFmXGURjtY1p9puGCw7VQRLHX1nL49yu4F5rry9bVrrRkh1cj"
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
