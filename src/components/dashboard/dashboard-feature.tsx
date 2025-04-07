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
    "2YJoQSE55KBakhC8K91nbwFbupaiXWtnXXRgmNHPcs3yY2Gc1T5RqdaMLftk5jDAhEF9qZKkxA6X83m8pog3jjUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hW5zUtNBUf5GEYKDeUTX4F4pTkqiV3FiV9iDAbQYrTSPoSnnnhRAPbjKMZuW1fQ1hSveKtFNv2c8qmWa2J9whkB",
  "key1": "5gF1GisyrRR2rnFSsbWwRAyopmBTqRECEWPjS6zpUy62cJf5EJeC8YjVbzBC53GNGJ5GZEbtVPH1NG7Dj1sLrhWh",
  "key2": "3WmU177xsHr6NR2sWwRKvPzLZ1msciX7861oQMpy8YG7fZE8S5S32UNn9GMBkVmTS83M3ieeHFtZZYWc5ZgsoRMN",
  "key3": "67BQkn1WCx3P6CWouksjhjA39jrXfSPekiKdZ5RBF4b26QsPVjRCe2YsN9PnfsseTP28RNTTxuuLgHEJjUtFxRzS",
  "key4": "hASZwvNUfV8VJDgGE6fbqUn81HxgdJDa8DiSQCDEhmo3Hr4A8U2q4rEspnNDqSYvYNraPuV18ghNeCCUYckX7aw",
  "key5": "2s9PT6Ce8GdYzcRUfakXjGp5VZm2T2Tqzvwvu8hH8fYCyKz3q6BhbkrArVXvpNfjqi3MG8VXXiK3oQ5YQCRWVJC6",
  "key6": "2aSwYdRqZTxUL3Yj8rC6Hpse15nXfMh6V3zMWxw5ad41mpWociBbCVGpgTLwEBHuFpAiv784WnGvrAP8pfyV57Rg",
  "key7": "5isAjyVpn6cXwafirJ3bjK9EEmSJMbGCEpLf1g5W45wHvS8nELEQxkfw7Gc1kuAyBqXHWQT5HYnp22br871FJPYM",
  "key8": "5aoh4izcKE3QXs2RRzVoSGiP7a3wShVgk6KKec63YB7MV552kxVXR4vNs16SqGhHifWhR7wCZ6JGiubiVeoYK5ao",
  "key9": "23RZTm4xEbgHad6nTyC15rVgNfaq39rx6Q3fUNTGDytbGdWPh4wed7A4B83GjbJeuCJuHQ8AKr3fnREQtCVDc2e2",
  "key10": "25zve1iDLsBUMa4FCcKvoAJdiyWYgVr4YcfTww2jvVdZLpfhamqWdUj22QRP9GhiRcfrCmgeFXy2c4Lno15ernPf",
  "key11": "2j2jwP2A5u4yxLhC5E5rznvgwKCWbVjoM6bgLzno7HP9FqJGtUAmapPAgghMcAC2BCyBHM3w6YvBvBdewW3GS9pb",
  "key12": "s5jfpLdMqvFEbhRcAy2z9JdJLSz22p5Ab18SYDmgQV78xPawPmShVEuZjUwjHxHZUKcQSYmA14xSwYT8WcMjKs9",
  "key13": "4w2LiGLg7iKF24gC9VvF7RskdQsCzbfFdbyVXfKNhTt4brYhP3R9K6ZRt7ciTv7tq1YJxmCQQ8uKogUv5rFJyJS1",
  "key14": "4ETC9saGw5gkP7kyE96SxCJEUFgHDBZJMere7rgbU21sCwEJvuPYk6ujX9swFCGmqcR22At93SKExAzUgLuZeGr6",
  "key15": "VRYEBYDuRdhTVun1G3i2maYMNqvKBF39A4TGbMrThkcYJqqusK3zPuMnpWiEUoTuBtY5WT5QsLsSbhPc2dtST3K",
  "key16": "4k48fFMCrKPYFshK3uw3rubeYMfmbophxuFC5D9gkcYY6UhA6oFpc8cCr7DwsUoNM9SYBH7K5TnJ5F9rHKNx2t7i",
  "key17": "4tj2S6sN2XtgnUkwSDVuYquwU37dmxtkQiZZpwTkSowVpDhYDgcQGq1hRQhAhrVHx7uKTdGsSdcXCfqTtwkrfdik",
  "key18": "VsFfM51hW2qYXHg3PJ7wDCEEituTpv9Lus74CCrpA2Dy4bu5Nwo95QiXiseWgESe223sDKT3eHf3mCWxCxbuYLF",
  "key19": "2stxV1SuHgwdbkzFnZ82YMpZ9kofcZvmDxG7fJ6XRSqr3B5t5MiVCwbZLxRVD8yjSVvR5Sb1ocQAo3V9acmpJiUw",
  "key20": "4DwvbBbdjMKtAFb62jdsMkHbr52ydWPLR6DWUDfGT7onFrqGhgL3pTJgSgeFCtJW7gs8ve8NYZzUb3j5beEJonFY",
  "key21": "wQkBLJrpDKfz45aoXBBQs4JkxApqTm8ZitfqmCEA46K729U4XcE5X9jnghgHfyDQVKMZbVP3yAAoJBdfjLmrtva",
  "key22": "2JABgrsuAHM41f7hSVCvQeh6Hee65Li2n8QRBLiePwyDaP8YchmwK7rrRjEQvDwuryk6XuftrPv95wLq19v3AynP",
  "key23": "5zootuFwTYcmvhZYEsiL4G3QNxKGnCCdtCj7aiKsm9Q3J29ASby8tt2UdZo4XJoqtQztR6LGokDJQ7kygTBujaTM",
  "key24": "5s9eBTkzmZGGXE4dLUdSD9s7hfx5ttAcCL5i3zmSGewpXfUZGnzhMoXw9xUcT676GcHeJCQYyhyXixzcbfUwsNGF",
  "key25": "61qHLttEhKG1WwFN6RrtUWvLPy93wG2uAjfeVVdCUm59M3ixLNx1wZYXdqJJn1NoXXaUBrGfRmaNqpyJR44gdf2F",
  "key26": "4Tr4Kqtp8AnfU4tWsQRF3KnckDn3fn11Zj4JFFxpBFMHuFQGwsYG3jY72kKiGKSR3voMKotFcKALfSJLHLYd2aED",
  "key27": "51FKnqSYjSNiCRZN1WynRYjfDZc4LdeoMJBWBRoFvxwHDH2joethPndZQioQRNyGKFYRnayTaa6e57bAiyRrxECm",
  "key28": "4BUECpV4DXynDjtEy7CGvorirxDCXGqbbR7nHxHQaAjWeKaGSR3XdGvE3ZycFe26o8H1Qkh3TFbt1ibTMoF8YyLs",
  "key29": "44TBfhYyNi83NzDBoHBjBYus7CjArUN2jJfJ1HFVGCkEBf99Noiu5SEtwLk7pk17H6Y6jdj3uAFQ1K7HmJTfxni6",
  "key30": "2w53dvvPYerpRBq8miVzAsvyjBURXS5hKHjEjc58oW68eYbbeBiFPXG3tzPmSqzX32NQjVyzeWPruECgfjPNu6ys",
  "key31": "2dY8SYmEB4JS8KzjEatUZrroY987zGjYSDxUuE1EvLXee9AggjiJfWUfAstDt48whBY8iPAo9QDhaRrZLiCNAXQu",
  "key32": "2qs8ppTwYWNxnnNrhcswAG9k2odHcCUJuRignyPEfc6Gar5xZgRB12QkDwWsdCp8fRCP16NqM7uYZLYVxFXTdxmC",
  "key33": "Wuuz3F8ywuHpP9rcbSkvr432JjRy5eXgCRa6NTgv9Rc4fMhtGgKC5r97YR1efTrabwYee7QJzXSHZXu4cjCXRbT",
  "key34": "5HU24bwfFFK3yQAkkD97oKH5YXgL1EWKuetFLw9a2de76iCCxkeuie3stbzd1VBAz6b5J9ZaeX2EAgByNHUg9ece",
  "key35": "3CdrYBFcTRpUuf8cx8xhBxbvVm1QVGiZubuNANghCAi4S22FLyjH94kW6cvvCCcXPhc934xnzy2L77CRvDWeZWfb",
  "key36": "mrPYn9D7uFgyhuWYiC7dGrWvmCroBAgSdAoXQJ6R2VaKG9NRYyFG8vRuvFbVoa8WPF3xDF7P9Nv6Kq1W35EXcQA",
  "key37": "2dQmSma7QsVkZX3QMtnKjAhxLYLbzUZuBDwwCpmfHGNgEigt3RPfcZ67RLrmm4yNJ7pCAKVAWF7HsL9VZp5Lc8P3",
  "key38": "3CWG7uSZ8aMtHXVy9eP9LV3mQYJsCLc59ZCG1sVeCgi7ZZ2rh7FrjmD73y46ozx3M72AZJ7gBCbM62Y9KEwwchcv",
  "key39": "4xxskyvfoE51PRpw1uZmqJrwbncjA8MGNUtmvmt76x4jeMRpK3zA6jNnWdLqZgHCpsc5oaqhAqS6YZYu9nA1WwJU",
  "key40": "PhFFFAUocYEzUPQEGm8AbYiF2kxBztt8PwyMyC2eZ2DVEZ6raTT4Dj6wMZJNArvhEXdd6CwwanmKUR3KZDRoJJq",
  "key41": "EGhQP23oB3Ci9fA1ppSjU52CJt9qWHcsqBfwBaSAndxgARZfEmRY9THTNLvUCfJ6LkkSNg8KeWvfd4hBeYaSiTW",
  "key42": "3h5vTi7tCHgLcW8JTtxe3cWtWUw7aKhsXeDrrcpxDEMwJ8sENPFPACp9crkWQebRY1s7kYVBU52Y2be7LsGjGNNM"
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
