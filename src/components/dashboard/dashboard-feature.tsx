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
    "5ZKeirPjf7cSYYbVkd4D2kWsR3CdYquEYruF23yr2ayuobq4wRpyjpyW5RW9gF1PC6UfS6cymRDEaDjVtV5Ku8kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXC9TrYQGDdLkrUgPKysHmzCN11VgLcFaZ6pkBx4a7AyfWG8xbeN1bfc6KCGDcTW5USz4nNmHtRwuJnvytUKNmz",
  "key1": "2sSRxMYbdeuFjgmkPdsxo4eqCoidBTxUVGrCZundP72j9uG65oXfaNfNdpAbbvdVZ4gMBLKbRzRvw5QoxVaUxk7t",
  "key2": "2t44u49HoDRKUPHpcrbQuQupqitYt21n7ssUeZTFTGHYkeuFf8s6byVovUtBXNUsLPnr8qQSSkvQMvNb4HaWGEth",
  "key3": "35NCgrc3HM9Wg9DtnvBnc9BuYb3aj3VieBGGXwE7X7PHjdArxUSyWApRPq7KKJzE9a7Ncz2W8kAYmhk26H1rY2nZ",
  "key4": "4ke6urwQQRZafb5kpLTdZPvrc8oM6Bf62vEYqiWXAscbNMzN1MDXgk5aScM9kRHpXAVbdFWx5d2H8nFvzDdY9VdW",
  "key5": "3JnZKBxsfkYoXBqJCc9p6Qh2o7TFxJXn7BHQFY69bJMqfrh329N86MCU7Q8Sf3GWMpVP9JRcUjHQtV5TBpSkeDvS",
  "key6": "3GT1bxznJgmo9vhNCCu8ZD1R8XLyPZ8fvE3h32amrR9TC6NfKj63tLiyFWj63rren3LoGLEdJQQrcDg45eYHC9tw",
  "key7": "mTcFTPSGs7wV4QR9UqqTNvAs9tkBuUEvmm2omDp5L1TsBUe62u6tDK49kg67R3df4DgGbgpH4i7yMed5qwbbDJg",
  "key8": "3dicfvnQpB5N3jMdwbUDx8SArffctztL5VD7bHYP6yvNzaPyUatA3fMeUBnGSD9Ci7hkPrSWKzBvYv1EXTmFKV9V",
  "key9": "3QvBN2y5Ma6XSpb571KDAJSAbqKDUcpyVFN8KMnrGgiL55KPw9qDLfEE7CVeJWtesEPkKy2R8vLZUtWK2zm5trwh",
  "key10": "49nqouFfREmKzi6MmP8fHnQHddrB8dUUXmpcJ7E38MwELnfQ8663HmtwJAiHNPC26NFs83uAbxtvBkxJkjxTAqVj",
  "key11": "4XpBKbhRVt3jZpScMfZDbuZPNTXRAiyRyYWCBUsLnLDshxJzEFNy24KQEZJei2qQtJRuEfvksZziNaiPmcwmFGsw",
  "key12": "63vkPow3L5USpwxNceC8EdJymxsXzfsjKEkN91Tn6HmZ2ZmPMwVFTKozLa86FFrvoo4y92ErBQYehhjp38JND5Ds",
  "key13": "23opogCUg8miLi6J82jxoK8VwC2bdRqcjyDVjqeJ7tqm1sMUE8R51WXZpoCyTFHDKzspBpa3qCAwxKaB2D86315u",
  "key14": "2maDAUhDndMgZJPpvPEh5TBdVRAKkfXKar56k5xag6K3rzu55qhdySz6Vj4J24p4NuB6vce2MfSZz4ybbPya9cKh",
  "key15": "2pCMnmzrhvrVT3kHnm9yJ5mAe4AYjPYCBXsw2xZzQqmy8Jrtrqd6dmSPNYCzbpQkdPm5VXNGvC4JdkzfpnPG4pAh",
  "key16": "2iUCEjbqjJEyfN1PJ9wknSdvMuU8jL9rxF3LCmTaUBWeTmzSndaw5ntJDKjKVbLJP3sTpTvQYtztsb1r29wiytsS",
  "key17": "31G4bqJtqSnh5gDEocgm47XE9NTnvbwCnAQW3axXwmToo5LFG4s29U8r9K77nCCHRahgEoqCSfK7Q3wsG6f6hRS1",
  "key18": "Km61qEPWdWAULgq4sqJxY9NvpXWXTuPGMcJFXzTJpFHqFW65DFFX4Ek6HxAgfb2c7T2rsPuukBRj1C9oWHYf7Hu",
  "key19": "4dXciH2ZdUjk6u3iHVMyzw6CWJCSNKY9Hfb8HQBUwqEUQjs5ZrnKtwKVyZNsN7axQDM4sFUWFrzVZfKsSVfyt6Pd",
  "key20": "8zox9esjUNWxykbU9pbFaU9xH1o3YZ84FRkdgdYmmrcDpuGn1DpoVU2DKjVxeq1MAJUnxiTR68YcyA6d9ZaFRnz",
  "key21": "cDif8ZibQ2FB5kDRWEeLPfdCNPtqSJDsDNwwZ3M5gj9tA2CypQWNLbzAtowHorQoekM8gsZwoLNeo1foigfdGWr",
  "key22": "ow4f9cvvzezt71yhSzmyfWXJgCv4KY1Xh5ZYEatM3RZ2XaD7L5jFiVjhni25NAWu8S2BFhL7d8PrwJmwCwoP4F6",
  "key23": "4pTfezMKsU37bfFebmmVXM3uMWPcVuTwTfQDMu3XM3N9ZSPvFyd1SW7vzkMUtZy7mGBrd8YBrE9qeigj5XCFvABa",
  "key24": "HHNPTgFspr6b2Cq44YZb3zSFbXUnGD2UoAPqvwXbKVNaMjWa2DQ3mDDP2ApBzH36w9d18WasQ2mG25QkmrzqBNK",
  "key25": "oCNc7fqLSfwKmxexHYwq9GKMHYjoCfbGFVAM3kC9annmy9DYW5hmghUfyLtRqpRG9WsVKDQrYKAPQEJqret7kbL",
  "key26": "5kSAdPyn8JLanVNHbNQNreez4q981yDymSMKKpwJ8XWbLWMji3bWdwHmd4RkPXfKUPWvCQq1U44w32D4zEstYAy6",
  "key27": "LkNNFc2jd6gF5VwY6Y6ZKoDVW381BgxBpAWvh3HQBi1VDh8sJLmtXrMRBWo8tdQBDBFXb7af5DSvgQRh5A1RCJf"
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
