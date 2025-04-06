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
    "hE5KmjVdC3LcQ26AYgQmGqcougtcS9yBm7gVGPkoZ9qrGhrLysn7jbR7wgSozs2BgT5h5T28HP2S1zqqV43NH3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cs4PnxTQMWYRr9uGfpGtqvqNg2RC7HceZojBBLkDi5U4TMhn1sUfw7FnmfjP2EYUMRf7gjEWuynZ9QEjujT8rAS",
  "key1": "56bAtuexfHxXpiz2MbW3G7QELwfd7ZeuxXSt1Rz7ZGLTeTt9U2oSdaAGpU7M7kyq3ZYnVAFYKTtJQ8vCrZbaLsGJ",
  "key2": "2j38vARiaVWg1BcutMv7ed3gZeBL12S8kmeK3YiKAtW5M3qGBbguBuKP7fHKQGUiampjyuro2acvZk6Pb1cgu6cv",
  "key3": "57RGcp3FFWyJrCT6pzb163jV687J99R4RXofA9AC2h6S5R3yEv3afX9w9xR125rNcoyrPRTJFBMpQH8kJkjVLd7p",
  "key4": "3sssPs8Tff9e1rsfeAfw1LW9b5UbnyaZHDoLrgPKDtgUVTS91uL1YA83BUuxBjWRrMnZhJBdAkURivoK9twckEsi",
  "key5": "475t37R1Z9D9YALnEUGmk7iSPRmXgJadwTUfiXE2hm8oXSHiNzRMS1DSiu6pZDz7Ex16ti7SKohSi1pevjQs8R9x",
  "key6": "3HTmg4DRQSrWa4JencopVi8StrpmPEE1fm29RfbpnLjufEhvfC5Q8n9gBk947owzQqwoQRvoGjhNNjxkJvuJZza7",
  "key7": "ubtyqkyzbZDXZZM71rZ1QAWku9Cn7FRnqC2uyA2geine6D927Kh4WipY3mGff7joHVKwYMrpzoxhE2Jvf8Rgqae",
  "key8": "4psCEwRqESd8eJXpdrv651fYejV1gXfJ9S4mJRqG249DQHVYm9YovT3dLiN3hwmA5UrLnDXXc11iZGnpWLgSXvP1",
  "key9": "2VYt9yTcDfWhhmSJUGwthdKAv7oKNgyLdqLLWKb49t9xCR8wZVXA1Q5h6aeoF3Km9jWktRQ1co1DtYt14aEHV17Z",
  "key10": "31BbrHzHBvXxRJYZDWSGwXkeaDmDRQkrFB9zdiz3AB83bNrp53aD2sXwc9dLZyyfb2Wz2onGFZUNMvxqYQRiHg75",
  "key11": "wt9pF8W1phqvtry9CtxmGNE2VW59hBWsTUs1pPpNtQqPeSmmKG3v9WBhwe6cAS3jxxnK87satKsYQeiBdaqCgCr",
  "key12": "2GPvKqc8xmtfUoQsxnYaAhdmPRphAEgKbovxw3crPqJmtciKd7QVNiQNBWVrVfC23QiowFquVsghCk4Cjsc2th5o",
  "key13": "5mQPfaM2kPC69JK6cvqx9QRrNJWXjSd29spKWFsKsiqcwNxYHHMKXEfzwdnTDNjfUV4ats693aBsi8Y48zk5KsY2",
  "key14": "5pwgcPZeZpcJYTFeasUUxBB3Drxs73W3Fft8aoyqEjrrEW2bWtttUnyJBy15AtcVT4RLKgRJNHa1hzNBqoLvKGHm",
  "key15": "aaiPdT5RvbcLok41Vn7QivA2RF4WZuZCAa8dLEosd8xBzkrBYaigeaxzaxyPeEokJ5HvWAppuVfg8q4TfEVyryV",
  "key16": "2D11VS1LUFC6JM6izKxnbnZuUBSPaQw4WMp8t1WzEAH3dVWtiLXDeFttzV2t7KzBGuDco83KHz9DsNSLdU2T7Qy4",
  "key17": "2vFBBBNfWAeVpZNAX9dpzeYUcUv1vHGGrXxehwvvfqX6FZ6TgBk6WAc8XBuPVSkZDMeBFKggCTiWW7m2bLzJkfAS",
  "key18": "3QZH6315Bq3vKfveQHvqH5nK1dXTRqPA2WCazqZmkWXEuAudpX7JRa5garPxjZvYvfBGWFY4VRorYujcNFtxvoTg",
  "key19": "2k5veEPGJ9DoqyjFgV5NnUooa7JSDf2TX4c4RYncXaHcuXLT3Xo1XmXyHk2ss5QqAL6Q75MHhfpntCzVtYzYjdKN",
  "key20": "4noW9YFvf9YsLoRM1FajUZ9GJPXHr3jmFfWDzrS8UxgKxmcTyCMSQyApeK4T68Df9hzuDLJFbQkZApPxWWswvYfG",
  "key21": "3a6CgvZHLHVGyVAudEd5KL4Ue85x4D8BcmvfTnavjHh1QQ5vHhBwpUCbPVbMnjZZC16iRkFoJyGU4tYoTdYknwz8",
  "key22": "3kGjNbyXzpEfZZRTM9vpq38DHEtSMV5ocRsbEhUbgezrZLjp9rJK5d2gUWqtzBCcbvt6hhDkbNCMeZkrsx1PVyiS",
  "key23": "3CXuWmCVMyokgRqHVbT6JL7WEVs1DxuTetmsHZ7fAwkrRGpg3wEzkAEc3ASfV3CKpXReiHUF2sY9G9pjY5y3i1kp",
  "key24": "38bHg6YeCjNe9tfMfhgTME4urBcAJETVXoUiSAvKxaT7m75jaa2nTefeZJnnyfhw6ae1gnpGWu9ve2N8jRN8wqrP",
  "key25": "5sZVtwZiGUurowwBBBPaNxxhpAzvoQkttAasxrQjRaCFf76TjegytRaYbEQZt5f2Z1PRcy9G4cZU25QB65CMixqm",
  "key26": "2QuenqVWpyFGiy2hu4ZDp8HBxEJsJ4E6Qg7WaaNoWMesJUsi9PZx9Xb16wGyHnuwnSe9ttSua4bw1hhwnQFguysF",
  "key27": "3uZCYB1qTmUjk2kXktTPcD5na8gajGB5Cn91ELcGxV9wm19R6WMCEPm9bEbK5V93GfqbZT8o8bVvsRPc9Gshyxyb",
  "key28": "56d6TpRadDj7nbscihVWYvBShwnLcpNZ7g2z2g6h42pYPGJG2X95LR6dDAwkvGZUWPY9iZR4B36uZJLGLTThAGMe",
  "key29": "22quJM42xxSatKUD9NpqUfwEwtXNErcRy2JQ1TtADc4itjSCUcfm9xRaJ4dzFiwWRKPvpQF4kjcgXMMrzWsuB2nn",
  "key30": "5V3BvNtSG3oBk7GmJ6gFfheyCgW8qv2dPrEBVQockUrfCNkiaaBQrayTQDdjPpzMQtUb431aMsNbwhjvUfi2krAy",
  "key31": "4uRFTfdwoVEes18hcDLeVZgnXpRb58sStbySiNdPwpsZe35wMv4SQkNgwkLpRi9rt4AzGWPVNjA3s3V2nmoh3gja",
  "key32": "4tvjEmen3ri8NHLYK7vvYMV3jvgvAyUBTKrdUHdVVU8BDPs4jMC2pMpd6V4uETSj4fCdKzW2PRoLHepdy8hdKt6N",
  "key33": "29iSKV1neMaHkrmDxvem7g8wzstxvx35JRWPssBvRi8CPAw4KSaQhmsVDrzeMHDLWvcW3GNMFCQyrR6HDBn5xzTS",
  "key34": "5ZhCkv2tktTbBLzXYezYe3frDeBcgEVUiwEccjGXsBK4eUR3edsN9C8F5t7rAsNhiMXP6ztM7X4Q6EqoxZfz7Tk8",
  "key35": "4SrbV312kYKfbPHb9nBWY4CzfvQorTqj84t9srygzUnYbMbR19PMddCzxSuv2YfL25b41aYGEQQSKdwDMZYoasJs",
  "key36": "3JwQMWGeqJanskpRFJBz6XwbcvDCLCxiagCLgKS3cUJVmA9Vnd5Rv6HXqPhmSybL9UBdUfi3jXZ6TA6JvroWTmyK",
  "key37": "3zpf3qWENW1ZgxzDDTLS6ptcdMDiTPQ1u8QNaiDXihDKwRCuY82jcF7EJkZnqUHTUWp6RBjgdkMQt4TjyBGHtzGv",
  "key38": "6mn5aavhNyXnvUmQMx3xnpJJGbAz97FYYtVQ3P75aMv15Y7g2UwCbGU2uWpcPGCuZaHTbYegXPvgVedxpnfLMnv",
  "key39": "36z8oDcYngEpGQPXxUC8FK4mb5LrFe2TDZdJuRDMZ1LHFqz22745ymrT3Lj2k9EQ4sNnBnf4jHjKmdbJXJCtYQs9",
  "key40": "2P24P99sx7pgQ1TfR7ZM73DCEPjnvciAKefMXX2xp2RLY8Dxbmt4Y7zaTw3F5i4oWDT9T4YVzbAoGnis5jRej41V",
  "key41": "4oS1bebcMYeoqHZeKJB6UUwUCPTapDKAar2FYqVo37QK5kSAqKxe7E7jrckQyFjKJ3E1vfVZ7JpFC9HQ9nrbpmsD",
  "key42": "4c3uQDqSawfB4TASNfWFYVQYMfANYXivxfdnX7T3sSNPsrGvetVZ58bg5pMkeKbn3vTjU7rFSUHLq32JyAgQFmbz",
  "key43": "3Sv2dsKoa5b38dk8frNf7efSbreU29QXcQc2zumciZjy3J1xVw68Tokun4LdtZbYx4uq69fvBYyDXLhyoQysEnGd",
  "key44": "2TCYkeyXaLu5ZEDis5ou6m6zvRhM7knFmzg9Wx5Ch3ugZtCDTL6v4nNXasDXREqrKYrD4ShTByDgUzJqgYwe3Jnj",
  "key45": "2CsKiW8bmFMYgASEauN2arCQ8VK5QHiHkWbM9DBYQj5Xgp3L4kLFtTkoaUCnKADmryfqxPimsQSP1PRHQHQNnADs",
  "key46": "3To8T86zAMjBv1HhXjuJW9Ciq2PZMTQJrA1281wBUdakWUGaq4K84uWpkcPjbZCNLQ2AXFL1fn1W2W2gVz27cU8k"
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
