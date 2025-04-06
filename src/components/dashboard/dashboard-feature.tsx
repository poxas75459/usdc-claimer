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
    "2iFgELB6Qo5nNqssTrFtqFnRHQ3g8Q7s6dBPjCboN3SFFYe71GGnzBCRRgKxn7HV8wdhBfzcUTmGTdy9FGoGDe6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vRoSLmQKkHG8go9Ymhj3JeLZK2bDirTSiy376UpvbYJ8QoGVAf7JjtnEnPnMeNbGePGnJWF6nF9HaquCTj5KM4",
  "key1": "FeCBUtWYjV4gDXPnHoPDprLetiYUeuCapGGkaKifqczyCpGWY1jDafNHGF8ftzLkJJrDSGdUkhj6GSiEcYSdhve",
  "key2": "pZkSKyDHh2TdVbyt1wKZTaNnQNU8dqbsyRNEmnwCvGDVrvVJDCoBR1deAWiFESh2iMXVDR5VvyrtUQn2fTQRouF",
  "key3": "4M6chinLuiUwvidTmnRXoWfWKb3N3EymPnr8W2AADHV7Sa4svPwm8UdDWGy8si8J6HPcEPrzH7ys8d9fXzgY2MGC",
  "key4": "3WS2ZCEm2mXyEmyy4ot7a6Zc5ZasmFqyo9HdrHeppZcNMn4PiZegzWaUGDKrnMCBxCH9WuM2KNEZVyuG8fNRbMJ4",
  "key5": "48Ndz4E5rACiDGboWrqrNGdbWLCCbsuzkACJpmUBBPvMN9cDYy8TBax3aUFLLTWSYkuqDei5uotEidgiENGieDyX",
  "key6": "4xqZawy43iQ9cdXmdFskEZjWxVQVjiDcY2GwFNPYHwrCcpX2hQSEq9yLUYeMmuZZPD5ZWkq1a2HNvS112hyhYoxQ",
  "key7": "3gQviyji73cJxTbw1xVFLABu3BuRrCumKs2pPnLzSY6WuoSnwzUVUojP1myBrRxFXYmVJzVEfPTADutbpkhnhreK",
  "key8": "2PSm9hPf6L49TsfRUxm1m8NSMZHq88GFuZRSqTgHFRH33Kd5cSqRnrrtUCCjHnhvUrAYjH1YMhjHD2o1bzvKgkKf",
  "key9": "3e9hdZEZf4tWnzvPymPiYwyCS1vcEJtxbDzqvdva1xFAKqF8efsfE7XRP8o33y6TtDX411hjczqkFmZbpnkrbzi8",
  "key10": "3wF7RYGsgVWBjihX6fpEwPzC2n3xyM3beppiSee66KsW8GaiLkQMmb45Gf1pWkWGtYSDj2LMNmBPKust4CK8Yujz",
  "key11": "3RykA6rGAxgmYGi6wMRYJ9raLqDm2QRP4aU6cV9Vo4tgL6EPhwNW6zvhfrktsPuLQFsPgdUdr81AY35DZYQY19Er",
  "key12": "H73zqdHdyR2XLD7tS9fZuTwoSXxWiSJj5f3RrNVHfhWMYbTSKdCdthufMve6FDRPo8JZtyXGoMRPn81mNdesnmH",
  "key13": "4BjTA8PzSWt8K1QfmdcvNATsXmcaFiAxJiUpxz7nu3P8FaVXdyo7NMcgD8Eh8eiP5fBxutvp1EUwrdW54NS5ksUx",
  "key14": "2r7SXAtYnfcHGMGXSThe4xeSorKXnQNxGDfSDT1wxNo93DG43zo2s7zp65oTwNazxTJwgDhAu2hf7oNQ4hKAf8hk",
  "key15": "4HqjhHp2FFQiGo8zogWXpDmQq3KdtqLfo8MMMs6Min7MXeBrzGgyXeJgWCxi1m1DeU64apdrw4pBsW7xdW3MXFGc",
  "key16": "4k6bfrNyg7CFQUWgZAH5rpsk8cwBxwaxHQUquSnbGg8JbYJMteJRLJjwNFP42dbxmz1q9WddkfsjW5q3yjn4CfQq",
  "key17": "59Y5vQ6G4uBTpJH2KwbzegA2b36ZTYsLSRuGvY9KzzpKkKWCjoginLW8a365JkPruuNbZM4iodWZzq8kXu53pFK",
  "key18": "2PWvTZKH9MCqnP23t6ACHsLvnpAVzFsQRB88iwyikRwEo9qrTSZXnp4v28GGTLYt8n6y4BSRcGnjpF5XTYSB5gie",
  "key19": "CEHFq5rRwjc2qpJXgwyDny6NffgJfUy41beMenHz3EiyQm58QLX1NWKv9buK8DYqCfkZhakWCDxb3pbZS1uebkA",
  "key20": "3iAUyHNeA76tnq1cQd7dcoCyYv18xdwuSDUCFar7Sf82mj7ZdnbWMCuJUD2mDR6jmhU7Rcb9HNyiWH6ukGbQmLvw",
  "key21": "5RSAv6ZAXysuL4mo55EJXWufkeKVbcB1UEtCaUL2ap4aXsGGSeP9tH4jRDhyeZrszcM6dCvEWVQrqDor2BAoSNsH",
  "key22": "4KDoeRPXozhpspFc4UrLBQDFqy2BpNA9oMeErWfk73Vf3skBCufYxJeqiJK3rVGCMZQgSyAsXRJHmFfNXAQc2uKL",
  "key23": "4pg2WsvRVPNM975qeEPgirXdpVyCKFZety1ShrSukQM76WMqJC2xx4ZQBjVxFup3pvwbrEbnohqVyq1MjA33woUe",
  "key24": "53w5fhkXejXm9dr8rjg18uUXDEj4CXPTQmpRw8k4mEDXHHuvZBWm1H7snrS93YqW2vK3iYo2bZgVMfyPXVDwwrMP",
  "key25": "4KRKvrCDtmiiwUzykbtgHUbYsGiMsEhkKyXAdJmtNWojp83h6oF6ZnttiDmC8LqWv9tmXbBvtJ1YJFUYPQAA7ycb",
  "key26": "2byBYHsGLUbbGXEshTBxeq9kvuGWhYYvtZ4aCiQik6L4rSz8PXT1GPjzeNjrtMk6nZyJJmE7iHX4MQZnei939suL",
  "key27": "2nKTexmueTgrhzNSpiDPykrGS8Y1S7u3SsnNGUbfJrpR2yKco3om2tFuB2PBZn2uUZm6HuiVXiHt1woN8QpZvSwh",
  "key28": "o2zMJrr27bzcFdwtkKhFwX7Tb92bEGQ6XsyTfp8RkheKDhBPzsQq8vJEomxmjYBY1GAWdUhpzTaLFnrnvKN7TwM",
  "key29": "2Tt4ixkHgXPtACFXSVoJdwCLpdBa814K1ikbwn2AMjnFu8YV2Um3VniH2eyCRFQSWjypHNU1UiMN8SC3WFgFQr3h",
  "key30": "5XK9QX9P5GAJbcyz6SGURjZNZsCVpTqVTWExqw4CLVxA6Ay4mKmnSEzEArp7q7iwCZeJEy1RVVu3pqKxZiNJij21",
  "key31": "3kmxVgeTF4jkiyoLEiSasX7zfQXBTUNFHgTeg2jZf1HLK7vypLmAoaKKfZPCbnbL92bRKweQZy3vsxAcccaNgTwM",
  "key32": "32sKG2tSiuXSxTLXQGuEkxk4pgqc8jxK8dwf3qhjsGbTPMmaWz9emhWzZYDayvgX7qnnGwVcoKSGyaCLgVEiaCAb",
  "key33": "3ZydvnQsh5Uv7n73iBnvxP4nDBZ993MJNxWVVHph5djeM3RpryiFh2JfttxCkPimUV1K85KVqUmxX4GJbeh9adso",
  "key34": "5UidyVXhhq9Qwpo9CtGudr8rDXP7gSFQB6CqQNjiJn2vAFX3NgNCw7F1FAzLocQFDJugDR6ApSxsKq5G7ziqSedS",
  "key35": "4kWaN8Zfh7HU7uQKhYVEASpAFyMXZWv23jxrtiZZW63jw15BoMKvLs2ihMhy3aSVLTiacQ29RryLsxG3czAuVCmW",
  "key36": "2RbEvC49ahgJVtVjpsQNqJUM9Hru2xvCRYobaPPPBsXWX5QSkfbCb85CT3RXrLuDBBJrzMZ2vHXHpBdnRZcN2tkP",
  "key37": "29Zm6Rbg829kANvFJX5G97RePZbJtnohrMkEBsGgdEa3nV1gkXKFt1rLarN6JEa8RxiQxdF844Lc3oYGXtGaVrnN",
  "key38": "C9M4KuqeJzbdHvUgRhKH3qcBhZYewUP9rJnHVrWcYaNdqR1v7Nw2VBKtaZBnSFLRtcjUCWhNUm7NPwBGjDbeZEw",
  "key39": "4Vys2mJq5EnWFTGyQHtCRxgmrxZ3C5p3rt3k35Vniat6zPtTU96NNjHdfnLGSUnRVus48BjsgLxwiaB8rqEcBTTC",
  "key40": "4jc4u8YCUFGz79VJowGeP8TUzsfpmLZpadCDyXGX2V8qnFPQVR15TZMsV1Uo4ZdJuQtic32KoxdaAJn6gpvURBzo",
  "key41": "66sLL52npfgASN3ZjPMhEDoeSdTtz4AyvHu4LP46tF3BW72EWafLPJCKsddk43g9MR27xfYDbk3z67QSrm2jRaUj",
  "key42": "28xYBFKmtM22T7wQEa8qaLHT9GdkFPTc3Z5VBxEPv7dj52JrcvZBbbSKrUyJnNwtnGYv3isn3sksTWwFg4y2mLoG",
  "key43": "5yJ2PDJQ1PW5WvQSh65JBGQjPR7fJLUmRQqq6RzwAD2gTaHtrHd1zkATLy577zAGUdUgw5nk6haWzdDid99EuEfh",
  "key44": "35dHRFrmw9S32LBhjfWiNZFE12xsJuNWANgStArqwJ1w7Yq4uAiFPbiFTvb9o5abu4wHHU1haDRzFqXQ6fWbBui5",
  "key45": "4YTdCxD7X9VUNSNu47hYe9f791VDR19P9qrb7srsgQGcLNr9oAVtSM8DtqvfxGamEMHLpH4trDVQ9czMD6UpafL8",
  "key46": "2aRQotPWRH3B3kfiqGEFqBU9VwSEdYfWLrEUNxd8HBFgdpswgQdwEUfF6sJ5cUeHzEjjoBpkwBMJzeAMs6vDtHqH",
  "key47": "28ZWEmbJZdMD8Bxi9Wz6xcW5ErkA7ceefQTAvyVr3jiw9TiJqSZHCrn2LVsiksP6tPqaxVHkMwYt3nuN8yT98JxF",
  "key48": "3t6kccKMbfgy4LgEJsgG3HLqtvjw6uUMruvizGqkSNkdEVfJj9GEFLeFe4wQG3mwsz2UWB7xyj2ZX4xr1gUhN5RF"
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
