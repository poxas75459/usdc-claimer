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
    "2CUQmZwBhbeMi1zq5Y8NhR6KqLbFeY6AwAngmJ3HLr9SwtwHodkZcFhogRWRq7NY1BMtsKZHSRxJA23zG97j7Yef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJm53McJkDDy258znsbx3qJUkN9Ng5MUNeqhQZAvGKSTjBpfJ32QtSuqbLktasuMwgQFAvke73C2NaLVKDgjK3j",
  "key1": "6HXXoL7rQLK8kVbRT871Jz6pEerRV3YeWiEKmiLyMDER9eeaWgCRcZi6Qo2KTzVnVgW3abCKcDpHv9tXm5K4aV4",
  "key2": "4QsvJirub3SCA4MpyAaTPjKSRkjrfki4pm144MSMS12siFXobquK8r6FcyicWc5bazGBGyLJHfsgTnsxV26UDqob",
  "key3": "4iayVeqGLdN5DP2TbjFSfu4uAyQofrqSLQSZ3xYuEvfA8fpMsdR21GDbqxJ4n6jCKso9fY3qEqZp1zudRdBxhJEa",
  "key4": "2dqEuwoGN6rrHeSRfQsPDxbNbUD2iUn8tqLyez8Bkn9Esap4aoLpfLUh4RNfFMUH8SbuLGyQwvAS6e24VZR2NLkp",
  "key5": "qEEFnSQQxnoVwKUS58gPqEc67q3zQiG6yXqzBxHhVjxMKPL4sP5MBDPz3z1bjTVsSqzx35i3uJZigHLbAgo3n8V",
  "key6": "5eZzN1u28jPAMASQcbvA8a9rT5AEigVAL24PBfGdq9M1a4CQuoEKcctnBV3CEfLMQAg2hcxjaTXLtNnsVpQr7tjM",
  "key7": "7tNfdtYiVJab55DV1aGb8QZWGWn7tSY1v5zibrAUPNNPPte7vo8htaRXhktDhSATwBwzyMXMhb1qpU7mXtxc4De",
  "key8": "28ucb3wvAZ8W2do38VkK392xNLN35HmZvd9YG5wEPEj6UdoG4qdYsD3gY6Gx3WgvEVU4VBkXDNDdCfsM1H8r5ttz",
  "key9": "3zcTiwKLqk1T5HCpvMAxY65QZEipXmCgcDDKj5MTA9KgyVM3C88bY8SiAD7mR1Zrna2APxcvWeWaiDbB6a7atnZC",
  "key10": "56pZKkstoEVuBcG2HB18T1LyXBp4NkjfQ4dnFr86TVCeax8NUsUjKGP7d65ACrVawsyjn2NugQQgZzujeVLPfJc8",
  "key11": "Afi9opDBFAepJHnDuse34HYaUGnNuXfab44jWudzJMZ6cxaduv3d7gjFuzb3uswSxp9yvHjcaAYR8QTfZxyuiGA",
  "key12": "52jKhNRGdJGsqCzrjKcP3BnEYTAGraRrRHPtqfYfbYXfXHXQmXfm8Hagt1EJ8VLCexHFu1nGiYWGC8N82LT2bGyt",
  "key13": "5KkWvrcxS5SZw6FK1DZxrPgvu9ddpue7KkohUnCnmbpQ5Kzis8o65QSm4oEVasQG82LYRgijmHJXBHSbaW4FnSRA",
  "key14": "3aLKMSyU6Co7M81nGfd3ZE2U4xwmLw9yhfSbrgLadMTEXgLzmRoKSP5mJPK7vXZJEcaExCxRYdb2NweUKWXn3R5i",
  "key15": "5BS1XyHFZJvSyG8KssRDtzH91Gy1ZdTw3xaxmSrRTupEkFxniDCctis26dtpGZhUofnVbmSJoLsrVzmZk414CbWG",
  "key16": "26cwmpsfcKGsF3gUs3sbr57EbWJGVAcVDRw6SFXFUt9y6168qcaXVPS7WeVKdcfgW2nNK5JYgv7jdworeJB6VC12",
  "key17": "3kFLDH4ih975RB2eyaaRS54UkPunZ2s2Fj7BfcB4vgQM7sK1LhJR1UEn5umf7vZLNRaHPHoz7RvcmMWGhbsc2sUP",
  "key18": "4Pk75rLM3Hzk2bdh4rbVxjj9AqzQm8NLWu7wxCzbBCveUNHoaNRXbbXDzh4nnwHrSvW9cEF37x82qXfExzssEQVY",
  "key19": "QsrHL1tbYjUaKo33mJUSsXoqLbeKCaRiXs46WySj9f9g9y4Rtg9vLt18QJCVFXa5pEi6eynDwZ2cPA8GiA7fDdn",
  "key20": "2QXZyQS7HSYcaujKHFpiRnUKpSa6UXUNEM6B5XdAiJMhLb5niWHLD2NSSUaQNtjdgwCuNXBUEp21eqJrY2cMoUXj",
  "key21": "3mpwNUZoQ8w9cFXHgwQSEe3YGuFv4Sc2jnp4kdE78hC339Pr5dtDnFEtmSoHBm7Y6sZGfuoi82Q6J6RqctVZC6Go",
  "key22": "26quhyLPMgbExJNsHiyaeDP7iDcRn3bLDKZiLW13Vw4cm8DzBJLuf2xmqF1d5LtDuX6tssd5WEu8fmAa52nyWunA",
  "key23": "39f1EZnH2SHkj1a7xV7rKX6baK7yjQXMkfpeURd8f1prw79nvd13CzyMBAbEMbETeU2uQn8qfuSnf5endpX5Xcxo",
  "key24": "4VjmjsPtybd5EmAucvTmJ4tRiYJYfryfPghieZayARzfcqUiBxWQ8HKjeKadvxur5ecZgRPDFXU5dLyoigDotTTp",
  "key25": "5zK9DtZt9Sq1UHTVJyS4uaFFJ3pc5MPC2k2uSMBFgkYWc4r9CgFHzvzZ2mXFsGp7o6zWQNwWd7U8WtDtiKofeRtg",
  "key26": "5h8LLT4KW8FACJhSnXYB4vg43jhPMvrSYzTd2QQLdzgEhdin7d5SapxobVJrEjkHQMKusUq294UYSTnREiPKY67W",
  "key27": "FS1V2KwftdTnU5RUP2A7KALvwJTqzPtFHvfGWcWEbC92hSELv89rs9jq48eibk3C3RCWVLE2JmSv6MoNR2u6xFP",
  "key28": "3mqaQfzWDHV3NgLi3j1hzuvH4RBZ3JLcUNyfe7H9BcSnYpwxTBmdmeg2iAoWiWDjiFoSTUrfDaKP1VZQa9kp3ozP",
  "key29": "47bt5Acg7YMsDYyt7ZiX1kw2NqK9R7i8F7ZZT7nByk2VnV2QTpy9LWeLt8gTYTBUXAsdoVBDG8PndVQmF2gAxJMy",
  "key30": "2AdEqUvw7Mw9FG3Sm2v8SZfTxzNfM2TatPqbAXouTMaeWPa2DPhxLbqSe4BJbwQ8F1dEo4ggPCMMWZoCKZ5obTaS",
  "key31": "4yWXccDhiSmxgsNaWV1Qcft92zBtTDrNPkNBQ7CqEU12ErL7J8XRLC7uYrqQ7cmhBPdkAnkjAjizAhbEsw4Eydgi",
  "key32": "oeu5cF6NETRMbn2i1k2c1sBnucMGbcc4ycujbL1Z5MqGavgwcRWwAj6Lg3jz2toHS3BGBRX6DT8hDwaM2VRU8FY",
  "key33": "kuPiFXEugaZ2FoLtgz1HZfvPrVzdQRHV8fPUp2JzctzFB3UfPhq5UWQ5VKLfmiYNbZu4j8sZp42eNjDyeEfqKZS",
  "key34": "wb2s2GSL6iagBUZ4mECtSat5i8och5sqjQquYmaPPtQ7bfTxGriGB2M2vVYsXiSxtnjxiF8ERjeVNHbckGo5ZLD",
  "key35": "5aGfXhUgPRdr9YjANWATYBZU5m9MDk94zK3uqqVEUDaeGdZhiWjvLMEZgAikUswgQtywfswo3R1tmfPXm4RG92Wq",
  "key36": "2SJKqXYbzYXVZTBhBdk4ZiP1zGrVYhqFzfL1f1DNkUxiXugSgFFizqeXAMXpsCWX3NaypJUZzhkt8RFVo6qVUGDY",
  "key37": "3ZaTagYKhVipVmjx7Z9AdGhTq22Vk47UsGSE1YKLMJgCZhKTZSTbEFZXtSCAwWN7cBicBwQ3QnBZV9K23Xf1QEky",
  "key38": "2GNmZ8FVMeuh4tCxMgefM8jNz5tCWDddGBJSNsM1PXjeQFRTPwGDnEzmMs175hPAWA6FfqKQ5gypjVa9pmgcJfQw",
  "key39": "ay6aEyh9x64mTpb5QTXppu62FHkdUVtVsaFF4cq2H8DKQdgjbaQ5PQLusUxt18VNHkeqhboaXw7opkm93mT6qHk",
  "key40": "67LbDVDxRhNvSwLyg7Y68K8aRpfMF97WX4fjehX9sbEn8c7nhJSFa2m1JnobmPJPJc1V8B6DTJbENPp1B9BM1FEw",
  "key41": "4nUMDqKDqZXHMTVVa9Vh99rdJPFNAbzYMjTjQCA8c8AHV7CfvduwRLcwXzgwLiVnidxk5WmGhHhBEHWnceaSncU",
  "key42": "B4GrAw45exn3i8XKcowjFRct2t1pschWskQuKMd2jqHFquC7tNyzjCzrkq6Sc373KifLA5GqEgwJdVJYg8ddyFv",
  "key43": "5kS2VY62gCYm8nv6q2Rb1rbA5pwTaB5QRPSDQTvRahkFPHBvcgMHCBhEk23urE1iU1pX9U8ttVdqJpXMTJpVwCdd",
  "key44": "5zu2H56qPW3wVuh7pUxNyPgLXdekduKrT7i5ehd4sqecEPfHc3734A7HKZP2dyt4CDJHjSR6Ma4NK3dW14YLrdJ9",
  "key45": "3md6WnQZjFswV4H16M6uQSk2mGLNnqRcKDVuxT3kmZa5WBv3MqLJPJei9QxgLCP7Fw7D6rV49kHxM9C75TjSQ9bX"
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
