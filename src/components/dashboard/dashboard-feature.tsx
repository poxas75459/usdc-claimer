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
    "4UHkuCDgBBvet8DbMj8aMPafpihqU1ZTZZyvXPTeBWWmgXJrgZhz3mjrfLgXEx17vC4NfFtDstBXu6VPRDsRqUJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JLLBfNEZxiAetVShdz1qVs8uEuBRGiSh1VMPvgDtDoGFrB32aq25JsWu4EvNYpfBcEwi9Ug4VFWBeNKKCCoUdCz",
  "key1": "672juTM7UZr5guyVYunwc332EDxKACH3oWoS3MmYSfzLp5durmRkHdzvKLqu6CgdNmkTC1Mpb86uWkhxoxFLFzjj",
  "key2": "522ffNPdRFLCiXyeQVqFAijBW25L71cGe4c4nyaS4Uec8gXD9axCLW1ND6wku3AY7eDqeMkyevNQ15xwzq1Kmnnx",
  "key3": "3A9DFU8uneKoUTJRwa2vk2d7gEbtcd4VqJ4D8MWm9QmEf3k1AKTx2QfL2joAHgqMWWCm54q6royS8CHyuHC6wu7u",
  "key4": "2YZQVupigZLSSzNZFFim8JWpXcPb7J8ZdQpWKBxyB5nAk7eAAaWpygg4baru67pdziqPZgVcqBbg21MQnsPH1mSw",
  "key5": "3cTVknfQR2LJ9eKtw8m1KxAKuWPSQqYyXmtHgDg4E7eV2zgj6oS2u22TYe428pe8NKZdbz5CW7HdFjz5nhtyTkh4",
  "key6": "4xZdsZQbvguGscWq6zCPNNCJo4NrUVw6Y9JjfudWArMrs9LK1aSrcdR88V9a8ks4CECkdVSNvDArSu86XrzRuQnz",
  "key7": "5c8nqwQJspTv8Ffj181N1pejQHUPgcmq3so3N5YUfQ5N8cK6f9y9rFGSkquiMnxU1VmE4n9VZ5ySLCx16X7UVFfj",
  "key8": "5q3A4PGFYPUagBvE4ikfk7dTFZWPbmdkkwaBc9sr3FUjBGHGRb8jv4ZHvKtC86u3cQcmLMNDjGDtPEWiCMNd26M8",
  "key9": "5BRzpetFVLz48N6uijebvMvBmdagacXWmgvBBWa3BuURkhzmUuZgvetrLxFu7rKsy77e6b1Vj6JfQgsbVRv4oJf",
  "key10": "4eZ3G8RFPFxRwEJtCVA3kdaxWgpTyGDD4vu1pPopBkcvBKddNxTjbyBjarcBHxZwYC636z3aTmyVM1U5bKmLSWbj",
  "key11": "3qUVSkAhwaVsyc7rghBpgrCDynZThmooMaASYaUwfFyGm9nYXYS8r1Zcfx3rqqvT3SDyeKyGPYWkdDPSAajbxxG2",
  "key12": "5SJrvRfRo1BwagiSwneEuBKCU98JAkRVNRUXrXF1CSjdbR8ZpoBbyTChDrDy5YDToaKBpP2FudyupfLXh2L3qp3o",
  "key13": "3zHGH5S9q7Et6QDQV5Ha1Eo4myThWZ1j6CBrNFgYph3tdg73Jts287BcJAFYc6feXgxtsbRSCTLn7NTzH98frkS9",
  "key14": "2QBW4okwGLkVQBXp5m9mdgmpuPn423shF7LzmCHnr8hFaUM3stuQEScs28wEvXeb6RMeymXytmTZthiRrHc6At7j",
  "key15": "4nHYjpqzdviKwAXYVR4Hv95sQ1JZyCK5dAhRYUj6w46nAnpYBA9RULr9Pk5pYEcvbVZKHYpVBhgX3T4SAvUXoePj",
  "key16": "5dn968YgKYkEFhQvxSsRkhj9LTqcxWNPnH4pNJXS38fRGWqr7LtJikVPRmmUAxUSGaRL8vbc7jpG2RF2iPLUydYv",
  "key17": "3Se2kV6Er8ws1sVQWYSkY4ChNt5WT1SWFexRxK5uBocxiCortsQHY4BxjgvbAnGB5do4GJUFeZQ9PuwSvNePpt6t",
  "key18": "3B3exFfTsMmjC5KMJU6ZHsEar6ohpHi56RGpA4RQqReXwCzZ9Gk2kbL2TyD56XEW6CugZ4KSahKPwfTzh6Ct9mTM",
  "key19": "2XFgD389n3EbEjoeDmoLZb116YAM6YkwEZmiRodWKggCSttZ1tCwBTC6mTPPRBVJNtcwgoPJgRGBQXxizadmqcgp",
  "key20": "2DdxtxrDP8XWq2K6JGSVDDW9yYZYwhUyQ6GfeB4wiKSMYWkyKJ2HPzK2TSEtGCeKf8JUUYTRdEXGu6wDLsjP1yrL",
  "key21": "4or5PhcPLMgnWvwnfCAvktAhpcmWJJoQwxkujQrVLgpUDgW6oEnqTtqD3zBbdUpoy5GMMUupPovfmY3D7PbAW4nT",
  "key22": "2vhn5EZ3Qebvw41heziX1TajvrKdHtGdnsTu93tH3QxCnRpQXUjVWhDGkM3NArB8FKrpuDLRtvjRZkk1XxkWiM1j",
  "key23": "3weNerx5W9SLxXjY1ZB7TUbW2SdzmoA31kgFy9CDHUSd55Qwi7TCFEKL6RKsgZpLdzR7HRMHXJHUqiaX3wJti7GG",
  "key24": "4Yv2Jn9knYh7pxFuVnLnaC691iUGtxXyeBymLFJNDjBZTBCADnoWgByzwsKgQxqivV9HG7DFymQpaxwHESejBCeB",
  "key25": "KhEv566zVRjUyPCQRtTQNPTnfFRLkNbUkSuEz6Z2o2bf5rsuT1tVtSHUDNpDNxD8s2W6HsbPBL4K3iDdhcKE3EQ",
  "key26": "4V73pmZGx1PnzjjiHkuPddmPAcLDD7DEUEfxQou1UWwMdXw7Da6JY29qAE6nfeRaxHscDyxCnxiPEsmZBkJtNVkV",
  "key27": "Ciw7TvUjCyCyB1BtvA3BdKy8KiBsLh8gBBgzbXTDa2iWXt5W4AV9ufQjtGuHt8PzmZUHXsEGYQcqVb3z8rcGnTi",
  "key28": "2nGScDtUYT2cweszU49dWyzrMb5McmfXpq4KqTHPKa2fLTGTSRjrropptayb5Y3yhYaiToHrNVfH76fjgNUB4DfZ",
  "key29": "4kEW6wig8GXHAYYFNJDBnJ3DviW7vJ3AC4VbzNM1TuP6scEMjRdVCrf1hw91v3zXumCDgfEzixqegc2C1dgQoBzL",
  "key30": "3ZwJJiacYebaYnfQhZ2egp4jMSNY2DGUfyYfxrn8Z93XSyzf9Sjadq3MKJV3driRJM7v14RcBJABu21vHJZaxd7X",
  "key31": "3DBC143ah3KKBiWnV42Hbxd4ChA5y1Rq1pcaonBoQx9FqFEXQXuJdPmVqqVpHZHBcdjFFqfg42SfrzVidWDhY5aq",
  "key32": "27r1siVvXqVxvQG5LP8ttCPNMnXVjSKob9ybNswywHMmKJUgkViqses6t91kUwmsPjhMSYbujBGfrYeFvpEVGawr"
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
