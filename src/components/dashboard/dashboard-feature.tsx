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
    "2A7MiKrUzatazJgwsGTrR33hGmDb4fffE2AH9akqCEt5uMUHtXJAcYP5yTKPkofKys1GPGgctrwu9Znm1jTeBpHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zSM3xZvvsp92gpCYngfscHqbkWxv6eKzjepUEKL2C7QUvAuMVY5qcgoMAm3ZFofhmC7Xacv3fJrrVPnpzJHu6HS",
  "key1": "2ZxH7GTjKhtxNgwHYKxw7HrfqrEZziySHSKXTgyBaBtHpRzMv13x62VCJwPVmLprBXUV7vjtJZmCbNiPqpGbrxSC",
  "key2": "2UCsRGEe6NmnZttpLH1QUo9W6fHoQsqgChE5FV7HpoVmUCZEz7SfrZxN8Hxe9753qQQ3FSzwJrKqtcrFLojnpJAY",
  "key3": "59biq2FmLyNJL4zcDDeRkizjhaS6aAyShJHJ4PhsB5sc5SBCCjj42w52H5JyPSDNqU1dDAtAmrnpLQWodxGkqMdv",
  "key4": "5fff8h2j8tYjYpvsRHUsjUXaCxBB9YkDKcju1KFJLUuX976cYedzXbyNNJCemTacPhTWZiFYAbLn3bppFZKVohYs",
  "key5": "U9qhLts4NVXqotfR3JDXzUVFMVVtUhJD5V81V74q8Kgniyo4cQykZX3MVJPvVpwSGdGjyQo7EXAgA8eK6ZKsU5S",
  "key6": "5cYrvp45mtbsusUV48vqSpmdwLUuVv1y7zALL2aywz47TEFgVfUVb2PkwMRqYVnST5AeA6H5Es3rVtczgWcGoeuY",
  "key7": "3HDCrfUgTeHrLYBN4gm6JXPVXHCbereCRj6F3nZzhUGAArTEN5Ti41uXXQZeZqzBFSRzqyGHXikoF87XAXjhtZTi",
  "key8": "67DncshiWh8NNPZAyou1PJkawL6tVhzfxMSJc9QhgJ9qvWKnxtvcMf9p8a2DxXCWqiDNBc8vgiU8oak6yuL5GuoA",
  "key9": "2MLrhMmboeckNeAHNHLuNidHGeD1KpsxRqtYTCBxiVjFX5P1kZr1Xk76Vf5wwDHb2UuX8Kgo6cmk7xw3mfCkpXK5",
  "key10": "4DW1eFYmhV7Cwkn38xc8z8bXgDvugzcS1nd1QmRXBkEfaGXFBbu3tHmkUttTNfAigUsbPZsx5CYV5qbALtypEYc2",
  "key11": "5uqtr9g7Zry4CbRfMJGvtj2RXUKrnUHA9HGi5v6PqTt7yRTdi9HqNUgxFjC1EypG8md8jaMFYZg5Wm5LiH2HSnnp",
  "key12": "4E8tTgZChdrQj1JjvFqEAkuRk5SsXaGtew6TNw9qPEog66tfZMv5YHJz7jq8V8u2ijUD8MmRrJpccQQ9fYUjqqnr",
  "key13": "g6dezbcrNXSyCcMUKBjSLRLFJFjN7d5FVTtQr2ALb58jnFSoqxSyn4QRR9VvRUeUKUpE3VTrzLxz9rMLfdgZxG3",
  "key14": "5EnQYiK3U1zG1yQhEGwuAkCwe4MtFjMKUgyUzSkfD2cXT4pAEKJdMabwpk1JNei9emrYKabBNSn5Dxb4iHUtuP6h",
  "key15": "4QBaip5fxnSVZAniC7nuw1NCFtNM67XrYppvSRG5s6JPt2rQr1gDoDaJ4FeHXo3q32Gt1ZK8knSDVtgq7Kknuyru",
  "key16": "ohjpQjknSiqTRRSNV1BeDpjzTyt8FDdjbe2boWDpbxCfQpcPmrYAnjsTNeBRTvVj1YBTHnyDmuJEc8UXYqQiV9z",
  "key17": "64qyzRah93vqZriSxBqPGKQtydr8KKEC9FYbeNzHEYWsU4ZqYkcfUu6qp89Z9UqAo64At1DjBRQYsmsWuBotZCQM",
  "key18": "2GfAsrbd15Np5XugEH8uw3x5TSQcKeBYGMVEDRyAE3yBpnQ5pX6gfEmPoRAeSuXqpw9U4cN3giLtqMxGZhzN7UF9",
  "key19": "4dfpqKYYyuGcF7EBPZxTv8iybv7f4F3nejfXz3SiKCp7meCa347sqznhzYTJaWiQ8feSwYZsaUbcBR4NAf4FVx1S",
  "key20": "27YUS1cPFJAvZo8qELev1LWWo86cvWNvB5FA5QjaMV9wtWeG558FUQ5CL4eoSgfBqjzM33cPcJwEsvhH4HxJqovL",
  "key21": "aTctcWhysp9Xa4cpzXVJZpfe3cojS7rnkStgdvNF5AJmeFhHvaGySjYYPmHLcyPbTXeWCRFamdHvLM2pPTXBgkC",
  "key22": "241BkCWiQtcwjhUNN7h2eCi8K2KmJDYumoYRG8QHqiKSoxHXGwJAdMyEDhDVPTPm9b2hZALoJBUSDPcW6HYHchoj",
  "key23": "5mKVKhLykc44MF2zgRzGWsUWg7ygZiyfizuxEutxyxyx67m8SxaBnqYnBSYpjhyoJomRWRLUFu3FeSorpECKCxH1",
  "key24": "NVsmmMYhhWbGoAe3mdKQDEXVhyGDbRNqoGsR5sTFtgoUfH8x2vYQc7ujS2875UZy3PMNrGz3bCcDRcySVh8wMtG",
  "key25": "2weQeWXXvxMDZsVbeCNSbEdh4YG16j414SXK2THcSfn68TYndvtLkep2vxmyTjqPHGN6mhMEmEL2hQcpnkvTb3Gu",
  "key26": "4mMGM9ajw18m2TwQdhaG1PAp8PwRjyYbjdStDdCzuZQ2vLbgjF112N8rYQ5TjN6WsbU9o4HgJFwuPgm9KwpMzkd2",
  "key27": "3LFfZptxFkftniQk4amq1eXbbSxok1arMiKzkdEThkrmuNFU2PrWyxphpcuACQUDj43T5nLdtGvBQT5GRosXS7Xm",
  "key28": "66PecEMBR9bmSzSpajzvJeTeDG5YmEeSuYGEwySqjt5vstG67E93X9w3DqisyDiFKvxjqWfqrS3QTBpsRjPPb4q3",
  "key29": "5Z9HcMH5e9CHbtSZj3XMu5fcu9cMrY19HKQtmW1sad1v2LF2hovdAKMpTvSzep6mhBB4rWmXzR58v3Qnp747BTkt",
  "key30": "4An4uJXebx7YgvBznicN1gmKt3QTjb1ZKmDrqDrq5wae1XvPmdarG6P8vxkQJxtPSu52VmwBXebvWCiQ7QfQ3wRp",
  "key31": "2Fd9LufnoqCBfBZuPnnDj9J7z7bSs7N2QY5zYsKysaxoSe8HuPLiMqgjXv2LTQ3PSPueKWnnVLk11kmWjHvkGwmS",
  "key32": "fzGSQ7b4RhSHB1FHH1gEzUaLzxNjVvNHF4ZdYLvM27uiegDChQJwcb6XQzxQupUD63ZvmKjkwFimbbshf1uurun",
  "key33": "4diC7g5JdpSt6gH5B4mK1yRM1p9QCEBiUMMeTF2XZ9ucVFUK3oEwu4MqYu4XCLWRUTB5CaBLof8T4zDUAsQQFgt6",
  "key34": "5ogyxxpTj3AZkXseMoTLTRQxfXARUipULuRCQqao461ZDKte22uLAwADLECU3enAXVYdVNajoScBB58c8ZGee3Gz"
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
