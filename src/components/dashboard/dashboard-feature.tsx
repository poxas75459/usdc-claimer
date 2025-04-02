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
    "MpF5dSgLVzEatnhFmqCziVeQ7xh5A6hx1QoZvsKmuJEXwRQi8a4jtVp2Gb3xhEmFpVCx5hvydPdyuB69prfuEyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdbAosLchuxkEJMqn1jzkdX12sizt5SdAonX65zp8SiSZegWXpommpNRgcMGqxtqEpseysuEt3MErahQbWMyvZf",
  "key1": "5n7dj5eaKDEpodQ9BX9MYcynYHjgdHgm8Su6B3dQhFKxz7ryyGNx4hoX6xyGAWvocPFrvzEypyRJiPUTRRQkr9By",
  "key2": "3oHRiQthqCutrMoUNykNMcvq6EdHhFkd3QtwnzhnmHQWwxksJi5WMqkw25by2eMmt3hANzx3X7fj9yG7RWfDCmCN",
  "key3": "2BhFhqyeTvfDMtUA89TZX4PgRqmVoPiJgHufrwnfUK3jBcKpGT1A4bC4DHupAHukTgHhz41X1oMQPPuP9yY4Zsz8",
  "key4": "2Y6Jf3RdxCC5Y3NnaMJk7NHymTHbN21LtN22vkPz1AV2fTUKerNVdB787Vn1AQAEEUABkksTiiy7mFqVFKCyyG5b",
  "key5": "3CQqRhG8qAnVnCALYaBu5oGbm7xFPAy2KpKjT8Q491Mde3WAun8SchgnBBpB2kWZ5BxetAm7hqtuSzKNrsidJEz3",
  "key6": "4PBZQQEoo2dUjNWJUPnnwiNVp2J4HQqk8WhYTbaNqBEw8K5A8kw4kMzZFaWgz6f3f6NDE5pjzFGiWjJFqsmfdWGw",
  "key7": "pFSjQFTuKH9yGyju2XXiJLoXsbHBwZzjF1Kr2FG9S3J254xGh6Gan5KPDShpZ9UcfpGTkuJdek5UxnmuVBwWGMU",
  "key8": "4jeFGHPnaSzitGEgJ1Fo9gKSptQN2S3FBTqMDUJwwfEuUWYVoCqNunhSvuPTY6b7VEXED6n9DaPCe7XzpC7guVqS",
  "key9": "4M9A23X2o2bzYdpsd5AGp2yyZvuVL6mCr9T4XCNbATWmwnfRbnknDztJD5czi6WNnBr5qb2kvnaJJfGm9LpRVBDS",
  "key10": "3by9jMLFW5jctrwQ9mWFmqH6ayV5GyDxc7A8QCcTuvvu1eH2fq2GcSw9QgPQMx1BBLqjqnzg5wLZr6F8HpuQcDna",
  "key11": "5fH4cunbgSbWS4pfcnhJ8HVoPVpGtFRzuP5NK9HVUXkUNzAPVWx776nHTbtCkMnWbCnLFFQkn994VpwZ2cRtiKHw",
  "key12": "3eb4KLG1MhzE59tTpKHeXJTQszHDXeLQ4N4qWkjCMFk6PTu3Ny4nHeoYMC6QaPY7YRMYH4YpitJspi6wLqASw5dR",
  "key13": "33NJLebafm8b6en65wrAFTeDH3HrNiqDjiYQYwcFo8njLRqTyEnkqAx3HuoWMPescdqG6KAeQQvSHYPgwMVZuZuj",
  "key14": "3Nx4sg7eCR8Q66h4r6XhQpNRnAhJ2VBQWWZea7xtK7UbVMnijJgjNspQhHDdxvCthaTiQWnELCNpQoi1PFJs1YUw",
  "key15": "35KzQBjQWXnY6513zHfpL7r1uo6pbyWWpbjaTqKv2zzeKEtrYpxfViquSWbPtd8jyRWFjMEQi9AMnFB7gs5BZtzB",
  "key16": "2YjFXjgMVb3NJuupPdLfJ5SEPWQwhS6psp3KrWfN825owUmC27B21JVKEaC8b4fFDqmB7WW1vEDHmUYBU1PgWBeT",
  "key17": "5Nu7YMJ5Zz9u6GSPwUhtHCrQ49Hw77fZa6dnvGtbank3GUnQU7fSrBpG4mbu5sczCL3K1wn6XvToxhQrj9s8BMSv",
  "key18": "qEMMuidf2uKM6JgFQxkswo5an5EtJ9byZ4rCwfh9h7aMPx7DraoPDxeupKcbgfvbyoHy3Bry8u6VpDU35fYq1xV",
  "key19": "zsA3TsfLcvY1HSV5uKKhEXafFYguqpkTA2wrobUnmfgtgyZ9US3sKaWYoCdgqdtP4wx2UK76omdSsJNaxh37PFX",
  "key20": "41jEzhZK3V92TUEswkR2FLe6C7yXpFKitahgT7oMC6TbCsUvNemKYGbXtAW8jp5k1LpGP3qigfzJZ196a6a2ZcDE",
  "key21": "3tHaqhB8UuCVaYEGJ7aLkE7KomJwbWkDR2oqAP4QSHN16Dy9nsfcdai5EtkXhSqdvZiqrGHW2FbbohvpCyFHECT5",
  "key22": "Ahwu9YFkfGUrpwn7y7huK14PBHKyb8b5u1ckfcBdDN3dYakWuUYUAwUdmWKrSTEXNUFbbnCQTyQJmkaFkKrFPRF",
  "key23": "5xsXmmZXESCdEsPVT7eX5AWmf1gQkuDf8aAvWFkQMffCJbjfcrApwgKiiZ5oLHFB5eZLEuVrLoDGFQspniL5bm4n",
  "key24": "i8TzJseZp7YimUTNvbqqoW1mp7brUxZePFfWwgmUCJK2CpNQihLoVJW8qTN65tKujxdKmN7w5HEJTkUme4NNSJ2",
  "key25": "62RVh4r2hSBiZTAyUVPL9dx5wb7uDktg27hBwS7apQmoFnhzDCY29vChyK2L1oCC7fipoLHAXX2Dj1GH6n2hJmPc",
  "key26": "WjFZnn89tMjVb3oRquT25FnacksQqmBALPtm5VHmusmz7GwydkZ1xoAACjg1itqM1zge2nG4iicE3sBDfd9RMSF"
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
