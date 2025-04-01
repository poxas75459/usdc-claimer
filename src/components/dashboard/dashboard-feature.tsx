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
    "2xELCQ3fBdmxymZ5jYij59VYBQ4fcKirAAPpJmPx22LAaVYD1UXz64LQ4V1TET4CYtd5GQFsVDLg8aFo53yttPaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gk9rouiyhNkziyronZPAHRCee9jA3UTfAvMfpkHsTXzgh9Kjq2utrFiC1g9C6tAFrnrfw8jdZrMbJXtrTZwFjz",
  "key1": "2uHRADc6ePG1Lw4G3Ax3NJ6Qq5j9KjVFaUbs96JhLj9xLVniwa7XKPM3ncHinh2pazYwtTVkkxhqVasistuDije6",
  "key2": "2G3QYPX8tgntrimNE7w9yoPM6sRrR7FJ7DZX93kSUFLdQKSACGdTUAwHDQu1Ah3qyH3jiv5HhTbRfPoqyMibTTkT",
  "key3": "xv15P45YseViv8bvQFsrNTLBbRShSRVvx2kBUi3EYMB423jj1dMCDgAb23ZePmfAJWQoDqR8pHTAJaXc2iei4Wv",
  "key4": "vfxcQbGuD4B4zxJMyP2QevEUQ5g73Ued1m7awKDA4UYcZQKJ3J75SVQHRo8RyCkSAEZK7CharLgjbg6oEjhEdQB",
  "key5": "59co9Wddu5V5M61gbxTevFDUdP8VvqDbwfM2gv4axiMLv3543DSR6rq7X5jbovBKdPDjDZqHeLiCbhkzXa66nACp",
  "key6": "2BpuVQPV16miFjXq7qHMAs8X24zrARb576D4NXWND2zZZJTAa9gJn2xgUKrwdAet38L4mEHBnKLyWZqFafucvgYb",
  "key7": "5wM4wJsCwQWLwXoqguGsbSF7nKBB9pCnD49RSfUTAFTWjDjY7oe2BhjVs3YUECDJzeyAzQ7ZE246JCipWaqfbXnN",
  "key8": "2uonBYBHXP5qidTmvKiS9HUzKZ7U1aoieArrJdMitpCJQh6bq1KBtb4E56CwowY3MF7pchcTtG6dE8ziNptws6gx",
  "key9": "atDSSag947tEQhYGLknuEQt31NPTYVe3w7WBDW7Kk8ooaxFp7btmZ2ruTxoh3kio998TBzNLEExBFMwQWT5q38L",
  "key10": "3z5gp9r178Cg7RrHJTj2dK7DqNo585gPWg1CJMTZ5QyxQTFVfUS3dStJ749soexoyZWF7E9r2gZoWsp6gQ9jpXgn",
  "key11": "4PbACBDjPbThGtxfweZdouk1camreDvTRymjBgXkgaxCH6Rw89xCuoUCQmUBbF7tAALgMERVZuuvFbEuGd8XQ6ei",
  "key12": "5RG7pXgxrSTSWCBKN11MzVP7m6EPDmscGK5hTAFfRenWSrPzFudDvDLhHzrT7bVr1V59D4PGUQLZ4k3kRfyEYfhd",
  "key13": "2U9ZkRYz5v9b8nUKsanMk6gHoB7tkgL2vWzSiAUcW9os6ytetgVnXYA21C7NMwEhpvBb2u3TLjfWR5Nxh5xVoZhG",
  "key14": "5FKfKasnuhvJwkiwYZnKamJv35E4xsnF116y77fAnZzGtWmXWtYNVo7aG4qyTk4FVhP18iTUGtqbWmCF3nWerfoK",
  "key15": "2PyQMzWm14cuEHbpXXZHzBf4eFtX7VjXdnMyuQcFAuz7zeBSoLaoHU98ZRAeQyy59bRbvGxVKiFuJ93AihYx6uX5",
  "key16": "5SXJsaKm6BgcJGGD8J3E9gRrDWS9urSbwRdkbpuYvYfSxpoqiEz3e3WvwctDqyu5f4aoP9TBLNbKJhiyHRJLEMen",
  "key17": "3uYzqRmYEPiqXn515vhFVkyN4WwV2Xyr1cbkrLvc23mFC36VhgHQ2bJcwvxVK6NQ1siQtJcuKXHF8QcGhhpBqoPe",
  "key18": "3FC9gawezMHxyxF4m7Wh6EAVogXKyC94miov2c5p9ZGCcByGPCuH6L39yEA7Qe7H3ENDVpB7eyN5BXnJPbUytLn2",
  "key19": "3svQyLBpJVjzGUW6eaQsnB1Eajcax3bn4uLeVATrfj42d68rz7PbffoM8eAYp1mvuT11fYCBu2WwY9obCLDKjSLR",
  "key20": "UYCQyNNFYXNv9CLGK6fv3tgnzCdTinheFTXVpRktgzWVPzYmMZonyn5JeHXKqy92BFP8RyCQQsADupmEggN6TUD",
  "key21": "5iJwBTF931Uu3xXMBM3iUMw6NBg84pgt8PTkQLAJcWqbJ5LjFSiPdoFVwNyAXUAWiCyaWgb685sUJsJBNy7WLeQ7",
  "key22": "64zEKqxHVQnwcDDV5aKPXq5ZH4TYTCiDT6mmVVE776oexXGyMPXdMa3dfai8ru6S1duhGTkehNdV2anBteN5RBLL",
  "key23": "2HbExLvBkmGhkpH7osL2E791LbhhnjJpDeHk8D3odQH3NrdqwJqph1dtiQ9aKoDSJ8QtSJtb8QUaYRWvUgUtVbGo",
  "key24": "3jN7HxyqTxD3kJbEViHULJcSFoFfMKzP8pkMK1LQvN65TxAscRQS5iLZ66VV6VGV3rPjcK5NdZ3EihphCCwCjTUt",
  "key25": "2U4H8bquANGwXtoPiRCyqZuecCKrWmXAurteU9PEkw1YkAuRZCSrd7fGmT4dMWavi1qs5VfSd9KehXn3DP3pCNVM",
  "key26": "uo642DpxDLCA4f1zqD6GR3sttihQ3LDJPmi8qAEFu9bTuhZnvR5NkYFTtfVsFpbHupEyi1bVPbJEf1EKzyvBWWa",
  "key27": "637vWvt1959ty7DHcHZe3JUdeYxyLDkpG9HYjsBS41tzy69KZzTCURa9VkizfYMizrxiHTEQEnHZrV38j5hpedVi",
  "key28": "5FtkNnKxzSPmqHwyiBoDmpWVtR6Pc2b7BBoGvwRtjfQZofjXNKwEdkFiriNwSMT5nvek9a7neK11BMZq7DtZ38iv",
  "key29": "3TjLc4i43zU3tuGLdoyxM2TDH9yXBacd28k5PHgkM1SXNyEeYHKZnMcnJQUNA1d519W3wZC8nvvBN6jfaWFbFk5x",
  "key30": "4ibsjUiyDX4wG9baH5vSctDbhBdA9Ac7AA52rBeH5riv5WSkTf98ht9DpnSnPq77LwEQ36TwPgmMQQVUUhSwDRQY",
  "key31": "2jXGW6KfZKq6yiwRsVeAroqASSafBHF6U9s56GhXfXBTfEn8wpKSbJNLezxeEzFoxk4vj2TGH1Zg5qLK921q7DUo",
  "key32": "2TCB7TBzYyvoQJJdsERekRackKgwfpWjr1tiUGfpQPaQTJhjogz3TMmR8LfpMXd9uwAQA3YyGMyp34d5QUjFVmTt",
  "key33": "4EtkMn8h3Qt5QcWtLZjSbTQL98otGssUJvp5B5bUmXJjUEy3ViwEKFUd88jTaMU64WrgtJpGYEsj4zp26DeqoTd2",
  "key34": "3aQX4E6PkM7461EmiEChHYMcq6vE33nRdN2BRsN714vw4vgQFBALdYQPY9PPjY5MdkZmkfTkUSbiZsKsLp6kZtwy",
  "key35": "bXErkBvGfzTdkQcVdksiCXuHkEjHLLoAz7zJxcoubPppq5Z4pz7pzUSGKFuA7dHjJqrDJMUeMz6dYxchgK289C9",
  "key36": "3tmmS9zvbpLhTQubyNeYeUhRx4kmiDS9J1RNwnfAsBDdXGPmf3hF35FNQhNh6QyMYtP6XfnEc7aMJPBU6JkmZYZt",
  "key37": "4HrMxx5ygsVrvy8KtUujbCKrkU2zJhv3QtxNEwRS7hvytqVeWU1WFdceKJZ4YY4a7CzvNpfRUx2unCHjfj5wtKgE",
  "key38": "29emgamKtpTXNDsSNctpXGbiZ6VWXC6xWQp4XVsPdZrCoHStiJRCQxUc2m7taV6Pwym4dfpb8jSkkBDYRPLEAp1F",
  "key39": "3gEiY96nnvsJNrNYaBdaHw8P1Xrfgi812AS5TvUDAk8KK55yMPokgFv7CkvvZVkNL8eX28hbJCWzt3EckV5zj8br"
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
