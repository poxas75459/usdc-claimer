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
    "EcnGzCbnN8NHN2scBCVob9JbwBQAPBryP8p3FwcHbWRSqUtF3XBtDdjGdygvXTwQAFc6gJqArP9Krishm7UBp2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJvJKNJa4QJrKhhevwaan9K77nYE4fyoU12WqHVoaVXcPgkHLhaxy9Y5UdscTHzeNGNcGhb159qMicbZ3hev4iW",
  "key1": "Bde8mqx2gPZk99KwT9bF2LQGSW61fmpK5dnNEXKxezoXnjJP1DStiPe9Jge6vZ1eLeqqFv2hJANxNPhGg6j9axe",
  "key2": "4aADgL1JU2dJMG1BHQFZp8CVxpW6owxJ7snmt5EXYBJgiASLm783kok414yDGCMJrg4zo6JY8jdeWKWTPmdTYMXa",
  "key3": "5ajD3JLG5PPr1ebs3TNfJY1ywyF4jHnhh7815damXcq4AgzRCCh2uKCLj2XkSd727tQYbXjCLHDEGFshWKWAEu5J",
  "key4": "3zA8kPmQgCYV7W5Xqdz95ySzgLMUtnskapZvb2npAnQ9CXxfqinVCYsvTjKZ32UBrtwtVdvsp6c4PFhBVWaPsnGK",
  "key5": "4wfhJMjs4n3eULKeGuA9pYNgt2CYgSPyQSUvvATsX88ESrdC69w3CRauDLoTFo6nWuUSQznA17sjHbWWxfFvMbL9",
  "key6": "32g958CjULFJZVajK2UFLJWatUjpACBP3bf3kgJQgEWxsEvp7zLQrmSabYFmCknTS5Hzn4RHq2B2jpdpPypn6XJP",
  "key7": "CfGQfeYQxhMw6sTbAxTgF516oAdpzqJbV3EARLyijRi3nim212Dt8kVs9LZpFFsco1UBgPMc5YDBp7Marrv1DoY",
  "key8": "4kEsMkUyoZ3qvt4iKqM8jXPAdqCsWfvBGPSoytQooNYEE1VB1iCC6wirbAu1gYCzgBemMPrrYSv9FhoWXTUWhFW5",
  "key9": "5JDqGjneS7siGtFLoaSkGwwWbV2J57TKovLyfCUPpgQ1SdUDZa3MiXG3o3a9gLVeJN61veTjZKKuz7vujSPZ5yN7",
  "key10": "4SpDeRnZTN7Qnc3N9aWM55bonBUNhzxd6UvUCCiMm3m5TEaGfRoLJ3m6zWMG1yKun2A6PppaVGprGKijv6pDxyvP",
  "key11": "uySGetJ6TMu6duZP5a1gTo6o7ranTUSBtaEtyKax6A9RAAxhQg9Sac2gF62JTMRA3fJJEvsMYvj2ew28LTsTdz1",
  "key12": "5EgGPvP1bU6nAwSqHnx14ew3iTRZi79dEu2KtMKYuxq2xuDi9Q2fQadA2TfDjcRsc4KrEywWEY5jpEJbb16jP7K5",
  "key13": "FX9QuQwW3X4Yio3NQ6VrHxpXXEy9KgMkxuUzx5Xk6xb8kQfJLdR7tRY3uJhNiJLztwf5kKj3L9WhuXVftdpfVvx",
  "key14": "35PiGXyS8ko6daDHaNyTVSTsvVHVhRdbg2LMiXbC8TejeYp2Xv7J9cE4brFgcFydgELRvntxARCj9Y1vsvSfASzE",
  "key15": "28YWSh1wsUN2PRszYPvkHjqpsnTjjcP4AWtLUscpVnFTgEe8THHmUY3QESA87XSE9p6e56kfZ4UCZyWYtsnEuAHh",
  "key16": "27zy16yG8CDW1PRu2M4QUzzcLyD6L2QvmpXvZDjb2xEhhZKNtQBeY2SNaU7vuUqXCYSZNbvu7hAN3cKueMFKdgMA",
  "key17": "wK8hwe3agcD6fbbJHNquhLqbGf6Xst5881urYB8T6i4UpkugeYpbCYjtRBCTSo62SwXK1icS4QdVHVKuXDpU6j5",
  "key18": "53tZujURteBiRmyP31H5v23xYmTPYw9DjUBnB8LEAksATQgZn17axd7ADzdXZdkmBP8qWxELQi1WBuTvQaBKgrmx",
  "key19": "2uhN4S8yh3VmiPXpz1uYUao3SxBsa5xtuXehURh4k22hu9Miop7aa8RGrFqDbgrSA389sL9Sgca8mYJE4GXa2DGs",
  "key20": "5JE2aiMm1gZeGtAmM7LVqoxK7b8pPaddeZ9462huU72StLRq2JjG1L69XKS7sSA1ugAfdMrRPdRXiZntWpbvc91C",
  "key21": "4Cvv9hvqNMqPTzRWAkv3SF1gjbP3Lk5KcVa7Gm1cvuVYSn5rt7bj1gyw2gE4mKrDMMVjo9ZtYdnXtaNsK7dsmncF",
  "key22": "A5fBDiGrrPK4xvLszDKpthdzBFE35Fzt73JCXMJYJ95nt6j3ScSFR9yDH9ugJuVJ4ripm5iz2SqM8Her2KGHcob",
  "key23": "2xBp3obsjCjfVHJN3c7Xv2TYdcCRBBJrx83sUBCJzQuh9dxzG6kUa1DyNQayk4yVrZ34cNZthijLYJoJ5GMMfLJo",
  "key24": "J2et51qxR2XUtLQ68q87jYD96Da78aXjCCKYrqWFfJ6KqVKpNNaJoqeWDco6degmP4s4pUCaD8Vswq7qo6CpM2Y",
  "key25": "UsXBjr5uKQ8JwiQ5BatbGKvuX6Rhs9paPChSHg9RkgcA23sEoKLonm88qyQDnAD9s88bUggU675msaivWhPJkcx",
  "key26": "2yweGcq4rPoQiodFuEkUec1ayLWosdJ8CooAf4UWc3HdvBmr9FE8Hoe1iHzELfJdzn4JBeXV6bgLCZjm8idf2mDE",
  "key27": "2nnLfkciwbtzyjYoiH1q9d7dwv539E1F5hD9GPdUcZX9iwPost7NoYsgcQAS82K5HE3crykjMPARdcmZU5e1CoaT",
  "key28": "4HMp3mS3cJFYJRSqSUCNH2RV1kR78z2sqyB79GSaYBhQkLQ9eNQ494HHz5FFCcHd2BdihrfzuiRgCnZt2FAKXAc5",
  "key29": "5weQAVQmMirAW6sYyRE4izTMNgEMKKBthAxGGhJCaabbWcek8ue2RsSH6f8CbE7fFGnnoRp5J1eMNFsFtLyo7DPX",
  "key30": "2RAisJc9JFTYv9PfMhhxSkGqWtSdTxN469NJTg12oQDrpeHU7jbL27vdPFwKzq3akaQKo6J4YhQJsFHEAWhAVE3Z",
  "key31": "5X3MkSYd5pYCkfGoBakKg9yP4Y3HftX2iuaFjKZaLqPzkZxN9KRm86Zchmte983cvidnkQCHnq1st4jF152zaY4T",
  "key32": "4xJDaSE6cLffawAkfK6BbUzJqwQTeTfCPwyX37Gxiu3q8yP56ShMx1kyqN8ADoKDLbhYRNCXUSSpMnvX8enx8qYX",
  "key33": "3xZ3D5mi98rdR57pECNy3BaZkGB5rZr9av1AnhStVmrnnpsbwYuQgtiyV4BbffwRzy14qSyTFfBPWf7Ec9oMt1sq",
  "key34": "4n5hDNAQkAF1P8ZxHzNt3SBx3nnNtdHEBm8poZFXu83k4CM8uyb5rCeLPYakdoHMK5sptD8iyBr39FkdoLhBe348"
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
