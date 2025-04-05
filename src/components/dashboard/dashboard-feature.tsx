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
    "4kaWAGXyYShH9UfHUfvSdLUKf5RXvAgeLPq7wbxNmX6zegi2WqmifeRgQvJuZSQ9zmtxUm1JqAfEmuFipUqoXbSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3U4qYF97vLZgFimsuXeGgPhgkcksFu9aErZ3awJyct96xVrneBEh8eHcWmsZomeJpwgGx5krvrtL5Yr7Vp6Hn2",
  "key1": "35JN28TErufrrZkSSsJRoesCRLMezsWoBeNhezG23Csbhz71p6t8R5z9ouCdzhnSdXCkKqDP4gG4AaMiDuMgE8ct",
  "key2": "C9dfchwYbJ9frA9soVF4pGWXzKoyr9dQHU8pLriswrZ974uP9ankkSttGczN8yqaqycKo7ZAkS712McSVRkgySg",
  "key3": "3D679sPJzxYemYpjQnGCxUK2EVZY5aPqZnMx7ZLTuAVFBS55EfnAvfrikcdX386eZNkxJAbLnKPH7KwyzTJ86FQ8",
  "key4": "3JxNPPo39Jd9zNxenb2MCDQDYVhnq1SMrKm73e4DsCVj7EeXhQonUtaihAcGSMkqdtQFzhUzKJCwZRbLXHpYDX5c",
  "key5": "5cKJ7SonDdBQFYdbroZF2mxRQegeEJ1aFQ9JfQ65FPqRh1CeaJwRJRF1thrHf47QxXgZJiBXHewgBQjbuRtsD8xh",
  "key6": "5k1JQ352yJezq6oMyxVS3zaBr78dDU5Kpxhi2FC8cZhGtXqbQMvv8B531vpkqQpyDEeFKdk567BnZzMEKUHhPJh4",
  "key7": "LPz34YifRqiViBpu5PvTiG4tMK6We6eDy4UoskrxjbGCrSFTqrSWPKynC2PeVaou9yP6XxqUnSfz7T4EAyMumPL",
  "key8": "3upXNb8QBwwNeyy4DyMkopGZA9FCETf8gcuEaNedfiw9vVRXamQeeUhCzfqm6jdryRoWpc99QjDMkXnCtZDavK5B",
  "key9": "4n9GGBgxjrwTEjDj5ULsiW7kwjqQwwzwxD7X3XjREnvXSVM17rL1HVR6pB1M5MiDvhpKWwNi8xSN6Kn28hxKwz9C",
  "key10": "31zd8TnJZEYfmzArAqDX2jXetcRZpe4m8WzEqB6pn4dEuZgRiDF8PL1Dy8GPso9BZyQ5bPZ6hfeUjXdjdxQHmZ82",
  "key11": "4T8Z6TZjtLUFci5YBmq9bEyZa2eRDEt7moXYwvRbEewmSGmPW6oSAh4hwxytnaUocu19heMhk9n9idxLxmhwm8oB",
  "key12": "5WzwbErqFsffiD1DYFg8tKmbZntGDYVpNbCq8bzqEDaLbyMTRGjwaPLtYGJdrgxAY99yRkg3yymS6itYQ8bDb2aP",
  "key13": "4JiDrpLU7PY6AY3LLBV15rx5SN3SzSgEyVRhSDVyRqq5mkWZ2pta5TuuaitfFXV1eyVqEsqaQEi8ePdByDaXSkRP",
  "key14": "fMLuRAS4AkXXdKU5RwPXbzNeCqh4VEEc3Fp8bU7eDHWsDQzQAHCLDrt9eYnLrA3qYkxizkUmtvixkN6QtX8Uhys",
  "key15": "q9GVeYAgQSDvS6K4R9TPab3ro5QtfVR6YnXeAKECFb66Pr66iCCGtTWAtB3pfW6EHVd5ASLBbgyv72F4RE5Sgwx",
  "key16": "oybfyUH6oWqUbmbwJyC7oQfvzcwMEpGyzmqsCaeLD79X5HtGdBphFpsvVa5ksWwB98GRmWNr3qZKsPd38RMgw8c",
  "key17": "3s5t8UCnTS1ik9ojzmpkkjUuuBTpodoEx8GwEXezmj7i34tLtLaFBjFj4pZ2pLBPibkEA6ap2MMXDQ6qhepNNibi",
  "key18": "getiZpbKG3xSwVmwcmLqJC3hokDTznuYzSejBLgHG5RXYCQNwJZQoXBbRgz8oEpkV1GiQv7eWFgJoTcKrsfY6kf",
  "key19": "5oDP9NXwGEVNF3FzuapnrLcQBqe5Y6QZPqGHTkWHewCMByhbSs4PX4QCR1zgPNNi8GiQ1NpCkULjhgm7bJJGwHni",
  "key20": "tfSU5JV1AFbQFcPGp3AJbfvW7SwKm3JHUVzdZkdKUSWgMs8vyfRMYCTHbcwR8WM16oX7XApZmU45EuvmcBLZKdW",
  "key21": "2D9EmJsnaZAucHPfjzmsN2Si3kkgKKuYEFyhQt4hdmwf28CouS7xiCqx7gDfSPRTSqesSfBQCgEvEYm71LYqQjx6",
  "key22": "56ciy5vs72KRqNzYTjea6rJqgTkDzpV88KzSPf2Xet8K4FoaET6PDMfrMTiQEz9uEKwPTSa17kBSCdgPW5ij98BN",
  "key23": "44KqUbNjjp7UwMWxC1WvLUGxAaKdfDwmafgUs34V3LkKk7qMFePpSSNe3RbfPQ3sDqhA7oar1JZ5kQewrw5Lskfs",
  "key24": "UoXTLcgsyN9WVZWNpWnFENNqMJMRpbMGC85eLRo1rM4VV1jcgSkVdCDrz7Qw99bhcJ5wdsB9Z3PDnYiuztfomcr",
  "key25": "2bVyMDFzpeXAJQLCcbPrFZqLB1QoA8ZQa8M2a7nSh5b9vUZoZyR6ixCdPPBASabY547jXvqHadC8ng2W7skwhbrw",
  "key26": "2zZwQwQug3PHA8hjFWTDGGLxhMYjGvBrq316429pxp91weLE3j3v8eLfuN48xzHcQtBVQdtsfhScayNmWvxycdYh",
  "key27": "b6VGpuzZP36rqjtCsWM8tWhvjWtaWFHnP2VVkycH8UykyLjEMbbSxuJwjXmdjA4fHn6YsspeUj4aqznxFnoCNdC",
  "key28": "3KHEsLiFGSQaqZwY3tPH1973Z1mXvnipcVmPJnyA6wsh94Yi6DWmj5JRfQn438AaY23T9XL5LiBe2yPCgdFxmQLj",
  "key29": "Y6Dn4oKribTdRVw4isTh3QvdTfNwt3TU1kK5MMjRFxyruPpSCN8XpnyHELitrRMCMxSF4YtQtgePvxAUd7hXKRF",
  "key30": "2TSesBnEgTG8fmWcLbPPvbqePq29LRVDz5BSBBVrUvn6pRCPemRopLrSiood26c8XvaRdkrB6kCGxrVdWTFaVDwW",
  "key31": "5wJyvXQrvaur6jb6rPQkuKqzdvxqBnR5ohwJ97VzbFUe3fXSee8aiYaV5w4NtCgKqiEoB16odQwLsUSgrs4TDeXc",
  "key32": "3C5YLBxvzY88SKp9XCCATPBvjb4ENim3Gop3uomABX2uLUjPXDgYbcR8NSTiNtEiBTivRc9N2arcVcF3DSLYkRYU",
  "key33": "3B7JjHMCAeUywPZ3a1SwnfSDDKCL2qe73KMuY7AVqJ7AmvENBUM2arbeoU5txrWVH4UoiPiEsb8yNTHEjktgAXSc",
  "key34": "64St3NqCAvUcYzkfQ3Q1Wf29M2xbR7GNqmN7FnFDGTyjKtHN1YSe2yNK1gHbKnxQy4uqJVnLZisstsBzodZN7p1J",
  "key35": "2JhsrTidF8m1JAHooCErUASFaChsegokJ2d1nvzsb2ps1hS621mcLcsAB3yMzLJYX1YvsKF61ugqjbxas1fww28E",
  "key36": "3kNPBDGTxATF1eL58doky4Dgw2MduRKx2uVPzc5kSyqrDhb3ovsA1JdBYXFRo9YZwwfFeMGAtvFPfSSvKK68b8k9",
  "key37": "4a14qfnSXTZmHbbxwpoYQ8wD9yyTGCUBvaRCSUPtyVuX2KokG8xyAgT79JDUmVqgWZDeRMnotUiv6UpWZshnNU4D",
  "key38": "21fSGYyR3KEV65CWfYHSfDm1Y8F1Q8BxymFvfErqYPdffgAvurvrcGpWTZN2vWb11Fdaxk6w5apkX1NroQJ6JWDq"
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
