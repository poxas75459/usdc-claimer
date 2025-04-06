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
    "2V9XqCHE3ZKFuBrJVsRdTqJvkiCi2fxHXziWgFegyJbiUpeaLem2SQVtb4eSGRyj5B5MBZMzF2eYEq7KLwtJjfj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56dF33MfcBiBkbC15226e6eKQnHrrPe7MVYgFppWMC43aE4v2RotButc8AgaPTfgAFnfrgMLwaFMwcKPAzP99VH5",
  "key1": "38vGMrA256AscRnhD8VzbWjbS4NHBSzSgwJpsH8qg8kQ7HXxjgDmwnKtjBUx4fB8UADp9oLcMjiZyK9JUYGh4Mzy",
  "key2": "3vWRWwpQ6wWksJTuZtq54zxCbrRJtVRB6E6bWuJsuxGC96QiAoP2dQW3jHTThNDfU4kqUP2XnEchUbXvCh3wLwEc",
  "key3": "5kqdtYUBgXZQzMP8V7F6r1ER5e97oYuQxugjtaU8iMZ4FUUQMyty5xX27h8EFug82iGJDf8ijCqePp3emc1uGYUS",
  "key4": "4qKXeRRtE5Pqy6uNQ42qq1jcsV6bed6BzVNTP6f3afc9RhQNEXM2GrwaVeT38uZ77aEQdsVqx14PYYybLENXba4o",
  "key5": "2V4J3AJpWTN2y6ftNRDQcrVSfotsPjkUhYmoow72Gpd1NfCbF2gwetqmN4hPXCBBNwAYxQ9HDN93aio6VTHVZuMd",
  "key6": "2yqoAhPEkzGpTD2dXkMv29Tn47H3YNNSpQ4LNhZqZxPFPti5ZpgN5t2riabt5H1NEvzC215cMuXT8YMtaW9rZWS2",
  "key7": "4busK4AcWR7Kwuznxhy54BVy4AHnWaxaARDaajr2Kv37fZaNhHAkn6ze6sDVH13QZFFukrQRrsdN8hzUU825T3o",
  "key8": "2qNvpBWFanUe5i42whRnFXDxcEQLkvEoAr9i4aMJu8auDZR3P8RS9c6bCwNquPxeL1khP99H5s7n6zQDYEHrLqLG",
  "key9": "3uqYy6sz36wYKirXEyrnaorqD3xuTcwsrzteNR1q9cDMQxmSpdfuaRYRwrEEqmH3RkZFJP33wjP5TMpZ4EUYDM3T",
  "key10": "a7qWS9bhYP7RNiTJYgy5x6EYi56Y245UMxtGYGUEftAebwCYLMrp6MyN1HrypdLevr29YvLY8LrwKSW5LiT7erM",
  "key11": "5qMnJjrHuJoKAf4ioVSVuGSoKwcnFzEZwa4xM52G9qSvNueKcqgiEuJoSay7EiyU6zipLnjWgCrDjG4PQzenj8x3",
  "key12": "5JMezFfHvH3koB7tf4PvjRuEURTDFspwH9539LJvWV3yfsRzijUZ98nHSrVUFBnL5MbMb4gEwhRg8H33NxbJLh5A",
  "key13": "63jEuAopDPdsoWWJpMhc3SMUBBW1i3zvoahE7DcjW1igQoLgerqeTX1Chh2cZa42hdVD7kfHq2EbWmFwMokVARsw",
  "key14": "5LTDD6iU7WGLdo7Me8aUbcCntRMktQnkG5gZ7xYn7yKsoYRurjxnzNrzZEEWtg3WEXrLSpuuAzzyV5pY2RgcxJSs",
  "key15": "2yJ2rfy7toscNoTVST615EAGf3Btb4wtSnS99rpZmfg9b2XnJh2neK7EneZ2SMg1Xx9M9DzssUovaSMReVRxfAH3",
  "key16": "2ejbZbA9sa1fXzzMdK9TvHS1TVZH4pS2Bhdb5P9SS1YGbKTRYwLDL2S2aMnFsdX8Uw2Js8SV5sZnAypn57PoD5mJ",
  "key17": "5fQXhGMkPkU9S7nGvrod3HSRHZqQyuotHCzMcVgPhty8ACx2Yda3gP3nHqTG8AzjCLBugLjG4Bz79znqnsmBoTZB",
  "key18": "3nbdYCWV8ynRk2xWdn7AAA17HB3pqHr1911cCnWkzcgUDhNbAnkUWGbK3SuF3rFuTJNojxvyqah25rPqed8GC8QY",
  "key19": "63oSTEZywiTEDZmM71qrhMJw4gLpb2QHCnCpa5wyAu1uEkAmPS6THqSSZSmUvYKQQRqRoAtEjRMtWgQ2Eh7fGv71",
  "key20": "2z5CKdt1Md8xbYbWk6MX1rvaGftQzA7tc3ZtfHsiuXd6zhNiFQ3uuHhJb6ktKY39xDxYAqH72qmv1J7H4XEY8ERD",
  "key21": "49jQYUvSWCzxQ2rNh1jc8H2zmXV6y4yYmzT5JYpRnVxVnqPCcD1gJkvqCBqG6AeCE2LDpB3CG2DjJ6Sui2mw7Kt7",
  "key22": "2on3RxQCpe5NGuR8qpeg4Sp7x9FMhKabLAcQF6oTNnw2jyt7z3MqRp9m9RLUS3RKPP8QkQauJh51C4hfnrnjnDtP",
  "key23": "2C1hHg8Cn4MB7vULg4A81E2FgMaRTJDS7V68wUBjYa4bU2uijsbQdfsCiDM18LcKi8BJHSHYM4nYqeFNCUyPVCDP",
  "key24": "2zXK7oQocq3qfFMcWup3Gb2LyuMKiTwzGzkzV7YtBEQj8rmSPUXtBLMDvscx9kee5nZRiiE9YghGV8WoM7imA1he",
  "key25": "4QiCQGRNNGuELM5JiaecQpb9VG7r3ztApdSQgUMfAFi2pNkZ832qn9RFwP6EQsB3mukHQDhwdgS4ek7z7wi9XLSM",
  "key26": "2iYv8MPcDV9UYVUR8KxaR6AkYfF2jD92RgyDZEgSwknBsVnzEvMFfKdKb4Be6eLW7xtH2iL454QbVZVEvfwwbtDn",
  "key27": "2ztsUQqBKMqypSGR3JmvZxKAwzzcec97r1XoC3WwYJfpbqqAFa19LfZc7dV1etNeqouFoiyJnaJaCV5JRXnLmB9Y",
  "key28": "4GnwJq9YsksmgK8TGPyCyuPbKxmJRX7bN97sY6RZrPERXWt1ZasqXWMz2xCwmsSEnoSr5BDzMjHeJXBme7zB7h7Y",
  "key29": "3m62f8nrcwMscbdtUQNA8Fy5anrggGRyuxbzqRQJdhXY5zHrvPH1M1uFBqfQ4PvdoLvPhAgsr3uKanP9b2EeYmsd",
  "key30": "5oS8fcWmi7DSFDkU8f9iCnNc85qUUXTMN3nzRZxtUWHD2TNzMvALdEwJ7vttkfd3exrmYhGJwP5vm6sNGzdVugR7",
  "key31": "2HV3Pt1JnjzLRvrwvy8RURkzUv2hXbVUDzaihtRfK68XMS7pn6EtHiHU7XHeCp8EqNJ2mXNYeUEyxNHkyedGqJyH"
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
