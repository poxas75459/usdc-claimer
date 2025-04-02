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
    "4Kwqw66ShSzLJviA3h7ZZG3sTeiUCEvPSA6iM9UaBWHWxfT2UGccG6EVcLfYg6vVxBna6SCT2AkJMCPdXthkG9vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3baoRDQUgxef6UburTpBUvuUu15G1ZzRBK4VB2FuYsATkaQpf38kDiTVFnMyvxKaDpZJpzsReZwsu7GoQzYv7LQd",
  "key1": "3zpfH6fkUv2VukWiSrK5DWRnwiXkEJnthJhNWdQZN8URPSgZkfem9TMCn4moia5TXowDtDFwQTffKrDSHdvjQgNq",
  "key2": "51uMdHtxRU4tTTgCC8fWMDKHviQwcHdGorDE2v6ZRECxtLbAMuHBGFHhff9oQ9Q37X489viyZrJ7KCMKR4ZCbWcb",
  "key3": "4sZ8BhoXay9aD4ryp4uKXHF1HgZgkpHi3tLFzfCEEtRCYpm8iaRPMdhS1DXT9ogAvqboVHTgvfa2SxJxdvHEJp57",
  "key4": "JdJTweEkmE8pCYazUTp7RsYHp4U61B6rede7gd2Smhx1PbMpWEJXYrw9gjWQTLndYxE8gx3QzFKsLkDDsAUu7Ne",
  "key5": "2vV69TBGXg8dvDgQbZVeXS7mt8iezusk1efNE3VcDJtrrMtFb2GJLcemSLRyjsbU5TbFtRA5XfcvoYcdTygTR59p",
  "key6": "6ERCw8CaUst2EFUxUyRSJ24ePCpyjqepkZHmvo1L6L6dUHvTCeLcNXg1LNCqQJXecxsaodjGMz5S8kgqn1fbQPd",
  "key7": "3fiCm9nScsQGDZvnb5jmoWnjGHstUbvbuz3qxnARC2EBeHHmqSsAZ4vRXMt8DAWFnoH53k5AnfecKdSkNJiSXbPy",
  "key8": "4N1H8FfrJciYsgQPgZ5ZFE4zLHvm1cMv1aKHaoo8dGHTBbn3gAHxryRoYqdtDAqz53zSM47nh3wY8u6QcJ9qRWBD",
  "key9": "3gamhUmCgPTkhFVqp5HqqZi1hJsANpaCxhJYuawwHkgHLd94x4XeeSRTZvWyb61VPS6o6q333RRYJHDDFgqpUFQM",
  "key10": "4eD5wgGrbK5VMf2HX8mauNJkU7JqyWrbgKgHcb8KiZUkKkopHUPDdgS92yrBdJdKmNVrAr7eSNGQUjoX4FiEMPjX",
  "key11": "3asXFqomYTrMsgmTYov6eq2YNVmaT5EK4qPFgqHkvTqPaqfTtiUEdvMqXipxoS2VF5xgcGumG2cc7Co8KKZSjjjK",
  "key12": "3jA7mBH4g1Wbd2mTGqxGnDTKb6ahLV7bTfn9qfJr2hFhvC7dUasBu4RCDutXKERipxzivha76zFopCLk2kPd3Bx3",
  "key13": "ttNf8WihfXerQsH7ZUu6xgiQTJ8twXsmttywcDvGDbAUcAdZRwN99xkzV4wJqTnrpT3zuTpAZeLYnvEZXjHiBb4",
  "key14": "2Bea3jqAHdJA5AcBXzVYJj49bnc4CujV5o7tSCEWqEBYyX4pw5eVkHMmnvUwao3SjCE7nwrFTCyxmPJ1mHJstffq",
  "key15": "4TftwLrqeafwBX6d1Ue93nJYBstoHchBVoiWE4YU8Q8heUpVTX84KpCdwVPnyxtF2ApdVyfDwgnto9ZAmSoQEdf",
  "key16": "3PjjcopnDtk1dyG61QaeGFhYN78SpffUXDpZe84i2FaAe6y7jZ6wTdkYkmtLbWZz9xxfcXRyiesi24u4cP7wm2bc",
  "key17": "2gphiWMW7ey2aHYWMSsie7Ahj9jEccy66epCzXdZiqen1aNzX1zFD16yMj16QPZkvfeKBH7dhAGF9i46mEUagAgK",
  "key18": "xjkPfn8LHQrWyAmip48YwW9Whd4YE5hrQJXcqsYv34QCP8QECypckehCrr5e9khj3j7e5Z9dovk2g1JnZGr9phL",
  "key19": "zU6E71DK58BqYAXcfX7hhALyQXiNC2Uc67bmEe3nrXNvVGZxJfSm9d5wMfNMwqbhWtRMMeRAsS3QRCsMR3fww7q",
  "key20": "4rsiMb2LwxsmR6wFoY1op8m1Pb4JUeuadsnZ9jCsfXvHpgxbftzaafVDWTVY8SEuL7Ro5ur5YGKjSr6ARFZ3djSf",
  "key21": "5bSnEtuWbDJLhPw9r7QekJnAQJqSwKUxWbjz82RLEJA3Rpu2gxzTwoxQ7Y6PPc1Xu3PbpxHieVtpxt7whPSTtDjd",
  "key22": "4rmkZGaJzNwR6Xy3F5fkeNH5DESaQSwjeKjsZNg8nygsBo3KgkiJCszPrbx8WDCH6ht5un71Xw4qgz8V7yc8rjFS",
  "key23": "5GBh6r29r2DhcUavxw5x4GiySc5pSKjbQoP94QSKS3FtsGAewTauLGJpgY6oJy8a389WTPuiZWifau8yBcGDraFJ",
  "key24": "2YMi4pPanTSFK7QTHYu6BJd2Y6MnywqssUkeaumXTz7NWLxDijWT6mhkYPh5Z4xDKYLitR1xhTskpVEWCQQkdv9g",
  "key25": "3625p5bF5hbaap6LNRBiY3n1T2hJRuo69jxvfSDpr5muoaqRSFA16L8m4sYE2S8PDsGhVsn3KAYSWPGwVgjRVC4L"
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
