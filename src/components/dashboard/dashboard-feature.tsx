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
    "5U5xicdTArLftkEx4bALYNzxm5c4EPpgBYpdDLjAHCBXRZj93eQR74pSPq5ErstgEurendgkZuERY6ceATeZiFe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEDvdJozE7UYGArseQ7rcBa5E9ea9HJJazSCWdnKZw6woVQ5LR2mP8VSQn3Sic3qzGAAy9cEfZJzWva3NooAYpB",
  "key1": "5fNs1MiyqbYCeHAr1QkFrfCNXj5HAdrtugwXPYAD7XMh41vC7XP9uMudwDbxDvMYg7Cp59frpDKy5kncFfVoKo6e",
  "key2": "2WeDsdBubUSxk7y2hyCVFBL3cohgmXGbyhyL9WL5efHzJvs8hyyEKjHQQA8p7YzDMtzdQcveRM1Ba3ch494Zp4BB",
  "key3": "3ibiQJbCGCgicxYkY2mATvr3amQmNagcZuRt33MUFeR3o9uB75fMLjdEuHNkNpMLqYy3bR89USqr7TzFKN6B8xC2",
  "key4": "5Eq4G8ThRy4AHk4WjefDxFQ61c2g4pDSXSbJAozAS6NXNFvgweR6g3WQkkmH9Lv74RfB6pdFEDKWfNzyupxe2gdJ",
  "key5": "afDDKehk9Rajd6r8BnYGP4H9mHVLxz2gNZWiYZR4oXd9MCgVoNHMc1XwVLAAy8ae8kLAoYg88nBhEAQu5Mv4Pk4",
  "key6": "212DmZXNgtkV8hSLPVL8WSU5TWL5tqwtnmgSoNTi7fnVhppoTtDqf31LRC1XM96BkBp2c2ForuxeJyoFKpiqqsH2",
  "key7": "2Ef9mFLGLdKHygaTAsekSJRGWaSPXFWrvF5dLRJfyhneerAbgnkW3uVHUgZZT1uPn2qkGFhUAGXgB7kotgJcGvtv",
  "key8": "4LtujtdZs5NpYEzwoknVRnDyvD5tirukhUpxd5LapmRnRLrXDAXq2Qzf3RAGvemo8MdBq7YG7mY2gHSnNhnhtGBK",
  "key9": "2L5XYtwDuk1RjLwHdxBbQgWD91fKU3zBwELjWhuFoTW5UZKUhfV6eperUZz2uYSNiigjfdXkrhhr8xJ9P8SQgP5r",
  "key10": "5SHcVEo1AEw147KSgCN6xdhnSo5rur5RTfK8SHcvBx53AGz9hdWUnTSAH51qNcdPH4VWscodAbHq8b6mprR4jVrW",
  "key11": "3nTfi7AQHzxo7gjtmgwJTvnF3au98FinbvVqnHPeZ1vV2cksLwTC46aDD9YUhTbMs2keUXa5JP3sayCW9csWNxxy",
  "key12": "3XPRKdf6Fw8rhpBeyzUBFhd7oWUcj3CNtbg9dvGnFmR3fKNVBckAcbTfMkaCCPKA1w6VMhKoRDZZqWAc8qQKTaBC",
  "key13": "5zW5tgNSYpsKMv4QrKmPftnMhL18cQkL1viBHd92MQ8Yshc6AM3b4imU6HnKgH8vAAkmQUjaGfHjGAMkgmjWH6RP",
  "key14": "2x4NuGEndFaUi9BJRd1Cycy8bfKDR9AG1apYcPdSLiHzE2rrxM7jrhoKpyRGHXWegwwJnPmUAgbHVG4VG45ipzG7",
  "key15": "3gRgkkZGvDpzZA2ngcm7DgcFAiKuCQ5i24FkjVreX6ij9q9649vj8ckTXU54GkzDrarVbUpJVVuyCBjvP1mC1ZFe",
  "key16": "3p3vwZWC82S36qsvPZg2hG3LVBzG7nghbv9SnTa2KqKPDHRdZ6pxM45d9zFKjs3tygo5acmqg4gFHAS1Yh1E3X3U",
  "key17": "3tN7JsQwg18T6bP72hppjELn9TGR2SNpZVUWqZMPpfp6n5rLHyw3d8hnCjnnazafYc5JWLg4LPwfRJexXpbXYFGA",
  "key18": "3EeMgeUAqsC5Q1kRV3nADgMM9fUD6tJ6CdtDSGaqc5SYXnE1dihmhDobsvu1Ytnf7bVKj1kroEhCh8MGZ7YDUq6w",
  "key19": "JUcHaxvTZxjBocxMbWj2BoN1CYb22gjpwC9pXPdb3Y8DpBpQF5vKPui7spafQt9tvGQ2Fh9Q8uCm3pbdGDJsdfK",
  "key20": "3Xcf5XdByZwRf6tfihqdw2AnbkcUreFdpeCvN6Yxr3rUGTTVQwP4cY8iegSuA4qe6qcGvwcxFQGJ3xNLN5bU8gNe",
  "key21": "5yjwRbjtN5rLB8Ud4sXLjV9JxkVeiXoh9hc7YHYRXmabTgJoxw3XW1rkkV4Gws5Zjm8sia8BCb3YEur9pgdFfqKd",
  "key22": "2WyivYomb8dpkLQr1DENh8AETr3o3cFKZRywHCAv4utNsFb3vTKB3THoqTSSRQJQdu7HbJ1Ma83h3yhveeAdhtgr",
  "key23": "2MPsJf1b6chXWRAuQejRXGHpCDAUNsFqVw6YK9QADbbm7jHD2r3qudu1FzvXQvQEr6FXhUAwXM5mbcHU2dHHHUM6",
  "key24": "5frGYW7zZ415iDhKq6DGneBBpPVTXN1uwp6grq4eJfh1sZmr53tPDsVwF2dNvPUGq1BneaAqR4eL4eFZmLiPBZVM",
  "key25": "KuN2uwiJnaVxDaEA2FtVzqkgrLtgCLGpaSHn6MB9wgVxAAbgDrvxDkfCiLXqBjiy9VYgfabEGCQH6DAjbX9Tw7g",
  "key26": "3CfV1AuiqrjPwejRW4YAgoK5NZz365rR6nxJpcF9akLXRK1CXwb3JuXNT6aA1SyUiQBsZib6ZFskpFhb5x1Hx7TR"
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
