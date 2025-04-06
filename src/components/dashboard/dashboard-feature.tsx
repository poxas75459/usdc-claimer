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
    "4ue9gNP9ei3BSVW3EX2yhfhHKj3ascHBjbT6YB8wTbfC5tJfnwoG8tZyGSM7dgKfH6VZTyYsUDXP4tmJpsPGwYzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2onKyp3jc7tCgjDP7GJ1mD3A7tFqK8bZr4VCB2hTUyHWkGNWn77V43oEbLRPjNcn1zTh37nCaekaoPcmtFqYS1JZ",
  "key1": "5DHjsooXHg4PkPxjUMNuod4S5asxDbK7xq8z5PTAph6cxhUSTMMSEn6XMfrqmA3dTc6hqpgDKuDQ8LRhLs3e8v1F",
  "key2": "Qx4exigNE4YL87YNUp5rNWF9wqHZkgJeiaCgeLdYoTGaafTFAuQTVL7Ez6b1CpE9AH37ULoxEiboUJhKB6RdxA7",
  "key3": "4LcYmrB7cgvFLsbbo3HYH7DM1B5eL1aSFB6fXjLQa32TEJ7yaT4oFSkhfQSAsjXE4Hjb4gHgdK2FmL29SePMBCXS",
  "key4": "4M1WwRKpXMTzmom8BZSmKBEDtnoocrQu2chkyoqFJ5GHKZGK5KTNLetUJsXXKdUtgyEMX1n35M23fz8roRbz8jDn",
  "key5": "imdX4YPPaGQakzu2kiH3boePdvNubNyXwfJ8gAPhXUtRn58BhCoSEP2BBbrMV3f3HQzvP3AFNrJXjfJtGKP8S4n",
  "key6": "1vXf8iigsSrWQiDdRjXxfQ2ZBjW6iW17kDL7Y8LvcSfKEPFQwGMmjE2MCSfc53UhvK2ZQUzjxx95dqFqb5hLSbj",
  "key7": "3vNUpbbJiRp7Xt1NT6q5r8BpLWHwCLKj9EyjeNiPkiSEyibBFsvH6cY2cwDc5ScPU3aFShCK2exVMCTsfGXLNQJK",
  "key8": "65hkNQjvrEKf9hqvVpJqxqtcJeUCA4Za9HXM82TnSMW9TALKShFcMCThdigdK6FFS3yUt655roFvuuyvtEhbDHBw",
  "key9": "4K8krJgJKFZ1CeAmXMjutcPcZxZWGxBwabCaERoekG6G5FVcJms8CcPnpWxCvsbZ7wVk36e4uP2zEGKcJvdRCcFK",
  "key10": "5W6Lysu7fnoC48kndnpq2UvEaDuSEobjruiPhLfaqVBGPodhgQor8FgHhViumU8FHgnoMEQffsid9QGxKCiZ4Esq",
  "key11": "2XiXs9XAvbNSi6i5NvrWHxbQmFWdaM1mqSakAr1MbaorBP7kHBBxLEEMwFZDjHcuGPtogBivdij2wJCpcCVDBYW9",
  "key12": "67ddZgbtGHoHPox6ByWjxaZpZKYoHiRwmVLxaPMJ48K9jhAt6s3t4mA1UTnWSzDc8sZ862vopYmG4oADKRMuP3ZP",
  "key13": "r4pXovpRSnLhdshVd5Dmy3SWGcDQ2Z1GVHkEVmb3b2Ce57vrgrdfRxYyJEFM6UgrJa31oc23TisDHvoxyE4yrip",
  "key14": "4PEam7AaTrzgjP6p4EXswrcDSgg1r7cMTYoZANfqREZSN11A87wUcKenNPWQs9KQfrojjVwUZXC2WTxahGoo2Pnj",
  "key15": "3YwtdQ9Wx5mxRV3VsBLuHBS1JDB1EiCVcPN57vHwoepJteK36CzxkdNY4UVJo4wAnCDqDamVXaBtJKe7XFv1tHBR",
  "key16": "3QRq23u63Wx7FiThsMGn9jMRakpcc1UwwoePDgkHzrqAaP6463ewvxZyrK4Ye3XGyWxJnp2EdnnhEGZ5adN5Hpop",
  "key17": "289nChF69XWz53bdMJkBHdsz1frH9PwkJX8srGJVqHAdDCK92w6inVqDjiUcDhhtaCE6fDp14RrMmFKZ2ShMEEqH",
  "key18": "5T5MDvZcqk7T8yBg2X1ZzaQpMTncbYi3SyYsceH3eHJJVt8gnP58xGP2hqYfHYfiZjcCLTZbquuFADihTcobM84i",
  "key19": "2kJFZLR3ycjKV2UMCR2JkaRDKeyRbzTnMc5rZ6SFUeyYUTmTxJJAJTD2hdinVSRHcXLEU4XUKJPAvN9dzqhSTcat",
  "key20": "5EGHjQknocKHZAtcd4G23aWtYScdAp5JabFMLhAkWzcZPpti4Lud8DmH1L6MWM4fLXk8FeVbcdL5WoBkPsCVHA9g",
  "key21": "5JM1c9bcb9YCyeVdSUbrtvf1EtanMUQ8mtvCLZSeawkaUCbL5nXeT1muBhHevNrk19Q1PHXX1xZhTcMfYftcNQ1y",
  "key22": "41kQaCDE5qE4vau6nuPdzFmNp86TS9ZLnzEw5SkKSH8M8DdNqqYinqNUgsWBhLCUR4EV4EQtSuGYGGF9R3PJ5kU9",
  "key23": "QKZVEKXebvs7SXyeAheVF36HwTGK8Qdh4CXup3DdyRzHQZxafyLmncoYSt4kECFJ75XJP4qf3ihLExiwf1rCpuW",
  "key24": "gJ1wCV73mL4A26WFXpfs5bSbT63cmqbJRo2DEg6Tkt85HTnGhUygESkvFtNHXGZcJz9jsWkRZR2jeiu1DAUFQBU",
  "key25": "U8v8NTk6PXzZ4QPGHSURh4wzREE9i1MgVNwQkJg6yN9JsXiJDZLj9rMGGnAcsrTPZsLPPXLmiXjvCStggqX3pxy",
  "key26": "4YqeyPPwdDgb9LqDwKQRinpxaXM9WJ3cLSFaF19tBr85ZXoyoNp4RjZxsb1poF14EWYiZ5ThvLKVEeuB8zNMramt",
  "key27": "4Y4FgwK3xVCrHyqfJYwjran64wrNFfJqaePWdK51DpJdm67rJSn152S7SiV69bkTL4nwdEym6EoEm9H1Kds4sefk",
  "key28": "5iFnHoqCM2v9nFnLPNyY6HPQ6B1vCTzb8CvKs7PBRba3aW9jYMRsCiNWN6eoWS9z2EPbQUpZ1XhwWk4ravZfo4CF",
  "key29": "tJ3mJ38FV7npXX2XbbtbTMoKGENH6hZiPNg7ts2UBtCLfkuoGogto9qVytme42318Lw9ihwAs8E4NX8y3jsRYxL",
  "key30": "45KummUk89gvBjexMPUPRVaPn1sesyGjczgoDUw3WsJAJ4yprs3jgL3E9W6ia7W4YsVTZfbutyi5FrpEDpdLYezS",
  "key31": "4E6KAaqVownsB9U2ESQgXDUD6TgueHYst8gz9E3YNKZkdLbv9LRnJrgYu6VGLS6GSvcVygAzo6JHAJJzuNRvfWpm",
  "key32": "3mEU1NZR9g1SNuvqSkWkdFuTiPYXNFeDuLbWPNup7tXVNX86cAdaGSsrPpS2rRuQ2unf6tbSXrbcWm8CJwEp1SuY",
  "key33": "4Q8zUzcPXng5NEyQ6T9VKtVzeKhp3ifAepn2citGZpmwgP7Trwhh1EtYsRdedghArgTjVRY6Y9rt3gWovYCVQ6uV",
  "key34": "32b3GZA7V73NahNosYsUVyxCFbceKDZKZoohuxXyiQTP9KtcwWVajBMbnh7UP95wPQexzv5z8aFiHBobZ1KWVWQa",
  "key35": "3G5jP9fyHPMcPYcqUi8k6oaaB8Uyf53s1fSQFD87VVUX45jsMLpSf16TAkFamD7y9opcbgtmYaKkBC4GuCwhjEv8",
  "key36": "54wndiw7ysRcuN979zjdC2fsrvxxiijS4LhdEBvV6KNv6RrGgEAYmHYy33mN1TufeZE7CVD9xw1PzAZ3jaAjPXhg",
  "key37": "5GMw6wrCRoU9fXtTXnNpvR4gBvGjNDoEkYe7VQTCLtY78YLaNE7whT4RzZ1BzZs7Y1WDoxbtm1B5bo5YD1kHmvRq"
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
