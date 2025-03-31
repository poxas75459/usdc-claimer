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
    "f2X91yYCHo5r1QaZLRiquAeDspDLcYfen9kRvZrjt4qiBRdzeQHAP7ZRmucikrcgHHq8xEEUnJwro4XdHayMyM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23hbdyEac13bDzMX1MqeZZs7oaJw2g3jMLjoRTzNAkWw2K39CXC8Nr9eyCJtHKMDQKfaMfpcyVjhrDkb7icw4G8N",
  "key1": "3GpQWhSt919wfumMUg8kYtNctVQPwyKKYFkXXwrZpxUVJS3mgsV9Y9ApDGY9cxMNLP4iCSdKNF6oc3hJzXrF9PKA",
  "key2": "5zsymqjrazvmfs6UBkdEggShJmF1YvqcTxrcMbaY4JdhSw3yapdvdJsozFSwDi3sQ7psTPS1VUarEGZ4M6Af6NF9",
  "key3": "4AQTHbU8yQhaGbXRcLgC1vyBbkbPbkVRvsc8oQdeBaeGARv2PpkdmXTBxZiVwEgj8wFcLJN3MwoVxiVR39J6u2p1",
  "key4": "CvSaUNg5KqNCvR25douAYoJPNmbrT7PYSQpN6e9jEr65PjE43G5uQ9fxQy6AyeTBuc9B2YJgC7SuTPkdxjk1wj2",
  "key5": "21WdfFzvviagnLmkmGRo4LmopLBBFG6QKbjnFCqmZUNZSdShZwNk94sBv476FTFg9QBxpu7x8XZTfsNCbvLJ4LVm",
  "key6": "4ShKQTQza6gcGeSYUXqtjCqzFn5t4vy62MPT4rgFPyrdmQxvSjjsd2KWwjVa2f3YFoH9uw6C6Ce7kT86hVZPeVjt",
  "key7": "5u5U7eHAfdPwu1LWpq6sHSEYYTWsTuGKkxmUmUWMe2MegxVwd5dqh4mBw2DALuaKhUycZirSVzypFsjSpkTUACnQ",
  "key8": "zLCNM5PFNB88AfbLiT7w4BpZ5vXkWryDJeS37Fni9cAeZbQu5bRp2EnZW1zhBPUzeWyq1tSjFoSmyi1pCmHtGHG",
  "key9": "2QbGqcoCiJDXK3XmeT3pGqxXBFrPNQXPwug6J9FCd1r2DvhBWQdZR2EaMUc3FxKfKyXQVCDRzbVaRM6mECy1KDpf",
  "key10": "2vKv9avfXbsr7SCBs6DJX65799S2UZ6WznmKD93ZG4rrdcmLNpNhVNmtM2Fa3ZGNRRApCcKwaYHVagZNj4zQsK2k",
  "key11": "62VCHFB4AN7WEd4LeaCy6rbGzBAC4xSEvfDQFyAN77s56qMSPABftUzkPfQJP8NCebG7ntx4MtRS6NfuAyE1vJz7",
  "key12": "5NssmkroDaJBpq3NJtSDn2oKZKAxXyryxTbGE41Qm7Zfpk7e4KPeNqcNVnpdpv7TyzRmfg88Y778Rw7n99m9TVvb",
  "key13": "2RV1JqNH9wBpXBMAPeUvbHo5CwCJcbbrcWe5SBUUFUrSxEf4cNFdWBPTpipeyUbjAN3yUqPwwqcfq2vb8qKTpYed",
  "key14": "2osMgypxW9xifRDGteyndBePRD7GAP2k7g1uschWepFvxN3zioRqSHC1ctBEmYUSAjArfuZCWtqD2MZTRGuZNmnZ",
  "key15": "5ETXbvekAxpoYsmKfWL1BQRVjQobsgRXbge3DPQbrKGMySWbPP8ZXvun1Luqs3k2R2KU4N6oCtus9XyTYmpdtwar",
  "key16": "e886s5zVMcaRug7AoL9zkdjXK4jyUv3EdegeWLfWJvF9sz15w4t77GQ5XxUeJVWDiegmuvrfskhhcVcyAYKg4Cx",
  "key17": "2CoUa1S5eNWVL2DEKFTvPUQK4unyedhoeVHwyzPCUtvK2pvQVw7nRMeHQMiajvBVQx5zujsNhaFMJrAEb2JugW7a",
  "key18": "5qjxdWxJHgF1Ky8tU53pQQuoPK9M7hXvHXqdYV8WyYmW8mswnyCXDRjpWUJA1o2itfBVXGjrwGrD7UfA6ExG6BYj",
  "key19": "HLw9qPMDfpxTkvGyWqcr5yBML1kxD5HWVio23aBCLyZ1Q55hpsa6JbhvQsHVXvDV8oqoD24tYhsgeXt2AWbMH4Q",
  "key20": "2RQNKcvbbWrxVL5ckf8iobmMCJpeHD4kKDg4g26MnzNiKr2pV6bLY2ZbyPVcnut93bHoPa5gBrfzhRDcJFcfXmj4",
  "key21": "EXKVBZpmW198CmwCBJv4bz4Rj3nWcz6H44exQGRC3nxuhRKgtuLFH2ZeJ848D8webZNTK3UCgB4sx4WpfGrx5nw",
  "key22": "5jyHMuJHVd7mL4NP5wS49z5ixyG4b75AtuX9o8Hp8usBXLA9jYDc3FQu5BfHPKh3SENdyXawyWcUesAS22LGxeDn",
  "key23": "4qL87Gut1nvpqpQsMa3s4LddCuR2DcRWpfY2vmwzGkegHDGjYUAsJ7TAPS9f642T4DEyxMTweSG2oJaCYVgWvyaS",
  "key24": "4JFXwjbGyoA2HUhGyNPckcMdGSxRsQQzKZiGkcjsFdp9u5ib2F6sqg6C4FhyAttGLwtt9ja7Zf1vRbPRNw2EJ99L",
  "key25": "5gNELbSnc59YrQN1u5LWEFmUUCgk4wKH1HzJSc2DPLjvmKVp3ZNmUcYqqQf78vFjkRng91DVa8f1h2EkTafHiLBV",
  "key26": "2i2BBdpEdGcontH41b6FfkP2S4zuh9Y5V7t7PoskqGduTEM3uYg3HjZDEUn3RSUcuMHP4WFEFj4FoV1ky3znQKuC",
  "key27": "YqZMJRMzU2iXg6Wv25aGMgqKQt9eRFnjVAqQ9QyEuSwKqj9fxfognApZxVphLn8gVcDiT6dMqavL3x7K5fBqGQJ",
  "key28": "5ddTMC9XvisRHFqLhCbUKtDo679Q1WTmevj41CoFNRKw865BLHcA4VHfHdU7yetJDyx3n6RVy9YEkomTe7yujvXy",
  "key29": "5NCzN9vanSGfX4ETgCGkmuQnAHtLKBsoAeNwQs3EFdtG8w83YjGhaK3kQyGCgKmPicU3sTAun1DakV39nx1hQJpP",
  "key30": "VN1cxCRYvegjEpqQZg5eKanL6jebg4sFmyGmtTmc4uh9nCp3ENEtRgsnBbrqLg6nHR3eZcQL5SjKPq59r3pDkfH",
  "key31": "3PWzeCJpeCnrGwbTLKS2EGzqEZoR5ipSTE6EAwihYopsji5FzNDibHRXUpxNuVRoqorRCfiLHJHoQkcEgzrJDTJj",
  "key32": "25p5eCRoYvN8z1aYLJKVckxCkWFziRTrC5KbLqvyduXQqtoby8TDsowxVrZ8NzehvntvPckf6YYwanhbyY7oxNuL",
  "key33": "3SeVPd1Tp5JW1LNhwvKGRMXJDL5rfi9wdGZxMjc4Gb1FfHaNTFw72gkqnD4L4sCUmKg25hkVeijqcSKyx5KzawzQ",
  "key34": "4pZbchUsNrpL3yxokoiw3ni2huYPHk5WddNCC6BrTgyecQKHSNuXB2AzvoLMtjhiNPokU1SgegrqwJ7344yLTPF1",
  "key35": "ribyxLjKuAqhtghJNtrDRRXJfv3QRgEUfS19sPeBQUL2tRoomfgbcze2rDEH659AyTJibhRquZZzBvZkDmH54ZM",
  "key36": "2nqq596NFWUnMbjE3g8ezFKiK4hgue7qPhLtNjWAMq1LeWdoG7Unj9fGE8bX9i1TQNimqpV2dnKbeNVSAfxhTF3J"
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
