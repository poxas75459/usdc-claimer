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
    "6GENesTjSM4vLmCxv11neyWQiUJxyudQpok751emnpksccY5ftQCd8RqD5pDDQQfXr863aai4JEZqD182CAa7Sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mc1C58zN4TmCEY4HHuXfTFxbudKzoB6RovUuNkiJhErBfrBpPREc2iqBDyU8ZMcVvRCcvazLbjsHcizxKEMx1UB",
  "key1": "3QsAVwahBz4yVzdG5CqPcuzhi3SjAtnKvWzBDEoyXmLAwgJVvopXQXPdepVScEk2FbB9LMWsgv4yzehZC5Kxosdi",
  "key2": "5PArgB3oVPC6PLAMdie3Ko3vHCHtEZ9DeHuzXpyzT5i18s3ksAVRUWJwoseXYtni597rFZQFkjNLUL9DSjU313Q1",
  "key3": "jPd4PjPPuvYVEEYXZ2YxAfW6HgoaNgWPmBJiWnBMQ3pdrCP3QRd6hooBJJ7chzdQHQYwnsvVG1wAkgQ8iXZnVW5",
  "key4": "2gQ1pseustydns6suSVAyHCGBsyBendvP8xkLw3BLMHcehnvDTQCieTLqNgWAiYLXBSuuQ34SX53Eou85pKsPxa5",
  "key5": "7DeQdkHPaj67Sj31khhN7NuSiMp2BkkYdeZsao3Znjs6fX9aZsduBhg2q9UrRvTRd8nzrdefhSdpuZQQRjaHfrX",
  "key6": "2oWZLMboBJ7pH5od5E4wLnJR7sjFx6udAntbo66jpCX6yCAL3gkxoQqwgfqYadvpQDP48ubFPKu4Ehdr9Qya3Lgg",
  "key7": "3NaB2nsheFfh42ckJ91xxmiEhJzL2fQu7EwwGPdTQqWS5Buo5rkJj1ZCNHjRwXiSc8BaksaHGd67Swn8Ki8xWK6H",
  "key8": "qZUdA22i7DkhTu1vJ3EuxqnmnHmPwbXhtQAQLk1i4vYEX6Q1qm82vficDuUKneZX4UfMRVvEcb3uFCGM4EyTVTE",
  "key9": "2fh6ELXXSorhF9jp2h3aAUo1MuisffUDejt1monJQ8yvM4NvyoyvTejbU28XkeXSkg9ytz42XSkhMckn2cBGpF6w",
  "key10": "2yUVtoJ2aho1gonWQy44yHw3T8HLJ7cKi1mbHLnnGpyUgGM327SrzAPjypFh2uJtH9EWTzknUsNCB5tsTsYUSHNG",
  "key11": "2iecG3mpMPDa5FEFMaFHNYxtmh7cgRUJXuKW6R6u3BpARUuVtorfvCc9yZowEhAcLrqiGSuTiu89ztUsdfp34Bqi",
  "key12": "3xa6CcZ6mJrT1ozS6DSiGWXeBTkE5Vs3PvyihMHeWzkk1FH2tjfhazt36YGw7aahSTHiB8N6PDguRCtJJ3rSB3W9",
  "key13": "4ZMM97Jr5pnN1b6raHBhQRL2xjv6m5ueBNLbnWDxtw9qqJgNrLr5UFiuEDscME6qFkvm3fdFo2rFUvJDd8at1Y7T",
  "key14": "4VK2CGN6SXfSBKtMBHmVs2xgahPhAdN28genAyo4JaDFziekgtMEcuY4pukFBJnXo1xAL5RnX63XRpmZ47izWbqk",
  "key15": "3eucYg1GGg9PPkf2NqYHKwavfBG4P4fAJRYYj7w1Mx2qkDKRXZP1Qy8PVz3v9zwCN9BZ5vFyYZ8MkDWnpQHcawLx",
  "key16": "3YJj4wV38X8M1Rsj9twz8TgBK2f4AawjDUV5T5DoBJz9SCa18ejyATF2aFzZ6bRWJUwSrSyTwc44y5SCeCbGkKJo",
  "key17": "25D4pRWq2oXEuSK5SPML89vUHp5UFeRTTgW8py91JEzfG4MtShL8a8BrgRJhCRyvn7XcLffcv42n4yT5KDMYeRpN",
  "key18": "3okLoMq78DpdwLXWVrtFHm66LUboXDJCD6tyikW2ntVpnrGnwxMteCjLxpo4GUbA1oCwcvc9KaS2vbtVDYn3pmmC",
  "key19": "4Yhvo6a45xQGcrcbbHuhTFcN7ukKTaNDtwpASJYTs8ibU68vDRL8AL3aVKJK6RUiC1ybhqYdgiafw44mAByTtZXn",
  "key20": "2codC9TqksZBRdBTMjkThpr5vJiYAgBqnf6EbGMFVs7rNAGYoJUewYEXA8Gx6PMdZFFB2Crqx2LgWBrAejUuVYEh",
  "key21": "5pm58fJg1cBMQn5T52YrPLunuwYcKHgTN9nSjqUym4vbEZcp2oq2NbsRzEAFY7A8KdDYMavrzxcH2TmDD1vLJ1pZ",
  "key22": "5WraqAAXDdJNWNt1zPDDzrtsd5W4WSU2SeUNbtXBjHpBvf4SMrFF8eSvpUJkxazeob9VS3qijxhx79m3qLdtSNYQ",
  "key23": "5wHLyxU8y6GXgMfcoGUKAqKd8Hg2pmvhJu5HmPt6tVypouZ24RMBKm6fnMphAiiR8sJgGtP7mQHAwivd77FpGM6x",
  "key24": "5uBLzbQX2Hkv6DfeTfrbSxdMnhzA9gR3cSn8PWjQBk2aBB7GYPSg6gRak8eTZH2KPkhJqtDYM1wqmvxJs2peh765",
  "key25": "5DZT7n7AivkDCP7CELPRRYfUbeHuY6SiGgXEgpiEK6vxCKb32ZmwzFcjxmkrW6mdRbkc3nuYtycfhFmwPgUc4vJk",
  "key26": "5HYyhPENAmttiAHk7XcKyWR5cwYgNxhfZoP3dDiyasdyctQJZPFEYWERz9Qbijan9iD4TUEF9vumSkaEqqv6iB5A",
  "key27": "3JdpuhugLy89LnU6rVkXPXuLDv9XDQMVCSjwAgajtZnUnwVEeF5bpdnchKoxKxssYz8PJN7G76CsRG6eHmoUz7Sa",
  "key28": "mocNSuyDfCCAcmpJ1yTv131LFmiHVn16rWNQ1VBb43A7Gs21P1Yfhh3HLseEU2XNVcB2DWrume3JqEU7MhSpZyf",
  "key29": "2CpRT5agHLknqhiZJF2Qo8nzbWoJCVg6NmmjpV8xqPcnNn71ryHGb8ChtY73zD4bar7yTgR8uFRH9pMC9KYy78TC",
  "key30": "2dopRiF43v2jkFp3obFwZNwQHVBtmZxPrnAtQB18v2xCw3nCuPPHu2kBuxKhUy4A76Rp3vjX4qwVzLYX4jD7EPfY",
  "key31": "4DpoeneQfAKqjtxuRne2LoTtxW2cABur4eRK7A74TpYJex36z34mwLWURRRt3LFMy8qTdNwVotj6EnoR2aEU2Xpe",
  "key32": "2vCk9NmsJRhSXgnqwYqodTZ3rpNrZqs7tXnim5iDuTfinrmhU9NRoBnr46238BhXdpyqH7MjKasDM9K9k7No9nR",
  "key33": "33haFCpEfiQQkapgf3RYEL8AmwYhgc43NukmUKYqmmi4ozghLy1UdGzgjdsoXr53cMMuhTnkKgSeV8x7wwAjVApe",
  "key34": "3gpbTx3LxjsrdsZd3JmJ3YM3dPF93WXJtaC7CVKDWjt4Cf7VVGJzoiBNXtSGk9Q64JRvPYuPH83N4HKwP9mj4Db4"
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
