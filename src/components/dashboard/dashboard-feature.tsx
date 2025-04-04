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
    "46Vv9qWysDs7qYLztYVVPM8tkTaCEdF2QZvefdNbc2gnUStCHXrDQn7rkn3BsHcErrGzcyiHQ8qGcVDjeRRCaP9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bsiUjE5h7dR4FdBuNzutp8vMehgc5MMbaHyB6EeSvfrauq3TcCHzzfrQyQgf8JGych5FD5r7d9ybneSaVhK8r42",
  "key1": "FJEAYyEU7E4EqmLVeApsV5PYxaL5bbRWn4UyceAe72KBD7K5WJYDiz8LPczpfE1ytYoWakWKM859bwfSrCsrG6N",
  "key2": "svVrnGnAgGAVwvLYMPtoMH6WYJrhzWKSyhuS1Frg1MMfQjPJ5pWNqnuqQehgk4enPhdSBf6Qvsy7Q5Lejc4JHwJ",
  "key3": "h9ZWqxLnfLL7MvVGZj7SEGizjEhBYipdbSzedgbQR5rQs62FpRTvMLEryPnjaBN4kW8MjphsmvqQ4usukEWuCE3",
  "key4": "4oqX4xM8VQsAjzwQurLqTEimjRcT1Gfwe4pUu8EGxikPXqmz75zomJhcTSd3eGDqU7jKsky94uiNCsw1JBgGyRyj",
  "key5": "4p9wR6jEELrxtwMkK7P9puZBVXqXA1Ftzo83qG5E79BoLnfReyacup5o2hx7jtWchqMR7XZq7J5KDDhhFBUrEuFn",
  "key6": "fH5CCxau2ZiEsA4i7xsZnFcg5cwxDjv8Hg7stQ6RqFP1RuJC5XSCV6o1X1R56UNmchZUk3r1VgwutgQpb4rGmSU",
  "key7": "5LSaJnMdUJ7Y3PuhMyQsjV5NmpnToWrroxTra9W7Lbpx891TzHzzQXjY1PX8k4UYGwkPRifMh8KQ8P5RGZTL73qr",
  "key8": "32xjG9mytUyiuadxQ2fuxgxZxmgx9MyR93LbuBfyo3QVJ5g8M5azr7vT1qeTZQn1suzzTHRBmmT4z3AVi5As81gt",
  "key9": "2HGLH69CMG9b9UkPbshqdpYxhwV11zBJNTB4c2XifwdPPWV1HehFqc1YFn2hCXrA7L952w111aVm2QjFuAq583yj",
  "key10": "328se6gUd6AwApyVYuz5T7x6Zv7MrgCwQ2J7cXM3fY638jCbNVrCJTfwvK1X8c2TQF9T1DkUHRVCKawAjNYUtM6a",
  "key11": "5wBR2hvAWxfuKaSvn73m2pNELoekaPdW2ds26b1hurRmU1sjfZipWtj1cUeteeoy4RGjdvji732Mg85Lssf8qtVu",
  "key12": "4p98kJ3mCZL3B7qCEPtQ89dRQfHAvyz4DnVocD1xSpw1LNS7EznMKEGPK2KSFsCTz9Hxbiqb3oMzCzmQ5qDkZseo",
  "key13": "3gRp1M6oxtPdxW9yN5dEbeVnMfg36UvRLfu9nd8wmAYzVtDAJgRP8iqr3BcjgabTUsP2u1aMTaKLNJn4b6DmbEG7",
  "key14": "4KMQSjRVowcBUXKHz83A1hR661LShHwvamQn3n3girRJkT2bPNSdDViveptdaVLJ7pZjmUk8XPMAUV9QU2zt2pj1",
  "key15": "5U1TqDxZ3xzjGbsRk6puzVqTQcw9nrzCmXRb7yEtcNJmgzU85dLwRKogtuUNq3yuZV7dBXF4hAVBw417deSCQVkZ",
  "key16": "51s69S9kMAKSchbhmFzxdz5fjHcXr93xtitQLfY2DoKpwZpWJTsxFJRwoifj1rpkA39kNcrF7btN9QiZfBCYBJ4L",
  "key17": "KKwndjnyb6u1YET28MHL2FVfvQvYM6zkHmXEdXF4WmWjkANJEQWeFdRU9CB17g1aXZ84m7cpLR38WzsicpTE8HB",
  "key18": "5yeyyGUvZPG5BeJPuVrJbcZWx2Xv42AQk4d3zHCEVGX3zPYbpwsVmfBWnhhD7MWpKQNVR78Zw2nf3pBozFshrCq8",
  "key19": "Vit4SHW4QmtxHkgzSHxRFs9skfzSGR8YUiJQDJRrZLQ13qkNuim3qahWRKh1j181G5sf2DAkPZmFXWinfFSZdmg",
  "key20": "5TTJQfzgh6mJFFLQtCybff95MC37VaVyYtHMAi2cfttXS7jdXyLue7HXLppqVU6RhTuTbfmg3iT97FHUwRGHE2PU",
  "key21": "8oZW6jnboHrfJdRnYgCZ3hZcvExQFAg1c2Kam1m7Eq6jxrszSWiDvWsUorcWi9aGvt98GUzNhejEB8im59eUKzm",
  "key22": "2nVBZod1BWJ81Qw6xFWkTPCnFh8DRBdE6TTQZHJHcDS4wGxTVbWefkMANzGW2XJHp79YhWrGT6Sm9Y2K2Wus67yx",
  "key23": "uChiVdHP39LPb7xHYCacnV7nw4xZDNV2mEAuHBMbAREVNzJ8ejLUPo2ZEst8ca7uFopkij8B27oBEiznkjPPdHt",
  "key24": "3EKGbM8JKbGiM3Vt2k3E3ah58p6mZYJH3HarN8fBB1Xia7DfZc7x94rXZ4FzmSJJFpk227ixSJWUKRuAD7Xm9PB4",
  "key25": "5JXqeEYKi58KQdKu5VeAVEJYJFsDeHSYCJoAXfe49k3HfLuRAFsbdZX6mBsmQ5ydhb5hxQKnxshNsJjaTZ1j7thA",
  "key26": "4rhJX66Av5ydMJqQRgdBRrkaKYLCHuTc9ePiexkUeM6Eqg6QyL2GKif1437CsD4GpNAupKvHpPkmkoAhJw6vQGi5",
  "key27": "qKoK9eemLM4CjPYsSLpmBz2pU458oJfAHnbJJjrnq3881QJvCZxbykk14w5GEyU4dpGAYHeLSiGwfLtQbmBC7Wh",
  "key28": "5VVtG8p8SgzKLJAhTethMCWrRs821ty8VKpxws4mpxiUm2z4cpH1jaFYmC3b2LHATPijLkD7s83sEZgS762AKd88"
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
