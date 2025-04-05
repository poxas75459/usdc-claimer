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
    "4buJ9z8U1BYTcftsLbXMcxfd4BCdzfR9317UCjiwbdJ6ERLkUCraH9B84W43BGPfdr5kPHSgyQWFsoonKR5CHs1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MCWNPTZvfMwEMh4K2nVLiVEmXz5vntihXUb1QBuRkCtAkJs8GHbwPg3KZjk6tuGFq34RvamUEXfJ5HH79Nm31FJ",
  "key1": "2PjgmKZr8wibVivsMmj7xKfb5cXE29jGAcK7SJjWaMRBCPFSYNfbxKjYLSFfXXZUwdPsMBAnvvfGqKYXe4o32xmN",
  "key2": "24mJQ3i8uLzDa266a6sQbgffScy8knoRwi4gJXZhH5iMQjw1Jf8WkPSfkQpespnrP4omM7NA5DjRtAdwei2vwDCx",
  "key3": "2rVY8EboakX5kEjYJBwF5ZXeSBhd9VGDxpaCfmTZPoEus1qYffEH7PHx2wXGNrsHSZnd8hixUih8Vn58R2pBysGE",
  "key4": "4WQkDG5ZAx7Ed3sVnpsmDzdYsbuEPuMMzSAzUisHhW5Ce9EycZjXaNRP35VtUFognRCRT6CXGUR1o1pA5LQYP6ze",
  "key5": "5nu8AVqvQhrZdUK6R1cxFGf7QffSbpHbDsbBicf2fyRxkYT3FjmF3uw2kfreUJYvxufsHEKVaK21jU4nPdDGWp3i",
  "key6": "wfUcCxrMW2CRapqakXBDnfu9pdov1n2cp2sVdW2szNhBLY3jhCXn1DZynJ5wmieZPwzx8AXP82gMArLEJ9ryUHb",
  "key7": "4nThwVj7cPZGYctVio37oE8KGnYquuzwQBYHtHpwLrYFEgitWdWhECNV7VGXVcwy82xN31j21jEvU6uirAmqrqBx",
  "key8": "MNuvCyh9SYmRB5cpSZ8RXmZP8FzGBefriCQ5scZddW8V1pds43y1UdX95NvLP9tHgzH5RLZuuWPzhn9hfCDa4TS",
  "key9": "64gDf8eunm5hq3vSJCA4Ah7WAFLVczMkKdf43SSSgBeAUisqXmVGvoBBfnBs78BtHrHvVFYU1dpp16PbNqfgRJXG",
  "key10": "3pbEN5nkog3qJzxdm2KR5Qm2yETzvbP95uWMDeWnWXZU8HU2RtU5ikmxD5ZGCvndQhZNJUs38CUHjXp7PAGiFxBp",
  "key11": "51CAYL18bxjNbZExpmCDYrqmA5F2PMhcC4RBQgkiE9E3bmNGdAoE78ebebPLqpgCE4Ft7cecm6oUqA3kJrawKkrZ",
  "key12": "Bf2odoLLJnFhU6j1wKpMooAcWYggCuAJrE415M5ufTajjrV9ASf734T93pGAtkeEDyYZEcTimPmUMdBrmUKWwQB",
  "key13": "2hV25Q2Wzunn1pN2t6b2a3LRYiAQ31X4TRF24m7yZgXDXPdpe3q9u8S6XvWdEpGyqgE5nUu5kNd19jpfgMchtfkt",
  "key14": "5gVKSn2cfM1kUS3HZFZNGYPoCUxfMyKkc8ZBZWBPiQFhawtJiFHnye1Do1rURYRwun9JL4v5ujRV7U3zHoAQPK28",
  "key15": "22FgjVXKFveAcNHzc1cQZVZghBftwPr5te7X9C4qEXvbxFMw36W9uW6qmisZ9CKUS1ohqxuZ96MmMG6NauRE3kQk",
  "key16": "CvKgUm6VzMsZWUVZoFxheQuBVRhuSPs4Kt4iW7fVa4YvyEZVhi4kjxfLzVRqxdnXhvZzmArCQDjSXV5NvcBcNHE",
  "key17": "2BhRqBnAGqrUDumg5cw2Pea6yhHjx5U3WYacrSzP5g6C2NmczuUrGdZ6nX5UXZZKkoj6sV4PorNHKA5ZDitf2XWv",
  "key18": "3AYShb6hPv97wB2Z5kCREiTSjcdpdrAQ4wwzARymVu5vP57dRy6RUFURcdsBrBnALM4w2dsE2qp2dinC8LfrW7Lw",
  "key19": "32tm3JQcLEiKpURYCy9ALiZAtbmQ69PJgahs19LDiZBBkwSbaDduyLS5BFVH6Q6LZrNsoLjFqGepuVQNsLP1Mj97",
  "key20": "28ShYY5kjMLKednZcxmgALUtj9U3FSLsJ5s1xNfc7tzgcMLehS9GEjMi1v79eQhUbaiZYxSJDqLJhzdQefTLAPey",
  "key21": "4kPE8owUPDVcw5q6wQqG9wbfYiqy59fJxYgksGEiJX5pUK4CucA5ytvxniQ3hMezmgcHDzhZHM2WgdPdXe4QfPQy",
  "key22": "37c8UtMNeD9FKd34xHs7ShuUUT3z5xC2es7UJZjUyLxWCd5j4xMZTEnWshm6RPqjVcjTv5Z8RfXUNVDEwx189ZAL",
  "key23": "4qGhQWLqXCJWv5fN67xdQYxWvDRbru5WZ8nsCfH3FgX9H2cREuTTojxuTUyGyd5GjfW4bwHu4Lzg3hqjc9v1L5pd",
  "key24": "4D2axDEHtJuTiniwGC2JiAcpXBmGZdvyAePZpzbUR6xhNsULjCFNPtvJUVXBqiu8eLynVdg6JsVHbMrnZrsU3wjN",
  "key25": "vbM27eudZLUdHDgfsqce56YY9oPXdYH58FbbPvfaK7LPT1DroH8LYTsfr92u6yDwk5HFfacLTPUPPtktTNb245E",
  "key26": "512bphYoU9ihHLWjs1jkYZbooHJK1oh8ASkqrNAbeX2CyncjHMVaefJZDaNbQrwMTp5fzhujDuhbe7yLL8TT8K2D",
  "key27": "RmAkQU5cn47jBh8pQ3GKF7zBi8he8rjEhkZUStNVTwWuKRxzYukVViHB3wtmsJUf9EZxZHix35G4qEnXwgNEXrj",
  "key28": "27p3GT4o3o1nZQMgCGvn5YMVub6xapNa9skUUPHVSsFKLSvceK8vbNHHquNg98c88ETiMjcEaVzq53NBzkgRbuH8"
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
