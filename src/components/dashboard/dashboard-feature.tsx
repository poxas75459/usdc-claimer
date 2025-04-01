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
    "5ub1xuD7ho13Ajy2yCjZTp6PebBtzsEtG1RostsZ9U6M8fyQRRMvfshq9PqEymnRoh5A7mS1bjCAaFs5SE5P2bWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xABx1a41Tf4zeBPX8euDWz42ncwZZ9mftj9hMo4JkhS2Ru6ZzaUeCXhygarzXm1tG69udjxadmf2KHJiRJL6xZi",
  "key1": "2fuB4gEQrmGq2D5d6XpHmu7tgo7xqvfa4ipxKdkP7KWXbwfJW3VtPfeVsRPQosX6hrvUTfi5osnngHGuan6VeGzy",
  "key2": "MWDhCK7i2cuzfn884cWZGSQpStpi7hrKGqBofHGRbyjS4b9kc4r2vo8sSveEynJjajp346K6Q8pCTiLAyn5CHrb",
  "key3": "HJLYbfphmkaVHn5qEvYEZeTGECsUFwdxWFxVhMd8vxqLPiaZUmisY53GCCFAdTxWLDYV1eH9FG4TTigxArGdkF7",
  "key4": "39r93NTnSSa4gsV8oX7Nhd6RHjzH41LysBAyQHFN9hFsZXRgtvhAW1oZsS6cpAwQx2SNpp8KszXWDn7h9be7pCRt",
  "key5": "3wFLpBZJSANRyWskP2fvHWQ7wZgcyW7Sr3JdLmxZkh6REYivdQJWXFW9n1P2F9FehD6mfhAmpMK5aFJfc2AwtPPh",
  "key6": "4LMyPPDrDYfzLGfLBU82qLuc1TZGhWMbFQrFApqBBDdwC1my4yV1AYfdkVxAv24o8JKkEJT644zSshn4H5H5PpiL",
  "key7": "3fSGEAkKgVyC1NsnLAnXW4r6yT4qwgiX78hdUh7d54zbN8DVb2nB7BKkngeyGUajDMaZBpoNMzdUwt3hTruc1nMX",
  "key8": "3nFXQfc7uUPmQJpKQ35K394HGHj2fdiNPLDHLEm9GFLa1PyYEXd2JFYqjQMXsiFoKnioBNHagvuvQAis2qBprS2n",
  "key9": "6hTy8v1BfamoGPT37H53bpD7geQZ9kdCJkDwzxWQB9YAmPAeZuZPNvCzCpmNSeKG4tT6ZucuWum8EdQQ1KB2VrN",
  "key10": "41Z1x1BMtNKdkaAr6LHfpbHhzy5UE7DmZA62YiKeM6bPnBo1C4ySBd6pzjnxJMsTG4rxycHqmhxdCM4b5YjwNsam",
  "key11": "5YoNwwJJ6nYiFfSxXe9nAxypuvp3AMca5oBgUbGRJrqF56euSrVXp7pySLmkK32qBDbphQUAKbLwD3zGuYXREFmr",
  "key12": "1yV8992V275Ta6kpndykxof6KdzaimdkWZnEKhEdfeNuQ2RvqshkpKozcQaspfwZez1Ys3gYCHM4dzndqDht1mJ",
  "key13": "2fjyR6UP2DFRxPWX8kZRh3cogJ7Ca7N9cJyXzp63M9AFTptZ6ind3B1LsjbgQCC5C163L5ezywYfBp5oBqBZtBua",
  "key14": "2u5MH8AnGERZqdhfwY63pfiyYooPxvPkC9eCd95DqqkkF3yLy8QRUcbN1XvrVJV9UDMGD78EvhhfQg89qpnYFWZP",
  "key15": "2ja8kjXfuKsi5Tpwyc9AkAphzRCoEvvh1aGWBSQ1cFi35wZfC3oEBrjKTB8Jw6Kqg2ucagXB7RhkgUraPWfp5Mhe",
  "key16": "49oLTDJvVD8sY7puUp9MuN7rZw3XSRt1HdatYU6SxV3hbFY6LZYabUcLFrmHkzqPunwofw3JVTwNLu6NHnrYksxW",
  "key17": "xrGm69mPQxaJZvcJ12cFYw4zN3PHXp1wWY7fXtyMSYGEE6h1212J5VUUuYvBG6WGgkfFwysmh2EizWWCATXi68f",
  "key18": "3MYM4fK4d6L9maaJYg4ZSStLiDjEEa3rU2P41YS8Z66UbdSWSKCxBxQU6RGjHKL6xbZBoLbKaHkhsC5zuPESiYU3",
  "key19": "4hDwqwvvf6igiMh5NfQNMLQBydJ29B6DDXTLAmp5WQYwQg2EjXH3XBTYw638iJi8YbnTDh6sxf2qLnzFGceGZ5c",
  "key20": "ZexnDk8oRDw9KA671aK36qQKbD6hDrpQigFkvYXpBfj1Z1hiUtxoB5c2NBRCDSksULQFya4cRqyCumgpTzbgzUW",
  "key21": "586cbtHN9b8tUKk7L4eGAahpGF2CrDryn45JbUeghGhrmQSQLwCcM4UkodVgoX2mrKsYqPjBnH3jbKKmpSNF4fVa",
  "key22": "4HqTrppiTx3tJtfcHyUX8PP2GsqrFjSnTjraKjHpuyyK5L9bLYm8wcgwaoUVVUzoYs54WEJxszv9KVsRSe9uSeh1",
  "key23": "qJR1a1DaZzoRQF5pxU18LdpDVifiM3QbBPYXdvvdsDqXN2uWWZmiQNqWLbqdZcpbiyVgKcR2SpLYM5dFkNs7AY6",
  "key24": "43gJiakYW7GY7iS7FJznnuVNLgEgp2Bw33gPyfybhQoKys9c7LjLPFmUTwxSfYpykmfBPy1RJBgVyKngZHyuFJaa",
  "key25": "x8Tqa3TE4FJo1rQLjLHbSxLBYd419QQjpUXya3FDNBeCMEm1wqmjR92LKTCZR3WNCwK7sTLwmVhX5kMQrHhjnyh",
  "key26": "4nwoeYt8hdX4uXRD3E9T8qUsviEiv4vpL4SN1VcRGPBPc1UP5MZuNSysek9pjZccurs6LcpBEjoLvoaFDiNtRuv8",
  "key27": "MrR1sDNbT85dLCYa5YsjbqY7cVK3BfsvacVKDuFc4VkbpCAWcLWQgisfRXcaMg8HjZh7ddHRrxECFFmKZDoPd1D",
  "key28": "8VLjTGybLUrWVfmnbCpSSjjLzdMdkhfmXRYWj5Z5j7YoGqGsrBUADx7kUiRhFc9jvFYozUCwPY8u2bFRgk9ufr4",
  "key29": "4n8nRDoSCG3ecsnApUFP8r9dAJMxhoWqQCUVKho13poMbkZe3WvYR8NrY1N3xzqSqouRDjaAx6CLf8h54kjZLucG",
  "key30": "3wsNSx5r7zmeWUdvWE5ZWhU89BqfbKQYdWH6MvUXkTJBd8ZHLwUThhLmt3o8oVejygFZj3b68ZN15r25qZKw8bDg",
  "key31": "4hjxPNnCJQKQyR3tSVd6jrpbw2yPttsLx2jh31a3tc7a3fnPW1qMCwTou6jn6KvCHiKsUL5mcSTSSt2FkrNHtB1U",
  "key32": "3mYAibsdoWu4izvfscbUvwuQmzefjevneaKLFW7UoKjm8pG2wFUwYruw7xEzdniJ9N23cBhWwJ3NCsrYvVQF13Bz",
  "key33": "4urXFiM59xY8swtfmqNeHh2knfFw1hW5KodQeg2VMKQEpLZ8neVofHdRWU6Sp6gV1CZ8ZuoYQdcSkNBKcPXcWLfe",
  "key34": "3NXjYYWq38VUavEjLCkKYTt2rzcjQxwcRTxWYyRJfNbw2WUEx5noiJqQMtPkHp2ctwhv6LHZ5tRVptFu7poMciXW",
  "key35": "36vTYAHh7CMpwoDPUDGWdcwSxVYvBpyuZKMv9JKXrXFqXy32Ya8KPmoJzAyysbQjeCyAazrQ4hUBAW5h3aduERdC",
  "key36": "5rxQmcbtq9ChQqvbUKmKmaNq4Nt8M2vE93JU6RUJpowY3EMyRL9z8vcAbqf8KWjzvdqgP2torSsiVeK5R44RYqtu",
  "key37": "4MrwNzHQZx34YPDnTjYatMDrRToJiKsAAhNoQZqBA1nEJXReGpyPsTBCNKt54jAn5uCuZp4KDpThYYLSbNRjk1Nq",
  "key38": "2TaZDqqGfrXbBG2oPoM8U942MeniJA9EB97ifrTvT5aDgHJBwYfaqwEfksWFkKyHTvG7wzWrH5JVnQBioBo3zxJd",
  "key39": "51bn4mNY2UyLw9nc3DJCqEKrMKPzHo87RAbKhDJsFnKQuZg9ma1peELYcWXtRbCqRqNpwwfd5TPNtUX5aAijqhuf"
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
