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
    "5cmLXXVQLP85s62SBPdbCm4JvbAjCmPVzCjMHimrjzWumnpvSLsydvAhYYT9nq1ZNznQRWMyyXrmNYTi77ZBeHdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWeiXPTwbE2L18shkkwBZppTQzVSgrNcezdaZbx33SPCK4RcvAmvysvo7ZNdVT4cVxyZH64uTZBCmFoghXvb1Sn",
  "key1": "364dKLVTTEYULdGPojCmV7KuneQzJFrh9J5ZEtPfWvE63Lk9e1BtiBHpNrxfoZSUNTn7peam1WDCG6nzzmBoLQng",
  "key2": "376orkxZopQb3oJBjAiTCNPs4R5Sog8XpCtsvdLwsSBoJZFQEDUxuXeZKmVHrrVmnTqm1JuG2RUcvHgxhdenL1e2",
  "key3": "4ApW1zrSf1e7Wvrg5uy9riA7i1Yed7Bn7rfdsPKV54b8e1zZHVME3qcEbb2P1UoCZcye1WBax4RgfcXtbBiJ7GUk",
  "key4": "2XzjwstTiKRaTY1idmnSxEvh3UMnxru1t92APQjqc7mrZcqkvQ3RWsgpHRVHXNskL35JRNr6Qf3EozNLxcrERaah",
  "key5": "34u5MTm8vUhS5sfvv6gkjp2VgZirFxP9ULGLU1qSZfip9bV3qBdewj6LsSjB5EzKKo4H7nBEVib5QgJcSHrQonC7",
  "key6": "497yHavVtmZayCqY5eQzfNW33DoiCS9YrEWwyRgYfryGKEvWHdKyaCfbg5e5B1QcEv1J8onHF4S9tguibTGKFdck",
  "key7": "S1YCTs6E2n5X6CFNmUo5gn8steUeDRMuPbjdA1LgwRY7KpAUns2w4TY8x7wFHxNWKy7SjMSfxNxY7XEieQvWPuQ",
  "key8": "4deCSxsLMFBHYz4mWbQmnmGfJ1dAKdz3Z1dFmzHuUQoL6xrB8JFTSLSk4Nf2MMM39VSjjm6JBVAUSjVBk3z85jBP",
  "key9": "35JEodyohGRMskTgRgst4cpyXhEyQhkJ8wxTkqzYHZpxfzgVLmgsZGAPPrD8Pc77BCNdVWwpsWCfyLAtk1vcC7kp",
  "key10": "5GoGUqoFogxtumLq8M4yvAghk83qfRneKNXVTXva624zeJB9sYo1BvXtqME1FcMMvBuUnz1kgS9hSirikmb4Cpty",
  "key11": "4saAjvJNUHYvQnedymReoSPVW1SWt1YMXxFpEKqc2qR5wMUisPFfouqXs6QCX4kM2xcBiPNuGTTUTtWef2jQNzDn",
  "key12": "3Dzj5hCXfXYVRrY8Sr41ayVptyiXbX1GC1krPZeEhzi8Cv5WrBsuEtdSmN7MvCPpP7Cwe1FJ8n3vea92FgZon2e",
  "key13": "2S4TJ73aexaQP5DEsJrqWwVpVYsGkyy6mCQ3wUCASakAgtsd8HZAevRtwpwdeuqpMo1XgXDGLZQYoXpA1QdPNhcP",
  "key14": "2QcpAh4QSzQRjRR8Ypc9gqD13rYzhNNR3nbHSxQ9bDmDJsXcxbpKEuawZPMiBANASFteoj3Ej2YXLpe6tTLcQCiE",
  "key15": "4n3csGar9SvDaiDqRDv7i3UYDo5okUAn4E3Qgy9p5iFdQzEEM6YJ96XQGMyfQwGCRp8LcXxmM1P6e4hZJa1VpmnW",
  "key16": "2u7Ro32cY5J28LkzkudmvHxmaF79xQG8iAGkHQt1uYqn3QXZC2ut85VfSqnTuHaooRybPtXRmdBQVLV2p3wqwyAf",
  "key17": "3AdMu1jEriJ8J3vRbz8mD6STmwftzFi93LBJT6QqV4dZjNLZDortfywGg6zdxgMp1JJqrcgitpySGT4LWWUyAJVr",
  "key18": "42BfFsJwZXXYdytZhj6D8BrgyB63cp5i1QQC7f9Tnpqguck9i8s5pCrf9z2y9sygoNANJd7fgPV9zyY4p67JvMVQ",
  "key19": "57FLJDVRTabzYNRp4UGAWY8i2y9kbVZeHGbFJjafq7VWAhzH2759942U9VWwf5BGQYP2fpgzxZLKBzPwukJj1nn5",
  "key20": "3XvgQGRGX7Ny3mQkJKh6u6gaKhPQkcBfiqtGazKi9VQi4BeBURDFc16ADrBNY2AUMjncTHdLC84rpxD4qeDMANpJ",
  "key21": "5jMHU1MvpSEGc8V1tXjYFZJegnqYF9PiNBckJshcbd6QpPUx8WHU483a9u6YNzRJHipbpW8dQXJnqpEy7Jx666XY",
  "key22": "3pfMeWgMbjZc8HGejRFLDUScrK1NVRF6diEdiwkmox8qNFn7o2qtiru5j8dvVfL2zjjDQEr9t2m4m8BWXVFaACK7",
  "key23": "2W1XLdAZD4dh1id5w4fJnZgu1HaRGZcRu2RbpQxS6ptAfegRg73q56MDwrBjt2SMg6uzo5EvQJdBN2MUUbsJc84A",
  "key24": "TbB7WaNQScBYRjeniEoMx73HBASgfZyWkKsEYrdtR8GSs6pxcUrnSG5sRevLBr4uidMcfCbUQ4qCkSxb2WT5HUx",
  "key25": "4wFe1vkF6r3zNanbG1qPHsa5uTpDfxNrnWqjfrG42fiprCB77aiwpJk6SLUrutWimdVxWfksCAJG4Ki89rmzb5md",
  "key26": "3czwSAtoZvsAxMcVijNPhYqAw48YoLkZG7pydLWe3SDP4EAA8g4bRS7huWhC3wmTYMnHmgpKyuj7WLbUcWeMrWo5",
  "key27": "4em69BUHHnLhX1Fm6KJeaWesHGkBj4yDzGLVFW3eSrdSewk17zdoggrhwh3KQGYfpeYHNs8XE2c57wvuydXqw7an",
  "key28": "4Ae8CkZyp9ymMsoQbAVJdCcc4dPFioy63T2jijUHtAagRmLa6AQ8heiBvf3LPVLd2wFax2phrFcGDZ6ENhu7rFEn",
  "key29": "2bCkVaje7nX8ECLyRxH5mqqwh6jdyjSKtjxjQb8twjhr3fNhBdu4pXNDcLSZ8kdv3EzRgXLZamXu9kJHtPEZd5zq",
  "key30": "4RQEBubzmbEDiv8WXpFXNeFs6rqQnAXaw5hV5VdLgvsekXcfcev5oxrf6UeEPk52FkhES1Chrik38DcayjrWi91u",
  "key31": "4nXBGYzKmRAXbyGJEN7VKhTJ9gfB8DzibVJygUAScA2EvmEUdkdE8HxKsNZ97hUzU19kYmSd2VUR6zYtyA8apBhD",
  "key32": "2xaYs79hwenxdWXzDUdKEma4oh45ze4wxpsnA4YjSQXScq15sSG3Jj2PYGKMuZRAQGnfS1sNsDVirPzHvBGoEwAa",
  "key33": "5P9pjTTozwEs61FPSRPhCavxUBwteYeXzBtfshL457igKP7pjg2dj8WwbajP6i4e61vrax2PMsru9TfjRWf329M2",
  "key34": "4SuXCL5ptovZcqcijPj3CiM9EwNtZ1z8v5yiCYHfpuHEpPpiBUT65rpntmrN89hLWRsnea4KFddw2T5aMYxfiaxq",
  "key35": "3KATb2u6U1rz68qq5jw5oSP6beXXKxB5DB54MHMJxwZDjZ4sTqTRbtsEwugtFUQYAqLZLiZFKDTdGhXt5C6VrdZE",
  "key36": "59Aqid2R154ztWqFYz7MZE7hMsMsVgzuxjWtnuymicEBSUceWamAbWaVPcbqYYoKMUjyi3yTLYStyPUuTawJQUcM",
  "key37": "4nKmuF7Vmvj9js4TUyo2SsfXWxjSyv6zZqbwTCzfvZbeXzGvz61A5KKuuuayKn6fiZsTiCuyEK3fwHsWxgMURqU7",
  "key38": "2cqjfdwGyvCSi67TvCzPrPKmUxzjnzz7h2MbcZMV2yFu9WDMdCznhBFaCDrRLagZTF9BdC2Pdmm6PrqgmNi2Dxki",
  "key39": "5RBcgCUk1ZUTPPgwcA5GCa6hzRGJqwrNCYTekRwR1sTVdL9mugU31XcDsRQWXCY49sRBNcJA6SkeHEGs84vVG6Mc",
  "key40": "2uMVkFbfjNjpo6vjgvjnBFeaRkx2xKmso3fHCXsEgodZTQ4G25kDPrC78AzgkiGjPyrQMpd6c2TLYSK3F3RjrjdS",
  "key41": "4gSbLtKk9tkPk9iLtGg6KBpC6YAduFwehJ8mNCtvJuf2AXE12A1JEWZwLhsgqMcwt8Sd5xmZ37MeRqqXQqqzA2dW",
  "key42": "42YhytgE1F49budkB73myyV7MDgVrYA8gkF4JoxHwDKatDwe6ggkQ3VdHu45uRKzm7CSXjmTmMWrP9uzteu4t5Jk",
  "key43": "5QgGEwH4ZoKKfsjiq2WRoUndp78WmzRKZZfFrXmDnS8mP8ZMaaENg4YHNPhiq67GEPY1veD9TwhtDv7jWFPEQX1J",
  "key44": "2YRa4c3kH5cDjZBX317uhzAy9TJTBK5PHrJ3YQpVzih3dBPyucN3aYiN4ebSCEc1bg4XNx51rhdbwvmv6Xg72wu9",
  "key45": "41wnnSUqsYk5okK2jdMdWvzQdVQDSYzFZ5nmEMUapCVvJaMfwkWQP8Q57JeaCUmbjXuCUrTWRESvNogtKP7uJpad"
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
