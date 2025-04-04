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
    "2jRWXRDuoefqLW8ogG2Zgiyp5AKoz86Eh3GGMzqJAff3hooe8KW65HvdwxNXLTayykdMEXFBDjB9HuDoSW8nAdfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2krncACrRDifCakmMSSAKMGFx8qGnLe14HhMKjAnwWkN5WysX5tcQELazzJnFyZ3LrBQeTwW7q9bVPRSHwM3kz",
  "key1": "Vrt7v4W6PVpYUPpmHAppD5nYbv9fstCAi8NSMKNntaUM6BQxc3f7brZavVXTfP79FUNRHxbpPd34dvPXV4wDPsd",
  "key2": "hHDceMSuF5Q4ySkGFH35e8eanZqYyeBQmYZjd36z3VzJbZ1zJvHxYo1PccjbqPgmdaMLUE64mcckN58oCXakEog",
  "key3": "cqinY8ZKikeJbQePFp18QyLVDYGm7MzeWTibaveFAQrtwazrvqtryNX2TrRfyiu5GMm2Y7mDF4Kzh2oMtREnq1T",
  "key4": "2YxK3M3krwrL1DqrcqnSNzb4vSuiS6zWJECZ4nw3KBGk9GjuBdnSunCTeKXcZq6yGp6UXy8fboYah8VU7cjs2X5j",
  "key5": "2so8hRdpCviGYemMFCS68BnG52UQ2aiBTSnALiDvmMvZDp8TxCQ1PXYDCUUubN7Dpkmzszq5azGT9iGmSekNQmto",
  "key6": "2xh43pVE5jwL5Wiq1pzdqNvVNJ93qAeVSRmUqKt4RFA2GZmKnbv11zSJaao3QKGWkrU2QjgtnmHaQF6ptpftv2gX",
  "key7": "5nc5Uqb4718Wo81JpE3cHL2eLtAJgqWnuSsLAzwhF9qWriRGExhK1TQfZEcYXsa9BsdHHjp1VcvvcVLGZhhHE99k",
  "key8": "21NMBTDbdQDgkzKRcYP1xy8pTznPnCjrG8jcAWp1PR496uMsfdtRhbkYuunaHffCHHEiW1y68Y6Vi5PA16bR7xAx",
  "key9": "3KnRBW65hpAHoi6dPBvf3KsYvfD5rLAsk6ZBDmuHwK6uSQECv5GurGef4kZZ7X4avsrYh9ayzJGRt4DS2GHRTHpX",
  "key10": "3WjmU67ssjoD1ziVpRAeRZuqAkrYBeDRDi1dZWhA39XDYEVwRQYCju7Ttk6mumf8cCW3fWgaNAStPeAQPedQyuZZ",
  "key11": "56zFgYxQTUdBRAwdcHhPGnYoK5m8Ksq7mA8p161PzN5UiRzaF6pMmAEvocL1r6FpU47hhkAzS3xtmyWsefRDWRFn",
  "key12": "JXkKeoZSB2vWtNRVfyKVMkg7NefCufKrvUbda1nkZcujwh4u8VmPA19i8yyjnaUTSJDRkY5B31Mj1dHnuwCHeJn",
  "key13": "5ATcf2tBTpqFSNxwL41DBjRRmMizVY5d5pnrwxtF4uV9mCdr9VHpZYeEsSpoArB2hjSGkpvHFCGHyVerKhHNyMXF",
  "key14": "313cZHb1FaBuzPaAhgGJS8hZ5vCbA5vEVbzvUDgM6Z9YvoFpGajNUor8ofybEymeeJhmNBFnrENUhVNXexN6yXfU",
  "key15": "4iXr8tbvNiEnYXtgwcAkzhNoqQkwUfLnNDVuRQ2hGf2UMLKhwWS3VX89Ayq53MVkFBoDvH1pwTuKZGL7n1fnz1Sw",
  "key16": "3Uf6wDHZ15uYtoKkgArgQFo3WDSjq5gZGrkp1ovx2Adff2HTYS11YxdC74E2W5XjHUZ5CxyeDT6zyaqSH6FsD89S",
  "key17": "JBjF851zEWTAtuug17yQUDde1zFiR9qSEWkMzCJSRagEK7ezLSDHgvb5bksMgm1m3c9aUxjeFVoRFQPmgFfbXrc",
  "key18": "65t3biTR5V4pthkTyDQ5RpP1uwAxLkA3iNZ93BEViuJn8euB8s3oomi33yro6y3HHazVx6wmNASYyzDQz1vTKg8M",
  "key19": "J7qZhiz5WxtCkY6iisJtRFbqNito4bcZp1dVB18h4JPdjRQHAELCK52e3mHicWTht7wfZAUTjpi5mZfdj8gPtkX",
  "key20": "2UQroHQFUVxAUoDKY3d4PdQZMfvDZVokCRdYF7zzNF4E2bw1PF3b7xQNrNvf5HbWTWzGomJmbEm19SVS4P5rdU21",
  "key21": "3FHyKdnKmMwHyvmATNK3psU1NnXp7bh7ws2CQ2NvQm9n1XbjgA2bpUxnRJVoPvHdB5RS8Pbu4Qj9EoKBfMsfhLH3",
  "key22": "HLwJYMeHTk2V2xSy5P2sKw8wtqWoZX7ngSModLjTA7yMfQ96xw7U2vjibhNfBWDEpeMGezp3aRLTgAbVDAA61zN",
  "key23": "4eK2vTiJCr2juuraEDUbE5Hae7ud7nDtoWbwQXqfmygnWT2Y374aK2wfGAAvPXb1mRF7mZSKVeAxtSmdCNy2W6YY",
  "key24": "QH5GHe45sCve1tRQuoKmYLPyUnSTHjpPLJUwukpafe92ekpnXY4DdeoYqDxtaKQCvQLBwY7wPw1Xr3W7xyk4ncP",
  "key25": "37xCZCyjEUmnpkgdAQfvGrx9MXmsSzSm1NcZBGUHkYbCWg93jaSCpS3p69H6S9TSrbgkoCo7aHfQdbYHTD3NJoxf",
  "key26": "4Sri9HEcQw9JeWpeJrCmHSyKM9Fhq2MrAUdX6yBw4Tg3oJqP9Kzd4upHee38pGWnFkd5fVzHrMyP5SNkxARAk5uo",
  "key27": "4M2xyAXzVb8yLR1vPeCQsKbFJvaR7GsMJXJ2AtZTMMYUoHPK46N8oS3KgxytY9Y4uTHtAYc7SmDkvE4byuTbcXKZ",
  "key28": "29R4RtwBvZQ87comj7gLsSq2Ga7zS1xHjFuDDSEJ7GVEMVzftFXZrgNXnBQ7oTW3QNMukGjjbBCwFEPydZpY2EAi",
  "key29": "46nsLeTbczxF89aJsSxugBygbv5PhP8HWFkrjf4MGHvJUnfRxsjtYjmEnVRWYTLpQy4CGZKRUu8hwRdZs2jficuV",
  "key30": "5nefAH6CzmEtnA5XQ4iYvsySBXFkzT8QXQ5ae3Jm4k4o2cKiVFapvu3eUbK9h21Xqk1avY2knampv1TW21h3y7vi",
  "key31": "2K81fyBYn4hv6UEnEpcQnLstVoxvfxhR72fqjHZoHSM3MpLEx6mvHHbjo2YvWKdDstLvKYFpVZCNPGEdFeeDo6Mh",
  "key32": "2ge8DbJgUS98WphEcNV5qvxooDKuuZMVdTA6ACz9Vt1K29dMFdKo1s6R7oh3T7szQ9vVteHAdqFciiN35x9UBjVr",
  "key33": "24eCKxAioF5ggyNDtYAjQ9pTLvSYouQbcgd2Z49YSxiiXVoGyAMQRJXGvzBRUCg7vFapfVLMCseZSTFsaYgraXkX",
  "key34": "4G2HUvz2h21R7hQbfRDBUrGSXPGZB7kxTSRnNfZ4yfeY1FX3aqeMoqoGK6NJtVmWAxvBQ22m2ynz9JLFvjWEoT8f",
  "key35": "9n6iPWP5R9eXFZDVzMnp5bX2sbm9YGCouAjzx3e9eKVPHscT3oqr1ayxf21T2smjC6dkZjpavEgpQnWS9Pyax7R",
  "key36": "4DVDHewLjMEvAN2TBYF9QEqHHFQhYAHFybzehszLzmqywceY5oPSyWVynuYGLj2mRBP3CBaru1N8A4iYK2e8xMXB",
  "key37": "2p9W7d5wWA6cgxNR1kUdhQ4N9TVcpAx6tvp4FEVvMxZ2aJaMAoLUD1fXyD71xcxjmLoABs1g9p7LPTDQ9cHfP8Xj",
  "key38": "2o8ayyQmxCr3aeTtJtjEgg2yvz8Rv93GWGsdJy2KJfAnqiYhgPzd9k53nEDSv9UTMSKoVLJoPESC6SLFfDaT5UFo",
  "key39": "65zQLNaZ9Rv7DTiTne9Z1eSn2vQZ76x3s56a8gimMqRpibMQSYhmgxYkDyTMg9N81hShRjMwWm8JazowbVRbSh1L",
  "key40": "5fENtqRbxBKqqtsDnA1yZiz3jCaUBNHQbcbNVGBvxcHmvnDCMopmnFbdF9J2MkEZSx1uu3uXYc9RFXrwGD7Ye4xX",
  "key41": "hSenUUYGNn8v4Tu4RJmpawWpJNtahfKYz1UPrCnUYxevSf7o6mvdVio5rgzayx637wiCw452z6vobHg45grNf1J",
  "key42": "jNC3ZS3QKGNdYwiQzrNdPfY3qtrz2dhjCdMLpGETN5b37xvUoECKZgptGouKe3bQV7oZNBthLz3EukLz4oQG5RA",
  "key43": "5Xy3S3FpzaB57Y18vUNu8WiPPiHA7k32rATQjoPAnw1Upoxrzgq63RXBYVHA9XEsKhgY8PKrBtBk28uJXsaiW5Vw",
  "key44": "EhLzcw9JUF339kdrSQzbLZJUoHAMAV6CkkWshLiYnVaccWUpYPq2wVS1G9wmsg754murGicjjvYfe67eLc5gFRq",
  "key45": "4MX9dcXnfTRtRDmxwesBAHeBEZu9WF6CDQ5BHpPSWYv12Abx2eH7iEmXGvdx3fS8tbNAhSRuNXD6v2sc9nH7geFz",
  "key46": "4LeHomTuvFZqjuFe5oa2XigHn2F9gJVhwVAh1c1XUnfsyzysb34zDiRBo9aqqksspYeqvt3oHYUfmcRDTxWBKNgx",
  "key47": "4j84W2CNCKvoZF3YBC1PF8YbkvcmEgTCpxKWL8WYGFKE2BASA2RECmbQUTkMLnZ2RrpdMqNi6MPw88TeDULPSdYz"
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
