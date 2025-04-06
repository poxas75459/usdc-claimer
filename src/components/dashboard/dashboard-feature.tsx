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
    "636Q76udZoyD8wnaA9nT8aWjHGu7GTKJrNX4Lfwkx4S7U88PQN9qR9CAnMw55n6FiPcxSvKSe6eNhMHu1NJ231FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hNKX7gAtUVAue1NyymK8ZPnH4BFSrU2ZSMkvmmkrL33gNx4eom66h8Un3xWbczComkJZuTQFnHMnfvG8Vdf9Bp",
  "key1": "3EcR8QTeMfj1RG1ngew1BWW3dh2HEqoWHPA8EpnhZ4nW6VcJTgMJEvQfwYV485BDvm7vAndgmxQNW6PMjudhscGm",
  "key2": "668vcMCmxBwKJXwsvSp5nMYnM9Z2YLfKHcHKAPkPDzLYEmMKcSTEQM7JLefMSfKRgVz7jWzMLAQncWU8KSeqkcHD",
  "key3": "fohhLXVrXR5NSPcBn7dbJEmpZVGHbkjpd72BiL4k1fyoU8HztRPickJrxWc5Y9HRpEryHbvYWbr3rGPML2zPtu5",
  "key4": "HW9LCd6vMzfe5HGmDzjZn4RgedXFFcRCVabEUPBzSUNnxXiSmktm6R37xyA8auH7WQeoJTWo7m9LffRCQtKB5NQ",
  "key5": "56N7nagXfCPYDEMehE9wvjxZcokC5HjHGxTDx77N58vXpV5dmdWfM4tKVPB4np5TwkZjrsuNJmhbezKPUks3RboE",
  "key6": "4rdXpydDGRfXgknYiNR45viunb1YKUUSNrTdhhTbXthYEXbfat89gBQNuSxyatpLmNEqQqdQZjfK9LW7GhhXCzCP",
  "key7": "27kVj5kz9Ygu1tSdWtiJwpBPepJShMfFvnusi15XyXBcD9JPciwpHSD33gjAf6C5ZG7AaxLVUnpbqrsY3Mmu7KLd",
  "key8": "28kc3oQV7g67V9okupeUEuUsKPL3ZySZ7hYEkwArGNovEc3viSAS7ZJMnDYQGtCVdHyTrsvwD1FoKnR6hCFd3dFN",
  "key9": "3thhiCqoqHWr8h94DH8T9aswM5YFTLviMy6TtfCuLmfQ5qiRFpZNnUCikdtTq3Zy9XCuRnMRAEeyqTd8E9dijL7N",
  "key10": "2wpnFgoF7zmF5W9J1G6nd5p2LhksY5AKPa2GC4aym5rSpnVnFqorS2RyYxZJHwPwovdBdhuJTtAXF88bJT6duvuw",
  "key11": "QEiEz4T5gMxzici4AWamo3rtSKr7pH6UAom8tYZizn3541tjvYWw5hPU4iVmfkae8TFPYhxdCUQ8cwart8vshEU",
  "key12": "wzeZe5eXqDLZDJ4PygatpLYbU7Ur35zYCggreHzD17av8TxakPFsi5NQWRRkTN2biRhd4UsLvFQcxZbXuayVnfd",
  "key13": "SuMm1TNy3S89De8sdygwVD1keHkeEYuZT2fchifEUr69ve1Fe43BGEfRRBgbWVn2dcVfoBC1ANpkskPyyMwWHwX",
  "key14": "2SqeEyr8tReM8vbp9hKrzFNYQa1NoCib3Xh3eGEVJAnezemaTXcD1Aui7xrexSJ4txpb64r1DuUAWCow1w6MrL5E",
  "key15": "2stqfx8cpWDqED1itdJqyCmv3MWFR7NAW7UnL5JPNWjUmS8Drk3sQrd5xEBKjHyQEqwvUBTyU57wKDutyU11QpKP",
  "key16": "5MGc1ZbddnYg6aMBTrppfwTXe7JWQe5EhnyCHPLRo8vTewveXvKRwbYyvWvWEx39JKbwXxjbqw3wFsadRbJJMCLZ",
  "key17": "45L3ik4DoVYuyqGvNRHoA8HTaHBZuJFR24aq5oyaC59VsEZ55ErsJBJZsYuZybcYv7c2TnipBtv4nAZMWibopM6p",
  "key18": "3vCHdTb287N4KaNec8vtDdqKBJbRTTAFmvsrgxLaoknXNNh791Gpy38h7V8osXmiNdabfNLTaXF1LV7QgfyUNuam",
  "key19": "mNJLa3EiAjwmutqYwDqRCC97ineqZS5KrRXCZToVEFUyBc1zjdyAiei9wNJuNxGjBbPBBGaL82Ui58Vociyko4y",
  "key20": "3njGuubt1vx8un56t7DVhpVStW2d6ya3TbUR6k98FQG8bpNUpsKFrArkvmX93KvCdZbYq3mGWDUVVc1mdsCQdD6A",
  "key21": "2CUdtw69FeThQVPbQmqvLxPMbCcXB4KkooKUWHjmy84wpxF7bxtjcCdDV23eDX9Syec5zWiwQEpMFvzpAbMdATVA",
  "key22": "Da5YZMzfGfJUrv4n5pgXvbT2TUzPX8qWr97ozxQYWPwX1sHufJV3kwh5SmtaXKrCvu33zb997V6bwqbwwwTiAwf",
  "key23": "2DZhN962i1nj22EFfA8PRfYxiaqLzMJ98hkJcZuaVRnJfiAnzronxeTdX2bhSP1H9CHAUY4KrSGoqTNwGjLhgQJR",
  "key24": "XbBQNHD1pJSfGc2YcxWgHu1LdaeFLSmKQuFqh7yELZYRsPGEZgFGBt1AGjPQG81GgS1Pftgr471K7LKF8o7s5WN",
  "key25": "BiaMou52L9fptPpjSApikQfKkj9dhy6ynC4vajHvo5NHUNGMuMb54dtG1GzibUtV6tpE7k9XEtwxfA85tLH62rP",
  "key26": "yym87QKsijo3JdD29RfntEzPrk8sMkX4gQk2wVz5vbitAdACQtaGTHZccTdAsjYV93qmhFmxraZ2zEyho5zC5tt",
  "key27": "4tCtmsuzx7xircRiRogVEULEDUXpGxQeGo5JK3eV9wJBNobWn6GRUcdhZGyetUxEtTpFAWJpoQB5c4R8FeHE9bpt",
  "key28": "4fdWitAXbEHcGLbs64kaqRoBXyEcq2n4YRedk4bNyQzHb3JWmDoTdqjww2c9UDt8vgJgBTsdgVL5pfNEYSq8LSVV",
  "key29": "5fcyAceSBHVUbxTbHxG3AfueinfrZZV1hgdTjMDmx2wkCnYyY48KtbvkVJWiZ6HDUBx8GGdPWoo18qSguKTVjjgK",
  "key30": "5JE6DZPxJtcLgGtj2SkE6AphPGwR48nHK4ApK5LaUcfQ8iUJY57aFwRCazK8kLgPntLgYzrzcJNDZKzXpZMUMdT",
  "key31": "2QMR85KEEME98zoDvnTuuu5Z8dWwhDDiAdebgqH4NuxBhcF2yVkjWEdwEFBfGsppbF6NHbu75jEFsgoivHHVjZAP",
  "key32": "3ffeoDPZMoiC58NSGTE98ECsECkcAVj9NTbd2jRrznLYtDejo7NH4q8i66WjmzGGNwFExv4hZY8KLwKHdE97tQW5",
  "key33": "2ovfFEBE1wWLzYjwMTNwL3UMp382u8cZ3HJTVqu46tiHRsxxqwf13YxzRbZLmzaVnZbraHQiUsUBqhxxV6X6pZ67",
  "key34": "2nhagiwc94j6RpRdsa5ioE73wVPt9AUWRNbWHsRNPi4ktSC5MJhTsfUZaXwAdfU3kDuJD2Kp1PUgTQxD12abYJzD",
  "key35": "9MbrUjLRgKWR9614XriAeZg9x17okmdAr2W86jJLPkB9iJV5xbCVDVf3jsbXtH7wKg3zazby2qxNRASVfP8aWUQ",
  "key36": "4Vfht3VCoDnv4gYi5vvd5dHscafLt6cCQfttoHtuFKDphRVgv13qPhLLWYsEnFhmJsgTqMgDBYjMmy2xqm12GAVv",
  "key37": "5xnPNzymHp5vALTosRVkXvwZ1h7J9mU2o1kyqdT1xbQADdJkiyrNsuvrzA7NsHTGg9BoXu57erxva7qwpVfgVn8M",
  "key38": "5pYyaaSt392PKQWPBRpCbdhJZf71fa1mfFwjsPb67M3cooMmjWhRPp6N8QSUSxCD5c1QPDYAvjXmCzXXmm9GApmS"
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
