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
    "5Pg7dY9xqpahBNaFWqqYrSL24qNFyorPZGHmsF5tWVrrcCUNyCKX2D1ofCsNwqzjAqQ6iaUS8uoN6x86u4vmhk5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d6DNNKJRSWuKC9z9SCzXnYigcLgdYzuMmWSxwBLkAgq2mBBSk8LuCspW6LCB7WyEKdjuAVaVVzFNhm1GNe1ZG4s",
  "key1": "5vbiDBYrBjKc4wAUL3qA5xgMnc1AhizW9k7Xbsn9jKa6XCPddQc37C8a1oCH7sN2RmWcKHHgbNbXJqxA8B3hdLDX",
  "key2": "E5GuSLfanZNMGLb81CBy96rCVdicnQ39cc6Goy5fPnKnJcjSDC7J9tWcQV8GPDHccsQq4bQKt3Q3fEdfFhYHjni",
  "key3": "2tJCdN6uULs9JqHEFNhNmhwSBMDUQMkaTqjY9yr3XdauLXoC9JB91faLZGotxX9bm3ZXtXqJfnCykCMjfEVvaPoM",
  "key4": "1CxEUuUyhzwybsRmcnvzERWC9jCSLwEVXD2hCKYApV2WpT17DK1cAhWCRUTYHVkVF79cPEczyBWgiAoSVvANLA2",
  "key5": "2stSNoUM83eDDwQ4WAsDZNQa2cu7eXU7YofFd9J7LNnSAcbRfehyi4NwnXwXA6GMtAHLaXbniuNaroX2gkiHDu88",
  "key6": "4Shs1ySiV9XBUZgsrA6zstWmVS7im2kiCoWMvn33Rw1SypoY5dG5nPmx5VFnNCDespun9g7xM3mFkVfrbvMXTgxh",
  "key7": "5ckhAs1Tu76jZahiPUyodxCPFQnUS2jwP7DHUWzQ1d1jiaESx3DaPmB67LsT1dRuDgNpsYKQnQcxZAtZptGB5nUq",
  "key8": "4GUWZgyRa5JncJ9hc5dQPvFaMWVAVaFJBRojwFSjtckKyThj1sZHxGw2Gndks2j35oUN3Yen9ptG3Kzi3oqZ65qJ",
  "key9": "67pahg6eTtaLa9mpRutRMnHd6ongwSzuT4JCVof9Kb7MBhpinwc7CPe6fGn4zsZpZns2zz8soR4P2qnDpTNr6CYK",
  "key10": "SqKSSoUuR15yvmezuXrzrt5UvVgrTL7vGkaGqDCmT9U9GvvTTYPuz3mbc7vH9dnCPTMqKSxUM5QgvCSfDkgKXxk",
  "key11": "4hfqVfNcvGq8nKhUuAdf68TiTmSE1iaMBEcTfCb92P7D9kiVupSPv3Md2d7sdr2jHNWFDQkpzCZtybkWUD9Fva2E",
  "key12": "25ADPWkESFbF4pRse3ny3kW4uUDG9aTACm8rfAEsiNBtT4Y8azGFmu96v5f6APzFwprg1KhMWR1KGjeTpEEeBwWz",
  "key13": "2qJ7BRYtUksMZUfQGudEW5bs5nJ8yCi3gN3f1EQVXrFZfRKLisxMoaJNBVDzQkVFkF79CxTEE5nn8Vennsi9R55V",
  "key14": "2Ar31Wh15bNC1R9Bw6FMpptQRHwze3Zkma2EHAmwdJaZS1jxmybRpW1m5DXmxRwP3ikUXnyAcsT9vxs462pa4aa9",
  "key15": "2kyMcbuPUJhArSGzH32pCKKhi5eV6bR8hj5evTKADP3pZeYuwyR2QZ4XbJ2MH95a6Mnsuji7rBguF9pXo5Uv6duY",
  "key16": "38FKeM5mNknDtD5nh9ozGsVRsBDcYHsj2UgMpU7B5DF2nTzchRPjAjJcmkN462o7NcdPwKPLUfD2UeUYP6F286WW",
  "key17": "6u7k635TkZmRujGWBMFPDiNvtrPEqPDxC9p7asix9UD73LEhUe1LX1UZBsrWhxDaW3yNTiLZxTatKezmeiux6pf",
  "key18": "4huKyJDRTrGvzkGGhnvnmnA6on4xgEHF1xWcDWvoic1PCDg4tFfRQpEamyz8EcSbSZ9XfHsTdGAaUUr4F2NrRLNx",
  "key19": "2h9oHNzVumFTizd7twJJX4SURMNE4HqMPPoyduk2P8EYKrjtWF9iCXM28gJNVTiATLhfN6LLdzQocE2KxcLe4b9q",
  "key20": "4hNdsifB8DbD4a6P43tfw3iccTMRdAv2oDdEPbtRW4Mxct5jGM5cTYw52W4mUFyRo9fMSSkqw48kGCRNFvdVGH4e",
  "key21": "4Hev9zXgCExM6sojV35myDi6d6YhqZgubVN4ZqsJoVU8vkHM6r6BRr2nzxBwNXZ1ccLF2iAcvss4mmYTCTACQ4ko",
  "key22": "xyXtx5QrfBEXcr17YUU4ouBcAx9nrX1cDpHJo6iArtQCddmoRaV9iUwpsUGZhFvHWN88EMupDTFw72fqni8U5vA",
  "key23": "2R9fBJRb5nXGEn1mPPURm9ksBXpbWeowW74vvASdAH85kMDpZ5qhPvkmcdKCZMSaiSzJCx8cScib5YUJKXZXgJH6",
  "key24": "SH9aPmwCXd87P299oY4u7CaYZ3fVujNFMbXWbbk943yK8xa2DDNPNGPyegzdmkmWrX2az1vKpSg9w5CwPcMW4bb",
  "key25": "6aAaR6Cme4nLCcq2o2pPK3ht8vLmaJsDTxtcbxmKRi9JcHyFCGGEXcpRbNTLNTwUsfhD2QLEcEbYWJc2QRVyuEM",
  "key26": "4Z4J5c4GxUJ9LwEGcW4shGPFkp4mZxvZYucuLy8G48tCJ4xWJ3jtSfPsqKLsuDFbQmhRn83733CKFGAjMX6HgmPU",
  "key27": "4eYdGzVTZmikmgS4JQGAU7SsFws55ZZ2ECxpFt8UxzfmKf7KxZEEa6DaiNTQs3YDLT6oVr4HJEhkiqF5EPk5dE14",
  "key28": "5915cZhNcfepT7v8c1S2soU3z1eCuiUTXkuW6g1vrK3UA5BEo3ey9X2zDKP74izLGCFCsVu5WXP7o9oYq8szq2eL"
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
