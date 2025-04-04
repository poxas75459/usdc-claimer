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
    "2AYXVXLAkwoTHQJWQczZ6NpqFbhRQiDEoxiY2yed3CsCaPqBeFaiceUvKP87VrriB8tQbaumvRwc4B6Roezt3nBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TQvRbkk7V3S8V9CUYYtKPCHJaCDa5spkjJPyRcYCCC1jNTB3cMiCUgxSYWSSyCUvbnX3HPShrYCp5z4HpH9ae8Z",
  "key1": "2vUbPcTQ6RKFtp69uog12XuM98BNU4YQbggcvpVXgrMVtiMwv97g7zJ3SYLhWYxaJJMNkiQ7ehqmwPBhNpD6fxvv",
  "key2": "2QPKTs3N9RwHh7eW7vKFxqfRGGBWvNMzdNPy1uq3MbkRYvpnqvm37b6ssnZcfdJ7w7Nyx2jZYFr3TKF4FXwWDSQ3",
  "key3": "5wZwjfTW7eAeksdkwosR6XzjYJdUP7AXzWzuqk17E2Ch3krGf1SoVMkUffcNHYjdVXK79D2ztZyMbB6Z1qJ6Hpqr",
  "key4": "3zs3stQbeySYzHvDMSQ2uAHsPPTzBE9KubbGSZbmPkWSEbzqMoxvrrBgh8x4ix3X7CQZ5yTpyrqZgAhM8u1KtwLj",
  "key5": "3rM373yy1kkM2vo5Y19FJ54U5Tt9hV8qyU1XWuZJSUYFZXkwf9ChFNxNcxR9bCCov6aWq2zvwsVPiMF5cYAWiMtN",
  "key6": "4YYutX5ZFeWAgPkGWrNxyMZbu8CNgRkDXQqDsVdEjk1tfaYqH4a787BGxr4iMH93M1n83MhjeHZhfSB8XUNk7fTQ",
  "key7": "4CR993Pnn54f8i6x9RkXJ7yrnUaXctUpTt1ALA9B3pzKNC1LQBNFjD2vnzXv411Ph9Uo5JZ1s97dnzmHaTQ69bfo",
  "key8": "31tzQDueFYCis3DUETAEsRLtVTfMjEVpgTqiLGwT4nyHBwqCLJHUKyHhVYdvNEqguErjCSjwyCLAMuqE8QGikKK6",
  "key9": "66FgboRG7tymiE8GXZohPYBFik2LTWEJg5kDxNx4fL6yTXfxVht4iGx2VxydvMNtdDACyDTKh9Ep3z3rK3HEU1rg",
  "key10": "2kACGYneL2u2GfMKexmDtA561XZMSWhjYSuxG9hGKxDNFi938hfmbMSz7xruNsduwZDtbYZdh65raSnPEYraB5Dk",
  "key11": "496tNFZsgQWYfd96wqoeSaF3jedUvsnLb9pPoYjGsadinUgsCtzp27VFAf44XroxsRZ7C22A8AyMru95Wfffrn9w",
  "key12": "5cZwbaJNNeqPV6DPYcYLXFEJJYcNmeaLqdjYzSXBbEe7CMi1Lkx52znLy5z3SVfpjh6Gi1aqC3vorv3SVggdKeKb",
  "key13": "43gvZS3WNKLviUpCAMknyVUaa8mpSJWky5XJB8z6o4NFD4qQaj48sUWN3wbbnrN5EdWYHWzVu3ZHc41wfyM5tAQJ",
  "key14": "5jNrVGroXpjptwiSNybFaro6Nm53auRM1S7iQ6DdRt8ynswTv3LoAjynY17csWu1ppTcRhJ88Ygi64rBCWkbuDr3",
  "key15": "4tUFKrSbspHWhP9qQm5xAm9QWYGkeW1XNikrufZU7XYSBN11gaDUfmCLkDWzy15iyQeXsoRtca82U5pbtvBieiao",
  "key16": "3RPbHvxcsBMqZow2X42eSJbhEyRXx68ET13PSWXBhXWL3AoqpKjGk1Sy7soCyY8CzBKuSxGa9myNVZTrD6a43GD8",
  "key17": "WGusuVdVkSCo28PET2GkN6ovD2bQ4iGVK1S4XJ5vRkwcVSXYcpUMeDk27M9HBguyQWk3zRyjxki2pDA8wTJh5zG",
  "key18": "5p92e9FzgDyXaran2HXdF3bRSUKkfh6kX8omGjrRLXjzX1tewbc7rjk9nFGJnojCBWZPLqjr7X1FEwRokD45K8mq",
  "key19": "5EFQR79d5ZVhPk7Hq9wCY6CpoaC99eZDQJoYWMyV2cK8qb8WnQSWnDc5uajZVVKoeggBTWymzRjyDmCgzjbsFvnJ",
  "key20": "2miJvXGDAyt56xswBtAaWiLAjokVZNuBP2qhPCHkGvizktYjazLSkqJu1VMgkXmZEnh1tJPYwAsAnqS9TXMpTT2A",
  "key21": "4GbrabojpAR7sU9P7vrTJXUPdoEPmJKSgbxaRWBvi89AXSVAChE22iKiJdDifKAYMNorBibyoyGNjm3HUjwGLHnd",
  "key22": "5w4GZ9xMPjNLiQS6pYP4QrBMgLSLy68c4gtxW8hZdGirbt6Hc2JtK55VQgJkExLcwNUmPx2BJvtFNFBofrNYne4Y",
  "key23": "3m18zU22zEpNz2RmbyyKHak2e8MYjMiBkLBoYucrQZtkeEjFhddUGJ9c8bj9hWB88Zp2jSbBQ8H211af8EKhuqfD",
  "key24": "4ruZDQ6KqA87ZDntKZaV7cewgFZiGeSb76u6zysbc9j9RbmVw7tzfpb1kVhbtCdQeqyokMSdV633U2KKYhzvL9Tb",
  "key25": "Q8g7DHpaoB9yYZiQTfpU3nXYDkzN7bgS8BSK1tn647ay9VbZCYnMp1xWpCKN6Fd6tkwaMdicvbcxPXzReAUrXew",
  "key26": "3zjXWPNSonPgJwyRLs3APWoFQaM8kFmx54djaQYqY1v1CVga1SqEK5gkL9D5vPbqVdT8usqQxGkHATPxaC5Mqj35",
  "key27": "37KUr1vguspCLy7KFuNATQ6yrjXonPWqfmyEVnZDfsVDkj1XVCWvVcF4RfLXt6DqbW3iw6sgFG8g6s1Wn19GcJnT",
  "key28": "2n1CjkYKdRY8eRPfvm9o18ekLQbyHCotmDeVgJJd13eWNkTYhuws7E3XMq9Y9hVMgq59g63b8ZVX81mopyhkXUn5",
  "key29": "4mGDxPrTris4ym3mJSWv9WFtCoJoecSekt8AQ4eqFmYjPZcD6GUDjA1geH6qwdicf6vhraKo8w4Fjz44qfvsYgCG",
  "key30": "3gt7XDysAW89nBbSPt21dPSQJACcxHwfWMkPzKtpuWED1DwBagRB5Lfn9McwN8cstgeEhA6nMfcxvxD82idDyqHr",
  "key31": "3Af2PfV8aV6fCPL1yqXvFRjRbbrGFr9YUeS3B6ppDS5KCV7kseoreZjkfPXR2kQZ5D6Bk7a6YBGNzdJcdoRuUq4P",
  "key32": "3Wyy5u3TCnic6dwC4nMhbUrCPm3uvrHeyx3MWRvdG9Ju59d7nYMTy9u5THzumnZfnb2Nr3rX876s93wYB86uiTZb",
  "key33": "34fn1A7JwAMDoC5gkFYTrJ79JEpJbyQF3v8TwjqfwkyYU263mZTuhgM9uzGgMLrSjfkDEoXoM2WuvRHvq9xpdsWF",
  "key34": "2rUDcNjQhzCfhR3fwPJxh6arDFNu5Wze9aY5cmAHopqXhuPnGDkwyPFMxbQVLhoANbTiRikXpTD5f7SQNWywcRso",
  "key35": "3HXLsea2Xb6DX14pakCxWZEmpXLfbPeh7ntDFk4gzYMpGmQPZpe8SSxSrefm4T3qJCGiTcxvWUPDJPGyd4mquW64",
  "key36": "4wdmB13iCHhuPLi1m9uyNaPLp6CWSdzr3Wz3BiGELknU3Nt8WGtnBjg1ahhmkRxYrNAX63vN72pD3w77u9EnpLPR",
  "key37": "5Ew12Cn95NhNT2hb9nedkRTGLfAnGFgGR63KHYDjPeCuBVs5JvVsUmuYL9kugGhC6o9sJk72mJghnva4QtdpvR4N",
  "key38": "2FUN3VHKp61FC8hcxzvH2zoHXmDZkP5w1cjWQzBLvWnyM3qh3bpW53JMA3iWDLenBrRYwwCbkxrQ4i6gDT4ShwfM",
  "key39": "5zBS79rpKpJTUeqcXo3urp4xKDAq7shKV4jBJb6Y4JDFCtGyECLeERGmyZmkQb4M5Bd82JXyyePnoLgwhoAQ46XY",
  "key40": "3utTnbDA73k7MPUhnAWYgEQsfgsSaVBHjosBz51hGeX2omK2fj966zCV2bheYaY1Kh4aK2yWvtxQ3pnAPzR1qVga",
  "key41": "5rP2s2pnUn8Z2XqQ3ebdbQpifrET93mzJjyBUmqzTX2zxSCmZn8WFgrmTNFhVPwj6aKrgsSaX3jHd7zpW1ygLfxk",
  "key42": "4Tmi9NbndQoi47HYNRsZ3ALcav7wo3xYH4mbASnjXeR8kAMj4bv7rnR9ufqTdt8GXYdG62CsHGtAvpcNR26scc26",
  "key43": "S51Etcy8f469ESRzXmPfmAJ5JcM18QCoPQR6Ki1w7W9f9TkVnJ7Ea932sftCrdd8jwvp1erCh6epTgYn1sDfK3L",
  "key44": "4yrKrw1GiuWvEVvvbLgnSRNhgLrfG8o9SrvKKzVsqhYd6WY1ZHo8HFCouaetPysrHfBLvFUtp67gE6NwfS1vLdDQ",
  "key45": "2oTDkjiGT3wdXzg8AbKzLRZ7VKetffPX84JMgQYFZTDvjgGpUFBzYBzScMAg6bcCijXdrCeNSfDB63m26JbPkB73",
  "key46": "4Wtp3MijDo1KPoPXMM7R7fwbKn46m1kNL9YBf4MnBdwCWfbSdzwGhAHBo5JvCGQQzs7W2MghDaJ99Yyh2FxXQwmB",
  "key47": "3xY6MKCMp4sg8YPixNxTuv4et8NnNsv6z8oSdEJvd6DPifenBNVrmPZUwH8dPyoLKuHkwgnEzzmaobmACZPAPom4",
  "key48": "2C4VTvC4A66vEiYyR9wpcaUmJKsnmvh9NhwLRbAaRcVvV3En4AbgX7i88FmGa3fkQoLsD6DsivUzw4VNarZZHojZ",
  "key49": "2Gb3hApkMQFRU4SM2F6LKECa1fkvvsHv33Sw2VwyLTk73h6qQFDYDF1D19nvAzz9soKHH1FtneVfxoicYAPkwR7X"
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
