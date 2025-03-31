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
    "3LkWKD7mrhN4J45xKU5RRH4XFKTY3b1bgmFhj8YjJaK8SVLttwJ29Fkg2HHWRDxoEnedvDLKTdnp7Lqj7wGDPnWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jdk6xXk26qTsgg8ZwJLswLQYXc9KCDdNfcgHkjUxuQ1RLQHgyjLw6wnUaVAxdpa9hHT1MnjWfzH8JiiXdt69ExQ",
  "key1": "32do5DJZfXe3JZCNTsuRkhxTjERUVJkVJYuo24ugGmpzgRp2WC8s6xYK3bUMLEgri9YGRwtwo1J8tu6bt1vKeNCR",
  "key2": "4JFMKjjT5rcYYLAr2kUn4hdmFfep3UVayL7koSvGwtcMoeXf3QFX2rwKAn7TZGERdrmaYEQWSLHCu6TgkbCQgFrh",
  "key3": "5ksJ3Xtx9EkouwX15SzwAUMeRqQ3KhG3YDPDxCHgeCpfJBEyExvFaB9v4Ja5jH8bES3fTM4UgnXNS5Ruu23Uhapt",
  "key4": "DCCWSTBQ67LFC2w48heNiXELTvot8xUBy6mz6eDWU8m4JUjt2PQw6Jv745qfuntCWB6ccVo5F4pLuVBB4absRHV",
  "key5": "3u3jfTunHPKoGLA6wfES43GAmeCY6tEnp7b4o6N9Kv3WX3mNvBNYgzUtVPs9d75TbY4hwEKs9tDVdASqDRF8QqUW",
  "key6": "2679PguYy3oyJ9dUJm5uq3vhUqqMVGX4SUKPQxjAVqh1ZPij8xALnRPby9v26MbEcnvFdd9rZCVR6rgxR35uvt9a",
  "key7": "fHmebEnoHq6zrnTtfPP8NxonJtgdarduNDtBZTqSiJHLQJhY548DAX3yC9hUHXdt3jfqhvo5eoYAzW88iGjG24r",
  "key8": "5Rna8pJDRzvbhCP42UnrSBi16qyQfk6zw42QztzYZ8rvMbd4wBHLgEYrVW9gwEaQovLfh7GES9ZNAu8co3TV9fhU",
  "key9": "4eJdHd3KUaDZWA8mF4GXKxZCX2U44HpdW3BLDLwVPD7NCoTjB6ywmdNzUVpUGSwf8vUgSKvfsq2ZjYnhzfRiPXJM",
  "key10": "474yBo5wdcjadPuNKL5Wh451P45Zhz2tUyS4bUMNmiDA6kSc5EBKxBdUmjkbevmpvBi75dNViKv5JKPvS9H3gFhd",
  "key11": "DRvVPNxG8Qhi6kHEEKKqKDfaB88H2iBDDbJ5WWhvtDoAcgZPeV5XLWf5sEsrp1Ld4X8cBqWbTmdXqFq5TZKpP7a",
  "key12": "4bAfTPZEWPi4DtM3mHCLnsYF7WJftQG5Heg3LW1njDe8rCeSfkWtJywxM4FcRdL7QxkrbBCqVAc1DP5Vm89DcRgZ",
  "key13": "5xi8NAZS2JA43X9rafreUX1thwxmqakKL2yysEPecJ3NvehE22Dhgg9tTbN2TcRWu42njdc9326C2e8azp4CM56P",
  "key14": "3VhKqijtukah4pfPrU9EAiSKtECJLfbuz9TbPY5hrWbjusF79Qo6j8P9MLx7ipMmpRYDKGt1AgLzxfAT9pbjrswB",
  "key15": "mZpdVLG2poatb5FbZLN4yofsghqyphoq9XNQXTRQ6zjrFhxhRPqi6928BunxGpkUTRN1jY9eEu4xiCXKGqcBn6Y",
  "key16": "5MQRQcCqucSFcgjgLfTEEAjcYD6ZPqaj61WaZ5ns9WYwCjMncYkmy27k6SFeBLGjDuDccA3rKe2tLvLZnEQbpC67",
  "key17": "2mpfdBBLHxbvGYKmAkJqtwzSPAN2kNytD7k3dT4AfoU8FfqEbtKxqhK2wiGNXoEvxRLbdkvMeu3tEFdkUJkb4uzT",
  "key18": "3mwXLeRrsVVqUE4w4NnWNVVFP7iPPuRTGrY3Zi7RwCeR3sJh9S5JqhcnwmMw6bLYknYo96nbF9psVQ85WWQgQwMn",
  "key19": "23tYPbZTNV5WdDjwJRSWvDvjEtj2Cwtr299tBHdv9WMG4bqw3iW5eEEeumvoPpY8LDEBJJch7y2z5xVUysghhqyt",
  "key20": "2Qfr6Xt2yu7vcQecUBSvq7dnsiDdpF9cjF27JzZsiMpPRkBFSL8XhEBxK7iKS98QsA17Pf8atKGRacHLMSEFoZp6",
  "key21": "2W24LLRJEqP8cvEYZsPexhbAQgWNthC9DPgkAfrWbVityzZDJ2GZ4a3pgvsQztGfayatgRk688kk4SBrLt91nkro",
  "key22": "4rSJ1xn4puKQhpTt8me6meCzxGhgDPResXirjiMkStZtGDc34PWjt5dEz2yfyXqZaUywfHSjPTS8wEF18fZNiE6N",
  "key23": "62GqekuReE6kUNpogkraJFivKgSiTJhace9VZwv8RRjMfLh1Ldqhp6CvdVYEeWgqQ3p7EMyd15C7dydgu3XASRrC",
  "key24": "5MerAKkhaYoqVLsnhaPFChUHxwugJNkS4xtYoQUoR3F7RQX9HLUq48ggU3fCmd4mitAmNemnrxarpiAsmppuwHfi",
  "key25": "5zpef95pyCe3ZP28EeJiikA2UCJhXGFLHm824jPvWDj9s5Z7UHJD8RvA8yGns6SfNYjPhomECP75RGNqFkdjiAcu",
  "key26": "r77vfPTC1Bef1kUay91hZX6xYPm2n5FB9DZvdkAGCV7BGiGhy1stQqMKc5sC88vyCgxFK2xf1domE4qya3m8inC",
  "key27": "3TmudrauX6UJEPCjHoHXgLaRTTS7VC8ZygjrjTuuPo8N6GevWHnJJNzRy1SDSVkTABh2JLiHHfumqsJ3qyBdg4x5",
  "key28": "3G2gk7fzRgdSJyjyEdHXF8aG56FP3T7ZgHL2RdgH22341ZhHRrF1itGU9erfqej3gY3Po5rNtWcnfFYo2xaJozmQ",
  "key29": "4ZTcpffcBWPtL6ZSa4TAZw836NxGihXEzt6vypzuDvGy5j75JeHmKhkRfAz6Wk2tReUpZEBQv7sun8c7gWMioNBP",
  "key30": "R2ubqBesWnMbgaPUPLjed4Sm8igcPeZ9iWeMDQu8TDDc4wsJvxBMy86PK2DKMdiNrr8obZM6k2k1e2fT9MDVjVA",
  "key31": "4ZdHmqXs8BvnRkCcyE9rNQGEAeLuQStsCcpi68yb3YaxK51wv6rPuJSRJyU37zRFDmEQvnJtXUhopb8TLvfCyixS",
  "key32": "3FEJbstG4QM3zZNg6MxuJEU5cGKycrS6qmfb1xWuHnxzWkV8x3MR16hvAMXfGS97QM4mCnPYWbX1qnTmRLrxFzEb"
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
