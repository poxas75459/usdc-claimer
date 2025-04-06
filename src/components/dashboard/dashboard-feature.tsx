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
    "33f9MKskQa58PusTgvLWN9A4tPSYRb14VLMu8vShVuEfphqDcRjgppGbJa3bak7qqZoyfXu9Yz9v3VwrJCg6nWeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RxvGaj6s4619NhLK3xYPZN4dE2BXKRQtiaUd1yBSyeeejSTK5oi1F2jYEJH32UAEGF8WNUQhZs14RqH9F4BfuMt",
  "key1": "4X4og7LVcj8TnQGeCNF6Ju6XT4sEKAm3maCUXchVsD1g1SkUuBfnxsYJ83fVcNb1JbQPotQn73KLnrLLHzvgoq8F",
  "key2": "4fQEzoG6LyfAijFDoxbEaUvTnZVE89GoPj9rNWfq1A17bbkSTYZzPmpyCocHtEYqtUwr6cRs55nnW9VNeqHBKY1f",
  "key3": "2ufG3sVEAASUot1VdcmG2c72AdQubMJLf5vaFdJZNpZhVWUdMhvcWPtxK5gopXRz32gnVe4t935ZcqQ61JatjeWM",
  "key4": "2VJUNSfjnY93fMYRJw7ZYX124Vb98dTUZ9A9RfrEmBQnv1eVEGTkSWkZCmn3DoWusYGgux2Q6aq3X6X3sWx4uqbs",
  "key5": "4szzgf2iQSFPhhu2Y3ebQ1FSsboXCVBAibdGsHohza1iK8wcZFuX82YexE4H77q37UfeYS3R9VFr8tDzdhAWwjAo",
  "key6": "5PGHsjfDQVp8by4adT7fFrZSB4FtX18XRjvuxeFQ3E7Vb429196SfKSuStAJcDoSnGsid7LvdRo5mnM43mUKGo4Y",
  "key7": "2iqwoGW8qi5FxpWqzNbVcxESQTyykx1fyphWTtmbHtsqfXjT3iXvwpQdSoZTBTKzQUz7pqvEzZFiHQA8hU7UDAsb",
  "key8": "3zu4QPRccUAEJZN2CnXetva1RsSPqUArt9DkCUv3tNBaUvQkSU8nBEiQtkNAxBSuMGG9dasnMGYFByWupWtUsVAi",
  "key9": "2A9u6cTLUqWYNnWx4AkPKkMsrrSx8RCsR5owjC9Tfszum9q1Mq6iPNg81U5jtpq7ePzjxL8i3A9iAuSe4t18M5xt",
  "key10": "4REq1ypXCqvWfQMCmunn7HweMCbAqkGnUi6KbfBMTq1mpRkg6yi6k5aeR3ayboQUNcmEjTKPJDzGiYeVc3KpZxDA",
  "key11": "Ej3CWh1fB8AYf8gcbwPUXMQWRUiXfXuFidwLVJxWbshN7tMuukmxHCmp6B2ZXcrBH3Z99bEP8cfDhgrLX2DGwoh",
  "key12": "4T54oeB8oWvmJwPtsLTZCFLV2F9fgqHE341Td5AGzmZpNQM7TuDk5aQ36dvHTYuwehR7rh1j2ZM9FttdBRN65rFF",
  "key13": "36RPnNcskF8gKYxZiynuUN2cgyfqGTYSbYfXbG57cwYGur1p9UcvAN9yLP1gncuGiJV5c8EzWPRj3umVM1M3KfCu",
  "key14": "5Gm8LRuh1FUNZBBgxbjsE3ffcm7wcchAo7BCCWyvMVvamusrkfzuZEGwNMxcRDwkGTUjQciDXXMmHsAtaVTnhoNW",
  "key15": "3iNtb2wRGXrU9BMTBENKnQSuAcQ66BnSBERUTVrFVXzyaxQgznsYqcfUBXdDjujb9g4D5ehAERF9YZV6D2AVG7pw",
  "key16": "3CxKafRFXoUYvidXiBNMws579RTtj8AVAzDYkZ67zUHyFojAMXg2vivE2JigKUrN4MWPCmoBAVsSdeDnrjKbUMG5",
  "key17": "5smmzA6g1k7hZRc7czHVSbno5D6DMHYib9ixzMtAZfvqh9fZLqfmttr3aikkT3ym7rf3ffgfHmjtVU7noGX8HkFT",
  "key18": "cfSttzw7imTnMEyo77XsCbBHENR7hAGnipt2gDcGdYo3P44hkxKfNuuMR9fbDh8KBwv1vTyjYza1XSsSRATx1qN",
  "key19": "5hTRuKWHdodZxtnR4v48qujbpAspPGzyPKiZ7RESBFKHkggcyRCbRiVgse2UyBqd4B3PuhxfL6szxi7mGrUthwpQ",
  "key20": "59f8CQNw9vJJukx6ef56gLB5ta3iby9KyUUzGj2kA2aeDSNJw9k96LSbuBmoKYv9Das28v1YD6CNxcEo5rUjidCc",
  "key21": "xCpwFuJcTQecvAjAcxwXEdTFFyont9HkAPFDmGRy8vedy8PhfKZePdvQZhCEDeQ16EhRFsniEcvGshktdwk46rR",
  "key22": "5zfpVvb3xqq7nzMNFJX1iuK6FrmfDEkQAAQYSchXfKLnpHDGn9KB2Ebg2cmhh8KSkEkojaaAkzKsPf2JXg8HKPQ6",
  "key23": "4tUEqwF6jvPGQewRBRNuxBqdzzBGKAy8jnFMtVX9BCa65kqxFWVFwopqqybccUEJgAZv6wCZ2r1xFjD6GvJTTRa8",
  "key24": "4aghWq3X13J8wKcycYxSti86GvbmutQm4jNY2DvBNMYhgTwNcVrbYpXobk8VP5bA2vyEohpJa1kYAGwhDwhic8UA",
  "key25": "5L1Rp7mzaQEbKXFuK2WJ2QTxqVDwPxaRidKhXanJa9GAwKdGAb6fYLxLZwA8RArQJPUn2WiV5BP6pfUke5Q4e8Qa",
  "key26": "3LSNDhS1QcdGgPyT3rZfkW2imw7Rg1Zx2trj6F6FoAEwH8nGt7AVXDbRseqDzQnrhHeEZ525YjPsFMeYeV35jWZ5",
  "key27": "5r7VYgXsagjqaPXK8rRJ8tJXYm1N7nUCu6Tco4T5L1YWkzvH9o5D28yxgErmu11HUU6TvR78s53neqWj8HZ7gbbn",
  "key28": "N1dhc2PoCKV62U1wqu1CZssduqySaYb8KMUzNcG5nSENJerhNbG4vv59GkPXWvxEdYagf98GxZNioxurdCZxpVp",
  "key29": "66iS6Dg1cSHEMaftNHEYTDz3BtXx6H5BZ5BLmFSuqjHf6zbSHDvBFzUNDv8ZLZZ2fpmWePBQQaczMq75mWwgXKbA",
  "key30": "4Y5cenJUpHca3v9hqTECj2maSMyDEk6eDtynEXnkNYRYUR8XCcDLvL5rLPNtR5N8tVGtbGJkrGfk38qSBH31N4qz",
  "key31": "kWaRzhnGxE4bRth6pRcMMKLdxbYeYgcEjraDMDs8JTYShmjfFnQ786q5oDYyYMgsEYE4aJPBgJCVKjndudis58H",
  "key32": "ycsbkXjo2DxypbNsw8fTo2hUMaEEa2HR7JqJTpCQM3mWQftmhfsaQVPGKbaarerdpNuJp9r9FW5aFRehewZGb6C",
  "key33": "4N5G4PsRybRk5MyV7WHGA8oaQYryBEAniDqRTpJxizXnPf9JeyQyT5k7GdhWc22gAvE3vF5tPREeSeLA6DNpZT6j",
  "key34": "ZHMW8eU8ZgugdMX844pBtSEdNcLCrAG4fWuvJQFqstXPYgpYgyMAscofPQdPiBtV24oJ8MEwEvVq39M437WkM83",
  "key35": "33trLBnfkfEAbgATz68JR3DLw3uh6sTHNya7Z3Cwo5Rnj4hf7KBVcEMzKnJ1sT4DMchSbtDADAiZJu3rnkY5x897",
  "key36": "GK4k4rrLHVkE3DzoSH6nU4YXy12zfwcwjgfnP3UcR9CfFZu4eQyyQnvyazN7iECzo5WiGY2HPkBqHoVNSaZ6vxu"
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
