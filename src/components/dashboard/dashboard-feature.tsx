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
    "3DzVTAAgbLmGC2Er2dRtU8ABpqqsEU69qXqiLSF2MnPBJCecPfGCWoqKKTyZDHtLsq2gXS3qSpz3nVim78K5TFcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZazYAaM2GZzDJCtooNiXvUASmtqqjUdg3psgMfFY5EgRBX4riFYcBUxvLyiDfk3H4nSb5VXVjeq2iKGNuVfWkK",
  "key1": "3w68bTdeUc4K2iXmCg36Hr6whm4bnoM3v6WDtXw3BCB31zFGkqivjnXsHhH9rycZvXeN8fH6a56sypspbmpNMWJZ",
  "key2": "Vp571qutrnRhWidTYdkJ1hVn2L27TRABfd3tpVjKbd7wZV6XUksfdtrp3dAL2aTgDAqg77HncUq96VSis2ZDTmB",
  "key3": "4ZNuSsQCQBrowbkn9LWrptKB5gCwAguktWDJ1jhebxSSHumSpcubJ1sVnhUL25WyRtaYxJFutXo1oJgPBVxZPTXP",
  "key4": "5KinXzSXdwXrZ8QPADukVrGf652PChVvGuTVYrgaSgFh5ngHyk6oqR6BJ9ms7VY24rnxiGw1H4Ei1WG5PGFXiZWJ",
  "key5": "5WRzBTfevaYrXg6aNSCu5pEaaky5pBfspMGgFkJEQtLyyxBac81aFJRqjoagVHrNGh6SYCfrCeuJi2BJT1ruLU1o",
  "key6": "3DtFCPKdFCkSP3wbuZCNvFhevYcz3sza6RXeVTBzoWPL7fYMH8PCQcjKkSsaoy7NaiGN1BtD6nA8bxWdws1X12jd",
  "key7": "3wyy1Y1mikfjbdp9Mr2vaZegQw6pk4Eh2sfBXBoqXwYWek6UArNHTT41LSdgyrhgALu4LpxZYetLc6YBSGxArwMr",
  "key8": "X6rj6Pd5aHwwqjk3YwPfEzHT9BNjmgfRyD92CdzYEqGY8GBa8oGCN2zRSbSzQSeRjG34ZkYqSfMjKdjDuXjZXFN",
  "key9": "5EsZKmevbCLFEvAmPteeV1aBES5r8bd5GeRGp8QiEJ5THJ1yXbJtbZfSejpbVuT2eneoiMSWhUESpwvkq9Hjbpkk",
  "key10": "2hqb5YFxVCakeZfmQmixnws1ecXm4GPWcziFD1by6bAFoPDjBuZp9cTndgJuGLU27CTSXvmHkcAqjqvXExP6FaEL",
  "key11": "5638fMHeNPjgBHvKgJ8GFLjjrctaM7H5HVY9QZqP75LviFc4xkjrMQN77UX6PCKUT1vujrnMwQ9aXbdod5WswRfx",
  "key12": "4MdYYv8xKw8SdjNxoydU8RQk7ngdYFCArNxCnVHGRZdL1WB5Q1aq1LwSxxLqcnk5LZ3sNaNE1FH2UNKjmnw7tAVD",
  "key13": "3jLwiAabFJjF6E8P6WgDJS1c6vJzNCb6s4PAA56dQtGr8quT9tmJnm8Q9xuJiFDYMfXUD5h8jrhJ8h5FM8GUEp4z",
  "key14": "2nu2WT5xXJN4go7EAcpGSRmsYZzQwkFbJNxBxnzvGBEsupSzvwe4YMcHLwiom6YVhuYftGNAbk3qi7ZZWLF2bqmX",
  "key15": "2KjdussXAc3DxpDx6ApUYvPZnNpfXNwW99jC48cNm7DsnLJoJpwwDLpZmoVQB6tjQPc71fdnxDznravr9SyJCw7j",
  "key16": "3HNJfQeE1Q2bnLLLqgUECYGkK8DaTPdohHKUXDY28zzDGKbaBkh245dBTcwZ24nzKMNvCaxvQt4uRZS4T9u2YXT7",
  "key17": "2ETVBxCCezeQo3yQdRNJp2AQ5baiSBeyEoZQ3ycPSNXJTTzBnKjhJsUojRGreZHnvePFjaWpCCBtvKsTgKAJ8pWr",
  "key18": "22e3yNN3pGheQodNqyw1spuQtrH4PXY4iuWG9U4dCKNKBerEpMAt7zJTNUbEQVZtSAGKu3aJwym6Mtbo5DUGnfn4",
  "key19": "q32tPqbeLUJq6stV3rW8Tex6x7WiyTQvVDLcx5LKdwVXM25oVaDUKqkaCnKPcvvbP7ujrWfzjDeQetb23aagcc1",
  "key20": "2syW4gi22umXjg16b2Jomv79cRyWnMng46EnoGYfrCcBXc1roG75poeXEb83qZCuhe22JTYz4s8f9f7K5DB7bjde",
  "key21": "65xFWACKD2P1WvUdJx6MCdSzgdbBvvHiR4Xc2GGbC7dqLu3MZ2UpAfHL2gW8g9ZkiMgWkrU9JZrptUCF28FiK6Ep",
  "key22": "45eaWmkZTNrqjup8pvrRjeLnh885vFEg96mK8wRpegPY5DDAVoaJvgSDzWnsxmchuwhXSEFn1dVQppjCWveFNrdf",
  "key23": "z3hkpebq2fXtJ7Sjieb4gv1RipWCwYntwTVyFiQffs4Jxrfxham7Nq3tL8nGvCRXgNpkBSPP7jnr19855qtxXfv",
  "key24": "42WaP7iW2Uwxn5MQ3DWYtKV5fRuNfwYb9bEN3k1uxtJ8LcAKzuiNU5aPvwXNv8Rn5qeYvPdNqo62fZmoCvoyZW9e",
  "key25": "4Mcc4pqX8z1nGy5PWk8shcNkFidNJvtqVrQqtNUmRUqSP2s3K9jXkQnU29Ds6T8hk7UvgttWRvD8qf6vhN8pgQeS",
  "key26": "5t91KHMeVGrEG4CsP6DJpJVZUZc451G2X4BEbxwmi4Wrked6yGh2yWeg1RL8aG8VGYdKoaPbQBZfjgCgmvQ76YkA",
  "key27": "GLhCt82uHXuTYE8y6gLpp246jZr5YDMttLVGKUnjssVUXxVUbGbz8Ny9eNb1kqT4gvgkWyDvE1PMiqA58u96Z4U",
  "key28": "5pQ1Xxf8Ait97hRZwJtgpqU2iUgkZoHwXjXFfnUmPr1mozyFHRxfqgFzw96MZKXj8LnGgJB5vwY7r4ZpJzDSY9Kk",
  "key29": "3SzZKSXpCHVrzzVC9xUtQVigRhVEv1AVFtKznK5kn6S4KBJpRGbgG2oGbw34ysvyc48SJEYgdf4gTzLyySG9WGt2",
  "key30": "15CSTk8btTouNSMKsRFxhrYCWkxBdYRkYu1MuvQHuWHWsMgLJSvp72gtVoEMmpEEviZUPnFhxjcxDdMQQfBWH9L",
  "key31": "5PMK7vWwaxBL3MfnuLGZc8bztxe3LHcFvgunPrP4tc3jjqMkzgePJasMpickogSdcVoYSEuqNzLaFF9Q6kigsqRN",
  "key32": "qLcsHzYNg97TwqQgGc49DJ19rCjk1WZ6TmMP45b82qeKBYVHJcdHKUBDfKKReYHXQALNMkcu93WnZuoVhu5ef3U",
  "key33": "pR46LkPaSZsN5wvCBzvs6jB7bVTJz5AJ7EvC9gn7qGARRY8kXRhMJBnDcnytk7vXKhBYsoMDsuV2X39Kj6JygAU",
  "key34": "3e2ZvbpEWSmqUCKbGBNeRwtL7qPUPUMsBXgvZyaY5ZYaukUQy9FU8bYw7zimv7tTDpsg3dB42bwr73gPeM3jdNuJ",
  "key35": "2AyPgy43nGv8w6DybX5pcN2AaianBWLwKqRTZvvz7SFhZ2LAqP4JUx5c4gbBXkWKmrfr2DtrN4VBJw82k8ffbFLF",
  "key36": "2se5EgHSyX8SjsA7v5yDfKWofXXQVZF32C3Ah9ifX14x1yVjetcNWjfuGPARka8FFCgVetet3CEikJKrJWKbbxLs",
  "key37": "juiTDRXeGTuqnBkJFWjyJdhwgvxwnYNPRn9Gav6d4h5f1apUFfACXAT3Ymhx8Ys9JhjWUEBbimkBGWZzUoXuwZ1",
  "key38": "29D9TXj4hWR3iejWir3VruzkfSPcF3WQvuLY89hAcFCshTHx9VoA7JgniWUkN84VCRDuEyiezEhxAU5w4hn3oaSm",
  "key39": "5A3zmBFqt3LJMWmTpwsS9eDn2ZRvCB7cyvvQ1BqmwtC13AXbbqWiEeQKM5EY57VzKi5BzksamfVkn7wSPeTC66nB",
  "key40": "38kmEDjHkBK98CoYXZhrDUkumLGYezUZsDuuTa7ApUcQDyGAZHqmB8NmeLxYvNacce2z2jx9E6SEfCBdryPB6YD8",
  "key41": "64n7NzrgiSAA97vtjQgyvUfBF4uVq5a6H8wdLdCm6VLdaTgALGQ8VeHs7vS12VAHU6xj2faYtsSrbhoQfRboBtEq",
  "key42": "4XYah2hFbqzVVoJqxc81LyXizngVuFXHXBVtDCCFDkVxd4K8Rupy4qjrd4osKdmYTZCNiwM8ofdWTC7rkgmK8wDY",
  "key43": "3VSADZee4Pe2AZ5cHDuzaeYpTBDzsZWTg9ZBYEfBFvp4cs7e8X6tGPkQQQh2P3RXx8dmyupffSAN1YfjUVfPu7CR",
  "key44": "5fo5GadfBH7M6cSrYpF2tm6HXmhTmhJKThnCX5BuxEwwL8QNWYFofJ49XaQqd6GpatCGwqPCpQCP72WDXWTa1KYo",
  "key45": "4pBj4sUxjLHXsPrP1fHMWGs1QsXBUpvevFGK6RRXvgBtE1SgyCAVAZcvMJXDgz3oBnu777ciQwpSbPAQ9JzCkuRh"
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
