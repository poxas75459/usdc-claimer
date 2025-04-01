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
    "4vc4yFkhG2csxJUUJNtkvLL1B7TyXhwByvJ4GsYAdxatHSCC6wojoraRY48MdQ36wvvUghp9SHvJx9UXB62akfr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZWnB6Kf6wpgPxEF7NbRw5x11cqrrHa1PRs7eDzSLcFjJnatsyzYqNQ3nbAHEoXCvtbZdKh7a8GRJ87WmGRdmccn",
  "key1": "34DmQ9rZUVzsgVUzpiehRFA97wBUci2488qjdzcZLu2GHLMHzqtJHJKz8TQxsq1c3S3SpipxfAs8oyG4Qb9zRVr",
  "key2": "3unJ45fHGUVzyprB47ytEFn8i1V2s86Te1dmx8qSEnA2nBwVMGqxnEvXGP3qR9TNMxhP3ng1MMdCVQfb4AUk2JyD",
  "key3": "4ZcCWPh2A91MJLWPZ4FYtdw6JJKvHkt1rf351vs33cgTgcPHXpyZBnD8QjnWxQmBQr5YW1YokSn3dWjW6BA6WNrw",
  "key4": "3Ey9oYGDcZkNRaBFLMJK9iyTusCLvUwqgZsmcFFDmRJxD8qwY9uztSpLoEcY1C1NtiWbfDPmVobvmRbXA9ypUD4R",
  "key5": "3Sy2fmA7TjYLpvV7UoEY2nzk3oxqosnqo7ZTfqTvHzjt54YELRandxdxwh7TS4eMB3fnb7kimLvn21TQyXcwMt6L",
  "key6": "CvFSVQHzC5UzCSyGex2gEjQxnTNHz5PJLRwpfC44Ra96WEbG4T827EA68iFHyWsAyvRfEFFw73zPfNrT4zQCVaE",
  "key7": "4iEFKsnfD8VaLJfudvx22A4eTnr1HyrxLnDA8bQi9xJNFmaLco4hqiB8Zdhthnw3DrBQY2ZYaVFcD4op8td6yxWF",
  "key8": "34d9kxrJx8auhHAr5kF8ohMoVnciNUh5Nt2ngqMZpDeG7HHXobM9y9UzRr9sXrYWT9wxHg2Hqc4UmEhYNZRufZfs",
  "key9": "63EsMXJT5fJcr32KBqTzYYuGSnBMuHt2mPGW5huShxBGLXwkkbABEpfFtneGcJ2k3CdCQucqp2DWHwpgB3qwNLqA",
  "key10": "5K3uToawN2SwdYreYaMSfboLJ6NBNCJujwJbRuv6MSoF3MiFimX4cdmjYTVjMpptYjjsAyoaX3exU1fsTL6nDDBi",
  "key11": "2TTX57XW1HRwmZTmBtxfKFNWXPEfKxMSDXgSwuxumF2nDbuEpFZ8QA9VnjDCWDjksFFDENWCZTPLzMWnDJJKXeNh",
  "key12": "h5FZ7U8gB2Y3HhmnxkaReQELEU8NXyssKcMzjf86EgoebqHDj24wG3GBrQ5sAYzj6JAuDADb5NS7TYNcR9SKRsy",
  "key13": "2iGgrb6jssDdYCnvgGb9bH1NtuvQ24eRRpasrmsb14Pbo2Koax9L7Md1rRqGiWzntSdkug58s6XDN96rZwBDAvxS",
  "key14": "4ijQRDQZbx96e2yMqA5FQp1WGkmSfrpyReGPAHUBjSSH6K4JQ2kY1du5JFAJTxqJh1rCFfDRYrQzwg3HFMqGuAWa",
  "key15": "3E6ZnLMuG3JcAtHCQc21ZSd3P8z8rCTptkqUq8WHxanHPkLvC96Cqyq6EqV2yUuFhEDX781j3mR83GrBt3tRbdwR",
  "key16": "3TKP3cmxaUoZnZFNfbHTkCUm46LLX4sBpHihNQKms3Byx5UjERWc7Jm6ZVgZiTJHoLS9gGJA2ddXfboJYyDLFz3E",
  "key17": "5hd4wBnVQU9DmwLkTLRXMX2TTadsiEEZFZfNB9gQHuMbDzhAQqgAJ5SRzaimSkKPFvkL4xMd5cGRnspMMTFPMQYi",
  "key18": "4D7eMMFeBoN6iHU6S3LBEWykBNL52bhdMdJYeRYdVMzgPE6UZo78L7tRa1kZabcYEzZTkfra7r4wpS6RXxq92qxE",
  "key19": "oQq7LYY8wu3u1ygNoLEZjQ5LRxtCrEAsabC85hSb2f6NqXr9Ri1hRtGLvy4smby34GmFqwFLEJXvtkd35tfcJrW",
  "key20": "3HKtSTXMp1Z8u7SEQws2S2mW4pHYF6iGcZbyDQquyLfeChNjZ55e8Z1d6rufaPbQi7TLKWXtwUXGkqj2UiBB9HoP",
  "key21": "3iXE3zGGiJi1Tu688NKQ6RRbDL1UgEcUgRtSoAt8pemxQgwkK9iu2XVRL6kxNoK65VdJLrKZxaQyXd5HwxwqvA9n",
  "key22": "2hGKvLo7u6jhdTQBCdWsAKH43Lu2w1zMz6npH3LYbjooSsccNXZFhi2ntdXGQbyH2pwS4GBKBnLEuaLk3FbLrnZB",
  "key23": "3N5TYmV7tu6hX8ReqRcP5iho9eF7yPxE4V97xmNcYetaNi9HQqXE6rHAesd9AZ9p7wy7saWDMauwWddt9GkUqrq3",
  "key24": "5ysw4rRQ8znrHXeq73Nfo4RdwYkCBcjcogKeCEiq3rQS81hx1jUhiYRqfD8NGKHpRQsaEGr8JhDDB2eyiYD4BHwL",
  "key25": "4VGKCbDEW4bpK2qKUieEdpVP6xVSzLTijXFD2CRbmDFzEeauCS5Djx7xMutvFiDvJNHafLZMQMAN1P8w5siw13mL",
  "key26": "2tfdNvttgLYXFg17FCoV6tuu1e5xWzipDBBJbj4AFgVd1Rn33hq5KAZFqvJLRoYF5WgyVzN7XCUWFsdvo82FpoXu",
  "key27": "byz281DGQtq8wo24t2YeMjNwRmUMfyjXBomNUfTkkNn2SWem7AF2yWSnWfjAUusuGLMmc9AVcVTjVmUAq8mzM1h",
  "key28": "4b9jsPsHkEjNM1YcYfaVF6uBqwqk8yjbM3CqaDiwRzzF8acgETgP3uUsZVYnasTUgMXUDpDpBjemAFkq7qukzWEU",
  "key29": "5PSEs6N8MwEB2Hah7kkz1MpCm243QNMApP9n9rgwbTz4USVM6QnQoVywVy3kgkvYGcLpLjfpxknowN9GqJG2xeds"
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
