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
    "3FDF1Xuytu9jjvaJbMxhnvYm194U4Lr1YmGzChUAmfYxxRoQCBMYpD4jQjTaAyMnqcTMK3S88zBNDZ51Lab1wysv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvG3Q7e2ATCGAokffwfpQw31SyTwp6AaYSdvVTroSNyP9LBJXLtN1qn6ZebALG8VwHE7u4tNUnqEAs1GtJr6heq",
  "key1": "5XzuZTtcE5dV3EPrXRkuy4pGwwcMoARNhFFTY8ybdTZVPKPwtGpw7TvpeJLgthr2o79rBnx7Wmz4bApGk8CW8R7T",
  "key2": "5o7CR6UTBt1b3sZrQWbFLiqbyvS7VJBDpPjaxND8EDKB99BthvATUybxJ7RRG1s6Nn4Sk92agvxzcvktxkj2vcBn",
  "key3": "fJMjm9sg8JZBF99dbPsYdYXkjjx4usuUDKJuM9QN9LQ8WsrKFwRkoUPnrSYF8NYW14PGbf77nN6X7YGEXgmftLf",
  "key4": "3v8n4dzwkrtfNPT41LUZdKfyysMbm1PodLSLLXawm8AZeN2LmsTSS5EaYrbkzCQx1KAoY7ZDATYYYyUQPHzCfyPt",
  "key5": "2TCKcdkMAakFaXcenqMu4zYi1dbxd3fKbncC7urtdKp5PfapSLqCAkKmEXxbcr2t1Yb5gELXhiaHEqGiM3qxHGT1",
  "key6": "5WFUKQPoWJcpHdUw3tU7ynDUQn7Tdw3v8yn6E7p3AnASyDy8tRbg2o1KK7BzAoQ6z3HXnJygJXHB6SfwK2GEtNsv",
  "key7": "3de71VQzXTwUQX15noEkkN26XpCZdiwqjYBT6hiQwMb2h3jDSfDwYX1yhpN9Qj55gaXm2Dut81YgJYcjiyRLbeUk",
  "key8": "5797MocLcSjJa4g3AErZLE5dZdRTKMQNCvE9knog9F7aW57X9djwnZM6QC6mCjYn3GJU7nbgr3PHSwvLG8a8RjK3",
  "key9": "3SDpmZDV1he287KTYncT184ht53wrdy7BUzthjP8iqBDBCktwRaW7o1LuADYju4MJe6n9jNbBgnWxCMis3jmC3Zt",
  "key10": "2pcRk4vxozQEv6iARZGXvazNNQuie3tAEm5QDGbagkkq5kxt2gh5zjxq6DkVhX3oiTq7uftkzaHRzDukm1D37noV",
  "key11": "5Lzsth3ZU953HT1WfdSCcX7Mf4bpSMBvZFPX3WXMMc4EaYH8frKfHHTvaaNeDt696g9gU7cLRiqyjJ3kuTisHLdy",
  "key12": "2ZzP6siDWFPMNhjHGVijE6qS3NnnSztj5YabRbw72S6qtVmL4buouVo214cEu5fvPNp9VijQ9s6ebWTkDWDoeUuc",
  "key13": "4fpDY7mdw5gWFwx6ZHdPYiw6eYVFisqMPjQRRYSpJrZsV3MtHBbXTNELAhmzdkjaNe3HBrfDuWVq1CuibydzjeC5",
  "key14": "5PJRrcvAJwn3m7C8ufkW6pVFw9eJS4FynVJYjJ4SFwqrcf7yZqZm6KABrHFuPXtK7541horFdQgAnwSDmUvKoEPd",
  "key15": "am4YDat6fVfXThtfqpiGuPjR2y1NCkG852VzKeHpTo9r377jNQLYbvQzQNgkaJLrD7h1X39JSZ6BkJsNHyQECwj",
  "key16": "Zjfy9L64HVuTmRTTSDyYGbQXXYDVVV1u3RM8cowQwuEeEbPPWv7y6C4tEcTWRcAqe4XB9P4LTEFSBruA99ubhpE",
  "key17": "4QwNtkBudB5DBNAKuYSGJpRz3cAgfD7gMSE34UMnHExaN873yF2XYEsgjYFRiXGsHj2M1p9dL1TaTSHzwjHNAx7E",
  "key18": "FpaYYP8RS21LZ8qvgD1xL5dw4ENpxHkhAgC4EAxwJHJia1vGQBqXz2bBfNeFFwLL2oa8Rx7mcp8w1B6hb26cHEf",
  "key19": "5ZtRVAb3iAp1S6HS2CHMaGrJu8nBuVwGRgE8R6E1ghX185nJn7gFhuo7C6akrGzNYi1eS9Rde1jS3WcN7UJ6faty",
  "key20": "2Lqiq9YUhJPVskWtakobFyRkuYSUpuAtbtqvKzvFwGC5tErzyjBU6fTuMvWxM88j8XoEr9YPV4YzmDmTzrULwvdB",
  "key21": "3ji189wNkXo1SHZq3XC9tJxtHn8TjHbaR9h3tjDYskZXhC5w4zM5j6h6if6rKmeJAxn6SJ9rmpeuPV9VLMo2obTx",
  "key22": "3taTiHxRp3DRhQfeXMGJqL42qkQdHTQu2w1Szd6EVvReWUzAeNbBHPHuk6XmmJT57AirMshHZRBa54rEANUs3wo6",
  "key23": "2JQs2cT1kjNq8Rvma2AqL9qif6ufGPEV1vL1mveWg9hMzfLVKGDoZW11Vbc3RxY11cQ1UvCcMPnED2r2GmTCTzbW",
  "key24": "2yzWNH9jgdnZfgxZGwqTu9MjnPj5ikS74QrEFMV7t6gvE5Kz1e1AZCNLimTMhf625gaStoPJD4hjy26w15HbpSVp",
  "key25": "5o8d1ZaqbnCyTLGtduA7QuchxjiLsfByT9m7FV9oEfVQunUpSuvuAFCpgqUdA8Sp9zct6tFHwe6VhU7hvMsVCmeJ",
  "key26": "2jiikGMg6qHuDXkHBHNDeQ7BZvNpZRhojVDAzYjqgnZnmH3R9Tcruym47fknnQAXS5a3JkcBt6FixqDatKGLo9Q1",
  "key27": "628WfcdLsFVHcgsu1nbJZMf5djceMLAXs5BMNJEAe3oUGSgeqXzYCYCgzV7pEzy7zFT4Eydz2To1gsfvnhP5Dppv",
  "key28": "kCp7JGeRHpsAatugPnxA9E1YQzXnqndwQ1vaFxqT2GBTR3EkwA4NT3jzr27p8WA9xSHhW6MmMMEchNRhgE16Mbh",
  "key29": "2nchxhoSXzwaYJhmcTPKcD7oKxZFtKs8tyA6bAfrd97HMdUDtGW3xRzfLBCa2o4e93PRqa3ZHuDkNMFzQiXHHD9F",
  "key30": "4P9MeBw5ohT8SLSxh4XZsYLq8fFyXyE5Q7i1MpuYtwJkymBrVwebCxRgp2ehYtXogPhj5T49CSoedT2MZFuqr7Gf",
  "key31": "2sFaqxHpWBwxhnfpWubtpfrz8hjyy5v8kC2mQoMKNmJzv3ZrHUtymYxxDd7fzNQSM59k2XtLhGaj7Jm8RF6igjxT",
  "key32": "4DzZXvq1PRuHRvkSS89L1Zi9LDzkeM6FiXUwoosnrSrbBiYRiYn3a2p7rGxkrumqgPcy3kMJ2VqHDnQukxm431ZR",
  "key33": "5K5FYdG3Jiy7NAbeuwMYeqYt59pM9nPKpZnFXUncefxc7dCwcLn1yaqNKnhpfPHGRFoMrQG4oknPN3jdkRySzvK1",
  "key34": "3FznmxqSFW3GokHsvrxRFMHyvJiSGFo7bXSzjrZeHSRBz4Tcty2PPfhjauEtcAGrPHUjWLEW8k95c7HWNpuWLvB8",
  "key35": "5v7vd6yA3cv81Zub5eTEMPW8xttR66Zk4VPRZJopk4s254BcpxeVbmEZhLm92x7qV3EkEKKenMSvZ9AfwrM4hGi6",
  "key36": "27x6uJGYWnwUY25W6zEXCiG13bLFHH5aaUaKUWTB2wpwuzVQkXwZcGVdB8kepGx3YSVbS6V1xjooRwJ8kA7UKrge",
  "key37": "2gHrwts7kdmbQrRtUvPRsiHPwzRxTwKBdNHZom1LVduNjdHCpLWP6k2pgjYWSS1J34mpVuRwnVpYwNvhbfjtBVXL",
  "key38": "5TW6TfnvPZy8Zyfg2Se3ZnZtQMH8vhBatPLYdaqrPYZczEL5uspzXtqMxWTpNw76BJyzEbRY6iSXhNgmQiq8D8ki",
  "key39": "Ktkn5qNEi1Eood3F7fcfB5XMyRuKUKXKyLLTSJYDyce1pgC1qQxL1mynEp5WopRxcBjV2fUwEdNsGHAmKaVPrau",
  "key40": "dLvS5Kk3dSAYGEHLURpq7kd6hQ2nHZyvzpqdnNXsUgBSAEQmNprFWvrYWNhx9Kf6vGRr83UenJtiwYtqEonZckn"
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
