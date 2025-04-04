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
    "4mbH1xJrMkBg3Rk3rBuDNKwf7f27QPaQBmzD1Vx3WpW9bGM1Lbvg23Vsy88nprjgZXCpXwhsfiLuSvmT23AbYLPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rob56oL2QS9JRfgq7J5QrUrMaztxjnwLCZRjCbRanap9UNzwysHthEPL6W7sgkhLDq7s38rFC3E2AvTCuzoaGxx",
  "key1": "5L2Kg2P2BFdd5qYwzi2WmG7rt8znSeRyhJ81dVBeRSZvutTKM55hD5QLGRHSFStNZ99JeSdQH7ybbuDZ9WVnYqex",
  "key2": "3qtMDHmCmau57FKhJyQxkZ5sJLnVPVQMfMxB8bPCSC2bCCgziPLi9Ku44UW5UEmdn3xsemQy6LJjij7QHyzo3kiK",
  "key3": "5xQLJJt9zx3jEurQAvyHpe6JdF1TCMKeeLrt5uX7A2nehDzoXX5NedkeKfa7v8gxjhsN95oBRPDV5nzCRb3VgF1o",
  "key4": "ahfhmzx5gPeKASxNVMDkU2EJ36rMYzwPj6EkwpBnoAxLELiFWGeYRQNxz8JD8qUoc2MH1i46ecdoxB3TRPUSMt6",
  "key5": "58KWweHh6RbXwka6m1QpuYsh7ZdCvbBAW9rtvigmnKfXJ5M2HimGdpRChorn2qGDTwFnb1KqukRj3PHwJZJSV3Q",
  "key6": "56cJPZzV8Uvdndm1EpNjv27mNMRmAQWLjPZqCL5yHAN3wWMSf2XuywhWuPP9DPNagqqZyvSGGcoPpSadLXopHdhB",
  "key7": "2F76r4eAmBG1dmQbeo5zQqr8LgBYjsbR5K4s4Gn6GqquvDkPfxX1PN9ERpdNq12W6R1ZYvSL1pkju9ZkpomUZwe",
  "key8": "5VEeNhoGP6S49DmB9P8jn3sQB64K7esmreTuHF1hJry2FxPjsWq6uSD7nQe84rKqfWVgynfqwPn2HvH5mQdxe4Ai",
  "key9": "5fMYmcbDNZRVrr8xt9xk1m2cmwK9GEfGKS2Uw4nGKnQtJWs76UWdouRZRC1aD7jnJFoKu3L7EtsusJiQY4oacK24",
  "key10": "61iMmM3xvLQeNpK1jJGpkzZqU6zjGm4X6QS9D7CNy2BsxibqbEBmZ6j2ooAmoq9XeYhBRd8KJQ3Vpx3apreKgrFN",
  "key11": "5P6xCLSCUodm2acbauL3ds14yDhwBdiTzsKvUrdDXRwyAwjqm1EWKwYKN5i1nNj6SoM1eqfYoUETpY4M7LJH4F9M",
  "key12": "4TnwTXdRWeScQf2Y7j6jdLmiiJ1dSpVpwDVppJUSLSmcdqRZ91KtQU9p5UYbhfvqhVpatFkm57ncV9pB7XhqARuv",
  "key13": "3fLBCQEucurVPk5f3oheGDogHonafyYjQenes9RPMbVps9PEyueQhKLWBq5SVTufEWHc98WYE5K9c1XdCJ3Qz6ra",
  "key14": "5QdrhgNtHiF3hbUH5rahLwVe1mJuPCUhbTCnDU8KMJbV1Vg2ZrpyQW1oJdzuTem1e5SMCs5nE5Ru6jJ8dHA3uHPn",
  "key15": "2YdxkH5U24hVZpjiGoBrmUht3B1GqFH2GP3bvDdBEVpaNSpQt1sua5UgYPs5k9UbZSeZqA5rkfM4hCzWC7QfMPY1",
  "key16": "5dJiuxeQ5rynesfVzkftm6cDMYEBk3L2DtcRDxP8CskGRYgd2bYvmduYxwhQvYfs3CTyVFjycnPZSZ4Yt2KE4SyY",
  "key17": "4AaGXbfQDGMdVKG8mar4NFuy6JUrcz289SrhbJhnPBj9hAARDVUnKNnn8Ze25GBjWkGz3eoXMu9GqbL1E4gqy1qp",
  "key18": "4hM5YJndNdiiVQLSe7Kg5LxnsKSdyd7gFxvpEVHU9U3XoqLq4hKeL7dRUhCV8k49NX49CM4v11B89hTnNXHzArTV",
  "key19": "5suGgQKVfK2ytQbX4qTSwBHv7sGMDuoE8dHXMXmejL7U9Zn9ongVoTA72hmRr7N2U63ycYi8kiqbyWFJYQSamEBh",
  "key20": "3FgMW3hm6vsykFokD9jXDn6Cehsgz3DADhV4iW15xRzycVvukJSNW2t8e7MYWzU6rmYUXjsvr4zcfFeZ35jytj5Y",
  "key21": "2mBf1NzC5wRMKZA6wJF7BW4otNEQZNB9Xd1kX24i6cnVZow6UdfCjHTcdngCP2LzfgcBYfgJAw23fDz1TJwtUyT3",
  "key22": "2NuLyUZbKiXTHbcz3mSUnaXb3oRmBeQnLJjWCwGahmdRohnPzsNzD1xbk3eh8s97KncEGT8y16vSzNYYBccdNrvL",
  "key23": "35Ki68ntHGz5LbFXq1xwaeYBguBaUFnumcz4C2q6T41h8WHSjCAx4MyFCLFsGH6RGgzHyakVnLZ2Djk7oLiA1Ugo",
  "key24": "3rYaFZFgZGPgTg1ujGK3Hhg8fRpA76Kf5hfRb1ktjHXH2tfo1WTp86Xv1PWbkvsTgBvtAERScSWXNpf6SzY9qV9n",
  "key25": "bArUt9XPYvHN8xwCPh5YrhxYWMUen8Ken8ovcnUDGsxDG5ZruCSUC7aXk3cxyLSTiT8pwQHGx5QSKEajpTmE65r",
  "key26": "5Rib8yvGEQyd9hoXhTvu6ThSuJ6Eno8mnZ5xKcYG2JUUcF4J1eSf5gnpS9AhCfznF6DaeY9xdfFLvQ9ToSHZPXzu",
  "key27": "4gRVREfCoTJ2e71MHXtkgqfvdRrURsTtxst7VZgW4tZCKGXbHA34GN51KAfV3NW9ReyjxnKbPHpaygUtyPUTVNDk",
  "key28": "2NurEJfuVNqXT94VEkQZGjF5W326e8M3RwAfqctmNLSyXasdwHgFqKaRr9mXKVi9KUj22b6dDL2fGrc35i1WcNwZ",
  "key29": "4vL2VNe4Ju6wtcYgLyQnP299uA5XC2E9wfDS4Y2JAAyR2PvTAbLhNuDW2KT99tAa35BzrM3rc5LRwU5UitQ8eUEU",
  "key30": "4jTP18YtBppYL88KosoLcSYo4YeFhpqq1EqodrXsrsrq664ZRoyrAKs8dMiyzcyCrj4wEVjm4UvQmubedkUnY2Kt",
  "key31": "4wUGJggfYUHwC23rxJp18APjSWtvVpsqb54K5FGYqzpyxUwpPPVohVhU1UdLRKdd2jzhYNFEr21Hk4sYGKR9YL6C",
  "key32": "5yEjxbjBLMVcmCb3pTiFdpRGK8ApzTdW4asGn7yfkQNJQ2vDVt74gPT2WobPCdHF44QBUTB38eecXMXJru2RHXqN",
  "key33": "huwnJd9o5VseKShRPFE7VsDxZF1xmLmPgq4eKbmkfioJcUmWkQPGetESifFt3YgGiGS413PiNPWiHP8tdqoAWeZ",
  "key34": "5wcDWUTwpE8W2Wn6apbTCTQmAeRM6r99nr6VsNV8TL9zqpD8TKP1KdvzJiTE6zhS9npfj2hHnXkksz7ffb4kb4ND",
  "key35": "2wzFcjkpXC6iZJQybEqaz9uhpfabq6QRoVzcv8aJrnH4Jaf86kf1b4EpcZWVwm9b3nVdMEMwdSsK7KqvLNbcTfCg",
  "key36": "3Mhtvm7BDtXbNv5LfZT57JU71yg7uY594zxGddwGG3Eh1P6NeLCxKJGA3AC8oDpQvCmV36XYsuyNawCoyRDTpQt",
  "key37": "2DS2frNoDAUZxFTzbzehceazxZaxdEPHVjimnikZ3Ktgd41T6UpbUUNfGKYhbbGobBXFP2ft6ecNg1YGbmGwq3Br",
  "key38": "23o74HkGoZWRrdJT32V6RYuiBJdb1graGhjiLbP9hVXj3F6it99oP8Vym7mAZngcrdoHprCeEsGGgRWaHyc2P4K7",
  "key39": "5HnJHBto6bMetLUgokhJb54XPepQ5hrftr4dB5TRumDFN3buswgAXQgZBvHCfMUNtHj1Ha766qPmFmP7h8XmVAUQ"
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
