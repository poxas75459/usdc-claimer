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
    "336rJPypoWznztcdJ27A1JPjX4t6wmN2p9TQNiVJEjHBSBtWBXxXqRNMEP85Z3erJex9Z5R8kfCNU2Rws9xXNrQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4FAqyaNL63RigQUHfz13p1bGx3fCwyJhBgEkuc3naATtV1Jsk13gtFa6CXULUnjkzgruDgF6ZvA5qRbvWHWvy2",
  "key1": "PAyNpdH4DPJ4BK6kC3mbB2WbAS87pD8ChNsEphE3uoqytyXxZ7KNuemnC2dv2KXdCtXuGZysYkBCq9ab2f22BRP",
  "key2": "1HjJpthxnBT6XMBgKvwWuURxjC99PWzJrmPLU92zrdRsMhXjBgHJTC2aP6k1GugkBEibCX8nTDaJkdDnHvE1gUN",
  "key3": "c6S14fJGsH3T7mcCj4vgPvNu72paHW59obcxtC5FpfQmNxT7QZppCsWT4UaVC13qstrhdLSmAE9TJB4RpekdGZu",
  "key4": "611SLUzxHarxwcpGuNeYauJsZWHoJkVXDTCbUwGWHzSWAW7tceYrtFbPkyZSce3sGesEz8zpDY49MrcNNxcYb6wS",
  "key5": "4jSQygBnX8oSjo3DmM79HqUhJdrz5D65eAdgCpQW4SfujeWuG7ZCnp4GoaDRHQBy42knzdqvNwp9N7heZpVu78c6",
  "key6": "2ix1UKnAre66KUU1BcBC1WAGLJFyCTZGayW7f2sm2H7Mvt69be7NHNcjJPR8SMGNDckk4jugFV1qevdhgDpuA7wZ",
  "key7": "HR6SAd2KbzS2ewpEJVjxpusLVoY2pXbGEauAzXV95ZtfpUG8jnV3yUNgh77wzJKsTL2urE3PUyPvoeLMC4yUCVe",
  "key8": "3aRR1qv5tWTJdb7HYZbnMA6JQfP2V3vbGSdRbHzLccFn2tyVzrARYK6kGRoQYYG85AXtF7iWujo3ghaVWu7NnspV",
  "key9": "3kboFFUt75WvJDHSe7CkReLvEZhntLzSKsw2Snjc1kT6Si7pYrKJoRrMzrc9Gu8QeqEMrtZyrV2Z56PRB1N9KfRU",
  "key10": "2JpaxMKQ3W38hfWoBY8ts1NsF9jatWvagVZD3HRz6ZRAUqaaBBFNz6jqtwq2H81uBvTP9eQmsHGG4Qft4qNPsHPd",
  "key11": "ah92RzPjg7wPZxAZMw8FGPeMYUsuwPZ3EbFUyigTg8J2sG97FRG8vAGmTGfWigHQFfCVCTQRr3ZPjVXxHXfHLa1",
  "key12": "3Z7aB3VGYt7Rro4BVJwbAQuMg7ZFK8TXktjkRpsgv6umQSXeyZTihCqMe1FD78purr3ff3buZbmmnnNFm5Snn7jx",
  "key13": "2oivaySaY6TDQiGQTuSYf2s9x8Y92qsFuC1JHiDL9ErbE55mTBBbo12V9PWkbr28Qf4stP3ozvJheTxm8KHNUagE",
  "key14": "2LdyqjDfiYRpEuWPxRrsfYT8UzKiV2kNMTcNNeoV53F2m5nhFSUbLBGXBaZHLDVTBmg57AaQjKPTSnniRqCfzr4S",
  "key15": "625gQgxcvvs7dphmW7aFkXvShDUe7tu9ouFfkpEtWiwfJzDzujuCbnUWYUqR93DoCiiwBiKUMyTp8EPppeyXBhDB",
  "key16": "QQSUEqpPgt6hnmUzDX4W6VztLPbCapWAdvc9iyeFTaV4jFFwsUTifNPikLydS24mfdb2oijCnHgQ43ySngqoo5r",
  "key17": "GebR6biiMKx5nJ3Kxnc6oHsKvBCT97jHTcV8LQ76gbw1QrVeGKSVnuK1S7n9zzAhV8nbdrhhenrcRCcq3vPdBo4",
  "key18": "5ssmeCvvrjju4kDhnkrzVephCSLtE9JioieqJyuzUZJ5yjp96KbDBKSUyDuHP2wWwSXqyChy1FZZBDvwDkhQvfv1",
  "key19": "4QJwLGVt8Ey91G8dTU3h6XK1QeWd8JMMMvrzeKgWsAhJjSmp9KWZngRRghv2STbZJBqmnt3p2oqxK1VMFMZN9hvG",
  "key20": "4ppPY44CF8HXqbwbkAttyAK7KjCbhGypr6q8aqkzHfsiGmqz7rNtZ6m4jhEkhMaBXiFryy1aMJRtSPBqEfqExFY1",
  "key21": "3XM4rduvS4RK5eaTfeJBaFxbpNEmmrSe6oE2t3NrHU38aLkvnimViUmHRoR9wbcsV8MLNH4Cze6B7SgsSpcKaeqL",
  "key22": "3JQV2ngTuhQCbQ8m5jQeqt64qxfrUywB7j1tcMqUcQTUH39Za7fvK2xHccjuBkPguNyJCPmSa1KVhXbFUWwU8frX",
  "key23": "21EAKmVkqYmGxvD4RaUhMo8XUWZxoW6icQo9ipeQEwsjD23kJudxVSEftmXL4FWc65sfsbojoZP2TCpsw4dUFie3",
  "key24": "62tHhafTfobVjtwfQxa4sapaDoAy5ym7QHXr51i88Eddpu8QDCPfxrzHVbxc5n6TiZdiNrLReNPM62PCNCs3qkmu",
  "key25": "3f64gVstzUd2DxwBXypNuWH2bw4YWbkuwSmd5AcQ58qYAAoab5cwfMQ9WP6T9UCvwgEkQHc14HRuBAdxDiftTKEL",
  "key26": "2EwRwnnhnPXrg1rquvm3PuiVMgTWyoAtZcbiqrcUoPXairgimbJtdPeRZ5VV5Pr66znmwigqWDMpFjugifKM2ii5",
  "key27": "3YbN1fjncyTew2Ms1TY4aufgWNYiqbBYX7YANA57hAsVrgDqUUaZzwN9xrNzkk8ugDrWgANTAgT2fXgPdz9DBssu",
  "key28": "2MX5f7buD4aqL6kRdisxBK6fUywBxAoXzkMYUtvkmnLXH36J2mek8BdJifJGMVzbUJeDyE1QRnmTac226YUubwUy",
  "key29": "61GZ1P1bGTbauwQxmruyG9zkrBRcto4nZis2ZNtNAn1StCNNWAXbyDNomu94w67p4BUvkSQSh5ZZ5U2aLzTnU48M",
  "key30": "48Fot1oipqnWobjq9JaYntTg5EJFyZkHef2ZZtgNE7QLStCiHPejUFjg7NWMkTPDujuPdTb37Rca4TxkPY4JSyff",
  "key31": "59wKRAYMn4AFdo18Xtsmhb8ff97oYwzh5R3V3qupexrhAEJZJw69GC9TkTDLqX7CnJsmT9CpYmEvhFfPKNiFLv3u",
  "key32": "2nJ51B1oScHg6Uj6xmyRZY4zYq3NEmbRn7fYJFSNTh8aj2FXoF9pX8FdcJrX9RaWXmc4Km1AjAh3ejLVrEXe5HZc",
  "key33": "jVzhoswptQeqrcBdQK9F5K7STJvmQY7rw198SPYkkxfCvToyENXR4wjS8pHzB5PXCFejLHBaPg4ikpcFo7haWQt",
  "key34": "32cwfg1JtURkrhgRRfDer6vrMyy1oGCt9FyXBhAh3C1D2nnPDyYrUNomGz4w3Zf46aP38dp1aWNRysT6atffBhwa",
  "key35": "49bgTA3TCszxBVh6JWfa2Kpn2GDgvogtTZhTkFaMqhf1FoWDECJ9DZkQDwGM7cnWGxJUkJ6iND78nzM7hDp6D8A4",
  "key36": "4Uit3ZWBKqreqSw2DzECEFrr8ezRPeNqJKsTwzweBmAy7YC2VBUoPerWQ2hDKktzARTZPEb583fP8HMpGdYsHYZc",
  "key37": "3vDdmXy4KqU2TpYcfnut8zrpDSEKTamq6D5xFLS4wfayZdUMLSKtnbNiap6kAM1naR1wuQh6zWfbwmBC3vEMAz2T",
  "key38": "525w9JQUGFbQnKZQt7vxTs9fCu6BnGCayzzR9dfVw9kdiNGjVMYzdy4ac3nSVmAVsk7gqMUTAjovjjZgrsz5UMPg",
  "key39": "3nLwFoey6Uqkh1hivzmkk9BxpFSPQRbx5ENVotfw2Km8JLomiG7uxgzAtz4hbnocaX34ooMiiLaH3ZFYQF3Drr4f",
  "key40": "5pnp4esjaCbSYxUrPTjuFJtVVSqw9yfw8tsTcn2DeCuVmNCiJsuTyjaBBQPtzdbPVwa7CxGgdhemv7eoUKicZmy2",
  "key41": "5ND8195c2ymm7iAFPvmLiERfV2nrr1oCagpKkUQkgMRhPgyxc6umbxFCSAc5HtuXCLMysCS3xYW38idhL6anpwWe",
  "key42": "44cT9tUKpaHZJoiSBiya4BuXmdsUrJJ1aVBRATsxuJaeEmQQPn3gf6RZAbB1Xx7pPgGxzPExQaTmm8pmB7xWd94r",
  "key43": "3Ek2GCbXStsv41cNdXUiKn4nZbcdmks6v4NdaM2apnSkLsdAfBGKLkC2817LMP3h6abXKRRYneAKNnhZugcEhnxg",
  "key44": "HfZTTQkbvpcPV7CBAg3khwpf2qBtSQivuGfDn61yuZZ7xeFyxoYrjpP4jNGAswxPhBSzJ1tPKuB6po7QR1w6Ax8",
  "key45": "5ALwua2e3pAGtGhbGsKA3qTutVVwQQkVsq9eyJc2ZgkeBow7X1GjtiTxdQvriUSfruZJXNEsYHASN9a7q1ET3bXP",
  "key46": "4WzzRY5bAyJcfzmPPn8ZXk73i5z5P1E7UzuppcFJFkTq4sqABTxn4obDMkZZtQ3QoUfNKcjUyFTkj74d6N6z8BEz",
  "key47": "5or15nr5igVxjjjJ2CzPdyvjH77Z9Z1TwALGehDsbsuMX6Z4z3nBnryka9Acv6PzzExtMHw1LSrWNFubsT2K2rLy",
  "key48": "ct1Z4FRvxeTTx92oga9sBK7kGtpxz4152JSf1YLdAuZEudG5z6uqN6TvaVEPpLJ1pgv3PogrTkkPsS7ygkgmbrJ"
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
