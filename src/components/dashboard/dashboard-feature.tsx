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
    "2zonTeBGMd8mRXEA4HRon9DiDzhdhrXtToQSkmrJAruoGiHtMiXmps9ezpFWT9H9WZafM1nV6pbtiuevuW5ew4PA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vkpscqmyAifX7EwY9dEhvoZxmT79wxsTPhs6rKm8RjZDQDEYj3m3FbR952kvvTeLfbHbaaUu8CSGmw9pbeJwwh",
  "key1": "3vMi26iVFJEWqdKY7c65JN1hvqBQ9aSxPrBoWGUWT8q9WXaDvEvUsdV9RykhRZAfKRj4adnX1T6Aj7r4YXx2C1uU",
  "key2": "3aGdQWFU5JXFSwQcC5UiFxVTazkURJrX7o3q1hZLc4jy6qg998w7oQokGbRgjD8w31nrjDEtfiZWHcSwnoYpet9s",
  "key3": "4BYDbEKBQuWKXbmiAZP3RHDHSKPMf1ByjokJGcxb7R1A54RCqvkSU825HNGYAHmoZSPSP8Lsp9mU6ZNWPvG9ApwP",
  "key4": "2CmxbFZ8nWii5WU9SztvUQppf9VrD9c3KwPpYt6SmPRs7a6vKLc9MoUta3WfDNAoVUmVvB2YHo1NaAx11kXBBTX3",
  "key5": "5RJrkr9MjRc95M2rTXEDmj15zvDfzjRoCKA2v13pGMFAwqnT7vbNZdjgwcH9czknAYgzjJ2486od8spPNrmn4CA1",
  "key6": "5CLSeoB5NTnuXn1j89nxjWyAd4rkE6sMXSV25fgW8sk3GDysfgUUoqenMXvgJ77iiZwLvRkdhAcTr226StdHxivR",
  "key7": "1TTVn4w2wKuynADRYf17ycAvH8Ezc1unvLcUtZ9HtXRBfNQXD2qv8VhPdEsZwtdSK3DpWybdg8Z2SnXjtF9tFW5",
  "key8": "5GCWGtbf7wAEzJK3DqSQtMHRgyHhTQQVGtTCpiF2k9m6doifkT28mLKhbFsEX9GK9xmE79KM4WwF9Tua4mNaFmdk",
  "key9": "SYULo4fDFkVc5yJmYyCy197HQZu3rpPenVreyLq5AT6c878GiqACC9bdrCrKiMEXXENk9ekgEQ5JfGMTVCQtCNN",
  "key10": "58wANFxHFfaronnWtpg714iKVAJHCQXF33M8DNwsbesXka2Qa52Q2PtKrV9xjEWhj4VEuDZ45QgbxeRAtFShBXv3",
  "key11": "2sXN3xzkhsJGXZcDuDsLic4ze44LnYBboBn6QsgGqFZLaDyueukxYzQ8r5sGE396DeTu1dPp5ZTPAppK3FLE3Jf1",
  "key12": "32qoK7mXpyXeEihKf1kFtEwx3T2BUSUGqsCfxFFxEVjpwfC76Tz6VjHiFviaXGKHiz16UatqVjpi5Lo3Tzwi8qti",
  "key13": "pnJ3ZxzeAqbGyQK4JpKrBu7uPJZMSLcZ2PRUbNxmmhwptgHVGTKiYofZ9rmknjv6xvTDS23DmEC9hQFXsUfV2Vi",
  "key14": "6786w91NXRDbQjPQjG2eMud1BhHyydrjkUxQGYLEzJiM378ybAtpjU8riA4cnBPZpUxoXrYEXg2CAt3yznfagQY",
  "key15": "42ainKsZcvdZ5YNSGT8fYatH1x88yEJEdEEf2yEkQkaGKppYKkQL6Bx4h8PHcCVnoT8r9hNZKzu4sVaxagewUMeC",
  "key16": "39LV9C5BKfoX4dVfkujgtMox5ERN9vYhDVT6wy8wQxEQEacF9KAzfhyj8AtSXBoNfh5c4jd3Wqsip1kVhNPJc84c",
  "key17": "5SV5s625feyRSx2F1xh4U2H55ftnByyfWRahPJqayEs1viffwzSYoF5DKb5j3UbibuBFBxGdNTMKUkqBBHJv8WrY",
  "key18": "2uGqcs6bEcSxmq2ZGz3EJGJYGo88A8SJKWRTp9j3E7oPxEUC2AgTRhtFXVMinARVfedAntTPQLEHNn7PkZMdB8Bu",
  "key19": "67aMWtPoZfituHseH5zkPLX5nx4xrh7UaQ1F7jtHRS37oXZfi556LvJTNCcGzF6ZjzSyxmUHLW79aWoYmB3ERu3y",
  "key20": "tHhrFJdifcJvTtdKe269igB2xCE3Avs4g6uZCES4nqSwmGzHpHAWnZFUwSmqpVFrh6QLDZfJikx8F39Ry4UnQPc",
  "key21": "XdS6jbDKfzmdfBV3gAweNZQw2LW4FeL6p4EY1uuZwtKw7yjJq6NkixU7MfPaTNPXisJySxSs6yNh1LoBgpADj93",
  "key22": "63HiSqqgBMnzZKhcdBWh7vCvjhdnHr27osEzp6dVtrq9k8MPuUpBH6EsFWqkT8WQVM8bYM9fgGQotyEumMcpUrTF",
  "key23": "4Vwb3r4tx6KkJi3fNAoFTxRuz6e2uMvJqgwBJSidz15mgLBtaif1TZyHwc6Hd2HzKenoF5kFBUpPv6yodGFkeLBa",
  "key24": "3okbStQSvUnJSqFTVWesMeLL2c5bKzerMh9jh1zNTESnMnoZenHCn2n3E5vVm65i3F8SahTZPcnziEmJH1gPNerJ"
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
