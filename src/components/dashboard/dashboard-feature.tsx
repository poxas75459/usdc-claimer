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
    "4qHWVS4MRMYBq7ysHz11LHtBL3BsT1vi6RA8NF3JqppN9SiMg42qzTK4aN86WVeRFPaN5Dp1sTVNHWqPEuUjDsnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SZG5AShsQWMQNgGvcB7ncxv62Q7BncSsomv3XLuHXMHQKEvMtUfaoNS5aR46o2NgRELa1dfbw6MaGxhuapfNtMA",
  "key1": "rSyKegUbdi9qGmq7e4zmQUQhk5H6pcPMDUivb6kGyEGwBh3YSM1VcfxWRtZygTYjYxVsHHNAfmx5MLCHEpQXQMo",
  "key2": "5dMVPnK3nxAmgP5sMWZHwvPe1GntRYH9iEFqb4ZGCA5fkvTmbTCrRtpgdZeFnJGLAfsbPvh5qUk8PKLgNTa2Zaw2",
  "key3": "56nxKUqD4P93j1brynMtGPqFrYarFu3PfPM42uNqW2ojCqBdLQAsnKN2Dyq5iCEPL4Y8GShUgrA3NBgj2KjLpTAY",
  "key4": "2v4iPb4FAqBE9RzGGW8s2pDJ2WnC1jYeHVnjS8CG8ARgA4Fjmpc3DHQZUwXckZ4yKuyNS3HZTHTbYxmJAbSBqUBq",
  "key5": "4KUpZDV1oQYdogwA33TyCPaatURkyBm4FMSg1wRgnYLYYKLFn8DZ6BrnFygCvoPKh3nZVAVCjVkYgLHzeyaTnRFs",
  "key6": "5aDi1Z56jBL8f2HrxFvmgtVfWyBDMzRPDgd8S1L5vrb8pNaRpjnEmoi2LAFy5qeyGbn65LAhL7e6iQdku8Sz6UoB",
  "key7": "2ALeJwFtEPDGbYteAqNVnVHLhe9gHe9TUnmrCtVgjunW9rcsBEi43BHKdwE42np9YZoLAc3nugDujmj85Xt5Wb6e",
  "key8": "4CyEo522T8ueoRs4TBUHw9qRPyaXSaa2SDcMfyLaPmGh5bixE7PmNMdaDXXBqD9ZPZKNYyfd9odRdTxnb1LQpDnv",
  "key9": "4DnKWx46Tk8RQBoNjcrh7b81mePTy3GK5kdQMMKwyxPJn4BU5r3pAZBGB1KqUDq5ztcoVvVXyMb3M3VgTDAHgrmA",
  "key10": "4hgeYvuqUinC8pDHVTfXfRWhbbW4myJsujRo7N1dCRKNLNwpmNqTpqCMTu7ELynUdfecwdiohySgLotvuhgchFdq",
  "key11": "h7XtSYb8rJX1JduWNjrKZHwFBvmNAfcf1Q9haySPp4p4cr4XuyzanAdR4THaeqMwXL5uqk8JH4KVvd9Z4dTWqo5",
  "key12": "JKMgEKT8ahoXbnnohtFgFQKYw33GvwkuXCmwGYFSP4zbPH3Yp92MxtyKZKEPM4Z2ZoRfjo6FdXippJafksvjciB",
  "key13": "3vTh6vEeF5QsLShh8WYEzqztrhFaju2EcwkfFsJ52jtNmSH5PRjkRwiPtUNp4M9C5uBj9mavsk1jLJKSwiLa9dhX",
  "key14": "4xJnAZmvWHHNrFLvcekv5HT8XT4kFc9qNQ2nqG14nhXUEYt96DrV5R9rkkUUvn4yzP8aZSs15Pz8CUFn3ooPDBoH",
  "key15": "5GdDrtoTzczgymz887HpcyPJ8TXPrGysJkpfWUwGoMkANHCgTnrxpM7SAxqfPhHTPqsjYZMSHCF4jURNQGModXNJ",
  "key16": "374tQU2oF6YDqycG1UbBvoMuB6HxDj5P8hHr38yop1cXatu65gayZDuvkVD1wYZFz7jaofWgTBLY1QFKvs8vhYNb",
  "key17": "3rd9iuKE846Dud6pYa7LQAmAU82yYabD2gXdRSf6ejPBBsUNT3KYrm6j6X54nBC3NTTj3eaMqAvkXRJo8b9csae9",
  "key18": "5KTvWrm2ReicHKRrZHqvsF1qC5s8mwfgcojMrKtwP9kvs29u8UoytJSj8RrwZUJoPM1UnS5FfeGyvyTXddN4vQnZ",
  "key19": "3h7ytxdBgfM11wodLecZCUuPnoYqTb4r7rot35QC87yX94JQZ4o4SkTWufaCB1S5yXfksNqN2AZJc2f5Msthj2Pm",
  "key20": "2qugeRmsXyYZqGfmMfwJyrQDqX7cF99Lk9vYr4rwUTA4aRRpdz2sh5zUDQtut2kFLcVtGxVXQ1T7P1EvxDr8Wrkr",
  "key21": "3kQC6g95GRkQSpxDCJLKmDs3mPKUAXJRR3NSCHX1dv4kqyMT4LNuYrntvKKyYY3UazmjSztNzSSxWAqCc6RMyFve",
  "key22": "ryrBRKs3K1hC4CZSydG8u1u23wKTWRSVd5fxXtfBWevHsJRAbabyqVTyQfWWeQtc4VYkP1L2HDbS8KJvGmSBDiT",
  "key23": "3P4K78LT69AD52PfZUpjoJMBcMaEpfqkST9EBJV4KPBbBBfgq7jbQwuUZHPk1omtqiVvVkLTgPPviF6FYTdxSLun",
  "key24": "5apdjpFwiQTLqHoamiuDaKeiEt76jYJkSkyrNhDrm9VcXZ4MGuv31knKNxdjszJTzL9MEPM9xYhFEqU1VrPGLwoT",
  "key25": "46fqLUeX4tN3McmU7fVJi6Wz8KYLrviAYQGDrGQSC2CqFeJBBppWXvzd78krXz9o95FCmP2W541rzhnEHPWViQgk",
  "key26": "38TRFPjoRSgZ3sby1dDajSMVqtJUiU21TDDfQs4LihQwtxPd43A5FSxCJZnjtncguPASdwvqGz6SRoo3MhP53sCk",
  "key27": "2sUE5hA8hrsbbKjhzK2hiPDmvx36BEhfLf5DY1nkuqCGZ3HE1G1pPmjyZyLoZmgKWmjs5dazar23K4jy2EbvjmYF",
  "key28": "4r4GhTKJyaZn81p12qLat4keMzYufh2YTjyfrKChpZsrCgQHQt135jnu8BpWvAjrgWZePRwSDrLSrxFvE8NRS8CX",
  "key29": "63uA6MERVhcDHFkUA6NpjpCYYUXKrnzk2QSRFXvw7V9AE3QANPFVSyCNJjkRrwkUWM3JBepcYvBixeV3xNeL9ed5",
  "key30": "3LirdfeCjRzNp2WQPnFxHoWXyZyMNu9VJPoXTW5fuUXr6zwTZwctzGNanMiDNZjomGuwm4BhX9j7WyfZdnmL2k2j",
  "key31": "54o2iCnimNNmdmjtBPKyr9yz7FtV8JJxqeNYZ8yafXHpJZ2gBZQ1WCvvwnHMaoF8ST2gkTLhYgu7rRjE7RqW6LG"
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
