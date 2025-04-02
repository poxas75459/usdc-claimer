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
    "uuZJHaXMXPLoT1SLX1MGedoKUxjYo3NKgLAhq8RRvrcpLEoE1fjxfMNkzHcd16cMUHBZYsSCv5jAYsvvTeJ7z41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NG3jsrcbRriDHFWeeU5ekgncBq29pnW95Gi9nkoNaLhMLkqnBxm4K2vWBydAY3x1g2sJfWpFPn7mhEpg1eogXS1",
  "key1": "sCvwtURmwGJeJNe5E8vMmq1dH1vUJXD4owKyZUPKJi4VBNHtkRtNQ6H4xF3czwPY16i6LB6Upvq1dkoW4b5rsvw",
  "key2": "4JDEreZeghWU5HT62e8UL3ArceC7SKdMsBJ8brXKmBJujQ1h4b9gwy1tRrjgVFZusordZJsgbZZR2oRgXx2Rw3Ts",
  "key3": "5ZTZPmDVAQkzZYKWXbXaWmPCDkDCvMuxkPFeqC7YNGTJWM19KLyFK2BHjkhEAjBVhyr9bRuj44krW97AZkKqma3j",
  "key4": "p3eJyjsnHYuftmtyrXVsgiZRnjQxESWk6sF2wzZPDcY3t3A6chxi2SeLx8gzL6Sq3SHVbRtxXbBdBEtzUmP2zHp",
  "key5": "2LyHXa9ZJm6w5GGwZb5eV2CBFNy3FPQSiZ6RzsCVMWbrFztBMEFiHMfceZzsQL3Qpb6HPGzKhNHm9SY9LcXfizf6",
  "key6": "3FKf9357VG1BwEDcQGM2khVwNvvDyvrAVEaRiVWUKwaTCUunKnrui9iG2Nic4WaeCQax9XkqW5xYZgrtKa6cPrsj",
  "key7": "3HgNPz2Q2YVbsJfQpNVh4swSe69KLc8meezbqVxoMLJnt6H5ZT4oihjUKCX1m1etKeRmLG9ZkWzrKvmKnqcxLeRe",
  "key8": "2UiXxDeVSh2CDBNp4BULMumL4HXQ6q4wo6sXfo7JChBSJGsTSYADo1yLrtqt2SKkSQC3sWH6myKopvPsifTqfaMU",
  "key9": "3oRtum8SDJod9j1YabLCXMRqCe2nXUGC3HNMdinY3wSj5xDPgNUjS8fPaLcPpWcbXXGzdQFvwsxhzTy7ifMcDQhp",
  "key10": "4SNweH11YRx9dbsa3zGUTX3vCd72LkSuXeKzeTjE6kcQQU196qLoYboDvEBA1dffKTtdUZsvVU5w3gWraFdNtvyj",
  "key11": "64ECJGgeYg3BGwN1ihcWFuPjge4Rjj4t2Bu1qKFJ1dCjPebMF6RTExiMxBtJ21HM5sGv5E1uxjNkYTDm6GnoW2He",
  "key12": "5Jj1sPXeybJJtcyfyawNQzXXLJXE3Esuyu5EvFnaNqigTNt59TkN8MVt746q5gdGQXmmHkLgb1fW7xY61QCbJZWR",
  "key13": "3SYLvmaCxvpYFwYdMn42TuSF7agH39GJTScApCAfY9L4Lr6HxRyhJJi4rCV2DpK4w14q4ne9gjtEsMpWkU9NZbWd",
  "key14": "64msxRvpRHUjAJDnAdTbHztFF47gvtYjPNKLKQk2trMx6WeR6Axxh4VZEhmtncuSBnsvZL7CoVzoCtuBKDpR3spq",
  "key15": "2mny2dXgH938rkqRFEXEzkGihTrisY3Jj3ruxvaPQvUT6mvAzKRPrj5PD3wtWHgoJAtzaTjbx8skptTRGWidL1qJ",
  "key16": "3ZxCvXVP27UBMHKR1GgzwVRc4vignoPNdapbZjSWJr1oNFTfKHMSB19dmFWXPt3ZcbN21sADPYydx7Kx1ryDdKwz",
  "key17": "5fokAmFXKsNW7XmUci8kk8AdFusfafWeERHpfJHs43HZwhsM99Pk5kfjNM8hqb9HdS8GS2AXGbbKcaQTP156Hsrv",
  "key18": "3XYv7TxhWHN8hQAhc18D1WxejnEJ2JDW5m94xSrPoUCVKiWgRf7KUrEEALFQY3MEkVAoL8FfMVxwUzJ3KUKAqwX3",
  "key19": "28F2GTSEMjEq9cSVE15QZvtV8poFSpHzP1PLM8by2oZNL7VxzBbPCoLg27E5Wb5dHMEVFCBzCJtYjdHALoRVESCS",
  "key20": "4CA2v16X9ojxTJgpXFVo3pEYrbBYMg7yceWkfuR2mCPmKRa1ePtkXjpg6uvzNFx5pmLCEkvyiu64e8fGrAgbEa3T",
  "key21": "3o3marPkcgYoiD4psMST31GGFGtMKV6UTJoVzaHJUh4UuEQVjPAmAcK6RnYHUn9mpjUdLPdXjQ1ARQ9N1dyE8kNU",
  "key22": "32MU1X7r4BQqvxYpphaeiS8ZjKkF8ykR32r6gRURQ9SRX6iC5CoE7WL6CibsJJZ1mgNh7KuZ6D5Rc83Fm9mSrBcc",
  "key23": "5W6UWEmZPcACCDjLNUzEXx91cfrjij8CvP1CR9S2fQjTX25LPdKnVGyz7UZWMdT4Xc2oMycNvab5KXK7Aj9Bi7XL",
  "key24": "4Fax9PFAahn8ya9NCovFrVSitBJsKntNHB4uhnwzDxYGrNVdsTrNvLGH3B7a2tMYLzGcDH2vawCWgNKuPi6mi2g6",
  "key25": "PQkYKYrseG6yLSKERByjyijY5E544a4pYv8WQ5eKT9MSJwjekVHbuk1Dm95wVX25zbUFhNyUkj8TXbHbRAMe7BS",
  "key26": "3Th3PfCqPUP2qC5v15FYANv1C12wN3Ci9X59mL4AF1YMx1SHP87cQv64BxgqskZL5NNXc5vn9j8RZo3qLf2GUmdu",
  "key27": "4M5RN8M4ypjMf9QJigxcuZQRKK5M9d7iXDEiN4T12Y3T1wT9SkiWTuAGmbx2thqnMXNusLg3AZyxk4kTgVXxebJa",
  "key28": "47VXwfh4zCcm7Debo6GqJsFdhzzyqQnUu1bcedBHksTD9EKPSgB6dCPDDtdvq3S41YEamYgVr4e5kEV4zk3eiHXT",
  "key29": "pw7HSXNYSYqVQFr6vXHduAxBQZCnPvaPSKPNfvJx24yxpD6nN8V3L8jrZ3r851wS2jsdAWtsocJutFf7f5He4H8",
  "key30": "3oSbB6z971HkyigSPp9gEeg4cUDTJhZp6cY17GPUwMkxHjueFPBPmVgfbFAiag4astyAX2hj6mywRpwV3YNWPuFT",
  "key31": "2JcmCCFHKiSmEFXWqC7mdWA2xovmybaRmBV2aYQzwsXKmKiuZ4g6iVSdG8y9WKknb78XodBas4C61zqo2m7vPy6A",
  "key32": "4KaHDEfE5TzQttxWHCkBx913RnUCZZeDwp85S9VuQJ91RZ5nRw16Jig2AGZmUd2fHRJnY3FdGNPBU85WAyTtaz31",
  "key33": "2p4XSL7EDvpE1KUGdFHRh9GoFUBPV37depyR7FBmNGv5SUeTf5zduf2e6xcC7Bj5SJ5YCm7CrY1aBQzSkepupBem",
  "key34": "4KxYKuBDW6VhuJQjhZ5XhhTkETBDe2cuzv2cRjKM2bEqJvMzNUna4WiZ36L7mtq7fVSa31jBfHPygggSwwNBvrfs",
  "key35": "5kfA1jbEmQkxRL72zCrT1JFbkbGmWYoh2rB7Zk2FxAMjeZRje5gDZRa9cVpnNMtpzFMVgCk4448htqQeVYnYPVHB",
  "key36": "3KXCiSGQJe67ygihDX81obvDR2b6vWqLKY56F6BQ6U8ssbUWaQBAcHuV23N6jU8npWNTq9hSEMkSMujafnjV9VW2",
  "key37": "48ZgWiC1nY6BWesisVwQMNEmTL1uqkLJnJjG8oAxaW7nL64PKEoNL2fQ8Kh5avDJpumaz6ovtp3BJ2XPNz5CpmpY",
  "key38": "5RrYw92kJ9e5fgcKcy3eiEvKWp3aSL2bVdpabrXH3Zd8Y5tVwaHMzBdU1Wk295dapNCm9tRdTSdHoDVEKE2dzrcg",
  "key39": "46EMzK776JqBtZqQhnjRQERb5rzfGqXA7ea57B23QBcvXCBjM3vctoTZRWxy5qZagnvtbzYBsJ5nG1zxbdpLQYNz",
  "key40": "2mzZVfCd75HMYtBqh9ifgt3ertr6uXgs2nnw2GQqjCYPz5TBWyg9gXkUVJDzZ7X8ReDSFuqhoow4mEk2F4bFoY3v",
  "key41": "33BAzsz6SX9ZCVJqBaUanepF88rpq7ubPDsXpWKG82g1qwQ4ViDqne2JC5wLp8XwEqYPriu542BEHrLEso39i6Sj",
  "key42": "3R5A14kMNAumefKf7Zn7NvM1LyyErbBPH6CWwHnqaa5kWJwri4EZWozpXnxpBw8VtAW6inpLhsjbGXKHMdiVoQop",
  "key43": "3wEYYB2MqnrWjhmdmHcsNHAwKssQ1pjZrjfPGqZpBVxGsidwAWSfPZJqFu41wwTYQSeuBdqxw2rJHASjZt1Gpnix",
  "key44": "wEb3GhSXFv6C8x46mgQqqXFYX2mDEJVg3grmM6mQJmsZnsvyFr5cMrY2AZCEg9uDwAnijsr6wmQWmjKSG5frD6j",
  "key45": "5fRV3W21cKgbkZ5CuXJM3msRo62aa9uhJUeHeSCBoaAcb4E2Uet7oujCVh2cPQLohBEPcW1HPZP3fYqPpGTCWZtx",
  "key46": "2oRqPE2m1VFKNKXyXBcSbxadhBpXu5Ur854B1nie6sJ6NTaSeSLnBcu4M9Yw8m7dGAJ7kmBSeopjuMrhjZHUHur4",
  "key47": "3sCjgS82GFWek38Noe6mCMoQ7LtqCsV4caAxNwDeG1bjNw3kPyxxx4wZFpvupi9mxmGvEDtPksiXk8HFBXmvXdHT"
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
