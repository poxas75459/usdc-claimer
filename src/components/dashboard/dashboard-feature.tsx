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
    "uqwkZqFczkeBX1YD7kSZE9oWMyH4SNeHKk5vXoHncuHE2tAUdFww7rAJorgeRdX4vL3eheQjFBfwLGTYH2GYJ7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XB8Q3k4x5eCQGB9TiE5AwBNbFA3kESRLMDHjgFvnVbU2WMAx1XkTzmq7h1ZoyUA19jvzKGTJPtYZHWQmx5nPegt",
  "key1": "5CQq6hpkN6GeE3C6VZ5QW3Kb4zPMrHJzynBC7SJxsrXKJmez5eFmxTcAQtEQCBuzCup5Y7udAMGrtbusyMGUYxHc",
  "key2": "5LLChFFUfQ5KiHEAuKjkRhcoR7ZAU7foaw3fCdWZyuBHxo8ZoNxCgRMtMhNAbBVjUpW8vcToH6izne5Z3zCPztmX",
  "key3": "7hbWvMdj3iSAFhSWDUBeAwStkt8SNA9XdEN7xoz5CMW6tQdeobN3z7FDYnpEUoZw7koRtgPoALmGsmoJDCFA52d",
  "key4": "3mCNtZhvo9DQVymb62faeNwQnUPcGw1nj76qJ49gr6ikc4FeT92xFc5jDojAbtgDEbGkXXHqrLVf1myCdi4ZRMn4",
  "key5": "3nyjieYQRtGCdcEZZS2bynDPYbkcvrDhQVVLFGcXY4gry5iKqdLxRtLDorRdfVrVrtuLE93J9kKpn6Wm37bjfs53",
  "key6": "2EfiR6g3nozbEfPYw2hWqUCNdcxd8wBb1otXNAZUTJ9Gx1inrE6wa9MLg39icbGg9Q2JEsBkujnZ2Uksjewu4fww",
  "key7": "G9eotXWxAK3uDt5Qkj1ZwtLqrY294VSKAL4zbzXgTwfgNs2wftY6Rxy6Tv6aPYgMUtaE6kpRYrSkbQZANTJv4jw",
  "key8": "4nSQ5Ai7yhNB5Xc9TCnyfjpWeP7PiZxKiJhEsMRbk4rVenmbLzag2kohjafrxpbri2hTv17yyfr6MYaGmRJdS9VA",
  "key9": "9VCtRJ8J6pNQ631qBNjZjELWbt4JJhTmM6iFddRbB2M7eR236gagmQrnm2rtHae58qYaLPwdeK9CFzTkGk9Z678",
  "key10": "3mENcMkVq22FyRaRmhkNVSX7zdt5N4hAmGyfWyyoCkYDMCTwycn1eLqzwiaRFENTRckqFoQyS3LdMZ1JyZBFoDCx",
  "key11": "UHhD8qF9i996haJnfpTi9VjyJsiTi2dQBZo5yQYbnUywbhKi77LyMXXPUXSmv4YoVarx9QxGqzp22Ehd25wbH5o",
  "key12": "59ZSrye71WvBPitQ9oSJEfHXStJWgAviVU2hTQLUcZHj8mTi4DtPsej5g5yFxce6wG9mhuSNjpNscvLvhRFBYEd6",
  "key13": "2B74iLUcUujsYpY3wKqn7xSGvLtvRBi4PCv1HYNsTR3sdAHzU3Gi9gpAYVBkBA5MU5z6ArcJ5cBErXfv7TcPUxPK",
  "key14": "5H5SPXEaczsXMKYUqcjAHZXZeaG3XVMhCEK7NsC572SsTXsrzJvryxkvRGG4vhgMURXkwdQEXNTvWkU6xZnH5Rkb",
  "key15": "3X4kK299BERDDc54J4sTpmT5yDoKtbeAT8egDeWhTgvkCzcUhzLruVAqReVnHHahoCQD2JRAW2BoarMiUdEUZgeE",
  "key16": "5thA51a27svTHVErjmqo5jp5bBDv629UEjG3dG9tzWuJtMTWVVAx2CNLXGjycXSvVZnwvnkwoR5hL2SGCZTxiJhk",
  "key17": "2YiAx5Z6jCYgPC26Y2rnjLWotfo2yrfsU5zBd9KheWH71YAdx2UdZDMMvQFXoCuQBmtQVMEHPvFrS9EnH9DT33Ck",
  "key18": "4Zht84WawhhL6zJgbuq46AMwGKLGHQnkPdQ69G8gVWt44SigqtmP2YzEymvYo7NEiY1b9rTCNVZTdAWHJhnnuUs8",
  "key19": "2ZMgR8qqW5CeoUqyCAvNLiAM7CznFDpWsZYesNV6HvAbect3zZ9hp4XEkQeZHYBjnsRxuwAo2TYmqJrRv853AZdP",
  "key20": "Z7CFyRUgdMBjqsuAkrVqawEUs8zGmykXi93mpwckmn2QDZBXSr98i6YCpwbxwohjBrrMVkhtJ7u73Vkfbn4kDbg",
  "key21": "xJcs5DKQZW8vyRMcMirsaKkBQK1A4f3KTwLVF7e5pZG2iQXPeNNHufd4VRHrMysazw88Uvh6ybubTqZ31cCTii1",
  "key22": "2fDxm5uX2EvvTD43oa3qZ3ryeRCR3UUibYpSeembHZe9Fo1ej854ZYnyMr4kBQqEa2V19ZPbbySBfHFzyUs4urxJ",
  "key23": "zXS2GaUuLxv4WTHYoP165H1eAfmHxjQtRpaQN5nARRyfjmGMnkw3LWNYNui5iLDC3HQgrz45Xx9QaR3r89WUVmS",
  "key24": "AUz9eK1E5dGRsKXYepPpk23jxt6mK4kkfkb2r86VYR3RZ7rwG65AStyAmgRw1SDhsxut7dDggx76mxcb5TDjFvM"
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
