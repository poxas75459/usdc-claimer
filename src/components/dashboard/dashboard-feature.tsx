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
    "4LheH7ZXdLtAs5MSFnAZyjvSdg1MqQYS7v1MGiBeLugGq66Zf4HFTyhkN1ZWgXuApMAhFtZjCm4CB31TBQfAmya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pxuyoPkcWMfxEmSPu961MThQJjYohyPmMoK9GqtAZc1yfZt49V4bSGBtER4GERzJx7pWXd7VPzBzWKPufGGMain",
  "key1": "61BKbtDwz3SBWW3acWELDZn96QNDJJxWMnJ8FLnRe76635f6qS4aXQUTWiFeGA7oPqyaXuuRiKLQYKZFHRNDi12v",
  "key2": "3AZetDvCRvZTuT9LoChNSmUyLxZQB97JYNREX9FEbFyPmdooxvr88tbjPbBS42dmnZKjog1kByTgqLxzSBN55u9X",
  "key3": "U4gvV4pCJSyJ9TUEoGy5GXyrYok6cNUDbzrbeADD4vyU3z6MQ3CHP6zJt7JH9WM3WqnZ3iyZeMiNzwDuXPJqXZJ",
  "key4": "zh2Qir2vjJs91tzsn8Hozq4jH7yiaL6jA2AXEdHK348bLwaYZLY4JYVCS9B6uMzhYjjCGJvsoG2gf3TasW41LHh",
  "key5": "m4biPM3zLPDWTQeUqtTSddRvByp2RAYHy2oyHq8nV9VW2bgx2Pv2PGdhhbpasgfqmEDg8Yt6y2BsoKByfnXX42t",
  "key6": "44qcEHwVpEGex1bHZ4hi38cZMtcfzW8uRQehpeBB63JXqAoZwspzxgsn4uMNT5qvJk33JJoG5mtzhhvWYHGMkYYG",
  "key7": "2CjWG4oLJW9pMo54FTNqczCYxnCPUc9Pzruow2KAy4xYBkgKBn2TD4Y55F7LsQZbygaooziMJJEWED2hXajsK3m9",
  "key8": "5pmSNEbhv6FBa5qoNpDFT9yW1bH9yDK9o9PnncH4HHCpWcn9JQfzULqSZEma7PD7oE26JkyHCqFEQyD9kWiYavZQ",
  "key9": "4Tg7wGXKvzdhfVYs9RHkpbxwpGguabUSrNN4eZ1WEWm5ies6G9BKZrmDR39diSz4uBpuAGp19zP4SrZjzH2ve9k9",
  "key10": "PrinU5rPXTCYrdVgwMqFfu46dkUeSdiJG4E374YAV1n4iXGTgQmnR5SyrD4ByETqvHNbSDYCWC8ChJV5iwvkFrv",
  "key11": "JzwQ2oWqyC6MnxBwgWhfKpkYjpLJoMRAAe67krLbwZniCkLbh9TpseVcxwpDi1yiUX1dbgK1aZiGSdUxGE8t54j",
  "key12": "3biaFHCmVHsfas2prF9r9nuhqfw462fKTaL9ZibPXzhtXKdbAApKCMQBn6XoYV8uvyZY3sLGt32ccfTZn1dSqqBr",
  "key13": "4Jnj7phAQri3Bb5rsQboyrr7xschD64v4U75GfaPydrWCSmrpAPoXW8JA5dCKA5XeYfcQmmVFpJZCGYzPSX3GPR3",
  "key14": "121qMqZ4eBuVhE9YhNJJFbesbm88qEg8RvbDK2xweKCxL3dJqtv5XnM94vRvRGarMak9Gps8Q4uN8ZjsyemFLkq1",
  "key15": "2mutEjTbHEeMnueBdQBip1ENBNHDuzpHpcJ13ffzCJfxPuJqmnbWryVraBUUGaZvrsRG4aizimkfD8yvYkqNAyVn",
  "key16": "3JhkDqw3Z64rKDSVbmMyTHNvefgaRsCPGAZZVyAwj8N8fFh8dNtEcKPYdmfPWkvRyno5vQ63UXG8U8cJEfVpgdLn",
  "key17": "FA6NzXZ2E3FyqR92pj5kdWyo66AjnbcmY2f2YP7oiyYPGTtR7oH5PLx4x25gookEbXr8edi7mZWxTRog4thYieb",
  "key18": "22AKw2g5oSmmAACrQuvxH7wWGbA4cjmvwaFcuwi6MzNa8kqoxcNScvPMZx3exPNv5x9E3BnSA6JpuB1d85VBWU6K",
  "key19": "5dV1XnfgaPUpvHLKzFgGCBvpvg63EM9vVoqrCnv7rTf5bhQ67FGUz6UmRRueC7X4Ae4JFBMqe1XVYrt9W2LspUyF",
  "key20": "q82TRKWYhJMB6j2akjfAMfXTrUtnA8ey6vPqfEsVLKNxthXRZoFt52c3pmfiN8BeThpuSLsUjaSFN53RHJibamk",
  "key21": "677neHZWhjyk7oMn9YSavAhUDQUeZ2ZA4NFNSEkoUu7z5YiawjNQGWMrkqGL1JY6kqrvwwCM71iBxzWJFb7KYfNL",
  "key22": "4CBXzgiUpDiNiaM4vGFCxeXJzWH8qiFfX1wAMk8YDPQ8U1RdYGRwESEc9W4AAS7PVTqMp4eZDDWVNkX5CVdVHMJZ",
  "key23": "5xsGuBtpZKNBvtrYXmyMr17NtTrE29GKKk9utE4czCtueyeNi3vT21HSzkMTe89wn7185G6ioXAxSsFGttJjHB6q",
  "key24": "3e7geiunaTituFM3MVS9tYFii1eNapWRgjKSUkDBiLTpVCWHLSEiUHzF8XchSi9yqXnRbGEcVQrqF5LTMB7bfMjD",
  "key25": "3DMY9rmRugUgygi3zTKp5Q8fk5KKwknHNGDVqAgknt2222WgvDSdB9rityUwqHgBke9i536e4PuGfy4ZT5tDWbRv"
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
