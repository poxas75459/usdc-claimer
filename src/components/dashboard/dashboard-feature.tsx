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
    "5koxwEvWkqxNSHVf9LWbdQ5CDsHsAyQgkveFstYa5PFPenSiFpXwYYKy9eJXAR2TK9dEsp3AzvxTuUzznCvm4Agi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsEsWhRZMvu9YazE7DfXaCuDjvUg6PfjdRr6tLT5CFXYRABCGghi2pPN1A9Wkmu1FK8j4gw1DuzLfZ8hDA6ACBB",
  "key1": "3fzZB3jsxWemdbo9sypvnBDMJT3kr1NpfFpyPedffXaGmCDPsMrM9H74uh9VSVCuvwWNQZsgS2BGsXDnQ8QpSt98",
  "key2": "2NHvodspsiCPjc9H9LqnDG93jRxAWoCnAFMyz5icJ72ZesTQ46gdaTa3kDynXqVRNrc5igxyWcPRJEjn3zwu9sPA",
  "key3": "5GZpDB7xbaNrisgAZ5FYrqMbuMH8nuFLqncnLyK4Tywz3Cc3RF6FvuKetcRaB2kNoDomJ2drNyw1Pdsvquyqm31z",
  "key4": "51UMtUCtTeL9FAgqmXpF4hvhjBqNHfU5WY2ztkCs2SNQiUVz9d7GcLiRWbt3ykg1KNXai3QiwXFZx4vhnPjYFTDH",
  "key5": "25HZ82Pt7X48KgiznWR82F9u7PFA5tU9qxDCQWNyv2DhaUYLsuxHVsbr2gqvLE3BR9bWwfoa6R1L9ANpqGkyatvx",
  "key6": "3b29VrqLF98wipBMa2eoxGu3HM168hTqS1cFYdcSphQty1QazWKtwXBN2Ya2yWiqN6gY7itsVct77S4xXHZfWhnp",
  "key7": "4ygTR3KYwPRad9NMCKmRDQdoJUs4GduyMsFZJ4W8gB2wm1VLRnetLVFDjZcZXXJu13m5yBmc7jFyQHqsHNNFHDt5",
  "key8": "4NA81EYmB6qs8MuZbY1bX6hAX9D1xBaGqjXEzTyXTNXL8X3TsRKcTA9pMN6VPo1MR9W69o644VL9U6xkKVR7FEn3",
  "key9": "66ar3ZBabBStQGteLGoY7U39Yc9L4p1V2Z7TES68duDosuN1QBAQpXRQiCxwgt71nAeP7JbFrh4TUkvsmSYyqpqe",
  "key10": "kTRUm4hGwRyjDWHVmmDzHx33sdDjP7XrGNA6H2wJirxr1GmdHPUXrHqG3NN6CFvc6pG9GQtCRNGZff2G3M89SJ8",
  "key11": "2QoEmBi4L71ELvKFyT7HhUELXKJ2ctCjKChxB8SY3dkvUw57HEiy214oFLA8BohDJmT6fYbRHgmviZzS1G35uCAP",
  "key12": "Vo6XMcSmeY58aC7Q99P1j9TY7S43vc9ov5iMjB3CSeCTWs1eicy6Dp21QxhhNimHkBz5FKfdMguYP1zkJ9kvZ1P",
  "key13": "XPwsGZn7rfZPhnkRAiDQgJnaccvtjC3aUBfPcqkMLvn2VazRTwRjzye2BEoVdpv1yKZC4AtCsppCpJG98yuGZe5",
  "key14": "4NYCYvep341W9HP8LMKctKwKphNVRzdtE3KmYy55JNXKsibu692zBzGk8iAvV5RfPhsbXRwkxRq8h2qe8bpYq3av",
  "key15": "yJkJwnYVgpobs6fG9FVcJD7TVghcSGphFsczZCTtB2pu5nCTbd2M3Cxtb92LC8gjLYmdNhxuqgCuNqPChBpfopb",
  "key16": "4LNBFJN8TwDrr5QA5p6Yf12Peb1Ec3b3tJi2cNsa29DdtxgGFqBFghyX17TjQ3hw4Wt3TuDGfd3wNzdD5xgg6SxC",
  "key17": "2uJbNE4SXxb74Arr3zxGmaMJdPKBPBj4UvrKgoc5fZhNsBLGFvi5MpjkuCqJwM1Rqvx5WVc3GCsSAQ4xquCF5HVE",
  "key18": "55uXQF3VKEeHTLL4rkMqnQQwCT2da9LC1jYDe3rxXAxUqu4BKMTA6JJQ83Vyd5Eo87xj4zBp9hKf8sSd56eMqXYJ",
  "key19": "4d4DjQDB3d6sCpjAUMWtLZxMPLVZiJg44pTYXbhEuCMUp1qiBVvq68shP5pmpz7BFC5VR9Tyu3Upxd3vRE3RNp3e",
  "key20": "bVXKPiiEbwnWFAtuYLk9vXnq6rjrEfnzDLq8d4nf3n15dUwpRZRm1V5TyMLcXvDhQnyiVuDWHK68zvcMDFh3BaL",
  "key21": "EAQ4dgnoXTabD8mc4FGzwfdNMBE6v8BYdWXR7MYgRES4SnDU9XQEDkRDPVrXnrj7V6QXmebabgr3QNkwm7TTpaH",
  "key22": "dQ15UJ4VYrMrCcuw3G6SMCbNoxYHL9sBornyjHohN3HL6JKhyscdTLLmt9SQJicYKNbA4TJpf9jMn8p1NMGS1h5",
  "key23": "5sTGsihr5MzRSzvkTSSyv5neQEP5aD1baZqnSGtfVBVRbsZPxBE1B4s5ac5n4MtSGSQfX8T94goqfXriTnjyJ1hk",
  "key24": "3ZpuPJ4bDAC7EmU8upMjChnaUpHUGxg2ythTaZtjN9VN9jftsFZbSrZGDtvug9qvHVkRwxeG3bHdr2Gsa9CDtUy6",
  "key25": "2t2GnnQxfKUWLD968RERMCGgfcnhwvL8SYQJGCtFkTQCeCBzotRkNwZLpwDKxwPEcSinYRHc8GGuCZgzHersLqPA",
  "key26": "ZQ1cK1SkEKpEotHyt6LJcrcwLhC6NfXPrnpGsaA1fMnNLM1DtnyX2jP2SrtcomGgY3NDNZoTXKepPDze65NAtDY",
  "key27": "3roxtKCvzVueebqiVpYoYdx8hiBSFSRur2JvvSed3qbroXXAGF2sPDdeTrxRL2Z9cUqH9wbqaLdsc2bXVBoQkw3t",
  "key28": "mPJseAv32hyZdw9QKRCMGy5jWR9nobuas7hhYypcKBFKMUnYgNWMvNBskt3dtcHT57bPfqXkc4nakw6PcrikuFL",
  "key29": "2qHxRS8CUow5p827Dx4FbMtGHA7B2D84iekdPbnXUDSobCdgwBkUJJ399meDirghK5vXhU69f6ZDB43Nm88qSu91",
  "key30": "8uT9T5Sz5WJjhALWRhQduGr2a1YExPovyyXriRYgUu71Ge1K3vKKKaoHN3qMWaQibzkexmLAh4hQaozvhS8KEhZ",
  "key31": "3FzidceCjHPTXusscAGoZq3diQL6kqd5iRxehN6nh8YMumTJLyjx1TgoDpVhQp1gApobHmX7eS7RsxB7hoe8QC2u",
  "key32": "4Zo7LRsHDgX8PhewTuqB4N2cwGn5RaSPVmro4yWLrs8wEJzotpmHLtchtmBWz1KpdgrvhBXUJCzGkFJtRKKfyBA8",
  "key33": "3awNb8BWr7DVE7vDL8Rsy1Rqm92nLUN2sVWfLVz9SyguBxtGDNhksa6foGyZx99Yfu8dXiAXmSvoK64fsk4fMfCb",
  "key34": "4uDNa8wT4GTkHeModHidhuhX1daCELEkgGenrAP6Mw2ANeTc88du65CYJa4ADTxrrzj2yY559xeweUm32gqHjVfn",
  "key35": "wv3Uo4JFJd2tx7Aq5KcZQ6gSkC7Lz5MiFActvJe95QbC23iJAoPoK56EdwpNP1FWn8eZ17Yynxv9fcD2Bt2rUgP",
  "key36": "37M199qibr2SuqrxMCMtpDjuFdMweQtfZpzq9E9gt7rzYRgqwSQ2XgaCdHP3BDMw8Lv9QxF33o4euh9sx3pyQWjH",
  "key37": "5xBk5S8hgWTymMhjabUonnaS3sX9Gq96BWuaMu45HFKooQCQDMGGx9nVsV2SefDAbEpnqASJXi6nzHHGUwRNUZqC",
  "key38": "5vTM23hdEfkyhCGpugUUqAvTG1KEfFrmEuWbH5i9KtGLcu4ZvpVGWT18cksn87Q9f96p59msfMTZMWdnoPJ3bxzX",
  "key39": "36nLCads5K3LeRAWVEA6errjL5PcBgFdufk4PfdJ3scUTVgBpTYi1Sj2E4FKpVaYGkPtnUeBk4tpvkNxHACBUfzU"
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
