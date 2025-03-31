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
    "25gwUoo7hhZB4drhCRjHrZmegKauBgLVPA9DWcQJfkdSw6KGPWJqqmNNZwqsP4RHqcqPqcfjxUzSi5niCYUu6B67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fihaQEb7NRbjQzhZSexh4vq3g72zzaq2wVqUNZygH8wLenbmA7JyXoYpgZqbUVXBaRq6cL1RZpjRxMCJzu64RQ",
  "key1": "2Gwi3qkqKXRuUZWU37DBp8hU7qBNqwCXEwk5LKCYDAok7GQuyoMdBPTLJpdAk8jbRyQvZoKBVzA9XmXgpqXfLTp7",
  "key2": "5asRuotaraYkFXQDjEn3Nr3SCS72Tzp6RU5Bpn6heiJLXRCghwwKGPxt2Q5LCzfi6cRRaDzxcmzT1Jjq7qJzz4vz",
  "key3": "5NMhSRgzTg97YiY2JsL3nc9eUYXqoRu5xfUHPbHgxViWzwZQuFeep9rF9zfcfx4WGNHMwqpbJbwZHNmkdwdLj3p5",
  "key4": "2xv7jZb9LfbXuymawmX8WntaDMCS9Kf8ouPR36nVzF7WUkWtbRoPU1Q96zBtrLF5f1fj8WuMd49ZPpsnwZ9qf1Lf",
  "key5": "5Hz6qgAyXQ9ZtV6kqB6phKUq97kVdXeje2jgV3wpveYQ2ysMxuNfnKof2JZLiRmrvkQcidjhgDWA7t3iePUVS1Jm",
  "key6": "gRGusrpKY83g7nThNaUw5EScQmxp5QCxtmXCRPgAMY8KYiES1bvp2QiFjWjvRYADEBCWDe8ZRuyCA1auZi9QAVD",
  "key7": "3aasy5R6MwaqxKpwqyF67y4XHxKoHpJ7iqmPjhuyzjHLdrpyyyGEnGXUR4Lr87pyeRqHWxLGTXyTNwE2f16nzR7N",
  "key8": "2Z77wJbfjUT5fHw9E6e3XM1ZJ3QgADyDz6nW8HJ4PCBxkgrJKx9n5591CgSaWL7VyCqFuDViz82yX41txpgz8f2R",
  "key9": "5t9uzCDiGSgcm5Ko5WghkQFpAXeLLGcup9rnggRbRnUD3kmcS9mjmawFCmauDDMajEJomqMt7jM82EDkWaiR4ks5",
  "key10": "2VSutRWhnFTNN4AdsFSKwEg6mNTdd2NhaxPZijWV36HchYstyD1drLi76rhb1twGXHfkQVptepoxorvyYXMr5Q9z",
  "key11": "4X8qX2wXvxf3i7EwsmuCWtHpMVgcnEtJtZyTraUMtUVm1jawdfVjCb9qrm4jps2MZkwKCurQybZU1YXk9ueU9MVp",
  "key12": "5gcoETPSWVkLxNiRMpTEw4yw3mMqCJyYPsxV4Q7z2AFAcBdc7PDkzwmkUDggH6pe4dFRpVMHhjwatGQNxq96KkV5",
  "key13": "5wmrt8jG1G21cYdYucAi5BK3TrFZ7Bc8yVz8bmRePsydWVrjbRkThNQkbLhwPigwpwJjLjyM5nmoYX1WnwDhdKQi",
  "key14": "2TYeTfUvwJSzWw6xkyRPBEUKYVUcMiqzyUzFBFLhg8ms6CtgfVgFD9WxapWdBzVm74uuJkUPY2p8jJSfNprKDjwW",
  "key15": "5NYmy9dKQ3QLyBuCj76zmXaKUmMmjDAPz3PhWj9whdfquZvS6TJJ54cMiGwKdDXeRW7yoVstVdU5pjzgux4CzzfA",
  "key16": "57rWdeZkkK7KZLHpZDLMy3Ws2QNut9zKywFWsSFfWNmD1esAXHHVc632vrGR64FB9uU1ehJ5WW9EtW7Aho7AkP87",
  "key17": "3mCJiCq3TjmdTRCEMRy1hN1tZ1HyZmbXJVL5FKkT9HLiGLRjdP5Jv6HUk2MrLKhs7PFLBZcA1vJdnLCB3V1YwGjD",
  "key18": "2iZtsZJKGvTUyoZytsKCBTDdUKfJqGEadVuXpnZELd7RZzxfSHAP9tzsBfsyaCDHtMRD9PoJpvUeAnKKTadG8GQF",
  "key19": "4U96bJkqueirGp8W5eQAzfvXVHALXnaE4gNbhnHf6Jm4WicwkVWgZT7SpBqLMWt3Lw8Wb81D2QQSV3gbaPNqCVgp",
  "key20": "2VMbQN2UBZExERFvEFWtHpEFeFfTXujydrdE1HPF3KG52wokm1fx53iMvtv3KTzs79gtyPPQWTvd7BkP7yHL85xN",
  "key21": "5zbmVYKGHMfEYxGPxaHxR8pzdktyUcEpEc7shfH1bpgbFbFDsqHPVUrpiazhg9kMdWUeLvMvDya9EpdmyYUHs8cf",
  "key22": "54T4vz1AwE9fYrp9Qn5PzkXSZnEh3m7zotGasT9UBYcFPDipVBifeLTUpduPvyp6ToB1TBEwCmotKdZCxwWoxzjn",
  "key23": "RiRkskT8TNLeEf4UAvxvjpVrvjXdqySDfoj84nFuuhK7dDcXVtnMHCdpuvQgnfoMBAKWuZAEJ1JcEyADm24Fa5s",
  "key24": "2WoeVgsje8J8DyGJ1QmYCVN1xurWh2P3cMucH3yfXamV2egM6dfFpmhPLtqXgD1SCoqn25KRdngqy8J7usRa6zr5"
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
