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
    "3RZq79R8gcMFoAuC56MfyUq8znKxG3sNpJENES6B4Dp8X6FEXLiS1xPnF3V4z2ascyt19psmgmvceMvTdbZENHCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDcQXEPAopg4DW56x15sihTfUFBRxkocbhpcery4rUf6fES68pKAJ8UCGQaX5wJ3Sq2UVavvj2vyaX1rUWin33a",
  "key1": "5DZMcnyFYAo4MUpAZqqJNPRRfKPMc7uwTVVV4K2phrsnszZTRAC768PEtqAKVXzhhGXuUKh44MC88i6pkdCq84pf",
  "key2": "4RZ83VCvCgKLHAgeeiM3NJapgR3aSwxp9bX7k94YYoaeRecRBXUgAS9v5qsL44CkHYigrR6f7wEp7vbEyqdP1mCq",
  "key3": "45NTT1hdXea6YmmehGehbaV1XwHEKWu95C4iS8PUNAkAG1fgdiffEid7vjK1gt7vMDVa1QxfWgvaGpSvaMrwJGPM",
  "key4": "53BkCg7fJTUiT62aZ3PZNKbKCzC834hoWX1g66bouCA36h1CzMavkNcH89g8LjhsfmUxa1rcRJdvPfU1sfgFrBQB",
  "key5": "5PKk7hriJTmam6reNdSV2gBAJAjUPctfqk93D7jvJjphmMoi2Hq5YTNJ8un2i9Toc5uNPSRm2PE91baufjae4668",
  "key6": "3wkimCjHLE7h7EWx7spgRo5MxzehWaf4tmTCeBpMM8sDDPYmC2tvNGJcTUy6aQwRujf8K8N96rPNzizfK2n2dii9",
  "key7": "3xhmauNLHXg63RbDuRDaDMQ3gU4HpArWAWUkLErX4L52iH9ahVwcMbRVLVTx1HkF85nDnSBHu6MUS9gqfxEQ8CQX",
  "key8": "2gje9278vhiHWzN5U6qrgKX6HCHnH9tqDNt8bZWkxHnN6rZ1tNVu4VnJv3R1h7hQQHpvA8ZZ1TodK5kHb3ryvyvR",
  "key9": "MLxnkGFeYWRHdvPW92Br7F3NEwGLpN3feqVNPwRvMZZC5VDdGrbvwBSrttn91aMvYSDN7dY9RbPyaMtkgZGR2Jk",
  "key10": "3P2wySYvdVf48QK54S42dTtv1yJE7oyfoFLeoKmcCaLTHyjVuTBPkG3jG69k6U3DS276cunx9oivaZz6QpKWeZFS",
  "key11": "HjXwn2DvifagjaRBcaJDdRTyxvo182oNrDjKmJNtdAbekFKBFXK47ow9jEDS6yG6WWCJmWZWWE4XEA1jDRpttC2",
  "key12": "3QCThxyjjbBvyTgSRUQjZux8K4A5URDBWxHoA2xa8ULHNaz55fCvJQDJ2wmrvhZr2HcjWsv46Y29dQq5J686QZYt",
  "key13": "41NM1PD9ucE276bAbXG3jZRB2CLQTXj6F1Rdpk3ipNKmvWzuVJ1XQArXddbva9y7jzk2yKiGwhuX9UrmmkEqbRbQ",
  "key14": "33y5fqaiZaj7934fKNwzgJWM17bPHpMs6Xme3UdfChTZzRNw4trd1Sn3X83iGKtENsFrpyGaavwpekL9PbFHw6vp",
  "key15": "43RxCaxEanbAEib3op2KD2SXw7fjkdxnnApjW7aMAuVoPceLn4oo9amj2pJFhsnWgoo6xdM2WyAztao9VapAKzyz",
  "key16": "3QcAyGd91KCWB3ZSMewAwYteadzsEEMDLfBHpFuYsvKhmXetR2YvAyL3SZn8u5C4qKt1Fv6cgsXbSgQFbrjQFjq9",
  "key17": "2ajuh5xPgqAZoy1nCfDLtQQTvkk2FFTEzBLdatHNys7hmzrfyrfPVniTvFQgdhogQbX9GS4pjbAVhRdB1wLxahgR",
  "key18": "2Qarb6wxbPy1Hv6fSDrf4Q16jDXMC9GuPQZU2eTeqVFXqH8Umd6NEMCPQHZAGFfLvDsXXcvQnACwJs9Vdg2QhtVa",
  "key19": "2M3GYhkm3CKcs2aHDJLvCvtrLnuQRgB1dxqwzkr8gtNzBGfwRBAAMgN5nufuzYXUygR4cAvsMxDPw9n1iELHVgDs",
  "key20": "59rMHgmD9M6nuz4mtnuX22UPgoDX8W7AvSg13uqfdTNj2QcEQxFdeTPMfV7DLBauX2cSa8ZevPiT3RG29JNtkrMJ",
  "key21": "5DiY2SRMRBQUpANMRF9oau9vg48HvnQktJuien3s1ZRyT1uNhfoimMfHa2dPXmopE3PktswHnahkzMRrVNDb46c7",
  "key22": "5vioGXmiUjkvHbwK8FEvZZaoNKY4cpoQRK4RNxoC8nXtF4UFUZuHCdU7RU9FoTFpNQFDNyMf8gndL7eBpgVvbTQ8",
  "key23": "nDzsRfKdnPoPBsXMYpYt1gm9MsQPK7fWorHFX4AVjrUSfepo4RVxukhGaobRBVQCvPxDEceMSKDJcR8XSz7MucF",
  "key24": "2wEPYoL6uxm9hDFkRiZNjRLHJ2VCCtSsVGyHZZx1mbgvn4mdPYQsc1VHjo1GSyyGY8DP3hjgr1RU1an3nadcA1YS",
  "key25": "9Frv83m3XJk97U5U1PuSiXt7BCAKkNUxj1AsgBMSVzhdDDiL27JCKeNt1oGNEfrFThquv3rMTnkyQu9EANXebuA",
  "key26": "5Wp3sSPWsmynVSpR5V7uHU2jCguKuHi2xupNNZ7Goo68Zk2wJU349WJbD2oPdFLEhPHQ5RzWMT3SQKfBjuovvPno",
  "key27": "4xyueWzDWpvqXDHGHgGqnBLH7ytGpZWznegY42dxi9YWNPu1ncDrx6JSEu9WD56Dq2naBDFnYtELE2Ma3rZDB5nb",
  "key28": "AZSQvfZzUDY6rqSTgNKVKyefduRWKr3P5LQeGyGarAeWTHPJVFfWeMW348zRvi5nfbqueZoUbtfZNkzdEnNH6Hk",
  "key29": "5twS1Gn1SvNsLcpJuxLj5RrdQMSkgQGyqNcxf8jNWieKEGKTGWHD5rggsAXjupgtBGCUnCrCkg2uGcWQ76J8dcwG",
  "key30": "3pGxPnkWAh6W625ST5ByH9sH4aUMeDWLzZc2AwxW7P3qMcW24nL5poLzTrRsYxNXCy8Twwc6GDtp9QbxDofMacge",
  "key31": "5JRVGGXuY15GVc35cnTRNQP9NKK9gpbtcgnTP5MLX6ygxRrn3DQFuK6Fyw4nUPVRfanvSZyHDWD4qqgvH6jsBjNw",
  "key32": "2hpj9u2r2KgVuQfu9CFyiijR1q7Qa9gcFPaqAxicDkXhfWcXj68Uudm2jMjUc8S87YUJx8aow4dFks25VqwGh2m8"
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
