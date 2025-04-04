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
    "41PqkeNvYFoH74FmRLAkkfL2JFu5g353Jfiunbht8EfN7Z9h8TcE8MGj1Yeazotcrjo7BJ2geJMUcBguG1Csz1GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auPmwZF7Ri4JQYx8d2fjVMgkPFn24qQUx6WwwY5yGApHCrYWC5yCUxEhs1kzKqgB3138UgxJ8WENCjA5k3BMuAE",
  "key1": "4ULfpDskjdMeNmd7T2pbCwLQyhnnVoroCELkvc73Fbo78a3Kb792GPTyWUej3ckPewwQaZrG71uA8cLa24ptMuzC",
  "key2": "SfbgN7DoeCtBGNMVD3bUFABW7R69dEML9qZnPaZuU62cyHGUPxJKPtwuqXr2TbcLzQe5Vf68fThPxgvKHtwhQkq",
  "key3": "3awHc543UGoSvMbMZmakF3Z2wB2eTa2Uf3ET1ytHcNAKCWHrLvqnj2vS6bwHRbiZDasMdKnAc7PpAwUaHxgh6gG",
  "key4": "5HbaRC11Ve23z4zzUQ35iCLzC3LEh4xP1d6ETMuTRXbki33Fe96EUVdKA4bYjMrir6zH9m3XimcJwqzn8Pb43ULn",
  "key5": "4Rx7Ym6T1u3bsKnTK51HqBbyAnFJorHpumoxdawuPFNeZ9P1n9udpvxNKw5mwivGMq6WAwvr9mHv53Z2vUbDorSv",
  "key6": "34UJWWnW8dvccKzNkvptuHJYEaf3oKncaKHV79H9iA5CiqUBqAM3SQrQfxNTaSvTkr4Sh8CxTNZPG7Gk3qqkKpGc",
  "key7": "64FaHoRxAnxvvAJW2eHtnSdadMYrQE93RRDQngMkhDCxmf9w9HfZVm8jHdpzoEaE6t8i9qLE1kT7H2qM2otMSjRS",
  "key8": "Qm8RPnjU4rMASHQQuBvrPUGWhSWuQR8CowmQDX7fKDL3nXsgSrL9VSmjm52bCVwcLXXQ9EKw6Y9TXezmbhJbvWC",
  "key9": "2QxeVmwmvGiwLx9sgf7t2REyHXfDPo72DRaknANRssyP8nV2XLVpg4Fmz8Mv28VpWsCbiGCRMUfa71Vmm6nKBfuQ",
  "key10": "6Pkts1JCeg2qhSFBSDfMukgx9MN5H5cwsTqG7zeUcZyQW2ytsbo7gV9PT7m2jaW1P4pQEm8qdXiGMgDaYrMX73k",
  "key11": "3tgFghEG164EAQaGt2PhfX8jToUPbGhyBAmVTxueuZauG6EVPgsAdjzXGx1VRtoZGfS4aZQiL2ubuU1SLgjzMVX4",
  "key12": "5DriqnRMzJrXmHE7ekQFMjb8ybz79KJH8o2fTxTr3hUnyP1QxKNPsoEvptbamMXVFY5ESm4oL9PSBLRGgRccDQyV",
  "key13": "3ZGtMUP77JZ4UoPo542e1JubhM3dwYvPjQru43NDmckuXe3rpXRjsGVhFUyYBqTVSXcUF8tmcTHFL3CAae3FFyJ7",
  "key14": "5oS4BZq4kVuxpHJ8Wv9Mj3zn4RGAEuEAGaCm6tppi24TkCajrSzfgCzn9TmpYMGd5k1oQ1rp4tFkayjvUaNN4AX1",
  "key15": "5CDcpmbs1bRC6mY8LUaCVVT2Hih8g69q4dzcpFL3BmTHpFnqr5xiyai4dG3tHRR1qQVTP111F1gXLgXeVFB2wBaS",
  "key16": "5AqLUzdU5tgMoLdKvEwGaDFHDccVKvKQntfQNJNFff9s5KA5WUcVQWPEmo9u2VPUDrLhgycmXmd4ftJjurGj8yah",
  "key17": "k15eNHtkz3uwnUeRWEVVbmb6KzNCZZLEBSwqmSub93FoqG8nsh8HPMDhySUR64kqDWrwvnKKqRxV8tPEsz9k5pg",
  "key18": "5piU6YaE4pshjVEXh77Nh4emcMbgeccdeAfK3GEAmcToxAFyapKkrnUKQAfCxvL7fthNGxPouLbBpV8gzhgnTY37",
  "key19": "3rWcUvrHZoe7UVbNAs7ojhejz2xXBVwjCP6iqTvHSNJWi5pCKp54Yy895p7KR6dieE1DGADhckxoQG43LXmcZ2iX",
  "key20": "3ccW3ASXtrgJ9Ek3LUH3Q5n6u5ckpmWXA13mJSTVo6ByJYUgSp3SotUe4xCZChWjYbH3v7vVftJP7dH7d7GMUgwX",
  "key21": "2GzJbcNJ3ZtQEBMHkqPhe1yU5LP1ZXs9qKbYDEmgg5cia62UxGFHxsPuxEE3w9NrXzQ2tjMugNWbB5HNRUbxhGx9",
  "key22": "2Nt672vTMbXUQVEBk6NDd7TtXjfHbYpCW2V3xnh55yNgV62mTq7EyGTrRgBxeXtWuShkYawWcigGbvqHW2P9eX3k",
  "key23": "rPjoD2ChL4ihHDJmgR9D8uxqnqjcUxc1Abmf4TCeUNRTTVQNRmb8xipDaBwPRLXBaCSZqBfWfAnZkGpQMtn7VWP",
  "key24": "3t9qrtrJgJPf8FVqZ6PafPYmDhXbFRzeEDSXZCagGuHVjV1DLvLcf2Jr9XnJNt7w2YEbhPE9UyxN1A1Usyz7tHKB",
  "key25": "4XvcshnZ8tmzFh66dm4WuUVcWpXZE4JsdEJ5jv8H6684WE2E1Tixixz9UFZsrnoMzszqC4XrMrTV4PzCVzKo6nhc",
  "key26": "4tbHVMVWsjkUv4YsNg6iPnqgH8uyJQKM8dRh8jdRWwKPPQqbCQMHWxY1MTfwTMGoYtU7zJE5w7vbPRjAL97eZ1dJ",
  "key27": "4VNNZRpmw2S5KDZ1i6Qh4ZEXSbG8yS7UuBRMWekmdTYRTRWnoJ3PbqzADkF8R8f8j6kyEyz9EhrNAC5v4k3uiZzN"
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
