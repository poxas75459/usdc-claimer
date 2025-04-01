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
    "CRdbSt2e7hcMEAFrYMiNc6YxCZ3NsB7YpggoJQEQNSkCDKFkGSAXmmL1peAkigNdxJCphsQPdYAC9TQ75Jqpb7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TFGXE4cuE6FBkkaNX9cXrLC8VEVYks2bhyS2ByEUFpM5CtWPE6aZMpmhaH3zH5WuZyuh8HD17uvzFxno2hWSDx6",
  "key1": "34EMXWRvzBY139pxXCr8uVsk8NbDf6frwsgHazTM8YAfcwNqLbdjpXayKhzriaE19PaPudo45QsUrCrC8sXn8a3e",
  "key2": "Xe1YS1f87faXW2xnBQC2gVMcVD1TTD9bTBX2RU85TvYXkWfXNJT1uWRYLnPQbWb4p2y5Q5L9Uq5nohPa9Xhrrpb",
  "key3": "3hdA6dZqz9CwKSVCbQVU6TtBbrDW7gfFdAgT4iSuBaTim9Ef5z9YQ2ejLvBMqW92NuQivd3SwWBrSQdCi51gR81V",
  "key4": "6pwHNcerAoqbpoxCEM9cVgRxx63ASD8reRKHik6CfauvizxFFA1hcS7him6cfpLprujvVjckxfbSQpBSriNTa12",
  "key5": "Ve4YWJSwJbcDZBq1USq13eExNxYkBvLyPmq5VGcAdbBMG3kfQSmjM3pWcBSvuCKML3Gwi2ZQVR2t5WtFXQtCPWM",
  "key6": "3t18MLFymD8i5L1fJMu1rbwxkrP6rmVZZhJs9hyoKbiqAv7Ffm3ikVYo8SMd4kEtBNbxXNUFGNUGWNej3BVxodQy",
  "key7": "3YYHvNAKSHAX3Td8jKKRtjGkEk2ftnsdrisSHa8FWfzf1LmzkCU1t2LvLVN1RmQtbrTux7uEkWeEguwrRKoqs1MY",
  "key8": "37VAhRkXjTBoU1zKyeYPXTWDe1LD37zZqkGNaXCUaLTBtcqqN443CoSYoBcJrjGB88Asvwp1ScvAKWFqcqAPg5x",
  "key9": "3UF553xe1KpnapmxTHK3igPxfn9L1g7Yvk1GwHat6ST9ZT4f8bbQHFHxHkbDbuY4y4KgjoBvh2ps3e5KqFE9uYqm",
  "key10": "2rWdf56rGXZPM9mHz1FAQSdkdtJo6UFwhsCRpWh65sm4HGjp2S9sDz4QtRp5KTxvXce9uigPKfewfMTfmmFYw87a",
  "key11": "2zde9ofH9L6YgAQzR6HYmgV1QZraaGxQT2QfB77JpeH7o8wdzd2tUqvrjZq6p19P6SuP6KGSjv69TFKTXSN8u7Xs",
  "key12": "26k2GRx1sx8ab7GXfAbwtzQxdM9qriu6L4VgaGK5MS9S2E5D7e8Hm81hwbduCCtqkkWfmmo5ZGbwGK2SWkdkmE5b",
  "key13": "41PxVBSmE6TAKkthaWJ7gcM5H3T1fV8LS5KnqcS5XvRJtHAS9GtAhMSLfER3VyCHETR252u4kvDxM5MGCiq2VQt1",
  "key14": "5DZCwQuSufgNaY6mTX2UHygYTMsmuF5NPQyTDyFSQrqkdYRiGY1SogcbJvCBKbqyHKamAN9F6FMhX98yc8Wx4iQj",
  "key15": "3EV8xD7NLWFDBjsb6R42antEVPKirXxpCS6ZoZmZEsegraoepvf4LsKWiAGjaTUpR7n36S2r1iJQYDTRHdjUf3j",
  "key16": "WZGJhSPvT7RCYqem8r1YFemgHbESukbnfjn4u1AgCvEz74YN14QcZo9DMu41MgPgeR3CbaLNSPtwK8JgpHU6WQm",
  "key17": "2pWBZGfXjiDS7TTeEsEAnTc4HhskqGuH3HbuXTtSyH7fKW5GqQkf65MpCGguAqYNV5DSVjzWmk4UZTLpSHhEDuS5",
  "key18": "4nm4RjZMw2bpFQCPaiyqJuSEAAwvt6ETuNTZnbbRiKq2Uopa7cERFWTSoXWJCJ78LauP7BAeNGsLT246ZtGWvK6B",
  "key19": "4v3vuVmDn94yhaaXotk4W6NJDFEHk2NUR1g4JeiVM5sWEFxxxasiYtrpF1foZWWwaG13FARdAbouMkerKXjZjFN4",
  "key20": "3QahZ6Gwmg83W6sQo4BywwtfVEtYY2hNtZ3zz7zgtHzKmQKndh1mpmbCf7L9u6ivmiJqaYC3znJwzPBDva3Jqi4i",
  "key21": "29vvXDVnL5Pt6kwXr2ok1tpg4knqoWy3PJXwqd8S32XtQ7KkxD3mzWy3J13JmomGWqhkqgt8mvABEWaRVaG2innp",
  "key22": "5nMYchSNMhzpXDvwdwmCNUrSgT4KaVvzyxirBVErFupowY17AX2BzukfZdrdoSW6VRxrQRfcf8yFD9kWyFxMmkXy",
  "key23": "535UHMojpnzHqpLQvwzhx8CYrjEPFEdE6fA9wNYS59oLU4wC5miUyLGqp6TiHuECC4pKraDkXq9ubSk8ugG1eZuk",
  "key24": "4mCpfN4y2tEgtRyCNacQKAFp6f2QCWZSxbpzdGP7Pf3Ye76jTdEZ29A1KPRZbzWyjYzcqf9RGD2tB7GcZsyzi2q7",
  "key25": "Jze3eyCeaiGekAKU7yyzznAK379G3KW5s9DJeauopWYzM7aRYmT5gwLc9rrFpSrfY15RiarHCJzDGDuAfQXApE1",
  "key26": "4eaoRxU3Bvdsc5bDQmMtCMJhibcq6oewp29KS7fFwdyRyVWASBGNGzo3rQmvV1qh5V6CedabEYgNGV4cTmd4TSNJ",
  "key27": "2kJ3HWyCQ8Tds3jT52XoLnJbKEa5NMuv2fX1o9vvBmLcuzfpXSRzdeh8xzP3SYEKGkB8L8rJukFoyVJrYCovhtwS",
  "key28": "4QaUZL9xSZS3UycmjTvf6RKawDTpdduQX1fi9YkwSw6SNq3eQCDoQi3Mw3jcNn1rbQWuznenFE79rwsHGAB3CZP1",
  "key29": "FvdH4p9wgeZpHYAFv9YkBPxthPf2bMD6DfTEKpV8UmZW4ZfDnyribiJRqMsyKFeec6yDBQHFR8rBcW9hqru4qkL",
  "key30": "4VM75AA8YqgxBDViEHmdBq8Mz3nQ6o5j5Nmxord9J4fAesm7rzJZWyuRmmxphwMYnJV3KSE4WEVQbGGLLXxyG18W",
  "key31": "3A7ZiFH8dzQ9jJs8tcdjD2e9KRFWLkRgvnKs7dNknXyC6dQva3q7huhyGYaqYXfDmCjqR9CWJ3u2sCcbSVcdxcLq",
  "key32": "3VTPaxJsSQyYpVwGw9vSZix9PgstAtRZtJ1x1dDQChVMzr1D82NyPtL7wv7RP5QVwB1t1wTCSeWbabFHfUW6DVYj",
  "key33": "5oWHdaMyoWJ3uxAtLZEFpAYsRkmu6mY5Xci4t7gKoxDQEWa7naU75tagQN6hJ38GRB18TqAMLdZtiauyzsQ8fghQ",
  "key34": "PLnqjbk2k1CqQrPRkvKUaYrou8aNJBAC3STsmftVDvugtXUktKPuVU4MA9DUDuFbyLe9dEk1K232cueR2BqfYbY",
  "key35": "33mHzLKGB6UFvT3ci2jMsLnzdDCWCko9JkQuABW34uFD5SwhE1cPsdPrn5CrWrLSRddsCHtUKaTR7a8J9kySyG8H",
  "key36": "25QFSJYCX8sriKFmK1d87tahU38eAcSMCH9pukDSenjuoZG6MquCfKjAyer3pcRKG6uM8KCBjXTrurhKgpN6Muq3",
  "key37": "4MKZvuG4q4nMSdtu6UoL3N83Zd9AWzzUVwN8ygB5uqjkmBVYdp58PRojTrc82XAFj6mbEiwZCena5B4rZKeD1DYE",
  "key38": "2ErzRiPg2sTrRo5j171sAopnam9JcNjtmVGgMK8ve3daxnoyCPh1JsZ1y9n6sSJMMce3oQGS1LEhCUiA1zuhQq7d",
  "key39": "518KeEtS5sEE8vJLL7YUncuTiTGZwdN6tw7Rn22yWLgon7A75CVFuJJ2E58DjTSgDmweJZiZ3uenZ7JPHnaeYUe9",
  "key40": "2LRJpJvbAtQdZdGvf53zBXDiUzKeS8hejRugDipC1An9mbmCJK3vgS5Wfyz2M9JJdDj4vXtiLyHjumzYFR9ZfxsZ",
  "key41": "4SucHH2XTDgt85tDY4X3znGkawWcNywwULzkvXKzCXXAfeGvzSg73JrZpFb6CevuAyy7kr28keFimFcZCYq22Srr",
  "key42": "5q7etEwonK8s27uU641jfsk4U9wQW41BY289ciYFuX9pUUarTktzeQD5kNGv4e6CS4fsED2cqjvMcbp1hw54GkF5",
  "key43": "7NVRaN6Ju7GMaCwWCjk4d3fZ8LChiAJFDKztmC8wwwLGwV3GnNjQAKdi8GovgihgjY4mvBj3tsoasVPaDv21cj2",
  "key44": "2RMwVAbnPUUdhGF1dWYqjmtbGL9NCTrxYvCer53nLzg5Z2PVj34zYZQDnhayQ6CgEkNF1wSX7cEsaP2QsQamYU22",
  "key45": "5eMzUtomTh2Dkn4Nbw3h8aaP7ApkdjMnpacmhm8BwXHmCNkg6tRhUez8Pj5hWP2BcYufnnHgR5se8sDNJoQVfWbf"
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
