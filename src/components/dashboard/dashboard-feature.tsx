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
    "4Rbyj84fXDkDBUqFAvAZubUicscQ7AJxD8c2hdjGcE25bVefpJ6RJGB78crevXFmGKKiut1XsDciY4W379CwNmnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f74ohvBMTbmT25eZYhr3v4iNUsGPM6vMDHJHuKiCzDra9sSYCkN1yd2t3F8hWdaW9165hHwVKaqoPsVhqeSNkyo",
  "key1": "2BgciCb4ATWK3oWn5aCesWUNjQqoyYcBaiaQgJ4hgkaExB7ZjPniMhM3sEkFjfzm5PpwcCC6Zv6SanRjC75SUyg9",
  "key2": "2mNs2yJDXiYKd4MNzv8vjMbchspyZTVzBRM4XHhYADudVmnbqM8boECCevvEBbpYsuxFYCp9gbW5DyLsXJeap8S4",
  "key3": "5Lv1LhaKRk3pkKR9qw8ToBytChosYjFeTL4h45rDwLUZUdgopDh1ogGonfefmM643Nu11Bg1mLzZmSTW8YHMewWG",
  "key4": "5xYW6c5qaGRJ4GmvyiAgqM74FpZoz3c7jNS74zAjnZjkzH5fefsRQVr1EhsM59WsETT4aBD7NzTEkpovhjxWJ6Db",
  "key5": "3E3qAC8aVXcWXWkgWZca8VprS5rCzjsrFKSsg2hTix1czSjhyDp3korES3EEmNEiVK5A7jae5La26jifrSozKGsW",
  "key6": "4PHrMuRykMN6sBqeEWGPYsBQZ4CmQstAXCYFhbfvwjTCifu2smdLhh5R9f8j1DZBsh6wBCdHY5oU1Z9nW7JX4wvr",
  "key7": "radTKm9hx4SKi1LZQTeabqi3dUdPuCooQoVQWVhvsAg9eTJtBffXgKRjjCMQptcm91QMhWzj1GFnsuwW2ipukaY",
  "key8": "5dLjm37GfYeXe8XnTxZkuFMzHT3L9HgFWsEoEYZqCycYNyobwEtF1zpAPN4Cmpm3on9MBtMC4tPscWdTP9DGzztV",
  "key9": "5X8reWo5QNpUnw3FQesVhaqzFRza6hxZHdkBaaQna7mALfWtfPDop6cwhEd9Mj6oohibBq71Fw8WP4DEJe25bp6",
  "key10": "5ts8TukTR5G69J2Epz15nrrKmQfmptA1J52PCSpGj1Rr23i1mrxif1Bn832b4UGeA42nnBN59ebzZoScqMTBWvBS",
  "key11": "3XGBtNwscG2bLh2DK3HoqZkJ4eRu94UJwtH4Kia6EgopJPtrAxb5FqLLeHZ2zMRq1wHKYzJBxH3i1a35cSEv69Mx",
  "key12": "SUkvjGUmoakM9YymYeb4MiwhPq9aWJ2Y4UWhFPaTww2gNMRpHqpVW4jNLtGYqHpvBt6kEm3L2zfq7o781LA186M",
  "key13": "52zBJvngZNraUwCdkBfs5Lx5xrmhiyadvRvCPopcVk4BLyXN1dxiuZHTwHT5mVSpNeSbWJmYJE3jw8zEmSyiXc2v",
  "key14": "fD4FcWWWnkvW9WV644guqGKnYEPntTL2LFPicAbHxTt424tMN5iNhh5q22XcnoNmX3u38Pgo1DaBNosnvrDoW34",
  "key15": "5pjEsp5YNwAUNvN88Ag9zaqG81X7ZKp47eqCQUH6JGMqjKs35NvyE9NmiyEGhEczEGHmQ9dCHwxd12whJppUwq2G",
  "key16": "Y8RbxDfQyXGJm9z8mgnrEt1X8i475Ybxx7mUu8NXNTGyF2N7gAZaX4tj611kceFPQRT18PFEnE9Cud2FjLFPLaa",
  "key17": "oFxmUtCXAkskHDdMcegdCjNS2QnZf2m8Z8pBVryrZP6a4CiQZwdK16BgWJk1TbdZ3LhtLmhV3ceerpHcwqJAWVK",
  "key18": "34xqhZzmdVd9zdJomNBPcJTSzNdYyrGyqMz7G3sFNxAGtiY1kChegZcnWNBbmCnsU8yeXh18WxSNK7pYNVA1tgLm",
  "key19": "5PzPvnjkutwdyEQUBDcNXYdFMxcb7XFLDZuUZzgo2D4M82zYL84L5G3CkdMfpLGB8V9ERYLeHhXABNjbuGULfzb9",
  "key20": "3LhEwqP6cxrvh5R69Q7M98EiQsqXAnb9VDKeLaXdhGwNKRtiUpqPnhvwZVH9tbbped6P2UKDkCdq8QvkJ3oaipvT",
  "key21": "5ZGbXZMv6aUUxsHGQMK3haJwby3BfDF1RPDKax3F5yGdAL8epWBxqiMAA4f9jvfiJ4E9DKzZCRzR17V9MaN18bAt",
  "key22": "31H7zNRXMbucJ5Djdee7uHfFXRvtN49AJUW8AtZdr5kyXZDc9G8cfyozkL47S88qunYkcPwkvWz3a1ntEh49gqH4",
  "key23": "UW2x8Ks7TiY4v4ZxqwYXGsfxemrTTPVuibuwNciuPj8qUEhxXRbnMHiv7HJErdD7UbEKzneiFUPj3V8y3FbadP9",
  "key24": "5rHJxwLTQFyjzcHpVnttW63Sn4eytRFKAkJGoAmQ84v4dADMuYPsTV9Em4PYi4NnWomtXV9EY5gpiED9kFr328Zo",
  "key25": "4R8yBEuUPU5hWxrp5WmD5PDDn4H4LDmeNZyRLAnhnLADd9ujFMw5doARcFh7dt124LyCBoaKHPgUJ8F3EnowYWe2",
  "key26": "2p8nKR5wqjz6K22UZoL5dwywRLfywyKX43RCuB6bnDMLxAiuK6Th2aG5vukJYqkav2VNgqzQL6W84erFBCTNGKsp",
  "key27": "32Js6dnHsT8TYxYvSfjksH17DXuWuwg3B8JhUrY6uPVsxGKKpe43os1dXLBe5Rf5hk5RdN7Qz6qgW6z3h2Tvt7PN",
  "key28": "st7jaYjovQJ4Sg1gHWi5WBiVhC9wDVDZaiGrE21fLG2ju9NEJGDrsPBcKbcM4Q3oaNjU27ytphVwqQ4tnMPh3nF",
  "key29": "4roAaizaAZ3HmYHCuMhZJ625im9YkqwndZsuWJtTxDs4k7LKx4q9vXwJEBXiwRnWdAMZaFd5CnVcStFKroDWbyL5",
  "key30": "3Zyw4DF4Z5JxejBF2DipKUEvq3hHXxjRL6cy9UgRxrFLamM3fiYDmJ8oepGEHkb3RbD7R9gq8GZ5DpM7hywFCEv7",
  "key31": "3AKWjtjKMuUmVBB93q9B724sVdA7AxHdaDYuBnPDVabuv6VdG2yTFnNtVLN87G89PoqF3L9ezoYBd6uBpZ4e9TEh",
  "key32": "HMBRE8t58z6EMVcdC2j2NiZGhMRjucR96zvPje8N9NBNm4vEaaPhVfyeG27GY2iBUvSYGZ9pL3fKyZ6sj2cUYPJ",
  "key33": "3d8LMheaGJGSy5LVH3vH64hNVXYPcXXcBVSs3f7jM8S1WaKmnbe5WMkJwmR6s8N4LdLDEb3codNdvzLPS5rDHwvQ",
  "key34": "3tucKiNegpbAQC7Bnn2514zfVjnSAjFjJ6T5AY6EVvnjfkPJ8rDo1adSXhPGBZ4u4Yjjvfr5CXzhNEFSsnQjX1fZ",
  "key35": "4S9LnPwUnbcHCe91wfQUJzNvmbbjPku5nGuk2R9p2BjXXiTweTCsB5X1n15Lj5rtdJWRsbc8zjaaf4WkEtQUMzC3",
  "key36": "4nC3fhSvDf8CxHaRS6HV94KnyzTyVREenMFBB2ErCbggA9mNWjhSxT7A4nZ1mNRBgGaR7FCiFRt5SqFjTvpz5T6",
  "key37": "52TXXdFc1ZeTGytDQmcqaYmLyLBrUJJGTPFimWnp2e5ymkMU1AZvfxAjpfPbNewnjQAco2bwS4hH9QWkRowcpiaK",
  "key38": "4wAkFQ93vg7a7YoRceFydDZs83J1vX5AeVbdA41iVzNLXcquQJEn5tygw3ZbBd4bMmKKuBxZV2crxqbRopD44prd",
  "key39": "51MmCKLEPNyJzTV23ua4v1j8XRLRpKoABBhqMSE1gZdZvPm4Vez6hBdWXzGPLoGVpg7xMeMBjqo2TQciuzVwaJnH",
  "key40": "4aWPP1W9yHUZin32V7VvfAo4q7Zq64vjJRGb9Jx8M8hhU36af4UVLQ5CW9EmdJ8wKkyuRQCb9nmjfGdyZ8rvoztK",
  "key41": "622vi3PHZx8zkENyQN7K9DAToYeQabfURsVJvEtnvoRpFtKemQiTAJHsgoYsdS3QmAoWLrqpMSYQsc7w8S5rBmJz",
  "key42": "52uaQmShgUC9ATMnt352WvRvwLi32FtUTiQGMbwe3eNYNWmbMWKAAgZUBifFh3i4hB37cLfdBLp95nvaTMKtV6kH",
  "key43": "5VgfQcQEZ5La6Vh1KGPuBB5bd4Vh1euyEykZ5ok1Tmgo9kySp5VwSCNmf4NdLfy788agJeyZUggBhN3vP5pAuA1q",
  "key44": "66r6yoQmW27BbCd67AnCqkzdQrAo8mgbRXM8fLaDaxFgCB9TaqxV12FbtHj9VGyHjR4wKjDeRtHpbEtU3nxfEPaS",
  "key45": "22R7S4VkX8Fcy7JiM4EuYc4tvmRmWnCY5CmdEF45rkZgQaUT4U3f9J8SqLUSiWoAjoko1bEm9wPdeuaDKqT84s6x",
  "key46": "5jEgPNGNwYT7V9xdPGBcGfGuQ1gkc82SKugsVPZu33SGmPZ2pgr76ZHgq8mqKkt3K4WfSP69NzRxc1yDVVpfRpxz",
  "key47": "4iz7C48hjcKYaMXK3S8vCRUbw6214EgYijNK75q1dhN6Bjum3NhQ1VFHBx7npguBJzcBT9voUL2ukznuRPn7fbYz",
  "key48": "4EYxR7xzWUNenhjE1X8fqAXnsGSQSyMsmBSx6DwtKR9KuzyWiadLN4cLR8Gy54DFEGfbAb7V1yvQpx4WHaLf47WM",
  "key49": "66az8nh8v4e2qZgEGqMK8rTfns7NRf3pTq2wyhMqhQ86mh1xLwYGQVLYYfxXkKem1ijmGwyhHRcSxopmixh9wvUk"
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
