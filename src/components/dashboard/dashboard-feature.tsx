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
    "56n5rsbj59LSBU1ejC78NL1RDZzqh66FVLTgkhiMjUApYVV27Rv1C7h7zjwMCNr8mtMYdhXsVykCp45J41APgFhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6aAgp9BGCDox5ph3rMsL9dR9zwCXQXuAzxa5ecDyCGZGoiyPDWrwb1csFg3nCmNDUhvCuXkFbyHpo5VFXsYkjC",
  "key1": "3fmRPiuCbsdboDSJo3Zie2aso7GEVwE2vP7m59FASWefDhEVPLDXWVMcPYRdCLc98Ji2aLucqokC1h2D9EnsmDAH",
  "key2": "5C2Xq26xuExZXaYApFq7N1oBMRmMbAeupx9UFfPtn9fd2GB6VE1DExMNyKDtKp9tCUixreXhgVHYFAaWJwFYtRmA",
  "key3": "3dnxpjQUQzYzqzeRuEQU1yugrWPFzg7BfZ2kLbMcNB8Yws7vxMnHaHvYiTfnfo4FKmKZUtkiq4MC4FWpA1irYNV5",
  "key4": "5PpKThxbQqza68BBH6AjgJb1xjfGe2jUhE1BmXYYZtacVAUoYoRL372sq5J9CWSJ12kEJdj8gkyHX4tY6CX4RAZd",
  "key5": "3kQeDGdZGrm9QWgfEsfAzEGDRu881SN2FrmL1s196FTYCBbR5GbgJRfnApnkSPvtygRTE9zVJhpTENcAVEXXKoGP",
  "key6": "38es1byvB41Y8p9kD7XgJH9n4S7uQWGznpZynrQjzVGeLtUXKguDxytKKrZrNrXrb1EnuHdZnGJXt1UyPA9TPLn9",
  "key7": "3SRmFYFurpnck2ouX1A9u7eZmoVhHHCHiSxuvnMzyL9PtxLMYHHraZbn7xue4CVzmiW39871iWsk57TEYHt66ofU",
  "key8": "42LXfyN73FaVsAwB8QTSw54qPswzSxeQJwp6U11mEpFKG5xSgjNxVEqvJ7BnmjWbRCXMHKXy9gmfiFFKpcb6dZwQ",
  "key9": "2uUEKvwmHvhmieUjvzXZaMQAjyBGkvcmsrBvrTtTn9SRJMpvy5o8LcLthkkUqy3zJdewsk1PfSVz6CWVY5VHFEuZ",
  "key10": "2V3aTRZM8L3X5p4c2z86HSc7hk1LNYAYGLf2Pab9w5BsJZdA425X97cjx5bMtd1BD884NXW9NH2jvrUEsRGL5tbp",
  "key11": "2A2PnWDQDJrZoRPZNCHrGQt9FJWQCyKiptt15uDei5x9zica46J41GPLZHCQaQbx7uXFyk2H7AsJPYfphYRFX9LF",
  "key12": "3Uwak4bhQ5hWr4e6Tzfc9xDZ78bUAnwrN93eaJeL63A5Ls9ESP7WpKKz7mEnzE5696dZdZRLi7Z7PH1GoNomAUMP",
  "key13": "27gzphURXNAUBKE2q3xbnoWfsEVE8onMmbPoTULR4FQ8VgYmttbr2TTJk4Jmqn5rW2jq5wTq4VDmkK4tJPvUrLGH",
  "key14": "217W5hetHeeyWAouxrNoxy5srd87rzJFWoRfiDEmg6UYLFzpw8PWWGcwhda3wpq6WcFMBDZkNvVgwcadcdMojhAT",
  "key15": "ywXsTdbsxoaTeDCHZpGjtdZxRYC8tYqXL8cFZnrWjs46XwEPf6ZommEfc6TZVsSYk9RbR49KAR9tJhpGYrdPFSz",
  "key16": "2yftegGWjJWKj63WNcFFwoLgcCW9K7KVb9x3SV2ztUxL7rQkK6C3W632AUAcTuZntSsk9FMNB6KBxneALBbB26Lx",
  "key17": "66qDzbxQfojdyrHDWJZM18GCinmw86sW2CMATkf3SsoqDDtZCGXD7dJJjEqgz4qT5bMZgVfa4gseGCkRYUpC6jqW",
  "key18": "3Upovs4mpR5pH1hD1VVusdJSSwad7kGptuLto4JwvT7LHp6JYi2QXxY4e2tDCQctMXewqn5nQfP646NVbmRCjVUL",
  "key19": "2ZjH9ptXPh1poXwrqtFREZGQwoou1UqnP4XtFrbwcMdRTFyquBptXbV7xY1tu1EFupr5hSqcWqqdHwTB8MvQ8Urg",
  "key20": "3TpDdVoAh8VRoDJtDCCNE1aJ6xAoVq1tXWKpvTbX9pSYqkE927WaVvfjoM6KvQvuFA8uNsdVR8VWnPZaeYpKXWFU",
  "key21": "2oguHMwYYvp3gaBrm7as7MzBZxcwEEs1iZoJPbumdAnnjXtUJkKeiD1h9YXeHCk7xaakefaMyxxx77tt2uErbT9X",
  "key22": "Sq76DVmuq8iTi4LowEdPYAzGRp764UJcB6VJSw9JwxF3vHJnX8SC7JHAFnJngjcj1GEyTE9AXXDVieKsjepQsvJ",
  "key23": "2avUTYfd6ujdkiMgbNYEDx2jkXMJqtbW1vxN3a2f9gvcPkPXKBLBWif9Vy26twVFh4C9itpUV4k18L1jQXba1STF",
  "key24": "7ftUCDaNkD2VTuvg3t9X91yNQwppYyqF6N6RbNwkModbB9qd4ezNDcjpD67wxsGxvWSUFh4ngpvVbj9eckC3zRy",
  "key25": "2Jq4QJgBJKwEDeh6tp8tNM1AEKvAjamoBj7Rz2YqsuoNzB4iqA71eoVFwh7HPgV91mVBBHCWJc4iSZ1f3CZPp9HF",
  "key26": "42TicFZAV5rdVpG5PtqiUQ7kig4R4hhb86Jpcn8SLQ8tP8hkgcvZU4UJgbRSw6v44yMtWgd7DminEurWwDojAfi6",
  "key27": "432GDPzyTsPB87sfieMceErtYa9RLqW4EUsNcVMRdegiZU1SaPifwj4P7oB31vT47XnKdeNHeFGjouEyRSo9PJgT",
  "key28": "2S8bAHsqmVXD9cmXN1piWMEVJC7tP4uowkjLQGQKsU2DXB1TiqEKxLGdJ9dDjPzzY9598F1y6UcXpJMrfMtVCmEc"
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
