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
    "62RjgbRrkukMgjqGVCByhhh4KZoTKN1XJ6akt2ccRXCfyvszvpUZRwpDcaNHntCutLDnRCZxG6LoVN98c5mypMKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMwSrJmHV2NCqpJTF28XGnx14bx72ueZxV1BtLAD28ExPBzH7UCsWKDPCUxa8zcxHwKz7AT7meUoZFdLdWPRhmS",
  "key1": "62zWsXz89BpbfhswSXrHqf3iypfkr7MyeHs9WAxfFnwufAPLVgUEhtf2ZuVcrkp19miZZ93Gz3nSizYDN2LHDz9",
  "key2": "53GifTxUifWQyUdEwoenuqRku7TyAJCW92AjwTmuZvrn5wEPSZdzrjZVmrJyzxsn93DfE2aY9J5c3WfWfJKjmv6i",
  "key3": "4ZejJ6Pu37unWjuRtBbexUdEzFz71fsT6RPYMcZL3z1o7WewN8uZGxv1ErAG2UYXsdYXQWk1fSpW8QRoEnrh6xgT",
  "key4": "4tfxTBg8VpoQTv2LqwqYr8QWJp26f9729tgY6awsmgnP9xscmAK4yibtFVQKHfg8jJJSRyUfdfRHxbpj64F3d2ym",
  "key5": "2Sgk1ztZKN82oZ9W97Guo4ArbtN9PmDVjHxWVFokNFEQpP74bLyAaU4Y3UfbwmCuyrotprTMxrBYk8Q192AM3TnC",
  "key6": "5sE3mpDPKFRGaBTThKvxERN3GdzafNfmtbkSGHw3qjUQRQZLkKz14weAogGpuG9deAjPGi2GWSCTGuDfyKCtQdSW",
  "key7": "3R6yZDUg8nq43xPdFChpCek8qMDC3KgEd2PxTTqXY4a6CoEVAhgDjdbGZbMwFDaZQdDxFu5W3fSt8wDb2pm5wrtQ",
  "key8": "2H4n4DWwpSadQaKVhm1o1L8r1fZ3RL1YHfcAeQkTdpbLJ68iq2ndw591ngKZZ71vykmZrCEaGkk6AQ2BwzsTLmnd",
  "key9": "5mAruw5egJj45w6aEhvtZPysynUnaLneQv8D4vfftNnHAy2kaYQ4snFM3kNxjVAQ4LyVXUZUsHkhkF3J7ecUDhKv",
  "key10": "aGq7QsxyrATuPgymrX1H2DmJAUpSn44FBQwLHUNDXyHJMxLCXd4hBMwxsD9vqqEd2EnUCk9kAGm57ZDk41UeMGb",
  "key11": "5Ld6g37aZwqCysBwgK7ka3FgRwFam6zxjEz7S9EexAEHUUoznW9dqvKvgdKNJhWfHwq8eoijdTa2vGPc9XTguJxX",
  "key12": "y6G5gYbjYRcqojQbPfyiX3wLRgPeoFosST4io1TouPDgprrVtgGrPnTpHsYY6YF9bvhGWNWYXsrWDQou7CjEss3",
  "key13": "2WS82Ks12rDm3YyN3bgq1zbnM6c1V3Rhz6oZQ6YScjQsWLVVzwLmJQw5tLQ6e3b5uHZDkVSTzgnAWNZVbg8mEpvD",
  "key14": "2biaZAUfpARB1kr79fcunQp1HLGdsyevVD49TsDFKnEbfQPeY6uDHo4FCZVsrJu4mLUQBevnKBP3Q1j9iNHpMAFK",
  "key15": "5zQ2eEjCKtDEyKgHPkzAjB4Px4ADynhokJBzjhKms81C8S6MhMN9fy2gbdtzaT84qoQPkpH7DXF5PPCXGCHPwEM9",
  "key16": "dQpipgWWjs1jUPUJfyizXXRkrfbTxi7wqixeCfzJwgnaGSrdDEK333zmG9DpXGHB4ZN8aWCZzqotzaFGBa5TCPJ",
  "key17": "34KWbHRppNN4YGSaE1DUBC4Z8cSzFPDPrpsQPmud9sMg6d2TB1Dg7p35zkxpSd9HG8kzqcvc5GsSsWTu2qnuZAxE",
  "key18": "NQQccfRQVjDCwkmwSf4QFXgT1pP4jV5vRJjnyCeUAzs5UU3fWnm2D3v912yqcrppmpuqesXT1oyZXxp5ikc86PK",
  "key19": "BkStUYwxU38mpmEiiVuo6KBkLSAwvZBqvWoYKvtREJ9WitxpiNZLxexYsrEGowdbza3C7qH1XpAvoNsScxfhwuq",
  "key20": "2nBZj6KPShGuCBn8ZnZyN2eS5iFhpaBLLeuYgvzu3jWQT2vL9PyAiRiKUCuFcYeU6Y1EfJDJ6aVZQbMQf1BuWh77",
  "key21": "3VbsTqwSDEjVwBVsXsXxAFoJLHRfFj37XQBYNxQu96hMXGb86EPoYf9AoBjD9yN5zuXNXeJnVyLmkUhfHdcgsHZZ",
  "key22": "4bBpvQdLRpUL3VmhrCNj4DwVdvV4kJ5sSbW9PhjMANdhYJ9FF9E67ejPZtr648ADUHxp18qgXU8ke6DynjTQGaq5",
  "key23": "3ked6sbhZST7ELKjUuji81o6W1DmdjXA7p8n4dBWjZ7zGf4DRSNk91tS6hn3G9Z9DLG2TxyFmwR6nM1JGTX7t4XR",
  "key24": "3Y4LCzTmU6yDXHxX7CJYFmYhKbJ7wfH9ShrRSwZtRPm6Wbv1AovpTUditJU4Z1rZ8137HPMdvjtAQcdce3pLuZLi",
  "key25": "4qM9yj7hmGXUFPTviwibZfxsr7533yDB49Jhrom97PcS4P92hVDbDppkmJmmVzNSdHQFGU4E2UbtQeCEwRKHfacS",
  "key26": "3KqB1bBXScPPdUE9U5PdwbLujPpgTQ3UiKivMVnM4JXsQuhe2Dsw4vhahN7cdtnBSchNxg7Ceq3XJjr5NHfmzRni",
  "key27": "copGEHwm5ouNbcpcCNzfMtLYFvYpUsQpEkUWyibHurhxpq3ZqmJSV5MmEgFrooff4yp2dJjDwTjuJYDyBTTXETG",
  "key28": "2eQF5oYbddTBZcuwvFC4xCgCKzKTMye1YGf9VH19aiduWnnTjsi6G3iUYn3HGkaPPLnituF5d59nVtJx7jegeRgx",
  "key29": "2X2DnnbFvB47hMDfvNfk4EAZB15oerB2gMWMZRSnhdxeDq77wkTYpR9KDva7k7hqE6uLHTVwUZXzP9budEGqKzm6",
  "key30": "3GcVkNLqhNAfHsGTVwMoL6J59J5Q1t7nFDdGSrESVdvinaSW23kCV8FevTteaTDJtxKyCgVnGbrwh6i1M7YCxghP",
  "key31": "56pGX9tvnfoktGbrRbC3ykrJXeAMK6Mu3aSGK7eqEaYM7NNMx3Jk5vgw5NPNFZXNDypwWFX9UF9po7BLugASYubL",
  "key32": "5az48k1Ez2P8VUDwvc3AXb9tLkNDnvUe4E7X6xJhaNk5BGKKayL76A8cpR6sSr9bck2FXNYVbmjbkyxCtrmxCDgP",
  "key33": "3uy6qoxFCSg39oPTRmsQunQCuwb3e2vFAUisNCSCavYV8DwZvkPQv1TPkYozZuJwc1LAnPNujkK6KngREHK9UGZE",
  "key34": "PBR89NK3rdYX1ri1CLgH6JpkSY9CaFxEwuoyuu9Kt5yEUagScHWYrNzRpHhr7MEtGPRLJrxS9xKod6cb1EPWTCB"
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
