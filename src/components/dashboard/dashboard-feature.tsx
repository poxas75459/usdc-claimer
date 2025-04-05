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
    "2vy2xqCuXAbGezGwTPZ5oNeyxF2Wo8HyamXTCAGBQMVEcyMg1Q8um4kjwraB213LCKpgmWAfagedqsvwFfHoDyTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5agRbGPYxhcQTYYrN73PDAifYmVBkiYD7vMYTWkxCfWX75xzbkuiXt7Mw8GSiSFYVw1B8C8oiusJ8idSLj6jypcH",
  "key1": "4vSkDkfctyU37agYdvJGaPm5dYAQWyJHae8fPHqMZaJeNZi22Af1un53fxnJ9GebWdG9qLz2jb1R1Cxzs76V5Qqg",
  "key2": "4fCwmfXz34xh9Xu4AYmsSoc9qBnGDezuT4Aw8gLa1qfXt42egZuM6jUXfJdRLvqRBVvqAPX6qfi1eEVF8RThVUL4",
  "key3": "3bj762bBWCvv2tzxD5zjipWrGPo3Wmr1AofKtGMQfoGFMcNhXQZwPdMkLYWR5Ztvf6LKSvAicBovKhdWh4yk9AFc",
  "key4": "5mC4RGczTDrZ5aG3SnrxFxHdXrPEozQ82z4FV1i62xoFfPBYi12nNQpVp1H9R7YgLKRyBQ5nbcX978d3TTYWL8cn",
  "key5": "4VTnpLbofa5KYQik5Zwk6FskQt1GBuuStNzybPF1br348RMMMWv1GC33E53uFX3Tg7MYKBny9iwquGiVjRSoCt2c",
  "key6": "5osY4SDf6KBWxCbngNgqmCjvfByM1gZAeNtkDL4XF1Kxncmixn6H6gNwJqdKa6b3rhin6K3ereXQATz9rqVDp8vg",
  "key7": "3Pt6D5N6M2VXoFwymym23dpD5nk97RkJrSxJ8W7Q4azXSFjYNtef43WDzMdGQ3x22rWz5a49Kj25yYvVrjbaLR3N",
  "key8": "3xDxgcnydb37DPkRF2oD7LfGR4uQeG1xYxFT13trU3Y9BydWC48XqVsokVRkhk3UCznsbFGK7arqXBxVxhgtqV1w",
  "key9": "2dA13GtzfP1BW7cnJCYDwnnfCGFCSk1nzP1gTZoMHdFHJcB3RM52FSNNBEMWr1Jtnbrvg3EMu1NSa1nzRXSmaWoR",
  "key10": "5nHmH4M3dojvqfksMB9k2wd6m2ZxvtiHmX9P3r2H4TXxgTdyjtmxUL9JgYanQ6VcKekhKJqZmaMsnUpHGoziEvtU",
  "key11": "2iiesc1ERs6xWAAbybs831ynYouLV5hdkHMwCsbpXNFHwwFUG5nkHzDpnvZVrWt8EHNdAUdAUHD2WAPngYbqb2ec",
  "key12": "34hKRGgrszFeSWnLxPApfsAQR7Cfg3h9XDkT8iELXgpALVabZyLJXDss4ZvwAksBuV5uukH41tbt6EfPnRWT86yY",
  "key13": "4dtjykwonGkrhYq56heus8wkYXnsyJhaAtdLAT1njGzaFjXbUKjgMNdKCxrhDQX9JyBwmi2hEjFcTz5pageMcQo2",
  "key14": "fJvdFsMd7aJHafVuhX5ahgeDPUatWvTJajBiU9KSt6ZLyZL7t6SSTiJhTM3dhF9bAwXQ2Lu5DV48UYvPFjZV1FH",
  "key15": "2s24ThaMwdUUwTTij6FveSnPuSvkTWAE788s4XGMtmCmzWmYwimqNa9aCbLwZDCsANAiR9MnXqoaag2xZunfCMLX",
  "key16": "2yUrZeDhs4Jqv6F4vat3RkTwpFnYZQX1eJnU9demSozWG24tRfWC8g5qAkczYYJ5GS9jDwePhrJBVyxjZADEYZj7",
  "key17": "45J8S2YGqydiK64U5MBykzB1NCohLNwXVJrP7GRQb7rQ4TJP8yJ4dRw2xokxpVYDKksmtV5PfBPwo4pUbcosY4PR",
  "key18": "5UnDdpZcZwkP8XJFgqrUjKNN6bZZSteyivkicHQtK1FAKMs7KehmChHXZUysN8H7SJF3VxnZmnED5Wmu2KJCfCyn",
  "key19": "DsEFYtRqfswmJQwSGFmV2grNxaQGeTo4M7BWfJfSqM4AxDmLiznFw9ZCEKZrvrJ4De812dMGtL1XsgQ25axyuZn",
  "key20": "4rPCmMN97PedgLoEBoJcFWsY1GuhwmXfEg9QynByaoj418AuqPYfWnBGZjvDVeptBzEHDArwgAsD11hLnnQU8Wgo",
  "key21": "5czfvpHe3NFQZPuRGpnNXfDQnrMMHGPahLE2UEaFu2uqT8h3QFM26dBkuYEDzXQ2sR5a8vj2Z4AQGVHHJrraK15m",
  "key22": "649PhWPYF5cmgk1tTAyAQ73Dhur7cdLQDAwxJnkvg6gbk7xuxnmesqNbvijnUd7cyfAxAL5Vff8GAGxpneUMrP3d",
  "key23": "5iG8iNdUjFX2hsMrAUfrSXpzGfyVLk6pNyT8SJZLXstXuMjfcR7GeseXmfXqkqGEL5T8SFEKkoMY1PQBDbqHypLD",
  "key24": "27VSetwgGc8dBmQjesJHtmK3jWpc1soD16hYgbgBxszyjWYsMdRXJZBHZ5Pg8LpmYEQPpDxsT7MssB7oxyP7YPmr"
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
