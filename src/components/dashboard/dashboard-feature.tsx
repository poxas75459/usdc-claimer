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
    "3LYcC78aeTQrokKr6TtRLxSGLYRLRDmn1zhSFMXPYBxa8dKaMxCX9JuoyhCtSR8zrHku6RrhTkaEyKNhbLwnCFJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgBKN5YKqemSf1AUKCbRajcpGM6DERmSNsoqJ4CrxHV4AFpci3dtEC4LLqYW3UHPCYtbcVCFojxfrRDksMN9UqE",
  "key1": "6ahCLYGJtkbysaDNcXKBUKzv8CRZTF7JF3QVMPcd9bsmv8R6TFpUB3hPjE1gHGMz2kYhVjtWskqrGDJRCvtSRye",
  "key2": "nSk3YWovz29woNGxxwSkKfyBo6sCU98spi1RDUKXPV8dko9h7C1aFcYEQrnMZvaCywwAqggQ3Kps1L3Co6Mbcg6",
  "key3": "5jwxhMmasmwiEJb1XQVpvjsThU95q8j84CseefbNEMKyUamv1f1gPm43tohRHxemitZqAtyGKuKDX8hcW4GfKHs8",
  "key4": "V1aX1SsNidwN21NpiGNWgxYuoVPbYdyu5xcb6BRQ6WfAQBSinoMCj6afN5QzvFo2a2ASPH1nt37fKvKV8HJVym2",
  "key5": "2Vw2ctjdECHikdWtFUz78njsCpTtfgRhkfwktKe6hma1gshMDwzNYTpo9gHcYL3bvXfTmje8tVF7wEMzo9vaRJym",
  "key6": "64N7x6kciD6EG8pCba6FcjAiJxzBXVPd4YKjnWHeuo8DSfsFyAt1bZoVmxivxozP6hgcuNfRDjTghwNDdKNp32Q1",
  "key7": "484vfaDJ6w9DETUAp6JShLRkL1vr5TuNkVSsBWffy9mitxcy47kbQw8rEhWdJoQT8yb1PiZycdMVqrhq9vTaLJGW",
  "key8": "5SpuFJqakfe1nLGcmfkEP5GGzuBfm6SHRZRNSN4MQW1uLCXZVciPHMLXC2gWioAsD3WLEFv4ydDjMz8F3Z445GK4",
  "key9": "613RsJksBBMa4GttB2RncNsXmhyfFKEqstwfq6U5L97U5MmD5AK5N3WZaL1QwLSJgbR3maJSMVNAr5ArPkTHFcxp",
  "key10": "22e1y5xfYeYDySBPAsrr1oZ2CUXs3dFpx8j5VEQGgs7K62go5zq53QX3eejXev8LM26BssmN6piQcuJKs4Z7AogF",
  "key11": "4aG9PUPN2fg5xTd8SEhWzq7Nka9J9VTnqufvBA4K8LFu3hv1HNa44qcdCQWdWoMFTVKxd33hoNyPFBbMpovpf35B",
  "key12": "4o9TmTGStzeuQzPVLncLjBsbiDQdvC6P2j8vDXmYNdMwJMG7DeW5WQjK6WqNQLz7qCAvKs3kN9ZQ11HdABFvxccJ",
  "key13": "VfSsaqJ7UrT46rQHgrmzFrTsBDUnT7j66K7LmMDwhTS5Sm4RRFnpCDdwMdRPpWoJwE8Aw2i9wR8Pr9WW9QeSpQ2",
  "key14": "5C279uvx5hgPA47GNkbokgnhhwdXVPMZv2SczKiKTFKDPHWYPimhvvV1V1oVj1fFKkogJuTaHx86CxSq8hiWVf1j",
  "key15": "2PyScf6BddcCmZPHDvb4aaZdLmypCWPYLaFg24qYNfXTuxUVLMJkF5Cnjg1jaLHShTitkf3j14UkwWshGgxq4KfD",
  "key16": "GAx6Kqa855w9cASkRyxgURBaaCPSZHo1PCPAfp8HeZtUwbfw3oSMvvgNwynEVnJLS1Km3MtadXnvw9KsiCg31om",
  "key17": "5Mfp7iXXAS51qDKrYWHWvGk2QH6aSemUce9QiwMzEgX8N9zCRFvDMuoKYVeVe4ZUy42nPzL87w9AEvbwC4HHj3Jb",
  "key18": "3oSsH6jpMqwhN7qSwh7twJ1KUDJWTC6u18yvyEGe7K2iTbCXvH1xYb6KsUgtacaLQYAQtYNsp5BYVHys8Fx6dDFK",
  "key19": "2MSY7WetAhDVoarVQRFt6jXpKv8wtMjzXhTHFXrJoBkWaV9HX5ne6kVYWV6QTjsfCGGPAJiszUDbUk6zPqNQtoD5",
  "key20": "4rAyatunsMRsAJVj8p1fTmWtKtRa6s34M7DosRPMMqihh4EC2eGuHk9XvCo1NRiXeRjxA1aMS8dpFW2b9agM123p",
  "key21": "62YQZovzpzxgkjmDiEDQdPNCc4ipRuPtEMqzLfThNHEWWcce6LKWb2YfEfui9AXjMXrgamDhVXps2dDo9ctHut1U",
  "key22": "3WMidxzP8G4F5JERhDoYnCBwDFEwv9JrRbJjd2h5oTygD22CBEuMLhyXaWUDGgrUzAyC3UL6joW2nWmGpQUDvguZ",
  "key23": "65Cw6RhF4c2Y393uCp9KMxXSJPE8cVJbMSB6jTwkgdft7ERxnao1ssnN4AjNdtdqu1JoJNRZLPAbTGZmgEpEbifN",
  "key24": "5U47GMNMggHeo7fXFgz325ZhpA9RzHq8hMN1L1fJqprnJUcmboRYb7biwqvAamz3GpYVUaFeCwh2daf1cMSK1aCK"
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
