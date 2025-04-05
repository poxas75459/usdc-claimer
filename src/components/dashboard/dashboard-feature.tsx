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
    "3tFtMR4Erk28TXTRXQ1VEocdqC2548d6S2RfmxZBhHTqD2vMSk9SxPshTSbZb2hg1k9DxgY7hADCbXbxKsSyeXkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovsYdvmL2TGPRZE9SsA19pAoKW9phbK9CSsw71NpSwpBG1kLqSNKS78nVXk1FfHiK71DorHV8E4CjzzBavZmaiT",
  "key1": "3g78ECEzAbzSDbRympBzwMkZVqKkvghhAkiV2h9L5cVv1yFieVZN55Lk6PfFzfKQXHa1Ugm7rPnU2ANxUsRPsw8V",
  "key2": "5KJXKzMnhvS2Qfi2HKJcFi2nyxwGYPNX1s8JuLgj4eASbmQpRcRY95sxNdKd8rXahXmP7ZWeRfr2uhjHccFR1DDe",
  "key3": "2npKMnBntpKXDjU3Vr9dk5bv4HDVVnR7nvth1kJfKQXbdmCjaAnv7uTU6CiUKakCafPtrVrJJP3PUoZEv1u6GD3Z",
  "key4": "2LPhAT3Njk9Z5yk8CW5XvTy5QYCRQ1UYUzbqNwrsLmy4eZgyB1QhjmXDWujLdeCAMGjc7kqpATaT8L3gyXUqsCZE",
  "key5": "37u6XWvdo2nMf352zZ4iP2cLjmJEWsiHJtgSjBvrMvAt84ygcgMavctetf7TS12AtPUSVUro2MyndgcaiPgL5zfX",
  "key6": "N2ygydgU72hqZWzB24fqeKa2j5NyyXYPdqC4tcwZ85bdazmMYH63BwpKgCcWtHcYPhptCD3XfZdMvE9YKGvNGwQ",
  "key7": "31WFmCo7X535Z5aPFr1YFC8TBxBozo4et53RSP6Wvtceczn3usuP4GVUeuBabSEh9wevzAqucPCjzfRVjaMcR6Ld",
  "key8": "6299xnaks224BW6NJkSsmpbLr58Q2zidxtwnvTPd87kr99gHCrm2HT2i7KqSSV7n3Prs3XGt7YA5FgbS7JQvwMSB",
  "key9": "27yjPhEFB3sU6k12XkqavmLLjqnP5ZrNap9L2HBdhWxqBuF8gLSa6uLeQTDCVcPps4qLF6gBqq7Bve7pogTaCWr5",
  "key10": "mgmTXrtLY9WLEkuxqNTScwbaTg2RWocbMBzxQcQAzsoW2QEAhWEarNqSfDnW45aXRFmAHqH3asjMR4Mb5ZZBpak",
  "key11": "4RuPU2MFFab5PKuHibgbbCLsVprmuaYggHttTR2PBDyNUzxdirc9ruuNvywC7Ri73Q5uYCdmLPwaje92vf9FdoBB",
  "key12": "5JSyQuzEpH5vGbDuqszxaazzfJcwR9Q9SsnCVJ9Ek4w5rAEm2m3575jSZqTGjco9rnmX5gkvFPrE8KYrJP5pjSNV",
  "key13": "P3rSBYHEVr9Ksx5aKRbknseSqL1SCXwGn9i1fHJMFKnYCuL7sDX2GAvtNNfG2Xr2vPr15oSScWAxz6MzKWXjc9W",
  "key14": "kW32Bww6eeha1EWpiavHhZErZeqsTd93o1DWPWKtn8ZrQnLJabfeP1kmgLhQAqQ7NnoKsPTC3snnLAy9Dq7dVKW",
  "key15": "3zhwifibhE4gFnKGYsfADEKCrFmhPJRXphGxtKit2SvabsRVsNESbaXNFS8Wiqrq2SKvmM43w64SLTJD3admM1LE",
  "key16": "4pY6TL4biut5UFn3Wrtv7srusYfQfVqXpahfXH2vyrYVp7HSAHjxp2Nvn9XKJxQLkgBEgF19U1p6XcYn22eHN7KV",
  "key17": "2wN4iBVQdgu33UXFnPrgNQx8iw2Ea7F8QEDtyYt51CCABZ9E9XgaFaDLazHvnnAaJNDb9riRypw2YZpNGDSmDz4T",
  "key18": "5Ugf2TAHn7y98HeYLPAe3BpbDY97tgwmWeJZEDwtdiXXnb5RxRX5oSnGXLugCqCoHgNcvvENoWrSiQzvoXh697gx",
  "key19": "5BDb9cFer2a4hPN5gqK4NPNV7W6m3TGxjAA3GQb987dk9Dbih59fcePe58viCdmsTkEoqBwF39RWt3C5CrrxFh6s",
  "key20": "3hZKzyB5iCPNbiNrqyU6CS2GYguLsarJw8PhTSQW6ttqXocunHXzkwvQfiQWWz1NAxQfmmoGyYppLjKT7iNMeAE8",
  "key21": "3Sjz1wMxSJMatgXYtG2Rr57p4Qi9eDYNRUrVyfuQ94pvvSdFtKVs5tSrWVrBMsuAxWovUymkCzEFyj14g83xpWjL",
  "key22": "i2vU418Na9v5yCpSQvBkGBQFpTQUrUmB7HjBup7HDRmqvaCH7jWyMTPtk7toNnxq6wZEGEbRXUz48CH4dsGEjn5",
  "key23": "yttq6izNrVhGKisVR8uvG7eXJAtWKJ4V9pJqQXRgBZkk5ikz3iAprKSFMxesAJoimWKNmvMYZQ2cVqeV3SPreys",
  "key24": "97sbgRBQVBCeWsXaNVcB4H7hguNiJrKTpyyo3JG7CTX9EBHwQG9X6JzwKDxgPVGjvJLt1XQb8uc5sY5azVJwNU8",
  "key25": "wj6fNFFaYTjWGQXKamVZ8CnAjJ7GMNbZLcydB3LFjMebBJFMb4WXLmeCYLXQAstTDmf7Lne3Bx3rvZuWjXHWJQ4",
  "key26": "4GCseGmK28dQXPfant6iYnbK8ZhYAkT4ecMYJrhwoQNtbvGumproDcwK3xejhs2MVg3hwtpGMnNW8duLnQdgz2M9"
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
