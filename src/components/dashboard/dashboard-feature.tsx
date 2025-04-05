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
    "5zzmVu1LnGqRJDvFKDo1ibfGB8scZBbbcqfTMPeRP8fmCS2CwAfKKnNxxJECghYqwwzNoUJMRh1vEoV7rWCwrxPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxVdAKhEzdzeUfmA2xzq2xEfXQgcxtZRwNVFqh4DfQxYrTm9A95iJziEtdrr7LD8tCAkgoRCre5eyCcyV9UHKGd",
  "key1": "3p4PrsPQuWp5Hv145BfNwV8ummfBY9Cw1NkVpCDfmd7BnujZQkgM7noPootqQ5qKv1ZWqYU3QoXR7vxYqzEw3BsA",
  "key2": "3LnvAWbZHukYoHmFmU7jggU7jfVViQuPCWs2kyTjMkh8Kua8vUwegAoHbg5exQWDn78UueQbkmFYKadCBaTgjtt2",
  "key3": "2xC8hhdvxqwMeXo2XrQ1JM2nXfkZ4WFRYqe3C2HpwQj2igJNdJeeeJTEp1aZWkveqaMECgjkR1NLeriVqgCw3xbE",
  "key4": "3dHLKejYy825MLe2C8pbvXR2aye63UgqbeLMJZBhsntG26LWbY32DjcCiA953gyLSp5VkieZVc8fMxvtEERCofJr",
  "key5": "hmpHuhCZXLRoUkqyKvFuAWwsFsDMRwpvpvMe1P1FkgcGVH8dQU3ZWPjg9nRSJqBkmm8TarkyLhgtMMqvEWF5Zrf",
  "key6": "2XMgESuivubcAssozbEpCYvWZBdjsmSZA1mEd3hAgU8pk3BKzP147nCpjkCr7CSxNN2VqEcRnW6CNEav4gpBYHv5",
  "key7": "5U9gwuaWDvxCKuEtZC42iCgeJ6aHtbLB1ywnv5jN1zrdcfuigQoNpf9rFyhauNhzBDX8fPrmTJcC8MsqgeHaJ9fX",
  "key8": "3Ac69JThjA8Efb8wKurSFPshVf1yB8R3bshdbNMAY8qrfvR4KqSNA5h9CPns5v2P93q4RAsPLoevFx8d91Kc6K2g",
  "key9": "2mCnPPKJXJ9RwmteksK261H6fCC2rwHoXx4CyPsZFzaDc3gEUG2CKhc8hm8kf4AJXVLJ8585mgxT43v1hsJKe3gm",
  "key10": "31EpWbTzFeJPpWyfcRp355F5paJhvh2KR47qXANbzSVGW2uYLkft6wNEQcRLp4M2dr8vqiWKUw4m8wdwsfQ9joBz",
  "key11": "jc1DpoexNRHwM3MdcEJeLygF6Mdfz9GeegG8DxkaPDARanaVqu98D1wfZyPsP9rBrMzW9TH9SPUd2hgtr4tZjoA",
  "key12": "212KCz5wqvxDLjxdJWuszHtWvShYXyR47nFSASE9F7mbjzmbZqZ7uGXbXykFXHgXjBPazzUXaHSf51XW7gm2mhrr",
  "key13": "4fwgw51FuQRPjnDQKHA3mH6F4uFpPy8tijnyht1jk26E2R9AJqGMsjL3E4PJPgxJxBCvxddbLMMeU7XNwvc3aQ9X",
  "key14": "3Uk2nE2YQnhUEjFhEiijjz8fb4yHeD9SgyFdw7AgD7uoofVArUAVgDkhzwwASAfdvatE1HiE8kYGxkeavhJD61PM",
  "key15": "5ZtneZk1ncat7QUzDEk69W4jyqHPx1aYNya7ekLpiDiTesG4oMMrTBinowvYu7KYoAQ5Z3BovNxJDATp1atSLF7M",
  "key16": "58EHPao9TWmMqr3aD8sYKLg2QzBBAeiYxWy82dsh4qGe3nwqQeWeasS1pyQYbPKngyuZdLmCqMHJm5CdP4qa1kae",
  "key17": "4B6jnAPApLtnVX2KU8xTWAdQDx7xfMhmqBbZwyspJG27dLZcW4BU5edgb5519MbHCSQ4LHUMrTUmsgqrYxi2RJ9S",
  "key18": "5wxJmhS8C9iXZ1MnNZWhepCfCPHbgumhKUeXbcbWG2ePay9DCmxLbvpVdqnG1W4ycvoe8BNyLCuFsygQ49z7Yy8C",
  "key19": "4vTgNGQQWssCGXERR1cwFaC72e4mAEPAi4epb7vq2KoEKk2CEx7gaHYtdmqJ9QQPKyFynyZYha8U7mhhHxbbBUGR",
  "key20": "xfQgJayNW5qEbycQRu32gndsGbSFTRjxpDLJPLLV4pX4w1j4G5GvkFrvYED8ccuc2YB8Ms1qogkuPpACtzyLwCj",
  "key21": "2EtuE864LTAUpV3pSHrYXjvqKvNa3wiTJNeUR9NMcYuT6jNeh1nCGpLKaWFggqCqSsD7LVMkE8PcJS6ixNrrvMAy",
  "key22": "4ZPdkH87QjJAzicXh2gT1VW98wp8cXeWqxsbxKkx7LdHfCkD26pC531ibEgHbjU7gGP3D8BJC8yfZAgmncHAQUgD",
  "key23": "3RXWmywnDTYkd1XXR26jfC7kM5jDqQWSgzM9Z6jmwdJPnooH8kGbjMNuwaNQQA3DQcJz9c2FaKcMb5rw5ipvpmy5",
  "key24": "mNVgixbDEAK4oTEagjj2dnn14MpEUf1R7iqAmTwYGkNUtN6y8SptQCEstHx4yHGaen2BAeepXTAWkjAShq2Z8wP",
  "key25": "3U4GmCmKPYDYJR9eYWem2cBhickdAdhmXndxtf7zYgzWH6Y1RTrBA45tm34Nuu7AbuSguft3S6uJRrEzMGw73gnn",
  "key26": "2YP6PHn7TjqXcycMehKeResTSirK6L5sVJZ1ELpJufZ7Cj221azPrWAphbkLicvB66z6y3hHfY8crthAnFGrJsk2",
  "key27": "4nCHae412n1Jw3iNZqThCL1X8QWcwtVY2tBtYBZiMNm3gNkBkP73z1xL9e6AnRnffiSSRm3jYMK9F1GDgtsCqEzq",
  "key28": "1VApwt536gAiHdZKbdVPVoig3ZWHq3cMtMYk3xvyaGm3Ua3VXaVJgM2q7MDYhEazmtb441V8yosLqsijtbKSoH9"
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
