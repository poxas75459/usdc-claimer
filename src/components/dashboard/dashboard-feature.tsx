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
    "5nMsJHa4BxPaZJ7biB9HtHsbwxtMXjKCtSDnwiRftgXVVZ2k31TJeGc8G1Qsn4wgHWSSPfGFAFfpcjTcvk1yerug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZTfrdWMA6NSv1ZvvT6K5ySe1zvk198LwNMmEKGhpy9wbxT2ooqXHKrcT2mBtR2YgDMaKonuViN1TSRA7X4noTM",
  "key1": "3smkvrdT1uPL8oo58YWK3cLhYSXiQyvJWaQiicYLUZZJLhxGgzfGCoFesLDXeBHNDX6BMRsbCoH54TT9piagUajs",
  "key2": "39qR5xFR5EDjLcS9BgSUSTZNCLWNzH7RawHm2o2E3qZ153og8c94DXqA1pzGmyL8R478phqzVwQW2cBiwPXbG8zo",
  "key3": "wskrWckMu6ihMQgA7FgPFr9mfQjMDMFEKz93UnDEqSHki7hBaU54hgFcBRkpKQjXAdSSQouU9Kv52eppFn2JHfY",
  "key4": "P2hVPAM28ALWLDxNSDwA4QKBDHhDeFGa7aaKk16aYqr5wLynb4dbEnWH8D6RfwNmRt2aGzFDpau17nuya8X5zd4",
  "key5": "5xAHKh4sVV282Cujuni6zaNyLyuzS6KEfqNiE45zvzDqYwhCq1NuTTL3kq5yVTvnc42S6LxiVBAMNQzrNpBM3Qwf",
  "key6": "2eg9Rcc5kasXjVdMGHNKAUfR3hEfTDasCw2bYRbY4Bmh7PPzXkqmkkXxMaJNqKEP99HLUa4soSAn1WoWmN5VRoHN",
  "key7": "45QQ8Me771eiD5YCCXpTMb9aLE8K3gErPsWtwN9aT1WL9mHG79XfErEtiEVDELuMAeYMV3ZZCW49QGHJgMibUxYY",
  "key8": "3Jjg36y9YzkcmpnzpSiVH77m2qTyXSfoftNGQFepED3wjiUcS2xGkQoKPD583kegY6Z8V5he9C8EETxie3SR6GCb",
  "key9": "2WV4V6VAUpGLJmxcJBLJt6meBMCLCo8iUTaadUfp18AKLAm4HEFcsKMKBDQp9zuYP77EJhH3x9QARvkzj6qXEJzq",
  "key10": "mVhUTFC3786AW31q3NWQBdGhCxEatnVPr4btSXgumsiUVFogJ1XVfWBkopAinBHvr7gg394VvneM3AgsWGjLxvs",
  "key11": "22VezyE9fDytu98yASs3yGVmgTdGVJTDEB3oSVLMLnYM3YzhF7pYKyzK8pmJBQ2xwEpnyNM1jD8LskCHexHt5SEH",
  "key12": "sa2DB8HCteZ8TvdjisbeoJ2iF3RmxUWxzDFpmHh9EwC7DBZu7Vk6A6ZTGVdaCya9h4yKnyC1PDXmYrapTgQEfZD",
  "key13": "5UWpwDyCJJ82GquPoKpNpJDFoQhUJqtCHNoYLTCSJ4GUXyyD4fD4mMngnKhM61aVTyz2tcPPiNV97KUC385LFczy",
  "key14": "35fe3sGzgnyEcM35FALB1R8g2u9ANdRJNmK54WvLuuTTshRD6p7AqJqkHjYrgVZV5Sw6mwUu42LKQ268p2uaDDuZ",
  "key15": "5HFpkVWxeBfzgk2MQcgarUgxiw5oP9T9EMejuc1N1djgcTnQYubnxggQC1sfgL1TJTGgy6CUEEehRfyfxck9B5yc",
  "key16": "yoWjkShv2gexS7Dtrxkbgf9MRgdaaqBvkCNuNtwEu9yLhASU19rwVa7aofaonCmrhkJCbFunR3srSANDQhU2BWR",
  "key17": "2S8x6K7UubxSa3LxHqDV5PdEeMi97zCR4Spdzw6QvTQXtqKibVdoRkNEzZTppXRyZGn5LWbqoWUXMMRqUHPAvBi",
  "key18": "4VTZbJcqMKiVawQm7pCAwh6U3au6FV7oEFQ2uhaD2uzT3bgjePuR9kVJkFk8nh7PEyoKPEqpnjRAuJtLgaAeSf3S",
  "key19": "2KnbvbUcL7KTdD24xwksy74Cndaw2e2m41RxTjmzTv19GTWyVWXbQM9N9CYEAqXcZWNuyA2A6Z3jkKGFzdRTC6A8",
  "key20": "3sX28BknCzM9EywXGgC9zQjCy84uYD8H85PJCqRBLZsveSidCyHZBcDUe5gvB1XVYeRwMioAvHmNSk2GWNdhudhz",
  "key21": "5VxyFczLCYrecf3dqTs7uBP8FJQw9Ws9sgd23U7ijBV6ZYzm1U6KoC3rtwneafskgzyGTTNSp36ArL2n9n725eqM",
  "key22": "2uYd5zUg3qHfWJXn7Dmhoy594eEA98bBcrsn9Xjp9ajZmeVVpiJ1p6TpkL13b7z2eim5qPemRqVmChvJttYhF8LP",
  "key23": "3nDLzkJm5rnRrYEwiT1DdSAhpwSSU6jg4SbfJKkAUeCqcu5tGMRL8hKS2bJnj2VjmCBffxseVCjdgjrn3bC4Ar5",
  "key24": "JBxviofgZ15ww8p3gTt5r26TYmGwNoqPPUqdgHDHXMDSGKkJJXhW7HEP9ggfgcSEVoW7GjQi9oqBuJMDn7tX6Nk",
  "key25": "FXg9ChxNgwjhE8dv12gcdNJJ8JkiGcpwJWEYPEpv93nNF7Lv2WR1z8UJtbpBwYBPYH6U7sZpHdgn32WAaYhvzCZ",
  "key26": "5VdoWZbviHFA9CiF56n4TwGPwVJ2ajPsRsWT11Fa7o8NQzjMvo21yD1meYrThzAVYyJBGr968mpa8jSHztmTcyjX",
  "key27": "2K2tERkTu9Ux19th9X1rnL4ZvBHKndQp64hEnNcYwVcmZ7ZjWxjgJaJQ98PfjLMDkthtjw8kBJj3vQX1tybCLwTv",
  "key28": "5QDL5nBc8hZzUUXAszGnkkvexdgQHvVjedV9FoH6ZeHzj3uFub8mdncJuY6wiVAJYBRXUXph7cbXZLMvftK3Uftu",
  "key29": "KkYPMQo1fctLRiBWEQSR7fdxzn955ZyeMyaid7wnTeY3wVX4Y1rfwc6rWrCPcuveZatPuGA1T2bPZaqKb78e73d"
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
