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
    "5yqh3vREZhDVrxfBgrQCa3a8aYVjJTYSsyxMy58G6x4QCiMvCRfnj9Rji9qhAeVmPmXuxmWmedYhyYeHAS1MupUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52QBAj9suGUuaeaQaGssUyoXK8FdWfB8cE1hv595ovqvQTnV2yGy4uUQThAoLFj34qZhWxPMPbGzKXcQTSferA4B",
  "key1": "4PkmmuxgmNVNy6FVCMeCz81sm1e9jxZ2f9b2GMzTbj38rNJHYTQyLMPDL3F2CionEHyc29RByYx6ZX3xwArenRrf",
  "key2": "5S6rnaTVKLo7sysdHBMXT5vnp8kFSpRoz2RWTE82fwbTV3P971HAJ3jxMnNN4G33xNffbv3h8pn3Hx4UWznAMgvg",
  "key3": "3f6u45u9ACdTsfBfcpnjvmLmFESwxtfzGS7MmntVfBeSd6emwXzBRHPA1wL429wBAzasLYLDFEC5BrpqTEeZ1j3Z",
  "key4": "3TD6DLtb6SaMbD4vmi8hu4Yd6NuKSzo97T6SrmMoNaku4dVZXGEL1cucY3Qe742KYAtBuvmQGuGMmuh3CURdqtTT",
  "key5": "5dSaZrj53B3vH8oiV7n1vAifDNFnYXML96mjZZwaCjpYgtQa5LhQzb6Wn3bWd7y2VZqfmAuDSXU2CijYGbXQezMz",
  "key6": "4NmFcqHZwyeDpBNU9oPEwWmubktpc1uSpyWu2JFGpUJL4NzdpqkJ6vmyntiM9aLWWA7vPbauQEtVv8w21zqxPLvS",
  "key7": "3PaBD54hBouyniLucKvT9s217DzRrH4xwsPceyngwR2Z2Az5ZPxEwWPGGtxpKCVJoSJiVv5DbCcbFbvvcBQ8CmmD",
  "key8": "4DkTYJbWpwHFAHF1tReQY16SuGjpuBy5AF3YHXgh7c4pEDNm5SqGBjhTibhUH7SoB1AyFUhbtG9b8UhH8sV3VM2",
  "key9": "5d2GuS9gENUf2bASTGby5eDHM77iFdQvGzXdiB641pb6J9jDpg9tnNMd3HztP5mQ4NRuaqu5xi7zsTKDxtizbScW",
  "key10": "3XnoF4r3nipUCYMZ94TZe7Gwrc3wsRYkAZrbd8uno2dTqWAiMFxvewaBrvsh9JtEg2wiA8sinndBkCGZA8Bf3DLp",
  "key11": "4nzgt4SLZBXZKSXB6hASmD1RnZWMcED5Jydj63D1krBJRH89JwuDWNNN4CpjP4P5peTgxYwqcBBmY4kYBghrPwgx",
  "key12": "5iKsoQFAianQ3RTKm77U5s6ANcEqZtVf3eENYpxn6jArJWkQQ18EdbHHShaV4x1t3gDGJJfZzxuX5m3psVob58Fd",
  "key13": "2ooAQhKzLcGEmPCDC6hNRRuchjQK44maHzRD3mHKcpKCLNayu1QkapuGJrikxsFwUnnu6DVGBsat6rtZBYCDmZ4a",
  "key14": "4HyGxLv724LspLMMZAM7Ea8ZYGdi82KuThiR6qfcFRCXRFTziP7Q98sFdavbW1sAtLFhrs2JTj2rVg2UtBxbyquK",
  "key15": "3pj43EEd3vsHMGBSbScyHBwyrbwhGrcwNJJke2NoWCqeJBhhPhQqxJUyvRyezt9dt991dCFkDJRTrPw51eYHMzVh",
  "key16": "2fossxvYFACn9mo4RGiuffS4YptC6zSH28HBtWdYfZbnQXZN44nPaA4TEVS4QQKLkiahqMo2222FCUFAGdKphXcp",
  "key17": "2EFPzbhRfoqVFg2L3ETd4mZX7uUzjHAc752vf7JdLMGzNyXZ3wDu2iKZEKzrKNR1dX3FZ79spVCxTU8Le6R6mxYc",
  "key18": "2sNC9bY41nCRkAgG1KjLTRN9nJdYPjG9R59sGjHsZ8kjkdKfsmA1WeS5LkXExPNAmezSM5yHWZNyPXLpQ7E8Afq9",
  "key19": "4KnLn51Kn4KUoYnjjApzEiLALtpMWY53y5NX3fqAbPtPy4zT2VzXRMNERDJHgvjBBBRCiYbLPpAiQTLHS9m7Vj8L",
  "key20": "1oXcYJVuN8mBsvRhVTiWpMxh7a7xuKXhEizHsBZmNyFABPQMpyWWbWte6aP7ge3ntLnoMqqBKpJKegkzsPjvzcX",
  "key21": "2RttKpumFALuze48nvrYSHDyuuHGBM4GBo3btuzn3MPdsMch5hyoZUUDn254bHgWDHBNn3JHvJMBW91x8GqAqz98",
  "key22": "495LAMqrK4Kns32Lzq3BnfTZtqK8JR6gQ5yw7q9mJ27AAX8HuweTCwatbh8MhJfGsFnmDACxExd3KPe7TFJEyvgh",
  "key23": "2cKKVPKFBXe1XZsGGgoCd1RWEZCJb1X5KfivnCGdqKPkA8yb8AWa1XZ7sNuyda2PayRsmdPXLt8iRRG7BWZXJQRg",
  "key24": "4mXwdyhUBBQv3YF5eAsYdSGLEW8g82bj3fDeBpom1wmAyfXnPPhtJwFVE64mGEEYrk2mEXYuVBUkS3fhjVKGdNme",
  "key25": "67HSoo1yJo7nrXJRp534AAajjLp5G4SJz4s9rjH6b4V4uygHM5yvBWEfarAVqb19xEoMXdqwUTUnsX9ZkegMuHdz",
  "key26": "5xxGSN5xQWr89mg75oGK5187ZgiKR2DtDgoQScKLtP4UgM3g26ZSKy38kMpQCcwJL3yFKa8DnNuhZYYXLGEzyqLG",
  "key27": "5y1WFvgQfsM1tdYuPUTmN2kfChjZd9dcw3rA3foJaygvrW4q1WFUAeKMGYQ6mCpofemWSPhJGEckX5Kh1EMukBjn",
  "key28": "3xWMj1UGYDwzJB6iptEcX5WPDNHKrdK86mVycwgjJtaeSY4HwjxY4UYMbufTKWhzUy658U9rNNgzAq11RtApdMHj"
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
