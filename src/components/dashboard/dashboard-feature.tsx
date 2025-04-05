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
    "hRU7XCcHrkpa9BaU7osb96tKzzQUNKCaVKsxUCnkrNCskuZpsfr5nCiz2M6VhGYjMqmf9KFBr8ChTMAy7zMziLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Ph9nPNNRpCNjdatSw3gB39S2fgM9aR1R6fLPuNFVRfPXj5axJUexchFvgKeMEsyxuVEm4AMsA4W9T8F8hb4cFC",
  "key1": "Y8Kn2uQaQhxoukaqi5WuNtTert17a25zEjukq2ziupxGbujg8AscBVkYMmxEVRLig5LUDEfqJwkCoeiKXP9vccr",
  "key2": "3KdDFx6xwkgXGPgxfaNP3CRBAp8kxGxSnj6YZd1YFQv2bAv4geYf2Hxrow62vJJzmvrBdfvpSqPNFQ6DECf2TCv9",
  "key3": "5v2ckjBU9w7Ji7dWqpzzRmit4RgYrEGN8hGG8NkKZeropuGTUtf6pRbtgLHMsxQrQmaojUTveMrLKJAxmcW3dvZ2",
  "key4": "5C55CasDNbdWTn3PAsGWLqa432y5XZnGCXeDbpPND7NqbNEJK5XRSkUrQSbzL8SvD9swq9ziKWdNRMgmR87XqS77",
  "key5": "CeRgzWHYMS5BYmUMUfmeyUS5QX48KRvotAr8nHVS5qvD3uJARXboL9udz1pLVJBFpQgbu7Nz3m4oWxsybZhKxmg",
  "key6": "2xDUX6QEKyrmdvudEXEP9z1djxzLtu5eAD1nizfx6KP5vqJjr2owSvJRAqk7pVbwHZPTam3YfNQJkneVQpgHGUU",
  "key7": "5Zm2geuC3hWd1PhYwJv335g3VX7n32Fg8NsWk1eTKFdBgoqEfT4bAgDGiL6H3NrJ8rFPBF3wCdNdD3nmThvPd7Kn",
  "key8": "4cJejGQvLcrxUEKaBenercCcnsEnFkwLG7pa8j3NrBkuTcFTC43mja2FP8DfJijHKaQK2zyKhP6QemWV7oqJ2ZMf",
  "key9": "3K6fDUoULQfKqPPkwEdcxcknarKzgB7qGeDSi6FQgCpRcTYRUuwFj5LYwFs1bzCTfQKSAwewMt18Diq6hcfLUHye",
  "key10": "5KVEiAmqpYANmssAMSQZ2S6Jvz6Uha8hCz27G7VioNB7bbzp7zLjboM7rv2Z3vjYqsoiAe5z14Nwjq6Kw3Z1atzv",
  "key11": "fX73jJMKvM14wEwW3r8sHFcuxHR3Rt8qYbyNd4Axy21joPgGMxG19DKJh3dSQcsxkmtLjCp1FcrJbppcZMBgnUx",
  "key12": "4rTUBBuKf95ZEXsTGKco6ReLzMYiPDvcRw2GSpUQp8jgmy21KNNb7a2C6nPvAz1PUfdUjzjYMiJako8TQn86G8AX",
  "key13": "55QC9xm8nEcUPHuE9tHD8RbUYPajW9XgURD8Wdcr9KrFsMy4DuuYUPTfSXqwAYP1k6WdkREYquNDtvHHsK2g4e82",
  "key14": "54df5hPRvNE72gHY7jNYy3ZHSz4wVthSny61ABKiFzEgJzXZTADkMX9L3Qy3Qw9A85LTVvmL4jy2bSizA7BkKQtd",
  "key15": "4D5ca7aDKmp8xDkmniB9sk7jXBMPpfTd4JA1ZRLPvLb3Tj32pSdYGcUfiYgb1urBiJhaaWHSYd6XX7U7zKkWnxb",
  "key16": "66QGZKR55UzVVpTxCtP5W2uHgdk3JT9Ranqfgw2VuouCv9xeEu53ymzFba5QKCgYWVHtDpkZSaCdW8QV9castGrW",
  "key17": "5tMwxDpszNLk5Bwbi6ZBX8huLFvcE35sBPBkqNqnkakhiDJQqkXCTRzwaYcqibVbruthYvpQQth5pSX1qKPaxL9s",
  "key18": "Ew65f1LjMAXDDBPi1wCRDwwvpjQnMkTEK3dybnpKZUmqq1AJpfUHFv4hp3esjMXT6aVn34oZjoyA7TrYQj7stVM",
  "key19": "GSHM9dMRhYNaUvMTmpxwWLxyhxU5diVENF6uff9PRQqB6jorxofea6p41C3fBxAAftaqML8hSUojiogC6icu1BN",
  "key20": "5hk2QapxBzfg1938qwX9s6p7fUJNqhuYF6SH1vLuFXgiVW6CedWe8fTCZiHGeP6Em9zzAn4Sxr8YbCyLV5kqBxm6",
  "key21": "5KG6dtncjtJSNmsapU4nqSFAqCwBFrCyhJTb1PhAxfxrC1APSRkVDeqeq5sswkHYGCEzDrHCWZgLFYShAuJp45cJ",
  "key22": "3f6M3uBaa6hKUYZn6egySD1Tf12sv8YSrxJMf1D3LbXcgrPbty1cuNDSAVp6AjHRCSpo1TcfCvNcAHaPD4X9oYGy",
  "key23": "5xYzFtgV69MMDLwg7YqnBzaBaSp3yY9UfNsJvvNXYBqVyHdkH8ARHEQJpf7ce7Uq7xBSo43w8tvp2CVWY61KjfjZ",
  "key24": "4juDwn5uuLyjmZqSNxPnV6PBZHAxS8CQZ48kL2y1HcWugDyoLy28dARjPLVTSLfzGRDFZFUHdaC28ScNeXKD6Jrs",
  "key25": "57ZdP7KN8y1Gy9DmMmSvFGisHnPgfFiE9vKnu7Gk6NNxWEpssgTyysaYbvUPBv8z7chwp6BnGrv7xX2G3YLj7kUJ",
  "key26": "57N969UBKdGtoGYBHigQLUDtmvJndNTWJc8nqnS3tNDXvKVrX23zf4L5N7Ht8C8Ku42Y2y7jXdGFEzFu6dxE8Hf7",
  "key27": "D8uG8JSk2qZ2EmXhfCV1oRsrdSwgzyLbu5WDDQdS5TcnvqoZKEvFx9fUdBCs9FX1ysNMee24BoYys921BVe3wSH",
  "key28": "LCgZd6H9AGYtKURWhyxjpuC1Z4U4FBCnnoeYzfHC83ifkZsFPAT6VH6GJaKDdK2HZb1vk1KTG5d8KKGcw9iN3Sq",
  "key29": "4FnKJ8hbdFKJknTGB5vjFNdZoh24Kbn8xz1AetrB61eFK6XVKsUsqcgvhBWyDBNMcL4MWew5iPnXn5DwcuMWKimk",
  "key30": "5S7v2JnvX85M1XzMUjwzza5fs37Zi779kwZ5hC1GbH2k1dY77SncXG8pMNu63kdHBuPTCgUsfpgVFvswTU1mcZcE",
  "key31": "Yq2Nn4XEKdBWmFDYcFHgxUayruUuEhABDZUaGpRo1waGRHsnJQo5bZ1uCxZDqna5vPX6c12ULnLVvZrFKenCuNJ",
  "key32": "4dAKTutQrfVVBjfXHSEKJUfqUVTVZmVgGE6LJjftVhXA88r3mcJUfM1WHMnpduCfPSrg7iJhTYvMHYHBbixcKmBh",
  "key33": "4sD5jgur4BNUCkaPZKdrkir4h1r7MeXrSzDJEQvbqmBHwn679MtdcUwrJQQ2iGFxhbHyCvn7sG9LPM4sa36vRcGz",
  "key34": "3UWfpRtDCFdfVr6uFGoK1NWwcYdWpquZHDroadLsShovmmWfiDAkC991xffWEYsdwXDcxZvn7UmWxi7AtB874PCQ",
  "key35": "8uDYPAvxeUinrkuc1r8bVyw1c1zhpRh7WwaKcnekUqvVevNGN2qA7MCVxFA8LJ9yy7b2usLKhouz6Topz8sLxBz",
  "key36": "23c2URNixdvUxNdL2pJ2mtEBh3WB4cHLbRbJkncAAKXYpNEoTNPE3T28TVdQhusKsGz57pEBhZTZrWfZ5m6GfWV7",
  "key37": "28nnu9jW5tnAD9d21sJHAtqLTwimiWo2FQgbmaZAk5tpAmiWN36M7cLX9Fe5K3EBTpaE4Mf3EjW4y7BE7TccaNP5",
  "key38": "3aWHNfWWFJdt89xyisj9EuuSKtDa9rfD5p2vy6J77Nfq1A5Q5YvtwExNoRjTQSXwJiZ3PVyaeTWCUMXrcv4BqEe2",
  "key39": "4dGzkpvLi1o1CxrdNDxHrZUo8iXFrzEcBdr8uquN9cnD6HE5YdLGPnpBmHYc2LeRfsePi2BSNDqrSpuWmm3HyUSW",
  "key40": "3VvsPX65wFG1DciJqf3pwCewfCSWLUitm8KpqydovRQKYAtcDnyJyCtetkweRRR1MYKuGAmsu22uwhexrQoSZDKK",
  "key41": "3EkP8Q3cDpCRanip5z2jV6k7tf9sy4t5XWJUAnJJwaUPvstbYYgkQHEWJRwdxQQCS5xqaXR7CjnoW4PxhjD9ckw8",
  "key42": "5RcSHgxczocziti74hiQzGFR2gbfiQmJiu3Tr7tPYJ5MS57n7tHzUGFJBYgiXv3w6qeNLqCdmedVawm3ttC5TxCs",
  "key43": "3VekaiMuvvnyPNi28iD6TvFMfLEzns97FECViNEaYMNSEdAp9t8rbiiSzYQoqEyp679FLdW3LgoJuYhHyUV1omYB",
  "key44": "dfxuFk6gxDFqyWQGQB7L1pAqvCvR5MGnKTXubmht1x3A5Tjnw4rKn8HeyJnWuVegeqgLiTCquP9K8CPeyAFGe4Q",
  "key45": "53PUvMtupTEDf1CuyNvPDEvff16azdvppoBcmKW4FxFNDxM2yAJVJtNdbEcxqvLrbEK5T2Gd5gTNYzJjSx3eQcPX"
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
