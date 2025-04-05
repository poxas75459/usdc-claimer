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
    "2fqMD5zhxVDu4H6jFJpiNWMxpDr1tWHLkc1RXtBuBzJTzm6aEAdtuny7fKYMrUJ1je8w8MZchYSVBq4UkYVyLjJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zT9tiE2Rp6LtAq51CEWv3rv7ZDF5ePD3JFaubaLnRwHRfpc6rhJZCVgCpMkReZfvPduJVM4x8p7c1fMjBF9cxTy",
  "key1": "3NNjRaHK3SHUiZiYkZt9uMp1Eq445WCWGrc6h98wTChtgv4uKPgre7PdBDWrPavEyp7GvaARUE28wzqGUcSvQUWb",
  "key2": "4Ndwd9fqsfH2nc3HAs2bhwJ1EDTVeGYdDymB4gTmevPwYGSekqQKDY9KiQapwycTeuk4RwUdUEm8itAvwA2cSah3",
  "key3": "5EhhssCy73FF6majHJL9kHJNQxuYSkBkYwhmnNNuuzz7hEhE1YVYwvcpBVAEiqGuk51qJUuJmnQGBmGwz6v81rvP",
  "key4": "2ZqR723gmu3iFYF4k1usfmQpQyfPBjLLoWpnmP2XYJZ9QEuBfqDuRNqQoYwkq5eAy2i9W4xYueCRpcNWTyqbwR2S",
  "key5": "3WC2m5SCA7XsxmfjFp28FjieDxMjAt8v9aF9TPwzELcBn6oHn7NPdCZn5vZnShJMxq8QJiT1SL4zhsbqHs7Zwdkn",
  "key6": "2Dtssxq5Aun3abD8oQUmt8YMiNnuxjZaiaDGEALDHeRhnUp7T5VUeF2HLrX5vrNk3Hmvc64hDdKAiBPrKr7Tf3vY",
  "key7": "5TDXKdkHiADdkDz6fzFWjHXjGFxu88niiTKYzKev2DcU765Hsu5GFUwMyAnnH3eyK3rDVrQ2zbWvnnwHB1kKA3PR",
  "key8": "4igSoMMAgkfLtxPRVKu4AzM5szT5GJDaqYPsNp84ig3cXmgnj1opHby6K2qVETkghKJ46uKZZAW96YqgJY566nxG",
  "key9": "44d6vtptTgrsah8NsHxs5bFxPK1XyuwvT18XC4UDWokV9PsXnErEmhtP2JkUBmM7uWgFy43NuhByhjjNRaVSJ8Qm",
  "key10": "wCusPE5TbCzUyANNkXMb8VnBDsVCJJ8BoTE1sHbwK39bH1vHUQLeRmSD4Qe4kQAe7gNwmpwFVWrfjceJtXXegQ1",
  "key11": "27FcxvWEdKahhiYJHt7GZBbqwZupsJsw7kBd2R5UMrQ9ALCbbEXnsZiLRTvdwZJQPdUf1kMF2dqNBqpiPTqiyaf2",
  "key12": "2MmBr6uYjPk6GP5jBQckz8Y1Ln23zhSTrTFuyJWmMMJaLpLzf5r2N6XyinCWELvwUv1CEwYr3vxHANn1FPJx7b1U",
  "key13": "bQ56tVBVJsdD2yLwaznxsF2qSzw5ADMnKCJm5tCvxSuYCN4RmTcPE1s74mVfULNFc7kiECRkMzGouMUrohcAeCc",
  "key14": "2tzvRrQtWscP8iYXA2K2pUUV1LRZo4maMUk7xCoDiqf6Qq9NfJUdXV2DNmbfd7DDLRs4qA5xUHQWBT1oDUuFEvsw",
  "key15": "57urXZwVVYLxFqFUQwBpFqXu14EToGZkhXSjsgz6Z7iYqdNEpBM3JRVajTxwy5MuL89Q1j4zDHNFa2KDeyYEUvX",
  "key16": "4tZpKVcRRiJbiamLusa2tEmGLiHqarpjkkLuDR6fZjaewLSMzc47zH14F6eSexi9fiz2FhxyGH94HwN57AjngENj",
  "key17": "2h1weY6NkcNNf76YuHcLMG1SDGmK5owgCGc7ta1ebep7P37qd7QWqYEBjAKpCQrTXRYaThy7G9cTFN1zdMU4WRLR",
  "key18": "5TJ9kRAxJ3ACgHaHXmGHGsEy2e5zWVK1uATqDZ6NMjhewrCagGdeq3Q9X64rocznDyFFxTPKGpmVjRuGVDm8tn2B",
  "key19": "5g7xjBCynTp9f4GjL4UQtH7Bk7grMkTQ24uxVbfJ5b57ErnMoG1AuV7S9cfxz18McEwMccZmbzmHMA9PjDHGcVec",
  "key20": "3CmSYZbAbHDQ198StBtaDfvEfGDmzihJo4WomXjQDTTuCh4ndLy3kJAwvPXWDofBuvsSqedm41p7ax1Zm1D4q4mw",
  "key21": "5ipEyQNf8HoH93cyJ6WKhMpYpdir4BQFTd8JXqPfnU81UnQwVEjtwdWpYucP46sE3QTipKPezFM8sYyLzVPtr5FB",
  "key22": "4zsbzWKemqEVviQprg8aEvXzxhifsapCV7maLbja9DoMLtXzmefrG6aMkimtn3ujQx6XWdRLe3R7nuCm7QpUa8GP",
  "key23": "kuUsh8uxDxvRWvqM8dqtpyLkoaGxkWEHo8rbxqv7D3EpM6gCyH1LxFJLv74yFiyrNYdKK5zgQWDRCJX6W3hpYL8",
  "key24": "5XwhvdazfdCyX24KkLKjqjyJ47Kh5TdWUa8Y8xspAUh1kyorgEkm1K2oR97X2w4YYg7xCCLKpx8CKLMnyeNuZ3Fh",
  "key25": "4JoGq17gPmsxhiYapdg5GVA75qfAq38ZdCWXkiMmM3LuTG2hC4UyQZFpmwRTDzuwLwV8xa7M1ZzxMVzmh6hbmHNn",
  "key26": "4WoYciKwMsy2tJLzzLrkAi9bnbtHQBtfcZQLpz2xB969sgNL5YcV5UrkXoSJTgX7gLdomU5EiBfDLVqC3N6LgXwR",
  "key27": "4VxWsCB5m3evvFTBP58znwfFvtsQ3AZHLAUspsC5Gk9oVWyA3oVioA5FGq1Sikjj6bHspeavztrHMwTf9ZD3faku",
  "key28": "4vT3dNfHhYbVudwL5Xe5MBNDryY7V2Zihx5LJuw7cWYFashAN74uadwu2MQUCEyzhLtUYUXTCFyQDQo3khETboMB",
  "key29": "54j9DR7TJP2Qh7J47sn28iDSKPuUYKsRByHqQpnYKaUcRJt46zd1DgFKjpsweu7hfGkrjJXnss8iTnBnAH2GDrWy",
  "key30": "5D74yR1w7rMvtKKvShte9JxBMQLyfijQsjv925WftKKDTQvQWyRSuvUToeW9LrQYKCgG8VGJPQK9JjkgBsbaXjQa",
  "key31": "2ViEvVT8bGVjpvuLgH85otT4dGqXuzfdadiCuCrWUVrFoNjmVh1dNjmHuEze5dw1aBm7PW1vM66NCxohkVZv9T4L",
  "key32": "279XYaaxKgy4425XCz5f24VEyHkQaX5B7gWJiMLXdYXXY41FTNp5a75bur87ToRyxYUrqgKVFHueiN8tj4rTubQA",
  "key33": "4ktUuBkt478kBMkZaAHhHiCZX4wkvS3hbqaPXkF6U3DtXYSS59kkBtD17LrUKsHZAu9D9vC8GBxcFmx3GQFHjF93",
  "key34": "4St7EtFB4nwXx7CAjnmy3R7b54fjqBnduh5JmMDZTATUAbCBaWaMm5TRjpBc9Y2swjc3ChfPKvKCfTCqX6QrYoh8",
  "key35": "57wpnLLv3Wea3jubZXq2eSejkYPsUurMPn52prpa63kfdRR6bwpgVtBAGnmAZeSr3kWC3cQv8dUEtxMeQbxKZKpt",
  "key36": "3JmSLuA6ro8CP6VTAEMqeymxXAqx8dt4RKPeuz6DJPYSxugXRTSbH9TrPHdoRTCfDaxVHE2u8dHfpEUXRqEUPnmo",
  "key37": "2Aox8JT5Bs2QvAPiccdv5S7bhFspYdHg7p2fTqbHuBp5QuWG7HhP5yPtoXoGE1NvVeyBnCarvygjh7paP8xaCHmr",
  "key38": "56ifyWRuPTsouLG1ZRHVxKrCuDBcPEkV9ixytQntcoHaAdXRk2r2QQECNK9YtZYeAyewJsbzYG2KrXc9cSiM2qJd",
  "key39": "5XWZB7Gg9sySQrBKPLfeXMxYscVTmouquxCwZGup7WPM4BSda6zJFMnhqYWgaYAwWafvaTjJi1VPDoCcSg5QJ277",
  "key40": "fWspgHPGpjbh6i3SKLb1X59nYL3RYoyjXjcoXzffNT7TebfoCF74HwuJaoX5i2JLkyCnawmCa819GgajKZUW7Yc",
  "key41": "3c1Bw3Swnn7yD67cRz65VUBX3RP3FekmZcXaVsgWCTvn6fVsD3jG7821ngrtTF6nLs4thangPy1tisKyco6vBchc",
  "key42": "pZ32DVRXXa4cWxUY7BVcGwpSxKAAwsH4k3UcVYqwhJ9TuXNchVJwz1mj49kbXP7k44xXHHNS8f82PE75Q13Wpds",
  "key43": "58M6WxYRd8KEs8Q8AhAjYbSN5afmvGhvUGffDdX9GaMWDebLi93i7k9W5iBKWw1zuLkaP7PnxXjyGAE968QqEBsk",
  "key44": "3GNcHcbQobxe7oQBJSgswAzGsQhWbnsxmiDioQikmGWwsML34BrrhXH1WENDe8TpzCYptR5NbnSMFQbWVKz4Ddy2",
  "key45": "4j6GUQJe1MxtnLL3pVqnRMEARvRa49mW34dnE8MeRf4y8dGNgv2ETXJGZbQLwn9tPmizmszTEqUXkXDmPnku4S7Z",
  "key46": "4XkKPcALBni58kn3qf8iHteEmrQn552A8KSSKUJN3Gpqbw5HWQm9M78fQNUi9zUjMzFoFaH6T7LaR7nkETmwWVeX",
  "key47": "3bKcVXvAAaqtR9KUcsAt1tw8QxXgeD1WEP9cPjsKxagsmoAw1FYLMQmWSBwbbPLh5un4jLFbbQhnbPvEK74pQHHL",
  "key48": "4gzFraYoFAWKsfVSMv9mszXyTaQt9HWSRQ4zLinLH2787p5XGA6979nMq2hqomg5pSZKEyggC4zbuVDSunhY7God"
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
