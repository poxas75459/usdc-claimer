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
    "Gziu1aWpZ8fSQokpoud7YS4Us4idY3r4Epk7LSnYGdkUUf8J8h83qFA8rxwkUb7LnEKnTvBfx39ufB5xeYBzyVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6566BC33MjdLurBuJjpYhUP4LkCtWfZhe76Qoim3kQwk1SVZ1S8GH4PLM8Kubk2x7Ri242FyqQ6K3Amu6S3G2J",
  "key1": "EQkEistEERqcfQsiSqZW4RkVHkCB94mQFngbTgbfx3QNkpvQ3uj53dp9849TK3JWtvsi9AMzak7FFhqkDLfcYqG",
  "key2": "3x32M8UfJn5rrysvZB7rkfyRQAw6NpNB2vX124YzxPpayc67JaGUbGQAHCgA35T7jLSaQbdvLVxtNHyLUEYsUjn3",
  "key3": "57K8TkEiAzPrLvNUQidzbST1EGBwHS35ZtR2jbPH4QTU7XQj54orUjpXq8FRkD861Uk6uaWJT42YJrXwgWZa2rH9",
  "key4": "3gm9TH84qKnpWBspMamh9T1o11WDF9yiE6dFTp86pWormtBDarQKJTBCr3ZAYTNATCbJ16mae7ponGRiBcvAFpLa",
  "key5": "cZhqkH9edpctHLkbx8aanvou5BG9Fs5MLvEHEUCLGbrLfTTeDtsADCqHig4TPob8PSZKa22DLUUpeymFheyZoAP",
  "key6": "3cVV4SEafCs6fbYzh1BzkcYPeUqiwaCVWrQ1XKK2ZRHhb9SsrdVUmQSeL29XeFND62zdCzpk5JfpyY1wuSYKFQ2c",
  "key7": "3udJS5gPB3kif4CaQ2Akd2w7jm1U6or192eEatJ7MPWWY8NDqtY7NAm3xfmqPJChKBbgXiCeaERN8RH1HX1tYMGu",
  "key8": "45aJ4taxYc1R65mTXWYamA8PBy2wZk2gfrPy6xDFAGrcjniVx7E73pvNe1NshsiVZ1G3Zau3cFpwjAvLDVXQhnbv",
  "key9": "5xbfRGZ65zU6do3orW2SFcg9W2DEx96oHzzJ8xLzKdYz8gMkjCYjFGmEG2iQAbh32Y3apbpWiMJ2AhGj9NHq1FG9",
  "key10": "uYTYxiVsohqSYjEybBe1TdoBAHRfGM3N3NTGp4DCHRME18Lvf14YtPTT5asNjCDghv1cCJBv5q94PVgbSb1uv2v",
  "key11": "4qdFzCGVpiEi4gcv51DyXwd8eJNMvSAPGntg7FMqHkxL1NBxFuQ8Bh8eT6DEwhU2a3Uk5wbVuz3ShcwSLxcQcxEq",
  "key12": "26tNyjMw74ckzZ2suXZGSqdxaZBcW1Y7fEEeNza8eaJgBdnxJ5G1Fv2DToYby3818ep5Tkq2gRkqxh6iHedQi25m",
  "key13": "vPC5Tew9i3FjU8bejDNh7MNRi3MFAwd8bebMTfcJmfMjXWNK3PHAFPhxPfAvwUWSXDEbh97QBLbFPXfMAU5tGj8",
  "key14": "4eZZQenAcCyLVob1yHPeCNnjanPxnJEYAsAVK3Gc16XCncm6JihMeTH2ZugeThc6jdLk8EzAjFbD2Y1NGGfCbmLs",
  "key15": "mwGpvfTKN21dD3s1FaPyzc8UtRUsdJtEkhoMLRecWimYrADziVxGqYFtk3axmJ3ZHktHjxazUcWZCRnRQBwXQFW",
  "key16": "ExxGLsTiUSWAxcqcGunuyGatDo5CtnC3KA1SfX1gYfX2ycktcGjvQ759YPWevToCWyGKtsWcPfioFGFMgKLKgEP",
  "key17": "2T89HpsT1ZSf7hozcgUrve1Nh8Fe3cn4yqoWZ3K3LNWYEL481XrmcSmQSSQAc7D4Bgc2rim94irfhyd3iJyxqnUP",
  "key18": "59M5jmqND41rEUrWnzf71tLNQyG3gjbqpcNFSACG7JoF8Mn52VTxpKPRuu48XC2x978tpBJh42mrduLEyStwPMVo",
  "key19": "Vse57EK4FP35vpng4vviTvYrk1oLav6zLWtzh3DnokoKBUdkLY44Zrzz6kgeCTQJYAVyBvZwtPsrCrFJiWTpmG4",
  "key20": "5kPYkhpwrHdNbMT2S79s76qqkEm2pKohmpPv1JG4EuHqptBqqaqtZEzZafV4uKktadizKdibemNtj1aqu2TsEwL2",
  "key21": "kzaTSPwohCojZTdQuvks4f2tstShKqQ6DuN67b3bL5qqn2GSj7u1nYhqcKkkBseCnrwkoPhZydUYJaktWe1w6mb",
  "key22": "5huWxEUEVfTUYYzaWC9B3v4TNVCCH7qcWSekh79CnRZ9LhouVZDb52pHzN7d3qhWEcZ3PaHpuSA2BQ2e9J9n1n55",
  "key23": "WDx5Kvs8NkCJ5iAKFRnmPzKeSZck1r3seX77C88ufGtBiAwDdCoxTZDkSn4QdyUrGuZamopFGaNdN9PiKBdA4nA",
  "key24": "5pxaqXJ4fi2TtQuDY2hFqWcT8kRDFKVZUCdgBa4VpWJt3ffDq2mTWSy2ZhE78AhH2Awi1uLvAbp6mAhdGrEt5Lfz",
  "key25": "FEUksp59Y9UREoLH95pnKmcLrChTsz2NQ9PG2ortQpBi2heBTpK9DGL7Dtc4cznrjNp7s3qQqHTq3cHUQJQ3hie",
  "key26": "37vvrJwX5sP2aku6mNrLiMx61L3Cw6pU2nRKzwM2MPtYsCGUoFq6HoiVXqTq7wPkcWqhaTU4yEv36Na4eKjpfWhP",
  "key27": "3AkFvjFb9AhUYPUkTLztoLmAWujV1Az79wQF4S9CnfGjsR6epgE1nCVFCUekezjKXwgiN7V4eFST8RiiJAYp97Qv",
  "key28": "46RjbcqXTwRC6Vv8XexpjKmqWTBYegP3CVyv49E57VYi23KZRmYj3AzVgerzKZikmQREhzdXecu6jighorVsBKpT",
  "key29": "4F5kb3SoDnHjdbBV2yd2jnPSP2vX6pnBKgp3dyaebZtSQpVoaAN44rG7ytTn93wMFkcusH5rCWzx5bw67YKGz3a3",
  "key30": "3cGooAvrAmqQDbN8URxM8sV7XWjQMvD84jSykV1izGgj6tCz47i4BrfrnHeFS9H1g9WJKYc2UyvZSzexZz9MnWd8",
  "key31": "614jcGm7jtDG1RyH3ut4YvQSKev83EiSNRMNvvVRaW44piJSWEeHMYdQYgnR1UE5Y1kZn9c9Ex6tLW5Gx8ZvgdZh",
  "key32": "558xX3s5G2cNKucnvod5n7SpE3r4djoyfpiirVehsBKPHKELCzFiHhnh1qo1ySSH4Z993tzNP7efSxQ2TKH8gXp3",
  "key33": "JS1GnEnqk1zLFoZ5wgSMVLJA7TWcBM1SVouayogGavFNjKn3gwLxXkT4oP119iQNTWrNmRdPv1vV6kTD8CuKSLp",
  "key34": "3CSTpMg2ARj4eC6hurDdW9YA5UFD9LDoNWvkcVjvXiFbKfuNbhP3bmh8jyCqnDWrc7jtdFPLDD7F3DKdePQKctzx",
  "key35": "3f4RtdLTncKN8VjxqeSzczsEQinxNdH8tnwyYyNK12fs5wGb8YCJjyNDmDsu7mQs432cu4PysudabATjgvuzCg9Q",
  "key36": "KKGhu4K8iPfPkcEm659W8vyiC8q1kvcNi2wHKPy8CYwkmNA8LEz3cD2T6uXbFuMz1iJmTsz1fryca9fo64Ua9f5",
  "key37": "t1ufmzcwfDoR2h1Qxo9nnqbSZQa2G8tAnJupkRP7zH1tQAvts1DNHqskKWgEH3mwzatozBoVPeRpXh1frU9uFJL",
  "key38": "DTnQLGPLL8hN3Nieswz5xxGTprVxx24YJkneV7tYxRL99JBWPCWdnNfy6NVZqF9uZwzT7sf4vMrVQ3ucYMCTtvc",
  "key39": "5b9rzdxZzYEL1JbcVqNTfHx4FTKwg1TeSwDgWWwrUY1YxR6QMA6WbdoahK9ui2gpsCKLTZ71SR74yF5NLN4gjXe5",
  "key40": "3XRiyBxs7s2iBjqRiqASWmFcBGqRkN1d4izyVhsKxJ5fnmhATDrJZ5itXkQ3tdzRGtXUmo7qhfKUj9cMogKi3VhN"
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
