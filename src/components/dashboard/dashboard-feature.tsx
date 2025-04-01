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
    "5QsDhmuZchXZ19gJZTYV793RdyXCeN6i5wbkew6ipwWkvcT7An2CfEfd9aocxY5wrUqRwtkofZT13a1sPcDG9fmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6w8NPcvz5R3nuGhB6x6ZNJCWELY2FT7LrcGNWtcqcoJtmjTLPT54Hv5eGzzbdrYw3whkwhLsXUDuXH585Y4tBy",
  "key1": "34p6fyvtsLfbsCbMv9E56QYoo4i6ErDHpYNghqc9n4irVrLhXxoZpfaoBa61K14D5BdfPFTPSaZWAaUbsTRwXzFi",
  "key2": "45r32X3XctMngnQvNmSnH9D37yn6vTUH6mRvkVkYvFN1pPi4ZRJz22QP6LmT71cQekF78LGzk6KDKwMfbWCJDrMQ",
  "key3": "UbHCBub2JQZQyEKg9yiHUk3XH1d9dRbZ1VcgNTfKCAPos9wpbz4YuxLDkHMgNrzpDkATVExsVx2rRcoAffK2cyv",
  "key4": "3CYM4GJ48up42wEsb4c8pyBQaVgswRYk51yc9c2acHB2TucjBEKBkekGkvNkb6mtvWGt3ys9ti3mWrCHd3DNeQH1",
  "key5": "47GA1qLr6KNhTxUE1bP2RFGPo5PcJko5KnnLQPuLiiBPdV6v7XEjSdPc5dEGtprXhYWUoWkzah8pQsim8hviqtUq",
  "key6": "65ktMyEkhUU26tGnBBLkzVQwr5kNas6f6tMdriXAFsCqVkKx32tKGEw4drkqjTsZSfGnV5sQhHY8WkM9FY9v4Gf",
  "key7": "3kFdAnReC1MK3qrP4kJ1ArpZLnMzwzzNuf7XGcY3JeDTTp4aLRksaQcBeuPT5ydWpgmS7gY3PrNHF9tJTYgHNSFm",
  "key8": "464kREmi6VA2nepZrR2bZVXk3wYgcLdXCYCxFNmwfdZziGv7hGAjdJSDRyQuRaHKtq1yTi8QPQrXKaHun2FQs3ZF",
  "key9": "2wsuWaWmdSeDothbm96QBN3HQPU2r1GkSyF2VRW4WdDi5rLM7XpQ3gDgWmgXA6WSXfH2LbahY95Z5oLosWBUiwR",
  "key10": "3qTewyAY2ckMLymCrn7XWEPMrD7KLnVXfuoE7h1ZarhBuGT2AxLwLuTNkfi4TY22rBNtYpXG7skKo1KxAUH5iy2X",
  "key11": "3uNtR6BL7Skr8xfVr2BzifYKpwFnuvY94sVGXYUvGouxbAQ5hn8TNyFgEKXD5dE5cctZesADqjzaxtKMFwo3V2E2",
  "key12": "cDraT5pQyjHxCMRoEiU2GiVPWtz55YcYU1KB4sf2n3JWxh7oBvQa2KSHL7Dez3zKgezK2xQSW4Vs17SZ6qGNNJk",
  "key13": "5v8a2ENNAF1yGtLHJ6acTAetYg6oKti6FDJnCLWBkENTEvGi351ApMyegzkYaN6KKU4kTpAqQ8d7JxftdCSKgfYh",
  "key14": "2mL4a6crLqTwWVdfRjKz7hDMyCsyt5yswYeqLFEJJMsoPaKudAHxMeoxKtdVHxtuM3Lg8tNH94ccxAPLFs4ep2Sc",
  "key15": "eGAxsZcq4YeVhym7Cbw3LC6LTmFRiSKZ425wcNYjN2juHzBu8W4ui9DsKyVWXbxJzETB524HEN4pusVjAcTQMMj",
  "key16": "34UVdhWJ6rteuQnmtiq3KnuHv3bjzuX3ti7BdajPVJj7CuTm3WrTiJwaxqfZo55jP3aB6WGsZx6AYMPwitWZ4Lim",
  "key17": "2vvkX5xXb2ZvFTj6aJ6dNCtLLada6ySJesfo7ZEFkdTqTgk7MeKxRBma3pBFu6XQJnVcKQWqTzQVnVr7iGivN28g",
  "key18": "4Afhok5ArnL8i2qkxgWnAkbc4AQvfbo7AnERaYHDBXYeDz97DuKjDiZAQm5B5u2wkeaRS2nr5iNL75eSrYgnxiE",
  "key19": "3i5mKRgNn3DGXXXsv5HsfYcoSPBrdWAm7U2gnPzmyLoBFBbm5NJHUNMUWuf3vz9Tp3hfo2Pd5vPowXgWScbsYqKM",
  "key20": "2wpGP3yDRw9NvEYERPSkrNNtYHaCjqJQqhMDF3SxB8GN7V7f2vTM5Kk2eG1BN2JsLg8RQViVAqUSNYfcWFPraXFh",
  "key21": "4mdBT5cbxoxouds5G1xS9NEzzjADhzPVavEM2wkSwVY9hjkRJyALxAGv3Av463TeGGXaj1MP9m4xLU4ubiifYCQr",
  "key22": "34v4WSV3zPCfGjhWTsANjbvSNPpP44ykrDFVTjswhUFcHUVGSM5xaanbtPVCgWqkfcgqSBQXPDfiTLKVxkcmJ5qQ",
  "key23": "5RwypkT639cNs2QJA6TUdAcfSQbdd61sk1ekK22fwqmfPSf38sC4UuJQEY2tWQGSzAihDDVARs162fe9K2EPqe3f",
  "key24": "EwG9Xw88wDkP3QgizoCoFLKsjo8urMZqqx2LF358phyHPqiJxjb1b4GwkghfDoBco7ZEtHiKL49cQmeh2vVueRP",
  "key25": "2tzwdiLLDxraNB9vtmXmfEihnrFV384bgGNh57t7FUUjhvovLQ5zNDgPsVKvXvm2zNzg274YpjK4AbVvEESvhR5W",
  "key26": "5n9mkDTbLPy2kDZwkhBVcUqTF9yCgKbci93cFmPdbBaSsJgQRjy67br4rajoRxRosKaUjRzq6RvPWAeM3qakXTHo",
  "key27": "4gaeVuNJmYdTdmfKwj76kJnhvPE9CB31n3fcHhE7gvux1NQMNQedJcNxmFyQhQsozj4q8kg6MPoSXUDaEbPGovV1",
  "key28": "5pXVq5fisFVYSE2rWGoRfxLm2cJhroW4CQYMvp7LdRmtGygsPjMxbAnyd5XEEkpMfd9XKb7fh522vScJdVFiwgrs",
  "key29": "MYWTA71TgdsVyRvNP3iLKzQk7JiLsW5mgyEQgCgRi4PGqd72Bw6LYsYZUqP9kwTTds9cTYTgr3NzRYruJniJnca",
  "key30": "492q2uQaGdcWX2UeGBjNJtWZzAvefUzTsvxc66cC89WSffTpTuRqjMQxhUaa878YpERa9nJj13BYiYTGFvh9MsVE",
  "key31": "3xocoxLrEfEG263d2aYqtS5u9aoY7yE2NXMQjftpPovba2Vd8L7v7YFhv952mUNJaAYhdapvLY1cN1YZpLYb1USF"
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
