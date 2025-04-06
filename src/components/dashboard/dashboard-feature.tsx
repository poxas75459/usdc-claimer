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
    "3yRdpahWt5fiU6U2TJDyYqXsJnXkBYcYBgo1Lpaq2eWF9ZAERpV5Qmk6egwaX2MQzKYXv7WXsQaDgYZEdnpWhGvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1cqfqpQ5Fb2Gc1jJNadb38SuHpqawQjYWSpGdaitZghUo94sjZPwhiMTJTaP752sct3AioXLmxERuD2ihfwFHb",
  "key1": "VwNZh2H78EGnfW3XKtUHvjhx7wipm93aYyw7C599ZcmYUqxBtuevkQkF5ZKjERVucjHaxuqCKekcqCaSGdiHjeU",
  "key2": "2XDR16o66gHVfKMwp8wYkZrEsyUV6hbojv3gcjvFWgCscLwKGCCHXwZpvgGP8zKZnXTi9YroQmGZ5Rt9tPN2wWJx",
  "key3": "4oT6cDkZAjFfGLYCRBkRjv3JkBbSnJWYfZ662UDqpmUCKjDWUDTdStjVx3vLBePGFRUXX5qDPohwMerG9GSJJ7uq",
  "key4": "3hTMfW8BEAzSwJj9MYPejnzq1VR5oiaBfvCwZrKXBHcnaB2wHCXytrYKZXLRSy6N1tihXnjWxvaywi92WNoySHRj",
  "key5": "5NuFeVEz6M2GEsrTRRTDHShzmB3PDC6TCyJNzeiaumZ7cAFfaAP4TAFbooZjKXUMGsFevo1JWdy3UWQA5Leqcawj",
  "key6": "25PCnsymKmgPP1zSLWYShdv6Sf1Qd2Y8wLaqFtSa18Ai1ATMeeKcVW6fGCQFSJCBeNKFjCSUJcivTfZhAB8gDC5x",
  "key7": "g9is36uiLFNALx71tjywF9DkhH5kMMxqYt8yG7bpaMNQwwY16DM16NyfDTMr3SrT5KKeL9hjzUXteSnmJAVPLAD",
  "key8": "3Gisp5whZ6vuyoQSMjA4iMs1A6aeX3viYiXnrtSoJPtBu1nYQJn88bA3a4rua2m9sgYdxPWSSLvY6YWZrZYqoRBE",
  "key9": "3CBHGNXaMRViZz7oRmv32Sk1UVF1WAeU8ABqZvaXsmdjGgiTEWLprVXPw2oJxx2RHZ2AFUAw9yGL6vf5LScSyoKM",
  "key10": "62JtMG4PhyPS949994VAxGrpf8fDmMzFMTPYKf44u6d8p1kcaowqGYsuQ4SQUKjPcSCH5bMcjAxxUTAQ7Ytc3UWq",
  "key11": "5aVAxpH7SEg9Gc1eCF8F7Rk3A8LhpaxmeDGETUeadsqN7cb8jPXFnWGDHpJSnTTchJFiXy8wRCjjApiC5hefgCyT",
  "key12": "4mpcF11W5pqbDpcNqFbzzq1uhGYXuCgc88AYxVYLbsDTuST3Gu3ieZm9R9SQuFgHAb858SPn61rtp9CC3ywRdQrx",
  "key13": "5ogUKZ9vjJcerGSChgqhNzcgm4PzQhWLaJaYFavMTMZBdp1SVtnXw8hPHx97SY9AWQxPvwmuFRgF9sDg2Azxnby5",
  "key14": "xXmt8Y4eqaAg4pCo8NXk4HFj4gTMmMMaZ5BKBMYvfwpuW3wBZVRWERcc5XCxFhsi2Vwr3yGSBPMAou49SgR8K9e",
  "key15": "3H8HNbbN7yCRc9gdvDX83nb3SjR93hHzzmJRmoNFriZaafksHBGALM9M6HqRWvucZXLsC7GuwDP9SA3kBnCmrfrL",
  "key16": "5BqeQk8kbNHynQQG6o4Hc3xkjCr5czJFXt1i1kweCnCf2R4iG4jyknuiqvKYAfho88KeFbjmMiiowPhA3C7WpY3X",
  "key17": "2BkKnTs2oVSk8v1H4iwNkHCjh2RzMuJ5BWL34wWvZ3SX5G9eLQZDD3tz4jwGqQRDqK8M6KDj61w7xHzZG545fH1H",
  "key18": "EPcdotfshsQs953tCYKkVFCRoRLzfVrWtxwS4wZDNjoT9y6iS2X9i5G45syoTvoayc5pyqNnWBhTyCrpQHws4jm",
  "key19": "6HbMMg91Vq95nYXvUNr1jeZecZXBqQ61vfd9aco37zT3rhgr56mZFm1dt7SERx2LMdgJK16y4cBSNLEQfDa8h7S",
  "key20": "348sofLTHe6Uzum5JzgHTmyzxk4Aq5qeWcTYGp8kexk7NFzPFKoYZ6NpWmyU4XAtsmixoLdPUBUDxzbMY3oggQ81",
  "key21": "5WdQdqjmpraYq2uH6JM9rHyLBinFte8RK7oXutDxrWSCwGv1RC7a8bVxuctkzVaf9AudCG3dKePEKR6vjMPLUmHd",
  "key22": "2rZwUp9XPDqEri6tQdeiZDdVfJzy6LWpJRCrcnu1gt5BqcJKoyfQKZd3L7CKKqbP1o4DPGqVDdfqJ7uM3nhWTupY",
  "key23": "4H2wu654JDERo8iBNNTR2STNEc8R8yhjdMsnh2xjpPaFhDCVN3mhM4kc9eZ11rRTw8D3JU4DcopMFEFfq4MpR937",
  "key24": "2BEVRk8b7FtfK2hnoepoBqCeGR86egkDtkcKZcicLr1ZQVcF2UFJGVHNWMAa9WqmFyMjtRqyTUfBHCThQ8utNyHu",
  "key25": "4n3z97EgPWdxmVp1DWds7z3e7HEY5XamNrPeRafiaGnS6imRqZEsrskLqhJuzLS3cwTefc8Ah92chH6gLJKmvF2g"
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
