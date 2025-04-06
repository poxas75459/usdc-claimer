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
    "rsmnXzPXhz5sj7ANQ7rDt4gi7N3jkkb5g7AVoSWBKYPXaXub4oZssDQJ9b1NrAFCoz988TmRmWX9xjLgrnYb8rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yo2UNSTiaZRZtdnoRuReDEQNQ8ewqgbLxm8Pn6hCC1U57hjrJHYaivbD5WFm12A1GFaqoVzihHGMpyqEPRDVbD2",
  "key1": "49w6zsePzWWB8keCkD6q8BGt8218cnRTL5KG5RqeJQuM9oBSvRV58WgyN5FbjDMqt8jQmkdGRUAZWsrR9J6k2rJB",
  "key2": "5GAo4M3chDc85mAQbkqsKeFKzxeEE5t1CRszV5mn24rVtYgpdcbN8fWxyZYR6mHksyD9B8GxXaavYcTiHv2dhCa1",
  "key3": "65NwZv6qfLNVuTq1YdokVMLq7ZB4AydNZ3iT8hddexbRy4Hy9qHj1Jf3ADMWuRCQ6Rixoagpm7A9VmJAiX1w3KkP",
  "key4": "3NWKjxZG1vDyBvjutKnYMo8YxLQp5CxJL83g4MtYi5pwJijkYLocJM8TRR3x3YJU3hjMRm2jNro3Wn1KowuAnJns",
  "key5": "2bpEbgmH2J2Cieb2pU1eM6qWzuZVSybGxoDoKKNfKoL3jTpsYiwb1LWqDNLMqYd1R5aNzf8dGoEaXjkeJp8KXBUn",
  "key6": "3hSxnSxE5LAPGLq4ehDpjLUQvgeQfZsEZmUsFrxCDt7pj3D8AnAtTay1U1VF4aNrnbdtrjBDvShQdza7sHaou58s",
  "key7": "22HGAs2FTAxncKbUXgS3gaJig41zvVd5ms1zmqSMwCJyWGBLoDzukzuUzWp6cuFJ3woA7PLuBiVSQUv8TSs1DtGC",
  "key8": "23NTB1tq5EP4A8pjdB23emhBRUqhzAhftNE6TKNj5DLqjGyS8YQ6Wm1WNU7grADsSXpfBd3CzpruXjt8GA3ffxGN",
  "key9": "4sdRsV5JqT1REtKtuVfVJk2aAZdHCmqEZnYZEJ3g7eVZcrAcMtmJVvwQhqWKF2NtNiBXgiPc4eYnrua7Zs3SomUm",
  "key10": "5kcvX7To1QV4yCNiU3rTvh5GgnJgEFdV891BtsFeDkcg1jragq2Lsa5AJrRoWXuhxNd2iCANhmNqh6eFnKuW5tzN",
  "key11": "2GSVGir7wP4mLwcR22j3WcPdNQNAiMREq3faGnRkjz2ADLCuRPgZwkKNhMpUvkbg4dRRFawK1L1DPzj9Zxur2GBr",
  "key12": "4T2f6Zw7LZamtq9USjNj57gGKChgmFgQgjpGM8K9Pxu6fECUoip2vBAhjwYxoDEQVrVURJRqJo45KiPGtyWS6Rvz",
  "key13": "jhHzr58bES2BGARSeRYhmDzDszTFZcEhRpQsXK4daqMDqKzNRS6DMJfMRbuoTTvEq6Vb6Ka2bKWZvPJihuiWgRB",
  "key14": "2CFU7Ej3vAQPGVei9AKiqcrRpsb2ZtVrGrwP5cTwynzXMb2cPcbuoLCKoNjMAswqejU1jVYdcYpuzzPXEbHmht24",
  "key15": "4DzWrpUmFDtsLRz4zpRChB6VH9P7T8nY3nT4rxoXn4ptbqPfP3kKfJ8ogNDZwHbazyqFFsdFHkiEGU4VfCVtqW2h",
  "key16": "32MaNGw2C2dCrUdVrWfNWQ3sNUvNCR2ehASFPYHCMZ7gvEFsiLBitSkrArLANwcATWqi9c9W1cpsXenZH4PHyNHc",
  "key17": "5GabrYXq7nFF2aGpgNEWfvG1VLeXxtdd8jpimMdw4Dw8JuJofWjUc4jxu5poa13UGM5fjWppUSUwV7hzxDUeUGki",
  "key18": "41uPA57h7Pn6vonp8utkqiLxL1Ggp9EQtFudwYJ1fxrVjDd6emNoHFVgKnamqyX2TAj8LB91TV6B2wNr6GurRGU5",
  "key19": "4bFiyW4CaG7dPdAA2Y5j8WEfSb4p148U9R5srst76ErQco3wg487ddrNTWFq5PyurSKNJna7ksoGM3aKVwwdXobT",
  "key20": "5cKRD7rp1iBrSwGmjVCcn7VJNmk2v7SGnYFGFdSg6Cra2UDqai6Hsk3VmaUCGuDqo2uFth1eu3HYNniG7gQ3egMP",
  "key21": "5UR5Gyuqn2JB1P7cXZ817Xjkz6qL2gXrYzdeNnXf9jDwnQug4BoDJMaMXK2PFSysoiKev1CVy1kMUr3v8Uxp1v2j",
  "key22": "3VRvNKyBCkqTfN4k1TLQWffCNUF8zAH5uQfkA4vmV1bLwvcy7HzuVC2RbxdTGikarAMxeW4TtE7PJFFTzPYcWSid",
  "key23": "5A5NfPp5aYAdR74BxKrnDnPu25o5CTgDzQCDWM6aWv4fun2Shi5o35j8Z65dfEz5ASCRm38BRdX2zT1CeKDR1PLs",
  "key24": "527DmgdXBDXSogDWEbq94X8JisFPjku6FXMPLbWzqWmVWJH8emrkYPQPEdkQxHEwJG4cVA3tRvU4H8VuXrHNTqaR",
  "key25": "4jsyraKKKWqQJ5bjQsf4NJNqeSseVNNP58HVDmtULzQaKa1rfRwjDGg74HCU7si1e999VRm5qk4tos1PJrfamtZP",
  "key26": "WCRdYfEkFtkdqPiYBhp77AAR6UE4iMundQLaU3gBcHu55Buqr4ecm8TRibKSxfm3JWohfsXWgpm7rjN3gvHBnJS",
  "key27": "5t3eikF1uX9Ei4VkwbfNPvgk5jeHR7Z1SPaAoxnHiN4cyFrqep9NkR7ZAubCkDHGF4EoQEMgLy56sR7drR9qnrSN",
  "key28": "xDbvRyfH4N6L2faPpAx9EkRWPngUs5ty6EYZYegsYJ889MNauMfoaQV3fs58vFxtj4cEqPia9y8yp13ZvtJg6HF",
  "key29": "3DbnGFVVEoajPXKoHov9bZ2ot8b4wB3TifKvyoVLKkDLQMYosVHRWy9eeZhjvb38anADe867B6mh5iQMhxr7huWe",
  "key30": "NUaH7rDXdoRCoa1CfitWefu8LBzQ3BX1r4Q3XNBynZffef27wwuWxi1rRAAC1D2TAJjxk7pwacJ6ukbZQyHXASx",
  "key31": "3LHAXCgx5PerzDCVF8iEC6bE95neX4wtsogqAMZAFJ4NaqsnfA1RVym2mVeEzfY6E6eEEJ8Amc6CiiRE8naMuxSe",
  "key32": "3KDmii4Bz9Vg3D8sX3qhfJtxA3sZPS88p1DrL1nn8kwS8vHEhqrN1BEEb8DxLedqpQpJDdCJyAXsEdAcicRt1SHG",
  "key33": "5n7fUiEzj9ChydyRjEZJVoMLP13hseaJyQGXKyGqZJAaDzdpYSaMghbJz6FqAs7AuQBicnGg25rPkRM4JQjWZyxT",
  "key34": "WwYh6peHteMWtaCzjteynFjTHbMETjStkRkHZ4S655cFaq11QTQvcBgJEiZkpkmqXUNTysq4qogM4exM9nW9i63",
  "key35": "2VsBpqJUV78f4Mjxme6mRQqRPjASosB9zZhp52fGqkAveWwS8oCjamPbMYVFtX7DgpNk6rdSgm1LhZ6SCoHFmJfV",
  "key36": "2PSekCsXmMcjjdEPrxTPPcVWUMvGj3GzaqDLSMi3cFji46CXM9GwLVxjWkefaQZFiPsACW4KfTSNfNM7sKEqCi8M",
  "key37": "D1FWyxozhNje2chZ24KRzNfhYz4zHC8DzeGGiZ6L8adaEhELPVDtiLeAdg9gtkDViorPK8eyCoHr7npsKkodyQp",
  "key38": "2jwyWBNTMnTagdcNTk3faBM9XP4APyPM9PYNBNwLN3ToEdsuJmx2SUWmhkXPDPZirsHmadoJh9zWeJ93w4UhGsoh",
  "key39": "maUYjUYE6tz8cUeej8STTvRve4Y6WFc9E8vg5Vv6rjtMnX85Dq7Y57a7YZ82oxzaZVWZUNE4zWw8d5fT2PhuutV",
  "key40": "9yNH9ase3xrRdN81caepEBhnjRJVF41NZGaBGdA1bLvveamDF1iCzthkT4MCvyCRF3Nz1xEj4nj4U4XFdyf7cwQ",
  "key41": "f5xCGfL8734gN8Vemz5Fn94WU4VoRJfjfa6BmZmMhp6R2XTpinX4SXShfbar95GzZFEPTGPCJK792sjR3iczUpB",
  "key42": "2NVJWdWgTPmFaxrsvmwiEFR4viHH37ZgLqfMx1WeVrwgssr95E94LyDSncXRnMAikhkDPyMkn8UNeQ2QmdtfAKBT",
  "key43": "mpxXSS2rWowk1D83LJayXorkCFsmvUXLRbKYKT66SE7bPdpEBMPQF5eJzz6qdfYsdY2P7tzfKKdDBqkia1UuYLi",
  "key44": "4ieQTtzQB3eMqfyYAJ6Tf5yYBpoyXaw5eA5dFVgwKzUQZeZstJcrwxK21DDrritQYzvhXi5bRT1ifCmsmunEBgHJ",
  "key45": "3CRZueewUYn4kSXoWRTSBmQCT5jXg9jhFb8tPNdgV8D65xubbyRs6uNqrAzWRK5C7y84e5Bv8fJTb4wVQyTJJhG5",
  "key46": "2eHJoBckhXhmcBBsxc48LEHuvm4tcjT5i2Ak7SM7QaRxaX75eRC9fcVgymdhSBrN1bP3pwV6Hvqb5RGuBRDDa1iX",
  "key47": "54wWbKtfndZWEa6oYGioo4S8bUrYqbYqHv3QFSJto2HSESyPHoXsVETWYGcpyetbzHfEhA28WYCQMzHLT1zxkrHm",
  "key48": "649ynfdhyiV9xag9wFeD3VYv9tBnk5DKTTpUmYFxRkkDamn9RsAUWvBR1So8B5cHFFPcGKLLdK4hscLTGU8vLsof",
  "key49": "2tr21ErzfcyyMVhYu1VjqANdiRgyAdrV6sGE9GXh3JuAYrCi3q83iH1SRU3k9QiPsJxu7BGk1FaJhEwQMW4zvh7L"
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
