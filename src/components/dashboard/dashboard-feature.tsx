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
    "2B2EhbrFZcH54V2gPuoEDDn7KakAMbDoVk5Yiwi2Wq4mGex44yHh5RRj7jd58SHxMBQN6VC5HoSNgZ5Zr1bbTSHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59qpBA7aDwFuH5PiJMdUAzzc2o6EZJJUUFcHM4kVsMnAeqNJfZW2GGR6eu8pPRo8CZdaH1QwMutagBHAsKAwEVVR",
  "key1": "2PAwNPysm6vvhkx6UqTaPmzzo6GvXwj3APn8Dd6ojc4SS7Be8RmVaWKrT7nUmHckNxauPqCkxH2bzcERHFmpcEtG",
  "key2": "5zStAvvLATgPdyqjJRva67sPXPTGWUmPweLUjphZqymdJZarUQCcUyNKgdtNLHj91GbpEE7iJ5JSNcZh6KYBWXwH",
  "key3": "4JTDTwHxsZ7iH8p8zuVzFywNyqkzd1vESjbTaAsYbqf2ArX2N66n34igLNXGb4RdJhUaA3UkH2ZG3tBwVow8yjWR",
  "key4": "4CM6Hh1uPMqPmggr76k8eNAaXHY5G3fuGsXHEPbnUPz15PcZguYoYpoDHp9gXPGiobQkpN1Ma7TpmGRfb8UFD2pb",
  "key5": "YC4pR6WhQRx2vueoLJkXwvNiSTSa2pkn8BSWU5MyrZwDUkrAM1LtVo6zWaAovbe6rJtd1vWtcAwHZAxeSFpWvuC",
  "key6": "5mDc49upYqTHyfkB7V3ju3UrEx7Dim4naYzXsYv6Qe2oXHAezqdrDocAnxXAN6z9kSd1AN97v3mauN7XZoLB1etE",
  "key7": "4S97rPT1SZsS88C57ZbSumno6MnwaFDTUaZZkHoucXhMBWgk5TwhaYiCYnor3V9sCFpF4BThCnK6bwuwrHqjhdwW",
  "key8": "ss785AdRXhT1Nb2KPzPMazRk7XR2L1cFNcXb7JpBdq7fdfVtCwBMREwmbp2go4LtgmHXwJ4SiRunYcyP1HF6MLP",
  "key9": "5shohT1uAy1Ccd5y3cg1F4eC6ZEgkkK27BRh17ZqWHefTDaa17zSVVhYvUm8Aqv5DXSayWwj85eAUoSsn2jGtnNp",
  "key10": "dgBYa8CJn4B4WV4mir6Vw6KSe1LxCSyNKwLWLtpkdKzy7BziohUaeZ2xepf7FwotPreRBa6oymQ8pvWFspPjyWo",
  "key11": "5EeX7NvPEq4y9V1tHgf7g57P1y9CV7TL8pvHixU9wfbgJFttZQA3ev8xqJbxmuyCfVPSnCsVCisvdDTfphvgd2VK",
  "key12": "3W3W2Wiq5UL1wJK3F6ZdhcwUj3y9F48fYjhzTkxhvnnXQ74Ye5rEi6kecoxc5JCWfmfod5gmZW8NjtXavNT6pU3S",
  "key13": "4GQVXv8FgEnUNq1AJZx8tLA7aLGekSmXcmB7qn7EYmHsZZeAWvP78xD6Lg5RHV8nU2gwy1yr91iCY2TEDEfQFvke",
  "key14": "7ohGM7Rsu1Qo4anpF5tQcQJ6CMebMbk4KRdQMWKhcL32E5YvPucxbtwoVpgq474kZ6Minbo5H3JKcDVeFfN4A9o",
  "key15": "2g8gsAiurwDNKz29AJSTL1qbdYHGuvzKq63K6wb58w68jFK7Ms2boM9NHH9XzTgHw1KnHJzgkSifcNVrBiAoSAFf",
  "key16": "3gbyRrBygKHpCqrZ4fM1nKZRc6FP4w321GT1cQU3ZLbLW7rycRZqwLLcNYDzuLVAjvPih4kBE2VTbi5QgZDRyx2v",
  "key17": "2GYAsuAzdNg8zBGPMrLF41V4zyEjv94PbWpLQJrs9tYZsL4qj26WLj7h5VF4vRa3TzwFroxwteeSkcf5CL11hfA2",
  "key18": "5FXktVbgRDFdTsk17pw81nnGQkdzz1oQtevTUxiJVFDY9sEH26A6vzXPg4bY9YEUTkmxcTQj3Fm1uyob4cGQRTu9",
  "key19": "3ucpVkF9RKLEyMgbvhw9DFurADFbjkNMxXhcpobP3nLNYgzBeghRtVE7U7SwP3qt5agxKvkdxQFaFiiDZxZzsyrL",
  "key20": "4oxhBhZU3HoJXrTzy3jY9wNsc3rygBXZTP45zpEgeMdnBqonjNWHm21e4urbXG6yZYUfq1EVN5Gk6J7az2DbtiDu",
  "key21": "5wLd69voJMwiS5cYzWPkoVimmrzAMdfhNc1cTwtsGtGwEQtKpFhrHjNAs7mXxxPcEHegsXudH7UB3jh5LKW2iJDJ",
  "key22": "Gi2VdjSZNqXdncY2efeGPoZEwAWELSjXjcot2AR6WiMnyCif2UKtJJhDcLGLEK72X49dXVTZDUyUw5VcAWBvoJy",
  "key23": "6LK86hm14WVDnLGYFpL4poUPNc9mihW7fweDmhbaJhY366DCAvszg5TXZ3J6MFJ9bMyRbfYkRNRQSh4j9zrSMDS",
  "key24": "5EB7tUu3RoGpupM458KuD4hMo6wv4SbYhyh9adQ8f4KjxuAmQpvsJAKcRhVahs9aDVaj44EmhY3dk1MZapNP5Z2w",
  "key25": "TrEXCBEo3uqKMrqXxZDnJf8tKN3TyUBJQ4o1wUjqL3j1CGq1qLb3yeBCMzi9rvWJwqSTDEASBruv9jd3RHNexC9",
  "key26": "4DWRbjnehQcHfPSdH9PN9KQPwc2KQgRJrdo9evHYGJ8hSz3Tsjg87ZvxzFkSGyC2GgHQ3DaeRARU2uXpd9iZNzCf",
  "key27": "2tAMg5UrHhmLZkjgN7uaH4dgpqNprVW1q3NDAgURwezZ1mio7CJeKY2tRPEeWrJtqJ1yPo4UpoxczhRPPBG5hcBu",
  "key28": "HqthwTDUj3DGscai6KDoefRsg3gNCnNDmPXLJbVayJ1PZDWSkPCpvYkgcDGuKBJ3Z4RndL72Ufe9ET97FqgYkDp",
  "key29": "5ZwxnDmbwDwkZgUt4hujkmHLEfjD7hnFhra4AAmtd133k5TsqAon27DYfreeikXiHadPxWceLYAUSx9ZxGqZU2Au",
  "key30": "gMFDxHiJeUB8opgUcQPDgCh2ubUy1dSnTPq68jbrBNRCnm5tUCPi1Wp77kbEBqXv8XH1RmT6qqQ7gf19zCswB4b",
  "key31": "5GAoG1ZRQzdZppAYsP7TYo69k88rj43y1ULPpVifaJvMo1ChcEqCTDZ6AJFsYhD7N6XbNU1mkQvnknBt7di6EN8h",
  "key32": "64UZyCQywKQZQh8nCwfWsT6icVhWMNMejVBHVuMyK5xK1HGxdTTYwxa2VgU97PiBwTTJnZ6E3M7EiAGDBU8VmcXS",
  "key33": "64sDsBRFHFSAPD5uMkX6KyewLu5f8g9WNm8EXsrXVjU19aPbBoLVLhd6SjbLgZfCWhiDcdFZe7N8BrCSa7EYc126",
  "key34": "3cmroXSEoFPFXJArw1T3YzcXsC1iFhiiWBfMMeXQuRcGkwBkYVgvELdorfnqCXvt9ogt6GnTUBruGXuaqYr3SayZ",
  "key35": "5pUqa6CiRYCrDjUSFBnC8tPjrz3RPXeePwzh5DuGpxsdfxAKn2L5t5686pZQkKermiY8vqrYN3XurXqJ8PVcXqqT",
  "key36": "3bnwdtrS8ZpkcRmQBd269jvmijNnhhPRpkVtgRzbuUATLdz1poUJrEDkNh7udca21kSvWWECwvc4QDViGaHVwFAB",
  "key37": "2vaQtMwc1gnLS7Q5UoXVqtGpfqghwc8wNMMwHeikDV9EHW2vhDFKk5Lex5Hrg65SooMDbf9kYxcbGUS2iRUkueke",
  "key38": "2T6dapnq1SPFmbm4GGUhHp6TtxaEbqWdHbxzrnkmqwpALo7QToFJJA5ExtjKp4ANrfVunqAoT6FTEeW1Rnorwc5J",
  "key39": "5VvhqhFwE48yKD4JLpG11mm5CY9hRxuPRVXL7WgxEsEwY1gmVBFBuKHoB2mRfXNdfv5EThc5xYX4sqJX38UJz6Qj",
  "key40": "uavrrcPR6aGKJhPMcxNa6cGWM4ZwJXxq2pF3V25xXbhLiNcVPQUXZzAzqqtjNoUU8qMu9btHTaWwghi8BgV8SJt",
  "key41": "NkDGsFcKA4Mg9sYsvnNFgGXVFvag6WMCytTr2cmM9QbyBonEHkyiNKPjJuUgCx1GVvj2u2mPoMcQxcymFeZ3DJk",
  "key42": "2ToJw1abXujTSXSzWbS9aLqD9kk5MUv9d7eU8k692Lk5QQtrXjqzF36PYzdxjatz83VsVrUHNMP9Ve4pYRzjx6Cj"
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
