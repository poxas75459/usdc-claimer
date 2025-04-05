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
    "4tFKmwvn6faiMQ9pe4B9Z2Ai7rnY2FFvSrRuGsiKwRbEociXHMQwwH9inZEuo557V5MtbGbczDfyVWmy7tuZ4fky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q38yoWEumth28S4mJZibeC2Zy7bK7JEfSizriX8cdMrYpEQbvNwi2sYKUWWuh7WM54KsLjcy73QQGAR83SyHawb",
  "key1": "3UFXxgEuwgBxR3TgRBrGuHVSgUvDxN4rt3ZBmMfkdGj4qCwD2Ftth5TgHrSJPpPdXLqP5jyJJKE2i8cZ381WpHeJ",
  "key2": "3S4gSPqSR3BeW7AVMZD1wpajv5JfSbJ7PvSTHkEVEN3X77DSKwB4jtATBKKjEvy5XAPoEtPQpASMP3e32kpJBnct",
  "key3": "3V6ZUMFgDNMiheVvVYiV56VuzmTV4kvg4tMGQgAhaV8zXGdSJjHD62gW3aR4KUUrgdAjYL3wXWoAcFyimoAvZwjp",
  "key4": "5WeU2GRtW7ajhjXQNFzxA1AxgpepZJZnYk1WdPro3Xwri2g5ZuNWBtJgE9dRyMGGyCpaG4ywYm9Mo5rcwpFjpLJm",
  "key5": "2MJCtZKLFRs2YPB78PhBUXfPxLo1MS2N8JcKwdvYqUeMgXm4yUtE7XNGHc3uZ8yCXrMzWhVuPFGwFhbXTUnVk6c5",
  "key6": "Zm1pNYEihqjS8ha7qw14wwb4Gk3JoLkzMVLnRgcRJ9K3PaGaaP3aEet4kDyfoo5Qxq9VzLbAvZ2keeozCyefJLR",
  "key7": "4SFeiMvy18sBGPyg8gBojT8YPUoX2CW2RZ7Csq4PPYRbFGnuMwFq4UYGiQgnBRpmfAog6qborjqsqWKno5a69vbd",
  "key8": "5WwDTgrhLuvTFBeky1ffBMfQfjWsESjgEbPX7ytroVt2nGtFRB9gujANfe8ZPizH2zNA5GfF5B9WkmYnGtTj557J",
  "key9": "3nKZ94WXrG4YVzqhpcDXBk6nveP5FKMYXtnsEadkc2wqxTbLvTShcPimx4ZfVbk6cPWbHsdAdgm8CjSM3Zt5aPv9",
  "key10": "5sxK5eNpPxHTJKk6KxBUctph5MzQE2yjG8qAdd4DfJEwfyA3yJV5VyuTKaeAu2S3SGY8aSJubvX4GEfJeicffPAr",
  "key11": "2YgWSPxyFXa6oQfFPCp59oEMJSt8KchjJdzwfp9ZxqVv3RvHH7RDsKkodnM7cutUNrUFE8duJes66uLg2hWnSAjq",
  "key12": "4szqAsKBC7sqk8tQfMdEuJW4YQYTHgdp8KkpJhMp7dv99SjWUSxZvjtRksU18ioZWZFrKNW58Jz97sytV1g7FzG4",
  "key13": "4YJZrhXApVB5wSx8woTiQwyM5bS9RPbKLCf4NiqgNF8MQdpLh1x9Fv1NKapbAGM94kK63GJ83LBJBnqLKhxEtJH1",
  "key14": "44AxXMy8LzfxN94kCVk5F5dmj5LwSjTwzRpXiS4ER35Scep9zN5oqjJYJJEyYzMEseAYgz7TnLJ6SKStAT5RkqQs",
  "key15": "4mpr8zJEvA42YGiDQJmhyjLXfMchDeBGPje6szfX3ig3iHUiJ39AxyrHfK4Pehy8vqxBprQDNL9o5S7xVhgzNtf6",
  "key16": "vdcg7Kx71LmevWLz75ZckDmP4PfxRJvWw2T2chgrpBYuRAfr2EHsbvB1jAPuMeScJkWZJn8A37dFPWtatBDUwPa",
  "key17": "4xvm8HcQVJG1bzVsH55uMqKmYbLCxajHrYdgjGMP8UZJrjKFdPskopShxiDvq6s3r3MaExuTNBVbeeKMfFgbWwgY",
  "key18": "3S8czySFq1V3BvpvT1o7KcW8HxFP2aA5rWt7Q66n2cx1Uqta4pXDZz6T4krwK4db7ya5eLAMXS7owwMdq55kmQFR",
  "key19": "2EJfM5GsTQBv9TMkZL5DmGMHa7JYmSMopyKpqk2Vp45nvmrE9NMYsqXnuXDe3fC1YSynrNm68QpLBA3sLNnBc6cw",
  "key20": "2aVqKT3Wy8yTHT6DBGYGrKDWbEd9zghFi5tr8wY6gALHbwPqXygrvJNarDSHFzeWBUbyGTofboBHL3am7y43rHxz",
  "key21": "oECjAftL43UQYUjppMmVMmqutrFz6opXsfci7oz5tu6CugmeDHHrVC73ipYYGQCXj8fTyCm26cUXcJSnZXuepZV",
  "key22": "LzAD5QKYNxHSm3tXA5SK5tvjmEAHmXeBwQsKFk13N3BLmKCnmak6JinoXgFk8MGoW51DPBQYzbeMnwYq4KtcLhs",
  "key23": "n2DKTyCTz6hAZApQxkXYQMyujnpyZDorvzgzvyL5BQyZAc8YyW7CDkFd1S6Wt1JdBWZB4kS5cnxiDQt2erCSGL7",
  "key24": "4brNnmcvweb21kGaXem3MUN3GcctttrSin16AB3tQ3GZigzu4SH37yP7hjjZ5qsqnebtboW4VTH2cQgSiemdXS5s",
  "key25": "3eeUMkcDzZ8MXVt2z8hu5Pzo9Np9dziwKKWfZgNQSsp5rZ3E3RFWtG2yE2ApZkiuPp7rPm3YPDbuLDch24eaX6Fa",
  "key26": "2cbpgXGVVby3exs9JNckEQgEhEsD8ZZuj7fQujyCmaHzFV3sx95GH2bd7apqmKAbd2LzSMeRc16UXNGizy8MuVui",
  "key27": "5EGVFr8bQkniRa6z4h1RaepNWVCJSBfspBmngjsRgqTrMLA8NdCVz38J5ejEbBMinGtkaDaQTZH6xhQ7jXypKt2J",
  "key28": "4KNZz74SyFwm8LCVwzFH2mL9V34tCnraAPNfBgQBkxXGYaNbJAMEcAj2L6hQwiuJz4CmdiQK8GUmRm6PFue3ZCoq",
  "key29": "37qbuZNVEyDDbMzUKVXBhV8FEePxw8k5ur3tauN8pvZVqCmKun7fNZLLnLFRxc2sHWZFVEnthLwzidBAEmuRazbn",
  "key30": "udA2VyX6ptz5qJrYY4yfXi6fJDGoyMhDzpGFMDWwebj9mQXdBxwrDzTdSkVabxpvEJGUW2KX8oxMzctvsgcxyHo",
  "key31": "5WtDdqCnT5wn5D6k1M9dVZGXyNesh7moopzEJQKGSt7x5Hhk6MRKuW7UEtKABFqMBC16DT7dnkLLFnTbxhUpJ5ja",
  "key32": "4e2YA2crCtzZ44WnZnWTraUGTMbEHq1TQ1k6VWcVEJei6Qxx4qZiYFScM3pnN2nx3WsTydvz3XqqQmt4FPUSGPPR",
  "key33": "fWjkoneg6Jb4uBXx73MmmnV8Dk8aV54ZxdnwGfm1JoJ9BGRx1KgbabCwsCwMHcfzraU3mAoYZzueeyCr3c2GPZi",
  "key34": "2QzSP9f3JMhiFunJv7XXVC2cUWTPUSbNd9PWKspgmpUjT2aNTh5ZsBEpeDFyqEiMA1HUqnSWwE7cCpu53uCMHiBp",
  "key35": "2yyNKMsAKs5LA4Mbn4vihwBMt8qvcg2hGeTvYnMRTGiVdqjxyNQBopdp8MsMARSoCrbW8Q4ukWxPZDBnuADnEoNS"
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
