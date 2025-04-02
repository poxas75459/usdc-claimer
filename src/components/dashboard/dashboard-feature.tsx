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
    "591GnUhsYjrQesMUFCF8eSm8uNLS2rxT7hpDoAW7ohvmUQHyrAD3yg4apamtoKSfg5S49S139cT4AzKRz7s71coQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwPDQuvbqZDmvhb5m8RkD2iZ5QWfHp46LEL6zdDeVb61Sh8cH67Xaz1GU27qndDqRKtjSJ4BBsqWMApD6KSvdPn",
  "key1": "4FaTqQYBnDj6FRQ7C1QeNQPQ8WiUhe1JktTv9XUSJQmHiaRZRj1e1ipy5m8QJAxjgX8X5CtMabhnN9VXzcrLDLgw",
  "key2": "5bYy9Sp3sEZRBcbswvjYqEHBpax2ArCUR6s4J71bL4ox7atQ3yL6BHNktRe76vCVfDLpTTzNumffaKyhJDpJv6UK",
  "key3": "35TiG6T1vESKDazTinh2CFcaXSWXe4E5ZhVL3WqBwXU9Mv3cF3nmLjD9R3D9kLw42y4QXuHHLy5t5c4v7fRcK37K",
  "key4": "4SfVSNcQB2TSj1yk2hKghw97KyhDXUCGaTksnwczbmsE8KPc8CPfjUwXvZgb2stRv9pU8gF6yuJuBLkzFwCKNwBQ",
  "key5": "3jZgMWXRvprPpDMRKdnPtAx4ya6BtzXuductGdUhDPLxRFFqZesiVwBzxSxLaCeSiqpiNVX8xnfcQQtyJwq9Y1c3",
  "key6": "zqZ2YXLVWMTzQNZSTj4RFGugLh7wFw6rgkY5v9b3ynBBL7JC3r7sD2gV2czKphH9hyZ8e5qbd4BcK4TJCnXGQge",
  "key7": "3MiBXWoz1qLiXVRZggXzafPaQcWqcYcmfXfyooAubNbuuRzzM4GPh2ihcEA9dQgaeyHpPUMuuVSTGSgoKnnA5vhN",
  "key8": "3ZM8XQH77RNiq9aA49HQVsy2t2JGovBdegzXAs6mVJB3uQ6prDs7iS6emcq7vQ1CiJg4Qd97eqVwgbYit5YmRpBP",
  "key9": "66w9Vs5Jm9skRQzo9NiVWsYRh35Z2ZxVDkBvCyUNaQ3dAZSydHqvdPmohowGC5Y5uRtvbNZa19w5tq1qN1i1RQiU",
  "key10": "4cSjMLEuQzUaWzcnrxqW3mSR9P3V6Hnr4xHgGe9V5L12TiRAt3CYaUX4d6q4BhaGMZn2XR8kbCCmhiXTBhcbzg2m",
  "key11": "3WEqAKFjGtayJbqZJanvDxR9tTKkPCNw2NpiZe4uxd1bEoG16ixgUxf56nW8GqF3ZqCZcS2p8nuxET6EULkQwgZ9",
  "key12": "267doVKNKsUd8PXu879MV9mFNNihAA9UqGJ5PDaG3qgWk5TKkqePapshjrMLb1xR5KaTJo5LHLEzDNNf9n7pHAXm",
  "key13": "yL7HA3zAaKvsXYegVKoZArTnfPDR5CSyhvAswAbokeTz6WLHGKiKKZuxtwKXr5E9ec41MX4SspUevqmxFZfs6Pj",
  "key14": "b1XDBVvd5kkxosPgCHWt4fMejAdupYyprwVgMAyN1NXccfgsqpxnpekDevcJZNJ1CHqdyULhcSUGWM3Rnz92XtY",
  "key15": "3Uxco58df4WUQDfEedYYHF29roB9gzAkKhY4mCQNgZgMvaqgHk82FouGFxXdDoaAi8ZurfDaJJ1mGZwU71UsM2ZF",
  "key16": "3c3uV6G9GW6DyCmSuhahB4gcCTeDy2zWJ8mkzmcBAvtA8558vdyYYcEodUzHPnCWBv2VggauutZWMos5WtbnnYB5",
  "key17": "5gNYGiq36tLjVxnnJDCbhyogyXSmfZNV2xHpGCYgU8CWEb9E4oAHx2K6z6Dt9K2Q6VXFyqhmvNffnzRUadsxURKb",
  "key18": "2dcwqQS5HVATa3EUejJ5wKVVKKPMuPsg74oJvuxf8RbycNscjeWWMH8qbzHtkQQW5jyZ7dfUH2c4xCpBKUhtACVk",
  "key19": "61jG6HLZGJa9uktpXHudGCs15WUgHsqo5bg314AjFmcEBdMcCQz7HJRB32gFi2fUpLVKAnCqnNk9SYTMJK24DbFx",
  "key20": "3XNi538YCQzkTVnKgxnJbThpvRRxTzofcsqVBywZ9Vzxa9nyfB21maBH8GcPzYGym68MFLh14ThS1CNerZE7kHHk",
  "key21": "2T8As89jryHTQjL1G8sXtJozWdtSEcapbhjEBPDwasEnRJ7wsvbsu1RUytYkRUiimF8QFzVSUnS9erWvi429aJFo",
  "key22": "2yZworLc7W5Enm8PNatfsT1yuyCBGMF5HmSWNWGS4Q5zJXvwncC9a3WpNhim7RcHBmriZEC6USgTuVnsik4iEi7C",
  "key23": "SXF3js6vRNwHBC5NcPwPU4RGEYBRUCDRx5iHtPMcGsV1cFTmubGZXEwtwJ1oQZq2VLQQ2HuVDS9ppryGKNgvGBc",
  "key24": "4fn5orv2V1ukwtgAB7zLXAuAXn7TBKtLbkVCuTZupTPTp8YAMt4MrtvjgEEPpkzxiJAHKB1ZnVATFGdjWVgKk5cU",
  "key25": "5NGyepz768E9cgfRxctB2rE5rsiK5pN4B3jLhvAU3NqiaBMA2NGCxuAc3SUDCwdEa65N7VCPPGKFKkyEyqN5j1Ks",
  "key26": "5y3BYJn73TQxDCuyYfaFYUMbPaB3Ydx7Smm3aCWzgAjh2gJ5umDFjUVtDgn5e5fyPNiDSJz5rheMPfPhKShJyaRm",
  "key27": "2e4TMkvxaHzLFsrPESP4MxRPoSXULP4PEomyTXwnhsekYDLAybpoxb85F6Me3FwHtVbEpUsLGJLnGyD8HoL9WKjq",
  "key28": "CjMcyqt3k8tLBcZbJ8e1biALpnssxRjivUVMZBDRr5bBg7MujAWoDJ8jhM4VtSQh9uVJX6HFr2sdsaKvN6BbX1E",
  "key29": "4NDMJbgHqgVTcmNBkBVc6DMoiaZ8WatFFNkNT3pck8Qdug4pgQmo4rMh343Poyo5Nr78WZzakyoFVEYxhfe1sSwE",
  "key30": "5sFN6T6o8WYSQiDE4uakUj64yNUeCoPchXdHPa1uJGBqpc7wnxNBrhRyxSo5M7SqC46gHtoep6x5YzYp2yGGEx5Q",
  "key31": "5XqL5ZacWgMzvUmwmdXBfxSXAwaHBDh8qRBM6eXECpTMiLWZMnaPJQieXwBeJ1K2ugu1imrLqjsNec7mCMztX1Tm"
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
