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
    "3cqRTysT8Emi9XRHFPGiP5fwapjVMGBVQXtG5PC1n41oSZuss4SDrKf2B3tgGjAScVfFHdgwDN4MG9ptQHqtavaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUao2444JoZBhFr6zfdU4YWQsrrKvTWxmUeQcW8cSq8jgJzzUtBf3ndxRUDh1ZwxpU1tLGXSeBjJgnHfEJiNmSD",
  "key1": "3q9sTGdW5w5my3NaeE96kdRybvnuAPj4kDyGfrJH6aH2ZhkNGe5ZSA6F1URsMUin3z7wjEVLHtmDeVysVRwEqA9F",
  "key2": "3QsQCCV5qNg71L2AdnBvwd1Am1Jb2TUZU5a9jtTxp9v6RUxmZ4ajFKpEikiTZLTutsGCZg9B7usogmB48vNKgvnc",
  "key3": "5a5imezyoxtqdcS6zZzJZVe67QYcvGRXwmqnohmX2sJ7jHZyWEmv98mjo7PbtVJvUc4HJkTSCpgTT6exY9fTBANF",
  "key4": "VR1NW1sNTrqpoKYu5UrPxSGyq7vWrR5xAobyVtPbQm3oyUMUP1fTMCvSJoFTB7cTY742XukkorkxrGmR17SiaYi",
  "key5": "tQZjMaSmrs9anxnfcJqYgEUKE2c7UKL317nKDdjr3xUDFoQuT4D8U8C6HNiPSC4TJw2u2uCjbMnbAgSYUUeKzME",
  "key6": "NpsVQg5Asn7XQgdEYXbiNYRiKsooDw7ngWMN6TjTBtuAJH8ZyeQzGYef2GpY9LqeAYZ9PbsaJhm1ecngUvgo53X",
  "key7": "3eTdZJQDq8aFjb71sCtho8mSdGbb8NTeprDjR9AZaEpd1VGYTDLPMqjZzJLd8injLieNyurr2Eju9ozwYEnuGWDf",
  "key8": "2QLhC7PETLUyWVAXgySUcd7duJA2maJxdBJ344rHUNu4c2EVZUWN1dFu86JDDfnVH5hBEnjHqktXtuQcs8VxKoPA",
  "key9": "bboCNgisLm3KkbDjafDtkcARZQ3rmuJHTmcrBDe7WtniactSxvaL2eMzJSspaWoYKLgYKbfkijSD2SYFqwT5TmD",
  "key10": "79mfQVfwdaY7EdCnC7oMWh3jHjEM3QcHtdAygzp14hsZ44k6DzPDGFAXDdoebKfKh2rMDkjkG5FAmaaeAMYhWcP",
  "key11": "4n8Huc8LgHdd5zTsNJ5i9g8SeivCYm8AXsqy8mrhrUdMkuoG8qtXdXqbv999THspNwTJutzUf3HxzeN4sTkFsx9D",
  "key12": "2Z2sLg6Xi4o16M8zKUU1E4WwrZjKyKzHtRKhHgBmSE19gpb3CVTXuK726CWpbx4mVmFVQqhCa8KuAJRr4TzfqhnV",
  "key13": "gQbSAPv8y2tVai5ESi8UBNtNwxauYQ38cnFDSu8aQj9T3ZFvGJJdkcSgcDmPWJjqigJJP7GdS7LKEyufs3ZgBwf",
  "key14": "61W5bX1YtbShpqMAgdMSrE1ELA7VnvsWNfuJ2LWEHekDid8F174iYxfgjuXt1pU6wvyWw5GVVvLj3NP8yPzjBK1Q",
  "key15": "4Ufod69VqiT5ZdGDcCn6vxvUFBVXEiod4hW3nvmvKMJCMoVNu3r2bxn9uioMXtBpP6w4P5zNFjbT4S2gj673Gda9",
  "key16": "28UFLYuTDLeN7Csnr8VdbUE63uG4pkQgbKBBsetB6LYUHiFG825cXHJSJWvtj1FWqsth42kL9PaWe4yBiuTDJ3LX",
  "key17": "4Yuhh6Lqe5mkLsKuMsLpKPVAFaAEoLGntSkTAQyR8TJz95asjRwrhCcLmWB2ScwtuL6ouALMPPH3MVrFJ2QsPmeJ",
  "key18": "2gegm77YkGSei2NAxKuPyiVWuVfUGFeYMN1wcFgfFqPvok4GfMGTXScCMgBwaztdiDLcF8emZLoecPQVan3MqUz4",
  "key19": "3cS2n3zFo5MGKkWrYXkM9sPJmdFosZ1Hqei62QbrXQA7fbjoVYVbntqwp24bugSxfFPMpNVba8hmypjVNdEcJdRF",
  "key20": "4fNSydjiG7zkbc84VZXUwh9JsLitQkRsWTSRJQqjr3FZFoU5BGAX4A9mfySNi2C2Zfw5b8nFDdUg66ThQfupCc9i",
  "key21": "2AZNzB2yfbi5xPg71S5p8Jq7hj1QwkAA4rNuwqKVsWmpPyNXxT1ZxrXtcfekQGGEgfaMk3Fh6TuT7GjU5tTSeu1a",
  "key22": "3UJQcYq1MzCh5ZLA1k17JGEnhJnX9BfPJpmqD9wEroEUffiHULwo2xynopZvQo74afLWoJfWmSohnb76iLiP7yaw",
  "key23": "4Gs2aHMEtKG4tDe5W9KJGofwahbVjq7wRiCYoTcMzwsR2EoWntmrmwCcKW8h5JAmrwLsjfXiuS5nzGRdNPRMib2y",
  "key24": "3s4b7mKmH7RWXmPzuWJf65jKLTxTTAJMsMwpXcBVTcTd3YDVGKZs6s2NoJEXGFWanqPnXifvxWMszCD1hgptDMNz",
  "key25": "4NDeEHsP9GWZDrKuZpuwtZHswHXMCTqJhsHeRAq1Bbz3VMFFt4CafKbzu788J2rQ2H1xpKXR8DTUz3mwjhWgjN3M",
  "key26": "xseqp3hqHBdmGX3XngU5r57NeNkwjasmrweDsAUGw2oEdFPKVHvXpRySnyA5FpJpaJB8gfhyWD7aisJLbM93QKK",
  "key27": "28rfiwTKUt5PYqDE9NLw5SPD1Eg9vMpCKrHLcv3RGrGytZjHXo9qFcRwGbuN6QZMpRsLmomchmauRYDqHUHTFuED"
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
