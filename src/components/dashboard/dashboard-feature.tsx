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
    "45UE6n4ebmNypu3bxehDmsLDDjSR38Dsv85xzH2ixrW2PyXmmeRAcTQckfRqWNVefRtcSCXJ5gQC7rU83zHDG1tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwKHaH6y1no6Xzk9RAKLR1b625fwQNfJshhKJHCcSsGeecHwBQ2bBxwtX6wQr8nusiC5JkVfSGnkus9PU5HNXrD",
  "key1": "3h1vLapo7Hr3kuWtwYT26GbnFhULgooPCE94t4U7YdJT53Y1gFPmeCQtz7is5S9SHAJBT33QbCCdZ9FyQbbXdRKZ",
  "key2": "5Fes7xnsA7DpnLvrfxkq8F2JZG3DPiqiF6ziGZ95qTfToZqX6VB21vLFfdPm9DpLgUMwZzfLYWZBaEcNN5WyLZ2M",
  "key3": "4RUar1A9cS8pT9HR7hMpPdeYRvE2AchDMNa4PX4uNkggdyWUt4UMu1zpn57Yn8JXtvE5CQ5iEPBrQGHSfC6FqVE6",
  "key4": "FkMfAkz81U8DyotjGAju6yn58v2Hi2xH2p7MvazHowY21ZZWqW4x4ieAjGQ6xC3ew1EhMN7KXNL96hhCbEhq7w3",
  "key5": "4aZ7aqWr5VKRWAsebCnmmKBFWXVCSF4qVtW6uKyFZThfDHaMyCKWmJW9eaNmGK9a5wweJqzVQPwzdxSDahE8zbAH",
  "key6": "jXqorCq8bo1dXV3XeQBDbPbghCVdmPH1T3rSSMmP8BDRmC3qt8KUWezEJ4ReD1KUdtB9saQeMfHf8i6RrH9ihSy",
  "key7": "4yw5v2czpb57Vfx1eEQU9UxHjpAcYz9VyuZHtD6UUpQmEe9d2pFesLh5ZMC9crTYbZbcieBGybxhSSLaBKz6wUPk",
  "key8": "5VuPLhYL4Fh63rKmpwxV5trWjo1o6F9iMjur8C6LvwdDt9KpjyUHPiRorJopgmrc2W7cuSywsufVhDJtBoLA8RMM",
  "key9": "3XVrAfZf5aE8bqthfhRsDeq8djX2jZ7ZNR82SuRuYdEgAiRvtz5GUsr5Q5HJ3F1XXrFFPhsNk2JfuMiozwgWa7G3",
  "key10": "3bA3pXncFtUtLQYen8X7YAshnMpp28EZ67KTCroxu9bgjB1ALfDkAwawV6CLwP8ieQg394aHSejEzQ4keA4RZpLU",
  "key11": "2SagoUHw7e2gPjsthDBd1a7vqrEKpjoacx8ctxuA1Lr1UyhEW9kgujwbyMQ2NfRQ4zqp3K54D7zk81YoBo865939",
  "key12": "5dT6MP9jhPHAVSVKczECsjyijcPp7GTcYTjFj5V43xo32XFou3QkRS9gtFQbJi3cmQexP3BaF4A8YsmaXwEuQQmK",
  "key13": "MAJkd1Fqdrt6bFnV7QWh8Q5RXEeKPTGiF9w3Rm2eEtEoeD74G4Rs24nEHio4eedWwKjLQmJnbktd2ufNVV9U3oa",
  "key14": "4MP3gTzFci9DC1w6Ztdcrrg2DbmKB6G3uEiDCkyE5iR7veXKWk1SPQ11TFC6BF6ppimLm2GuRmr3t76MhRThCvEQ",
  "key15": "2J6hzWBkjq7fuDVid6hZPWvQtCMnZ6qAxLz8JAKoTYtjGVdgdJL5ZUnMEd9mbm8VGujQwU4QkqtCuVDGkK6LzGNn",
  "key16": "4P4W5tNt1ey1Bn4uS4XJomq1sipgtA2Hfu2diyGPTVE5d2SLtS9tdRjhwyajGR5a9jmxvyfxEHpxL8R6TpvRa7Xo",
  "key17": "TrJeUXkuoYgvB7UfmPYD5JCAS7hZyYPon3kE4HEs2HLPdLyxXZhXad66JwUTwvmwX3Rm4xoQmBsywj9BGYiEHLK",
  "key18": "3gx7EgJq8iGevHUB3XPSBsHoVQXqKQrj3RG1EdnN9QBgTjf8qQo9cPnWFhkwNE6e7UmMyjdgunt4EctU3CdRaVn9",
  "key19": "3uxp3beUt86PA3uXsMLSQUFpKDEfGkBB4YRaM6LRh3imA9U9ucehNY12HkqPu9BAP8fJiBaFaV2NaTmaCV8FBG3b",
  "key20": "349MbWEbvY1QDWuMA9i36waDXq2MTEWdzfgnUx4XVMnthjxG8dEkctGBtDG2DipsCFetq1imov7ZUiz6sKzGBK5X",
  "key21": "2YpAQ5USRut65ktcdjyDHXN4kSYiwD3NoB6br2qnkb3ggqQdLEriNnWFTXpabuXvhBMATBvuca3PqUTeSeXwMXNM",
  "key22": "262jfWJahynWK9CYuZpHak4gZGSfYggf5kZr5dUaSCZTf4hexsV7gjTpb9KTzXYf72BkjUHBt8sxqPpNSfrxRQ81",
  "key23": "2ZpRiQPK9XPQEwTDKyMZc9K6Bbvj6hRUCUJRjiVCtMxYG2YKhWBgobvYpmjdp5Mg3xUVg2Zw5jppfWRgHaYm9QUE",
  "key24": "2uwrUTyNnYut85Epbrnfk3d9rmj5hPqke2WWF7LvSa9fqKccMYGgSqGSMj81Jh1gHaJYzF9Bnk9bV7LmGEnjuywD",
  "key25": "55YPrNwtiZgtaYRkKA9MEox5u4dmwTzk2XCHey3MJJcduyycTkeNgqZbDZdhT3WtfmchiVMQ6iHzdViocv77kMZb",
  "key26": "5vdZiyF5Hj1rk192vjbBzD5xJAkb3ED43AtKZKiVHQhp42ra6BtFVegmPVQQsUX9fRZNrrsRJAmQixSSerzh2z58"
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
