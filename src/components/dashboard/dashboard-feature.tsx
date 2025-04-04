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
    "yh2MmeH9wqGyavj6qFXQ4myxnBKyAGf3rhkL6B9zHUVbW7st89uZmmUyMSgwwqeBhMHedYaEA9YtPoZdR1McXek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQG9sE5dKMUBx2amUf3rxJ5FCUcC35ZtDHyT9g87bduYm7pANc6RTrUCSSPAx19PufPJwTeqFAUSDvikkHw8Pjy",
  "key1": "39CtAuquXBTAy1D8G1pShSGw9TvG4rwd427xL1khBNMGA97ddgHwVDfxYYC9DnuqAZ8jk8FnaAsteqMPCm2sdFrx",
  "key2": "24SxNgHRnM8kkq1PC37TMoJBDckZ9AD9yGresdsS1qALpDT7mh4rdTLsd9U1rf8fWeQNBw2NFbqVv4GPApKEqf5j",
  "key3": "64hBboYmHHsyH8sWvuMNWb8jPwDG1ATS43EgiX5smy4BRbRcxD49gzYv4aPpCKPc27162uQPU3c2GBbKvz8SRQiP",
  "key4": "3qLkDWgeoYoeqUT5CqQg11VMhJTFzsgPfEJVeHfMrPcq7zUPLKtNd2F3DNQAGSkiy3ZTT3o3LRcGbr9Jp8aQ2uia",
  "key5": "hQnAMyt3YEyvXYjxeuX2PVfJgdVRNrpsYScGXnTEqV7Me8S44sHuCT27DZ9kmcEUgHaRrcJYdLHW4GPHedFZxeq",
  "key6": "5sYVNCbavJeLc4VgHQxxZCd6X5VdGPuNnnzJNzA48qDLb1GK8hG7K9tb7hLeoBhinUH695uDoAbHwphTRHR6usY7",
  "key7": "4ngW2tDvxm1mywKiF5somSsec9RbJxWLQ5mJQqmW5iZpLPg2WhyyamxF5tviFs2AhEN4WMyosc5ytTfBDqZNXXAh",
  "key8": "5zNghtZmifyfcQsEk8zAL5wb4cXnHMZNJWcnQ5oYBf5dnThrc5LkewSiCV2w7QRBzQAP7RYmRyTBJmRSbe7VSiEf",
  "key9": "3Z2xp8riyDQ8waKXUwidRpqRDyxsBPKz28jC2HUMvR1EH7gtfjqMCDo2wEuusPKpKa1CMXnxiX3iP4VBpLEexKMp",
  "key10": "vGrEsdtA6vhproceaismJHn8UneY5YL23r89YNetjC5B5DDv82rVBZ1DEH7EyAg22kRZU2Xda4B4FR9arx6edo7",
  "key11": "3wwsMSYqxpGKNK66t4XTnLGmUEth2j3SN8EozuCHfX6B2ZX5PsSz66oTHRCGSdQK4xFy2NDzN7VnDqU33NmnVMap",
  "key12": "37iDE2P8eruod6uZzJHoXk22joYFD76TPosWboDYthZDeFmi37RCRzQ2GARiRhGH1gu8qnqqKLG2yxB8HGq33JEC",
  "key13": "41ZnVX8GStVVC2u4pvarDSpGT6ukef5M7g4DzyW86dbeAMkvFcXC9p4A62VzuBGbyapvDY6J6FiGc1qHdJAXPFuk",
  "key14": "4GK7iQ2p5ziPJMEusb3dDy8mxP3pfKZoGZtf7nFTZopDXnuRiDENDdjeAHXDjeKyQ8kQuVYkEkv1Wg36dxQuYb1y",
  "key15": "3EtEgBB5M3pFLLEfYW6Fko2gW9mY1JCHfzp1WvMVUidRYwU7BjptbgY4oc9gU8nFgaVmyVupg68DaPkvZJM26eNo",
  "key16": "4u47U5ozofduEbnjJEgiPiBVnAwdorH6Ji41G2fUZujEmqv8Ktj6RFEurqom3hwp4LrMiteekM1bhvQHoyjtV3Mf",
  "key17": "4ULwxTUwRHhEoeS4aBZZGcpwf5oQPeH1mascUumNKb3274JWiFe3AKYxEt3Mgcyr6vfy7AU8EBMXT1ZzAdvhWZJc",
  "key18": "5Qk1tCSUQkE1nnACVF7zEfxZEvYfdm9u2AthtAjqWDxXMag4RhRYP2CTf31fDjM7VNgciFiesfe1WYXFrMWUcGF3",
  "key19": "5TtwL3ypQMp2Vg5QxToUkkumFFJ27pktj4VSZSwFMcPYzjHPSgPLiuazzr23hpbk6cryLzw1JxddYdQ8osjEiaRZ",
  "key20": "5uYMLaK8ww4oWiJ5j5RD2j5h5V6Fot2mjCWhi9du5nnNEMPLUw3KMkXU35TgYR2sPbntHz4CawMRuFfiap8WeJhh",
  "key21": "4qwsob3ta6NHqiyZKngew63sDWWgjcPQARw1DdQGwNdBjABFKBoWT8zGwHYeNtigL5bZ2XVRxzuhFx1XobiXUKfY",
  "key22": "4MFgJTJHNJwchSHHUiPnMhFKJMF55RHQEJXwWfT5VsaF2WmX8n7biJGYo54puuu5sDeTSLQsQeBXHqUKxZ8h1FWu",
  "key23": "4YJtLUjXv9jZpTTCvES4Gdmgd54jdxTtVvgczNZQcNkFfavdrZxGWKYvweuJYKH3M2zAXHsQNVr9zPMMxKhVqTSd",
  "key24": "3BN26c5FvKo9tonCNbDnbQW646yMXdM7e4FrphPyFqvuBRfEnEvWuUW6tj7zBEtWKtHLb5HkKxDwpBepjKonfcBR",
  "key25": "3Qq76SxB3qTyti4E2uHoUbKwM3PRGGu6eoEdLDqjmxfQfaxJuUbRRon9hwiig5G4cpvhwqdiECwejtuiV8bZabLi",
  "key26": "4MStCfwokxnqr2huJjBGPE9R43Ba7kxYj86ny9RbXg1TLXBNDGFGsFzXHp6QbNmZtvGoU3553MPGnSxmXyyugEKD",
  "key27": "53A6RRHB8LpmN4Wg8goJBn7tEAAaVC38PDHr2eeTpEochCwugcf5vkUS3A8t6vvpEFvc5zT6S874QLBeitsUf85d",
  "key28": "24wB5dJzPr5oL1PuqcG5WSEHKFdkjM5RMsXxeSdbwpSm5kCqYSsGrBStNTzPZHAyE95frHT9mUmbCaK256vnPPtQ",
  "key29": "5BE9NhqPmtvnxhuPg8NMDAja9cvpErC3Sy8rfZnuiUZKcYkWTwqExoBrDf2rqzFoVQu9WQUQAJ88jNdxGTF3myWQ",
  "key30": "4WgDdHMb5ZVYwhqhrAk4uSyEGECeXgrYTE62z3as61ta9Bj4it5K1XYogWzXwTVR2QtsZMqatnpzL7Gm7gsN39bE",
  "key31": "27eZMDsbj9dbrm8qpiu9CfGSDzN9XWC5DKcKYwo7DJysMX6D5egZeJeWXquJzuodKK11nsvzffabWd2hU11i9TXa",
  "key32": "HUSocBqyvExdagtqcoUQY9hfgYEwHBpqnadz4n7A5qXNXt1JpxCVaeaT4se3VUqWRGoULqEsRbBPQdbfqGNw9HW",
  "key33": "4qjJvV8FqGoaZhNtbodkLRhvKaEed8gtSMxegPdr8wxdWqTB6Xy1EJoHWwsRqywUxcxGZHw1ydtaAJWBvZX5itFV",
  "key34": "L1Ubu93oAUPgwGerXVZoNyEd4sysmffMTD5Us3wbcNLnTuJfaHi3tSaCnrBDVwLgCejq1xwzAop61YUsRgborBb",
  "key35": "4P6UhHi5pcjCewFfPLFjrmv3fth5t7DN1H3UTVwJgFv2FSTxuxCHuQp2XqF8wGjfnNWKcgzWa4pkkLNrjCUyr3KJ",
  "key36": "w6Ue3Kcb6HxMyPmVsQaHvFBare9kdqfhaZmij3ZhGFhvpQBQqV7aoXceZGPbQsJH3diffojmXzZp6jYSgKnibZC",
  "key37": "3Kic51qvbv2hPVDwk2wR1eDqhhYdEbXNDgAgxkX8RME7hM2Fu6XowJ2L8UjqnK954yCnB8yVAWKizYbKdAmT97hj",
  "key38": "3G7n7LS9gMhT4haRYoAVYRtWY8Ey9BfoXZ5wJZ8ncs3uvA8eQPNjvbjSBvrqMFMxdnxXz4ekJh8qwtGWv6yAgk7v",
  "key39": "2NE6HmsmA75hTSkZvYF11SbPyRb2J2WwaM52rQ5WBn1rH2FLezouaFkwXSbr8fo7CA94aJHRNMt6YXor318ZALQq",
  "key40": "5KfpqUjfV7FTgpcuDW9sni7ceM5FqnNgfatEz2c4fvQDHz6Q25qtTB4Zp6W1oYAGASCmxyxi2TeeT4W6ka4X9d5P",
  "key41": "H9oAhxwVzbZ1ZYEQ4KUZaQ6BhnGUzWJ9odt5mTCmG4Fa3eG5f5Lys8GAwhM8W9di2oTMwdpyFa14RPiserzuSAb",
  "key42": "2LYLYPDuvpwWqfdq1UGHU6jfUYwJvUDaoE2qv9TagbHU4aAoGdqRW9JRMioY89QfFRCQmc6CA5HtFd2AZp7jANGL",
  "key43": "2hesrDkVGJb7wxYPcPNZ4m5LSTk6DhfTpCmRTW4PANGjVHJvyobHCEZhrttWSKTwJvq3TCcMUv2xL9aMB7BMemd4",
  "key44": "4Ft1ubF5R4mfabM5Eza5v6QUMkPFGFGKYoekBDzVxQsWeP7PckUbtLrMpDUJ3wvn6ki7rrbqrcARczLZZQXvfp7V"
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
