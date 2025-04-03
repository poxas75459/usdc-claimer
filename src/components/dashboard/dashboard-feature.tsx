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
    "5aSiAiqBFB9LESXpt4YGRBqtVVWECg1bwMmjZdtQ3tB42Z39JMuBKQBUcV4wMKtPiyN1MzGgmwbg7HhW5KbMvzT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXDQP7gZh5R65VTD7cTLjVKtUp7BZStCTUH7GJdn1cRa6vwmMZjbHAiuZ3HZwHrXFTKbVYDZonxAQT7nZ29MoRR",
  "key1": "4wmkmKeFRHwmYMF7kB6i9K197VCyyqcbuN7xx76mrXTt6RftXnfzU7y1U9RASmaD7wBp3RngsVAz9rBv2wcUpcKX",
  "key2": "5z51oxGe2CaPLGhy1aTqkWuvLubukMD1Cg33xfzK4kxfN9bTanW2CDNobwxTbYG5Vg77RRtbnwBmiWXx7izbhFS1",
  "key3": "3w34NSHs3hfDXR9wY3TxSKWYq74SVnf8DBQEMC4KcwsAq8HxSUpm9iqZ8yLPToMwGRVsz1aYzrk1RQVMmig2nj5w",
  "key4": "3NfPoBn9PSgnGrKiPA8Fk3ZDyBakjV67TiDEEMXLRd1ovU1PtWwm6ZtozHGmAJGiAqz41b8Ajw2ph69m5axgQjnj",
  "key5": "3Ayffn3mrR5GJBoRv8v61Soth4fHBUVBrzaXJDi1B9sx4fiezPf9MYuEgEQTDRSnHchQyE2KD4kVNu6nERmiUqRf",
  "key6": "5mccqGfppSwoKgadWeNpvjLSmRgPm3LLVEb75myE9XRu6t8DYToiy3DozgRyQrCcKaGFmVTT3XZQ2kBzB91pZnvx",
  "key7": "35wv83VnS8QwYTBk8zKN1FgGqQAxNrVcpUGHeoNBpwS9qmX3JQx9J1L8dq1fSqbEvgMSYodqmhQcvDU3avFyBwV3",
  "key8": "5my6xJQtaT4GQFetnhjiaKqu3uookJqGSCjt1T7njrbBXyxTrfW6TBLKX8Ju5Reo2P1rHjnXQo3hL9v6rRSKTk69",
  "key9": "4Mv6fQUXMbSQmG6ArtR1DrKjBtqv3uWovws3nRmSNrJsDLq1Uwn6498pP2TJ6dGb7mUCTdk82herKanNyLcBov11",
  "key10": "YJcef1CdBZfPL6HgLk8BymWaiw2YFiA6aBHC38acWMzEdumTmjfN5EA8hHqbqwTfJxoyy7bpVKzgyWBfC1cegud",
  "key11": "6229ozcaTd4UwDjpdvwqNYNQTSEY4pFnRLLPPt15NVPais3RcxsfqSCMze2DN9U2Qq88D6jYavx12xvKpxShEq2h",
  "key12": "3EnNFPkoRAhrJtbg6WyBacDmNsFZh4iNz52W9JHtETYLpBgaBJxYcSmm4PmEgUzdBm9eWcxditifPxrnWkqGF7dq",
  "key13": "23jc3v54bbdUG1GwhhobVWdBHpkXnGuW2aHNUf4H2FF7ZaSkYJD8Y6xqBuJrWJ6SewsF3BMUkEVq8j1Vo3GjheUg",
  "key14": "3KntfTTqQA6PEyDuSk3inqQpQg8XUsgtyCW3x35dhxL9FzXCXKzksoNgRCgeNktBECAJzkLR1dp7ke8mbHkMFyGQ",
  "key15": "5QBqGu4d2aVDk6sweKXAWRJiRKqtpHQ4REyVmCGEotBF8vasXaHucvvmTvj7gWWFHK22B1Ae2zW8cmv83gAdDfND",
  "key16": "2otjGi1iN2SHmQWZ2TJdvei58v3oB8yWq6xThsR9hDNssakX6zNrvRXwLY9VFcqJXYh5UwUXwApQXv7TN4YjGsCy",
  "key17": "5ibqSyJUigJanqRMBHTH2gtnqHm8SJMaBV3DDPURXB8qrrAHTLwfz7JdNXVK8AdNwBJReebpACVHFZ3JTtRioq34",
  "key18": "5khnnQsEkEWr4bYu7Z1hX6YXPY8nC4PPuWmzMr4XbScosetqKfFN7CYTUa44mk4itxHfEFriLkS9fjHU4a6xKpPN",
  "key19": "4ChGBFkESJSmY5ZRAy5xE86mwuPLF2PEfn4adf2GfeXwFjsQGBUUd6HdCQBF7yr6AvfxVbcZzet6gMcaVYdJ8ZbU",
  "key20": "9xECuWAXz5qAPXj1LeAA7aodtXABGNXoaS1ioqusVxh2wCAeaUhS8334SV1icCZy7GLTEGpimztwKJigJH8ZG5o",
  "key21": "28HJc3rZqXNLhBrnnnwTmnr5w2YLnoLBmQAxXRw4wjcVeXAvS544Vt9CkNBrbR5GwbdiQAWugbhafe3nBS6Fpsnf",
  "key22": "2bfHbXMdw9zhWGmMFA51Ge4Pd5APsHxeY4k8vjrwxHPk6mDAus7nMeNvCAbcbASHq4tEqaCC5fvXHn5koi3F3Nne",
  "key23": "3XQbFbqQkUUXHodmUrhmEFxYS3iHydDfQ7DEc1MNfWpBRjRdrTqe38U7roa1iHwSa6khrmgSxa9pPFhiFpUaHTbv",
  "key24": "2zXbERP3xVbiLE9Jd2HTuE97HBrrHcpokGW9HeGLbtbTq1cBjKtDojBtNJfi8zjjxwbrNMvHjP8oZZg8saBbFqm8",
  "key25": "4W6KJymdjp3wq5Ldo8xJ9JcMwZrVGyJs1futKBNyewjUE4EkqpW6m8K6NGPea5JV17aEHKFAtpvGEK5VPd5FQSRM",
  "key26": "aioQNymmjVv9FpuAF6CuaWvUFkKsdssXcGbB79mQeqNqox23ZdC2zoof46oF72XcP4a7Cy2E5Tj4KgtcamjPrBm",
  "key27": "2Ppd2XfBXZabzjo7T9bhKer5XjJpAbeQzx2Q9v3MV2Z8EYCFvodB1yCVNxa4KAwRVDoeTEoTTkhtkPdzE6SabBhr",
  "key28": "4awUu8aCL8gFsTqM9SeoPYBhXK9DZUFkNoke82K9ZbVY6HPsmmkdajUQBd74Era5kWUP5Lr9d8vMXB2L4usuuivs",
  "key29": "329VA1P3vp6GaZtWKgVNFx8YwvR57PmGQesWVyYHTBKp8CaUZJRyF8fZShwoDnGn2SiPF8BvjVTdsRrH7Gm8LGn7",
  "key30": "5r9z3XKBy5kbhYY1vVbHphTqxrcVNc2jFJBBXjzqzrgvQnSKsUN5iXYZxMJwGr75WmhVhfFc9NKqRNuvojGc6eJe",
  "key31": "4CLVoa3gkxiPnzzS1Z4RzjWGYLqCdYXVR3wTTz7tar56PnRhvzTFmTnPK5vTUGRQFqvbFifV7huWgfyvLSWsSebm",
  "key32": "gGYyU87Y3Piqo3L4zSfS1we9o8KpQj4m7XiG8YDsPqLnh9TbZ8gwZGfDm41ui5eyrxajN2LNXrAMsv4TDrpiUuw"
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
