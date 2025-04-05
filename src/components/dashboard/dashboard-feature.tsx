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
    "5WBCknHiWWRV3A9Jv9dFYweaBHcDpokGUyn6yKGRVzP81MTky7dpyC72h8Tys1pFg6D7TtcPqmLyttQpkVnYgSmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4h18EEmS42WH7HVyFd9evpZBFLWwuHiHGP9Gg5ieY5anoT3K1nR8MhD73WhnjSdp21wLcYufAemVjd8YPALb8i",
  "key1": "WvDeWvoVcK1T8pDJp4TMpWBZjerp55r8nMWmYke3xWEAQaUadqnLpm3LMUKXTBMfNEU4iuQxusqJV3q7SdYa9co",
  "key2": "5dTqDp3iptjZZ7M6MYrkXsaRBJc1ct3WWrevS6DNz1YJwXLw761HHr79NWaueZSyffJUFkpktesuGpeNqT5zEUYY",
  "key3": "3PyyPq4LojJAufxGiaZN51jN7hvTDYznAN3gNvuWqrJiqMJ6vMZRhUQpQ5ez6oGwJDt1T5J5mR6rkPW5Exnp15f6",
  "key4": "4uoApekv7rahSwe3gi5qemgPsd2C3kFjeiiSSNU4HVnNDWGjAPNRHgPgN88tnrF6o6bvbVdWpHzAs6TyD4JovwFM",
  "key5": "25S8zvxhG1DdXX8DDSEUMTRg4BKmBAacG8N2keFZGpZGNrSQJ7gS9K54rJShdW83FPdbaZM4guMW3T3jKX4kLUv1",
  "key6": "5b918trFeVF1y7wiHpAJMC5bdCs24Deah79usNgWTTkyFbPKiaXEcEa4VPG6KMMw3hj1QqxyPGh7KUTtfFKsKFCM",
  "key7": "2uNGTiz78kpHf9G3xV6VDSBF18mDCdCbhwhizB7W3tczAGQhyRipK3sCUqjFUYpsZLJJWN2ere7qoHUUAvFfQ26k",
  "key8": "55e3nvkE665V9w8NPXiYdikhMAv7Jpw1edMQc37hztNjMjeACV8gFyT29b4hNA6FJSsL5iXQYQaqbQ4MBaVkAvaf",
  "key9": "314RxvCYufufGYryDWpAVHRdUq6EkpABrUWJNHHKxbXaoCx9xcEbrUVqb4nuMmZNsUsD4jef42NgETkdLhMALFQz",
  "key10": "2H7yDdS2uWMw22eNiVPw1ZqPneSvK2saUKM938C2b9XRhP1qLkrPh9Lo1BoLfC5gegEdJG3vgfGCCvsZptm9MYbA",
  "key11": "2sbBDVhG3gYrVa2MtThZYMgjimkVzLC86u5uMcwoUHYJzn6EerkiRSVPnsNkFGfXCVBXR5rZRm73ASzGPBPX6YCh",
  "key12": "3GsPpsqWeMhhbF1eDNPCpGUZHKs5CxA61sL2uvHfcsMnEFyPNHsMAVK7AUZureCVgvkYCsyt6GVQ3ngYVKJSSdFq",
  "key13": "2vHoXVcw16shRbNVdrm1bGofqYdniiRrAvND9Pu4uX2QvwRJTfZsKYjkqHbj8o4YzkQSnXJEeULqPnxtGYWomWdD",
  "key14": "4G1tjX8a7aJ7W6sx3tVCw5BFywDUzWzwWN6YQLMtfhBLf2vnGPadT894hN9GmJKQQn4Thic2Lu6tTwioU3LvPfFX",
  "key15": "6ZfxEQvE61oR5bu8knbhxJf5M2zhBLSnQTK1nZuuKWN5xqYnk3Drei58Hx4LwgSBgfeDf2vZRu2yK4tH2AfTGXv",
  "key16": "3CSKSH9KtdQxbS4VmJF39vqEr1Nm3gMGuqD3Q2RPLZqTa9sT1dtvmxSAztKcPBjjKWgH5bDVdMZ5kPZEFoCxAWGD",
  "key17": "3d61XXrDY3n5wicQCk82SDYqfqjpfYgTGJ9ritkL3QVfrEQe3TZ66JHMkJox3NMYwnbpvLaNCUNm1K2vDuScAtJS",
  "key18": "5pcGs3Ha6t4aco66DZNQrvxafJD4yT8XgxwCwVyLmUFGfaJwpF5KN8WCJCYxG4kWErR1sirHsi1NjJh9JxxWhivY",
  "key19": "5UDUC3EXEo241Qqau8JgJ9Nmqg5LaTygdkremW5mhEVfPomKaiDkNkfNSFs5pmLdXiLfY6FDGGXDv7b2BoKxnMCk",
  "key20": "2z9mAarRod3SZw1kz9BUUV4t2d5fTjKE2r6sRgtjs15B4kJK69wWruhSAJi4kFXFaNL43fiT1cb1UiX7Kc5va8Fu",
  "key21": "5NQJag6c14rt7eJpxwHuNHHV3maozAfqTEuYwvEBdFtoDWRusBHEQF4qKpdHNqLJnG84MhKfqa3wLhPfvEguviVX",
  "key22": "4eUHZrP17G7mPqb4cWLbfCYbQ8RgakuEn1H4aCWHWV1jCN6so17tok2kRBwYbhnDqa2pqtDzt6KpahXMVTzrCH6Q",
  "key23": "3b5x9cd1oLphN8Hp7vtQv2m3EYS4mAisM34wABWtRfLvvusG6kEmKhKbebvpDN4de9Gh3vWfAZ9MmKWVarjvxHE4",
  "key24": "4JPhs4NMHSBZwnDWa21rcYJaj3FwkueRWXyDcSrWJHwSffHSDWeF7fYmBpGTTPkzsVpwfg2xFbkoZ9rFZQWL6zeQ",
  "key25": "3uMJ7kRDYZeN9eEhQuvf6TUJows3P2wh4cvRXNiaDVoPmsQ9sBEs8BAdTdRX8nn3bsXzHZmPtbNMuxbaGfxNCU6h",
  "key26": "3XExyAYtJ8DfsSzhAGoywkDvKAcd4VJE7XiXu7CjAuwZC3zevoSgbpskScER28451H6Km6Q7QuhSycSJ5PDjNTTu",
  "key27": "646gGPBd495wQNEYk7eHHjcwBLw1Qs8E7KvR9JqWU27e8oC1GEgMFMRJb2nStTxmHmsM4eQGM7LwWQaSvhgXkEQJ",
  "key28": "3diEs2niphp1qcnwX4Njc2wuEjkt9R2XgfXycsgaGTTgd26Yft3yKVy7S8VWBXhd9TQYX4M9DWh11uC6GEPsdWZC",
  "key29": "4QgD41jen9SRiFs1xukPke6SQ2oCZrxUBwuDCYNk14kcJ3KWck9YczSa2WZk2sWQDLwJQik91MUYpQUKxchLG3Gq",
  "key30": "2svndcn8LFFGQf64yJMPFewBTuaJmQjZBnnpU6m64ZodkAKJEQJsi33Hfmz4RYKim2oekYgTB2nF3e2HR9B3noJZ",
  "key31": "3wj43BWVinveNiNvxnxLaFruQUEbUU7eCJdGy474mjcbW6BuYqAZQ7n3aJMGNWYSMH9pSVqdqytgZZBKUZ7J22Tt",
  "key32": "5KBXnjgk7mMrA8PBatr5wmo7ohEZDdf31aeYfx1bC75LPVeGL15MvohNiKkZgXbY5ZPnFiv6EvJqWXrgA7E98TFs",
  "key33": "51puV7jo3wUnD56Gqz9yzbRGf16vntYbLoq4EU3JfGnsxcyoj2PZtgvQFMyZ9vY3tnPgQwoBunJomo3VLWgtcJ2Z",
  "key34": "4xfw17TJxKdRHUMshtAR2osMVYf7j5rKdrGVa4ryPxfxHYFdZuJrBVbzW1mrk9bVGRJHs9RfUkC8U5En16nyuofJ",
  "key35": "4tW4FXELRdAM7oze7JgYxFKRARAHfjk7tyZWe2qofoQAJHew7JN5qB7XFX2ya22zxc2RocXuKhUzDsE3mfCYF8uK",
  "key36": "4o4UJbXFdk4z6o2da2WyFQkb32qY6S5dgLdv7PSTMGiAww5hhnWaLqdKXHzzRX43hmwTLrhD6Z6WqGLgZKCrM6MQ",
  "key37": "479XFCpoBkXyhgE8nmgQr1CYAKQYccKu7XnND85u8XCt9AuQFkT9TQb4krecNyJ3xSbJxjRySGNimkyShV2hx2S8",
  "key38": "3igdYgmKyCjSnB2QnTxX2XYGNHhkavBWY2pFozHHiRTPewKT7AhG24xKVbRjSipBaaoQ86jkoaR661vsY1oDhzCS",
  "key39": "WQiMJpx8dZCxmBVjWSA9rQvRj9Q5bi1YbNNR2CPgXQt9X4PeZazdz4JKHLKAoyAybhXtTvhLaJbkjmgTgVMLSe1",
  "key40": "4f6YVCAt9YLxLgh9JmfDvoFQ2xZfMPtkRMSWbu66PNnGXw3945ddpxGQz24eYK6xtoo7RZNMnwjn94TvcM1S5Hrh",
  "key41": "4HJLz5YSXq2wDgqsJm38EFvN7PiYG955VetqpUDocW9y9pDS1pEggnEyzjCJcvEGBkdRgDyZZUxJ67wo3kLc7teh",
  "key42": "4jTqobKM9bE9ZAMUE567Wd341exFvJ3ygimFvzfcYDjCQKkVPahREhuVjAEzWqswjuR6rKEPMdckSas6Cy3BQSig",
  "key43": "2H1LCNhGvxkNBP6Ph7UQnozakePQEPnj3vaLiowUwTKQHPPTf1YAQ6mrPVCnTP7z9pMzV27qiMYJm53LE3e7mRQL",
  "key44": "2hjBHvJr68mkKBSfunNemXdqPUFUBhiutZ61o4qzjmP73znaZP7Cf56R17bmABrBPiD5ZW1WxTvvd5joEywN44b7",
  "key45": "3ULAUzpbVCHLf8KFVuAjwgXTaNHnaqRFT9Hg9qkNAGSoWkAKDfQ9UbYE87L3BJyosKS45bqwLJSa5binpv4gYmMn",
  "key46": "2u2ArPtJu6JYjrNz6ykBePiktmtoufjhaxi7w7msSyqdQu3FzvtpQV721m8JT1myz7Kh8MPBjSPNrWncqxeqHfDd",
  "key47": "2WwXvzGwzK7Vr4w836WrDqhARoUtqUHF7GW4DEvCNSF5mfdNdg6yNaDttQ14pKMytb5dyA2riySyJ4Nbv8JELeaD"
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
