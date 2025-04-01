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
    "5mxsYN3JVgWnVLKHXXWwyzLX9W4BwQZnzDPnbzJ2pCKhtHcVFee5aUjV2FsyRBvLr8QWvc9SnzegJ647bFiehmSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTLZaUDJi4E2ZfPJvnfR8VXhEN4F963BcQXerJBTgday1ZeLW1HEpV1jm36q3ZkmBA1tcvioyGvE2QqzYuDs6as",
  "key1": "34riwDLQHLvc4yT9SLNxt1RUNnLbaAKtpKg9KdygynWpiFQDQezzzgEjx3WYHf1GTNUoaYyMbZoGNYxkzjRnU3Jt",
  "key2": "2wSk5YGfnkhA1EeuM8Eq2LP4MuJHc7yBoo91FH2oGP85RejJ2oatbgeup1zghN5pvU9Y6DuKeoFBcMkKZ5pPB6vF",
  "key3": "ZJ1Q52LaVdoDs5WFfmx951PCbXUmR22Pvr36gjVbkZaX6va9sW1ADK9Tk2mFghMyyWc2R9XczWMQHVxStsQN69p",
  "key4": "4aH6va97qqAxLcWV2GnLbCVJgz3p5aBC5Rxubu6fi4w5LfduejpQR6G4vKohgV3rvH4XZLfv7pWHkQJKwHdYeyk6",
  "key5": "27hVvcRYPamu58nKWRo2VxEizPQJBJoPioHCYDCtSX53zFGu3BK9ogqU8ChbV8HQfSDothG6XH5ouGfgYCWB4jRP",
  "key6": "5TPneZS5FD7KViPhr8wVgPkZeFoAAC3H4FX3wwn2ibXJNiq5SdieayQMtN27p8d8pAwDXS3nVxv8kjrAmtEQVXQW",
  "key7": "ZcM3xVP7hE5kBibdRnuqUR1skq6kDv957mZs21L2x8HS1Z5PB4HgHr9aTPvCdN17j1FRGbwxa7UtHRpQqtJKVoK",
  "key8": "kgehik6qeDV98fc9qKdsKQ2AoY5sVnWjJT8bKj9EY6P14oxXt43Lhg1fQQR9YHpf52mpG2s6jU3CRqqyqcEXwNB",
  "key9": "3zMEq6xzsVdUguMApywLyzYGSqpjLs64fRnNt5TG57VdoYuuMh9ivyTzEZYH3dSFunwd1HyUkhrEhmjVabDhazqw",
  "key10": "CeWuxep95aypAniEFsEAb1Cpc7UsPcRpncwc5Demw6K7Pmxfn6ZP4jWPs8XNrrpgW5WCmZUgSn1imxMsWppyUny",
  "key11": "2q2iWHi4XUrfzdBZqdsLHcrkiJrchEEBw7ZkfoTxZLDJVXAtqufBqQZBiQGsfcGDQnfayaFkAuk6M6Pc9NJky5vG",
  "key12": "4Nvv6tyzURaFr6YkKCua3XSEsQQ3UREgQWV3gT21jvfArXUK9QC9fN11NLtqPJo45Fwg5BMdaQQT2GRLMTnbS32v",
  "key13": "56zEGTkGSqf6KzdYLV1w6CGPTiArqcr9Hi7Epo5SapCh8umfCeRNL5NzuwgakDWsqCsYsvbaMDYbUdzbhjxVWDqJ",
  "key14": "2CspHuZAHFadyEGgAsKCbgVUkG7uqiN3MmhXkTLsE4xMUC2ETHA8UGRSuUQiogjegpkYe1uUqW8FyTgERWrgvcfZ",
  "key15": "hGhEAoNfRQseZXyWwDfqDZS6cZpbZ5E2eYsmEvLHWFrPshfsZ4rrmV4PmMVpjZZNBcNgZPMu79eAeXo3rJFFCS6",
  "key16": "62jcHWKHsz1hiy4NfNikCG4VQnGNjn3riTbcG1L3QMNJEP7qvbraNgv67oB6ZYzWTiWdXmvj1Yw1gyFWbCSchF5w",
  "key17": "5tA7CFY8SQBbwZQwGewoYK31dLNXhAcTNeuaeCKbMudNmNnHf3SKXEQ3gqcqVUSAp2VyNUokc7q3pWRcdW4wWzKi",
  "key18": "4v8FpoZHJF5AfaQMT8LW2yk2XW3etLybsTvzxw5K8zFANq8BKgWtVoQAYDobU25CPSzNGhnpT4QcxcL5EtPaSeLN",
  "key19": "36W3DgmiBMp4zhKApqxQYujwPCFQbsW2vfLT7TfVJBxzuXfTFJmUR8xUEUd9SZPewZkaPKzn3nvjBXMVpqfCMaQW",
  "key20": "5UdazL5eA2s9YcUDhVXMb1T95fwtHgKdeYfYZ91kvDhhUcGjZN64uTCaJCoacB6Ki8cUFhcY6jJK7McxHL1eAKin",
  "key21": "NKaSjXXnag2HEHvWmgvBFAjxNddw4GoeErwGVk97A6sRdK8Liq8zM83tGB5hEv1t3aELWA9T5KPtVRgfbXznmdk",
  "key22": "5cpw1Y6aCLtRq8qn255iwaNZ5zyK18g2UdHRY1S4rQGR4NkYGqgkXeJCvTAtyV7tkACzacjZFGbRRK7EjbWoMSYn",
  "key23": "4iUarftxFP1owBcx45AZ34cBRnSvtw8DmRW9H9ATNQNbjcniwbhxGhT6RyQiZxFnnoQShdXVFjvmFrhWn59pnXJd",
  "key24": "2m4DhkzK7RbyVPnj3SMgAgcdNBoeB2RmuTUQKF2qJAbRZSzCTRHm98jMa4BgGCQZpWWehogaZXRqY8yHphEm2yXN",
  "key25": "4BourqE55mLstWEbZh4iHD7kFwVroBTSVDgypwpdrfguTyhXZuiz7JDKxjRi9rWJFkWCWgws4p2mhR4gVmuqjZXU",
  "key26": "333P3i9RzcLU9QKazvT2bAcss41yHnixkLj8y1pZCKefsf6h8fudiyLYv5yYriAc3YXxGUDYUxNenXk4a9eaidYW",
  "key27": "3J2BACEioBMSX8jjR8qYZcHBhAWpjVbYHZSeUfkvpqcQBQh3TeNbA3GDT8JSRzHvjRKpo5KXTrxMHXv9qgqiz7w1",
  "key28": "5zzEygwCa9Zy3fVp2tkcdX8xz79Vj4rq3FegEzg46N5TtxZC3VA5Tf7oCG8gVk6Zgy48JG5R2tHATiBfAWc7DjUx",
  "key29": "yLDgGEYZxgTapjLVHtuCKCN6Ldpk398Q1MbnRimpc2W6EAA1NxSMbS4XJgxXkWNF55yVAZLCso4nAEiZ7st2kBZ",
  "key30": "2rRroLbRq6EtRTk35Q5kk8UEdn5XhQXTD1fuBfGtLtZQDgSM45UFiDua3etVSi2YHgzL9h3Vdr3YhbsicDPHMVha",
  "key31": "4FzJKLpCecMg51Uy9vSq57Cgo34HZKXtYr2XzGhHxpCsV5nJtnFzgxwm8RuZnAADCp4L3kpWEuuetmY7s7GmS6zX",
  "key32": "43bEba2ajSpoTJinAspSiYeo5kWQQXiBwR5KkaVne5yBAAwhPuopFGwAPqWPb81uT6F3fFacedZjAC3Pqy1d9sa5",
  "key33": "3y1UohUzMqd63uhzAZGGLh4hQMaw5aMh2sfmvJ2JifSkncxweYdBdMX5q4UgvtgeoKR1A762EpBtH5AKxnPm7kKy",
  "key34": "2Q6jkXD9LjP2YmVyPHRNWenpEBieMSu37i85qAye1SbYdAUVWS5diqf6B2fU26QgdSHWihcDDBczHAThfXXweD4Y",
  "key35": "3xgiZBWYTQHGkSAKHF1RMkiaPSPYRquQmgRbnBU3PYGhdfEv58NuajZCTF1RYjYaZeidvSLzLGhQUD7fL14S4tsz",
  "key36": "3QmkkfL8ST1oJ7vd1oNwWKcLyhsNSAEkX8ymUJQskRXX2TDWGYEyMvBGNyy8cHjB2iYpaa1sn3iqE2ec5Ua9nvqi",
  "key37": "5hYvHSKRoxbWCprX5Sg2ynDTrLdj9VGTd6hdGxKwktSENpYcHzndNaKMoD1k8nWEkcDT8VARPNUxZ4ik4QH6VGLz",
  "key38": "63vLpgsCGVYxnreEW4Ne6n5h39cQWTZEEXsg4mJvDu5ZrY3nQFn5RFLhNj3k3TnhB8viNCPvW36uayQFSJ1tM3mx",
  "key39": "fZUdESZyYx67VHjnhYPjAj6exkdZtrcLJ57S8fg7imEFZ8VtXbwYh1AhmCUxP7gFQMPJjvkZ8oc17Yu22Fq7Npn",
  "key40": "3Upig9bzPbMFmgHwXHvQbnC5Bo45WsmqJgWYDZCt6eEAC9MhJBne4d59TUgXBDVxpuA49GcozrqoYec4qJQkPGCG",
  "key41": "5SJD6iXcipP2PLTKEaBwZHEz3xpxsyf1YDMvY6JEqGijXF63ep6PT39e8Jhy4UjbmUeyjwXykv75o7R23euGPcCH",
  "key42": "2ehMavkGzZvaWpWYwaAcmMydV2cpopD5fvGrDmuF3x6i8iF9bk61MAT2euVHnXzWMPcQGAjHdayn3JFbKeC6ZYfi",
  "key43": "4px4PVcA5WBzDw24X7SjXL6RAPyzZ3mkfR5V3SEiKGXVq3JzUp4kdJsSYWz2EFSP5UcQv1dpGMwQV9DfWfJD7zNH",
  "key44": "4fPiyEQDrxBoFvmTLx7pYwX3uMBRLWUYXkDxjvugWcmvGHHH81VRDDqAxB2wUwNAEbj7peL3CVuVZvszDgkBkHsV",
  "key45": "25ibMuzoaC2ceNnvDtiTx7yM1r9VpL7HegqvFLAigsVwfXnyjz6BuCbRkjNFCNfxq66FRE5sGvduGhRudMPF9gJv",
  "key46": "4SpgUY75j4oqj5GuzvFg2knKF4SRi9Q39ccgCCPd7E6hVJZE1wvCyAiT3YYSXwtk5fDvD5B1YPp5fRNUL8bpGFxm"
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
