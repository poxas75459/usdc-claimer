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
    "2fogRYW9xh4MTkrVx8YexPFpPuEjSpq9SvvJCTFFw3qVPhF852MGZdAqPcpyQAWbz9V6MT62TbLKYyzzUBrHWdqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzcunUnoLEhVRqgCHu6x9aXPKg8LC6PDMkDGhr9M1GQRu6PJAH1k8a6WVvVQGWj1xkLTaR9PKvHofSugfMSFUf6",
  "key1": "52UYcz6UuNEwvxZJRMbGR7d4zCZSjkkvWGeyTV1gS227LB2DGPD8Tdo6yS1gHY6Qn3vviykdFkywtHZcaE118B58",
  "key2": "25yQwsPwETfymx4YMbBrSM74nyMZiekpCVT1DjwF163jq3jPKNNqLJaR5QFhKGZGHkDpzV5i459BWaXw9DgAL8q8",
  "key3": "5qBdX2fvwtcbcKobxktAaugfBux355yBoozUaRSnNuKF3cVUqoPhmBuj4H3RaW51AqcHvHmYaL7CmBsawU9WVNkb",
  "key4": "3VBydXATWPJr7MCajX9sBbaCSaN9R3NY5qfkEziVApWJgN8AqjMiB3fgQLR9o8bZPqiUvS1cs22TPswFxihMWZUY",
  "key5": "5LfEiAq8kxGazTTi2CMVW6nQxk37uCgdT4BkMRwivfoWKf6sxgwDCjfTpki5347nFFLWsBL1k7PisxKENY1xTGSD",
  "key6": "2L4YtR6hb9E4MBfA12p4Jj9PTuKmBXvUjCUZsC5fjteFbMk4RP82RFqN2rxfKe8kihXNmSnKZbUTEXNBC3vTCSF4",
  "key7": "2tQcaHCkx3fparibrs7f4MczK5grzaYhDqowwitqRA6r3rYS1cg4uitbdR12SPNCszEtgAiHGSxVUrZQ2WoRX6qD",
  "key8": "5hPfNRDYjB2aRagzz9TbvWPgLpjHRhyFwcJ17admH8PD4cUgpUYTNtk9JZ4TrM4gMhyyfAeykG11NY1WwffGdBQu",
  "key9": "eC5rPHHVewyfkoKVW6JtKHd6QoLiujZFGPK1gqQGjkorAo4H4aYsw9hiFd1SeyWXpL9gfrYMzcPS3JVKN1PVGan",
  "key10": "4cUR1rCqaeVSssEjabZv6Yq5iTNHcHsV4SXF9we1BMvhDxsen4habT7NsJQ6fgPTkAfVEhstwzDYf8i9bQJtcQp6",
  "key11": "22GucEL6bbzZa9sEnsHKb2aY5yGwr6hbEY1HZskWi6neNFRsGDPpb85gkPjC5a2CtiJNqCMeKiAXo8CC72hmg8kS",
  "key12": "5c78BBtnkPSCRcQSx54CWDfARVRnfAps6FfzTb37o2dGKUdEL1dPn6J69wxiCrxxUXmSkadHN6k4wAT5TxBUSR1c",
  "key13": "2UYqdR1ZAmgQizEb5L8DYqGn3q5oBPiRqcMZ5W4YFTj7JY3nwUxCbhvcvp3uZDbsD5Ci17SB7rg17t59BCeJDTnp",
  "key14": "2TdrzSdnum61u4TY2uVi6qryG8pBT7Cn11F8NWjVo9dF6q8H9d3UXKt6xthSd8r1U7SaATXdy6Ph2CfnMEigbbxf",
  "key15": "3pSZZrhqBm9r9EAiiLBEqc1AjJWMKjxJHwq64mQcu6dUg7iC1ei9nn5PikxHa8Zt9LQVZH5ZUJDMSearGR37sdQ8",
  "key16": "4E4JU7yWuUGLKVqDQffdMVneRByr2aNKmqHYwmCyXzXBF14rFBoqHvFJEVWW1xio3MhtZBRgjh9ctWXR5j3LRz9u",
  "key17": "3UaKo47wRuBAqnK6oBuvAShkqxP9LthzuGsvsoLa9DK3Kk7Rm19pTpWYWwKPL22K6jPWLvkeevaj6w6ZQyPxm5kD",
  "key18": "4DQUq2fUpAMHDQX5KuLVSCTURZZqNxzX1u1apqE89ctjVnuYuM1iT4RbzYnCzeY8a52oSMSdS9khHQmz5URkgdKw",
  "key19": "codaZNZVdPeo1Uq4P3oHi9zfEjCACQGzHifCjHYAS4euLz4knN4TJ6aNNBe41EigBci2w4t5Z4Jbb4PZPs2Ewdu",
  "key20": "46Soi2a4EPVyafCV3UoxywNQ366D9E9jNZcKdFzpz8416a3cDnG1sJTjRwiJoy5GK8uFDYvNerjwa25FZv51JXQe",
  "key21": "dMGwTBMyWfjYZ5FxhBb7Raaghb2HenygxZfwHMnvvG9FZ1vKxbFZNNqXZ3yqG2dqTXoN4FTSXLe4TkCBv17B5yb",
  "key22": "6qEQYDUwyiFdoCEAcuLEbh1ypWdpSzXyxevArP4mon71YmuHAVHb4xN3J1RFmnuYzwLtVwbXGkmzChqQFGHpWu3",
  "key23": "4rTaHbnXW1Qb6E2RHQTxXTuDbwZtUi5Km3fePLFRqWe6E1zujLy2xGGdy546T8BbBCHxdDHJqrQ9DPTRbssmDx7r",
  "key24": "4PHqceiqHp3B4BtE22jJ6Yfuqr9PrVhpCCYCq6WWzxpj2sMVewDNcnyV9AADnK5hMqDtn5qzFrgcy2bG3aTm5uzc",
  "key25": "2WLfU4ryy2nUXeBzwoQ7R8UU1hNUG6woZWqNCWBr8DGTSrncmbpZvpNs1L2WLG3cNkKhT74GnTdJ5pUpVCHQURBL"
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
