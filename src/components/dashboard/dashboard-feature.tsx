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
    "WTxBNoo6THvisGkDPPnRd9kbDUhMmPnRHSVSPBCMAebigD6P3aAvLfSiBMi7tehscf63Wq9RrH88gRWNwNXnJcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmXn5DAJ6renx1Canr9z2SS3kmthQm1r8bhRGrDtjwgXz24xuPYEjgJA2hgf21fjfy1zzvQtccbAPRVkuZRBMpc",
  "key1": "452Ks1WFRDhFG8idwZA8ojStY65QrDKZ6fdFDNmTWxNhDHTGVvenqLAHGCdSyMG2ufWLq97bD4P6EeiA2DxgqXGt",
  "key2": "4o86cM1RXge9qyYKb4m2tt6wcoqTSEimtT8AqXJLCn7qnAhrZwb8hmGT384HaAMEWDbJwxptNrAoEvhaR7tRWZ29",
  "key3": "3kUVQujFKFYacycVQL6pNFfgsztazvVV24xQ6Vi35G2vb7boLxGnXMxr12zJeZGuACgp8kX56FyuUqjLprUwpdBq",
  "key4": "5Q7rjGSd95kfW1xmZ3EfiqCoYErTKm4kfJKBK9afKjQurpvXDWLiqBMzP6QfmKGkgfQzkadsNa1ABo2ucuiev8hB",
  "key5": "NRw4squQqCHtyejKpdBfo1E8nLZ5ncEGa86WoRAgtvMkPVkJD2asxA2yadJrHt1JQaMaZiWv7sLsdnKT5t5u6Pe",
  "key6": "CqCoQMKgDjdnQgwb1F7ZvHQThm8VsoMk12rVTuoMmC4wLUyFcUDAJrRGc3M95nat5PE1mnSxkMnkmeQLmYDppvT",
  "key7": "4hdvvYwSukCdc9zSHursCkvpZa1bttpPFiVyjkZ3jA2MPhirzA7ZG6op6sBX7HXAfHJVdwsfNYY1jK4Gwhj3gdnS",
  "key8": "66kVqxuAu5K3gNoLAYLD2ChDxCSnf79hh2hGGxFFhDceZh46wn5Zqm2WhkMn3rQ9KZGzuJM4qGWRhCzxNpnXECKv",
  "key9": "2d2xS2qEQdfdqPPAbgs4nfGWK7tgtzfny5cDLYHj2VdiD7Kg4DTUgjtqRyQD7NnuU5KVVudoCKptDZUjiz6upJvH",
  "key10": "2Yca78oKc3nZcaDBfdwev1dpuyTpr4tbkUdTsj2ZA67RUDPq4wsqP5Aiywhc4JwXdYQetpHjrezjZVP15m6EYRmk",
  "key11": "F7piKfgShDawznm9PewPgirP83DuVHwaWTDLuaMfhfUwp1odoCuW9nm1vmc7tA15YmJpoVKzV874JtgeK53bq5m",
  "key12": "3GUUAtx5J9ofyg6dbLT95ZSiUmiq6KnecKWByVfTZv3ARDo9zjau7zQrGGMqfsy7UwtmmALcs1wNkr1xLW3pV3ku",
  "key13": "5wAj42C1GtC9HxoTpJjTebacRG8a8WoSauN6kdmC5WCY8A19QDyGVmzUHCsfZtXT7qBriQqK5aiuDQvFFXSNnibJ",
  "key14": "5oMNa8VcfHAAZfS63wpKuQwN7pCm5ypjxwoRbNoYyGv4obCDEBSUqukBLDhg5D1QKk8shXrBhphcLWwEdhCMrtgn",
  "key15": "3xc3TsATxQ6XGhb8sszk5nPo9fsRvtMGbajyeYrkF3dQbYYExXFQAiyjTTaZse7wHWqngoDzQwmpxTSuA3FPj9zM",
  "key16": "65doN3G4W5k6QCzXhwZmudEyE7aRZXiEM749JuYSH7ZbbfZT1K5Nt4qb4RPSArVXLkYHPbFjRJFuysvDrmn8zmq2",
  "key17": "3HYDnwLPskqGSjF1gNVxghER96MAUaT372WiRbjPv4D26fXEJPd6NWZgtbDWq7hVpCNJpaWVtXdeJckaKTVWTJoV",
  "key18": "2xvg2F3uyThHQSWCsDqt3PAc2LJJn78ArmebsP2s6Fn6BjpEbaCJEnmXJQiH146wuxDmUZWAwDRJa7cTY44mF16A",
  "key19": "5vn9i2kwvmjUQ7Ky74CtMWV7hxqAd39sCdLF6F4AGJqDJeUQBQchucKkpnviDYDj6wW1ZqUid5oNc2zRAC9i66MM",
  "key20": "5vHLjTDTjhPefgWxgfEYQRhyr4YzWr6LtPLYHvQBkz34dEgdQmcLuZn9oQukSftD54jeZVrL6zhKBecnJT5at4v1",
  "key21": "USQaNiiifKcFUoUDaQmcWrQUo92Ph3yS35xdhbNKWNnjnQMT7JkQsnTdhQw52L8zLRzGsa8YJjAzphup59ddnoz",
  "key22": "5XTvBydipxAoWj5QsRgA4nyjYKkSwqxqDVGDRFFbj79QT8WiyhxBy1hWFoE9eR7GiseAEcjNPrEHsWqdJhGG4LpD",
  "key23": "7hdbux1xdk2jFpJ8awBSLHrvP6cTpMxyjZHW3Kp4KWMUkcUXPcHxShUDY5Y5kRUa4gBcuGNBpxdrMNPNi8Mh8CS",
  "key24": "5xyd8wExeH9k3B84FiGRyv6WeAGKZichRbU4gGnfxeNUD9j9LJwskZek4BapQuve1M1K8NJFQWv9MVPwq6pLg6rU",
  "key25": "5MgweNojoEjBwZ54UDv9GY1mhYM9F6VdjEdxBgZriFTUsh7Zt4qqezYNN6B9Jq75zF9m7wosn1sYjjw86YztbZmM"
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
