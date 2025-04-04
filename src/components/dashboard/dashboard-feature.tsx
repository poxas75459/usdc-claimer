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
    "3ZZkLSh2BYoAsMSCN5Tjcc2UxNKcLpNjuYL6qiDAG1izhAPAeRpj5vR5RKrd64wLGQwfPu1WrUHX7mYdbcBg4PeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKUWMaSPta2CipwQBx2Lx1oLj7o8JkPyhq746u2mrGg4ogJad8KuMNgEnPmTWnHzaWiScheN5fFBfrUSMA2VAE9",
  "key1": "2qvWBeLWeLEm5vt5LnFpmwkTLQYHtSDF4BQt8WVNxbiDK9ZVzhGz2rUd2aWXyjCBXZ65qSLTeLGLvJsNe2Uc9FE7",
  "key2": "X1hUBBsrvjbdazKaCzxiC7QyT3RtqZpzMHyn1pdBWSogNsnb3XNbgGtxBpkueWKfNCtku6nMK7U4j23t99SjBhs",
  "key3": "2ctif711h2cxgG5hwRGiErmpMXK5zaorT2BaeYNAt2CztwknuAEY2oySUJpMB92VtgfVeX7p2mFCWQRjY4pp8wPe",
  "key4": "5qph39Stqp3xjFgTobyRfA7hcSBSU2NAkMrcHqzePt6s3dannwaxmvZT2qVNLoD1WA2Z5jgpbEh2kGdyTcmGrPa4",
  "key5": "2h6i5aaEi5HDFi49uyPKYQSG8NXvaDD7dxr4wBHZ6ZQjnzmDLMC2X4pxxGE6mQvmb3j5rJ8t7TMHhsHXzswiPw1w",
  "key6": "4DTxtaqtyQofAiGiEMfKBEMAneESoaJvib87pG5VGnYJBR8nSA5PjPuvoq5TAWDmJgjZ6CL1Db3u9DvY31Yn7UJH",
  "key7": "3xodKj8fGBJdnigQXv19SmmSMVU7EnZs6FdVmFLkfxGSBb4WAdvnGu1qdP5PfXVgNspCp1qmAtpBYETS7RTegrFr",
  "key8": "5uY4wpPeNkfsYWNb7JBSHWvjF8m3YKsm2tmcGXmQw62kakwpoSEuuL1KCJh9SW2pvd6ZZ6f9SaSxE1SEDkQKtMey",
  "key9": "3HovaKLkFtNxrYGco13GEvP2mwHzB1bokmKt9PfBy3wGNy78n8FVx43eJR2WKJhK9H9uby6KLkqETM3qnCRu8Cmt",
  "key10": "hddecFdibaQDE6kzpf2cZbbr2KHy4BwLu2FFvQYf4HJn1e4hf61BzU7cotfF6Z3faWGA81NixCnW39kP5tvCeZT",
  "key11": "5ymd3zEdoDrQGZ1H3A5BCB7s2y6xCKEfYYB3czSbdPr78k47zxzkmV4xVhfXSg9jMqFZRLfsSXTo2mghq3tEoZUb",
  "key12": "3s1ENbAgTgvmMwh3KHFmr8DDtaALtsEz2a8WrGq6NPaP1d8C1L8t8NKvdw3R1fmusPA1QB11WSto3jdLF7tJjj9i",
  "key13": "5zSCCRm3RvnTmdSU2cwBqVZoXHHXnSdMxNZMQ93PEmXU4S9SXb8PPoTe6jbS4rZ93EiQrpxC2pdKgkho8p2GDCMK",
  "key14": "4rQdP9v9ETm6ZhfTJGZjtye3NRwWJoGPnJCvqg6n2xaVSGkX5Fi3axVbrPHnkae4Hc7MQs1xqqQBB9Bn45iU6YtR",
  "key15": "5xaydRhPgbmJDirbYxWNvgbxdNh7PYqg1bDNYS1jW9q6PZ6EBegDh9Rtv7pWV1VCydXZWMNND2M8dFVXWnLNXHfx",
  "key16": "5iZDCLdtc313x5AGxCCca8SQyfbtPiGwLKkZiVg9EAUBbiGwUL5Son6bp11oUVkxgTRTttP837Q6syBRHuFiiRdQ",
  "key17": "ZN4zQBvNKNi2kaEMzGcVJjrrMdiRLvBxKPtkS78d9SryKECv96dFbzGtcikEqpf7LS9Srv4G5KwBrGTmxVKnkk7",
  "key18": "2HMkrwYfqzjvFkxkzNJQHL6SN39Jo72ZaMAaZUP2a7oxXSW2JXUPdfjftDJZAmS3QsVmY4iQ9ePJRBdwpHecfYFz",
  "key19": "3R3zPtNPw3tKnkbX8w9sYu5ELH93CyR1ty6MjsaPFe1UVNuhF2L9LtG3gK4PSdd6HGMyqaj2QrhZw5kCMLK75uK8",
  "key20": "fPZz4EsdiszY8TRaaupyKktSPgwuYCvmxZ3g64img2GucYiEd21K94n44x9dCFqdLTjethvi6LHC6D2QDPSetX3",
  "key21": "acYGkVC8sAJutBzHsZ9JizcKfSe39bVchfLy43xxtqD6isGdRYSAuUTNfdsFvvj9i8A9ut4Rd1VKojAmSG6wZo5",
  "key22": "5RFYey6GqgF2H8oieGwHcxyNDyvAmoWbkzYSx9fiNUSEcm1EYmDYjj4FxdSzgNwy5Fcr94wn4ELXoU22euV3ffR1",
  "key23": "2Besx8UXFs8ZdSB4YM4oNM4UjbqSqJAgPGQmb3z4nvuCmbNWzkt3tQjQBKVKaL6XEbQJBpwAqTFRP1a6mVMiT1PF",
  "key24": "ARzqaHsDu8XMTy2w4TMAXyEbymnPLBNgCH5biKBjNRnWKj9u8zCaFjewBbmfNrbg2myWAww1TBnPnSt7dPnXkCw",
  "key25": "3bDygnYVjHB8CRVFjbHSvXr32Tsa4Eu3e7KJf55TUuGhU9DMkDKBMpoesUvAcyEeEywp9AFLYPAyFUEKkWGcBD1c",
  "key26": "4ecu7NN9vXyJipBbPQCrXATmrE9LZJQoPDwX6qAPqD8UxjLXavSAhyEGG3ojc6pD4JSpsM7CngqJdb7197jTupiE",
  "key27": "57qGhqftPwtn3tuvaSKJ5pwc11p45HJsQrnNDy3Y2f2RwGbS2EY2mJ7xfrwjABq95YFwCF9ng74JbayZygyRJY9Z",
  "key28": "2cMcDFWVo6oygpF7e4WRskYM4RgSVGTETE2QEqCmwDx2LY3GsP5yZb1aM82cCVWTMKJ68TfPENPcJXb1vAC78je8",
  "key29": "5ThwK8WsGGfRhP6LFyEJNh1Jixy3PC8Anz2WRjKAbiCoVnyMrs9QMKnRT7i8R9yKmYEHtDf9C1gHMfarTYqLVR3H",
  "key30": "3589JvzNuWCPhPnfHZcsm4CjPVVVe9G8Zkt6zwR5Pa9xgPvmoaBuQyREa5HNsVe7ByoSyn2BvkFRtmRA8ZANS5JU",
  "key31": "2jQESvbRzm3ToeFkGhTf6JY2h8DXBJc2UNBbuqxxzfCqHVtr1weYthRzhaA7VPUXQn4oaieaGw5ZVC3pdh4eUsyM",
  "key32": "2PPE9TjNY9L8pYXL9wdkh9PHjkV78B89cYnGsgjAhxPoCXhKx5EMR48mj8nv33yCgN6aVXY3kucxjn3qBYfEvSwx",
  "key33": "4idGZkpNDq38h8agL8ysXDFLRAuVYkXw3m2kinPVQqjQEWZfsB7U9Kfr1NCTYryoRqfn3GeHzBCEXPFEyKKTk8LM",
  "key34": "4eqE4buDddFYmNErZW1ypS3knDXkDwkcihXikMx4x3F1q1CsPaRuMSeNEPRh5FCaTKvQrbMHbzMhMMUjb2prBgYa",
  "key35": "5UXVtCUufkaNjCBV7nMcuYKa3KnycnByGyyPKzQoptZxooqnthrBHvZgjnDspC4emkaDFx7E3MvNMT3siEzU9pc1",
  "key36": "25ULNJuWRSWmY1jULcbrUP6eWLnSTN5S8M4f6ffKh6mDaEQn9ZCV8MebwiYauAbeLvK9RXLacAmtTdg8jfYYhXMF",
  "key37": "7ZCZaEbhaN3vADtawjGMeqd5CkJPxchVbseyDYi6nMBP9s7Kf7ZxHr25EEXssJiRygRS8TdmeGFta7VcwzwfT4r",
  "key38": "FnxwdfnjbBFb5goVze9oUkUQvBaF9iZPytqwecdj424huVYEULLEmfPBYHLaTUdTQv15yeAMZFgf4YJs4zozFvP",
  "key39": "5JDGMmfe1vWCPkXCNj3UypYgn65VGgPRfw5drQpHhdAAoWxARNCcLJtziDZpF15W374GQi1Lh8HyZEZ7USeFLM51",
  "key40": "2XVvq7DuTf7g2RDRnw4hSezXfrTQ4LqFzPKRTdzqXRbtBfnJfMiefy4a6Y7TFQx2ckawNWQLiYTtD6r4jbYTwqoc",
  "key41": "4xLSMtaaarRFoacskF4aF1Ty9rkheWLbDTn8fzLpAY7gTvuggqrW5eJMMhhpa5ACkUfun87c8TEXnm3m6X96qAJw",
  "key42": "4gCowqJQXgiWk2kf9m9BfdLXcnXdPJYqPjX3uv8Q41J4chqAqpYkA49P1oCuwUAnQLWhL3KkWhoCAWbTrFGp3PvU",
  "key43": "GvkXHnmU9DageHLDcLis5WaNzpvGtzNrE7BDmjHkjpvqqSSsqHyyV2yHGunpDZmvAgPyLRzs21FQ4pWntBJrxqX",
  "key44": "4RtgYa7mVAvjCuWt12erRtJcriwffHyKnkxiTiNP2NkHe65uBDmQcz3cgPkYT1doAG7wzhpfnrBuWp1Rcc1onBVZ",
  "key45": "5sE9XvBwGrxhQqyZVZeCaPU5zLx9i4qh6fFqFExXfhVB9eiGa84Gd6y4QNLqm9oS7kpDJJXCaaCkUPEs2jRA4THY"
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
