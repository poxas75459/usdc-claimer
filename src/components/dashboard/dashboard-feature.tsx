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
    "2oX6APjAWDUuQmJvdGetMtVu2gQqfN3HtDDBsvxDq18sNxqmxtkwNP4cECUxKaWr5qQ1tfbk9fKp3CgBjuN9y2Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j3Xb8xSTazfmoc3FwGV6r39vh4Vg5kgREX65npzgqubE65KH35p9G237VpjQw2tsMn2H7HYQa81YGJ1bnJog2f2",
  "key1": "32niPseT6bKCL3oFdhkeS95ox4MUhT2AW11G58QtqwpAqzbpknB6ybovLoHvhoafArVa43ww6283jfYgRuSXRymo",
  "key2": "2pjBQsa1MUSdfG5SWxJQbLyKgGbgJRfUsHSFdXJzUxmYJBPeYmoCzcDoKQrvBKmHPznhH5ERyXr8vrK78SowLC9q",
  "key3": "5b98Q6SeUEtjoSxf194LEe1NT2CPrXnhoTvDzqzyZJYiBiWYYFvSevk4y7oybxE2iakWYSXxbayHGZkfFHBKibpn",
  "key4": "2paQpNocCcyhXEAbhnY6hNcxRzuTU5AVbS1ZHifYzTA7JDcqkJRKbPV3AXuc6rGkEDxRBqWkCVZFAJ9G9fAnciH2",
  "key5": "2YLj1CbQcWt8bDjL36i7DgEZ1f5zJsYm7xe28pZUfbuxNRikJVeW1TwSeTgqxudRExiXMtjtaXnyvjvZtV36ibXR",
  "key6": "6SdVfYvFoGKJVZXZuHMvtkYwiasrLazRHKnyMCt97MAzVJHY5A95iVzwYqPSchTHLewXpMuWjnPmZy6oo7A9Up9",
  "key7": "3FzbnKgB6C1X4niAvjxW2FkdzL5dmYcZgfLPstm2aUUkjeoc6siyrn2N9au56Ng9PV94ojNC8nUbbreXYL44bLgd",
  "key8": "3mQC627zxGG2p1Syq2dvMs8Ti4iw7N2cqGevLo7mKK8i8Ep78V4KRSP4gxVAMYTdveFP74KK3JvHdNQe7Pf5LvEw",
  "key9": "3ZCRcvEvvFb3zsPahfC2wFm81RkL6jKVYwk7tmSzKpisSLdB7EQjDLzVT1LbTasvnPwfJwbs6ceGJjhu8naqruEE",
  "key10": "2a6kKjuuZMG6Ynh63LL3kb35mDsnP5kWcHGhsLdExUbfjV3PrdDbKHu5hRZ4moeS1dCfo5L9eprBeSZk7UhBPQfg",
  "key11": "5fS21LdjbhBwSrUNHuci5VHaACenwdaDkwDYNzNmeqE5JqQBMVeE2foBwZVSMQzyiGJp1q7MF15NEPbyAiFXGD2E",
  "key12": "65m6CDUXDAuHMCCU6BhcAbophnzivN3Cu7BH8dfav51fXSdc42CEsygppK7Y3W6YgkFu7m8WjAvvwuxH7uqPdDSf",
  "key13": "5n7jvRCub26EqpfcUxjC3xmPZ7mzMBo6EkrG7DkJxA2EHyKFTw1jdXy51AVhWBzhornwQ5LoTLmq4zkT4fbFdFDZ",
  "key14": "44M99Su8GeuF3P7mj774jKHubyqaSKNPc6wDkWN65sQ5VkfJpzGhgT1VUa9e56SPXbh5drRo5oT1zvYhincG6iET",
  "key15": "3rG3wweXYMuaqt7Bpy17cMTqXcoiXFAV12xwiwz8G1Rx3kDkmUpRZrF2BLjcbGJb32nN7zwb2aXSFJt1GrgHJNBQ",
  "key16": "41JMDrcJH7yC1E2NTEw1vtxUVpzVyG4rY2m8nwq3Ee5X7f3ERtKXWabCNxWzCsbZncj9ANPZEGCan19cVdt5a8Bq",
  "key17": "4XLHH5fzcn3VCj9czgpJNxKpmDMmzwF2nUUQt1v2m9tuxtwWNBQziHa4TQrhKXRG6KWWpd9zeXdb6xMVxY1xfQJV",
  "key18": "4eqfyXG3sMuVys7htdCSjyDEgNf2ghkyUfqE9jKKLEss1ZgH6JV6sLc6yKxU3F1ENGk8RBCDWo6csLr7C1RuoNWn",
  "key19": "2554Y1ypnQv8gkkVKhkNj59AnpmjS9of7A65bVC5zwh9tYpp4gYynwRmuQAL8umkzqMV3Bv4W2EKRHKSjeo9tvaz",
  "key20": "55N9g35TUQUBXMdn1xV3eeHveY1uFxDTJJGvnoAVfcRCAc86YNTw9YNd7yT1x2fjwdaijAUz7nvkCqLmTyZ4FKzN",
  "key21": "5G3crCf8yePVyrFRaXtcDwvKjfyK5T72cqfaLd4hi4sufzJrwgm54TNkd25wRGibFs5fEYNLD4Z42qQXMD3e2pQ8",
  "key22": "7yPV7jNwyrkNd3esAosEUshteXsfdmjofxy5y5369VTcbWJFT4SmpLXAaQLBi9Q5FRmJPSzymvjEUA2apNDT8bu",
  "key23": "3Usaoy7jSaA47rmh9zFzF4RjMZbW9yr5t2oCo9zbMWV2923FTdeAmBND19vhYnsqPH42zEx7BDopdCMEnXPesCrV",
  "key24": "Zdud6di5aob73TFu9vPuAtFnaZbF1dhBWHBEbDv6zDoMWPesoLStGUFbo51vGQxYDojNydss611KcUKkrfn6Mnx",
  "key25": "42i6HZq1FYE6iGvxpijjDEXaQA3NGd1afs73HuPsioVmCpAQ2nSGeQ4purcbrPFxuDZxbEVMqM98QqiShDbdPm5o",
  "key26": "4jGN5d4AXtD6QLsUojeeocw5QEDHxFravpD2m5auYg7pr5rtgXw7kzEdrHacJajXw3jZpuGg6PHrnWkFfRr3SV1E",
  "key27": "3VLcahwP3yQhsRHhLeihYSJC2h2KjoGjYKRjkAn3csBerJ3TbFz76H4iABxBGwgAatrotv2tvRqJy8xPUcBp5nvq",
  "key28": "S5paPPsNDw5JXaNdb9pfkMKrpYEVmV4P16zu94qdvrRXnwf3xZjHxBgBk22Wu2BFBDXPGDy2dby73mGrsyCUqRP",
  "key29": "2iJa7E1voXhrMqohoUey4UhLQWXULpypi7nCYcZZbAwM9AFEpRQYuFbCCkQsRKvb289eQ576c9C8SycxutJP4Y5q",
  "key30": "hsF3qg87PoSSKSoksfAgQ2cjLN3KoRuC8r3QDeY2ZoPAoA3hDFV7KbZArJEWcJqpmvJnnC48jDUdyN3r55P9s5C",
  "key31": "5m8L89gkugztWnfhA3AMfdSbEzGFDEAtMUWnW1tWgU2R9RKTPRDECxSQHBQc7ocyL7EZrQEqq5MP5ViX93b6xjiZ",
  "key32": "2xqHZy3jjLJ17DHoEQ2EdwfioHHbYBCFUaYH9uRyhSMcf1nyusRypjaAUdNDhvQ9FeBfmkk8tvagEiGz98fHYuZQ",
  "key33": "ZwLvTdziXMErFLkUztr6GkTEuqzzXTgo5d1pYgS5RVnK4c7wndFFTqKMRf7zyjyjRQvbfQHhwqMw42vtPyzCKtK"
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
