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
    "2uP1JBbnwroNvcAfw1jsZshdCjUX5bJKrdGCSZXB3Um63E1gMNVeWKryVeEijS8izkx1jUgGXuuHxWQ11ykKT8L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsVo61UdQxBxvomnGZyS3hQoDzFAUoef8RDXmpzZeitmAWP1rQsUBwCH1pR5udTHCA2PQeBVw3USJeUFz2fnErx",
  "key1": "3CMmRCHP4pFAhyfPRsr5Zev2apdVtGoUCFcDVnXWJFcQRjiSEFVG6aV2yJgPQAvEdTnzztMnvJzsdybWphddT1Cm",
  "key2": "2Cuy4ATg1fEjn5hJn5oKKvMCAXjYHoAAmFFVAvkTaBSiASBVzc17qCs5grF2vHwtSVcDXbhBCSCdD8owpLyqyb7N",
  "key3": "5KhJSxb2Ms5a7RBti58fG8TnzABc6skQmbimnF9Ab68ZF4d321Ha4QVioRg95kqqeMF2Y4HkNeRDmTQKPTYwjoYw",
  "key4": "5nsRhQXkZPkXGsUPX3W7XLAASys15DtWnwq9CA9WoRDXmR8vFoBbJu75ZAUPwDfpgovF1QWM1ww5UxG3wa4Hxen9",
  "key5": "4tPCCY6nXChAavqfRRVgJP28Lhmpqu2nouudhRLGjfiaZfnUKXtWdcCqqSzQubuNen8CFtF1EjVAAAnVUHuHe6Ed",
  "key6": "2epRC2ftxjpWEPMsqWFEKpNq99fSsBExM6sf17Q4Um6Nge9rJKTYyNYdRVGYLyB7b4uQAkCqXp3KiURyppmEKHQe",
  "key7": "5xn4jid97Cd32TqrcYXQfmp8pXNzTdGcGXn9kiHnvtccjNNJWv5kYA58x6CzHctKGCUgSXTUpCtxHxnYvSFVgq8e",
  "key8": "4vBweaxNVmfjmia7jPB1nxGrjbNGv295ZJPmh8GbskUwaKwk7YVVqcDid1TPWC4nhwixzMyJHV54fLzNYhbWj7Lm",
  "key9": "r1vWyf5UooxpVteffYBTgBBhmoMkJkgBdGxgHXAGsUYdX3R2uWCjSkYB77xKYD2CcnhHLxE2P42NsiDDjwMrRzF",
  "key10": "4w5oSKVaC3NeJJFkCc2fdTmU7rfWMMEKNDJ4cwa2EipMMj26qANvvDvw9teDLoyYb19hhdoh9r81PfYoLMztPQja",
  "key11": "2NVHWoN1cwwU5dE7pQwVGKSYdNeM11VBUdn4h9faM1WwHA9V6drHCKGg1TBK5rBYnRjUSXFWt63BCjeN7i4HDJKv",
  "key12": "3GT3KAYDnawJzvihfzvaBowpVmLL7V5Aqb3gic72KC6xhVRFyAA18eeVxNyaBxiRFNsLu9dTYSsiAEFTFD3Cyhku",
  "key13": "qdNZSA2xyk6XTdP9nhUmCPsZ3UeRNVzsgVryvkxpXAu4xHcVfT3GPXk5BqWa9j9K7dtowaFVTQUFWAfdJR9b1wQ",
  "key14": "gBcdmoGU9LKkncPXKwaCVhacxLR2J7KK2Yp2MEk3rhubz3UHMGg8aBnPSLsYcAtGLVpTtZfLE6CNQxmjyN3bhde",
  "key15": "5A1soYTaForwuL5v8BavkeNJW8EGBrmRHYF6MRDfMEG2ZHwKgM7J68Mwoyv9gW1AWU7NvEmezLg1cWXtY92ovKHx",
  "key16": "4RwxsjgNdYFPLtGBDA5YoVN42bqYcePCZV2hmCV8SwpmenHJ6QefM64viVMshbPCFxV8cSQaPbWweGS4XK5GCnQK",
  "key17": "4MuguVi6jTsFnZteHyu9xX6SaMRMbwZd9ENGfzApS13bxvU9USsggxDHhUZdBidcrBBoNsqKMTZEL3cqZHPH4Km7",
  "key18": "49nELvnvtXbNdzFaKABE8rwYkoBRhEpnkhy9GpcyZDMYkgTnrJcRUJ9g5LRLxAeKTaYNMKoRYMc7JbMqRrhec7fb",
  "key19": "2L3ZngkxWSHRxRSw7QcTvgsC3NGjawpM9Usy3phxWRuP1Cxr2LdnahECjvoLZfCCYhJ6sPn76uWJvHdrjh79exAN",
  "key20": "28XWA9Cwk7wemWAc2fyYH2sfTLjHUvrwiDeyKbfjsYtCXnssynmjPZLUF5kQbHpS3ZvMW9xwheR6EwzZD56qKy8w",
  "key21": "2UEj3WjGH8SvLZsn7rCS5jmLDjwimt3cBEGg2MUNse61KG1t9S2XrQXq4qTMmakqVQmrVeL8yQ8hD86vHykFmDD3",
  "key22": "KZoShKy85iWeNcW359jZLabSphZa8ZB1MW99CVAZVGZJoGus5zx8bttAxZ7bEH1gFCCb5u4xsmspVWzrUzeVAqy",
  "key23": "3NnwPDjKY7VTvMeydUXE8dPaYiTUbpoKA1X3n11gxoe61UjrNbCv92z7ie3dZ3EgKQvUA33GLwUqKCxJkZKYoJ87",
  "key24": "3zxr7JsoKUTsnv3tyB29pCUieBsU7PBK35fjVMwTHFpdexkhQJmtM3WiFWVrY7pgpU9ZkL93N5Ym49vAGiznvT73"
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
