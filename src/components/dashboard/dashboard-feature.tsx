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
    "2kG5Ab45KaivjmDr6kxk279pY17jfbT984HwzzaEDPpqcyq1LppzViDaJGmDvytJR5waRhB2JQcn7oo1QvqPxpyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SMzAHTX5Qibf1VCJR5W5LXmDjYjhgEJkaEVPt1vZteT88F189AgMgGjDvo1U5BTbesPUFB3EX3o15aKxRTJqvs8",
  "key1": "LvBUpYEtV522pQ8TXvuLArZ3d1NKqS4kPZ17qqhLD9wi1z6FyDw8ruAneyaSrPKiKvMcJR27q5qs4ZH7vjWuXxq",
  "key2": "5662BWUmJgHREyQxQKTvhpUykASUGbrjL8pDk4ZVQztDxSXNbafmXNdJFbZ8ofTKTcw51Sfe8b6NfaLiPmNCHvcz",
  "key3": "2BnRUcwJsnLveefc6AASC7p4ThDxLQoyn5oevy21K7z39FGryRmzusqKAppshaTAG3S841CSzXKMJJmavVz4Efo4",
  "key4": "aYwsduf4TiP2UnUAUios9Y4TaSUQAv1uxQPGw6FD52CNEyLo2jELZXjDQLW3geRXMiM1tfw1SzVtuxaSrtZDh4D",
  "key5": "49tyGe7cfnbJXYrdctGHdZwrWuEdygF4v3GMPd1zayQNZc3kq77i18RzdKtWmXH2RZAgxG6KYS26nC1XBT1gVWyU",
  "key6": "3JJT1mzSBUoXBajQK5czoFw4D1Ua2xrcFPZj4FvJaMYDEsicYzWwkSxsFXq4AuxnRjqErZN5rQYt8J9jxGXyC84Q",
  "key7": "4MVzoCakgfv6P6uJtjq53hRhoqyN4yay9PPWuRbouFmqTXMxX29cRmppirqD3CaNxRqX6VGvZdpqe2UZyVhUeNtc",
  "key8": "4SyNwx9oY1JwKdBoxfDFinbHTWDYS9gsvmY8ZhuZ9bv7VmnSMTys1RmUa4gee4XT4WD2y6nhykAtoXNhfhpJztxS",
  "key9": "2yLWYcJwbWdFs5tETq5kwUENeGun5dWCir1rBqZGqBeR5GLvDaD4khsAPpM8s74H4tPSJs7hEsBb41fi2ppAN4GQ",
  "key10": "WQcwem2BioagTHCTpugSXXxH3z4ShFwKgJoVnNJfB1GL5om7XxjrYFMmnBWmB9avsuNxUQGRVDr4UvFhoVa83w1",
  "key11": "WrkMytS18m8EUZMyNBTCQVMQCMYoE4fRAYeDnFGQpRHpnJXZGUT4vxpNMkBQjUu6qKkvAzEdmZT9kESQCfs3c7k",
  "key12": "4RHErP4ztNsVfUT1nxkCivr4CeXKu9xSLNUtnTmVxub2sN2CfjTpZV5wE4qJZKsiBK1DvJcHPKTcuaM2FvE9SAGi",
  "key13": "5UeHqEtTz2KLTpzCY949KuUUJZ8wBsTXR2gUv4w7krYyEseCgPMyoFLcJXvaL9u39Vrm1U7iCfhPBw99hmpCnyTS",
  "key14": "8V6kELo1aJvn441C1fByvC7fQhsZ49B3NMmwr12EgxMFff1vccHeD8q9n7DWYVTjsETLMJb86g1geQFyDXbkJjs",
  "key15": "2F5skvJJWDeCQyGUWA9CZjZerLDaqNUFF1kzzJjTCyEUQhyuyNqs8irGr94CLN6pU3pjfrS7ar9NTEmE7vPybQdv",
  "key16": "4xj16E75smo2cKEzPmQWFzAq61jKKBPRcXz4CAbzyp8EZ623fFTzCPF8TmzfpeUiRJUHHSiHRBGs1yruXkmrBsRU",
  "key17": "29t5543BaMkjvNEmCro3eBA7Hej6QqQUSRt5QgChBmGF3mwDRMLvu6fWJ9e94w2UAtfiJy5wznJWMwHogGPY2hx7",
  "key18": "2p2GY3MpE6FscQEv3Jc8YiGpx2RiSBT87wHMBM737bbYVPb6Hntsvv1CCJxhupoL4mg5E934Pq2kzZYunQqhFUZe",
  "key19": "5gj5dsnWc5yKjizunYmdDACXqkDzYEJcq7b7dMSonVr4WTZCcAR8fCUEgo58G5ALLWsZm68oArDXonVGsd9HqPxo",
  "key20": "3xte6pX6A44EFDUo55DYX5ZKwEfk2iBeDNvoAuj8gzbtHTtPqdHx5asa53jG1AQKUM1qqvjbwyeP9JsiPT6NtsD2",
  "key21": "2Hu7pFYag83hWLRBum7fKyLjgcDiwM8dTPc3GH9iLuSFLYekfv8ZNh24vFh5eRKno7EwhDKSVFLVAEM1M1BQdN5r",
  "key22": "37FLNwVLpKmzk8tuUnNYwwmrkrydaty6yg6M3rB81SY2GPJMPjb9BmrFnwWw5og7Ykcc7UGoJz1UPkPGXs82nm91",
  "key23": "5EeGNFRdcCnWz9n3muPFNpN3XKCKsCsEqudkmBJtyWnGN5hFHvvnLA3G7sEujBWcBRUVWbEqa2QFQXpVF7qur6UV",
  "key24": "65NwHatBKA7HvsXsaTp81jopi1k65SVoLhLkFoEumpfKHMtrdRacfcwj48Kq8sjLDBzhiEZkCv9PyXify4CbAuy1",
  "key25": "1Bq1LGhkVJrLntp5XVMPy1AnCpzfjNCdqgfAR5cj9x1WJYDNZPztPbFeE6CwvKg42QBFbuBoBrqRLCyAsp8iqM7",
  "key26": "4oUvvDPayxjtmxK9QaC9mGn9UnyGj5UzwktWDmWHNfCG9Da6c68up5zc92EFa6DX8xCvmLH3SudwzVmZTEiVvvPL",
  "key27": "35XLWgFWMuLZd5iExNNyAUMFWXuBhGcsLM3QstAA9NQxs1PuFpg2UELyCA76ueaqsy9rTm8chcHc4tRYjDR1QgkR",
  "key28": "59iNzvVd71RC29sb4rnNXpx8RQTUwyjofLakZXQyv43vsry8iKdv7fR8BQd3RGziw9z1q85grEo8B5FjmKiPDLP5",
  "key29": "4GaPC2nnzp7jDHgBwZrxEr2Eqj7XcwadQGeVCzCSiWY6uiZg3CRdyb79E5wBufG3N71uzuMnRwMi2KPgmJkijs4a",
  "key30": "3MdBiLb2PE5LEW6Ns3hq89hEueVmd21Z8TrWBAeyQCgcxgyCpKDF1oXvGEA2Y9EPrvYNvDedHJDMGdCRRTQ2WYCf",
  "key31": "2c5D1xTUtM25VKDvwAtZAUgHj3PSYxC7jzR5bucvcX8NxTnspRo4joABuKHiRSqVha6GBuHAfZnwfxH2MgdD8Yqb",
  "key32": "5X761zhsJwKhLrRjPemvfu21vdpAXkXk3HZEwu6PjKzcsFtMk5gLsfYxguaqWrzW5GpEfhjETHV3LaaThPCJNAfv",
  "key33": "2u2ZFCWkX2eNKUYpCHvDACmoUJ71edtS45UUvwPEzpe2FhYxVxzZ7Ng9mvVa2jofAwCEJiBhsMovdwyMi5uq8xH1"
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
