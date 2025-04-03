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
    "125mHywGbohSEnL9tGe9h45UMiLskfv3g28tzgVPQnNptYYT1dFpiFUHahjFhoKSTdX9PZfCkB2HadkUTphBfjBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViUrubWWVUk3KPLz3bhU7EkutmpwUQ9YRoygSA9BogBivgR3KQMqbgmerhyJNDHEjLpZKiq9ZDWQy7FQSKiPy38",
  "key1": "4fkY5fChS2AsPYpMquHvRFHzCfNEiFLgerLBqx5oVAdz7uJLXnBJDFK3BJ1oz2vLEA3KUJVfAMWHPWL5M5vuSizC",
  "key2": "2VzUJjyExpQSBcti8U4qhVHx1eU2cigKkCVSaYxw97DpdLEAqt55LxckFV39YyFZzmjzcNoLi4vAjKZQoj3oUBpV",
  "key3": "3TymkNarAoxTGXiadQi36CLRZhsF8ug1diHZiRNfzEhxwVHx3Ue2rCMszVJDWU97BRaHhEyuvpmFSxohMVnZM4T5",
  "key4": "2U8c3ZyemQJYZJKHWzbxtqEhLyhZ173DZAaA9dEzUmJebPaj4jJhsKPwC34xDUaVS1Kw6NbNN3QT5S6c92vYbt29",
  "key5": "4kjR32zTdT5ybhijjngjbwapVLp2zV7PJCxabXp9Vpzz98jgEy7YU9aHoUXPJPCGxL2AFSsJ4T1Jf5fPqd2kgyYo",
  "key6": "2XWjce7UTUoozN978uMbD8WtUQTTB6akyPVpDLAAGFKHGW6xDhbUctNHNLRUdjXBL9rVJYFANgM5Z7mXJJSXPtpP",
  "key7": "3d9FqLi5f4HHmztVCFGQ9fwhzhWZaKVKBPXTGpkA6AjoJfqViN2a3VipXrLdRDLHrB1G8hapBPKRCwSHBmDVr3ag",
  "key8": "2aPkEDWhrfaFAV4UVCiLAmcXB5tpcX7de5TxSt6Gy1S3knxtSGu6ZomSxgFAkbKTaJ4Ch8B34m7rCxj3zfc6Yx2w",
  "key9": "4CtfgXMwzXKPBPudeFVk8oNC8hfo5Te96pBCffzUhsDMGUb8Nt4u3VHsjHiR58mPNy619e9hTowCChpbdnTrgT8T",
  "key10": "edAxnYSUw8jwFPxbeJgAG7ro2MbMioR6T3Lc7ZW571UihW4Ys9iaiFr2h93JQENPGfwPqRZUdxp916XnD3pHMdM",
  "key11": "3FmPwxcog3qoYjfrP5jUCSzMbdrz6RQ27MhKHBrKMb4kGTXD2GWB6kjS8RpZLK4VnBumFSVkiJfJYUQfQEDAHaoN",
  "key12": "2rzWAiXmYhfFpaiHgdjKTyeHnJ7nyCWM2z3CcwKFZfZFoL1tHtM8DBsNTTpH562G7FiEsuXBGZtUsoxiwTLvkZSc",
  "key13": "4vqb7GMY2tQzfAciUnk4eN76ZjoR6UsQP6kpFsXRZ98HXSwZYX6UZjSxNWhw53ELtEuiwDWQx1gDkDLj9CNmCKks",
  "key14": "SSX6j3GL5wC9ZxkUmQVVzruvSS4MSfaZCBXwtSatM6ozKf6xDQMDKSS67LyMcTnMGzJsQnTRiBMr5QnDWmuu9vu",
  "key15": "rsyaycJKiVBzm3BiUuNkmt5Z3pVuW7HA18WeS1dvK3YZ48vuPJVNSL9wpRpC24HNfLtm63SAjPTuKnM5JLvwKjR",
  "key16": "x6aV14sfUqXouEWwNvXVqQQojawvjTNk2j6VTiiaShEzTjLy1NUxCqXvCJirFFJ9hdwZESNU3wRD6FibUqSKe9B",
  "key17": "4gponHzKcrRuzXye18KB6mBjsi2ikr81uZRsmwHMhUja5ZKd54uKci1uv5mWTm56SgE8wnHLikoroKTcPsc5RZrk",
  "key18": "8ybenD8vJ9nSmWL3cUw47xjNPkzRMjUbtCLx8RpAJPqJ8Zhdm659EJ2onrNk8AgnFfMHx1KSPMqaATjrVLWXMGK",
  "key19": "3vwSX1Vik72Dr4KHcNQrHe4o6etiEXCV81UFy2D5JN1emU6MKF9SqgokBkcCShburCjRvf6qgnKZsGHMBMBUMTQR",
  "key20": "mG9z58Nopw2viCi6NWG5Qnc8CqqV2zcgyQ8ikTZ1Cf49KmaRCVvTn2ajvkNbqmWKmGVkdwApPyhWQD5QXuth4r9",
  "key21": "3U8mhHsopJySgcxnfnNbUoMUbeynBTz4MHnsdkLRVEqt6JjCauQVYdE4fd9z99RzZ2cjT5wCUwWWbvaAETiTZyBN",
  "key22": "32FyghL8pGsKnZf4WyKxrd3grkw9FkhNzRsau3yiy7xV2coDcT8rThby4FjnHTy2vArdH95iG8MGpgB2tKYpRK8w",
  "key23": "3wgu9S15irC2ddSFt3fmEzcFjSvAoknjh5oBnDRD8T2dcj2kmY3tU6dpQgn2uUPtgazzrHWAKk6U1YP3oAXKfJ8k",
  "key24": "2bkj84BbLdXaECy2yZiNso87o5651q8W8nUq1W7Ftr5yrHS6QzSacfv34vx5vgUxhyzVSSExNM4Zrr4ozvvGz9tm",
  "key25": "2zT33f6H4rBRqFq3hK787h9mhsJMdJiNYkzkMtuAarTrREVbdvYmvxkeReqMkRJcKvNzzbjAmCgai5aUcR3dYhji",
  "key26": "3KXctXTfrm7LdcU5hy9X3FguBJt2otQ6goMc1UirLG8SmmjuwfTg6AWCLx8F6pLnenAm527ts6yjVhwLdHWEaoek",
  "key27": "4E93zudLXupYdUmi9VqjAWTgGc6v91yjvV9Yx2D4gZKAXAaUt36ATTCuQKBiQNsPXsAEXayuCzAu1sSDczTg7gPT",
  "key28": "WMoGeRVMD1rq94BHhpDAEzpYAjjqLvJvXWiq3D1PAu7VX6SQYjwGs1xPtrVNxr4DopUj2pHh628NHWzRM9mjA3e",
  "key29": "4hj34fRRh1xjmEp65nyzcxVGTgaCKvBxGFobcWYim2N34ys8EG5AfChjmPBuw215raiA1Bheap7JXd1c8uHx6Mi9",
  "key30": "avCsrNFXqL1WxeFFaMA3MV9gKehPSyugJJ9XCo1gL6gYQQNp4XJunUWCKJveQCGpPefMcqX9TUuZ1MfY9ozMeBc",
  "key31": "zG3cFrNJemXL4xm7AGHWYycfdRYQoAuG7PDhpBBqCswpUm6DHof7NvoMJHhPnAshYYqXUVdAqVZVQNL2ngyBp5E",
  "key32": "5ovZVpQ4szq4pMPv14QxsbCUgER5ECoRec8Eit62Drute47V6ofmSqFZixeRBo5b5VaCQ7H3s8pguaZshWKLswrj",
  "key33": "3gsoqPrSQAykEYkQZYjFwpGESTtE3iWkLgc1JHsqxCDZuEPteAPs9jou21ZG1514EL5THXLLdXdepdtFtwtzE8VB"
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
