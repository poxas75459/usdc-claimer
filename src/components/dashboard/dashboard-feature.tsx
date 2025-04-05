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
    "4r42z3sBFBjBrnU6GoprXb2JR5s3EAzLzKvNqp2gtur3bj2skj4RtuivcEW112JJLJc8vyLiaSAewsGhwybDseoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTXcha2Za1pAeY9ULhvTnJfdVmptjap8L8MbTPuwHAsKvGDyEhEjttorQbcdY7cQ8DgZkviYRa2ZyjcJg1E2Wn3",
  "key1": "4rBAhvuhc4iExqfuFXpXsnSviNCTF2ANg3fG3xCbuH31qoxYtuPgyyTN6zJpeSJepJddQ1YykXosTawNQDmGAxB5",
  "key2": "2H5toszNUEiPMtZuX6uAdFDbYhEaejmcjydkYweNThYnV4MHcawjnWzrDtwBC51eFDRX1NrnYpvXd5JvJVaPPdvn",
  "key3": "2NBhhVFkdX5h4aNSakoGkvRENsc6bXMn7QMxkVXhnLP9wtWe71KNqhzDZLx1RBwnVXcrvHR2kMwne7S4K8suWvKK",
  "key4": "vuDit984CcavdHpWcxtFBoityXB5XLxd5UXeffJB9NXUYSKupqZDajFr3gY4MDd18rY54HNc6qHDeiyb69YYpTX",
  "key5": "3rTagRrorZA27YZpf3naZiG8UwExcwA4C16jzJg6VsBqfYrDsYmR5ZHNCm6MppP7voXVTLtfrGCRwRvYTH9eq9Ab",
  "key6": "2hK7P1FUj9sm25JeVvy9NhmyoU7HTRDmygmm6TV8iq4DaksaEk1TubWTsE2Tcnp61h63gxsFqxMBDs9VrqPsSdG2",
  "key7": "52x3RwB19JYx8dn2MsrHCoPc5QCRTkXix7PqAf86yHZJtvezWYVGiLMyDfrQRC1zZpcbdtAudtMu5mDw4h31pBKS",
  "key8": "3Pgnko9h2FUeDPEJeWJnhqmVvyBdX1HV4aFpxvBC5EUy1YHtrybKB7MsF8hmYuk9M2N87DSJJDqJH5HCq4vPwjp1",
  "key9": "4BYvwFfcqdSfYbLScAuTUhi7S6qF2kYJfRDVksWF2Kut95s2mPvuWvfVv6wvKPWjuqwWLjnXeyXYe4BhCeGcNPh4",
  "key10": "5b7gmVXs5DZuVr8UGMUAhP4v3sRRoM4RWTtHsmRVc5rufu5YyBTR9VnLhGkLLNADwkPPG9AhGoPJCh4CzLpwi8L1",
  "key11": "4mHUguc9diD7LpK388Nu8G4hNaWhzvXPGbTEU2uLnEafxWQQxVgUcf53MCCZcVkquw3ojGh3hupvVBMXRoW8JK6U",
  "key12": "22PasbEsQqHSXjATXbGrRSdvzVo1U6LbpEANGynZmqevBHPhrCGP9JmuchMA2p5i1y1tHVNpPZ7s5UTdkzyhEUoY",
  "key13": "3nzrAWy4TCGkWGvwLT5qiUfBW5VBwesaYGwuCGrnvzoR8GoL77prMUmZ7G8rSX6YPJA5wnXuZ4CtKowPJrnZXHrA",
  "key14": "W7WjuSM44aFebUtRqUjkNU4C4cd6X3Rz2BKmhFqxoJJhfKG1fWbkMZzGHQJfUYXrBuQ2LnSuFcWkM97q4cQt3Qy",
  "key15": "m4xdHHwDYXTWKWEMH3abUiirktDWSELmc7D8EE8mpYcfRhpHF1v6MygUrXontxMREwoUzNDejMAATFLVERr8YGn",
  "key16": "5dHwVPgmbqcVXBRaHuW69MUi9U2V2btpDYsgDoGkkkb2tcKNZucay7q82os1TqC8Hg6F3gSo8bsKsXKbmDfMTTin",
  "key17": "2fSuqtKp4HaxgAhACtfhWvrZKpeZwTrepf3rUtDRenb5a4tEndFA6XqpJX1kMToGTUFjzz4i5sPvPFL3HaA6domR",
  "key18": "216wfoMpF22kvjcsMfsRMEMihoMz3vswYKgPXMhoqzhCXdCXJfKJURszsWAHdrwpsThxtWvPdrEq63RjznASgtAe",
  "key19": "386ZZzUZvXYPPJo1Qc6U5toFoEVVd6xdVuCKGUDP8tQYcSz9RAdjmxt6BHbyTrYoTLSYWZtUxbxXvoZ1HcT2S9gY",
  "key20": "2BUQn23Hi7C9BMQtkRd3VxshS3ULfKprV1heAksTEarS5DikWjApdKztWXqs7gpdQc6xAR52ZgaAaGKn7kRJq9iX",
  "key21": "4xJfJKcGEaWNSPjWg1obcWqjLNPzuUxC32uTCsQHTNBWk3B92neb55s9tp7aW9JBwPcG9gwXqic8svcLt2nHmMsr",
  "key22": "5g8EJGQVXBEz54ySUFUAocF8Foun671fceQpnWfjbaJbgUPF1ig9PJAqZXuk6ApqAAzR9mASzUnwzGgArLp93Zr",
  "key23": "KZ9QPk8TGwfFra3Jbwg8W6aeagUnPM7naKHtrexvsHm3xW4LX7j9fiUuZQao9kRwpV3inZbp4yBTcETuKwymxxq",
  "key24": "iNLFaMcYr6Wtn85AWTjPTUqZbzAH9HWzMKbmrEZCRuxbHhvqQQ69qQ7911zNSDxqbqCeLkDcBiMZK1vEWy5LjzR",
  "key25": "2HJhiGz7RTuY6Cbpz2RmejBGBnM2x2661nWpq3KUaKaYsErBxazJxvuTfhVXqiPS8KGDcrq3MJ6FKxcHaKRVNAhh",
  "key26": "2Gyzk8BMTntBJuWUCDV1633cMTL3uZskASYVSM6vkTqACPo5BDUBPNa67Er5fLbxufLE1TDoq9SjYQZcBUGV5JgS",
  "key27": "NRRFnkHJaoG58QZw4mGbp18KND48KFWYR7V4LrWvtjsFCAPrA3X8DS3JrFifFF8sybkjaJ5MuuVCZf9ZpW5TA2K",
  "key28": "5eHtmmj6aFx8Mcn9MNHnYCVwLhiLvzW8whhLRqm25xtNAPjZePhsQvvY6o1AHPrvbQWkD3ieUpunz1nyr91nhBAV",
  "key29": "oFg1yFLMo3p5KR2SmVnjiJVGVoekNYonwFGizXgJ7sk3WZMAMwFznCcV8f5dpKaUmdeSD3ghk52p9nhHsG1KUCt",
  "key30": "2q4pbuC8fGBDb7uUZoPHuSvGuVnayKmGN6VYZYTYtTvFXZNMfuva9ucxvNVXsTXmN8YVUfPFmUneFnLeaXNL8rLM",
  "key31": "4R5RioP4KWXaot7FN6RUpvFhjyxVhDd76NwNvr4SLnPip5wNo2eJ23mn2fYQ2746Eiif55PkGKYDWFCmYbVtA5QR",
  "key32": "2FzuUXPN7TgfTrHWSE7wCdJfwe2DBXQs5FLVLFtXAFsf8pLerfjozMBRLdfd5bNMTDgjUY9u7Mft2y5xmnk3PuLv",
  "key33": "2EJZvz2DNqYXwuJ27W9sQ5vQuJZpADZpwR1KZBfE8KwGZcenDPCWHbzXDAhDQJj5qArTz1Y6LWA2gctY8QGjZMmf",
  "key34": "4ZUqTWmTkJ6WE2jVW1YqiVBy4B3mARm2NarNLDaNUvSRGmUbT6hLFtRi3w21tVsazG8YkTCKkqoYDsALGX94doAD",
  "key35": "5xuZkXyqaMadsnDkb1uBKS7i1DeshcBdR1SUkRp3xLL5jAqCsV3JFKU3frKjvYCHd1xb7VfG1rPuavNmCq6f4wf3",
  "key36": "3wbBbPvvUYnT9HPV3mmTGaGLEXxivAdBGEssKmvvbGLCr3p4dxTrQkuk3oBfmntDokBWTseB2YYimy4GmtpfVMmS"
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
