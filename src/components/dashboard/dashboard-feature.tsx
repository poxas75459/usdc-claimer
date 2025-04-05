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
    "49caX9DsuV6SMFRXBAVMpWEy9wveAcKoDxfN3f9E97N8FMt8UZWN8XPSH7HugazKw9s6kk4Z8fkp2iDobVbaAD7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44hT5L2TJ4r3AKsp6o3QGd3P9abvXxB1mnJmcEe5o6Fr5k7A84i6ivFinjTXZVSEM6xtZpNcnTnL9VRTmmcsy1Rx",
  "key1": "X5yBK3xEDWiR88NSYXV6FTCRgJLSnWPwf8o2oE3EnZ41xXKUA41SVrw7Cb8JKLwtqDKadxbdWEfeu95bSSitugp",
  "key2": "2qFA9fJ1568TVWtECP9FL4isaAgVe7S4GwtX8AEtAJ8SP9vN1RnkLJWBqLuwvT1UnLZErCimKEJATNritLrmBgUU",
  "key3": "52Zpg4Z54QKkQEZC51zUGZrK2XsVpgX6zqJZB6wAqyZE9ePThs1dNQ48rjtUNC3z7sCqLAfn3RQeiTQH55Pz63x6",
  "key4": "4nKPDfrt3KZiRSyyKve4avUKfWGGGqigKKGidgLvmZkbFaEDQykSRgEj9W6M8sxNqkWnE265Km5NhJqBbAafvVMF",
  "key5": "3Aa6nQ5bq73BDwUKmangW5KsxcvXZrhbXbxhFdtaVdwRfi5DB3C7oJYtoJgmSAoypBjW83NaECPi5rFTadzzAPC5",
  "key6": "5KyHf5uQDyUBKXbMTf33EFhUJ1qDDV4DBJvM13X3BcY5dw49ap9bBVDXUuSx31RYEDXABnusqpQRbBNVXZA58Mxq",
  "key7": "485Umtjn42o3H8mgdFs4qhA2EiKJDg8pdtDiePjB133bMFwZyaHGKLC2unigSZcMj39gXQTKyykEPh81ShQ2bJWt",
  "key8": "3wnU8VYBDrvGUAUg9pHc6LYxsyibY6Atg9ZN1qPxRoNP7wQZbt1njL7MF7G8oprfrTVEoKi4cn5LgxT5AyK65Kv4",
  "key9": "ujcaxqTZHQybBoERUf11y9cXK7ZCEi4wvyzmC47DWXQoa29oCwxAcPEyJbPmMTaSLyqcucQccV7GvjDEUvSXhj3",
  "key10": "YQfYvaULMU9xhjjJefy4Ac3UGYW2NN8uB6KF2SGvzePtuS3jhd5gCvXkfG9grLZTmCoMz62ff9bVX7Tbfj3HxLy",
  "key11": "4efn9gemTDHHkLThsux7FzRNbbJeMexCAEvxejTSWy3irh7sr26JLVTABbjBPsSP4FLesE2eb2k2j6Nv5E7Eiq75",
  "key12": "5c4mVrCDFfxDtveeCMzJzJbQg1zLF6yCrQmw1aruwBCGpGKjgYxJSmGpFroUYNWQ7JCrGtYzfqafbi8npVFUdJ6o",
  "key13": "5CUDS73TTocSTt69eDpFQTRGUagLewdihVBTXmGs3brzDtAVswRhi97cijqiGmANb28GSDgzV2hQGC1SmLf11mRi",
  "key14": "3u42as6bgiW8CG4QqA5aTsgPk5zjzjF7GzUtHmBfHn2CxQN24k3o3ncKSY82yqxS9VHDHJhG7DJ1Y5zqxwb4mpTA",
  "key15": "211WbEGBE3kPRtowWrYzBzD4yv95DyAPHr8sujpLutbYYhVb5Vb5ZWKpLs5AsyR1C39qfkfATMESDFCuw2AA84V9",
  "key16": "5YroLzGHNMGR8F7zEBmDDTjtSdxohnvyB4qKRUrfEikYkiagG156fYtKRozyFhG2XczaDJLH1UGXLtwmszfkWpxT",
  "key17": "32wREKYE1vCK1WqKJQ9hveg2YevwXT6KLVNMN6CgrZnpZtZv3WQut8mumB7uN8eUB4KxhU5gHFW6yRnGKYgv4a2F",
  "key18": "4gk5wey2HuPX8H4vXCgxzQujR7UkbjFpsPfmvawkvuPK2fYjS9oCYK4Th8Vzo1t1eB8N55zYcJgAMxZbpmsh8dGW",
  "key19": "4FWe4cCHvetL8PWiZnxYVfoN1RSRAdnJ9a7J3ptH7tZ3J5fjbod4spW7eGmdj4FAT2vqs8xe6jtrC7PpVMim86LN",
  "key20": "33CrUQEF7Eq42jGNn1gR2BwED2hGMkGCtoNkN1MSm65GawrpjWvC8BkoKQC7ikZUWm87GrSsv5cvWrg61nLxHbAm",
  "key21": "4EnVv9QNKia7EoYtw2bvrUWvnN5adQzYddEZrnE3P4jt6jSUFuZqrkmHQCRyG8WPRNaovTzXCvB2UjYvnM4rrWCy",
  "key22": "4uei5HNAuCCLu49Rtb2VP3dHbMp9kpV1y3oVmyyRH4Qhqt1rjk9sSgpmwVT1L1WbvadLpoCqGvnBVFzinXhVHWmg",
  "key23": "oEygV4Wj8eboqXT5ZhRbxmwvs6ds3G2LHocBWgw4xnxsqSgrquzrGcSfAYtVLfh8pyu7BZa3Cq2jNfKjeiUXWxF",
  "key24": "4W5zoatxWL1PEnakHwaN9QmgxJAH2s8jzLP9Ujb8iVRtzQie5KGZBDXr5MvMkPKL93TJDBd5yHXvkQTCUKnAcKUt",
  "key25": "euoYVU37vzGZmecLdDZAbHF8qDgtu1ECdFRBLD1BSL4X8SZmjDKTr5wktH7VWqskK4WTF928QpFHfy7gCKa1Juf",
  "key26": "3Mmmeq6wX7xbY5du8NjXtx9Rj3JMzGDPdAL5Hg26zV7v1NovNJ9f3R8G9AywwTsRNw2yACLcZjzydN6yqecZ42GC"
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
