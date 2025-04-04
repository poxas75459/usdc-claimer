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
    "2rtgs9CtrqukesZ5YDVxA3wkEc6Fpy4TG9fgAsrtjkJqtTiU8mZEGRymhLAL5A5pPBASTRdYEG9hfcsqb7mv82Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duKGtFRmRPdBBWLZ4Dspw5r1GV3ZwsM6oTvNUJwUffw9svkSHibTZr6BHPouD8Pewwc88KLagqoDUoNMzaEkwUe",
  "key1": "gZrRvJS7Huv88icE8cSHJqodeuygoNCe9N7Z4PctYhxBx2mestVTuPP8AXXoZUP4LEMf1FRcyefNqc9ntVaT7ao",
  "key2": "4jQEM4nNBRyEnFL1Sjpqci3sukociwMhf3kk2m1Jy3mTcF5gBd7uDK8N26awzZLxbxsEssUV1GfbtC7Ft8bfWVYu",
  "key3": "5sHxtWh62VBhQWpLngXkdWh2Hef3Nkq2nJTM8N8sSZ9cgNk2C8LuVsPCdCBhav4kniUXxZ6sovkHHnmYuaxmDLoB",
  "key4": "3Tw4B2WoF9RxybkVHDnjFZd8ZoekFzfqCy6BuKVYu2zf4wpA9NAJXJYh3HjxUKHDPDtziFhKE3pNpw3gBibbBVod",
  "key5": "52hA3UKRD9u5MBi879hC2wXk7pGeRYthj468Wu4uvTQWL8h6we5jwcUT6897zWfugsguDP2QeXbUQ1SnRSkFoAbn",
  "key6": "4U8xpfmyVc9KYEJPHWrcEisKaBRrYUpkLd1VsiKq1Ync5BqBKya9W8Kce3vm9eYcRdYjCLVKiZq6ihCqFBnyZbeA",
  "key7": "4vegRne6HEpJoRbupqjnxmDxcsSdzGnffabMU8vdpRe9brE2GURM7ZfTPPydrMBpRMWzVW256M66h5viUJCSVHhx",
  "key8": "9KMUktNoGDV8D63EqABwSJL5xzTseCzBH1c9L1vcqobRwmd5ChhjSdsxGz5AYisfcxfqbYFJtktySYCvFVsrF64",
  "key9": "3ytDCct6MomMS5VS8SpssVyKNjG4zu9tE3x6vbvMLoqs2C9FoxbUGjnSZEQc9KRVWcEQQwxXonVdS98HuJDazCK",
  "key10": "4Gf9tCbGVt6tWF83LKJRcu4Rfid6uaH7Crjk9QDWbWH5nLEd8Dtih5wQDiTTFG39dJRb3h5hLEpaE6nPe6ECZc3g",
  "key11": "4fqHugUrfR7DzLg54YPd85VuMVAAEuATocfehxnDQ1duuyE1y3vPh3YDMueKEKfUiJVtRKGJUYursFFYHmqodgAW",
  "key12": "31966cRyS6EUz8Wi8cTWrpjyzo97878Uyf2AT9FwcecUSTUP4achz9tKYHyftcbf2picsyJCfbuG2VZ7QYBQxTrq",
  "key13": "2J4U4XCNNZMgCnL5BDiddWXRreu4GU3BzZ1HXGrux2uGmXHvfv5xYCLf3iD1r7s1cPxuYgqivihJzqqSxJojY2H7",
  "key14": "3vwBpncUCU4xXwT1qF7oSfC9HJ9xuMvRSdrF95pY1Hc9hB8pUg2PwxLPmJnNfg7DSb7SZzd7vP34xjrwLSYM7HWf",
  "key15": "3HmWNYj4fpqoXHY1qAUk37pxDuNJNvbK7EHxc3zDLHH9grwTf1CpaXRME6HfAee2Y9XaHYKz4KLDhUk4wHvsfHDb",
  "key16": "35KWDSNJG3DBF8EH4HqyNECHrDMUVfDdwrwES7aWRkjUEZ4QXixiHnNLq1QrLCCAafFvyEMQNkbnF97AbYFsi9uF",
  "key17": "ato1o5Ttw63KQQiMDHLiRYXwP8e1qtcG3HB3MzARvgarWcALUbR7iRLEEBRmWwRK9ebGDCAPhU65QgTQhPggcPz",
  "key18": "XCEH9MMJ4caV82KgCJRtij8xvsFxdWaAx3JTYcPtqfGc2ZMvoAqbxzrkj6mADt1EQm1MVYNu2mq9k963XvSoiZh",
  "key19": "27fWBVEgaiRFBQzE3iRUwV4mwxgb5WKP7AiEE2cmbGyM3K2J1X2bTRG7xYSdqiGNvzVexTNDLJmny9ZpN8i5jeqV",
  "key20": "66vFUAyNXBRzAM5Hig1Rx6xq7sseFf7UiVZHHW6WNUtjgKro1tdY6kwykfwELxxwCqvUfNdosBRtcwbpihiMPV9L",
  "key21": "2ntx1VKDuTLRXTusLCXBJVWww8Cap7oPFB7KMoBSj6q9FH4dW98TCej2ad7dBn1RFKtWPSoRfoK931XFzZSs9fTf",
  "key22": "42p6KW2SuFagQU36qZrebU6r4YBVcr6ok46vHkh9HAn8ogxcoDi6J82yMLh22MTRYtA3XbzDVrEjaqp5ecNhjLst",
  "key23": "fhtiz7E1YAVLA7K7SXAoa23Hfz6Ph44G3drgfeQr4HKigZ3BMiRnZs3PFXj65tRzEEGX3vvPsZW4QSxR9QMC42N",
  "key24": "47XqS78QY7xgDPXuRBoX9HoKdqusGEp8EyZBaBpakrjyp58NppwL7Q8dAeCbmyALQKeeK8cb2GmSZu52gGwG8zh6",
  "key25": "4ynXkyUzWxWJNM2NaAYQZJ7LCcB1Y1hom9HdDiRDZoAmfbooaN5uMmBoszL8NKZ97SGCXBxnKrigjN7A6BokSCks",
  "key26": "4Xo84yvLTSt2ig5VtKuGHrcNjo6jSnVRZ9LbSjBYe76ot5Xx8m6wdZyeUqL8Ljh8MEkeFufh443BLkxGseyRHJv3",
  "key27": "nVjzdXPxC1FYayR1gcoyQGtsNBh8w4hSaQMjd415Kt7WxmbmgLKBD2JJThfuusbPWCsG5ZvSAAGKDUEQ1RkTo3V"
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
