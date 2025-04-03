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
    "4do5mePgQ759TK1MGVz7jFgriRpVhjw1iCiGBqpr9dxhyktF6VE2s8ZFwpC1GoHn1xFnu13UsZozvt4gtYJULVmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYqX6g9B7N1zkBKZpYyb7XbNTQtnKvZkFn4XxwrLb1c9q6x2bAi42f8RNVPEbzAe7HRge8jhG7Jv78K8BUCT7gv",
  "key1": "3CEY8FQBgBhfFNEr16RCxnhHh28jeU2WwJZ2LnY46qaPeua3Ju7CbuBvnotb3hvKoZcL8GvdxUGV72rzjhBwZP9D",
  "key2": "aK7n3RYW1cJUrwPawvqbxYawYMBitYhJcPYLpqY3dg14Jqaiwz727Abu1oAPsCTeGvcDPyvasc49Uu7AHb4USX7",
  "key3": "Q5rXyda7jc6nnD8VHGDjS8qezRc9gCRP2wmnKGKfmuNmccLLYe59RjneYwCZmz6ThS7g25MfxAxzTmXYgYEUnFb",
  "key4": "3MEpp8aJBwEuAEUrqUFj3UCJM6CKysX57wSVFim94zhbGgWvuYFANcEpUbRTNiecdaDeNoJR2xuQrkBuVmdu8cpq",
  "key5": "2QxAf76Z5npErdszNwYuED2zzzD8cRdeaoJMDutpwqFUQN3ockppcWkebYcnBfUHsmkvxYSNAXiWsVVPoajqDvic",
  "key6": "4y3NTquzDCYhGVMhhuvwAqQ1aS3WzvUdDnczG2bmv6z2itnFcJsUHfNvKQrCm7RQHGnRCtiGBZXG7nhAU1eKL1i5",
  "key7": "9cfdGdYdNpajiTatesHGhEry7T9kVQmy6cRr23vTwk42nr78cKBe7vrtnCwACrwa3Hv4pqkeo8NZLRuFs45N1ys",
  "key8": "3dNcMi5tMQRTskYBjifurN21EGRu137NZTrenpi3KeBpecSeNdUjXffwBM6VQjUX17C8j3GK5fBGyJRBTD5pQxzK",
  "key9": "2nagrv8HzcE2iYaNBaNqaCnUAE9nNRYRyn3VyRiSQPurmdbKFg6Zn71TvndheMU6E72DnJyn82cwuD2XbHRbzYMe",
  "key10": "4BQ3BAbbUa9WxTQDCRXbD1rr3RhNedPfTAJTF7SkcShHt6QjSc8zcHuadvi3rNQke7wfXwM35YdcEureFz3iK9db",
  "key11": "5d4oFfrAYHysZwDpbnJajXS5tdE419ReVzXEwSg92G47rR4QW2SfZ6UNef58Pvf6Gse4VnGsUCXHy1xYadfthtdM",
  "key12": "it39pxDTdisBJ9hDWtUAKzfmwyHu1yvCgroD31GUtKEhhNDjGV9Y78tTh2kGycneajCDfZy2VAZZjDM7ZU2eGi4",
  "key13": "CBBNMgHGJ4WuebYYSUWWw3a58oK69ssr9Qjw7qaGcKFZvMexUkW32LRMjpARBa9weevh1p6R2kYJ1VavM8AtrEw",
  "key14": "fSmnw7FbfsgDdmchH39GBR3NaUbAVkcLyrD8sWGg9nY4LiyXgUH322RQWvKcsh5TfSFhKmbHpsEiKWbReQrENaP",
  "key15": "5qgtbN389TCwQkospC6LXkH1w6JstHzupQmucLT6KMiHnJ1iw2mCWnXPzEjAWiRMrZjXMbbe6RtwtFNX6zZEpBfW",
  "key16": "46oVLM9K89XsxARsWBzGW4ooh9a8eRwpe493RfN5k3iNPwr9XjbKqDaPeu1yjNGFy9T8qZ2vVy5d9RrR4rShCN7C",
  "key17": "2AZehshBEQQUdvWjXoBr3YAcNUfFGJ353hE9pYZfXerA5ZdxHzt8JFkAjknLGLFiYTHaHHxQkMfRAQEG2GBYj9Bk",
  "key18": "5S4jxCem2W25DbnnpN1CsBRuhNtrcqbUeac5u2cRp4P6ZBbdjRihYmDxNhSjXeJZGrex91mrnFrDNwBVYrFxSMpr",
  "key19": "5SkqLoiMUtmbuvcZ97Js9M6RwTBKdAkmdFMhSUs7p341ber2i28uSwaSvBH6o8ENCm3p73Zx1WZqZMDLoGDsPJBa",
  "key20": "5Rz6Lr7RJrPrRpNoW5FyWyEzPK4FHHjWf9DvCQaixKBG3HpYZyEht5F1qRbT1zDj74wdHKK6QdifLtv7YvHTKYY1",
  "key21": "5XuJDggxeQVDkXUmTwwLk73KbfhszmUpScwouqvkFJDywis8fPab8AjVC8mFYaq1Hm9UohJbnAzwc7ZMF1Fbudxy",
  "key22": "5MNfQ8rre5yfBc1CRkzzsbrU1ndkonuCucFLLLNMPd1UGkPGMZ15GncosrDSWYsLvtsNv6rsaR1EuTg1kMFoQU8M",
  "key23": "5EH9oQrVAa8yKci2Db2evC5h3qMiByNQh39RUVHsmfdvrfEitZcFZGd42hDGGAjHbkoUNKNKV2pLAYsd6Xq1DiCs",
  "key24": "3gVKcSQrpfthpBA5LZXbW2wvmR5Q3ji5dE4wUBHCm5iQhFhj3mKz314tuWTTYSCkdaSUmZbyNahcZQJ3PkZ9hCuJ",
  "key25": "117Ti7aem3gzwKhgPBY4NrpGoGnxZXivvrrmMjus46gx1YjuNdh5pH5CmHi9aY17vA4CJd3tyuD3hpFPLuwKeVR",
  "key26": "3eCsnBkC652SqX2Lb9RXpEvJuh9TxYWv8tKpteuSafv9TEgmEpZ414RRZwqbgRATQnhopyncdzM6bENHthHuKiE",
  "key27": "631USGz3usMdVb66rDxvvodqFaMT8NUt49oJXz5kTJXPGU9hyVfXu8ppbQxPNuocBaBYy29z2k2ncrgBHcmhVxHW",
  "key28": "bAeceouWxfkRM4aeyYTH56Tx5xUk1wYX4AEA9QQV8MbcShNY29R3Me1s4JV8Nw4iVc49yMNPoma9QYtaGejvAzh",
  "key29": "4zTBCw1WRYJX4fMBAfc1oEnWcZv5aUW9tMujsQrEbXhXjq81GLxrbqwjmqBzhzzaVDFCx6dzMdHsPuzaSVRbfngM",
  "key30": "NudwX3pdPF17wXgx24MvHp4wm5ZGi4YmFsvGgJ1vSQpBGYmtb1Ra1sun16vMWT4enUVD6u14sguZLrmX2J7Uik5",
  "key31": "26xJgE1gqFaSQ7TuT6uTKKxyV4zsifnnwoFBmDkZfj54nvByoWnvsAsaQs98TNSZRvEbjdjxDmsCL7vh8j6kS7S3",
  "key32": "2FDr9wpTaXwDif9VQnHbnHirU7ioHsDQftwXVNBWuTaJYSsYAaLkFomjWfVXnUXZMCXBTvh2ozEGTgiD3yVR8yo6",
  "key33": "2z6NK7xmHY1NPYC3Tyh274dxQoKXnKXQzhDG3LeKYbHgLhaiBStbtPwDDdDymNNCJzJ8mjL6ibKziZFCiy49sUz4",
  "key34": "45bTPd29RB9o8QjehBr64sj39hiJMKsag5pAViR12MpbU2F7xr3nXZnisHFguVRA5NNoYWGtszBruGxXE9MWGSpK",
  "key35": "67ZxiJnMFgqz3aGNXPLX5izw3YikxCneD3LkEiZJ3KXEevCHZz57tuuhhCHpTRRaucJLAtHcGiU1nySWp66ncRna",
  "key36": "2fmVGMKP9kdLDmEYUBQhVwoeC3anH8LWL3b3AL5tGgLYtZiTdCp6xTxRvfKV5icTzGM4JbodxAghnf7zSgmJ9y3U",
  "key37": "2w1N9jNWuWwqDkUbSeMFt5dGMoi11FUu2oa75cvAXtGAYLqBUfDPTUJZRuj5x3sJJcbrqPD5SYP3KA5aiaKPatnv",
  "key38": "48GjvyGjqQLh6jrgnQUCgQDWTjBCXrVf7TBZJ7qrJ69mNfwht91CE3iyJrSgig44csTGuVwr6jxw1AQmdQMtkUuc",
  "key39": "3NHRpV6tw9KBwYxa9xJf4es5M7CgP9XPp6TnWdtBuyBU1ZvjcnWkfK3avTLG7KzEYuycgNjNi3fbPhFNCy4tPzzm",
  "key40": "4jMx4VuR3LwXPgv4RXmFE7KvaxkDnN6w8okjs4akJQ1qagiQTfiyYTcBqRzRKFAZivLZvyBfEhnCikTBFcxYRke9",
  "key41": "24Mmwp8Va6ftoDa5VLxPoYU1Z7engfFxQzdKpKmtrFWCNAGAHQjweUrZWAfbQTufP1G5N3EjKW7QQd2xMmStFfkK",
  "key42": "4bzUFEGZ7fPZqpe7sCX9gQh2ypnarGAb1FuTEZXnSnW6JrKnmBiWUAhG6iLtZLSLqvW2e2cSA8Ckrf2Jo2ZQsFQi",
  "key43": "2NENaXuyi7WerKVSwoKtyoDYujmBxDYQVnguR7Gp3x1e12kiBhV7zS214x9qRHdcyfeXm5NnfE8rx3H8sqzqpqZT",
  "key44": "VAuGQ17hjMG489mp3nFzkmNzTscx4TYaRotKT3SuU6cAVonzFNrdcPH6jrH1GgzR1bQmusGXcRMbsdrHc94ERxT",
  "key45": "2MCxiFdiHfkdTxdnzhvLEpc5bB9c626QNdzeLg9nEC3SvRc4A86t35d2e3G7qgz5xE9LM5pHpk5Tg8em8JsWeJdN",
  "key46": "RTFYokMjnZtRhAyKHNFWe7ZA1Kh44VNen7dmfuTdYR35XoBct3e59vWwB5qcf4J1JT1DtHLVMwXC6Hxo6acDgnq",
  "key47": "5QyqrHhto7GX59gPbrPx8igxSaNteVCLdNS12bWhKBcR96EBD64ao9RHuchnAToJrJS8kgh2g74u9Juk3fb3Kan9"
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
