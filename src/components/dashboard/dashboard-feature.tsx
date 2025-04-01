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
    "JEqRTqhCKyTSEoHqnG4rAX6iFPwQ4WyUMgFWP7yUGsAUprJ96ETe85a2iDucBDMtgXroAHvbYmGavpWgSWeUzqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKMH63NsiYPyBhjNKrpUsoXtpLBGZCvWcD6mvYEQav9oH9ZKnsqEEr38DfuY4aso4sobCqkv9LKP2x526JDWjXh",
  "key1": "4sa4FvegmJdfEX8R9VftrGkXk2PEpgAzJs3N2Lg9TMJ7REeVYVoVeH36ftKuvgtX1TTifmj7HTNndLwFH2DaA5NE",
  "key2": "t8cKfkCHZX6FdMVzsuZQmZggKE6e4dRvZ3W9zSuK8Fg5YB6MeETnkLVsYSFyF7wYGACJn5oGcPK98zQXFgtYcWh",
  "key3": "2LJXxgTGyfevBd7TmD43ZWFD276edt2b9FhxwuTwXNDdtP3cV42FvhYVmv8Mgg56rrELL5EYhDp97nAh1oL9Jofq",
  "key4": "4khqHmtimaReV6rqE1uBTqdDYz5kret6pTuFziY8hM9Pwo5eQbcowBC4ccqahmj74DFScurdEVyYxrcRDyAyFPhU",
  "key5": "giLHUSHreW62UA6gPUJG4N44pw8QiwZ7qqbtXB7ahA4KiE9eHtCLgsN1QpFokFp7B8KeaNdm98rKQCVRKLZJTa9",
  "key6": "2KFKjA97VmGhUMxJLaHS4KSuA5U4jyEXyEC1zt22Z1m8fszL1a64wzPQ6jLudGhaZZ4jSWCQYnqGUv63fN62ijbu",
  "key7": "2FqHzB39bxcpqoHZkXF69eKiNinj4u4wrUuhvShhy2uDyh3YGeeZVgUBBovPeCJKaiyKiVhUv2bi7D2iRTRKHUgp",
  "key8": "fopVRxYeNeQ8eAJBc9kpFt7SbZkE6V5ApMts75FryYkWQpMt22po33PKQEv7EQ66Z4PZUNQfVAuEZYHmkjLDr16",
  "key9": "523pQr7tWcE8xfZJdGADPYspnE6ruLXKtrvDZFzzzX1VoAfE8HsFwBWF2v61HqbDS52fea5os6cGrv7NqRvDh1cf",
  "key10": "5U4hohFLE729FZBHyFeyvNYx26TMJeyHuPoDFwFrdYLWWZD4gZ5afEBPrrbU1EeM7NBd8C6AyQ4VYw8yTbULunC1",
  "key11": "4UNZ3kv25h4cKT1Pcc7cpaAQayzWFBNaKemG5tFx2KaBsbUVJPQ1nXQWwm2zfTk87BFWXYudPoKpXj7f59PsBymV",
  "key12": "2MBEVzrtJpnAu8BUphdearwMBLz8PJLhfmRggwwYxcDUEmu8yS7yJm9T9gkZNWkJTgM4mZMtkiGKTZ3k4zVAy7r4",
  "key13": "3bVC1jegxzAKnnS6mH4WJbszQLqowJ1jJLhT9m8eKLqw5F6w9a5cmTG3PY6uEoqC3sBaJkQrLc9SzNNkPsKXNkCM",
  "key14": "3efP1qz88EgTfs5DpiNQp1MYUdHArbG46ZSe1fEEiL6qheUQRixKwXvW1iWgorKBozPB4sUjpwkW6cFQiw7bWHFZ",
  "key15": "V6T69yaoXogqxWiPz67xRPiPBz34trmeFAYCtatboFFrPh5LL4wgU3xaw2HfT8p98RMfWaPiCrcYzSoMsqeu6L6",
  "key16": "sdrdXRDkoVuiPndgygj42hGxBnoqzdoVtymiH8AqRK2BXk4K4mhpZYFiG47Ed5TMp7RghRnppnuaKmyDxzrTQ6c",
  "key17": "4sYY4eR9tGHEEXPZv4gNddyMjv5vzd4Zr34tR1hwq1Hgd34hTZbCszHdQQaQXGQKt1ZDEfSSdkeq5B56Y8vmyfGw",
  "key18": "3qX6bSqWweF1sdHBdHC3K9g2SDHcnb1KXUz89Qxr3SZKeqdCTWGAbzTdVPenoqAD7u23EyGdEGFy1SZQwznMvic9",
  "key19": "37KGyYryHJCijiZfTK6UVJc2LkydUX77Gk51Ay9rV7dHLajfHzE79oFMV8qrJgRJ8GRtiC4gxohDQo6e37CV1wFa",
  "key20": "2p84xjTKrDDtoynARezDVxbbTa2zMyZCq4AW2ww4z2yj4A2wzySN3iWabThqfQK6FWtpfPRiknsDYEGPKdbBMric",
  "key21": "2smKQo1zfN6MHNyoLtA1qK82wronNvMxbMNkCW3UQEFd5LZGhnuWHd9Y4TueYELSJxC6NTKWxkHhHmrRNR1hAzLu",
  "key22": "3gBwhHrc3nMoJoYuzmEnKdveGDeKXK4NEmfvNJ9aQTRTTbzcAm7eCQG3XxW5BBb6gyMfrvtrWdH17UiUm763dWJA",
  "key23": "2Yn8PZFm9xsfE6HT69ibv3RcYUgic6E8PnoTfVpMSFj11MhMp3GqwG6QjPoffTSqMzN4B5aEkBbK2i1KiTFWorST",
  "key24": "4pDJaDHXqx6zCvi4b7cpZfP6krHYMdX3sb2qEbD3uyMZUh8uK44mQSpdY8Rf7WLUVLgyGKmy3kbfWSmE1SvBtGqJ",
  "key25": "28Khy9kws9vLCng9TxE7Y7YAVxZU9MfjsoUthRtW2MwESw2nAvgGAMZzcCehvRPnYD9YFe3MpYYX73QXuBjrQ6sP",
  "key26": "2rxqrVXh5EE6hBJ9YDiai1iLYA2fhwYX5xvi2tnLTgnk74ynDUSgfbFyszt6Gika8QSmKrkQ1kE1TEkE8KwdP18B",
  "key27": "2j65mV7UDseb76VBPzsu7MgyvLLVHvvmGJ7cMMM7JA7gSmCZqf9w8zuG4uf1qJhyZcKhi28LsjhvPe6zNFZoBNkc",
  "key28": "583gd6s4uqA8iRis7bUHetvgmk9ZLunGcowUpjTkoDtQAEANwUzzEDvKjZv3MC9dS3ax5gVfUQuNbPz5bV9iBK4E",
  "key29": "2GAwVxPk92vGNu6dVPrMFXcMKrpYL31a6ZreBh9aeATAH1PN9DiUyWnpMG3wR3JCPkN1RkfNXJ8VW4kcZTQ2jqdv",
  "key30": "2tCWesVEpDueShiyPJ2ysn3h9h4J3uJQpYFgv3tF5DknfDAtLUAvt94ruNVtURnTC7S2Gv9HMaSCrULWaUho8pnB",
  "key31": "5qLuPrqxzQrdgbwsuHFWi7v8eQokkhJD2m5ZEQom3wjNPiL9TNrYit4nxCpYVDS1ALNQ9ovg6pBh6iJ4JY5exRZf",
  "key32": "5o2QpcHBXCvCLwYnckeE2DHJcnDVULqE5Zxb7xbjRo62jpA7zN11iPTp9TTZxLxtWqpTNzsZvu1vDqum8Hb9kxYq",
  "key33": "3aFKzhTfn7MeuMmSdNRE9m57kA81m28j7iNwpAyJwxoiFsoWPNLn9dEXHsJvYCHWtAEhZVo4Jge7qLchE2iJRREr",
  "key34": "dZNtCUiNsLd6YJA3dLKmZDdNn1TBtJNatrJaGewd1FnyfzTZ8VLN2d8e99E7c7GrpX36hXkta5pA7kKGi7ULpu9",
  "key35": "578Nn5av4WpcmEFiusswT6MkWWMr4iT4MzRNyLgQi6SYYV3QF6XoKmjg7GtVTwHeqQhzPbri6nGKiR8ySHnD5psL",
  "key36": "Z9LEc8zhkECtQ8Vu7tkLaytTEStSV9BWAbm1SrXy8vv6E6abYGk1jJjdKv47sUNRvj2Ra3WrD8LpnLzSXZduGAj",
  "key37": "5G3325dcqgfm6tLYY3HYsx8DbgkhESGJKnciieqdBWP4fHHnNAfhwGrdMgXquHapT6chfA5GNrcsFUEqvD6G4oGn",
  "key38": "3HDYe6UMpzRTiAyrdRKsJHGhkmrYtjmV9DbETKS1dRXVt76rsFnqDKcvmwK4Rqji1DvMFAZ66YnRarWPfzjxykLK",
  "key39": "3AJfbm8CYH2XrE45jGXKhppPC1S3PeBaRVpnF77pFgqdUPaWDySvLkm1cMNCS5MDPkhXU3ZD9CjPbDGuyQ9KSrqN",
  "key40": "4AmxZswtP74AfPGzrNqWfPgiJTb2EujVdNVv3DMkiHQaqfHqAmSvKXD7VDXZQ39kPHDbSRBrTjYr7YEqt4tVjNBz",
  "key41": "4UJ8R7rExTXS2QVMnE6BP9Kc31QxMWPRkMdL8EPZLXCBj5ymdM797EXjnzFF4hRbMwJM9ULKkagcdutsx9VFoAxb",
  "key42": "YVJbFuj4o17pudvjLNh8zuu63ScDQehamNKj1XaJt4WHstu7BbYnAUqj7SGihHFHcixoiwqK6HnB62oMUw9ZDcA",
  "key43": "4CH6BbTYa2LskUKdq3saWHvKwWkjewTBmnVEhjX5baHcqWmXrGRR8sVZiL9ixzr1ifG8KLFr1oJMaJVis9LF3BmD",
  "key44": "SDze7EKtn4Ppyd3tSbxzVvxgdpBw9XEJ2nU2mhcktFsfS5CgpnThgHqiaav4G7TjZ1ZxPKwAH4xEcqnNaHgtXhN",
  "key45": "3ezFGtQo67QdMHEGrdS6FwHTUsYwuBE3sqeYQypjoSKtKzWW7dr66eHwYnYZvRfDX2r7HcpmyJQAicvQWxFPKqms"
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
