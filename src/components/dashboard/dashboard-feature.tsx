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
    "4WNmjsEKdvwv1D2c8SJy9JEnVicKXMYqSzdtQngmrSAc93td5w99FjTSpcojUUVR7PfZgjH5F7YwrEDqm22Za1Mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2kpGMcKj4h3C2D67RHuUPfCzqX5oBxkRm1ZaxomvYgaNE316QnezXXqNCuaRENRa2eJoemSQBBAhycAat7MPib",
  "key1": "526oa4wi5uw93fupTquDbs98RjrCpBNM6nt11yZt6T2RpnpUmPddif9M9T5aqKCVGoWUqGwvF9NP89krtRnMdkx1",
  "key2": "5ssfWTW8Fi8Dp6UqQDGmT3CDRRL4Ybhus3P5RqJZ2gkmEJK2EeSLQRRUX7mfRchWjugmp2AZoW2RzmAhjcTXZtKc",
  "key3": "3PnZyeMTspvU8YNz9qJhtaD84R5mGaRgtFxpDi7ecPFRnQkhVCrMJ4Eeg1jb8fy6MahgLrarmcMqza2z24HxVQNC",
  "key4": "3sGHvmZUADZpqB84NEw17kPjai2zR1psT2w6DzD82ejRtBpobtNC9Jx7Xn4xVNBWMbyWhMxZdRuUJErzqWHjYH9T",
  "key5": "W3sNpLA2BdoHqJXpPDTi87xhzHrTwwCCyN7SVv2tMuTUvh1R9F9xXhLszxgYriUMPU11XcBsEnXbB8JAwrvwMJU",
  "key6": "5PpN6Pf2hMWHPuEySTSdAwFAM2h7KXBehW3sf6q7hnc8t3Lbt9mmFjXKCBiyMT86MwN6qdh5QnyiJPDN6q8mV5kk",
  "key7": "3fSCF3f4E4seupyHVQzu5NReVSXDhnvFy5R8ttyXeKAx7YUKPphGSXSedaFhJvY6FY4r2nk5VYU5pWcpZdpuxRoR",
  "key8": "2k29vUozh7MqojDx4pyUKXUtP8AEHv2WwzLXToLGHhsXHdA4R3mmqMMiRf8TquQDzapD36fQbKwyECKHEamJAAD2",
  "key9": "5LhRMtoZAYLVh9sHHFTSrY3wPqaacZoB6y1bL4QHiLEY1JrUXv3y7ZmZgisceDQzZRrwefmRz1G5afG735jMaNfD",
  "key10": "3DbaaVDaXipKgzGQ6NtGSKf5BaG9eu2LVaLjY7s47QkvCaCvVfZ1KBhKWVT4MeVNG4ucQLuA9rRYLKUdWH9zEBXV",
  "key11": "5GkgamjMT9zGAGe4xgDLEYVeyNaRDjtU4eYyHrxvqmKoUeeY3f2cj3328WUKwReVcucHuE1Ry2jinteT8wSbvu95",
  "key12": "cbtwg2uu4BYeDPgRG8NzY7ZeUyUwkZbQ6x5kwi7aSxtMLkWNdkfQQzBAPTRRtz3nBjax36qn3jRFxmPMfWNBknA",
  "key13": "zk26vKmAXGg6dVDNe8Aq11cnPpXLyaEbJS2cWaWkbaKkpKWEVetjaesk2LNnZL6CtzTsHAU75ZYB3Bk19oukjeC",
  "key14": "4wEkkDEz2HVNixrhGNtBaFZHeKvGSCEuJTpwqfG2S1HQtsj8p45ycv68Wdw6d6y2FLg6FWd2gk7AVkG9raC7aHhu",
  "key15": "4fYr4xgoug41PZKTDwDCEXyvAFeFJsJnyA3aRezeXbwspYDG3r2m4nNnR7dJV9e6cSySrD4biEPhFJBbsA7PAsXg",
  "key16": "5bVzWSsc1KnYLfVt3rnn8diDw12KtBbydjk6zfz8iCKSrTB9JWanrzCGW6W3gBbgn4u8oCTLFVnK6ELXAdzjYReQ",
  "key17": "2zDPau1XBQhYMjhewc269hekAyt7LgRzUFBdfNdATo3sYUPcjK1Yw3p6dRVo8pMjEE88XEs25uL5aukGUPZkWb4V",
  "key18": "66HYKqe9VBzwpHxBwTtJ15tGA1MX2wpCymwM7UjHA8pFVg1yhLnXWwKXV6hxKDk9Xafip4SfSH2uudyewAaCGz3G",
  "key19": "4asooY2r7noB2fsnMeeo7pziPnV9csNhE8rQ4UnHKPn2q4X8DTHbfVXWC4qXzVASGHsJtD6cJKiKnRZPdqqVsyAD",
  "key20": "65RBaK5ScXV3sakfou4tneMyRb2R3btg8NbccEHtchzWrg21fMTzdo323Prph97oZvzmWnC2YrozcAtuXNetAPjb",
  "key21": "3wjnnUuKCJhsHzSeC7i8YkkE7f7oZ29r7tUet57XkdWSeMAZWKN9iJjk24mYVjfBQLAgm6kvDFK3FM4EpSMp9oy9",
  "key22": "3ziY1DKtCLDbz39NoJfTkeKERWUGYGrgvgHKt8G8SXqgGvE9ByVxwaw9RckbjYNewpSNtDTCQm7RHrFa4Wf726h3",
  "key23": "34n7XCpiFuPQV4xPDuMRTxVyvXFwLfPTcZBQShj29ZuY17PYcezU4ZbiQ6xDABhBxcass1MB64i6RnVUiWNijY6A",
  "key24": "gCCzChiymf4AntVhUX8xQ3zNYTXMYJEU6fHKhRkc6SgFXBmhw5JLeV6nXfeztVmZ8tZ9SkUFjCnG4Jjc9wD59bm",
  "key25": "3655vmKLo12Wf2cH87MW9RuzZViw5aUXspuH6VipLRWrGhBtEtZ3g9btRUybwjp4XdeiNfyCrtK2hCtFt8LGt8Sg",
  "key26": "3U7pEnz8Asbbfs9nafu28pX14wTcDH879TZfkLa1eYg6kSLrFtGJvNe5uESv6DZDM9CfVzLrHYEcR4tifPxqYubU",
  "key27": "8cRm9CXi2P49apf1t1a23pWJNpcpF2PhadcNadu7WXeVu9P9NyaPCxkCWdLds1L1Mch7cTty6jvWFjXgDhFfHi1",
  "key28": "uSdEuxAk6ojhdAo41W9i8WgscadDQt1rRWzXjXBUoBmjsnnAqSZYjXvdfKJ4e4Ma328SioD65dreuiL3UoQF9nv",
  "key29": "32f4Ae9T4zyD8mVGy62sqH4XxoVBVdM7F9xhkpkQKrnF7sQGVnfh5wyJawa1RHvxXYpdaTuLJN4bCtGsyLjfBnTA",
  "key30": "yrUzfk1RicxrLJ6RSpaRnpkmPjUBgfSs3GkfkjCQpNx8tiqkjeGRpaoD3fSxXZxFVRq8jBxW84w2rPpYk6j1yog",
  "key31": "3XykSzzEW7GPTkoDM6G5CjozKDBADtQJJbRraWKThRSFJXqWGNx4dKaNXGSmnBHZREMsQ5Z34jbsBHogkTcETa5n"
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
