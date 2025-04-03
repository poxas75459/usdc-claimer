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
    "4shCjLHJuZJW2VJrSfvqQRKuKMLS4YMT4UKKp8YumPCy279AM82StV3vGW57v4tRJpDoyDcK1qj2ZthBonq7Ee81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQLdTetvePUDvE4APy6uURcL9AHGxmsjUUMMbWQHwzMZ2dPTi7cz77c86sWQUBwR1QwHwQg9Gx413RtqLtAWUz9",
  "key1": "hYcQiYzVnP96rYXfwh6FMSMrPtAuFhMFNouZ2Dc4C58rWxjg9HBPZJ5TmLCDLop8RGJTKhBhQYtxKZEpgP1HHoy",
  "key2": "43wpYibMvAm3LvRdYD6uedomsjsuAQc5NdeiTwZaTDPdSm2Tkt953UCmep6ygQpCjK5LgaSCbLT6h8Ya4tiEFPRP",
  "key3": "2wpftHffSr6SBHVJjUMhBqAXnRVshMyjGx9bEfekKK6UxgbeHzMvCpr2sRfz8pPimvSiTe8jpQDeYuFvzmR93WAd",
  "key4": "21PFtR9G9RnVR7uWDHShMVomrvhNspJYJ1B3Z631E2hT7MqsTLFLHVc3hkXZkotbGGxH8gof4whYygNjfNfFs9Ms",
  "key5": "4qqrRmm6KWGav3DbTMsqb3Zx2M5yHJPeyPGcNAbuQgwM1EAWawmNxrbEn8r2iomo1zAXJG6fVxkQMVQLmEkPSKSu",
  "key6": "a7ZTdVQkoefiTtopCZHCjMSLZWDpqFQnehdfg4UNwzWUhjUEB5VTQoe4G3JzXxqexsJxfweSqxYd2KfCoFd8CR5",
  "key7": "2GgxuuM7yaFiuYcdJTi3jVacqELkMUMiH9kTzrSg75tBUDxRqiRGL8dEpjz9rQCF4R1dsE96VW4yY4HWyb27CCaY",
  "key8": "3prJXs9doLZDrgjXo6aHwdoFpQ7ixNviMYLscEKhdPLcB475XcZsdGEuTrik88xnZK9st7Pp515QewYVyCup8qn3",
  "key9": "4bM37WyQdQu63G3uvDDtcNKev3CZkHixCotsSP9XCKFq5PkgzHX5tjHnDMKopXvTCDxYALccs6v8YKw2ttAfk7KX",
  "key10": "2qvWqhvRyaSQoADEHCYbMqHhU5Fu9MTDLinBhQnJeFjWe39TP314vZmEYTkzXGQxrPEPWEX1ZAfQuozjBBEHYKEE",
  "key11": "4ypVufFzUnx2ip3EKRopNh6JN8uPaMssdEkYfn2ffiHfiSWkzkDAQWdnYDZSDFWFXVHS9ZxdVY7SczLMzit3UheK",
  "key12": "4NThM9yQ24FvpmXXimrFa7TDjcGMbj7cFdaS1PetVZowDgNdNpLkj57TGKvyQUAv3uVG4dsE5xiaysTyHNC2ngv8",
  "key13": "CNSAFiD83VFDkyxNXV1rDNAHsVjRm55nzhAWufaxt84gNcyeyKn8BovM77pjfnbzRMgrUWp99BTM78qRfMTFqej",
  "key14": "49eicb9afrQLBWoLtYMeaSGEJPAs3N8G9YF5dnodrNeyvevpoqQQyGs5cNduSL3UDne4uMJhfyUxzr65F72kdoBe",
  "key15": "31gpF2ktV9UJ5niF7tpa6FSwmT5D614cBEyD7UDzMDLxSamZeR9DC1XJc7d82FYnP9Q4u6LcURhF2d3D1USH8onG",
  "key16": "54R84BrdWvrL7xYAoygh4Jv6rbZD37MKUe9gqRbTeFYjR9mVY6kf652KCorwdcsmPeP8XczEyRfkGZZuSRwQLyPa",
  "key17": "2NnVFofhCqcxrNytzBnyLHBDtjRUKaoXs9BzDw8ZTDfj29yJx4D7aK2nmxKfgkE1T4GkRZgUsatxyghyA7tGE745",
  "key18": "2qs8Q99a6VumHQX6cLXACC1rMPtXAz9uRmZYRavH8NG3e3qnrbE3pFuD5iqKQbi6Vfxo22Ly3oeLriStGkoXpLx9",
  "key19": "2YwdLuqvenPSUp6ftrjM6a3y8nFmUUFYcdk9D78GbJz7HBcwnT8uU1K9muGzAebJzxDu7mzEQzjuxFZWzr5nussY",
  "key20": "5qjD5Qbv3mfDrUyF15Fn8VtA6AFxK6eLhsmXM8JTaZ5pXkscXoTxqewGRXwtKCt942d42RCBjqUt5A3GpSme69UM",
  "key21": "3eknUbG5gvQW9NagUHSdUvz9da2VLQkz5JPQEtkAUr7yxEobFW7SyoGL9bQcAEs9EL92LWNKbiQemw4LJ9hNqANm",
  "key22": "2C5yuYjhiavg4v9B5BMYJfHy5A5kfVMLVFWbgxSaE4zXJFDEHDmQhSJzGhVmADBGG7wveVyE8uVjkNjrZStSazLQ",
  "key23": "3TD4YW1XcuVEkdBrs9kgpmAhdU5oG2u9gExKKsfmV7d363FxFJC24Sgadq8djU2z9NSiY8nnKd6xQp8Kun1MA7o3",
  "key24": "3VJHic4LpgU94AZSjZXjheR6yfzoQrof7fvkA62SqLS4vzVPezDi9SJNvqYL7k6zDpeJr8srDwvetoKViMDHhMf4",
  "key25": "2pfqFz515SzEy9YR9h2wXNApmhecUzeFLyW8rERwZAqRjw6C49XFapUxoJk6ima9D15ENv1qV9SUZT4iDKFEg8R8",
  "key26": "X6fJHRPMfh2g2z5WHsUaxEzBRwfDfNAUiUkB3bCXxnHDWLzvHCGqes1sfiCtm4M96SkS3oJYrqW1hmBmK1rowaZ",
  "key27": "4oe75j8ErvUo1zHUrXhVzKXLUdvz2LRrbLANz3b94AyuoKnuWdUXTPaLi7uveWYrLi9o1FxRoaDgpSoiierf4oNv",
  "key28": "4iTEfZefB94mD1TR2SbmTCueQjwVj4xMrLni4kwKMQpAa8atgvpjMF2wRv7j6QmPaRhFmh53eY6a7Uoqh9n8pEo8",
  "key29": "5Q53z6g3tTsQBSXtC5cmMnBGDFbhrGyqij5yFaR6o1DponQArpxgG4XCFU8vR2VpAuqEyzecGv3AEWtSgG6h9Mkj",
  "key30": "5FisE14pryP1iksezkqJwwuh9JC1TqzzDJ3HTQkwub5y5TPNgLxvFgkBdDVWVktAbTL5SqSoc5fKt4MjkKfU99dY",
  "key31": "3U7JSMmGTWXucu9pVixwtV6ze4sqf2AscN8qYKyzft5dCk4Xf74gd8ABRRBq6bJPpD4LnwxhW5TZDV28PcRmJqfy",
  "key32": "5Brqn9qwxjEfgLpWLuL1FEFtfYNW9qXKqt184TkYLQiYDMwR9sGjMJ4cH1fQuCno4EKpg6c4mk6JWwTMRGg2Sxqa",
  "key33": "3TXvNKiYs7THMF6HUjsV17g6paQmZtdgYawa2RhCHLDzsi32zYhkfeHnDhk4hpKSqtNYLzyyNsPUmJaBwnrRFKiU",
  "key34": "5PEUTAbowjkxbjohEUWJogj7o5ziSX5at7jTLH8by2Xyb5JHKKJtQ1kCsRnXdqbWVWntf419SykZokofAtTRRmPH",
  "key35": "2wPeRWoSvsWtGaENUxiZMLCdSnpRinWRpkWeQGHFE8uBPZH62mYpJ6AAhie28aN1Ni8BrapBjDuVtpddLEpvxmP6",
  "key36": "cPXaezzbcrj9qYvQHSBii3F4YGwjbBeN8rvgJEqTEKNVKWWD1MUbfXz3rAiHjJaJ3Bawt2P7m26FLtgSqN7PWSn",
  "key37": "5fVt3QYF7rdBrpNfshVzBRNJEWZ8VZUMNNPuKwmDn9DFDVVykD4RWfiEuCb3Va6pR8WQ3zA2TApCaJ2rjDg34HDh",
  "key38": "2FUGbuEPpTDoWxLKsVuEPLWGbU2X94GGR5P1DdF3xJ5uTmjRA556Kz7mDwWorDwLwCLgEqALEct1knYh7PmAJvhQ",
  "key39": "LNza5JmpRhrz6UWvmhSNjKdomQBuRS68UjZwRF7k6pZWcgeSbmpgLzdojRQWjn5gQoNy54T88JwXvB325eYJmCc",
  "key40": "3H9owEudiJJ473LHPdf41iybdkQ83yVgUw3PBQ4Kwtv2kA5KQGukqVY7jcCNFvAN4hU2Bhwj88tyoFDRJ9657wdf",
  "key41": "Mv52ZroZeYNapiTzES5V3ggDhUaDzt8rZWsor72zetQdk9MdSKawEouLqqK9HmumRtCpVkZ9twnddrNkTFbR9dn",
  "key42": "2Td4YpfHtXh1aZZ58csFdoHbaCLEqRaBiHHaesxKvycTpjdXpTEtKsqDCzxKccAfjLbRVAqTtazhDUzEQAVh2tnQ",
  "key43": "MKS9EkteekRWW8G7RNECHFwiBCeemvh9ZSRdGsyKMc8Gez4mxcc8wSwAJnUhJtMAAQu4bVWrLWqHe2PrjogfbvU",
  "key44": "VsmTg5iSBr7dKWcigcG68pvMRD2u4XFxQEPQh9WsuxN9Lm6croQiPyPfbPQ25e1uCHErHBF8gCwaLt5dJ3Lb4uZ"
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
