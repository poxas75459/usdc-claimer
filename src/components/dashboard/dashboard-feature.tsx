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
    "5tPtW9eeCkiiZrVKitcrpNFvtagJYP2byQcF3rZCAdaRffGwcJz2Bq2gMWk1e1FGUQT4hpWe9qkVHLGRbNt6Xio6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ey2oMEFrVLnLoJQcCb4uvio5VT9e4xHuS4wUEsFuEXLfcSy4A8chbKnfj7e5F421M9AYM4x3zsdBzDgTJQdg48a",
  "key1": "3B2dJALXQzJaBfS2nUc8cgvN6fVoZpxrDxeh73D1FG2nZQPrw2JsS5gTPS6PcW5ypp39ZWayn4zKV9XfkwKzPXs4",
  "key2": "48DgtWFRD2Zz43ADDm4Wj4m7nG4j5LvpwF2EVGCTdLGnM1KD7smvqG4ft6roPGEWr1U2hcfaLTiMmAEPwqfZaAMM",
  "key3": "4opa3XwvjiWCoXggHFg4wPExYzUVwxCFMCSzWVxDyNMLwaM1skC8qoSbH2uFWRR8v8ammtrPtrPxo4NpBoaPJzq8",
  "key4": "4y32nqyr7tShqtVdKrNvZXg1LGLotcAq6bWRqyEECsk3Wta2UcHhBT7vRcofKAfMfw7vbkN31so3hD6X2YZ6a8gS",
  "key5": "iR72jFCVeoz7CGAr4hXTRkvwP8cDy7fKsYrhVhLHuXvZExgFH1ywBLo2kJwsq6kgJLfmQA8G967u5K92Zsaz2YG",
  "key6": "3WBSQh6Bauhu4REJCJ5CNBcymyMGkMHsg8zL33sRt6C3LZRZSzGNHH3VL2qLX4sVuQh7nRXntvh6s4pdMB95uYVS",
  "key7": "2LFuzdwu9JVDMFPVQPn5gXTH1q3BhoqbNhF5Fga8ACayomju59PZ6hEFdBoBXtgVDjPyNjoRha3K8N7GoVUN8bsZ",
  "key8": "5njiV7D3R2sVQqStcGqB1m7oLniKXguXPbRR34ns34TwJ6zZM6GFZeLN8B9YGnbXGbZjLvTAaWhteFyGnWsr8b4Q",
  "key9": "3UED2XxboGWQtjfJtr2nZ5JcxAcYJPCuV3QZog6zY256xmTHAgUBcSzrzi8eP3RFfB9YVpTz1WgroDakgeM56aGx",
  "key10": "5cFYgb9kUPpGXaSgCdXDEbmqQFo39o4HjZvwnNu9FN5cqKj5AejMtzBVMkVXzgC7WyZyUSHG9LJfLXrJzcM57gbC",
  "key11": "4hyyv8dVfcp4agprfWJDus2rsPs9RPTAKDZTonPW4MsHynYhVSsCU2TZD56nPJi6tGRBzJDWtDxrjLsjoQoNpk66",
  "key12": "3jjhKVPPSoR7vjyiDTd7kZZYFEkjKVqPJJerskwSo1VCRX6AN7fm4rVhYqXhyThAcvQpfYLoXzPumedibdz62Fnn",
  "key13": "5387mgAc1r3cTF53M42kU6B6tuCy7qj8rwtKsEWsscwKKH3iv91zr5JWFyfa2Z1oo8rAdy8tFPY1fwATiDBP42Hd",
  "key14": "3pb3hqjCLQeaR74Exe3ABHh6aS1vcitBZg8co81CyAQkyfnQDdLFUHNJCQXAD1UEK2LUe1uR133XdcTj3sxGj4e4",
  "key15": "4mnGs8WtmZLAwMgnKSoJFvNADMi8bzxqqRdpMiDNsDsuJkLqGBGKfmfk6M9gQZaM1Nkuu9DcmsRjvwMHdcV4CeH6",
  "key16": "3NMsNUB4uJr1xX661Mp2pnBoT2FMd4M1JhUV7mEJFVdVdPwTJNesAnQUyZ8L2WrTPgirCwC68Qk8Dzcc893SExea",
  "key17": "Hjj6ecvVnHeJBJMEBMzV8faCgFuGPeSevhjush8LRPZ9GNZHdRunRGDuUgPbRFDCvuunT6XiTXSjDbp3o63vK4F",
  "key18": "2HFAPFVRynVMH3suw2TY9aBUpCaz2CPQqCtLoyTceB8rRm8PzEyjRQq6q2GPhKo1KSHodkCdXx4faGTUDGLcd5Q7",
  "key19": "4en7LBzuiwAHTRwhV93xHPGkSuhv7hWVdQRq42Cf1nmxEKtLxPMFT8r18U7DEJrqkbfk31ZsdrTovRDKBn9xH5C7",
  "key20": "3obKpWi34i9oxJmYfmQe8QDQQzXiH4METi8CseKR7zepxjYzyztDwLABDx4CXvQM4HH2HpCaomhJD74xaNyf6SVn",
  "key21": "rbZEXqLtiGN44F5CMaHM2NpaU3a9vhmgZ5QY8b1bE4eGCo3bpGzNDq7hsWSwF6y6r84CFRVMJa1tiWuRzyfyiVK",
  "key22": "31GtobXdGHJ4Sqe9QzYeF2bz42tMwhcaUgv52dHYwvV5b8MpsfPr3D9n9pmm2qK4FnNHwjSL7jMJsaiDe4qDf3Ev",
  "key23": "4ENXmJh9ZUuUfnjtsGqWvhLkdc22edmdXdvUK8ckTt2jZkgGt2NgPSbdBJ8ZFtTu8TMYrdfjBsjWxK1HeWJ394B7",
  "key24": "2wSx3232WmB715zceSWC7E3dchf4VQ3iThgBGUDWFYvdeVhuWcqEmJYFynocDi1SKekHrKRYNt71X2ehFqkmSHim",
  "key25": "2wxM44iX2khucFpNw3vVqjzivD61uCxo4CdBBx5mj7ACVtKYVXvCJ7qrs4mhUB5bC6CGBhASzZZ4gxzD2XisN4j7",
  "key26": "3abY4ENuk1MLTeZijqF5kCKwLWtr9cmnR3gH9tH642dGNUKA73VwDcJZPKroD88oiRTvQ1k6vRFrtWf6ghpFTszA",
  "key27": "2RkN6LYCc67yAk2PpmguUavPV5j3uUk8uaZ3vZBQ57k1sB46zga6TufAJXCBmNAtwhYrS3qGmirHJCzqiE2JdKok",
  "key28": "4stm9SuKAevrtvsngATcgbe3ujPyE1LjTg9aox7UUMnssomvroUutcU1kzAnAU1g659a8SLo3uUwuWpWhtjrhRt4",
  "key29": "33NzfKYSPzJLeTnoBs9bV9zfD7da3Mw3hP1oqX1sWNgd91s9hW4sFeZ7KSJsqrvFgYyfQmYm1Kf6y3F9oBWMoGef"
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
