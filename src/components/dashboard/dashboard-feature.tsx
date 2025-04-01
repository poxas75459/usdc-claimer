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
    "47ShBfW83hEJr24sB9C5tkFZWXAxmyfGx6UKCZzvViujyVRuwSqUDuSdHBg1fDbdhBLoziZsS85jPci9jKREdCkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mN1Xhnvjad5Fyy6mG4o5xHcEv69mEogGx4Yq25iXZmCXXKFRXaHoUeLwykUvaNCtksbh4RuujyXhJHrs3cfFsu6",
  "key1": "5CNp2Q6EPsYdeRasGAJpnkCREP6i7cC4HC4DaM824aSGm6wnougFUXmoLq2EscgwNc12NR4KwQHskMBU825ScTzu",
  "key2": "17EwGxGKo4cjMBgcfd69aTDfWCQHF2gzAGXDyukiUFybsmq4tPxhb2CXdxRRmSRjskfEtJfGcrUtuoBhWGQbiag",
  "key3": "42vVDF2EVZX1wN3EV7x7uXms9H9KuWs7fuTbu4CHcAi2V5M4UNW2CjBc8pV7rLecUt5ywjQWRoxm9A6oMbpsV5MR",
  "key4": "5nKRAQL47n71B6m5KgvPSkbMf5ARV4qnsqeB2aNwEUkjKrvEXr8BVdxFCLsTe3rjwavi4tf17iBpuAEJuDCZrihd",
  "key5": "4tVr5WPiJs3T3UPBjWhdcHaBT2pMC4G37ZuAuHZbsPp9k7kHjL8UtaeXG32entErrdJaF4AF5tnHBb8YmPkd5jSm",
  "key6": "61iGAWwrQUk7cJYf4UTWgwvKmzbC1HgkmWb9xt4b9REHg5N5ZdPWNPvKtCo48E7FV9Mc6utvgNqWyYu6AxgdCvnb",
  "key7": "3sqw8YmjVdiv2TkTVZSw7VZ7UdYqCbHCosRgvG1ZM6dV2B2p1HtFU5WcXb11aLiW7cxQMwxduJ8tjkjLBgdqWxDD",
  "key8": "5UGd4XvDJXXxkdDtEJv3DSKrTaFkhv5DNJx3f6hbWv7zhp5v4hiegeHapEWugoQxDYyg3cEn4FgT9fGAQCq2d1p5",
  "key9": "3ertd3TVoPy4Ri6cJMBYtbdLZnyy9s1KruLkT38B3SdeFDmQ1qcc7xEBWaNN6neTDNom7cPNeQ7Z26nGmQPLJgNX",
  "key10": "4X1EFeH6ToSGQPcnv6R4CFsQCajCA28iiAybcsM2w9GnaqC9jgNgfCMXCupKsGfkJDz4Sc1MasguB1hmm17jesyv",
  "key11": "3JoRJCKHjTzDNpD6ez4PHz4eScM68cjDvvWPjfw17yQfZUe8JAUgDwYR1fYfnsHZ479JMwC9MtBa7RTTFwJ3MVEh",
  "key12": "5PQGik9hjVGTXa5MyZAnrLPbdxW2eRvEbgiFcQPAYxMYCT7SPVaeZssBfhzRd13KKdNNJWiGcXJxB7S7rorKHhhA",
  "key13": "43bDD1bQmfPXR1FqPeFCUvUKZUtnxRUZXsYzgnEtttS4gQQxQCAxfEqu3vAidH4E6YeNfEhsxdcbVMyKnFrjt5cq",
  "key14": "5w3FYfHE5fxYEk343MWUv5AjLUEqxapR3L2zqmK4qjMfXyrvGeKBReoRrt3YLF834BgFF7sMRhqKRMjVDcm8wUt8",
  "key15": "4SWEFkbydAHRya2rv6QtUQdZ1meamPiFamyPZwrmWFRtptimsXttCwK569cbeAM4TAFRyQgJvYCrNupUk6CpCTBK",
  "key16": "2ZQgDZbFY6Ddv7pBUtoayjLWrV4HnrocT7omyP9bLwQfdBG7CXzJox9wmJj9ZHL19pzGtvv3bCYWNPud5sTqcBC8",
  "key17": "ZUiQbiW76c3E2pz83hZSST1TujFgAmrfVfyJJkGqZX8dwErSKBmNudugZZNdeuVjym5ree6spZiWrk3TThzfaaK",
  "key18": "LahbbCEty5mzPrm8jynPHVemDD4vNDGwqok4SjYP64HERVvrWyKhspifWqZVE5Y2hzjQd9kX4noGVWWqY1651No",
  "key19": "66XfEW4uLrxCt24UDgyg2S1CMTpsEWwUvXkr61UxqHr9U4a2vtvgN4b3x1DeFxbjzjtmCAS26AKWi77wZrEYW5PF",
  "key20": "5ayijCUuGBydrwZaBtmxa4Y4kZW5ALHBAMivVPMSmbkeYCxNDszay9nTi8V31jUdfM7WhkLwtAcz5rVqKWzp3Fi9",
  "key21": "3T3W1jPyNTRu7Bpv3hSMyjrNZW9p9gUsVJpteoXpfnnndNCcWDv9sWB1czK4rr2E2Vct5tje5jmsWx6wabwyRNjg",
  "key22": "qnMnhamvYSpEUPHGEV9cBuTcJRJndjSAtf4QTkCSW67oXdkwu5hUQ4zN95PUAQ2d5v1sDexG1ffcHQGDXVJBPNw",
  "key23": "8J3kikbEY8H38rhXxeLedmCnZaqSE2PT4i4Sy92zPyQudYy7pPb2GwwFzhE1sNECvCT3thNQ4V7mNibmRM7boem",
  "key24": "4WF254MjRjFRAx8smHF28GH88ZbvAqohoBVubbMtZBiCWSKoXH6t3S3ekPbQ6v9WjXaKm6VeC9yd8K5UE4cMZttC",
  "key25": "2xADHHt51owsEhK7tfyCTHPnogZdvaxF6MErb8gaXPEc3gPwcWbvqE3YzYmsgJtPSdTC5jwzZYFGuTDf1rDYQ5p3",
  "key26": "5wVAfXdLXEirDVyr9NxzHaiCX3a71JHM4o4jDDUK1ZGTzegM21uxafGKRmL21XAeamk52xSjwLPd53NQLXA39mig"
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
