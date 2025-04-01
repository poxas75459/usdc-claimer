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
    "kuMcPTMa8VHrAVCAndSb6iTvT8FF8q3xbu75rWpVBoDfQr28dLNuP4bhKgUz1dXnYwW2EXYkaB1CdFZSzPPhwb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pzct8XNdoi4NbV5WXaC2v5gfgsEqKHXwMkjyuNfvXuUgQpah8nBVRkbEMR6zpySSN7wzxxGyoscTKgiQYrrrJBF",
  "key1": "2RQ7xrR1UBUE1BerZrurxQNy9BbA1oDnP2oSfZAp3xnSoZN83JBdu7TJa6gEzhbveVkcNH5oCxrNrcF8z8qqPXkE",
  "key2": "udeErp5Js2FnMYx33G4bDoeZg8wyVLTxUehojRykxjsWk7yCwAXhLu87oUMiJcApGvfSvLKwArbuYaLJ7D2NETP",
  "key3": "5dbwsNaXU19JmrJP21R89Lc5LrmJgNuWVBdVv2ovFC1x4zrnCVuFrzUsVwuHJeAJzjgHQ281Yhywzey4NeTFYYek",
  "key4": "57j12pB7wEDsxYozEWAbRMEfkn4cLqCJepcWyWLR7rjW7UQpp9Ms3BYp41q2Dz9kk2fcfuuGatgpNrk3CZjyEdYo",
  "key5": "2rsXXrGz4dvZ3oMRqpQDwEUxhRtCyyEzKTwFsdKuuimPWxTQkHAKrPXHWGW3hAUWUd8yAdXVArt4VQh8QhssPfCW",
  "key6": "4DZwH3BSFMUa9FnadDpy1yuywAj696ZeeD8Ugkcd9m4iAZCyL5THYD5unfaP5RgoKY6fNhBDxoESPusQRG3TL9Y7",
  "key7": "22h6cs7zLafUwZMUTEXNwgESk3Bi9CxbGPShhZ1D5JiyNwNraFS7ZqgaCqLmJKkAKGWtqUMk8uGWS3huTwidctu4",
  "key8": "4wFUMDGN4JHjxFgWKxmwayZmN7nzwYJEDir4wuz6evsxLMsc4fdzk86rHfDAZqZoh8LJdRd1SifCLfMvrS7CrTY5",
  "key9": "91uVH6CiNURBqiC4D1DhCPXqy7vnMxme5vnoHjWD4AZ23sVSg2s92SteVrddomiPxmhMgrfrLqKox9NJUZPj9kY",
  "key10": "3J1xtaFaPZMVrmuKsDoLEYDmkjAHmESs3KgMuCfGvPtLKgZ7LyR4jbUZi5r6H5dytscPGGTfVZMHVWqCqr3DiW8e",
  "key11": "3h7LASwwxPfGERKE1oitTr2vcJ6g48tgnzVACeZFL5hcmScsfB2o5eknWr8Bz7Ni2zFub4nTDDfB3QKhtVbSWJbx",
  "key12": "2ZHLZoYMooUhct1ZWR4wimfkvzCK94g5aNyNWmkP9571feMmdqnSW2Xsi7HyR8FHnUzX9hbBoHSs6DP3ufaaJyQj",
  "key13": "4f5JDUnpyP2L54GkefXNkhBoiqkgAsv3JfAGcbZFVHhLSHNJ8RXKNefVmDtVX6DEgd1Ac1KWKKeEUu2kypTrNQ2x",
  "key14": "fqznazEMyHGYhaSkh8PdS4eGj7CVYn2bRCtuouZuGH9oDA6RN4kvssfx9Eq8sw1f4rpnF1gXEnegbXujG7V7Vvf",
  "key15": "5oKapP7AJVEVe4dcbiU1rk2SeR8WSQU6Mtszh3M67iT7Bkee3K43xWuczrmiYfksrCuqp1J7KcoyAEgCXByrRxjj",
  "key16": "2C3yGrCazNzXHtdFvwgXXcDVc6GVkDrNK1oGad9S8X6LkHkpPBfTKdBJJQTux7nsxduVexznXqJE4mrvYVtuM9XT",
  "key17": "3DB7QuajV2LAX91Ys7MyHh8BYrdomPwkXN16c6N9YM9SFFne8hY78SmJGw7i98V1HZKZ2kSoRu9NM1eHEhR8XxBS",
  "key18": "4sqznww1Wtjb3NDuyrq95LSNbEqX1ZnosaCmgfwiDmZPaj5VUPsvqTUfqA1u5J3q9DcDJUeRvuuUg1JncoxY44Lo",
  "key19": "3K4YDs8J3wpSFhy2zM5FYNXivNwuzWZWRTTQKYn8rzva1AQfDrTxdubj566vuqGRfhh9p38Avyrz6eci2M8Hfr3e",
  "key20": "2pduV9cayRBXKpnsP5gvo744NLceAxZ2dERQL8pPVwHYG45ws4QS12HJwuE5EzeDVk78yqXCPimWo3VpMUpLMoMZ",
  "key21": "29664KFQCQVDdhYCrADeYHP7xKCUtji7S1tgLQJsnvzZHtBBLWd63QYPTu59X1oJFA95z9rcZssGy286yxqWESZc",
  "key22": "4svcYnsGg3yR61weiBJiqhZrqsg7HdUePEh7YDWUv8wcxAzCUmSLyEnkQKvBMzPKPJxJAqsdDLoEo7yZ4iCrzQSF",
  "key23": "owRbiXz2AXWUWiKMimPEBbNXgjtmY2oYwYk6Hj8iP77a4ZufnqmXmZSKZzQrZ6YLMHr2qMkDNrC6xRpn2jJrHX6",
  "key24": "3dyJzYLEgMunSvetr6yKmB5Vbv3GPvRrfQV8FbyiEDPYbEE1d8sJ2dx7acoVmWh9RDhTkoPv9Ph4vHAaSNH8wuL8",
  "key25": "3eBrX8RTVdi8Y38DTqNoqA2NZ5fLgzUa2Lx6pQ4eG3CLM6NLZo38xnvPDzZneq2VBvRUaR7vDkksrTM8inFMcPjn",
  "key26": "yMH34GoYGGT1DQGkTvCHunFvMH7HTKaKwwbJEmMdmD4anv8exaofBfVRXJCoqCbMokwCG31sd22frRgf5G9khU6",
  "key27": "bqvKtRoixA4b2oWREafbPPgAia1HCuZ3FpRUxcqsM6Uvo5e63zur3XWhxrWRMF3i848zJMCxW4gSJTSofBucreT",
  "key28": "64DXHQt3WXBd8ScZucM8utLypFUrNuPzefsrTcjsiJTU56Sba2CkN6N36yQ9qZk7dCJLUfAEGj1sTm5E1kkPrvLc",
  "key29": "59vvTjFzMNN5tPcPn3NfakXvxMjzjXNSAd8W5CTwQ3dCpzxq7D7156aWXW3zeM5UvCtpqqp4Ehh8xyU1JWpZbJpQ",
  "key30": "5fNBMGpnbCppeRufXEUDFhqrsMJQtrZWWskPHgettettMTGoCW4mwiFCtM6jrsAZmY8m79tkrjMh9ung7gQwKKUB",
  "key31": "3rNiZJDbEEoYoY3pnN15gTKLPA16HkGQYBePBYVgQfP9tqFW9N3pyopSbghiq1TZR1AktYWeZbHRiRqknsauiJ2t",
  "key32": "qsGURNLGfPZc5eeezXzofvVC89JcxiDbtdShrxBfvvqFGVkwuucV9eUt2xqxTy41wmTfCEq7M5ggtGQsiGwYGPD",
  "key33": "3mvNVV8fTF21BmkxmuBBAELVLmzEhPaR9npeCiwgAdPB7Dmm8bpmFPeHSLxDCxyw84oUYMWLVW2sUJqfsCPvDiPe",
  "key34": "4ArpSicmmrn1sb5ibKJTLiPHmtuasJ11LG7oREg2vRYMBZTxVfStfj46RhLQiKyKEhT7v4SWodzBZ6DagutWBt6Q",
  "key35": "3LK3aAFhh4qcZAcErRudomXPVpLBdfHWXudC6wUXmawVQgAuGj89u2Xp5RmkZnwCpDcJPNiHmEkfzbMhBmxRkQXW",
  "key36": "3QLaqU9RbVqNGy5riAgNGd2HUShgs2s4okuSgegcD54KWA183g5jnLU4bjVrP9Xvwtcr67h2udPPtwcn3qgnXvUi",
  "key37": "5pvxaeG8XDwwf9RnUSr6Ec9x6n332BDbAc1j3XgDtUWqm8S6YKK9z2FdDoWEeyNXB7Xa9TA2FwuNpr6MM4F6EAxG",
  "key38": "2aeyrHfybCPuNqb6kphYUrJEji7SdATuuqaWjLhpX2zP5MFN1iwiCg4HsJwKA7p2yuZocXere46ZFDw7Q9hC8od6",
  "key39": "Hr9Dxt8bJm9wVndAinDr5bkVPqniFHcEpTZK5LwQNSpscPo2thvAMd25Xfhgt3y6w1tYZWM8Hebz6ni9MWNz6T6",
  "key40": "21GfN3nyzCoHSMzbGRcFNk7ZwxbtRBXbNjJAaHsjB1KmxXqNKz4c88iqKzmEiVsTW5QkgsTq3fd7NScVCj89mhDj",
  "key41": "4bQ16kXdQenhaAxjwhPFT1DkoLuigSUf2bU21L9DCtTh33BVMZRCvDPyasZv9QmfKbGMBA5F9gfQni3gxQwyjrp",
  "key42": "362nMw1asySwUyyVLMErmgpGCECPovsPCnLCQh82WBHWTsdAwtResCuYVD8hGJJ8GQJk9S6SnFrwF1gkPXKuUQLt",
  "key43": "3NPg17T4kntT3GRiUP86Jmdtt9otwhzh5WcKYprxuAUg9tc6k2Cg3X38gBdbfNN359PrXWrmcqamwjxfKP49k3Tv",
  "key44": "2qs2K3iD2vRd1L2F4qEeEU62z5QDjt32xQBCDewt1MUDRL8Co9i3adhFth4aTdP6ck2WFuJL5g4P2WFR56pujBtg",
  "key45": "3k38sa17RvGeA7YUfYUwYvbpxjNk6z9UDBeGytm4M4eVJCH2gAvqE5dcVDV6QQCy3Kc6ii5UTmbpFZ6hD5Tydy8G",
  "key46": "2nPzJUJxsJrswS7BG9fHJGkWMP3Bqef7N6vLvvq3mysHy4VQb5eBtKAB9qhJ981ikgzGW8R2AA8oef7WzgmaeL6i",
  "key47": "2zBH2Wh5boxvs4egKAiALY8neXxG9PeKb2d2dcxWEknvah7ioaAofVAzBVYe3ve9HxHqNDuusGHBuCeLNvPg8SnS"
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
