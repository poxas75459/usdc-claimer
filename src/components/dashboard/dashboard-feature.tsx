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
    "26vcDJ6GwvnTJhkg7xKuxVTvXnVDDp5RmyygD7zNzaC4WmZUKaYoLLU56w28w2txpnTWiMCFBNLdbzGKR5LCnGfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64MLTYkp5jRkmGMDT3CMxL7wdyhFn4xDPz9NvnsRRxBGxiynQNUNiVVQhkp8ZkH2R8sEt2uPA9EQCe5HrTYXQH1f",
  "key1": "3x9NNEz15oeTovKRNACgtRWze4W6gsF7NX7GwneqG7PvXPX7RWwxkU4aXkwseZaiTXjnu6bPixksBaJUrn7jjGt",
  "key2": "3ikvKMLmAaWq8PcY1FvUE7qKED7MkxFAYuiaJAfyYd4gMbsc1kBQKtiWiTkGvzs3At9ghWppZpiimbm4tFxeTuVg",
  "key3": "2utHjvs4tja8HFP2zjD96SGMZzKpAFdxjsrTX25vn79hkDSsyAfdDDxTDzhhbq97uebj6KfqbjTCVt8m4tQ7XyE3",
  "key4": "2RHNPP7oVovnp7W2cJ7fMKyxbkyk1k3dU9eEbgcLHbct5jqN6AQJpw5uXj3pRo7PqDEbiCVrjfuvE8ZZpq6aMFYL",
  "key5": "5qKoK9X6e3TP26H4sr89YH4ZvKiyDos7fCxoGRDYd5UJy5FCHZNuNdSN5LBQcQLtdpsNogLWEbvoNBQ4xGSpaV89",
  "key6": "5bSkP4oUNmu6nFvr4XHrLkmGPjswWeqiLpErLkiQCJ57rByHEToW6HMQF2QFasGuUbaPj8ynF31QbPE5Ydg27kEB",
  "key7": "42eEzDES5g6aZcUrnLGTqJnL3nTKihg8iVw5cTVogHswyNMqom7hEZt3bsNqoHqL8cEQDJogSKXYcH2asn1FJxwB",
  "key8": "MRshgXg6HiLc17hJZX74zSccfAhiSVJYcEpZGyry7efdUsCdaKHPXkgwQXe2pV3VF5Sdi1B7zm1Xi4pV1E6gfZd",
  "key9": "2YmEZNLnfDHtCJ45iR6a17RQTGcEfr6Ce8jeGqcJWqjhvyk8FpV72qP55ugQSGMSQapneFMNUJUZGgT2y3qm52Rc",
  "key10": "5JGeCf1onFwFvwQpuSpvFw2XKxPJrYpUUsyUisFEXdiFddjxuF8x5i7x7P752xa99b65g3CxnCWG3jrCfooQu3g4",
  "key11": "aXnzLuj9QHERY6LifxwJ4WY4uJG7tkaBpoXVtdGuPhhDZrHmSu8x6kx5HpdpNfp4YFE9JpXkU2roqtgPHUuhMPs",
  "key12": "5op7AP2FyTj4TCwnevutsDwNiLg2oqJ4kK6qMmNcs6VvHnBVfRphCmNyAnyhGW8eBvSyzvybhjzD444KebxUyn3g",
  "key13": "2E2z9gZdkARSwPWABgg9J3uyeXsgMegw7APeVTwdwT61yp2ww288w9Un9Ex7UE2nnJ1boActLbsWDDs8rFHLCji1",
  "key14": "5UDher6NnvHTzRiBqLdJCtKYUpnVsC5GNtMLnk7hLa4ByKRKgqrsxh7fnsuK4AXnGzmbLYeTkoiro2T1Ukk7UyTW",
  "key15": "6XTiXTZMLKCUysc12zZcXpPajcy6viCA7biMfsFTnxeRoLu9E2njyFvCVFaztirvn5CR8a21gs4KDSCNhBHDixV",
  "key16": "2KaQDQfsbyLBVfx7ACYdgUHgdEJ7dYkvGZA875MFTygEh3bQhQNiLTo5YGCdL6iSdNVo1r4A6PoSUoMN8ERwdseV",
  "key17": "3sNLUvxv7tytsnp7vKmyUhnMRHqb7LnwAFArwcXkxgzZoBW1ka1mvGnVLdtTyKYMqx6qyXwPqWTN4fx7sQjuwzrk",
  "key18": "5PQkEthmPQ7ncrPsEtTqYUkeX37ok4gAChYSgayF11BGMNmucqsPzzXUenQm6n1it6mr63YMbPbPeHMek6mJWUm5",
  "key19": "32JobiGa7m8N28bVY9wS1toscMkYftQmfnYFSgrabS7WgK6adyC3Fjtb6TfDGeiffVL3TaNuKHPLRBw2XUe2BNL7",
  "key20": "5FshkX7AfjnPPnNJPMFYCRTe9mCAaBktzMYjPDtF4DV2YZTYonyrLMKA8vGd5KxembVg48m1VB5amTSZ4EEjcgLn",
  "key21": "4vKnT1dKWGv8nE9fUQhxH7EsbwB65FaFcde9BjHx8qcSow4Rrcys69oG1qHG8qHsTMMFZpWoSJMw58GBXxumwqYi",
  "key22": "mANJDahTYtaMJbfVFE976cX3kQ4CM1PWHcVGZdSjWQL6Mqkz9SHhQ6vKLNr5tTjBjAs43HJbRt3NrH88SqmwqqA",
  "key23": "brKX8vHWQo2YZxQAdaDYL7rxcfKypSQZS7LVPYWRN8huQhvGFvTeCuRYaQTQVGSrRmAdtuc1ZBcVxj4iPeT5Fpj",
  "key24": "4mmZqobForgV4vehjmrNibT7cWFoRrD9PKKbPUQewygScvUX19YPugRCEdkyk1ufsckSWrMa6cERwyEEDqRiVx99",
  "key25": "4u9iR29DBysCKmNxhtLSkNdyNSCGjBNYMwoipVhzYqaM8SYqi3fCGNiwzFRCLapvsZCoZZdqrmZunDbQ89edz6WT",
  "key26": "2CVWQW8fZzoUiphFbeDGR9vLqUqHfzUMqrFtyiiBgJk2ZQMD6KoGHJHBMkbBHAfg8RdxhWWNc4wvhdtaYKdPtekd",
  "key27": "65J6dSosFRqVswTx4x1b8TMEtEW8BUv5hXtu1VzjmqpDTdHs6uwytTefG6pk5psc5jrHmHZ172uU4U9g2Ym1CYaa",
  "key28": "4yCQgBoEYHUcdBnvxzfNzWaAxiAkgJfBzEKaeqSsBRLEiYgRXGQqxkd7vvhyNDvYKkYU9JdAa9NZQfU6pFGUCvxn",
  "key29": "3XCmaFBsXkhugpeFcvgYZm1KVR7TLifoC9ExTT9Xf7vH9T836HBMoiffDBG55QZYkSm69JbDwWvSDSZ9P9zh1Puk",
  "key30": "7dhBDMLrVybzZVoPeMRbbEE5vZNYVP9kWSFBB5fQqa8gQVksUEadFSPrnk5hNYKnbKUWxa7KWxLjM6uHNDRQKb1",
  "key31": "5JQafCZgXq9yqPTHmAb2K3Ndyz5hNCVGY3UUJWmy8sdXZbpBqqkEA714bbAJuRx8ESC9or5XYtezoXuNtgU6Qek7",
  "key32": "4LpDDgKrTfqJrg5UQpea5nLV25HuT1KQforJAkmP7KNGCnRgBUU2hzMhHLPgpWsXZHHtdSx7ZjSqkT73yePwfSRy",
  "key33": "7Kuu5Yu6dhoM9zvgaTScP2mpoBnkFqhLABazMMLyHYg1Dd8BsbJbMREJomZ3pB5BZVZ7rx8vov47axGyZGy13WG",
  "key34": "2LKLQsJJ2JBr4uqX6FiQn5BU5admw3hnZkgJbuqDycEmc7f789FhoqGYMwpqPDKJjwuucTodGkxL9kbjDzVFDDmk",
  "key35": "53tAMM7rxtZ8S3fLyxANY7WhyKzFjvf4b8yqeXReKBCkW8Vf7gWKD2q7iajpbSofwQ5bipjoxyZCWNbQ86w9x7Wz",
  "key36": "2Bu7DV8FgSmU3mDTBLGsKK1TpasVnrA3mUgai4FdSZmsaF3BCPt5oXhcmvEsHWzffoFSoLrLqZAvE36Rh3EscNFx"
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
