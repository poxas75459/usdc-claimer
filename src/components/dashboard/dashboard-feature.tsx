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
    "4YHhYmNFfUEj2xJJpAKMFME2zmBoPm4juC2ESyc5SD4K1xoF1Tvdbxy6PogNXW8BBTXaWZpJdF1uBFDp6FYXF3aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uXbWBirxQc9VeQRMjrHYD1skix2pKcwFVa85tQkwMLBMpWgDyNfodMdvNr9ZJ2dUszbSeaBfNQhYoAZ8DcE3WsD",
  "key1": "jkCG2o8bpcYRgEWwXmTx3Y7Fh2giZE8jJkpBnpNUe1bUnkYTSG237dK9DE5SiNXGoYvJcNW38tFBwR558JjDd3U",
  "key2": "5UmQAeiXdPm3CnSpb3qpZYFf5uu12qXYdfrUvSVmqyZnesM1AF4yvy8o5SRhJDq2ySoiMDxuEpqRzH4J9ETGohLe",
  "key3": "3amayZcWqoKyVJ5X52kqWTGHhSH8QbJbPhmNeU1wpoPwSST8HRAdHQ3j4pwzxJZf9riQdZih2nVAApHhKdywxZqS",
  "key4": "38kmF4TERRV2sHZRwZMjzU38ssxUZEFSaBr9nwoDbLrtbEvCQuypoCva18pL8mEVVGiMW289MTUcf8VxPyCBQGuN",
  "key5": "5S7Gjua4y3ApQBanfGcv7nRp8kSwNBYUAG9eR1JVpq8mZjEoRVdz6C7G3kd8hpctJ2YaxG6AV94bHWzuLP8XJ6ZG",
  "key6": "5vyB3tRsptK64NvprXtuQPsfqMBGPm1wUKDff9k9Ce6D2c8hf9175vGHr2EN9Rmne3BhphdBfyuGT7vHQkM4RQ5x",
  "key7": "4o5qjR1LvYfNqsuPHKYxGewMruZYqn2XKo8Nn1QdQrsCbmzQSLnaduZ4oKBnEcR61gcfqcDwPkeG98rDoc7hQ3Tf",
  "key8": "4zy6aeMGVLTcBxrhewZH6ALbGofcG9isMzkH1oSJFib8t1YodChgue6Ja4eaEdDz1MF6KUP1Jvk9f1KbD1jzZb3i",
  "key9": "3w1JVTFnFpRNMX8hTJ87shcX2NbnjkWqvDvwRFRJx2YyaAxTjPBVCiqXoaju7UVXxR7r8sRFRNiBr2ShEEz5aTYZ",
  "key10": "453AsDmS1oNSKoY7XSEpmxb6V5nwCCwLbtNihkQpWgTdeCY1hsAzWEXnwGPUpPmoaFg3L9p4SY8FUniGFTzK1KDu",
  "key11": "58wBsMxocbpyms4RTQhBHPZXaAvCaPn3f3cQWuxzHSkYnjnFwbAcSteHA8J43cYoVXdTi1JiVQxywDEMMu2Ro7jy",
  "key12": "62X274MHFkLCNDnDnhJYp1uTBBVQ89KEHdRZ44enYtgFJL7CWy15wYKpRtRKk6hxE6FCsUt8joMvgTdq8HprzcGB",
  "key13": "8zEX3Tp2RTQFN9rW7pnHL5GfQHeR9SLSFBCRGRpu3g1wUz1HgjmWkgQfuBx672pYUmtYpkKHESL3xjJPSumEpJy",
  "key14": "4LEUN8fWLx4ZrqdsdC9NzxwYJYm7P5d9s99x9Eu6msCNEcZt1pracmV5poTJLDWfdp4Updgm1Hw5hWFRHsjB8q54",
  "key15": "2agYpuS4cWcKgLcXo8s3LVgyQNja5bcy4cqR5khXqcDLLzBQtkdQNrVonvX8VFZvb4qcZNZuhZrf8zJDtDQ1MLmP",
  "key16": "48wug7H8HnfFgDAtjKZ7ufU7gHcXcZRMKMW6iKWYcFd6u8ipcwL5NbhUE5RxBCuVFdF2VKwj2eVzsnuMMenKNvqL",
  "key17": "t2pbBRDkxa6rWQyVXtH8p4RobTPueinJiRmg16Vhg7tB6aN2EbfUk8MyDQ96wLwP3p3GgrraLgiDXVauW3LW1wP",
  "key18": "hqMnXVdjPXZRyY9n3ZM6EnZ5NvL8fA7PnG7Gj54nZd7GJeVrVZ2YV87yj4sgofGxxMYannGmKArxtJJMtuMLi8x",
  "key19": "hQBdPXJ4wWdxwHN1mJPqUgfncJSt7UYBHCmsG5Eh8xHoqEZgmegjyPdSCZRUjTG55yLTtmHoGagX8CBYbTN3KT1",
  "key20": "2Sav1UnapCHuqVtUeZvFGiB5amMCxiW13tPxi9y5mDKQDG4ZpeJJVJSkGpqujQP1FPJhacuSfCnPmWu7KDvNq3uH",
  "key21": "3bHiF9GNdYQFfEQu1Yk2p4BvgVCS6pUbg1Z2zSbg36Dz4abew694hGL61rtm4S88TvE52BdbxXYbFunwZmuf8Hvt",
  "key22": "37NHovEYGSKmrcdScC1XJc53paJi3YbE7xx7XbAEeoi4C7ozAB61TfT7USHWoLYGdU4JxuWLPYPf9to3C6SRr9WX",
  "key23": "4CytLa2u2MwbhLKTZnwZfuN6DHdMN2AFeyr4WYKLHnSfYRepSWGtkLWnaeuSaVZqPDxFUVStAXw6u2knMG638DCk",
  "key24": "43d4FgCxidYZbj89Shnwt83KQGG44BHzXQ8oBr3nqWooSVuhWRap4QYcd2nB2gyWaxrBFXGzQMG1ACYNPtjum18R",
  "key25": "5FdgxwrVRhzvBHeQzDqxBaVZntZRd9PcrVtNny8RjcKaucA1Gxf7uR8dJNXjAw7AyVNZhH8uW3wrpZeXxJW5DYWR",
  "key26": "238Wm7JtGviXuchswTcFnnNKgfXLYWrtBZX7Ar1FjQq7JmRgzDZsTFejHyiznAVQNAxNfTrBJ4uEkjrDPNkPtVJc",
  "key27": "4Kb3GpLwW9v26bgtLVdtsd7ocmkEvmsVjogH6FcrJtpqJ97VUfbbjLHm7avh2Ahh9gDca6oPUamKBqmJzvH2NcyV",
  "key28": "uqgahtuh7Aw6fFqVhWUZnYRbj5WMfqRjEADcAha6aFZvQmKpB2Hmr4DQW4WsTx1sy9GgR2o6uJqVDFT87Nd7G9Y",
  "key29": "4FYDBQbNhn2h769gaXiQy7BJaATqZD6oPBeNm6yhNedJPD3WFY5N9diUKjWxmnCxehnrwP5LbWFKxhJqDS7GyvFn",
  "key30": "5YUbcxQTZgStLnnXWAqy985jnyS5Simuhj8vvgKCfbzmP6qGCpeceWA5MkFprruwnA4HhQvm6xvKi9q9BgioMtqK",
  "key31": "33G2EYJKg44PFgkB6uPwnsQVx8Diqpv1t7VMTxMXvZAdX3DPqRLBSb1jNdCN3mjoBKHdykdANEM6vsCjTTR1ruhw",
  "key32": "3HzDQ84sTV7D6NGh6BVufXDzELsRM21L5avef7XBKR6F5hiRHuFFDhf2FNhetEqLcGRdyyj28wTFUsAExLJ91fbN",
  "key33": "a1WdHQLWbaBjpNypcov3dB2PKPxNHRSqGPyeuoSt2kZpd2mxMHWXXJrCsmfVEKLr8ArFCxmcvvMffR1b2rt4s53",
  "key34": "3ZEyr9qcjmuNVj5WMg8ouvrqspwWJN8fyW1dJWJin4GH8SkNfHKTQ9GLTjW7t9vYjrRpZtiWnEWvGhLKmJJ4SciN",
  "key35": "53pFXEdFTaCUMMwNFvqBEHu5riv3oLxQTf98u6CgwvqXZHvy4nJ33mcN8LpT2WyFiBa1dTiYucTQ7UeLVhjgMSeC",
  "key36": "4KgGKgpFzeX1vbf2Jiy8PrD61SgStgcAsWRzswpAvw8cCEuoxSW24tLtDhsmQkzYmPFCSS352sLdn3xyXiaHSJw3",
  "key37": "onSGDEyXkfuWzyAHMxophG6KbhArWsb1dNDw3EbLS7i3jWaHgh938Y8mB5za7TPxdQZZwLn3LM1qGvGRmRF1ePk",
  "key38": "2fiMyhktcTu4BFVQTh63cC23cSPSg6jRPPjc7j39kJcWb8kBza3BTeDAofwSzWj8qG7iYdVqfdyzUNcPcEcJPHS9",
  "key39": "4bxbKhcprnNcmKbmatKJDEgS2SPcZRmpNmH8yCh4Ws6L1Lj5CRVFNtHwNMw3DB7MPnHbTavmfBfLB2zFKwHHdL8G",
  "key40": "4E9g6RQ8aE4EroWj6gooiyxAEuCVQx56D25rJWRF5bKm7wBiQqR7kRmYBYjY69db67sVsWNMrGxAMcs13NgGH3bc",
  "key41": "3A3dDqmKT7SnbViPaaTtq685AyZM4h3UfBoSsFt3o4Hv68tQDgUmKB67ubYBAYt7ZJb2WDaxEMbNrrEAioE67vXE",
  "key42": "4Nfmqxpj5BeHNfqG6j7b6LNWuNvEMSG1W6XwCxbbxrE1gtBmEXEuQ9RXoBfNvZ3HTpUv3C9sLWypxCH8Sg52kou9"
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
