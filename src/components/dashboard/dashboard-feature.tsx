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
    "2sD4LUjT1TMyYMg1mzMD9rBL46x4LuSpwJkMxcC9ZagqcTaDcapbLMgJPgCQLPBProoZJ8yHJ5CGdhLek7BURCJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PUCgD2uHq3aSfQFB3Q2TBgKdzuBZNgX1TTGMqPr5ofZgiExnA6RKx9js5w8Wxzwar4keA9ZYecc5NArFi6g1bbT",
  "key1": "5aJWPeBiUupXrEbVD1WJaPzS2mtLJx4PsBZSkoiLnhwrY4bGAfY3rWpDCA1yZZMecdbEXP8KhYofH6dA6bQZ9vLv",
  "key2": "2NPbqxyGzdFTd2sE7JqUXQCehBFpjwuDb8wymZnrgz1fZt8nuHi4e7U3ibQsKd666BnbomqHRUUbPqbZQfiQ3Cdb",
  "key3": "34h3SKRk4E8LS5kSSmFL3LVpNsK4xwjGCzq1HYsGt4ARzoh5LbSv7AHScSX4Ap4fZZCxMQdhnVaBn6FZ2pP3swru",
  "key4": "2TbR5dm7r3TnmbmfnaFDBVqkmMttQZzuBvcCuLPMRw6ZzcnBH4scv88RRbqFxhA12xbp6kSLJspYNRTwGDuq2K2B",
  "key5": "5QdRqH8wbxSNJ7EbZnHTkbUHy2UeHw1E9F6rwj9qwvyQhP2JCdTCgCAxMUiDsXaioVKphRiRiN4MDzpFTr9U7myN",
  "key6": "2gtLgBg6CMvpC9Dx7HAKbtgPcmnhz6B1DhseC43rRSU1i7QUC96XvJVDyqXxyTse3NnVugw8PHvJeBsrd4KhPJJ6",
  "key7": "28UfEoZnujBmfXv22qZyEfoCbTMoCWrAGZ6TThP8oYiDVof9Hsx2kVMYTeA7FoH7a9cVzx1ZwFaJBAiJoJLw5yne",
  "key8": "37MTcecK6u7bUhL29EECoW6NkQ2jnxc9SwEWdX4LJhZFPTRQUAZVxU6zBAzzi69x6da4f39w2vjELM8bpn4dPazY",
  "key9": "LKiVDbrj7tZgdiNvDeFU8o7HMKwwHWXqB4wGkMKtxS4XKyvRQwS7QFStRTHsuNpadfwGQyWqYBbkTZxeDHNoQBm",
  "key10": "5RZ9i1DiRPKARJqGyid8L4RV4KKoqcqUMqP1Nr85nD457oG2hM3jVHho65urWEN39ewG8Tw2EXrSeUc2KYHUrs9s",
  "key11": "5f2CNeFYQ4h8hZDu1jNLwGuLN88ZGH2uXv1NsEuz6qKV7HVfJTkPQ1AxwGYZ9tWp9eNj86YvhJj5trbNghocKvqJ",
  "key12": "M9132GGZBxHvuUiscxjghcUtrvetMtEuBKT6kBKtr9ibK2HLQzLUWrQajbnCneN3GqfxH7j47u9jKTuucUoVCaq",
  "key13": "APryVhuKHWJrNeHaGRkt3fSYdsVp3RwsKeEEYUGzu2FioYeYoYC8iQvFMVJW6pEPA5RsUTFHvrWK1FWYxyh16v7",
  "key14": "2JSWfiXppiRasxN8s9duTU2LhL9EBMo8q2QPHiMdoZKUB7tYSwPu2FbKm3qeQkhPp5shiC4gb2KR2fZ8sNC9WNe3",
  "key15": "eg1Ef8DNZTYB42JTguSzp2Du7NePKCJNpEKgcS9eR2zL41vfKBZ7Mi3ixF8Wy5oKThreqsfBG16EW97j9tCCFEA",
  "key16": "Noj4F8f3KgcXm9MY38LLmj2nxTGeAxsh5JkDVuwcdXXSNtkCPArSA8yGhbLwcenghYcLThqfW8int64TmtDJiVG",
  "key17": "4jH1fSWc2JkwTuEJR82pDpL2nExbKq3g2VnXHGwNhWw15mUWXuwopZHJ71oK34NHz7pwiNVpaoBoUhafBGBXhxyx",
  "key18": "5WQnY6i6seM6y9DRtxfgFQytkFyWSCKk3WjVkWzHXdPsyCxf4Dx8ghNDbL5zmeMAmuFZf2KnxvfzmZbuNpXeFhhQ",
  "key19": "48wPxrpguF4Mr3bniE5Ct9gwLjQFZBMKwF9Vpdw19X19JsTQuzgSKHeRdTPzAcFXzFBzrEYNqH7pnA6j9EzygXS1",
  "key20": "5NbbWagnq6sur2kKvqZHEcdD24eN3tLJPGUWidsjRcF9Sz1fqTFYBRjfZ1w6wFpxdLcHokwK65z3siENXMHqWHJu",
  "key21": "3JBxmAFdw3sWwrXs1PUTpNicrWZWyoEKJBjtT3dFgNK9W3akiXDNjT7jpEHPJZNyzVnhEHQg66njWEFiGjcYDwrc",
  "key22": "48nao9cuNzAkirTQQ8YJgaBiZodgNiN6co4qx5a7kg36z33wauHY6GA2au7R4maX2vHcQYeSGxaJ2qJ5i2fgdxqP",
  "key23": "2GXTRko4eAcHrMEGpR2U876mAhetdA7QxTmMZrmPQ66yZ6wtmMTUEJgpwm14M7LidWj1StXPNKuLDrvyFs2ShAH8",
  "key24": "2hoEP5A1Gj1UXdUFcH6X4u1C2s5o7rrpQM5cwiGQLySo8dNwBDu4wGb9MCSZ3wx87ym8C1o7sVaSAKay8ZCNhtwh"
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
