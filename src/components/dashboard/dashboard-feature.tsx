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
    "2aEZ1ecbv254pQ2wRUPA82y599BPPmfKAfiw9xVAuz9JByMbwXEKKpBewg1mGDvpqrm1HKDbQy74GSZK6EpLmfEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ane9oKvqwEQES3xLVPSBhLMN9sGp9kmgmJhQ11tpAMsm1ef7GN3BQtYUuSyKE5CtzhxiVu6GVdEmSG55inXEKoQ",
  "key1": "2SjcnbraEsxgDqFsq7PA4sKK3rWw1HXjnEReaQaT1dQFmUuEtXmB8VXRphz9x35z8SpxMMCsoFFWBArhd84j4La3",
  "key2": "komNSnYdCTmDRMi2PwxQEvjX3Dzs6YQfLAvqrR9nwTXkJPCkQD9DBGHBXVC11VdSojToxRLnCRBV6es46JHiY62",
  "key3": "45GtpPTYcstkPNXFSV7dEYar7hyCqMDX9sYBFDYh46ro3nBuo9e2ZCLLSdZgrVdXbqcsMfV6Db7SoaAPEoU43eH3",
  "key4": "2en522kQRbPLAAokVxXUREiJa8iMMsdF3zsgJHsksSATaaErvCLmypd2sqzBDiBJNpo3QimEmfZYhGkv5YjgJcV",
  "key5": "3HinvGM41Sm2e5KPKUgcu9Xoav2XwPSJrDQENwhPYN5D63x18yjewZivzqTCt5Wne1JZtmB29DwN3E4j2ztdMA15",
  "key6": "eFMKLJmYmLEb74ytB6sSToLLrejVD8gKX66FXP2aTsxCPSWTJHNxjTRgS7muXfG3CTJyFFxmAAsVzbeBdhLW4VL",
  "key7": "4JLtjmuyMj1BwxxySm1Hoj7SPNqn6Xveid6Fs9uvHaTYdNkDvgkkRdrJtK5JGAdQRL633bPSgNeeozNyf6TK6Gzu",
  "key8": "4ESpM5xFKUpDpY6HGDrufcF68KbBTxFH1QhPCPDsHvFXMbKtrfNQEyGy6wt6TQo9FVJVhUqxqKksnS8sLkXbSyfA",
  "key9": "2bdHBJZ27QX6W3dbTavSMbTpPs5R49SzzxJmWEpvkRYE6fb55jTKo6fB3DtAbM32cgNfuN9kpXEUAFcEyXyccJhR",
  "key10": "2wyqhpBR4K9ApdLnoQqYiVP8pfJTNdVhjLRGLLt1hV3eUQmZ2QhNP17JGLAnGvAFzg9hUq2D4QDFCQxmKURqmELk",
  "key11": "4RXf4gZ5csvZ2wfyKcReJQxFhKuCTFQ49xPqrk4PVhuB3F6MEtgt6ojbheJdvM2sGDXEhmyg8voeiBb9EVH3Upyk",
  "key12": "5RwdSVHFSJzV2ne7wjwqo6uLUczJApED99XWaCf9KeSSM1yKTyVBHfwpzHvwHCy7mDDx4qw81Y7phe3WBXwhz6d4",
  "key13": "4dgqfGUi6dqDpAGCF4REzzQpJ5L2hEUa1pnNmHhWcrSChj6Z5kkan9YzgppCBRfFGWAqQtQDDvpz93uJXPiT3Dqm",
  "key14": "3c53T91e25LGKMPmLu2Uyh1B4Tiqjhrffjeg7S8oMLo4vhhoVmGL7DTsuev9bkbJgoW6QDoKyYKwWT478Xky2y9y",
  "key15": "3U7c9nn4Er2j85MMrYd2CjPPC5GQcnybm4YKuoDojZKBSY3ZPPwKnHZhrhoEYa1QphsBLfgg4S8dM2mPk3hiEC1X",
  "key16": "Z7UjsEV5gax13DUVbcdzM2dSr5dF4AqBenDeuh5tDJc7C8zLNQSPQXas56WUjhQx3XCfoU5PJSMkZT6SuBdfe9n",
  "key17": "4e834aWmPGyWF5nG4epEnwREtxc7oH7nNJDc7rpVxS8L8oXd6AdRi7d2ti4eqXXSe91bZaB6LLHsnj5yCV5txURn",
  "key18": "5vt7V5MaEYmP3KSg3hYD4cAorUsw78Ez3pwVfPvX2xcmCFWVTtX2ywzA65ZeeSrGjZHq4VNpETVwmCymd4S6YxRA",
  "key19": "5T8jTov5boSRLyMhUom44nsvw2v8qAHT9xDJBtCsUP91HN6gstaBSn67AnX4fEmKpLB9NGHkHkpHiKqqCp867T7V",
  "key20": "5AeGtKKiY1BCigkSyzVGyuvBL7dLQNhGim8kiDmojFgPGswfZEFYp9LKDNv38m2xzrku3gEqeJzGy85j3gY7MYXh",
  "key21": "gsdewR3FgvoK81cwEdegjijQcQVBhUGSwYG1FzYJS5YXLycCY5ijVztMBFDiadLcbpNnPJfSrb9PTaNdd2HhoES",
  "key22": "2C5cbBHErB9tSzhsgPSdHE8XgB3KYoiQ8y2vjzWvzg3ELcfwZQQYZAXdyK1qbdcv37XLXxpBGvN3Ujb83ySEh3We",
  "key23": "46wfiwbiEAigzMgG1C894UqLPvLRm1HfwcT8DF7uGuzmA8fWQRXDF4H5NX676DtKaR9PQoxbfvkXVidUybkmfmVS",
  "key24": "29hTWavEuy4qmo4B8YZLRShKVaNxwA8TTjaebdZprP8anDpKcu2Hc6oXAaMg7eWVu6XTvHyPjdTr5who4TmgUYbx",
  "key25": "57cP1MEGxheypqvgh3FgpM6Ca8qgKdHHRd4yxmyrDYfDyNzyUfYgTWbsMM4gJmvxH6RbFyTPPjJ5QWY1zQdbaDiD",
  "key26": "65o4HkNUDMbiCafC9jHdtEvapRLRmtnXMSRhNJTZwt4ZXrSipp4W3LMYy6crGkq88FStweVnjeiQCzqiTJ7WtpFB",
  "key27": "3ASKQyYBjruBm35QpHnqxLoN5zWkThwEgUdZnpttVsgSjPih2X8ysK3jv1kSB4iquVpMPSaiaCaX7trE95g98aPo",
  "key28": "4U4xVYbVSedimVrDbmB5v1j8GojzntVntzsJHDvrLwxEBnTnTSWhfBUvCz2w8rXkKcB9XZbjPoY3o1tGq5MwCVKF",
  "key29": "3rZAaH895GJKHkY3NRXFYrm3wqNrYdP4LTvVx1tAQAXFGT2KAuPvv8VYWwQNeTUAXrUUQRZP8vdQwkNo5RjgtMA3",
  "key30": "jzXNq6eUC5VkrN5jSbTLUumbTiv7KhDNbZhfGkNbybKetCfTsq5AobVEzkBntPzvsCT7CnuFQhtYH1JDhqCxSgm",
  "key31": "5WfomR7N6Dq9uB76oJpmxvFwzgLJiMGngJhpr9opsBfxXE51AQigJgKsUPc6bnXECe8wEcCA6R9fXqBdHYn6nyh6",
  "key32": "5tN1kibWWa19GUCtQeoj5T8JcWcSiKaPNsAKLh8KjDwBh6jgKrcKHp7DdmSu6cLVG4yR8HtJHRt88ZdkuncfBNns",
  "key33": "52iPLkBaHEmJij8Qww44ciREK8sRxjp9fg4faAfxdva9divfebMG9hxDJw9BdBaw1Y8Z4GHgBEBg5nqnisds4fzB",
  "key34": "tP98QqqT1TrCBZ2pvtJ3nsMxxT2YFoT2JV1zBAP1FH9d4kvoKb4sM1LaY92H18SuQ9Gae7ohHAN3noLwTvsywP2",
  "key35": "4n6EnxLzp3W1yRVFNBLLWoXpgfzQnWzHdhmyEknibgXYsb5nFG1oVzecktR8LDUgbSokzF8Q8RwjWmSbQB47jrQk",
  "key36": "qftC3LyN4FgghLLJwPuyZgUwFnn87Nati4brnEJVamVPETd2gi23RoKKSDfaETY31N6YzRJxzhyqXcEkL7Nn3wR",
  "key37": "4Uzcg7GzYT9addNkDQo5YJFkZzeynDN1Mvew5STzkKd7EZZBWZGMwHtqFps8APFjyaBFaW5kgaE9J6fm884ynrXc",
  "key38": "3qjFNbrwHD7pU8VDcGUPf4hp6A5uzfqhmwMRDtdLuLAMEv7M8nBv2RTsiUPCh8PMNpLXDHw2FCMMYRnVwC3cLiL1",
  "key39": "C1f9JaNeetFEnqojrsXVk4qXpia4qxzMT2kdnGozTPcnF2CRKaqp9LPoBeWRwPFPNd2Kr8LZhMGLvXrEqDMduSN",
  "key40": "3XcmGQuFxTdCSQgsQseSRQATGRSsyoY3vn4Dqs9GV84qAeKeMi1XJVto9snEBPs6DcCW3krGwarmw5KX5TXosRKX",
  "key41": "BMKJt5yne2sDED8H4A8RzBSGFRy3pp16PpcPmung9FLfaBgzNuMnpmmFFXTd4cojgcyKDELoD9hw3Lfr6Hp9bUG",
  "key42": "54oZ1Bm1ZBbM7Y8RWrKBU9vEdh9GHAJNbiZJRpmb4wUNQGG77w53nmiGgcHb1hZ3NfK6LSxmUE3dgAGMkgZfVX12",
  "key43": "59LCJskZ9VRgM4xD1JJf1ixx78Zcqd48gizzoamNFcet1xk8DUhfy15JbC2huibWgDdS6pmdgJgEMqEn5Kn8wiLd",
  "key44": "4JemFh5ZKj8SUibSpbXcCFb5B8YeW1hJ3hJiTSRujfsp1hSiQFccmJ8wcmZporXCMdNHz3asXrkZKRjWag6V2W4o",
  "key45": "4yjmsS58xbvVKJbXVZtnTu6Q6PiGwGBSMG2287pzZujUw7t5KENG12UmRWjfS5M6QHPePeivbUjdKAhZ2iVx8umv",
  "key46": "5jPUXNFw7ZEqsDMryCZHiJQux14bDy6Q6WH87Fe2gx5MRxBar3GkWUGGwaVUSkKMMBLcZyjCRuKPPc5abPzsihR9",
  "key47": "54tgWZwk1et2xEqFwCu6zQqT8zCUCohPX1jbi8L2TBzDGdUoZ3YS4fuVh2qrMf7E5PhBDDd1r4wBJVZsWquBYesg"
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
