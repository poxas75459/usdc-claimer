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
    "3vspGwKVtvjU7MYpGtYUG3VeCWjTvSbFxZkhFex6bGQXUb2Eo1TkzhZPNzFGw9edkUj5mS6PujtTNute7WMKw1A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9GtNmHThkDwx6BfVLXotHr7kSAPFsuM8HHtf7zgKHG8WfqiPggoxfW9xRTiQ7dAv64weik5zKwXzmpmZAwzaw4",
  "key1": "3amQycTEMWtWWYCisNDB6jSAQbQHn3iBK3F2mTxrgiJLXrYaAgzbYfwhHE58f76Vtbqkz6nqKK3RXosd3LfRckh9",
  "key2": "5dkGv19hr7iVWEnX2yhg1YXxZYi8qJMiBRDz5SxTYkjiF7sqerosVyZCFb7SLSDMqv8mjT4erFYa1XjLKx4DwiyC",
  "key3": "2HtHcLSURmMzKxGwiVdkmJKcVLRM3s4jDXHF2YVFjo7vBLqZ2Y3WyF6eZoGumZuD4XMDEjGiBgLoTYffyZzmqWt7",
  "key4": "4tLGvhdv7BihAZ4ApDhr9qfDEvQQBKFGJAEuijoYF8w5RnDkwVJHExoTRWYu1P6sJKLDmamNaHEnpBusGvr2hLSJ",
  "key5": "4aX4Zgb8eoLTakRC44ZQ81FmepFiEBaNp3owpEAVyfQybTKknCt8GCxCoc56hu2u8moLmfn3rBqJq6RiymmXmyGg",
  "key6": "2ixHLCaB3LTRUUkJLiSeYGNdwauDqCxG8AtDMAXxCcwdw6MuD11guQF6xQS9dfhXZpo155bveG8nJRzjKEFxDdNQ",
  "key7": "3NsbB1ZWvwAUZ9jN5qBpn7SPpzWNtRBbG4e6q1Y59MqKAJmmiLmZfhFQ4WGa1hZsK9Hjduio2opZPZ1cJCQwLEe7",
  "key8": "42s2rHwJpUbQJPodsSxzHHbGvaRrrwSWNu3gWSgS6qxe2ggW8s6nhQMdt5deq51SrJwiSzHiVcewia9KKwa8cM9n",
  "key9": "2ALHuMxRqrj6PMYsaRqMtumNiE5ZnSxg9jJ2GJTuAvNNSmo5KmuEeKDzeRGsZKJhn8aWKcwPLYqToc5ZhxsKYqUB",
  "key10": "4SKw7GC6BjQuEteZmkXgnhu9o61tqriqmzpSf2WAJQMgvLUhjADWCMZNQo3sA6bDNsJqeGJWs8pnFuanMfe7rgyN",
  "key11": "56sDRjG95MgcrAsWyrmtTm5N8fRRKGYyD7pfeXL2Gfj3U9KgoRd1djj6snRK4H9LbkvzTRM86vvP9XueVcPm8zEP",
  "key12": "5kMbKB1UDMsPRxZuq5yqum85FdHrmL9CnucPaU1gUEBzLXkibDHpC1KvY8Ep98LxXcUFSTzBDRsmSZpFmoZZgbnB",
  "key13": "2kfLS2Ch2fXeMdZXY4MKN6F6tL1vP7XJX6wBArXB714PwZ8A9JNY3xbdoszKeB3DuwSQFXgQ7wiBhuk16c1EDCXw",
  "key14": "5aViNJGMvFEXuaUhnBGMwV4FQeDxFY9gCPaLGpYWPyKHZwZFAp3QEmZrR2YRoMCCq2p5RaJsxb69iQ4zT8Mgciq2",
  "key15": "k8etX1GcUHzKDoY6Ut6SLY22TPuSBGcwuhmnyRrBBmQ8zB4vZ4DaRCQoW8xLdXBWAJTREJRHTbwJbYZkqAnLnXA",
  "key16": "56np3mqxBt9YAjjAK5sEAowceFmKhwUx8mEt6vk9UCES4bcGaxNKWDY2cVWEyU4ZCAkpi8HTLRNM1AcehNr22p3w",
  "key17": "ZmcgVmcXDQNvnpTFGr75RyZBLhFacS1pqpoDfcHfRwXsKzN2KokKehdiNgsMDFeVvguRKVh2iytEhDzxoMA6EPZ",
  "key18": "Jqp48KsTZguvh8nSGZPX3bdYte4MDkGMKNok8PAeRBSqK5MTnJT2FknTXDUaTXzZnUAFDvLdaRSGoarxvZss2eJ",
  "key19": "CDAtKUxQrDnr7eXGVX32qnh8rcYuqYqTbh4qyAjWbcmszkNNZBXhe1AYghNLZQimhv8BjPqV24sjM8xgoVE4SPs",
  "key20": "5MgnQQGgPsNnRJBQULUoJndudhTwCpoUed9xNRh6HesWA8uMqCvFgntMNqppjShnMksy5sk3tXPSCWeRH1MaTrCq",
  "key21": "Ba4Uj1u3Tjzooh2PbncHF1jMKhnDtCag1ypfe4MYg6TBtEDtL1xeN14u2CdpzmrEHr5tznEwD6ipbjn1YgDDEjX",
  "key22": "3GzoWveshsHnin3gHBZiGHDQB8b8YACZcfBe5RDpZXAgwBxpdAqfDnHe6wajxfa6Xm2VVQCWaFvaACLsZzSPeqTi",
  "key23": "3FGfJxiZ3BCUmcRc4wdzGaHhoFSqF6gnTMwhKCQ7g9ZmP92urFREbRzsLrTQBmWKv4E38Q8PoXfkSGzU4q4aYy82",
  "key24": "4XKowntAE2ErUEnT1bVsqkJdhK6dE6vEm5VovYtnAn496h6NKGCkBL5D8DU2yY8rw5vnugrAj6z38a28NgTPC1FP",
  "key25": "455WLkWBJUMd8h57GwivjJ3Po2CZre9stQs3KwEAXPV9iv9dEzCdhveXE5JaQg2dQVYibyEML3QHjj7J3Noa8pXk",
  "key26": "2NSDWo33G2ZLaB9GK2EFoPTSo8fw74h1tTtFz2RQyksKp6gUHKLTwRAwLjy33jHZaZA7RSoDxwScBkvcjfPf85jT",
  "key27": "5W2QeYyz1mSVpp9FH8D3rKT4C5ZdBiB7hc6k5yqVPSucZnBAQK1ux5VGwxTHAFukGLPRqeGVNFBfPMy4bHDEEgyS",
  "key28": "38MEDxxuX6Esfqf7FS7Z6nKPTjF6NR2sxyoExqYmVpt9pax4g45kBD3vyip1ap1V5bumGJnLMF6zv5XfahCac6zR",
  "key29": "4HUw3KqGAtXbdp1V8fULHL4eUJkkczcsEwc7vjFiFgawgvnkeyQjg7T1QPkZemA3HoS288fiJEfKfkdi7K4QPYXU"
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
