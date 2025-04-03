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
    "4cTNw2yu5Nn99nUryMV74ConX1mDK1w1ArFCyvmVfpNY2FUpBrJHhptSmo6hgRf8baKFzz3zuDPq7HDstZ5YLoPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47o4DNuMFqjEFeNwFLCFszQhFCnGYr7yZbwamefJEhCwFAATs8bMqprexYnLM4zPeu71ZyqWbuE8nFKCUbLKUAx9",
  "key1": "64CQPhAFPVqtyJEWBhkaAnQK6yNA7fidtaHX67vXCWtK66xbzLYrrRvrUzqe2JWJkGDLzY4isJ8UMbTx9aLtj9Wk",
  "key2": "3PiyoKXAvbm1AaaiuWsZG9RXK6Joz85Aj6ByTJjUq5AZ3tHZdtkZXXpUwfsDQuume83UNWqeQRN189za9GqKyd5c",
  "key3": "5WmobcbP4GwZB9sjhhA6NoPFtB4MxVo9smCv2F19iE2dUxhr8kSY2Zz9tiEWqVuoAnKoYdeX7uBAZhdz2wnrV8Ky",
  "key4": "3hkCZFDZMg8kePbuiVA4EpzJuGDuab2KXXB7g1zefM3VqQUcNvBxF2P14p3kn8tE8LnqeX7V19XHAnhKXTMDGxdk",
  "key5": "5szkDjvUbTTxGUMqwe3vk68U31JUWJZRVQ1AvKLuA7GSAGo2DFfgx9joSJzRoEWBvWmtt3jHcGitKojDAKVmqD9f",
  "key6": "3zkztpbUFVx4Bk18Fj91nNPKMAkTCfpjAdqJCY2J4f8wAX69vr4BTY3UR8yhZpWXhsKCSAXGWkfxyTmaN3aziWsT",
  "key7": "5XrSnsSMziDqzGM7GL4dtYgiUCvL5dPny3diMBTiioCb6z4muGHknVpJQVqSFktvMnTQXRSLd35FB5ZsGotHVk12",
  "key8": "5azvU5auRpVJa17WqVnQrdhUQ91sTCVapSqrBVHyiiGbAqnYLLyQN3NkEXNLQsqZoM3j81BJMgLbDpEjny84cwuU",
  "key9": "3ubpVaWdQa1uMxX6dQaTgFcQrWY56rSTiEp7LxeoURAmSt5NhzkWffCWPwo9iJJuHJjpU6GuzsqvkoPBR9QdRpg1",
  "key10": "4tHpW6pnrTVj9g54LtZx6n2UuxNfKXQZH2Fzv5XxCnvXVxXJUMrkuJyUMUagcz5nt9c7ZpYZb9wHTMgtYm4KfeiB",
  "key11": "4y5kjKB76WCvrnD6Vdt8vjX1ErFJFYyAyKRv9kuuS74qkAvj7h9MdgfE61DrF3iKqLDUTKD3rUuqog5Xr78uovDA",
  "key12": "2nYjjQc6wxngAiJxXRASCdUf4szSSZKDaweDEKvi21NS6boWnH8jqUzbpEWnqTwGUq33uJyxpo4qi1Wq4nbAmEML",
  "key13": "2JnEBKuXNYxPhHi8pRH8b51eKHvAFDqXujsmT1zZa35bAAsMHhGEByvSYQ3FMBGNcqEKPqiZo4QGGrwHwuaY2kjt",
  "key14": "3F2t2mpaozpAT2gpVxpLHJ2FLuZtvM3yzBRR7csem5utfukZU2ufEdy96JxTd5T6VvSLPvhx7Dm1GeeZKu9MVBt7",
  "key15": "3MkZ82KcYcgoYqyoYPas4VUFzPcAHLyuV19w1LhxaTdBNcwoc61gahGT97r4g9944uvdyfvsrimyKFF5vsYjHoVJ",
  "key16": "53LqZkoKcHemFemMGrYq7zjJBzLjNw8ve5UttTMNBXeWsjBMfrd8BJvrk1bATTyQj2wUHbMB6AcyEtzTbD3rFNrn",
  "key17": "4jRLJUHx4ThoGaMk6jK4TpXGRcKtsSG2KmVSFYFZbdDewG7FH6jL7BZ7Kisp1WnsdEjwp3craLfN6sz1oicKQCsR",
  "key18": "4nZozU6Y2MsWrg3bATW3ku4SvqqJXjH5VzF2TjQ2qwzzjrE64svbmapg9c7pW8WRARNmd2nnLpfGhyh4MDiNW9LN",
  "key19": "3zTS5VCbWqzj4u1LGoiQNCZMeefYxokSqZtAPcJQRCnxH4PDtKFhPN1QR3pRPVUw6MReC93cRRgWomN1pNh8aDdw",
  "key20": "2TCc5b5uQ3XFxCFAYDno338V99ohpKEdRUX7UBzYVAdnFBaQfg6rFiJWTbFp38TggqjjCjB8WvXr3YYzRhnENXm9",
  "key21": "2ZvzNtAD13FdnpP5fPmSzmbgzTZHsHGmbF3r1DDZsDhpo1cNJ6HEZjcVh78wQfg5s3WXkMZUiMoHSDbJyeaGGMkU",
  "key22": "3VRoniDxLg5f3TdfqFZWR6zFfXMcKt4QXNbjcsbsptqKF6HWzvLwFvvrGnMZxxRUMsgrdDmyV4ohv3doZyXLiT7T",
  "key23": "4gAfkfRPYseNQcyP9JCbP9dNWxvm4MSm5F7q49uqi16mv25DaodNowjAxyzMFYaRRyDhgL9X8sphfRCbCqLK7E9t",
  "key24": "4owegk2A5YAePpNQoN5m7oEdFM18iAovVnmxbJ2txeZHydRnbrq7JzAkXfobi17fjJGARf8FnxDFL1y44pPqtkVG"
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
