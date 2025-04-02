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
    "4oorUP44L1g3DrNx27FzXARsXHQoTPKNgGz5pC6uaanzXFNfU7DJf3KVRDtCdXMDjAbUeC3dH86c1XW2nUwENSD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fr3srBrSa2wTjfSoW61rcbWHPUAcBch9B8Z6nJZXaZ6Mp5wHJt1kjcs3ydZVFVow5oaoyjf8s1SZda8EidXgvQ",
  "key1": "4SPpKDxy469v8L9jkar6cjameU6sHenPCVQ6rg1BeEBQmdv3yKMVFhUEcp5u9ZppQUGK2BfnC441jw2MBVNnAKMp",
  "key2": "34bTBFoob3govcVBpFXia2KT64kmWkHYeZyqMRVgk5sLXXD92w7zJHWJ7BCzvBwu3FCJqbBhgSnFjS9zCRMoxMHD",
  "key3": "3PbEbgEwVk2jmPcQ21rw1FesCcqv3uMR4Ee3Viuh81AkioqzERXv7hFxUpGrHQjwFbqoNsVCESJzbnPoR3xHyfjY",
  "key4": "2Vf6ZwFDYKDQd2moo4TUfiqj47qgiMuMiDSXf5fubxKveXhhMTTjJbNL43UUS2apHiiFtt4ed1UAEfXsNraCWqdZ",
  "key5": "4Uctr1arTu8TTB4nx3g3WqqPjXfb7KQZFjCptaBwPkvHqwTrW1reF3kaB8Eayp7vJkBpVn3LJsttSbR9H9R6bPcY",
  "key6": "3jAEcCe71UEN5RxZiLS6SHbXoxosWS1gWm37giiV8uyTwCizCS63T173qaWdG69H1fSoVRjfxJmrQstkBqWyYSB",
  "key7": "2niKbnsGJwrUA7a6qY7nRA4nCwViauUTk9EW2rqQLHXMn1bkEBfZMSz5Ng85NjmmP56azq5HGhPid8wYEGRNEcL",
  "key8": "SVes24yGfjgenFC3XWxJDZ6m7FnHBzwb9jFMefdsar96Rfw5QH1cAZUk7tVbQHLc9j4moN4GN9TwjEFcGSKqBpm",
  "key9": "H6uzz3cbnV3g6He9ejX64dVvSqf6ABZnHxKqwy9XyVuqYksE867r7FEqc7AXDUV4vrV3PLoRYg8qqJiZe8WE366",
  "key10": "wT45iuJdVD19A1qNhDGvTQMey6fQiwUmc17KJxA4JMjXQRC7s3sN5Hwn2kqWgDjGK91euYPNLg4dVC9xgU8trEQ",
  "key11": "5WwqbBxCtxxKyd4m6pajZQNphgXrYmmVoVp5jduV4mktDNXtJzyAGDXsf7iEXyEvrY61asAJHXnA2SFoXYgbvVwP",
  "key12": "5WS8KhgUTbvLiCRrPwDxsZThMrAuykodgdWGNPUW3e5gsvKnbT23FQobwnvJkcuewkmfsPMndXmomSMXFHe5Znxg",
  "key13": "5srA71scwNDXyLChMMUMZjygHLp599LcZdWioj2VnQynMxJKKFoBdLwWMw2XtG9u3TEspZzojKhjUNYT6bEKbZAD",
  "key14": "3qwf7JWHZ14oJLw2muocnmCD3kqRuVHbZZRaCTzzsi7inCCwQZpY8joQPD5a4NzCwGdMzYThZfr9tQUWfmhyHL9Y",
  "key15": "Bb7i7xhut6vmkQTNeAU2SnCs4K1EHgVPxA7gGgBFoAXYHxFi9y67ABUGbaCx1jFsNijwR8PZkr7APNFMS91vrPb",
  "key16": "2sd1e1BUATfh875WHz15XN5fBgu9cXNruBDakq2VSpNJW3MUMsdHLePfBvhUS9LgNQrNhzV6kqUojbnPs7ndoe1H",
  "key17": "2khkcYh1YEk5XE4xReVBBoaQYtbEv6XcMEJt9SNm9W1gMjNGpTVmkjunyoaXtK19MnBLxniJJYqxbw4q3Cdwoxx3",
  "key18": "5S5sXuMQ4LDc3V4r1JVNDUUW8cxPG51B6R8LEPfezU3Asr8D25RKWp3Nmu4xJ34RuZvHbEsN58dZXj9pHXy45sZ5",
  "key19": "AGa57k5S8bcS4f98iCKKKURVX6HsGEU9bmAogMkwAKx69mNqbSnbYtuDLDFmEjAoBnbq32Wyptzm7U4ajyQSGZb",
  "key20": "5KrQ5nMEFqXhtCERNjMmVJFrVR6pvLDCjmzeM6sf19etWeG4mnEdmHP5Lx3vjBM6Sf9o7CDazjNZbMgHjRp4iLdH",
  "key21": "5dEkYyanmW7bgtDPXWJr7AzQNw1df4kWJkCgZ3EU6kyBXQ7iZW3uUMq6Byn8FoG2T3NcjXE3UhHwS5eMETyaARfP",
  "key22": "FvP6iCqRruFMMFEMimTk14CMCpP118RVAyubJ4xeyLfZ5gX8oJkwPJarWup7RqThNnhTBRoaLKA7P9rJWJrK96Z",
  "key23": "gDhyRFFBqdL5MjZS8bGr9sMJXpnD6uE6ZWEkcsdm7WhzfieRGd7nUwqvevnfBK9mcrAmDpoDSpFFvRmPGoTbK4Q",
  "key24": "Z64n3bsJSRqR44gHk8F28cYpj1Pfgg9tCX7efPEdAfPpH8qYYwahWuQ6HsFzNXmp3Ki1UdQxSQ66xjx3cDaXoxj",
  "key25": "2N7pCgt41P4YiZ8JaD384kyRKjc7B81DsHb8ngC2bhgNPPDLzKpeGVMdugUwE1HMBN6RxsU1SWvcegKFkZWDk4Sj",
  "key26": "4rddES9sWTJAacB298k1WJDrUi8nkxunrTWoQrTNsH5YdPgzgCcfzcH1jskiTKH7gEe5MZoi2Q7rFExYbjigKQob",
  "key27": "2n5vbhYygWf14UWKdHachRNpFGYuPyuX72FEx3y8FTG5JRpZUt9LsAcKNvtHASdfo8GQiR3T7VZFDt6T6YRw9XsB",
  "key28": "2usLbSEpn8VT4KHvwc93RMnGGKrxV6xr7ch91jBddFCunixWY7RjuvanTZwQqCpQvyTtFnJaWuMSRs9BV8o7KkyA",
  "key29": "22inoL1b8XaWmdwN4NQ62GACKK8QJDUPP1KfAV2j8MBa623yh12W8FFMp5e9fweUEP11HMnm1ZswFxYFxAQWG7yc",
  "key30": "2ecEsQawREm3VjtcpnusYLAk19aU2gcZ6s2oyHfPdaGxt66UcsvTsHAfcyz9kVLFHo5jNmfThbusjvMAKivhmCUR",
  "key31": "5YR4CayQBEJgxDXtCbtozGuzT7v7oE4SzPSzheTpXXmoNRt2hRbqLWgPUL4kLX5Ap9jzX5zmM3vCV41JhX8CWYic",
  "key32": "2QMcuHbkE6febJQigGpqrmT9tU9FPdNi7UmWDJawGxWYVmfVXCKBYjRvNpkxWLzhjmHoc4j1L3Kn8jTZSWey9xEH",
  "key33": "4z3HTrZjupEKa5quoRxSCXH6P66HxBW7Yz3KULrKk9jVCDg54Hg6mzhuaigzKRkUW8sJTV87bZixdXN3x5MubXmR",
  "key34": "37iiEmmdNN2F9JQB4AXCfaCm99V15BcdTKFEXxQmEY9ekdBouTDnL7bytnvNr3vQU4SWFR53EbGzXXRbz7QqH7jQ",
  "key35": "3vcuDLoWBBFNKhvg2GhdPjD2EvHxqDmnL5EcN4rsE8dSbaqJhR8otoFuPDdiUC51q6C48XxuYaSVe14C9pUhVAkX",
  "key36": "nw548EkCFhrBezZhc8DZESTF9Cmucm2f6CvzpC4FjXe8Npr7x7FKtSb96iBJBXstPRWtmQFXBSyS41kvYHHPnF2",
  "key37": "2s5taAuu7CKzfwBybWRu6E7HqQFCq8gZAjqDjHEHJKoohqneLpQixMog7Nk4yQ537yuWwX2wye3fUiYRjQYaWYtm",
  "key38": "3C6skfYVRG9kBPejPKT34t8t5AboTzgTYyc5JbbV6v5FPpAKSay7ZGL3wZSZnyVyaYC54qeG4xjg1XQMqf3FND2F",
  "key39": "41amk5veMuhYqdjWt4H8g6x47PCQxCxU2En9TouSp1N8WJKUsurUJzaA18h2Mw5ncPuk9SuniyaThSL1WtFHnUbY",
  "key40": "2CPoDmnmx5iH7GBSoZFvS12VHBSL5U9b6FTT8eJQjWvvPCDRdrBBb9uoPkKfu5YTnFUUyVtCS5kF2RpsK135gvJe",
  "key41": "4WjXD6jPzWqg56sPNMoY2oNh5XkkGiTUr2o8bfBD7AvGizGnhhEc72zRqo9tgvVnaBX2FCoBBAh9BbLR1sJ7y2wv",
  "key42": "2aLPVkWr8jMtYFHXgVjfdjGS8nxZpWF4a2PeF8geVpPNgqkRx8sKpRNMxG4Zm4Eq3kmf8tNsxBDRiJwqWqyHgdkP"
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
