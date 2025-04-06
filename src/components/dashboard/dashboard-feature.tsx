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
    "39z338tZF7GBLvZ92LGMt6WkW8HpVxMGrQvBtjJbwnThBXsESpyLEZ1VZXt36DaRxKdySnPN2H9JrxGXZD45Aq7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46o6rMREgxHARipgmXSvtXCNRrcXEMKv74NsN5gnUN5drNEn9sqYzx2mQzfwwq7ybkYaGnSsiedYpG2VF49dVoW3",
  "key1": "qkeBHAdraDLKTFn7dihsJ9fryzMx48nD1J2x2uQqYQbapQAu4gLkj6n9HASn299uAmYWs19XxavJU6MDEw3cn2E",
  "key2": "5Vhp8yJLuHF6ncudhJPAR1xxLLs34A47EexCfQbujsr1v8FzDpHXcngB9Td19GnGYdRafyy5FVpjsxTkVPK6ABBw",
  "key3": "QN2TksBbjsN5o5DTq2W8wKz2kQPtKRGTKeFgcLrH4LtpPjHAaA1sqypYd1AxbMBPNWcodyH8kugfxMA9aNxfNy6",
  "key4": "kZkh23qUZCSPHHvngdf9DYFtxmjAwdrpaMh5tvCZm75n9J6xisiLfKqYYnNCkNK4steHeHs1NVkRkcuBK8vVqJ7",
  "key5": "5uTbmSEgjwMmVP4gChD4dnKwYKLLTN3DgQ8Hh2WH1VZbo4jJEFRRL2zxLmaiNi7LQSoK4DtZKWpcCw28wy3iP3Bn",
  "key6": "5BAiiVtSjD3GmF9EpdjCXcSABm1VXvFpWMSP1JZBCC19UiyCj5PQHafeKCfS4ctuqKqqXzcE2ERhqNkfexH7QQXs",
  "key7": "3HHm44s9ieydY7zaw9nSAuWtAboynB6s2KArqnhdcQq8hoJvD3hKZyFVcC5aEuvRnN3LuDtjZfPymZ1TFPPszMJj",
  "key8": "46VaEmR2ovy5TwYYMbfCp4DbWd1itPKqGMARKVDLBr7nmtuhviT7MSQT1u6bW61kZpCMkmiUn5GpWEM95A9Nbm5o",
  "key9": "RHW9WZXAQ8RAxoxx6x4so6S3YQGMhhNfKcfgHkzhqE3GEgj5GVZcnLrtuXRm7CEXHi4HCQ5uoQa2AVL2h85qFoc",
  "key10": "59L8XSt5kgBpDqor6Zxs3bjAQ4Rk1UYhN1dJBQ5iLkNX3TH7Nzaj7Ei26hu3tgY22JoWygGqftAPP2ohMEzjqLi2",
  "key11": "4oRfchPD2za28vQhK7DsforLW7dBvcf7Fwf8tcq9qriFNdAjx1uqDpBi5u2XkbjqXYV2FCLoVNiy7SJXr3VbCgJc",
  "key12": "5cNFpgSZQTjcsJZ1NJejcrQGF8FeqaFoeubrhXvoFoM6tT6JWrs6a5b7Stt8Sv1oYkFzYhzXCgUfzYvfLrANW6Ww",
  "key13": "2aVZUA5pActmTKfJXdpDq34QqYMV1muek38mcovqVAsjrF63wcssSHJ2KXKHVLA1ZUET1yAwVjKD9x6UQidD4sEe",
  "key14": "3duaiMW5ViRr7zzKSJdjuZYcbiUGZUCizHvhfN4b8hjSPiz4DfV5PxVAiAzdoq48pdsQiDMgfGUs1SwfuHKPjE4G",
  "key15": "2zXSJ8k4yoi1FcLuBqPy67Cfro1yjfhWLxbwN1upKZoVLPzwuep2Ba84nm7c4yAMtkRLP9LKDoPPwCmZH9uWwBvY",
  "key16": "5qFvsLHgBZ9Eb2n85CkHMoZL7rxiweoroGnPcsZtyfau1KCoojEUuyqZWYTjKBLCFsQddf8K9x9oWEXyFzKrBcXp",
  "key17": "5DJq6qadDHNDGMvBPug68jZrGvF9RnrnhqhPNmnmUjxK7H44oF4BGVGM1Z4iKowTnTo8ieivAoziBjh3cJ42tUoV",
  "key18": "5yxVGHVFdNWumnGazNoWQr3dgRe23FK9y1YTAS4MM2XJwnMbpqUViyZL7UEbhvGBxoG8LsKpNgyCYAodnrCc8cYx",
  "key19": "3CEGfayLXRYrnstBADjzsweKfqir398MHeDJ9wZ1RRhSeUvkuiV2pvooNtZMWe3popdNCzCacVKTzC5DXTaDAArL",
  "key20": "5eiW3NRNWapktd8Bi7qCmDwyT1HCZbX1xbWjfzVpY2ihPfUiXE1GtKYtH5jJqvE6DrVgcejfdgyD5dr83aLw7E1y",
  "key21": "4nFBbUS7sY9p7ftsikRhTz9nhHzLVLm6GQwwRW4bjhtEoEkWhrYT94RwK9uWMLB73nzBozUMzUs9VNJAxK4tF5yY",
  "key22": "3UqyvgLysJxFJUDMHrddPBTHcdBAwB3qpnv4JJXjeVG5ka1bsuunVgePVhMBwB4uXrwRCuBEWcQiD1z8gCmucy13",
  "key23": "XyJvn8brm63FFgGokALCGdbWNHh7RdNd5M4fXE6pYcPkUoVmvxkaSZgXJZo3hpXk5VbMj95YeZ3KkspeRGBDwsb",
  "key24": "kBBadBYNuZ3yuUGvx9GVs5K2RFndFHx3yvJhxkcNfzznGrDGfKH5oEv3vhpW93xkW77y1HKJGFUYjGJPfkq841N",
  "key25": "55opp58Z5zcYjHgUCG2XmZj4WqDvcXKV3Yx7cWzQZcBRE8kABktraqGwfsHBW4s9d3eumomuegeLUkSgwWjVrR82",
  "key26": "2MNXsUR2QYm3UwPq3eqPRqJMBPw9uDXFHu1e9rqXdU24JUpzP81HgPiAgRHbvYZECChxYkLop6BKZWFfFKf1PFtR",
  "key27": "2vEDNNM4m5mXULRG3dysBYTqepc1mUhhkyvKk1ZtMLZ3X4HupGTADraR4iMrAj3LTY6AUHTPjiN7o1my6yxr3x1X",
  "key28": "3SwZvW1heDMVaQG8VNeuUnWNABupnQtYzWyzNcetAD68Y4EcHAwJAtrW6A7LzTF5de8CtgQvXN2EMyyVmY5Vf4At",
  "key29": "QwPhnUz2LbdBtNSEK6W9RMPfgJCeQrQBNCFcnNJnH7iU5zSGfMc3KZXk6st6MkMs1iUDuGoV64gCon8w5YtkkFm",
  "key30": "33dgu4AJewoaQCdmmhkoTLpuCFVpk3xZVykraGv1TkMeDERUd4UaFMuq2EGejarm4nUnvq6awfDuwM9HDRgS88Sz",
  "key31": "4aLkVhomPSCrTS8BkxyxhSXYjgF4FGiSSHTxu5m9PnvL7vfrPF9hTCJKByfoJxRXm5aW2wZS5HwNT8vVMEyQkfRe"
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
