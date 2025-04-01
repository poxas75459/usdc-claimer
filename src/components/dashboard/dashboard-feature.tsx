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
    "5nnUoPJyfjyq16anGcwJC4aYME8rydYdsgiHF5JqfRTYBFwArqifYDjLcj4QT7VmQFMu3r7GpEFGEuY3ee5v8sgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJ9HW2qJyH1ymSnPT17oP9XTs4AWd3pYRDFYEU6gwhq9UGfkRr6EyMKpBUh4GQcShVDpDs7TM35tTSZF7xH1r2t",
  "key1": "3nu4Dwxx13U6XQhApxT7DKFqVdb56tQtfh93xZUdF2dEvnncbVj1m7NsBSSLVPUFhJw5UHUBJuM9yKVBr9DvEybs",
  "key2": "8EWzbRG6paWX4iSrcaVfvuSs2KkCQ3Le3dTgufwTxLraMDX6LH6J5cu2aUgHV4XMeV3BHeukVN4GiDu2fa9ja7b",
  "key3": "4H9e4hoAZR3sXj5ukjeMCCa6X8iun6DEERadsgmochL1ixeAed59fNBUXugtnYRLe1gHKzzZTwQpbbpQTWKajQRx",
  "key4": "4VwJWoeUBsFVCnDYFz81NVm3uwJfjQdgpDK2Dtd99d12PYTSg5tGr9Ys5Nmrp9Gr6WYAjkifXHRrQ77C2gRBauVm",
  "key5": "3JpGJnGiGR1tXog84MxJqYXqfrqPa1VjQwCFAh3CVx78k5Fcw3fX7ZQpp7yKxMGFzMwNZct4QH7bYADJo37S5o2h",
  "key6": "ahHJ7UKDvAojJJfs8uugPr3iTJCZ69vkDxbb4K1S2VjKBSniSeoHvXu258fCQsFvn8v7dhD1886wFDLD5AiMqVb",
  "key7": "QsGuENUsrKTY51V3fLNZRJY4iigMVDdwqNhNp31UwHHfuSbEaM3NFVm46RA3nbR6k4ET95cYnaUQ9uAydmbK49M",
  "key8": "5M72XkWgw12p2xvrFUJqfYm4wPARHucZoi47btpgfKkYCERmBrfhs3XRRiS5NtuzEPZi7k7posy8T4uLw6Wn6CF9",
  "key9": "4hTofiFey96Jhmzft5cLHV3ns9FRRTXTMT7xbuic2mkfGbQWFjaWcpH9KM8Ma5MPt7iPB6e71qyVjWuR8o4XjDet",
  "key10": "2hd5MHoQ4G6P6qJeLKVxJiC3jXnKxFZacWyBx36ND63aUkCvuvEV1suMfgYCANMSas6vMv5q7f2D1G2Ho3XxPFhP",
  "key11": "2hd89fChdEbm4XDWNE7m2rDjRzgonZDLxTqcPfpTNHhryCMCAecJt4UppvdvqP2hM4y58f9Dh7Ja1o8yt2YQW8Py",
  "key12": "59SxfraLPMj4sJ5prjqMqyT7QTDqVGvvaJkJSmfDaYPBrCHt1o6BhFkXBsasBFi7Uvn1e1W1GaEgHBJEN3VC9G3m",
  "key13": "2mm5kmP8fyio5bng8F4NzAajsFuZDhvYPvAP64n9Frg7pJyDjyfFgXPeTbo5g1bmPvZWqRyLoBdCFea2Tecno2AU",
  "key14": "5x3qjZqw3cZ7jNfDxfT68CqAHvNdvfbUScBv4jLLXW4DdboX5wZ4LDhnCSqQidgfKDsbEcfkfEwZW3U7frUktBgU",
  "key15": "5XmEp6d2a1R7EJyaWpSgzcKyrkBjsa6BLnRLw6UopcRrzDQNZWWcUFKAxN2VXYVCwDxomj5mBUHs3Gr84jjJNcz9",
  "key16": "29p21dj5QQsyqAouiRKFRZVFaD2GcLYAkvVcdvJpiZuzNde5GCZ3tm9aKWnpezPKqfjVF5rgKj98Z9opqj5hutgW",
  "key17": "45iRTRSfad9eqLmX6EDLGhter1PNHyAFEHJdyzqgFUTso3k9hcJs2csfZfg5R7CwwUzreFJKswpy9LQqU5Pc6m3Q",
  "key18": "gPb3gp7ZsnyByDGnBWe4pXzc4eQPuhYW4oDMbumDk8g57Vb1dcuUjKFGCGKxJgVeFC8vXBMALXvwnSkiWj141ky",
  "key19": "5jCkG5j7emfNpqNcFhLerG79G5RZaFFXAyiQ6QWaTa2XUesvtNSabU15VxCfpFipE49wdtzXBb73Kyz9H5KgfmNU",
  "key20": "2gt1CUJCsxEVi1YHHCZGqHECXSqFgZdT8htrD3nduuDFo4dKSM2ek3GBNvAXfK6jsAm81MXiA3ZoCfA7g8y67YiV",
  "key21": "4vBK4ofZN57RkzrtiAGjujQArXLnMpT6LiK8UQXaSQoPw6gcFm1qfT3EEEnpePzCGfRFyFki8MPo15m4tfyh2epV",
  "key22": "46Wd2WycVBxGFeU3xkwpohkxDN5UB97bQ9XzKfprnqQ57vD8GNFz4BNwZE6zZbxWZxMTLZRLjZsRcnFKBnoZP882",
  "key23": "4XT7V8L9MmNpJiwdjw7tijjSkD9GLibwfsAF5NHXiyBdMjKsPpMtLg2Fd3Vm31xugkoYA2Y2kf3TNeKr5AheRcNk",
  "key24": "5SzhtZ2Dbr8WJksMWfXpaBrtWPy8YBut7pE4HwqiFnosYLdYZN3zrf35CZGqJMa6oUmxud4u7aNK9WMwKRexFFkw",
  "key25": "a748wrbLEZtCzZm2LzrWkdqH3fehx5heB293pLPwoicuJdt6RkpjABGqjeMPfkhbcUWkCoRijVaL58yg98G9N2H",
  "key26": "4U5F9gQpPwuatiB2cbMkUejPv9qsZU7sxeJhpwJoR41FAvXHvkXaJm8k2ZQzZr7ZLifpAXvy19rXMvxWBytUBNHb",
  "key27": "2A18XnB8QEbUePiazQHrL6QpZ3CM1v8wxvAU3bmw4DNvSejCx4cKnQZBQPzrZDbwFo13g8j5BaP9iN8VbXbP2MRJ",
  "key28": "5JLUiyUvtGHTwNZTyXtDv18jEyH2ZKmEhVpERW8ED8ViFRsbwezWo5VJMH3eJ6E7yvJ4DJy3yq86UDYQygGs919f",
  "key29": "4uqYFyQouxLzyjDjRsihVgVuCZ1RY5fxyD4m3LrbmGAJCHSqyUZC3iWKbcKAhsN6YjggCZBQkN46WHE2CAzAbGJY",
  "key30": "4FwCE4q8Vnv3ZSHrxy9QdLg7BBSdcKUTF9RtYXQWJBkDDKJZreASQab8HBVSQRA3CkWNqkPwKMWnRn4LwyJsbKjx",
  "key31": "22RVja9BEotsPBepZAvHebzv2ty13QwAoEp8sU9RhE57Rs7ge8U71igHUbmGapYfpwNtr6AKDbw8YPYK8SvhWDJW",
  "key32": "45dFKZjzbs9L38Bpw6ULfAEZ7L4yVF8s4tnFhYWKRZmBeZJb4mNgS5aeGkLszuMJKs3KHBdPD7MHPfXAt9WG8s4G",
  "key33": "4z8H6DiWeH38auDo5hN1Nze3U5QWxwq71cnVwBXvGrJ8mbrYe1UFgRvEtnoxJxchntQPraVztDTdCw5hGhBwjKWB",
  "key34": "3QWXuUXTj7JAqpjaq7bkctNhMy1vgupMXMoFr4hKzd7pVS6Sptut9VGmV2tHXgj58xjsJDT7yRGUV4AgNeNRbWCV",
  "key35": "4Bj8xKE51iZWPpYJtx6pgLpEnkVynxpxqxHPjCzeeGX9szfPebcMJAMpMTwecr88WVvJgUsnk6c5T2HcUz6oMdhn"
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
