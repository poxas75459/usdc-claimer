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
    "X5dsMtz3xq7oDFsCMt7B8VVXUbnjShwLwVF8R26gKYBVpJhFrfnaBZ3qQ4MZ2zyq8hjRxwZLtJ3v3N6UkKDqyCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S72b64ZSTsXc7KwYinAJ3nq6hhTGeAt5UtzhDEvRz9EVXz7bb129nL2fzgZBEhhS5AZfhAC9nLhuMYmXVwHhM12",
  "key1": "5AbAgRr3LXPTBjn1xfbSA2j8eLmXc9D6oGUJCtTdTYCXb2fNe2WE239mU17n1hvyG8n5vyUuMBPEtbT1fcqhf6Z4",
  "key2": "41FnZCiA428vfECgRnM1znC88oAunGE91jwS7qZoFFF5ugcs8zDTRd2rDedqNeE2rjvakTer1fsf5jHWLaJfVs4o",
  "key3": "2Y1rd3nDGHvdNJMm8bLre5XNRkkUVwkcZyTHoQRiZzzTGpdubBBDxCh5yVsVyhrwR8vs3hXLdzCTBhqPyFA3FmMV",
  "key4": "5xo4DXYGcDHizrMGRc5LYcmVxucx7Jpi3ksa6woZn32kpbtm3WGac9EKJy99ojuMX6RUKyYQnEr8y92uZ9q3bs5m",
  "key5": "dRHk8bjWTAyo3zs1TfAWULfsAowoq7z5k74APprXizrQ58pH8YD26Ggqu5DnbQThsVbMmprd4N8w41GLEGvrdw9",
  "key6": "2c9qiFt3FsfyBSuLQGm7MRkgUC6ew1A88nE1RCQx4VFJ1Qga43QCJekrwoY2dW6z51Jbjx7zcicVB7Wg3ayZ3Udu",
  "key7": "48ed8VrcXoGkNVvL8huCNqPRQTq1wVAk8xJBu17BcPUv5mPvV5HHGR2SAzU4HhwifRGBz32PVuVdmTSrP37BxasK",
  "key8": "TheW24Y65EFRgGo3DhUJxDqFmhZqGwx3BaGaHxHt7ECLNMMuw4w6fuGMgwgWrjaj9veiMCR4zud8dvcziLqTvsz",
  "key9": "5KMFxPdHjufv3wLmwbYmbXxqPmKEBPJBP52EeXns9eaq86XGf2gbciLYXVLR7dgSgnmYZ55xn9W4w3TUhT3sweiP",
  "key10": "2BmALPaxNa4P9M1FxxfxGmZmUW6dkttDxPHKMvXNQD4DG47MMxpNDm3nEvqiwvnPTFGLjdTdXM8mmpWGJf1arKqL",
  "key11": "52ZxJkcMgbUgJZgjxJP8h3zT1DYbWJUc29maHS8kH7M7aGUJAB88G1Zy1cviqdyHtBPnnCinbtzUHxRehr3yvrLi",
  "key12": "Lfxwq6BsPioYUmxZHvchrhwi9SUFR43G2GrG54irZgYHLTUrTHKvU3bCbUcYMrS8wYXgU8zoNRrgLeeJ14SuW1K",
  "key13": "5bbxb7QuTp941gBs3NoEq8WuHuAJvUSPZ7NhBFuUDYUdT9565KzfbDRp4wq6saaoTjdZj6tug3Dp5BeJWamT45gw",
  "key14": "2DbDgDcg1d5g8ogreY6WfdJxjzcifhkGv7aDqAaV6zRNiv2GG6kgjGR6eEMUuL8iFpSMei7x1ZUv1iBHSHFoHHB4",
  "key15": "9z2S5vN2DR8ZdCi134dGe2Kanqyeo35wmQPLLKobEH8qG4HeugiFAqTK76L5zGra1SWWQ2JPSjssGSobbqGVXSL",
  "key16": "64GYuoaPAMS3tQ5vVgSPhJW3r1nonYpajoEPCj21uDhrif5JQCZb9ySrtNxxGRKVGj1XivAF9si62nRPFiZUfV4E",
  "key17": "3tNxVpQyMmZPQwJisUSgdTmtWUDiMjgPzGpxBKMPfCybgiTBkoDj3gtEkywiMRtvjbPCU6KMPHPqYWAgzFyRM3Nz",
  "key18": "65PPEeynVavMjbmeXqGXbSFCPTahgeZN5WYJmn94RsgrU58MsmqLdfPYgkrw7DRjTvtCJrfEBAqzv31MmoQZbjqr",
  "key19": "5SZLwR3yhcNzvaorYuzRFGF7NTAuQpqsXcQU1htJS2WsuXwBKkn3wScTyF1PFgZVxZE1eArQ7a7HQKzwGSyCtMe5",
  "key20": "5C2mf8Wg4zcegCEKd4Nx2ipCQ9cudmFPRoDduto7m641TmWZrt6oqqyRYwcTaWRTkxyuEo41HG1mZhqFNyfpd6Ns",
  "key21": "5v8U3XSK8YXWMxs9Zo9pjTegHLiH95uk5fkMGeJdFSyDnmhsSaMpfYGcr4MyieaeWweLNe4HUfR58NPzRJXyECsP",
  "key22": "29GVMqMB52gxEYbjZDAoHypazTubJHwPKUQFbM7R5b9t4FLZPv838GSN6nyGZnGbY5EUiuAWk1HWGMmxsadzZ3BD",
  "key23": "3tnagrFECJebuvDutdvMjg7sTmwFWcHpzG72NgW6p8vSWMFoZMfUfqDErGTzZS1ZJ6bxNXrDZNsN6DF313CKx8Qa",
  "key24": "2ej3mi2VH7GnzG7T1aZfPEncJWoZLqnzKEio1m9rZ1PBYFfoSbjeyreb1NBFhxuhqQ7cBfGsr47CZCSM5cCV5st7",
  "key25": "S8pdoLApcdkGwwpcCAT4Su9GqrUBegYNgrZZ6ybQfqqCU9v5SMikxC8nQQigV7cRQwXkmJRFLzwgHNZs8eouPx9",
  "key26": "3Dx5g2dpNvdVLUwf7XPVcHWYF69srT4EmsZ1KWdqjJRAU3ojPLykhgfiEUbTCKQj4mzPP8RtNJv3MsTvDv7Shui1",
  "key27": "4JjGRZAZNRPCD3nyuRGN2jCq7sdmW49Xanh9DDib8uu3wSCo1mB8xscR7PshPNpuaA5BVShL9umE1kE31uj1on2G",
  "key28": "5NxxDEfy2zEpzGwgNVAcrZnh5ATWKhae7n6GzQEEU9DzVBCAPA8XiskDcBF8uvutCpMUXKbnyJiEtuw6LTttAELp",
  "key29": "9sBF9NmkN8qob5yy3hfAGwNZXNMmmLMfPiUwKGXYSnGbTKkMhQDU7pe9e7JT425dUUMYkc4XPrgAki4m31JgxXK",
  "key30": "4dQzTvcRkQ4S4mgWeoRfA1RtfR97kFd9FAYxtpGFJpVdyWRoU91ZDhGq9xmJDsKhCDXkFZjNxDe7SReuidggWrHU",
  "key31": "4LfjX2vTmo3DdJLSjbpZgJihUSjQpWdeN9Y5HMV67DxcsTZ6YUv7vLAwyeNxtvjg4FPSWYFi4yNHvD4GPrCm8P69",
  "key32": "dBVcvyC26XRJTzgWxLoUnGafza867C2mamcbmCEcEXCmAcutHWtQoTdhYKBQ6kfA2wXcvzTZdEA9B2upRcH4KJk",
  "key33": "4cmTondawBtzHvHW5vF8wKUK2o35N9FcM93qvykiTvGM29iX3M2Ff4tiTh9HLAU2x4o1qgihyqwt6TR3SrnFoBkV",
  "key34": "64oHigb22AFFHhwve7FbBETXukXZ2M9SAER4sNNnSpHY7tFLirKf78eB8hXtir5UY8MEp1EdUrN8vGzL2FTDqLQq"
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
