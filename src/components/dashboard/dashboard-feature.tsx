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
    "5YQ5M8nRn23s3TqspxKhtWwnytqwLrJip9jNEwpbQDLUiRVKXsXeGfWoPYYZk3jVJ3xW6USQN4YUXrDiMwFnq8LT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stb8Th6VpEvCDRhE8gWfdFhvtT8iTLYFytXTqF2MbBSfUDZynuYtu5FpkdGvCWKHfzMe5TMXVVrJKPmie7z9gEg",
  "key1": "5R53HNcUyWVGdxEo5JPmUDkymMmWh6xmwqEioJgKBrqWdhparS23iEUtDHax3GNZeoJ4i3gyjJYLcWWrXXD1xdWf",
  "key2": "3mrfBV6dQhkZTdztaSpMw4jehBnpBRNDp2u1M3pBgLSDY1V3BDSKaTSmQWiCvzoD4T6W2F5Y5qyZCEpUcwSP8JBz",
  "key3": "2611PKNMEiFBeX9XyXtMPP2KK1J2PEtWxqYRSsytheuHYrwF5CC9FZyNfonBruHB3neWX5pR7aHqBA5D379UKRS2",
  "key4": "5241G8QPjrod7pEqHx1XB7nUSoUzYc9YXvLPtJkCG478Gm8g6RetAcEWaegDB5DAMx44jGeHQKoDLTd9o11Dr4qM",
  "key5": "wRQa2SfZdxswZdmPU16UUmnqxinvfCYffoHje3mW6PZmNKVYQuJYttNgReYoA53YDyKvF29uu8ck13pqJ8uy4Uw",
  "key6": "29uPYUxMHH79RLtWV4VV8P96JKyggzEnkiPfmHscyw7zUFjJmCzcnETbp2dVwbujC2cYyCAFzdEa6Tk1ywL9Zjd2",
  "key7": "4boFqtT2j5YtHHf4PZcqHjfE2HcdcWeAoCX1kxZPTHogMg6bSiG5MbgKCpe5zDp4wcsq3BG2yBfcJ95HZ2YRfE5q",
  "key8": "4vrUJjxZy7aEpM1MUn2vN8KDwnj5D4964NcjUaqphuxJDxpMVqANTxsQTmKTnbuxoNb91mZkJiCHLhFrqhfoajBL",
  "key9": "5KBA5K41oe7orj6XTjUT62UWUYHTb3n4YkGhiAB4UtzPDzqpUP2c3wAxwUFysz242shPUfbRnXgyAzJbiWvDx2uu",
  "key10": "5ZXHQy1zbn9Hf8YRKkRs688ZNbChvoWkpw6eCajwirsLa2u2tpS69csCmTWvigK29FkzJRTcpPM436apUjBTxrr5",
  "key11": "2wAeV4GUQuZDhKJrvi1whPhqQhc5QfXadAVWVoCVG5nDDzeFBtkGnfcYGuqV6MUeZaxLbzQJy55AJyd8d3hteiYT",
  "key12": "5gkSbGiVYARw5g2PHHPqtXbqjw1583oUsogv9XpjR71uVsBDPm26xYCPWe9S2geE7cMCsbGBz5SQhq2mdaZskoqg",
  "key13": "252Qji1MR4GGFawXqrs8cz6xprt86zYJVgssR5cXEjxuQ4EFicPYofnmy3CdUo9rkKHzvJcguB32Lj14iQtLpN3k",
  "key14": "mGKzPe4EHaZdzk5CcYDMsocGFtG91npDW5rZEU2TdGwnEzvNzxE1K9TEqfHZ8UA6krD38NnsJA1xFE9bSt5Pfhd",
  "key15": "45JG83F2G5pJ7DLbjosqisnCi97HGcfeB4CiBXDF4b7bj1DqbWw2s62urzSaaCSgrjKu7xmc2qnoLC6oPJYWQAax",
  "key16": "4ehdLtT74NPxyRKVk7LdPsGGj8ihg3JvzxBfKMbdRjVtb8v1LxGeSoQCM2i9vv2gVmom1TuY7x4MxTPjRhmsBBEK",
  "key17": "2LAo1xRPeJjCUkqFNwx4PR1K7DUfAe8GSj5D1jVKsXf5HJtFwmZWVK8Koa4k8euK12aA5qkKfLbcJJDhedRpQhcp",
  "key18": "2oppPWrnBWc2fWGjYDCpSAbwifyFxatrepYYYpQXqEpDorqvsPH7RBeJdwZw7Pd47KG2fbk8QV1DYXx1LoHxJkYB",
  "key19": "5xspkbnDVxmDrQiWFXj6Zjfn87N97CjfVAWBrJ4fLRxegvoC8NjkkvKw9r364QP7HFiD2Lgjdxif52vMc7shaA5x",
  "key20": "5VDXTNzH5iddo4ds7PwC3AaG5Ap2jT9zRPArdUjzmRK2YjySTTEteCpcYM2truyaMrHCiQqAND8KQsFAtamek4Yz",
  "key21": "dE1kM72iKxPidPYyNwAZbigwHR49ZjvcoqWCLw4Y69GwGTzqnvSxdiHgwAhMd2zSnghFrq2pwaCZL67rHDDh6RF",
  "key22": "C7xmxJv8P1x4hRvQXdYPpWeHp6EBJ8tfCtLtyxf4eiH1yK4BcovBy96hfUQKRxPcaXprPULTFmorfCxgBWkeGVJ",
  "key23": "5xuPNpxxGsf1TFcKxXsUSpSvrdL53zgrSPidxtCnVM51QZSQzLFGnm8oUpZgb7Wfn9rhPAhHBU4MYRcYHftLM7Pe",
  "key24": "5v9eJ8SsLKzBkMv3TiLgxwFdYunjrFqct4NQfy9H3EhqzkA5c3cvjTfLHnH4iKgQ5PFg6XoExNApUBnsTzLBLQok",
  "key25": "4Csy9ZimaQTDT9T62vht7PM5PJV5zYccqwA7DgFobZKpY1ZyheNc8cBCU724vXj51pByGfgY9x6EFie1WCZW8G4B",
  "key26": "24z17DAHkM6JcKGdtTRLHsG9jsw1yhKwr71YcmEMCYE6TqEXpgy1XQujqQAweNJYDHbHvWcNqDgpmE4EeV2ET2Ae",
  "key27": "5jzVHUrh9qSfHNMgjdHb9Vs8XHzLKELDgYdi4ThrkRQ19E5F9fdU6EsXBBf7GKNd1grUGdxnHab6G6v9yw9eCBit",
  "key28": "4HYSzsxLhf5rmwtjPaDf5kG91q2XjWhJcbW3kkFLpAshAgCnHk4fceucnCcCiMMvzToqbyFq5NwE6BpzcfxhKNps",
  "key29": "QKy7PqsfdxW3EbEwLjsRDYK8wBeSTL1eT2Hy95Cjb3cDNJ8ASCwG2uobR9gwrxytAfpwaAjhrXCbqzbfmLEyRDh",
  "key30": "8it2enDPsefm7Fgsjfh6aPqkjjjjkad1YYyyGfztVoekXHjBub3XiRFGqYUJHgwHC6Lr3T6gV9aNzzyMJ2VZYUP",
  "key31": "43Qefbt1MdtVxjABFKmLhL2KZaz7H62UNYH1Sqtm6TM4gwh9ngjCrKqydbdBE4gynX2CkFWe7zGL15RJqogYsMVb",
  "key32": "2rfc62HQBActf39CxVD8F4WX9jfziS5ZQfAPwAjW7vdqB7TDvUdEksb13XaC6NN7DTkqhMCtdn8Nvfi2etyLTxvU",
  "key33": "4dnt9ZtfVcs2bKxy6zahRLBtvkCrp1GvKgpq5URPB7BpJwLA3oRGswkL65cyBKcRMGYyp1qP7LjErTaRaCBPmh3a",
  "key34": "T9Aq9qfwn2Q5kMKJr5mn2tBU1D3Hqt5LnrFQv6grAGfoPjfiAYBprTjCPjCvmdNX5HQUDtMMKWwpdbKuyQ3HPCn",
  "key35": "2whzGj7Ff9T1mXr95KBZaxDpfRSuPWErufxsrrhBF337uckXw4WzncgtBeLX8YLWc795KeqaQGG7vnhm4vRRtX9M",
  "key36": "3LzCMJY5VgMsBhLN1ZdUU8LdBf74onQqcthUkh64iTQAiAWBVwM5Zb78ziwsQ9Lru2TFHCx4fUgxixVVASCz7ZPS",
  "key37": "2PLfC1kWJxLDg9ByR6N2NahqRNLPpTQAt59u15smQqBcPdh8kZJEHQHGz4Txc4bzdQYZtyaxSEdth1jw5DcitSQ1",
  "key38": "5sZs1yNmVTipxw2wywCCj8ixfWN262Y2YqdDNSAu8oJPi5UL7uFqLxb3QTWGZhtYkSHSMuVDTPPJF63VpDaqqZ1B",
  "key39": "2v6RDa24e33xZo3GHUpbC22S865EvAKmdy8bWaL5Ht18eMKWbrB1mnUkBZjB7oBRMgRJPXesg85nGM2A2qBiJ2vJ",
  "key40": "4etcU2xRK7X5cKVtckBqR2YhPjnEJQZgdCxNGx18oAxpZUEJNyCoedfJ4aep3jp6XthZEuCBqUAvxTb4MoEuSWE8",
  "key41": "45twpps4g6iLDvWcitbRUZvqpqvpKesQgQr89SqWcah6nknYj6tLn3ikodNvKcQaTnuXfaEdqnA1AYB3DjtWkpaL"
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
