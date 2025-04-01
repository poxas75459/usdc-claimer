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
    "2AKXHzjSTuwLg1c3FrXYJRYcuZcP8Rf38zPGsMyuKwwfi7ZeMwEkneg9hmonXJDnArL5DByTSQ6wkg1hchGNSLsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23x8BqLtsU5SpbXh33SWjJJPKCEbUDzRQCVnzuBKvNBvy8h4LzxaWWBdrbNHmHVyNWNeHGUdTd3fKpWxVMftVoiW",
  "key1": "2EcmdddN6fUhUTy3ohDCRW5YYvWGTLBgfRvACY6qpmfWmx35k6rgfZo9Q2rqDDUaMe9Cyvgby6urPWGGPC4xHJH9",
  "key2": "3eqwwyFueZETSn6FnT2fY65iTmtgLdRTZL4YAtzQAHCWK6wxousaLKSi3PZzZUjGrTSCGbuFho23xkiPghPzzz8q",
  "key3": "31CVdPrNiuFe1FDwFYKfgEnDRudmwHeW6g3z1WZ9tVjgLnaP3VmWoNTcd455gsZ4qsjjVzMGy9RiM5E1CfL1WeE1",
  "key4": "4VdUwqsf6dxGieV7N194oQ9PHXCGkt5KT4zRTtMA5S3JFx61t57tH4yynnJp2PnP8ZeCDhNCUqPpDrYXXmCrAPKv",
  "key5": "43BWkDgGf48Rf4Xy96w2VW8dtiaJExK6G7CzLD29UWGReUb9VeWxo1hJR6kQA5SqXQnV3PnbiMDDXCwZT9jiqvYr",
  "key6": "4fSJAWLHFLg7C5sgnGxPyQY2BPpE4NtBuPxhSuyaADLVyiW5BTmeuyfomQzrEbQZNouphWrz4En9Er3JXh1p6PWo",
  "key7": "4XYLChe4JA7agb3Zi3G3GhMN784LtVRM6RKEep3p47LRYHtmWVF4RJzgEtK41t5KhMYBTydjtqXGrhMyDkYcLYrC",
  "key8": "2CdQteF4FpJLAgJXwNdFvZPjgsS2rrRTEAanVR2DJrfdWnNa4K6uZ9je4M7tXUJTX1jE2pCLfqiAo6XvcQARsGCG",
  "key9": "4ytGwGVMpMy3KhwUs9aEMhLw9wqtWjfRouBeMGqFLHswyaw3emsBw3CZgWYLQ9kvBBA3qSykgYVvb8ZRJ9wzq5Xu",
  "key10": "35eTUiRKNcY2DmdrVdT9uqsPMxJXwWuWuaWGWZ7DbXuzF7K51td5bfP6Wsg48BYiwXdK7VFnPvAQ1e9aci1UiLgd",
  "key11": "5KyJnJ4cfR8fhyHNvwK4ossRH6shGxrCXDnCfYGS9e5mAKnMFuAHBfPH24ffbsKqoGqtCMFeKwP24sbpDgH2BNxU",
  "key12": "2bYsjYaZzMvFyoimGLAd3ShjGuk9meNhC8WSBNg7P3vE9pFCx1LCyWSqnkqyvserD9MdUXcomzfARgCHCftj8Lat",
  "key13": "5Js8u4QHMGRQxhG9pFuFMrSrN11b1tkNB1C26k4hNCpwbD9eWzhXF7wWd99Dxda5W5VwsM2h2e357AQX1a2ABteg",
  "key14": "4vm8HYvuNy5tNYrU8fSusBjouXb2CTwyRYC6vfHfV2tB2iM7w5TBKSqKUqPvGzCvNCBwb5CfEjsUfn4RZzTuoA5m",
  "key15": "21oUjJCobdYbDsfUo9XSzbiKEqPapgXLzE7pEjbSbJB4FgwQBveEf7CzKu5KLwF5YKRn6tC7MgLBTa2QwzzHeUX1",
  "key16": "5aWePLprRGp7nPiK1sW9xw1TYWfoGq7psqbG92Xak5yrJaZPT1iUtNdhpr3xhbStxzaAPVCQCSEiG2yppyEByBGr",
  "key17": "MG6DDUQE43Mf5DsS2Qv97CYukeQVuypFk7jBLmzLgSmGF5zzjVrG6yiH8hh2KvKZUwLi3PSnamg22E9HU1oWYJk",
  "key18": "3ngrsuJ4kxRwaJMjxaRzVk8Z83oN9uwo9faB1GC9oVxUwuHEKLcaBJT4VfbGDDFJEdmP11oWhFCiH5dD7LfcRDN2",
  "key19": "7itiSTDbmSo85b9zbk4zR77LGxCAy23tcYn3TRCuSh71Sj4nk5EgaPnFLdrwBqaDygFML3XyY2UBbDv5H81HYLA",
  "key20": "4RdCo2JKQttB3cpLfZN6H3wXfpH9eFNzsHxcjn4MpNFCNQhrk9HdPaeRtE2tSMywtztKuJPhjgyf4LPC2vm2JcCp",
  "key21": "2LgH2FVNpJN49s5GFnsUa3uHk7GqERKd16Nod6taMx9ajZ7FF7TPHRxsST9MnJrtFnhfcBxpJmnmfQu1cHg45Uxo",
  "key22": "2wXmRopD3Y7yHSuGt2DLWgRuVtuSYUdzC5UEhvo2XkHFidrFsdiD42wxAf3EAyjGqKiinfvJXUGSiME3YyocFagc",
  "key23": "64qKD9QkLzw9GA34TmFaTk4xLksp5SpcSdbeHxcK8MqDrwoGR2hzoQosexDjUqfSnDHww8om6rYVHkqfSZAb1j9x",
  "key24": "4Fktvu1vGw8vCWjed2U9TNT3PVR6wBjR8423BEqnWT1x1fY6zx1vtPuz3cPwNKWSjbAwMTGTGCDcHTAx8Y1euxUx",
  "key25": "4U2MGBoLw5h3pBS73pViFD6GPar2wb4C3Rs3JXgnEZ8NjTN2ng3wV9DgjeyjuteHk2wT2YBakoNk1kwdPb9rrqV9",
  "key26": "VvS7g9thGHqQufEBi4i67Djykm52QfahXr6PBnEAFuytoN55yLn13oprz2ZBBg9P562sHXe1qxf1dxJLJmzL3yy",
  "key27": "JzFtQKoeBpNGK3r3Ct9iQT6ZBsn1M5f7icX4T68WWc8cCexZMcjAsUwcFRscS6qdnY5EaSNeHYYpkswogLg3YEr",
  "key28": "3y1rmUBJ2G8K9g6xceANziqhjoJuWF4w39T7ekDzQYtSg32wsqpDBWhafhZwbnK9M8SXmh6acJ1Hiwg7Tupm7ytD",
  "key29": "2NsWBLu2vvz8vd8d3K3RhDPNb1CxwD7oJ7NZt6FFJBbuUtHDUAJBXr9spzquNZk9ifm9v2GufZoUxwHfCrB8KmS9",
  "key30": "gSLdYBBn95QHQsCjNiVwGZMZRPtFhspmGXV2NDcETP9RjQyCrnMpKEDmbEf7pbSctvszsEnaSCdEVWrLQHejzww",
  "key31": "5d7jkov4Fcc5hqNTAwU1p1dMeBnmhU36AyTE7ktuTvLraWuPhDyH2iNhER7B9MktX5uhkwpDjzadsrbKCkejZZyP",
  "key32": "3kfP1VrdkX6LWTrRFfseqLb6mexLPTHASjcE8hnS7yx6p8n7W9P6GH2Yq8p4D9c2nzTvjpmAK5GqMzY9MHAvuTUF"
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
