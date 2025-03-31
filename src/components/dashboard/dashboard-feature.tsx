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
    "SCokPjtmAi93Rj5gsWbLxifFBowjEWyVsrN2HE4Bjo5w4BadsHkCPg4UxJDbj7b8fKXxGTujp8Y5XoeZAiE9mVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ddEpRjTtFZ7SYWPc1Jk7qnnqrvU3C8MV2Fhsg1Atck2Ci4wosiEkaUa9xwbpatpg5z1Be7UuqWPrgFd5Qy1BBwg",
  "key1": "2ceHFjqoFEku3D7zF9WzhNmvXbhB6jaai1LErK9LChCVC6NqPmeiU3H2Tymhbdgbd1XXJ7hVhhR7u1PpvAtApuDz",
  "key2": "42z8ok92X69qobCWU2QHzgAr54tJBmJWHqfqgB3Gakdx8PorK1dHhwQkzL89sXqSLNYn4xuFDQooEwyZ5HyDUUt1",
  "key3": "4puyACqCnzLcKGBEQzav3FrvbHD3CQDPcZ4nSTv9wNc13hD41mjWGc9i98m5xETyhC5jRmAyuotM6r4RgqnCfQRU",
  "key4": "3US8CpyETVahaBoETwDD394gBytM7Hi9bEiJ4Bo9C1b6ZD3C83dwWhTMYrQ22xWQ9rPZ3nUvRYBAxwdrbk2V7Szm",
  "key5": "4bpRwRcarH7zhPe4Uq65QMDEyGCXPSQqFqFC9zRMdTjNexmAQoiDn5haqxRdS24KFP8gtwThmBYgauCBPow73u4f",
  "key6": "mjgSfpUuzZgPgNZ9w2SCS3CijDuaWu4rHtV4ktCkLidcFukvK7sxn9NhYUEnsCmnTfunbTVJyZNrEpMvZswUjow",
  "key7": "5QVeWVousGZ1QATxx8BqzW7cbzJDz3GBdWgsEYzqiXoJ5Vnt6cqm9WoGNSA54Q4SHg2ymmGA8MpmnFvUJ4v5Fm89",
  "key8": "4aUiBJ8c8ZA8foXnfNonU1UWCDZQoTnhmTuXSWNrcNs1Yeom7NssC5UPTQHmidySxJuUaJjjUp1BkCUwhDZKcyZT",
  "key9": "eH6arXauVBQL6qNpzyXgKZZMJ1YPfPNZ3btJRHG1M3Ntgx5MgioWtnWSzJUyJYKzZz2DmJdHgpqocnAgz6nMD2L",
  "key10": "2DRsySbrP8QR9QxxChbw31rQDCx7B149kmDxMhDMUe9uUMtgCBQVnpUe9iRC5bnv5XVGb6LsJQxPJvB3YS5JrcoW",
  "key11": "4NLuuqoS3G1dZhvPy3iFUwnb3MuEfjheRqsVr7kDRJJemFFtRT19m5zJJtLpAL4So1VudTgAzcm5mHRFYuEnHE7q",
  "key12": "4rXx1LKdyRPY3dC9wpt86RPnuuXNMRKWd4hPM7DzxmrtV7U2xQYgw5JqcMkuL143pkmZfkCib54JaJF9WmHu3JSs",
  "key13": "RvMqPQs1CMcJMniyGykQJGr1c57ceNLYG9Qys61uWMd1gnocWXQ758aRGAtr6LwYbEdYDr6V5N9ZBNSaSZpJzUr",
  "key14": "4tSdrmJCudY7TJDAruPk417DXEcbsK21iRXVKrJR74CTCMSoKdWGkbu8PP3dWe7W9BGsWWFShJMmGbZWXxvgKabp",
  "key15": "kLD87HmhE1V7jehkJJiXtHWhex2PqPYxJjYRRAPMEmesaSpivyhcXgZWLvfREiU6eEsoHJkdDgetaxrP4AiiYbo",
  "key16": "4Ljkg376UYPZ1gS8oLj3RBYiP3WuNAGF4KMQtt34bZyP3DZ8ptKGtvVzzNXMZLYBzco2hiE8Z13rZtCsumcMT4om",
  "key17": "5Dc5PvczryxkARhqNdEpzSbc92CsV7odc5XgbYnygeiVnuE5bKQ5p9S96WEGLFwnawRDwaJFhSpAqBP5Q4fMQEdz",
  "key18": "4tufTUcB1V9AsbgFvTNC4bAVsW9X9Ji82LzSUHiaEH1SS9MDfnpWWvJq9QNVcg7KNDGvLisABieMoBv3Kh3DfFtY",
  "key19": "3JikQUeb6L7RoG4XpeHQ6WNHbAmC8xJ96RwDQptTTuBqbVXi6pKiD2DqW1Vi5L3DVJnLHSAMMht7zTssTtzZEtnT",
  "key20": "5Vzkft7iHTrVvi5gwwEttzduafxkExC8jkfU9U5uuyGSXcKT41fw1Y7H6eQQWuYy3MtcWXeThaYDD5qGGiVR7A18",
  "key21": "4rqU9JfPkoZDYELAv4orBu8XNBhEaJGaB86f8wodn93ywpg8gQbxTPwEyWne6QGAmYzf77EWMyjxbJW3Cp8iDqGJ",
  "key22": "2BQXrtiy3NXAdEx83tuDWcvN2gjsSQ1hq9ajtCD7zsinPy3N1J3FvUTyqJrbHemormgfPNAfwQ4i4WDfnzqLtC34",
  "key23": "J9HpaLeiDXukXnshAduuhmHEhERDkzGcepiGKK1uxtJeFyZatPcG3qbVJ9iGNBZsiivg4r7KVpswbVfiYWrRvAm",
  "key24": "217c1B7xozX6ciPERNjJmUc9fiSHzxdfJD3LBS31CQCKPDa8ggu3i9Caocpfzbh8VwNmJk9iax6unjcjEov8GGCk",
  "key25": "J7q2RYzmfFDsa49htPL5Lh6to7mpJSGbisTHfWfMNiJje1GRZNMKpYfk4PnPETyypRynNCXv38GDFzLhmMnPYWA",
  "key26": "2jKx82s2pmUfbYj9Dc2ejZeGG9WTNYEz2exBV9TRUD4F9fw4P9UPXtRJnorq59GwpGVc9J9xjjXLB53ZrEyxDNzB",
  "key27": "2YfsV1LDBrYAeJpHar7EUF1mJ62DgJgJQuT5QcznLxfMPpm93vxoJ75UEcmnZnpShtGXLrcMFqeSa6SdAx78Wucz",
  "key28": "4qk9Zhn7EerSNggsUnZtpWHiW6fQr43VS931C7C5LRZkk1z2vStLM6wMS63XdkqWXNB4sX891hkxYct4DvppTQ4u",
  "key29": "nvJuw89xKhh5xLvXABchNLDoLJLzSyDeAQwvKR7Zp6GMwRVC9VgaPtGVM8p1LbZWmQvp9Mp8tbBuZ6f7bmhX5xW",
  "key30": "sVDP47ZUeyw3GiigGb6e6Fdyyj47qpo9Pv1ntgAMnBwYhHiHvr3EBAqPVyjoHPwiiPPqxXisHeKzwmCp3T1TACW",
  "key31": "4dHVn9RHfDDAh4zbD6cJh6Civ9bKT4AYfHMo5QvhotWqvpvqWn2Rd6HaBgVfd9xESJdsj9EcTqXJz26cS9ar8upz",
  "key32": "YqD5C7coNQBEFRa6xh8smKNSp93WZsVcEXK9ktotahSj9L5fKymafEfHJL1Ytx4mK7vYQWch5gk2CgYQxVyWRnx",
  "key33": "2iNnQ7yids6nmv1dgzoeJ3CihAe1XSyJ8JdteTYtAyufWpodeYee2YRUQf8JvF1LA4nmiRAd5CK1pp4FB4dn4wfm",
  "key34": "knnF93783Er5vF6q7bTFfyPsM7wHbzhcPacYWKDH2zRfvVHWgw78MAT1eRSmcVsUVAEgPCgYo5dJEUTGD6NWeSJ",
  "key35": "2W2nKTGALJQEFFekc3E5mphXwZgZtsgTP45NPecQg3cfSWTpoPGvbXpJfs2aBx5PKMp92eycpuheEvrdNAD9Rut4",
  "key36": "3h1DPvyGnAXoNwbytAhGZ1bbQ6tsw7kp9iLhtwna7LDnJRXGzTBQUqVJiL3uMsDj4Qk92sCTZJgU7adY9kzhwf5r",
  "key37": "586RpPCUJyGEczRsf4k7gSceHeNwz1rBHLxo6n5kY6pCxWtZXVCS4KmEYWhTn3Mst5B6j29mBb7S6vCF14hRDRVh",
  "key38": "3HFM1UzTimvFcNmMa8ouaFSpfYstfSGn5kv31CeDZCEVjSz3qqsacUforfMV1PC2WpFcX7kCwSB4NTs6Gbb94P4n",
  "key39": "2WjYNwzrzZwX6hzWNdDEiJRe5oAJnSvfbe7tsEjDbefB8r8ioirNsRdtzAvtLpSpcE9MEuFq5NDpxd56wLFT2Cme",
  "key40": "4njM9hRwnUTUkxfBsmZ54LtDugPSk1NLjstEZmPPeXFw7pcx3uv7s5bvda6d1cdzA6RCiKjgBEE9aKjKDsnghw9o",
  "key41": "4YSQJC4iaMxo3ZtgsyZMQ2ydAyVU9De4ALC2Q9wCNAdz4kTy23CQMr8pAxn74Di2Q4xabfFJP8wQEr2CLZzBEwap"
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
