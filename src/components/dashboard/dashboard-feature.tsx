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
    "49wvkYjK2Q5mdFbw9jYY16SpnVKWUbNVbrot7cbjdePDkuWVYsPuRicVv7qHQUyTNeeSDjQLh9PgF4L1p44TvK8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7bubC9mSR6Gh2EY63inkLJJtx66y1UD8eNQWzv7k2SVX3q7jkjku1MybWPQzDbZgqWzR3TGbukQBrZYj7XVf4b",
  "key1": "35PjvaGenXb1wHavK9qgiJ99NKKc1gShXHy9LhjgDGqnpfcroRYW878SoGps9RrgSfkFASusV9exxyrbB7wYdK4T",
  "key2": "5J1HFaFwDpTCAXQ45jwUBWyFtt1pyq7YquBgc75Av6GQrA6cxfjrf4oidwZhjNQ49tgRwYRRg3WrX6TU1ZDXx41s",
  "key3": "2BxrfiCEK2kraSbHCdi7m6g1XdvHEfoeTzWJoaFsu6JQNiSXyw7caE7HAQiR5hvFdpC1fUsP7JvUsnzDzFnkBuK2",
  "key4": "288yo9AxtGhzHbjgJnzWoeYtUCK2PkYzeZzgA8Jhny7rkjAvpfBdVA46gMZrdsGWFpMgdfe2zrM27jf7bvmFk1CQ",
  "key5": "3nxCtYstvNcwMXkVnF18jwMLM2s5FgWyuxaZZVNcRG8jDHW3r2nauf1BYwo5X2YCs1BDihyJ8e4Nn6DU3FVJ7N6V",
  "key6": "2dg4uenEKpp5Wxx2t1KjxAr1f3Ym551nZtqJs7qwTrAEtkTcE7AUT86xTyVUnGJ3WrvV8LEkN88MZkrs7QMtnL67",
  "key7": "37TRmqd5co3FawkRf22hDTpdAHTsCHxa2PcrAgi83vjYfzfFdX4YFzMCuhoS55Rkhe2YjxgdnCHWz8g6LQ1TWwRk",
  "key8": "58yTqsMWnLYgfRfkUwV1G17C9ks4noMtniTF7baxGcvnznDrUkyCeJJUWrEhaDmESgLEBBru5JgUV9LgwbzN6RyS",
  "key9": "jXqoaCsPoi5Zwt3urMKVtz344LY9EL7nxze5Yg8H2tJroKG6Z9oL4TTy2hhrZrjHap3WSHnVaix2jLhHyjxomdy",
  "key10": "2DKVQd5hyw7S1XywErXUvtwYes1pSJm9ecxeJ355YjN8rhMeAiV4pZneLLcDAD6L1oP1xFZAT5YZmA7rsN9EYLTN",
  "key11": "2Vm38pyzN4WZJmJcPbomot1x1Khu2RYkfxUAVymwZQC3VyJuvZqtAfNjK4xyDum9Vbk8X2agSs2MLenhLuoWWoiC",
  "key12": "2utspE2urEbmbSEcdrYbwDEvb79Xxfx37JUDxiodvP4nVSSs1n4WapxjwP1vKchrmxtXr6E1RLnQkL9728JdxsBj",
  "key13": "3ykterRKxr6pgYbufYdMfoGhKksohLmH2yMfSEr6bCNmXdWvXLYsK3RgHDviwA2UKoQaJUnhgxPHvM9QddsAsA3e",
  "key14": "39vjPw86oysXp16CUEm5n7NKb9nkUrGCAzFykYa4oKm7n2Puj7ihDBVSsocktFKDKfyUC46SEcvWFMDvSsv47fUN",
  "key15": "5jGsqr2KDWsV9fbvcPBxCy9f78JNUjr8FEzQWYam47uYxuk6ZS1jtnSZcnVnPgqh9hnXxUHtZ4qGdYBwvMckSjQ1",
  "key16": "5Bdu9cgxVXutYJReQEyX4Liis4haFGjrmPEQBfefDhxsFS4xhMfp16DDSVLFqoePaPGBYVxzaUauEuBvca4is7Z1",
  "key17": "2cyZyyLhzgEqpNBmmRA2dFs73GCnZuzyPxAxvQsDpCvgocVyfvFfyhMKNaoAPoydq15gQWiY46UCBnLqwAcE6hVH",
  "key18": "2DUwShiWfDzE3ESDpbEJmxUVBjc2RLJxVacdXY6Vpzd3pzDTLmZVGZAU3LjW8WyCQC3uB2Krj8aRHEs3Gv9j3LhK",
  "key19": "5tNuoJdNWBc46tozzv7GPyEJszR9Fv5iPibJeSJc49Qq9rVoHso9w5Nv9cBQGNWRBd2C935PBPXqC4RRqBXYLE9r",
  "key20": "4irt9w5VuyNmaAMvVaCPLHhKWad7DNcVX5W2zM9ZjvAgbw6GbQTyekJkSvgMiqE6DLe717nn2sqQ9D9ZrEN54v1T",
  "key21": "2gjasYrQN1yTqqhFYQoUXgFZtKukL73PsCZFYPP5adTp1TYCMfeUSaJSZEYuwdzwXRpC2WYct1MsqkPFKhhFdJoW",
  "key22": "AYjSq9KTSyqWfihhpCQrmrcZMAKJm57XDyhhZ7fiheHpxqNQYEWiUiGfyGzWv9uCo7TNsFcTZLXVTpWiFaNRHmQ",
  "key23": "YR3Sp68n9BHjiuhF6SnB5MVWFjs742jBF67EN8oSMdvHT42jJWdqTTQ8dAhp4eQK8woGnKnFTi79UfX1Eo2pPJA",
  "key24": "MEi6S2SUthiGrUZEtFEG43DRxYfoQ99zM4LxKT5JLaDdYfHqNXc1UryfMnkQRU5ziV6rZqLWKbJLp94LAFBJLkS",
  "key25": "4wJx9YLjX9uNFyjo492VUbc3mc3B8wzyxEGtYUFi8Y995sCw1xtFXyRH7zwZLUHcmJGbijwgff9gQuvG6zHay7yC",
  "key26": "65CqiJwsmsSWwZDgHpqyZq1DqLE3dzhcpdrzZ8pzgWFQQs7Lc4kDc8vrSBwJ6norGND9vzMHkL91m1VeuRoVWbYJ",
  "key27": "5vQg8aP3ULk9BcJXRg9sRg7UkZ3pDoaZ2njBZyoHfdSbL9Wn4svKNF5JmCrKshYYv8y95jaCas7Kt5mDWWV5kWLA",
  "key28": "3ZRwQE8oQ4sVkRRTADnY9hMM9ZTjsbyvxMFMrnf1np8nQwedMLSHS7ACZhejNnVzMX1dqYmPGjXxGChut5xKgBwi",
  "key29": "4DMVnfCdeLaXXKeqCDFLnS6KSoXFeLPm6tjA3zuYEVaxGrmUpb2tAtLWMVCXMZxTLuEm7ntwsJHwnZHxGBhnzHEr",
  "key30": "UW7sEv4qbkHGD3oSQqTXduf4zwXgnxUyDeKEQZuVsPg6Kxr9GUk6Dsx7zHYCH8RwK7Si93KbXBSjZzHxT4rETU8",
  "key31": "GJS8v1qmSvH3jEsRnCCyCAy6nrNRJDNotZzZdkbbzFNGJUqS9eNe7c3pRn4aDL7oZQK4SbEaUUg2GrBJMJuvAET",
  "key32": "PSHeadSTLpTN94pzbpvxmypStEV1GCAq65bbwf6778vdkqTibYssNPB9WyMZaggjCjFUPP35CV5NG69byBqShSR"
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
