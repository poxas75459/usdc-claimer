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
    "3zTPMVXD8pztpCEeA6wJopKc4LdeCPPBuj3oASPk52tVfdxKL12j9cXzcEkqciK41Sws7StDuiPy6v1PtQpGeKgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnF7uvc3VYkato5g5AyPg7C5isqsPFzeJvBzeTeSbvuM78YjiPHs982ATe1gaL5YLXGbJjmnMLXG6QXerK3oZnr",
  "key1": "3Q52PZCn9bpaekB6h18gMUHBivmXiKiCUmmMRDBr6gx3yKVG3NwKfUkmbQuYUaiFJUT8BqYcHBD1x3mhUKPEKgR2",
  "key2": "3U7NnGJFnMdmMHqTjwupBz8ETBkga3hBHNYE7j2qCvZX5u2YvpzfRatZXP6xxTwduAWgZ5c7S1FYsKm6LBQSjQeK",
  "key3": "3SmPQQcCiR2xRrGEDNRhAQZHhnSKQv6oxMduJHEbhZNBvFt2HLDTunkTycJjj5F9su3gvtHigA6VRUfBohefSybw",
  "key4": "51iqtJL8ocYfDWbFtRx9Nmjsasc5ofUNFpSgT8pezp2ZajGdfkZ3gtdfoxrpNyoHuzGvkTXiESD8oFvna48w5CHw",
  "key5": "3LUsNExhDQWD54exaeXTVvZau8ME8S4Jx1wBWAhViRrTeapBf5Sjk8UhiGWKBddwKVWx4w4r4jAvqCY64PYa4XGR",
  "key6": "2Sv58wt7oQY46DHTxqTyDc8um7jEpC8ZdMGMwydAAx7DjzuLM1P7AuLCE9KxmKZTzDSAPpMfbofpturtA5Uif5bk",
  "key7": "5CXqJve1pKoVmtf7u4ZXzgEkFQhrn8g35tRtsYqgr2BSzjL9VUC5TwJijcgRy1M7PxiqWfTKYDbJPWi2XMDARrYr",
  "key8": "3t8UxGRq24vguHnb6JSgm9sPcQNoMD4yVtwdgF9GyV8saGrnsMAv9LjHGCfA1HsjqFsxaWaqihRwfEbvDcD88W8C",
  "key9": "22ZTrBFNfyhTd8ZqAhokXK3ShHqgggYGotuCF4UNDkEzpBxhMhyPF1z8uJWFPLHxMAAsGgDGvP5yRdMarSCSd3XZ",
  "key10": "5duhMyBmD9JcT2e3NMU7anfiMMPcY6fEXWnmhkSvDJ8X9NKDDkEPoBR3nwgoBfrKQehFTquLoPfUj4ipV89HE7rD",
  "key11": "2tV4Hv3MMHJp8PWJRxZRqRh7k6MeLLuURbhDWK2YGzmHDUyeznWF4vsnqcWjrhZrFDEK6f9Hnv3dqJ1K3oB4EReT",
  "key12": "3eLgRcL5AaPZHdt4meDZrTqTuoNuwMcBZFtodwbvmZvBGS3YKeyvmdm2jKVL86Ehqmhutb2MwP2qg6mbasnMTnGc",
  "key13": "4qfa888gBZzHCjSwC7V6ETVcXPGXXEkEtHL5nDVt16GMxo7q1Mai6c5W4UCLQSMtzn3j8UKAcYtksC7DhEtiFug4",
  "key14": "4CJtf2hruUCJ5NJHosTAZPpUxiKZgQB73azHopPSauhTANSA1ZgMyGbcPddY334WWmFrWhQjQ4mmAwXgjx2itWC9",
  "key15": "4yupDRpdy3ZPCEye9zx36Y1eMBJvndmWFmUzXuu2hWCYJNEuTf8zwyyNTYhjDaqkmfD4VEXr8rM8U6Bhrmhi2SSL",
  "key16": "3h8MCrGbdkJ18wYBZPnDy2nejCaCNTqTrpynjnKHLNvaNXBSGRs2mkBDcZXqB2M5nkeJpFgq7CJJ96gzovyz3ZE",
  "key17": "5pzekp1rr797xeEteMTA7ucgzjFBufoxwuR4tT3r9qhi11b3KHKVvdxkC3W9qAU5cn66RfbzpZcpwbeb4Jh8oxvo",
  "key18": "3aEM3eEmc2LWzhxvdEbug4a1B4mZkaNLAfQXmpRkixTSPkiM4kreQDAd2weYhDpexVEVfRY23gnzy1nAo3Nzvbgu",
  "key19": "hQfdbpXjDkK9Mmi31mvR8tx5QdbL5icVa6m2dau3oF2NHehETU5rcpVfua6r5AhaPrB6wHP6rjxPFw5RM94hSph",
  "key20": "2h8vYoGL9DxTH365yv75EpaYArUaLhQKRzYtgum254WzefKML7HmEnDVBj5NAyiy7yTKSaXPQESMKHHeQaBvknF9",
  "key21": "4V7gPe5MdwQoWJtZwcP1it4aheMGhP2J5MR9sGJpRdhbJzsJxmrqVdp4P2mMDtX97msiZ4RZnhVrM6hSJAaKzbkz",
  "key22": "2jiSkrpEbZiKH6xUKqyEHt9vTzTe91mK1SbqreRthnidxgJfnrHamZwjExHQ3WeSJTcnmnuckWNcWpRvkBCYxxf3",
  "key23": "4cAKMcYX8T1AYs6Mnrwxp1AnNMbCuYeNsCVUwuRBQsabhPv4kUDUUvSyCE4S1T2yzMGyHbPiXsoDG9WSti6fCjzR",
  "key24": "2b1TV5qFkBGMFTb46wg8PqHpywunLqamxQXZygec7TStUEzwG4hE4F7HMcJtb3mY26QqLBq1xS3oR8VpnGKjVKtS"
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
