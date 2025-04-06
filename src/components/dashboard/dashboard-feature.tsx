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
    "2W4Hczsn4yyZkBFfqz3CRjEnjYNjp23SvoMdkYtQvnUnUojhXLqbTEXZiRzUcqHmL1EzPq8YTuKvNdKurn6SDy2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hjhxej4wwNpuizTP6ojYpXcDuebCDnM8L5n9MA1EoFrmZPXEmZJYKt2St98AY3jEp7tiBuw8AJ2QT8Z1D8PbnMP",
  "key1": "5t7Vm2ZXarBntXYRAt2CJWCd4GM7spVH9EFQLq3JEGZXDEu198zj8si71SonchKiYtFQ5i9Hs59vsJe3AEvWWLsf",
  "key2": "4v3qSu4k1pvLiP6AkWiTVBR5n66mg6mhqcFx75ZPG4eygZToyjqGovjuAwX8AZVHdGCjFvLLChmAvUDFbR14QDUf",
  "key3": "4kpk3toeHHQ9wMJb3iJyeKmuLPAF3DB8C66QnoEvnAo5yNup65ESsHqFEbbCGbNyt9tviiLKWwJ3XUnZ4hWQUnum",
  "key4": "5G1PRyg8BLThMmsG7YyAV2MJi6WhZGKaMEhMGmHXNmcXoVZSRw8Wf7W9FJEfswakwsKkVYBs3MGLz3zG3BKzEUvF",
  "key5": "4Hk6rPeVpTYYnqAYQHUYgZ7LUqqxbLFSWeHsHQt8Y8LFpsEtD74Svrr8Fxtqyj7sr2Q3s3o1ndXbxgJPhz6S9bNQ",
  "key6": "75sEpvF7VkH187pBgVmNsdrY9HHSgaqJsz6GPZPXvUvVy2MzUZccCGd8bVVipUNt5hoAsXuDDdfpCR8VJq7E7i9",
  "key7": "3c38pG7LG2fc5ZGebR5mGEprufmg64PjJRRnLkkHMzeT21C9XKd8XpNS58sPs84kjJsPEEZw6KgAmu6od9Z5F5ku",
  "key8": "614WCVTACMLMNua1Po9v522ZatsQAcy9CWuYxqsdPE31mavPpn6xj9TGNMaYS6f13U88F3Sigttr84SDuUVFrUKp",
  "key9": "4MBNN9q9n2pCPyG92v33Cj8nABMEQJ1PaRsUvkaT9uzuS8tFJsT8BJiWtV7FXhPsK43x44MautP36Sf5SgUXf3QU",
  "key10": "3Q5UYBMwGPsAfPErjyY9cgDKWrQFyvyRoHNxUJ3KLR98tyoxPgWd24L63EmVHJueAdT2rqTapuMgp1QUgkY3biZ4",
  "key11": "62poLV2o6tWSxWZ8eRoMjRAGkcKjKzwx99xzqN3HrHNdgsc3sm6hMMHqUzgHxvzbzaAz2RUrHrk5d8WckwY1BAc9",
  "key12": "3CwNrcLvCDZSXjHBU3pu7PZDZkFrAKfYUbY9TK2Bm1DgdV7zPAxPDJ1ts1Rh7wZBkeeeLGqzeQAnTBFKACnCuhp4",
  "key13": "36kXNcE48RfYa39pMTbCxmkDPz78GE4z96D24ovG9a4koWRusAvZ3XDKJQgANYGdjL2VZBb2SdzgJMNtsxk7GLsV",
  "key14": "5nz4hQ9hP9zyK9p4KygUb9eiFJ8QEZzxuSn5NewgVjsbj3kiBGaG9q2wDQvDdAEFS7Cw1rLN9QmeZ3xT6ukgXb4a",
  "key15": "4AEV528iM34oAyjbFF6qpGM2ihtyExfy276g7JDovFHXkdV6XKD16ncx2Rm4WwRAtGfMYVBgrNBs7Vehv6hfEZfP",
  "key16": "4fFc5QzXfB6G1XspsLqcoX6E1M25WNnnipqPMCxvwVV2PuSx92t4de9Q6haH1aBivZbjMTn2We57eTQqcuPi4xJU",
  "key17": "22DhAXxkE95uKcVrk54uPgHtzdNoCAFiUfJmkh311vNXe4EcUt8Taasz6eN5tRQDVn4shNL8oTixvjWhw4u2ZkTQ",
  "key18": "2YCtNFckVuKEGRRpCRnk5a4wsRLp1BVuA8XtVNdLdSb6AkGVibuFz42wAWXDCYk4A8JYxY4rWigoNbgti5Ei3Z4H",
  "key19": "3z5m5zamMAwotTXt5xpKd4cdx5Qu2jwSu6mQyNHe4BJjDEkDLg5ZCtXomZ58aWsJDuUEz6dQ11RNNMGpZUYpqM74",
  "key20": "4yZgbuSUNbyv7fwq88BWTf8kALsJqgYgg19nP1Uyhept6ibPpDKffC99PtXsBDPYT9ZfT5dxQgZ2kZvYcnmgGfvk",
  "key21": "469CKaq7dv5cp5X9WY4wKV231KAWqF69MSbUYUqZerUNzvAKbM1yrLFM8kZ6XTmDxvGbDMFr98ZFjsGvByCi3xVL",
  "key22": "5zVnCQA5S8TMbxYoPv24ZYwTBXmkcVFG16vSwCKUR9mAcZTwXYaEwouotrYeGNLN8SBRBXgDPgL8yBRhPpuTAS13",
  "key23": "URdCHAtrY5LSwjKL85PchzxKY5xMWW83tqhYSbE8MSrERESGQ9b2o2ExqeSUE2mqrU1qJnXWPmapAV3YESDeyYM",
  "key24": "5DVyRpJHb82KdGTgbE2moWN5eVN6qb1Q6jTBbaPjSMpWgXt8NRs4XbGgyJR1L7sijRkDTaLZTkDVx8JKDTrKovtd",
  "key25": "Bd4DZDHydr9MXMzTepLePP54YqsySE7Fn75Y65jTXaLfAuUZiEPvj8Ch9yYRJeTFX3auoACS9Q1GQc4nBVK2haA",
  "key26": "4gBscsSqk6T767MzvWb7rpVS6VpQnMkhgNn6bdZzsM4Tp7ZrbRw72CJwAicdBQD7KdsCrZAhnt3SGbKUcbqLFDv7",
  "key27": "CWA7RKQtUtYhGaaiLJv1anqiQFnn2uQSJ214ryfzvz6oWZnKJZQ2EGBoGj6tAS5PhFwtD4t23gzy2yt3GSLmFNQ",
  "key28": "5g4xbx7mxWvwQ5Uu88scy9TBCrS9NEnjccn1S4NaxwnduZheoDSi4XpVMsDvNdowr6spk9unAT8cgrAavzUgLQ77",
  "key29": "a8ip8GCLcEQkJU7uH4GcWRWYL1NX6kXS1ka88UQbTyWAdeQEWUWmym4Q7bdDQasjVGqSfcXyPwUHyfoRXdtTGFH",
  "key30": "3wSWCj6JzZscnUt5dbqfurFjdMWJkXiUfxqHbfR4nRKbFHhr4wpM1w6bacEfVnVaraa3twJjPM42KiDD6BJGB87i",
  "key31": "5PUVCYJUsYzysT3Zs8HGihGKeriDLYNeWMfgK1FrAabYN5exQrajzfmK5sjxHurdi3xkgL7vGdBkwBBfWPeWiQb2",
  "key32": "2ttxGd1Gcf8fnwPGMHnKdKiCMW2agUt743SJf1UmofxH25LdnWGb5iFJHhgKioRzE4wNoCUvLXyucZaGLbedL8o",
  "key33": "5Yz8LfDjKjKHaU9yxLhX681G4cnHWGmVMvzGSMRVcC5vzgEKmduuTrepvVxf8h4rtWCztjaa4qpd9de5C5u9rEdx",
  "key34": "4BjrvKkvrBGWZkb7SaYmPGs88zhTW7Swws2GiMv4UuQ8wyCNNcezJu4cWgWCxASEDvWdLKvQzrkGzu9qfAnyxwr",
  "key35": "2w26xvxYB4AJr2vrHLWeMhjbSSoEY73kYawUuoT5GvLce83pAxfQU51rpptpwNmPvdpohfAf9WRGgWT4rtu6sz4S",
  "key36": "5b5DpebW4wa6twAp1hJX9WUggrQ958nK2PT5qWHGt4S6wuWb5nnK85xn3B4N4aAsp9L9XYgLFmYjDNmCT2uaUZdU",
  "key37": "4RDLcs5bvbtjWFMQjnbFMHTPDPjTcCESwfGvBj9fREbMJ1j4aPWJBVsgLNR3vTa3mABe5nTTGowWBtdV4a6oLxj7"
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
