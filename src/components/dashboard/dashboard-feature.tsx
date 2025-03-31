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
    "vKbAebx2Z6sDZ21Qot1msiSWUrKwcQxn2isnDB7FLUYQ2mi83bHF8Lf9jaSroYjJY9rCJyHGpzrGTuMMjMC7LgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1bF3xecRXG6MWVWh8Cte88wEsnZiY6XV3QGiPGS4M7mwF6ucCP71j8o77TfwxZpVK559KGEiUnqFe4CyVZoqMY",
  "key1": "5Fzs5WAHM78U1pdSRkKumngfRENy4BHxU4g9Lk9dFqe7eaTTpbc1CFpVRhj35MWsZg2mAkGd9g8cR3NvVzaHsHeC",
  "key2": "5T8ET8u3mxs9BRu7yemZ2rooZfitpZ72U2uYiPFRKKVpevgLXYVUR7tQPKepU7HYMZhe3LfzyRx1Bw7STzgjthL7",
  "key3": "3d4r6GybzokrpNhzS12f17RGynHjWttuwpxzgzqHipoKqtZsyikqcZduxXvERJCzDcKU8STzzWnftJr1sD3cEi9m",
  "key4": "4hQWyDLgXvFjyJCiD5rmZWcXNs1wbZdX1KNWFE1m6jP4TomxA1Xyg9iCifzEXzp9Ekj3Evg5fmFuu7RYL3CjJXLD",
  "key5": "fy5qC27fQwCBevx6pngQPSQvNv71phmGtFyL325yjSs1gPbym3w2v3yVtJ1PLEQQaHMbbCqU9YFDjp95jvvk45C",
  "key6": "2rDTxQcc4A7bmPaxvRYcHtRZEhSCwfZJTcHxW23c54ZtA7Kz6tU6DFdHHvZ2CApcWh7Hu7isd4EXRxRXcRAXP2u6",
  "key7": "4t68qj2rHZduzPA3xfPq9qMS9QAsUqE8HEmMQyR32MKEa2LVMT62omLzb4vVUCHgC6NWBYMGbzTanh4X9m8zPmhN",
  "key8": "agagcW7VLhBdU27FtP1kXKNRERQSnJugJ1oxtyjBhXkD9NBkB26jeJr6ZL3mYJy9nhJtZCZGfT79HZ14DSh7j96",
  "key9": "mPEcYXsWoywS8Vfag4uP5kvtT654kUZdvK2YbTQtYtB6ctrNvThTP3zAWFcLW6mE6rxY3FKdVvb2axPWsQvaKn8",
  "key10": "Yjgd7P27PbXLxb47SJeYdDAQ77PC26trLr9x8mDjbm7QtKyCZ2X213z7PfEiZuiQKWVdeDcVDEsDEXNgJSRR58G",
  "key11": "3B2wNTNGm6B3qWbcULwaQ1imiRGV2Re9iyUXYx29AvAsupbcmpA4C2rrsMCQaDy8rivASnzrp9QcwbabnkZXbDXf",
  "key12": "4irHEmkTatEaGUDRfGYB5b6V95AuMW9FeFCENB7bekTK7LqBThEHjHCbYwZzXjvvfaFFA1ik5yU3KaQDvKfNjtZr",
  "key13": "61hpPDZ3cdkshGtzEgEbumeRps7ns3U2sgXi9ipY6Zgfm4zzDchrTFupv5wemrgKjB4SCHzGyj3MzwFtX3ZEX58t",
  "key14": "5majxiqWBRdwWw1BqWpVGEBLYeUSmvFhz2H7rtkbgCmeVhoVBoCSdtNLKAhC8aHtEyy9Mp6etRNhUas8UPytzMuq",
  "key15": "3Ctict5yjnhfy9ewA5GMQ5To4j2ncFTnutwSq7nqZGPXhnPSVv6U5jowysgCkphvjVtZRatcjDxRymF78AUBvd5V",
  "key16": "2spmhikiNifAWxmQoWMtZCcfy7KE6Djg6LSGAtpAiJZ3CuPSXGN8BVoF6oEYJNoafkQPBXy4MDHVfbLXFRjMqZu6",
  "key17": "3pyUbG22PAjv9Q9yVeW7BGszjgXBPKmJmfnXHL6iRTAavqbuzHosxPtNJfwrV7dh7w9Ze6yQ4bsMziSnTZbPBaWy",
  "key18": "2qpWMTb375JYSYqgR6tD8No1T5RauTacp1nYv6U6kdh13ksLUiPQK9cDShAAW5PgAsT3eRm3qKtgyPdbqBYL8ZQq",
  "key19": "4cLt99Xfb1gs87dsoP9LS6muT23aaSnrbzJm8o1U6dMAzMuk9tFBkzhsfV8ECxJAKByrvPkd1Zgw4whP9e5KyR4y",
  "key20": "3EJBfvD38CVexzbHkYYTAkp3iz56qjsRi8LatQzstwsJFNNvbCmEMRGn5g3oJ8GBiWft4MpxC2f4RHWw3Yn6gNaf",
  "key21": "3W14dVfwU4B1bA5u2qzx3NVzEDVYWH3cb57sdM3bWRwj8kBerTuuq51JaBzEPt7VKayt8kwL7qMW8s7sgSttkPKz",
  "key22": "3e7ffQ3oAyhLv23Cy3RKVNwUxdemkuff2m4acshsrcB9QbsnH8tq4T3mYjKqwHXxwLSp9ShBiPjEjEV44n8dgQLG",
  "key23": "nL3ba9qNM27Zvn5Vo4zkfQUYxkWHKbumwQp5aXvYhf1mX28R9uZmo6zm5LbpbFAwfFJ67uGEVL7ajGTTJBsmo3Z",
  "key24": "23iQ3T76gHKNugt7s2SPxf7yAjdEb5P6KCnotiPvuZocfSuuGCink6uykNMuaqtCtYzyUFztBqqS7kS6MVqXJusq",
  "key25": "4QDtk6in86PawaysdnYJBFqpUhrB4H4EyxdZYaiZzy7TswJScgsLYiw9DeVa9zvE1KidmddKUvWpvgK1svyPXoUd",
  "key26": "5CRsm6Npq2nLK3b3JoZVjJCKsJE2vRp66fUXvE6gsJWaratzQkzrcSB9Q2Nwn2W5TA6zdwkpTrVc7dH3Rb2oPwmc",
  "key27": "4FR8e7zaV5TsWZMVDoVgj2EGvvqiNYHcbMG24UzroPWXLuwpqDVMCDqLCi3q887Y7pDDSofuNZUrBtHF8HgTJGpg",
  "key28": "4oDB8rtpaF3wpQwLXb3BcXaY96Ns9KosrYWzP8HakSwt1xYpjTmsi3F2Pm52Yg6f7XKZtvHDD9KuUFvxassJ3w28",
  "key29": "4rkEBLLPA6Jpt8naQNs54YxuxFHPSXWtfKW1yghxk2tfoczn64KxKHvU4B8QBJx9waRJLG488RsmB8d145idyGG",
  "key30": "2aKwyEaZYBpxTtMRmv5BhtUQ3wKCJZwdm4vKbxNTmBCLwYfrrU2C38C7YEyf8Z9UHz9k135voW3maGvSB4VMyvht",
  "key31": "mGB9Bo4xNrAvtex3KsLerAtuq1ip1cU9Jyj8d8hc1qBfUC6CV1SwETKUzuNr8dbdT8tcdwDwXGanzQdfQ7VyZ7m",
  "key32": "7TZgwbaVcfgZ3JKbVrGzuAkiUHwcoqr6ds6RmEuZp1ZUbtxEU6sZkVGV3apwGMMuckddwaQw8k8n1FXiohMVUrG",
  "key33": "CaCb4txvJe46zuCVKDy2ZnhRW5jPAWRxmaGM5r26sFD97bppoyfPzRDRo8b4fT4hxp1j2JKJ4aFqH53U95ZBKej",
  "key34": "4XKb3dnQPCBfPfFftM5a8hGtbvUD6KWerZjEwJniVcD85bzvcJ3eNdhvCtsvm2spsmrEjjNYqvtFKy8uMs8qMZcM"
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
