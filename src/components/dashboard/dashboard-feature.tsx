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
    "2fMbGMgyPe6p2tzeH1JaJkTfQfmVfkYumQAT9Wam2ouaKnuLNQNvBh76Ryv3rXNLRBsN2fu86ngmohqKnBjArS69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cByz4FqqnS2K8Qy1KBVj7YhbEy8QCeT8reznFiLKUVEu3BHvDfNuy5Qknjhj27fmytpw5M45e5Ccu9a9qaXRNoo",
  "key1": "4vCk12EKYg9aqSaw2ntV5eAdfQBgRdVzmCTYphqV5tf2vYFVG2KE5FRU3oeChWP2e7aTsfmmPcCk3WEd1WMycKU3",
  "key2": "5rsHg26uMBCFpfwXF8TWwiUw2a8nJJdpgELofZSvPkdpcidG6wvPEt26FboCjJiGrhcvLNQoRVpr6TzvhhRhENAe",
  "key3": "jRL5GgzzxuNgxJya3m4QgCAtH21KXehFEdjZXYy3qbsxkkGK6D97jWf8bGnAPoTo2EfykmGGqDc9d2P5hrREVKF",
  "key4": "5rc9tvCnY9eUXX7c2jWzNaYuDr8uYGLwdXcpS8SHCZCbHaUymtzfkWpAphTGePnNhs3Ker3bzsvUfCjwXqkcrnmN",
  "key5": "3UrHCDWu95ukMBrQxuw2Tg4feocanjiwNih3p48edSKRmJdFNGEs9T6MBZRYraLHP5AGggJM2srykF4pqgLcChNy",
  "key6": "bUHgfess5F3kj1ZdeDEwn3XToFKnPGMHqctai84wT4wT8e6iAUR2Wr18qY3ihC7wh566GCnF2MrZJWGdBEgWxFY",
  "key7": "bGidXoPNbepRkeb8fPiyFoKeSMxxjC3vfLHJdc8TyhcM5WQBxwMNkoUFG8upytFCc2FS5a6pQBbBbqE9gZcZgZV",
  "key8": "3D7qbi3uPbVvFRmmFQtopnypUx7UaAFr2C4H3xkxKic5MPuqFPMAu4gPPtJa7r7FMMtPG4Fc9MQENGJmX3GfttN8",
  "key9": "2zZRUD7NuHYM7W2W4kUiXNkUSuunARZ7kzTvnVTnUSPt49i5cyCEvSXzqr3wZqRjpipRQ6ernzFL9axubPEoqoVX",
  "key10": "2CGMw656VEJcGSAreJtjVi4wG6wsbBFnK71wNEjb1B55jpwJhhDWtj96wwXSAEpkcanH5EYU6D39Yoni5Wg4nvEH",
  "key11": "zmVyimce5yQqq7dFJsf9HtsctWosUixBVG9HNkNB1Mvk54VDNN4iW9ocxkT1wcuj3q5dSChfTARv9oSE224vs9Q",
  "key12": "4m8sgnYG3RQAmfguRMPErrXcG7iQZMC8BXQ4rD3EcLFHpKoh3WSrtxw7KJjn6mL4VdKJhbyamiib9LMLNV7SSBXa",
  "key13": "4tDp7RR86r3nzPPnGJWytjQm7HD7XDi2Lj7e4TQ6sxLXTiE4CXYC1cgqQZEuEzv9LYWXqvAvihhHqY1sqiqPg2WL",
  "key14": "6x4J2eN3t3KesShLyQvi8nJb3QcEr8WJ4UZnLVchNZoMmirzzS9D2VUJNThALoUYHEArsQoZ2CCV92AG7YXprmq",
  "key15": "5bFicNCHXjJfRuHBaXD2ij8bedgco6jR7KEoKA8soofiKGDREEioCHSpHfk3Q55tSY88pbyn24KEk9X3qw9MjYfN",
  "key16": "56MiU3jLYK6fFavgkgV6RmtLKWNnFQn5J1yHACZuiewH7QRVSyrB6gtDEnjFQf6n87vxJMEVjC8Ytsd8UVJ8sLBF",
  "key17": "2ZhgoyLEZCkgYP6PbDe6kUzaN88xiz6qo4sg65yi2UC2kpsCLYTbwg8dEju78Jh1txzmcDLpN9PdJLxXDxeBWr2X",
  "key18": "aUkMxCvNxdfrVMg9NPceUAVqV7BQecRL17CGN3hbkR9EcvPV7zP4uEDJsNLrhn5xrSL4kSU9wfKwzUihJBLhQb6",
  "key19": "4GKzdhFWgS1axKFXegGsDcbx3rwgtuMHyjRnuDZL8xLcpYWj13j1VEtNDGnvKDgXCT8k5KrYZMeXyeRzoFzK7twJ",
  "key20": "4MnPW5rpSEYBnRtRjthkAJfE4JdbuxN2zHXzxk7xHMgipytYT7iNwWn8A8kzDc2qiNAnyp1FLYuT5J2fNRMEr253",
  "key21": "461xu7WFpi99WAoe2zRdphtvLAF9ykSAWNVPPBCA32UctDoPPJM441egyzcw2V7MVtFyxBStap8mhGdjnC7NLuKj",
  "key22": "21DnMKGATPMehNw8MPiQ15f3Ujmh9cRmLP8DScCRE4hPqNZSZxFEngz9r9NQnin7CYkYxmdJ8n2tDEnNTcgiFxHL",
  "key23": "5n5ezwRtkGpbxSozkAMTAzpsApd5Be4FkLvBqNn4XQD1enX4Frc64nnU5ufQFXEtLtCT8wuboHEeMjatkbzLpcQ8",
  "key24": "2bSmxJbXVE6xmyzCfL3GsU9xQVqcHMq6ZdbhuAK5WvDDmytQiLhzTg27duGPWwaJXC6HcZZGH7CJ1bprbmYsnXGH",
  "key25": "2gxMWu9x6sXFLP7dRK9g14HHCtzz7tVy55jX5QTPHtUoCfTFgm8iHrT7BGY7TYgLZ8U5Zgtz9nPnaUGQoKBCtgJZ",
  "key26": "24xdNs7yEGYHP8R6iQXmcKozMEpBMTjwm5gZaD11SpuTFPQUq1vT7ENVXfq26GgqeWsCEN3RzxiKVjxec1RQo7cs",
  "key27": "4PySDw4B6q7AQ1rYi6w2M6mBvZhp9SDJgVi9S3sk776JwD59bcH48HKknzNhyx3sNPWc9tDPNC8DArCLX2VHM1yx",
  "key28": "5JEc4NZeqyqEYtzXkt7TPAnNGhJeHtVhWp3RMnyfhFpF1cVKK2YtUr7TeAzRY5hJfV72QBVbh3T5jW1PCMKnwbdn",
  "key29": "2Tb6p7sUxWG6hyEp89rTzbULmrJdwAuAyZRaxQgjKhdz1VsqFRd6fWiR31KFYe6zep9erwPdWZfjNMzNW3RGyrVN",
  "key30": "5vSRUP4nPVFmRyuNaVJVP2nXt6zW7EHq5p2MsPaZvis9QEc3Vmd3t4i9V6utxzmFVPR72iL3EjVLUW31MM4bK8xV",
  "key31": "56UUa2tFw11EXUwF7uWVZcWHzLdHvF76eGziGhh1DDaPo3L23wqveGcAWmrxkMUcpoSY5Uo7Gvdp4j4FphEGu6b6",
  "key32": "nnceFwxvCD8119BN7CxYF9d6XDNzfW8BMF8D7rUz7KvJDCYtpi7HygEZZhiGYoJdkVbKCoQ4HsqhpEpBgWKoDRQ",
  "key33": "4MJCuxKRjiq6bpFzB9NzBiLkiVJcin9zVJHVuZnhcAq6kFZiKaebAAhor2mPrzQauQDD7wTv6W4SG9XuRn9fTSJh",
  "key34": "26vcJyDdKjYKGuXAGfCBKLGFvmjkrAgj4sr7Vz2Fc1hdeGvVDGbyXq7fy5fR5J884p2HQgSxC8xmmBoJ9UwBXNjd",
  "key35": "2HesaTWDaWFQc1wNJCpVQTjSAZwMsFMS91LcAYTU9GyV1YDfYpJUA56dRDxbnMytLaWnJWbKZnUFvTbxSEwQhrrA",
  "key36": "46EsXjXSXbxk2M5HXXZET9WtmAZE43F763waSocwFoanrY5YXkZK9ejDp2CasXtHp1nZvGireHUpeNKKAkKU9i6Y",
  "key37": "2V9rmJ9wQ9TCQQgvtVAeoWq3GftAYy9yLdmzhRBSxnA6DW1ivSYmhNpFRk8o2xMAHguW339ZnpssBrT5mSDzNgf9",
  "key38": "3Ua1n84kmC1XYzUkp1QqyPH6TBotzJd5XkgPRkBjY3KbMWoFo1fTjg3cw3zvbAGB4yfKNGGw91FbCQYb2HWS64GP",
  "key39": "2u5gyVJKSb5V6dd53HerCwFaak6VtVgyfmxMRKYwceNy1bKnggbtUAX2ztjbc9p92d9H3RwnVsLuno1XhnwD72q2",
  "key40": "2ZqQeuLrGuNKZRibmrjdt5VE7VNRrCob6M9czk85aQuQAY9Rc4uPMmWh3dLEgMq7iEQJk4CJnm7nAqFiRKPYrz4n",
  "key41": "TNa9qWKZ9Ds1GDN3Zxjb1FXuM9JrLKAHZjaHE6yxZXReH3sCMfgpvF5F9PEhwXvrppc5rxvxd3rUZ9auegT8PGv",
  "key42": "5VyxTQ8C4UaagZayYhZEZaHszuPSixju2PWJ5BEhGHuSdLxbeywYdnAePrgnBwQxJWZDrN5Cf4eLn5U6iGnjZ1qA",
  "key43": "2dbJoMa3D7hBonyxmNBLqZk97UdJH4NBvzbnETjefEY39yR1aJKCv7mZsTfs5oeranu6uEdD5v1tpP1M2osGCY9m"
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
