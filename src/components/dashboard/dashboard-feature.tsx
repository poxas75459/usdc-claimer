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
    "2U2UvMQiyt7TPAWbLd2LkR49DifXwWhNchuPQtSeGjsJqGXg1vY8i6iJm7oQ1YE4LTon514xod6zoza6HpE1g7Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khnaYB8Jzqy8KwatEx9vpxcGpAEkgaEMJAAEX5P7MivZDgLD1yyGbCa6mn5RvukDPSKpB8bRMMXYgnx8QP8pKPZ",
  "key1": "2cHoAYMeF4q55U7W7qYUkbUa9b7agEnFUtaQJxM1NkN2CWK4qUo5AtGiVxsow49VwrRLHtwnKzRzJ86iLBWavpxj",
  "key2": "29UjEgdyviFAVpKpVoKgK4FQASPn9FXoMVMSizBZRGgmBXqGJoyviSqPC8B5oSxWQYB79PpASA7mXpskGzjv5cqz",
  "key3": "5HEuYYKrH1bPMjPWDoMzsrTuoNbvWhtKtPvs7CbBXnz8pkuNgAGy7JyGgXthwHaCNDP8bLdy1XNcePue9AAo8we8",
  "key4": "2ZmXRSkDSJL6V9reXsbDoQCHjFKyrf2W6GbKqyJeHs8P5tPh7kSEdNFRKRdLdtkn1cG9EpgKZVpt4MBKtZ7S2va8",
  "key5": "DrTrgr9ejWy9pfDwD7HSmQRwpXs3XhJdozrxKXkno57wcLX425ekz1vwzqK6qXV6qPRzMgjztFWjvj2StfQ82co",
  "key6": "5VnjypDLzrnC5r21TyY86C93o1vnji2CJq25YfKuwCe9ZGFGWY9LVCnZbx42q7LDhzYEaRvzAGnWczLJ6MrSXbmT",
  "key7": "5e6PQh2u144qZdvHpL2gRBDgcoCxDFgtbPNUKK5c96aCchtusbwzAP5FWYLroKVzJLsZs1YFmyNtcQrUkV3CXi6y",
  "key8": "5fW6omPSvStLwJpgPnPqs6FJ2TpjJd7eFRESxKTEVLTNJ4jfiouUy9e9eymVTioTEk6zXyTsvh83h6ox94PfyXzV",
  "key9": "4caPZLJsr4a6LNqG2rF6n2Chhh5g3dy3bgvpXDT74MfvqrRkcyguqncTpPpXd1PJFhPvXtpGoPNhkbQ4RmAk9wii",
  "key10": "NGVTjiCrGA6WFv7aebpWHYA68PSmuqq39MDrJpxfMRCmF1FesLXhmBQxRjRpWB4zvQts1FTztKbdqHFzT9CpG8K",
  "key11": "4JrQvuMrjSuVo5FaMZs3CYWQ8hLnrpadou9PzgQf5ppuFcPSNf3Dz88EgeUGrg18uUWv2HEstDdhL78eR1FZubZn",
  "key12": "JDw7UPJS3o6cBY9apPBjE4VDS5Jg2i8dhT1rVFhYE1GV8b11fAwGteTtdXyPRF8MJWkKCSwTrrosNWD2a5Sev9b",
  "key13": "4syyNbZSXY71yB8ThKv5oj51kmfs4k1gNsTy5wCPQ4pRmjdsQCZmn3YJPKD9vdm5ohyExk3BVBSHUDWjmLutvdpa",
  "key14": "3xN7BjL9fn1va6qK7Rik1spzwsTshdLxu14EWYthHJQn48kyGyf6NS43QT7YC4zuGV3kA3UCvzL1Jzs6pVZsFacf",
  "key15": "4vePtCumTMHR47bx3ef7zRevSNFxChDxswzHceq8FKexMQJ5ovV2W7xBu1Woafhubh2YR1EsgoqvXwyszB9jDnJY",
  "key16": "3Fac3hPEbjaDxkGkoaos7YFKuTLg1Ghy2e1FvXx9NtxogQLJakPzF2wjCzbsMmE7eV3W3xWinvTRcSDk4YB6bT9J",
  "key17": "iJn25p4aw7D2Uiw2zHdNb9zZDhYXhF4j7u1qbuDLkcyaKqwX7dUAguQ9t4YSEAmudChfNPybt5Tjhq1912j1Wu4",
  "key18": "4qx1L1MGAX38ZgxpREEMSybkbCaG7Tpqzj9ZjDYWiwhcepyBVzrPynm5eDCEnnBMjsyZKevMtssckKvxr7ZehnCS",
  "key19": "3ExKDr3zwZjs28CJDNNfwEkgD1SJZSGwB3cQaCaSFTsx37zbUUUYfF48sxX6oh1wi9qoBoQbYZ1rD9SavvJ4aj1g",
  "key20": "4mXU2VoKEQjwCq3oiYL7kZmHYu3QtsSxLEAs3ab6oxUrJ7j7pUe7vVfAG6kfnsvwmo3hkGhGMSpf9aUp77u3FWNU",
  "key21": "2ssp815trG6tASYKpEeCjw3LbBBJrNYWgkv6q9fCWHR5RJzKAF3kw7TqsQ2tFvwtm4s1gbiFgqwh2G38AkpkgffX",
  "key22": "cV37K6EPJRV3QfDafy5RkKbtpWpA8xw2SLzEiDi64AvFiyMMzXXJpQMQD7nzCNYQXDumKYhX3THBWPi8kh6Z8sH",
  "key23": "4dsa2WE9jc4en2TCfi8Bz5HKNuZJXwrpvjmrBApgBDsrtuTL5jdgiKN2hBXrzoC4B8mvSxeVEQpvH3az11BqqA3v",
  "key24": "3nvc5XkUHyJTmdDDR3jkGyv3EpiJ93GPSuqdA7U57y45s7aNaQCqpaib9cyUaEbDq1gUnW8EwtQvzhvCvoCJahiH",
  "key25": "5EFdvsV3Y38RNmwXM5EhPXv3ctAgkqjq4egcJZnZ9xkBrPeLHxLq9BGFNNKntJoDrqHxmDweFYDDByhPmLkq8bxj"
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
