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
    "XJCvqF2sD8VJHYvFFLbYQmkgm1kXunuXQwYH64rEKkHj8SSp6NAxoUPmkFXAqHXqard1nX1SMU53ttBsBVmoLRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3PTdrJAqjdN3obt42ux42Fes7FtscM1aukQzX9DhBZvmzaC8bRZvQ2hURojokYua4L3inWskoBmi87dvserm8f",
  "key1": "5x5Tay6hZ6dKyuHfoGQx5WsHQQvvzQMR6DrPVjGKdy4KtkhW3AToKU7fZU7Q5AooYaAiAdGAcKVbvYub5WuCvWHC",
  "key2": "2SHCQVGAte4RBTGripNSDcju17LCUoUubVXQUr5DWzVxHDfav2v4Sdup1RrmKy735U3zvprwT1QeKhTH6VW5rJ3",
  "key3": "2LydtFgNi8QW9EczM6YTxvoxoZRn9AS6VQC5VjKPmK497Mv2kxv8ocNWPkbZUUX7UKqPTmZ4noy6wQRr6816Hrgk",
  "key4": "PLTL1gCoTd5hT86MQ4S2woqjYbhbcTyxbdoQQViMNQPqAGqxKhR9LAenN8yH8LAUq7xZGpAZqBbzzQ64w52KZGH",
  "key5": "5uu44SAaUn4Z4QJa3nFixfkYXFEQfooeGJimuccSXJHg51W8EjKzs24nDJMrymFjfkPAEW39pqYvoSu35wY1Zm7y",
  "key6": "65vRNVGpPvRJAfJw9m6uLysZfrVhRfGchFwKsjoXdJBTLucnVpH3vNQ71APanSkPi4nxDk8xH1kEoDdZ1rjiqVza",
  "key7": "5Wjei4HRPA5UJCCVxgWENof226ZsKRcYKRcAhtNsy9rBEXrGrW5N58r41DUpQ5b6kqcH7RcjdF1YTBnzTy8hK7hX",
  "key8": "2XtJnwU3Gwszgnncryf7A8Rd8fuDf93gEFc8jW47AAThUJLpPG2dA9aAZF7VxQukVCZ72AVrWaUpXNefg3whKFQA",
  "key9": "5P3yPS4hHEKvBrU4UdwQJuL2SY4mR2ZqG1SNpwdrQdhmvACq1X1REBLAUyNttMnbH72S1H2YzSpa4qP7eHZbTt4g",
  "key10": "44RyEEidU1ykPsk9hLA6XTWkzmdMk28aKC42ia5SCqZS9bQnMqsaF1B6zmUTgXwjKNotHG6hmB8LjjUSJNbnWXaZ",
  "key11": "5Y1WuMXGW6ZzPibsptTW6QtvMC6TW9o6Pt9vpUhbB2KVm2kwFVzdELFDGmpcUskRxmJ1JQwJrKo1S4bivPzrFrL8",
  "key12": "2GUyochK6777KueBCVDyKdTzj3Q1CmDiaLQVmcBfmiZhQzSjZyW4Rz6kNwpmQ3f4dyjAauLkZkCHFQoyYnbTtFVf",
  "key13": "4jR9Y54iQBqR6orkWKAYGZwfNuCLLku4LNryQJVVsfAtrDREXvpqw6LDXnaE82WWhz6CdtCbbqwcNUGSWCTLNjTg",
  "key14": "4PdqDeHnAf43Phx5Z5nMyfg5A8MJovQK1N6fSEvb1ac6VY52z14vuoPgifuyJArDqG1jTjY8R1brkBur21qTGER7",
  "key15": "2C1rH3tU6WTyCvuQwcR8ymVQchuXXjFEjjdPBvJ2rkRpXqHy59LdX2WU6jUHPC7b8o3VbQM1vPAUCi3aH5sGXEeZ",
  "key16": "5MWfYkwRYKRH8rjKxVr6EYshzvzExW96eDwZxCFywr1LxcNHEfZbPzmXegD7AqFgz4iktA9yik4ca3Aj9n5ekePQ",
  "key17": "3gXfCmKpcPWVt2W5TeBhUn7gRt423YrqiwLkfPabzGEDP3SLmUkMVcTMdufTWpJsJvPwWBAqKVXm5LRMjy7Jbg5H",
  "key18": "55WXeTU6a2NPPtJ5Xs3ERqLdifQqbXVeo1V2daHGWDfco3rWeFBfNDv7Cpz6NdgMvJyvh3hb1y84T2koFJu1nSLw",
  "key19": "3FUpgvPQ4RhSFN8h9U2Ahsn5kXeAcFodQtpsJrNvEjEFRKbvBUn1KkpecxErbutuAoWV16p7LY7geXXzWtYYfE7x",
  "key20": "5hMX6HEgosZgTzQsM6nwRE9j6GCo8R2ggaXQCDWUCVSuATZgTQFZbNLSwQU4veR9qHZkcdG3cdTt3CcrQGsDxVFt",
  "key21": "387RA9vhQmsLpcNHsBRQmhGpJPoQwVo8umU35GR7LLYhSMr5VHoqBhUVExNxLLUyePP2R6Yz72LHabAxGaBDHvrj",
  "key22": "5v4rHunYdnF1EsUJG4ZMRM9nBFn7JyAPjnCeGAfhNT2JDH5mZqwczzZxyeQvDcdVR7yHrwFeVqmQ5htt455ZytiV",
  "key23": "2HXiF3Ykz3wibMrJrk1HiWPY27kkc5v9BHAZusSYvqTcqPxNVLD2kpNwcfRocbnRMjZG8mdNm1UULtz4rvoBtF4t",
  "key24": "3ZWTtqwB9AA7z4HjqDtUAgm6rt1bkxvgagmKA7EUzuafEibxiYuswpqk56Wwohp13YDpFYdycUwp6eJ6qjT5QyFM",
  "key25": "2uqHbpX62P2ATvXKMLhFvrKTJftCc5enM7DkyrcHve6o1kY6dydK7hD6Hu6YGcXLs3g9CbQbtFcHS9SFk9WYtLGp",
  "key26": "5ovxMb9BUCcAEgEX2rg2XxmyfSDoo7ATYUarv6sk2enH8gruYa3oBgwjtRYpr4aDb482V8cG2xjJkkZhEzuPY6Gp",
  "key27": "5sFS2KjtobsfW9ZZTDUcdheSU2w4ZtsixtnpaAqxzNRQkUbJHpGJ6DufN8CV85MhU25djQevDHeP6up3DZuedUuM",
  "key28": "2pjnp8X5Y7inFD4DpmVxVpqf6KNLoifvxE5ozReGfLDtgbHPxCCfNd9Jbbd1GJmDD7JXLdh8WVJnZKV4BQav1DHU",
  "key29": "42jaZwTMQGpH1pVRxTBHseaXQqcWptv51cJg4PVGX2Qw4JPu27oPE2TwgxQXhoguKeDEtieFMsQLUpSJ7ySfDH5M",
  "key30": "zR4WwmSfxMexdFonXh3d2Q6zm42Nps1YEkNxLyfhtwQVyQt6DhhHbFhjJvsKCpjbWEbFHsF7eiZ4ncukDcK65AU",
  "key31": "2HbizkFYnwXG3RYZRdbCy7Ls62rK95FQbfYNDikEhZJYM2wRCeqxm2wbuA6g3rku9EE1YpKRywbzh6KDki6YyqLF",
  "key32": "5GuaMkpqUq46gdTx71DWUDRWjoEbF8pRJMN5DEVu5NJGaq9rVYUb2qHsS85bPh3vpwWLXofNGuci1v8aJvaaC8eq",
  "key33": "35eg6L2C5bFdKBxzKuMeizCk5aNTiCjoW8xGAj6o8uptJjaiSjWcPiWivcvzgfSGAwUFQudD7un5NZ8Fv66jHbBQ",
  "key34": "2idBciPnQaXY6RYwTVqqtrApNQjVKHNWop4JygGDxTtxehZY3anbQcfbxSBju9CgN99eQxkmBFVoK9fTPBz6GNxt"
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
