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
    "y184oYeqVQsbuke1H7hpMQDh72Yr6MMYCES4NqqATg523warXFa3ctAf1UyMYqCEoiLAEAXeYUu3dzGadsa8SUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XejAfJqvyfygVThwnfFiD47MkM6aySgn9HSHyQ3Bs4yh1DqzcqttXhHdJ8en5KsJ8hEJ44U9dg7ChenXiQoP2UU",
  "key1": "sAFaHuC9CXprWyD7E1HUFnV1gksbT8SBrDQDTEt1hnAFcJHXeiqS5CoNswgD8k5umYgWGcVdGpDqbb9wnCLsw8Z",
  "key2": "2xnkjBHgDbX4tLbbfgRugAwXbRmDDhncFxR5ENdHyoL1MKJ3bXuwkc9A9GtaizBCw2mUthYb5Ma9WfWue4FgWqYt",
  "key3": "4xX9kGa9JEY999q1ptonTG4GfTraMHV3JkXShEiweoR9c1CrWU4DUwB9rfXB1uYbobtgSoH8SFQxQNWPAZop4hR4",
  "key4": "5SjHGyzCYHnmFj9FhJ7xXAZ73FoziQMXE5fmtAuWg2wktnsamfyJsG6YNYkoZUAAda1SiELrQE6MwE7tZv2Xj66f",
  "key5": "3jcu1gLsddXFJYC7WGdmGwH8G23dKKKqtc6F6yJfVXH5QXtBRwegRgiPgjagHgHnRx3s2jRm9kr3rJosq8pexZuL",
  "key6": "3GS6gkhP73hz3eLszJmxPMprMK2qB3caZNU23n4bf5BtDc5HevuJXi5WXF9HNdt9JRD4appQZ6qzF5ydD9RDbxo5",
  "key7": "trYLaXkyEW8wiNKdnrtKaJCfegKDACaiL4ZX9Jmo6JRcSFV47kMV42tG6FKP1BpvdMT1TQ3v4jrYfStwJG2MDzZ",
  "key8": "2r3yDed7XoghBmxeAA9xSfmVi9vA9UFZBz9qEU6LwjTkYqRiGBY8FSrakAt8uNF3ZdyZUo2UAWxVLvb4LhFyhNzS",
  "key9": "ZEH7g4NC9Tp31UZVi6mgFb47Tq31TYnpPWgqAckzgecfakMMZ4HcxHKQWRZsvHTG81WVQXmxZud6QDhVSDjTkog",
  "key10": "5ABwFT1VckgLpKwsjgshspuS2NDrswmiWGWcCGiYSwbj1r9Y5Lt1BHHeUC5m5RQCCm56HGV5qru7Jmq26rGFBCdo",
  "key11": "TtX6KAUJTJZDa7EamCBURsFPYbZ9tpPRSmwNzVUcyNyLvC7vWL68YtakfELxEyLN2gkLGPNru9PYbc8wsVj8YT4",
  "key12": "5nrB8r8H9c8a8FD5uWLV4BrPFYPvj3rCk6kk3TzrEKTEUQW8ao9WiosqVH9qQeC5BkaszN14SKzeTXqcrBdMUJbM",
  "key13": "L2PF3DuFsVNURMSuv6ZuyUEGTpw1Hc312cwbbwmY2oScU5jto3JrMhTTZrP3PmCrUNNa8xDnYBZywuNBJhVSgqm",
  "key14": "41iQHUJ7RQxhtmU35P7LjMdEV72suLciCwwTEFGFduscMSziA58pZJmeqNXrsnuf5Kc3rwPRtywhgchURTeMJZMY",
  "key15": "29G4quq8TeTa4wbCu2o8F8L2SaxunponJPhSdgvovpga4Zrz6xY8SFkDVQ2TX4QydihiCVnsLjGYFtYEFQUZj7cS",
  "key16": "2nq6Nbi1XJoTpf8BFgkGSot5idcRQofupRs3QAEPSwRXMswTEweiq5c3wQHo33Svx3YAetBdY5PoUzVRpQcPEWRG",
  "key17": "3ehWjGHM1tdESBLEqp9xr6rX2xYC3LQq3CVgQcdDXqV11xpAVdW9snJY7FdJ2D9vzEjD4aPcjuLBvCmsw64QLuBq",
  "key18": "3FZwM29eR1nF9BsehhF4aKgApZKMRfB6Jhx6aRwEs21zHHrQDLV8SLnR5aK5ryjRX6E76CusC3LLxLM4QDPhFk8t",
  "key19": "2ts6YZ81mPPKaeQVt4k9irPgGN4WNuZv46yJDenFUPvUxd5X5zK8dYUrFbVCpsKbngeX77ux2Ujci8qhjLc3bpT6",
  "key20": "cFgGfqAGobVBuGcvPmPBsFs8BpVJp3XPtxt3DGqZpBKcwMtriTA1LXTyH6Y4HYHYBewnPyiXuZfvY124b3LP4Wp",
  "key21": "64depdT5xSX1QfBEhsE5r2nLs1sxahZVFosXtyPz4T8dc1hZ3ogkqaCQ1if2AB9CEsU4WjsMWVYhsTiZjMcStWvj",
  "key22": "2Tc61tt2Hsv5GGhHgJkYx3fYoFHbReWQ9YzBAgmq8s6sXQ4YgPCLmuLAtcfcJZ8TSNkgv7SThkhYNS4ipCek9tDr",
  "key23": "337Vnnp7qveeahrXNhRozeW6C7QJosSpavzExJGzVmZP97McGY5528Yba47RpVFjytcygyxnRrVj2VZMUXVFVmKE",
  "key24": "2sZBTJS8h72hgkueQjSaoC5dTcBKcMCLp3pWfhagtpMJwyUd11gccuajGaK5WhuAK5Ya7vFMM61VA8qzEP3rXSh3",
  "key25": "2FBZ3mWRGTRq5hB5k3h5gEiTHbgkchL4gvieafPcJV9p8Es53ZisQtDbywKbbc6PGmVm2xFtn3XC9GbEs1a5trcX",
  "key26": "67rWbTvXxFsRoYF9sD53YLN6rWW7KJk5CbvUj4CYbTLbr2qvknsjzZtxc7rg2Tw3ZY3iKuPSSxbd1gs9ceACKhD6",
  "key27": "5VLM3Uo7zYmoketXq3qz7A3iTsW8Ep3fy958saHfC4zFMoxcXtUzN53Ct4ZAGPSsrA9JYmcq3mgG9ggJf2CrX7R8",
  "key28": "5PUyUUfimcgubf7YGuhtcKrCGhK24u9X6CYzbJ8runaCTUFrGEN2XhsCgQdjBeDWqZBErWSpSkg1ordeW7WR7cEt",
  "key29": "5NDHqXWfWVGQQ3QtMmvzoHCBVNrFzJaT6JGhZYX1yTxGUfRggP3L1TQGMt6ypzsfsXocuAgos7xa4wixh34rKhrY",
  "key30": "5JZmAfpv93zSViyUYfUtrt5SpaasotgqhUWUfabL6Q6j1HsaW4GbhfPgYFVcw2LZDmGm8Wi2odDkxqvbeKHSdSGn",
  "key31": "cAxhJ65ZtjWZ1wf8ns2GM16KdTwzKFFkUVkQ57b6MeBMhCDhcLhYxwgTE8dFP23Cdue6kcWyPT5ZtzD8uTYKScZ",
  "key32": "8RmcbToMA1o8MSR3bGaNiWEdKvhsjTZGW3R4UqwVhGDbgN4Lh61xa1tN6zLWhyb2nFGjnGYvVFGk4dg2b5JvsrM",
  "key33": "4ozFavmSnM5agedFXpcGu5nMVwYstPFh7xyfhXvihNcNfZQ6ThT3CkBFGt1Bd7URDZxjwnHnmp4x1VhU3FgDVTDu",
  "key34": "2KYGEqeXKFeYbyRjE4K6ZJGLGzgic94Mgso1sGwHKynDj5FsstJ3k2B1jZ6SwNQekG2U2zHRSMNwDMk6653giUNx",
  "key35": "44rZS3W38HKQqDKU39bbc72W9UkTuxrH6nu5MK3v96r5J2joaRNGNJafzt1oMzpptCHFajJHxcsztT8GUExgKsyX",
  "key36": "4jAENb7wiGyxam6wqRpMC4Q2TVcnwSVBgSZAZtWjMa7KnCbRiEdDMydfmhPkjf6tmRTSzwnUwErX5QuU44DnE69g",
  "key37": "2jzEe1KVWnnY1RLEzvARqAcsr9Mwxa8LWzyQh3E1BeLdUqjkruFE2xXBMM6sxUrvSEGm7HQ2taY44TH77KAo2Vct",
  "key38": "39AhbVArRb9XtifacWozXRAPfFYuSvwuzNxe48eLQAGhd5m6ay5WAvRmpCt5PYtdteV2AKiFsoPtxUsJEYrQJPQt",
  "key39": "miNjY88XQxqMpan6STQU5AFgzQewKzLNSz4aGy3cBEkx8si5FXRBd5HGj6XCzQ4Cp3veALtG2VSoJKUNhqaTQ4C",
  "key40": "keASWFvVRhDd1dqVQxGC9FmB3dsJDUtUejGgKifTJDg5rgH6kxSo5wPWUp2WbBrRufxZ6EuMvZtk5NEtfjzC1y4",
  "key41": "3ctnrcpZwP9wJh5D88w44B6N3NBLUJqbLcFw5NgxW8pUdqwrfqrj3xahdEMW8V2gp7tj5eZqEA1iD96WeeHXXD2R",
  "key42": "3RubXdCuneZBabQmmgjbeMhBnwg5BBcznRLKYNFbGLNi2KzhyZ3BrHRPjPBUbowozt6ch2qrJKokvcgHmrubtc2s"
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
