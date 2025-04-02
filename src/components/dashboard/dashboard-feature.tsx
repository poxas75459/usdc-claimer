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
    "4bbPNCmdhGZCahdD2whsm7SJtEz2S8hWX5RFQJXrxw1gShMLYkGQACAunYB8Ko27zJmWjyAYH7J7UMkAy4XBWhwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "af3xFenTXocDaj243gpjbDL3UcE2WFoVnbX4hET1C3Yunkt1SioF8MTsUq6WiVGpjpNARRMwRUAowTTXLqDENsY",
  "key1": "3fn9mMCfRgQaU8qMWq2XdXBES53azM9scWT1afmiadA9W5d7u3R7NN7SqCU6z6mT4qp5ch2bFWyVbBVkucpyJv75",
  "key2": "4kCEjtcykeBEjVKUVFLS42aSBmb31TUuG2xqkAmJPnJ7jQFSu6TbJmxx5gRyhkvhrFQEKLYtuXQx99fdHii7RhdD",
  "key3": "4PnkZMvzMtpDxs2DkWPXcpKn1ZhYmyHmBxCbxmfvm1PzCWP2KbeTGCYubcgZrk9XzUmB6XJDBbgGiD53iFaNmJcH",
  "key4": "21R7zTeQZZyjJZntd5sJugb5aTXwUAVkhqm29gwRnLkMyYzdbUkGdQdETZBurfHgPtSThMW91FZsRwqbKZ1NShhc",
  "key5": "pYwyK916Dw9eZ9sQwqqJWG15pgi9DNSN6HU9LPFVthE3MsG8WN6o6cji9Ym3JBtPbenwbeLU4Pcwi8ZVNxkz8wJ",
  "key6": "45W6yfQJ69GksNT6HCvy8gMEgfCjSyVeRBtsBhmtm2LypVrYrNyv9gL9ivu91PcjSTSVJbGsXAm2Bquz2fTu9u1F",
  "key7": "3DSWoUDu6yUNPejUkH2JBpmUaWHaz6EfspXvkyRGACs9TErKmrttDAFkhnpturdpmEUqzUJfBzhfiVRms71qHpkU",
  "key8": "4BsLEF2ojk7GKLP95gM211GaETuEs3g182uQ1ZCzfnDAz2HAb45QQrR4evz5KG5JxhHhKyg63rSkWJpmEcNyqurL",
  "key9": "4i3YAAF83hkF8qy8bfouCwfHCQV32kSYDiag6zZmRNNP8CU5fAb5Uq6JcViAwDQaxJSLEy79th9AraG8nFUuUdLA",
  "key10": "56xRgLNodoucsqHNzzUcSPg6PV7E8cZHEqPezK6tDA4psL45rjfMvWLw5veDVmfLh3spaFYKVpqCQEafpGcRCNex",
  "key11": "4oqTVV8N8g5NtQLpPRGK8vKc6p7jjTDiCD8WqZrmNt7v7xPV3irx4vQ1uNZ4Vpvi4BnCpyutH8s9RXwq37MpYC7u",
  "key12": "2z45ytp2Kk7FTrkp91ytRHdUqP7iJp2fKeXUQ4G3RCcDLsQpdbGV594iPuPuVyWCPXC2eP4ByqxzGambzcZNbh7n",
  "key13": "4X4bs47P7EpbrAQAGZtpMbhbqENmBHRKYpK8tyMLNYbgm6SbNHKxHEQne8EU3srJcBN2bGcDsGYU1bhrbohydmez",
  "key14": "3BLxx7VZMGkdTNUKB48fbkWShz6zi3ZZxBu4CRbLNqtYAgzZt1WF2ditxjq9jCWsnXwNNpGmL25fy4tXpdSuec9b",
  "key15": "4qryWG6aY4TJQckKJyLsHRruPZiToCDufjZtUafuZaKm7xWyjM3oMZEg9HhMdJ8iw91UqdrUmU3uhz7nVWvS4DCV",
  "key16": "pzYVmdRvxZxFd2YAReYbjurdvGcwGzvtZjHCp9vRBfz1VrAkmbL5wJx3zehM489EpEyKdpKTgUVDPy49g2B7DJM",
  "key17": "4wDWXJvAZyvTLcK7UkiKiC9eTozyvSRS2xdM8K86npAMe3pZHP7CqnLC8xjexHpmugsrFHcPKPpZEXSuoVb5To5Y",
  "key18": "nrEYTGU9KXDKacgTM8NnKjKr1d3gCdv7kXPG4iXrcx27MWhuevGYUjaVgpXfxigite7YkeZYkW72bbpSTxxLEiJ",
  "key19": "5FmxPWhHZToWPQmobSyhiY35Nm73xDQibETnyw7KYWd9WFwcDfxsAiDToAEbKuGTKjCryBiwzXxQzaXYTYNqC17i",
  "key20": "3fzBuacBJRT9fGThAm8TPdK9fmVucZyabfmbyVEiQYTo783ApNC6bg5ZKjgEjoSBbdM8cn51XRtBwegaKABajAeS",
  "key21": "3naiPDviwBkLFBcvCxwupcvK9Hr5BpWHLogGn2NFPW9UJY844XUJ8D5XBhj3tX7DmKz6YYrM9bPeQApf2h2ZB7oS",
  "key22": "65LASqy4AZDSC4gMmqCRXmFhcN97HtQadaj3MHeZgDCptrrZR61JkGG727GYinhqDZsKzwJbVdb6qnyizNXyjzMY",
  "key23": "2M4eVF3oTjT7UhZKWzGB4CscmCLtgiWxWRVnfaA5kCqvpifadeo1JUg9KP3q8HguonjQwt6MbthdG7RW23p14aG2",
  "key24": "2sEHqwFskWRB9tmKdU4EfSo2nxkw17LNT587coMyzKdkcNa2DX1nP6GSF4w9zLpSmX2JDEfX3x6i3TQspavy9tni"
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
