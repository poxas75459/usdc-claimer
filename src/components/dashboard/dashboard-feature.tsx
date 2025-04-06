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
    "vEUtdHUDRdSWYBTdH7cNUji8jaYUZWdULbPkrVgowWxVgcqZwQ2BDhNcffdD8Gqut3nZcGuCeY19YHUb9yc9YmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxgJJCbE77JGQkG3SWPkvQKTKti6GmsDxNgr3FnqbeuQqK7JW9S6Z9GPHRwqYcSUeXFzHKShzZpga9qB4cA8wz2",
  "key1": "3rRvSrWwWNSmtr8wYziMhoNCHED899D5Xe5pkZP3LhsiGhPLWcnkg2W1rCjnriyrHUjKUcGVEXLi2aSrmfMjSM7a",
  "key2": "5cLUvPRAtejdfvZnCpaceQfDBn4RTnhSGiGw5xS91q6UDjzVqtR4B2wNh1vHZLVR1zchV6ZMnF1rSq5DMBQYybn",
  "key3": "5CYFu9tNh13PhErXfT23put54cCQQYoPvUU6byw8PWXjwZBEGbEUpr3A5VSDB1hW783orqZLcw8ZmPnyJWHU7JZD",
  "key4": "5ESSb81aVRMXFScnn73UFPqRvRCj1eECga2cGkV7MrctxAiLWEaqJFHtDaQpAHRy9SxZdw8bUExz5bsZLRXFSF2Z",
  "key5": "5j3EEcXsws1Ypjqhw2ZZzvg74LiLhvEcFtiGLT8XfwesAJ7xkchxAaC8TvhmZajSTixFVvd1xLBqVFzeoGBSznrj",
  "key6": "CRXanXVfdMagYmDSpZ2WAPzPj2sKCcyS2QQ4pAnonMu9ftX5eGEMGwxLwnborQNPTyFzvewvPVjwvsNQy8MgAik",
  "key7": "3nQdNW6BGiXwHTDV3o45WQBNTVjgQaPSP6fAzwVifJTjiLEcnKLEhiJSB74jvcZiWz3k1ywUwb8haJZf3t5qsRwV",
  "key8": "5Dg6SCJgV4gaZ1APoxsfkBBQiWWCeJDPLbosd5mywYKbzAd6sDpspPBpUZPnfdWxWzzgkCk92jtKRoVrDinfePBj",
  "key9": "4Y2mk4kfFkKKGuZqWNpArwZjN1rYueiLUNfquU2gFLfmeXUwFwrAe1xU8MnEK6oPWq2FkKHKUY5eXB1WgSX5FpV4",
  "key10": "3mrRNnMcVu4viDuNBEjUtqFqo6zxvAuqMY1d4H4ghyBmKHWB4NvgrFkzT8gdneJT8ir9ob9qcvCK1MztaLVnLERk",
  "key11": "tnDBiZ28VuFCUV3TvMka2QDBMcQt7feKgz2BhjS25vSRvywdnbgDYVt7LoWHPrLUycb53JGK34djTt4hA3HzgTd",
  "key12": "4jeTay9oBwEMBFudaU73BBnEYbAmcX7G1TMtX2iLohdH2AxYa4YUTP1TqWDdyqGmNFwwcDzUSbpoW33BeQnK385P",
  "key13": "3B6P9hZTH8E8GycBWbxFjCMB6cY119hyUwfiML9KGjYsrCLWNdMAFLLysbsnXixh7GByLkfhkXHAUiGXmLQ8ii2o",
  "key14": "8HUqeDWqGhkSSDtza3DuE7Bfaeegtu36SeaTUD4B3Hmf1HiusFeF3H6me4MgdktFpmE2J3WQQ4WsVYz7A2wpQdM",
  "key15": "4fqPLjq3GXSTHGtwiZUeZyWErwzjShzqm6dCKParQojcacn2zisDc8iEqziDW9Xueq1xoKqy8FZieqGdoKWRgtS6",
  "key16": "2DXhbnG9jn1wgf7vqSWyxvKYVdpbnrRrpcNwZP5kam8ZSCQjZRyfe6a6vNYnRxzhUF5ARLzSUnFg5CN4kxaVubdw",
  "key17": "4ejtLDHto6JTYQk2eFJALrevSk7ztX4QB2nRRqGQCqvAEJiKGyxpsyLhKMUGdnZT6YZ8pAMvHYi62xgwf52kDuvT",
  "key18": "3pR31skH5q4udzPJmWDRKR3G2azW1DADzLRfMmupHHqgFsB2cAM7rEV3EDRtBKXUhZjczd2vSs6uRajornBVemEw",
  "key19": "28UtcJz2VXV6w4XdGQ247Z5vfExMU5np8QQvcWRiT424iDAQV1vCLZDnC1W6voy7fPqB5LjJGCYpYWbYR3h56Tfn",
  "key20": "xJ8SN9PHPjQJ9Qo6ahc3MuEukaURukVbxZdma6xThcVjVZ3g3rZwaMgJvsapTQE4u8wQsKrkZ3PyE4yxiDDbQMx",
  "key21": "3tt4aGoujoSNbFW1zQZSkuwoiztKc6AVf695Hfh1UpFUMLmevPnwvdsYMgerEXGhZpwfXLuus3t47wvYaLHTKx69",
  "key22": "4xA8mqaq5UbQARNpoj73Fz6JHfCLArsrVQj95C43fZKSs3EbHqCaFBCFsKJLEP1j3otXaBZ1rSxiKbjcG4hKNBFP",
  "key23": "5kAhy9vHxmRz64jV8kTbovborPHeNiVsT5NEoqX5ns5vwgmLgNEsR5CGJLNJnEUCGqkRUXmzkJAkihRBmpi56kuo",
  "key24": "3k9rk4f6CFhkasPSh6qpiFdFPDDNW8XvLjh4Nq81DwdMJ56GCoM8JfNtFVusc4MZRwbUnPcJf9R7hB6zUXxP9k1j",
  "key25": "5tBvgHXP7qQvhRWB9dED1i8gAucXBcdydRA9oQPhVHiWsFNEcXiY9sCpezMQXTd5UDWEUVnhjJK6xQcjKwjA9SgJ",
  "key26": "3RaRFTWjDui9RT2sb42HkKStyMx7zpT7R1CLUs4ssMZGeFxPNB2CvBrPXqrHoWKKbRHHKkcAAtCN8Kr1EntF8YWD",
  "key27": "1261hhCX5j5DSiwVoARkWnCP8UUvQjaMe2UQUzFTzyJyKHDL5JeWSTMKTmA1anw97EySEA1j3ns4mnYYt4vguyCA"
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
