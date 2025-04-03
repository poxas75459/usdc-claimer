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
    "joVUhSZwE8s9gfMn9aeZPoMc6MU1hviGMWajZgWVK9rMigfbAHFeCD4SbMrntJso9zJms7yLMpqgKWHq8dH646o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwamTKQ9jqXewCEzC1eJxXqQFfzENhXkXpQH71HJKKduGiFT3icLsybistypXAEX9kPCeLLxdi1HRjs6ZGtF2wz",
  "key1": "2R73ZUQUXJcrFHYHEKrEQoR1cKAm7UCbkwootZGqNyEb1Am1wosHToprE4Po7YN3xY7WgokgDMXmz76uFs9mjNUn",
  "key2": "326NKVo6dcBJ2ux3WXppNzCmm6qvpMQFNthiuqfnQde8DCh6WwssYzA4RbsB392MiKyGHD957ZvXQgwCsGqDn7Y6",
  "key3": "38mK91SoKPsMzieqvgLaFmZ3CidDDDfwuyszkyorJAeHniq5P3xD8SoW51YgGs71uoiipbcXGZxKVJToGRCeC9q9",
  "key4": "4EPbmrVwdJab8hTWb6H8w5PDiJzum67Y9GyFzzPiMspxTbcdh1QHvFhaL83vXNfxtJjW3tbQ9tfM9gQR2pTaznhR",
  "key5": "2zsRvpom4zPtn2ufP3aLaHudpb6NWogEf7NPotHCRb545fUMSdFRdJAmvmqaJamBXfkZ7ENhph7qhoBFPK4DwtgC",
  "key6": "49yiriFbmgNPuhYxy6teF4JeDBpwwVwF1aqwqjzbaCz6eReofijZdKVBeKnXjXR92fmMrrMeJS2XY43gfYipU7Qs",
  "key7": "3A1cKLnpoP1yBi9dzTtiz9toHTV9vmV8Bv2CtD9RJpsZ3NZEBPAHrEySrcX5t6jLDdq7juGrjyS3jXd2WjZ4DsBQ",
  "key8": "65fxyanbzxYhWBNdCPtNiZ1VQ6ea4tJhwBgU3R8rcnTxejb6JEmBep9qHp1PBJnk3kuPNcDCmHhvtQHhYmYTqF3D",
  "key9": "4eC3Uhn3HJx79reS3qCcjY9PHtdnMqEZCgbmCpRYxkw3ciwomsPJgSkuGAXGZ9fgL3hLFv9EUP6E9JkwisR98wiZ",
  "key10": "4nPXnBHWtvKCBUoRW7nxFY9h7Yz3UrQw1fELSyGQnJN2kX9ReGwrAvXHWHpvDH4iSfPRaCf6o4jpaaTk8sWpEct8",
  "key11": "4qsnYg5VS5bn3jsNwVDGaedWo1hWnho6zAMGfebLbTz6P3rFgxUpuPzHbpW2VriQxmtQMj8xDZaKK9VvwvsGFVYg",
  "key12": "3qs5Rthberom296i8PKPCsXbiRKWibr9mJqhnxqJduawFibBDkmgGtgrYPFLhsL6oakjqAu16iNQdzeXQADYaJQD",
  "key13": "xVEq6LaBVNKN62UHN3cZcgATqx4BFQEQGRCS5K26cJCbMXNmprf1ZamKoppaAWfdqzb8ChFyETaxKz658vaLVA8",
  "key14": "2MJcJSQ4SNBzVNY5x7QVTQnJtvCeH8g6i3hWFctZZShsQ74gYkgaCFQXdkgC1rm46n2tNyyqFxPFkZREsDp6QmHM",
  "key15": "2WCtQE64dz5pE9j1jDecUqRVQ23XoxttLTRgTSeaCbvFPt3nTLUY1ffsFvKraX9SLSvjdiGN6FTAZhs9fWpsiTvk",
  "key16": "3Mtx68qY2di3swzE1GSZV4dJaeeXM1SJbkRnmr5w2gWSiBnKyPF2HQ2kqpeijjZUa2WQun7QGivuyKXmYSwvwNW9",
  "key17": "28QWk2gJtm4sMC5yXh5RC9Dpr73NzKCfmKyhtaAutHhw8q65fj2mSFxaqqUvSH6YyZ6AvnnhbijjWTGAajmxq7gg",
  "key18": "3CK1BdoYywbdh4qJvG5opyy2PWdoRUR8YbKAQiUvZhSjQppFMBTLkGPy1vHdUPzxCVDurhQeovyJHWkeCn2a3BEX",
  "key19": "2HS8CDcyPtJrsxLNjhg3Fj24UFDY99X3zvqsYMLv7z9AaTmVeAmUqaP4dgh7c1hgztDR5cnv9S3iKBXizUyLhzJz",
  "key20": "2EuRoKM3iZMCmstpnvkXVw2qEDvjzNUy3313BFBKCnupFkwE6nYBuGaEQ2ZeaBC7g21yw5NCjBS4y9Ks8XVu165Z",
  "key21": "2W175BFPpDjNRgKSuS3VoRHvmWnfJgMkGc9kz6ZJya1J43rX4izyTWDHBPwG31Eg14AoKZ5FtkBwLwm6H5Q6JUib",
  "key22": "5dBRA5EwfRVW3WwSJyiCAVJgRyLtJuqeVGBh7a8pUDnDSWpFqxXZiiSinJvGXPTq56EZ2uqAUh7RvNNdL8U2eRsV",
  "key23": "4kKakcQgMjgKco1BVzBitesP6VuaXXMnBTQPrNKUKnoUJ1XDrPgj4WwSpFEKu5hBaV4kXGBgHPT4i5uSE3G6hvXT",
  "key24": "KgmMronDF3HvFw5YXksS1893n2G9C7uKvHto13nL95U7oQc2gF2xbh8joeRbEGdS4yktqyp4F5EynM2FYpqN6nh",
  "key25": "4YhNC8R1AcnsLnsbxRWYZddSN6w7Bfkxdokq77VzMdaJBSe61DQeMdoCUcnjkDakdj1RKv8kfNJRFKgxybyTmoE4",
  "key26": "2nUxgqkLphRC6kNcMtXxy37LBxcMFcNVvwbS7BEhe2wZ6jFtVqg72hkz5BxCcmYEpU5XnXcrFw9sKjAqkWLdkL1k",
  "key27": "5YBsT7kfrvrSvpJ9QmdBLim7pc5dJJTXm1ovybKhahe7gyAtPxQniiZQzETywcjAsHpKHGSQPV7dQs5MRmKKeTbU",
  "key28": "3Q6mJmMgcS6achjNfr6uapqkLL6vGRvDUGHWJGaLoz1P2fF8AEueNR6rGfKff7tqe9KHrELPqwSxBpfy4EbxAkcb",
  "key29": "WV625S48dRMuw6sDz8dkTus8szAtBrqSV25KBnqEyfMS1mEncq2LpWLr5HLXKaMtTLthv1v6aHPdcraSSMwWiPp",
  "key30": "5sNUEqyoNP13uPJK5z2wLAwwLujC2S3nGdUby7TrBFrrLxYNpiADFH4umjJJiXDt9s8pgr4u8yx7W4LP6vtZ5JR8",
  "key31": "46pJ8zppWb7UTxqr2gPT39iEavwhE7MtG9RJvMrqsHD8hQccsqMe3HkwqrMRw92bwsCUeDz4YrpAo8y5aWNQZURe",
  "key32": "2DoUqHYKUpxduVUuhjPk834RRT9ArWVM9EJ3jgYbmiwfiwHCxd1Fn9MVqk2MfoQWPcw8cZH3aX1NjeSmaNU3G2XN",
  "key33": "4y2NFJTZHLqC4C6xn1nvyd6H6ZPf9GuSX6qWxXxTvFm9JmJeBzXVngfPz4g93LrHY1u49oGZTE1Sx77hVJDgexNk",
  "key34": "2nxkMo1sG9grYvTznG95PDeqwTVEjLPQxqLzcVuvuKyj449gAsf71ABYNcs2NYR4d5mWYCkWHuDqmFVKN3wSs5Ts",
  "key35": "5THokmMS4wdWDrDKiVbQ1UA6DXX7tkFoYhWJL9FEdhJUrg6tXhXwrMMYrHMiYcKdsR6DeuL2eispLDveS4kmRJ2",
  "key36": "161EEey9JUv47Z8E2omLJAiF35ZorKgXfV6d2Y2XXEevM6yGCcNew2eqtzLgyiGLLVopuUC7GBLehVFhDaECD3N",
  "key37": "41gfj8oLWHcrRmE19e6RyfPpHMFCgyuGkUCCu3H4bT8HuLr24w61gghzeKCKZCMBcmbjtokGW86PVnpahHnnCJys",
  "key38": "3CDLxv9Q1K3y3FrJVrxodt1GfbfKpq4Ly7CRsMADp5TmoKn9QSyUyBPD9ATnjMwz7rZZiS24LMaAJjhusrFxe57H",
  "key39": "46zoed4kVsvs3Azq3cuwmn24QMsBCtx1Fi4CgScSoChSQwbAvcDjS7whYLQkwDNyc5NrJJ93T87wsw99fjQxaxnV",
  "key40": "SVQioqHJZ1Q5nNGk8xgNnqQboBTHQWDnzLizLbKNkjMJo7FQnKxiEGfdVGmTEcHwK4ew45G4JXE6cKpaocC77sE",
  "key41": "4tVJQVfMAE4QKQwxro3dY7wLWTHugHTo4A1Rp1uAGFE8cqXAXkQf4rbg9YVGappMoVeBAErk9qkZYtW66h8KGieb",
  "key42": "4HkXjbW4kqAqTU9hc9geN1fYDPxUnCnzmj8rtAQJSE29EMjNvriQx9R5ut9BjwjuiACuXsyPeTDTeHdFMKPt9yyo",
  "key43": "2W6af2yZbER5n5K9DVpUdUzA3S3pwNJAktjgZNdZQMxDC2Y6t66ueHC8FnCJ62HQHxV73qiUiYRkyeR3PWcokj7m",
  "key44": "GBXz82hgnaryy7LK9DqDD2ER37AyUUgaPVzCP9zyrgGeE1NHuBWNjhRd5cN7R76U1CuZDPrLC6191a2ibSPzn4p",
  "key45": "3Ny4Bw1K3urmZKoa1RtXQzvuYwBYgf7FqFuonNnqi2EgVsVVjjzdzDJMtfa6Lsv3S3nwpdgasraeTfmJQ6RJ8oDj"
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
