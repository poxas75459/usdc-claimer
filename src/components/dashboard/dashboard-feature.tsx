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
    "3SeNU62nkDr95j7hyv2iupfQPWuycaa69dj3HDJKsroJqZAnZev8hGGd6bJSJYDM1yo83hfQDSLPigx5KAKsqzrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wegR28mnFoMFvAxU7ybQ4M7YqjfzPvAKxrA3Jgar82nfDqFhmdRW7jYnY6cDxpnCFdikf7qnVL5Y6sTPfvkCWmf",
  "key1": "zPN72tUZtpFwZZQ6JTZUJM9ttRcKdrFPFNksmmUyBoTiF4q9MoQqLpMRpRoARNEbbc5PLKo8kHj5efbVBE2Zavd",
  "key2": "j5a3ouHAb5S91KQyiPZ5WGtErmTKSPenzmf35nxiypLdL1YK9HPsnwk8Wif2zdhAeuzeHf6c5kBNefrkXA8reo9",
  "key3": "66cdqAbnE2UCANuQbccuYv5QUCLmjminvCbBGhVTNYWegQNtqYEcL1CJnRWtYpdBmt5yzCdEqnY1nHntovkDMTRu",
  "key4": "5GKH88xPBb5r5nL2CtDu6F18rPsT4jECRkorCNjpMvP2Vsxc58zz84zE51a83cuoHgQs5nJkhwhFz34nFJ75k2JC",
  "key5": "3qPXX2ZSihhNEx6yzCjpr2pdNLspASivoTtiYqKT4opvFJ9ZxBq6quL8LjmpUxbqZ7stfdQ92V8X4WkcWFrKLscB",
  "key6": "qfShCprwFrxfXdc87Gb9eryuATUExkBqmPN8KMWkyHZXpDw8bvChnHj8Y1puPZ55nDAKgp9wJoyBwnUV4miBWjw",
  "key7": "5RHFTEbANiqCbyL589vdeLh8qasFfkjgggm921N6MgxfzEFa8UwPJwhGpphKjPdCG76QTd9TdoUvjzosocBZQ5N4",
  "key8": "rzHyKZypy9gcn3eq3PEcRmBxR2fNgZud3CkTN9Jf9fGGnzHFw5zbR2iTqfwjEtXTfE3pNncAhcBDL8ouNSEAGRz",
  "key9": "3AXmvTUpUMU7Bqxk2PjYyQiDVE1UnRtGAjuQPFcL1q6S6ab5EuDyqLiVaYm4EQVmLwAABDcCq6LWiXmMShwNi1Dz",
  "key10": "5zDcxHorJn3U5VFfeY3zLG4FFpFLDAi7EqcUKoL17dZPP3Tw4mCYGd5VFPGftQvKA73BM1BvpCEZ46zDWBoidacc",
  "key11": "3fa8deZvBEFtk7BXvj4PgeTByJwfKwQCvcSnuCNxhwmfxCVtY5YNkEEX74mBKPvXKuCEuJsM3ux8e82f8zSBPycy",
  "key12": "5D4ftwg417JXhsi16ZVnS4BFyfCFYXaurNhwXdeSiAsxsB5Djy3AFqQm1G5THou9xyHoW2DxLq2ykjGYkBwny73M",
  "key13": "4vCW141Q3xgskKPx8mmESqG8D66ETzYjHZki2SV3pnkgaftNpJTBE1YkyJp32Do1WTc2UvraFn6Pa33EwEChwCn9",
  "key14": "57B4ShZfBqy1YrK7TvtVgwcvjaHHH216A1BEJpybnCef3tDjzfPTys4W5pbS78C99RS9z2cwom4R5ccXgN3XbnTz",
  "key15": "3U68xwLhkR3Q2b8EVA4EYH4qBUna8dnFLSqBDdzpuZyVNFkMb7LhukqyvfD5rV5Dz7iKcdUooTQ3fJTbYasM3Zbj",
  "key16": "33TtewsrLhRvntTXvHo1tBoNwxYsULSwAoKnKrmhdm1oHcvE77Dw5kD3cZtZ9ZzrzbhCporJafkc8xd7WfNYyb12",
  "key17": "FnTufPM4Vy6EEPLPzVQB12GJzBK2rERQYRgCBofvUxUwRcoNvKwJ95P8fERyadR1vkcThRz9vgbxE9nZFBJapQP",
  "key18": "sQ3QsGkGkaVuMSWbQSVWtqojuFEmBwzQMpgJRxmf5gG5M7hPZnC22VgZiQ2nNmZe6KzRmbtMZHVkaViRdU7kgHv",
  "key19": "3vX1HZpdnJ22M7uSdR3fzoHC6UAdKbMFEycYPSvMc8dECmeUsqBBGxk56LWNWL7mp6S94hvFbSPq5zvwHbGZ8wdL",
  "key20": "56JLNzNxrGpsfdv8iC1mkbSfmPyvdy3Vj4vq25cTBr79tK8zzTuFK6zmMrqHgbnNTckdZty6tgHAMheAp3cL7NK7",
  "key21": "4AzMhUV1n7XYSm2Zx5M7EQRjsBdfXrdjunSPSLUYMFE2ZuCUih4rxev6WtVLnTbXFeLUuJfQDLB52qzc475FbRbi",
  "key22": "3Ciin56A9hwAzvQy6zfNDJkEyhQBLf14XAJLVchiTACNmgsTQW69qNH9Y4SNgPGTXpiswpkYZMW5CmPCbJF8WjYH",
  "key23": "4UJygzeq7A19n2TYG2jdC19cqkgHfi1awzP9TpyfgucFaie1tbHDcB7x5RnXvEWZg72u5wu1pnyGti6sDpmQgnkN",
  "key24": "NygJ6vEBaiYtZXNW4vLDSJATfM65Xy2bgZLTvqmQb9EJVabBUHVcdZXXGDhA5qhsx7c5BbWvtz88kuW8Ph4goSW",
  "key25": "TuS315s73gKGtXVCJZ2RwD3f1T96TGmfJgoMZ1w8RZqHjVduHXkZE6RHKuwqqdnpxozgAm4HzExzsTHEFoGb421",
  "key26": "AGjxUb6nh3u3bYPD2g1fxNkKVKaxGicveUCQViZVRU1b57b9YjQbX4D9uGLeVhUk3a8BiumoedamMtfCeB8idqr",
  "key27": "tvgc4U9vtPGHYNcsHUbqenz8y67mVFXSjnsb4X27a5NJ3ZPLS5YDXkLH7YFqwKWtTdfjqb8tZr7UKVTpwLy9yST",
  "key28": "2ULNejxD3fGfNyMtsLwvSqDbYA14FJk8gcmwAc1DZDuasoanusfrZ2RgFshp5R3zASUaGCnW4pdQcoLmjADg8u1h",
  "key29": "3oFmEg3nPRdfh3DGoZkXsBiLQEgFrgX7tNc1SNstkRxrJAvxFZDdcifHukn4f53sHxvtNMPkhcHHZ56do8PtG4B1",
  "key30": "4k5qs1HQKicLbTRq8kZcC2BraWV8MWEeMuAwsNjQUAywJK95Q687NAGy9FjxxzEBpeam74eQL8rWGa68Ht14eTPs",
  "key31": "57UbPJVfbDxk2ai6SYg5dy3Xs6B8vVWdwvGCkPMRu7vXtCbmUZ9tMUqp3bPMBqzsocAkgfZdXnxDnho3jQ9ApivL",
  "key32": "4PCsDyXY6ZE4ATrTnb4WSRrdJ8Xfj1MpuztL5XdtvGDZoJQLRVEjVp7ZCwjFMrtL75W61uuyMf5Uzkc9nDW7teQa",
  "key33": "3vtLx7jb68M5jfWFn8XLyeXYQd3TZ8twnKbexicrUBA7eyKEwamev667L45VwxHNiopfjjNzE4hy8R8p6PLN4u29",
  "key34": "5sWUqjrSDpyE5zYYaNLwya1CBFkFobQE4XQ6FxUZGoNVNBQiM6Eqm7EnwjceDnPpZNm1Y7v5Xgx16mp5nHpEmidQ"
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
