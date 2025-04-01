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
    "34jqWYMgYyM9ZmGEFXZFXDq96S1vnCDnYjtDvs7ivEwfS9gY4A2xdpRJdrWtRsxPxUphao6dxK6vpuKBsskvVygo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Svyb1RQpTStaUtB1iYHgPHaqHdYN4c1okSASeisHSpVzzFk6cAqVaXXrkT7vpJHb2WLd6PLhuTunybaUVCPgeCW",
  "key1": "2QqYK1K3Kf247bTYKgf5A3r1WhfsZDyFQpznN4zJ3RGk8Gn2pGhdzD6vf2g8G7pa6uwZtrZcvBTjGmfshGGZVhZu",
  "key2": "2Y1EastBRG6yAZky3dv1sqmbHFhQu5WKcCsuSczzucSCaQFcxSp7bVevxQ2FNQTekpbXLYBLRYa4cK83xzved6g",
  "key3": "4y2sRBhBNX9TFSBLUdYBjMUy1B1ECo7j1kZcjNjAconbD46DAEjcS8xCtVZu3sKgK6ETvPKCGSMfSYzVbwQjfqYp",
  "key4": "63v7H5xsyUgj8TmYdjjZzss7B4aVrHPD2XtgvYwFmGqX7UBS9y5KXbC7zHnFkDWDzXTJZTavsUw83j6g8uKSjnuE",
  "key5": "44BCgQTYAR8Pq2Gu5J725ksezr9VXYL8vGgH2asXiwp6s8jex7PziwNAUqnSy2Xk3m318GCLzTD67vz1deAQVSeD",
  "key6": "2etfvyshwvoePyeVaX8agrbqjSu8XNwrRAAy7ohaz7iCz64cKvdqS9pannth1XhaRbLc3S5KKGXaGhZeKZAFKr2r",
  "key7": "4fuW4ZSZPfiEZRCdUwkD38u2sPCBgw9NcLVz5UjY5nU8UKgWnM5UHvStuPccNqTD1SgQ7vWJLpfeEz2ftCZ6C6Gv",
  "key8": "4ApoM115rJV47JA6bbsbGp8WeiWVmtwy6xvWRnbzdKyPrz38S5ytGnW3td3kuCdSPqk6XN7URS6umcxMqqh7FM7S",
  "key9": "259bGFf9sM1Xj1vtVMXwy94i62VUdJvLXPHXaTYCYnzypLcrTkaUts33x2YRmxSpnYB5Gtqs5TJuQNrPWEeE36oR",
  "key10": "64rC1WLzRwBgF1XFgaYWy84EJAFCA1G9VFF2PKkdBxGWQ8Rd7ChcoUNCK7Vx9Hmh1jjvFNS6vT8ofbX5wo96feb8",
  "key11": "4ZEh9iw44fxgi2AajwPmCWRBLPL9JMtxTRcBXSjZBZ1KJNgYe1EBUJJu5w6qarDAiY3PTm81qbUx7oTpnu7adtC",
  "key12": "3ZagDtGFjddeoFdTGbs49wfigmDUn8HVige1munsdtzFZ5SV3B9BE3PYBoKobAL6ebkePpoeyfA3Co8UqPQCLur4",
  "key13": "5JoR8fGCVrDb62Nbn2hMfun5sCbX15ioNr5MkJZyhRkBwUi1RLusevz5tqQ18aKu1hSKGuWj2YRvHX2KqoNYyFsX",
  "key14": "3LT41uPyv5tuVQNU4vtpDYJX3bVRcfS6iquidv8EWyxwGxqCT4f8hZByXanNiT33EgP2sbtPZrNq1ZEvYfMoZk2R",
  "key15": "5P3GKAM4JtEHYqz5aunMm5KTFDt23dnfM9mRMXFTcb2AmM6WEUq9hg9EKdf4umx4WDQYFtULqtYQw91DrBc7Rzuy",
  "key16": "3dCN7ow7rQD3gTEHuaAv9vQXzKR6ynC6zpUetNg1ABc9EZLBeRFvk6BLt76MfEetvybsCqUk16omLosDfXWHEVag",
  "key17": "2z9ZRtqdVwcNQkmQS3L6yyn9Z58cceNgK33Y37z4D3deGpLS33nxfm8wmXpG3XgazZtbQB1Z7kdFLVZugy3fguaN",
  "key18": "5c9qwNzacYFR4Nck8kodi5x5asa5TVUX5VDsijCPwUxVPQfDickv8FNhBmKXxHpszBUSyiaTsPXPAdi6L2xy5j1m",
  "key19": "3YKxN7sjrdpPo7ciXKRRSNAJ4mdUnZRfPu8b1oze5aspNUE93fNsuUMb84QQCA9u8QU4syJTr4HSpUTnFDE8PPrj",
  "key20": "2cZhNVu6LYRQ2Tgg9FBkrwT9Brbg7C2CtyhYqhFyT51LMavTiQxumwqdRgBgmi2cfxUddtLHC4UvAPWW7VGarzv4",
  "key21": "5aV89gPze1Dvw4kVAsDtjYNgt56YCR7Zpj1AusmZffxevrDgcTAgBVBfus4CA1Fp8wyQCxpm1yUZeu56cwYhsf2g",
  "key22": "56k6XfKA3UcRntLH4tTyXXqucJMVgaaakBqZx8PwU9TMhuc8KoP3T5MehvmQ5SY3iHuPJLqtqrUJUcM8fdLQ58nn",
  "key23": "4F67ufqRZUFZLeuyxGaMwvswGmK2SQpg1vR6c7iT1KyqZRtBvJKW2AfbruE9kvsgBu86GRi7rGwAWo6DaEfpWTWD",
  "key24": "GwJR4y1YNJeui5hgry5LJ8aYNjtmLtQpB9bxPNmK4DYjifATi3oLSPkYWnuvtiACVsXTMLnZxumtb2x1mjpmFt2"
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
