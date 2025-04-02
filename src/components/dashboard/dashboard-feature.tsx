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
    "5d27sZEkxCNM2JEP7NjqcoVTCkwgfimyRUNbjrSYKsgpvezuecpac3FDk4VcrzaEs6kBC3yKYw5FdVL4yQYzUjYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqKMarRiU2FjMcB98KUa4N9cKgRBjwR6q2NHAADA2RzmBCPmxeeQ8etbRQPLgvZSYf83gDTHj5YjtpKAwU6ChHq",
  "key1": "5hfR1gXnjCGPG3XHL73SDFKXpyVgoCb7eDiDocsk61b1sABmhQbTkUs89hCBh9b43Pz8z4tdv9dT4m21QiaBD2kP",
  "key2": "3GPsoj6M3ANK3ecz3bsjiXB5tJzATHPzbxFwcrPb8Mc49NopkfgrqYLFPYL1JQUiPy5CLTyKzQYGVXU7Fg9ytJuA",
  "key3": "RsV1wwJsLBHx2tiCoEDMCf7B7Dnv6mF9D3RU3carkBcPUHYFrGe56jz3fnycYxACxQMiZfFvVvuvmVKDWRcU78k",
  "key4": "4p476jDhkjb9wUxMKzPQZREwT549K97h45EgaDv9w5imC7TxuZxwed2SmRJb3mi23eGnWukPd9s8iRW9t1JpbbJx",
  "key5": "57ZgDidtPFdqDmYnRdqmC9T4N87EF9vCnmZpAesjBL51jydhtgvpDWBYToQMNB16YMtVEirt5gykmiTgNWDB63dC",
  "key6": "2gKdDkrV267EpkjGyauiARv2cscMHc7pE9qk7rTrhWY76R7oSgphmsbpzieUf4ATFCPfJNrjP1YF5T2TbF1wWbLt",
  "key7": "4puLjnEFs4YG9HBaDyDWMuuNzn63kJUivgxSpzA8rZmHQfcacvdyTWCKd8YtAZGTYLJXMH8zJCj5LetME7yDPp4n",
  "key8": "5yfyhjJHPB7ZJ3pJsejbVssz5YpAsxasC33kL6UDNq6vogDFNXYxtvBXXMzgA6qYZnzVCTBoQo4kazsRwhjLQWrs",
  "key9": "48XYwxoqRKr3kdtb8hcnFBkV3eAGgrPYT2TCQmppg1yNAJGNRuBXJ9VHtXvdpd2V39YUfgPdt95NqX4Zh2EoH2Ve",
  "key10": "3TV76jeM7mLaLaKwrJRAgNHBJXJLxMdsd4R9xGx5Qvx9qVp2A1wJxwEd4hPtna1rMT4KSjqMLWoLwUc56wBxRbJR",
  "key11": "2JK4BjxQiU1D9Hqpa9VYLrGtuZJ2immcfSEToXkMacLwUKCjqBjzM9JqSmfAMHTzg4nTfeKFAc7fAf7v8x1EUsF2",
  "key12": "63wNE4aANM3Mfci6qxwjCkTbhe4rJCE24kLtFZE6QsgAhYiQDqKPEAzpPdox1BeNUL3NZGMjRMC3oTpNf13dGxqY",
  "key13": "5wunhJBEjSufok1iw3DuXA4dBuxCNkKkEg9djx9aUMj2oeUfNuMggzrRnsS9ujnDWLDuEwpiu4AgnZZn7fZ2dFmY",
  "key14": "DSySZUU43zm4m8sB9ER9bZdFDKARrm8KioaUaygj9bwabLWS4XdqKUinoXNAL4V1drDjHRPfr55S2GnBvoweYd5",
  "key15": "35WWy93v4t5vrZGqsfgnPpBJ9XQwQL6ntQxSJr5ZpzprqEjLx8aUdQHxfRSXfi4pWyobBwQhTUbeEzTc8T4ZxHgD",
  "key16": "3YmmW7EeTmAHs6CHeGxtamJP1PXiNvLyWtfgWXf23jTWCkrF6dTAJE4uUwiJEVBetRi8PuYDU39Unsg9F5bYVqs8",
  "key17": "32RcmB88nAZ6vwFzSXLyUCmnxuZHPGPNb8WJ1CFJ6CzUdMP8ED9AvB1v2jwdH7jKqb3Wh7XTfaKPyXRABAada1fg",
  "key18": "388cXYgQpRrxUerfEjEX25jUe8Z1q2zY64THahyKCSBPECv1tmxYZjsJxP2p86tDDYoTLtqjutH6rkveE2CfEZL9",
  "key19": "7pL9HzKmavMKCPxqCf9TMFpFZbVegrS8Txc98bri5kSyk5LYnY4bk8BdSLnW1bd51FuthPi7DdQfHnSavPy8ejb",
  "key20": "tzFMgfBDC9sYTciUUwC97WaUn8rkPFFjdKyi89g45FYsnvsjLfkoooSpQGTDm8kpiuFzX3JrQnxveBvbwNZyAnU",
  "key21": "44QmYZeuF1t3iSLG2AegrMZg9VQPeTcNFRAZbGUrqR9YAr4UFdJhtfY4SQUTamn3Z4rrYxAghoB3PR3GtVqrovDf",
  "key22": "vFRAThzH4RhhnDhNUpXSiSFGyG24iVExGCx3KBWGGwnNoLDhDjc4SBpVrxw2qWCDgukyfvF36eeuM2ux8mhwHK8",
  "key23": "3CLza3szWhuDjS9hjGqh7NidwkYFGGuQwG7zQ8YiPP4M2trK1cP9opxZR73AE6gj1DGAPbWByFyu9RxKmjL2fF7G",
  "key24": "NmrgBzTMN91Q8DL9srHKEs3QkjUYfKcm6MzBpaE6XcHnmPUcT6qemehiAY61zCyRQnGkZXPBRQdcjyn7tBkwm37",
  "key25": "vwqYuoNWTmUWxaqFjZd8mfq5c3fKFJFxrghu7wQ54vwSp5AYLVeQm6smQQp8PQxZiQRF9nXhNKcXWanFR48a2ux",
  "key26": "5Sagv8pjfXqVyB6Y6jEaXaBv9FEsNBz2nSCHgTzBbvJzyTQ5juWeh2xdaBTFX4XTuWAr3W8iuYcg2uLHo4tRFLJ6",
  "key27": "4QTMGRjc22eYW2m82DxHoA2RfF1YK6YJeSE9VCX3fwD178dbaLd6v8SG9QCBs1qbvndDXCpYCoH9o23ZKEXZfgZt",
  "key28": "2rQ2a3F2Z2eLRVu1ox5X2jXW5B4TaBgiP8zjhvAShM6LQFYXWT9QZJAnaV3Ckkuax17YdNdmfv6FpieiNpHVoEjg",
  "key29": "2F3nG6HZjsbDC8tbi1PJp5eL5Hfr2qLRWccnuvjLxVuMsTa5XAnX4Qmnwg8whjDqRMhT9aPWryKEQGX4bq3GqyHk",
  "key30": "5ejy3o19M4CmAej3fZ1CCesUd34zJGq3K7JnpRmBYz4xVTUKZJ6vLk3rF4EJVRDazxX3KbiTaxqBGGHJWiFk7BbJ",
  "key31": "3ovyV16jdn6VvtK9MVZoKAyGf9AbsVjdfg7JNdNcTi8QuySyQghRZYrWuCAwDRbPaNKbXqn1fjVbBqizxPFPNDYc",
  "key32": "2rDCMArkrD2oXhhQkJfNrQCZuSf9RwVwGLFHLx74rEYh4QTMGqMiyHnmhgFNhWgmAepYdj3mp19iDEbD2VvzPNXo",
  "key33": "518meZVFzFqoFRygm54sHwGtrSGuNbGw36PEd6UFFLc3hqq8mF1HiXQQD9EEzB6KJyWQebcrW5wudoPvUYeZQesE",
  "key34": "2AyGkAPVBMMyJ2czzn4SRDjn9LHKzaQ14zgjqA2XbmtELopLXTbMnbQ3w4kkq7XgPikAuzEykiZp7efoqQxzAuma",
  "key35": "26RxkFW7ephmM6QCJSNwqQuJiPziFip93qniJqHroTxaorJn6TDDTL335keLYy6hxTrBdtmRZbUUAEAgL9MA9BSe",
  "key36": "3MGGoPCcRzyTiFEBGXq1CDjK31R2ob3zJopbszxv1isQZkfttXFHkTXHFURRMd3VfFRQ9MTUXcSLLP6T3ydLLhgA",
  "key37": "PsKx3bsm1q66XMXbX3rEnLoxAcfqa4QZ6N1UKksbHjVbBNg5W2hTYZt8nh1UtZ4jAsqvV6zB1V8W7zRfWPUXrDR",
  "key38": "4tacBB4dUKaf5pBX7CcZGXbFdHZCou2p2UwQYt6mWK2K9PkWd1JCAWC1UdfkhUrGpcHJscvqBUBs2xCrpHknRC5q",
  "key39": "3LWsNpQASqFXeGyK1bCMtDbm1vDwagWKHrBiiT2uwrjD4dZz6vpnraKMwDdfsphoB4ZG2AeahR12jy6s2QZ9FMAx",
  "key40": "414zbhPQPtXWmRQHx2ZdDekrvFLPVo2Kj2h4PDcwCswhpNK9yhiXPdaNpeJjgPcMTMifFTR95VJmPo4VUJHtoFLu",
  "key41": "3nvfStPZzx154wzFgkemPHGQUC3ybw7q9SJCJVhM7KKHTLfYKKRdEFvDVTqFXMiHHnCsK1hwj8VCTLW5gCuRiYZU",
  "key42": "2KuqDJ1TCGtTNzG8pXTqhHjrWW1gZbtzkj2UXLFHBsSnjbfZq8BPPFioAUej2fHgbcFccvLbtmkePDL6pkb861Qw",
  "key43": "3j5pjFQR7GUs8nLmKG1WyRjX8dKinTfPk3aRCsMAh3tdbeiS1tYf7vADnFbn54k1QzSvg61ED7F21EPdN29Yo5pY",
  "key44": "9LN6M45geCWyeaJqGyKssE5gnSFnxsE44jUXVps5RNPst741tGTWZJWjBqjrEvDAiwj4xguTJAN2XMKV8ECUTCa",
  "key45": "5vnAELtCk7cKJ4MHwhqaJbgeibN1rP3FyakJKgoWik6fK9ho24Mks6nhyXeYGDzuDLDDmQ7fxrZW2qDtkMz3YJv2",
  "key46": "2W1zHYKvEnFMCmpzmAb5aN5nsUYPfS853BApVz1qf1UXMHn7KrM5Ad3fgCWgkhUgeR7VCv4v8bpciVwsr7VSDwyQ",
  "key47": "zgh12cHBmUekKg6fDgzAK2cjjQw42jzLAaMUAzPt84rAoL9RqW9GeERmAgx1UCLviaJeWbWB99SHgGiP1xBS1Pb"
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
