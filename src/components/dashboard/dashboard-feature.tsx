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
    "4ppEJQtdsLrXDATainht9omtd8pkXUEEbDHgsauKzp4S9FQgpAh7JW1obo6QYwknYQ1KBjREyjNc5SGKmKe7tz7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4ChUH49XNst8htVBht2E4NVhdKLcU2TkgXLpNonE5MKboqPF5gerDtHAttdQSQHFvdKM9UfMCmKEkiB4VgHP6",
  "key1": "4MB6C2dcVQdyng31DzHNHY8yBdzyjuBLaP91MFTY4p7qeT2imFXhX568k8DPVin7U7s5o4xt9DSMTyJU8n8ZbC3P",
  "key2": "3dPD3cv61Vnxk7s2PcQM6JipqULUmJiSrnS6MrvfTimQkjRj67idtaZfEXCgEG73C8ZpRRxKdkLFZE2vN1GvYhJx",
  "key3": "4pZPJrPYSaH2aMJeTSc89RKgTrKHTjFMtmG9UrAPkB25P9ATgZDg7Y5peVphoLJwyFxUEax6QfDC1ckzW6DaWF6",
  "key4": "uvuFKfoo6SzBFe7oui77JtbGbr11dit1fgKS4dbSNWwii3cGR8wmGy1hEa91qmrZqNhVL85TCKKHBwTCCE7VJEx",
  "key5": "hZKHQN9zA7z19D7K5y82aokUuMijRKha4jt8CqPHTVmySz9BCeaJQ5y9hwMiJjMULQ3NGgUWJZCBB9vf2c2jwge",
  "key6": "2q7xWBX4VT7X4MjvFRhrnuxQATdJEk6DoXuRM79rHeoqAKqb61kDnjv2mzYX6CJ5vM94NSTiAMCWHuHDwYEJk2ve",
  "key7": "3ygMvAocmev73vNTJcBEFQUwdZnmmcmZhi76cDKFLtS2PcG16P4Vz7yfiC7gzbnfcbFVS3ZjN7HhiEbPX1Mue9xj",
  "key8": "JeBiacKHgGPFBbyda4tRzLjEPSp6qVoD4YFs8S7Doi8H8qcjbwtPHjo5bu8qCPb5oQvdrv24DEeXx3eAudAxXEM",
  "key9": "J3UuaE5Rc2yxKf4m5mFNSVp37UtLNjUG97xovcBuY5aWVNSYrRJCMf3vrxYrm1t9imSCeFChnawT7FjNbpWWg3e",
  "key10": "4tFY8Fd2EibxbdybNeApWD69sgQQdb9SHFXpun9PxYhvz9NQx22xmJw5tnkcmmt8iu2mRShsQ9DR87s4ikQuuaYo",
  "key11": "LmZzYKMz8ywaUfG3wnkrsDrQhWmsmbyr5KTkopp1C6P4ukuRvtuStoxtAT9uA53YLAcxt2e8daZ11i2DLrpXrhJ",
  "key12": "517PLtRYKe7FbZpK49csR6Uw27qTwFQo4gfafvSxTRkqcEWYB2d8Uu7SrDLhiYGEp9AQLh9iLAzrbQ9DrhTCET8",
  "key13": "3vEMHTorseimHi5Muay3tq8gPbREVzB2uJtrmVJzJsvLFaVg82bHdLHtiYywj7ANmqstsJ9YtZ1JaGXqU8hS4qD1",
  "key14": "5ji3anfcHo8LHK9iQTfV34N2XQuQphje7JHEqywoJHhcGNUPEytRkahGQBBzeNgqY4hHriBs7hJpWyuQbZeMgt9N",
  "key15": "3J6b775g2nmqW5ErWV1ATEdJ1TC9aGS6ptRgQJF94REcuuu1sJ97qjY3EtcfLpf19HQA3kaEWZtGgsSPyCSiuPKX",
  "key16": "4JCopdyUi2gzywCA5Nunmejx9Xy5rFrBPC1dJCuoa3J5ATerS4gbASt3dW86gHh3Tgy9doscW57XYe4bcZWxN8GC",
  "key17": "uhnC6P69rfGX1zvpxMbgpBg4Tqkfq6JQTz8UViYw3JPZKL93X7DvjhtdYGKbA9JK13Twk3bsWryyRp96b3XJ67t",
  "key18": "5DWWCqSdDjoqSyZH1oCpLJY3JrCLy8hL5xNFE8LZZMKCHhM9DPiuSBuzzJdeew7bvoyqhUekksk2uZFTYGk2wPVW",
  "key19": "2ez1WouhHEUZdkWCkhDKA1GrywwrQHfTxQ6ZYFUgCdvQSpwRwtZB853xnLPCjMMiBAszxzrQAxSScFjBmyTgFts2",
  "key20": "2shQwLBjSAYGkkdCVHBt5zzfcUe6rGe2SsYAkmqdk6bsmNsm1DQRgrcuwQqFwdRaFgnNWMfMXw6GPE86M4Fr5zQb",
  "key21": "63M5cYxajcVFJa4Vbu9qCQAnUBaeEKhFTTK3KqPpwG29uZ2mCf3opC9XbY7Gm8m7UbV8xiiwq7uy1SDKbxFRY3Hw",
  "key22": "3xbhPwH9LaJgzyQr4CK6qgfpXsfxnew64AEx8fMgxuniPFdgcNhRNRwCM5dM6AJsfZfM27np9nHRhhRFotuHzu6n",
  "key23": "6uTVFwvRMkJP9ip5n66T746YPWyizXRVrUdpnNVh6dF1NpvpFpaa52tSCSofB1ud2gBf3vtkbPEFYtvLPbj9bXe",
  "key24": "iJMoUyFnGCffuhfM2qgenLkem6uxooKf17ajKT8EhsyLvr8SRxpKZBDz8UABFMiGFkNvSQir8WFjzUkdHYKhpy1",
  "key25": "4gdv4kG6sygPZAVGvwhSiREcATMivKmECzTZVq6hN2Tw4dM4cKwSfszBEsoZ7Ds3vA4xh81Cbz8wuzY9aDfemNin",
  "key26": "pQH4uQDVKAPYr5XFG2VNnEbqmPcfHchTKq1w8Ura7thpovfzRH9g4G7MuDa3JeF7UM5e3jdjPErNug6oY6SCQba",
  "key27": "5GLMewdGygQWcMhAhTwJmM1LsfRJJPzthMv77n9tMY5o4ixqNa3YLKr1iyheYEbd91uLEsNhEaoLRoP9QC4Q3HGB",
  "key28": "5Wee2bKHpPfvgMFm8Vz6CfsqM1sV8YjW5uHi1pauyPSFLNVjZB838Lt8imT8yGoRXTRPFcYBGTHxDUDGQmJQPKAd",
  "key29": "5bCFYcvSkZm9sAenNoyr7KQWGDynPjgUx8FsPRzWWcB7BKubZ239wJbkYptgv83qQmajAxdz41jSJZQySANJ23Jk",
  "key30": "5MjbDjiKXWoFjPz3yzwx4niJTr2Tnx9CfPuDpJLUH6YmXJJjsZP7AQKaVfKycfwv65DS6kWFA6RmxjyRihdeF7yM",
  "key31": "4UNXWTBDufVnr7QSSkGTic4Z1fDufo6T2sbsLs6QXHb4pEFopTKhy3575EaEDGWvS7aZ4dihABF3fw9EuMb1f5Ac",
  "key32": "54VwppiCAUdH2iRdHx67VJapfDRikm8a3ABfgWWiQCCmMeY5mJqxUtPFMzVdFLAbRiZrjSFNeWbioebFjrVyjQZq",
  "key33": "3NqTd16jZnMrLZ7C81yEgTmZCgba7FhApQVotc8kKB9E9VEYBnTX2SP9yMoUW5kdcik4sjBaApWau9tbbgsbBkpz",
  "key34": "3nXi1Aqf4e5kt1zqcr8kBLRJojHMchg4crhsK4VfjovqXudF4b1YzjwDPjFh1ab74vJNrKFAqitaFjCspj95GY6A",
  "key35": "5JH3YzchPH9KnZoqeg1EqteaPPUo4UKNpvS2dWi8XQybng1MgEYSkBcoh595wmeiwtv3K62dKv72cdhtkhWyt9RR",
  "key36": "53ZnFvLKwHxTREbQegYMu3VvfAiT3Z3aerfG3jRraXha2sUJm8CgHWR7s1QoYoBN1bAg54kwS74sWPwHQdE2jGdS",
  "key37": "3XoW3NF5bPLur1gP13NG9A171sUJu9UsxwEYjzdfzR6qWogak2XRQ7WV7cgamH86vf2yqJvNsaohDwccsGNxkew4",
  "key38": "2g5t6HptEqUT3kS4thPSvRZ5zfnLd4matAGXahwkcQpThmsWUD86wLAHA9PBZhLPAG22ad2YHwmhAiRfLnE5rWQE",
  "key39": "587jKGgrSnut4GRUXhtzrtaFZRfxq7XX8UytPFwrscN11GkCGWLs6ZgbC9D19ZTgakyNx9kccM8nsSs9GUSumgGY",
  "key40": "5XCcaCLWhn5tehtSrNuAcaQJ76rg1kpQdgK46tVo1uoZcqZY7qKCo3g1ZjUDbuVwknh4btACi1CDCRQn12NuJHav",
  "key41": "3w1iQKq7rk2ZidKTZ5KhPPHeeFPvCv9c4KyRWP2VqDgjQgKEdRtgmuRaiRYbkVr6e5BDJVcXdKwuYwnfiAjfkYSG",
  "key42": "597USPF2GEvSGuEDqa7JUTVS7qMb5wEq7eMJLERBVCum3hcHCXiZpEd9LfhyuzQjzA4NritUDA7zoNsWmxZDsYNw"
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
