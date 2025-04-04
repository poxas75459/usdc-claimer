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
    "4A2s6uu4aWZzhKr2WGBg34mSjnJBEcfpUJ9oMoFLuwkNRzMJsiRwnf4j8cqaaBogXcHuBzRwUo69EhHgcVwdhDog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gP9M7THbMyC5EbnJXsvqGGeSrhSwdZBgQKfD1Rg43pA4x3UGuXZ9JQMAdFCxqMeUWxRxTWbomuz8HucfaEMcFTz",
  "key1": "4iUvhuFaKHUbKkJa7rxaDw1jVn3weAeTJHzXrUjKz5xRR1z7tUfh6uLn1nHhU87KFEn5SHnkg6oGPTjoS1KcHP1S",
  "key2": "4ch3mj7RnphMuKcGQMCghV93JGakJQaob2K1ENFEaX5y1DJR6vi4bGGUec8w815FQKmQVNSfdvPUHr95eQtrtGzy",
  "key3": "3pZNvEPjuG7t6Dfr2XzyBYnxpUFonHcp38FG9se53Zj38KEzq2kzdkMYrKnN6nyimDFZuh7YAR7gyLgtjeceoEhc",
  "key4": "3XiC44GzWFYx5pEdF2n1vdftwY5VBJzhkfJgEqX6LL6Eup91bZ4STe4UQEqK4ZSjWdDjm3vKTKLD8sMCgVGWLcqK",
  "key5": "5rtbYgHYorxNHeoc98bESis6AzcoHuPTkWQxSZKVH2rghB2UMqEThQSCVYosf56YcefqKPT8cPVoidUJeHU9uCuN",
  "key6": "3zQoUegztigXTLV82ACDADSFCDpZmNZrfRbuiKH2dBh5TvA1CjKDAU7Z3texkNwvktoBP7VB9Ym56nNa44JZxRVE",
  "key7": "3GVg8vERo7f7vBD3xwakhADe3hvnqukzAaRF6ucbpUZyRBqQoTWY6h6Dz56XLZVw4UQ5zSpQgmfJNJjv7PpmnKgm",
  "key8": "FECsApyeRuyX4fyAqTchFPG2uwbmGmZuuodKnGr5FpVUj3muMaM4nYmcTgE5YX6LuVmbiwBxq7stgp2A4Wh33br",
  "key9": "5Fhig3nUBMeoUCp2S41zbDgDEJT7c1Y7M816eRsgK6d52zzngP5XPz6mhe48d4ypEZyUrFGRxC7UdVo8aUey7GrN",
  "key10": "KonATEbqtbQgELZd3kLAZ8LkRKqutbcbCZnXZVRtJ3HvG4jVoWkymFkqDAK8hav5M55YC1hEcLrXh4FeHU4WUjG",
  "key11": "2rk7sp64RpdrYWBvBEjKFxbmXR9zyUfb61gAyPKLiopyAscS4SVVENYt4RQrTgQECjLkq2C74p5JXQr1DepJQ56B",
  "key12": "ag3ogZZtAUmizstu3ATaey2i3FEtkon2KFqPVHPBeF9uz89icBM7eAwY3WTf6MR6DUvZr58SD1xzTt7LvRhfqFc",
  "key13": "ds6qVczED8j5Ru1srgw6LPcg4QuSwXHXuDmMs7gYF6WatD5LtSPUQCjgBeDpwAGPLSyG4eB3z6rrJvsbzdz3orv",
  "key14": "3knME8GLmSBPXtJdJpvyYQQUBAGdqXPeam1d6Mb8eKfYsrDirNEEQgpLp6xWzLEaY2btvStaacmEL9qvz1pZrroy",
  "key15": "3UPvAsgTJ3jCd1SY1uiiYotAhGCyQ5fnd6JpuZCJPDVNwC5K967iCT3psNEg6KY6x7eXy8xGq6X5A7RbzLPCH51u",
  "key16": "3TFaadynMyR4nd6qSvM6FkJKtkxa3sbNLXNMrem7usozU9UtRCV9p3L6T5Fzm3FhkDTrxeC9V5PVPchtb9agfozu",
  "key17": "98qzLsz2bDRZcJVWeKJtLQCgmnahmroHaWzSmJd4r8oHuzfY8mjysw4kPKSJpKiL3CREAMwySHDkSZ2kmNFHkES",
  "key18": "3C6RficUJxT9ycfupqvWj7dSen2AV6DsrvvH2An5PvNehSQLfifoDbz467BmLD4hCsJKEjimVZSVuPfX92AM4RbS",
  "key19": "5vRvUpReg9UQ2a2NECoVfPpYV4vjge32BNTdJ88eVAjUwuXyDynhmQ495ZVp1we6mykgJEg4bnw7awo4UfT13QVf",
  "key20": "4k7JQs4mwrvJrRefnmBLXAqGxznbewM3VGv3RpwbSPXeRGpwjTV1qSnpobAwLw3L4gDK56UYLeDadhA417rWmQCu",
  "key21": "5anQ1nwni84JWt3fgDHKVr3G7Y2iMVAagrgLqXFEBPNJph8EhZxkPzivSR2zQ3srAYxtbY6tHzTp4euCNwR471vf",
  "key22": "424ubRuWehxkWgroYFWJQ2TVJM28zrN84ypeTLA18Uo2VCuwrn5e72UENq5yZHab2V6FYwafUa9YKFwcBcuW35ff",
  "key23": "3wi9WBMu8FEmMMoSZhDs6EkTQ5bVZkwtqRtw3oLWtDamD8azYdcGEr5BQENsPceCRpCifu7zvvLvag5sZWXoEpAS",
  "key24": "3FAzWc49u2YhAM7bEuf747QHBeVcv3hB1giLFyhh4kC8uVKVBvHv1UzEWGcgYu1ntu2tHdiDmF9jEUQbeTCRiXkA",
  "key25": "2G3yMYpGznrmvSyvxSVQAV5Jiqu1aFx5DYRjsUww3VJ5sw2N44YdTFtpXpc164ooBzHxks1pHmzyQJQUDETvrvFL",
  "key26": "4uhhGxLH6TtKTcrrkf2kNcn3hmwYdDy44iq2aAUSZC3CBUQErqjmDer12DWCUGqaFvH7cDfDePPBYVA5UcEv58zR",
  "key27": "3JYM9pWXUSadnXjG5XSZ12mu1XMFZScrc8ofqqLZQZr6LG4nEv4c3vxMZb735hEA3ArN5nCGkfW6G7ZDpjz6rm1J",
  "key28": "2cZDxiH4MtQMLusUiDfWmbQSRJSBGLWRP1zYvBGLQ9286UpSZNt9RmiaF6Z4kw1uQrYQDYE3wGfHAdb44JVFsJkV",
  "key29": "fcB4VvgW9NoTmb8K5LC3SJWm1t2nw5vADMxrAqVRYCmo6xjgpKZBo7G3A4Gte6DmXETK1GKtp3Yj3RhzAWurYwX",
  "key30": "2tqNJFRbYZvUhaE1H98U7a3uj4LFysX2XQcihkiFoit9K3eRJxeksgf7Zy24P2Z3XGs7jgnGNTnL6nYY6ZV2Bbb3",
  "key31": "25BhVkbnRQCGvNVUjZ23MMJKxqT86jP4iVTgKkWxmj1egQJdo6CPdbk7UBhWVSSrowK5LtEMUSGxqDuirNTjee3y",
  "key32": "5axCHqhkfvnGSsojnGRaebsLozVY6iAxUdsvLzBz7nCztQiJTLdBvwdYWXHib1GHgHG9fTZbzUYtjRYS5Y1vkvrY"
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
