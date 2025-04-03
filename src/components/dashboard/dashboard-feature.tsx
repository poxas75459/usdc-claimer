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
    "27ZRHHRn44CE91dCDaCY528FrGp6ShybNdiPNeCeRyzRgp2YYV6MyS8jWExMb7EApP1EhgaR9G9eXQJmEA4yTjGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYinibXrW1iJbnAGCBHW498aBi5kRZVNYRDDRqSF6uDkRDrjRnq6YvTRw4hECoTqAMkgkJtry24fQ3zAELvBkQo",
  "key1": "21diFfD3L4STPqnyx8TnCtLFKWznfhBuv4ikoA5Y2KRg8cUaoCQg2JNeA1tDM6FUffGFBufxnHUuZB4Ub7q3rcpU",
  "key2": "FB4K2XmCYrWkFbo69Zv9f5tRg46y3qpfDnJZpF7KDZZ29MFTXs8nKudLYQxeq62X5NiMPwyGnCcY2dTQwuzQjcL",
  "key3": "54m4hQYC9zpKZSi8T2FuQyFb8rewyaBq71jF4JW38JS14BLvTiy7MdRmWG8Ghn9WwHCExbCH9uenpEHcoLPoqu8j",
  "key4": "61fPauV7m4vgsxFoX8CTCi59E6i8H57R3X8efK45u1AAfJD522LkvwuPw8u6CZweoi4tjuvMxt91RgY8YuonaTKr",
  "key5": "m5nEBmCj72gAe8XMHnU9wzra4E4BJqJ6vxuVM2DN5fesFDpGTHLhHgXJEv3jYUn9rBdmCCmkbL8j5AnLvDDAJH4",
  "key6": "8xBebe2QPEcXfGYnH1J8McjLW2Dp6n4G91URrdfxZExwn6o2bPUyGVXRyGFKrYuqCXtNUSvuqicCRUpyRmNLMHu",
  "key7": "2K7jhtmiamvPTWT3uaAnNF7zZkhgdpBFv6bxyBV41pYDYKofZuXEeh89PfXp1ee78iQ89npAnvoFKaZqCyWVFPrz",
  "key8": "HFHVZpFKHxy2AKNoRz6Ucg2M9ScshejLE2J4gt4gXTBBNPpMz8EspiRWbAhUUDJ2FoFqihCDeTm91jcktjAgrJe",
  "key9": "4K4Z77sTqZVdz577yHVtA6QTGZMbBG65DdGGrmkTVSnQAQiC4CX995XGDStjppjQhT5u4f9yi3vNNWwTo8QJYN1z",
  "key10": "AtM9vsPTCu94PHDQd2tRDHNL7cxdo9XbnHtzbPcKcEZt66QGwQ9Vaj9GMcH2YMrhXXaTVzmPvu678NnuSgiDinv",
  "key11": "3E8kGJZZvJczZwRdatPrDLAWiqMd7V9goZy52wkMfjUzeh1XBT2zRsFzJYucKKCwSMg1pTTYReFynzaYp89tXX1b",
  "key12": "fjZ3tqPeGeYzEbPVHAL3LbgcJYmDJdN8dCcTzMp7Wz7wV6RWm4ruiNfdhyYgWXfv1oTkiZqs97oa6FrW1Q3KU8U",
  "key13": "24KLg3N84Fjw2GEF5VgQr3PdHD6PvNyxQFwsdP3saRfyVCHq473WQ49d36P8LykjEGr4K3RLiDkG3rEGkPkQyXUk",
  "key14": "5ZBp6pgtckygWrHerUyPw8HuULa8Wr2kGWGYdPJTKUuczJKxXYaRhpLzSuCP5TBgjyDEuvpwjz8Zpp5AV6Nr5Fzo",
  "key15": "tWV7WU2YapjBwTbdEgR6bewcbLQf4swscbiWy2bLbkLaW9fSss4FG2nh2bd69bQP3PsC4Keb8bTNv46o1JpPXqQ",
  "key16": "2VMk6wkQ8GYF9EST1YMmk5JRXuxvfJiExqaL7CabRQR31WHRP7GWMb4nL5zHccsrAghy8KfmAKjmYKqRtH9dNy7D",
  "key17": "2saufajZjb8Yy5sTkwKhhQUmPkpChXKsZeCpS749Ppen5hybUu1wR7f1naxUt2driZXqD7W8HDRxvhQkeiHMVGtZ",
  "key18": "V6eyxNJsU4LR2WHspqZPae61aaiPhQyYvSce2ra68NR2bGomYGFXtj6YaydzTdRsdCd4jDcS4J9unuJF6VRTXtd",
  "key19": "4UyrLXKh5sKdjk6ixoXYdoFtgXcKwxRKgU4Hi2nBgjCvLxDK4WtUtqF8zhbcTogQLGwwTJyuDwT9LhNKxMZf1Fue",
  "key20": "39RoAUrEbX9JTLi19aaoiw2wvyquaMAucxEyz2b1gJRhoZqVVGXZ742nVJyQSCaxKKhAaxL7F2iKfqnAaknkmjzC",
  "key21": "3kzkyawsapNvmGqP3ihQcLpQDLV3Gb5XJYzxSXRTNhjUg9vFAuiLsAM8wUNGRPocG7UWRPFp4n3JZ7MQ6yBu1L3i",
  "key22": "d3Hg8EcT7ACuRq7sc8MAY9QhmjzJdPJ1DU2gb167B3sPBp3ZhbWtwiQu7C8BTz8YLVkyhp86aDMCmZwfqR7srGG",
  "key23": "2FuZyNr1TSoge6o3qFUsMMs5Fp9oLjH688HrkvGAgyzgAG4w88ZsCv5UQzfXsbxiTaw4jcbzeSy5A6WETbNTDtY4",
  "key24": "3mW2vEUt7z4szrykMK83VMfcxqgnuJ4WYbELuVdb8phbtJz6ydvyF7u4coVjVUHHhARz52poM1Q9KYsH9QXs3t6G",
  "key25": "44ehx79bnU2C23wqtSQEhBm89whsDjFTjy6b3VE7LT2UByTKpsnoBvqbMRcG2zf4v4YuJj9QGVFEPhQ7JsRxsQjJ",
  "key26": "534pKyZFnCw27JzNfxFAY2Fem9QezrXFhi7q3rWY6dK8bNAAgDsZqkJxwjcSiqozoUHAVQj538zqDaTu6NVtVCqu",
  "key27": "4nVfNtf1k2RT21FPRfESE3uFCgxUKeogs1pJwY8rQAVoyqPxdAvLZJ19tVjf2dPJ7SskXrFutFgdMBFNuEuZxLPL",
  "key28": "42M44BtYTYhTk9z46zp2P8Hhr694jGT9jMAszFupaPyDw3b8AmtKaM6zsur6JXTd1bwTxTKRQjATsHywGHWNXHu2",
  "key29": "7hgyXs9ozZsMuGNBbyDkHRh32J9SAhgbKengSN5kg9XKg8ds6k29zUNvuC4YmnpreDNsQuzJQhjm1TpjNkKza6C",
  "key30": "3jHnQzCxAkzQpNcAvRRi9TtSzkPfVHUgzBbyycBVE3afsaqwr1zA6ufSPaYmwMkMbTAa1T5MthZqVR37Ab5ULpdF",
  "key31": "5yw635dETrvDmPRbgG6p1aqU65Z1Vcss5eu72V9EeLosMZSFWJswE3sVdtQhR4y5qCtKACqe3fbWD7ArWLDAipDj",
  "key32": "3HHvQdB5XMntVDCcWNX61bL9vPdz7N2yLwqAFHvZGU7ckmrqs3SFaLezFT4kqYRQBvhk9PbhGYunK6TvmztCtSum",
  "key33": "5iGrL8hr5AtfT8742YnoSB3fFsxT1savsHeiL5PnNm3JXHgXB7yYvU4cT7W7B1xHiwaK5X7qeYwgk1ULww2cLK3z",
  "key34": "5pSqqa7Xvs57apR4ehaYpPvnNUHVyphSH1rkP7SSyeQx9Zsk3YRFz7vcUgZ5ZpxCJADFQSuNvo8ndYPqCNYHXL6z",
  "key35": "4jtqYqwJ3n7gLWHMAwUKxmEEHP2zf5j6Jphb2iDc1n7b422ZfyC41fKQ4uPfSMB1kWVJgUFvYwjpfA57HhABkwY4",
  "key36": "3oB3SHLswyXEFaASmJxwyo4p1i6EtT5Uga1bEpZVPSyoq2ntVgoExcSnwkpcbD4oywrzfkZK6Mjn2xorRXJur27F",
  "key37": "4iHYvn3a3vBwGxRcAwLbqit3U4jYWURZp6S2Xovr7MfLmaLdVmQTy1KXWeBAQ4hiNBsAPQEv3aKxigfHEutvfU4S",
  "key38": "5prsJwDHwNuw6khVWZdEJVCtFhzT9oHE7SS7oEDQhoSR11AS2jNZowjr6fwHoYEMNdGpXLQQhF98F5akMQkwh9Ad",
  "key39": "6dFPAKAF4sHb9wM3rofnwAppQX4QH2fCX4wMCSq1uZS1ynZfjEepP6ZS9bLETxWQFxHEenbFPtfWKRKHvQWaPz3",
  "key40": "4QiSCY52NZGRejCVxpZPL9qSaKeHGgE3LV4CLc1UsVgmUPb2cPhCgSwNzzSyGq7ajA8nJrUNpbXXFZA8fyzfADKR",
  "key41": "4zjeyt6RAgmfX5Sg2VRcQKh9qdkniZh4SHZXGj1ZYCcYaRPpV6WemKNBHRtTNHcyevjEoi53yv4HmFCWXrwyPMa5",
  "key42": "4TaYGnybUhTmCeYrTETm8Vw3PJMi6xHatLc44CmUPJ6d19G9AwGE78oWpDquDB4S5SYbByEn7gYgchALHaGXPw53"
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
