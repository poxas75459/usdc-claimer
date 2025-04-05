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
    "3L1tur6TQvvQbicbx8DAhiy5NF8ZabFbB9LwDHnEPmTjA1jXFV9hJ4ShqoNWg5DFUnMLuDqsEMHCuLyhgFsn3WCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rgL39G9gFfggj2JDkvivHLjnveHcZU4gRX16q8v6MCsmzAgNCpZQegJMYayuHAfxuhyWw7uTmUwhWuMaNHXzMCX",
  "key1": "sDRNrR3dA3ckbCn9s2ommQU4wYC75YgGZkk1Wx9pgRb5RfmRdxNJJyzJmuu1rUDG19MFG6oBLKh1yVWdfv9Suaf",
  "key2": "QTNnhmyVnbaWjH2a6u9dCWwxhTNWaaBUrjaL31VDVgEELYyYKgFpMe9ztmXb6RyRFmqb3yJmQ86RsCn2M5MErB6",
  "key3": "gT6FJJZFxcrJNytRKdiAyKB4Qt9jMToqAidk2gF2uamS1kybPZSrebGvtFqGjipW17bs1qWUEzX81S4LxTWDApc",
  "key4": "UmHswJ5CxvHcBPsrRLmpt7XkFEPysPHKc9eGD5RFo4dndALvhxBqFfYUmBQdHrfBXg6WMnKE2fKYxSvsoxxZg7f",
  "key5": "k9yAZfxQYV9fUVksimv8qERW65G8wNN8ioZW4ELWUY4WwtBXsopH6rzxUMfCXGZSVsNqY64fc2nb4qz2EjBHxVt",
  "key6": "zzvS2fegubgqgDruYNnzDu6yXd4Kett9M7YaJG1CwDK3TEDeP75fppq7bTqgt3fndzJcRBfUaqxWfKVZ5ve3Zf1",
  "key7": "R4k1wgMEBA2gqxCffXw2YVM7p3afzP9abMMvjy28aPf3N2GyGGFMJsz1LXmkHjgQeYw8Juw1EGr4ETNmVLSEZnA",
  "key8": "26dBU5vHhnGXRkZ2zb85NC9MrZhHxJAaW1SYmZBKdkEYbUrCekKSyg7z37y1whrp1zML8uD8yvG79EPF4i6K1w3T",
  "key9": "4jLbtvNLzrVL4yWhFsf3oAgHrK53w2rc4TNBRQ5r5q8abGfCBKpGdNCiD28RETktVD2T7YFTTWHwpR27k1TJv4je",
  "key10": "35DMzcEaKVD2jxUPC3AGBb989UVqnr7Kwk5gWct6GXp5o6mFo2wunvFJ2PCFXxYM1HtkC94Tk2EsijE1FTEq4Rib",
  "key11": "2kFz1xwx8a8ZR5fnr4nZL4qhCyDYryd2SgMTKD3WZ1XJvE5g77zs8GvFZ6Z81VN8EwrCM2Fu5Gwdyz6BEzd14dt6",
  "key12": "3LKgcu94C9J6yWGFLtMRp88E8KvfDek8pABXG8g71pYm8JUjgG3JsJQzwDdLRVM3PGRnrYuonPE4sk5q6Tnfjebe",
  "key13": "4cSaS8RmGsiAbieaTnudpswCQ2obb81y6fuLzh2gigWpgajdHzpqmuFaZiUjvoKXMwdRoMxVFK6eugEPyLodSycV",
  "key14": "3fQ2QZ6AnnMSakomo8mWHo9vxmJmdEWikCSdAotgZSrJJMKi6Yfvb2PA7N8QaHXnzNs5SVJapT9dcM4GW6nBC1ph",
  "key15": "v3M15iJfTRHbwEtYX1PMutEf2mEWXTRMwT6u3WtZikqxbJmZSaH4AM2T7isxcndNZVgrzaAuUoGEsHkfRLdjib5",
  "key16": "4Yg8EhUB3ZJ38YR3N41ZX1MaLKcUzd9eNQ5HurWhmhLar2tEAPKKQz8mLMZSzNZKk6xQGqH8bL6LQvq5mzTMF7mU",
  "key17": "BGe9g59CcwiQzTW6qe1TehhmTDsFjDrPvSLqaNZPYELmjTLTwLi7C5698yiBKKNWUaX4b8fVFUh8KnGHyEtChVH",
  "key18": "4Lz3iEvSCi3TYBGYbriY8rzN4xZ3uyx6kmksbLv7Jzv68cM2qQueXCLtf5dobKGQB9iFdpBo6n17fwRCoDtk1U8P",
  "key19": "5tisuwV9QQLwhYRSRr4oQxLgrbY3RYNpsxraZZjWKMVzdGqFeFaeLYcyBc9m5PTHSVUgEbHF4rKHpzXurS3hFGEZ",
  "key20": "JLLfdQdqyZeo2zq8rSvNrWHGBdLB81UwFMAGN5DHGMivVCsF12YrRBofnL8kdftTeKfjoYM4AjYnvpoTNV52UV2",
  "key21": "3dW4B9guQnmDrn3e2XvFwTJEwAMrRiAsbZEAGpq432YesCjztnZradyouVmJwqSCRzsvHT3iu9DsWpp3Vu35UsYa",
  "key22": "3tBFTx2TSr8fQHHz3GrAnfA6dCX1tx1jnBAoaXa6UU65HiL6x5FU47gDhtMaNTKWX2tQemDQUv1FEq7wpenDjQDu",
  "key23": "f4iz3SpT1eFhP529GiW5NPXreBn51TqW2Tt2JueAsf78zRdL2StaCmxqfjboQm68UabkpMaMJXKTsy33YqwN3r9",
  "key24": "4ESkjkSHeRX6JiFGLbbj6pGUV2FrZ26zaBvxz72PoCYHULrVaaoxbeXex2wEdfSG98ZDAxpMfLggKnWB5WdqVKuH",
  "key25": "4Xgu8KMmNVRW2oHntK7JEiWFpnkpZVxdMvh5GJrNzrvFcrHBTwWuhbqNDEDLdACFwoV3ScSxAYF8FZuxFmDrrUuq",
  "key26": "23b1uswjbyihrGnCMVrjGgcv5BQhR8gw76GS4CadApPXrvukyo1MgcskCTLLtzWAtKRtSJiSShdG7XP9qoiauPnV",
  "key27": "3S1wYW7qWruVtJrVcsHRsGTqei3G2h49UJixrx2TYChNg6YgScCp1yZ64BvK29kGtyPUv1PUooLuZmrVRbcw4C6Q"
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
