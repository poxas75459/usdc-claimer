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
    "qZ3wBGKhWvCwsB8myfPMPFzuTEmvijN8hD3ZaBwVDxFQNEiJE4Lh8mM9etdwCszQYs6fabX4cakvrzXitQj3mDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U84TNvSqyjvUzoKBFmWq5Q5cJDaRwncrCbJkxDcqQr7PG6Dk6NJsKKQaSH7uWGcVUokEzeazk9F7YDJyKAbQZdf",
  "key1": "2E6UJg1274uxXzf5tumBLWLVGWRiNsuWvy3snCZSPbxwq2fZrvR4ntXsLAyoBDJw8M9deAQqwgbUZdnSuZYoaAH5",
  "key2": "651dMPxe6dpTEtRkR6fNcjRZDa3eGposCjvBcgPZLQQzuf19zhLiP7aEMrnoe9Y7e4ttke3FcXn6dHBKbd44vm4w",
  "key3": "2qg7odhN8HZ1YJYCneT3VM14wdJZNUMyetuC2GmwPfsLLm3r2tJTB9mtzp8t1rTWBEu9XWikVz8UuhPCm7HZQY4X",
  "key4": "5TerVW4gKnSuzaNzuhSZGipiEYgYyHHxJfbyQAY5oyejX4QZnofZjrDgb83PcBCiKnMxyDZyb6d6fbyY5TN6iSbd",
  "key5": "2azqmzsjXFBoJRNRG5BCxSpWdAB2Jsu4ZaBbWpPNPp73NGhw6i6RrnbhxHkQEjvD6peWQZUkgiB5Un2F2GSBsK1U",
  "key6": "4Nz8qN6bkDAfhDRPrsoj7PnXugChQ5XziEAMGsnaGDZ11NynvpBkHbPhTDnkn85fuGNzLatpMkyJgaKSenY37dp6",
  "key7": "4WRjQuB1HvjaC7zwideH5ANHz3RBa9EZVEHrJ8nEKRx5apDNt2Kjbs4WWRPfxLFTkAYa13akuU6iGv6idmLBUN4B",
  "key8": "8neW8EbBHk3yBfKdUfCU1XeBd47pM3CXmHEzyLxxVwFwaawBUvvF7K8eUKUHVtuNuXEEBN8c7oc7yT6kiHYgrDZ",
  "key9": "4umVbtbnAqFVbX13yz5JiTHubd2UNWdjgReMfWSy3ooZEcavTttRUQ7DJgS39L2EYpnUhPNBpr2hSfz6AGniSwFL",
  "key10": "4vhMbHd21W5qfHD3fqGnpaqeap3XHrHpvUnH7rj8k2GraNxQV6JrXnSLSkNCEayUfq9Tak8HRDoNNc7u99mU4B7S",
  "key11": "2KuYSUwptNdedi2FUrSZydPN9xqmxyDXxrsfuTmzBDQFBXLosJuMjZ1sxd9BwimATHyYbVhSVCjpn515L8xB7buh",
  "key12": "4paB92K19dv9dqyGXxsbQknid2DgYz5P4gadHHTuoNHRERq9bUVKzCj8yj2J6JrBLgt3N5hKdBkRwcDbZE7RnqVp",
  "key13": "4X7SL7nGzXrvteQAgFKpFtfB4zFYPiHJoZdMFSdLKavJYHuMHedgPJmVgDHsKcwV9WnipZXCPRpdM2Nug1k5CfGN",
  "key14": "2JvSQk26jWqkwP6SCzY4qJ1dXE7advd6e6UZ4ne7CdokbsrJNdKE1LY2PmSFrmAZdpxjpaiPH9H8o6PFskeb3NXg",
  "key15": "RZirm7Pw3d7Smbk1kYmG8tj2WM8NrP9cTqEaNnHp1Tb2VeyQKuJyaFcKcGPSLU7UathCnmgwvt3uJNAGJZbnYxq",
  "key16": "5rtmhg79jHJpCPcE27Ffsp8ggGCpAPM1kSyPA3APUA4q6B9LoypnCAGv8W1FxqzZ5jFjMZ43yr3b3d8iYdNEoG4T",
  "key17": "5MhG4heXni5qMRUoSKpJu9T7Z3nx2JrcpBWC124HPgqp5iHUfszMMmTDhAw6WUohtx6FVu3ZJwKjXPNpMyLKcnMg",
  "key18": "3K6TQ3biqQktGcLxRhaKaVj9Pjc2X7uAzKbd4LV78vWsfPCB4wNtkKGVgi58wwGUQW1i6KWZE4zYe6dfbLenYVbg",
  "key19": "2DP7Hp9sEhrGDokeRKSed9iBcdx2bgV84N4EUR49wLo5HYNXTGMrvi68Zy7vhwhwZDmtBJcARLq48E3PvARFG7VA",
  "key20": "4zhmkDYWbb2aksqE9ku2mY4d3SSogZu7ScCMZ2r9L5kiZHKFDPsoGBwea2b1TQGe8vQBNH4fSyK2gAv8mdeLeoDC",
  "key21": "Xea3kvimu49fEXWyrjQ3cxagiFSR8Sx5tmWqz6f1JmUyLxtYsMFrPcASEKqhMn4fdt3EJLrWaKkXMhJo5BJv7Li",
  "key22": "HTZYGL6vUYmuwqgm9ZcPwRsa91zsAimC95VWsaiHm7SVRDnvRGNEryS8ye4gyc1yQh4MpmEsBvmztsdUcyFEkLp",
  "key23": "4sRpTiXipZQmdAh61URPYpbXDL28vLhhpgqzjPqJNRDy49RPLmobaqbe1TV42fB7rAiqGdFAAF8fiTSbVSDnoeUs",
  "key24": "3Uky5qzJ8wjnGAW6iGp44N54bXceVbDKFHaffSeMfBpv4ongdeoxBV7b162boFDHqR4g8iPqrS9YjPhYvz9L9aXH",
  "key25": "CzMnGNojBGQxY6zAwdXFSs2xnnHECVcPKthXE66kqjr3CJxigyffZwUMWYVPzg5ednWwPiDnZDnVg6Hq6rqC15p",
  "key26": "2zvRJNZ3PQ1PHDcvX3a5iwHzwJpEXdtZDYiSJx3ByUL8rHe7DtaN7vA6HMPGoFQ3PZ2e3DzNtm52DECJoz9Jn2jT",
  "key27": "5mB8v7EQNrSxniv3uWVSQzNQV2hDwNtmtdCkwt7Td6XBLp9Gn6x786AkHCyN26RfANgiTKNGcJDkSonPB6ujU4fu",
  "key28": "33hSB8sF9NDUjSCYHKu4eKkDRhYTVSMmKGrUP6S2k6b56tN4Qg9PxbwieAh6F4QFvnQjfPLuX4UgSBQCbbE5N8D5",
  "key29": "2TDLusUdf9qCakbrL5Gu4GDGF5wFEodyZT3nZzP9XG2duW1pkBUpAXMN6Rv4pUGr6cgdYoBPVMsGf96jUiefDaR6",
  "key30": "35Liko3FxDVhHwCrVCt5PniWAqnPGA9HJXPq5q4jf5rwJrtEG1VWz2KngejRkWxWfe43VWyJRaFCYut3rhU21DKw",
  "key31": "4grB9qnbKpadt6pRdLb21VArmKFCRd687ekRFWSYPrbPgfu3PEZoskRPwYJ9fp6qeWTLnhhB91fHkPBQdtSTLWeD",
  "key32": "5UVn7j4W45gZq3gMtAQaa2SNJWwgs5xYzZWPF6FZApdigrHuqdQ3TdsPERqSTYpZ7o7U2ADgcKuw76MJSRQ95pCu",
  "key33": "kfLoy2BBGX2CNM3zDc1iTE6kau6f5EvRvQxkut1RpVsDWHZXqksYwP7GFmGYg31WW35FWESuNqzt1xAecxNtRiT",
  "key34": "3xj9zXjZhDr9E9LTLvJEn8K33yW8GZJKAoBjermmFbVhdfjoogywr5MZvaaCM1mRxHzmYEPR32EoCuAMPZg2VTpC",
  "key35": "5eNcnPuZHVfRdfap6B5QYGNSduJ5AjYNMtUSzPijHgYkoi4e7sbbMDHk9kagMWZPygh8Q6TiUneJxv4VBcSvJcSf",
  "key36": "4iK18pzhze7JSui6xH5pxeXgZqabguofFMELi1NhUoZNX7nb4Lse2NfCwYfrY6SSv7SszxQq7HCT2sZ8UPFszsfq"
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
