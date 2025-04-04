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
    "4eTs17kxEUrb1xu4J7ephxP3irmMPnxxvk7X3yVrwzYKtXE65AKwzr7DMpCsMeaRM5pZMrRCGBHWSAYXRfaCxboh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7NSAWhG7zZyMfRp5bmnzKR5RcrmWf6i1g2MLL1snwQuLzWk54J1nqcD983TYGTktWrLnHXv6GJ392eA2rc2aAee",
  "key1": "2QPUspskg5fv2N1poAT4nhCJ7ZPLMa6s1CwtXphizYdPoWRX3Yj1eGGG9BwPscuBzjZn4PrfPJWZL9EPKijQPaMT",
  "key2": "3JrCYA7xQNt73QfBUAYTw5nJvpBVaigpAm9uf2M79NCTNaaD15ppaf8njNCupXAbkmEfKrjChi3gxUJAXgsuxU28",
  "key3": "3feZe3CTxp1W8AqHwhzaE36BKBXLCG4nf5GFHd4DM3y2hVJRQuWwAALj5vP7KceQP6NTMZAe78jWCn8ZinMT2Rvt",
  "key4": "4hmq1QfzgvXAMLHKKFACqLkjFkiZLscWhFfLkUq2P7PvYbHcE7dDYsFYPvsj9aBmJoSrgEJMpxGamn5C69pVeP6T",
  "key5": "36H9kcGTnz9g8fTXptzFVxhTRLeNran4oo1afM9TTNqw76WBvKh4EMv5w5KEFPXfxEg5evGtZ5Evse9ErmRnHPfy",
  "key6": "2Ns1SwDrrprRLSrucSY6XNUCTZV1TBgJRgfsSMugsjEfnLNNBAszT6Noy4nYM1nZnLwkLZNTBR9ARcWgkD3SdRnj",
  "key7": "2fobpZ1L2AFsLgQhAHkCnJGmRRnnyoHQsb2qDkxa6skaubEpMDD6DApPKkXFFa9t6YpszULfUFsDRLqSr45p4dwH",
  "key8": "3FSv9HRFondp7kKD8xzshwYEGTrMbTAmjY496guKrP2LfuHnFhPkzH4mZKBmiavVsMWnCVdvbL18ZbbBwzfNQv7B",
  "key9": "3zhYoccT55mvXhRjeuJdNaiE81boQf1oUjCii3wVFwdENq2ZpEtfc3mmgFsrqBXNKedsKerzgwtQyDH6exjc2ar4",
  "key10": "4RV6WDEsrvqGvHBHN8zxQHUbZCFuX34LHt2pxBuM5KZkVLNvHNq2ZFhHDfvquReYDDvjiprvyHjm8t1mtwVqePXU",
  "key11": "2SSHWBuvMQ1mj9cteUFbp8anBAtfHtJoeoKEU2WmSZET3d1Ey4NSLCtxBQi7FcZCfzCn2b4fquREYWywtPjnkxX4",
  "key12": "5FHB7dwwjgV6Yj4W73BDeYSFqjwsfj592tTds2RJjANM7N1CwJrkXp1bRmGQNoTacPffCDtyW9oHhRM6LsakhWav",
  "key13": "35JD1U7GWhts7U49S9DKLqEDRZ4AcRCbCkjJhv52REvdzZ993bsmurLcgz9VVdyGUZzExjLd8joXLBPcxjHvpVba",
  "key14": "4nq3v6Fa3XJYHxPbGYWcnhZQxUYZy97KMCuutkTLNGjQgnCNuxv4Lg9u3Wuw5mYwbDB4CwuPEScSqsJNujbSUjSJ",
  "key15": "2dJ3zkBixH7rxM31ZdBEecXUkBrNxMzj1mDGsnkh8XyHEM7gpo3MAa6LdKxc6E9L1nz1s13iyabaaYPQN2cuvFwY",
  "key16": "5WoqSwXt5ov14mqFhv5aMcDhaDob2hFixSLKggBDdqMweo1ojD3Viw9Who7Qs427Sr3nNy1ZZv1Hgv64VYASRU69",
  "key17": "5wSe295nDDvw6n6DF1zyBsukrZRovi6naARioyvVxgdchvwTPHUZFPCRqwLkDX65g4HYnFRD7xUcbYyoUpjecDYS",
  "key18": "2vpmQ4UnjPh8WVuv4ktJUCeaYcj5Mc3NV65FLXCfVzAJTHYZ1HsTNAjk2PeAx2rsP6RZFpCUj7NoNdTrqk8SH8uz",
  "key19": "RWCxMYNHkK8ikuM3x5EGcGHiMxKC7E6DGkBW9SoL8pfGojtsnwRQ6LENX9hFgoRHP6DLwCwje7WVDrXREwrUiJw",
  "key20": "4jWxQUU3NpPxUQs29e7HoQdsK8UtzXGuHX45jNdDriEsy9eQ3kPGZ4pSSrtRacBq5vVigMjRR7JxrsWJqycaxucR",
  "key21": "5VKrGi8WuTaGwoTJeYfQgPRgem633n99dJS1VfpJ1yQSUVdDJQm4J6d7c8ShuYhV4xftUGszwFTqJh2jsoFPfLRf",
  "key22": "3JUr5yEAEzHoxgv9Naf8R8E3HFb7ESHck9zpT8ZVkN1AXEQaKHZ7PUNMwUH5L5N9fZ472bJjrcn2AkcBbXQeCwvq",
  "key23": "4ZUHuWLCjHcAG9PtwevNodYhA1wAU8GciZDmdNSphkH25kMoTLmcxCe5QD92DNXY3KBAttdmmYGge95aHkjq1KJs",
  "key24": "5AmNxcCUgbXqGRBNtk5zoq4TbCC3CkU7Ao3qgaJju2XjnL6xVnNY5zSpQvLBrknf88EaeZEhQ9TCSuKvsDq2dfkU",
  "key25": "3gE8UFbrQ4eVooCajE42j9cKsaQvL9ezir6EHAvnpEt9xRj3Td3UZGDgNy6cc1wgxBiLAas1VYrt9PsthbcBpB5j",
  "key26": "2NeCnN1HxtuQ3HfS176rxj4sodocyB8yFP9tkgCGFiZZygLxr1VfWzw75MLCWVQ4fL5kLHekWwTKQcz6yobajFMf",
  "key27": "3NgB2fitoqU5PBwkmqvfjJ7vPtMJNMEwkE2T4djZtdPWDHnsqiDSgCate224jyCgMBmTFi8SkBXwtSddFmEEtWfh",
  "key28": "2CCjN6TpwhwCGijmCirJxdsTaRAHdoV1AFnbh8AYPeUfVcxzdHYamezPoycL5ps2A3CigHbKi6sGhsDWeoxKcrbt",
  "key29": "3WZvegfdNDX6V6pyMA8N7ebF4LTyr7FfvwfHAfrzteKbMuedm2y27EhXytgHZFsbG3c28NmmLZgp2pyyyu8d7Gcj",
  "key30": "X6NUh5rBLLUZeNGuizvxCArdn8pKF77r1YogS8sekfq9TyxNk6bxc8JfRywAoLk1z4jV8WmMpkuDddPVTG26aw2",
  "key31": "KHeVpbM2vqQyXg1x5R1X9pVyTn1Gpj8DFFGLHLnQwqPWargNGc9yDe2efs8HLY7SDApbfDrF6865an8EiWXxHKU",
  "key32": "5woeYFMryAdZFjW7TfPGd1BbM8UaiqbQ9H2uATsHZSLy8HJ7aiV5roW6YoxdpPWmUR8owwrBhWcRBtFWj8Pe6g9z",
  "key33": "38stH28AU132dU8LepaAVbb8zCuBua9e7CH2oqPNGjKfBtB4m7fZbgNbjjdvFTaNxijv2TGa8EKQ3Ts3FwsAMUeT",
  "key34": "2v4tRLRux2xL5npe5VnWE44UkdgQ1GT5wkTFtgndsPJ9NWWRT7B3hWoRD8Ga7CpNzKp9Ht1HzzfZWwrTrMK4YY1K",
  "key35": "36heHrG6XEEZW9yZjUpxuQbsMmmRipUnSiDSkJhvAV2kkCodGtSa7YududvatVssrvNHUaoTQ3xAQp2GrbYSDTbk",
  "key36": "VNtc8ayR8NrP3koHiWn2uosrdwY2Nnwqa8MLPNxqMxcSNtWyCWj5PBkYM4i2qbTvt9daCV9Q7HusbXHLBw1k19Y",
  "key37": "4kZLdByKKnj9bBHDNZNksr7iquzrgYGcBePZsav57sgAiAQGBtpAdQRuVrmn458ADgxUy2LkzHCkx32h7uCybHf9",
  "key38": "6NjMyF4W8J1omQnPcCHuZc8jb7haKBobAU5dJbqJYioQ44qU5tPhE1rqn2DpitKRoNhPpvbyoZvTQcaAWvtn5B5",
  "key39": "AZnoBtRDkyme2W2ts318JsxpuDPgj4NcuTNCEsodjwPJCdxqdQiaVvWnuf9HajTiyvqKgeu6GQAt1GFCpQ4Adqz",
  "key40": "5yibJ4YREpGGURPyn2bPnRYxd73Fj7apGZxe1DQBpdhpsRzaC2WTuxHp8dJwpFFBcTgMpjDwUfQLmXXqAPYSxkBs",
  "key41": "3c5iEJX15xDoi3n2YpGgBNNKCGRF9dHbTwz9ZuTBSoxvWrDLA9PkT9EB24cKxUora9au7bJtdYmAC4F5Ukvf3W3c",
  "key42": "5Ej7nssH76fyEQguJ2KQQ7zZ6K5mytNeChEywSNdswzgjmV5Pe2XuYGMSshW66shwWb5yUA3UeiM8VKfmfrV62bS",
  "key43": "4FuLprmjFf6YZKNRHJdjs4ZYbtjyvec19JLB4aUuF349KHSCVMoQGa4jSFPew9FYyS2UGuv6VQaF3rjWSg7zomUe",
  "key44": "44NxirKzSCgsasToxfurwT1SqFa4TymWQ4WRn3iqmu7ZJ8YejcyrLyg3hT5pkabtWPzN6kyk88ypR33EKDucAoD2",
  "key45": "2fXdwWyuZaEjSdj3X89gv4ohZnp4M2JoYpWVtETtmwhccQAC5R7mCANpAdnh7cQxj1Z5zvSCf2TJje6sk7G5p3NK",
  "key46": "qeoVCH8SeQxyYhPxseRjCKEEovfyyuZfU999fdGyFBje9BfnpXbzA5LNY7MwgpMF766WcKQAeUeRWxhHueBDw2S",
  "key47": "2TJjLx3XhyPxfr7zVySPcikcezvxiZf3LRGCtdmmDnWsaqwT1f6xpL6XpxABvRAYcHDw7Zs1dhhm8zeedHFZasQP",
  "key48": "fMxxje1TdAdGw9U3PJZYzaM1DLucRZe25C1HKQ115LjxM9cgrh7gbkJLMFoup6MVAUkXyXu5FFSKm9BcZfHXx4G",
  "key49": "4jK1kCm7zcVjE5cgWi6Voc6NVfrzgVEyTQU4joZwV4Jbi8YCJoE7Te3eJjH1EJiaE6uMiFMPJ6nGR2B1zdN9Y58v"
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
