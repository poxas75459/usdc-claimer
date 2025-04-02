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
    "3oEZHVTiBBr7hhg3UwxNv5VqirprUL2nJp68XdSDq6TYJqSpeCLViE3v1bXS7YXFGybrVma7wA5tvW4jhtHU54iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TszZV6tvsvGwbyF7JpsBLYQqRPUxWE7YGJzcqn7eWDHRvzQGo1ekowHHDxEsuabxh9KhxzANTsS3Eg2dGfmmADc",
  "key1": "41nSJ5gGPqAd5bHQD74JBmW5rKxBArHRSadyfvbts46RpxqkuphfzhF1U8k78Cw1aLf7ZFxDZcyTHdzV4PL5qYu4",
  "key2": "3AGAfE3uzcpBbBVLMLvbDC3k4zDxsXacGTt6ufVHFUAegr1X1hDwk6hUSzphozoheypzFv4mAcmw7zVqvYUF5vfW",
  "key3": "2knLaLi4hap9uP2ArgqMRyZRqPf7CnydN3f4S9gMNEGn3AcfcKSJvBZHwMFYSfykM8aMcKH8z95FbDcUetLYXcHk",
  "key4": "3YAoQk8ZhuK4ePy522W3kKqmWuWqaf9kSiPPXfWSq5NRTHBqrbv6RTgM1BUB56vmpKibZmUpqxFQEipC2uyUqEwR",
  "key5": "KdmBwCAKrpmMUkPnR4p4mwzSuwFg1UBQQEsCfY6XkQ9yF9rwmxds7wbTnx948yRkoYRQtDRxwuKKSWXkTaFWkNa",
  "key6": "2EfjV8P7HcvP2sTDMxDqXcMqhZY9MMysaoprN8djyMRcoKYxqp9YWFzMTA6B6TPBgUzYhvuTKf9X3VxAjZcen2Ku",
  "key7": "4Hz4snGWDLHQvWeq7HrtcN1xXYgneHULupxyng4GWBbGdoDKAmc5uDnNKftxE1Wz8rLstrfccbi6JMfrXddkkEcB",
  "key8": "3v3LAGYGjmJyMLA2HyhgbHzPzWwChDZNj6cQcvW2FGVA3VhigLRXCmpBvUJpPBrHQZD9suFmFqQ61LHDap9EBWDq",
  "key9": "3MYQr3BoTx5g7WSF7GacZYqGK4df4XnRwtgn2CEDtCYaMpmMrBHFoF1X593YhMWheav97csTcnCZh9oCMFsnQynd",
  "key10": "4y12TKxn6LgdXhSZJEo4oTLb58z4yeKgwexZypUYMaCbGkvSndeEo6npVZjWDuUoaJNTJTzWWXQacDEAnnDweKbK",
  "key11": "2yx4uNngtowuAyBM1H3o7n2UNqymfY8Ff2fozWo5SC5auzzB3rpKSNY9KURxWiHSVHVcbrbu9NcSShoePtTt4dNZ",
  "key12": "JczpEkCtNoL8zYiU19tfEFwmys1hh9P4ovaySwFxxqM2aA2fWb1oZtfM5a6vTq1o9fL2AqaqoK6zYkyHwVjq9AW",
  "key13": "4Yhgxj625pDT6mL8qdj2XZGdTdxaj3u8jwjNkqv6s5DAhvd4pw6kingkXFZ8FQBoMbLVbR9tTJpWpCKjGG7HogVH",
  "key14": "4UoxFmVqoqNaJRvJVnKyCakkTPa3e9TCA6H8Fq5CcsaPyhHL13MPB6WwRet6pYRz9PUiUQLUiksDYGxgJwVvKvRx",
  "key15": "2rAbaYW3UjqsNeUv9CMyRdFwzet9sZTo7wrEEDfLXKeN4VfWsYTe7jncJV4k8E36q48zCuhLq45DvxwSpfxv66tq",
  "key16": "4Pjxc63LeeR1sPAgz6KCKeyxcmGzKMkEZJt5DrNEuz1zNSh3dmBPcxRAoxkMMUNQ5hYYb1hgzsVLG5cvG9MTXxWb",
  "key17": "42SKu9zfvQfuvkuUaaaVMTqTRtNk3HcthgqBwYbtr8vNhTDYr2jccp7i7ssbCoFdyYhe3bDFTRUqi7TJjFmJ6YAC",
  "key18": "JwaFF3swRNT2aRseDdDohQR91TXu3zTswWJ2W3bGSD45pe1StRikHLDfJ2mYqUCW2c7nuCzJvdus6wvRGEC1kzp",
  "key19": "26GnARU6nFmPvmjEBQRq9iU8CbTjqjRYkjT164sXJ1oCkq1CPDRhGvSa9PE5FskLknQUQ3PJrnPGeG1LfhnBVNf5",
  "key20": "3HUahfzNiBHP8VC9bBjvXr3WL88JCzhFNbEyg6Wu1FN13rY5NFCPh1YwWQScnfoYfqCHpu7T1rwP13sTf6xtG3Yq",
  "key21": "31hxM5eDq3qM3tM5MdGqBHWWafgATDdUS6syYww7Az6zn5awCN3ZbJiTfMgnhoxhQjCv96MvoErQfPo6LXnYJjWJ",
  "key22": "4GsZV9NdjjTiKFUYfX2dKB6Bt7eFRJSzdDqsdWteMWZXqZW5aoQY9FKFnmy2p8564kFFozQQwbLpHBbGyWD58W5u",
  "key23": "2e52wsEvKtTRqPiBuX7xh3faJ2VDy2sJd14RQTkU1iWjRV6KNw4QgiHjUPy4QsHYLLbNnTDud8haRMrD84dgrkEC",
  "key24": "4tAL3BNfuGBcYbzSLMjZZf6dTe7uQ1tRe83sf3rxbV6PWp1rrhr4fk2BdSM9T7zhvMnGe4xCywY5n1tNCY73H2yS",
  "key25": "2fBASYLEQsF8hstsxwsgadfLdmTs2LZfXTeBaG7HXemVm3teakRxzyWMjB9RdgbvyFfEQeJDkm2YGDafcyE9HH7z",
  "key26": "3RhRMfhvEZR1xDLj8s29VT5nKsJX445L4dJavkWv5qXJrUpgR7Vw49ZxNTMQp2tmpyMgrjAAS6hjPa4yMuvzod3R",
  "key27": "435MtttkXgbYzrE1VXDWRMgwuhnXbJJPu9x7LNTrWajuwUNCjkEbALHj2Ey9zGXRLuxiCsPYKHPf3nVahwonZmju",
  "key28": "4jRXcb1aW6hCkaqDUisXJpbkstN5HqfqMhRNeCqdc72zSCu3BaApQfmKC7V2HKjSYNur1oC4kDu9ugD5Lij8jMhY",
  "key29": "4AcwmYQ6FWLUNHWBt3TBXx2XEYGvLUMswvHBGaZAfYKVTB72vJEufk5U1HFKrcbNR7zChhTZgdPbtacaqCHcGpV3",
  "key30": "25mZDbUb8Ur3w4WJsukAqP3KUmtfGWxqm3h1H5cyz711PNCXbTA8VFZYBXhVWrVKs5dkrErjBv9HkCjL21ryhYuc",
  "key31": "4yJD5aLfF23w4EHqT1S4n75igM3TGHHRrBAcJGwfeV4DkbC4LG5ynBvMTnMJbUQbaNduh5wBK96hPASGW6tzn9NB",
  "key32": "3HMw2cS5Fy1BFHEhWL5wPUuhuavoUeGYj7dNMaMqVkZ7QXV3MtgxgbCYCuTh3vbunkHUU6KRuqL1YnGJkSYsoN5C",
  "key33": "4m1Gea95NWCzEwmVKrjp6W747E2uquW92qYVBLA1cTVY8U6RdU9EjLgU2xTdFUGbVFx3x6Kt57i3Nz7bUA6stQag",
  "key34": "4AwahgAD7Lh4a5Ydo7ZDRXMy118T4KoiXRAJu4qXhWhvFZTuK3ovZRVahmieGh1F3vorzkF4hSDp289esxVftCbn"
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
