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
    "3b3uz51Y4nxK8apYaMPhVahumYCKKN6dgo5vLdjoz5KpJAHw7ej9cCgnL3CDBwCbZnrxuc6FqbsuaUrqSC2xYv5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sE1qQem9teUmdfFvp9r9WUm1fPAQcB6W8DJPDK4P5sxHXoUhWK2bsi22siGJjHKkoVd4yghGAjRx6fbgKTmgwCo",
  "key1": "3sU2fLAgE9abapsH6VdATD16bMs1anKecqoS3HvZzsFnhBGt5Z1YgmrLeRpPttUcbrELAuj3gG6af4L6u1JAW6RM",
  "key2": "3AhScuuDMknotzy7StsJzqJYmNmxn3dPds8SaUvQiTjVS9PbSQRM3uvVg9TvKG1xp7QPX7ngXLUemTy4SiF8Mtq8",
  "key3": "28qAHwjkABtbxZV1pqp2gUu8bMqD98avcCEfhUfYKxnbDTuutnT5CX9w5LQvMthRRxWGEseGsEQ2J6MgKqJLQ3LU",
  "key4": "qMD2f4SxWbi34gPFosEbkqgJ934KAodmWiZJN9jrn9hPJVtvCJK8n8jPrLz1BEWB8hZ2g2BUEPPeXFVq2XJ5Q8A",
  "key5": "2epwG9SUiNaAXVdwPL77fYJ6Ecq7bz9mphQQZfebmrFdyKaQTqXvVLzUTFZMtSiPNiQ5FTgXWFfbPHSd9Pe4CNTi",
  "key6": "45FfPpSwMJbBuWyMXtHghNdHmmqo7iFJQHdJyP2AQoPftzEzEk15pK1Mw227L6CimHSVVY7JwmF4jU5L6DPmbtzA",
  "key7": "FnWBGPZ1D4UsKYJv67hq6UuaYkjZ8MYcRxERnWKtMyADDQzKy63rLAtLmswMyq2auPPz8NjcZyJrkwNLDwtHH7C",
  "key8": "3ZyFYNKV8kdfBhArJrsTPngZDecsbMN4Tkr2GFVqzpVcqbBnMb6vHycVMgywsp8a8t2t8ZvasPh8K3HUkHnxQJWb",
  "key9": "5K4TKHKMSkEJ2qDP5cKGdAnsENo3wjQGmViVpDjCtfwQyKNofp1NxPohybFuUun8KG1Fx2zM2YvQNNEQL1uHe7h8",
  "key10": "59UgLnXj8evGABN8XgkhyHP5TfSQPWbEsfzujSfkeuXBCjXAtqH8P9nmKnndi43XMc5Wk86PQMsCShBEBmNnZr62",
  "key11": "2M6kgEhQJ7wzftbAVc4knqe3XZjMEFgA5Rmn3DkjRFoqPWXHEbjTgBLjBGcQARnzfuLHQgBDi61S8DRftN8ioxEp",
  "key12": "4owr1zwuTkFLZEsY8UgfQtYDYyRYgMeC1xkvwJsbKB5N8wY1puFVu5NgUgBz3TiMqk4j2vF6xbq4BSUvJV3f5m21",
  "key13": "4BxTVQ4FziWcXHk6Vq2PvD3WVtWoF73EPbu6VcLWm6a7mrrpqyM9ZrzGdEaGLCZiG3tSi9WwJBag8ZVK1vTqvwGM",
  "key14": "ZB3yb1EegkWrXFE55p5SAvgauvoNeACfWGfkKXE13zQXMEeess2NBHBcubFGL3HFgSgbAYeuX7ACWMETZRPU2Ri",
  "key15": "62QmKCDs31YSBHGRgYfeRMVMLUTpz5puJNMA83FUTutoFy2keLHhpgakirk8ruJ9uDYheuu8KCjNmF2fCSsi7fzn",
  "key16": "2YQV3xgW38NGRZTDNR5nHFmCAheP3iymyRi61pvKDjzVx78A65GRKv22ndh3UVRuR8prDyThkRNvvTQFCRJSMQUG",
  "key17": "55CE4fCknw2FefZ7WJyTdCKTzXP4yp8AaSYfiaHZYxNibnQUX3kwdAw9y23En55CemKz9qBMq5nWXkhqzc84ZSDc",
  "key18": "5v25Z2Rhwq5vwGSCnLLDRVFcjtjLwtYYFagHh8UBxmy6RstYJhFX2Tf5Rs4Tn25LJ7xk2rCJggRobdFjh5gDNMgV",
  "key19": "54ogpSA1vfTn87Ui8BgypEancUNyJHrCcr2zrVcza6mWYL2dqKgBHkLpqzJVnGCCJQHCtdjxiykeMng2kzZTH5Xe",
  "key20": "2cuN8sQL52opBTKHxv51carDRRwa28Cbj5Hy664W5yAatJU27MibuV3niefHNJuUwg3e6n3pGrLxTrYADp1jYE6M",
  "key21": "5rVcgA96Vf6Lbe4CNVvMk7YHVu2LAqvjqUkRHWdtK93XMJFkx1g4kFv8G7mALJJMdke2bmvp7biEWuAiA75E9UpM",
  "key22": "ke31zJrNkjFvJrods7DDAgzYWJJBLeN7S5JoDDPnV8axtC9isxunW7y9kgFmf38K4TDX4h7YwUQAsCUQWdpFkm4",
  "key23": "44xDg86m4JD7gWgffd4fA6gFaveKiZHEEEnULhpg57y26Tksn4tw924M12uiUCAztyyPgBQa2x9EBTafnqU1Q64a",
  "key24": "2ydtddVx5qpHNYMjTx1He2d4PJ9gHDRQbTQ3FtaXWqo4gGswBNLK7UhpzWe5aRyJjGsi1YFrpCNHwiNBdArojMxP",
  "key25": "64ABDqLLLo36PwGgexg8EGAWbjhY5buVpsBkMrnVbSagdNLTYDSaRSeoKfduebZ4RzuCicVvFt6uWwRC5Rnags2t",
  "key26": "N9H7QYb7NHfafB5Ejh9osnQVn1CU1cizgV1dmDEcarihgunXK5UKcBtdij56QgAVx4RCEuZXPS1KijjNtVUrmnb",
  "key27": "f3F6uxd3k5gKuXwuN6Q78sBTgpNv1fzDVBSJbRqoEWKMbMLpWDZV36oNNt7eZxQ4FKrmgD1DQniCqP74R6oxs56",
  "key28": "3rW55zRKMXyK2VUgBsdEiCYfasv1d6Vj67CDh6jk252NCeyJ4DqhexH4JonX5dG6txcEqE4g82eeaJid8k2AEdTZ",
  "key29": "2xJE1JotrfEDVdVb4ELAUfJqNr2oDxbAijJ6xDvfajqtFmwz6rfrezbYLjC5v5y427RPT77yeLfw8QN55ViwNpSR",
  "key30": "2mrygpS4FgXsgH9j9XeH2ZJB2mUU97yrxCxDPvcZ4ootFf9H1fzA2BaLJYdrMAeUxwMBjW2D86JgQnZxFowT2diT",
  "key31": "5behNEB5RnxEa9kehsQYdZKNXqpNGQr5J2gztpCWrHuuxE53TBWAg5G95o8YpEao7R5USWp9BCmWc54BzR4iji6H",
  "key32": "5oaeFpAGL9JiNgaW9iG4BHNmKgogaqS5JZinT2EzV92kBHubNGqZrRyft8nxBpM6cBiH4bC3tqmwv7jXRRdtbFCW",
  "key33": "3HTA3Np7VVHq68oGwa4CQJRrAmYc16ZfxuBoeMnsCmic9YJVz1a8nNR5PUeswaDnoQBrfDbzqX1oMpWRPNYbKERy"
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
