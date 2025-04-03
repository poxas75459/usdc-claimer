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
    "3rg5CeymHXHQUQBMv7FJNT7LmwvGZ2isNaLJ637Rq36tPXtomFXRj9pL2gvx6EoLfG2LCk2d2iGuqSr6VqJkgxbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22zv76j8dbJ8GSSD7ETsY4do2mMLF3FJ6ebAtmKZ3uiR8b74dkmd1KXnVif3GytkLxN7AoCMdE1FFUiXqtkjP43N",
  "key1": "4h8udN5D1Pt779KPes1uqUPkK5AGeSAGLcfWe9kHm9hVeE8LZY5V4zRXMnwwWB36KyGmPPYHbRt7rmbvcF5Wvovz",
  "key2": "3TgkKbdPgCmYzCordRowZhnYafMuFrTFcagmUj5UkHpVfbmJA3Lqd6FZYyD8cZaaZRrZ764DhT8wSAHfHpViwekt",
  "key3": "3g7iY1uEJ2uAuLjwULwAkbw2SCeQdE7yAN53gERpmXx4dXjiUyopUX4gZdXbL7CRmn1Vx5bjfudBJxx6F6YYpbAo",
  "key4": "2dM5N3MVGuB9WH6MMsoMDsVmQkCwzwkNwFGW4oqbhaosKF1bbo4GuqadmGv7aZSccH7J57J7qS2XLCJwgs6steEh",
  "key5": "XpZ3S1MpxBsakUn8F3zpE2P6f4VR8azTDsA4WpQXaEYfFMHhA1UWeXR47r19fGJLr1iJEdnpyRRAFCmS8xDHt4A",
  "key6": "3rkVAquaSCNeo8BgT4odBuBJotVn5ngjzLRKVRxLaqYDEJYzSDzjx3dCbdBM1f9LZohXGbpJn9gSSQn9mcyLvagH",
  "key7": "3rFzzsHTGe6viXLjinstpjYurPGCv1LT5a7unX2yBwja7LcMsqXvUmwuTHpKjd7zAv2J3ZeZQmQq632zjXz7G8nF",
  "key8": "36iCfp5zMabLY2uuYgAmxtHY4Me21721FDJyLkw3C1HQg3j7YLJJvLte6V4S2x88tTyfiXksAVHHpX2qtYK22vBb",
  "key9": "3bQNkwz3tjW1JgPia4s4ChETM9H89igtswDZQQd1jMKnZMkmVRwADXwCXx6MUoaMhCwTyuKQbq3YQaYToXGoy5Sr",
  "key10": "2XT8E87vQvbhePwUswi3pYksToebrroHGANpZnX6Aytn8gkakePutSZR7MmbimpNH8JFf5fwB83bVuih8WT9SWVU",
  "key11": "QwrEENHpDr1q4qBNHDMCD4iyEd8mRbhT7vxTP54XRnAkdDRyt5gbtdRHTmicmuSc4t2BjfuhPazhpiupwTFvTBp",
  "key12": "4d92v24Bb6f3bnqgNWWyfTEMqB8tjMLxyAmAyqXwqJ3nQ95ANC2XSvFFyQRrkeaSJ2LKyqbah4ys3x7ysN7k2C4e",
  "key13": "VGHnate28w7uqVG22edxuBjG2dPuUrpFBdBEfuttvauptfh3UYsrvrjzx1TBQjxE2asTXhdEkZFLD3HsYYQPviz",
  "key14": "GanTkwinQ3DcVQecgqEjHRNRyZyf6P1DfNMM5kM3GeEsvU54nvzWWDKBGSNZG1TrkWEwyE9hESEW79BwkxYmUbF",
  "key15": "651LmRrcB13B1LrM6RjaLwEyjBM13UXcJHoEfTuNbLevwW9oNdhs1QtKHBj1WqGJgt5RBB9YJGjWUeHQXEmbVBW4",
  "key16": "3xgMJgzpCSuzScz3mGtJXam8AQGbf5Tvs4m3vbb8JBwKyuypUHT33KyWDQwNy1XBMad433fz5yXNthMHaqoAEJT8",
  "key17": "PLhiEQXJbVnimdDUuR9FfTadMjbRdL97dZgcC9KTufSPBN3MJ2iHhjPXxsJjEdPCSM9cZ1FgMGSLRgVTy5vC7XJ",
  "key18": "3FhEKR2LjmmyMHhQT31WxTNuC1P4cMespFHQ6uUg6y1LECi8yeR94HHBtEq7vXCzfk7L7NWczUWzQfeVX7vVHNuH",
  "key19": "37Tvyy4chUYTpeUpApdU5RHovpZxjQSoL6mB2L5WmEn8sJEmd1pa4JBn7qFkn2oAqg2o93yHBvuLQyDKGzX8bwj6",
  "key20": "5gmtwyYWxpscCCrnTHKuVLTSfVVXcMQQtekhpkcxznri24KJSLT8ru784ANAGnUxnmre1H75tddJKM2H9ApF911M",
  "key21": "4VpwEeG1NBvscRSj2vg9dWGmT5KbsMpGYq98NT5eMLVRjjcwURVRhgZXGGgRdXJdiGveoZNzG9KKFMfnQCCcreE6",
  "key22": "4iYXByE3qQoK3ePSgivGDsEP5z7yL94opx3YCoWnkYiaVkcwno45euNrsi5AspLiZcPKiP29VDLwpEBSeqgtgtqW",
  "key23": "4caoquEDEYhA65QYTiyLcML7JiqoNKMmw5GMUb1pfhf3PcA5iBdRiGB6JWSzbUxxSnjWZ1ap54o6WZeATU6ew3QX",
  "key24": "3oJNFGgN68ESEgGS5Az4Xw8L3wnNaMdKz7D1JDsXnVSURePkUNLDkdRRSsMTUAsHKkTctkM5awPwDUfKrE7sm4nk",
  "key25": "2jc3755D2CjLKKxWa5KhDxLK4GDFqqsg8MG18a35psKipZP98wSmSCn7K1Lmn6DLYmx7z9Vg3tth3Swoen8wfu8",
  "key26": "4pX9YpQoJU4HuRpNkEshQn8Mzud6ecTsauZX2sGDi538bFvLsHHTUvmw8n3s443vD1tei6gjauSq6etrmTCbJErz",
  "key27": "3F4nEwZVN4jo781Gt4uMae6tszB9Gc6UVN2uK2vrGb46niMSZpWxcZFVePbr9uD7f5Xdx5tMFppuMVHwedoEkXkC",
  "key28": "7fwTrtnC6RJ9FKk6Boe5VHVWzxkpdHvWmv9r7QMvtA3X8DetNKeHzMBBU6Yp6xMVUbMwaE1uzHTsEL1Mtyt6wMT",
  "key29": "2rUY8Rg2YmPZAqZko9ryundFMjXCcyKzWBT9e3yiin7eAfknqpsfgY9gLKvfTxdDGGWjudzjxHAWgRo1Wc3LQ324",
  "key30": "4A4xtNpHzCbBsaNg78KPL9pfAC3eJg5rSReQgJXTGSC6WkX48hLejRXeM8Hj8AQeZx6guvFKCkr7HquaYfQP8Mu2",
  "key31": "3t4iFF6HxFeJ2QkK2Y2NZpNwY9s7ux5g3hfi719wjitCNTU1XGiGTLVnZYRGXc1D5DVUbnY9f9vJaLiXgEEs5Fd6",
  "key32": "KzpwBqkoipMmJ6zmN8pXMRdjTaqUsVmrKdoCdFy4hVZh71dbc1FzqaknFzBNc7hz5RfzK8XBYagUN3XNvTfLprJ",
  "key33": "NESdsfSSATS28ZHoFZaqYdYUqH1kaBc48d9Ewc26UAgMkNBTRBkHsf16Msv1niqxgdFjYJG3uoMvDsH9x5ypW9r",
  "key34": "3kqwykG1wy98Qu2bAKoaeNzMermNnLxQGd3BmBzwKQ4tK6R2uVbPmrRUW3hPEPto6Dc2kvcu58Ubp1agqqkNNx8v",
  "key35": "5DpzDDP2AzpRTPMWxUMoXn4hSbdHQdNYRoPrKc5CaEeLtnxVN4Jrmv6iEobmJY6zRVfSAG76WjB4yLTmtFdgd4v9",
  "key36": "2M7Xbu4wW75F8A3rwacnZ6CMnqGJgK59LCWX9NrZDU5jG76P6QvzKbwoPEpAjeQ6NU5cyjjE6c1WtNu5NYCyvtVT",
  "key37": "2LgmBQTSk4F8DAATD6bc8eEaCXoWrcnEeDWVhh8j4smVxQHHywufNAqaF6QeYMJ2s57FwGp7HDqsr8FZyfrvjtjb",
  "key38": "RGXDeaGNzgu2QsCQ2sMws9rMVz3isA9TVsq8X2WCp7GQCST3Am911LxFeb7ntBNB3fHwuGeYoAjZm3PnKSMpVQ9",
  "key39": "55tEFNfcHJ25aDNTBTEAtLd5PdB3G1yAkB14q6MgGtfi2g1HLJDCecB6aRHEmFEVg33qVeTtkJN6vzuaBZEAwktG"
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
