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
    "6d29Dyu8uosXBb7b74oWX5yxQsR4kDyawcY67Cbfwssq5HoGHoP74XH5Q1UQb1JVsdsw2YgcUB6uz3dWm4b2yQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331GiiJkauEw4c3ECoJoxntKiJoVPwjtWUWuDo573ckUgk4v4Pdq6J9QAgoQrZyoKKoJvtZnisW4A86DtvmcGxfX",
  "key1": "5XEikunfyEPYc9Tdrsam8eEoHrozyEsx9CWzH9g5J6NKqA9Zxtzmd8GJ8j76heUELm1aGUHFuqRm6X3KcCCyUoeP",
  "key2": "29H9TfxCT9b1Qw9ZuQjfGyfro1WuHPmry2kT6F7BMnVdYncpfH7KujycaXLuJcfQm9oEgL7JQRA2H11P1mQEJTuR",
  "key3": "3PJAhDaeiJkAU86FQpaE8nVuEmc3oCYqhqoPK79eRtfLFNg5MvLnaSec1PyHiL3aCTpH1mK67EWm5JAEw7w8qcXH",
  "key4": "4BrBg5UwhPHJhK1qkQJ46joDDqk38FT57iGSyJNjLXqRnUhp7vMYiVsL2hyP5iLwXbM2MLdMYj2HrAmiRFcvUou1",
  "key5": "3ZtQE3g3NFKKYaWGJEpgBcG91g1eZbKsVYmXwZjDn1HJk8MzMsApGnoFaNGHJ5KSD6KukTQ9uB9N1bEWkgvfv4YE",
  "key6": "2jN1DFTNJUwj62hfZFDHd48KaL3fmpHMg33PPY8UJ7ijqWY4PuEUEufzqazh58EuCZACyXDPTUnNxPTbfpKArEU7",
  "key7": "37KcXXDu57NsLmZ3WSaPw149LL2VkJ4mVJTMXBMsMmr2gbJvqpYkYm3j7qHepdRaaKiRAKLUSBpE7nfbKaSUjfZT",
  "key8": "3SpdDdEPVGXFRuVVL8A9ULfSg511XACpyCsU1CoYoRg6rmYKXD77ata5ApqmsBMnrTt7ZzK1B5dmXc6ooyG3QXYG",
  "key9": "5c1aiZ2LF2X9MqqRiPuJWE7JvHMpzfNafe346NC44mGmL1oFbYtC3AL5297Ay7Q1wk7gFMLmFuoezJLM5L4dfTxN",
  "key10": "5qBDqAq2afvzBViZxsdL2UJuuN6vDwA4KFoCosvSYjCSqVCTNuaxcE2JFGQDAdEijusUFFwTBjXCEU4CkCdoVBJ9",
  "key11": "dmKShqu6JM6cDvZym41N4nmjRhLVnpbW9YkEPjdfSa7ctt4QeCfWFezDHpnkjEfQym5GRXogMqaCJ8g2LacboBW",
  "key12": "4gMuMD7JNZDN9CrRnYoMTkBZySg7U7qiwYDTrivN8VjC4ewG6NPfiMGuLben4zFn3fk7JQzK1Tos8gEK3WCQVFvy",
  "key13": "27iFrovqkgJMpPXxLVLa59mTkUdnu2Znws1dP3AxPbUpGhiprWzZPhij2t9BujYbAWzn1cJqtZrGk1dpnynhfeQb",
  "key14": "4mnYXyfKB65C5Lz2DcMGXV8FXvwUL8rHoAyCw4cwvquLpVvjgpfXznDx1xtL6uTQyHQJHXgyKrQ9p3yagt3o6Lh6",
  "key15": "4GNNnmKyRfo3L5mo7aAWEHiqQQhtkhcmJwVSx8wfw2UBWM6Fy5YEDiw8t6sdyQ2794jvY4zfnvGiCcK6USQE1T2r",
  "key16": "pVFhouaGPb1ytSFbG3X6AZgLrJ1Mx7QEotx2neKp79yPXwcBAFvNG2krMddcujnxMwQpD3vzZMrUntWm2ecGcNm",
  "key17": "286gyT3qJ9PYcFbDrHXR6G2sruWtkqkSvU64nsBVLpe15YGB6wsWizHSbMffB32KcWGgVNRGXFtUiXwTn4sN9SkU",
  "key18": "HsPRFfUD1KmNcnAG7dfXRYoMterY8eQzsU4XMzv3JtKkXJbofrpRgXwvbM15NfWcmZMXPp44kpx4hnA1zt7WAm3",
  "key19": "4Z5zcbEykT8SYSaAWxZGk4Yq32X8ebaHs4tnbzMBtP5YiMN1trEfbMCGnkc1JrPU71sRdPJVPSDLNfChL89A7FAm",
  "key20": "5XPGfaKt7uDQMCNxN6NEgnfvxPy1uCwJXoHj2dRXSA1GFTnpwpUuGkbhjz4Se2kSw3SC4regzc3pTPxJhTbcbWfL",
  "key21": "BzP5szTPES7dmNgQQGAoNc8AKxNK6hSsgswT4qknBNd8HjUkBhv9FRTsam4tCbgZzQEreyt6u7ou5gAUwdWMM6T",
  "key22": "34ETFceGfG3mpTK5L8svhP7rF8ZGnxdBcwuo4Xw7KkPNzmTkgbdNnhmuxSw7pweLa8ngiUXmPjoPiin4He236Xx6",
  "key23": "f9E22nXPZtNjCgGhmDRsrHdLyVyWRoEEhWK2hFYjTBuNADX3ZpRTxqWoE2AqfQJQSYbM4DAVDNwRhQXHoX3R3Ri",
  "key24": "5MDaPX2C3Yw8pdJuYLMkKVBNmfX9eJTxwNNikDeeh8tPocyssSAtDzMzEV9VEJJbfnYyMFNBSAq9Nq8Gsyo1TU61",
  "key25": "5rxDRqUaydFupKAd54ptipqq5Fjb6zUiAxbPBXpApXCVQNDrhcje5t8WZypQJ93chXXHn85XVNNvNyNwJ4xLnvDc",
  "key26": "4JoAYkurWutao4aAVz6xuvvjoMXfbL89wD833dd6bsxqYtWs6QWFoZVXcAuUbrQuGPdvZhF2TzMS5T7wtgGpehaq",
  "key27": "wQ1dVWadcVtkS2fC6FtUQg8N1UWgyNt76BpY5VqtZRkfpbGouHUQtTgAXUBVaGnWcmY3hrEZN3vPcuAW29ZDXPM",
  "key28": "53p7jBreh1tXG52LCqdJqLMig9bHuKPy1ydJAfDdPmphYxFrmh1pVGFNWkpoRtWEYW9FNB8vWt4Tg35Z9NMw7nYt",
  "key29": "2JfjJJB7zeJDNzMqDZGFMuidkKCVCgFsHuRu3BdXbTkLAayXrXabZVX6g1GqXA28frijk2r2SWQyUMnyRDeEE3YT",
  "key30": "2iFat5nysQmhmpiPFbmzNPZHN9DtvBZeqKtSykFteSU2c5BFcEjusWN7hwKQ5ifhRYnNYxewQSr5b93FWmpR1GdN",
  "key31": "5YLz3MThDENhLLPpRzvCyt2gVYchvus73VnGFHVEkq1GHWViVvPrDQeuLBBtw5A29Sknoan7XCzGdpUtBvZd2F4c",
  "key32": "53tgaABA6xjJmGM55AFRtuBQii5GakrTAAVWZ36y1QBL5LnoTkiPg6WxgA2dKKpLxEMG2BsmSR2SM7EVAnLc4bzZ",
  "key33": "3ufgCiU2dLtwK1zstPC4ErJbP5hqFGFXTWjaM3KA38E7mBCxnHjvn57mKDsuqPkmCSNayqhCywcKFTHkd7CBxn2L",
  "key34": "nNVUg7B6Xk3bGtJYZGj8nHvvm7ZNjJdAxqs4sJtPFZcYm3EkgoPMcuJSyRDeD6p7fn8ocjDTVrnQxczi5ZvpZs5",
  "key35": "4ZhV6sN3wpYiESS8jDGYyovVGsuCLFAjQqAKA9pT6DkviRBB8hxWrPzbsSRnvkG3mJ7kFcRpFaRZhaK4wiYEsbDk",
  "key36": "askbLePBYz6soqAXM5TjGaLfoFFPmCSMZp1ERP5hSTboeENkzJYrCxg83FNDtUiuhLdYsCVVTDDRsxVy4epZuCA"
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
