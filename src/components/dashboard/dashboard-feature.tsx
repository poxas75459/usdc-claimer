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
    "5E1WZ32rJWkUT9KFiQFkaSK6afb7LKMc9TfmJ9HPwekC2fpCjkhpzXqQFFcC62Jg6uptyMUF4iM9j2mrXbDzT2rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k3UQ6Q9wopUSo2Fp39fX4G3AUXAwj4o2LbLYw3UBKenzanxcXNAcnHpp5Sr7ZzsDoW9N5ghqZ9HbNc38krtT26L",
  "key1": "2Y2MHHePVgfpU52xJ7ms1gta4prJtqMofuS1HB721bxst4UD78azAuDXkuQ3BLLDLbZBJukUXTfiQYGNH5TVMvdm",
  "key2": "2CRCB23CpLPJuhPXVnWxTMo2EkVsRhX915ubCRSbhfgsvWwSBm1FhjM4dfTCKoPnjKoAsqbNwJxxxk2iiAh938WW",
  "key3": "4Qm61n9RR4bb4tY4Ph9v1JyHyQkzGe7svYm5J4a5zY3ATegDNxuGrKbEuoMrfgrMYfKPybTTjz2Ho7wPPdfbwmRL",
  "key4": "5KXj21jTQbxspumYeywvwkiZCpmdcbjfwAeavZfkoC6srPWfiLfHDXPzVkyashbEX4P2DXuhLMaXjw3bqk7s2A6F",
  "key5": "5hJxZ6ggbYd6o1eAagxX6vgiJcp4bvWH6kfzfCMGQkxcqemdtYVk4pd3n6T7trwdbJhsfpus9rcdwFRVpyTdaEa2",
  "key6": "o47YMEToy1gMPYS1YD5zM9CJhqxmzrU7AVQ998MLGmnyWCCZ5hLfcXQYMQC8sonJ6mkCfK5ZbicW6veU8bhiRV4",
  "key7": "5DqMHXvuv1R6mLnJ7LYHSvpc3xWWoKhRhYKFWKzUCxSbsmYPrpXTWQJgZaak3o1nbD4eZvaHDKJvkqDwgRZ3GmYf",
  "key8": "4SK4vgzGjMzcc9BSMLGxSyzMS2zfB4ZvKGxNTjcxxAshkJor3RpW3h77hqjwBNGWKTaVGjBii79TnkuA37U5VaGf",
  "key9": "5TG3PGbobPNotoaWxCM9BTcon5ytrjbKgWhCCu5N4daa6iG6hZ37MtxJSv9WgFDC69QUzaTeZEVwqbAamqhkfRDM",
  "key10": "eBSWi5J7cdC9cmwXz9kbFgE4sVNipnMFL6RwUS6h1WLMRaYKFEGGu56hGAAn2DPHLiA8BpapmJtvBpEMGHV6mun",
  "key11": "3QWDoCfx9nboR7dumakxndFCBV6MVmjURNijtGg2Zg7efRfY9ya4DJj8iTk1ryMfTzNBV29yb21ujdzbKVEAGb4W",
  "key12": "5DqMdQ7wSz6P94CRpx1oLbG5gGDrKxweYa23cy7HnsA9pULt7nX1QCZ3QfV1o6vaWgB1vptY7C7nXu42NAdRgKVU",
  "key13": "2m9Ftzz4VH195UwjDEchxaQES9ADbZ9JvakvqGqZaZ2uG1cziazCoyYibjkq7Bj5fx7Ei39qTZaTjLuKp7mvf6ZX",
  "key14": "5PdEikHjXwNf1g7LZfmtrchybw2H3H3UHnN783Bobbh5cmvWKU42X57tCNxcZc2a2vkkt8jGSnG5Hg4MvGuSJ7eW",
  "key15": "5gZ8dbqNwNP9YdDURxMDhEi3P9SdZK91hATSakx5jteYDoivsznkviDUZC4ZDB5oZkC8wChfzZoPE3q4B7kHkma7",
  "key16": "YH4LRVLtp89GgeRoMdft18qY88Xs1qRf9peLRxjkZzyeX7FRwYSA2kcXMuQ2LNoGgjTrBAtbq19P74C4XmAvgbM",
  "key17": "qCUzbnoezw7HsNeGbJDUcE6Ka1wVYEfnuJBp6uWUHr4jf8Da3TJLG1RaFW1H653ZYFbupZuffTyPABZLYngL4KV",
  "key18": "4k71DAW7vCAswFNxbPvb4Tqfnmf4qe6jPYY2nCT4kYkv7TuutuL2smM8vLe1vQUtwPA5PEmawvEKig2XvZcT7Nht",
  "key19": "1qJ4yovrNRFg4AURiX3gJrrormg5x6VSr392zn9ZZYnwM9MKTorKsH9Co4BsxsGHwmEBN1bTdwPbgvyeJ8CMysB",
  "key20": "2XL23q1uyH3xTtVjUFNS9gBngYg7rPtYa2795Nm4JpePQbfYPXhKdcPP7Kf4iu8ecsebfGrrHLwhr83jY9hVgLnt",
  "key21": "2ZjYb7AmcZTTBVwnBfyhUHF68gT6ot2fDQBytYiQJ5VewGwiuCBnJgVPAP1DfX6p8bqt79Vt6aF7hWu9LtbD1HGb",
  "key22": "4iFxGcH1aGgoQXUKyR8GcTvmmUdQVmwtLqSb4VaabaQKw15z2xe3wf99cj2BUPwTmSmcKvu2hLoP25eZi25PNuEa",
  "key23": "2nzbkftVSaPrurYzytAAksQtKCqzwtvATtR1PDRwjvgckTtHRFkyPvFfzJe5Vx3AehXQ8PCqWezfbSLse8z9HudP",
  "key24": "3mvreD2MgzegBxL29hB5L66nakyi4Na6kdd4FWWJ8Tqec4LaMbs68YPmfEYAp1Dgjw8tGVzrU6qy8BZNVtGfndpu",
  "key25": "4Zx5NFxaCDuADDkSA329YC2gwCZq43bJwQjPTrzK9cXq38bwJcqAsWFEXj8dgZbjgQ8qTFSshrdMwSNTVM3F5AY3",
  "key26": "57C3pETC82DA7q5pjLM8LZ82mcyVPjvcamrYGB3x4dLd2u9BDcmho8fzai7woiu8LrM56568KPWPfs8dZAdHAdxU"
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
