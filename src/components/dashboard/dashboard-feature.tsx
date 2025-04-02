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
    "2WiL1RqQwtywFrYoEgwxtExe97TiiayNtwsvwfwGB6dkYadZ447SkL2JVi59eJryThV1SEE6tzs9ZeDEyrwcdGg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chHiL8Cs1W1xDHp9eZGBwNZ1jan1nyoEvsB3Bm89KCAAiJJ1Z8hZoRF6kGyXZbo3DpnG53eMmQgwzSC9G7SuYs6",
  "key1": "3rdDSwtapSzjHJEezCVBATk4GdtqBktRDeKvZMTM4H9EEcnmALkYZvhKK1TeQsuPHYcYDTjTyPuAQ5RFKvnVPu29",
  "key2": "5jDhChedQKb2mao9Af7rvEuXo5w9WmXL5gga3q7LfaqqhCdXt1A1LPRx3hnbjTrRpWHCSwho19XqiYKvz7orvyJu",
  "key3": "2YwzPLcUScxFjdFh3GFQzU16htnZd8iGgN9zi4incAHy48MD3dEvC1ex6r4LDxLEKuhiiRaSpTyCJe4sK5ToVKFU",
  "key4": "4U4RrKEe6HwHxfA27oxFjQ1STM3eqMKCNDJGiwycnEUCapHsqM4nGUv9EwmrixUW9A14JdZnRbwPxyUYaFqjWuAA",
  "key5": "5rNs8kBa6rFs4Yd3WNCJkXdxZAUbejLrLN4itEcpH6Zh2Bt9gExPic4eXpgCcnyHoMnvGiiHQkK1mZcMH6q56KYG",
  "key6": "5zQQQWV3zMYpTQRypnDS1CtYnAYvzxvpP7bWUffZ3qiHfS9nmaxfBbUHn6z59MVtJPeRLenxaPV2zSaFMZTmWWMq",
  "key7": "5vJMMLwRxswcuvGPmrs57nGZexouanLdWZDHo3n6SyLFfu2Gj8kajwLomm7dTt6e4xcZKpUnXZBGqfhSM1TZqH81",
  "key8": "mktMVDQgayd782HtHX1TATawhzPbbegsYABDJVcH7r2hQosLD9R91JjCbSgPiVCSozaUAREa7ktQmHfNqqdxhdH",
  "key9": "65FRNR9E4Yf5aXhNg7YYMyAvBzh2DkBcsHshKBURxMvNkoAmVMoRUQV2ZacuPVJDpwNvKeV9yBGGbSW5Dpv3dTUi",
  "key10": "2Addi3szGJqMQQWby3vjC38EFtZJ3dxJboDmgjTVrfth5wWsVSRsa1wgWqu5robJaeuBKZkRuqM9LrcgYyVPadnb",
  "key11": "2DTJDVXhTM2ppVtUcxAVhKvYH3NfmAyNZyicbGz22XZzuhgJXiaXF7S8rYBUhL7nfPZoSC52EKpn5DSXorKS8GEs",
  "key12": "mGLjFh3zTMUr5QAbCs2veuWufpoL3bkx3vWxUqcLy5VSg3urX7q3uZYqmLBjxuG8eiANTCyLYYoSd3b7VS4Xwff",
  "key13": "5qDKbEEppH81r6GS27DPAEhRhARC9fpNattf6hRxTBVMeVeiLd2zMPxj7YfrPB43KREi84jCS3Bbvxif6NgHxQBj",
  "key14": "2fx6RDxf7nEetTyAi62RdhEVsrRfipH8ugkKQ1chnnP9yN9eN9wr2uUTCAeqBKhz6onUdcB7pm9kBiKApCfEm2j7",
  "key15": "3KvHhsx7SwHZWUSfNymXD91mh7n4bxWBMPxafwMkgvW5U3m9rGaQ7HpQ6zW1egnZhbzxTK4RDwQcH6BGn38YFFNT",
  "key16": "3cyQcC9Kn8msrwnkGyA1Kj8DTh7KeHUQyMVxtYEnXuYusgcWbPiHZQJJFDA6Ltz6JqCAeaHMUUPdysd5k3GxiNVt",
  "key17": "4FfeJ1suCvQNLKUKC329F2EMzGoZ3rYGhFVJMN8zsBYkizMjoFX7pHEfiNgZy24jbo77EsHmAbVnNe7F9pH3vp4U",
  "key18": "5v56z6ArvfW5XSgiwAx6gbAswcSb7e2JKWn1qXmWTBLebG6yWYnYWDXR6EsWiZM9HnZagqscaSic63Ff9rFKZ48P",
  "key19": "eJw8DNSiXnu1C3Upn4bwPJucW45YGrDuqZj8EYvbU2kyruLwz4wknFJeyo54CZkYDVbyTe8ojtYK4jdnxujav4m",
  "key20": "5DCkD1AtjPPNh9J7DGuXPfUFQ3GZsWv98okku2AKpTzNU5hj9CMehqaBQgUdEykd5XmRT2YzVihV1f33bD9hdrVP",
  "key21": "3m66CcvnzBnivDt2zoCQb3i2aqao4WKAbCKvEQ8kD2336KtYD4ELvVym4SMtEsawwqFPmwCR9ptZfZNwirE3DknZ",
  "key22": "2nm7vwjgkizKoaHJWQTJL6156BMRwndnrXhBnk9mJ85nWH1o1gM6TjiepJhAmPdtV7GhUDzFaThw5qCZM6Z1g3Py",
  "key23": "64GqTSFSDzcsKAQ4fTfPEjKrmKPXQg2sn2Xzf9CAZ3FBWeYwbxdwRMMC8UCRedUJkJnUkh38QuZotwHsJi8TsBU1",
  "key24": "3CqhXjftck3iitMAYzrckWkCFZ3WoU4o18AL2YNGaUvupYbtYQPWmc7YffC3zbkU1n5FPNXjFuMZ7T2fkcdzEA1y",
  "key25": "5CWMx4UvjRw7zuiRqdC87nXVLGeKzCnjBwvJWE9tTBWzwMaKYCdXHPgzscXs4QvABVxqmrDjBXbibmSAG9FtsAaR"
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
