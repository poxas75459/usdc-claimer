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
    "4zGn77phAzHeFiBqxyz9xaExS4zFfPPjQ5qE3w5EHvvyHPvji9UQDdEkMwM5iExemv5jg7mt48aDSng7hxsreg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFvM4tp1GVBrpkTLuwzseBQBEwg1gPtYbVYYgU6sKbsPFauokAF5ZiWKysqBtk2pG2Ny32xsMA5fhN9e3x6XcbZ",
  "key1": "2FJVEpjQz47oG1rrrdHy5YZw2frs8AJxMRcWUhttQxsw5ewPoEmKPBJonnyGb5wtSHFN99mxHw7wo761cFzvdBJx",
  "key2": "3EseFMXRh2Wt7w6RD8Xduv8R2PLdzWE9G536yqDvmMoDJi6BhGHxH8n16LVG6XB5qKc5AunuaF9sLxJYoXPNRn9E",
  "key3": "96wyox8V1qLPSmF78Z8SGJLH2N1sTJKWrzTDKdxvmwjXeJcCwXgoaRkyMrtDMKTKQzsJD3E9pfER3dtd896M57L",
  "key4": "FJtav2JvLdqbfgTcxxpdpv8fmmNtWWyyWSWAUL9cYQ2JcMMGTtypXPHMJVu8PL7B7paKNyqHSyzRcBKsZUWyQi5",
  "key5": "3xqdP6mkVUNsApnmxEb4nur9obFxtm7kETbEb6s2uTa22wFKL9FG2iTbgxLQLVv6PBKkFrM13W9RVy2D4PiMtUgu",
  "key6": "5883vhjge81MTCYU3gp8VHqpyqnXD5QrsPyHxDPcGTZpbS6fBkkLWsJHWtxW4u84ewXRBvBqz7KGDpWqWDZUBEgQ",
  "key7": "2Psbts3wqxSSLbf7sWqKSWrcKBUFuHKK1ozRphiUKJZ9nfUDjjLzoKdzk9tzRi1uzRms5uEAMEEXdr1gBrygiha5",
  "key8": "5QRQMfD3BuQgJzHbeBnNBVHF41t8yQBZ8PaCjaTu3b4u27brg3A4NmjKWEK7ZUjnTXyQPzDQj1zkiEv2bKqr1CQ6",
  "key9": "5ftYoC1iGwz55P1uZRE9hnQMWyEbJubvsRFygJ7cfzMjA1ptavTaSn9Cyt333Ati3ueVyr1amFhhmMyzkFog74pE",
  "key10": "2WfB7z7s5tt1PqMHudbksSJVnwTTJ4g56gsUieFBEf18UNLYXkE2onw5HoRZ81uZyhJYi14vgVqCTK5m4MPwfepz",
  "key11": "DRxvbukmNfCy1HRxiSajQ3xdrBhb7VGXQcHB7GRBATfqRRFnexoZLAfWoJ9YGq9ZbKd6243ha48JKLxmBuXxxcz",
  "key12": "adxZysCdwFzFvyeeNuutm2dbEqcBHwFDXtyTL67p2si916Us76gRbhQsszvkuHTDSLN38Wj2NWj4dDQgMwEdAZR",
  "key13": "3HeZ5WoEVyuz1oKYDRY9nbJZFsupgDFMSPbGaUiX9RRuCyzrwBzArAH3X2wZydXNaT8PCGJatggbkzGnGANrXgBJ",
  "key14": "51dmcDUpw7G5rfsgpGBL8qEjk4qn5VB44XjCaQJy3X4d37zRL5HAD9gjSiPmyCuKd2Nrtbip2VJ4gwsXQyQduU6p",
  "key15": "V4VHn4UwcFca5K8q2WGmC17zyP6JoiFB14DvH2S37Lr6tkLQ3fkE69fe4VkvUgmRm6Vt85qCv8Lg7GeLYp89brp",
  "key16": "3QNCrmEeSEuugZwWQxXuvPM912TiDRjhLPUFF2Wt3vd8UHLUcGyytssTMLY2w4uGnsFx9an4mSrMLmL8GNwTKV6g",
  "key17": "3jzCBcmg3beef46ayTSa5QpuEzJie6LaKivZhLDwCLYgm5YFrsDti3WUyz68S7T9oYoNtCuna3o4Ftfg4oQS9NKK",
  "key18": "5PSe2pFUfdY1m21EnBnGqgE9KwvGECzZtVz7kKc65mG8sdTCiDzr5jAZMDqERR4QQNycfUHYSQ2Z1HFWaW9u8egi",
  "key19": "e7FtmbYFobRhFVmtYPNnhXyMU9wiRLp5DPu5Pn4zWzSjVBHww4BqpYYQgS8Fpb1mYJe2BcsngrRj9u3eUZ67Fu9",
  "key20": "3qf9fivA3oEV5sLa6gSqrdFkJYbU66XsNNCc6D3KLFNYadaEs8oMsa74Fxt6MViQA8ttKNRL2rxtEQjihDN9FZwM",
  "key21": "ab1bs841u2MF4TqnmV1NtyE5Zje1xUK8FjCm9627RL6SxRE6UMxHB1osi23pe5N5AozWy8eppN6RUS4XVmMtzmV",
  "key22": "2eSuymZjPDryUGVkyMywFo4H9yV4BvjkD1uZL6LbnYAEugjLKm2Nasvw5AtbU6Kh1Q4hEHDTV29F4r5mKaaGpqPA",
  "key23": "54TFb7mMXym1PeMuK1jWZdHjg1Rm7TEGSXusUsCE22tan7MGUEVW1cYtHHm7Fc8xpNixoU886fjokWymMnyDmAbH",
  "key24": "35qeVU4qtEwFxaKSmN8Shxf5PPgwEWYEmnVZHLoB4yvvTcAS7o9CM5czo76dwX6J8KSggsW82CsvAjF7W6Vvvydu",
  "key25": "2sH3EuM2qknXmP9huS215S2M6UPPxL2EFg1vmkipuMTqE7TXVgp1nPdomKEQgBkHth3SEgmpKjeUTUs8psYjCVMJ"
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
