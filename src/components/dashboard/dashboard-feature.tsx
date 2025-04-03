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
    "5M7NsUhhtt2nNYqc2H6WXsoVJPiygwmXPmPPu4ALFBDqFUSighgtCK1Xg4qaqDBYMX9bi5tVX8VnJqWBcwSiFPhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7be1JUcK1VFSDMHruFkrJwqebSEJa6YEbiS6eC29A2ygJfQsuzCHx8ugL4P2XDjVL2dyBCFmHhVsxLAk7ASfWV",
  "key1": "KD2TSmihBWKbV3hoNhTEBztEYJkhMbkqgbV4hfzM9DydE1kiSWojBoaUhLdUTChTE46Kmfv7gKgReEcpGGXypxg",
  "key2": "5MAKqkkJ9eKw9Pmg6EuVfSedCwfDHfrxcLXvFxYosbFPzce7fyEanak9PGxnhK9ZQKktxtEx7fe9y6wMtPL3Q4mP",
  "key3": "5Nq1psTPGHX7exSJgkXyK2xAXAtLmjRBZcwdqDsHqSkBczACPt2NB2fdHPVFSQWNN4bu8W3iXebQ6HzAc93Js1xw",
  "key4": "5B1ozZAn4tkod5fXifzMJrpAC31mvn2MaRJmRvbMeD3dky2LGtiTsgqW5EXYf3VgtGfEahr6VPStvKXyagHsJbna",
  "key5": "5mNYqrJq5BzfAuHPfAasAi3pBajzeWb9C3v3WE5dSQWZzLgSYQRmHqphC4qZHgScjpFit13QR1dzRC8AgteKU5f1",
  "key6": "58WYLyTxRFFqFRMh2edk6GzEP6vBUNqwdrEr2RZRhKpHjRRuXksYLPDZZfQJkrCxN6wTHtJUhXxZ2TZYugu85BTg",
  "key7": "5zo5BMnJhcECzXSLcMjLPgpK1j5Qmh9vmgVz8XjGtd71BvApA6uYSTVBG5dX3UZag5pL1GaquySpD568JMgiLXNy",
  "key8": "5C3GEZP3aQzU1QaE5zcbhPCSqViCyBpzQ6nJ78aZcEAmodrdk3mpRh6v1VctyoCczqF64nKa9z5xcJvMxDxkRXk3",
  "key9": "2fRvWaaVFxEye8JNmaKbvWnV9FZEyG8HX2Dbb2spFK5bmaHWLmkJDQDt6aLPxTwcAJu7iEUrmhALiNhDWNYyqync",
  "key10": "2f27XrqW2Ze5MF2HT1GxiGFCcu2EjD67WupNC4LtnQx9Sk1jTrV3diABCtug4bdCZ1CPRWN5BSVqLzU1HAYZUeSN",
  "key11": "2ZafniA8bijwoeFjiNM4kVWYRQmNg1gXxEzo9uVaNYGviB4LPYeK9wHskBchGf1Pde2nESNtQLoiFD2AvYjrfmgn",
  "key12": "2VbtAXfQiUhXktoHuMZjYRC5SyvQA79G2iYy8951uga7HA9PbVWRxKE4tgubCTTwszyyE7fPVRgVzSZdBWcrZFjE",
  "key13": "2udABQFsMEKJdHUxViJhmFhpCsuBQ6UuXqAaLtjvCznJjkqzbTdiZnV11Vsrz1JRRuKo52cXAxnCodFLhA86TR1g",
  "key14": "4mNtmJvkF3XQ4oPW3KDcb8NVTg5ivQKpeWqDaqfmsfFZETTRiaZeruEfHBpaS9khYTjNpmdmwxjEWeqEdbpQZAur",
  "key15": "3jr1F8XoSb3tfK2vf6qhWqzySCEAQW7u8A2gqjy8UhXh8GmphfXmx4mbMCdsQHGM7wS3rWR9KhktekccucMboeoj",
  "key16": "2GySbPhgTRa99gWdk82UyJ9Y7mTH9usTQLsnu79socAM5fMzTyq9pyZeVHEr9FN5rLWbKjXBaBrJDETGuzEqVuq2",
  "key17": "MsDm7MrevNKVmngY79o56TvJp63Sj2fr2EzpDruo49m17dcKtRQpPsynRGwi2n43v2QQiv1QGVqDvzhDi8c9wAF",
  "key18": "AtAeYSe9cf738xLswGmfaJgVZNoFBVCFAz9xVLfmFtKkQc9ebDGfzYUe3cFvEaMiCw1zSAGegk6YkerATojZ2bM",
  "key19": "rZCp8Lzic8PXSbAJyiDVZeFXTtQqVHyPd5WeZJm1kP62v6oBT239Ja6Mwuj9rH4P9hJqmSy1PcRH5Xr2KGNPFbJ",
  "key20": "2TeyWpG4Rut2DRh7saxYqbq4BvygrxNPNtSH53rjRy5iG7MS9AjNSg1GtiVp7bfPV4hZMfMB5Rte9NfJCjeakSkH",
  "key21": "2BUj87XDhegjKbzpV5iQFebbpJ1DunnWbhDoM9q4dECjdzVpm4pVXCP3TfJjWddxQtivSRFD425XyFqT8AEjR9mY",
  "key22": "4XpRPHN7ipJXLUkqUqv9scJcPWk9WXk62SV5gNMjxY1uo9Ndm9JnQuvXasGueCarjqCFkmN92pjBQxZuX9LjpajU",
  "key23": "2VrF52wmvVYbRCPHFsanFfWqjxKhjncuTLYkBm1q5tvUeY58YQezdPbsU87MWgPPCMSyW22MjQZp3JvyzBCPqM2b",
  "key24": "5e62TsYxqeaHijPTUGQfFuFXBa5LZPr1RRjXv2CABGYXFn3sihJFxitcUnz2qpodFdV8jVvty1Z4Pza7rzNMvtqW",
  "key25": "5i3A5oF7JDmUVY1W3yaAreHAyvfjxFatuZKjqYuadevYzuc6F26miDLdtvWNBJXomBXTueoYpQw9vrvYqHavi5Gj",
  "key26": "3MrBd7pws5auTP7t5em9aFBD2z8CdAW6wTbRu5BWN1s9cYVpDSXPvTBjrET7zqVjUWYaEpCU6tsn7upKapcE1cwP",
  "key27": "3gy66t6sovPLz89WBzXz7KRqHJRQs7XdBVXHwjVAWQbnzT85BJnXN57a2H8Ev69Yc8Mipwq8kxsFjxqyCCJDer6s",
  "key28": "3Cj7Z6ujAsAQAHLRJCd5CaqTBbLt5vba6igz841QhuBvhZqxLeEhCpE7uHWP2xKgXfNnTKxqiuYogxH2q7WTSFar",
  "key29": "P2waFWdbZu73MC2pVRUsNMGDx1gN4qvcFRDzSgCsCS9RFDQPUeZS91Y5U6sZVx8yJ28WeKgAxdJrZZypXBqZ58a",
  "key30": "3ekdQ54AXtKVGj4VJMY6iTz7fhP6Z6LVxWvXzyzCW6fezRPYcSmh7bpzuGDJAuD6v41rDuBDEMBuK1CFTsvAVD7r"
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
