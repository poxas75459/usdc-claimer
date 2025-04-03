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
    "6583euRsyccUJdAmHt2BH1PLdgYe75Pwjq3NLgfXgG9zqv6NH6Jnim6yYNrbNKXNP5tP4qdgJBrKa2Aqs4n89JHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msuM5kn3GGpWBaSmx6tYouMgPn4QMzF4mhiqzQ418Afu9xdt4hH4yCJ1aY8wPzDCcntZ9omj9txNGbLx8Jzppoh",
  "key1": "2weFVBsV41CYjJpQ3ghi85mDTt6KVuriLcXtLbKriXENtEB39xjMmUT4FWr8UwMihb7DdYKVqP2BJgi9c1oNLZ3F",
  "key2": "42rnEQ46J8gWEoNoto8fJ2FHrfpAjiaa3B54A9B9FwnoB8LNxFgYo69YtpC17Wbp9XTBWdWxAV73vBY1X97EFnd9",
  "key3": "5HS2cHkESXgHpZTDwWMH1ReHYfnTMJJu9Efy7acu1SHfzQzhKDEPJxQo8veDu7LUa9JK5LtTazsVhxR4NSJLBRpH",
  "key4": "3LDwxCLFHVCgkJPUkdiSrNWujFtTf3du6wFaWbkakzB5MtpqDEgRgtVP84CbJptgybRzFdpSW7ZCntuiSgfhDS6m",
  "key5": "ySMLADAQaW4v3dKGcPKGmi4LZgKPSiR1DoZ2EPh97MHkN1bYBSD7Le7hBGw2YHN1tEPnVHGKgW8WRf8YYPZDNZU",
  "key6": "xLY5PRuhZbiVz2xB2nGhDk2L3tcWgofpvvbievo71rtF5fyMKCGscfQujaZ6sBffCBmHz6qdhVQkq3uzE1PzHqx",
  "key7": "4BxnkgWvs82drkkuYChzf8WuCW93JpeyyWwrA9qtzbq9z8goH7x1jh5aWKfj5zzHcL5qRM7QWPL1UQFzKusEFpk9",
  "key8": "2vUGh92LCth5Vw1pAULfFQi99tsqW4ya93zrt9bXzZ1J1Xvh5uKRo6VeFaYr8HTc5gnFxrCzVcxhU2hVwQauqJMo",
  "key9": "5g6TvDbz55diTauFQo4DA3pazbcUtqW3pBFNdJqmeGNkEW9WEuFMT1s5F8HLxBEtM3mvK2r8BfhU19bZegKGUpKV",
  "key10": "T4mPubtiVCSiYRJaN3MWTNnqjh5tuXmHq7J3C41krgPoSdtjEd1nuCPzBF94kH7rNpMtPdV94hMx7xLTF2t66F3",
  "key11": "4dLamzYC3yun1tjaJzZLNWX8VGGRbL3bSRgMf74EGa1NFG4L9h17QvzLsccTycELZQLbXHTaA46QEA9JgTJj4caa",
  "key12": "25YSwr8dJS12WeEcs8s6rkR2odtVdpTS9Vgi9PwUtyuTeJG8KcVpVccZj22gMxmVKExWyoChPgATB3f56Z2NDZjq",
  "key13": "2xDcbmnYvK4kt1vpuv9uHErc8hb9drDaDyqPhfAAW1EaXdsV8XgwPu6TCjdb5NHwoRQCKyohc4pqfucTRCzCfY5q",
  "key14": "V4ou6ihgyMWGDGbfyPEXrzAdi9HM7eVsJMssBsoLbZUcd4WG9CjtbKCPaG1KkCNsZScNWrAMMx7vcwgYckGrB2R",
  "key15": "5U9y3Rr3UQn4qjKDFUa4cwK8PPQf6eYYjzxnUAdrrdGTf1zMqa2KDRx4thkFuz57g5kowYYsQnGAwkmvNcNrNBkK",
  "key16": "4tFLKCCDahsBypBN6F9smHzXjE99dcAHx1CjJhnkEuVdBWcy6ZN7ga3to3K4NFryCWEYzP6xGNCHyYGm4ZRVGf7J",
  "key17": "21mkBGVH6fqvPg3ngSYQFAg3E3rJT4nvZTs3T39v3nDGUhTB4KQPGj4i5NCHGrTyKMy5Efvxms9Bcq7dAEgHDAB8",
  "key18": "44nuh8C23S2VKFxrU143voGre8mc5eT9oWFr3driq3Ezwv8B6AbvDA9zYM5uPFVpj7Wre6q7DE1Vfnik6qojLTXk",
  "key19": "AzdyE7LntV9BDnWQkzdQ3GL1oAUn37Ft22btT4b6cCjBqEhRRT8qsk2tHTMKo5jSSr2ueGvu18AgzMXJDCti5qe",
  "key20": "2cfCGqavJFUvtr8NCKaS1obp16j6b6f6FG4DbVTsspVGJuewrTVGpqf3AbA5FLXHgdi2MHdvuXABSdHpzJ75Sia6",
  "key21": "4PScf1e8akPy3F1694Jxt3e7EZj9jxWg6gCKQKNi6o8cgJhfhTLs3oPnLKzzftzDsWDAZNEnMe4jv95kyrVRH2Xz",
  "key22": "7iUwT48SRTjJ1D2Qc9rU7XnmbtwfcyDUPo4fX9hp75qdrSfeyxKxxBfAESRiKBsP2zFrSih6sRNCkrFddQVLmUZ",
  "key23": "2u3w4n6xKphiH2M7iojmqbL3cnUK9coxhrcXN4SEe5t3qoB1eeT8nzxw4LBGTgmLGHdcE4KD4D27ysMWe2izUPkA",
  "key24": "4myhexijpKzAhe2tjnej18BkRq2oujft6i2jb15UzgReVBNyF65jttn2P9Ygs33Cj8qQt84urwMYAjgyacnK5BLe",
  "key25": "4tQXmoN8CfEN1WRvaANUq3QjaY68LDBrCLw8AhBmzzK9bBwTKf4ftgpb16iF7WFFRb3qkvTTTrkCTnmohhtrGzBa",
  "key26": "5dUsCpUznaKznUgoS4k9yoGFjrAhe1T3RuUb5rwgctdPWa2L7hTecvgxY67QgZbGn5iFBNB4sjekZ1YMxBCNxE7v",
  "key27": "5yBRJDpVAm1ubx1xZv5uwzxg5waDGT2BiBUKWvAx1E7ZS8CYj72VfJGRRAMeYrpV9gjAhiMyFyCnfZEhALKkodPY",
  "key28": "E5y3Yhfb3z6KkkrrojjPiTJJ1SB1yCtN6cRMUiAhKeDDZiWbc23SFe5rGTrDGkeQQXoENeLnsMN4fhRUrxsPFB4",
  "key29": "3sso4umB5NRk3Ryy8R99SaJE59cpYGA2nMJDxm4EwfDTTs6h7F7uw8znxnF39qpjwL6VYFzZKkZNuSrjtc5CskVC",
  "key30": "2RG58gruZwhwrxEp9No1n8YBwxR6zsprKfv7t5U7qz3FVy755vo27EbPin5CT6oaE4zrCthqTuehXRENrQXCoM6r",
  "key31": "4MiETZbKZzWMoLMFUwwgwkHuk45sTCtEVjFQM5MNg9zpXweeqDbSSLXQSfqrbXN8aBiH1yMbSmFsXqdtpv3aqvYL",
  "key32": "5yBu1W6YNLHDVdcdCPEHHtkMCQVw8omCcCzBHu5rJQB1pVWZxrepKq26Gc96qB7Uc1u4FX1Vnxtgr6TyzC2gCYB2",
  "key33": "3XGBCHuCH8r6Gd5UAkBQUZdbd81KK4Hgfkw2wrtyPrw8yCFe6dMfS48ZLQg2FpCR3LExcRXFEPxggYnEJ6yYNyzp",
  "key34": "3jbg67HvbrxYNrwDgga8rFRqVvVEitgotGVdp5cUg96BxWvdPBYNFqJ5YegQC1jXYgJZC2tCj1LwrnFZrEpjVwTb",
  "key35": "51hfHNVGtAdUypmfLeXDS35NSsRqEzepkbLudBrnT2dDiZdT9fxhVvqVA5MhPn4NNXuLRyStnYgRHTjRV2deTKvh",
  "key36": "kdzGmS6e4rg6eBkrhQB2rpZtbue2hAWfPwJXLpKYToLZAbfwU1t9fvekjsSCaPkhxMWF3yieuUp2JgU4EnRoNRD"
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
