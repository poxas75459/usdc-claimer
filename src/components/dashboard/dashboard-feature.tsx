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
    "2DDKxnZGbmCn2xuUqbsNaqFhGgkYVZT8uMe56bZmDT4G2eDrzpV7F5jX6D8Huok6WiqnRMFj8JxZ5uv5pbxfNJJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwPNNqoAVZemkqim2BuYUiK8dWsbErFxSmyvpT2z88hn5xrD335o4RNjrV1gtJqmgC8UBk5oWyCnAYXwt1oo789",
  "key1": "c4VDRU13TrYLxYtMLRkgmvd8yXA5xcgSXJRak3bHS8p5qqVbEFh3Kq1YfaXTDjVSVovaEjvGdhju1wtWy2DcYDb",
  "key2": "3fpbwQ8os5PMddJ34MwbJBs21MxSqMXBbGjsqNWoeZrtDDGUSz3tTVaMab1kpbjh9DBj6BTLSpMLmXYnotdXxpJ",
  "key3": "g7KybwBKHcargJfFQTrST1Jp36AyAPdkM8E58xingtMUUAaCWk1XqZiE5vdYNML1AH8tdN861Q6UWgegWSfpQQW",
  "key4": "66XfPgzqKwvCkroQcsfZVPQ5VSG3h7U7y1VKbxf7ui4pvrbifzGztaFxTRFFM11qnyv2CEJjLyRMVu8yK8XdACGV",
  "key5": "2esnW7bXYnjuQheRJoDwHVaFyKfsmnvZP1UBdAhJTULA3GaiEaBj1griqA6pWvoAVYKuEqwJN3zH2Qcodf4ohcU5",
  "key6": "oQyYgXFdsSiCPv7DCrxjLSdFeM3T5wjT9Cc2Ab7NGW8sV9H1LAYyvuk4wg1Bx4Puw4HumLoLyJN3iGygWrCf4X1",
  "key7": "CC3Q9gGp63fGwfpUPaWZ16J6nX11fNWsiYp4AssmptJcz4cGTsthx2R27XFPxQEhGfr84U5tW97XyLZEQukBGon",
  "key8": "3aLDbC4Qr647wt12F7McL4joToQvwnX3MQjB4k53ea5YsaLEBCS4W4j7LYtr8qmid2VqhWhPPtEzQfWi3soiSDoH",
  "key9": "seKoge8T1P7BxkSHeWxPsvKEADupveJstqmYXDGfh1XGNrSW6DJJRS9zVMDde5mvkn9nq4Pp6Ecewdwdtk3ctmm",
  "key10": "4EcEH56tXmD8L9pRD2eneYpopB7zLn1PjzgUafWYTPyDWPWGp2FG1tk41Lg3bBJwbmfgRdAPiDh5vzXEmYcaVt1w",
  "key11": "2JDbHjPtuphc3nEwz8WPqoJnNQWXmZhE1kg6ayUcnbi6N3rd7uY4Gs2rtLtCrXcXqhgiVrthfwPXzY36jmWZbDCF",
  "key12": "4HMjCgyXnUWiodhAawTad7JQDykxS76XcKTnuzXnCGSEs3DBE2sf1DgPafr8N2f119c46LFAUNUQ1yQQU7mTn7o5",
  "key13": "2R4BprMZ64PvdmJ6pnpqUgvjDnDuK9dYnv1Q5HdK4EeeA2Bp93CJ7z3xuJr3Wev9shaoKUDRBY9mSyVsdc3wrc5U",
  "key14": "2L5Jx4NYkQrWuQvZmU2VW18T2dtyWtwXG36Qkn3SUtgJdceaGjAghkTs9EMoE8NGfnyXnD3r2RbW8vjhesAjxASV",
  "key15": "4Av2ZWvMakKkpCxW3iDaSswaGAgFRuHA2bVg3NtAoKz8Vpit4ZpN8mZXNsKHinDZaThPKg5tumuLuD2aHUbAZmQR",
  "key16": "3CcNjdHYwvtyWY9DsSKaE2jsrj19swqE8TpjV8HtJLAUXUJzJdQRJjpfv1KWvdevip3dspefhJc8GpvnQtdeHVXz",
  "key17": "5vDwdJz2E2GbWdAcZdJtQa6dmxY4TSvyhZaijTRZUjEL8nyagsLp9bUhpfJhMEpnPdZJRHH9hvMha8H1S15odREn",
  "key18": "4GScVRUtu7HagFWzFmdRDNRX5vTm1uG3UuLurezBiHbygUZjmBW5DRDZ19s3LiabiT3CxHtXvHdVqhjDUqRYjQvm",
  "key19": "4pz8tRai2MYGmQx8rpXhrV2wx8FUJGwNbLqF868CSXK7Cyb2XctqCVJYPjNt1hpEr7c7VoSXutibKdngiPp5n2m",
  "key20": "4Kh1Uz18exLMjqdjw39dGcryJap8nWA6cFCAg4wEeyQa6dWkCkqhiaYUyTRgQNWrd3ZyjqQG9dDS2K1pXGe5m4EP",
  "key21": "2aWiy87Ca9BS5WS2gFRrp5m3M5yXbzA4CRR5oCEh76y3vPo2PexR8WjBiHy3aR9hDnspr4GGQQ3AXdtFm3TAc4QR",
  "key22": "2x9vTPcjxUcYHyFGt5q2f8J5K9YAmbida66rj1APXesWhyV6juifxhtT7ffdd9yvkgFPLcaQNUKUdaLfHgCbYAq7",
  "key23": "4ScNjLEDM69p4WQi6GDpb15UgRU44FEZQsjZNni5BT8UwG2uFVaoDY3QauzVRvuRtGGp2GjAd6ovqCBHmxn5uLpF",
  "key24": "2UoR89a3PxgrhyYefxkyajwgCDCCYHzuLEHit2Y1WvnZ9zvtpsSFyCZLHyykTukNienW2SeRXBjUXfJyFJoggBh4",
  "key25": "39ngAwDucbPVyNtwVERShJqc7gSmab7SjvxRaLTCCJuDMVbKrfR9jtnF9p2xgUHUJgw5tiMpWPfdw9aSRPnSGT12",
  "key26": "2j4DnNkD3whdkGMmeCYZ3uNw4r4kEm6hUF9C5LyfKfTDSS1ikqMnwZpeda4NbFbeyt7femfbbLozQwrm2imgCyng",
  "key27": "2cDbYJKzdMip2KWsRTLdnqXcrUBTpmNRJfCDsxso4V1D6XzJoAibaSEJxKDCToW8DCB3EiLPxNqixJTRaZ6krtBs",
  "key28": "3JThBwFAxv7ZitCNtvhTFjpvK5fK9RTTdWX2P6RJMgspaZxyPtWdPZwCAbyxjZpMbyQV1PHC2MqnmczmjQp5Sp6U",
  "key29": "3eFFyKabYZQBCEfTKLHu5AG992dTB4ZRrLGaEYM92wsFpMZ7WEF6AeLr5PNxSEksrfkDbQsDaPVLR3u5eNA8vBQf",
  "key30": "4U32NbcPCqQzeibra4sLRAi4PpE6hccP5BeLUJwnJX5h6eKJ7MuSoPhwqeGz9tccLd6j1WrhLZFKrW9oj9EyYbhq",
  "key31": "3WrWz4MXWKnUT8jd4ukuHV1rFKrHN29V5EiEPa55AJ5DEBEyZWoDW5ZPkD4ta7QW6cYDhCD9fKF9wha2TujJY3qo",
  "key32": "wf9njwpfQqXUbUHxLtB9Sb7tgo5HYeBHfa5BokQMw8DSv3MukMnqfC3La5SqNhmVFUrvjL9uyXLU3Sp7ZTAdc2F",
  "key33": "2frvUxQomULXZ1eRVup8Qhg2HqfwKUu2CCSEpMFabZQRzLpM18tjx12uWEZYomReHRc7TgemRo9EmTPEyAovNdVc",
  "key34": "5HaQ9GrSbMUuuFCuJSwgYDnscseFqQpBmFLnEYDRKay7JGGvmevn2ncSkTSkTug6Ad9ggCfRKU9UAhHc1kQ88pXK",
  "key35": "3dK4LXwKN66mpYUG2TRoVn2PeEmUEeEBkJ52LjjT8nQu78puZBHzbU94jXtWqiqxrDnmzEzZTrcWZ8bRnoXKHCzq",
  "key36": "3M8NQhxkG97mm2C6pxQq4H8DS4HRuxGcQsmxdY1PJDYSRh5ed632o7sUwQhYiM5HvP4dcTUeUf19tAsJNNvHHxg3",
  "key37": "2rXDN1ZqjToDuDLTUNSuHnLHE7BWMFm1PaDZtQqYWdLHpRn3ECDEXNgKwfwU1fUXaGZTohhzwtG6BUJ6Ld3hurZr",
  "key38": "rQj9xGeN2TpufzKsZzjcW4XZpQcJw9Z1pAW7UbZTcP5SQffDxYBT3vuv2QzHabopR3VUqCbJYyRKRopATTAYzHY",
  "key39": "7t3wY8jr6docvAsDvKMKTkh2Em2cVbwHu9PW15aoKYfCh9nmep8R3MmHZ8LqkQYwQNApCKpJQJuaVr6PfxHCA1r",
  "key40": "4xJyTUsKZTRcqx3xsuCaknsLY88wkHXM2gbmEzXzX2Bor7DJvWJzVqruXo35hbkHSfbHadbmPHaDEvyi495a6rC4",
  "key41": "2tX7Y5imJA99e2cvx5XTMvhyACjCZLDH6WRTdQueHCLUPBEet4Udv7g3YsussR1mmTu48cj6GbWoVCWLQzVbhxf7",
  "key42": "29sQPKXFhuw7JRyunGbCowPt18Y9FE2iiXyfqK2Q9mrzFLHLUxzfLKFz6z1N4WRFiaiWN78ig19iHBTeTQpqxwZ5",
  "key43": "2EHfffKfLmwNgFapeWsJLjoThdPwzETNqsvrbpgmnCNhgW1BKoWq3CNZgLAySznPCLc5QTHoHFVVe1AmXcPAW1S9"
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
