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
    "2iUmY97ywghC8HtN5rJXCf8EYxdPVHagASWRN48Y9PUEDDT979Nt77sXeVoSUytp6UoBZGwZHzfEBcLPSvVVgLd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBtF5uKaNi2TDnJjdudvVKfnekijvU2hxm3zK2gydTcEZ4ErDBBq6zuBFeXUK2YU8bdFUyx3uTsa61ZuyL4p2WH",
  "key1": "Ek5am8m8ubG2yUPFzGuAbAqX59mW3Dk1WVSiH5m65xySYKbMDgR5KM2C33e6aNSPYp2iD8Z7m7Rbskjvcm7y8oz",
  "key2": "2SZbbMCWosL1F8LJSACfH8pEtUw2nAN6tFyy4gdzFNsugQQnQhWMzdgokHmRnL6cAZcrVGXyF3J53y5qLLCVL184",
  "key3": "3KGKGGSLquPcaxXHTTjTkGXbHGX76jVHX1MTvs5PWdcCa7Vtm6M5tm3kfWJNSe2Wi5J1KZv37Jz5GSoNr5oDr5gs",
  "key4": "YXJPHnAEvPGSzxb9aF3D7CF5MVc9ApuaPM8LBNe6AxFz74QNF3qsr4M7Xsiawyk5iWX7zX3kDT8hCaGMgfm5Ar3",
  "key5": "5YxTsLaFKUiDieZi9Ys5pDEHZWTbdAQ3KmxB3U49bdZ7bkJV3Tdr3m27h2QtzbGx6tCXvLCRjG5jhE9jWbXFXX9G",
  "key6": "E6vLJhVtUtC3BjNrjDN6v77ALzpxx6cC1BWfR41qvE9MuQvmLmxqkLrXcZFYVWciegekVETeFySfdSYMXio8EmY",
  "key7": "4eucDqJYcnQozDteYTNH8TxUEyFDspbfacSDWpkALkkwmzZ9f8fQPio9SS7GCz1bVX7XX6HWkiBRyySvNJx5S2ua",
  "key8": "45uVsMnyjFBzsq1FjmM4h6qNBsoj6QtUEjSWvEJFVqm9FNACsesA8PZCyJ3odL21VM6PpTFGounxZaabxgcYwo1K",
  "key9": "4xfazV6DnYovdrfjUGwMdUKYwXULbavog3LYupWXANDKjKaYerrGaGqjGPs8wdEw4sGj7RgeybrXm6SRKmuuDkeH",
  "key10": "2uZPdQ6RJmZkm3vFa9gTrTLuwcnvtF6iB1boRUmVmFrHR2p4eaLLh3qi34UMYiGVaCQFHMF7Ms8YKtrdraitCHvh",
  "key11": "bb3QtcnSo2nTtYuTEVWtfPX5WF4jTJaPXVtp19DzZ8RwJEyj8S9TDXZKNy1WLjmwMoENgyBGkUAhYgSdsmSdoiZ",
  "key12": "2PzrN9H3hx8CVkK71cS7Na5q68YPRd6mCmAFmUQQNdFQQxEXszacg5pKBkdfMi6LQ3M4t2PqprJbKLbLr35R24Px",
  "key13": "2UQFDfnZUdEeNcdqWqYssY67yBBCXjUJV8SmVcTEfQpPzPi8JwmSwtPDtStct9RF9NxaLghjA12fV5LWJjyLfxXK",
  "key14": "2z197RVRrjGWKUw6hffjNWu8tZZ7SXFKkFpSRcgaa3HcjhAPjq64HQfTnkf9R9Y7KzBmyjX3VuY1agk1R4t1HgK2",
  "key15": "a64NjWjgbmjh979eS6GhUGnEXzYQ5uKnn4yT52YCzyHcC9EQ6nsNFxsDnwWzTBBcsF2ffe4Xa4hkjv335ZDRCdQ",
  "key16": "4h2Zb9y4QHo2AjE137EsG8CT1SJ1v98WBinutcPpcH1KrGmnsXukKJFNn8ZC57rmQ1DT4hgy9uUPwUmYZPA6peJD",
  "key17": "34YwJZrZWDh62j5rb8yvDxT5hJKQbG8sZgUdt1fBh77nf6x4eRtvfnUgxt2TvQumg9ne8Souf5qJLzJDUufVTt3J",
  "key18": "WfWucGF2YNUdgFTqMndimXLv5hSBAsbSKCpxb4EqnWy8ohJYUkHRAZD7QKcoxshWZgxhaoGg7BqVHFW7iXDpDmV",
  "key19": "3irPhKDuMFM2NzuBfjJ2z3h53wS9tfW84e82FFf9NFsSJ5fxVA8wjxwL6FungLBC8NoAG6Y41TredY2HBdJy58tb",
  "key20": "218igcA11qMtamCpZZmZ29YKsKudRPsRQCUPLnmu598WrQweYCrus2y8KpofBgKV4SFpiLHwZKT3KFUHufY8JKkd",
  "key21": "h5P1QmXABmWi17uCVekPwxo9ktJi9kw9AGVuPL3vHUkdR9mFfckEgEi9rQd7SF3w78JzEKaqDqoBrjY4VysyEtZ",
  "key22": "36sSX66p6ZCpCZMmMs1fA7zxSMB5XwG1rv4NKgPoZLCV97RZ5eG2bmLq2hD3WSVjtFBiTMVPZmSg3VyJioWAoftJ",
  "key23": "5wGKV5rNYBUtrf13xsvYqrBbqrH7jmZggGHsThCpHkCBd4efJFZo6bWemLQR6F68wPTeBbagAeRhb8QED3y2ysmH",
  "key24": "4Boquq6MfZjJXcXGK7LmevGMzi49d3aFzMDQciLf3zsB8uwbjxyqLimhTeZUvGazQnJYwygMj9rR3uviRmbqb9X7"
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
