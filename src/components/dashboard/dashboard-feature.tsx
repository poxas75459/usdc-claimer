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
    "3zjGUzWZzZXD9wc4Svths1ETB3ybYU9n3amidQu477zehSB97XXXnq3bcTKfeQadiPayh3u2MN2D6RhLEdTm6jiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPHkjaTXH9RjMBTqAUe8kSsa5ZWpHNMqSo2e65Z7t23o4ESQqfh3PFc9NXzhvm3zQb85JnqMqSA8w4UNKGdJSgb",
  "key1": "NdmK1GNfVy2bmTpJXut4GThpqzFNjJX2FUVSdkax7yzjnFB3oBPagHWj9omERFspTEXHW53TJHBNPM9sW1DvLAn",
  "key2": "2hohvfXySd6z2HDEvJzLbXRxtLaa3ZpvSycDRR4QwuThZrjsmTRwXKwWNatdFGLpn9cfkA9dwf274oGp5MLvJuTn",
  "key3": "3HJb6o8NK7cHyu28fiiTUNFiALVJ6rdDWkdcetGQNHQi4dK3MG1oWym3XXVn5NegxnhE1q23wNyxqFjko4s5euF6",
  "key4": "5JXXp966EZ8qfLxYxwXfNUEWm7Ueuz7vYAd63NDbyjRzsc5cvwuZ2UtfCX4pxTRUrPYPdaTcCwDZt8aDttRR5SJ4",
  "key5": "3rr4hZd3egmmvPofdxxuavCdNn59hYqiUyZjLiHVhDFKkCMZ8PYzZCukqaqq1qjd9Dij2yfqoT5cQkwSp7oRq7du",
  "key6": "4P5pPkQDUFXh9vPpvgxbwhpmZtiLh9EhQVoJj63YH7ZpAHE7SVwxfiY4A6TrHNKazk1EzaaSDekQXiwmkpFJpEgY",
  "key7": "PsR1gWMikRE9WeuKTcYh6nB8PgApP5pnkaYNLjEAxSU8T4gyLZm8verd3zhyz89JdnpKiWmonG2MMsUoEoPosHn",
  "key8": "5D7UfsL7qkbbAFJtnsVQtuNLv8jNFRed1Es5xeau4uLJH4RirE5dYnyBiaMpPScParveH1z3Ja6mEsA4bYeEj3hw",
  "key9": "3hAViaHxQV87uAgVTkWXtNpD2B8gMiH7qrymqwamaa3SQJ3anz2yCBj7rqSyQ3CopwkCa3nZZUito5Es9KnH9qnK",
  "key10": "44kjwCJxTt36VYaLKNrmuhM7ht2ut4KNQ2GT7hiKftppCUbXQDeybzyi91fGGPskVSx6yAahpp62hb4eCekvcej4",
  "key11": "4i1muvMFuZFvCzUmHUkyqSGYEdBpZD3fTR8EARrMv1W4nWn4WRfi3Zzno8fF85gZJZN8jRSjDE7Y3KaVjoYBifPC",
  "key12": "pS7WwDP4gbUEcUoxEyx2S6xPWeAEy6MECjK9QB5LXdopG62L64xYJxgBL9dMjVndeMigFMYMWaGz9fKwLor7y5W",
  "key13": "39zcXpPrLc1ZNcp4vTeNceDLwtEhyMXzD4BCrNyVuZV7GwJjAVUNYTuM8wzHfTNhytQjsZ51VjKnaH8KCthFWQp",
  "key14": "2u7WAc9rJc3eFwvNkdzQDkpy7SL8NUfmfNpC9nDNkABYnWgDTSZVBJWKu2n1YZzdZ9gTQaHc4wSmMotbQuKMtBHq",
  "key15": "5kuRdhArVJtTqUtAsMuWjXw9eZgd6GNtojk9dBBMJJsZ4DZvKKqmGwXtWtoDMav8xjh2DGEBE3CpkqKWpSHzF9p9",
  "key16": "66eS2g4HXWnbpRUbTNBKtmRcxYoZLTqYZzwZB7zXxN5tLjo2q7cE9arvzRf7CYrBwiQUg51SyaBCHF1u9HtLRoop",
  "key17": "2S53yZveNZBCTWSpR7LW713TLkJjB3XWLJPK5aWKq81amy6jA12FfNHF9FvJNYBNmLAtG2K7mgGrLaiQdsrmb8n9",
  "key18": "2yfbTHCcxd3pZAxDztW3aXFWsHReYBDrWFbyvVEgC4j3yVNEyo2WBTkcpyBNMPvrUBHuofGKvveSkhQqhofXpgks",
  "key19": "25DYgLdYA2A5dPw4Q3GgW1HQkc7xphVh73pnQupQKXsem3kLhEHbx1YX53Zh7DV2ij6QooELUFzwSUbKhetsxFRs",
  "key20": "BCpGaY9HBPzukGzBt7MUgGWUgTWAmfzTcTzwYik5JkPNWnKyJmtEk94ikmJFEBjB7QSnxATvGvDrj5TZx87QiQd",
  "key21": "53yzBr3v5H3LdJ74CVYoogfYoYmD4bLkKcbPk4C6ajbLsiYkyZbDQZKRQNfDzG6k98GTMi3ZDmSyHzmnhzEArugn",
  "key22": "3DcFdf7YbPc3CEe7eU4HbykEH5qLXZJ9hrVkVucA9xBZM9X2gDQM1FpS4rZmEDdAjdLKdnaYdau2zrhkTwDnyH9T",
  "key23": "3wEtVv3XFVbTUqbXPtsfVNR5HEQgVhnaMH2V9nhwPPvv2DdxsL7DwNb2FwNahiydeHWNFB3sVPEUj2KnQv4mgTQ7",
  "key24": "4ev2p1TEYYYyFVzQb5QE6CNvLrTXc78vyrddJDYxStmmJSiVUHa6rha8UfRD1c9XD2U9FPBTmHYNvGhsgWCyauED",
  "key25": "rnJxqcsJ7FtRhieLULx3xcetfrz5Swasoj6jDmp2CmtQuqtbfvXUz79vgWA4xtKw6jMwmtD3PXgGN8T99bgMhcJ",
  "key26": "4ZCqPyoRu6P2WiXnSTAoj3tdmpjf8yG9EW14oP1eHPQY8ctDisaP39wgw8D24Cxp8rzmBJeppcBqRyEDhdbCdf29",
  "key27": "5LFSTuUN8LTdWHe2mrTatvvwX4nkNsbpjkLZuytfJf6enJgmfcBaWrkarr3gDJqPLayYAKxR2qigNKugSG3yz4p4"
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
