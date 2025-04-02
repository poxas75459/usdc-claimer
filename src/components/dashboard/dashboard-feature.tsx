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
    "4wcVHQ4wyHgZhQSB5cVYkzgVZ4wA1WaARpjgiLJMN3z4KdxHeAnv12b5twzZ7T5QxtJ3N2rbUQb1WJk2bfiYMPQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ensN7h4AqF9rfGZmYX4ySZcHxx4Uox6SN3dvbZECeephYEdag1WXNQ3XQdQGLuSrychr9HXfnnHdU7oawogRjcX",
  "key1": "4x4MeAqj5M7AdWWMx2hmRwpUAGxNdwTeaJ8H8DH8FVb6ENkDVxnwpNK6KktPDH3Bv3iF1YjLEGcPmZPbsEwKiQ4u",
  "key2": "4JG3TWLZ2ye9C3Pa5M8nnzUEKtasnWFRdvxTWMJJ3viTRYhfcKeYW3gwDFNk3rk3XJMzjXSxxjYLuBpguVY9Z43c",
  "key3": "AhWCpc4yfmVwwNytXXXRnuWoo7zmTede4nLNFp31iMaJEsHwH3um4tbN1gKUPXgQ4u9nKN2Cc78wqqgE2LyMorW",
  "key4": "2Mr3kjuZox3Bchairb2V5b7ruJzX5LTkrBhGpHafrJmMFMJt1yYsQ8e4DrAXXM8XeyKThCoG6E9wot4fYKXivTHH",
  "key5": "3dnWVH6aSJjDfNdLopT8DcsoCqBusPJNPzyBj9mtfAk2cQx2DNMLLLfDHDxk4gTmBioMCsP6A8kcGPz8n9QGcN5q",
  "key6": "4RXN4tA6q1mXFbCTShDCizXZvR2HtkQSEURSAq81NV4BimHLgyEhv3WSHYa8Xp4CA1qXFwgNKxwUTmXuX8o7XwEZ",
  "key7": "5h39zBbnwKe9TjVJFwBGKGqk7mtisC3dyzkqAKXe1q3CA8ppFURWcrakNLbCQ92X3ZzJXCNVENsW9EX3asLTNo6e",
  "key8": "5crw4bH3TFu6vrhAtfadjxyEk3BWUdZJC8g7jnv2d9PTNkv7fsuHuX6GUhdV31AYkteA4BHP9q9p3hCFRwnUjJKm",
  "key9": "4kJcL3bXoCEMRVKAZogeYaKYiVKBEmS6uaWoNsB4JV9XvzrDx1a8H86Ln1efeWkoAbQRPFrZKVbqf4VPooc1gfHS",
  "key10": "2NbJ8sNkBUUTUFHHDVz291BheH2nW4XF9yQeTqmnCtHBPKkBeHUqE3AFpzkP6riWABzBvzzh13Kz8MAVeUiwYdZD",
  "key11": "2dyNFVQzam6gJHqQpYBS1qzmrmv2bxEdSyDvZjQREJLkM2De1y3fxAt6tyVUJAU3LjJA5rqesZn7tCmw3MPdsgPC",
  "key12": "2c2s6R938iE4jjbDfxQNpdSJ4pgeG6PcwkDwEvTVEyghJjKAt7nPAPZe7B3gPP13SvAoQb3qfkeqEpfvhioDFgHj",
  "key13": "33H7EHpXVEyzh7xn1zKCHEa997eQp3qE6yPqS5r9MF3M2Uk2Sk8BAHeaNhD31bjtKGSZEq3L2myCtcQJi8EAK1uZ",
  "key14": "4U8ygNZ6pgWqn5RvHW8STz6b8HVzJUVJjGrUGQL4SysJEJGxgtK5ToEYqdetHqmtLY95FkgPuv8BKcvCwUncksV5",
  "key15": "3fHYujewh9f9h3Cie9BLVhZBy6581mtpseBC6Fz535GytDtJnxrGjKj52PGRXB3ymP7U2XGDmgsKjq7psovG2fGb",
  "key16": "4Kg7phY7Ciw4GPCjuPi9TcPyV2pHNkeii8d7EffosVxgWeUNPbMm3ghQhX8otCxw8Jy4ew9X5PKJu43Wkb2GfnPe",
  "key17": "483hgwF9ooL6TfbCGijvGnR8VaQbVzaVGd1VPi3imLnHorkT4swUsn9nzuG7SmuV82iHXtRKL5wVgGc6zFwQcM3P",
  "key18": "4dhV9GH1wKMAZ8Qgn2sHTbbLZNSMMPZYHxbDosxUHGbHxpqy9j9RWEeqqkeEQKbVnmmT1XpGR2ikjJdiaYcArMEB",
  "key19": "2MwEBcPwYJFSQkVvhqWnYiaDSDQUpg43qxcsEnYEqgRdwofPDGoCjNg1hm8x4NNACXeE59ByVBWo5tfvUT6rWDwh",
  "key20": "2CtLfYHAq1jfitmC3hSbfsHm6qpQBnD1PhEDAWw6ninCnCXgxYCHNCCfHRbdpiBLoqNCDmJHvHv37voDapjPNw3n",
  "key21": "2JoMyAGjK4dtb3u8UFxj2Lw8qogujvk6NEH1mSv6vrvChZwrC6aR19BgnqdToqrwd79JmcJj6ctgmLz23Cr5p5XG",
  "key22": "5VpikeCqjoEUUMcJ6w4FRfRSYZ5G8vJL5ewLQn8ppxdUtVuPwmzPDJzK7SL9c3vYFqHdgr71pTJdUXqR61CDQxMS",
  "key23": "5wu9mWhxaw5U5wsHkYjp7jDFwzsRmoHezeFZnSTdMJYQA6mcvczr8m496VZcGXjnwipAzfjBuc2xCoXx6tgEzZ7N",
  "key24": "3TrGwtzK7RmcW275FaDgGdmvJpKTGzRyK9WzabU3ZF5iQ1GUxHeZHL9EyX22G53KZNWC7htU54Kq8RMDYYsgkiN9",
  "key25": "5gg2tJGyCUcbb9obhwSEwAXyAHKEARUCiqqaizwqRjd75k4Yjv2GfRBjrc5jbNk33fqehDHCAgQujjboQ5MB3s8E",
  "key26": "VHpTdw48LM9rwXJLJ3MsmMgSS1YgUG3wnMkkhCt7PPxMk6KfHkMwmQvXhANBMeSEPYVz1jfKy2y2ghLyUZkQLx9",
  "key27": "5QPW3dtvjyW6PZAS7Q5KyJ4YQoFg4snXgGGkHix8RLnTyatHzbQwVR8nGnVEteeZH1j16HFnsLQwBt8Hw7BTaAMN",
  "key28": "4wSHpzZV117WfxgVP8F6XTApazjZGRtpyUuXnjqoVUzR6WmhvDajjRXqSzm1zNU7HqpzwnHa5sKMAhiSKDEJqGrZ",
  "key29": "XatoUoQ8vbheQKweA7o9mp9PCWd9XQTDQs146PxwjGy3mgJvTPKhqQy4EgZ7Ct45FTS2B6nnQnhs2oB4CKrAcwA",
  "key30": "5AH1BAbL5GYUzDqyzFsUkaRq7eo2MKHrkWg8obJn692XL8u33wrAPyvwGzFNfg9xyEkFWimAHEAZiHATJRP9xSo8",
  "key31": "2BXW8j472pfuwce2sPWejEwK1P31DCao4RE8B1QckC69TMYV1r9LkKXPLvwoaLv3SQLxpp4pNBxzJfdz3DFvv2Mk",
  "key32": "3ZAo7UNn2jmvRMTqJQiYsCKmdqgPVvshGjdQA1sSG4cgT52nStufZZnbvrkuFyCEEmZf1uW62baKrrtM2HfqFJj4",
  "key33": "3Be6GrM5ZXyzES11EZeZefvtQ5gizuo2pU86ec6n3BUp6b1uPcXDy12M6BDjuUip574exscFafDkVtf5UyJdARih",
  "key34": "3wuax6k5we4yLFpqUoU532LPzDkDpEvHuYqViB3vbPzMNVU6PLk2UmbxeDuxG5L9K6JsREe2hafxH297UpLyA562",
  "key35": "UtmYc5KUMtA6eMTKwEAwL8Ft545aDQQaXAXPpJh7wHyrUCV7aUc4ajAFFvSjFgtH6VaKPxi3jj56BP9xZLuvoDb",
  "key36": "4Hn3n3fzEWPJ5buouWWPp3LLceA45yNJKLmHEn7eRm9Tu42GaSSFkoSkdbZMRPfhRQSofzAfBaYAow3x4bGCpXBA",
  "key37": "3yFYTLqAyiFdFMep4TXwY1aQwGbdd3rUq3xq4R4qV4WWkhrVCvAwV3eqJN89r3odVF5ZocmNuxtapYy4CAHSugAZ"
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
