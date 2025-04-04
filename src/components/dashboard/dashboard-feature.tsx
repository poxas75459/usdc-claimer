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
    "2pTT1noBRL5Mii6X94eXVhKXqhaJm7CCbmXJ1SVWAovzwpwzoLBFNtE9woZACctnyKka3saeWJJ2H2UgNbNCE3SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mk7qtbLj3pdtzZHS43ByeKQBy8honBjxaGSehevsuZBPfjzEGrLmUGL5EYkPnPcYvUMQtxkmM2PS7eBLFsCtncq",
  "key1": "4ikCd8WzUvp11XVZ69AztukqCJi9YBnZept7jFaY5w98FJb9xqCSf3RpNq6VPTYHZT7Xap9NQTLsvTmZwaNf4MB9",
  "key2": "yCU23vCVJjuCU2pp9iJHWiLxNpQGNF9Fgauk7JxHLg5E12RMCjyxmLjpbqyTVuHJmt4FaVg3tnBLC5guNKGn8p6",
  "key3": "2M1akaFYGY4X7SiYJvnv8gApddEdNKwZKq5RpbmNeErSoqxwGcUH5pjPxxSb5PHQ7i9z7sVQiAis6r1wzivZ3AWs",
  "key4": "4NZwy2VPcLNeDf45hk2VczMjedCE7juTkodw9avCMPC3bYrFCd8o2iBsVjYehFmcyYqbfTC6khZPzWWLvC66DWXt",
  "key5": "3huQq4JE2gSnM7RAZ7VDt7kzYKabVyMrFme3rvrjMPVFEybuzmRz3kjLNMfuM2CkEPMwsrKjdeoAG9kqQEgJCDbz",
  "key6": "4kbdmod4PhAsT7WvyR1Ts7gBLg4mVrUfNozkKmHq3TdXfSo53UcGW9qpdcH4h3a7zuCLsfskfhc97d8CYQb7nHV3",
  "key7": "XqZMoW2UZiSgT2Z3ByAQQ41sgRLHEv3cAdQCpE94yA9YiWgjbDQxcWeschkfwbPUqfHWKdiNxeioYUVmD8yP6W5",
  "key8": "3mLmEdf3TJ9vow82mHcqvDkwXd1JE5k2q4urCM3xzUf2YDNapTDEwzS4izjBrhzVgLqkohJuyZX7GF7SYdGLFALH",
  "key9": "3JEZrgAqxRihdUY6C3YQzDW4XcEWGTC2DmSMa2RkwhhG24wrUA4EN9M2nXv8KusCwCpPa99HnLJ8n7L2WgzXyQYM",
  "key10": "418a6p1xC17FMiWYhiSvvTLH2rXNxXWFSPnvEjHaB98njSFvc4XgFLpDxjckoVtynCZ2n4NV5DzVn5jQzpUDbcy3",
  "key11": "5C6R9BRJtX5WPiDsqD8f9Z9gh54MzZHKRuneevyrYbDzV6YFbxEdmUvT6Xbzm6J4UaDSXow5y3csa8fjj61vJWwA",
  "key12": "51YhJ22njro2dzFAsW6BHdW9QYiYbYVTDgnzKWTtgEeSnBo47bopMr9reYMfr4iLwRpc2exWm7PBPbfEmC2JfbCV",
  "key13": "3SwGUNwMNFEtBK1aLJxXpnSBQ1CeRevPqZitkQrqPenwWwgZ5ts8HDhaYns3WjpLDiNCmw2m5JUYPr8H7ELsxXXk",
  "key14": "22JWRjUwmV41ZJbPLQ6gS6iMMAAUDdPgQiNVdrBqQoBBug3gzeE7AFB1m898a1pLijoysniPyTomYKRnzDY1uBfM",
  "key15": "5aSsnQc4LFqv1Azm7oVaQuWcGuy1XX1SN61b68eTS4QcaTURtPZuh9qKn27yj6mVe9UP33jJG9vUux6o1nWsYD23",
  "key16": "3CGJKdxWQvgNA7H18sFyYwWfWhdSojQb268hKm2Nh9FRMUWDV1VcYkj5cRZEcGG68SzcVLqqqa7CusMWv1ZwyupX",
  "key17": "5tJw6pbrWGnFMaKNjtq7U64ftCYvvhPuEXH1VRfWDdu5TkgNTL3KWAhY3YcjPLQ4VfSxEYVumGTYyMMkRSRAeY42",
  "key18": "4ivrSyszESjBrP4uhHmKT4wnyzKtF5JwdPTTEdUjnjHJDkKdpb5gjuEXGY2QNJqnKPfW2f4qy6NpUAKfMJWCkNQR",
  "key19": "39RzFxE3WhmsU8j4VRLoiCgydWecbz2jMJhLq3bDrRm7c8vTNx5bVsvv2yjQy5qPYB7RbaPrDCSVzRhqEoxNoFu6",
  "key20": "61VgKjq8AYTMaD16v7EsF1uAYRJBD7QHBvukaTthYzaof8Vaks1CC4zHKg1mpr8ZjFSJWyvgyK2GYgkDpuG9vm2o",
  "key21": "5SPr4mt8Hh41hfFqYwARnMEWd61Khnty3BLVNKWpAxWoppWs4c3WKTcqDcGUJrFzCDAcFmrxmNDgEoe7DqitFPxs",
  "key22": "5iNcXRcKFBrMQPjViLuQbcvbbkh4JRBYjyufXGqfAQ2sFqUTkPqy26EM1DyT84v5kZCSHUtekpB1tYBfwLnwWa6e",
  "key23": "Eng8SBHi8ZpJWzwb1TMAcawEmFiRRjaAFUjDCtN1xq38bZ1JFvPTFX5i2URX16G78rD2oR8UL81PqR2tXQDBy9v",
  "key24": "23uGyR9BxJ3PmR1SvQBxMjKoUipvCUrESYHExWqRSAEhSuNZSYVE7feyL6uPuqfdnkWdsBHg2tpLKuo4nYLgQJ3q",
  "key25": "37ccfinGosJ2CCLkn82XNHxWxvnxcQViDQcX1zgoFG6AjapzDiB9aMygjvEsL44X4AtV74Jv11xcrj22rGjnVhJm",
  "key26": "3MWYnEh5Cdxgu4sXkf1NXE582gFaZ8Sq8WURHgbSZ3dpNceF8w6Lb92VPXRzLaDhg47dnCS6VsCxCuWScpANsUxt",
  "key27": "SKjTicpCsoLDDsKXAnczvKCYuxssuBG3V8pNMHAKHvZkNrXhLz6NTiVseZQkYMfRW2eahMiyAqnsXFQAQGuA5o2",
  "key28": "LYwtvk4MZTHde6XtGRZosWZnbrHzYpXPvCftSPrmQvE6YtVFoncDuKo5DT8XtrhSHVRYG5q5gVX7fHocVpsb7UH"
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
