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
    "3mJLyZCqQNePuw2KEVppCKGwcpSHU8BqDc5Qoo33uDTVm2TYebS5r8vj41C2C52ecAW5RvyT4idsAwoNWkNk6k9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVvHARxbGbUfjboGcUk1uBUgS951VVB9KySrNs5pAqao5FSKVQ2dFrTVQnMHCCPTNEDP6AretCh3KdJSNTdcqXG",
  "key1": "3T6Q1KFvhsvQFfQXqiRT6LuGXxEXBGnu6mWbxLRneTLvkHnnNQskHJKULQMLx4xE2GeSCsYhbpQhmxpNnWryf7Hr",
  "key2": "4M87UNFcRTuG9otgWfZ87jHrz3GK3NNFHh5GMTG3VtY4SxspEaZ625x8DVkAFooFRZr18YVLcY26VpWD7EXdAiP6",
  "key3": "3sEVMQQ1LD7xx4GXF7SorvhiHdUe3vuCGEe56DhBN6WmfWDuKTtczv94wpuGXfmsujvrjSC1go8W7AKhQ92uZ9TC",
  "key4": "47waMeBWZaT2tb4akzrov8aY1t82aFZhoKnkMjYroBmbKBx7fPdmrVo5tnw2eJZFphFw5hAX78i86uFp5Dzf4hXH",
  "key5": "2sdudsd77ujgdXcAGEXe6aHeFux48LDXYuGn1ieE4ZAQXTm1fMgcbd5p1HZPUxfqZNyhsWCDGLg4H2NJ979ZveCw",
  "key6": "4iKSu1MH76VfSVjvsXe8S1Nv6WDePS7Y3G2D3dDKRZevphseDchebn3oEimcyb4knrN1e8YB1hc8ULQHs8jL71kg",
  "key7": "4hxiRCzmJx7YztmdLYu5qFiujzJmV63bYrw2DRSCubuJdaMpgDe6HnmMeGNwTjhYxgMc7fEsHEMRqAe6DMbGMRaV",
  "key8": "3pDk6iYfQqLdFaLkMY9iTqBuV1gB1G3G925kLqFTGcWYvw2oYvPvxcvCV8TDD9NAnywmuocSPFpDxszxSyGgaPzq",
  "key9": "2hHUgTncrMZbiEyKUN7FSp1Zt1SZyRbdr4eynBQ8hRhDBr8pXpSKjC9A6auVx8rBy7zrFi5Ke1hcVQGKgV4YW9KE",
  "key10": "2nddu9Wn6hxRa2XgmPus8qYL2939r6pJhLbrRdhJu7fLssVq7KitXvtvTghVz6wm2jT5aJpDmden5AB2rh4PdB3",
  "key11": "4QTupNozhigeSuWXvEbBEvEssabDNRTtUzq4rBPzmgpRTwvDTS13P7kM1b7e3SRaFj3XMbB7ZTrBaCoZsCqugXLb",
  "key12": "2UF4MyiUhiowAqaHaprUTe6byKYf28E78J5GF8Nvoez175CmzvBsVp4Lo8Z8V8WqB2QzHwUfGMqwCKK5kk1V7wb4",
  "key13": "QySMQyJec5yZuZRXQKjku14wuziprJ6b5ALndfrFjtiGZCzPpn1xLt14VEXSRRAQxgGdYo5Ep5qNTAig1ucwvqW",
  "key14": "2fBVQ163NvCmDUJL28ut4X2MfV4Pe17uEgF6tX4ry4jNhfQf3Uwzxm64APML5TwrknU215S2aNu9tayBDKNqq4RP",
  "key15": "3DFscsg8G4AoHiVeUbB2ue7qbwnXdtLjABgRd1gPJogFxYZ1KefKsxihugp2EaNURbcqvM8mBn8Z6LKh2ctVVWwp",
  "key16": "3k1PNh9mSDB8eV4smmr5PsmHd7oBMqmTWv7NCTFb9MSKi97kXrmiT2tS4g9aBYB44aksceMBq69mwEzhjeLVMmw3",
  "key17": "5B9R6ectKzZPUYd9nS9DhgnnE5rWUpGESgW6G8NFJ7kBAVsLCrxoRyhASgs79aMUTySK4VzAZ8c42aQ8Uty6mVQ1",
  "key18": "2v6YhZa9M2vw1ZTheSaa7Q5w9AiyvdTKhgE6AMRemZLYcTmPvqGRAug2CJzUZo73eo1dd6LzMMwfGMtYJKmm6H74",
  "key19": "pXTas34MSRB1LbsLw2xtoGPpy72y6rkgSVXQmAiLpTVhzUtD4XDBtzqioRGLvRR3XSJU45nhTjVz5FUv44NGbre",
  "key20": "5sN6ht8vs3TxCt29ucKwZxHS6bNDxMEHn19LuhqvsCeyqoWVbTBdLiiPQXL4hzFe76WNnfaS2VKXj6FoauwsQkdv",
  "key21": "5mi7FCMboGEaf35rvaBzVFkXrbdZpLixtkvRPkpYcsKCtMhBHhhDcbssdAds3e67XXfJAKmP7sAK237LbbHuGQaB",
  "key22": "5FgBtzVaMZ5bS2ub3H5cCA8ycwrr36uYMTuuXzVxRtDZESRMBWk7X43whxTN7VF1P21o2KuF8Q1Y5HDSU838Qf1C",
  "key23": "5N91oHwYMttvJWfoT5Eoq5Q7Qy9j7VeSw9fWQfjXfdVUK6TLf8KfC73JmBLiuYsGonHiTet9xscNE2LGGei6rdbD",
  "key24": "5ifLH4amuAoeyGJr8YGiuWsAqnfgthUGQuAMCeaGgvTNKbxUHsSQ6WSibDuvFFrY2RVRNw6NvUgacspZpWGdr4Xs",
  "key25": "38Vuw4UyYVLYfPgGgSmz1jrDUUR5K3xJLMU9dMwcR4NxVHYdzT5j3Mid2YRf6sdLqDzy8m7igkMLmvXySUdbruWG",
  "key26": "5XV4MK4r8LUP4ufwNLD3ZKbp42HTHoPCter1AMJBhWy9jdJPdcyJZZthY8XDNbZb3NrM9iKNEnAvahCcm9Rz6dZ6",
  "key27": "4J4f64dbU3esd5N4gJmaF5CeP8AfbMsiAe9FYBJpHaMzmyoxNPzrWyX6KsPSp3b8utHDjLDutAT5Z1iqqhRxxKZp",
  "key28": "4MpCgHtPF6iff9PS6bEPxQ87y1aD5UMByEiFvzXJx7R86kY6K8QXofnEZaaCKzanT6bZYaGwBEiy8euWtdbZ7fz7",
  "key29": "614eXMFfQXpTuD9VDprm8XNs9pEwg9cmyEtRx68keb4HGezdm4nUqRVUp2W4WFJceoqMik9C6shrUSv38bk7nV7i",
  "key30": "4BYtANEXZgFdLgBRVVQhtBZaskQi7CzkWKGhGipT8bpmZUhvpZTuT7iiSTjA1RnJJBmGd1U1CakXeyPPQuu4jbKD",
  "key31": "4vRQiawC33k1SAqaNZ35rNaXacNcKb1GxhbZvojTDtAei5m3hfMVeTHKyrFB56NsKyvY6rcbGytyW7EAkJK2BTvm",
  "key32": "PVtxXMtAZKogCH8nHUMdoGVMvS1Ra9TeFDmxsGwr9YNBPbL3rip9xdtjeE67Ro2SGvfAHMN7QgKnrz9XnpXMfmE",
  "key33": "2ZCFtAdkLbRRQoebrTRoqUSyTx2WSWbj9wCkSKm5ddjkdVhr2Met9R9gJCvthSpSbzGMWsBS37MbintW1JFHGTP3",
  "key34": "hVzXD8x2JaXjp1TJhq18YZ7D3S8pWaosQ1VFQaFnTjEfrqRMgXXEtFVMCGhNVhatfLnJhSnnkcoJqCuRvh6T6sA",
  "key35": "2iPAhFY7qdxgadQwD4DjLYChdgyZ8iNuTnk8JVC46Pugvju2hvb4sUtFWARtc1ptVk8vVM2UsJ526UGxNgrbdXMG",
  "key36": "ryZLpaU2brLfWzKr2WsNRqLiqD7ndFsJiwsbdZZ5C1eq8ZU1suXCQ9BjBDHrpwEwxAfRuETQkXKFEp3wwpPmLsa",
  "key37": "4en85DdbVCkJJEcu3gpa645dzqUZ4cqbkRaNFfTFLDZbspS75C3reBNACV9XXXUVtpfW5w4NzcqRu3jDdNec3JcF",
  "key38": "Zb5C1k266GVErvn3LqrEweCUDyx5YzVTHF9qZY4yjxBDCiP3kWrzyUVivFpgS8LDVbpDhAvJhVBPaCbFFTswQBG",
  "key39": "3jhkSa7vk8hA9jFmK9FuVPeJNYchhPxcpPVLqyknFQGWN16hameGcUXzEMFKk1SNMDRBkwSKqL3z2eqpHmYahFGt",
  "key40": "4EToEqfbLz2HEFsWAmmcoYbKhVxR2yeZK15q11FvPQtadkXz4jHbCL6i7iyCb93MrpceR58i1ghVD9WKjPJjD6np",
  "key41": "2jeEGtxgJ7MHCM2VpSN1WpduNeBbhZinyNm9vZWQwKjZS81kF6aG2yvFsTLJYkuRYQa6DcwzXm7oJcxvUzE3vbX2",
  "key42": "66PYKBPUKR4z2Xpyum5nNquWsAn6Uxf53JzZNewVuSduJh9Wdpt4vTbkikNAn6Jhk9PGiVhmsPfoJGTvqKCd6U6q"
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
