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
    "23D8MkLYCzSQM4akvsAzCydAswjHS5Yam2fH1QQ1Wue8BCCRGbzPCSbDiW41s6y8RZuVFmYEx5WJtnis1S1ribE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AAAm5Z89N8h7SgfYpJ7PwwvYzSPXyo8HYrurRi5s51YTr8wd5S6LxQZP6H1zzbff532cgiy6qBhBvprScZwG8ZR",
  "key1": "3WdQ67yZPSpsTZKuWTNjm52ijtFjKktTsczu8bWWHwzrLAZUCGSKB9nJq63HPi1NHhj1J3tz3y344KsosfSjuLq2",
  "key2": "5CybTYq3CxjyTTNJNx3P5MnEcHnV4boA9Hbqu27AEq9G2upUTmEN2VC44MyF6nAUxUZoWwTR3L3ugUaQ2pHa3eUr",
  "key3": "2QwB6Td9FqPuwH868yCiWTUrzviL1ewpDgtN4iChMpKViWDTw6VDknudrzyhN2xweMF2RQiD2sjXKCjALPm73XUm",
  "key4": "2zeUDmawhPAouutdrRXHKNtZ7cQKP9maXKxLG3Sm1PKmmRfJjLfNkQmh4dkTQ2CEzLscEYyJytQ26LjBYFzQRGhW",
  "key5": "2U6e2dcVmxdmGqXZioPUwojnoKTeffyNbK4accHEoNzXLGQDv43sZPcrR9hp9AQU4YeBDQPLhcN7AWa2Hjsfj1dP",
  "key6": "5S3PMqgAf8CKh3dioNcJeoCWSoWU2iGcwUxrm41ktEpNUY2heTNvhjmwiFEmu3gp3pqradsLPF9Dp12cXC8yug6C",
  "key7": "3nRPJRNNkESgZG2bWywoU5byjPM1sArgqUrBncgnhWfXxbes4Km68HkSXQpWHmMrtKgarvfhKw4g319mJWgMXhJG",
  "key8": "z8SqVAFNsMJbVq9F7roXRhHogeJ7vdFuPEBoLNzZqL29ESATZA5dvbDQ4gwb6zCyJnV2v5Qumj3Jj9ruJahd5bK",
  "key9": "9FonnVNunkxFx1boQhGx5KKsMEowzcoFFsJDNVk7i5WJuqUHNZMsiB4QbPP9EGYibGQyg4AJ5gkkS3CQMhg95FG",
  "key10": "3UuwyEsYBNXcNksMDMu1ifxW825itvrazP4uUJavtV9Vfi3GQ6ev9jSF4rRiMK8ctReKKbN53MNskYEEDtaU34Qr",
  "key11": "qujysK2tE3bEvstynwCHN8AKCFA8dtgKUK1Ar4b6yphrMRtvHKSpLCC45f6QiibVioaYztQZhoYy2pwuh44QnuA",
  "key12": "5B5r5ZBaXb4FVwfdau7nRthFEAZ2J3RP2V7QTFREgRNrNbvZfgjdTA2RRn9318AKJDL7TcYoocMcAzXpZsxx8A7U",
  "key13": "2RnA773ZHuHz8vaPBVBqALYiuS9iinngZ8qWrPqbLD9XptETUCv9UxKcG7T1uViHkKkFDThqmJf28StKM9mJS2Ra",
  "key14": "2NSURZyX3cFYKY3HkFDyoDVbtYJ4G9FiJqmyBuCBukQvRme2NzcHfsR1nDPNyVbpgd7LWLy4BodGDfovkUgSk9oP",
  "key15": "4RQSbBxkt7WwD4yMbtMX7iL6TaBkqAVnV4YTvZzbdmPoADhQyoBV4kU5AQhCimQ6GLfFyJaesnavMoxw4zUzAJGU",
  "key16": "3UwQYR2LKzmeqi2Bjs44bGgZnfcrJmiHbbfUzYKGyVtXBmSLZH23q4kN5k132N6wu2Bf98ctPMsakGdmxPudV2ud",
  "key17": "5USooFR4DySMF2sVyMLXiJ76QexQ57wyDK9KY2WqFptNQ9dXMNPyPEoCpiesjELW4MMhz456TV3AoycXJuaUTEoB",
  "key18": "3PEpsTRKUd4MuG8nqw72yQFM9C58HxM8YnJ92w2KYZbo8JCKYZe2ik6eNPhuGxit7p5Z5nqzSJa1FEpXAyDVn8et",
  "key19": "wLPAEszEx4K3ocJDzyJdQiVyjLQUDK6ECf53GRUG4y8ptQoTN8rHSgoS7PEatoSWbk9U7oQN7br3azdQ7uJAxpw",
  "key20": "rSFDS3YMRRPwJ1a7QWouhcHemHiwdHijKmVfv9mYA3DjjXVRWCJgdbTrbWfhEXf8W516V6aaUJawkCpCRodTTuD",
  "key21": "4PVWov9XyUhwQKoLphDf7cUzRJikw2FpmZhuiciEHPq8JeFpvQ2GCeSNkm5N4posDhcbpEk3jDo35zu51CXompPp",
  "key22": "5Q5PRXcGH19TqUdDjMY1BY583E9LdARtGHuCxfN1K8H73FeBWMDWAshkq75YHVV2xTpTbFL4Rt4JAXRRcazGdoj8",
  "key23": "4TNcr1xXD4yRvYxKGajZaUpZcSHa5wm4o51PkpHxzwTvWAmwP7dXxGBjM6WwLunxiDUyCW33N587WVk9aQgy1n3Z",
  "key24": "5fFVNRpSguJgqLCGY2KrPpFGyCrMC98hGoNbUJF27tu1xTfwVyn6VJwBFZpjBZKmN1nivHKWQ7yc9BVExAEYi4r7",
  "key25": "2rSVZqQMG9CY4Eo9ZATyjEFH3sXJN8JjADBNEKUUX5kLASdpJ8ViZpvbE8kAiyu4eX1RsLX7nHoqvfgzEyWbRrck",
  "key26": "2GFqgstLNoVm5iPEqUjQz8oYib6Kqv9dCWjxodx87oEv4okL7XT9UaUarymBNMmd19nnBJSW54AxYXeKkEHPaFua",
  "key27": "5dwPG67HdPyjpqwcoAe4qjhDTNypYYSmiUKPXnfdVcuogkJAyNEurUXbaZi7aQaCwvF3BmCJLVmK6UrU6f7JhfhA",
  "key28": "65KaCnzZYoYZz96yZ71oonKtk7m471F5X75srAHwLVBsg66H85hMin1ZzLXGV8xC3x44py6KD3dNCtZhg8ZVoBBn",
  "key29": "5Zw93wfawbvmTaizefzKJzRYGdV3VRdtwzyp6WXxGNb1pY95m8nXxhkeNcaAtouCBow6N2xCzX75RgPNksfWLW5M",
  "key30": "2PPnzgE9bTdYhtNRHCpGGxSVWCVuGSXu9SBYHpXWS3TKUyCKu2Wz6URdV1bbu1XX5dRteSzqgz3TscNB1Ae7VNhm",
  "key31": "3BuyTPmTCWZr9mEc6R3bcFiWwc2SJ8Uy74e2Revy4wv99k1BKt2Mdy9ovi1WkmU9SqGMnvqwUMv1kWkG6R3m2Ffr",
  "key32": "4mMw2oLQsXdSs3hF8mkD6skP9GEBHPBEnEwiUBwFwRfwJrRGaNYPrti9A2voJZh17B1i7cTiEQtCaeUb14iEPu1M",
  "key33": "GkWr3MByRY73oatnGyT3DrvhdJ8FkLi5ynuxtSYKhevR8KxdDnXjbvsAHspQ4GZ9KbZXCmRwqKTBJSiVBTQeNr3",
  "key34": "6DLyAuGJyFENMis94TihApqvdT3XbDvsvUELSKdkYGdt5X4xccUBR5HkiQtGtRsBStBEfd35i7iPoGjFgd4NEhD",
  "key35": "4aSZcmpUYerQ7ac4WoXLuM8VXx3gfZYwLHAggZdGzLBmtDaaVJSQmNUhwjq2R96TNYSCTegeUEh5w8c7JagihiLq",
  "key36": "4JnRh2Rug5cELjbKXsp1mjBycYnTNCFrHAYu34mjP22ULa9RjL1q2z1vBVnnnN4L2Sn3dsGJMPsn6Bi64BN8FPng"
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
