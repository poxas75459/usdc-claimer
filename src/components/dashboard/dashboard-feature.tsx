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
    "2KDJCLYc4cDBSdeXDzQ7bLUWH81qwkLsqoZwpdxQdPwxar4cZZhCZLLLXqLiWiCovExNFJhLb45nAkQ5YcHw7FEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxp5eBbymHhuBMb1rhvC4DogNJQ32ywynNTYKsjBgCnDSW1hubs1jZ2QGHhTsKMCm5RsaQGrqUYfbbPpcpXpQEd",
  "key1": "5nBgMxWFH7szw3DKfVSTqZEsr4SstApMWZ5mSNojap6KHx2E3nsZECNQSeCY95Topw6LnWToMWtN2JfDH6ofvy3o",
  "key2": "3eZ4HjSG8LAyzoj8VVhWUrMnWVMBLyvd83xag5EkNNhMQnvLXf9WHbgb2jkEb2YkpeYgdDx9rFXsdvi7uoZmy4Tc",
  "key3": "3wLLsSR3mfbyDjuYEhXqYqXSkUTzk79jL1LRGFv2wm9RhU8WVkqL3nQnPztiXPataPAkWLJz9jYCNUvW1CSPeTmu",
  "key4": "2MTR69QwALaUsAw3jLUXqyn7iyrcnYdnYqBd4Q9cxERaL7tYjT8gQk6cd2scy5zSEYL2WkgZepesR1oKhDdBer7H",
  "key5": "rvfcRSL4DYVENv1dP7vQcWjynn3vYvqjtYkbtERdtQBNcskHofw9QgXQ2an5zncHQTdivoyTBdDsX5RQfpBZwSi",
  "key6": "4M3jBRw4Vb5riXb5i6PhDgQpWU1JCWxsXwNt6t8cQSiwoWS4bfCdo94sjbiKuZtGBwi4Qpim2dDU8HXDa51TYSD3",
  "key7": "59oaJYXkh44tBfxSJ1gUpShBa3DYdFkj3NKFsUvTrUd3dmLZSQ19QaP9PkXkMNXDvBSLqNAtZXsU1GYgYFFVzkFw",
  "key8": "5EiBwg7d6iMshRAqxTNSTpB1JhAemvFeaprYyTe5UokJdMPRPZTrGn336VNQkhQbpfjGn3qpLfE4HpyF8Lx1uvh7",
  "key9": "5sjP9ybhGntiPXxx3VsBTPQFf6h1pfToSNmwJK25kk5KPBJ6W3cxsDZWZvDppUz3WJo18Z6cXyBiSrzXuJYSChLn",
  "key10": "XKL4jtcoVYG23VFNk6f87BKtQEZefd8pM89io5qyEAbZNiafjGzFEYuohsVAmRd5MJY2enZrgQLuu6imB3U4K9k",
  "key11": "5FTHCkgBT4Ks98ZThRrLFN7dcxFVe2JBYGX6pAz3NNZr37JoeLFJtTuhJgtdr3bUiqK1yceqDJ7a6gEfPJXTyVBJ",
  "key12": "368P3kdetuuhv31ixahfUPoZgN4yjMfasi2hdzGpDwRcHEikkeWY3aGxEH5LcfVsTcc22ZrrEZRrm4kN8tLDahsw",
  "key13": "5itd1Y8TWyuR7Eop4AK5bvzzyEVFKbxKWuw7xXKbPZ2fjBwiXPwi2R6gY11m7S7d7VnDmmQdPuWUrZuaXGZuwuvk",
  "key14": "4iAxhZzw8xycyqtT7yV1DpCdRNZW5hszikm3oaWa4Zk5LRg3RW1r8Yy1JwFb5gRkHdh2gYapdP6fjwRY78jTgvsQ",
  "key15": "5PjD7NWXrjfh9Gwe2uJbGmdieAvizUyjWHty5R1yMqrL8zCb9zUBU1Po3meM4PaYrB6L8n2aMvJfm5nqGmGY8SGW",
  "key16": "23ogKoig3wDtQoaLEQ7zS4pkEnYmC6qXzea7Cfea2ohrrRFE5H2BuL4vKtV5yF2XpdgbGRxwDVbQGyMi4o9HUWLk",
  "key17": "3M6K3nxRPj45tFN9fNj2HhD8i4JEwwjmvPjtoT1xoMP9kk14XZZUcxf4DSouJk6227CWRAKbHtQ9c2MrsrfGhQjZ",
  "key18": "5E8aBEhKvx537aMLS2saFsASAoZk5EtuRPP9juBrUYDCUHopEZCQAbMr2Cu18zssmwx5f67AQH7HtLYiEyTfhzxQ",
  "key19": "5q1qYX5P5GrwQR86cAZfzWeZqfxmL75MDG4oqthS8jssb8ZEVXYDhB81nVRDWKfPRyhuoyi4mTapGzxTodCNa1sV",
  "key20": "4eDTsQBwi4Z2XzWL1hV5Tk9pw2Y4Ku1jWSvLBQRL5YQqjmz53KSHDmVECUXrjMhVS6LGxwmkZcmY4ek8sCrxUFgK",
  "key21": "5ei7KKycBaKv6QDCuGxkG1J1QcfNiwK63Jr8C5g4gf2p6pnAtstZywUBoyh31EnZyCrLpNdY2kEi3pxTqztN3qkC",
  "key22": "unaPHBTRKezkrNkohckby97DLsZfYh7mt5ZTDU7myxLsAP2Z72757vWHLddT5kXwgQ7Z4phGuJt7AQKTe46J9Hn",
  "key23": "jSEUVbc3JJyugbV2HLNm1He7iWrU4ver5aLSUMjYJZtSxJv8jji62gUtKHXC9gfZ89K5wvKPYL6my8FGWLXj3iC",
  "key24": "3VUrWfPA36nTj6xjUr4StZdaPTgCUM5E1T6v9aN5n5TusE3Sgy2ZSBkTWkqFSsBHdMS2WYiscPVDsaucyT3gUL9s",
  "key25": "2PQCyD7AZ8rdfDFcpV9hjXVWLc3b5fy2tDxZP2L9Xq4QLeGs1wibgx1sR4dvTXhUM8p6JwordQjK95dDSpz11zZ",
  "key26": "2XRoN9d29DEaVAAVrR93sRV2Te8Riie8hdvt2wpursnEXnFeGT4cqmsieaUuRp5wAgBFeDBRhWfT8vD2zrZ3P2vq",
  "key27": "46e2Z1NprRwvFotXTBSFMyNR4jqmevsD7Xc2U7VokzFf6uPPgTv2SD5FgWopKsZuhmdsV9HXsPJgCB5D9DZwxHF1",
  "key28": "4ujfZ8vNFWzct52eTunZai7yaF8VMAHUXABADapBVcwXMK9Zi15hDJ6bsM4TEMJfJbdxUsuGu1EipV5HTnQcqMwG",
  "key29": "gDtQvkQn87dc9hfNuLXCZ62pHHbFJzrniG1odApUgVemy4XZdFD5y6v8PuGn6oHEtjnKuwPhgb82yt3sUh3i876",
  "key30": "jenSbXAKmX4e6TJBXCoTK3VbFv8ZPaE43QgTLaPAH6ZYphJpW5b5GNaMKENJCSWywhyV33BXmU8CtScD47HsBTn",
  "key31": "4pghMYydoJikE4JYbtzzEBq6SxvcXJjkLp4N4gKgDUhixV6Mt6ZoERj1DojzDYLzLiCvGumskqitCQC8AmRBpjz6",
  "key32": "2wvTuu21mUgm7PRU2G1hFD2dUW2rsD3YbjUNToP2JW21GpzKgNF3J7YY5U4UsenoHE2KBTfXGnRUEA9fhHYzeQm9"
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
