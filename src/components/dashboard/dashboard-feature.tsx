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
    "4aXQUQotjjTEUxzP8wGdfrkEUnynnybUrkvauzsZyNVpxM5chofjdHq9hmKpkgQfxZuACqmtsAFNU4pBWJAN6hu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmZ5Qs6UesmfJVdF9HxA7X4G4JZhGMWinWEM2jnXPobka61vL7yuTLr1VuZ8KpxjJgBYehB8qCD2HHzFPhjt6UY",
  "key1": "2WmLfej7PgHDVR8M2WfgGZd5wKgUXiUShBiSGf9ecTe8LQ63MkT7ygKEqjaVqD7evcXuNxpGn2SM3RLHy81mJfDU",
  "key2": "pPwYDMZtcgbRwExHwCmrf9HtKV93tYrwJHH6nLEQ8JdsjnTU6cTYRPpCbJ4GmD2tphs56R9Aw32JuuEkcYS6sEk",
  "key3": "4gBDULen8Xgna6BkpxrCttDeK1fDMT2qcxQF4fhmbK38ZURD78yUMeXRPgYzF3ndroh66JdQSyo7xZmTTu68AB3Q",
  "key4": "4md2DokQNPwd4AJXHxcpt2xcCDmRh7M99a7LWkM2EmYYbV1tb225ZfUJF33pPtdyDt38MhLXPH8ZaR7bC3mdtzRe",
  "key5": "2aNRg8L82sHBTQDLqkyKCsfryg5fg4j1La4w7kcxLSNc68qs8ejA1Cb5EYXCKmkkdskJ1fa12ogwgEFYRhqhn1d8",
  "key6": "394RTfmxBV1CXCc9etoqXJoSpkuofS6TWDuqvEq9bgZYPJJpC5Rb2f8Q37CfsLH5hsow4KHGmPBEDDjUbq4zfj7x",
  "key7": "45SAfRjuRaxHNhq4pizQyU5RSUzpF4WK3eRbVmXSifL4Fu8wAztS7PkhnWhtTbF7bPzodMg3KNcz3kaJGobaTeeU",
  "key8": "wokYTvUESZEEc9PPni5eyfUvDTqKMwkimP6srbv2PwvGLcXLqKGa7i6iE9JDfeAbaWoTgqzsAzoUaL7CckH2eqS",
  "key9": "jEnRwSuAhEnkYEfXKAxyLgazbmkx9GQsoumh1pMHEbsYgoaRpWWbfQSgLceF7MWFAwKANhFgBXppbkPQf3AA8RH",
  "key10": "H1NzxHb18bwCmn83hVRmabUzrgGPAd9uNw8tytKwf7NQWsFmfM9UFU7c2rKADWkqXyGooextpX4pWWuZdaftZF4",
  "key11": "4midDvNvo7r4iKEBPR19M31JrvswhLaGzpiD5puZp9pJziPZfMf7Buu16TzY5YFhSjKGof9YwiSPbymogSo9mvvt",
  "key12": "3Zq3g138EMhcovWBDBPkPtn6YzAzGKNtYDXkvQBWaAxxZ3ymtBKdpZkmmzsJvLNWVULq3rrSUkGXkcKbdvq4wpkU",
  "key13": "4Nb1XypX9C3eArrCoTdjFcieCavrUPekYrA7XNgH8AJVisCf1Nna6iDhPQCaFtaZfFLbxz8LM2iacLAfGt1UEyGx",
  "key14": "g812XQiAvi6XGn8kUEX3v3t7jpDPf17eJJ5jBd1qhXq4ixh3B1jbAiX6bb44CK36xYUPUgVTouA1rAhp39Gx544",
  "key15": "2xVGnADgTrauzPRZB6ZCWjGmw4b24WuGefgdZJGL5LiHakXYwbUPjx4C9oY9HyBXqFi1hBPDdeMpYZ1nPQarxHtm",
  "key16": "5Zd6aL1pSWgr8zHzLC2UQ5Tnc5uiC15Q7w6QZCH8Cfg16icjAhyNTrLTtokT6Q5jiPPzmaskoZMnddDZB8oxDwp2",
  "key17": "4cLN5gfwhbTscCT6xCfs3aqnX5BTw38MKZptA1BGR1tjprShkNR73vKDmr2Za9mvbY1S9MedwMdyJjVpYWK6DQu6",
  "key18": "vfxDAXJ3T9hRdkA3b5iGYMkqxN6xyDvg91u1LygjTFfCLHpUymsLRDnR63wpVPmJL2zkFEHcUYKyjdPxYBVgbvA",
  "key19": "4FaX4MPYtCZEaLmqRqWNrAa5Dv4woqVtUMSyY12hWrxhTJkPiyPervyo8JT4ykYcAr5W7PSTDryGcn4FpoSYrfV2",
  "key20": "3T7pXYYRWyTSSdnn5RDs3ZsMY5EArkcEp2T2WkfHABobLAVYcysUrVsh9D8fmg9XNarhKmowaeRD8ciPAsPSanYC",
  "key21": "4qmfghuoais6qvTAYZmF2dsJYMxjKec4RMHtf69a61UDM4NEJ5cErmN6Ca8HuJnVcxwfzUv2AGhqKrK6A8mMyYAL",
  "key22": "4RwLqvynPWjHEhRrmzs73J8bn9ZzZW7sNpJyTr3oV8Axkusf72VjhQLdgoa8HmRduGv3hmjkxCQGVCAV9oSioGs3",
  "key23": "ckFh92QtVxFMePU335tgrSeiw4LXQKMfPUZjcdAqLYdcU3S3676nadR1srfsW3p2apnEPiwQ2pFFzEyuu5zk7kp",
  "key24": "3aKty4vLVJcC3frg8LgeE66D8Szp3ziYNEPYvARjXUj23hwjAJaAfKWMJHop2D3t8BtCq3pK1dKkijdeCabXfzJa",
  "key25": "3R4m33HaChQywiY1CM6pZZW4VnmkwKau3Upgv9NPGLnCC7tWittpi3DNzKU8N3u7kAT2mqgfioN45tzPEd9TNvLD",
  "key26": "2vBEhAHjDQkBp4npMzmUeQ2wWw4TJ1RaeEj25X4Nbjvg2LwoCLq9B1GGseWnfytyYPcq1jcHNuu9qXwbsZzETdiu",
  "key27": "2eikct1FefbHM6UKHeXYEt2mPCba4K6iRSLhxr44tKpCCh8Nt2rAA43HDgbYDjriBAWfceQ94D4SVT21jYr3i6hV"
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
