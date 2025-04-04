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
    "4UwpLqioxAEowPJaZCySXzZxWQvi16f1wozp2YvAfUWBM5pyniDTrhDHTJjEpWa6f1uoP8xEUov85TPS6dKPpzL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQF7w4v7WjxBW6QcLorE1L2K4MsWsrhP1ZgC8VdDSaQdP5jo6YhZRwa9vPqcvCiJfs8q5fyzCniHAVwzX4irYsz",
  "key1": "4k42p1BwXitNBMgPbgJ2MdHEsZmf8RdaNad4hSmntwhFdT7NTpV9hjSG649bdMLtckXUubBaamRV4kKLgTyJFKvC",
  "key2": "2MwYzdhRA6HVXwALFDyU4BCMtYCh597mggBa15yEHKmpbUyNu26tHyJjzhzeVfhTpjBw8u6PZxcgsV1jwmY14Hdm",
  "key3": "LvqudAHaGkKQidJ1waNaHEv69eif9WhkBhUEbk9mVHt5wvThW2DkLhAN7uPCoHdvHR8aKcwrQdB9y5p3jqtvBYC",
  "key4": "5AHjxT5bujqjNzsXYbBcf5cMqMcy2Xo7kMC4SP3GnNifoewL8QNZFhgCioeQYXAP1MK3PUkcXvSvspCrTRKak4aM",
  "key5": "2RDRzoXdmghg57UGdsDog5Bf3dJdiTfSbKEAruKFQtGh8gxafG1GeiyQP7FkcVqjM6hBgyTFtPThsPajNAAiLtZv",
  "key6": "2CC1H7pusewvSBrpAWrWdksMzE1Pu2xVW5b8hdeYtkXYSDVNU9htfJ9FShqR3ojSrzc1m1i3jG2qJ8hvS1VLP6E8",
  "key7": "J8ukJ9tU621p3jvZLpBMMHv6mHwoN2F3Cp39qNqUFCs5qHSsp6oooFpMcpM3GNfJPmhNgVNvpegMCyrfwn7Sive",
  "key8": "5gW7VBaV1BFdoBicD9NYjTTngBCdmawotgtcq2cMCNNKhCPhbRkzmS2yejGDKQWMHnofhY1jBzhcu5PmEPgWbUgL",
  "key9": "LpRp4uvPFQYbeKHesFyDKfhjEHxeDfFyAVG46iZmb7vTM8ew7Pj2GeL2SHTc3nNzz8cEw7oNvqLeBgG33vH7dXH",
  "key10": "2oqsfK5FoNa4cQf4i5C47cKTdX5D6ruHCpxnhicdtfU9B29ffHqNHaeydzvdqmTPjQxePhfqyNHbFBZhAMtWeRTJ",
  "key11": "jreWSzJin6rzYVmum5Ueaa7jk1ZbFSjknZyNBW9VHKbhdVpke3tvPH2zBFhbn2YDKeJJS2JSyZeB1qXPJ5ahrvq",
  "key12": "3v9bDUya7qojRhQqXMg6Ms4KRXRECcWApBSHw7yyF2vbJrAjvxKkPriRhTUhCXrMidSRLB3gP3CHibPuLM8VQwW",
  "key13": "5vBSiAV157X7eAVnKviJ5Yt6DJ6mbuewxsmsRXXhXLa3CbZCVYTbMPdNpHrMzGhDK2P62memdqeu7mRrV9ovupsz",
  "key14": "4VKsKaCfk2VJXCSfwc35ptToUioUCYeAEXjR11uYv9cBuedHremiXuRdCcauScmvsjmt9xgPjiZcEzf3gZ3ZMG3B",
  "key15": "4dsk5C2rZF9hKnPvdhznzxQRNw5c7B19NptYhYTn5U8sXTmtaevNZLSRrhktBfCXosQaBpNFgUYqsmGuebqS6584",
  "key16": "2b392oa68MDj3stAwUWUkiqTCcVbnDWtpefeDHuio9KGnh872XeS4RHAJJooXCm5YwxyFAGV1DH8zsz9JJ6tPGcZ",
  "key17": "MrajUpaMMKcNKeAzopVBNGQLeTfXCy5kSkgcHGXZvAPQ9oUgZTnP3Qh5oiixNkvZgrb4mX8eUnqM2HZV8zmkm4C",
  "key18": "3kfXxikJZxjykgA3enqZhfK91wVLxpu3Pq88gxqF27Pnb6F6j47WDTesHPXLFeicxpuNBpE3u9JjYGVL36gjNw8R",
  "key19": "5GFTR9wm5i9rh3jvj4SiNjhJPNhXSPSXnBRKHmUpVg6niEcWAj7moMjXHW2WnAU9aajRewoXNn7B85cxqdscm71z",
  "key20": "JHSs8Cct4DzNiqmjvhmDYJTzU3ZEHzRkDV99mTUHWDRtnKoscA1KLXThdLo67JZcr61PvqH1zitjPH5JRK2VniL",
  "key21": "3WjyFtwSqpj3pMD5LA3QjFysfp9Dw5fDmFXSuNyEPj9MzUdHNppbkkybbpQkRNeU3uh24nje1xZrLV2wgHEEmKMy",
  "key22": "V3GJbdLkRGxGqe5jDqtcV1vjpYxdCCCwdQSfVZK3FVRCNEoLnmJbNTXHpdmHqzP6Gu8k1CVQEhArNcYgYGyAoLc",
  "key23": "rcBovUZ9wrrzvvNiNhBpr6dG673n6xbJeiuBitUu9trjovDGVfn1djC5eCktWTZf4TrCjU14Kgik2YD1cNQVpzP",
  "key24": "NMcMmbDkHHqHhyoUgvhgK2AmsSQzHHTbdoLNfMz79Y9SDkA3JzcpgPWyTsAs2cpqF7k7LqhBN59uWRNFUZogUnW",
  "key25": "4uWjxXezTvodj5KFdD1jJQWLGrpQmCZbztsSnveSHJM9Trn73GeVkKdTfpzj6GietN55fyiRVHgD9JRB4NAih7Jb",
  "key26": "3rvSvBvzWA7VeL9nQ7zdxrAYbqQuuGr7pjFqZv1SoTVHUMnxsS4pLum4S1rd4AjjTNM197dzi6RsK5H188ZajnET",
  "key27": "Fqy6hUS5sgP3whyHkJzfNSbVAxbJ6w8ZU5ZwrBEpUR7spr29JR9iEAuR17PoDA7P5CBEf1eaDeq93zMH6rKSFZ8",
  "key28": "cCron1v7r3yyFHYyqYLoQqweKsVEUNvphRx91MDKkG6UuaLhbezxrh7x5pJuvaHj3nTGTdwUWCX4nf24yEpDtZj",
  "key29": "5SPb5L6DUESUTZ86Go868bFhR44rTdDkLWPGLCWy6Hz4F8vvawUKFq8q95899gudCaxLUSkWaSdtpvJbrLVHRWHB",
  "key30": "VGZNwD2uzEHxV5jWPWR34mM8Rvehk64c5avKPuuCKRihskzkzGXYZCHDFU7iKqexmXSm3RGUEjr7Gr264zjqM2g",
  "key31": "3cvoP4S1iNtU6WqabSYkiHcRFXaPktVnrGhXWk7714Ckp7Kc6TweeaxcAWBf5DiA3m39dXXdWiF7AcCtqDEbcw7c",
  "key32": "2yPqp9dg2CHcVNnPt1rq8BdHL5HxLTso6qpFYd8uA1CGKM4HNgPNS7hCq43jSgu3Z59e1NcccmJRtLzyR7JuRFB",
  "key33": "5ipfBTXqXWoAwqASXEbErXZQKQZYraEEFW1beUvSxSwNM4pLmGL46gaVGfLQknbV3WPHmYjD9yZ36kBgVooURZ7g",
  "key34": "3vAATBJFCdwfKYNnsULpeX9v4LXYh1igVCu5kQnMc8tG1gLGR2qNYsyhhsjsVv4HbVs6eeZVUmLXhDN12QB7txD4",
  "key35": "67M5sD9UGmDc3jCRZZB6hNUNUTYQTPt1hJAwSA1dfdEUj8fMzGdun8g7mqEQDAicfKi2iaf7xqhtsWekVptXHaU2"
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
