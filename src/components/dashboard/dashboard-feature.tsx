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
    "VP6xn1KPy4ErJEo7F3nnomLxrR7cknuGEnj6N58Fm93jpizq8kPFMvFsu4AqoZBHKgcoeufZoXWETKY31g8ULSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSR3G4NXu5FwdX7Lwv1CuevpDc41vS44s77S2pEzmR3Kj2Fg3SsaMdERHQboVR42PZ8nGhiSAWcHFTiaLV2qKFx",
  "key1": "5t7hKgy9knG7x97xmCFKoUSfFR4RNxgTocj9bR4qodh8xyVx2eEPXdJoDSVo8HeLBy8EUnj922DRuxKMbnc2Vy8W",
  "key2": "22U1rtu9Msust3UymQ2WpuZ8UaNQ8WmJRmsXJdY3QG1LXgRYHu5USjHuGjaKExB61kiAY2a7MfubXHx85dQoVYif",
  "key3": "3e1NMJn4fgLBTvasKrVzogGH3bs8t66UwMGZQzPWySWpj7ffazN8uDCuBAz5GcFRTrHETmeyfDoFno5J2X7sfKfq",
  "key4": "3RUdRXocbjar8XffDf1t3DbszGpnSnRW6TByHaoaKqQwAw2aSKsCXMJZyyokXTcGXwoWAAq3vnPyNEASQnr63565",
  "key5": "4KruVTRQJ2RX5n728GxLi48vfygmYRfE2zEd61BJDd9nKFXdC1VxrN2JUJ1CUP85QJY3v6Zz2rKBThSKP3LzMHsS",
  "key6": "3uvWGFyS9R2HQvYFV31CWa3i7KaT7DBedMUwDpWgKoL7JdRLX44Ly7z6qyuCYK2H9sYAhgqTUD1cmbUGC9zZ8rcc",
  "key7": "2BQNPQoe3G62m86hjbMBgudB4Wr8Lse52Xs6cPcCorD4pXLSSDCYkL9oqAoqZ3Nw842boi3ziuPeoySG81TFmWsC",
  "key8": "4MRXxsfKVNp4PaZfBkWumexdQtdwQq7iCNSNYfzbWRtecPikcYSvpx75UkhPzayLkfLurHyJ3MHDmSGysA1X7qdZ",
  "key9": "5SemRyAjmFeFbq7NvZYUdTaffVDDKx8ToyofH9UxRWcL6SJZNFPfumX1gSxTBDvEuxGMmmifPNCfUM6uvS4kaFpe",
  "key10": "3Pig3vJdsUE1deriVosdyfcMhk52Dputgmc8JbcsKN3wVedQXB5H9oZwTEXYm2chwVdQTWRqNLSniskaugD27Ybu",
  "key11": "3CfBcvrng5k1YDxohvVd7u35e4ivWsb1jsiMNRxrgziuf3bLJNzgi6eG5K1wbkd3D9CfeYy1cLjq8SaxsBbr1W13",
  "key12": "62WVAsW7PoHZ9Lexb4SyDAXGGzELteb58PCgWDTPEpmhaegkpsJyBfx6NZMDZ91Z8v4aK1ndusoJTLaNvvKRvZYc",
  "key13": "54mHJVRatfQwTGDnS2iagMvoJZRtUdG7SgTAPKPt27cyR1FXwSVAQ1JBLzPtWMPyhXctLGVtvAnJFaDT62dyZTP7",
  "key14": "qufXq4peY5xfMeYW6XvfkHCDawNCytV2QYHvfiz65gjLfEwn4EYwqfeSBXfsGafEwnQBThXjYTTR9CYJ38ijRQi",
  "key15": "E2CTzNBBUep6tPwceujYeKYwxWd3JTFQK7zWLxPBQXRpzNRuuLa8ZzJpTW9eWvY1Q6DBCDRCSUkmrS1tVXPaYWi",
  "key16": "34JSQ3GPPnnQboHb358vSiggaCJAhYaf2QtANTTTCtExGYLjCDivWidD5x8uVc84aUb2HN9g1zNERsdJ4qMtH7Uh",
  "key17": "2Xd4UE8J6UfNjNokfdqRR4k188F8zfhc4LDtxrueT8wozMFD1engRjbLbPZMci7FnYjJ3qneNJuKJY8KaUP6zt1y",
  "key18": "2PRk4K5vzvn3nWgWSx1VpVkkxKoNfqRRCXWZvSVYjdBRekboPXhT3i1ndkxLQ4HLWEwjNuC4B76EKJQ5J7icYEHY",
  "key19": "3pqMDcbVXSnPX291cYnE8eBdj9cj7GvZ6cAggM6w6yp8mqbKYKJmqifswz1TndficC84BFAx7fSTkfFo1vKU1BE2",
  "key20": "2mAje84zti4xowc6R7ibyhELrrHU5EvHtRvaVVCfdvMj7Ec2zCQXCJJ3ghg7ffHdgqEzP3Qd9WB8VHrFqt4peoBg",
  "key21": "5gbzfUFi1EU9xSvZ9SnPg3wvJkPP1rA3SW2h3EeK5fL4CsLknBbsn4V29GurbnXt5mSQ9hz4J55dkwB8ZaVD3V7d",
  "key22": "5LHyk3iQDgVHRzoraXuug4sFq6pDKAv9rQnLn6UeooxVkQeW4RgCC25Lenk13eqTJxgn5Lnqn9kVz368vqHmXEsc",
  "key23": "3UwrQAq9CEh8YJyahviBhb3zytunpynREefwpGoZxU5SrPMPgECwC5zvzWHA4EMq4MGK4dFNQaiLSdcqts5UWMdV",
  "key24": "5CaaySBwN3HLevRf57tfKrWjUj5XMDy6zvb13uSSZRFKf8VLSGBWgpESdHJuuuHxLVCbPdZSVWb2vo46jPRoyewm",
  "key25": "5U2aZ7o3pGrYaroaZgfVjcpCZRi6pCUHFTxWE4vkD93jCeAA8LteD2dFKrSTJ5xs4TAj35WuTu2rsrpcdwubNRxs",
  "key26": "3rebhPfcwF79bQMhiA7jMGxATdviCvbkLDoHqzvm15Gczw2KEmTRiCYf9H9h8NAfez6SGX2JXBhgkEoLBZkqHPXk",
  "key27": "2BEp5dbH1aKYvrPJhKCeTW3roxiwo3T9pkwJuJCSMox7Db8h8hFnxnF1Wtn7NdaduzjV8yHj5BTSccvXXFQGgjHQ",
  "key28": "3yHLvmHRyWHjPd2d1TzFYeUvY2MDcQFNSwWr7f6kFHUcNeRMBfFnaWnsR9k2fjWxav9Gq5CoEo77L465mXLrXUS3",
  "key29": "ygQiNb2L8tyDGomHpD4GNZVfg6fiAjd2H3tTHfEyhAQg97KtQzmyTov4j35Xws5FvvNqLbgbTdWBBJoY1GzGpug",
  "key30": "2TPJXRQkbtfuLsgKijPBLBXTvfVyeD64rzba1jVbqsFRcJ7B48JyKBZ4TRPqSPVLpaUsCALeYCzrLhumvqsBKkue",
  "key31": "456oSSAsf6Bbyg7bfHyxeDhanNCPGh9DTxVve6Y8nt8cvsoeiqFzwFe28dJjGVfeBiktEZsXbABd9X1TL34EkgqB",
  "key32": "5cSqBTw2fhnRTDcpZDkiFqUntxJFXn1JuDTopUi9mKaMNvLkSAS6iW2zxmzZXiXH1uU9W7p4z99nC4gZZdymqEf",
  "key33": "4NjSLVG3Dy5aM142epmaDainJacmbEea6kLboWT2WCGt6xUbZ7Yf46PHhVh5WEx8v7vVeUGYayxiTaHGGgWBVP2g",
  "key34": "1ZpwDtUSQgiJdmkfjvPdSnMhJfX7VF1BWGPC93LvM37pLpoAGcwNL152E52gWGiX3Mx8avn5iavgubuQ8Xw6RSr",
  "key35": "PUQ8tgiJuVF4xZZgtWdfVQMdo7q7P47wrNzSGPpjp4S1W2TEYmLBazDp3D2vrY9PjUEqFQmW8EBMxVkszkvbSvJ",
  "key36": "3LjSt1FKoEXp9iqHZzCyGy7qpLz7VYQwaxahUQUMeuusKaM6sNzxx4Pi1MknW4ANbHnc1A2nTiXN23XA5en3cAxw",
  "key37": "2wAmd7UYeg2jsW2zHLhFufRHVWm8NxfGApZnjn5egD4AUCYfkKbELFcm2kLhcy1fFk8YD6sbquMqgj1864TpEXT2",
  "key38": "58HsevTtjQSvTjxsoLqR6oUkh7DdMeALGqwSBBYRMNjU5CqPHZ9sYcVbVeEUrVMSDLjTQq52Lz5AoFVKQNutHN4s",
  "key39": "3PDxE1xaeTpf6uZkZiit1rDPrK7ULvJUHVUpTnzHQPS9ZrUDn2bbbrdjVwjWcBpgnjtTZ1egLE5yKXAiZkYutyJJ",
  "key40": "59BuqLMrWT1GUjf3zjnc5S7x8L9ygKyf3DFYVXW899c6ptNupn1LeTxma41KnRq1RxqMhKs4CMYhMRawMnZMU3dr",
  "key41": "3kdM1EP6mBtyRaqLFDxNqZ2V7DNFstYZ57ummXRNpFAS7kRFwNVumND1QYkV3p9BfY1BCRtuCUDrimxEydWoCRNb",
  "key42": "3v5pyR8gw2umVdhMWqv6V7Co8prEa6u1Y8WUhZtJnzpWuSCBS258koqzEcXvr11pC3RgyWu7hCUBWzsWJE4TmcNd",
  "key43": "XxXYSkqAcwmwSPg76gPHfk4LcffEsML6rQw7mBSzbDjKowzUkUQHkpNaFWceEfDcnqaLcHaUgdaCqxfixFEgfrj"
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
