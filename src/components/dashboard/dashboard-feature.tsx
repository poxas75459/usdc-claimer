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
    "2xNEj8vJz7b7iHULTrpraHekVZgLDpZqBmgMVKttZrzHo9d7oCXWaYfNZafrRexUvg7T3tn2bBHoWZn13cvmLPpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vz2BUos5JkuuRPcqchHCV7uPwYdHpVtziWPrYYgTezsSStGoXp2gvH9kSasHKtg8vYctfHJUsqxxWhnZbn6ok78",
  "key1": "b817AsZbYcRBeULVGDr2cpE9oYVvEBTSKNkwW4jTNZrN8ccsMACsx9WgrEq7Zfw2j4SyeecuPAJkgUnZv9g9xdE",
  "key2": "4oF2RRXDtd7oHG78Kg5Bwbmtw5MUDsWNS7Lwf8eThdCQDcdGVn2m7z2mRra19EbZAP7u87jUER9sKkeymyYKVN8E",
  "key3": "3oWbofkhR1PKDSjeixTk1A5FWpK1bYnEJFLFMmoXo1uPPmvJHR3ZzEAxqj7NPWT9aiRVyKGsVUtAPmxTCaaH3vzv",
  "key4": "59F2r3Qf118wFLNx1DiNgYrFCUTgWBdWQZcoeehatf2LQMyPycEmQuCVHKiHMVd2Bn21CfVmzYjJecd4arYkgFFU",
  "key5": "tZk9TwHQnTzPUExFP9gWAw5MhCPZnW8SfKmyxBAUZekxBeMirTXp4Fswf5Z69xPDqURwce5dXUcUAqNvg1UmLA7",
  "key6": "PK4Djv4hwqQfMPnNKsnDcqeUe18AtCydpzcUDjLJhpgsRY7LZjL6cLrNDxa6oV45jXihZcHkyjtQRpHoRnmia7T",
  "key7": "omDZMts21ZZa7sMUKcuLaNWJ6ULoV3TYgmPGc6BY9MHRjFvXJWx8kPPpu85mKwBY3egZBNKB7mhVyHGmgKpZ5Py",
  "key8": "4u1uZerDGJLf5W7LZH8xB5i8vCXniD7MUB65jNqqQcXgpXatXPypBaro7BrPaHBdrppxgiLmf17pw4JaUsw4sQrL",
  "key9": "3tgWnHik1LkYTQKHcxmuSJEYujXCHCZPuiMinsWiDBz5gx4njMmhjsnKjXyrr13WDgGF6uS9DHEP4tgU7vmu1hqs",
  "key10": "4tgrrsBBrq29mW7H18ap5sPEstSZYAp33KiRiAoo6N4a9CEQs9SznZChHqvN4Vvxp8aNoSuxdNT6b7BZtZyxWaAN",
  "key11": "61Te8muKnQVgYJkqw5kGKeCcrWQnkFT7rqfSgDc6GEX16dARAUEy6EnK1otLumX4fJdnHfgRzRfG1CMF8adLgNH5",
  "key12": "2qKFvVjiPKGBU2AfZsV8Wx1txCVRRsqFeENBF9exeLb2qNRn9B2ec6TYQoUhLZ9pmcMcL5214MshKTRCfSXCRVub",
  "key13": "2Zemgc2p9xJrSYzuSDWjt6NoVmv7eVH7NzDC2nDXpeMyM11nDvpdTsEohymCW2JfxbmLx3S3hpYEgGex9bT9uGeR",
  "key14": "27sutBr43RaKEFT7wCG1KychYHWNJMRWBK286NPBkUTZR7vESK3pafFd6Y5SL5kwYBQj1dDMoKaDdG5so1ACXBm5",
  "key15": "47rKNwJHqm1Krmc7UPKY1YzhNPbEr6R7HaiFMzBhBcuwtm3RvjgcyEH6drgG63HgNMfhEwTKJxbuPFvbjgA4HaxL",
  "key16": "3ZaRUMej3N6giucKsGhEjxs1wVjN7RdbdAUbXFWFxodHCtS56WCWSEJMVyMKinY9nj6Gk31anzeHfyUqjga5pVMP",
  "key17": "3DWExn5YqPtnN9guhNtodzUY5Qi3FyzWs2hRvQH29JcuXiVsntyw7EnLWvsx1Sv8z785cMSKsb6GVVgnv1vj9gjw",
  "key18": "orvnBvah1EH4TJHM1fyfo4zE1PUeiTDuuLf8egKAx68tSBZQZxxd9HyKg5CVhA2YizESn8PvotQG9vJT212XDjU",
  "key19": "3AzJ8JzNzHGn2UsWMACrnQkzHgcpg5Z9RHyyfz2wVTzksLGvzkFsKN719tf1uXn55np5FHgVECKzRoqmsjHf95y9",
  "key20": "4S9TCYtnnH6iCaRNEuLsu1GZ2CB7aCuRYSbV3BeJdLboBfJs4RmYjHxVenKzYYafn5T9rdMTZLSXeBN69TVUJcBS",
  "key21": "4aWARLeL1XRpAjYnT2xJmxrpTcBrLUTTkMRw7RDp4J8WXHUPoPtbAXHrFfprNDEz85RgVR1PtqSzgFUy5Hd39PZZ",
  "key22": "BBcjnMxbWHZWKA8iyosHAozZFn979y21Am1yMwE6M7Jpb1SDKUGbv6MP53E2r6WBLSPw9s44DNeUmwHPy49BGg2",
  "key23": "5aPGipPh6fzKxxF16sjjTLkEP84ekr3dcRhsn6YCijG9hcwVcSCL2G6LcATdnZSnyFhsnzEq7oQW6rwyN4czv3WZ",
  "key24": "5NVDcifovVjTezFTZKkkWgvGrvh7xTrisFq1C8KwyfpTxRaSVafYFznXku3yZQaKp7dT1yDD81BhG1HiCMkGpFT2",
  "key25": "62HLgnojH9pN57zdMQBi2Tb5iWeJ5dbwbUYfR9vpHdz3fsFZ4Z9haGrKbDqf519aAWfRdC6PXsFAjmd6eQifRFWj",
  "key26": "5v6bfhCKTzkWXTZ13hmzaaHtYk5p5nmjSnnkqn3JtjKRuqVE4GGSwZPa4kv3AkozGU9dyYP4iu1gJoirPPLp5mJW",
  "key27": "189KgcbV4PwNgSyyJ1xZnxyguEDfgV35iyLK6A22EsFZBxmN1ESd74unubqUBiFDAVtEVgpZ1eQD9j19dJgyD3h",
  "key28": "rUQVZvSrxeS7rvgc4BjcixeFWLRYw6CL8JETsm5X49AxFRPXZobD4zyEt7HXC1dffhrYBwM3HpoLUZqEQ9AzzPg",
  "key29": "55ZnK92UEZijM87ZV84MGMmzNKeHHMKdmVaGQP9fyMWwLxH6L9oo6XzFMfca28K7bH3zxhwYjfgXEpUcMB7ehpxb"
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
