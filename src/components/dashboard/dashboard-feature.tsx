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
    "2iRnih9rNstY5uE1prootXJ43T5QDiWCF6dVeB9Fj1DHiQJgWqRrhMi2KmoNU1vPSFTzZ3ern67LJ4qUHzz8Ebmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gUD8k4C4dTXCAtk4KzJc1avPTepmiBstxDRzpaunfNGw7RHG9GRxxrYwQLzkspep8ULeCAoWh1HZFMggGxdttyC",
  "key1": "5QRrbCAHdc8DVcKxN1PjqZvRTHjK9RifVcvoLiKMjfSuYx2ePnig3ZE2GgKPHayx8X6pgmR1z3iF9HW4c3dceRiR",
  "key2": "fCLFJP85WtLtFhAbCoZmKJ1bXjQq3UVj7kJKrgAYN9hvZ8AB7jEWoQvG1tbY71TxNDrQWALEyPs7y1VThR2rd8u",
  "key3": "4Urqmicbe1R2k9Nw7wkYKJwYs4kDjtVUi1objw8tk3ryEHkd2YovNbmgLj8hBpuEc1gbXqGyH8aX1PJRxEP8gN3s",
  "key4": "5HpL9e7EdLZZuN9ia1ZpMw3mwRAaBvbTUrNAxw4GNFoYHc9joV8mMzv5jmJu2qJZPQpoFTN2Z3uzvvscARn8z5Qw",
  "key5": "GVB3zBE3QXqPbYaLJf6n7ZNefWHLYvxqP6X6sUScmg9igQWx32L1xmnRJpJ6M8syogE8ej2PjnjJ76a1BBnFuxx",
  "key6": "uctCQj3YLUwFaeqxcZGegWWXBrurCq5Qs8SviTzvV2qADJ4UY2XZ9JicGwu4Guc6VDaBnJPLUf1D3gVQuq4NRK2",
  "key7": "2eqRwPG8JYMxqC9J3V82FrsZMeLnUeYrUVuhcG7g2ji6Wp83kT19Kg4tVcYSq4Vip37LsGrtM5TGTWPssuKnxC4h",
  "key8": "65u3WBo6GFoeVJb7fU8Jo4spAmzNR8mEapRPcYnUiv7soAjpB7NWMfJfa5nmMpnbQd71K6kPbxWrwLj5ohEfovKg",
  "key9": "2aBLcdEvVH93bjKT9aqZRUhQexz9LGR99EGD815RQ4AqFMkr85EwLD7do3feA5yJBnKZkQwQvyYc8YvTuv5j5ca2",
  "key10": "677AoLaYk81ugzGotA8Tq216YgyUQQtbvdBiA4zcgBfSfumBkq3hNSXfWcVsNuedgd7PUkvy74DeMXQrhGGpnbkX",
  "key11": "3funCNDcreubd923V4EVS7JSSsght8sB2qqjFgynuL6A11WWqmJH4LYTqNrfyB4n9npi9cm7c8sqvTABpjDSywPJ",
  "key12": "5QRDSQGpWxqxC8CTcHvx3gDNtKyhAGr9jj9cXCBnKsqj6ixPK4L3CK3i5fAkokJnBUeVLPXuTBYxy5ZFU8yvWqps",
  "key13": "2M8aYm779JWGntF6yhrgP6apHU1bwjveiHHgqYix4TmaFU4Jya2SpDp6T7pCgcEkQsdDhn8CqRp6eM3HPNKYMLPZ",
  "key14": "29zB7YGGs2oNFFKgBBhNE1x7p4vPUHtKC3viUWmYSCnagJ8jYLUgxDvT6T1sdtVYPo3d6pK4hujy9sUJ9Z63GSCF",
  "key15": "wBChoxMLE6suaVu5iCEEQDPXKjpSdJtrEX9Bmax4Q3ixuhboFHkCknVLoEU7HjWLXgyXvxJxU8wNARoRAGBFgGT",
  "key16": "3wvpPkW8A9dfUM5JfZwSRMKDkCNQCHaYdUAWqSW1ujPoP5EZRHU265oECfN4cyPRgg1xgvRqz7vo2oTDqC6PYBGH",
  "key17": "4qGPpZDRTai13pMPGeC9uhJBh2uMR15ccEwusZcve9NasvSD9W4okZEa6t9U4yVgzG4HgsRqwe5TxsnG2k8Dy7Bn",
  "key18": "9QZaSkfv5jHntZxiuZXLYGc3JonLRQVexLqVY1f8UDckdq3W5ckDD9pvJxXGdF8vBvvFpSsandHKxDoq54s8B5V",
  "key19": "KVEM1TYpx9NnKNtDXVqPhwgttp2aSwTMbzWVCMhRjvqUzhCm21PA88jLQ4qZWf4uw2TpMNGUiQvW3qpHBb4QD4Y",
  "key20": "5xCQoUTjiTLBhhdpfw9uuxojzniQ1uMCN1GymY5dv21o1KCMbGxzuWMV5v7hDwzoMLZX2BC5M6LJKSJ7XpZfCqBi",
  "key21": "3zA1BVu6PFD46zCjHmNxZ4o3UDqtdtJJKYosPDc3u7L7KE5Vj83UARbgz8nduh3g1HY8XpDDeEXeETrANkANPBxT",
  "key22": "2DU4ALVuyPfeh8vWhUBZMoBK9TspW4hCFahm35psMzWzHKj2c2Du2hL5eh5eCsPvYuT5Jx67ak5o4nvfG6spYEbM",
  "key23": "4ogUJzuL13GsSxMvKEbtWrkZVM8TNAHHV9xomRGQKhbpZihjnrXzbtDb9YLRBy7s5HcrcJ5sHwLpq3thmduiUki6",
  "key24": "TDSTzBH7GTXnDKVGtG2f6hq3JhGqT9yN985ujePvZeDHi8dfyTdMnpUu78DYfFjkHxU1t7j316tZis5Yic1T6ZQ",
  "key25": "2cWT9U3tuo3Vu4NKwaERTzA1cexHVZ6pETZYBCKSkGcFj2ENJNSWwhnXFfXsxDusdCh3JYRWP9EXfkE6gQpDqyZw",
  "key26": "DRxvfyyN1WL7UZF8H1VHxAgGP22UXjyjPXHKGt9pQig7Qdj7hJzmntjsxE7gNGMWGKQCWNtyuVq1bjCLfwoHq1U",
  "key27": "bRQxJzUwVcLE3uM3mMbLGi4BqGXin2veEwioBNRVcvocvUEPnTPoPZviigGQdBCYJoETxkQknQGcmk1EkWmwqjd",
  "key28": "2Hn6hFhS4r1ekNScVdeQezjB6ugWDQu6bcACD33PCoN5M6Hcezac36Ko1UPMK4rbtx36dixPSEuxcT2oDgwyMcgg",
  "key29": "5WQyBX9h8QMdAisS1zJcLeNaonqwWKy23Ucq1rfhP61G9MbzktAWp1FJBbWWTYnw6muqPfCi8z5Qny6GuRqrAnLJ",
  "key30": "zxc2cy2gHZUKNYpUbtD2VN7ZctxiQAbxAAk2HErnBk6a8MzCNty6WFzapb7wAHVHrcDvKm9XzDw66qBgwmxEbgH",
  "key31": "eG5FUUhXcbmbzC3bAHRjj23j9BTgUzTqb5qTeqE3Uip57WcY48Fhajhff2y1amCb8u7tUkF9e6R28CvHTCHWwnn"
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
