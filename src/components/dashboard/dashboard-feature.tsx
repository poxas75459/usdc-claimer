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
    "5xc5pttUtXkgdfDjpBRoADCS833V8HeqqeZkdFdzTXsqgbk2D1xPHuJaB8nTk76qxN5eyTCfh5ctpFCwGGvgq1Ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vpSBC4cMfEVqYXsmtRc4eybgeLKt5DSxcEHhPq5vPNdjR7APrNFyfBpbLR9BwcAEwi1rRTvPJ2vhVBz77qxDeef",
  "key1": "4HUKGSmQH1MGe8tRrGKb5GorkvCRVvkTmHJGZQxFVo3zA25XbWiu26sZRDY7iEv7m2PKeNUPgjW9bCgb1J53KhKq",
  "key2": "5RPLJp9NqXL7smjVYZSY15XyhbyJEYtzGkNw6joYVC7ZsriBsFLnSWNL2b8PVVfjtVzB7QzVMfi1X3Qvt266RaV5",
  "key3": "5QMD9SLZF3xgDe5ZVv5xez3dQU4mrMevkuDCsWzoAUotkR7uewRhWPhVYL64vfQvvSGYeCR3uzQv3YjhPB3F8enJ",
  "key4": "B6NJ3yzZrbRK6hBdWuqAzonWCvWXbDx2fiHKDiTKptw7CQPPvmYFmf74WReLd2Moo7cNRPbfCCD1bDQubxmkq5V",
  "key5": "5C5AV4vZsKmgVgfJWGgHv1noECB53D9T1x3sscEKVCm2nQQP6pnkRSq1bTnNeL7t3kqStzpANtEkPvzryka1kKaF",
  "key6": "2bNkivGCeghEnYxKBoYAuAUhj8FNwZ2WSuU8xPiciqBfJVKCKeFxw3Lcbyw9A1zLUqvsMq8VygoL6tMvL4qomLrx",
  "key7": "mEpK5u5x8GSwSLK1fV5jGmMfFJ4Zrk1dnA8XmF1THCeGyffxWTFBr6DmYDaGHz7j1jki5VS2T2GR6DSpsPnArpp",
  "key8": "4khPmhUCyT37dTmHhyy27BZgRXZJGAAS5nxFM3X7vXL6Y69mGxYu8mGayf7k3fYi9EXf5a5rbnuZFi4PRu6SaNbd",
  "key9": "2YFLQPViRjJ9hGBauEZH2zHy3LMqb4qUeX3iCacXYsCFe3TGG87HEiZ9u7ChyV4bakKPQXphae7XDqaCm4k63uo1",
  "key10": "3BkvEo9tnSGKppE6V8o6t2dHXzEGo4Fw7TUW7t1TiZdZ4uTwbAHbCDoWdc2RvCkuLhRiGk3NMz6qd4zvrxhwnFyc",
  "key11": "59ry4GLSUW84XqcgsVA3Ky2geruxpL8gL1LwwbhTouZfSgLb9sBia8aYRrHAg5mHavpJLHt635eWyNd3ZV4KsXBb",
  "key12": "49qGZmitr9dofqakwUfivvKgc4xyAopmDpx29m2pJdnJ3UcBAVDKnyaTgqk8ugtXTLBgP9zFrSyEf2JDt7hrqZkM",
  "key13": "4PvdfRMZcR8NFvk2xTL3bS1tNMyFma6pKrRgZMXdacRdb7ZBeo7vzfdUWsimgZKzgSm1rEhYzrKz9mABSCpQH8QV",
  "key14": "3jvuhmHdqXGELsJbDFiRAHq9daA9hcGCahtv5B7SWzAfd9LajsAxKSiozuoXYToSnpV4zvDzSRZRP9ViCDKDReXX",
  "key15": "3aNeP1ozq44PMoGT7Fs2xfoo2fwTfJB25wrGN6ZikF9tSfnecVfogAJwHPBfBQaMFNrFowP5wNrHQ6X3JPC1AQLN",
  "key16": "i4RunfEQPuqEZk8RczJgm3wLhMXivLyxWfVE81czsQSvdZVhSTLcVUFGr4aNs1iHbUUwNJKCjuSgcjHAZsQEmKh",
  "key17": "5XKLV4VY56bZi3KYYptepHmdRubskt2C8imXgagvA7wpjjX3s4uU645ydrRQuVCAZJsfBPJYmV1GmzkeZX3YF9sX",
  "key18": "46jupqc6QwKJHDjXsCC2P5QjbEPqvLcgRnbmsg3kmJXcAPmo1PoPkdJ1hM35jMbc9caze6UyowUMVpaYVwRaeboq",
  "key19": "CMo61je3Av8zB8g66KFYt6ku1HFc7MpYamkTiie4W9RgptSnDJwo7CXjjHiWnxCH3WvTp5LYMwmJZKaHvWiBCAZ",
  "key20": "y2VnUp7rV7VpeXGE7Kp9sKr1SeTngpw9EYKeG6jSPUGbL6yRf8uQ1ZbQvF3LfAv9Cot9nJY4ZiUgJqnpbaJgxSL",
  "key21": "3ZgUJ3jEyw9pvbS89aRoddRQZuA2Zw2jUbiihgRa8UYaWDpJwoEAu9fxqcrosrDsTyjFPkJiz5LhCpekUsMnccut",
  "key22": "Nq9YFW1gYc3PzXWfouMZrhJRbr7KXBb2WEJ5WBYsV8Ziz2DAPZ8h7LzsyAQKVVv1eQowoPnD4Erjij3S5ToKGmw",
  "key23": "5xEjY9ZM2iGzcQzMwQVcJjENhAWwxTebLbHyerC8Hu849PhWcTiS4RmmUTdSGt3KS7m4H2L1fRMF8VWF29G4FDXk",
  "key24": "651Xd3WRkNUxo9EEMm83MJqWG7TijUrsrueok4CN8HdWn2Kg9HS98t7U1mgbtHDf6Fc9Pd3mefwCGX5KFDFBHXv7",
  "key25": "4TYkyd55ofcERcL64TpoC7iqPzHh5uVDsVbcQxkSe5HVy1HsHquRapydptSVkVgNUFyRph2b3NPpWoTAHSA29Nea",
  "key26": "5TB3Zk8AfH7SXqixvmJAhHQ2kPZuzUjWN6krGFdAFNNzPyrAPa9GVDrpgeo66BfEi4owSZ4RBJFRM6S2ErrG3cm1",
  "key27": "5u1McKMSgw8sBVPX1UzDUEHx1oTVZ5Vg1LtvVWUynRARD13jVjWtCmticWT4fA2j5gKB8B2HfjcuEgNZGhVNN7RZ",
  "key28": "56U23vnMxJY8ti7vGDRhUbUCVTgDeFke2iDDicybnizaDwviFY4thz1cE718wuwYtZcj6csVZRpWwR2bvdGo6nz7",
  "key29": "3HpEfPgjGXMdonCYPufjSHL5EBvJ3wDAuRLVszpZWiZNhesnbQpJJPDa5q9ebRQdS6hNtzsb6JHVYv3bKJ1Wm9Th",
  "key30": "1TonwbbASHTRKmFCmTKUCiFGjgGf8ZK8EQeKzqUa62bGfp5xcLNcohgLCBJJKikUQjto1Rc6vJjEFTKbQqWfejL",
  "key31": "62QodBUUYxLyCvERLW8Xr8Pm8yFRQUHgj6VoMjqc3BQcJtMLy9EMTZ5HEqG2yVznGKksA9SBDH3eQruWhFzHR3VW",
  "key32": "3pH3GWaTwjuu2zhFi2Qr54ZHG4Aojc87nvPzj2TiBgEPdx4bjNVok4CB7rx9BxgHx27UM5WZ2HjVe8FqoFocV3Ba",
  "key33": "5Jap7hNGxeiUqCWe4X5aBRUmM4E6DbV7JH9KaQXsD5oakPwwcnvu2pRqBmf8iYDqWeXh1cJZYgwCSmF6SZqSHw3v",
  "key34": "42711rDaMmoreydE9yuqrcKCzWGE66Emz5f4aur2QVVPotZK5GHik9wpC2G3o1ggHYZL93YEcU5KvVvwWqRmdm6X",
  "key35": "26atAW5Dxn1ogoyymqivuxgHQXEghZToRtrcLL73Sg32pVFqUkRTNju3bNazswkY8Yp448zwLUT5ZsyUMCmFd8YJ",
  "key36": "3cNvL16VmhU4SJc1fxaH8fW3TiFSdin4t7pNyeYDMMZZXfpMgqTPTjSExHwMVVovhtsuxDiA7Bu6cSLmzqYK2GQb",
  "key37": "3mSQ3RGQt6jRMpHjxAjNGgaZF6a9diZ1RCEirMcfhvPHmzM9RSzLQsh8a9FfaQVfQSa2ZE52TkarAvnYCqac32jT",
  "key38": "34u1GAGeFn3GhCqrEsnMLKEfapV5rTXyq4qmTdCFJdfP926sF4MpzdmHeMqUiEoC9VEAVA4F1eDcVoLof4GvjuxM",
  "key39": "Ct2M5aggPt9hQGhHwag1M4YKuPaeCmqoQgNJ7BZSPKMfzAU75CUsF6GNxnpFS9e4rrHkCTNMGm13dvQjCKJ9HtM",
  "key40": "4DduDhncR7tN7s3r9ygxxNqY6topojnBUGNRTwFmwkFiS3Dz4Pn6EFGN4iYY7hfDhFSgv2rGYvQK6sHjf34Rd9tX",
  "key41": "2ojnAiNZ2mhCTfPEhLokUEKrRfBpaXrAActVoJ89D26yAwFJWbzx6go1APNSztEW2g2sXwvBxrb6igXXhoLF7HAs",
  "key42": "4HkYwqf9GkipQD98Hv5m6G8wRAA1nemtUDqGz5NFX7Z9oYoFJ6vgzm14qW331qmX4T3R2H2nJWaJGCDBYJFS3NW3"
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
