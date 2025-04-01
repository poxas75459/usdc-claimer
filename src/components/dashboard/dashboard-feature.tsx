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
    "3f52G4L43orTRs23QNHneMWcdaUxKAYfLJPrH4dR7cybkRJcw4sSmEavsRT1cZ53myYwJ9Shb9GjL68Puq6ATbx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peMAq5h8T4z3LMtZHVmzcDF7tM4BeS9AhmaMZaugVLuaXbouJyQZ85qF8wfYd2APeDSiRbsHeNUpnfsQB9YWMVX",
  "key1": "mXXMxHNMgvkthPgrdz4tBZBLR4FgEYqBQAF5r3ZxWk52JFFHqQdh1n41h4nzXY3JqoAWdH1NbPPWEJpxbyMPR5T",
  "key2": "526Y4UoFBu519hBwgfAkyUiMU8FZPnXQ8iJXjJewVu9mCmHBDcTxemLt4ZooZzJPtWsF2ULATaytZzDB43WuCz5D",
  "key3": "4EZeD6L8jMHX4ECSB8baeXnZAZLMqRssKLemr9Lawvs3wFx3MLpkSrwNRqSHM48RWZmPqag9HKefybXp9U3qZCzt",
  "key4": "4T41PNgnafWiGhf2d8YBZXJwrfVpZV7HU8NRWUcviDozb3rxHTV4mHmcprKTEpofoMMaSkQsKHfYuTV9ndwQVNmq",
  "key5": "3gPumLrTRYSSCKWotApvrcjFiLJu28FVAbWxy1Uht6U1W9mGkbqR3kHrvGCHzvUJ6B5FWNkhk1XwsHLDGj2soF8p",
  "key6": "4UaNuAU3mvqkTyZTf4eJsyJ1buLj9uNBiSPveNmmFUKtGYXbdpbjnKDpSdFMjpcExJHWGjGSAhoePAjkeyivLZLG",
  "key7": "42fPW16KP3MGQ6d5WPFgUtBf4QjoDyMFnF2NU7mft6B4jRBfLib5GS6HEL2YJSpxGxDg5obTXR2TY9UzuKXL7zYE",
  "key8": "CzuTE7stcMiELyeU6ebXkeLK4zwPzSZeQ3699wf2TJ5AZycU2zK8yKikggPrGvi57kDLP75CHgbx47QbvSLvNq2",
  "key9": "2bfScmLW6XfFKMirK4mfWiyGqJy2wLw1PAFp8TcAVDRSB8QaHhrU4DoWD4ofsYvHKufXKifUb3xfXhibL85AM5dS",
  "key10": "4gqP1uYkuZBRYHLFTjG8FgMe9Y8PQWqWZYHQWN6DpanPA5L8KTuJb7LnpJvk3u36urZAeGMeHBsgTKbd4aKLxkju",
  "key11": "UfWcQ4mRr8U9B61iPcDXBJvs3N7FY2cfjjqzYR2XzeaqbQN47ZrJvHXmfTvsRQpSa8hLDHBctMrmNnGgMGxc2LD",
  "key12": "2aT7PPiPTUejbe7CWKGuveaJjBPDGGJ7zth2kUdqthcPfZAekrRRuXgqRfXSM8qHcF2t9gwPsWABDe26xG5rG9EP",
  "key13": "2U93yZsU4ZJkHg8tDzKZbzNN4KbYYaWcnJbQvrgw73SFkStREsdHeQRVazZXc1SQfobmnDPJ7aQ6YbcRPnQdB7F1",
  "key14": "5AdgBRZ8iwA69YLjVi4zXbiK795j5GmvfUVhxXU9cZzzQ7ti89KKi4Pg9dkNba3F18rVrUhx1xXatWjzpCQFH3nF",
  "key15": "2gA9Kn3VE7GNRkgp7n5LR3fKdUumwSaMztZJtMrqx1xKwYrRa1MeMxpvzhfBDsMTgPVYNMC6vKRotAzrvE3WtnHr",
  "key16": "2shHTUw6gwfUrRsv6DAct6uwHjQVxfhSJsGvS9sfHFN3A1YNGKV3PtR4V4utsp3MErJCGAV42W6cP7GDC6biJDM2",
  "key17": "hWwi6jQyA5RFwyosbq4s2swwQfrQDPgexsVMzzndwRWsYiiQyqTx89bhwaUVziZEXnL2MsqbQZN3jV3FL3nAgoo",
  "key18": "318rJThxLrceq9C2xHar9fjSs21xg4DkcwrEzSJpCjJNd2mD3mPm6MP8VvT8zavFMqe4Wsfn2oizeyxCbNGPWadb",
  "key19": "5b6rhwAQLSZHqyeLhN9UKtvwB6EsmtqPRHiLkJQLGd2mL7NvhRxMLYUrLVRxEaUgAebHVVCji7S1PQTGjsu7Bs4G",
  "key20": "2M7pKN776kY3F1STsi8jBEH1rLNdFRxXqttbf5LLMCLjq9pb3EAzJknAf73795PaZqJgetAZ7yfQrDxpq7xawBFZ",
  "key21": "4Mqn7ZPphTyEeo7iXSB3FGWi9aX3LCCnhRTsWS2SrYNAt8Siho4qpRPTTiNG9avPjUpfHGVb6pgtfZ7TnDxJtjPu",
  "key22": "2KkYJkFqRi2Am4UMwuoV9Zwz82ecuYcggsqeYiusKC1bqYCeactHNAABMKDWnaVzj9wuXhb8ckQCU9LEgD13b6YN",
  "key23": "H1CQW8W7DznpvZK5rr1PV9zpjANMZXkeMwDVn7HknR91UwSoFrfg31cXDTSirkojKw7F9nNT7Q2ttwBbjePuPi4",
  "key24": "5LFrhUtHpSqCj7nuW7yxL4DZJRimwgDNcgY6zFiBN7YWB3gg2dNQff4xub73JQ9aJd4K2ozrcTgfzAD2nhu9bf4m",
  "key25": "4uiskS9iimtNQRsvLEvaunxgsewsBmDjyAi4NTL75fjDw2NSWb2V6VGXDM5PTT1pfaLvkBg3fu6Znm8QHGm5Wvpd",
  "key26": "2oVTcueskU3vWtWvCNC7yszwDLDUUVQAiVFkNcDHsEnvThWNBJyzb3gxmJR2WV2Xae3CCXdfgUWDghGUNYL631kT",
  "key27": "3kXzyLTaRXQijxZmEx5JQHiYpavzoqxhgB9LX9EFYuxpArTKGQ2UySKNcoSpcctpxTNswh85SKNvUphRuoBWsaAV"
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
