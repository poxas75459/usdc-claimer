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
    "4cjKW5z6fxhnBkYmKgpz4onrNbXZc9DR2PucxUD9fx9y8o6eQkLowB2akQWNJoU8uVg6JCa8LdiLcPwqzJqyq8CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAdiedqVo9G2kYBpboF5bDBNzoCP2ZnbcEY3GhbRKFKB1RYShub8bouZQvYPHsG2S3Pbuq186SmMNR9TwJCrN3u",
  "key1": "5N9BQsvywNyhDtTbJL9EEyYQwiRbBrYeMrPotyarTihPm7b3bPD1r3RdCneguzCJwtQCWpDA5y5TzwzCPTfkE4tR",
  "key2": "4JxtqKpjAfKZ2jjMFxf6Rti2NDb4H7MhCLyGT1aukHynboNUzfNzjpdm73dt6Gg6t9kguHpxvpXKRyubPH9VcKXn",
  "key3": "jmQdnmPpMnqwmB51VgJFaugS3hhagDgSdaqLG2Y6G7oKyMVacS53V5kM9tG77i5mFmX2bCDT9HpzrPBWU7XffXr",
  "key4": "ySuwzJMtkTJ731KJ74LkEiVV6wbGPxdS8bmbcG37Qz28h5qE5L6GzMQyH2AHTtzYBV896o4XN1w74TLYPRkUa2T",
  "key5": "2BfbufenFKzCjhVm1f7fD1WDHp9QkWLX5EjXHHkQWmqYJdUV2EbbsScdRdfw7uGVj9Di1ygdmczYqtLGqEybRCJp",
  "key6": "qSdmKDYiH66S7U8Gv5DFe1MXMYmPAxDwmDbaFPpxf3JqUELCDSS1xmXeqvVTNEAH57vGa9dcvndmVgmDRAR1Huw",
  "key7": "4fU6Y2tggC4FdtUkmeHyNReozbifknsiiz19kQNBft29anf3vthf2x18y6kpjFMqdjz6iqBzU1P9LiysAJAhXyQF",
  "key8": "2qz7D868pFYTb9TMwyWrDFY5qkvSjT9CTcafChDMYaoYsM2KN8Qb9XSFUpYdbtad5zmZ88jzEYUMhNM6U2F4JDKZ",
  "key9": "4RQ8y5dvNPdugCf8LJTP9h9h2H596JAQf7VNguyAuiUw3gaKRgzqAJv5M3UDUrjEq8m2PqMoAjLbHXAhs3z5bBUd",
  "key10": "FkB4Ht39fwT2WrwuaTbXaQK6dsNmDa6x7VZm1Feh7aTChnNTrha5MrN79mQu5JHVQT6SJzMdG4tV7CXNqiwjoux",
  "key11": "3w7pZQ66MmWBzThQF332aD1RQkT2s5ABJQwwadeJFhwPft3UXBPkv6XSXn4DrBz4yi9MRcNJkDBmSuT8joUAMAaq",
  "key12": "5mJWdELyagZMqXMe3BzHGNvizWGNR47uu7uaz9K4tUZi61mh3BRSoWf8zcsgNjYo3cymu1ivgs9fKwE47r8neqYs",
  "key13": "MMgArC1XjNhTVooXYphFSZ7RP3erBEVWns1cAVmQgBuSUHi1QTe2C1ybBdVtnRcYuYUgAFtkyyBicTpNpT6G9v7",
  "key14": "HcvAztsojxZymCtT1qukXKnfSmk2HuLXUoU6ssMLK53H3hPnXHrb5vR5qv2NTuokGY7t8uAMPo6GvWKYsa9stk2",
  "key15": "EvssW8FoLHR5ZuvM1KVDxr2gANqHP3PkXPyqadsQ2NrghUZjsbq6BEKh1wLyq1ASdd51cNh5gsoDLGJHU2gnexR",
  "key16": "3GCefPR6KjYPp6cMEErBs7Md53bkPDec4mscaHvU5cMd3m2xkbxwzU93DrVtjkvxXMk1cPUuHbfv2PbVKgG8jeuF",
  "key17": "ZZGhMBSbcQGgwWECLp2UhWT6qgRcMo35rPnwc1kgNhgNuHRBsBHiBSrTPvFXXqLko44boEMghY2RqREZipYrQD3",
  "key18": "4BkYuJY3LLsjZomPVbiuXoHazm8hFyby6J7sG1TW2gPhtDGanrMTndDS9cNL8pcFUxvPzxkMkQjiqmGV89hrTvQr",
  "key19": "57Qg7vCKMovgh4z1sD3xiYNgFEKB31vk1N4Qw1hgjK8jD3DVPKgqJcS67WNH1P4TqwFjmjkCf2NCxSPD4vyaocX3",
  "key20": "382UmyoX1E46s96Pd55zTNspns5d9tJAYHCoQJJkzVmjeYq29fBGj8QNzEzbJFfsB1N3atVyrboBG5LnZtk1voXY",
  "key21": "5zPhbE24dgdpwRX8vi6Eaej1rorzxtCJ5muHLaiUhzGvGZbMtj28CW1CrnK5pY7yc3SEfkWGQZeSSxTesn7nTFnE",
  "key22": "5UU6E1cQzvUjfeUb4VSgbNtHFhCLsbFmU56fiQh8sMiND3GXtyNgYbe9XekmfyZXNKhd4PjNT4w7XP74wE2YaFUb",
  "key23": "2G7ZChRomnmewSpyp58Ziq5fayLemYgKEVYKus2PHUYYnpgNzYvBxTkJNNsMT5b88NpMovkKRAe3RrFRV7wdVphH",
  "key24": "4YpmMjUgNmxqu49MHUXMSXMZEiEBh2ZgYqHRXXRDBTUpyLkBUCp9cAvprG5jhW8SbuuhMwTiRdMw3faQivoKGK8E",
  "key25": "23WHjw4DbdYnXxDN9pZnEVZhTQERQRkaK4Tym8ok2oVSyi3fkkJXRP8r8vgk7iteuwcf9Ebxp2btwgZRBVqdhLWW",
  "key26": "5WJMMwHUMq8LoGVj4Co1WFLSqXpy2JqBxv9R8pku2XjAiWnEca9LpQoyiyVhce4tszqtrtzp4fB7s9dWuSdgLgU2",
  "key27": "2f89G3GmtadJgU2crxCnoozJCcKbqKvf9jxGoRoetSAk62WmiQ6fhj4TtRcR3eRj4aCLH82zmPcTD7u97vELb8os",
  "key28": "2XxuVdvW9nJWKJezEkGExgzAzJe2PPGj27WWoKpba3VzxTK4ZAU4jh71BwttRZUK2uBuZ4xRuYGW7cnV9w4xsPxD",
  "key29": "St6eSCNCTAkcswN8wG8QQCRuXjjEVYLR1PrA2ooCTycmzu8LrtMsMsJgEBMbxzADHaJEcmeDcTUPvWzQ4WcTkbC",
  "key30": "3snHCkC7m9utafEfAvAV1Ud4AK2JwP1haJfWuvozzPPAXkyHfyGugEVigXWAmCZSgnSztYTn2X8Uzg2N9tQhnZCT",
  "key31": "5Tw66zhby1ccS18MofmQsHgmvc5g2YTDHbQL9Hmk8gS6f51613RApmViYFz7GaszPh7Sk2oYN6dR9xkEANnCFdiX",
  "key32": "4fFrPFtAnPU846WchqAV9RALWZzmUqMcxE4ezSVWKjup8guWNpt4TQaRn8BukraLZ7XGfSmGKFhMv1RvLNnC6Bpo",
  "key33": "2J8xV1CJ2z3C7eJkdPkKpqM3VXDXWL3TzFtqJeQsoNSEgyPj9Vi1BBXEkKA1reRpQMm5uYJDLUWUXLjUcrGijZT2",
  "key34": "4Sy4JDn9Vdh1MdiALKpq1gESh7kYiGpzzAGnV7oVBwa1VEgm7EpeZyZu5ZeAraWusBMdaKfNT7saUAasfnSNZZUN",
  "key35": "3p3ToavyaK35pENEuJCFCQctpKMhRmBx9VBPY9jpnn69Zjgk1q8Rxa5UyP9UAd86DpVALqPmA3JToiCY8rYwfnyB",
  "key36": "4opdZmxXtm3FHjJKJyjx3SZPaRZQMR9TUyt55MSHjz3TarX69rD4MrsVjEMHZqBsJzPbSyqwQRMBdib9BrkPBEVp",
  "key37": "4SBzK2rFiZSeZMQvT3tSgUFzAWmbMFdPRFSyaVHCcPra1xuacV5gXc3uA4KGZ558AZ5YdUBt17QN2xcdNAsRcAiz"
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
