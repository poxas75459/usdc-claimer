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
    "KE97y42rU572DvDFWW8qDmxv7sZzH94bcGRSGpC23RvoBwoGjn5DSeXuJHFSbU621Rt6TTmymz2L3gS7N3GshKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D4RiFKtuQnyuG8wBNTpA12HZiG9AxLVq5t3hJqCXk7q8DLWaT6xEeLwpRAxg6KU9nLSSTd68Rnu2RF8DJMRP7s2",
  "key1": "4a1X3PZi1kVgWtbuZytFiTM3dcRKxJVYdAXqULsyTY7WNFinHNMXEpqesawW9uRESLup6jEgi5niXV3vEQe5ammc",
  "key2": "23jht5uNoYQYu4TrmVtySw7y6nWkxhQcpTir8vYj1fWAj2LXwgx4gBkt49T7J5bxeppDAfUjgWv2bLdEPxbt7G9N",
  "key3": "LtxkNVdFccL8UVn7WhmHKCHt7r22FPRWfRGZiENy7JwsQaunK5uKiVsTY5WNjvNT15UPN4Nf2KFGqDr73MarmbK",
  "key4": "cEUugn1sLTdwWT4NiTNgTvWfZ9jWhfJT7x2kmzVMNubxouniBRPXH5DCey3zGMw9sCMhEsfEhX7EkrkAHY3xHy6",
  "key5": "3uXmrqjaD1gXApFg4NE9fztEtYSTLvw8rbgTf1XhaSJSrWdZWPP22RwKiMuCtqT2TQMnPSbSpxVrHT14H2dZVFsD",
  "key6": "52RmRRiG2TbHruxvMhxhVa4k35hxxkfZw2kPqsnDeCPqCWmVPiXBqRgRHmrUW4J75nvsW823UzhKCmvdgSwEc7zf",
  "key7": "2Fo8bJqrczWYjLrFm8AjbkrHqc7PVZvchYaLPHzm1hukakkXs34ECzL1Vv6Drfs26kon2C6JdxYmNNNytXGyUcGK",
  "key8": "35Wu5P1akSNvoq2beMez5dVHwM94W8uN9QwZrXtyQzybTRC4DeeqJoUfwa37ZuTH32UwrShY2QMrbQUnjgFmLZpL",
  "key9": "22egEe2Mtyw3JkxXqeX2H9yWm21RkgChC86M4UHDr5sdZmbR4BC85KPS9bUy7GYax6scpag6YtwaDei66wCubBf9",
  "key10": "5Fw4xL3ejTpLV3FBA3M4Dv1XSoyqzqSVBgaTjiNQSdGZpDk7TRg4jqRWwWz22fweBdVcng2ejdGPbSdJdSuRzwyy",
  "key11": "5AZ6dvViPRGbX2h1RW46xmvebRjD1vfRyjz9ZU7UsxcwRXPGtk4kqVQiHYTaT5Z6R1sMBvWBBz5HjmtbZjJfoHbs",
  "key12": "2d9smT9qYoDRHsAhpMKRkv5eQ7HtGK23KRyZE2puZ5zfoic6rSCd3RQ3Wo56B4LHF1Ln8zYHWQqgBVmqLboYKxnD",
  "key13": "5KjzsfZeySh6zPztihe4QPxi6aTQuapVMeda4BnD4trfan3PUrXmvX7bQrnfCip8ZyYaKGxPxcQd3FHTRFgcSpAc",
  "key14": "ZGDTNaELuWbfU57N5MKuvyFaNRfxs9DfSx8zwQpqMrQHhfDsEEte2YT5ag4b3kSmiFZgs9PykRdUHQwACVzZm8d",
  "key15": "2YQpyPUGTTN3jxEM2xHUSWS3a6nxUGFjYcPFeXkjqbiy3BWxbeTxcYKg1uR3B68g55PdZiGpEunqws6wSzCjcyPE",
  "key16": "47FhJ3r4nrtCNCgqRQWGS4AuHCLiQ6ZFCkukEBYJcCQvwa21JyVJ7DucRLVqaFwhtHVKZ6KnvE5oVi525uxQEmEJ",
  "key17": "5bNkNF8KhiwR498DAKJnbayVM4EJzt35TSF1Rc9EHx6Uq4BinzAYkQYQxHgcm7nQwt7sf7Z5enGoMeDsdcnTxiCE",
  "key18": "EWAuUEGVxWLpwv3Hn8686oMJEY8WxjvCqzhBwKwZz3yVedXFgh3tp16LA4SncFM1ZY3XY9vEqWPUqqq8dP4TYzN",
  "key19": "oNXzmhnPkJ46ZyZUvsG6wxNo9Af8cDrJJUwRwwEXHQRffY5jNcMhoBgj4kVrKwYm5i1Pc9Uc6hQK1uysEgB4Qgy",
  "key20": "4BRVPhq53mf4QP3hKeTvF1FdDD94FiKwGJ7F4We19nAfgx2ZwxV8E3JhHpGz5HXqggMW8vHjxsJovqLBnW7tMFYK",
  "key21": "3TSqyirWRBCqiivAdU5dbe4cfL9BtYyKCtsSsSremQouPoEXDQyH72Y4zraKh5uvCtPkv67jo8zFEHKVxU8gR9fy",
  "key22": "5HxV2LNjKUMBa2Zy49d3MG7rC4KzbDeUxdvFMWWM8c8Pn76gsoezNs8JJxTjpzQHJkhS1AVUNU2hqkWhrmMRpKto",
  "key23": "3tWb1x1DBt7dPDCvScV41He8Xq2tdcqcTcUWt5T5eij3DNqvk5mxcsExSgUPZv8x8Vo7cDhDge2m9HoxQWkSvCN3",
  "key24": "4Ao5k6wHgB5io7dmz4NwvCPqLe5pfLYwrWiYumKEJ3XVHWYRuyc8ANVgcf1vCGdZUUy7EUpzdSEBm2JuBnaKavuc",
  "key25": "4JerMFdjCuP92VTPoK9bFxcqFidPFfrQ2ttJGcDN21PLMoYonNpCDYx4QQ8QKoHeGWsR67jEMYHemC9cwv69jG85",
  "key26": "4HyShNMqV1S8jiy7RbmBKtJjp5CXevV5vNY1q1ZFcwBFTZAFqw3JCS5LFW1xUz818yVBLhbanVZjuD3zyMygtAVC",
  "key27": "5sW1Vn49SVmD6qYAxogNDZv25TUd3dUq6mhUXT279e7nQKVGvug4U9GxD1kE9KmUsKzyAvmu8aTVm4rPSgctifEi",
  "key28": "MKbzjAzz6xycy7dXU7ucPauRQFxPgwbZEEwWoNwCazkT8LPBZEzMwVCU5p6bWCjj1hKuHbSJ3WEL89kwL9PmskT",
  "key29": "45GVgxoha5v2fYLDJ429KSh7whwDcY58uQz2gCzkGNwCfWp4oSZrtzSBctzXkK8USAJTNMx2TbovJW4v4cjzhNf9"
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
