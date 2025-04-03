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
    "2orFH81ueiakZXzhcPowab4poJz3uKjVioRbgnzYhA8j9fgRk7MAMfPo6Di6J394L6ScUkmTh27TtBhZWHaNEHsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tAVRD3mLf2mWHVjfLnKa7UQCHPXKR2m6Rc2GkpyuNCHr5f9293rRcV4w4cDereV2MpBX9JpnHAv5J2F58Q3vpy6",
  "key1": "cMkmkWRN5HqJnTFYhQgzrAZXFrFmdUi33qbjBsaP6RkoHzkBZv6pswSiMmcE3sCx9FaswmC35Kthu5vLb5eNR7W",
  "key2": "4TnjxULwDfoLKmyoybcsX7SkdHbcVALP7W4QKFkPprh8DymbQeLJzZE8WPyzikXGX8NQqj5RNhcpiH9m6JCGGSAj",
  "key3": "umwJkbxsf2x36SSYho8k4GjunA5hCeNU5zUNWfCJr5UA6naHsUNufwaSMJ44b3TieUPnPh8DQ1bH5ok9v9THMtj",
  "key4": "57yLm1fEHCG4AQTneNUrMLJKZS7LYHHidEVDCTq7vPrYw8ovWEANtmmiKTrbpzWkQuqHGpSiqBPu8THLi6VndLsR",
  "key5": "3Spz7QMYV3kR2UrrjUX3RNyYyWoSaJ5iFrbGaXmfCsAjAhYFNtadqKvimj5WDpT5j6oUiTapFiMmiuCvQBqyabk3",
  "key6": "zea6BWnTP6akVLCUQMrQUTJKk4DMTsCYrvENe4WBj7jwbGp5y97zR2G1p6zN3CVoMewfb7Rct4KQs4fnsdmkWRD",
  "key7": "4NuEqtB3wPhwmv7GFusUMf2rEQxiQVoyv4mLwsvRhUNRB9KjXoVknWjvr45D7BJznYV12h1tvxyzFYxuY4BV8kM4",
  "key8": "3Z7RcqEjNGoHRgavBQBND9bksoHGieSRWhnnVmuuEVCNDVDdUpnTtGq3hqEXFtpp8TShheSrD5EG8z3QnJF7auDb",
  "key9": "2S2emrrmmhFr8bqMY9Ki7bF4JD6N3XhmG5uS15LoAdmhECTkxuHpfuuUo22upoxgsyevE5VpJJP3rR4irguXEcSe",
  "key10": "41BuKnC8PMycsejcR4HhFXsSx2eRVofMcPWVySGm7bJ8ortXgGzP3PbeDBPi7PwPzmHjB4xKAoK9R3oYVtfWj2oT",
  "key11": "4wUuuPRpSma1qarcjizYAxunW3wuaawLdkafMEAV3Axrybx6HU7Rp9HYFZJ8zDqYyMnhqUYELuPErHXFdydtoL55",
  "key12": "17XJFame7gcGZqijbFwrNb71xqKfr5QYZ9uUpy4PtgtQX7r7Hdzx4h1QBT43VJqEBNLsWk2tD4PKvACMAxrMdfR",
  "key13": "5V15hW98mVqGQeYr4nb6jQ2bApMEqBx9MTrruWRRqLYVBxC2cpxFK2B8qFVDWcFpBtrYPouGpqHrKiZJDgVbVw2c",
  "key14": "3izhbp9qhWGLZ2fDngYnHLxRuArYd5YRFvcG7gdiPUXjiBkEDwE6K3Cd5ApYDhDBd4pCokFmQBBdXETRKXu1Pv6Z",
  "key15": "2VQraFQN2tjxAnghFXXuXq7uaWNMU57VQnUtnPMkVKC6GWVGfMX4vgEQ58SrCs6o2a7unSeqa2kQkL8meyhoGNCs",
  "key16": "4FcvuLBi2UVuquP3YK5EJ61dYUVfP67pvkZ5Eike8m2M4nKphpN31vPm5LjSh2zFhBHe9RweHBWh2xQ14Xazd699",
  "key17": "4swaj1Tuqv7YuoUZv3zho6jWdPpZhR12FQKd8FMSx2D24u3kCbC1C9t2Nx1z9bRrEx5rsUwsmG3j6DbYxJzSbN1r",
  "key18": "3MpjXn9FMi2t6T5rzP3kyzEFZCB9vBQCQqGZMwvVdGTkEc7ngWVhFz27tQJc2AANifBoGsEXCVB2bmTNYjLcp7ih",
  "key19": "StQUSa82ms9sBreNgCAGDK8YukLq7yqua5PDPpPXjijSmvcVzZrggnZLYEK85VhYQoWwRG3xGqBs71NNAmQgxba",
  "key20": "4MS8nQVZJmyji71fnwCKhi2m6SLJCypsc46W4bADiJgTdjzQyu6WQiKhDZEVNuyThn4gTLS2qY7Yj43U8fA6Q1RM",
  "key21": "5iHBug8XrQUtNFdLu249FPioxDM7UX3zKAa9FURvegtq2c9EfauGkPhMS4PDCvY6Ag7XNyz8VNo4zz7Gm239dgP5",
  "key22": "4ptPL9abX5J4T84GCebuVzcER1uGYPbcKtQC6s6JUq3z1UD5jdb4sE2i1Dg8G9bTxTNTvnXqWJZFJCVdwveAPTYu",
  "key23": "4KUn245jKrz5kBvCqieCdETnLfkmQ46kVnm52hPbcjpuX3tqeZD3iop1qdpLeBC2nbKwv2TS3mHJYbfVNNY9vB53",
  "key24": "3mr1NmVfJF84s7FfsXRRdzRdT3epWiBMkzZfTwiAt5hmqfC9VJoEvGTyxsFmJrVRUxoccHnXYAvadc442PKienit"
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
