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
    "3Mph3CpjhsYqysy34yU1QZNf25FzcDkas2rbrx4dYEs38xUtcnGXYXqPD5P1bDDoaLuVvLRvuejuyyL6YYgndBSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ytvKUH5zY138kbkrQ2RBQwVrsyUoP73beZg3jwwzwjrCBfsLuLHHs4EHHN9qiJLhytbHe81xM5pXzCbEjKuC1Cm",
  "key1": "46zGmr69dDaFXVs2VoxLD4dbt8uwqRRfSvSyzdFXZCEdvgecJhcDse5z4miipQK19TyjTUZ1Gh5echA1fQLDhkZH",
  "key2": "39SRZWbqstQCALFw8jU1M1Q2PmiBVGPVdpjbwnBPUX8Fzv2THm6wU5isEBkQucDqMemHV2hHi7iZtnK1NT2khgsu",
  "key3": "23QzzDjcFQ8XD6WkbqkkhSr8vs5jec6G8QanUFkyx1oQjubSmtyJLBn3veGoq2ZJ3u7SB6VGdsNGrcneGWncuhQo",
  "key4": "2TUAPWikikEjJWUJ7Evu3xuV6ChgN39RHrMBUqWfiuMuWLWcwtiPLUHxBb5BDt3N5fsGv9HikuSW5XnecAjWDmth",
  "key5": "9Jxw23DHeXx2so5zB2TtTmCSHr4BNzrbTaJEboNhtJehQUHqjmyc2rDUT4gwj3JymmKVs7ss63sQFRRJD4pwPxL",
  "key6": "51QMtkiS8RXhoXA66ZJq51NZXpDBtYwVzrn2THF3RNwweDTzBXppXbtA3go1CzyejUspfgaALFkcLnLLruPt9Gf5",
  "key7": "3H93vnWSUYV3JySbPDz6qtj1LcNkENM9piVcSMQNgaZvfYBS3iznhgf8fzfWtF8S1v6af7ELDoyNMgc3hC3bGyfr",
  "key8": "4cyJ38W3HejWNApsb9SSQehgomn6MXQDudRvxZ3pyMZ68Lzz7jKP8Y43Y3kBArwNxgVvxuPZRmG4dQp6CHWjzvcy",
  "key9": "2Qh1oawnUgkQWycmWsEfJqvkdvt7WbZgtyCUzvoRpQ1hhSEbuBkEdEzszgeYRk7qmfkN6E8Lsne7tpMMG53oVwFF",
  "key10": "26kH8ZgxhsyhSHdfdqMpTNLd1DBZVApFr1yLDqtdEfnxL85oRW3dh4JpevzyP6JidZs4BH1Uutkvv4XQS82qnxVo",
  "key11": "aKiXtWxc8f5wceWZ8dHoUswvETxEDM1RWKPDtAupHLZWpgyCVzzMG2WWmQAsbcXov5tGXzcPpE35LwfvEt5247h",
  "key12": "53pbD9sdiAT5c59MjAMNGupamd7JqSDNb5YnxKatiz9pEYy6ntBwdxs1FJrw6Zbm19MdY2zTTByh88cgn55DqCaa",
  "key13": "2Xnajq8sHmAbFAidnXdz94G1uBaHxrrgFQnmKwr5DmmEiX2YuJL1utVM4bUX5S9E29jQXZXjnJngqD4KAEAm487B",
  "key14": "3iadK4kxLwaS8PhHqY1xCMwAfex66F6YgPLCKH3WwgKUawaptdRpGj7Lqcz5iBN4Kb5ASLBDUHnsr7WQvehuxsu",
  "key15": "47Y4ZCvLKVGZDBWANYbYCXiKESy7e6vUwVek6rTjfX723cgHQzLFGj6cFwgyPECVN6q19XzLxP7fML5gncRqwQSS",
  "key16": "ELyiPkexUa5VQYwdkywJM4WR6gFiNJd3jDCJ6tS36mLqfx4bP31RuzJq2YwPYHaK1LMQWuupUbkunvKmbhFfgEs",
  "key17": "4xdy7zsuavNKj9d5Lj145HYtmNtXwHY35gW4GWUi7hvQt5SsS8ekM4gam3SEx1L9fSMHA1HQMqxbnqZEnhjFo8Vp",
  "key18": "3sbiEMxtr8Kg11iXVpGosZQqcdCqtGxydNuWDdggJpk41h1Fkz5JvnQNRHfngEqD9sAPbPHcyygKV7a6kyduiCAU",
  "key19": "2mF3wf6zjxDpjgfkpHrd9GWHj1YjokBQSxou2WuaUPUg3yjMxNp68C1BT7wWWzS8zn7GxJiQ2ojCxcUrAtWcTmM1",
  "key20": "4JsfyptsgbhWhWQyX1veAN3R2o69jJ6S5vy7qT5VTmBEi5vWjSz7FE2MXzmBBJhSLYxQNALPRD4kSYsnXtMfLmoV",
  "key21": "3fxrzoKezdnCaUGE6vzMfMXtqHN2Dhy6ipxeA8E2YsB2MHcKRUK3i1y8nD7zQwJEsV7uNdaPg63zruZwRAD4yEL3",
  "key22": "2NCMpE3XmoFeeMyo8DWznJJ9snMEBNmJmrBevTCcJCvxBxbA1XAaL7an5MsrAM8ZXsKVWVo2QayLiiJkP54mgUoK",
  "key23": "TdqbwVRiapD5pXjdz3o5TRbKKnih6VZnXmU6sbRps6JHGzM1ZeKm1GmhXL7LZBpmcpz1vRzW2D6dxnxRMPDybB2",
  "key24": "4W8QV8ifutR7gbXs6aRKseJdvX6ucNX28Raodqv48xKKUZgF279F4PtQxq6ZKii8UMgupkwfMT722134t7VkE34r",
  "key25": "CAA9ewcyY1SWzfkDMNBhJCRAbfJm9BgrUqjBQYqUuzcYaRS2vPMW2KfhG5cpSLsFpWLAcjnJZ1X1kbgdLZU7Kwd",
  "key26": "anrbwvEZKimHHoi2m5zTWAHBhKM2adNNAiTCTnpuJY5QTSNsVLH1z6WM4C3ggEFV7op5bLTHUFwzETxutZfDy1H",
  "key27": "4z4bdu39Jzktfqkx4AYbc4peFfMcoej9tyDScJejSwrav6iMrpxizpL9PXJVzvY46VskYA41nv8UnKL8nnjNN7iA",
  "key28": "3i6ZMjL9RV2Cgf8aFmnwBfHGE8aRKuh9ocsjrDBxARPHFbbEzG1ahMRfVkdYQhA5wq43NHm4jApHj3Wk7ucJnJK1",
  "key29": "3ddSn3qXSmsooqTy2bd7iSxgh6q5QSLiHoWCiuCJRqM9D7b7suYCtGVs1GTbPkZvbr5mruKffCYi5fyYMp51Mqhx",
  "key30": "4wLRPYjdG9Sv1NY3Ajj4GXtuxhuTDaFW7rGMrucKmEWsZ2D69Q3tUjP1f5wCJgt2rBpwaXCqh24bVBuxPmRoNVSc",
  "key31": "3oMv6Qtc71cJsqAPCCKLcMUHQkhtZWa6XH5TMPGJv52bVGTY8F5vByLf9J4zmLJFfweBh7D687iccTEfgx6CkeYX",
  "key32": "46S5TgUdxJr8DUM42neXWCkcNuY1rW5hpQSCtcQzykF4nTWG5rmADzpTA6L3R6YsM77oY6XG3AY3DzdbSkNeTP2H",
  "key33": "4cZSzrUSBJ23Mydprpzpg3Hdjd8rsdifbyCa2tDM7eNiR7Q8haYYYUxQb6eoLXri7ZrSFizkAKrRSDv5a4NPX8n9"
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
