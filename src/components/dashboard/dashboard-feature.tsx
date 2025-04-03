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
    "47wqoZCh81pvLtYnWYD7wEvgYzHckZk5J7PawgtdVKShn4uhyoUJQV6SfAK4nZkCxzMxBRAVenjETjTRhQvifRv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mZiHMri6ZLiiiQAvKtMrvhXcbVfNvgGLwAmwbDRTaJgQzDVPtxkZg4SKTmNMJrBPuMx6ZDnbByiKe2EVcCTzsMe",
  "key1": "3kuCVdBfiHgnxNgnmYkR6pFP8Mj2tsG2hCqHFqgqDLz7itgB3aP9fH8sEzaXHsg2imaSsBv4PBfKmYRMtEfSKHS4",
  "key2": "3kEkm7LMVy2gd94riPCJoTw1hwj1LoLZFB4Crgz2pYDNx6gmzxKv628VUzGgEs3mLeB4z1udjjBxpaGno9fczjMF",
  "key3": "34NzhmHWfWmfCFoP862JTSzeUrkJ4aXufrkWzkb22bbBYDBNfvFifBzzDSXhE2okpMwHuEMAKyTB2Taaf74h2ryz",
  "key4": "4i3jh2JfcW1JCEpGcvCqDWE9W13zC3VCw9VBjsfC654E9BezVLq7Dx725dhGBTDt46qsgoJYanpw6G43HNu6GgQ1",
  "key5": "2Zuq1Mmc3EDDjH6fVZ3PeNZYPvKeQGsnMy5sUNyp8CYehm6EmtDZfvX48hvP4MiWYVGvUY2kKfh7apYfXdVupMFF",
  "key6": "5vUCLMePBqCRczfjnpQWfdnUW4cbd28MFHvc8hMdEahgP5sCbA7PWrntQVT6SBurP5fmMLSM2LumesSTjJmrjbgU",
  "key7": "5JGzxmXMQz1FSNQQS2XD9jKQgNRg3j4NjEfoxcUKHK7SRMWP6jtPJ87cDZe3XUZSu7dfHUQnvm3QnZtK372bSora",
  "key8": "3gHG9fpMP86QqJs5Uy8iMnAqqr3mcDAPjU49Z9nwb4UieDgszRzVZByoTU5RT8bK2PSirhsis3PRpgxK5DnFS95k",
  "key9": "5A4g4Gc6h492i4YfKrBN1C1b5G5pwHqGUbET7KsBAnhAqhX3vG9vTcwtDHgEonLeRh6C2uEDwaowja2sKn6zXh4B",
  "key10": "4pvcqndSZzUUCWrwNGMfDsJyfnUMxenPxpQd9z8KBoG5fc5Payh7vyJER6EWLT2aBjijRHBiBHJ61HvdM34z8hgp",
  "key11": "qhzRmVPVrcbjM7u6bAuYMqbcTZeadckofvaM4pXaa2As272CduzASYDiY63wZQrTrysd54o9bnMeATnXxncrLNM",
  "key12": "21DdqJZR28ciPsQpHr6LUMtsfcRN8GN5AoNSuG9V2PYPTPbLHhwXw8rKePjvWVGfMko5EHkFfJyQdfkHNeu7enxZ",
  "key13": "2UmxJFQq8VG3XuhZPkKTcyAzDgbqwrRGV1KtEW3f6b6uEpNS4KDVa1Tog6VR1ZQxr1tvuWFQa8K6XVfXta5Bz93z",
  "key14": "2KqvNgpR9WuGx5efU5GDpJZfDtbWJXxs6EqxA4U9TbgyUJoseU6N5dnffqfWqtjfz7FRRYXkscssVCL1u7gFFajs",
  "key15": "482cVomhwkPJZxBp6chzQWQdzXSUG6YLbsr9dBvyfyhTZWKupmtoqC5S2CpJzkayP5tYEZSJaqyrHPur8EeJ7g7H",
  "key16": "4yrju2QkFDr7vArxNvdrbUHVrHEn9nmEYcxA76hox4noWYosGPvP3X9D9pHxRKuwxHBetckL9emdQCdP8JtNLfZo",
  "key17": "MRMRer2wUnzEKqhXjyDG6b73r5i1ftRVpt7RJsffidn2QiQySD4WYmcdYHv2YsrjcxRmsAgfWJc4wRuNBLYJrPK",
  "key18": "5Pr1zxANWHuYFHzYCFeanjn4m6vzCgkZ4U6r573cu4PJt9h6Q5t4tpGDXsfS3NH3Z2mzGgfg8ordSDdRuxoe48k4",
  "key19": "2GR1z5A1yDGTqZfDZZ7es2wFXL5itTcDsx94X23aM3s7vBFeB4GMeJayAt78Mnvt3RQRSH4WQSCa2M7dRdaawLpP",
  "key20": "4TmFFVaCyNqCLZmvaonmyWkQx9dE3UufjoeJoPGYSWB5zfmPWb13P4hCy3nRr3oVrtK4QHbynHoKvv9GVUbmLHsT",
  "key21": "2ttbtzrASyuMvVS5eSbjUuedALFdrfbGY696JPBy92AQAiRhAQ5SCZizS8K1HKeRB3uZSLRvQVDy52YDBZpRmNT2",
  "key22": "F1AHZGrBDBXz2ebrvNCk8VYpSX9jKty14hBqv4m56WvQ44q2sYUwdS4F8U14GBTLjGPVtbszg6zJ4tQAUC7b1aF",
  "key23": "57dtTBtuMaN8NxcZX4181rzN5EntKs1D6FYBGS4gRN99LW31oPG4tnu3Pxv8VZihWaScGLJYqw5Ti35D4xbrnNe8",
  "key24": "63hdE2vxMSHhfgV2f5srUbnbr4KVj1NczWhnZ9AcmMB1MF7t2QmAqJmCC3m1rkWsCtUjDMHjUZ5RJUgnuixdFwvt",
  "key25": "4c9XVs4nXZCpeqn17fFymrV2QcXPPjfr1ggesV2Nt768d6rEjKiw5Y89agfD1eWUdfA7BdKtb1dQSWN2xY9AwL19",
  "key26": "2aFkMpTyz6T1T3t43ZvXEXn2qMUoYePpPaSoCxS4nuPEBjFWmD4bKJryHYBG5A2sL16kPrgQjLXQCy6Zqh8HZSwb",
  "key27": "34Pzp8kgbmJjvEkEzbgQwW6McDSfsDACLc3x5k21YQniRfEYne237b9pGpGydiErRuzGyrXzKUUd3mgC4GC9yZ6a",
  "key28": "2t6ZrzTq8SCKSqn1dLveCf29GWG3qQg8zauio5cdjQrpshgbatpPHi7cmcfkkvkhcMaTg6hTpQb5PS1wp34gaeSU",
  "key29": "5Bph9zu3g29MAsxY8GeHCsw9NNvEsLNwMs3FwarpJbbDUZ8nnaetGPbXZHejqe4a3Skc64U8Fahnon4EEDNScdBz",
  "key30": "WRPxW1X5g1FYcY9C9KBoQcXonoDiVf4XjBZWxW9KA3n2TVo8kRszVBb1ppcRjEBS4jVHuRcL8XsTH5AzHhUcQFK",
  "key31": "3sQYSQEgzwF2FaANrU6i7Wjh3pjxK8AXhNAYkPAbQ22fUq4PpB7jmFVHTKQ7yPXCqs9V2SVudHBaaUGXK9Ajn8tB",
  "key32": "5ENzbivKPPVBRrixU3L1qYhyyKjgmHdZyWnN64yZwQ2HXHez6VQ31HuMiv1aFZgzGdFTXqrTYt9ZSqJtkpPndJSJ",
  "key33": "5SAEZYBBeovqVgLXjfGgf2WugH1RdewbXXMsWGecEY1YoN2VNXWXbZjdv1PqNqAR4jq8WhZENpW5Zv5LCwbrvuKK",
  "key34": "41sUM33DmgT9PLJeJAwKxRKf96uNcsuCnfbwHsXASaw2Nn8PAL1AnhUWDxW8iShGMs5u5BEasCVex26UYj92zyfK",
  "key35": "LandqbhmbPQZdbMm8ashA5o28EXo4z7Fcxf1iH2JADKbTG7nSA5RiScvRjDCMgteJPwSu7Rabag113Ux6brPHUH",
  "key36": "4N3puSCaNP9wQMqmCUL7biCASbSvJakjrKM5sG8bH7dtoEZxzytrmZq2CnUnq94djrUfPbsR2sFY34B5kwtgxKGC",
  "key37": "22rjHMfegVrr3KuYJfSz9L82QbxXG8b5hq2FBruvuwiNkJ4fP7n1BEfhuxEq4YToiDZZyWonhSostxXt5Q1d2Yij",
  "key38": "8MAQAiau3gm4p6teTtL6mVRQZcwFWcikVTJNeRCakHN2Z89vbG82PzQ72PNYX6FvAmGE8imVbHkDcysU9Vj6PFZ",
  "key39": "5Vzp7GCeB9HdHBFQW4We4wLMA6CDAPfziMQJb9RMjRuaNUckrM95Mx5x1EBLzcVYtkyqJpgrQWbRtW9gxnQdYZtj",
  "key40": "2wzFNP2QEn9SzQcCseF27jxhyyVU7kxpYvfxEnJpw385YcLm5DSiwrw4EJTpFmrT6y36kTq2BdJ57m7PEAB4Nb4f",
  "key41": "4C65d7bWSAiiyFcc2Hiy5MZpD7CEEpJEWaJsbZU82amUczhdSDnHPop8YniqyXFCBq4Y2jy41KcVbE2PfsR9LWE5",
  "key42": "5QfJVwTGa6vsZXLMWKj2wyo2pzS3gkJxDiFUC7Drn3KRAf2Arra2n985WYCHXyyCJybRHhAAeWrU2KnTSvURG7wn",
  "key43": "3aoRxtY6PqB4ieQM7Z7SmZzYS17EgprpFhdbuc54iMZx4TLVxq6L8A3bkLhFxormdgCKzSLLYmZo7asuNPcZLxcV"
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
