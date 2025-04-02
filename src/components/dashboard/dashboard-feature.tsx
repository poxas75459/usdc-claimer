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
    "55gBGy7eHQtA2k6gN5bq1ynyGMViNNZHDmTh1qr2XP8tusZZnVs61jSx5uZC3FtwbcJpXMEcDyrSZsLMnpVrP879"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bryRTLUWfWk7pdKeNSEsj7cHS5cq1xLgrxAvxzKZT6QhGNVEEdTxBAUeCamhoP4979Kk72BEo49TjWFkjcTS2Mr",
  "key1": "nP43ygWQwue2H8cDD78B4sXk97nuFTVqGKNH6TVXFd8syj7nB1Wm5n84mdXH5NArNB5zrDx9Y5SRpvifednM9qf",
  "key2": "45cNYf5cVmZZ1kJMNorj8iyyp8e45pxDCb82SWvX5rmUmoAcxCZSyffNPNvffVz7UBNjw7yfwxV8wg7qm3siR3Vh",
  "key3": "qDCwsvJDNof4E85BMvwVNE3mUd8Ccm1xVJ4F6Ut991N3tKUW4uNKCPV6GByGFNukGQsKaFk2ksF86fV3ZpuayDU",
  "key4": "3KpcrjKpxidMhvxfyrMgVRCnQDXy1uQWUQ7xAQKpcCJMGGWjyrVPnPKuT1hA9FNrxRtjnTFgT2YvkX8VTbEKJGAW",
  "key5": "7vgyFMj5AKUwuq5jGs49Nei4Q3zBut1qqGUvasxn551ddcVe3xPxZ8U4ehRAXvPrLeaiGgLStMRgu7ZoBvo32dn",
  "key6": "3jtDmQRikMqKAWivdQttrAGjUXCZYSKLSUvcwCzCNvZ4GAJdmd64aupGXgyW4dQc8hT1zqa7s7jfA1yevtK59gws",
  "key7": "53L2Wei4ekhNHkUDqMe8uvtRzmZZaYgAZwgJVtXXjzf83HuCEHScvS63RwJvknhHg3uacNp9JLxiXpfH5zcBe66A",
  "key8": "tJSx7AgBd9Wyfe9bMYdZgybHc3chhnmbaQUmr4zTtWSxTZHp1D22d9iHajE632ejKNB662tfTSnFKfQbkaoP52Y",
  "key9": "59oXwDZRns6poequsFaVFFtzcyoUFqMe438rf1HPb4u2jrAZDxQ9SpfW6TqAJsLUgE5ejejj7Z4dEwe6jCG9yndB",
  "key10": "2kvNSUZki9CGwn9fYPto7MTz1ksJWPts3cSkNm549on6TFLsG8WkK7WPM7PT8yUTeJdTrrVTdaENBVTo3JGTJsEf",
  "key11": "5CNq6dub2VrMnhSkBtmjfwTjdMi26jAtuQ778dFNf2QQDyZjgPaq8b1vXTdPxXXHu67LT1sittZGkjAoCbBixxxp",
  "key12": "5K8NaEyZWpp924wRonyF4zThai8u4Whd81QwJzZMgKWPsTPGi8ksPCstgBfT4NcE3HT6Fq5rno8dQxA2GzKTDGkb",
  "key13": "5ZDSgVQHfUV2ZdfK3QcbgYtkcnSRtZNHxEBvedb46nMtfCM8fyDAvQaBsNdQMxCXgrS4bkNehSGAeLuRrQ92oFiM",
  "key14": "2sGgg989DPDxpuVceUq1XKo2L7o3Lp4NghgoMH4zzyBnKUyEdXSzBH4CUMKx7vjs4wftYEkzYfGCkAQJz8mURQyS",
  "key15": "3HKc458T4fiAcuU6NdkfhxKJCz9Qk1euXZ83F2LxpjcJRLmLWPGmLNdK3JJ1rkztvmLArhgigjpSHUY9FYAY63KS",
  "key16": "4YSDpFAVZmU3APwkAcqFBfsUgwR66SvLUdZEQZcszhZV7ACFzNPvGzSPYAVCLvmbvhQ2aArnB2bKJ7CkcAdgEdUm",
  "key17": "3Yix6vLWz9MsKkEPbDM261ayB7WfBGbtfVzr7bDdghrCvgsJwaTRitLm7ddnYyABpocBFbdKeu85tb9T3wPksNNN",
  "key18": "M5AfyyiyscZM9GufwmYL6wKfd3fPBuRabLFT8HBSQREq45fDtey8bV2LwVLmF5mSfZuLXnajgij7chCnSEpJHtu",
  "key19": "2jPhFTFixAH4LweibC3orCJKuxQYkeqw4aKtabDpZeUZ225mzRVNdukraehAY1bcUx5RwixqBNnpJJhbRz66q57b",
  "key20": "2qHXHJLnht16DzhJye27cMaVoKXhaMebBopMU33rGLyv35xiQ3uoBPt3PzpQ68RUFQSeQ94UoKhjx9iMBk5BYa8e",
  "key21": "51aQom3L3EfLb2wsDVGmxhuobfdbWLzNTtjckvsJ5pwKPBNLd8cfLowGEEdU2uCWmCNNxFSMpdMahtJWmrPrWXsr",
  "key22": "5PjLtbAyAFR5bUC3xBwx9RceNjLsQtxABbHwH9r71cM8H4Ab8WYkH4k5UaqRrp1nGU1SDeNktahm68b4emEn8R3F",
  "key23": "2q3jKR6MiNPW2MwzcMywsXWpVeWWSMUux9EhMGBq1Ft9MUBTbEPZqKNxYSXsQgQpC21JkLLaqjSbw8Wsj8mGNKHw",
  "key24": "3AbJKuKJQd2esTPsPQ9aiUJyoCqwnd1uSkuwUNggR3QZPsTKn18YQ8w1QxqtTfkkwpRBSmXKfMKzEVLMfoR4cFc1",
  "key25": "3iCaReBVQPagPkjWEDwx4hK3gtZfgFf9P3C47sSTmhyenAPXWj5C7yP2LuM6hVKKYnyKwjk9cX3kNaqGHdbZQ1Sg",
  "key26": "ejK5E8yq42APc188UUVEBDgB5ZvVyXvNpTANayFvv3dVhnzfgRxMJNosggcKtwKjdhGZpJ3wSuN2gcxoDjZNVGF"
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
