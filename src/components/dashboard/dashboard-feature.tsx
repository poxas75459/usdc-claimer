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
    "Q9REPxDZQvT5ACJojt4yeoeJLTfhug9YrrJ5k9Yso3m4un3PqYYziN4VBwjg9PfZLw5QA5chC9MB7zm92BQ6PVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEzYv53mmDanVirCuVVE1bqiCBr767bToUrHE4ptu4kWJDQP3UDFaQRGK6jKBaDCv2FzLuoP7s4PyRuJa8Uu7u1",
  "key1": "3iEgBEXRfFUAN7WtgtVsM5KoKDGd9XGSgaMifP72fEHyFuseH9pjekWAXcn1oQj6xZs6rMUmhSY6XSRRagp6126s",
  "key2": "5KDDW7QTZMXXn8m82JHMsiofpekiCYYdJ1m1UpRkustj8GT5tBMj3QCAztUPfPa2umiVsMwmCg4iHN19xhC7F9i9",
  "key3": "QtD71iYdWLvRNSDQcLAiVbxrv6mKngE7wcq25uVeGK7MTYWUWiVSjzdEQV7mmjwKPLPstNLaHmcdguRNyCcpP5a",
  "key4": "2uJNHRF7RJpY98DCwUnLaAY51y5Dcupi5VoJLT7TJA6WN1kDSCjg5pPibWsWWTEVGJ6hH8Vnih4Xfhsu6e85AoDB",
  "key5": "2HCr1LxrnSEYFqAauvtELV54Hky9BSbWJCQ5r6j8f2YrCSMiMs3wybDgUgYGC7v6rki1jXxuH23BLxwgrPofBnhr",
  "key6": "3qzsBEQsWuoYkdP6gj97QXYF6bSBJw83iAnBmxN22waZAgR2QGjKgmgHEVhNgFbaMrLszxrcjvU3TVfshc4ta3Vo",
  "key7": "FJ4zcidV8xQ747fiNmn12xw65Nbb3KbVGfxioL1EzZqK8VXUuqHekP3mwSpQcwDhzdXmf4a3TV2KfgRg5JoiLX5",
  "key8": "25R2TDtAH8cufsRx89oB2gPLCwdSRtUCDR3VPMjH22ake6LkZuBFdU4urrFDeQWvRf7fUoWh98wkkog6Jw2qCLgb",
  "key9": "2Nj3gkh8Fnndar4sDTrccVhopLRuUQ5hnL1v31Gaaoy7meADGWRMp2sMbj2StwWBQ24TgQc41hGbdqSoMf6jvHQn",
  "key10": "42JqREngeW1dptqspsuQRSZS9XzdR5kVzF11juityR7BgrhNjtHBDic65F5QcwTm8XB7kFXVqkaYtbTC7e9Z9ycx",
  "key11": "3eHbMJFV7u7HViwVwYAkp9ffUZ6PnEsgfrKGzP9xp3x2U6tjX5VZVkJfqWL1Ye3RAcymtobVhtE7VgXqs99pe7uA",
  "key12": "339sA1Yteb1z8mH5uFxAziQmW6i3GixSoayixziBzDVtKW81jLphcZyPScsz651YCMwBMtyg8tM2DNm5RR3xRAfL",
  "key13": "4AnKsWnaj8TeiUqCgFeqZSxqX8kpU9nHsxPQ1gYRwF51773u6tHEvPn3iUe4GvwZZWMi5baFuD3MhvwviqSurypU",
  "key14": "3Yx3G5XACnaQicFLGDvT2Zf8DGw3hiKVSZN1EB5vhxtjZtp4zh7o8s9KaA8RvVJXHrBsF7CzPDRb2Y3b8NgmtzyC",
  "key15": "3qt9PweXb7modw6kTMB2uchrg8QZ7xkh2zMcmiDWG3Jkxdy835GrroiGVQakVR75xrHgrjziry5dPBV2rYj4Ymq8",
  "key16": "5nitfaJERNT7H2zx9K83vBV8ZsjQJMdkMopq9VkxKNgP2KxVwWuVfTGucssQGqe22ksQ6vaWLBt4HcqQgdhpshhT",
  "key17": "5wVGQ2BsN7VV3JV6YkeoHY7pQ8VNuJE6pHyhF249YyZUbF9aPvk4L2nkfowhrpYhenuzwfb3WnQdwktf7MGL7XgB",
  "key18": "2vF4FuffnqbJmmRgjoQXXfGPUC4oPHN8owfbftWXDNEq9MLy1bQi8W6AfuFdFERuVqJqWnkyXv8NryX4wYPp23ke",
  "key19": "MkqfXNMwM2Ve3f9jKGjhfS7aQhb1stvMGE5kKzaYoCkU81NJMPwthSVPWQ1AGjz4SoCwYSgHCi2YBErS2vy5njw",
  "key20": "4Ypg9gWZnYfdcjyif8Uqmnvme9GHuaZZiiHfntsyBYpAZQfSoShegtgGrS5vps55mr7bibM4Jbm6FUSX4pwcBfsw",
  "key21": "3zM2443PfkG7CLo6DjbgewvvfmXZoHp3afzK63YfeC8LFBsG4VczPXDAxTgRG2zGDycvb3znwdGErUriQzoR9hG7",
  "key22": "3fKw4e8jDKf1hP3nEYPoLeHtcq6nzuar34GKBfeXRX625dL5adzGzdQri47vWE71yeknpmESKgE49T1NdQ5fWaVK",
  "key23": "LTqNjwnpdrCjwHFjrDPkjDJokhVv45uLH1YUPsmSuP2LE14Pe74ww64Y8sACSBD2BJPByZSaFNaTWmVySUHVwts",
  "key24": "TpqhjwgeUWGPuq3QMTVkTYmjYtGu1magbjqiHK692cyNBgB4NMgwAVg2BkYLL4jqsNoEoTLNhAhpHgGiCBUBDtN",
  "key25": "3xuuykciS1dK9bsFqhw8iTyCqniPtkZm3MWUJof12BvUiXhRsa1necsmWnrRgAnVf6U82JYw5A1WbwaS1G8FrpLa",
  "key26": "4TnDXXPFt5BovkmmHQuvuPY89YLP8wREazdP7AGMH7mw1qgGJY5dtDQqXVAjdxzafwi9NspuUH8yQqK4wZZviW4",
  "key27": "3dhRB98Js3GLBaWKkUzzbBvcv54Ae7yN1g4DmC6L4bz17U6TkipL1QBjTz8YDPn4NpFZ73Vq8BYpsyRfZFi13T9X",
  "key28": "5rVnyHi3quQwLCgXs3kH5C5so6ZpAqL17ubAHqLihL6Uzt8FtSHZXptXBwLuwmB19hnseAgkAgtK9v1ciUmrgkPU",
  "key29": "3S2o4yR2icbo3kW1LBQG4pS7tJVvrwzPRpRE4dgWLfnLB6yg4gHsnbJKtopSYnBcWm8vFcfb5MFm4zvD6Ah2hn9x",
  "key30": "3zRXw7vmpHqLg5rGmZ1cKFFj81nQLCA1GurcYNHhbxEyaiRU9BMqCFJa8c3Rpqt7pkhabXpxj4oKDVv2KPJGDJT4"
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
