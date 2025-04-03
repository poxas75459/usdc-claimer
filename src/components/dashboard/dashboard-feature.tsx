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
    "4LrVnYwvSvzeswfeipXQTDLKB2PEgkn6dBSLRMybZ7PYqVJtqpvoYnbHoPX1byiF9gKq1PSR3subxRr3cwfLrYTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cpaJ6vGKd11Bi1F84yHJeQvYNqyUwccPXVvsrS2ZFxsawEVFrfxW63PERJJenGQatYWiqG2WhQ4RkAYkdS2QHry",
  "key1": "E8zbgKoiH3fDWjJyryNwFpaYUyBhdg6HAYyF5MTKuwpEYWj8qDWKcRfF1ubq8Rm3Ya4SCEESQWRu9tCiCXcw6tw",
  "key2": "2EY3QSLPEctdTnMikm5bywiffc5XeXZZies8FuGtuYb11gG8wZMeY6yNHt3LUgVRD5MDLUaPSb8kzkaa2ScB5jHL",
  "key3": "22Yv3hh5rQuVMtnrB5CqWL3F5JA9w6xFN1nAMkkLQD1RuHMs3WbpZvPVZ3aJJr67eqqG5cGV88R3NFAgncVzaw9f",
  "key4": "25NiKw9gmLByPUD8PH7Q2HXzPAuKXyE18SoQKa9CD7VRnyeT7Lvoh2jsnXXk8n5oNgpKa9ebovnhAkwi8annuvHJ",
  "key5": "4AVtS92txT8KGLfAedmFMsaf2oMZHeEE8bQMFFLoKEKX1akPAzBjeTpsJrmNjeULTYRJHtD1knuRYftVBg8V2BnV",
  "key6": "5MVpaH8gf1VFkt8iN67bNGA7d51CEWXzYaCRwsNA5NSffW1Yyy7xX3Fp1ZUXcuJEyWYPj65HFF13tk5NkA7MiAwC",
  "key7": "4HqrmXdc5nPPbV4LkUiyvf9V4DJFyHGVUHe2JZq3wpEhhCuymn1GAum9DeckzrBdszCf39fYnX33rckefvVBat6V",
  "key8": "4dsaEfyPyFDNBqgjhPCwbZKydztZsTeErHy2RGtnNUwpGXU5z7EYHp3Z9ReXTnEyp8MHZCGjVtSqygomEAvh9uss",
  "key9": "5tENn6qZsQHcJ6vYqdu5ezRbLvbMxgcKgVDsq2V5fXQS7vj3RTF1JhK8VJ2XiqUkeUkKju8jbggPSGpgtar589mh",
  "key10": "4aNGMEB3HPGVDUMFieRdS7z1Ht2CxkE5UdinZTw7AeprZsuBNA7p84mwEhUuchbCoMQMbrRnehSaCz7pkFvC6L1M",
  "key11": "xZob4USyngTdd5pXSJ4fRLxk1aEoZgjxLAMqHmPatXQhpkDLNkNfpanPX4kyKfuxu7M2TW48n8rJXYaQ4TJgzoZ",
  "key12": "3GX4dzMfLcABD83RB7BZgbiRqrgZ9w4Vu2Sre1VvyMr1zgZPT2xksne89NXykzqpkeWypN2cobc5zH3qJaAyLRb2",
  "key13": "4TAQEV3kg5jEjhiDgaUboFzsgQYnJZV1bgsgFBgY99TnDp2pNUwjGFS53V818C65NGjLBdAvT8NyyxbRAG5ddrk8",
  "key14": "5n9tCYWWxaC99ke9ZjPtwRSXoqkoMeEAGtJGA5Mo5EBDifxQDH7PR2Ywk3bJEs49J5M5PjqUNsvL8CPa6QcjmxXv",
  "key15": "3Vczuu1kjPG2QGP1KtEQ9dDPw2mo8jPEB1v8KUH7ejzUbp7h4BJrn137LJKeCVS7XG2rAx9FUASM7mb45KiFiRVt",
  "key16": "29GuivGLEjgRNqWr54MD49QpgALjNpciXbpibg7eK5DJVvHbC4DXHVdUpihBnLKNYRcJtoKoWGts2U6EoKQykTUL",
  "key17": "54a3YHnUTMd8CTYr5DScctYmtPsu8peLNAxGVqpac6FKxaxUefMFv65CTD4gzyGtiRvWfPdP3vsDqzLDb4rr2x2Z",
  "key18": "5sfLa1yUcKN1ZUp8iEDtTjf2vFAFXk68vEc5SgC3df2tDZk1q99CzAtRCcUaocRx7w5SUoGnVrZt1ZFUvMLrends",
  "key19": "YBEvCchhDGaHUeXPrQxjQCF6tRAc912nbe3FKoAkXnmEsMQCpzsHCuokHB5vVADd7H5HrSDQUiFz6CfPhbi1Dek",
  "key20": "2fGNySPM2NnAyUJbcqqxPjLFmmTA8MKsmUYVXLuaku9SLWRtKP5FhzkdFRNgnUT6cwgcney27UmteRWiSdFJU5Vj",
  "key21": "3a8WAZ9Y4YfjM7fwmj3z5V3gd3ZtmFoc9yNgyCvan4KFrm1QrsY2nRGZyPM6DuDdvvFDHJHfLJii311vBQaMU7cZ",
  "key22": "2M8wVkUWgF9AuX292yLYLE2zh7jinCzToJptGnQZWjYMb6q4u1Wan9a1Uhr8EvBk9Sumd923UZEheC7o8rYUR3S1",
  "key23": "EdgKMLH3igk9ngYm1e9QYbF2mEHz4XvoYy3p56WwQXvNu5ySydJuTA5HpyWTuCB14YjmnxfeeAGr34ihatBJ2Fz",
  "key24": "2iezQXK2qw1kRospFLwmAP23robXXm1EJtoU4KmmQmRbczC5QnA7ZqDFZFRkq2JA58dP6wvcYYN2RxibxASJHGSH",
  "key25": "4P2xrcpEkzaPvFrc1TFMLMju9HbGTTEndShUdUSAqkWp5oiw9Kbjfrfi8Qgq6Jkww7qs7pBn8Gtforn2K1QnpYgR",
  "key26": "65XcY1bAnQnk5YiWSiz5gXNq4VynQ7e5C7uu8NZhtTfdE6k7NGDQKRHyAg2Vzgcqx7mF33VExa5MsWNeL5CZxXyA",
  "key27": "64kq4LC5fmnRnxj889yK4qSEvKvXXpje7tApv3VhyVWg9Ddc26dWsoBiwgw6e9N4QFE1E544gdTadHQk8HVcuhYs",
  "key28": "3hkeSQFwJ5MtHm2NeiT6UvXENjfBFDpTAd87oBZ3LLUFKHzNhMQ2JrAbmbTq3HiGpbppx6eQBTJJeivgUDsvDj52",
  "key29": "3hAtWTSWQBoAMtd4LZnUXeKDAPCvtaTbXMvW3JB5XT9YK4aW6RGrCXnNEynzQyrkGu8efj1piKt8BGVm367M2Rf6",
  "key30": "4XvZ1vh4XXKiGyTWjN9wCTWCRzyG4cScDskT2uFiKDTz2KYyQQ38MNJnVAgcdLw1qqhrJej99Go932uZ5qs69Yr2",
  "key31": "39dn5gRmnLK7YCmb4ydeH7PpZScgsXp6inm8C6EQ6SDKo4o5bHZCv7zskme4P4v23Gs5ETy1dhgwHcu7bJ8e4Rgf",
  "key32": "TYqf9bBhMn2uwCvKVAwAKFAQKVpAwxHZwhZbvmt4DpMykExqjRTJHZaoivMCsjDFCxg3h6U4GjMDx22yVJcMQP2"
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
