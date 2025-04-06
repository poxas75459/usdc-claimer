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
    "26doWiRe852xzdvx9n6qjHD15taFMZZb5RMFFYeQmpJNVzun7BUZ2riLfj55hmNB4m3W1T1xpVvGfx9PUWahKVmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTKoCC4QfZ2VuDJVSRvSAz2qga7Pg6RY1vCZn9wmERncA1BB4ENuf5DD2UHKSmh1RAVvuJ1D8V9VcGxVyfHhjeX",
  "key1": "4G3MztxXDih44JpV8FywxcRsn4h4xUVbK7reZBaBg9wG2VH83R11UrSSfE1zLvfMBL3mFfqH8nUiXjeYqdMexNYF",
  "key2": "25oiwS2DB4hMjWQa4qAPKendUWJwMeQkXgzGc2Kz84R15CHtd8ZYY6U7ZSeiECR6Eqz6atZUNcs3eeycnq41r2wj",
  "key3": "3wAzB9ESsWZRPoVPBZCg6rva6ynr6jEcVLApu5EVi1NHKLiXwU5qbsDa91bqptUDccjFP7ae3hwwQfqTeWKKpU1G",
  "key4": "4PGVoFsncH4E3GUiTzrnkxKQBbVzmeyuXDhQNRFfBeGJSfMDtFeYztvroiSWbyvgxwCrWpaLRCr4QYPAYrZFyKx1",
  "key5": "3P2bUn85eY4uWN11wxLPEVt5pgoXR3LfXfshGSW1VQ72LrtphUddFU2dyoxapeMp9rEGZEu4tMjYYA3yKPBbnFAs",
  "key6": "48TuLY4VzARaNPmzQSAo6yRudDBUgMPs5t2Cgd4mogYRcgUeWH2bZekVowkDP6ttzo7P7oVjPgXY1de7fxUzMoYV",
  "key7": "3W4w4GRDcdabjFhiCR1E53feDro1wiwrDLE3Ek9JHSwcDhFMLUd3i8PNds56kkJ2cZy1wUxRmKc9KQ2tsnEuWVN2",
  "key8": "3n14tr7pqgJYGv5YP33iLHiavDgxzCQ9s1Bfhzhr7X99BNQxqnjBFpcSDmRNPe2AoLZX3XMcb1dDv4iw8PLkvxtF",
  "key9": "4wr7GCW73ea81EgExHt5itBXAddyDmY1WUEQyUuyHnQG52GDgq1whjBmEdwWYgSCwsmDhXvoEk9ECvNUSe9FfboC",
  "key10": "4q2oK3fuuW1DDhpyZYWE5RhDK7mfEh7C9qRtF961UVqDTEY2yLr61qjy4SWwDnif1xQhJsEBh67MjR8SMveTTGyU",
  "key11": "2HLgkUgh9yeYWZh2GMScuJbfa7nCwEyA1vXhRpC5ZaTo1bu13v2GFs8j8Hf1CWMDN9qKAU8w5Q4fT8WpzeayVBsx",
  "key12": "4DMvWCkreEUybf5vQnzjHpjees1Wjjh4CMsvXXJiV7gTnSGEQYFMj4XZsFCyGDaHK1wqwAjgdbjasWHVttYbxSVY",
  "key13": "KCcUuJWSe2bE766B6nWcPvHhJ571PFweTAzPJeztsJJAtGuAqrd6QXRmMhNTkhFctjg76XAjLNCLJX1dUhwrKAs",
  "key14": "25QYzp666A8pFu2A4CMy1qLtcUdAmyzxNwzyvhs1yN2TidrgD96BV2Bi6NoFH6owd5NSCjVKZxSofRhMVH4n8xY3",
  "key15": "5nzNXGUmeRYMdX8tQP9hzdrNH6fRQN2NhExp2Supj7zJmA3scUbSox6GsvEQsAM1B2LSYdZ7BnDw5uqkBMZDEdeK",
  "key16": "2vYMczBvvnmG5x6fuQfTW4J7uac1cJaYAy8BxRVcSXbNKJVvZSghjdM6jhvh6gNJRLbHyeFDQPsyFeBB7bNbkJDF",
  "key17": "3ynNkw2HRBvLpQYeJr8rh3kcyjQWUCTYHfqqCZXB8KUyaV19ETfHMf8GBtpDtUb3FcQUrJgKRqA1fNNVBQtf2xrN",
  "key18": "62uWJN29kVjtTMGSTZsadygfPTh7FKLNj9BRJVUzmzV6EU3ZturgnhcgWpaeNj81EDA6ug3pHheQD2q8HpCVP8WX",
  "key19": "MJxJ1u9Czthy5wzDBFCuxKqfbrEsGXnLH4p7WPVLpAnt7L6Eyi6kNsbycKDRze41zCopLJv5P8LFPUTTce6vsQi",
  "key20": "4jSnxAuMTpDd43A278oTparv1eotKcAMQVaUZQEr2viahuYfAx2KE9mAUbDt4Zkui3omogjrurj3NjFMv4ftRB9e",
  "key21": "43ULwNXQdXz4TMhUrhSPw2hp38KXB5fTipXh3eABR2fWJQGFWHSHLctc8PEue5ssN61ToWHz88on3A33XcAcRsLH",
  "key22": "3eQWqvx3F1tUjL5TbXkQsH9ffasZAiq8eTZeZSEAa3PiLqegnWDA9T3ihPwTEiDcg4Frt92F7mM8M26VX2mLxLMP",
  "key23": "5HEaDZsBPDz1QWBMg3GeFT1RJsP3gQDy5KFs6Js33bnxvysZbGm22FtfCdKgp82ux4vinCcmxiAqrPksv47xDYqb",
  "key24": "rJfLWBqeatpCcBt46bW6ZHvfvFwTdavksg32fWGPHWQWqTNVVMDmj8APUQYsGR4UPCjYGMCieRy5tHx9dpwe8pt",
  "key25": "XkQ5vNkTfxUJGoxPcumTfxeQsGHXWBhYNj2ocTo3NnsygPipACTaZXbMVKDhZonFyK7WvUuvGZzYUJzwKywg2kV",
  "key26": "3knaeuhwQyWewoSD7bFZXmsoSJXQg9T6ekGBt9yJJAKc8nYno79fan1qzAe4Ms5Ly28pygwMp1GSKqjnTu7vh5Zj",
  "key27": "3WENogL2rbJJ4ghxyuFdWJhzGxNwntnJf4e1Xf2KVXTuNSpE25E8EpGkv9yDy4dskjXcVtZsgep2ckjuBn1cpqS7",
  "key28": "3fe85MGdrLFNEvGB8phvNV5fhzHiYbkkjVj6kwgcCPDEDyyEpDyqUH7w5Za1AVF1ce8DW1KaRrNsddyYe47ysAzs",
  "key29": "6cNGaHEmp7Ex9twXcR33xcR9k5WEFJd8NBPuAKWqLKgPGoGtwNjf2mHqRvQCiBr9ViD6AgRPka5TJX8DM7kNcqi",
  "key30": "EpMRFHXteoMdZjEQ2d1Nr72Fi8Gbbm4gXJpDPhi2DLuwCQdUNqyq3grXcNgw8Xfz9UzzahE8aGqb6eeBHx9tf66",
  "key31": "5UerQnoTk3HugDoqozUH6AMg2n93iu9TsyERcnCV2XHC5eCyybqEywux2CHtE2En66cAz3xaHpDtF5QpxpGfgj5W",
  "key32": "3RdVR7Xs3KK7V4HWYnQzb9CjugGmBYq3LS5Km42BZGYUj1khF2Z3svmoTFobS7ypzawUE3q7mfzPNnx7iwSZjA8F",
  "key33": "35DDfioPLuSfLtwXkA4GfbEnaPwE3CGTAdQ2GQcC4QRYGJmni6X9nhRV1tBSt7ceP2eCHYDK1DfL21s64NNTNafz",
  "key34": "9yrkJZWnf6PoCaWEWJ5drc8nFt7S2JETyThqTFCMhS6iGqNEQ57AZG19LQpxbfC6xuk9BbcF7PmbM73vVtEPxXk",
  "key35": "53aiXKgNAxdWVDp1nUZBT2eqd7rL1sDkExrLHqtGjsrdH3UnHgBDhtVYDpdomcFXkm92VytEP82mcGQySYBfLmDe",
  "key36": "4eR2sbRTiivKEm4Uh5Zg5G6y1Hv5qxVkbgE2pWeVTNiB1fUP9uBZEymFa52ArtLBjreZpb9upqjQatsYkRH1SAE7",
  "key37": "3CNdLcva8WW97assMJiNj8xZ9ReSPi777U21djjzQmNxinEHPkvijv2jATUemFidHj3rECxV4b2Uis5ZN2oq73zQ",
  "key38": "2cVM2SKMoJwwauNSoztcjLGrUCVytfnSSLFtzwacAat5Ri6zgYfJuvsWy4n23L9CPRFN1RhERuUoxXakAy3cUT4Z",
  "key39": "3rrdSoQGkr1cQDZkESvWsiXua9bzGtRt27FhrXhsMJno3Ms3edfDcbZ5w4Pdns4gtbNtNSm5gvwfLuFzA7nsg3o6",
  "key40": "uaDgU3Lw5VNbzvDWmfXU6MPnrE7P1pz3UxpKLgunPFCtP4J4kwEnyb8gVBmFv7ZjmQNk7iivD2gQHLzJiZFEBVU",
  "key41": "2CxxbLtFPP4TDwTLtvygeN2nh9676uthKdfkMG9BdVVVmUvVmdkwpQkxADToKLBE1y95VasJWrTRonvNHZMZ9Gzd"
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
