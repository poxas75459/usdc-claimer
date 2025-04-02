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
    "3DbzgvoqpW8tdjCCAnhZKWWM33MiRZjuWtSHeid8EWH6u4sCyvM4LZRLX1Gx7oFW2KEVRPoA4kYstMgjfLGFNgWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Fe5devquuWpat5PLXhDFmzXv1k5FDPeRJPEvpa2weTnjMtK8Qqg95xJUc7uF9gm5bNmsVtjeu6CarDNNfxnqPu",
  "key1": "ZR9ZxAQUQXB8NirCTSHbNgCgHihBiaUQtRhzzaQkJpcApGCA7feK1q6mDtxkm7NuMEMPm87L7nzFm9HVzpBDMAX",
  "key2": "3yJhhggAndW3ENhaXYMy25UL8PzZL1pRvqLxERK4ppZvTqjMKX6xXp4zjd36cptMNUVVtxXKw52wKpdUrFxsrHZR",
  "key3": "38bnzUj37x3dPTeuvfzFz7KDVwhZun9bNdxvr1nocXZvAmn6hkumy2pQLGzY9MoZnkXvvFDnhNfuuFvBJCrRCYhM",
  "key4": "37qLi6wgLyGPWHPaaZs2fQ2MyYpNhiE8zdrWbsFVQpLtz64pQYxCyzM3eu5t6ZJP6ex7FHGDi1Gu6Ny1dgJ1ALZs",
  "key5": "2djayez4rDcGemxJ3uqtk5A8TRAFEHfPUWPM4rHJ7QB4rq6wNrVRzqZCgVhoecudFucN3kpJSGrkHc1TM9gYFaWA",
  "key6": "48vnVgWvF59HrrycbWY6nLwZAc8yqfjCct3bufuboVabJkWH1HT7qUqjqmeZThaVy5C4VgYAoTJsVtPP9tuoHCrp",
  "key7": "2c3kCPnJ7QYfi8sx8uDmX23LBpqcALXT4CcEEfK7ktBuNqkn8PbsFicrrQVAABdpdvuSYchci3w2XvVgkQ1Z2smd",
  "key8": "4dfAvAangFKSQbxHMYhC1arUvH6Ljomqm44NeBkx3xdeCgRaafDCKHWjWk7Vq71v44ojcF3YRydh3yiqx1uvzp5E",
  "key9": "3KaLGKAV8xXYC3Gxm1ySCB1tPnHpvH15jEpG7qfJxd2wMcSagWqu2GFvbgUimfNqnZve6DKCB3gFHQCNJDqMzWzg",
  "key10": "46ea8ZyHVPWTDTjohfL93c3k5S4mXEmcXgQ64orcxWNN3Z9kJZQRYCr66ETzSjd1rQCFzo5PG1uEDaDjNYyavhtQ",
  "key11": "5VzHJYKtmb21VW8VsG3xmJUNcCxh7Rtd6oXe8ruGDtU4PXDTLQSXwmehHet1p7ejHGnACDCvxHdu1JpjPgpFFzYf",
  "key12": "9TTy7UnAinuY49JtjuTPRiHgcDNyNrsriduA8CbDW9aaJn7g5xozW3SM3zX6pM7Ahu5nTMdfETfRiwoDFGuwgJW",
  "key13": "3Bs1pABvZnJbtpK6jwjGd6HN6UoyXRAnopAEqE7ieFyDTNwN9qw1cjodtc7KM1j7z7UeSw6QDDkQ9JXxU8rXCaQD",
  "key14": "5vfRen2roKwgKpZJp2e1GaNBnfXW5KNHYXHUnLoJJSfQizE63CAMx4w3p5VRJCnwtHW23ctuGA2ufkXGfmjWdyPg",
  "key15": "3vD2wYPbRbJtrrzNtXrmgM3Fr9CaEPjFbxws52vX68sCV98bkDjHmEoC8xXZdHpUNgVRvMhDs4Em52TV9bJTRp77",
  "key16": "34KGphxUzBHckchqGqsQDpB9cFfuvR4xkcmvNdda1LxKdqgGz5FqJsdfBwMfpxQTCAnMjLdTEcnTd9PZ2tA5hAWL",
  "key17": "4vK5P895cQgzxbSAXN1AvJUvgtLKEeAAv57dP7vyxnxryrNaLXh99f5Evn8EE8whSYRn3DDdMyQvz188wt1K344k",
  "key18": "3ce4jhPc2x8PtyMgjozVpi5VPSHYmXUEL8rJ3f27ioBvXGkSrE1Kf5ybbTXyvHYQ7k2ebMGuN5tYkKhSnNRrYYwn",
  "key19": "JDNWom1ctQajkmbLiUywQLeMHG4jKtreCjDRA8Q6sYFXfcLMcgebkDT1X1MWQnjbz8nWxwVZk3FeCaw4HUVPCma",
  "key20": "5sZ4C96npgT3dx6SzFq5uAQegNirsRJ5hhYerUdFmwR1vxKagfY1pmAV8DCEmvZaejmnQ6w4wGAyWZWgpeq8oxke",
  "key21": "sA3Q5Rj9cNucXePHxsuiYyZeJNZeePrCMco5Q3DCQ5MwmQeNmsJo2zoQUMvzviYJvPseCiGbjepXwrpfcUb3H3x",
  "key22": "5pNkSMrxijYZa3752Vwine3XCoYQDDCVu6KMTw8myAcZEVnSCknaDdbDFKGZarFx2dVLcUqCJN3F9EXME4aacjHh",
  "key23": "2XR7WZq9gJAzXXPFwo6T5MYJCXtQV37f6Nn7bfujVadbutuGmhuQQLA1JkX43nBEuDuMKUthA2quPLFYNkUP3E9X",
  "key24": "4gECunh1E9inR7QudjC5KuCkSArw1nt8ffq4LrrC96RcybUqYtKoU77XgKC82cgWpMUqGuWf7nVpUQmQyR1HCXuA",
  "key25": "3pSG44gZKWaDFFkJRULB9MNccJp1133FkP4jbLSDFMaErHKTwwdJ1NubQZeoFHayBMcnqcmRNBrv9HEpNvMxDjCZ",
  "key26": "tiNEEpQk3pAqhbVyxSjepe9VXpq5a7C9FfeHesQsuijRW5PNPskib7tYJm1VEsHyt3yddECqTJjVK4gpQAynCwp",
  "key27": "BpAJGDKbRi5mBWeFNmqyTjUqKwxf7E7ndCRGNspCDfENHpPaL7k2HCUJwBp1533jMWgmX7DHWji4guXCGC9wyJj",
  "key28": "25Z1f65Jwv2sDqhWWKoh9zFadG8gyYNpbNL9GzCDFzWiCvEJb2kdVrceZPTBqMxqAjDR252WNDjBDqvBfhCVJTGq",
  "key29": "33nP1oZEqsW1Mb7gngX1G1oqoozKiRxVSBTvJwvqD1T65wzQpwdZbgk4nh94ySSGR2CFmzoZFZqYqacdjbLv7RKi"
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
