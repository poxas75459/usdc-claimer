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
    "3U9zZRUrqsQNW3nry2jggr7JcENdCK7XjEjM5V9gyN1eV7kA9PYd5GS9BN3PPWmUqhg5qqpL66ScX89P7dALcS2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBTZXk1CDtfaDhxJAZH2KtwJvhdo4rbeqPE6CgVgefKbXeFqGjsLDicFdfW8xcqGuMUanqfJEYHxAj9BcHVYtiV",
  "key1": "23k2wNBHNkzWbKVuHyHuRQEtgThxD25Prjd7sfqLjBta4kGKRXiQkZLMC1ZBEEJFqkC11z22DBwko7LSsJ3kxH5Y",
  "key2": "3Qhzeij5v1q228GX1GaBcbR2sAy7PZECq9ByerTkVqYyn9qe57VQeaDA9sjESYtc3Q26YRDHS53zYvhutbg7TbtA",
  "key3": "5KxX8ZhJHnSJCnz5p13A3GrEH247WeUKPqemqoCDTRpM3FjY9ZBF2bDEj5BmERGfrT4N1PeJdHJLCZLVBE19ZKK3",
  "key4": "cG5fKeUarry51emkzJ6D4HYLoHSaUaDAAs5achbViorqQ2AG5zSANT86fkkFNyiRLAUWCSEtGzmDeGJhohZnFEX",
  "key5": "37PHb76MyzD9UipTYTrc5AwMNJP76tub73GVqvmDJrYynRM1qN9JyzXzkhpeH7tPhKCEgUxywwXPo2cjk2UxbFTt",
  "key6": "3YGVW3GYJgGHb9mnPmaLpN1JVChAHbe8K7BSAFu4smF5rPfv5kDzbhe77Zbws2xVyaXUokydV7zMyv3VnDGUvpTw",
  "key7": "2wUaeTMobdFRmNusNq8BMgR3VwLDykrBdb4PiWqNXFWWLqp6yy2VBWYsf1FCVEqLmCqRSwbM2h6dYyzpw44disvi",
  "key8": "3dCyhLa5KsW3p7zA8poPVDWGrbwcpTWMmu2J58px79gvUF1MqyfS4Rg8CPvoY1sU36zNH7R48NuMEcQDAq84yWUg",
  "key9": "3pSZ4bCZQL7RRm2p3bh4qCvYEQvjYvZnZhFraKNS8HrChoLwdxDmGj1YaESsnWgF5cmTjZCo2VMRCHSH19mPuNaq",
  "key10": "2Ct4vpQM4ov2Bc8ASYQpbNNsxjsP3auUeQtHNA8w1UF3nE7EmPkgbKpVJX6HLDMP4jmv42FhnEj7o7Lyix6YVFq5",
  "key11": "4RczGcEdmcxZYCPviSgEJUDfNryfvWAguhwRyfGQyvL6ARiMJdoYMKZevuHVfQv7jZr63hTCRZ5WAvvHD9Z8WLca",
  "key12": "KRp94fJpCojeyrtEVScQCJfLWun3Gf1HdQTyEJcU6zFoDpb2EJvHGB89usNa9ECbgg7Y8MhH1FNeZAKuU5uYQXU",
  "key13": "26nZfJrEJnd8iYa9VQi6SbZNDeehFWGnmfvghKQWFNDLpARGi5eTxGLXjrbacL7QiLDUKK7vUAQLhHwrwLJobFZY",
  "key14": "4t9BHc5gnUAmwgP2vBSARZW3JgC1sPmSeTuHiYNvPkoNbH9aqfrLubMB9cW1Xk3yqjpZKVyPw8LQaGdR5F2B6aKC",
  "key15": "567Fm8gKRjaPXpjma1Dm37ETwcrb2c3JcCpbLgwZ2ugpKeG56pAVATCytddye4ehcLZNxB7RTBGFE3ESF8kG2LzP",
  "key16": "62a5Z6DqKUHQhAUtdbt1WbLYdiAhrC2AbF499nhLdcEnHdJ4WGrZVpCuvbyXv2WqzAR3QdFQNvDwyXcC8LWcAtQZ",
  "key17": "2Jo75ZoCMv3Nc3wDieoqrLGPN45JJE5P7dayGSjEceiYFVViBY2nwVXRxNaPEMecVpe9Kb23X1vGddhxAuHhv1XZ",
  "key18": "2bUEE8CkXeioAeKikMX5gLZW59ievifK5z8fP165cyzKiMd9iP4SEjXprok53omGHpH4MuWhfcJyX4rd2KR7Xd7A",
  "key19": "3NFqK8mpDkEoALovFAbGt7e7hZ8EkT72jFVSv3fFhVYAKb92aT8ZgqFLRvxexoX5JYJM58MXDyms5Czh6zoUfPPk",
  "key20": "4GfAUpryAokn1rwmkWMtxtB49cZeQUASnHB2hhuMtUENGiXLT5XYTgowMT5jLqbauPKwYqeDn9uqc6CBAq744rwJ",
  "key21": "BbbyyZjuWpUveCzxf3aYDZMBNbDNVXow9QcwwUWk7WDbKuhzXFu2zeYXzj6rcZfX33G7ELNCes2gpUfMpPWSJA5",
  "key22": "32Dsy2icHbDe56ZtjbSqFbCEEUsVP7YzBAL3P2mU9kfd5R4vV3LvL3jitDiThQWhegqoybHz2wkqkN8zUk1CKBX3",
  "key23": "4wYFfTJaiVWPf2T5LpLvAisCzB6R8DXqNP5KxMmLtcQiMz7MXt9CzXpSNf7jiNsqLkLSnTyxx44d7ZYwTx4VGkVb",
  "key24": "3o5wzq6BZYn2d8JphqvTreqUS8JGFBCgYSL9ivDckC9GxfNbHXsvGQo7kAaXZUx2iU5HYtDLDwvwjGpZRtEbCtsc",
  "key25": "zpEEr8iErV9LFgCPdQyZHeQhvCYjMuwdPzaELd6xqd2uBonajJYndW22GXXnWCadBve31hgW6bgseAKCzHjjLf9",
  "key26": "3ELStavxuYuKCFMqYSknKKmcYMGk2pNJpiiVRpvD3YtpLbfjxW7M5xqMSUrSrKugEzSH9uzWiorcrEbUNYgQ8iTG"
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
