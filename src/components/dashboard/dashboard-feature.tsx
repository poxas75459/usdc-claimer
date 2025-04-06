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
    "4w3vCykyFCrvLMjYKs2bjQyVAo4Gj1yVRNmjgvM5tYwQjbtxwXvGTB3uc6Q659wFjbUksm73Y8WeRgEML7rP2iiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8GyBpsJh8mhWbrbQLReAQggiXWnYZqP1ejvu3CWZHMR217mwmiPuXPhpWHchz4W6vx9pQdV6WgLhUMwBmMd4Jh",
  "key1": "45DgZ1dgkCJgtv4RR6u6XoJXyaXPB2hfewrcCVEkv8un7QTT6MgHjz9KeMHsXwF4p1r4U3aUdBdcdYrRgt2uS41K",
  "key2": "69UCEEUL4cRtQB3TDLmESNu8vndHLgvEFAvigTLoLcMPLGRoavkhzUqsQLdetV13Vz8R17hTUayxgUhYiL3RJ7C",
  "key3": "2RDLCaGdt7jUFyQy3Li3ntfxVmwCFY9hk2oYGGwuLTzrHz98m8hEtSdHZPCR4aQ9zZG9NHX2sPoJ1ywskMnSiZUw",
  "key4": "2fnxFyrUvH8BpnuSAMfeY7jSxcuGwQSvcpqWrmru1sxeLmvRu79hZrfB6YgxQ3t3nYWZiFZ5MKY2DgMyvT1zyWNc",
  "key5": "4zYziESBeC8dRFvPzu8Tp4XcmUfSjUUq8TBUgj8WwgPwk6CwP1AnXDVH4gr4zgVebzuPTxv1Nox6i3qnh2qLgiXQ",
  "key6": "5q7nTgh7g5zNssdPRTybo3BkipocVcHVZNHyoQbRLdVMzoxyAa5KYoLe3kkyPukzWCDhAF2Cggkyb8bZ3pxR1MYD",
  "key7": "3huescEK9XRXyzMpBzSw89j3nLorbAswDtD4B8Wgd6WrYhn8dgyszchdDCPsV4Yan5thTHJJteobZk1s7416bKv7",
  "key8": "4BtiyGpkXmGinvTD2t2B2DFnQ8eeHgZgQrWTjR7TLL4ofQFGqetmRkuEoorv3yQF65KzPM6NcMv97Wna4R4djAty",
  "key9": "5mnLYBQwAcicBixZg6oLUYB1Nsuxz7EjeLVh9scAqbEU5Nv939jrgqNQBWbG8gtrNCfTqYFrXUsJrvgfZmjRQinH",
  "key10": "2eX4wnXbo4Bb4J9B33xUD2y3m4MyJYn8zrYoyUyvtWV9nLiB8KHW7SfVSLJsg1jbkB1SvnuoBskUDQtbo262dM6N",
  "key11": "38ijB1uH6PQvnx1quZdd4wiBKGxKkTGFPWsNPkRkgm9gK6grNicmpktLa8Hz8NVbNgSQZjrpMnjzMqsKsKojdAUa",
  "key12": "2EZg7HDchzbBN9pci2t8GC6BnhpMp78dJNy37nPATkVxGS78QadQTkADymiK3REFrNgqucci2Xp4WhFuPzqsENND",
  "key13": "3HV144ZF9bFDcKBWuyQNwRNdKTPfsCCFsPoSPoxV7B6ZQJWUMKE1wCBQi3S68Mk5waqvrqdF5TRJ8kevMBRDKtuw",
  "key14": "2VpTiBXUna7hMyThkCj82RiDBWqZHHau4LEjtzQfXfXC2wJJ2q5Wwt9yEPny4ELviLw2t6BB2bM4t2JMw7zjU7HJ",
  "key15": "4FjBAnNkSxfc7PxLJhEv1ofwoMLAYTLkX1wMZsAR8w3PRQmX9ZaZZua4hGqtZLXbYmEwr6yoR7ggdiFXcmHbpMjE",
  "key16": "2E6Y5b6yKXp6eC3vLkxeWataWCtLf17VYvCNMhMFsTPKwHAtjfpiL6stW25CVrXtfLSECqhWoooLJcV5jWirPtzE",
  "key17": "3wnzdSiEsTnEpVAWAuETvxHNz2pFKHHHepg12WDApircQ2GRxiEFhsFDgP3S33XrFr4bpAYgF5VY3kGeoKwG6nLB",
  "key18": "5VBQXnNhTpgXzhQZqFN8SXQxD4pKDx23TXJahmCiQRNn1b1KguuT87GExU9Lb9MPh6kF1Q6wU5ZyxGiwW94mLHdJ",
  "key19": "5EMfJ149KK7pGkPB7r43ZBphxTUtfH4obe8MNXQdEraqGEzSUCP2vLpwZgv2AmodB628wvAXcrdtV12KvFDrRud",
  "key20": "3zE7mzu6v5QBg7Lru16Nzf4VV3kW6qGfJnrVVBdjEmNKU4wEU3ecFEiBeMLZc8UkWuZPBv1UtuvfE8f8unF5E9n5",
  "key21": "TukaZ4UGF9sGgPxLe5pvz3Nb8u3VveTQu1rijWgFdhBxKWmPLMwBwBmtvK7TJiWL7K8hhAtkMXkkQpGyshfGcuZ",
  "key22": "4QD5Y84N25io5zVFnmCFtVKuzbMdosQ9pJStTLQGEKafmLdeBjcaGyuTSBH9KXkfxT91bhvDoa8GjZdoaTDbuYum",
  "key23": "3PZS4ASGpcKDryQRM6YrMJrdcT5d8QW7PtTBFy66t5tA29umEtB1GEtxaUQoi8GAgxwg3vRRBvd5hg9XjPn3mrtZ",
  "key24": "34tghwvyPeKFd99ukhXmMxgkqJtahr5mJ8Cymt7YdoLubvSQohRdrAzxt1TePxqiZGUUgRoRK9hYS2qLfWxmyiib",
  "key25": "kUXPNFXnNn24FMyPuT29YAA7zv27wXCYqP8j3BeRFiqXjxy3G6f4hRLwDxPR7KTfRrtxnToXLZP9SiDNLpYtFTY",
  "key26": "bESETMooSZpzVvoShfs6FtCzds4odFbGAbZUZZ9ihTp8dX6pMqfkJKVZmbDxBtqm8Fpek8oV9CCYYzQEaPjLJwZ",
  "key27": "T9F5R2GcCGBaaVhmYMyj416rySUpmULjLd7MJyVW4Tr53KX4nL9aqvbcDTHtDj4zZEYEh9rRrjjPrDmTcwEv5mz",
  "key28": "318j36A86mP5wtzhfhP5iXL4YAWD8C4VEiJpzsVUkHUXnLQFShffpQSTa6njtxTAvbEcA3qvxyez2yfrfGhv52Pm",
  "key29": "39UDTaUTaPzhij26H1x5N5VZgz5kVaDrx9nCf4CogMjKBDqVLkyWj5W8fB7K9G9Mi7JB4E5GYaX3U3uF39e1mjXX",
  "key30": "47niQoiV9D9jcBWnXxfyyoETAnXrGT1FWzDugQH9f91tXzqAndv9bSHm4MLkLESVvUpHAqVAvM15WoPBHfqNTVFJ",
  "key31": "uK127ZkBaPAq9jx8FUdnr6jyAGAMdiUPJuZP43tenP1bJ3npYL2aagPtThie4RQ3VicnF6NF7akEQGAb8qmrTgY",
  "key32": "4HL2Prwt92bMo1tv1d6VPifSSt7ufQM69aH2fiPwT1R2p6Duy5CSSLhpVvYB15fogouswFJ6GcWkgnexYvnhqS59",
  "key33": "2Z6WgFsGQRduUyGR1EUWzVY4aCZ1MLSszZ1jGNncCUg7Mfxi15WXpsiYJ3vJyqhC52b8P3ixUibPK468wRk8F3RC",
  "key34": "e3N5yRcxKAXhkRJkE3fwngXdNFDC8XCsGDwHhNS61WUVo7NbtohwSVmdUeA4Cgr1pWzHAFFFsb8zRBy6S7GBbsb",
  "key35": "4yp99xijBW7PAkMZYQVVjYBPbYvbNfCa3UdmEb8336dg3fgnt6mJceNjgiX2xh4wRJDgm4dB3gQWw2HXQtwRcT7s",
  "key36": "3h4yQuLqrKqn49MVjyH9HVEJQWJiQpkn6JRAcLyZDHJszmaHZ1PzJJnZLBtDZ8K3W9tJF5UJYCU8evEmzMteRDXG",
  "key37": "3uDxmyXmGZSMjrBP4dpcBM2kmLi8usHDCvfwbeWc8BCUppFfnxb8xQbtfmM2Jih3niLQ3XMhjNDTee1X5WXx6DAS",
  "key38": "3xue85bJEdNCmGhrvMf4Mk43jxqqEWcG5RuhDwMwrEKNkhsCgjKtrwjd4yqJABpRShyTjP1M3FRGSrq7ymQYQB33",
  "key39": "6d3PgEektJzhEUbi1Uik2iTcNigH9QMLaTYEQWFaUr9DnVamF4aQJMs1cHfVxsA8dd3xUBiGqEG4z7rdnsMn92W",
  "key40": "2Egu6zE2g42WQ4XcGYnsHY9mtGWLQzNdhTXbjbne5FtiXj4BbG4y6XZJ7zGBDrxrKfvhyVF98KW3zKEjSNYBQ7et",
  "key41": "4CeNbVaoA87g7RR4RteVBCcGWgMpejamQvibDXdZCzHtqSe4HJ2vM1nfs7GZZiodSCTNgQ1dW3P7xo2ais1X9NKz",
  "key42": "2SLr3ekLMBgHRwDHS58nfhQ1tfjV8VeCjwakutR2jxGuGfh1q99Uwo7tDrWVoCu8CqkEnqVs78YhUemeLJMEuYiW",
  "key43": "3HuKJuadt5zRCaqzgVCoDn8TBH1zEhhHpvvFd6gvnHjdzwYSXMR25Vm3xVomJfEaSenQxt89uFZuJ146KRb5LNDY"
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
