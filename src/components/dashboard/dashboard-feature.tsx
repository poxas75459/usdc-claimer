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
    "JQfGfoJKQaEzRnMCEREDCpstv1uS56MdbH4jUykZtHfH2Bvg5AL4NaVKZ6GkLwUP6ujJQjwBKZoKqjaM87Pcmqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTTf6aeaVyipt3rewy3k9683djZdX1SmdpSqRufGsCH6BMQPhHdoLFEmLURCaLQXQKf9gmHXcmD7PXLiqSDN9A2",
  "key1": "5hVvK6TeZD1gwyypys6swgeBru5vYaLZqwZn3VgGgNK85ZgCSJgSHMNctBR48aQ39qmgEMczraL17wzexaYQSRyM",
  "key2": "3mwgJGTd9w1VqeAWUN5tBv7WpXwac1pHonxKGVFaFYWahtSqu94YMskts27QdmjyqsJw9tMkKFEvy8UwsWoC6Xgm",
  "key3": "2VD7CAmsrcMMq9uvfsZPcNm7B5LNgnw96A45n1h9aPBoitS3CdBpi5ebbZQMWocmVN8rbW5uD57sjnefBPbkdH2B",
  "key4": "3nnua4mcnAqiTZXycddBXAbDkUEBFGSkGYzrh5TNsqUuSdGFJbbYZ8Gy1i4Z5B8z3YAgWMMcaeofdkdzYA2kXfwR",
  "key5": "5cKv8SA7roH5h8r8Tf2ivy3YLMj672LurXpjrmBmXd441o62KDfyXZh9atc3feRkhB3oDCTd9oRYNSyQk3QfQ8st",
  "key6": "48kssMEdq1hQ4ToxaNV9gdWvKM1SyLchspJtVgsRGWgtUy35Rm6y8e272b5JP52RUiP1Qg5Ri9XHy5Q15zp5APvd",
  "key7": "5AmrqhcGWcpvdGdKWPDW11f1X7D2Qs4rYdduP3VirfxJNHyCNN45RjqD5Y6NRp455ezmUSmCZeSzj9zX9rJYyzzR",
  "key8": "4e1TJr7icB88aCAL8HNde8qJ5GgrvWBcmZWPFmLMUSDciVGaQ92TzBhduhPuy8Cetcfx9a3osTufYos2LimcwAD9",
  "key9": "62Vkk3HwRhAoqxSU26m2c2cjqhd5BQQ6MUzbmfiwu66fQu7F8B4mdAChwqUHD6AVziUJHHgS4itNeU3JeYyUZNke",
  "key10": "Xxmu1uC5mDe3kjKbQWTDWd7mVfgAoyx5z4Mv74xxiNm1GLbRW3UqUJoQ7vuV29ZTpHE9GQcvDjWXidMoWDS3BFu",
  "key11": "355UXKmdjHc1gmyRFbojRbQwGDN82C2sFt54yZgz6JzTGjki7v8mBKcRFb1KCrW8We7pDXgymiQsGcJbctDQ5f9L",
  "key12": "7cApQBnAnPahoZpgCndERdfW1n7fmKGxZBzzgG3chT3ZwW72kQLd2CwSei8ADbztv4qXUNej5RULFayBm2p4gXV",
  "key13": "4tqJhihL9cGk7tnmaxSEFmYo5wHgKLSjeQoHSqjrzm51u7HBMKeMAzpiyEHWDe6THUZz772wwAn7YHXBYJBS7K3F",
  "key14": "39rZBVVWPTeNnYpVJRyMEftBKsLFKk5ZPaRB1e3L6DF4k7xxT534nXrvei5X3em9KbXQ6bavCemK5WdSP1nT99Cc",
  "key15": "4sSfwdgELJuPfprQLHkxQSNekW592JvSg5ckiCwJj88D9fTZ5FnUwUQE5ANsibAP5hJh4cm55gR3Ea68RJa5zGnX",
  "key16": "25Qou21aCrYnkFtzSBS1XJmcKGm63ixJJgm7bXWDAk2WUynpfUJHJM7hBMMFFD9N56VoAzghnVY6YSjZnNDnj1wC",
  "key17": "5KWN9UfD2bdBU5p1bTAFhqBEj5GVYMg835Bc9GbapA9HHxbvx8sAYmsxcoeGHmi9qXvk5Kk4MxYhkM8c8xcHVzVm",
  "key18": "52A3naFwaTXwcB9s6gpNRvrc2xtXaQunEy4NxBd4F1L3VSeLj5gZmLEE9dQTJVKsQgVB9wQGzQpYEbJh1ks4oKjM",
  "key19": "J5y98R4WqTEaNo7aPsSg7CgsoMiqR7pGXpsK9Upq5urkJVcVhkaPaknCdXMVSpJjtQuD2vJVedHixv9mLW4WYme",
  "key20": "5E33jD8diG2W5ysg7icg9UFCaVSG4NhBdkQzvSq4bVFMtaZfUGR59uwGXFq5sQKMeF7fBG5ZhNuwdNm8u1HdgrXg",
  "key21": "HUADXP74nVwFpZXXR3W6CsGYsZKZCx1FFmvNW1HUHyLdaNZHa2Bgtzi1ZxVKH5uw9K6bHqVgfpXoPGj2FvPCFas",
  "key22": "2zHaEhP9qQypEEqH611PwtidRVvhKTfqZwNyPv52WAV2cW8V7e4BMUw1tNYX4tLQdTYzuhTggYDu2ppQZZ2B3TUU",
  "key23": "4rsdETrQTixBNFUkixPvRPprWCxRsfXvbmiQbUPSMdh6vJDmtgV1W8qA5Rvvt5oeCDBqvwYrCBqqKq3HANVFwxYM",
  "key24": "4jyXJe8EhejvXfL3rKqD9xni5Vm5pZPTdrjKdqfMSKC6FfyXTAf8e69hGRAXFND7RGvhswjAnab2jnzBvuQ4kJhx",
  "key25": "QwcuMbXrpfiM6WaQ6FjczXrhF8dLvcEjBE1DyuuPdox3r43THbSquyuBm5nWxcuxJenSFDiU6UJxEJeVhKQ2wMh"
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
