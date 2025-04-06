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
    "RRECmFKjPgRNAW1nGbhqkjkCNxTLkwhzcgZhxXCrHHwtgu3uKRUh9sNn5frDMLVGVTnC9UKogV7TwjPm4Pynx9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C3CLvshnmJRSDTwhUgEYwfbKSWsEihnoBbPupztufkLFb6KaZRibuNq62YZ8e77J7KLGYYjVi4o9nPNJXfq6Nhp",
  "key1": "2Tz4yDPHpcqZfjgevgWGunombkKvG9iKH9MnNdwBWm3HYAjnaR8gJkx2kR7RxY5zyyQygQdzJFSGWmN3YCAAnCx4",
  "key2": "4WcRs3fcr3MjEUPpieYZKq6ZEWFh3kL7os6P8JjPhA9tz271qidxhHHr8LGZ4gtzJsY2LGNee5bRud2X2j3sEL2p",
  "key3": "JvptvWHyM6KLaAmNkP1rNsiPdMP1gte31w6ShAqQ6DcqmGWmgfMrUHoHvS62vcpLJKskqua9KFVyJmjecJVrgWf",
  "key4": "38c1VeZ1Z3wmLh4Rm3hCVCz44Qdc9TfdGCFH4aqBAFcUxTxoijSeE8CFgT16gFxdhcUGivuX1nqtAkFGHUSu5SnD",
  "key5": "44GeMuWrkebW1FT2PprPgu8JSMdS2vzKLbhQHCVWLMup7RFsjdLnocnpPyGN3aRTRvhhbi2bS5kb4tAbh8ErzgzV",
  "key6": "4B2rby31UJBP77YapqgKa6Nn1UphkNthrydCD6YGhDJPhKPVXVSumftz7doPrmDCQpqfmLYqdWJnCTnpWkqnZom2",
  "key7": "3GtVUQXQRdCebanHBNRbXrHX3nMqi5W6Bs1DUantuMDUAamYKLiS1L4GKTFxthEv2RF7dyp8rKiccMVbZi22aCSP",
  "key8": "5KEPz5npEm5BhkKkJ5Xn1zB2zzcgYjUgQPVmW5m49ytSFC31BHFsBTTkszcWmNpcDoDL8ffZBWzn9SbtLWDv4ayS",
  "key9": "2BWP4no6R2vgndEERUMawBTZnTD8HQj5mN8djWVoiQTBjWe9zUgVHqzrZ6FvSFQCg4xoWEXA3dbssxiBE6bQYS35",
  "key10": "5kweuSNqYUukACAeB9zfutetmpUioqkKuAafBf7LZeiV5e4KhP56NFGcZWssxei2vEvWWPXx4JRF8fRGxmVjJ7fd",
  "key11": "4aXDS9KN2mjivHgzvDffE4yELffMf1SSw9UHHfDxVmVjvyAnrEwdQcyXhK51vMFobJcMEiGAnb5YvK66Pty3hSTm",
  "key12": "XQa6SS9NCz933ga6BgAtWQACA3BXeoFrfjY2VhNWWDdRxftS9XrgLHCqHvf58VrqYo4J5GCiqSc8giS7acen7qT",
  "key13": "4fV6JoCX6RD1e7wF3JtmvSWXZkgLcg31U4sYenhBx55LpwA1FUw9TE1GyQTfA53QKg4uvUv488DvnZPry8eukEXu",
  "key14": "rTrxjupgLdbL7HtWnDYwy3hEDtpzUsbhoZzC4vHRG5K9dZ8CqYGtRQkEuJZZyPKEY9XzTomM2BYtKNrQT8JHB4X",
  "key15": "3fzLJh7cY3ZtUyQWUTkfg8KJgoNtRRD9EZ4hjgFY3qFeUfDRSxtMGoGUTHVgEhbVNy2mLZr6gReLDJAJTFtgcmsa",
  "key16": "V66daSxxhpLd5xVrxMi9WboWd6prFPqv4px4AYB1Ptm5szCFZJPmT231hQddKRHhjQiYVQFhfqo8Lbnxqiv2sGY",
  "key17": "4QgLfB3MJzz1bqun7AnsrttjxMTxeV78KAwvKAbaxrSCNCSP5VrkcZB2eu6JBpiub4rxFL1VC8JRsK5i33sGsNmF",
  "key18": "5W8cnjKxr3W9JpqHRN61vQMGcf3Dbnt75EppBeVrte8G4XLaGSBQB9xcGiGbJHMce25xmKm8MMLA88YBXa1aexSw",
  "key19": "2CGQvBaroiRx6E3CAUfG2MmZKS7KrHt3voboy4NDcVASkxNvV9CxNuq4K8NybzaCdfzL8YRg9LJQNJPgh2uPGom1",
  "key20": "5psKqwG6UmaGbGSzpXsCgPmdPyStW2VuYvS5AYo2HvvbmDdpFMGLKi7TLQt3agmnURWMDv62SF9SvJyeJgVCq1RW",
  "key21": "5cKTqJtfGivBdjr99AemD6vg7B6PShnw29F7PuR44EpavUwdgGCNw3Mc5233sZwWNbwkBmb12bMWikv7VrShQHoU",
  "key22": "5HipERcDMvggetvx3tCgRdcL7xeCLt9jgQuL3yXudyZt4vuBFFNRq8MsPc7hC7cFanez63EX3eCx6tDdE3FiQVeD",
  "key23": "21JZXh5C7rbVntu8gsQ38sNLd3vNuUf6eJjk5K1xGitNyj3B9yrGwopmME2Z2nZ5LkMkHyoavWXFXFxuBcWCqud4",
  "key24": "3mf3oEgcozPQCj2BsybACLYvfPTV7Q8e2BYtuBGbhSgBJPsGgYf6q6hCmb3F8o5T7MY26As1YUstbh8EARMHEokw",
  "key25": "2vTS9mV8coRG4Wa1xec8bWLn4RWnWk4X5TD8ZqtgQNZ1An8WYg7EJjPBdxnHGrg1t5S9YBf3n1GDsKmmMrCm8qap",
  "key26": "LJr7aGWsCpmjfDLz8w91GXqAvy1ZLXkLtJfARyS1VvBMhe2LNC53Q9ZCwHsnWzNmNs8BQo4zDrH7p5Nhv9AcVR6",
  "key27": "Vt7oAXdFv8AmYs7gD23b89iYsn7NDwADoXV8geZGGePAuoAqLyXhEgvbdaaPAkNGCxe6WPW7yTpQfbTkhQB7pUu",
  "key28": "vkEzPyGj1WuUsozzvmG6wpPz2tCjBQ2P8LzjandirX486e3yZ31YhmKDtqrg4kPLDvb66GZhuDsRxNQ6MnpdNTP",
  "key29": "2NjNZYkkoX6Dxg3qnbENhs4bUrruyFgRU8fdBewth8kaSUSx3Jw29i9DNTDwyisUNxiCULw6bNCFYSJjmUQLjFJF",
  "key30": "5TmkGQui2xwDZ5viShp1qXcDDcdVjb5iSHamtYQWm9wn7sTPpHNTD56EFr5ZG6QXrrdBgU4gCSWBftsaMSuaj89k",
  "key31": "2WDzNpV34Fn9JChGFpv8TAMrr4tyDJsCvjcmF64qt3Sz52BoaUf5XYesFjqo9X7914P9tghvZUENKd8zM2WCMuc8"
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
