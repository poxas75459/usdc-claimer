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
    "JTA5KR2an1LKa1aUKPEkHCDNncDeMM5mRcRLSfKmXwDHb5dsNoPvwQ6uj4skRFZgDFFsJUkFd7xk2e2RwtDLiWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gjangn18z2xAf7WqHeBTSHmie6JmQNn6Ug3pdnypESBuRnPsGptp6VrHjwi7hM9uDFKecZuqJBNRttpX4MDHsFf",
  "key1": "BheNzpwN6ShsRcc4WZkKbsn6HL4Ao1H9yvagYtgRQbEJmkg7zXYWLnUsnYwBFkEUoYUoj9nDgpXUH2PP9FimRKj",
  "key2": "4JuRQbwXXPosCeKaq2cWwjX67T7EC4g8bLuQzgwH4bd9NueP21CYnLDdTaFGZKZnMyxzNxS7CwjV3vLeBYeU6Rgt",
  "key3": "58M1quheDCAPMs5NeWr2LUjAajQ3v9FES9tgPXpBdbC58oUeVAcJAnWcNVAmbRrZAmGfnJRtXcgaoD5bReTtknqD",
  "key4": "2oW1F5ivafaoA71fpwkgKNRXzUG5ubj7f7DvdmVw9AQ7MSoXD5vxVCS2oAQDXciMCrD5mZuy5gEfqdYGEfzBL2wE",
  "key5": "d8EnBxQWHwtEXUAefBayFStygT6uwLokVSayQ4scAKG3Yqn7PfT9PTww2VYSDNJqQrouaayDP99s7eZYBDZtonD",
  "key6": "cq53QbmmyiWnbbg4rF9WZ7tpQzLjQ6z9AwDhSc3mox3UmqXtN3pY9ZDBub3TQ17NKN1r5cPWz7ygzgzXbN2ystE",
  "key7": "3Wq2Gf4JUEqyHue2FRCUTrXza9eC6eCWVHmKbU5oht1SaV8czMWsh1FJYcSTysn5kU6VF8uN2o8sN3MGr6gwgbqp",
  "key8": "GGu31pxHu8MMk4Rs9ft2BpbvaszScsWXdH6bFZSmrSmfVKNah4VGxmoqaqNzr2tAHfjuyzGuQZvmd2FxYf5dQjm",
  "key9": "5ho8p51h16yTP269JMUFmM663y95GVmc5fcT3gYTjstoeRKaB8NcT1guNFrD3XjxCNgUHSMmxkQqqsTggVpgPxFc",
  "key10": "3YZQmkLFrt9Vk5cDBaCWru73eE7hPXXKCBsSPqgjkz1PX2u4YWaDie1i5xYw8FxErKrDdzJwMv7qFJJ1cs82QXQE",
  "key11": "2oNyofsoM8vqDQW7nkdknrtDpZhEVCstRTjBnAu4oXxDhnT97nn6Z1GEaYDotEnNLiVHDFCx2QYyFjZKq2bvSu6M",
  "key12": "4165PywPdXbmcemq6k8V6dxN8RDW4DxBfVzqmAZaiLESmsVN9R1jg42RY1rLBicUkCqQZH5fWQiTafpivsofJnF",
  "key13": "7QFfPnPrKDW7EJ2eBvxC8uU15hp26CRXcgw78pMv844FAxtFCNb1oEgTPMFXwwfiHdWfKrczubqfLqF2bNFdsmc",
  "key14": "3baZ4hknSwst1JAmA7QmJ9JgVxAyhTnxSZEE1CtdJwfGy285Pys5HrVy4znqgzdEo9RTb6DjKCc8E9SSHTLw7XvW",
  "key15": "4yJERAu7qDWMo2k4gLkSWtELxDHfBQE2dppWS2Ln1DKxR9PFGX4XhqMsVctiDGogKaa8BVmT3wJASo98RWb6pogK",
  "key16": "QGK4p8tbUvQUjVkoAdcW1HywjP27DxapP6xsgx1z7JvLw7o9Uh2mtqYnaGexwV9nPUmiS5SFLJrJ2FKj5CoPtwh",
  "key17": "4MSh4zSTZ2PnRTShb1yYZW5sisXTXbCRnPo4TqedkHF3DnFyicJfn1EqSa4mggrjBNzk3zopG3pyEBwMxfibKDTQ",
  "key18": "5oPU3k7cdfXvuLuDX6faLxa2ksaxXeabppSwSgdMzEJRfy14jxhqxC82CQiAKkYWnqfhhk9qAiXnFvwCWuy3nup6",
  "key19": "2vZd2ENZMo17ZfYcRn6Pq3hNM8T1yMXxxGemQ6PgyaCe3843cp1hXbfbzs5y7VVgsU2GyhZ9YS7pXon8pGY9ptSx",
  "key20": "3dGAD94qGH7ogGrEbSEmsJZwxiobQ8bHMHqEdUoUg6As867iRbjB5wDYY5Qpe5hWm6QgcaSiNpwm3aQveyHCMtuv",
  "key21": "4PHASf1kSjJ9DTuuiPctS1j9nn13v572yZjLPejrL7C9UaJtkr4z4csoskghCByRzShMVfxyydEF4sBeYgkXhYht",
  "key22": "oqrCYHTGWCVjDgHcRFvQhexSbDUMya1acP7YTa73FWmF9k6d36JmdeKjwbYKZA8LPRDL3NZvf6CeU5kR93hkqFJ",
  "key23": "4Rq73A94h1yuVxCNYrt1q9zDsjf7hfcgbMxB2VdHGs5ddhJFwAkvPxAMCMZM3Qioc9KgCXZ5ySfPrxaGDJFqQxcc",
  "key24": "47Vk5uw1CuorNmSaBSek3fyBLc5hHChPZJgi3ZQ1cDVo6eVFUHeQcrVksqJiUGEPLuy5qqWXL5Sc8iuT6i3cHAQG",
  "key25": "4YF21NGdcLkJQkWxaLoYg2oqg8smPyUEY5K6BE1QhZtXWJDYpQGYLkbpQm2R3UTSgtaYQzBT8uhLvYGECbr82Di9",
  "key26": "3LKqL9teTZn8GdqXydfs3iuLvzGgFQ4kN9c6cccn1m869pAf9JGDrTWuMoJNprxL9kpLTm3gHxKJ9r3J1kYhYFyV",
  "key27": "bCwHsowqz9cpDTQXgCTek1JVhQGsJKmMSqr6RkcRBoAgiXPiwLLcyLhV6YooQJ4o6b5pRXE6rq6wPhhH61ihTqC",
  "key28": "4f9qcxJj56Cb33axfeG5S9yu5qbFKVnscfP37gLCUtMDsxCRi2wiTYKa4DiABzZEfCU1tv5sZMn7q4MkyTSkQ4mn",
  "key29": "3bQNUgtbPzCVyb1bmwjMYqhPRmighAexhSSqjKbJDnJnvhgoLaXWxvdyT5ZwuhxaPYMk277txd9c3y7GQLEJDrqQ",
  "key30": "36gsRMUT8jm6BNUiki1KNdu7pncGd3iHrARJ7JUBWmvwaB2jTHjC4BECaJrN8FjAj1K5bj9xfRkxU9iKPY67RmPA",
  "key31": "3YpvxvAVstyjG37QP8E3h1aAYuM3aveZKg9SyNFgr8boqSjPSgYxCp6r2S69ntZhnfN8shgG7Vr8oeGyVxorbCkh"
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
