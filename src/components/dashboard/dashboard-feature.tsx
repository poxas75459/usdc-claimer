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
    "4GTugJTNMKx2wzb4Fs7obVWezyqWJRg6ibxDbjKs9X7GrfDHaXfPyC9uTaPk4MUrhwjUhs87PqWmFnm5haDQEJLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nSNa3n5xTsxvrd9aPJokjFzih1oNyMZd7D2a5B4QEBjX2SZ3hqkiBBYepRLRhTUqAvFNXo8udntYXxNiopN869m",
  "key1": "4V8NfFXkW5PhZR8MWeaPtqtKoR3eRmDhG3KaA4jL5URJBakcEWvVEy73hY2UJp8Ucs7QyCLboK3X8tLH8jrF48Js",
  "key2": "2h9z8j2RJCPgPUg1csHvAvdonsK3iEELxG9jiwNqyDz29mEemvqRtTb1Y4B4CWehJq7jsTYkhcfgrNemj76KAo5p",
  "key3": "3bJDgLyBbnQm7Qvb15qVZVkkQrJYxg5TjccHfhDbo72u1K9rF79jniSXn1p6kgQDQ7xzuYK7fisFAdmScPQwmCfV",
  "key4": "4oASeHzZEn4ZpMwyZ7py4yr3GF2VcBeg5jSAFWYjanW6xza9vckQLrGF2HHkHvXcFsdSMFWTZWknEaovoZWjTyXD",
  "key5": "HV2MjCVxAWZ2gtK2AY1SRrSVDTjAC23aB6jtRtjzu8gAxYsfVsGFv41JLeAZHhQanSVA75UbdsL5CgP8neA4nyS",
  "key6": "eERRym3D86XqLccYtLUtVjghybJyKM8CcLmL6Vevep4Ty1VuTX258B2JYtZZje35GmnBGxDeHwnobbhS8zbhLcz",
  "key7": "4yWAba46evw89ezqc5Jri61zVddyvW5MC1LLA6Kdsf2NgdapKttxfYNWwm22LNpYjirvuG3SK62GqmpNphmVvVrs",
  "key8": "DYYAepmuGizG8Y98SYZGc7cwpXxKb2V5iK44Gzh3rEozHvuanF4S4xQdQavuufPKwTj7in8VdExC31F3LM41S4F",
  "key9": "4kRuJ53XwG6mqU9ddtNGiHiP3EyrYDXArAT6Q8ijbrDEXhrbifzFN4Gz7vodUY91vqjsbodQtEMXVGYhYStjRTVF",
  "key10": "2XrNkuNm9aW8UaYookL1JEJNfeJyezsCfng5NUiQ1kCTE6cUEzrp7bKGKzNCpoV1YFuCNdR26Ehe738ZWM8GsgoK",
  "key11": "5hxyUExruvYq662y4jaJJB8qL76nV51sPWWdjPNYy5mxdSzyhPVigtfXgh5We9boHyBG97Jdtd2Kpm7vXDkcDDqb",
  "key12": "2S2up7RHTgSb9nGnqpxZbTsCosDgMQZmYWciTes7wDH8CKhoRh9jkzRDgkWa5w2mcXuvyK6UyRUq24TT36LDX2J6",
  "key13": "3eLPYWzcTgnNwmzHvuZp5Lv9LeRuEYJ3AEgaoVbzvhNuAug4KgoyTvLJQ1vo1w5fhbxgSGccXUZGKLpnToyd6R4N",
  "key14": "5ZXbaVt2ziwEp9Tso3ufXj1hL3s9PjYSvsZ7eD2TQwKiVeSGTFvEhiD16b71WSeKQrG1Lmos8MyFTLeJPpR3qVp5",
  "key15": "G76boeGLTincmXxg9c8kNkKKBhid3ZKTV3SpzUHpWXNqTZrwTkb4iLrxjNuApV4YTyxz29pxCvcKdcW2LHqeoKG",
  "key16": "4ibZ1J1E7M3M8C7BEyf6KqsQiK4VfBqgg3GguxTDBd1qToTcKkjmiB98hRPzcce3XvxqW9g9wGFNnrtFsiLgV1L3",
  "key17": "3J9RS6jcMpGLijB6z9WuThKMENejqHscKFDeFDsEzzfUsEdLyuRmxxf7VxgU6PAPPZztJcjM5xenaVB76JStXcBw",
  "key18": "4YtviuY2Y5t3Yai3xk9ZhZho7ekxCAZqKy3Y1M6JSmr2Y2oLT2XXAtFHNZBeR8CmoDubCpeD2dHHpAkQqLis2ywG",
  "key19": "4D255pNwxGi4jCHGLasUmaCqj3h7S6gn6pXEeMoNRq52iFBUBq3MmpdSrm8S5kWHF3qhX4MkCNT1GSh8NJcxavcM",
  "key20": "Bh1m8BpartUzR6EDE5gGhsoSokug8wP7G6fDNLu4g878kRDAjCjtGtqxo1diAvq7qXLzm8mdBjdjTLRFCtmPSmE",
  "key21": "4qaegeb9PX4a3iHeRSNVUAQxqMLTa6VQPogBowoFpgG1dy3GWnjUJnyWBpDGs9DxmkXAk2S1CN3nshGjuvJ4WGLR",
  "key22": "5HiisTgWAikgbJvyrR8eBTq1DH5E6818ppBBoTyEi8dpT3xvUH1w4LCm4tLeoNGvsupTTNiffmVR9nR3dxt3ghHd",
  "key23": "2wa7kVCKBzGQiay3sfrp2oqz3c7CcfTmopvVwH37nLmXpfiFCsSC8mAU95PMT6szDjni7knN8tSoq3PNkgUqWbUy",
  "key24": "2CbCd69gK2NuUgUSUjdzbq5dexqYS1rZVuaoYHwPsjCfozsa5W97FJBxruB9kZV4ZhgZduBsV7rVLHXkBeyoL2bj",
  "key25": "RzXnd84eLyw13yiCfC8oUknG2fSppiBskH6t9r5dgxMNW35UFR9edbCMfBmGMNpLg3bpa1EdgqQEgNmRpd7kwtK",
  "key26": "UmYGyLQvHRJF6e5fw6zDL2TxgjC3HeG4rDqeg4pMffvxMtYxy9P4eqZWGREPBLyJK8CjwJCYNczy5irbeXkJdtk"
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
