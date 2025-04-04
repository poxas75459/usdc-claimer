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
    "3FdsgBs6cZNjsNS87DJPK9XNFHPTiy18Tm291JRk3iKhK7yZa9Hjk2ZBqc2b91ESkLDdVdb13bUaPLpCqzDgs55c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWHkdRtRKzWyyrsLGms7sCavVdbGgWpnC6kxLrs7pCSQgELmS9Pd43bYo55aMz26rMMsb7Jhm4gZTHhWZgTLuky",
  "key1": "2PiSYbb5b9t7F6AAqDM8o7B5YPE2VkjvokFm7DgLNVkMdL3u9zGmQy8c1ieaYPCfHSQxfXfL2iZhEsPxCnj4Hdy6",
  "key2": "3b1yXtagULa2nPT5XZ5TzEndaDekHXQTVCm8C9Vne3u42yzABDWiYp7hBPVreoeTsGhye3Tr38xTxF2JGAiCraBX",
  "key3": "2ip7iuCYPZRqxuS8FNo9MM8heKaBzDhP16AW5Ne5UUjjsbK1BN9yx1UemDyw1NLRB5qPkC3Rsq6v2JfbXCuwq5A5",
  "key4": "2T8E4LHQ2qwVP57pKn3rJAE8aPsz4xsJvGf6piqpW3Sj63fYaDmxkwePNJWbBwGecUgdaX85XEjy5ruA2CQgLSSi",
  "key5": "4G5R4jPUNgQ99qky7Qgf6HMuftAaguBoRveuPVCv9FWWfx9vViv3z5zYDmHGFMN5orgbokK9jggkyBDwnJu61Ka1",
  "key6": "4Wz2AJ3HRfaBUBzYxEWdr1EGihxGaPQ41cw7U8Kv2wt9X5nPdj9kWL83z46nciAhkhzfjGiNuFcRBertLnSsLwEW",
  "key7": "3MCakK9jf2YApW6rQWbS9eh1CWhe7nyt5fUDqWp9bZYJgPutE6vGtumz4PVK6tgJzxXjXrkirp6ZKx79Jxme7umR",
  "key8": "4NxHyvKVH6kDVgsYGPh4vVoJ5KGXTmwYW36Pz7DiF2rdPdigWmjAP7jistUmMnbYm2QSHDznaEHTw7sy7kDqk7ys",
  "key9": "5WnKcdZ1J7DdvzPGoq2ycDjDPxnKbtMzJe1x9arp6hnRp5mQqgWNLgAuouRaJuuva6iHVuiLnFo39PMLUCh4HhkG",
  "key10": "3eAfiqyTcJoNTsoh2Zq3MyRfZUsqXVyBLFSLEww7FKRP547D3jRS5i8Zwv3RD7C8LyDjtX1SjvDrCoABxLNAa5fg",
  "key11": "4uKdpnohqLnqWxgrwXG65zV7djG3RcB9bQ7f3uouRgXrUbcGgSoyZa7Twwcpmidg5B9tQgwthskSMVJvcHpCR2Td",
  "key12": "TWYXfWYaL74vS7KTSRYTuvcdMnGmq5Da7DkEtRtWrZByZigKz5NTrDKi2NrmM82UwWPcKdZvmqPSZKeg7eVZ2dx",
  "key13": "pZWUiVPFiJFDePhXRWs4znhd4JFDrjPFUXJfgHdGUhnYVMGUWxJD6BzoEFPPpwPBLU2mDvi29GN6ugkzPXbLHn2",
  "key14": "5QhTrCvbztt4xduUXdC9g8B5GfGB4U3c89GFfdMJWDFX9YPMNecCHAFdyfRhEQ85qmL7469WHV3pwMugxX2AtZRQ",
  "key15": "dncMC2YXw9kNKTsmxVYGjZj8whfkSzrgykNBBe7XMEFiZB6KEbn1JExXvgY6H7BEARR2sXAVT6kJ2ayGAfJS4J5",
  "key16": "2Hii9YwgXw4epMa1CsoVJtHdonnA8TL3oQXVG1eV6b1kt4421Mydb5RqXQL9g2JhYTQVUxCU6beasXrw9NTwgxdt",
  "key17": "2KWqgmSP7nR5ZoB4EBNfWUJyYgy7q1mgfGhwSWjre6SEh9NQ4bydLf6sR8bULp38sxdqPiZRy6mKQuFodRJcztY1",
  "key18": "ChgcQswNhhc3rcJicbqSoisR32WNKGfh9FU4XakvyBwzTi77yysNVqtngaRshch44zQrci2ZhLAPkCQ61sbsxe4",
  "key19": "5yFhPUPwp9QX9FArDreB92qSTdubwFvk62iKiTimyfUTZV8SGiu3JqvRDTfXfjDoSZqdurJrAejyQ12CryCvRdQi",
  "key20": "2guzQhskjVQLXC5oC4nWPBh4yV1FFVDLRB5fsmcmNRUTjVGn15g3hqse9yswAb4LphzKbjZtgGy4gX1jgaQ2gV1F",
  "key21": "2ZvhjACU71HPr89yigWZ8BbvcdzZY9FpQgvSZVGE5YLet9sBYbwnMjUpTGQuL9XT3ZLW3WzaA7mbUUkL3tJvVeZ4",
  "key22": "3V4SUwAdrQTov139hupc8PqKYC5d2AsobDeqnWvvvdUHCjeH6ScgiyGVrYvJeGHcBcoghSWCjA592SqwkXuoe8Xz",
  "key23": "4DgArwGpH5gW2dKLq2jA8mDCJuxUseoMR5KTaYcWwnHeU7ajbm45p1VAuiSWp6h4fAgX8198su23iAsdEucU2Gy1",
  "key24": "4tS5Wuxs95qFwcwafongAVCtUeiGx1JCP9RXeGSVgem9Pij7DPsc5S2PpTy9M592Wy85dhHrh3AEC3wxBGCwPo2E",
  "key25": "2aNRZ5GXP9tLPUkHcfJRDio1SJgurjeRBkKCVuUV8VR9iVTGTycmXPxQuSjtBPTPM5ghV7Gw1L1Z7mXXNQUPEEgv",
  "key26": "4Lmn8q6f49bXey2vYQ9qRnM7QTYdVYwvXNQf4FxdsfALBtMyKsMVmKgNaqwQ25XB6tRtkT5gsfAw745QrBgSWMqL",
  "key27": "3YCZeunFFRgeTVy6AibGBbqEGAqjavV7m5jBdqR43qG9QXCEh8H7ibtiYYKiUPLQ6onejiVFSZafuwxGbq1uMo2Y",
  "key28": "2F5zMzr4u3BPEsUtXKqBMeSbahGUvEsoTaeFrM3B2j13u2q8CNxkzFmC5xSYUmvvxYUBCmCP1Mq3FzjqhBJSH88J",
  "key29": "3FwAfGkjAvpFnJcWB7uh4okjYDyaRkzgRLjVUbjFrL7UxNMfrFyfW7bJJCByYwnDg7FM9skLSg8xqfdo6RrkqELP",
  "key30": "5FQnscvvk6rFWZNMMJQwbd3NgPxpfDCb65yKoMyiyiWXGYBF6LceiMwfNU3TbXEVWuRSEwibDmHwHGwKpcRpfaPd",
  "key31": "3tE9yviRDH7KqaGJxdaodv6QRaiyS8WjHbVbh3yHUTXdkaAz8sDch6LSCZW9BG3pZ8q56JDUxLBTE9vcnqe3EvuE",
  "key32": "4GmsKoBdSVuip3oecMEf5qmiUauyJgiMq7YZnjeG422KHjmR73dD1orn3MM9frpLCSC6YqaFE4t4cyqZ3KLVEzHp",
  "key33": "5HXV1xKyFs8RmM87jjdjr4J4cEYFK4PBW7qFiFd7tASen2SqgLwSdTr9XRRc8tLyVs6wQ85HWQbDa24hGwXEN4Ve",
  "key34": "4ANob4aKFETeduSjFpJyKf5wggmbbB8dnQ4ARuX8xUfudqnegRuB6zJMREixX25K82czCGXYqMUdPqBWZ12SmMzs",
  "key35": "VoykMy9DpDHhXrVRT9PXkM8oHPXdWMuhdYmVbFHvGQAfwKQQL9w5zqSiiY8TFQzi8DgqfafrKdRn4rXmLgqBCUm",
  "key36": "3yojfN9GgXHnkFbLtNAuNX7g3S1ccaCWxL6NwDq5XSHWfWq1WjvRzLWF8f3ceG523ZR2mYvYoXJjQTHcqj8oDQgq",
  "key37": "38Fciw61LozdpzhRz61wENz5Nqxima8GD6dPqW4rUkbQttGEfQHjN9NCEasQsHz71LwspFJMJdBGJ7rhf76sAJrC",
  "key38": "4gGm4LFgzycNLYguxot6xitSm5PpDcAn8thGYPynK2Xe1zBtZ3VLix7E56opViNpygcdLPjqCDSiYi64D1LefXNu",
  "key39": "4fVeCmy3ASepFM5WHYgZPHP2dD3kngUobRwMm7cmzxbjwCn87aG45EQ3SKnDBZvPitHDY3KPNvGSQHmEsW3ckVdm",
  "key40": "5k4j2vTUhvf8zxKChi4z2NSyT28uSvY2nHFWfByC5XXbGSsBM2ZKuN7EK5uNRGmUHVzQgSftDjAake4iG8KfcQWD",
  "key41": "2at147hxZCXWiMcuf5ENP58TXjGUrufS5ubsgKwM6SWssyrgVcg98jpzBenVBMqkqNH3wm7X98xqgh3WMphmfhmr"
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
