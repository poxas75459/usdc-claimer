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
    "2qFDxNpDe5ponRswyCzFrTtr7paJCiQjGnN7L5GG1aYeCWN5dneExBBE1mB2dcPz5iPErUD38FtH3KPLMqej1m6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ax3qSEtmpZDC8Qve4pe4stYDTctbgFMoJJtoF3Mo5w9SqgB8eTQLzeuGydffzNSUUk1P6rSZ39fFFBRecwJ4NFt",
  "key1": "4xzRvBo9GJRxdakMhxafXT79PgZkLuD5CTvWYMxZdoeN4tCPpwipEdtAwW7JCdLAMnNpXkDPkXp56A9mLJecuDoH",
  "key2": "3NZt7qf4c4PZhas4CcSDknjxysK8unBow223dVsqYzXactB1LAakBvuGfdUK7kxc9wcfeKhuL5Y6P9WyUFKDsrUj",
  "key3": "3e4dZCEEay8u6jnYf87Sr11PgNTDGdmhNHCtgaKSLLGyxhiRWGKEJTAwtZxREpyz371xsWjk3toxVGrx523YeH2g",
  "key4": "4UobQNX45CCgYQf2NTiXnXVptMhpCM45cKFsrttD2oHbzbgFUcpUbJyVMXXegdkzLin5biASSdWgMtBJTiFsokEN",
  "key5": "2AFyvu6tjTosSriYv4uTuUrJ4tkCc8Zked5QdzYg9c8VLgLUaQmWDjgf1CFC6KLGbcuvJAfZPjU9986nVT2kBxQq",
  "key6": "4oPLUr49orAW3DpW1CLft3bVHYsLNoSafAvczGkFHQn5PubqAXkKTipmDKwFrRckQccf2bTfHyBT4Zgr8gzRLs28",
  "key7": "5y71F694wK1FgQvf2CNqiPNXCvVosbokSjZ3yWdvxGxG78PMwDvKtBe2jK6UScQLtKkZffe5yF75XZKpJkNKqakP",
  "key8": "5kRStJvDTvQkQRtjzniwTEbCAURrK2AmzNaem87H6Emeu3Hx4Aoc9Krx1ftWCoHoWwxCFvgDffaP2gh6vFfUkXdQ",
  "key9": "WHvdF7mr4dNotSz48SZd7FYnXbzzSLUMUUMCXB4BqM495FXedkqMGCxNNUzApaK2aPxkLJ4NFwxhzCr4v6wDMjK",
  "key10": "32nrACRRih174oW2zNp14XweA61ZYAXd7sMrpJcueuh3gTR9cDXs6oNkee3uaoNJSshPHVucss5ScAigWU7adfjS",
  "key11": "5GT2ZGEv5LMofUVnxBCJRTfxC69Vtcn2iuoQ4SRPsuFc3Mz9Z7azdk9WtLDbCyQwihqYdY6n25rFi6Ynk758bN59",
  "key12": "2f7moDDp8bhQ5SBEUSG9SN6sPfnuxURQhiy8VuHRuhbXgH9Xqxk8v6Dh6qdke4AF3m2UPL3yk39Y5mUK9gh5MeHE",
  "key13": "SyjXFeBNLX23kB6dfXmQZDRAiEFJiPY1GaqA8Rsfhf13s56xVEcGNYDKi26ZCBKhKYp14Gv18oEX2qZu15saADb",
  "key14": "65gcAomya9r6zmoCbFJnJWe1ULxED8Bh7cdGWrQLHAkzumFetCQFnnG6ZNCV5NV6Yoh4G1NSP1wT41HyjuLVUctT",
  "key15": "4ZBubUB5rNwS66Ekdo3F7wXMja1xNxqCuETUXqiR4iEE8qKnfvS68zrK7xoMhhEQxtKiWTYqavh8yL6qkbUpNy2f",
  "key16": "495bMYoykC7qzdyYdVJobKH3cpvav1cGxvwmytiBatr2Y7x9jKGFWLut1A7bWiUHYeQfKsJN1ypeyymLArkJhZga",
  "key17": "54xNetc2dTeEYzNk9tkQLmeEtnGR17FmbGvESb9nMeSqhYYcmYGGqivEka2dKNVvnxGASEJ491taHfFcamFbHras",
  "key18": "28DFkjYTk4JxdXRuLmzEH2PFDD5v9MjKNPS4BBJTaZJDg6zbQP4mP3dyj9XJCA6adCiPf2UYPw96NZF6o4QH8WCN",
  "key19": "2XP2cEuQGJKKPJbRQj978dC6y7VPwznjkbFrGbXiUDXRTskewmK5HFiBRhGhcyY8GnwbUyaUqgssgveRYJbJkSWX",
  "key20": "4wTXbG1YRtyYUExcCqVJrvTLZj2Nb99EQ2pPrt6rp75DbzPXcRtChtygopCm7iyGCnGos2GNpCU12VCeSsR6ZWGr",
  "key21": "4SaA5ug1NsLy8eMNJ1Yx8b678mxyW4Cf8NeikaXNZ6UwBQN2o4hLjYp8REyMrdBP6yvGSEB7kL5bnLRLhbj5HNoB",
  "key22": "5DNUBqLckWsSWcMkJTajDrQHJ9PLBXzxbPyNkrjaT4sqs6KZN6Ei9uf7SNPXMRXud3L8HpkvqaBLgpf4TNhZnUzs",
  "key23": "2iQg7XBxvyeDXndcwiQLWKDWy5U2X8SeNocrunUS4E1xLoUB4mT5hocy3Ve2horz9fiuhc8xS6NVXDqU2UbFhqna",
  "key24": "6t6awoExFk8t16yzCTNwrsT4iHbh4zATY5uSqhrwEAK1zcJRuUfXSag9AwSKqnQiLL6Tc449BWz4P2hsUZchJnm",
  "key25": "3dDivtrpgbutVBfAGUG6xXdYWWXETzCDpDn6FLRXhkiovxecBeWK9HcFxwrVuiQa7c4jukZgB5tSSNzUzi9TEz9A",
  "key26": "3qDP6LZnsYru3D4EMcJ5xRG96MDWXzTrkTzd8bYRhZSho44dTH2jvYi2kDxEpiF44MkXyhyGhV3YhomryyCS7qt7",
  "key27": "4t1zivaF5sWtVeqiMqMmz5FapcVUHAZMUr21juqgenUo5VG1NKCK9hf75AHuX5uvJxrZrPvV6Debm4UKnvkFTiUj",
  "key28": "4u86tVVwskRNjJpUYczkTFXYZAMYuyW8arSCLFLuWdy5Lkio5kf2RBEWHRShQxA5iizztTYKUcrLAVozf3GkNV7X",
  "key29": "2G6iYH2XkAKNjKzxw2QGiJj1pSqEyjfW42GgbrfryM6ffeFcZdFpDGLvnrxm2Sb7z3iSuQezXwgnz4KdvFxGHg5p",
  "key30": "2Jj5HtsqnV2GG7wrgdUbvRRpCdLknJeNAXBcsE5N4Wot9bWcrZm7DvGemzc7onneJj9pBjyoPnvmd5jY8n1YDnXD",
  "key31": "2qJKPUbUonsRiMtKmzoL6cGK1CspJU6UY29LRqnixkgyWrP9dj7uWVcn3XsPKYU57v4vAaVkScsGoDf5bt5JThjg",
  "key32": "55KTycQz2QqSV2F5FfmQfUeXgqRteP5e6sd4U2VZgC6fDER1ArVe4bxGPeWm2Cs33xAjZpqqheAe4kdN5CJBLJN7",
  "key33": "DFhCeDMeNnqxdTACw8ZBv1z4t3YfM7XRQRDz8X6siJs4nGG8aLVzCQ16u5zZdjQEkz6nZHghju5F11m3WcJ9Q9M",
  "key34": "2tgTbKuWmerZMcLvgBH4EiSMECZvjXB6jtiscWCbXrozo7UEN7LVSYWEKEubBTwui77NuZHdQ4s6AGPue5BpbRt5"
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
