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
    "4dp9kGsDbZMwwa7cs6aZbQomKFpkzCfinugtNKNDv4vJ3UqqHJnReh2YAQ72YY45XEzr8cnLT5dKg9pWWsm2x4C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ch29Jj79boj5nB2e9gn1r3gTMBkMkgjQrJhT7skagBFSn6neM1p5B1Pz3oqz1vMuZMYaVqq4AznMEavtFq1cmfX",
  "key1": "4XWccttgRj876gmrxZycCnp8DEJZimfaUmX25Q2x5RY4QBGKKsaW2Mr431J4cBD9EshaYMit2SLm4unjfWxJuLrd",
  "key2": "53ZL8n85Wb71HPmygSA21BYkJNH3VJkBzR6Q5jeM4EPoh5whWYLkdQYTPJKVtXtz3QB66TDv1K8baj7YYeLJv3V8",
  "key3": "4e4g57qKmBrNfV7dVY5HhVgzLZ5MjypkdLFmoeRPp7SbfjgSsyMfeBmCMCSq6xNHZW3agmavnKBw4e2mRasNgPFa",
  "key4": "5ndbV8dEx1AWaPbUtU8E4ivmcZ8r7F5UXq2VKTrBCmsbXcsEqnA5LLCdydyKdkf1QpTtB64gak6LgraKGnAoEK4r",
  "key5": "4a6QNkPBEqdt1ymrtc7xNXpTfCpZFXZaN8iZirNaavskcMEKGFyACs4afYQLigqKWDzRHZfe6g4yiMYWT7qziTrh",
  "key6": "bsoJVuVaBAZvyRTCzN4ZyDULNKke9hDExBoPpqXakS9J71VzYvvpKAjkxEjeNA9cXQk4YnVB6kuGBLoRtMGH2gW",
  "key7": "2fb3MkG7kDjaeHbwPCieXvPfWHG4SjRQf8ubdEnY4TKftXsiSvyKcxgiTVpJAkiYxJj4kumxWP1pgQ8ekeTS5nYW",
  "key8": "3WLu2hkeZZAZN4y2AKzF1MKy4GtyDoWCPH1eQFxXhPLLfEnGoACnLM4z3CHYFVhqUrkYqb1NqL9tTHszAF59EnMH",
  "key9": "2Qt1vVjR3yJXvX7fXeqdfdE3Lp3SBvbBpK5ruGqwSBVhFLur9Radag62tJ1dqRcTcTG2ubUyauTUdEg2yYwaynaQ",
  "key10": "339U2RPK1UpQ7e3DdL4Q4Vp6c72p8WFL5nyMTHD3Wxx9kJu9ym6zhUVuJL4QBKxZhkuYYBUheu7aG1o6XPb2tzFq",
  "key11": "3HGJkZsNG9GHMZJn7nWLCGABoxh78i3LktVeC5ap75vGhmVDQkc6qqk4YWZ2CNaEPX53BN6yERVsSGN7sQbHbK2u",
  "key12": "5GNkW79sme2Y7RCf7v5QXREigeWfTcanSL9KXZ7SdXM677FyqiHoL1ofnWVRRHoNTvKjoa539zSrE38z9FyyziTs",
  "key13": "2DvspGVx36hStjB24abiptNyyQXtoxRoRRP3sJz3mH6jpa8Pnx6ijTDeq99GD7rCPhTRQPSwYHadaAYm2Z315xD8",
  "key14": "3c7igmZjkRmffA6ZdSWLTcKVewUPmoWaHvnXvu51EoFX8Sbk9UiqEetF4K4NDZfNAcCxseTKcqZBT5TVr192ceu9",
  "key15": "2Z5XzpHM6wfiMfuekDWxHUsN2hnQQawbX4Vp4ivNykBuogDTFhsQknb5uhQgtLE5sKgWHaDwjjntm99FrEF1eg2k",
  "key16": "qogEXj3oUKNsGU5Gb5iCaDgtCkmjxvF4vuciD2WVkWKHA55AeUP15surHFqskdCdVfHQyjF1wFgZ77bBuuXneNX",
  "key17": "5tf5ZfuJuinCYMdm57C1FNuKv4oAnio5Jn3QrUFwArp3sbRmF7NorLy8oYmg6b6kNgLENz9ejZa2fvmA7WosxcRy",
  "key18": "2vvAzVD3fadJitBJQg9pvSTkvi5z9j2vkhrVbx9gqB54pPKEt7bc5Rx9QkC6QAHSMMoXNo97qa2zE2gywwUCka25",
  "key19": "3zNwq7ntu4Qz7nN5fRjnFMu3fAQdVJvKyCawJUovMhedpDHs26CU98WTwBVuj8skCkVM8d18TnqE1m5EFEQxtxZH",
  "key20": "rv7Xx7JeEtd4fWYdYcW43st7n8a3mMNzdEwPaQATa9NWbMicBdanzy4bKaE1yU7LL6B6RZqncwnAAeHkymcbxzZ",
  "key21": "58NAeq1UdkWA7RwDFBKBQigDxuGZZ1YEuyP4nocGF6PX16ZySbu9YaqT9LNKiudr1eN5oYTyDhYXHFTAtNnLDYza",
  "key22": "61KG59yUr1Ys9Xf3VJwuJ2b67bEkAAb1DNFyX1Rowfd5beCnVAGfWEqzkHvy7fVHJNzUXH8F1mvpSkJrhmPtViCb",
  "key23": "2hGYwguFFSXQ1hXbGiSuhG4muaihKFrDidiFVB8YhpqWBEMEMjB9VhKLw7c1VnfMtwGjH4KtzqzKwwP8FtYNWKXS",
  "key24": "3phqgyqrAWLuex8moHNFTh659c4ULA8paSz6RPk9kiqCyo23RtGnjqqaFwNPsXefdWoKxYMQBUDo769Uuo2LaKcc"
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
