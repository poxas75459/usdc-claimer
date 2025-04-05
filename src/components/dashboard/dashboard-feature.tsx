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
    "2wodWSbdAJAP5oFAPwwzvdqQZ91WRrFPCTiuvFSx3EwXSRj7MnDsmhNiR1bg92tVVkwpaNppsV8T2ZEbP6ZdQ9gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBfBjbJKgQyFc3qat84qLYy4pABpGCRpHcGAC9qjSXvY9oK1Pb4qyL6fQ2tRMzCMFE2732zJZnkCJy7XoZLC2zt",
  "key1": "4ZocWjdeSY1f6DGybPnnho4e2Vu4QY4STfAF7mNJ9XioQR7Y5bd4NainnWZaVD1ANvAfY5X7THiZUxtt4JhyidCh",
  "key2": "4zHRVbDRBSVufDWTBcEHWQoSYa16PJahVQdGhu4arnoB3dWQGu1ze673s8ZfgzJtxztBuryFgH8BfTrbm5VqtkBG",
  "key3": "1K3HzGwGabMT1hacy2RADJ4Y13JcwMoh6xQFt4of8aTu1sQC3BsqSXLekhj1AkxXaH8m6BwcPDtKvW1XQhVjTVC",
  "key4": "Z9e5uhdRLqaSt6xbm72VJxJPp8J73MESJC3Z7bCyB3DFrGJYRmRLvQyrvrZreneNtxKCgKqqFCMxHerijrTBpfc",
  "key5": "2kZVHPkMjZSmYNqYu3DDNnPEtS51NBTDFjaso9YcpYm4L1E51wbMxk3qfLqyijtieBfC1am9jt9ecQFe35Eqxb3U",
  "key6": "wVeyna95rt9MnF5GYNV6EK9y3zGhVbdqzC5x7Lorv3pSrYjMAQXK9xjC1z9j7E2LavFafFRaezTDyQ1tYXsDg8b",
  "key7": "ntGzLD9KVxiN5YgY1X7fUnruNk2Rtgk9otYYvhVAeghSp3qUTH3zcrwx7PBdLzbnuBretfGmjMzBxBWShkzx2K7",
  "key8": "5c4RbACxzGSAv2wd9CmxPiUtT9GrMKn6ycoAJiHszv1fZCkdMzScoxLSUmxefDdW8Qyb3H1qpPiDDfoL32UriUAm",
  "key9": "5JdAtEjpKxToXHacpAiJkXeb36GwXkDVsveiCQvJ8ayYd8RS4sEjqVumQUcntwrndwjNGz1Ftowo8wDD1BEbHmcW",
  "key10": "3C3WcMnFPdbV5QsHLVCxEAS2EojSNF4n8CvMGWtpsrVQMhqEhzwSMHD8owzncXEo9FZxwJMKmpfHxRgev8AnVw4L",
  "key11": "3EpGHR72LThPVtfdi3TLvSgcdwHwkLfL5EuirSJBmHys1YmtDLnTDB2w6L7WRPo4HrUnSvgWjqd8w9nd5UBf8sk4",
  "key12": "4yAcbXvypVs67vrc2vicQeHkexwh95AE6tpgExJP2ZachBmR5Pi7jZRNSy68pHVwgCZRdecjewwiVzF55t4Y97DQ",
  "key13": "4wh88RyouooJPuKdF1XnqikEu3iRwZM7sS5fQruef5pjE54JtKgeJ79spaWprdb7mJepZoyLqgZLTARhL8R1gZ2B",
  "key14": "5aYGQsQTxDonyeJis8G876Z8og9qdgqvrpmEZhxWaF6epXHYa7bXiViP4MSwEi6PMe7gS2XRSGhCt3F4yrhjqawR",
  "key15": "3gTmkmFxntm31p1YRgGGWozUxcaujmJeeZZoh2XusEwAmEcV4gfKSoBqU5T52g7fAbpbuJ1yCt48JbVxaMaXXc84",
  "key16": "YZ5ep6tKFcrsPFyt9D4MoPJwyJKoWbHA6wGXquWxQENPafSHYtpEqPJ19C7gbAXMruGKTTJ8P3hhtT9C6tgNns6",
  "key17": "KRdfN9wjonzh5pB64smgLPLSMf1HUpqFcbZbthNT7VoQZN4XWq7GZcT4iVVXRNpE1JtJF747t11mGC1LDFG55uV",
  "key18": "rT6Tw2vUBWfErAKNgPJYF99xuXtL8bLo2me3EYnNhfPis5kv8nFAWvt3WdEUuYAeboUc6bvpewsLYyiYwpcYPuK",
  "key19": "2FhyxKGWf5fcQXpe4fuonpWr4siAym4HdcZ62ZzDdJ3jPGQ1WjqdA6nNwx4WoQCFaGWwGANHJnD1W2xRNS5SUCfM",
  "key20": "5ukTKQvfPdwkSdf9QQPvtRCWmmfwxM6kauTMYXg3rC4JwD86bZpdTbnLcsckyW4anipndyhKMh9KWbBxtRv7iQeB",
  "key21": "3HjswAxzs8JhWwErh4Z9imKGeQeAzYcAyWZJVeSuvbrs2Hm8uWJLYqFdhoBRXVGrJ6EZFV5bu1vhQLCuT8Hfieeg",
  "key22": "336bGJDDitEuA7R2UCczQPwgE2zMVjUfUFZEErDvsuph4e81EKzo9M1idS5jsB1qymJRm4dMZerm46wPBdVnm276",
  "key23": "3VdHPrkeJb47ENcLy4mPs8DPh45XvZUUYdtEx1B5vnt3C6R5nc9CvYJRVEKn2ytDbYBgrNgUviWphwvXkPBebGiw",
  "key24": "4NtfK516xS5SC2VDXUdj6aY4CurgTqmcmjMJY2whuLS68BZhuNLxQrCnecNwciFDwK9URDwaWXEHFQjTawTqy3ru",
  "key25": "waQjJtrBpdmsASmbGZ9hnPgL2g7GUmu6EPuJWmBhxs74MaRe5Lkew2Gv38p55q3RxQqQyFgAyPK3vxUvXcA3Dca",
  "key26": "Me8nPfDa4N4eVGPhddZuY5syzi8NATcMcskfETLH8y9GUDNW4UoSXLP86qyosDMddXfLa8We7teCqdj3YG6xHYu",
  "key27": "3BhCiPYAy8dUjoGoX32EHw9C8zsMntyAy6bzLotQdmhQYADPKNs9K5P9wTfGaYapCmhTe4ANSneh4VoFX1DrcFaM",
  "key28": "4o95LDcog3gEiHNnUbJCVGTgaNFZsei5WTxeccEtfmQtb239ooaS3Qfrt1j6FZcazHQgmHXWubosgr4BKdQYvBAj",
  "key29": "3uS45u9L2eUoKfdFzAcoq4Q7WEnE7AUNvhTSczUVYhjUXsciHdPYbtAnucfdUnr55xbu8RZ3j23Jgfj7dRJMnwur",
  "key30": "kVRxttVD8Fy3ySkkhysAz25Zi4g94vPS83RJ9iqMwaXHiaSrpWxzrkAv1DwCViTp4SZJxfVVfySPtVtnKL4KCCR",
  "key31": "2SrQqmcZAJgpnAjAUp9KmT9pVUV6t423fxQGwzbZkhsKzpbP5wshg68R4uVpv1oen89NysSui1Vw8s2om1Fpfrw3",
  "key32": "5RHxu65zEDWgjMX58isW3uWk9Gj49BYRi8oJYgBjShcQViVKyAsJS7FguDuzEUiChUMW12SNWJWjskXNLejFdmcW",
  "key33": "2oCJtcHfo7WbnVG9VFNbMJ5r68vnH1ze3c5ZAczmvcvSSo43W6119G9LByFvk4Psj1NyWN42wY94tkKbyiqnAXPB",
  "key34": "EawEUxJfgf9o3BdnzCToqCKdtoA7jXa7nErKon5QmNZfXRtXPh5b2GxszjmMqBfQYEnJcQSwfsJhEsEDuoLRRZW",
  "key35": "ZuLs1k8zjPLZrfoDUy5uysehfcEtQJtGbhMMEsftv85zQSVV786KnYCuxah7jDwskDrTUwEPnjv8mCpgoKbvFu3",
  "key36": "47Zx4mA9P4EvExf8biJNxM3shzFUa3MDE6eUr8ZshwLxkedTq9pz1aKRypfQr5tHkE5ji6KpEpdzdXi9gNYGXHyh",
  "key37": "4Ypmn5UBA3PbpRszzJmvj3wvSMh2Lhn6zm38w7mnGDj98mr6aeLFsvVFSacW9YGP7f6arXYxaRd6uyiJmv1hMfuY",
  "key38": "fSvYrpnxxaMagFbJNWTHzZVjR2HpeGqBJC1kar8AFjGG8zPiZtKD9a5QmimbC4zLpxcUFkB9GU1t3G14Badzi7Q",
  "key39": "CAhvhnYSaCvYHgX113vcttbkjkhv6MmzSCczLb71AmkV2czWrkonfYsqodEAuYgNyiDg9cGvifKGPWps33oBjC4"
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
