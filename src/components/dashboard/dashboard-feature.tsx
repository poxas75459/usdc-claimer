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
    "5ZUd7oU9ZMQLkZ7zBbbiRwM62iGWaPAdm9wLUswZi6FPEJ1eWyjQb6iVM1XeddHPcKEYa3zKsY2cVukodU2GiTpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VrYSrdq7ZP6pKbgXJEL8gGzdEFwPYpVXtFz4cxMWqin6BzCeTdcguBU6cxxZmprYsVjYkWNEg74Jvp1qWEm6Ec",
  "key1": "nqw14XmMycSsxbwZj8Xg79ZK8FhQSwU7TJcxeWceawN5zdvJbJgAMaRLy3hpa1q6in9zRy1e5TctYaRjG5B4K9w",
  "key2": "5HEZrAhjAkDpRDrwcBFLmZhrH68hVHNsn2aqbCTFi1D7o6KHGLDto1w88xHjezdZAjtTekus3su5cqfEcX2YgERw",
  "key3": "5cE67WcN6YYaogZuFWzafSGh9PF4i51iKdfyofbEFUn2mqHk3LDG6cyrnuJLeYEQBizq9GruWTZ4uvGsPHsnZVHk",
  "key4": "61Lo43HCdLSbipZ5m3xD1pi4Crb8P22nPtwmZXvoLaVm3aZv7SmDvC1ngaKcwBFAh69BkmEvZwuCoJzgQVHhdnrn",
  "key5": "ZwMKPgmdX3tssPXfFBJBtdMpP95eUCWirnsPQ1T26buUPfBKbc7WYJEJ3B5fwvkiYNGWKkmqJonLb6VKmjqth22",
  "key6": "5872Hfjfmhk5nzMehB91WzSKpE34ockCt1NGogpNsUfdU1nVBKKcjrxrBKgcXWSc4q7e2Zqc8FF3oqDPqdzRfWNv",
  "key7": "5NonMYnS4Lr9HPHBp2wS84AsBU4pAc7D7wh9okek4QrbBxKrHjZJtyga6DPb7aZUuaxooXgFgoj6peuj5Jr3FT63",
  "key8": "2gzkG1K9bv7rpvCPwXx5Yav5uUTDuEEXGK3GisEBEc3zkRqusHsEvP6uqaE27kQojiWM6kLeasspsinfcfySmUXs",
  "key9": "2h5ucQNZnh4vyWBJF6eknNNQKuBEXcMFqsrQvY8ThiTAmb8YJfWGBLYV3V5rhiGJKo5AhJ9JXi9gFshSJZRbJKc8",
  "key10": "3YfYBmMKVZ4nRk8BZz7RQASN19ZfkLpnnWjdxjNcsT5LszUBAwaZAg9kiyniFY6WWEJz77xwK1EVj6TbUeDcvWwh",
  "key11": "ojuPS28QNX6i84HoGBi7PVeoeUZbTSXnLTmybkC4NB9kkdQC31JHobYtUyg31atxRiGpyamiaGLzD9Na117bVEs",
  "key12": "3e8FkVZN3GSPZgtucsMWgpafPNpbtbhHyQoFgRZqj9kNAJxTVrLvXTsYer5okAm9XFu8YDaqGKMYK5AN6touPKgx",
  "key13": "4mbh9YrWkVzayeLGXybBc8GVyCfr8r1G5meHr1yKT1b1Ae4au3E6tjmxX5hNJLdHbHX55XW1ARZE8D7uZXBAQYDn",
  "key14": "4vZreCUnpoLwLprnNg2Q4m6ExMRMcKK7sXwFaSe29rA6rAYD4Z5nn1z2nLJnWRPURn6NqPEBJz3oBGjwV2MqygeC",
  "key15": "4KwoRsT3BX23RYfN8x7r39wWdgjqkGNPJ1pogb5TxdgEyAdWN75bchFv1K46ZtAg1vbk1DJHUM549Nvef5BiqAEY",
  "key16": "5PgCTzraRn6Tgsh8HwpELVSFbiK6k4t5EtcmDi8ju2gAm2bCNxLmxPKhUbvLEvHbZb8QKEbL4zzng6fbRdWFnvYv",
  "key17": "217mmXX7QpuYQxfBDz6QAESht7UpVGxxyLZ6r56d4WC7YZtxVr8PPYCofBubCmhu5HghEW6yqnMUZ1AkmdYm5Wxj",
  "key18": "5pef4RADAZKacB6dqdEZf7Tj1RdAVmgCNZHn3DTegfdFyiKpiBbDcfP3QsFR3sxQ6Uj7i3aPZqWmLsqtBQrBaJz9",
  "key19": "3b32XSamYXm9yFVwgWMZavehRFexCuSgv6J5UCnLUs4ktf12ynES2T5mYr7jgcW9o3FZQsHSvC5EGai7gtaWfJUk",
  "key20": "52C91pid5nMN6nCALxYn2R5ZXhNd2LZMkEyXxGPUbaM1ShAb1CpxNF5LxrQGB2X6kE5QenVv1ofydpho7i1PV2vN",
  "key21": "DVMPvxyaaGGZthkh612P4Zc81jZwDcJ9Ps15VgzwxmxSVCfGoaUGnnQqNrLBvBjatH2sJyukDScneRQ5aY5DgwX",
  "key22": "2oGDhFva7dnbcaEC4Tmrt3ttagsGQaeTQsMU1vM8ckCztLGqWbJ92sUFQKRLLFtJjQ9NmtzSw7XUJhuEYEZMyTGw",
  "key23": "4NyvDCGxKiXvZUfC2zV9uKwy9w8psdaQP147XA5h9UusyGChyU8EwLrGi4DadueDPvRUV3ZoCXQWz8t6FfKj5Vdr",
  "key24": "5hdTo75h71oZ2G1MecZuepzJKph8NSQsfFYngThu78DMp9fVoMYP6bnUSm9Q7zLhqkUAsuqfp7YwQbUts21Wdcis",
  "key25": "8tkYkmupExTvGSDYtLtGrPF6Dtfizx5F52fbRJB5X1rajYcTQTqGjdy6E1JeR3JJpwkBg162vQKRK4yTt8YBpWs",
  "key26": "QYrHLSn4ZSWe8o64JVtgGk6w8fMNhRHKmZLT8NsYEFVCY7LTCQSyPm3p5aKSNRDNnFrLMrVZwQHJFXSVzGYcDqW",
  "key27": "23qGnqzyiKABksAUhkYtvDBE5wMjGtJYtz92NZqNdVQEvvvSjqjjBr7K177P9SH6dJSPwq5MffTK2YBurho62byY",
  "key28": "ktE9ec2u1h6XzbQ1jj6rv9V8ufmbnzheMWJsUWommUYFNbigUrWDA3cAgohaYT1VrNkb4tzHAZML4JsYgjP37zC",
  "key29": "4XtZQN9mhHRVxZgLJW2SjfJYD4i21W67D78d6CkajgDfn8gLHfwbRpNM8uG6ruu6bBtKoAKGu3d8pJiW88mNFv5H",
  "key30": "4XKiMFsa82hVwyksBc2aCdfPc8EqhDFw5d3utty94iDuo1d7zG5xmNb8eAAf6kYbijgt8udR584D1AmLdm8K8Cix",
  "key31": "3B8AVMtkuqeG6DiTLDc6YtURjmuZebmX6hrLKuWn3vaEN9c9o5QQsjC9U11XjGS45LA9HR8BYbpu8o8pgbsjQjMx",
  "key32": "39Fpx958m5E7KwdfEvmdVNc9Mcq8qjoQMcQVqADGyV6tMqYbtSoEmdkJhkFULPdeDCckks4kBFi675aQmkdHpuZy"
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
