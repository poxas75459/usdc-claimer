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
    "5Hi7PMhTtRRfyJvY1G2WY852JPGiaPZspUCNUeTu9BioraQx4EBcdTcVArJXZsDAm3gwaLCUPc1sV421Mfhmh7iB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxUhV1ZSayqT9bsMyd1iiXd2pcdBPa2BfNJnqBGVQ25F54QA8vV37fzZ9B3uMS5WMtxjBW3mj9EiWBXmcujcnyN",
  "key1": "5DraB89djXZi64d2ZjvScD7sjJm1h4BPAiPAPdJT2MogHhUBMqtYpAjJ8cMSkvBfwnR9XDj6HL8nUY3Rmh9Yq6Jh",
  "key2": "4tw5ASmeF5bKtFnySTeEaSRcZaTDoKtXEzh1YGf3GoVtLYfVnUPsLAodnCoZVjfvQZvEdZtqo4FRm8MunEvRGxEQ",
  "key3": "4Lm2Ez8ztazUxAhrdjJiXBHMnFbzRtGhYrTt2jJTgfeULvKgPMwZZ8wsQZVRXSLdmcJP3q2AQfd421i7Q2e4Ddaz",
  "key4": "9AV3SFZ5QK9G2SeFjcW3w6H78wHzUXFadKutwPDsWw4xAFkdzBpqFv75qtCUVk5v9Tunewztpksp5UrdU1iGUJM",
  "key5": "418WKk6xTtM21KhH86zBvuzNAujrnjKjob1xkS4p3xXHM2US52oUAb1Ee5QNkMTkyrcR8oyjT1UCHwL7EtoBHcNc",
  "key6": "93BcTNDAHxFQFtzjy1rTyZCR4BkpvLdRZcQDHisLc6NbAEJNrW67NUErp38hDK77CUiMSENyGeW418m3mvnemF7",
  "key7": "62phF5wPtX2QNU7tCcc33383DuTuedSjADn3NE1yyQj21eqTFRri4z7xSbJGS8jgWLmeXxGqT7J6Tn88ETGSm9dk",
  "key8": "1L1WijmkTNYmTNXS26J8ZEQxBY14XZxWTGEHVueRxpd94D91oqXFsR42ppBzcDLTHn6BvjMUVPtz4WkN4nytyWa",
  "key9": "3mffPd48MoHFWNPEAupTYeEuSCL96Pb9woxFW9p5jxEn5MrmQoVG8hfHnUYc6nB2txtBBuCQmJpRjPfB2eRLveF9",
  "key10": "2bzPyFGt5NtVdUds8LP5Vtku651U2r3wXg4NfrLxVDM1u3aF1CFeqf5chukMCKsmwed42VtZwMkxncvUyJjeruMy",
  "key11": "33J828vcVirwcY4ZcfMuNC9j3TwozaY26XAS8ek9daQTAUD6TLRurFKji1cFm1Rv9UbNkJArMc8M9dkJ9xqmmhDC",
  "key12": "DtdwdtYp7nGd9ZJE9cKc2Lyr1R1ieuNnDumkwER3ueJ5qZyrufNEYdy9uNdeerfe1EUWXcDWepMzWBb3cwqZbzn",
  "key13": "3n43hkpcvEV1fsV9C2Aqiw7AMwyTyhRKvmeGzhP4SDfN1LYRH517p9KV6ASZ1CzsuHdh7S13m3YwUhzyYzwmxMnK",
  "key14": "649ZzGo2CU9oKau8Uj9af6YYVG2cH7J7asLff8ximLR4bmckzuLX7QiksxorzW5b3T8iM9KCn6jiU5Y2McswKoy2",
  "key15": "3H3VBZ6qWh3Le5kC5MjLQCR2XNEWoey7Rr56GJLv6PGvhE5TCBcw4SX6yPEjFLj8vZgSBWPYbn2MZK93CWDSpfhM",
  "key16": "4JtPSqYnMWF38CJbcirWudGFM4WcsT126QZvDzNCgqvAeSN2zxeRRF9UjqZad4UhYL1M2HPRcYHPgMVTY8jXDpSF",
  "key17": "5iAV7ar6q1ygcCTbX3BB9SDGqDTFxRndatr1oyAdyiezWr2LzXjGxXkqAuzRL6KE41PTQxLo5dVgMkR1DFDwC829",
  "key18": "48YzTyuUohgU8y7yE2X76h71gmXAeKPRYQxa3zGNM9q66XPwg8PAxX5jL7fhvj1F23Kh38WwAKaRJarfbjGvDa7U",
  "key19": "4PkLaTfN3a9EF6aGKG3tH4jjyGz74kctVXx6qoWVZUj176UHKByk2eee5zebCFi7hV9jonBPwL21XzehANNwzJzq",
  "key20": "4AXiPzsbEwykahgKWQcCSZ3zgdvWiMQL7VuJicsKrB2jaZgkybgsCDg918jHbMFeGs5NSinvqpqLZEEoax2PPiLz",
  "key21": "4ZNZ6eJ3wfZeRdRNJnd9HrQTM7UTDxHYNjbGKd3DjnexcrSR35M8fz6H9skaEXXptgPT7TaPuDi2Xb8quehwVSQW",
  "key22": "4ZjVGyCEvmi6TVsgywzi6PUbyxqfFm7nhxfRx1WFQut9vytMY2n2L2hZsPeNhCVRStjt1ypuPgkDPdYMWAtHYQji",
  "key23": "5w8bCU6TQVD5PSjce3YPAe2vJh9gStiYtv9M2dCoproagoxLpzmbB1ir2NxsCAJhfT3P1sunERSyCqUBXsr8FVNX",
  "key24": "3KfBgUsbap23pwqJU28tXY72z965RKquooe2mSQk6drpk7evTZPu5ZkKpwMcz92w49fWyca66FisbDBFVTu6HXDW"
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
