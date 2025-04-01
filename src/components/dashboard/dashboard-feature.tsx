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
    "2hV6ZU2hcNDekTgoP28GZtM5pkaz1QiAnPxGct6FDKjhxuMsNLB6uLRJrMn4wcaSDncL8auARtTvyeD6dM9LAXox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCAq6cLSsJkWkRtRasd3Ts2Kwn8XFa7ZyFypscHBchhtTV2cRQyhGm3sekmxTeyPy3bMizaNFk8E2bJYWwbPYX6",
  "key1": "2xoX5Gp3KZSmtA7TAedZcEkbVmRcyW7xeoPkye6SjW95CKMuXsHXhKDogU7D5zcqqZhx8oHXbrkWzi7psp6We2Nr",
  "key2": "5ynVPMLqg6SfUDUyMZDggMpXCyxZNeHA86s5Jzh2sdUYkdJfyf6cEMbYwcfrpwyCXLj9V59W2aJNuviL8CxRCKiD",
  "key3": "5rE8awNggyNsykyJo2mpMWSF8c6rHgPxhLVQKPmov1iRmVZdb6cYeMz6ojJSHv1QqcYxau8NHwahftTjhn9g45iz",
  "key4": "RRf33V5dsMHA2DVprnUw6ufjsSSxcvehPPjFc87fJ7x7UibqSsR9L1DBE24giAPvVN4FZeHXsfVVxpmzhc9ycvs",
  "key5": "47rzTt7i7BWSxxGwpm8UUasP9kj5hWJoZKQ6vJKajAGnPjwRiwf4K8ynNTGyrobkK3oSb6DydKWt9xNHW1qRdNHY",
  "key6": "5Js6jWwXhMTWQ5GRErcp4CnDQJzE34wacSzsg9N6Dg4zB9XpcG7K2P6gQAmX5qq4VW5Ue6bGXnJDEJoKgTGJWv35",
  "key7": "2m69z1tYziZcrHCj4HwZWDewpeSEBsGw83ux7ppKmAGT3AaHrsqbopDYJ7uwRvRMjHNF5hSiyLEu8aNTSewHRSGp",
  "key8": "oMCxfkKGVJtkNuNT2Kqjj2ZbNm9o5EuA5ZiapdBJR3WS3kZ7qPQWzEX5PomeHPBrPX8Df79pCSb2CCufSEQbd1v",
  "key9": "4jb19xWnfWx4AE3SYEZHGvgCz5xymz5uENhRoHPcL3R7A6KUu14rTLvhJReK2rBbcfnSnYiwEcYQkTq42p49ndF9",
  "key10": "EABErTV9VyW3SMLyX6wGcsRgeii3f44u9GY8mnBZBMJBgnvskiB16evbDpnRsc4yb3GPB9fpmpLfmwSF8mk6UPf",
  "key11": "aoqD5TFHjS9SFFwfvzJNLUkUDNhrG6NURT15xBQD5fVXjTaMRWYWmSFzkFjqerQG6Z3XkzwiYgVhi6bxzTinMeh",
  "key12": "2A8d99BEsZVE6snbu56L1kKtm77UbWoYaHcD6zY3Qj487Bf7qeZ97M4Bsa6dY2TkrZ8KmtPjM9LYW1amxgiuMwDq",
  "key13": "5ozJ47JcRdyFjqZhPeammGpNAmvhQ2BHGceax6sVeJpgRpuDBqthJZbVrV5Ti3rVPQgcVaNLk7NNRdPAYQfJKYY9",
  "key14": "49neZUEhYmricsdP6wfFqhXMfEjC2ceyUvSdENe2eHTCeAH28w1sr4DLAnUBaxyFe2LZZEGtraTQ7NJ1zRA2sjxj",
  "key15": "2QYg95C83Wd2yxaXvVVZB1V9XbpPcuSXjXmvXPip4TkWV4B61ZTc1gwqbrEseZ14sAd4xHNvxkaLQxMuPfqQpfUv",
  "key16": "ooYATpRrY1zehpnr8MRxGikVdKFqUCx3Q4zj4osary9uLohhHA4GVCitRpBtsJrzxr4K3ecniGUt5vHg8vF2MJp",
  "key17": "58fXXhzpL3zr1X8h9XBCk2iJ7NacTugvvQQwVLmnvyXSrG14UHMW2m5SGANWshMadfYXbqc9qXMcRLXuF3N6Cw1f",
  "key18": "3XEMTBae4z9ztCKQxdM1kTmcmFEiaj1nJmjbyNgALCakeCrhK7iF52qm8T7nTpegisk5PX5DmqwypGyGBWTTYF9S",
  "key19": "zBCxJedMcXpQGri9BXpwsLwgPcBFnPuVan4WUzTU7xve15XCzsSakjDsCzvNG6aH1WyCqn4CCn95xW8MVxpxawU",
  "key20": "5DtVBhorV4H2Bz5dZkuY715EAsiRY6wBqJCxiSm7gGGy4Cb4Y1WT3ehQnp79HB8yiU3okHgz8rzSBG6KHeFk179B",
  "key21": "wGMUQ9nwaPcM7B2JQPf2Fb2cRkpvajDbK7ZxBJB25vkh5KBzyh9AkBFmQ6j73BJQK7PWVxE6tTLM2VLDGJhZCe7",
  "key22": "5oGn3nSc85vSRUKbD8DYS5oxp8HRz97kbAMv7huncGpktdvXwpDdnyeF6oWCtaophSLAWnCzNGEWMRMJayUAim4U",
  "key23": "9S89qqNw2436T8nhB7ekduWKVn6HstaPR66fmGjNcJbCT2P47EUvoiFTqLPEkRas6KdZpwcptEfAibcw8En5WMk",
  "key24": "i4bFezsM5nQ7XtrUAmhMDeM9nazLNgECvXWtdgiKr3zfjPTHrYbyVNkjuM5PrN7zEehhvLoTajxigbPyoWioFXf"
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
