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
    "2xJydFV1ipdFgroP3sSsxju4NQRAmQhgViVtB8WtNWEiqQb3iGykx9PxwHSUHomb2csEzBARdmzQpav3S7oc5sWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Af1dcZc19jk7LvoqFBuBBs2x7SSEMCJjtRFddnRgEWzXoa23Hg9UNxFRDgtpN5ub3hXqQecvszXGHKYNSeyW93",
  "key1": "23kCPscyzmDZrieXRt86V7xsfGGcMA6pgQp5WEYknTe8DaiqCgjJzYVpkg17Tfr4HtJe6gqoHQDJ7ihL67ZoJ47g",
  "key2": "2JRg8oQ24pSpMmMopwCYCUUjAJN1EaUY4qQJ4mQrNYPboWwj7SCccYSwizkBKNqLVu9uevRwcZV6fq3KX58N5SkW",
  "key3": "UNrUptR3CJdk3T9sd7GuTK7mATnCCfyJpnKjJWWhXK7ADsrpsBDFwx4cTp2WCWkVjEptwU5G9FMQTfSmnR8W3Uf",
  "key4": "LrKAa1jysqpTBqctkng54AH8VvzW8uenVV5pXjmBFvf1nq7KynrKwmP7hDeY1Fs4y8KTdkbJ3dwfb1XVip62fY3",
  "key5": "3uz8LYHpzAV5JEmJtatKWDjnYobBb2TXLZpg9EkHFgnDFQkuiJ1EQh4qxdMNwn8o2MrW34XVEzEv2eR98qW8iRxU",
  "key6": "3SuQz35yzgffR41UQJM3TkysqHK6GLH6PhAPCjWQd4skmamFUYsvadxyfBXM4MwKM93Jrb5RCf2GYMf5BPKBeakC",
  "key7": "2gAuE2zu4cMtVviHMKeGE6bor2SSZcUUS3izZnTQrjMgCbDeH1s2k2Mtrufyfne3LHu4gyDCCGKTmUWaX5wP2xn8",
  "key8": "5Swi7kai95CCsZjzJqNkzbGeedFuKT35VuKgPLsyBawGApXSwT5i6SysVQdtB2MS8bGeZKsUpDbS4uN9VtBJo4HE",
  "key9": "2z4X858LbxPsPPfkXViQ6o1SizSRxqDtTwwpeDoBFHd7DDmp9TznSHEedsGnCU9QSnqQwFnJ3jvZLxPnTxPKQkJC",
  "key10": "2DQLySk9SHzXyqy7ZkiD5f7TckpaPp7eqU69CA6RRmXjzaPzMB2TDqUWv9bCmzH2pG77ufz8GqJHPcc5XFJ5vWnv",
  "key11": "3sqratwSq649PNv2fXTJfPijCsxkb8RDFYay5r8UH12LcjwftVmfKZ4n3m46H6ksHHaY6mp4q6FZfkuTBaaSs2i3",
  "key12": "2mTJMtCFTaQefR2DPRDgeCQSHqmGpkgnAchfaULwLN8Rc1KiatmachPUZ1Tf3xK149macFA2BEDadFWUAPnozUR3",
  "key13": "4M7YhaiJoYQDDoVwbJiq6tGXSbxBPYjNmxE7iFSWGfwmzQ83FkhofakRmCnX1taJYQAgEEkFwwoLLBmFniAsVmsk",
  "key14": "3VYkccop4ZyCBCrkRXai4PoSQAFqmqf94ePgSY53ajWb77MVbhurvm6D5Vt7tXRB7nsRGxVz8Y4ixw68CeU72HYw",
  "key15": "4nndJdxfuuDVc657ENkW2bqRTZ8eB74nG6WLc9mGueqCBqbas4NnxFNuEQda2qDK2heSDdkRUeeZMe8zmPTDmXXA",
  "key16": "ZTcSfs1AkqAnBtZUj75iELDFdMKZYss5MhFiDMJ2k1Mw9DDrix6VZYE4ZFAn3anqwhACTxtTDjamZiXXgaH9BcK",
  "key17": "5Hn7etkFCWwLz5eoPxDzau9DznSu7Pa8pHTSivts9R4zuz4LzZqsKccZ9KEGkyNkTK3C8xXAQd2GHYfFdnY5tmvc",
  "key18": "PKkYBWYRdX6RN1TBc44jYYmQtgiyuxCcb3R7DvToFKEkQEaCUf3XJtnXZBXF6AnGurX1ZwHZYdftZHwVgrz1hCn",
  "key19": "3sW1VhuuHxWbyEsdTojwmnwqpys2AGKEbCJLEEWerwr1XfqiqUGhswUo8uLFTDoFJQr9RSTc1GkFwEascg1B39x1",
  "key20": "suYu3B5TNibqnYNsNnWTg2tk7yKUeD5kYHrmqcNe66DLQ2Xpy1AyRsSLTNKWDzK5xm4Dtft4f71izZH7z7TJgP6",
  "key21": "4M9zw3LyNKV1zwhus1AKqqacZYsBfo8RR4A9pvAfBpVYhcKjhjD2EM9E9KqNecx2L2cDj71ZPGUaEQ8ddDhDs1dJ",
  "key22": "5gU3mCPDezWVhhhXHFaTS8W7hrjv8mwsrEad4onWw9vKBENa4x2GgDxU38YN7Q4vjemFFXUaHzQs8zhATD44HciD",
  "key23": "4CPeDK5ugDeP2vRsMRCx8HNzGTbKcYoQvc7xHTexxHBQu9fqDd3EeJuRfidQNbJn9Xt1wMo8rjpuRHGhFh8gwjwm",
  "key24": "2yCKpfQ62nReQAiyMcaTDWNZNESw76SJUy6w8wez311rR8KyJz46cZpNdJvjphpjUhSMmDHKcMowz3aLXBrin32w",
  "key25": "cGBqgGYvGqWZCfxWgfkzFugnVKFrG4nVzayqsDBazZW26Wg1J1WmA7eviTgxgujqwznbVFabgFLrXBGXTxDZgsA",
  "key26": "5RsXYPkLwUvBbU21Rczczm7myBtCxDhM24mYvpVA4fELX6VGGAcTXkKyHLhvQeWUXXsjFmZczL86M4ZBPwctBDRr",
  "key27": "34Y2Jjy8UbGnNKHL9JgvvCP2VpC4KTY74UxrTZq57iUiiYVddzSuUF3c1jGvi5QYRmiUSUneeSPxtHoAu98dmga8",
  "key28": "ttahZTwtRz8sgxGAPiz8kwLxfKeA6ED8ebgGpxuiUVaHx86ZCTk7JTQ5T9iq5bKrW1ku3aerrAMapDuY8UKAw4M"
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
