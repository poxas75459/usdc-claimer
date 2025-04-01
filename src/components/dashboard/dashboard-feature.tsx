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
    "FuoXY443FPWmmErMtFYBciAmm6CYzTHfyw1Yb46zyDoQ4afoH1mK2sTJZj4wvJY2HysJ77N5PFRDi5SiDWGXej2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZvcnTjrDPDgEg9emBHBt8oT5H4N3xZoaice1mzvozH1hohKqfP22rpVcq5kCEQSMppjAbzyW8qd6WuAyScv3FU",
  "key1": "5jV2EWxGm4zWk3jvQjAxvxK2NQkiS8j2MEtoEUsXsFgNKwFKXHhsYL5jc7qbmbv1gvEZFP1v7S4441oNLMZjq5zT",
  "key2": "Sam1nVcdYJsbkrfb4PjXwmpQigCw5GhV87ZZL9qL4jnMGTxGKYLM8QZTzDPG3nvGFZaG2vXFWiTDRsXF4SYrxC4",
  "key3": "gJU5MdqiekNyYoYtdbkdUqTWmgjp3xDGBuyypD3PtMLpSSHGZAJauaXmY6B16hwYLkeLmXZy51nKztSRYasLSxs",
  "key4": "5GaTWv33aN8LTeHCc3XTJKs2LuoBgs7eAaa8SemnERzRgy7U3rx3HpUAEHtEwhdyovWviYZ773sZjnA2V1ZL2SFL",
  "key5": "35SdYNdBuaNg7YECnJTAcbMFeU3qFYnLC33bJ8ueE2txPMn1cpziG5JhXutDrk3UuMxpj78jBevRDHy4bZbJ7N2Q",
  "key6": "1uUmw6kZTXjMXqQ5vMU93AMsxsnvDLmxe1Cb8SCoThhqs1QewapvzrZU8Zii7FBSQT294qBn2onnaMAWtv5jZH7",
  "key7": "4fir3DjtW9jLvmgm2j6843hkjqFNneBVZKZWYYW73nJdX3BSUFjW3NoSvPMsmtcpx5VkUgjA19QeQLithNgVzFRL",
  "key8": "5WBvVAPiHHYHH5RsaiqGobGt8xqj2SdmnwxfuA65aePZ799GEABZn4XFSvaciDAz71unHzWD9Dh6HBdRiRwY3YSm",
  "key9": "5hfC2PLY1jU589GQeuyRb6c9sKSnbLv6pd96syk7tJPYJDKSFgfBughjWRwndm5QvaKrZvLmiSc7THskqG9F6exZ",
  "key10": "2JrLYFwgG8Znqpm7prZdZ3Wb4bpwBMm4n6dB8qeNvk1th5AhScTg7dddhbssevq6VqJ5axRnJz36i8XqYtH2tsYv",
  "key11": "dkZFdK2UHghTEW7fgc1fpihkhe3VFxuv8CRfPMviuX6cLoGjZtfjH6X752S5Aaz1Dot18BWvyhU7RJP2a14L1Qp",
  "key12": "2q9m8WtnsGPJM46FQX8FcKcXnEmCi1GRXtFTK4W5ujDBNX2ZEf8wmEts5iiAAoXiWaN8PdE4TC7boWJmdYQyTPZ4",
  "key13": "5nbfmZBDCdbTCqgvZ6bmMWZpy23ogzv9M8kBzVWysfqm1SxwtnDsQnQnwLCsu4UakKbbxYrxG4LnaSKKR9n6s1uQ",
  "key14": "4an1spiiqarcQmqWLP9KpKDqpv8PG7RWQHXgyjGEmVwCsG4ELVCEfedLoJUoKaYEHpdxwZc57Ta7Mv2h4tpmmg19",
  "key15": "4Z7f2dF9wjQGhAxQsHNtyMSXNWkYK5mzb78er1csJ27CmbnNyYxA6oKdLHQM3zHX57fbH6XBSr2uRjDtr9Yxveru",
  "key16": "5WwwrnopnvbYjp8zftK22FERHYdZ5xuZTMmPUJAFPfqarvdDVtKWTDGrwVwEMS1THcUCsYBSbC25TD6ZafkHQv5Q",
  "key17": "4wbCsZeYZp6pfaxjUwzJ4ZjeffF4SheLnJD6Nr6czpShsZjTfsju5oHkBH4H1XVsgahJLwqBQ2PY16J1fF9oGWZh",
  "key18": "4k9YYvksSp5nbxJ1g38Kdi8krUXhLeDXWJd97EHuRPwgL9RqzQ7mcnhRysg4ooZVLtHcJqA7wJ5M3p5RiWRDx9d9",
  "key19": "3CowdC27wxsPUDoQbmC3BMxY9Chendq9FW4ZFMjHLfmCPiLdohyDhjmPda4ecfngstgHkxzp9A2n2tXiM43yPdxa",
  "key20": "4YWCQdEKrdosSWbth5StkQM8LWvWij8uac7erM8xgfnsyiHBSotcwdbGiwrcEpSj3XQueGsNJEnoAgFFupxqndV",
  "key21": "2T9LQsCn6uboiKBs5cWimgTLVEnoc1zMgKcRFEte3aABQETXJPYzkizFmoFsRpTYt4P2oXbH5m647asQdfo753bY",
  "key22": "3UV9dSWuWnyfMLPc2Bh7vRSaG8KAmnk7FXvWqEfYL9zmz28p1kFdwsL9PsGx3yuRduL2pUcNdd9nCftEG6i7frnC",
  "key23": "29KusB3jnRgLawVStL7FajRRCNeVS4f3aygdTSNTRXVPX2HpN4yYybWYGG2QX75umRcEUhyLNVzmVShb4VcUdibK",
  "key24": "3ErBtZvmTt4bH722S6XZWHyeqCic9qagR6996yWj2X6E2cJM2ahXBzdf1iCCGwrmdfnciXLLXGRHaRufuHD7vw1i",
  "key25": "2ig4UGtZ6dwvMZHqTRDRYh9DBgmf6hmUsNTGLaCph2KAsrLaNzu4ue1i2F3fUMwxuf54RJNFCZbnbsetjNMtv7CP",
  "key26": "4FSHfujikfxDxqhcuAGRvgo6kkBJwqqTzQuxFoSkiKSM4pVsNCLmUrHFp2onBxatcJL7ECiJMEx3EdwCUTHkbW7Y",
  "key27": "5zvNs2XWNzpM1numcdVR3pByZGVNfLZXTYfKZRqnzzBJqH41GajUHrNsKofYwRVcs2X21NDgaLYqLAczjKsToZs6",
  "key28": "3S9fbYtRsATv783k5gyBjUwRDobgq5J7RXJFqurq3YqVHH19WPQj9bc2PzqMTAyVqfLmJCQr5BDts1PV4weChtuD"
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
