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
    "HVScVw6mrjaJnKeyrS7bGX5evVUzow9vfpM6GNvZAqMvaP4YNq1u8iX6mvKzXbk2L8p58TVyRtiSN4DkhhzeueZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rMAnLyZSY6AgucaQ6eqdDLnLv2y8nD487HiNBEh7cS6UXp3F5eWSXVDv3pNeFCRW1GNnWNYcYGs3AxkeTLD1vAX",
  "key1": "STPQ1wTvtUwuvV4fgWYf7A3Jx5YEERGeimBphotQPSiQNVUamqRGGAVAz52XodjZDm9wWmWDBm9yzzh4WySJWRY",
  "key2": "56MUrVCL7TvrVHKUWNgXqswmJvwtfmt4M4S9pHsCbtmuqXjS6Sp3FtK8GxoFwZPfX5eW9zNRGVFhLAeEcD5AeHRN",
  "key3": "nvcwZvr4UxDrDMBCnxiTxyCDWDAncfUePmzqWNAPCBcq9uF56fJTE4XdR5k7dgbozZKcWbVZRwUWRVkYm6d38bq",
  "key4": "25oTv3vjnZ53SrJkiejPG1pRf7yDPWoBUGb59Xdbohw8csPdTVQcsfL7eVFUXZXtbhVz7guXu3oMHDzvKZgpNxF7",
  "key5": "5r6mpaMZ8VAHwvMEr9aZDMPw6fmnHTcHw3xmf6rts1AFQqRFoz1LLNDsRQuSoeoovMPwcHVF32N5LQKfYpzFKzA",
  "key6": "4N1NoVYRdaKi6U9K7uT6141pAJQkPNGFvAUQ2bueeyuRZcQGNPdn4SBSXq5tVVAyY6NCysqGFrRGFGTMT96eaF7o",
  "key7": "66q5GH3xp3GNmJbjPw7AGdmicPuZzsr7mSSN9AgskFU5Kqrjwm8heNnVAkxKSx1miTSsP3R7XDzjonhoiz4HKq9Z",
  "key8": "54KozSM7CbnDqJG5isiD1ubkyuMabR3oHs67Ry1P5DXpph3yPcppBnYZrSyShaqHFZpaisGYL23KgQu1CMLgjV3z",
  "key9": "2yrn5uJ7hb71fGJUQYKwaM9hNEnPo3a7LE5yUkKb9Ey9xEQaah77sqTEKPxV2N4oH6Djk7mT9e5xnkepJdswvmdd",
  "key10": "5kwkBvBTpeV1vK8zFgATp9J9s6SQUcXJngBeAjKtdt7n1SdDhuYPNj2SdxKX8qGrzjGzmjxUNVfkn1C8pKksokKe",
  "key11": "5k8CR3sg9ibHzpWcBnX6S1RoHrg7WxpqMcQTzuWcKZeJQMmKMpezLr1gWHT1vFfEYKzEqswNEm5AAnYB5t9pbyLo",
  "key12": "4Mynt7DaWZSRq8uQAUj698GHV5fQASp361K6WwAVvkvRJcSrsW1GkQxjuFYDYauNivT2QBcejCNqZAdLHvBL7sqE",
  "key13": "4EY8iNHjnz2gy5ZQtmKa7DFVP7Ca7k5ze8Uhz9yopcLtAfQmEcTwy9H33ccgfMPKir8tnayscedYt8cGuKm8BpNv",
  "key14": "5W7Shsz6QjySK5c4AL2cwJv4CeGuTwg8ex5fkzRMa6DNSzpxJxhdL4hnrjtpAyqv5nnYU7AJPYEcvfpnfzcvFxWG",
  "key15": "25EYgUgRCsJg1x7qRrhWE4AhfZbTs6Qkn5BC4jCakPZp8BotJXeBEn7kE9rxo9hJdNKYM2BQGNnVMwqYQuLyrWQ3",
  "key16": "5hcphThyHJA4QPB2VMFF6y4u9i5jBKrQ3QPqtHsBpyVAjSn6q74LfR4ki8NwYX9X3eSa1BorYZJJiZbuTWED6hoY",
  "key17": "4t27649Mmm1GSSE5j43zyMdt4BR4Ku4pcT9x4qauVDLHySPrP8V1j3oU6cPYTqryA6mSBhFpHAbtHYyf1x2skLUd",
  "key18": "23DcXffN4H3rLXx3MTDrtfH8APJj5cYr2MzyGUff9upZpGQ325eeb9qms6AiaCbvXj1kgMCZyJNe1kuACAtFoTwa",
  "key19": "4BA3mAvY7SKi4dbNFTpoNK9xM3ujSBtbgm9WMBwpH6kEjb6g7KMpzKX2bipopg73ddZACnyGavaiYqkTcp3bDrsG",
  "key20": "58Gq7dz5XhHEFzCF5SDEm2gLcp6EayoCQeVeu76hgdiz6LybnGwjcQ5E2TBTr16aH2n3KfxeuDeyxjQ2gYE3RMZW",
  "key21": "4yLBaaVfWh2NhL4NgfoUUpmx7Lg1KVTr58hrt7BN8rS62F3jgRjmWsR9uGdGyXribREwdTSX8iWqA5dwceM2tQkp",
  "key22": "3dHiewctGgdPV2XdiQ7C74edakU6QjQH4H4Fq8gdTj8vQQFSvrRpJeVaQGvwFfan56McMqjVDC19hKbZBEGUrv34",
  "key23": "iAJ1r5SRDsQnvTsKJ1i8ZhAHxjj8bAiieWcnuP7F69VBiPLcne1CHYBhZYNkAf6AN8DD4NnHdBnDWk6roYmXmE1",
  "key24": "4tiGshPJXHYJRxc9NK7rcz6Kqsw3vyT696Vm2dngH43uLTCU1RGEe9vJ6pyiZH93BrQhTJhWRAxrjF4bdbr6aMSK",
  "key25": "3SKYbrpQuQMsNHMdPb5vyThs2mkRw2FKMyiDqn5yvKnfdMiwVcDH2W9AwMmZcuNgbhLAM2JQPhTDNhp8oSEDpXtT",
  "key26": "61w8AjFGn3p7atU7CfK2oeuV3GeaQwED4vskkYBsdGniCyhVvcBRfKNSfG2GVqEX3PA1wNgTN6iKYvoVP2UgkBry",
  "key27": "VGMrm3dHmvqN2c6Qt5Kpy6vdLxAWs6rZLkaGjygbbtUoAT1xjyYGJa15LuYC71oiZPrcFMETxEwww7CrAesAPi9",
  "key28": "sdDfTzLMbBN22k8tS57tsx7q2h8eqML2pockxd1hhXBeRXWKou1ZPedB7xvbF2JBarinKuE15R8kZrcT1gbeGyu",
  "key29": "4HGanKmgf1edwiGxaRuvFis4hjhDzpn24VjJSxiQ54LKFFra1SF3zLPgub9up9vmUrgRgHMDpmZ31ipZKhgdzu26",
  "key30": "5TGGVQXamuQbxsURvUgeisKyNs6sgXhus7XHFjCXnj3VzVWtKJe9LocZL35Wtra93VnxYKR5gMjy7TaGtekqoktM"
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
