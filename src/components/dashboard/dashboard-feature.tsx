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
    "2QN9LGFABQwQjTxc9R9rDqeTNvmLUgzy9ND87oVosxbe3RRWXnCaXXNF8ZevMMsTZLXeKxpEa9kGXEAHZdFD63rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvUXxn6NGMtxuLYvVYbtECfV1VtuSbKomzNnb1HRqwJHP7KNwLVeKkNg2RvC7s9d8Cf5X5GktzbboS73SRViLPL",
  "key1": "VvxDtZkic7G8pQseVFyMHcGPadxWAkaygwvtznHPnMSU2TQ9QsAbND9RqoNc2BYFnJaJS4nizqbee4fKn2VuRsk",
  "key2": "zY5WojrwCD3P2nVeBqyPtdyM7Fad59GfQ7LyEzdTcBD3wCbLPSjxpktgnBmeTLJFjfACRzGiRmzDkceEvgd1QRt",
  "key3": "3WB6coCuitszkNZ3N1APTSHKRbmn2Gzyg7tgvfkeCVgi927sjo5mTKSCC3CjKH2QUap8sA5NDU4t2YMPfvYDkuCE",
  "key4": "4TKLU5w4Co77SHTCJuq76fEHLJEumqx8YcPMVvganRcS1UkonqZeu5nCBsGEqDkmoKRnZfNT5eVurgSjUfrC9Ax6",
  "key5": "3cBmWSkQWNWZ6baPDBnJ3EzfqSEQ8C8eZ57vazu64reTBqgDqZXtwdWjedmaP1dU7EroPd1kVeFXh3vFN6F2BtGV",
  "key6": "3dEWtqFiM1KbpF3Gm2EsVwr1E59vjMyLjZ3TPpjye786oBBPWPuYyEzduWJALNVRvvGZtf1pStoL6QBUJrZZvR9m",
  "key7": "Vr3RiKv6ti2WcL73rq96x8222iYEXM8vdzJZoWTsaCwnFbUTPcewZdf6SQ7J4i3UL2M66Nga4jucJPZnL575CJM",
  "key8": "229iPXwf4rApUNBbdFPejCv2rBp4CMzrZJ7PiX6epNwSGm1SpMMaiBTiadbo12dRjkvTdLDRrHxqSvUkKrQ7SaCu",
  "key9": "2SeSBAf3hDozLcfTYapAg9xfXnwrsHLwf3bXjWy9v9Qgd3cDjphdHrhvD5TLg7b2Vrsojujeb1hm6NUmwagPftAT",
  "key10": "4ZBsKKwWPnrt5dGiQ6fgro8p5SG7rW5X8pnJLyasGXcaZjkAA74EthVcYpWBAkKJ8X2QPfAzybdQHUehDusyk2kZ",
  "key11": "3VAvC1NjqHuuFNf4kf1UQ1o339U1BNch2VQa5nVKooEwQfCpiQAc9fnwmueCRgdgsickwMP4xCoRh7VXGsNo9uq8",
  "key12": "4xGV8MJxd1L5nG71Yj4LYPn9sWzuNFzMy8dpC52netmKwV7oLtmFYD9Q3Bb1SYtNfm3kMusPMgTHwpEoephCLdzY",
  "key13": "3Vm2jMj57onjw8tRJjcWw5VsUgRJMkLfErMMvoUTQYe9iZ7ggT4SbxQmGuaWW4yWoptiYh7ASPJetD6HyKRvDM9W",
  "key14": "CK8Wq18AbmrmvibsVMa3wWjuBepVcDonsRz6XEqB6UfLXrwZVpZEPcfUqcUHdFr9Ycv7hT6XmSECVFWHhsNX1UF",
  "key15": "j3CjpkiWQKE95LJrJ1nMDRtAzUKFeMu1LCkhN3tF8tfTb6MKM1q1j1ikt2kwdHEsxXYm4DyQM2Zoo4NytsXr8as",
  "key16": "4VVA7y1dqdipha3Md5EXFb5m7JQEiS4bkaBRC22k3yi6Me5xGhTzYGckfrpxBdv9fcWoWhiSxZfga5qegfGLpC3R",
  "key17": "2mhQGc7HFExqnTwfKW3GPJ8AnVYUYJ7SUyJ7QoHhGr9CXEuriKbpR9j1aLya4zjSkSs1Q7tJ2pm9pThstbcra5AJ",
  "key18": "5yj7vEHG6AKPzhYbiT2Djce5wjU3Mdtfwvdoe2JE8hVBFtyp7CHecgH3q93wTef4eJj2MePyt5z8Q1bBK1cLMsak",
  "key19": "5NSHuMroL5tGrFCfiWefSVqp9WMfQdwcdy8abV3QE9tUyJxoRrFN4Am41LweqkjPBVnqschpfxZ767hvuqZjbYSH",
  "key20": "59qoUq4yQtxdwzXTN7fjho6yRt9eao7XjXn8G7SDKN7udyjnUzbMYWUMzfLpndZZ3G7dHvyGwDuY5vwZ6jmzkfrw",
  "key21": "4DQNsvfxjQMn8uA6rUqgUnPqBDjHcE7cUSNgxiM6QKL7V4vHCQjSX8ZT3tihfaFzEN3DXrGc2s857FuCRg3TViUN",
  "key22": "2BMw4aeYaQZgio8Mtbf3HvwqjgLf99tPjJgAYh6fk3RFsQmLbAUPfg4jgW9KZgEYaykrofXi6YjC54w9TxniUJ7f",
  "key23": "667xKfx3beUXbA7VQuu5CrUVpzhH6CQsqCcHNcJuzgVXu4TmAGXeTshHQcki7N4v33kxjkp8kRFcsvWm95NmYnhZ",
  "key24": "f4S8p48w3UKNcdhcbUuDkFFcURooqBvawj71ShHgoYiyJ1EjZKEVLSZdR5bzt6gw1DNLk7UaQBKhS1jVCzGXQ8N",
  "key25": "5JRWaFUpNN4GsiPSYsNuhnCwv7t35ZGgCvzbppQhryEiLCN3tLUx8qdd6WMpJ5fziCZWxsjFRmbA9etc6H7wp9hr",
  "key26": "32vt1fgbFJfxmRKRBpMKeKzN3d5k7adgbT2bD82tWbEBTieRiutRoBSijRfA6RfMmXy6GWVRwX963T6xueaJgsAn",
  "key27": "2n5LejpC8Qj12i9DWrnLyaBNk31RmYcNTem3dm5TXbw77UsbNkoV7uuwfD4ho7ZLHBbAX1ffUcq5JT2Tb1SXAJmd",
  "key28": "2jCp7pFuzEXrazRtuRMxi6HD9BNQuLBQmT68krQp5PbUT3r3skmao2z7P6QV5rVJDNTghk7bqLA3xUQa1tw4Q39B",
  "key29": "4N6afXFLae6W7DjbcnyfUC1ANTbDxtKVFGTjfyivnpXxRbj2GqvZYhypTKgEJZkMnzyhB3GHTJHAFeMXdEgXCw2K",
  "key30": "4SAncKg7UkQq6R5FYfJzJ687H7nm8C1R96G3eeeT9SXypVEFLci5Vnugk1LKwMV9YqYPkqZqH3CNbXHEQ8fnpm5r",
  "key31": "5XSMQaysDs1fT4igsX1JnD5U6SR6hEobcxR94HnbhvTu5gA9RxcYTVUxMyAFPggC3zLdB8BYgXDafnveBBQFBB3R"
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
