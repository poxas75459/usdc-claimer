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
    "4p1oU7vVfnBi4v47GKwrtUJ6pYt2unoBFwuo7UEmzQXdnKxxEv455KUapncnUDzHdEUTTg4gpGFTRG4GKXzM3Li"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxdaVudBvojmgtyQD82ZJS62Joq1DBMPmTgzYshho7S824H6Yn87CBDC1JGUeJhVPfXVFPWycqYrk92chLE9Ehm",
  "key1": "ExfqPPg3Ya5PYZntEaZwNYhUjm7kyfDzxdoGj96nNwySJy3JvPku25f8fmjUFVdCs1Zf4Yhg2Rv6iGQS2A3jztX",
  "key2": "3dBjbUggE2WCZvLwSuMNKwVaVaaLvXNbqCwZTa9qi6KRpL8ANDkKJZZFRCZsTBHG492hmRaQ7QSGJatGWxN1HHRH",
  "key3": "5h1vq2CrmVHPpimxEvrYPZ1Wu9XeaHZgvfXEcKHaePPK9GTSmLKL7gwDTkbeZid2P3tnw8Sp7qvPVf2AuKPK5cNg",
  "key4": "4X2Mf69Y5tx9bqWxu81ULMGdbUoJ7rNP3faSbhCZJpVAzrNz9CfVj9yaBJmGR774bXVo7oWxkhCzSWnx8upQcWzj",
  "key5": "3izyciyEdPTTtm7DTUHN3RkacNaj8bbhMsq8QpR6sCo28kwD1UZbRuE9sjp2EF34y2362aqWuH5mg94NhzLTMcmw",
  "key6": "4g9QuGKnPc1c82UcNvWvB6ANv4vihFD2kXa994w2M2VhW2H2BYgGsBuTH4S2RAYj6mx6BXnLZZzXCJQSZka6LiEp",
  "key7": "4GyrzjZ2iXMevNoLyUuP8m1Zw53HevhfRBeexrS7iN7emFu1fGyWdTVH7fs3Q44LFxkE3Fm9wfyrSCyR7fBZd5jj",
  "key8": "4k8U4SVCScAhpMyAcAcXsvKfjHtpZgudZ9vDQRP3z4jHdAni2ptEupADSkKCXWkCtcH21Y4ggMbmp12VML6WBPdz",
  "key9": "4oF92hg56bD1PhqkdTqXBWaGRB7pWVv56bvUBbanSwhREA6m3ZSW55KSaVNYVG7bsdTYLag3Xh5rkVViCm2fHmYk",
  "key10": "2UJVGh1zzkwq6Rzf37Emw2Ghh1frHdzoxAMDtDH3on2UaMhTpvRWXv9S578QMLAT1WNPPAHfr9B8p6t4uqFjzyfv",
  "key11": "2XguKywTbTuezFGG76x2i795um27koaFXadzWEDpmsD1Pi5SqDcRzF1ADW9EXSHzpdA9qZg5TcoLsD9hyUKS8Pcf",
  "key12": "2a7ewx3geTqQEFwxG5A9WStigJBaG56Ya3JrbdhRYFyr4y6nmDBri7h2cqpk3e6YVqsiLCpGbBPbzordYZLLFBQv",
  "key13": "2fqkczvxYK5QLUkNXS6rYKg8SvVWkwhFk23NDFU8PvXZHhjNRYB3Pfc3AnYu7Q27hcxz4KBcm7C2XLTtcstiZhbT",
  "key14": "52MgWz6YtvGbevH6YEbYFw8Urpgb7KMr3UPmSADrd2oF7cjzCFKo3MAKJnb9j24V9eraHR4T8vcGBfAbk9b7M6zF",
  "key15": "5PZPaffNCYua3NqMevvqBDtk1TUNW43Mm7QheMhfLb2mzh7khDAMnNVY7ME5MRfWDesTgjXXYE7GKrWzeE14yGmQ",
  "key16": "5DGZMShrWvrxNY26dEu2GBnz5CLYh5i11P8Jr32c4zdUDZeSwNFUKbLw5tnh4hhkdYhuP375jKwLKPW8wTjMjPNS",
  "key17": "jv6BAY5nJqhaTMj7DrJQ2YfLPoGCGXrkg9V5tPNwwHvhFnM82erzpTiXX6g2AYwWT2Lpr957naBfgZCCGxZ5KiW",
  "key18": "3hauWkXQHWTKZv5vaG7NZr91FXeDjquXS5cMQb7etcfivm7PYEawZiBLHoMi8Qg4wxTq9sbcAyzMZGi7U94YVPGq",
  "key19": "2Ed3YDmFzK5VhNfgMQKRjJqiPhHxotK39QiuiS4G9NM5bje6maeJPSwxpjEGaUTSZWymcW54DkmwAP2hrhmYC13v",
  "key20": "5sXy2BbzkCW8kCLpqHwbVcxWUp9S7M87dasifBAPeYhxBUVYTLu1tv2jGU2A1vfi6GJRNtqVkcTQuLFhAQoAVKce",
  "key21": "3bAfEUp3SUkLCcjnhR5K9jM7REQ4DfyvBSSwVVKGTpPfuEYrDnPsUtcmeSYgmTfLdow2GYo8TvSPcjvuvP8yC8EE",
  "key22": "AtrKxV98aY3xeDMfcAi6ntNvMHRTNBdCfyjv7ZA1zQJhgwHBCSPZyiv6XqBjU8FvjbHZm326JxdbENxQE7n6vKt",
  "key23": "2s6wwFGkHeAGQDSLge7nJjCgaTKySaFeXkiBXj3GWQYmakCM9ssLDabRv7YBZvGQD74287cevasAsCnoySWs1GKi",
  "key24": "wgURaUYMgxUwQrq3ktRePx36K2MvUZjSRA47k62MYmFfgjNneugCYnkFLQ3rwrS5rSqkPuAxZju43Yhh9R1EfzT",
  "key25": "2aLaMiok36h5Y7DHvD5a7e5EKpkhf2ur656TeWSiLthpVaqzn2QVBRHP7wUL9RmJipoqHrWvJXP73XhrJwuori6e",
  "key26": "268hW7SVFLCZAs9qag9BKLNit56imQZDP1LVWUZUiDPLTvP5mnNzZ5J1UrxyHuEu7sS25vD8yPzyKAC9BuePKm9X",
  "key27": "491HFfPyqZRLHupBzi7eGd76CENY28db2ENr6JyoutspKdcLdbstSzerfqm4yGzDvK8U6UBXzu9mWZAcX8E2tVbQ",
  "key28": "fyMGAhjycTHnrKegXHTKPNpRz3FDe2u2aEHypCR3fhYfFV6ijCKoJZJ3bGr6iq2Cemp6xxgkPTjrRs7XxmvJAxJ",
  "key29": "3apvoE4EHrBDh6My4QVzZ1FTDmjrhLwCFJ1FR9SnBfZYGJMMW3Kr7Q5nwTiyJwfDySNHSpL6WAnYBbuydFybB4zS",
  "key30": "25KLYCaE4vRf62gByAvXQhRpUGEcXbHuP3sGmsj1tFSgMmRqu3G6ienA1uVb4fmz6Ki5Jg185DeFEYDgdQ7te75v",
  "key31": "4eYT4DTMTj3icQwMPTWfWxAcFJc3tKHRpZmSoXX9m1zJ2aK5XjK9fG8nxw7xtUVRdb4bEvmBLHdWwqQTp8eMEbvv",
  "key32": "5Z83VNszPcnpth4NyK4oABYjYPzfvsVK5xkUVzknbXMSnP72QBtaieaxGh1YLSyiE4MnqSzPHptCXvaNWMAdAriq",
  "key33": "3aV2GZejAeyXtbBB4R23Xo61hSNxrj5kyCcyAoVCUNkfF8Pu5enrfkeQoResh4rJkig1ZdLZtSnGeSysUxUz65vF",
  "key34": "43tfxiTzxPa5tenf2tnXgg6Th2eA15KcEjDNAH4GV3DffxApQpJsSsSic4JSv1Cd7tsC6uHvfEYzLfc7Z6sUzoUn",
  "key35": "5NNX2htRUHJcnA5GAhLnUWEMrZij2bE4DDVE4qy4d5CyzNAGthhhpPvbFBzpHub64PTrijZbPz2w4sTovF2fjbHX",
  "key36": "2XgWYzh5U1W5mpGwYT3LKuwjH2vrfoEZ2DMPLWLyTnbtHRXsHeze9tB9RFpjjxcx7Jz5QBvSf1wYeiccDf8u1Tn6",
  "key37": "2roj6JGgKfFJWfuNQBxjPSHdapvXhALUM7M6eVWW1TbJ8Dpp1T98YeC9HTAQ8x6x55rQN8A3tTpucBdTY8wodWdQ",
  "key38": "3KySUmfDqV9B7UTip4MwzsyXwmYTzGgvMGCUmwAuCfNQ5HCV4dfN2jQ751nm6UReZJG5q1oWfgsRcbgo2te5KnQb",
  "key39": "4Y9wsCxCBCpxCjLkkwXQda2WdexxunTFXmAPeRU69hgbEyWn3rxLEb6QukyirrqAFghV6mCEHzJSSv2tBk5DsUrV"
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
