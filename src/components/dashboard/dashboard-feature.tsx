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
    "ZATTZ6qdCSfcaKAwupcJ1FEp8UArcJDFnzLCrqwt1pyMa68CekY9fsyZYhjqBTomZpCxTi52uFYJ9a4CaP8CFdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otbW6EnHE8JVE9zN4TENXKTLwamzJPdh9dxbZcVEHLeK662gqKQ72wEz1wnEwf5ezAv6EzT9FvSzv3X51wfvUgx",
  "key1": "2zWKSAkh474nKUivVbKWKiPXjreihTo7HRG4xsAeF3z5KioWJy7bRYHdmDzPgj66eq1w1m2WZjW2LLHfKiepgjy4",
  "key2": "Rm8aFmEEAK6QGF2etnu13rLRFnLqhoEAidmyVcKS5K35t7ZCseJz7pa1ouAhSHJ88zyKocFZ1HS4JShL5qdW65P",
  "key3": "33WwaCYUCKxevo4VveE1Z1YN7MLH3icMDVcjbXSQ7KNno5bU7ThGvjdyj5mSnDpX8QJe21XdwbcQPhDXXH3bzcHS",
  "key4": "2WSdeXJCG5K82yS78g9yHzaMHjTFFKqttwZyMvhBXwHCviQ7EEgLtHsf2D1k3xQkdzV5KCnfr91a6Jm8HZe7Lgv3",
  "key5": "2kMcRdoWYjVt3BKYZxMFWC3CaX551SEPxmwiymy6yWQ7UVWz2pCRYy9qiZxWpp8kLyhnbsRYq9grcssW9crVPRSN",
  "key6": "4ZRfydveCyaNjQTCMfXSFjCEAnLxxABsdrQANLiwKvhq2q4KTvbE4jdvULFkWAVkpefbYWqbY41hdqxL8djmkBYz",
  "key7": "4gmdJw5VySWoYzUut5Y19N2cxj6P46XbpZ3fbnM3cUpTsQtN6Y467bKFrWYUdKz31PVaRzUbhwfmvf3qUTPyoG8j",
  "key8": "8G6kawa2AwEscibQXHJP5Q7ibZzVtWdUHs5YAf9rkGJSQ9atKDV9EPrv4qDX3wnFNwBLhY5WfuoE6G1VH7nwsfN",
  "key9": "461Wf6K1j61Kvm1K6E6WtYbLJf9q71h1dRvxRat8G4NGnSiXwpaBbAzcx3iDaXKxQmX6JFfYWkJZsAbMHuuEfmQE",
  "key10": "5PwwK6DjBQaEFg2jH9CFwfPaXZszmCCKxQK47GhMNdTeH5ciwLVNvAm47rXdVdt9D9HxT7bmV72Jq4Zk5PnMCS2J",
  "key11": "ZJp2zXKdzUTd72EqYqSvVY3iHEA3UBhNAKYSccfFsFBvK79ZoFfkfyqiwHsKQ3ryTYcd2dVfA7eyHmZjHNAKFKe",
  "key12": "3YT1MJzHz5ZC3E6VpPuaXcruLzPy8MTKVXKJHEJBpzB8hoSNwQSuWhkgwsv9UBqYst5S1RPycM5wYNa5izeJsF2D",
  "key13": "5aQ4tvYMjutg5hC9mKM1j9aUkUSSKcy2q1Nt6yqMWD8XU4uT2vkLr33yymy41moUzXJAfW9Vsf4uJiURkkG5EQLM",
  "key14": "2jTVZDtPDtVuoZKxeVpuanX77tmCNuzNNMeUK4QChhZrxnzjW9Js5EFeQwDuf461qvrqn68GQ6icf7q3LAnjWoxV",
  "key15": "4QWEncJBGtevyocnknzmdRjSL1oNWzqmM4t6RMhvxiqKdubcPipxGTSqSdez8CKMmc8n3o8jBN3FtnoZBhvm363K",
  "key16": "4VLYHXg9WMfdoezobkV1mu4eT5t4vPoKuDF3G4UsFC6kVfkVjqFchrLHvQv8kHz1Y96TY29xXr99CYjx9Zsiz2gS",
  "key17": "4XJ1ozmALRKtH164btKPenu6kFA3FfNsKsSyLHb2BeAAJ67i89cwvBeL1iMkDuSLMxcRsfLXX5smSLffazDZ259x",
  "key18": "4f6k3zdSjUm7mETicnwws77mTTkJxMzq8ASS3Z4Sr8JpaPmeD2cnrj9C2MdwRV3kNjhiAU2DPXwsEyk4daBWVsGn",
  "key19": "3ufcNpwwVPFPZJGFAm7XjBUWcCk1a24cB5wPsuaan7gcEdezKigaU1t7gokx6vZ9Rk2HQNzbvKz6o9yojT4gCYZ3",
  "key20": "4gXSNR7bFZ5omq53qoFqs3zceV1iFwVmPmBWQXcCa7pSodi3Civoyca92bnVL9ouHkcZdEkNM95qX2Zuvc6dzeYf",
  "key21": "smJbG83MH5wXhzRrcEWbPy7jZ4AnBm7VQCkQRU7JiZ3XZgZQLL2fJjpwQ1VfMPPYMYzej6jPKf7nvvgLEXrM4Qs",
  "key22": "4xn7F3UNSpmpjbvGXnAsCL5pGDt6HqvrdVQvHYz25oN9aj2s2f7QnTceeSbPah8AWgcBvBJkfRF1Bd7G7z1coTeB",
  "key23": "4g4mJ1b1yjAG5zjZwZDeSXGPQMRVhKcKejQaM2DyF3YBDirSUVVQ1DrNxAnajTajjwmNG8vXhiWC7Y1VBfA2op5d",
  "key24": "4ZqP7YpJJZHJV2f156KBANdiT8U4esXaBYCDkLrhHbppMTETuSGuUmDcCbhQ2vc8dqgjuJ2a7b1xxPBbn9HrP55L",
  "key25": "4X4Yi4TsD8R4qRtkbwHCJaF6F9PDJ4TxiqUXc5DFSYpr37eXw1X5eJ8zGkx43Lz3gGTrqAb9BytrifHpiBqqk2Aa"
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
