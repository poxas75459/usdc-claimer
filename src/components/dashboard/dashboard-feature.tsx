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
    "m495UcM7yDATzGrvH2CirQKkVsLij4GHaxcFYyTdALKYY5AmbgLGGBUH3wAsJzSgUq2R51FBTz7t75qsVm6HpNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWeyPbeXPVvm73jMvbZC8tBwcgsnsG588g2um913WGXy699YBTP4iSYAi8d6AvpVKaAjHDa579kMQQLbv9QJFGy",
  "key1": "5rCW4ZpBDoJNPwjWDMe3uE6zyQLy91M2DxkckPniMGNmXHadpYRGsQv2NKszL3utiJvfaR9AFkxnZeH89pG7hTpc",
  "key2": "2zScdjBaieATdDUGHrXNwsMzHGVEPttrng5bh9qBofHjGXPnE82szs54CHWHVtf8ai7LnCnyyhWkgDdm1sqCjZ4P",
  "key3": "2g954FWwX3mjoRuVgKLDcsViNr284tUjW9mNUzEXhKgAg4VY65MBCSfDdHTf4Aj4vCGCpMhET1YjuNUEXQ7JTcGa",
  "key4": "2eA9UEfxLcLGErSkh7LuDHHCwuYvTRqhyrVYubLW351xK8GnczrSSBNAdDubNKdoWYanpfMPptvKSxE9qYVc71qw",
  "key5": "4UweoE3GxEERE7v1qcz1VR2w4FXuJ8Dq7duT5R7foCkviyMFQgFZzKRYB5gc9mY1p8ufPbfcY6X71DpMjRVLHXCh",
  "key6": "RDZWkbpE6Q1xFLGL92HeWBqKoBFh7E7oKMFbU5AL7gHh6aW7tXFBiPwCaYj1DD2hxttqYSLXb2uJidoTQ3ZzzqY",
  "key7": "3wshVW3dJgdtxmWqi45fBf2gnQhqBCqK5g4kw715uuracLWQVDLtSjyw78dvXkFJwsNNVFnifrAcTtMwpMq8mXEC",
  "key8": "2mEBVkdPQw5M9q6dN7CPF442MdQUV7cJBdgj9wcGrYMaBNJt8btJWpYpxfx6krAbcNXFNEE42x5oQETy5tsny5Zh",
  "key9": "47mtGmd8q9VC54jH8p4bTJvjBdg3fh3A5StETCH2wQJ46FfYehZ9EC2wumPXUUiFA53yPYxuFjjRppRAkG1DSdX3",
  "key10": "5zQhjzfc3D6uwCF8YV8SRkXAGzXUTSARfiAVp7eekYuba8n4LLBcBvkeLRZKfiecD9SDo8NByJ3FvyY5hfHYkJ6v",
  "key11": "57RgNpr5CJ1rvRdFiWmqWta85CUcfpSzBcQLCApjtBPfZWDUgHq5GBEBHKrHfAqQaahZm4HDptzWR9z7tS8Td5T9",
  "key12": "4pYMzqmjjicVi1K6udSFL89vXk5R6xdxrmA9C36RHUimgGXtUmfcP2aHVE5cM3YFeqXawiYhM2NY4FuSJsZne2SW",
  "key13": "3LpRwA6DBKpzQTJMN6Arq1vzS77NScoGhjWvy5pKNrLzXMVHFb39TDipWtnftq92kSvMomS98j1Cow8pvbdptUta",
  "key14": "5aCwT7JBAjbCEdEYx11UxEYtyuY1ub4Ra2ktcwrnJUD6K8uvTqyF3NDhDxDLKtRnB4zXwbZHPeVRNgWs3QMW4bn9",
  "key15": "3H88aiRVMmtzjZtwJ9rvW5UqK2Bv5NELtXqcqb1QDsxqKu3YTEUcpQLvMTiMLudVVCBEQ2TTi7QdUSm5b1mNP7Tn",
  "key16": "5kYhkFVPKUagVsEpbBJ81gsCFZrHnq7vc7jU9t4Dx6WQMNMYMvBWX8yssTfMTtqAbgPcBbydXeFhR2RMwStsme1r",
  "key17": "3T9wc7oqKkHCxisq96hUStwmw2ZPkHhxt2sM5reLbdgKwuge5fjtr6RiWYiUmS6k2JrscExY4muBgz94MwSVxEhK",
  "key18": "5n75X5bBY9884ZwkPFZ9TMyPLMT6xQDT7SHnDgioKjNHo2DWnYoFjopA7XkgRunJsPa3f8B2Yt9wtr9LxZHMmbX9",
  "key19": "2oeQEevZWBi8cBhSptXAUdUBf9jM7bEiTbxjpTiFrd8vXtBttNruV2iCdQH2GntDxSXMMR6GsNX5ttePim2yVX1P",
  "key20": "65hnVtuSh1oUVkpXqeecKDV86ioUuc4sZSg6UVcSvgt6K9r7RF4ui8A4h7WecJYqEs2nqqxH353dGViCtYUQq4Tg",
  "key21": "2hY3t12XjY3bDsg2acbGNWSVc2cHU7z66ytGWTYRCJDHeYX2e1UVhiJxx82RUxZeJQeLNr5TaYdQjaPPqBf5TEB1",
  "key22": "5ZpMUxhWZwhtkSavaTxqBQZEFrKdHNKD4DQcdeN7bVThY8mmDEtPeQJ246Qbs4LxGhVYwqXqA2QX4gET4St4XP5P",
  "key23": "616EcRgGnYVHej8cC6AeN8NmPDajCQE8BNy7zx7EL8wNZEgfvDKkX6jBE5AEBpxZTrSGXu3W5DRjguS92pkr7tJc",
  "key24": "kh8K5A7HRqBadrLE1dvWrMKt9q4KjDaBA1BV2QGuoN4tDFzBTRns2AdgzDki7RLzdQNx2dBF49BxDpnN3WKJPnD",
  "key25": "26TE5iLkug8vBkBrM9Jm6mAwmr9tNbE5ovKmKHEkW4esdnssrkhG9c2uVcQPKNfnuXZPEaBuHu7eQp18op7xLaDK",
  "key26": "aymzifzM7x3KsK1WxnnHhnRoZkGRVftK4agmSBELEfiKYrA8wQrrAMZnYc2fo7ceekF8VpymTQKtwz9ewbz11yh",
  "key27": "4Gbn9W1vvT7dzHKg1qTcmzPoHxiqY44rsvkycNjV1eRbyupKJtWFvV9F1vw9rWCqyKdBahQeUQrgBidhw35vzsWK",
  "key28": "5YMsCvLjcV4s5uTsKBfKjTofcvLcmmT2XGPiVeaArSJPmsEBqagfYe7HAzVPVCmkQpgzHdxyYVTpby97R5xReB9Z",
  "key29": "2sPnTyxhkiYxaZT5EQuRBNRjG54Xit9nu6QwMzSqqRgNBJAJu2bsvWckQr71L4w3vQZ6CCTZHvX4n4zAfkZjnFjJ",
  "key30": "5LYMqX1nrCW7e3yAxRBNW2qFv6QCEzYG81M3f25p4q7aeAfPYcYx24akSwKPqatfUXJgp2vtXhLLBGt3oeKNQfuM",
  "key31": "2gTu15Akk5u3CVtgnfnWXWkE6pq17V1A2HPEmctwKaPsMTswc16mScb4kwdpRSdRdoLhRJUwuM1Kh4ZGMVj3dB5g",
  "key32": "4hpcJ9N3QMqLUk4iLsLd8rKMSKd78fQq48Upp79oC1bPxheymBAbjxJQCwbAakCspMKfBtpgZ4CcUUSZ3TYRgm3j",
  "key33": "hPrM2mRxPhPSpT7WMgTW6s8gkjEPE7nkiBvRD4eXAQ958rWigsHFzTigZe4Z3HeRc4eKUKANLz7kxFXcEL2uEt5",
  "key34": "vTzQ6XB4R57dcGD7uzCX6DVcHM5sH1MdvjGEKcuFyivKsxA2A89pVRWcrHM7K1jPDqGX1bKB6Hg6WhAWTqZAo1y",
  "key35": "4wsK34mCVVw9ng68T8EQrs9vTkeuxuHbw132AhuLR1PA6yYktQkQqmUuGvya4vsfQ9C47pt8zH9SruQ21rf6319u",
  "key36": "5Ea4fEszbaNgTvaqw6VpErTgsVhQK7za9icyjEhrDYKmHGv9SYrHeT468fxEXE6t8ZuVJ2XcMouE2EuJmpTspy1Q",
  "key37": "5Su8mH1vQqKb1Yo5StY7Da3pFx4AmwgngTaS9kY9zEJWcjPbsLpB9HeWNxam5JkHFtUXVzeWpLfAPKmx9aq1YNXd",
  "key38": "NzNDEHKwx4rsFyzmEGJVkR4NiaVktpyrAzSeMJmWxvhhNVAEawWciBoqY6iHHBem2qUSuQ8PBhThRu9ESmHjFMu",
  "key39": "5BaTKSHXP4Jf942dVg77kQuxmj18eEtEhgqKc96TPMTQVVary4WDbLQvoUwDgDLb3MshwEjvhkW7E97EbqaiVjBV",
  "key40": "5KrZ6a7VKJkeTw28KDn79YpTvWQH7DFZEQzmA4NUNZKAji9xDmvKLJ6Dau89eJ7R32GW9FphfFZiuJF5YQb9YfbX",
  "key41": "5mTrkQWJkPmSvbimoMVKRtFtWmyi7emAWzHgBVrBZdCbQhtUgWWWvyZmmXSbYwYsmgUruW3Lb6pouXR2z9JTz4Mr",
  "key42": "2CLn9mbXxDLjoW2BZRYRoJeepi8hU6EwfMxBZis8kv2wCNk3yfczWMgsJWt4DTKDT6SKTxkYnnwoqo3sVx4V8pUe",
  "key43": "4GLtbx1no7qMNr9V8mGkPd2y5C8394kExpHVX8i4Kscu6JtPW6xKFsX6EJ8s8vTtDkfe3oGbSVEhRErzd44PvVHW",
  "key44": "5kbSuRFXfUuLArcY6ZBUsUPEyCkQwZQto5wv2YUj4GxDtJUH5g5YGdv4q9zbDXd8KAfC8LhPxNwBRXqGizVsg6Dy",
  "key45": "5Warv7skXckD4eor4e2oBd2KKS6DpTWfcp3zQw5nURMpGqPd4QmAHv87wgiv4zt6cuqCmUN9Mm3gz4QbHyUGoZpx",
  "key46": "2SDW6hQqWdo6uAStxz7d8ZYafruRgtwLNYVJu7iesyt9d5nxBvKRC5CvnD5WeUsjbEzQckFkd2kHnrgkFw9b2Tsw",
  "key47": "42anrQcZrpSAMVTxCdQDzn8WeixpTUq9jKdv8xcxDMmt9NwKrrRAccoyjtg2YYhMs5QAjKKfhG2jHnW6s1irRdUF"
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
