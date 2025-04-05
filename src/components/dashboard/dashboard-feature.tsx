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
    "4WkWiRLJCUssYpmwH5RzJZ6pc1aMLzRr8ASyTXri8XQNfusVG5LxbaiFp2g4tLHR21kTwgSNF3zAwX2bq2TMeGeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21PcJc4b4SaRpqXV2zHrD5rrJ9Nz61pj5owg3NrKqKkCoVyQxrVWszzyr5dXFETMougCop3f3LdmDXiFdmrSAegk",
  "key1": "4qzZzd8dX2sq8BYHiGs9GbtbzBzp1NHH4TKy7MsVpoFSpXXZVMxfw26cdEpGEXnr2R74bLKbgph12GUjjDv7LEgv",
  "key2": "4NJLavtx1NZqe4TXYAdvuLmwm3TNws4Z7nii5aTvPGv73UZh5zuXJnRwziKEHLNbUjUEG3gm1CuukV4Cr4tjrKLY",
  "key3": "e5JBzjq5hCFp2fxo6CPpfDd5PQPtrxirkrTdJpafWSzWqSEEw8fjW1apRASayzMtPoLFk9xhviwtbjwr85GsZ3S",
  "key4": "5XXTFcAvH8PsX5rtzNtNxMWamnTXRyc24uA15KCpPkGB5AeZwrtjma83Wxys9upbWcr75SXM9sfGJkMcb2tBYFXD",
  "key5": "24QV9AoQAERD6PQx3U9u9SWBSSU12jd4h9t5vT3W9FS6y48phN5j2EyH1zAEP2KyG471Z8e7jVj2SNsbDiZrHREK",
  "key6": "zkerTVaCT2jXwNW3LfkB1jqEahEzXD2U2ZDT8X98bqaVctL8oK5Qoeo1FnMYJJkRp2DwGrcHpPu2uMZGJRa5CYd",
  "key7": "3T74eqPMpsxbJW5enKGnbvV59cnzrMGVeMzXr57GPDZQ1zLko7ZXriYUSqSz4Se3nSekdRv9QPefqRFJgLVAddq",
  "key8": "2JYBFL5ZwpRK7cha3aWe5HKRBZxxBh7yMYQZGTzEhEmHpmKpdB52ixVnxdigyx7Bewusue9pz1vG4b2oWRG4Ro6c",
  "key9": "3FTrFkD1qAgY6nFSbi6LEHpvzhza5HWwuSgGmaorC8KqdcyMM6SYH4SKCCp65ppvpxov1B2ZSEobsdhqTi2Va18x",
  "key10": "2svR9b9DRv1ZRVfNFkzKomAzAkRPQbkwnM2NzvnCeqCs6UyQ1hdD9aRzsNfE4LL9QDCYvKA3SbR1T7NGaVwBPBCZ",
  "key11": "2VZVWgiUwBwGvj1XxfzZZJjjH8XqxUjdkm3gyJETLEwSaiXo1aHxt6ke24boso3Z2ccjHyATWMJHuYtdoDTGDAp5",
  "key12": "34MACpTHjSUkha6mHAqF7cNr73h5gJUQ5D9LBSdYUQ3GTnbcjtvkVWA8aURwxJYcrcLKsBgsYGAHGZC5ucrHakH6",
  "key13": "rp8zLM6osTYquCEi3CLdTmQtFmZsmwEQsvWLwAyKUaF1FjYBzHzAQabJpEiiVuxZLEVN1nNqWgndF7h8mCDdv5P",
  "key14": "2xkabE2KQLxhcAbDkNRfonxoU9EKojm8KD1DDyhR9JtEADRf4KzhsK1gwoo7r7uuBVc8V7mKFKHwXoz8eVgXCkTc",
  "key15": "5hvgGKmtCVWCAacKBLY9fd9xm7wfktFCbdA68bBWZQ2DFKx5TeVxvJtsTXJrwQEe1PCxguhvoeiwiHTxFi5t8Ynh",
  "key16": "5uF5iEY8W8wbxZtUWki6tem4JuETFCVgLwbVkeszz6FDRik4yY8V64X3SjEJcY6969Gqbrf5aUAVDZm54ES7knxh",
  "key17": "47AhDxR4MxkftHStrHY37m6oPaz2amFjDvjhvHnhQAc4rvQb4vBtiUouCERJHUsXSdoKSDNhfj46t2x9fsPE3ZSk",
  "key18": "2KRDGhgG6556r5PEDTGpvgfC22zuYsNGeF77YCTPg1RCEhHw8qZiVVFUqyMJrmzVsX5jSDhvSQcWNvfiy52MPNpZ",
  "key19": "2nMbWhDZmAdq2tjpUetdJ5YujFUWv9YUbj9wtdocbteQn7dAYux9h5771MrJWPvAycGF2SrYhRNtoxpAxEPDK8FC",
  "key20": "23vAKdNRN7SBao5vMV3LykC8KGSupj26nBZJQ6x4qb46cbgMpE3AHLydV6XpHudRd49sYQcQ21p1iDtrKjvyVJ7A",
  "key21": "dBXxRiSC1cECeL7Hz57UcDFJwNaEq5DC9df68YHp1BFH7WYY81QJ94QZCkYuKNQCrXCVZejiRocMi9HM5t8fChG",
  "key22": "4xwkDoLTrsFRsXM4cZiQM3Y8mYPYYosSt2ba4nTjFzpsbCuww9n9K192bVXyTDHZrs2rPXb3EbxkvnoTNbahkzWC",
  "key23": "25tA59DpwS6JtKtTC9SoDYGX1JoYSiLciDqYbZ491u2kxV3NKFRvxoiN8LWDn38NRScx69vySZyJ9J1G8XfAeQht",
  "key24": "rsAdLuCUPrAaPkCeGGHSZWWX7Y6t3Us82hCRtGDCSH8AtfbCT83KPmJi2dpuYSwCDZvjTUJqviUgFXkzWHA1tWf"
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
