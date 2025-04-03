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
    "4EXb8fEMTJGwhrQxMSjmHLkyHNb9oHFRrLbBRRs6JFg4GFwg7XhRg6nPNsveBiv15z7EZF1PJv7o7yjhWtRh4zX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDr35BTPgsWNzjxscs1heh292eKyKK9hvNrEihjdoqibnAtruh1gY6tPA4EDZFRbE4M3Tm3EcfKCZMA2nPmvqMT",
  "key1": "4mNfwcn7WdbxJuwYpQkAetsDHrqfBmUTkzCMhSwJ7G4F7eUASEzVWhe3J5DXDoXBdhwoGjqzAXJi6Yebe86eA5pC",
  "key2": "nH1yRDJiYQJse3CJ6dVXdUGbfTVWGSCsKdNLTSR9Tv1MJFn5nm1jKXTDH38KMFqQwxRdvyQDuLHsTwJnP6jkpBt",
  "key3": "5yNMXcsxpzLpGCnwrHXMcdz8RmQTVEX7dnVcNyjPJVk1tsUtuEi2sEShBWLmyarkdDU86eT7hr9bjdADbMD1Nmak",
  "key4": "4ZjadH4Cx5UmLkEQjNEpvnW5y2EFNFDdHVQYN6XixUcQfNNMK3CK1gidJSmSqY7Gu7aKnwXx9JzSAqgUN6UbdB8U",
  "key5": "4x1PyKmuYJJs6ngnnFQUm1gLXWB21EcF3As7HNV1BxMzUjJQ8WudEXsF8mmvXz6jBTaWcKYiPLHFC66AAfoK6RXB",
  "key6": "2kL1rvFJhTcTw3x8mAB47dpJztk53f3fZsjxGa5EiKMVKooUikjXUGGYFh3jedaKYfSxB9VVHtCHAg2SQvCi2yu",
  "key7": "3aHKWHa2wEsQxB8ApFhDHU87tWcjPB6Ekezeg8ErUBwRbTh1f3Q27pG7YxyEV1SXJyWuz4f1Lpf14sdz5hKySpyZ",
  "key8": "5YFCk2DYwkE1WJBRkKq8oSWFqY81scJwGMZPcx9YiQr8URyVaZi2awwoRpcCvvynD9RHuvSvx6rzPediG4Koyh9b",
  "key9": "228kPcXiFLsANbXRVY4pGQ88rCCTEwBf3vGgkvu8FCphbMjhb7K5AWTufNfc2YGKnHa3i9Mn4XbZKmrnKPrFADyT",
  "key10": "3ft4bqk2FABHNE2CDEzAiYvVhty5RF5SJXnJadw44Rxg9ADrLzgC7vvQfjFyh8YavFj7AL1yzCkcMzHVdjks1sJN",
  "key11": "3V96khEh814FZngPfUrn27gFtPUEDFpBaeeX1oraMwgLafSV7XWJVGrcADMS6b4VGSHBuwgmN3YfQcKnBRjLZcyX",
  "key12": "4J2UdrHmz16MuLtx92of23P9fE9c3L9nJofMEeXqAD5ufd9yZD6FafggEX9eKdJ7ZaZFQvNmaocXz2W57Q1YUCVW",
  "key13": "4XSenneV2uxhPK2ZJ4Xsk7NCi1GUnjEr6VNJThRyyTu8BmiW5h5epmy76PxmWSYWu6HGiq5iNE9QbATG8iuNgo3e",
  "key14": "3HRS2WmjnjzysDk7u6N16rXK3Z4qJaNUWUEvhW3JUZNygaBdoGAjThxMNZiF62hWPzHPdmkfRDg8P4nsgSdU7w4J",
  "key15": "3WzVfEfcPBw8r9UHUBR2Qi48Np3V3px4A7w79dgji2rRuDZJauxnqXrnrC1XbQLM5kNd5hKvQq18PnVMpRCUk9vE",
  "key16": "41TwhG2jjPv3QSmQPTwQtEKmh31Qhd2FL9DdsYTs5qPDxX8ovH8QkrUSWP7HKqbRkmZdXeAfCq2oDDCTUpqCTnvr",
  "key17": "4ANRhtZRi67nHUysWcmSia5UY2grHAMJyaVZRE2XH6etCkzR6u8jA7tXpvAwxwBAGbU1sh3umJKEqGBvXMfofCyQ",
  "key18": "4D46gTpGmC4Ke1sPHfww5DvLE686Jm4A4bqGcxZVjEu3k7BGE8p1JWKLgF8QkypBPUeiG3iqcPrpJ4iKQ2VzvS2F",
  "key19": "472CVHCKHaM22qY3hwwEkJUhh5QqXmhrmiNaR4w5roJ4EyV5RLNdsgs8kNw7RsEuyvMAgH94Qzdz7kHmaZZ7ytu9",
  "key20": "2fF85H2Q4RWWkRkvP2EhczhbVGwpHQf1B4edKf2LyAimYf6Mf8oc5yp3bno97pfthsroXxJYxBe9s12L6rzPchGQ",
  "key21": "JBmoz3JomMQyHyuChnqfuWqyae2qwmhD7baPsLRigLQSRVZfocXEN2qJCWcgdnq2C9Nm63Vtb68hbRAjxsb8TXC",
  "key22": "5g65AgKwyUffppVqHhDLcQNcynVcXHaxemRoL2kQcfAwozM5TaepsQS4ATesWYWKQd5B24U2Px1ApB8KFBQfHSiP",
  "key23": "8qn2y8gBiWdMTcYKjU9g1t4cgJuHYExw5bfPEzS1VmJySqdZ12pC8wQ8nBRAhUpd8tsfpzrJtJicQYKqPdnqw36",
  "key24": "38hW8k7zigrzdCFBujrbQLU6BhBVEg9ynynFxh854rYS9CdNZVkszafPTgK8rbWq7FCJa23AzGahVmh3wp2V3VCC",
  "key25": "3giSvwKX2sm6Dero7NmTEpdjghQF1ha4ntSabgchfX3QMWahUT5PASiVBsT1j1RKJLvoH6tFRSfVCSBiCXYaWCxN",
  "key26": "5ePFTDjQm36FXkW1UyRTZCPKCWvR4zCpMEz5MdAq3P6fMwZVF5YqbpMA97CJsWgfwgPWDJhmBxWurzZdskX6gVmx",
  "key27": "cAxrec2q76unLsfNtT5F6gXefS4dnQWUFAFF65m7HuewvNtocnufaUnKF8Ki5H9Hpr1RG58xD5KMacFqRqQLJHu",
  "key28": "3C5XjAYpuYyv8MrTEt4VtSs3ZqPnzsoN36WBjLHy1kvDurzj6321FL8rePbPG6gVfc12Pon8EkbDWP3EeqNNhMk6",
  "key29": "2pgyvwXgcDMar13qbahcYstS49Gstc4CVgNHom76sGBKEdKCPo6xLsDhbEdyUihzGvAiusaY12wzkWJJW533a3oS",
  "key30": "56bgjusKsmzT2iiPFWxrAF6yVyfawQK457AA3QUkc6pt1ACT1BSp4e9dqFWtJZrGY19jPP6zG8Zsha92HKsVxkgJ",
  "key31": "2snZd9xQVF6aUzKLCLjWupM5TCjSLTqrXioCq8TbYTg6cBydqas3UKEPzTvz4AzmfBCKMmV8tUNLA9LHYah1xdh7",
  "key32": "4Z3HQE8YL4GgDeKW2yx5UBGQghKoyPXktiiTBFJYZxHqUuVpQNDLX4GK5VoRk5iYVKuenQATvTzStF63Q7PwDUDh",
  "key33": "3mWi9LS5MC9Zxay21TiLS2EiwaJXmAcgxGg5ZXTR174qGFCx7MguQRpx2LpU73zEdswcvGqHKcDYUrxf8Z3jGkLD",
  "key34": "3bi8cajXaeXTewFS9HaPKRGE5Y38kv9bVcqjNaaFfnzxPtxH42VdHYTVatuhTXpcgLnPVs4K4CRaCaR4nE5vy1e7"
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
