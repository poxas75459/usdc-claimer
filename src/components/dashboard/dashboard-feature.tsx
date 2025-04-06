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
    "5Ks1EjSYrXvFG4cxEFW9s4MMTPQJm8U6a26kc8kfrEtQEHT4LKidKNLjnjRHaDLrCX4esmfEk6rySHwZC34DeveY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6a7CXbC8vUHwHyyhNDKiUbhtjHVGL2WJF3hz4cnUdF9Uj42hQkosbuzWTzT8KYsZf7puRVVxPk7G5dTdwLFVs2f",
  "key1": "5whUTas9GoeCZPJKeVxEERPAybQDcnnFb2SLDa8mXEuhww6RjsF8DYXLZQP4Eem45PJxryAkvJNSga4EAkiov6Dn",
  "key2": "4CGMJ8HEeawNtdygczHWhanBtuSanGcR62Z6er9ayCrXF3F1ZmydaXLhiL8F6pe6Hok6YAmfFoAYv8nvxma3eP4w",
  "key3": "4TRBcBqKPmuR5JxcEPpZ6ScZK3qvmXsJQrT34Hn8ZN3WkFDsiT5V7dsaKgr6od5ENwE6nqrC61Ecw18ey9GQqoA7",
  "key4": "i1zuUrAYrLKBHtGZnHK9v71gJnwpxNvrfxJGGSyTgQVuuWKoNy3DuxpYSzoLpXicSQx4sgUjmENXd3AmsxQHqSd",
  "key5": "5HCLjwUDSh9CKTDQsBWQVbMwp5mbv4WBMyy4HB2FoLjVrWzgYUpsK22THVfrnxkPXnuSW8voK6Sm9ucrS6UXkvC4",
  "key6": "2kFSahHzdLeRPcv4D5tooejXTSVwbLVZ3Nw6qJ8ik4k9BcdKQHm6fWHpz1tQDcssd47sCgeSnYbp2KWZnCwn9opg",
  "key7": "YA6S1nDH38EzV3CGxTag2cow8yVHoaFKSrTpcwrEetAd4zU3XQEQje4dQqZYuo36D1Nqu5DfEpZgkDCzCCnbAug",
  "key8": "5s7WZyTF9dbGU7C2JdNKzuMHdCRLfWtTeAJmP2awkpkZ3aa8gBypW3RjjEjNCq9K4zDL8fxEGMHuvfedwL9h5mBG",
  "key9": "26A7tsKSmG1NDbWyBDZKhXAwdSjyDLMgadw1QmaLi1tqtmseX3BD35r3QAKFciTQexikR53kJqQawhjmXPEsDByR",
  "key10": "gWtKRRAvbrDQZnpAiz5B1gVwcKNSbAwt7KTJGLuwWj5Kd3aeYsWdwQeAZ5gZLbwvwECcN2sS3YppPzyuTwK1W1G",
  "key11": "4b8Z78P8GGC8rjQ2vNQZnoGrx2oBK9K37kVs4EmGMh2fDzDF7nkAS4S1gkZFagrvQm7CbkVD2xAZUj1Qzw4hzG1K",
  "key12": "219sQTaVz4BdV44xgktd1WGNFUzvsAH1MiB22TPCSaLanUPEpJ5A8uJ9GNyKxfyGtzNkMDUp4m31UWoeR8yrJANS",
  "key13": "3fjCCweFWJscuqgbGX5etnjtAYPgm6DBpZxNb6MDztQCuMRspZDMWFnxiKA8LuRFaJpDvWAtx8Y7NnGsb7GP5UzC",
  "key14": "5fopNupZAyP92yeYJFveWoujftgJPdLHERcX5Dw1hVuVE1P9du6aeMFxAeBoE6SaY5atcbA2FtFthAC5DgkaVj8v",
  "key15": "5SvbTjH3WzVKEEn5d345RXKW8SRAAoPX1JNxGGmFiVEUadxZ3yTcnZLknNnvG3RgeBYKYdTQ4Q7fGyVdfWN8iVH4",
  "key16": "2hzKdCQuK95s1gAUEdArd5qHh3FNke7ogfF15LDmMbCYmLavWxUHnnxCJK6e7waYtFdJdvLyGfgmSNMH5fp4cBJE",
  "key17": "8QhLXJwoWJw6HYmjpfUZsrtyhYubrSQhoaxdhsNWDCNkNDfrSt5QUtimedMw2AXvEhmWeVQH6tZU9QL7LxpgAJ2",
  "key18": "3B2Znzh1vrKed3FrWw5VVv82MME8hxBHa17PSAtxMJHui2wv2Di4xz3xHaq3kLrFa5rzpqMJPzbqqwt1JCuL92AC",
  "key19": "37RZ3djsNsFQpw71pBNZCP9gtZP4nBdBD28D8rJSpaeX2ZWQbvdKd7nMsE1oc6JWWYwxuxcKvRLcV9NesdA2Qw6i",
  "key20": "3fqWjnoNPiWmERLQ5oudrVjGim2XMfibWRGUTQZK9TLLwhvVRGLZaWDe23NFBSf6WPJK2kf11N3wqitPneJ6Q1Ez",
  "key21": "65Mqn81mx5euZhG2jyCqkZ8QVeY7xAVVDaMnAS75QrXWyGeXFY9vw1pqjAhgmjBoYj3nUT46NH6XM1n7YWv8weS6",
  "key22": "iD5D1oczSL8gwfy3CSVcbrENPaVLASv2Buegr6xFG6QCW8T1VatjfNyfnvdHWKpQeJKiNtBST68RdKfxTJcDSYY",
  "key23": "59yWYo7WaL6r4gWFzkR9jGf7siqdEhrtoj1kZyPfVTojXEerThjG5H8anN7S1sJ8soZ6AyQgLhmxQfVK8gWY9sGP",
  "key24": "4Gt3H64dQutq4PHmhX4mmejszmHXi53DricbJympAGdPyGb3mHu4LpkU2cSUVZPN1n7e6TG2QdP4MvxJ7iKMJTzo",
  "key25": "REQ8nqrZJsWCc6YoqAWMEGEa6R3QqDLxRpfNCwdFCVdzn48ACCN4SyWLmjRrbpia947dyzy1SNAMgMBuhgdPm3Y",
  "key26": "kLgCw5Bsa1dnYsnqiKprRnTyLrTwdXQyX6r9YBjh8LgDPwuYnfivn7gpujFZWjS3WLBNbRkyH9QG9WJPd86wdP4",
  "key27": "2qEQ2D93HSCRpGAxqRq6wTzK7UhmTB7SfTzV41VEEHQn2cLbJmXdXQQ7wM4HSPFxUnsbRP7gYqJ1SuQJDBQ1eSp1",
  "key28": "27R1eZZpeWFNWp24zV18xi8sPdNshmATEezuDn848ZxVXEWr6Rwtv1WHqzLK6ytdLMwj8cVhmmgDcJDBBs5VdijM",
  "key29": "2mDtthc8t4Ls5XTNYp3EMu3bnBDPyKmscJLyRv4ZmVLvVjkVAUabCakUupLyG42Jup1mj5gmkQAQi3HLmqEgJrAm",
  "key30": "5VY42VJ8cUnGzV4jqGUQ3xvX4cCDvt1HmHc3wpPzP98DPdYTaBXRGwE5sdd3XeCU2NfvRjvPE6ARSV4svabB3p5d",
  "key31": "63vGJ6qFm9EfcpvJVi3U23biEwCbtJd6Vxz9ktT81RutR2Y9Hc8WrNhhh3ufbFs63J2jHJjB2fjPWKb4Kf94WvEi"
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
