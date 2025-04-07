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
    "4ysPHUNB8zk1ACn7wHNCCwDPJWU2YM1WGXjGSvhxY8Zd6hCMcCf6sEVWwZggyLBEgVjam5z7QKwkW9VgsocRDVoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfudATQqEvqYYgAor4R6iyw66GuR6jTujn3jEAmBdJ6o6bGvHYCyvVCWwwEjoLXxqwaevxrveGiec2aGkMMYEh7",
  "key1": "2tKQppyHgpBexQtbkFHaudT15S51wSd2v2kvzzh9spJJdVVCVuq6UGk25KG4W3RoFRdq8okGbRL8E1WrVEKtH8kk",
  "key2": "5T2TM6YqXikHymCdSrDNsgmed5TU84mA36HjN4CQVrwm3szqCXwWq2eKfqEBwdVbBi6mDu2HehgDrcNxCv2TTzNZ",
  "key3": "46AGBCoHj52fP2SsqZo2warb4tzBYu8S7mEwodzWTPDyCC13tjB4QkyKd64v6FG9vwAEAuU6hsjTKg715vSARasD",
  "key4": "3ZmrfabMnQGiZG4KB3BEUreGFnhiJgFiadUPKkK9mXr8nxaB9tCYfKRJjspBB8fspwP4FL1oDAJgkGtuW4ib2gQf",
  "key5": "Ee13cYH2YstSBJA1MjjQMSQnHfLrz3moTVrdfD3YHGtaMLYa4H3VZb8LMkeC1XNPXvdRQitXXCFuPi3RybWECJ4",
  "key6": "zH71pHnjCzPbFesm6MLw5fTPEnqrjneNgk5GovmScRqWgd82hUf7MKX5ptSWYYLU5yeno9WZwN9MuBYHSgtPGA1",
  "key7": "4AZawaMqnAZgU7siTUePaU4Jt5V2WEWJaP9U1T33GmwaQKGSd1hW9nE8LxckERq19i5sa9gWHEsQewJ9vZ6feiAR",
  "key8": "3PdNWwTGtw9jSsVRMnScFx5hYiSYvdE9KMQVPLGebY5jTqurunhNckqYj5XSTqsTP5RDHgs7vAahu3sjgZkDEwTY",
  "key9": "4XC3NT1DdPoSCMTcjujUCEpeX3QZm1GBMw3WWK6TWp7oVGGPo5QdgYNMz1fFHBBUpNGpz8yvgzAzyBRU7Lu63ypo",
  "key10": "3ZL4nH8A169TrgxRKujCAoEKKBsoZgGAmsnTGprEA9WDpAYp1Spyk5mbK6LcteU1LmNsyyEVVP2SVXK9mf8YmJL2",
  "key11": "SrT2MhTbSoaoNdApqsxLxeffswHjix2jyMtDq9Cr9QbDVDHMwooGzGinh1md33wgq5XEmbVap5KdUoCfqahRLeu",
  "key12": "62HTVZg1shKzm1b3rSQeNJYNoxfA5HsXVKFgRn3HqNfypoB1Lpz8Dx1x75na8Rz25YaZa1AEtzP8bU413WiffSh5",
  "key13": "5AUUTwsbKLUZcSgwqryYPRTbBzU1msmVjarVuHfNCQaY9LNXnnHqmRMw1XfSunD2ZbQUWD5Hg24YTurxWKHHz5iX",
  "key14": "nmdHYjgZdwzjAboXpKTdcssnCyw1X5Qs5csaHMMc4SU9jRYeAnCYecyYsK1jNZWkJ2NLhnZQpDU7HpkuyCHstkn",
  "key15": "4ZJv6MoAxk615QKG5kYMMRVU2WTGLACiQaApeJQnFZj1F6jWirDyg4um7UAd6QCRHtsjSGXa3rz7FEbDqDUHvVU1",
  "key16": "2uBH5mT51TwKFUgHAnYYduvYixJmZS7g2wXMUyhZaenT5qduEEiawVQ134q6epkrJpo1CjRx9EZLeZf7PS3iC9KE",
  "key17": "5sdzZqfdZyTc1XpMPhKAa97QUASw5NsYruvTahs5mbBUdcg3GXRokTeBt82opmf5uinwQEA5xXAUD7B2uAmqzitz",
  "key18": "52xBG9F8BXb6FiR5TiU7VCw5yNE4dZFkpnxz9aNjASK8kK9Wv9ZzUW2aTKFiyCXxt3tfxD5tMvCaTCyiGTG8HBRP",
  "key19": "39UxszWfP3pDoZah9XtQT3saQVYbcQGMkrHCAuns87xe6cA9SWocnbB7BKcf9HTwi4PeUy8cv7wEYi3StuEcDMBL",
  "key20": "g3kAPZpToQp8FcBX5oEL3zwybwtqbWqxFVDQBdx8SjN5neeEvcvYwUAjvdcaGj8qhxBFShbXbQCqszEuWNUK3XS",
  "key21": "5jpChVUDnygg7jVDHKq2iaoYatXiWD8mg7Qp6NVXpCPZRQ2VfovqSMt8Ghs4BT44NdnhSRx4qznEBn7s6QGXfeeH",
  "key22": "3VDFz7FQLa3prxGthzmLrnpJx47XWFcaWU1cbHqKLvEueGnkhtA4RFAhoNLQLsQNJZHMLp3tv8z5akWYxeiymfvm",
  "key23": "4yZiMZwhWgJij5ZYCfnQv9BvXSDSqt5b91D71XqqfNZtfnUXrrh9imNKma1xYHYnpWeNra8SrvN912CDMTyFRhff",
  "key24": "2tA4g9ssrJ7wZ7W1Dt2duFjNCP4MfWsFTQw243YGYQiUonaro6Pwm2sTCEN7JpUPnW5LBees6ALRkB7Vcxwt9cST",
  "key25": "3GnKk9qWkKDZGenXcCXNTSkasxrwtzqdih9bBAhXWJW4fQUULRoWXpjnDPcPKaKLBP7RpoQDchauL1RETAYUZdpS",
  "key26": "4pCVaimKqAb7yRhMstzWiP8kA8zssiqfwu7ZFFb6VEp3CUB6Tpcx5VEiygGZraqQwSHAd7B9j2QQx3WYnZMuqURz",
  "key27": "kamcY2K6dFsFVdXfAyj8KYNtk56wp2enRTQfFhVJ3mmbowpfGFQFoof2mBC1jC28yPXcvwiEk2xqrG1G5aBaVxZ",
  "key28": "AXr1UN1vgFdaJBj713aPBEtVdzYHFC9x29oH9Mc1mm2eMFdNA1BjakHbFKVLsekKwrUGZgG7nVNyP8X8C94g712",
  "key29": "3PCUuhHmAvWXkGwu8skWvQXWmcdSYtUpmjeZn1KQ8rJJGL7fHPnF4KvjbJan3mRWekpwPCFvYHXTrJ7d8Qo9cepq",
  "key30": "3xaD23zaM3rHCf9vCTNDxCaVfcHn1dUX62HTZ6qMo4WEJVQ5syCPHnF171NaDZN7DeNHAedPDRdyxNHSR3rdv6p1",
  "key31": "2v2NLRPMUmF5czWxp3D2TVdiEVPTgwUpKqv437bpNAez4joCHyfPY2PuHyCNH5YZqLSdbvG7fEPzQxtL84g7rX5D",
  "key32": "4XjEnWjYyxyANqWhCxzf91DsFRyoqd82ULVGEU1NERBgtGoov1g3uk2WzVH8cmiQzxq43dxA1rGVMXaqCphBZHkM",
  "key33": "2wGSTw1NqgPPDvcqafMWoV6swdqjGFh27e1amvccNwnnJnvvdyUPPPrTD8pneBMJwxViVZKFxWFuhcUyvJti6U7U",
  "key34": "2wM3FFFiLQLafzQqW6HdMBfxZCiVQZauQ3mRpdHPV6KeWz1bzFXwPUnkPzoZSrXddv4kGxfRUZPuSv4hMeMb7mgP",
  "key35": "3WYvQKeornqzEGeLA1prv8iEMu7HejufvwrVDMyNjSoT5R6RtCRXngfK4mCEqsGqP2h8LW7JB7WQXKgaJVE6UvLt",
  "key36": "4Uetb51LroL2Zo4WsHtARGiMmoLuRCJGHcdEeeDiuwTvxVm4keYBpcef7xrN9EGZNy3Jmqt3v56JkLWarDtTUxji"
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
