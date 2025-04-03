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
    "5yWo2VCh1LFsRsreJN6ZeXCEyQy8gx2pgMCXQap6WHaBLRuei7ojyWz7diHSktjK3Q9wy9Wa41aTCYZDAurKznt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KJZzArwVegCHuJQYhkPw1cYigtNgPuJNvGVUyPHesxMJqXwyZMzZRABm3mikfqRU5Gnq7HZh4wuVbuFW1EqsEDs",
  "key1": "2teC2uyZ9hZEXL7GD64hQYvbUebtuYzgTjHSQaN1A2apcwCRyguhbxVi7YXrCZ5Qf2wXGPnVujk919e768gra5wp",
  "key2": "2KEXUfv36Ctf86663ZXngre67YQZp99g1pQHEo6AtQjiU8iMptTFU4ajJzZ5cCoQgLBywJD3VUr1BzQaCr5XAJpS",
  "key3": "2sq5WfRXdBXN4fCxnD8xfpcMy5CEpJgcSK3zxivLkfo9yUgsECChiQKNAJ9isghsG82RyjJSZQwMjeNhW6NXMaRo",
  "key4": "dtk9NJGfGM1XhgHAichxQFd8fP2UH6FtTeD9XSfreQ332PFPjU9MtXRi1FU5LRt7L552uDYtBmqFMeh1mrS3yYM",
  "key5": "4zR2QR2f2NPdE4f3ujHix9tDx3mxHrq7CFusmwFRQVgaFffV6mfQkS5msEZeJqwTzWwXw1NKbYR9cCsv6kkhshfx",
  "key6": "2aaCeFBRKnSfBzZLBREuhUghBtEh4pabqKEKjrhugtyP6w1f8PUDNqvm4Ne9uTTmCyVuQz8Zs76qJU8tKGpW6rrJ",
  "key7": "2DaZFhDegsvV5FdtYHMZ68tZeZezTXhuhMLm5SK77Dbygti7cdcqfKW5X2WvhmUHS93ZZRfRWoNB2vxDKLz2hcbR",
  "key8": "2qh2VwkHU2Vaff8QEUqxgbDqZhc7WB3m7bUhLdETP5H5xEEyXeR7triUsTvgpqH53Qq8zvqDPqPpGvAGhdEZ79bZ",
  "key9": "5gSpmvTaPa32Vau5bosK32NVutSd197HDAu5fFo89wjT4SktPinyzqv1DF93APzn9bhBvodpKsBu3oVoKxgjvwZ9",
  "key10": "2xnt2CMpp8H8gTqrbHiwzj8jKupDgFdZQxPdH24BJgJS2T2waMWmMgDNe2r8gz7aCs3MxmLjQcAZXF4AuXrQysNF",
  "key11": "3MyzU4UEfSUnEb7t1ExnU6dhBMDCfLjP4ySwV8iTPSKjMMtbxXCNkeRAtgUxBGtG1J3uutBYrWJa2jeqG8rtr89C",
  "key12": "5vecsMVetJXoQQitBHw7gtizxNEit2Ya7neRjsQEYuqADxxcMATgkJfu4NoDLbgrvTxw8zAo6doutsMSZSzu3zuo",
  "key13": "3HcPRsd9sUe2o4Sgpg5p9E26ExmK9GsW6ezCL9tW2YLLoqV2ertxgXyLwvx2jvHMy7XrzcVijK9EuTDqsG9zX1Mj",
  "key14": "2RGQDNWVt6HajTBDkXtbRsMZGDJBqfyNTxJr2wXhvNaKscaRyBNPSBNakRR7CLqFYrLMQpKeX71PTzCnC8gcmeoj",
  "key15": "56zaXegxg3F4T2HiA56SgSCoNUEx8UXPwNd4xMoGGRfpYBHK3Xau9hzfRx8QAokM387nQPUPqjchU7Xftd7xmHqU",
  "key16": "5cAu1oq8CDwMQbmZxRGxg7gxQoEN6xAsSAT4135TTAwSymaiGBZF8g2WH8EhVz2ueuLQqs4a15wxyJpe1eSR4phM",
  "key17": "ENTAmDNUiJWc4184KdxVLebG6DKepQ52mNdCohte8YT8aFqeJcmebr3GkPnUy7cGKpqAm7v3xhUJkbLYVpMzD4e",
  "key18": "mqRQjAnW6oaG8fUWo8VCApCkqwfdu5kJa3JZTHpacwNxPxNbQS9AfeDNbnMkzeJ9ycboQXd4Vcd6fEA7ZmdXQsM",
  "key19": "3ZQairqC1SJuEW43mmmrpjTFwtTH17v6PisDxYUqnCc9pyCQny5fvbm3Xt9edZgokfHVuxsxAiubxhQbmakYDyPL",
  "key20": "UGFmVEwomhx5tG62VRGsD71qaGcJFXkp7Xw6yVYGgJtx3wWxtXSHn9i1YWLAaTJPAM63o9MiSaT6LfUDiYMqwkQ",
  "key21": "5uzuBa4dWg3mbDoqKS3ejwgLRda3KmMvSYvV7amqFMm9ktk7BQ7CfgEp6DwP3DMJPvVqG7gNfkapq2QVnt9JSktW",
  "key22": "3Rzc3HM2VpSBiNW2ch7zBCJuYigYRnqk1mnZqFQXVd3yqmXGpwozpjWdnTyPrytUg6Yxj5GHyESPZtV8Dus9SYF1",
  "key23": "45EkZ9iu6EnS7JngfGWu95y8f4mcVwxUMcGs9cr51zJK2L9c4RvmADq3jg98DMvGXjnmQiHciDG2RFK54qDUWpFe",
  "key24": "3KyoQ3TquMiekQqukV3kSmJuZfxqyLAG6MPadcayYbLUhVfCu28j1DZ8ZTXeez1vR3gP2nVeUkbaqPSA7MYue12H",
  "key25": "5nVSfG8A4J31AzVKeXz9nKqbnayGGkrB3ULFpBNsJs6XvdNgAauRyokEZiQ9u58NKTcppgKAd5g432AC5SmgDxMM",
  "key26": "5ShbKsuULmp4kGEhDcLv4biwPM9VWBPp9esmLEAtUKUoBGGta6y5xnM2ucnK8VhCFqPSbAo8MPgXmt3Qy1xar7kY",
  "key27": "5TECkNJre4sr16Dq91GZVcLNYGCGkMpE9gqRz8g9Emjpp6MkRS5H3AtLebnsri3rMfVnnKsFXfKUZd7Ej4fXoLTw",
  "key28": "26E4qwjB7Hh2Msgz5xeMJ4EMMn96mk9MPfmNdtiCPc9ZWw4bfhoxRssjUxTveU5JvMXBnU2TqkM4uomLzYYyGfS2",
  "key29": "4u2eUQNhqdiZb1gTdt54tt6qD3wu4ZDScxCu9whF5sxYqyka6PVsQwhhPyAqVWHKxjK2kvswpiPYPsZm61ZA1Drd",
  "key30": "2gaJQmqqx9WxuBXJPKUvRRy6MmWXVvzfP1rp2gHCQRcfmZEErf3aaJvC9VHmf5PbV8rrEBmYBguHPhVrZeTMof3p",
  "key31": "5eMciuCwcmkLJPKHUk24CVgEKNwkjFF457nKp1Jx8DHxUyVkgFuaDHNoegNqGqKvSHkCebvNyXsvQDzEVVKUSCpc",
  "key32": "2FfyRmeCcsLGbQHEaC6Qgn7rrFEx5UKTMQ2LJPSwoW3PjrSSDT9MyLKByZzYrHsX4VsxHGAsePMm13TpitbtXyQQ",
  "key33": "5QRoQFEYNfmiXei5EgzLWfvctr94N6RhYJb2dk1qbf8H6vrjxGaaJTW4piZKCgwD31H7UfFgbvNHLdNHmvQ7ChBK",
  "key34": "5C3VzCbJziRNnManFromtvaB6Wmz8uskmPDE8xN28LmDCs3PWbdBku8MSXqXJc1x6j8ge5V4eNEcgCd46zoN12RP",
  "key35": "3yHzigksJWKzkKzv2MFwj9UH6df58wUExecwAQPCPhoFwvfEc2ktxs43Yc9HAGSTqtxrJybQL5zJ7QpbE95FEhow",
  "key36": "3JsSPscDE7BiXTu2PcFaEzejigEPYhpAEKCcK7cE1csrYQwKHiGRXGLdjfEKvbWUDxx8737XfeTJSj9MgpF3YKFU",
  "key37": "5D2noC8S5Uacwz5LHAd5yp9qPvQpJb2gzzyb8EWwhCxuVAmffrJReUobyqsHDyQfM51pRZZSudB6GsssqWm12Vh7"
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
