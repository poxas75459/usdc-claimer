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
    "2VPKJudjduGoUF6dsrh3HEHxG9gRVVCtNFQSBdyG4PuSGuCXpufCR1LmAJoA82MdEJry94NUVXfeUmu17yE5jQGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HwoY37m1aWN1DQz8MeF9acE4rmhUNxU28D3FUyZzzCfje8oacLqSnTvJum2tmHX2mwAhts4TFhiUkYNiZ9TM3x",
  "key1": "5wYmzgYKA4fkhFynaoXjqmqnmfJTYADpRs7XfjA9WtU2eaEEJ2b8w2nHnGwTPjradLEMeQ8thvBUJAEF3rsH4utJ",
  "key2": "2mxV2mvn7esobG7YXyyz78WAmxxcaQX62FhjXM9dn7QRXcCSH5KLtasM2uQsZAqyEMhtMfgs3vGejRffqyGHKyUx",
  "key3": "4CDWDAuoLwD82AWjY1thKygqYZnuL894BbrrzALf3hYR4T1bkPmCzRYTtE9SpaV6ZjzAv3iGRY1xmYRv9TJ9G4Fw",
  "key4": "WPmMzdujMmp2BHCVq9Mo4addKMsiGdZ8qQkaUXSLyxZXgYvqo27R3224YTSQKgwL8b5xMcTwpSefjoK5yS4Ua5w",
  "key5": "K3hqxp6LMFPd8JKJ4HSL7zqRLQ2VPBs92Qb35iuraEy2RHoCCZFtyVgY32WACkh3YsXw3roVZjQ4eihT95eFAQY",
  "key6": "KZLqUAXemnPk1vcJLM6ftgGgxhYvbb19ZcvjffoeFjXGDsyURC2EEiVerdafx6xxB2dAUCu3S8ncdB1Ub4rWi1T",
  "key7": "2UEtNExx4x2SGXXivLTyxJj5b5o7ziqkdijPBir7XCcedsY7mbHaVWCBRYcZBgnEux7Wpyka1KY1ghbDgZnmCs9q",
  "key8": "4cUaJGZCDLqjbQbDNCBCsnR6zQu3TGDVY7oT4Q7eKetkdj1F4srz7UkYWgCgvYVxZGJJARDjmZycNcYrYTEeTasT",
  "key9": "2f4MHHaGuQYzXrdzZdYQKHGPFK86MKSY9mpFDEwtPNuL5qi5oBBRUMEuhuJbcgpYjA5jjazS31bTnVCZbUzahbWd",
  "key10": "2YdyLKsaHsdG3nFr4aZdRL2J2LH4gUNtgEMBXwcqPFtw6CH3AVHS9QutfE3noPdeF1Ndq3FEimPcxnGdVyXCHiLd",
  "key11": "4iYiipoCB9Fyz6dJZCmT7UQRtiumjwzVXRMWLnakuDrYBMvcHgufAr6bvZwRmswhEF8yNESr5UWeDsUZ5PDW3WH7",
  "key12": "2dgXYw3EkDzQMMmdGnJL9odHN5Q5VkSSHa2atqi1nNFeR5KQLSEkStAAX7dpzw2DQ8pBdui9Zncg4XCQp2URD3sW",
  "key13": "2pV2Mtm2ZcKnSJwDtQxipMqwcbTpsWo7VbkhZmhth4wCC5WsJTETK3GeGiqyf5nkWnSKpiAxvduHaoZyUSBiehXS",
  "key14": "4gviHTx6fz4Lw7bbcDLytq9GoAGEaGZmar2uL21FN1GCDXCbisvtLDtm77gQYw37SkeXqtnMJe8C39G8WAi7JcRr",
  "key15": "qXUTntVF72fiu8VGuoJ7sLtADs9xTgMN8kycSjPD2YebFEEu8NYtdNPaZ4JwWVgrCeLsu38fkDUQ1xzkwfwoLQg",
  "key16": "iwTm6WGo15LuHG8ZP1qamvGdpc6KT9cSx5h7yqKcV5m6Ynp2QimXpkXqt4Nca1moqz6Tp11raoCcuNchevns247",
  "key17": "4qmH8GSpqYKRBov49NKT9ibXTjQ1TciJKpwXYsQwX7MJtGF4iTYGS8bQT37HX77hJVTj1PTo6QoR6zax9JvWt1ex",
  "key18": "3VsJHcLaJTv3ipbdysHGtfDA2v82RaGBMoheU9eRpCHjjbKUCE8dw6YUh581YhgFHrkRggDPCDkTunsNwrkj9F4D",
  "key19": "5YDPMpSH83ypenaEnsejKrAjUbnWEKJpmua31KFwRr2VFAksRRB62WUy8KLMucifn4yvKHJjmFHAUyAKKCHTt5ZX",
  "key20": "r7FeyptkMaeJTmsXAicxVGam69YWR8dWd1j2UCB5zi5JVJa72dv1pj4bUuRspy9GXkzxZgvQ7hRF2s488Asmuu2",
  "key21": "4ccNYazZ8beNqfynChE5Cy3CP5DWnA1jJMoVTCTcBLrvz6gdtcKfXJFDRMfTbpmuHCvx3B38b52tsy4Yv2ERCueM",
  "key22": "31DRVE2wngsodfcKaMARjLTEBs8De9D6RLiveREBVZGwkE7RZoWphebUmf8usrLQmyqMqPdDwhzuihQ7JS9Swb47",
  "key23": "5vVBjh4nsup743NcSBizaVLZsVY95kGC799weTba2Vf6XfHkW8CEsaiqzK6A5csXSNZZwPBktwfxbuMT4fM2pT6Z",
  "key24": "4Pwp1oV8udAM4M7NcaAP4SM7CNcj4PJMwFbTEFDWK3FCUA5UG4arNTVncT29C9dWQdiEdR1zLQBm93EZrfTjZjfY",
  "key25": "3EXCMjgGhej6t5RHjBaKTCzsan1MEHnqLDVRGoC65XKrzJ7PwpwFzZqpfa1r2Gnzu1kAhvEUkdzGfkNmCgy5rbm",
  "key26": "5S2FCvEC58B3dEMszhjVxENXYbtQDNf8XggLBCjbo2GBhBwV9pydaN5rta4juyjj7n9Ufgu11pSggGqAKsATqzVk",
  "key27": "vi6pGhw4sUitoQD3jk3kQQbZPcTfcKFBVGGmHy3WwXY8MrV17c1iHvWkR3FSJJqtwNDUaraTAFWZLuE26CXR2vN",
  "key28": "3CZbDEcdQARWquNkgVUZcFXUHzNn2NnPj4JmQB9mK917z9M57xqGaZBUoUpARXK8yix7dLxEM59WXx5Rca2JrUM5",
  "key29": "5rMmW42o4RTfTR36UsuqRGeKjLfppdUPVB5m5DuSYYHApc3YTnkAgKLkbNuFqF6d3LKZpYYhwzDGtTpyeSwAzqEb"
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
