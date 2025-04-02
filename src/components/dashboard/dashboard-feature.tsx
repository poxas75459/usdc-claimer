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
    "2jwQAWp18dc2TmykwaVVNh1fF2ZLUjrVA4KmUBoWMvifKohJgY83aB1Zi1T3VtPTVM8ooYJ9vs9aBiBGitdK1t3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbDreBTGrTPJfk8mCT4UJj97Bsxc58DeWPV5a9XUe1PF8TLjgYfhUqN71S812RBKu1EJqySz2amRaUjcy5PX4j9",
  "key1": "2gaN1zB6oWxwBMLAyx8CwbNbJCB3uDAsQpdbVyT9Z53wwncFGeZrUouhyED6p5zzPKawYYpKinr8FXFMFfCADT3W",
  "key2": "2h67BG2KNUtNdUa7GWbL2xYim3psS28SKWLiGYAWCWSNCpWX4Gyxw5r1seNpYRyfwxnZpkpnw86C2v1XWNb3uySe",
  "key3": "4WYfmvfsgpHqonq3wYNC5Lpy8GEL58Rn8UTXX71qJshKqLKZqtnxnrvCMTqU5w2VSj32uUGvLwssUEj8VFUYj19o",
  "key4": "2Kcs3TQJW5pPdsWWyZigqVn1pZKsiUPFeNe4yaTFXUViAMy6yZhxHXXb79X3i6Pu21rX8nuEv84kfhjhD7QUyz4S",
  "key5": "4T67MHvTbR4dy9ZMs4Jpq4PCTXZqhpNwQgFp8g1Ykezp6garDo35jxwDTJeA2RWdd45D4ZJk8YMA7wZVjDJYAS7w",
  "key6": "3nDaAMJxWLQkZACkCUB6VqVxq9TVVFmhhMqrbEWTdosCmdWNzoW12QhkNW2QHCzDHkrpmBydxGTf5Wz5AWakaf6w",
  "key7": "2gL7pbhkNG3R8S252nean5NGKCmsva7gsqieZS3oMHD8CE1PyQgdUE49ZFwHN12f6bHz7e2z2apvEdKTP8gUBkm4",
  "key8": "7n5zYppP6Nuc9oHAcnrKzEMR5J2xWAP8gHJ3cKZGYen4QZV2Ka6ApBiU64HKjnaBFcrwnUdYn9Vb61r8LJnVRip",
  "key9": "367pwHw97aU2CNHK7KRb9rkpGx3Y86rRDMrCsyUkDLZ34N8EiuR3dAsurhUa5k4g8zFNf7sQA1mkFfpWPFCAshSX",
  "key10": "4ZNR5PptZWedR124X3UGviCewfAK28xFoUAMUGqE7VkNRrAmnUwpw3vVaiKpyEnX3BZtZ2Xh4JCxwuU4nDH3k2KJ",
  "key11": "3q2WDjBtjegEPBWbEfxhojCzHvMgb89TnKBAZ4Zkzxs2oWBtQtaZMePZwJRNFdC4gpvaXy8YgPhqPtmkNU96go4W",
  "key12": "2ymXtB8ZpcTgJg9rxevfyeP5yRrF5ft5ExLReHXZeoougcYXYuF2hcFegCaAb19FNSRHEabowC2DR1UUG8baw3C1",
  "key13": "3yWFWFUsrkydyQXwEhdCiVhFFswGVspkQCm1HYPoSzvzeTYV2Vz7H1zTWG3a8wnn6Yj8MwwpotTx7Skg2A41Nm4Q",
  "key14": "GyE11Ht4VT6MZpWAEhJpn6ptVftWfiG7wXXqMn4WD5vBthTRn4hXkNmS5d1bTRL9LKuZtPf4s3QKwrdAmoUY8Yh",
  "key15": "PQCfnZUFQ33QGSrbGNV4taETcg1umMzHTey7mvbErw9QEcEizWsVv2piE2fZCzKLHJyNmLU5p6DMgwsLu12GP3J",
  "key16": "L7myhbDum5LZr2EZqsRfV6DpUjScfDdEi4XcEg5Zu9KPwQmfWRG2EJ1WPvdHvjNrhYVvfmjBQ8uTx2GGNGdXJb6",
  "key17": "4BGGSWGdDSiUhvGywWwtfTM9e8Sa4tgG9JABVNtL9aEmCJboNtMy6DmfkqroTykUHeNyPpJsfGzRLtqhr4zKPU8C",
  "key18": "4UMG4ZWDRKS3VmGaPhghGhuH1keyUSFQmPbCiPabVy59Uycc8EczzMmr6UdGusJbPNNLoagnzNWqhQgognZ6PUUH",
  "key19": "4fqhwLLyaK88W54Khu5A8mN1qT8fwJ42KthW5oKeg4jGtYoKotVWLtYtkuQ9XhqbFDdHeiXDQqgMo9wmMQ2Pm6u8",
  "key20": "L7B1N2DtnZdJKcrUQNkugCXLBqp8XUQV5DU7WJEsCZ3qwM38VUPz5r9xUk7o1DVY488in2pEeLbd4LDuXq7XCFU",
  "key21": "5w8Yi8R5BqBxsc3VQVnQPnGW1QfdEgVCtMsrUb5JJeM1BjjsuJvyEzsd1FiyuhnJjTuENnwD4W5jj3bPrqCvc7qN",
  "key22": "56wdTxTNCDboCrQrUzviS9PZvx2GpVKnM6mupEQhsDNgJnr3AEY2qGhYYzrBFUXarvmjE4JRQWxibMwhCptVLwjF",
  "key23": "2i3GCt7G3prWtdek3i4r8SVkFW8xP7QbaRfKyKidJMmmJt43a4aTVYPTf3hicviPCe8bzKzsL12vHEm9YtU1XXdu",
  "key24": "3gzZVGRizgnen62B5vWZHgLcisnCk39mUipTJ5dMXHd8Rzni6YrF5RtR477HvMGMiuFcFPv9s2W5nN7Nwoc2aqnj",
  "key25": "MiApiLDx4b42Q7fkFyTu46QmDMHCHRrXLoQBGZsAhqzL8XcD4wDBQxgQ2wD6NU2LAY6bppsw2GJE66rcnJk6tU2",
  "key26": "2GHcps1fdda92p3aPwTSGqzF5eh9nRBaSno584aL4QcYxEQZ7QkxA8QEGBsCLSA4SnJ7f7ZtUQnb3Y1dPG6dgGz3",
  "key27": "4Zghja7Ef1P6NUHwbPHJzRdBUbCaD133rL5J5kNLwkaoXC2kYs6xbi2UbJ5AueR7VUZycXhkuynusEpukG7iSQCB",
  "key28": "4A1gDhaisARRE4GRLt2GzxJYY3HbJbuUWCeW4t1JyispRjpqp9AMvNtdkk259H1QHVLQc3NunVz7EmbZog3wdXhu",
  "key29": "5xEVCfVC7FNda2xMY9vvAuazqCxZY3MR1qoUPYtYnbtmCJ8T2wYFygmuZs2XJ6nf9UrYxsrLtV7Laiqb7PBcxQ54",
  "key30": "35BzbUUjrQ864VNqocGuhdADBkVPUKUmdXSmJ7xTTZH8iEvSkwrMwLMpHroL7X5yAhFNv1aVDhHWBEmXAnSrMDfr",
  "key31": "4ZPKQBZAftyyQmXHJ4wVczRyT4CgffMc1SeDWRuQomGHpT5aLz65U8bT2w2maAzC34oPz2jjJGno12BKcNF4TADd",
  "key32": "2VQ3BfGYicXX37AQs1yQmVkAAaBuqYNZzNkLmF7SBpeiMc1bCb4uGfrdWPf2D9y7g7LHQv45T7yNJp3v3oQssXyL",
  "key33": "2KFzwZmJG4SCy3bP6ugJicwTfmRovKsQGUMBTt23YL67vgvctr3uT3HwFkywLDe2A4uXHC6Sr7Sv9jKiLJvWmexA",
  "key34": "3AkYig4b3NPgFLFzaiN3fcxW9bt2bCA8rYf4UYGvE49jtR3yQ7Z9Du79s4r2sm2aqWFfHDiA6NNFnmZZAjkTd259"
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
