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
    "4VE8vs2sdzJopiT27TpeyNMtukkd8kfE78hDP9VyzQE8EJRwbDCwgF9brDjpFjzg23pjG8zUooHsKqw9q4YJWaEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qHCqh3Qt1pNVwGQ19jFauQTisHyMR9tT1LnMHcyoSefPhubFYTYmRRAGf8RAAg9hXph1PXArNdMGW1DiqyDctTs",
  "key1": "3FXDquhZS24Rap2p4zPVQyYwMgbFnLYeBF3v8m1xf8sck29J3vNzCcBzhikLtbRmcyd2H3LPCQhwK6hnZWmmJinB",
  "key2": "2HESqqBEcbE7syEPSSTicpHNhCxsLT1Rs7YiFHU8TB3taxMQnsWzsHiv1HLxGvpYUkXkZVaoihj2ytf7FavGtWpz",
  "key3": "5TtzfWMUns9Y4SFReF8zXNvNjnppKhdmqR2AVYeLyfzW3D64XdnaEkYUVFZQeo1rE4PnXLbRNJYJXn572Uf5MhC3",
  "key4": "3whuDj6dUQNmMbicH2E4dHnjeyDaFHQenabTr48MqGosxmco2v31mw58xfR2LfsToM8uudwTPrYbfJFtGsfDwLYf",
  "key5": "1HS8LYBTTKD9TXGLCXfZA2aXrf9Fy6EGfLY3FCecTJqSr34jPwMT2Q5TR32T3Mrw3Qj5Ls7XJSSb1tTepBeuh82",
  "key6": "1JcqwfCm29XYnjs6a3YYrgiMwn26x4ihHPTAvTqQQ7RZou1p8uCbG9z3z3ob7ucX1L6tTZnrCAu7E8WuEHbLz3U",
  "key7": "3yWAjCUUfSZ8t4GXcmrF1mFKiPoU9V35qRmHbvQN2QoiVFTff8MoG5dvGfKeXzLG4eiKALVoAPbxaGiTsYcQke85",
  "key8": "p4PwaZSXvTUjAJ3RYRudxKoHSxLZ58TJceWw13CGm5RhWTZh22YJzKKwh5ByDfkQkyX4UofZmSoQAcnt5S1TN1d",
  "key9": "jKKuDCEBLDnunTJ9NFYVBqN1dnXiHwGcBLn9Hq2jJJJKskCX7BZpHw3z63HrLaG3WhyMB9afPgefK7wEwzfoTH3",
  "key10": "3mYocB3Jg9n2vR4rezC5J9kGPCqV6ZbdHH6ebWdva7ji2RciLG1EikVgKx54tdBAmsTkPVLnhsURYGYVj7QhJsJW",
  "key11": "29XJV65oBEQY3oNtLxasLsAGarn2xNdMb5GVsEGAeKGPqKPnX1kbx6igbdXedhB7yPLLbZBifAbRbJdaSu6aNiL6",
  "key12": "4vALodYDNtJsfHufyarmVEbPG966wFmrJUUy57msi18kG3ms4iURo3MwbGC3Gn695GDoTNoxRQtVDGGh9RnefMcC",
  "key13": "5PdJCixyL2CxZobiGTVAB1XDcYHS8yo4v1ppDWAsn3ciax9AhgPK6LP29mkJ4eWRSkVraBdZVHBtcJm86cZ7b7d9",
  "key14": "B6vt5iBwKAzXwChvJpgRuLxgavTRNqz3RZX9MwGKBrF8DTQAUqb7fRpFUJxHobqND2UStkjuiqLnBHNFQ9iMnRW",
  "key15": "3LM1pBDVVxASzBQ2NBZJoDXhTaKukPEkvpfrm7Vup98XkSLq6WE27Gsgq7BfSFTQkAmkcL3ZUKyRZYwZ9MqJnYE7",
  "key16": "2zM1HtXZcc5VgfVTn89tuZmfkCp5KBNzUhh4t3Cnz3BTQBhTsEmVsanZkMgHsEEmDbeG5j5YXacVykrDBNGbPyEG",
  "key17": "62L1rk62z7xfhvg7hpRM4cpndsQFMxCYNz1QdaQC6ZZ2tLYVyDLmR5VNx7SJWZv1DADdcSWYtRAyoRsV93dPURN8",
  "key18": "2UQWEgkVF5mN8NesK4RUpXpQio893zmBFDcaXwCZMNKz7Hy48YpqhfjrmFhNDT3dbhoTJygge3ntTBpfbvSeXy1D",
  "key19": "3DBft3oYx5DuEvjS9acTF5cZkeWVR2ZAhvNSiaQv8V1uPCgncpGXgyUJknEtYgt4AzUQcndi8jeUdRSWxYnvju99",
  "key20": "PC2S2ZX8whBVySrotguCgcGaGMzXstb5x3wJ4t9pLLE7gwSKdbjpE3Wqx8y8Kedf2UGYmzrthv6UXEBEeBTB1c3",
  "key21": "NejaC8nSpn3hcazGrM6qdk6TVbd7AyLL4F9nsMmtWGiFasAHyPN3HGCb8FDA6waPUWmjzz6P2JzkkdVroRuvyUT",
  "key22": "4Sg6BzAcN9ugzeSNnQDYhGP8RYE14p9as7H5qhbJiCMafovkWYpTG6h5ex33kh51iya2W81LoWFBjFyDmp66AwUk",
  "key23": "58gwm6mLTArMEwRXBPfHA5LoLGdQq9fWxTsjajxq1AfkYfr1Jj7CJxp4TyvtGtQRByJP7gzG8bFLdbAmNYL5JNDD",
  "key24": "3JjFCNNhohwo5AEdwfkwzfnTCTHwH7kTZ7BhbAem6Dp4xTAdxt81c2eyoJewkeEBSkKicKXN61aGwQH7HAMP8CJK",
  "key25": "5r2NGYSAi2YTPUmm4VoZmmsd3nkRyJwgGoyA5mvw3J3tn4ArsARimrqmSTsJJcpu2wmS9iVsJ9d64ez9Ky1JxFW3",
  "key26": "2qzqAZmQqLXjWJHrb8HnX7ob5SXQQYc2Qzo39rCqckHo6u4vVbi4S1T6rZMZrMvGnZxL2MnY8begbqsYUe838ZLQ",
  "key27": "4nTwcws85bFqnKwcCxcrrUgw4XcpqQWf65gJWX7XWSnFgvGJacijkGvRM9rQZkRBEwDQs8hmuETC6FWje6TuYzSL",
  "key28": "3jADn9aQhSgkbweFzn3Ln8shmp9ZN7cUYVDkKyRWx2KixUgtmWn7CX8LyeSJ27CkpxrKCj8ohsFQ1L3S82Rk8iQx",
  "key29": "3CADujqDv44r1BLgmjnF18SQj8MpVDpA7HRpkz2zFprXH1PBeZEKBcPtT7We3hfKUQndHz3v6vxoywZkL3CaeJAB",
  "key30": "2fuT8pioECjt2Qcydz22cFma8Qb4xzbNWZ1afUPfpiJjyuYj5wxRHRfQ7jYyw62J4QZcGaiGMSSXQSF4WHJomR5z",
  "key31": "dfyGsUgkQkW4b4B2jYdQvnsMVgtboSaQwHibgRtx9G6EU2C5gvP8mB4biqahBgpkyDUb2VW2dn8GVEw5B3Y1xYS"
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
