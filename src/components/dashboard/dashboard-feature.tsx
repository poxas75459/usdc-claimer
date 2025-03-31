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
    "3yq9JGDnS92Zvtjom84PEfPNh9KKdYRpcARpVBpMdWo19ZDkosvAW6537L346v5zJKRLHk2HGRYMB7VyZ6Zg2kdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLhWbpLLnCA7zT14xqPQAbds43LFRW8NgbybFu2afwWm5AReJ22bs4JwXcD9c2x3AQEY96ptxfzyEP4tNkHWhgc",
  "key1": "2wmGk1MUUi2944emhg9dGR9mA68t843UKRtE2HSzYLZbgkwhMp5LpZtdVDEGhagfyz6eAdsa7UYTiukySXZKdSbw",
  "key2": "5kjFoiWakSdeVxndtZFg35TEVT7mbXc3KbJzcJ6Yz6oPNpL1m6V8v4WiajgSLmRPqEwbSkyqq9eUFC677ojT37sn",
  "key3": "nFGZyBCd1Lj3J58xGfU8BDjjEGrGUigcH1A9odnnDMtBLZDbdDTch2ic9h3ABHDeLPtaeFZMtfGA7yZdPMNo8T1",
  "key4": "3aTfQUA7fYcSqBAKL1PTJtisUgMVTdBC3Tnpw3FaV7LTa9ZBAqpXLvpMqY35BPcVgbacY5i7tnWX4cApVodeXU97",
  "key5": "5r5K1ASkXxkLABzsfF53zMBgUVAjPfbyyk5oASAztC5pGjQJUgEtV83Wc8Kkt7tR2QLckm5bK6kPjuSY77MDW2qw",
  "key6": "Poxqc8aBR1DdTX1D6SjgTaDwnnxrARBxRKk7eoKuFvXbRCvSnU9nmd7gexFf2pGXomXwU5YcmJ5H4Bzei1FnYv6",
  "key7": "3m4S949rpPUtm7xvVjPtnJ5QYxi4DrxFziSW7R2Ex6bJeHQc22AoaoNToFwWt7pmWWwBTNyNu8ZK9nHP5cjzThZ",
  "key8": "d4EmaGU26HabuUudY1AUVs8CaJE9wYamPpBJgTH7LZsyNSedwxtfifdXC7tKZdRr8Y1NdkP9rSN1doj5Fs2AdkL",
  "key9": "HH9nRKNitVeVk44nk5PuRHhygajhvG6AQ9JNQDbNyqMFx5rdjrpqCrcz5REPcub1cbWHt75CQU5PJmuMFdK2GJG",
  "key10": "4NoJ4GNsDRfYUahKDVSR6XBECZZ82ZnNZeuZpkWZ8JqM4er6TEPia16kLAYEdxdCF98FzJ5XGJSvNsXdv9Y8PHbZ",
  "key11": "4eBTeVTewfcxNnp4CUg5VUbq33EC3uWjXdpibmVk1MRc1o9cccnWenUznNkW4yeQWRatRe9aoCrrNkhHEiaCm7wr",
  "key12": "56Q7H6rz24nDEhZcsADFEieBRz4V9x2MR81MKr2ahAy8oxVoSiWHNozcvstSr928c4EnNF155XvynkH8R9YzmhvN",
  "key13": "4AsJ7vg9tBcPRvxCuiaZMpC18ZXwHtqbbxwCg1pYzhyGVQkv7ee44ZDLgU5hWkV7XqLcRbS54EFJ8Ue3TRyMhPfR",
  "key14": "3gBSJ8joqJaahM3MQC52Uir7iNxgNV2Mky9TURkKZ4t7t6WF45tKRVn2hEbjFEw8EDBVsRCNLFSa9s25ZB5VWZ43",
  "key15": "STqEr2U8WXFdZHt7ZwwHyjb8Red5V9NZVqg8WNDLuYf7gqNxsz2wQtQTrhbPba3Ktshi7fXVP6enVaD9KDq1DRK",
  "key16": "4YHgN6QZPH7iHfbGF7NCB8nspWK9CW1WB4zrpq883zf6GMoBhYtvmaJfMyD24P1pqefdQxo7DDVGeau3mtFswAh7",
  "key17": "VEieSYWhq1yv8KcioBhe7sTcG9iSJmsPfRsv9wGFwtebJk7LcJhfhG9VkLwLmufzkpmXMyD3pVLDTm6HEUfF6if",
  "key18": "53RurVwWHicwM6oDNWgFRXFVbFiLAy9aHTEzM6TRFj9omt3ftc84Ja8453QH336Ynjrb3hiSiSmGGRQdaw8SU8c6",
  "key19": "27Z5DmCUryYsPDVzD3mM7KoRNxKWzjBrjACgbTQCZPheFez6A8m4xHDqWrYBVTaer1e6PyXNGDG1p96khz6DSKiS",
  "key20": "5Yq6S4QUnn4haHNvB8g5BCt5sZypf9VnAeQ3jvZYBaSiFZrHHGJ7ZTSKkwdGCvg5F5N6xp7LxqAoWQ5Z9eHd9tmE",
  "key21": "5gKMEeBGHMs8Dr2TXTCxV3Rj9VtCj4JfrGosqXtroPTjma3Mugn9CexWARmEjm5A9Qqo6bH3qds7Rsmympjn78MB",
  "key22": "51tYwJJ5EXT9RnYGhRQcRE2ikue2BwT3C4aUVbEYiGcs9y94e5hDWcvVqQUnFzxREYWMzYtcYDjPSKAgbTsr3VqP",
  "key23": "4jy9mi59F3y2fvDsNQCGDUDFBveNchDqzLE2efUyZ9fpH96nTvMgHZTEiSFhBzQuWid5dMSNR6ZXmkXD8YvCr2Jv",
  "key24": "5wJwByemjW4qkUduzRQQpGmKxjy8RQVrCZCMTqEXxj85q83ogGjoTeurwTqw7tsVaeLLoB85gNqq28mWRjnA9rpN",
  "key25": "4aALEPLXpcmNkFwE6zWkmSbZ7T9nfLqM1Zx7xcJXTQFDpz1sqDdUHYHWxNmThZfk2CUi3s58kgAEt6mkwcpscLN5",
  "key26": "38gShrnrWqPtV8icG8BkhCYP7uMGPMpP6PzHhU1bafuiEPn4PECMG4dTTynji3nTTJoFbPzszwE7E1yk1seYsZPN",
  "key27": "GAZ45i6mWDAzHiJA6E1veQsFAog3tJCLzUNxvTzmobAQDrtnhvYNHX92udKMfDBntk23XswAouMD1N7KKUjvoDJ",
  "key28": "5rpBEy16jQM4MuBdrRitJZmVqFpXMmFatvJ9fQAqyujzJyQ9mgVgxCqwRnifgSDM1Mw11f5NmmQCMXrgP8zPacjZ",
  "key29": "3CuzpVFBm9aoSb2hiU5Cvp7zd78brB8DeQFQ52gWLA9S6wwWzFyrZpHy7h2de76XwbGGF63v1zxj6KCfAqVNQaRk",
  "key30": "a9e8Q619jaQopB4f4hXRCWdCFbgrerRf51C8YN74Ydbb8uTNcTxtdG25E7BFLJuDLK7jw7Yyqpr97dsP3AdEzgf",
  "key31": "5gsw59YaB45Tm5tVfMgw3pqTGGRwA1egtrptaCGYxJEeaKN6fvaNxNPRePf7K7EcjoivmBQChCH3R4Z5u9Tc6ZPz",
  "key32": "5AMaEVE44aTxQtW3V1KryHWYwcWguF2uiZpKqNf4veA2GAKrdYf5Vm8CQn3r4u9C1ddGVwbWr4pMAUyf8okWCS47",
  "key33": "3nHgFp1fW24U5uHDVbYKpDzpVBjVbnFPyja8HP7B8hD4EfUWkRRiyQWM3ru5hmCuhkS9yh1RDxhFAhrUfMyci7sx",
  "key34": "51tv8Da5nAtfQGFuK9F5Rza6cWSX7g4pFWbayC8ryEy7YZJZqhrVH4fezZiYFpTqubdyBmcqgqM4xeRqRuxjSR34",
  "key35": "4fRMkXe9be4gpgZZA1A2gjkGDMumX18CcWbyzhkVZVh46M2tSNFaDvF4y4Wr6DsykfxkvyVfgzxwRdHbDVwNM4Wb",
  "key36": "3f7jiDkfNuXRHsjHQ5VipCTJHLgFNitLaDzvh2iXNUDEc9bQRPYcTgMJ7bUZyTKxHEg273bDm2cMLYsLNJc8kXCD",
  "key37": "mkKDhTngHxuRLb27qeprAhh248XCaGET7pvoS1KpxT4BNAsXQNwJDvABLaWGWW7pvjhewUSR8xAmazBwz7U1bwG",
  "key38": "3V3cwsnW2hecsA4zfYk17W7qCshjVg9Hr5XuhY3DUpYFYWm6iDz7WmPpz8zsKcEDzESuxXv8kkog8hj2PTfKumSM"
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
