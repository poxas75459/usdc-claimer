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
    "7ysdFhTdAzzbrTsQuWLztbHwhkQqbfoK2y19wjwUoKYw5kVubpXttAexafesG9AezrpUtihxsfSHkvriAt2zH2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569D1MRvwjhUT4WTYEJcNLF5sTzL17kckFqQE8gZc86VAe6zpw1hDi4wV38dV4e2ahXuaaqNmHDT7KuckrueYzgo",
  "key1": "55eT5m7WstEeeyuzomAjVGqNa4EbopqiUjsur9FRyoRWRb2hhVKH9sqenWW2LGr8rJ1RepoJqj5Z5a1AEuQkuavv",
  "key2": "4mXanRjEzfXTjbBXbvyd5uYpXYYRwz6yB47TnruroDwCwnUE1zGq7uojHjR2PnQSt84uMWrAu4mUZm6G3cBwbsjs",
  "key3": "ghHmE2fwqaSydH6io3pWKFedPdy7wuEpL3tSvgukUr2SNpDGpyGwyx1qv2R2LSghmsw7bH7uZrAg7w6rFiWRZ7F",
  "key4": "4vCa6PLtyRRAdK1Dq5zti6AiKA16xtC8gsRetaVuvinXmR32jgk7hg6uBXYRWSMv6SZKfS7THx2HR9ZxPxVV49Ri",
  "key5": "3244kkW6J8CkKCXWW812BcBiEUx36d3sWk4VhsSDrjGVdGUfci2kSWp9tX2NXihgCHmB92SK9map4nk1i7obaTYz",
  "key6": "31ziFTyx4SUYfmvNeqZXzgW5atwqdzcaUsXz3JP6FJkx7GodU8NbYNePKTBWZN5voBRENEt3RaY6rcbWP8zrETLN",
  "key7": "5LnTFybQVgQKEd1zx2yZ4UTHVdXQq4G5S2D4SpTEtbG4ZgZwMekwbQDUG3ogU6pX9m8jeL1MNjzE86B3Yp9GCTNw",
  "key8": "3TmMzmi5qiauLh6PqNkVzx119Hjwm5kMpeYXwjKi4KLhGijx3EbYysDXZg18TEhGVBXppTY84fNtf68m1mnvD43E",
  "key9": "X6Pgi9qoi2Za5PfeJ8o8XdtmnidfeEFeDo2tENmGrgz7rDEpXych3dnfCdJvYtzvvUn9v3SfAaVhs2w2bRgW552",
  "key10": "3Qn3mFpAeX8eJiecAbjLHWzJ4yLULt92gQWw8fKNK9kYskbiRwPEHyAS6t8oqktnhvxM1BT43Lonr2mHSWhcJ8HN",
  "key11": "3YJAGn4oyz1zH8UEDEDDxWbkqqgjQjFiTtH58mxnTxTPDZqbMc46xM3Xc5r2gmVKNEK2YtSfXCLFk9iNrdFn61X2",
  "key12": "5oH453mqfMqDwKrSjpx2RNoHgCpXCUq6rBnsNctmDkGaGUwZhkyULcKFrxzVPZJJzGHBWgKRU9e3UyS6eVsTQwzV",
  "key13": "2wWsLdF43reBGVP3uJBXoPQz2WJ6VnYTXWfihkBtyGqkhPk1wDC23gs7J8zRyEJHTmHa92TtpfCMJVKzPJj1nG9M",
  "key14": "2tRmy41RKhLGe4FP7Era6cRMwiF5ZUxYEbWX8QhaEPB7a2mXn3WCgHkFyhD96qbCwGurzniHGngYFDvXeoC4aJKQ",
  "key15": "3jgaaCnhHGtra4zEVtKtVPBtQi2nRhFj2SKwMnR29E8LedC76CBHoV5eyYf7BjpbstA5dRckkZ6fkAtHmL4KQxBq",
  "key16": "39Ea7HxtMeuAtSHiG3HQAPHj6FEyBVjEbyDdbTFDY4ntSV7igCF2BVGwkFAfJncCA1mxxwP1168Hry7mdbmbq5xE",
  "key17": "4Wasz7zHNbd9gue4WxPfgLdLG2gG5AcjVHRUfjrpXYx4QHbfFjn6QChXxwJ62W6jcd1zoh2isBnmBEYkLYbDyRZR",
  "key18": "2zSuyDu2PTyAKeEwv4vrL48Yo47YStkKzffJzKSSMduZhikix4717u9tkauGQuJ1Kod3H1iyEb8z1ySDcoeuz44F",
  "key19": "45eWWjL2oNywVPTJrJv9B83fHjAt4542rE85CV7zzTqu7FgPt7Revsh1Xinhej4C3HfzXZ3qtDBLGji8DTTHoszz",
  "key20": "2E31YFv2YW1tomfV9npykTys6X9S2UzmfWiipnZF2icwLumodSnPewvpXG4sNMECt8Du3AHMTvGmAgxu6UZiMa8X",
  "key21": "KNxW1bvudLHtPbpwSKHggiBD6of1DjsbUmTNPBKnhtsCRypTb3ysFaKcxHkiTGAMDbsbrHL26F8fKCPHX3mukF6",
  "key22": "5C4SAGgLrGDKxyYCJWVzR8T9LZaeF8UGcQjYFRzWVuewxvsAPLxasVbQWVmDLrJMfmYkn4aukVWB9mBDbPLqyxm9",
  "key23": "GE2PRXHeTqqvC3vyX1dtYPtj8FotCoX6FMfubjvNMeFCti8yZY2BXCsy2eDFtBkWUvJcnGhGjJu8HV3U1xmWWJ3",
  "key24": "3Tsboy93R4C8Nd1S9qnqvB7SB6vWH3NnVSDkCd7xXiK32mtiHENdozsN4AUNYjtGaRmpeRhL7o2JV4bzMXV7tnSB",
  "key25": "nT45AtEPaPkAqWaA78jfcYcf9NDzX9JYj3fsUiBPGjAjqpLx9fUC2HPhbDyAh66niUKekTykoJM2vNydTM5GyFR",
  "key26": "FHQuo823GhozQhkSx2ZRSsk5aRoZebLc8r6sfZxUCvVG8XuWj4cU7THJHc689LaKd5AQ8SeLJQBJPXHiKQbgdBc",
  "key27": "2zdQo82DVT4rv1SCjuTmKQSuSL1spCLHufoDhxL2VTpJjbRnJwcRWthwQNcsW54T3yWRw6QtCpehWJ92qZmNs9Fo",
  "key28": "2rhEn2VL9mxUTmkZ9pk9w3VGhNZZgST6UKGVbLDZtny4LMCpKsozfYemPoNxEBdFmZQrMtSCsdV5UtBScmK3tXZp",
  "key29": "21RsQNwK75DUSnJGagY6uQDJ4MeveUmnzy44D7Nam4QviwxoqK4vosKaqGBfwtFSTJhL34nV8HebA2yBHbsNpfEW"
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
