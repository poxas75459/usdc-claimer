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
    "5SzW5DPp1dAthiva4WYc6qbrjZ95YnT7PqCck8RXbWenh3DCus2PfuhWkF3qwJyFccvVKwSGMRgp5bLYz1dCPnRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jttDm4ewgMB1HcE4HV97S9f5trfoXhMR1YzYuNJYJuKih1VU7JaxM7qKNBZM5J62owvdDGyBU2e6nkSwQv1MGJW",
  "key1": "3JvantV6s52TL2HMk9WMZbYcSGGVNCNoALd668DT6yDcV1rWoZZ6mgQNUrSyVXN2ZZ8kPmWq8DJqNrcdgqys3Lsd",
  "key2": "1d4EPD4q9dBuEtvcXt7umdm19DLgmApmGYCAux3DpuQpRpxY8GbLE5yDDj8Qc55kvNKsyyvpwToG2WXaCvtqELh",
  "key3": "3AvuN9Z3SFVWvLafcx1JjxKVcZZy469n3sRQUJXHU5VkEstJkFtk8Fe6mABhdcj9m6sRy2BEb9Ax2YsBcYXnoZ5X",
  "key4": "5Wf3EacsjfLHLdvKzdDXHzoXdMCBct7qAXqMSzGKns1EZTm5DSWuG8oQPkxgCHnkE4P4NMoozrWiEbs3JbcJyj45",
  "key5": "2C1x3NTYgx19gwip9JAMBLWBifXhHCNRZ6Eod5Dtqe6i14pEUfCtWNAimScta7vMrCZ9YefVQcnDHc8TGRKsN5a2",
  "key6": "5ziZrqw7i63bBsceKrhMLAUfExdpq7MHGsN4yKt3CueuyXEaDAsDwgtivG4GnrS15QcoUqMoSiQ37x3tSFyU4Mw9",
  "key7": "3TLUTE3Sn7CN5K82bYJjV3hiJmetg5ZPVephSwuRyHMcPG3crR2AZuYe1A2FE8kcTBWCdjXN6uQqMNZkeV9qXaXp",
  "key8": "5QNA2w6z5nPRh9eoeuW6jpBUBC27GSccx2PD3RCx7NWasnaNEN5ft9NpmDKqv48eQ5Wmt283CpWRo65JvKiJvqsD",
  "key9": "5MhddnwoTTRJeArmLBH8hwpv5jqQoY8Q9aGs2cM4zxtA4GuczwxfqsYXp5aQSRepFCJ1ASpgRJghNAWCiVUr7FCr",
  "key10": "GADBnft4zEHuGX3LFoV3y7nD3nzFXQqtw3qTB838p68um8WRhYjwy7MoutAYBtcGQuiTYy5cKjYYXKmP4nJXv8F",
  "key11": "4VVjCZm5koz3jZHjpfpGwSD4251y6NbazV5ia65WreTNDoDC2i8YqUwiPgycXDiW38jvSGed8MPu8veR5yXPHQpo",
  "key12": "3DLfsLRfxdb3b9bhaji6kWiWPjcj9hLArergU9FUWmSbcsCevBLMNHYf7JLBNhhFah22y4Vnhuuu5UAUftAstdkG",
  "key13": "66dLmExPMrQ2o95S7piEsDbMsLXe25mCWnKaq76GyrjqQePPekRCw7bAcwcKVMAsYW76GRwVB4udCV9CKVLxGEcM",
  "key14": "2YzhLnoZxDj3bUPGDaLLRJt5XejAYSHKC7HCwwWNPf3BrM44qjXSJqAy1TjKXXCLahMX4Bwmeeh2iMxeTyoBMsA9",
  "key15": "3Mt8SKUCcUYeaU71o1gbZSdvuXiD7k6sWYpBJioCg9mEZJ8Q15c8n2KPT2pUKZUeroHGZGsZ3hqvJgXHb73VfQ7N",
  "key16": "m2oxKN3WJZ38JRcrZAifTSdNmdUvhgMQBWWv2MWZgcgVUCvDepovT5B4KPtTJtC5woxRHhVDV8HQJo2Yx7Vm9qg",
  "key17": "4xTpsaHC1CpCPvkt79ZLXmgfbmJsaecE4Hs1SE2TyXKGeT44SMKsseVboNeRLzMFHQ7HgnCon2yCWmF2eH9RZbQ4",
  "key18": "jUEe4Mp9F2oj2Ska9QcJjHFFTmsm8j1TKfuFW46ktzwrXhNxAHu1MNeGYxZppgd1NURE7cCD2ewBYKZM1Fasxit",
  "key19": "2BpEGcoYLvB4t9WzKWNym9me7dxtYH15NBj3fgmsWLdjQhHzsVmTyu1weJz9h1yLwMK1TAvb5H9sMQJqWoYgDti2",
  "key20": "fpnF9NDo8x7SL5yt5SGhRYqV7TbsnJLwHFEMF7aHYsi5V6ECXB6PpEwGfjrTLeqhuPMhLaGqhztAAdpukHqvcBW",
  "key21": "kdeRuaLL3n3ydvEaKuDX2J7eSVk8B7pEnfdUgqRdgvgy5Putfw4dTdHNJzE8TrCKWcH78YtNfJEbUk6frbiNYxw",
  "key22": "2RSde4AdNtSs5qKLPoLmSJPy4Unt8ZewGdLYiN7hERmjEaCFaUpoeauJ84Tzc7x3V3HY9zPkW7QwUpmmnYRXroRs",
  "key23": "5CZ8auzyDg51RXrVd67vfudewFJsN3nozxG8qGcuEDnTQvgxBoQcBFyqwqQA3kTNbNnYivL9ty76sJAWoFCtrtFT",
  "key24": "5FUTAhysQLFnjL1WaCwqPqtMit3ayRgiEaR6GXPKfmTuDu4kh7kTy46KnDMFfprpznoWFKW33jLXT4pLVT7bJJHh",
  "key25": "42jp5gZB2VX6yYhjpVzGCTE1B7KqZkvsNr74CLoFBFebKhbMNxn5nDqRsFnFDe2cb6RHZYpvKfWum2vFcRNA6dho",
  "key26": "5Zp13Uw2L1TQP995VroQVeEiNT9tXVD6QqeDsUuPXLbyJBoen6GUmLhPZUwU6eRQq5S7x6vchzYhHcSdxUSGYE4F"
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
