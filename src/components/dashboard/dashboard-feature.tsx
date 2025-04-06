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
    "222pzYsFe6Mzo95fHBfttXqNnJtiBDBcJQszSPitToCa4T76bsLU53bzEbeq9xZfkaoRLtheVu9QRRccD1mjEZyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yY8sicG4GYNTo5pkQHt64pzKfnt7gXh9NnM4FVr7HUToo3DTRokFoYnoPCaQBycdsYri6K21v9HMEP1VSmS4sMq",
  "key1": "YLeT1vkPvDgnxRWR7JhyzKAMt8nTfcSEqEg8ohrci9gq7LwiMZdzrWvNyXwqdMHUPMp46dct5ohbRZn8RN6HwPZ",
  "key2": "3AVD5HxZCgBiNqWjbWGCxYz98zkHCKMbNGb9tm7keNts45cbuHKsB9hqrs5hHjGUzs5qiwrpYBFqpUcA67Tyaxhg",
  "key3": "3iSVYMLuGJRcbwmQhFVcXeHbSMozGwdnNFqJNih56XTbUtmLy9QqDHSk3Xv9jNVJZarvQjuNsFiq4G3AFJ72jYMo",
  "key4": "SPfdVja81rDLy25NWswB6BwPP1XBviSk5yBw5JpmM1mri4himvmLPrf234zHkw3z6eEu1C7m8HK1FrftmEcMiZ3",
  "key5": "44Gt4MnjhiiGxDhquUP3MSkuevWwNiyEbF1UbNZQcbiXXoY2ZZwZGWQphQ62AX7kEr53bUAmHLs61MiypR85A6Y1",
  "key6": "4ZUKBeHnqQRmtaUBVAT5FMFShTot32ZQEAYxtYNxXskmTWUpPeqb6bLVjVrjtGmW7ar4gWniinvfThrKPr2kDpfQ",
  "key7": "4F7YKJoMVnz8c5UVVPzkmKkTcMryxvM416kKWZgbPqRfDaLwnRxQsprKeAV8R2xEvumpsnZsvhuStA3zMayvgxkQ",
  "key8": "3TSoSPsnbt5zSiVAFce14LwyDE7LWNEoqyMZqufej4GDZ1jsJiVYyVBj3ZABt1MCLgsEJaW82kK6reFf871H3Zcc",
  "key9": "2Zei9hwqkWDQxH5JgsDuC7zABJd7wcT6R2hu1jgRvp5wDFgDVanwTMkDcWPLeyEdTuyr8aURA6xPYWWYnEiLSroF",
  "key10": "zGRHDyfojPZWLSP1eZ5aGrymaPHRNYBwbrrCM2TQ2jMuqbpRp2C9WkM3fAygU6xuxaqx1gCE2YDmuDEScWuU87B",
  "key11": "3aQxrWZZcXGcM9b89xYEuT2asheGBtNUkgjznQjRdyep755DbhJ5gUoitMmVWdC1BHkcQbADuLvqUTfLuMoTJc43",
  "key12": "2YjExRbot1wQbdMkPWg5sWUKQFAWz33xoSgrvopkXZwQTFtD5LiipwP7muV4jqeqRGBa2YTdMAGiZo4F6tRyoJZR",
  "key13": "56p7dUtwamokYMcwfPQhUu8yCMvaaNqmTpXsDfcUqrQBMa9vdy9FdpBAPMTRyVbhkJwxf8PaHnP1uvsYiC2Tcnxd",
  "key14": "2dwAqVPW1hAgk1QgDGGtmeGjME7ejWxL47SVPkzLC3zVkd78bwDiXPrG93ZFQ8Tck6tu3nJFXL6ZZG4EQUEUMT2f",
  "key15": "3rNdakVB5kKJqRrSmgVLqWPGnnBKde7WksDJEDmEYj36FyVAywxqJ9jQ5pybK9Emn3863yt3rAXr8uXPeJn2FzyG",
  "key16": "2JsZ7i7UwMR4DyzYjsUfHPcvcidXWRC4wEsr2HB5ZVMXddAg626y1Q3sTc6pnbDt31EsuhWyoAaHLCNy7c7M8MPu",
  "key17": "GnxJKcdAAVcrBs7oEz2L1CKhnRvsVVq9KDVj6aevBvyvwYZHPqWWFmeaNPpC38yaP74zyRB553zTBagB3TbjvR5",
  "key18": "4BE4fGQNzZpETbkwXSASe57yLPt4h5G37aMmJHzv9BKz9Yj8owMHuMw1dWDXLUUjbHTuCXkvNr8bND1MHP2xd4Ak",
  "key19": "2KokGQw2uWDcg9XSgZY7TGbJs9qpBqwBGXfAMyCqLwYxxUR6x5NN2nDSEvDacxTUdj7ZyPGeAritjbYDhouh6rA7",
  "key20": "4sNCvbg43A314QSGLCXURkCBgK8Pn5ArswT4K8aVgRaLRUXFqY84utJc6vyMZSxaTcvETr42ykuYyzaQMuAWid5e",
  "key21": "3sJacdGc21ygV4EFYj3KFp9WeCrG51dvZanPJTfFW2ehyteniRM1G9HBJuBUdEbH1pEv3Wa7hnqGn9BrghCnJC1n",
  "key22": "3eT5g5xptkMpLTEQtdfYFexVBALT8xX7tkZncmUAKYDHP2ENJ9yBzzZPnc5pALNZXNPYqAqanLwYk8u6PDgdnLP9",
  "key23": "5sexpHr8GVxFb9qi49WG1PSjwyYYJLbKhEg4L6K1phKiyP3BQNBmLdZpXJA1FA2398bVUFbthe35FCLbdxUBVr7g",
  "key24": "58VML9rtVBjZRELPdeo3Kqvjgx6ZFPmfDw6NmLFVjrnCp8nxwGo8whJNrJB5uK8QPt37oyj6FMRTgdmrt47qzPF7",
  "key25": "34cEzUgPkusHXqZbka9RP7YUK14Q2UTEYsNbTHpGMJQdcgfXaSDy9MiAfpeZyx3nrMU426wkRkRExMUcnPmptJMV",
  "key26": "5YMDHcyvwLAVZ7ZHyZ9cmxhANBiCC5xTZFTT8QV4hBJtMHgXfqTfh6wuPPV8CPSwoTREKScBhVyDBmsBvxbyb9Nf"
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
