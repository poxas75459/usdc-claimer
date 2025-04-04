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
    "3qjFSPgX4EssVCrSahbY4hEJrEkxi1e6Q7DfkSbJ6NcxmdT5N8rHiCQNm2PynHCNVMKeY5w6xKs1ek2CCnK9m4mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6ibgp1PJycEQZ4Qj9MxWTzQ3QZpudVXtPdkoxt4rip4kVijn4AwAmVtB8RXWiuFGXQtvuVwhap7ioXJvF92uUT",
  "key1": "31a2nEEFDPCYQKmQBsBP3cpMkPVHq3CDwKr2264j9yYK3XG6C65wH53NNPFaS3cdbR5RH7JZiMo7BdGbqZGgu6Sy",
  "key2": "MQULkgJ7UXrvMfh7SJF6o4BiiPb89xk2pLkwuufNGVfy3G53GzJM9ma9wxtLF74s868a9ubFz1Pm6mXBkubKKPD",
  "key3": "5SXBQ2L8SagYbTyyeu5t9Sr3n8EcLie77Z2xH3e54Bq3LtrT2zhykwTLCfqJudzKJF5YfNUdgXdCwd2ASWRueqHF",
  "key4": "45cc4Wvg2wX2trNZsLLgD22hHz5THFUChm8EHVr2NEfKGLxdYhyGZD83mneGbdL7DD9zg5w7oREVSRUTZFmYVSR1",
  "key5": "3qhqNjqiQ7eBUS74KDuf66qpzuYm19AHdPWfv8peBETep8UhsZp3FfxqeZR7jcfQMsZK8oTmRebuRVcBQux1DHJx",
  "key6": "ZHUHPKTNpV6g7KwQ4TUCfnULe1fZt7aBvVFJiuFK3z9WjU8F2ifm8J5rrMgxckKLX3vCPrubjNFno5STj4YB2JH",
  "key7": "2SVcALpUSYp5nWb1ZPrboytDRg1yy6sRfkoNUBcM2vut9FGREtsX9RkqGm8iQFVCrtGpRCnSqHYs2C6QpmVkbgQz",
  "key8": "4DnKr2nGBZUFco4FmAnAdH83gw8Gh1hdBvUPJ4PGEVceASgF3RDfqYALx5Zn9HzedKX26GQx4eZiMHpauKBnN2jV",
  "key9": "54XuyCnPEgff2S3MrYiSwEVutJPUBndadx4aZmkSB6NYLg38jHghmxaZooTshh4yPTZnxazbDZkGbHdmZDmQjh7z",
  "key10": "ELsZ5si1aJ9w6uBomEdAqd7Tu28D8mkfQ7DvNC5Wrei2FTrHVutKw4kz6EN5sQgvshgxDko6UHJGSpipFNjRcDG",
  "key11": "2FnJSGEU87uiXjPaTDB1w15CcsY5dKUfUsEtrajTTqBvic1LYSAPFsmipvcqgpjb8U5vzzJHbxbGayLF1zpaJcd1",
  "key12": "kFaQmiPDxYsriejH4gyMXZyruLoZsQ8ExsMEWPHfRQgTWhgnhUDnBQq62g2SNTBFKzECDrHwU2mRMJ4UHMnyD2V",
  "key13": "3yusmX38R5jPyweaVh4SJerxnKcU44pZi1bYtNWbAFyiotdFokbVVhX5yXCDyX13ATAxU5nqm8BavWHj1xYeGYmQ",
  "key14": "35pBwPr4HYdeotnCdz5zwjRNyMUwWE9XNCqG5jGyu9bQa5sPdLfBACgMEMXuAZYY1XuenBJeDK5X1S4zRPZ5yrzH",
  "key15": "qoCqSnXC41hb9kuHjem5AArS5D2DbS4x6Lc9JqwgDFemUZDL7YMK77QgaAJnZYbAEQrWhg98oecZqakHtA7Do7W",
  "key16": "3ScMoJXnT9ZfuYhyLzBnnbBWCs7jbouUfbeRL7VZiqQ85XVXzorvnwTxx1S5rjbtHo418auEsJY3X1HMuSdt1u8Y",
  "key17": "26d5TNSnAzMXoZcPsSxg5XhGCTaes6LCq1Gn2H8t6LcfFi6yZp3iDq7Bs4ntTpF8QsgSudjdx1DA2Qnwy3dc17Rb",
  "key18": "4AqX82Ak7JgvmMLF1yxz78ExAKp95qH8kowGNWpF4KXFcCWcfwaxn5V4ekTUfXNRAUSTFYhgi87JUKL9fJsSShG5",
  "key19": "SvyEZiBGgu2bixUk4yW3Djf85K7Qt291uuY8opjuK579DiRE4uw42pvQXUKQcbgCuhtpk9kTy5z1fNmZ9Q7wwoY",
  "key20": "2F2XFe1yxD3YuraTimYxn4dM8LMU8QppgkFPmZXuaqN54JXUWLtmebELCtuuU3NLf6BZEsd4P6JSDZLvshM4deAY",
  "key21": "MRtgzqAbiawFS56NwrEDcJp1oZhbazPbYQhkAM2YQRSJVVnV9ZCx6pffoCbyh4KkN1Q4LC2PcEk9LbPi58S2uPg",
  "key22": "2tjZBzzX16nokc1L8MHKYQF5W6DBZy5HRNEAABwE6JZ2BPQd2hTcuoXRVd2U6hnrd4Csg7S6yg668X9TkxBcij8Z",
  "key23": "6UHjknTc4Bf5Ad2DTzkEoUTppae5QqmJdKrosqY1PwdL8ewi8ZsFeFsQWDm6tMVGr6DxUDgL6d3gmmVL3Ac4a6i",
  "key24": "ZCZbkZiVQ8885aNxzTkWGwWHRwV8jbLsE21EDBKmUuixrZ8CmUBqVjbu33eynjVxGFKNsnbVcZi5NJC4dWxszSS",
  "key25": "2g246sckUkzbFGQSGexRLggJJMAnVYqz353DiQSfeuNsRrrKtdZrhSmQ2X1NApcF6adr7RfEnYMDEoPpRE9Xgw8b"
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
