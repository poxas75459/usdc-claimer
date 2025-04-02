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
    "4ZabaU4rMS7xh2qY1RB1hKt7cydHDTGuEWzLCRJC6fKFmQRrGJdUdjpGe8jCc4EdaouNe3TDQ51bFFTqYjHYjQUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AknLRiXKsobdnfsw7jWCKxh5x4Z66U5bPxFQnobjVrNzgZiNkwg2KoA6Jkee7mrjrZTVQj5913pk779evXn1y1q",
  "key1": "2z8FfKP3fxTNHor7kyyt8orMhWhvJp8qmXwqSf3fPSTyobcZFbsSipGBb9PzsyQFXbCFJQRfW2kbJcWMzR1t5n25",
  "key2": "1bH6Hwa5bVpJycQXSRiDttGQQydJSHHuWArnhmWwm6fBZyvvGTtGs9ZiQrnX9PMpQnpCSp5azZmD883WAZ8k8uw",
  "key3": "5rpxp6UBPSvsjwSvYkKe4WHajN41eEPPkFQzrMnjudwxpiX13Tz4SJ8SKUKXo4YGxhbbCeeKbfrDNdXGxfPKkxB8",
  "key4": "3Weo2qjAGMwNXB2GyMigp4obdq7xCdCoji5Hd175uSk2QZoUBgvPcK5wteZgk8Rb8i8dYV5wuRYREv3QaW8h8EYf",
  "key5": "2Fj2JQACMG4zXAr3SwavKv9NYTt3ekMtkEGvvp9btaoGWEJbbMq8b1Bed3ju3Rd2Wbvm65YN8g99pZzPFPyqZEpu",
  "key6": "pjYxJdrfA5V8wHGrkg7Tbwi5xcrqAbRwVTvd3RTEffWxWz7GsrTGcUMWTpJwYasySacvmDpEZSZwLUMtgZoQK3w",
  "key7": "21UH3op1KjWGU2dNFVL4297CkXgd3SejDfkVnjey1VGn7aFLm2skUSzkqX8aDhzQKiUMuUuP2jazb9KcfqcetaC7",
  "key8": "AQ469gx1VhBSpj7mVghLLrmi74oapJEUWN8FEMrGdLRxR4hganCC5cJLxTLamT6B8tLu1ub1mfcmGgHgLL3T1E7",
  "key9": "61o2EVZUhqzgaKy6XgTnRHV6GF62yWcRvN2yoTaijzfevLFkqB61ueGG7w4yqYtvoDedBTbaG7S25BEioPPPkTxU",
  "key10": "261xUXhFH3tf19nuGTvb2xBkKrfD7B5r4PFNmwQWjbAi8B61AAeffgcXD8nXsgDhnfGbURwzs5bgdEoBjcFxwMbi",
  "key11": "2dB2xe7UHW4rcqaGmsivCJwF1QhKRCuWLfgKR3Fg2w4EExMXTG5uFDS1dFAvtBuXuvnvncoZnKdo5SKUUjRpgAj4",
  "key12": "2e8JS3WrGPYDZb7Qw73JtCc1rR1ohG8JtR34pJoN1TXeNccVPLPmpFiKp8kYuFq2bjsPaTJgokTm6dbDcJK5FakY",
  "key13": "4xFS6yXMb7RnQ3QQD977ufBn7g1n3Yr6iz1e6eySZRzuwJTGVssLJYCPNAz2jRLQuJaPXkxQcfXKYH2fmTUFYwY3",
  "key14": "3EKzjKVMkhvjmqjSgjdYiL5TeW8XrQ1gEQStWohexymDxmB8bF7xHkcJ4f6y2ef5tBZs4yusbNbB6c6DVQahXLJG",
  "key15": "4CwT3CFAYXMsPccNPkohDJXYWd3P4qXVAzBRGoQX8yybQKpbipWr8pZDS6tbzBYUyyKsDyFf9UsWQJMkqTG4KFpZ",
  "key16": "3QZY2x4cC3Xh21Wqf2tcjvK7PkAxxbmKJjVf5Yn1fHpyn9eCE29eDStHN9xqWeoFreM8rXGGfxJ5GHGgE8W7bhLm",
  "key17": "2Rm72dM4kbZRfAfVKRLCwhn49LMobcW8APyohjEhKZg628JJ8ufs4zTeuBrHx26xEwggLF2KoBVaKgm2AsA11tqQ",
  "key18": "aZcTWMjsTiexk58WhW42yeKNcY9gc83BxAUnAGPfa1nHuZ1f2KdGmUPZV2ZSgb3sqTJ9FtTg3Lh7Gww4TqsNpDk",
  "key19": "4UQGVY1qnfMLmbcEauQukTQRjH3ZSV1sU1H8jgov15H2RUeNqSEeq6nk1q2niDztP9iKQ1vTxhYpMtm2jWxQnWeq",
  "key20": "4Q6jR4MahZ9PkoqiBF2eanv29Eq6QLRxianVusssU6Pq3UmijxCKWUhJDh8unQVFiLnPieUrrbtrTSQe8pSVtUUG",
  "key21": "5Gpkdu1VcNvh4prHKmhbtf1Qk5d9q2cxBWNZyb1Zt2hKgHFTSNUscmybe7NzQe52j648rFcFjyMDSH9Ut3UagSf3",
  "key22": "qRafGw4uNzc9RuCj9Sv91jzc1XHZB6oj68yVxUS51NN7H1HXxP95MU81Jrf1gHmUXvYfdcS5YzEyDMyKN58nxLU",
  "key23": "4mkEMbsCP5p7pnAFgqzWbP6SDZ52tvCCnzzGBhdzsan919rYQnPF4xkk3m6km1waZSXeXKPxz3EqgXhrDW1Y1pnp",
  "key24": "28jN3uzM4iS7WLaicQo3uUEpEu2dH6GRnNh1wbsQ4kdYPG7iun2fGLpmxQU2mFSE9FppsdjQn4dy1SbSparm1J2P",
  "key25": "2CKq7ssHyQS9LRg5qtyhdaERMhPK9txEw4cvkaza1kFtBvV74hGJWTRQqc4HwUjU8f89zmT52h5nhvo9XC7wBzxa",
  "key26": "2P93EosKrgReQZ2CgZJ7KhSicmvUAKjoJ2SfjBCWeUP21E2KJXRA1LTE94n2ApKN4q18nZGHXppZnuJhCzRmjHcF",
  "key27": "2W4wpWqTurdu1gFsF675mk8nJtKb4UmyQoCsfYfemxxMEUcbJpaDFxjPGz9tVMMyLsvPY3hQzbx5ENVu4gmZijzG",
  "key28": "5sEG7mL8PDVMVzKg2YoDK7Ae36Zks8BpVerW1gvxoULTCeJps5aubS7ZvT7Zk8qA541Mn6Bm1cFGjy4uuEoCf4aX",
  "key29": "25gXdiChxQrdRW6TPg4qMm8tWAjo3HBo9EZ7939SzpwufKdTL74b8obutMWofKEpTg61ak4UxNK6TYmShcrPWFaV",
  "key30": "3UGUc27aNLECFNBUyV7GhSkWx5uuS9GbARAwQPXzcGpTEQTgMraFDvZRYrPy9VZpSHqoUq4XbZMMcFPBHAqUigW2",
  "key31": "2x7PZnsXprE9LzvqihNmydvTqyowSRRporjSuvmbESajk4pkNCP5xd7ZTio7E8gh8wiYtS3AXJmuHqq3t5Jwa52k",
  "key32": "4QMmdnn9B67cq2RhsAxmQwvr2tF18jefv7JscyS4EBSdhYS1yr1wTV8spkHqPzhCt6TnS3rUPVDHgrpPQTGsPDK2",
  "key33": "5Eyoxh3NAs8uDYNXW7ziBtdvdmKEjdbbtvyzNbBE814yYoVBBvN1HsjH513n5KFx31Xo6S2G8wiEccCvhioshjNJ",
  "key34": "Mk8DBeMZ3shTNLHYMkPUpu4dfFNwcT3a4C25bFH1GepzwufWbdq72XLATwPsg1PGLo66vDZ2Lyh2Ebic9xdmQrR",
  "key35": "4Sx2v88hNsBFFVmhFACi1EhF8ezsPVAAMiHXyLa5iDrr1fhMZYsKz4sKu2KWUfSKQkdHtp7rvE3yUNitCrLwBhot",
  "key36": "rRWvYs6Y5oh1At7WoLxypk7p6hLQS4JahnMWPMks1gFNtzkcnDPwvyXCqVgnvhw2Cgqmw3A9QAXTn4qtBfy4Pvk",
  "key37": "5SgmLQSHoX8dQrZa76fErB7RSo7G5RQ4o17Ugqir4RNx8jaCJhZsbUyKpwcvQ6XMxgquWsxpGK6AKbk4fop4H1P2"
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
