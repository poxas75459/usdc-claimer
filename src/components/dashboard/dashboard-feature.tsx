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
    "4e2xB8RLFW5LCS3Me6dkdRR5xrFufT6YncN8rXfZkGJxS5xV97FdY74WoVjSh91eseuPbG9kXF7vC58xP45ETf2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEZCPbmnUFAomoiwP4Bs22z7YrV63no6GhJq9wQomEaScTKcesXtqtLrrYrLco2dWqkYaiYYcAqZnM1jWDLqww3",
  "key1": "4jkhh8kXySqQ8Bd1pa91M75waW2ZTHTGwTBKUeKE4e9Gepkj6fEu5vni1JQS8XBJSjaomjKZTjpPhXp6W6c35Qcc",
  "key2": "4isAMwqY95rBUxZXmormgik3ZqBxexvYfNVmQaUv4oZUcMAdYsJRZB4rD2MiHYEbakJmNs5zc5gr6GvDvJDFHkeB",
  "key3": "QHKTsyKWPx5EtpSVTKfMRHusih9g1Hc5DBSThHB7So6JswkBr4zHKXJ6cqJDQ7wwsZgYW7vFfUdTwUeLVXTpTC3",
  "key4": "2N9frbYu6LzbbzPRi1nSkmS9AdUD1w8MToH11DVzVkyeZngavBB6Ssb5eriX34ov1YcjYhouwZWwR4UUpdej7fYZ",
  "key5": "4zqshpCQrG29wVCEx8VaucUvi7mJSbPEDxN9kvgSYxxf2QmMnJVeUS5WREQZsc55Bx4o1e8EQeTgr2HkKsVi77Br",
  "key6": "62WoG6AyqocB22XkGVRJzxzXhqtmBZ58Tfbg9P6ojXG1uGkq199YuNLp1LuFy5WPSwsfuF6XLxG7UUptcK9tnXJA",
  "key7": "5prKqWEKcujnA3JxqKx7SiQ3agwrj2LqxJggjKEAT1YnJwhEujDbv3LvffWwfzzhQMN1ckgT8FJnPr5uFcXCF25U",
  "key8": "5soK4EwtypG6LcgCuL9sdreu4m12MF8194zu27e29ByjhW1HP6dBJ3fGQGVACnZvxRxG6xuFXYo2986rXdXqXYva",
  "key9": "4NFwy9Z8fPouzgeEkQEZgJywZRiyZa4uU4nTaLov47cLXtP9fFJs1DVJ9aVLaKjumSzrv85adCyyE4tVbUoKmwt7",
  "key10": "4aTaWzWAFZnvRMAz4psVBKaFuJ9ssgC2vbCwA1BYAoc1njvoW28NYVGCF2RpgJmVikwS3JzGn2JEGppxBMFbAYbD",
  "key11": "sGsEcsWifj4D74yMfAxxdDp2DyQSrYdRgMrAuaacMAfdbWkDw6EYMi6ZWVEvbhVCr3QfuLnMqs3WkEvGd1vuHsk",
  "key12": "4wkhMMzPxo77Jm9AVwDhJFvS5Mvwcs7xDNJCuVrWHrkT4qLGVovpk6W4VNapviVCmij5oCuBa9uiEPLuUZC6T9sS",
  "key13": "4p8RayM7s7PqVpTqrQUWnXtmeCPp6fUrqRyLxjGbQhniFRafvnbw74rEF6kCQF72jknBxeDgKEeTFnaDYA5ZJ7s3",
  "key14": "3KXbvuXQgDdpKV9ZfJgqj28jHQD2tbURwPaDoZEtwgTvo6FE82ByZr9bxCezRtuqHfUWRnrAPnL24ZzeFXfw6oFF",
  "key15": "3ECDN29ZkCMcCHcPQygGzBJfECAazppZJhdjdgUznA2SgpveGLocFKu2j1Z4TQeTc6P4VrBAZYEWSoxKKsK1g8N6",
  "key16": "4jsmcxZnCt9NME513XMyEjmgz4MJdkCaQ2vrL3QQPpv8AnkTx9RmkeibM5BCCffojUruHsMbYErpsKJnciF2JyhU",
  "key17": "4nVt5bgr7gr32Z8YkkTiepjPcAiRBfZS8GFSpPBTh9YxzYq12fTpUW5b6pmLFcV5MyJ7kyEjQWbBkaLPy43A1HAE",
  "key18": "2Mv7i8LH46BEwAWzwTYZycA2CBDQM9t2qahfJaUZnDHVV49JR5ePuHL3LJZitqnz4kSTmngBimoHg6AAFrT9Zfge",
  "key19": "cpQND6jw7CVgJ8jRyBJYTSYvKyWyFRunTARBeMC7VpVEdMAXMK3yQHNRmYFh7EEBQSCTsaPG98EJh9ccWnx2AFC",
  "key20": "3zEgNwnMYEbewMnY2ZhjDPzEzGLwngagN64moDpbAKySy7ugBHNYixDNUYjHRNFLDxcvhef3meUJaoTDZi9zE9EA",
  "key21": "3bpVMqtdUK1rcrKFwyTRfXEPgF1xvfF8J9bGjWRNRaQDVndRWXfEAqzJ8hWEkmGKCK4XcLXkAAnGPXLagbtBadKV",
  "key22": "3k7pzKxkiXiiECUVBJw93eDVVHgDjffpdQxYtuSaH8SKHV4r7jEpUHRBSt9yzJaQY7fsbxx9Y2GpHoLu1Y7Yv3FY",
  "key23": "4eL2ZDSFScouNFFtE7BwYFcpsCyAi72YywKH9HUKJe22mSmmW7j9XtvjfF4gdGdT2Texhs9HDgaM6u1GqQQWh5ZP",
  "key24": "2Ecns9KCLTLpsczyC4Ly9v9eCwpUikr35fpdbqtfjQdq6g3Y1FRUUUfALr99kmXFWBPJjGa18aY3jhZcnbW4kuFX",
  "key25": "57sxwaJjFDriNHgrYV5PTgjdjyKwTRGDjZipyFFfVY1RAZxpv5mY4DCSopaKPX9VxRnLRs7hg112vKytZj74QrFB",
  "key26": "36euX459FanvKMypLRuwcpeLt8MhyoUz3bAgaAwa77Y8y3Tj48rZ7GpJ3A3KQqWuo61vF7LMY48YWV6MGE6aQPJ2",
  "key27": "2K4xyRSEvTKjPiJTpTz7f1tNXcLNFtHnUVyKfPcex4xki2K8TNs3J7rbwFVpG4Tbs9fF1iaqP86tbePwvk6RCT8q",
  "key28": "23G212ae5Ce8AcmE7LA7p5XHrJsQEtmL7CNBhz5P1N1m3P2eQtNwmhVzBiWXJG46qRZ16DyyeDmFwsJGY6rNazig",
  "key29": "3xq42kvapkA7VzBkgrQxU5zv7qcqf1J5eEoecD2SQRgUBCwMihLAEf6pr7XuuAC9vQEXDw2v594mkFN23bxNJHCG",
  "key30": "5HGjoorGi5BHkqkE5NMEcAM3HfwRyGyisKKyYvSzfRtUutCo74Dyo8wSta33koy2Dgb8UxP5Qt5tjr28i8qEbaGy",
  "key31": "DezwpTNwya2kHtiRqV2GErcCWYYFC51gzzkGzvVjKaydzfVaZWkcWaR9gGf1UAGKnY2jSFSK7iRW7Li9nL2dNtE",
  "key32": "64oskZzFGmUtUajqDUExx2aLs9SK6qm7tRqajNhA9o32VAbmwH2FrEsudKZWNi2PRm8e2SnX1FTAUPTpZtk6sPUX"
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
