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
    "XZgQVP8zRGCxfRieoqSPctzozt1A6ha2uQVgGbrh9EGEEEUPgxCjbyuJBRbMstim7KZQvVKJJ3qiZ7WE3Jqk6Lh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dr7j5MrJvm715zNFcuNiL5xafncs2YW7xAyoNXUTxf8efzLQdBH5rtBA854o69QwFGiTadPoBGLA1Brikh8dmv9",
  "key1": "5ArPaZqRxMr6gSkvgBNv79xycf8QVr6Ag5SSUdtjpNwRu1gyQKtZ7TVsyKDmNR5HPFzir2aGDU8Ne3YDboz63k9j",
  "key2": "3qxLXf5T81Xsj6S4LSwsFKhnGGUrVtZQr1eWLH6XTxzkFXaE7mrZ4APw9MNXE1UzvfsetLJeaXDHe2nJQxh7xzLL",
  "key3": "2Ddr8tHQRLyhjnKLk8NPNtgGrGgYGWhoqR3n4WNJcDQC8FStHUD5mJMLtikejVibvMEwQr26GoFevc8d56c5fUn5",
  "key4": "47WtQGNvJtTskNscswbbYMi6az7HfniSViFCRjDaJLnADUJqE3zAtk7uTzseymDwuU8JBMgRRwy5gK8fzhZzbvEX",
  "key5": "4kPprRtnNsKu7vVowX4AdgNq8YU2QA4NLJeDGDB2ropgGgPfKdxfVjgWhdm5g3qzVU7QYYb6E3QgHYmWCimKTMuN",
  "key6": "2CnDUAkucUkQTMtMDcJTf9MNCTRk42YUakQYrzqGgCmgJ9HyPfMSRGcjXP96wPP4tN7F7X79tnQmZUmb2dgYEZzr",
  "key7": "67G2QYLbaSFppEoPmfjFRkVEJcANHBxUSGGMyUgrwkCdXSU9kFe6qRjaLNxhjd7qvX1jn79xvABYQxmVbHtV8wU8",
  "key8": "2Bjhso8QpQjaDA98XJqaCYF4hDCFVzntxRFs3Xwhguq8urdi2A18MhQVD7hhHB4EjVQ2QXe3RKHNpJ3rVKUtJjmh",
  "key9": "21qMp6ppHBFAcoybz2vZ4jHqT2wZiTjEBKdQFiC5bfc574MZZDHYFjLuK4kL16uovQPYRzMmaAZVyunFcuTAsAqs",
  "key10": "fPSdCpCCJe8JL3gge4APNH5vdywyQnyWoYgdv3sMQEXgFnozxpmyrRdZ3TTuRJUN66iooYvXya89d2n6yKp7uMw",
  "key11": "3eQeDMvHGtkBBSaFW2fjEWzPf3RTrwtHse5WrfGdhV8ShxDoNadiDKDqtpyzgHfwofjTwmXGfkGCM3RmshrqxkVn",
  "key12": "4s88R5sPjJHcVvbC5Kg58rropcnEARWmwxC5GRv1mfXhjciZdHWAz5ZtkpYY33Yf2nkpRR98JbbNzpmHuSoTidsN",
  "key13": "65B2a32r8W4t8nxzDj251pPoGFW6MJvs23WteUpTiZDkWGZNfBKGwUhJhgCEWMhdDRRYzwipUS3Qe6AGPGZb9jiM",
  "key14": "4xpishDi6UM25KpLJzS7tthCdUfHTXLi7vtBVUMuyJ9TtuSsD9wr1p9k1wztNaLhYruqndQLpoCvcK9yrmNT76Mw",
  "key15": "5vSR2LZgtYcEP5BryUvaNSLs9EcaurJxm5k9ASHubjoo13vWoHxjjpTkwVNpkEXmigNEC8z5SE9q35Bn8LmSZ7Cb",
  "key16": "65xQKEzpkznpNMGzdAXUJAuw6A4X2Z9QcLFCNvEtkXdbvqegULcgGcXEnCbvU3gC9pLNvHf7QS6BG3UfkgwnQTtb",
  "key17": "5HPGsGTxDKkGCnEcFRgcCkMHoUALUF63uwBLMe6nxQKcDWHe4gQXZpH8YTphWjJzTGAP34xtFXCeNaDQCsbfM6DF",
  "key18": "5ZbsfKnVKtaoUetG9UZGWLAUVRH9A5Vrg7FXSffHAZ82hUBU8cyWpFcMeXxAipKFD443FBWxsZSaSK1pcuWNf66x",
  "key19": "5vxkRsQA1k9csp8DkJdPiqswysz1yNW8ski7vQLvW7SBgkqx977B5UFp2aRjMQSE125XmNHApV9Qp8QJ98G8FdSx",
  "key20": "5aZgXhPhUw91kvQMnBVDUKawjwkCvoGAuUSYcDW6c1idXfm7pnPdmp1dH1AiDNnXD3PJbCH5wWuUffR62XE5vcZ3",
  "key21": "62BQmPDb9nXxnTUKSC3Wx5fw4gSaiuxuvWUkxKU2kmFbxwgTnPC1EXxEgnyt4pv8AdV85x77nYYkY8BKc8GXntAB",
  "key22": "67QrBGkGbBcYg9fDiik797avwqYMPaAyhanoUDQbyC82MBkSbFzPnunz17r2ET8RLsdhU33b91AkQ4uvGHmvqqdq",
  "key23": "35VcT3CodXmLMzNMTaRKwoFsnkvxPwQ8QmoaKCF1PTv7LpPNDNAn5u3ydsmhZJEk1FJRgWDnDNuKXyzzRhu64Yto",
  "key24": "4viyjXDeorhebgAf5zNoMReDbNzVYNxmnL2wPn55VKURBVa7JatsqUsdisiT39wtb3cZTFtZe4ooWzCVNi8sA66Z",
  "key25": "2BRJjZ5m624iRogiu3yypJRJNg4e3dAFvouVxnwoDBHZT1QN2CWDRxG5FLqT4wFU9QKo7oZU6xGRHB65T56cuNG8",
  "key26": "PGqBLzRTpJHq7RYE6WZthrE8yasfyjnBDgJYEbkMZFqH6xhfKvxK37r3V39CnrDgHbhSbpWEDcoFNJTVvDn84Yk",
  "key27": "2YYF8stGeMqmFxWfQwfex29EtqwEhDQFHf92gasRFbEEcyckJ7pm5qqc4hEYg1FvHm4pzjBLoBtupsqnuik4wx6V",
  "key28": "4H7QNWETjAw3DCvWrF9GJz9sHxLgsRDnC5vsBJVxg6r71NxtJTipLhzBeKg3edXqE2NM65qnefSHRJwPRGgCKr9w",
  "key29": "5cb9oz9xkre99FG6UzCPsoZST6Cnv86G1XF6GKjTAcbMrbMejLQSSzHQxsWX2YX46YnqiqnzgNVJxSucrSAD2PBc",
  "key30": "5hVRsANq4dNQpd1U19MgNURVWvjGYMueVK27X1XwGvr9dSUaMyNBNpPJF6kLJbqZANfBu8x4zrDUZufVCtHhyqao",
  "key31": "2tt5LWc3oPtkKT1G69FPac2tqEF8XdMjzc6iUUkANeyCaL9SweFp3x2LPVdt2c7bDimaDQTxbCadwEimkrG5NiSN",
  "key32": "4AzFbY7ciy37Nr3znRT486mHjPwAwWy4HvyxH1Shr2p9SSyGMXaBoghZngZDa6f2tWC7aaAq7FStQmSgVSQpmD75",
  "key33": "2CWqzJG9RZVbdcFPvKuEbpGQGvg4w951jxpGJYmSze4wagWnZvG5zPGV76ETHUvRnbpRYFHpzxayWrUd4CZkjnh6",
  "key34": "56Ax419XHYpkkYA85dgXDDTMNxVeDvkjtCE1YLNf2FYnwsEJw5ptqhRAhnFFzqZuKZeppfWwSvyaYoZ2ayjFtwYb",
  "key35": "26WPvFo9ZrA5qGgRVTf5hF2zuV4KSD7mVefS3dWZwWWViniUSycaVdbih7nvkJYgWso9yvR58G4fCYdxsr9EBW36",
  "key36": "3yxEFxrxMKvH6mbFzYs6hhnuE9iEtCPGef8YALLxvGj37tnchmL2taEhdhikvdvcMMiQ69ynUvaQGRBXRYMtXmxu",
  "key37": "3UFds8XRDaSpBy36RvexTjsXXL8cQrpJeZBasDmQCZovtDPk3RHTVxfcDgn7ry3Lp4CKV2JbwTnbSEXBDtpCnm9h"
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
