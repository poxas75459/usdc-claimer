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
    "GAWfrwPaE5zeA3TBHxSo8nBdNwLupas9diJ9X6WfiN1QH2cd3nF3hHMoJnkiFZAGABnd5KgmfPD6gcCjdo7kVH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMvGH8dxwMmnEZkU9zvbErBQcsFVG2bARytTDMS3Pv9bJrFsmaRLcy495FLyVW3FJjrK2Ee9419JXC7hrTMjdFK",
  "key1": "2E3V9XbLWy557uJMLTmcbgVoKp31KxERVCXwx6wtLdiZLxNZXdYteBgSXvufqdGjL11VB7t1KcjhD4cycHVov8X2",
  "key2": "2cw4ibTXUTeYYg1LVefhik41hZE66ZXTqoyPhfjaZMJv1wZH8gHcAfqVACwQJoHQ2uE4BpKxGkPWRX8zDv1WXQbs",
  "key3": "3hHpCvVAHBbb7B8enwakQmnWKdxiwXZ1qnmGpBy2BeHcNCp9qdhSwhr1bovnSiJG2htsiNMTg8YWnanBfFyCxFKQ",
  "key4": "2mvqELYmoW2UerXFS4fMCTCZx7pT6t8TwTHdPnJSggCodJUdHa9Vchvw7pwHoXcCjwNtiHAXJ61kZQqh8cnNGQN4",
  "key5": "3h6VWQ4n3xKU3vATt4xxwQvCJz9PEgvP6hkUdXHY9AXRyFKUaq1khBvkccanPc8ryDxbVLSAUXtuhaAcvfTdEwt9",
  "key6": "nunksGAAakUuCK8fyzt81xJmtnKh2JoWFGdEDfau2jUTE6qdx4PmrqSRBhDKapLuRd9U9MQA1Sgg3djgetmzZju",
  "key7": "65un6kgKyeRYJuPrW2JomB1Ur9GpQ6FQyW5k1mBoVLrnLezH1NzsmDAp7dX6kxJ4NzS7SMTVGNdaQosjKe16sDkW",
  "key8": "5ZB9n9FpQ5EtV3tHcqdYaBWrZtXEQxUrEX2sXojxcYkHW7mH58Q8WDbAmSP9SsVSWP9QXGociFR4PexEP6VH94Hh",
  "key9": "3uVmYRHqtNnKAjW6nyoxN39T5jnSp8w6ttrPkJTLsj5X7fHRUgttT2Y8RfsfbYuuhHfcstkuXT83EeCht1Ha9b4B",
  "key10": "2crb4K1Y8s9dAkWuJJba649L1rkwhaU4ft6RGGWXFzeD9RKBGabgqHQ1m89t5xAPzwrddZojq1Uk4EahDYWBpNv6",
  "key11": "or347ntpSL15B9v1L2kUFmuANGmcb6tZZwXviHdEEmQiWt3fNUygMtqhxm6xFoFae8kssthdhSENjXkymxfePTg",
  "key12": "5qv1ohmHqF37a4gxF4JZXPagSvQQjFDVjQ4aaHbKbu4KHq9mZMrgp9342m3HbqXKY1PL3HLnJLnpemtjdbkyru2q",
  "key13": "3q24XuV8D5Ne82ED6dbkSFyQ1WnCv36RUC31EuQUzxubWMz46dWpcsBrhFFm2LxKuYQpp365mx7FQ1YA7yHY9rQo",
  "key14": "2CTw2tEvJmKZpAD2MZsMFVLmKeQNC5JiF6ArWeTqR7itQkJuSpb2K5srHdtVAZU9LFgZ9MuXkeR7VtdsAEWDF8Ho",
  "key15": "3LpVuev5VREqxnfmqS1TiPSYioPabJp2u6QP7QRj6D4xmUL2xePSYrTbM5JJLotHpK2euz2xM4YPdbtL5DCnTRNw",
  "key16": "5bYqAYwnZRKuog1QRwFnNL2Vof9DkaZxjU3fVyEik9cuhfhtXZbKMQvC9pW13Q7hPNAa2GvR93SWDbQn38K9fpLv",
  "key17": "3Q4VQSMJ4AYiuz8BrTZi3iFqskf28fKzSoj26AMUizhi3nhayPZsr1xJXHMUySWo2kWyiCpBYWQMcZtCe2N6ABEy",
  "key18": "4Z9Q1ArP4fSMskjVnFEKJzkQkRMfAbWgJrrgeNEwbnjfYwVsvpZxMBjq72BXVtXRMFenXwJCtL4GUJRHYxxYvqAM",
  "key19": "XBHcA1UTKMDccSghGeHjn3eJwG11Y7Srfe2u1n6mWuduGcXSciRctP3jbdVX29rt4S23EHoUJapCgPg26x9bxzL",
  "key20": "YAfxF4yVPUauPa3EDy5wyHJFGxxGkwRVCcc82EUpMjonsSXJqijo1zWkhWd3kL2f3SikWNUMucSegsYCuTpf2Sg",
  "key21": "5rk27CZ8hMTg53agjNVUxUuRyYNcACeniwovDY9QiQysisVPcSXeqDjiy1QUaFMJPSJAsXwQhqe5aaMCMEmGYH3S",
  "key22": "4vQC7wHchubJGo3vCTVPQgT2wWa47bjxWrCKEotfR8Jd1SuyAhzy5WK76BSQ5wDxYRqb2RNLxYSGGLKPbncQYhPx",
  "key23": "3TegaPT94GUVRvZyDhnFosKUFE9VFd48gM1Eaf5UuEA77kHZ8Jk7yBmte2xxedFAHDCphbg7Y5qgnpyzdstDZvTy",
  "key24": "2PmnB28HMBbohRWgC7cLyP4pBCJcn3okQs5UjYQrrjQPKFV38FjBx4baPzRzQkd7HmYbJfy9avmR8gJn58vA87JY",
  "key25": "WneXbWDaJKCaXGhPok7feSqybmSne5Rs9uvrQ2Q1D2CMHw5MXQGUTJpcUpZbBBH57EtnjrLNP5ipZHmQYX9harK",
  "key26": "4Dt6eykDVdZQCzneof1FX8ANtKHqr9tzwFVDTTokKqy7pvYeTEMPLuepzTHKTY9TLav8TyB6bK2V9ArnfbXNb4ne",
  "key27": "5AC9VAnh7DWtqXEsL68k7tP3WFk8gCpFrKqzmF1Se3nVQu5RFbiSiXRsUdnrtwSoHb1f9YD9rYsCnyNcPp1kkPvF",
  "key28": "5mf9AcD5dsGy3GvvDHuxEkETnqDJqTRwpLs8YFUQe6BJAserA9w3YNKKNW8uXaFQPvG3WyGAjPP8XPPLVeAMjNuj",
  "key29": "8rqfSDdu1NfThY4V2y6T2XA2y8oNzPQAU5NDcqqGW4ciUnFQd1LCvDhMfkz56ZynM1V73cwQi8gNXfjJCAFdzvW",
  "key30": "5HF6fDZ6es7HZzfCWLMfk5FxthKBNqcZWKSQ9FhL6iy2beShe6Xpa73DtjbwTGoHr3TNhY2Yv75We9YjEqpfRUbC",
  "key31": "27iBN4Z7mmJx6B2AypXvZhinXYKuyNstCdAm5PSVCNrJRftR4QiDhrcMFh9hvsta7sXieRExchTj1Pp8Uo5n8i1p",
  "key32": "LdjGvdr4NvaDhEJe6E6HwGmYbH3V5bkNFe2MQff2TtmgbRPs9pnjyA2fX2x3h5dYLbnwC6wrZCf8mfy6eRsAeNc",
  "key33": "5J1Hddk2AtrJeDrEFXFcQqfieBBMrVdVJfxWdc71JL4nPPp4C8R2LkvCqcTZYKAYVv1xrHVvB9ffk2xKDWcg3BFT",
  "key34": "5gxiJmyX7nubD6irvfv9W9rhFxYwoQjYuntNU7ggVWJVi129abAg1FCsFsMzkqSnVArdPpknTBKnAQytBXRXVwJ8",
  "key35": "3iAV3sj7M1LMbNEfdETo86GVa5Xn3wXUgh6MesUewLVSBkW8cG6XZzX5m4N8qD8gxWVtTJbLeNzVtjPmgGa9jJ4h",
  "key36": "5z5rX2mSUUMGGc8UbBrYzJvfVYHoJa3JbWPFcESVL5mBqLdoHL9ioE77zVd5qeoTarKnw13WQpVHvJp6m3Nus6E6",
  "key37": "2J5gh8759Jc5iatKjB74z4v3R4EseCQPXJXfDJpuS2TdXAXTjoNkiGjgrjWzUeh87V1uS6P6boNYEgkxDwuqXv6W",
  "key38": "5eK2WFKTgvz8yKodY9FUV2HR6n1EarrxhZLpEoGHZVD7776jZ5prsvmkE61qXxz1JNrxfJL6YnPbjXE8J2MA1ajA"
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
