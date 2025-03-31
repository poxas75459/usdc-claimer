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
    "wSP3LGpjBLxUyW5HcNwTZv8GPFeztkZjscko3PirdooHMAw1Sf3sebbZr3GsMLVm57oYFbdmNHyFYKFW4jqKZ8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvKDQdEQHhWxJYRyfyegRjdpWvthtosA1LsptWkMkH2T6q7BK5nmJeGC4hHUpDbzwqUPLxrKJ92MdPSTq2ELscm",
  "key1": "3PWeR4Bi2r2Wuc2FjaQajLh4U4N3mhVjQRAaUunvi5H8NQjN9JtrGyFXjCGY8uo2updx1XREt9HHTatjxhZbKuqm",
  "key2": "5JDZSLTTexZCb5i2vyZ8rYM7eZNbJn5EcBYMqy1QfFWZ6CqmwqUW5dDen8TCrA659zpX1tZFAidhVapdy3nbwhqM",
  "key3": "2Sk9a1aKrxfdQ8fMeCq9MTC9iK6CfN95KMZD4jYWxUiKKo3a1KNEq1aucCEcZ1dq6JfTG2noEKvhpWtz38XNimv3",
  "key4": "2MrVCKpd6MeeRzfuTUtj5VEkRGFhaUahDSrN8qKJ9hwz5je62PEGTus2eeWVEJcjxaSF6wKmgENqLSReksMD9ua3",
  "key5": "QAwkvXKbyQvLvQMVX5b45wc8uobVd2SxvAokUAJ9x5vVuARtzo3271KGEvyRY3VN5TqGrsh31zFmVJpTYwtHUAd",
  "key6": "5UKqaArAvNfTJaWsbvfTABdTBiagrcdsLNHmxnWrq9qtEsVChkq8at7W9K95XtQQDbzRsVX4JGX44UaywLmVm5Vg",
  "key7": "5wtD7yRsv9LiT5HKxVASQoj8sfN3brp8pMrkGEKPo574xvV4phnH8mJ8sApgVorAN4S1jkZmc3qYP5zChHZ9Sz49",
  "key8": "45UwdScivLZ2N4KGwbFgraCCS8zjWE1VQe4vUvfvF5Boms5tMyFCZGxyGrrqTxzCFxYphj1dnJEHd1cwSC8bqTkq",
  "key9": "Wwaf6SMntyBx9YZE2LPTMCDhN5btUMhL2vB5uuwsGnjYuFScij6QmQp33wUBGPK6ZAM1RvRYL6n6MXTN1LQ3cHp",
  "key10": "3U8MvfPSsw4p6gjL185sAaBfZpzq7eMNFdbacdtNFsvB52KbGvFsU6MBjmQbwsGfNkWVQMKmN9yS55R4mu8RyHPG",
  "key11": "3DqZT8as7VcuwgXPzEpy5ZwE2ymkvMZC5TnrkArhGMVjfw8MJEvcAtKfGvih9cL4R5yXQkj1rBjToqZWeGBAqXej",
  "key12": "2S6FWQLPvsR1nkc6q8pdCqoSbG6e9QJZFeomFoFsM9jYybKLnYLzyfxjR7Dy6QYBxXJWsYoxR9yDSijHxfGi8STp",
  "key13": "4Ne4LC6mb7Co7ew3iLUvtmmVPjh7yNDoV52hWyZTRgWh19ZhY13GJ2efzdwvfj9PX5JpmLjQVDah4pQYb5iivfCM",
  "key14": "2kjjkMrYLPoGyN7a2XCoXBDaoLq26mZkdkMyu69hpkti4q4a5b8vcmfX88moDbUa7nYvgWqbrW6oe6mACc6gxCWb",
  "key15": "3FEhpzUj1JkHgsvc6nKQmw9WPdby3VdUaxP2m7Q6LhrjLDYL11BHcat2B6RwAXeNp8Fqpgb4fAhawgsKC1qSTsJm",
  "key16": "fyRiLs1HiAVEnvFWcM3NAo6rsqULUiEikFDqx26dFuJ8D6Vqk4ieiq9Vtu2Niikgm8sd1ibXauTuAwH4mKxm2go",
  "key17": "3pvtyxgEs46YNRSk6GRmdsk11LR1wtB799oAJBuySRDrekneGDP8jd9fArvFDp4Md9HD2pS8SjxKdqxZbQzavtgG",
  "key18": "5MDNiYpdhWMUoox7hCP4M4zxWwzseud4PTsJfqaadnu7m9SQTghzvAxGv9AimZsEthNGfPoH3A5C9UpUqXyJs9fL",
  "key19": "47RD7RB7WNKWApZ1H9gboZsCqC3JpJhnmmSdSKmotMn6bmAKMg6UWX83No7BYfkaexCqkhP6pjyuaWrYhaEYgjAy",
  "key20": "4fBLzGZDSXPkGafCEcFCKZZgKaiyABt8VPDQWSe1JPzKZY3wLgcaqgYrfD1aT7yvygXioaVsMQdf6EQQxd4fMK6e",
  "key21": "4mCWUisaDy3ZPpTGvs7EfdtaruHHhS3sNKSfiT1P8ioQk4ZhgoArtp7NUBzSiVYBVw5AkkdzpZjmKRcBBEqeonYa",
  "key22": "4YPxBpdC3qVHGZc1Y4ojTZ6VM8ix2cKEas66n8C3ATTC8coy2i3Zh9LPq7VdxY7gBz7hq9ar2Tf5xbmAvNmzBUdf",
  "key23": "VhPSRbwbsfsHK9SSrXPtTekA9tC41jas5idHuzh9hRP6TuUQ3LMGfbxyHN1hKG1hTkJJMiwuXXkf5Exa8ehxQoM",
  "key24": "5sBVqGBMzhGY8JyNPg2eDsxzHs1szwJ4h5PjH9HGYkpkqWRtMhHZCo7XwYNiUgyYRLErwQpXmMHT2edabfbPDFbo",
  "key25": "2drHQ6NraA1YozMEdyUwZkjZHhgRLxVjVYC2UfJzaFfP5dzRZddYUTdZFaqgxUz5nzKwjW7LJiNrGoV4GixjvyzQ",
  "key26": "gB862Nr2Ub9PyJEH2GvCL7StqctxCmsF9imRvX7Wcx3QLhy8x24i69FZbwdsiwakgvT2hdgGUHPhUDyXRMN9F8F",
  "key27": "3wBeA8E6atYNQL61U5UPRApbs7dVhPTQ49ViCtUaj1hrsF92FomiVEXvnSqAQRRsqFrQYTFDK2csUKMxjwsDQ6A3",
  "key28": "5Zv2zYdytD28K31DDyTu6zUyixESwwoKWnaUMyg71js3zZRJDJ4cooBkPHQjoLEtRV11phstHTmpb9CTrJYrQvrk",
  "key29": "7LSA5Y7bQZBoyQGgmVMgSxpGJuv8EL9zgid9Hbzp6XytUj2PX79iHoSLASMbnuafc7NfDSXSowpZy84ArrqqkUE",
  "key30": "4r6Km9Dik53ahFyVYSbiwK5GVqadZzbRmfWqWQpBXHp1YfXEfE8zV1grve6ha9bQLoToQvT12qs8oPfdoLnH96h7",
  "key31": "2MoX1pkDv78HxUTCaX39nPmssayS8xkDodZEzYFVpRQ1Wa23shtXFs8kjKSkRjNcCy35D2LP7Cr6Ly3UhW28EBNH",
  "key32": "oEcMDW3YxKydPAZzCzoMBVeTyv85V21kuwRS1ziSoX5uLNdX9ejF8NY6mCSoZaozdU4TxFsd1D2dFiy7QL4j9Xh",
  "key33": "4SPpBVHZHFxgCZ8GQyh4Z4ZHDFsqkZQAym58ZFHP1JtA5zKHtNTSWCybWL9z2qZ66A5o4nZ8GFxt8fXn4tzW5K2h",
  "key34": "5bwdVwt5pv3e1bRBPJVCEVCFMWbmTbRg9WyUYLofEaxdwub8gLssrqGuwMQNhdZdmD3tk4AgRUBD6oCuXkGH192N",
  "key35": "tWMkMLC7nzWFs3z9KUHEPa2KLJ9r8xXUvGDM4dvFgDZLANvqU8jzVfpijYZE2DASejci1BabzrPjKvPwzFsXrWy",
  "key36": "2GiuhSSx8JJf9fy2FVAufRAacpSTHD5MtzE1roK8hPnDrHV6XypJmqLLznppMLX8LsidysYAYRPVhETcD864iMuQ",
  "key37": "4WtDiNn9JeyvJMVJ3BuvmFGwBJSsMiT2w9LPTqfHJNZQ4wXuVvnQBrm6ypecBmKD5yWq3aqaVtdVMEQtfaw4yssK",
  "key38": "3yftQfqGsYGr1u8VFTB4PhZ9Fg1fQQdJHZfQaPcRG1ThkAZxDbKzK992SeBcNXGHGXzaWayNjRYtH3QfCjh4emJR",
  "key39": "4cAVRs6si528ZJUZYJhFjy4oZS81K4yVG7kvagfT94oXKAzvTdDQmyh9PW9Ua1g7vfkRz8mAa8o1nGgw5ccHqush",
  "key40": "rftUzv1n8BRCrFT1F7vQP98Gorcb9R5RwJdUZsNh5oeuEdYHXxoXS5dHpvhfhXi5WMGAhJ8ALh3vn9y5o1RE93V",
  "key41": "4a9EGvYZHXrbk5s4PnHqkzwfc8HHgUi4ZhLsbDeSNmQ3GHpbE8fwW3VstkAyE6XpAWUhmE5ydbZwifvWq4rTRVGC",
  "key42": "2yb6ZjTnF2xLz3CYX8Xavb3cZQNWkLy6ihF6Wa9r2XrS7q3ZR3KKsurXRjQB1xeKtRaUrnq4zjwHvxYGrC7JM7EN",
  "key43": "GnRJJEoCr6QwbkLfPGoczUihXkAnbnXMuEmUbgAVT9gYV1ZYhG6V2e6KQXnGerfPnzzhxubM8pKGxurcGRhgfJF",
  "key44": "2Rh3H9DoQK4apKeZ5VcbFg8bKMJ7SRzrpqLFiiLHKLufeESt9Rez4aeDXkbFZQnZLmFK7CUPJ9PBsZKNeaYzXJgC",
  "key45": "KNCv8tNA3xUr5D5r6YR6Fk1VmFfRGQczQqwS6QGNjwLpPNLcr71EtgFa6CZrE4qUpxPqw6rrSLzBAgiBNdt2pHS",
  "key46": "3hq9ND8LedcrBRTD7D8KcjEkw7XmphdqdLsZPSvtxnAXtmUocvamfEgnbFnMJLLrfpmmfYNL2rCm1LMECidk2ji9",
  "key47": "3sPrEyS1WmwZrEt6c9RYpRrhMb43JNVUMqceyEXNEWCHDs3MKtpZRoAwnZeJY1mbu9oXFrGvUdJBneo4sSPfri7q",
  "key48": "tA7j63XacYRXyhe2qUE3tmAovggfFoPsghyUcG9ZLZVWT7diuS3VkVHftWEyab2bnXxTQSzqtPPfwsracBhru67"
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
