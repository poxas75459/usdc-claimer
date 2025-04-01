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
    "4K3qGiWUsrK3AwnKSimMDGhmLLRQpr8fRWb84V92QsK4G7XA4HLpWeWos8zieA54D1kEvaGPHMt5ycwGrHJJNcTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWdBgabaJqTDVbd92Ush5dpkSjKBz1a73Q1AjU4NHWdWSpcE4hD3CF8JVt1ggjvopYJvteiT1DfAYcNgUzUZBf7",
  "key1": "HYAHNj9ArJ9emUytMvfjV4ptesfCGDZSafPgsXsGBd8s3Yn6VsmMo4Jd2PWa1wcZ3yUcoxysB2S7wmh56v1gMvV",
  "key2": "6716ytyTHwXQpXsiN7khrMyQmy3MF43KGNTohCSgUY1YFiepsXoB9RS8mRWMEuHtQmtk7wjRQ7fZYo567wgCBsG8",
  "key3": "3SdqqfYm5xQY8XoLz6H45AhRyWhALvZgE8zoEfWwDK7FFteSULtbvQPofCZcnefoG8LuqRhMzxqDrf9QHsobSbpG",
  "key4": "UoJxFQye3n7to3LnriU4rjj7hRGnUcGJYopGNFs585sDit88c4ZvYJepsJaTjEgr2iXSAptizEo2TBJ6bkBZPXW",
  "key5": "47o6APUmVDzjbZvT5s7LA2rigccvJpng4arxq8vjkTLMugRFthuyPPgDKcL4FyssWtrYHVJt3dc6mi24h1ohMVXH",
  "key6": "2gMg82BmDn9F8jY7DyLwFuriuj5nz9Mi15VeMqqg7Nh8vS8qUbrbgTMHRGNHoopXerpFy9oAijh3T1wj16KGF5zm",
  "key7": "66doP75Avgijrht5wTMeyQsQ9UxSubFAPdqUbEny7kn7Fb6UdmPBio3q1n22kn7iA4SmpNatXkxGPA1dndoMEhMZ",
  "key8": "4HJ7dbQeacRDJprqfV6hxwnPFhGKpjmfKM1W4AiK895yctm9SQ2hJW44dabNVrQM44wYB8wSic8oWb2iMBuUSQ3D",
  "key9": "65mAwkeAjQRCHaCpLtBusixmpcb5fTqKLfD3Z49xfxFXwZjqPMicQa6e17zARvWqnHwL81vECNuZKPQFNLEvSauW",
  "key10": "qKPH7CnxPs9bDwYqz5N3V3qGy8BcZQuUkshzNGnXK3cEGizaq4F4qrqAhpDe4Y9NgkTKTqHosjFixwECRs4uEYk",
  "key11": "3zwGP3pUszBMH9mwhVXg7a41kj9rrrVSR4Px5Cz59vxSGRG4WwEmBBSgo5q7ii53WkYa92n5K2ie557HQYXbFGTx",
  "key12": "XYDF6YNg685NieAig8bSvKv6x6BvxVFDh1irww6XFjjRawJ34cbjh1BFcUrSsMLRPpqdNxH44sckBXn6EBGveSf",
  "key13": "38Myt7EmKkWJfXo1tAs7rv5XjRyM1GyJQbNGTmGrQy5BnRsKZHeFGrL8Mr4eYyVTBA5MXGjjhCX4Te2wqSnPuVHo",
  "key14": "58cuUVr4kvfFS1CuH1YsBoLRBtxr3BcZwDKC2615JqBMVR7xbSSiXQJKYWXW8VmpF59BMjLPPMoDrSNG5fwQ8T4L",
  "key15": "5X8urCN4QFA9Kjp7NeA6i7bHXKmuqV4zC3jS7iDyecBYzCt8hNqYpNMrSwcWcfsqEXBuPvZnkM6A1qDRBgDeEasv",
  "key16": "2Rq78U1J5a9dSu1WGAEw7rajpaDF4KvAeTV8hg3TDHFDrVzt5mMfM8YwFkWWzDSaUsX4uChm2AszRnMATyDFBExo",
  "key17": "fUfChfbsWw5qAXTDyBNWCx8pB2YyHpdgk6CMxCuZUdE39uFEsSEq38N8akLipcQ5t5tveUQAmLa7N3LnHcqFugV",
  "key18": "4SmB9QitjPviPAzhL3Gc2Dev3wnr4iu1EmKTsJDpd6XkdahcrHooh1CV8w4Bra2ZzGZoXE8m3uiwW7iyoD91UUxJ",
  "key19": "XygRyE2W1yUrquaJGwKwFCQL4YUT8aDa9kMDjmLzwKxZyWTmsf1V1LunDVGoQcywhZcUj8NrM5EadZyZgCxC9r5",
  "key20": "4mTeGX4oXRJYWg94dXWeGAcTRPmNJuzMvgkSzE8xwWVFai2vQxedA6trJXqr81GsyfG3Y48EM3Mvn269duiYP9n8",
  "key21": "231pTCiW8Vo9FafGdUVYdhpw9rjoeEStwWSdVJkeCHe2B7RsgvKH3KE4sSdtVu2YZxPxnfCwnY2Tve94bPTQJzVy",
  "key22": "5kadfpqsYfRMgZsfxVMevS6eruUa36V8RPwK2u4MJYaUJGZsWhkn5hsKREE4bFzdkDxTVzYYyWF15EwLxU2deHas",
  "key23": "5EfNr4e1oeSQyUdEVSeqXKRJAJsD1pr4surxD5eMwyVB9zrizsGMvDkHSZrPJeuZH7FgvFXTURdNPdVmaG6mTDyQ",
  "key24": "4uttq774wpNmdbB1fZqkMGAvhY4X8gaX5MGrGwsnqsfvrDZKSBauoADiWX3mP2BCjzcmVBUsZoiRH41oQzxnxxdP",
  "key25": "2L96YfsYkEbX1ezPJyG9vkrS8fcb3SbQedxb69aSxvi798QCWtvMBzH3x82m93PX64G9zTHpXaHM3suN4UCyRjEx",
  "key26": "63a6LBp7TYMmxsPNzQTbBYcBrqFkJ31ev7P1bf93ySvNHNM9zoc1a3BEAGjrM2CNBwd5AtRbBL9adFdPXKxAYHmR",
  "key27": "25qYyajKhgetUVPEpE2PWkXXWNiEB7q2xXJhA4XHSu6GkDvDoFnYVf7nySALYM4djXhaWdGuZDQ28wMooJztDVfT",
  "key28": "48efsS25f1RnSGF7QaRRENYpELDb3tU3YYyzbEEhy6noY6enc9Ng8b3WWAoPxhdTSWVUwNo6QVASg9vEBYWWq5hp",
  "key29": "2w1G5KwAASMUSUSm6MKWZaFFfHr3sE6wySQQS1NM235p7VmuqZx27UvGskDkigNKxavAd5ZuNUxMzMeQ3mTf3pWo",
  "key30": "2xxiafxDiC4L9iLtKUojXVXttNGrxUT4njjvjTRPrmLLDRHgbkerRbS9hLc1RMLvGfCvaw1LL55xRwzPvFL76izu",
  "key31": "a95ymK8doJTvi3Y13MzzTTUFH2Y6Y43Wiy9g1BoozJUvS21WqYWiQPGA1kDe1qU561e4uYBPUz2AWkWMZefNDDU",
  "key32": "5SqzEUUG56TACpR1NnFc1Gd8ngbWkeohKKtjxw4x5VcdmcEKXE2ZJniXg3DfQJNDVWQD5GX8gpFAyJ65t8hnsYsE",
  "key33": "5o18s6wHAqHzEMaefaXKRK9fxEZyLX8dopQXMKmAgoeUsLUa9PrubjbttQ1GRvF8GmKKND8TtmfxmuZgqzhPw1HB",
  "key34": "43NoLcoDbCfinrQFxemvs3NFgKauVo9soqfYRHFkdFQXPSzJLKBtHACzu4UAntCYk5uqS8PQeDKFQagMScVpQJrX",
  "key35": "5DsNFtEGiUMMnoHvm49X17CgQNceNaM2rUAGUDB5W1JLJuLHVHmxSiBvarEpChDRVnxETe6Xfw1Ptgrj6Bc3rLsR",
  "key36": "4e8XxrA2exScc1tyr3ysdyz9K6Y51XidZfobfrS5JE5NaXo5a7CXZ9LxviagCeX7UsdA7Q8Nt6uwUinj294xgw1D",
  "key37": "4wAVbB4Tt38g4DX5jSf1V21smt59X5uriU2RpWDEvgGnRfkgL2DZTJuyqtRaWJd5L5ADBBXn1RkqdHqW2m2ckJCu"
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
