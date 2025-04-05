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
    "3vv9ShhGG1fZPucBYGpQUSmCnCT1vadU7fMmJvCzQc2bN3T6iDRUNqRkrvuKBHiHvYysyB8D8jFWcNkozEM8N9aZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tAaWdJhq5hVM8aqpFwANPLWSuhEbndtJh5HqV4DDGzxbh1f8NMC12aB3QFZQfXRL71S7UBzux9naXxLBXE2e7vT",
  "key1": "55dUdjL7v2W9zwv8L5DdQ1pte5Dy7HM4FbhQuRE8E5fKnFjgVLKVbkodcDLbMN255m6CvxyB9YfXJ9m3mpikve2g",
  "key2": "5FpsFZNPSqvj6k2xjxV7pwWiZW5zgQS6qK4oQyHyJApudxC88sRaaq3HkXCtrqwP4iKD4NEAaUHvYiMzSuvtfyLU",
  "key3": "nWGauZcUtWpQd7Sg9ozrSKawtChqT2tNLu38nupZbw5MTDVuqz81zGhgvvssxw5fDuWRtGFdixWozBakQUKd5kU",
  "key4": "5Rpi73Ekv3bZTjx8Czpsj61eiguJx79Y4XBoSFYc1F8fE12NHMc3Q7XBqF53KrEaKDyDEkUJTA6o3kwZ7UiyK2EX",
  "key5": "5rso1kGXB4QrCqUxE9UB9AoVyYnZWpKaea9oaFQ1mrr64DJ9HZtYTYruQqvwMhQzPjT9PD1aBcuLtQAuwHefo1WS",
  "key6": "bNt9eRf1ggrpDgZGABKp2639Cgpox2ATsuD5GepvXkVTJURtLtsfxrybW9LFjfNUdpScfXmhUq7Z2NcMVS3bobg",
  "key7": "22JZfcsfBSmD1CTHw7tcsbhbXyiNuf68jANpkHPa57UrPxV9CvjY3t8TQSREoaeoveqqcgdjXRyhAwa5f9dUiQec",
  "key8": "5yj8y9yGqpK3LSMo5LQcRBB4nWr1XuSNdsBhJUM7Txgh4B7rQdiJcbyCGzHWk3QxSRFmYfGQkar2F3ufFvwJ2cDq",
  "key9": "HEszrqHnPPy6MdrBX6C9WUBNS5pvzhjPkUhRvEreYAbM5E9vMcJcK6d2n7fDG2ntDo3nyDMEb51v1uwdPJzfJhk",
  "key10": "3GJAR7P8ege5FcnKV8SY2C85HiFpxsw4h8CxCxUS7MoUgAy8VDX151VxCw1C1riGwEeQpbvB8EjJQ1jY5MqBvium",
  "key11": "2XoLhrTsYXHe2GewG1gGcbWxDd3GToHVFFBs84JAMfV1Da6SEjxHE7jsg7u2iUQwoo6hEGbkGbQGyTLZSwiBkxia",
  "key12": "2ca4UDbXcxPigK4d39eiC5ZpeLFCFtnGEJp3zsoKg9UG46nQnEgLYKbARpLVSZVigavRXC5XvQxeeWxTj3K3ai5W",
  "key13": "MkRc41aT9ZpdPFQJ7XF7jb3d1AuNu7RXJP7EgH7t3gX7iMCFJGdctvEdhmNGiBioF2JUeQacfS2tdXk1RcoUWSR",
  "key14": "4n1FmyyAspsNUtfGXicJ6V2bsyNGxGuAtYLuCPApLrc5UuryEXh8TASauF3jJBNwWfUVei81KWkcPRmGE9eSUHWf",
  "key15": "4Wb5ENopBaP3qP2ma7zWW1goBqqk8aPASGTg1U2s3SugH3B7ngbAmNi5ZRHh6gb1FYc6gEhBrmii1DDR3zHio7fS",
  "key16": "5oKEKa5GeCL4oiKUEMaPqRpb4biuUrQgRxzZQGwXQF4YP18vTbvDkvqHxUnDHkP371b8cnVKiw2vne6M217oMJRW",
  "key17": "4PkogJNmHv1kLXadLmsjxZzERQqKJa3Xhnk6PtCF9UhFuqkkqK75Was3jfDwQyaFD3DxsByGudykS842quRvBVqo",
  "key18": "3PMyQBgyvkCwEyRNpn1X55qPUtNpEb9s3kqXw4svrDJMzBXK2mRUYPoKbXG6Ha5o571x5g5xGtQaFPbdrWTA6rr8",
  "key19": "355MpwiYQ4nUiaL8XWXxeRdaiikZczWrU5AfztXjJnpPwpqE5bK3uRpX8z8Vyjgo7uLJpJPmABEeSUmfZeh5dGWb",
  "key20": "2nYRdJgBe5mD5Shv73JCJcugjGzhi3VRggVD3tQxrB6zcBaKG5kqsRrR2iP3P8BNNKsacmG6T8REPT8zndkbacGh",
  "key21": "4YNUfpDATF4hQ6UgEUMvhgNeHKyjKix4Tzht9E4VoYqCDjPoiQDvY6ZRSAG1tWMQUQeNB17WzECYVxcxYo77Q3Y4",
  "key22": "2SScZZMkdM2X7s2nLdBD8qiQaUQoMGm9YVL794dya1YJhyy6xMRN65kjKZDmGTkhrz7rShn1kgpS3wCnW5nugUix",
  "key23": "4xu8BCDZ32ZmQ61WFsZkt77KyrkcNgM6Q8ZEGBxGHMnR3d2SofhibFq6F8Nrg1vHHxEEG12bc8rbcH7vNyAhnWCS",
  "key24": "3xUR4Uscaipd59v3iX2tuXkJSZptuWnNAd6Uu54N9HahLpeouWvZnXLYHPff4YEm93UvmfR4yNUemjsYSNsB5UKm",
  "key25": "3mfx4zy6VDBAJeHjRqRuXBrZc4GM2i2nq15Ui6mdSJgzgGhdoxygTu2wRqgfs9aaj9VL6jMLV5qkm9TXdXJTc86r",
  "key26": "2gLPxurtfUkQAJCMpjB6NPRB4jELTDiADxo2K4Si6c6KgGbdfbDmgKwht9Yuc2VvwN8ghFWLuvSQN3wrKcQkKv8D",
  "key27": "28VLKgEwtvXrTB4oeJwWHpPDModwS4UpMKJ3SnWQB9fXkifm7HxkV1vGk9xVbncbohmwQ4KR72NeU2HMriXBfK1W",
  "key28": "4xJ6tT4nMWR4iEtxHMrtxw5958HPGr9KuSzjprtSojZBo2VdtNog2WSDBzsdoL9CFfXkQtZP6s6xkiBSgdiR7vNp",
  "key29": "3B3C6AJ7sTuwXKatka38GTNR6hrN18hrBz9hCsEXLTVeawMNXVG8q1jXwxKd26JsjviPnRCeD4ZRndm5vcAvtXk8",
  "key30": "232SGjzY2VyZwix7FmgZvwueQaRi3rj4RiMqvBT6gs5V6TK75XtmddhFGGCzk5eyf49GN5u6JCgiL7Mw1CuAiVu6",
  "key31": "4bnCzVHt842mq2SD97bcMY5UHyWhixxqkiUoE9gFdVtrXrFnBUXJnA8TqJ1ddMd7x3uB6RybXz7mEjdqCHV4GEh2",
  "key32": "3dLBNmq6Eiz6tfcBPHc95ReQRLM3H6QtKng4dVxJLiNNnjWmSHwGJneiwrffynnStg2Ve6VZeby5G8pXnK2SMokP",
  "key33": "4JdEDFEqw9CPAkhPWomDSvvdC2GkUEysv3mY5HtntLZRBg7pyuGbSHdJtdTi5DZJ2n8zKgZiBsfUcCr7HLL4pPVE",
  "key34": "3YjJgKP7sg5KodZr1iSa86iJwvm7rLo4NtbdradorJyoSg3BhxTSmL4kWYjRMSJkSPpTVWgxJ2wRrP9EwTYTSB3h"
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
