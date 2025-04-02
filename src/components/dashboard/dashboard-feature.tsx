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
    "4rzSz1uHmRiFfRQ2uYSchyYS369zu46occ5rhzvwxBGPSEHVna2UyPsvedbrZUxDhzt5RUTKtwhCaLhw1FpVZyb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBvWqMbXiApVKcNK5xBSRYG6UuJMGMYNFme3vU7PARs4FvMdeTMwjKDBxHKWogXScEvEx33SqEcduh4m9BkZK6r",
  "key1": "54Jm4eMeSy8jkniR6WCrXRfdvwKjuEMk4PKCSPnubuWrv5tURAL2cUpZjQZYRL92D54QVM25h2esGfZeco36EiBA",
  "key2": "2BLFsWrac9PGfaVjb4UeX39rJ4VqP2Rd5p28fTm6doAYPNiYidoGkYrPnXvJ3PXPTAp8hJe6CM3S1ergbL1oVU9d",
  "key3": "4LhQFxTRbFnNbxwGgG19QMWAqXp1J7EsYtnf7NXwDVukVbtqhgkAgDjsQsDDTrCdrRJbRS35Tz9af49M2TY6CCb6",
  "key4": "4T4DCV3utND8Z3d2pmcsPbYQZtsYgcnkhoLGC3Ausqfid7MpgKt2z25EiQGGCR4iax7KWyeTut6bvYuRYY2irS3z",
  "key5": "3Njfn5KZiBZr9S5oC84zBTwe3waxZ95wo45r17bueMknBqd8T42Jq8uGpCAhY59ybjVyXi2B1RmyBK8T58fTjVL5",
  "key6": "2nkfiXvnCUKjAJBpaSyamC3e1WZYBMT1SDzruZERw1mDh4G9QsfpUjYGkeDj7rm52tcPrfn9Bdt6W8mUYGFb4jRq",
  "key7": "5YjZR3qu1pk65Ume9E33b4Pzwrdn1q7ipmyuogf6ouzLHnQRiboz68dQmosp2tJB8ueuH41SgjXcnG6tAnQg45Zb",
  "key8": "44yTvmRTxZCXRJKEqYcZR8vVGQWNCatviFQcEM2FW6jdptQYeSSBAmo6qdoYXEAcoNm2P7bTds7UnF99c1ZfJZ7t",
  "key9": "5Y91qouZauanF3nZqg7ppsY4FTiZ6RxBdECf3wgZHoMosmK82BakwG3Nq6JjokkHCL3VEBU2rdbcGNFFD2ao8p4b",
  "key10": "4puwiUXvsHuxtAYat2mQn8YzvY9FStreBBd9Z3QrPoqfW7vkjp8ptfYZjJfXn8rUzFMv8tE94vfC9VD9PiJAViAe",
  "key11": "581azGmdxmP8tE2qSBYRZms2TsgQUM6zEPRPE2cotLFxvqa7y1BkX6nbXbBH67fUjjQSKetGJxJw1Ay89Qj8J3QS",
  "key12": "5eh5pShZ5nfkdGW8sq5Dd9819JaBoQ2ASQ1Hh3pWvtw34tfF5mgFTFCgXq6NCJ96HWxY1F8988484Guc8EKWuLQk",
  "key13": "235oLQTo1jxKkjSuGNJP13TKSRFF5yEaYN7tJQyz2rASWs1GweroK2c99pqSFGS2RJUSV7Zp1gRoCaYMvuLkyTqU",
  "key14": "4SGDyGEbZEQFf1r4xk7H29hbgeKvaE4TwP6xDeqBNjPoACgr7AzzsYmFk3Rrhp9wSyHDJZ4QXi2NYScmovrjLjFH",
  "key15": "4ynoKY9qQbfiAuyR2UMwX8c17RW1vSqpqT6W2uVkNbFL6X2SGHE9bXd6qWxryMj5d7JqkH6XFWMXRmf7uW9gT7TG",
  "key16": "3StUjXFnm9pWRPhkM45RDFH5XFg64o9SQdSqbJ8AubBqwsL723LWHtXRjVY9haXYUEqzmHWQTFJf7riVxGgLRpr4",
  "key17": "rbrjkPAKfLSwnYPmtsWrtvFeycaqSUuiMH7dx5nYLZTPSn4UMs28SUNg7oKw7oATXoDDyUvtGJEjGvCXhKhchMC",
  "key18": "2VX9YjnEshkuE2gHCuKLaCeoeJdkiRBhMhdQsVqcsePxTkkCD5n1oRVFAQsWRFGeeBJXws63o8vNeqtuTsDez9GG",
  "key19": "61iFk3CT4iwkvetRXQtFwbG11FDuyxHwA9yK2867g4cA4o6JUrfka28wrVNNoHZhPgNpi2iQR22EuWWUaopckxEy",
  "key20": "kEJybb83WCbwwcP1grHqdjufWMf1GSGvCTa5wCmuC7MX2FXfzxuFg7wMJWJsmWXoAg2Ec3M4EwbdVhbXSt8FThr",
  "key21": "2Qix8b3nwXGmiGnMMEBURqou82TMS7JcLroRiJPvAwdTjVVhh3duDKNQzRV7HkHh7LJ2xaKgngT56BzhrWZk9jg8",
  "key22": "5u1JyVc5HoPYzEmdAR13u8XmmfEoMEnvTCrCdkDXzuDDCqcjrJhEcxdY4w2cMdfZGN4Kr63y7DASkRXpg6kpGbW7",
  "key23": "3X7FA111ShEyvx9PTYpVWoRj4cRxyAgGwtsXitU335fKetRjKDdhaXFywWHbjemXP97pARidV6SG8Fi985mQbTnU",
  "key24": "42JY92gKYB2kEsEvvmmeLEwxYd9UuoRdpZrtCbtj2pdkiH1xRGVs2SxQJskNdwbL1Txx4DMwXhd9x9Bzbzm2LAs9",
  "key25": "md9Rz7XJr3W45DuW7WqvgUrzkBrAp56dR6nV4ARPqiQSRWjzVyj2399AFsA34VhjRppVyq94GdBijQgpHUr68SP",
  "key26": "3juraN1AvtTp2Sz9g614YJkCVfCE3j4PHP4SzeZFS7frjf2Tb76y9SFJvpShexLQVBQgdhHiEmDUAhouKpYDmJYD"
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
