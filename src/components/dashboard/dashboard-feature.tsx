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
    "b6N77HjBJQ63gqu4TbHemw4L4DFPfbPQLptUr4ua14L1GXpwfjjpb6szxoXDkm1AZsakHuqXyqnLqeXEgXPcbok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GiLpVgRNtEipnTqmSAox5P6YGrH223sy1X1ZK58f1XfVZVxRTSmgt6x94WGeCzMXbQgb8yiFrNGNGiXiyxesAd1",
  "key1": "5HFAr3Rto89f68QHNGuPN3JQxM55omukJGFoZJkc8Uf812iscAShobKmBvT7pUXksK2CuweCHeQkPjWgU1BA66DY",
  "key2": "4U83oTEcA2CiKWtLuNKPuVV8HVWcceQ67p68yFyFk1iWrEUGGwj5JaA9A4GYhopHwQc3NV9sWqMCpdhE1SEWsfcm",
  "key3": "4HFKDPBi3GmwxPviZam32i2DtFKGRLfestFGfrytpNPseDFmjyd1nspeTm7Us8HS6dcHCHhsiKuzdcBr5STWSTWb",
  "key4": "4x5y44K6pFNDaLkp4fjFrYsDH91pjRgThiFb8bZpB4y75qYZqjgiSwZFZRB6bpJzVogsPhYChAB2DoUpuw4tUFbK",
  "key5": "D9aNvgc66J2usnp9BfKfZXRf9j6TDQQVExJ5LVxFiwhCCPg33uut91u3RgwpGkQ3P1SKpASexB4JkGCE5gkZUF2",
  "key6": "28xuCNAZaBAJafsdkZSJXNo5sUXKnQo9pMgiDwsAnLLo9Jf9ZZTErG2TBHaZU2aTTd3bDNcnPFbRGBjotqzGHYKR",
  "key7": "4KuWbyVQXj3YR162Mej7hjsLn22u4mfQ2qqp3s12W1Z3iP7EFkHFU2ifbz4ARoCGMsxw2kGvqFQyBnPp34WLCnge",
  "key8": "FYpcGpCvX69T3Hym5n7DGA67NBi3suYx5492ZXZ18KpHxV8p4d92bo3atUFdRqCRXTKAYbiuG2ybsfQTkeebe5t",
  "key9": "5g1Sp6JQMpKUrzW5awx8A93b68i4AtTaEBSxmJESzZk4YRWEyEqrMFG9f9DLybxraXHqyaMqa7nEtMa6Eq7g24JZ",
  "key10": "JdkrJSYR6Yzixnao8pspr5WzwCL5KVaEuc6h52bzjTmpWmXBjoL5pMCnczTkqatfGn1KaokSd49JEsbai99k1h2",
  "key11": "5sh6Wc1PNiZBk8KtTWNbkhNyY6vjKGkxgyhE3u9nkW57zASeDrU3Qi5e6544Gy4s1Gbn6sj9vbBAordu2TRvdSmY",
  "key12": "5NHhckom36ijzQDw1K7NsEtoKvZuj4RbTvsSsHHpDtMzU886wewfhVkbeqwg1YjoE9fxuV5CzMSQK4QnddwTHLty",
  "key13": "3HZmzmmjnoKoGesjuZzKMSvFEtzhR9AMGr9xXD5zUftWcsZSPCXVNT9KfRDQZL5ENqnC3YgTstxxF97YorasoWNW",
  "key14": "3ZSdQbemw6ptYGFtpUPT6tU8EdSfT4n715gMUYGPxf5P86UsBa8KgAQn3rSNetgA2y4SYCU4qcFjsAC1eCShvfmL",
  "key15": "3mLtNHazwKoWvzAvuxMUinPqAsGYv5AHRpks13D5JcJkbNyf6jJxHPfT9N6s9LhoE9Q6qexaxeVgS22NTfKMKYsJ",
  "key16": "gfqt1EqEjSdQ95y4DLgST1mbRhhtaV319c2YouZVbcCgYSTaR5cuKD5sJ5bS2ET3Sj6jpG2ryoqx6TT1dFm9gDq",
  "key17": "8oZ1L2N7pe172pRdrTf3zDp1DSBfr8JuaoBAaeNtMYyQkSPkt7oL1A6jfshfwNuxqGqJAwL7nt2uegNtNJ7bXiV",
  "key18": "5a4qQTrrsnNgeUo6CwvHejG8Nh8zHrDDM1i7qPgmcLNCepdwt4SpFVqmtKQC8wJZxmNyt4FebtA6wSHgdmSQsuXm",
  "key19": "5hzoPavAuE3WTmWERdkqzZuVdWgTYPs9c6jyateAQwPyeVHeh5vQMMnwoMtmK5MmCWLzTZ25q9L6oSnqyGSYxcik",
  "key20": "2PA8vEAriKNVFqvn2AQKrwpyqVjAwBBKaHm1GsgFqk7pdKbF3oYib8DwuJbY6Fjacj1c3rsuJmePAYNv7RBHqEu1",
  "key21": "584ajaQCTJWWaVpgxfo9d6UGwfra79dWu9wz6u5JCY2mg5hgAHXYTHEYxcdxZmNaQJ5RbubqTgnMcnebhWoXMZfE",
  "key22": "37Bjai2oJQzUNXw5GiNEVe6FePwuAj2GNhCEuCH1U7HJxZpPvXS3apUHQCVGVuLtw6VHSmxriaKxwUx1Ph7b8mPN",
  "key23": "5f4psXymNfpqFHkMxqSCpQGeSC6dXWcJXWrbXGX8NMgVuqRwd8sWxnpty4G7QLjWQY9fVQ8WNenvqjYw1uYy3yy5",
  "key24": "2Dcq9j9CKsmjarn5Sgj6Ez5qFRLRtMsahnCYDbtHu8c4HSdVgGwgYpc7Mtoax51Sbzn5AUYtaEn7d4MCbaEzozwF",
  "key25": "3yADQx97TE1AKYBgyZMUXYq1d6SyrY5MLEbcxzVhd8EM4nEK8NMeDR5g956M5Fkpg6v1imAhvtEYGDbrWpFys6NQ",
  "key26": "5Gr6Eqj3BrTMYt5hfZ549kbPASDL1pydHMErPtuvVed1BduJHU3e3XMh1ncBs5FWWg6HVTf4gJ1gLLnvJZhzrpr2",
  "key27": "2buKhnYaeWGTjMftpxHdS8m4jDNx983zYxK8c3MshpUhypChju5AX29TuVRUNR1GwB9UrkeY7Dg7QReiAgnsdomu",
  "key28": "5buASHPyxMrRD39xg8vwBW4Krrj9UMUaxv83mUCgxQ2pZRnuFidL94LqjUuMTX4zcpvMPMKbxhwfw5WKu3nbQHV1",
  "key29": "4QwUhRH1WpsaZcdz8MscdY4hd9cm1pPE81iysCuRSWxKWuUKU9T7vNkNVZdcxdNCdCJeBf6BBqW6Zbf2ipRMxN46",
  "key30": "4u13sHiU8okVVg5uaxBo6AcLvctXZRaP3XCF3dNVyc81wtyfMWCK69sFTo7vHUUbDGTA3m6DVNgdYk8JYSq331o6",
  "key31": "414qTPBGaNFNoP7eURS6BPjrht1eNbivGmNWgNzETsAAjbAcJwQR7ji4MA22ykNa9HzxqCEzJioN1yHbMR9wKa7g",
  "key32": "4iDtKtnstryaan3pu7X4mrXsm2jno8oJ2uvNsv8ofREPxPJ6zUGyvWgqusYgUfNMprZwswnwqjNEiG64rGQS1mk2",
  "key33": "2Jd2M4G2PyiXg6bPdV7scsCEnLmfbt7ReMHSy1HRtEcyUpqNAdZ2jwtE7YJ5XTuyVB6P5inRTYE3L4YCo8UEEsh3",
  "key34": "217ABchpeCzhUk6QeL5YyHNgRQDRvZbN4nnoRpcXzsU6rg9HXZKyuBZe5a8rKC7P3yPRAN1Vyf2viEGXgxVi4EhK",
  "key35": "3gZKGaprQ8K6Y8Gb2E2v4QY2MbnokciV6WgpYudR4aa6yxiCbV738abRZ185ALPzwDbNEGzXgQhVKSVNsjrRHFXN",
  "key36": "3L4PTmG3aMHRmgDZ2MSKLGfHCamFHifg1Mg62aiHW85Hr7RRr9sJ7wfYdP8bfiEVyfYRf3TuQPW73DUgu2T6X3bW",
  "key37": "4BfzWBfb4xvQYHCFYMt2eGihFZ3h2XJu2BfKBE3eX8m2TxRRma3BMZnvw9kJS7Ew2gnzCxPUfFLLjBmY2WcpsWKd",
  "key38": "4C4kHCF37YgAZNmKCocNMS8QhxsJwskBoTHLzrjbMBc8kai9mGGcD5Naii9WY8vHDAr7iNJTgkJWR1PuMNwodouZ",
  "key39": "5zkAqAcPZQGg6rnSwhPzAZbsHv9udxDmyJZccyq7nmgL1Xr8ZXqqMP58YFgES4ZyT3uKouw4uid573vdpzRdre7e",
  "key40": "331ymYbXjARszfUmTCcyoNzvWYzEm9fHkQSpudPXk72yrrXYycsimVEsLkhGseu9LWZrUQpuhN2QaXJQcckhn7kX"
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
