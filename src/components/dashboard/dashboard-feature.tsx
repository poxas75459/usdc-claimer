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
    "3mpxWARvijmnifChz1Q58JLnWDohMYjUXBHbJ11eivbBWx13ToaufxsP41zPD2NA1U8WVpEPfLNfjWy7Kmn3czUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6UjBbarsTAHT4t8Rb6qq8Dr7cSShRx43JnS5FM1Jz2yssi3Kgan3vVeydf5yVNqzN3y5jibruD2xCPdtmsRdyT",
  "key1": "xSwFYPYPg2QQyeZ48uyQWVbgtyajuH1dQPSdtEesySFC3trm8KnWk4CBHm65KtBATogXPCb1YrjKXr8RQsZMMtm",
  "key2": "4thc8uvDtJ3hSkkKxkuxhtTsEFZbUEXpFd22RiaidD9x92GmhfWEC2mH6pniuRNAsy5gAB8TmHqYqTSmoDdKwPxi",
  "key3": "4kVhom52JXCiGtxefivrLsCpGHpHVhBgEpTuMr2C8ymtk51msQix14g818bqTbrSW9Jh9e6fpVWiuFncCNRnKZ99",
  "key4": "56tDbQizKZGCA1rdVdW4HL62UsiwKj6EkQEggNzCZUg5a1fnRjDAKH2R4nuHxiAkDCbGV7y2MojKNjFk5xYJ95tA",
  "key5": "4hYukNJHvkto29njc17fmqUd6mvyGEkRkCmY5vsWEjEju7fMJ4wqSYbr8HSW3dnLxLJ3TRbXbELBeVMnoQBa6AGs",
  "key6": "4ebAaaq3eJApH4Lk3k43fkoA1bnCVzKs78u3QCctVas8GLku3BVcBEav24iUmvWh1v6EpsmbThmwF6g91tbiZ4xJ",
  "key7": "34U5JuWRuK4LysW6aRNXHqUVUgSEYwBMKAd2aZN1gTDFGuVXgbfAEHfjt4QLjVbcAST2tUbmHYL16etrbsc9vKve",
  "key8": "3VUScWfJva7HtqMRBcu6Ap3hygxPyHjRusSXqguxk4WSBWf53V1tMZwLuC12CjHaJGSTDs8eA5qETwHR3bZ6nRJa",
  "key9": "Cf7m6icKZtUm3eNCkwYzKgZU7VeCoC8io9YFZvEH5iqoVK9EpCszBAEsEcH4ALBUbBgnzeJKdc6D4pPB8vEDF3H",
  "key10": "3dWWoRz481vgBF5vdbTmcKZXxiycjSbyaRuMFQQ6PDESnaEEDFwd4V5JArH7DjBZUNHFxjayc6rNo1UTvVLDLSEq",
  "key11": "4NZyuoDiw8qdyYQME7z4FjjwV2E9yn1XxFYkp1C1ax4SdZDFnmH6x1WFrUK5dT2QdDMZnZXi8iQuvjHHDryK8EqT",
  "key12": "3LvhZmsSmw3hyCapSgtdggSvRDbQ1NkKegbqYnm26RidsPZaGGgAkjusCnJXoW3LCQCZjGeHzduLXQdG5NL6Lppv",
  "key13": "4DxadS25ASVyBHBHfzr488PHZZAPV3m9p7oSoSADwTdRc82aXMrMnG253e64jP8gasBQqzAPN5AKeWLMVwAUwoU5",
  "key14": "QkqkgmEGqkWQzbqvkpLJYEfUraGv8kpmbdqXT89WEB8a3vTdh6Dc1hh1P2thTX8EbxFHfrSgYAaE9rPGiTymCzf",
  "key15": "4c8zVosRzFuhSpauUfJPimvFQLgQUt7SAMk4j9zF4hyaWbUTyDr3XWDjFXCWqdTQ7pyzoywnSkmNfXn859TZKvH3",
  "key16": "2meoMknSNDFovgoedERjvMaLiSjSefBApBWRoz4oSCp9EcrX6F1ztLmZpWokaM1ubDaLcJZgUUBGGZ2edkfY5AF8",
  "key17": "3jrxoirjrBeZFYiRHyCwbNvxWJdi2WtgAj3vAhDkfNa9npC9thuuSZ1LuUoQpTX6WUN3pNsjRBkx5MnLCjYokXgz",
  "key18": "WUWFSeMYig3o5qWe4fU1pNWUAhthXsBuoUgPM6LLkgwThpEBXztnN2TUhW6i8SmsRks5PmHQasxHTUjSHDEZv5p",
  "key19": "WLHBYYeioUjWvbGtjRWFZrD3YRSQR7zDeSrXo1qSxnKehabfgXsNXWKYTw9GzybYWV7NRypZ7ZQDECeZ64oKtNt",
  "key20": "3PJF217eLtaBHmFrLeEsfF2fa4Qd6qbrEgaHzXrSnwYWi8EzqnadBC3MbuHffr91HdnBKS8ey4QwtM3TaaL6fJHD",
  "key21": "3ZfcbR9gz2UhNFUYndDQsohF1Rq5Tyi3JMvqGRJa2TfQP1ZFXyMozHipNRW2mryS6BVWLnB2VxHRjQXGKbZYU35K",
  "key22": "2mpALMV68jjq5sVFCUTA6F8iF9oRUYJXRxyrwXSLeDudTiCBGmv3pc2MyWXscso4bKrX8UBayPifiP5fWEGyPGzv",
  "key23": "2ufpWYmVg6LxLRMAyUcCouwC5hxQHjFBMcVAWWjejVyfDcMx84xYRoboRuzCGpD7NgvKpqYz3nn7wyTdskp4d3g8",
  "key24": "tNKXwiMMaK7irmyFedF1Qm8YWYKV4qNgxznDVzPrys2vhj7zeWmpBRpC2weFPfQYeuMDXSe8D91KgVPBXLuH5MF",
  "key25": "2FdPEGq33Pm6XyE2RLCkLxLgNDiX1VP3pDwbJspbHdGkSzviorLWdKiwVdj3TiRPfAeKU3jgRgfLrDYw18sqtfmy",
  "key26": "2swxRbFkujnsTg65pev85TUhyiEHMXqVNQRyHoVGfk9Mx7vC5bQaqaMwreQs7CpMjKu47by7vvhLKuaBH7e8Kwpv",
  "key27": "EpCtznM5SKiVWhzkrKvaG3NKDfzpwLvp81UzbMuoHWuzkpXyJPJQgLo8xx7SgXUXHiZQHjN2ZWWJNaytwZWvxk2",
  "key28": "3emoiDtRrMR5wbceDmvU73KdrpA9P3814p4VBsMUNu8DAGNH4cKeMpnLBBPanUNaZBcPBqZHgb5KP1gKc8Juujvj",
  "key29": "2jeUxDxTjTTaY3Xp8dEie9EbxgFpYyN7Jj3hpwxNJ4jVfXPQsNYe6Hbah97Hirq2rnn5UX6XFWHFuET1CGJ7gG82",
  "key30": "5vpmcXBzDHRPxhELUc9bWX89kKovzCjVJQtAcc4EXeuEPs4TZdQprH5QsQfeLjWNT5Z99GgM3ZA11ULCpjLmxbsg",
  "key31": "2v8w5zpsYqDbtFwLZMu2prChdj6brYs7oeGMCboNSwD7eic2FHfFL48v7der7Rydc8NEd2Dr4bp9njcvjdVqEvb",
  "key32": "4CQVHS5yD1fv2xkVU4t5CjY7zGX54wv3byepbqHMBrWjdFz1k8j2y8NGWhHD9nwA4U43Cesta4DrxFsVxcArSjbm",
  "key33": "39rcqxHgz9PUcaAbK3qStKe4sPtYJiq8MoGrMBa81ehr43pEGSEVbkbt3rgRkdPTn6LPaJtJvdpCRAH2JXAeHCnt",
  "key34": "2iz5yGs1X4pwLHxEygs6u2WgJQJbHKfGiKhEqfEriMKUmUkD9hBHLSCpZHXgo2yW8hBnGjFNELDDmkxPJvXkKwmP",
  "key35": "3xmEZ428CJg9C4hvDuvaErNWeb9bEdaDGb9JPHBLbb7N7HSH4dzCVcQtyfcEHrvr4mv1nwiLC52zQAkBF5CZ3jSS",
  "key36": "3L2eC6i5xMphaSi9ycPZkVbSnubL9L8GNAAEiTHHAP7aQUwh3p4XqsH2EHigsbFSqwrAZWJ8iMvYaUtwHiKwwa75",
  "key37": "4xj5vLtxniGZzP9MDBZeQ5aJkFiQi7843dujv5W7vHAcg17gXsaP1uCw4JZai5ns6eQx5nzPjhYVvh1gxZiN185E",
  "key38": "4o4gyHNVipiEsCsB9SL2jHF4gQki6FC7PaTooE4cnuHES3N7F6Y9BaCYuLZVhin2KydiKjHhvweEhnz8iXyXwfmB",
  "key39": "32XxQHh2knoFVZs2GX8zFM9dRc1gJ9vwvWVcdH3Y7Cpe9T6Q9gU42QxriKtXqUmXtcAQfX7wexq4VaPj6bqqQkw1",
  "key40": "oHNooo3KbBcbXDgEyLbADwY5mA6Dv8vALAggAk766hg6dxwqhVNX1D3yfq3WuCvxrajGCQBbWV29fGRRNKubPgn",
  "key41": "kgiXVGhUzhCoG69sHSwHANmZyVFcNvMmfwocxG382ZXLRQYcdeiskBQMuVcDmkGxGQcrQSPNockU3w7Z9NFH7x5",
  "key42": "3UTWxDjCsjo8JNwqLSKPDqnhwYE977LaQ1zPYkAk3XFdXbJt4phgrcjsu2WTx739GTKT9yTLFquygzb8Jh4Su3UA",
  "key43": "3LHeYH7uYNkpkaWZVatMRrsKouRZ7Rk5yLS3VnV9Qmez5TPtBsf5Kc5aYFARZn7jV4DKGwHLWYTALWGGaBkcGga9",
  "key44": "4s7iXNYVG6f7H6NoHzXhzFZyksk37uYeoKE4N5tD547T2ejnoTEgkBApvpNzxvcKc6DDVHqwCnfKdvtHFsqmRVwp",
  "key45": "1Tx7sMtAR6ZPWn87o9vqKsGsdPAeiR2iAk5BA5UFJ1o15amjDRTzcjqgnyvY7CwXFgP1WohmuQr6njEcqbaEmpr",
  "key46": "25mj5pz8Fcyf6ZryN7SrqrkQSmFDYwzgCaamF1SsaVFBmrUgennjboJrRcFfDdh2AfApYVMX5oZZnHsXX8ezKcTF"
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
