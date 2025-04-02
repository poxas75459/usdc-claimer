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
    "4fEdtcuHPELA5h3WSkG9pG3MZZ7XPPE3rL5KDDvDeQjFZcnVQ4E8rFyR3o3VTbjtNqfEQwo3x3cKWHrPLW6cn4pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rz19cLii2zPzmdh29NHe4ogPrmuiSPTPAkGG7HZu8d6suzyqCHMMQ4VxoefgN55uRveojqnxPdy9DpBu3DWWQej",
  "key1": "3ntggxQNYunoSEMzTbGEfv8oCQNhCx9tBCh6xU7eJ14FsYfNtaw6XdRFAg8EguWgZwgi1W8tyJjFQQGZ3BqDouor",
  "key2": "44WXHpGLwSu32eTKrb64xJDkNSXtQ1nbJ6VCmKAXeyJKgjrbZAxCyQhbgEZrW8cFCrHUgAXfJhpR4vALdt4NiFCe",
  "key3": "5Z3MJs4DbrXMbzu23hrMkSfJ2kDjqHG2UxDfTqiTFMB3Kv3narrNXyJNKbxguS968DCmv3FGK9RTTLon65YtSaFj",
  "key4": "4Gg5YyJFMuMUmf8gqBjxYSXewBhfx18hY4VD39RdKbsnaEMVXQ7CutZceTnmyu4jfBmW2Unw3ya3icBqAGJZidyY",
  "key5": "2sPBSpY1y2vHdw65VoQzYi8wXewZuN49kyZZSCLDgEahSmRxZ3HAGmhqzzJ5B8bQkCfQaaqriVx8Jb8wkbwarDTQ",
  "key6": "5M66nj46sV6seQ96ZTfapkU5BNEf2beYZEqRx4ngSfw75aAdq9GFFwy3jrMsTFBvFnumwuLAJ1kmbaPiGJSGvJTx",
  "key7": "gWiiXtfmFeHUWHo1jaVKPB3e85B378pY6ddV84N1DjQEquon9JMjxuwK8uDMKufS3qvtwVS9bjiuje4SgsZbk64",
  "key8": "2ch1rXdBeqgD21asC4Hit1bXX2kbSccAwZV1B5qCZJxF1gyKubtq6M4Vo5P9ZT5snbthbUToHixDSiCS7pXD3TTz",
  "key9": "2cgtByJBXmc3B9d9amhrTCZN7J7LvxUWtgxu73rtbzUNtj1Yienipd4j8w4pvXVSjXNvqHkMShQhfk1xcazvj9PS",
  "key10": "41CXYaA1o6V4sgJyQYidZqbyUkvJAiMSJF39dvhueGpJTnSe5Mf1zKfSRdXRZEmAzttbb83pFRJBRRw5V5gqvimU",
  "key11": "2xYfXzKizadK42K5FqHkbDyAqtMSzLE6CVTZDxfiKmEWptvKR7U2fkxp1mFDr4UDWggHTvTmF6a8i6Lep8LWrjye",
  "key12": "BCmqNCem8Fauh9SzgaciznxLGF9Xx6uCGfeNWyC6sZ9VsLdSAWiPrTdGELr87aPfpLAkBQeEgdujsLqvVQrrv67",
  "key13": "4UXMnzFSdwana4Z9hRNt7BweVbdCKpfrKR6pNQubq6rWXjVQE1dAG2KLXwLGTm2fQsZyiyBdbkafD8bmoamPKb49",
  "key14": "2KkqVJxDehuLDkTDwWeL7AmF4PXwCW4f6mnXY1nunD8EbptMzX7ApqwZgJWQiB3RprETdgm6i7J6Lg6FX7o581hN",
  "key15": "32zeY6JoLj92Tr7URCV4sPdHKZbSZsgjB7LTeWKix1yCLfWrAWgoU1NbY6EGK9YakNUXsFaRvfxJsp61jUwyhhcL",
  "key16": "56huyWqPE9AuFS9kjigg6xcwrpmuihCCLAL8nhkxa53uP3gM4QoV6Wnid7a67VPM99xFUrRtHSfG8GEEsURZiH4c",
  "key17": "3t6wR6XozcNvqaqyZS7Q2GwSfbVDbQYG1GAvGoU39hSjPzpRzDfKQ65YrG27336sYsNrQNzq3dPnE3zoD5JA1K52",
  "key18": "TYd2ntpuJhGLYiVQ2pBbWCj61hRXQKn2RRbD5GPW8vwpXZDQQ31hNMPAh16QPR1LjvYyx1emYRvtuYeWeS2jS7b",
  "key19": "4EKBWj4zhpVUdN5hfD4GCwSq5X8zTLNFaqyVTBnGd6V5oeZjGLqbwGnQH6Wr9mPbfRCNnkmiPXTYWsXyPJWDoY74",
  "key20": "3xucZvtCZqrRoripp3gad46ZuT7yRz3BiZqbMdQ8sBAcHGFMbzfeFtSovexMvdTRc4vz9MicLRdCxxdetVT3rok2",
  "key21": "5rDbLp6ceRVuNM3oDqQdZutGLEL97fvier5cUyc9RySVGvadV8zWgDZxGGGyWveR55BcWcmTJA53C5ZbyMfm7Qdx",
  "key22": "4EEo4mfRzshK5ntNRDvEYBBQW3y4oFnxMAq9crnuoXtM7jw8myQLxvXxT6r6BM51mAsqjJoqvk4k9NpVPVYjDqKS",
  "key23": "3DrnohdyYVt84TJSAzLoYNFjp3o36MdHymswaKU8cGfwfe3cfQou2xpgj7phepu3JDMEZhRru35ogqjNJssC64LJ",
  "key24": "5LX3ksYMyP7hfeciC6srzAstKn1fnAQZmPXWPHVarevwxKM6DoArTzLdB64o6DJ7ju6FZYBWVAgWmhWqRf99xeVY",
  "key25": "4ZrfoBfkTCKXqbN187gQs8FC68Cs9PF5kdkwfkxj8gPbbeYkjutSiFjLzWQKDwvvtfXC8b8b4puhjnavWacjrJN1",
  "key26": "4SbmaDViLPGNYbd9L6cYKE3FPxZyjDNvJvVGBVrfkuq8vdZjGtzpkTQyBXkP8NWcw4NBNgACvrDF1XaXuNdzG5jX",
  "key27": "48AzoSy3eik3a3AKs3Asz9mTLAA6HMmKuqLsphnGUqd5oBZ4UgvxdnEmsBUuhdGKefjmBTMa4jBq9YdLGbJCdG73",
  "key28": "LnqiuPtuXZhXjsnLRDzmAV3chNygKagxvqdTxdVv2XaM3FcL3yRn7BnTQQ3NC4SR4nxaQjbyTeAVPfQ5FkvrkpJ",
  "key29": "3e9QVHr5EGUx397CKhJCfubHuHyLmLaVYyR8LErfX5bJkLW4idsnRYCKeP1RMkMspWF8spHwJEvEmhiL5wFwG1jG",
  "key30": "5UuthTghx6h7Px8URxpsDxRD3ULf2QwATNyxZ21TAc6GwzKy5UM9A8UjyzfpXhEbFPY9peGXvandxtwF1aQp9f5u"
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
