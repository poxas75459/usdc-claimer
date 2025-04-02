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
    "khz9xc7ZUn79rZPRX7gyvtJFYquJCJqd1mhCmQNJGJFWSx59EABu3Cp8Sbh6poSBonW2U1WPv3KiqiXZRCgdYRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436vduVvAWQjYmyJdgaXDfrY4Vjefm61DR5ttbERWLiLYwNTFXwGux1QXibzeG6WvkhJWSaxnR59hbi6umc4aMYw",
  "key1": "58B4jJTBXRH85e7NRn9oDe5Hc8xpgZJrzPc9Kx8szPhkkPFVYNSAVzr4ajYacxqYpSwKPTpkeTfaHEH43BYz7gKZ",
  "key2": "5snhWnCc93TReN1MAFk451AK7d7j9RsbHjYgEUPhti5nij1G492ogtsLFg6HLUrRfVjvFGB58w3qdu6UaZyh3DTR",
  "key3": "nGbBQZwdZyG9RZsuRKoAzPJhRkX2S7pvKoYx6p7iS2EZyTzscy1XZ1S2vn5BvLGuNRPXSF3LasPGvdC7uGDfjoh",
  "key4": "4Nb3wrcPijnSMBNyc3LUY91THyzhDv2wEiJ5R55fsMxvZ13erFXJxEsyvqF4QFfAFwfTEhd1w9HnzQBeryDudEHA",
  "key5": "2PRqF9NXcrbfBnPbw85Nx2QwURwwxBwWU2fev7xMhCW5pprCCmv4ua7XoY9kWe5EhorqdiZ2aZvbWzrnhGm7nFQ2",
  "key6": "3oTf2ctE99QjGGGKHEX7BcEKuwnL1H87WQhnCn2fbEQFomPu5cCpyfB1gpSG5NvioPkYGc6K7b8C4bBNtVm3uNk3",
  "key7": "2hqroCSwai3mw8A6zYj6Sv5CZWHkfhP7gZvjUVPpmBe84tJnVc4jQLP5CDe3tdJEBXPoeR1k8hNuEQ4Ww2w2uF9q",
  "key8": "oJrt8T2NbahWra8q816652WAabcJDheJ4UwM8YenwRnAigpTmFpVoyvK9BJFPgnDb2BF72He7Nx9FJifBegE1m9",
  "key9": "5Ub1XCgwrgRkFwpNHReWHxVZ4LKzZVirp5QV8PmFerHrMuYAxvxXk3CgAHydyQyhWVZUv2gLfYmbKd9khPSNEr8g",
  "key10": "3agQRK1MS1ZpgQgpeCPVEjY27UNZk5aazYKnkr4HqatyqzbqyY5SjyQYV3eJFgmTiu8ecEJpnru2Wq3MDgouNCuV",
  "key11": "p4nsZUsujFTiFgkzed6ufNhkz628u1PJhMTZKJQ9UDh9qv2bkhemTUJwq4k1faJuzmXwULcjSfHA181pkippQfh",
  "key12": "49jy5StqFTtubWde5Af3wYwRgXLj61D39iAMyvuwjmLS7y1bobQQsVXv2JQDBrKzba4NdSqK7k1NT3HTHShCrVsA",
  "key13": "4kWYeJ6r2RLU7pjHbZznbLMrb9ACnxRmN8oF3AnJVGojR4BHUgtRpJyTqVqC9WrQ9Bgq9Yw8TcK1mT5dLHfWZkNu",
  "key14": "GDTKgPJuaqWPELRsmftaKe3NPxbkmanXmJ35V32oZyMt35VpEGx9xnDLTrmcmvhhw9Dwc1LsdSwrzETmck7Jgji",
  "key15": "58f82GjU7KZxUy1mQ75hVcfeQU7fjYgEj8vCrorDTA6vPcuP2or3V8gDTZYdzFLC7dbDGGVC5xPFjUKRyotMFhJ9",
  "key16": "4M6iWgh6K2pBAREJThxxtkXwoVr2EbkQxGUFyMJddZESzWwGbCerRkXvPEf1AyEMmgnPHPP27BuDPQSLh7HJTqax",
  "key17": "5SVCpWodo2ZSWQg1nqHASTmotpMbnSs9CKNKB2LYorA1nP5w3sBaUAwjsxtf8BA81FFJWQLoPCf3xZwVa1xR725a",
  "key18": "24UkBLPvdQ2uPL6Nsx7hMwgMFqAP81TVc3WEkBjHM4ySdhnyNa6tD2nCXcBjJgbWyF6uTgfvbhQJJiATBWDZBrGB",
  "key19": "5CFFu2rpdDwAxU4e2dJKcdz9gfFDZSkXCZHx9EhuwTF5TTvWJtnxb3CX4H3Q8unFyXchHnCgKN7314LczZdwnqox",
  "key20": "5WmRjU1RACBhbPJ9GEXuwxpUsUetwrL8DatY2LZSbiAiba2quggSAdWvEV2Jb7L9VmPH6BnFdTJPJZ7eDS8CAsAB",
  "key21": "37UKsW4oGujkPQmpPUfT17LECumwdaGqJF21QuKq6C1erLZqK7HmjdjBVNefeLMxS4nrPwaCtYDfpJqaJGzY2RS9",
  "key22": "nb7pNsQn9mLDhxrBNnKHkT3rmu73t9VSNMbtUK5aRsPK8bEtdTtFxVPRYWHDzKMWaxAvFxLFxTdi5uYM8xHfMr9",
  "key23": "jnSKWJBqJ2pEdhu5LZJ9BrXWV2xkmVuPC1yvG21whXVvcTWi7ATLCDsUvksMKpfXk7ziz9sBn3mhyBiSFLLFmUx",
  "key24": "WPW8Rob5xcwoB1qYtSkJAaRUF4wXTQXcUdEsgsxgiraevAjktDUvzwjwPUv1jyU1KsUSgDcarg7x51Trh69DfDG",
  "key25": "3pGYuyygQ3CqMWt8LL8vdDPeeML8Hn6mxAVq5eMcNiFooL4vt9cWR5snzzqcTHpy3fvtcqqmNQueSqBAVAuUeG7A",
  "key26": "4xRdYd8h4dzakhoL8Lna5BFxBnZ39HphTzPNgfDcPmWoeFLobRoyhs3Cz1zZ4TzGHWJseqR9kszhBio1mHUpbqv2",
  "key27": "5ELgYAHZXedbVjyRDDbrQjynodbQKwLPZ7HScx3F27nJTcbDyu7Ggp7V24rcpCUHCgKVR9m3Uz2eY2sM3dNvLZcJ",
  "key28": "rfB2vYJFX51CtkLFjavxi9w9dVff9ip321LvRF94pp5QUWrwZ4jcjgKhUqY17HznsEYemXuwZ8qWmAEZu2XwjcP",
  "key29": "3KsmCc1kV1LcYMgQ22yMJUr9pQN7jbvV65cggMHuibdgFpMphKvgSsSKSQhFmv44jvUM6WubHM5e4tpfvmsCTkto",
  "key30": "25nhKCHa9tRGHMke4Cm3UQ2EatpVR8yvF3S5eGtLVAiSxo3d7sv7hYabMMoDJo8LBKB7vgKWRMj86GoTqsRvYPvw",
  "key31": "36CpJezHbVcHY3mFuATeiZcPzEuBSAkHvF7NcUKtxc3SnpLarRBT68dkt5hFqYECeVceWEtWbgku8eUmgdNkUhVv",
  "key32": "37ZjpfcbS7KuAqYFRi8C8qk3eky3LMjAw9279wuBeXEnCdpfivQHAYE2ZYEphM3XtDXmvcM3CckWnFz1XWM3vLj3",
  "key33": "nfoaR536RB7t2HY7xV1DwoWAeuc6ABVcycD5eLHm6kpmU85kjFz3zatt7944j7U2h7VKyCNrU8T31XJCFCzyS4w"
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
