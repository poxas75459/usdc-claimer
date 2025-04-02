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
    "2yx9BNTjYZyc3MwvsaPK2HPpFVcrMX6gJynZzfsR6dgmbq46WHNgpxkKxG2SjT3zC3Y6arGf5EmkZAmNC7QmDGBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498y5npk5kyAsJpm9gzNPgADABKNs6FhmZkfGXWjUqdmS8gtFr5krJCGYP3tCwoQFyhPpyuwcRsT2Gj5Ee2triUX",
  "key1": "2jHMsaLujuLEqQ3Dk4VAxDcLZPrtJjM1TdGPNbCbnywQ8B99W9MZhrf97vLN6Kc9dcHNoJWcgSeiCmHnHeQy1PMB",
  "key2": "4CGms9U8L9tS6jvAMpVq1eFekvyYHaHA3XKE8jPGFZU32vqHrr3grNXMmkBSNLMu6zDmYa7jDetdYBdDWFtXUo5W",
  "key3": "2ByDxqCVob2fbaw3crJpLeuZ3n7NS1FLnss13oPEYq6JrbF5m7hUi5TwtAstyC6MBK7M4HLSCVirs6kNtx6uJ7QN",
  "key4": "2m6yopz6JTfiFyjWuuRaFUNaaHKAHierLBcm4rLJySdHMLKvgF5rvGapkL4LnN6mRXeqtFzFqhkXy4QoJZ5SSnwf",
  "key5": "b8h8qYrgqzdVo86xiuLNRiAyXT8PFLvvF7hy8JgbJuxeaitWt6q51BNMNHB7B4VgzzxqGQCLveQYZV3Jej4nABm",
  "key6": "2isW5sJTA8i944bz5nLhMhStugwRGV5GMX5JZKMQ7phsJkNMbJf2up5LE9SA3vMpzqLDUxzd5GTE2AcRy66nCN2P",
  "key7": "3b6mVfyie2ghhe7EXHeAPshSsq8WTAJGxADAjDZuS7VhNXey9xWV2w9tqoXSr9YcD7fTcpHsG4hSQzGR5qJoqMUk",
  "key8": "29yJmmco1mJ12xz81mixfAfkzN6p78hVQMdaEHB3Ln3SNwGUJEdiJ49VbCyyt7DYtR4hw291H8GEP42468MxfXra",
  "key9": "2XDiSnqkfcQLDH8znBDCbuqYXKZ1NXvE2YVH4YsoYrHn5GEhFETG5Q467ck1vp4ophnoZDW2WK6DbuyR3zxEuXJ8",
  "key10": "3tj6qNbvNdyXCxbmgVf9oZEUkBuFrTpKwDkAp69LmVt8hgRxa65hSRcuELWcPbiqm5cVi13BLwTnVwfcExbiDRhD",
  "key11": "4qpNEGewJXFYGNfRV8FrGy6VdwxyYnfmZpNU2MDaHbRHFWmUMwxrRAyunN4A6ryTwS5PQQt5YKEyLmxmd1Ch4JM6",
  "key12": "hQMZzEyH8wu5rzDuz6C5Lmy7gJvhybEyrgrkrc5KKCCAmxDEXWjedcTsUtnBTmrMrzJErwzqUiaigL7Bm9qnsF1",
  "key13": "3wMuGPQuFrXNeNg6a28bUxpytNX11pqUSkCmPAizXEn46qQqUmsqH5NdGMkXKep22MDqEfiF6fziAwcaYjkMxbSN",
  "key14": "5PkDjLbLzQ1FVR5V9iV32jKVttPbptGrUDF6bdGXNqdggtoCfVswjKCLjqovDuBwh8FG3Yrfxbkz6R3yQRSg2DS6",
  "key15": "5iKACnGW26RDGsTPTPxaSkNqbSGJSqgVkzatYrw9Gbku9oMcu3CdKQq388uWKfwB7xE2Wkd61KFncEb8JHTivsNR",
  "key16": "r7WbnXFvs4cJf5Zewg1zBbgDs32D5GFwoqFJjsGZn8amrpqTBxKeq9Ch6F4FfZddPxrFM3Rdqhr2ZxrC432ZLXE",
  "key17": "CYnXX9aaB2EGxgTzyVC9ctmbQcdZNDUWPFigxsmWNe4TpZeYLGtRcN42K6JZ4X75L3uWLSEADbZotoaP33AHDMT",
  "key18": "4BXfRNoL1pRyqRhXx2moHQVuFRMd3YHaVNHamHXRBLouvY2rAhAEMyLmcGqbFH77SJ1G4VgoAdShj5or7TrW2fH9",
  "key19": "rwsgDRXLewt7EVfL48fen25GZwqWzEEM81GRqMLx5wm28fJc7qSiKrPnhZefnaXNUW4RJ3BNcoom8dWzRw6N5HR",
  "key20": "27E19AcSpzb5pPESy9PGRFF2keZUR9FTaShDo3UBr4WCrjBmMczejBXPos22pri1hjc1yQCeMKMWvyDA1Njeyk3f",
  "key21": "vaYHvz3SVVZN4N2GTwv6eiQUY44F2JVF5rWa5KeSPWTH7fzPnD67pBB6WND2eKzELMNjgSDtwVzeMfWEGPNF9Le",
  "key22": "GCHzfjEXF5vbaTRQsi9gyrdnE16YpEUEfSxJ5x2pnjJZpWwkcL6WBy9SX4pfCQxC9XzdiSrsNii1MBdFUctVse4",
  "key23": "paEvJarm6bjRGiCfAHYffxWY5M1oE5MDEBuoQmhpmX6vnVRhcP43HdJFe9VGe5o2SaDYbJumUFsXeg4qx5tZY9t",
  "key24": "27Ldu6o6vpiZ3Q1K1DVVR9EYyMELPPrvjvvbbRfaKezaVYdMJytH7CaX9QbxKUwyCmsVo6QUdiJVt7P9bAeQQgEo",
  "key25": "496HStJvzEZZDvf3tdrQqxQ81zGPcvmerQbzomXsy8yfxVMFw1G9fzAjtgxfQMFNNzdbyLo1CiGnoGj9gJbSfTdS",
  "key26": "2vPpRcP8ZYEnxbDrkQPGCE4U3BT19fCDNuZUgZC8kULa4sPLm8bCaczfVZafeHipDV18aBL1YJ3gpxQVdws6RiFs",
  "key27": "4MqmZCyfLSk6VFyohGTkdjTrTnobNJnX4NxjbDeihAFia1ebYXo5imajZYk6NaDvYx16aGGDf4rv3b6znUFJ3gMh",
  "key28": "4NKq8CFrhSvHnULMzgbyeqCKorteeRD7rAJLfCsRWv1oMTBWXErDXKrxVr5MSW4sK5WnbsQm7UmhJEc3Kgez2UA7"
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
