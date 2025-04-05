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
    "5mJmVpqRw9MQa8ZMdSQDxMmmMos9v5uwzByumoUoJSh4cMWv1o4xcNCKVWpMGP6fFmsauKbcxPummPQVhzLU3Nov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1267BFgwDNFrb4kxSepARbqgVPHT6t7vEtuksDUCfTTyibdMCr4g7GgCuu24nn4KcNbyBDuKpX6qbPCFYtN33W18",
  "key1": "5dVKL3ZAFYoHeNQLEBHrC2ETdaWKkViHkzukRADRoLg7byHcceP7MDqYSaTUHUsWt7nAiCZ5rMU4S7di1B8zy2AY",
  "key2": "5E6dKYesfT79WjxL4qVjAvgKxvQZE8pbWXGD3WjLNPFkmXkcoddocaBEJvmPA3c1suKWuSeGyEy7c8ebHtA88zvE",
  "key3": "2E8FZoBbWuD5W7LCVmETNH8DW5eKWRYAroAx9Mnpw2RRuNqdTStk68ULdrtEkmSBMUzqaHCpjNWwpLb7KnARSwP",
  "key4": "4H7wPU9KLDRUUmM8hUDeg4qsYnFovR8sATq8BAC87KL6JtXE89ZTsvSHY2M9T33NCQesLVqJ69c8f3CTppxYS4Dt",
  "key5": "3ywgUAsVBsEun3TWvMZodX1hmCsD4XkMFobwMRqZgynC13t5bVrPYY8bqEiQXBzf1YozpjHy3V5J4kPPy92HiZ7j",
  "key6": "qrJbvcmJPWnjE4JD6Q2nqEJCA4TiAfQ1DveNZ1CXx4LbucvHRG9DrNGmnYPgj9sp5HD6sHWz1zMaX5qCh4LFFFU",
  "key7": "2c5Nwvz6o5Eu9He1iEVeM7eYJ4eRmhYbwXS4PB8dajo7TTfs3esDuL1gqFYwo791wek1UJtNa1ALpo35oiSrVwXz",
  "key8": "2rwG21hytSC476rCgznbzJQH5dVbPo2vRbnvxow43u4ciMhjKyHH4GkJm5BzedjoN2Q8bL1tguxuvEG9BLSxWVnB",
  "key9": "45Ty7t1eJYLR1vBLTjydpniobqRB6DnEVPdxpYMkTnyH7NQbiuESTjUXobcJ5hNZEGy6e9HdGVkdeNsjsMLohet1",
  "key10": "2Fb1UnS73N5C4ydh3LDWk2gWE56677Q9SE8uBoXcCWZetFK8sUz5pAsPy5siMhSKTnXW5zKxM4153W9CpX8212E2",
  "key11": "5bR82KgsJcJQY2ZAPcxKVVCS3Y45s1jrLCEt8HBm7kiut5jarkQnDGsBHjdGeHv1tmbB3WM8ShPDCn34hcNdmSr1",
  "key12": "5Uum6aacSbtQ8EUFNRvYhUtbo6hq8D5baMJxero5cAFAusXDiSmD7oRzrVftGTBTU5QqYHq8gsTWT42yo4ZrBLzX",
  "key13": "23RsnPpy7GAuaFtXN5r2BvED3wpsqHLmXefd5yQVH6F8A6X81a6G7DM91UikKeZKMb8R5a3uFMsETYqp8cDVM2zp",
  "key14": "5YhTAXtskRopDTxYQQAbjjG6JYRwuoSX6poa8mxxjbfuXJ14JXmdCXf9VS3GBchkQa1dfoyW5DgRmmzZF7ynFssq",
  "key15": "3tMygGJS4AY5UspLs6YUGacefDG4XsoKp5Tq5T8Cx2mGd25gLYoKKYs28t2N1LKNGwpiDGXkes6qkmJhZdfLhyLP",
  "key16": "53vqMrUJ6i6XUyrXwPnt57nkz2KdQbMLoabRStmKFdyg9eXbe7YZ97QU5GwxkFMqezWkaiua2L9v3b8BcfFzJUa8",
  "key17": "2s9TYjiW14aE4WyA2SaWVVY2vUr4MMftxeYrfxJ8GSyvcwax9P61WzYN2eX8k5m5hztdTLHnU3UxbyxrWv4BZDh1",
  "key18": "3eBWs1FSekteUVEEsb4ttxeiG8BvvECrvyDAeLdauUu86xBFGEvoc9VADv4yZ8ETwdYjE3AEBVHZeCvj1ALY735U",
  "key19": "2V8dGucqLsoRLDQE2yhUtsJnAGrAGTmuZ9prj6JLWfZLH27sTdQ2EX5pH5g4LmbhLLv7AmDZ9SdY4wprcEsaQ9uc",
  "key20": "wDhhmprFtaAvRT1TXDeksRjGExofZDqY7L5GeGYd1Y59cr17LSeFvoBE9DHDW7GGmXkEgddpiURnxtYVh3HBYD6",
  "key21": "4Zk8jYSszwRTkrB7J7M5EP98X6dL9LJyx499Tr4jEds9vsquN1Y47X37QBzuM9BgCR7WEKtenMsQahfUV6PpaFeK",
  "key22": "34a321GgVP93bESXtqf8awVF8p7iBWTR7VaKRuCdbYxS9XTsP3TYxA8q94xbtWN3aEcRZdQ2mdtGYocKdnpd3i69",
  "key23": "5NvpWLr1rTsE2ipek3tYv1bwXs6abTr8a5FbyAWSmfMJUfucLZrHer1tRsW5ie8vfqoJRrP6Q5DURiomJrfxQpVz",
  "key24": "5FbP2eLwFmFBndA8SPeBoMx8PuEKriFfocsjx15KjyepA3H6W5hYtXQ7cPvrRewVDZamCj1jVaHUcxCBJmgjsmrn",
  "key25": "56Si6RDz39TLyUsVzoZDxaRKsUrMYfYHzg3ZeWajYfVfRZqfJzido8hpR2v7SCW65ZixEMdrkr3THfeQfHVe6iqo",
  "key26": "2bn8Crr4RAhiaKr4mRxL9n67XMqEUMEvEynMxne5oBxNxGcUe7U5GeBHKzFDgekmcXUz1kL3b4LB9NvdtGaDMxHB"
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
