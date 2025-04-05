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
    "XpJNcAD3HHECZYkiVqRc5D2MmdQyYfxEfrntvTBMJbvxd9pnTfJhC2wLNGSWbp2gFMCq2TZTBTRQurEGyRpRtDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7m8QjrdWSFfgNX9biQEiDkgSxgytSb8arXGG4AgngcgXjk1QAkqrUBeEz4zAfNA1Ks17GCLCdRwkbNdkUjh8tm",
  "key1": "5cwFUe6eMJFtiFhUpsHESSfC5CnAnnMVRKtiW1SdZrxHdcGE3EmkdcgA1ANCLaAsQ3e3fycDZ7QxxhemjdxoRpF5",
  "key2": "tiL559CeNr3YNk3F53NNh9YRYekBp2bhLVn2jPWQfcAYL255je2ksqzg9RraKTHsZMCAj7fDTNSW1VindcSkgY9",
  "key3": "R6wgb1NZHDCd1LvLbY2PPL8EBPigyE1ja3qfTWmV5TX2e9ZCXnt6u9PV5jx2nkWt6KqzGNfWnC8azx2u7PfupaT",
  "key4": "3A1bGB6Cn3mo5jQBpVuwckVmb1skvzLouYFeQrAKTqj9SZpgsjZDxGvqn1uh7yMipLLwmt7jRBmYczsF3eYjhWgY",
  "key5": "je4X68cARR36vHJvEJLaVCekwQ6tX9P45CiwbPTnFwjfMDfcgkUb7enZE2Lh8EbwiCcUjTxt3ZFChAkarqoRg2g",
  "key6": "3aFQfXLKvp1pgGTheVWH5QG9igRVymKTSS1Aff8SvU2BeXCbuUitroksigWwVcWQrW1259ojZ4jLnLRDVTTT7w7r",
  "key7": "5Eq1qzzfRtJUjVLd6bQZHZfkLDxck6mCrDE52qGNJVVaobFYoVTtCkHXd3M9fMv8LpyRx4V2tbdJTNn21D3iwBTt",
  "key8": "3BwxYsUgQN5rinMqeMd8bjgb3w8c6F1K55HCyMRmsFbKiSdSB61FtLB5doiaDhgNgdPgJ7ZXLh2hzUkg5oYntqAa",
  "key9": "5GWaCuqzNvDQfddf5dNoB5Gue2YBZaUra6iKri66Dh5JSgW6ShqG6wN7o9GHCXbTENvuY94nprVjYkyK7mSX7Rhx",
  "key10": "35itfPPFiDzeoKUcmsJXoYfVJTE9dcwWsdvNgwrQS9t73MokCtmNBU1EhEtEgPS6SPVaxB6AjMoRSyw6LncwP53U",
  "key11": "4nSQpbWts4m5D51nwof6PMad9b51LLiuqUZw2gzTTtk7d5Dr9uyT4wjAE7ExbwK8u66c9MScZj2MoUSmw3apR7JP",
  "key12": "5378pq133mNBeoaE8KCVwgaNkfoVWfoqwgRgNfL9XK7e2AgWbqhSsC4VNMNxeQ2aPriWPgxwqEzeTMGThz5ady31",
  "key13": "vvSbydc54ytqXSej19thvEgeKZCoMfNh4oCzXvk7LC6etJ8HESP3n7J77uAk3LmbycZdZHuUSNBxJeaXjujo1Wk",
  "key14": "NHpXNGFqE5F7ZXABmSmyWSuAQ9vhs69Hen18q2JY4x78qP4tqPLmkzVpV2vtE9AcqbfKmrvceV7UiaHZgbZ5id1",
  "key15": "brLFAhZ6FD1N83iBDcCF3jYaAYubaH9ZEgkiKH9aGUhMvqa6MFSWtJmSb6cUiNHXGfKUpmMY9zhPu3qd2drQ8Ut",
  "key16": "516Lj17HinnHsKEHfAL6nhfR86AmS6ssECzfmVXCywvbLawXLyMfkjpPW8Nkkc7BbnGknykGBR328dcqwT1h4Pi",
  "key17": "64BzmdXzzv9eppZeuyrjNy2syHiLHzUu6Cgma5cFNBRBCApREmmBYsf6mpstkxuKk2fC34VUJRJN6g1sQ8WPQWYM",
  "key18": "XazCWdiNTLwvLReEajqJ8qrRqH4H8BZVKpccTz3gvRRMugjQrAbY6qEe5u5uDH8HjAesiFsCmAqQPyeJX7dz14c",
  "key19": "5TXNK94PPg3Gva61kvZB3vVJKLKkqfEdu2TZowxdpyWpCZK5RXWEHNH23gwPKyNhsSpN7dKupvbaMcrkdqn24Sc8",
  "key20": "5M3dzd63V5arsFQhPAWQZShwPQ9mdPfa21vujiWZC7ZovNVBhc28mUsNgmZKoCGtfL3VJgpHH46gcfiZfnji72A7",
  "key21": "5P7jNYY2oez44pUzXzGVfDCgu1G6HXhss5S9SFmvDEgwShBiycgzcRttR4VpqLdag5qZUa8eUbnfWXD1bt85wp36",
  "key22": "3Hj6WhF5VbxDN6eTV1dUQx1zuWqHfXthaQ6SJjDj4hRPMGmzN9fBYuNuZtDwdcRuHqD4Q4Yv8TJx2NGKSH6H1oUM",
  "key23": "2G6rRhkSHudcPHUvfyThiRxtTBBWJHQhef5FfagN9JJvgU1EK71e179o2qySQH5K52NtSeKNdqiuuXKj13kVpu7c",
  "key24": "2jTxhdb5vhGDQZ34MvkZsctruN7C7GP8bGpvvpdapemFZLrXwb34YuceXG7kzdiJQuBvT6FfAqgBK7YcBQDHwtNu",
  "key25": "5St3AY6nL1u9aDqdMJMPuijLQAmKVy9XuDP6MTFrL4LgKqL7zswApjwxMCXn149T4akUptURgPnFhe2fyjxZpf6q",
  "key26": "5GNv9ST7FGVTBYzsKjhQjWs4qUEP8ywc9FxzLvE91ykGsvKqxpLXabdnPtKNZcQZUhJLDiuN9D54NVSMh36cxupM",
  "key27": "2rchUFR1uy5j8gxKbKD2JwWi6GT2xjvrZ4Mj96ExNzAD2JzumemUGj1t4Wj1id6qiSfx3LRmY6MgQSQf1MocxcMs"
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
