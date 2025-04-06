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
    "5qubGm55Vaps1tAro5gxbw8fUNjfagw6Tnb1sVnn3oEjQMWiMbgCqXgXxE2ayitURnnETMg4YDLuYNdAB15czoW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kanMVMhMv8qm6bADZE5igWyvpbdmB8gmy54q8cFsybACsUDVvFkLod8t3S5YJrjKr8ZExbPnqPJEBkrF4HrF9Pk",
  "key1": "2TMgX7v4LCipCv6qMmN8dAihTxnrxdBC35W5L97HuFhKBwpkTAtPnGeMuBdQFtEq84UiHtuVaE1xhmFrNokLthWh",
  "key2": "xcGDF9UVSk8PAdDRmUD5X1zcB2mYNwvzKVP4f7iCTww3MKy16MoBjADBo93XA48yf5DDHCHusT9Rs1ATpyp5aUj",
  "key3": "4ts9hPYDv43Vf4Efchf537gMEMgJDkdT8tK9cFUWa7UQ4D1MsahfBCTtDQWSgwo7DoMKviXfkNt4udbREgGpb917",
  "key4": "2yC1Sej7bsydcc85fABnGLLHoLgnN9YRfDhaeSvUHnRvmqFV7QY7ziurKsEWsc7Qij8sY528htiBbYpPFncY9Ry2",
  "key5": "3mDvck1EzbxE4VdFh4FxxSNM6io6pGSnFwNkZmL2TuMhEZiwqihkstmv5uYm5EDxVxadVinVKdxVerWV5uRjp5un",
  "key6": "nTjeNCj8FbM2PRLwXTP1Q4K71ikNSrZDm6KETxpSZ93G8TKY9MP16t2uhZZWQuWCAJFhZTcp6xFnwcApoZxnpPY",
  "key7": "5kwSHAqzsQRdNn3vtfwoLDxbQBGLhGKotGUESrMqmg3VxZM4YJmiqkkt3bF9BhrqJRhjf9kzuMaWBNFHnSkDNtzn",
  "key8": "2iWb2DwWMtH836rBHSas5eevKFgjZyw96ehryubrxW5M3iBaWtcU1BBoJLDMhu4pF2ZuYdNaF6NnP5gZ57Lz5Pvr",
  "key9": "2wnCiJuFFUekzuom9CH8tUUztMyPEVhQc24Ksh4oX4um9ybkdPyDG3DYifKWPqdYYA8sV7ALc7Bk3EvpAKJeUfa6",
  "key10": "5RkCaN37cpBe8wdFuc6Hdzx8RcEhd8sZM1DxG9T5GrDoowrAZBPZ6XCuuxuDTjvWk6oZskZMkbsSmAM3xJqCAb7Q",
  "key11": "4txJ8xqminKDoFZWfdeQn4egibwGTGMZendeCXCHtaXE2TQDwkUUNyMbgNESyxFbDoaAxZksTDxmDsivsEqgDnNU",
  "key12": "3uasfSZ9LeivknGyDSJxvr79vSn7Napv4yQmVYA8zB2Aw2ow2sAwT8grNt9iasfrfTVwP3NYgZYWZj1Hvyu8taeR",
  "key13": "3ng9KoqQ2szYoWgUDXzQDJFZvrui7RxL2ZnmJEgM8vJ5GQdCX1LVPVu2PnxPSutVeUjJLSknxQK8MLzvfQTsUX6K",
  "key14": "4EkWNY8xEC6rHAp3pAxZo6ZiAmqHbWALtWAoLFg2QysTbVyabYtGYkfYfHXRs6BLuGcboigRowTp72ySLvxw18gA",
  "key15": "5VfQXYFp1Tv6ya2gKXoj8jS1MSKHuEuR65aPBXDkh1pYwUy7cF8qrKm7nLNeoXqtFwSuJVVeFNCyma8SiozQrkmw",
  "key16": "4sYmKsGAGZ87wNTaSRMuV9msjCQE8HzZSs3upvBj5Fn96mJFPj1xakCcLLxVkz4m9rsg5zxew7tebLZC34QUbEN3",
  "key17": "5yEjfMyFTTjT9edmqu4vYkC1iij97pb9Nc4CNjkMpJsm1Bk2R5udTTm9k1iiHCUNJfxrayANuahwWqHPyZSExwXy",
  "key18": "3fnuUS87PNRUauMk72CZ9KW23FaPPQuf2Q1hHnKACS8RDYLawwzKhZM2cPr2SxiteZMccqkV3BagZ8GoXHnJXTjp",
  "key19": "McB5KHs4p4UT2Q1RZdCj9eAMJEVg3a3X7Fha1GCvg4kz7SjC9BzrSxDobjksXLbyq7iZYMxERzfdji48sNrtAE2",
  "key20": "3TzX32faH7WzkTFvqDVYTaMctRH4MQZwKr7KwLdB2TGF9n9a56QY4XMPDBfqjcPN8914gVKDiLbuywqjKfFy7E3",
  "key21": "3t8TEdVR7Myn4qPy5rJKwBZLGmp6hnukp353rTbM2P9NNuK45JUu18uqVDFfrxg6od6ec6qgeEi3onkhamSD1c1z",
  "key22": "21ekkCSVDMzppJXTHMyT3Fu3SMwDS8CCHLdm24rhUH1wTCkbChymUnaMnHYUKZ54VRnoZSTPQX41ZcJKsjj3P2oR",
  "key23": "44gBTNyyshMs3HqVZF9u1ZXcGZYjF61P9afHuzxfbWhVxgJXaFN5A4DR5przQGZTCizB7w7MUeskbqwou975jZTA",
  "key24": "2s7xC145fXxPv9fBud3nQYCBy3PejFrWGdin4dUPVopDP5WwEcfkshebkFFN8Lo1UZRv2mww6R8u8rhxFHiCKrcv"
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
