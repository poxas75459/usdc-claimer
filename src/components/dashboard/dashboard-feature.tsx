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
    "4d8LcWKHFpxZ25Ca9GBPLtBJj3JfHV9ayDoWLFaPGdMtqDtSNDyKQSRTBieGGAiYDkWExtyTC6yGbwzhYQxAEbBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UY4ke15PgnDdD3mWmaFWoGmTkEuZt8LWjmsaEBBui6myR17qkZkcfAzHDmfEVYtiTjgR3PVWtP45bvJrTVqRW1U",
  "key1": "4PxZvtS9VtHCuHui7R1aqXsU3DGbEwpaH52j5aUrVQ8mH9fmj1RR2fjPKWXAhoXng3D88TAwiJs7yYYGusQnQTzE",
  "key2": "38isrc31c6CQBi3wgb4BaPGQDdK8fHNpSebX8LCso3ThNPraGBth7Zz3iFwBveYg4M2JubL5nexBGkCSSFCGcREp",
  "key3": "3GTk3PjUP29wvNxhwWh6c5GSHSqfskZTqp1sZx8YAA842eLkg6EJfiyKtadQsKrDnuJqALZNbyrD8dAoGGYtniBt",
  "key4": "2ct6KBU63MrNhBeJaoF9mkmUZPsy3SHY1NMo9DX9YfVoP7AUWbrCj51bbcbX7VCwYdEoXgwSiLYvHkPVQKcfZauf",
  "key5": "2o1mkrGaBaSBoMkBFA1yB1kkBYzRu3ahGXxa8WoxvVaeYHgyJzeYmB1hiVkmukfDDwAQgAHmeFwQrEEesm2jbCLd",
  "key6": "3uRqHTdYHZBiCeAavc6Hpt2RdpyN3B85jJDuny8NLVL28Zeo6EfcgYfdV4pSkMnS84Q2zmwNkZuxsFsFTVsuiJKh",
  "key7": "4g7ohxxSLaAyPGnVKPrhVVs6aqrRuw8N5aFAKita1Qk76e1wGqSr3rDS9xvBi9rRwBiJNdWyPthGrUpWyN2U5jVF",
  "key8": "21mfu3kw8SeVbBzEYJL9m3e3RnMRH8dGBY7JwK1MsiCXXJiBWtzJyur3SBepekEQ8iasJSNAQAk1eyx4TLV64bDn",
  "key9": "36s6e1q7PJWGUNxAYEn8v4TkpioYbfAFLoc1ZJkryt6AWhuoCx3Jfai2FSFKYQnWUVv4ef51dnPVb1RRLGMGjK57",
  "key10": "5axo4L1i6Y2Qy9FnDAfz5BfkggvPsSeFp34PSwYNZxxAYT6AmDUtuDhK5rTrSby9e3wQyMzZFdD3L1p2EpTLtxTp",
  "key11": "2yJQC4EKtszo6b6y3LY6FB94ktzTTC86dbUjzxPKwMFZ6rTuv6CC51g7REf8WFe6GeF1Z1JyQi6BSdSBjhpQ3k8o",
  "key12": "5L544mUuUP92TT1BwKDUyxmP4kGCLWtDxuCKqDZnafEcDLcRZhtvek7n7Zroka2puej4y6TvJyCpLKeNTy3Mb6vu",
  "key13": "4K2Jwo3MVCWxXz48sFCxqvFVnLJqV9PFHenrUtBSdpSXzyWwTzDoUzyngdyFs9ksJVpQjpb3jobZGpRiGDs1yMtW",
  "key14": "2pXhtpf3r2JoakyRkRB2SdKzjTADf996gLVA6cQLKiEwSaZ9A2cts3vYDjuo3G89LivFECyMMfHHC2ZhbnjRmsm4",
  "key15": "5PbncPgcayr7KNF3SsX4A5wmjFsznrTTKdM8XjRrseAxVX1sgQBgAdzjxcFoDu1CdQ13YggYvmyeakJMLYFFGzdf",
  "key16": "3rBWWBwy62v8iRxkw539rCxD2CCdagCmWAGP1RnB5TEg44sp5sL6bZZktJY4gmEdsUimVYteXRHgTr5oB2EfYQ6E",
  "key17": "2Z95aEJ68sXGQThCgNJke1UThgaUpU3dpE7VqFsstm4WBDXPzyJNr3eHUEbqnTctD5Z9GfKNkLi6bTnTiWe2Yscw",
  "key18": "5fnM4nbkYD1dZLnE597zwdiDJ6i6vqLRZZGx1F2jHogDqfYWZdj8hrRQFpdoubHqDiy3QzR3zP1w79yRhFGywYLB",
  "key19": "R5XRpMcY6isvH1jV2SrVJpdQwJSEpniXSNaeiX817iNSNX25ruxnQuM2haAAMGjBY4YygN6GJSexW35qLbLaNga",
  "key20": "5TBqcttsNBhwwRBgbvKfhkX747G2JFXhzAmkiLcX8zq9k27otDxSRQK3ZtShvHPPKcvKCMMAdh7ba9S7s3LCa8fe",
  "key21": "vHMf7YMnhC1Q6s7gPDuV3m9f7ygF9DKEwDkpRuw6qb5gfnrnF6Y8oTvx6E4GkaygVkBMUqpQDG6HceEz9XJ5TDU",
  "key22": "2bfuCGFvyLZhHv1QK7qhRhvGaJkpBjqW5zXrgeYF2t2xYK5PcNxEzYodtzCVx3KeoFNbGTMoDvPr66fPQ7Y1FY8o",
  "key23": "4ZBRiWENdwcN9VCyvrmjZ7eN3JLwXWUZeLuWzUMCNeztWZdgUecbEfNEL7xRJiRdYwg1Fr5ah4NbzJL1fRedA9SJ",
  "key24": "5WQEjeKGQGhLBzbx8odKM1X5BqxLtXbKf1qafdxRnYBpxYgtnJnVU8wL8ycocTN3iZjwvtEb6fAHZSiuVVQ54HSt",
  "key25": "62fJ3DX1XmGwKCo2vaXnXgQG93QBtBur4XJV1GG9ULAVcuTCUYADTVPL7QPg2oMSFWuXX86v4UuzijKVwSEu51Yu",
  "key26": "9ZhMCXvW4nc1mDi5rkNUrt7WtDMttbeJBiNTnfex1ZYSNHjzRBeuN8TZC82nimw2vvenLW5qcTE11Z8Ly5vvNSF",
  "key27": "4FKVu5XWjUEzLpdfH9ZVswjaAktVdxmjuhjmAT3DNqhgASZthZpF8TvVEc8EM9auQaRMMBaU7waV1zYcExTDsXjU",
  "key28": "4skBw5wRssnDqESGCNjFaiR8BFZnZmVDzyjoY5gr3K9VBUuniHXS9quYfp3f2t9FDr2bY5sUjA46rWtzGJJY61b4",
  "key29": "4d8PDDy4RWvueCDtB5z5RGwCGo8u6pysfhzAsMUba3FHxhP6iB39LrLkn9Na7Ckpr3GbiVNc8CyeQuuXkBMCXF9D",
  "key30": "2tPqnw4MPX7EASmUYo4EwnpF2j18sV2sFzymanNEwh4rgX319ZvGpH5Edg5rxavYoFe38Mg7goRWyeNesnYiQUxF",
  "key31": "37BL1qFh3RYw1Dyr6qEfiPLwNVJFAkttZKEC3WuTksL98BMVD77vWD9L7gj4Rp3Wgr14AawnhGkYAEa3XP7t6bQW",
  "key32": "3Q2WodkZHQGDyU5MbRHA1Woiy5fJob7ZchKGjXkRNYkY2YTuyzuFLVVvAxbNqqd3oUhhq5MjphAbN3yWFbkxAPVz",
  "key33": "2aA2zJakWEXApHj5nSKbvxWcAkLAtwHWLXfBpiJeF9MLeTi2K9g8EU9UsKpwgZNEvMxrvzsfvc7QZxSFyZUFEULF",
  "key34": "LWNP6XCrXFXa8fXSLvNnM7zS4RcpoHmYhSWs48TY91mjRULWwQ7VFXdrQUxMnufotY7YszkmrdZSWzfTWuyEw2W"
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
