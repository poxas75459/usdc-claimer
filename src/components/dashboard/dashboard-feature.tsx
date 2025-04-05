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
    "3ia9LMRK4fC9a8pQYnVmUQjGL3CaQT71mHh3GtUDmb87C6QeaneNEidE7TQ3ogeTsbo5JTYUW7xyXVmYgSyrG1vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVkYYSmMMTQEgXWBFutiDCtiCCu1yvrxyakfrEHq35hqtmWkb4KSEKZ3nCQthrvr4sjsYwF9Xn5WNBMrqWE1Qfo",
  "key1": "3B332KLoy8KeyBWYB7XPDLnCFhErYoxMuiwLwz53558jHuzptsN5yw9Efzjm8Ns5HZ9vgdfMKSrf6dfwSDa25i3C",
  "key2": "3SNHz8iUVR14brs69Rv7oWFnnsq13qP7bswkzvGWuY8jr35f9myfeYhcxt4iBhLfcED2CWmc61anT7c9juWi2N1J",
  "key3": "52JGLuqvXLGD5xayDrSQgPoRECkEmCPgqX7hukzGfs2Fw8zCR8bDJpzNBZGqnATSpbzViLw9CGuTNAGro5D3XPqB",
  "key4": "FaWykiJm7icRMcEzSi44K5YNiKvFuTvUoubKcNEitgPNGTUhh5brhDYa1kEHW5sdHa9cg3UHvBR2XZXdZaqazce",
  "key5": "231ZBnvBEDLccoRXXod42Qq65ErqZrQaUoAXQxStvoT8qkCTnCDrwbDdeKSkrCpSmuh6qTkyqSb7E9aGTtKNNE4c",
  "key6": "5U4hk16qxnb8xbwwpUDs1S2MfvEWiZ6zEY1GkfU2xATYrME34665tkcuSDMA6qjvxrEb88nSW1ii4mC1WCvTpdrN",
  "key7": "J7v1yU559R5V3AHLbQw93kY1HRWJGR51hXccy91YtgX3vq1ipVR7BgikB4E29UTj25M4Dg3Hv1PP5F6z4A4vnrq",
  "key8": "5VimDSw5EfGi4KvpJykDy57YseALxAHkuxEq1TVUbor2HDE1vefcnQ6gHVZpJqhZDKeYLyGepTttzzbjDcEotJzD",
  "key9": "3Fwg8kiYbuZvzdapgJQjchw5kyXn1QaP8jSJQmWh6B7jJjJQCJEcsMDQU72fN4f8yPmFTfeR7akHMz25Xt1ZuEyF",
  "key10": "5D27YDGf2Qb2MuWxMEtnPX54As1JFrsYGsPjnLRvdUNPQuCw7VBQ3p8DcntdjJc4YReRXJeSZaCCuHFmpdeHBE96",
  "key11": "3hJpLePppsL2kxm2mBqr6W37Bzf9ynW6uskLt9eni5mGsgwBqkJWR3Eg2hFxwTAHhR3DazRReN647cz3e1VNtVWc",
  "key12": "3EkNhyhCPh5ajuRPDC6xZ2cWVHhFB46EJL9b1DMZra1UzpHCguMuf58E4H4sAEUvTva17a9TtGGPPK2VkzKNCG5t",
  "key13": "TYd8rjmjRhHGVikscG5pRdXMk7n7DMzXAFmqaU9n2sDmspw3FVrywz1cipdQxoVGV7nVLUXSuwGvPUcx4DBd6jQ",
  "key14": "3T6uhVo8fs6a38TAtqQebAPbHGoxupo5yPMqsJLCereAcvvGQVtpZW6vKJtARiqSEfPmJoQ3dK7higDxc4MJuAix",
  "key15": "56senJuAS7Mfb3xtLnzmBAFhzvdLbeKPVShZHd7jNAhJ1sznjbvGu1brzvcUMDZpfhoMZNA3NVRTTV4HdM3kaQ6Z",
  "key16": "64VJcEK5DPB8Y2gRpo6uVfBQAvZ5DhuA4EmDd2oa4nAht7dvXFH1c54HdjD6W62TzpxoYPGUFcTHQhY8uTNpJqtP",
  "key17": "3hQNTEKgvBDqYvHEkgrHYQaozBWzj3iKhN3i9MfYwL1ndadaMPQfhNhb1D4ETRX4afK9XjMwKsciEuYib3YNsRJW",
  "key18": "3BWrh1DZRczrb8oUtWDL7nvuN2gMtRfgXWawpgXUi1wNp7j5GBPcUK57JfBQ5hKUgo3FfpABt1uHVpuBC4wqK2BC",
  "key19": "4EAeMiqTHxgCWdE1o5SCbsyqKvdqhBUXY37ePKH2nuuHZrsnGCfuvfMFQKY8dSB3G24MqPHmQdGhocMiSseCNfNK",
  "key20": "2yejSnQ7FZfgTJnDAHwDkfiKBaj4RvjQq8Z8CEhLeAC1Po79q1ncem9AHfCSJSnD4mSNePsKNBF2oBfG74q3AMxn",
  "key21": "5iZ4MT1oWvymbtuFspCTujYVpubcBfn22KTAe9PgCUSqKFdPuQ4hVywEPM5sCGp3d8rChTdnb7ozRzNAmajAHtLU",
  "key22": "5DCCmvMypE9N4FAet8n4msFzhSKfEWBFUgkzEF7i94xYAjX7dHQobMFWvghjnzMEGcZtenQXM9N8D2TmthoyTw4d",
  "key23": "2YTVKkqSvKGcv9X2r5ZYyZJpyQGXdQ5BN4UQ1HiEPzpHFPJC2n68LpELZmz8VEXDiAQ4QY6WdNqjimdCXBrqirGS",
  "key24": "4Neb9brYoAru6AZr2bABAhg7wYyWXrYe6ht4UB5Bogb2ji4aNW3RfyMWqWdzP6exFhu4L15BgRdYbCrAKoGMZex5",
  "key25": "4yji86x5p9e6xMFe5Qo7Dym5Myrfs4qovehHKdfRwFZ7yPkH85DMYNU9Btd4oeCCSHDpgkaE2xueuu73s2cKF21L",
  "key26": "4Q6B1sjnbv1MSKFv2fa8LxX1FX4yTTKFiiZmtc8E95pfczFKhm77aVrCD5skzLmoHwc1N2MTLtdtbKjmQEkAE2nt"
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
