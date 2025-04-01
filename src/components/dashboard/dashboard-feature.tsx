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
    "SXqAtbDFxE2ViP82PNq3DcwMFpD3zGgYnMngJF7qZgzhr8BPfZna6Hj75qyemrXgP7uJmX3YSSwsDNhvmRQA7n7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8QaEa9d8UEYmbDVGtnaYZJnhvhKY2HCftWQx59YdMGp1a9dPWch4rZAA88Xdse6GZpSLAMx2zAxNgSvmCbaE4Vw",
  "key1": "3UxrwP7LsdvJ2tAVZ1ty21DytxmgmzsHrAEhWQKHDRRLMAGnnyLHJ7SYXkweQtvsPYZaYdCbW22mdtkNarySunJD",
  "key2": "28wkXjShvcyVUkXekVSegFDvvzEGFmK1JfFnrPDjQhupd7qKvuy5T9z5R7CQVrUiT4T3Hkhg6kYc2LfBVGvsLrrn",
  "key3": "3BTCzdF7et4sVw5kLg5CuQKRy7iCGpdJsHq2DMvjgZWUJJ8faL8BNBn4kh1vhVPEL9SEQs6TyLhBuFJZ4gS1Gwvm",
  "key4": "5LD45c8mG4DH5Xz4iWHhHdKWjKLBkrH5XbuQQqTwFTN6DsaWBHfa6HNyvB7FVgPCmxUNqbZu9SSFus8hrHS6ANHe",
  "key5": "47dBCtZsTTgXmee9t3zA8ysA1bwm73sFJWv4NXT1VThLGiy9QsueF5FHmY8pLVgi5r1WajHe5su9vBakRpTbRK7K",
  "key6": "kY3Ji1QscW1L1usTkCeDpQsz1n7kpRidoPk4csPip3DDzBWsB4eabBKQNfvtQdr925o8DZaTUSgsEmdwiSxLDZz",
  "key7": "46uv3LqjJxFYDLRbTzhcc3PapVKPUDNoZuZngPWUXs5APFwSQ6t2adFNMNRg4z191JpKxVVbqMk25v23PKunqAcK",
  "key8": "2t5npbaDqijpRzqVUqHsXY71JRGRGDz3a8XEKsFVGm25ifoMmUnJDzqZNPxbqwa9qYVKNX1KGSiyQidi2AagGoDg",
  "key9": "2hfwauy1k7JqFrWogjFEqGBUrWZsfhU5Ax4LjxMsYTs3GrjDXfwc6RAzgvVfzNxz6u3xK6Cf7VeQ7JX2Cbqn12Sj",
  "key10": "2mrM8nBqxKoV2oa3Pqo5cetV6cngDL5H5m7XrJmARD9eQSzfQBzZyc6mR7E2zQHYTBbjy3FsB9esuMJb54w4YhUf",
  "key11": "mX6tBdN34SyrYgFNxnv5zrWavEDq5ZCMPDseAGbT4Fekn8sgTYJ1nmdddWGcAfKRDM7VWAZYuwzXWTxGHx3DDjw",
  "key12": "sqK6ceo1fhRr32eoyRwP8JVqAFEGpHYB5Mhmww8C853sAkdDMhZgV9fRrjxumC9Kdqxpi14MxB6pyfQuBJJkekg",
  "key13": "3EGXuXJFftyvsVirq9qnnxe5JPSvNZR8BY3AE48Hr19PJ4huB56KoMKBQ2pMUDcoQ5pLnUh3GfuXNF1Jyxo2hm7H",
  "key14": "4FhNUq91LYA1oGfg6nFqzCPhGH9dzQaV1jRyZuAfSxuAzqv1EeHPyENT1YUQtRdufkroA4sTG83vKycwSfGPG6MY",
  "key15": "43w1xi1vQj6Sx3bG76Fi9Ej9FuGVQYtvxMEi1FRoaDYvoyk1wgW1Ko4jt2JZLV1eKXB93Se7ZjaZkhANySRDpMbe",
  "key16": "3Q6pY51SUhmyfmzFE3zAEw232dn2CdCEnbxFufVVAiP33MQt8iuUo4JTPZ2uaUgSjseztogEK7B7c6qxykgFZj7C",
  "key17": "41qrzvJMDicGhZdBM8SAxzLo2uSE8e2sLHFCFFnHzQYpRVde7btNhXVWZ7ffTixAkSzCXaFHZwyfjzJUGnQnFCzk",
  "key18": "5UvDpCKURNbAum5m52ComYzdZf8wGZ5RMsdyS6MhvzMBhpjKt8VrxjHqSB4f3UzFAoAY5RPzYnhzR1Hvarr5qMeo",
  "key19": "3wwDsPubkTAijyAHq84LjkM3DJH2DLyg5TFAjniNN4WurEM452FCbT6Xn1DwsLP45YQYm3tGAN9M6HFmiVjunXaf",
  "key20": "3nfMpVPka5XwiKUi5srprhKWomzppaeeWChe7CmWzdEtpEwSTaJwjZkFh6nkzeFBLL8G2UseceJznCmGHJESPf2K",
  "key21": "4j67cMb4mfQpdXwtiSj3xJsgNSizE1jeBjaneK76nGxCzHspCnv4JdTputNk2SmoVG65TL5432sQNm6Gn63aHBdo",
  "key22": "4SaRa8cYr2u8YxTcxXhfG8V5r2Tasw9T4BxYVPYZsrRVdjB5zfTzYjouxEjC2LxHMGdhmd4TFdzR1ofe3qe8bsRX",
  "key23": "HMH94DPP1t8NPsro3cSCAghLTzVJqC4JVc7DuqwUARJxznDHG2vJECyVBxskw6rguJPEdrHBqPqo6YHr7D6Mtc4",
  "key24": "5wF17xVtfEDeEVJ5nLwpU1tpNbwSA1FfrBNrjQtyFWmkLTbg4ugpBdWLYEoFLdhnTDWqcv2jNeR6bFZgAkkVMZoK",
  "key25": "4p1pfJog6mTh1g8rpvxNykiZyRheVzmUAzHXUNyBRmxwuuNMPkmqSdbLtv1xQhv97FAWXJRXZv2c89cha1vByWk7",
  "key26": "3jVj5A3pVvN5eVPNoqUajDhDccLdm8G6hnPSYnCvvv47bUuToexiHAFoqFLvktiyVUyiUALVrTEKmoJTVwJ2jC7t",
  "key27": "5HC1Meyf4uEMysf4HYCj2s2yJrx1eJeYrTN36DiY48jDBnzZnHkFJywxLoKeqsvUWWwVU3n5hziZ4RvhFJ79odeH",
  "key28": "2eAg4hypKwkynpxtfJUTynxLebuYNZeHwvpixCdBJteTK8Nna2QQwpFigK8kP8eM4XEiNHXUndkjp9pJUqaCcBKV",
  "key29": "2amCYDaxs3YAB9S4bPpAGtAvuNVY6DuVzTcgm5EkgoJz6wXvnUXbeq2TxvUBMh2Y3AMtuzm1G6K956PHGGmXs17i",
  "key30": "44rYjQyXECkfUxbwqUG4yQ5gvKMQnFDj6SAFz2qAQcn7rmR3dAmzncZLF7NMSZCqBdTL157qr9LVbYchDujf52LY",
  "key31": "fUM3bMuHMjLrmbgYiKUmN2KjpQHfkXgWeA1JxA1yKm9gCV99ATRT4uyPD3CQpgnFdm82mzVxA9D6kMNX4eKqdyk",
  "key32": "4k63LVhtZJnb78LpqdEm5vcxk5CmmykBCoB3A2HbRP9uH3JQ1Hj46yCoasWdjuMwUBPqEdaTp9jbCzuyvnPtiNQj",
  "key33": "xmwtgWKX37ZjdM5HBszPSPFxTaKNNku9bSSNveuu2oSjvjKezjh2zyD6SSWQiXQGoJzuUji9tLZBZAt8ePcN8MR",
  "key34": "EhddzEhLAvswaLJTA5qjU2QRY68yX3sXQCZbyaRjzoHrWQXCjMek4UizdHeKmpKMdkNqGZ5qHbvFvG8s6KPTjGa",
  "key35": "3aPg8ZR7HLzQe9jcRctWuSUkcCHmXJfJDDbLTcuP2MpGG24u78PCdyh13AYuH9kUyqiw72UeGnmdDuD5VpEvDR98",
  "key36": "2QftaZWFXnZXneTKo6broGm8hMU5wG5NTPkJk568x3JJUgUW1VBdPysm3ZoDi2KT4dxT4v9E141yX9Dprcor3sLt",
  "key37": "4HEPEbqbqBUaR6oetXXcQuHXQkcKnawxH5zZ3BrSzhaPoLvuWqCohHtfZok2g5AthVHWAN7cFfk7DwZJmHGWESdx",
  "key38": "4MHpxkgR2ZrkZeAi2XH7Tthu3DqG7TbVQHHGW8z3SLQbupfwtphnfjqTpGffy5nJUZnbnoRGnkzH5W8HhRmdEfH9",
  "key39": "LFURxRzz3zMLV5aNtiNw5RZRfrWrVSzd8fqTCr4boWFmLKWP5MrC3wwtsP66LLbi1exffcM7K9Uws4sy6a8mtBc",
  "key40": "5uBLhBbSdMzyRHX5NEnE9HBK22vFKYv3ARaCm8u7yde22baTj4QjErrunhSU2pqdANTjiLS3tos3aCUnCLSffXAH",
  "key41": "4MCE8BnzRjBHGvVUU7L1LBNwd2DWqjJ8B6KFV4EgtrcDM1XxSsooe3GDWKNGQKP7CTLe1hZjCnWsNunTnT5TwMNK",
  "key42": "4mCMsv14tVozS7Q3hXaZgHwYLXwVHDaXwt581NtYEE1MB8EqmYKfZ78Z9gphkBhdfCYaVgSFE8Efdsz98uViPh8S",
  "key43": "geZPNgKp3cjbs4HCRj5zbMoUGDm1A7EUGMNLoVfUJMBg2GcQnyLjrGUhuvTt2sKnMQrYy15awpqqZkcrWidXsSj",
  "key44": "5AWqSXf6uQTuxndoax2Z8zcMDMUdRRQnfnMG91HnPqWdUeFmizn7rKkESBgxEjk6URSAP8J1hWLMg3TpU4jGJMQN"
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
