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
    "4jGRfkV9F2SL2R6LX7CjZPa6ULKfrgv6UXVGYGUPKizdj77ziRRuHSdbkrRsbHxqWrieiYnksMV74MEkysFT16Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsyiAToggZmsbmdWxRC4NFvYn6o5WX1qxRzu8pTdbhSmcRDaqNick11fcSBbTAU7sDBS8oeC7upX7rhBQE9Qujx",
  "key1": "5b4zWvx5TxnaZ39RTLozLuoGoYbVKtS7JoLY8Yt6NUFxT2SExtyNpAx6pcgg4qf3FtX6wnqenZ1sabTRefqVaYvs",
  "key2": "ThYMbXZMY6yeACA85VbPXXMt7TbxLKcwEeyU7rUiE2wYNcqxZtgn7cRg6uE4NPQAA96bCCuGgvrAV5HHU7PQMVB",
  "key3": "55PgCz2ihL3zvPsryrwqURtCoS3PbgRF7ZDyGXUgg9AFUWa6grWjUZ13JNuk9g7y5X4Fiao7VzCYgrK8R9mT3gJv",
  "key4": "2EKPSopxuGe35UGgQG1Dtcwr5aAxksAUZictRFtwKpjyrAGWHFQtRTrknnqjmKQiyPMx44G8gvQawTtMTGpcgb59",
  "key5": "3ngtKQPergHZ3E5TEgTJPP1zPd5PSJatAjsmPtR73EXuH1xHaVyumXBheSKHMfsBwGDw4beJDX8kuHPaeiMYVU4D",
  "key6": "2LcPtWZEvxEqP9XtaFg1GNJaoVTkGchDtihMpzym2uBVaUbguArE7xNHaASKgZ7eEnQJRQAqgAGonLcrmFDQMvYM",
  "key7": "j5rrY2WNt5xjFsMXQEfxpfucTNXrFjHRdM27TTE8P2t5GpHuTcV8WJKDQH3fRd7BkCbvTVursQZxbU9W4aBoWmb",
  "key8": "45tiCzvdrr4mGhmzDPYNzRvnvQJqpNdVNNEgJPzwnaQXrjBTHBaCjV61BCC66fr3vpu4VdpypAZBNVVMGR7Rkioa",
  "key9": "3AQ9R7ZFWtmNmMf5SrDDDVD7YkJCS8opU3b3TR8vgXpzRhDdzBxi7suJSKN9hLVWKw5mPVJKndRLtMbjgFGSpKsD",
  "key10": "5RPgKoouJ72GUzqLXtCTQoNtxNw7RVRwaqDUCw3znMB9HjLAvwyvcg3ay83gN7yJqkMNXJ35BHJ4cyNKL1oWMGvg",
  "key11": "2z3a93KhxTkNYPnKEaQdWtvbQmU6JJzzgELatFBxmEqrcDfeJX3TMmkxTqCgNW7dkXXdK8qVk5qgdNT2qobmXfQF",
  "key12": "24VsfYxirCx3dW4NyHw7gVdhU6omBmNT6bHT7vBUy8vUBt27DjrWDKjQRtRc1wgVXf4iJq2sCXrTAr5BRr5vWkjP",
  "key13": "2jRtdND42svpZnig33C2KA7BX35YuLu7XXkS1TiQLq8xS8RY5xtL2v57qa2rv6oqFFi8Lq8ky7aoXTosHwvT8ome",
  "key14": "2RuSZyk8Se7FzbiT5seC19p7PC4Xfr8NdCE7nkkynEoqxd9mA2ZbMA8Do5Hkn3sHtuUBDD5pnJqLkLSSE369QAyc",
  "key15": "2QQ8PACBFrHimM1mvXS7AZWP3Cs71hBCzvo1mosoJkURacLMZcfjzN1k2t5QwEvEobeTJTbVcpF3dcW7iCa6cPwh",
  "key16": "4Hn6bFT1H17W9cGUZ2SM41GVnrAPsxPNu9Mcq7PZVre1vn62XV2ZrjGmgiedLk8jZfzdfB2ni7XoceoWPqMZUted",
  "key17": "29BpaVdXnToxaVWw8BaEi9CJ1XwnDDZVCn2AoRrWXUPKaZhazkSCkwqZ7URkESNUcRKPKFE44cW5oSA6KtMwM8mH",
  "key18": "ncPALRBwMWsahVVG5AEgLkEJ4qtuGKaTy92SbfWZNubpoehXcS6TSXrVP93ubRnwreDiRzrggrgWPz8sN9pYVC1",
  "key19": "4xzpHkSuFwM6MiPTZD3k6r94Rzb1MrkrmnPRZM8B1KRUd1s7sqdNixDRayae5RhC8W8eHbksjbfmJo8ALLsFWY9q",
  "key20": "Vm9QwxGqFjhjm6wyhGU8wWUVc4489vNBd5VZ2TXfAJ4JXtPqjbMgYknjcqZNL9AhTdMe1S6cookRXR4B4dnHZRB",
  "key21": "4p8dou28t4KsqQTYyW6j8mkmKwUNjpVhCnfCydHf2x56wjNSD6HPDbVbi1Z4iaiD93Pac3UzQBeSDofyB728vGhe",
  "key22": "4apEQyRYTNwnBS82yyW26uNLyHwxj4e2ScmbmgSBFHUUgKMX5YUVC2VU3fLBPHv3RUb8oiwko2XCefNYcRJuxFzR",
  "key23": "5PPCPW8c4Lx1JChEB6xTsTZ418yX4cbsRZNboJa6eVa5c16rMnwewPgUqc3N42Pia8M1xJuAQXiC4HXdASD2mCxA",
  "key24": "zsKgFJb6BEAxwyYgDyCGt4jtVjwhK1dY4GuT44dTiWE8dyp6MXyEXgYAsq9hHWiaTebUZS4D3RiNaCJwwevGf9o",
  "key25": "5uicp9PqFBgfcKuVnuveDQ5wgdmkX3udyhtsLrAsDud6bfVUteqSYRDm6jyKFqXbbXwpvie2V3zMPHbUGX57h51M",
  "key26": "3DToAfoGbU9Vor7dAJy9wJXDw9gaL2CVE38BrawLCvQsyLxNhH5Sp6zdERqTZjArCtPBKSzkVpYtPCRrRiCDS3eM",
  "key27": "4HodU5p5zsyAhLfpmH7WgHLTmVTLT4dLstPUn7t8RgQ49eMBdqAUdXk4Aa1LnyApr52un9voj3XNx9fkig94W384",
  "key28": "4WFHm58qxGVZB5umGWGPEqWSyd1ASLXWvZNow8bV5QNS8wo4rMnn7Zxmkun1nDRVwvS1uXjvLeAF7xA7P38xmZPC",
  "key29": "5cMNDkmZaxvKNd8vkL3o29mGhkmqau2kQ5x8TcaAojkhmbYfEPsSqBy2vepS8H93GZqJXy9voaA73UfWhyEdBXTf",
  "key30": "4Nga6WwHzaMzFDuCm1FUuZnJxGJe9Vt1yEuGtWWq9es63xTjredqiNAnHC7Bjti9i1rbcQbuiW66a6rH3foegzA",
  "key31": "28YUQNUCgCP1Zmi4tp99nuSb3BSMMvmU4XuaqTKAP5iJBZXGwGjQJxtapAeEQb8Fipfam5bueiRVeTzAaJYGGEYd",
  "key32": "4VDUsdrWmM71TZwHmaV53XQuDYusSHXvxFY9pC25iST4N1xcboixhtqxR3tizjEMCFbLpybFw9JfoehJvoezey5A",
  "key33": "52ZDvzKZGZ8Zc6XMaVYJscpUtP5Lo3z8wtDYy8KKxW7Dod8vB3qb6LbjZnq7UK3BCtp4cU3NDoHSnZRunPZojxDb",
  "key34": "5K4uivwNGe2YmNMKAqcRNYn2C9k1TXZvcXDBQEqxDNMLg8AMhs7iFD6d5k1kHJSE2q5EPqeELqJBeUyvc7t89HE9",
  "key35": "xE14XH3bvb5ffZZ4eGEd3kCR1Lac59My16yKMNNiT2L9biL4gh8BzE5a8TDSxrfR1CSMdhTihSzJPyafFUXx5ci",
  "key36": "64JRFkWnuHdjnxBwZmVNBvrijHHLZR3aSdHNSzptraMmZNyKMJWmPsCyeqsJSs9WpN1CZkDRVAcKV55dpcyuUj2A",
  "key37": "5zcyVLFGvLKYXX6ckBuGk1taaZEkt2ZLASHH68T5jE27StHrxjz24nWuzBveikBfgAR8jwFKxZPrCnGfKFWmzhPc",
  "key38": "2ZyS33Tv6YUn84Mmx9jGZfMVcpXDLNphi9BMKkQir83e6mmkxHB2KSp3favBEPWcf2bhJSoKjWzs8v3TfQWiib1i",
  "key39": "56s64Y476mSURtxoqaHUBZaxvYzyjKaPBnb4CAu2pfTibfuZQjRQN1T1RUgyjMZEp9QhmQWex72GPsxJ4yS5jTpL",
  "key40": "5pJe6cJcnJoWqiTXY5LXuFP6q2eV366qNCtWpSytrf1wmKU2c8kTRey9ocmXHaqZeZSb9USUimGcYewwKsCvtgDV",
  "key41": "2HbbhCULFS8vcrsvbwnPXzCfa1WYLV7524mLn8NQzrvdHunnXM6xViG69vTdMBd3T2AewS5NZJ9CM7Q6XyQXBZya"
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
