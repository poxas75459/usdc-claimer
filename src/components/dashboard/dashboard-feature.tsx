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
    "5pg5a7goLLy1cLj36NNb2VTG6xDLtzxkCCW4D9u2UruAVQmweN3KFrih2cYMWC4DBJusDe2EwoJHxAEhDnoQRxjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yNehGt69mQGdMrUXRzpM5dJzCrwyFCC8KVaHHbVNucRARVbeu7VkhozJcEhuBVHx3ZNxAMuLdgknf2AHjUzPks",
  "key1": "tfvTFzEARf7x1KAzDEp5GKikxgBx68ZGxWVsdfdhnt5J64MCA8soCkYKPTxZRKACsr4YftPK4pxyFp3AE8ztZZC",
  "key2": "2uQyY4HhQRs8upb4NBMn3N3Mv7i6UoR99etjwkC5epAAPQ3UuA9dRziVz7JTcYgnjfzBVJvRNzfT1UXDbXSUPVRG",
  "key3": "2YdFvZwkPPmvtKGLnrzPiGGU8H1MGoDjdxZ9eAE8Yz5KXJfzkn3dVZ7fNDQZ6Mi8LnbaaVwP5yTM2Agm8kDCKFTd",
  "key4": "5ZKJ4poCcPmNtutJjg3vC8jggyn6onc7YmFfU5vzxTqAmKC2boFtcdbd8JG3UHDz3D9Vaj8v6HNXy8RPd2xtv5QT",
  "key5": "3Mr3tb3WKEjTt4qBa7xANtL5GdJqFts1ATgqabuTHwHL1Wwesa4q6bsirN55kkTGwUCMVgahC6Xe3Pd3hRbaBFga",
  "key6": "ZnGaG3N3DpApenErQhHkaph3wKT9GdF4gZK3cTQDyQMkFJghCLgCN9CL4unn3qWZ8Mb7gSufWUAreDeeZFFEebb",
  "key7": "hMYY4ycyTQ22cZ3exCgMSqhqADBQ2K8MhdWkzdojN3e6kdjQT4sCG3xSS1cWNR4tpbjnRWdJKy2bi3TWKjx56cg",
  "key8": "Yivha7KGjHb4yudiX9eY8RLqGHWNZvie31JxdR73HKWXz8sEx1Yqn8CitfzwDCjX9iikpGeWVd9hadkaStprcwf",
  "key9": "4PfXTA1p9EMNiU96oLqrZrzZn8M8ujrcpUhwzcPPWBoAe4wJuJJBw8axY4h5PkGQYU8cLj2p5k2ufrBbsr5Brkny",
  "key10": "3Z9sTFefdDcoCPHaaMVJwpiXdqZE17aFouWmghausJZzmBYd26dfemsChDGKQ2ik3yGrVUhk4D81Z785iRiP7zad",
  "key11": "kLH3Da2sbNwZE2We1wf7vvSBW94coXfEvsnt6Ze8eEN3qpRXPXCT3XcgLMKFJwwzYfeH7PmETaY7w5iHdRBZMhD",
  "key12": "2bZ5HPDn18fj1VZAU9JmHNUP7B3vGszMAvfUH8JYT2mjtwCU1CVoFgCxW3PciKTKeECiywsfEMypPW7YzTCZQYW5",
  "key13": "5VL2AT3c9VcYimEqtXxW3yBdpnUyfqXabJwRNg8QaAx8zaae17MJNEAtibeH1RXqnm5AzhSp4VQyXqwUvKje7ZkX",
  "key14": "2fNYxVEYy5ZsXQE41aM8rwW4ZhAts5Eu9c3g2KPudmPn6xrvwaBFUquqRvJvZJ7WjXdJZ3mx7L2beqBq1GMbtu43",
  "key15": "2qEbXX3WcqU25uPA8TyvdK5PDNRjx5Zd8k7vjKfXVWorvNpzwekZdTM63RUE495RQpPchZPRY8S379NgnwAB8mDD",
  "key16": "Lc6KVbtxnY3V91bPtLCXNaXuA4rRc4Re8K1FjRsV9Bu2uo7JpGM3JKvh1xdbbqLwM36uCSp6pXYQgTpACKRaMtF",
  "key17": "32WLin73sMXnLaLFvUHu5LTTKbS2cqNtX2jXN2E7o97KBrAHEwzXtsYtWmT1dDiqBn13moiXijC5xrtjkx34wyjJ",
  "key18": "iwNiFTL1sxL8JbX2QYFbE38RJzG6gLHLaG2Uy5xVyS9zhGYTZM5gyPKXo3pwgtqpCvCnPioE9z3EDEi3bizLPXd",
  "key19": "3XgkioJe7QdFuMCfu51TM8VijbbaUvZyVdkWZxGZZ64nV3ZJwRN95oopZ28QLn2MuinLihL1QgYyUvifxTeH7piU",
  "key20": "293UqR641KjdxvmwdR5UBdkYj17WhnkrCTBLxH36o5giYRTTQegRw9JLqaZDrEWB8p2sy7wKSekGswHGXi2hRaVg",
  "key21": "5M1LdHbtigLZJrCTRQD3k3qcPtRjhtKx6oi5XMA3C5b8WzddYtnjNf5B4Hp5pXpNkEGhQZmnkNwtACXhXajhDyL9",
  "key22": "3RFYZzQVtTsroA4GCkAv7kZpXHjqhfX4CFPBwYbrNRfy5detnhWnCUfUWMjRWd9dnwTNDXdYEwc1Y7Pa5WRgUBHR",
  "key23": "25GTdMUVtrQa7CxArdWfG4vA1LZYDShzCqeLBYv7422oWwzDpgW55rYz6qceMsx8PEBNeQcjiZfhpqUhiruu1hZW",
  "key24": "2huhPHn6WPbfNBQ6qj3mtmMfwvv367aMaJ5fBe3SF1JJKkVM7uFiDmnxx5AmmVVS3vTeL71GGQQSYchfG8YPSnUp",
  "key25": "4xqwKCVagqiNk8QCzQi7wSEGLYN8KTY2vZ8WbHCwFabG1T1NNr4N2Wxz4q4We6PVLiYu1jEyKMmkRpjxygZBGpCh",
  "key26": "581HpFEVmF9R8qrfc927HJoipVNfPWHWvSNCW5mgnLsrw9JmJ9aeU41mTtrvYHzPA962Qcp1AP6sSvx2Vs9ypw4b",
  "key27": "3QRT5szGWKWVY8VAvTCt948z1vpHFtdFNHb3Aqs4eqPsoABbaNDRDAzAZBjdehXdTZZGVtq1sEDBvqoJtcRZepoU",
  "key28": "21mrJBxVRUjBdjaKvuSxFmDDD7eXsrvPkmuac4VB74uNhn7NruSSXDrRURmN6iCSk6HKn3EpwTrEU34231WkKyow",
  "key29": "4w5x4m2uMkBtMuefA2mc9LnK1xiF5ZPjmcZkNfnBkFYPFDfCkC8mm9EUmapkXmntWqJ6Lks2rLLYy6QvQFsxytgS",
  "key30": "59sKZwdjCJUVPh59BZKvWL5UqM12DdHD6rGjMHJkH6AmJCxCT8TVPoNuabRx5tJEViX6fB9toVR9kyUo6rEuFLVg",
  "key31": "5X4wTaqSXTazpwA54Evz3PqE8GKjzz2oyLfJWZH5ULMJfjP32oodzE2AxcUiFmMa36hfWmr7KAcFYw57auc7u4qU",
  "key32": "3JngDd3hKmMmHrpQbcX5wEMh6E6U2o9pAB21Z31TJWuGJR84EZTBB4S7Ah4bEAwM4mLVg2TBX9AmbKSBbY5GkFPQ",
  "key33": "5wso4LvGs8ZxyMfsoLWG8PNuca2kjszVf3HuattUZ39M3LkWXx5WBvrnW8JvRuE2brNBgCqQ9vqh6CexyChQLmnC",
  "key34": "h5rkoM1EzTNkeMRuxtPs93u8YqJJRWnzZ4bXpFuk64vULXHVZiT9w9U5JW4cQzhHWBwywaJ6TKxJVvXXxv7LeGv",
  "key35": "5WN7H7Wm8UK9ELaKCgiQrVHGP8L8kY528CB42R1gVdHB81ZfrqYT1tBSX5TiYrAsCQZ3hYdwYVxHPqxsSi9eX8Uu",
  "key36": "4S57ku5MfVKNePZSFmxLsLaRVUzd21mbzYavEb7p18xQEzJcU1mM7ozKYF43g7f2zUnymBvbmHUC1k6ZpSNPGaC1",
  "key37": "57T1UFYvNarurtZmPL82E9jrAnKG72Vkv3LK1MDZinNRLHs9vDM1MAAh4BfgcesQsgPdXJahjyUXsT8zma98G9VT",
  "key38": "5UkMQWazcRF2zEdMEusD2xruGWv1bcqbvkbsoej7p4ZHsuH8AuW5mk2zzhAdbPvEgb9VKBW4QdCdtdxriqZE3MzX",
  "key39": "61LuhCxbzYbCurAJspqkmAQ1aJ6cG9tCDUjeiVPATKJxP3SpSP5jefSi2yBnbg9meMwmgEpzEyiCCHKBGbTud23D"
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
