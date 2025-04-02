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
    "5hkFr2W5JDBmzzagV4Rtf8w25iGUC6MJVqTTWv6rah7T9DM5Z8fNUEKaaBr7HGK4PyE3W8eSmARJkmcMVYA9n8UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bd6DsVd9w7dxgAcnq4AZxXpc3hukextVDwbSAEpNfNYHbv2u6tyFXFAQweg6JzSUN1NXXG772b9mfnY6DEUpaFi",
  "key1": "2A4XTLeArd7Bxe3zxC6Aob8JkUxkkkpqCAM5wdRQ2phq2fsA721o3wJD3ZDo5XtLS87ZLNHfNyfy3pJ7kmekQnj8",
  "key2": "XSpSRxNN27ugg5KSc9PEwnrAAMKZ1KdCrtNTNUAkeBYZKogeabJQzNu2ywW9trKCkNJgijh3fLcE6KqDk2Ufymh",
  "key3": "46Ngj7Eni8zMTJuhQYYVXtYAbMPQbpJPFPvY78fJS8Yiba6fhvUEne7XdcPgk9Ytwrxn95nGgr9JthG4kUA9At73",
  "key4": "4bZ1A7ZBs83Ut3tQuTELLvfXJw9UTGBSBxS9jGNRLvSunnhAi7N4EBKPo9nKqprtVdVabsRPkDpShvrxQKu62MBr",
  "key5": "2CEmXZprK2Kk9Aq6tXmSScaD5FTrZMX74rtK8J6qKq8b5K95AnHcU6mhj8MKWiWtLUVWaWq5zMpgWPV79v5h78D8",
  "key6": "4HG8GW7sKtjyhv6UGrM5vgH1JZr5SchZMmt4VN1u2g4avmpPPyHzbs99WJi5Nxbw66CpDayogshxGfECr3ht337v",
  "key7": "2e37x7GAc8Ux2mSqVBghNyaNexMPRUmCMR9FKhYYWeKnqBoWYEvMhay5Y6XcDNZsW9u4CytNrweaBUuWYHyJtzs1",
  "key8": "sHnPGW1VwESrojQ9KBF3gohGR3RMBAYZ9rznv6SW31BW8TC1brQ8RztXkqugmW2cupEqUeyFk6Gi4svP6oiK5ob",
  "key9": "2RaC9kod9dTCwdJdYZRQhGA4CuUbmUdJpQaFD8AWvHR8Tp7WfdzxeVBjwx44c4DJtar5AbZTEU39Ljo1g8ZtKTdY",
  "key10": "4eD2vDHLSeu6HTYUxaygzvEHmhGqy28BKZEZayCLhkx6veUWWt6hzzyaDZq6WvDaGfeGeg8MkwcsstvoPqJXmxQc",
  "key11": "4qbaYaKC5NksaU8h2cfCB13hxH8fWa4FPUqZi3iAMFGJxYHw95RYBT2bdtkVKrq8BsvVW3G15evMefwuiokEqLu4",
  "key12": "51RcR5kiRU5SUoxWuQwyjokLNaCbkQirf6BxkAyQJJ7FD6ooBjLCX8ZuKFNXhZJiq4TaEJR2ozxAqDxkN2LLF46U",
  "key13": "67ngYyDSknjEgJpK9NGa3mbeM5jdCpqCBjMiThpNYtMDRGxtVnRyB4rudpvNqWGDcuHgyDvJYxmThUzPLKagjWTK",
  "key14": "5xZUbVS6PYudXVp7oF7A8RT2gy2ugd6BKmJEEHZuxUqgS9N8LYN59rBSB974K1SsEBUxjyHoJ2BAQbxBkXWyt9P7",
  "key15": "ryFYaqgCZW1PzRUyNtLfE9LjjPVwTLiiXZurB4heXjxcgyhWWQ98TJGvYbAYuMoAbDtdmKMhvXrz8eQ9VUdQnFM",
  "key16": "1CLYixhkAkzsREzpZRPvKfDrhWn8Ncz599qZxzR2xMWEDTPAZ8T4cxe8nXLu26DAAucte66JdbfvpyQHQ5VRHah",
  "key17": "TDnLr1Wwc1yADtqxgTXSuF5MA2UJhyGrv35QLqHj7HyjYubVvQaw3mxJNJogdp2cZrtAhFnRCcvyFyoVzmM7XCk",
  "key18": "4noHmspLdgqCu88yYPaBcfJBCjtmt3nctbzDZLHM7kGQpbkaov4WsH9pRBWVpaAKG53yThHZwTSHucMbxsrQRyPe",
  "key19": "2GSt9WMxHMeBZwTUEZ398SPLN5ZW1muMc99AELe9SpfvcHtsqi6KHtDeko99TRq5sydYwT2PiFJQvcrTkkHRWr6Z",
  "key20": "3WvGuZHQ65RHcWZLJySq6co3qSB4vehXSXqYDZVaNfRcLgXDnvXU9Ngdo9qzc5YpSWiM6tLjqEnrFoRnDPEiPmuV",
  "key21": "3bPhWWRCcJkgBwgLie8C6qv5y4zvTiCfw4oHpFaa58Ysp9eSrsmKF5zob24rDjtMnwck9BEu5qxyyrtX8Mj5uWSL",
  "key22": "2hF5fKaD46WWYRC9Y79QSM92NPAra3KiYAZNvsbJXiPw5Y4YmVkUUQ34i2cd3FEJtwVrTv6vCTm2EsueGpTK2ZT",
  "key23": "4THmc292ECSpKbCNE4DL735QjfCS8TVxdmtnmKNmBqj8RFJJDn4AbuWpa5um9CnY8ZcwEdUWHA5KjDq9Sy2ukFos",
  "key24": "2eMRNcHJdvUgajVmFjZejM4MCE11yCYqjhYBut2MMisNqVrLHdcCqr6xzmsbzicadTqwvAp1tNjPr2oTVMbSL6V8",
  "key25": "5oy8cEqpdgTMPC4TcVcNDZhz9E5fynFHWTp4WAwTgCHE1akFTE6djZLuNWt5YX4i82AAbSPihZB4exQfhZnPmmSD",
  "key26": "63C4rpgKGSrKXGUCfciSRvmWZgGgCbfsWJ8a9Cfs838xFR2PB6mTVpAKWB8LwS7Gh6DZ3BrrSF1GztqUE8ZU1wuW",
  "key27": "4nQQkcyqWuT1QUY74YYDQbingUJgjbA3aUeXKNkTXCCsBXByYhsrobeAuKhqLTpQ3JFHW6nJ6UFdxViEKYbSKNzK",
  "key28": "5JpZGcDT7pLg6XbhXdA1eX9e1pKHGk1Z9R3FTfYQp4haBRFLcoP6BzMHhLbizWj7UcrfQAMdRor4RQ2uwneMQydp"
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
