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
    "5iPYU13WxUwZzsmecUxGydaHcopYLNk1xDmq1BDpkJ9aWxrGwzFjZFTsgxGx5ZY9SALMtsv5vMAiewud21j4EpWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMMEn19ddN7CdkQDtGw3XqPP5KFoYM6pSd8VUKXqV693Lvvm96udQffpHpJgJkGuZFeKy1tViU3D5UW6KV6GSXS",
  "key1": "21xmntqZNuD1GKFXyM2LevkUQDwJNc8Rm6Smfj36J8sHogMpMnU4vi2mynBBay1Dt4jim2KMKYRFByWe93g1CiFy",
  "key2": "5sp4WBzkbL2RwsHoBo8yKCGLUtBkdk46Hdf3HWAQzMY4HEnsmwxPNiC1KHwRMJy2f6gnNuBhbYrfW6ZpiyPddaAn",
  "key3": "27tHvHoyWUxGfHD1DrCw524z5qN6HEex3Nbn69qB1gSUeh6QsGg9HmyygSawFLT2jBbkwoAZW6Xz7Tt3ndEXefpx",
  "key4": "QgaKPb8YrQXMZN4s9MKanBb6BsssjwgXdFF2FwqWr98N6rn94dUR2s7CT6vYrTdLz5oqf5ueDJHgdhsvVtkXcNm",
  "key5": "2eS65pJNyLJuAQWhopHCnHLjCXicCAu3FtrimXMpsgbu7hnx8WmYEanGinkpsKkPhjzL6xvsTCTeZtP7fSLT59Q3",
  "key6": "auAZiqyfVz5uqWXCUtrrDm4GR3jvkbg25PChSocUWCD119AzDxDHRaKKYBGBT6N2PxTYVYmyMnkY39N6vm1zZ3c",
  "key7": "2fpPZ8Cd6rdPidGZAMWUqBrrb3MSyytLSS1PTb6ZzGKfmX9JtgqtkFKrkzjAsHXmwK6wx1bMVWd4pUTDoRuzixCp",
  "key8": "3qttSSnd4Ct479Lv63gYHLamNyWKTHcEhK2RE5Aqp4kk4fGCusPjHnXemxME7Z3MojnTgzwJcUd37cB916roBZGZ",
  "key9": "5Ywc1VEQgB53LDWPkcNnbCTwCDsDn78FdPDfPuL6QfEV9HdzvjQ8C7dJeM12drMoyHyvz9N7D7KiWWWgVmLFGifi",
  "key10": "57pq96V24joXCpaSvV5ZrT5JHJeGDAC5Vh3YA4QGZirWk9SSq22m8WXnkAv32UDCXWzZ2whKSZdb3neAcp2TtdCe",
  "key11": "9zupJaRYNFCahKLhEEy2QCxu8i3aAZect8hnTCi1H9NSBErRPEgghPzbYmhK6AjTks2wPiJZjAzxfxsjsJJjf18",
  "key12": "4d35EEwCy3nnWQvnNH4FZqCkmByXKQLNoX88HwFeHkeKYoKrafEPiHx5FEMw47ZhF2yo1xUZxtyF2cm1YXCkPWRh",
  "key13": "3roVfBz66yWfXuYEBgkcb8Yeiu7ZhzC9z9SVEeR7TPQzALA1BBUHSVSmA4sxAGRoWX1gtpBm5qf4ah1BsKEaDoSY",
  "key14": "3B9KtpVjDHL1gEkBLuC9P3eDTnxwu9SgTDrqoibvJ8PVyKi68syFv3THKaC8ESPs4LFry28xzq4UELxzinmmict4",
  "key15": "QhHKsEM5atw882GfpYCe72EeJDiQVcGZdZu1C5wKDDbSUR4JdGXt7yuYxuft36r3sP1YLPmaiDCz8sbe77ASXPH",
  "key16": "5WaGeYc58ee6yeWNsdvDPuZahsL462b6PY2XXEH4SztiXJKAsQZXQHE4fpksMei33cB2jQcgTAsrpEwj8bqGFUZh",
  "key17": "3f2jcYHW4AEA1daKCWqVPsVCTwZsynQDMw2jENtDwjJxW8t3T4QLYvy87DEHwjuVg7JjwVkmcbcXV4pjZbtpxsfJ",
  "key18": "4CTecMtP8JgYMe2CQwRBfTGFbDJNoEYjDtUurFd9ebzbemu4iRCExwykaMedypT6rpMLLWNT1Yzd1yejigrJrkQe",
  "key19": "5fqWp6fteQ5z9WFMZKBwBAzFSbUYRwzVNMxUZVKrhVh4k1SCnoTBhor311sKfMjjQPygB3oG5Zi29gSwAoLzCm4N",
  "key20": "5vqVPoeyXfFgbo8fPmihS5Sj5PQ8fkMb3fgpvUVtxvrbfswwPzr1stNMdTbqjYvkQPCw3sVgFHRXa6WEGgeq8aKf",
  "key21": "3Bdgr2Te2kqoaoy29CkKo6q3Ndo8p9YVnq71MXCNDXjeQXiKEREdLafNb4orE2fiyg79KDvfpRurFGSAKq92A7Vh",
  "key22": "53QnyXY9yQAj1AG5yMfjCYNq1q2HZN7u7Cn3uZJ9Q88EQmcKCdrG6A39pWJQrHhDa1kznhTpVuYfLAgVN8VsDAW3",
  "key23": "2V68ovwboFUd35QLZjuEvqhAW5jKowXFGFfY2Lc2D6nkYxuzRppyLF7nwaJCPjK74xNhsAfejriK4F3HVfwA8spR",
  "key24": "wo4McdQ9cRPnnwvES3WsS61YNyaiJDjU7vhfexNa6dm7RrhfMKkyKtnwyD5cncoV3sWqKbe5v9UEjMbwYYHYkuD",
  "key25": "3Z2FimLykz72ukGvajzz2aZvd2iW8ekYZFqh1RHRJwJkkPWTqBX1rjE41GrgFgu6tJDdXP2c4bz6HxDHTuBgXb8i",
  "key26": "X95EEvbuGg99YK6exZrwQMivGwuSe1vMUh6fftP6nmT7AJzHVwNVNE5s6Jkk8xypKHAP6bT6AH9Rrj458VrM7um",
  "key27": "5AVFcAWR6iugfaZZcJgWMQ6FG8MsQvJFfN9uM4rW6QbJxbk62mgjiCp7QBvT3D4Vxn2SB4TNFsfLYrt9owkHRWpB"
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
