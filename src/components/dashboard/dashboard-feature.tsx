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
    "5hLgj1Vfj2Q8urbtExN9zdePLBPxvnyfawagxJfviraUJrHG5tFbD9FG6y5CRFsQy3oCz2KtpyY82j7wYsaPcchV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9EkhTAXJFQhtCtgQfLFVVYLio11n7mbTV59ZTpiWgXrGx8kQQN8npcUr2LDmLBVDeGAeyXr6u6i5km9h8fbYYA",
  "key1": "4435LLTT2BY5hQkZb12LGVDnbQJ8vsVaeN8RuGF8RQ6RmSXUD4m7qkUjrLEDKVvppFXUZewG1PtezQWAWy7nyZ4n",
  "key2": "5qnpDWHdfuHdQim4ty8oJ6qCVmzCt3EUBe4qpFeTJgBZoL6g9zeY16XRsKknzNcQfuvae8wTcWrfDCCgQfN4vfCW",
  "key3": "48AtYjpzouWdcF1kw8WW52p5cskxTnb21qG9fUKvKtJEtLy42MH8sjzfc8SNfo4dXH1xpybDLdQdKLgvLR3bXGAx",
  "key4": "7XugZygvYhrkBqyAEqEanZFwKm5EcrAXEtjfhiJDJWHaA1CgGBr6TkRcHqDzipSfVyviCW32tYtpocPKFkZpb6r",
  "key5": "4ACnSVAp3ZqmZTM8RwjD5Z2J47cQst9MxnQgktGRKu4YVnf7wZXqYzxXf2U7wh214bKFPckwCRXeGHW8zrRPncbo",
  "key6": "5GDA3KZzFhofGuKApwSys6nmihM4pZC4QPnWw4fzwrBuj1ftJDusEToYch6yjd1rJ4EBTDevyfgw3vjFBebiXggd",
  "key7": "z7SQ7Duq33px1Y9HRCT9FvTM4FrvFBM5jKR8CCqssKVsjFkbMEUF11cE1EAz9E8QVwVNqCeS2Sj17Bsufdq8fj9",
  "key8": "4RdQf9LhNTXyBqSU4uggtXdgtKQbvVQihX95EZ4m2BREsvC3bk2867Z96StUzkQgCfEb1c6keMTPGWyCNkZG6Nkj",
  "key9": "2V4opwxXrVjpHE9fUexs383xR3StNqR8F81myNN11REiaJV6q5PEf1xKVpH4KNvAhnrwA8ZPmPUQD2rReCirp6nC",
  "key10": "3zRcVpbRGWMjuAsiZgKhKb5kJzj9x7ngFNmweFLDY28fgRRL7ECeP1FRUhFU1NqoJqkw2b1DuX7ZHftoweLdrKqe",
  "key11": "3YH6VntKtidfPxk1YBZ8EC4rmm9gUtHrqywFxAJFkqRnzQ54hczAjvpjfSSKC8qfLY2Xx7sn26LdUfqFLjEr4zsu",
  "key12": "2pXtEV98dYAgSRCZJcEzvbUVUFv7xesC2mkSstQBMJCCo7D8f1mBj9orPNoDNhr1Mmmfo3L9jSoxHN6NhwTtTkEA",
  "key13": "3mxyLf15NSgoSoQukREXLnQ5xc8FaP3NAocm77AsZ2ZMzpbTRuuneuAUiD2kWq6Uq64GTcJVLR99bioQ9nXUzQbu",
  "key14": "4UFH3uBLBZ4yrcPtiJcTzci5VzEsCKrbFNAdHafHb8R19c6gRGqFr9U9o7Sin1RZnzDBUBJ214FhXarnfvGWG9fG",
  "key15": "37KHx76J13ZrCXRdHTY8hyEeaT1B1FPwo2AL3KNRZcv2d2uVDKJQhjnDXB3KNapsixzyBLxfTdHTFXf1gM8GnXr7",
  "key16": "3wnLx1GdAycfH7Pfwe2x5kvqoeCXBWmfQs31DXxmwzhpq1wpm6g4xzhjEcKqQefexcm91qAWy2gEa2dSJ7bwMDda",
  "key17": "2QMqFE1XniewZLFQZhks9UdFxAjcdLFKMmumU1AzfUoYgeU2fxMPZ2MDx2zYu9SjTpwfEuDX4oHfHs2udsJshsEa",
  "key18": "5UJtPaRw9u8Du7Fc5bRA6djHS4EtoU4iC1kW3tLLh3UzDRXG1EA6EAZTBsQvEVNySH6CGDTH59o2aubnqD8kpGko",
  "key19": "4EeDZewMT5PybBU42KpGTHuv6nRA6Yt5k7vHJGK72u7z1Tb7KQHBxwcYQDxPyVoBJbHNrsGs93HDprbkSu32wM8p",
  "key20": "5dcxnDhAquk5Hxt6kLdaz3UntMKSZ9H7DAzUoKMjHQAoT14JhXANDXLbzcQrYia3yaDvTdpCwGsn1vFM9HZX8xUL",
  "key21": "W2agqCm4CZFM4UBdPVZn362SB4i8qWHFc8NCxTL2Dk1p9tBi5rfGBZGv3nTFmm3s8rWiUNWBmV7VsGu8RJuZ9HF",
  "key22": "64Zp5pxDrdDQccfH9jDHtV38wq5yq51NTaT813ybSSV1nNqXXqWmtzvV3BCr8veKrgyQtGjDsHmgjTDMPGYHbYq",
  "key23": "2kF1a3PMFxDf1gmFAipPGpD3dyeDD93CoqjKu1dJR5cLS3fHbd3iEkwbm9AQPndrXDmQC2EPYYBPRnkTXxJpUfZ1",
  "key24": "36PhBFosCPb3W4bjr5X7aj59fBfvF8dZWx3v1mvT8QoNsy1EuYV8r5MmMfQUkHuMKEufcRkmqyeiEwBbYiifWqhH",
  "key25": "3mGo91Wf5V5EvM5TMjoE1wwgQagCT3fzvZDvuMDQVrKo1Dk3Zt4M5oTHsz5JxBhYLTNvLt2RaNvC5m8xPSqnCNCV",
  "key26": "4Dr67tJUj5Jk5fSW9738k7YUTGu5Kfp3SZB5i2ucxrwxgdoco6BQQ12LPifUwxDua56nTiKKcm4169Bn6SBLCYpQ",
  "key27": "2m9LRhT5g3B315HVGHWBcBYfz9RqbJm2BCArvEEUSCoPgtixqbZgprkugrEXPdd98EcPDKhzQP3Phu1PwNDsZvzK",
  "key28": "4FM4Si3NUo3FadKJHCY13PohyTbm2JBXMNEj2HCXGwcySQtQM7YpRXRiU7hjXw3NJVsURGJxBtHB1Hk6goYTVLLY",
  "key29": "Upg48VR1HjmJ45UCuhFdBn2EmYP8ZqmFJJY5pWigwJT7rjjtRbZAduZg6NSCLEaSFqVr4oRdx2hFZSbtYuGnzUb",
  "key30": "48iU3yYyiKHfEEWURKANN7fvsUifoiKdX323oXs8FcsrwwEuPHkxFQXVcvcf8fPYw2W81CSMQvtBDy8RF2ef2nfy",
  "key31": "2EDZSJCkueY1RhmEMGcvGGSwiMXZ6jt4DF8k6kn5cLVsDoKwx5UFHkQdWXZXLr3LnwSe186CYe4a7tR89yzrZ43D",
  "key32": "8ZhWbY9SuY2eeDLxmYdyJnPk59njKT85SPdnh6YFj5mJFrvha5SGEgEV6sbYx2JiqxMqpxPsve6FqCk2oiEzJQN",
  "key33": "PddaiqP6V6xp46miMCagqsKFhwaQjv1fYi7c7G3gC2HQmbM2nsWa4MRvswQvsBZd8AZ4TTBjtv6jmAfH1BJ5ZfJ",
  "key34": "3cFdMa2yNGrAeRWp3ERUgTxfh9xi1X21FaiQViU876tXsvt9idxToF8D6kt1CQZ76dKVScp31VBGo4ErSYYzvdtV",
  "key35": "2ZMb1NYf2V1aKudXHLAat57htHMsNpSMmodQtqwT5Xry2EknqvWaYj5W2WYK8Ryq5EeEgdZwUEciob1h2PuBer3x",
  "key36": "5vT7YXBbgVFWoRz4wtJbYUFEX8nooBEHUeAD1uG72NPgcGp1DdtZJCjiKBahXUprmEzUk3nCNWF5L9uFBUc5hBu4",
  "key37": "4M1jgqNpx5DKh6phoia2g6icgbz9AKxaJKRoYUg447ieJycvfaRHMqxmMcDtUh7LXxazyvwq1ybHjfy9pMoHVt1t",
  "key38": "BtgfMLm1VpsveKCzTAP2Y8hBmLB9hMuZGS7wvaKtiXS6D8DcM8UHB3sB5fySnnv6NaUGSEKuHJTCghLQo6pBRTM",
  "key39": "2N3Gvf1XE2a3YTTwaJyKvunLyJr1xR6VrXC4FN87CgkFYdA3EBX5bvmNremvc7k1kJE5bg7nfFqTPkmaRzvBTsDR",
  "key40": "21U9fousufG9UHWnkcDfCT3RcZNXihBRfMf7L18imX4amdK1XsnngkvJtnpvZswD4bauFg5bGD6pnPAq7zUaCXPX",
  "key41": "3nxcTqhMg5kGTdQzQz6AUUYQKBCNewGYRbYuk8EAqECamC3FwsrPEoLG2g6z9yFCkTCWCnB2tk8o5jgZMAGWdbAS",
  "key42": "5raXykptbrDPhDBcuc7FVoCCUn8CBE6HYq8qZTYBEJYbCC6CYKNqTwHzySUGt9mEFTRX1jaK67CBA2wRLFZA2LVt",
  "key43": "4tjPcXn9gvn2WaFYz1ntW1EtqAVje2biyQv2qwQ4ahEaJitodkVCsdJrStfBTkQhBRKhnWnHX5ELNwzdd8PEMfCD",
  "key44": "3Atjcx8hKXvfxRixVS8dXyuuvUNs7jyp7sCqqW4XkDK1ntTQ3eKBtiitWde4xrRZguYsMiStty3dKgM5op16D2Th",
  "key45": "3b4Hh68dskv2ZhcHbSDs2FpiTdopTN9FVuyXo1ER5Z6ru5VEnZ91Pe4qzstbTnbbKmtSRFYyjt3rGbHoCu77LETy",
  "key46": "3JXfJQDbvZ2DGtr2wymGtwLfcfMGBVW864ZgMzALDLwRqLj82Ec5heZErz4ScNqwimNx8SemLQsTM6WA9swbezRR"
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
