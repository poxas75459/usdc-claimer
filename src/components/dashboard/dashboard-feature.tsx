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
    "22xQGcKrUNU2nSwPM4JASUgbHbo77AkqioRC8KiAPDfFXqq3BXwk1iqnyyestNDNZkxKkdqkXyiGtiSeaxfaXC2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iAbxLAbgJUBQ1krEJjDLPeap5Gq43MsrwA872UXP65SiQuoHKWpqSmuXUETitvsqcFXtYj65KgpmT9N4TrDiwP3",
  "key1": "fnfmUgtkDBwxbqjMYoyrUvrQbnzY14R71s38Q1qhz2hyB4J6iEwbSiCDsjiy7Q5aPyjUkc98mLsEnQgtKoMeqN1",
  "key2": "3EaFtS78LPqmeX4uaEprNZD1vMQexLCLJKFfbmRdUWk8cS8ezqyRDzeNZnYQyCFwnicPeKyQuRZ8pnZ6u71uznVj",
  "key3": "2yBjdRFx3kLhpPkahhkduBGm5WrTtHU5M9NmdTt4zBC1Vwp3JP9nN4bPEb2L1nB9a6jxdiTdtg73U8ZzFb5U4P4s",
  "key4": "4o6tvLNvqmrLbWjJYG65HxMCpa5McJYT2L4amzQhqcRR9uC9HnUvo6ANQMrtxsx4qCDe1aU7wEp4EYwNcGW3wSq9",
  "key5": "2vWSCCvfjw9DFA6jJJZpFeXkAaibqVVJkpaQKSY11e2sfUrpVb3pPxXddeJcCZBuu13HrxrWPguZAdWLXpnCp6m8",
  "key6": "3XARYARPS7BSTV52sAUyrky1diQWCbZwWyXSh6VRKBMx2P14XzSmU2waJtTc8nDtzxEaCzTPM3dHH4zdwS2g1qtN",
  "key7": "5B2xk6Yvfd2iLQRyLmYibS6msr3Ck8FVgj7RqGwC9wYEg3Dnd4Fyu67iTfEdoPh9cQETNDxXaryHhW4qAAXjryto",
  "key8": "3euHu2yEbcbnJFW9GEYeM3y6Lrofhf4cVYHJKnQwmTM8fb1xSaL24RxYmS31Gf3EWw6DnNTZYD7UzCviqGPZvVDZ",
  "key9": "2234E1pMHSUCdVt6tJPXWiA5fdcTE8w4UdxJsHMvN7X9zgxF3WvMw7poAuU4NYoy1NBMrQD3rD4HeohYsnbUWqRS",
  "key10": "5GgEZBZGx9hApt45HgbHALGL2aanv1t7iZRh2YPhQBegauepwEXfDp1aaEjUP9QfcMJpPcqWsPSvyotzEq4Z4qfm",
  "key11": "m216AL2hLq9mK2rdwZjAAkW9cz27wXnXZLSsfLaTTh7Ca9DFnjmgeS6F3QwZECkkQkHuFrr8e9qbsbcku9fy4rq",
  "key12": "3UC1tz5zTHj2chADiJggBLnzfnLnm3wKeNTFW4Ypig6jeYwXk8kBp1b83PEuHYGnWmSPrgcfwUKNBspJQiQwyTY4",
  "key13": "5MCmk1zVQ6PBdR47QTySmN89e4RbDqSLq7YLu2cS7RHEG5baTJhvr5JabPwfjvEnbUgDH4Xj635NWvLsvSv4A1wX",
  "key14": "2Kz5Epnz51iFVNFTRT7Wtmp3oKEFLNewTvhxx1K42kbzunHHgxqLMHeMg1QT9g9rnfEWrWVicqSPRoiosov1gVFn",
  "key15": "pdm2sjkv9SPYZowUMUhyP3BYptiHK1ukKRae41sLrJ2932EJ2VneLCscKRVkbe3y66zm3wNW8YoTxQYD2ZcgPKN",
  "key16": "3vtjUC7bPY9NuF5QErBTK7cDEiRsdkFynTPnmh7gu2nYqTBLPkLnk4Tamzw6kHnd8G2ju3EMxddEqHfxAjMp3iFi",
  "key17": "5wxRMy1Eh41kW3BCVHbEnUSBN36WVHhaFNdPxuGgbCyZY9jnCmuev8kE7y5h6P5zyRj5j8Y3dtzVvVkkXnATrn4c",
  "key18": "5QwXD9uJ5h6LyeEebvK4tcsGyrAqF6o1KiJDJG9xPPc2CVArjB9PQt8M1fRCuQmb9k17EYirpFW8NzoQozBC3qG2",
  "key19": "23eMkxTEQ53ELCs3y5qosKdwj4RHrvHW8eNj9dui8Lv7BBb8f85TJKbDYoo9UwGsdeCKYC5TLV84Xvkz9JrUBeHJ",
  "key20": "4NdRdkqbsDpLY5UrCyj6wX1mjEDY3yDdse5nLRPH4e5nYqhk8ovGrHCmc437auJznKciD1ekMECH3jpveF9oGbkN",
  "key21": "zXXxRGYYYnEgBVmZqfZvejaa1u886q7hRcER2ACBpbQBfQ284J4ZZBs6aE9PYptZaaNZzR2UmKTUeDVhbBUMfr2",
  "key22": "524akU94uXmqHUGmJvjuYNJSDZCbpvgbWoBRzByxyfiBVp3W6AkbYgX6FMZYj7ZasiPdnNbUsSANZDsa2ACN5SBk",
  "key23": "5RnxyxY1cz4u29RSp4GuMmRHjpXwwxuy8G3SyGLJiGRG8y2m4rwWqWSwyaxPcYzuAFVqZcp2itcCrJPYij5TeGfy",
  "key24": "4nRnWXZemvu5smbfmjfdpZsuoXEX2Ui3mcj9z48oRfexhw8xhsGY46gMmX5uyc1Pz9xbaDzbNsXVGrxYJF7v498z",
  "key25": "PJZkA1LK5y2MoyaXQkhJLP53WwnarJXdFt1v43SBdx66v1z282tKSDsD5MX3v298GVQMhwEn9SAoKbVMcRbFhWj",
  "key26": "2HJdFYYSZfX3Akd7YuCndU63rNDsBupDfHbxnLP3dmRt1AMivuGDiCy5xQBjDfDaGiUYHsmuwLvzsSreMGs423VP",
  "key27": "2DViNJDs4XXDE3G5MbXf9bQmjTKyfWydgkF77eZQ5iGF6o2ZV7HD4jXLrG3cAUkEzmCDdgrdiJ85YLhw2zhgxfPJ",
  "key28": "46dbUfBpa7jEUXZdLSv21uj14mf1LKZgdDzXcwDCFLHevgnSxsqCRpzRarCMp3nmTh3Csm4gGxAc4n3T687wnUmw",
  "key29": "58bTC62K7N4ustm4i8b6fi9w35hwB2gWz7GydgwZCYVwwPSZFfZYquwmWrYQ1SC7JFcASGkuFT1tQEkkwt5vLbJV",
  "key30": "jaXvG3pbXfkAe128XKPGQfP7F522aPue6YCWAhck8fQhvBoNoJWDJGsi5nhYF66qiNcTG2GEdrfRHL8a22c3aRX",
  "key31": "5ggkE3DYowKsu9Fttiy3G8scVSHoZzhLXB7eq462Ktue6BkLZdNxWzNYCVb9Hfb88bpZ2fJ1XwHwWJALmjJqqDm1",
  "key32": "32DREo11qdvC42KtzMRi16CHpDYmq7nKVezn2gKBCLgDrnhnBSUKB9KuHf1gtC9p2WXzkCF7yPyrzwMb3nUwdcHA",
  "key33": "2NaB9N5Joz7hRobRbGTKXahXgvF5sTvXWhXqKVue55odBGzh3bTEZ28YQJpZ9UntaN1Kz64uH5MYrEWFRhutQA1r",
  "key34": "66a7vbweHRF4PbSFNVbfjNRnjqSF93aaN5Pcx5epygCfh1xrxwt6C9Fv2tPZFEmbV8Vv4rsubGeJc88XcWe2y5NA",
  "key35": "5oxRHmtSwvhxfKB9dQUjFE2HWMVZL9z4FSLhuR9CUUakphmTXKxzRZuD14gAMsd3JHHDsxL7fH3fj8cwBrmXkZRK",
  "key36": "5G4iqGoEJiepgGTJAqgMkiZnFrHb6oZzXMJSToPP9NbUnJmoUUEiwVSM9Y86TNZqPa4zMscD6JMsERFB1RQCCk2E",
  "key37": "5Yc75EHigDX6STAowcosHi3y61cnDbFjzm1QFZaxiWhJigbBsMg9H5yTgP2zcHvwGUxf8sSC5WBgDQMgf2iixVcp",
  "key38": "sMdvMXDoStXHgTiCbuJz6c4hgUjffMdQsRVva8rS1pL8sC8KLjGbb1NU1WaifucgXFXMFJbumGSEsfDZsk1ooVb",
  "key39": "2H3oApCRw4BRRkBj7gDBzJ1LGNsCgSXXuC9xioikVGpjuiTC7gc53zwQBgAG83cWzUqqTALUTYcbPpzQntLUgoLe",
  "key40": "5zSLvR3fWN4x2yd9W3jJVJeraYMsjDEbjHwBYPTShdPcerjjNnB1qpHynq9c1vGH4aafZNtgfRnXCCKpsfvdAg3p"
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
