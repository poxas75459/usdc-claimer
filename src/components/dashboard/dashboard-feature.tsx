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
    "2XyScxHnvwkToaxZHB15E8kFuXsbZjn62TD8DaehjKhp5SQqxybB4DrivdaFHV87FfTZWPEn1iiGQ7wokUNsFw2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CeHYJMT2nYvf5Fzg32Ms5ioS1STmChiEdKpc51Svaa55QupCsFb88sfyzEV2Equc1BmWkCg1FDikNrusSR6tsdU",
  "key1": "2GbJjeKD96wjxzscFydnfS3P1VwkRM9RLrkwdxLiF34pTf6jMwYbVKjK1LBoc6UeUvErHKLo4fR16BPCWYE8YxU9",
  "key2": "5TfEvVqZvH4LhHgLmBghe7DPX21rRbYQKYCw3QP8iJrpFbVwC9ZmRESv9b4U1RbZ6CMfVoejLW9vDKfBotBmoBuv",
  "key3": "5vHfcvW1STjiWcJdyyuj1ENsaE2Vh2c4mEB5xY6bVtPnyNuMVQyZhAJzALUgzkkX3hCBjcLfX89qEzhbu3irWxYR",
  "key4": "5BDMKwZArwPqagU8L5TCvJTdqbuxQoqkViBmWYySaoFiyBLBm8tBuRSRxBQZhGGLqJQ2g51kKsrAiTJuzekdk4qr",
  "key5": "3tp5oQQDFu8m1MnSETUEqrAVwyEGKVY6f6RHA9oUV813pfp4sXHVppfkZVTpFVbSKKsspze9mP3Pocc9g44ACgHi",
  "key6": "4RdBjYuFqfBfCLmXxbJygMA4D4ek8jcQGJbTpzDSq5HB3d89hRmGZgSxaGdLjSd6TL3gruHHza8ex4W3XpyvnG2m",
  "key7": "3UxpqGrAzz47eEQ9JvfpDfyfxXe8nJ4Ln65uPswkDBozKDWuWC8EdeWgxQGSYGZELPRCdEKBf2QzD2jHuo9wUmSR",
  "key8": "425aGXCq9FyRqFY4PqV8Xs8PHRCa2i2EqcLd4TjUGgAyiJ4JEa8dwGN9isXN5xgdufzNtZEZBw2SNV9xe92zRAvD",
  "key9": "4XEs6JaW5DTNVS6T5GkMQDfCiMf3BTHAXBii5ytYgCrPPRFATeqSWigJ1mCa3yyfqRUuBd7MFTujMawczyLBEjYC",
  "key10": "5CC4NmxA95tL4KD7mtH2PKN5T4ZMHqPi5bzJeb6C8wqk7UnNTAZrv96W7BuCeS5e9tB5B5irYZGedLPTMNSB4vEG",
  "key11": "5paTa31sWmubMKagj14FQ6uj6FC5zJqf3m9ks9yrrtBC3TW2gXziXA4dpFSjk5zTcHLNJgA7UoNa8VXMn3Xk8mCs",
  "key12": "5DJsr3naPqVXjNk7YX4bZ9K18DEUztpFDrZEAE8gDGuVZb3asRWitmdRLyLgfww1sZm1vedCkU6KwEfTt5AQEcQP",
  "key13": "YB4h3VU1tFBKRe1qZ6i48xLC9VC1HV76VFKV1ccDusJRCgt1ynKtRAM7SoMeo8sW8y7rxxghq3LYjbegzz2m97k",
  "key14": "4gPWSxWb2G379Vtf6fJhry3WVsyMuCjMBbZXJ34sTr4eKuXjboG916RcAx51T8uEvPLaUUPLqV7MMGoZ2cNBRUBw",
  "key15": "3Q19zKaYfpPLKg5GZTQ6DZ2Wqn4ZSRmhme2gjELRS4TEEfMsBNrLqC8vNnepypNo9yeh5tfbxf3ujhUr5iG5tKbP",
  "key16": "4NMpDpeffCKVvDY1dMAaDoZm6VerJkHn4hKwYA2VqZMepQWNPesCoHc4dSZz28D3GqVQaY2ZMFJkje2EcnEeBGEW",
  "key17": "2Lds7v5ppSUDd78AoQbPwabRdV33tKLTFbzv77UuiLGTxZLfWpZaqD6BVoFAQaxzj1iWfLVXrgyC7k6aoKdAYLHC",
  "key18": "2mjWFwyr6oeDUoyUHybAnMXzeLgSxKgBaaAqeFAbfxSNkCanhccA1vyT7TFcJMjZBTzAzKEHViE8DNn5XftgCfmK",
  "key19": "4tzR1fjFEDdF8UCGekKDchnFqjvUxkwxjX4Vv8xa7BLih3obCmYHJ6gBu31DfV5KiX34bYpQYfSeDDBYp9NyyQTf",
  "key20": "3tWhZc4PkK75Zs1a724YQ87gpoXSb5m5QNcvw9S5fwpDn1yxxK9oJCBvYNT9docrfDWL9rWNi3mwwYK91MbDB73D",
  "key21": "42ujEqo4JuSd5ESZUoNYgb2tmHu9CfPPv5P3o1n69JZGTBU3z57GGHpVqXNGkHpq9Wn1G5cYDKxPcM3kCtZSupv7",
  "key22": "96XhgPFwLcjzL286P1fYwkGvmfZzZMwSoBLqAFAvieAVkeEiU3bCAgsviEc744vVHMnfAzJZke4JRoGG3THwWvz",
  "key23": "3QnbeXfqwGgoMqnfCUcQUcqGMnVYG3xf39npgrBCM3rcyjxpH37ZosTnDrZPWgDFbU6Z4677szT6ktaB7VJVTD57",
  "key24": "2fsA43xTUxjPtXjUai5qSTBvFJgSAaWqnqSfEs84D9SWsm5m2goEMfE5aoTq9k9SWcj4MVpzkLt9AkzWUf1L1NQt",
  "key25": "54snPACG9rkF79wxpu3MAQ82xxhukfba5eEkwRPUwxAf5Cn8DU9VF11iBBUzWQMgRxs9rFpdma1dTLicuy38g9Qa",
  "key26": "3ajXvCjBkKnbEq6t7hPirfrj4toMgWXE2dkPGeVD7zh9x8iMaXBsvt72DfjyVbG92g4iG6MHH7sRwMxUy57Pp8Fi",
  "key27": "56qySwK8NPrekFJaUAEzJnNWkHuqMen85LCTjJ3t7o3SREAgtFxcj5UaGywriJEigyrTFYyfQ7PLTCyuLhwwBVDp",
  "key28": "58Cap9S8A2g5Ld2KHkR7sjimuPAuFmZ58P97tJKZCRhHm1qWtSdc5ByGis3V7vXbxRsNpyyCg5hNh7xgmDs6ztaL",
  "key29": "37Ew5KoRd2q2t8p6qaZDGyPTsaT9zYGimEVTQyvfPTc2mwLbwFFBaRiDJ5KVRTwiDX4jNSsMKSNW8u2aHfVHSmP8",
  "key30": "44CgG2BuN7uvEgGkC8kMVgZuypSGCU1iwXiL6dxCp63akJtkRxYHCDk4jQUBkq7fNhDzjfAJCLq3hho4vfPKZx48",
  "key31": "2BjQuaMoTEWZcfF8Qn8NbMmEDdCQ8VyimXsnDVmREjkzifJUHCzVNnTfGHto3Xgymm9e2zGKiranTmQRSsXuPSbh",
  "key32": "3QaAXDBvTcdDRmefTEvv2jxPq6SRMTHpkn5SShQFoxCmrWjoV7nPw3meJWb2g2Yzd8kozZBMzoMVNSUK767yxB2c",
  "key33": "4SfgWMSTYjMdJmaryKRWghvM78S7ntR2U1QbsVbyeT8M1ij6RhSHmN2tqhtXp1nQW2WEV2btMGZQodfE8T4jmjct",
  "key34": "5V21sySrzEvKDUgzxkrKCcZFX32z3Pt1kT7kQwYh1HwK9K52n7oZxShF1rXiGCVLx4eFdp5WzBq4iCaiJYBmN8qS",
  "key35": "2b4t1NCp9oFXYazrtzz9Y794szWAx2pevEyBFDdVqCG8bWvYsF4Wfo4vnGUoUyY3of812YBsTrrzbG5tMryuVwHF",
  "key36": "617kxS2YyFrQvPRurk3S8R1XgfP14G6wtnzJJ6jWQLxCetwC5yzfcaVXVM9bjGhZWAmGGLf3ueYmGmdCyKND82HE",
  "key37": "66Vh8181M7tKLqYbN2RHVadw43f98mwYWTAAym3P5D55dyM5d1z4d8yJvPaX1fMXKzXPYoYCHer8jRBTeTPJT6n6",
  "key38": "5etE5phEHvH2cLZz354VWE8rRPM4U1x8JbqWN76tz5ateghv2Zk8uNmyenyvJ1xNUgaFLu7hJBgSmdsjwDrGv9yD",
  "key39": "HqTEx4haa7cEXYcn5J2MjUkAekCptVsDWrx9DtL7eMdRaqvnD2kVRE5gM5VRqNLN4HeXoJwg42njDKGfPaQGMdV",
  "key40": "qLBi8iJvNqKPJcNxfWhVWYgvy983sHWQbbfkUeSW89ZfnrCbCE8xpjsCimcga5kH1XCn2VdUASzc8ra4SCDwoGj",
  "key41": "4m2Di3jQVDZrkaKoqK4Regv7RFmYos7WyprdiyV1tsyg4JAUKyJtSaZTqTrXDL1Xf4jHvD5Ue9XRKtaVhmzfmJTQ",
  "key42": "5XbekgNzhmBt1Fwaj8fikgCULhiRJKskuBhTsoMe6t3h7cpfmtjo9Ld1Vib15Xd8L3deAd8Pf6LHFAkWYkoA7nCS",
  "key43": "2acxbH2YZ6gyX8TN19pUDpvFMZzyvA4rbQvbLKTBqausu9EiD11zuB5EdCxE6rD5ZaXcS98MuooBqFbXPgQgNr92",
  "key44": "3Ln7XVUwyi4XhhNkib2rG984Z3TQAY5LTskKi6DRc2jYQ65XXrDRHn52ZTUwdm6YTWYZXRubZ94MjPFVxexXqwZj",
  "key45": "4hCMQn6zKywKpRxWfxmmj3WPJoLXgVdvuUVQGCptzh3fQc7EARxBUzGNURtcK7VCNdUi7Yoo8BaKASBned6yS2pz"
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
