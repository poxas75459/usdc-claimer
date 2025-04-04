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
    "4zrcAyYxLiZV7EB7w8EgTLygzunNf9kt273fX8quZKpr82KQdEmnmu1db9seMy4aDTU2QwXLcJuXt6DwS2Uuj7cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uESoVpsSByLiBtQHNXfM53rJiq53wsJU59cUe9KbMocPKFFux8gr1bigXaTUPtF7v6EfpRTtXJudUZZivPpYbXa",
  "key1": "mvGozoQYqpBt2qqmUhnyoLcSdFWEMPqV2eANWq1qSk8b9cvgaUDZHpEu25r6SMyE3cAhBPVQePgJR9pfkxq3NS3",
  "key2": "vTVFMVXximS9zdjLMo1TftrzBgZ49HGRV9KPvdLVT5772u3FS2Zo8ZzqJzorMMcbi2yB6EZZLzDuwqC5nBQBkdP",
  "key3": "5hC7xSS28y7XiCqKCaf2c9Nsrszk4yocqbCXfauxXbkvm9TbLSVq9UHD8CwUkYGuKQiCq1a1k5ToccfDYw3UrmcC",
  "key4": "5nMSMYcZ1X88jsgNobpv6jc8Uwv27AjbyxUaPhkBd4wu4QPk9EiwnMy319SidzFuZJtuoFxzhhH6n1PHCgukGuwq",
  "key5": "5TSAoEbe3pqXweF3vLg6eW9N5UMUWg3xBXXZfpD8WNtpj6WTbqu2N7A6j5cJTWye3mqWhoNARvLwPQvHkhrTFoRi",
  "key6": "531vTf1MZA1ED6EMEqKYuJ2sKweDuM8CdK5q6SQSXKU3qQRzKuk5EGSpacYcwvk9BkHj3hubr4PB8zxgGLdBwE3k",
  "key7": "3tG1MwfzGdA5EjrH159kJ6v7E6reessbZZjeFEWcyiMPpdVQ3Lrb2kJmRLpNYQPNoJ6UNPPcKB2cvs1qYKS9wUQu",
  "key8": "5L6Qw2aBTGj6FebqR7waiibWRUucGgSGYXarDMZqTvf3EhAzDuny4uPKCnBBww5f83VFgs8ws6Q7yMbpxmfFzhNe",
  "key9": "2kWmM5mCiEy6TQsJMV8HqXAASBQ56Cu3LAufQUnyVJoZ369JCx5PXGkBPwtEXiqscsQ4HxHr8AE87Lb747pzzqsm",
  "key10": "8LXGNXu3t42rS4G3w2Mngy3tdMLnGafxFN9FC9BN4yQfxthkTrqWcLtu3VakStNdDRDgw6quqZPQzw93w7dm8Mz",
  "key11": "5G2TsdBG3TJgid9F9NtGWpkxicuQHLaoyzowMcp9iagPbUikxPngjAjbnXoKh1j7sgJXo6sffkAGX8kxDqn2uiey",
  "key12": "2VtogWsD3daePUp2n5Gz6b2HV252L3eRGesNyWsFJgwA4END8QRcbr7eFS6QBCFZdk1HnSyugRyD3XgFmu8sx7f4",
  "key13": "2RrAzSXRzN3edho2YJVeAsBHVYq6HgskyBHsFxdA4jqu54ZvehqFFxgNpBuXscs3bbULsZtxzTNZXbTTW28EwCG9",
  "key14": "43J5f16TshFLoaBFykF29HestiwvNDSGcCZCJJ7Ytdfe878zAqhu9J4X1sKjkniGvvWzUAgaFbKCcixgULZLMFxa",
  "key15": "2wknZXoLFXkUVuoowAgKhhyJE8SHcTJW81Mz7XjiovVBvu7Rm3LsjFFbF8ukLPe9Q4LWofD6YEnzy9oZfXB9bTb3",
  "key16": "224Z6xAD8nDx718S2egsfW1KemhgtHwiyY4KhXUmCWK5By5RkJ95wssF3QY6CPoXEX1PbeoojUQ9pp3FmxNYXf4S",
  "key17": "66nHU9bmRrw2ZqaH5uUJFwScqvuh6YKDwsN6FW7vGH9Z69pUksynW7sJLMu6ZcXfiYb8bJxjruS88PYeD4azmbf5",
  "key18": "4bx8pWXz9Tt3Keow9SiyPc6BbNviX5iJdroS2gjphzQYr4V8jUpE9sp2aTsQMtUQB3bie4xMpSxeMjAaAsHUsBqL",
  "key19": "2SGcsQvj6EizCKtqLAbMpSdgAD5T6FETfdmTkREE2zWF23nFnhMeKG7aj6BQQxcBB5jTdr4ntT5sGA4efDLCCo3b",
  "key20": "5oWKy94JXYr4moDKNHRuqkJ1cAfa4Vqi9fzcQcaxEXegdex4TnZJTSdE62QkqVF8PVTVwJFiLrd5VegRDV6T2tK5",
  "key21": "3qTqhEyYmx7rPrfjoHuF8G8wCrDzeEmwiYagQpqkpGUQx4gFUg9xVxga3SSuYNcS22yE6tgSiFUMk3udmY9F2cGj",
  "key22": "5pFfHht6Mn6R3LE2p61vAcBqCph9ZdiL6CZJW1BrxLHsLnaXxtP7yCRAw4RdJHrPtmw4wDHDJaGsqsbtNz6S5oMU",
  "key23": "35j11pcRi4BbFJrAbj1o9hfFd9PMSsU5JSQU7sYJRf2dRPaCsoShihQQ76Xm3tMbiXQuG9Vvr9UZMWfakJZXzAYq",
  "key24": "2HfRL58heV469KcBXSgJ87J8Wy9kUwgkkNNrHW3Lsc6e87iuFHrYRV8yZtU3QWryG8EFnHUS3U1vdNYN72R1Tu2L",
  "key25": "2WWgu2DW1GrNLigr8CGDBDbS7RN9idwNezKHXj97pR9XLHF9zn46AS7YtuML3cmXY5Az2h6Cg8V4tkPrdRpymEcB",
  "key26": "1b24YoPznNp2T6v4f2Tubh1wkKSw3S75CXaScqurRwHQ9Mz8PAEPetCviHome7MhyRTnFx6FGBMg7fzPd6JPkvK",
  "key27": "2w8iLzpLUevtN2iDU44dWWygnAxvWMiaodVqqM7AhpSsZWT1ZCGN8qxZaQ1EJFETcScoZ3gdqfx3PcmivXyJk6bS",
  "key28": "33Rq1kec33Abb6e8bo5cbMUYZtGyqkPwX88vxK9E9i3KGe3uhrMWm9M2YDXPhvM5detXqDCAWnqbsdrxX5HFWmvr",
  "key29": "4hsc2b1w9MATkzMJiGVYey8gdcQ5csCJdpJFWxveSc5jhVPCJBcMs3rkiDEBy9nTdW9rvUKbbT12pFU3D35tJSHN",
  "key30": "3GT91ciFVWMZZtxarXwGv5fQpDwARuNdNiUVDAi3TYxYqteLpiJaMJfbG9waf6CoxYKYT77UC1u1v4Jc8fmckxTw",
  "key31": "3ky38k6dk7eXeLxw5vfZ7ePnrfae27gtUHg9CJkeAfrkjYwkx2dhtxWkf6rNiZAUNQaiWt8A1N6pYKMmtsEwpSo4",
  "key32": "53AMt1DYQ9fo1TkM4AMfstkjazAC7eXd3wtd1duXGXTtMjQySr1DqZhUhD7R6ZvSYEvmSgCA7pWc8ofUjioXSRA8",
  "key33": "3Aa5LDhfRP3FBRiUxfncYgoRB4oQUHv9SZ3FS9HuwheafWiSraTNc4v154P5KCntsTWxa4dDZ4xEicxdC9cAKV3k"
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
