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
    "2Kqqem6a66GX7EtyPLxui32RiBC2P1SHivdmCx2ZXrEwCmUcvc1KwnDT1NayFkySmYHF4yPn1WZepBeRK9tET8vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8Mu68MSQwwXXAHyYbnLhwem2mJNY5um7C4aVyeib7qcADxBW3x1APCA5f7VRs8jcsNXTMmZKhgZ82yDJj6jo4a",
  "key1": "4Lxf1CFEwCsrEvxmn3331a5NiHvsxcYzfkmgcdLsBT7G9Y7479ia4Za3DDJdojxuru3UWgVfTMcDJjaTFJQagTJs",
  "key2": "3xeV6jAYGMi2oXAqxTe5E7BCjrjNW2o5EKSyaTLM9YDCfx4sfkQ8XTa3iHMwDe9KdZXS2GZzhpg1KK8sBbZVyAvr",
  "key3": "4wD7Vkq7jwdrquZ8K7HPoMX87PJRomGUebRucMCy8rBgEMYFXQimMX4t6sNn274SjZDXNBEuD8ipjF5SqH8RQd5f",
  "key4": "31fZSeX2v9FznxsDRZazy7MwHeM4nzRkV3YMRN3WmxmSgE12CZWVgJqqvTSjZoR1vEqmNkqYfEgnfh8EmJcnzPtp",
  "key5": "4TWmemmLJaectB2NHB1jyyTPGwP9TwT8DzBuHpA8DRSLHMxHqHUDY35gL8j7WYiuEkDpYdGpsUvJBhVxUGDYU5jg",
  "key6": "2vy1My2YrScjBCcJm1zvAcVdQsHHuwaGUQszcxC6ThhuXVVE54FcBqshd75SLtG9K293qZy4HXCBWywy8TCrbK8C",
  "key7": "3s91jrzBU6VFFWdjE9Ki3Q9Gf24kbe5ab3LPgaHAx5ZtHjQTNFtZ35dTvziAgxqrYdviaR7Qr25GWCr4rA7EQsqE",
  "key8": "47MRtBn26mmSk8HrizZcxWRnbd6uL4iAm4s3qenBmgeP2PeKFggj7NCfZNS6hPE393Kj9RFvbVuDT167ikzux7VV",
  "key9": "5qtVgKhmPBSdJWHDzPaq9Bky6dLUfgYeGp9BGsXRVBJTFNNNVGwS1zqhrSjDknYRYHAsjk4EzfhoqELD25EjAdcz",
  "key10": "5K5Psyuyeno378pqjTab1PdTp6VSkq8acqPYNwRsQu5Sx1GB4ohBcWrZTSCaBjDrbRWLm3n9BjJFANaddNTaAFWD",
  "key11": "k49U2RAwN4QJpK446cymixrMxvRo5BAzZwBisqM89HiG2bLr98HWuxHhnfPCh3tMrTYLVb4JsBhXjrUiNeuumpF",
  "key12": "2tQDuYvMVacmZK8eCBUy2VURNYezRM5Gnjv7JxtFCRRcXkrP1UK5yUaV5UZyuFaFALxLt3eRWTFTbNCfhnhbkkaB",
  "key13": "54sn8S4k1agRy7bKHS5kkcYxWkuiRWL1TyDorK7e7KX27xxLwRMN9BksxJXzN6cfKKmjUj2jjjg61QU9KFASAf4x",
  "key14": "5at65A5GffzW6TLPTVJJWmqXd5yoqxNgPR2C61yzMLyBcxVyxqzPpjsuGq9SX4gc87nGuLUKV2itWkJfZHM35uKc",
  "key15": "2XpRxjx94JbKq2wo1wmFq9BVvHZsk2eHUTTrQrsMyxr9UM7aC1nfo8XrmG5VPoXsLzKnTnaqMqYGpTJdcuav3HLa",
  "key16": "AvpENfrJjYfWTm8AauVF5fVysRzbWJrV7veR1STmnrNByDNquw2aJwaWiXFNtRE7vtES7wzDu2f5m6eNpx5ZogK",
  "key17": "3FYTaYncnt3Z9C9rpkMfJ1a7kWefXdncWCepDbR14GTwVnLrLCVnwfx7zkDGP5h46wzjpWCcHPJpwLTJy7tpttSC",
  "key18": "4g8jSMnvV7hLSs5Y7wwP2uVTkkj9hPL5DygtL79UUGkjjdYPYgf8n9UuX7uQ39rdTucQ8EGLXtzTXAoww2pg8VpJ",
  "key19": "5RaaA5APNHixUyLaWyumbvBc594EswZDT2p2ew4NsVVDD9bjaTSs7xqoWK3v5nffrZVHnWPq5SY1z5qCPgNbp88y",
  "key20": "5y4Ee6z1Q52MC7jYcYtNptfrrnYDPj24EHofb818bf2zzBGqVnjjwAV5XkH8c7uiubf4LmE6fdrSCQkYVEUrYKab",
  "key21": "3zmJ9x2rGLHLRdy2TEHtPb1fPzJkjKbNAuHdoWmNgMnFt59SNnqq7ykWPZZ1q2LpTGJMy3qzpopKnJukcMzkmZHU",
  "key22": "2gDrD5sYnX1JSK97fHoFcrAYDBXr1QNq98mFcB1n9uYrKRsfvdgGaSYZZLzWNjraYnbskSZUvxZL5kdukAryKadB",
  "key23": "5nRc9NYEYoi8cUJuTTrFiCEMRZfcg8npiDSQBKU2Lk3YDw1PwCc2KfkCBvCzh4ymbw5SHBgAdPAGDav13jC3QaV1",
  "key24": "583tH1Pj3bg7jZG8cJn1ZQ87fyxmcyuEvs848KkkasaeNx1vfFR24urnQuCHbw1UYzBZdX3bg2Kj7QzY7LRJ5Mab",
  "key25": "mNLbCkH6XuurBsQDLf2ZCdp4pgnzTMCxVQv9KQDWdMPB19HqLCfA52pBAJd9dTSxdb6TdZWpKnPhTKmeg8R2SRE",
  "key26": "4cMbcUCCpXiwkJiy3oV1vbNAz6WFGWFi1UnUesYeUjVb1YUocwR75JYuuXs4GMKZ3ZnvXDPAshmUU5YEiVDuoEEM"
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
