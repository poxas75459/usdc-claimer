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
    "3CDUoeE1BVSQ1ratGhCP5Bg1Fc13RiDkPnX7kbDWPootmjfkSNxY7krbjWobRgibubsHR35S15BCdU9msub5onRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPfDu4S6cRqJCVZBdP8nyDydNQabAQNvjzjjYKhmtcUTJfHaZtdmEDHfQKbRx9bLXxTfD4CKArZsNCtRiPKYymu",
  "key1": "3nSRgLLLRKHnSLgpWwXd2yrnRuGjFaMFXbXL4toEy2G3k59Gti6NVReEBs93wmqeBGWd3soMwwSRciHJgW5d9LQR",
  "key2": "43YPxxasrKFH8zjcHCCFKh1UEsyqZijbjc1ZLrwSF1JUN1HRDREqo2MrtuMPrk7fQBt3HjRwKNamNeNFksDecRdV",
  "key3": "61umFCUnPx9dBirxreztdQKL1Gkc6jyJKQ77ZtRH62GBa97cvuoTT475fgwBzykWbC9wUVyxjKcPh2HWC7WuPZ7x",
  "key4": "AhsfMey9XkJucH8Zyb7uzt39fufC6wxoBHxLk3V2m4LEKFxYvL87XBYbLmGa1ycTsEgM38met3PqVNtLpJ9nVH8",
  "key5": "5izvZeCeqmJZwG9PxcHDRMUbviCuxAfWJCo1BBoZdiQXqN7LW1hVqRWj4ZW9CCVZTqMGPTNX92NxpUQcDq5G21RE",
  "key6": "4mpbuiRSvi8GrRTovvQMJKDUGgwH4eT5NCQweyLgHKkxezc7dX5LXPYPoHycqU2Rvb3tzkJYVShXdMz2sjas5AtX",
  "key7": "4E8MtJrSssGaYHpEB8knwB29A2mAjQNKapT2NVLGkmnuHoaWUBBtangN3bXKtG9Cmo7exnxGvzrMQdD9jbAbYc8",
  "key8": "xryxRDqVY9v4QuoRujqi1FCArpSmopyQdZgr4onw5Toz9UVA7dwEXuUvFrtJcT8CiswqqJev8wa7uwjno4jJ3eU",
  "key9": "CWbBwcW6S33wvJYFoRWGm91X65wT3hxhnzN55F5Tz1KQdmW9VcqqAEL2VBcVCYyjoGDgee4MESM44rWdzbbAkww",
  "key10": "4NnPULFu3ELigvRrdzzbCMuCxrgEYUn16BHXtZSty4d4EDZYFDn42m94BLPAGmbLP9omy2VMTfXPdeZFjQdhUn6E",
  "key11": "A41SVXJGvKAfuDVTBpsk2FZggQZ3tzVG7VdcjSaaydrcBZxxW6tiS5V464j6o8emiR9KbidhtaFZeZrGrvj39JN",
  "key12": "ttBZGg1bAeP5QWs7KBiGeAgM5HzfMmhtNXaTaRhovAyvsgKMcirSkLHCVfnj9zKU22JZYsyCNZ6j3CWrgJJLem3",
  "key13": "2AbyKVsfmtpPKqthEfmp49X3B683DJx7LPgKyCEr6V5GxqGBhpWNGkyTfiJPpmMBSD9ZjXq3YnKnEm6CAhr82foj",
  "key14": "4CXPz2yJfqVBNzWAQVW7EXjTq86wDA1JwMTUrwPo8uWKsebK9i5Bc8szaZEpsQjitBWAj6BEbnZMgJbEREVMEXTQ",
  "key15": "27yimiNy5iT29CaLx6tSZQbApJo4NrtPShPoQ4NBfrX1cPJXzHEa3J5dfLxWWjRBLZ1JXZQUq3g1mzTZMrdERnpw",
  "key16": "3C9epMXjGcr9JECihUXqBirLd5Rwtf7vEhfrR4BBgAAvAU1RWqbKxFcBDif7XYu4WfW6c7tGCvH61aTgNpBgi9Rd",
  "key17": "eUgsc9AxhG9qc6MHWx6FYhrYmR3cCFabWPuHwjLQQrPszWAb7DaC7vvEVWY32XXDWQWPdPrzgcuzPVJV6vYLEDo",
  "key18": "2QDBoXjHD5mHzb6f7XzfP4Ps9eK6zVeKtF84pHZzb5wmznv77NvgC6hWRYzGH2nsqHuaiHZBDQ6FDKVujyGNFGk9",
  "key19": "4fgE3ucUJ7xpDtPoYZMLJwDihqix6o2HqA2KR3pJHjWkJG5CnRVLv9CNACeRf9ypnnFW5eTdWoaHKEdvyciSgtMR",
  "key20": "5WWLsDmp8UD3WSK7kpci7PQstCWDhNbRYiTDfjLnrDrs4zrjmcC6oFd4nSyqJRS4e5ysFbJgvLn4pJEcNNUNbJGh",
  "key21": "3aHxcAF1YeiBAsx5ouERmSHpbdE79o1nCGJK14FA34v2Bqtbf93cz1tXvnQFMvqAHtJQ1UJeoV8qWZqjg4MBs5Y4",
  "key22": "3rCswQXm3p5DhcYi7hrNAVLgpY6XFt5Ypd6uukDkaBf1rf4LYFirvbUpvXMnzrdJ4HupNe8d85hJCM2MPyHnBWtY",
  "key23": "SeyRS2WTUJMQxgq5ZtneKRSvBWfXME6VvabZxF3A5H625qenq6ac2iWqNbF5aH8CH67RG1SBGJwJJ4QiqqfEuQQ",
  "key24": "i2bx237zBGvwTv64uXjrG6WLjE3CgNQ8cTFRtHBRvRBpq2HJqfg1fh63KFHwXhm7AF2fRMyCLQg4Y7V5NVsieTw",
  "key25": "f73B4b4oHEBuWWNxZAvqwXh586AuSzk3PyrYdyA2Qsh9e1ghdCRdasCAizPHjAgk8jbdFuA4KDxJg2NmoXXNjps",
  "key26": "2FQUXy8742ExL9e57nJTG5sxp62oJc9jbeDrtUEBgeQg5xKmxhf3YQLk2Fwwxu2H3XVoaFqp8tUck7tikgVUWM6q",
  "key27": "2XraDEYjzfEChmdWGEsRsaW58BZmQbot69ZAekngzdpRbasEMRjZMscaD7571BagFEEiTUHvzBWnNBtGCMGwB1JT",
  "key28": "41frkDfMNfejgqJZ413KCp9T7LpnofcQvmaSf18xwEtgZqdwFsKiuYLsXcGvtzLfxJKsjsRoGRRFBgpaaYSdVE8W",
  "key29": "5ESN1tgc22f51WvtceNhWoRnx21NGam1dPy6U6xpD6PD8Xi67aAFQeRT7TJdC1ZapGQ1f4ovgtevXsSfTcbBwj17",
  "key30": "5zx8iFE9SeJas3Vyrk2cBTsLzJg7hZMCFmViBciKMabvu6CFASGoLcFUcqhvv5XRMDSEhLWBMA7Sq9gsnLZvEBR6",
  "key31": "2VF665M2bnmCqvGP4BTYbpP4ScEVQkP7kXiDwpYyFd4BD5QvwsCj4jqBoC16D8YTeMrL8QXirpNfaaJ6zytZpthy",
  "key32": "32Ycsqqjsu3aRU522xZ1BqyZBw3hxMtwctCEK2cEAhxjTTkMhHb7gZiQRouJnG12zoSsVxZbUQmMbGsrmA1XiqBC",
  "key33": "2fB3VdiDGE4xitZ7Lt6C7KrMFTNdZVHw2g6XmGPyvxiuwnAheELviH1QZvLCyG3YUdGVxpfUaWiWA6eZaeXWfcjm",
  "key34": "3NnmaeT2QnuGz2BfJJZq1EmHVAcah4zFBD4RY6E1RbRjFJ5QyyZAkSAiPEYEywjbB7ziKqUtVhuXW2FsFYAaR7k3",
  "key35": "3s1HCjDFhh4nE3SSW2cpiNTU1BN6CZvewZTF98ifEiy4yfHBt1uXLyPVaPbXztEs9NtThdV6GLrkurULooNdKwBZ",
  "key36": "3GbEqXvZsHUDhsDbR4YF7p4cLtupVFMjuNwHbTTrXq2LoLJhcQGeXfcng7kjDfX1LBfUGViGDkY6VWLGizixdC5d"
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
