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
    "2nyUKTmfvCkzG3i6bTPzLSwgMu3BEQrM5qNbtuZpZo4NPawbDjPguMpk9iY2oQeE3HaWCT8kjsZMJv4gtiXDevCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ynru7ZXYnRHDtXf1ZgRCngfP2VR6AUCuo6QMP4onvjfSeVrD4FSkTTJrKMx89JMPun3mNxUsKWE3qwgif9jbyRx",
  "key1": "2pt68MuTKG8Q5tvCBuHmaJq85VbpmX6E7WT5vypkKUE2rTT37eDTZDC9ox22RMNA8P6naupxcWfXAxP9hLkj4hi5",
  "key2": "48QcniunfnHYf4kiEfjKjeamLLSFYJyDWHL8gQAxavsA8Aay6z3QWwcrKjLxercaoxxtbQMD11JjUSdK5a3ecNWm",
  "key3": "5692EnHJ1JFXtvxJYsBNmVaNWWk9ehSFQwLnpLyiB8YzJa61JtVHmEVTCZpRfTnF4VGBF6hkXDYeDcVJj3zkHA3v",
  "key4": "4ghqkb9rR4G362zz1ynVPC5koiybGdw1Zm7RRGyTgtCjp9p5dDpbGDqy9ovBGgp9Y6KoLMei9x1qQtNvkwttcZtQ",
  "key5": "3Vs1B4y3QQSYiX6GaCEMZwpqsPMyCtsVDub9tdjkGP7Wvmbkbq72ZP4UcsKE8oRM6JjuPRxRYGV6aLdqtjKXj4rb",
  "key6": "3uhqb9a8H9csoaUgUnjZ4usSJYosQ47vjmQp3bAeQhPxiWFHPHv1SyvZKDrkaHCrfsWVDyFsnpWaUMdfp8tMjEjq",
  "key7": "54K8BPoVDTEFU26eWd1Lfbh4wciZ4T4eRnZFb8HnMSz8oxEi3DhjEts16kCLzjfogLfXRdqymJ5QnzfhitVdQdmz",
  "key8": "wWTLjPBP2mfnQH6eosKaPEFU1V9i1xkTu3QeJAFBTEUe9o5zrGcP1YVfZRDnT5oC5hJuE3RM8BfbY2LciJmvxSC",
  "key9": "2UKTeeDrHbCnbKa5uFQ8obNP2VCrmyteRmepS9YdEFKsnZXHortbCaBTKMQfGjmGZWvfeNjjacERA5kT1Kd7b9Q2",
  "key10": "5EDeypBciJvnr4JVZa1Hz1WgcdbkbGRz29JPRHdfetMkMBmYAiNY8u6vtrJaac7ZzjJiFRYRFdxt4Ecf3FkYbsVW",
  "key11": "nJu1Jg5KUPuF1EA8BoXNQHYoPS5j8K4TUh1v6HdrSkTszuj8R8Yn4wvAU63YYFigJgH83jCiRZenGwSvZwSyNYN",
  "key12": "3pFS4Bt7MBKBnLpF3jzPwxv1THTVYoTEb6LKvoyPhhtgRBdiVMp9kuTfTiuC5cJhScHR8Hiv4xvKpPjnoQNkoPVb",
  "key13": "4u3rwGSV98UtcwAxhgbPmja928j8BhXszZUjBYTnDciwQRuxiyVYzjfrZNF295BLbi8cVMXrpAqiaz8P4ufuYrk9",
  "key14": "4bHBDg27ow4CJSGxk5C95VNGN19AME3P3yDKjU428UHmyevhrAXrAaEgM9t5xU1QNeEKjRYxgm2rjUzLiLWk86Ef",
  "key15": "bpFe3vCnRD3UigvTGhfeAmQ4bB1Lq6HqCHTcr72Pm6vWSp48FBKEJKV6URqF79nMVp5gUZjUWdskXe2MXYkKLqW",
  "key16": "5eJiwTmZXvuwNAio38h4vr4nNS6SQKmYdZXGyaswi5Ta5y4hLDczDk3ij8aNCbpZYrFfkndgm2HhU36tWWAvNtuf",
  "key17": "3nyJCXYsWLhzU6FPwpGvBXoVEQE619EsVAsuVwWursmncGq7uqBgJWGv6reWeiZmfCna7gzLp3ewHk1HsrGxhivg",
  "key18": "4Z8GXyZsS3jf3rW3VR9N1V1qPsR4c2VGrvs8EAvEkSQHKfa5sZPiK2h1neZek6nEDo6t8k3jRvk6nPVJVD5nXQn4",
  "key19": "3yY9KEMTatq5oXasyF1UkNiDDHJgbiMqmrb4eTi21LcdR4ARv7XZo7oDXxALmgRqUa5yQin7hcxrZxNkRkAdYxxR",
  "key20": "39TuaF98eQKowSMMZ2HkC9oEReyTxP7FTpy84stt17cm1bVYVS85pmiwBKrbiYuqkifuvD5UsqQEBVLVaHSehm8w",
  "key21": "2RntM8kAQX8zLmqArnXg97PYEFMVF22Xa7zup7fa29ucsiaVt5Qt7iqKHbm9RpN2t5qAQL9HNYfME21Sxo1Qz1kd",
  "key22": "3W6TZ6FojPGxDshtYq11cKvec2iDs57demTueTM3AqK8wHA3iac7CoGdCbFW4cZefGZwm3Sg3yqv87aZcf8efNx7",
  "key23": "3eRogbYrrq6D5Rj6NkzUWPyf6xXeum2oxn4EocDNeyKwE9UM2QJWfnejXTWrsmMGbxWSCPnLBftq9wDxm5XraHU5",
  "key24": "8TNYYDgnhGm13CWGdEGoeQsYLSX14B8BMxJCCN7zNDe4L9vVvC1QLdDRmFu3tEnPHfdtfPkuiNXhGT1PP5b5VeQ",
  "key25": "2NMdndBTqqPVdn1Eqzi1J31Zow9drVwDQ9xSrQ5fnwGtRMUCGQEzSmG3115mJ2nMyL9T9RFjzhGT9G2snHs4Qq7h",
  "key26": "3DCNrsJqso8uqmRkG62poK6Xgv1EmERDZPjXwaHamVcnQKWvQTMNxrsTrXzm3kkffrC7pWs4K8n5onSbxzzC2M4S",
  "key27": "3WA4RkgipXkxiGm5spv5PiTiFuGhHBYLFTWLrMoy1mY8iPaLSbA17rsdDG32oaE6e3bnq11VgYjP5vU1wNh8TrP8"
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
