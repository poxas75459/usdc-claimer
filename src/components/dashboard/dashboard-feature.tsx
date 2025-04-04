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
    "5njAGK9ffqxwCPUTgJiVdJCPeNSz6CgcPw2PYLcqHkKuxiXuT2KkdSMJn97kSS9dMB9xMxy8LX41f4AeK9yximzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SoNh4MhjYfGgnf76T9CmZkQctNqAyqd1SAbhqkJDXsUZEVpPfNtVUEqGRqZoL9F1SnPFaAFupLm9wDp54EpPAi",
  "key1": "2EkE6sW8fE7nfnNptmyfKsQkF27ezJdGD91xv13DLdDSojyct2WcF1PNwBoUsZyM39dmDkDyhynikDVDZkkSzemq",
  "key2": "5eCZFzBMtMw6BTVQPgmrFoWSnDbgSsJZhYwa35RkpEvajKNFnDuQgJuy4H5DLbTK29vXqqY3ViwsieCV7yse1MqE",
  "key3": "3D7hxvYdr1qTAe3Pv5zMWFpJVXHmB5r6wcTLHQ4x1fXCdEQUA18Yyeo7DBmjrNqRGJEyu2bPGCXS38LsADSRzb3a",
  "key4": "4uUtk5Jqh4VckDmDKa9J2ysKqiXA9onGvJB4budFoNuC5zS5YjiMhvWvv5YvpuotLwTMKKFWVkG29X4T4BQjbwJ",
  "key5": "pjNFzbR4f8WAU8utTsatqqksMk6GvyTn7YrfMJgsHB77VcAGTJiJbCHim6jnbhehDojN2QK4fwfbTUcVs2Nr7HR",
  "key6": "4RzxdJDDEGfRT6UkzmdGthNL3mJjBpfEtnsRy48xsh6sSQdJh2TvWttgbCzVNQMUEKhBJQ5ds4cvGdgZ91BNpLAE",
  "key7": "5hMyMasCkNE6w3Xv8maNqP3mYiWyaKPbj5BGJwWDEou1WbZh4AvmR9HKJ9uekPkqR8vNBw6cpL339jfk1QTqz8LT",
  "key8": "2FokpCQQzFaB4dyYzgQvAZVHgY133eN18AreQyebfED9WsAbH3Ucy7is9EfPaBrc32yEKmHRyz5kV6yjgW5GMWhf",
  "key9": "22S17YQgJBjMhCVtyLrc2RsY29NSCkGbBsR9Y3i4eVmm8VAAdz272fibrmCwwSy6szyhXXARoTsen9rL3es6qBAC",
  "key10": "CxvwACjWBypSW281gCvAehxXBwMTQzZ9WtyPNdXHMdA1AT48DNoMvpnrfAFkWrQ3Xbz39muPmxKPMFE53rTtBaA",
  "key11": "3nWRqvP6uwMR6cMuGVXgquTYr7TU6cPKp3RhM4t2tBsXyJkjqc1aA8RxGzHkJUorwjtWJ5vgZpm5QsYvjrmHg5qc",
  "key12": "31QgUB1sGGSCS5pLHpgF9tNbBCjTJSVpyRiW7F53w5GT5U4ScbSt6Vdfrk5JAQHz96pvAe2SvhAo7uuRv2gemvsC",
  "key13": "KaSDzFjPoK5YooowFoeZ9FVhLoG97ZikruEZn8aaBSpcMzz86uELcX1QKRqXjcZnv65syXDKK9CaFDdcCq4Vzbb",
  "key14": "nvocYF62xXtnz1P4HymJkJKsxJxrrrfDVupbWq3BQG7so1CmKqpLtgnRX6A2xC4eao3sfdjnmM8oYGQokAmujy6",
  "key15": "3CitaSb3HhmFzWC7YSXJTu2STaFhcnFJ2dsk63zEAX3vjWSxvsgJonUNAfdjoAq9Dua2AiqVrdV1tyKc4P3CqPaU",
  "key16": "2uq3y71zNbr8rCiUhwHgrmprTdjmLM9xhywNiyVjyEcjcpffC1R6iFgtoGG5iVnzoo96GVuEiMYoou9V32LiWF4b",
  "key17": "3aFNAUK2S5a5xcFhFc5yQjfZxtRJJWdDWem8rp1Q78s9rPnwSn6sC2arxjt9uL3x9exDHW9BRt3gyztXDiwqz6Gx",
  "key18": "3MjCUtPxF5RtZRb8nc9ZDy1VzJ99kHiUu679JL2pnwp7d7vYWqvHudDoEFJzFCcAuFqXhQwHkJXR5YavM6uY71AZ",
  "key19": "3jHJA5GwFWfYw3hiXibtx35ztMAqtidgXvDdjcM1L6uyFXbEnKKmHfnpde3LXDPFhKQBCp3douQUvVHpDeaR8iWp",
  "key20": "3TSuESM4muW6Vm95qo894477Hdfq381xV4W31ggJm7M7tq2AhXhYDyC9Zx4VBuoW5XoEm9xeYG7VbSDQMG5fHzSD",
  "key21": "BykGmqiVAntqipAMw4wAWzkvvqGbh2L8Z2D3D7iooCGBwKT2Qb553BSXavW8NEae9yVmzShq7YszokESqS2L8CA",
  "key22": "484QvJsCgEtQPRHMWWg3MY2fWpGbL3LJ9kdzPkyDmkrTXi1VPvXnRbTQPjBPRU3PX6kabd9Wjx5tNcAvkF2EvHtz",
  "key23": "5gRxCxdpQ4cKvAMvPtezzLdiuAtoBgUnzZnUxbXrLTsB8671KDeLV1Q2DAfjMr7L8CBLyRkdGRw2bt3YZveuC7Gd",
  "key24": "XUjmWn4xeVzqAbksEBvFsp6pQgBajTZVj5pyxby6aFYrZrs9yNxz9k5FrLUPs3Fe1C7NQVj4gmxVB5cRu77TDEy",
  "key25": "46C9RP4T1vjkiBQqhKN9afosTA4ELaP9c1e9PomNENfA6ou6RSAaN8hTjkUW36Fb4bGAxjrpjYCbFsywqwRGVfzH",
  "key26": "42EQi99dbi5vu4LrSKa6i5LcGLixgYv9YbLVnSFnynnw6HwcaVMizgwqkUSvLd53qVkus6DtujbVdh92T11LjHim",
  "key27": "PKhtgNocCPwvFvtPBxt5JVvh2QPEppFVjeyPrAyoRAf3U6wSnxpC2kEq7gmkFdc91RnAPVGgsSu1qEJHMYxg781",
  "key28": "2WzSAdXpp6Jj5MWKeR2P74eXEZRDK82T5sA8FLMCWydnMmWNNqF8r655S63egoAMHvXVZkMxouEAXDrztSMSdhtt",
  "key29": "KZUfv8JA83VXBpHUZTuAuWN1bFhqueXpS4ZaQfGVPWjvzSPyHSvsn7zDXzYYWtwn6MQyePALfmXaLuPHDM1WfV8",
  "key30": "4kQgCMoujfJjY3JNfF15B5vNp4rikNHqbS2snxHsb6aFQx1RnTrKpnX3mRQ2e699ZeyhcjFULyG3c9hhcQWP75WK",
  "key31": "44Tr6urppBEC5KUG1cfhKKEY1HFiFE8NYgPndZyrxMkuUTyWrYp6AvGT81v2HCbYzweBuwn5G2tKPWA1vZVRtqih",
  "key32": "4mnJpeTY9aN1HMt4pZyD4CMwsQGhypU6Z74NSjLXhRKns5ErddjaoD4wB18bRZ3ztz6Z4xTcefkRvv8NBPuz4Mwo",
  "key33": "5jBMoqJwBaJKcMY1Pv28YQGiGPh47qCbLAQ2Q9x86v3g8Kgd9z48KxwrCBt1AnmkRPE1aTNjBo6CE31Lcq7w47ix",
  "key34": "5S3etx71DSr1R9Ld72KoLpMTcnC5Mm1nmUFzZzf1SUGUfx1Ubo4KZvF7PstJwYSH5aBwgrF9Ct3YeaM9CyaXUe6E",
  "key35": "MZ2GuhoQcUGayfUtiarbFEcVXUBgrdm9YaNt949gak9kshZg2Dn9G7RU3uPc7LTnpokH4ewb3WDTaFauQ742YkK",
  "key36": "3jTkzNeEpDY51QyXNkcd7VDRRZtUVYVLHozC28zzjnZgFZrMgyixN1rawvuhZb3PHpBBdanrVpRu8UxDxZYbCd3Q",
  "key37": "3CvmM1MEhAZac7kQJPcNniS7GVtpsqk1Jk5efjZA7vpR3TFd8Y8v9kJ32vUpbPo8eWyt96tPXzZKmJG4wGhgMbRM",
  "key38": "34xjn8vzdX3tjJj5mG56w8KAEY3qf3b4y9RFE6pKD2e2eDGb2Drhbm2DUF2Wr1Z4MUuTaRbQc1UppyVCRth1ENAm",
  "key39": "peHyXBQRQHEoEwkgpSDNt9ywtioVo3NiZMVZK9Lo3DXdj8NkLDCK9y67jyZUpftUM5ud51UP5nnyHDLqHn68SKm",
  "key40": "2iwsKWc9Z7CRrFtXNF2eDWZHj5yw8bE5qaewVvD6HysGk351EZDD6D5ADRF7yHncLFUmmQkQHfoKwS1vDwQ6Acpt",
  "key41": "4SkU7nD1QJZ4fZJe6HimTBagfHbqa68J283nT2ac6gdT5y6xJMS6J6BaEFNtimNfUPxSFvBdKDAhhZxmmqK254ak",
  "key42": "38YCRkHSY27Tspno6QHVF4Wp1QnJZw1MZP5BXuugvrYqbRtyiDXFKkhKk7xVsqpMb241EzPpzverQFR9qG1FZCeB",
  "key43": "58u8jKtgzwJxyYxQ3KKUGXz1bjMXgjjHMRYsbX3g3ZNZiJPyEhjEW5nxx1utH89q8a7J1btRp7Km7KRcvLeAPsXE",
  "key44": "4QqNSypnhfgfq3W6x8FNbdFiA4FADjPmkK1EWJPczvPUnvJ4Fh3Zq3B2NmSEY2shanqM7iLuV1WagwkbUiMr1arE",
  "key45": "KPdqp7H4vRdPeYN8kkvuaGbmV2V6C7ZQV4tdMyyYMXbuugvUvMcCgsz96TnQVXNkg2Px2SSe1du2pp7DRQBjxFZ",
  "key46": "4UERfKBBKu4j8Au5PhcAd4Vp2jRThCdUZbahEveUqCCMKdbCw9Ui3sBGQgp4TSrkRUnaJgrviLSh8WErrktqWkjB"
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
