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
    "9V97PGvGHKAx5VXS9YdtnApYxX4uUgSPW7dPh9yAicq83k7aDzS8YTUVR7LSJH9dUiavdhLrqN5kkvp1mwvkc8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSRmpnR12BNQzu4qww5VDz1GV42uCt5PUH8NbAG244Ds9R8wExGz9h72bmDcLQGZeF3JS5YFNj8KruqioMfuhnV",
  "key1": "5ecosimeiWoxupm4JZCbgYXJ4TTmuwtZMd7d8zMsQaRAJxB2CX4JwsakZ5Cr9ukHQByxft2Uu8MMj2EVd7mWxMY5",
  "key2": "5gx13JaqnhLTXGFcDfb9wGgZ4nKYDA2By36ojBPoSUctqTZqsh675LxHmAmZrn2ju8anothtmDSdGP4aA7RpiAfz",
  "key3": "46AyXwsWXnHf9fh18TYnCku2MeifNEnzbnAJYRzxnXk4Soj5pytagnh2NwGnAk6bzVE4rPWDct5A57C1QhJfcdSk",
  "key4": "51f7d3435W3CzmBxPpUnTcK9PfSbz2XiALGf3bYZmUV6ghLQ5jKNt57D5a1EzMWc5s7jkBLxWWTWkrHBLGT2gA8c",
  "key5": "2FdRocgSv6A258qgaAJsnvefYuqGKFuFnzrRPBqTFfuM5MWLeTvjcinmTbvTt4rDUVkmc7vth3T8sQVmDfy9m3Ab",
  "key6": "4dRRwpcd2VYKPAVv2ZxPBL5RbN4YQz54CaMKCd8AFb23KDtenvHtvVuCHmZ4Md6didYefZJcSPz6LaqnmgbftDZc",
  "key7": "4Yq3dQXRhMX8e2MQj1b6NonPeuXam2HHhdHgh4H148d216m3ZeSvTbUDqqww2VEfkiiPYVqqbQrGFxGjT298tbck",
  "key8": "wmxnzsWiVi7wD1i68qdAYjUj5coRUBF9XR5oeHxtYJzxdH6nKnZ1TmnykpbZeEJtKvdi64i1sJsnQwDU7W25mCv",
  "key9": "5EJeetmAPdtxzMkmdZSoX5S8j1eBYHLtFTsxugHMSosktWDiQsGzELHrdZEsrmqUkmtGHJhm9hkqGtJ3onhcuwh4",
  "key10": "3YQVFysaLmvB6TzaecSPW1Rinw7MQtRzKotJwQ1mBKn9KETM9Qk6YbTqiEGU2Ze6Kxw4CfHCitYqmP7Xn94e625Z",
  "key11": "66Aqm82fBk1SjeeztyY8e1rw1zDrRkNH821WYZuoCUtnDcpw1A5GRdDhrtVpnv8mM6cqPwEDwgaKS3e1grEmXzes",
  "key12": "3mAEhx7oGmHPs9WxmfBWcvvFqTczSdPunPCSdTvVHZLJ5fyfyo5xYRjjKvcvB5cK67LvJfJa56NDzqmYh5Sz4WE5",
  "key13": "51CJZjkLirzNMcG4vioqiyiwytADZU851Krk24F9QMUhKHRqoMygbxMoJUapsZjipCdUP3KikhgXXZevHeVmno8o",
  "key14": "4XQn1Qbpnh1V8wbsbbuDD1jhLx244KcWx6vq5bPRYZLienCTcfXCT2iQU5B1cMu4xwTDGq8Kn2ef1YA3FtmCN9x8",
  "key15": "2SVR7y6vadUUg9QveyVivwAgzVhAZsf9dB13NHAHAWsR3UEfXpXZLDLSZZ5LLWDm9BsmrYLXYFvumQkwZqD5ErPY",
  "key16": "CDUy4KW5xgmUyCSWac3EVCEvSQQ3KUa1eX1meAjRq8jcdR1e6VCzbk9SXwMd12fgL9wtgnVwLMBdqMfEsG1YEoB",
  "key17": "3RXJXYsnQAkUZuV6uL1H8LghT3KWC7RNZ76JQacd6Mb9pPdUiipXQG6cFntm3baw1rDFumVKwLUjRHhjar4MS45L",
  "key18": "5jESes3cSKbviNkF4s6xCFb3BRiy1bP3km7BwcpV3izzQEbUjMPooKYAhDyLbYGvq6tBZX5nC4sZRgrHZxr4bL5W",
  "key19": "5S3FmTMfX9dLMamQwhsFsG4X8SvNZBapriLBTde1XZDsTkudisrNdbq4v3QaTV41X36TQAD9iJ3WtMoakQwaw3Rv",
  "key20": "5gB3vD4eqR2vynrj1LzsiyDL3krpamPjAAdAQXV2jfCv2UTJwqZKRyq5BfQqugkuKT8W6EwrkGuM2oya2AX1TzGc",
  "key21": "YxSxEo5eYCdt7PEKw4yScpxWpitf9ywNNDuY7RJVnBDY1V5v8iDYNhqHyfYsk8pncbXGenFRDDd8uYTC1RsudDn",
  "key22": "2myJiJBWFvjndmyt7vYEdCkt487pxNFgdbqJUw9cWPJUSKQVW7uAxeuTyRPPGpMYpRUoBZudsgFaGp2JecbNbk7h",
  "key23": "2evvAYE4r7s2pBQrPNgjRutiGMqT8idNaZtAeLA8zDG5eyeCE3qfVNYeq6982VrwdoGrZAxBN8GZghvuvcza1kHx",
  "key24": "27Wczxuk6TbacKprxjj8yDAaW3xDJLP5Fkq5RZpkbedXB782jApapmGi1RXoyixxDN4axdLpKj5maBpx8vS4mbgu",
  "key25": "38jX2a1mkonzd1Lya2SSM3HVSsdJgEBWG5WCuyNvCUwaDdxAY1iB8buE2hWdJYrqsdwm131s8HK75QWBNWXbfW15",
  "key26": "3V2J9t4ghwYvEv5KyQB466n6bK3JKUpos2dpkM5yYUKoYELCiCoLvJd1LLRehm8JpRfvmAwHNkvtpXYZpFrWKESa",
  "key27": "4QqB55Q3vBkgLsQYXEFukotG9WZmWh8zkVTZHHFL9LAyEY5j6jtPfUhLpPXENjPnziMCnHM55yWr341ijmxax1JF",
  "key28": "DH6jfg1M6UikY1oWtkVUc8jCfxUM7HgQo63BFCWEr9ETR68k5Qgcjowm8bJuPYczJPKzkKx5AGUQd22HeZsdbqz",
  "key29": "3nGtnoyfWH8di9BbTb9hqe34Sg92TZQUQtNGchS7uvvP8KCpPkPkXfdxzXxpLWmQnaNC5V8pCQ5otsKkVMP1wBoq"
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
