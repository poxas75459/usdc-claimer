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
    "5t1kyUzXcoAqmsYFaDSwqhWWZwjgCpzC9ZKYAuAn9wJ7Fjn3KuoYd7HGgiHrDhqsidLRmoeHsAMm1ktgar5ir32A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GM91aZG369zSGvcnBhpSvxkhXVLLdXEpw5PJp8boD85zWHDKPZZ54uoS5uofbHwxfW6X1km9D1aHXY7EDoZwJzA",
  "key1": "4NSeuYcbXLnipQkiLbRuBMh7pTnUpvUPucfUEHzYM43psHkErQoDwt7ptS2hSHF3bpPKtHQn7ggjLj7LQYJuvN9F",
  "key2": "5KjpQhGLXsjvvJUGRpgQ2SwAp32pRUhquvCpiurMo4pN5rjdxQjVbgU6wHtoioCgZU78RUNUjCtBVQa2DSTLU1Vp",
  "key3": "48nSbLsXsEW5VSRXKEuceNMcybsVthq6Ah1FFLMLcFSUDoLWgefcBQrVgJSNpyPm2kTkT9REAiqKCXcGMF8Nc2vD",
  "key4": "5m4gqMpN1RVKee6qbmiSSW67yzLpuJ1QJ3mnUDfbhw63PecZUSxRTawAjQ5Dhyki9hJi4Qj2SoXf1f3uyVpEAGaf",
  "key5": "Vr1KyCpzttgDcjupifSqZQ7uzXi1WdjkzDJMZrXfZUFQ1YADJkcwSoEifpWTzudevh8MYdPCckPX5hw9LmMNLqK",
  "key6": "4NNxJrvo24iPn1QmhaLB93R1UD6PxiXctZNSvNyxA3ouBAgvm54YKDwfftyFH1keDjmMeDWKPyfjAunqJKpjq8E7",
  "key7": "2AHiKmTBHrhXDvzTdP4AgkTWaW9KwFPhtf4V4teX6dxLcWNGrGJni815Eo4i2NRtu2eNRSACrWJDs1VL29ZBJZL7",
  "key8": "3VG4cKs6U2HdmX5B4QHRdAfWtNQkZwVzK23RXoC9j3duXau6WmNXsfcZLh6PJbT4hE3885S1j5g8KgxMQFjNn6kx",
  "key9": "5Qu1iV1bxg5H87aD4K69qArR6RZTmrtmhNjh6rSmkzufGfNam5yxCaAMXgqNNvitRcDgbVNTw6MFGnoyJXRA8nez",
  "key10": "3tqwr2nTVMyumh4EsiHmBDETjoBKjUpULmF8p63HvpMKZwgY75CUg9wKooTaaR5qrmy5RJFKDpFNY5aoERwhZKz8",
  "key11": "42qX7SLvprxN2cecsXNj38t2G9UNeJURte7wwFzz7xLHX5hB5kbSsisGKvze6YogskV2qExSmAfkS2gZt2tSkqJx",
  "key12": "9Fu8Hti9FytC3LAFy6XpBCvr94wBhD5fjBzH9WYqw9mZKHHqkLPy3TckjgUdnUTudNNtNkk6wdnhuujtF7VfmgL",
  "key13": "2NZXCH1qLXhqseFeS2ow5AJDEMj3XsfHQpr1woYRzsmjrS7zABMf9QNxaX2pwCWS2XWTs8VP82mjQQeMRDQaYq4Y",
  "key14": "4NnDcQNihVYNdPG8xnCG1NtMrT36Hbvf7mMC713iD2YEGj5ogt2eNYhkD6qyKiELERcXiE5HQxgfrekbuxqAnkam",
  "key15": "2YiBNGp1j9V7PKPqEvbuhsjKSddyKS52ugbvwcD9cAfKnc6KfAWAhZwxW2Sye6eZuaSoShG2ZpANV2xa9iTyKgea",
  "key16": "5MKuf83GC7j9v3YpLzHvLQCqfWZ9dSFwyWMDHmcg37iTYxeom28pA5ZzShS65nauiuVsEHJKfrPM7j6VQiwm9cfF",
  "key17": "3XjRdSLbFW5waf5a2LGnBVCEWa8vRRkQULiJ1VaPbMJwdBTPBprLFfj3Su6SiWZsmmoSyCqJbT4BpdrgFswLfPDP",
  "key18": "4jpAaaDZjRsbQ1CQZuAxKzEmkPXeXnLQMJx3eXxJkEKo6KaJAvBWhqRmv1JmSDKYk14cxCDeJPszgZPv9Nsayax",
  "key19": "4yBLUZ26b7ea1tEU95ZpihUV4GFsLVtrd3co1u6pzgAGm8oLFQz5JAeWU3hUPFYskz8BfHsekQKznNdXxquLGy3o",
  "key20": "4sbCeBBvzYkjrMiXcPXskCmNhpMuojfyaRdEf9p98uZQmDi37nXtB9Vpm3Dmx3nvJTSZKTyusEDSSUCyoEzqGKMx",
  "key21": "5mYt48sDn2gv9R3JA9XLTic3a4K19z3aDrWGXXkg2aUhDG4bTphx7h3yEPQdqBdh6zWpuiPVcHYJAxVR3RbJR8Ss",
  "key22": "76aRvoXmfkKbzKE9oYqScGrcv1pfoSQpusPCEis668pit4fN5KhBKz66ZQbky5mDVBsRJ2ah5tpfCTAeoAwDHgD",
  "key23": "3RicxSKhVJWKqgcv7KvBuTuG1uASaYYxZt6akFLFs8vktx1BtPsvHGhsRfykShVQV9hETGsnpsGYDu5x6YagXmug",
  "key24": "4b8UgQmuMTtv2jZHawsBy6mnJJkymoV1ryyFEcjFPPZy1Vhq2gB8uAqRkXsNxXvaYHQbySuMvvCJccQ2VEoeUSB8",
  "key25": "4zErM6tMx561Cbf6jq5ZFeyK1n7Tgqgw66WK5aRyDsqZosadRMRRGa9wdFLXceY3BLaRy9VUcUqGCSSAcjt18MkF",
  "key26": "26DASnWWRJepG5sPFxTHA8fzxdqeXoPxniM7n9scLHEjqj5DbMNLYLVj441aiWbh5hA4cd6KokDBBmpa7XVbfsgV"
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
