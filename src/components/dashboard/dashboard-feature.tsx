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
    "4Xn33YFfoGovWHuwFGp7zQWQ7sGeVbwY47LSkkSf5ZJkVrdapr1kukvWES7WwNxbd3EDizFjhoo6wQKzLrNcgFWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHu6NUtqZe6EqwWWXDQt9ZY1kyRzvHnmTGSUFSA99yhqcbJuZkkSF1dQRNS6KdQHRwU9ahdVB4cgDDwM2HsbzpA",
  "key1": "3q5HLoqUvk8BsVCFk375QdZd68caYHuzwzo7niNoNF68UArEpA3XxxHjKZf7t56xm5mQ67wmWQQJbuv3d8jbGcUg",
  "key2": "2wkvQbkTPHdsRqRT1YBArfkvNdv9FfcrVccERLEnhG7mt7DSkkEdKjRvrgMctdhpbKhPd2QcoR6KstYHuwsaQY6L",
  "key3": "2veqN4DnrUMGibEbpKWto4PV4RGhiVfFfBdheM4m7nJe4sj5HrCDHUaivZ4LSjWohMZhW1Xr7kLS2jUbLJqsGv96",
  "key4": "2pRqEFrgwFeDoKYkFAeiJNSPQ3ubBstiTUFzuUep4GLAPiqef6MPjvrW7kyE6jAedeh7wPA5bvN5SWcvipxmfojS",
  "key5": "5CUQ3YFDwxYN6Zor6hLG2GSaJUsBoDLLHk8FvZpaTdqqUUcKHYsJwiRWv9yriiNYwjsPDdSnRmcURXiUV6GT7DVU",
  "key6": "7G976vAgF5ucv6QdZbBLdkyd5kyvnQmgj8fCmVmJQmvMGsssZgkzVHxaqvTR2enfyXGT4cFwVmQetFGER9PFWqJ",
  "key7": "58Dkdxmbw5TRgXWtgRZH4eF3KrduLETdCd3sEjr8sxRhP4Gi9UbDqqjmX2F48mZ5nvLBRYsERVPF8Y44aTrbRZZH",
  "key8": "pyE5fJHQJLGsugrPiJz7uxeTiFamB3s24HXiDYtpTjaBkMHxx7rZ4aexX2NuyuStCPYNKhJBpFmzCcFz74pQZyQ",
  "key9": "3o5eNVG1fUPNnBJrj3evRkW16BF3D1zPWfmTpfL8eRKfrXerw4Jufv9WHVKHjsNmJtMnNdsLXr3CXe3mgfZZ191d",
  "key10": "3tS7kpSyE8feFbC3QWKeUycqzMWnqpQsThg3HhoL5afdN83anBhvU8Sx6u3E4st21owZmhm164PnWCqLnaNoUMWt",
  "key11": "4USnTmbPnpTpNPA82RMjG5KNE8X3zAenjo51BJpzGPsLtAwNPWzdmCcjhxUUKcDAMgrbwRXadFRoqx4Wko9GVNEN",
  "key12": "3yEFgCzYxv9D4BQ862D6FWHK4jfCsDZkXdX3iv7nZnKEZuYHAY3pEAYHAKyFuXMeFn3cwsu6i6sEuNBWucgb4z1S",
  "key13": "2FJzWyPPzBHwb18f6Ks3b8s81TbCfvZCqphXXAa8YQKKa5ShNjahDqU7w5LxcczQMzWcXh9Ffw8ENgitHyFGQQDk",
  "key14": "2M3qihMESJA7N1v69S9efBTh29WaPdRBEUW2k78Yc2KZpmo2Kz1ptwVYa9wJNMcPeTSYM49rZTwPC3qwuKobzc2p",
  "key15": "4oWgxXy4jTwrr3KGcnr4j8bteqG74fNE8Z2rtF3wSdjCmVWs6gawz38MnML9C667BdJNP7DNRLgV7QjwgEpTvk7U",
  "key16": "33hcBxRtwNckUyqa1v2vgMfXo8o3ZYW9gKZyYei3FgeMkYWJRma46cYCYtP75H5mrynp5vfcDQQKnM2iQroJMfG4",
  "key17": "3Y3jPWwuMJda87EJgMsWCM75YUrLSE1h2FJAdwa9SUPMvC4Us3w8jtCwVfMiiWSVwgtKKcHAzvyUBNrShJAqDZNW",
  "key18": "3UE4coTteyTZaSVePS9K9vWZK6zVKVCAsD5KVp2PULRZHWKymjChoADwfn1geUSnNLwr7GTjvVCWfKRLvDMYMBo3",
  "key19": "64FGgmEEYrExq82V2VJv4rG7HtVCPYKaTvVfoga1XT5yFrjmCAda3Nz8nqoeoWg8K44V2nqa13RHVDX2o7DnzR7g",
  "key20": "5sy8HjsqEVLRNGvjrcMSTWpQAwxTMB4EfWxtLUxdy6yn6GnCkV9DMMfqBfqT4mLUH1c5ymHpSFGbZgUFWKz3Dyz8",
  "key21": "TnFCsGy1tDRoqgPU8sgr3ht5fBigp944F3ryFDifRyMLbTXawkfqdL17vUmQQtBJG3FucnUHFae4Qqs3AGCLDWh",
  "key22": "5iX5RsBLCxFatDLtXMrxSybnXqYnMCPYptHHjVV3vd8HBc75QRx7j5cD8JzYXywEHJQiT3NtXEpeBrEXHsZXBw5v",
  "key23": "3G7jfVthjaEY33jVkX13reB2Y5KV78D2wtDiGZCfJ7euxtqMmHNt5f79RoThQ8DWrrLr15y3226ZLMY3m6uzvtY9",
  "key24": "21LTgfbJ5HnP9jHguzSTYm4BcCsGwhr6QfvHCBUB9oQwZKHmDJPLRSA1pKgyswNK4ZsD22Qds3sgi9J1rScJG5E9",
  "key25": "3THuMFyDosL8ffox8xrW5iQTYBesiano2ut49wpdfRVMTv1fhfPvi1tnQrF9fPgMkt2yq1BrXV5zVm1XKp7xiLEp",
  "key26": "vge5HsLVLemvsRqH2HyQt9nbsTxBzFzwgq9sEG6KaSjzRZm2Q4zx1jDCLqDbE4dbTi6JGoo2Wu76dnCrfuhUye8",
  "key27": "3s6wyxMjUNm3n1qexW1Fm6Zkkqikp4bC2kup6tP3cTHrzwn1DMbjn8KybRYituUTWeceVf6eNKuZzFHHzZMDKjsp"
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
