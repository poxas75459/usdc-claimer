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
    "TqqLW31J9XJRSGLqVdNKdfkwgF2kVSXH4UHvF3PuorJHkPFHm3zy24aYF5iu2dV7Jw7nDV9cDqGNHSGWtPxcnRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aLsCUopnpUQXGb3Z2nKje3dq91p8TBYZ25pTmDTMSRQ2tk5BkHxruGki44DC1aHfxfYiU5pNvYFER2ANuCA8WES",
  "key1": "2XSuSf6vEaoxiqLCZ8524YHsD7HYczop2ikU5sw9rTo13WYwcajnoeBjyirk8t7QA7NNxb24NEUizPXLDwV2NCHJ",
  "key2": "2voxHHx5VgYHZzepApSt59KYPN7Jy7x26Enga8B9xTS98wxSeMtWNnNUzfGs4XZh63oxeVPKBxqjcp2w4nhB6iCj",
  "key3": "YXeqPr5irLKpbeJ8S2fYZSPSrTAyMXZRTUbtkCG4qxY3bfKQNRQVFBJWwnoMMkG2kGrsy1xfD2QCdsw8uX3o6Us",
  "key4": "4qgHJEcFsowA4WEr45jSA7zxErR9TCmpizdNGQgQ848UKaAxLjwFvGxBzc7SH2eENhHwu4a6cHspec545naMrkkG",
  "key5": "nFCy3SzbuKGNH8d7jkRVcqpzTqEnwNmW7Y31qqmbf65cDq2X86BVAw3CUhpGQuBvEQadFs9RCjuAU4nDnqyL1QX",
  "key6": "3CXj458SvmMNbNKZiws2nYeLeNiDUBdcMc8ErQF86vUfZTEsPrWiF3DqzB9nPCejz571Y6mtR2d9wX1XqsWqfQH2",
  "key7": "41wcs3V8DxN83abGhx3bKyHDBqV4YMVYJy53TmEBDgPg4RQmfSJSy1SGyhhkdYzJPNXRYAK8csPBD6GAQmQ42a9k",
  "key8": "384EkBvD5yMyJw3dWm9UoHtKM75sqnWkY8qpSJqy91YewjBnn543AbzsH3TCL8yiXUth5JTCn5AC25teeK6LVUm3",
  "key9": "2s97jYnhkxjvCTJ1FkSao9WVgYduxDz6wQ8ra6FVoK5SudPwv8FfgnXBoYLe6ZqAEk6phJdiYxsCtvfZA6X1b3De",
  "key10": "3hgG3QsZntw3TGu7HHjsn2XVC5G1fA6LEzPaXkcDgDEhCQvvwuAsc8Kt16xs1g3tkTa4s452RXh51oYD6UeQftia",
  "key11": "54RDNG3v4n25ZKehEzbADkQ847C9g9FUpaQrzRTGH1KYPK2y4MUNojNxfmCpTXnXvad3dBRjs4aqBh65buUCRxUE",
  "key12": "Q88kLsSck7h59x3TSH6JBfSb49QqaQmXzF1gCm8AJh6hQNmj66uzMB1j6mnuGWtqvBpj83PaofAz73NQE7XKxiz",
  "key13": "2zJzJ2shhEoud5qSHumdfH6JdyWTzM5gDmnhSAk5XhykD2spDACa6AyuqRvXtzQ1wXH1GGucbuCE3ESREKJy9zdL",
  "key14": "5wcLKH7ycznJS5YnxMLznfye1UkDNCDeX2NM7E2SmiBvxLFeuJHpF1sMnGCehg8F7mkgp8Uz4hfLy45XisjPL9AQ",
  "key15": "aUbc4vYBf9ds9pp94q3q23wgGXk6uU5giG8UYX7WNjozNQo1FW7iXFBCMEjmxzxAvavV8LMdKPCqm5Bg8GPHnmz",
  "key16": "PSbVHHyZ8uxwKThuLgV1PPjamokB8r5xEEFS92RhJgXPuQ6f9FqQYiMMcYQ6Ka8w2B3NmmBx5C7jez8iw9fk77u",
  "key17": "2P1REjLTSLevNKdYUHbiznVv8K3rsG1MwzPpka1uKk5w9casKho5ig7p5zNhHc4D9wgEa96kjp6AGjJ7KMyzxSRc",
  "key18": "5BsLsHenbuZsWghvpWPxT17Y1mLySLjNi6oGGnWoNEJGSoUjCzi3kR5iKbt7XimUYQmHskqD9156nfbAcbWknRBG",
  "key19": "4eJFduTprCyQ3ttRyAbbx9WCztZKMQUDB6ok2JtRVgFyE9PEoa53H7SA7rj4ujNJkoackFBeoeWpQdCK7UGYaqQJ",
  "key20": "4tWAPjpk5pqbnvZ7Rn7hAPct1SzZV7evXvW5M3nSQp5o8WyxKujueJRGEjbHJfzjzxW6Dmyor5j2SXWqNSPr3CDb",
  "key21": "5nRuKm21Fv86mfAaaYB6LTgyCakvhsByENTmr7YS28JE1WrTz4YHEJUxw5G3JSNfRBEpi3n1XCW2FgLsomSzzjzK",
  "key22": "41zZvEu82vhsgmmQih8pUzv4YD6pk6z78533Z8RKMw5XBT6zkgiijLMw3PoemYikHvp6ft63BZUxYX8WhPYpYQU6",
  "key23": "4bF4kYZoYEQHSchefD3RLDELEcUEroWtGJJDtJTBKhm5NcFaNJk2aGxQN1qDZ6qanPt9uPReXPpJv3EfTJhczUvG",
  "key24": "3GsoadMGfzto9Q8CN5fzjjX6bVPovybuggNd4GVN8GJBDiV7im3kxTy5pcXWG3gratBE9836JkfrVcLk2WxDhF5x",
  "key25": "5v3bdSJQVGwuCVmm7YiVMdygZqp77Qx7Bm7dLmH8N7p772gjPf3vasWN4hygB51JKaJznMdp3UP7z88525QbZy1t",
  "key26": "pb5ggjBSHoPhuEqDJeJsV3C3L1oncDtsLj3mm2DN2UCj4uhrPKkGNcD4V17NpBSh9w8wSteVavw1XYxTwuDBZPk",
  "key27": "4cvp8KHspRpQgqbqPi5PwaPAGNGF5RqqMTjwfKKdtuPjHTaKkRtKTf9rgF77XhkwuvRNPB1xRsomsisrVenbSAK3",
  "key28": "4fabzQiu3hX8nf35UrGwnAH6ThZUUj9Vw8c1WK2LyZTRbSw9K5ds9dwnZ8pjSDVqconLbLyN6RPqrpjxbEXfCheb",
  "key29": "3WNc4UEkZ14rV2XiPj7ECfinWsFjo3HQmLhNoPaRf4xsVhaVTMNKTFqCDMhvGNxUfi4aJup5LNbKa2LgPNSUW59P"
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
