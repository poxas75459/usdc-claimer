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
    "3oqtFTjvC1934wEXQSzu1259Nhz5kLg1R2yeYANZNssGwr1u3vXPMERGHx4qr7MRatKEDvbSPqZ5S5JBzmRUoQHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ptZzVanEGwzvyv928nUMXFBeFSGdGr5MSysxvANgD89jT9v45VRzX1hf4wnHF4gva6n5aPC76fkySWY7nD9c5R",
  "key1": "2HdcGZHpvX2yTy56oL5XfkoAKjyx42D9ZXZsE3isYFkznc1zF7WDZPwXPBciJL8vwGi4NGg6obnGZki4X2un5twe",
  "key2": "3wJghVmsHV91T25q4EYvdGm4xToHoVBr1YKhwca5sBW4PPweJ3zaBnsxoJ7BSh77hV36LDwKN13DBan68uDkS8ud",
  "key3": "2bRUNsTns1BEZCVfve2tcvV7EdKDmzj29yTTrVNWqL6W7zx33mYGNgzqatBRC1DW8eSiANvPCofWRaPEszHAL6ao",
  "key4": "5RdHrYZbddCzkxKBfyzgh2hRiVxK2ZwDFrTquyTh1bAH17nUimPCkcCaBud22GqL1KmqJs2mK4uiL1zgmcZPCnDQ",
  "key5": "5SJA8Jx9FQyrgzxiP2qrfSJrPWHhJDPKVLZezfasCyLCHF6UeTHr52pyuDgePTGRfAxvxXPHwY4MaqNWFvb5WdP5",
  "key6": "4VUXhz1RG2R4Etw5HMDFzVqaEs54ALJGVoAxioo9cBZxTBgr6qo68zRdEa5cqcqQnEUc9BNXe49jqKyormBLuZRY",
  "key7": "4buKhSLG8P7GfKNqGZYeAgZiCaYwnxgy6Gxsi6fbkWtQ9gFRdvSAEVwEUU6y2vcHjHz8pjhRAQBMdbJLo8nmJnRx",
  "key8": "2teRkx8GduTxFnpfvnEcTanT6omvF96NRLiVwYcyjd5zikQaeHFXDmVwC1TCizdiWWeAZfWKN61gouzmkAr17pYa",
  "key9": "3k6WFu2dikW3xZH2qFK6E6eH4vTq9HUEQKsMzmvWh3aDsM6zsa8nmZpcqhYjRAaCwuHXDWi4RVxL3CAfcrWtLnDi",
  "key10": "4FUDFvQHYkKzNE2g6y8CMvGUkcqiNVx9jg8uF7XcmD3sUEJUBowzNz6jm6MZFqnFhkKX3k9s5FqsaskyugGRrYjp",
  "key11": "2XUeibqLYv4ZBTZALN2VhFQjmVzfpBvvkpvcCBMo6PVCYE6CdmpzpctnrEFE9uQrZYVgHsqRBpFWK512xo1xUZ4M",
  "key12": "5JUeqrJhyscMZwnXXh8tPaJhXP9QBq4RvNbzZNYjBUaJiwRqP8E2eLoUwVzr1hNhmDF9AMuX1ke3WjfgjHEqwNxC",
  "key13": "4X44Fd6aYbGpcVZTCWPtAptxvbkKEznpf5g7A95LYoFC8hCUJsWKCwYg9ud2aFovqWu984osNMmeDawyhMhrj2uq",
  "key14": "LWEk4STdpfyPDAyMDJwgbRCk6AEHjBVSu8iELw7gZDXwEZaVQ1ciJbXJ66XjHZnA4HYwPjJfGbVvNHT14vttvZP",
  "key15": "NqiofHowbmFmUpCUgQR3FK1HQwf5Vz7yz1PqXCRYAvuuNFZ3S4PvnVdrcDUqW2DaLp1J3Pn7BswazrEVQJA4MfC",
  "key16": "2rYLrckk8Wzm8M22oUhNzengsMLTgXXcZSp7dMQXBEEPvaPsZFkXB3KTRjNsgKboc7cy6B1TTq4gBP8dHwkPQUur",
  "key17": "2Gk8vvyz54V8EX5GWFqc4WXwTSkxs6MJQ46PYfmsXuGnRx1jQqcrGKvekEzB5HLie7njUMktYCNgTRdsQNLRTh45",
  "key18": "2bMPToq8XjpKUjxmpSYEeWaKVY2QB4hHnkH8uacwfAGi1WdC7zRpEoXsqMpJ5BxKN7vyGnTF8i3a6qy2xjDebK8t",
  "key19": "SY9gJhajL5qisgK6JcuQ8H17iF3L5EADRqGFGso1qXv9i3DKqafWHLFmGewM74ruJEm3yy3tTze7QM2K7MqkH6S",
  "key20": "3rHvnFNeon6sn1tmAdcH9J9bFZqsCboBqjFWjC3WkW7bcG9pWuxJPSSDqav3b5NDvDrAwEEYGBnCSXEkHnH3WhWq",
  "key21": "4xcfj31ftj4xWbGqS2UiLwW7d3LXHquiQtBD1aYcMUDSWVST1J933AkQFT3dBcwSkQ8BfVuPL3vPoKMrAxyvfgu6",
  "key22": "4Qb9QUr62KvVBGeTytTfYgSgbY8J2qkyZxGecyErTjpN7g1PhZLD14w74o2eQq7wWZjNdYiSUbisLx3niHajX5BP",
  "key23": "Nj4idUV7vkf4pUESCXuh2ge1BCnqSgjgK78otx7SA6o45jWastGjYHbyG2GzGo9kwM8593hFppXA6JAwS5gP8Qy",
  "key24": "5Ro74tZqCUW81b9eLxVeb9CyxAe7uHdxPQyPRDDrQwYJHxoHhT4i3BchV6Hnpt61jW1mxs2imJQe79uTtzyq8eju"
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
