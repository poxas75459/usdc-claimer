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
    "AXR11PMY3DhnJngG8TDk9PEtdpQU5SvePRgfc5yUqGTaBjitZ94MQ4wra2GUBX485AzvYPdd1mec6xU33auzAhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEVyqEfEeNMwYT4GZ3YRpKeuTy4oKCzhb5dnWqY6LXay7ELAcdjcLz5hyDeB6icEKmYv8QmxEu7TsQXxmPmVpTJ",
  "key1": "2Vp9KS9sPF6px6vyZv95kGoHe5QHBSfNtPZi6kze4gQhiD1tQqzSsMjvfq3TQAjzoRP6E5bkEKuX1Ai9Z2FCgKtX",
  "key2": "bvCA82k3W4wEPsv5BbX1siyKz43DoRdMGEDjAtWG6R5rrejHUwCNP9YTsFnbWTASgdD97VfzZe87EwhCMCtrEzv",
  "key3": "3ZEF5chBkHNAnK9AKTqP3KFWeq2HXZJ4WvKxkFHR9KJ5pBjR8bKL5gZxdWF6u19KesKHYKSRe9LUFYUhRiaTBJp9",
  "key4": "67LXvXZBVPp2Jjtxb1kZq8iA64ZK3fxW3SAMVVBRQzs6qX33DwoLg6BzV88ihz37GkcAhZyTPvTkYUMKuNRL27Qr",
  "key5": "4bGxRqoT8QJfbwniBTT4sasjXro8Kfiwhh4HbQrTBscYfbxakn4CzhwbUF234xuEreetMEnYxWmiFqZa4sTc9o2D",
  "key6": "374imgQ4UrP7Y5Pkti8uNq2bJkg1DWDzgqBSywAmqoPdFohTjRfcXNVhbfA1QfgpbmQyWcgKenjnJ54TuZF9sEh2",
  "key7": "43LLsjfyAeME8TLaqB8odtHfpyf1CBPdaBSgvU4bn1SccfsXAindMhfRHbFrEeY8Tpz4G9XD7ydz8thJPrS5D4U5",
  "key8": "4ajy2vVZB4C79cNmRevNmp4N9kEPbCHjKcbmK32a6AKECq5215GRJn3yc8h1sTZn9ro6i1LcbLzGCUhWab2h2zYe",
  "key9": "2oGCxWiSYxgi3oC69jbMNsfunZssRpDRq6rveLD6JrCgEK45ohMpoGtNDgc7yUuGa4XDNUwbhggdpTwRc4nBLNcV",
  "key10": "u6G8o5rgykiWxEqHz8HYZZ8qQEXXi4JR3qda99JKCVMJPHoKSwRmF2D1V4DCjUhtPhbBXpvrujPycaNCVspvKHY",
  "key11": "39yKT3nz6LZLsNP8iy9qCJQJxsCjt1ATNaRgHpWYAKwEQrtcQvwuXEGUGfPZXzdQnYr1A5NkZexUA3iuTGTLrKb2",
  "key12": "4aCfBBcufdkdbbNs7JUe1Z5gV4XX8UhKHjCAenA24Lz8KHUob81X5s2ob6WCzPrUJautWv1n9RmZHrNcxigBCa46",
  "key13": "3cEDXJEZAbyWxXEn9CnUtewWYYTC1S2WXNCmQuK1GY7gzkJrfWAUuBEZ2p7TMHScGgRiibWD9C2vLthyqN6khRRQ",
  "key14": "v3BpcAJ8npXuu8e2D97evB5Rbo4XL49Txpy7XboLDTZoSnfU6PBTQrgaLQaJkjDCsdRLRfr4gWFUebgh3hyejLa",
  "key15": "6Pw4t5GPUCbAaPWiFjGPfadpWHvLeZhCFo3xZ5VYp79v1mcRL1ZjHAVmpH3DdHxEXBt4XHTc3YRdrkGKpcSqXxf",
  "key16": "8jXiXXcQEJ3gpQVU9JZZdCne4hFayRXPCb5xfpXusaKyHY19JTdm6FJpaS5Fh4NCvbm6R4CfTtUHsKqH3A3daUx",
  "key17": "4Uwg46E5oTRDmfLXf38SkfdGHT7EZVaxr2vntrkGsLV32Kou38jLFjWqbn6Y7bV9vzcuvXoPhNXnYfKFSvoAhgGs",
  "key18": "WAtpoF3E1Pu7Xao871b4PUXD52p2eQuLu93RxS3fzmghUVUSWcx45TitHBcKP4QAi73jQrgfHPi47oYbnsEbNz6",
  "key19": "3iDmaWxdWiCuRFXmQTmZFdfBpHSMMssBmKZaFxpAtyW8geJ23waW95h4jSnWUZaugteEvRbd57CCqM42rqjofx5p",
  "key20": "5Qz5dmwp5dDQqrGoE1A2DgsV7doEf1KKsF9kpz2phtfNT4K6Jw7tdVdV5TLfBBskhgersUnKfFrd51F1U7pLb4Er",
  "key21": "5WXRiTEnKtRCa72BGzZEeEnJ17mtBXHUoxCRzkGTtovXp8Ux9XU4bwtfbvW4NQYrZYUrCRT5eJctoHnnd4p4aZQH",
  "key22": "4U27pNipVRDzFHHa2fcs8cRuFmXmRghi6wvvbVHFuyfN866J4tAmD2GLQfW1XLv3GNxuXRevby9FL1wfSiuVf3pZ",
  "key23": "2XLyWinqbkfqZJALsfarzE3bPBuKkG8X6Bqumd5k5LQqovMaa2s5tvotSHWWLQecLfN5xjg8TK7k291xBhPHCYJi",
  "key24": "2hfcsp9Xd9cCFu1Fp9XDJabFncnXFhUW4EbpAfLu5cYzVfw7fy65PixAvJ4tcJcypeDGkZQQi5ZFAvoaVNZMC5bh",
  "key25": "4ofovLJy6WQHrgFjehE5ctw36YR5trQrp5jE6c1NApX2GBhM3LT3Zkdco6SMfYX6SjaUEcdE1dEcJyUPCLzV27aE",
  "key26": "edGxU5NdJFJDsiXP7jpfqsvGLg19rHQaUebqBayeGRp8rv8krqfQbmRostunNZN8WzdtLBouahSmdTWHZvocMKo",
  "key27": "5yAJCE6oSv4VbXyjD542Qqu3SLdv6iVP5qZc7uTyKQCgcTfH3sADcYnBEVcPmpaq4RhKYAFmWCa14H5D6Ztn5VrT",
  "key28": "26V83BArRxXkBv58G1Q9duTo4sUR2Ew8GCwiA4ZG1QnN8AboGGkmv9KKG6YuyWqqGZFWwB4ufc1PhYsop7vUirj6",
  "key29": "4ymRr766n2GSXvTqhDZ2nyLUj24WSvt8nDukxgqXqXmKrzjBAKvNc6zxmBAHiSBxbvn8tyrKNG6T1F8krW46d7ji",
  "key30": "3R4n71XFY1SBSMXUT5yy59Bau8xgoQDqWuPfyXdnmAiFpawmxrXwqa3MwM3DErSrJjCBUjU82LTisCEk1EETXUjm",
  "key31": "5FYGvro9zpRyWMtFCtxZvc62TZqcvh9ehRiwGpJB3ogxDTc1uDxNgGHhULJWwUXVfZy3inKNftwok2MK33DodaFC",
  "key32": "47BeUSLfAJ9cHjKPxLwqRK7vmhFu4m7TQYEbU36geTVK93XGqjA3NfGUG5fSpXHNcuM5Q2Hn1CEQ1LR5JXYmypiE",
  "key33": "23TJfYY9LZWxuaTQeqQNotEm9xU7YdzDjH5XGRCdvfHtumgen6pLYXZqaBbbEsizTUdNG4SQsRxHwbE6jbgv9RKd",
  "key34": "5DPPTZKQX1WqJnEsrJR6DiMEqx8mTTUymXxvztkD4gHDqw3c4rFy3cGAp7N6J9jWF1Ud5CTLVeGo9mnAWhRNcP8y",
  "key35": "5MvFBUuFethMwLg7u33vZFxaJkyGXhLxX8vT68gJfzHb5pamBbeyDnEvVgk2kuqKGb31GS6u817SUcGXWumD8Y9C",
  "key36": "2rGRK75xLmCqTGEz9Kjab98SnQmVVmbUQ8FZZTkjadp8vvYT112ERtCkXZdZcQQJUPSLtbg4vYyTTjVRxYkaUeNQ",
  "key37": "2RfiZ7p9pqk6MFcaFRWyYn3Gw24GrD5VhVFttTVXPReZzBKxfuiWsLgnEDZZA2XKhAgJxR5rZFS4pBDraM1BBg61",
  "key38": "29Q3k15DMCB9CyvmVszq4S7AQVnnf81wTnoNVUCNpgsfsbwvf3aMm4sypa1uh3SLEVDm5iqGDxUbNjrt3FuFNAow",
  "key39": "46sv5Pef6Pz77iifH6JNQ8tnvRASovD6nQtmLF2AELun7LpyTFHwuzPVCbB6RTEfNAim7fKBayKdnb9wxmr1cd5P",
  "key40": "5D1LrANMX8bAgRJcc6UyEoQZJYxwrvpvyU49Cgc7QSZKFJgTbhywonroferuJySWXpRCe8CNgjjYG3MHqMvtTFpE",
  "key41": "JGD6qK4jW93uB68RZqi5KQBvfpPsi5e2jiQ4pU2AmLM2EsdvbvwYxqQCf8mDJeL5wWrXn7TnAWPoAeNc5Pe6C17"
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
