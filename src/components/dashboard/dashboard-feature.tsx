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
    "5TP4g27hjACJMc6CJZpAvMFue4vHi6DLLw95GmwfnroASHV8178Rz38EhiLeZ9vDR8TeNa6awmz5JJ548rE2d7vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipDbgmDSBNJwUWVBFHp3RK3j1X93HRJ9HvBPjHPVznxY1CKezzeyj2wWKAekeQ5L5v9rbuCkJsncDHd8drdLDd6",
  "key1": "KK7SyQ2xEX21RmkP4fvi5tV52ZdwUR3ZzQUczRqVjB2LrnjVB3Aa2FEmKsPQSD4xnWpvWPR5FZ6SNHKXqFPe3FK",
  "key2": "5C8gJ8XuMRaESXaebte2ngASWjrkHaEuVKLABiy93mFqtzT4aPM25RZKhqDufUtpufAwSCfzhRG9eB5sqKhkBgZ2",
  "key3": "A7nocyH3MwhoHBcPFLYp4bGcpPPFPvtfKzW7SBBegmRdiJzZ4CRNHDhR81nn28AaW8FAdJoK1yD5AiZNJ5eiHPs",
  "key4": "gQ18G4NRArb5Eq6k1oExGJ3fdYP49YiKfj2vhdcCtPpW6Z3yKL8czhVQjc4D5ELYeUu2y5kaLkTVxUdSwiiEBt4",
  "key5": "3izsdoRErLXLXTm58jbaAGn1aH53vGPTMtyUjTJB5GpyDmKzT3kbmD4rwJmoRP4XLHDAsXyivEhh3nUQW3ouvZbY",
  "key6": "5fCE9JPeUx9GmcF34eTSKba2YfG9ii8AzrCqGmyyu3p7QmpCypfk5MbXMMUmAcQ2dApP4qJ2aevL6T2jpJudhJ9W",
  "key7": "3QqAj1HbhDN8vu1gAzzmB6ZWjg2FDT6WPeMEzPhx34Ka289sNdoXdTLN1YuK2qtUg1LZiJ3DRtRunGATBSJghByV",
  "key8": "uAsFWGNPvrpgWefirazcfzfgs9QSUAMyw52gvz9Sp5MHw6psN2u49GMXZA18jqxowgJzYMfMtQdZkZ3z67Q11u8",
  "key9": "349oQd6c6j2GGcnnYAD8UNjkU12Qc5g3LhTctxL7g3HjrSh3JVmCtdtuYvFiNoi4nbbFQ5B6VxHzBjneh3LagxG4",
  "key10": "2U1unxAhjnT6ovBf4rRrN72jWKvUXupm3njWsFqopRX2twHHaLRSeurQCbmdmmrkxZF78wiGN1Z2mfRTpDVGLRp2",
  "key11": "4HEkmtBKkhtqFdhA6gxWn9Sn2AqM1F4ea29ZtUcsSy146egUfMYTbosjgErxXE2u5eMZ3yoNE4NeGiWQbcNS1y9v",
  "key12": "i1ZHfiHJMyiZtmvCFAPQ5qvp7nKVsyQncCP7kvDQMLCYij5pDGwwh31idGxdoVzUsXy2kEqbdsGzffXu8bSaFzV",
  "key13": "5vN2G3vAt6cmVcupM5YSLwS4SZc8ozCK8pxaN8bujy5ftT63W6SJK1qSEkE1DrQwYhbMP6FeCoinkBHY8q5eCDn3",
  "key14": "4hgWomS5BaUNSnpa9yLYe8CjnY8vMb9f5KzsAoR47pwZ3uirHvWg4n7Q4zmSGsgLtVcpZ5UFuT8qZBUGZBH6Xrva",
  "key15": "G7zAtt8wzj8GuUBCHLyJernqx437dBqNPp5ziqVj3RjX8R6X7dhyz4ZTW4i1HqNZc4Xh3khorthJamV4keVXBbj",
  "key16": "2sRHJhcVSE82qFtWgmSPj28R89KQj7mx4kLCSXp7BSskuD5Sy5vAF9EsxnxtrjS3TkA3f4G854XszJYJ4SRNs6Rb",
  "key17": "3EqtqMH3jWEhAxv739VkwXTEXMfWRT2LA12MVuXV4E4dNJ6GmiK5zm8HW9PU7jrcBcQkC5TaQVZGMiXsSgUC8hf",
  "key18": "4nSG1aKwR8zTsWeej3xAT517yL1Qp91QpbPjM9i9wCuWTAULLPivnnYmY2dpdwPkmb4FLcTCpAAK6TY6FTwQLBPy",
  "key19": "4idcPGhqXpmVdMsp6WhTHEKohmBdJvVxoRtL51RhAdGUNP9owSEoVJzsvtmPSnePeSjW97Q7EbvjjEs9g4M41k77",
  "key20": "4hrvmS6pMQ1UEcie74644iNYu8C2wHtgSeYRKUrjYycbv6P2P6oESrt8RLtU8npV7sJDL88Lyjbo2sJcB8pu8oer",
  "key21": "2NpqA3pSkYs1uJ9Xe5JnMtvy7pDVQjhLMyYc2hEw281DFwGfCftgdZjy2brzUFcUuMnHWRFQ3dfZiwHSzrdtk6x9",
  "key22": "3bs2TpPYF9WcJEb6w77M9U99cJdh5RzjhMR5iA5TwrTeBwodqeA4WzyRUZn3eyQPhVAka51eg8hw2i5zPneEzJ4",
  "key23": "jeYPTqnBfcC5zRF23QVYnAKEy7rsuG7bLUUUkDmUsKAh7RPViwrsURWitLSpCpk5eHP6Lx1b3EwHbN2JNfE3S6q",
  "key24": "3zoV8vJ6s17CtcDPqmz624cuNfiaESz1CZa2c9pY8HRE26Wis4N7RyuN5hvQ6QyM15pWNA8EUQaoGeZYG3ukeJXq",
  "key25": "F1tVeW5GjYkv4AdKUBSarEXx64t2L2xB1rKaRHENGEWqLXg94THiSc9MUnhgmTiQPMrQqehMNZarRi7evxKiC8G",
  "key26": "5uBT6Biu5VZryqB6NaCXSJQiL38kUJsZ1Kuz1HnTk9Z23M7K9CRs4ixV31o5idtNE2SBiX1avVBufxa75X3Z9KzS",
  "key27": "4Ttw849dQdc4Ldw3oT9Piwhr2UpbfA3xdhxgbxQMmvG5pR5aVdgFbhwc35t3vcVNkqgsSNHNrBLg3zq4dVejMEsM",
  "key28": "53feAx4DU4RkWiwpHf1719vLUuYi39b2jHJ4g7oAV6q946YURQF3j8gkCpWFFVE5NUg9GtmqRsGeX4fvPnLfefuc",
  "key29": "2N6UHCFbC8RxthJWrouaEMbeudJBFUBxnPf1DggcsLhAUQ4RFFtWeAbdZi9BxTizg1NZ4vLpXH4P2oubJ9NvjEZy",
  "key30": "Bxkf2fAkpAYnwDoGbQwwfCSuayYTe8Q6ZSpEQugdSDy9j5U27dbra5n9ochE16Up7xmkzczH8Tpsrkqo18gcHYD",
  "key31": "3FuiQmBjENGp2H3B8yM579n6uyCbfxGHQ319EQpKgXRBJnsnrgRgLQ7AxoppiqGDksw2JpFzxHg9wJAwDaRqNu88",
  "key32": "5DRQYn6ayt8iPjXPnuYWe2gz4E7Lhbq5afPA6yBskjJ9Xi6YkpBetC3ZSynfvEFF1tWgxbBejDvub3HR9nh5gU6E",
  "key33": "4didg3vd5EnJy9DfTWG7q6oLb3xzzfBXLvf9fuUsCCywfKkLfthdF1SWNtsn54vBUS6GyNRSwa2mqACjz7Dsu5ck",
  "key34": "497jm1asmJ6siWTTpzsyVQA5dJj49hYMz2XQ9SENEUdqSZMAeEs4f2pGvgxqxBezwCXorPkJRACPmfLj5dkfaMpP",
  "key35": "2bLWjhHMfD73kEDCxhii36WwpDLPdpMMLQWdCqU9rcKv93JLxqhdUJJpisJDjBC2UD5vNKNUwNtcZ89anPaXdLfg"
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
