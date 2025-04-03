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
    "3P2DGahQhZsFTjMiicyv7JijWkvGfoRZskT2GM2SEoq6vUs6ciB63KXPxAJhh2e5F1bPbM5P1sLeMZVSCH9ZqwcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKTMyMBGgPfcR4p3e2WPkewM47dtNKzpHAp1tRdHhSZxXbAtdZYZuXr21BiTP4QxTJf8D7x6FbbVLKe1dmDKnaY",
  "key1": "3dE9gsxYEoVdWqtQsCaX3w98zweHxxMTECMr3yyH1exfWKnzKFLNENwyA4fprykjvtvDB3LrPBaJty5YmRzPWUk7",
  "key2": "32r2mGiExkC9sJohxUMz3sbr2UBuLAFb8TAtDh7XYmD4ar5L2eK2ydMD26oMp6iPo4kfgU2tnVYXQQ8fa26HBpGo",
  "key3": "4HEs2cQmdGKYfthT46igbXGZK4qqETKLDLa2p2ktZmbeYEf68YeHFPgzKmqJ6DM8eKGCtJ49421qnumZjUM7Shs7",
  "key4": "56GN3mavDVUkCUFRMhuKqPWvbUQwUuGuDb2VcJhTXoGvmRGxPb7ZVw4Ja4NwgGcMLGJjzn8k6m4BwcsCDKbASs5E",
  "key5": "4fKQ3KMS2L6nNQm2wtz9VxPnkVzLyKg4ifVuEEGS4nxa4LRTAnibrfEww2RopvFrXV2CtNDW4Zr67RXxrKSMrYGT",
  "key6": "tJiRQd2mqoi32oPhKYZcC5MwZcU7QnF6wKonsuTvfp6dpNLVdGZQiWJ8HfmR6ZkW9GFYE8XUFe6sgZNM3c8CDNx",
  "key7": "2GxgtNZPg3WhbCcm4WZjaaQr1f3dGjmSdB8N5zPGMjVF82QE9jhSNrk6TpjBXbm26NCpqZQUX3XSFTYLfnfPW1nE",
  "key8": "55fw5TtL5MgeS6RokQ5j3idQJLY7fjQposgSS4j9AP9CpfZVJjBwgT5UxkjYMtP7sTNnLvpCvzvwdAV7cshRe2Qx",
  "key9": "3vfXgf1NEYDXDmNvfXW6vgLWtkeRNVkz3afCEmu61Jboucgwa6rA7YcN3LSVQeLvV5Bi4kT4whBERnRJgaiM68RE",
  "key10": "3H7nmDbPqYf4x7SLYg8qJQdHyUqiBgTQWAMdHQ5h73UGnDd6U8XjJdBj7RaMA5ELkCD6NxG5wWyjNj1od1EAgia3",
  "key11": "FuPnTUGDPQXKq4xsvMg7S2Fmcnp4mwNc8sJAxHG483SeJxfidtortmVELddUYrjNxgBb5g94SidqQTgTwCm9dHn",
  "key12": "3JzNmHUodVgVDrNqssY45Noz8R7oVvnxoetYd71E43BKJUGaj4suRNgdGb9oss2N8ntDPfEtmtqvHURUETXJLcGe",
  "key13": "2j9Rf7MonZgVEg92uZT3WRifncBU8Me5qxJFAf3GUXAtmCGuX5rJqs44KZQgqMiESvz9azofXJTWmjBQGcBpbKnX",
  "key14": "34LsWJ8Bfj51KzYZfdRogVsW6CwGoY5ZUsM1EapBH2QF7B8dfiMoRtfZa43xwyXWAkPVfBv58TGdAynPAUBotay3",
  "key15": "4jhKpgFF5X754uAwaD26X87dFVwYLUQgxbxH4hkZUAqUSg4zWHjNCF5AbxVG3v2kgFvWgjWtb5n58KAce7yk4Rw6",
  "key16": "3if8dTBtbL724pN57KBx1QxG2DxCrRXysotUZdtDsNggSYZoVURyjPfyBYeQXahQy97Tbcg15t1FxExwotdG6z7R",
  "key17": "3Bw2WSqVH2pGYFYrU9Qo86bT9inssWT6CbYB9zYwhCL7zvPrseiq4eom7kNrFxFPx8SieRpH4Mwu3HR7ZBUqveHJ",
  "key18": "47yMKFES7NQTRvGaL5EgeveAcaNiT1cJwTXFWbBPdyCdCLQ1hHRC4iDBWzyQUiHGiKddxDBFeYAU7QSi4Yz967vQ",
  "key19": "tUZz47YX5Gm3BWmWDvq5q2M5nhmLhrrwdAyoPb1MTykszxcNq5VgbXrf7wZUwKK2oEvX4G7xJqgdkgHm3a8CZas",
  "key20": "3ERcQxBDD1BgVQevfX6aN9x2Hk919NUDSS2AiqvFT6kS5afLFgGFv9mNWSrZ1Wi2JY5W2uB7cRqpnbnPmMeAdSft",
  "key21": "5BLBm45PzwugvpqhNQmm7unzQHKXY3hDjcUt5hofuUE6id2wphutap4yJBEQnBidMM2jgRaoB6xe14QUvGVMe9Bi",
  "key22": "4KkuXU9CjJM6TtvZ1ZWLvxd3Zdtenq8BzCBLTRAMWtd51euFdeNfc42q3M8jm3c1RHw5FxepwtdgSfDeMe3ST7b9",
  "key23": "sn27yr3DCZ1taAcf7sywZLvjpAhztT43yVA6hyMg9XkaV1qkdHRs4kcHjJwkLD25pHyu6p2SipApE9fpJ9Vf7jn",
  "key24": "JKMDvSKGfULQG1XKo4DUj6iwjtCh5V1xK9uMLSwCjSq7GioW2gMfjXpQcT6YNxEDsNyAxmfbxqke3wkrukDVtsY",
  "key25": "4hjhxGJHtnhRdxzXFYyny7ZcMzRXKHNKCDL7TNo8txQcj9tHuDpDDh1NECeG7c6aLE88MU9EkSdesySvagT96Cge",
  "key26": "5Pz4z2CY9Y7Cp42X6biGisxrDaZSgcCQemSgCYDbAU6qU1Ncy2NjqaSanD4QNdtEsZ93PBaVmaV4ZuxZxkA9EdM",
  "key27": "3vzAtDTNog3CiYRUWDsibZExUmgo3BUjSKLSTdKzu34uVmoPH94b1VbSbCgRZhqubeq1m9sHXAPqVmcvu9upPEkv",
  "key28": "231FzDihr9jgJNScN3ALWooHxaJLs45TY18rt1aCREccGYtcpmoHZNRquVtnuzw4CP7THYXMup8WSrPMPcgQSAJc",
  "key29": "3gna6ueTcCxnQkVkPAipjy5M3qaNSrcxTadgNJGyR7B3WcL9h9d4aZXUnvZT2eJU7FYHJYYKRjMgRceCgcdp9pTv",
  "key30": "5rcaSjRdGSescNRGm8kugMQjPSWmXKVPGXYn39Tpv2Kpf5PMwufu7bXLJtcMcBZDYqtJJKAGy4HUZgkXLn1Jtvdm",
  "key31": "5ionzwbU5ey2zu99DYEaqjCH7K9cjS4Tdh7na3usVRKWtssD6niDJfnzEQTd8UfHot1sf3WSjKNKLPyX8AdubGoF",
  "key32": "4MxgSSPm85DwM924XUa1TRvLW8Ttj9Zo5NoTZsBSPm3T98tfo6ZzUuTUdnwhWuSoGS4VbzxZnBhd1EEGGakzBPHA"
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
