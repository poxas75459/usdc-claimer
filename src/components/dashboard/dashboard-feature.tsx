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
    "37yiGpfjBzkWEQ9JG1Fgvd1rF3cs7AKPLkg1SX3FAKQUEpLHZtdsDzVQUo9f1gM97eRyoL6yMXB9nyQCDdJ8qWNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxmriNEEPNFYU2HuJqao8ETKYqpSQ9M6vxeqUFvS5K5rMWxv531AJrjKK2WFiAV574jju11BMtWbZvvfUUB7cWy",
  "key1": "3NXnmykPEobuwKtSNUNz3qdETF2nG2gUoUHfApJ5zMuPhwra62DzxikuNg6sWvPXZf9ugaH5M28pcA4CsX51vC2C",
  "key2": "5EzFacgW9Eu4Wj66hukhXXnydsvwfL5qjbQKqGF4sTC4awvTNqgkxSjFytTGi2oxFMwYTT1ERmfNJnvuLSxyTDe9",
  "key3": "39nhZdrdXzdT1EEngBveXvLoNMtepxe8sqHLGmAFXbNtq2ZJv3hLGedMVccQ7Rdjzt9yDezDqzqwZS2tsdh6eBuB",
  "key4": "5wxV9hffSo7ug6RFFcccPKfswoVP5ZL1dXkjkJfZtsz7tTKLR3SnhRKaVSUfquGexRTTzPM1LnJuV5dhxDPAr58k",
  "key5": "sezf7E9tpR6iiqogUGBpPDe4wQpQ2udYt64eDBSVabo51CwoqbCXyfaEnkQYvwic4uFdK6jCitjcdh8MbATwuQw",
  "key6": "53dnizYJxMC9oecB3u6uudcAroEdKCaALDLkRx1J7nAWM1mTzeuACe8G8ZB4N81te8vaCvYR7WeYrRRTZSA63s8X",
  "key7": "LhxGspSpEnfzYCm2wL1ZCbyZt9jfwFYWG4kT6TwKzSS29XMFy5adh39wLJDgRAA8SbH8xB1S5wTjUetbBLJuv9E",
  "key8": "3Ce8PB6nAqEWYBbJd1M7AqsWmscWNWQWN5xB8VTcFd5fgNc3gj5euTL4QvTj8oF2zbzYU1qds3tY27VGCH9v8Rcu",
  "key9": "2ZE4zPh4nEEhhhVVqAyF2cbEiWkS6gUC9n5fCzQW4q5exVmG5JAvy1sLiX3sKTCnnKWyiMEgfwa9xpuhFHvn8v5X",
  "key10": "9M48NxWesmmqd8Z1UbxTa1eBg6rf5AtHt3Txhi2iPB9nozbKAb2B43nd8622jm4TKcadGmTvkhADX7K6aGgnY8D",
  "key11": "2ggTkUfzRFLmf7gycUY11KGpvyegjBaJ36Qrrp3DPuGvyJ26CDY8MyjEu9mah3Mi43zYtktSiWuEe5ap97PoSV8s",
  "key12": "5BD93MLEdJ46wDsATRJ4Yr4Pq6c8j4xaU3dtnHTBuPUFUt1hViwgYmnEpj7QmWpv4My7K9nMHt9iWqXWbiQQ7SC9",
  "key13": "FfeBca1hYFTXuPLteNLnE2urZGLTHV55nK4Y2Dbvt83rR9DbGpCWZN1hjudTc4pLagG4HcMXBnB73PHu7hKsLs4",
  "key14": "5xpcRhmfoWZTLR43sKRV3TNG2bRkA6xjKGaf562Rx9yhzXKnV3auA6quU41xFnKqjJ7um1DhGSLJfjUdMfCAj8tM",
  "key15": "5jSMd4vMv6Fj5zi5aVA1qd4BcMEJ9t2RwsueiALjyhCkBRJbyJWfhr2xAahQvhcbED7AXBFebAZ8uzSGtMLaGemC",
  "key16": "2zFdsZNmDN3P9qaMExcosV5ET6R7LZaY98B6ZnPdoWQbhfmWS9NcfTrDZ69sfKfon73a6H1yoJv8tWT7fan5abW9",
  "key17": "4LApvrmnQY9bfjgMRfU4HQufNtf2Lfn3KNDvRG68qxnGZuoNgLQjU9dGwWbefrgSjbUzELLcpWk7eTaeTRyWD3Yi",
  "key18": "4tZxWPxr3V8EB9puQdETHKsF773GUoDrYrjanRg4eFP6MMvoJKA4rw8CMaadpPDTUPJ14ksMkPGqPrWakQFeKqpG",
  "key19": "LqACAMdxXmBrdXsPqETWTGdwBaQcXVs94u9p69teehjUVdXezNjUhgqYHAuK9VxnaTo78GyCB7eaBxnkmpbNDRY",
  "key20": "Z1nAZf2mvjUyRBfToTvf9kDwvcg1MpfwwjVjhJsesSoE545aye9ziaFs9RE7okwhU5UsxpTzWeopKYsopePFBLW",
  "key21": "4jpZ9ML7nkbH4sW14CTuyZrwQLkkskdfCTDfNYGNqLRzCkBXNWwMWTagrgDNhP5vqhPHTuL5UWPZqXJhfPDQfPzA",
  "key22": "2BgsCsVrRNtQhF8cfHWsuNsHgyscqoHncQQsGd2q9aHScR4APGo4iP56tHJy12Qf4L3vuU1JEZ56ErYiteMT6aKf",
  "key23": "21v4Yf1GKmNwCbvUdEFUjezHYT5skgjuyrW2iyLHms6JvNhauL4QMUxpBDTLKrhjWUBjejWd8sdjRdduCnTCJwc7",
  "key24": "4UWRrk2QD4qFoEup3GrZQdyr6cvVXmrBrdHnmc36hTx6W8cANQ29Apo4JFST1NqdDUpkJLTM4ebFP5qVYoycZMeK",
  "key25": "4JVNRErFL2PvKUMPuBiojyEXQUN537GRj2UACsDzkiLaA7tfNu84hxn6PKCJpg7WPjyxKGBwwd2mh5LkVxwbhPdz",
  "key26": "66GW4cAFQPaoRrGPq5JjvUKhdJtqMgCXo9frb4j4nkQhKr4fQ37hGtmrxNmVJTgkkMqzwtVyfTkkPngfFVRrCXEX",
  "key27": "2Ky39qhEGRJRMLzXiL3SKcfLM4q1z8R28imPAQXz5Jax8dbEsFMx6MFdn7J396GK1fBBn42UqtiQzSgWVwSnneis",
  "key28": "KWNPNWzjgATHvDjKtfRyUuHPADQDhosciY51NFfd1MZfwCRxPs7F2qjo1u2X38CrwWaTd4LWQEi9CT4kiuQZykY",
  "key29": "219a8xNGzT7wfsYdXZNrBcb249zN4XDvinEZcu4PpazaZ2PE3ibV1caXf1vztjwyzC8bn3KK6H2ehAC4HPomgbVJ",
  "key30": "5zfxm6BKfqA5ocVN8wFyDJAvmr58LSWQBYQvrgcJUFAu6hPHJZcjr6DfQxcQAf9ZV8cbarRCZLDYx3xtM3Szg1h4",
  "key31": "nTk2ncU4U8dH6Z4PLWWB3qugUEBBUBCj3h7noLZmU276DBZ9sTyFLr78EGRVF6u3YTwq82upM8yPMHBxwjK26Pr",
  "key32": "YXAM494H5WMwD71PDG7ycsz9yYSJ8NySjQxoChW26k5xEU7spKXuRB7v855oj3KmU6NLEFcgrq8hVvVZS7bdKDK",
  "key33": "uTqTrJ4E4u97EkDC8kSgdXJXa9qaMz8rgdHcoNJs5tC4jB9unAfLmqPVXT8SPnaJbj7g1RnooLnCWc7QwbuSBqX",
  "key34": "3P6HgUH1vGSpeo5hRPrjEVKdQhJedijZ77V5ga4zq3GPTwJqAjampY8vswz4e2AVBSgu1zu7PaHSSWcUKKjB6z9s",
  "key35": "weM2v1JEccQTVu6cDPQRkMR285vJL2SBGLxD167i9bohaELyk5VSXjtJG1ibJ2JxLWFSuP6UK8Xam4aeTbfvsk6",
  "key36": "4Cfd1eRJ11qT58XEvSzf8LRimihST3x3eQ1FE7kPQSEXU1fhUzb7uk2iFaecGocR7jsq6B3RtBx2V3EuRb1uR49J",
  "key37": "5GRYujaxzmcdpo992fAw8fFCA5qoFu28ZFTeg8gzw1Y8SQJyq613ex3CkX1jQudA5c9bSzN1KWHkGuXJbfEVhh8g",
  "key38": "8mU1cEYhk8nuJMMx9Tc7L6m4zqYB81a62GCSZuc6RXifDxVRCmBpeq6Drr1oe1SQCSUAhfD3Lgnws9K5Jygd2qC",
  "key39": "2yJRMXddtaXZ6x34HsUy64rt3HHraDNAxofZSJRQCb2QQ7UYYKpj5ajurjF64udYbFsLKnzpD8Nm422th6o2axqX",
  "key40": "2GJNMuyv9JPt421eAnTBjaBREmZW93TPkSND5k9nX3bw9VYBJKBacMmcqyxUveGE9iDZsjMKs6fsn9Uo2VVS2yUM",
  "key41": "4SobxrfxT1UNynddau1TGTMw9QkLsVqnGVAUCPE1rf2CESg6uGqtV1dKJ72jc9yMxpKrC2UL5ZnrZSzLkwuYERBy",
  "key42": "5FtqES7bwYJQNrgXpMEs3p13eZ5Pekah49NuyTzrnruGQNQE2AwFXAmQTeK2t9d8YZuzh381yLvFmdh3TnZ35hrR",
  "key43": "CK7ub1o6vwhBTApJzL135NX2quHHuyrwtmvUv6HEN9Gp4KS3kBcof88fqFuYPsBnnjZxBjVvCNyhXDnfkMMTQWo",
  "key44": "4898ueYmm5sVJMVMhsNz44SWsDVhFyPJ8vtvNnJoxqnSwZmWjFzioLAu4aN9RFLtzXJq88oJ5qpdEJimWft3YiE3",
  "key45": "3xern4AYEQ4w14wcznFFZcqiKhYFRQwbufMUdLGXEv9QqN1MU1nVSgkJ6hbLu57DSYpnspDN4sxWhyP2rFBSMbkv"
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
