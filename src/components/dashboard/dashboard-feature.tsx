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
    "aqGzVGUkLPW3fCg3KLFjFdJ1Zt9W6HpqS8NPnoSgUmv9oRusGmzJFxgqJ2iqpEu6hE2HmXmnXfoWY4GjRToDSsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HuCfHx3b39VPbZ92KSNMg864boqDtJR9ZmpbQ9h65yLYtLYgjn2jJjCbsg5PKK9fue3xSwTjH9vJzcxsUaEUEow",
  "key1": "3B8WzyRQMcPW86hpc1efPdvy3FtRuVUL77Fv5mJ1U97ZJsz2bzDkMyVKoA6eJvLgHWCvZdvcFe9z5Ue1QQofxey9",
  "key2": "3t5qSFCKrW8AUPTTvGE7VWiKjHmQhAH6HbBU7d8jDcm1ABz4nHVVuKTqoybNantTn6qQvYhfLcdKnzZZ5GN78PAe",
  "key3": "3BSPRoSoxMvgGZrmunxqhkNSVAfwxNenRycGHpRYPazDrq5Vw7PpFN1z2LxxXgvn3xLLXPeKePpRunAr2pRpKvD4",
  "key4": "EFBksw99D6Md3Td7uR4WBi7VJTf4T4b4bSZD1SnF72qwGJr5i1iMfw8bhwU4BNRwd8ySgijP3JB3ka2Rt5DYtBh",
  "key5": "2yBYzAMPPoSgfYQsXhzcWgnmSSeJkpeXqggpLdBwog1frXBNr3AGkTKya11YEAWboqM6hEp9wV98KKpQEeT5HZ6z",
  "key6": "5qknLADGpQUYPSepwY27zdLNw6J7RzGeJBxnQ3cRtwdKjyxWxovxD8Giw93RSpSBtM6o4tDvu4JpfKYoLnt1F5dF",
  "key7": "5Z8zanJckiY1PNaMMPBop9TywB6HKWiCPBoVPf53inpwUNBRmdqPGPEkfUDfKNQBqRZETt94dwubSZzRos73J5ni",
  "key8": "6kc7Em7rY7skRoajjLxjDJAT9sm6PHyr4CupkxgQMREUUQswWfgz3JnckjguRi84tiDGBFwbTXPxyTTTBsT3kHR",
  "key9": "kppzZJwFrUt9szceUBiYnTpqLEDmVs7HmeiLFdUR5n4cNCXaenCCWM6VxsmbqgdXLCh5DcCCEfxwiNqTXcdhqUJ",
  "key10": "2v9TV853a859BrizV1UvuuFL1QyUkLFafhmbxdT7g4S8QR16v57ra1o1kCCFfHCJdXHTSndNWE7G3dTvBWK8KoA4",
  "key11": "48XGpda6Mc77e67od1rDAQfWi4coeiRi9CZ7duVj7L214rJj4jnQ1johEXb3SdoCWbHf1YNwGYbWU8bepTRkXwYR",
  "key12": "2iHEP2orw8mzJM7c9f3YX6od4zw1AKSkjfLzo6foLRYdJRMbqrQVwK6Z362byKt9G4ETcowtz2H2iQPRegPAejoA",
  "key13": "3bw1fNPnsehnGQ5p2qgiWf7KwYqD5vcQVBRCPF1AK8Ekzv6Git6cSBjAeNfpHNAhvXbhDXG7V8WXLG9mSP55b1Y2",
  "key14": "2Zqscb4zvwGN7Xn8Jzyim8w4Ujx9nm5outaaDf9s8rEAC54khdqHa43ShH6epahhhUe7hpiQEf336opBJkfqEVNR",
  "key15": "3icmFWNjmAgba5carVDGhfFRDcXqsNNTH28o51hFvNWa6fJTDyQ2YwMRs1XC3y9kVtZ9bxA8h2uyJTDBaSpxLski",
  "key16": "4s8yo5PsBbnqa6uvAqRzyDXbavk5EA3PVcbcSEAvE5qrRJECZXmJZzZscSxR8aiBm7wAnHstFzTvbcpVhTQ8wkDn",
  "key17": "35W8d3hZsTLXHmEr5goXaxv8ZRUGBSadHmzX4D1bhZsMR85SS3uzXm1CvKoLWDoLngwyqVo4Z5tfM1RtComgAQiu",
  "key18": "4EdFBuB2csgqc3mHtnzT5bVCLKGNXiyfZpuaCF2VQBpAVXFMSpjVadUnYMVANhwudz6R3dGFQhkDSV48czr3vwG3",
  "key19": "3e43fnicUYM2rKeKSDD5ChEFKcvPRgG1WtqYtzuuGUas1J2wXpXZSCugZzdPcq1uYihjWU5mbLhkoSYhe3YU7c5f",
  "key20": "2ESc6WSLYfvqATKdWNCPvQqW1wK6UFcPbBpp8x6Wb1q4RjrJfipqLcNnVNWQLuUTs6ShAMsneAoJFkk37GcVFdUw",
  "key21": "2t8Unx8XLxV2tcfa3wmBc9sDScDTDpGRWgS8dpigLpR1iu4S2zEBdpbmZf9FEbvcxtdReJUGxXyDUWLBTNkNQqV4",
  "key22": "adq8FxqbUEazoJYTtZKPQjfE9p4B26fc7FG2uKiexfAaqnBhFtCM1DA4BN3BBjrB3r8ChgErbbzVsYymFgtmQsY",
  "key23": "472YanueHu4Eg9Dg8VFbEqwMUxkG3cNDRVUfy3La5eNhoCnv5ocFDGhzW2jEwsJoc6vAVhgVbeuRebHVENRJ4p7Z",
  "key24": "43FxHxsWqkWUv5kn318rwtoHeEj3Q91TFfmoUSXb9Xq4xavMmQqX7HHT7Ht3t1RzJBdwiK3DnUsrwTkDk3Lgae1g",
  "key25": "4eUJvA2YnmFonrL7kuEa57YqT9m5dz7gSdqa48QiM7VDugKfnQUFojUuLezCJR1Ec8JuuBdWhSMAznTE2FsFRCjJ",
  "key26": "4sWiH6CKnJQwwf3A4JdyJpoCixvqsR28vDtrgd1bxxXU29F4bsNgMiJfK5RHZ2P3Qe1MzDe1zwLnueQjcPgoLHav",
  "key27": "2ttqZxrCGJ5rcF7DMFCUn7esY7mGCL6f9CdJwEr6Nm4mCvuQHzxtH6Cj5Cw2EwdRHAg73Xk8aR5ed3XsuuVrw4Pv",
  "key28": "4HvMfN7v9Z37tX76SgfXbjXJdhQhGdvEN3oHTJ3avQYi2FqHGwjcd43VcqrmdrokAE5zaHU961UTPpmbBBiKTpLd",
  "key29": "5Aiv875WrM89k3moar6sNYfvBr9tbkxgvZ9jk5rMpZEQNUeMHkcZ3QsXWhRQbfb97qG7FNFwAFjHnNwwa2MHu99F",
  "key30": "4Yf81E3eCYtr6bEo5cdGNmZ1XAf1XsDgWf8GKFFea41R4dGexiY16ZnznmeqkauSG8VmkwQg6KhEuFaQHxsnqUK",
  "key31": "5pnhEkCcq9fVGTHc9F4ZDWjuVEqjSZitbatwYu5eKmRyNGrZvHuQgKEL4efWZ11oVMz2n7yb9zSCfyfxJEhpxxFn",
  "key32": "B4gKQsBNzWdwgu8mGJutwbFG2j7ztYLyM5wcUeLfyn5CZTSHAqLnFnSsCA6UC3GrEh1CakpRZ6UJXKKjPX3j6cQ",
  "key33": "71a1Z2gZPUP7m3N4KYs5ks3qn92pLDGVWoGDhYzMmxvFo1YNC8MmQDJmqJ8uXTs1KcT7N7chfRJuZwH1rkgDHEK",
  "key34": "4FJpJYFB5YHthVb9rir42vvRAbzra8MwDeeZhyWK3THzQRuyMLQyEDdX5NHEeqjfGqihBpErt7Jbrsdmv8rXhPYJ"
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
