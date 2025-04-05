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
    "4zLF6GXNtZR52rCcdG4CYJgJcmVRpCU3sayB1Ue1BiX6vhv991ZYSUndXhHTZbPW9hLGhGGjVHB7jgqKXydw2446"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rNADydU1wS6QFug55QSUKH4B7kfW4tJRUP13KznEWDgNcCPtxreusYhnZvC99NvQABzTsCKFUa1wQb9XdX3xim",
  "key1": "53T7cnr864XECgW8e1g9ThLp8VQXybpLdf87whgWMTSghLLdS6DZSXRBpiooDWQ9PQqLAfamgyayZrfwszYPxscj",
  "key2": "2scdLxRSDtaizums1Ms19Prs5GE2gKmssxtveuPis15WTiZtp2Yyvn5LwknE3Vzm2UbxztaVppPtDK9g92q237Jz",
  "key3": "2mWAtp3VJ4KaVWp9GU2bppJ3KABHf2EfFvmJ3FqFot8KTYxJyYoPhpRtSqgJvk3Qxtqtv4e8rkEksYVWoj6J21s9",
  "key4": "53pwVvpkyY2EZn8BCP5nps78FgjdJS27vV2UjVZEXmeSCdpF1BagPArxWZCMXUwUHDoraW16zbYQsavSJrGhSSca",
  "key5": "4WTJ1NJxhuEavuqNCjTx9MmahMACQLDYuWZyNwDix9siLcPF4C5w3NotW9q2MLonMbWpEFjP9aiCHST1pKRcxP8N",
  "key6": "3RBrdbfTs4gijXgxJSFj29CfFD52zGU4nCa6G6dUDjbtwXiQF9Si4XzWG5aYd2M2vgow5jUBJY1sCJuKqF4JmUVy",
  "key7": "48kTd7eXjY2aqtcgchGHyvXMYy615CmXKbrsNtEvKr8hzAzyMVTZQyQzRY3NBS668JyiYZuaGLsVfEUYRXT6t84q",
  "key8": "23d64ERfEc7DFLXG3foupM4Ao7SKhuqu2JcFRZakdLJUUV7JjPztCE8HuCduaPvwVZqoKSHxHHNEAW8Xmtzj6NMw",
  "key9": "4X6keBxYv3AZLWepK1jRR3UTK1LovaPXHcKdWtotPJuWG8aM5R1F792vEiWqRdTbgLmvMbwhDdWqCPnfTfFjXrCv",
  "key10": "2d2DwNshLu86PR9h1QmQEturQ8ABAPzwMVZkXXzFHxBoC6C4XwS6LGNKQv5u3VAJzB5Qa2twVJ7KWrT2YgFxFiYR",
  "key11": "2Z5yVDRDEE4Eq5YgKusg1ezYxhcE2qFJpkbymanfq3N2T1u6Hu2C1yeHkLaGb8m3rM2on1hgTpkHGdS6szzYXDv7",
  "key12": "2rEh1jtZNpDyxJuhCrNE4rFMV42b4JACngw9vdidWXkVVLPTGB4K2hirPiuR6GiBuQfqa9m65EquR8jLjqaYqeHc",
  "key13": "4jSn5V18TrfJLinpShTqDz1z7eNJj5MiidbQycSJddoJNvAftzZoh416T4eXoW5ZTcNDfmBNkbdnTiwYvvg7oi6n",
  "key14": "5qnfL2L2KfyKc9FUYZdAM7GbuwYSFKn9iKhWnxiS881pGrYd75JzaG1sNyMWXwgC9RT4QAb38htn3UoE56wtAQSh",
  "key15": "574wMXRXgbTD9Sjbquj7K1FTRxoAd3iQD3JMayaSZxyJsqpeFPJJ2TSHre6favZRLozvxU1hDmrkcBGEKdN79Rea",
  "key16": "2gSQRHq54ZXtbPFAWbYKf1ujEToQ17EsnfQAYpPyj65jNzudeRx3qMnqzR3JUc14G91ZvDbwpuFWiRaKZ9BCKymY",
  "key17": "2ojcTzaz6d5NMUE3pRBdSd5hkN3TzbqS3NUznFaf3WtmjiPuZALpSKdiFkqZfrAY3KpVE28qtJWsz9JXGQjURWEi",
  "key18": "26v5s8Ajpd938KLNQVZyzAuvvnjZgZpbrfmXi6FPgHuTbPzi4wc3YmZEgYuj52KEjkU1jxfQaJ1k5vXt1fzW5eZ3",
  "key19": "5cea736NGayEtyszrothVu2ALGBskG2fgmerw6fAnQzNvnrz6iiiboZwJgB73ME5fwp2CnZHjfAZKevDS5BWsywK",
  "key20": "3JuDVinf9FU6fanKGzqXYzJ4nibrMqgWj1F8pdkxHp4hwoFcvm8P9V3DQhYWsY3URNyNddvQ9SH9i9G5X8MQsyiC",
  "key21": "3N3FhPLianijvnmez2JMWbiA43aFE4FLjBh8owGZvsogep4avyswzU1LnCknqJyHS6B6ci7e2RL2dFTAwTyh7UuF",
  "key22": "5AdQsXMq1Xwivpkfy7Bmh55rnxiU4hoqDdkU3G1v9rkz57Wr8UcqPXmj9zH4npYSyN75pr6vy644AW3eFHdtMe38",
  "key23": "3CTYmTGdkCB3HCv9Wn4hUdv3N7yrrBFdYF9Nz5cx3HfqsGH73snGrizeyaQQJB3hocK2bvv3YqGMmMht3rJsurea",
  "key24": "2ocz3nytzpvKoXMA36ynZ74SFoBHb1bCkNNtJyCvmhYx36RjWAtJEpcEHMXfWzYsBJL2X4o5eavtKRBs8KwXPsRb",
  "key25": "4TL5Fs1qrX27X3tPYRNzRhqExVXE7UKx3PqVETCQR2Xw134m8DEXEPP5CyDfjW4Xa22VAjVbT6L9Y9MQB7QBdEQ",
  "key26": "4RSEdzJW3kVBK8mBP7Uhpc7briqa75tDXBzSxpds32hgYwvKZx8QZ7wFV814KF3BvFqkinfrGN7uRQbFPGEjGgEc",
  "key27": "3C43iRiyD9vu1WWdSjZ57QPvr114RDDwJtzau8uR5PgXGFXiXmDQotf91PZiPUm5GRogFefGhb5uQD8yU3cpkc3b",
  "key28": "3roBKsZDF3ProoWeJahJ59gtmLQSgSFPMkMtSLYrh6JcUiK2fZFiBzWXxnKhrnuSeEnH6fQa7ytCuWGk9m1HWphL",
  "key29": "4fd5B5mtCenFJtNa8MDwqEWCQhd2JVGPjGVNsSWQQWXFaSYkTNi8nirGF3EVWVAayPop8mUCBXnKbyUitDB18Fs1",
  "key30": "5m8bHGncFV1HXJRCYp1eQnJmGJ9LnuAM8h3sLGELp5umkcY7CRgvXyh2i3nSYPTnFehqHE9zhWKnQkEZ3VDjkPzf",
  "key31": "FwgcUusVe8ekeD1gWzmH6FYtpAsGwFSatHd91T5X6z8c1gVrhsSrXLKhsyZ6bFkgENP1eBU6BdpcL9ypRpS9Mvn",
  "key32": "5GBjxok9mgDZkCzU54yVmefR7YKWuBYuyjqtCGrwEH47Ln7Zcn9PpW43h5jX71k7cTHS943VAp2aeM4rZvAFw7vz",
  "key33": "445ktCcZAfgxtd8dU1oZbgCMpaUhb7cmA9yzBadz49VEUsnnAAA95FFsCnbiPUeZFnhpGiXMMUFPdhMDXNhHxt2B",
  "key34": "4KqncTZfmh2Lvn97zPysx7sFzkP8suEbtT9wzEPbzt5i2kqnefzZ527h5AuGnuQ1ijD5hBqGPbPcquzT6mBcgj3",
  "key35": "4TW58m742Y9jpqknFuDzjJPGQLaqPqQzLFxzxBXr9PwQMFMWtLcKLZAdsDCFKEC1yD7fufrvi42yCLum5LrtWqBe",
  "key36": "3uyZ8HTx1rrZBiiHe4TjrjBveYZXcGiMdioaNR8JnvL457KLfsSd4iwRtsTrpUqv1ZQWY4AEc6f7ggVFKZVyTGLJ",
  "key37": "5KfvekJWcnpjbPEdkFCLh9eSoTZ5kuLsscq3ngY4SqBwJmNoaSgtUWaqTqgZCusm757bX6N5Qb98SnCRgqWuAAXY",
  "key38": "64C29sVPxx11Z4VoiBBryagWbXA9Lf89BhPEXnJmiFcFz2ScqMABy2WZ8tF4sprtUpYQeif8YVJzJJcNmemJ4znb",
  "key39": "4Df8V789avb6dPffrvpy1meH22i67F8Uyk3tJLPCWWPiCzLsgSgfSWLmySnqDfvawA4fwt5ve1xJPwG93PA81VmS",
  "key40": "3M5HRCBdshc8ZiwfQdygvp7zjWtfDQim5qN6Gwx2dtZnvHbd85GHuzhjB36MVDWs8Xhza2FXn9vshN6W5BgHVmGD",
  "key41": "GM2nwDdTkXGegaX5P61rrhuvXV9GT5bFqmeD2g8jgJZ4BxzUFjPDC6Wgb7NAhsmegHRVNgP7kfxPfn9XSN5EDdd",
  "key42": "22nVVABd6SACug6ufNLLh1T8Fvryn2NgTVieJmEVVNvoJ6AWS5kjWawNXE82AozKtniwyqBMAQyPPvpvpvc6UnyC",
  "key43": "4eagEWNuJfJe4YBmA36VES4wHAG5hQm3tjW5drUZjoaTEXf7bxUiw3wDzLG66TfRcbd3txX37JekERL27DBDjeBc",
  "key44": "4BUPs8K8Yx5kFixuzpwV4gaiEBjcVBsDLNmeTYkgYRajUpJhsDnauvBJS6ccBmCXvhQvF6GXfA9ztCZDTWRwm2Z3",
  "key45": "59rnrx2fFMvVoz36RqSK1qmEcYUMMhycQqkaLn6trUoHdB23dWhRQ3jSvdquY9vnXKM1fcRGWi1gepjUmsCCKqsi",
  "key46": "4VRJag5SUrhYraat7NUJopszNua2cMLNsbH8EK3kFp5GXMJ3uJQmDWtCBtmpwSUvXy8E9M3jKopj3YG9epnm3HhM",
  "key47": "4yf2NDApanqD1nuxGfE8NikEHtGNVLXvZYEP4zbzzxtNXDH5FFAV7YVNEfsYrCJi7QU9ct327fBq3cwjAHcNMMYS",
  "key48": "2D8j5y9Eq9hCMPfzvnDYpNXfcnwTAx6XeTkwUZLfUCtqxwDTrEPyvuLyMsP4hqYGJBzTJ98g3ZDQqT3627E3YLpe",
  "key49": "c1SjQHHUPBoejgCYnsxprbzoY4GGoTP6LtankaqVtpVfCjYg39s5Vui2RbaVeNqwnpFj6Us5mCWivHqHDPJdiis"
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
