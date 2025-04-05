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
    "3PfhzVsANvQkQLkCHok1FZZyvM9gtZjFe2KRKNazPTMfM1Nd2rP6j6B8KfKKqQ94PdJrYknYcNeSBSALgJv17G4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYsi7jhT1FXfBY2ZxfEydYYMbDsrr2eck6CNQTAt4FgU3KFVhxFMLSLzrPnwjBTRPxy7ctQCtpaMkqyNFpwg8qi",
  "key1": "3CNF3bbmx32ShRnNB2c2E7fBFHM4ZHSCtgJ46Fb2Fc1AYHS3cT69R3T7d1FvVFzu6HzQtsiucpmxQMDeks2vrax6",
  "key2": "4LSRwaeYCv5gz9EHUFmQjdP2foKxpwx4UsTYMsyMRHEkRNiEs959qeT3joSFQ4fQtgmS8TXxezDYf7t3EFZshKYD",
  "key3": "5EABbSt67zgsBQoSTdMFVD27E2jNFw7V9gpQmSPj1PfgmWtxqLA5inyC2jBKxdHVHt4CfBK6o9nsjowL2FSw2qXR",
  "key4": "3xqgf3iV5YggAuUAFzKskWVksXxZF1QJt36wTHT6PS8PjRJMoQMTjrL78raQAtUHAstm3n83Ss4VEfCsGKXQqtxA",
  "key5": "3S7sc7epRQmUxZmEJGmPjDFPsu1StcBxaXot5g4ZAbpj1UHQtzRbhHdYh3qJkTirePcB8yoweBAtC4R6LZBxtEo9",
  "key6": "34nxrWwWKKzuY2zJRtT8nvZVAn8BrtDBSgzWgQx3N4L5YntimKWpjckaHRxFJvrZPuJXzoL93A85BfEy4NMex64L",
  "key7": "66tRfkctwajn7BqRPBsagVYSoYK9amMf8WJrNedHC6fStxnoYKN3th7rGFusfrZQcerKZunFzySWzcxn5cXmNrCv",
  "key8": "2uqMeji6hWtYxSJARuqa9iUMJSCYmBeAU2Rmby6HhBWX3jnsXPLC6bPaZeeKMLR7nSzBf3hEXFqxDFGySzR64gqf",
  "key9": "2NnaTRAqoqR8mrkaCU1bXxFE1Fbvb3uzhAojdthpmHyj1MnBRsuJFE4fbqwPMRx6SvQvbhujdMz2uhxMxsmHJs7p",
  "key10": "239tcce2hZJCXgYkGPmYLkJLvvLZWbAUG679NdPZrSQivnMzUVWuHW8wtz65S35JBTB4TmWAAqkXLf59x6dPWGpw",
  "key11": "2iUjgRTkQuWk15ihL8pdytkY2gpKkrcFLVarNyJhYTbL3LEunzyxwgqU1hMwswv4JatA3WAxoXN2Wpk3m9vEmSAS",
  "key12": "6F3KR6VpZN5jYVz8Bp8M477FxEQL8KWV9MFhftpzmB7GtSGwPVPwL8B4U4owt6P6nPx98CyDQ63vBX3EMWBkRnt",
  "key13": "3uu9LjnKyv6SAFKz5jznGFzqmesjyyoYMNRCEV2PQdm2NyQpFc5Re4CYxiK77PP2aNnQxdsZER73ahqUsRxp2hUd",
  "key14": "2sX2TM97UitsXcPY78Ux92YzqVQK2EbWrGscy9YxqrdFZbBcz1Qk9t5BPvfJsWwJy65J24wHZR7RDp47XLg8B1v9",
  "key15": "4pr7GkKCzacEsjRFYeDxpcu2EcpfVFZDdTeWk7jxhPZ16gRsttBZQWBrpowX17vkN9K738bGRozBb3XPkw2AduAn",
  "key16": "3MtPwSNySymMBYA6o9X7Nmzk4AWS9wLf9Y6TUdUcuu6xQFkDvv7tgG2vVQFX1hKiDEZ5kri4qvggq286YT5zHc8G",
  "key17": "3f8AY2ttXq7RBBGM95YqtaMVjEvVo5sxeZn5pnyCJdJsTjLKFq54M9MXXuEFfDSnkCpnHKSjB7TxtqDRrr7ihKq9",
  "key18": "2qKGgJ8MUahdhxvTGqBpaA4RXG5r8gWGp2SCW5Uo5HRaDDFTyBTdw6iHEWMpk8RnP2SX1tTwTW3AuRBX3vuEZ2G2",
  "key19": "2QLn9d6BZEZaKRJGhygqDmreGZBdYkxAo9XGmMZiGv6pg54QKucWTZpywfinqsSgW7JS3MaoaA1BUUfBaCkBcqaN",
  "key20": "2vJbTibK369mZbFEjFLXYGFfn1nt1zheE7NHWs7MRZeiGZWvsNEuRQNxDEQpo4eGF2UdeboRW2fYpJPa6if6F1cP",
  "key21": "ZFRhmi2oEoubSAKaJn3GH6m9cTw5ZoSPFafe74V2wU4tiz9ptWECtYPWuDysmWWaX6CDv8nPEFc9hXUu7iWtFXH",
  "key22": "5NsMjh3rjroSPDMCEiem1cGaLfru1AuE2pEwWiGCga4gSnUW7Z9qCo4XuUDiFhgEwWV6DXQLqfVB6YQd4xWDXqLV",
  "key23": "41KwBfYhSStSfy9EMqHvW11YaiM3urfdhV1xQZmH1ZwkG8JQEUmzkcuGZsM65JgpMPtqYV4KX5qmXSPatneo4aAm",
  "key24": "2ynRRWZPpYmTQghLiZ1jsbFp6w16CC4v4V1KgLP2rz9NCAZoNwtZBPA5sztrHD7gBrGokALDC61Fx4b1fDqqHP6N",
  "key25": "4zdPCsfvCW5SDoJNMbPvEgQ9ksxPJDtcasoykW52sbGCQ9LgVtXi5yzsRzpsT2NiXxvZvFjaqCHb8ecRKAkhMrx8",
  "key26": "ePWFG4VkzrMmCmvtHNvaKq5SPtRfrnrfYtTR2Xn2q84scVn5E323EBkeMC4J1xeghA16FEpjykvZAYiEXKQ9YPo",
  "key27": "5YXUJr31gL97KLBB5HEokHRqNgZSPSuQhsZRXA3HTrp3WqRfryKy9pqcxduN3Q6cccDsfegjjsc62zt1yyfbDt4G",
  "key28": "5qZPceaji2GBikMyrL3Dc1cWJXN3JWVnD5BHV6VVfhFj9AwU1BKmysahFKCh25xdPSrXbkQMQbaZHNnJRAVssi1W",
  "key29": "4WH7nzserD99WT9tGLYdNQftC23CLxrVmaF3hTUPNBPf5MBUxzGcEtDgBJN2Yn59EK1uDqRwoozoUJdH81TqUpuv",
  "key30": "2xV87x8zgS97qQvT6X6pa8KrQaCGoitDQYVPFvF5uz8y1mdvVDW5QzR3pqqmjtMjSHcnJzFBBYgswY17zuvmCFWP",
  "key31": "2LCSAVyM2URj8WgDBkT8egk3fmosPbXjYhAgBsbsK67AHgmzZueGCp72r6GXy72ULqc6XD6AAcmG9rCnUKBfnAtR",
  "key32": "2fchiXXx68bW65h5nZNL8ddMRr9MN5R67BGTbdcqQpewH9prDd92FmuTR9hz8nUqQLom9B3B4PNHbnZMJU9BwSuH",
  "key33": "54ThTBoPcZQx4L1EDmc74Y3hUN845uJZSXaDCPYSwn7gkyvjEwjgaWFxtvU6kNPkWjV4jCJ1JQZeLCDFvhavvEaE",
  "key34": "35xhuBadpggSSvuG55K42AFoVe67opLsHQ7PzZzgVREakr75icb7ETEzksRp7AGTUj1YAeJhGgNw26yJJCUh9cKa",
  "key35": "hvusNi9RaN7thbHDRfBjwjAS9A5T6gE4xNi4hW2Y3tnLg5EaqsZsmkhDKs2KU5dB22ngBKDoiH2eYeL3zk2Hpbx",
  "key36": "5nbbNHfLSuMUSmmy4e9UMyhy3trQCUUHrPGNCPCp2Lgh9jqu3d4XJpxd8PC1HG9aYrJtrQVe6Und6apoYDTMmoZt",
  "key37": "3uUhZyysh347YjwDcVUMMbFLNTctJFnJzKFDDTPEWbktekamdgaLk5F6BQTMM8aa8t9LLuSxqk2SvovX9U16nxdW",
  "key38": "32h7tCGmsUDq4un1TVme9SZfutXun9pvYEpqDyrFFrytDgX1dnWoa2kejUbp1ZECLiVQp923ZrerTuJzEEtsFsVF",
  "key39": "4tXmGEu9KtgaTkP8LnLa3dFMw9bJdj6EQLtR5zhgmGFuttMPLCcLMYGr4pC32VbwpJRfwJZBqq3RtSzeogG2417i"
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
