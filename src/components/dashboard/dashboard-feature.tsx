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
    "5SQw628zc35bhD7fe4aYpr14y5oUpXgAsTvWKvQTZzARA9jYXfXgDfjYcKqxgohpvBCHJfdugvzqe8AaF3giJuoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyGERcmAfWW6qxNTksiAPPUG1uuFcFmGqjHyG8nKYjgs2dp8rQ8pzMQRFZVC51wQgj8Tuw6HYMt6DXCRmUCX2Gs",
  "key1": "2be2aGrMFZT6KfUWNBJp9UKQvHFzqUrRQX4vzbcV4YRmY9ceUgnYm2wSZYnPgHzrXaDJySmcsPSssceug1ifL2DS",
  "key2": "5h5xmaQR2n4NHvLgPv89q5bq1sy2PnqBzheGWXrbHQAs2xdRyhWWVuRM1UokLTkiTZ4rH8W3URmCNZBSc4pDyyJP",
  "key3": "2ajApdEpoVvjCWDxnqr7p1ZV3pzCMFqr3QNY7BwRsouVVDjbx7WpMq4QU69jxbCmntUKkkB3s5SUZoov7veMx6cw",
  "key4": "2TniLZbmLCQnoDRZYjJmXy63vjoVoArV2xeHyrqSiEGCvqxkipEDrKRnEmCPFNGvfKvCc12VXT6vkDQLz5qnSbM2",
  "key5": "29osJ9eHWzdXkV8xh5ubcN6z6mNf7DYQ33AtzeDbu95ekosoXHHkNrsBApX6S3jnoT2fM5kKkAugVn737CZJeACk",
  "key6": "23CmyDfcwLLicVYUfYgdQ6CHYXhSPbia9Quj5MnjUff4R8TVryy6MT1dV5i8PfSryWkpSf59vpZ8iTSgysrRnQNe",
  "key7": "3daqXRAzUs6kMAzoQP5PHo1VASxji93YMq15X9HgcgUzgbavMbZgn8CV34VjR1Fs5x8Ss5dmhr6DuGxX2R1HUCiE",
  "key8": "4WTgz4BGQXm41Ns32kV41ypUE58gSEoHM9DrpaLzamdXUsi5MP9TPxBckXpjV84Qa1k1xVoVh1iuNjxrDZNc1E8X",
  "key9": "3za66PwnsJgWauLpZww5Qcr9vghE6Q39bShJgimpw787Viawr1qSqNqs3diFsnx5fbig6D7fQVsJ6qAkh198Sn9N",
  "key10": "2XbucGve9zvyUxDg5XJ67YnmWxMMRyXobtJGHf1ySNSX7vAF9GNF2q3pUf64EX9WmYw5gGvezPFDndj1qsABYyLV",
  "key11": "651WuFzfpLqv21UhSPmiFC7kcgamPi2jkyvAgAiDifzV25tg76i7oKzo4QTc2YHg58PC5LcZ5B2tCG4x8qxCEi5t",
  "key12": "25fXSb69RummVaHNidBehim5kxGfdqKJ2KJyw572p8xLhZJKUosZ6e4RvS7u9ngr6LpNXN5WoWFv1zBmNvbpnGTp",
  "key13": "4FeaeJRUKbEejBe8UhTkwdAJHjZsNFXBoUpDuf9hxEJy566YLxsZHPUVGxaRhPuewvkKzw6jJdFum27jpGhn8MeX",
  "key14": "2CNbxib2XsJFGAiRQBKebywN95joSFABFqHCNmjqc9WadrudYqepJPVJgHy5QzyqCGsnsZi5mBkLWTcsEvUrJ8v5",
  "key15": "48VwxFukuYz4CBPLzYfVASWDBuXrK5RcB8Z33Gsa9Ccto6jWz5mrAa4Spthf7YhRg3tSA6CuWkfjjzMdMNnTDbdq",
  "key16": "3xuReyRoWmBqEARJBQ45uvyXdkNu8vjAFy7FAyHtvYZcxCrvDHUVpQ9jubBEkxXj3UNspdvaqq2UQpTNEcsAjFKk",
  "key17": "45iwGv6HGmPP35fTwo448txfcT8Gf2WGHxJNuhVeo6yn4mp1hvBz4wBKJt7DnRZeiZ75RJ6tBguSHpk4KpucEmaA",
  "key18": "2yLUJFqnZXm5nFZ2iBSC2WAU8p3Kdrr7gTM98qCwi5pxkxn3cHSr87BREYgmfQsPYWyZSLdi8j2UkNETNjG46sfW",
  "key19": "4rvjVYHvmjxF2mexLYKuKnQNiuXjWC73iqKqdMxiWhd5RSk8C5pVtZsoedTHFC41i856Lr2W9rAqGFdj6UMYT3Pq",
  "key20": "4QtipeKqqVwFjX16sE2S87M2JK2y2z2Ztx1yxNid5VZNPNYdd6Uy7g9GTgzjvPHXJwzVmP3fqvCW9JwsM9dpN6JD",
  "key21": "2SGeRUyQkSqtvYVmh73BgGGDC2n7SZdpSaVaoiMGsxxvuK5cA1u1vSXH8fre1PrnGoZBntnV8xpYP4tbXWyjagzx",
  "key22": "41qLGDT21FLgnPusW1HQJYE9sHni8K1aDfsGZXvrWXukMzXBAdBadqMr98kBH3qUM9RuQWDdP7kjo3zaSnqpChDc",
  "key23": "5op5DUxHWMa9CjAAqcNLyiWq3BNobXWDTahBEM5iVJFHeWTtuN1ErMKDa3VUfiWqcpScaBpTYPWUjg39PuzTQoYc",
  "key24": "UdMWyje9c1ZR3NeysuDs4gxfAzPcehqNaHEQNw9VWdLQDJ2ZvgMZRPj7XzcXSAMGN83jDxHueZMF29ZsmYB2R1G",
  "key25": "2gzceeb7Fr2bPTw7eAm19FAtWKhmwjcDhmk9uBFPUL8XRSHgELnzhn35QY2A9fudGgEG88XWMFJETRE5NdgppBEr",
  "key26": "5erphfFeGb6aSSTrrutJdtcxL9XYuG46Pfd2noypkFHdJYE31ZnHym8WixJ8tJHX5xv1zD4GVEZ7nzRbMAeUeGNh"
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
