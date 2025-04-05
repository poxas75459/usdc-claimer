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
    "4sddS4pZuFdyjU5aGMRizwL6u7Szi51kUTNNMsLKVLAiiujuKNj3Gg7Kvf6AHHcfG9kqEf1sSqg4iETwp6PEoCoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VzanJYyyPQgHrCMNuU9VmNSq8xgUWBNyKVKCkMnqCEi58k7wWg31hUh5a3DcRMRN4cjjk9Pt1va4darV3HW3Rx3",
  "key1": "aBYZJB4AE1shRgDcDKPeJuZY6wPpDKFGWUcBLsQgapJ69qDWMD7W2QxPggDJY5eB2TLqNsswFwUyPG1NPkRKwbH",
  "key2": "3m42nrma5kkkx2JtJiZoMosgoWbqRMH6bnxS2ieTgUVqbuQeyLHQf4o8SP4NUhU4PvTTL589LUA8x5tVzRSrD8nj",
  "key3": "2vsw3P1ibCc1B3gqzk81yAVbLTTi6xdR699ECZ9VeF3LcqHUtdtC6Rstk6bnBp2yyWraUNzdPBh17tG4QR3x7ijA",
  "key4": "dbSDtNDbMYYH4cVyKvDLBEuSbsszRVmSj6D4kCnTRFkuBHSHW8uBB2NmP6rr57vRYQYAuoH5xURGfBhp1n9yZFC",
  "key5": "22YrkGDZ5qSTRAwA1ZBRT2LPLA2cPLq28Yq7WqJvyB8CDvA5fzzRdYcXVb2nYgvxzA1kTvrWTosrHpBu9vsEpzCj",
  "key6": "5KTVM5j84zkMjNgZcGdZMmHib1DpNprR2U6t5PH82QihcCRyXHm6LTg5Xh1FYZ6D58eCmuWaY6EpdZ2RnH66jajf",
  "key7": "5ojU28yRyjWwouhMXRjmsuczEH8y2LJXrBwDAbuMAVcfGGAuffacpKbeQNyUJLbkeoNAeeiqRfvHRPtHwsiPP2AY",
  "key8": "Bi772qiFv3jg5kvvf7KMHwYDTzKJZjsgbAmYcUWyBHLY6k4ffXRBTRDRfJGZaHoxCZJaGEguNNHzn147BzzMrVV",
  "key9": "5VYyT7tGnviswuYbpa2jB92grrydhBm7xDMqj3J6SfzdRuonTxsuYoAStcQQm59M9RmfpJAotxyim8u7jFxfpXhu",
  "key10": "TdaVpkE2oXmg4x9zsPDEr5wKYVs6j1URX8dpxZxEdLabbHEqWScCZr2r4jTtF7ywZciNjhkymFYWu6j2959jDmV",
  "key11": "5aGkvdQZJeYuetBoS5EAouU4APuCrypYA8wmEzuhyeAyJSADUmvkzxvuaq5L5ZjnNNh4erppGvZeRkQ9RW7RHJYv",
  "key12": "oSpiW71bVgniYC3uq9CxiTifR7CZMX8j9wMccYmjfrKPomZHPK2R9sCB5rEJY82LEeJPJum7j6EBFSc65ytwG4j",
  "key13": "gqz6ekJwvM2HvtFnooKWUFTgtCDdjjGpeM7k3juT8gDHFH7sFxyP4QuGMN1U6jwygeG2xGx7Ymxbx16x1EuD716",
  "key14": "JE2WrHL89n8JPxsU2AxsevuDszpKNJEt63BWzwZvrkY65nXzsgTXwpnuPbmcjo6JPj14EvhMQK76tCkTUJcwyto",
  "key15": "5T8NGRF2UMtRRNsPQSE8Bq5n4yThJtLk7hjnKPU2tkA3A3F4DeeTDbhBdgwTAEcbmvUjhEwGqvuqi3BqtaTQzAf9",
  "key16": "4yCqZ34DNSuBQcyYxvqHwDgjSzq831Fy9xceYp3uaUHtL76L7sDyhwodVs1HAtgnDPDmFXMZTG7V9SrA9VC79Yct",
  "key17": "5fRrDR732U11fgvhbkAS2X4vDTMgadj7zywXoRGZXjEsTLbqmFtu2dcakaW1bDRVeaSB3XSDhNMFxNoVQMPSF2BA",
  "key18": "4vxSzQBehbwZ7sasTNLqu1qjSfnhpfQvYQFeEGmhFXNyfJ3VdaGrbsJrdihA3Hq6aaKHD3F624fuME8f8rwAojzT",
  "key19": "36tEdzMZ8MraV9ffcKSHrCBo4KbeTxgVGaR8t2C5F3obaN5GYJDhNuk7YRKifFWUXKyGYjE5ogdjU6ZXhUNNgr71",
  "key20": "6kA4gdt8BLWNqnU6YN7nFiVYgkZVmJhMU8NX2zTH3k3Dzr1SZpx8JgDzuW6VMjggNR548pn9Qdcna2jB81hGMYD",
  "key21": "5Bv13Mzi2FJpUbPFn4wyfogsEiF3z8ruVnGMStUmp77nJi7ijkcMptdQBsu2qwqKahUTdREPWANsP526ApANyZca",
  "key22": "2QSkBRAbJaHd6c9gLfCKJg35a24thvd494JicM7znxVyADYUJyi1bZfEAxtnNwVgLgkqXczN7pxtfvrR6Cf3vKQ1",
  "key23": "4v5mREJEAwhtzgNi5yS9F8oxMqbBeNpoRPws89dXNdoi6U2CkCDFLzo1GGKLqs1kQxJgW1Dncfn7k1Jj2ThJNpJS",
  "key24": "3ociPuARkmMVVUdZcbACrrxARbBDmKC1Sqr2QqweWp1SF7FQ9x4ALJ4uta3wZAi8AwEe13ue1HjUyw5sjXhdZRBT",
  "key25": "yh9m7Ahfh7ZdDdcuZZXBDmV8m6jgV71JiZDULbdaocxj4Q7avUP6nLCbFXbZM72emAesja4uYWbDBqohgJqfG7a",
  "key26": "CsnrQkJd1Gcg4428yEYefmgxbRTWFdfpEFx7zc4ECWfsCmDpd7P3KtCLJPJVf6y2honcu818rDpVXGZCNXkogmm",
  "key27": "FQT2ZHQuupzY8H6DnKuzLf3WMfGhjPYr5ktKthQ3U2AdQfUKaD15oV5m2kJTgcaRMGtrAhwb49XAwjSVTyoeMA5",
  "key28": "463VVszVcnJAJsdXq8gq6nHrxVen4TXyPtF1WvtuKJpae3A78vX5spVUqCQotzMAc3kXzvSFApuBVPthFCZTMLTW",
  "key29": "26joM1vyTrBGYYEpvE9VGNXiE9W14JR9CSJxnKDU5ry17gEgJidfxFX84MEnwLBrBKefwnE3NuuNmGSVy29QcqZe"
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
