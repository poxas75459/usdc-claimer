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
    "4KZpVF92BiY8xDn185LhcnvVTFXxZs5rTSuMECNNywzfWXKuBSVygJ7zF7oGyDmPvmBEcAqjpJVjs3rsQ58ra1oP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mf25bXuNKmkpBtB7fXBbc3ZWFNvHH32aLN6Evv7dCsYnXuJghWtBbPDjMvRdo4gfEUFVTvzcRpUCS9kFDQTEdo4",
  "key1": "2CiVCrf48XMpehbRhj58YZpd8EwAGMmyuVAwaqB9pEd7hmN7p3xAmZBa9nPE35wH8f24B9faXTJ8wdC1vEghUaZ1",
  "key2": "5C2MqmjFsvaSD6BAyetqX5QkhMGU27BM5Fhod11Xu9ULLvQim9VA9cLvQScBHFCWAtLkRS2No9PzRshtHguWDfjW",
  "key3": "4qYEKBnCvX58Zq8qreYAfddYUs7tp7gD7QfssCod3PKkTbUy2cJGyn7WERFoVc4enu4xLw65CERK4FvcsBdSU9aW",
  "key4": "uiruK9EJTnvE7NLFsK5nKZiaA9m2UyotKdA35nDC4ggb4fam7tP3mcRMuP4vmcUhELD2nkan3g8XXaCtuCrdaaq",
  "key5": "2VVNqr7D5WncYphqRfK2a2PLpcAt3gwGvFbZKyx2vuWTEUyUBnrGYnWeHDc6MiUxZL4PYtAV5oAS8P2xG9Y7FVWz",
  "key6": "5zF3CRqZUuf1N7VucFiMQMQo493DKQxpKVR4ufw2KMHAMMn9S42GzSBPdn8jSQpKobSFEsaNL3XzpYtQSDqyvrbo",
  "key7": "2oecLTYRNoxHMUWDsqQ6anqtAeD72kCWGaeiHhgQf1ZbFfkg2mpN82FshQRaNeXiLuCQq1eqcdUZSepmFLndkkJt",
  "key8": "51jotbNF5nRzZM4zebYMvsJut2hCBmQnTSmeZRmuVB66EB32bhcKZiVeh2jVKsTTF49mC4nDnb4jQNTbiJAdkiHH",
  "key9": "4eyD4dza76c21F9vLtXdtGL5fxvuXy3svj8fBNNcQjtVxDG2JsTaW5Qp3maR1pb7YLMMar4rCJjvsQDrdvUSsgkC",
  "key10": "4cCJUfwcng17BtMamJv6uckTwTTnzakb3P4fCyDRbeV5ssV5gj28d2c6zkKxpgFeTv7HUL7CreQy69YpHFGLgBK6",
  "key11": "5Cc4pvfxZjnBZo3yVFbm5cjocze2xx8XRq39WQHN9Nfz1xgYL39UCs7Xp54yRoVBJH9z7E98uYBjtMft7uMT3GkW",
  "key12": "2MaPtvi2xmgvc6bKKduRwVbAxJNYzZ4iEqmb6MsQF8dT4Y27AfcGQ3Z5wz4HpsLqmvQP9SXoTJF3MdnpSmyqcsMs",
  "key13": "3C64NcNGRt7d7qhfCzA3bJYFFhFQT1xv4CLzFpQhhpRK1AgWeaUPDyFgo9xBaFVDzH4yTupoPUDUb2hrH5peQj5X",
  "key14": "28UUUeFGWhh6uwWwe2tkKwg2QUPT4Lh5S8ucKvCM6nUd9MisCHa1E6JAr3y5A6rQCoatN9HKntegYDe8A96S2nX1",
  "key15": "3WKtJo8hG6HwfzJeiGfTtK9PThZ3ZFwYbme3ygeGyXxv9PQsjvB9C8kcWLjENrCCFDzeWW4WrwqMobqfP89kCpbN",
  "key16": "5n1sw1R8f2wrksQKERjkJZpcCGw4LhTnymy6bcRWj6sxcozDssNiUb6khvcBv7tmBwMyY2MoHLXnTsH1hkeyXuB5",
  "key17": "3zSKndopKm1cCV2CYa5rTqneJg83SYdaDprEvAcu2Rd6pFjERA6cPTkWoNNuZFseApXAr3k5L7UQaqmECjS6RbTT",
  "key18": "3CyQQbZhmvFVvKVPF7quFpaCBnojM7JbywFuW1DJmGZasEGJUBuHoVYxSbZ8hRc5wUYwMtYU6LrvUuFXCjzq77K7",
  "key19": "5PMUDvnPs9DYzShkwH29LsaJzLqYDaJsJeKj5DwiR2m68zJUUpEfzjijMckYzxx9iAPbhJC5oTMW1qXFCzaorA5f",
  "key20": "5efrTrNPhJpnrjGCZBG4Jz8tPtwkdxrZVin9rQrd7gURxdkDiXcrRWWSx55XfKD7fAHiiMMWBAw6Dwmoo58oeRuF",
  "key21": "4H9qpEjEJKipwQ1RetahjtJvHavcGQia1ZLP9s5Hf8dzSPUNiezV28mkPsDmCXzVKBQnT8mCLNF9GhCdHPjNLYnx",
  "key22": "Y6pKqSRgqzXL931NYGvMuGG7rpj8yQFkSTe8b8LHUb5ERwbnvrEHcWxr6EnpC3LAqmNvmEvm7FD5V5LQsiTPtaM",
  "key23": "5U3nvNbTPV7Kbbi5gYdQ9M3aaC5cqUKCxAn6Rd6HP4X3vcdKMaswybYLZxugh1g7Xvs38p5Tzktv1pfGr8191AZR",
  "key24": "47hxYHArTYVb4Bmkr6dRJCDtFax2gLip8gWJSdGTx6C3ZpFtrNk6VF58jLypCyZZs755X1ARNhWn9jeoESi7HxZi",
  "key25": "3gBzHwrfjwcciHWtVnbTeu2WiBdp4YEtPNgo9MhwbpUBAuXGcw65QXJAg6yHgpHzzNqmRJaaPFBoKbb9frekA8oz",
  "key26": "M6e5mwbQBZ1sMqHRpTitqxjHWJuUmBfB6DEqua8E4GUVNUQ7BTiJ7WcJqFsxHBKx2bw9Bo6jVpg2gswVtcwd6AN"
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
