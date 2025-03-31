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
    "4gEf5Mr21G5M8C6WpmvMN1WUAooSAUmmoUTjQMyf5nDWhv2y6kDxSm9cEZGNPovdKdo1DsFjBzRbJNtoyivBG1ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QETn6KgFkVigdhqL72ieC28V6NHHPprUT8DyRJPfCGdkbiLr3o5f9VUmTffJPXA27TqFvYF7K9twws7kH38SHJo",
  "key1": "V5Uc7FJndk7HwkHoXx4negZ1YHEC8Qsqc52zECY4g1YwtCvx6YLZT9sovR6YUAQzvqwAqk9fXW89bBsYEKcfsES",
  "key2": "3KUJWh5e7Mp1qmTfsq2qFfA7VPs7JGwb7R6DwfMdzH5Pa9h4EmYhtFD3AmcUcAABNi7KdGU9fmrr4hGyF8388wUY",
  "key3": "3WdbiF6rrnTjJraPzQg7qeWPEL3Yr2ghvNoL6Rfci4MqQeCJdsFoBmAMPbxq47137deAECNx5cNYNPyMkPssEwwz",
  "key4": "3soEryzEmGcvKPBRqVrF6bHXGstAYxW45VWryH5iwFzSYDa29gNvtcZeFS7hnU2hjTQ5vkLsbRqpJgRSVTXowDvG",
  "key5": "4ss4eddL4eRbAK9UehXejYpK52pSdigY6WHVLYBnHdYjdaR7xTRp6V4YtnFfK846mPgLCsT5MRscn3UeWC1RRoP3",
  "key6": "5NPgauCzGEEiqEwZnbh3weZ1ywyC1c7HDj8y6FA2uaJJtqEqGNjp1EptuG8FQTv8EJjbuvW9hLnLPASa34w3TezR",
  "key7": "3z6cv4SK2UkUUJewEp3MnsvDCVduqBhSv4kGpYhymYHebZBQox1x7qJvJ444yxZHMS9V42W5TdyQLk2R4wm6vN8s",
  "key8": "2MVDe2zxQiEvTSHsvu4PS3FLeAWqxVsGvRSzMZK3rXpSKBMf89KVDv4nWo2n4ErcvSVPUYhPQrZGErNioLt235jA",
  "key9": "4P6LvnwJ1MPJHdX913DGRCyeBAghLBADF8zgAYG6N8d7LZv5iuboCY6KmPZvBnmShAmYFcmGq9f6NRyhrDTVdhXt",
  "key10": "3xZoSwY8ZdHMpgjwew7eUnvvUEw8Wy7iP367vE49eHjjNyzAYVuRudgGrD4KiYNjFXTghWJ1nxhTstGAgJocpGGq",
  "key11": "5gTW6D19ipb4nfMDxVLvN49PNYSHCcEEJKAJycfUo7WiAngLfxJLRb5t4FimY6k9VJue83iHsDY4gTwKr27EiKdm",
  "key12": "3RTxxpp6giLU78QrmKE3N9Uabp7qKYBrgcadvqNfGVJBjkXeQXnrA55rYWPmizqEA5MKS1zqW3gxCCM28Ua88bpR",
  "key13": "4afk45huh7GxffvmiVSW9kDzEFm5dGgSNJ6iKVdnVZgoNeFvtboSp4wsZyd7n349JbSeNCYHohnZZENpkWggxmGL",
  "key14": "3b9bsRBJgnDY4DeSZuvJYppzj1yiZDwx3Rbp4xNpKTB5kTd2yQxWvXBU7Td8S2r4SBZjfLCKkaGUcxgQ5zhsmvVH",
  "key15": "5uSvMy1Rcvwhz4Z4aRDWE7z8f59dEs66V3tqMcDnX34zUFwKJWFRssY1UadpW4XHRj1xx9dCBifxBZszjZQFMsrp",
  "key16": "28Sqa7saTSSoVcCJ4yWHG2Vxznb7PRjmXf1vtUGDvzxGyUWLyaZbyqiAc15UeXBTnLsNenqgWBi45obdoNeucy3t",
  "key17": "5m64wrFscGbuFj3oRkxkoaCBRfU43MNW9iszfr1U6FXtvjSMJ2iX925yAzWVrBxny6mPYsCKHyBRBKsh2mXPyeML",
  "key18": "4DUKHz86CirSbW5gmxDbMQd68T3GGswLXjqu9ZPBHA1gCuvgYagqJdmezRX3JGqN1vGUKEgJd8KoULrpgx2FkY4C",
  "key19": "SD9Hoosxn2prQA9GdVCsdUuyXcNt7e9UXiG3rftCp6AWWAUHunJb8c3LyTq1yWjS8Z6GbKFr8Gf6JWGayeFi8vG",
  "key20": "7wPMgkPDt7QxWoC11SgcRKfa6t8pW5EpchWFwXCRvi4uBP49MYf3Q13VMCd5UPzCePVD1zaGUkZRx21XJXhXUby",
  "key21": "3avscnx3N1VJfEit4NECTqSvcw6jNrjtZAQrBef76rZtKKjBxNd98qJV9mxYaApuQEjypnhJsM8a4QgyDayVi2gi",
  "key22": "RdGbMQKSfvyu2sNbxCVEaNvvacY34cyESmMW7aK2af19HKfcJa6woJjq1MfjBdZoesYFSr9da23o7yw5Kbi4UFi",
  "key23": "4yQJRTn25ATRsA6nTy49L52oAQQuebCcZzkqwMfHC6ubwE1HCq1Rb1LptzWT7tP3XjJih89VjH9ZqVUPrZfZyG3G",
  "key24": "48rongcsWPLip1uDrNPVf2PZrTsoRjntLnMRtUETVM4AopfXhGKmzoxN5JfbS1zKnM1h3rof6Q1gGWLJ84bsvumZ",
  "key25": "24JRcZghxcEAhPKiu1fSJntyYa3NfAveJoEfBRUoywrCbe5pveXkK99e7rM6yXzAJ4wdXtHPXv55MiaKWo2fMwnu"
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
