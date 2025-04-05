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
    "5GeW6gJGm5E3C1k1Fymmi2nWDSyELTeSM7ijnf1GEK4mUhPAmu3F4CdbRPFZMVKUFkdJFqqHYkrg1ugZwca7UZBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21chBAdka6XraDSNanNJmc7jEAPP5zMyP8rHtTDHFDR88CfCcP5N7JFCRXbtzMFkZk8AzuiKRL1DjbHRncAFmgsr",
  "key1": "4evj9pukxwevnKbHhqodWFsHqU4kiA9q1quDb5MvqAYzQ2fVpdhwYSL84NhgFBydG6j4oj9Rdy7hwtomZ4Nrcwof",
  "key2": "4RNxtMvNqp3n4C3ahPCuwsCf6rf1guN6HDeBTjscq5Wme9ZN8gvLEMtRUQuvhofkJrEAemvAMbKwKVHZYEgQHXcL",
  "key3": "3eCnvw3qaJdnJ1ec5QzxNHtFozDPUsPvWo9V6Kmm6zULmiQ2fg6nK3fRbxKPZdGXaAKXZd2wPmCWRV5KFA1epcra",
  "key4": "53YAVrFxPbmvUxBbSxLj5r6uT62xUiVMpZXk2yxQH1hx7zNwkabxMT8NG9XV1CoUPEdbfEPCvVrCGVtmNZjQDuSj",
  "key5": "5XoptnEH21xBZpQYcVKBrotL5FHmWQk5sZdsJqdBy4q8xp4PHuDKcDs1ciscHGNBEj3G3JZRr3cEkkDtM1P3DmRE",
  "key6": "5Hmgx4f7zahfFXmktyf2a4rAJrFXPqAa2ekTqd4F54zSqsPfqaeEoQbBdPbSdUodFDSYxDd1WRdpNh7Buh2ykDNa",
  "key7": "SATVZ9N6tj4ZpZpS7PnQfEZM5WMWTVWTuK8pDVhnCsha1wJkeRhdpiJFmZxSGu58tjap5eyMspGYwDX9rRGSx39",
  "key8": "V2iJ4722TH9uQDrrChYXYjtt7uARJz1pFrD7JizBK1ymsJtxTZcDPju1tPhti1UogmoNfTjwCSBtsWHPPNEkGXg",
  "key9": "5BxJiwQ5azPox9RGsArDkH7RjgABURdS5iZ2QdigosEjVnspLsQKyCFJGVWxyqr8E6rRsvkZnjewBewt7vBUNGh6",
  "key10": "4aU5frgYGvXv6x4JB8s8sAezSjjRS7fPzPLTeFPswCEptY6ynkCY9bh25yg1RzF5VDyt4EtxSFpsKcsh6d2Udgks",
  "key11": "5yeYTDjNJ2JUG7sSerENokdygF8Q3bB8nq6eCjDczCMZ5E5nKsavcZ8cdfbwKS4RuteaCFm4mMfXoVvfKGMn3MTy",
  "key12": "2cnUYUCYvSX8H1UfDLwB9TZ6YKBe8ijYHbhgKBh8o5toqSHzZsyru8rcnNP56fx4K5HSeiJGVVgzNPDUNQCVFKKX",
  "key13": "68yMQTSmWuVPZivRm18UuT8ouj6kYtHQ1Li9FrNcZRtnwJW2T5Ew1sy9expdbHe8dkQNkJc3wggJ3ApnnmJfF31",
  "key14": "5ogAJrdLrxBrTMoLym1LgBJrSqhCFq2ynt3C1PcCti7FhAWwignCCXyJEDmS1D5jJhuDmPUWiH5qU3h3er45x9sM",
  "key15": "3FKJFmVUiT3VDMQMTWPMS79Xm1JNiQHPVRRH7dxUz815LSECgCBP2AvVVFvY8cSC2De6JrhtbTfeCHf1xDK15mWE",
  "key16": "PiYtF9Q3hRymU6xN3XQdYkWRE45CzMcoM6qzdWXufNP75LBFnJqjzHTGzezSK84qRQjkDVYavDDziBAi12kF2y7",
  "key17": "o8LeyBkGFRMU6Dogb92HXhQ3PVYbCu5339CkFhEuhyrXRTEe2tvGLns28EXw2DnSpQibgzdcqmCHevcSRo7CMZc",
  "key18": "4K1f3jT1nrWegk9N33iTLo8b2uKx3dHn8q4fEmbPNMcjhWZtFUEjZSKdCs1oSdJRu7TBQLNL741j85yv3px2TKvh",
  "key19": "pHiPLD1CVWtsAEMaJ1TuV7N5qdUf1utwuNSRUC33Z4zHzMJYtY8i3bhDiSQX6UPLvxBEkHtoLLoxbbW2S5Cib5T",
  "key20": "UkjRYQ8DiECHd8LwBTovjDmumeUnq5iwAj4GYDAK6VJF6JoZmqy7uHV786X32ziCu44s75LfLDTWPa4Vt9TFgkt",
  "key21": "gf99nXukcYyvcRgQjGD5UvDyUTqcWECVFL9pEH5Bpg9WjaNLshewnV9XxNEn94iagX6vwN1zdRxoPKkoDxVhHCS",
  "key22": "4bEjkHsa9vU76cFqXajKcx7C1jYgQ597f3aBU3iaRnNmscsdi9nDA9T5MxM5njA9pa5pj5vqkV3PfEdzoXTGVXor",
  "key23": "Qx9XTv4wvLWjiw5Xr4GdonpUp4ZQ6WKPMTUkr6ZBZ2ZYND3S8sy6nnWww4p717cEiLB7GaQtHAAzMKomY2QZZSu",
  "key24": "5hb72nZuFrMEEb5JkfPJfg7vDQ4SKvWwTZ7jytEzq9bH2GrsDMhfQK9fsAJxGzJGzcT9Eu9153jNJGu3upi54esv",
  "key25": "3CHFtDdpj1V94rrQ1vSSS9uEieGTPTHBqyBfwD8y2EBKgFg9WDUBgnVhD9RMnn6BqDaUiuqmKtTo9zGMSLf3cqKg",
  "key26": "4dEciHSA1M6sm9npmocKydAhSKhiVThUqRH6qhqLKQpTs84Cfb6chZpnPGDN9mveTM5uTHfwYJDgLT65A7tNsbjw",
  "key27": "3Ctf3vsnLVHaq5TzzM8kYdmoohSFY1jmn48EUrixKBrJFMzXiyCBt159W6HG17LA6hg72rVkrSs2AGEU7DLUSLoo",
  "key28": "4EA5Dmbqtqz9dwKp2rNekcg6mpneiBJFBtxwhrSi3yHZoCwCaNXrayvRUkbq4g17DysBaGFmnzDcFRx2mHsybfmH",
  "key29": "3m5n6yU4T7gQHpvAWBpuNY4nw5cLeYtyz9KKaEMzVm4wsS72mX3nzh5e5TRiwiFBBbC1KXtuoJtQidbhJPez2N2q"
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
