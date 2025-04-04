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
    "B6QtVc8b1j1WH2TVf7C2EzqqDzLQpbm4EUwMNr1efuzZy7sm5EcmDj3uKNWuJoYK1m66YNN9WdjBG7R7yhdovWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DduWfriW8GvrnNhzAxmUYgKrXwhQwzZnnfKYjicpnWST6p9G6RP7J8SxmaS7Ga98YmQeWCFgc7asArwvHnjBwgX",
  "key1": "GWSKWRQ4oK9vrFxTdv6uVhdrozEgi7V4rgauBzZkuANYpfkFb4mZ2Q5aY8mQfn4u3TDFq6TySraekjNnKo6syhX",
  "key2": "2EcyWpQKdQwV8HJTNPPioTdq5y8NV6sFHLeTyGqVjceMkVomCmTRrew14TV3Yw8VczkrjJRQaWEauoSbXwCVWYqC",
  "key3": "3L2i9VTMduauavE3DaKTyLWvH1ZTyCKWfEAADucqnxo8dzDNfEtWWD4dJDgutxCzY1yov1Jm6tRJq7qi8Sf2xtSx",
  "key4": "4YrHeEc9kY1LbQPmS7JiZzbKFmXMbT4woLe6USYfd8Uowh8TC6zoT3HfSir7qJarbQrEUt3U2jpYioj2pYpkVjer",
  "key5": "3gz2QHBcTzFuheDXJTuAqeNJbL9sdJGeKGVk5NPaoKpiPfc8WCjgK8BtnuxBhXVTEpFR6dAE8mMJYoBxyNcCAVHZ",
  "key6": "2Pm7NLq1auWKvfLeMcKSYikduTC4Sq4JZmPNPf9VLKrR6gPRWNfCX2KYLCrbHb3SWA1DVrSXwadofZyCV4TZZKrf",
  "key7": "2WHW8A2XJNBDcY1pionMKMP7MGMVCqFb7sxyvc45Siv6cwGra5nFrjgHh3M7aS76jjQeVsmodeXVb91nLrmk71GN",
  "key8": "2cx7S2f1w6cPbrqENFNaMYWFhxy24Y95B5dQzWULEfY6Jv9RVHb5NpXyKQKeYCw8BXSUdjAtac11K9MzrrAKoYZD",
  "key9": "4u54ybHhMig8TXNPw6RuRtWZzNyVXsqzTJ5dEQ38anwMPXvNks1UBdpyE8XUKG9X2vWyhxd9a2i9iRnFM5TDwCav",
  "key10": "27fznJFMPGskuUCbHAQGsBJxZFV2YhqognqzKYpmkupJEiVS3SxzwLiv6WexFo5Vt5qfwWP2dhqLgggrmVrrLBnC",
  "key11": "6561pJPPDUGrQWXHXit5ozaEZZ162PFrCTsakceenMnydebJCVVWxTp1Ud4jt6rBc1JMbsnTfDtFSNt1fyEABEdA",
  "key12": "3AW7LRk2NjVjuX6ftfCnkHkLto5DwJLNuz7VSbK8Bnf5XyqD9nLCT26yFS5oUbuFRYUpfzj8jHJRF8HAAaSQCQLS",
  "key13": "5N7wPNbgdiUqP2bQWXrEfN5zsw1zkFk71v8e7y7nTEqiz8qwa7Qb8dpNewLXPe6Au9GPxj94uueQBWwu89Y45cps",
  "key14": "LBobBwq9A8CsKoKT5cFopeHp7WSmZmLakKEJA6AaKFi7YmERcCbH56HcZ93Lpu4C7g82D11edFpdRqsZCtdPKLx",
  "key15": "Tr3yJGjpYzMvEBh1MKzC9oHUHqooi2fVGKbLy7nZnCsPBYDY4UZSzxBkqxJyHXsYiXLxq2igrpy4ZMvdh3EhwtS",
  "key16": "4qk8HTD7zb6RZyB1BBBp3hYbM93B94edY4b2fKZasYN4EhhCUEunL24fZoKAWLsUTU98KSgbC6QfxZAfjaUtadFJ",
  "key17": "3odBLa2otvXdTybGQmQaHaZsVSWxj9CZozpFyjPwJMTmSEabFUxiCzMR5nTTdRNUToZSNWbAkBDFJSgwvRE9jTx6",
  "key18": "3pdTSmgDBsm8Z6dJjKRGLU4wa4K64cavZDbdnvgL8b2xabEdep9ABNpt98gzXjevzy4MtGT82NDccXJD6HuQzMC9",
  "key19": "4yS94X2uny1xdhyFA4uzk4eqM32P5qmBt8E1fNUvnJLjRDUquobV4f1grEHY6141K7zEh2efHqzdV4iATaeN5PgX",
  "key20": "65GHS2wd6QUnA5qLDtMXSpKwTKXGBuA6YtqCgnwhnar2u31V6XhmWbuh5TJrD8xfxBeCyiLZRNvPF2pV2ybFQ6qK",
  "key21": "5Zg7D91hRpXcaQXByC65DL9U4jMRRQWKJAef5fxcpNGhfJq9cTocyww4SUrZiXkwUokikondCQybg8CFuedyCGyo",
  "key22": "66pyNrWC7fwpJEi5vYQ5s1rAcGdtbxquqUKT9z3t18StFhpxvzwUwMySAxjDSugdUwEJkWyghLEtZrrDE4KxrttR",
  "key23": "4U6pELrcVH2r1AJT2HKqDCKR1VN1ducp351TDrEu8X6uwgB1EqsPEgMrTmg41PrVB5RqSwsMTUP6jwJ7uyduoweC",
  "key24": "3zy6d59qiKUTRRUaicLmVMYyPJqPXPYzBEV94vDxdzQfZ5N387cZZkeWqE3gxjj72iByyzsg3HLP6bRCMEW2V1i8",
  "key25": "2gbSCFfBWY66YqgEFpMJbb9qzzMmGSRYbxyUH5gxLbk5n8FPJCssqN9e9x1wvUBjepBiuCPJMDrNYTLRfdtmvkWQ",
  "key26": "5V7Zj2ASJ7Hcv5sUipizT9tYkuxJGaxH5M5XaYsK8sioaq98zjvBg2iHCTLnbmMpUafhzVwu47TXj1Ua48Pemx9e"
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
