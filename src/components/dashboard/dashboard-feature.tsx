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
    "3ouinApj6xHbqfwD3q6BwYkUJFBBezPqaD1i4ZrSNSgBYoCKa5QNuaGpnY8GYJhy6Mh1M6EBDmGJazeyKZbHY1RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCyuGrjJpMZfc4KF8boE35QvwHuHFY6Sc5mCZiAvMKtz5yGCjNuHsbhoeHZzAhSc4yc6J8MGovuKFFShSaeTW94",
  "key1": "2ueAVGynwkV7sZYMD31sncZAEPx5p9mAz1HPZGBPDq1bzN5xCLLrTYmATMPwGrVSa244fxe7hgpvrv4Jx1Qrz2QK",
  "key2": "5fC1DyFSD8bDsh63qmYJ3oLdQijoY5Rqbafq9jkvGG1zCuWt3pN1BddvAMCSzzewebgogpN5wd3E6wBfF4sGzFU4",
  "key3": "1wWv5XgjiTU8RzPf2An2o3UzDBmeDhxfpNitczqvz82TN1zz1gQmrRCEZYYtpRXAxaDYTDAyYL1afVnbbTtVNZt",
  "key4": "3ztrSRitrd2JH2repMW7EGw4bdy3gMutZxtzXZhX1R9DwpWqVF9nNPonsJgdQ6sgkwHZCEaHo2SyCDmcvMGHSZzu",
  "key5": "2oPxRbHFgCJK9oht37vUhdLU7urvhYSP6rodscxZcjXgN4CexNajJafNXK5hNee6Xmxxg38KJk5FyWRgW3YWMK7X",
  "key6": "5cAsenWrNG1V8ermTk9rSbMDmZoo9zLdTdEuC6UN4KLTJYCBdmMfmQP4pToFsytdepiZn7VYZQwxfYYFCR92QLGv",
  "key7": "33GknQaivuqseJk8956qSR2G4BD57fHeoCt27pR8X9Hcg4qUgZF24u2t3Rhzp2u47shDDh1NkK8VQ8QqHWsMDBA",
  "key8": "4AAEqEmfBaMo85nBEV3UyKweYd6E3Z5Z2Y1kXRRBitNVTj1rqBFkL3VtW1nNXTFiPrJyeTnXqVhajWDSBBUjv5RZ",
  "key9": "2cMc2C93gjy4G2YUj1V9Jj7tkEu2AqRbAZQNB8KQqXTWqbiXT2GqFDpHwhcPyF5P4sQiGbatdqvpcpRvRGYGw4nE",
  "key10": "29MaoytF8ZdqBSdHi4yp6GsWT9CWVD5FuiMZvyCUYtkLW8wKgGVEqGZmAys4bRrLiy5KZaV26XCQv5n7j46AfDGH",
  "key11": "4nvHkaxVaCpSfiSdTp6dR5q9168MYFdCMf1Frpn6dWNnywnN9nwMoUZB74LNYYMqftGj3rmuRNdvffjfFx4yf2Gv",
  "key12": "2ZgKUKfDgWsmicDZH8rTui4EoQzbCTyTAcbhp51aB7DiG8ZyvKzoghQNf5xrL6mTCJDbeVCi763u2Ri2CE2ofsaC",
  "key13": "4GBTAxyoaPTYUzBoqHRtLHmqB6AEEqqqPRw8HCkpxsJTmp2E4dBy4Jd39vHuJvYXvRLx7S5LsmnC7nbX98QLKotB",
  "key14": "D1U5BtbtX3u3kC5AZVLsNmj3PLNzia7BES4nypSKtKV2z8eXG6JVHJXjkpzbsfFTbsFgohaGbFZ1VcCXfftedk7",
  "key15": "41SMpK7nx5Ly17PfRhjeE2pggnbwq5kRBpjd89zJdinKXAL8Aw7hduSChSMmuEG49wU59emrkmBKme6C54quTN9v",
  "key16": "honLqnbTCx978CUvyz29ULxHux3EGyfaPaop8wmbD3SKs5VheLYYhPohEBWiZGRcV4Z4UXqqPz5Q8w8wFMj2PpY",
  "key17": "4crwNAiJdVHZB4CzLEPebLhuBGdUHQuv4nAP4s2gXuNW7hW7mMNyDJK4tasJamLQUHG15KuLp1PhK5ABRwLsJgRn",
  "key18": "5hHRZabV34Dkx9NiMVozgqzjcwzgvXVD97xncQBVf4412nnU7aQ66t4TphQE6Px53hawjvAXmFpWLjJ8Kwav2YbY",
  "key19": "37TeTmmmvv9sr6epHb4ZjiVNFiFiAXuegEEcXPDm97gszVhXNYzudKPKbBiMRpWxZ4XcvHUrY2LTcRNRi8uNQPxG",
  "key20": "g4ufpea8kXGX6NmEX4LszMEuRAAZepUtQUyLb6QvRct354j2FDpr6m8AHmvkTqcDnSbWUPE3xH5wjMnkFbU5K9F",
  "key21": "ccf6wKiuj7MoQSrtPyNc1nC3XpMF8yaDqNNZjTZwTPasWcXmqTyK546a5TAqcFGqobmPmkkCQWjeMndBofh463L",
  "key22": "FbirdoTgUvfzEk61hJ6tfmcPvvkGKwAU2y2kG46DURmAtxt1bEacow9rYQLJZcLG2FwctoYiGXiqZ54AVLrxGZe",
  "key23": "5GFnu2f4M7ayGcrcwEWxS5byHckm3JyoCDmuTSoUNHJpHMgEPKPDMmGgpCREfX2d2TtZsgiR7xWzkGBZHjrAEgLC",
  "key24": "63RPrtEJPjxJTgYz7FTKtA5PDQM33oMTEryt6yVFTCcDX3ayZSoKPRH8hrHMaWkc18ZuLAJ5HmMG9CEiwVwfxPbo",
  "key25": "iLbGZkmDPXWtLBfYZxDQmGFJjSKVAELFyzveWgwt68u8391n2hF7n9spnxtz6SWuj9Z7P7oVURAnK14t7mFy1rA",
  "key26": "2u1rkZmHkGTQtLeNNSbLKwYVDActd2Wotw3ySDZuf6GYjSmi2nTRGSnT8Ta62LkHCtdo8b6jsVG3nXx18ZPDurev",
  "key27": "3Wrv396U9Zfix8qUNAJ5KChHTbWEHBdfM1rQiwMy5Hr4bjrbgADcSoC1Fz9d1Ydkmn7D5YHhLSJUkV7uLsBEwxA6",
  "key28": "34raKUna6Ki4xxRfjc5Mi8awj3sWpb444mRgpWNKa95QpZtJuZxWXaPfD3G4p5pa4gYoKMNt4qKbshCGKPvR9pCt",
  "key29": "CwdnPxEG254V5fyZWSakSU8cd4wvQhgVoYELgWZd5ybpi6XhuHyHxAthKtCpWrPmXcCRRFk6AZKXzdTVtNUmEh7",
  "key30": "2TKu5WimHs3GFCtbPWadHMf51FHRXPjwVfPu6t9RtgEPgR5YpQLJhHQkkiJPctSoJae6Lqb3ngGKpvnnD7q8CPjM",
  "key31": "27dPQNeEBjsVb4F7dPvVwXvS5CTfrnsssYWQCtUj5JRGoW8DEsXeaAPHabpvVDBLivGNypa1fuxz4H1eSH6KMx6T",
  "key32": "5XFwCrYyQgnBtBA9Dnsv4ikRUVZv5dPNT6SWBh5TxUZBAfDgV1gBwxYbYTownLn9n5zw3RjTTsPVM6hSDcDKjzDg",
  "key33": "2h2LjsNpNQt96Mk7HTeWxphALPHP9i3fRmSvytwqtJ21XPtPdBqhatP8TkcSzkY1TqUFAFcPXugFtPrUmHzuudzW",
  "key34": "zdRXiH6A6w2bprmoXGNQnaM8FCotJ1X4jekGN3M6VgDmP9Tvmv53CReDRv8H2KEwSFcoc76pLj1oRvwLf33w7cw",
  "key35": "62qMR4Mn8wXbtPa5FSyLFcs3Ys3HvYqGWPLoLargsuRhHQPrATFU5gznDNRNacVUansWQYhuCmDMgzu6ZyDAvqBu",
  "key36": "4joiSHJfRbR3g91izzfguBiuU78HBAakwfkCx8aNvqLMmeN89LFN7yshb4y6zmY4fNphj1Lduy2R1LfsnixSGRNq",
  "key37": "4cxj8Fo9Mz3jwXLvhM2sy35UVrB52EyUEa2Ca881eUyXdg4qBHGRUaDzB6QfNi5TP8dchRambgg1h1qmAiizRBm4",
  "key38": "4gM6cbXAeeM77ngEm62Cmg3Sxv6ABn8NenWEMLE7X7zxGFKMYdiWiRoHTWFPycEoEe5pvNBjB25XxbZG4y6TEhEs"
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
