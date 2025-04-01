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
    "amsL53RZMptegMFD8nnCZ1pVbM1ss5T4LsFmPc7SsEkActqgURJq5F2Fbb1pRE8Z2ZDWAkRVXsGTjoK9NHuZja8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HTPEQsfsfmpayL78LniYxNbwq4C6vkPuq2xk4yYMpjwT473vZuqKnJwiejPv1BLjNZWiykLrdSBTocTBFZ2qVNe",
  "key1": "3ZaXMnvaLqJFmHTKXYJnBWWqtw95K8LfGfSFc1XsiubJ6LidRjmD3ZQRTYPEXAgdQ4EHRGHkAS71t471smCqhYMD",
  "key2": "35fepd9XTcCEGDZf3LSvUSuiBkEJhDkws48SPbv92dxYAQMYNpqfwBDDm32rJQpvXPzYJpVTPW959waJGtdMViUV",
  "key3": "rxTq9jkUBQdZESzTzyZod9nKgVYhwVTg4WRpvxaG9gMZFJApmRBF6q8zzaPmcCzCjjsGVhcHu1gbBpvyZ1SF5bX",
  "key4": "5bjvCib9PD4wNTiNnjTy2FQejZcnVg5vq2fBXcUVaWpE95J7anp9ZEvHx78JSC2W3u8dCWyvaxAwav2pPBtw2yxD",
  "key5": "3evdj28c68iUMJewkDG1GyRhuH2yiT7J9Gc9qu2DCCbuKvwDq5wusFPWa2J1gBNNm2GVoGTSBpF44kRVYRRothzq",
  "key6": "4tbEdyGr1668ksrMNL2PGTj7hEdD7gkrwBdfq4e1fVC5saMZVcVviKsNQaUeiz8H9BhcWt3VvCaihmHPQwayXutX",
  "key7": "63Zp3v7rMVfEP1THXxrg23fkJ4gZfgpHcAkR4C1Nqc5wjAAgb9oZ6KF9Pk1L86MdreoH7W2WhifMiVnYGstQcjQP",
  "key8": "4wEruCB3KSrqQDBM24ib5AFSFoNmM8uF1SkYhQNtZjqzAWgjafMtR6rbdonbnvZE4mmSYhyzRbjjW6UfjFnAdRpZ",
  "key9": "2TYcVDrG57SDGLM7WaYKjbYTzfqk3C6dyvGbHBXfw62nTzWJmDcDJfxDuAVhmVNy5itPSmAjEgbwsPcnki6SNCKT",
  "key10": "5zdmbamx5RifYuNUidTK7BjdVk1YJ9ykpsZJooNVckwhggpp7taHTtCjinLPsfRJzEqjXUzA1dnjrUTevmU9dNxC",
  "key11": "43WyUVtE3iqzRY8vzHaXPQRvsc4jRshMs8fB1Vtqxf4RiTuh925EJYh4ssJXGvyLgwK8PEEPeKZxgUAicJdf7mAM",
  "key12": "5cVK35WggB7kmu6YR57w7A9VkCF4hsN1sSeosUwjHdJe3nffjYNj4ySWkUe6SnrC8Miq1wqguYkE6Nb7s41VKdV1",
  "key13": "5VgsJ1Jh47GP34zxYLGyv1mMD6fvNenwKq9KZYKGpaQy8ZoP5PhJSyEdyy8JJhgYYEbhGXLX5eLhMVcTgZ2HtwVy",
  "key14": "2qs83VkZYvYgQCZQqHrEFxUuDDcFcaxhxKRZ2uCXLMe5mPtSyY5UVEhonYYob5MSiwWXtqsnfkro8KcCUoREstDH",
  "key15": "5LUAMZa4jZCYB7jS8WdwCme5vqwNtDJ82wv6KmZnZXoDVdoD9jzstpPNZs6to7fcc6vCrwnMpEJsXrca9qdgRrQK",
  "key16": "5n8V653ZG9TeDR5wrzYRYy981uw2i6kMUy6oVwLXtgvP4JyY4QHXC2PaZYqrikWUw43J3PqycA8JVWGLKk2WFzCB",
  "key17": "5fXeoMzQxonQMcVXjfemj2m7rydvuyvMb9emLw26XAUhZZfoiSVAvoXmX8hUyZaWQTiefK5f6Y4jyDaHHA8Dfb7f",
  "key18": "2r2o1m4PKnVip7eqHwhvKxhqr4JNpJGUequ3f4vcdAf3i1ptgQWCpAD6PXwhVNwXmV4JHdo2Vwcjr3TGFY4ydpQS",
  "key19": "2Yxt54DyoQ57arvoBEwM9UUgTNFcEFFRkZMYpToXhT1MLidDiLzERu48EcAuec5enoF2KYBkSgfyoa19Uu6Xvh2J",
  "key20": "67Y2iiEhXrjMr2UQEan7CVDNNJ2VKf3Rdp9LXw1gSh55uBPB3kZJ4M8m56P3kz24ptTXLTxSwdVNtBQi1mNEgDgQ",
  "key21": "5PoEkRHKUvZz5HyitRPm4jqrmRZqu5M4jjUQkPraBrYuZPp6Tdt8MbDn9BzN9b7wj8bFN9aLFsHodbwYS5kUA4vG",
  "key22": "65btaeCAnCDSsfRDHhTvDNw3pD9ewSAKDrGjeqv6Vj32gfpDY5Z2EG5AkpguYT5F8VQRgezujr4EakKkem8Vtkx",
  "key23": "4QX8feWmHTHp86hM35bQFswvEmHTbeFjCzBEs5SjtPTyeMksDhBPasuZt4FbUDi4m3WQVhs594t7ZtntDz2ddH4u",
  "key24": "bBvf1xLMD74Q7F2b6Hbpdr7Lb9ipV84zYztR2sKowxTmA6Rrw3SbBnEarBFmDcB9hRdGdRTXhVtacZ3PzmXWQMH",
  "key25": "27mVzJ7BecUHfmMkVY3zcoxnarNBNZ3UdAejNsxJrcCAhRMkCN8miV6GWKtteFQGjieA3GLiBKBnYhgoL3UjFpxh",
  "key26": "58YiF6SY3Vo84CcghZH7hVueYGNiXU8ZrQGRt5hhoaM9nmjRLbiYxFaGQuU6ggC6DpDAFTzPPoWkXVRSeut2PMwD",
  "key27": "ooZhsykXV25mNhEjAhMB7jqBfxCaHkc4M21JpdExr9sfDTDmTNW6wuu26HpwsYf1zDAD2wmyZ3eCEM6TfBmdwky",
  "key28": "65JJb2wgvCvDhsZ4gWiwTAmVqKwE72fT6iBxFNea9k167QAWP77MMVBUUr9sCexZFbF32WrZgtHaA3f7hBZod8Lw",
  "key29": "5eF7wUuEd9TqVBovpW6gp1AuMi16Hi5WA1jjBF2rZzCjxPud1zkusfyNDU98Yhu6q1rU4siAmdsYzFGYkeLNEMPm",
  "key30": "4GxhQCJfvntPKcdCXdCeX6pzexBTJsMCavuJ2P51HyfvbzNjFsEXrbcqoWGJXe9TqdnFD5qJ7fXf7JZk81so9pQS",
  "key31": "4mfxpdGEJ2zjRhMRFhHN6c9WVBx624pFNTnbscEi853n5KtwrcsvM5fpE5qnFPdHhyK7LPbnwere5qHoAXfoFXBd",
  "key32": "2wHZEDCGscPEuHa2XkGCif7ettbPc7PJHqhcfTGf2F3XUAzrMps7uTUdGcXnXQ4n8xcH7gPq86MmZBaLHKeGGZC7"
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
