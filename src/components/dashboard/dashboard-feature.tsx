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
    "2E5gfQGgJhY9XokZBW2oL8Ghihf92JJBRuEgtZpzTjUbaRUtQbPDqQtsLtVeCZMhZfU8hh9768vyvBxfPvqfxSdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXswwH8J2iMznWLwBZDA5uThv8LjmbBawR8W16ojdnoLogRWED46BXR2tGsEcwe7hPB3y1rs4eDqYgsAWPhJzMa",
  "key1": "47aWC2Eo2DGturiUngdQJBbxUz3jkcHxEeYxV8HFCHP8CkT7qzXkUyx3ZE6BGMyS5Qdhdaq1bqm4F9c4gh88oQWX",
  "key2": "4taJtxqUWgy6e2zqN5QMFiaiBg4QAAg3zfEZ5iXPHKFA3ggRAJPccQKrfWgxxZsvf1EybxawjUPHCFbFqUFApSd7",
  "key3": "3jrypNfiSeEvAwSVCXqDmfgHqXDHomB1hECFTe9uTuQpsUzk4hWL2CBncguyxzUpJRs97LK61XZYXs4dJ79QXsg5",
  "key4": "4ThNUyPym178kzW9cmGLnj432shsx3KNx65ajym1s7KUofq2XRG7u1qj1g6NDkr7kQxW75vSqxkDTgoWhYc8gSZD",
  "key5": "2g9f8rkQ1KgBcQsEtPDG16ZY1FTaWq1jHvunBGArbpnuXoVx9M5GWmxbSyx1pkpjgSrvqMxmEN7D4fDGu9DbLbzD",
  "key6": "yJwQxXeo44F9j79FjHFfxxRmDoB29tCQU4SNY3fRuctp8szKgL7ckwLBBJDjaHpjL77rMQ8TXmGsN3czvm1rJ1D",
  "key7": "5FV1x7vUY6zvDkP8sZg6QjnFDxJTMmMhEGQiDWbY4RCgmwRtZEe2CHRY67GdZ3zPxZMb9yAPafpjjSFVtujLzcpy",
  "key8": "5vWMVnL3NJsdcGoV4S5Q6aaAKm6R2Fw9oBhC1xSqGrg69iHwGFS8Sk3wtCZkw8Qenb1qNUWsiLLbw2EEX5K52KZ7",
  "key9": "2rTTSXcjLG2zuTYsrqmGdHwFv1RWkZ5oVoJRCv9jAo7RswtqP5gz6ySbEEvV3cjVaqNhL4VgrZa9Yt9obYewMZiN",
  "key10": "2BkD1Yj1cDQH8iGdXxFi9Vv9RZozFbE9Lt24qVieEiqHwFEwNa5rCD3jk4Uh7BdSiTDVDRNeZqZsw2KDksdfTjBn",
  "key11": "5trK2ekncmPF4DQUtkYUxxYMHAr5VC9AAbJGxr1xwPQurcxFPFAM6wFSxP2RcTGbR7VUVVZRJENBheFzgdzHTVEQ",
  "key12": "4smdzuvJsnZZU7UgT1GuAkCg4K6W2mSohV8hqgPP6RL4bFhGonWwMGU42NvJ4QSiMo3GtVc4PWjhSCCisQ7EesQx",
  "key13": "44LUHpZtEHZWmYUaaUi1nbZbPqmJgA8oukNeFVn8epvJgDx2kE5yVwkQg4bi5MyDTGA6jkXD5VNBhScyq6FpcEXe",
  "key14": "46SXom9mhzNukYZF1eX6vMzt5Ht3cs7yiWKBNKwvC3EnbQSSVU1Ny6aVyj52WD38aiziL7hfskfQJ7WnFYxnB72E",
  "key15": "JJVwdfLmPDW8FF7MFrEShJDtv2ZPDKCEVx9satatGWKhYrh8UpppKM7KbCHPiXZq54t7sG99K6PYHxTTKk4YtnZ",
  "key16": "2tCuevC5KFu7gowEW6NNyKVMW9szUouD46yHC2citzzbSLroTHEASZ5B5KpLShKeJmuAQUtYgbBeea96QzoDff4M",
  "key17": "2WrNJoBgVtX3RYQ5vaKdjFruw2b1FD56DRmDPmmp57VPefLmMazrN7pFdPoU7ebN37Fi5nKqfq97fTG6Cy5boet4",
  "key18": "31FqAVcCkBXgeZdj24oybz5tLcxBgXpU1HZHnvgzfgURjxELtJargpTnDjM3YpL5u15eDTd8RGnpBS9ht3KRfkE",
  "key19": "3LYCmd96Ja93WtoCLG9qUKgWdLr1i5EdmhyBF91Z1GeKsZu1xHH817JGtdfTVbiTfF8FPRqbYk1guvKTk6aavBUT",
  "key20": "22SLDSqyLSgxVgGKYx17iWwg53CCP4UNPvPBZcbbuYuWVBAbdbuCVPY4ErHt1UPn9DT2tCerDHRMzyy2XzmRCXZP",
  "key21": "3dtmMeSbnwfw5QCpztgrswQibh3hx42p4dTA24oYY2gRgNUww9FGJQRGR6zMfVJmaRFSVuo3WFBrYqMJvfPnNRdP",
  "key22": "34bkNLG5uRE7k36qqMxyD2X58JE5M7VGginuY5Uqw5cYjPw9pwJNCJSQTSHXZyyvoBaqnzuSY7mtUBLkw3f9jqkK",
  "key23": "4KHb9VZ2ULkfj48VbQfY4o2P1vbSMJRjyg6VFmwwDhBda4UXnDasampNMX6tAMGMqcY2acLjS8ZayXLUp9qzVfRK",
  "key24": "4UnJtGQZKUZoEgQAXvkdSRPgoHz9xk9zgpoeBMa2cCxrEPUgK26VxCKuqF1QeMH1aEKQC8JGwu13rHkEHx9eEnaa",
  "key25": "5Uj3ZBiPrezEAoKjEUf6JmAFcouUyZ7uS2zKNjbqSB6uhfJNLVhbjEusSj1rPVUCqUegu7i5AY5nD6Cy1aCYyim1",
  "key26": "4nSCt9juqzRktsCrg5g7bM9JbMXN81fVApSzKdDGARJKTMP2ALMeZyAfeDAq9uP9wnuMgKPxjt7UiYQcERtdBwrc",
  "key27": "5Hu7UYpxRwhgk5NC6m9mzDXbnZhqJ2WD8kiegQmfteBENLjXRqCeNjt45q47JCGXaKQyE8BCkqDLszCrxMpBw1G5",
  "key28": "52vi9ZBZ3XitsD7zLwxKQsSUJ5vKfuPSCzteSb65YZUZpXAKcnkCqbh5o2Gh66pCxLqtStcXR43KjVKD6HR29GiP",
  "key29": "574grf8WWJCrKURn2J3CNBXuWyU82BGAJYz1JnMoL7MxneKYvjTM1yFPWfpJHabrBQvGRjZq3KsDziULcd64BrP4",
  "key30": "4MkkEMzg6K7aaDdE8T1FkjMomDAiXJmNRZXeQfM2ATjgrAU7mN8VHv9A2dP6f5r9BgsM3BABoQsNdokFvXfWWHtg",
  "key31": "4vUPDUxkfFk4Cvt9oHAVWwhA92xXYzmYw1has949yjqL2qL4d9U9VQD3tC3ErJeXo7NViCZWTbMjo6GHfdr2N485",
  "key32": "3EPzYbiBB2Bvvcvm9i3zkGAy3yM3gsjbpHJtHZGRNpTraF58xRyrLiEvvDFHpToaVUFmhiLpvGWGgGkiox6YMLU7"
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
