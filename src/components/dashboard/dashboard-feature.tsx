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
    "4moS8L9Bw2FKPBeRi845yAuwdCHB3BF3KEfAZ8BvU83QVaqkdue283MVg7eoqgfcFr2qfJmqNW9sKgLifYyFQxZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uqGycWGMyjneTb1TQwxhBQBnkQC27F8EGS5HeQz2dvY9cx1sKikrZtsznmjhyphNfz6qvVmKdejkpiFB9AKfdoE",
  "key1": "4DAYDJvwmVQxPjVptF3bfmSEwUTjN9hGs6bB3rThui6w6pCmfUSMXRiiuuL4HtnB7pDJGorzkufyL2oGY4DJtCR5",
  "key2": "GqcFdqVxUhUvzxSbCn7dk6HwkxhUQnfEVNkLtyArjr4jhRPRRbwrQMkSPvNUgvXX1p91eVqMr7YaUWKHomE5brd",
  "key3": "trY1XdQXfiWyoSSeYLDCdpCLDigBLmV1XZLbvkCH6Gb46pQDvMzE5C95Vt8hqzY7M72ehg8byM1svqTmm4moKxW",
  "key4": "5Uitbi2fNBBY9VtgJmA61XX3Pb4TjJ5ZSXrDspx8UK854As5CRtqj32JMwGyzyuDVrU9EPDbaCMubKi5ZnD9AV7e",
  "key5": "jvZiz3FHS8xsXp1GxxoeBY4DyKrGiFuG9QDWvrEErqhQT9NfMfutzJzFKMvFC924kTM3zMQrJFkRHd8RiuupMcd",
  "key6": "41FtgUavag3uZtDQmZPDHLX8zXcKNgUAdaqHQuV94hGBNxwgnWdbFVgcsSqTn2pAKPRytoyJsww1ShZZoxJgpjr9",
  "key7": "2wkaSVnJpxchsdarpGWwhuZxkpC9Sf4GSkavQZfaBiwDomtcjDRvcUhmvQMPGf5uwbPZLVfAiYGAshCLW2J69v1h",
  "key8": "3rfM7MHTcMhtYA3tqcRu8EwB2MYHLEbVinWjoXpKvnc1pPoEFHs2VXfbT6HsApzy8sCAFBApUzTGFXktwYgZSHae",
  "key9": "3RfEABxqDJTbQmjSpjXS3rtaSZh76fbUCo3QfVphVhYtt56dJQfeFQfrM66EpmFLubqDe8CZZkEVmtmefynYGpF7",
  "key10": "294spqDRuc7TVi7xGCu4rZVLCbgC1K81ayHjWXmtQ325BCgcfiFRFyDMw5AJ4oTxGpuDpgGoG9to31iRJf8LppfD",
  "key11": "3DzYNw6HPcK5TarBd78jEb6KWoWC69GMHypE5XQhfFRnvZJKeJbV15f1fYJu2eoMHLZVgLFKMAkNRMoSc3XAPKvA",
  "key12": "4v46HKVworYZusFb3FAeAa6n339BXicJ8jag9sCuuoYEAGHtZkGQtb4DFFn1SK3RCDesoyVeQrfvgUjvtUz8g1Hk",
  "key13": "3yPdBAko1Nc3VAyh4YeMr86VcqATZe8LuxG57VNmot8KjUouzTKyZ9ZagGdcpYxHcSDuLMH3K4cZvy21ogByXka9",
  "key14": "44Df3ZZ7Hp8yTE3nqTnp5ZkfJ2vJy93RCDZh2JRpV8PPUwm6twmD87oENREWFjsAKb97MmumQwxTToHL6Xm3ZJYd",
  "key15": "3dU93Aqxw8q2XckX92MC3ggCw1mKJW1w5EfsQB4V5rBwjxhWuLHdth7UPT34ig2ECLyyCpG5sgYh5eqT4jX4eMw",
  "key16": "7DehKm1xyMNfhHapDNd5Edcs8m3mZcBgQPGvdG79rngkdo2si5L1HTSpnRndDbyqN3QeDJtge6BAEjGWz64tGiy",
  "key17": "3vnpqoihBYM68BznEkbUpJsCgk2X3WghgPS1QTp6PFvApLeb8Prkt5VfnukHoMU39mY8WT2JewadsVDSPc88oeMA",
  "key18": "3ugiSGr18GHMjHuzCLAecuCh8b9q4xssnkwHNLrvX6YWk5u1AT5J3M6dwV99zjbXzaek4dT44MaEmhUywH2rzsQ4",
  "key19": "2BryququoefdPGVWC6WBPkbqQ3Zq1FVfYdDiEwcK6mCMazqdYtP7oSwTf8XYtwVksZV1duDjTTH34qTLYCX6DRcZ",
  "key20": "5aVwZxFDWSvpPeLNEgyqARgFkMvZ74Ry7336tE28cp8VqNUcsRS93vVkxHr3JRga5q8ty8D4p8rHtxcZtAWUAfCV",
  "key21": "5t7ktkU5wdYBbQ6wFbDuRoyBjQZiizQQMSXKfU7NMQskwgeAG2KuoUN2YosRyGqvEkLx48bpFGRRx9XqxD9unHie",
  "key22": "Hqptfhf69GcXGXbDfWqWYVVi91CBknVxWWmuqaGh967M2K7JFacMB5TbkFr6nbUxxMQoXbd7c5gpi2iKV3v1eRf",
  "key23": "N9mha1rAEVucr5yfL6iXgUdmUbd9aX29bg5fs9cZj3QXCxLVKUhezd6qNyKKmNQViwk16rGeXYh7BuhTZyLwVQa",
  "key24": "3pMzaokPbFhZutYPQDiD9VLsNKGhQYxYSCnzxgotVFuatnigdhTV1eg3EHDDUMexPC4FLUYRP7nAki5fUvUA4Hth",
  "key25": "2Tn1yWauLzhdSSapupPYjDVDK9KotJ6wkp2EyQ5RWTVQTV8tujxXz7gE17B1yztMqVhnHuniQ21Nh7zbavB3QrW",
  "key26": "2Ya1hS48z8LxVJngsMMXxiAvCoR4ndxEq5QzDjUzmfnd88PoA79FeKVfhdFGF1N6rG8pJwYG1EymNo6Tn4UtUZyM",
  "key27": "qTu5NkeSLjV1FBRweuFo8Q4T7brkoScVsQ67vqMUQiKDXT4u6JjbzxW71yzgRcRBRAoF8183gUSpBr12TxB3x9p"
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
