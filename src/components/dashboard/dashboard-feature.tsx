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
    "4YSnBjgg4uc564bg6Mx9efdz2mxUfMEwohAfyABoh6N1StYLMhtMzngRc5GfU4LaK2xuwcy39QRT2qqVKCCvRscn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVAKmUjVke5YSdxF7iSf2djXMDhRoXcccjuhPUG5on95qk8pQQGb7UN7uoxp66iGGNHUcJYriqDCABvBaNPYAKV",
  "key1": "vMc4REVJcXMySCAt5meW4bLJC2zDMWv1n17BgEZUWb4VaUKUZFaCbQtSct5N1Mi9TDd5psjrkZDHaKLxz2Kknn6",
  "key2": "38roZGPPeMWbVatc67TwJoTpFXZcz7UQxaMhiCnyWYWuNWYaR3qGmDcB5AatsNHQBf6FdM1f6PcRYAF7NGRAjNs2",
  "key3": "4wk6FbeiDku4HzisbrgyoauYfFBVkPt7h6aan53n59PksrTYZgRKYxYdcc5T775XLVZWupDarN6DLSEcAf8XEh3o",
  "key4": "4MKnBA8foLM6sCaaNLySTPt7a5c2jBXV55BGW3vAyGsKQ9wHfkJ2JQTpuEdxT5Vk1ynz14YkdVMRm2za3FKvJdvS",
  "key5": "4HJodVaQxofvbQLJPzvW85Nq9pWUKW2a8CfAccwygQzeq7x898aBCUUqsJhuiVy5FZvQRyCr4WpPytt68EsokiWm",
  "key6": "4bEMP1wdfuNAm2BLccSDMJhbv1Ce4ZU1GDhHjkq9YMWMQGhtDQ4beaMsJJcKrHNz32tXqGWpMkZSyz6J5FEuJr8K",
  "key7": "2Wo7utMNDmXSRDqmfgTGEsAvZcra65DGvpS8ppuGyQxk49D5aaqsTQjEi1aZ7TbcKt5yfrpSpKdaTYbyTTf2ffzB",
  "key8": "3pgCJDc5t2btckPdtu8XJzGTwZS265N8nx2rMPYGx8aW39CCLV4jfkZoBYwGx4PPdkAkTnoWSm5Jd6jtnoCRqYu2",
  "key9": "3d7aPEtEW5MXpJ7MvYovegi8sy77UYxJxq3nWPfsGduXras5NzZ7hNaeDa8otZU5zjvfrhNFkNFsNy6KG7Qxrrnc",
  "key10": "51WZTVZHSdacQU7YQQxD5RgtGmVmGRPJFRz2mcgxrALMCidtg3fNdwLUwTMrCXeqn8ewyrA6pvvJBTecAs2FJSPd",
  "key11": "36hP8ckBDNrnpf11ZGjyeYuEVJWEKAWn3WTKpqLRXR1vH39zpbk5vnmZEQGUGPBN7uSPXQEuB8jWg3hJkHRfkpnJ",
  "key12": "3dJAcCFEzjFeBFmkkA9doip8TWnv77EkmWnWyDQMgVpvw7JgX7G3JY1RNB9L5B62XuuN2ZhXHSrXhrCnznNxR7gh",
  "key13": "3Z2RcWKNEpEbeKvq6b9Z7KMeajz79bNtUAKJNfstobJwYE4r34g2sUHuRcMwUjU7jS4N45K7BhguagnUneCuCgwH",
  "key14": "5jdSNUYW8u3deLuCaASS5C3VVKqdsjeifTcX53HMGFr1cjrKmcxyX4mmAwLYYMdjZXbykM7jMCPVKp9CHWZvxWY4",
  "key15": "4yyQ436aPoQzXdJHL1L1E6oDqNHD6YSUyaVEtrHgzKKRhHb92gnP9hFiU9qLroSkYT4G1rVghXm4usyhR6Rx5Xz4",
  "key16": "FMNzWGHSDQsuRq8Z9Jx1xR5c2wY7TNKS8i2AnXLYHa9xPvVgcQBKLUxeW3YWo6hdJUkQup7pos2kdwPTZDVDy2P",
  "key17": "2f4EzNk7DXe4j6fN28VopZ4ScAQY873Tn6h4n2EGQTbp8KefpFSZt2xCMYh9DQBEbXMbR2E2cZefnDNZH3eMxpwb",
  "key18": "2me2JzU8SbeuRTfJMcVoMSSe3a1gcZ2WHtpBw89XabPxDLkuYvs7yFvtSxNkVUfScgmWQQzwf64CFcFo5cJWEG5E",
  "key19": "R23d47r7LVm1Bu2dEUM9VwwxZjqhGTWvL9tRvgUZkb78Fy9EJkFtQ6p2ggUNv14ftY2jRRxWqyY3A75Gm29kouA",
  "key20": "4B5NHKZK79ZWgpQNgrZ8zg4nruaaEeZoHdsVqwyvF1hhcQsy4tb3zdQ9gwYSKAMkqHWjXbTWCErSVpawPb95rLEs",
  "key21": "5YC9GhYka421NM8Tn9i52yasUZ3X37Gy1zW8gEGheN5ZTaJadktyS5PuucAYKiZKKU3L4spWqjKUWfrtB39x28fW",
  "key22": "5HkTnddUCGULqftPsS6wuVXNeTvW9CGdw6o2ZFdfERaWuQcdMu3ALrGuShaPRYmP6q7pm4xr9KKo5XWR7E6RaUNv",
  "key23": "66DwJDwJYDKjfRa4GBN4BwmihwDX793Xj2SLzBWscNZ6ohnRRcshNhWKYTALTom9hLjwtNbzVYVApVWwa44EZuKX",
  "key24": "BeLodoU4ByjiToi4xvXXhuUnS9UsUy339H28r8awNs6bD3V6HKx4inJHhMUE4skXxvMACA9FgAJ4jZRUp4o8hqe",
  "key25": "3DT3vtLZuL8EeeLfN1YCGGhMSpMhysp6HK35PtyApK1fgLRZsZxfDNxdf3dBb6nrdjZHDLrLCyLrRe5pPiC7WrNk",
  "key26": "NweJNYh2xGBy6Qg3XJv9ZXX48QLzYiTn1tGmxCamMaB3mA5yo8wiMfzzaMjJc1SWPAMGeCHoHpjofCnVaua8tuz",
  "key27": "VUC4xqTqous9auap6HbxNUQQqNmbDuheBXVBK8J4FC3NkYwcrQVr93tr4BLHZtqJxDBmgkAzSBdAHadKCpnjabe",
  "key28": "4UieGzZD5TcKHdCxbfv2berPb1WiRBJUcXtHpDwLTwUfViX9SHJ2rfYvv9cfXAuuyoYvqDZ8FfCFd3mSjb4uhJpd",
  "key29": "2dPC1T2U4NGHB11SBwBaHPLw1eVFPkVbiUAMZ8LE3vF8RvSzRwRnXihQK1UHDJ2QgLRXnBGRogPpkkobh9SBr57d",
  "key30": "2Jt8NdZc2tTJWzkqYp8fBkQMGMJCVoxgCahajxzBvjiWPH2UbpMh1VWGQcTtBJmV9Tf9e8dvNVXfSn2NuLXEeNSL",
  "key31": "2JVpRuLmCCoXUcE7PKUEHB5WvP3p3fVkcArr19NUTMSS76XwWBGz3GUxqAtwuFb8yWh9jcmJhwKrGDYu6UnTV5if"
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
