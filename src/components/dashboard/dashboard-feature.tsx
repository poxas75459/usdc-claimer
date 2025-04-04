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
    "22GNZxFGGF1KTWyq37Eu5pV32NJfi2zK5RAWZwLRM9bknebZEvq5jfi86ygDXo1Cm2pTpUZoFWkaph2a9EkXiV3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjjzUNrjTB4wXN6vXq9DWhHETtSz6aVx3uaRUBoxfsB4VBUpp6m9q1JAtdGrjc9tQUac2qwqwrtYHuUneJJLs6c",
  "key1": "3sxuV51LfMG6kqBrBxkg9yy4MJG6ziHSJCt2vYWgt1yM9G6831WGryPnqg1Jcr44fM9XKsWpo5WTX2c9X3wv6cqr",
  "key2": "4BBnxJsVz7DxoHn5Bg4XDWaqwusZEFUNfbntmXTh1hjkAsk62E1G6G5ak2A9sb1PvvSvUyLzN6WFXwTv9pYZi7Cg",
  "key3": "3UAzN4VbJXk2EHV6N6pJwZmHQEAD7pe7PuVRfpN5HcEJCaAZTw5B7wH887o5Vz5XZtqp1smq4WyAdrwMPa1URKAW",
  "key4": "4UorfxPmorck6BJBmURcigEo1btAG9e2WgZSckeysqttaSVkBsHsCJXp7yuURoxPEmf1efNyUH7ccYJSADgJGB4T",
  "key5": "4PqmWgzdssouFnoh71MRiTsUz6APAHDi4St25LroYrQfL5DXgZuvi1baEMtDRSrZxWEZuRrQRotiL51vMKM2kAqD",
  "key6": "tNbBhSjHcvtMWQcSQsPqA9iVExyQagmmZ3KWnA5CZaKPHajmvgVLnHFFJhXKpCEL3v484aECvWDNpoXNaLTBR5t",
  "key7": "2483jpb5pYK1dpYBj4RnKZhBkMb7YMLgXQ8GUc9qx3WpBoBXGZwPJ8XWmt4vyCHkhG5zXPT4NDCmsM7DRZjWJdqx",
  "key8": "5fVxY4yjNzQkK1cQSKCmLRkihMBaqtrXNVFmeuWrouiGYhV8fCpTCQbcpj7WjkZtLMoRTgNUEKNEUWAodwd9Kyxa",
  "key9": "3bz7BVZruowqtN8HywvdsGfZseVcgJvRd9yM5xU3hRaFBxHxtaHzTK9qWZcpVhLNgN7V1PWeeeKsEAbtrJbKCv9e",
  "key10": "5DD4aADXoN1qxPAK2cMSz4UmE3pgAaDDAXvP4Fc1QmtG9ehCMYW14Wb1A89Q5R3PF8TovAuWbzEmACxxmZoPrUEV",
  "key11": "rRaA6VUZu8wptWC8WNJkUBdg66GBJY2tvPkz1uVGGhAEfS5uH3RMkrAcwMoxg7vGhcTdvzE4jwXKjoSV9B6PfCy",
  "key12": "9s49qzJhKKh5C3LA4Wor4kaTK9vUNUeD1Basz5TFYsgzwcJDkk4MPJ9NZYLoNdK17mNSgXPmK4VSYwpSjV2e8EL",
  "key13": "3KCZ3qPfc8VFUNr6t7V3W2L8CApQona1CBEmEK57LNNdvobQKyCB4TEUcixYb8MVjf1FeCSu2F81wrJ9jRrkou1r",
  "key14": "4FuhNdKCvhthwQ6xpfBqHvvR2nH37o6bN2nX8QYY7DxanqNeqY3H4JQ1q18uNeheMQxdVZ2aUy1YyqiJ5p9xuywn",
  "key15": "2VjiYWh7yAqSVtZQxDAGwcnG7HZRu7NSEvsjiKbqwXtJ8SsshUoE2RL2NGrRzdv1QnAsxfRVUjex7LqZ9JxeHtAW",
  "key16": "XZtY1YrfQPtLs5moXsRqE3FddFrRrmGgWn3uoY3armgAGhsdjVqyzJnJfECkgutUBUmHAXMMPXBotNBsqSb4d6i",
  "key17": "3L2bV7cca5cVqHCsh3tMn427uneWE7iDfHprinagxhtXZLDHsc8aod3EUxMBzJeWet6EB7PYVXWpKR5vNcB2S4Nt",
  "key18": "3veTNLp7smrn9kY2KzfHp6GU5TabdHt5paoHiYK2aJbQD5swi7izfbokSMQ5Zza3Ru29zbtVbChWcSACNmfzqcED",
  "key19": "4nbZUMhnKfbFTBivhsfTbkTtePws5bC63LPPbvGDFCTcJ29LkJWgtiPbKDMw75iR9kBDiuuaVWDM5QWceFspu9MV",
  "key20": "3E7BEixdgZxc6ZAELY6Kw7csGmmFBtjh27pbmXy7azjBJezJ5eq7wv61LaqkxKkoRqF95xYKGMj96MBGeb557HBV",
  "key21": "3NeysKuDEZCby1qbVrNn3CcdYPuS15M29T7MkNd3jePQa9AEU2Mkw93WaN6yugyx5fLU9aC7dwq8wXPdMtrKMcGT",
  "key22": "5kRUtWcuNm4PrXn9pgcCRqfxYjkgtfE9Xv21xfXS6TPMv3aPwbwdv2m86uKY7NyyjN7GFid88zLqmERjosjZpxGx",
  "key23": "2W1LCX5Gr5zQsNts7PUHXQ8pRnZs7G1iYhEMJikCQaRsKA7euVMKGFT9DfgVNULQJWYmDMtKDsAtRDbey3ozXhRv",
  "key24": "5DtR9rxeCZbzXGQJr62nhGDRGxgw8Go2rzRwRDVJ27UfeKQtP8Eyws28YsSxYeVSU3SQ37UEYWEoU82nDqibidp8",
  "key25": "gyWkUSJ9DN2B6teWG5G1JJAiWtPfTHmoXpg6S1JtpDiY6E2AmHusHyLxs1PXoTqHD2AnpBseQ7HaYhVV9aGRAjf",
  "key26": "3Zf5Uddi5v4iN8hbCmyVVq8Tebb9EaCmbmno7M8yLPT5bQYCa3NVrYxi3LpLzLVbh8sJN9uRcrQB8Jh3Bng4JuFc",
  "key27": "3tmQk4EML4752H3J5AyMcWa9wT53WfTQWnT7Smy3poKUgiuU7QEcTRBBRwbDfgSiTD3jUJxcBCUxf4kDBkkvbwWM",
  "key28": "43WvDSf4cRksfZPoBiNmduwM94JnHqD1nhSzQs1EtiWPUNzLRRWnLVEFGvNkBLvDaL96vVQYXNRQyLG3cdSuo5a4",
  "key29": "QQNZGEyvQskkFhvMfZ7rzmFvCMsk6B11MvoWRHgewdj99495buo6msV2e4sVWZDm6AcTA5NWT3ZoMNUgAUkmsbK",
  "key30": "3Kd9rc4aiqHDq5kKrqVBzMk2p1kZJYfRQ4nroPMrRVuwuxTo3LLL4DK6ew6uaMTVf5DAzsyat81zSRn39YZYZnQY",
  "key31": "2vgxJ9kmRNHW3M4tSHknX9efnnpewBP1vTEJLmQ7b1iWnKhizoPCGBnNxPHn6yzMNxiWSQQC5x8VY5ZfbafeZpBG",
  "key32": "3RoBwc66wwqDb5v6LKapeBCdKNEjcMZ5X6zmG3cNZe3anHnjQFxFH7GEnUJyyWGDyrwzzx7rzrpyxH2vVgC9Fktr",
  "key33": "3ZLTdWN68AFw5H5UHitrZ2sgbDJhs1LFxZ8CYDg9znKZXeDMoeyKWEyu8JfcKD7DCkdPnrY9xHnzea9YSQBSkVUo",
  "key34": "4beCZbHUhE9CE87Amit7shbqYjTRo74QEZrK9dW4AY9jRtLc3bCh25wDbsMwb5p6N18puhnbrUi5sgEdzb355E9Q",
  "key35": "3iNmUWyjt9F5h6beeL4WXhNyekGf1iShEVUG7z8f6v2i2qf3vJvWWhR628g2hFuHM9HLDWCVMusFCwdXdfiZjEaq",
  "key36": "5B2XQYC3x7VuZF9MGvcbWVohYigFNN7F4BLozoaVh8H985kE5fKJ1trE3NeYKsSorebBBForKHGw6heeznKcnLMi",
  "key37": "maLUw7KHHfDsRCZ2JwXei5PST1QYX8YcWda6XF53iatVxQTQUTJ7Z4bAxD7gFNFVG69SXnxK8priUbSHUFzTXRZ",
  "key38": "4DUhXTHLenM1wmPv9R6WM8irdiZvqqfB3jA5YpHJJmaKK9J55ZZVMcod6M1uxEgupDoxCQqzDmgRa2SYfLEwUGuU",
  "key39": "51RDvXkj8UmRK3YJ9tHe7Qy79CuAwXHVb2AzFWDJrS2ZwT9dZYmN2cMZBkhfxP9KEPyqdGNGbwvzYC55tAcpwVJA"
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
