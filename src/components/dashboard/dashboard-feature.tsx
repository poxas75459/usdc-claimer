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
    "5HpJcXjjyNdLfuNWAEuaXUP1NrmqFjqoNQFrr63X43m9FW87dXGSpZP1hgjUbpm9c77nWVcLKNvJRUrj2Bfyo7mC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KLPRFkhfncAsiNrWn2hZ7pp6xSRiKW4SuybZJBNDP1chA9NzJTNWTTJkfxbN4fLepfLkr3GkuzjMJ2PQnSL8S7B",
  "key1": "2WMWyrc5pYv7PhLG95tqy3soKZ4RJcHMCj4TVzXqocgAYLGXoT7fhsU9GSBoZ2rPATjuWYAJ9myPoxoW2wYGA7fP",
  "key2": "2WoXJviCtRBSPG4T5PPgUztG2bm2QNAbzoPkwEjj15wx2pxUgxdr1LeKWzRvRbB5MEyMAnSZzVU4av415bZpM5Rm",
  "key3": "59xAhsLNqFDct9j7BPcBxrAGRV2AJThhXhGGpSac228YjmnCGtmatW6xEjKa4asYEnY5A3acpoBivHjZBkQ4Xj3A",
  "key4": "qmqQdrBCWdagyjJEucPicJKrvoR6qjfiSHHccn2ifYhUakm6NBUNFm2akj2xX7KUqJUQ3ggUoWNbFKXBrkSoR76",
  "key5": "5obyCCLirLKFvpxPSn1UbcnEX5H8nXEhnX2Zs75QekTX8qafov5yAgf14YoiecGwFtKBE6Yry93T1HxLp4eQYDGQ",
  "key6": "2E6178fpgEWG2kkbNBsXkzr16yFqxubdvNSoL9zgsETvbAfKCfe1J1jgcmxFNnZovTVvZ9XEXRQccoHoBBC22o7p",
  "key7": "4HC39WU434h4UcMHYa4YY5tpTcMwy4FsHJTBRqrcvBRpasxdaQ3VLuUWhvSKpLwRKvpTMrMkuykFY9bbnGePLfE",
  "key8": "KLAeoSiY6f3iSUtFT5ELsKc6VxZEbEsqYzfCPF6xKrMgmhPuXpUjHZXYQuYRxZfWzCQHBrGiwKUq7k3UDLE2Wo7",
  "key9": "2bEA7qi7W9K6ooZoAMC15nFUm5Urgpu1wtRnUWs2YJPvWZV3tpfMBztBs8kZLEqTEp6Qt9jiy8Cgyfe83a1L5nHL",
  "key10": "cYqWPU79z2zTGEcw1G9qYETdSDf8LUuFYKqvTZKYr7CZskxN6mDtH7xw5359W9QthUR4m25Qv7dTxg2B61zFFPN",
  "key11": "3P1oYHWJHcvow3c8tpociMz6hzFEHiTu1DnnXDExxjrxQChNyoG1NXZNLJoWC7gxvEkUxiKxw59EN9wLQeoNpuMp",
  "key12": "5qsDfXkPhsyE9mrgok4ry5fHX7AzGTQ79uvC5kMvWyKogTY2k1PwdFTAfe4Wtb9hXedqUW4UmaGWTr59TDarfHKV",
  "key13": "2hZuW9XNWvsVMGPppnGjmV8kLXcPmDagT4tepBzLy5oeRUZypZ7vYdMoJxxx8p3hanZdWm6HRtYKtzT3wmBhsKRD",
  "key14": "3ppTHRCgKSCpKZf9UnJY4hjTN3ysogEhJDdxGmc7THSuTMTdd1ChXaDeqTLBNUkdQHCGp9FzGPpn9ngvqjfW5JgQ",
  "key15": "2Xy4SwJTZmoDDyELg8GtbSRkjSJi162DG6HCYb4dz1bfvj1b3B6TaG8bgeCQhug3MbH9SggzN88tvistm8xzomqY",
  "key16": "3Ednb6xk8JV9wSrc5C7MaE1SNMRcgcGHdjF3G9pgMEpXDq6Rjno9PNw54sGqcrQj8DPrMKpuBksatho578uULLCu",
  "key17": "7dX8YVddxbkMujTWYhbDpfHCWfMQmewpKf2VzH4K17mjqM1AmPcsjjbiPFWmcpm8nrFqC1N2Z6ZVoLQ65LQZSuC",
  "key18": "5swVonetzj4Ri6YDDa11N4oEJb2BxqsctHGSge6CJ4LUbjaMfFHmRUaEYYVc17G3kPhGDXhQzLrgV79vzp9vVDwg",
  "key19": "2wjpx1wrL4mZjz2C9SeZFaUPy1zDkxDoKTZCuo2QMoQK2cVf46A5Bp7kmTnRC1g3MRwQSpMYACU4wKk85yoxLKuK",
  "key20": "NWPVPs1WUyA5R9rX6e3Kopm6vyF4yLAxx4r8MHXLcadn6gLMFN8o2zjmq5H6PpQbonbqR9gkdmQvqGfMK5c5sRa",
  "key21": "Hunf7amRxPTfcxzT2JSGDbS8dHByNkMrFYcEfxfV2FsEmXgYZNvkvr6wrsVSrvQCPiE6oYLedE8GahDpq5b6UcE",
  "key22": "4EQe3QT2yNAVs2sTc3YT7nR7zaAUEMkwUk8weA368feoMamEcGihtC6H9BicNcCuEEsrzu7TCde7RVsg7JvMeodk",
  "key23": "5QLLEx7AUjyVHNkiVFaK1QSbui7XK3HKR53DdziDCNHRfkCEBjQAMSya6EDxzynBNWZz48BqQRmgS67dn726fLen",
  "key24": "3Sp9cnrMS7pMc9tfwkuNuGeiv72zyT8es4BUQE6ygSteVnDE5Wg3W47z8RREKgLNsNWG6KSQz6dRt13twYnrNXid",
  "key25": "4YDzbFrTDrwJUjsgKUY8zG2fUZGPSQGnzvjWsHeyLzbDbswDMYmbYkCnqp8jfduAyDTgJhqjKyTUz8ff19qYBFhr",
  "key26": "34J6V4EZZugUDy5mMUa2tdfhuthjdeyWkTgv7TpE2VBrpJ3Jt2dDyYHmJK37XMJpgfL37kbVDtd2TyjfNYcz2Paz"
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
