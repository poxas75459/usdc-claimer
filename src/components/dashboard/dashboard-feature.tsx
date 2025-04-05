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
    "5USn7Jy1qAu5oXQx95aebRSivjNkJPGW8G8U7PtKuBj6rdFQeqFHWufXrGBW6bFRqMmSeB8QWiRudQzwkweCTtM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nqxC2UEbYM9BCytdJfD7Ph3TGcBXmL8C196aXSvoLZTMvfxYMfVHzkeHivHMbBh1tysCS3MG12LWH3PgfwWCHdH",
  "key1": "2kxukbfpVGzSfbVpkbNahU3g5W9BYPUdmhvtKMrr3cpU9on5s2TqL6qjjP2Nx6ZWQkJZygw9ikCuxPPEu9wtGBAZ",
  "key2": "5ZRenRKKj6e9co7jwWQwg9ksADjipHoL95CrGLuBMzxT793mDpWZqHNrMK7eHWoe9fomkR6PowKejGuPv6WoXNvb",
  "key3": "4Pf8LfehnhWf7QKy5fEhVeWPUMDc6Xm54tzAwFKPhiWN2oWxsK2vDjXoVPHWFEybWq3ePyN4k5NE9q5hctXXTy8b",
  "key4": "3NqmqENBUoNx4tbdrp5ugHJJrFuzj4QP3tNcqvdmJbYx4T6kVSV37YdrahusTLE9iMpTraHAUZZoG5U6vA77k4rp",
  "key5": "4gVu555ozFk9qGzTdBPSERZvKYG5uVCipGvSZxYAw9Ks19oFmxtsaFptSU7UVLWUVCmdvBSFKpzukZWGn879yKJp",
  "key6": "3Bo6FYgbAiqqLV5XFFWiHjRmDddquAxNEbTYaZStijJ2rndcLJMxUQeHz2xEzjAaTXBnV6VtUnqS4J3sWgzPHePL",
  "key7": "49P44Sr4RHe8E3agwyAMkGG4Guz972ZpLnMx1xxMU5xPMu5vGv1b7mmVHNSHS2PRTPgdKFK3kMdAg5j3c2EU7RM8",
  "key8": "2MEP3cGPnE7eSiaKZFSyCFjsaZYPRyAVzhmFVDn9rC1uJU6WXv6ketTeyT6oSQ75yfoYpNRHXZwhoKRrWGEEAFeQ",
  "key9": "5Az3CsnjBH2JAfHZJK9iCcz14QJzfTLNCNkwVyW91JuQAvr7bbchoZ7Pqq5ojwtmfLhvA9L5xw9xwxc21NUpPhrQ",
  "key10": "2yC7moFrBSRbB4pkj9TtvozKGnAX27fjKNnYm8nSjX7g8UkE9nuVujJbudYvrQ7c5uV74a1H7mhAfQH87sq372BZ",
  "key11": "2qt415cKDCd2xatVNuUehVSdFeZpgEnSatumY8yDVbQKUfDbwZxkPjLXz2FourEx38ZHkUTSVrMQu6T69XiDVmUm",
  "key12": "315xkRs5DsU1Mz2JhhXZuWHG37xJ4c4jpUCF7RzWMG6u6BqhJ5W1GmLcMfuSmSjLSAXx727Ebxd4cnzkqPiSPHGW",
  "key13": "4bykAA87kMLvdZsTSrBjj2BXmRNSoeU1zoUsYfUB7P2E7d3C9vxPFYLGoTR2waJ6coZ73S4prVA3GhwD3mdnefZe",
  "key14": "2GvipdbzDN6S8kRznq31cF1pfaqDcJg9mEyQSBuCsrok3CZT5PckYsN73AZK3Sqg8FQN81v5QwASAuEqPVpX3Zc3",
  "key15": "4L7RrFLKiKzSMpCHrwacounSLaJiwouRzC3dxYpKy5XDgfY5NZtYpRPexvyQsEe9obYQ3WQEyL3Ev3gJ7oF34NeZ",
  "key16": "58abndUy6o2rHpejipX1A2LNFAnFhQRcWdYTFaM88XvmGAPwFDWKfkJNo4oxznBLjDTubqySpeyPFwmDcUtwrkg6",
  "key17": "45Up3e49ofcSwRTg1dTGWS8sc6LDbvKQoFnEyXFrvbT2puqRHtTqfos4hTYitgeYMEmK8KCSGRtKuruexcQVPyLh",
  "key18": "2CtzjzUeSz8RccuMbTX8X9CGskpt5VB6NkRQpyWYcjW6uXj9qChd75nwBWmktkMfMw8Jms7ji1MZjqykhtLoenWk",
  "key19": "2fPtxBRuE9u6fdLKWgS3or12hxAmaLhVKpdpZCDqin74NCwXV9ue9H4tYhXijMjiVboNG4BDKpXjwneaPaFMYZwd",
  "key20": "3Ybg9N4vVwob5g7GgXxdDbKiPXNfXYbD9Jr3cuTrdgXKfVD43wFR6pMGj2Y2Z2P72vkupjvBKQGxcNQaqocMqT6m",
  "key21": "2nHMiYAfCXv2dyhnovp1oxJKvnuyoHhCpP9e8tJ4BkKtRpmVELdBYXWJUEQitq6Aeexi1TRoAtshx3xDT7zXMgNR",
  "key22": "2sQVSev8Dg49sWUBvoeoQo5dWQz8szzdFgnPW7RC6LsAW6D5jCJPMnhcKE3LVPT2HhXrKfWXEoKCZ74Sbzax8WpL",
  "key23": "6488T6c59GHvnJnjWfszBbBpTtMqNxnEmQAUBfDMYBdU45iHHanyhz9uyqP5C5RJWKe2Uf5bMTrfpqaYbfyAhvQt",
  "key24": "56yknhGCreJYq2WMuSJE9LD6y7hib62QaSnhztSJnRHgJ5vkwS8XXuikTZm8AQWohEEKbmQrJjuBud2CSngurbpc",
  "key25": "4TQQECSsSmAPszJ2rpNgU3TThAQjA6zVaD8RUHsFVXYsHo8Hj9q9yHT2EsXkkJsAK8hafNKrxJL6JPZ7ywYiYwmp",
  "key26": "wgzftckzz97zqcq2XuuYhr5of2zu5HEXhBBYMT5rmADAzUTqvNWBiAY8LwMoomJuzoLz2o85CXG72nGj6gwwhnT",
  "key27": "5oZHXWEk57VufpRrkNJ6hQrkYuKNWuPDq5hqAwFpK7d8hqNLPHrBU4X2ayMoVspbcGomfA1TCNt3vi1tikVcH7D3",
  "key28": "5zGyPHNModXc4JgmQjkKg7rVbr8YUjpq34u3mvz7hs4iyUKEDqmc9cJM8B3Y8jjDAfmsnXDPAyT8cVTgnTargshp",
  "key29": "VtutAJePtWA41o8z22CPVT1iyHRdgqSfwCB9jXeV3gJgGZLQjRqeb6HwZxLRcZy2doMvSHHhnbKio556cUJzPXL",
  "key30": "5YyyVKE3MmJZ9F6uidMKK1CTTFEMQoG3cSkamczyPQGyyWpdKivhrGqLJo2UUsSnVHqN7oRVAf63cqbugf5PC916",
  "key31": "48eykkbQXJqRxTihafGHJ8A47HPihDqtpFTKQ5q6FF2YU8ZzzdWw58ULx9eo14xNSGdF2zUtFqrtEWdcCcqnScs2",
  "key32": "2hKkQm9ERpGrkg69oE6gmskeh6XKnoDzP7pWKh93ibT5ESourQN6xKjQV11a6ngzthJnYMBmqHd9TmK2UQS1sBc3",
  "key33": "4NsHiCbRtdWmrgP9R1ENgMcL6dMyiCKtM9cQj5HjhhAj3XH4WbfiBhnN8hTbSjPzgdnNiSMkuj2eBoQjrSpbM7EN",
  "key34": "5LHCcHzk7ydnTLUVVhJer8P1FtLVkMQFARVcRi9VqQdVBU4ZnM9XsdDu4cZZs8fQ5FCEgTY3nSrSVhxs5C5GXp2U",
  "key35": "3pe5LHXrBDeqRPEdNfsmXXB3L1CjQASnVCeufkT34ieWULMkM6EteJSXkCL6raGtkbVCha9ovBi7B6dz5k9L13Fv",
  "key36": "3Woej7Mv4GEaqN8HqVPLKWiu8CrPN2FmJXdgjUhqUd138ZbFtoKpiaiB7Mx8MC4M1YE3NP5AseduKdbRSW3u72VL",
  "key37": "5K4cZQUxFABpkj3ohYmfKGRtfuXi7WFwNeyXFe5yBPgjdKv8zEcjTz4XPGhz3mJYFsGCwBWdkfX7kptaZq9sPHuq",
  "key38": "4gHHaAkCY5YyxWVttUuE2CvEsKtuc9o4tfNMyEJXnoerFChYq3r58DE2SsWh5b74tLGmnqBf5GP15PE5y1NFhYau",
  "key39": "3MnPmnCRsvyVTTWDznRQ5HAkU8g5ePtuV97FcHjCksMq7A7oD3X5BXqC8NLqjvtCV5siZMYN81KtyhDdeomwf7Qo",
  "key40": "5fwSXX4Sn9KHciknh9P9ZJFhpjv4UPZ25yi3MZ6ev1G6rbhNG38FtuzMqjfbVrKLAgde3PnyPq8UEuhGMxKHPL5Z",
  "key41": "5fUeZCAogErC5NFFxxX528dwaAQ25BSXiwxiktkGBycMTyPsjGWeN3VmzHWpPXkvwoUnopCk5ytqvU7g4cbW5FBC",
  "key42": "2hvn1rcvt4qHSC9GNUia2d9EEiHJruE3MdxMfHkc7vy44HuQ9ybHLbS5JYXPRogJ835fv7CisbPUFubNC1hBhD6z",
  "key43": "cNijiaKTjk77gFkT1txWNkes2M4hBMYfQuDVXr92XN4tDJp9wKJDgWDxQYgziLhMHCUoFh8TuosQptkiJ1VPJ2g",
  "key44": "hpaU5zqfr1nRRv3C2s2E8A6nUaf7wPMPWpRdqmHiWz5PjD92pdSziHkfNdqPALsQ9w9GZbmY6fP8hdzca2cKAC9",
  "key45": "2XNw5jmgaMgbQoatHFB9FQuHLJZJb5962R8N331vqa6PAfYEzUdVxmKjmJ7WEbMnfa3qRyH7uQWAbQECezEMtaTo",
  "key46": "XZYqCvAWJ8KJ1cBAJEzHKYGRjBXwGnZaVbESxWhR82T3rZBkru7Azd8T1kXrVWK2T5Th3bG2kpvGWKMp4FLuj1P"
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
