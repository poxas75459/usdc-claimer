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
    "5QqUdW45vFU6xakzupDPbRfiET441yu1EiUcqPPm6UiFQ5Pa6eSJDgeP842UQq8aKSqScCGQ74H998fsy6ChYSyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGFKm8c4ecEwjzpSP23cNmebr14zocgSWsLcbauwgGeG6z83nkB99FUrAW1qkfdpWypvTX2AWqKwzzmH2aQ9eYk",
  "key1": "4RDD6fsJseu5fssPpzDYw8KGgWseLcPYaybjYByrXNMNirADarQhenMic1yRdcGa6VFZGWVWrGrVRMrz3YqGWVaN",
  "key2": "C8j9yRfzV7v3WgFFFLYCtp3W49NSTpdprGrRYpYQGfzmZXoBJYjKY1SAYMrhPd5wHjrvKQ1AUBkYCVY2RmB8TCN",
  "key3": "5YY1GaSZxRUHbvSRLAzkAwGNZf6j7DHQdssHCccAefpgM4ZhfXJYX6HQmyWt4Dhk8c4MKFtryhexNj7oKYQ1JUR",
  "key4": "22hXgPnEHavA7Gm7WCL4opEzKnHuFDBU2ex3mhoqz8yb7bAqLbe2W4esXrLp787S2YwhF8TahiuU3hDKoqeeKGHV",
  "key5": "5RgaA1fy3pnkizG7sPMsTRHYR4MsXBoAN3NRPGn4XK3nXdarb6BggNsPfucsRAvEsroVPkSX4gMqg9hgWHhyDKV6",
  "key6": "4q3Yt83ig6VGo23hFXqfrF9TLRk1KGisPzxmkH6pBt1w7eo6CKBbWZjdnsHJJ9rimLChKUawPPGKZKuzQrQWh1HW",
  "key7": "25CmgTt6AjvHEnprTmFDWpoy7UiGKmZM7mTcAyuwTak1jGg3nnBRJ1VJLNFi6vS1LPfAgMWR5ZY9uxQ9k5BeLxeV",
  "key8": "4cD8hqnKKtDSkv2yApLxDqawbSyYeMgj5PrDmMTmYoPqLHVxxoztz8U2GmWKDUNxaAKbX6HrzmTjMj81dq1DgU1y",
  "key9": "rsVYLoYR6zqb6KUcQaXkXEjtYEJj5xCwt9Lvo49ZoUHjwPvJv9191z6heitzmrNECDvSUhnfGTieGicom6vBtr5",
  "key10": "4GfgQC1KX6uwnfh8wbZDTDKEox7VCs9cQa9HNMivx2baQao681uVbJNTHQCFYVuTGKuME8HZi63WtL4XRUBahkap",
  "key11": "4crLrU6gqh93GLWNvSh4gXD6hui5tx2RqxY2zhXkxdw9maGCmAB7tNobyrD6RcbxqAvAcR2QrQe9TAagbTaZzF8a",
  "key12": "4r84PKbe4ZXpqnxs5PvN1RGCaB8oemUrcJC3K8rZvfnMdVKTeDwsVQWP9pK8ArCpga5nvzv8Pg82FmA1qYySozo3",
  "key13": "5hgFMqA8gDE5n28DPKAukCDnqrCrpC6AxCEWyb7anzX3WFiTwrNWW52dFxdGHYtw7nsbK4BUdnrzFXNMXmNy5jMh",
  "key14": "EzVagaSaVoKE9vNxmkapoy3pkV1ivJmFn8GZVwJLH63FBnCNWRj4utPYwxasxxvoAabfQ4CiFwFshXSSE8mUqCy",
  "key15": "2vjLtEw37fkdnK8Ekyv1ZU2fFrqDDkoSf7X37J9aJtF2R65avAzZqbCiRJkyQkdUNDBigURAFnaH6hco6hFh7QNR",
  "key16": "5mKHci1ck9zoLAhXGcgMAAxnQ9aDxGH4R4qpPJfK4DQvvxer7TMooThpNms53MvsmnJ7jr3E6mEJcPDfV151zacV",
  "key17": "3kTLcmYsx7mfDkiWQiAnvUSpE17dWwufERUWBP6REuC8C9cjLn2Pj5FATAFSiZ6prepGtQBqWAN45pvYn3bCbUie",
  "key18": "fLmJJzsm9uWdnJ9R74dA4DLnUx2MyQqC9n3MhX8Ly7wb3rseu7gRAMTGnHvDRUpbAQg5ehfZPmZVAuGYsQGeimi",
  "key19": "2MvhcRHeUE7e83RnHVy2e5LbUvcdVwaeLuVYrJnxQZYHbgPd7HeLZ6rprPs2xaNvWes9zQehW7WUT6s1mmsKA6ze",
  "key20": "5vMGpaD1iFscAAUmM2M9ZehY33WM6VXWYr7tyC3aGyp2tP5ztQQmrFWxx7SHoCGNYAyF8bMqEC92xckKnh62WYtn",
  "key21": "4VXmv92AyFTFT3PP5ewnFkuGiy3g2UKM8XyChtjav7fSVwzsyzTLWjdkKNWnHFsWrEsV4eq5MiGRKT2NX2ncn93W",
  "key22": "4iRzfZYfsWAdAuBKZ5Cb4sJeM49Uo1trXJnMDKQTYbLDe1BUG5X2ayUnDq3iv5J6deQHSfrvki1kFWYtBMVA22Nu",
  "key23": "4CqAoGsFM1imC2mRxqUESFyGaJNYLEixp9j71KHrre6rZCRjMKmdfPe6QCtdsrVH6xk6wvfAcm2wn8k7k4duMSDB",
  "key24": "4hufo854jwJSynBiPA3K8jEE99MmpMaBr1KbBwHmNKYNhbXwKNa3xs4xnYuCmGUwYsem4LgHtzmAZbYt22PfdXfd",
  "key25": "3ekVFT78V3srjRqobe4KnNGvitcuk4bS4S7Uetjs6Hy6kwt7VAVxc5AR9NS5vGtkhBLTg3uRuwVF7d2427biLUVg",
  "key26": "4Gn5ZwG5PMPuStfX2BtXxCnnAnVFrxLe7gFsWSPRJhvSvw8G32kqSgVcoMYpo91Z5vKT7qR3JDFL4qkkttZ3X6Ve",
  "key27": "39WsYEzdax4LxPnSUFQLVNGeRzmWRbXNAau1L8MUnVQLfDShDUQoGy8YPfLidiPQKBJ188vqL7NFt49Cu2QgFnF7",
  "key28": "29j3o8FcGxpAR2z5qrfBpEHp7z6zikk8ZAquNMJc6c1HUzJ5F1c5hhM2cSQugEWAyBbEAcQqzkHav1H8YjcWVmRp",
  "key29": "xzXYJVWxmBC97h4ccK51UDaoatFpvXbzmnVjQf3rJoQu14QM2scwMCdwxaMiE7whwwe4sBRWX3WHBapZP3r35tZ",
  "key30": "sNhak7YhrHPx1s7zfLGXWAMByBhi3YyNf4e2RmnAchpwnYRE5WMBAFNHuKNr8BkAsfXXHyEBNe9wiNyFTVS7rBM",
  "key31": "55GyNem4GY7BG5incfpvFJiP8yhYttjK9ChcXQkDKLhkehQm578GMCWKsp9XAq9feqdP9arShsuxjc6QY2czYcp8",
  "key32": "4gUHSsRG9AoNkULJyAcCsb1HgC3qYyXzV7Af4f4arjbYJ2hzGY11i94crL8iW1soWHioyUBVoFCs3XZdkCwhKH5C",
  "key33": "4wVfJxNpGU8kStrHpM4SQdXQy3H8NDLxPiYERBD7giXuZaK6ihoj7CwdRyPoE2hNUJDYBEev2Yuy4L7A13VDQbFm",
  "key34": "3a8zXoBXXP3oCsCh7rm2VFHbgpjAJr3cHwn2QyHhmbMmTWLs969vk79qjLsammqG6QmkpLLkEiQgBWAgFEXPGYLk",
  "key35": "5BAjySjeV6RB4rvRhPi29TiZ3YFYUsPvmvANXnWyQneNEqUwM4wkuTFy1fJW5c3mKy8r5YY53Sm8JCdvxGnaEDhs",
  "key36": "32DoTUzcFYXcRum36S3PfwXp5Sxn2bV7KrXmtWGq72wfZ3p5GbpdMFYR68eMbkRtyvgJNDXSAg2MhQw17oX8Rc6F",
  "key37": "46k9yB7kQ1oFfJXLNrAcwxgiVdRz3sAVTDnnhAGNiMPvuU1U4tqSNhM36DGqqf7DBDabrt8HFoj9ta3y7SqaNoQZ",
  "key38": "3KbRJbfKYNJLS4a3WAS3GzYWiVWwg58D83aRDqYHLs4mc9m86iZitsw9B7nuGskMkMWNQpd9ndVQJCutS2k94LbB",
  "key39": "32aLZzB2y9TqyypHmHvCJokzdXEFpi5wzgroc2tqYP9kmUEYzotQm6XyC2fiL5CubL2fJtFUDtrHAZcm6pEsb6Xg",
  "key40": "4FCRdVqHpdUUSpbDHBqQAjUzKRQAkcfsLJQtj5AiziMB9YaVYYyFP18b99EkkZxHNkSXAdaEswxbrPUBj3iPnd3W"
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
