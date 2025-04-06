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
    "4PeWRzjPcgLKryKLsL5GT2f7SUmFTwmWhE7sbMzBR1xT4EFtpLMy5UYzsSvv9HNL73ktTdRBPVuc71X3fsYa2iiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tT6KrUA2ASaXUHXBaBJHCtYvpyRaUtmW4zPJwdvtBCLUUdeYQ27ynSGS7GExj6j3ktGSXTMLB9iNZd8cwz5hBZ5",
  "key1": "4W4hvX1XYkFsPF2vWSS8GNPcPrVkfNeSTFSJ23VHKGgge8Ldk3oyo55ehY7in1RP9Ejag3TWgKPLSZpZXp73Mh1Z",
  "key2": "5QwDZ6z2ue7fkRGiEJBh8bsmtZUHG2BAUim9oRceY9UooBTYazg1TggHB9eA9LZe7L1XufCiDTB6AFmaJQydfNPz",
  "key3": "A9H8wwqPVhL82RzFPqQ4ZuJyoXHtTxG3nvZyVdLwD4veN5gHPZTkg7i3hL8r2Pvd9cJPVAGNFg6V4yjsnojtaRZ",
  "key4": "3jGqt6UTgyE3HsT9TEYoCDiVDqiXMcprkxpjJmMwLfjxp3MTe3e44T1NUvNU7CDUSJyPVSsj48R7WwqH7gvmEQ9p",
  "key5": "5rGPWppa76EptRy3XLJPteuBu6DVM23a2nKoL2TTMr8AyfcYn33LWx9aKGBygaCkN4wYMRmXMheFyvqJMqG1uRoV",
  "key6": "5JaUAzN7G3sLeSahWNZiqB1a4noxWs6a92Lkw23NnwQR7TUQMXy1wyD6EBrDnXpD1mC7U59FhV9a27wn7PYAbrC6",
  "key7": "uqg9Pu295hDncBcTZPfKtk74ricNm79hyLHRy3TMFEeSd64PAGWEaoSBj33XLefvQ6HY8GEqpvihny6nvQwcZfj",
  "key8": "5ns1fYNXLkn96kHwxafrp97928DdTEpJvsYm9ysBqqcDWHzEmGb5Q5DxJqgLVUsGY9xpe8PukXgoT5Cin47oka7C",
  "key9": "tfeMpo1xbMjeTNZktR4isyqExJbHv4YZbTaZmHKde8i4GuzQPZZnTzfWFFGZgyHPdLWTsUUyoGLTqZzBNjbwJw1",
  "key10": "e6V8qEeoCKmPKcSvZ1JXYmkqUE1yMkimUzkensptHc5R69gnk8NRgrf5j6fBBPZ7GbPRfBnZ4HEaCxPZfFykuCQ",
  "key11": "5zX4ngPaBV7WsWGJQAE1fq9KrE2bc7678SVFaGxu8Y6psLd86t8eRMnRgBh98MdxhSCGb7C1odm6CYNitRUru9sH",
  "key12": "26mVDvM8WQaE3py6BUMWSRbciZEueheHYGkgf3wX1A4B9Ht7HkgnbUKz7uguCQ6P9dgwrLbzfVM91HjPKPsYbo1W",
  "key13": "3CHa4dUnLq6EXEsNSxChYmjZYzntbwd2cS9aMp3GP8yyei4rDjzsihF9PNC4fAhjxUWhU7AUVfKtWcP6xErWNfGf",
  "key14": "5md9rQKZ1ohvo4a1xFXU27StrkZD8ShFR2tLcUurY5c3MR8Ve57pJBdAWZC5UHhNYRJ4UVYD7Xw5KptsHgvSuXV2",
  "key15": "23AzyVyVTFppJ5ui6Qr51sBuXx4XLdANsjda2W96p88YJeZsRowAYiFG6vQAMGkm4kWizmNUPCVVRmmosa3kHcpb",
  "key16": "4e7o2wxXgNSBsfaFf4rvqT9HMyqSbKbgSYTwvmJWGutNWZy23cuMyxn4gHhAtB9zYd9jeShqRSWahmRgsXiuhcK2",
  "key17": "gWGkUQDah7y7A47gNpS4urgaBejrDn3BcfFfd1LLau8C6eCds1SR4LXDAMaCgcVfd6g1patndM9Z6FEGY6qDgkL",
  "key18": "ua5yfH49idBeuyZKDjv9V33pooYLe2gFjXyG3C4bCUfAGCgrRykp4NJzd9BsJuGYR8dNMY5Rzt5prXa43kPdv8n",
  "key19": "4vfbeVvUEHVeUeqnqnFTDuBBhFArwGUCZAdcbQKUb5W9zaedE39ddRnfc3ZcegkXXQQJTZYZmLrJPigeSJMH1chG",
  "key20": "5UAiJ9Hd3an6tbADMSJwAUYPaSCV2rgECNaGuEXVktjC31AnZd6Z5aUifxYPDfmm8XqgQgCnq8Gb8ubSWXwstXDX",
  "key21": "4hgvy9cMow5guvnb7JbSSvBNAwrcDd6z8X1n5DQJsuTfQ2d4iEdV7FrzrTxJwZF4Bb6oNByErDr4m7xYnDmPrAxY",
  "key22": "4KobM7qVcaZuGtRkf17FS8wpCXC9JjbFceSUerBR1wqHSZE8DXcRQWn7ojXkKQ8CrPq4NfB81nj8KUFe5fSJEixk",
  "key23": "3e2g87KxdJoTMp4cBVCigTxPBr7cF1JmE8zWTgdJ8HFr3F9gpGotbdzWXxveCwM47SMdxNhmSVkuxj8uhQuC4YYc",
  "key24": "5f9dJf3YvmTPk51tWNaY72tHYg3CiviDd3F7GRDV6Ljkas8Gz2aDPsiz8s9B5Jd5GiWU672XJGH8yDmJ7TJqNiRZ",
  "key25": "2nAyYiWK7Yo4wTwvTguUaKGrQmdYU5vKxneGvwhaXSvhXwmhBCntqssdJap6e33Zs6P8LzyVbg4MQBTvE2TFJLrx",
  "key26": "3S1DZjn7UvfoZGMpNmugxjJAPgw6DnGEJDZxrVpkJQdwkKUsRW9e4iXeCn2e3NYSLwt2mHNWCwCHJvAQ8gmwsKaG",
  "key27": "4opyp7T1J9tiQcgpAd735FbFjStuGo3GCJczfUA1zmUL2nKYquJvkhkwVGdexFuG93SX31ESqWkEift9TNKCmqZZ",
  "key28": "4V2J8RYGijQgrXRPK7obKxRXXYGRzb8pkfixELTGRETVPYHUo5jYcp4F6XSMEURjEm5PBgxo6uc58xCmdrudaUsv",
  "key29": "5YETimjCYdXKCzDfYg4J2mGjTZkm3SbMyr8Qj2bXsFLT58KE5N9v5AKrs6g6iHRd71EAe8CaG1jLskQPkpDsD6cR",
  "key30": "52KmUkW1jhA913JPYRsewSFPb5CBk2iFUU34tquBheNE86s6ezv9b3yEP61o412H7hfqhNfePxzmZoSvYNUmFnP6",
  "key31": "54uJVteEXuHQMV8i4NQ9YRTeqnrA2NrawRxkGMZQg1dq6bh7R3VaAVgRyiGbiQzsuVdocoK3sUBsL8dWVgLoo2C2",
  "key32": "4ikEpXPzpj7NAAkQop9M2yxbdXV81EXSaEZfPL8sVxpXSsD1JcK94tntrtV3pvNuQR5GfcP2mjP1h4USNbcS9HSa",
  "key33": "3UmNhBmNnU9nMMnqNuGTsdUXojC9zgd4hTL2MYmiTaf4XjaWxLwGtzf6M9wg6zFEygdAA1uAGM32nqQb9oCbC9Sk",
  "key34": "iVseC7WCeGxQiHp21rovGdHvhU4WHo92v65RJYLzsn19EjwQV1fLBdH52GqDf8u9VuJf6x258zgvaZUbBB2sdiH",
  "key35": "5GZ7nfRpCBQTegBqNkKTXDAKbxkuX6tXtQBnWS2vBpVgdb6hG3cFEcSt2UU2MZUpPePqU1Nz9NFG34VoJ2WYWouH",
  "key36": "3tBYZUCnDdCEd6uXxQWXLSLcJ8Ge7Y7621UnnBBWwSe8p7kek6EVRRnYrV6rvkyLJf1UGD6BvRG59hdsuTNdStet",
  "key37": "5uWdYj12dM37fbkpuZVpZJPVcC4r8vPRurYZZxv7yqEnWBfxBxARmx2Dt3MJ4jmJgbi86nbw6a8Rzx1SA62B4G8i",
  "key38": "2EC3gZ2e1sTVS8tArXboeXwxs9aJKxkeu881r7piPCNm2k8QNnddT7y93R6iDBcy6sQTAgxE3GGZgyePzoofJPad",
  "key39": "2n65LrTUXKrtiHCNvHJDrr5XGtbk5iXf6hFXAk8BSQN5qjRnEdiSTw3dswWoukkh1mHTVsJXxudQLSxxW8bPXixJ",
  "key40": "2zh1bKr18hoe3aQwBMDyHyK5KXgXtjv81VSNxGF6r2aBX2WHSDxDLoefPbuvpNK6h7k8AvkLz3Q9XgEbcSHjonDt",
  "key41": "4U5EV8SoKdKB3AAsJfx9ktoQAoqpQbybKpBYwwt4tJQEj74qBHTwDYQdoF2AFdsdmgJaLi46T85WdXmbYqQQZGHz",
  "key42": "2td1oh6VnovrWa1NANza5xvWH4VdAoGjSQnWWTYfVVdkbozfHXXD5XJPYM4qkjPKKZXUP3txffVMsimmf56eCqJo",
  "key43": "2bekoaz1mUX68D8S3ULxgbv29nJhcGp4BmsMUxxh4VN5C4A8W5BVpUK7f4jXkCHGhmmyCYWRGxaduFAitAyPeKe8",
  "key44": "2WDLV5aqkC54Ka89xxLWnM9z5BiuHVLkFJ1UgAXD1DwzxGr6jCML6JYDwsejddz938qaVUea93om37CuNTfFbdgn",
  "key45": "22TAj15RenXMuCJowA7RPZqXJKKa1QWUsqQRwbQke4rd9J4Xdz3wZtpmo95DwDoXeqwRswrKvBL1mMgbTdSrtudG",
  "key46": "4zbT1bmZAeHymMbpjd3P7sN2tN61aP2J4ZyoAwPKBawj8xuamTVkUxJLY4XR9AhtDq7dmeVacoZ8GKyV7QXXFUdc",
  "key47": "DhuYjGqfEgvyJdSmgM3qZLFSfn8sE9Fn2K7YPSgAJVefkePGFm7AXepf6cSJGJY6SpdjA4tt3DDZrVEYeb6cYp9"
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
