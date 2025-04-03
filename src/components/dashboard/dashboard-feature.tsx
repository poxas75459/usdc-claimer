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
    "4wwQ7nGM7AKC3zYYGEMNR6wbGSUEFfAKtqAWtWspUqWCMEsWRRaWPcfPBtwmSPZgVeQu3Uikco6WzF5NKWmupows"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZromrGAxVshFHCvrfSN8rhbgvqXENG8886TcrsyCr5WEVTB3s2smxxCwZJLdgT5AM8TEsAqx7uFfKYCdFYvogwh",
  "key1": "5saFSDeCQKjtAqz6VSkiCciUDqhRCqQBRSSxzLCtKR8skf1tcFQLjMH1K7AajpSGuCeCv12Pme5Z7GwcTC4CzAFp",
  "key2": "56zUdK7XKjfNcxJX76UWgy6fej5Nsdt5cWo9KoWuKfpwdiKHc8tsbSpEm1nYTEKPNHNrbF5RA9fbMiZqbuSbggyZ",
  "key3": "5Jki6XiSL89qnpwH3J2HepGRHkUzuTHYxNgxtnPeSvsL7wWmXR2Jv2xEWiuoK5K4Aku8erBWB8JLUuM7JLYD1aYw",
  "key4": "2riBrCQWBLHn8ZYMfsYEiWJpV4aPNVENXcmUio58aVHgNeKzeZnYWfdEhLx7ybAWgG7ChTXbPXkQNf9WUWqRUoBd",
  "key5": "NrJWcf7eC77oNxbmBQVFf9hNVxB3WDkPXhFLDckXfeGctHGuQQDHPCFTh2PF4bFxnDRawbo6yi4hdkT4jXdxYLm",
  "key6": "xVqVhV9qUsrFy58P4mUQyUYQ2y3vzrLN2DzrVpqiob6fh94BsvvcfWE7EEsMsxxAxmAW7uFSEV74KPGvWkJ6v36",
  "key7": "4RmWsh3fPUKLQFhBq3zN9dNpb6oQJGi9EPNWS9QRZ95vmv52BBQNNMU4JfgHYcBBHGummQpZzdb5MyVkfp2ci33V",
  "key8": "DU9H22FboRym7DTotgk6qcoYzFgZFDh2dSnbXJ8qTaGxbFV2x9wLcCJ9cAdA7FTiQG5hrW8jjcjEYKLM4ym5PTR",
  "key9": "3xiWATLpt2ENNPpTvvQG9sHYbBaeR2cuXHun7xUak7P6pnUMxdodcySKo9nBG7CFPPH1wXCHHxmRbidbZSdHcE1T",
  "key10": "47J8YMdeqwGUbnrJmamYR7hsppNWMy92T45ge9TJHexK6npQaKxffU1UJHjNzMDKTyUR7hevaywVq5ifCUPYHhVw",
  "key11": "3zLHNmmNmm68zh24PbPxVYVAgyrDC5ReKV3SWXnj4RxFeuyqzniru8yrE2byKFVKM9Ltdn36LuMgZDTr2JsMHQu7",
  "key12": "3ZX4GynVXoaKLvQmJQs2TyJKQ7RRrcxm2pFaEUCcgu2cWG8N5oGFWgsN4HBf9KSGkzEs34MkCZ5efdTh3J5bryba",
  "key13": "55idWcUSVucpTGAXduCSguucne2wDiXak2i4sAMmQs1deG53Uc7ZaRotdmUZMEmMGZUZd4g2nj2smbJHf8vjyQ3Y",
  "key14": "4y7GUrgCZ95ggiiZC3Ty498nAgi1gHw7H3rbm6XhbEgdK5HUXHrUnf2Y2PPPTdhhjf5hoAFWPzwFaWRxoRbLadG5",
  "key15": "3u67C5yqAePGstmHK42RQmkRxcirGwUcFPijx5vmBddrHUQLwBBkMZip5fYpxDDUnBjfb5vNUreKqxQgnbYRiJUJ",
  "key16": "bcuqxLMfxx3LN3Q8D8i3FNbgZn18ea5KUnjeNbx5TU5cytmyugiiZXedU3dPMSYfA2dh7SNkzSU1A8mh1Y5baPu",
  "key17": "35LHLVSmYtHGdVZ4rnXnhmSgUeQ1zCUcY6pxAMhgUA45BpDiz7Nxb7rNuWEXr32Rc4CoTNRm3PXbneVTWLt1FTJJ",
  "key18": "5rdJJZPyRTjhASsmCTzBz6ubXrS66DkXFoScBRvRrAk52bQmGpvzSUwDiHKvET5dsAc5beLnUjofm8u9mRNpvqE9",
  "key19": "4c84T9byp9fAn8TrTyuADwGNs3PkbvW4c4eTQFCeJzES9BxFNXAioSFEEcqRTqWm26ycTezyEkspRYJZKT2VmhtN",
  "key20": "59HSULZzTQHt77EN61wkxpQPQD5jKqA6iPUQKZEsPMca9U9bSvehqNdZFEoSxb1KLUc8Y4vQAeoXTB9PoNRynQyJ",
  "key21": "4rLhvtWnw94dEZ8i5pokLXAKG84uQyBiwV95Wv9a3MMTZ28ijgiNt1D8q7dPkfVFjV8ebgtLW3myN2JWKKqnjCxC",
  "key22": "4ZaaCMJkC7skQ7wj6adAniqrFV9KvBuFmUgYnTTjz5QEz4XetQUALwbZkpWeoEoUmaThLvx62WEhcSYFW2pfNAkw",
  "key23": "4ymRUofGGs44kv24LhqzpT3YzDWDfZykaUFVQjoHkzXkn9YySpEmWGtfmtYYozJcTGUnegHV4nQJRKrk5v6hr7hv",
  "key24": "4u4UmbWdp9JvkP6TP4EMbsHHYvwJ69cyt4jMBQpqnA2kk34TSNmJtj3vfC8MdNSwy8TPqb5SxAozCkCzyLap4Cm8",
  "key25": "5iemD2vnqFavqXPo9UtW36jwkZfWtjoadjRjgZ6CadKkqgCKPLQrmcbjpSqirxyAXYCzwyKbKUE8YYb1kevaY3rx",
  "key26": "Tc4ywqnMrXDLQ2aahFScB3rm51NzwkY2SouNpntzhZCnSzHpWxNjiens3WGHaYM8Zzw47j5UA9j2JV6ouaLucNr",
  "key27": "3wP4gb1qhTymbnyNK1252LiiugBZjNg8RukkESmzxJiigFxSdUpvFnbZn1KgfQaqxuFFiqEEPynXKuikntz7kRRw",
  "key28": "5Hu54g28MZy6FKnDjmiJthuRj7ztaB87Cu7sY7tDygJNQ8uuR9dWbrRB6pZ8aSPBuVQTZEVswn71b2AFJuDfpRk2",
  "key29": "mXVPdJKB21EnjrtGjWJFfK9VU4QL4kkiEKV1VfE3GDaoiMHQyTW4oxfhYfSpfbxtQ2SG8UPmxUQmcJWMTmDYRCq",
  "key30": "4KtaH4StmXxLjKvUtrodsTT2Q1JfrYFp7N8GyEkacdjJt5ELExoJUWgaCj68uRw2UoTMgnM2SLMkFMK14GeNChmF",
  "key31": "5YEAiEfK5j9N6R6ztz5GpForPKezG37TsEnzwsUbiWa8wxhvVuNrsZWfu2imWbJviTEfKFheuBcMGeAabGLSceEE",
  "key32": "5HFB9taf64M3Qw2uok8AM6oMNwfUYZecu7uzwUToGjZyUkhD2ZSWgDsg2c4BerXZtoSrV92gknTrpVB2BG3PoPz4",
  "key33": "5kiDgRcugV5iXyzj3ySTRPjCiu95kNamqaAB3sq7YV7EQjRTbMzZSNyVzMiYpZnEGrf6zvTaXsVyWwnfAkgSbeap",
  "key34": "4Q8mFTCw7HZhHbGzUbEsRbyyALQUfPJ3AhdFvZGtzFJBiGG9hHtBjo1ymE8dcGu27op2aZ16NgKUpCSqMe15akdj",
  "key35": "GojjyaUqwzuhq9WGmyqdsjHEMG8xM3wYARZpcaa3GpYioYL8KDbXCe7qUH21MQtCRp3vgotqJWckzQTwMZH6G68",
  "key36": "63wLyvSSUEkoHdHXnGkpT7auDQfLM1XC1BJFXRaV3CUnDhfDjH94NNryUNadUf62AcxHmNHEGJjvqsnwu2sp4tkH",
  "key37": "2mmzDikrpmGqPAKDe9fJz6JLGpF3f8MfaxARzJu6tK8q8mPUzeSJHNKUyK8UVPVWWWiDtwjz7h7rKM1yuqCToZds",
  "key38": "5MQwcvWKd9Mstk76S2zfH5KEf8mwUqTdZ5hocKYHsUyf5kGAozv2rEV9kVrEhJCv6TZHtmWcoTYpMTMSRe1v1npV"
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
