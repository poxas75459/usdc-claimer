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
    "TYy7A4j1ZbGpWSfR5u7wTye7bmkvMoK15a9wkTgevRUCm2RK3wb9asJvPounBKVPx8cbvCKEQQeQU2362ywxjfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeQoR1pUHguXz9mDCRVKZ4tDjLhvY2rZ8bBPMsSKYAUi9yXyESpUk8yv87EhYmgknwLPam2Xd73vmSfXwRJJJVp",
  "key1": "cC9a52NxBLbpxQhjybavcgLhnfYrDUQQLFQ7akAiByg8GSaQGxyTGakdbmPfnk1czLWnGEMcjZnG3nyxHpxZP4u",
  "key2": "332Jh3oVoxzE7ka4Lw3GfEY5rroDUbNMG5odTFrQ6AynsU7etKwr6uhzE7KSHTiRAM799cqmhEeGJFCJjTPFHvE2",
  "key3": "3oXgzPCgbHByHyq3aakiRbzWncwaUWf4sE6b1uUhagJ38vVQqFDZokukwCFxmnHvDpLEqGJjmNTRKovGSSprmvAp",
  "key4": "5FNkqbzMGWyfjAhUqdCoaivFofMVUES3vvMLMrPq3weMQRa8dLfgzjd2zKYaKjmtvGMDxc8rZbA2hoRYi9ibXFw",
  "key5": "23fSC18R6MGPq35LJnggz8HyRVr9wf25TGAnxNTK43JpsJv2axPUPjwGuaDbVmpm6WYuG7X2wFfReMPHBGCpRMxC",
  "key6": "3Qt26JMjKtWZQBYLH5D9ucp3ZjtuQ2KNx78WaLJ2pHe28r3F16mpf1Lmk8swAYc6cV5myMaLtw6czR7jbJC6te1x",
  "key7": "5oxFtxwr9J2XwphMZVYfTYTZ6pTemiJfqLPfukHLAFkhwah6CKw4Ced8xocCe3ax3JNi9NBQVbKEM37h11inPX8x",
  "key8": "Fjjh1MQE7L4bnY1Ck8qdV4boZKAamuHjZkrKpMGe9gfhAFfJgwpcj4B7PCHaLnvFv7Ro8FwsoJcmEiRus1Y2ZqF",
  "key9": "5zWztVnV8GduFsAQe5sv7fDjeR6xARKXc3eqUUuBmvr84ajfmCjtVHKbhNqvxNUFTddE5Ja44aEaezT7ECpAHzxC",
  "key10": "5QGxZqAu9F7VXbGtsJJvH4vKZSfCgyavxUtahTVBsNHASPtp6UhSMgXXNnNhS6UsGssSjKYpgdi14vgDstKzfqpc",
  "key11": "3qEXtyd5r6X2bdUtLAxShfCvzdpsDz8zwBid22XskJD5aZYLDkpELyDfEMbAJSPpCpMhEyA6cFu4Sjj3i7NXvBMD",
  "key12": "282oU4DX5Kt6kFvt3Xs38a6hsduBYvwLWtWEBxcebGWLJt4X5b46JMRj2ePxe7fAxMe221eZzUocsztNepty5tcC",
  "key13": "4gkA58mvuK2kQbPQYcJUFDYihthMJvTAxVDYrtfotiKzmpqGgsvHnkPFV8UrEP9MtFn3Zvv9KGAEVEoaCuzXNZnc",
  "key14": "2Xm93kNjxb8x1UMeonWkzyrbDQ9zEmtrBdWJSoaaqKLPpERJPAhbcSMHSLsuC7LgK5DHKjkwG1V7z4Pp9KZy6iiJ",
  "key15": "wyTCK2VH7eCMg2KykshwRmcAbhCAqKBcDZxn55bphjfmmHrtqv7tRgTg5m66BTn7vsmVydGovzjNk7Y8KjG4CLn",
  "key16": "63BD8CWyGLaWwY2Js6xfP9Wo2ooiaFLHWanTozYqLBJbvUt4jwT51NWzQtWMxWUJwheeQD5DXPnpP1x7VVy82JyZ",
  "key17": "5UNVRaoAJQm6wNAhWvhRbMwMU8t166KDfWEA1E9jk6ZtAgGkeaMPNNjYidHmz7Y8fHorkszXwrax6vG7jnQEjUMH",
  "key18": "o9foJXGQPkJRU3AWpqsgaVxMqRvTLro8yvZ8iv6ZLmndN2QJA9hdaLF4oKrYqk3CgPwcEXGZV8SkZVRQPs2XJ1q",
  "key19": "2wTp1EYqKQ811tKQLqmWjxQv9F92gc1zJv9TUfdmoa1TkxPUFzkTiJFYqm5eQpDgctxTpNLP5HdWWb2uQZrrfeHi",
  "key20": "43e6ceP4zuZT2jQaas89Gq4KnQzxbPb9GzwRFSSxAzK7DsVuKcrsxNYqp25ZhS2fDnDhHCbeFyZtvYHNp4iPhL3q",
  "key21": "4ck16Sut5jmdcYeVzNvbWy7UZuBcBuEzrbpJEJ7E47oy92LGweNLAE8tjRRHNLrCsxgW89RGdqChK7TrzFcPTZZw",
  "key22": "2diAR9k2pQaMM3mHKg3K4VsESJdm83DAQQn7wJCp8aZDV5eTYRpyXXeP5qvJFAZ7qjWe23w1VENfjN6LxoBUts5d",
  "key23": "51yytnBfKs7djtLBncitHsFHGkStjNwgo77CXH7JBfxCJNQTGT2eXwhq43hrqDcGRV1YstZcySjCPZ3S7vqgEf4Y",
  "key24": "9QPG7ut8TF52k6Q3M5yrx7kJbn713KfuWWnwJyiKak4gC4Ky6ETa3bpHU6VfZTGN3HjLzn6myhnFS6i3ygRmYEw",
  "key25": "3GjJVNRYFaSohogbDCK1nwh21fgyQfN8dADsjogCgNqidCwKGkSrvxGx8tu3AcRS2Pk4yuPZWe47U2nK8QDQCbpN",
  "key26": "5fTEcMSbwHXdAbj2cdBVgM2PJ3a7ngwaFefMQG3yz9kFKXu1mDTtJAW7WAXm2YWry4aed4k7XcBpgv5pNU3oHT8B",
  "key27": "4ziM8zMZ8SjcpPZp4r9CwXLSTn2BJeS8DDjprGVSMqzxtrB7zpt5CdgwUGENfQizoyGrcwgeTFcDrhh9hpM7m8iR",
  "key28": "5BoUoA5kZppHLtogMmwpvQqu61MgukurfkNMKozhVyCH2g6z2CLdQYbdBzpAN76KyNvDoTbFTbJ1Z2TMjUxjqtZh",
  "key29": "4wavq5dVRkjjyDqtTuKDpndwULCwGJPqNDRqu2iZ3KGXjJrWUahxSSHR4u5UghFkeYNBk51ooR4tkaVhMofipmpT",
  "key30": "4Lo9UDwnh1ohNtvzm5y6qt5QebRj8dU3yC2GAMvTs1AAXQsERL9BsbFq17ZKzyvTEEp3JxppkxkgiJ5xWu33iTg1",
  "key31": "2uaqB4ztme928kxvRjon8jm5qWf17XWdg2SPRXWEayxwECuU4iyawGJH2skk94HhvFHJ4kDRSRLPG6dkdxniDJY3",
  "key32": "3P3tgyr76HTc8qQBuuk5JUTQHxoEqowedjMzxNPv2sV8WsjWh7YrKZ5TJLDFRXcJ8MYDQBYYMS9SGA8pGq2pqkig",
  "key33": "4dSeJHmUWGEskYEpvuXjSR25RJz83TXqNqCPdDNYVGiXzvuPLCyBu6R1qEiXNyMfpr77meC3g2qF9wsLat7kmUDS",
  "key34": "SZEdmVBvuzMpQAwZUvewZGqRPLPXtoxsRGP4HUwwkhXPHxEdkpUSzrTzSg9wRMt8UYdG7RHDw2YCWueg1qQdQYM",
  "key35": "3AF1Xwttp87TuV5uAyPn1fT4yBLX3nwUhbN1sYaaN76qgZK3vYw7ZjMuZ2w15Ap9hpTVGNcCi7ibK6coanMNXgab",
  "key36": "4BDrWwZbcxEoXjmSM17KsXF9xcHJvBQmogqz6DMAEED3QxFPYkY88RAk55dSR6apLsyR7f6VZ2iYNMvGf36QXCDt",
  "key37": "3JdZjKjYagbSKDiChaYw5qaaafi4YJ8yoxqojAQ4E4CDUsNWv2LAQEmEdUEbxTzFDUbudqqHqGhYYuqjA7z28rrC",
  "key38": "3gdxsQUfwfACtWBQkG3UPiGicd9RWsE7nsUA4n56VcaR5gn4HqYSGVchSrGUKiXSLTmcyTHFuj3n1REU395Cgzi",
  "key39": "3nmL89j6Tmdddh2FkGxwRZ719pxpPNJbVRRF1EQThseCpp8CHazaN1RKqfCGkZyCkYpH7SkAuExTZB2w4aMJ3eFy",
  "key40": "8L2zDFvGorZL7ac5M9hdBxWuRqLeV7HLaCXHnPBWP2jtz2DpVq62cKewEXH6oPjmDPoQMLwHvscqUBAgoWWeYoP",
  "key41": "BQG6fWEQw1JunKSW7i7sH1imyEXKquqNPaxCv3ZB49h3iwAGTZfJdtKY9yMZhbwzQ1EmBcA8uFzJowggYDU47Vw"
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
