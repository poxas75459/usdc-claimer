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
    "u4GqEXrWc4v2rkbVGQBBALdNbQmxMr2SQtPebRVLRxvxNPdUqM3cqNbHRmGqY4pfQ91nq5LDDiHLgCKbu4X4G87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnGrv1rPQPD1o4fEKtTLihtKbZG4pJqfRBZbiQERAHrTa656pRK2xx81MZkRWCSFUFsKaHD8bXsvzz5zLdrPfTB",
  "key1": "5FJnWfN4GGAH3o6f7j88REy3dC1jP47NWYWoKspfoaVF8yvNDQMLo1Hn3er55kKCQvTBj1fJdi4XBzHYcq6JNoV6",
  "key2": "2cfSH12HmabXHp2zV7WoU3Yb8nWumrFRAhT8XH2WAaYeYjr2mvkAW7jRhBz3G5xuEsuts6iR7ciVmDpfFmZz4gyi",
  "key3": "5ww3eqnq9BbfohSyz2F56Y6JhGTmu3TQfU4nQWyy7L8VfhyFdhPPKGSqt2iEZdVsnrE9PxE4tQxP9ojjAUnvf2kk",
  "key4": "KHxYEwshv18JXTPGArJD92n5Q5zMH1ZzsEKu2RxJioucm9ZZ1p23LqvHcf69UGYtZDzghNhWTKNvZCxpwEsyzoP",
  "key5": "4Kqjh4cmeGFe47zkrDa4cFu3NmSt1tYwGETwKDikNpkuRxkef51sN2Svay3dYDSm7R2qPfdNhB9ajNfhGoantvyF",
  "key6": "5AjGzwwU2BbDzzCe1YJPsQpRX1CsPiwahhnwPy3AmoE8grSCv8BGapcbPCGAe8jzmLgT86tME6bFUv1hYdHzHS35",
  "key7": "obZChPu58i99oZPxJr822jVsNg1Gu6Bk7hR7YQNNRpfkNhzc9Rbyy4Y6RZHcyQLzoktciD1NepXgu9Bh2Zg2mTV",
  "key8": "65AFKfuQWyYwaugMz2M53L3EaYBNRx9gL3LuQm5TwSmAx66rcFqYbyrtEo9LAdm7o8jyUWPcY7Qbt988ULX6mqvB",
  "key9": "66Kn2qbqGwStX8syfbVShFWMLLLkB7oGcfDjoNQkSDjaMjGNNcMqoSg7DcxMzSTazDn3gDndrUy2imStb2yvX96y",
  "key10": "66uQV524EA6keFTxgVBHRRfgzFdXxSqutxEHwwGmBf6JvoxFPCEXmDDqbL9p9CYFw68pW3aT6CtfXQpoYbppRAZq",
  "key11": "2ZimuRkYDzuxyJ18dJRmReB5QCXsMdfCdNSHcWZ7BDNcNcKNeP5DMMDhFeiJZNqi95XHJTR4Adqq5Sh5xRY7A1Ji",
  "key12": "5CjxWGZYmwj5qM7rj9bsaqrqibHuyBbgucHv4QixQzAc1xsvj31RqYcVCwcj5gmz5VDuHwJ26QtdBpCQDedPcZ2u",
  "key13": "5FubvNj4nTVoBeyEak86LvX8M2v4hGWiNeKJzBtBXRFnXWGXTT9s7S4LtqcK91phnb9X34wVKPYYgNjYSAnzWf9Z",
  "key14": "2wErsHKGdDdNtFrRo9TgWi8gT3eqpqmdwqpPK1icVKpPFfcuY1JP6i2DrFaq8gBuynRHne8i5tf7VBdBFwSAD1no",
  "key15": "41hoYQYL9Se5w3irHSLSDmeo6a9ez5KRx3DVbKL5e97CGdtzq2ohN3Vq9wovbfTvswhqRRsBJURJCELdiXXU7nhJ",
  "key16": "ho2pRwvwRKm9QSt8p8MBiDtNDEyWdcPnpuNsAEvhZcF5aAJZ2VV3o8nHuZev5YC9LMBk1chhK97Ry9ZqR9ytqxa",
  "key17": "2QWCjkXAjgrAFNrmCgGdbyDnTSqte8r4wQP5NLqrdx5CmiQBuSRWCHDEkV7dhedDT8pM4MRCLa2BAWNxoxSCXwuR",
  "key18": "2mTrep3nKwjBHXQ4wBkKaSdNfwwU5qrzB3N3zpdnv4M8yJgGrfsSMCRGw7EQYfQV7Qx7GqvsFUBb4mJXH3SAqAAh",
  "key19": "wNzqAKVKAPzD5oNXgBzJiDK8pEG3wEdzRnbhTE2gzG4diUKrSxSHJmWJ8RJxi7bT3NoScKWxFNEDvYKRQd18JBw",
  "key20": "4ZTEtKfqJyAPvuKZgw5hVWTpFujUXonWbyxe7dmHcy6jvgPJacpDux8ueDxvXXbMzqYwiLvUPgrFcScrYnERZT3w",
  "key21": "3XZdPv6Lq9rRFUfZWUsbHJBL8tLCCnqJrYCxPeNYsf2AraJJnGArSTZYJ7iG8oDTKNhS9mvMKXPUB8ZfnUwkLJrD",
  "key22": "2uBPxbCkASJjdADqzqS2PkoscMBNTBr2tUscQmUJ8HTQrBmco2RCExeyKkb6QLMbPJQaqHnzTwnXenNC4zG5TaUy",
  "key23": "5QiZt1qW2juB4fWje7AGX6BZiBW3zwcTi2SG5JBKEQH6VMmzAQtKAhMfzTcrBMMTsnZBopEtrpHDzT1aoPe2S6WG",
  "key24": "4ACnjziQYxuGx8oAGXSiLFAEQVDQCUqHXjUksh9s7myM19KWuhn86rT97EH9bLS1bKR2naKApTB77dTpz43ApbdV",
  "key25": "4E1VDWBtSAVhaYsS9nvyQkQGxmLYzxgevqoHBuR8WXdnuK2YUjFisEWD6ADqi4LpByLVtPx7pzxtVt3UG5mqsxLr",
  "key26": "4FAgVatS85w8LdVK9ajCSfARrPubzS5XNhu4bnCmWkDr4AHfCi31icBTbw3GX6syHurwrq2Ki61hpfcfiesE9KzK",
  "key27": "4H4L88tjjugWds85Hwq3vuXzd8zf7VLcEmCAYr5jUB3scBGMJ7PRnZd2fvvRFNJfudTbYfVXEggyCgHXGnfqkHvf",
  "key28": "3AkZZMcAvGjxc539fBtQtGmyAHyyLY2LjpCii7Ztr1CtKqWxTb8WhbWoctp8frYdpfiuvg1BGZYofbt1BhWGmgJ6",
  "key29": "23MViXkR1r41T31eVz6NGXFKn9vEzmvRbnXHgp5BmgUxih7Ra3LZRmjcHcHayi7GVUyn72ptt3457tts3jjPYdY3",
  "key30": "3DNMC8fvxnPH2Sfm6CJ7KVU8n2YompJvQAdY1kaQ8q3yXrmWWnqNPNGuycPwK2oqN4iancJ9N2d7Aw8M2oJXGGD2",
  "key31": "bv86oNPbo1QK4L83gauMe9AECbhNvVxspQopqtvLg72jhYwDRmVQGGQbt9JEMkMhMzkn8TJ2jWV1QPuUrn4HStb",
  "key32": "3fiCQx4Y8T1EJcqwhcPB44L3DiMqSveNR8fbNtD9e59Bh9rMPAJchf1t5cwrkuQ1zQ1DwjFjp2CJ71ivcSmHaqix",
  "key33": "3rzRGkDU6CjgQsfgbRxtPBGpsVSCNmUvs63w6n2fNuHSYeEgQfxwUgEpqCfiQBchbewC1cRW7SnHawNQ6pU2avwL",
  "key34": "2m4iih3i5KxmwhAhiWtLsxyEumnfR1QorRKYm7kzAuBW26sBNnJYVMxnVNxShaZZmHchpPpDuNK8k7V9YyeUbwZ7",
  "key35": "3dsaqvLX3YoJD1PgpDPihWQ5h5biVSYQaNtkvLGkxuvRQVcmnUpgVKfi8PeAXEDLXZFzMyyP9Q56hx18seEY8H7n"
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
