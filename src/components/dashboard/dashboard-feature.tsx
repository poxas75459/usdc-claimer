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
    "5khEpFsF86QqbBjH1TQz5MAW4ariZe4yLefG1HWAzH9Aqhb2Vf3iEt2u6nezTMZKFhK89kgpEpSXa6Bvcb8deq7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CQyzqJxb6xoeG7YqnLPuSMExnLmKaCVgvY3k9YTuWJ68S1P9vgFTweRmeMV43A75gMDfWE77RrRqXPGL7yUmkM",
  "key1": "tHwubJApn3sg7mX6ZHbKkkhvueFXdHUTX4TkZrdqrDkFnjoYJTiuYrsugv72YkhtXhWay9q9A5r8qLMMBpL3cHw",
  "key2": "3WcW6ooXaCagENQqhyqogkuXDbg5qSUnQnXBsFvAiVcMmh1s4jrmAT7gviNZdnBghMiveaPULn767PZk5RnTAbko",
  "key3": "27SJ8vDD5QPEaH8biBrt89HbdrH6NytpZ6UEt6XUiHxrMyRBB8nH3bcp98N9jPBroDUyz4qavErod9qzhfXxBb21",
  "key4": "2KHNcM7kd6SLqARKbf5Ggefm51CBgicyFcFyMD6xkDNefwo9psipPusuGRbCng7JHTqmz8KVQCQrh9YFvrHTNAoK",
  "key5": "5ht9xpzxRwRMbf3s3mtqpi1gLF8eR83X5WaStPj7QLoLjfMa9XicRYjF6uqKZquK8Cd4PhS8AzuyvSLSvCyrNGdB",
  "key6": "Dc866nw1pCUW8pmj2poAT2x68RRVj8WRQJgbk7KjquWk19dMYySWZ6T9PJatcqvkAjYEAu27WAsBRgUeDAaiwVM",
  "key7": "2nEYXYLhcnyvGTJYZiX5kDdy7Eqtta9r3mQ6bYfWcwvbyEtF1BMGXWQszLSJbaqDtX8jD878LTGUB4XVYkC765QJ",
  "key8": "oXizcDiMw7bzzVxT62UHeWRJV55ag7QFnfhee3znUor2x8ATrSAp87EBJDbmT5wKgcizLCTkGnLkwdg9eqh49sr",
  "key9": "2Vz6sZgXCHrVNZaHkJoHtoVR4my1UKcAnhryRPewYqxKsHmUUi83dAUTFuVHj5xNfSxKekutSJ5hEt3VKvyXtyoB",
  "key10": "5QMrCwrRXV4qYRMXjQ9sBjnBG5s4XRc7KDL95uuMdd7XKgZ3hqpHxMiQAqWxuyzESeDBvpFj8crHvU5FNYyToUez",
  "key11": "3j7AcwrkEjVk2BkWjjD5d2A2HPvfruH7JY8ZTjn987c8ShATkvtXccdVBf7k2NaagULn3dNcqYrfGTmvoGwP2Awu",
  "key12": "58jY3i4i7omLv9TQch9CAjTKo6i6zFWTXig2a5nV8wDU2STij7xtzqjyNhj2q92Let8C6N9QvzJnknqNvHdkaxVP",
  "key13": "2YezcfiSwtac5XjFyRks3TEixyAExE6Xj2ztWnLSkRwKcXupEhRSNry3Sv4Cf4LuNgMf8Ay7GM3WU7z11qHqZ4oY",
  "key14": "4YWgAUDnffunHLTAed15JM6LJY3xD17iAgU3wLAYLbKuMDBv5WZpvr3CAvNrbeDpkojJXQaMQYzeRKNA48dT8W6",
  "key15": "3y9sxSCnkVENVUrokRRCsKSU9ezxuBEx8P1nT5ErVWGf28sZuZxVJmWgNd5PNm5SMDvTHuwCecs3YSKioRzGms9K",
  "key16": "2ue768vHXjmAqc4YKDU46sjvvGJbLhFXUNFgN8oPt3CCq6oxaSF3a94wBvpGQvRvnwYXNwHhWCyrBSfmpU2oZJfi",
  "key17": "5oPp2zmKKaGiDnaf3RT996jpHNMNiFqDDsdTXBqmyy9fYNSPFttYqE4dUiNcWPrLuM5fueKuW5x1G8PNnojtpruL",
  "key18": "63kb2LdQBxypVw3WhfgKmjFTuR5NFySwwbg7GAMnN9dMoS6ZvF35wG2KF8ggPhgAha4aPXxiSNGNDzW6XVWRcRXF",
  "key19": "5AzGKkybssYwHosGygmrXkrabmXoTqwJWRemhfT6Yw2ZiR3znvwR4x4uXXz4WYj3QZvfpCuRkpJriiFoKMpPsjsU",
  "key20": "5Nfh2Ka41qRVtphTxNVpQd4T1sdtjPJzZoGK6FwVnmKAzHjdQ82WDRzK8D79J7Fc1fGvbHM18TgH6EyVmfvKS6fT",
  "key21": "3k6PqoBF9AGbaCdTLyyHnY6SMYSitcJrYsmVWadJzPhNpKNZqbnw22Jr4N7RYf4BeQoPdDY1phtjzSKn8uawomqh",
  "key22": "3G5mLhXfvdyy8Au6uoP1NbX1iXcR9E3vEftGiaddMgk5WXTTSbS8wUj4bhp41Mzww88naDvw3k5zWGsDWRppuZ5c",
  "key23": "5pYRNCwjygrzyxR8DLSs1wNU55nBqaNuEm3U1jgjf5cZZ8wvqRNMLJKievqwcPd3QsybjZ6XzZWGZCHa8Gf4Xu1F",
  "key24": "3cwMWeVVSyNaipuNMZrBnY6zF18MP1SKoEaoPzaaK9KA1EEL2YzmfJAERmis5bNcv95infJ67TGkCh23Kbe8VMPU",
  "key25": "2GTba4Q5AWrpaVXu4HY6CBa9aRnSh4MWuBfs3TKjuXbmo9Hmg8cT1Qs8ewLJTi7718Hxm8MqiXf7uAdcoLyb8f4X",
  "key26": "Z6j21rPVfSWiNeh2Jsy63R6LK1GMGsBiSMWTM4RZ3o4KHQG4Ha3DYtDMD7qnS6HutbrGgNgUzMBxbigpLV1k3kQ",
  "key27": "4Csro6Kh7yPzrDysZTD4BPFkLnKL4YmEjTtgioxs55n7ywXJxT4q34nytvK4pfJBPyNHYHsFxtGx6W4akkHcroip",
  "key28": "4wrYjDNdamYhhooLkqKSs2VR2dkuQodPTEpyUfQfhd5kFh55EY8X25iXTYcHeG7yroqWKhYjp1nW3sw12LK7XmN7",
  "key29": "4YRKnEiGT78wgV596wDYWA33qNkGJZdTErKrGsipxQQbY7xRkvFhvdgFWmCaK9f9YrtuXhyn1BUTF4zZmurwdjMy",
  "key30": "3my8Jt5xkxQmqKHFqsS8223Gkh6T7tJB4QPfmMGKZ46hxxL1ushSbiSfpyASuuPyuM6TthbjWiqoX1FUb6scPkE6",
  "key31": "2CQ5mWdkjJDD6GUhFkva5BC4hFbfXVWQ9uwqxLaFahN3Uc6oPtdTkCmjJSMtrzihcYqU8RHRS8MX4Z4GdDpivPDk",
  "key32": "4xDMStDbQ5NGfSsbBBczTDCVoKuMcirbsF2dv24djaTx68h7daadSPcmDgZ32yGQphVqZcFcpXrmMKJxHkHjMf9U",
  "key33": "4bb7UBHYPM3S2DWHNSUv3aTABecQz2sPMhnFYtxEgDrXn32H9kRCPXUZfjs8ar8oeJXHjQNbEPmDwjaN2HHsHbmX",
  "key34": "28AK1obBcYtP8pNufAfo6okbyXzShJfaSELnCn41onJuDWKrhztEMpfiSGaWDFr39STBiV7B3vhPpxfus1Hzntmw",
  "key35": "qFfFQcL7CmGcuqHgJo2XWn8mFmBX55wKRQKQno5kXMQVCNqD9RTERi61YsQ1wEB8DxZFW9ALgdW3smxcsY93NnL",
  "key36": "5TmrMWjaZHAb7gZpFnxixRwPwwmAGPmRFdiQSSHro4DQj9s9M583DKjRqQmmfYTvKYVZNf53mVNK55CwDwakQgC",
  "key37": "3W4hNNSetmm5K49E4zCeRiRXwajMG94AEyLMnizT4smYKU8djfpE9Y7Wbozt1ASaw112nB5X1ck8uDJaLGNE6HEj",
  "key38": "3meZLa6iTAdy3LcsPKb8LRbpjgfSj1bXvoZPEdw3gUkcE5YfUyh1GsAXzcfdRqv3BXAiD5Cu7yZoGdnLxprua7jo"
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
