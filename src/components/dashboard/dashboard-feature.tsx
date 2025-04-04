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
    "4HCpJ8hZdFg7MRkEs1bCEhEgrKvrAJpy6Pyr7DTijDVg62VhL9DHAwayz7aUq23GJSB5CSBUs44qsjgzsWL9GqYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CoM44B543f8WFkTxt9DWSo2132ihakxYS25QUP5hwaSpkUifAMAmn9qQpK7Hc5s3eKNyNQfd9tevgQUFwLmRUvP",
  "key1": "2EazNYE5zxoJVSCZthGZsuHa9eysGy9qaaS7ceiVtB92p7kkuGJQndUVvDUJESQ9nEWbFLhoYv5veckE5UPFGg53",
  "key2": "26QvgfB8C5JvLYiHnQtqpYP9EshSqJvFi826kfb59z8NoWVqCxxctARCZpGxsHx5nsFN6fUH4VX9sLBwDJcBi4aM",
  "key3": "qGvcHirr4FNSHtZUWgwMyYaVua1habSxqqHrsdDjA3fv7okTcGcMiG1dMKAAvZvwphyvVUVm4Cv5sAigqczfH1E",
  "key4": "25238vyKa3YPgrJ9h4x2MAgiFwtLrnYj7JyyHBfLFFYfmukBNXi5ER1KWwLkENJ2CcpP6WTmEC47ToxMyYJjqtLk",
  "key5": "2LhSPdRMK8otPime5ffRjreHQS97vMGkF2ahmqGpsERJyXbKRTGJV5oYu5KDESdypPG6BX6rSRc17QhwuLzrbdsg",
  "key6": "48ctVHv5sSc6PyrM1SKVifhfEHpH9BPzpdsrt6HsxwktNAsXMQt6RoPFjcfiwLEDodsmtdp5KZioocv8iisgDHmL",
  "key7": "3zioMpvCGmNQGQPmST3bY7fvQZrLShpKhWpMpHFUKydBS5GFUAETV45XGGYPfREM6ThJAU8W7Dx42LM25aTafFFk",
  "key8": "4QZdZXkW16WwSsP385y5jx3qtvZHRCYv5b7fJJHM2uHoq82Eq4WcYUtgYrPR1sKRdo457Keors4XJkDy1ZgFhDim",
  "key9": "4juqvuV8FbE5AkoLXTy43cGkkMHGk2qSXzCA5HxAVmNfpSxYyzQio5qQzeX8B2TmDk7h36rEUPTjjB3T3JiwFFs7",
  "key10": "5T6WVQ4YaQ3DQhs7yfEEaqQUQd9PkahMNjkYqcfMZ9PYs1JE4HB11in4aiTBnoau7xNoXDrNbiUkuaK2YXzXgTMX",
  "key11": "37CeeHZejBpijynsHf6aSVG3DSbkfdKi8MupaW3KedmEvwikpP9kRweEkcokMSfdbiF1QDvJHMAdKgWtxJUStNpg",
  "key12": "4vuanprjBD9qZBrz7QvrXKddx6RT1TULSeNo73JzDkpQaWAqsU5WdScSJxV3SHqp6v6Sr8TofNAS8ccYefoM4bp5",
  "key13": "3bwksH1fUz99trovZqMGCkVp639nLXe7jBsHbMRPMPq137xJgQDAZZL6s5Us6NfkVXV3KZTRFHZJ9StTsWoG1gww",
  "key14": "3P5YPDEwSpfsVBjkPEVpmYfq2QM55g2cmWoWqGVJGLbHvZSqx6mCZ5a5LZcbYJounHgsnRyj2ccoEDNbjV4F1aF9",
  "key15": "3ZcM9SQvuDN327Z6E4nohKaoEDP2JLcrUDP8harim34xMiexWpTBBWNVqDh8StVNKrHpE3MP6h8Zmy4haYcrxmTR",
  "key16": "2LmkD7qf8Gto1u3vfbxihfZf19mBTwXeUGi4g1sEC9bbkT6Jae7p4fhT9YWXpsUTW3ArTeDEwqV1GksgJq3i5vjp",
  "key17": "4RcvCj2KeWbCw6CsvNmNLZrxfuuAZNdfWLunjc7dKNn6ruRmoGV7n8cyLyXzTCavXDW6jjKiZikMMZTxXcuz21xz",
  "key18": "3xiE8soZGVu6JVoHUy44SjXx1wB1ehNkRsqG8kvT2oHSJpQp8BekXMQFPAX1E4UjQLjVpD3M4b4GxL9Rr1H9iy4B",
  "key19": "5HLmC1w1gukvPd2vJJxQTMudd2LPeiMfj1QdceE5HRH1ZrY6WKLgwChG1CCf19pRmSNo4BXzyutpKU431hQvU6V9",
  "key20": "5bCSa2T5wbBh5dhRwyQmv3N6WLz2R9bUy6HcWqezNHXKRwvjVwLC2ehmcVhJ8hy5z1Vpgh4BbZt6dUnibLhYktdK",
  "key21": "4CvN2Aem1bUm1iztgxm39yu78kvFtB1v9sY1zTmRqazwnjnLNdRZyubFxUn6o3LzgzhzPdcs5oLpPipzwdkTZTAM",
  "key22": "5aSHWjXgpByexNZ4T2NyPGPfsbRcZuX7uEQ9d57A5xNjcXWdLD5eXUpKuWjiE4HrFsD5WXfbqExoiQLkPqT7QgVi",
  "key23": "5Gmcpk1nAedS25dkwoz79A3TUE7X9ExJVpzqR9vPya3dr9i9RvySkyo7KkzdJAWjkfwY2Dg9XFytfSQzLfnEhUkL",
  "key24": "5THzmh7qJKqeb1jS1dahm81ohLiWrBD7ohq4ounUN67Toy18NwQy4uans7XqhGdYMHkTtnxifbtPjjXNuHfbczkE",
  "key25": "5PjmHfBnafebBSkLN1hrpvhwkeEiks3NipsRQ8ApEdhdjoA97cEKXMCtVLNmkg68uC2w4KJfXDbgu2d142DVJaHE",
  "key26": "22D12tdoSnLnE7zfPQr1SkyMxpABCHMo52tGVc2kEUsxdic9Rpzfvc4UwiHAS9zfn3ACqXT1GEzT2JcNNufm8Cxx",
  "key27": "35afaRHrKjNWNWdRupALaTScxazRbB8vrQP1Wncj8q3NpX4PNWMZF6zTtvEnbm3payikeZAUGoSWrT1FMSJwYyUi",
  "key28": "qL7aQGfUxVAwyVoG4vuvWMk2mojCszF5ZzyewFD91V89gf9HXEb8HMPmbVQ79uqdBTTPogi9ddfgiyFx3f3e27o",
  "key29": "2Fz3KAJfhi8QX5cTMNJJHP4qHX4WgYdqJwCeR8AqxK1e65kTZoZcGa8hRhJmGbj6AEwYyJNZaTVZkKsa84a4riPB",
  "key30": "33ZWrMX2e2mhU4fW34UWHKK6rUYBaDfK4ZKkCn4VM1tS7Ktiuen5PtFMmZDJ87z2EedYJXat8jd5Y8x3yJHqL1qC",
  "key31": "5aPenmR19baXpLMQGzDToa7iiCEFCmJs3KKYTc6a5XTkFu6eX5MfsK5YnBnvQd9itTHvCVpa1zK6pKT88woFXkPb",
  "key32": "5ZSYkJgSiBJ8gHWzL3ZMGgqDdprXKXSoahvC7unwkEdJ5HSzKwB4ML4ndqeKnJ1zFX37M6mNkZVxg7PY9buPNCVn",
  "key33": "3xAodYTYrQvsE4R3hooRXtJ1cBfyTrJ3fqxBHdnQN4qY9xns1z6RT56PVJbYJRXRsaL1416yBySw4RLKKjUQetHd",
  "key34": "XggtCysRTu3cFk6fybhMCceGW4W7HEeCGtzP9z3rTYvY3Q1UknLA7jznKkpvTyZybtm4QbA96NaVXQHMdgVj9Af",
  "key35": "3PmHJXXFvjzeaFX4e7zrVHM2B9pQ9nou9HGM3TE5jZqEiVFjMHpcmu6HKCodkrvTtUDzGTWRLM95meEqSvh25N36",
  "key36": "4RyYCXCKWLE71aZ2no7866QtgPTMbFKcU2BF94khpKuns7mni4Eczu5rPX2i8FEbEA9wXV8bbr1QMz49uXSK8vb6",
  "key37": "3P2iRFuQz3o4XEKdhuWHBNQ1YczySkuP7Wqs9sAXt7UTVDX1E3ZdaAFx3TpYq6qWxeVbiLm9MH9D6sMLAJPTCiF5",
  "key38": "3Qe4z63gzUW1wZL1wTxfzfNLC1ofTWkkGJcyypjujkj7rZqfA5yiBCYkarLns9UcT8uPkiqQR2oTqjWczs9NomYP",
  "key39": "3DZ8dJ2cmuEPWYGjjC6Gionhh7pt2rywMqEP7a1sga8Uyzshtq9W3zhtqxj5zYty1JSGtwaQT2yHtXFiuZGtqff",
  "key40": "2iUZ8TnwBPYKp6NqcPbu7GZaZZHueU2LaLwxPrU4ktspKqthgBDJ8tYTYTg9dy5kYJ2ud6KbkJfFB42P4e9MVtKN",
  "key41": "5AQZyhbZ6nRbu4N6i1FXTLMFsAZzvacxbNyFCrHADPPgpzDyHg8rb6r8jGqGJdyENegDsfo7iQLUPzCbBp6J4S5B",
  "key42": "2VYpKJXWSxWRPwDZHQmxRz8oDFEd1qcBKmrZeLehwW5xtLjdqZwBZyeZiQMZ1r17QPhFtRnm3in11zygUxUSkGW4",
  "key43": "4hPtXTbXvde2YGkoNN5tK5ekPscYLGpwtSxgMV58qaHwCP8pFSXpvZ2QuF4JMaxN5PuCDs7sGD3q4JAMjcNsbj67",
  "key44": "2WbGgisiefby1PeHEbTuuvMhLzS9sjTmtddKBGbpyoZFXAyKVdQxEcyS1mXeu5QHzo61QbkjHwzEP4s4h92uLkc5",
  "key45": "29nqQ6kSekYigtaBkFHcc4TDvthffLGjmLzgSiokCu7AiKGP443F4YwZGYsdfj14WiNAw2Qo6RSm3Es27i9yqReZ",
  "key46": "3dGY8SCvWyPNBFV4ZVfBzWHhepeoqYNfTqQ3PmdSke2GEhMrbNv1mEUVCqTgPiVdmUBRFhdnK8yeN3KFLNUMeiVb",
  "key47": "2kayC7BhdTaCknQRk5XEizBw76TgW6cXMGEP9YQcBzisdfxW9W8opZrmsmpXnr4dARArzsAQiLxBj74QLhvm9g6m",
  "key48": "5rMjaPBhDfyc3rTdysexkgkRrswoiBbdgZkNJdY4jowGzCW1uKk78Tj4gfmmrFURHRBEihhvX9oGK8Pz22e7BLNp",
  "key49": "5gxSiKMZy7ox6sVKTFyU761CmxYqdPMpzYtiCUcbGAzMXDqSkWmYjGMq3dmsupAVhTDTWzgpUk1osDwM7ufAgzJt"
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
