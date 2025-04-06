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
    "3i57gfAbQ5ypJpHt9XDDDPYhCBL68YAv3aoGDQ78Tjb7hBj6tnV8ZSqV9AFTbYMdWVitTUtNQNEjGnAJUnHQJD2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQqRHx9aggp8yrvopFm2UGki436e2qvKWC5dX8ZFeWUHdH25ucpZxXRVXTVpu5K2CMb7awCQiHEatW7EGsWXsfU",
  "key1": "3GsZNCxSJ4aJw6ZQyKXhwoYVSDfJjCRz6HCukA4qh5P4DehMQP476vdd44k1GSbjj89kZC6bLm8gogJrwzCXUWMc",
  "key2": "4VFL1C7Sk3R8wyxGjGkwvmDmCVUVy4z4Gb74s2ZAyYgyoB7PEAs5DtQVTggtu5Zy15zeEXJb7xPz4Dw4N5Xf1DnA",
  "key3": "2tkHRj4YUXamNpJNDGRLJ12PNmvSWdTNqVUmbSbyDJuy6Car8RtVjZi9bEnaf58kkx9VeKGNfbpjpaN4hMtKxyue",
  "key4": "5Ly3QYwT2kmfMf22wBPR7VqXNkQYeDmnykBwzHhe1JWkxVbuc9JEkoAbJiCKq5UGgyNa2Dy91AGYvq5ApJRdVA85",
  "key5": "3RYS4of5Ei9cf9wM7izGtD4BgYHGSC8mU99sWj4AzXS3RyP8iyuznV6vHaxzqd1o5PwVTkFmthixgLRC6H8JuvwJ",
  "key6": "3ianp2e69BwismM9uLHWhQKNXEzMzk8TkVf98mKiGjKQt3geFVAa7R4AM69n2ndbMLgEHVxFm4z3VSajgWZBeyCp",
  "key7": "44fxH3Fjvqu79Q34k2HK4L6NxoAfsiWthbUECLajjfNFEMzebtZxShJmBdY2cpny2xfthsRYEWb4LPEBR8iY7Fgr",
  "key8": "5gvAMrBEvP8YudfjBH5ji9nVGNSmo7poR3ouGbmv69wXWBJ7N6wBZW1PreaedBhNUMAsWWPqPvzjtV8D9dC1aLCN",
  "key9": "fzzNchGhATwBfimbUNY116sY4Ybv5ucX9un4DvvusF9X3KxqMGWiQttxLb7Gvj3Ng5XdMDhWM2yAJuDeCistw8d",
  "key10": "F1PRcSegquZZbnu8UeekZorJTbNczR5Ge8hkJFr9xaUqcHjn3E3MTtuoHfAfqsc5DrrZN1LtPGcodpbEyh9dE6s",
  "key11": "27SZZKqJ7uYGuJNWinvrDXWfQwG3ogvLCCCEpJc5qCcsemKSsVZmfB98eN7FSe5Ji8BjzzmDtYx3TdR4vDEHmgg3",
  "key12": "5gc2vyi2bHwXGBz9aV1tMgvqxucypHNXavDwkNNx66SaE1Ss2fet3AjBny6Jh2GwsyHtWdwHX2t4QboHhfekvFHQ",
  "key13": "3XGPLbnLwn9iBxn22mwEbnMmrW3tvoKu1fs8Vts8StSXrKuE7DAs414Pv8CgStXgzMckGRoZnB4fDb6NCsdxS4X7",
  "key14": "5dR96E86qDEHxPevvD2QUi8uW6FsmMidxq23ZuEjh7mfWkJN58zC628fkrTSEopD35YXyW5bg8BdawVCYUEog6YB",
  "key15": "zFGrq4g8cC2KsSDTFjxscjjx2uSkrACXr1ZfLKBWDKppqwG3dMPkBj3DFiuNpzhjjVW9fLMmDWsawScxqNtCshX",
  "key16": "rC4ZUAyJjz7rTHYf5h5dzFgz6hDdWHzMTZt5GwFwmRgsoRvZfNhC1Ve91kTxH4Kj9RRDsacHFLsRtqPQv9sh4fb",
  "key17": "45n36iiA4RjRwHjpFZ7mE7z2LgEJSCZaCNadcNZqVNNdqVRyAV7Q3L1SP2u1zqQnZAvq6iRcggLuJPzsxptFj3VX",
  "key18": "4qjVgnx7ndtkCfUnFNyoR5xrz1rSxC4msVryfUHWEvNrrFXF1vbLdb5kUmL7tTWe62SaAJDAqK4iz37Zm1M2S6jP",
  "key19": "4eNLGSpBjMymfiTBtEvcQikGCWkfQNPMPqQhwm477qubr4X9zAAFwKnMjDfWAK6cyJyRGZX6TDXtMoFcS9cDH1eg",
  "key20": "Zn4Q7pwWvxf5Dmqc1tHmbbWci5Lzpx4JSnEWeP1WrMWkmFYh9So6X4993WTehW8qcvAY4g6CMf5yRbPoe65Fnw6",
  "key21": "34NXLiKPCFrnDVEoTphSTgsPcgNFEySMFuGBKwfzDdpAbkR1ub1Pw835bhMnc9dv6wK7NXmp54Jd4QqSZKgdSACi",
  "key22": "5GTVYBmupqRX98SsMfqU1ckPoEzGdimwYxoM8s4Do7NMopPrhsKvA4LzL9opA5rVvTbriXBXMKMZ6UFMaR81HxdT",
  "key23": "2nGnyZcdqWvZG7Z6x3yAfvAxNC2oxmbMu1MyWjhsbPB6DrSvom7CyrDHMzyp5fsKzrfwCfexEtDA5wWSGwz16xEc",
  "key24": "2wpyi7LE4nRnU1iQYczXxz6sWw8xkvti4GFAizrVRUV3g7sqyD4RbVhdnEtAzHViAgEiWpZ3EDFFemgqPfDrenZC",
  "key25": "3T8b81ANrTZwgYKpwKvGimnviMm3fsSXoy7qmhYiT8dm1ub4CLuJQVijqPbzFHCnkYaB3RKMaD1wQhTyJDMj2dBa",
  "key26": "2zFzaheQwcWSHcLvg89r5mjWndyLe2XX1tqWZFmBMAjhSWbSkPnjYvybQN9DovwroUZmamohAzWywPkrZf2nxehg",
  "key27": "5Aee4rgsWMiMoyikxqtUvdmcuskocMHfATVZLxXn88cajKKR7WfpGKDuB91rg5Y4391kS12gfmJzdGUvYj8f623N",
  "key28": "3MA5vh2Z7tWLB4oqY9cP6tHJHiCdotggwkF5jjEBiZ5xn9EYYqa3ABGMptyAP6cDpnCMBLr8Vr81n7oEdDpZMSnx",
  "key29": "4sgvSZ7bXUGgrVKamWPeqXwQ53jauviwUoSszfsasXzvZyhbbcUSBuUhS1cGW2Y78Jv1Bu9D9DKt9nnxgp6vdvWu",
  "key30": "3ahymD7EDuijdTFqDLMoiY3bnMfrgvZUTduQrHYBvKrAL4EFtFWPZVYwsAgJ7tkcVvVrBw1DbYR5Jg7XJKvtSahT",
  "key31": "3yjuVEss81X9C64pY31DtfZt8GiXzSL2pcfHM6UUJtfYfGbakZRVoqqQgMAo1DrynrATNWKPJtwVnHEEozxPgKWD",
  "key32": "2TW7UbF8BqmzzMjMMXFb9PSvaphjj44vzkxjfkB5bYKquB8oj8Es3GwMgTvPS5AqaY1dCEW8d71Nx4GYXMer2PRM",
  "key33": "NzAhun9dxiXwQShzsfhNZjni9cW3nZM8LNAJdz2WxdwMWCfCYupo7ea9YT6Mg2CMmcZUwXoMBEL231KczPxRybZ",
  "key34": "3H4dZhYUNv3k395bj51imVn3hUD1J7v3d6HDXhtEFry1kqCmAq1drhSrQwSJDugJx4yCY8dN8oAepA8gh89Jn6Kx",
  "key35": "U6GHYwxmeMgp2fUNjqzVmUd6ck82sjVPqxdEZqgCR6GmqrjCxN2tNSp3Fh1ThggUFq3hMsrbZxdyHj3u7qKTsTx",
  "key36": "3fHeAgmaiWALf4sKxPbrM28TzyxaDLdmLFrH7jESdWD1yGvF15idkcTiDUapVrby6rxet7SRvgaks462mZctyZk4",
  "key37": "5BEbj7sxCtpRxdmRFxMp5HxzuryBaeuSpmtYiQBCrhm3SsqXDPNDctH7iQD3sVdAjfYHr987vChUKh4sjjJtCeGZ",
  "key38": "2XkL5kVuEPNiroawGcaY7NSTLw7nYA898UQbnxToj32EJC7MeVQ6vR9gyyuiK9NWccLcNN7DeTGq9K4JQkARyZGs",
  "key39": "2DFtmiuwtpcAyfMLJY4N1CDbTpYU4CFWHdwNssXVzN6Xa8XAt9RSgqrsW61ke1nTeUNgraBaFLMuCGkSJqXMA4hk",
  "key40": "4WBQ9oMkvdUFGWyR92HirDfQyhhh2FFSvcpgoebc54poRsbg9oR9yb6DvZCs8fdgLtavzqQmYKejaPTXop5v3eVQ",
  "key41": "2cPuWF1mgBQcCcEXTfAyJn9ue9pNdDrQJU97TCL6XZThfohinufwQroCeomDFxUjbHXziSWk6QWX7ZDZ4H1qedpW",
  "key42": "DQjaSdqqHzDB4LcfcYbDA5h1tC3hwhTCdciogXg6dDqk3mpLqcv11MPaSU9Kip4uggE7RvWiPRQdZ2VbEX2UrGg",
  "key43": "3E4aMecG2HpT1e1hVuwEwbdgb3k9rxgNVsVP2UNzEPNCgVnPg23ESoj6k81fgjV4nMXQFmz5yXznS5KVu68uEz3i",
  "key44": "5Fx8f3MvNX9EpJAjtnoxccf5xbbBSKwuLwRNjtWaJpX8ZkmgFm7ehmo4K55ZAuzwNyqYRuBWhQsCGtbbgJjbLpFx",
  "key45": "2RCmRXZC4CWV232Ty8ZLr2gx5iTyy52F2nTrWHLkRvDNjwG2y9gmvv2qvyJrnVr8dQwEuurhs27yCTCuEKLJy925"
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
