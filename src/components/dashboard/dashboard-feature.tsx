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
    "3NYkaequmxC78aNseEHiV4kt3V473JNCCULzNM7hzkFEyJfXR6uEZTQDWZPWqq9MPBYRSjFn5oDxGCtw7xitMFCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybuWwZmL8DEWbe2rgk294VpvwXNuayQAs1tVVT4w6STkZFy8zUb55PJLHtg2kzz8Zfc39jmPuX8tofNoputHXzJ",
  "key1": "2UEXCphrCsUegLCBYjwEt5QXMJftDXoQee4rfqYuM5sfs6hkov8rY4rUMcyYzfFZPrr3eX25NKg5VwLYG3JY82E1",
  "key2": "5vyVr5zrpxuQbmues3tgtH3usbVs9qBuKCiNBQFWgwmGCPTCEoeUt93g6kYM6Q4kuhqHbajKqG2stAZM5S4LbpFo",
  "key3": "biJxjGhTG4rxjGEZQCLxdZhB9tbD3Hn8QUyA51c4vddQNXgvUEZ7La3cKj1dTBWC8yQvGbkPWyGQqZo6xoDWUt6",
  "key4": "5wUXBf3yveVY74pDNMmPoDg3U6rb4CYRDr5Ws55bUZKUJ3uLx7tHqKfekMiB5gjBoyvCPqFoUbNFVhmystwwMUoy",
  "key5": "555mfEQg97irXfEK1noTM5R8TyEkvkWqCkNMZYErsZtMXupkaJg1CHbGs2DF99no6zrWD6iDStSZ4ZduYBuWQrPP",
  "key6": "3KuQXoBp1LhV9MreuCrL7JhWGWhxPLkA7yTzswT6LaHp3YFq5KDx373xzCvt79aNpiLg2TxKfLFnCbEep7uS8R8E",
  "key7": "3MM9UayJBXZBesiFVywUdeDadZ1eJZK8TPKqXP6Tf5ZvBv7H6xKGCWpnbBvpannGZdXeecFV8XVGyH2Rb6AyNdkG",
  "key8": "pdX9Hk6J7uw9dk7XC2R8Yzdxh7tw4Cz741vrRT74QPg13FHp5Z8GhCZMcTyyDZejH7uqiwP7Ye5FRMfwD6dfR17",
  "key9": "tJFLF99A3ZNrfphxqVHvwqB3J6F5mCtVr6dWjbcXSZ5t5zYUbgJnkrPW5iDFo2aVbvgxJ3rL4XTumRZXyUqv2aU",
  "key10": "5U5p6UNqDg5JnXAz94Jw4eJCBiTSzNCWXxy8hrNwvefKiehnN9JejvchkNBBHS5Fix299fqLd1RpygncfRc63bHc",
  "key11": "RZ4k3i8svaasEriphkw6NgL8914YMrMpYXk2Eo3YNsMjRZS4C8Ck9MJATGZkgo1QvzdVmN6Bvrysu4KTd7MXcJp",
  "key12": "5aiZ2MJueFR5mQyytTomBxtr8rD78xMnYqCzgpsnTmTZRMNzhH2rQ25YhvMnNy2Lo16RnBpjn5mzxUX4iZRcNnb9",
  "key13": "3XSbF9f2VNQJwZJN48MxYFPpYa7nBvshJBhJGZZbWgqyxRtVirWoGKKu8KuofmTbfy7DMqFTfdfZoentvsTwTWUw",
  "key14": "3N2xcaiPpCRfeFh83TLZzWXKEJfCuDwAJV5zGY39CJJdEDxBAZm8GxR7rZuJEdqb7qSBBsm4eLxCXQD3DwmgZbYK",
  "key15": "3brkFFXuufDaJUJcWfJ8kbUZ13jckL8i8MUT6zSRSdTRTzrYvowErvZPCVbaKnxdL31yu7FaZ2NVYTcainQw7423",
  "key16": "4DJBZFdeMpo3mnSpMRyXaT4Cec94qrJDd7jxedP7ofj73BWrjNDJ2vengF9SSRVssoyvtjuobVGqL7ALAeAQVmEY",
  "key17": "3qASe3W42kpRkZfhUC93ZjgU4x32Jxf2KsGvSifqZJKtrjBnkoPdsW1j2U1SnpcBWoMFjubUMoroguH4KxjAtUYd",
  "key18": "58xDhYTP6tb5mwZMm7ktgFvjnfshBJoMr921nKqauRQM1t9Dx3wJiKiVNF7LqG4NFLt575cofn2UHLUxXrT15Dvd",
  "key19": "31KtzooesFW3Ddxre1RkFhAx59GFw9CuZf1otu1gN6cf4c9iA5ZDAsJg5ud74E8emBMJFSNAS4kTDsMqdM4bRMyf",
  "key20": "xdA4Hro18mQ7acDySK6j62CV5R1tmA252AAqm6KhQJkiqu5ugj3KwEg8oxaqppPFT3foGUKSy31XyLu2mp8EQdY",
  "key21": "5r3xTpULnx2g5bAUHKeduhWPtDb7shyJkAHmQPNowY7kdZCF8dV4RcNRV9EaBNAfJxnD5Y1B75V9CJY6jA9f2Rvm",
  "key22": "2z378MaV2w1t5n7zpGFC8qKenPHVNaGVHc5oCZ6eA5nKDa1rVDDizrXsF2XhehPVakF67vNXn8F51mauZhwCKLe7",
  "key23": "3hcsBkRR6j986VUswpmCbBjEonEq1tSiP2YQJjLUx8pcRy3zi1WfLuGqYdwMKXqq5nEc3kJ4NeitYeC1HazvtqdY",
  "key24": "5P7dX2oR28e7mmjQJzFkFdzfpsY5gwR91zNwiHv2kcwyvSeyuSRt6My8n9ejmUhSnFQne7uawvqGJg1D9GBiJmN3",
  "key25": "2Dn13yAFJM3ooBcrbsJzvRMVEzy2o73QBzdyY3iS71iwbij6Lpe9XH34yUej6abs8oFAThvY8f7zdsEmTkeMijvC",
  "key26": "2AyL8STS2qVhAtgkxfGzbWfkeJfKeEE1ApMgCZhE8HdbzjDKMDYYV7DUodH2TqttZJ2dR5GMWZSaZkHnkfy1kgvy",
  "key27": "5FxwffEncHemJME54nG7Hvb9ALV2uHw8ghUiMcLmPMHqYZZihpUHMu7MEmMTRK6XFjy5frKRmfkyjTGPdnSGSfS3",
  "key28": "53ZcfdqijpqfGAt8CzBSSnDx2S8HtmV8Bn4qrGUxZhcUmedriBM1arWMvnr9fgJGx8yyjeykomoSwf7n42dTpC3T",
  "key29": "59DUHUnhbd5BngLjAZf7Ptd1Sng6QKNDFNVoKx1PhqdJU5U5oh2Y2DW736ysUWkWbZhjnPwiknBPeX4rEKE8qZtF",
  "key30": "3fi2qECuwXqFhgNPdeizjgy2T7j5TzFLkMVwcuZh7DgniyNJaVXvnqusU8yvPVnNESWLi89j5xLqJKoosmAr7gij",
  "key31": "2GPRqYyrdn2tYmSVjTkeWipYWia4nLvcN88g5n6omUVmyif6j9PDUS1qpGbwXoxDNnyrfoqScNcHo7K8aMARq4pn"
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
