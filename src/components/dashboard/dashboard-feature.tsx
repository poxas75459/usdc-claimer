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
    "4GtCv4d7WCMmPrNFvn5FgZ57ExwRsi4DAddc6o9ZNBXf5Z6xvcZuy4omcxkbk9tBzy9956xe6C4YqkSwUkfFtQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "265LdoMsGkxPreXtGURgaimrnph9aNAaLJK9xaL54rAkxN7YDy3UcFSGrvSpeXs4fF3o9614xbB428Qze6SFiVWv",
  "key1": "3KSsVAi4MDXEAGmBfrUrvYnXDB9yYSBVp59hw8qpXpUwrgtzuHexipgn1banGyFQWb64NguW42rrMz4btKh4cMi4",
  "key2": "562Qu288FiPWoXUqRwcSWR8XWN2yXJzoAMJ5RnhjhtLW5fYP98Wfcc9nsKu8zxgXj36cMvqZ9eXNPpff2Mgx5N8i",
  "key3": "4X4z6GdTe5423FcXnVK21tSpwR9L66fHz8FTW2Kd57Fsby7GL9hh6Pd9Q34BHnaRk5MaAUhGusbXwcCaSfAm7eWG",
  "key4": "YVfEgv96SVa5LmTZWLEBQzFLf3PMUiuPqQ4KpfPkFEHxYwbdsmzXGrgFtBxhBEGy8sGU1Y1TuLF9CBPBoKpuj2P",
  "key5": "3h3NC1txLFUXwsr2RY8e42E68vMVy5pdegi7DEvRNAwcYBDZWzuALK4Jk6qw516xLeWARRJp21B4CN7CUkravFED",
  "key6": "Wp6KxshHHHyLP48r218n3UUSxRFb91ExfC5m7H6gUXysW3Mg7QUwaMxd15YRXSKPuXnaoWbSM8kdJxsA2hFQu6a",
  "key7": "5YJrpodmEG31LXfUqsPTpUnap5dbfL2TuxTjEi1xocr4UNibbABBDVsaHhDMPuaDtTW6v4VBSSfWU9HmWtmz8XFn",
  "key8": "3f6jD66nrzEBGzYYzZTo7EgFEXCZe7x2pPeMsFjiDGhCsZGzb8SRNECnid5cw1G1mGSKyCQ6c5YaVTHoQd5GUEME",
  "key9": "4DQaYTgpnUWFPTsUFbmBVH1Mvu2CsDgHbscRwB5PT5BZHQAVrW4hGBAP14qdC7borjr8HPFsbparvJNWBfieJdix",
  "key10": "4FCGXHxnzjFooazhHpzdh3VPKc2SNfRBnSEujYChVZhix5sL3YtBi5MymVxH8t8E6w3bTvAGh4JneZoJ2o7ayGtZ",
  "key11": "GrEc8oqRitNn3qr4tqwxq92YrCvU5JxS1Cu3EHMCKywFpNztHM9cLYBQFY6h1p1c7M1eQUCjeL5LJ3BbSB72159",
  "key12": "4wKAHpaNhyKdKdB6Hv1V3LDDnxyFz1smq2MeWBwhaCBSGSfWv5R3p5ab3zGcYDMD5KtxMUzauDPbsEcfdjMpANPi",
  "key13": "2xAM2ZiTENUaSe7dHSZphpe3GbN8B13KRKGvZhr7KiG7c5YoyBs9i5BwqF8UwgUwA1H8TpDPzWupccSnx2MgMAqD",
  "key14": "3JTmuBUGcebE7v4HEbJuso6tmnnMyyDPFG1U4kfYn6Y34nb3VyoXb47rgLsHHZpAAmvT39BnRuB82PsxpTowwXxV",
  "key15": "4deKpc4XRFJ9MLz63QrfYkcXZG4KAZ8outhfck5ZKR56at68HAc654WBAKRfSqBp5TuDqn6GgSJHuMTvdotmWW16",
  "key16": "5UWv6YcqYw9BGZWAwpND93bhPufJdBH54kTWmP8TkA7QCTN9uzu65x6uXCkcQibK7xqeh1jjMkUjyH8PZgdkywUp",
  "key17": "HoApxaBhzccYjw5oXzKhunw88NybhTmUsqwgMSdQ9WKqrtyLH3ijpVXsRF3hCYwbMiX3cLzPyyECAjss6ammQN8",
  "key18": "37W7CAcBvys3pqzZWJ3vzSfmHRZpxvjoQnmT3SXuJGaz19fChjYmb6U5i6yHUnXnSUUDN7bZVieZBVFrxeyYmkbp",
  "key19": "2XBTPaA8KxHNDVGYyLaLMFdxJRKXCaCvPf2Ah7XjiQLCE3PPmFGmsbqgtdb3A3uYPbhK6st8Px6G1UE8fGdcShHe",
  "key20": "zCAYHdDGSmfQZ7Jrd4UKgAQW3r5igE6RpChCrtmEZyBMTxshThHX4s4Fv8Crj8XzT1cdNiCmtTP4mxjnUsrSxaY",
  "key21": "4EcCERw3LYcd3QWWH5QHWAb9NWJu2QbP7ViLxuzrY93RK8RZ4gaUbXQG9dLYsdEkiiT7nhU7LsVdyr6pSB86Bfht",
  "key22": "9suwvpfKmRsAarxuEUcdgTEyjhkCAr1rrpriM9rdSFa4sDQ3r5dTBxoaiJTviGFzrWXqQNrM75spJmGe5HWBsTB",
  "key23": "58RJRAEdwhqCgHBpEaYYudF3DULPUEQLFuzHwsAdxLAAKjfxwm3FyxyVcDxnWAcEFCNVsK2oAXmu8BZHtGYDwAi1",
  "key24": "4RmYwDThy8B1JANh1LzhJZRjxAH6XuWtAswRZGMx2JiyweuvRaCwostRjzQjQ6uwLskRaYnQ6LfyKBer1tYf99iw",
  "key25": "61b44waeQYP9dCb1x3Z65FqayUftZZ6af1YeUtX5UUKMTscTxttEG5zoSF8m3dcpF1snVgV88YFk15AZ5tdDv3bS",
  "key26": "4F61n747iFgFRktxKtXG47fu13hZAjVr1A9K4Zy1ZNppXH4GbKf4fEdah4XkMjpVE2dcqYLbFZDti8XhMhKSkAnB",
  "key27": "VbbPNibwobvq1BSpHRqfz2LRvufQ3jb6S25FxLThhcVTBJBn1X42Ewh65UM9FN9RHz9hrn7oPdCWUNEr8JNMfz4",
  "key28": "4NHg6YMk6kbeQoLXJnQxjmqHNLb7QDStnKwn7CxzWuit3FEHMPFSMUQguQdaDk36VLht5BkCHxvu2e64GJMHzTSh",
  "key29": "33UBHfzaCNYt2N9qk4BGhKqdmbv4RLNUg37qKpmzWfQFx76HnjhQmBianLtoKat71LmcRTXoj6Tabdo7toJkD5oy",
  "key30": "4zvbnqQmUMURBC128xG4aQErJicp6Wc8jqifNYSC4Yjm67pUJbToPkvLhy7T2gyxQ5vsvKkgPzd65akRn8jqJgcx",
  "key31": "47Q7iCEn2TBanz5RCn5ALJrKP3fsJkd1nGWPDHfDBJpEaVmRY1QtKibezsnRWA4BtyRN6gJn1bojdDbJtbm6VoSc",
  "key32": "2QBqjhNvtzkxUFzAUWMC7tT1FZUPPRUYbkQzLV7DRMAQDhwLKgMMphgfiCGjWKAe3TTx2qM6eca5QDoSxZeSQQkd",
  "key33": "2bCvmiouSK9jGfjDqpN4jQ1owUX2L8JNvThYR1PXNJAVaJ5x6ZfLahX4mwWdTLa7M2CA6HypY2Gymw9Em4AwZR4b",
  "key34": "3HeKX8vFTc4J2ugKesXZkM8CVnxViofhSs9aCy5pC9fyqxqYijXHdkQxnLzAM2veV49cxiWkRcDPeHmhaepNxVum",
  "key35": "4bDXpGomRoWwC7gA8G7JLYkvdSBMSKmimytmyUCGnCr3ULYeWzQ5fiTT7HucDUcu2SNoRd5VwT5Wb6T3oPiAXD4Z",
  "key36": "5NihSCnu2AxTopSVBrVctBBp9MSXrA1WGSzKxsWMTEQkwj3yKE5PStQu4HPBhuZCmjtBwBM7ncWZSp6QmRc9xsFi",
  "key37": "4kU5YuVoqtxyrVhRh5Moddvwq4z4z7PAiUVnd1Hmq5cpZiUcRLsZy7epPDG1Uhe8TeNDFT2LKJmgjMh1xDkiUnc6",
  "key38": "2Pooa6sMLQYVBTkmK5MEKTDDDC1fQAHaHM4UxQHZE5ZaVmYb55UUPCEFsE9vpxWRSvNPsg7EkJSSnLEsEeDbwUoo",
  "key39": "3ywM359BwJfYsuEaZec275qEUhLWRfoLEyDwp7jh9vWbXrshHYcJja877K2cTjWu2kQqBuSyPZ4JD31ULFaJ45Va",
  "key40": "4GkzepJBtpk162n2ui13hQ4x5QLXpJrMNKyF8KByNCuhqenCTyKjXEKQNNpNZYRKbcwKTxk9yPi5FmzCL9i6CaZ5",
  "key41": "2aSB1Yi231q4rb3WSyXyS29nr3jcYCSNRi8WPcXkmf377EKv56aBWpR3brf39g28yQH6E1VDFRWWyMCmTPfuZY8m",
  "key42": "63shsobxRbCWCPQASaQrcCsSX3QHFZahfDzpTZbXUiWpCTD2rZ1LfyGV6ofUwUH8TZM2tTjcLXcDuHnbSFkyBjZj",
  "key43": "4SVnGMmCqi12RrZMo4131pePBGJeUCQRyUR5MKEhL9U876mW237VppEoymZhA2GAfmtZYy5tjgiHgYEq4QUSpy3c",
  "key44": "snxSRitHSzeRuym6Pcdv1VSEWj5tAzpQpeLi28a76UjNkuGW94RuUwpyYkhtq9XzBB3bkmos5s2L8QPHxxUWYKV",
  "key45": "4ue8c85NVBekK1yUhSusMNiTpZs6g1ruZwyh2Ru7JgxhsZv4Djz8pjC9dxd3xV9B8uaTnXM497LJ9PchAkPiquP1",
  "key46": "2sNgH2gFWczmpMKjW4UgwoDTuVqRYq8Xg7edosvHuChasfwXKtUzTPyM5YjeEeRQoSqAkLyWY6xPWi55uqM2LQsx",
  "key47": "2zDYVgEjg5FXncECAUGYFeqk9fvqv6azGSf7yn5SwkMYgZYYhbQdk6CkbVLZBK56f185DtRJ43FGxPmeoPfrmMrD",
  "key48": "3VSmme3z6wBbV4qSX5nsAvUq6ziHTDgEPbWwk6rkFKN27d1hWJbtZbsAuJHGtDuufYZDajppN2sCEozUi6aXu9kx"
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
