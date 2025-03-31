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
    "2B2K7paQgxgA5eRDcz2vH7miTiYUL4WvCNkC7xyu5PBpy7sidEXVxdirNG584UU1ACzTKMS8qUR6gJXWcvSZfVdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeVMHHj91zR7ynUr3xJTyFp9TqqAr2y8WKfFBPPXBCJVKJ5GoUExBk9wtY3gLXYwTT9Qagh7cMHAHmncUavn56i",
  "key1": "2JSoovRfSVhqxxthxCD52CuPTkvu3979PKirk5M8GXxXXQAVhMz86enUug45QLjX4XBuxh8hsEMpgVg88sDdfY28",
  "key2": "4BGoCWjchPAigj6oAGqAg2ymuDnvV5kvah3jssr3A313d5K9NS7G2jWN2PhkpdsasTgqy5khfUEg4DEUhb1jHki3",
  "key3": "5W5yvQrZUemZJr6hMJgsCyNhBS5afUWXhyXsdYGJVqRKPeeuNqtCgTQT5NdPsYhJ6zD37neqithi3CtLegGdvUzR",
  "key4": "Vgb5y2EMsjE9RVyL5LxJQSNNKDcmoSPv5opeeseYw8kK2jF6BJhCG52PoGkhw6bMrdVS1eWZbvFTkYFBnPsaKWb",
  "key5": "5F8wTAywjMkHcnRspd9jUEy4gHLLpg7aTQfwYnyBtXYQQLccphMSJ1cbV887VZQzarVmVzYdVKdA8d7Hiu9oSKGp",
  "key6": "3NSmHJjRYKnSSqfJgJHY9EyLoEb2dr18QBotqTYMbzhSRN15LdHkmVq8dwDdxh2U9uji3vHq3JRbogArVe7QpYPh",
  "key7": "4hYiFyr6GJNX59LdJ7NC1cBdeGkDzHrYUWxanSZeaH5FZ1pzoN6UzkfqWEjVH35bGkSkEnbzZQUQ95kJGD56W83v",
  "key8": "56Jtwhdyyi1H9v4XjgAEtie5CMhYgrCVMzarSfVVLT1XwqsWUa6Q3fC8AZcVKu328pxDrXQJAQPayJHFyJV8MDBU",
  "key9": "2G1wUQ6EudCtzdGduTjvracP3thWHvJkMMPuEnEvCWpAd8AgBW7w2buYK6erWByE5Km3Ph2cx5RoGxgi7umxmkNG",
  "key10": "2PuwZrjir7ZBVg9EHgXoXrDcj8BMzRKQz2CP1e78KxCd7aRmRBxY1SxtmYVY6CpX81aQyKBJt9dyXVAHNZNeERXz",
  "key11": "2zhteBtvo3n4YZLNgQjGJrGbeVsvQooaLHDE3wekQjCXtCYM9i3KDiGV6EMgYt5Te1JcQrvfqcEm5cP6Dhz4RPW9",
  "key12": "3pfU1K9GaRXAE3kXBoBHodo6zmskdnjrPoeh3Mb4zZV2B2jz8NvgPTn1EKUnHFFwEB61xeghSP4b2DTfbQnYh99k",
  "key13": "37U863qHYz3H78j2KAVgFoudQdVDMpfuPBEzp1L2b2EpTyBgocWrWkjyiJJd3Z5utvefsfaC7deWxoRp3nKXRtmo",
  "key14": "5VyX5oZnuh4s8GEAtCofh9NAGivh4uujsirsquuk4U1BY5AupjMwFMtwsXv5ozCeVezR5uaa2D62m4DDLCJ8kshB",
  "key15": "679cdeyWopFKJSDZHUmctiQuRRRdKfBPu1ku7CKfktNJYrSqrd2iP9NiP843D1BTev2hgr5vUnh1KSVrtpHwrPhK",
  "key16": "sVXpqtdZCzvqQGKUPjrPk79H4haCNvodYcSHtB8RVtzXnm7QZPa3Qxg6QALV5tvNc4yUqcVR5zuc1DJLQEBYBuP",
  "key17": "2M9tgmUBDWwoDSanhPn4mhD1NpsQVfVemd82oeNtgwfMDDFbPUxSPgBp8jsF8cJW1FfWLZFfU1R4gpTPhnnTMmWy",
  "key18": "YaMT49oSJWYMR8cYqpVsQ19jdMdKtqpaYYXoZY2PvEt7dCX8G2EH2PsMwnhj5Ahj9EaskemY8nSfBz7HBKmgBM1",
  "key19": "3id4sD9WbmwLpjC4bXmXfEj7VCBN59anpL8KtNogJ7XbNirpbu21JwU5DLVhnVeqyhc1jDHDm8DRSXVPzLqdTteY",
  "key20": "61aaXdYPLhyzmG5cWvrWQyAKxnMw2rm3BnAvhRXsarRRmh7DfRBiiyXgMhA6rtM6BRutetNmXtYUYRHad4Wba5C1",
  "key21": "5sWm1wmQFSKEvjkcL8Jtv52wndZLjDPwHk7daFjRtM9u4eQEKpw9rzqMV1pe3HaMcaji9ZgTAGU5yfhmFvmvnRuh",
  "key22": "GEsM9VHtxVCHABVYHbxh3q4N5burwXXZca23e2jcwQVniug7V2HPqGTTJt3GwY4K1WKQ2ffJqDsTSWvs9yDdtJq",
  "key23": "3Vudji2MRNP2wWNWJAtKECUekriHhCbHpkeBAvvWcfaBtdDuUGFdZUX9agPoCHTy2dn5UUh5CMipxbM49sib8JTn",
  "key24": "4HX9Wc8yJ9XtHdSd1U3zBQnjJ8yEnaQZcnq7TycDRuCZVjeg39CBWTH4c8NoALvRtrEZz77wdBXcgRMxLX3PWNdp",
  "key25": "31MkjB6Vogt1jFc5YR1kjsVK8utt8GYVmhifEEVhuYmjU3HPFuMRSQoSDR5WDzox7r42DmHppowjV8dffps3oemW",
  "key26": "3EJK5Bx5qwzQhtjr2eaz7uv8pvKzbYmuaf2YBkpafXGrMowVpiD8dECL1zgcLSHRRX1JnLqb1nJxh6t6VZ2f9zCN",
  "key27": "4kzAkAAphinjLDYScdf1q2EYgh2KrBF5z2dVTiQd69Ze4msiSqMUW9jSK1dhmtpGp67NgSUZnMp3kvLzyUNXmw8p",
  "key28": "9H4TX2YQPoFUL5rAokmQ9zXrkvY1xfXWUVKf62u3KkNLMA3oTRmHMwcgup5bSgPf2mzZLLEfkHinN2taTYxHHRh",
  "key29": "3DziTqUQypUVfvpRrY7GtBcVhLoGuVvQ487u1VLsiBAESoqzr9TZKeStNuAzdHvFZ9XL43Lsi6ca6z5pLmcvAVun",
  "key30": "3d49VpXrzAydSKSQphsFo8o2qMhTCEzjCYLu48gztVecMFbbeaDVK2tWiiJMvse1rBGaarPxFiS1QnatE5xW92H3",
  "key31": "4Pk8H5ABGVETcbXUnpi1Gpk1FuU9uiWxndxvhcS6TNThcRFo6EkFRtREJJAid93fTEw9UiVsDZ7zKMQE6xRdxwXR",
  "key32": "2CAWYNNMPXmk7sWjkRKC5XuLyBFTaFYdEC62SC3aPD53A8zK4JQR2TeGzVXLyzGXNjkpjxie8VmpCjQVXDEf6nPR",
  "key33": "4JQDpCMnNnPqNZGZQHwEHYCyiYDG2reai7f3cBtYpfaopGdHYxeknbzdZphXFbWhn4V2MpagszmPifsATsfzDuur",
  "key34": "rJxrTYY8o2eHU3mQVLeT419GdWw5NgHJgGnz1hdtMvdteeouaTMWXBr6jw2TgdhYkKqfSTQzvRuZJvhtohum1NE",
  "key35": "3LD3MaMPvpsU188RFbWPx3U1jxBVNQKqz1mKj3hS3GmVf4nbUMpKH66hrF2ZUrwBEs8S2r8g6YpQUg54VX5rTgpL",
  "key36": "44QRXT1uhAKgAsKWmqXxbWrp8kxGKFJsnv1PSDeWsy4CWHvNmuwcxkv7DfAJjSd6LPsPeXFDDXgYPVHdqrqL7d3x",
  "key37": "4uAQQiRxg7WKGmtAJjUvt5FqRZvB8KsT6G1bUCQh9fbgUiFCWnPEr7oxYXUfLLNYJ7ggoYTEKKrWpi4VVu4ok2Nv",
  "key38": "4eafojrymPsEYnayj1ouggGSbbf6C6xwDeH3vzxNhYJZXRwmKABCnBYzXQstSGCfVMfFwuP8yF8CArNa79grCTBK",
  "key39": "3w4gVtFfnQtcrP8RL3LVqi3VazsFhwuvmgLPdEGPW3B4EDeq9xEKMm3BDPTpjkKJftkeJnxGoi4C8Gf2JuvoR3Ev",
  "key40": "41SvuCo4vFETnxpLBomEW6wEojnyfTuzdcfsY4Qh7yZJjkuSF879k7Rkmi1Mrh3Jr3MH3NyfQBBBTPW9dDANkJzw",
  "key41": "3gKkszBWDNv1Va82nZ3a7FWYAgB2LUDcaqPDuKgQJE6mPUDhuMgzFTUFXU8b73CWLx6Pvc9QGNcTP5WEEVV4Msef",
  "key42": "4aiLb9Wx3YcNT2phMhGMWGayFLPMoBLAR5PtFN9ScWrZsm4cJ64YTQsHizSFbaJdECS6m9iPvR6DqkCRpy3HQdoR",
  "key43": "2NEoHygEbup8mJB5c72B373xDqRJRKyy7Y3YAhfWridEKzG4CQ4HyDE2fHsrgvAjn7HtBWc8G3jiwbJTeo88JukH",
  "key44": "WTaBcf12mhzcQ1tLmg2pLaKkJbeMr42D7yj7ssL9m7zCBYvCE3U7LcU7cnRGZAh58nnqjQAfw7vZthQDDaMfDwx"
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
