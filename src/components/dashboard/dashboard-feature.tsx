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
    "4rq9jYmDBZQTtsqX2zoLqmF5AfGniwauJTyumiNR1uZL1u8tZAXa1Nz4ruqUMoArq9cU9yVavAqLacpHkwpaQGxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCvKihhGZXeK3f6qoSPykvPR3KN7rkaN1DVuJXKe1kNdh7MmMonCw3ggpS6FrUcs4nBZqBcXkamQwniusDdBTeg",
  "key1": "5JSrUvwYER4aJ1GhMPtwszqzEgRkRTYYNuF8ELXQ6YY6anmSXjQNFxZMrhyDeNPEdMAuUxXN5c9ynXmnye1FDbkb",
  "key2": "3FmnLojW9agLvNHvA3BYduXeK3LotX8ZoP3VkDK3W3UAdEEiy5gq8r7mxvxeYZ8pHrogwGBoRGEehJYi31QvC6wi",
  "key3": "47TWzJ3kjsBLJxBY9CYPkpobaUVjbWNJNVyZ5YfhyPK5uQ3xpYjorMnoiYKZjazEvipr1hKtTtNpBhPSppkSUkc",
  "key4": "5bEWw9tj8XiRXqb3PTn8mUKLiqPYhYrijsRonAkjtghuun2He5jK9eMzRsZ8dmTP4njvK8oLJav7pPW7G8uBDtFR",
  "key5": "2Q6KJkq3SErv63FAQBjJ89shrvPs6qZUXQy9BFBjWzdxEk4TX6WBi9xuhmTfhAzMa2PaN1ukjAbt2AAeTX4aLzG4",
  "key6": "5x3uVtpZAvGbepGgGEessPSK7bibKTEcXkX2JJMfdeqpVRb2fGDoASBwJDLNfHvF6RHuU44prBLBYBs2Vjq7wLkP",
  "key7": "2A9gqFG2RnS2LDojPYAdEM8nt16BnBeugekJez576KdViRZaTr3RqF5UpVENdqYbDqFfTHYW4USn82pfCShU58hK",
  "key8": "451R2QTinnJBiPEFfCtekCySiFTWz2TqKMbDeWty6ktWZ1h13JaPp1sVdvDtsMaFGus6HgZiHiKTmptBi99z55X5",
  "key9": "4T2LKi5sXamecBWUW2Uev86oSzUDP2syyxbEDHgCKzuwv4gagGuPTAx4qctDyLpQtFiu8Pvv3oqzYvzeVKaACwGy",
  "key10": "4GfZopSyMrCVeNfZPFGGUT45rdLeaajf3vgvW1YA9S7gCXv64pEBuLUNMxMJgQwFHvW6mP75LoSg7DjJkvN7xVYk",
  "key11": "3z2aPqU5ZmxZoLus7mN8nrypFRhtErphyoiibjURP1oJWDVpsmsxK5zv7rwhgRfn9zunHco1CK6XoFnnUvh8Gs4y",
  "key12": "4NvhFDJm7H51fL39cvWDNTNFJ7tDQhF7VPZxAsVABYRngietzyWS3oonMZwrXRqSy3oDBfTv7omKc3joEVgq3HRB",
  "key13": "4JyJ5DnPfSd5XcxeWeRvwTM3B9K5KAohwSAa7acB5GYXXTm1S3SpJcXgFD6YrkKED3ae3xsP8nyHQXAFwc2fDbJT",
  "key14": "5Dhd2MshB43iqTQGKTWY8ySg9vTgDWyyvYpuPVPEwb7BGqLprehn7p5Mu1SYr5DBkv2PrqxWKNVNGNFYTE5siQae",
  "key15": "5n1TePgTtM3M4XnCvdG9Q8swB22HiaX1MHjoBnkyNUZypUDqVZPQ3qjqtXFNtoczQYpi27T3NYV6cayAXNrtF267",
  "key16": "2ZqdnRsCgByr7eyRrxL81ghr7jpT9mF8GzoTjWqd96YcxKNCHGJ3nFDHNVqSd6Y4rjsHAFhW16LhVqmBD8WaFgX3",
  "key17": "2QaGetSVXFGWu6voAvgrTyyi5zbp7rgv4anR9qstZausQjzLuiLdTvSNFVXVzZctpiHrQBwQtUh6mmytEAorfgnx",
  "key18": "5iH6s67TJSXpA7WfwWzAA5U4uhGKSEVQjEWBxGsnL4hxTU7uWac4bR3NuD3S34k3p7w9pu8LsQeb598g6eRGXtMX",
  "key19": "5RBMWuzxAw9Zbg9c7coyiY2P348w56QVzkFcUZJQrQeLu5fz1tfGC5NKWhrVRpazKx6CFi9428trkUSQpMpLrjzQ",
  "key20": "3K4kRafZezneH7L5XvkGe31No1iQYLkVthVEDaVFNvzwvz3YLL67QdRLnWvSqXecbytvgguakFjNJh929QB8DDx8",
  "key21": "4fGUfntJYAnEJqRPExBszf3KAXHWJSUTeSztQMPqwP4uFxdkE7NcpGD6pEHkNS3PiwtPbvKAGMvCY1SaYwHTz1so",
  "key22": "4o45JGUuatUaMpsU3aPkoR57CnSyz2KbzQmdegZ55iknNbi1dLc4wbnvHCJ4bmRRrcC9V6GdSPbQQVHvgBjRPFYA",
  "key23": "Ybg4tBai8EBp6MnuWVYCTqmgeyFsKkodYmagiG1sgDjbsf73c6p5QKd3S9T76XqecpyTPr7PsLjYoyeU9DAqKhA",
  "key24": "41zp2owKb6ZU5FAfNUEw7JitwYwsuGiiXpPLrHdE8Liidr9DcQyZK6gnBH1XBPNDJ6ZeguFgApN38SYTbG84b8DB",
  "key25": "34sbijN2uRNJir3WSPUA8G3y8c8jasEFipsivA3vzhs5KF4po482xgXVdnbLM256QAQQkP33qYH1nGW3RP1jBUp2",
  "key26": "2P5pih2y8MZ5RGhnsriqupzDEaMPvNxdEjtJ71LzvzWzPpwpRGYLadpmMEK5fz82NEGN8vhtczdHAbrHwy3aMzxS",
  "key27": "5dB5onJ4zEMGDRQnoeNaku5vr4yZyrHW3goUPy9jZaaaYMTBsAxmDCF82zkw8tTWTg2aZbfXRN64XUyfue1RUfLN",
  "key28": "26KJJbbKo7q1vdxoSv73EM8hYnLvAfm4HMuyUQZ4iCyGAbg9S67p7PZ7zcPi6UsE4roL6PrzwnUH8QjwUudWuyq3",
  "key29": "1p41M1T7vnad9RsTjLRKocieYGWMXbetERsBUXZaZ813hjMQePTiVx1jufdejkHRc3MZ2PVb3mqTV2QxyGvc4KX",
  "key30": "5rUARRwoRPTa5yhAKiZg5czLbqmB9NgV2Y2vz4o4ZzJa9Wiy2xS6xXkjwX5YTJeAsf6eLdPXfvvmUe4gnkRcJQgf",
  "key31": "3QrotGxe2CAwpzSh2T7jnseuTBbYBw3nwkJsCKJSMDtA7XY7SmHJHnf4ntj8CXYo3dWjdn3DE9Sbi9SPiqgj7s5J",
  "key32": "44Gbyz5T9a6cPjqdF4mc8BwXKkgQNktRyiEazoCK2WW61LPqqFfUynGxtyxvPBo2VNjSjixjfhhFt6eUT8McAVh3",
  "key33": "3jazq72UhBhxZEc8YXYfKAKDxPqYtbubbEpqLjTWsQjXVXFnWVVmxN5BNsmKzUWWDF4i95qwjXwhMdmkprWYm7NM",
  "key34": "BUpfTvmZX2jMiDBonZ3NQmVVVCp4jUJhzVo3rfTnW8BJSfLzq77iVcuSuDZQD6hA4A4hKQFQae8Yt8eJQeXZcnb",
  "key35": "2WGmvfWPCR3KS84dnxGQHvr7Sg35LjX6NvKyag8s8g8hovNta7AmDFWLE1ucuSTPR7kWKE8TRNcm1nwZaLqwLWUB",
  "key36": "3ovYu16mhMUTTbuckepAaM447iUhEkc6VmmG1uTGPsgi84qiSstgqGfL4JmeD2f5Kr7gSpFRzFk1p9KeaenkzsJV",
  "key37": "dkbwmxi8QDCncsBRaHyzhqAnQi3FLmXSZQo2vshYfYMivba1Q9gXK2p2GGUG68hbXxK1dERtd8h1b6cXmurRo4f",
  "key38": "2etYNpD5kXwiddt4TYUGoh2piHqj2NTYMq8Md7wd7GP9vU4dbvPf9BTBZ5ejiwaBAcfdb11rAUenToGeHEg7GP72"
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
