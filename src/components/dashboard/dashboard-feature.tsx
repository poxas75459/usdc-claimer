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
    "2vo49yg5V2v4iU81tm3nhUQzTabWozwgRYa7m2ZLzDJ85ksnmvZskJsbZPTNYdP6kHpBRWn4eUedHEV3vd9CVhws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SGbZqfgQUH3w7EJYPMjALrgQ6B8mnLEiCS32isK27s1Q3WgjUvytQ6q4vUmFGa4HrSUS3ZydgitQuRiA5PTppLi",
  "key1": "37onqUhXDLzfhDk2FVUnVsiaj8fXbvnbZ3EAxG34WydcMN8PnQN5CxZdJq3ep7bmdYCcU45mFP2GcQSSpj5JcKsL",
  "key2": "QrXudpfSGjg1x5kDvMBLa9kDLMw6cYLTefgCCkw1oCqF2ZGA89Jhd3WPafvcBHVrywf1FuSJ8KK1U8U653Xj3kS",
  "key3": "q4THU8RJnocemdZ2FcctwPCA5Rr8G1VJSBjqw3gzgBhpi4tHMMn2qrm5NcW4ACb7TeM8TfsPpMdYW5f3QPSqZCJ",
  "key4": "5KikaGmkQ1kjnDj7d1nPtQtJJ6f4uTLSqLUFjM6ypi8Qj4Wa3oAgzbm6ivhyWtc1zBaeauptR2E2LHS2L9Ma6Ad4",
  "key5": "5cCQgAYyrJ8cjAn1mzKVtvKL49PwmD5C695LVBCWMSWeKAy6PyaQ1Vix3RcVaZ13uj4BfksTcuyFDyMz7XxtotsF",
  "key6": "2eLLANwevTLkyS5FNnm3cBbxqgj8ZbYrSBzuij6CArGgLDB4XGDxzCFGhBHnxvtv3rpidVTrTBLSBWMZK33xfbHx",
  "key7": "5ME85y8kXpwhpSATKPCnYqpiNSVCipgmQLruo23RzvHKNDTCHfJVsEp714Y46jzqruZ6KUo8UTfBHDnXC1Tca2EC",
  "key8": "3Tf9BHGmbUsqpzF2Xfb9BAaWiiA2xYUfp1doD1TwtqyQF2fNWL3mCzVAdLVWAwnfVjS1iKHC66An7MgSfrq6TF5w",
  "key9": "5z9oShshfqQjSY9JTsPAk4xTh59CYm7er679MDKtG8KB9tM1VRPRp1AGz98r16vyGVWmrHpw5qFFbjm5USfWirE4",
  "key10": "2GkLKNM6SpJ8adWBBC5PjpuehPKohr7QCvnhGpWSwqJrYr9Dc3g1ndvbT3yCuiQFZWD541Hx6GdUw77djymjgNut",
  "key11": "4YjBmkhS6Hec3PeXA24hsSE9zybHXwLHqvNtNGtKMLXbQL9AKjZgW2GFQwi4WKQvEwmPziudk8zdp5uoSTuBdrsA",
  "key12": "4utuHzvvwoxDhzMotdzwnVm2qtJzsw2ixWyt9CUsiq6nEBGS1PJc84fcbnhiCa4FZngbRAqt7FJ3PhYMSXtUgBE8",
  "key13": "5HJ8D4cDhB4BZc5jF1DvzjnoEz6oCe1wjbqWLtEqQRX18PVT5S8HRQKWZKqhZfWvguwLQtwq9hWqpZeYhTWsG8oJ",
  "key14": "5iLhBpR49pBV7kdA1PkwA91MHh8ecW9G5u3ZSzjuGSbUXhFWWqBeuNTvRjH1cs5992BucDNciyu8GGHhM7WUcdnx",
  "key15": "3AQTqwD3X5p6txro6yZCbriYfFjow8Wveqk56pTSuT88bKqy8KRYNFGGaKcjXJ5PyWAEpwqUvuSuoLaG9gvS59mt",
  "key16": "39EfShhhptnXLb5GE67e5Q91vZ3GDHcY3W25ksLdDmEjW1DSbQgv3zKYHC1Wzj7sZ2T9qdHSSS1jbRB6n3NG3Q9z",
  "key17": "27ztfSGmhoax13gYqXHSbQMoKJA6nDd974TersVLLqmMBnMVKH8yWqoy5DS2WME8sU4W6AoGFSBRzMyr9L651YLF",
  "key18": "4acDNfwmLqJWaPsyt67q2XeYWhPxTPtxGkn8DvUPv7yZpkUqEpsguiyDdro4ZTQzKoE8nycgYR7T86uwKaNPiqKH",
  "key19": "46DewSooBzq5xUYnLgzkpDUt52x9NFnPjJD1DTiH9BBn1AayquJqwFgQQPkLsSYoz2X9LrZ164Y2CbSx59nZaovH",
  "key20": "2N9HLwJ59qb9EpuM5TebDJcWJ27CZysveRvRC2rgmDh4fqRaPyqnZmdMb7rZVWMGGWtwikHqfbtoVRAnsbHj1NrK",
  "key21": "3vE1TWaGSxCWLP7B61t8ZmXKEBZggsYjrUuuGs88KYFjYyc7xrqTvYHHsizdAobnD3YsPt1eVtzsamFUPfiu5qpC",
  "key22": "597L2pBNjnjLjHmTaEeDA6CYNCQE3P6PFfqExRxxeSKaNAWMkjM7NZKVkakbRFa8k9U9m4avirB8YBK1bspjKTXQ",
  "key23": "oZGr79fnCB3BEa83DTrXBpwW2YEriwTqs5edRkCzG4kqHRvCfV8LodWeprVjiqCuDb6ZqxKteLUY49fQWwr2ueS",
  "key24": "Sa2ozxZabFSDgcYoSByWtZDiy9BwWUifmPiDXcaYGa9d6YXXhG6PEbQn1JyCbL3RCTNaxUrrYC16f55JmJWrhef",
  "key25": "553fcoBqRbpiAG3oatDvqJgCztCSFmkb8H87efPHDZFKXZ1gbrtthD9pvSuuvghgc4Kit2ToLLhq2MrtuMNQjJwL",
  "key26": "nQu6RPnGVWLFc4zZPuUY3G88swTSUBd8cp79nSLf3Da7k6H7NsUkDkMTJXbdLiUDtjZRHFy98RWN8jSq2wKCR4c",
  "key27": "4WoNJjmGCeiZefTusu3ZbpMb3ZTLasUGqjG3z8eYXhyUVBuvVVubEoE8nzLZhpheTYejKYwojXB2RBv86eJLWrFH",
  "key28": "61BnR6CDb4HSbSMcYyBZku9VdWxDdNQk4YxwTUeJf38G9x6t4cAYpj4dNvpbmhHeCydYdnzjLdtyhgC29Axm67jd",
  "key29": "xdbaSvotqK3dXprEGxKMPdJhegL5LApYCxCHRW6ZinPaS8CLdShJyFPQpsneRM6szmxd1S81v61GbqaLGg9Yc6L",
  "key30": "3cRYK87D1wjPwmFHobYVcXZ6hXe13xmPLT4ehXYkkMg7VpxZxKYQhBtLYRvYQGUkXL1szREiTbKGH2Dc7gnohDUa",
  "key31": "2p3PLtdFKG3pnARJwA3FfY5jZG12EZy6N1R34iRASJyX3gwfv6XhGJR94TgkTyH3UHBFCT4aH3w91rM2SW6vfTe8",
  "key32": "aryZ5NVEuteKsaaxxC1n97ZjvsZiwrrDQ2ezJnyhWT9MRBphmbcmaUvNz1u4oVUikx6amniV73ZsEKSvZaRSdcf",
  "key33": "3AHD3FKE78pahR5nYtDNfZfLPD2Fr6xSCPxhmdK3u7a9mLcQM4Sgk4XcweMAAW97RyeADTJTvTiiSRuprrsN69WR",
  "key34": "5ma1XqT4hPGQs59Lr6CLvT7SizspSfgncj3Hp3mxu3CXBRtP12487B3rjHhh81Z2ktQxAVPwPt6G8mbpKirBTrqM"
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
