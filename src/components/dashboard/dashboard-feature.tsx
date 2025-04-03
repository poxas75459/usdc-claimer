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
    "5miHhQR4xeHCahE4oitPMxwDum1oEbeZVhDabJPCmAasfKFaWrTMxxe8BzNDX7adgPcV81uUM81Dp8BDAJdiMdzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xbt8VMsStofgG68tT9LdkHcoNUhwYxmTUYSMh7CRrrd1yGPKm5aGo1cLc4szrpBK2qDR42eAXgGBBxKoxWCh3Fq",
  "key1": "2fL3WwX4anEzARUyCJRWsFmPZgSpvcwcRBMW5ta4kaHjRZ6eSjT7XFNqM5EuZrSWaPDrmvc1q6d4T1bwgmNcLPBc",
  "key2": "2eHYdCtBw5rEHZLgyehZnoUNMJ9yA6rq7eiEewNt7Pz7EBKZZVWUfxCtgvSBRa6pAnGgkpD318DvcU6j6NuN317w",
  "key3": "3csnt3Z1jF121zefbsq1KCsopjAAL6VbKVF9sXVEA9evj4dhXR6t2g78oM2YqBPvz9V1rLGFboZLvT1xvqPPgueV",
  "key4": "5Rry7TA9wpUb7UGebB8APFwSfYBGWVcrceu88BpmH1VC9AALrrLdi9hXuNnASDmD2DidnENN2LCeehzS4L7yV1tG",
  "key5": "i2MMq2Vg9tGRp6E3UoY5wJZGQ9BLX8bdquye5EHtjE2SuAE3K7uSy6rY39twWqhyuczdrkCs4uhqpfE3id4jJvb",
  "key6": "7ixDkMCsN7n6NS31VyVgqEM87N8NUJjL4nDQG4eDemEQRbdoyrQFnZk95vky7hr9Dn2js17CtUtbfejcqhHgvdz",
  "key7": "5MRWvMvPcpcgPS1oiUEa8VrupEhBv8N2gNZbRRCQs6ojPDmEnzQkLDFPRQu3p211yfmSQN7eSzy36tDHCti7EWrN",
  "key8": "2VYCpfrL2di2NFA4n9gfLT1avMJHYkoKfe9eicaEDUE2t7RMbg5p6ivzc7XMtxBhSMKTD4Q8XrNJEFRXfTiz81GA",
  "key9": "5KYqGn6CNHy6q3dFaRx2vocFKbSPnejymFvKzfhHAgk96P7DjVVqMgKa2NeQCB47ySssnVAejWbYyJmiqJqE2ZfM",
  "key10": "3b4oJRnSufMb1B1R5Wm39xqiroML3Cgx2tGuJwe8RvfH8XTAb1fAUMPdeqTcTXXTa2Rzp11MRByLKXdHcCtvzcnv",
  "key11": "29TLAUeuFYTHo8HzBq3TfAYZ2HbJBreQC5ekBkT6hjsAc5N3KJ1dyKJLWqpxJKrpPrMErDRFk5HhThdKJxKnUT27",
  "key12": "5JCkThcmLVekH6mfcfnaEikngD3hG1iYEqG7HkNHtFJeHDSpaaGX8D6a7eDoH35Aqp15AVvYYJ8cvZCiSpXEB6Kc",
  "key13": "59Jkiv5KpHy9XpMndGTv89tobHKp6Qhyt9zbnL9o1QkyLjXAz4yNN1oZBaP4wRTrghmoKJPwjWC4cJCtNZR1t3hH",
  "key14": "hCMh1KBd3HXwtAUid7ryatKBXUt1y9tr8VYCjR4bQxHzzWcN2THny4u1NhKzD2sypvA1qzfsBCxtz66sTqCDaDA",
  "key15": "3cEpgoajSJFychZXzFVzy7PhRX9zLTe67dfJMyG13EiUxHtqjU7UZdr7C7rpqUJYw6sKfkNwrEXnL6y4CzUYuawq",
  "key16": "4GzitJTMq5mmLqds6WaGCcquAYw8K3kyLQ1A9WSAnpRbJ1ohjgSNmNXoqD2g4XYXMRxScofyd5JM5FbtRrmNnYkq",
  "key17": "3RVXgfPGURQRV3W9LAiKpJ7JT6cCshDm67vFLRSUU31KSRaEpAfzS56rNhcvxUXknmViftnCtZ9ooc6mMd2rE9zr",
  "key18": "4Jy7p3TDiJWFaNUUFta2S9YUX37qA9cAUf9QfpbZ4WZsbDxb651fqt9BZjPMBxzamtn97r57iQRGx6PviowVEN5w",
  "key19": "5iafWE1stowJW6QeJDp96qx11EojTBZqkpT5GSvJbiGYzaS48SKeHPp8eb8SNDnvX75e8F61Jtj4QCMF5uirSvLV",
  "key20": "4KqEaWLtYEnFizadM4vAeGJ3jzznbCh5MCXTzBF8FJh9txutsTJY7ZFVWnMe7EnSUYz6HsiGqyzTr2zCVG82EcmU",
  "key21": "3mr85gsijma4S7GrTMKssZVsuQZFeEFG5QKdsazgCjSC5jbThghjen3ebFjknQGydAFxPGjNZZgX8DBLw3PT2Cs6",
  "key22": "LxoW7MUkHrkXHzZQSugAEBV5aFMrijbf46j9EaSdWVSJE8uFAKcfwzHgWC1JXygZwUjmP1SE3Tz5yDkZ6CEXCXf",
  "key23": "42bbwCye673fGi4eMmkQKF6GL9zTfzbSm52VBnKXgLF9q5axcmyNrMB52hFpCWKSLMqznFLUHfpvV4daC8aoEv8b",
  "key24": "5iejm2cAmFNditVLiwd2e5E9fDZFuJi7DKHWosFWeYrtD1tWNX4pdPGMi5iRmHN89bfrspVpPsk5iPSM2kcU4EfE",
  "key25": "5jkPyWDmxwnkCGhs1gNhmT6sYgnZV8oRwxxDWB8aa2nfKqwRck5x5rf5Eicad926NS2soCTfviPUbVi7SKHBBnu4",
  "key26": "3D3b6jPE1aonzYgMQ24SwYtkcZ2Ytx4vpNnsiMAED4zLf8kQiZwqYFipfJzNjGMwRzdqAFU794m8g8EcLiHxaDYM",
  "key27": "2CUs4uq2C7Nu5RtTqxJeC4rtw3ZN94VWzdRqtGoaWnZ3dVUAxMp71oGxjsCP4Aa7WpW4ExwmvWgQMuyfbnovY7mJ",
  "key28": "2DT1wjUp9Y6PtUBeRqmfPzQPsBs7dYUhVwAfyibmBLa16E5ZQkzFnoQSy385U8YSAWr2GZRYkn9i6rEC3pzH6PD4",
  "key29": "2pnkrTEJyaAS5kRoWgj1PYKrZ5acj8S3mpSDs2mV8DHrLoHMH6hybHr9Xtk45u45oPWxRaKTbpTWDbEXu93S4rB3",
  "key30": "5ehUEgXPUHPg4AqTd3dsSMcxDzA4iSVbQW4QyJosQsEzn9tc7inbBCiZ3fe6dQoF2MARyxEQcAhR3BafTFy7Bt57",
  "key31": "3fpzm5VxrWwjcZAS3Q3RZ5CSwkWrrvGpGYaNyatvm7mCcHurm83MYWYChmmfxy7YCZqRgkgWXudC67pf3etthnUf",
  "key32": "3rJmKtKRTz594p195Ah85ZDzmiaaJ5fjgtPza54fZb54MgvASJLcL6ZwU2e5g3LhL13onDSBsKrrm4zYKumzCjFL"
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
