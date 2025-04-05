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
    "28qDeyBcDV2rmdkSvtuXDCbyvvNA6RY2u6WasJoxqJpWyffsKmeTWhGseFvDV4HR7kWx4nGZWAoUbZ3o8jAsnzqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVAGr2zK2D93gwfjMBUH6pNDgajFLv4ZLVCT4PXRT5bwtUWeaufAiipPXFPBZC3y5QPauk5BKMY2ADWpbg9yEuq",
  "key1": "4tn5Mxd1hgTd8kfLGG6kujRpY8Z1Lnxxub1k6eLtscMkfZhYigPNx19Fqd2TPrpaASEnQzUayU6LbTkhCkiKwavA",
  "key2": "3vSqGNseKcW8wdhxwtjGFY6Q3rGqdoJieeVXrvakcghqqmp7R3Myw69NmmywpdGo7w4caCtEtQjBRMd74g5sFcSc",
  "key3": "Z5ub7mRZ4t3uHpeQbfbGYivNVkv3nP4Hb5nPkiDyXY5NGreE5GKWvieqYxJPqmJkE4y9SetXuyg1UhsNX63PK6h",
  "key4": "5Tw3zTZbEvAccCgcvusNeJ3yyCyzyws7kjorVrxUX6cp6DewcEYNkNmU7isuy22KH1Yf9BcJ7DMNKQoRihqhSCBJ",
  "key5": "VYkWqKQXHR6N1S3fC53DNVfMiRBgN5sfM2ZNffpKCsDT9YM4SjnfYDQ7beHGMBQ5G1Tniojzqn2bdYNtfZTvUfR",
  "key6": "3n2MJsVjt7SzkvimkWhHQAWeGo9Feh4hm1MXEp5vFTFiaXPu4aXmgY1Mb5k7VvRwjrGV2oUsuqcvpKV4wS4N3sbW",
  "key7": "4KRDDUhneYqsXsi2oCpSNQrRPy8aTRoXm1Wh4UKWfLDPZqnGqEAkUJKdzghvWqHQSTwuene6wKBPrgqNCHrMApHp",
  "key8": "2tvUYsB3JiugtFeazQU5N3zYgzaVBHugSrbAt8qGtmwVgc2ovLxQXZRUFsY3TXxJhFh94aD5Gx4e64YM1AvWq1rc",
  "key9": "JAc2HdWTQdq9r3vp72KV4VBKEz56n8thpEuFu9uyEuD44YjTcUmdaEMY6QtQPKSdnHeVkaFA5avbQNnxh6GYUoq",
  "key10": "58uWrPMhveBdACvBuswF9vZpDW7E1oMZrFfx4aoqxzgCDwuVbPUJ8HScXuJYbcNos7o1Uw4THNk3Th7gUVd3EaG8",
  "key11": "4kMob4PX1biUAQUUDXciKNFXC9vueZjVvQTH1rDPUXRHbDuRnD5ysTQ5JUTM2uwXmnZP9GTu98A1BGG8SdUnLVVy",
  "key12": "57e4uoQLm2cYTUTx2ahpaqxhQZjXtpJhdfKHKD1WUZL5V9sJ6kDiqGR12iVUarEEXTVFQDt9oXkYtrCAntxxBC1j",
  "key13": "eXpf4yompHnP2zs1LXMGBKrGxtrnpbJwiH6zAaphTfmbKdbbE2iNCDG6C4K3yzhgdSig4B6fRyaCZPEidey2Yv1",
  "key14": "3EMzAJYsDUjKs5RbPZhVBNRmsPcNQzy5UVs4iVPdae7mGj1JxxwrhMvB5HmythBuNMVMyNYBWSQ7SetmF8CcjMDn",
  "key15": "2NXD8RGbcS23aPiWMhXrZ7eT3yR7UBcJ617Rt5u14zt48KrYsxbAKuQmPuUqaq6JrKa6JJ9WndAcmtfForMicCKV",
  "key16": "3bSF82iTD8TLv6yqcNcb3aaJZgG2WQ8tvtHBd77D1hBei7B7HTAc8VZUsZhStRDBCnvuKTcd4HS8zPiwbvd9mKdg",
  "key17": "4n9E6mWg9swF9YSESNorjmM31JCs9g5fuzNFM3SxPpFrjNDaXvZNSV6ufABCvM4uUhyzLeZGH9BLeiH7eYRtQZqy",
  "key18": "dTynmN1dCdXDAScRBsUKM5jXcLBAXr6N2wEprSEZwcfSLzmno4tEm9tNUsLcHTghzdB1KHWLHMN58QzLrCot1FW",
  "key19": "3yVL1WrqPRKoBdsxWgu11v2bDdHGpMUVBzsS9Mh7iceHCoHrA3jnUxhrb3EzWGhE1bZjdUwsSizpiFtocThz6bsb",
  "key20": "3px5X6nfGXHn8zvFsNeRgaZMhwT91PSLtxE4s5TXjEKHbiPmafbTT31UrKbdSAxnoYKhnkpxd8wKtj1ur7uBo9Vo",
  "key21": "66mX2BjQhRptP4CFpLsaXMdsnaVh2witEdJqXqXTSjmh2RuoFo34Au7Ep8cQgFBKcKvxNPvzgTfYwPpBPFaLy98k",
  "key22": "WPEMz6AFR6h7oHdzHdSqMNodpnwpanQRXBZX8QmagWFu7AAAVW1LuAHosyczP9B2SYn1rxE3q21b1mEY46pFKaU",
  "key23": "64YU522Pbs4kPpvLwNip1qegMzn1MXT7Wid4QrPe9fwUkm9KvxWLJLLNwepadPjkYfsw1mkBCStrXF5gGvAKx7XW",
  "key24": "3h9MfNGz46ZCjuuMvcHEG4Ko813EbEsqC4TQQ3tgeZ1zouEhewRjd31fNWyCsmuceDRiXS4pFNAje2eZyVfxtkfC",
  "key25": "3oVvjwsbXGCq9DgmuhrjyvdVbTS5oghPD9cjSRhSwKeqoiXEto5rMd6mgV6kZr5r6aXKQmT8AjKqfofZ1uX9Eqx9",
  "key26": "41Ck6cK8x8MPkMvHsN7PJNTs6VbcG1RxMykEwsh25RN3BejQt4zB9Usou6U4iDxzdAqkiK5UgSff4VBRpmXzUHx8",
  "key27": "2TSXo4GwJyfDKe44pakTgBVJo6dPX1VCicmeLJDQKyKKysm5c3C2s7jTeWqUyZuNhQu3WxKdnsFYqMGrzvK38GAS",
  "key28": "3XzwhgERbqCXtKmTwg1j1Gey9JEcQt7dS5ARxNDvZ4Dbimqdc8fuKHw7VGr33Tfrpy4yghzQs4QAQYf6xAPzf22v",
  "key29": "bKLa6AtRYMAjFpVVjqXJ9M15f9tkPjUPJTYraDGRUVuZjSDDy9NhAUQ11sf2aXKkWJbKm3bz1dwj9T2VrdTAnoC",
  "key30": "2Xthk8WqAsCHL4QDzkDZWbmJHWiTxgG7rpiP9fPiN38EdPwM8Fz6jL1btY7H93dw959nMLaLe9Drjx2U6ADkyaLg",
  "key31": "5Hx12AZaGmmpGwf6eHfLhD8XHe22kFb5yLV7969u7UCGJHKK2b34nbJqVCNSgzQXtfEPex16VH9WnRAu5SA9WZUY",
  "key32": "2TdUHRo93Tm1zppKBAqdHd1Yra99by6f5jQfJnC3RFpV8PwyV3appCBdcKXkVcBcxhmRnNzaYKtCboUPQgN19U91",
  "key33": "3mHUK2fSbzi66jmK3ZgdndU5BXUcw65BtTUMcQRMYZrtDigwWrbtqGLLNZCkjg8qynKjKbjQFwywhAPNLm9fRSr1",
  "key34": "2bjaMfXXnXmZcxqrHM3eoSBR5iXEELfB4Ag4ydVsuabfD5JvGCeGNtLPfjLwzayHZN3GZzScCTeZMDorongRaW6v",
  "key35": "49C68WigGHZ1LGJHRLA5JWo249ecVM5pAdzRwV8qUtFqLmMp7in822unizJ9Grm2HueawjQcm5ELj23AkG4MAvKw",
  "key36": "33faX5GgYN2jhf6bPTGzoG7JDfWWRP3vHhVn8ovxeYPtZNJQ51YNjCWjZEpzp2NAk3pbkHieZW2iRiGhSSkZKqec",
  "key37": "LbTiEmdjgw8m8J7gFfsMhPQK94FuBMQpDcm3C813yKkMoP5djPYTmGXQt67QQSYpBnitwPofVXaRQN9LPiZK6p5",
  "key38": "5gww7p73g5UBaqmmCSrzca6uQ7xjYCEEi8jL8yjEC16or97p6vvbRK2W19PHm2Yx8Kb4FtvSHgcD5PZHWcgVWfwK",
  "key39": "4HL9aj1w6qyARjnuGFSdqwK3cdzcvhohraqAnkhzNWZgmp5ibDSmWR1FbZcqLN2hQ7cAy2w3xDZ2rnQANSjNAnrn",
  "key40": "4hwFkk6MooD88Dpjry3rqBCj5Jsc3pGXYafRSw7bWprWzmhSBJJwMLxXiA48KFdMB6Tx7DTyjaVKZHzqgBJEdVoU",
  "key41": "TXXVkNnsaTj1Y2vjQibFoSbqKRWZgy2a2mh9QMn5T3UuccgY3DP1GxoAEr3ao2zYr4zReXbTAJxwSb6hPzXme5e",
  "key42": "4Z1bMZjejFUVvwahr1peQG8Ps8KDjufYzts12MJtUdUpmTpHfupPDUmdQqf2F18MEbT2MEEXEzEMKBGR533eaAqK",
  "key43": "5qgVxejSLXchHRa1i98xTKtxDxc7Wt5FAgdWozzMKUg8Ldf4yLngdaZYVuN8UbjuUzb6wK4SBz1vKuuY12bo1ZZe",
  "key44": "4kj4BKNY5ddK5Ar33LxXeCG3wkb9CyqLMfMXbXQcVRGb2fwtPjBL97KcRx4EkYrX7Fi8AGPsJj1LQFHYrurr1Fsp",
  "key45": "536bAKf141v4qwA1UQRPY8PkJLXFKAPW3nVMn8s74p6o6uJqHARVL3V5SS13SusjeBjwntVbqXWTyANtCyJqQSgX"
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
