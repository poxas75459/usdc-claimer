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
    "5w2YiZyrfkFnZzMeEt4K9Dqkwpdk63wvU49a7FdmqDu9sCMUmbjLooD25E4RM2a8H9cdgzMmPUPJSLfhZynARnwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F1ZeYrK5fdd9x6BesUJc3SD6YtQ4YY8YuKdTQ4r4mf6tMzyqVtGkGqwae8vzZfsWCvyPB2SRSdmd9e26M83WjZk",
  "key1": "4TseAeXmVeXUMtsQpaXvjyPjUKD2FJXA64qsvdm4VPiE4Wym8UpbDLueN5Cfuye7kTRNDiJfTsGFWGCbXyf1n7vo",
  "key2": "5zKjs7Zk4PYLwyt4MxxU4kKBfa4twfQK3GTFSyEtY5ux1eJz32HqJtPGnJRLnANadW7PRHAuZP81n1RMPLzNJtg6",
  "key3": "2q97APJGLXevBVW9hBithjKRMDgFVLgQhcsrRVFrgbb8XRQAXUnjjyQLpVehQDPiaRuP4SUa2HDBq8B783S7du8",
  "key4": "66ANwCam4YMM5SdVSr3Wm3GSdsxXXaq9P51VSYGA3o24pLsjyKFAH9SCwhSjsgFaFFCXfmRZX8X95W3as548CK23",
  "key5": "23YPyZtjWpH1gA6N3g6tHVrHDvo3WjzcR1PUpVcTGkGXAox3Vraiqr156USqDZx6zXepkEKqTBV6yX7h8StmRG7P",
  "key6": "3uZ2pa7cnejhugeWLXdXUtbDHMesRUfDEBwjMKNHh3FpHFnyUUM5d8aULC2Xty2C5TsFfaS44xeAYpysiMjzXzTk",
  "key7": "32sd1d8DSqXjBpxxGrcWhr7Qo48ky5yJRojWj2JZEZDXbx2a5C3EcTWTG2EvNFsJZEwdeD5XtqqnLs44GB3rjgMh",
  "key8": "2xpHfewacHQPaJ3GcqhDy3C7ceksooUJ6MsJAQ77vcj41erjaqgcUvGqw6YhkXsiUfgvJz7q6SWaRpAWosXUtNxT",
  "key9": "5gtzDqfdVZ59vv4NENsHNrHFijJFmqXya24Hj3wn6tXtwc5FvLo4mTmrj83tJGbCZ9yaEQiW7s4RKv8EGSmV19ei",
  "key10": "5JKVA9cS5Ci72cXf13EARkTL3fHSchJzh7SAcnNCqB8dDu1kHWy42KSSBCjqN7Qed31GGLKiJdhTTYu8pMtUKFqZ",
  "key11": "4zo1WfCDXk8YqCy35bcT2F2bwcWi8hXSzrJaDpyuyNEZFPdqMNpDz66427X9ZD5dzx3uVnFdU2UHp6wFHxrsn4Hs",
  "key12": "2Gr8VJ4tsKDLkwSzdUQ556bWgEjJdmHPRbrAdbEKQe4ocqPSh5Hce4NX3yQQPW1m6fi163yBy3HYRkZ9mbLtwouo",
  "key13": "5k4HAmSRM98hwDLmrBLj8Kfgk9JnccUCoAFVnURCEveETQt4Mwy2d3BiosSNpWwEaDBHF97bx3Wer4gkegVrQC5z",
  "key14": "2EZx1dhpHgLx2uvUkw3QvM81CMpjpfEjYXJScVx9KJqFWB4LHNTh55Q2oZsQCNADoVP8UcdFKGRwvrqipPhuTF7T",
  "key15": "2tkcGdxu9q9Vot5rGho72mLG7XPza6q8TEDeAsc4qDC1oT8WKmoPcdGQYY9dcxkhW8ui5Z3JHNah9StRdGXmqnSy",
  "key16": "28hSNf8TSPv6LVgKCTdNG9eaGoNmiiG5gPfTgkgK2JQx3387ATJ1KHNX9jiiY4hLxMdr6inzXyCQGC4MQiaMT8kn",
  "key17": "4iXwv9YrB34V1fMeKJkm5efXFzKw3XRMebhtdQKHqe5iuD9bXaed9DLt7AbczWYxPYJAKA6Uk1mjbQTF3g7gXspD",
  "key18": "nBQLK6UiTaJJuN22DudCwRfVy8qTNfcV1WETV7MmDJhdt11M4akDPG9a8ZnXNGb3bbwnNQ3kudHUFQPwfWqy7XJ",
  "key19": "2yiriMiX5piV9JzJeNaK242hEyKhWXCkReKMFKBxT5zbDfRt7KuUTJbr88MzyrdXWfxkCZSRRBv9izRD7xwJTryA",
  "key20": "5ZSG8JS7tGz49BjyLN94yr6gFuehaHDr7wMnwNfHHAm41wN6fzK78Noc1TC9m57BU1yYjvjXbfXUBkzE9FHoBB7Z",
  "key21": "3G7ePhPvDi6PQEZGudv1Ecb3PEhvRJXNVhHWtpP3T9n5p4wLPnuT1JCWJNX2cBXy1g4ZVCUaggG6WdhMrwUv8czE",
  "key22": "4bF7uVz3kRbrxBMqKvxtcYN4fj4DFpaTBybtjVD9KNYzzNUxo4ESrSZk3nCCA4orHSEYFjpQfRq5mjXHE4ABV2AJ",
  "key23": "5XPXagwFDSUoSfQcRWUctRqVyFtbPt2ZgnL4zZBjKDz7NQp3CEuzXjrBiysubMSyemYhAc6ZFCfCtfKD8pMLPbJh",
  "key24": "DayYuAtYhDgnoX4GDZ9vS1S7HJmwQuZ49X9C3UTPij68gcrhkGB9T14tteAAvFhhCwQoBHN5YTTC1XynHYoS6wV",
  "key25": "3Tb2JgehrdZeMUUkLMt8Z6Kgahc4emX3WByGvdVgx4Xbt27jkBCxmwrnsYdyvjhxErnE85AvChmchgVbXApHXiMV",
  "key26": "6686iHD29hBud67E5cpaKZgDyBC559oDScvZU9k8rD3ghn51Zh9hU53WihcTW5Xf9arLsdRqRgDiQsapZEsJ4dGN",
  "key27": "geEh7QRxpr15VXXBfad52H1GExTtQzQ9sugLVdY2ocjW8wrZ6xZ9XyLK2mSuF9d7GSbPQdediMt5qcdbsNxC1Sa",
  "key28": "2FX3SxTeECxyrvCBiy3hZJY1D2YD94p3duE2STEpZJ46tpCyoPdW2YGw98GmikvXe6wt9Hg52Ez5zMbNtTfdoicw",
  "key29": "2WdSC6W5Sbwg5c9teZWKqpEUCudsm2KFcsp8NC7qLtueVLQWxZKjjdx3CenapvvZnAERXPWoRvai6jg2CRRrvD8f",
  "key30": "2aiLTWYvhw3cfo8sv5Hcw6FDfsJeehYhNdNYP5a3yny9CU2MnyNhXf5YqKnkZ4rX1jvhuuzR439wbWdXoN8Swexp",
  "key31": "3zmGtvpEJshNWaSseY21scbi8prki4TdsJL5P5BKwjPENv2TYDibZ8bxTVD3aoinrK9PdbVR52dEkx1jbMmv93uq",
  "key32": "28ctSAhJa4FVJ1Zow9BqQ6YGfbe6aww1yuffMJp2LtV2racNs2VXsXNV18arxYzwBqpaWgQ3ujgUF2Szcbuyavfb",
  "key33": "5q7PCszqCZXx5z7HQuxY52corA29jnRFjgb6eAqGDPjs3HdahsGMZpUBRuBodVh6WdgeeiwLXzgZxeEbiZtbNytg",
  "key34": "4NRS8dMALDYimSy9Bc59GuKLri5rX9FJVPX7gtjDw3gRv4CB7u2gs1zKxGrxhosWaKqCmiSDSfnsepLND8KycSXE",
  "key35": "5eccPhXqjP18PDY2RiVW5rHWTydUocwUhDD1idAfCywz6rBWF821RGcsCiwsDTEhFvxR687zTeknm4rTnFkFDPGh",
  "key36": "4iNR6b8yRjTj7GfZEXDfV9CCWt9BsTCkxj53vqqAtDYhGNdfAXr37PJF9Zbh6DMYqfsqkrpvW94xd8yVvnuC91j2",
  "key37": "3gA2AuniUUBksptRGJ93jSw3NswXeZB1pNZRTcN2VucP7sVVq3fs2sfV6fNx95v5TQPnWTofDsJzZ2WmcGcK1JFf",
  "key38": "3hFXi2yBMtXsoCvaajMbVh5wAjPim19iZwzGq3hPkRpkMv9PgH4nzKQgHs81uFzns27yMxgDjAwo7sXQzjh8s8Wt",
  "key39": "KngCCREQbT5MfXVhhzf739dXd6gbp8xBL2oFN5U955rLiQ7474LzCex1zGgpmrnpprwWmU4z6r5fJDURWh4pcJu",
  "key40": "YJv5EuiTh5MNpgNNcJTjZnozUd4Kj5onQeSEmsSqzMGyA4ZLNJYA8GwKdPGf96c1FQCnMPvb3owXm26C9dk7YvT",
  "key41": "wtTqc57FiZr3MR7uDgsHjYshgkNXS2gBjv617weJd6dVeoBUXhp8E8kDASKu63HDahjCoKtmiofbHEdbNrEqS4n",
  "key42": "3Ym5mgWbe4oEnNYMw272f1Kpypd6WQ7PC9SPBHXKqGVVzi9CCMxjAjtz4eX5Bu6RiD54hkK3KWKPnafYTJowZ5QA",
  "key43": "3CDVqzWBXUWjKufJDVtEdynHEdaXU68efDD71yu4mUd9Dc1f9UAs3A9hpRdBgr2VYE29otATDS9thPvGvQS18Qut",
  "key44": "44owVWmXXPfWvBuMuwdpqB5LwZTwwoATsLryEADUxCB555Arbd14scYdsMDocPdFpGtFozYW9gZ5t5VJBCjSHyo1",
  "key45": "4NaRv2L6KPhritMEhh3qZD2RsD7aHunHDe9DfQK3yAHFZ6DNnmPwK9GLsH6emysZnN6D3QaC7CrLpeMPZTe62uL1",
  "key46": "3yq7uEhDLn9NvJGBTTbTQ2qvmem3t99vMaJE3QXZNLPHvXVXyc4c7T2M2ZbUQM123tfrWVj7nZF5MdDbFciZPcBB",
  "key47": "cfE3rawxkiL1ZoQhxiAQUEzZXtdXE4S3GUHgLY5M6raViihWcDpxTeW4Uwe3sqrBJBPV6P75F5jZY97TKW6GbTy",
  "key48": "3LzUsWujX4utacZXQ1Bv8yezDx296U7ygzN8iAeJxy31QVWiKdK4Dpw3pJuBUnWrYdumEw6jnbedY9GoNBobtfbS"
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
