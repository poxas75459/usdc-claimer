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
    "5J6uTa6rzi9L4nxmFCExnxikN3wD913xd6VxiiR3Lx8wfr1aU4rZbirwvZqtWMYMqbGtUw7hQSHAr1yMaVkvuJCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xisnku2eAJPXXfbcu6Lj7cugAsr1FrSkDm7MADzacWECZ6hgUKaD4dera4ZvfvUgcAqoDhNywfTkBGv5AUiDsvv",
  "key1": "2PkqFz1bmCMt8yyNFKnQxE1i66E2uzEo7qMJ2TcojvH96Dpp2KC3g21QkGfnQ5pHxHXm8GdBZNKJQhSKwhkqh3K1",
  "key2": "5FsW2S6cNZZ8TDtVHjBXF9hXngu45WBSGcsTfmFcWuEkCcXm1Gvm93vf7utppDSvdMeT8d4LYyQNgeVyzKEMeCT3",
  "key3": "KoSPiqj7n1Dz2i4hFsFuDreraeQSyChqGf7gAAz8kf9MbkRdtCargSuyVqy2mjr7HVsuP2L6LEvr4ZpdHMVACb9",
  "key4": "2KFrxhW7cjZBeVZmJFmcgrpxfN6LYdn9ar9RVfkwpFk1RYWf4SNdTRN6ExBZke1ZJKonkZKBsTA1fH1PKv9oovMu",
  "key5": "4hngNJudxU2MBWmTScc3XN2GbAJ6Dfz3qm8bJVTNAbECpoPswmS8x6mpNBwzy2hwq7XLuPWX4ggb3hZGac6Z1nj1",
  "key6": "5kJ2jedYt4Xs7Xxi2e3VMWZoWf4W2ENBLSbtiBcBKjyi12RDRhcr795m1yzWXDCwGinfJbs3N4u87HaN387wQLnn",
  "key7": "BmfaopRWTCU2Y4GUQ9Ej66tHtvz87VbUNcWhmr8fM1fPA7KMvEvgZcXNk2G3q5CVhvKC759g1GGJKq6UHhgHshn",
  "key8": "biRcxLYdZNKtzcMmLJNFyQ4w7VJTNvw8Pfjhovn4KrSkoNpPqxnBjza8ChjBBjCXioeG7DfzP28npeHvJFMYL6u",
  "key9": "dVB4fReLXuo25LtLx9Di8nj8sr6sKujoCsxChsQ3MEKnAh5CUPckQpYXdreb8ZNyhoY8a4zFvbmLTjrPRYQToRb",
  "key10": "3YvF8u2c2SsrxkBF7NoCvXxXQ6PDae2w2KrNSAaRuGSDqiMFm2MQyQMNhAhWDkmpC4YRY1GSQGKEiyX1VpTRjynN",
  "key11": "5oDqwxJA9MJBcViXqgFQgULkFsBGLSwHdiDU9vkJAaMbcaueePgw1yWuCNP7337fdnETjdMqr8FntQEyCrL56m6c",
  "key12": "5YxH8LTk29p1Zcmuw1Z6kQ4wD9ZPmKBWxbiRdE6yE68BjoF5Gt28nFtMXGcDPppMBzSAKy88MjPTLsG19pGy5VW4",
  "key13": "aaNvhHUttaWPNELC1c6BdWVLep6wJv2D6dF8xKi5j3q1xqxXediPtMeNjXhJ6AFkbaJCR32EsYmfkXFoXBAyMfJ",
  "key14": "FYfzG3wGHKiMnLCFxX1RVWeaZw19XczHp73QYZadQbSUTmwpeWhJSgApLLaC23zp5y9N7osdRTmCgiRm1aFW9qQ",
  "key15": "65Wr5VSRmdenjSM7V68dJLoDZH8U7VH93qRPu8DFP48FEwtugWxSwGR648gRYvrtsTbLrS5URte461xewWmi5JBr",
  "key16": "5Y7Jnx4VuzmMcddmcX3JrYLoSB89B7Nm1DcRhacx7pADc6q5EMq6aBqKcqbcZ6WNfjN5A8mSEE3pswEREmeo423L",
  "key17": "45meMRiVsfUkjEdmVzVNMoBB6KZj5YTPkSZM97BFvv5i5Yht1qT5Ff2PUzQWWvh3D1czTMXHRrz8vvtqQ2Vqe17g",
  "key18": "3qqwZgwce1kwkZkQRKhfah3YXcuysvZroNDtTbwqxj19P9mMBcqzKtVsTaRo1QMVSGHkfuM7ozyqzEdx5fw4H1UU",
  "key19": "3zDSUkA9bcQM44BDFLkEabvACjAA3cEk4UcBvQJ1f9qEqGCwf4ftjCSe5Uz2fmroJR6FtW3RisTAphtWQMtHiBx6",
  "key20": "5V3vSoevbZ4DFZ1sGi8F5t5mhS7cr7pr9a9s93ZN1k4zPkiexvYhW8Dy2BLQ1ExsUdFDnAgp7DsrxWBsjetcSVLB",
  "key21": "3NzpUe6ThKh3ishQYquzUMyKkypsbk74TkVCYUPwrirgLqfyYCvJD8vszPVjbKHJwAi1Ntxx5Y64B8ZLLQGiRHej",
  "key22": "3scSAuwaeTfTQHH8iBEUzjvsSb4Pa1iCvS32PvrcR7TU9hnbGDDMRr8Un68YBtJvfxehf1TyhsDcSR9Pr1XeypmN",
  "key23": "3dVtAopjcE9E85zomd7CWNzxsX8y3MY2gFnFyYEo4v4sqX3DEgMk9PuvTBcaAMobD8zWL4GMNMRNxpr2rccCTtSe",
  "key24": "4Jzro514U6zqebFxte8M9BNJ2vZTk4882QSZPXSXcU8qg5VVuuqpsX2csS2rYe9n9wxYvNVynmDR9hxJHRUZqa1R",
  "key25": "TtD6Zz2DqaPSQWPEpBPMDrPhqNzgkQq7Tpghju82GzCNdZrxi9SVKwAAjWBPcpdwQNi48wHQvt7VvdbeMfjBr2z",
  "key26": "4kPB7gBe1Q9BvPVej8AHw62i3xHNLDXHgdg2tcANwN12es5dQdV4yaf47kq37qKQAdmnFcCfPiEQpNkkzPti8scd",
  "key27": "5uLhjeaFQC4JdyVPW7yp6dbRVSExFs54GeuqZtZXnqAUscMUfgqnDDJzZGGRNVCWgEzhhk7oafd8pfDgDHuceQYu",
  "key28": "3DRvZHR8RuEcefUjidbPeE6LyM769QmrKQHjneueLqNVxGt5itkCGU4PCkeoFyg8Ac6Rti24JtP4nZ13tmdoV6jS",
  "key29": "647hU58gKNKHPvhjjHYbaMdxfQtAgbN3KKiQJjvVZ8V6R2p4WTeqwAiBTBY6vXNi6RvapS3i2fPVTPs5zqixkXwt",
  "key30": "asUKSni995Ae4HE5oUpdmfVCpbx2aiMwXops7EGJkigw8kZPm86bVSvJrW8HfXjrwfjAQhBEsEhKhCbM2eDfg6W",
  "key31": "23iTHYXEzDbfVHqkN7GJRsLP5w6cMTJDZPFPKNtJCPwQ6UPvBVVoZhTwiDgEVbMz1awR2V3EeB57JGthQStZ7HGa",
  "key32": "2yJj2KkGLgUk4M2DsUNsMEVt6GHSk86drLhwwyaheMgqbMpAaGoyVsyv6yd6NpDNiiTDkwz58HjGAU2U396KxwoY",
  "key33": "3okxt4wqGR1n3FAwF5y1o3goDedmAoDmzUwYBXtB4vqreppCvsFGPPqZwF1NF2uDBH3Wwmi8e3QxnpjYRs8dP54P",
  "key34": "c24jKap9dEdXwqxV9HqtedBKSbRyxhTT56wdzi98Gk1URcCytpy86AGdq2TQiiGn8qEn22L33TYSW6muQC6FmAy",
  "key35": "4voEKynjiQTLVHNYin2iw72evYxW5Gx9tyPJoR86DD5vuRHQ9w6CdnbY3NtCMN3smXSyE6GeTEKcbw12Y5ocwgTf",
  "key36": "4Cf7BiXV2UoWPkgMfXHrHNtB7eA3zchN2fBkDF1opsKEWLQpEBMKuNmYYhWe7M8XNGk4RWR5CiX8eNU26z7fPsog",
  "key37": "4roNMT64tRRwCkBkGk1eHjL8wg3b2qWBT8fBh1yqiYkv6mG42koZVRW3RbJ2GUKPUo3wQTSB4acJLXyEa7fD4CJg",
  "key38": "4wT92GWTPSFYRFL8CZViyjLHS7NgjnGBuSv6BTaWSHWrYsEXNq7wJ6MUNCoGpWDxkCqgZNtYdT3Mr94qYHbekgHe",
  "key39": "3jE7C2KAiULM6KgQuo7Kcgm1yhLn94Eo26NaHou1fukvTiJ6V2XXaGpiLkEkAJLCah1xeGKr1uhx5vVyQTtSEuqA",
  "key40": "652fYZVhin1SVh2tVRSLbw98yiyBwPBDQZdEK4y8ZFt4yXEEFCCSi5taNTzJPGpJDp5ZTMkxfKEgPTU4KSNZvHTE",
  "key41": "5Mds51vteTAY71gKjmgy5LymkcdhYQVz65mNvqUqcosaU3oWgBpbANQTDKKjzM8pXzDqV4bqkune6QULRF8dxv1q"
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
