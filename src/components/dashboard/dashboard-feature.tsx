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
    "4C4JBUvmBdpuhxMZpehdhSzaouJFuwj6QA1HuXBW7nj4g6zgisKXGof4A4SZBftBm3ye8dhoYJCmerLpneaTKyz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UvyEwQsUC5YaXe8LoiJhxiuwXef4FBqEndeE1mdSGjiAMjKit1NKE83EX1ngEQn9RHXacjdQpixVqnosDcwMon",
  "key1": "2UmRWBreVfNX4WtQxkZMn92PWZEPJn5HRj22cPbhXH8EP4xXCMBgykBdV8mjd6ihfqumx62Meca6eax3ddhZBjEu",
  "key2": "2GD7XfqpTHcVHfVBG9p6H7uXRvvJnoH7XHSACsZECZGCjtWBRFanr3bLD4tLzazMVeunPssG3sWNM3RQAMTf75JQ",
  "key3": "44prLPSMu3JGKC23UoUeAUuELjCvPFp3xKM84yYgaVG7gY6qxoAwUNfBJqWdB19duKZwoBXa9hZwreydGFgz8pq3",
  "key4": "2G3vYzPfF5PKQMesNdfZ7och3iK1VkYt6GhkQePzpPiZr4NLYcHZUBUitff179MTsVCusUcbAWByE3Mufc9jUpVj",
  "key5": "4Ea5HVv2kx2hawpmxG8Vdyrem9VG6adAqwKnn7xi36ZejMZR6svE6cET8FTDbNkqdHyhoGy5ePEQwB2vQxy4cneY",
  "key6": "2oMTuBwHnCZtsMrThjUbGWLM3ZfMijf8Uce4dGT8t2esQhasxPevsvo8YoykbtjsuXfEvK5uZ4J1KVqE53vL2n51",
  "key7": "33d7nCctGNMg4RgBUE9vT74AwurcNCrmNjGmJAzVuSGuQgrS72Su72LVfgiA1c2SGAdJRisuVkgwMLh3pdW2AcW",
  "key8": "482AG2zqPdj32hRy1WVRYD8KcmN5ajVVzHvi1FDMyjEQ3ocL48oqgvgVxVPpVbEZvua6FrwzbiTEdhv4QyzFLGM3",
  "key9": "HeRMVmjhnkAreHS2wLQnso77MKRkPYJdGm1o8YpLTmEcrj3qWXDTPXgua1uZxqnr79ipdDpD3xpptt1dmhiADt9",
  "key10": "4s8ajViXQVA5rbANxUtxHhp9a3BUh18ijVSXAsX8sRQc8qFpqPaWxg87GE8zDqppcmjABXkmvsALcT11vG3t9GNh",
  "key11": "4uc1nnMA414N9gMjMdozx8TD3iRFumvjtckRz1mLLqs9cnzRBJF4rLzMYQiyPmq3Vw7JGdk9tPWq6pVgRRtdc7ig",
  "key12": "2LxEhBt3dNCaqX7G5QBU26Eer3YGtgigcQvjFvHsELhRMcK8wApmTA3JtiVEPAutDxVuMxdo4aeDxqJETUfwXCbf",
  "key13": "5zQS6eWa4aScXiNCiphsy8jcNsYY3QWdEjUYiMhrE9J7YW5kh91XrMGqJvDgWt7BSTudk5EVQxf3CdiYtsVAj1wS",
  "key14": "4uTSY4hRvaTXLyBsJ1Y4xe8V6LmHWYGbZbAoRZm1ScyCdBYcfUxrjCVM9vQjaCPoNAVMcFTSXkf1aoJmbPDMYtgL",
  "key15": "64dGA8oHyWVBtkxvNENudvaJ3CkUWZPWSaWSXUYxQJACCBZKx1oWTNfFNrbcnv4x77M6VgzSUfjJo5TmdxD8DeFE",
  "key16": "57ZA316APNVJCJUFfHZ5jHDh4tsZsmX1pqiRMLRu5H7rSVpAcaHWxRYRdhJVbRLSSAHyVCFn35cB8Kodgb8RwXFb",
  "key17": "5Mewk35A5LYMcYtVXTK2ZPqsz69pVSo2xYjehPjJdF8izZDJQhD5SPivtYpE1PhyHfzX749Y3wzfm3EqWZCZ52fW",
  "key18": "j3NUz1TqxnK9DGs5hJkEK8B451xgoKAsfa52n5n5gwfNw9mTJmVSTXshMWGet6feKw61hghmG9FhUnodKq1HB97",
  "key19": "36P4tX5LnNbqQXbwB3fmAtuo2ToGuJEbRZLGUTeQ9CKxkZ8R1jCcEBzbpTT8t539QmvLnRPN9LL9RGamdKrDpzCL",
  "key20": "2kphQ6HDtVXW9bnLAspDgihuWMFz7FrCEsESWRzGmoSXLQ8yTXwpemmLfDJGn9Zg6hHxAkj388SB9zXareFi8RzB",
  "key21": "5u917XfoXuwCRLgXXC5P2vf2ghoNfGdMrNLj1C9r722suk6fGAyA8JQqVznbRkCrajdxCGe3YFNbQ3m8mw89ZKay",
  "key22": "5FMCBzgGNQPB4kaaY49jHATEEoK3XHhrJEF9VUasJAt2ct4ajonLZu35EdJR4bJ2zuDWtEDuBUvecg6S1xfwynzV",
  "key23": "3eNv9FgwKrDDuFhjQriWnHMQ8TmLHGjRc6dF62sEtA9zxLmEHj71YHg4ADv4Wsdey3hguqT1qpVhPVhMPK8CM38A",
  "key24": "tAWhWaXBzAcrV7zP1zdibb1PJWs7Z23mvDHGmidPD7Mc4cctLatjLLnFPTSVS8SzckpWedKh5kCnak5CwCRuoGq",
  "key25": "5aQros6LJ2NGr9usmv36onJSXXdK5rHTGsAoS6BA7oCpHYXJrygXrqEgWLy3BCLj3PFJihYxG5ufLXxNiGad6EHR",
  "key26": "66e1GH82juwo1pYiRkK6DNkpAKqLr6SD2cQdVmBp8AeJeaHsPkUEYgU8B9r2TpFaR4E2VV3X6VCGbV1C69PwgEFJ",
  "key27": "2YhhVZGs1rZbcCpfEuFyY4yL25DGutjN9S3rCQkvuBKzwSTboEaRcrNnBHLJMyqRynZrfvqD51iR3PnbjHwner6L",
  "key28": "5ahwQmXJiTjcV6ifSbnXo1ad9coUjjamL2YA5FkwUzJX6pD11Rur4e1G1T4ffxHhu9u2DX9v6HMaxCr1NTaXEgmn",
  "key29": "2TUyTn2iZWFgoHg9W4S7UAHvsy3pK2BaA7L9gmnoq4HVTLBqoLNUG6txmHFi175mUwx1NDtidHdt98w5xydJV4eX",
  "key30": "2SAKuH4rLCXNdfZ9Cr3SXu57wsnGg7GqWHWHqrRexkQtmZMsr9bCr53kMo3ndj6AdajD8F5aLwjWYFqrHuX3xLp7",
  "key31": "2nEG3bE6gfmVueJHFJYbkDZTVNe7gkeFn6rffrFYcTQC51ztW6wKTPdWqYt1symQJ31oCAqg6S1LpZxobNpfYZk1"
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
