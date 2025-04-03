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
    "2N7T78zE6kYr9CZWj8uUseDCXpjvWGM8YLjVWsj3RkstfnK89D2jMrv2YhAuC5boWaHjdM7NZqvZvKXWVmj48GiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25y25xhzAhBpzpsc44PoZkeSLdCqMNb7zQvgZNnJcnnSwpJyHdGMrnbsAnb3Y7EWQDWPWBAHJiN1qVZcDX5SFn9k",
  "key1": "3zpEeyokR8u8JnYjtpDmm555JkeYDWrySAkF8sUaD9V3jf84FucAtQspbrdyJnDhu1HpdMU381jbnL5uSuUWvFoc",
  "key2": "52ssWh4EFahVRpF2eqLM9StvBienLCaWo55qKuNhxL8uqzM9FjfuMKtnX1x3CgoFdLvrRJHsEt4FwUPGRF4JU2C",
  "key3": "bn86FBksbEY8vMuuGbNU3mcW828WFf49164DNjQXLz9gmusA8nZpxo12nP2YaZCzixYNuFQ2TgS4rJeW4ZCBuj4",
  "key4": "4JbBcLeUEN5vkoJ9ZqXwnW1F8KJP4LUxJqKiAdRdmtD4waDUgNt2jSEPWp7vSZesSGyXpZctV47HQk3Mybi9c1aP",
  "key5": "66rXpKhc5wHeEYKuc2BnSZYuWMMHk68u1vL2Rr127wZQg2AZqjHCjP6Tod9qtSvGdCs3GnDNdBWvXxbb8t4pvcGA",
  "key6": "4npbFrrxsjpPTmGig6NB6j2FwCK2pZLDPXZpynEMJuTzSnLoqv6kgCC61wLocHgHHacUpdR1DdHLuSXfaq2Y1E6H",
  "key7": "4Z31qQMSA3npPkYivPqfKkPRZzyGVkxmFw2pKFWnXM9E91qFq4pmgLjo1oRVbkQ9TmBuNw4i55H3RXf9VrVb7eMP",
  "key8": "2GpgYYMd2txDdjAwC6WmmsCPwc8iNKZymaFjiq3FjSQdmu6GzYDNsXiQZXiGt93cxXDTKxqmuVqj4EAnYfcvatKe",
  "key9": "3wcN5VW97VECsrAvNyaNXNTw7bxdeeqUyFHXRJBs5tVRAfPN7gyHgr83ETRd5mgSh1UNB4vXQn7soGwNFRnsnKaM",
  "key10": "tdb9aAc1My3VCbxQDaoLQmxJ37U2YCRxypeKJjKwmw2y4TAPMbekLbqxb5Gm9NnDhnSW9Xv4JBCxBPApKFTVnNb",
  "key11": "3kYKt17J9fZUYgLoGD4iN1eg97Hd5oqCDtbja5EQcvAux9Sf8AidK5fF6TbosVpoRHA8b2B3yf1RuFJuhDeCRhmv",
  "key12": "3fvB3mwoKepQVxM6RjGiobiwJQ6rL7mQv6QuXvstS6mWCXuR8tW7Su2c2sV5w4UFBYd2cdG3vQAMPfrNwfbn3YHw",
  "key13": "3VkEq6LFpP15aWmkbgY1mm1ktGM9GPS8z4zDtFtP157sVwnSeaRK8952NRP6nVsow9u85zDyh845eXFLGoahZbhe",
  "key14": "UGLHgCLgmMi9R3B8zP6vJqBXBKyTFR6piqhMZGLoHjmGEk2HHRX9GbEbmeAWeWVeH4BwaBjtxg85Rj9BWVCBAZ9",
  "key15": "5hLYWnKZ49ADD5Fs8zdZdpBbQ6Vatsmx65ZGMtQdNt1uKWgoLCFRafwkQsNND5cwjBm7yJ97Be8aCapAzUWEfjBW",
  "key16": "34RnGLKxYWB2xkUjwes1WwjTZqS8zhbwEhXFsKSaKDFqvDqH5QJ12iRuFfH6NREQVqLVkSSjPrCLY9MRvKo7L7d5",
  "key17": "4tubFXmvDBYbzXncvhfYmsiDnPegqzdiVpGW7EcyiACpmtCJa75njBh4Uq8YkiVvMCAdd9bs5ZvLZBzp7xvanh2w",
  "key18": "ajPsRj1mP5aKvTWVuX7zoJ5iFMPZ7SPhu7GQYh9XjuW3FasRBNvoH9bHrBgzUutdS2XXjp3DWCLuLZwpAjjRenh",
  "key19": "5jUydnPn6kE6hemuiYYvSQPxWXNmyrxJvmu6rgvS7VLdfndQL1FymhLKKWjeB6Zczx9ccj7NNDi8iUkFX9dtgaXQ",
  "key20": "2ugWBE6bGmZYfTV3AfGFbWX74Re8f7So7rNZ11oouyAEmg39SkCWeqNBi1Gm6K9HLtgVeH3GqSiNqBK1xdvqMSGn",
  "key21": "5PKMamzKdvPf93PAJtTEtsHnFjD6bX4Vs7vmCXjpP2h7rSSHXfG9bwQv42rztuHXk1mJPeUTqrBdoeE7oHd9KoRq",
  "key22": "3hE8hTzzGnPsj1psXsGZocf1oc7QsiVHSVfseUoJaA33xFPSuFYesf94PVpXXRseVqrXUk5Kpvv9QGWqzA1P3VUB",
  "key23": "1FF5owKSD7udbUZaN9H8zyFMePFVeVH5kZyMqxkA5Gakabf4KHVucchLZGEFbR5eooe2Us5omTq12uazTuFGFoE",
  "key24": "3Ya8yoTYMhDdxue63N8UUgqHFGc7UVJmGMDX7wQUKPziVXhVPzB6aScaWm3DP8TmBFgw6nK2ULoBHiaf1UVve4k6",
  "key25": "2kkQW3QPLbfmKzN1doFhD3EMkiXDQsW9Mi6ViDfeHDaw9RN2dACg6WkGj5KHZDq3pQXRUn4VicQhK4aV92mnH9jZ",
  "key26": "5Fv1iDbtELETTm3cQ8p6eWquhvETMPmzFDDTxA7vTqnU78khF3t7P1V4CgRHaL7nXEB7PswJD7mbrNTgD95Znfsi",
  "key27": "3GTxJ9nVfrh9hLstkMyrWz8mThCGoL7VVLHcfG1yEgEZ12PYjpJUFYv2dgzkMvzAjNk2HmYDZgk1CcbQ4WJb34iG",
  "key28": "2urhKbHyxDrHzeV4acTLa3fz8jmXQA7D6m1WqVGXqPuwE2sLsU5T6FKHfWB4YChs8wyD5JaWrwJf8r83ZoZRVJW2",
  "key29": "4rfFKUsjb3yqCpThYBDVrNLs4mKiy5S9QRDhTXMXKrSZWYxeqvK2JdAtprpPbZBzV85Fde9jc4T9N1icpJRFV49c",
  "key30": "5ECjPxrpBKTfU9ZBL5vrowzUj1yc6EzkYKbBFjPc1tPCEgNmFdYKn9VK93z53P4daFt96RPyyTG3XfKNCLrGGuHk",
  "key31": "49V2T77y15s53vJN2mF4pZdYLN7crnmHuzLLeRhdhSSeKHyqJdPK3DeHbVtZLNXbE6speuSDNz82HqiTzSVfMe1j",
  "key32": "41E7bfQGXSknPQuXcB37oWi4K9eXdV7W5nvszAQzjPohhZYcvbQ4JJcTdCgLxzmU5oJUyLTPRcrWAWMFidUzhuXi",
  "key33": "5gkTLqaTP6TbqhXuENzVAQVcEursrLDZ6PnW42zVyyM2z22fnXCYs6NpypEJbghEzrrwhcc4G68nfXcFrVN7iKR8",
  "key34": "3ZvTuuzmUpKdXxocF4zSpze7jn2UXozuKdRFJqk7135fixDrK2dHGaYbVWfoe9MXr7dAsV83MZVT86BRZyLMVWuk",
  "key35": "3FpuXMCqQ8DP16ohzgZT4ouHYkTeCeXt3ACqmjJAmcp1bM2C1Bf5Cgoc4UncFqhDaTnk1ggWGsnYmV5esWHzsjqP",
  "key36": "5JhTX7g74P93631BL5wvRSXEoZB4cGaSLY3trhAWdrF9K4LqmBJEjTgv1Yf87jNUndTRAAbZyJy7Sz38PTPyLkPV",
  "key37": "2kpEcPvmCZsF1sZoYKytHQg76cKe1nrTB4iYTuXgjZjwNbcCXrtiyc2yBqCgAFYY2kdk8MKjNs42Nu1mH2RPJRGd",
  "key38": "3R4RK9agNd4LxxK4jWKDyhN37dKjGr9ThCBkpM9gqeh8ujL9KKnEgtWL3kgopUnQDjfhKw94ocM14Z2VnmnpA7EP",
  "key39": "376LVFFyAeeDbpJpiVN4AjHLVUKBPpwa32vuEdkfqBo5ogGbKnTp7y9HVtjB8ZGngVP3WkiLitBY3mNRkeubSzKY",
  "key40": "kpTax1KntBaS1576Ec9P4AxPAYJ5VxU17HetK2hyTfu8tCsLjwf9AMTzKm4g1kyfJ6SJoLV4Uy9iRyridaKiENS",
  "key41": "nSJbLnsq21NLso61Tn9wvPj5iRiu4LrAqopzpg1Mfrm8gN22hxSv9StTeQRtFeQH25NJBQhaiv4W3nSxduCsc22"
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
