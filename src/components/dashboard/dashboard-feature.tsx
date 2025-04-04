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
    "3nuUwrWQpmevCKsBLP2o5MqZZti2kB1H9iACHfVhHrWbZvU4WCkcRh5kxZKLvy3KZci9VHq4FyP2cuWbxYxadZQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idPoiZRbGeM3BTtXe3P5H1tEUwdX5YCAVgMAYYvrJUPdsovdH3xHsjq1wrrqz5eHQxQyz44sE7isfVXQKbuSmyM",
  "key1": "z8hfgEKCgNYaLATK1jTMVHSt8UAUqN8Y7vb7PzYU5AtFTcsipRHoVrQRymZwTBX6srhyHgt6CCYNRiurywc56z4",
  "key2": "245gy1dU5ns7BHobRsXfc7XYRD4bgnsGh7EBrhNvdDo5B73Lovb4DjexQL5uiaRZUiyuo5iXNbS7jHG1xu2Hu8CG",
  "key3": "5iMcc7pUGbjR54e269g6L5cnqGxDf9w9Xqu59i6QAYb9YwM8xanwJmYcj6xWJLsNWjfjw85bnu179KHTW6WeCa9b",
  "key4": "42FvYgpptLS1kXt3uFjp41QKrZFFxGnrauPawGyWnaNhWGdiJjT3Av4uS8H2Dwvobg67VGWPWK8UdR4DXi52rswR",
  "key5": "5jMtFPxuqfZgPfq1LNZwj9gL8fo1nCLqLk1J8TMTeLtKa6LQFL4NXqJvVDZaB4PJGVUxDdNhkYqDj397SoWSi3Ax",
  "key6": "3CqUpxHK2Zvg3iBoCMdC67hi8NJtCWJ8TpqL8SHqUyz29qJTY66kevY8YDVWnVKEqXdatNHWjWeJ8jZe2oATAjkA",
  "key7": "2fSEHJHf3djx8V6gxMhdhSoTDgcFrcJTt7GXKAa3wvA7f57Lty49MU4xsdMH1t2ry8ExEPFfdQvHZfhtmaTR6vuQ",
  "key8": "2Apit9TYUairF85efb1Lc87B22xZV77KPfZB9TYS22Lbfz3srHpX4KrRruNHhCHAF2VjfLSqAEZd5gLESwaHzDUo",
  "key9": "5L26xXVLC3tKWMtsRrrx8qfyUngoCUjPCcm22pMjzUH7cAW5DAuMoZmExSrtNdRbkuajNoWgCVxXWWLsaYzfGFWd",
  "key10": "9VU8Wd8EZobDUfHgeELP62JXMPM7WsjGYJXCwPkvmeyxdM6zfhccYy9wLxq4Vutbdzo4Q6hr9zHVbGH2Y2jztST",
  "key11": "6TabUiGXqQVJy5EcHy6nC37hePSKmPJqwr7nJ7QkG7nyFFKKwwdryh7P7LNxCMNAtUgzeNL6MQk9pm6UA8Spnoj",
  "key12": "5JPCA38M5sFpyGptvmyorWUCu5c7pcr9cF1ThTXjM4U5wNPX8CucERpZ7RWYjWrWMtzAFWbjPm19ZwAxUPJhPjrq",
  "key13": "2mPegByiYotqb5pHHTb3K1XuiUtqPCYYcJLavQWzdCYMdh1iQE3Jw6wT9nN5SCu5JtvmGkPc8BohAdad5XqnRvg6",
  "key14": "YKFwsckXgavLeQ8phy8G2UmpdVbZsqyGwaS4apy5pUyh1B8SDe47Vno9C2C26jUvAVBu3xzJDaBVRL5PYDgCdW7",
  "key15": "5ucmuuGnoa4o4CGE3Sva9FRDPe44xgyJ9UELv1C5HTbWkMqhaGUSykKJd5J6JPkuGLfVu2jVZkfyMuYs18nyBaD",
  "key16": "5jZJTxNUWPsgEf74bhfE6S12NXzpgSmKBoQCQMSYKGD2TkUbxHB3PgKA1ui4YTf3Hvsgpv9rLViy3eb8cy6aWxd4",
  "key17": "4eByoXJdtwtiZwkeWqSsq5AVvMPPRzvGPJ2jBAD3qhivPtPTwVzunBdbgLPQZAEVkWKLBbTm5ud3WAkcUVFLfrHh",
  "key18": "vVpaTxC4Y4x1YV5vE5Lun2NWRP7Kw3Y5RP5xmgTineFdtf6FCNJ1kB2dYoN7GFWRktqUGxwtAJzGkrXyzae3w8a",
  "key19": "2MyB2jgYiRsAnkpCwdxYNXVxCd5urtFZLmGL4LqZz9coAxw5d7m9siSEgYtfmvS49Xjtrh7XrFhhC4NiHryLihxL",
  "key20": "4VXgTNHqWju2GSNSRFHztrbefC9KKitYFE5Fz5f8DDyU7zfzgtW1v1kMdD3jPaQY9s9NgbietA48ceoBSe9b6gLU",
  "key21": "ddJiAn5uUXpU4nS41m2AQMv9rRkUShyXP1bcRmrn9xgYC84KcbknSYQxZ7EDvuHLtQSyCxvV5s7HFkH7QUooWZ8",
  "key22": "2nmYMgoyM9nmFjMm9xga1TXDk6rjVDM2Axm6KVy2xpCn8JcWeUe33xbbqVNVgkuCeSmotYk5igVmZo7JeehvVQ96",
  "key23": "4T1qgpqHF1qnXczYYRQAU8KBi2frd6VzBbCXWCidaZbjHz24jR4fbtVM6Y7ojvPBG8vnJt6vwpcBFYn2RZiaQLM1",
  "key24": "4WxjtbvdCaYht86kFfSfGRCjRYvnJQ3UWqBSjoxjmGEwBbRWYaqxsQVZ5YADF2gEUnAd61WmZNdzguGZ3VStXYnR",
  "key25": "7ociwoE6tpn3YSpEv53GUEgimdKRvRZpcwgYeSuGUYTg23hx11gqoWdD3CXX5t6GVAimHWuEcoBPo5UgmBxKEd8",
  "key26": "4ayHhxAAn8Q4LYnnkxKZ8Pd1JWnCUiFg2zYN4HFr6RnJvXDNgWLwdDgVAWUbEHKZRxXAAiaTd2tTMso2V8YBNjtT",
  "key27": "oHc5H5YeCz9wJs4xFP7ASzR919QJVYXTSv7M4ULyA1o2wX2bkXXi4NEjkGy11BZkocp291PyUAbDTjm5WM4cdja",
  "key28": "4rVbdLFLYLBjD4WHvBzBKCzBWbeUiMt48L2TrkEnWqeFeTRKmpBgvQcagaaYTRu8p3oahSZiznryDYmDGicpVcEX",
  "key29": "EV4SRup9Tm277nZYum11Qx8DL5ZoL8MWcsRTBhQAoFFk62mmBhcUDHXtt5TTvJRVNJaWbXX5iWfRoofnYNXc3V1",
  "key30": "3R55HZuzYqVcA9EwdfUPBgdDtH3jDe7nr7N1BHM6vRADdv8gnn8WRrQ8QLiZJNMwYUXfatpp3eaoXV6f7UL7MzWT",
  "key31": "44Ktzbmiuj394Cx4MLNXbG2XFbpVCuxWKduvkvgd9KGph9axGSgAF4wCqwRxe4UfgzaPfu81LmwFAKMgo4yoNhnF"
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
