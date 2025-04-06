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
    "22QBNrefE2CvSqgb3ygYTBBK5CqETLEgGimgRyRn4SH7cy9tLFEc9MXG1vrXBuyjzPHKij1T5q8BrG3QPpgg6E79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVWAJMd9iGMmsyN2SzpDmWcpi8bg889VYFPQkjAwMuPbvYfo1Gsw3HZxSqhp9EhdiwLCDNjV2H1MS6QrHBRzfec",
  "key1": "2EeSVzZDbRyWN5gfbEirTfn58LZpyUdhjeJHJwTwhsk1v3SXBSopZWyrtN31v1jZhN8ohfQR2RMktuidPJTRSFR8",
  "key2": "QAGxx87Mhqw62KSe7FEvMKEeGUzQwTceCzsiW4cGPWxJxYPojJsnJNQXcoCdV7TQmQ3CYRMAtTCGMnGycYsgEF9",
  "key3": "5pTsW9rmsGLbMCoVxDyYFu2QVVMgxDFxECbR7vCczN9bcVqws87oKjQ95WkJtgnWWhKFnLdKwKcyULMgg3na7z6q",
  "key4": "4BTJNKtBMAS7MG3Rbo7XZYfEYKdX8douK1zDGkDxxpZyYQGPdcNuXEv3VE4pMxcQ2ds8LXY1C5CC3yZ8kvezoC27",
  "key5": "3fvWFAE3CUeWz5ZDWi2e2brkjEpWaCbV3PwwzTagnQsSoVdtu99QXi2tqZU4N2uHipt6Y7CKfFBVqn4HNrfMzqqn",
  "key6": "4Z7URoVWC54uAJxrTzBB4YWy1FqR3ktCF4jLhVmmEoVNEf5b7iUi44tTrVR2ZBiVL8Y1Qo93TSaYiTUsBmLCHJSB",
  "key7": "55hBALfciKdTN9x1TidzN4q7G8RTYcdrRnUhRCNcHSRyVqF3QuzgTx959CkeaygWKUSvwbyXzbQeviKXfV86LvJ5",
  "key8": "5HyGRAqi2EuHttpSKbHcwCbBe9tbD4LNj69vx4Dviuv3nJ1tBGBreQG7eMMjdu6kQhUVUt3de8Er1KLpv7EupVJU",
  "key9": "46jFCDQpuAboZMpAekoVuFGgEArzbCvsaLDMy9BhyRZxVinWB2YbiWrNSFHpRZAXHppUFPXZ2TspptgN8fwgtVc2",
  "key10": "3NsGcQNXfNHf8ekichSmGEXTpBfY4cbh79YTnMAE9217T3vRTdiwveGKisYQPGq6Uux4h6kavMGAKfSttqDeGtHa",
  "key11": "3qKkx9eu9YRBYeheSEvCZCKn8suQCc57AK9wMmDWDdq5tQdnZZFmyKL35PL51v5er2XDVg9kzyzjXkFCS6ubZV1k",
  "key12": "27r9LmUoa2iS5A7hNN4SULbi3D68dFYdWaZycizBuzzCb3vDoUsCcDwGK97W6mEidTkxZH6qcYBcFbnmAUkQGpwQ",
  "key13": "o4BzKQSFiF2kmmRghCqqG4PHtNYJx3MFqbYTkFNVsfGBoUFuk2iMdgxGf2QceeSDnZLWkBrwBm3BrHiJCWaJ1eN",
  "key14": "26KU34D8gKvypVsJ7KSdZcWe2Moa2F34YHHFei1TLC66xiYaiPZW9Crk5wM9QdFogXwu88g82ysN2MXS4hSjnwjE",
  "key15": "38GWb5oLjGYL4r2yLhYVy84TRYYeaJwkF2MZVPmV7ueqn3NS6eSPvyyyZ8pEW4J6emE8m9gRZHGDgv48RAd2jWhr",
  "key16": "3e91DJZuRX3do1b9J4NTeNd9LMryF1BmCrGQM6kU6SsJhbhT5gL6v6Tz7bGP24stpcXMCCXozmeBNgPeiBLoXxpD",
  "key17": "3d37HXAR9D8xMhWDLVrxGxf6xCcoGaDGMswqdic4aZRUjWoTkQwe4p3dSsA2D1ZVZ12sxwV5YD9MTUKgSPKoYAwZ",
  "key18": "34BZWUTXX6SS4u67znfRf8EhnvXkmWtCdMMW7VnCKt2mL52iVkGVFdHHCF83RLUKtA2cpBmrGtQDm7LTuw6Xq5Mg",
  "key19": "2f6zpi2D5opUXHkU9LNCauk5FGNKawMCyiJgoNRRExxTHDSmLDqwPW2fHZvh8WsfctrYQFAP76eX7E93xG5akJVZ",
  "key20": "4j9KWZVy92fsBRFmkZNfzHwZQBeEfVDW7ZMHZpnA26kZwDDXyih1LrBC6yiNqZwGWf8pCkDHn9nh2DVTdHfCqBtm",
  "key21": "sRBW8X9evQy2yMvwiZSmYUwyxWHBN1AfJuUGQr1VCxxo5kRRF29CKJuKuZuDdBtN2BcUHm1EKcSC2g6uureiVxp",
  "key22": "4UdrszG2dhU1tEd8YfNkfjbjSKtV38bJGMhhsgDp7wjz8mZ8F34tEwnZseoHwNMYD3pmgnUgWToJYsKeNdkY4qbm",
  "key23": "3BgrGtJD29TSf8qoMryjNpThijQRPHoaRvYB2NZWLdXJGWET5rJ7CCF1P7zWRnMQx4CmWmCXVFJLGu14ZzbckL1G",
  "key24": "2c9XLPX1XANU4x7hAfA4qTYV6TPWtdmPwRa4kgnGoS5ffTDoiYn7PT3AGMa9BDM8nEfJ2Tf7dyFMdDEqVA7gNSdh",
  "key25": "4FY1RU5WPo9geruAEHTjwJi4oJHYPGRtxaq5SwyWwUtvwaFa86PFQ9gdYChEqNuHDnrBfqvFWR7UaovMF72YEtSy",
  "key26": "28myckeXf6HkzarAdL79KD8w2f5pLfjGDTLKxqDsMr4DjR4cHs2BseNKVr44bK6HjakAPyJF9FtGLiLrugp52Rnj",
  "key27": "5PmPpnC2TLZtCZYgfuAs9gBxRssD7tdoY4wCXEsoju9ks4GXnN9wQbZB62CjkNbg5Z4bV6a1FRNwN6r16f26YK7r",
  "key28": "2uPjGcmehjLwSSNWs5aXBTciSNMDzFctqEpBvfjdBMo9tBWeFemKBPegpUMhXd9mSPPK4MWxDXguCzXnbSengasy"
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
