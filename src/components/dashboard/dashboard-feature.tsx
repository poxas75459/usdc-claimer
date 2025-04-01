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
    "5H6M8RDimtMG1nywjtoSrzTqpngwkHnNW1V9mBWww1eZBf12x2kH3WoYLdjJRwNSDhNwUFVBk9KoYPvpHPMps6PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kM3Dbr72rN2yFHR6QUGDp57um6dJZ7C94JLut9QoTdMLfpEmoqqijnGPCSKbTie6mt74FkcWjaESuz2BEassxTw",
  "key1": "iASv2eDAunVoy6XUcMK8EsfJiRtXDjJqcvHRGLQDHi7TDjoX8FbkYF1ksUcQSaG6Z7qiAidimKusKWxtBGTwkLr",
  "key2": "xX5gb4ZtwPoXdcbjFrHkVZhhSY9JTz7Z3j5BeyH3oHy4t2VB5u4KQJnTKhW6eTy3cXUb6Et3zZDxmAf1MK5Dd7k",
  "key3": "3VDAgCwgbZp7Y6PbPx7C2Kii9LuserfLhiuu5EYZEtAg14eSCg9T3fysSkQQUrUmn3Nf1Cy2wAv3Eh2g6wi241P4",
  "key4": "2vWvu95zARxJBVRhR6piT9hVGGxtVhzZguSna3HYBf57Hsm6q1TGnaK8rD7x3rDp43BEfYzF8wDhmtisafnxFaro",
  "key5": "369NP6TNML3y6BRbpAf7G6MW4NAZRgNd4x6owhUXVQLD1pFRqmz8kGHnya6gFmcPo2F8X1bUGyrfSrpYaXhiSbt8",
  "key6": "317RPzkgLnnCN4uBtqZ5piyygm8xvFVZRKAsMEqwMHPviSgyUZosUJrisM68ERnU6TRQuCBr7qP8rozmMsvRsg5f",
  "key7": "2gravoZjrGwUTkQ8ccJoC5SGFiqRxGA5yUMoUkaSKw6J7UQSv4o3ErPLLa8tKjEL51knV2UcFF5iV2q4kGrF9zsX",
  "key8": "22BFNwMkGuVGAybMfjpobGhdVVXzMFAe3gbtrgVJQmNF5vviT4j1xbftVzTHMXMmY3TsgLzy2EnMiKq6hoVpZh93",
  "key9": "49GPw9aS5SbHw5NsuWBwcMJboHcgw7tYHVwBUNK2u3zkaCmfTFhqJfqFqn9L7tM2oUZeLHQ5ZHoUwZ3tHuUw3TD9",
  "key10": "5K4pK2RyweeQUxNdv2dLAsZyfdJVXKyfjgsSG398kEwmAjcV4Xa6WC1xEmrYttYW1bBz3AtTBs5nuG7QNdsUQbfr",
  "key11": "21Kfaeuybu28VhY5mzvXLCNzA5gHrdGkQcJZHjG7EdQNcxMvBnajWDWehYbvev7tFa1sNpyDXRfbGarcDiLNgZr3",
  "key12": "4AhkLJJbWyYFY9kGJ4Bef4nsn3cZiabeyE1XLkZtUuKYxZXVRVyS3DUme2pZju8obBQH3MaeZQ9V2TxqkwRXVvbA",
  "key13": "2iHF9GMGJgAJJd3FUq6dcEwgT59N54SKRWjR3wC9E1jfmxjtffZtzTTdTMdgp5ajdaSaRmN7W3Pa6XCxttS6Cf8x",
  "key14": "4rq8Wn4Ro8xtU3LFaLgZ717kP8TkmcpkMPcEuG5oujsgL5BPcPwp99oD8dBi6AJGammeqPuhvdsEPbywkhHxcznJ",
  "key15": "2A8hA5iuUyBYwLHVXrV7DsEBG8Gx9bbkBD4KpHMsi8Swznd57M9xUEG5cF3o1EpJci16NENvEcU5oEhabK7TF2gW",
  "key16": "49H2AZhSzmQmppB3ZKLFd6hiaKZ7FbqEm9P72kTMoWN2rspMtzaLMvkNcGGC9EGKSdqPCGndQBNXKAeftaanUeDc",
  "key17": "4C3mhePR7WURoAVKtD8UXg7L5sDgs3FUBuqdNn7kybvWDRC3Hajba6PvkqeFKvf9q1jLBCe1udad77ezQZxJTKwg",
  "key18": "5LAfr9KKK2HyWBFDaqyDDEte9BXz57Pe89JZNCpY2q7pwFBiwFWdwkjpwNf7zFs92eB23FXx5bXrJcjBGgHWBsc9",
  "key19": "2BtZN7VDaSyzSMoU9MGY1sa7CSuZt7Jqiyxi6jPne7AzQorYn7fpftesEVjbhjcqxkfnS83ShHm9sqYrAect2mt9",
  "key20": "22CCXBGV8fBLyMGo6mZ4ocNpbyDi4PVLKyc1p4cRDvDXy3TQomXuWBUb68vpBki1TWmdCCHN1DEZbNS4HExYe73L",
  "key21": "4NH62aZjRk9SfH98Z6MJ1KpCuh3h5HPcJtGJpfMCy4MqcvogQWwNkaVfqS8FyL5es9zM43MMdioukoCGFPYxAi7N",
  "key22": "fdz3R4dW4LmSpQp9kZ1bqCxR1hTQrBfWzJDYJDtyGspUtf2itSKT9o5dmXmAcuFUqjE1Eb765X7B2e9ECCLnuVh",
  "key23": "56PX9Bo6bTStCtVd59HftnJEkPoWrNWvo9tEAhTZLzDfMWPyJGLt15AaGVZJgsMy72tYBkYDuAPQBFJdtTNuSp1j",
  "key24": "5CoHQ3Cc5o45ddqk8YGsKpNqGzWRqqxmTJHy1MpWZ6Ebpj4ppyXCChYLdxYdmxWNEdSwBbHDaqsABaS83cjnC4N8",
  "key25": "62vnZ3AWRkwSYVQg9KEN4LkbFp7UY2qjJjobYWbrtTDTot1G4yHBLeTdRZTwSMDi6T4GF4M6KVB8gSYgR3D4yfW5",
  "key26": "5fmWfU1bH9ctN9fU1aNdP2rB3ckVfTzgG4JC8KeyKAnzj6qoVUDr8kRCfnBu3ubb8x5NzRaC7pGTmk6kPUKeLoGe",
  "key27": "uH4sa7mpgKBJfGHK4qiJRyAFgps6BqsFmFUjrLsQe73GAsSYkT4EtVCzyu7VunhkXdP8GjJBmS4SBkeUiVvy3iy",
  "key28": "47W9uGA6ARz9triscptxN46EoQsNQi4RCNnckjiGUbLrLFHWGaBTzQZUCSj2MASVjvdKAYS4WR9cFi58C9aM5M1x",
  "key29": "i5QQPTZkz7LJWKZ3kuZrgaK3XxtDuZEgbRX9rP3JYpcUEfNDaPJqGGxJ4fboCpG9SDNS8eS4as9SSK7frrgYT7L",
  "key30": "3ZQzzTunGviPkg9RzVqSBqfk5ighjPhS8bRosob3vjce8xH632zpmFp44914MM9urvWx2qtyAUATamVUiQt44uz1",
  "key31": "3EVdUwFjJuyAmcYsx4zbeDebhnDdwF4XXGwVdFwgvocdeqChud6BAzEbf7dct2SbJgufmtUsowvPqgMDLBigzGhe",
  "key32": "3etURTUNHmnP4iSc2ccihK3KLHtEJqArGF77DmL1QRQPjCxo7RZxWLnPe5feTMPAiTAVew2yhRHPSynMLh8cL8sm",
  "key33": "xSKtuAKk4Fn7mTxBcdbQRE275jL8THAxDffCJJ2vXd73sAio41YbJxcnX78YLfSRjki5xVKjr7cy7bpyHrRBf8X",
  "key34": "AWhyAXqa27uq45ccDbMy4AnDqiyykDGGArJDQPBe1mntVsoaes4xvo2Z3XoQ3x3mUoU8HNtUZQxzbHjwBVSjL36",
  "key35": "3weFXGaTfd8JjN8vcXsVXsA8DmMb6x6fkpbAnsvfNXSvRZMhfYL3q8x9mC18J8JFWtBA9Nw3FrAVe2p7RrQdgN5R",
  "key36": "3urG3q7oEhEv4sFatCdRU1ZtAm2rNd2pX3CcvS4gXBtZxD8b19xM26Hbtxpf3egJGHTJhArgPPF1JYrrSag8hYqo",
  "key37": "45LYppcTPCx6bsZhh7s6NRRcLtacSssKk3Buyie9c5U3fvRVwYV7tgH9AjEntBDHGgsys1NkHmafoAKfAHU4s45F",
  "key38": "7w3bQfSTgvAirXmzozNRw5uMENbb9ugb3BDEynyxicbzCQ4pM4oQ8JqPiFwotvnWJSVszBCPaFgyw1HirBm7GpZ",
  "key39": "kiUS3iLa9VibQbdFVPvHvDARqPkgoCFL8hriEcy5LQ7QBiJy5pHg58yRd5oHp8tAXGhBu4F8D72DyFwtiv9DPrg",
  "key40": "4qKy1r5Ltgy9hMYfdUpjx5XjKgtT3h6Yep6fNiyPFZ58LiJcQFGT5HHG6StdzkK9bxzELAaxnHGB2rY6VQ1fBcqj",
  "key41": "2nPipf7y8DYKuFZ1pAXX4u29GypLY3suHMiMXEtxYQG1DwryzTeTQxtc9R3Y7yAXwBK7GtVsuCT9g9aj5ZRxnYEc",
  "key42": "5T5HNnxsvx7vZmF1finP9EkdfpTzi3z2ujEAKoiETvjUPynx2m4P1iKhQe1bnBfPfPF2J1Buz3zpiypwLLrbJgpA",
  "key43": "5yiQooYqar9xCpKjYsB4GQ5WzbrwWhE9zzqWYi5hiLvK1nwttKCaYVCrVsmmfxFW64GxX8gXxMYJ6ChPEDrehANp",
  "key44": "5eifv3gMEooNoi42cSGxogkLQ9yfSBQ6zuEbss3LnTLpYiqpov6NJ5GuM7mpFNcGaRqgqko8hkrk4P3zfnvmW4NT",
  "key45": "2n6HFtSzbujCzHBBjGpe9nsdcEDr5zqS6Yt199GsmPdsJcRpiGquMqCVyd9Swdq2zRRXN2WeQLA2UoKSS9iTSYho",
  "key46": "4iRcJtaxN8gN4KtRQYzAuiZbS9kxQgjBTPoxRVXPUpEXXq7tzisZ8qCUUTmCNz2Et9XJXEoXnZNXQXdeMMuWzKCX",
  "key47": "ZVd76CJrqufuxtH2y4PuZbxNPuDDjxn8MjHXNwsbcTmr5sofjQBMPR1mgf9H6v2QCPPKT3AodU45zYryFonLiVv",
  "key48": "3hfJ4Nyk3euQwbJ1YJcUAgWi3GwZVhs5VuRdwpD1NaBa4yLUcb9XWXc42WNeDwcPu78mFsGmjAn296E75CSt4KY1"
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
