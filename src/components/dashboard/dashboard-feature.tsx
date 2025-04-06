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
    "4crRtNqLMbPBru696FaBPmrBTQMBCjF1apVFpKCe9GKXiZyyeJ9sStJ75HQzSe2WRmpCXLFQcWTPLL53mLG2N9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcGkhQBbkYCC5NkRJBzfy34k3mPk3hQCDiBFw21dMskkgCtovwiU2qocfzShxhrhvrczXeEuwUSnkXA6DWmoJBH",
  "key1": "4K9GUxdSV2ETSBVeCdysNKdmSfcwEgnBGw9N2VF468Y7UYULQ7bXTwhoH4HZLAkZW3QhCNxiLfVnqd5kiqiGKug7",
  "key2": "63LeUQxjWHmV9pBcuo2NnL8M6BQH2CP1uCgPHzHuvBwRM6gJgPpeJ1QXKjLkiwcRA9i1d5aio6MWR2nzeAj7xbyA",
  "key3": "3oDBdKhJFiCQwyovYjkyjhByyBDeMiT4gb5UZCFRa5KgPUnxSK757Yz9Jf5Df3WAhru4GD9B1NWoJs1kJwL5SE9Z",
  "key4": "3x8cx5FKZ6hoDycaJnuGQxWppxyeG6AemAj7ityisaDRdDGQv5nDTqAPR9gUrKuCMwk9vS6TM76hmL2dGh3DLMEX",
  "key5": "3vVqjfcSUVHGev3yhxvs39SoKSTWppVvnr9Je5tpioP2Zx5peB59sCDGWnSwBtjMa1ubptMStXn51MkT6NTZNLs6",
  "key6": "RiFLcMzLW4Yb5fJnbjXRWfM6hMvf99zdvrhwjG9VenZr5ehCW8Toj7dH1n9q7DfwKcbpNcYSGXS6Xo6XTAF9cu6",
  "key7": "3EKDBwVUSW3999DZPqs12yst7kyvEjBTdHMSwX5vCY5S2JTZLgVzRAyfBo5PjWmt3LfHMn5rhJQsBMvYBQ2ugvxW",
  "key8": "4SkV8mKNkEXD25iqQ2eddHm7BcnfnUKV1arfuaDt7yDapricVaCdHX6gD94Gb9dUXPZpgUNQsaxMxCehZPd5WR2N",
  "key9": "62zGJkzteSzTLdhbctQc8KAyqB1BcfQZGBSmMRoA7W1ncWrpTqSuyZAGaggR5QCnx7vxrLhyH4MSmMbBFTCMkenv",
  "key10": "3xymBXCKRsAobPu8hfQuBkyinNtiXyBF3a9z5AQtG5qfwJgFzSB6RxaMHwh84YWaoJUB8rEPS3CysciBnWXfo4Y7",
  "key11": "4HdMGXPPPbEzPYUxr2CMafJnp4VQ7HcoYfsETekxYkqtXiyDQ19Lq24VqeZ5C4zrnAi4KtcuanFVPGR8K4aKFah5",
  "key12": "48QbaSoiCQLPg85m4V2cL8XF9RDeapu5Bo5Gu4Sw4h7nZy2qNPbnguGbMXTx7Dj9pyK1Gy4RmxHwz1JLtKwhiZfb",
  "key13": "3oL4Anmo6pmx3gTcNND9sGzbat2sdXWUFT6PM6i92bQBP5i1QzvTYvr27EvPYQZgXr3hMzk35sD4H3pJ2qw6sBbY",
  "key14": "2ijCkpQYDaqWWekMyZmrxFfBhoBanPrCq29iMTNa3tGsXMatamm4kG4hLRQdCu8Ti73VvpMVcq5wd2NpH9j7HbLH",
  "key15": "4NuaYV8dzDBi5F4V1GdtuJfKcMKMBfmJTfJPBJSqjch9ZGK2XnWVwcMhyUMSuPm96rjzhU65nU1Wv6naVdmpq83Y",
  "key16": "5Snj6EWgBpLqGRnaBSpiEnpN3jgpYr7WZmipGZPYAKuVnKkjk5DevAnLHZk8Uz4To74aTCt9X2vGy5nDPKxVW52T",
  "key17": "3BP88yw9sbUBWBXGGgxLTqQDKHYEDTjpLqoBa2rwZ5TKa7ZHDdkxYDoNiYNqTkfiSnWCJpUFVZxzvFuT2FibYpxY",
  "key18": "4TJtByNcWUCJrLGqUQuk6MjYoN94dApJskXqKVHv1WWkr8RojeG8GJdUb7YVr7dnTQ12qhuW4ToSxX49fzQrxrb6",
  "key19": "5aRAjEA5nFEoQeNdrFFxo1X3cqWGWKRNjeipootC2JQNovU5VupgNGsEyCxUocd9tWTfvKymvoiUmYse3reThzXH",
  "key20": "5a8xrqRT1A8zGUkWnbpwkif568JV1oW3UBo8toaEtMkRSQu52ZvKyTNaRDVGP5qS8dpdQStPBtoiPmXxyMxCJEZo",
  "key21": "3N6E5ZEK3zAwx3PxXRdSZJxWJLc6gufJjJdTj6SvNbQEFgUz2kZV2uEdgbu1Z9NLJ8g5UmLRbqUVxwQ16yF2X15T",
  "key22": "5u7N1vMMPT7CpBFYet7JPFqJD4jDxPCZsychQSgdrA6BcMecp15dkr1fPSsXAg9CmPnGpDNaHnsTQQSu5HH7gJQ5",
  "key23": "5iPLdGLkXTj2njYi9uYtLHPpwRPF9x1xXNaAKqM3M1R3MmXFyNkTmsG1ow2ix3afTecgqjGYHPsJsJUyPxnLUgPD",
  "key24": "VCGkj4LxQmfKfmhA1yy7JPfnNbLUmopcA9eHxLSUL7VkFiUXBhQAPxZ18qwyVwkNX6BktNmxejwaJgcLvXMkU9G",
  "key25": "4S2dYViZbH7tAjBVSdubSL1Y9FZWZ8kBreiNwrqSRAwbgFUwMKqPiaEcx19yvUwyc8hHtVm2Ro4cwVR8Zw6Ng25J",
  "key26": "3ScvELkd7RjSqZbacTcfY95Jw7qhhjvJeKoLqQJCHXzzPVFoTALrNtkRU6ERN9gXroLsLDVpV3c3zH3gW2ZTJUmt",
  "key27": "2UDaHEfnx8YjmNbbHUicDMtu5KwMma1LYFhy3CxrLkwoJJgJKCE8MhTEa7DkYAGmmQWrn83voJRSvZeeX1vqK2ce",
  "key28": "2SFEyimfwq3GX7ZYCAic7aYDQc3amEK1EB11tCgSZyMfuP65agmAdyeNFiybtnN3Dp5WfpPUn7HPuPMLsGHgwsbJ",
  "key29": "5vBKcWHYXsfzYfTJrYYmsD6HUDTaJzK74PfiDTd715vdagBLusW6vSPY2qtyGQHSyeEchpf3ZsGGz59SwuSmjCdp",
  "key30": "2mrP6KiYKqntEiqUV6PaKVPTMsA6TimQSUkXk3ckiyWHYPruXFk3yJVGsKWgCqdpd1uPJ8yBiEGSLzZTKy1iMwrg",
  "key31": "4ZuNaotchwmQust2GT4b8YVVxwH6Dbzu6zMT2BrcwMkFQzFLriW9q5hqz59Td3NdWGEnyQVyHYnkTUvokjFhBzBP",
  "key32": "23y3gLdPTqTi6r7Sh7UWc6r11ZXAnNeQLUaqK3h67wGEigVYghU6gYQmykvgqhmu6ykPPPt6GX6EeVqpMS1DAXpt",
  "key33": "NDfwi7TCCkxifvyL38ZKmxiDc892ChuTA98J7LQvbiqzMUb1chPqh8MWHHSMBM2hLYTnuyPxB66dUhUW4zfTbN2"
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
