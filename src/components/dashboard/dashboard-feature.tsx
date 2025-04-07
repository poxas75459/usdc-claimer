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
    "2D6h8M7Ua72KyWTExFr3iLi9gLuJjXNXUg2BaNELVgvi3rg1GCF6sVziqVqC5tyK9pPAhu97oPYS6KjW1SRy6sT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZdoqbyDZ4pb17VmBoge99mcmnivs68JEYEM4PJYBNC7SacaFQfrRXCBQ3xDTbQwLruUn7RhLaW6bWWC4zArK4F",
  "key1": "4JQJBXHMraqvKoQLUh2JHw2vuRYu1VR2vr3Hcv8oG3R1747sC7fWWqB8rmPpBNzZLVDoLmsEbz7HQ2mZdx6RcRZ5",
  "key2": "22X9E6utQ1ojY1H4pE7LEvyvbCxhUfkui4MZAuLmobeU9sGcf6iySJ6nrnvuPV18NW8T7BfLVfdNgdfmwjaktHjn",
  "key3": "68EbPzHBJY8VtE6ga134u4WXvfKPLkorCkMiwzq47A1LA414BDS6xMCBTLzbcork2w6MfWB9SnbfeipqpjPtoJ5",
  "key4": "66Y6VhCMxLkDf5hXEGZ8J9PgmRKMvzCiuCHDwhm82aAcgMTjcFvrfz37zmDogfV9TdseTjEAGTbv68Ncgd7L7n6Y",
  "key5": "3WtekLYAVrzkHc54auD31fHBYnWmJwAPGufNWYGDDJoYZ1P3g2hnXnLBC9JGFdHUHsLxzf1NiZbiYeNQDgfxCeZz",
  "key6": "5bRTWJKgrkMPuhKwPuVN6xn9NzbAPcoAzWwNPNfLp8XnRzu5E3EH82dy8hvxYRWb5Dr3jv88w7svMPH7yFqwMM9L",
  "key7": "Mk7H3ST5FPSPuzoWj6Ub7SAG5srR8PTxx7o6ZrXBoqRwQRBvkUf5LrUnWUJQSnuKow8o56CUq8SMyEkEDt1oCrU",
  "key8": "2r33k49vUa2nqMvaSKYMZD9P5FvnKNuxiWCeSm7G8kroBsuA6RJSnDBN5PDinHnzvo6419PVpSf2djzhdU82sU3f",
  "key9": "2LetE6fdjY1tvGHqNiV62oCoe6fwubAMCvLkRdNH22s35ZbeeXHRxeepqNzPexsngdYJmjB51bjr2endRv7Ud23j",
  "key10": "4knq8GgwtasBAtTb4aJEubpvn8o6gZr9XD5eFHeuLPqteLQvFgXmYNihSH2jjMJHzvcebr14u99nRwvTXU6tjfVE",
  "key11": "4Er5iVPCHtekY4J6ufxbChABivJmANbLvjViE7QWqu3Xaw9hA7yzFsPy5f1pstUgSLZEBtrDQAawdfcPPmwykd4P",
  "key12": "32bmUuKbmYiMnwpn4io1WbexVeFB4T8PUkDLMa1FFrMXAjqyafdKyBRrt75co1Rf1zUkYxAdMNjAZ2oE2tCe3Xmf",
  "key13": "57RFybKeZJwB447QpSLCJpvBorcGixVJm1WAmBV8y42pzmCercRH1AArWEJigbtHMmcgfGdokYycMNSd3B5iZqqS",
  "key14": "2gNmtqzybVJXDeCvU7TBBM5tE5VozbC4PXnwa3ZX2cijchCrED9S9VnHbqPuyV1pkR4GdyAEu73gV4G3UjZ89Zne",
  "key15": "5yyJ5ECMuog4Ci1X55Kf3Xet7jLvjHc7d3reGtuH8gTwqhuawBcNjKHondfdjYH3dPZFoZH185z668tnK89thppY",
  "key16": "3CpU2vTVHxL6CR97skXofhXQZxmwdQtQ4qMBC7mu9A3UUFhqtv8mZi7VvcykhmzoTVm1Mbu8CzZ9QP2jYZ2XhZZi",
  "key17": "27tx85UJjvcJHJgNu5Aeg8RZ5dUB3hPz8zabUySMcYfNKLMstUb4zZBFo7TZ1ysipDCD1pXwjwh4PHzoKMgDdGTn",
  "key18": "3NSV7vcYoH16a3VrFNtWfgiw2MReMtYpvkoixy816vLhgAqiohgAVyXBfSiT7Rk9AKB5MgDPAjx9dnWzPbLoVqU",
  "key19": "2ekq7C3SfriPdF3dLdXLk3DfrRMRh8uEAf2URdHLm4MVEGTPyd6xEJmkTS57ajw5N65pJGnQFVgQwKMgJujmDo12",
  "key20": "7EiZzXDFonmzrNNszEgC3SbZpNjCh3adNNw8YdnRFqXWrKg9pRSLTCJRmGDUErDiLfjFB3XUNJ1L74SPidrnMaK",
  "key21": "5JU8a6CcrwThx576TB1nVK9E6AqxNxrSPs2neXocKouT1LtdP364YS16twazBrhBEkpw414iZVFJi6EmW24BvTHs",
  "key22": "kEJXZ8ktsnTWjnXiC5U3E76xtvDpvJEVmnrA3Wm4EN6BrMXPpct2oEjaYAZtMALwfv4PXobvPjGMo7gGty1wQMk",
  "key23": "2SMaXJY8zUJEyUY61oQGWUt2SsQbchKuWMtav9mikamCpPNExgThbaR6eTAFdVzsASp8ZeM2i2H7unj78ooSTqdk",
  "key24": "447Kepf9S5vjX3zj9w1f8CTuwqFdx4MBBJ1N9Je4wceCuKuEYcGP8o9BB9DCfrwdJUDf46iVvj7nP8XNyzpjpvoE",
  "key25": "4aSMcGwosvvsQRSHqGFm2QHzSuB2nGv6sHeBWysZkG61J7EBd55F1HV7uz7DU57vSmEHR18KkwJLFdhJsU1ZksEu",
  "key26": "3bHXv9Vo6PRE8bvnxv6pK2e8YzTeAyoszsPG4iEnHLZkGDah8423GhrkcWfwPaUXcwQE8FeAvw6duf9ojkKgGgv6",
  "key27": "5PGQic48AdEWzEyBfBz4zi43hrdvUqbfALsBLsprv5bec8ow8LyJeoDZRGPaTYxELCfLaeyNvyTfG5RJ62WMgKZk",
  "key28": "5BUwnwz7WjnmTAqX4w1jKAryMWvGKK2b9q7UTrV6GCY8rv4fNsV7Dx9vgFkJhyGRmEzY9uwm2eCF68DKXndNSirb",
  "key29": "2vSTGuQF2euLVtfK1qRG8VQT9nLgSFD5BhRpSvEieBZpYPtU8yrQ2r47Dhmw8DhZU5mEy1ehfuzv3bLk47N44j6t",
  "key30": "53gRsgkxhnefH9V5xxPdDMi83o5ruuNheGVHfdgNfruGq8row8WjLwK7g9Y8SafuJKm5Q8FS8ncNyd3Sg1sR17sw",
  "key31": "3UVR2Yr15Wxbeo1dA53saHkvNV97UzqQLZrmXXqLYFiUtwQhQSfsYHyKkd5uA9mEnhWCgDcpReUiks4zDG5ihjqA",
  "key32": "658Qm8m2C5Fu2DYvpx4MBPDj1vBnc5LmYwCdJEfjtzfA54MeRUYhtci8G7N3xemKz4RXSQCLDbQKZtWbr6RhCCxT",
  "key33": "5cqNUc2oALWSWobwQZsMAzHohV1oNph5VJzt38pNsdUfmGUS3oLT6BmK3PegQZ6HEvQRLb5FK7ExB7W5RJEUKHC",
  "key34": "2FFAXJH3k9KVrhs4ogDTVVUQiYYqx2fkb6mXUC3jCSBosiUL8UtE4yTfeCxxHazb1h6hiP2kzdGqjdGmSPPjegGj",
  "key35": "ey3xvb2Vio1JyvoZKCNPugg9Mhyfc9zvq5XZ4EE9rLL7chVqtVHF3ZuCCxPTkbn3oPPqhEz6XhAsW8aMdoTU7et",
  "key36": "4VBe5j3cuwXy1XuURuNtM3MWDbjU7KKP85E92dhTJ36NEuY2z6RKeHga2h7P1DkyqavgrKCq4Qx3vBPqQdv48V8x"
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
