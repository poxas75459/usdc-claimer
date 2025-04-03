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
    "5bi2ZfPwv5F287aCwoqiaqd33jDteA2Bq3HavAunry4ddcGF67k3Ja4XAApZsB6nXvvZ2xXopz6tV1xoZqDAZuo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWgXo4yuVhTK2Bhspaw649wcifZQAnHgxr17obGJ7pWW8rotLQEggoKDGyVkU8pHXoD7RmG55yaA4BHtq89a5as",
  "key1": "2XUkdVPxSgd2L9gz3V7vHMLAMTvywWWaTUT2PTBh5JqSBs3Ayvf7HkURzvtfU2z457wQjWrPjXYCTFLVqzxPyEsF",
  "key2": "33U3pBNgjwnX2MWuU7ihnMrqH8i3EmpyhYoCQMMWjvsmWm9kg811ytb9sP8JgSeboW8SeamCcCezb3TARaDvsCAd",
  "key3": "4CMMeopWCMgZXU4JLS4gAcFCuoZxdA5ZbUGj1rCYeukfET1wgVdTeUoNMhtP8JS79ZtRKNSoGuaLSAXAnYavkEZU",
  "key4": "3rtbDpff5SuH9xM49fYBjfM4FVVZBM5WDrxaRhgfArfgJLp86FfsmpMpAwsbrVkKq8znS15ZSkznw43imxjeGbZG",
  "key5": "4CWCMf6tanA6fNuJ9HtgoreSehPRxGNJKEWGaaKDUaRGXs3LtuNuu2CMVXHvNxcwfDP4XM95HFBzkdz1FHr8zLTL",
  "key6": "8vnoSNUf8bDSLRYx8SNYGQLdbc7uYji4aXGyBoLGLK6juFHP7fLc6rQKY5DaZcM6XzGSKDhSEWaD1JNQuAYrMmU",
  "key7": "34QM7ZKTsr6zPc48JMLZgBdFrrLdeedTUzooHGKoL6Vx76ikcbYTHXUWDjX5p9fKevXvzxyRoZiuzPSnnvwhukxG",
  "key8": "4HpkUejPBLusctS3cDECugy1fSgPFMikpQYdbN7TjPJmUQWx2sKzHvqyVVZyRPGNQRNU8CzB6m3aQWFknZPCfQFC",
  "key9": "5eCKLKdqCD4ju67GEfmWBf8MhJ1mDNuH955NMzdwUwbQ9WwHFbptMBmYaZY5wfg4BsVQmLzAoWF1dAcWqJ1pmfKQ",
  "key10": "4YknJ8AHYaTQVbp9f75ryzakNFE1v3YSfyU7tb7K2uHfwZNgxvzgaMdU9UELRmaRgp2V3xLsc5JphokPRyahwRZU",
  "key11": "2fPN4v8W3LAaoJNoeNpfjbpccu3LLVr2CshmEbPso39TACmEY2amNyEAs7haGqs6WxkBjkqhpYuVhepG4f92fUkB",
  "key12": "3SUzsY5uooBNkfZZ3XgqGMo6oY754PqR7pjJih3ofF4S4NwyB4N8eazqQRQ7Py9oxrh7ycjFsm4E4V23iU11MpW9",
  "key13": "5PngcPdYTWBJaQX4Syp8P9WFpA7QCsJRhKrd36f9PHGsEgW8aSVNbxM1vrU1bZNCatmJUC6B4csYhHG5NNv3XFQt",
  "key14": "igy6kKobAdXFirnsVCevTfURnX1zpDua5G2cSTw7imB6mPErpMYEBHpRvP27XkSCHEr55WWvzqsHSLFkEzLFPMJ",
  "key15": "3QFUH3gqyYKQH9qnQpthGYyqFZGycLxyZUPzhypgxzzadzipFjenMH9Xjo9TTYR2sd3TzJG5FE71XAFLya78cCS8",
  "key16": "3hXhSKkBHmktXU4bwDbMM3G6ruT13jN1AYyc2vkaufrxbuwVqfYqpAG91MPADCkJ1hdov4YcfMdmBFbKBo3JPmo8",
  "key17": "3dEAB9nC8YSrZHXznWc2QYsgMQazbfwEPaAJrxY5s3dSTKBHYjjQSqywsFL9R2q3DuJ6ivHsYYBypu13NsEc2b6",
  "key18": "qMeLwWNQ7uRdYU3oSNKy8kRWZxG2LDiDv4BFHqP4S4QjkC8EVF8TczNsoRNuA7Uwj6qMfv6rZGu2zzNowtipzCM",
  "key19": "4KRiMutroSoaFTjSCGqXc19i7K86YKEqBLBQTUz2Qi3ENijPSnU9F3rjGNAb2zAKNQkGYrAr9xn9sCuMov7r5R7z",
  "key20": "5W31w5rx1vz7k8bqj3cYr6XCN1BQ97zwJ15RxVdabCuwkbXq4zysabL9Tqpdw3qSLfee3dcbkM2zkF6pjPrQXoHD",
  "key21": "5Js2pPKZacdGEmSjsw4C2gnWUh2MqxGerZuRLBYAu4W3nhrYG3CMciatSwg661DcDX39AKxCdCQwjT7Lc8PcJ9aX",
  "key22": "s8agaaGGJAqdKpvSm87gHMdTJLeC4KKziy23P12t4xrxz75xb166BZWNmtBgpt8tfpTP2eCtiM9T1tJYGzHr22d",
  "key23": "56bY2kQTTF5M72akdDT7ePedDP5ZSNR3LQS3EqZnhL4iAks5GnKtGL9kit3dgWozW31muqRvBxVXsZg8jyfy6SWg",
  "key24": "4Y3xgvVjRGX4sE43RoEDdtyxLNa7gmqQswpq6fg7dGBr7kt8u3AWHY8eqDcpZygmAbjy2GhrHkfmL8r2bBnKDusS",
  "key25": "4dqzTdWq4K2XwDYDHijc78LwuFg3YpRqPmKWoVg1QrxuzNAUiaHeMaVgDcZetkFjWRznA3iwm4MgLo4wS4wLJFhX",
  "key26": "3VWDX5PBNK1vCCHASncL1kBbFtBMPQmBtnxdzEhpgeYk67BBMJDyLwU9meLFXFYr7aBPV3qqoGjqMQyJK8Ya6czc",
  "key27": "2WLUiyR4kcn3vQRThDJUdAfMBkp2ckKNh5Z8LRBP7c6YB3vAn6GdvxnJm65stmyNdCPzPptPPib9rHhFkzVpGNdB",
  "key28": "AoH54xZVufmLoifPT6hxogoGG4ic7kzpBwK6FFHYRCUWy2nu9noAfxFKuTu9kMf9fyz3pT6TQUkqVNZMR9eJRbK",
  "key29": "4eoqtN6QRDfrgcg9yYPiZhL9h7Ar5MZFqLY1sJBwtcCLw6gMY6nL2zqpn4ogRdLJSa2AatyDinY3yHVDkMbE5yAM",
  "key30": "5f2AhctEiGghEC7tr5CGDDS1v5VdkwdAKu8w8eMmPCgo9A9d2tNkiYPszDQoGxCB2sFFjhQJ4toiJFTiJzgEvSbw",
  "key31": "2V3C4R5dfh2p2BuuDJch3yf6om9XkNo8KB3QArp3XTYEpSR9ecg2Fa3FzsFpnZSVGCiQRf28Jt7s8fydPd6RMcPJ",
  "key32": "5JLTnhPBhn3p5qG3Ba8c4KKp4GwtgH63VNAbPH7JA2UdWp8t4kk8M75yt21Gp8VRbGDGNu29RNEgcT25L91sQUtt",
  "key33": "HD7xxn3bEWmz2G9VFQnzCtGX1TjpMWDLHrEpxbvnsGTfdyQaYj2p5vZxMgWNzfFdETrsPCGzbP5sJ9sCrgLd31o",
  "key34": "2KP9gMHg8N61mtrsj4qW5poCP2qP3ayQSGPSpz9jMbHavrpJqPKDwTtrhe4Kh5Ahh7EEsQNeYUznjVJcsH7QcEZn",
  "key35": "28WjJmouCf4rfJFhtJRyrNdTJvfdHEB4PoX83Lr2RNu7TdSVjjEHoMZR4XuWTiPHLSZKZyafpL697n8UPgr6umhY",
  "key36": "4bp4cbPoWA8uDvqMS5C5jFryeEabFCGGq5nDErXeKW55y36w1zj8W7v5BPiCETXa9rAXXctzw4zrMFc9eMtJakLM",
  "key37": "5UQFj1iKJzsPjWqTb266GwQCTQtEG1H6pn9oHAR1BCbR3zZSsJdgj8dDscRhcmyJTLBxeDSzjQXKL55q1Hymzy8y"
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
