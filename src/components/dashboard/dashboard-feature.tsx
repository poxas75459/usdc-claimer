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
    "gZDjrZWKhVt335PdB3nZhp9nJmXLupJZD8rDEA2PSZePeuKGpgxPDauMYRowwQASDt8NHz7k8Z3Y9D1T77Tv74P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RAKNi3cbk2MztgKBvTXyMRE1KLTskc6JKxPyAKpPotXyjEnEj5d7LH546m8ioFxV41wNWiVmFeES4t1MyfXm8yA",
  "key1": "5i9gyRgRCUF14dnSTv5LvXip56MKCw1wFzWoKJvUyLmppJUHQ26iNppbvRi8Tup39fj4ybxU76GPzqJJqXCSXzRG",
  "key2": "4tUaykregesEj4K54MTuYJeRwg15aE5ZQEg1icLvYAnGRp5S5LnwuYw4ze11r8qkRWtV3uVvv5LLx8NDcdYq9p4Y",
  "key3": "45ov5fnfZMkgeJUbunqMY1hejoNdBxTyt2T1UuVDUkx28LC1zuBJBk8Pt8EHuhRkDUET38Y6rZuhjJ9FQPDBcEaV",
  "key4": "4pptussjzgzcZY8unEa36wDQFWFvfyKEnxpepyd5GW7mQGjsNz3SWk5W5FPmeWABX4QoGJHBrGeenWG9aaRDmqs",
  "key5": "4AfHQBiWUciXHip1s2vWgVoLejCdjbsoaFJtqrXTAeX6JWsi66SRFLqbmGnZ2xinQfihzYfnwr8GcH3CdvcddCDG",
  "key6": "536sfbSSftjPewSiW69Ru2V8JpVF6Yf1MmqmTF99Nx87HvTWhTESF9Y7mLuUBffR6mkQmg6wenZ8hHeYc3rj43Gh",
  "key7": "2Y3fQBRhUeh4x9pWEdgUEcNMSDHqavxJZ3gr9C2oaaPBHPdjdNMPxeUSq2vgQA5VUafoXgqCznTvkpebiLyAu5c4",
  "key8": "4WmnfskExGHGHtyQVS7Y93UGBQE2hF4VXya1fUpehs6FfF3JvbwUjtnznvLiU8GnZ3oWnjM5qLMjSecXKYH16McF",
  "key9": "5pfc1vQPvJSSmd7iGgsyPt2xSQMuwJoKp4APErrbTfUHCf4y73HjSDtYz8MJpEaCLkgJjxC2ucaKQmmQncLEe16E",
  "key10": "67otHkEfK7WaYeefNg7HCsXANuhMnCa6hxjbicSvoyHSKtE18CeuEX6qVHfKTfvDhXRYQ6c4oMbJ46H9bTaXp3uy",
  "key11": "5jetrNndiBdiaYd5tKaHeNr4kRbrUpJxyYUKpbaJQmwyMfrJS1tjB4nPkQYh74XVukD6CTdn7Z3sei8XsxetEZiz",
  "key12": "BXPzjFcqzhc8LTuicx1Vhd8rmpdybu1eQF5akb5CxWZPBZJHJiU2YSFCbQ6cJqSoHE95cGj27LjMpTcLNHeoivT",
  "key13": "393wbNuqvB3d3iYP81EWnapZNCm3XEbKCwpWWN1auexXXGFTmbLD5UJssTa1v4W3Kprg7nRrkAERhkZram3SL7ex",
  "key14": "41VMH1H289XefzgPUXZLCi222aP7hVxJB4gmg31MyzvJNJjU4SNkkV29376UR3CsdwkLoGNDhW3tC9yeq4uzojcp",
  "key15": "5r769uoo51cfPV5vCZP9bDfqYjJQEj6wJjkMFRPcwcmF52v33EK8kMzYgo94iomT28b3R9R9WAwxCEQagY1eYrXQ",
  "key16": "5QS81yz7zNm4GwKF7EQHEnLecNYR9wrd299ua4CdAF3bk6sJUz6oku2FSbrMTkKMER3NV3vKUtkGoUKnnsDxXXJ3",
  "key17": "2dvxmWou3NN9kyExbCY67wxsb2kAYZUkZcRvF7csixp8VKtfwDaEhWHEcRBujgBxkoXffBo7WZpvNGDELY3jw3uS",
  "key18": "5xJRrGE7VUxbfvdqnjuvGTVxXycGSuVDQfZ3hm7Sp4UQ2xxu3U2pnB2h6W2ZGwgHMbGX2Uam1kxxcdfjyGqktZGk",
  "key19": "2Trf1C9yKbnHthHVgwGWU3BznwejocRgtXzc6yHSHKRwHJV37ismbihzbAHXDwFsBJ3Yh3WUY3kRe3egUoMArmuQ",
  "key20": "3JBwpQVz8tQKpWHDrQJKEk4BmpGWREaGHNiUdVpT6DPdauAK9pQVhCYqVxch3RTndBjwhWcn8RdZxVBcaQLTvCBp",
  "key21": "2X85ipXgpjYVEkqELAK9QDNbB35my4HGCVC4oaJT5Jpx7D7kVrvf8aeAg7EgDTeRj7BxpgjBsN7kMojATnJM2zfz",
  "key22": "4J4YuDDUWw8Ume3sn2ddqLK5JM9JMrc1NG25DMPt5M7m7UJeeKP6dQ7fp8PzwBEgXJUAaRCysHQXmqbAvw96fSvB",
  "key23": "2FxBj8iVdWmYx3uZdUSm64TKiygeqrnbzt9EYN4YxAutX9NxCyvAKB5tnKDFBMAdkAqsm4xw1DNwmHWBr9HmTTuf",
  "key24": "4BWjQ7yobakLfUWYeHvUp5FBQWULUc5bBoBsEk7J9nUkUv2TLdoCaTyEB6UrRYNm5ckP68vYTzyDPHARkGs7d56w",
  "key25": "3L5McsbxgTRFGezmNtK3vdbwkQ41AyUWX1Jp3iSwR6RQB7hREKb4L9fWkbP9C7K5jXEGzB2w87apdTwPwmAzzxbY",
  "key26": "3QpLMhTP1NznHxSXosWZuakneaNj4XnNoR9FrmVunQifMTjY8GqrpbKyGfZbKFiBvu8gALvEzitjMV4RQVT5dZ59",
  "key27": "VwJ2cFtGn44ApE1XbQrXAVRsJ55UfybfQnbFptRrR8NirD4PRznUhRKyaHesS4GTb2D3sCiEnbJnsxDKqip76Ur",
  "key28": "4iRrw8ez23JqUJh8Na4UvtVXoEAYijYzRdBkeyWhauonZa5npWsxwvDkc8WfKLmxH75en89wufYiTSAd1LBv2rtZ",
  "key29": "2u8jU2qfsAb4a5CDwbATKEELGaZmS8Rs1ZVVDesogJFUExJdhph6EUPP2wePxjYTS9WgV3P5x96oeAwyT5Mk8ZQK"
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
