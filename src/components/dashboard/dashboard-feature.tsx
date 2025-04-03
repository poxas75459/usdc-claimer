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
    "2FDU8BdRb8FrbTS7dfkfmWNLgBLjHhwtSyhFurWJGwrXQmJMwHmwcZrbwKNPYYs8d27B4n3nCJavo3ehACULZ5hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FqHDCXXy6xFLpokY6kSXNmvpQuQv6M34JyGMj6sAKSfiwmP1C1hGyS9sAqJpC4bwAd5FVYoKBaX3z1csjbPNW3Y",
  "key1": "2XwwRWFUqE97RXYACAyH6mDFfPgzp5gfb55ukyXfGbDr8Rn1DMk8dpW355DRK8w5oL9VxAnTMnx7aYjPCBpXw3RP",
  "key2": "3eVhbgaaLFoXgz7QbpgChqJGaQoaqcn3JnARyYxDfZy31gd9VUScaQbCe6YeFksLfWtYuhtzk76PjhiRfmXo5XkK",
  "key3": "2odA5a7vuN3wispsPFfyu4HEtwTNpo3hS7x2eDmNbe1SgmhQKNYmjFD9mB24hBaRnrgv9Spum31YiMzq9Q5TzJbd",
  "key4": "2YVYPhhBpHNKdJQDJf7rMo4n6EysHubCYSJsbAyenXr7xp1aZCHgKsJLysH73FwfUbszLUEa6PCQKysw1H2Hqyry",
  "key5": "48CYKRTDc4QXxHoNM66KyB3vuYntcdGcuNgFHFiWzxLgd6VCR7yvDpnHYh8JmDtRNRvYjH4ntPTmRTQ32GrrB8P7",
  "key6": "2HKKAGHNZMwjJpCgyJe5tXbG5cqHMpCSvRBNWXqL8rjh6rioprPny9kHrxWoxGDYQqiNNmmL7JjNT29asSgyjMei",
  "key7": "5apyuq9ZppWMKBptS5F7TJg5zyhyqunwnefpH5a2P1oSib2woPvZMufqBKTJ9FzoTPUicyX6LgM4PYTmryrHsw8A",
  "key8": "51EdjDY8Mg2x3kmDZZbyuY9jw93yBoCYMjtwSoXpGugAxjyqFKQRpTqFktGae2jj6ZBGPQ2YAfXQYK4NwuBUR9Wx",
  "key9": "3r2WGLGcH8qEXzhphZJFTBqdagKFLRKSTwi4KmgLaeaW5KEadTqxcBhdQgvcbaPQD9deTVq2ietXoqxVXu1ZfNNk",
  "key10": "2bKMsg8D8dFUcv2Riks1N7ZwC7HsgV15nqLRwbKfUaqyvPfYEcg9s7uKW6DhjN1QT9vQYYzhFrGJPLhfvrAAZs7Z",
  "key11": "52a3x98MCmoRorNBA74x2Dj997VhD72wxe5pxCakQP3oNdCNz7h9PBYY16wRKKDVbw4wUHVBR5s4LXQ94P4AGBtj",
  "key12": "61q2qcA6o5TgrwY5GEnAj6CUy9fgaf3smYKjY2W9NZgeifedPzW3FnnN2SbLcTSnkdSfXPcAYHvJEkKZx6mRerUE",
  "key13": "2xxMBbZxktagar2B1e4yD9U1iF1dL88fS3WGPJNKKqYbTQuYdZRXhpg97vGFjEee52r3W2FxXVY1Zh8LxZPeKJPX",
  "key14": "KA9iTuZU3oM9VqxPiAUrbJUpn885JTkj2Y9uNi5PRRUeWJivYZdiPMPgWYMJhUGhwgNkqKCdE4LVmgNTCcsJspz",
  "key15": "21eegfBUBS8sYNrh6h4RtQyQ82aXnVwdhJnJsKkSwMZ7kUXMDHv1LbYRbbGsZxRGQqXxQVjT8A1itG3UtNr4pWbw",
  "key16": "5ueVbu8D2pAnrFRAzeLHuDsnam98iDrBDMqnciidY2mRbR7JvomYKGpE81QeoQL5tZrGvfGYer2aAJAAszD2khk",
  "key17": "62z2THwMDQA7htHeTw5pV6hjcjZ4FobWCPKQFAJtDo7Cn1LJCyFSe2mQED4oGGuFF5Czw4JUQMAV4NvP82a2ZRLT",
  "key18": "syQEdUStmKXmeSzhBZg3vnwpKZeFNiFnsDneaVgrb5Dpjus1q5Hwv5tJYogeMJLgyHzK9e15QWg3gC1c6LfpDAY",
  "key19": "3YAzvZhswhsBPdTYqwxQ7hMLPoURfFg6PnCuNryTC7HGSeXYS3XFjLiubhjV4rqTBDZaF2yPnob2ugtHtvNoDjuN",
  "key20": "mXVBUt7afEib7JcRc1sK6C9Eh2XC7Q3KgBZmUobtNN6NqGdUTsfPrZAza8G3D98fXgF8Cic1yjNnwR2vkPd7uyu",
  "key21": "YDQ9hxjvd4KCXSatARDZuHf7qsLehtuSfi8a4McEtBTRLgmu7wi33RpHcsMEwX92R6LFARpWGkGuGRk7WZ1b8Sk",
  "key22": "Kqyo94DxL9KZyLhFmYkPgeFWY5Q4qbGwbW9NpFRpp6cHeojcghBwomMjR9xRG1Z68vQ5HHwXQeBAwPfFMDsvC3W",
  "key23": "4wuQEUUwvnmtWijmPVwFvvn4mSa9Ao8AaFZ2z7iVnWNrAyc6D8HAVPzG21euMbxQUjePndLytzS2SDGukjr4Pu1s",
  "key24": "2zTqBNokEqjTM7vJsweNPgKgnoG6msRdzZxRR3VL14ZjjgCtGWZEgvp3176g7Vaxyzbx2aD2H1hjpxv6TbYC1b3a",
  "key25": "26bti7bwchs3aEb8BvrmoF1DR4zkSsJQC9cjm9sBgF8h2xnk14ioD3sSGcxxptiSfzbULYn3vKbc43KhPLfhCZmP",
  "key26": "5wpngQZQb3ammzLeh3mtrPaFkxbPG29r8PstqhrDykcENUaTwBu5h68wnmTSzBNBGjXf4Y1SHE81pKjiPC7ecZAw",
  "key27": "5JazXS7tWKLGMps7zaKEouZtuUUpySYwWR4iZVdGAiWDHCMMWofvopCCgwWSaSvffxzBnWNH1UAY8hWJ1JhAH9NU",
  "key28": "3S4j7VczWQKvDXh8f5Jh1P2k6X5symeoWGMroXNXtr8ppcyqDkZ5ZtoqDNvGZvXByk3bREuvPbMeha4K5vUwjGmQ",
  "key29": "4vYqXoPfioomrCFNauS3fsfP7nrdVbGiNmBvVoSMc5WbXxk3F9u3R3fwUkSmDQMroHMRKqR8y4t3QGK2obhzbpDz",
  "key30": "5w2WbaLWBrhR14zBRFgP8kwv1Gg5ZV9UTMnVvnyExo6updq4GWZyjFpnPZ8KzhqeWpjbmWqgqzeGnKUr2jER5fZP",
  "key31": "3VE31BZqesWyQptUD92Ycp91EuJtNRed31PhBLY1PsZdYaxSLem5HoAVuWj6cXxNeSX1pQ8jk5SudBer82rBgk3T",
  "key32": "UodSfgj3gq2cLZPxRg2hB9jgqAdbUVgLo63YjcmSFeXgwL4dTbVQy5cUuimgX3LEoawiTu7xDV86b7dkz15H5t3",
  "key33": "58Lrpq9kGdBwar2AR5BQNZC17Np2QApNmtZYvzashnADY6J5k4DNiHrHD2v2YkZUSmu9xAoeX9VVxb23L3LMLevT",
  "key34": "3gkPQuwT96Bk21sESmu37FFK1uWNHmewC4HSCpasL93t2bwpDudfmknRMeeWWqELEAgjLW6whjboyhEsuskgowPv",
  "key35": "2b6L1wFwfrX9wtX4DFkupyajEPTJ2YKBXK8rnCefYQGjFM9Pk8LMCn5vhABDZETuxEyfHLzHyv6NzLfTQjkoDuwY",
  "key36": "3HRE1XDSag2fXduKVVHWPqkVroHW2sdisZ7gKYttngN6jFro9hyueZNgkacsAiL9YhDkiVMvkWYtbYvZ5F1SrXhd",
  "key37": "9hGs5LcetjbHxmt3eCqj6Ad96KGeYJCfVJsPyqkBnj3kuBfjDenMSshpJdMA9PBP9cBf4GQdVk9ZazZxaLDWo9k",
  "key38": "wgoGRWEQQgfinu4BTXGwEvtPgDL8q7zZycSTS9DP5sX1b5BqDrywEUAVmptUYvucVeGq6FHssXgAntaTwC2bMrN",
  "key39": "385NQFcyhtgrXoDeTPWQacPYWdLHbFWuFynACPwJL74ei87KwHD3d8VVP3D4oDhhsvVWspR4qUPZajjmrfomY9xy",
  "key40": "34y8P3gaxr1sKuQcfe7W1G4auGCYboSrX3trnMGeoWZ6FwY6xmGxbjisPLyrqMu3EaEse8sS7CwvWBL372zeSfCp"
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
