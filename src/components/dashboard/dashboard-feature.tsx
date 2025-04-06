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
    "f1vnUs8wECWSc3Ghhr5tWdDA479CquYqrL6svfEgqyGBA97AhHT5TdKA6o5jmRnTuK9TqgLZE5i8vtLA7Qdy93P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXeGdRAdmxFnceGF1M6AwbCpeE96PqcdUH67tSUFZ1T6AMT13ZP1dHxMZRfhQYhDx2VfZqSeDHiY8pdtc54tZy2",
  "key1": "3ptKXxzoKetVv41hEbv92iQscqY67wPrrPtVr4ugoVmR7EhL1JBRBvaxFM4yPSVdJyhPaD821cTTyCDdEigQswgS",
  "key2": "35DDEtwit5mrMFAp95vuP3fuVGfJWorg32nYz1XsXEEehWZv8yHsbZhQeUbDqA2tbW4ciyw7Zszr1otsJStkNhZN",
  "key3": "39stKqMYKWpPQ8QuqQ4GW1Lruuu2Lfbq97GAvizTjVRD7vV9AWaFbi5j7V1iaq64fKnR975q76ZX85KYABDFpHEw",
  "key4": "2ZsCZ1LM3Gp9XuKyWG4VvMT8bcJHTXGSuexwi7gCMVv2LdReCmj7sFygtMSr6GcKKXUmGa5Sc8qWLQYPGjyjUJLg",
  "key5": "3j9CpKwbvNgbvrreLckEZXh8eo3AsATU8MJ5m3euiqhmjrqCpJTvpi4aUC5iVrTEgdxmDqGaE35DjzXsTsJp1ui3",
  "key6": "2ifmUV9wFUavPWJ97XXDTuHcpr1LdQGaDy42pAktGKZACS56HHq4MZXub8vEBRhH637KBcpZ64ao43RY7qgqomJp",
  "key7": "4GoQxEJNLRcC7sL9CmxD32FvyboKEKH6U9Q13iq1JKztWDy1DRvJoTEpC1wwp97Q2RKakTsvzGuDF7jKFmXRPUg6",
  "key8": "5ALjLNjnoSWF8tH6H2AMRQf56ZxYQ2jFw3wW4kQQDtWEycnKNjfudG7hRhJapffWJgaUeKM1bbgr17ty43w3yrMs",
  "key9": "3z2w3SeYg3Rpu83SCPx6BQFJDFrCZ5BeULZH98nARFUxvgfxoghKbtV4XZ3sg18prnzopRRBoG3mGw9VCPM4iptf",
  "key10": "2MEzUo9LUPHBd7cfSNZbPaH8PPbaiG1K71s6kboggihkzPcwCSiDjK37iZ9hndgQL7v8DZYNkJkMFwUUoFyYQMJP",
  "key11": "4Ee8keZMVy7betdNL31oe6jjLNVoAt1tQKohgD3XUc8NUkmv5w4rdcY47SvoRUbgvqDVtD9x7thtGpTSukHxij3H",
  "key12": "3JYZrv6iNL7HRHNKLJLuvjTw1HARscu2CBnBz7U2vbP15Q6wXgnKnMt2qQgGXYYN8znpKW3Whxj4EKTsf7aj1f6F",
  "key13": "4mKAYjHXZSMXXX3z9aSCFSNzJbBNBfvYPHnn3J9vLNBPAz3TXQuGWttzmYx3wBy76khUBTM9rAk672gYgUwdav9y",
  "key14": "5vhvFPobc77HEod78xzVhutT4o2hnJQAxqSF2it4o3han9UAKh1yu7icouyb8FHPGZ5ALpmBfUpWUWsVZd1qcYUN",
  "key15": "2QgAve7Jyo7nnEtehvDKhgk6dWP6QXiWJX8zYXzcu8jkbeaXXNsz4ufu4vJaqQr8dLGbqWnsZK23kskAptKmDsuX",
  "key16": "nwD83QVvFZ6DfDGk7YEWY9jzBgnKWq2187E6BVHVK3k9abQ7BmwvLbLKVbE1UWZHpscucpTju5u5uVBKvG5Cpni",
  "key17": "2BTdVQGLKiyddHX5tfLzcCSMDLPvHtHkokPEUENaokm5zXGiikhf62QaDroFYGwCLL8C1AeuGw5pGhQqayPZHnNe",
  "key18": "417pJ9RFbpHx1T68G1jwxdqah97nAHv8yYfoo4kne2xTMXdbN3dfnMqbLUBQvAYcntBjfmK5K75f8gCBxBCxCA7b",
  "key19": "4zcVXTXtY9dYsYKd67Ae1ds5266EsbXKi2LjqG612Zz4zrpjWm28MSdT81cD19e62kWKDUHCFoCNayf2nE3qnT2q",
  "key20": "5bcJgdSX26h4nbr1aiFtrSDYrx2gmK4AKemCNZjCjWADE4BLgVc6ArzposRJ73Zf7gb8pRZsoKNzhcZDTQs5hRTL",
  "key21": "5qRbEYjMiBpbp5QcCy8G6PbodxwgLpJDBgawXyt6YBNzBaLKkZ2Us2hw7fbp52idsqCztFCYd8AS8CZiPt47ZeS4",
  "key22": "3DUGwX1TsVetepm4wn4dnyduyXjH5ys2Am6txHMHS2ikk29HvZEiZcnfKfP9z8ccEw1B8w6oUpz4gTNAfx2SgHoZ",
  "key23": "atJQs6tVtygSW82soPFg5x6JMhmTuJC1MZLaDUg3u92tm9ibVuPk9TomyEnMjPj3cM8S5UTyhxjrtddJbWZRLmv",
  "key24": "zaYtuwcNnNzt45g8zY8QM6gWoJSeP5YyartaEL3RmkkUh2YD8H2RgsFtPuNkFDUwCg7HxdGq5KukdygmumVFicQ",
  "key25": "3TSAeDRoQK3xGbRHMa2XsF6QRBe7xyAa5XDvwycgr6CyBY52ag4Fnr4KmgwMxDoBrTXDaBEhdELfAAK1Q6BC7RWY",
  "key26": "2hN64KHjEDchceDA2UucH7uHvVQV3QfMW8fjBdG71CBZrKvGNbY2wQ4wiAqr9qmgZebqc4Eo41bMxZm8yfEutTt1",
  "key27": "4qLPbCTVesem6VWSSCYe64n3XhYVbkvoiTafyq4wYc9yX2A4kA3eYLsKRpvE9PVHyAyZyWz6UsAaEiTAuPhnZrH6",
  "key28": "5cweTnPUCV6Uwsu4199bQTxyvsRc8bvWdS7DPDRuxHPWyC6H7E9Mof1912bRyT4UCmPFWY5uzkZ4a8xKmZt2qZmG",
  "key29": "r5WFgVyAXQRPnBW2FtmrZNYY9hFWMbVZq837ZR6gzbYstfy74LxBYjEHdVWZePBfzJwQHgCMjcikcRrhHoc9W73",
  "key30": "2BJaTCZffXWE4sJfF8B4iDnY9t6SCPoxDzy1Gt46s1sUHfDDnYv1MsCtiLgm48zAVhxy9yCqCVDAjjqBi8mk6WxM",
  "key31": "4EQcjaMf4MgWg4tdxDe1JYiquhwyKQNiVDxJnpmuj6gNBaddQyg2VckPL25zoqYky8UmpoGYrf8EmSaZuV1TEcnf",
  "key32": "5euLrKofKrBVECwzcrZ2WJ5oVn2stFnpoddibQGdHEzVRAzkdKvEXNtT5hDTLb1nrZJ8nhf4tqAjh1L4fLrEZcWs",
  "key33": "4i5uM9nxcGgaSAqFbsi2c55pnb9wjoaSKuwG5ipUX2ERMfVobps5M8mfTuEbsZhxuT4RbrCMpmy6QurjDx3hbP9b",
  "key34": "4Ph76V1hwKkghV4RLwnXaq8nmVDKTunJYPKYdZvVbYjwshi3MhGeBXWxhqBwPAPM5Ex45Pu7z4nnJZ32HEEnVhbc",
  "key35": "62j6qP45GYjPY2SE8rqqrsWCLKLBtTKati5TbRYxdtnL54Xh9ZAyt91zphw3QT9i3uze4yuwAtHSoemZVTHDwmQc",
  "key36": "3nkh81LWL6Anr7rkfoeozhzud9woRYHFF2MjvnkQ3p3FEMRdLQUuVUBDMKkXBAdNnANWrosTwWwbxGXuffgwVCT",
  "key37": "3NY1yYxp3ohDujwMQwFB2y5yYRU1UUq3R1QWP1n4MH4ztY1N92Cg518eWYRQxNKuuK4HiJ6TyJht9VVRwRmzcgin",
  "key38": "kAu3zjst4syE7SToddeUagA2fmvQn2wFT8RRSkHG9kUxVC9y5DMy26s4nokq61cjTTEA3xiMV8xhmjL9zAgKSyK",
  "key39": "FMJHZ77dGNKNqdMMhpzk2aheZ4WLD1vrNmgE3gZRp3CpkWzt7zZm6XWbH7h2CCK7dQwKtWhzcwdtjw6ctSQwFMi",
  "key40": "px7bQQBDQ8DY2Q9mgqemSyWfVAgJ888c1aesYqouFNPBGh7wNoDkort1Le7XyqZ5F97hm1r6xiRoBXMTFuSChtq",
  "key41": "3ZwQFFt84evUdSg2YGPbSnhEq7Mxcf46iJj3wpHoGKiS4njLUcUopMX69sSxPZSyH1fJitocre394mjK89aDeEAV",
  "key42": "3irK1HqUrXZbsutDuo7Vp46y8K2kX52RtzUV24tMiXaDRjQvqcmRDjTqfTEYy2dTfU2HL4ic7eu7TbkyndFDMaP",
  "key43": "xb9mB9haFDPZifsM2Y5VaEsB2fJAtFE4ve7FrUkVtq7vVVx9NfZ9HiMCsgcQJqb15zq5uzGqtp9EjiLwgk4ePEP",
  "key44": "4byDXFztGTVxiBmDSVoSNrgVPJ9y7RDerTa5ggD8urhKciQWojuS15WhhkAoxXdN4DbLWN4Sum6fH39BXmCWmCs8",
  "key45": "4K3fq6W9jFYMcz8CDzMJN9GfSG7SXnfGdCw23N2a8SfNPeLDrZgoqkczeAruPnSTUPS5NF7YrVrpkYXrzVaRgjhH",
  "key46": "2he7PVDsP3AGsMn7QhMDtbkyMg7sY7QC6zSpEceqWqzDVkp9nJpPz51M7T6fgaB3oyKZejkBqHpBKSag7QUQxQKc",
  "key47": "2DXWqxpFHEMh1s19vP1iGRipwRwpf8BHQKqdCtnyvCjpSTeaFXLqFn8LmxZmKxqBYTVkxybw1S7gi7ypgGHRs7fG",
  "key48": "5FHF9Vt46o3d8J3rGHygyMQmdwLezYtt2SsGPmM9Nm1voB6dv9vHDUaLZDaUqfjxGzevS2y85V7xomV1hTBUQdVz"
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
