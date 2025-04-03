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
    "4UwdqJU6AhRANiCWq68MyidiBwH7oiJMhAoYuird1eG9F8imJKy1AuFrFs4qGxWYwHxwWYG2SMmNWViEinjSihnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijMuodotgyvfcvAtmhA3XHeNa9GMxQHLzrNQ8321bwArJ1EzQyJ5yn2X61PQiCTjurHwVcWU5o48wW5qU5xDVRw",
  "key1": "55KG2peysivK8iqJnzLRreHPPZD3kjGaioopU5GwJ5hPk21smBY4m93pz2Fjaj81eKigwqsto9nQFb2183enT5Xo",
  "key2": "41fb2SmCKFKfnNJzpqgoA54zomudiVRk2fxZqsQ6JMhsNAkZWkmsFb9TNxmwTvU6hApSEnWo7EnC9weomKdruWoy",
  "key3": "61xyVpchwuZL2HLE2hULdC8wg25FJFAtKpUZWEvTqnP2NGycQuuVnbox7MWE4rYKVXKbXUPvKYbywMt3RZVtcnrx",
  "key4": "2nSAjcfXQC4Y5USChptgQqataG2H9qVNr5MSLbQbcMqLG2bgsyZ5SXWUwusdvC7FvXhpq2Akawktt2dSYDj9R758",
  "key5": "4CmTawbKVaiHNyM3vnHXdacrxzEC4hapMoQEoEGFcgWp67DSTbvFJEjgGCAxqq8yEL7T9KoeT6mffrP7rt5NoGjE",
  "key6": "exoTxuPaS32ktMmVzmBwCaCc8mv1uGoDwDx9865qQpX3Vr6vR14VxZGFiPRXDMCr45oXkK7GECE3oiu8xy2z8qs",
  "key7": "4gmNZKgexyHt5eC2NqYeHStp2uZP4k1rzw9Pq4QSxpSq2QSXdcN3swcn176u2KMScFwgz53KY7XAk76jewd8xLb9",
  "key8": "4N68vyTzpiARnFPFyUDk2abpZj6q5WKWomFN1x5A73aYcyWzYgvoz434rtvzK3g3yNEqF3giL38Gvyparkw8TQo2",
  "key9": "5pL2PvggP3dqwnQMS62LzWHFGXhqbfS1TEdTMqjwVsWyYfFY5EBkrCHtkeeEtzT468HhXa8Gv8pUttZZrM9TmoRT",
  "key10": "4PyXNBH5wte3JmN2L7i4CFgTD2BHwEWDsWZLexXp9Y48tEMMQszhhFDiC4A7ZPfbUwuF9TQG6gQiXuM3woYEdLNF",
  "key11": "LmQhQW2ZujuXFZKxAAT2jfo9jr8rc8fbWWK8rL5M1ithE2HtHj9KWWiRQRaDYe66d5cJy2GXhszMy3ik82wBkWk",
  "key12": "3gvzm9EdmQVN7hbfBXAmRTvojT7FtX5Zg2h29pdy3xzHHKC1Yj3azbR7WgBnUum5UVEeFYvWyFNLgD5yVGR5ojKz",
  "key13": "kpJdHasrs77e3viYQ8RvwVqyxYbxHRgG4NpX3fH315jfKvsjfDnasgBjZrE8b2AhSTXCfwGuPWjQbdbw7PnrajU",
  "key14": "4jBLkcyr1AAZQLx5t1Dw2KG8NnHiYNrSPXFVuRKHVMLEkBvkNc1uHnny4fpbRcFpH9Zc29t9vibNwqyWckVz8Hcb",
  "key15": "3QyXhskiVnrA7TEyjcNUtqNyQMNfTVwd6zidVDtt4ptwhNJCR1KhoZ3XE2Ba2EECCTjhCNdbDseQKARpscHCUQ9t",
  "key16": "4Jk7cjsduWtpykBiokYCJ2kn5LbHWAxa2ZuC6bkdzHSYuXV26uc7EJz5woDm2eFrW4d7f6bjyHszHAGJYDEo9L7f",
  "key17": "4M8oQUojCyJ5b7dHuewTFWqyMBDutp5nToj93yvBuZrzTq6gpHU7ZYJJG1uDxfqp5k9FLT95gd9XTXMaKqYmhTko",
  "key18": "66e7rWLV1uBWNmj77oYz18A9rqGM1ZkLvikEYXWiu5mD3kVTcHPd1Azvd45HiBweNMqEyjJomH63VTLvKKDCdGPr",
  "key19": "4F2Mo7WV24nohjKtCc77mquexeAknoHrP5qScjnt98YBs4PU6mvMWa84tQjB6uFUNwhmLTZHJ9SG78Va24AtsHu8",
  "key20": "4JPgRJHXDM5uzjyRLJr9H2fuiP3Rhf7c8dzMwV1cWMN3mnWzHLSZLRosgT8LsCrWfvCzgQCTqkY7AZkG8kHbK3aV",
  "key21": "3U3LUPJAjTTryLpuUjEJoYmGucmcceRmuymvVCaRexBwsL4p7en69KpuDXWvmQo8y5AmGxZ6fdS4Zwwj6cDd2Awa",
  "key22": "2neryRB3PJUFeDiN8zu1HUAdP1itW4Y9PoYgeccFmZyXtyuiYBCyoWozo2dLmGRbT2nroQi2EL4HSzHFpUoSVXqp",
  "key23": "5aBfVRuL2M4uckEWtsFzYknvQRSniov2GJjzftExo1uMEivikudCiF45fQ2rkgqz7WtBj7rW24VgFy91X6c4EfoQ",
  "key24": "4EfVpQTzUAXXAanapA1urw1htSxEh9FbmtU3zirgY2pakTYwTowffPCHsxShgDicXNJ8J8TeRf4DbKdHSLcabURv",
  "key25": "2GjHXJuXqfJSZfvU4yUJtC3smmiB5jCQNU9EMFFvEmZPxyB6ZVDqwQy6z2tvjQzseGKcffVh2scWyQtafnnHcPLj",
  "key26": "SsFZ6pzgkcmPio6FLVDD1qhkGHdrx8F4VV6viLyYD1YABhbTgYfzrbbaEbpPgUpQnDoUZrie4EC779mqnqjHrYb",
  "key27": "3TRgZdeyZZ27cApTkE243xQZdeeMQWTbP2Vjz77hdpLjCizNwAR6QBAS4n9ot2fGQCZD3922RLE1nccQ5ymrpwuK",
  "key28": "5KX3gRtJavvnDghkJNL6yhwQtug6JTErrjAjBcFc5KitPNuuZoF3VbrtL25NZp4WmkVPfP5QqEyqHBEjP55AQa2f",
  "key29": "5r6o12iyXyG2ufDKe6GrbqiNDdPF8Nd9N3vZqhVGNQqK5Nz54qsGSJRbPXTA1PGRdQaGyaXKrXh99GHqoS4XUFhc"
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
