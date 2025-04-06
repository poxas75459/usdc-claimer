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
    "TXrGmZapzWveDcnCxsCmLdWSX2Kc14VSHmr7PumJLmC3xaFAnZh7H261EDmui5KSSwVjQH8m7P9Zkv9uf1VCVz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VLRAxpKwh2edc8r2SHLtU94eC9DApFFahtGu9qsH8ggMvLkxAqrfzkUJoH2nLfBJFcDdV9q21ybTusekdgJTXCs",
  "key1": "5pMiXiwYcfMRJRyAYcnJFrkanFJFZcGAR2Mqau4bCFWxt5tpKd7EfUMuACZfB5TVez7NWd9jWjsHY2GAkc1QiW3N",
  "key2": "5bEtRVhdkYpNayWUsfGJWX2goeSeqJ4cq94P9CkMDdEnmFAarDRghBt9MRiFZDNPSNEow4pvWXcQrWh32FCV8NxN",
  "key3": "4uiXvUVNTUkgjAxQahMVNtGycromCFXGszn7vZWkZ7ZwhCvnsTs6RHydzZ1wdRLVJzfPgQjEaE4M38mMzPfUtgkJ",
  "key4": "3qPgoVHSfSNr29hNp2B4kHpcg3bhhY6cRCoy2DTAuBcVDcKV2dVWkZPu4nLVjQyL2Nugsak8jvAdW6GBni42LvBF",
  "key5": "2PoSme2ArAvWVXFjChjNQ2yTgVPR9ANdVAmZFNvcuhqgHhYj2iBtq1EGjbWntS3Lo29EPu3BbWwweZgtDqcJFp6M",
  "key6": "6536fMGkRJ7dov4VNLMY7jwGk1s7sFgJYJKaAxCxP59N5jDSwnNfXu8Fj6k7outc5ukSjTBSWwK2euna6CpcqDPF",
  "key7": "4yfSgzJkK5FxipibW8UA4fseE9n4QTGEtExetuhm7pLMhUbRVW23iV3ELz35wwXtq5AxDysL57YHYnteWFU6L9SJ",
  "key8": "4bCSJGop66v2sAT8odPvn6DtpNSbyJzjZiPnbamgEmp3gyFNMKxT8g5KWMtbb9Sbmwh246tLuBjaZUqbG8j9AGtc",
  "key9": "5Ppa7ZbS3GyRiorYX6NoTPPmNaTxvdYBR6zMp5HrrajETrTgTXwtDud8ksoczJAGQNQhyV8NdL6UPn99rda84rhv",
  "key10": "F6s4kNueeCSDCPxaYR9dBQR7sHP3nVSkPkDdRxxydCtMyHzbupJjYPEmh2ENDzx1qn33fxAhTNDVyBx4t5Ef957",
  "key11": "2QxEgho72dj38UFZdqymFH1cyiM4siwJCt4w4xX9ouVhFM2fziFr1BSoHvKcZF9eoMhW1tgPwyp16kqCxWF8knbK",
  "key12": "4FjZL45qBTxjVsVku9JBcxfn2E3hkHBT8mcoCsrHbrsm4ueospKu4Y8Pu25uXFnSF8cee7DyPcsvCwphgYf7XJq1",
  "key13": "23FLkNMvV8L1K4UWUJHmjM9Zf6jez3pKevzVtXA9uyqDQqxR5vvaW2uLMNtXhYSiXuAq7Y3xZW3VmENS7WZb4WRB",
  "key14": "3f2Ktv8Egsv6jFGrrDdUX18Kkr7sKjCgyJxQEMjtRP8NJV3baLkR2w46zJhii6NxvPTWRjPtmLeVB6sXQVom3G2S",
  "key15": "3ZE8HnQuP9LmAXR5TF15qh7fXSE9dpA4LMddcjcV18wLQ2u83WWmWR6CaLysGAq4zFw1qVKFoaWhM8M7bpuoQjMQ",
  "key16": "BWW11uqNQZwkuRyP6hLzLGMZRcVsUkdtgbGsbddg8EykAZbyZdsj9tt3ba8aUJYJ7RnK3tdQK6P6B1b5aRwmemh",
  "key17": "KR5MTMfJ68eu7VBRX1NsaDxDpHpkckgDVMGVmFA8KQY67k9WjKq2YjVhakMY4vvfvifS5RFSMx78oGwMt7bse4p",
  "key18": "4Uj2mG41Xw1uZG5EbZsHff5rYDcrehBcVXrL8Vt16AFp8miqs5QuWxdsXo6vPKDG4A2h6tHVTdWvKVVrto73zNdd",
  "key19": "3uRKPoEzqqaXadDtQMaYBjFVHjfsbfuiJyDutepUrG885qgnZRbTGtmUSpK3cGDPiqb2MU7k9PKuwo3KKnhZCvFa",
  "key20": "2q2h6kZXRd4hcsZBxGjPSEN2XrcLi1pRvQwDW7GhVMiujiLwinGtXSU6nYtiMRwTpZvrPKFztsgfmJttD2hGPgeN",
  "key21": "4K463oPgEQF7vXXw9JDqdYW14C6EV1Z8GtUnT4pwt5omjmDqPw1RhC6YzWhSRVsceaVYiFH2mQG8aVCVbcdjAuxT",
  "key22": "5btfS4v1iQbVpi43xgG7eHo8tRhNHrzmPhkGTtjTdyFpyrBPScGfzsiJDda9L8p12GiLdbTr9DNLh7ouZNEDqoKW",
  "key23": "64GdWN2fPgXx82SpTRzF6KrUWnvMj3HXnDehKxrwDe3GL398p4qDBG6bircYo4jkpyNPi51hyP5EewVpguxKwo76",
  "key24": "4xTZXdn29rxrWmfirrUuK7QsXgGApjTRjPpFfyS5htGegDNpQHdyqKdRDaZrQdQw59Bq6TvscC7BADeeftqqQe2C",
  "key25": "dmCoWkwgwumNBkt4cPqJStJE4eR6GP4vhjhBGnLii5kVdTu64TT6UvRr4ve774maXDtPVk8VkLrbHc9rmYrn1Fi",
  "key26": "2zpHUL63FpHvg7ontXdSjkWsP8JssaRetBnxzKSDP2GoqbycKc3qCG4LzSpXW1izHHGdajya4hKqbTcEfpxqdhKM",
  "key27": "bPssiVgKDvHXtB5hzyyDPVysnmXqhXGUdiXBUn45BF6dTztkHTxb5LHxcvSBQuSciH5danCkTGHHcwJaoLmuC3F",
  "key28": "2DAxLxSKWf5ToLP4JreFE7VrsQ8h3fg6e8xPXeZJ4zeMyevxqYqnL4RxduMFpaUT5HpusXXm1NjaThnwpq8egqWt",
  "key29": "D8FXLtqajU2nWfxjBgaku5934nR2TCNTk4bzs9gNLLsRte27FfaVuMBfyHcX51jHjTFWmhgM6p9sWvas66isxn7",
  "key30": "4DLwhCtHZGVoUAvBmYuhtWDqr3LLuGBKpECpPzdzEbpWvNKfuwtcurEBTzZfUTfQg9kZCuC1E6Lyyw3nRCuiWx8y",
  "key31": "2bk8Lsozqf3DhXRohgYwGu26182oUSYAJQhpbMHh1jpiJYdF8qaYY53r3ary5oJmCRAjSK6CKCubaSCDJiTK3oEG",
  "key32": "2M22vFcaUduD6HWCokvTpVYCuyQPCcgr2oY7dFrSYdvjpeRWVVLaG9j9RL6f92j43BfgXZcYZCzDFkCepRkDimyL",
  "key33": "3oC3XyveSPBEEZangesUk1Mp3EhrPYWRr58BNfcgEVoszd5ppAJH9129KXPJs1UMtqGmZPhbURPNPbSk9vofzEpk",
  "key34": "DbhmfWgEL7pSN4xESiekyhCkSDLdmun8EVS3jMz2t9xvNKiJjwwsomwAzGJRuCA4fcxtC4jgha2KVYZ24mkxR8N"
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
