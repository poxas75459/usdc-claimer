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
    "2Qw6enwBEW1Jywhuss7TvRQZ3VzBMGgC4oW75XvW6rfkoPwrbdeG9doP3BttrSYxywFNeJjMpmBBwGQhGQemS4HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHha5NYZycGgeAJYQWyxdefaCLHnPdeiiwAqpi3dM8AaxMfwUL99T9LxWZJcNNBbF1sYgS5cSvzd2mGWS5ueYoU",
  "key1": "66fCYBT53dzeiNjYqHdaXA7phvxunyBw4HWd4jJn9KA6cFMBjcZivRJ7hWwPRNsUA1k8suksjpPkg2ebtZEQBJ4s",
  "key2": "2EaqpMTMF19ncsNnckALasvQJamRXM6zk5RAsEjBQ2cMqBY6iTdnL4a2pmu1USnbK1vuyXmFqLQKsf7PjoTdBt8L",
  "key3": "5dppiWEzkrdw7eDiLWfrQ8k6fynkvfxz7ViW5RmmsVfci2b2YnGdDsoLg92AHVsdRSf96p1RWrdkExHSMv5qvkRp",
  "key4": "43ocf65DSnP5APB6m81D12NHnKpU2pjJ9nfKmPMtn5NDrZ2Jq2JuMBCZ4tqVi8kbQrEaJAe26ZCZ1kJwd7GV6gDR",
  "key5": "jze69S8nXECU5A8fqvDB1B9MfFQdGirEZxaB1iP3p8Yyfe9tC4cr5gutm54h3TZLcE7Lw9wzhJTqZHLsALKUG4j",
  "key6": "4W5PCyFUoicSxUfzJKEJFTKcberRe5k6Rg5fqwfTcH8sGxitQaFuptE7shx9PRyeRxAowVxahmWAqn9dT41TsHDd",
  "key7": "5RagknVrUPQ65JbUBmpTqvzHvurothnjJkFy9ctNr3Q6oA1EUK4UWMmfXhGwZ5PerenxaBrfseFRcX3QpvAKdNDU",
  "key8": "3YpBccdfTCJXtnpqcpTsQrEWoQjWWCyw1VtVLJdGzdoGbYu5LvjJGKjYzfSXVPUxBVQh42XQx7ed6i7eduLuj3mS",
  "key9": "3C3wpEWm5cpfhpPSR8s9tJ8qh8KW2u1p83Lk2WRBNb5EpVuC42zfnadfVnqcrSQvVPcmVnqATmRBaYVRat9JJdaT",
  "key10": "3zZzpUhnadU44jFCAfDZ3hsRUFnHwmMCcP9zjq1txZKBPNhWM2quv92eKraMrCxHeQH9EMRXqpwKBpqYPAuR78cr",
  "key11": "QTo8EaifcJdAoHSyfcWsidL7kkUQFiSWvdrtrA2D1wxewCCgf5xxUe7vEkEjhCiXVrFNffQF7SeQihusxfU1zze",
  "key12": "3qoBfBrW3CfuAwxrYnq7RnqNShAMDmnsSDEmMera8NTt2wh5hJ1jNvY9rG5pqvMfKdJ7wKQB4Qy121wv9fhYW3XD",
  "key13": "2yrQpwTsfXqfhCaxqBX28sVL1THC9MK7xV6Z1fogk4vp1um546dRv2JPtJvE5or4g5wodfKQwNHCzF4B6ePaP86C",
  "key14": "4dZsufMvV9uqDViiQ2xTdUmHesbQJYX95HsDTiBL5hZJTdJKrGDBMHaECRttz93Bc4ZzuoCndUgf36ZdGmAzk26F",
  "key15": "5Ko7YjauFbYk42aH3cVywc5P2ZT9D7VH5EvZzoWe6ToXQ4Bp3gSeNaWcFLkxp1n66KmTy3MdHTs9yPNnEwnNHs1H",
  "key16": "2MVYQz17ugB3Fkmmxgg8ZyBXnRTJDmesGN9Q9Fq4erGYErpCtrkcmxDxmXvMmEL69szPwX2de7uHV6XGaJgoSxTe",
  "key17": "2hqbocojmnd7cP2HSKumGvNAmvY9f5r3EWEeUkXpKDJ8PReMc4L54ekwvx6D9AvyRfj4ibJpSg3rGhFRcGYU4N9U",
  "key18": "yJpdRjwTpWy1AXbGynZTj7D6kB3y96MGLYGNKhVhuf75TSdHdwkHW9W4LULvFxTnioJzB8E6nAHq61egRa2wZL3",
  "key19": "3roYR6YphkMrpLjnpxxmPuMnwWbqd3V6PKC35yar4kLhYXAdb6pBw5ZDjtK8d4tnXksZ6n66JKMVacDqr8NWPLAQ",
  "key20": "4y7FADVSCojqfPXNRthwtwZoVp1L5NMiMWFNNJmfqMVTeTetE9SZrxCCtw4vnmzCuFd147YVisteJLDDxQskVmoM",
  "key21": "Um15z4JgsoU36rBebQ4zFu4KF5T1gEEieYBPosChpPfUWAkmGJ8CZjzfqCg2YjwvEbqMfhtBtEvhMjmhnjhy7LV",
  "key22": "1t5PykAkPWNpAx5pojpRQbU8LZcj7G9Sg2vrdyJTs2b6KZwRQomuvTfXYA6VSAYwTkXr4ShDC44S78GxDDsgAQ4",
  "key23": "4vhgyYghckZbrDWfq8hnNW75mCVjfqbsXZdUK1optrFjSerBmFouPijQ7Dhk5YqC8jN7NY5N4gbA7Bu821NgVdDA",
  "key24": "4P49mrUfrDAdJbhVRiXXTzvV4iqrpGPu8D39XvjyWSDRwwy1o3mPVJuQfLgwMZkBifsuT2mfB1FDa5sY1d84kLZn",
  "key25": "49P8XUoSjEgc5Q7Xg5BKxQqEgQ57PcXEiKMXsYMxo5HiKxtqz8VDqWoWD9zYAySyiErniFa7WjnUb4GEuZJWEG5k",
  "key26": "2oXW6UNQ99eNS1L6NEyMsWLDE188BN2v1DVThEzcqd5wqxFE4iJU7HarggZNtkFyqv1Ngmnm3DMjWWg9ma5fUjBX",
  "key27": "4eqEoUsBNq7hwZHh4oUq2YqbSXpR2LjbWxjhwq8V67ZmtEsSGFQYnBwHv1vBYkDn9KVbyd2h8vDE5tr8VhaJpttu",
  "key28": "LB2oLQECBXu7P3YqSM2iLsWsFYd4pAGNNAzYufHXcpb69YreB4KrdkaziZVeJ8RhBnBtEAPfZGmsBs5YeCHEPSK",
  "key29": "3uAA5KpJvr9MGQubQhfSTYYscobGbAijGQwFBkhDbq83iKjsuWqMzV8i66sp5w8SWkfjKpA5fDnmrEQxPeCUnAHj",
  "key30": "5wgdhcjEV64TCczj64AGmh4uwsiMdjBXNF4XqrMbFPVh98DYtopaHY68qSNdiizWUjwBHJS38LrUBdn9jvqn4FJ8",
  "key31": "4GRY9fqDdRXS8yDAzSer3GhPeGb1tBbGKzoHcnGzDcTM8Syzsu4yfSRiMxN4D88DXWDkB4bkQMtGvm3Z3vey9o2v",
  "key32": "5kS7NSka8SDVbsrJeu8xWcqiH8EkQskVywpZMVpKxg5BTx8Pwej8gnhN9sLAyd32LBdRvdmVvTRp8qowBrpjYmvC",
  "key33": "qXjenpQCmW73ZNBgv393V2Z71CJUF2QaFpsuyzquScjweQEped2ubRWMyYUXgSQzEScp6fkkg4XtAXfdpJ7sR1K",
  "key34": "5EpEDbbiNmJ33XDMFCwTnHubn69LQCq4oVKdipjtcXU6jqoBiC84kT6jn4hFm3egrTW3XYXFUH3EoA3zEVcFAHKv",
  "key35": "572N4ShUy72LqkX2RS8ZYEHFBydyScKpg2LDXaEYdbwFJJESMvjgpn83rVjGQAUs73H33dN2FjWnu6xd8F94fdYT",
  "key36": "3QSHeMbvxYja6kL6baPCE6vacfimCRvepuwKnZNXwWgDZXMAFn9gKvJuLASEdbw9q881tbYmThBpt31wtfKCPXpa",
  "key37": "5jpaGNGM9vAvzS8d9LMUdQLG97fdVMNoqGG2NFbmyGRKhd113R4bGZNmbkxCv7TtMghvBd4nJhMdTRUBswe3YfKD",
  "key38": "5sADZ4fzrQRyno1q1o52pfS3kvcBrvSPV66qB1xcNfML8F79FHrMwhhfHMELosL4uHAzFSpaf8a87HUWBkAT7iZR",
  "key39": "46i36fJUy2AuiLRonyspGS1D7dzakUYHxs96nxbujQpGDBM53ER4SDWEoozj6f4cNDBWP1yc7Z185LYdAudf9U2p",
  "key40": "53PziMdDDHSrjuBoD1E1UPQKGe4JSN5KgygMfAgiu7FowWbhL9fCfpzSFmGHyLp29N9R9jJU3DY1Hont4q3zCD5C",
  "key41": "5fHBXA1VX1SKxtNLSjWPZiFNg8QLrDka5damLEdUke3m5cRS4jcXKD5GQHdSm92nxNZSHxKcYGbQyhqmtBCSHT9Q",
  "key42": "42tfsfgNeKoZMamLBzsxcnLeqgMwFpAtxQNEGXjA9DcoPWDJQAJYkp9tUhPAkskeg9aQHmYV8Dh2Fr4XmpgyqXDa"
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
