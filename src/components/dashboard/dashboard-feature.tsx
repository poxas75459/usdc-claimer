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
    "4Q7vzY25TnaJX1qYHtiooLtwnVVeeUN5LfuwdQPR99EQk51GA7WU7CnN7GJiQR1s6CAfxXJHx7mMGpPuhisHJ5Cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZefNpkxYZNy7kj7rbNPy8yj3hu7cETUhg2PubPCCrgGt3e2nuzUaWdgXngDDDVX5RsDrXvXaQLaBLqR88zgFKoQ",
  "key1": "oYKdoPTCBxF8XvJgZxphhJ3vMMFZYZG5bwa4MD1CiUQFrkvZUVU9TCq4qXi18AvVJhMghgTK2cDUFXExqh4n8rx",
  "key2": "4sR7KrJ919vcGfEUxzxtCXpdD7prAEWPGXomuR4ZjhcqD6Q6Vd1SV18AWjLEUQHopMZU9TR4MaueEWqoLaRZpxd7",
  "key3": "AsWQoaJLdvfFhrpdCk6Cdie5hYoe7NqyGuyKscpnKkYFwdc9bsMakkC8e4H1PqC716Fzorinhjcd5aRdcXXxZVs",
  "key4": "5dm2UgL1naVckf9Z9i2yqPtoD3i1Noh4CtGYHxz32Tq6QxhdXtuFTCnuWbGQwAKVJp3QdpVN5GxYoggU1azrQE1K",
  "key5": "ndN5o6ZUsibBEPQqsKAij8BB1tHRyoQrHH4NFs5xUPMtkuWqtGX4gjA1iJEWtDY4Fekj2aD1aeyGjWNHPGhA5Tf",
  "key6": "5BejWPac5pAdU52MLFrLuEWNopFTUxbR62agzhuroHF3pFqgeXmbTh6HNAc4gwEuHdXgponRGKTxb2TywG2De6v8",
  "key7": "41Dx3TBASBx8ZRKKdQ66Q9bU2GBNJbLyVY58gtq5EgLiuDxB6MydSmMVJc1h432Qw1452vpjkYBSZN2iFQwM4mVq",
  "key8": "5vXseMojqrZrDvVNfsbrfDNN1HMEkUnYxD5DYYmkeaRDHBKt7Fe8pPC5hwWZQ4YiaK7dHtEvbP83kWoWFpujkuni",
  "key9": "45F1bQPTAsqw6drFTWQ78CTenev5CNPs6SvepKZ58LiMmizPBqfjSbymRn9jNDaUUYgf1AZV2VyVV9LrkCKmGbs6",
  "key10": "gxyaRXNsYy44yi9WayaKs11WbST1QHaNurPwMnj1NQ3zArktE6bGrNmcx3rxG4rEuAZoUvUe7hmdMN3hrqL64jP",
  "key11": "2CLiRMkzqmyxAFStEXx5pnQtMFLqn9rhdjYoiP9bbmXjuaH1WG7mVCkbYmFhfawDq2ocTUZNJ5umdvPBG5nbXQKf",
  "key12": "3oVpcXLC14KPjwFsEkRu1S4Thqvy4HAKTpJBjrf4oRspJ7a1zrY5wTsDucyr9Yzn7qtTeNZhpR24YJWy7puP7wtL",
  "key13": "eiaZYZu6oZEG67LUYVxLYAbfF4pdzKxiGXnNn6XavqnKd6Z1uXQrSkQvQo7dED1AVps3YUc7wpp48qJaEgdG5bx",
  "key14": "a8LqRVCJxHVYF75GZxrUzw8cvqPPz87HUjkbg9f1FtAHsN3kQHyiVtjevhBc6pxakcrn2okbYDtakKgdeCKNEEE",
  "key15": "5R8aFftxQsVHA1JahjzXhJzjfuMjtbbK5Z7cFuCCsDwYn1KgLU2qo4g868uxMa7bK4p2XjYmurp5dEzTvVbRjFBE",
  "key16": "F6ryE56S6qwcVZ1SCVXBdF1VbQhYPqFyGbn2RZpunoxWfu8RCRHAoT1EmEPA26Mx7m2a54xnw7iRLjAbQk38dH4",
  "key17": "2yVCdsFZTtzAKaiLVB9TygyFidyFqHZd2StFGBSixfB48HdaYNm95qEPtyPnDhE42qkrgwT1dA9eWyGzpj5YXcsr",
  "key18": "ZRpwr2jtKaWPya4KDWcN8gkep9rLCVer2j7UZUTHNpSFYGx6YoEC2wqHCinwAV5TybLpdrZQBmiZjrxj34hyNRS",
  "key19": "3vDg3mL1n6fK97hXbxjidYbD6Ch5Ytm6cXphBFKLBP9UCaV36G7orvnLV4PMHj65483vRLVYwZtKcmsGXo5o9312",
  "key20": "2XGx87bnKaT4ioAx9YwgekR6RRLiiZ4RYQk7ZW2HxDTVe5PZoJjBV1Ym9dbe8NKzAkzvrH7NCgki2Z8M2wPaeiNq",
  "key21": "4M6GgVvCTyMW1N6Kx5vq3242Mizb9VfSxQkiqZF7UBGJSt9S7UPCHAmn7nengwiYrMX9LDhxK9UuxraZkF8JPKW7",
  "key22": "3k3iWYuKC38d2DeYbWZTG8tACPZBBy7gWmedNsBQe5MC9cwCDEZRARunzLFBYmev9vtbJSp4j4QyXbQcqVq841kG",
  "key23": "28jdV2qmZxkAfB6UiR6Pd6Y4mLminzKKoKLir7DMwcCnyHE6HipBhCss6EEej2auDRXHjJHNPpCK7bQVt3h72AL3",
  "key24": "2fMyXXsXH6FtCu8ELppY57UJQdCnaAPewryE2KyetmAbgqHZruJwmkCWaSV7r9TJAsku5RjondWvFfZSzV8QvBwF",
  "key25": "5zbS61Zc26ufktVLGGyYyjkynRXPkBPobaMz16Jc2SyEZrgJD2mWvoMr7nskfPuaGGGjp43jqtaQb8MsqLnBJXNT",
  "key26": "25MoVoyBVXkt9HMdZDacXModTtJkm1RmknCXPJdHJb64MhKJz2eNVykXQ1Nv96ekPujd89YrDm3XqteAyK1ThACj",
  "key27": "4jxV9Ep2XNGtrUFMBPivs6CSGa3785tSGXf9znEtwMA8uKnhttugTgo1tVLob3aiFBpkwUXaPx9bb84uyKTkgzAu",
  "key28": "2o43VEBXhswQXn4XEDLJjugbMCYjw6nQ4GXNnRH7wTTgS8yokcytmiQeRpmznc47soW7Ncg5CeB45VR677c8SFFu",
  "key29": "4y7NvzFsx9QcpURMqFujLD9hqGemhF9RXDy59ydtGsRF45Cb7FRwosseot3Xb8B1LSFUdJgqoX365cqM54RMWvBx",
  "key30": "NmVuHvxHRyjcE1iKVK6ataUAZyKCYv4QSUk5FkVYfKCeJJwRR515qSvXxDhaUiS7tC2iFiCYGRaXNDgFxA2Jbx8"
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
