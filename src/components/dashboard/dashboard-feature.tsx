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
    "tJMKvmDbTyoSUy4KcsXRqXdsnn92b4KprnGFzMQbi7ynmJtYFyiLrRPRKZueStjuMDDVKQzXoTzgYiSBYV7Rz5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dSejtebM2vRtNHqNtD1kZF6fZYrk8q6AFcxzwezurvr5YcQ71qgbkou4Fp9a3Lo1ucW4jbEjs1yDe94JibDetiH",
  "key1": "jzzhqsCRgaxQ1vE6w1DW9vA5Mza8ojTnAiaRvNpU1quXrsGemkXCBWB2grqrKWJndiRKC7fJKsXtwXEFyEshP2q",
  "key2": "2J4u8MfqNfsj2vbnUhUyjNZAzwv9Wma2DWA78u4rmELTrKhUY85FeyDSVGy98Z5RN7JsGm4GJT1LcExdHvBJrhN2",
  "key3": "2qRwcyh5zCeJfrtyKAhPqZVo8jUTx1XnNGULvbQU4A1FaUGqfbmagntfbeDPPSBXdWqNtrQ66VRqPDEGtWcwDbEG",
  "key4": "4sAsuXdsYuu2nL7PtZ683JStJR81cm9YXF3EDxQzrurF9z7gFicw2UWnYWXxcyqr18Pb5qhJEFrYRT28tTtLypoV",
  "key5": "YXDF3rPqPGUr5hcRY96istqZiy7yzsE8Ggy5zWGJgw7Yeh6U9MhcsW28Jm2Lyr7aMLbEFUTduBbRxRiY78PKwWg",
  "key6": "2K4nnvmpQRtwAeoTfGsEf4h17ffkLGJUCEfz8dreVuyAsKDgg6XLeXp6thmUJtBGcjxq5WuS2gfWWC2qzAF3Xi9n",
  "key7": "RQNHqaECNAMwMCtF2qxSgAQFfB72Kw1pvHnMHjCpXByQjE1VZPbK2bXjcHoK9RveZCDidSL8PRGqvNScbbr62uR",
  "key8": "2sAhGjUMkqTg2rNiwggqgyguzjnAneppfHEZMuFdY19PS9mtSneAtY4FWyaivFqFztoetoNXN929GBQKs99jMni3",
  "key9": "284SuzJG2rQAnuFMeQXkXcptsa1QhiGkCRGz7AoxpHwJVCibdM7fk8QTAfxkhRp5nsPMSkdA2rVerHhCg9QXFQQe",
  "key10": "4E6LRZAPYxxUprsro1UsnqqoKsVEL1SN9ZjSWRrpMGvRhKBtdwU4BuRiYG7J3awznKhYp2ArFyHj7WfuDVQD3EJT",
  "key11": "5m5837nWDNuGTjKK7KhfGkg7e6tsf6oXDYBDXxwJ4eLiew5MXv6DHWeyk5U6biJRibBrGVLyUMAAVH9EZVbgrk8K",
  "key12": "3d9T79jAFW8sZvLx1tcZrxJE6uWphd1rGQ5iidhjh2ekjUGrE811ovkzyzfQVXhhdZjw4A738cWw27iSAyLRgEcZ",
  "key13": "3rQuTnoZEEzvbVcBXL4GZ7K1eKrN4o9AscGbpQzNLbzuBhDepGDxJgLf5zVPTQ1SqHuMzSvjQY1Vyp2cthpUAr3P",
  "key14": "33qDvgALCsQb1UkZdHD3PQ4JmZKDdaXZLfS9shWHoXCcUu1AH8NZ4RT16GAURHVWgj78JJo64j5rdvAQ9gJbfzY1",
  "key15": "4HKEFL52jrXZ9dYDL9oEQ22SZbHS9BCEfR8G2jKptbzYjqUNMZCqXJC3KwXhC5QGt6faPktjycmuN2VGafyh2F3c",
  "key16": "PxCzonJuEA8vi4EDmZiHL16F9JiTHF37H4vVUgQRiKMcrqUH8CGkRMSY5Ejx9y8cpHtca2otHv6PdueMk1Xiuwg",
  "key17": "kEQviKb4xbqVpK23fEBPVKdznwdYztusJG5ahSSaBeeTQWe9kreMajh24m6UNMXT1oJNCbLpqDqhmQzzoVyxNep",
  "key18": "3djk5Tbd23SPHpudxA933VcczFPmNPwPDiqpoPZforkR4SifkjtLggwKJbAxZN8fsmxPsrfG1Tpdyo8MNX7PwH9v",
  "key19": "2pYaxyikLSeUU4e9dqkAkN4amf3yQ1RHT6ZRAQ5YEqVLmb5RneeVRo4aoyYnZv4pLu43NQNn99h3JheAEjjRAHqa",
  "key20": "2baewSDiMXwoxha5EL9wMr28DmQuSu3HzvD2gCei1A8H8tQWx4RXPay6RXB3i3EWmxijZXRuU2x4wSAAfWKbUQrU",
  "key21": "YHYhcu65tnSZCeG4XDd4cQytFDr2R4GrkGnaqgUAZNJwQMRfzTCBDZiNBct37mqFB3GHdAsL1vsYFbmzt8w2N62",
  "key22": "4qtXxbUkoB4cryuiXAGFK7hB754oE4t24fASotNVpDP6MmFsbGBxMeSdZrp7R57isYQjYLCihozwMd2jiAZLpBcC",
  "key23": "49pAiGSbn1CrCVPk3bwD73ryzEdjkMyB1LVJUaVr3ZSuo6F7bg9R4kJc8KcxwykdERa4kUBPTBaDynuiqrQNpntN",
  "key24": "2a46FbPPKbrS7H7h2iAoNwLQYvx8JyhhUNi5c1A1gQPGvVUxmrkbzfhknwokeRNZAW8NZWimvDEKWoVDZ7tCZEtA"
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
