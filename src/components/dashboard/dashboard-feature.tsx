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
    "3HBUp5Pgsntb9JpVC7ZpkRmrsfGyLgokwVBSjS8TbevgN4MrazWWiAwXV6Mqcryqg7gUgX1wokfvfjp9D8Dr4Sz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xf6NMMAG9orx55xcpmjAKkCQqc2VnW3z2Pno86kpZDkEfzUJz9Kxnom3HJpaKtR5c2YvfTujunB8Ru8h2hYhVZ3",
  "key1": "4M7fNZXfoVtEcBmiq4E6b9mZYdCjdW4TADqC9ypfCajvtDsvAx8cLKa4n6bj8Y9oo7JXWiygJaL1xkmFSD8H6evQ",
  "key2": "36NeDtb5iuKVdaVtpwMfRQzEz2b3quxV9D3X8VPRQp79RrEattpJMeaiM4wd8tgoANnb3UELUAxfpfsEk6NRPRij",
  "key3": "2F6yECekz8WxcuuiwGJknS881rBGmc1WHC4EaJrtgppFiajaTTQ2yt8ad3NUTNViQZwb4qX927FC915WiFCyEK1S",
  "key4": "eokvPMGvzA4PScpLpHD6yrpaS6aMRe1aYvpXrEMDD65vBP9e4YahEqaXTchKFvoGMtgpLedBi838aViVjNbvDeH",
  "key5": "2otYfe1RqAdFU7B8CWgo1iBKXZpwFFuf3BC22hHASQSgbqNYxqdEp6CDeAUAi7HxKy8LBCmeRFsY46YKM8fRhVpv",
  "key6": "3TAzDTWQEvs29xYyfcUs9RzYPN1799rh97eoyCSE1CFh1nTNp8oJvY62cQWnc2S3Sw8dQn6pAjrmpc9qJqhgd1Gc",
  "key7": "27yThdsvpnn4HcNERTnsB4PAAUvmoxSPPknYxar4h1aFTTbEQqqPFgZbUnphj8tJMLY6qMHUyN84EbeSxwvZ5DSp",
  "key8": "5JibiuhoM2wjfhCQusXDVJtFbb46eQCjtsY5mRmBrHMkgQBD9feccjFArMbb8ohfSb2RYhc2fAZbefwDUnjAEY1D",
  "key9": "5vxj2cqKciDaNc3tV85Pd6BDvfn9RaKdpXLssGQwLsQTSSFM9SuwKq6SJorBKL2Kx1zD92VE9zP2EjdoNV55eZ6o",
  "key10": "3TwH2B3N2D3UZQPRCinVkrkpUEKf7VsDNVQLxWQhMVdL2tnhRsdGv1g7v3TMrtAyjUsiSwnruzk1rfbWUDeUxXa8",
  "key11": "41GUEnmaSULBNL8tQAGwbuiJJbCM6WqkFphmXewti4TErjtXyUQspPVNrqF3qNVFNyPL2M1aJ51VVxbW2zDXDj92",
  "key12": "49wd47e23PgyimVKyV7pWFpQaRGcyUcmqS6Jde2FYXPfQDFcrvCv2JnHi71yeE6NnF5aERVqpuc6tbUZ6Q26tPJP",
  "key13": "2xzYU9D1u5yxL2PLERnzSBpWXAZ4p8xzjL6W8PxDne2CDkPpAyb496atC9KyNDNsVGyXDGZ2fA4UuhGDgvP26WaC",
  "key14": "ETTA6XFYn41PS1cfbdgJFATT37Ekpk2x8C3R4YJNSCTsnJyQzRu4z61BECHigkVcQ9ddcbHkHGw4SuHAiSHm3U6",
  "key15": "5o4YnssGfMqMRCSB2TB4yDkKtynRPzU8f7MZ3zsGcCAJ2rmkKFRQBnXaTNBgCwFG3ru1wF6nP9AsFpg59oWnzACM",
  "key16": "2hCkpxLHESJPmnpincm29FjNfTogfyoxonbpctNGnhV2rsDCkmeLDsssdwKAkvuaRMRtZBytikwdcEZiNBYNgBeD",
  "key17": "5Cj7RoGHfur3NUK8nKLkxYEVXTC2b6yM19rmFNLWSqf8dJPhbmW5TuE8Hns95o2mVvhi2TwW6oTy1LJMeACH4arp",
  "key18": "3KSksS9jT5aPsK9Q5Bt8DNC3XXFNdu8X9SEQ12TNNNnPj5PiBY8Xbs1y7cmzxNBoRmvZvNC2UtkqakjQVzVFYLCx",
  "key19": "5SK5t1UYe8qQg6geicQXbVD3cd7YFQNRBwXzWYHNbVhson3D89FZ5vVo9U45Dk18tUjtKFZPqK6XM9t9omiQ4mL8",
  "key20": "5MPectYyFWyP6V6WZm5q2KC8v2G1LF5kDjb8iAdpdP68578FtRzdz5rqVSzEu35tNfGCtjuHoSnTBVFJDX4ZrGxv",
  "key21": "2jY5uJgoMjFqn3AE5vpPjuikaTA3agTM2jgUa7AcWDPBm8cvw4PL4bFrwJXZTYR59EVmsQagU3t1ckdPnckMRtHN",
  "key22": "4EbcAo38jG6eGZxJDQNHJmLhVxFi9hsXLWsSFoSSojFK6deBpCDBGDNVqzMXX4L688HLJ1eLiBiyYZ4pCAkky2ed",
  "key23": "5c1juvdmaPSaWEtzYT61r8UByJEmBa3kbSqMbdSh4aPQhjeyqTvyLCqtUS9e26Kp9ie6jVUNwjEXyqK5LEQk9MmA",
  "key24": "3b7f7fHpx9vD9qLFB5bLZPp4vSz2r3fTGS9gMwaMxHfonVJKVTVn3nm9gptofbyzFRMC1uhqjp6xmT1fr9WL4wWd",
  "key25": "65D3MrQNBssESo99hDVvzU4o5mDSAuDV3MpdsRuCkZMeahz9p3SGfWPmuFd5bzNi43gRxJ9827GrF7w3jxjpxh5Y",
  "key26": "3J1VqmcEZdPXYiuAud5NBiiK3LLSpDEXA6MAcUEGdZEitYts2CxcnsxoJC8bqP3iNg8TvFfxKo2EHGn4c4k6it5g",
  "key27": "4buX9r3cDABeRGQrShkK5BeYPSpqQ1GDom25V7gaZbdFHBTmYwH2kHcxNP6X8SHwLbhfS3fdjdNybcRVy5wxKU9r",
  "key28": "2rKXDazDvYcqVbVE6mUm6BNXsZAHd1TLjgoz9LmbFP5T9DsJj4dab3a89vJc9eRxVeRbgJ12rnkhpRuyFusK9f7V",
  "key29": "4kyB6pjLdT1KhAsdRJ5gNxjtFc1onZdJUCT6r8tweYxLf81MdSecKg569VKs58MqBtBzhN9Z4GP2qeDsVtK7Z8UR",
  "key30": "3nhmfnRwNTCv2GraSAWj7PdW1dEfs1EEkdyYjYWkMCQh5HtnFd3SdV6LyDej2Z3vLLEeE4xW51hvr15B88DerYJg",
  "key31": "UggrQVAsNnChpxVH6LGQkcQXcNWpf76jcnv5UHio3EcwA1jkmTZvB7eiZysXP7fDFPByHHG4ChgZvuVGZNGiFNn",
  "key32": "4oTSUb9yLeniCYwUABxzsjUECQLvLaZUhkAaRkzp2G28JL2NZZh79Cr5YTCSwge5W2ERPB38AHhMYqPph5wPG3Kw",
  "key33": "mLuW5ei4TtRm8yGqHaEaq699ne7pYY77iVRiFom88Mehb8T8bHWZ7A1DbeZaxCyLgQfGPM7uk27hmXfpd415csn",
  "key34": "3zHH8nSCH6KEJW4ZfQm3yyjppwsn4fTTtvFFdXEkMA1s5bduyKiS9AUF4ptoKmYBYEKNKP9e242fsFUwMtBZcxei",
  "key35": "4XU6rWwYfoWzpQb3qBsZK2Y1ZiM8TWf9xggHL249s5WMdpK7zYrs8f5dNfXNU475pkGg8qwmU66JHLtK5345tvHJ",
  "key36": "2imHGYbwiCHMc3EoPc6RQkaAmZTW9tsTPnziRhaz8tWfFN1ugmU5885MfKMtpuChuYxb1UTNuUjjdRM5BJk9vrgR",
  "key37": "2rNjoDKxVmUYiu4rvqoNNYDtuJ4gw8KFTCzMb6Sw56MKeGhERRTBko3zw9zZB3i3bKWNU2BRAWokyeqr5gMw63HK",
  "key38": "2su1xpK9Ee1YHJfAXFqSeBq1JgedWk5dc2wH7m4bApgAcECnAPitnK38fMz3SE9HfGGnwj9xt5jp9jLTCecUeA3Y",
  "key39": "5BPLunbSPqWpLU3GpbeHcPvQU6VR42ggrrx8cUzgU4U1yvUyiiSPEAUG6MGh36FPSDnX6HUuJui8aw4ktdbUijdb",
  "key40": "2wy4uk5mFQcxiE2HdPQ7xfBmP1PoCxtMR8KiWXNWj15EsNWNDtTXXmcViASzh22p8X4uzXVtpmW6XZivxn613G6W",
  "key41": "2CzGMgxCcohzNyn3zvoxrV1bVYT2Wf9QkfrV8V2JNqbW9EyPMapNJBJFRZjv3drpLi3PhaN3nv4fAiaupJ72vQtQ",
  "key42": "Gew6zrjCZoJKJvDG1Dwm1pcuxxb6GpsGsjinguZ8xt48pYth19bDYyPn5gxneqn36Fqz3BVLqZBFpcFp6uyEp2b",
  "key43": "3uVdMTDX4BxPLwVuC44bjvXVXaBtNwkTnk3Voti34KPYBgzK3AMz1v3J5CP2ubeNsg7LgdkWEJ62aSu1x1tYyJeh",
  "key44": "5vQTLANnCvUVbXEQBFUCGWPLp194ruqoPhmuZ5kuvAyTN1XjWpRsnPKsYR1iT5cxQ3JLDBobouUixt3JiSMjB9fZ",
  "key45": "2n9jYvGUyhvvyEw9RZiyEJteTm8ufjvCasQhorqAVrcFdvZTRp4Jm3BvA7j3B4wqarkTitdu2n2uu7ThuQmAG3zF",
  "key46": "3GJEtmnfXPvG92MisS5h5TspgQQmsyF1n2dqKvuhGvSeCvGxcsDBeFzHtaMwDtm2kDaSHxoKWDPpGeoGjqE6jcSo"
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
