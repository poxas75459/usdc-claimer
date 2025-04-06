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
    "2nZFviYYhu2CXub9ZvbWr47iuToaoX436AeMPQMjXHc2ZnTgVsXrVnEftAQ49osXLKUFj4RLqDGKaonK2zyQispm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6qyUrDKp3gCFKHsmhA6DMt4FgKEMuSGXovKrHHewp4sT8LUJ9QSeZ4ewwecEDN4Wt9GQbx61BgEvdLSSV27gHd",
  "key1": "5A9cgE22EBqMHXrx4puf8ER8aa1TGxJ6gq7WYqzsNXnyajMdJw9oxnu9yqvJM4ojnq9JxWUdeKyVEiT7w3D3wyqL",
  "key2": "5SoZFDh16H1TDn7W1RmHMz8X4TqEFYZaoJmrzy9Meh2h4nUNmPXQK89Wh1JYznbRzZg34tyfLMLctiN3nmXr1cTz",
  "key3": "5wGpsxrSTEv2A2SNAvpP1rFnphNYuadRB2otMDmLom8aMwbT1GhAS4ae27aYPbBVfeeV8pdEs2aCVB98ene15Gev",
  "key4": "4dpA4gpWcTL7rCGZmspwJPaVRu9egwMsBSV7tLynNAdj1GtWrNC7cinHi7EUVDSgQQ8dVL88Chk7R8ZXKitKFpq8",
  "key5": "4dTCGzQwDZtn7W8gnmEE4NqrQUvAtjxZqaYJwUTFKUxAZFZ3PuEecxMK1JjL5XewQm2UK9w4Qduxt7M2cetD1T8v",
  "key6": "5kXF7Mi2cSS5pT11SDroXe7vfs3SwTUCYfQkxgfi7JmL6LejMHzeWhjwzRiWdRwDTDkGsyURc5XQUYMBsNYjc8bi",
  "key7": "4vtnKVG6LiVi4eoN7j5ybiMf4WmCQjywZWy3H7zyDZqV5rTi22mxvsfipXqwjxXCE2XJoVcG6Z9GpWs4sCimEH51",
  "key8": "5WsfkiRh6XUT7s4FSerEkgrfvLdEVLqyKMQbAvo7WNHS26mg89nTRtg2CBR15QALiYTaxSSEbQpohm9ESBWqEbMU",
  "key9": "4LbmPnNPb54od9KEFGpHXaw9ZCGb8TEJkNP7DKcy8UFrfPfo4khM6uRGkQiMBGEiyNVdBmj8a63Bgd1JTkip6PBj",
  "key10": "4aShu3iMwPWXWbdQZB3saf3q4J2QdodjYWKFAfxHe1D5GVz7HrZtJc2Moy8qtLPg8mvXVzWyeh2sVYMzNhtmiSpG",
  "key11": "3GBR5Rgvc2aiVWZJF7yJdv8HiP3koFevEpxEmByVvf9nJyzY6taYytsDFDNNe41EJBwn8oy86vdyhLn3fcPDNDM1",
  "key12": "44EfZt7M5gVUqW1QcZKtwUVb5UydNYji3bFSvBCpG1hfTqtB5W2vHE95MjpaSHK4wLAikgpJ7Vpri4ow3gZqNiqD",
  "key13": "4G7Hwt7zKB7U9AMdoAdnHD6t15mXcc4qMf8bA9EoMZmsFNuSfPNWQbaQpBQdhesaEB1KHRVa5JxWg4rpdgysGwBj",
  "key14": "5hChvw1D1jhAVeCPp3cAEiycJZKR7j5Gs6iCaTcxMvwzYDETQ73wTHETktSvBvam9zrmKzKniVNP42W7VhffVGFE",
  "key15": "5yMHEum2FxHR2P35pVbZsFfNhMigYHpwruzWyMu54ApRuYg3KdHvJAN1Gk2Fta7nbzYSrMhFH5f5dm2oYLWaKL47",
  "key16": "3yh4f4jMTTWnPmNNfoEGXxzTMgevwTTNxLnW9BPshb1Cw1qAtJK24p3nibtwfYrEUU8zZdaj1m5qtP1vUd6qQwv9",
  "key17": "3akSdAE8LchJr4ryn9osTbUG635rMWST47RHs91nemCKeUzEJsXLNSCrPRupiKmPv4nxoKG6guzpJK2jXaPw6vyQ",
  "key18": "5MJXoWH6eVB3vZABgBGshuGZFchPQXg4YoZo7kzTN96BwmeakHk5iNCoY9KJQxfkqNCsasqoQVpJvxQBbJbfYKQ",
  "key19": "8Z61HcRPYbfPAXHtUfbPjENTyam3SMcr2EFJJv2RpjyHVPpBDJJEuS9Hr6R5SECuGmgsqdeLK38ZYATQv6NR9pE",
  "key20": "38jJGBSXDQNf3G2LG1CcAupmGYM5duP3cpW6bS1GPEGR432UHhb9WdwojweBp9kcsxxTyuMYfy5HjPSxZQdH9Q8B",
  "key21": "5B1Jn95T68pfiVKDbupbsanARR625qTV9GbvyQ5Vf1MNuc55yTDBpetVPaWTd1LzULvaJQYoPpDLgSEbHcWXwfT3",
  "key22": "4T7kQ1MyjmTDqxUKun3mWQg4GfRJPNgJ4zKL3faWBE4kG1JPaseejbJ1keLBrWFpuye1rb46QBzda9CrWnETNugs",
  "key23": "VBCfQkvFx92ZpSxXmnUMt6w5FUWPzQNXp8QeByzJ8jKvjFk43mWTMDKDXsoXyF3nLwco26uxfVgcdU1Gn8fYndA",
  "key24": "4N65kSk6LfadZkMNrUXJM6etC9GjYQWg8HKD2yHXVh3AhGfKWUii36k8oZ5sEJb3iJDygzstmH6AHfTwZmxjjJST",
  "key25": "5LK3LvQqTG4U9vbK22LsNDW4vxLgDMkpTHSPfG9qxTPufTskS3qLmKFivRmpwpYkLr6yWDhBEAYiZLzZ8udXcfZ3",
  "key26": "YSsJEWXvRUvb6afdjg2sAkX9XmfCd267W99fn7A1Wx1h2fNQaYzUF7UcZ7EW42xhEVBWi42Ba361we63jiR4ATr",
  "key27": "t6embHLSMk7c5CsA2AKXaoz62iXEvh7XBtnQR4c4P5wevohJYWMFHfqnmzT7o9Df7fvmuh26HwXBXa8ThSyxKBL",
  "key28": "2qsa4MavhAEjdpBTZ7zm97xtRLQJwDXBzHmgP5vmUFWSBUfTd2Gx4he7FyXGzou7fsDzgSJkbEeVMihW9K2bjbG7",
  "key29": "5dkGGx6j6mTrPdxBBc1DVhw6mA2fSAp4fT6NAr1XtBnfw3rXUi79u58JG12HQhkAR5mV1dANY1Qgmn6DkbzRUUgM",
  "key30": "ndfvwdcfGTUAhNncXDH9uJswR9xzpQSFwtmKKFD4U1RGGfkSCCUfSNicxVUsogMCbaLBLM7jrThUhMu9aFkz2Rs",
  "key31": "5BDCkTb2iXLKbYa8mA65kU4M4sbg4CmVoUWDx2ugC8hmPY4a4gbDBwjPRvAaGR7REobfcEXCG8sdS5SSxcYAMA6M",
  "key32": "VRmYQf8kis2TDb8LLLjnbCE555JQubaidwdsnx16AAbHpWQUDLR7wYPkag2aHsR8vzrVBGMnd31qiXPaVxweFvf",
  "key33": "48yTqSWqqqBjGtkScm4nK4tMn6ZX3KkgQsUYde7F9bbaCai6uzg1eW17ykjs6Gp28ER5Rah4aWXXMv3iyXspC4Lx",
  "key34": "vbpRQMsTbzZtMHShjHTMjcGGi3LdgX8uMJnnBdbdkMVxYQYiooQJBW1Noba5b7exGrmMSYWnKSQEEGeH7roks8B",
  "key35": "2CGE2AyhvnnMmJW4BkA8SLbRFT7T2uoN51ZtiySVtHN2GdD4JPtsBEgMACM28Rhjvk41R9eiCctLhUCfgkZMY1HH",
  "key36": "3h7d5uUw3xjc5jYDkMuo6QytntpErUb6YKUpVeXS3KYGJQ73YFGY11yXqdZ7DzG9YArhMWbk5hfRRVvkxuBBGioL",
  "key37": "2VhuzZhLwHkvo7AYjPhrxqwgkGoVnoebR5Jagpjw7DoM721sq5dcy6MoutZsnHFGAFPQiRtFgckq5cJTCreei6JW",
  "key38": "4dBmrLyrtbtbvTbRqnrxfjMUJCTvLkBcquBBswddzz1AHvvhGCeLwg8M1bQeFChFNekfL1gX48Dfzf3rPPx6gysy",
  "key39": "cvXn49P4DXvhZBa7twEMRva9JLRKZTqn4hcu72U9JCX336evpJRtRzxjk2YqXAwS3y7uHgFqY6zqP5VCoejoyU1",
  "key40": "2vpAGTjG94QyBtUFbuiszKr3wzr2do5GeE8LTuUSbuVGUXUbwTrpYySvWdVb2N6EQKySRdE7eGFzptLDtjk7XDp3"
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
