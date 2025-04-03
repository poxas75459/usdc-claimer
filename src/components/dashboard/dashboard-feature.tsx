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
    "2JwR4a2av7WYWFNSuj1rfgBEpdD5XcKiQDur95CGJXSNqW3cMWQVuufow8faueL21Vx4ssH3KPKdjisobZT2MKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cr7Tu6C95MkhtnNDTkVGJmsPXjLw5W6DLp6b8CghepdkLoXhajPQ6ThQ7mFwYHaeHtHGTpBCTD19NpNbPhEYzbQ",
  "key1": "4nkS5MrDKdUeuuTzcqnTXqfWovR8yc4XBEaCLsYfzdiPYagX8HzaBMN3ckKXR9RNz3rAj68aCNxPd2U4K2SdoZvV",
  "key2": "4vHmYTyRh5hYUf4qa1mcCCWhTz1roKtADamauLHSTNXg1qeUrjEWThcFKR6tsaP5Lyd1oJj3so9FqNqtQ7uKGnSJ",
  "key3": "4gEFPsKWa7m9yXnbTESCx8xz3v7s7SN15KJXbkYg1WEJQMAN19KpkkXsc46Ntwkr5Dx6nbSwBZSn4UvExzWnyzck",
  "key4": "5nuP9QKTcQbQipMuaub4jRfPfrXsS7Zrh7D4CN5F7AsvB1N1JHFBrysFuRqYVHhVt8P6MXrcqeEXCWLVPit3H7tZ",
  "key5": "57XUXXUDGqXrDtSfc2rg68CfvebhVFwad8ibBaPE6nScis7kuKBN1ux2iT9kSxAVfrvR1XrtVZCnFPCFf8v6ptuu",
  "key6": "4mCCqoP8rXzu1BQFLBQczcNdDomtjzAFFvBxx3f2wzPg2oDVtpi1Fa6MiehZpjN64smf5B5SFZQvfs7FfunDfTo1",
  "key7": "3BhD4kHghYYtPbGJt4atg5zE9Zk9D9VqXs4SHoXFaSg9U4mH1wgJq934yF6yD6tACobs8QbGQniAQ7Pvyn1PakWg",
  "key8": "3urfyB4ezcSbVv4JM9AjVbwypBodTEWeZiCWTeoMhSktFZsaxSKiyk5HyJQXAcp5xK8ZSg7wuCSJQFwxVmCBqeAD",
  "key9": "4F9XkVbX4wdFLGQzVoyGmqLYidFhhGkthqCDjRuGhsxiDSdm3W1qN1PAYtkGuVqKQE3YYESpFjEwf4M1CBn5Er7a",
  "key10": "41BhNqQHxsPpepxWYiZyN9r1SFhc14xSSwYu3vFw6LM4XAgG9JHmtrn7c1Vwj8wNPVoU8i53mXQdCXLPhqhSHC9L",
  "key11": "2FiBUjkEWTBtxHLspZ78jxSeYvM4UHR5tUPpsj7yoWok82xmHjE49weUENgmXRVgJRnvqj7SoEdZR2DG2ewzejt9",
  "key12": "2TqqTf2b3fP2qahmZZUTqmtnAofRu9h2yANRT9aXqWPygC83iZiomS5V1sZdu9iVNNbHhgyVG5HtdQVipAsXAdYC",
  "key13": "KggGqZv3u1Ghchi49us2iG4Bf6A5Fu2PQFKo59gAjqcQ62xbf4ooMiKxR2mFvVJ5C19oGB7AwpoWiK9dzZuydrz",
  "key14": "54LfyQzdhMmm9P9nhc3bah82MRwndS2U7SaZXZJYbztm6k4z2akQ6dkY38AJk8sJof9p67AT1RVgWrVtk1ACBFo7",
  "key15": "4hAeT1qr9C1JrBJrWz5WBAv5WyJD7AtifwYDz7s2MdHeSuUszn7s69ySNdA6E5PZKTcyouf9za9ipjbmjxxSXJ6f",
  "key16": "24GVZ4NVB2biKc8taW9jSNBrLLCXVMxCB8XYxtauowrzpUj4Fq1APQq1A8qztfFAQQ5baAv1RYaCu5r4SEEmd6zZ",
  "key17": "2jJ1zZiezPmSsZAfRacQ6Vu6yFdgsvJwaEKVVDZXnvTejc2EPm6PnN9TBfr5CW9sPiKJjEwnhh6kgECroWHyRtNe",
  "key18": "4eokuNhALJXLkzwX8mPk1xMEGk2U8wRv4PuPtKGWHQUGEXSsxVZKPzKnu6hzoyjKARe4Y55F41HZP1qM12c7ssaH",
  "key19": "adqRBWX2hRygV5Jff5B3jdxJpFgJqWQvEuNX1Y12LZtc43xNHeUdMBxkvY8jraWCTqV5kT1czKdoh26rebgi3Jb",
  "key20": "4PchN1y9ew76hs1gXYhNEaKDuACLCbseDoyEeRFC23WpoQVFNBajyfzoo42qtuyYZmHUzNbvvqumzHZdU1P1m2yr",
  "key21": "5qqbYHvQt62Yo4zBE8eupKRU5EDnut7zZgQzujCCxwpJSaNgstcyB6npgCNvbNcXTqjmgKzxNjUy2CuCXCwWhzrG",
  "key22": "wSkruK4f2uyWPW6DZrY7qpy3GUyJPc51KGCRPUjrRJX3c2Z5hUaAEvgAUEuqNZhKXEQkKrLgL2g3E9NvVvjKsX2",
  "key23": "rxAfakeTCQgr6ajfAbiKmAB55eMwqKeiMpxQ6yaZQNrf1MBzZjuYUZHiLwHXbQEXc1fiiyEknSoFB7LKiYvBt2H",
  "key24": "4QUCAgehmcW5Yfn16SB8LcTx8FNS55Di68sfaXnioXiTTRHyMk8KYpDHcrGdidVY33PoW61pMMSiP6PtbS6bqz5y",
  "key25": "61pT2dz52Lc5MQ6nbPjA4rUQVaKMzgKQ5jF8e18Dx92gTgFmcYqmDrxxFRW3UGMXrzXh5gitBCL5ervA9SgcQEW1",
  "key26": "2tCPUyKiBYoPsYCmWoSAgbvb7NePAFFDogzVPDzkyxHVTp9xvVHpMXUdyruUjLfXF1raENkx3zayMna4FwPvm68w",
  "key27": "5NPE3tuvqjMzCoqqDgbY4BP5oW8X8JSB3Eqp4LQF3zDPL1pJYEkdR6G5yP4s6Dg5igddQKr39WpM5gppmj1aG52o",
  "key28": "5gzPEoeCaCBSTJx9R9xxanZzWEcpKoy2s9oRU65Dqp2TbsQQR7eFp4kB53vF8GGfFKkH6em442NrBxqNPjdfWX4B",
  "key29": "Nn1JPKntXiCNPuwamyeW66Ya3Dwd1sT8WfZApUH3oxze7Ea6D4ZJmQyJeHcuQunjVKDGzRJH8reqPXtJEvr5ULQ"
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
