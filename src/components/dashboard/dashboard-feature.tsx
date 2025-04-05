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
    "3XN7Dyf8qUTtA2zNU1AQC7UPkArJz4F5d868x63JDZJoEFqW5pYGJRQqJ8K9u972f42WGZpuRQ6WWA246CwXtzgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RaD1MkK2gh5tZRc8C8BCwN5pxf4c3xPaZANkLkDpo9G1pN4XDQudX4KUDBQN2dMbWMVJvkFRiBW4VzXWk3PpcCQ",
  "key1": "4DbMGCtZeyFRxcoJZb77zqiS84b46EWkYBA134e7mfrDitKLFpmWBMtvDf5dgZN65zPev6KSwvVoP4tfjkmWuf4J",
  "key2": "41PySno86qwahPddJXW8iHwPVZ3NX5j7WSRxSor2NTT3WxBdbXD7KrwJMkaMgDGECFqhYSU7ACtFFo3NjkoDFGs4",
  "key3": "2i2iX2GzUmikeCjVpSshq3GPLqwEynXGBq6UuSEVwiPYewN6mbjSdf3SVGJmjuxpwG16Ww1cyKzMjjrN4bJi2hpj",
  "key4": "beC9AP1uUZuSjG9dsfmLrsKTZphXCYNpe7xJjSbwMay6sYJbkoYTjuuKBUkUmiH7QosLwC8QZo9PWcBNBBYM4Hp",
  "key5": "44oSjZENNygXRit9NQXMct17RhvTpMTjCe1W9KGdiniKfUBEzvg4mARJrMRu8f367nmfKsjjHbrNebAaajt9WKJv",
  "key6": "2hydTZuVSj9NtHScBo84pLZqckqt18y5bviqfiLvpPbRTQjmPcXevFLTiHKPidZuiEdxnt7CZThPqctCcPnHvET2",
  "key7": "5bhqxey7uA5dm6mkp78FYWHhYhssTEC79McDCqEoJ7wEJC3omwyR2kwarQ4npXAjZiz3ubA4LGcPZubG9Ff2sEHt",
  "key8": "SQm2Rm5tm6R5cDCvBrub8kKXDvuYHXsHYge8RniVyPnHwypKm2WjWKpin35U5RScdKqpeXv8dMxumNNnvRBMAoW",
  "key9": "4h9mMqmT96cbvz42oqcSAmv7GqCGJDgCJgedSsKMxQYQUirYhu7PD7KtnUCan6sfzi8uTnbDRpou1pVHFiGRyhz7",
  "key10": "2FzC46CKE5z7TeNzXCK74AY31bTjDpQzCQKTJLjiBthGoura1f9VKW1TwQ6QeNdvds5tfqm1zXZdEiU7AjYu2eVj",
  "key11": "3pzZY1wZ4WzP7mwK4UpPFgCAomuMaL4VH6tYPu1GE2BWMkauTDPAec5GAriLS27SeRbv2jA5i89EcMN4v74D2aN7",
  "key12": "53XjLskhq9FNccGzNF3wynHFCTbnR6Vnyb9wgt2ErhF6RSKc41NdrCL7efo2Eu5dwPx9Mx3AvLBxQ23SJNT1uG85",
  "key13": "5xPTbYTWkEW1axKW6X6EsMUxgdph76LdgFMTetE2jF4NWFsbhCEHdwBEStUk2r7QVKsAi5vBB2Uru3rKJ7fotTvU",
  "key14": "3UrgwvbzkAHt27RQ5ZHqrX9Zc4scbAVFDZ86uEW87gTHqJVx9vE2xWSuRDiuXzyFy97sARWQ6SHBeQ9PGPmjRB63",
  "key15": "5Rj5akFfzp3Y41ZT8ksmQDZkCrHQcEiRwhAathuiReQy6Nd8W5KfBfDeP7fh95LNQAokW3ro92jjrzB9ErmKgLAH",
  "key16": "5s1fvFc73NMfASFBhmZnBHz6RSCJTTNxP6mvpeXSyowT9s4i3LVs3BP1QtRcsbnU4qNLJPG1iwjcnu2oR5DrBwzs",
  "key17": "5LJThxBT8s6psZVHTCJQTbVcRs2aw9hMqAgS3VVxQeyi1MtTNhZJk6yEPUpSWPymwoy3Dc4W9ECrmqG1yBUXN4E",
  "key18": "4B97qb9KSqe1oZ2aChFaYpsTtLFgXeEeWen5U8XzDDZV1XK8joAkJxYh1ZwEDXLR5JvjyNkfyMAwkVyXB9VQz5s3",
  "key19": "58RvwbppHZDLUpycPBZw8Fj28rUdJdoDDNZxqFLJzchvMrnEM74WRpwC8Ppem6Rdgg22mY4rjW3FG34wvs7JLMgk",
  "key20": "2ZNozb3QwRULQjox65QrYsQFadRsaBhmioWFBuxAFAiHe7AU9ZNDirLQrWoGdALXVHUvJUjuZiUcTUpQddvhp7Y5",
  "key21": "4xVKxy9457yHBXrArkmxgQqW6q3sCdTTChdeYphAxeFKa2w6EACzbpAYRsDSWXrN2kpXkLk4gA1R9bTFwsvPsPye",
  "key22": "25cX8LnPMJPaFWUXzLFooL5nvSvPChy8vAXetdo6CKYzMvcP2sw5eiPzmjGuzXRj5Lt4K3mWchdaD6DFFSnpxzuK",
  "key23": "3YzSTwVZb9dzg1fgyp53WEGt3kKsXyeegKbZphAEJkXhVSaRbppuoVZ6XMbyUYMa2B4xQAhAKP5m19ZqPgMbwM5p",
  "key24": "3JuLDRfVKak2118tRkFxWMqMvXqa1LcNPskPstbg7pRBJ77QBpFb3Bes4BB7sexxNrXpg99YUZ9tBVeNLYyDYwRy",
  "key25": "QTxePYXQkuhQdtYKQLp3ohbPUyLhLgNw15T1GUYxc3hFJS6gYkbeB8vwNALpmrwp1Qh9fJFgefKcebaXEwE4JHR",
  "key26": "3jVn71ZqiWBBtXgCivyDaStgnhjmKYgwfCj3wBkS33smm3DvFTdTLGE4AmndEpRSFBMTBsirMVBDiusqGpkEkVWs",
  "key27": "55bRwLZ8TVhBEN8W5uEb7STqBiubk8ueJ9RHNSBtDW1os8qD3vhXo8uTFrwEJ25e5t2UxL5UPjmLnGM5jBVwgGd9",
  "key28": "4RgZ1iX3WHpX8G2ny1HunYEo57d7fcrqiNmQDvpYULpmnLJsJPaoN5ofYMSkfrMTxwCQC9WVQDsyY7g4AYn4zpip",
  "key29": "2rGUXKS9JtTQBnysZmFXQnsRSnBQ1SijQTFE1SMQX8tckob2v7HGLPvNj88xu8Mf1zRGL6YDTgn2u56JASZxFXYu",
  "key30": "3cwZkDA5FFZEZER9dfK4ysfXfrua77w8Cfwgwshozsa9ncKSYPF7JM9i7Zbx9GMmM8p3C9GaorTeaUiaM5Xy49Xo",
  "key31": "5YyLW7PtXzQ9mZWRxB7sq13UyDoaoijNKRGqUR5Evozep155361ugWcYT3wwiDVgGMfBznogJvw2xuENhVSCWgk2",
  "key32": "2xzgBDBwCj5UrgKTayc4BsxUJbpEPJ3r22azZ2piPx95b7BwHAmmv1HWu2tcmjz8gdsbp1UFnMsb1URUDQKWVaVq",
  "key33": "JdrVXf7Zg2mQBMJoS8YSbPKscL2w7NzGZyq7Eeie917iv7TeSgobxtBgonibYMDAXj1fX97x9CVNbxEUmGZAKcr",
  "key34": "31c2odm58NTG9MSQ41VFMPWWCbRw8aiC1WefHTHnQaA5VeRsxkBCgdr5gK2kHTXfQDSap4V8rHFNM3HpXrV5KPZx",
  "key35": "536ESMPvZT6zY22CbUNXcEF27p4XWHdcmTETsvEuEvhQ22ksXfSDKgdgTeN2ok6VmmGnZkrR5uoyujnpv53RjrGb",
  "key36": "2gai6zDUy9VJ4psVUgwCtGVR81HH4hDzotBHjXeWWsRavBmEfDqGmas2tYGWdfF7iBW3Pn2zeLkb73v3hWctumdW",
  "key37": "5FpMGWM2pCa9Bf8ccEZUDKeME5dTn4qMy6HGKnEsoibELoRRtFNkgkyJ9ut1sE3LdHAYkSvfiuEcnArMChzNio2j",
  "key38": "5AAYApWw9x5n6q3Y1TZvTj48qjC3To85wbRiQrHCDXSDpnEsP3Kdj4bzKzBtq7bsCM5WwwNeouAiouH9Z7UhuTrX",
  "key39": "53iDsEWVxUXNE9VEX2t9j9sLvWamfaRv9k1ensdnUxXzBe3M4biNW2PcDzhYbbdECgJK1BrqG51V46nqD7CT1vBJ",
  "key40": "EpgfbipHdXwict3BWgqv7KBxxndbV9YbD49ZLfNfHPvdeetfSgAx7q6CViZ2BQm5hnfXc6iLSrK6Vz9EHmqVLrV",
  "key41": "39E3wLF8WeZrdR78Kd5HCE5kuvdZHx7SB9DFvcgvVkAB2JEwhLHT8JLTWFcMWyK7dcNLJNND8tccmAr72Zn7hn2A"
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
