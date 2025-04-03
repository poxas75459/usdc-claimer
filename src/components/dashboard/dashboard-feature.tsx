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
    "2HmouhJUhaJ65PEvmgpm1kL3D1YJnngGQVHNibJAip2BgoLvrT4xWZyFzFU9K6qch3nskWp5chuq5bnwdng4sMPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUjUfjaNpahkJgtYCzQB5TexvGAVfDJ82wYHgq66dUYLYicZo6cFqWr7E71hnPi12TS7UDMhFV3DesW9dq28nLe",
  "key1": "5n88q8SAkigxJZgb4xzRWsdRF91JuUxyczTy8BaSTmofVpkUjrmbFtjZTPD1McuxWT9YjSbTCfibGD7Kz53mAkDJ",
  "key2": "21Lha1GBPjrVD3jPVCCGsigiaHxEXcxQ9NwD52k5mzhUJUjwytvtRkfJN94bT2pRsX5xroVn16p2nfitQK8fY68m",
  "key3": "22W9BS52eS3Y1d6nnS1Z96D1ssNMQnBr3XEBimpvCpt8h1qFrswgGP6ZPHrJohEdVR4pzmRjiRirig8792EKnuPQ",
  "key4": "2n5ChDD8V5Lbsmm4p84b9269KkSJ31egp3hgBGXUcFjf6icUtDYiews97SXbVkJJ4MNBXtdduPpcWZj1xMMCMCF2",
  "key5": "5c6RpKdXDuNcfvYsoL2ND5FxmoLsnatWgDt13FLFt9suQAx5q4vJ5nMgHjizxumgXtqUE3umd6gM6yHRZtgNJjyT",
  "key6": "2P56TkQBudvC86AkUXmyHg8QKi39LnxEpagz3Br5yvEMWkXojA7yLCQMjGPjJAEBCQqiDuJKHhnxfdFHoZxcYiVF",
  "key7": "2VG3dk5X98qTvs21viW3L37pVPkYx3RTKdAEmu3vm6cDznVEt35zR9A5cxjcwkoqwUNw7P8irNntiiQXH3b3TNfb",
  "key8": "44sc9t4prjQpiXhJ5BPY4mghgSfipkzSNkYhw857UuLbVcQvJY5pPxqEr3P3FaiBT4WJdToTb8zNFutEmyidoHkP",
  "key9": "4A7mYDuZeZR96wWvXgHG73R7dZk9Ze4v994nAjXG7W1P5bwRWMM4MCshenqphaJkRHA1Ci3h5cFZuhZtTD4bpnr1",
  "key10": "4HWwX74A7asBK16LCRG23xuoJEcuQMb1efgR2yWoajeSEXvZnDq7TsF9igxb7hZaVFUe4dXFWDMxPye2PgHGqEJY",
  "key11": "8LGs86p2vGgWVTA5Um61Jz6iD18TUN4bBVjgmBCZLQkVnGmPSnDEjUN2g3wCH7kHyqGRPxyAXa9E1cVEYnCG1HE",
  "key12": "2MPVSy4aDBGeARHygcXp5wWzaE95zTcFidStR8dcqGdbiMFzBdkFkSEoejKFMs4BuNiFhgeunukAQwHna8JdY1a5",
  "key13": "3mfU29sQe7tjVobem5imgH8rbNFjgcSRzxLyJ9YWknnZUKLHR96YMQLvn5Pz3dZNvWXqDqR7GQ73rVphNjDA9MxJ",
  "key14": "5e8fHz3Pr77m3owVrWGUrWaCFCBQFiyuSdCmccN9TJU5SEoEUW12uePLkXtRFQCBZbYFS5co9fM31Emnoav2prJq",
  "key15": "5dVhDMu5zXn5rpnRmbuhkLiqPk6kfz9WrNTmt6kLUVsdZkdfT8y1k3d7fPJkETfDjByC7uJLxzjNZEkSz7fFTaqr",
  "key16": "yFGRup1fi7WpvCPNm5nmJmhRdJzjxdjJg2Jypji1C9zxZsRXy95znebkzmJ1v9hkv2R8gxU4RyKssHJt9gs13RR",
  "key17": "4r1NRCBMrYy6DEno16uk8Hv5raqEdmxdNBoqw5t9jJAMy5GT47zChLLNfYJoHBW9UcmETMfjEdgPn319M1tWPWCX",
  "key18": "3WyRHLKM4a87xyvEnyHyfnQuX5yNAGyKcpJrYfhsxpVm9jTUWDxPLmvL7ErVYX46T5RdiFb1VwJKqmiJAhejD1LR",
  "key19": "33jfYfFNquWgqy8Z6PiA3sbRN1rVzkEEu1VsdUh1SFdRvm3tkHiFtXUd4RN5TNo2tpwBPe8a4SQ42MoR3Yd8oh4M",
  "key20": "2csKm7WC76SvrSCWaVVHxq8SELd3JFDPGJT2FSjzZCHmM98mWyofsw8G5ftDSgfRvoR9Co86uFnd6A7koe6f7xNY",
  "key21": "35LiYNkJqKcXyVzdqDBT2gwsB84K75DgxNHbfp4izV6TDycP4LsTF36qtirtpgf8FH8kBdMy4j2uNLwtniUCuCnU",
  "key22": "2N3gT1a6QaMam4fkDypr6YyJKidxqb4ALEhHQmFCar7JNPHB1kJ3p2zMcyX3dox9RP8KEi8W5rHA1ecoKSpFZALx",
  "key23": "33WMB4aaBucbYbR8APL1b9CT6psTTGAQD7aDNH4RTaYUAwB83KhF8fhSCKQuDU6rkzDMAck1rWPxKouvR3nThYod",
  "key24": "52R44sFrn45ALc39FiqdsDV8iH17iCp1PKYeizgGfFw8KU9kqVPAgpAwxisCFHELsrxENfD8c1kLcC2QxzBnwAYi",
  "key25": "49WKbD3vvJfJZZQXZFuS6U3TBzuwSAAnRYPgapUtkk5sv8kJApNeBnKCUS7U7QDeW7458Uf8bKh5fhTEyQ6E8SA9",
  "key26": "2WJkV9FpAT4cbSSRdgNY2aaNbvGcccRR7cWzBCs1g1StMJFyqvBuSxJhNMeyzAMds7w3srztMmZEge9s4UYFxJXm",
  "key27": "3DJ8ycNgQu8f3RZxxRjEC6f6TNG4r3YHe6A13tKDEcDEcs2YW2YVprMFjygoVFQLG3tveHBGvgBDCDKd12Ftk3A5",
  "key28": "4yzBMSRrZKxkcKDjSRCDpUanZNXisS3EiYfvhaxwc7d3shhtuUm6vEkXEny9k6SfNDZ1JhCpdb6nm2GrkujZoxPF",
  "key29": "2ybnTbDqD1mjR3EnBsrh1jrceTBUFkrssR6kaSUd1pLDCPpAQHg8e4cpMUjF63uPokJjZpFZHVJsz9XkBnxtbWW1",
  "key30": "3RFZ6cYPipGq6LympBuS5SKCkKW4vQLNNgG4nCixM6WegJ8jMEExCKdtYZzTSiznyMurtsu7nwTqHVEmyTWVZwej",
  "key31": "MWTtTEHVHY5h592vgwUfr8PM6nb8UPdzS5NRoToP8zkkhMg5u5J6FDU53Axn61XBQxP5bBGFQJeQ2ZPVszWmknf",
  "key32": "48Y5W4FM1YiGtrAXoyTUMMb6xatyWWsywufPqBu5sYp7GSJe3b9uR3SenAXA4QuSxfWYwcpBZrUHeBQiE5dTrcPx",
  "key33": "Bisy6t4YCyN8MXVZgfaTu8KzoSBGRwY8doXBgv2S4m8aeWQNp94oaMxurtue4xbyybrCudbxgipBDDuUSeiPKcU",
  "key34": "4hCt3CpvGjmXnWN5eiJZCsEhw4HGL4LJUsiM8csafw71M92fbzQACKLZvaMsHPJnykreHWAMy6AUnYQ7eo3iV7Zw",
  "key35": "2Uv5Tz1QzHQcCwWFs7nfPADQNtcDnfnNyAbvrKNZPzi2QM7fuPGVvnfyattzShebpNueve5SCaf5NTvJRk8dhfuq",
  "key36": "4ZvAMyzVu4yBkP41vn369ZS4n4eDXxBw3YZNoYJL6SsQWcYUTfNy6hSUBdN5PebqSK1mBTTwwAU4dRv4EjSXzez3",
  "key37": "4rmMrRLTZvSKDLN9L7DMgd8CZiqpFT49uL78Yoe67nhuz6habmiMz7CMHkUyCmhm6wPzSSYQANvdQPEBC4unCUqg",
  "key38": "2BtnLoEXAjjiYNtX79X8iTMDiHEcDWxa8ro86b9qNifseURwctmcMesMBd77XvNySsojTVVwkJc7rWKnFRDLvf4u",
  "key39": "BNEZuzbDVMm6E3qsGYYJLTEEHsRcdRbgGZPkAj3jn3t32qjTZFwgqFFbnnh36MxhCVq9m1Z7LfwyW33E2SLB8kb",
  "key40": "5ufG5tYLL7mqwznnT3ixXRhhwxkc5BmXMUD6HH4ojTbjKQEspiHvsTutawQjpBJi3UgaMF4HWZTqoJtxob89nerC",
  "key41": "2DxN7qanJz2aNWqhzHVQShqYqGXcAJA6PnmfVgZ6fh3CZVD8zKULznm2E8mbxWgKEQEcJZaKwmWwEZmjMPkd2y9g",
  "key42": "4H7fpDHds2cXpAbjXP2Lt7U4owqfCdWsQX5u4YPNjNgWwdVK39isn7EsnNRMHkpBZBzwo4dykyPPepVCeqg3nbZa",
  "key43": "2GparJiA1MbcZt1YrLFPQUY594yyMoqKf1yjm8xoFXDhEJyN56oqLhpoXVukJmJZwbhVQ21Ma3fhVVjo53fbfuti",
  "key44": "5UFd5FwqKiavU1yyuzymQi2vCVGR4dRLGmzKUYdbsZPHaZxed9sshLjpV6N7iKSEb2jmBXbLjxb5MSGVq7tfiGvP"
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
