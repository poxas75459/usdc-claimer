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
    "4JnXniC6cnZ2rsyRUdjKjoPtrjEGRaXogDJzz8f8X7hsASxsUKTcnxFe8AQYZVbbxkpVyPbH5nd5erPSDTUE1SDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1woZRhw2KkawPejsqWycT96XbA7LFLygnhSoLfQhN7zeSrTCNTBZgRJqKeBWvQEwqKsfJ4cdrbnVSU8guddBrE",
  "key1": "2c5n4792YmYsBfUbkchWwY6zbasVZoYAfdkkBwPrDrYFWq6ijVGwAgMjvTSQc2oQ9tqrDJ4chfREzsQJW3CdvYbr",
  "key2": "2nY5xhStGPjurpQ3g8wei5XFnRUiGy3UYnysX4wC5LMvrbSbbjhpQQeLZ2tELVH7Ji1DDNErWcLbfsUoiL66L1bz",
  "key3": "59k7JirdHQdWXavucwt6aTdM8agZkPo3VgQcq6fqNf4xAFMGFxbweiNEhC3b4S9BbQydTktdnF4oiUM5FWeFBm6R",
  "key4": "4hBmyfqPUCdnRHpWGRgZBj4pUfS6vxGjzh6E8UkZJLFpMpEMTKz79aUS8xjfAU22hqEkC9XwDC4bhHpxpAgdcTaw",
  "key5": "5B17UX7u297L5nW3qMhwA5RbcainmYKnpZCNvooSLGziY1TidXRAMVmae722UQ2LCgHM4rtRCbyYwnUMXtibPoS9",
  "key6": "5QHMsd9iKdSLhDopzSiXyvCyeJ4cx7tib9aJaZ54UihFHsFVfxobdZiU7pLkR9iUrcSbQsuYbmWQpMRPT6btUJnS",
  "key7": "5a2hMVyNirL5nGujLzRv5Wea1BFaqnv9owR6ogyL8RqR4XH2PqquQx8uG6CYKHz8DAoKpH3fckhARjTseWxZkkGw",
  "key8": "4e2LLV3b8f43LzdXaViaYosQgGXhu5bdNfbVgC2hfkNoqN2GDakRE7hqyAW56reuoqUfkpHK27yoEhJ1JhQSAqot",
  "key9": "3nhuL1sfnbaqCELFTUbkNddyYbk5UsRQe1LtVoh7yfmNTPhtu18rRrDv6JgMnEEF4tqvDL1QfEAZJ39msjbfdhzV",
  "key10": "5wE1hPAQiS6xpLsbGF7MGZpeehK2Jf2wi1KCUEyh1GjY2SmFJmQsS8kBgdHWtV2xTnXwWTLjfRKbyhpXSpDMxiZ3",
  "key11": "2nqNyWpRZ8mzeirqewLU2TKBLH5dLhHEAVYNjhwj8jAorEFGQZzx9qvtY564GW1BRmP4zgLmxQ7fbsyfGS9YKivH",
  "key12": "b5TPv2xarN79PasNNonqpANKNxpFxEfzr7qaGXjAcDLNmNLPeVhKXdm8N3isM7oPNsHyXrojYa4o5W1E7iFKARm",
  "key13": "3wKwG5J2NeLdsjXhfEwd8iPFucs3CTtLjdrg5cLbpFVeqznEwTjJ2iRdZJ1zSGVqqYjdfKca9PFxM9mDy9v85ykZ",
  "key14": "3QMV3ReswnkBXvDvzrCB9Bn5jnaR9CRgPkdje7uTcn29FamRs3mAs8jBzX47c2P41kaKetmqioiLr3zgQ2uCesEQ",
  "key15": "4LE5oqb3izL84HmretxqoF6JuvoMsYvwq4Vk1Jco27UA4TUrGLGJF9PZ4NyzKvdpqKPCyQTPNtwk12zDzHQKmpow",
  "key16": "5t7DRWqqdhya7XjyatedT8tC1eYqJpzXv9hhFust1SQMZmcuvyAGf7XoBcMxa81r7KoCU1AGnciQMu1VLWEHzw6h",
  "key17": "2RtJmSmqmPDrwuRR25KemmA8y81j8YdgsBXpSWZWSZMG57rKKvzB5sVS2nDEejS5XCDggHsb1R1hbDCu4HDwHRKL",
  "key18": "2eaKhsrZtFZ536f7ypzAmBfwDEfVfPPuHKnPKvkV3XdFEAQuf4g4yBPBcW5Yc9rpnUKE4KybbnzApEaZxbBSRN9b",
  "key19": "4XLoXcmQeytwALzPUtB29TPHF5GpcDg6xHt65XBzuRid1m3h3Qo8VMgxEsb7QbSdefPCSUkkdmhdnNapRsVMmhZ3",
  "key20": "5uWceKTWtpFfeuZ51xtW3TQobRBwbjSM1kdr4kPtV2YDzQcRGFw5xiUA6TG5nnWetBtMiJ8gLECeyV7iDuYL8hHo",
  "key21": "2R7tU6YmaiooAGcmLWYjVkbwvzgT7ivh2YSsajC7KKxyitkQwrGe8GDxAsUMreAYbqjdZvJAuyJ85sfWqqvGsQ2K",
  "key22": "4Q56WGoBvfWHEQ27FKWwNHT47trUZmNLdWCK8Qwauppkn4Zkm74G5ZNM6KiEMCWCs4boRVW3Dr7YT1qzMGN2Km39",
  "key23": "2iCRXkGpSAwQzAf3Fko62SDFduitBAj1sktvuwgi5Eq2fDo6FnYwDAW8vb4SHDwwWXcEz4wct7mMctuDj5XvvKwV",
  "key24": "24vDBqUUrcXxuFDp9h3c27eRaHgorbUY4YFSLdCxo7yUsZyxnusnpJnochKwfXGPuQiYMxm7ZCeQfXXPmPdwgZyR",
  "key25": "CDDcAVZv4ccUjV8Nu2DYzQ5gmhh39uAPmAcX46Fw3XvaNLpx911j3G7QARsSiMPbV5hc1Yz1EjFhPAnjE65nywm",
  "key26": "4JSsDa3ZYChV1J7XcU9yesgiVeZAzPqH2t7kgvsCYbUA8iu5qLWeCz9hThYKWwphCAtqPp7o54ULwZHG5BVQLH2a",
  "key27": "37cAWWyrJUyfC7gbCaJU1CeBQGL5mYpjWEjcr6jNV4ayCGZLVd5pZWXhws4iLak7tXPZEMzMCvdm58dPD684LsZ1",
  "key28": "3coPJUHtHYZDoAQGqTG4YTfu8PsfKjTNqN4EenCArWaSxWrN1D14XjWpnnvF3o9632LcGWmVUk4z1m3hxKzZwB7o",
  "key29": "LyAAbjPHmDXjURDpi9v6SBSCTP3FQvAxwSgbSo7gcFLg1CWuKZrbZpJvMkmu8wveQ4RR1oCq4yS6V9Z1d3os7g1",
  "key30": "wAJr115YWE7u4NvXGiqamGqGrjz4GHotrckFYBCVPot3AoSzfrngnR1yJ1TskrBZkpzAbUzPuPMX1ZyvBpMvubA",
  "key31": "5kjhaZGCht1L7rwgk7h4u3X4eSPpjho9FXE2mUyzue7BXgZ9DNykEwrW7fbgovEyuTq3zsvuxodMZLKqyWPDkVbF",
  "key32": "3jFqCQJr2hCDV5bDSKBYts9n5qJx65JgUQkkwqt9aXhBwgGjQNoy8k9c2wuZjrU9gJEra9kdWiVvpyj6wj7XAxyh",
  "key33": "649EvBta7xkYFqewGeHgWDEATMEFCLab69kmXYSUh3pBFRzQr64GW549vx6KG1fq74aqhFf5tvxkggNrofGGuAex",
  "key34": "5TZYCG3m3k31rwDYf5pKzVGxe45EYvBZcdEkqqce7d3ZCcgRMPHoja7jv7yxRDRbHbtSb2y9rAqkgiR7Cg9NoCv6",
  "key35": "4p8SSkKzJVuqLHkFkUpH7SVFgh6zZzkuC4r2qQmvUoBR9fPv8hbbby7rbKR7h3fCtgDqwNLHagM1AbKL2xdwPHMs",
  "key36": "27MCJ8UPtGQe3TxNTrQ9hSXbzrn9MeA81UWTs8nZBxsTW6rvwesKwwp1BWqExU2agBM8w5A7zWyn74TrP3jvon3j",
  "key37": "4dq1zwiVH5ge9ZeKQk9ShcSuwv9UHni3cLNcVhbNsyeV5mKLdNqVeejfReJTC4jDYgP1CNSXzGV2SC9SNEReWyMD"
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
