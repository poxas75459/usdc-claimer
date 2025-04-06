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
    "4fxxvEboJ46AdHNi7xiBPoZz58vX3M5b6Mixgacte7q9DvYwrBtdJVS8GgfwEopLccqdTTtYEap4zgM5hVkA6e8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZTrbp7gUrrrMibeorz8RHQij6f11qWqDR7uqiPY2KV3oWgpbhxMMG5a1Cu96VD9BsGjNYyzub7FLGfHJgzSNa3",
  "key1": "3arZ1seNhEEpEu37eBd3FGZ99gC4T6oSDnkg7eV2tWkq49H2cukt1XYLtxwsuz3Bb33VybkUSscDGN4cMhMFSWoX",
  "key2": "5VoKWw7H7jVsohKGrQc4c9D83nJQy47hDajKQQXgxeEyzTSNYu2yG8ycA9Ke2KhiN7jtzxAA1uXAXcJKTzsySN2v",
  "key3": "5nFBk95xvNtPGxjRG2yDLyJGXDjrmWEUfiUr9GG7UzpZ7E1GP3R5ktfkA3mkXmG8YmLJXPyCWFE1me3KTNCWNV9T",
  "key4": "KV4kUJJGcBGrvpyQ6gQ5a8Ec1hmWtwBgbnh9wH8DRXyw7p5mdJG2yx9buRdBVzX1Fv3eH5Qz1Zp3CABf4tb3pgU",
  "key5": "3KTXRZnMWrNUiosDyARU3ZTMULCwADB4iT5ZrabxdNCmZZHTe8XLXenaWpWZsESnuEJutKt3irQpnqBnTConSVjQ",
  "key6": "4oWsxuogc8zD2W6HJnZzhkTsrxeetKNwCRDqNLUa5RMvnkPMWVR9F6ETpLX2gicsiDNM4xdAJTQdck2ZXKPeqnuS",
  "key7": "57hs8sfqoTLriNs3DnTbxmkdk76RqN87FronWQGy3JRDz53FqnvSGgn5GUJjLNPr3A5jhxKkzTo6UiE3dLf3ebRk",
  "key8": "syMZh1oLwVFGS6DZRRtnbTwB259h643uu3gpGywknzMCWRb93yUcLR3eeyvHcaCE2ZZXT4CNdxuJxUo7wpqGaoa",
  "key9": "4TpmWrWEiqvmMJ13PPRWQSnDPuiY5EBztdvnuX2fDeyZ6D4fZ6sxQ7ZnuuEaFtZQTQzpNdjo5YVRJ3voAvNbb4d",
  "key10": "2qYhC3wWctCDoZgb7eLfhAJafpFYeyXUZ8MAZ8kxzrJArfHBMSRFo7CXRoNj9NsRwx8UDQtKscacgsSkH3kJkrXd",
  "key11": "481ngMMTRtmotjEfAYBJ7fTP8ubczkDEkncgAYfD6ExCi17g7xLXdMRJk88ErLm7D565R6VypGgYWW93U8kWUAeh",
  "key12": "47qHbmgcbXyosxpKhswATwYsUXstGTmPhrUWz8QpFahVkPbBj8mpZ2ZBpuZKeA7x3rnGwJESpZioNvEqfNW8v6eD",
  "key13": "3vxnWE9QDrJFoEpfR4Du2u2uYqQSxMzDfXj7KuCB1NZ9A8ADLwC73i4cbAc6UFk4iXH42BQHp7vhLVA6iSEYwpC7",
  "key14": "33kyqaQ8t2tup32WjoZzoKYAmPPHuiZYku5CQKNLUiaAXHE9oAH4JmhxyTBhinV62f8xweLSjUut1dnNBWyg9S9C",
  "key15": "3gu9uuzrpgNNqaSrsREACfMasxfe6wErQ6Sy28JyqjGkx9RizdUVcmYKy7qZLVTh4NbzoeY1JENNv2YAdYcYqqsm",
  "key16": "3YMi3N2QA3T7TayvS9cfYcoJsA3URXN9D8aDgyegFDk9oDvPNpGvsjLDyoCGaz7wHHd1WLEtgD8aRx1PFS2W15xZ",
  "key17": "2kFkpzQEEQDxFcwVsZnv72PKC2VJsHe8zj3c7xY4ZFDbMpCanjoR6uF4vgxaJgDWweTRqso9zRbhhCtKH194wXYi",
  "key18": "5UKaDwWRXa5qfM2rAh7BXvPXxoMkGEbBBg8Yi1YJm6ZB1xV1QeDaES3623aLrcjqz1nwiLX9WnV5BW7ihM9e77bj",
  "key19": "mX61ankFfeVKoVmjaTwKnGXQU5zDeg6QpbmmNeWhW7vx8EaTn4ZLsuEKePhYW1TVN1DUiCU2cP9jrCWoVcrRRuF",
  "key20": "4d8pTkkfSNXYbve5CevaYvPxHphtWTEiccFCTWbVKDGjVTB2FxQktFV78F1TtjsBLrFPVrnyChSohGWrFCgNhsAE",
  "key21": "2WLnZg2enjFqDkZSkctpD4fpJMdci9GxFKWpDYi5AC7RB6B9K4ZfijmUq313kgfU3YPV1fm9DumWE31ixmog84br",
  "key22": "5M3mUnfTQjkQtZptnJ7G78UA75FHnHwUE3gLFBwxa8AQJDajZmdtmiagxwTaEsCwjjnTGkq6skALVhnQ9ThdEWD3",
  "key23": "2JpcN6tk3PGRmy8m1QVZqbftfEEznesgGLrQAHhcqt8Jsd7orLi97NUFV7N5eDgPsKGaEWjVzDs56Q9ZNesr9wp4",
  "key24": "3TcYdDQSaXLdNwwTp8o2XbWNLBY9d6EwQjHrryaD5jhQGdBKwu9BWo1QLQWkySK7h2it2LNp4b2sozWXdGuPS9am",
  "key25": "2HRFamgjwFpeMGna8zoMycGATY7W94h6jm4WV3hHeWQpwoqZgQEFJuW2nsVtfo6Yzev8NV79be2eVdYjqkEXGKyy",
  "key26": "5r5qnoutSBQeUtBJgG9cF3MMqMmfVxfsG2vv2AkBybHsKaj8jEu85RSwDQKSQerbXsFwpUJnCpRZL7x5ioFgJvAB"
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
