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
    "1tovNoSrxMnfWkFpvP3ehq3BHwhijfr7ucEg3JRH1RLsyW9JUxWMEJxbs5FHoZhVt69kKtyGbxeUU64pBN9suxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFFAwRn2fecMtKtzkC2yaisgkGC555uoiieWEioypD1zo1somRVcs5LweW1fTZmg3m77aM22EC8kACv1kwK6Gyj",
  "key1": "2oQYQKqEtrEGci9mck3KJF9NaKBNdcGqnHZpo3njozVWX3iPPfGfr16zgwcKVVeKrbdDLgfisj89YPgvJidteQ4T",
  "key2": "5oct2V2VJd5Qd5o15dJUuTaf3Mb8zLxicyzBbMTSWWTx5LtR3KLSaaEnyDPmALr7icKWDWute1rtfn3rADzjyHCr",
  "key3": "5W9QMM6x12ffU8n65nXmgrxv1vNBpp8CSJptQ6pJDJW2n2XiM6jkNjf8xB2XDXs75vJNbcxt1TqbcsZ5AiwPn2Lp",
  "key4": "652RrxhfVjUYBnbgnnaoEDUUf7WzYiURHG8SrzVNHApjWp8Ytk2WBrqouCPWGv91iXe96UrveKjyVh2Ljydh9wV5",
  "key5": "3KWLNHgPEcxwxt6i6akzsDgkadWwYhcFi7veKJsxp616tgxL8XVWbAoHjkewVN7ynoeSva32rqTopoqb47w5fSSU",
  "key6": "4mR2A16YATNBDsadDJbGjegpUNCDG3CJnqQfmkjYZ3TTYB4YnaheseZXxPdvWDe4d4ztWHDFrYmGtiyM1tKaL8CG",
  "key7": "5gnofwHSAu89n12ozNx3R1W3VnwRH5dPvxLkSha4PPQndVs8ipL9zWQ64vMAhTCFtixnnXGadrMNFTMGZZ4f6AWE",
  "key8": "5zZuDiVBgH4EngLawr9xR1MmWkDLpGZnECdgy3WFudW7tYa6n3ao44YgDJJvbMqWo3aPaGQnsw1gj9RNv7n2CVeF",
  "key9": "5uFGcwKuQ68BaYvGfGXtw6MvDTAwKDzCqdN5DDdaC8ekmpM5BaxTtmtoezGxDoNjsbcsRVQ3rdJRasXrUKWhxCSp",
  "key10": "UoW9aBdp4hGaScy5T1dEF1UNpwopEFTecRf1d1o4LqymdbV6ChNAHC3fr4335zw1kPVttdQjJFvzJXKiXaLj6RK",
  "key11": "4WeWygcFEDupFBM53YdqRNvVdYf7EZF7hhACAhrfpPABeydTWJ14gzsSNukDk2CtHWy6SsrZLKAq4dymgwnU7aAD",
  "key12": "2USHC3jYCniMoHBRNU3w3zY5SeTZaaVE4pFPzLYWvC3kz96sBBsu7HTu2gRB5mCA3PxEnEpkBkyQGnFMakqWcUhY",
  "key13": "2wMp5UEpTCqwfSejzjLr2VAsLamJDekjFPR8WY9AB4C1NcvKkmhJ8hQgpmthfwFcwRxCnd37Vjk2wMNNy6bGXxZe",
  "key14": "2hCGeY2TrRewuwufe8JQJjLmyKpUN2F1ieSHcd65VsQPT3zuKGDjYru3HTf354qgFYUjZ52RKyXWSC5dD6xZioV",
  "key15": "rhnWbuuY1oYh5csKiTHM7tkSL5nq7ewRCSrT6LXt43X4K5gxam2ZSsDmaHAxPG7PK5twGAtyoDAy7gxkEcZmzVv",
  "key16": "3ADM2FSrTmTaPUqCezSViy2vPwmBY13b6ZYazsFABmpcVQVuHnB78Gtuk3CZsaCXUzs8vphf4EMQ4inPNQYaSUwn",
  "key17": "4QEcGqiQPWiFV2hZHrjvTmHfQBdio7mJBCJeBS2rYvx5k5fYeTSh3GkZk88ees92gPfHghqA4iH1rbqs8fny5rnd",
  "key18": "5ykyyMxANz5xtQwRodGw67jZm1da6xBDYenf1EMop9RX1zbNKQKgH2oGx1uAVEgWR4sSjVpMumShxZ5Bqa8jzi3a",
  "key19": "Vif3wFDZjyEsc1tEui7yZDCYxWjSa4piFWEL9kC8V1kwGgPfGLRFEj1c3v7r4SW9K4ZSY9Q17dtFsoTn9HJgzNU",
  "key20": "3nkWskhNZ4xt6FHonbuWd22xN5vowRtviPt651wwcaLAb9PNzMSaQQrkPscR8ov3QJ8yD3mqL72YpqAYnSRGxEmL",
  "key21": "4c8ehbCRc28VfLXPSXXS2q2ghRAgZB8f1jB4mvvrKJXkuhv7zdca3fhxErhgd1HLuGuBU7mBWee2xRfiEix87uHe",
  "key22": "5rM8XDt1wuhX43db1i5Kk5q9mkSaesfHtxZpRQchM7brM7w8XyiHKiv6MgM57qXpm3JKrG8pZfSqXHEgE3wJERSh",
  "key23": "4jGP2XZXKRFxvro86EzxuBAVD7ykXqHGizKocXbcTMBQH9rP1rP5DsPcGcBpydYV648iuqbgP5rPSEaHCjii6Vqi",
  "key24": "3wgZBhQwrEjUEN69DVyfZKgr9LULP6rT3g9ckXYLkSTPGSZ3bhfp5PbGV3dQWH9RskKe6QTti2qmJAycLhsWkBot",
  "key25": "jbMPv9RNYq96TRX8yFDDsqtjQ9fJqJJHfapRP7bu1ph1ynD3Snd2uQeyQWgCWBSVJp1heEnfrzgoqs6zCmUX6oy",
  "key26": "2FZYvY9L6sJD9itvi3Nm3kBMPs73w89sD6ZSnkGaeD6A3wWPbWHWcgoQ8MR39zh9UyFYCMWgwYhybctWGpzCyR3C",
  "key27": "AUHoAn2DELGYdVCnwzr4ZHf5EtEVmon5ayuYzuVjRZsxdpp2qRmHz35YV4C5R5aPrrQkspHZVmV7vk96yBL7Hsr",
  "key28": "2XYRjsKf8Y8hB1pyUckmVYNWfAVns66eWzBvWvkRV3Aijrgw9pw4bsUD6a3iZs61L6Pfu9cpVmFuEnGZPADeM4EU"
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
