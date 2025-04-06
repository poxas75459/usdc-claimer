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
    "4h2s1jqJ611sVmjGCgNAtq8aVSgHBYHavKbgRJ2rApy3UDDbk8ujbY8nbynQd6mG3HxVNk5VRUQQKHpnup6f4D33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tcn7doTWmWyq68dszqfsAUy1Wgk8Z2VLKGwVdVSqzSBeS4T2EEjQ51Jd8uMJo3w5HGbqN5jzDe8NVRHg3u6ttd9",
  "key1": "4Eo51xeDaZ7dZZpqCtMMjbPzs9YNeuyGgBG5Qqc6WAwYHfQQ79FniqrTkAQM2WDUBPJ6NLpeXhficCQ2B6sEbxkS",
  "key2": "4NPTTeLNweR2bkyQvn2jZU2RPMSEBoCkeuU6vW9BJ1fRyZW9NWjeCWmpFkky7XrenvM5UibopekfjiMis3RGdSLD",
  "key3": "qzy7WNtGiqapUWx54VbxSuvKE6iCXedCSyFms7EpAtGmFy6vDJnzCioofbqExE7KEJnPe3J5WZveWh93NUkq5Dw",
  "key4": "3yNZ2kxVKh9CaYEnkXQ6CDA2cBoh624pS8nVrGu4XP7iB2iRQ2QoJu4i98HibSBYZuNp8mdGz7VzZaR2z1Ys7wkJ",
  "key5": "3rZQeCJygRdJT5TAEo35xcmkncG9iDNtchadwUu5LcAeadUnZJvKinDUbRdY1NMArMUUwVEd66pn7sT5DgmeeHnt",
  "key6": "7P9xQ5HEZUPRUKrQP1sm7DHHDraZjRvMhhjKdH3Sjp2GAQdV5yDgyRAHanFCRjQXWVNqjKN4bH9BtQCCCy2CZ6o",
  "key7": "2f24UY68ANxjaao8gJyBFAXhhQt7fhmnVn9vAVSPdarS1JsoDDPtvzCzVcK6MQwMmydwGCH6ASrq7JGLEh3Dpsyd",
  "key8": "5wVUWBgiN8cWNiAq3k52DrmK327guDXHtqKJ2CDTHrtXXvQpcCRthJRK8qD89faDGcPR1nh1U1AteKGc8DkP3cbx",
  "key9": "4GnY6W4cVrkbSh6nhWNHn6CFzix9sQbCmv6tRiLokf9tKYfGn7rMjSwAbSo1LjGwELYPdeNbnBwdtSLWKDjD9Nxp",
  "key10": "3SRTG2YxK1jHB9q1X1r5NE85uA2NAGDuxT1usfQFpBjWpKSMJP8DM3tCTTcmZDyaCvS86nsBZdQQ4zZgKGc6SrnA",
  "key11": "3uSf6VucA25SVGSoAdkcNAo32gjEjLeyte61LKWFGVv2pfM25jsT59b7Wy9mFLSKjkKEEKQEUXLnMJP7KkLsX827",
  "key12": "3oMD9WSRcRpnqbQ9pL3eQ3zjHFa5TnWx82UG8N4gK1jP5SCN1M1FQjudcAjowwLE49A5dETqoKetfSSXueutfzFR",
  "key13": "3AmPHBb8y4LSw93Qytqyz2U6FDCve3pU55M8YJp9YRSwu6R2nFoRn8FMEbDK8PosG2vDjvXbvdzFnueh7Spe5ZWv",
  "key14": "2X4RjKnvo4fJkaaJds1YunhP2eBNrX8zjapzVreRPQLCNaN4oZfH967oeHxooTLeYFYt1hTK8ZmoSJAFLMXokuSX",
  "key15": "5Q53DNnxM34XJcqxxJ6SkHLpsoa5TCTp98Dtk5eUwSnFozMbSetMpCQZiahLmqtBHFYywdsMzj7DyMzd9EsG3rMQ",
  "key16": "3xRvoxr5G91fegQD8jfPTzziCrcVg7Dy4q4j3FSPmbsUuFydzicuGBS8AGAjFQstiW4FegTVomKuRx4V9Vaf7BBJ",
  "key17": "uDMrnyRzvgKhjY4Hx7pBcAjWRE4B7Em2vuvFCojpPoCLzfAUDNPEveKikrxe6EbS893vpe4ri3RPUB5Tncatn8u",
  "key18": "5P2iajkvu7KEc62nrh7EZzHBPqAdeG73wCuwsLnuvCaLi5shGfa99F3HMXHT5ZjJm5b7nceqMy2Q6dm9nMRjXU4v",
  "key19": "GeN8AyaGAm2mA9YLWkndFTthZK9pWxNdKksLdYoxqaC8pjaHYdgdLL1AcigzYcMaiv4x8WCWsfxxpHYQm51p1s6",
  "key20": "52ExDz1eRHsg1tNrr8mRveRnTo7awFMjVDzgZ75eauYjytktT7qKrNYQbCmpc1kBuUSiKmdz8xjbksS13Jmiw2k6",
  "key21": "63f2VtiFjzj4w6bzVdvn8b7ZheWuX863om8ud8FhTaRAdwnYTH3GQLc2b3r2DwUWb1WA2AQJaZtF3SsCWfcnEF8V",
  "key22": "2cbi6h9VwDYvRps3qTFn16HbsSr9EK12gKuxM74geZA4UqStob6KnoisBCWefBqXp86rV5K44QMWUtvtLrC4ZwgC",
  "key23": "5vdnxYanf33AP2J47BkEGX1LarMoNFUrYkQd3Qcty5cQ8JNdZZFtqaNZsKS6JJ9193fF8Y1JzW9rsxQ2tDot17EM",
  "key24": "3nga7r49MNj8aeQk7P8dvE5hJ82kQtL9VDURpFnXgiVt9soqtP75nebmxCGkzVWEwzZQSyCmmJJunGYDrVQnz1jt",
  "key25": "4aqyUxrkT5FnekFjSv9DP6VdYAs65CA7YtZJSGjybXb1VvkEaAmhnohd7YvWw2mNNVkW82M9XbR9TAv8YNRJfcid",
  "key26": "21o1nnxhazW7Sqrz65pGpqHUPWfPU6LL3VVGQntmmcYGWM7291SqmsEoqbhoyAH4atEHGWi2ruzvHUPTj7vi9KF3",
  "key27": "2ffdwUaRNG3katNumdUJ6DisVaUK2xm8uNrxxwpx9xznCSnaArXd45BH8xvHVbLvHYysmPGsCFf9KGUSmZbQxDqt",
  "key28": "8n3BhcdgtbUoGH6kwri16bBM2RZ9JSSfEkhaDQ6aPbCDQTofbM6XmwVVJAWG7iX8fnSfhKoNKWwM1mZoNMtt8N2",
  "key29": "42wgpWLiiW9q2MePhtJP5TKaukU9c9yRqCdFEwHapEcVx3Jib3CHm5diDF95nqFnKWkK2nUJHxXyeHJKokpx8HWZ",
  "key30": "3sjoLUa9xBSu1jqZJoLzLAJPiHEUZRU99T84KNxK9UYVyqcwZMS8gCQJS7WdCmVL3L8QqCkg8VSGcWagFzJ6Lg7g",
  "key31": "5XgFcE2Ds6WrbjoBxWrQLjrjT2F8MEsz7fRzY2CEGxt6Ass6WKNMRkSvJhkBB8bdZz6n1Dt4TKUfMs8xeo95QrBV",
  "key32": "4k3xM3hQeN4CAdwD1iKxfKaPHyFtKW4p1SBW3cSak4AarjUqk4eKhxQkx6hnGDUgBdfhuW6YVUc5L4jYyvZ6NW4D",
  "key33": "3Jnd54h9sHoBvUwfxtbVnU2Jf4WvNKixnpDYDMgHkHdT3bUwKdmcfP53JyDyHcEXsTjVJiisen3YvE3jeo5dgfA2",
  "key34": "HnTeDDbjkp5692VLYrkeadrny2in5rxJVm1KRTMQZ7x1ebuqMMowSPwNtLt3WzNebnAwBd7edCpRKGcNBFXoQjk",
  "key35": "4jLUpwEn6xphGx9259T444k5h6C4L9zyXPRJA12xGRwi216P32fjXpNdrizccp8HXcT2aFawgzUxgjeuTLNDM49K",
  "key36": "3kHHCRpMkC2HCZgcwmHDnTPF2WxmfiVWk6SQXkketxumpKh4ejwBq61jN25yqEJaAjCXHWssTiZmaSP2JUNNDZnn",
  "key37": "5yRzvwaZzJy94qt9H5Mccd4o7Toc88rdRvKzwEN6NPmoXhzM3MgPM8TeUYaxkXoohPCKeXQiSyN7p4WLAxWFe9cs",
  "key38": "4oxRQy8vzVy248z47JX4b837aGom8tNi84XLXFiUVnCQ7YUkdzNWwQdceuHsHHr3BpYXw2Lia9Etq8ZtBt84U34d",
  "key39": "2mTMpA1NhRuofTPDAwnhz3MaoVm6oF8VEeGzvwABCPPLapxXya8rEnKGeAy83vXBPupVuuEuhnvkzJb1QWxVzFtJ",
  "key40": "3qurXccJPN54QVNCXhwo1mLZNxP2xuXKQVvS12EFcdBEQEuGXPpTGPLPHLXPw72QopayLs2e3FirS7ZoA23ubdXL",
  "key41": "4e3atXXpVPa7Jr5DaFStnw5Sco5oVRUgWgGFmjGR4z1sqv7czhkWSudndfQL2HgQkRuTX6gg2wtEze6JkfbPY9sk",
  "key42": "aL3Ve1GTNrmJ6mSX2pwuEAc9jYmAAX34zKCCNhP2JFPdPuZxEfJj2zpgsXfJvw8gTzPrYZn9R2DFj5gkahETGyB",
  "key43": "342pgKexTSGW12Knca6Fag68BTvGekT5aUbovdbzRpPrbcYnx24RgqzBPgaKuYBAv2j4X2FesSvPYzTG8uqtpjQm",
  "key44": "2xBdV5jLwriYsEu2d17bjQyNq1s9bRwW58cDgJNoAyz5HuxM6YPdgu96magN7WkzFCth1zB1QFUVk2MqhAB92vT3",
  "key45": "4to6fqnE7sb7P9XYvt8py5GQYo7HLk5AymRDMbKfEoqxE8c6ohqPqkzLCDFmtrfvkggwH8gA1UUVS5uQtF9iKC5u"
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
