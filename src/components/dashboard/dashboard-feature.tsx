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
    "2UbVBq6z23pvGEfZV3seX1nVuetaoBpUi9rxKMgtmsChcSTYZrXKC3bWL6QErz1MxGSKcN26FLpk6YVkarfuhBtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSy44tccF62WEyzyathAURqFJv5jAZ9hCuEahbJjczMwqAtYDEbZ9tDN298BXQVQ4iQaJyVQk2giw97tKvyZzMV",
  "key1": "3cxBicTKjuaJoXLrcNN2rhjZGBTrBHUXHNZhcquvWjvcHD5gdXMwqwPMisiwiMEPWqut9VaM9aaKT5ksBco3DUJ3",
  "key2": "Spgi1CJ1Ro1sY8vp2uM5UZqQpLh2iWY7pSJsutheuMk3jxn4QavJSfSVsZ1o8tWmz2jPFJoxrrLLdeZHUfvBQRU",
  "key3": "4D9sYZurv9rZM788pnXY7gYnMkMP6dKDr3q9A6PGd7G1nMy6GKbFRxYhSPLkpouqxeQrs9VDXW8oyzE8XWBd5eHd",
  "key4": "4kadenYFqWpqmEkCr41viAiUw1sMqFXN65TgUxgpxKRgMmhQUXCYyf68G9btJ1ZFhp6WpLfaNKXpzSyG9XCV6Ays",
  "key5": "2rXqPZvcaHNDLHPicATeynJhZneDMTAxnzy4E3MGa1bvHyEZYczz9m5HrEHD2UpLqniCdpQxFmDeMCsDR3UiMvFe",
  "key6": "LFhu3UVFRkFkxxhKPQgaZ3k2CYAzgqnZGJyfD4AVJcyZ1DWH4H88PktcmHGAX7VfhaYguRicCzRSANZ2pzrCMWd",
  "key7": "3aT1xPPCjAXNx5oc3Z5DAUxsCZPtv3eGGMjm3g9YJZHaAn5QUqos15Xjcge1jminx9jVopWy5CSRkb5oYvdKvcPL",
  "key8": "53Xcix5QLjqyKn1dEmCgTWKCbJCzCdbhxNHLCj8LW6YyiB2thAAvXDJgycskF9W7QaCUFEoudHhR9ZmTHjojuiPB",
  "key9": "4G6x56AL7sDKqv5iX7VVeht4mrkBXP6Nr8KVur7DWfZCNM4mNU4D4PN2Y9YgBvC2jXEa1eFNt1aD2hucaqhYa2ow",
  "key10": "c8F1dfd7kw3BNFrphdUjeapcXZX4T3ji7p5FDfAjUi2W9vMEbz3tZcUTL6ecCk5dgQgi8EtgcPZYNFXJp37TrKc",
  "key11": "45VeDhaENRaE8SogVAh11Rm24cFpcJemTsawq9QSMAzmwyuki2FgBEGy2jhGJnWaYoexJ5VjoK29asZFffjMw5w",
  "key12": "5G9wx4MLV8bLmXRmz2krf8JUEBLWug7pmd5zrTEF3Nj43mAF7AAefGubicqC4aFNXnGrUY7Vfk4jqmNQXJq7fdKj",
  "key13": "3bnRkigKtYiYq6WmWpi7ucc9VnzCFBuFfKJZXXFHtmGakTP7HdR3ETsXgdrCk9kRHaznN9SqxzhzhJiT5oLin36p",
  "key14": "ock6skKqutLH1ZgFA2M11zJhQzoyVsds62ZdQQZVE3Y94PTzkabf3PbBf84czEyB81DttfSxtcK4SABJ9JKeMEH",
  "key15": "2DYVw1QoQSN6nSrkfMrRHmx5fkZubHPREN7wMR5oAaTTNwuPvJV4WFKiQMQWwiJpenHZLDvbFfna9U2TbPeQnxsa",
  "key16": "5MFMJQzDRRxm5BVWNPusFsP5gGkgW84pyU96x4qhoW6PXW1Pe2CtbqMEQPxi3jt46Lu9LygzrrdekN973UCHZZhb",
  "key17": "5SjDdEg5Hi1ZQDmjoH34hwyMG4vwnL46uMHZxfS22b1GyJHYuWP833e1k1VfTDmqrVPMAoHH5GR7XeMQQtqTJboe",
  "key18": "3h4QaeQDDsgRDpQwCACWrYYmugBh6HTLgcdFfuQi9bLF8w99Xx4buF6ztja5dPB4vVcZwUjnJs6UuRycWE8b6zcT",
  "key19": "5JAmzwsmiPZ2sj49qteFjQCzXKb32aHp3J9nkCKR7xRrPbS8sUPp8F51LNw63MT9Fxn3thWcJWxPmak6CyHm3685",
  "key20": "4RSyJ15cvJFWR1UA1HdFEBvejVxfvHdeuq8bQNovxCfEiMEcNxxZdwD8652DnT9Liz7zaePq4BRAEVW9NNTSDUYW",
  "key21": "5afhHZ18bscRrnbtYaFBXTy15QBBkBCRvytvF67x9UVjapNhTpnfbwYfPePXxvXCKQv1RmFx2gAajkwRiU1YvXFL",
  "key22": "3hCCsYGZRbuWoUMh7KWYkPvHSVUe5MiioDLxLQesgeqbXDjZQxkwcCoTBYWD18yocLidufyLMKJDqcPgymsAejTZ",
  "key23": "2u7zK5uD5c5jPE4YQQ1JseWL4VADeaT4b1gJoYGZKYH3ekcMjLnY1eFGGivwudj3m6GuznNPYgE23CWERxnZ3Bpz",
  "key24": "2SvhbndGnKVjFTXEuHEWeAdxMd5am5Am47YJJNvZkhnG7Yy3znApfQUe6NAAMHYLuj5zHJqn5afgfPNp1apePdDF",
  "key25": "5KCPqYJ3M8hQKsAMj7yR5fVmGaQvVRsHRmjAxhTrjMYCVXFo9bX2xVC3gqqBBNkBf89o9aNTfRc7brdKjrj1ZErk",
  "key26": "2vvttTUpjPA5u2XXJir3HwSXhR6iVtrAhbeSYWuWrEHYiPH4N33VZvzg2d8atvD4MtUV6nUogXiLh2YUbpEKFbrc",
  "key27": "aLbpvGfYEP8BmnmHUqPJ4ivjRqq7vRzdxnyzvd4gXYGzXntNVaQ5Hf6kn1Q63YG4r84MTUV8AsctiZNS288MzsH",
  "key28": "3UHQU9uoqymj1ye957kYqL83eD36M7FknVwQeUBANR8NYzrNFJii7ccrh8bBXTnZqufL6rxK4VUDBXiMFqEJ3crt",
  "key29": "TrkP2T3yRXPLKzaRcEue3ZAG39WvaxkHm55VW23yNbyReNeLJhkb55f6rmMYTxQoUWNeYPaLsjr9po4UtCZ7KKB",
  "key30": "5pwYYuueKd2Y4mwQzzANUn6cKPTQAQTWpXoT3agPiwzFHNk2TAsWAxovAMJXdifPEggauahAamunT7x4pytoFznm",
  "key31": "3wZ7KyjyBipdL7yTyL93F8g3Hmm3wToTaXCHYoHULBRm7uyP2wSPgokErb8CrupAFeu3ShpCXBQCzvtD2TXoW848",
  "key32": "3eivhzRV3s4cAP8xg8cPqcqdKX6ACJ8VYPUjC5TgL216PMsnScEKSCEzHaV9rwVUrimwG3U5feZJ4ZyGp68k7fcY",
  "key33": "4iaY68Lm3sNEQGLNETDtUDVLCZZXAv7vo9yhrKrZ1taRxeTj8jXCdGEcFdVRQUSArH8kB2GqWFD6k62svCqGSg55",
  "key34": "3r5kkSPKs5nTQWZFEiFtpE3DohtHYt8vevgA2A6Yd98krnc2nNDXzt2WaEV9sTFBZ4XGkQqooqxZPaTkPgfJP97c",
  "key35": "52DGcbcbbp1MSMy8uPCXeBBDxcahvgqwSdQgeNn1qZ1GRhHXbstwXMdZPyoKEaTqFEJiFJGi8mJ3aZWp1jmv2wSU"
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
