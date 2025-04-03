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
    "16mxAx8DgGjjLKjpQvNXB4syVYZBzt2QSpWroxus9p2b8DRjz1QUHtXyRxsP9YCcpnWPj4srcwA15sex9aERX5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32XXKAQScSotbsCXEaadp2nEojmkZ9qnaQMFUuYUV2uf1f6nyproSwA9E1QG9BEVzgoWvx7EYKLvBiDrD2Eo8h7a",
  "key1": "3EuYQegj2uadt2Vwg6w2kML7CyiX9tB1yPGKAtqqguaeGLH5juSRFpM9F3pgNUAUQtiMCPwMhySoYh5Pr1uNkGJ5",
  "key2": "3wsv2Yo6mEmUUdPb2JZPH8ohwjoWvwYKvtSgw3Dn3s7nfS4x4t9T45DJTbG3ycZsXAWBpAGqP3idVCV6Z4ZDKzVb",
  "key3": "3zuUFUxQMSbGvKz5GRV6E8VGz4sardm8FgqEpZvQi1oTCyCRxZHDZ6qHmLBtZavkwW4SXxWd7DrzQF1L8m1NV4qL",
  "key4": "5wLBHkNZ6APfTCJTYAyDnZFnFSk28bGoFWMh2v7kZe4uQCb5E8osRG6mQJgqWihgCiK4NkqJit3m7JhAdoyPa4dM",
  "key5": "4uVok1hELz329kFPy8uoYWpACPGxsrHRuxk8qdveo8dfZcdE9FVAS4DDZ92DFQZt2WC5eS4ESHw7f3ZNyanFVag7",
  "key6": "3jjfA4w6tvCpmmR2WWYifMWoTVppDwcxLSkSfCaibtJdLpzB5aJNtxEc4pDezmF64yTkFuLWjSM5xhYbjQNFGGvw",
  "key7": "b7wBMiG8pkVtQ3wLUdE7i1AzgH7z6fx87ukMadrefoY2YanqzUskyDhsQdBCNNhmrWBpiCeRfJof36WwPEm5Yp7",
  "key8": "4McTbk81s4E3yaqr7XFbZ5YGa81qo1HKxp5QYavsgRXvuYc7pjESFkTVzLmANwgvsKCDy6bPmpw5fALDhjvcMk3B",
  "key9": "33DPBtZsoSgCuMtoDSKX91mEsf4gvwcRcoWEcuoqdTtyUcPmm4deKSKd4Um5pc5LcX15mTwTjLFeMm4dgckX8bVc",
  "key10": "3Am5bGQSjVP3GgCteS1Qk5PDiPLRxaEDzrZveExsBkpiYsQaqhS4FjGtUBXiQLbzjGxwoqaB3UNN2i7q2qiJdJFc",
  "key11": "2A6aJYC5Ayve2scuJd7NDXoijhty7r9PUZxcpDh83a3XEM5T5yJeZSX4mmNaKrZXev9KiVoTzhCvLkjmvDotxJdg",
  "key12": "4Cd6UKhXJrYWZB9qzisQeFm5WbcF4TBKPpBhd9nSLWY1GwSGrcHq6g6zoRXP59rD9oimvpHgWoK11wUEHTEuiseg",
  "key13": "2hLM5ovXwANTVz72Y2yLdWsy14kYwDK68VeEtothQYU2Ab8Qh8GcyEyH8aRpNE5Mc5bBwczR5VACho8AzJysPoBk",
  "key14": "4Dfe6rJgn1REYnsqwJuzJgM3FyKNBRu5Ak1KnwuZQM5JX4cRFsEs5e4w5GqLsuSeJ4VzrdwgLhfSG9ReiBCtotid",
  "key15": "55Qrej3q3mNYx4QyP5PXvQUv2qbXMxgk7nozP6vNtCqRAof5nMXR3v8qy9NRiKRJwF1KPcHUKfxbv5mePuXbDE7J",
  "key16": "2FBZfJ3wyTdKXSCkdoWY3j5fYrkpQWK5wiwcickgSX7zk7XJ9CuEpbeq5SnUBFRSXMr2engvHgNn8CBQBxiyQTj3",
  "key17": "2QLrXdjbt1wSBA75v5RTy1su1Xt3KwCoDq135Z8x3C5JsmfKYTEKU7o4q1j8FimR2oaaSQyLh1guyTk73zbwUNpM",
  "key18": "3Wb8N9aoqqWdAdC2FgbZ98LoUEBQTPK58L8LcR2625bfLGcmfEFomugcSmgNpo9JRzsYuJ7BNSTL96w2EPruJRyt",
  "key19": "Pi9PijRrmenVu7ZHe4SF8KfPAV5Y3BpcMYP5iXWNok2RFosNrki36NY6aqhCSY5nLJ9UQqLt9rcnPuuAa4xbdLa",
  "key20": "3xwqT1VQsfdcRWh89d1HffxummzCXgrCyrB8JQAvxaBpds3ZsBztxfY3ZXWYqDxzEfrDkV7VZwxM43zzz6AzUmeH",
  "key21": "3Rcad5kiuWAx4Pj2T1A8gascZHHRzcQ8WAwZ76nTNZ6a6EbphXSAjfZm373fZ21pt1u2vyMTewMpAKqcUw1zFvMm",
  "key22": "3DKT1sDJQLtMk4WXDAZS5BsQdcLCYNUNM8GZ9WfUdd7VqWBRk7mLWQrdPRWNgWDAZs7URLb6dU9f5MurjawaSoyZ",
  "key23": "3bTU5E3oGVgBNkMasQ4g1EXsE8qftHNgavbz62Bf3aKDhvaDwNjjgenjv6cjDn7So3Q5dS9tLsmHQhBa8nWZJYmV",
  "key24": "3wRfdAfCUjMve41dGjpBqtWLXkN57yGctqbW3PDMscpZUACk6Dz2drCon19Kb7Cep9rspjBoBxVqZ9pBArw4kETJ",
  "key25": "3DXP2cVbb47Upo89wANpwSHPdXFtQByVFK5ZFztyNvYaCfsKsQfXCmnfG5yznXZYuyghTbHLEfDJsKTf4FW51KW9",
  "key26": "31ARxBradtwXjFUqbM7TB9nhCe4r5L3RX9iWo83NyB3xdaNKyRkgw9NJRxJhq8QVo6YRk62aLaUiZ68hdsB1f7HN",
  "key27": "548q31F3tLFN15FgLV8Q8djBD6XDkK6KJznPPb7KyA3LVdFCoWc4ZBt7SaUPT2n2712n6Q67vBesqFdEfaywXijg",
  "key28": "UaPB3g5cbnQBaMRkcGN57qXphg6w6gxHhbNJETkeypxzojoUf9d3gwkjX6Y6CYiUuKgiK5rzxxdDEohhRY3gxwc",
  "key29": "4cKHMGBZ1C2QpbhqWKqMwB87p7mwfjHagkDNiDJY1Ld3ji23h2jm9HQNsGBkVxMNxTnRjwnDnVKvKvRCQ17bRk8V",
  "key30": "3cYhH6K8MrAEUuMnNFnvcUgCgAxAJxsJ7xNms4X3nZNnFPnd3SKKRebsHNPpeZHnnZn8BWcTfN1gX9kKoyFf6yns",
  "key31": "51ePT8pbqcdYnZX8Mr4oGk4kQNBfDG4MUDHGikyMgNDyTAE8LnFQVoAAZw3nV3nqeza8XRDX4eVYPbAk8f4uJxzq",
  "key32": "352Tfhh4sHGNtJv1w2ftYJVmRdxYktqDKihASgf5QQutfitT7RAFGPbpbLqYjHmFXT8xTDWPrj1zhhHki6pogyLV",
  "key33": "2iMTRZqkucoLMAQXsWEkZbhRd287dA2hpgUfh2qm4jYxbQTdZqFbcw7s5oiWGhvCqmG24gPwmppHZJ84RLCohDD5",
  "key34": "3nkBMffjHGxwtaUP87BZFa1tKA1hR4PmMioknByvBPHDG1HUPP65JwBwnU7VrMCqqvHHaBA7fPZSabQbXBPwXaLB",
  "key35": "4DE3cCKCcL9ySCEDL46L94VuamNmodFSHP3PUEnBCDmeEF1b1QQgprzFkSkqNR12iAktAkHfd3toANepgoqUyxQd",
  "key36": "5Tvff6RjRK2HsYHQVt1X3boV8NkJPR2ToPx4ctAX1rTjgn2gx1sw8rf5eohWPhTTFgTktPwMrLYCwpi1HoiUipEy",
  "key37": "3VZDebfr6vgp7toQqZ6Wf45S1AUaoP6BMdexY3gTpy5URewd2WQSQxrbpkqB4HmegwdoGAdN26822jKkzGpbAz7s",
  "key38": "5TJhgSb6pmmZR7KcVmdUXcBbidhqYw2VEDdfcojidb8FuvchbK9P2V1XygPdXvhLhLHtjcZXcNLwLza4dNyfgfwE",
  "key39": "2MfpYVFTJQCBUrjg7jUynm6Ede8K4fS6MoQZDebZp7wgkRAERuMKTmE8ySaQ8WWaqK6PxCZJ7Jfx8AydXUKemQcB",
  "key40": "N2AAzun2idjFzPjAxSqjWm8eHUsD5ye6e3N64VhEwTBNRXrps5x7NJ2sUZN1TSwKnLAstbwGcbQ2MpXGSa1es5d",
  "key41": "49JMdgEY5U9q1gdzreCgFTW2wTN6zA38i2ZEbHwoUTmJiKvdNRqAxqdNReDPmj9GRKWyxVCq78oWrxi16m6cJPiS",
  "key42": "5LG96toLRXhcUFFJhE81tL2WeXmYMsodk1vz1KPpyV1TdLqfV6dK71ZTcewN8oNnS9WaXgFdVoAJ9VUd65WpfiWc",
  "key43": "4txNsNsvc9mqVvU5oqNHp1pgQykKDjyQm8BZvojaCqAYVDXkLC2oLFdZyj7fuL9aTw5tnAe47Cd7RgEhCD8UC95v"
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
