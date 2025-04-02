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
    "3V6U3CbDBnVLWi7zn4QBHRsULJkEC42PnocmZCcj2i4EHW6aTtfNae31vZ9uaWh39KN6ZsYMQNXJyzY8ASSTx451"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXniQsr2X6VbJ2cgC6pARWUST1VFMJyTWoN9fthyCdSrwPxL9H9GX7TYSoBkRQDPFje2D8zoEGXReozjeezc4aB",
  "key1": "1S6Mfu42WAEL5581naoQpCwwmVviUwbvgVY1QaESC17CcLFPKFMdTH28zkkKZ4XgP3EtqZw62cEUcPVh3T47U3E",
  "key2": "2w8U4JfLxet2mFmFoi9t2Ftsm4Rwi4z3XYMGjRYTRG58e4xMTC6XoR8QcLnoWxeoLg6SBkU4cSEBkCPNAG7aHoKc",
  "key3": "4D6r4fgvpRW9dyZR7iGeZcgFWU8iTbYqbypx76njH93rVYxizUoSCUKYZ6qF856DDB18iXEr45SRpN5L7gbvdSRz",
  "key4": "4ZRG4tWUNLov4QwLqxYYPH9f4uQT1Q5MX5gNiTNYaqTuk5kwBWXp7b7hW3oHVfFh4Jj6a2zkEhc67HPM2bX6scSf",
  "key5": "SFAwcVQXGMwgpmmN7zX4AaBwabono47PTgX3eTUYyjRjzdY4qmvbr3YZVodH6bgpit6mEQNp6CMEB774h12KFin",
  "key6": "5eQXWW5CZYXyN3mkYLWXCe7aHDzgZeXGTM464WcdSMCB9hzwMmNbVNKdPGTNuJnYofys6E77emH1qRj1xSCmP9Pf",
  "key7": "3LUzksLYh26qXRKEGyuadtbqLRurzvJyUCWfhZw66JwfB9MuQNJjTmpWxWQmS36p6i9ZKdM3oEKaMWsD4Di8otJB",
  "key8": "3D6Y6GgG5kBheDY4tE1UC9hVRnfWsGmv9cP6dPE4r42P1txikpLpxPtHCVT2jPuRT6JbFR2o1fB5v9cJyMnBshdq",
  "key9": "49CSSKFM3eLasVr4ydCkDTB22SjsUxvLvMvf6fExtxNfgTbLDwdAy7QawcaCU8bV4qEbEtdAmUVep6aB2czCeyR4",
  "key10": "2onWDw5xua8qzgjewSy8Hskgs8e5k2Bx1Qs44Qu2CtTjPuR73vv3Bsr6iRRutua2pGTBaMsWSi3kG9k7eLTwuXbx",
  "key11": "2KfnGPehXE5DtZiU9TsADzq9HiY3A1qCXz4LbZ7zQXYh7cLFBgQFPtKkqp6bB25ta9edsj2pSpN7PgEdqKeXrDJK",
  "key12": "66UjcruyAV3JGe358Quk1oZuXysSPCLUNP96NCYSdbvUcJoPFD1k1FqHonTah79vosBKZyJddeBS8jS7idT8sgFS",
  "key13": "2sTTMyGSoMT2NtAK3VZS3gpTMWQ2xUb1mAV7sShEBmotomAiXFcc6646NznXAK7mMeu4vo94sgDFDAHRdeeSbT8j",
  "key14": "29axm1hAFFjXLyb1z6dC6Q3ktmLuDJaMqUxvUVLUfv5nMFXD66dLh3VbdQ6jMP9XbvwBMwBSAr6bRpgf8fpDJLcm",
  "key15": "2Nq52JiAap2bCEz5aRkKd1QuJ3ZktatnugWLVxRotPCJtm4yTaYFobwfdZNyX9EJyva51JmhDmYSwJEeH1HMtJmc",
  "key16": "gySeqay5D1dLtLBx6mu4ZAaVhkgM7g6e4q6sL8CzzGR7t1RMh8L54fK5LzRQyRmK7bqrWHWSFADbrbooVgFeQG6",
  "key17": "4zp4thmDFmNJEiAUHNJBmkwh6p16CBS63Cazj7Q6hZNEZ6jtxYRpL7ya5YAeFfzmrzKwTsFweRjeBnzFiZ71kDYK",
  "key18": "4njU1bk8pkfTdAKboGnSQ1y9bZcSg3NZmuMXnJPeZJdku8HAyukVrHtpo9QRHnYP2VCvrRD9sLmEcWtXkvHunzXk",
  "key19": "55BwNTTVU4NURs22gzbwr8o1sC9QkruMAwKCUj8WirF82JeE7Vg6ZX2mVj2h9n3jMorvymc2NXTT2ijrxTdXcgnM",
  "key20": "3b8f2HtHxDwC4SF5Wv6zGa7R8x5VUKpKkKcraAzrKNVBNpqFhrdKkvzqrkRwMa6ZcV6Kyg58V1MhDqHiHDPFRS4t",
  "key21": "n8kAH9pNr3tmLkvgfk17J9h7fZRBF2YECti2FPgBkWFaxKnUWHjiVgd1cLNJQgyvypZTVHQXw4KJHn2jrsjUhSU",
  "key22": "4FPgmazc3vmdfWg5vEdycAujxff3PhYPBAxMSKhw4eriWRHNPsDRZY2kZaiXDnzNXG47xsRUCfeZ7nrpWrtf8kuP",
  "key23": "4qGLKSwtnHNz7eh823iiQyYQwRXj9unTNikgz8nKeqKrPEokowkt4U9EfYRVEsHsief4nBqjw4iHFSnrapgHstbq",
  "key24": "5DbiZZB78uEG2Pf6agiNhfQTzbfQNP1BtoStfKBSArtpe9eMF4pb1jGfT1fGr1FEn4tNbSiPcyaYysoxiTiiPWCA",
  "key25": "3ES4GxSndXgZ7nxM7hqAibCF3itYGy5j7PASKW4AoZ9GjxhPJmFh3d3VepzZTTdHg6e9xCXqE1NgZSjfaGEPH8sJ",
  "key26": "LkoXQLu5Net92V4KvpTwrchcafdG9e8d6HJ6dt5Bc5ycDhbGBCsGq1hoK5YdbQgXZ3wVDQDU8sZgNkG29ZSQpLz",
  "key27": "jKSLzUjJ3d1stxno1Vvhg5Aoq2bLzHGmCAtTekMxzz9bhnJEZVBBhu3VNKRb4ybwsLsUxzrGbQyT3qSE8bFR7QV",
  "key28": "5AQQvnHdtyNmVPpxWNQsKbUorgZ8dfJ8xCzysra6y3BGAK2NztBnKLEs7HJVnX5BiV7NNsiXUCeAGQiDyzC5c4Zu",
  "key29": "xWbfitVEJDED7ZB3FQUAbUHyastqThvhaFa4JRN67Bqm8B1LzWwFzcikjTprbHSDqj9Sdyywt8r1VvUkpWoYq2v",
  "key30": "5w5VBQYL8ANqrERi8cPhftVHpgu8gTGmdWedWFJWpXFnYC5RhRUwXS1U47h2gMbqTJ9jPuqiWPxWJRHAWizKixBY",
  "key31": "3Tbi1ZxHavrKJ3PK7ucnjCCTNSHqoBCY611NrXA6c352K2NDqhPAp1ePK4rXAf1NZPczjEsJT9bY2HwnWs8JUM1T",
  "key32": "3zqr8s8eDg37VXBuuZnmPzXbWeBndALtqpSqcQ7UecUQJKwChVRDZXsBpmbtFu6Y4NrWRmyZ9muqBSn7jQFNdD4C",
  "key33": "GDbXuoppBswbuNKDVLiN97qnjxTGFMbWkmbBQBBb9N6wKqGDAUufRUd5STFq5CLspKKMb6tLBgi8seFkDErBBT3",
  "key34": "3WW8EH77dF5ufiSN2o1yHWm1UX97ByXCtED6kJ917JFmSK6sAJaV1E3Ea6v5u4uFnoK3tSnHSn2nTYfvKPQmhTfj",
  "key35": "4v9j27VeQLAjweFQTYHa17w1k2eqj3bbyDMnYh4jkmgXZ35FES3p9mwcyxNZkcYYWJGBGMyAGRfUtNEJ2iU7vKPF",
  "key36": "3XtY19szSQNVZWDo3iiuPG1iXPa1Pdz719k3HDdcRMdoGvM1BxKZVqc7HUY5TsdnoPXoCbj3APHoiPdDLij7fMj1",
  "key37": "hx1Tbqxbi5hmGREBthQg2G6N6uMvvimgtnDbewDqypy5o3x7jUAEoxCn5cPUxe8DChcN6EeuDuEKLBoqq2AS5nn",
  "key38": "5tLWmUU3iXh8Yj3xB9MQ9QU7iCViNWFX6NYnwvAM9VWp7Vti9ArZ8wBoG6W87iYEz46hFh1gZnECV9apasyPBe2u",
  "key39": "2VrHUcNaQTg7xdeZG65iZMfsNtQ4w83FPV7hXB4dFZnb3mCeJSpDe3DWr68gPQ3p76mN8fnewhaoh9nigQQw5p55",
  "key40": "3YhaiarM9cDU5ULxymxf5JtyaRQu2ztf9A2K3sioEPgnTvPMmLmUpbdTFq5yBoRi2ccSDtEu3dYEp4pjG8dpAkFo",
  "key41": "4dWGCP3DYUVjoBPuoutw6mqsKWjiGr768ZPfwWutHbuFiSaqn7Ff2kb6BPc9GUtfQWwWpuVWnN5SiWJxYq7XTMx4",
  "key42": "2DYcya96QjBregL8zyCeBdrQY9i5Xu49hfVfywpCuu1GS4WpgX2Ehzi3ETfxKND3TGvEMhQFDepSXVtf4eFaZMGK",
  "key43": "2AspXrcMiYrw3HQDGyv2KaRAiHM3Nw3icmyoYxSQ79aDt3GJjRwLPRrsKSBfUXh7NcEvEpCK1RTafsgxtnDqiG9q",
  "key44": "2Z1BSHCF6ivpvy6B1ZJV8ThS8HtU1c4Wgmfb9kRXnJoNjZumjyJUskh3b88P1D4R57jJaNH6kRxyg1kj5FmYTWKL"
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
