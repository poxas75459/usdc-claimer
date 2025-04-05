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
    "2uoNDaVsRsGhRfTkG9TQdWhoMR27UyG3v4dAfZq22P4vkt7aedd9PeiocdXAgPDNY4MmspmSxqpAZX41UUsWrZbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21gZmvDYAjXFPcExoRgZ1nuKsEsVxgKM3EMbxieYs4U5iXBCZV8T62URfgVskADRC4bnXWw2EBLrcEzSi4HRVti5",
  "key1": "2rUgQZDZzQGR5wcwf4n7G4UY7w1L8P585GPJNgL9NfRpEDA8wwbFcQmvPstH6Xcx67X8vSAkYyivVvV547YyrJHw",
  "key2": "2YYuVMTAFkS9pUbZmKztQcxUzmo44MTGjpj467DiXyZGZ2pazJwNvLsxRjkzbjeobTCkSmfqCTfkzVDC4X6mRjwH",
  "key3": "3HFHk7SSKRyxctBJGeqZ6HTbabmxaDu97dattuniAfiwmRzhhEMCFjKyxfXBFSP5UBi55o3A2MM8atx528jNAD8K",
  "key4": "3cH5u6MHVy5327Y7HXq44g8QX6SVykL2Wm8btr7n8awqaghy6KpkrCX2EpoW9qCw8jpvqMLHomvbsfjaq2RKV482",
  "key5": "4836oXhzobzV5zgmCLXfAR6qfvkJk7ynLzg1aCKoybPKBaq3cbN7wHANZirhu5PRdcgX5LvcNcbodQ5SpiLzSAdz",
  "key6": "4rrhE7SnZXcH8CTHxwyMcwBg3GNRuLLE2m5pqJoajjzzzwWyRcJAA4VK7HpnBd2dSo6mtbN6jg9wP6SXdEYZHeF3",
  "key7": "9GyzAiMtkhxfg5WwXdhvZUD4NJiZkgwCPWyUAUaSfmm5t3qc3ov8FvEYEVPhcKb7SRyZjrZQz99DSkwPyCt89Zk",
  "key8": "2UoASE966zTLFw1M2kffwpnAomq81UmLftAQ3nSjFtKvehnxxTz3HVxsqF5vBQkPTFbnj5yJjbX2xPzwbeCN31wh",
  "key9": "3hqgZAySHFDYTtNeDxGTCkekDipt8quxhgmwRkPGW4ZLz548SbVtVb4tSa33GZQK62hUivU1bZaUkPnBe7mxi862",
  "key10": "3zMLdMS1Pqnmf6qYvgfhwbdECAVDwoMtqxSAYvXfzEGi4j8cyhXRzBYCQiziaTeiQ4s1SBPCEhnMbsfyXGbbjKiw",
  "key11": "3D2ijL7GQULUCbCWhNrcBCrwxZ6kALCvRmtP4MqrsP7pNczuMEicsYCqL6vjqD4CYV3j9qtu9tL6mx4c2MtUw3Hr",
  "key12": "am8JwqV8QALxyXSDXrRrZtKN19rL2wW3GxyFgw6n4oFvLqXap5GJZRz325tKat68V49yD6NAQEKLHfJKXDimfHz",
  "key13": "2YoAXP7hGWVB8cUkDL7amCk2849gr28kukLEagtkdmUrvBTDcbQWva3TpDLM8QHaC4Hu4ebC5Xfh6DB7cQxiZMG7",
  "key14": "3N7JP5VituHST2tS8fJc5ERUS9xxnDu9L4S2FYrV1EhYtXMARinaSQrp9BRpm6hyRoxM83Z9bdnixaQiepvG8s8V",
  "key15": "uzSmqVLrANijK14DWEN2xF3WcHkRg4UJiGYfuMu8p67g3phNX5inuGzoeUi45Z9go4E5Pf2PhyFwXngu98Gztor",
  "key16": "3PYpEeHL6pzDELwjsY4KPR4oAehfKUHvtoEc9ND9y8tEcc6rWYbY4HU7Errbi83mye1VSKpjAhVkyGX54go9mTLN",
  "key17": "DXzwn3i2H5BPLaQQSWd3jttpKvuoqi4HX7tfevEyLTKMAaqG8PX94bb7RwJswRMFrLrgMd49A9yJFrvAN2baoDq",
  "key18": "33kbeXQTgXmFnFTF4JCAmoFqrdp63X7dRMVmbQVaCGerZacDtpXBBKHC4u2paGVYYAKAvyX3KGPwQYzoZEJPUGuW",
  "key19": "2TMv6g85bfHXiHzHFFnY7arwGqkPDGL1iKfaXjiGgNSv8hNzfVR3DAdRi7ewexNf6gBBtrTMmNiayKPtCCtmYWdt",
  "key20": "bbUKB6kRV4wonyCaoUFfhzzigsPgGhYdwMETdgnfTyyqqgYFsg1UWpGMWG9ZGne5UgVhrbieRnGZcGbxtGr2Sgg",
  "key21": "2b3jSHrDBuPfTFjfuQ4VFfWfDJ9cpHk8bA1mhoUrpTdynR1JW162pid1vP4DvXPLbxM61KYFSdjkKYyx7YJ15P48",
  "key22": "mva9nAnCoAMRHbf72CdjEXHzGki7R9hrawx6cX4KgZaM3gPQu27oAb7BUAuQQmskmufMYShsNVuQ8Z5hF2mmEHG",
  "key23": "2pBpS4Fw35wCoxohSUTshqPmgnRhNuvMfto89MEGJFbUnNCVzoEXhQi1xXx3SGPg3XRrRLj4k9gLVkckvq8XUuoB",
  "key24": "49tXCfkWrDrqtYETQCoLCcVdEkyBbAnhdqjhhhmdFrq95Cw7a1C5hCCKtrdNLrAUnLJuKrgDmVQ2pVvmzcCSMymK",
  "key25": "5Jcy6WYDk99o7VBfHYRzhoQdby4Ces7aLJ4UKBFjoFgHKmbb82aQusY88ZVQRz1HpjkEPPXZsed2FSLyEYLtbHUp",
  "key26": "3zv69ZhqbyGDTvw35vMQrKq6RqwbdeHH5ykTawAxTepwoYVNKzYuptAsLa8c4voFxRUtnNTPk71qHVCjikTTk9pw",
  "key27": "2QjirWsTQwrZNtj81hUgbKjBYrppb79hjUp9Lfr29kUYcateRC9xVb9GXoSFCMBytTkMYPrYXQjL5qPKiyvqCvhU"
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
