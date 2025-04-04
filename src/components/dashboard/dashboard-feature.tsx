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
    "29fAkXNJuyjVmMenPdyvmmvshoPdiy3ErPVNb3n7bTLt8cx2Sb7ujVB86vgm1RGYVaFMupYRYB5fa1U7WsgCGfJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdDJZTmZiZNshmuQqRW1ue1aFiNHXjYmKbmdG3vJ5mDKFpvxkitq5rgD2xZFjCsxkfwd6extHyJic3anjwi32kZ",
  "key1": "5xyn8F6SveszZbUN5xftRg4uCc3yp7s8kXtiSAJ7w1XzgYXwmDkEMaFA4MyzZeHvWBroXpFreHwAG25s2tW38Fku",
  "key2": "5UFmm5JtWxrwBnRqrstqivdnqZzvCykxfTM39AUS7YaegquTuxU4kBU3Tckor3rMu8aYPC8vtRuKdX6HUReKqYmC",
  "key3": "2pJrwQf1NfHGjfyhmMQcFboC3uCP5GYVvGzF3QaZALo4ao3RFdgawkvE9DifZ56ifphDExV8nHm71ZMjz548uoip",
  "key4": "3YdHR7cBKSnHjSYscF1Eh3KN7NNoXFsUUvxQdYWrRyuSgU3ethr4XewYkMGQZ9gh9QUtCWSkZuBZVVK1Fnc4AV5N",
  "key5": "4iTS6kfGLWbx5YWYgZhpbDwuhafysCCKEgh9c5moGL4zSd8UteSSB1ZTobMZPgQsHEj5YDnLZdJLGrgTYnmznUqQ",
  "key6": "2Z5AxcJKPBpyfspADpFRYYuXm4ZBR4g9JiKeyRnxRPEP5iBorHq7bNAmD4e4JY5d9a1zL6YZgteQdH29QWE4iu4x",
  "key7": "4fmpLPzhXHe48NwMHdZejpcDXzEQtYEEVeJtiJjau5tbXVoqvfr4SnhGpK6WaPeZv6FxGpP5ccZ3ZqAikmr3ZVEo",
  "key8": "4NEPTyyq4NQus2JNk3wnbWTvsUaiiTDewAgKEBSVzrkELpCRheLKZHWucurGNsaimMuZTgqymWHzdb3WxRz7HyZr",
  "key9": "2pEJgfyE4YdmW7RHEBkkZNQxsvyxvkxBixxNa7Bb6uJvuuixVKH4TRBTwJZqVQtbRuzdLki86FCYZ6M5ygy9JH3d",
  "key10": "4gBFn6PKqaPQ7pxnchJSdC9ku72cWGHhMwc9bhUuGqzH7hVQraxff1Cf3RNR1xCUk62reaFCeBogoeftKkshfCN7",
  "key11": "cEq2U2pySP6q9UmFhG9NmeJz5DBvEJH5hXVgCeWYKcs2XvnbbosfCSt8ZkYJimitBPuuMMhcLTUQYR5ZbiqzUmn",
  "key12": "5Rpr9y6MusxCQVLzob3GQJNTV79WJUf9JxEvtgxg98d7noTcBm4xmdm7SnRFZo1FznQNQmzTDNy24NaHTHxyFxRq",
  "key13": "5zbMnH1shxQ5jukq8ZMnQsvZ8coFybdWq7G6dJmensfMFQrtUcekxvpneUdUWwBfkmCkAuTH1Jx7wnR9zvYs2DHf",
  "key14": "62crnvJPbSBLr4Q7AxrAyxzgtBjnitxg4ezb8AKJYuP54URwrtSbbzo7dhhMcRbC42447DRkphuiy1EAAfXjEH1A",
  "key15": "2UqDMGmdovfuizuJAY4FsXyMYXJscJ2xSpiZp1fjQTMKbCPNA4AMQupDJvNNDX4QHGnyJStYwX8Uk6fYsMDzcp7R",
  "key16": "5QR24ovooxiaQeCSHFQsBUtaS5fXLWBQSRroTeckYvBD2EMBB96TLRaJyp5KM7UiaYgfuJcAYHaw37Ky1KTatmbi",
  "key17": "4kTJMdvYTVhRC7GTc4B6VXLChv44Wed5ReFosEiyBRCLMDAf71zYRs7s3tn2oHjyzZUfRA14fuirsiCjRaazxbu6",
  "key18": "2V5gUWSpZEFcRysyjdiRNZtcpg5mCsWZboT1o8oRWhX5XPeVKCZfoBszzfWju7nrEur1ja9XPy3wdt3Bs7YXtkPU",
  "key19": "2NMRXTw8UvbUm8YSYx1dyzDHi4n47Yeukq3S2g4MuJhWYC7b5aZUoFnzAgRxddnVDuW1xrcsUnhA4mb2FFqEoH14",
  "key20": "5stnrsiJTQ6TMMm81rbzmtdcHxBe9AGwiSdLa1dmf2t1h283Cze6Wez6EHwzM4v3rCgE9GD8W1zY9UgGWJJAxFzQ",
  "key21": "4rHnqyCUr9ubYkmQ9dEedcZPMnfcuUdPgS5uPahWdDDiT8yCbFBdZwj3bdUJqiWKPaqtC1n4NPUbrt6zH3XF1BS9",
  "key22": "257qu8YC1pjcY6EE4Ne1uxPmWvkRUeE4zWW5ypfvmuExHSRe4PpYa3xaBBLMsDN7mRQ95G67u4DTFZEhE4zFcWJ1",
  "key23": "ynDuo8hy6f3E5PcTUCdY7GPaxPMaD4UwDBo5gptvYP1h8aZxC54wjnUhMDhZvAY1Gz2F8XSki4ptWR8Pvu2cgBB",
  "key24": "97ipPGjZRwbEqg1hCmoV1LrWKpwyaLLA9z79i1FLF3mFo6xCrgAaf1tVh6HS9fDenYqJux22QP6o617M2EBV7k5",
  "key25": "3ETAWcHUAnKyd99wWgQjNNFwMAjtHEQRPskUypCYuXA5L97n4yi82VDFZaHn6HvorDGhUqg1xoTf6ME5Qpdjsa6o",
  "key26": "49EHsxyCmDbfdoXNLRW6oK3r3SoX8nMJnhq6v63D7CC4i5nNcFVcThMhKAQWnALBJjB6xnoo5HMgfxS15cHhJfnx",
  "key27": "5pV2eSJNmFgGxgVkv1UwoLdUGLStCHmGVaJtechgWEEAxpdm7Yc3kjkE1p65XB1CZvQsEhpq2essm4Nz8Dh4CYJb",
  "key28": "4bY8Q1yNZCLQHoRhZNbpJwBSoenG2JB6hFGoyHZRogDpHWdu8sDL3Mv2rPBinjpudg9PMwKqr7gfonGK3w8de2D2",
  "key29": "5q3JT6iNgP6DrUu5agTDfHK6RmQq4LgjwCeLJrqmsiJKtrj2vih38q7JidAbF3F9c6sSqK2otHZiqCR6zF4S7AzW",
  "key30": "3jYrvJ6bLRTU8ePoRuWYnnpVFKToz53KMztuUU4FNm4LsDhCRwqSNSwGLoJcyzya1TvbUTv2tqDsGBEYEge7YUv2",
  "key31": "4aujqvaKa4hEMXpb75VdNT4NkEqzFbXmogeFTcFzZP8nY72cq6ATVquuJmvh6cVvzUvK6hsga9FQM5pQZydggxmf",
  "key32": "2CEH4ZQFjFZRVuhHFhRJeV54VgwwARUu5aHvrhWsfSwFC5tiimmFhZXeo4ZjkxbgqQy9sSK1AMx7AiXp9Jjmkas3",
  "key33": "55zvD7UDtAoi6sxjUpz2yd9EMoJLB2qWucoavCWmFjU2jmrcgPhTthEYp1z9xW1xuY26eegALRZemDqMhbq6rrNY",
  "key34": "34hwZU1SKsXWYrjPazeQ3Fccf8SoUDxQ7hLJcrkrJ6bdAWBqmyxL6o7zFX5NDXXk38v5wkZ1mppWapxooMhvma2Q"
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
