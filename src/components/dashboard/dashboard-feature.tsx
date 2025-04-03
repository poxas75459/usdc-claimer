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
    "yekcBdUdzYoewfgELv183wTv54wTrZNNWLVD2guhMABxyJ9kHKb9GUzb5esRYJrAKzv14NmGS5kCQnzXtQYGNrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RizS6SPMrhzvmBZM153Wqn9Ro7wdnEiJk2N5apRP1wpB1eiYAZF8i1VtW1uSVBkqBnBd6UUxnbD91GGdi8CkNLg",
  "key1": "6Vk3Df3q7GxgtCyXt3DvDsNesedsjzJveYQDcAw4i6jk5pXhJPnBtrpe1rFmxSyNXsrubo2kR6m6khWcwxZkr3v",
  "key2": "3CDRQvnD5SrqvVycLNstUiyEHpBiyMb5wxSfpxXpLNP6fYb7fdRwtv2ddCZsaTkZUWfexirZEEDwtitdqCs4o9WB",
  "key3": "2HUM812kfny7Cx9ySLnhHbqxaYMr1J1KgMCj8BEvdtdGzawscj9hxYxsaouztUteqPAM7CeFML2DoR1JfHRunwqV",
  "key4": "r4vtkUUsTv8BGo36Raq7RH5vwZgJEwiVSSVKd1GyoMjkojBZXcBevAHbEp2XTn29yqUnrL8ALqMs8ymVyqpnnVP",
  "key5": "3KSCmRwDfFsaCdmHVP4diL6EByUfEL2t3SkK3NsWz8WweBRwdKQQzJP9foV3u4LSe1YAmbHjdnCQmJa8b875PL9u",
  "key6": "58mjXJGofr1uGSfxGkTB2CzpQjf8k7bQfUGQg8ZqA5z7xjCoPHiKP5fbTU3ccBHQv7EfQRHhN4VcM4gHr2P5pd4x",
  "key7": "42dKMjf35hNNdio3oWJMsjeZXRwUPWa3JcBbSMHuci18HHrk8iUdxyPcHmVtZUmnFxKEihFRsxqzNQB2KrMoGspm",
  "key8": "3NH5AUpANuCDZgwLJ2CWPZHswDyABBxtWEhEbDKrqyZYcqeYX5847NSo9P8dWMMCay9kmy46YYtGN3GbCxW7gRYy",
  "key9": "2taiVNVkfTA6JFY2arC9c5qEdDNb5FNgTeVVJVr4Rke9Jx7vLXaVZrVgrVJQ56ynw4z1wBMK5xiXJV4hvhHr9txZ",
  "key10": "3nZeBAPUVUEQVtt3RKmwb9L3g4yEssLnxfYJs5WZVnohfKfhVbGsXqjKCjSz21HnUcAb16qcVGcGaAhN34yq5kzB",
  "key11": "4ogkgCBYfv76jxDNhKZQmNWcMvvQuKT6YjXAeLumE1JKcDr6x7qzJ9aY6fWRrS1Zxj7iAQiqNnWAUhVwnu9A3Mjx",
  "key12": "4DKaHHkdkZQP1gtJRRjLiKZCmchkKabuy2XbjZdvhpHyNZH7BUHouQif9j4Qt79MMQkU14JvEyHdijWNphriDKoK",
  "key13": "5g4TLE2gLCYMgLpfaAhpnBSzen3vefcR9TjUsJP75rJ4zsdMxZbKzkqBYYWxpKjeqkXceUTAFGTt82eaEYYpxA9z",
  "key14": "4mkg1piZnrUAy7UxwsK3Xcy2KeE3G2FbqMnuC5oQE3xdm2bKow6eLAAvU21A9knttKwcrBkeyAhD9o47NdppfiGw",
  "key15": "4SwNKEpJtbdcwRMiEPYBNeETRZD18MEfRbAcX6uG8QAwvWYeELwJPoFDM6zq2Xm7F2FkddSUpZXVwJpUm3Riq3g3",
  "key16": "1ZpfFmYCtzyW3xU9bSbqjd2XupoM1SeuGEr5rGRvm5EhGZ3sjvQbiqB62iHwywDkPFPyd9iQjxmf45WnrGb8hQt",
  "key17": "3FpHASDzM7T3qLLY74jWYCmY3oURm3jkVXNbSeuv4E1B7e94KjEmvu7k1ECf4hEtDzqikHn8Pu1mRiDZ4B6oMdLD",
  "key18": "3ZyKnTHeoMcGsLfYMfQGKUp4qD7M8PrRRK6fYn8hTGvgGJUJYH6nw1kL7ECSoc4SGf2mZBwR2naeoAqPyvmMJ9A8",
  "key19": "UrENwwcoWbmSTf5UCwqNifFNVFEE336fCJo2Siu82MkqSbEv4SjPLmkX6kVaAr1etogS3PZUGX47MuG9ZYsR2MT",
  "key20": "abarfumP9NTpNc3J2PtZdByU95mD7yGw3sRDS4YAC5JtkXLLPxz3SVkDuSVvAwd9jdxmrrRzCdZHTCszBuJsZXz",
  "key21": "ZuThHjN8hVJp2jT6pA25qHjLSbMbxBuXzcP4cvhZTxrZ7nbDzn3i7bvPbtFhQm87rUJg6rTj6GTaNv9hH3htBeU",
  "key22": "3QbeDPcw7w7pZVb91wKo1WVzTfYYYmWs4MY4wUk5DhHa8a7awnzKPyV1KED3kqaiu5JLgfkzfg7zPetziHFXmva",
  "key23": "UYWnC9iCzCnnhufan2ZBk6wEo29tPqhWJiyNpBJmE4ZPDusDzujQxGuYvvREoat5iu9hcVjVdQhNqsePqpgTTpE",
  "key24": "26EwxAcv75hT8eqzyzrJE9kiM8eDxGDTekhnSEZ1LCFqDbeCTGNVAnd24tGLNDu9VEUYqNdDgLhGu7EGYSc3YgxD",
  "key25": "bdDShVC1nY7VZt1MEVAnaXRNCC3CuVjfr9mbWbK1nJUqA5kPbyQyViCPR3JG63Tj5krPbgHyXTbawWTPbzrqnWZ",
  "key26": "D4PQEF1vFmKHoW14zG3eF1mfFZX6xp8LY6Bcb9UYgkbsNeQQP7cAFoGT9nbcYQmhDUY1kn4j6VRyc4xQ5mfwDWM"
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
