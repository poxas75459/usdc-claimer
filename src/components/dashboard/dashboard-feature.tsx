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
    "2uconcgmWZ7caV62cHbxax8ruxPjVKFT4k8LfivPNFcyGz19pjKAsqQ8ssp9UUjhFjs2KCU1yj8ikB6pSSa2U3P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49KsWGrxP9P232PZ19P1Mbxd1Y8LMtEEpdeyrPhcYpbx4SGZAtnG4pYqmZjtqoaAWCKAcvsT6mHi66Hi8az9YYXq",
  "key1": "355KJnikxmVSBkBVPaZnKahMfRA7dYGcVEKZciGDMB8uHrqMLadmPA4De3bBWvqbPrHZsVjixHJL9LQ3kZ3kvPg1",
  "key2": "4jQhmWLPHm4k8crSbnjvtziMLBT8yu79wJ5Si6a3TtHwLKmrL14Zjrne2PvoQX8FqXK9fvvdCRCytf2KMkmarbiB",
  "key3": "FGVCQ8zbnfXuRWt6nw3aeESBzaK7vq3f2tXtLFaU8XoA5J2BKE9h93izEMmxhS1NSZqphdqianv6nJcxMFSVUwc",
  "key4": "2mqc3WXzLhGSxoBtin7oWVjTEfGP4DfnTL4FE3zJukqAPF9LEd3nMyRd5oqARoi21N7GA8b9XRgNzaRP8UoxBMnC",
  "key5": "2urksFwtG7VSNwKSwj265hAW5B8FcvF2KXgvNbzA8ATbheHHVjNpU1xdK6Cs7EuZRvVPBpQDWBiKLQzK5PSdnXdR",
  "key6": "4LMHcb9kXfvsnmPdTXFJ73J5Z9ZXeihgPZDKE8K6EfjyET1wbFMg5Uqmw4RqairNavQ5J4BnP693xDqr8jYGgqE",
  "key7": "2sdWWKowFs4gfGMzWSqNFcCpCFZrkQtvyBDCTLKNUjU8WGR54SxoSsPtLEp5d9cZsGPnhnSLR7dcwpYtBkgax3gj",
  "key8": "5BbzWcXKFF11WbasJFCk8RFnsuLuPdRNMocV9W5YojS9KhMrirD1s7PQGitBj92fXFoQnNvv3zf1RBvRMVy1uZAk",
  "key9": "5V9gfF69cMevyx7MzxzrX7ZhMAQETSxjQdc1uYg5EFtxWZAvqFfyxFDWgrCd3YZzhA3SSKbe7urcmnNVBF8xQ93t",
  "key10": "4c3cmY1s6hv8YNvMHSfaNMiUB6vFYjFeTXNL2SR4UQfzSVpR2WzVr4AphBgo27AcNjcBKJZWzyfTnztVUQyeADVc",
  "key11": "2YN7b5NtjQUGEb3oUZkfxLuSva9ivkKjzFmeSjN9PdyuUpLTAQKcqVBoMG26o8bpV2ZV9DQbSeThh1ZfYhZjLYwV",
  "key12": "4HftUcrBJ6MV7HbCNj9a8CSZw8bGJSfwPmLZpqFHs7u6GNyWM4YbedsG8Wmj3sLYSqdY29xiBouJmDM33mEb5yn4",
  "key13": "2z4tKb4PdnXJLxYEqAowwJMEdYQuLMo7dGs4EioRQAdLwBCGMyJ41N2tum3nESYHjZXeEqCqtVjaQm4E9QgD9zTr",
  "key14": "5ch6KbjhZDhFtJivAFDKBYKAhTAjTfvUSbCsWraPGjLydj1ZPY5cWVMqvr98qG1HHBXdF6wXURjZxYkstss17qfV",
  "key15": "5JUgYmAWt3aEXobBtY7mQhoPkJm6rp52MnFEy8o5VXBgoKkwnNTY9UXJnX5LJRjMmC5pP6QSZwg1SVGt9jLqLJ4A",
  "key16": "63cYrUJn1Z3Lo8pNQ5XqJ21Eo4yTWb3eGAmQ6NX6ioixC3DheiDTBmNEdv8dWXS5iMbhpgrHScacKyDd4eARUKfu",
  "key17": "62Ps9amUFai53xfZgM8WixsJsid3z6e9iGt4LQia9zovVwtMk8Yao94rLPhg5TpMwiPx9oXwVrPBBXGxDTxWk1LZ",
  "key18": "41tHTj8LYDU7e8ydxDZ2wzJa6LPohoPDk1Xsi6kzTZ7qND3H9D6bD4E9jTnrsj6dQemPrJ6v1iK5wNtjL1UQKH9W",
  "key19": "3byYXZvgbjdF1pcNhuRLeT7MZLbUZzDCqFsNJiz4NL7U5gHFAtC8t2MAHVki8sLcjDS88jbxq54zFbQN2pa3Srca",
  "key20": "WX15UHw1nbjvvcV1DmWo1fM4Z7h8Da2KxsBjUB3h7qMJqgXqgX9gsNk5LA3de5EjjpU8aSxKybcNo3N8WQRcK1s",
  "key21": "u3coEQdHNs2CTP5xD23sRRB1EEmcK7Gk1PD56QmsKRg4SdpEHd9scDzo6y8zfyF54ngxuVTPbtKAqcH1nsjqWpj",
  "key22": "51staDyCxLQCg9witwoCzXoMZBYftFpZ3aKm735sABSmDT24aB11HZuUmxPKM8gSv2yVV8peiYrecn6UZpwN163r",
  "key23": "iXxDFUfxdsvxhU8toV2z1gH4u2JycDuXAMxuhCoxcNnee6CLTQHbHRSasCBFfZSBTnYGRPiSRKWsmCKEj56WVwT",
  "key24": "4PbUVzPhAUUpKBFRPpViYggu1ryfPrknFS4azW3eUFFTeu8nJL8rcdB879wzdbodxpX34TyigiCAJ84734CCt2ok",
  "key25": "2Bqkxvzg6jT9ERPoUTDa3kioY7KxxBTtAjuYgi6xmnDAn6X7QcXT8FBFakomKJjvWWGJ2uJcbozhyxvYvRBrdK5S",
  "key26": "6pbBN1Zf9HiW5J2LETUGAKwDqFLxX25dJ9gyjSPv84SLdorcfuv1THy88FUwP6jRfc9C4tvHF7M9s1PSWBseGGu",
  "key27": "5jQ1PS48RsEuso5d56kCz2aCLSmYKabzTRvRRcc2CDUurZtsWMT99CSWMtCF3aL4nquqYrRknCGVi2P2yZYXfysc",
  "key28": "65qwUAa25ESEr5438qxBMqVN6viQXVtQisknJ47yqFAZpkc8GGbD8h5W5V3wP7aZkH1NDJw6QS9FqEzWUCeLanxb",
  "key29": "o3am351QXq1gWRfkE1xErB7BLdCiBg3AmLsYZZNSZCSyRsfEqcajegtWFAHoqpbKRV81dh18Gv5kGitSkyoe5YJ",
  "key30": "5vjc1J3QYdwRDJHGbHwpu6hf9VR7tixxjj4D4aF5jkHSkdALYxLHokVLia9gdc9ymXThRBAy3SUHwaEUqvfgrhFq",
  "key31": "5aWst6Yhg6TzTX15zFrNnbQKhC1pfv5ePFk9jweLaG5ReCRcF8EaahSSMMXtneN7ATW4sB28vr1wWHP3KkhFh3ef",
  "key32": "7YJ5c6yZP9um3scFDGQYmmKkundSeXvNkMuNtNch8sqgWw2y4Y2EciWG5tVuQSYFbo93pSw6Pn8rcek1Ktzj8b8",
  "key33": "5U3CcdY6KEohe6JjM2cfoUtY8KTnvWeWjPyGwiS3T4PqE1painJdFnTfvPmTyaBzFHGeoasXWz1ieFFD3jPkyD2R",
  "key34": "47jrS5qyZLaSEcsApnyL3zsvu2TBC8d8LwTj5z5gUHTzc3BPag2U45U2RBp4FhgEzgNCNX5s1dRVRgxE5z2NJ1tk",
  "key35": "cnAzhHHYpZjEzyG5NMkKAhomWRNFsSTtJhEFrDsiGyGLCwHsww8MTTm7NoFrPBxbufVMu6dqev5dEz7TimjRxSF",
  "key36": "63PHPGno5hqoauo8ohQnfaoQKPfRDsVZV9B3XN4CcqpN34eRvFR21HUoebmsTUj13ws4p6k321zKU3vg7ZnDSuan",
  "key37": "5wzXxmdfjiuaRkSc182dDUrXQr5wgVuVtRrPy1fHVkbDtWotKKTpwcvp6wGqWdYU896syADi7F4sr2uZm6XnFGt6",
  "key38": "2FxreWtot2bmxySEYPRUrBg82UZtqp9Rk6jrT8ZAt9S6fZZENm5bK7MkM5o1bYTxSpikQSSrQryTm1tbS5qCeK3W",
  "key39": "2N6gVzgxSxKVwfmD8EecDyF3v3VQQBGSSpU4Nbbms8jdMdCc2mN7ALnKJu46sJgiyAR47vz2YD6Bb3A3BSu5qb2y",
  "key40": "5X6tRgkMbqNXFvsZbeUN2FYaajyaGGas1A4EDKkDoGVhPmJQam55UD5wDufrFQHUzmT99ar4CY4JVLRfBmj8n2L9",
  "key41": "3DGYsTrgvcba4bfZZ9Zdi17ktSy99nv2PmeqSjk48oE8BPqCpMuvqTp9cEtu8JV9vvNkHLPq2teA7MKAEzpMhBmF",
  "key42": "566BP2MuvwPzYXDLk8UL9qmUtdM52XpkhBhvwae9U2TVfRZQPk1QabPBkxZCiTwEHYXZRzxTq1jQ8FWKJZaJF5U",
  "key43": "5rcY1R365kSwrQqN2G2cs9DAwnNEnGSEGR9E7BGYouBJ2nNmhMPXBvUmWvapQCRLMQiv7pQwEFaGXZg6oqYXSVPN",
  "key44": "4xXrqhDPBUHPAbeDGk62mU4bBqjHsBPXuWjf9YWY1L7icTufND3CD4Rjnfrjkk1TkauHsFP2LKJ1KrVXc318JJ41",
  "key45": "rRVzfb94NZJN5gMUpzkokp868Kx7QNiYRb5EFUt3gSWTWnSeJccePvNX6abq1pzDKAS5M1pWULciaanh2cZGAvu",
  "key46": "BniQZV737qy9pkw7PXBjzAyWV9Qnz2cFVbjthxtVidBfypM6rCRbeVWgvhksg382Uyz29TmqorEPxcVEcz5ax8A",
  "key47": "FrM4bWvckQ824Wt2n3J7Ni39Buu4aRvYJ8o8nnsKkRGmppVuWcU3qdndntEWyW7jb4inYFb6sWTNs4ch5xoGB1D"
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
