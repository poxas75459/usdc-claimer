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
    "FDcPf3DbXGVrGXAtr1SwoPzQpLwvBwoXj4Crx7EQp71SYPopk1KAx5VfL5YJNLbb7CERcovSvHhwbWJhrnTWtLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnJAdt3Bpwy3Hmr2vSw1JgsDRCMAJ6Tpf3Y3kYMmphQRtej6eyXeFHvQ459fAw5PphgKokRpV5h7GahS915dFRp",
  "key1": "aFZcqzHGNhEfxffALEXV2HMPAjvUgA3qBvCFShtCjdMLwdmCCwkuw19TNY5gfMcX54B8qiefuyirrKFaTpQzQvV",
  "key2": "5AwSFnTv9U3Ju5cyD2DasPptrNonzxHem9WPz3XitC6biBERqq4NjzXYKYRtLtcwwJ5fdpxTCf3kQqjvF2mBQ39Y",
  "key3": "3Ruw6C99XgBrbgMH3G3Y26TqGvaYemm3kk8yaZDeaEkVnQahtv5AmF32JcqHveQnBc8ucQRWB1m2JWPRtQyEST9h",
  "key4": "4Xwe8zb8iD5huDDeKZKsfbJp786Eua3SnTj2Z3Zs7x2AzgaeRt2nP9oebn6s1TaRiK5LhiDfpJeyZ6qF9r5ay6Ua",
  "key5": "4vHzJJeDN4ZwAeqfWeZyPfMfjfSf5MtNXaE3jX9dRiR31e2qfyoR6qgjwtJWNN8kphj7UP5mgB5L42Z5JnpiJvYn",
  "key6": "5EHGWKZmudLLowXFP7mXwkB1Re7UpdXReKKogakk3ureGNiNcZwv9CRYFqbkzc3XZn6EdcZjguwaUXjzpGVbGamD",
  "key7": "evhQ7SPvWaTfnvRXVQNmYLZj8h7CdHVUipMmpPW6udmDkXNwk5sYNsAyX9apSrWAeePzCyHBotgGRJ8ENamA69x",
  "key8": "4uXGiR8rLp2HgPz1RXF2x3tSqaMBEW6Uudd76UaSNVvLae5WFMZnqbbSJSj3Y7cjKnyaENj3zL36KekiH5nw2qQy",
  "key9": "JCtUnVCWxUCpBhNaJGr71v5HxbYCAdF3HBeHgPwEbfJbM5rLWAeHMUEhoB4eMXV31cBLUzBombndcgoY3etJUbA",
  "key10": "3exwcqaayeQhxdFDpdDrCTqkgpMxvKQamtBhV8RaH8vhfBhjoepy8BnxjPsza85bNKipAuUC9v6xYGBWao6qtCLw",
  "key11": "5nRG6A8L5YtnpBPPY76RQ3tDrrefPkFb28oc6AQAKMhDTYuDbFdWmmEw24EyLubV1VqBa7QZRa61YPB3KXsMFRoz",
  "key12": "5APkFQmXBbHnGFgS7ugWvSs91nSmXPvcp2MYvhtkrNzgMdGeYa6GUMcEbS3Pd7Tt9uqUBn25rmmGTfTTCbxkZLV6",
  "key13": "ZpnjC4MfiSDjGk5Txj796p6TJ93nQrSgQ3qAbfdTtaEexkrHc2Q8ks44oCertrqgcz8sWUizwiRMXKa3CJZ1aiw",
  "key14": "wH8oB6cMk8AtAT9zDEtbsnTj3Whpg2PEKTqrywmqgSSLtJJ5UAa8b3RWJEH5Ndn7PyxXFZL4jPJyMMEJYP2eMuC",
  "key15": "2udvQuy2qCZ2y2hiL6mr1zHuDh8VuneMmSiX588wvxTsng1zXfdcHBS6A8utDcW2tHFcYoA69oyW9ZVo1n5UCCc4",
  "key16": "2DiKMUkNzjBGYtSqh6pLgJ9PMp9Rkg4RvSsvQ6ktVguk8XfNWrxiqEwaL9DxRSfMCVQWgzhNxrtYLZnWUs1tYUBE",
  "key17": "4j23eHhSgyRXXJCEG8Ldqx14ftdHffFGwbevhgMxBhDV3aXk5mhzBUAZoizauJP5745vhuXaWbhKzqTGWgV8WiwC",
  "key18": "4xJpEWZynYNaZWuLZKBA9bUBcQ7BfgLmS5onj834PYUdvxEyVqmD5WfnTfKFV7LimZBiwyLxsPGQHT2fUn2f8h17",
  "key19": "3V9reA8pEPnmewNk2f8b4eXoD4MUtLRX4BAiRiJR1p5fCE5WAquyAHZkVz2iQkse74d3BGDHsh3nADRKzH1xnFBu",
  "key20": "PY2cJmEKKxPga6Jhp4DPMeLvZeqE4aVrJ4zvAqjZr5SJBR1Y6x5nqudKFvRchwHnZJoPsGVcxb5GDqwSZzC4MBJ",
  "key21": "4dgWd79yncSKAMvmx9B9MgJQME6VBmDkr6Sc6U2F7n5Dkxuo9wBQpSbkuB3aFnxcmvMRYqoCCkraUiNbWhv5NJGo",
  "key22": "5Gs9oPiokQLkSG2RrgjfamPoqMdbSbjc5CkTXymcw6YcD2M3HK3w8VLAFFLMeByprmemSr78wLhHhta3hDJLddrV",
  "key23": "3nDJcHS8eEd4xHm8f5ZXxLnBhHybgDirU5TrqEZQC9VL9HF3VypdfvU6mWM63Vq6Hh9G2kZxmCczR2Lrr8RGDDPu",
  "key24": "5gShLQYi96G68FsRLqJmqVe6XP1TGdpV9Kc8k6bSumb4FWWGRFkMr4joCb8iXz8ZoGcj8Vxd2Wqz7cKZ9sXiWfho",
  "key25": "NAbgSw7i7RLavfuvPyTworUxc7q5TABmQ3hGQKEDPCgWDi9vzbeYrSrZHKeGWf1P1LBJ3QpqKGJZPMWz1X4bGQ8"
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
