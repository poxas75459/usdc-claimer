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
    "3djd8qUPnn42XHpsQNp6oqYRrWGuxmhczZo24HrAYbGxafQSobNWf9DCbqk32MiqDbwp7eTxZAPMZUrDHrTLtsBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X4Wn1taMiEzPGoRAsFQthPBghGFRMicTVUdbVbP6syM4wmY1ibwx1rmgebnhJvArUDGCSTjzZo1KaJtNXXxD9Kr",
  "key1": "hcHq4vQWKAuJemjV2xj6gqFhRWTjRgCoKgHjFJaa588QkT3x7UMQCr3Dn3aKHcxjKSKTEomQGfEEUE9zUHQ9aZD",
  "key2": "635LDMYD1agVVzmCEohxtaxjiPktd9KKH7XLavWKEwFs2uhp8yuHbvsJYRX5pXkuG93eXiQ4eeLuV2p26BUAEdgN",
  "key3": "3KuncNbwyV6tUVr1meVvjDHLMmZJ2gmfJBrMMhGcKpNpJDyFSaxuZEiNt9oTLk12pRQsVK7Zzptdpm8ogYCUJHEz",
  "key4": "5TpSrLssdCXuWg4JpW4bPVpPNKagZDwRght1fybJQMoKHfQjbogaBwfewJTxyT99wZAEeVNd9qX3bhLU1JFYUS6s",
  "key5": "2ixAq2b5DWWvCboGXz1evioHPZSh9c816Si29xdzaFqwHnwQtEw9RP4F9RVgvZs28unWGZN3acbr3PWf3kwbxc8a",
  "key6": "5wL9KyhuPAaXMcRdwL9xJ5QR4DWNaCH28JMaU58NjACg4ZZ6XVQxghXNVxz94b9ZHAcYHd7Jb2a1Ugx7nGiNyJ5p",
  "key7": "2sKPP5hRr956Si2WeukJQRWv5ykCVagTZSuMUwQCQvczKUC7oCgPtKtrNp7pfPuFQy8yoUn7mSdEHqqijwynmz43",
  "key8": "5ybVPEmXqvu7NdUWyMiEQCHCRwQu7XnCEgF3mynD2s2iCwGks9mXb7ygbpqfTS4Gjw21BdmHJw2iPGbxmidVKFXG",
  "key9": "59PufRWMXZwTK4eoFijjzwSTuTwBJSXAusjc6Z9ECJGoBJyZuK9LvTxdha5MamwTpma6gVDmTt3Leznw3gUXnATN",
  "key10": "d9yKQHzDhPX1pWyW8GyUTxvBjEZDuXDCrvMwUi3McWEME16PUpxPBA8MqydttLqPvZLxSkugdTaawNrE2xYVA4o",
  "key11": "4AS1PFT7tcQbafVVBSe343e5EDEWS6qfEq9GHKdtgaPpwmPaJ8iFsntUbd1Mb5hjpqHJuPkjykiZP1C9YbG4b7V1",
  "key12": "3mHotUtsh9UggDanMh6ccBsEDighsDUYB9votmH98Jq9wLf1SLrV7JQpE5DmtjvxY3ykbcLKK7528Noz4cfWmq8y",
  "key13": "2sjbyDPm7BShYMmcpWbDvbtZskscrKcJv1WUZKqqTeD6aRkRZjHsxdjimDQhq3SkSii3QAS3EB2Udwp7ZwkibQ8X",
  "key14": "4ScMhJHUHzWaNfL7P2hC5uV6z4MGQiVcW594zc6ZnxbPqGG9NCp7x31cmqQxaPT8mkMNBiJXDiBE1U7fmHGmTt3y",
  "key15": "4NbJKnkkfPsHypzsiEQXVr5NreyBMx2vrB3Kh3mPRVzDzAeHmaTBR8LBy118chycCnmWKmz4EhvK9GCgS6B4Gpvk",
  "key16": "2bxn2Z1supMV18Xv6wPZyECJLGCr3F4JvrTdtqWEnu3TT3zAxto4bX4VefuXYW3ZUJv6YrDyTrA23hrKzNZdLB4o",
  "key17": "4HM9Fb1VsGZPxyXQiUZEPa3fXSDrMNvGtdzxmk7qguHETgGtrLmNgExFab1adimriwAjie5xw9qUhsLcqFPXmWKW",
  "key18": "4iFYVCFe8SYFeM4nxm8eXU6yH85Y8ztV74WRPhDoH1MfStpp1xmY4KnAy5dudkE656t2127gZJv72ZkeDacWQsmo",
  "key19": "41Q5z7xQeup3qT4UkURvAHbbW97oULiLoKnUcdUEtHKCDPV3TKkF4JmMwYUvbMrsB4sPPAK2GVT6ScHZ1N84Lyrv",
  "key20": "21rNpymsfR8Vt1hLx5y6DSkDnXHJZ8VCv9Rrtc7GfCywnaL4gGX5a5gzpBhS5YHw5R3Rw4UkGf4rUECqJZ5gv7qu",
  "key21": "3ZrsYq259dFYbJJgfBU1mao28FSkunkZjojxA8kwystZUGWik9wgUUcvS1NGKP6MpSRgARe6D79vmo8K3wZi63tX",
  "key22": "5KVcZA8r9xHa3UYvrm5WaLwsa1SVJNZZ9yVaprrRWzRcFknBFgh2F3QLEGynSUU5jKKZk3AY7pHN2DrtTJsyFeMN",
  "key23": "oogmMQZmcFKuFRtW7Qi2gYZxGJMTnF7fTmogiiq4SfN3xHNuCvxm1UUEXeoq7UZXT88mGxzvoiG7ozmT4nkxHU6",
  "key24": "27meQyHqn59N3KTieJoD7gSeDE3aivvabiRS27ieC7WE5jTqv6qK62SYA2n6pEpJDK9BrHBkaurbErVjy8r8kMfr",
  "key25": "5mWwhSvmsfSEP6P3TdF1JZVsXq9zS2xTT7KAHNm4kfw8Tf7gthUES85FDPQvZt3r2mCgZBPQ8pukw9Ygf5w9qUjk",
  "key26": "3t8X5Y3MBfp7WDVJyURcErcUA1no6UhoABuMBepFucMCNHMH5oFVAPoza8fijsLooLDCKmvciPZ4UnR8GA89qy9s",
  "key27": "2t28RrCeWXHBZdvmXGrgZzDWzRVuTbHaqVxz9sjjCnKaVH8ChGjkjA7DFK4sgqwGoJESUsZrLnWZDUd4e3AibNVg",
  "key28": "CrUWZCDUbNCTjrsP2bTVWcrrsereU1Pf4CDmqrtGxAri5c2aQVqhkWPBRcrjpSm8Vjzm2KY6YfdqFSgx95Jn59r",
  "key29": "YUkKNbMD5P1xEaQ6bbfyRKZ85ES5JWRyjzs5wo6X59yCjVGYoPghWYPF8K4BcHNXVQW9WKayDK7qhQrxRAt2S5r",
  "key30": "3y5h479Tns8MHZZa4QZzDn6DKCtbxXdRqzc8VuM8JbDo1mED2dfDMC2QAfXr5Cuy8Y8AXWHAk4AEi8BW85cXFGWX",
  "key31": "5XVcHix7UTeyTNKvpwhdndNYhoEXkyuXBTsRe6uwakDBo8MmWzn5GGbKwyJg6x4Q3rj1rycz1iHRL9rsifF3t425"
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
