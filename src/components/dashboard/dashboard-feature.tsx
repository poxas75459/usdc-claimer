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
    "5fhmyMzBA9pRQ69RZVsn9FJ19req8nqCxH3FvFWZk1Rae3Us2HKzbE3p6shBgZCuT99hGesPw2pAgsMekMUCstXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54v2Urq9Ruh5GxpiT5HwizqUFgVikBjfyFpVMSBfghKBFXyWLDdRdAehHcTEcXv9rCq6pkwavpNSNwdngjNDxDqE",
  "key1": "1ZTQ9bc7XSbM6WHa7watQTp8RZB3VQ8e8rGFXRmZQoEegDska3v2TB5nUAZhcjkisYMZwXyDyaANHbN2HUwKBuL",
  "key2": "2eKcPSmD2Ye6vay9chHuesJQCy3LHSpY4YCegyf3mzW1Cx3inU6cd3mDqZjVKySSGDQ4vETrNNobarXxDWJeSeH8",
  "key3": "5YDqkWUnsZG1BuMWuiUQg2BgkrGHSP4jetr92uJFgYhcgvAZy9iVY3ubHJWJZzb7nAXwZBVdkqBWwo4KV3358xDo",
  "key4": "85nVnakYsDkxEZH6cQLMhw9jWhj8k3ApDjMenAgKGzfkv3NSU3wcZ8uEPwDoCs2iJBCHXaKfojMmjhUrvsyjKjA",
  "key5": "tsEaUTKGFyawLRmwER8aprmV8Ct7eLjK8RHq3UbvY8XJ37MjFY3TUH5vrGyVV4h98VjbLhCmGHStrCYi4vdEHFD",
  "key6": "3wdbzXp4hs5QyyQA19yEwepbtGzgNkQhbfeghv1gUuoW1BdxyDCG3uzHz3XrHR3mG3UxA2oub8i4BZtnobnHHiTQ",
  "key7": "4dLXxXp3YQ4J4TRtwFzcb56c1wpDD9z5YFiM3k6PiKMgf7WeZz57nfpoE3tfxVbPpqAWxbtoYw6U96M7fSpKLp6S",
  "key8": "4NBobeX3JSbkDV93Fg2XERmYbqvL98SE9hb1Na7wwJ4ViNArY4cdKxY9MZQMW86ac1HVpwBw5aVPaZ5nQPFiPbZC",
  "key9": "yLZfv5YS1uVx88xC7B8cTKUehiowTHzJdzLT2D9wMKfSjidvgdQuAnn6rwrd6PAhQDWy6PtmHjhtQKj4JdnVSfn",
  "key10": "3EdoMEe9Vne9SKkuQWRqCuiyfppQgCN2DFEh4xFWgWwN4Jons9hnRvfmwyC3SsFV7vpT7jKiDECJbxxPEnR8Yzox",
  "key11": "5NgvjGYGHwPc15WTUY8rMpMB7sLF6KosnyiQJZvp1QdgLu3GjeL4iBVPZ5uu9AwQ9u1zuS8VmYzrTGuphfitXY53",
  "key12": "5AM59DX8Lwhew9Nwh6CyAphM97YErEHNeVW6AVmFCHxgGzfoSL89pxCMZo69fqDkAMNwZJQ41agVuRUdyVPPkSUc",
  "key13": "3y2A8h1KaEVNrWpLVmuqdxr7qh9tJGy8YnRyUo3hJpSL5uqF3PjFizFTptmp1LxcAVdd36nqj2eewsoYVZPQcNia",
  "key14": "2QvdmsEVkPGL2b68P9HzPKrLirG6jnKreikbCD2R52VtrNDcFJytdnCopeVtoSpBQeULNRCDtFd63gKJx26pWZGa",
  "key15": "63JRq8WAAPkcVbUtfUJAJk7NJQr7ngKDL2jKLPXhEFxFmRR3gWqY3rzXK8GXteo7QgR7kgF1Xns7C94fg5eRX5J7",
  "key16": "2a4wzicaYBVgYkvbJUfFtnu96HLkftdmvpFjh4rMG3cGRSs3hCrHcovaqS443yvmeBdCrjdqKeZCHqtnMBYaHpv1",
  "key17": "2HQcR6ujTmiscVsEru9vu83XP2NWAEdRVhwqkzMPAzcwdTRCzkP7D9wwid787UNjUq6egizTmXPcNKw5XcLwCXL6",
  "key18": "4wBRJHsov17FexwNArEZ6iPXpDPDNcybLHz1R4vRjKL2Cv6atknLZzUEawDVLD5eu8hT4sRFrdeVGy66XpJ2hqkc",
  "key19": "4C73BTTscMUCkYYAoCB6bUA82C5tdUMF7hf6t9VppJrLhZMqdRh2ZF1EvsTRM6oNijjvpD7sPLVVQXqNQJteWKsJ",
  "key20": "3UaG7CEuFrXCvXgnikV3J9htX2RgCu3KRgo7YsVc6M7sfHUsStnN73jsMpzvQaG8mMxBP9oEm5aPCJ41UHxKty29",
  "key21": "2q3Pm1wNdxLc1gkByqoVBRVFzLfDRuBCMXbvQdfjNCtYF7SD8AiS6bbcyvgAovpBnfdGRgnTXHL1qebJusgzsybM",
  "key22": "vwRGgt2AzaxgR7txQhVfDG4UnA45aEpA6Au5ASC64jhAEF4deRsBdusf41L5daLe69hWZFmZeFt5nGnmUBDmBuF",
  "key23": "5g4NfdohuMC6Jrx9SMkMWyP8Xd5184EoNm6izivKdXBXC8eAbfmWWggA9Ep1HNhnQPw8rGMKPJaRw9ipJjFj7s6j",
  "key24": "4xRiAn13zz3CDsj8k4J4617eaj3Hi7nxtDFUBq3DEMFvj9CynZnYDp4EF3RCzKedosDxARtXj9eHrVH2QFCh9msT",
  "key25": "4cRkZz7A5i4ZQ4RfLHEjZcaiahy5S8baJRJ66hLnnPNBSw5vqRVPLkhz7qFXLnA597R46EJrYEztqUbQFPFVShqt",
  "key26": "43xA8xc2qtkWiJDTcmndsnL9b1xHXA3FMGo35qicYad6TrqGYRxfxBq2Z6uNKDF7TvBpjc9PJumPMF5UvnCNx7i",
  "key27": "M3tXbAhgBt9WRZftn79zSXqssP3tdjN56k5qPauuwZYYNnSACRhZHQ5vT23LWqAyRLFeAm58AgaLfT4iBkknWeL",
  "key28": "TFxvMEXijrecwLPZCdSftUvdUGqAjpi6Q7xKpvtvn7FqMP7v8XFZfuRNM2pSgLW7nSNH7h4VYpKYNFsuafCMpdr",
  "key29": "nAb3ntYyTTEesNm8Ko9MVi6Qf4zEphmkAqkAsB4r3NSFQCGWv6kwkKgJtTodzGyKU9EURRVFwEECPt7ZbueNKKo",
  "key30": "2UPVuXoxDVpZGkYBN4sbJ1W6dJLGTzJK5yveNf6MC1fxq74c76U7azkQAHaM2fjVy1BTaUU1QL8DWh4AN26Gtxm7",
  "key31": "1LbRXnqnCWV6WP3VRCSAtpEThXjxKFZTzvpdGExqq8XiJhVhYAMsDntJvfqMs4qfkL8oZtUCSAoe7KKzMg1RW9m",
  "key32": "PuXPMvcNmFx9VMmkmbcMuxYzsb7YNwRQ42P19uZGodbLtoPxHQndkazYSZKYUrEnub1CQcpmam4KwpqwaYQT7GT",
  "key33": "FGz5RZvhBB4v1W6cGmSgJk9oKjGJULZ7VCj4xqAnAFG7JrXAQ63bLh9t6Pdn11W8gw5SGNQd722PoWxyJxerjH2",
  "key34": "39kYY64C1h1iWAh7tEYtRDhBHPTNyJzJQqNt6jurdPbYRsNGmFYTjBhEdq3AagseB4uGa8h5VjYqwWvLDMJZ2bZn",
  "key35": "3ng4s386LdsHFRSEs41ep194TTxBAUhHbE4Hz2er5kyVon9pqDdnz66DDPSDv7NtE7nSjfURQHAKVnP3Wb3F5Ktd",
  "key36": "2d5hc2QfZFS8a1HV8S4v2Svvdn3RLyw52YoPNzGjHbTefLtniGWUkt2LB54YXJDXP7cGWBUKDNFYh22ZhSTcwQVM",
  "key37": "4gnZfM1R2mus4XKd1yN6AHgZZTfiyrgsf7zdehfH7Q8V53gSy5uU5EjvdvKBfJZUFkru24164HYE2qFsDJRHpJxu",
  "key38": "2RkST5W3a9PAH3pL8P34Tp9GLt54yPsyquWAteK8mGczt6UYjX6YnRTghDT7tfk78N3hr5xG3uTGmbg843bwd2Yt",
  "key39": "LWpQDJq5zQKi6XHcjH5GaDHFVhuWyncmHfA6ERZhaVt99rQDnGUr51k9MwTnRJQ9TzNmLWhputTtiCfGMphjPNF",
  "key40": "2nBQXPEaDM6Cdo19tZaGUcnTGbcAVMUHA1qvUUXMHg6cF9x2SnMTvazscVKFVFVxvLUcQTeef8c8XBdYo6n3zkLo"
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
