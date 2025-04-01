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
    "2XyCb3HJRKAYumcMp9bHWbhCnjum58883ZJCjK5R2PEeH24hzqzjYVXRvWCVtBjhEB13BLwkq9q8V1JTgU2cCR3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TuDyNBxx9QCS87Gm1zHsA48i5hY8HCbAmWHQQam7NBtpcCPfF4qGXGVh4osbf9cFir6kv9NGBUfbvRCpiNecWR",
  "key1": "25Nb763BVCF9DybJCy9ZbQc5bmfx4LhNpMJgtEPyEUiiamGzngBfksQBcyfSiSWzfPktGKH9m661jZeHmkmgENP9",
  "key2": "4B5kgK38kQbQ77HjAbA5Drg6knMZwvaAequ3qktgZnEYad5JHWBgeLmSWLd8A4J2GZVLpgLs99ouUX2UykQBqqjQ",
  "key3": "3BmTz7Vvy6Cz5WTrMsnv3MvrXQowYFqeHiG8pkLNvCjesbM6G7FGgfayRUxBe5oLUnVsLHUi62uu88z3Z58dVMZt",
  "key4": "3DUMTAYH2hgdwxkrrSWBoxwMyhrjVCJD74itbXWXeT8AiJfXWmHtAfVQVEG8QFAN5dWChQxc6tT7FeGptcEK1CB4",
  "key5": "2gE5662wQbbCHop3SjeTuzCiDCmGYGjFrRZmDaYTZQ9eVZ5NxCf7AgkqBzW9FJBCFct6y3BSA1tEAFxLa6nJRPh5",
  "key6": "4tcpKA1UN2APXVMXQDKRyATjpwoAYnbaUg3gEjvuBmm5QRn1HRLh43V1FEXuVadUoVHJ9dWHEfj96bzx3JQejMcZ",
  "key7": "3WB947oZ3R2MzZGmfNRiG4yeHCVY3kkk73pHkfodx9qb9sDnVevmjtB4hVvkiM9rzyQkmZ22Q2C7zyCrPQbxk3Pm",
  "key8": "4ZNo4QitHnyipqjkx3V1janAgScyWNPkz1n1KW6Dipbf5LTZHqawg962eS5XQhBDscZbWUwziLgaX43h6sLrQ14u",
  "key9": "5Ckronb1RVKrU9i8iCrjWZ4VFyxmnLVsdrAPuZxDDXiBwhePxAU1Cs9Nv2KRX72H56NoSdZUQtyrwGqX2BRW86YD",
  "key10": "28ARBEonzLrG6QVVP5yqk5cLrwYJACSRUVwC4ZriFXEwNuHUAs2Yk7R2m6RL3NmmpGZdkBGqHkXqsHBEsc8nAHiJ",
  "key11": "4Yj2uNQuz5QPQJdheVLvMT5RKVGsZSHBW7CGJ5m3Mj7qQqGmCVUm8Vyp9bLJU3HGob2rRPNXd4pXGcVkyKMqxBdB",
  "key12": "46nrbEtHnL47w8XpWoBWm9CUfCupdT5ao4QEeT9yrSmuy462N6vGsmFmhSvqdkELrskYtTY4cMYtSgvz1rtbr2ST",
  "key13": "4gy8ku83F7vazpTk1cDNeCeeXpgR8S66qxKXdhCf4hkPQBnj411MJgdnw6VGs2XjzYuFrqndG2K8mVQk6eKrNAeX",
  "key14": "4uEt4XTsZVGvFb3knG3yX8XUBxr9wLgV4RqRzA4uNrNkFLY1pBdTCWntWGCZ6bvUGE6n7yb9CpB1VZWcVFD2PGBB",
  "key15": "4UaZu73PmNhomabk48iqnNA4maTBcbwe49VRCh4jbE3cHooRJ6zsCX2KwYDRnSaTCiG6YE2kfw7q6YabdjLgGwgB",
  "key16": "98G2gSEh6TYo5GpEv7MJxXKsE8v8S1H8Dr8jyr15BUV9DsC1HKDy34vaYREna6PgyYF9q734YUxeWKjXCCY2jLh",
  "key17": "2UANrGqeRZn3GSnhoChoSzqhzonZr86iRyoxLPJrTS1EGDjVNH7TkmXnEfSuCumUQiAPny7V8c6Fsmma4Adchq6V",
  "key18": "hqgSXXA3gY6XFaBiziB632JZNchv3QPZPswpsVqJof5rnUUv1drwtQxyycrCo3YAampYWR3CD8PanhFPWkqkj9a",
  "key19": "2eHdPoiW3QV644maZYdPdpfK1ZWMDiVgwQhKaK8sAf6oLV1uVzVx96cfh1wKYxdnUQAGSZdgB6E5bhwZ2zb7FwUi",
  "key20": "Q61PBQZY9oUhRWv6pfCvHEm1RBXEqvkLHenqAfYidvJk4NykSYzaKZhNWojz9nezctYJrfmK4ncQcxPUAt6LoUH",
  "key21": "3YqUZWnGhngFcJb77HTNAaQRVLjSb8tPr9SxE96wUxrRW9VkCDkvr9YHxhUbQBrErMhD3LGgVPyKDkt5eibpVXR5",
  "key22": "3U2QNqK81VyYBridwbNCsBLju6qm3gDfCs2G4NWRt8BbSZ5RhxAaiBiM87wk8CWkUrDjMiDSBACFXYAt1cMAPsWt",
  "key23": "4cmJ3XQEHK1qS6LTKBG6V9L56DTQY42an12YvZPmAYnNzRYKVf3kn3XgHoGWEjk2JeiNyEFfw9KH4UPdLZwKLDVD",
  "key24": "NQn7FVeFa5rpWkVrPiiAtC4RNFPdDi5G1NAPCJ1JAM9DDL7v3QwKKcPxZca2ZTXj8ottESVSrh9WY6JqrxRKZRF"
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
