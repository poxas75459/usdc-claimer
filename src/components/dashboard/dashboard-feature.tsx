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
    "5UjwWqTpczFCeutMc2EBACYLPYJY3wngac44irPqMXiP73kYu764VtyoBdanPZ633t2N96FcU3G51MhcWDNkCL6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DabfjUN5a5MZ3QuLvkq3rDyYc5yGrYSvpWHQkPJZtdmnnD4PZ19qH4Fv27dviGZK5vDeRhuDpkUeShW1mYJV2Lr",
  "key1": "5QWaRkKPbP879awXcQNwp4NkZaHQvp9ZkVBdb2phQB66tEaMXMFCFyfdhvcfyioDv9cuXRKzFdsPQdSa7Vmh1PE1",
  "key2": "5r4RTxMckhDhrXMQ94Ben57ThKJBVtCcpuxxKS91mJez3pYR3fg5twY4CidTTBuWgxQqpuf57EayM3Yki8WqtAbD",
  "key3": "4UufwgggBtk1utH8FUeTTcasHPZEJYfdimrFXeFJhrViWLxWDAcYhw2pYRZ82QHdKobqrwykm3ApLXPwZ8erBkBQ",
  "key4": "2pC31b7JbLkut26K8avYdCQ5ib4Dwod5X61VFJcN3HbvjrtybABfoDxaX2es9F3cr8Xbsu21c53VzU9iRhYSDBx3",
  "key5": "3dykfS3eQZJXfc4FVGaeZWdHsmYXm6BoCGRHSUgh7YHEnsKnyggkj1CVkNfioYBVsXGgTYcxQzcGb2LF7QdeA2oH",
  "key6": "4jgVG9HKoANeF4fisSbju2BxjH6QpP1uSx2kdy7gDinAw3xZ4KcWT2Roa5mVRN9R7qNq2jVWTh7URuReTyPH4e9",
  "key7": "3SEVYfK3o9AX9tgX8NLGTdWqiVX1nGoYhEmVE8noqCM4tvtWnbkzabrJCtuJh8wnNpGUPzDpjABDCuvBZQ1oi7fR",
  "key8": "5rAkW65XEs8ioV2JE3ScVreCGBSPU1jehbaqw7wJ4xCRqvFpfvf4hieZ6ne87qYbsCDtKkwciXQYxDGeY8t21ira",
  "key9": "5wyhWa5wMCqBc1q8YvxD7fpUYjSRjP1hsETE3kmKo4xJqDQmbFUdQA5mAGM67duhx6gztstPKKLiqJZyDkM6yAGy",
  "key10": "3Wp6XyXG6hintbCARzH1r5iLxvxQij7ayu5S1RTMm7YoWCkDD63nh28TWr8aURqwR4nv7Ypf954rZ3tunvYJM7E4",
  "key11": "23Wa95xkCwrEjo1r1GisYxWZMsv7g7AQW5qJ8Lc1dbZtEHkmLBoSzx3FtGUTZWAz7s3KrUe5YihBmtwxa1kSfDgN",
  "key12": "3s7rTGW2oPZWyorXPBiDXGU365fZvYNgq16JKB884HpzmjWmFEPCQzsnaKHncbsAPsdjoKgSvQbyPwJtbvy2xoYm",
  "key13": "5vLA4e8pYT71jvo8n76Y6mbJVRiq9wp1PFvcje4rd2g7tT2w3nmxUKps4hMhVDrUcGUewfN8Fk73WJCeAKfKqfqv",
  "key14": "4S4JKsVUFNvb22LB35aMfZbtSPh3vofVvXyQNYghqfzNXb7d8RHS9jzoSCAFrRZGXA8NGqmxUQsMYkt1gUzeXBSZ",
  "key15": "adKeVfSEo7Qc7rh2fPNBiyXaPTxs3WpVeZpwQWC25hJLwQYH3inwzFLD7AmAKGEJ7tfbD43DeEhgVhdETdi5rsj",
  "key16": "2r3tXSFa3mAZtUu6kcJfcoyAALFHwJv5g3RTvQi8zD8Zgbbq1Vah5YnWK9gLqKZp8gBaoHoKjyLAk7D4m1watndC",
  "key17": "3LwWLGjqnVi7UKuqomA3hiHxNczQudH8s4UUowwkZuQmJdGGwtpbmWpTYG2xzM2BH4DdoMx4D36PN7CDQGBFvLjh",
  "key18": "4QsR19L3xnpeGzVpfXcoqXEn3wHNLL1wu7a4Ls5BwJhq3oopUH2KQg7Z6MgdTzcpFjFJ69Avwv3WJVGef2CcsdEr",
  "key19": "5shZSN1khMv9rZScy5ojmCreeLgao9fDr5P3mWMP6iiPhtNjjGoBLPxBkFScxmtp7X3cNnKzthFuKDQenoBSiwwi",
  "key20": "4tapm73xNPN4Ru3EDUti791gio6ojP4iLSoJVbh4qzdgwPNKTTSpHnP8rPuyiSpF1KBYTMymp5DCQ2B9HQp5SN75",
  "key21": "vrjMNcMnEQyBarxMxRsPTG3QCAFdJN7mdgSWgoq5WXyNforcLepRWMEPrj3vKDkLFmvhR6AdsdLdh6qgCiNo4DR",
  "key22": "2hqQSakHqCKAcvYXCk233jmoY6xv4kcdcdM7LwVJByEPpad3LakEkm8qB8oSJFCeugbdr3f1FFjGNDStFW16ZnHb",
  "key23": "2FwoYphFUdRzPWCd6mJjbERniDgcWYfCeRbFwNPw1dxzEH6MTesakmR6EG8Lm7kTYQyMheHf1VQb24FRGktNeseK",
  "key24": "5o1hsd8bnj9cLCbUZeVjPgWr3bWM9AuSeNXf1xVFZPHTGmM2uF54tSZ2MQLmGZHAPAYHcud3zbG9T7Czf2utKN4F",
  "key25": "1pbZxJnfLNUiXhkZTW9NVxrHxADjnjKjcF2uDmfv9ndHEim6hLsB6dfpvHZrQaqCQ6x37216uTMDehbDfPPdEmT",
  "key26": "2JgjXQvWWeVEszzretJaT7wxoGpXKkYEHh55aNpdmfhXbvML1dEronsgYGQ6yk2qWD8VppWRNUKuFhUP5hgrSKh5",
  "key27": "4PLKSSbk3QKJASZSKXx5fTXpBTodrQcGshBaPnYxJKzSJmef1PFKNqWn2XUKKCQqU6Bj1zv5eCPgWrc7JHgKNEc4",
  "key28": "3Sfe5LkVBfnmoTMzAd4DuX3y62QveCd3ufSy96KFkEsim1znW1UsMhsWsezNxFmpaujb36qP3R4Jo5rnHzhkt6xj",
  "key29": "5SeqbUVDbbUiUjbHJ7CY8KPfBmYJxA22fYpqUCYTyTfvcMvcPGt4GWFKWzmAmm7aDHfNKJ1zKuTcXAYfKC8etozo",
  "key30": "2nksW8n2EY73WumpqXHLFpd7fAM6QtEo6cWiRTj5B96HWfnNUKCmxfRS95APRb5DBV6Pj9YBJJyJrkePMP7tsHr",
  "key31": "Cr71sBRM4kj6iUSwmEDAgjr8uuJHcpajUckbcivGDTBJQpCbyYPmbhWYeACCSQpww7snJ2WiKPJW8mv5VPDD7iW",
  "key32": "4o1yiNtMmuHHeAFBSkfkBgwoKtskXTmG4Ut1YkG6To8jjKvQjxurbgBGTxJqtqxR8qXFP683xFeG5RyMm7adXV7N",
  "key33": "5CqEThXU1tVPcVWUZ5MVfW8mR9UHioSRtTvZjMpmYYx3sUXj9nPX8KnkJaxHiz1rccHJtMitX2wxi2rw1qwTBabp",
  "key34": "3tf3DYzeXf1cVd9ieDUehFKuU7GNmfzeRLQdghh5MQgM2aBgefs33SH26mHRGEuuh3wHo4rbAbEmCUqcxUs4gJXH",
  "key35": "2L8L66cHknmHxnJsrV1Ln3Y3mx35SmFdYGMFFP141rjVyDuZ1q9YKtDu9ySz3Mrc8TNYXv2kidbA8jQ16e7LH7dB",
  "key36": "5jMFzxvPJ9Drm7qWgBMjJ5VttgzXadBxGpgAAjdQxPqVMswkMqpH5wPYMpDYkv6vCNcFRn7DAbd7pwzxrjbEt7W7",
  "key37": "5EWSDe5fuM8YhWL45smPMCUzcNikDaBUG1iQER8wYozUc2wK1tM9no59kg6ERb2QBbA9Cn5XsKqMwixPrJvyPsyo",
  "key38": "3PeRSKXs5ayEy7AZpF5t1ofJgrAFJTZSqLMQDkeSkskcLaGBQNfuYgNYCAazSjp1WGLBbpwBPhEAffBqzNw4cbut",
  "key39": "2KKuA5F9G5UMgaUT8bosMhRtxmnhU7MDhbJzfhXmb83ZUNbVmbYeqtY3pDSkPbLF6z3bdap43hLdUrnbemPDMgUD",
  "key40": "4XuSUFStsphRo1HYRxZFLJTNAuEWDAUPjnzfLpC8aSfehGkPqnbrocawsUQ29NyTvpmHNH4sfyfCmamG83TTXvn2",
  "key41": "3EKKLDaKVEvd1k6q7UpVJLGRDtD9xQL5cXzvEX4APpXjb1eVjRXvPDqMjJb1pjvexSgUgC8XMoiAyouNe28mXQTX",
  "key42": "5eCma8AFfotwpszp714X3CXVUTi8GZz4o3VEvSZXTZ2KQWSvU9okUFyVYc2jyVyJTwt2qZZg9DeEVAYZJAAu4gtA",
  "key43": "3wpo4Y42x8NEPhesYRyXJnkQz2hYaV6pyEdaKTwWubhFq4Z2Md9kLwsKr85SXYYoUDG9RzT51fAr8hXtFobzGyyS",
  "key44": "3Wq2AL8jBwrtr1HnbDMYh3anEqYnSbHSY91zucGB9sTfUkULYvbLyMk5aPRv8iYrhPxN5KDLaKpaZF8LHdnQE9dn",
  "key45": "5iiG2GXRJ9WfPczEXZGZ3mE6dj4Mu1mZZzogQY3JorvrdD3PoqjoEYrQYK5SZWxmyB6HPqFP1o2WNDfpcUPLA6dU",
  "key46": "4mhcoi6ymGQNZAG5S9DBTpGesTxg7SiFp5eGrSdqerQBDHxnHXLKDdS6XQyta1oMtUEmpDbfJNwRWzZsxajJfp3s",
  "key47": "5k46QLxuE2hxoHEQDgy9hYZQCJZPsrSGsTqR9eutkzaMMz471ErvFQ74eeXP1RTjoX5JaaxmnAX65PT5TjAjxkuE",
  "key48": "3SPMrNxxWsp7mYceWeL6qK5TKTvdd4769KSCuuyPe9uzQ22v9ZfGcbKeWPRKE79SGenUZMmALgnAr3tMQtry3WpR"
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
