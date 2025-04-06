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
    "wKarq9VnKvN1q4qEyN4nH5JCU7V2EWQnqJNP56PCPPppJThQR62o7PxXxNLB4LyDxZtBoFzdYPF76DvWGQc6Wgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kLepwaA9aCbf7cgr255pLsinHKHXSaY8gw9vjF2Jqm5URE1sgPTdEpSbBPs6yUCTJv3KLREC5ffqJovFDFsX2LM",
  "key1": "5YqTsduEaCsY4TXMjSk4Nb1LRSMddynBcxkMvpjPX6fUYHqAXhHSvjsXXXrd7nXPUGDxGHC1pW6nGkZtFrK6b7XX",
  "key2": "5mk78WmG544ZkZemodD3ZqJn3LXdz9fAXBaNBmFrYM8b6EEbWoXjSKkG4DW9UWimpYY1p2CrdbbuEsoktpRkNeUz",
  "key3": "2yvEHhKLj4iv5Lor5QsLmAVpvfJACHmty3L3ujK4p4rj6fGMRdUnauqfLkxHY4BVdkyNCpsWrnvqJ9KKokbpR6eQ",
  "key4": "3A3yZtvLNccdKQzFWVTuyDNjYzE11iNbFi1gj2CBQ8DGUJkmSyF8eoyJQp8yx3EfFdPTFUPRs8c8qePPmLDGXMfG",
  "key5": "5N1YYaUn4hSd6oUfxxL4k7b2uMHPGYAtUyJngXyyG57Hz2M64nMiZTz6xitRs3wWgu3WuyPwU65stb4vq8HeMSLv",
  "key6": "33Cw4AcAPZBwjiP4DjckvCVukTackcnkK7nmBMc9hNAwGWtwLjaGPTA9WcmNjRKodUJrd21bBwLeAUoxoStsSTu4",
  "key7": "X2Zvr27BoJfEnGej2o6eAxft2mBJzhzZonM5bYLAou5pEifCPRuFF7PMinRC8ErQdg8ujLsqWLXXE3yAq5CREHj",
  "key8": "4GLPqEgP1SQ8a8m2cvL521d8zesUZjmLU9hPmcpg8r3GvPET5if7DHyJDDTCqMYDrf9gBfGxywi2w6dCbBix4WJG",
  "key9": "27Koz5HG2VTncfiksoAmZ2aW3UwddAt8Jt7wmgJZHhxCGR4in3w3ErTHeE9SkfzURTFvSCpzpnnoRn3nEzZoKNdV",
  "key10": "EAgxpnJbETR36daKwfLRhMBNC2CBFXt5Gwrnt8EfAxvAdMRxXMx1iLCTir7vuCDdjDbyBQtgKvi4DV5qHthUvC9",
  "key11": "4Q1v9f73G5v5wnpPkM6iKWTt3KP8psWoLcj9AKMrmoix7zdcNcW9tzef6MaKEHJmEXzT42CdJraJoRNxxLhbTHcF",
  "key12": "WXZZLgtNnSqyAmP6uyywg65XBNPVXmYPNbx8MLM2CB1Zo3FtCnmVez38Bm6y5MnExcHRRAmEN2zGENYVHQ3Ub1J",
  "key13": "4pVUxd3oK67RGtebfJW8axthE8ZwTeFASQZ8u5ifmw4iVBVDKLSbk1iiiwaVrF6JPiGGsipKu4pAPzoPHcEdvbL9",
  "key14": "2hiTvaxTBLj5gQ3PLcwc8gMSFzdtXcF5qanUxkqwsxQHHmooGs52neFvkJ3JCfZp4d5pbrm5tiQ1nV8BmQpYmDUF",
  "key15": "5Fu4TNmSLFpD6LfJr7mbKu5tNMzDuMU6BT6zMbj3JSABkAdCnEJMRUrRDjsZdTFPWVCG9sjnH47kdfBL6mXuhPeT",
  "key16": "2UfXYXH8BNss9C8mNu5ZBVDbLcxvxwgiFJ4UMPAJdNnSKxD2z1y6jqSbQvwS4Qq3YLJZht2VcpLVfsXEVSc5X3Gn",
  "key17": "2FjkZqG2Epb25AVU2rNp2wWRKyTM5cvBfn8zWFbbVgQnULBguwDUQ85wEtAm1VR9mk3n3ymsAhbLEhw5njXpc39s",
  "key18": "Y8pJ624NY7rpYTJNeG3B2nxhMMhUchkRuTqQze3CdQbBRcbSHtY2BYVgL9MhU6YF2zMAbpZmCFxVAhHnqQSEDCu",
  "key19": "3oKkRNhfqCNiJkm2t3qemzcHX6iqMcYpPwHYfcRcJ8mggKizsAHqJCKNnJpBP747ovbJHuZgR2gwZByYGyYNdFk5",
  "key20": "5PhGZuP1BSied31P1LgZPS4RfFCFvr3wid9pLscp7dW5RjvkNxbdc3yUDNpei4XuM2xP8X19HW5zeZkSb7wmuDZ6",
  "key21": "2o7m6QkZeTAGV5xDHB2ZKAVDgKcxCM8Kcf4pYAgDdjwRNFaw2jaFMgMvTjFhfZQXkug38Y5nzwPxsKzeEoEMtSmZ",
  "key22": "44Vnmy1LKBsJtT7eE4hw7smgnwDWERVGtAFF4r4SgxTVwnkwTyNsG6DoqumamdB2Sz9rUekU2QvzKVpLbFMBnVrZ",
  "key23": "5S8WMw47A4Hi5Gc6LsRv573r2WGoaGRSKeNf7gkVXb3QjCRZLbGE4yjJg3UJVq2hH8mTdVYkRyYUCwbN1ZpSiDRu",
  "key24": "5QYNjSHyiVTQ5FKwVbVBHHT14xAUYKHYgfLVVy84ffqemd5EHNkLzfc6ZzV98eLVd8HZDV79NcMAZWiNzL3yMm1z",
  "key25": "5vHGwmegAsbPLzJDnDegjQSVf6yDwdQQWi9ncGzFzwcAHGm2GRe7ZTbeJsYFdjLNxbU9n97GSS4yq29Yxtg9GKfY",
  "key26": "2K4sVed7aeduYaYfdb4iuqh9dxy6C4CZEUqpRgTN227gUPdDDLHA3or1EHVHXx1e8kV8kktus3cYuNw4rD3QSZCj",
  "key27": "2J41w1hzzjyZVysxWyZyJy3wgiaKNaRGtN2E9cai586t7Nsdidjso1bLMiPoqpxEUXZSBTpRXiyQMpCQJPkp5K3E",
  "key28": "UmAUGry7yRbfGsuyWifJ4kBMSyzhrZoDgGg6d9uLgu6oVfjhLt2nUV2k5DKwD9W7BfyYZxavDWtEoaiW6WzcuRm",
  "key29": "2HkNBTfxPDa1jSCL4LkcDNdH9vf5hXjnBXtsrCHbSizyznRWrD7S97ryTN4VH3hk5fwq1VRtmv24QxLsMCQnC946"
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
