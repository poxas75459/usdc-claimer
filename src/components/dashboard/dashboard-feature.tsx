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
    "2FvGLDuK1pCgwU1vwdvQW33sobZ5x8TXYEh52v8YccxS4TD4CeLWqWAPQYBMS6fzromXytTo6TzsUWcHGN4n64Fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHp3dVZQffqPJbD84ZQc6m8UtbqUaUdJRy13WhsVXzTixuQDNWmcKcfxPay7iWsFZZsL8HmJU2uvvzEyUWbBDFu",
  "key1": "2wg16VU3J3n63fYHW1sUXyMWcfHvfhpC3648Ja9uZ9rfZAzJxQaHA9WR3sk16kpWHF8A8TJ3TrPiu5XYMLZjEeRY",
  "key2": "51hHETXBCXkKG7FDjZ2Y3cL4Po25FNevnQVQribG5bvCLfcDrzDnAuDU2q5o8GQKoWXp1uLEGiYx9MDZq2aCHHQg",
  "key3": "4qzBqNzUJM5Kk88cP4JsMiRvW22xx6F93LQc54AcvFXZLirSJ8LDRRd5wMixQzhRhB3iCNzjRaJgZFr2t9NdviNK",
  "key4": "2wf68EC8GrF5ATZDRbxVYJbqPC4PesMw5b2uhEQAHhtX2BwHWSaL54C5hbrT458CW2DXx2v3uqspgWhvtgUYznZB",
  "key5": "2N15h2ssSy4QKqh47skJpxN9ReTuMXVS6YHLp3i2asX5uf7EfZKyWutqHTfcNUEwgjeugTD6SLaa5TAXhWshYq9Q",
  "key6": "64iCoB9tCpW6Sq23MytZREiiqrb6GP8cHEtaQFPBGrpdNAnbE12R65KaqupkU4QAmrMbPsyFotT9ZMW9U6cFfs7w",
  "key7": "4uRbXvtyyC2X8Qpp1uGqgryzi9G8xFJJMBk8B1nnHfQZAPMpKUy3YjxnwhxWu98bn9WQ8FjAzPefWNheY4mkPTPB",
  "key8": "3ULy8vmHfjTzW2GLhYJBsrCh9n8HVy77tqBLXtMPV8TCAhWMHTjeMbRKJxseYboa4jD6h7vXCTxvMDBbTL6YvCix",
  "key9": "3Uj8fDqGKveLK7hQ1N5g4KtfnWKNuMNF9gwVpHiX3Hp88yrkVKWwmBgk6ZZWJcfccboBt2hwcppmteae5Ly3T85j",
  "key10": "3895d5CLpmLZQNVgn2m8in3CCznq7XPX22RnnDcEZsvAtrywWnNTsUbXQHUJeTFfsGAc3CD3rzumujtRRKYABPmg",
  "key11": "cCpcRGgBjY1hn9pa5jYQ9fGEsgFEzQVkGq6ivmro7nsXhs7i2ncrWVvMipwmHBPeeDvedC5wmCF8r7qEpNjogAy",
  "key12": "238RNgy9mcnXFEhZZbEtsM2Q7t1dwT4FJAV5n39HPvRmaPpQZJeHg4NkRGvfVJfcUrsmvTdB4YKWnZwGW6NBvJ6t",
  "key13": "29pfyEVFrn94zggRD2wJ7pfuSS8QE51raSptzyqbi8G4ULTSq1zbmUAyfsTggMXpwHVhD1kMYJtYjdZzLvbwvLKa",
  "key14": "61Qgoaxxd4fPrmCHQ5DJAgbUmwzW471GgFsyEspFj6WKjN3yzMyBxyU5eycPyMLQtUhQy89Hfj9P21Dbvjf3BTNL",
  "key15": "2LNV5yXH8FvpX6cavhAXGsYW6Ce1TCp99zpiP3cJHBSgRJr8rHE6SK7KoPL5xeGDptXjTPGbWVTSMYXBUbXDEGwF",
  "key16": "U8FHoVB4E2Tk3tPXUp5CRSFLGEFr34mwrzEKYYSxFbRF6tgovrfPEQshR7JSG9gzegVbw4NFYaK9atFB1y8NyKf",
  "key17": "5n9qT2Sd5ZrFyAR1EhdRkQhQFNvRPpEXmWFXCaVRgjgmgq5CdZ7GA1VjwCpd3qdvgwXE9msFKyNNdPrc4s2w6yeW",
  "key18": "2NwLTGKg5c2SPkyj1YwDs2PpUYBKDFx27NufNjK4TS4Jvf2E68QevqZyL2XakejP6Uekw84YKYWCnwAayoEESF3E",
  "key19": "WXaDPf55sxi5kHFUdVCbyw28zZFEff2xR51S4o66qMk834E9VY4o7nC97r7L3GDZQNk52LiGT9mqmG7VJqyawd4",
  "key20": "FpVVTnQqF2dUjCzwExC2NvCKnLvkD6Mr5kCPBDt2G8iuBrS6JVjysJQrFbPo4WBda2SkDQSnycSpQpN1Y3Wh3Xc",
  "key21": "VzinGH47Nod7DKpLQuT3kJcztd6cB6Ao66n9p3ip2RZor4h5uozaNkuWmY9bRBY1jJ6uXCVUsQhkCrWVXyJXtr2",
  "key22": "Pm3cw7c6dtWHdsYcADhKezeQgeKzQWPupxX7XpDNEM8J9DDMJySzKReQqJ9Hv87PeNLq8v2ngSipWZpd9R3oTtA",
  "key23": "KMAjBuomX89DRn1jGLxkbtfU3ctYSaqg2sjcbG915afroaKVDY1eVyVG4XqHGL5v1gdZuWCd44MVLNB4TP9jQL1",
  "key24": "4WZYMwbhjgA4U7ayRb7bab1MzSY11uREz7dZtGfALwxEPMstckLU4EKHt68qPZxS626JoYm5RbZdBomTT3K3NMA",
  "key25": "4BxQUUfRkNEwpQwuvEAu621z4LqP6n8MUTeTenHeQwzyj7f7bhworCcQYSHk1RcgRxV1cCXyfGMQcd4CBgQ9A2Sn",
  "key26": "2uUGAv6XekPu7iaxJ59LeKK9nwHF8nYWrHH94A49pc23kHQNm9Wx2BK2VqDhLYZTRprFNw84jFxKpU6ndDU5nzbG"
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
