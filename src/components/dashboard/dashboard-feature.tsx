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
    "2QK83K8EXYMXytPCHjmUtjodz5y6Uu6eL5hM8XGu6r1RvWrexZZXxWYd8pveuqaEVf9aHxoRteTzmrkRpJJsNisw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6a4EwEsAU4HcG7VNt8bKP414rDb6SFUNejVAMbUmiw8bmo7r4d95bX5sso7CW4EDmW3mNZFTaq8H6SgoUMLydP",
  "key1": "4LcsHn96ZrcXtucLgV9Sh4nkgQxE3ZA8jt3C9uBSR3VUFRht9MchfsNLt9Lm7Pi2W3a9xogtVqZTSaRSJg3UYs9R",
  "key2": "3smdRUrUaULw2cecc7ny87BDvt9CFUnMmy7hGBfJ6KLWva878yfum1CDGwojBk96SfaayGAMn43WmLZTBoeXbka2",
  "key3": "4JDWJtGoFkUnNVXGKXSKNfgW8AbEwS3hUhast25r7FEhcZ6xeG99Gd2Vj5Xp59DZT1kgUtcxZbBUjAK6Ke5MBJj9",
  "key4": "FbsLVN22878ZFy9eo9ZBoDA1KuHffbwT5HkTXfEaM5EhLo9xNkjaTY4ubQuaXN21xu2waYGFcLcN1k1LutrjUAk",
  "key5": "3cp8CXoCsyVP12vEDE9ja7E1gkvgdi9mK9uy8ietUmK255Sues3mQTexVtrWjjcZAp1Nx2i8yQNHiddJfjNq2LVv",
  "key6": "5N1rkpHrB26w9TPADJ7yuky2sUFXrohncuRnPrMDhdxYcuaE91GHJQvQt4UWZJjwjfsivmdDGdxjNirgUJj3NQG5",
  "key7": "7eJbpAN5Ag4EaMCK9jxXwLNeiyMLEdiXmktEbBVv2tNKSf3bWnCwf7Xdfrt3HEuvKB184eexmNm28RRyXy6Yd1s",
  "key8": "2GQqicS2VEXQjNTQnhsvhrwZ8bLcvuAjRdBiK6o85Ns4hZwH3bom2odxFQyjEvTAwSHyds3nAthYbcWQdbVQTy72",
  "key9": "2uCFZtDJaigV2QaGo5DUJru4xD9qyVW9jAka4Cpe3aXtcbtHuc1SowcP3HMPQiy4eSeTCcHiVMLtWefneqsprHxN",
  "key10": "5DYjbvBEpSX9dxi5qsPaz6RaKoArLw9dL142LgjLVB1cqxUYT4RcAb1awYAGQJ7Ha4U4LXNRCjfecNS2wfx1x8HU",
  "key11": "3MBErk6BJEUvofdAG4cCKqKooSnThvLiB2tpA2GAiWDXLCs7hqPQ4e2WRusQ6UXVy4rHn4owV9Zij6bHZqjAPR2t",
  "key12": "4QEoyQpxLgg7on9TpFRh6YqffsJKZDXfXKYGicdjg3LseAfPs6Rdjy7fAecLrCGuE1Qx74DhpopurdVb1ejwdKYD",
  "key13": "4MTbsjTAeC42uTJfsTnphUVpkSULeVq62enAki2noCV38NsDDRDgCpeiKc86T578R677xFYZRNKGZY7Bnst8FkX3",
  "key14": "2NyrXg7m3HnnatRpjmkURfa1TpvFN9jtQozrtLvypZsFpYEqUrCvQpSAUpFRTQkdeGv43K1R7DRVdPSG9vhGExtQ",
  "key15": "3XGSWKtsU89kv8Ezq82mgnS2g8prJP2J6RGAbA3GvEerP5PZKiuSuSoeZXQg8F2BgskhHz8cfrtkNJsdRCVW3fu3",
  "key16": "31ir6bsqJMsAqiCBTPSV9KXEdR9ZrJw6CmpcMjZGX9rHHNj5q5h9e75BxbPeS6TYEU1dFeDZmkLAwJePZmLK2quH",
  "key17": "iRGp8dmpJDEHjRPcS5t979BFHZu9vRJM3NB5Nb3i2gz64B3EMHU4SwFVtmY4nh7ypMvycEypJfWaCFap4Cbdik3",
  "key18": "4mxdzH1Xyh5UVo7ZpvjJJCycY8Wd2yF9iBBrTmoVxeDWhDo9MFP599E1xtFpbypkFNHRQwfpFKkA4SaFNfDG5ghM",
  "key19": "4exxYQDL5QcKBY8hrdkd1fEVnYTAYajS9orcysQf8sBgLTN7vr9hnKKbWdEiDMHXU2bTNoyA3VKvsN2rux5R8SXS",
  "key20": "5WJw7uD4uahMkqFQRJAqEHrXrTgtoPrmdmJFS2auLehJgAaJcpZtME9KMFRgYYGjtVENBZhWd4C3bC8q41FwZ9X7",
  "key21": "5LQx56WGdTgELkupdrTPU5XvfDwYxqZiXK1x8YnuxT6RBMXBuKD6ZhmGJ23BkLYDAvvCjVQZ4gQzJSq1CGcugoWN",
  "key22": "5QqLvhmbC4omQjkNgnSwxK7cXUBLAa3zf4Ru6oLyDq9iU39Nz7T25V58aBjJH2cG2BAqZdLpHZgT9ftgAKj2JQso",
  "key23": "22WiKAhSfzeyuGJoBAkwmf6pe5JU39pYmUzVzxDB4yq38pRS2LManyPbhgAGx2zCstTwT5cZePhAG99BmeH93fx7",
  "key24": "4EFZSQyM8FdNMC4QXAjZjmqRJ57Nryub1FbaxZvwsQrwwEZqbnwmydnYPacEJEPYVvbqo6bSTDP8SBg1nMFwk4gi",
  "key25": "54DsE6kYujXffLihKDNmv9mfGPdiiMCFzqeDoudXMXYkNug1pGy2gA4HM4ooU96vsRuJLjvZUNp4kfkmg63BNhmq",
  "key26": "3g9Za8tjyfkZCrGPimdxFXV3cJzqnLPD77xW4XAbFzDNjRMFwhXXeRAcvzc4UVyf3iPCJNjhptFu8jUZkqNfsgSK",
  "key27": "9ig1BJ2GiaUbDdTuwCcyhHZzNkKUwv9DjKrcjNAHMRiDH7Dt7F3tyqErVcxNeSHMUhndbKNjkFJ3PRd9h181qN9",
  "key28": "2o694e4hU89TJvN2ykEUrJhVfq7MFN4GnqVh6r31b23e5axhkVMdHs6n2YV1CQgXBpDaFasmg7vdjfDC3Qid8P1x",
  "key29": "52Li16Z3r9qyjojy3f5KiB62a74Z3TJeXYFfP9J8ZaS2pGYmQy1um1CxyN8z7NEANM1d1Z3Cij3uifPN57q8WBr4",
  "key30": "otxF1X1Hevg53ghaEWXjJXgX4Jgrf3UTkopNu6DiLmQqHH83mWJHaJ6b5f9WvKKZi4jETTh1dsc7UWKEHCoWnGH",
  "key31": "5637VP7WXs1zTkYSBiYmh3mhcqEu58sPdSgMXTefVHWph7nvz8P8xecmPPRzqBT7sdf5GH44tqGUzG7YDksWHf6g",
  "key32": "35bLf9QGs96Ec51Zo7Dksd5mrEvnnwtSiw8xQyyy4apcPWS824XU4AtE44W2pJU25v1sdaKEu28e8GtnsfRF8j3R",
  "key33": "LABY3ZXS5XE57nJVgdhDrQoBgAs3etRf2iTC73VXFPK7RsDTyqQEbkJUstnx8bBEFn3zYmwkAwzKYAtevAR6TFV"
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
