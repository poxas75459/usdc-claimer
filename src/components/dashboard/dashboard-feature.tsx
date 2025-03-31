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
    "5M9Zb9wT4Gs7HPEsg54oA7p47usf73T565ntHUmdP8Cge56D7G6UgraeLUe8DTG5HgGkEULH7CaLQWT8Z1ukHyx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AoPNyYskgHa7KfmGccfHCjyjN7PhwQ8LU5yyGFsjiWBqYNv3sdTXP2eDCzj4EJBAAgYQBTLBYphatrSsukrgqBB",
  "key1": "2dc2JTBjaiPTLmBV1fBwxd9tE6iLY7oZJt8cRSojpaDsXvGe5MWDKDvRpRaAMN27Ket6GLw7Cg3fmQMiACepR8jN",
  "key2": "2WREG89A5QnGEaQoZDrhxq4hcPXRnkm3NCf7BGfbuyujimJBMkmRR6SUnZ4BjmmfRPneBWZLZwJnr56D2uKxUTs5",
  "key3": "2qGGkVSEHUAU71Dtyops46toHyjn99B99dKwmj8TizKHtZhQW2crf5AAy5BMaS4HtXvKjS2Vf9wuaPxoKujKa4H7",
  "key4": "2KfXwwujHXEQhD5G6ZxiguuhHwSNRYVhjwWHGkBRFyghPC5phn6yeDMBmk4JasMHecSwYuvhfnAzjYfeZPyn3LTZ",
  "key5": "2dzEphee6r61FDjaqd1p2fzpVfnhKHZEnccQMthMZFSWr4drykCAmwh7nwfFrnmEoFzXGvoJgKubege8wBtTRg1z",
  "key6": "QEz1LWYzGGspJNyfyHMFQ6un1nqZkusf97hNuYAwdrTvk8J3uEBte9bj8F1CSABYgrNGZZysv7CGV387TJUTDYs",
  "key7": "4WGBQxMxhDbvp6ed2h1Ce18etBVtob5LcHWxK4mUaVR585Cx2VR8sQHptMpLZvqcBYF7QJj2nUZHi1qkC6pupfby",
  "key8": "3VbDTLbAttNg3QGJ6AkWpvMmRzf1ozaqBevQd8iCG6ZoXs96BGzDgK9nsPceFboQYrhGnm2hVWyQXFqVUpqN46nN",
  "key9": "3igKFTZHAtmfyGFLtQHaiUZNhd8gNji7idJLfGKrQp4Mg2HuDmwATBpmA67xtCjoxztpbaKb3VXUyNRdzWsA8NGT",
  "key10": "2gTujojTVPbfqR69DGyroDnspH4NKsVHmDZgSGZBES2Ezd8EDZMw6qQpbZNd76TMqthVtknn7DBDjqeMQ4YTWyEm",
  "key11": "W8WqtUTRvuRefQ84tuJYfEpBkamNtVf3bv9NNgit4tm3iKsFjBVYVF4hyGBTbS7FoByFzaRvUyH6uq7HZ8ngV1K",
  "key12": "3GqTy5d7oD4irQQv7hHmcp7DGKt1LMgTjj82GE7XagVtE7YvVvK8zbSnJ2gdsVqgV5wRp3w2UABLwyipTSd8az3p",
  "key13": "5gXd1VfK3kAszVA63TUvCrm2hWB82pqj8Ao8Cf22fBy3Q1puxyjZar2QTYzkFhofY4yGhcMJ87tvBPY32HZd89Cu",
  "key14": "Lhi4J8Cj6K8GbDbqNuidkPMBAcww7WfMTC9qo3J7bRxVtSVz82qWwpgTydKqDgmzWEMmivxrbAdAtQZtPQgT4ij",
  "key15": "3geRkWn91Rwb8ZkR8D5JwULrnsD2JfbQP1KQ4XJnBMJz8BocXWF3GauUf25qAdhbrp9zyxx9bqSoLB8peDD98DE",
  "key16": "c9NxFrFk3K2WBNSor6F7X4zcxxEzSrb9Gmh3FsHNbzVvqNcHw3Gq695PYtbdfx8tDMcNVjqeNNhQ8TcRK5pZN6b",
  "key17": "4VfVd2U4zzSrAvqY9m6fQuzzKQB5ZsmxeUAYFfYCVtoqRd7NyD1KwgitY3n6ZRXzv5FSGk4rSm5DuqKgGwBjon3X",
  "key18": "2LxEEd4ejdxQY7G2qyRgzpTSgzRyssMbFLLShJpzWzqiUhJCSgw9BYyGHnX4ik8ywJeYY8UGXZsb3pKQwUZRJBLQ",
  "key19": "31n9yhKLfFeRwTb7fVny5Nq3tc4AC3LoYReSsGyPKuydBZFeHqajZSTX18x2PnGVfe9koxBNNgUsBo4cbGJnBjzu",
  "key20": "2xXVoxkcxTE4phkXdjxyNQfwxWpFBjY3wq6w622AnZBs2JDuWztWbKbrkDb4QA7doDWsoY4SfzPLMsF1oCp4v641",
  "key21": "vhXhfec97FGfAgTj2Rm2diBb7vjrzvaufNE7MC4AgHvZAmLxWbekyUXsRAEMe9UahiiLUWWU7JLfNXy2vkMJksb",
  "key22": "3XRaKefBCHLUyN8FfMc3F76ciCBj5v1GkkegSqNYUVMNZYu1TBUwNnnqf89sVLS6SVEbjMigW9tVW2YtkWkwtfvV",
  "key23": "4tCAUsA6gvL8oQjhNf3DsxUx74UfGyEsjgGhxzyqjUMrQijq7e9SRq2cxqenB4iKkqU4hE7jQzjiMbgxzCCr7p3b",
  "key24": "5gJTiVBL79s1gsbUbzMEbPfqeafkA93CEPc6TD7izZS6Et6e1o9skSjA4BTjXWMFKEhPn5sVpdonZhrSj1bRWpXK",
  "key25": "2xp4kyvE3aNBXwn9U2ouu1thZbgsFJ4emcTSdRCTTtpn3va3PzvP275Eyvcgvm38YQej99dMLg9semsu8YCqcaDa",
  "key26": "5JxNpRfXnAy9PMY3XgeJRjLSmKagD2Bhzhw4QjfQs1mVDpuCAjdAfVYvcfn8H4VVhCCoqV4RUwnKwBzqBquezPgW",
  "key27": "44Zscz8tfaH5b9PSiVRLScYomLksy2tmywMy6vrVaw63H4ra4x7uMngrrj1HKkTUeCogVWGBXrsQEusuw4metK64",
  "key28": "5ZFpnQdEe6tCi2A88byf6A4XP1xVxqrAEWRCfxDm5MWv51nT932Q6DbprDTqY2k1aCkMX4ufWqTN97EWrzn7yCJQ",
  "key29": "664ZCnfazapn4XEqbESK5hYy1QLma4yvV9EC7DE1Sev5FVPAFhfHzBy5tktFpbUaRZhAEMJimuxDFXsPNhWFAVrs",
  "key30": "YmGueLytUSUEL3tRQeCjFvVo2gmh9ryg8nLQdSnW1odBkDuFR2tskx36BpvsGFbmJatkDfEvGBWD5hjSGQwQQN2",
  "key31": "5G8qtFDW7c6tYyHfuu7hSq6boR6YfCEe3hTvL1rRrnwfdh8z88PXhVSdxj26iHbYtVsaqqPPBkqXFtrJVLuEvATX",
  "key32": "44FKSoQmebXFy8eRzobCreGV3s51Z4T2ZPDtKostf6Bnd8Y8crSdNKv3FmGmnhvcbLm73Ln9ZpA3ZXdFMfF4r4iP",
  "key33": "2HXj3dYGV9XFGYFWsen8zN7HYhQP5PNLYX8oNmUQwkZasMyi413ruJw9ZAuxGpa5ece7B7GQcp28tBWCeT5h8rEH",
  "key34": "QHApknc5ZFRvGi2LSLK2oQ88Bvj324Tm3xFB9zFd3sMon3qTUXanaCHK7BUtbngLAxA5cyMK7cED2Y6CUsFheq8",
  "key35": "4UXH9b6b2xrqmHbvryB8sFFtSY358Q523mCfhZwsTaETkCgvu4X4ppExidAfmr1tao6zo3t6Z8P4CVskZuonTv2L",
  "key36": "5QkB4k5zjEwdrjWnQPd1oWxDVeYEjy2HRcwaJ4NZigC6TUSdvT119HkAo1GuwwTbJ2zkdF9y1xFrTReAj5YHp24X",
  "key37": "5g3iSyUxKyTKcAkUof7M31rwToBMWYaXmv84mf6LXMwGmTTAEGuAaDmTnZRhHkXhD3c8FTUnLkWV15YkQrqCEWns",
  "key38": "63xWGiERSMkDgYqN1m5xzx3CTt5BhpGeAP8HU5pouFNcKVsUrufqtUdCLaW6369pfcsb7n9gx4CAcoo6pVVoRESf",
  "key39": "3fcmGZCz3Tb433rWn31fExMmciZ46yURGJhgbfZ5AN5DfAmRB38u1S3DobTkg4Axw6SsqN6Wv6zv14yWpBUPpy2P",
  "key40": "2p4FjCEwR4sg7cuygyUnntx1gTTQfWKVvpWTAKu1xDypoLqRzyjP7QMscowj6HHNSjEWXhBhWNfPAf3Sb3aARnj4",
  "key41": "2QFX3uKeeTtqJrBn4g9LYSwbgMnLHNLvmvgQHL2oWhyasafjy2hp71HCjaSLTfPn8bBq7UTZpGb7EpEVeqirZYku",
  "key42": "4zTUNjLUNa7F4LRfxq4t2kLqJR7ci6ec6JKxmakdTNf46t4atLfVh8A6LtAyRuhFZR3MSEEfaDzmvS5xXy8hY6hi",
  "key43": "2FSXFW7KZjFkryzU2o35hDtAHbc5Png2HuusDwP36FzBrNwPwvwsGgP1zEzydvrhNHffJxjCQxV7usdjSyNTr7NJ",
  "key44": "2KyYXXt9kfSG7gNt3zHsNDNMwF2fZQcVZH22kqfJi1UbrK2VCQVqoKk1DEnArNyp4dQPmrvnERXf2twwMkvJ2TNA",
  "key45": "2haH1DLbwbeVPLFjSieAHD3FYnF6CGnMQStRLKxXeRWhTkNJLuaGT8uYdJcJURCDwc8zC2u4VRY6ZhRe1QETGZ7G",
  "key46": "GrJ28oUWn2gUbab9TEp6K1Lr4xo7UuRYeEcEeEyVRnHq7LnBaMsMEGLGJe8vGZJ33Nk3MVAWLL7Xwyrj6vvcUwV"
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
