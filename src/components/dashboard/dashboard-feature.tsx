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
    "3i4VQE9jYNvgBX9TgDvVmN3FKRaU2MsbqSEbVswe4vomXtGQQoqomcvtP2cDz8f9KqyYCJQ3YJiKRNVrahcD668C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PsRSzhYxpMxj4xeDaw8untLXmyMr479KGEeCZYvf867j8t9o6sr2KeCKjMi6wnBEqVVnyxVfDXBmBT596q8tFZH",
  "key1": "2MAvNV4s3Qvp6yUpBsfrNkenAH4gGQEefaGfrP7HyPCEFUyKKm5ZKmohH5t2qCnRhGzXv4oCQnNWxVGgArKWBGMg",
  "key2": "2n6giWizkrTdHUYhgWJaPnYWZnxjXx7V7izPDHX6MSeta9VWcU8kWXTYH3ZFK9mbGnzZnNpx7RqZiFhL42Yv4YHr",
  "key3": "swtpxA1KCkNaqzVeQHaGjshUwSAXRmRtg1jLokcDmK9JFmihhZUdRDYfcx6R3YatHPKAYrSCTc7RFDw1k4vpokp",
  "key4": "4fUE7vyJUtzZTF5Mjecvaq5z56uye3axz48JEkxfoeMahmHpw2p9BJrrnPAphKp1ZETMy9k3zTNR9oMxaDmjmJuf",
  "key5": "9NLAipUi5fHUanssL9pi7w7iBnMW811xtFTHhsnurGmiMeE7b6uo5a5Q5eGypZ3PFYg745UMEmHPg222JzmCwit",
  "key6": "47LiE9wkmDuua568kcjEvyAHuYPpg4134CX5zQhR9cHH8AMpoa6W7Wh4mByxkmy1vo7Q4jGTnppxSaqPYfaZdXtQ",
  "key7": "2zBAL65EHCa7SzAzzkGsBriKCbeDNZGoEywBciCAZa88JKTre9TbWF6e5oyRDbLcRjvSK2Pf7jWAmXyHxHdQzjhY",
  "key8": "KoYMke9zefpaqxPrqeowZR14awr1iF11zfcYgKwh3vobHJfgUpeFzyVdBjtsZEvk4XuRxTcWYtHq1gusryV2mKq",
  "key9": "5Aa2rKbVa6GBK9MbLzVkZD4FsDErL4cfLfjYvaVYLVNNxzVvCCJL4URUXwWXGf9ZexGbT4DwSbtauGJUyJgy1tJh",
  "key10": "QTTj6VgJefFfvNtarXAc6ikXtMGQmgUpscwABRX9TDMyy2ACg1FiteY6idgJu2bW1WFPeQ9s4CKJQLKoZ3NPRLL",
  "key11": "3qmeyht9aaVFXMc1YSpuxMi5uyk4QK9BM7GHFYuGNbtNU49gkBLvQn3Y37WtbmMN7mkB4CEFGrmJnN2mq8h99qUa",
  "key12": "2XuC2nBNPMGGwSwsJLCG2xojoc9a3mYQ6g2uJ4o4ggNKGFjpS8WLW6DuG59qRE6WHojhgbT3uLzWkjot626XTDYM",
  "key13": "4SN84UrH1jwPSDMQDQtM3JzGGjNFyn7gJqT8G4d9SaDGNmDBBEvfsSTiUZhKgpGk3C6qst8ueYxD63rjcBQHua39",
  "key14": "55WJ6arMocjpt9mq5KqRsHSpD2HgjAXqYan9TbL3y8Ui9dNEKMfKEdoGYZ2rQ6xsr4EzekK7kRcY4nahPMZS8TCd",
  "key15": "2So6KJVP8fPGYGYggQBZSRxXiJ6LXpztAwWLsGqPGD7SrR9MdaCoxfdsprcpppccnQ2nKJ8kMnVSvdFzZGU5krpU",
  "key16": "5TASTak37CgSVBveYQpGFz26KnsQeGTwps1dZmtt4chw3FTovJJEjuZshXXDEcieXx7Uz9L4Eb9RH8rQygZUfZ2B",
  "key17": "55GzLZeKwMLoy1X8gFvYd1ynt5yEPgPbGVvVY5YY6jgN7HmN1LMza9jbX6LwF5uUvyv9bPWLuRR2qEpSiwmARPnY",
  "key18": "4FsT2gS4ALqa4pMVapTmVmsykhWqmEpdXVG8w7JozFrhpgAPFQdxT3YdQHQ6dhgyzgt1nATXpQuu8DuvcgPPW6tu",
  "key19": "2TZ6QgckgcpjLqxL9f2y2yanz4D1EBzuTWjrKKS5Yt5t1JwusKEKiKT7AVat9d2LwjjkqoX26ZyH37U1JFiwcxJ2",
  "key20": "3V6MkLeE9E5WK4pqwWRoBDPnWvwcRPFgYaX3Ykok212dkN5DaEc3tA9dNywSVLS1m4cASYXqSUtH67kBQuVjA65q",
  "key21": "CpLvz3Wtvu4FJnygJ5nCzQ7VZPU2UZqf3nUU7mmjUbxwkGczQgn2oFHFVrS6HBK3mUgpffxSmwkNHjsh1rmwzCM",
  "key22": "5QHkimYkRFMHGYbTZ5H1g9GFKX3rtemjHiNZ3HVnK9YooqDrXfwrYsMUQNqhgmhRyasDYX7Gkvevaja4GmZpHFyy",
  "key23": "5K6cviMKWnyT41e3La68BhPr3U7sSbN1jYd43FYdRRu94NZWNoS8cqyKUA6L4WbATeLa6Sp4rP7nxhQLNKtN1uQs",
  "key24": "2gDJW6AGsPjWzRU9eA8oGxuTH1AG6McD2x5YQyYqVK8JtsG7G1LWn1oHrz1FJLN4JiFpMLXG1GVrvtXbNbyiKf6",
  "key25": "2UCXP4RbQJjNZsdxEuJh4RnJx41LUCLZS51mGmQCiaD1uTu6LMtVMk7yCyoDxRFaj3PkjXxHzF7yNT7svVUTMjH",
  "key26": "4LbuBAhPDEuEV2HUP8kRpQEWoAuD4m3j6g8Yiuj1w6EGyj9bqh3v1ZCSYNzFYoghcJEE6DxhBKEE5Jqu9odwWiHz",
  "key27": "4ZtwMHWFRSeXyy1Ubvi9UmjtV5bUtyRSZRHjAbxcYcMBrSxWYbnvfbDQppP3g4G6aL3bsoy5RQjxrFn3Y5eH9Emj",
  "key28": "XMLJXpnBuJbWyRobViAufuBWSKUgggDvWWfBCc7T1ivrCfykRBVHvgCDXApKhE555LARrzaZq4JH4CfDM67aw5h",
  "key29": "5yQDUw5bLkHq2gwTKCjnZdap1TiGvLvTEGwSujJEYr148oUJgEXsb48rQp94U37gJoE3e2hcigyVVCuUngz6X4ms",
  "key30": "2LC4WZXiRfNDxNwDzUTSi1HBmZpZb1MYb83XNuQVpSZgUkFS4jBAULoVkjm7nnpWp12gQYi2QM7syMYdjHwK9fVF",
  "key31": "2eA5jHUucHoamsoJ6fWMq1duw6dVzuMSmWWQyrqe5k7a7EtCk3j6NjouszxYfh4V1H6kjqQDLmMuA859pQRNNnUg",
  "key32": "4u5YGpvHudEKtyej2CAVm7agExN5Zs8ciHp5tpa6pajx74mm9Fx8Sq7Nxvcag8fBph8YJAL62oyTNn3LZrJGi8GR",
  "key33": "4n2aSTeFsyuEK22QgUKa9K5MkEnTFBc6xxFKJn9ewUJ5x7VVJUo2hdJ4FyMM1P1uikCmfRU4rWojPqkjj99gRpdz",
  "key34": "Ec9XFUcADm9t5udxAUtQE6yg2nraFvFqa97PaySKJvtESbXnmaYwGSyjNdVjjZSFf9uwuVWDJCYZ25Dod3G1d4o",
  "key35": "3kBFjCt4mc9XWEbduK3ABuUPZbADQi5Ns9smCzgPWin6RMM9tfYapRtgCXnpnSDT2ktWbkqbhD1AenzbXaheoCgF",
  "key36": "3Xuap4MRtoKMYJheafxVG1SVnat14cYV2QwK8u6i5HxtHyhZ35iGnX7m9UjBDzFB8be8ghhk1FHMFsyHkoL169bn",
  "key37": "2VbFuA48EDfXftGfaWVmmtLbigJQCTYKCxVG6VBCwx9HxWACbhdWhVfw5aewjbLn8Wo49VRXeCrXpQvC4mDMykkm",
  "key38": "bqe6PQHftuSBpUfgmJU719LNVPJW72e6zEt7kgXXPF8uw6EyVVg4GgMjeCYDjJ3DqFuScHNe5WfMj6PX3TvZ29J",
  "key39": "3AyJcJ9A1ESA8Rs2tweSpeX4wpGaKXrhEtZko3e7JsAdD8Gg8gePBLsZ52VVv4cnELCtfEnzjmNMqwj17ZS6wunb",
  "key40": "2frsKnXraffYRnpVtMsjEadR6g1f28bLWQhrbRNM2AgVb57fjFVsiq8y3BqhSYBGcG8S6n8gskSLreYNL6wtPmcw",
  "key41": "374bQabQ3o76SpyivUDrGuQ1DhyZg7NopQPLG9fxFTcJdMdr4MV9ayiWrTCTxLwf692Lq6fWREfinKCT6BdUKyW4",
  "key42": "2wCET54M6QgXtEM6g4J1itVADW2M1nFWsvvL9aorciHsF4dEmQC8tkTS3sUVRNXUnQxYjw5bbwN4SEoQ6QyWa2nw",
  "key43": "2MoMbf8YRHhV42vGJPyNnWBv6a49NfR7G5idoXdZoBX4eLYbC8rGca5a5GrNuefjUHYsDdSGSH9kPMzQ8dESmzhg",
  "key44": "3BFGenzAn5Esq6w8Rf6uYgPhWyKqe49pkhVY6uMpiqUFmTkc9zdAN5QTTwpCkmUhkvGTQmoTyBgpToa8gA7AtrPy",
  "key45": "2amcsLo2QV5Fhjav2X27rCCZjJcsoLdBYJSjL4eDPvRGpozDwyzE8yKbiGQCcANiZCJEWMGPv3Eb6kvWT5mfAhxr",
  "key46": "2gFgqCxoZs4cPCyJfMo9tymBEV9jZNCkaRuuPLwnzKsC27LsahwhJdDA5bYDXkt1iAEVXnRCA7BLQEjdBGsKBUyR",
  "key47": "5xKLDJPDMhBNet17A6LMme5EWqubjhzMgDG3cPqRWPN7q2X9XvaAChXLGjqi3HTd2UPwES36ConpL9C2THWvzGKp"
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
