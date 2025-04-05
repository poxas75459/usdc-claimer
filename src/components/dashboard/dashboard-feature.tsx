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
    "42LqHEQsAZ4TSUUUnwqM22Gd5fsrdKJ7cyVkWFn8i6jYnpwc3Z9uij5xhoQ1CcFerdSahVoxcXFxJHJr7n9gdKYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BsTW3vLVKgpkzNBh462A7ycjhxghV7rGnXjTVidEzVhHzgi3TD2tEEGZXDozKjAmfeWfcBma7mzL9EXbwxsc3VM",
  "key1": "4QzAZJaGKaUXBxxJX2e1u1GMbP8XkHMt4SnUFCbba7t1kgjruB35M5vcFEoweaqG4AFPtW1GKeg3iVYkxeX3nwnL",
  "key2": "3tz92f7J2RahkSz6KE3WbnfZ5b76C2DejH97LHS14idzZvRFvpmVvj3EbADvKmbEqgH7ysq4zGicopxSCg51Y2vd",
  "key3": "4BpqbAhnXEC8uCKryTGTANAJ1dhQ36mjsVAznc9gNMgJ36HdPMdXgEfGrx9iCSM9SDcBES2pQS6dv5FaoTVuMiY4",
  "key4": "FGaNtrpytyFA27BiHXpvDtHn1yhFa1hWXxKqLtyra39JqFqv74w76JZs1mo9d4G1wTXuYiNMMg3korT98d7XepU",
  "key5": "4Fvd6KuuxfTXHmBpHq77o5pvNfbhbDzhe72uE5NXzAwAurFD92DjqWhzA9ctcV56NLEdzn4mN7oa7CRg3zsdi4Ms",
  "key6": "4MzEvdwVqTtDFVzf77yjmC1VUGP88G9Ut5sqwH8G4j3aPnLv3FS3kni1gcUx1FMCVj581v8QhwEU3AUoXHHZgV9r",
  "key7": "26CgNpR6dkwNiUyXZNXn9uDANH4vKa4v8f2FDMZ6YPWKjopGaqeMnKq2QbEMJew2579QfM9opGjKczRj1ezXhVw5",
  "key8": "5Hqk6ZTAdEmv5MoR9iCeSFUHrax2sB5sPuhQSc2GDc4DukJCSBwkXZy8fYBnvCYhzrWKM7Tedp6Pst68b4ep3JEo",
  "key9": "5vAkQEfx88sMhXRmdYufmCq2BC2vE9G63gfSc6DMZSKxrooNi9zF9w61EQs4CbfzqYHYkorYsCAQmXkEfsPMCsV1",
  "key10": "5w3hMG7WW6nPQJvr2trkeLchAcxQwvZtL9TyvcpzUgSWwPBKVom3hY7v6LN21E28ahFLm2T3ccwXpPnV6DnvDnUy",
  "key11": "2NbyRN2X91uHoybn9c3DA6rXPtVE7RQ9DoaqeL5wRqRA7UX2S2EG8g1eScbCTGJboMT12usrtyBiGseXyZYJreR2",
  "key12": "2avft6UCtibjrzqvmtCRyGx1MrJkYpYdE5bRMFaY5EbwmEd1tcALvWrQPidaGjLYQqsbdJWWzdzLz56PhyZzYwWu",
  "key13": "3zN4eSuGXCtEpEGqCBxUvJ3VduvXoKCDVXrbdHE4KMammKw9zcZTVnJmV1dsHSw7en6ncqK23BZE4LE1CW59Y2Ub",
  "key14": "RPPESsQLYA2bnEpFfmjGuPX6eNmwSJki3xM8gWNKczHmhLecJP9LbZFpuyDTb7S2VoXHJfikGVWnDrHLjtvBC1m",
  "key15": "2Rzy8CivGcUwW44iYPTaFZGVXeSaNYswXXVivoGwV2UZMZos4uj26aYVwTdoXEguXW83zpAaig89QxLamuzq5BzB",
  "key16": "33pSVzNeEx3voPBnNjZX8gLFjk3xA4JzP8NoLZmpZxsrLJ6ya7mjPc7HCjGEYcgBbuQAmT8cvV8rx9yv1mzTToLM",
  "key17": "1PBB1E6r2M4NMu1evw7dkXv6Q26tAdWscyvFcQBgwFLuyUnveCNNEwpx2z6XtrYZgLPjLfyF3DcmEcmGWWhiYtW",
  "key18": "3SVCtVbSWaZiKSA8xRHRHg4A3MiMWoZTF8qSJB49CueJB6SfXjaNtm61x5ByaeG5MknKNFtxyCTbyoGs7y3HaPYe",
  "key19": "371EnMWEzd9qHuRsUPWuhMSrwSFJrJztKTLThUhJ5Ap4of9Epvh6zuW3yEjAc8o3avtSQagk9TL8z6u8QftvLPnP",
  "key20": "451V1Ad9LU4uZunkzFdt3mBxsKx82xw3bqzic238f5wcZg5ur9rkwAHPibCDwxSwpnrMRi9hz5Sh9vuQNepXm8uE",
  "key21": "35cLA1mu75J3ouLTgAmmmx1hkH4g9sopiXfW7BhXqruksKKPNBmZXr9bnDpeY3HqxhcYx9Cq4p5JZEMfRT3TYx1h",
  "key22": "45fdw6vZernUARGW3wgJvByWuyEGPmaWHSMxTE9kKFBCLAM6tTGZai4LLP4fr1sovt4bzCoPFFsKGoaVGKwFJNxx",
  "key23": "iLVQ5ui5Uoe6Q5ajtr1mwqK9by5PchwwkPTa1gseiszwo2NUbFdf4uDLy8u6s9wagGB8QSJTDcTuw4mpq9r665b",
  "key24": "v72df9QY9Pzp4X7ekQA8zwhQZWQEhnpkD6dFkenyB6hDZZsFniU3CoGQnjErybtQ1mc35Ni2S8c9xZojMmzo8mn",
  "key25": "4bD6DxzmrTxif5garsdtuWaXKuP5voXc6idYLQvoNXMpQKUqomoFLwPQoRnGLZ3EuB6VLfjcgyE6RQGEsRR86HAL",
  "key26": "2mawuUehpdtk5XB1RZPjEkoUjP3jJoYbcdmNfuVSmogkXrpRt98gWXxcSAbVS5WuYp71pBHj41kyn62tKvSRcjV9",
  "key27": "3pqjo3P6MnoJAiKohZyRv3xLZcEpV6fqhsR4KqUf47A1bqcuwpgtXMYzc66mSmmqzxZgdV9LQUb3FYUdrorvYLLm",
  "key28": "2FajLMTTWN18PrgQzQmyh5ivJzhppfouadyuC6YnUH92B1T7EZU7AfH9LcZvgAZbkTdaCcn55e6o58WATQWz2MJM",
  "key29": "5a2ckSLFn94ZEaj7bFwoE8BNjhFPa9Nn3oLaw69nmEQNVJQ1v5wweR9Z32thNcqGKKb8oSvrkENYuStTHdUw7RMj",
  "key30": "2E5haEpU3A6dV4bs5XTotbjS23YW3T9DhoP5LWkgrsP61qkcxnWK96YQAYdD8dWvSmKQ6PfWFf3dR8sLJHsgH3oH",
  "key31": "AW136tSkN6RsPHDe7P6n6mBHC6tj1NbD9H5xYgJEZq7fmnSN6ezdUqr9TYjX6cwwk9Q5qDyzrNSzgaxBTQQBCZg",
  "key32": "5tEx7FZYXWNWhDE7gvQ3SNhzjrfAboHC3FkRG9pbdTagRdFZEjeBuFMHciwm7KCr5jQaAK5BJ2tZAV1XtAP52so8",
  "key33": "4s8wvTjHT624LYmVtxGxiWzbyqSsXFqiLhHw1fGo16CbjoJuhp4Pkt6mCLFjRjxSDvGKpM8MKb7BE4MHLe9Dpa7S",
  "key34": "2YjK9BsTRNUcH4rqxk37uyCCtZVdr46oP2gfk4yR3MNGQ3rK9gNDAPaVdCaPS7T2AtY4Fuqh1ZScCbsHBQsZzmcA",
  "key35": "2yfeWTxGTNU1QwC5jSyPesiv4xMxG9jJeQDF4zQnr1ixDSSLDtqvsUEW7jzZwTRjC92BQz6KFV3v97jiRwkynDkT",
  "key36": "31FQkrdpFJamnRz1LSs68QySDZMq4JWcgrrWi9JQsboatrmkCHczzCTVodpKeiZijkq7c5gM5BbJnGZsKsQiJs1y",
  "key37": "5bFaBUhxjkES5etB3euuAcwUtLvABwof2PAL6Tp2PH7SGM1bckAmCCHtVkmGKhrxsjJu47c8fLZMFpggwsLkEg9Z",
  "key38": "2TZjJyjpfHRAdLW43eY32w6Ht2i4RgFm2DmfCjGZKnTJkMPwqm4fFRQoSCyw2k3sqGyTeMZxYJPA2GUUwi8ARdCM",
  "key39": "51wHJkhWCLbhL7DecAi2LHdyvR1W41MEuShDKHEg5cyHtHNXmcspPFoMRz6XuQAeQUtnnVjSLNYu2b2x1JLiUXok",
  "key40": "2uDXkL1dHZRyVCcsyNLxWhue8kaHqgHpxEGTsQ1W6QhnmvfGRWe3oz9TuMyTTxhMSadweBZu3RhpVE5huaDRSqwW"
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
