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
    "5S8ZneUdyhyKRgXn7uZs93DcWmq7yxfBNn6Bv1Y41EK7Szz1rvrq3mp6t42B1Q1i7rErfE77KTkjmaCwmFKjWDdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V12Hm9SCpxRTZanuBKKe18jLz3tEJcGUN5iqmBjXUZrosMYBzfHj7vD3RvkMGz9ydvXJmZWtRL8MJfGVEqHC6Ko",
  "key1": "2WDXpeoaq8FxHLMB7Aq2UB1CpMWM9s5vBnJaPPid25q2F5gqRgtH6TBJhhjJCvtaW4tFdtgmzk7Xnaqs7FpgSesX",
  "key2": "5bkXpi3wX1Goo7PkcFxReNiNc9GriZCgicxhPxeUWLpgQpnNWhKeJUD29j2t6QaBrh7T3kS6ohf631zpgLnXiifi",
  "key3": "396MPbHUJtJxkpTxF1YLuLTmj2Qfz36GEw6F8g22p4ew8ieBT4258Zoqfb9Ra75M9vnC8xykStXXDrJ4NtfMMdqG",
  "key4": "4oA3tLR7GnfpHta4bsaRWDe7FfSESSRUHsYSGiZ1ZVKa3HZR6aaXzGHsB9qqvhqwsFLJ3nmubzPXVZVH61j34nkc",
  "key5": "bdRwxPe1GVhEc6MvTe7yKPGKoQ9wuwMMLzioZwJpzLxCJ6wpFYof2A87fyP27LM5cqRxLpPrsQD6oKjDdqDb57J",
  "key6": "HC29TXVaV67HeAP1ix1fcVYuJp4CCMqZb8eee2FeP2xw8VkJiGzPNvznGz9qhsM61ALFyw9xpU2fRZh8rTggy6N",
  "key7": "2zSMpA2Lg2KSSJ6fBhJH6enJZkxeLK81Jn6mMBSz1zfUBN2bNa4YnA2HisF736ahKM2omVM4kHGPcEqSctNz3BXt",
  "key8": "3kPMLB1VCP8tBRw7g2CqAynqNdMZjaiKQUUPyHHXrDhYAmNftVe16KFVsjkNgV9QuoA3wDA8VkFJi7ufEw11GKEA",
  "key9": "ikhCGgC6XkTrksU6V69rwF3TL3oJFmEp6FFQV9Vrsyw38pxoHnuo3AkggyuwoAbJamPqBwEBXVGhYecqn3Ld18x",
  "key10": "5x2iyd6fWTX4FGrGFAssAPPkNznumw92dMCXAthqP6hG3vUw3KNip9L2eFGMjAXipNF8onv8XamRBCudCs29gHab",
  "key11": "2oSHz7iE5s4XEghuWoAHXhwCSSJtqswNji4ZvsybenSAL1n2G8vXxprHv4ULyxiTBwhd35p1uX4uwQDXpYRuxXFG",
  "key12": "3mjMvw1qWTXweewVZosgLGET1L7gwX6nXDMHcMDA5YaHYuunfuU7oc9UkniB9Xdp72XUNgX5y8tNad4sTX9dQDyS",
  "key13": "pbVxRAS5faqtNAczWsaKKT7gbsemSF61s63xFjbzwMs1ppiemYqcNdsGzy59cZuU23fuTgHfogcR1JM1dBiLvNk",
  "key14": "295Eir3MirUxuTzyfRdSwhnY5TgJUPezoZbNYdKHV8fsgMUoFuvXPeewb3YMM3dAqG9cpfJHxY539gordupuAaRt",
  "key15": "5smtxQCUeYR7yDXw8p7vTZkK58roDU9fCH9ck1evs7NzLZEsxzNsTbhhQB17JSe36mg8JY7pnuchwdR4trP6yyJS",
  "key16": "27MNfHDR8DizFoKQf5wgmmF8VXeupiqQtcZ7sWDJZCFfYGG7AwravnNKtgMtVVJ9MK8dRUUzSWtiLKTrUBdTZPxw",
  "key17": "3bvVRAahxvP4aLEFceysaPatUxPmJiF51Xd1gxJNbfqn673y2VgqsuSyVYN4Yrgf8gh38DJ3C9fYQZtjzDwtV7g2",
  "key18": "2LdB5qiXLQw4GwnxWxj9n3nmtygrkJw3CUniHjp2wpWfqUrTHXG4bxtMdDcJhiXyRY7UwALQAhoHfT1YZb663AQK",
  "key19": "3QZTke3V7Qjq3HMs5UfFhvbYQmCWdsnm4hxMgQwVgFBJuGSxQ8sPMbqf96dFLEBN22D7niXXMTZSKqvK4M24F72S",
  "key20": "4t5Y1khxoM6HAYXEZNuQBqyQVorAWUgqfJcg3xmS8n2k9nbav97Wg8tcyNQLS8fKySXebGUY4Z9EHP7bXFUgdEnd",
  "key21": "zqLKFnAQ6CMj111UQ3m54ZKwRJuFhQi4NbTkBuzKFHVTnEYjZXai8dU8dNT598cebqr8yCW8WFLDGkLqBt2VSTb",
  "key22": "5xvGjLpoiHkpCTjU5RSFzZsfnfroAHH1QLXrRSqkoZ2jUChJ6M7satoqP5tKFLhu5dY1tnuZVVxjkfhmhZdaYAoL",
  "key23": "5fsWanYpedobGxYb39p2xr2PEiJMNSHMByC6Lvzwz6kMCQ3oGKEScYhb7w5E5dGFSW4QhNDcup9yHAoxVhUFM6GQ",
  "key24": "2Qh5rX3JqEbETtMEUdNwPtuhv8fKA9GTZ2dnjdbFjoqmjVaB8TASoqQgZJDfsUFN2jGF6H5Kyxr8cReYLnWBqR5f",
  "key25": "2Bx2vM7pziqB8g5hcxnJiswqmtqn4iKAJDBqJ6BQnZ6iv5PmcJu7xyArdbiSDviYvzRHxfjzHhBkE46uaqhuZk2F",
  "key26": "3NNgxPj7AWsdgMxbqLa5gsvEeTDM1RuriBjQTKfaC8guSJFovMdSdfyoX94vnDN79fHrqNBiPThKTBrgLsctuQJG",
  "key27": "5t5u5eHwYQEFM2jQW215foWEkpHxmoTPe1bpaRYgaRG32WEhTJXnf88VY7ZDTdRXR7JR44mXGyRXB92C1xcA7j98",
  "key28": "ysZiFDexWD4QyrnFymQGjaWnxjxQiAbtNjviM4biFzHjCcKEAGKj5uD4dR4p3NWJWmN5MdyJeN4oyhmFUEvjLE1",
  "key29": "4fBkrm2qsY31Z1LhTZUNyxc1GS6UPCiibnJkUjszpEucKHgJg3vQPwXLuqAoDnbZvme1MMujbAkVrKs8yyVzQ39M",
  "key30": "2sEYVGWs3QCbvtoqLczmTGFUHZDSg6CfzUKYrFw9nUZT9dfhvTGggxWbHju6j8p3pdzZ2MD1FWfW3ftPJaNUjr3y",
  "key31": "HvwDB1R3JwGMZrar2RTRhVy7QePBivQDpW73eTrg7DsTuXs3wRpzPrGDvDzLH96PUsNFbG6ghLv9zBeAbYEPAi3",
  "key32": "5EViEewL6De96oPcrpBT9KHFT1i5q13tkcHuHHbEphESGA6uKTSwhSUMxi3PJqnuZiJeaEiShXpkFa1SXqeVriVR",
  "key33": "2sDCot5nNN3j3gdvQ8h68uWbsdMhim5oZ72qFKxFt7Wp4gjyaMcVSUyQxR1Nz7gyBJcg6b2AF46EWYSF7UBkvQkZ",
  "key34": "4GJveTu5NFpvujrcGXD9tTrvrwvaQV9aXiJ8ZyCw7Pv91jZqGy6ESscvSVH2TqbeszF1EcBjDQH7CBbnaNAzY1hN",
  "key35": "2MJY1qTB4j9CG5RZLinvFGXi1FDPLiQVB1f32Nd1UrHjuFZnVBdCnQD5Qx6FeBTisfJnvGrQvLauTryvD3Fs4JJS",
  "key36": "4a2n1qrZSCLFXgV2qRLwzCuvQC3yaqB5aMvTEkcPyfjksuATMHVRfoujXQNPiKchHpSEVxsk84zYUaVgPNWdtb1f",
  "key37": "3XCv1tiY2oSSfrfdcQRYjwFtEFtSo9bNK3oHZscP6KiQki3DZmRgAYzRCXeDrEgsWxbiNS9gxVGRDVP3pyMTiWGo",
  "key38": "3NDS8p4QS3d5azQ8xDRAQTQfBqPMgKVg5SK1dAfXbDi8tL7xUnptnLEiFGmpLKxVguFk2wCakFoZ2S2Gwh8uiYgb",
  "key39": "sPGhU5RnnvZQtQiZPqKjn4K7ZNDzMUAxdiSZ1kFpAzSL6e1Gg1VzM6Bo7fn29N2nqz1drPZenWaaCoRXErakmQR",
  "key40": "5ZaAxqyiAt1rJjp15Lqnc5FBhT1wZS7CCmP7UFQHvASxDZgmnoXkgGgvR8gZqrhNRk4aRM3jDsDsYUgSfBUdSnMA",
  "key41": "srNTv6jFYW4wKN5t4rbqQrJCBAEoSg3n14TMMdBuWVBVMknwWTEeRYHdE54JmgAFtJepiuMdLKeNqC7ogfXaCGJ",
  "key42": "2yT9PBtLcrkh5cQuJVg6Yn6kU2it1ZwFLMxHHf2KACCpDS346U3eekP524uqqk1sovhhheZVfiFYAuKSSaf62RLR",
  "key43": "3vVgMk6CHMGWrrhPsLYPkPmmiNxzL8eoLPhonqXYqDebSK3ZWBNTjoqoMDsj9exgu348GxvBtG5fKBMjxrLXRQb",
  "key44": "uzu3BuDD4fWmWUVZhWA8MK8dvtTdT3AEhDCBF2Z3x8jQqwgi4iusFHbaWxYNGgV1FmP73QE4RNVeXgg822eWRXH",
  "key45": "2b79jagbLqSbpU4iLFshksk3H3hKj7BJV2LhxDi2GxrwGoRjPsuyXEjH43MMJxSJTv9GGNBZd6oHxnUdLM4aRowo"
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
