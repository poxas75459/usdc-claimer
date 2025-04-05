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
    "5WmTEmuh87wJhDX5doYBR2qA3V77JQwf4Bp17huQKSrTAtUMazeLZHDqGWuSz8jYJwNKXbZuTexUBJ6trVeSsJKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SRzGx77EcbesbLyHKgbPdKC3U4eYDVxZaqeCGYT5oWCFwUvDBC7rrh3LY5855DVxDxnj4Fott5TrbRJ5JKB8i8d",
  "key1": "3kdEtoTMxj6SyNN71PPjeh1yvkUNvVzNMokKrqhSYKzkekVzFVKucRnM4a5jhwvFDXLZUFS1ERKeSWkWi3673hQp",
  "key2": "mfrZLgag3HxKnoXmuCNZ3BmYKbspuBQosH5cDJBfm872BLFJzNUUDKtoJFk9Hghc7E5rhtgWwrY6tni4o4yCPu8",
  "key3": "4NGTKTWymmJjLLiTo8DJZeqGs42EotvoVyYaHKCAEYou5UWkjSS3Cwtex2wF8gXdznpFFgTHMRKRrosgg28JGMHg",
  "key4": "bJkq3trQ5bgiU4fwmd9qL8uxzsdfP2Wy3YpoMFaFWCwv1xGx1ySsDTTyRTroHaApuhtCVujqRrkpCA9p7Zbbt7Z",
  "key5": "26qkjdBz9KfuaChbdn7AnFW9ZieWek9fwHqkKrRbxUwcAz5j8gaaQvheFgQHEpZiMvF9Re9k31MGgkASSt4BfbHg",
  "key6": "4oVEVqXR35F1kw4xbwdk5yAcbVHWQYaxp4akUPRy9fPTMJjy8iF9htL3QNW96UgMjXGieHtZ68FvSseYNMg5hb9r",
  "key7": "3nLHFTAQ2jvHfwaPhGZC1YfsZoPfzL1CNfYXzmKjdxrwTb1GRaMbq7K1Y7pqFtZxV4qaXdczUnCxFrwEfmWJEvAt",
  "key8": "233FSYS9JYhZ2FkR2ASm8H1cag55JMRgkKRd4W1Lf5ofgQafPMYGvy6WqxVmZ6LJbyJRm3NvVCEx19zcMeUQHAPP",
  "key9": "3kSHXgaT2szGmRXhE3Ah9aWbMBqDVTjsVqC9Tid6pvQZ9RFZ6U6FrxqUnhi8KbYnZV6oSajCCrt2XD56ZwRBRoby",
  "key10": "2x1tfvb242SyhdB2Bt2j2q4kPAPzEgYXtJHogFDUx5Gj1e468GP432gXDEGcViLgGPP2qSAHmGFu2KuJ9HKgavjL",
  "key11": "4tJBt56YTZocXtd1Y6wkFEBqbu3uonVJPHoXqsyMEDCWoJFXdXcJaZ2KAjXJYzTuTFkq5MG1mwvBQFsuEBkSaVL9",
  "key12": "HRhwmBh5kNTeb2Js1uMfPzatp3Ch2oNmf9pDn45aXLdN5oqQyTt8K3sj1yid8DVKHnfauZoxqgi7LbUXifFsJHY",
  "key13": "3k2UgAcmn5WkFogXu99spHN33W5wTrwTdFDDSf4AkG6MhtxCH2fGHdQGKDXMGcCFvi7VfKdSFujbh8ChryBEi3qy",
  "key14": "5PihEr4BM3ojyCCZKY7hLFFDzqQjmaVtZjU2JbHzvShFZWK39ax3sinn7zF6QNdLLPVNScYqdBPjNwifrVdQ5HrZ",
  "key15": "5wn8FwFs86dik8r8egzZphphq7NPYMnJLgF8tKgUwZPPSo9fVdeFMmqMe7buU8XmqsEy6uJPDcznREMpQXyHNoi8",
  "key16": "25ehGS2rmia8jM3rtx7WYgYwiAjN7NpaYsCiCfmPJQCvU4S3F5H5mwhpaNhscE3QVuPopkmkpX9PWzmptFmtr7A2",
  "key17": "4nGeGaKqnCXBMtZ5LDHPR84vp3kmsFHjABwWNNXSzzHfiUW2HVor3fA3Xkbmxp3o5RcF8gb8vsebc7bZwRGBE6yM",
  "key18": "4Zzzg1xcjuPDL2NCv4C5ew6w4Q288FW3fdx7SvhU7kw1z6S1Sn68poe3R2ozCneUQJJZJrUz5C4cYLZuB2cRZJWJ",
  "key19": "4xXYs1TS8svZyHZBfnVWKKd2JXt7LpAKR4HGTWZH2cNnX1JDyvXHwhhm5SjV8gF1pfrAJDHggXi6kTeDrUoxtsXc",
  "key20": "4MY81tKmqkhhMs8a4qGKwPcevAban5rzTc364xfb2hGQQ7cUxZFAZ8dHCCMWSFeePb9dqZezVSa9Tkmc9DPUiW3h",
  "key21": "34WvxjiiZsuEa4PBHo4tLFYBjz1VikwLWCoNr5VbKpC4B7rXAZLsVwZ2wBakBoqh2H2HM6D6ioRYqe6cicyL2Csh",
  "key22": "58VccZSpcwvxZtH74ibsgoshn7TGdm5NPyTsktM8vH4uCC3JhPmqsfKjKRNtre8fnFhMcKSUGU4aygkQHms3RGh9",
  "key23": "41gmsm3P9FjPLH7Ev6zbgmBZrnH4g1yDw9NjPKBn2YXUSv83gcPfSsvL9JeUTcmuaFqpcU6Y59EbQv3PHwn9kZQA",
  "key24": "22fp7SSkSRkaXs9AabQnw3pW7gVXC3VCSyXiD7svGjgFUi2MyRg3KRtdeUaQe8v3wvcbpFpDMj4YxTL2Z1KsFRBx",
  "key25": "2jx7W6ucNLhKjbgCGi72zQ5o1WGPRB6JoX5rcqEr1rtujEpdB9ArCzyznMteWxqGxttg1PN2Cvv3qim61W3NitB4",
  "key26": "5XtC1EmCMmERyjm7Av6sJNNU58sRdNiYV4tFZsLSpa12nZ3GvYYgiPdk7v1ucseovcsdH3uTSKVqEJb1KysjJ3P9",
  "key27": "t6HEL1JDURe2N14dDKH5sWcuN5op6NUrZP5y9r7xbRsJiBuK1a65BdyF93AS8JZqhcgpGfXNgmWzfTjAmxmbxQ2",
  "key28": "4xAoVLkMexsAXAAJczA46CwwmqdJd9719Um8GWkwcu3ME6Q4MhPR7taZUmjYq4qER8R9yUeENWXRiaMTfH4m5ur2",
  "key29": "2fchJnHVMwDCbmPKAy78bC7pboCsf2sF3nJ15cynYvLVCBHH998TkhztuM4vQ82svsuQBoqyPZBf3nRVmktYoZdp",
  "key30": "4U6CbPNUMBWYZ9tEtefK2CbpwC9znUBjj694At8S4LoiHNnCXJmUhEHrFUwjQdb6xXsB7y5N5ZW3zvUcv7tKF8Lj",
  "key31": "38j6WiKmPGAPWvw8iyj6RQhagvgzhsoU2DnV8kHEBBfqp245yFj9Z6V1NVDNpzDi8QWG51kpA2TZA6TyB7STkz3F",
  "key32": "F8pnufLM5GpwZxxwwxTzp5viKCRe3VUVYqf3BnZwQtYDCULpBhwruSwwUtqcceUidNqNC5K5uEWxx8Xy2Z2H35T"
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
