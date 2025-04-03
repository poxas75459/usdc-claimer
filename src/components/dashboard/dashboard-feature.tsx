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
    "S6GyNTcZe976WkSMH1vYbrgJ1jZF7KtS2cuyXKAMsUaUouxLtZp5bS317cqxmVRVoXSkRopB3RRy6uxhTN9J5Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32PsboshvFy1Uh2dLziz1dgFoZJe9QcFSYapNPViv1NNouCzqArnpSNHovthAN55JtCj6Sf8MRfijqePpmu1CAWv",
  "key1": "2MD4sAoZMCvMLqCCoar681EJVXFj1gHj4yMJUE6ApS7DoCAc2HXjg6MkJLKyXAUpMcBvHNRYv36jTcx5pgK8wgoX",
  "key2": "4TGCmR6vS52Gb6pFMBaTWSHNRWFwCPgFm15MGJxN3tp9kai4zqRf2SW419niyh2SAZ1bNmG5NPTyAZyuU3g51nzQ",
  "key3": "L8PhkbKuW8LjeHa1KpmvRvUhThDgXQvvivgpbThui1Ybm8BfeV5zqaiC2iTYk4nkt5F8HouyYNdPoZvJZEHhiec",
  "key4": "4pBPXoBvffsLNmeyZkHyyGGj5tmCJ1kbvHYpsmUbouHQCVdWESWThcyZrKDtrWLL9WwDYsdQYAX43Xy16AuCdCXo",
  "key5": "4bc3PguvPrVgZqRKGGYKzoVSQvvK1ZBeNzkt9nuUsDSmmUhCdf6pCEVqmT8WZVAkrjKwc1S9M2vP296JaRQgZqCA",
  "key6": "4Xw3Zj9GSL6G6jdB77RRMWGr6f38KtkCJASKST2jmPkjEgyErHEqB8P2jaLun3BxHdMDJn5qFn8x6mo29HUysezf",
  "key7": "281FY2xbaXYWD6qq1VPfZLC8QYugxXRhBJmq2W9UBD9MgfKSuCJf48iJrj1c7WgjBMD8TWX4t82HW55pfjR7Exj5",
  "key8": "5woFNHvL4YHgPHEkwkMiied8nXLaCLewDimJ2eHbHhAYe65PBkWGhS6RDYUb1eNPWotc2xb1ZFR3YtEuCqGJBWxz",
  "key9": "3JDzBCSj1TPwMNujRdf7GfKz55wRajaJqSqi9JZ1iJfYbVjrtvW1QMuSLtwz5EwH6CAzi29xJKvupGABnpqSsgnt",
  "key10": "52sev1rFnTttQrePwVY1SMLFsB3MS92otcbSbNn2EukoaDfDLzDWXYRPoGrunmZFcGYGQ4cQsYFSHsB2dCo3XX72",
  "key11": "5KVLfsbmUtYr24JrdUA7jcmqsf9yqpJ2Vz7p4ShcSjRsvHQhbYMhZgD6FAihQ55Jn3ZjBtWK7LDME1rM7VqZhHr4",
  "key12": "5kCNVrxFwcCPsWU2D9kNoqqPCYBEEEj4rY5iiEkCrvPDT5dbCYpvSKz2QKhMfrFDM1Ekjh7U9BVqKKPVkepsdj9F",
  "key13": "3R2efWgzzV5SMeFgqmGhxfcPQTpQRzL1i1AQe671jQmYrUcTGeVGegUsgub8vfEqnCMgQLzocieyQs6S96h4Q7tJ",
  "key14": "4w19LeTs7zcGkxYRYRV8KTn6ztnezqigYfENLYrZZxpPvLnkjf2DiX8pEMvdAV57Zx5quevZoNeMtBRbeAcdMhVv",
  "key15": "39Czb9yxuHLSPfJ54YYJ8Xjaid8iWy7Cqk1aFrg5mgSkiCxobPUKRPFF3pVpb5tyDSUnE2FZuvGi7rLUjGbFhc5v",
  "key16": "W8RQtKihxsveyQ782MjksQKGpifp3K5uXX4HwLxtpZyJVQjjhdYFHoPbMFXLSHXLsBmQF2pegSJ4sk1hHZhQsxb",
  "key17": "dq5Ab2S5XYuowtSE5ebxBPSi7iKMaWDF37bMQ2Te4QAGMWDAAkRgkoJQN1B4bz57FGz2BtEDzD44UdfpruNuMYu",
  "key18": "3E8Ax8Le6tB5CFho1r2RSD5jrm5zj9hEcqjPixtLAkpfFtpSBqT9VXq9hJUx38d9KzginKP9SoKg5eHxnjtt6gW8",
  "key19": "45kJpshb2Xif6Vb59YKYMNfSKepZky529vHC6qU8xZhczdVeotEX6MxSGeRofZRWQwaMNVPe1Vhvr5rBLh23dKFs",
  "key20": "5ikoZbhfA5PAhdtfLL5MSu51dwwRNXw4kaXupfWeu7x5GJYkyuM4g1F9QCDCA6M1qSv4An5ca3akPsmm2CT2Q2aJ",
  "key21": "2kfkiFjNFZaMHXRig9tLTgKuLNR7c4UpqtSLmePZWZ7JnZAtcaAzoaZtCF59gx6pVTt5W64KBPfHnLdWtD8uay9N",
  "key22": "2DUdtoH31Gqzne1QMxzZjj8KGr1e3VE6fQu4bM6B5hh3fDPozNpkvawo4Zm89FAeZbymoyNz9ivcb3zd6S9MLzNk",
  "key23": "5WQh9xeLRowmj4gVesjiRPGb4JF5F8q3Lx3DBa888MNKBzrzqqFX5UsjnbZxjJFEoNkPeMah85U2ygMn8cxhHCZh",
  "key24": "2VUkKgC3ohnbDiepgNZVwjyJCkczb6ueKwDawa5JjWMby72jHju5C1kLo4mkD627wLqFsdsVEvuuBqRUH7fzodpS",
  "key25": "epY56PrEDN6Ku1BEi76ffu4isxz8BTpeuh6YLzrfg4r7Ypy2xdUrEZFTGQxNBC2E55axvWPmgyyWzNSLJgtGnW1",
  "key26": "2Yha5cRe1gpUKBF4zEjApTowabv4do5L3QpN8SJ54w2B8RWzQBRWtDGVsk2VX7TVUcixdGTPHDa5XC9sYjPqZLFa",
  "key27": "526vh8cBhwCVkCCLTYUA3pqDogfTHGMuuact6XBadWWCyELZieGy13werpvkELm6z65P4TVvr14NGaF4fuozi6mw",
  "key28": "3Q56c2Up7gd8NNGtRgtx49TJ1fpiRMANer9GiRKzxUy57GmDND9VzQpWm1bTetioarNybddkZZdefYvEVr19AWcj",
  "key29": "5qsiYPuNLYgTw1Rg25CxsSv4P7MazHSYY1mr2mjLMA1tRL6fnZ1L2bBW2eRFnU1y2CFRknMBEuYumgM9PFjTWKMm",
  "key30": "4VrKGf8bKgozUTpB9biRAewjdtZcJfQ3ZWcWtC5kf6Dobi7NShEfbGLGSRpZ5NnepkRsmL92M1gbyWgXC55Jd342",
  "key31": "ocXCyW2sitixfqxgU1qD7RifUy9GX9SekwqY81RYxSB47pmJQd5xzyPfNZSDn44nVp4Vz64GKYd7fzR2oeHct1X",
  "key32": "5iUv4qXtdyVAv78SM1rSDfYCnZ1ETz1Nwrwr61LbMDp7A8TR9neKnLe8rgdzP18UTG17WDQ6uhxWB3uf19Xd4f3T",
  "key33": "2TGfHFKxbWGWhCSoMqX73wrijeQqdr7Z78J5yEfEvwfKDV9fJoch25kvD6V6T4WygYudFRgFrSeCZVqBsvKZRWfG",
  "key34": "4VGL9RkUZm5oVuh2EgMgv5491AsebebGZSSZatPS7Ru29rqxaKc4AqW5sF3qoyA5xUorCGaNN6qXQRx79Qn2gsBM",
  "key35": "3vFAtru8xyMLo83H4AR36Qasf2KykEyR7KHb3B91DAMQszEuEka5Dby6pqoyV3tQEn8e3j591jQR22c5En59ryn8",
  "key36": "aj3dSwKwWAKciD9z729YVkd2zvHTKwFSY3jJ3L7Z8NM8h2r136z6F745KzA1eyR2ZueMxTFej49Rf7PktwapuTH",
  "key37": "41RFHTkDBgKGY89LQdngXGM5uCH7D1HnJGqXCRqrZvg6wWXmQjZ5waYuzz27VPgjys2cfzLmpUbogUAcoTB3UZpw"
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
