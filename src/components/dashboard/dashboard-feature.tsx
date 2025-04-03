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
    "2EkFrtX4B3DE2fxrXvY5zgwVF9X3yuEBMiVggkVcMzz6hbXNK1gcENNfb4t6VavRk98zwrLQXJm5pfYUqyqxapHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22x17XwmhU2CpdLa3p9SqqrCtoj5brwhg9whzijqbJPCEEhYFZpwWUE8ppsB9B61NEVGjH7294HfdWYjU4AZFuDJ",
  "key1": "5CvfZ4jkyqgehgEo8fpYgy41i881T5Nrm6BrLncdtH2SdgBAqocikzLCWTuKSy3mpCnnN4opj9ahniMopfvy3gd2",
  "key2": "rqMDE5JAJVpZSRsfKBrdJjR62JdeiwDTy5py81nXrt2Gwpf18J228kKS4FjdJeGFqq21HZw1jpdygYH9wo3fJEo",
  "key3": "3zLoJMsW1u41hEjW2R3WV7PC9gQ2GCwyHsDAdv9HPJXNiX9zNQ22pDN2Wxyz5fKFzHAMDvhN7FyVZcGUhEMFGQSn",
  "key4": "2nyD9HZq46cNm6drmBNcu4fi2qWXg4f2WxsyZSedpD9LV56aHA6hFCd9Z6JTTY6pqxwGrKSi6hH9JmDDTU8P3VBT",
  "key5": "84KShYucBsESB3j1GKwsr3JcwoLn4eqRgF6qeWd8huW6ayStpbjp5fzEvHxH3WBKH5zPAWU5KSVSLL27ykKf8zc",
  "key6": "2Kp6Yied9oehRUpLKAJdyp4wfAUVLZ8ZpUoCQGL7YwTdfpL5AvMQQSDKfTKpMV8ZRS6S2oPuFMkD1qoNrJhycdRU",
  "key7": "AERYndQRN8JMqiWzxhFMxtMSwvyn7EgsfjiLctqTFNc7aphG1CkJRdNyzUuHfU9RePmmcwLvUmefsKFFZ5DkL6P",
  "key8": "669nkgMvX2f3TPHp8vq7Vkiq88XMnPZXDwHNrfMCccD6NqcMpPQm7hhVh9VmzpZtokt6LNsfShtGEcgQDMtLFLNT",
  "key9": "4HPinbeoKqW8iyoQCZoqh6zafevuzUxwXiHc3gvNmQN3JepQVS4jzrps2os5Cj2E5KMetTHwAgyUJy2B4JNRkoRG",
  "key10": "3JjSHGTn4MpW9NkyqthERDPjRULHZdHks3hU6FigRTr1ArWniuuKGV5oSA6D3t99Ldtnkh9JPRjXUgynmmeFBdHx",
  "key11": "2Bhd29coH17opyxJRKgja3t51tConaWfGkPQCFh7XmCfT9Pn5SoLrfmakieTJ2A7FxEQicHPjkUpQWwUfPhi7UJr",
  "key12": "2EgLfFSwuvcG8mtUSPQtoGV4WkXJN7fmJgBUrjxjMafDM84DkztEmkQQhSyMj1LxJjZ8DcU2xWLcCQWVbxTyToN2",
  "key13": "37QKQMENWTeTmoxqgQsU1MoSUDKH7YcDnGGTBed3REkw9GfgN26khCwyULSGAPnvzMoUdcoYbjxLLr3dniBuAtUm",
  "key14": "yD2Dit3xVEEY9YDDdcjZVooR62CrgiWkAUZUdWX8hjTtHHsSzcVpZ7TPUif6Rh4mDY7nKuZ6QpWPSMK2Fr1AsxJ",
  "key15": "5Vdw67428x9mCedy1cuXXs9Asiwkoic7SfEK8ZJCpyx2aPyvYcQvsDonpphjRg7TdQD5xRPucFXTPVF2DNhKfvPz",
  "key16": "5Dwu46Jo8EnDPX8BCqaLt55vsT8RZ7KxpBMLiV65mmxvsnyyFtqZMkCGvqMDqirVZBBn3LizNFhknPgU3zY6JFQ1",
  "key17": "pvE2Y1uksLguYMSoEq5sKP99GeotDHFgv4sSDzrR6gbdq5wgUJhnf1wmzpqLNCRxyfz8D3hfoAStsb573cxjJF7",
  "key18": "2tat1ubXyaSiHpwBipGFa2CXTMr4dABPfprj3wGSaE3zRhFsTxUD7k98cdDn6e8baippaP7JcASV78r5vpwyBPrV",
  "key19": "4ANT6i1KK9dmi5g8yUSgE7kFDq7QeB1Em1xXRhGvFpA1WakrosYhsoDhiubtpoWRyLYGCUkNESZtEKm3rYwn22aN",
  "key20": "2dw6pEcgJ1syqpfHsZG87AAzpxW2P96ggKkhwdeHgjtYjfyRmvYmUexqZHAHvyctcgLYsqLiVzBbercxsC3dtsgg",
  "key21": "54cT5H4vxSoCHcd5XwGfGSWg4i9ivAemxEjAxDc6xCv5vrrdJ1biVsie7y6XgZum6p5CLb1axJsFKCDhaEc8Rwb2",
  "key22": "2EFki42SsfoAHSfhbCvCgPqE1egHz47tmcngudHmxL3tYy7xNCJE4EbWFuhmC3r8YqvPExQYW9R5FHCTxYzk89M9",
  "key23": "3CBuTHbSp6frDXxMUc4hPdKt7n8m8LMt2QTPLrwa2KQS5ozRrXpJD1TH799RzSFZpHTw64p38bQwUanRdE6vmoHH",
  "key24": "3sL69XBMfWSoxim3VkRNvBpHUWwJw3cxc85vfpenNoFoCcPefqkqFeZGg4FFsNDDdY8ZjpCtaTXQ86rhtwZkEeiD",
  "key25": "3WhuNc3RvLb7tK99KcwwcM9epyiVwakzmSRkYQtRtko9WbnLQdW3HJzi4Ss2mHqwBxmKBK9uH2rrniBtoryPwuLf",
  "key26": "2MtPE5Rmvau4rndShS4dpL7D99TtSiprH3SBhPABerVt3P69hhDDRXGVX4V16XWC39SKRnfG1SMY81KmkCBnpqCJ",
  "key27": "3K3fA8ApiVWDd5bd8UffG6H5hntYexMNd4y2p8sP4SMUN86mZoc59e56vHLbzo3St9p4vD47hYvG1xJzxFKtVgXp",
  "key28": "27i7KmVZVUnXyiZvTQB9YFbGQRtiFEwRJQa3KtUXFPgfL2BQor1NoVv9TeHhwCPqCydqqiUpoR9ssa3M2kzKvM3T",
  "key29": "dmAmjUcJvQ2At8ByqwXu5nJjvskyjs1zkgAYJU8WG1SJF7duBE7gQUhWpUQUHGjJfzfTxTCiUudcsLsenR8Wptw",
  "key30": "3QwMhF3aTQTWsXBb6xV2dXYzFtLfYnvWgGm7ctNqydbDUMLKZoCfmMutXBgvRMN2piTi2s4cPNatNA8b1H26c35A",
  "key31": "TizwuH5oFsz3e5FW6xor7inNedS6WCCXKfS4BgGXUPLFmhe1zkXmUAqVJMtaEn4kkQWqB4L4KeNRAmuPsuoLGww",
  "key32": "3K871zwgHQoWVbMkiCPf2wFMbTJTzqqSM9p9j3nnFrb3UYPFhY1X1LMYWMfcsVJ3PwftVbvxPDHh7tRpAL2Hr6gf",
  "key33": "b4gPjgoCVPQUXYBGG7ktnPEZMLVTkD1CRuVeJuyXsBiMrimdv9zZ8gRkYxdkceydzBtZ1ivvGfvL4juhDj7v5qa",
  "key34": "2JNA22mxKNMhVDATpugkWgdp1qqcKnGEiMGKv3V2wSByK7jAkQBE4Qe3WTS8xPnVWG5pGPu2Lt3zngRBkC6iL8i8",
  "key35": "4SWbuvAJVHcDJ7gR9o9TEtFFAaaV1jJi6zX17F6xFH43GJyN2NwLsBoB7bR7CfJjBAYM6zbuTXfo3xSRqgCWH11h",
  "key36": "4mf5JACSyYu9YsRm5xc8vxpq4RETJCzNAyHkFerRE6bqcacyHjetGS9eg883NSRcHXdHdMGynhDXXc5BKrUdREjU",
  "key37": "3ME25aa8yF8qyxnDwT7315YDZTXKdthtGYo8ttYJJ4Ud6Z8zH6a1uJon4vUiDW4FHZmqU24tbvhEYAAr6SWR5VGo"
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
