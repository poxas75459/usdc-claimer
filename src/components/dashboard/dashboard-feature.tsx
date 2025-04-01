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
    "213L9qN2a2poAHjjMbenq5CHhQjinrzaGHqoMrRArYotz97xNKT8SjZRf2HMgkASHwfzmyBJhjSRneZ8PtbfnKfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcVgx2HRoWoVh3G1YGosMMi78bbHz88HYe1YtQacoMq82RaQvLnYuhWQESoD3Zem4gyZNEafiHUVEwMwpkWpBU4",
  "key1": "4wM13vXRjpZKZQchKxzRUBocXHUfbCE9dc89Hg1uBJ4AD64rZAzWoRd31y9a461yqPP6WqyCPtrAF82S8XFhpYGX",
  "key2": "4ztZS9FpWH5GLf4JTazbf3jYhnAV3VHfBnbGysgsYRgeSat7ukBf6bxiBcwJTYBKmpC8ivRVVfBYqeBJgdyKkTtW",
  "key3": "3aMJdxuH62iNDmRxRoxLLUB4PZe8tAKaKmhtym5WeyBimCMomgWqZv9yxrt5nzPgbvgM4pxvR3t51ZsJK4PTgByv",
  "key4": "4Ns2L8rKUVfbE16M32mQ3uzcMkM18khxnkjF3BwtSUQJzrCiPNfdxk6VUBgBoiSrExD7xjtZHJcndSios7asz4y3",
  "key5": "Gg5nXUq7ugozCREJh9xekk9WZ66oTNWgiQAoMrMr6BTngE4G5AU9ZokzvdsfduFmxJv1kQQqJLW1PUgV23nDciZ",
  "key6": "4dTm3g14R6LoSWx4S67UayyBUynBa4aYQ2zEhBdRyc8dEwcZswPtaYEmBq8NZpgZvzXnPvXdfpxXjPDp7vJC1D15",
  "key7": "3VZiPU6L3znAhFrMPxm5sB9t5RfoeMEe8nrB3EAC9JSRxyW5weKwtZFeBA8tGCez21Y98isXwtgueVhqdqbiYF6i",
  "key8": "64hRR4BAqMULU9z2Ui2jMKKDtHwxX5ymVQZLmCcwhKtHgQuvH2f3RvGo6ToPG4iJooFyoMc377zHvRBDacdEbXLP",
  "key9": "43RynBPa1WooEfZcnY2hgCPrgocufQbnJRG5RJyUV3iRAfLi8NqsMG3g9xaty3HnNhBJCHRM2CejPWzNqNGrm1eY",
  "key10": "45by6qD8dAbMebcmnMiAL5cjbA2wuDqRpUppH3KNQLQdtXy46cfF4bAESA8ugc6yNNhMWLaN71x4x8BufBJHZ1G9",
  "key11": "4eCaeoGyj9W3Pc9tydGcP9H2kdP3X3Hgq8a23NvP47jdY6U1j5fTpTAi7WRWDVnecGhTfVLijqaz3g5S9dMshUaC",
  "key12": "45yZ4hmBoyTPbkC8eYMLhUyKEeM5tbFL88NPVrDvs8iT5dkyt3TeWaNjvLB4pxb2RrmRakUxmjHotTPfaH6j7viY",
  "key13": "4fymaxTqzsyBhziLX1MVi2VyFuBt4ujcvjiXp5yEfW8Wv6hdtifxBELhH8hbkFjruVbvkTAB63c7FrZ3K4XdH3xC",
  "key14": "5rcvHWSFUfigvTdP9e6YkdCHBkDy18HNTukJCvP5JKFbKAQjD3gprU7JsoL9qExnBJP7EvexbJpnVPMYkb9uhgdm",
  "key15": "4d8ucfqdSxasCE4stcjcBjiCurecgPqZEAMCtcCk3556ZtKtkUymF4gd99EpH3DFhiXQfWdb7KiYZbu2Z6q5aDHC",
  "key16": "vXHEia6qbibgpmKR1V8xsSSVPbKeqqcPPu2fgaxXnZr9e7JXnWmddUPWR5JzBjiaYBxp5oBRGcMZxnjNgVDn6Ta",
  "key17": "Wp22F6xpfb5a2HuZB1RJeoPVenFs65oFu4u6r5ecre7o9wvb27wiNuVfqtP13heFm2MJN2sF4pqzRuGfsXiQLjA",
  "key18": "2uEPKBaZWJ1UKEpGGX6D1jeWnKJfEZWbKd9TLwjaieuoXjTT8jWNUhjSSNtGsbYa6bNdgZgJSQx1jrzEwQdnM8KX",
  "key19": "5sMJZMZKZsvziqFDVEqeypovkcPtoaBQNhz2idGYXgUhcTMftMjvHUVihidHDyW6rB7ZHQ9FdMcWnCd8yzHD7grM",
  "key20": "DaNm7VYyeAXT4ywzWJeCEXUdSVPaxsYPUS553EK8NjsGTLWYfivid28NPA2m5mV4zqiPqWwz87SfHG7foSC5AdC",
  "key21": "5r8xvaFVqBFUT2ihDv7M4Lt3SQLdf4h2CoCZLCuoJsYsEtKnX1i6bnBJ6BnBBH4brzRUqXkotXPyaT699gwQSdwo",
  "key22": "3mJhFzXkc5uz4PQx3QKazThwE4GYf3p8436RXd9A9FJoJTZZfzZFGkvaD9qSUXgxCDP6jK5mHygPptqxVpaZVxPq",
  "key23": "4Cmmgfutf4HHYxiC45A1mcPSz8fNGpJ3dJ4kSTAkBPZHMANA6VKXuH3o4GHiAXgRvFHUmggv7kTWD2BVXExhUWFx",
  "key24": "58JNsmaFEsEHakVRnaAA8V7FdaPecoyDmrvR77HD7xHaYCRXiafkuVAX4tcJj5fd6oKfsSmQBohj4gGYeaoWu7g2",
  "key25": "2tceMto47SVGLKsLWF5uP9mZJ6AamicJUjR2tYLEggPnduPexX8XPvXVbWfPFyycuin8XFBxRLEyphAsNyRwyjcS",
  "key26": "3vvRTjRREcfdhdZfofqyQFrnBun435BDSnx75JAqJow5w5NGi2UeCwQVEaPEvqdsAVz9H7RJRcPURBsQHmCt1PbK",
  "key27": "5yJagwpsNeUzpewXeivaFcJ1t6jHf5PD36s9uzs7qTm1S5UU4AGTNqCYBLkwLHcUj2q5GLA22vBsXMHtoYiWiZ3q",
  "key28": "3ajYwLFkTX7xQvoR3rxxAPJ3N918qtpXK1ayJJGkiurxzETUJYTkPjsrrrqGF5NAGRr3gbiPfLjYbc3cEm7xvUgH",
  "key29": "5qe8TFaa7Vvst54Bvsetz9BYjmGJg6SC7ruegLBmTDGG9jgw73WL5sLmzBTtNbS9nwk5gjMHjvNmSn1KGQTULxoR",
  "key30": "2HHyBLbxAUZQQMaerYTRBd5e6xdAS5GVV54FjWR7nRG7EaT9B1yRx2RfZsqh9zPSECmG1BJLbh9mYT4cGXAExPYn",
  "key31": "CWFJjzSSqY1BMUZkuRG2RsLqb8VtFhsXKsv3kExSBpkmGP8Uxf5SzjMCCoiMza5rpGaq4CXqV8pT4LbS3BJjxZk",
  "key32": "4u7PPuBMVvF6b22x2tY5QWPg4R1SdreeZYytxCr5QojZBjbApKNWLMMW4MR666rUYeceUriqJgeMpG9oMyXeKB1t",
  "key33": "2XL56fSYcsw18cVicviYVrF9FS3EsvU3Ae15kNP6G3re8kCjMgBNqk2kDq7j2LETe5YjCvmZjREVPENwavFhFqEg"
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
