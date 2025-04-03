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
    "ABJyEhTAqrdtg17ZsW49hXJL8RB2Dy44XDzydi2TnnZnkDJ7P4Gt5zrSZ5YjoDwqYfNxMaokeV5HgbwPpNoN7fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B46VAice69zUJ632G3PwFCdE3JXd4cxZWitY7KbBXkVL9JeD2ksfhP3WLs7ViQeEGWCy51o98255NvtQCgKndgX",
  "key1": "3UMn3ZPwaBN12m47YtkvkZ2PSEPfSJdzNCEjdTDqW33aACF7TzL256S3N6Gcztkv7nxJPaXa8NGwqEeeMH8nZZBM",
  "key2": "BLjoALEH7Am3ktuXxxDLTdzk6GKThvQ4G62HYWCtuysx8ZJShm3ReAJacoa8wpxUpZjN8bxbT2u8qZsqFkdYYvj",
  "key3": "33FNMQqG9cqaLK94P9it1ZcaDthSPPndjTWs5fcTfmgga1FK6kAnTP6r6JRt3ubdVyWyWD8LXVfkFXh29U6AJTjM",
  "key4": "SP9MDjtAwCHT8CtN5Gcs6UQLNvwd9EEY3LqtYtmhU2AhyTQKutReJ2ueRgyA5WXm6RZuB8SC36Ab9RH6iDVsE95",
  "key5": "2iv8qXoiG3uGnZ5wMj5bwuX8GopWaVkUaxn8Ga5eNEnuYPPwVHGM5aAXU7ebdkhrWrvdLiKGqMFKzGYEumRqy3WJ",
  "key6": "TiPK3UhUZqGai37vvhsctp4MWH1HPRsnwkdQkinL9P1byrcFPAibVLuiXJgNmAmUiaL6tHqaPCVLjuc3Nd22bej",
  "key7": "wf9Rd15ZyXndayPUUPrs7gdaXL7MoKoHSCxpWrF6TYeoHzFAAmUKCug2He3QGxLAaPPzEW1Zq9tEkUWgChMEapX",
  "key8": "3sUpuEuVwbNdwdG6jwq2s8TJdRMMWvajwgNLu6MUwGRUwnf94H2u6z2XaSPFJZx2cFhL7LhfNBQ8D6CmrVteUY1n",
  "key9": "4fTfb8UMCjnHhEob94TSfq7jxtAf71avrJHoB7fCzJtK5GtJ9eA3cShwMaPuJg4eFWHbWWx5jX3X2Him5BThhhxL",
  "key10": "2g3vYXcHTFL46EXrTNGwFyqcvpQksrUbKKwUoG7SUYJ2yr5e4UAkRhxDFeg2BQiRhdM47V4gNEut6JhaN6ocQt4m",
  "key11": "5WF7ZV8s8aKsTsFZTFV716zr8rAFgJJAcjeuRsUjs7eMMs8TTP8G8WMnt6Y5XNLxN9Hw6HC9uqt6f3BcWLaNE2CK",
  "key12": "56fNUgzArScFQHqaCsx4gCGcbFNdaxnJGQmM29bpDnQtCzXBFko7jv3e8shyudUHiygpT4vxQBnvXUjRvWVDMK5V",
  "key13": "4iFnikoRYgHLKRCmebwsnxEFG4JUck4KtidWkA6Zu5CumBAqmcfQkKQqGNfD8KmhMYvZbBKxJHFoiHjXWm8ULt19",
  "key14": "2m9YjbYvQKvo59UpL3He3kr6nRPMvFxaNvesK8JirxuHwk6EsMRAxhzDAedDyYKtqkTLbYU2RuzdD34kQtxAJYHb",
  "key15": "4GTKNziEXVEHk4ei9fWXpK4utRsNVn1BAKLgFvF8jGBna3EGfxdVvQzXhmZMfUe74VnNfnbJC284FsKC3zZ12N8r",
  "key16": "4uCoMbhY1kSh7aCFfk7ZcxdMyPPidnhEY6A14fXaGxificnTwqWhqEgC1eFU4UQm9juq9SdT2kk22asCySnFc5Gu",
  "key17": "dhuMtwGL16js8u7WNAkLtM84bHivvTbaDEaoDbTQ75QUN7S9QzMwmQ27ADD7ugkTzb8puo5n6A8sV5TAPFygR6t",
  "key18": "49KZUsLnpuxA1Fa8QCRA1wJU4T1NrBin5jJT1RdQ2X3xjdQogzpMuoR5nEDaHd3ZatRpdP2DrgiPSjjYgDNnGadz",
  "key19": "2Sd55wqsgQk862bX1rQUdWa2DCsnFYguk5GHkuoZkrY7zzL8wyPWWtTQ3JabgC9m9YcFBeEEF3MT5CDsBmYgVBio",
  "key20": "KdKGDZjv6ZZ6c6vqcj35DLCCE89NP28aRmoxMF2vdac4mrfAWkheFMKKnj2cHNGP1eJXmLkKm4YikmYmEqoY4fA",
  "key21": "2scUdLTswujWTDhMSw53d2uDtKdGrxQH7sH7fBnYfEnbhZAqyPaDDF7sro3amq9jtYZKoJexV5Y1mFzg31WxNHoy",
  "key22": "4dqhZ6Z4K4drRxBUwUqBPypgtU5KoSStoU7KamwY5SisCPFeY1fZZ1QvKh8tLsAMZdWvJgmszArJYvuEBqun51V6",
  "key23": "3LHsNbZe6zcZavYSmLJGxUYKzHo2KrdduNtQcEPBeYhZBEzinWJbu9ygZGFT2zvPWrKMXuJMV92V6PuyEqbxnyqf",
  "key24": "4uds9QoLCDoaq6WkbvafizuahTxaxSUsBnC587ntp4DZHDEAciSBqruGfwCbppoU7s7Wb7ZqJnB58ajFqq86iNCq",
  "key25": "4vt1kQmNxzFtRMDmR3TVurVVJyyEk8Z6WFWiAziAAhaZbjJyQfcomryb7SPkdDk5CPgXwcCAknTZm1gvgCHCssEw",
  "key26": "2kt5yRZcbSjXAdVYAtM4Q2AyTXuPj7rxwpWYvdRw7JG7L38vSoMY29oBcSC1fnEdthqPG9jPjcXTTHCKbxYFSwr1",
  "key27": "5AkAZtWCVNYnD6rEuQArbEPvSvAYCeCiMEuPFUG4QvXp7J74eRyVUPJU6n8YxopaoAAPV7GGfn6ePyfbHV1G5zk6",
  "key28": "idkT3iHpXab7uv5tHQmheuej8CtWL4iSVHfTDEEjtLNTseATqgZKyyCUiJD42yAyemUZFvk5kkESidqRLzFHGqc",
  "key29": "3Ahoz9n5Xof475dMjjQeB4jBT64yJsvQoEKmWYQKd7QJrrNiqUUrKWY5op64wuLCcdUuZDL3djLYFvWKYnaXmWgV",
  "key30": "DAUf9m9caPPFqJQF5yiLG4BmGPFhcWW8SYrdnnhFXbVbfjUttMPNXr2gBrjZWq7Z7UVW2i34VvpidFrBDaFifqE",
  "key31": "Xy9Bn8PL1YYQWWKaQHD6RRnjccjJAG2XzhHhsfaWXQbhca2wEcnG7ChfTD3WKkimYCz3iYuVF7anRQqTW8mgrFv",
  "key32": "4RbqEnDtKvUuhmZ1UpmCBK3BRyx1geNYDh3SG2m4jG6Fmwwow3GFdqctQyPfJJBThjGpw6rMATkKW2xS4phgikdW",
  "key33": "Y2G7dqPCEsK5WwVAyvk7h6i148BJ9RZMU6xrCUBWehzfet32YbsSLnfooCdyxmChPmqmV78FqkCfKgbdVx41pSw"
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
