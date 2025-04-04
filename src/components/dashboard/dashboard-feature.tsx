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
    "4FzDAPfXxCsZiesowXrFEuDz74FuXUCEzHXUonCNUgVehrRxUhSKpadaK2PDBboftpf52aAxrxTk1H6WgPxSS4SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUEtmiG2ZdN5CgKGaHorf9D5Mpi2EYcoUZFn2d64XG1QYUrkmZhWj17HCMtrc4UkqkH5FjwkKoAt1yFCUUVB4qj",
  "key1": "3zMEyS8d7XoTVFUjNn8Q2iLVmXzhwXXNgcrCDW9327g7BLjyfZZJTVvjxgXYiHopgCKzkVgzi22N3RK3djPji7yy",
  "key2": "3xtVVtiEtLAwMhBDGyTdLcmvaY5SGKs8XSTxnbVYMeCh86PCsJWf3iRQFDxJqGVUYDp5nJtYu7BkktAda2x851DE",
  "key3": "Z36UKHkVLHfiy9AAYYTqAaCsoewnCFCwnKcVrSvXviUnm3E8NrYqFj2RAB6Xhi9PNa78FMZ6GK8P1hUCwQBFW4d",
  "key4": "3L2Z7YpCWj8BMxiHUaDYxnnZZhABXELwUxhvj7RyEv7VXm55P79BurnayzicJ1gQT12s7KWrJMyeXbEvc1xmSDgf",
  "key5": "3V5y19FQqoFyPAQskKraTHZENYrqSRnVxzGyfevSX7sDVBAF2SuhmfN7uTbFkiiR1tFt6W1Td4NPhunNDmmHGhZe",
  "key6": "256mhb5tY3zeJhAAmNtJcrWsZ8VCCRTPoFj2nUAtpshjz5oFWgNSdRodNUidD7MzKmUZPn3f4qimJWwyXEaZR81j",
  "key7": "4r5aqzqccyZwdAPNmHN2BKYk573pEqW5bmkPHfBcq8dzEoJrLC2U3c6ZTeDdk2V8dKYwcin5o5J9HryXwQ3ifieF",
  "key8": "2Xq2rzK76QsYFbW1sZD4YCaNZ6ivP8KPHDAkDVX2uKbSVABUE3bwjo553z7SmwzBxfC3zpRAT8SV4ixgrpHxNPoX",
  "key9": "5vrwckKrcC2h3uWEbhJGS8D3UALf5XhSWpjYxdDAeRRwuqnbx1R7ohMgX9SLEva8RzVXr1eFvsLLxXsj8XzdckhS",
  "key10": "3W5NegqfkWWYCpNmpk5rnmF2FSRzd3rm2FewmHrW2YA77SFhHV5XfwpnMcC5PKs5PeWhazsPNxJpVvAhXgTg2GPB",
  "key11": "k5Kv8XMPmSmRNifK8tRtHMQPpwu1FqZD9WpaPA9cH27LzL6Wf86y5MgbKPeaYtbisf8gcCg88LX5N3saaAWvT5w",
  "key12": "34UZvsJECQTdYef5cmSkFxPNKA9h7TQ1proSsBZBo934G8yxJsGWS5Lbw8MpzJYbHZwFR5zMK41qtamCwx61fqCF",
  "key13": "4nF5DWKGd5NCyJWqNDP7nSLbhygS4SLsFaPdfEgCTFahqnQefxkJ2dkwm7fkLGGG9CsHsuoLDpmDxMfuG52yM738",
  "key14": "3r6ezDcBwpHTD1v9aH75VBD32N6MRpj1YpfPGT9LSPeZQmrwJ4TqZjUxdxUiZ8bte2B2d6ZaBSjP8EmSc6XCvav2",
  "key15": "3vcb7EwE8NPSndwJ2zGXVA7EDVjMR6CozJoQKgumS8rcQMZL1Ra7MCRDCus1cbZjCBCeYUVSDifvBfscvjBq1W1L",
  "key16": "MVfRtmdKkMCS3Q2Yzg2q4qNDXko1jcAY81Rftu8Ah3xjhaKj5xdyJ267mpuMB8DygJ1eSyciyfp8cr5iwFvpT5F",
  "key17": "3vqHHVDUsr3fRk2n8yQ7TQi7yWLskhy7qhBsspBSACtLFUsPZpu61XsNa8Uq8htxcSKW4Tjn7wKV23PMZDb25hrd",
  "key18": "5BSns9HFLL8a9bRZzx7aaAoP83u9S6ekLycASwiGdFt8Gf1nctF72X4QiNZnayVL7NcnrHPTvFXU7BEBkjC92cQn",
  "key19": "3T5WYaGRiGWPWHQnmqohHWC12narpgetediFB1AWow59KK3R8BbBZoVm5DTMuJ65SKETA984J89nBtxuPvuZ4yQp",
  "key20": "4uE4RskDDxC7d2HU6GQgciAh9me8keKwWZNnyV46A4RfCmqBc8Fh6ZQoZvpjLkmfYYhzCS42rwGTo14q5qszzGAR",
  "key21": "4F3WQLhnhWSDZBeEvpJjWJ29iQqBKLoeZbhUcqLvwuziHFJR8dx9PrTbxqBT3vLTAxcGz3gEGLbzeTgjnf88kHwD",
  "key22": "mpR1gez4WM7xgtryWrGZXcuMm8ifkhBwFQgDuizdUHhY3BinmBTVCHycb5XFX3hEba3ahkumvsLQufzJY3vVD3Z",
  "key23": "3u5h8wS1kAi3iv5RdpmvZuzveAYFpdCtbdCFtTxnmHiWn3Qrspgbb85sMw4UM3LqZpiSkH7REG17toUaBH7hpXyk",
  "key24": "By3SwDkuxzZhgWZe7RQxFNvuEuU37ZB7jwTPKR5caxq4bRRVW7zfGdQhKMFeLVuBXdF1ERQ2GF8wSPGu6v9VL2x",
  "key25": "5GDY18YTsrSPbG4zSyFAyEPoLwSUX3FYiFFsMB5v53zqFy2KqFDggodaQTHP5SHuXy94bGrzDn8Su34F6BVAaNER",
  "key26": "2CNpPw4DMbY1xRmLwjf6N7B9yhr1wVxkSnTmRRLTQnDjwD2CS43VSq4RsJixfybG6xjV9JZ6EeRbFAtdCpj98DvN",
  "key27": "3thDKp37NeUkyahjvoNrkkWUYVwzDgCqHgzJfWaJJ2vqy2kf6F55jcCSJQioUNiKWhF8iJRihiyK81bkQpxGDMeE",
  "key28": "27TfG4cWdC5BFjGiWYEdLrCmZVMwYx8xQfcpSdTWJ2kBmWfvEVDhDRNzStiWxVsER5fARBaJuyTX4ppnA8MiUd8x",
  "key29": "3fMycdZxS9EX3xLknCEWCJgqG6yV9N9Xs9cC2vBXpWCStmFyikwYDZAsMULKg1kZZSjdF2ZatA8ng9giPULrgkrB",
  "key30": "2mxxY5MW1bhAmt2pUgGZjB1r6NSjmKk3JVEZVhdYTcEGuZsQs5DMFDkgFguqGL2Ri3JD5nNGhwwiP92BdQgHLH1W",
  "key31": "4M797hwut195L9oPL833jVJb9eU2Vesay2aR6NWvf3LJBQP6pKwAUvSgd5rTTMXVbXH7TZ9ygoPF9MEes4QhCzVK",
  "key32": "2wmCrKHm1pAGobBAGt4a1GkHfqHiHkXQXQy6MbjPGk4VdfALVTRUK1ZKWV5QTpuKMptHjwHWbY4vrMwHTfXKBLAj",
  "key33": "46oUuAJ2VZbVRLcx2CczKnQ7qvcuzCqQw4dhNHPk82feeypUBStGjTgnE1bu8yjyWQxykCvrTEN1sMhfbuh2qhjv",
  "key34": "JpYsrMoPdpFnRhDjZEqbDYi7pKhcEHRCCGbtAm44WQg6yAGH5dkmTX3GUtnmaoRGmQc8rrttgnuq314ksFbWoL5",
  "key35": "17o4wBhxWM9jG6MiRvoX5mBZaxJ9B7ZTyx2ZviVbkhY19bwbNUGhS8ojQnUhnMfvoWp31esrqBrftcinth6VdBu",
  "key36": "4oS4Q78v8MjX8FMtSH8A8JKdiQinR7nYat76aeb1poXVS6FmoaiLf5KaC2v6XJ9RSTyu3FetKSRWpiddwaX3Jw6L",
  "key37": "5ZKtgWxCfd8nu35UgpMRqHCWwZbD82zFF5FJoGoLLxtgyyP1frv61uwZdBpi9BcaNF1ssAFzCpadZkpnMX4bC4vR",
  "key38": "4gmqQ9xXWKro1s7muob2tFE11ArsSjoAw91vfEGc7SuemgeVPbCTVFbaCpNLhz2dPqguSEPPDN1SDs1GiicHDFLv",
  "key39": "5mtGi3v8tfpfkK4mxzDE4V72vXdB2cwb9Ff4WXak3KyVPptRJ5U4n43scYBRfCv3pnJWEAABvDtoLo7W5DWrbECT",
  "key40": "3wHpywAHn7Raym1FW6RYDtVpDyPcEZwEJuF8dR4qCHfnzMzFSLcStBRX3n8KzZQj46nU2a7ReWfrmzqPGjxfhWax",
  "key41": "2n6Q2U182HJwYhpqBRRR9622oi8Px1k4ZRx7eumyQhRjhBDrqNxKS9uQXLxoxSCTLSPA7QDX15nxecAm3r9X6JWT",
  "key42": "2bmUwncGovjNAVW1aqxc125SgrzpPPXf19pFkYNxuHdCYJMqZFjs7oJQ8MEGCwnai7xQAQPjezknhNzyFiSWxcSB",
  "key43": "3J1y2YnDFkPJKP4UkZdrA6jEYnwLVt4xazQTS8L1aH2kavsmqWgmPPJFMjrGAFqQLwdPQdCZUWTLMwFtstw1y36W",
  "key44": "3tzDaEyLtJG3RUPKiUwKcNk5KEjx7918LGtqDmk7WfRQSn9PtZN8uEA3kGjaKvyHrBhYiAPjoJnfBh52TPp2YXj3",
  "key45": "3HKUBBfeHk1YFxjMWkjMAPELLZAGwvJSzguViF4bP9qCzXW4kLp9rMBAkEG5kMVxaaUVZGidNzcAe5H8tpbwCsVW",
  "key46": "2FAnqCaNW8HhwbvrRYRyhNFkwPfTGi3HBZutdoFBG9U166z4tNt7LbNRGa4bmXGsTwBBotpTfzmeNkvYYYJiUxJj"
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
