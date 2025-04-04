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
    "2mz9cVZAwV3vnkT9vNYw5vjeJQCWcvu6WhQwYS6jnkxPvSbtLbq1kFAA7quGixyAd4HvxfqxFZ7sEuT3oerR1gTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLrpAKZipSEzPtDStBq9cCtYrGXcfrvU66YJULCbcnpZbSqfVSCPoUrkB9eRdPAd8u5k7ptWXhRkbtAoftWpzDR",
  "key1": "5tk9TgNfu8RxFNZEJCkicz82Zb9x1t3pdDC6nGfKgNUzQiwLio9hRNfz2cPPt49p79ASUEYinu3kzvjQdmHk4GKF",
  "key2": "3CboG4oGWKPteocc8s1JCy3WWJqLtcEAkUPs3vLu7e9ULeMe3XrvbEfWqJdWG3nPTiKgUpJPsgguBRtpfi3KGmnH",
  "key3": "3z86JELFT2urozzrtzpKrCttRqY8i9CnjPtka6nhxJQoUz5zJLFGRUMwyktgGq82BrPbwbTLmkgjjEEjUqkfEQ55",
  "key4": "2FcJzVzg45xUbJv5EWcoNYqcVPtM9ADe5JZoGKQ6Wm58fKkLQKiBhVwbcwUTMUDwNNtpd2qc5WFcRwsaUiTagowd",
  "key5": "NbHreVnehkw3Z5taddQoEDZgbQ8vQ1yQrHgsYpxYAyyja7EJwUqJJLXuu7jRFNSmh2mQJwXXukopCR9JhMBc6Hv",
  "key6": "5FNFiqGRJe25YSWgLqEPu33PQsD2ihb9M5caxdwQZ6Fmbm29bumWqUF4urDWi3unZk4DXVPDJ7M3FqYvFzLWjVkG",
  "key7": "4Yck2qnd6y3sA2xNkvrzJLnNmek2jrvq3ngR8Rs5Pz6zdQpKtsNqid3gcKoQuPhcoKp3CTiSRBfuUfw9cat8RHf6",
  "key8": "3EdSfz38occe8QH5nJjXkc7Bb4rNRgnmn2aiNKpmkcnaziUy7k8VXiAPmpwtnunR12S45wKwuGPNfL1GAoWGjJbj",
  "key9": "5SC85v9Pyf69XNT2GnqyvTnWNaBi7jF4WAtJy9s1eMkqBk2ujf5TwJSkfLnrwy26cFptBQNStXdz8zqSoGJJeNRG",
  "key10": "MQUhf1D9owStAvufUH9Trb2YtzjZ8Zgq4osv3AfwKf5cPmkJwU5QrcLPYzmtaMEiPAg2Atv86tgtbxsz6FtyC1t",
  "key11": "2RzmKPuYcmy5kx9rTXZQcnqvsbbCZ8BqMnaL1XYz6Wu1AS4a2tBJn3gC1otm1h54dS5Q36JnayMYHY8ShkW5t5x5",
  "key12": "5ZqvZBU23qJaEVLKfvdp9RFALwdfWpwYKLHsReuM8eUrdNt6LzivukeBSuvDA47wVvHtsX6vofaqKSr6kuzq3tRM",
  "key13": "4Lt3gVFpwNm2z9RQkeod5C74PMwgqu9VFazEUhSUUhXDg9D7TaZSqSoqnuHv4ragkALNywhmRR8C7tGiggxpE7Cf",
  "key14": "wAeJaJoQ54hJGYKKXSMTHGFxhtLwejc7Fi8xD2LAUcoAyoFzDniSFedFe3XJjM8hWRg8hTLiYWsqa72e9LWZJXz",
  "key15": "g8mPrvvJ87vEAempXNeUVjj28MSDokYjZYJaexM39dMPyEyStZJaEmC55Sq3E66vTg7RR6vGTVNGXrxiuXgZAqt",
  "key16": "5QzRDZ3gyddZ8SSS9JxkjTXTQKggCN9bYvP3SYfAeQSdDfW4P9D1NnzDTQkXbzeqLYQ85YeiCGdhhxXGc3dFch96",
  "key17": "4dC7hcmE8V89wnygYYRdscJaDU9NUxmMk7FW6AfGhVkyuFYHiNDF8dbih1Mz8YFceQSiCLM2TNqAEjjJx329otcV",
  "key18": "5pghkmw6XjwCjX9DtYucgBH6fVrwY7w2MzPWV61juCGwsmdygBGTYDM8JqUFdECBSua3wJGiyX1ATqDHtEiNc2o7",
  "key19": "wJ4foaEB5PcqUovWJBBcrb7tZgK2BS6PVqKf41DYbrok67WFr7Nw6peDYY7djyjcmyi1U1eKzeFC2RdSUESgtMi",
  "key20": "5JTRD8mFVDBHaUGBs3b3usRN8Th93B74G2Px1XhGRCY6WPpCKdq2XTgPhet3iC7mvFu3DFRxCJQ65jPSbhRh6YNw",
  "key21": "3ZMcvYpW8RCASZJbwXAf7tgyBJMfiCdUkoQ9d9nLTj9GUzGwaJ7tU2hrjTmGz8DirqNHouqHbEtjxJc8LRxf7ULJ",
  "key22": "fSbeSjN2WPVcyaFJXAKVPoBEowX7NeGghwLux34JP9ekwrZ5Kwzw3KoEaL4d5bzVusmTsGb6QjvQPpt2mcZcooC",
  "key23": "2538RqrdTUExZkURBz9C9qkCjUAcPN5XD2vhaFUzc9nttxjbocMvwijrf8sXD9MNB8rms6SnTCHyvxVEuyZaL9Yq",
  "key24": "3VuG5t87dRDsVFTyuuXpannUTii2Eim8tUxRd1CLfPCsXBZiJ2ByTzatMyRLGThDYqt3eTbZ4MuKEWDgnyoJTVpA",
  "key25": "5psad9xPuNuru5StEi3kH6gFbesEphrPGP4jGiHtrQJ5PBvqRQPufknVWEGVKYyF2PzaQceADqTbPkfE428wN73p",
  "key26": "4yzNBjW8hDPB7TnB8whtbTLTpCyX9JwwdLrZ3Uxd1zvNMmPhKQ94U3YwZoYDW6fwJb8K4YXmNc7qx9FDPuxVptcY",
  "key27": "2ji2SySMEA8oyWTpsYpnjBt1K33pyTurbt7KSp9Fcnhn24YMXHVYd63Fcz3twUNNY88NaUJAmdqeaborQM1LA7jB",
  "key28": "5AwrM8ZKffcc5Kr8MrZUrReD5BLqyiiEF7Tz7mYCzhYQsJLjDNK5J2fMSgS4gKCCMhjXUeMNc1aAfm23aAfyaGNL",
  "key29": "Af4PfUees6NPEJz73pQ5bG7JpgQ6ibvrveSFH4y98p2ab57WNEFX1qVokXkbT2rGw6Ui6AN5XVF1bCkHcTv5MkL",
  "key30": "ouiyJL1ibzfZkmK33utH2FhysdhbZNfGtL21bxupKbLbgaAdkcSi9kmxAWbgcqFAWLNeKSJuNtr6nfWL8BFMQsD",
  "key31": "56Y8jTKnX2GbnQH41Xwz5YPoEw1QczTpenxjQcsDkcDYJTfBPpwkjdY92zvb61xfkN3nrPV6BsANBmMuq3Yyhuhg",
  "key32": "2Ab5mtwspgc2WkuXT2FXu6wzbtgGm7fYGptsfN3KwDoDeDfdgkqGuXE3u7ZKiqgRKaSUEvHY2q7zh1NbNDg2asPD",
  "key33": "AsNMqFh7ux6bUbo7DRc7MzNW96P8iaFKUzhavdGmSCEwZhD4EKpCLXguwi1V68Qr5TeRr7MQZxzmFZCyjHzfYo3",
  "key34": "4BgjjiKKQNYPnW3xqfZH7Fh9menJb7PhM4rYf9abZaUbwJZCLbctGWuZ9r3maGbrxxaRGakKyBAH6vtynsHSXh9z",
  "key35": "4rpKdBp33QzfKdoe1Kienujwrw4fxPETMQeTXTSdZ2VzD8HehJbUJ62yEVWEe5PUhdmP4j2yXUFAD9TV8hqEy4Uu",
  "key36": "4VZxrR2hVU2fzaQPsp1aWUcK9AT5qsJVvHA26UXqSRpnX7CrZj3LDyXmk6eFPeVVv7zbYnJjL3Gig3xw6wQ9atXX",
  "key37": "5zRsQVW29hD1Z57mUfsqNLhHE7xgMupipSare8S1c3nyMg89T3K7Q55EYzuQ1Wtrb4EY19pWRUnzx1Fkm3xqXm1v",
  "key38": "4crVcbvDjdaWRXPhnVFpfMFfPXYaHAmLtZwEjWzxUd1GAQaQGVmrBAogWLcGDf3rgth5S2iAJ9xk5JgvYKDc9NRB",
  "key39": "jVTpcuaq3UN2n7Hq41PoPRNYqPg7iuDqSZknab5sSLaTX9x8Mn91wvTjqDNhwzCmHgQTqQD2DDyvHYDkbZdE9Cj",
  "key40": "5ZAKdJRUizAw8fXBVXXbPQ7G7cMu5Gi4xPiQja8LoqYsPUZsr9Jo3ENnu7PiL5tfHHEVui3A8eLwyZAhst6ZrpQm",
  "key41": "ocX86C2vJVZfCXWoSofyMQ1aLw2RwihVRDkbsUoDcCvmyMGinDCL6fZDQtNcpgFUQUESBqmeYRGqhuHGQenvR23"
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
