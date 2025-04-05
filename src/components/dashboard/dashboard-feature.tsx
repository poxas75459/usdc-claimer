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
    "5xBD5KB4nBzBseZmKx7VohGiyBZasvE7UDy28pNjoMXYjD5UfNtBf3bQFwq8qi3JHgzhE1Cxmm8xqwUtb48QEtSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrJDjza7z1gWu47uKSzrV8S2ripRZEVrAFtDtRSr94XNzJ7fdEwoW3JrmBgTBKQpEqtsMVr3Nta3rZQ7VCnM2Js",
  "key1": "2MmUTTGDBhjBpCgSCo4NHXxEWULBZK43ig7GXeXzewKkuGrwg9PwEhGVwXfVikjhLoGWugb6zqSXPTCrtVhaeqAW",
  "key2": "56YdHsLcqkEup2Sub3CrVo7egVSwjMENSdwL6XAy28VYZB9LdNPUDWJLX1xvPPXyMZWppHf8E8fjSaChPD6iMGYC",
  "key3": "4cMPEuTbCULAiGPHtJxCWi4bjsn6Kho2Nvr6qQqzuer6MU7ZygpXegJkvrHg6k1TJb75S5P2nsJEM198ib8cxPTK",
  "key4": "4u4jZPxsNXULTi8HWjd6UnboGiHpBoiJX2BpvWW78h3oVwinDGb7hXMPByJkPiu2NQrFjNgRa61bNzD7Ye8VXLr2",
  "key5": "4V7qTMyEDEBHyi7dPv3RE1itg2VVMXt5kGUnwooRfrUdQNKKsnZi8FEq27YEy5ep3qaMoSqx7Ua7KWinZsttLZ9U",
  "key6": "21VK1jVf8Xs3HjpQo18RwjRaPXBzoDctrVwCFWwX4LjZgnpdpQrpXyV7u3UTJLZf3oRi6dKx9oLi9dbWuSyzM6Ac",
  "key7": "3Um9fx5i8KJvJEp2LvLNKW3nD8xV6pXxmbW949YDpC6LCQS3wXhg8Qgcr2FoqArQDYXnFfqVS8gVbLnTj7BurYcS",
  "key8": "4KPA99VyhDphKAE2uMiYVuPXTJiGBYGkrCraZ3xKB2qVouya5Mw2dB5wDRX1EUYdpVBbVi1rFU2Pu6URVvRjXZqP",
  "key9": "5udMGRepvXpTeZnb6Q4aFFAwncrosi9ZjAukoeU65ftjk5BEwQyaq3wpc3sEr1WFfKymxCGjaZsC5m4XxnCSD9oh",
  "key10": "u3iRpk2NQbQeBgw72AacdNETcoizhWjJ1hnhQN828nH97ZrPPLURQiGyexMPAU1NsP2mHCd1oqrzpnsBX8Umi51",
  "key11": "3a5xnHTyioT1WJpZsrYEcDh9o1BJhnGoWLdua3JU6gyE3gXc7R9hUmScVk93qoxqSFPaC1GKuuQpmAPUc8fpiHjG",
  "key12": "4RxC3nNJMJLRcQHwiNrMAtVXnKWDPWXtCt53bPRjQsFHq2PaDABxPosCTKm9idLvTAKyHGcgsEanBhjYfcbtMreS",
  "key13": "W6DoNivFoC91jf4Dm7rVs7Hggxi7SSMX7Aivi9AsqxPtfqm5qcDdkCBqmryANqcYbVhGhpopa9GWGg2cwvfU3b4",
  "key14": "3iM6mHrD8Mx8XA8ddsixPYrsD18BiEedLGkL8x4djD1fz1eQx5HBruMjyE8uPeqCgiNUY92bsKZbebbFAZsbg4Wt",
  "key15": "61ToKbjhnxbfAzxrzZNqCLibA8XLGMGP45DYNYezq728X3QNMPG6GtusqSYhCmdhfZi9RNA2ZY84miexpyzEcXGQ",
  "key16": "3E9fD5v7eAYYxfAcGKrtnm4yScS2rbVPFPFLXmD1tLmKgmRTyKyGxqdZYFNpyYXU5DoiDejMquneMJxGwCSa23Wx",
  "key17": "55XXqFzDTt4vFqq8FnxgbAABjtuaJ9wDFzin2RaHqFqsLYz76MxKRVMRrLrZWEq1mjPL3mM2Qz8zEEXeXrRn7HxY",
  "key18": "4bwDusRCAYkKokD6aYYztrUXC1fNoTTtHedg2RHuTas9Efa6vWm2uiLhm2vLU1mXrDDAoaY5AsqA7vEiAvUghmU6",
  "key19": "3RrMJ9AKPhdjM79p8Q9dgtrtvgaUntSmmHufrTasAZ14d1dzM2MjHT8bi1AwgpFmDtLfuSi6EsRZDcs373i5hezS",
  "key20": "4JrfVpHngPDxfEkHQRDusbGZ1DMYfnCVbwt3T7FddYWEncrm5dW6BKquPXwxMN35VUSM99rQcHiQf7QuC1ex4MiS",
  "key21": "4eZYM3tunz4xp3F6HuSdBjFWPLPoQBtZpRukgQ7nfSB9rQ1pUW9ZNMG9VLVmEdkH9btinvqYyoXbQwmyTRpmYSHJ",
  "key22": "MFiMmSZXpeMAL76ZEqBNj6HDAV2mEXJrg7XQ5NdUaiGNjSv5frWK1EKAwGoFC87DGxoM8r8HNUEFNr7m29Cuo1a",
  "key23": "4Vt43ikNgNoZTfah7bHDHQ3PUQ7CqwG1gfkcRHbw6hVRHE4ibUASEfAEmwJo7Cjgswe5WNm6wLRuV5GGJjRbVtWz",
  "key24": "43N3UCDNG6CzjT8XpALtvj79Pu8TeXKBLxgwJZceVvky3GTTzQufgEJ4k5TCEz1WALhw6jauaS4WunSMrJFFncQX",
  "key25": "67WFzGDctoo5ThKSHkSu1HtJW6B7oyp9bWiQbGv7AoMoCjQKL6Di8T62uqFRJ1yBJi8xvuuKHQBH9oimjwbMKjE7",
  "key26": "2r8rcvsHXUyj6nCtLoYUrhuQMTFstkfjwGwxsaJEt2PyUngBihEk6DZJg91jPzk9vajRu5Rh3AoMspLGhcQvhczj",
  "key27": "5qMTXzoh4RVzg1pzqnjkzdF9BK9jZePsHABxRNDXXsVN6xf5fVfKVZjKHusXLGZHAyEuj5rpt8rK7XMAPt9qpkfb",
  "key28": "3g8s2h3hJqrjzmGSGjGbnMXn7z2KzjwHKMYuYt8gBpGrMnRdiw9WXY5Yj1yUzi5yZYYoYhskXPEoYyTjyAH3tcFe",
  "key29": "o8FvghZ1ndRbHNCFsbm4bpzKKrAsgWGDoUhfnh5AuWoJJUMeEbtivyb621UzeeLEgBbfg2QwoiC9phRWb8JzuXU",
  "key30": "pZuFA4eGQckx4M5EWuHipfy5aPH4ydHuAyU9YXarCsGYikT9ToRDD1tZ6kpCg2yN3Uof34CUo7DpHRYowtn3rmz",
  "key31": "4qsGWDhZwEqbStQvA7AQc7puu7JoSmdRTxeFPAzTeRT3WsU4WWGGtaxBmEEA9rZ6JtD1tNp38eTyMxXkm1v1dySr"
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
