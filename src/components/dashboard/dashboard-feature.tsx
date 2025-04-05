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
    "4Hc8AoUEpoGhTZaqMrnh1T6Q5i3BMXadho2f9SkWf5fX3poDqXgfqPV5CsNn5LW7gPjw31XaVtrC2v8856YY1AYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1dsBUoHvFSvpCedMobgQpGqAWte3y9r8tm6xksAVzAqh82u5GSRcJtd2QgFdBVDkDqny62oDiyb8MvgZaqi9rG",
  "key1": "96fypuW8nrJArkLTReAKRSTXVxFf9K6HxuNp2Xk2m2fSfiNHfXnumN3bczBWh9B7SWu9GAXsmwHy7RP4Qppw5VZ",
  "key2": "2G5dNQMcxMi6dejz8VArFvWKhqnNkmwMdfMDo4JkavaDo8eGKMX5WdCXPNRiV2atiHterBLHWjCVS87GHbWHuHLK",
  "key3": "5xpZeQwFJn66wt4F9cDiE7f7mSowQJujnMqz4Ntg36KyRKBTbv6NCKaiZapoejqHG5WY9m2qxLuH9vsf1jsoVXPd",
  "key4": "4fMtCibqrSPg9i16LhE9EVrMFy6ZtEAuyXrLL3bqocPLBc6MZGU5sDdnMbkf12efZvQBLiyN71qhpPgZCjx7ZwnC",
  "key5": "2Ndt1Jk76EvPgf1nq7zzr5ohbccodjypnJYAAHDEkntzadtSHtdEMYLQepf7uWWX3eTQrc9aaJZCWoDsYmjWKhtA",
  "key6": "mFTctmna2UNLzHALotVFtCSahCPtbxoa3LcuZ6Mw5B42Tt5tbLZw6cMxeERFiTJCCp88tTd6YBAMzBnLfypydYS",
  "key7": "89XAiwrEoXxdvqpxKbLkACtuE8zDeJ3gHmGNWRdev5NXeW7w9YFyqYTpPfQsNDniDixctvNTz9UK7QBWnunwFzY",
  "key8": "tTvzpZPv6u947CuXqihooZPq4jfWknYwvRaZVUZs7dVSksA9yMuaVHjSNJyddDXe9Qzk7wkkxX9bEiHgu3TLgZz",
  "key9": "5etth1j4ZeAygChp2HiYTEonu5o5cw7yKpDEy1Jcd2m3nvKVteTaQgSHcdFhzY3uy5sfsYNryeqstS6WL3T6cx8x",
  "key10": "3iXDB6WSYWVqbCMxFPwd8M3aNifSR6ToeaXDEjVSfDUwCE2CBi2LNFDZzzqSH9ZBwVpL1PeDWTDhbqRgyRAQpFJz",
  "key11": "2khi1Co9ex9mbFQdDhALiZhXtrX8hkERT8xXRK9PpsaFEGyswZpujFZmQbJgPPpV9GMCAx9bGjfMF2WqK2ZJq93M",
  "key12": "2mccqb7V3MKC6eUkC6iWb8emC3aUVa9e5iqYBWPDm71aEzkYNhAiscyUra4PF31SiZ4up1bcBjV3Msg8uPP5BPQJ",
  "key13": "2HDuAWKeJ5aiDfSqA6XoGfLfrzh4TiK3qbX4rPNjqvUBinLL9cd693CRPsfjH7jn88nD6fuXf8cu1zyfj5xefru5",
  "key14": "co2G9YUVGTByhBwYLxcDCC1DmrkoAdSZAv8NXTW4VfMo15Swhr6YQrKG4Mkxoj2ioCbrrpQWNfMi5hXgFY3JtyP",
  "key15": "3DhNGDU2QBvZy4nWcnKRmhjL88atWpqooFNMjG1UgyLy85UPJQfGBR9EiUjwPegsZA43DtppfaDNphaMrdxAZCgV",
  "key16": "5aJi2feLrChpLMVniRGoym8huaGm3rEA2ytv7Ez5X5aCa46sSJ2cqTQJyCmmnrG6x1BfpLVsZyNJezqfu6hDMZeB",
  "key17": "5rWRKFKLA19GaHbKM5GEfgkbR27DEo1QAFdFzP6rjSpwuhYxexT5iT9WHBETEopoiDtZgLX4AG6FqiKpRC5HFMKM",
  "key18": "3w55bwpUBT6bGyXPPPDXMwEegJuXRbAAzGKFW5YTMbVipHJF9BNtzgoVFm6vNH6K6dp3EeRpmdCeScndx2SD5ECv",
  "key19": "UirPKcW2C2jwH1PmHGdY2kBN68nbS94QAcZyfj2mK14nPX4BZaveh9ifcLjqq3Efm8z3cShmHZm9NaPouoRihMy",
  "key20": "4Fd5apiDc6LMyivjEALHJiHZqKh9ceUUXRmEE2zLNGwhxgRMFWxEcJuW3Zrv7y2kLfFbQAjQBtMnQnndCsDLeMV6",
  "key21": "v66SKA5Sg2uNGZVpWoPjmmjsqPiwbTKxe5oLf3s2cn4je5JhJMK9saFVXiZzEumH22rx1rXgYLXt7fvn7wqmVf1",
  "key22": "26iMWdySCPpHzTXVkFZdgvL5xc7envW9agvGSoyzkwK1WWFuXtVWjU9KbNi2ubSBdpkEYC1ic2hTobDiZxdtXSwr",
  "key23": "2KXVWSqsYLy7gbS1zuvHc3Jj2dhYUvbo44rUx9CPKLSFxdLGrv8FZujj8MEMDpeKMojUmbQmemoCKKsA5r7TkQgD",
  "key24": "627WQuqT8hp6DGjGjm9C9FPsLBxSSgmrPJnEkvmo7oy1zHPqzShDLkpy9qadYBQwVWsyZcke1yRrGCEBEZ6i9Rjj",
  "key25": "5c5BGeeiFx8W3G2dsny2c9uLvPVWNnoAXoHpzoUtskPC6sn1JpLs1wSjgccWQ79dvxWQwGXJjz92T54w5hCngvUp",
  "key26": "o72YraPx925GWKEAAbA8JJFSd85D5eDKAhNcozWTFBspU3ff5ruuf6T7oiLdj3hgKFfY43dSVFEYNvVi1yKpq2x",
  "key27": "58SNTd84Yk441PXzyAsKiuwnAGESzNBzc12Ln8ubMZCAibs2mH5mVppUWYatxoYzFUcW5sAqwuH248vJwV51tQGm",
  "key28": "3Y3Naw6qnKEMpS8AimXyeVFxKknTgFK3VsnaGd1grEkStCha49iKCZnVaDTrY3fbQHBhGvF3jcBhLFjsavSbYNHp"
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
