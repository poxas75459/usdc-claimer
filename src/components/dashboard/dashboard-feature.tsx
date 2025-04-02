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
    "2Y4rTftGWBVf9PHE3j3o3ucKaFBKWGVpUAr3ie8uJfB7QewsMMah3fjrDbZGgdrY4TwZyY6834qFpRish3BrtoCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4aT7Bxwkoxjt9PfddRXa5ZE6jY5VyBoVTPUxsQZfRtdCmtKbxq71ohAyfX6cvJhu7LQrxAmwFWgj57WZoev6CT",
  "key1": "5CdfXqioauYZfTn275URmduke7HHbaD7ozg9YCyTsZDeiLxfhiFDoAKdoaJzr8vRmQSVAShYZxr7K86JFfLfmRLr",
  "key2": "3C6wLYsoajNby2igJ7vdYoNBmm86efY91RWCN7QS7mpuQ8E2WCTTdbJknUwHf6E6m1Gesvo8DA42JWEdB32KtyGC",
  "key3": "2XoAjBp3E3TtChEXSLnFEPgbHmonJbmRMATyjePNpVQaAnxCcPPN9m2kHMx4gu4T5ZDJQ2HeixJ9eqseGNumDYrB",
  "key4": "4YjBZu8fkrUL5CNegBg6mdycWWjQWFb7itVNy5i2jNRJWa8bNEFzTXX75a3GcXrg8TDbKLBsNEzSdGbW76rYHKFX",
  "key5": "4S3N5c5ftUgGdrqHxTFoER9FuiwYpqGoavXZXjRNfEpp6Y5f1SBzzqtss2jaLhAJf7ovLCAB3zMrv6cd9FkwM1QM",
  "key6": "62gTuDStZFg84kvVeKE5BoiPH98Xk1G8uDB8VyGFDMMfTmKorL6mGhPLGN11jnL1UeQAtBDgoSbEVb8UG6MY9iuH",
  "key7": "G6MweF5iBt1kzMsgYmqE6WPutR3T9B1A62JBwvU6TSJwts4CGiQfQGi2RZwk78LM2J7r4PfmmvAYDqeuARLRbL4",
  "key8": "2DMHnGwWXWMDwts2oLQwCSyMdBPRiLLdD5cW9tX8GrmtirkJ99y9o68E4NbVAw7y3iC614LnqFoxJEeAEf5gJy54",
  "key9": "5tR3iaFKNeqfoBXpERjRCZ5vpdGN5nSm4GvFSznv7FrnthXBKZUxj4mNn5awABP175wJhiLpDcGVZwZ5jgpdTezv",
  "key10": "65nCPK1m6PKgDi8M5d4cog9WKKq9KPThHLhk9dUtWNw6NpHGLfCUx3j4wzRcoHSMYoUuaYycAeu3uiupm6kCjT1M",
  "key11": "5qnBzCNND2N7t9otxs7SvhQ9miUodscayauc5BTx7RAxQMg59iTYwJuFD2qCKXML7G4sHMJpNRqgNhg2uQcey1UG",
  "key12": "2mYjYMdrhrYSwZmBXzDBXDxaiHfATkH3mRqSoDWwotCo5pR38vuFx39HsibC9Q1Az6ANxrz9XDvjtxnGb7iHfVd1",
  "key13": "5PnaSmhR7UWogZ7QJoMSBWtDGNxaySjKk2t3Xa86wqBDRh3M5wbUiFptWhCfnq3zF8qKs3FLYTmNaqKA2T15ij62",
  "key14": "2zVh2vWGwfEmTHDK2sQNW6c4sA2CbLCsZG7ZB3dQg5ZDGyzUHKhfmHhkN7uz7tnEH8j9ziDmCqzw1J5C4K6wYeVB",
  "key15": "3sCFtNY1ao3pbJ3Pgk3vE7Rw76ZLsQsXYFyKm45RMo4Fz3UP7BK9PcL4bxdPFXETHNdaBsTXGa1naXwvtTS5BNZY",
  "key16": "2wGApQyCbhmALtN8mxYN9zx69Lv5m9ApXNrFtebXgUDPtKU9hNjD6SxFW8tLNCHLKVnRiyRq4bt4FGhfWvionagi",
  "key17": "355GNGHDfBKQ7PkqGJ7NhFJqYLiWNQtKKazSHKao3LGhZzDLnvrjdv2Ao5VVDVq58Uu3TejQRZj6E2cvQ4murx8X",
  "key18": "DsoB1MaT2acKpdX177duesyfqketGajPVJQUm5RdWYmGrmNzE27vUH3ef3t7JGfmjPc6UwX1CJSF4mKRud2rWMQ",
  "key19": "3Q3kfkXzJTpjG8GzakTXjrsDC9F2jDYebPkVCnf42QNNe1ocXQ3YKviXcMDSMUaRD5sNBMH6Seuxer3dGaGfTCXZ",
  "key20": "jv8kp4dktL2LnkgvFNGNjka7Kt8Uu8GrJx3gKGVptoU3W3bM77PpW7NWhf7PJBpWA6mzAqer5WpPDvh78JjoNzB",
  "key21": "5ovfwXtJQNwkvu9f246uBaXfT6HsXJhffFn8ZkpNoEQqjp7Si1yEFFRJwbFckcG73ZWZjkmzo4skdjBW2vrj3XTC",
  "key22": "4LSRQ7Hh1gtcHZDarWGVQ1CAzuge7yt9papfxukypWBuYtVXxhH1BceEP4wb2Rfhh3aSTMSvAXCJJmE9vwFHk5of",
  "key23": "3Co5XzZU1npZHdtWvhBnwke5uyYE2gm9coLxjaYmKC3mLTotJ2cDhLUdQogGUSR7aDDouJ6o27231qRmozG9BAym",
  "key24": "66YcXMGmw4zMXmusnJCEqok5g9543XBSp12hiZfSHSYL1kQEwNxbi86K2rt7h2uXFscAzNTA2ZVKAkt6kTejSVps",
  "key25": "51351D71P4Ls1JezA7xxv1Xrhex9GPCnYpDsBCaBoRcYceQmKUBhiMaPXajaFKP6w6qo4PKno6g1TAyeDCG1LspS",
  "key26": "4m2ERZe1RNRmmr5zDjqAQJ4HLo2ey6vk7xYX1QZB35ZJLqRAYwtiLh682VzhXzjxrmry8KD1p3xSzaypa5gz5yCa",
  "key27": "3HLmqiZ5mZyHrt1mB7pvK4PN9vEr6z48Z9N72tqtU3H411UA1fYnZsDAGC4TczRFhLNdWZTeTJK6oKopKffgy6ns",
  "key28": "b6ZBWKDdeuy69h1S5CRZHo2ahfKrmEm6jBkEqLq6ykVSKbqHasBwnkzYfr1HWqy4KhGjuAEQfkZkxGT3aRpC3Qn",
  "key29": "2R26ex3m5Heru2uyRDrsDobAYJD1jAfyjxcDz5qBj8aEPRMMmtZUsajSPzuzsCysMvMQtN3snmEX6nUEw6M2DYn2",
  "key30": "27UvvCXEagrTvBcaGPdzBcB9ujDMJNR26MVC9PR8wcsgRfpHpazfVD8aGtEFGTCYpfXkjWaC5nEuaboZ7nQ5q38D",
  "key31": "4qfW5584GMvWhKYvM1rD1s9k5R4TSYZBxknZHAAafbJMaD7h6qV6ijmjvGKHPBPRkXPxQorhAv3h7vx5BGZcn6WQ",
  "key32": "FHC7GGknKHHWSN6qSdsc9rSKnGW8acHvsy5Em66S9BoqmyfRSSsEaRDvetxksXdZxX2GPWRWs2h3cu6G36YQMVX",
  "key33": "27tfZcuS4HwpP4GRa79CHfsmwKbpMVT7dj25T5DDQxXzYgypfDGPeWWFearaWoXLodMpaNf55VuKhNZ14VQgjqon",
  "key34": "z7Qq6T9bRRgbVWi7mw9aAbRLMDU1TXanxmVctsp8rom69BNbR264UWy2MnVYGRdm3g5GTfqFjX3EeuDbYkRRBnE",
  "key35": "oRUWbiqd9tXYxpVa4EzQvbLjbLtKpHC3YvrLDRjKjLDpRRkxNLW15c6Ykoy6Ep7jp45J5eHpQL5NT8jNmggBxax",
  "key36": "MuCbeVrSEreM1LBVt4ERWWArxDfHFxspyhK6VLea44DdP6HE8o66vUWGoTVXpvsF2EH8hyyqSXrREpnYRLcNany",
  "key37": "3EHWNm3k3FEg5a3KvNtNPNDafMvq7v3cE8qy4A86CGZruc5JHP7xD8m3jfQ1zFUwttdRc4XQXVzmMbK5bGBh98mo",
  "key38": "2LyKFN6mca4QTf8zeifjcmgxRcPraAUuhqfTt4kcEyXhN5Kfto7wMY85ohJdzuifnrprNvpGpkYnM8Kycvp5Fxxp",
  "key39": "2LTgJwHVDcze4V64CfHWtZZr8oLNodjPVYF4SHMTNNKKHEwkQshecvwAM3YP1CqQcsQnoF3sLJJtzF4Xz6nMCsG",
  "key40": "3TvPzNKPNKnuYMwAEx8bAN7w1m1svHxeL2rVDiuFaS6SnhMGYRYbbgrw7D85bTuXX7mnTcgQtcyyPjCjivkUzC18",
  "key41": "4K8Jp9Vvy7yVvcXkxhMJqBgToEaqbceADuKQQ72pyKAamr6hDfUJk1As8KJs6xiVmNaYt6Qb9U2BmHEn672Y4dfq",
  "key42": "MrLZNdehARGV4f3QfgT7dZiq7eTu9kmQCPDdi6szDVnsqWfy491NwnKRDDPPWe4Kx1spFKBzZQEDVsyqeQD7Skc",
  "key43": "3YJMVWnmZndHTrBDEqc91VtgSrtNMGtSktS2AiTy4WN42fB9cyWha3vrf1jYvSkbXigDWYKgDw8c2wGeZQvh5y5A",
  "key44": "3UZabUhUmriyLx9w5cTobaSj5BpKXr4VBxxDrUCLvdxDBL13o4UqiPCfV8DXDQ8qvWZmPwpiK5x8yG3QaFSNt9sT",
  "key45": "3Yw8nB5xsAcs2E6obdae1J6wkRcEqnuvpAMw9YfS4sak5zFGWVkhxNmeDcmvip2i5NdxaQ4gigDtJ6aSTrxy8eE1",
  "key46": "4nxLxaxhdbCY9KKyQaX28UKLDTWzkEWLpZLDNFiss7jCtvBqkbUQhfmVL9m1xkJH9GQsS8P2Jfzj9PwjrxVrfzMZ",
  "key47": "5LJmY8mYoYnb7cZ1EN5gtAHi2M53V2VDnj5xJsXKVWjbar2J1sDWXcbpwZzHWLHxTSnzkjHQgTKCsY6g8NUckcvC"
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
