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
    "bDj9Ectsqy2aXxFGxP7RRPBH6jFq6Fh9zCXRviYGhCsancphYDmFCFM7yvb9cpzq4iyuzCSE3NV2TB6xxYMZe2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1morQenPy1NwTS7X4S3tVx3grCRj582HQAmZPUBH5Kb1cQdiChr1geS2EnUrj9v86fDiNWtHatJ2UAC9zcVLfg",
  "key1": "2BBxyPvB9DTcWCvj7TGQPixLx98wK6YV8YWtLqRmQ35gyTzWPKMD82R7NB9PSgKhcXaHWaarXjwu6t6H6KpBeqhn",
  "key2": "2Q3t6AgQuZrtzU7Rvvz8htSw8yHsdSQfCkndwEa4FBXsdgq43sQmu9Gi2QhRxgfhMXJPuRJGUqJMCkgsZL1dTbB5",
  "key3": "24q5PER4nsR9UU2tuY8M1opChbVuHv4rSEGYZ7Yv4UMAkCop6Adoce1HSqJoAuhPEjuK19kwH7Td7KM2VUk4ic3N",
  "key4": "4ChisJrgN6mSDMxKtrV7W5QRZdb8YYWJGsxrZQkAxefJF3EU2NqqJRyUJ9JnLYt3kT71j3TEzR9HTUCYkFBFQvh5",
  "key5": "2xe6VM4apmPkUyLDHakLrerLv9mrnXVyKsyuUi9yu3JG4E5JK6fXKJFr9NgriqsrT5PP79JG8Xpqtk8VZ2vwQBtB",
  "key6": "1Y3MyAnTHQhoGBHHot2Qgfxq7WaenXSpng4ghzcPXH59Wpvr2Lxq7SihhaKSCWMXsq7DBxa6VoHL33wwZ8bvz4s",
  "key7": "5TnFy1dMmtG48MKkZ8GGeXSQow3Lkyov8qJEJfuYDKMDTMshWuvgp1dNvywxWeyPGttSYQeGYpVH3dVFzPpoP8a2",
  "key8": "bKnBcqTCuaJ1aWdwuv2mzeZbp7nhJQAorG2cyGAZapE14ttTp9wfAzjMvjSSSHtgbAWUi3NGWHUPQt2zU4MLEo3",
  "key9": "4AMvQSZp5KkNcMYTkn7QJ2UV5zBiytkyDtcZnPABy9Wa5a2ye9fxuYuvWCb648XDXBsMHVYPtyn1ZPZXEk4aasLU",
  "key10": "44UZWUsGsy2dzUzJC2rRHBRE3yCSNDUPBVqy4MwuvCUNedau2d8BAnindqVKXfuAZGsRpwyQF5kNLyT6GQ9EES4q",
  "key11": "515a81mHwp5hE87HvkZfCfWA68aHqaUbDazEQT13YN5rBU5i2MBHzyXbY4bK66C5F41sNFFLfVYy5xsvJQ1aoTTS",
  "key12": "4pz9TSinMqNFmaPmLNpcjuizZZVKcQVxzsDGgsDyRo9tsY9XfthiCZrC3af5NKkycLx7g6j5bMEy1sSYgfonNYeh",
  "key13": "397byRJMSsJKG8iyXcfZ8tUupfXzvLV2wM3RjaAz8vNzBLurPbnkCrbtqZ4bLo9y7MXKkTEid3UGYBj1TQcfwRPs",
  "key14": "8hNFPvy3RkCNT1vE66qUjkpKdnc3z6DbiV9YwQdrKq71E5v2jNNfxdFNB81ihpGNtRVkMYj8HPxvGYW9iJ2hfjK",
  "key15": "4M7dNqXufVHRtCSu3bNdzj2CA5ehQSdxGmqJtJkPYx4WrNvEvRzMm6VirXEHuHRvMQrnLufxKwQtZxprqGQ2T6ZW",
  "key16": "487UjkE2P6eAxu3dA9uvNyaNYXrTkeCZj9iP2jR8LmkSp6suEEPaV3viYVd4jesKPdTSdYeyyz4FaYxM6ipn8fEv",
  "key17": "4Th4yCM6TF2qGGNWgE6GymAjWiNzSNXX4CUzfUjoeSyU9BonrjUkkMmBVn699bRG4SGWmsq9p1uBfSPK3trVcnHY",
  "key18": "4dxWVpBnm5tjybNWZE44eppbSZ3Ctak99cNkMvNJCh2Dp1dL1PLnAV1d9ibWAL6tZTHqNPN2Qr2KLGJhhFhhHtfb",
  "key19": "rkU7aS1HED2sDYbiwQ2DjEhAoc7uxfiat4DMtYovhuv9Yebo2afokcFACtDxYkxy9MEsfcVEXqUxXNxGHGNC4FH",
  "key20": "2hSAFDZcFCdi3XD7zf3YTYkrbMGKmWSy7jK1ZRrTTi55dCZPN3Ra1CRMPxDbyFQ9Jt59tM5JN7dCbfYXLn53H5Lx",
  "key21": "44hf9Jzkxh1LV1WABXERyydzbooYusbpFqni5HunffP4RT57tpSd7u4V2ks9ij5Ss7EqVnrESkKaa3dGJVVAgrhN",
  "key22": "34dJ46orNVZMnGtp6UtvDGmoirUu7puMEzfHdZn6eSQX2DpL2t87WWfRBr2kRbARP5cbNzSeYxrPP1KhS1zwocQL",
  "key23": "47syxdmMXtzZUBHYZ4fHvk3nZ1pgqymRet8ZgYPwnXYgs7PC8xgc1dHnAMtZ3dYpgYvWaYSxuH9rwNtfwa5dPg8Y",
  "key24": "F1ACEt3AdvcrH3hxnas4drLXud55qn2Wxw1mGUnuzeCC7AGvTr8h18aDxZTJBttKH58ufhX4kQDGiBDqhAw7XAm",
  "key25": "3NoT1A39Y3HLu6z5P6pedSeaeiqQWThxHUE8iMjJDiczx1cRGjzrJFpfMZGgnWtQrL2RtuGAvMdaWVJnGhMNQvWZ",
  "key26": "2z88owXVW1qPPPV2zyurzxgzWiUyFVub4ukJjco5ncKKJer1m9kMPeNaXM8LokKZFBTHAkWYwjdkvv5ZKBnacf5H",
  "key27": "2TzLDvWXJVbFnpNZUDCSArmcou1XUKDqj4E83MqDzjj3FRmj5z9nvcKarYLQU4GSeHkCvgNSbLn63yh56zqF7N62",
  "key28": "23qABLSwCGj9e7MTS4ovKRpQszd3mdgDJcbQuwKoHLTQPm8g3vrPQtFCdgEY7MZmeUbi2GhZDpqAXzx2R4XCyQep",
  "key29": "24n836Myoq6bU7nVSN5eXbGCFDDhmSFfNCVsEksUK1woXheswKXCvE66mRfeEf4Ct9gbJCSebeShRQ1WLovtU3Dm",
  "key30": "5EiXR8rACNigChTJQ5dTsLabmS5kVFr8jC4UvveUgsF6nK6E9RAr8PAKoCxPngqVCYrydGZ3pKWCdvkJbfocY85S",
  "key31": "4pukggU5t2w1Ypx4yKVcBhe7frcJK93iWwiHztCEEegyDGtymBBgJ1mmwqxyui1wA19zFnpXdzNdm5Atj9HjgMJf",
  "key32": "nejhWcTEA28SmG2WBygSJsnFXGQFsmvUhFz2wyR8CDd9wWpcKKJEPnfgVGWX66UaNqvFnTfVuj3m14qPm3FH5WT",
  "key33": "3tgUoH5V6z8c1Kut531b2RQ5nsvDXGRNP6d4LPQgPGEVaWoryt85fGQehPiChEAjE29pLqeJS342BYYP1g28qLYi",
  "key34": "3N96CFUZphaqLURh6abZfgaFqwxP32aK4YVjPFzdoVGMYtUKwLzoVkYX3eju6cha4uqKapqSUoz3PXRNZ9BVyJUR",
  "key35": "i5wQqx3bPsQPB1DGacUUQSgfUuhy1v7ZBxRac8hL7NNu19STZEUuHvDhf4XHDnfBbZhBAxkRpdkqzt28dcce6n8",
  "key36": "4rQcZCJp6Rm9kPfxq8cSsu6H833m7qc9o6GsZygUQMMu4DiUArRHdSJwvP8StXQVSyrQP7CwTo5Hf7K7Tv62J3RM",
  "key37": "prCDhaiXWd2f1VuLUD7Dcco8X7MHLy9MniLVUJxe8fnDZFCJEY1subMwW5gkYxrT3gTd9LDYed6QeJ7gUF1v6nc",
  "key38": "5hqG5XZ3LwhxUQnYAdsW1hsrrq1BARbhPsS5rLbPHR8ZpowuvY53PZg42LrMsz3SuwP1J9QTbKPso9LReomK5DeN"
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
