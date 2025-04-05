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
    "3dqw8p1oQr4fZWVwTmW1z7NrVZvYeN4Xbu7B4vXV8AHCuKeMgUPQsYfqSuJxzmEYPzvHk7zDavXfxJ9WCWsV983M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tCA9gSEQQ1dRJF5DDCWKNafAyRcxUd6B5nUeHYtRPyLR94MHKS895KnmQbZy1KnoGm3VKtbKwfCHNmvr3XxX5A",
  "key1": "25ifGxi1isTj4Lwapufi6DLoiNdsfu2BcFjCZGCgWQXFQZRHsQ8QYudH9UZhW8hNXDHjyWmkakc2v5EEDCuZQPWk",
  "key2": "g8c6j7p4n8bfxCkUJZ8cmNSbvRJwWWHJMiuaEMi2gyBrU4zjmW9y6Kq7DJj2tCn8irPkoWsLsm1V2QgpFjALcP4",
  "key3": "5H763YexxrAqML6PCmev5SSPH1dCQ7PYxDe8QptofSsXBRUG5zfz4JVZX1yZxG5sqrKwywzVSzWoVv3sfkUGSuHK",
  "key4": "3S2of7x7uhgdpkvJD8tSEh9o3wFXb6KqJwMAaZf5x8XHZe9LfugFPaYRxKCrKYN2na3LpyvDiP38M7iW52KCoaGs",
  "key5": "3MF1hTT4zzK4rp2Sg3c6XCsay5W7cqwkKESY4KEHEauLGaJt8NzjUXYVXvsEANfsr68YrYi8S3VHirDHR35xBzAb",
  "key6": "2ffYC2BpTYnGU2PgRDiB8kVEaqA7Vq5xiY8MRVvNutozjpFbXMi85DQRj1yM5EyUJEXXuUTs6btyeb1GTaijZ1Ho",
  "key7": "5HPNbn71aYgsYBUxz8weA274SVA7CZ72NzU8GHjKZC1ZGSS9zfSyrZB5WRuPNn3DiFmD3Q7DYC9QiPKEQwDinkCz",
  "key8": "4ccbo3evsGqs5PPtEbEY5roBBb5nZn6aDTmNoqEKJBGgBcgRjVS4oycQ6XGNzf1M18hL3HGvUpGqtCxVY3bXVMDX",
  "key9": "49FFbRGnWhr5AqgfPbcDUutY4DfUhs8mWRjRJzz6sifpN1KfcAAT5KcVNqfepShPU8zFjkcN5Pq6V485oK7qJRts",
  "key10": "2D7R2XBcMRwFYEadGpK4vWdcjM7T9ihSQbSwyiGVkeT5tJDi87u43NKND1xGWX3cfW3ajVYK7rofzBatE2mxqb8g",
  "key11": "puATHgjbJXbq5vRANBe2Qt8qr8959MXDuwjPaQ67phJX24mpPSucM53a28HupbcN9cwNW8GzdgeP2nrpjwJ51Pf",
  "key12": "2vQAkMZAFxu9MzVueic6YrGUEFSr31WFuULaeDmCPEgZTBSdigp8nhuqp3YZAn5tyhQu4AsucVNkvL6vT3QJP6wC",
  "key13": "4ABXvMCiD3w7p7nHUHCu3LM3QfJdNYBJWNSmbp2KcccFgiC6xavC3shBft6vNmk4kgq1jJZ6dQMpAMWpPCe2SPVM",
  "key14": "5eaxTTjf7DR4bDwRNhqLaWvg2zq1pKXws8H51KCjivJ3noWNsxqsZZYCrzJWXm4ejQvGVDnuGddCcq2hcuy6cYFJ",
  "key15": "4CYUL8yfg3suSEKdPnDrB9voC1yy16YzrNEjFGmGHQNVpMNkYLBbDHF93KuELytWRG1kWuAMYCMhxVfMdScFX6RC",
  "key16": "5sQHBak8wDsBi91TrHYy9eFdx8PB1QFMHRJHNUVBaCmbS7q7MZCUiRdK1LAJop8qP5McDw4EiZkUiye1HDRyYF8U",
  "key17": "4VessNxnHv84jPD6kxBu6UyDX2pVhVnb5KDSj5LCWpjWu8JsauFuhT2iUY5bSm3XfpC2y48JtVPGSjT7RxjrxrzB",
  "key18": "x3kQBzD4qnrKag2qqRi3jKSAgA74MMwtgdgmubrm3SCHeisoEp8yFhYwXYq3fogiw1sC5Kea1KBUuGUb6Q1xrkr",
  "key19": "54rGTBwYrCNwTC2iNjUwxDN2KZm64pW2bZ66rLHAcBaz6p34ho78gQmEw3Kqv6ifNDWCyWNheXe9P869rwenYTT8",
  "key20": "2goWeuEgqKZjBqzt5UgXKZ7CKqxaKHwrsr4tXEx9zNbGbEnZJeSxVV98vi4Nr31z5SrYY5yVTgZddWMW2mCxD5Hm",
  "key21": "35oVeNG8xfKVqspBdWywfTeDcPcDsfboceMakDePC6cUDtcES7iDi8bWQ7N3cJQxRb6x1kbAoUECSwzD16E37ehF",
  "key22": "583JWVsxQMAX2kDvgBGB2486hUZ9X5dc8fLdvMAGs2SjaBiTfmRcJJSDUDaMRmUeiddajvsZ5y23zEF8UpbuoWnt",
  "key23": "4z4VA61p2weHSig6tcSnZzMzR2ssy73J31UStMBT5H5jbGjAo1ZkfdnLtKrMNebGUxKRXP6iCZHWPvQaBUaByKHU",
  "key24": "4t8YJauzZuCBMCEKoVawwbqcDwqMMPomGVhkcLmv9TrSUKZ7jCEEYh8PrUfAfzDJ81Hs1aCcPUe9GitTHoiFs5J2"
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
