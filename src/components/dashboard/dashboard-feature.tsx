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
    "28YVMdR18GMFuSZg7X3oUbhbDUPe1nDwadzyDp9eeUS93iKhUmEhRRmygH1zGsqgfxysnhn7ZMeeMqeJMzKv661r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUjw2or7rMghPiaF7aMhcKhTQV5969N9yeJKA2EZR9urP9CG3iHQFL8Nci1CC9NAQ4zMuMp3CQVgowhV78vGtot",
  "key1": "67dWX4gLoVbtzoCR1Et1u7utafJRAB6ccwLtutqSpqAiahWoiECP3qPFd5MgnMsuT5ek6RwN5jZkzVsjHNZxY2H3",
  "key2": "URbUNUeqo4nsRB27DBUFYLsbb2LdpmoahweqJT9t6AeXjjH1Tmhw7SSGoV9ZZ8pikbsc2Um3xnDd3t27pbuPhzk",
  "key3": "9rZHse14FfaYHM63x7HKSyNd6QgipJA2JgdwBzpTytqot1LQb4TqrcwZBHUwwVJFrFSfJQjAcp92JSoCcfbwjF2",
  "key4": "649ZFAHQTNbNisiB3bGhQCeAE5eVWV9Ry74DkcFW4YWti158YzowaZTVeKcu6drmUC8wLwLhAe6UGfU7MWBm8hiW",
  "key5": "3aiS5eujfjx5dZ5YJCw27A2QbQbrwvi4HGnqwtZn5Y13ubEsk4vRAv21j4cAy6k2uKpPuEu9PZsJXw1NiRha1mGc",
  "key6": "3YM77Yr2DSMB9Ru8TKZTWozmFPaaymJ2SVc2gXXgNaCYfHyfpVnFeYzsmkCEAHgjktjkQXD5X3pnbRBiGQCufdLu",
  "key7": "3MUPXZMYo8txMTTe2RwFeeyCSWQncQC3dsoaKYBe3j4PPsiPTBpzyvAN4honNDe5uKrCtNETeLJ1UjYJ6SBY8TkL",
  "key8": "2L2gy112vXVW6Qv7yqPzcbotjELjZVBRBQh9CZ52RpQemGh6BkARyxZyiU1UZgWz8yE2GQz7Ja6BUX52pTsm35Xf",
  "key9": "3haiHJQSTd7FW9nC6h3qk7T5i1w4dAH1FRYb9QJy2FDxwPkneZJh54sTCHHMj22gra3xYuiCPRePXhhpt8MXtjX6",
  "key10": "4pq3fjBx3tFXwRF5ximGYh3ubm2hyu2odkrJrKShezvKKVqcAbAMUuhRtyFsg4YtQkaZ8FoFqLqnF6bHCkxyjzok",
  "key11": "3k8tGPADdqfTX5aiMgDsYR1wDgGF5hdqYeULYjgtqsdc3jLSQFtXrVhTdHpK3RvotAZZLSdNSDFZCqryV1E6pdCa",
  "key12": "58nnZGFRfdGLEDqkJeKABWSbZiHfWKdguUA7KZcYeYRdrDYb8aTyHmqfDS4xy7toYVaD6ncFPcbj8cPVH8mT8qR4",
  "key13": "3mftFDCWbyJYyN4gguDYmK5V8uYnDHfjMxgFxpPAwQfS7P3FDTbm6HsgoZ9pjzqLxddNsrZL49vMMu8A82XZMk5q",
  "key14": "2NrJ4RZ3Hz9T2HpRY8z1vmfKnqD5pWHUcFZCcD7rTV2xaKSfTmpt7BLDVuWBTiFUftbtuhL6yQyuve8YDuF2zvho",
  "key15": "6v2e57HkxyLj8HeXcPvzTBrgGvDaKeRAAFxgz75UD61ZWWaej9BR5Rdy22sTHrnFe5ss7srkuzUTWJJymo8kV27",
  "key16": "3vk7nSC7AVD7MBUL4Dorghi3922ss7SaYRQTYHkiDvyWLBMxvyLvBSozH4z2xavFcDcoR9nb4XUcheWHcCYsF1By",
  "key17": "kfszLASCoQfRZbZ1F8NvL2F3D3TzkouTHQ23nChcwtvA9a9SzkD4tqYprRcqxnUiVN9cu7FhG4w3C2jrdQXjfe2",
  "key18": "vJXCRCGbF67xJEjxuFG6GbqMX51PvgArwzqoa68ZArYzZHAskvwHTmUHP2heUNr1UbbvoQ6YNPDhytfGpTf2nHU",
  "key19": "66V8mdpZTpRwroC73LGrZpqpUSpz799yUEtBCXBJMafGd5x6JoDjt7MvWAMFciPJ5qsa3yWuHTYwAMxrwK12EvRh",
  "key20": "RTbCTheQc7hZ6DYE8HESQyAiSaFrkWs2gTYJ7FMSDkpjfKXCF52cBst448fjAMQYg1C6F7F89Upo7RTd5J2Shzc",
  "key21": "5C7ZbAmGQ34BAWYAi1dJkrf6CZ9cXiFZeWv87a2CEUd4zqXVHARCfTp67p7AkgFuMtvwNkcRg95CfG9njWRtHbTq",
  "key22": "5ZzUTfuk27yzeVfEZLHcmLUSnjvePNXxmmMcnjp4P5bATCzXSNSC82SKruMCU4c4LnVEM5e9kRLPmdYK4ZemPCL3",
  "key23": "23hbJ2TiqfXavJ5EPeLRZfayXtyXLpNyFdFLfJnLBmir5RpXv1Hx26tHtsn81b9vJ6hBQM3oRJtcCStDeptm7bG5",
  "key24": "4UQLc17UWg5q9D8kUCJvqswJC1xuhHVUezx1M7QYDbEYzk3FWoo7g1mcrG559Bc6HdLCNq6ScEzh6MirSWSaKvPo",
  "key25": "4groTLshkJ8Ho6hT3vLQx92NoXebKd21ZV7YvbhbdK4znbjL8rQD2dBA6K4xU51MXpgxiFwbrB4fQ6y2MfEdtoBu",
  "key26": "5geX9GFLQDjuSAGQZfxKDYeAQoaL1aXhBf9BNEjXUezcW8JJYf5dkQFPEkCavrppnFgiJx2x7Vv8FGzWPBqabSjb",
  "key27": "KDJD4BNFxD6pdY7QTiUkiean4wm2CnUeuSEUmACYmzxa4cP8WKnXxPg6vwjsyAsvt1Qq3eQeur6LLTogBLahJZ1",
  "key28": "63CYrW8bLuVwh5uATm7bteYu5oAj1X2fmxqBwoRqJMETYoi6XvZKXrKgre2MCCGGNzd9G6H35FQs1ZHWFRNTEEKx",
  "key29": "468NPtoMH3mby9C6JtURmNjjMbZDrkc7DS7SPfiEbvsNgC4MueGyyHWZmnMRjTrHPGpisuPyNVgHXcujMccYt2eK",
  "key30": "3EpFZnVh3VmVFZsCoLhDKFj4nVowiwz2pjZmjFRx2itWH7MrM875xvquVD6RLVpKwbThACBwW58Q5GwsTfvrLWzN",
  "key31": "3YdVadqA5chbbYfjgxMKU9QKYp5Jxys3iSDxsn8SNqh4TMXGe38ruB61Cjspxu7HVUG4G1Ju7GLJdB61jt2MuXHL"
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
