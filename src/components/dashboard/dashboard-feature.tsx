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
    "4Cd2ADyuJXCnrURAvxkdbhwycnRAPNbPs9UdkLkxKFGnwAPp44xnA4WrtjmHmX4nuxNHVg6wLPevT8QvA4XbgjDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t68dSUsn3jtesJG1gXKMKBS8jiwmt92yorMzC49CPeQTtB7yfz3DDzXrNz3yfyneqheTNQjbCVifnDLxd3VaJwj",
  "key1": "3jdU9XPhBn8KCHNE1Yi2wrZmR31yddSHn6ViHwkkJnuTgCP3H1YoeeG7RzyXqVovkABioM5DmaxhNXnEPEWjcTWn",
  "key2": "3s8Ms1BBEfxmudVR4f993foVo32zW7nyYiNgt2NRyDhtyzi3EAW5R4zFTLbNVEm2Z5x6eqoH3qGU953JLszUe72Y",
  "key3": "2XE7z4KjHjmHTMS6sjsm1preyhhBTEpGP8u2eGqvwoEr5Mmff1QtFgFavXp5GKAUbiQtmCC9zaiVee6cbAji7DbH",
  "key4": "bh9RtuTHtqABUyjUtogKvc9CbWRmdmBsJTYc2j6Sc7hZvXDXTeDfeQrvqeo3cjGFFWrVqejxMBWcFwPcVcnWkdv",
  "key5": "2Cgq5AFE8qYDTcPnqdr42YXGFGhgu2viyvSaBQVzaCfeCMFdSbeSsV5jbfN8ZJ6Ly7N6WKDz4t6sSJrTBU9tkfQq",
  "key6": "3kDz8vfxYNDtuYGJaTex3sfPS8EKbQYdSchq9RHJwgpzRSu7q45Aq5wJLhKgaWPFRpfBgdpSysfpbjd8hJ2rRRJW",
  "key7": "2JMaya1WARMHPQVcF1XWAE9LGcwEhLB6APU2SdgWxE36oZ5ywdUVP42J9geiVbQuxNGGA3uLMrNbmp4Y4aazvohD",
  "key8": "5UgPJZYaCyaKWJRzAiEQEBynHEtxcdhQTJL1GUagwqjmCByWuCcGmRNgLoDZsEf1iowgwMCx7sZLiw4B3mnoxsqS",
  "key9": "22ZpYvqc4DVT3YrzBZggoeRqfdKLFR4jH1aQncAWUo6AoFWvTwCyFq1bcWxdQCq4bSAAq33x6YSuFCu5SG5FNXEk",
  "key10": "3zFKK8t8VTwugZtzKxcwWQH3SzK3LkVRXVNvQSo4L961S2qafqQx5N2pkm3ezycta4EJbd7LJEFQDq1ZbakXaHi6",
  "key11": "629Z2vFjHSn3CkZar8uxgicWP4oDNUdBdEFXAWTLpuoBrkC162zh1qiGqGj7tCQLT2d63YWjLBDDqQ8gfv7fbWt1",
  "key12": "UGitR7Jfq8xfaxhkAsgxScgMHdwSYqa5V9bBmzbqty3yox9bitjhvLypduruee4BzgEyhk4mws9AaENmkjipvKW",
  "key13": "VqgattYvoGto3QxMidJiDHyLsd8faRDJmwHEECJkjEirU6gkr5szFq3i5rAajjiBrTqmmrNMoFaQjnaNBTAkY5Q",
  "key14": "29tVj9owXDvHpfC4caBMXNwUNDXTx9XgWJgznYfpxY2LAZTave3RsS7E1vJCiRwUaRaCHggESQZNmMaqdufhbqd6",
  "key15": "2mzxfQWYhWknnkcGetC7SMgAkmXdDV6GRgMMrTa43P4vjts8JNAJYCBSLtW31BCyRsKsc63V27crdxABM8MxmF1D",
  "key16": "2X8RbK7sTgzQUoR3zTMHob273FbXkMrRmBZJ5fvtrMwPYkjYBeJX2QLwwajqhWtuBq1V3oe4ZUcfv3Sk9kKj9yB2",
  "key17": "2Qtm8hUr2qm22wiPos51afUeCSQVjq1Nivc37HcSHwFGYsKyM6kT2Lt2emEBXix2VBpUczWC56uuoCyAwLortiF7",
  "key18": "34LX33MuvnXgNvU8JRPrnfNa36xFyuaVdU2xqWkyG98GNT4jsLy9CNPoC675Kq5aMYr8xbFVpnbSLEr7PMte7rk6",
  "key19": "38Q9oVThLJeNeb29F9JbNKn5KZ1RL7M84Tofv4jXWwEsjjtQLBwR7xV3Pz2zcFEC7LY1429ywR7ntRBZurHGHoTj",
  "key20": "mJJ7aSb8TgAeAyEjm657iPGR5mXACPxhz6zomLReM6Hit6MkVHkiuXBSmDPzxKeLXGKNvQvtuxiR7gFbmJm6AST",
  "key21": "2j5qS3h7P1E6v4NiKQZR4hxTkbvmJVeruTrprsoZ8PdkdN5nrmvbCKMz9RqZ83aa3icLd5KKSXrMtGEHbFmCfMW8",
  "key22": "3g6U8NpZ3NKAQmWF96YqEWzp9ZReGw64fXtFDcT3owE24hw5YpB8YuTdbFpSrZTfNaSWnjgQGQcuKx3STBsMYQ3L",
  "key23": "672ssXuTniXHTJ1KDncNRdJX4Qob3pyD5bYGz8teR4B5TomRqSREcKyt2ye1LoAjqdUZeuPjs4Xrqt7p1BCc8gBT",
  "key24": "5owbjKdGCwxxjgzEmYRKoUVgvTwi8PHMiacyrj6LBbbrWQfhPn73r9DJggK1ZohD5Mm4DrytkCC6oZM4GdpiKACa",
  "key25": "3G8a9vczvp1L5TahrWFeF21GGEQvh4yUkHmFqXrZcuVujGht1pqBsXRasVAoWa5ra1h76rmNJxdXeGsq4GFG9iVe",
  "key26": "29RSwacVd1nCtHRk62tXESeZB5KMhb578ZH7BmFKJWRtpKCDJqbmSq1HmZu4EP5jpBuvXFkpqziHPNnvmHtjeYbL",
  "key27": "2EtTyJg7mGy8PAtTQbUVsZCLCwCTDJqEdUuXXx2HeHXsKWEBUgX1t9k8VyzNRdi7HGMCJoxw3eY8G1eE8cipZgYd",
  "key28": "436T4qisjyRFUwDHevYj1wz3PjesYKf2fSLvCEMf972CPkpCkZ5BWcWq67WqYrDPMutTCY4ErVvt8864CfXaY8hg",
  "key29": "4uXo2pv5sd7Z668hxR5BWB2qmoSyvEjKUhoMAyx9cXEAiYKcs95XcAA42tNqXkvp45yejdhzKHNuvC5RUQCpzrRc",
  "key30": "T7Uj1XmexWz6v9Keomf9SAmt1DYrk25xxfXHonvjsH3E5UB887M5MZDK6PBcaUTDezcFkZ4M1PaiurCXCVv4CGY",
  "key31": "wiWSvNL7KdtZENKjRsGG26ZWELNbfuaXoQkfYXDYQYf24onKD8t65Wb6m1a6hjrKzMPWdXHGQiUcDvch5NBifBH",
  "key32": "4MtKgpv6C7LqG67E3C242izxtNWvC1gAAyHaQadozBFogxo1HhXxi3ZpXsvSUZn982e5wxLH6dPvvJHU4ddHULQD",
  "key33": "3FivEN4KNteaSHYUiAQKQXFsjdePPWzxaSQSVfm2M3Tdaeatxa9SNBECaahQ4ALGyMsp3T47Vf2Chrzjaj3W5xwt",
  "key34": "2TxvnYPTVRK1zBzsgrKtAeGhZnHYiAfWCKduoyxHMRBTa5qUjYsB2wLLQTpyikC3bu8cczFhBKzyP1mzTN1ix3Fd",
  "key35": "5cr6Fqso7YCjjGSzzSZdQe8Rm6cfWyVE9gU66TY4oYgsYj8XECUonSYdd7CWZ96R8q5ZETsivfSauXiF9Yk8ERnq",
  "key36": "37pjk6GqamTyReywDgj25d9iiY8xwqaXZpfBqUnx6dzt1mMSZ9BxJnjqVTxWdTeiFK1SkFwSPPZzZzDporvUqZ4H",
  "key37": "5XtbgUMFoqWFKSu61hU59wVVt9f69CWrKwBSy5bEXbnvTNf3JZGT9XerD2uiYDyY1bGJCmvW9h7poAJTBbJsKBgZ",
  "key38": "hGZbV4faeocexC2ygz83jECdRt7UoLVqWuAE97yoitykeiCPmZC2snQdhA88hRVvgmMQjeiX1J9VhK1aqD6Ptky",
  "key39": "3Gg7GSGrrEwgLLXH2MnUmMGLbaGrwF55TqXLRPTSmULfLmaq6t5ruU2BGU7oRp1YEa8L5fxiCveq3nh22LNsEuG4",
  "key40": "4Jt3PZ5no8P4Mehy68NSib8sQjWfND5h8R113phZXegVWxKm3uUdganEGJ5Wfixmshiov3DGBd7YNfcvGz51SwZN",
  "key41": "qfmXjWBSLftJuTPo5UbH5KiXyP4HHzv7BNNFTbB8JW8Vf9BjYBnpnmgL57TjLgg8hP4fYj5YMsJ5FMVJ9P7RCa4",
  "key42": "RxQftE5TLEnZcqq4Hcu4zAabBLMnMvAYtrpMbeQPM1FonVNQVSsYQ6gBR71asdVmYcP5YzD6mA81Xc7Ntryq1Mk",
  "key43": "6AjgT8PC4QSQZWAaNL7L6TpqSim1dREuHogQVrFZvdbqMjgFghiJ8QxGk2fPHAzCzLjz1BSkBJ23Mpoxejs83yE",
  "key44": "3EnEWyntTT9HoAKYuEY6AGNB84Gx1ruGdFkrJRfydp8WU27Qea3dkcqwMHfWtLKTsmsf2AwjZD2PFgtgC99FFtU",
  "key45": "4UFModBEpRo6qWwYzxjKkmmfjFHFzT8Dr6GPUfFhgb2qnA27yqvihcBXdySZ78GGBgiRnpYMBFX7G6dBSmsqBdsj",
  "key46": "2ut35Tg2vzJduYidvKouRkDwaYDECtdo5wErfk92CeJw84VBXH37WeZft6Rv5TbrRZLHqTh7w2Bp7JM8kS4wq1m8",
  "key47": "3P4dL22gEp6vVjH3D3CMTyp2921CF3bxy3KkcapNyRoLLu5TAtCeL4HMP75iSyX8Mw7G1BG4z5CdwPWDWUHGoKRU",
  "key48": "4dGLg9EtEtGLJ7DGuYRvM7MNyHSdNcn52zeS85YEXhAvh4GAs12DLiKhpkNK8sR4FsaS464SC47rWhcHKvcL64M4"
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
