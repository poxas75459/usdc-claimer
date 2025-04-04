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
    "59PpCT9HgJXJVW8CaczUGxZncsJc27UiqkGhfTvCsYQK42a65GoKoKTH2np5mmknWTmPF9fVo2DvU1LW21CcFcHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDHBbjWw8t7d3EnCcMybo6UTbGye3tzXPMLC2Jkjveu1Za7VJ669LmDx9cczmUUQSQD6pCkjhAuqeZyzRtP8Hej",
  "key1": "4xgLV8MGKR9GHRPi9NsTC3TCrCHg4CYo51XaLsfAWr66yYv8GCxGBXAFqHBC59CN1pBL2t4SWU2nhh1nYHkLFjuf",
  "key2": "3Y3UQA6sszH1nyRTNzrCwxLwWKR7V3pcRjtNVszRN1JKMmohcWnmv6mvDzUgrMHZbT7wmsQszm5jf3Mosm7aaMNs",
  "key3": "49uFt4b41j3yZ7q1FfhSvxL85yzmK4F4viTiv9z98Nk9tvwLAPWMTbviXKcLd9vus42GVKfDWy8yoXUcRqTTG8W1",
  "key4": "4v1C4oCfejNzQzD8mc3ePwquZPYDgpGHmjqGtffM1Xinorwc8jx9GpfGjrjRVzgJfagD7tqvjgLzRtGmx4pspuYZ",
  "key5": "2nGrucb8iMRqz3Ja3UgSkaTmWRVjp8N99BmaKWQk8QxKwqQXp5FZHobHsjDm7LdFanVE8Yvm4HW772U5ppT3DKPS",
  "key6": "4kHhcdCvpfeazRtPbahmuGUWnmgND1HFC2rrj5o4Vz5Yi5PKT8EWsN1o4XR8bUxhSCVHGrCjyXpWjbRTiYAXiR2t",
  "key7": "5s8yKQ7AUQja2bbgLaQWFaNh4nqTkioAHcA9ogdo6Q8q9D16iUjGBj9fwvkxSHpAMPehjd2FRSx5R2KoYRTssnTC",
  "key8": "2hBVGhfPpaGcsue3tLhpZpntz4rpby7VDphjB1NkbRUm9WDPTLGGhny8rsPpeV5RH7dJ9mNhob6WWkGLbkuKWHoi",
  "key9": "35QmKToKHgKTSxtwsXcmMt2iDCrkxCBYei98Ep1vikoA4LpyJp8D89LTyf2WKBhCnCyd1d8iT6X2vKyK12Kr2s2N",
  "key10": "2QuMR4jqNqAhJkYCiW5vV5cJ2KyBUVT7EJXYQ2ZM7GQtBaVTFF2xVjH1q4NVTVqKfUuSi1qyHiNXAZPgniCYtDWU",
  "key11": "Sa1FYMs2wcTP1VZuXGxSux4pxris4pzUvPBRzAZTBoQKEwFqtkmdnXEr5JKteLKYxMwwqvkXSS174F5GF9T2YCx",
  "key12": "2nTEK2pp7qhxFpeekKvu7rkgebz9oWzpjKjbVK79Ae7k8P6phCEsYpLwPQFGqqEZrWjDSPAyXSPzno9FBTcLfrFS",
  "key13": "3JLheSFicR1TiCQG4xUZrqZKUTDH5SYaB2YGdsD6Vb3EybMzwtb6XvdhqQzmaRMsuTpjFnuHF7Y3V4FSLUZCpvkD",
  "key14": "4Qzbiq1qHSWvBuJViJUZzgBdD1PiEjDZTD8tX2ifiU8G36F5mYRLB4v2MW6SUABjzd5qbRUkgcATaALS1sfmi5GK",
  "key15": "28Ekz3XjMZBwaw5JAxsTn6rptUhmLDQqXfmwQLru55gdPzu23vVHJgUy6TGzQcxRHgNcNsjVVJX96yXBL5RvJbtp",
  "key16": "49KnYf6ceQGaiVFQkiQWna69bG6fH8ayopjBpZwz5WALWVuDkRfu5Bp5Ja36gQzd28vNsaX4kXH2zDH9FSKEdFfx",
  "key17": "3UsSBKoRNCpQC5PKxTaeHxgLiEhUV335ip8eC3opxiWHbNxq4kZNuP14E9NoRWL3dtGR2TuoUspMxYMn2oqFx2SS",
  "key18": "4YBcQCJLqJ4VakmDtVeWU2wzQR8ssQGrni6VZsubFaAr56ADgNE5ZTyn2BmYHMFGwLfYXWphz6nDhmnH4cqp2hwS",
  "key19": "5SnTXreK6HM1sVTmoTemcfLQbDEKUnT8gFhG3fnZyqCNmvqL566pUeYRohrvg5MoDezdgnMLQrYEpq7mxs1aedRY",
  "key20": "2Ro4sCL2DWhL8NVkCsWgTGZTB4y7HfxfA3ibfiesTXGxFqJ44nHd8i9FcX5RsUM91UgEU6SDj5HbCBPyKN4mfH2Z",
  "key21": "5qcz8GffujBY3jatk2DehtwWdpkR7Q82WKfT4aMt7NsqMuNyzhor5LZnCg5grEVGBzb8pXW7k95d64sLfhBHokEF",
  "key22": "4x8pwcxowJAaqSBrPCTqyTwLAHvSMcffrgwwPiYfutGmDARzrCJwsmpaDPCV95MHBs7nnqkTHWhFF8ejScubBqsM",
  "key23": "7qSH97TJEXCj9wC6H8oZ4dPoG8JTa2E6fdaoRJmLqpveVYFZyVBLLSLFfMgUxa1eHdAb6mpq9MdorNAnwtrwzUY",
  "key24": "4b1FxGPPe54F67MNczMGcAeDNTZBHCD4hCJ4VCVty5z8o13UBw6NMRLAeN6MdyWPY7uxpGYEDxhwg263Nzuk3Ti3",
  "key25": "5Aciqni68QrULDeTmj6j3ejikSHPJpQYYbwuCaeWHPfywpVDC5GX1ScEKmT9CEPjAXEC8m4GBh3M3yKxFgD7g6fT",
  "key26": "5kfkjnePKKPY6qCwLNHnJgNkzHwfRThy8zzDp2zQmgb9WRfDhwkuvoMJAMLSonL7eNRoPbvuzfa3i8BQrSaqttz9",
  "key27": "5VBuM2CDR7y6Pr5rR8DoNv8z9cZHNdmnL1S2w2XeMLVcx2pJTGYgjfuWLs4rY7vpVoGH2Namoi3WLjxGhEmDiwkU",
  "key28": "4k7ik3DoAU962dQ2BRVKA95zig2UEYtUa4tDTquWDYEuEKZ9dgxSnH3Lpbk4HVbnof6zvrToDwWpFWxqqGCcQC53",
  "key29": "4QtSJLLz1ftbYcj6B1SjjcRV5ZQjXEH4oaYwgCNJVGPh7PKUvR4acgCACQRmRErmWZiRqeZjiNfpqjGXyXAWSXpZ"
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
