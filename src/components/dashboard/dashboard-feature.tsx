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
    "2vDXcHPGNK8mVa36Rg9fUVY7du8vQoewW76ipa7f4fd7zLvTy8S8G5mDHzCuNdnUvuUmATn2iKCpozuxcQYxwh1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BybYUUPfftno53mec7rs4vQgscqhgvd7yN7YdJSJusGxcfmL3PbJ4ZZy9ypwzizYgQ5W5JK2bVWrJTVP97jyzdn",
  "key1": "3N3vEsd71CDuH9XraieSsK2TryTcjgkTBbWNUbYFdhnJoexSY8VkrRxJ5nJ8kv2o53ZiHNVKea1NJjmmdp3TXma3",
  "key2": "PfAH7ECpBYwRpbPuEqgBweHFKfCowpfsry3HfYB1wRrRfLDNVY59LouatfCsyHfEWhV6r21tifXLEp6qNMKNQqG",
  "key3": "3azaQPHLUsCQGyNQf5o1A9ENhzquJ1rJADFKRdue9fs2LXvEJGPiCj288wMmr1nBKopJWToEZGHEuMSqnC222r3F",
  "key4": "4P6msNfis72kUTJVFS5eK4fGsEVXUoSHuMcSLnhBbr1quoo8YvxfkLFX4PVqwjrjiNvH21HuUCRNL8WDhuyJWhuz",
  "key5": "2ifxWX6AkzLb3DCBHy5AZYeGmzPYPszb5MgXtoxuAXSBgnh7kmbVawySNpknFJvEFy6R1jhvEGsro9UtPyqKdpfV",
  "key6": "5r3pknESxYGMwAWJdvSHUgeAHF22L59qgBgqbSsCYHNCqjH1ssU16gcsXCcuXNgh9bEADSaVB6ttBizmKsVHWUgR",
  "key7": "4ztjq3w4zUiD6op1QNDuWqh8mUZp6h6KFKFxoLuU1vRGjRdDUbGELqintzz9XE4pmSZxdarKwYuB1noC5hTddtN",
  "key8": "286xVAQGvgupGequBB2ewz6XLywHYrxxxGnqk483vYQ6mHKbNLWfrCmcymEoshPNMWweSBRCjKjWqD9oxydoJWsf",
  "key9": "4n7mn7jAqeMp9y5GrHJ1rh75DpUKQ76E3ZdYTu5bnguZCKYGttu3FptS5XNQG5Aunjxhm2bidSojuyMfgGJyKwKY",
  "key10": "2CDf91MkrMipiVyaD3vyBbu44KdcFNBibvREvoSv6KgkTmMvQcrXWgvoi4rx9szxYPGSFfr3bmtveH9G8rtYQmX1",
  "key11": "4LE9UrRxqCj4JVQFp4krSxUYkEzYzhrFMLpEPRYEVGHoofCiZ9YBLm1fE4vkWhimAK1dJZX3FtAC4AxJq2tM1DnS",
  "key12": "251YZjhdZC2ZGQHB6HUbWRDauqGPPXKKkE7w1UerX7b8qbTzhzKmLE16GLjiDQStcvWw1QsNcE2cEFUjXhmLKYE4",
  "key13": "QJ42zLJaEVhBZr9Emxqu6HVTgR1M39QFQRg66qiakKeawnBHi6T3HFgUKTsEmjBx4LRDWP5FXJwgJHLdpTjRNqs",
  "key14": "2zgVBQCirhbNGyM5gc2zcguFhv4XgLqPrdwqTBU4Sf5r6nRA11mLJDUexig4m76JuZ7NBWsC5wegTPr7aT1icoBb",
  "key15": "3FVGgeQJTSXTqtuepc1DtQqrX2oCeVQKkWbhcEKz6WTmNTjCmb633Nthsu7VTEb1KHMDzeMMjVNP6kKK6y2MwfJj",
  "key16": "5BU9isanWFCSgXhvB96BZhJErpCuusYcgvGWQKmv4PmAR1p81DS3RrJC7ptnRGHx5xgQSYwTMJRnjvoNsGMifVpV",
  "key17": "4nraF72PRHcjHgks1qMhDmKrMuQ5Y1ViAV1Stt8aLT2QoCU4QvTzQYUuxx1F3sXPANhRujNQFoaW2cx1o2R2pjJJ",
  "key18": "2gDMTHYtpk82XMzi6YXMtPyUTjsStfMqhSX1xs5Z17BymntwyHnDT4DFpFjffPnAyynDUCUjmoWnKAxgwkw6hia5",
  "key19": "4a6YZhEGjVosNKJP5yTzNv3nhnL7e2xzpkDBmoWADNAvxoW3Bi97ZTr8mdV1fXea2PPgMBxHSPvUxocwFwymgt7e",
  "key20": "u4UgbsZvgxaFFPCRgxke15R2tTEyaNVKG82LBcupYxN5nazwzURXZaNTDFjRQA7dnZZms6NGacrDLHZN4gkcRi3",
  "key21": "5PmkEsArWkSc6ZoBPJgoWGfx2cLJqvqfAMFPw4zuVXVzVhL2WknszJJgFj3cCu5rRUANfJfqPSi7FMyETeov9heL",
  "key22": "SwrgSLZKuAhvPH88RWeNd3Jx5g7Jmgqj1ZtRUEhWdBpJnjLWXqVUyG3wWNtVGPbS8rb82x9BCv9HsVski2RAnyG",
  "key23": "3WrU4A7ZwSAsYTWeBQhQiDGvFXsCWAuQ3NGsvV1grAFTz4m65uMF9WenZvwwNticWFvmH672hKVn56rS4XS9ANjP",
  "key24": "3s3nmasF7RYUgLhKujiUW8a3pDZCTrKQ7SLcZxyGX1f96eUYxYxLdk9tHSFzpGXU472hog4ukTUGC472rksKz2TG",
  "key25": "4iYTYjnfnHSdZU76JMx8MKxJv1uV9RQPgHRDm4ebV8APtZSAsieFAGBrG7y3Gq11JZKN6Y4FHWEM2sozaRShVP7N",
  "key26": "3wuPVuXhPHksz5oGmr6r8T1zizuSy59dAxLokv8nAU7V1XaQcZWP5MwSTQHsBFjrhoQJQzv93cWymnb6MA1z7oio",
  "key27": "5Y1LPZBiN37WJBYWHMtkP1y2ZDqZJF5jBZx4HdJhq8hW9Tvy7HhsmDDUYcnq22HXtyA569dc7Mb2P1Z4kJqjqTCY",
  "key28": "46CggUcQktv6qc4g2C13TAwbXebztjqootnTcsAUXjZzKY2HCNZ1gKmsNH2tYAEnJ8iEiCVGjD71nvKE1n36rrWv",
  "key29": "srQHdUPfSWGLt78SHRma6N4oYbwwb7SNT7yoRmnm1KSKF5txvfCbJ2oATMpnmUKidDVBZq74TNoFH4CeZNJjFDo",
  "key30": "44cfVixqokXpvUEiiH3BTwKugD7bge9QsfFx9mvmYvSwd8sajqD7rGNA4qX5UnxLzhj8XK3dHR3NEW4QEVn1rd1a",
  "key31": "iSVmj45F3h1WTmrbapCeVpeGPbaBeLKvx15qzNpuuyohcVYVPthg11S8aVe1scGx1N8g67oAuWeFz3cf4EvGa4Q",
  "key32": "2XtXhZAJXfV6vrCYdQjvyaRWhKUEWyiNuCpHfbZ5HeBbuH92h6ukGhgSwHwHgJC6gH2bV5g5UtsWR1PxZXQtcG4Q",
  "key33": "2mzfMs2pwnhjiMC4r8EY9jUUeCQxMJzDMHWEoS6YwoJETAfPkwLHQahNhFLFWigaZqMzfR9TgqaSHV33NseA9hqB",
  "key34": "62XQUauywPWnAWK2Xu9aNuy3mvCtU9tkmrnYWmSXZF2DaLP2xHoUSxsbsRKBhwnUxE3LceG3s72dLoDoo7q8Pnt1",
  "key35": "zV9SNiC58Xeu3WKb3SwSyvZTnS9WExVKZhv7u6mdBnsRiCJ3NyUJogv2BhKyaifHkqqwfwkMPLyxYkdCVVETvSQ",
  "key36": "Z4eC9DKFCNbHds1akzwTWtEUc5CYLsjULBbWaGQ3Ci59fLP3v5UsxA42dyNaKTVfLNjJukPibe2AjVdqPQz8hB9",
  "key37": "2AyhZAKkFmTazCGXUtFTwad4o27WGjXyb3paYTMKKY4gUzLssv2XPUd81KzViZzb4Dr9SdSkzKqasrrzf32Nrcj4",
  "key38": "3hbQkgkG6JvkDRyiMkjfpcUEqSLu9apDLb5x8yXABvxAQuzXBFiXKhUAoKDNKqJokgRbeLDqpjE6DmBYiigRe4Nf",
  "key39": "51qsZkXHoodi9Mvgncf2WC8zs3HosrJMgpKrE6XDTcWWwgmkveGRvyNZb9UexBXzdb522ifp89NTdQE2VgJph31W"
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
