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
    "3ofMk2kV75hSx82apm8R8hZA2PdJJinv7jMyDJCEo51YvbPAnNtD6aFF1QUxgZA7PdFsyxg3tozdCFuFhh7BGjeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55HX5twCiirk6ju52J87jdYgMnCzmzDgQQCVdk9kkY9apSyM5FfyVEferEMwNpsHnpm4pj2Vh1PhrCtWXP7MxKHH",
  "key1": "2h6zFRrxfmSgmzhEvS6QrE3mJqaFMam1QztmDXj7URqkrSjmEdi8WS5oJTzgyE8hFHwt7SnaUYcjw2sVWAXpKk1T",
  "key2": "35qawWddQ98FfBmNCLS8cKbQGmq5ZvHq4YeZYinvJqQJyDL4SaeqjqJBAvymXz7Z9xRta2EPYrh7cjnKwSihWaso",
  "key3": "dpCjiEef5r5MTtPBbpiVxgb3z42CnEJ21WWkyoRz34FyYiorFySV5ZSicKaATFYM6Fq8PbmFyettnhPn95amKiJ",
  "key4": "59hXqrvcPNrMZcJLjt3CJK9CoTx15aYJzhVkNHDeQJGvoGVRuGZDM936rZEzSvjo7NcgedYaWuACZvQMKVKt6A27",
  "key5": "4vBD5iZd9sDBE2EtoDorpKK6Yf61rzbeXmgyMmdAsGsZumymyzHzFzJUMbzrESMP6tWWggVzEJzyFoUgFxBAcLFK",
  "key6": "3eNvuKrHMTGk9tcuRgwsZgKJ8WoNAZLrjbBqboVLfUYubQiyVsQDUaKEj5AjAf3vo5dKf6Zi6oJiS8ZVnHB5n9gr",
  "key7": "42tg7Fn2u4ty9XA3Zh4VcBaT5KZtbRYy6MkFmBk9TgnKkV28ZUdstamy5wJTczfvzLcFT62WqFEn4vTF96zYgESg",
  "key8": "21nRJZEBaVnrCAWKJd6bGroQABpkDPb9o7PdPMi4xW7jRdiYFNdTYkQ3RfhBxFUekKgva4oeZRteXGPF4BgtzfCW",
  "key9": "3xLau3HfQXYqwEZLTHDD8Ye1reguKDoaYZWfQCDkNxxcoQcNQERV8VmXmgfGV5AE1DteTzWStS9SeDEziusBAGjM",
  "key10": "5DyULG4Pc2MLRZfe1WE2rNoHHUg81i6NcjRxUAA4mikY57wHbwBS62EvdZxP8ze221oZ1GGBSHHFke9EikbJHJGq",
  "key11": "36eyrz56WbQ2gFnEPxWqP3LPkDhWMHi41Fq1pLZGHAenjTHCP2nvhff8LNueax4dYzu7nsiYfvXoFh1Zwy867u8F",
  "key12": "3hUQft9VD7QbZEXJU8FvnBmKUafEW9T85DxxsJEz6njFE3NvVR8UU8Zd9bFez8M39XwyUmwuQX22ZNLJxjJStwmL",
  "key13": "61pAF9sRZKNJf2MyGLjgPc7NFE9MVBuwQRp4UuQTEjYXDpF1kd9FmMeDWmPvvp1tCeTuGNrFhkawiCBHRT6hj5m7",
  "key14": "4Ed3xLgm57dzuvJbsa9aJfRXx1382vMKLzRh1zzafA95VQLXx5EnD9VpHuEJ1Yn7idCPX9yaVimW4raZfaqzKTp",
  "key15": "33aE4TLJnEG3tz9KTeLu9ihLb27mwG4cLddDz9PBBW5PEoo9u5eZaHpj2MQAu7DPmNjwYKmNdxiNUShPB8TA7WrG",
  "key16": "EMPgUDuRm3E7EuUhmm98eX12meLWcubq6yPfr99gpUTayGZ26hu7Bsht8c3aCEH5YNjstdfb3eFU4YeaGZBDjR4",
  "key17": "56m5WA4wT8nBrXKuAeK7karU1WP5kfTMHGZq3tCF5VBHNS3otpSdeBh1a2Tefcus4Co2rfwhcSmdZWkPTLohXA23",
  "key18": "4Ba4FW5A1yyhNXW2E1teVf1zvgx2QTqthVD83GYRBo3aF57u74y9xqYUmDHvnBfMCXaK7rGEFJM8t6uT92eHLE88",
  "key19": "2dUifgh5KStUrv7HFKhsfyv6QvKKdm56fLP2X8HdxSSGK7SKWgLgzJ399Y4EVh1r8UhMMsVoKqzixmcrQrAbpiYp",
  "key20": "5pbvwQuVu3oKb3CzDDLuHyxtkDpShxMAWGoyTjWtacTYXgZ73iVLhUb5wbUYDmNDa123n3rYtxxaG9J3cnUo5yY",
  "key21": "33cMXHE6sXX5xPKhGm4yQwkyJTpFJTYWLpAy9bxbDqF1eGbUh4YWKMDqLVZ9LQskEgheMNgjvgK99DB7Ax68AU2N",
  "key22": "53DMYBMsymuLu6Le93pfoPEJpuJs13BFKSTJn3xxhzWXPbvjhdcKMcM6raFZ3T4P9taWD3powYGYr5aneUhTEug6",
  "key23": "os8E2bbACPuQFbyDdL4kBtn21hqrTmhWtdhwif4wHFdKGxditByATZz5PmjtozfbCJH4aBgmLduXTv4idzymNTg",
  "key24": "3QyCPqQdQ5Q5uQgL8SNeySh5kuCSrfGwHPo5vXqwZ6jUni9VFpCysAbbLtymVinMwCFQaveAJJtApcv4faNEM5Zx",
  "key25": "66snz6zjnt7gQJ6Teg1kkTZKqoSs1Wu7TDYcmBFukkraspxnqe6WRAPzbqTjAMGrWj82ZPBud4fqjPPwZ4xg148k",
  "key26": "3naRnmYHGBHL9jFv59xZBMpPRAUb1PzrcMspitV6YAiDUq1xQ7dHAuyMnkAaUZjQDLeyAxWT6rbCNueqfsERDJK1",
  "key27": "2UwRNDoYbrCGfgPZy5pd19kPvEysH9mk4YcJCJKR4Jostthy6kxDhSLoc5Q4sVxoK59GPGVDdrwEyU7RkD7paa12",
  "key28": "2hnKZSsFKJFFibSXgzxEbuknpHDy9se8GxVkUBH87X7Yp3Xh46vHcKpmKYzgHhFx32i6ttCzcRwYQzSbpyARM43R",
  "key29": "Fe2iydK6vFRCP9nkD67fuaXre3SG5gip8ekeBpmghYq2BDKMAcdkehVw9usNF3ZPXSWygBLMGAq9tTfG582E4Ja",
  "key30": "4tjSUdBMUDPhKpKQNEeaNtnJn7rCno23WgzYUEfquAKrFjsR6P5YpcVvMMpdtz5zBpibirc8QWthhmR3GCQ6CD7a",
  "key31": "5YE16MeA9fLNrib38Gz5h7x9UPTU8KUTT9GFvioqJ9b9eC86RNsZS8FLsdW8ZN5h2JP1HbLZtx4oHJQjiapj5CHm",
  "key32": "5Fr2encYFSpPA16tvr7KxGBNhCuuneyhuJmhdzRAzu6DHhbRyjT79uxzkSVzd4d914VRRGnH1axfEAwaMprdXqi2",
  "key33": "4GXuMkzUANKstYmWG7fh71yJMpN3JsNm1tQd7XSCGEn1m5tCGJiHZbqXJgcdSvSw2mcUkqb2TGLiSHa4RxfVx4nd",
  "key34": "4UY5eWz2fmyaisbNNeotWWWrSesR7BqGDQMC4XrHW1bWob2NsVUccqf24VGxGtREgLgRtNADdRKQSgaAmnMD6usi",
  "key35": "64S9jEcjZSMX7EKibZBAM5zgwWChERsF9qmSxLvwwxwt5tfgVexRbLWsDTAb2abXzjqvwqnCP1N9iwRkhxbDAuM9",
  "key36": "5SRGAKZWPErG5ZwjvmDUeQfamEYcr17wfUGBQ4TLhaGb1dQYAUaRwMs8KafUhA5TsjZQWc3mxYXpDY828YmmZTWs",
  "key37": "3c3bLBh6eNQwHZHUd7PH5EJdN3awxpAXoYCK3RaggQuAEzXfwEfBfKqHLCwoYSiFwPmbjFeXAVGXhAyrCiNepXTK",
  "key38": "nLKQfz4eXmaPXsrrgu5bWy8QPA1h5K5aM612mg43MrBJWhDm6HQdmDnMLoFSygXEVQJ7FSsGtmnZ5pBAXZtyA7B",
  "key39": "2VxccPiY9t86NvTEqHqHd3Eagrmd6NesnVSwbEh8zYyvvoLVvHMTsbQFxfwyJP8WUWTE3Epudptzb8iE26fGsvRy",
  "key40": "61VFYunpBm6HFSagiAEa9UkUUB7hQABxte3VnUYkESMhJN16PmktWy8EwujJDaJDLXJrU7NkBK3ooKXH8F6p8u91",
  "key41": "5NvTXrA1gUhDYPNgUEEjdunzYqBa9PwLug23syabdqMjFYngu4782WBnuUtFbT9xSGB1P1kjCXJM83wdWRVqXxke",
  "key42": "2ofMpmqXwDC5NHKYas1dLHtEM2bgVn3zz5YYG3vuHuqiZswnwfCp1LzFabQUYpTsar4LBHSzY4v9PjBgQxmXsAyD",
  "key43": "55hV2A8TRNomosebG6oNZUbTeygMxK2qR2ZrYF1W89Uf94NGW1mTPQWHfJs1p74haRWJzTkm5RMj5wxygdYKjQD3",
  "key44": "ujBHRo5btqjoSgTTSbkS5CEuSWBa5GdrmD2jYHrJend55CvvDSZhHkytyoU2WviBbnSuhrsixARmaLmWqM8XWer",
  "key45": "53uZ8EdyJFw3gPzV5AoXWPLYbV4PbvdBG3RW2frKNx1wu1byoNDU7zHdpXfRAcTFEkHKWgL4ibZozBErrEFuhK9g",
  "key46": "5pYeBSdzXqnhp37fiqxqTuToBdSSAWiUGxkLtVB6yFxbsoFJ3kskzeJQ6aMW6BKP5w1p9r9hBUEQxcsXABdE7RYE",
  "key47": "6m4WyjRxiURersgdtub2HdrTCfk9cGq4Y8PTK2b9aL3ZG8A3Q83BHmLjMnujrGT9nEgKmixbuQCxJuKk8ALccVm",
  "key48": "2zxk5nWPsVm1pKKGSyfm1Yd1D22GHgfm8bLD8uEEWZkf8gPqYRRLXnymHBLsEig3hCmGEHHoDkhmLNdvL77kyJD6"
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
