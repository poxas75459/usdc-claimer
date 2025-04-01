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
    "3oEBchZpfx33ZAa1wcTxpNoxk4Y2HKZx24PUh8m12MFgBkky2uETB9i68cUnUzSrQy5xrsTD2p4cuzRrBZvLdH8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdxdKZR84C4UMxLk3rc8BAtg3Xy1dQqspYYUJDx4vNdQ6DTqDo4JTMtoUEQXg35hSWsrCisedufkAeFtDyFL1HC",
  "key1": "k93tKN61rcj3cwgjZhyodZBzBSNMmAzjUAzUt1vo9HVtZt6nq92cJFkh3PbnGa9gG7ZkXBsGhW8V92NgKTCJ249",
  "key2": "4UaNyixoBkp9Qg28KdLC3SnhFvJNz4TVawJzJ5aeWhaQ76gXF3N86fdPHHh9KM78VBFdikZR9kN8ffcAXwgAG6F2",
  "key3": "4o2Pw3W9hgAMnfWPYkQmozD369reT2Pw4KgH7uxkg7AmgWPMUe9gPyfLa2Wck3hvYuhKHZ8jDMa2JAKTmAwHGZs3",
  "key4": "4Nrbatht8dS9cAG6a66RsjatQhawjmwuHFXPybXvUZEu1wRMFvwbHDfzxukEEUHxzByT29DxtqiRjvMbAeS666QL",
  "key5": "5zr7oSn6cKRZ4QJGrFYf4a8uZHJAM3kvheznzTgJmZyxB6M8CwXQZsTZqFHSkwkAAnttopCJ9JeRFpP2LgKgLiXh",
  "key6": "4NyXj4vxHMbEp1Ms4JK63QSWwu3w6g7ovZSm8pnWdE6TKPN6YGkysXRfYP1ivPW2DQz95wGwM76ERCrpmYBG7wpH",
  "key7": "3aiwFC4TA92PFyTAwSWbNRsPE5T9QmTRDrLdeokyMXqeMm9EgCmUwEmREHk54NdwXvuzvzm7qMCSxwVwoA2WPnQc",
  "key8": "44f29UAb96J9Jy75j9P5Eu8eoFJMyep3QQr4AXtEKaBP4AEZqch6H8YovmPsyHiPfESimkhZZM4VBC2e2dfBb25Y",
  "key9": "NkU5p1tsHtxxseg9b7DZUef1HHse5YjmAazkRjoCo1wWMUq9Zc1UVkVKGEhyLA4g4uSPX646HW2nxLLh72HUGiF",
  "key10": "5196qYsMh3i8KZifQPfUPbrp94gCthDju7roRisaCf7hRjzAxon2bbyvvegVN4Umq99nttKUpsSBLMBMLkhn47QM",
  "key11": "4TrZTfpjKMLQ9zHRK8Nsq43kkUM4W6v84yzGCgAyZ4J1nyAoucJ6AnGdridB83Aed1gVzmgwvpB1sgmh63u2ed8m",
  "key12": "23o2aQMX3ycRce17WKNggJbzmVNRqLq15dgovN9wGDD8GCbveTLVpcijADpaQHDvATJF7tF8Mo6YsNbqZzHxE8HG",
  "key13": "3znDSMvPUp97G15rv9pA9Gm6z16vLwmMgTeo73Bh6w5P7UTj37LBpVDKHcQoAS8tAaXAzjFE48KWUepjdTtpx5S",
  "key14": "Xo1XWmTZpPGVyfNAeQzVhwSiiefXKkA9uiZPQ8MXC4exLYSbZf9NdTMQqHuPoRS2ptgKccXT3vQUTmwUkddh36V",
  "key15": "25whNaUSCA7Lpys5QfzxZ3mfr2HffnQtjpv5axKE7WBvAY2V3AZLttYzUnHqyfMXiJwxNXYud96fwdmyZ3YPRdYv",
  "key16": "28a1cR3GXjgB6zm5JgL5Pe58RLc4CpAWXoqAbuzD1t2WHSkRfw65BPZwnLoUgp67HzsMyzeN9YSQHe1RDANoaczg",
  "key17": "25gXJiw68JNjjSTb8MfcyJeUFsrzZreyekpvQpeSie3L6qDxzEWkHuuUoyNV4v9E4CCuXApkETyC61VRrwKsLLdu",
  "key18": "3iMZsQc7utnDvXfVsketthpwRypXv1yNfSGvSstBDS7zCGDFxnjmqfYCwkGkXCWB9aw5ZfnKRtb76yg2wFMVDoec",
  "key19": "4rvhEQQks3uyusZhR6R5inJ1q6nLcarYkWCyJ31Gy4VGphpS7h7Jf3jyb9fvNxGfkWcYHkaN5HL7tJYxGQe4zRiE",
  "key20": "4EJdw5tHc8f7tcPJ8jysxmtM5kSF5yBcaJKcmQH1ySeqNH1seaSaGcqx2weemZKmw1ArV4dDUY1i3sbLqVLiS5ag",
  "key21": "4WwcyTTtGDgaAQiPoYnXcFUN3GCcxfcCkANQ9giyG2bY7uCRhr4c88eMbrDMvxfFCtMjjq67n4kJ8z2RBeh9TgEu",
  "key22": "2XD41Qm8iygvzKz2EZJeVk8ZHEDZn76k4EN7EcA8da9b3ojGCfxALQkzXfCoG5CMP9cjSwhZS9cxZF9JmT1giQ2j",
  "key23": "3xCTuwWQQ4Yxvgxj9sKFPig18aN987iX8U6a2EeoCfgJEkLyzadYLG76y1YxpP7muzDgNgeoDZ8MXEi3JmfwxivD",
  "key24": "5DtXPJG4ER6hSdAKcryuNxcdNd3dZfWDoeHwEjPNdJtz6GUGzhXVMBRtpZsDcq82LMhjCFXtMS2nQYZvf5z9dm9u",
  "key25": "2mv3nDnbHhq5KJQ5kKr13drDbknTMAwzKsgM2Pb5f8uy6b2Hxu4eaC7KKryWQ9WBYyR3thoG6UYzyEeCTHK4Y15j",
  "key26": "2Lw6A2VV7WfBpi1oyQsKMEioeUCnbVjNV4NHr21awHD7q6dGpvErF1iZZ6NxS6KGo2sDtUo9HERs7gmxSkavJso5",
  "key27": "3qiEzkvYLB2vG9KK9DfebQmL5b8gwTXDeUqYuK42iTDwbhAov719bAPzzanwQehEvrqz8r4FkQke19ziJ4J4S7gU",
  "key28": "3dsYAoytaxMxBqGdWi7xfHVVRAtgA1gFqD9YgTYLfJb8L9nbTRJRFwaCABibLQz9KHxWBHoUdD7tesrU4wdUg76K",
  "key29": "2oi55iLEFRZxt8cCtbdpvy7Hx4z4dPsJJvUoezeUnkqweNeGMeDh2oW3eQmf4hY7zg2catfVyvnz2Tk71cDbKwaR",
  "key30": "3cbnyq1HznDER4btESwJMS2qMCxVtMXy8XvUWpPRCPKXh816sQ3emTvcNm9V8FpkVvc7eJycEj4x1ckoL1Nak7zZ",
  "key31": "2hcAX6ApVmW3RNF6Me8B9ePs5R5GNjr2Re2dtGPrGw4VnzaBEFJAHbjtFwjyiKrzojYsjrrnUSqPPoo95kkG32Fh",
  "key32": "4Yrd5tNC4pfTSUMNNbu7anVv2GEAipn9d4Kt2ruNQurSMmJsx1EC6f9NrpF2D5GZ1DgMrhpeJ45UvpKjUr34zLfg"
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
