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
    "F94eYJ3wtSJ8AVJ6aDynKeEJewASYrBNCtANR5LQVE2AVH5hcd5oJeA5D9UzcNZN8vAJu6uBhgumtiKQP2L1CbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jn4MHU3a2UJuLwdT2fVmv7SqDVkXLwLD3sJ98uWhojnd1c5M8pddgmZEjSp84CQvM1Z1gqLo9Hw6EgeQYEmXpiD",
  "key1": "FgLJRanEmZt7jeoBzF7THKR5KXVrBTWa3Rm4DVxoaBFQxzYV23C1zsMqAnuNfLsNBBPXQZ6kJNo6ND45i9sDyGM",
  "key2": "5rPpyFQKxwcchSsGrBDKvgr5CBkXTrBBciyQtoMRsLcYWDBhhfwuU4UZxTirmMz2415SGXc4VHjd5bVkmZ8PpcHk",
  "key3": "597fvWAD9u1fMqZW45HsYzCMDj4PwAnfz3dCRRvNrPvPdeby4iNPuMCiPnSjWvNmPgy7New2itAkvShkZtqtn2gc",
  "key4": "3pfhB358vGPAfHipZ2H3ounN5Me88tYxAKjMykN7f6q3UTDEnHhePfPNDXDaupLqqfDZivkpCHe6udbao41rqdt6",
  "key5": "4XupHcDHhsuJkGNZzmgzPx3F5opdT7m7oUWpiYyiJ3uoUbnzJzbU1W5kyL1W5ozMrkpsUpeD2JJRC1xvG8T53uH2",
  "key6": "vQ7CD11mDWAJPycNgxMiKMXp3BdjCxVbchpQoiStyHRw3z7oaw5r3mFaVYFgMz5nfUxxBvio7oo65Pj4QzXKxuP",
  "key7": "2hPgWgLBwnzpp1Z4FcM8auNnaR5bVaD54a9Fw8rbeQJGaKoqvQmqfCcVsBF3nCXseG3d4JNGqZV2MviorJdti9oH",
  "key8": "UHpfzLFhukEi6TV3eKYsrzaMSJP4kWRf2ZuRtwnMQK8JLtELAH8X7qK9xAuEkBXpJY13zFtWWroLHkCge2MvT8J",
  "key9": "5AraEjuxYbjbc4JjKSMqNSvkDd79CUYqTL8HWYxki5cyy3P7LWMFmgfctWSG6h5TpsyxKMKj65BJ91RX4DP4xxdj",
  "key10": "5BcR2AFyrHm28V9axYbs8DVoBb5SAtmi1VDGKW8H7Sf3hLCWfMgTNhwhGGakRoaTEJZ3YNbR3QdtjNPyjgRcXjA3",
  "key11": "59hjrovpgSZzU4AKThSFu9ceZwMLar4Naqh8XVosJRNF3YfiovHttQndrzk7UuSptYtnK9es3yGa7SB42PX4gnZ6",
  "key12": "3ZzCokR8tTRpGkG5DrUyuiTKG78njzeboA47jsquE3Sntw6JXYEcDSEPMdGK41Xff5tSTdNvzb3d8nJrAWJdkYfm",
  "key13": "2EqbYHnarur4yxCy9b1W3oSJfoGUAHAv5s5TCgeNX1SFvkTVzYrprq5xXSo2gR1YdYRV7ydgCynrYidJAsqiK8Dy",
  "key14": "5YV3N1bjJFbS8z1q7zZkSKmZJuKyQqwY6nHu1ckFHpyTEWr6EBqjzp84srKaCFBw5faTrwdPkiCURPv4BA1VyEPD",
  "key15": "2NdCDThFTzUFTGosrumRAfAuaffhUj7rG7ZZxxp6EgTrTa7ke2PzDqoWGJRqxLYSnsWc3HLocLasPkNcyP5kt6ms",
  "key16": "4C13UUChdo5kYu9r91Y9nudjXhwQiEvuhgiqUgYxxcxqsEk5LQNioW2fs6fbPorM1Fd14PqdEvoDqtoHL1GpTFHy",
  "key17": "eKwrCnfidborx4xJFmqhWfaUQUuccNEVso2hEDAwXFHDb6dSgZgcXMU8jBp1r5W9fcwHSe6v42XM7aAYh9K7Tc8",
  "key18": "au6jgJ6pASmEe2GrdRJThsbjqcARnqSqgNJ64PzGUEUogXjzgip6UbL8tcbg661Xd2epi4BpUEU1nj9mVHxcuk3",
  "key19": "26BXWzhomvjfhj1Da29rnx4xGYEXw1QAdxVuS5rxGJqdSpb6y7CfP4ZiZv61MfRqMWiokkrCWCULpxymXkaAw1qp",
  "key20": "4GxxU9z22PWkbeDdUyWKixSi8yFcaBsyRJ7eN2zph3yNiUHGb8SKz2NAoEW1qyNvFPnJVMdxnRr73rf2zNZpENZ8",
  "key21": "CnLMGE1V5HwiegtxCCGBAjLtKt4TucEnNnd1BiKojhmhdQUZkACcPXHvVarzSAPkrhNBQTBhTZpLQD58f7CZKAY",
  "key22": "4t5uStG1Hd5GmBFQSS1KUYYWptLy5wL7pCH6FKvpKV67oUj9pFMPhaaB5PmjpDmEfXRNnYgCKTSwy4SEowmZXp14",
  "key23": "3ip6JBzEaC4b42m3nqUBEwZ7gL1fY7EaqrH8G3mmg9S1duozLBMMeDt8VugC1SbbnpdTF7nyjc3XaXXjqTTNF9VX",
  "key24": "4gA3jyJp4sB1jhEitgRajzSEKqsyP96k2Wu6DK5Eiaa1RysARUaK4tnf4zdNcsyYDuvfL4hSwwnF4tFyQUwbhXKZ",
  "key25": "5NreXdvc8DWf36gYJtMkFhYibCLd4twVDAv6Mfq8NaskDkNVWptDiMxzznW4xuJX2SeerLLSjP5MRdS3sh1SiLdx",
  "key26": "5GAMaK3TAuJpoyHyX8HUE2g5zoYCEBdcrH4tJrUZnt32sHSwGB6rbwxqe43cfJBszWigPyUJm84MWY38aomFjWp"
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
