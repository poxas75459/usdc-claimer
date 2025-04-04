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
    "2KLZdHEVvgmbWqZp4w1pgrGz68qo6YSDxa5hb86nti62aT2x222UPeF8QoGde2UTwhqZF4wENQhkEkfaZuHVGtzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wmdf3aQi5ZijeoneaPsRZeYtUDLoUTSbZaBsC52pdNz99iSuNJag1NMG9Pb57oDNSUpgkYkhfvsU2XJqD8tRt9b",
  "key1": "4hmfoSiz4LmstVQKsvW1sx4gnZ3QJsaG9Q3oLzTxpE1ZLCrsxVQw7ebBTkRjKVLMcAUk8NDhUxrqGYzGTecebEgs",
  "key2": "2kwf4yTa72RW9jKvJsC62Begkb9Bp9GZu994cwVmf6oXRUizKXJentw3ijupkeL9y4LioM2sSnCmJ33vuZ67VSQ5",
  "key3": "nftDEWu1rk84UHktRHkfPbTkjGQrwZzQveEicA7o7SckzM9QVbEFPZVVZXUq2L3rJTG8R2YU95vfjbiRbD9gRHd",
  "key4": "cYrq1zs6b5kUWYieptPXkfNSVLNGZcn87jD1Aqn2U3NyLHizxzQ4tNYWyWzUaA6rvuZAWitQffqrDK1sNhnBsUG",
  "key5": "5d5KAQRbfx8bgom21ijYyPQFq3h5V5Cvso6YbaVpKnezAXfbX28dZEbDHm3CG8tcovZqrJCvypbD68Er6fUHG8Qr",
  "key6": "5U7AESMuiczBGWPgPLK9U8NboMd3rdAtkzPz2Ms6DXVR2bKHDZ2W6zHMDZzwn3UAnaQ9C6nAkj8kb7mXkwqoAmXM",
  "key7": "3vjSGkgrDojFXDg9LXa1Gna1RQuGRXJA8S8f5qotBoihziV8roDWszVDUjw7V59TnzQ1jJMDzZRV3wWYpEDMtpGZ",
  "key8": "XCkrzBALWgrU6t4C5iDfSsapJjgaN8rfqpkW3Fz9GMCJm2Jryv8bFfMecEiMn2CLXBo4pkiUHGvwFfh3yc4W3Zh",
  "key9": "2hXS93eTyNeJFCtdVTM1adVZK7uMErv3CJGdjoqkJXPuo3HrR2N4rKu4hJXTvH58mY46wspswWTmtaZQpNpxzf9k",
  "key10": "2aC2p2HuZNB3mfTCNNzHqBoC6cWFC9wbYyuwRo49Hjw6udEcUnZwtou7EAfUNtCNiuD7fDbnjU6eFwuxwpM5Rno7",
  "key11": "5UV5f8E2epyztkm9gieoEd36UyDErZ6hpizcc7GFinnsjHR4cibWUqrUpKpSjDwVpW2T9gs5HCrYwSadcPn1sok4",
  "key12": "5Lzvu7VfodP9PTFABWwRpgX6PJE2ocDLp28Vau2tSgdvcJuDeBKqeGqnqi5a57HiB4XmpiW5TqWnDn52wuYS4kCQ",
  "key13": "4ZL4aURS3JDd4QhKb4AyGW7LieDGxQtbgQJcubmwnkSvmoZXjN7yTFyPoxiFQMjVzQ8MDFawcbbisygghMgBXYDN",
  "key14": "2MEmTKJuUS827gK146Ka8dbU69EN1mfYqS1fUPDAbii89TWRho7MEwwzeqRSLUdVuti2nVbZqFxmdXHwFoF9kyrk",
  "key15": "8hDGHkn2dtKnszbdRcS1z3gKYAq6gyZEhATexeh7JC6SKztTVNyyZC6be7EyjCbPAJGSWHLnj2BhzPtJ6Z11kkR",
  "key16": "6reQ3nbaKbUecmKQho1bNvNeDhbGEt4VY3w4UZTt14p7RMgigFCmrChbbFK1twZfwWNAsCNceRA4p7wQkuK6NNk",
  "key17": "2nWekxm5mPXLUXXVqRNyje1jz2BAXNXiekPNPw2kYwa326jXwxpHC28fN6aDesC8j4ytCim9QK5zDp8zf2ZUqBw2",
  "key18": "pW92vKCQERvzjJ7wdWRZ2Dtb9bFMPNJeD1CmiHZq51i1ohaB8G9bE4F5Mwev982jwneAAsebw74WCkY88u7GoA3",
  "key19": "337JPYQ5cLC4snyRdPFpHMTSPyw5qcSj54v7FgWkeAFvktrbmhZbtYGktcM6ucUuQNCXeB6coGZncUJttsAA3hCN",
  "key20": "2Qr3n6aAFkKivVDoEBoxsyhYJ7bjBzUAxaBZsfD78QxSd2M4V8JawXYveMPXAVnj765gTSqSijLp3QnjwL8YgZVL",
  "key21": "2p42h1Se1sMfBtucTnFAe7QqgZSp1ZPvvRtfsMZFTdehK6KeN2NERTJiAqd2Jy5YD6PbfEt5dUVjkMXoowyEw2BW",
  "key22": "2bWUseTUQmY3DTdnUZ56oMJmpwNSDrd4HShB1XQRJ9scesBYtqWjkis6pzDuNGoLzAJt4HsffyuQcWTtwWbkqMuZ",
  "key23": "4H1Lpaw2s1xBhnp7DxvHEjnzSruhEscnBmk5w2NYXfeDYdC6LsHMpBUT3ifEtEStvvfLQ7p7iqUhJt4pbB2TQqhV",
  "key24": "dcqv3GudzzQhbpZ1fzsvzuSSUtefibcVgg1MjfHKVpHjaCkUPXiP1zaZ6Kne2edv4StTL5cnri6aFehCD8JtaeZ",
  "key25": "3EPo5zwfmggGM2oy7T3DqKEQZ8VrUGdSJ7wqE6mWZjjzhEAAwqgrb32UQwQaA2Pu4icW9jgUHhPbvLtHhgHuisH6",
  "key26": "42eQFSx3mjgrDNmBDSSZKsuHjTnZ3aobgXss5Vh7qr5ogKbUo8vifp4xRUUGZed6nHDaC4tdHSTMhryv4MfFwit8",
  "key27": "4CHYxdyShyATdx5VNQL4AoyTpg1jf9G8zfAfPZMnyzjC92fdsVi5RfK6uLNaT1nPUFKu7YxbJdFb8CaHGGc1S98g",
  "key28": "4r3zFKUU8ETQs51uexciDuxUGiuamSRF9n7erkv7pAij5P2HCdy68deqLrCGrbg3C43UWkvwtHsTh2oca7gjK7sj",
  "key29": "2yisMzLb5uKJMm3CXSTnpJLwW1TTBB6M7bxb8cRrAqoXCyKMqo5ZatF9w1w3mzbaVG8Hu6Lm6LBrNnzd2NU8twwM",
  "key30": "4J1DztwNJzwF9LWxf2ZQuBSK5W91iQUeiiuAnJP1RnLAXPoUnwswEU9hN1xV7cyqNqwA4EgsJwGqe8YHjpuDmqSB",
  "key31": "5ReR45BBFdLnmW1CbBUbzQybK6kowEN8SKCK58Lwuh7QnKbhkyvKx3TAtDjosKoDK7Q1yYhpcjQzChr6Kb6d8T41",
  "key32": "3EW1zn3v6arjryEeHBMkQX2UQXLZtptHzhKR6YwSptc6KCfqWMQ7HqRUh99LBhtq7UY5L8axwMxigxCDuqsRmATW",
  "key33": "5upZyjxjwXs3kEU49KmPCJVYpuj8EHYcNfKjUiyjQsY2U6QN5zgEGRiZm2RJ9UBh73cGRdNfG3eyRehNZD3HCB8m",
  "key34": "3UfM7MRZkDkygabHwMtL79ERc6PXrJxVCSNEZzu4tsRGVF3qxJpy8kc1NoEsisuna7fGzTcqPvnxJxqtYHjJE98q",
  "key35": "2uJHpjCMPZ8oMa8RuPbf2YnJKf2eYJKY81JgocXHTK5LWSEhuiTt5pveAjLaSW4zeqtmm6YQTSmhrzuKARfqwuvU",
  "key36": "5hfpC5EdZ7L9KBQKHqkXbcaZaR2aSPtDdjx1Rcr9BohX1bwp99H17uYdh5RQWzPr5xKrhwHyQqDjDrY9GADcsQkS",
  "key37": "5Fd1tx3aXm4R4CGzhvDP53a1pqEt6Ab5nc7tz3ciRTKfx9getSooMqKT3chbwtAFhrygcLJqwpjDvwRPqtQyzSnT",
  "key38": "4uLBBGFPJKVjeZN6KCEkGG86QnZr4wayhYCg1eZU2Umhr6HFR8CY2FUJpYDe3dLMq4tccwBsvn1UcRxsgroAicWv",
  "key39": "4wLRNmQ51UhnRxN61CNZSJjsoh2nXdZCj9A6WEB99jGdH9xVnrvrfqvhaVtZAdpZLybhLBJTFnYcyceVfmaHyq2K",
  "key40": "AQ36xUnac4vFr7ii9W4TSk5bNbMs776e5gYcFQbVNQTaAUy9xnpKHNRHoRxVacDDtD1BePUKhS4fjkEsQnbWVPe",
  "key41": "2PeLYVvYp5M8NAqCC1ThkW6YkFkoxe9PxmZn8z8UPsFfPJfUMCsKNwhFFXGYLLTRnNS2W6hBqS8JibSbpG79Tzcd",
  "key42": "2DBS5GendFgnQBtVs9GEqJaMrx2mMtVarUyi7Hp6ooV7RjcjvQn2TYUbeW851hSZyGGb1jii1xPQ8AcPE5ngAbPp",
  "key43": "2ojSZxqfs4XGKLSafyVBbrZCg7iRFswMezPDnVntD2aQv6m66ZFzhem4MQpp3wEepq9J6EtezMGWF8G8ASdmFBZU",
  "key44": "2WPTcHxNFqLLQQrC761xuEfEuC7m3RtETe13MG5QFFJ3csXjrW7KwUkrdGaekbaHEfhKpgnTXNHkCbiD9DTGqnHD",
  "key45": "3kzRWBY466DUXiqQ4PhZf68ZCFLs9QW7Zc9n2VShycsFx7cYBjSNvWCG9Roewz3FZtD4LawUPANBwwJ3Ggfbgz3k",
  "key46": "5odHiPqVowRGfWDhYZ3nUnEgBMkDMFpbP5p7CHpTZ38b28HUieF7Kekat1jrPU1L9B6uXDTYxjPeuJCVTZJfdRR9"
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
