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
    "2XzJZEPtZWcPoeWyi33dgMAM3fSq5LJrP6bHwK3ciNvaUzhGrGWpdeWyekqbaJFtu6gAmZfbTLaJFE71VrWWeE4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whoGfzFAUXGXFb7FX56rQUq3ecmekeug8fAgJrossdF4sxRNbRsQAw8RqtaiSxYYWMkgvsMMpmaKYgNdfrE7CEa",
  "key1": "4RsG3JbkSEiUrPWecs11pZobvgaGB71orfrgWD5PoWgeKkUB2aet911Fad5aueY9WwWHKY11nyPyWWt3Cr4XrUT2",
  "key2": "Td9kywuhtAGPYi7e8Lmutu9SMPDm2L4M8vVhsx2aJVHbogJwAPWWt3bp7P8j1rvSJ92x4vwmD4G2bdrqeD2XKgy",
  "key3": "4dmczmXRhbriDxLF9TvBHFddJHBpmFzUMMUmS9g4VFTV5wasMRubmFbjT93y5buEJhNCr71CNujjsYURbhUiwjAx",
  "key4": "S8N71wHMey42AXnihvnfz64BhCaq6csJRyZ2FeppmkwWhjUmsEk44LZUCP8krBt9og5MKUw5qePdUCQWKKxPjwU",
  "key5": "3xTdwaAqN7LMQy6uP9L2RrnVkErekmnTUHoc1JrpuCeaTdNYvKgzcTCMdSWEAjJhM1h2qgVaCC2ibaiPnND4NPr4",
  "key6": "34FPMS8VAujKfi1dhXfxjzLFnZ7gD4tcJFL8gxJrxYU52t4vcdxmVsg5UTbHRSAw8mbofsXrBTLMBSYwYM8t58bv",
  "key7": "4DNyDnPJ7MDahvGgJwQ5bzgaB6Ca8b6Zm71UZyEfPV6fqQ6QxRy4s6SV8tkv4an58yd6zhHUjUq9zbEfyv5z9n3X",
  "key8": "4PTtjqBLTmiT1RYqcmCHjhPTDB2NwVBQwYsthCSmL5sNYr5gtqdn2JRio1qmY15kxXy7dMc3Xk3fWGKPfPNcXBJa",
  "key9": "LkeXwQp46P9EA15cd3auqLBHZoiBPVtbV3mMtfSgghRWdhizgroQ3Mf6xLHoCM28gXrUxoszAabod9x7msbTTVe",
  "key10": "4on1JHRdzTN8SaAu7rQEfXSoVPdZvLnZ8o9sBqR316TRisZddcfyq3o6Bk6tK1oUfjskABSy44CpPuxzRZpRP9YD",
  "key11": "5o2TXCBrufRZ2Et3wsVrqfMRunbfr7vAN4oTDKu7fynSRcmmdwa7VRDq88wgEv4D4QdovdJQrsQ6SxtMDJj8RgtM",
  "key12": "TeZhiYJVF8S52cCN1v91m8YoSgkDGAZgUGv2HEGCBRLRihC2ufqcuYYwiN5AmcPJjh4nizN9A8QpQmgstuC2ZHA",
  "key13": "3PNYCCDK2rQXmf7ZaV9unWYcDXxwh3DiFM3C62nkXQqitbbWsrNVzk1hjdqDFAPr5PoLYQ6yNkgVpVQhymdiqwzb",
  "key14": "4D8ZeTwTdLYjZSwBTife12ngJhf4Ro8snpREY6yuxjfecimdtKQw4iDuWtEdsYksSU6eCfP5sFXNpEpwnyBRmiv6",
  "key15": "n1QDuVN81qreJHNuevCw7Cz1tGb5LTBYiPxYsEX65nCQZ1tc74F7wN8qAtzDfxw1poehgUP8jKagufAd97U36fn",
  "key16": "64uGz8Ur3niVbZDGmuofgN3KidJqdTcAKJWykMmQX8M7chmmKyZvnpp45R87YinufwNWFqcboizgx1hL4iMNvp9r",
  "key17": "2ve2Y5rom6caXdJjx4fvM5UvJUGN1vr5zXsf6hPT2zqnbZthMuvEcbigqYcawk56ZRoBjs5ZEkwtGDkoEuUe3Fc1",
  "key18": "2oyVi5t4oXVdmX2txByqX2PMZ6S8BPb2amxSjPddVc14sTyQsiaCJNm4HVB9zpXoaerxYYbFZDtMFq4n5fEKLLmd",
  "key19": "2KNbHBFbE4BehKBNcHZwQA7GgTn7jTmx9H5icQa1bSwmKvTzZALiqW8vTZNBi6PfdCWqLL4s6R6fQuQijpMmoiAo",
  "key20": "4dMedH8uURUtJhs5WjP1HpCcLQrpK23ADMpT1jqA2RrzUsdRay4oxeneXcEqEWNUmdsmmKSt1wD6GBzswaPpxRYm",
  "key21": "2x9RWR84Y9N18LEh7ZYFCwJDsBvRJeAMWVZRjuhmCsuaMsGhTMgcdx5aUdmWLYbqXxdcx7d5zP1DmwGvQx581zy3",
  "key22": "5FBikGo5ukMaVacsazLdXrUWpsW6M3rAu4wA15cZLa5T7UddKyMkJk29K4gbo2BJNBxvfbZCt2QNKsXN4f2tbsVT",
  "key23": "3AfCqtALfzJLXqMX7LrEhfSYjgWKY1cwUUUTVcYgocZes2Q6wnLrBMfLZRHYTifCd7PC6eG1J5ApY34G51aUDceR",
  "key24": "L7t1PzywhFgaFqfvvHdxhyFG1aj7YrjxCoUSQQQoV6xdQBDN9WSrw4QnQo2tNNpQa7kCWHKf27tT32NssnNHJUj",
  "key25": "2HjSmL7FGXvaM7ajT2ENjdR8T2HY4y8VZzBqvN5wSADL1DahujCT9AcKnXn7cXgQqVtBDyi292PvrtqsPCurtnb",
  "key26": "2UQ4RrKbxZFmVJTk4W3sETCdseqwb5AR9H3sEZSTSd3S3nvUxU9ZMMxKrKKALi3uS8G9494c8HmGrhxD61oZbsiQ",
  "key27": "YXds2QjvgAmVMiV7KCuRZtYJetUwbC6S9bzNYwP5SLTKZMowxdnCXKS9PcRtX1pgZDwjtkPYEEw9GKyoviKconQ",
  "key28": "3ifKzgUyEwzrhCtkt3qC3qCKD3vr2UDQSPCK4tAWSydTpAjQ6tESyeFBTJyKJbM8LZt8aMgNvh8XzpDjMEtBtvJ9",
  "key29": "3gFdeqPnQpvTgF1HFU5V1nMpAJHb2HhrJRPpKWCj1BRjAVVoAPg8KbdPifWfb3cmLQ8vEvkqBEmTnwWrJJUwm4Vp",
  "key30": "2TAHHB3JCF4hCCapzKRgv3ViyA2mEUS5nXwvKyYnqjqiTfsKDLEdq2M66RzBfBHSv8Ym2pwbhimb6UUsqWuPry9B",
  "key31": "KesVwQZF8rSG89rS3mprBQzfTffDPHpBgxcbWTtgMur4hTDxpwFEUTLxdUePA69mFwQhF5JRymk54HbP3ZYzP5b",
  "key32": "3D6hQyuEdDjwQ6FX179Qdes2xBVnaQmCxzVnCDH1dnrx7R8KzNnYgPcAY4ZkLieZzamBhVceovGyopWc1388g7Hr",
  "key33": "2XferprZHD2YsPY2Vki7xKd6hEHRfpbCiRgrvqwEhShCjPs3hmvEu3vCc7w8jAZRUWhS47uLrotivkLNgYiPoxyx",
  "key34": "3eGn71jBZT1iXJNHAjyBmSQXs1DcVGcD9q5EryRCobSGU8UiB15PYBRw4WnRE5toKribzjWrqCkRcd25i2dysocv"
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
