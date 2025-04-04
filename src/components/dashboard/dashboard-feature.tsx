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
    "5LZStDg6cZt1shUh4zNsrNckJTmfPbfaZ9mquLeUnHtvtWhRMHdjf3ebt9fJUFYmZbjwg5v2PXhv67YkmaLVjsLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vxfMMLAq9aszsa94nkx1yzjuyh6zhMgiEbRYqtBP4U9DDAhS5511rF6CkqawWfFcRg51YwytaLZsx7hD4ySbnPa",
  "key1": "24iei2umvsgwUJvCEtFL9sWQqkRPHChbVdQ3EabzapTbmuc6U7BfUHtUJQNBx2vQd1ywpTDnREQAzyUreFu4W3Ts",
  "key2": "2a6qaGzcyzcEZZ59oE6WqoLodagh5wgg4xjpJfc1UjUFgG9ax8TdeDWZ3m3qB2MbchaaPdGBJap995NDcZQDY5BC",
  "key3": "3yWH3hoQjNTriDk3M3hJCvH51jg43BVRBrZLSA58RRy6tWLhgX4eGWy8aupjaz4txuKmF4vgHrKiWYfaLogc4b3P",
  "key4": "2bvxSeHvwEXXb5h1M5FRTCooPQCKe64JBHxVLSGJ27oPx1qpKPBuvs52wAMY36bDmCzThLSmufeese7rQGeesjdX",
  "key5": "3Yj4SyLf5TL8kJhEf1bLWBFFMT2n98iB1QBwLGyRx9Pvs5VcBq4zZ2qFUxnGBaVmKWRyyVsFWo9WKZdEickJisqa",
  "key6": "33aRrH1fUcYENX5GTma186L35AbrBCbQua3ZxVip3FkaX2mWW8D9mpv3NRKnimSs7rxk3WkLgJkXLutjHiJ1aRfu",
  "key7": "4aGADsRm1hLkTBJMETYfYM6d92gVsBKYGpfRZYAKcx1KKdyJN1rWvA4pWuEWgLGTrgZC2EAZYcuZ97uq5vFe5L54",
  "key8": "2edp6Vcr3WSR1Bqgdq4xVLrApg5ty7PuyEeDA1vmRNM58tGsTencw8D94hUL7Lifi1bsBMCY4ymnNo9tE813F1vy",
  "key9": "4JpcmU7uM5xkS4JvHrqLngUmnT2YpPwvAYcj8y4g2QAUEF5TsQyeo6kd4Fzn21NWTaQXGNyEZ8jHvfvpvQMsgvUa",
  "key10": "5ao6eXAdaoDnDpqnCh19xRjadHY34wamigjhg8GnpqQ2hqAD6pMNv5ZqbuDu5J2u61Y1FDe3tytRTfNuZ9oiX3cw",
  "key11": "7jWi2UFnY11da4XVEuCEpDRMtjJN2TQPiUcXu8ZTmvaxb5c2X1939zB4wRsZv7CQtcm2eHmgHderxcNR9MwtGgM",
  "key12": "TyDH4xRyNKVC8kH56jHaXRjgj7CZQhWPuJ7Kqypk98WtfoF4XyS2GeUTUZRjhFo496dabQBnQF23ppMe9M7eKCn",
  "key13": "66e5L1ypQRvUvSnKXNF2Huf2bnQrLd3G1sCvJ22QF3f4ke8BXV6ZznQ1c87hrPEcu3oyVHzdjCPmmuPAwTAsqUsM",
  "key14": "4m81pkpoS1oPaXquabfEHvin8FSypE3ZxX8LLnQNZg5aSXR9faJYhN91tbxpwbUcjXT28kbBA24qk6r7fGAAYtoL",
  "key15": "28zSjMWGGCmas65n47993B8F5qNsp6ZJRKagzpnTn4n5BFAG4JPZ1NMo5ZeACZpUxNawbLZ5TKoXfHnWHefSTCqZ",
  "key16": "3THpQeeH9DPwwJhpPNmrw3aSfwWbUnxV8AxTmXjcnxrcPhCe8XbyaPmd4vcuP1g1GGQY4BLSLrKry4csXb1HJryc",
  "key17": "xLvAhWmRJBFs3hCFUJq93F5G9Ed4bpGcD4qo3HnDaqSacVjFtE3SHKLfLFdEXC1B5rUq6KSXyxUfFujtipwwnkD",
  "key18": "5U4cPnAYbgKLHYoEMUt94wLTU3RUt2Hr2i4vVWxPLjS7xxh4ZscyWVxAtncAv7bhYvnDvyJu42BK7YcvEqfGGBVQ",
  "key19": "63Z8ywdNHGDX7G9nnbqCmBtXGQdM4nzCeRrMGmPAy2z9kV2go8Sj6BTHmxPQ5FZWTMZqiuzyoD2g9VCjmuDe7qFs",
  "key20": "4ZFuA2ZBu3JxLCixQbHmyubRTvY6L2VHaEYzUwqXMo7s3yscr3GHW2pC7yGUccvbqLh32MZLGKJVNcCH7Na1y3nk",
  "key21": "3yDi6VxXGZadkaWykNPNHPhgMGC4Fs9drfwQT2XfhscpTHfttSZESyYW1xFsHqmhTGoMNxhX1ZRoVFGkLixbNJDe",
  "key22": "2doJFiSaHNApMvU8pZ6sutrUMhi266SCQWS3q9JiLXVTq2qYcqj489sgMUuxcj8VqhLvp6FMUR9ooq9ssZHFhpxp",
  "key23": "3r9h9jjV7V9pVTytWBmBBM2iLPK5bNvDFzXXobk5ZKRbbYX8XY9uiRMgyik5mZyEHFq5B5Ptr2v5PvV73P894nyo",
  "key24": "mAWLSvPBbpYqWSSyD9akkfq56Vjkj26GHNVJcCiDWiYY3hmMuvFfMwmK4w8ucWkjNg1aq6fkQk1kfFRfWtF3UUp",
  "key25": "iaAVGLKV1swSheqfLGPScxwVGpboSHrgPMcuB9gtZU65cYTa6y4rQw44wFdQeE6AfcJNvcarzbKtBarjuu6Pnoz",
  "key26": "4LCgi5UFSkWwfNgz5tivTumLGgMCYzBiLRDwC1EjLxa7neKqS7EhXWBSNtAez54ABbsSPDJBCc3Q49TyxQ4Jax9p",
  "key27": "5Hys4AUGVFcciuV5T41Nyf74UVtxG9T5KfpfB7GJAbZb1v6zv1WNbH5ZhX8LzGzPPdSmfqH7eoQYRz6GtBji9PcR",
  "key28": "4iRBsPbZnjNHcGPzf6NeamsNQB27Z77JxQNGSUaUATx31dp6TZnYnWMTRa5kUEhw5N8XUzdB3dV12PxQDYAaBUZX",
  "key29": "WDn8uhYYXWpZh83t6RomQHWPDGhZP2sKabCB65vR7StLd7Vkwn63SJ2WEwHmW6gEUDEVKRAkBPc8MDx2Qug4Vxm"
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
