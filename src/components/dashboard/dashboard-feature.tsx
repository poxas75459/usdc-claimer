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
    "2kbvtkXcckvG485htHFQGiXxXYLbpFjb8UfA19BMk9NpojifwDsfb67GHfMh5cs9D98cBHki2qmYBCHcDHv9FuAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekLFaioy5WwKjNSNjp8PZjftbvcFEigbmeaRdtYjLytgjCGodSgdVTHX4KsHDnaBwoZEiqhC48fzq5K48Np1crn",
  "key1": "4AYjfGa5D4J6x3TkbPnLtHpDXTkaJExKnTUkQa2fhDgtpJ4Rifw7zxExcBF399NkuEoMx6r8eQRditCon9Kp8LZ4",
  "key2": "3PEPidSUS3W6gLVCkBWgbvYEuGvPuWNoQKYgpedfzbsSSCrQDzHvZD1KHCVi3He9W4DHF9qW8rURWniFdJC1bFMN",
  "key3": "3HfF5NVQP6nqZhbcz4kw9rQVUrE9M3Cj1wnFCYKZmvydgnDFMHube5BPcB2t9p5fuzHDBJPd1i85ZHJAUZ2LBYDz",
  "key4": "4xSGi6qbQwmMzocyLmrT3f1B7m1UevrdU4jMPai8KnHvGzjpve3ew3pGmJiD28mfCcN3B84wuRtWo4xHN3JRzyby",
  "key5": "2cEuQ3TQf5gKhjBNBkuvo4T1F3hG8BZmCgPVX2FNmDRpBVfatjq6Nq8jVWSwbhwuDtVgiWi7nUv1gMG8HpU3udHT",
  "key6": "4RybLSfnK2Nsn7LVGyWeLqNA6yEF6z9aEhWKC49rg1Fx3fNZx1h9cVodg9nBCRVDD1urVKGTqobVexbeyDyLztpr",
  "key7": "5neY1QRADEBiGftm3D1W8AJJx1t5BJqvm7217LpDo8zV91GZiSUPG27PQ9uq3R3Mr3nMz8TbiW14HcQ838uehaz6",
  "key8": "4iMxPKuPwGqdxLKBAuNvXFQpYxJSpmnYstpV7PyGaxejTu4eFRJ7TgsZqkNy5JLVPthAYtWtWxi9z4MWGQf8fpXt",
  "key9": "3Y8ch5Ke1nv2NB1xRFFGurFPBUXJtBDeqtKgeQUmkhTjdm3wswYwBX27BozQd7n7ca2hV2kk5ig5jy6gjdwy2gUX",
  "key10": "63sztsMYB9UTof441cVmZDxdYpmFpntmSSXwanUfVuJab7F8eCPbpzGh9We9rf4BApsNVhHZBj1Ch8WqmQsekBNe",
  "key11": "5cCB8n6kDKRvugtcwHKbTms8FDXy4CjZgz9zfrVpBrMH5TqTnrbYbAUVNUzsaUx12PfU6suZSqHAetTiozFn6W3a",
  "key12": "4eKTFk43KnEtkgYyjxujabDNHsdPkWdwn2kAZTVKxZ7g7b6LqN1UkF31pafuDvTPTo4SUatepgbFeJoYgkBLyLFR",
  "key13": "2je8rJL69fLyUYcqr4vgJtKTAYhfAueEoeeyrsdt1g8avr19CTUBWaWUysojnSaBHrYSs2HiS6RTioyFZn8fFeR4",
  "key14": "5cfDLYUwncccVCeNRCkSszgnT3TkegWbinyy7x2ZFF3Xude4SUPtrF9af8PChcdnkivyf3qY6Tf95qVj9XehTR3Z",
  "key15": "2MPGzXiUdySVkQDAZfYfweKpwLDzTkmT3RjLRH4Ymve8FSi7tqXLyZKQ8sNyDCuE4u8oCLd2m1cTvGnWnm6aucNd",
  "key16": "5Moabu4Q56NJVyXoiYUPxi1BrVev3q4R78dRj6pcrZCRpFMpq87jHYo2H81moFgJGkfJ977ddE9PMUCidv4hVDYy",
  "key17": "4JHcjUcJYTqn83RUSnARRRBEK7sn3Jyfdko3TbqeXYwrx4sgLmNQAmfnR7GqLMbRjCPBKnBjHnd8wk8ApCenuMxq",
  "key18": "43Mi67whPkKeSy8RFnT2uvsuU4ya1ceTjTJedsrjkR3kEdXJrxG1j2oeUSfYZHbAvJYrGBNLVgkidjJrQsLRERNf",
  "key19": "64CimZNcSr6VbJHtNnPaUwzabMxDpBE87P8NB5dMYLD3EAD2RN8ev9B6WcerdpL3cfHAJN7Z7Wj7FZPmABKj5KCU",
  "key20": "3k96eG89T5YdWxdEzq91S9nyjesAmBt3a4nPQKCxivJQhZM7dpsB9imtjqSeV8rNtrE93j8UqdcpafKBLGjd1Fua",
  "key21": "5spi3J1iTijBQxobeJgrPFNS7jTfNjGtsdedDTP53wW2KLBADX1JgDHPMRhzL4r21yqFL7K9qpLL7mhhXF8NUokF",
  "key22": "5HTsPeqoZc71fqDWSYDvMUAmHDU2WLTi8PAXWTLjhEZSBgr6bCxrHHeTRDYDdqXTbAADQbiRtZL6rkWHNSjGvWKG",
  "key23": "2KMxmLzG3rMByU67gFYdn1S35KQD8Fdy9jQYCtrULxGmmQ6UXVQ9812UFxDHLTnmYHECdpVmcNicRXWJ3agDzwwy",
  "key24": "2ASQR1ALvADpSNjbHaQmKVQw4gn9qDbVyzyWDQW3K7Jy8K3FsdVBHaAxmTbHUH9DMz2dBghnxzbLCvizW21rCFGL",
  "key25": "3EuMBj5B2KDzRhybjvnSHH1Cjp4Emwzsp6XNWFqnQYgFAsZKb7QBTFfeoQnDvW3NNNesAZxMc6Jt6HBZvsXvjxFz",
  "key26": "Kzx5fV1Vnef2tRMZVMXk1fzwTzsFnFZhbE5kka5uNgSLvwEbwPFFBWarHYAYKCL6D31LAtskwb6BmMoMmxUKzbk",
  "key27": "2DXwEV5sjizp18wbheQYjHPoGHTbwWCgEx86Un66e5inBkUweweMHCWYYDJFLt5hUD8ZsEaUDs3QdS9abUJaUkyz",
  "key28": "smondMrWEJk37Rg8eRXhB6f4KhdqYvtMJ7p6WtKkoNh2w2WVKvDodTNNe8DvC7dkZCVLjeyrBVZ7hocB8PXYApr",
  "key29": "2evkMNGe4qNgRQRanVMTAvWuFCXwfvpyn3ip1z7b12498TVgPFdNTeF786vJuRA98kjaDBUEYnVrW4jpZGfDr2Ls",
  "key30": "3XTmRGhczQWpgTBLxZd5ZhJq3oCN9PT1AmoZyoVbekZqWEaEP1TXGDd8n9i3gAB2HW9tVDoCC6JJri1WUAMaNdNM",
  "key31": "52jK2NZMxVZAFePg5zKWFDyw43cTqpHEa2R6a75PmUp84abiNLv9XhKYmJLmLn84sUGeg9kdRwSqgLSwcuEZTu3b",
  "key32": "adFtDMAiAMnCD4KqfFAznGmKp2X7hRomyngbLQKQp5WFjnP3G8jJMzBEt6zKc2uCRBHuCtey6Cix4qonx6ZVgng",
  "key33": "3P8w3LbauUUsBHBXhM211FgeXfbqxCsbtytdFEcfR8krL1Y4RQBCC7vCD1CAJvZ1NA13LRTighmeQC34tXKUFQFQ",
  "key34": "33QG7tqNAz5bdivrWoXUoaSdcnDKWK4TdtyLj1DzWLgronm9zKisLkpGP5PFCzmvYCnP3QgJc6vooA1mjte4wGQw",
  "key35": "2xqBD2cTxvmBdRCB7zRaeA9tzhEDhxyhCsdELVE3gjWm7ZaP7MXuBdagDENGoVKFHbaVW3YjXTghTm4deXEwKxQp",
  "key36": "Zj8NAKq7RWJUZrC9fyaqY9upbF62UyBS16zgEDmaZMsTV2wnWuTs2AEEquamtbF4ZuNgfo4v3S7oKgi3Qfy5srw",
  "key37": "3sUGcbWE7qzcmMk79mnaYq4Hqd7aq7dC35CDudaANUkzt8PU3XjEyS2RaCSM7EX7HLJnQH63FYPbHYbz7tCuzzHt"
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
