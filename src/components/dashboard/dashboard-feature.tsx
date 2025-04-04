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
    "2R6fGQGbPpf1sE5HfuufUzGmoWVNYZ6BG5pR6zcDdH4P2JvV7k7cStPdMJixrEqgqpMRoqEN4wvG9VSZWmZVPaTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9vEMQrzyEJ3SvW4vwe5uAZES33qwjG4MRQ2Wbyu9zdfne7pJjs2FJT2DdeASMLbwJfKy78q99EoNfDHCdH9nCN",
  "key1": "3ntEzvsoc1LH3BUKgepNEtSUnUJ2ogBdFXHZx2nwZQVMvDZxYjMk8B31zwjc94eKJLR5Pcdr4ytcWimdGvYUa9kV",
  "key2": "5jaFcupx3X9QiA6QpHXSupf4WcTqa2sXg9Voq6buQUnwapTqeiGMEYcB7tDHPosyBdbd1E2A4m7gGoRiuuGtTazt",
  "key3": "5ZzTuhx2mm3Dat41Ksf5vVFaNtECjUVpXn92yTekGpY2GC9QNh3KyZUCZxcZjn6FJn87fGkRMFKY7Ke9wEuRyz9a",
  "key4": "rWBNDxWheo667Le5PBRdB7ctj2fNpvwyuPQeMxqBm59bwCg2KvdYCfKujw46Fk2WYkx2oLPtm2nPwdQqLxDBt9N",
  "key5": "AD7ahYyggoUZTDPTngs9n71R7JfqxKKjJCZ53mQMSMHzhvQtvnQbQwMaUEm9gPWCPzciGwxFMUcWkH2AQH1zn9s",
  "key6": "5P2ySviveWEt24iLjjsZvb66coumrWQrHqRbjzRgtqcpAa5trAsdYwUy76Kung2TDNz1zeVhJvAAQs2JH14b4eWo",
  "key7": "Et9ggd1G6b6MLpVcQTjBC2fRJg3K3D4bzHmQXAPL2X9aoY54kryFV6bUJMYhrMzCg26vDXo4MpPd8jpAHXq8wZF",
  "key8": "2V7KL7keMK6nHeM67SdmgcWiPD28bac8bJAfJ45b7Z9jnQoxXrFJ9gDFVQPmDE1VQNVYmRJZAjtFnHGKcYBVxnf1",
  "key9": "5e6n1HcesZsZqTaP2z1tpYy8MbYqp4TK4kmtQANAGDDrFdLFoejWMPFSThNP5J9pM6wzVZaSjyKUaR9rbQrkHT2g",
  "key10": "3NGHxdQ4BkXSkSxAaa31Ht8RWDisb26yGvKuNj6nqzsiZtxdfsL2mNynzKN2evos11L63PVg6rXFp9DAcnCCgfuf",
  "key11": "gAx73xBaFpjAwvDm4mYd9Hn7U1bF5wiBPCkP3pWNuPK8XXF2EBXV1HWGBPP572pNx74tpbrG94Sz6cFMtbRCCRq",
  "key12": "5fxjhjsPJpDfEt2aNk44dDkrVwJiSFYo3vNktTTKPtCzmUEtn75eR8dcMg47kzE5vUhNWj9MXNtQX4RCgo9xEyx6",
  "key13": "4YgZ7gp6n3NL4BTbiXDugxP1DFJSHPCeHByuCBnejvwwfHPWTBA4KQGHuryrjAc4b7cKE8aAXb1a77KUir58zXjV",
  "key14": "5jKkWutSXY5KVSviyq3ucSqDQ6d1XWJaHfRwZbR3DUj9cC5GoA44RQgtcvKeYnuwzkHJmjtzkzBCXDXt1ahsQe8E",
  "key15": "LsXK3Z9FqQAe93GHPjVNvwf95isTKNfjWWfQbBuh9Tat2CsbXKjL9yG2idnQoEeC5bSJQix9m78rQELxqguaTP9",
  "key16": "4SnKDpnSSJ8qosUvBLuRsXz1UhXnxUKpWbdwazMjaLZYQRMCZdMHvDBzEEGWywSS9YP4aL6wg8BBgoh73ek31TpH",
  "key17": "7TYECCZjskEVuB5tcwQYsuXJQzSX39cFXmV46EcyrycKKSpUnrhz3wPZ8E8cZouLvevto5FjGaRYAn9NEPMnfrv",
  "key18": "5YCnzLzftixA4sJFszWTsTqHrfcSJRSFixjY3vxAh1iimtXwBJ6uSgwKc52ksMUA2VsNb9amuRJC9M3vo4xnyHjh",
  "key19": "5qvTyv92KzgqXdsHxtevQZb4e1z2wJmGoLnuMPRcsuBL8MC62Pci8wix6ixa6nGzBLuYtxSYnBg1tmHCS9B5x6B",
  "key20": "45VwFUcAfi2hdNP1ep2XxZ7cCxN4uAb1XVnGBJAMd5HfZUy9mFWHfgNWYrVh22VkoZ6NbdfUQVwMsHtxaV2sabx7",
  "key21": "5E7fT8aqUzeUUuVnjf6QqgHW2kKGcDnqfVvp9knKR8SStj8TyiZQYxjtMCzbS2BUSD9W6NgmJHpjdHVDgYznX2Un",
  "key22": "5DvGwPbQcYAmAMoDYDND7tq8GyxDGzMewphAXbgA3uw51mhAorCVMiig4FbNc6MNp6AcvWWPWASoUgiEy6aEWdnN",
  "key23": "5MPD6sdL7NKAJxkxL9i1Sj3L9wTm5MCENny7BpY1669t2PBLx9hcHBNhzdZ37AVxXRDn4x6Nxm1dUrDnVKCoDFcx",
  "key24": "2hLZmv6a4UwntRt3zjVm7w3S5NL6WVsA76cvDfwme96QiCFgXisHvM7d1KeMwpDw3kP3ZhUFjz7kXBTBv1FvVB9o",
  "key25": "51yCS9qQEGinLMujCoiNSdd2yJbfUuxCazfaPXJv2ntetkqFiAeQuAmnvRFbGdYeNd4Kv7NgsYLaFtkQKiZpwafN",
  "key26": "2pG4114MsyZ6EjgEdsER2ECbAn5QP7J3xNiUU77QakeGdyY2pzSX35T1Ebm5S5rKCRYUFFwXC1yCx4nDk9AQbD3X",
  "key27": "5gSTWSvfZipixEXBjhJSTHpjGHSUasvn7uaYgjb3iQeBCuGVhGRkFA92j3qks6CnWJjDKz4QG3Vz7hCRcrwFxKyH",
  "key28": "52keHFy1Ng3R3spHYeLqwaKeybxR2Xg54nmXPyq8ei14mAWC55m6RMAv8kE7jgpKaefpLfTs7bGSSgs4WPvmSHUj",
  "key29": "5STUUsQEqwzZz7cNmdREzQXru4L9Q8aMEoL2yhJenL8irfMjtdeyuhzy6QWjChawCckqLWiMXacsaRiB1gN2jsYR",
  "key30": "4o2vujWGgfHP1PUwcRX4o2HCE2GWLzEeRo6LsxUMRTUv8QrLp17xwtRgpAWdHdcuTRDxytnBCRwBJobkD2m2nF9S",
  "key31": "3CdpjsKuX6WTU7RSiHwXk2WtYCUBokZRxbDZR3EA51mSqFzHEWC8pNtNtRc6Cufs2d8fDPSGvkmGKpM4WQ7UgsKo",
  "key32": "2heeHoTux5TBRS6SixpBezDqWzx1q7H6Ddj8x5woGRcuArmeXgkqHr5T4a4D8b9Wh9uJ62Eb5VUiLycrLTnZPa3f",
  "key33": "5RfHtBbQWfoS9fbahtyWhJayhdWqhXyVbtX7E2LvLNDZBrZTQ7525vvEEb5o9mJZRiYQyz1JBED5HkpeNxnRqCQe",
  "key34": "4CqhVXNEnorMwcUWxNEsUmPb8QyjwtGNG1en9Pm1z9pr4itJsdgpRBvGC6ZyTQzPiodG6jRbiS9FYAJGUR8Ypjo7",
  "key35": "kKyh4E8Hs5o8MU15e2JDPKtJrMWHrRNmxA8VubJ7Q8ugHijt7ntwk9zVKxAU2CJ581YPQ3oaqe7VbtcFNEEReKJ",
  "key36": "56ffXLn7CkJs4pYPzcSbKQ5TcxkFgwYWMU8vEtpHS3ASwmm3Bb4xewS2xe7hAgnWrjJ3PMoHH9o7Whyhfz1RYE1W"
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
