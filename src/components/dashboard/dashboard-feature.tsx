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
    "4Am1w9SDqrYsLrsnBXem1uojqJzvguGe77fAZUtqNRKGNLyTpdP18Dika1eMgAS2DBF2YXh7X3WwFyMeNtP7PCbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CF8sSwXrLvCEn44kAmUzNfwyJjzjx8UrTDqvJWF1tKKag7MiHFWd9VBwiqZ3zpcHjyYeUkvk868PosNeUtFgQPT",
  "key1": "3umzMCCVZSMGLy3Dd69qv4GQSVy4Vq85Rq44qS7UAnPBwch5Ugc8aZTFuLQ7a2WgE7JYcW9SU4g4BxrAmoZh2jMV",
  "key2": "3EftnxnMrY3yKfdKTkC9jobpvrhyKLMqgE2J7sqi6j2PFTQm2BQVy8DBHPjrbH8VALeT1AVH3Zsc7zRgPfHt1rHU",
  "key3": "3bTuxL5mgVVwWT5rQYeKcWtKpRTRQQMb1mnvYTNFeoFWR1yMhGapKSrRH6ormQa1cAgGrK3r89hwQ2175WzE4h4c",
  "key4": "dS8UtSrdEZtfXm3nEjWB1dZ8gwkVucPopyEyLMW4PsdBZ7cAoBx2HFEHpRAopgMKtrSNG5oAXCRQhCqbo9m1nfA",
  "key5": "gki1iKyfh9kgqSgVSYffrDnNUV6zwQEPzZanRYQ7LMGHqPhSCEXRJEFxHBX5KhdA9DdaFpZ1ZjMErt4ELesVagd",
  "key6": "gFRQj2q8ZHsFfQQtzw7j1b7RvUwU5jx2xdbmT4k47pux64HtbPSQcV4UXY1S9c3wFuxG9koVYD7L4X4SxUGJ1A8",
  "key7": "2ZXZQG4PgekSDTmbMiYbEfdUDVi5LpYTcA1uMB1orD8M2E5PGKtaa8aHfWedUxrhQbxqJLTzpUxkfPXLXucdcWvy",
  "key8": "4GqQBEHtSyd8y53kqB2HLnxkQdxU1CkDeCqLUDJfFbcgReA1wMRCRgGRywpazECkJsxUSfduNoJciFM46g57GE93",
  "key9": "47N5VtjPNTaxMJmRcvnvU2C7QnFTwdbZ5TUPdXRwZfbZgpXNz5NVB97FyXt9oc2D5L9WfvnNv6uNCjL5277913SY",
  "key10": "5p9MDcGEF1vMFXqUVbLMC2CDGcY5qAYi7ofGvjnN8SFGRtL7nsBqZr9PLYBcXP8CbyAUHQthzhw3e2swHxuWE8F3",
  "key11": "5eUgtK68Y6CvNfF4S5RLg9o6jSz5GjMhggM6Y6me82cf9WAcasgoPt6V72TztyxUuPc6EvVdvgFRd1ZKKzo9MDaB",
  "key12": "5zaYnXUbEBN6qmNAPoU7ETJrNYvqZL1kk14ZYJvDa6zhDWtbFbEJHhDHqRjduFxq9bkNNT2JHU2PwN14sdV2ovu3",
  "key13": "49rkAbZPEckyLPiTsTHijvhyW2bCFVxTe2kpMaxRD3KP1kbx94mGMdexbgnhgeMugT4taFoMXQgHFG4Xit8Su2t6",
  "key14": "25wyfnkaxJTqRgRCqjbYuoFr9Pv5HBV1DnhZQpMJZAkzMXhYVF65fr2FfpXHzPtsCSjhfF4Tf3w6UmRFsvK6wiaK",
  "key15": "63eJWGcdLHUa1wyy91XgAZciWGbpw6tgRcxFgR2HyYKt1bq7yqqRpU5nAC2Vr8AziWhYj8GQfdJdzNuV8CCsn7P5",
  "key16": "3EWarUidxHWegqFnpPvpkYzgHq1RTzEzGVxPRGatzLeGq6igCNaCzEsriQ6hbCzjJqPB5c4DN8J8vfns4bLRy8f9",
  "key17": "9ga9Fik4XBg4VkNsydFHJho8jiwtM4YoJakJ7BQK97WtXuyB8rugLNtc9ibsTLWgPjywzAsmjHEEKB1JoYgg2wX",
  "key18": "5Szy76GRke67m8auFBD6FSoCVAs2fJtXky1NLwxiVY65odHaTPtybxCuyq6tZqQ1wcfTjQMsVH8kEwDn3a9Vbxaa",
  "key19": "572B1h3thy3PqV6t96da3ZKVYj4pL7FLwFFPYNjZ5fUWXAkbsPMEJf3ztZwbSRndiQWEt6qVMXBMpnqJH3ZLK7s1",
  "key20": "22TquWhzcbvPfCTeMLSqZybvCd5z55oQF3j1ijHtLLtPbwoEA17Aq8rKdi9A1qyZAcskSNpZFCNR5TFVEXiLr5Ce",
  "key21": "eyGG5heGmuVM7btDZj5Vjy1oYeRnEp7ih6KaSr4wtmWsCwX9YUKDVsX3B8AUdy6rvtjzPWhMA5BbRLRD4j7hUcz",
  "key22": "2tbwrsauBajfZtAf5YLwC3eL8V2sB8NfdZdraiStqTsnRA8yVbGEzDrWivEHfiMSGfCCrScx7SJgdFqYupiz1N6b",
  "key23": "2bSDz2j3MfQgZhfJXiwouWNTCdQTTcSu9AzhPsD1as9bPRnZc96gdugfQZSQififcsXPi8YowhDUW3n4rnhU8vWT",
  "key24": "jiDCqBW291973Z1HhxVA68e4CcYCUmMUfesYAAXCRycJ78ckXjmjabf6uaf3HwHxJ3ba9V2wzxFjqD4oL66pDB3",
  "key25": "3pN5JFwbeEZdjz24sX1tEBKtpJXbnp1aBbC3spvZF6PTvESDhzaCJ7npjpG5GSMPUzfha3968Mgs2P7Rpnu4jKK6",
  "key26": "3Mz4kTLGisK1mdLSUmsXhuGUghtFzjpN1nyAaD9YMbewHBpZYbyfpPGvJFYhhUBPYXthV9FZchsbY5Skx5uW51Q4",
  "key27": "Rrug4Za6fy3Kh6afiYAnCteoMZ2darvcLeqJ3myFCWNFg5KXzbU31q7qrGmwZex2gHcWwjbuqm6VnkThBAhkM5w",
  "key28": "5jffEDKijuzHwsY93jSetf5AmGo9tZ1c9SBN4werAAfo5JdC7JyhqXBufSwk3msduqo5Hbo32uTBSdCnezEychLm",
  "key29": "4KqAQyC5PaDv4y6Z3jtERoTtbYLxJKN6t9BYehmY5A7jghEJTQ1SABpvHvYCgz1kHGA14RFX1RqK6UaiRWMbC2YD",
  "key30": "2fWnHzt5nYZSn4fQRaj1LMPrdDTPdU7JcydFvkwRGuqE9tPzonEAi1csuh8SM1G1LstKPZ9tLx6SjdnrFBCXv8e7",
  "key31": "67rL1r3jumEToFL5uiVztsZ3rCrB31ycUwPPxEBeA29FmNyXrUiwtTcbEUjPNWaf2tPpPJHEtVhjWoCPnXiuHkff"
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
