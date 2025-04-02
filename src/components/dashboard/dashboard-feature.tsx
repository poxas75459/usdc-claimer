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
    "2NgMmqHrozAFsyGbMXZ5HB9EaBVyzeV9SzZsb1vcKgjw4knWtYLQNNvGLVKuiJmFy76XEiNqwxmY6FMZy4yxeFH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rHjhWZqewZ9hrr7FcBUq7MxeLEK5SgzTmtLrKvBKsFx4qRGe6BQwTLnsd52YC2tF1ovLaEiXF1BuHvH2VePEfFo",
  "key1": "3SzEpz2nxF4xBPURhPqSFXahJ2UTMLrpwVictVvMqhmbrqGG29yGgNdBi1Mjsspe5ZTuRt72ersWsC6WKAzVRvXf",
  "key2": "3egxhdstSjf2KWyyk5Un189vYeP16b8X9H2fHcMANrMLC6wnpysS1xv5hRZznyVQJ78Vdo965SjSfhD3ps8PASe3",
  "key3": "5uy85PMSKVF6CAHk9Tkui5yDCjbKdDoMiAUWpZuoLGA39DcNaw2iiFFCC4N6Tq5AtCcnyMxXGP1zgn5wLiMYUtGu",
  "key4": "mQjw9q6ANrr964A7ZonDzxCAXGce7H79hPw9otW6ixSkVmK1w4feaR87FNnarXBS95Yvu23BzhPYhR9UbBHoGH6",
  "key5": "2X1J8X77ySfqkuUdXwn1h1wajwKPQV1BKZJFrXVpjiX9zJ7SUYuTUz66YSAd7jZb9LgnwZi1vySjv4xF5Cgd4pSb",
  "key6": "8REqxx2cEtYpbc7NsBFSoGUR4thiq5nALaa2MJc2vyemPrFKwijgq3yGXWz5Jq2uXGSQ5nU4Kw3yFHqECSYb9Ek",
  "key7": "528yT7s5bJd1fVqeeeiVX6unt2zSnTTTthnon1q3aVUAiLfq9Z5eCQv6HjRrecwtEi42S1u3jpvmib8E3p1iNwjD",
  "key8": "5ap7xyv8pUpVGWAiz5dEDeTyf4vYnSp9eyb1jDfJYi5a9Ec8RmHdU34hB3fNnzoDDZjtyEgwNdidWa4PTv6p7pJC",
  "key9": "5TVUeSYAVYBSjirFWv42LuF3npU7fxAM7vADKHGWgFsQwGMFCfauiZunWMBhvs8wKTWyMufxZswvhfiaQnJvjaRV",
  "key10": "2MQXjDUEJDGbgVkA9Z92v2Ej39jgyPRQ1TJYMM2n3jhPTHGdRK1PUKj1YnYNVqF4HhaJJo8GQV5dthZGfBjv7h5z",
  "key11": "2gHjrYSb5pgq9WTNAsPGGjsMoWKT6eg2UcxFyeZBQ29mBiT2BjrG5cQPPVkeP6FvkVfd4k3z7NptDnAgQohvFuPe",
  "key12": "33MxJb5c9oUeCt5yEGyvoQHz3C5VSqXwDTmJpffT4nnneH9KbdLFqoNKN1i2ATb11XNkCnXvj2pU4hxKE5tcvNFj",
  "key13": "T3E5fmjKu9AWi8XMakmoVSF73yCxbbD1hpXmRoKpJK95NQKqB5qPdXvr2npVzQ4ry7QvKuYBFgSLAjDJUJtX3J6",
  "key14": "3kM5zKRnYhFFCic4aNkPqpJMCx5UaMpy3Db5bPjPUC2uos9zUQ6WtQTtZrWUnXtvQNLe4bjN31KqWhbJrVMeXhMX",
  "key15": "4PqyneQ8AEkaL8NotHiMFCkWfS8h5FQfwh2oJctx5vrsLxfeaGLHVxkJBnHtQZogYJgsnWoCZvHwbBiCJs9DsDLP",
  "key16": "4NJvw4Yb2oVz8ToaMt3yrRcQMCEkgPZ6VFd66F2X5EWoqUsmQeBpwEaToZzRecgiH8QBbhf4knNiudiaZ6xtoeKZ",
  "key17": "gHSe1RLyYhfFVdEGVYrcfdXwFsXzrhQt4GeVJD5g5RhvYRTgZ8iH31uQTTSBeDGMde2ygVbBnCgwrFNR4NzG2j7",
  "key18": "65Kefk4DQRBSSFUJs9wd4xXgKZoVus6ZKhcSkd5D54pfDf8jaX2WRxMYvkY7HncNGFJVZ5d3C92rFqg3UY6sordi",
  "key19": "3TKeXv2QAjsmwaNhbe3uL1GUG4xwqMZRhzG8c28YCoKH6R2FHtix1gxZWSiREMkWvRJfMTizXaEjDGURL5ZdgweP",
  "key20": "66ZR5m5b1DvPQ2CK9dnuMchi66Bfgcr7D3E7uCTa7tRdwhddMDSqRQVZFdLTL1KC2eyghk4tK4AAwzRTkyDDzGRD",
  "key21": "xkXoVUi5wqrsqNym2HJvLNJE6tMNCxp2CH1qR2P2oFVcG8tQmDYuBNotWa59PEyKZuz9vDoQbDmjP1RJwzaptGw",
  "key22": "PedHxkKYT7vkEoKNHjM2i5vxaJ2XLBRYMdsu1eAKiCrA1A3aZ3TYovYa9eXYoDnDJUtJVBr2jGYhJfs5Z71TBDg",
  "key23": "5sUpoey8gCmkeSAfxtcra68VEP9AV9V1bTvEMR7BPJtTGDPF1ki3ShozDWqbmPHnzET9miUYuNNPw2xTTkLhJHt3",
  "key24": "D8Ex7VqxU4wcnCL435MzSmwQT5kvgkskfyxGGPp4Kse3rDa5VQPYqMptohVQ4LaqWWUDs1JmNs5oHyZW6BFFYsG",
  "key25": "yoe5t57TGwCA2Yhbemyn7WTFmMPdVGjjkBnrVTkCGvL5LjhfPmEN15vWygA7YHNEK7yT9vw9wbvEi2wK2sJaqmp",
  "key26": "5Yuw7NqZjubgxUuZMvSq5HQgUiLdyxgyFK4vk1AzWfNgVZvs3eiqMn2TVjKm1wy6eS2czCWCviJezy9M6SGYPPo8",
  "key27": "47h9JjrDrDe1uL4xdoSw3nZnw5yT6LpNheGuadb3m71bz2Y9zGjNvEQZvcsD5v9ZHuvKVzTADJpVCzQAph2qgkz9",
  "key28": "3SbjDPYeJudG5FPtoZ88yLdzsmPTx8LTFAstZ4WtBFCbcctKbsSd4bsHvFeDMEVUpUiec1LiiPeUHQKpRdeLj6hG"
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
