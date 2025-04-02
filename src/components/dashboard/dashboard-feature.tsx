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
    "UPrCmTATpTrT7KP7LLxoq7ShoQfVL4ASAfyaGxVkVG4A5MiF6jbfpektpGSG9B7Yi2SGX58Rr7c6EfCp4VJytTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ned2R2c9iMj7NEABXrbUQ1FoR2TR8X8VD1ErxG3etPCEKFMWpnWEGCCRidUuR3Kof6UG1TpXD1eBBMoVi9pJ2Mz",
  "key1": "2jUC9MS1p1LasZP7P1kYofu3SnG8JntY7nmSSr3VT7scezauecNwFNSeiufCYeS3gkoXvpRqYQcAjAY3Pdgxz4Eu",
  "key2": "3HR5vDTzKek2a3tYVUqLJX7969FRztMKDjhA8jR2ay5jGxjrgKWoaJSmS36AbS428JR9hiF89a6pK5cmNAKNHKxK",
  "key3": "4CDioiTNfik1UR694MnevcBp85K3XyUtRGz3HALQFuTGXG9xUeLgRtuFMGinLSydxaqbvmWQR9Zthge2SLLuuJkd",
  "key4": "3CqVkqATnU8CLxCvo7NP19sM9KzcvHxTccPV31zKfTakfPE52oNbFAXGd3w4GXJX9PfpedN4KEs7Ztg9hvSWDxSu",
  "key5": "53joUnH7taWVe79L5VV7SS4EBVLsNfs3cFQtXoNiMmptdK3Hjm867eLfHVdTxnXaebsuGjydBEoBwNr9DrwaPbSo",
  "key6": "2X4E8d14ien2yUTMqXCtCg1vQxSpYHCoS94VfcLe8igKHXP5dtGmBhJscs2tfaC6VitLukyREUL6jLxVR6eNPeBq",
  "key7": "rV4nwSZPaxuGXRwnEjqhS99W3aS4VA53VzQTLdGTWRjSgYNYaSCDNBSxUsHMCvmnZefnmAj43kgvNoQyVg2rB3o",
  "key8": "3SChaF4HRpudadkXWZKBnRKFVpzBP65kYCy7E9aU1rcCrHXfZNcQTMhKuv2TgnpZZz6NxLVWDwNtTJFcNXx2kdBx",
  "key9": "3yMwbSPL3TU6vpVMXpzhiMTycVGkwjqktXSzFiFL7je8AZHpvQDzjEz7AqACa7cmV2crvmAnj8kiJRfUcfmmjDr2",
  "key10": "2wWrphtUy7ifk3LGFSPvVFtKYwVeTQywRJaQTxANmj52joASmYQegCrarqifHQ3VNHFFqHstMWdiEwthcXm4JVcH",
  "key11": "3DX37Xew8eLLaH3HorcdD818boCb8ZDMM6J9ZGDWPCBgSYyZS58Nhr4dBqugiaggbZ5u6LCKBsfYG2oqd9Qjy47W",
  "key12": "5JUR2ajAgCUqNyLV1UbRS7yPYQ2uHXwiLnS4dTzezvGyizCkeJr2ox2JBok76jyQqvD7EEhUyoYLU76bbVx55pC",
  "key13": "HXL587sgkCZzbi6mqufLc9NcJ5gdvsaPmQXha9tZ67R9VrrKEtTT5fmtzZTrtkkKk1VSfXZjhkpqko9sRHZRC5z",
  "key14": "4SBFprioKCfHZ5zAi8VCs2i2476WkabSSUvMf8raLRgfDxqtwrqdf5YeznFHikqx2diJzFACmJ5u5euxAr2XAhGt",
  "key15": "2oity4Xy2oFHyf79sW5o2YNcU9iJ2TCnbzTF2gaZBiQY7yuUJoKoRaK65mPEATAQKu3UDRFhsfT44ZaAbV3rwjTc",
  "key16": "4xJnXhwAMMgoWu6S6beo94KqqcecR8oTiLNUG7upMBs43DD5invMPtEnAKHSYWqyiaKbtNJJmYRjRNr5rd8PufKT",
  "key17": "4C23hohDg4SHUSZWe2eBCXUKhY4CrZjoumZ1J4YtcbvYAFPA8yfYxsW5Umh5mmkNaQAdM7uytseXKfXvDfKJmYqn",
  "key18": "565zoUbsNZ174HaMzd6ZURuinWqUfJtbDXbbSdsuAubtQmHYgwEW1wpuPiejFwP74HyYuptHahokigMuUg4oPgBd",
  "key19": "5csyF97wpBuGYEL5jb48UEyLqCJvbrFiNMcJCTXJCwvXf1GxPbN573DwrJi5EwgAqdgAwerXdqEzvQD1ZCy8N5hL",
  "key20": "2wC3Em6qpgymJA3xk5tVykYqpzSnT6m2rhqx5nUk1pKDrVNduUMjNerdzuTCBaHmPNVy6L56pjPBWbiVSXdtKNns",
  "key21": "5pHHbJSDqPudSd7qKmXkowyaNmnsY9upLz3ATfN4CbkS95wGpGVnBCR61Vb3H8oKDvfojoiZLRv9Bwf7QJY84Wrj",
  "key22": "5ujZAgFpWuEH3j4bdFy8jdcpf9QBJhfVpaBZfaqCU33pz2uuaUCCHuyHZ2F5BeQ7h4zPaPjSRGMxbpBPQz36tiQK",
  "key23": "4bX3Rr1kKuXRupfBHv8UTFF8fCXmCRHamcoVximYocdZWBcBsraVwwREu4RWe3sPndXNbnvRag5yU3NUdB71Ec6k",
  "key24": "35YE8hzrERxZpMwwS2ZvXZkCjUfTp3UjMNB1BMEHPXkeboDehjDXS2htYbhTptkw4DK8RbuzNGDChPDjmfuyZjFg",
  "key25": "cQGe7rXyN3R2BJuTMKoUyDSMK5cJ9MqLrs3eusbVH7k7maqyVwxLP3ivLTEaFnxFZaTjNgp7P6dRMK77WPMNRxg",
  "key26": "3cJ6ytfKXfmDq2d7LXeUg4HkeDrzWF7WxSp4q7osoFQ25xnq9c22eXUwjpUFjbBeURdZTmSipkUzRmSV19VSYchd",
  "key27": "35pzEfyo7YGDf3Ug2JYPP2hyBZUQc8N3cG1erqcxHy1oWAzsjGpphmMVTChVzoekwudzgYjMmMxaAZPXrxjuZnZP",
  "key28": "31aqPgmqXUiauPmwRDQ5hSRKTqAUpGTVV8cWf8aeuFqLhJR7a7xmZB2BRC4iwBD3yXcqF99jyFvtf5BRVdPcxno2",
  "key29": "5opGDNNoDDxpPfi51iQZVPzmr6WhQwjtdyjRy2bcWNEjuMLDyrjTYdrtkaxyhzbmhB4uVW87Mmug7qYQ3Z2WHUzg",
  "key30": "5y2Wvb9i3aGMhSimUAm4kwA1XDio9Uvq5MBgrf1sVmYHsfMXiFrvLLficS4nVdSMdgksWouS2JGNBV3WqtnVBNFn",
  "key31": "2piwVKZb4gD7Bf9UBfE31kMwoAEBtT1kNYk73EZ2cQXJ2VmaZsX8aYj3BT2AfXMd7wmoqEJaJpREC8vuUcPrJpfh",
  "key32": "66VcSqh62rLng7pambpwAPCbC2H2ttpcPdD4k2myRxcLeQfPViuPzHfQEiQTVCnYtDSqKJBvFyBLQNuL8S8mk2A6",
  "key33": "uhK8hWjcpgmk9doJBaQ5eM5tMcgRPLGy8wiS4RjHsbxDdViHQcveJp9gHQDbn9FiYu9QrtHrCFmurQEthMzxRcj",
  "key34": "3MBVQ36eKkGSnChqi89r7VPP8vtVMsPazQYDUuApER31QZpgygDAnBbFPhs9ae6wK6UgQAJYUNRXyCBYkzQ16Sgw",
  "key35": "CuxXY2dexUs3ZxjsgtTAjaxTd22wHVT9F6d4oc1GSfnmACRwBin65Y7oWQQ3SLGKrbeDuMu9RuKsJd5SyDrrSR4",
  "key36": "5gUHLcYMXdaVANxviUt2pjaZzcNpR7GxxKWwswgJTkTCcQU16S7LKWixARxqeh2SWvgvNEmn6a7tCNJwkDraTzRH",
  "key37": "3D1or8fRZrBXX4ZP8YpYK1C9HiD9iGpxA9aZiJ6mzoeiMUe7gKCTGQ4pyiJHMTF3KUHSz6YZp5TQmyqFZSce4QiN",
  "key38": "3qTw5kHn6kon6WxhhY8frbsEPreQnQGP8tiLcKUc8EAbBNF79ad1E8ybHFapzMmdYB7uhb1Bqq358tBiUvASyqD6",
  "key39": "2BQenf1DMzgJM3u2kxaGDNLXP5ai6HGzEbypTYuTiqCK5aPopeYExeyCaFrdjecA73Jv8fKHmMbTkcPWizVMEPAA",
  "key40": "2CsoF4EYoQ13cqATtH7cpcuEFpkpPFRFH8LahD6L9AxxRWHLYdTeAxfTVkizBppHiwaFxbMzYfyjcmmY3KECf7d"
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
