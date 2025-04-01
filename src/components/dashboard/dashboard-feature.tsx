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
    "5K95pA8XtZP5XaKsXwbBq8G2irqSv5sbAwekaTzcomRjwepTu4dsa3jKfFoziAfS7ZmKy68rSrf52Qngj1UrXBxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqw9CK4ov2Tq84sUpTkQNKtActxqz52jGwK1AAdzTdMbC3vHrfnuDussMRFmkAyiuZ1XMfeAuimu4dmyqhdEkvY",
  "key1": "3WcX1YhYm9CS92vZ3iazqrWUcKSLaDRjockvXHSCf8hvz7oKHAjqV9qtDFRPjYDVqmYEUJLizZyoyiJSiDeCBFLF",
  "key2": "3zaGe3Yzm9an7ja3AwdRsLtQZNuiXU8qJE2SpnmX6BXxgvWRGtomUnnxYweZQKTxibEkDLGu9UBgXAw8kR9WTxHU",
  "key3": "65YgnKcsZQJLXPrpUTiMKX4jzQbtXkrpwdhGodXY9vS1Rb5RXptS1jzW3nMazG28qnKD6YpWjiSE7UoiBWk69kDA",
  "key4": "2evJ6NpfSEv6Pu8fd8sjBcZVLVswxSR6bkY4Kgi8LbLz6D4GMC6J89XNKB2NshrYXcHaeCZ6FVuWt61p2rB9SwpK",
  "key5": "37447mxzTwJci71fBAS7e6yCkx75MDtM1tU5NSnZGwTWSa3CMyFiQ27vESqXHfDawsR5Z32HhQELMqo3nnTT3e79",
  "key6": "5fDtuExtPszpNLELMJNz5MhYLMwJx7SX5hp6WtcAuaLF7Tnoyrdcb5tr6qCadJXjdpFfPq4yDvdeM3PZSB2x9DBB",
  "key7": "5KMP9HgCNFhK7uFJjhnZAevbRq928qL7nxrJoDVtzZBmfFNmmV1L82BJoiaG7UfpcKmb62sCpHGUzcf2rifCBsS",
  "key8": "GoU5jiFCn5zwy5WiGeqKWEUnneh4pYkHdJiSqvgUH9RkYtt6uK1WRrhRzLbwZEPDtyNabtNF1do7mcPsrazYig8",
  "key9": "3U69wPF3NdzptqTKr2BcLDZMajWLoPEPnbx32prqmMDwtPXoBKsfHhBE6hTvco9kUnrHD4hBsuJYQ9gBFZDHuPYj",
  "key10": "25Z4FgoNS5qkrB9oRCGsWM7YRKBPdZyfaRExaJQH9KWRXUTq9QTEUyaHRAvk5w4rn7j1BwPzCULk4a4bJnmdVPhr",
  "key11": "4XoJVnEPP6Vb49rfPr49mGPsS3MRT39ayLpof1wBLYBSNRkRYvAy2p5q62DfbryGeWVC7BnqJfAH9xYyNEN2WXsG",
  "key12": "2iQ8Dov7xLa4CQqFUbpwTLyRCBXCMKUDvrMxMHbRmjJBEnmHDSxf5ZfArrbZCdQnroVTMyLU4JFoyKLN2xXicsS9",
  "key13": "5ZGJoaxmS4MPo2Q7bQDyDSGZAAtPFf8sUeM6CBrJThVryUio9HPMA3MPD3WKsnjNd5dmwfKxdJ6PEGKUr94s8bMe",
  "key14": "3EazcSDBSxT3J3Gxo17YnaRXLRFVwX1czn4haFi2JWZpbS97v11mQ5Hr1vzsgoaYdNZV2A876UrPecGoebVtsNHx",
  "key15": "Kt78cV5MF82TKvExjd71Hgqh7RsXZvNw3o1At5Sxg7LTV7eWRZxipcV2Ju6m9LLLnc2xPYrgwVvo6FvN87V1usW",
  "key16": "2vMdcgvN5tQQq54PQJoQjjEaNSSpSGhaANaPDdqwHs2LdkY3yX33cHoAUQBQcC85UqQwQmKkQCzJmSg1ZZrLwZ8v",
  "key17": "4B3dUp7SnmCGg2smNonuReKDEsy8peUxVeD44HWmBp3PYxDPxfp3k8WcycNguU914PQaP5QpKa3stq4tis5D7bgq",
  "key18": "5PHHc6iXbkFH2m5oK5MmovRin3z9AHvBzVs11ectDzMg4EamMEL5Q8u3rpjNEmgFdL97J3PnNiym95nNtTumFCER",
  "key19": "4raPCeUmbX1CMk1DAqwWPXyuUUGcBRF3gfRaEgXZSvZyfhtt3pStjj4wWsSQpa9czVpzHheQ56CAYuTwHasv6zJa",
  "key20": "5r4MoFxVvBe5bq4aW9BRwz3jp5WmYCctn3edLCztiCnH8h4xyb3X3V3dKN1BJZLu8kFmvyrUH24PW3m2rHKxmS7D",
  "key21": "4ySMkW5qB5zfYURbJQWV7Unjm9oC8atngcWLPHXJAPnL7JfHGP79pLgVSxDCtiYUuxzEPnsq5MvX6uvcwzVLDnC2",
  "key22": "wAi5vgVWim28BUR7KT8FVu7PXgSQkVgKTKixszR4TYGegQ9gbEX7c5VZaaBqq2WXkcmeFXsWVYhD9dNoMhoL23H",
  "key23": "SkprudyjqiJCeUgnHBy6sZxjcGsaBJNAwqehjZyzCQ6gWGFsv9U1jq49L2UB151L3kXzwNbxx9WynxvX6r4CCQG",
  "key24": "JKsofH2UXWin4DSN1qrLmHMQhYttmv5cCvqcKRyy9NXidst9sGNFbxx3D3AA21STJv6ptydf2fjhQtxokckN1Dx",
  "key25": "3NgtVYsdMTCPBQVSFDGynPCrvNC2ztk8DZpb2UiktdiUhJb9kccch1AJD8w3Ki2xgQcm7k6ALYtqPQutXdCpX8sQ",
  "key26": "3nT2uDp65afnWZ2bGBjWy7xrMzKu5yZGX5abtnVAR9sxLUrqgux1H42kXATYsiKooh2gNRJNawS6dcGvuoxCc3sr",
  "key27": "4qBB1netCajawPEGXaX5GAdDu5mGKopLfUZ6mMXGhAKepB48i4ZqDv91KVvoXW9T2gH3CF2eoFebX72keTJWjWRq",
  "key28": "4XVHUUktrX1KYgfg9x6QzhMMpX6F5Vr6ZEjVNc5XLpo54WyhH2Q6geupNZNuZd42w5rsf6VrDUbL2CVbtQXG6quv",
  "key29": "4UFdWpTnkJHq6PSTLZN7CBrMkQeafGb1EiJhUr495JpPi1NBNCG84uvxBpcLxVxzQgKH2HAnTRizDL7We8SyiJBh",
  "key30": "3d1cXrNY7mUK6E2CdymRu8vzCRVB1MAxunaAx2qN424Fqf61pSxz7smtjYKDQSHpjN6zwfU7XmyqhraYBXsou8hi",
  "key31": "25BH7aZMCXA7DZnZB9vgvM7AwhhuWiVomnjWa6K7QTcoh8y4bePDmH1A7vaTBAx4NJrwm9ago2X1Z1LQVLdCeH4L"
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
