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
    "2ZBNvJLKLF8LtxTgjnqwUbma4TCB9hFXLKxCYopHAKzsiDWxAmUkAmLzWyrN5J8FG5Q9cdqnpniRFL3buMKswBdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWsWnGVJ664qrDohJUjssKUmYFQiWKXbfTG4zuBYPaDdxBq8K4JBLgSFQnwvNysyc6vnfw672Wa8ZyBm4CZcc1q",
  "key1": "2MPXGeCTDhJRBPJ5SmyDTtP9f9jUHZUJfnqSRCfFLHHpoiYxog6ECnug5SUyTAee5vduf5mKhNAJsd7roh8svLx7",
  "key2": "2A5yKvLEeAwQKZxwFhETL4JJ3nfh5EHWrG5SpbobTxgG6tTARMmWGJZpDoiQBBNUNNX3YWYjB8YZxvyiWrjTMB2e",
  "key3": "iovwWiUzrbtCzUNSDLP1nW2Y7Q6mJZg5YM7M3pF2L8atWALbhxGJKteorSq52Tf9vTubNiwx644LcF3jeVQdoqT",
  "key4": "4RXcwt6zbGZduuKCYzCs8hiQdgbrTXxmacRPyr66PkbFSH7pMKowTqLJvAikfZGZuiRHpX4uAvUjEtEAj7i6qZsq",
  "key5": "4qJhSAzbWQcHG5jNtvDZxuG31zwJADSE6eY8TP1JQgMDLJg3wM5kNKsy9FwBAPzZgzoT7Vmrf5931T4Chu72H99C",
  "key6": "3sa6oSvH4VixctXVCn8iUYS8hd79j4XE1bM1VoervGJW6TKbgk6nU9XjjtM9zKLLSTejSJguFWrh3qiHH5noRtrW",
  "key7": "YiBkSR8ii2RMAKW1VmwNMhhZByLALy6UHv9udqq3c7VnBVna4XmdKjLdw9TSXCJHcAx3B3hnZ5VdhkYdd5igUpw",
  "key8": "3AX1Ywf8c3ftkZei3vfKDUF8Nw6XynqSY5JU7uRnX7tNMFjcpK3ZsQDptoaiCAANFYj6ACPJBbbP9eYtUsyr66Nu",
  "key9": "2yVrnfDW56yRkhASu4RvfmxXchEBRnCMMYhi37mX9kb59UZa5ULg8vPY9bPbFT1DdNfjarh1cX95UsuCvW7Qhy3n",
  "key10": "5AqPFLNikoHi54RbwsK8kVQUrLW5nzdd3rnSvRyYdjGNSRe5BLBYP3Kf918TjGAWv5kPib295CFxKKXRQU6CxcTq",
  "key11": "2Gy2w3RpzchAXK6GmNPDUQpRrb7FbE7ZAYWRG4b2b1NdK4bepbuMLd4UA252MZqVxMxptwKUUBgsHrAzH3v1y9Vb",
  "key12": "2aJVhNprGkMraTaXoCYo4JZHa6jaLQrTgbkmbnxQfAiEWJn1q8hjekrGuYQP595fGohwjuuXd8qSWcC2cYCNSnxz",
  "key13": "31JPCFcJeZnbCpftzhjderHFJcfkih8fZMw7QH8Y6gDWDBgGCyyHSakYH6WHwetEm6tbELMdjTrZ8dTWFabHLq65",
  "key14": "36bMEQpJ2EvquJhTZWrmD4ZwkVxaupHFrJJQhvRUXaWLyM6hCa4JqskgAhpYcud9T4m961m9rMBajdZE9ta79BzV",
  "key15": "25oCNY86xJo9EqrTk9wbkAueZpZn2tHK5TwQy77AhM7i4BaQASzKMcZcUtgAs5iKQFoznVDQnjKxUihSWpM1bum6",
  "key16": "2avGBrdVA8UmV3yT5BqqkiumUAUsog6MHZ4gQqQLs8XJi37PtSopLZEbdzHPcB6YViLFvukdVMx5VuiVoSKp4vmu",
  "key17": "4cHLUpu4uTt9nLgjj3KuW1EhFdXqfxmFCUdHyhtzjnAnc8wPjb3WE4YZrGvq2TBZ1uhHPxRkEsyY57Ub6HQ8SX9z",
  "key18": "3FqQCFAWniWe8y1mtvRNDfN7PwK1mpxR1g63WjcNrHtWbNSiTEQZey8kBPWkKcC9EgQyjpf1mTCMm6e617bxVvpF",
  "key19": "5AaoREciywT4F6Zc6YYQVRRXaUeGmqBPDQTnRb8PFcDH6F9nQYmqA1eTK14MsQwWVNPYiBpRuBFwDvF9STkrcXU8",
  "key20": "3AJQncQLrh6eVM7D61PYr1EppBnZX6pkc9yau1uCXaTXfEqnBrskDfUMNHXSHBxRU7trBHWqUbLL1M1EuKK3SM8v",
  "key21": "4Hfbu8QfcJuoXV4c55hjQKJ6eXbWEsjuR6sTLWRmvfdsBuSFjtwJtUKBQcoLHo6sZTe9ot26q5mYNYF9ARep69ND",
  "key22": "4TnKmgaUki2iF6KrgtCkoXof1KgFV2ZXJFAACqnqJ9wFEYFMoVajN1yjNohC2aSSqT3Y4q2DmT42diqiusqb2nx3",
  "key23": "auzixDK3htC6f6BwfzhKUGtd1xCWick6avAARFQ2hmWaskYC5vTyxzFiZXWDoik92uuG78CyG7jKSR8wrj8iZwA",
  "key24": "26TvcmPh3mY9yR8nFLQEcznu8MqHuMKh8GKGtb5ncD6YqcZYS8tGn2SEQZxvjtjsKKyo89Qkeh3Vgxzp9hpQciiR",
  "key25": "4n9ea2d8zMZ8V3K9iju3AXVJuWrtbPpdNHoYGnfx1rMPRh6qnQD26zUJhw8eYj6X79ZjXHxgx22GSByiTZrfZnv4",
  "key26": "2Gkis9gyUS2nYTErjHYQkkRcbtzMiiBXS58V9Xrg85AiVJJBew7knhp9G8q3TSixrRFnx23Jb9YiLcVwTKsZbtZj",
  "key27": "5mD6PwwBXEe512YLUk5VR48hkscrAuQxUH8ipVjiFTyZx2xmoHL7kJJRTfjyLLX2LvhDRLFMJsBZWJpwehwk6ZGh",
  "key28": "45thhYKuBXFRyuBtrvSQEZPzkfPkZtQYG6PwH1dx5EURSqJhpeJ6eMQDgGEsXxVp57Wj19ePpy7MgeMwLBRKT9YJ",
  "key29": "45LESFCxKqB1XPE2V42exZM5Ke5NsWBixR6Dzxahwv2pSucFCxBDXqbDvJHypae3N4rH3P7SkW6wYCppAJQW7goQ",
  "key30": "5VkcvbLEpcFfnJ6RFWmwC7Kdgq2Cp1uVowLcizedMmA9XhkCap6m2idvLroxeTxrUpc15QD9nKNZtyDco2goKrRY",
  "key31": "2MpV6DnaYFdpYjn4NtBHx2P4RGWi4NzUAPKeHgfhyfdux1anW7nMNMwuL3123UgrRt8YYT81fFiVzPVtJg5oK7oS",
  "key32": "3fTBSSn89UqFx5WfdyN7uBjgYHu7qRQcHoaQttkmihMWaV5wVyniQAb3XkN4FnsEwX8CcAJbLoqLbRxfq3ee2rWh",
  "key33": "3eZViQxFtZ4x4DuWU3W1drL8cx6P6qkz9kmmU6ezPCK7CHf9r7oqo8uZjaaDJKWRK28icCMMz7SeQLqqxjY5zknH",
  "key34": "3iK2Zhi9Wn4uCZfMDrdRNTR3FyEh16EeGYZVCmiT3Xjw2iDYyqgNkmsynWyJ3JnTi4fQ9FVKqnQQ56fvwiMnYPwq",
  "key35": "3EQdxV2toD2VcS32gDKHwiFq1dzLyqyvS6kSoDCJP1F7HPtnuggeSHfgiYAob1dLpfiZWzcNHyKViyH5hAHxzQ59",
  "key36": "442HmQzshidKaK1uoir6Bk56CNxmE1RiVELwmKziQAX8vqXzLAVMGNm269wwSqD8d4FdinrxMA2zCxkx2xJEoACg",
  "key37": "CK4iEdeYRx9JBAkHrkQFBmtJnsSM7M3gw7Env4UcGYuHWxYez1VeaY6mwsDsWq7MWfJML27jU6tuiEzJmXKyk6y",
  "key38": "52SNsEqBm1ERA48YZ5psg7Kdw8u9dz2W6dizXaGNiocDTiXpDu69487qqK7MXduD5A9qBGTigQyWFKAPWFCGkPtx",
  "key39": "5UD2MVQ8Rsk1H6C69jBrJPnBTWWDhNSJvPiyysFTeAHu9VrCafEmarkCe619zNUNyRzSQZe8osP1PTZvtRQmVFiT",
  "key40": "2XAfsptq2AE29jNNccpSarigFG1BaZ687rD281atvxSwDHdJgu25JJqyGUjEA5z4xmneqjLHsB4XKJdH1U2vvb8u",
  "key41": "3JyGsS1EtFhaureZza54kVxpULYjnZNpv5sq2MaVBr9kBJUg87nQ9Mi4vQnwVsAgE6agDByrDEztrs6yT4UHi7zo",
  "key42": "35WtxD4yxTNMYU8XBr5jHT918Pdf2b8QYrMA5eHxfGvkfeEsFvZt5T5nBJXCYFGPHC28f3JM3SVZxqpyt5dUZR7p",
  "key43": "5wjMv1zb4KARqw1DQXD1u4aMtfWbfBYiPSS8s9d9QzTyyL4jSKJmPLai3wzFMCC1gYnqY6ii8WvMTWAc92cAsx26",
  "key44": "DXdQ3rdWFRL3dos35MxjEbnp4NEyTHoHZ6mKtsXNjt99EFxrVMG8ieUhVkmLB8j7SJhYcHXj3U2pV4ftkXhsb9m",
  "key45": "2wKKEAmVxqLb3XkqZNiy5xMF866tCDbBRoRz1H2f3vdBMRrAx8wmK8A9LABgsmZoQmVyYNZBJocBprRL4VrPPCh8",
  "key46": "52RzK5hGh1D3fjJA7yqbHKUYrzjx8mgNRBQk2tHH7HtSrMcmLubX5vez6XnWcvphmS6LP9BPPLzHaFJaw7a5VBxs",
  "key47": "3fpvvkYjxJT9CFqMqXfGXYCCdgQVGierntpVANo98zXVEM4Zm5YkpDobtdmADUa4C3viN1DsmyE8FGVEed4KNZA7",
  "key48": "5cnmhm8ahaydZDzFhqU6tvPYMPNZaNJU69bV7jv6AhpVPK8GVCH8JZieu8pMcQmbc8HUoGwqqiv3794tncNMpeXt"
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
