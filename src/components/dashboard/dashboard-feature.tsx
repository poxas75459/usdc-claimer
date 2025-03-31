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
    "4yuT5ynz5HgVW7xUmBhNsJYsQnTgrBjETtxPEF8XoG31rsNRVhBvGQaW2yBCyhAo5BMgLFpVCVyxMZLCL3XpmPE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QTvVpfYNJyDeMR9oHV29XCx6sR3Z4pog557hpn8CRqrjP6kyq5A2dkywnf6y2PEscD3kxhaQdXg4xa7HzRmf2",
  "key1": "5ar6mUzaTJponDFfCEC1xfaMm18BoDjV67CrwpJAUoPuYHF3BNkzQgCdsnFadKvjEdGYmTfgRMyNERVJ7GczVHs1",
  "key2": "2QoWxBBfKfiVioGgNyW2TkboHevLdDTKM9bgU4UCnEwam8J9mnmrNK3fdw7ifgDMKfkD84uQRZ3Eufb5KL3aPiSx",
  "key3": "62fWZKNZcFCc4PSAxyJQbyv1dz9ym4hptU5NvMHXk77sMfYqFm5v51wpqiQkXFRz5vHfrqdi8hy1dejyznAzBCJZ",
  "key4": "3JLiJ9dWB1VzuUuA6yEt4LjS9aMwx5U5ED4dYiXSexWG9cvJZoxJyGPnWeQ2UsnGsTHX2HGPBFYkrZNyhVjoBFbp",
  "key5": "e92fFGUqXk37aV5EreDj83EmpJ1Rq5hhVxY8eJ6bx9awS8cUV2ZZ2efr1LnbTyRRVAcf89uuNRhKGSaaMqwfENA",
  "key6": "4Xw7vneGbtaQURbFh5oUHyZeouU6zk9Mvp9PomwQfQ6mbA65bCM3C37yJkgsKPEzTyccb7mkfgUCGgGsJReccJT2",
  "key7": "5LoG5qACUxoFQSdpHzt7jKoTq1SdkWGJkKAT5eg4ccuAcYBA8u21igvkUywTmpjKjobsCdPPS1eYexqSyaXoYj4c",
  "key8": "4755ifhiSAfbAPFwmqZ67q79YkpjVkr4DYuU8i7seGXgmZ8HXNZMezUaanG9eHWAKsnr9NpWhy2QfQ1AMtf9dfnV",
  "key9": "5wrpM7skWTXApMcMGtFMwvD6b65wbBLhwKkzeDtZhpTp246SsXkLfRCTriJQLge4SeTvFsnuE5KvTQE59tfaY6cS",
  "key10": "5c2SezvzXhZ6ZBHFMYA4kh7aTAfjuqbHsUxnJ79auaZom99GytJkhhmNfcBKvxo6Q4tvXDC2szi5M4DKoHTq7mqD",
  "key11": "6bSzbeZf6sMyepxNToR3jjgg34d7JVHzxiHq8JU3XDRoyFuPnf565ZcCmYnGD26g5cWXbsGSCgeTkLQFjijHjmS",
  "key12": "5FX72kMF3dHEiG1Qdfyk1PU9e6Ku3qwRTSGC9nCvXbwuZMzti5PDSFArFybPVN9CtNsrFNEDghDmKjGf4QM7Zit",
  "key13": "umgA3MA76gES1EznsJjrAdjDXb7Nc57APkXAq2DcFKswJr2nQ2Ti8nCdgVDof2SsrkNHE2RDtDY2tKQmcCNeuLJ",
  "key14": "Cp6okMfEd1xd9nczpM8ZxPwWVKXtzqFTXVU2xvhoySBYbYYH4QpGfnRdCiT5myotca6yHnumgeKzfphW7urCjZJ",
  "key15": "4PHQr59XW5MXbLELFCaXYei9MFqWVeQh2YbrN4UwJRAQHs1wRjzF25F6LTfKWAiBwHE4Bjjn31NEskPpGgL1hf13",
  "key16": "4oHVYoV9wMcGArhmW5S2PcaHydY3ekUeLRsr5wDT5Hyo5drZyuJGpMcmxGcz4KxeTFYYcmdTT3MgsJuX3t7qGnTY",
  "key17": "D856SnoXwur8fVakcTGPriMR6YNgc5aH9ytGpxqjkikFZnqyg2tz8uhMQRWrJeTTm5W2HGgo5jyjPETd6DKPN8a",
  "key18": "2EKLhzyXLbAFjdkGfbGwiDY13nvbUyHZGrBrqa9ekFRKGgneBM45rX2obcbWNzodytECmpe4KB81GKBTGb8PPrqt",
  "key19": "cesiuR7KkkQy9JePAjTfzgbZ4tfBm7ZcPji5MpYYPHpiGY5Qd6TsAYMUWVpRkzF791TFtPwc5Y8qWYAnG8UfwrF",
  "key20": "5USRvYTApTcYeRJTnUszqkubiQim8SvjMG1Qj43Kgi4hAH3HXyz45Axu4yD4PG7oBU4f87JFVPsdaaPHDeX59QAH",
  "key21": "MgnbsKU2DD3cxnTJ2T9kHho5mK28sUMh2zdG3vHHZjzYRQbZmRamCpezTwfKbA3xKdnK7CmQL2vz7nhrv98ycRP",
  "key22": "4J5bibgvdoBpneHuSerXC4uxoCjcv3U4W9jqooKhmZi3ZPm7R1PC3EMea5L28Z1DG9Z4BHsW2iCubPv2AT6DocDL",
  "key23": "5DJpTYFU27PBAvAuTr92CAz2UYzU8g7VUGPiL3woQ4uRXHb8S7zj3iJUNkruYtxjB4P4HfTGT7ZHjti7Z9daYA48",
  "key24": "46oM35VSh312X74cH95o9EDVRj3t2W1qcXtvpgJaNwWXxPTEaAQPRL9Fn4RA9iKnqMeVcLpYts82wTt2Pjmnq378",
  "key25": "2QTW1zaP1kKi4nd3yPuSq17vES6ULzNVFf84GH9G5pov5efsddePdankf19vc4NGtDT4jQUurxBvK8x8b5ZLHEBW",
  "key26": "2ZN6Bv6t2VACHXi7QU4Kar7suigu3mERsmWTgUM2tnpv7EsbcKLj6UbfvxBQUmZQi2oRTXjQAqmnXaNrm6aW1AxD",
  "key27": "5smHxE7zbLWmpyCv5yBQNeVohKLHj9KbYJ8G4C65awV6ZtWPJsiH2BHRKnVEaaZazuekMPmfytdeEqBKNe3S3e3K",
  "key28": "2wgZ2PzdCBdSLYAvz8vrHmN9tqtx8L6mw1mvaTyrCfwisJBNLjuVkvZkwJ4RHoNfzhiVZeHH65WUKbnQrFfunKXX",
  "key29": "2cULHXPyXpj2KbPfkTaTbqFzzh6hhrEC8CmTKgpg7rkCV2EfhoDX3whaouxujFA8anVy8aAZzMpstrmJU5sdEicw",
  "key30": "5LpEAeMX7QmHcozNM16mx35TixrBHwmn6FuwDaj5edXqhe4wfscu9WMkvzPvmtuohYhG3KDjfzVjRSdmKhoe8g2m",
  "key31": "5pxyGokPYAXjuGJfewUwetp52nrY9jB5hGmm4W4PyKQKWj3rw2APvnWWK9HLrDM7rjsQy55k8Luote1X8W1nxvyp",
  "key32": "4MahhsJ3TSZcaKfrERhqtyjfYsG61o5to4FAQybYH4qTZmVF56wtmCrs2XRZ85XqAL1ipY169Jw5uXXnjf15RREM",
  "key33": "4KemXJAYiNwwPLqC6c7QpZVSkrFhHi5G7XaAY3sc676N3Tktmn4wQ8c9J2rz11o4DWBzuJQrSFhfYDrmyc8ydFb4",
  "key34": "29VFwAQbRQgwCPkMFsU7SkWE7GtSkhqUg8ruNT9Q2BhXpoLTAbr51MXowEVYxotnVwWUUnLmehfpWzHgwpZX2odf",
  "key35": "4DnVx34DSA2WkLCEgaVWpu14T6fGsnvcNW8DYWt6XYZfNCGfu73hjxDPmFhB4YF4iSM1pqNcfFtn6qHgpKoS47BZ",
  "key36": "3jjPfMGndWjMeiXNEt7X97a1jUSVyEzxufXFQHzwqxp94rVxScG2kNgHHFgLBK1XECDeL25JnxYSnrCLDwqqpXAC",
  "key37": "3RicwM59sEuPZ7CazSH3fc3A6u7doFuks649yRkRAt3AfgxEBqXsXP9aekuwTZRFPhqxcy6PqYqPrFdQbssyTZuZ",
  "key38": "5MVuJxCPVeDK2LxTJJxg3o2QSVefgsJMUdFNM4cfLL3j3xzcVGBLvSK92vgTZzfYShdtoDoLXDEEzJhifX1AAeR8"
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
