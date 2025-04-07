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
    "3GkrzreZEK4g5XGboYPh9EMw7173cGP9nRzEWiDu2gD72YhpjUc22R6Z6D3xYzGou7HaGBR4aoFYeAnJMWn64w8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDDs3NUracogb91GmjQxQFSSD9vVFEXamEnTkG8fCk52nBii1FtQVikkThgJB4JJhrw1tAeV7iT3oFJaFFbSoiE",
  "key1": "3GmktKxBMEwTakNzqYg3bNKnbqr7acXdCoRtPfJjBaQ1VTm52ejozjRWtu18Lvm1wqAW4oHiPgKxAvvuev4MQnuk",
  "key2": "d5peDMFN58jtjqWrTeRgMjRLLDHA8ib6qaGnVM8RNnMea6UvDxvquoyhJ71Z4V8SNL49G57rV3AEB8NCCdKm4GB",
  "key3": "3sxVu9wdJsFoCme8oxuz1trb79xU8oJsXjTPUEWshzb3gdbThSEZjbWKnuSRQrUBLdCGafZpPVzTBPaHGpAK23WA",
  "key4": "f9hR94XZpEKX1K7uVQF5VTwTFDvinxFiuvF4TGTXXWAzUn1QA6zrp5iAfT8Zm1SPDBNsy6w3eauTJehMzrpWNLG",
  "key5": "2S76V3z4dBP85ArMGcX7QJxbuoBCsnZT6YSEVeHqZm9dTddfLkha22qkyr9ZeMApJjrwHG2knu3PbwCVpM9wPhq2",
  "key6": "51t2VNZtS1U8YEBAS1jjAoSry7MTmFRNEDANucSy96cU1uN1EFqk1837i3KpkGD9tE7DQSHVeffqHTBQD8FEMnBz",
  "key7": "63XXiLj8JgQeicr8AwjEwfwYzZj8v3nv6yr2XBbtwqUTfBKLrq9trMnv1pUa4hZjHK5UDRW81EpdCuj38Dyi9P97",
  "key8": "5cJFcBCaMSQZeycmwoF4twffjJiPkhDDNXPtSxiEFWT4cDdfxaqCuaJBokijU7UQdTWsDv57iBp1bWrU1wPctQG",
  "key9": "3vjyJYxfUCpWXYnb3TQoW7yLgtCymT4V8iAXMCiBPELLPH3ULcvLMCJied38C1HWWmmxaYTTtCLBoWHCcieieyn1",
  "key10": "2y4FyHyB6dm6bcM36qtn4nVuo5PHaC4Leo76FzpnUEWCSCjK3aV2PxB57ii2jXFZLQqyb6KKo9D7t9N6Gf2bwR8E",
  "key11": "MNaWSWHeuekNLKCq6Tc97za38Jt6tykogQpfht3pQkAyQqTMYMSdjMn5gU7z8PgFZktVxY6LzsehnWbTfXyseKs",
  "key12": "5vaQvhib2mLUi231rpQ6gJnXvBB8c4rZZHoRycLLD3DWSf5zZf2zCmcyNr9rgcVPKEZ2XdjAnXKD9gNpbQcNspfJ",
  "key13": "2srvQFAE3FbMzhNnDgDSGJaTDMrJ7ZxtefcP1WrgCzK5H6WDP5rABPQoioyWEPuELJYkqsgaJKG6RD67K5Z7MceM",
  "key14": "24mX9DVeczdYgb29H61EZyceP6Jne5HZ48dCUBEkGXTwKFs5itjiNq2Rx8XKyJoSHvK5pCjwoUbeMqi4ijvuhF9n",
  "key15": "5LeznMwmMhCG2fmVdxfaaTEVYi6bsM6op3zhRjR5cdeNSBAJQMkhRG27W6erHGXdmkdztxFygrFdHLtwPAmkzP7c",
  "key16": "onea8j4ePrjwgYnK7sqZpPXv4N6oXYErxfLhq2GFANVbmWkTLzLp6fvXhfb6TVq5BbkR4vbu28gg3UUz1dhNVH8",
  "key17": "3rJLBHfxCGvWZ9wbvAQNEnGJncU14NWnANa81xPN91i7EhQB3JeuhS2hVfMvkeYFUK2S9uzAzLckxMzbdMd796d8",
  "key18": "4shR38SAsQ49s2KELiRAChfXkA3nBvwp9L44Jy56Z4LXehCA8JK9FLFxXyNyUkRtEfDuQr62pqhYs9ei6R9U8ViJ",
  "key19": "2QzYCqT3ewBSwrkYPdE5x5VK9D73a9JEd7B2BtyLQf58Y5FfmVxkiEd4CGstNXHpFhYrDMSmrb5AiH6uZNxzQJJA",
  "key20": "4ZUrqFR4m5FaCzGZYG2oaQf1qCbnbXmCCdsK4jvzyoZDS9Vzt5nkLj4Wt8JFPpNXNSCK3q8eXi7y8jrgy4Zn1TWM",
  "key21": "4Zrr4ACx9GAhBU7CdkAqgkdgKPTsBwzh8s7GSgBZZ48e4iiGcERtnAmrBkPE8VQjirMkJ6vz4VUsCrVcML4JVqPK",
  "key22": "3c67YRytzZKZeZ5ppLxTEt5UcJswUQTUo45NGr347Gx7VjCaMXcxAyA7CDMBpWvwfgq7baMdgjtCjdLrwktdWhh3",
  "key23": "2vye6yN5mkLF7Cjs5k7c7u96qNdwvPe6knBeqYbYcnD8Wgo3B7uTgqxsmH1f9JokB5sQ5rmfLijqHtLXFeJ7g2eB",
  "key24": "4r4YwLSJijQi4QFUEysCx6KmVoQgLQeAn1Gp2zbCZeP8rjtk4QEGqu38wH9SPrm2ms7duf8HmMfwNDcPxtYQrQwh",
  "key25": "4VXwfifbrK6gYpXxDJM9xpREitebr3bTZU3mTZm2TCEgvVpREkghqjfiXtfsGXq7tiK4WfBFfeee6VnbqGkRydfN",
  "key26": "4DY1d92xFyocBY9P8gHpjHDyS73TUN2xd5UbdCC9BUM2G85X4errafX8rzM14bVR8TPRrZDnPGGJDdf14pC8WaLb",
  "key27": "2Y6R7HYuHxQTRyvahpnimF2vK6heTYNKgevXtHHR2bq5TR2AJFvHWmHpojefZhLNEn3Ef7dCGEUFqL9jprAXNZBd",
  "key28": "3pZgLPxpCDq7QcNzmZ8JJCWtA76Km8Dqf13qo5oXj7FR85Q1T5qjo2iHNeSNKZEf3NRNafdmHFHUvf6AmeX2ed7j",
  "key29": "5y23YqKU6Zb3LXppF1Szg996J3cfiV3Ljeu6AvKZs5MmBVvngJE5puNPGUnHJvZ2VC4JhdsuiTgJ3zBnpjooDiYS",
  "key30": "56VYLUHpyibjZjy2aov8SjBHgwQDVgQ9QzQJ1iWfbJzZa9fVugrE9pf7WjoEgEWfLoCn16vnWyhyAmTbNBJxuu1L",
  "key31": "4QqsXkJGMoaFG99USpGGYK5pUqamjhM1pFLzrppSPAhmdWNTaQHacXMsKSGVd8fPQzLNZNx8cZ45sozpKe3adEeJ",
  "key32": "4BcMUYPQPf7nQYjd4nKQYLE3cQACevHCesFc4dH8DuVGXTFt73ssog4fvRjw2yBHBi6cgb4QjDEeF5mqc2jWeUGb",
  "key33": "2NMRnBsKiCWRHcCoTFcCYfoJRgJDb1LNKpmzdvZdWYuPpWS2cykwvbqBQyT876YBuRL3B9P5y8BdatMahisnufVZ",
  "key34": "4tnvncFb8Ucu8PRhi2sKyfeaoGyvcpofF3CUwVrZfBMs7VJda3jn8KxVjEuzB8gcqiRYNM2mVUQGUE2kMo28TYqN",
  "key35": "usR1skWeFALHc8bDERPZJ1Z6goZiNqjQn5mZAQ8dtdJcUpZiik2Nn1mafi7DkHb1w2H1XTU9c3xsr8TJ8At6dPU",
  "key36": "rp9QGXydf97KX3LcW112S4rxnxMqau6k18NiPDY9aYEc2RMDdweFa6M59A95pRGb2A98pbkHAhdiCreHHyYtWBU",
  "key37": "cvNVbocVwEKWvtgMaWKeWgEErMaz5vWWg1xbUD3YZPpSn2MgEKZHLuxmiNhQaFfBojMAw2CQWjyELndYsH4XbBr",
  "key38": "uiAbvBRoaYAhdGUG9DATiA1wot8ExBhz6vR7ZrBQrwBBVMLxxZBaq3vcUBt1VYV8h6S4pPnrChKHT8tSjeUYjzb",
  "key39": "2xJNJHtzvzUiQSny6eL92TPZLqWgPwiitENCKkpvAgJkv4vNsT3SiUmnpA1oZTs1jWAi53dRa4BW1Ddz3jhQZYVM",
  "key40": "4S6Sd73Hcyfn9kkvcogL2wYyDnJhT4GubLkbcLEQzTa6JCHjZxcqaCt1c2ZcGXuC13Z5XdrZijVf5WvJXexsYXMy"
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
