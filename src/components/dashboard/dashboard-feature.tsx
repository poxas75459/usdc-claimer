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
    "3ubodjhswxRUcxXpDZPRz7nAwvuAahpDdxosMZ6LEmrUFKjovC1DK7UstahkQT3FYQtKi4Yv6KD3bNbqMbo4VFWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6vYRWN6WmNr7N66TgM487TY276iGXMqps12oqb5sbKsNdPp9CNAoEK1oGRQtNKpESzoZRiUKiyp7Gvmmzuy3hi",
  "key1": "2LsUKi2X2KZreoywgXUCcGruRCe5kKove5giXWLPoMmhZTqe6TSxLqZAvsa793mAYzbH5AkHPGzMpZHUvtsYXTZ7",
  "key2": "2Yyq7gg5Dq32er533NGU8PDrJPQSGHHaEpePHr8JbTE3mcZMARiqgk2xCjw1WXmLT2gGUEkPWhw2koeH3nsPzVdV",
  "key3": "59XT1M3u55zvdN8f1pHLXvZGS5JpkjyWpFybnD1y7SydmuzofN2E853meDawtNVSBTEBYEuQBMgqnbHWRW5PVxt6",
  "key4": "2bRgta59MowKbUgrCabSeA7kfVNR9LE7BQEpCyTNFXESFe15apa6wmLXpM2GLZnX6eo9pVnhGCHLSUhVLoRWRGjd",
  "key5": "31TGrqbxCgYAAw2gFd9jpD7Lkw1g4uoar8gATGXQLH5Ks6SYW2wXTsMujNeXyE4xJ6MBoMnW2fz7eFXCzhkH7EZK",
  "key6": "4amGxXToL811NdMDZc4MoRuKyUKeMKmBBSYW3tYKxQDDmRUT5shuBWfdnj8f4rVjaSS9QzRQxHUSmuoMe6e7DCcs",
  "key7": "5PbvyS77gmcGKnSTMr4NJk81uMt18CJihv5u732n7729psFE1a9a3vWRFYj56ywYJ6kMkhnDMN7pouATKtFxHMZ3",
  "key8": "3cxjcRCX9f5bJR3u7jcNK6Aq3dv2uWh2ERSy2STX551nxvQW4ozXnWDmpWRLKin6xGczetAaK7s2GG8sUeHJtxan",
  "key9": "3n6C2AVL8GHXbSx6qqcQyj37M8wVnGgU4jqv8fAxo8Ncvx7Yg9trdYhBdmFZUSYSxyAmYpqj6XiEV5eFyjaqP7iS",
  "key10": "4tVV9e61QvsQi8G1ggXBGi74N7Tbuci1sdMtrvpaAYgmu6JgLN5jxnZVAtkstiqGq7cR5kkqNiFqGYP2ofjoDYFT",
  "key11": "4ndGoLN4qUNNSnBniUkau7uJy595idKWqU1e7gcTzQ1pnqusYZBJwDUfgvn8iqe9AMCPdPmd2ebDYCEu2ep4WdbE",
  "key12": "4xoNQy28dsWarx4VbhWqhAec8vn2DSnTg95dbGNZMXgPasnGbagnibGdHJKowoTkm5yfno9Bjr48XG36rfGxHJMg",
  "key13": "24xzrztDvue92efT1MbqUYHuCMzF7qEJmym7BDgMBdamdyyCxgWhX2baguHqTv1MgsvMy3Vgk5UvnGPnN1Z1xb8t",
  "key14": "3Uci3ueUs57BQ5PyrfeqC61UZUjRP5T3bXHr43wuW9hepLfVur5LLhtt55NWVKWRcCk3NuSrLkZ73mukiV6XrByU",
  "key15": "3a9h3Bq9hsBtTTod98RXsRmCeGA6kYEgtqQWqdJjY1ktCkPz6TdMbp39UuKwuYNoUaqoGJDg3ynvmhHiaVUngt1K",
  "key16": "24KdC6GqrPWBGqXjGnhx3BmF7L6JUg8CMkWWdpcdhZateo9a1VbMTrLDRjWw8bA2ubW4WcadqS7fNQ9UgU3tnY7d",
  "key17": "4jSnqQPsk6XWnud8hLXXJ5CYn6oimy2tQzN2CAwbvrkYvB8si7s6wByxhqkCT6bjTr1JveyogLN3jSc7HA7mj81R",
  "key18": "2Ms2RWZC9qNLE5C38D15zw2Jse1LfaCUuv2erqUVuZP4AwFYn6sSjVHA4ePBE7xw7rZiaDS3fcAyc7z99QLDthY3",
  "key19": "Z4a6PFPL8RA53QBkA1zemsfRLq5a6NsggSgrKV4NniAA55yJxv3f4knyHY7yGGJeYaSca7sBLqkqeChVEr4hZ5t",
  "key20": "4rUVEMmSc7iuRkQqgHyBSxBmiNzwhsqjJBR99Ye1tSKyA5KpwuCcVSW52brXhWMeXLKzPac9tPoLu3ZESKAgbCz3",
  "key21": "5TozpF1cT3NTMjhJzRnQSE51ZdYwQbQiWDmph3MkNFwWHkM4XGdJuTnKvYyPWqSrBJ4ZnGJNYTo8dKhBXW4Vecpa",
  "key22": "5uBbEWGGR84RY9qahysBPj63cWFbXxMfbFi8LG5p4N8mJW6RVhoTvqQfhjKT1brUuEPBqZrbUpK7HpiTdxbUuzau",
  "key23": "4hRf7kE9MbHuMjFcJRzD49cyfsJyfSQ9QXThYyQD3f9y7kNrtjY86C1H54CdM4D3f5c3X4afokYX3azg1dgHkVmq",
  "key24": "5G2RmB5UM7GPTc4op7XkNNqAKd8B5MpAXYHnkpQshXyNN78purg2CtA8aYKqVm6osQRvLCA9wwrXnKNSgLGNrZ2a"
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
