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
    "5p4SzYNEHG2oi9pusVL8VjHi3zn14GsKKsqaUpXegw7WWtnvV9xqy51UMTcqvcLws9d3iYvaXknSkovhRBSvVGqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LoGeozUaAC1EKkB6L4ZSEg429xPYXo4j5AkYDM7ztwSm2vSQDePT6TNHkWN98Exw4X7QrZA2Pz6mmsBAyGGrcz2",
  "key1": "3K7UGeTTmsVAbGix7JhppMVEqF1qbDxouAuMhNE1TzEeNcVZ2ZsvAj8h1GYN3Nixk4pX1e13TaJ4nWug8auQDmJo",
  "key2": "hoMtCrdnWLPxzpmsrXL6KGAW5YX1uzNnKiYm2SDK8nzvwas2xXMWyqHso87sCa4mEy8TDorEbfPEPHHsgBGcYB5",
  "key3": "3YQtiu7eeJSKKTzYytRcVXqXvTHtnq48yytNnY9z6KjCRipvhLQGqMredFyLnv8SKf5ppTPtYVaS4uW9t7BUo9Up",
  "key4": "huKjindUcWgZhKGR48SmiyqpVNVmYqrDgiUQj6f3tfqPyTB7Mi1nPouKBQNdKBcJKNVQVqKRTeVLyLSRFRggtV3",
  "key5": "217RScCeEMpyj8kKaafDSTxYoNd39kUkugiGFK3C7XGbE5gbQTLZv4FyzF3xBUSbat377z3XAp2Swo8VxKLFTytB",
  "key6": "355upYY4Bi9MeJopWwESQVhwYbRbwdmffiYggAefK9RjK9PrCGXyTS31Ymsp5JVWvjmD6GwT2YM6JbwN2ZWUJHUg",
  "key7": "57jUdXKqCVB17sYmrASwp7Q9FCfSub9X4v4hEmMJGBQDMuMiZGYVKPg15e1wRPdVq1SaqkzTHYFF9R7ncwDk7yiT",
  "key8": "65W3SL6tAReHskmTQ2zBD8yvYsZRoAoKDYErAPev6EGMJgeEfrb47M3Zvm26jKF9zRSiMc2vD6HPzQx86K6Dmoty",
  "key9": "5BUr3ev7DUeGs1YN19p9XkRsVBUJx3PHBXYuYhi1VQW6hAxQfiQtGVM2U19T8xy7VAir9rxjR94S2nXFe6bZeMNC",
  "key10": "4nbLJUpqaHPSo4PfhqVp1WDMN5e9FSCkxaDUBaUwEfJtBUYK8P1fciUWCEnsdiUsgpnUEQT8MKePkDF5AV9L4tH1",
  "key11": "2d6d5W13TueY4Yoy34E1Q5Woqy6tMUYoVbtdeQTKcjjy9sw7UUbdj38eZdB3FzJZzXS8V8S7mz6xRzxatjTFLY6c",
  "key12": "MyKLss3iRJ725w3JKEnwf43oTEfk77Ucv2AVt46y3FXTFmt384Vz8FJ4ifhvtTvgcn5sVV7NB5M1xFRUAYtjkzv",
  "key13": "5i5b81UnGjDqJcXqVSAUUbefrbCT2Bjg629YnptFBP9Dw6eZvthYeJCg8isks1ev7q9q1zR9d98Ub69eSCJEPvX5",
  "key14": "5iLkXt5LohwCzZuNCUM6NX2TrVDerUVUeJXy6pMRuxFG3C3dvvryZSuS37V1g6G6FrM621gyjUsrm5WFAwKC5DAs",
  "key15": "to7D36VcReQJYRFE4ciwagZwh4GdG4V6tQrrMuUmmGGvGzKAKougrJ2B5XgJdZDKLLFKokvivxMi1QH9ZUMzbUn",
  "key16": "5di9G8hybRuwnzc5DU6iHap37qgDDFYzi76B1Agf1RS43zJk6GrTrTk3DinTLsQGyiq3xBi9Tvb3PF2oV9os7iYi",
  "key17": "5AoTVp1FDB8HDv6hNidzS1BYEHXHtM5HyVSSH5VE5nYZeXFzgePWrdgpw67qxJrHFxVjJo6iAKVixBdbwXcuiw38",
  "key18": "4ahjw5qu9dR27Nt5WEji26MJFok4iihcbsLRQhz7WMGfaYSXb39WgYM2FbDFJJQvDb5ATZLDeJNXAAjpPD63HMEf",
  "key19": "4d7P9dfwNRAjiJPD6WCYxwF3aTCX6NHQC5YDVLRf8VsXpA9TAXnF779AzusYaTBVhLdWij6Tru3HHoaUGe8k3vCg",
  "key20": "4eFVwnnpymV5Q9FuVtxvxKUAjfxsbNc9amF3MWajrsvkZTwzyhdg3nfEX3G15NqiSt37zkkWxCSHzHgqBAXmE23H",
  "key21": "2yp3gepVmrL1u4jZc39Usmp6jTNPQ3iNaPfLpKuxudmKDT1y8X7Ygoqsjy38Dfq5ajZUACcxQzsvKYARnaU6V1Bs",
  "key22": "3K7p4eT1V4mMspKoYyLM2kKZDMRKu2r9Sn3ZbTVX6dLJfz2QC1L96rgi3nZLGm4X3HCWgDQWyeQCnshVw9yix11m",
  "key23": "dGGqAJM8Bmue97SqNL4GiaTcaPDUG3gZ7Mr3fAeuj49hv4ioNJge3PSZgkbXXiKwxcJSwkhS2ou9dFqJ5e4Bw1m",
  "key24": "5q3xjnoD8H8xqcmF4aqx3CwebAqQeEtrYgRc16rBdS3bVkADM3uvh1ZrhLGrNUdGSaaqZhq1RPq1H6jrWyNkuUSd",
  "key25": "VHx7n9qehdBydA1MbT8DwdYkdgQAFVrwzrXM463VfoSDFSEuLoqtXEhe1Y2Nsp9GZ8EDafjTZKVS9nUW4h9c6R1",
  "key26": "3Yp6h22YAKbE9rGngs5m1bV91NRRiD9rTFkf3JyCJoqa7ZyktWkAXAhXPw8TqtwnAeo2oFei2dJrdjiUYP698h7A",
  "key27": "4MbEMMwH72GDQYGDLn1nQ7s1eafSMg5BorsWgJk7sttnGXTeCi7Yrnw62htXJmCtrYaedbEmLywSHMN2w3skAmDo",
  "key28": "3unFgwmnAaSEAxUAUdZvYPqqxLNF68VYp7Ecf49waGGWmGsKAtNFbmCcVzN2PtSqEJhWpLDUyopZxArLyXFQXT8X",
  "key29": "4EAqCRJbbbBCGp3wJY1Ao1YkXvxdtypfmKENP2fvCyjFVj5SPaP2YVvFB9qwa8Ev3fvMUfWQHECn1tpBCJ32TRRo",
  "key30": "2SnisXf84mdB2Yuc5tkHTLmq4C56SngW5HscqKYnubdwJ1cXY5TxEg9Qoj36s6atF2MS366pXdwF5H7WQU6SzdCf",
  "key31": "2UURH2F3SjS3jxH99f6r8KF6J1FFCrzHZx7ZieAuGGQwMms5HN3aStmh7Dh8gLVZyFjWw2k6P65jvXX4pBnTypxj",
  "key32": "3AuwaiRu4bjjvNXzcc5dtEB6chZC32BJbjwq4MLbQZPXJc7hK93ZcL5dszURxvDqa6MuKCTwiG8RgVRpSLHpeAzT",
  "key33": "5L9nnKfN5AnE69Uv2SmSXNP36xfCKCyAL87pgv63BcZcxsav2ZEwaFDcf1DGpjTgX6a3BoxVZ6r3WyjU4M1SgdH8",
  "key34": "5nLuArJ7Tjur1SRiMCu84pweS3bHeJY8u8o94xgPyQ7pSTz41VkWZmzoWxMJYfSgEmZg6Aj7Q4TtHWUB7A9adm3u"
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
