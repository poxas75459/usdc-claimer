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
    "2orhYdEtSHZod2ARr2uQSgMvyX62cyvYw7c8sZ3HgZGhwK4pAudMai8REBq9vTWS35aXWZ9C8R4n74BC1NneK8dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "969h2JGzDWEL3vdQW39wJB3BEMS38pCpurcszfdfqX95LypbNPGmMeuBV4ZgLPfMZhouxN39DhL63Cv484QFkGN",
  "key1": "4rxsgZvzfRNmp7QedzvPYV3tPtcj9LbPxVwDfDi9QbR72Sq6gFDy1ppHFwZ8BzzadwRRLHsb8RArfqZgzpe3L255",
  "key2": "2izkkRbjvhoae93YuXpyssNMYzzEbEDKaaXnu7Qui2XBzZDAM4BATpF9rKLiamwYw65PtZXf9kv8hLKH178XAyEZ",
  "key3": "3X695hda8SCQpDozzDvQDRVJrbAHaTaYieTA1y1esWcwZXGKrZQD311RfpVZT8gDiPEVHfEBKvsSC5YWMPmGR56p",
  "key4": "39imd8H85ivqbHu2rvbcuXrjdFbTRH3iKC4cHoRuNxGm5ua6UihKLexbeqsKCLviyY8tgAMmrR4jRbPZ8atvW2Xd",
  "key5": "5oQ2hgUN9RPDh2KWHE2S2MitVq1qi25Chhb6m6C9P3fNaBJsT2eJHVXsEMCHq1Q6wZkcjbVddQg9Lm1SFXgJ2UzM",
  "key6": "3ch9W7ZrtofTL3jZ6a4eoKjEk3J5PJVdKfBjr7K6xhsKnrehB7F3Jwpcr4TkJPu8bivNQhrzmHhs2PtNkiKBgSAe",
  "key7": "3gGe79MXEVYiW16U82VeZ5ms6gjRfUcLVTu6RgZ93pax3WUjt8JkbzCVC3yP7f274rNAKxpF2Q8rVWaQrbFqBb5G",
  "key8": "4M2vFCXtorbN5ozgVFP3cAXDrbXmSPtDVkHu4bQd6M24rwwhBSeoh2cKqmYpb7SUAMDQuQ7XTyWT4ifiW1TwD4Ab",
  "key9": "3UL4LJja5Wn9fVusb9KpnvBxkWVjB314ygpKc2zU1smKbXguRi6vKEjcjzVLF37qVWwwHQEjJBSpjoRxVK5KYm87",
  "key10": "3SrJTiYt6RvUgi2eSkpidpzDjaP24ncmodiirV6bPsPRGQw7kMSGAikaVsvvqVTv1h1gUoaqdt3J3H7UhCA5Mrw",
  "key11": "24DMChMjkJ9EGnEn8fMfVcECcvMtyR2QjUMXfAcLY2zFfEnUbqNE6A84P1Rw7tEkqgcRqfTRTf6pWKnRNTUFaGZS",
  "key12": "G1nDnCAfzY6jMGXa3zZtbMYrmBKzpCqGpsTU4zV6jwiNZevfa5fJHF9We6k4vBs7TtPT5MK75DpeEjVAxMXLV9t",
  "key13": "5DkkoyrLLEgNqW59BBwLePiiQ4Kbz4q1JepscyYwBuZ51pFGSuxFuKoZFNuexnUVuZ44nM2Lb9q63RMM26KQ8o3Z",
  "key14": "5gFncy4T5ZedZ9NMMpUjJtUzPwg5o2ofiFj8tiX66XrZM7uaBujsPAPj2nCcm9jWjwQWRCvAJWyh2dfPiL2Ssfi4",
  "key15": "4VU7Kcoys2pW66Te1JnprXWceS1MghogAH3SstPve6uiuVVZzaVh1WD8oEzmGmavji2j5864Bk8SnA1G5R8DMiGP",
  "key16": "4wtxtZsUeGSNZfG6LqhjjpVXJNXrCZKeFMfdKHCT6ewSjGbgwy6fbGipVpSLnV92Eyjrv6ENBYVy8h8FqaLTt7Fm",
  "key17": "4g9cGMz6e66WkFMwQSnGABnGp3PTVpJApzS2CrK39UZ6kNzEPBs2sqHRZmbtenH9vJGmL9mm9uAD5uoFyQXpCDNk",
  "key18": "2s5gSKJaaKcJCjVGuWXQQaZE2vhggYPZqFhfCnSMfEZTTDN2u1qudzg5zeQbUZ2r2YtrzWib56WVBwxDSnHEBWXC",
  "key19": "2rGfQkWtFbH9fCcvwFiRxUGa5Z18ZAcS6Yysdo645UPzy2YdwqkdfTBcvzzmzpiLZD9qRh8iqTavR26eKpgqEbVU",
  "key20": "33RvJYmAo9DBp5SoqRx4aSzcunrBGuqaSUK6RYci5GaoEh4o8bFGUvw61oqora6UBbhRrjJuz58Bnk9BawhgUEDm",
  "key21": "2NMMpUepWw9qj6hgSaeTapja4ebrYC6GWMU28Pu6MoD3VkBLCmdcUk7FuWafzUM9FK6T9hciTwwq9P7ZpDjxEh3J",
  "key22": "3ddyS5CWcPfiRWzC2EzVib7EmHu7YHHHsA2DrnhB6xqocMjo56Xr155V9KeevHQnShfKYPR6ojwQt25bCRdprm98",
  "key23": "3GLxJeTcm9gqc1G4bQBwU8RZauxbReMqaeNLqZypuJTzawx6w5g5qPdZGPyfvBgzJZ9ENLETsvaeJwvREzEQak8a",
  "key24": "q5px1ZME3UJzdVhBXoE4VCaTHjc3ygmPfyjJwZ4TbiQcpfAXG2uNAAiFL68UGXHT2W3L5XJ6BSKFgMcFH47fSrC",
  "key25": "2XuHh7a9NZTT2u7VAndZDrxhaE94DEvi4wnZTHHUhumhTzCThTeJwwpdAnmBSURu9aJDupmCkdVPDneiae7vjrRr",
  "key26": "2UCFnfyhJWmhEVhQmTiyiUhGex5qSsgDVHSDv3D96dfrHR93uAisutyGxEKBHpxZZDCKNS84LUUpf3JBsJw82q1g",
  "key27": "dyddPcm4FAfauGBm6kdpGrRZyUwRJuoYTn3mi3TpLDD3jDD8APzPiaURgFjWcxp1iccmXMN7wNYuDd2C2hRbjir",
  "key28": "jJm3qRcsEvLsA7Uy7LUijJZCdxpUWQmNqxLkQ9hRcYqmGrqBh36dRSdW1iUPLUH4WjheiPmTpzztQkUKfFqUbwr"
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
