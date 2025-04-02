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
    "66MN52KtBNq3LsheWThqxQakGpSmy5HoYxRnZKmbEYFXLCwDHwxVx1CiKuhYLTVuwFDEpf41izVP6Pct7LKXXyAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LiBKdS6rH7bCdeRVLXXdxJkWLesEyVJkrM6FYaDiRGVaSUAL6fSSG7kcH5xE2aAKAKbGaJXUc3zDhgBvE8ZhoCJ",
  "key1": "5axY91DiwkZr7eQHM6bsRgyZsUAdjVW9s5MCQ4dKyUjxfk6X1azKJGUy8ivvWktGCKdysdbTY2Ya6GQrUTQHy1mF",
  "key2": "3Uv2PwFwcfACRj5xUsCmu8FQHEXVEZiZoG5aDSfpXcSEJWMrJLsg6WGzpUUVmd719YS5TxQozpsFYtQ2p9yYp9kb",
  "key3": "2M7b5AY8AL1FNuqz5yndYsdaLBMxsvqtzhqsuoFUQHEo6kv9wEUMeaNNof7dBjwDNc2XWGPWhaei2hgttw5qWeDm",
  "key4": "4Z3yqqFMpQyS4MgMkbMpKaypTap3E5a7sQDo4ksACVuuz7KVLbY7mvc68MYtzz67jA3cVeFsq7x38xwWrXDQiRpD",
  "key5": "2zFK7d2YhidAW3EVxGrZzu54bUfvxDumK5o1wPhzAGBHzmdMkzy2FsfoyEFdHTJC8cCMXUJ5VYK5HapSQZSKVQoF",
  "key6": "5CjVCSVyDWSgBvPTrD9sFVcFC64yjGyeaLk6Cqu1q3682UrXNUq8nzHwtrE5hZaPpGdRRCo5Ck6zTYekE25WeVmM",
  "key7": "2L9N8v9Eayh69TW6QyqkyjcyAnzcEejj1VBRza3622K5PQBPoFuR96f6Rv5RRVKkUSTzrtMwvkSrmvGmMeG5BPY6",
  "key8": "5Cqc7zrdhuEuidLW75YoSanceSitvYRvpfwcDAGcnvJHoqSC6D7oomU24ynrB1cmxgvcFBQy6uFqkyaK2BFFYEKH",
  "key9": "61zhL2vs7JBpxSnEVUGJnG5fqicHVYY18DCa9ZhooaGPNGdH9KBtdjhikbU6xXJp1Y2VEipa1bf5K1LdNdgokL2A",
  "key10": "52BRG637amD2anzhHYpmHPxzEEwa1AmhxYDVPVaywduGdX1AAAoQTJqvuiUftuY94aWZNv6gDD3ngp8XpeN9JxPJ",
  "key11": "3aprGjMhT6B3pBsNW7699ByLR6GXcoEmVTexGRhbZPsTTfYect2x9c7VSQnMHSW9pbSNSHzaR5hbxXrAgxnRAYv3",
  "key12": "67UgQ9omWGo7jzSBRNPKqLinJ43NLiZd4ohivqa8s9cVfyD1YbWVh5uTXFGyYSeUgdws4VkEYyzX92An6BMjtR82",
  "key13": "5HFikKHoF1H327kXdZ4aaCEz32fEk8kcAg1kLZvAVpLSMRn6xD29d2rJbfk1Yso3Zp8Coe5eWMTMV3C68CJ2BMf4",
  "key14": "2oky7kfLi9Tgg6u5FJET4XuNSuZUA3KgoksKEwnYX7gWYFdNBgdzqFahk1unthFjLM1s7v1hvZHKJzB2WpN2xczU",
  "key15": "3D7Ny9bZVhfbE1tBUzE8YymorcJPePNQQeRy4yzJczKoVehGvaCekZ8nYBB4gCj974aG9BgaFy9hLg96gSzYiXas",
  "key16": "3ER9p6yMADEgaW2wNNARHSKcdi3CkkVK9ev52KDQDmWnFuR52YRmPcRaQWWSrdCtpoY8znbXms65XVmuwWT11EXm",
  "key17": "tHEvpQEVt7TPQvj8ie7pvMSr2d54oD5XXg4svHxasfdekqAiHoo7BKpWhpFXG3f8yPyqJqd321Qrd3XgE2keMQW",
  "key18": "2vUTdreDJPdKjLPhTF6CFR9QWJRtE2gY3uF6gwLrX4oTn7YrG7jo8ccf2PPt66HsrTYWfFWsf3Yv8MG8s6Z8wZ77",
  "key19": "oeAubE5Swc9avkgm9XZmAguzZWesaAFh3CUW1kwyMM1kp1wqPhqgevHS5d5b396V2cLSYz5mMt2AUHkMLnBUeCq",
  "key20": "36JCNC8iqZ9Ny5P1mGN3dDCS2huoEaRrL42MdQukbK42WW4znxWQ5KiA5egsWTu5s5j1gkpVaMBFBiQqge5kE7Vi",
  "key21": "5Aoxgk9Vh3JVaWNz8LbdmwbziLWtK4HukdSA56wLd96WjXQSE1CdnG4NUC169cP5iqne9HeDAwFHPH15bQf2Bppj",
  "key22": "3Xho36hxH7whCwNY3hb8zK8aSiFgmXyyGjTRPy7uXpdy9Qo8o9otmnJ13qY8wnELotYzc6T9L8eJNPjhPaRnD3Mv",
  "key23": "2hAv2F2gfo1T3DGdG3VK12oPR3NvZnjFZ3BxxgjUpX7N7SEXVatgcHJwxgTFzgStYxymRq98oL7ykP7fd9EkRxPb",
  "key24": "2vtzSq2WgbtnA4ajjVe9vyWcZX2ss4WuqRccZGcmtZkcGs6suimoQ8qsAZgkYtfqHQQ1nErC5wbge3rSRGE86tAn",
  "key25": "Kk47yhT9M29wz1Wg6tDDEELT5WRg9geUQdk6sM8W6Lo7C2NYHjn7b23rhbLRRFceVzBrvu8GFkHJxWRU7fnuRZn",
  "key26": "WoAnJG9phMqCYWZcQ8T4hy251pJRZ6hG8ehx2L34hNMCkKcKc8kUVr4nGP9EG838S9puJerGU8CR1dfZS8NUbqC",
  "key27": "4LDXvb2s9vrioJTpm4nTwPzGX3FG4ZFnHWdPuXQSYu1oB9HbcLcAayoog9KXwBymf2Y8nWRt5iwfBzda2ZRvk4xr"
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
