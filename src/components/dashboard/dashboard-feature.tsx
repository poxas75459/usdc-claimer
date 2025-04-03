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
    "4GqxDr77oESGjiUHiJT2diufFsnHLt8HL1Vy7R8qPWwYqdSodFdmybFj6ppejN7f2b8cs9bFk9eg3ftf42QJkhEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xhLH6LFJ4JaqMh1rgyKfbDnWe6qe159edYBVdhftoum8UDxZrE1N17tx1Jf8j4JsBfzHjUYU4TNWcQ2ZiN8jaDM",
  "key1": "4maLHgWHRHMCq2xs7mG11j2WJ8gQWXtmLZF9H4MNSdrm55DKrF664MsuyzZFHMJTJKEGg5P3bLyAWKQ35tV8RzLS",
  "key2": "4yyyap57bZYNMrrcj6Q37jpi7XY5sCuHW18U6QNK35GDfGs2eTaniemy6zq96QVozWrRKk2dMeBZExkdDUiptxAb",
  "key3": "s4AyriuXHriheBsye8drhBwDpVTmVCaARVmgxXZyHXXWaGdXCyiV6wN3VcxjpajPpXmYgUZyKAuMgBSGAdG6zBx",
  "key4": "5Nux8Rxzb1oaMXZAmWfukcHmKHFz6bFaT7nGejMAk2Rfh4KiTKbkwWJPyMgcZFNCzGJ2cLfe9Gx2fFx7x1VXRh8b",
  "key5": "2SqM54j69rSXBxYju7dNBLqeP4o9t2o8CRpsmjqaK292ANy1fiD38RW14dmmpndwXvsu7ZBNiDibNvTN6taC5do5",
  "key6": "51z1h4WzJe3N4cVGi3vk2gHwgYS4ChZuXBSVQU4pD3r9uYdUsLhadBzrzhmhb8Arq7XWjUPUV8mmRdEfUJ5AeLUG",
  "key7": "67Xex47kE1DdRh8YRYAbaEZksZSFDC3WZyx5yTk23WicuNqfuszzgudtMnjxKwBQ2Vk3fDsmZ3iAvCGice6koDE3",
  "key8": "rfBY8rjQsG4Bnk41Bon3vcJA4zbiwTUAmJExosv427kDfxu7T8zT6nkaqJjxjp1Q2EJudDjzYfd8Q4WSW4TWocM",
  "key9": "1QysJyvavh6ce9hh2vfyDkZ4c835o7fGrnVPCKAYcwrzrBmtH3w7vXm7Y2cJ28QidTkvPLwndyCva1aQaXytYe",
  "key10": "3PdfTVTYeq991AoyFGqYHoBJA8Hjy8m8BTrd1kSM7JVuYwF2LYbkTQbeK3VN4Q68UASTW9tcG8eECCsBXhhYvdbf",
  "key11": "28tBDe7n8FJyirXr8qDq8VyCorRempqodUBQqe1MHp3khxpEsf7uMKosqZob4V6FuGFg1XqTHEe4BMHPUrEEN34E",
  "key12": "5UNPFLk5BRF6i7mfw1cPSbbH1YKwNhXVvaoWJdv2NvDHjRBDv8fhQayDparhLAkPpise9MYgbKBonQwpDVKzWjSa",
  "key13": "4GDmUk3KGN11NPko8BQzzJpvM9Ad2mXEUC7KpMVGqyo9jqXPTuWsgWJwxeMKLi7ifq3E5temj7cf5MHDucjBnub7",
  "key14": "1ymUjQocxkcPv8SfbzTdNryvenwDWu7J9ovrH3KLcBNkZnewFwztDSQa3wzEdDJ2UtvAUmDfkQtsZxc6t8UsvZX",
  "key15": "4Z3SDNLyXA1EmUGUrK71de5K2gLjs8qx34AP5BqKXsQV5L1qqxGnJZ7sEkMLwoQ6gy8iTiztL6BJ5RnXhNwq5Jtx",
  "key16": "3fvnXCd7dDTjzpQPZdfVHQVLBUA2DeX3moZ3hYrr1J6FB3JGwMRTnEoxp5d1gbXY8HKxHCwTGsHzgWxuWohttWCW",
  "key17": "3RG34RrRyvEGvFyeZgoDopGbSLKDxwuSKqbBuwiFhcS1Gibdo6KN81i1LSbXMB8Uq7UBeW3GvAEm6yUxao5agSdd",
  "key18": "faDEV3goLhL8mzQhRKLucNkEuh5dyTZzBHD8RoJGH2KMXJsaQZy8t9jfDXNUXGVhDfDqciUhAPNCA8Z5BUo8Bg1",
  "key19": "3JN4PutTFY3pCMMd3cUBszzwGPYTkjk2871rVEbBbij8G19YtEX3zdKSgsYGBR1j1VRnrq5fdP9io3cKdro5bPrw",
  "key20": "8C2zhfQKuUF3dmSh5eWMu2N1XtaT6tmTQKW7cPCQ3ht6YtsaT6XNPXaG2n9bac1Db6r6sFetT3XPS3Rx2iuvKKo",
  "key21": "49zJ3UqeeWsLW7SSaD6HSPxFYfVGEVogGYsbihiDwafxc9ry8rdFrQuNfCv18uSpM78qLW1FHQq9VqfeTNY3zXDi",
  "key22": "aNibvEasYCFDwWCGeohpqpcrSAbu8fq4XFCW6DgwRXynytcEHj2VmPJ7uoS2DgTj4zcehVXaQG4T8twxB6yG9UH",
  "key23": "2nHLYxrbStrwKjxVSZYy1jDVZNycYWDWELBroCJfvENqfgkDhFaEWMyLFGANC1fduX44eot85e5z4bAyewtdkg4p",
  "key24": "2eye9wpkoidtWKgBkj7Xz7rzZUBN6kQR7ia5tKagajEutBGQ9yyAaU5dTLh96P7B5TNQWvzkPHWuSg25hapn1aPD",
  "key25": "2t1kC8UxBAhy6WRiJ5gwaCe7Hh2JdWVFwTbUQTUBvt2XvYFJCvaybftKYZ4pxJKyAs2EWaB5gv6PrfjDYgPHBdSL",
  "key26": "3Qq2UdrzbfnUUfv18ah8aHDSpZRXbdnf3M6swie9tbjDU42ihkRKQSshUaGWpANNeLjzMEo3JT6kPZUhgiuGmnRD"
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
