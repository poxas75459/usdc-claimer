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
    "2djkncCBEHRG5QnckdZTYeQQej6n7ATfcaaAP8i8jHfQXLv35h9UgHXqfx1QR7eExCxKyGEnqk8caRVBGwkyhhLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dkzUEWaiaDjtYsygiFyt296fUoXjWtFR3p3rfK7Zbgk7Zajt1c6fovzMtQpdfTGTstr2KHMYe7MKFUC9Fd4R7Rd",
  "key1": "4Ks1EvVXaZ6nnw7K78Gxo7z28hwxi3ruvnEZBTPvbn16swJDhwQJdg9EvQGW7Ga487dC7Fq5HAZA2EgPSXidA1ZU",
  "key2": "2X4eqFzJVxbPVvyinAbxuF1iqDDfHMw6JhEaTtzLppR3nSdFagXtXuvDTgZ278b87VBixoMv9niL5GTb6pkSxM5k",
  "key3": "3Cb6hArptvKgQFThH1xW8Vj4foTBtDw6yZtatpAthgJLNRazacNRQiPgJCWZSquSNPXkRSjXJGxc3nDfNpBBmeHM",
  "key4": "3wvEsigGAEn3gYz9W12y3x7ubBoBgZR5qBZVMkDs7UjHj8hqP6a6Jh2m7FfdUwK4vBr22rbGAcuATgySamtCwaSd",
  "key5": "4U9P3uzaFue9hgLybzb1bzgvtjd8gXx61LVQH8fnzUFZWaTBEi1RcCJcS5XTexYq7Be39aa6sxR6SBVFPooLvARA",
  "key6": "3SybDkpNv1XbkJbkyRBrMMkrvcXtAbFdqgaNnVNvmmhVAQ92dpUuZ27zs9AUS7L114nC8mP2Hc4tLYgwXjG3U7xy",
  "key7": "4buuezNfosj6FMk4zjXkfBVBuyZUr9XV7BsFnmsgs2unBtNVvRrm2kYir8iqxLBDpq7dHjyniGtweMCKhzrsWWQY",
  "key8": "2y7hM4jmM7gxbFchBkNcAHGTZjVNyQY8k6WPZA5bkEGozEiMv8cgsCwwL5pS953GutV7pbTGTb3Fj6cHSKjadBDk",
  "key9": "5q4QcGdpLb1QqWjDxarXBT9fQoPJ9LL4KgepMVgE14p2FPth6Er5MengfiyifZYG588qTARsJzxTLitgbfHUwqxg",
  "key10": "4LexGUsCZfctPnvYgMSERDjGbh1oDHBdYtVskujSc3xrwneYp38Arr1zxumTkC38rAcq1GZ7qKidp1ynxf1qoBjj",
  "key11": "471vDKPCaJhs3BXyvBgKwnBietK86C57tUesbkEo7MGaC8uaybJ5gg3QwGnAnwTp9SKj7jSkFyr6X5voQimndBYk",
  "key12": "3tVYXb72aVEoU7xQoubT9BfS1qMHhemeTVWcJjgdp2LfWjtLjWNoK9C9JSis499D7xVYctqRhEatHhJ7xBks7PWP",
  "key13": "5EfbBbQSrDK5KuJ6D3hXT5aKGsQGcm3ysuMeLfoFMPteD7489NshYZNjFZ95tKhNaUK8RFL58YnEztsb9M9R4hWv",
  "key14": "2SZcBQ1o65jWR4yJkfWu9pNa8Pi8vuEbDk3YivxptyAtJwFhGWmCRyzEtAiEUL1jw4idD6VBqXjXzE8eLHhfe3cc",
  "key15": "4WAtDnjJeJhnX3m4WidLexsBkvfgLLHQY3v99sd8PhzcUhWHemimTpDNWqWNPaqxFHm9uVwPvQxhcwCD42EgfSHc",
  "key16": "4UoiMc5Rgkmp3HnpSvitCYnLra1HwVarLQe9PBbiKRd23sbhxQLhpMBpj4VdH8fRUJofsL1QZ1u6LMWoMeZsk1EM",
  "key17": "WiEWR7HwogHrx2Q9mNETMu6xUwr5r3Bq5vQK8Y7D3UUh5uV7e85kXi8UW7VnVKsJca8M69oa95gcwXUWGt2sMgd",
  "key18": "3Rmpd1CenD6KgtKybCbuDxrs2iRsamqeCATCKqgQPqUEp8V5v8Byujn5WZ3Dxp8K4DYqdq4Uh2B1pD2cPNJbFXwh",
  "key19": "tgZuj5Btoxu6j3zrMshASMiYTNAq7u2W421nzkDTGsuHtiY6UC2ecGFGjPjXFrccrDTeDk9rTPpXRb3k5xcRREq",
  "key20": "58969qBPoWENVAKF4Gs6qFkbh4Kv9qe1cRGQEmrdSDyd6xWscDGSzbEevc7h4kXtMDm9HLhFFL6AQG4WRKgkpkPy",
  "key21": "g8Ca6ays79Gv3tU7NGgvB3fhutUZkoeMM9VJqRVTmNYxMjcyCKXSMcAvNWeaoZ3HcLqXGuq3AfqeydcYSydNctF",
  "key22": "TL2TEu6zd6qUcaHyyCumKMQds7GZHvhzdpHMN9Dyt5Yzf11n7aodM8yuxj8X5V89rKZvLMHaF8qCD66dsUig9W6",
  "key23": "jrz2TERNSLrf8HDmqMvLreqXNWEm9qnSzfFafX3NsQx7qa3yKsRaf4dudm2tgvqqWF5cXupvmEpNJTsidYWBLb2",
  "key24": "emcz7PLoTUeHnyxsCyTuPHnkq38jgTRbL8zDLukJRU1xQtToXXKQNj1BsRgqSh4S3yMUqZLRAfez4QuaM7zvuvh",
  "key25": "2W7vdYv3uv1BeGrdpRWShWQyrUvAsJfjsBDzV49js1t2Yo7Y12bWCpakRPGj8ghGKhEJ9VTToqYvPBTP6eq6AfN",
  "key26": "acBerA2dtN4xXpsavzLH7rCg9myxsz6UgMtQPcMkuWEGhCNdodeQCUPEzZLa6Ze51jvfhmHYi7Gze5AGeCvNAaS",
  "key27": "CtkbomJvCTLJ4ZaTX9iwby8AtCXwJyHETz2GmdbE81zj8SZzAP76LPdvFiv9pCfxTM9Ru9fiyLxjwwPREpAtFP3",
  "key28": "5SjRnwPEqFqjZpuJmdLRijeKCzaYksqSVbHW1dJ6sUZtGAsjZVD7vyv4NtgLzMbne9XPMaEh6Vcjy64nHHB3vXYi",
  "key29": "5bqKzFgZLxEBs3F2vVRHqRZTy8F1sxXQpmCtYH8jatMPus24TE8SxoLYesKk3WGed4fK2HHY6FN6D1CT64hXYEdG",
  "key30": "5XDY6nJRY7a6yV3TXtQhGxp3ZvnJtqVuWXU585iV9VroyQVvN8PVzx4oSuFHXB94gHkuxSZ6VFmARsrPL864HvCn",
  "key31": "47GFKeJrdGcdnLwSb9KxE5icjCkVC1c8byk4SsjPcteovV2KWBCHH1oBVP6y4arbcNtn4CtcTrtyNKJ4Vx1AVt5k"
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
