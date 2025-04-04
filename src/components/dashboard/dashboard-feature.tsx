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
    "3SwzWe6q3dPvfpY2ec1qgQmRf123NrdehqHN7MP2ZnFJRMDixqKYBBShbCNFBRRiCPXnKbQU55iC2fKoAEcWsjjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M44RLDzHVf673W4yqrXUMt12UBG8gTzerLETG3c9mgYJmbEJt1FQGtVDPQAGUnpoo764GAH77RsbohLVTm1eK53",
  "key1": "2MQ2pD17dMsN7ZzAnUnRUCAAUz1L81uq7edKo1RbSdibPg31ovCFYEnGrTgHfSWD1DkDxxxMWEsL29jtPg6PnC7g",
  "key2": "3LwNmHbQV73gwag5Dr6JwDBs5MqnssTCdWnemFv8sZMdq6ouq2GzG1jFFuBT45yViqEm3xRDWCnhknM7Z2Uv1g44",
  "key3": "5hakhZnxVJ65d6yudsnqpuibwkvTxC7Jh6eAFPfCHeit86iPhKK1q9Kn7bvnFKWJnUjNoNoXU8h26ryuSrz832wF",
  "key4": "uqXTpcY6zrteqFVPqDQbAsLRJr9ch8mHDAyQeT733YUWvK9HhgimGDzKVboLR7sV4H1KC52YzzhXvMDd9kmuiQP",
  "key5": "ZmwSrqTV79RBUKtbVFrFRQBNNc7ca6azaG8tDHNuEyHdm2PdqY5QC7TkK5qbhPfmgq3vXamKd7yXdHdC2KASdvK",
  "key6": "4tjwh8EPE41bNBTRrrwdWqeF6MWhSWAAYn7xspzqK9N6ySeNVqQKD7X8PqGi1M6y1n2ub7qvQdYq6t2HMX9xSFMG",
  "key7": "4HTPox8vokh3Vn9CjxZ2EuiqZxsXrCdqLFRtRruCTgphCFwKm6jHBn9gEbZ7exHx9NbESgQ77Fn3MX4NNhxoGL55",
  "key8": "2PpqgJ32TQbpddUny6r5jdvUdfQHm8E4weeromtZd3DAjQDLr5SkZnJnyNFLK2RfX6MThBGi7s2sXwwZWpd21JK3",
  "key9": "5DVM8z7qZvuiw9cbnfoofySruJ2jQcVBM1KYAgFpm1AgcPg4gmysQwQ4zYtfcE6rPjywceujwsZW5nh5LDP4Yqsj",
  "key10": "5XV9AyaRUrwnys4WxiG5bccUTbZs3kBrS4EVW9YM9n9BXKJ4wKinD12fNNDXjoKtiwuYgeY3YoMEb4YYjwDR9gqh",
  "key11": "5r8VSsox59euJNn2CfbQZ4WNB1G8GRD47cysTLwvasF55NBi4Lex4vok3v9DnYNADCMS2Gzy5Byay6ZVAGCVUTWK",
  "key12": "4DGVbZKiXpeciaKi9HQLswfT42LpPSJhJq297N55kuVmnf31DQUNpgxDzzXcf4C9ECV6hw4q5BwdX5GGDTQ6gAii",
  "key13": "4mPWFJrSx6RKnwUa4VFLvR39hW3zY934j2588SjrQ1XNPgxyNwD2kGJb9MDvM6spHAiuZ9WJnbtYeBWsxRqHk1Mx",
  "key14": "662EFFR4u2EBJJmqGb8XFe3WsbHVtjmVaX46SvjUDV9YZiHJ12hx8R32qgYB2Wxg8rDhcUdEoFXArxqoiMTtuDhw",
  "key15": "5mavkc6vfrRPBVGS8uES4uzQLXgqX1mXJfsTvCwwuab4USdVhvk9RDdZrF246kJBW9tJDBRtXt4mHkXbh3NwUQhv",
  "key16": "4H6HCCWdjuBedEbHP9PHcob2ueUEADYeY1Z8tXdhA1NPmocd8DKeq5hjhc6SVjGVoiivzoeKMu36Kg8QdtW4pB77",
  "key17": "3diE5zTmJzeaNt8RT2e6rFWF2eRTaJPx2pi55k5aQrxBV1hxPYAca3g8rpUgpqaEiqNnzYhbMDzbuCDMFNpFvcLv",
  "key18": "3ZfrSjB8tLXqMeUdLXhNEiUM9J5G9DdRshxNKpLqnr8Uzu3ezX6pYFr25yw6UvidYi6oQ246Lwuxh8jL4TeEwiqW",
  "key19": "4B5h4DVZU8xyde5jvW1S8qx95iD3Y92KkAWZeNqKDFLBVw9KAsbMnxTw4MZNZHhiMXaviMnWFv33ybSz5N3uZdja",
  "key20": "4X3Mqqchxg7biCySx4a5n2Tq8dX1PyaUPg9B2gN9g8jfLNks5Swm2BxeXrvg53Tab4jBFGBjBCoSWL13PyKChBMB",
  "key21": "3XwLx5JLhQebxEovQ6YqWseetvau9bgwgcdokkkhknrfzBsNM9tvqB1oWiMzm86Lha1LwV7H3U1Y6o4g9UsudEAh",
  "key22": "35iuckKCByZCRF4qnsdadgJiBLBpzJrBsKQadpeKoAkpFUaqs9E1RWcU2QQhfnrNKCehdqbc1xr69G2wW5GdFV9m",
  "key23": "7XYVk7MHd349uFZqg2fN2pamouPY21zTGv4bg1yBTUM3X6NpheTmFJeNdc6Mi2JetMLbhAkPYaHEdthvzD6p4Qs",
  "key24": "3j8qo1rNsjoRMxGspHwNvQ7Xfzqs3m1skgDefSgZfzkuH7FvybT5gMP2LjrFEJBghwNZ7EeG1bfqrv4kucqCDhn1",
  "key25": "wkEPBtXaxj5PDwYD4CcaEJKi8y9HbB5Fy3jx3xZ2riHCXgQSkJYGMMn6dxQruuaMcKubDV5aGX8z7gpyQqQif4z",
  "key26": "2CBSR8AaQ8GdgKFUPq73YUHpBwQGpQUknpZm6qwyGsSV9ZaL9CDBCcf8GKb1uJWmiHLFzHVX6VC27fB81nQnV3r2",
  "key27": "4qLsRv4Dq2knn3zjMVmWT7WpgNX27xM21tYrEy843i2Vx5juQ6uR3iLDQrzfqJHn3mkpZU8zfxihgsvkPvNsH7uz",
  "key28": "5aPkcDb5eRxs8bTDQYdN9NXzppbU9d7evugafqHddKneWmsyHfxLVGWeMEFQ3E2zYQecNobM6QrPhumpqGoJq1LQ",
  "key29": "2kCtwzoVkLyWUzjSsYkj7yKkHsNLdGRxCuBfKXzRJhDmK2VtJcJnTXBv51uUD5faNGrEfWfK9ZXgoeSdPG46vSY7",
  "key30": "gikq9w5GmAkcfcPtAKffBf5WJdX7kctjF6Ya7aZPYiDPivNc5dzkDagL5kFQgY5Tezqt23ewcqdq73vKkwNryaP",
  "key31": "5HAkDiD4HMmdNnqDwp3pzuuHnDkgDqTZ4TqYAy6Z4inhR584rcq8yPsT4y6VpW8Kc1C14EyFBP8EKVPRWQrMF2Z1",
  "key32": "5ic8Ebt4WMarF8CvtbCZ5GRRBSYPHrz7QZjpnh2HNmSPcnnFQwdpYydd3Lwr4Uv4hte79MBFcy6tYPPJPthdvn27",
  "key33": "62c6js29fbQBveiQBAUmfo5NujSvQqyvhkqZpj6496PsVXF8QpcGNN5eqDi3HgrZA17MFdKonEmX3adW3MvMKbYF",
  "key34": "5gBPcpFhARhuLzQYa7YxkM6oPw1Y24NvRFmek325KrLuTM6p5UyTnfURPA3SxUcQoX3bhBP12hYu24VVcYzxGa36",
  "key35": "3sLYZTSLTzhKjqtfsyQQKYyZ7abUHdHkn3Nsf5gJvsYHU2crsyRgCZK5ugNhwyaVNPjRbsxCTFeuwGx6avr5uGD6",
  "key36": "2jqxh4HtPpcDxn8ib3eJCR6BhkmGoJ4GfjJucqC2Xn8K47NUHcYBVEEH49jwmajSwQ6grUCbAnz1bsBmP2xLGfyi",
  "key37": "2EyxS68MeFsHq6zRJt1y5AumCMnx6YpWMmS64foxdamVz9iSAauRJqC88VcvL9aEjZtdmQAUNHGn9wBNrVARktGv",
  "key38": "4yJd6GTBZmvzVWj6qJgSEpwqu8XYxEySa3ke2NVz6G7ms4UmER9Zeb9wAB5PGGSM3taEQpevDSAhru8yHsWpokgn",
  "key39": "5nQFirSqUoRGkkdowqceHLykt6gHAiC9BR8zoycjKb3jS5rTvivN2HuWQ5xkHjDXQwM7W6ketaExBAj6vDZo8SFw",
  "key40": "EBAnpo6Q6oD3tJGXGYGfx9DB1z5Q5HWemNLW7r6zv6AcWhquWgbgat6MD1mU1casPQjgBpJFBnJh7jGwL7ogkwQ",
  "key41": "4pkRkkhq7eKCwS5fBfhE1ksmB62ADNLg4HRf3HjMnEYbx3KU4wh8Pmzk6o3vDXPCZDLsK46V28Ua6g65CnJcEbHg",
  "key42": "5muM2YEAqkibP3dMvyph6EEVdfQH6z3AHuo7uHseKantbdkcMXD9T7rzQ4dBnLFBGdeFRiUj6edKWTDvy2X3aZ83",
  "key43": "4Jjdyc1NuYnp7dVRcLEMPcbVchzYZWbT9SV4zzmrn4yPy9KmUm6fMV2Q35R7cDiUopcg6WA4qQMKH13qaMXDov3B",
  "key44": "26g2riFvZoe7t68uUKfSzkzSaqA82DupEMXXERbdT43GsDtAwk4qV1cJv2gjNda4ZUugZfMBZYX5xkYcfzF5uTX7",
  "key45": "2hq3UASALaST948oPfuAZhNwNnSVmvpVhYrZ5EThLJMo4E7swN6HLosFXQrEKFLS1mRHULom2qEmcMc6xjiFKjcr",
  "key46": "54mVnpZSrWx8uijsxMhyckuDaNf3DsBZBqTrak6kCaBZ3QyQchDsUR13ppJfK4Ze9pLWNCTNTa4oL5ZAsq9JDqeJ"
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
