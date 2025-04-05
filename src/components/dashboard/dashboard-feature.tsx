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
    "67U9Zoi6mxw3VhbqMa4habhk1QpjqgzP3CtQ8tu65JjryB1CqaZQ9173e5HKT3wEEczvhvrwSMpvowahE65W1moT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPnJ7jJK9mVzb3YPxTcXy4x2nzc1obCEMYmDoTLz3MqnCBbJvHj42z9bskB2R9UoDQC5L3RGKK2bc2Tp8hsTsMp",
  "key1": "3WLPpSi4iDVvBKEH7vVfnrAMEPar6CBAEUqNf6KbZoYvDHkxfjSo5tAWM4QY8MSfj9B5Gz71rQc1oUCw4ZqyGXC4",
  "key2": "2SKCMn4Ag4cf5PMoC2eNW3joHiz4bYhCWFTF6VMmdd8qqjH2Jh6i9sSR38Zpbh1wZLW8GJVXRDrh8FPJGNri59kq",
  "key3": "66VfBCtPEivik22f4T2tvEHFgwR7GT93B69B9VWEvv2GjxdkSUJPXoQ93B8nBPPYkTE4C1SdbQMQZgcywhSmA4Fz",
  "key4": "d5K4ddUFi4KxyRcSGcUGURE6rPqC1QphZDq5PCMZ6ZzYTt8y9Ss7j5KwgUQwa7769Ade3TnLENyKusYvXh628WL",
  "key5": "3xQNyxpMkvYrNvASq3DSbvkvGo5dLT5hnVu75KW3hJcKKY6G91MYnKrARbYftB5ordKRHsyiH2oPvkPLBefyp3Tj",
  "key6": "5W7VfKHde7v4sPVoK75pnn4DeYnMo9mSM91GZAEzhb5iAVMFbkDzfJKmVx2yZxkRoxsoCi9DvJQa4LSVzD2ou8i1",
  "key7": "4cDdurQvSBHHh4qrwiaTb7fpHcTJediYDzLCP1kVphP7TMm3r3YCGMp3ZC8SjaBATtEJTvS7PvMiGMMYnSYznUL6",
  "key8": "HTmRC1LBMWbRQXMEWpWuPG7jj6XuheFXJYWAhurNeuYdXUe9XvQfg1ha7XUAkfPShUy7sqzSAtMCEcpJ36p2HYu",
  "key9": "ab6CjuyMMvJfxwQSa5UiSczYQ2S63NUbgnSTDfWAFL6v5bA6YNMJyBB6toogai75ahn6u7a875qKJAgufnen5TE",
  "key10": "3cw5sqcXzFov4g236zazgkpNxQC66EYNXTpmp5uRaQzSCvbXSd2h923jHkMYbfKc3MnspTvrBAiYwBtnDPKDTzZU",
  "key11": "2hgnp6TPg4ixxosGr8j18Ntd66MhvBaAwmAt9F5K89hTtaZV4UQveGSFa95RRmKX91g42fGJzAeR3Uo6X5aAc538",
  "key12": "4KtrDdUe7Ue6kFGVf8FSWVVv4dQuhXbWT9GQSS4KjaB3HLKkmTbKgDGkvqdc7hrW259t3gcANVxc1SNNQhm97UGB",
  "key13": "4wgTY7enVimDtf1PTYbnTCt6UMczzdXyuGp4Jh1DybjdqhqnoMxtBNsxcUcesccSXzaTDz848FnXwx67zgCsAsui",
  "key14": "54E4JwTxz6aCdC5zvPtaikq8sGJcByJanATNn9JexKvHAgV62yj3xAMCLgziah3W2MGvvgQ1WwwBc5nj5Uipoqfq",
  "key15": "679RE2zbjXW8ScC1LoHbbr195cM5nC4PioBqTvrWxRVphi1fj8TLBxZmmwgpFyEwHQ5mr7VEcy3bY4HLPwRj6rED",
  "key16": "M4WTtvzTx9Gx1qy8VjCh2ZbQpbiSHjsvzYWp5bEWbragAkLX9pjfC3D9FL5givBWwji5msYesZaqHtViuR4WSFM",
  "key17": "5PwdiE7rf4DVBYy8y62e7Qyf3F7EmqPX7qZ76LxjDjBS85zNXqYhtPEF3njQrjHrCH8ikKzB3VYEcS8QohVzxTi2",
  "key18": "3LnpkP5GZPqGywUijzRLz4rhdYxhq3U5G2PxYKae2y3fLjmKkKf6Xo9VcWQYW261qHxAEw9NLAZi9DgbDuKEcXxK",
  "key19": "5FFtQDr3r9p4pF7FBt43JSUjMaNNp5rzXgViUYX21MyFTZpenERPvxtxe4u8Lnva7xwMcNswfpMjq3AgAs5MWv6D",
  "key20": "3yu9E8VCPATDQiECfbTPHPHg8P77NWyfs6vmNjdyeRbZm3FXwm4QrXxRDWY6Hqkfz9R7qa1gxLS8AiyTKGj6eYoF",
  "key21": "2xWVPhxrxDiUy8aAXHKibU3aMXyajDGtqozwhjqUyv1NhVpGewrgBwDKTXaEcopugxoBG5FRV19BoceFmxvH7Yo1",
  "key22": "5XkFe1ySLTseEoyycVEAsmP7jjM7RXLKajsAshVbXMq95mDrKNLMaM5dNkDTTqTBYn1hbeew6LeJW4zicDyhjMoZ",
  "key23": "2eJuHm3BBCaTfdqYUDGkdtuVxNm4nT4WYu85xWb3J9F8LNYPk3yq7VnHrhpTmi8YHXoX7gk4zy1vRc24yD8XFeRR",
  "key24": "4qRvAUHehbWrMBpef52mh7VGsUGwKL35AEL2bZDRimyihEMybaBCMU8NRACTZedDQbgnJTdDFQQzpqrXpiU4fZeU",
  "key25": "DTZSqoz5npV27K9fLG16aEBJPJNo8mxojoqZwBxZw4ffX42ig6toRkQBw9XqdkXx6iTWBHuwdzovB121pnVHCNY",
  "key26": "MF3Rp8CUPcqVBXQ8NVQtZqDvGrseRsgFvemMmks8Mb3wd1rgEjKydAob1Zzoa1NyRS8PRbce1Je5xRFfPTkKCop"
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
