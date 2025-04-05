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
    "4pLaYWfNzGGMiBVfFEqHpAYnEAESo2v5VBtK3ECHpmbY8FynmuF1NLcMa3eVhJ6wcJkjqgLDnJaAY1ARvHtANzf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nT3bXWxmYh8Vw2f5x1De5bviZNEeGabss6Qv1xt9Czv9Y6QfoXnw5HJ7S2rUUxCs2FgDrHod7hH5Vjq8NG5nSNC",
  "key1": "53s63Mgt8ptFS8axFdEwYS9roeh3R3WLGNabz5Tt8phZhu1TsmRzcichssQmBpXXc9JAqaLQ8mQ5Cd3qo62HBJXx",
  "key2": "xVVsFvLiEx5srLXZXbekwmKc4S9rDVF4zVmujbCWbFRryDycPX8kkQ4SB8mMsAk9V4ta8GLFUVHcXQQmVjUfuKE",
  "key3": "5cFYik44jmtTUX2kzrdr26j1aC2gWoSnKBMDErYrELBYqrVhLZJkz4cNWiZ4a2vNv2dyJ2SEos5bUUDcbYHuf3eT",
  "key4": "56GESmXxV7SwbN8hUSBW46RAbzd1P6ayaXLSz4pKyUuYvPVS3MxVk2eBUjVVgZw82qkmKkAtAPEMRHbzsu6H4SH8",
  "key5": "HXyxdjjb7JozA1RT1yjZ2JqYHjR6yjBXA8eY5j7rajXD1SVp7hBgymsPthFtnoNAUMwGjwFTQD66Sx5MHANQbeF",
  "key6": "65Ygm5ee7d9ACrUt9LMv64bS4Y3jG7jYdnFaUG5VodAeinhSijJB3MrQEYhyxvyCavVR6zWvvYvZpCx6krPVGhhG",
  "key7": "3z8mKNnVAsVhntuKoYhHamAV5RwWq1UagHe56ppgA2zpdrBHtajDm2Bcj3Mpau8oTrmKTAsmEEBAYM6c8SgvjPV8",
  "key8": "4796XRPeGe4wWX4SscYxDex1KWtxZnGYZTJeP9Kw649tKoRYKXEoQMKBUrbZLVRMMiJ7fDPyQ5KerQeivpAoqFFd",
  "key9": "3cbvHoCYzKBJNBwoi8CxsBGSTMLtvEZUpjKRt1D3Q3fnfXAgYc9pMLvYcx2AYbbrFs61cjHi77eFh5NvizHnLcS4",
  "key10": "uKMPuDdh5GVPhNdZVSYrdq9zTaeFzXWp5HVmw5sV9n93p2QFiFRo11QssH5UKPc7Jib9DDbKvCEqSQmvPs2EM9k",
  "key11": "hmVkfZej9niaL7tpyUrWc7J2g7R3Qkm8cBtPWwwk653btB9Un3EM43u8F7uJzcAsF913mdwZP57HrV6EmRdsfBy",
  "key12": "2LdmZh5h3qpVZyx6K7VxiUkrKR8SFtrDPVwfZSb7kUv9DEdDeFDF8XkAEhnhjdX1Y2XQReaoFAL7uuY7ALCVbgKw",
  "key13": "5vCmAYtqASBprzBfqQXFmULQqLucpEYMnYdktxaxusY5nZNwrWCYFLYqzTpzUkEokMCjnNHkRRbXmxPArJufP3Y1",
  "key14": "gv2hKFWLep3Xpe6cvGwuSVdhBydUTDR8cKEydiD3n2RtdofnyCPESV4XT8p8U9Agn9iGJQCTWE9NEC1vDdPd1ko",
  "key15": "zdz8K4ZrkuwdpSNRPqHdWPXgGjGFhmaPXfb5hTLjmnzf7S9LCgDdPhoWpmzN1Ht2eQhVfVtf3bN7WB8vC4CQ5Xp",
  "key16": "ZQdMS83jvVScLPiMae4Exn1EYqzsuLw2CMBMCrcy3rS1UTqjZaCW4bhfm9hW4yeGXxTWJDEyyQrTZycUh2vjhwC",
  "key17": "5G9YNo9LonkWGEungMG6g8fLDevoHawmdtWvbpC8YGcDMUJbFBMU8YKa1fkY4HJVAtYipvQ5Yc34sCkduYRunUP7",
  "key18": "3MUGKKXQTxH2BbmXigm1RZfiX1bMyhCsPAKHUhj5UJjZNSN2V7d8FJC7krRxPAEeVtPzSLyjTG8jUd2eWT8S8Tav",
  "key19": "22zVy2xvn1n45GqFVGdjmZ1TV355cUECD63jPEFsxykUVG3rMFE8qoyFFyXx8n5nnswBgmYotfnydi68eA6oF5xy",
  "key20": "xjzJujUzzZcsGWg5HbaSesK2CupMLEhPnRFcYMTwcJaiwMkHvQZUfQ16g2DF9uisVZGDY1pZNNsWRavxfGLazHN",
  "key21": "3DTHq5gpkngyftUxqsf1ZyYP2oipStFQmNfoC2pnrbbg7rvtFpEFmhpPbwupAAtBEWHXvyJRtSQf8tdLPaFyneZ2",
  "key22": "3AJTS8p9CG2jTmVEYhVqmgrsDRYFBg6JDQrGLGLzP7LiwDcy2C8ExAm5yGiwTnjSpoDdh6BeEYBV1T22qJWtyxLq",
  "key23": "29QHr16gyHGduAZAhBmcySqzjWxr6rYQxEhaJ7FCHKD6AZtCbtrVdeWLw314h9SWWw1Bu5XoA4vmoCnRx8yRK1kK",
  "key24": "3CLzK2iCYQaksWSfbVN2pVuZdeqifctkrmm5rJN1jebyt9DavvRE9aLmjk8PSgUDihxg3BfNPgjomRdA35rHX3Zm",
  "key25": "2eN61G6CN8mQrkLepV73mXcGja6L7zjqh32GP41KP8JEFof29QfQ6Pa4HgZ67GiHZscwDGd29yoof9XhXaXyvABh",
  "key26": "4iKLj7rj4heQGtXa9iwzChykWxQaH9PakfAsMQYsGA2s5VJNLbRP7FwZPspUTyED48GzfF4EdCms5DLpydQXzPWE",
  "key27": "KoPXUhz6xZ459ctg9WLmFLFRNRFoSeTQwp7Yyy8QCqH62S7DdLfzyRBpfDdcxVME8hFZjaL3uck3PoDbNA2dcWc",
  "key28": "56UUhCxzvu98VTViFEG5GVDJVotopoGtTPhMHLDrS3cET1zRmCwz2kUnaZSuTYmjZTTpsZU9ZZsFbABsh1f3z5VN",
  "key29": "smFhaJ9LKSyREKzi1CZoNaT6NzVNL2SKLJ1Dy6LPBzkYUwn4vtrjHpSz24Vdf7mv7ejJYZtUDqJgZxJDjsuZKk4",
  "key30": "ozg5GG79cVmBp7YcarNepHzz3chtyZ9jNHdp9Wphj8CyQWZPEMZSKNVenVcwyMeBcQzMURZxyNyVAxqmS3M57XK",
  "key31": "2x2nAMy8v1CtMSYutcGTyUdZjqM9MRamYA8GbSJzUGHZe1q6duZb6mVSVNiywdKXuZe7Gp5ETMFSk18Y4LzKQmja",
  "key32": "5Y2zUjyY7K1iDopRga2QwdCDq3dL9NAjci78WqSWF5SMhq2Kygiyi7agWFnU7p8RC2VksV9LKuR6b7P6ndKDhM1H",
  "key33": "3BPXJZHwmP7ynGNAQkb4AtWRy9vwfqREkSuJazzKHZzbpYwAvoQr6RJSSyD6yGvvNwFrogVq4b8yAfCbeoM5rXb1",
  "key34": "sm9GVmFm8cy3F9upK92EuvGkydxqz88EQnuV2ujZrnzDCLTSF3S82VDwd7dRmYq6TH5FaVErCBVfmTG78rcbWFe",
  "key35": "S8EDGL3566fLbt2r5JMR9jfLrgMwyhicSUXVYmw8dv5q3FNPqupz3Y2C3cGKvZLqJo85hKPszdT28vWcEb6e6XX",
  "key36": "45WndfwVMVAp3DYNc4sdvDY9bpKoqKkGf2Z8uCq36sYpE9rpakYwrVzpAg4k5ekEcAUzmJ7LBBDwe9MsEm2RQDAY",
  "key37": "3qJcb1fgYrzTbb6hTUWX4SQYEG71LAKjW6FHgwsz3eN2y7RXc5i95FWDJFaMMMb2pV1Lutq57AehcQxwGpHJqHf6",
  "key38": "v4HKtYnfgHwkgwPt3CiBjxhRXS3GECVgSi7yUnqs5MZYbs75EfDjyT3ux8WFQRjGgx4zPZWxkwZ6oEv7WdtUj9T",
  "key39": "44zhQk6xwMFmFwAUjgtH6p4vzJKmQznuP28sNR72H3FZxqP7fWohdtFTBbpvhwyv2b76hKVymZj32JFFg9GivhUB"
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
