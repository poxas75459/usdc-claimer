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
    "29Pg54TR6Ped7bKtAfyMnDSyXFY118fXYHjMfYoqPheHWtU5LdqJZke58y5vzshx3rUQcWRr8cavzPdLsQW4L8Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4NDSLc8qakk88txhZQeNYNfosSZmpKyeVuaJhLbXSbZBtWRubEpbWGCMnqhQUiNQusv6SV5JLme4HWs9Ekq7mp",
  "key1": "5husCtnmG7EdE1bcycSa5Sh2CqJF3NJ58zkaHEqR3Jddk9rm7mHx9gikp7HFshyKJid7ZP7uXgJdWiT9znrM2FYm",
  "key2": "9aoVenohfBQUeuv2znWbQ7sZ6GUUyUiS8MfSxPsPo54eeSQ9y9MPcfq1djPqSLXbZS9EefT3vbUnWt3Xx3sc3XH",
  "key3": "4hVy4CmpLpXhm72p7AzZt1q4XEJbBpJmESA2hgUDEfqw8SFF4qEh3UWcBty8reqV2GS4SKbn93Dc3cHwqLH4dV1z",
  "key4": "eaVraT6Bu6nD5oCKtdHpyvkDWsEZV9gB8yBJ16skhu5HqbLZYhhpV5AjGiAvHaFZX3uRusotkCRr8tg6hyJSx7b",
  "key5": "67hn31rmgxJEcNYW8uxKFkNCyWGiMruBSNwfoaymtqmHrWknaKC37ofRDCz9HoHtFbHrhjkFsq4rtrSpC3UWvhCY",
  "key6": "2wociHGtmsb1F8T2vMBUnKYpYQLoq1Q3Nm13PqU5dU62Due73h7WWLeXsceyR7JZevEihFXpn8TLgyHZVTm4NuKB",
  "key7": "4pTfxvsuQvR42jzQdD2UnGyeCzprvnT8HMrWur2xydGzMnsQndSjQ1z9wbXwTBVg1vcRTZgfsRNzTGbsiP8hwi7P",
  "key8": "2undzNZWkrKqNEqsisv2Ek3Z55CZ1B6qk3fJ3EE2CwCkpHSLzqPD9RHymTwqo3xWpa9WtfmrnT6Pjc3DjrYnWwQ",
  "key9": "3Qhyn2nxHtkZftRekEo9xirkxxnF2dzCQQsTrgNKA69uU58jLZVxecCZV8YTsHfwGa6mawQjeCZVdWuBK1nhNWAZ",
  "key10": "h9BE5gUdQU65cyW4Ksgwfta1JgNwyLnXS3iaPUfdrNkYesuLcdtTW9i1xZNKNjLNbZ6Jv2qBgh6NKwunzK8Cb2j",
  "key11": "2Vfc8ncAixMgjbvMbXH7akpCMDhehWLH1DTE1hE4qqvsuqbdJMfKxw8A5GohsBzaT78A5vFprMaC4DSrNKxiCDDJ",
  "key12": "4aKEEvM2kko5p7VWuvjci3iuZLck29BKkpndRW1WDsF3YEv9EidGVwSwroTEG16hZkJ5nAHPPSW8ZfHXm8qcrtCb",
  "key13": "5YC9NgMUrrvwjveJ8aGVS4UruffQrYtdcucJo4h6TDupqbPLZjMnL5D5midofQuUdhsZ1tURoisKhDyp94ghMS6F",
  "key14": "EMKQWbtSvQfxj4dMMeDXzuyxRLoRBmETXRd6defWJAupmZn8876j3vfHrGABe3qEzWaTCgbEfg2h44vANe44a6L",
  "key15": "3p3hbDpgRMJ8XZmGQbceeFWQYD3E5jUTTLDAzLeWgZ3Qpb3wfUKti5Nu1W9WUCUAvPeG7QKSmNEKksuVHfBwmnMe",
  "key16": "5YMeiVv1rJZRNbFZXq1aNwEezGHiEzMVWbqKGeaymNbdbGP1ecQMpCjGgmyKDbHGWjnauZ7V5exUsH3DWH4LWm8N",
  "key17": "21yzT3N7rqRCZScvJstkDGz1GiM6PDqhZEc7r2pwJGWDtnhNvSTykmVW5U4YmnNTojrqqmkM9UQjQjRiuTx8oYaF",
  "key18": "4EtNVbP4kq6GZy7o1igcGSQMihrVCtcXyVR587TiPMpVh9B3Mp2LM2Ma1AApE32G5uXhpdd4Tn6FkroHZehfMcZn",
  "key19": "2oNypgLGqWZRXcGrzYjYEQuoXf7cvFy45RSbEGQdTqYHEvUkgNxtzAE3iEhDifDCNzLPszp3DBAJggwdSbSKoh82",
  "key20": "oJMdN1otqEKamMUQMD5XCBJnNfQBip87g9W1HR4rfCh9jbHUHRX5UwFUKXn4qRTKueXvm6FVxzzJQ2bUougHVuG",
  "key21": "5Hkz3yUKwk57W8jjNRKydPkCn8wjfRRnCVHhCBPxPDkN7ZDgRdocs3q6PquAkFVQZEtGhfWm1ou3htVhXb1xeu5h",
  "key22": "WvPGU26eiaiSrDJ3yArh6GqRQAw1KW2dhKoPXfcsRse9DeindkDcXPkrxAQdyFyr6X1WomxzvexxWWs5CuqErAy",
  "key23": "4MmUwPundEZADPfpzfj15KgQurFceXGGf9LivHesbVN3DaVgjUh8Vd2eDBrDyMSCQPSQ9NchYi2XcDY1A3qxxAEu",
  "key24": "m2aWkn37z8bfTK6L3DoMiLuTGtdaPoX5zQQxHHQzJLS8gmF7eVLrCFpVrMafiEPm3hwMWorq1LyoUkmLZmyMkVa",
  "key25": "p3ZZj9xsh3jN3eHbTLJT79hVfw7CXMKAng2nkxUEhUUtaM6mANkEFb6eeFjcA6nFyrQmphUVGuAZjnLWBaY9V1e",
  "key26": "4snT1g4MZg6i1sk1UyVPjUa6HfPtoN9FchLh3yXZL4YGZdHcfF3veR5Kb9wUo5dNbLbNaFm7V7wdQuuLpMQzGKGD",
  "key27": "57ea4TxuiavWx7XQs1CaFTZT6iKxbDd4DVMowAXMQf1j4UPsY8XYmhUcfwPNJBqGUujcsSxRY5tNWtSWxzpnvBet",
  "key28": "3YcV5b4Byotcb11kxieqLf8yRwTFCF7wMtrKp8x4TYNHPw7FYVjcqjs7YpLud3ByiFDct6tu1FD9Q5MCEu8AcYq2",
  "key29": "1HjxVed5G55xtp98ANVQj5iiXF7wfWSqY2bkef7D7gqMsdgfgKv5gGjcSE8NGbVs5N2zTvnijKmLaMRWMZc2Q7r",
  "key30": "4GfdNUtVqea7inYvoUPkjv2p2hyjtDDvjiN8eY5Ah4usELEjGp2MFurHcrQwa3j2oPZk8XKtQypyzddyT9Jnp4Ak",
  "key31": "5mrcpy7ed71mVMNsNoTpUqbVoF67xykWas2b21zBogGvkJVPfPL1yHMtFY4c3YrtAXPzC5ehwmPHPv3YxbJDP93x",
  "key32": "5WmmegQcuSjWerN3Gzy4wXDTNqfcA9Du3sxbKyNBgLEoPBAGZAq5vsanJJm9Qhv3hSCVXGZzC797ntLAtcnMhbCY",
  "key33": "2XtgWwYKbNPchdKM45GA7vw4nYJBy9veRstG4hW3YpXje9vFHsgpUD3K4t1f7E8QGRXx7embgWeNv1iN3b3xkpMQ",
  "key34": "5ET9kHpyna6hjcb7Mo4dFEYZNGF2zfBVMZB1TfBKGNgZCsHYJk6rG6gAM1MxmE1aFDocGyKr9iZ5UXiS4vwzUoX1",
  "key35": "2hkzAfQkPHWi9kQqTaX1LXKEy4vKZZEuEtCJrwKy8bLe6y1Hwdxm8oNiBcctgXZUMcC9YPy4mkoHZS69PmxjeHZh",
  "key36": "4aZ2tenCsrcWoCPNXShwGevLNFEoFMGoQwivDBngVstgLnfLvAuwA6Ngt9WS9tbsszuZ8Q2QjdHG7U3Gmg86rfR4",
  "key37": "2XPGN2hyCi2BX77959r8vZUQne3nGqBznbA5nZ1czvKAL6ksmoPSAyNu95vnGZhriqLGxzTPyj5Joo7DMsJcr4ZJ",
  "key38": "3kNLQU5yWbHEcfubA6nLzxoDGCQviMhYDLH16WJTHTuHu4T4Q6vxP9Vm4wBvgiAZhsuzFm9ZRzeWLYyQ4TKqir8v",
  "key39": "63CAci9EUvNvXxyJ8TheiCkK5KqHvBQFMXifBwEBGGqXMdWhDZgThnEEc8epP3GwWzMDEMb9KjPWgxR2NboqbnjZ",
  "key40": "3du8Tocs6xsengdEdfw9pKTQzjP5Gu3E5pkhagzb5QUEk29eeS7zVWP678YLeXuUywmmyMpAhrBgXdW4f1ZApX6f",
  "key41": "4MGttrXJP6zquLQ4gXjh4wZaX39zXjtfL4drkJggoMwfVABoFRfXWe7fWNsFA9jhkPzhzLpX3HNP64cZtoMXXPDz",
  "key42": "5zf4YV3N2vepZkGZHopNgn9ZHPXw5CJbstTY6VjPYRp5DX6aMydbn26WBuRFQohMPLi9FHx8a3uVKRLAyksoHrKu"
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
