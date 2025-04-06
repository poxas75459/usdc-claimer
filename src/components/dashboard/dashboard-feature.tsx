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
    "B2HgvCAzauTh9dWKPEkxEW9XQcH6Q7ZuovzKceHksSJWhgoPnRhkyKjFJUzwVnKkB5LjybmuypnGfXaLqjavoqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lf8iu1JkFhE25wz6k9r73rEy92TpJKyjt18BphNcGjd5wHPLSYAtzaMKbDoX5aDWy4BEFvaHY9DU74SuA41ard4",
  "key1": "5tG6xPVJHqA7FT7NKKtZF3s4dPWDG6oze4mDzpJNemzLaBgGMGf9fW28saBvCK1cSKEBfhoUhermg1jrnBfaw9Mv",
  "key2": "4NcLMwaDVDW2UmW7Dor8Y1cmSZcjDLyHFHLApgmDofjzSyfx9Crz334EsSLx7CFjxgkeTkDpmTFvc8YSy2hvQoh",
  "key3": "3ijTgRtyWrV1J5zHgP6EpfCyTNhqJ8XnG1UYktcMKh5v433Suh6KiE3rpJ6dcps266UBfDqkoYeojfg1QWgmHTFp",
  "key4": "2VucCDt6bVq3xTRF6ebNbu9Q8zGTnZ5Bv1PKJqnxYKtS8T1FXKHgreWtuCnXd39s3poDYh2GyMWiPq5MaoyUgcuB",
  "key5": "2Cx7eZh6HK5YRMdXPUfDL6rcNdAfkVKMDs7JCedFFxFtNyewnWeoNqabaQ85rWHZTkEK4GN1Z8Mo1FfmXJYbUZn5",
  "key6": "DDYTGGqvxSHFKCpEcgeiWnRGNte367BV1rx4FeV5qzL5FeTYUsNp9owSWBFnxyfthQmtXcyCcrFM3rY8wLBnYNk",
  "key7": "5P4JWoqKcbHaYVnx6STKMa8zCgtRKCPyutB59gpmukzDpy4Rwk9GS9JdoGWrzuYLFWjdQTKztGJUXMp9tUfd6Cpc",
  "key8": "2beE5YRXUmU3WSf9qiEGQgXifPH2uCKbwNn4x5WVwNiTDeeWjWMphs352NkP8FEnDSskmZAkokkVamUFEPxaCWf2",
  "key9": "4HFCJwCbdgz1RyPP4H2sfSWC9K11EvqkcoijMBjizMrrkLy5xfHujnJirzbE2RD5NdAUb6niqnUeKbXRQzaDs13A",
  "key10": "3hFLNyN8Ss1gugdNMJsWfZQcNgfW5rNRt8XWCbmSX4Zy27Fo8UKKhyGihBNLuBCdLmEpLEDPNcMyfXy9ypaMMNWs",
  "key11": "2ZUSSmLrUx28kdEa5JK1oBRRLhj18t1dccNaX1EA8vmXAmFuoAuHd1HQAp7Yehp2NvowAq6EhQWYBgTTsCwX5cAA",
  "key12": "HLsC2bCJyL2bvPKfaBXeHyuUzCrpYgBpcafgVd5vgwGyA6wHreBqBJDj6vNEf8BgHwx2HSU8AtkiRDaVozw6M6H",
  "key13": "62rhoUeyXGRfQ436GD2r6NNN95j79BTtTL7yhwezCHoHd5sch5zZmzUnzRiy3SmBm9mrKmz45t4tw4Ud1oDnrZwu",
  "key14": "2UVJjitVg3QsNN7nxo88vBVChH3vVPwsQFHVqQY2jH5t3ToBLozexa5JSrjWV5imBoLJC6ZL29nPK5AL7AjvS84z",
  "key15": "45LH38mgokQ9wkp2EiXzukc6DmnwizqdLDfoxqMdPB372H2BfnkkWHEAxp24B5ujJugpmeSkDGXeV6DvP3vninkQ",
  "key16": "4vNnE22gvXQyumTXmmiRinNDJDXkWQBJtE4DsGAyvByRrnYuc5Jp1sG9tGDwyo4N7ZNjSqmgEXMe13bt7zJKZYJU",
  "key17": "hWgyLZN9pCQFij5sebd8x48S3RisAwDu8apkqrrfvVFCxuChSzfXrEQo3ZckkEwcCG8qytWjL94E5N6TcAsM7j5",
  "key18": "3NfHBzApfPf8voetfTpEXhiK7NnMXCAGYeJ7cBVDdKdVAuAJPr2uQmnLDUgeK7iRyD5ssQ37tgLtLywdkebrqyE7",
  "key19": "5jFmxRgKhRFe1NzKhbQqmaX49f5LU8NiwkjT8HccbfUKnS9x25erHWYEJ6E178m14z2hS3MbvZDdnAq9CEKmzLLM",
  "key20": "37vxFcPuoQjh2xrtNtLBe7KS6tHE9jTqocrCDX5xC1HwumeQwhMi81E5VStgwyuQ5UJqJNfMztrtG87gzgeQypda",
  "key21": "kHBKLhAcNKWTr1z31u1Xthn3oTftc95CdGLCerW5w84DHEVXZjFh2Ve3Jrt9kHhR6tVrA2YwTsbsjLhJmvy2bdE",
  "key22": "5tRVYfuEP4KYLMGTwdF2oV1rpiMHvtpg7axNVG2kDnnd4XnduASK7PE2oxGm9pkKArR7utSaMQHakJqW9zssijKK",
  "key23": "3Uwo9kTTMVuPRJGN9DJRyNsFQq5XDEX4dYR5yZJ8Xioac2JRDZcDHHcmCYFyBaamz3k1GD3GNxJ7ma6CuuYiDpQR",
  "key24": "3vnNobqoRD5oLYESkX5TL8ZV2ePk2EWFwXZJrmYLH9o5kexBgkSLCQKvfrCEYhbfkhRN4Ucp1GGYjucQpkm2bNZN",
  "key25": "prfFAb8sxs7NpchqHCbAMtKuymYwJeKf4rtK71CjvoKKpusFcoYHTkMnn5yF8UMKUwoZitjqxyQjZ6QmRcok6av"
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
