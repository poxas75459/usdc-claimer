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
    "4Fm8x48K48qt99Y1BHMdhfsSXHs1zdvH6uUJGWNxf1WCJTCDLMCiRD63koz8KcC3yGgFwUEU2V86Ho32kPJyWhFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hw6LGkGVSQtV6xy2tzDQLDAhRKXmep7WevM3Z7f1ZBgxWZUVyMz9Sv4AzGrkHDa2wacmwyBwonc46XdGfTyquzn",
  "key1": "5TeCvSVpSit7VqewEW2LCuG5ByVTYuFb2H9JwGmEKzqznAZQAGe94PnDghfRaMzENoE1Hdipg2MucpLRYSg854wT",
  "key2": "5syQvBoSmy4ew6gt91Qot7aE56tZDfovmCDYC1ARajEgKzUzuYidSoGjVCCTXcdWMbYFezoaCt1jFPxPypnaEkDi",
  "key3": "5HoAVFGPk4XHjcn5pZhEPCbv9yatDhPq8adtpMDxUYAR7H8BWoNedRw5w3c2TrqtqseaXNp3qDSxsGWnKLrFDfWK",
  "key4": "34dxLtzNXakSS5XwLLAPh6obhx4qzkJuDcLvXp4VJUWePhfgxjd6rxqkRiX3ak941hmqf9oJ6GCh1rzckepgduDf",
  "key5": "337ARPWFmPd3FnoWjVo616pxqzzQ6rAiRNZskmzshAxgU2t7A2n1og4vyuS1xii33cG56bY7LGLu68b1wrfVP8mY",
  "key6": "3dm7iRJV34ALwessxxsb8iTTYrL3v27dGCFdCqjjp7KE4ZYbpDefNNzgkqZHuBFyjZAS87uPSorsnnP4bVvEKAKj",
  "key7": "4ws8DZFydv8Tf3bMCkoirtf8t2d5CLQwg3UrSVMdCEM7ACRfXmvHz2FHujhR7qKsnpr36PiceLbYrhGFcdUpJAyu",
  "key8": "FsAT61Uvy2YYdG47FbiiXqHUUk93JFtAaao7bW2UTQcARPrWdpkVDoHuagfCPRrizusBPBjJsA2HGme9hUsESLu",
  "key9": "2QrJa4A5LSkcpVCKhpjJ51fiqpnBjyqYYgqm8CBfzyPwy4ibnPYtm3isHxzqvWoetZC2aQkHAFZxWrsYY8ymqzvR",
  "key10": "4RJ4EWe7gQVMZRds1ee7ZJ6W1wwgppipKKsFxfsZginwnPceQWfpm5wHC7TphFTCQkPipjcaSpbMeBV6ZJoGipu7",
  "key11": "2qQgu3Pijk9pAidrEdViZrk6kzzW5kwMVbB9uhEneXFs2MgtXSNsP6bQpTEE2obVdJZWb1jibY7Y54N1SBamS9fP",
  "key12": "5tBi6SrzhfMHwxiNzeDRLGgaxNdhdPRCjSEaCTgCpaZYbXmvCTCuTrkRQA2rVnzFz4t8uVtTgS6w98JwGmyjLWK2",
  "key13": "4Q7n5apMyNF4Svv8DoJg67vaG8NMboT9i3MfAd1Nx7aS15i2oWRjuupZtrFPDjSpvwQa3hX4hsQuixx33NLmu8ou",
  "key14": "2ZfQ294zAunZVNHeWGovfUVBn6mTDfBbKVnSAm6u73i5B3ZbdMAxgSdhpfQZHq5mQLeKgsNcTVtFZFhRJtHWqTLg",
  "key15": "5Gj8GD2FLCnAYnqHZ2LZKkBCzqjGgpziWkf8T3SzbKyyqorca2Wz81wdt6u7ibT3RpWiRDRjYQfSzxfugQB7DifL",
  "key16": "4hk53HmXMsLCo9BmtAikrQeskjzDLRCwKvARkAeMEDiBwgWgpwNnNuaPLdn7Hj7h2BieH3UzeCneRC1rJf4TGxd4",
  "key17": "4ATx1UXZZdyLMzCmyen8kHEwocSVK31kjsjeFYYuRzQhScer4U5SM51EwsRJHvky2wCwGmKGv6yMA5QADVcrUdex",
  "key18": "xhdr6KfBKBmhTMJGomcjWYzEHvYi8XCkjSQmFvcjqc6iXjto98QnPxMkMyN7Ay9TLXss7BSbap6uV5WcS76uxLq",
  "key19": "3uZ2ysGyMeHfYaUWmzRZW4bmbbxMDiZ8hTezQ9he19YwBfA3hBZ3TNC6NQUMbwjX2dnfZ7byhmYA5H7FvShipiaY",
  "key20": "FBERwGaiXZpAuDD7NgudnKWys87aTJ7PHePnD67r94HuaH1nPBgDsQWksqejGTjrZQAd4mqySDnU9zH6mdAY5wT",
  "key21": "2DifBUyqVoV5fXmTbpi5DCURU3PbNgBTogMHWMZijhfYuHisbHZA3hn1zazdkc8GGjEubFRVvxL63rMARD44xogu",
  "key22": "8K8G25jPXeqzZFrezPd44HdQbR517woPWVvDyPzs3CRjahrtGmd8puZcv3BXSPkGsmfp3a2fth8qCjx6Yf1EHP7",
  "key23": "3khBzWCCknv8sedByFxEZxLXveRHGk4v8uMN3jcbJfZ33Cn1EZcPyEtfuLdznwFFHCJsNxtBVvyJb8z8QZd2qBEP",
  "key24": "4f5rXi9NxYEg4FaDaXoZc9fLjsJks7HhCf9fGp32pqAYt8ydyru1zrDEjTwKREXUYaqMVKym6PE1Dx9d6Azti9YW",
  "key25": "5G8rmGum8sKBgYaaCrzexSQqNP8KLMUm4sKH33UaHRRPV4xJc7Ji41dntaGsz4JFRFUGVA3EkjwUsocpZ2wFgWeh",
  "key26": "fwf8PHy3e2xTX7pjShGSa7W7ajFLNArHgfVWQQ1hfy7WmUiVH3xV3JmGVgJaHppdCqx5jj6J4VCoKRkumkkkXRt",
  "key27": "3rgBrK2wnrcWXGxBXTUqHBtE5CPMKJRQbDXQLxyjKeRpRgMdSmFNL4CBCoTPecKDifwKe1HMNvxKhQeU7RwjpE3R",
  "key28": "43j9mLWgej4rDgHt3L6CAvspfMtgnJFCK59WUS8nBPVkpwD9e29WwZEXwP9CHATfFiFBDcFsppUnJNkvYv6rY169",
  "key29": "3c2ueNstNi9MrZjTWkvKcdrpqLPnLsDPLPW7q57oLBK7C4gRx9ntuZFhs44WuSCdxNP86oyRpU255NB5cteNuZqc",
  "key30": "2dq1sMWLksvAnTRzDqSv18UdSR2FspDawk1XSqKVGjLhcsRrHqgjLUd7NxN7wFq2XHBV2tXepL5UGS2RZ6beQujP",
  "key31": "2cDJmKn1B574o4UGb4D574rfvnJoPZ5MVsVtyRQQWfiJZj6nk1JKs55wQB9ixoEjwhqZxJpaLL5ppUsWwxaDBbKi"
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
