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
    "4ttCoAQZiP2A38HfUsGGEZMUXoE52FeNcHW3sRLxpZfpWnCUZbkQfasPg96jnR3xvJ4R6R66EYKiDpuP8Z1FBGDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4jw5NwWiDWSVahU8mbVvWFn8pad7nRCh4AjXp3RDAEW2GBCR3wM3hHrhdgrEWohNFtHy61AKEqeC6oTqroz1ZF",
  "key1": "2yVgApCYGzTEhG3m2BmiU2vpv4A1Gh3hsyLDjFw6dzKYyvS26JuaixkL3wH6SWXJJcjGh1zhR71d67Jmt4NJUdwd",
  "key2": "5oyyNqs4cBgpwqnPVeNzCnvYSmgp7sd6beLepoJax87aL8yJKCUupBnyZPzFC7kNe8LHFpBSRg27swuPUN7nC2fL",
  "key3": "3P7SupktDEwYNkRJ9yGgXzewS5nKHZFsL46WMhUpbnw7CTUmniHMkqhbV1REUkJzro13fWpBFVuC4VgNgRJDeGPa",
  "key4": "4kvQKghFnCThHrnhbM9m8LJ7cKWaJFBiy6mdQQix4jgYvL9EAfybtnNqtgt71ca6DFrSTcw3gvq1bQQyQYmihbEm",
  "key5": "2Nk6wKyBv9J4rbT2uBsbLJyZHbWGUNkbt3WX3cTwf4Ld5KzmxECLtqWBnvyf8w6y9An3hPMd9rkQiefGbWx3NVdf",
  "key6": "3932HSzqDj7b4Ub65jQsqVZRk7zhU5TP4TBF1TTryo9AGJ7ptgeQ1DxVEYAkNaPqEJpv5VeynnsbZwPGjj8L4pD1",
  "key7": "52qddFazmsuWfk7L7RFVFToouFUn9Gxz3vVoCrMASCUFEbR1wcWvuhBs61o1xWAkF5xFDRB6HXCKopKNPy1o3ZFD",
  "key8": "27ZmSVDDCEY7tQP2gu9chJBUEqBVqKvvX4wRhqsHFpgd7xk67kHmSPxBTzgbFqH3w9dUSVtoNASkWnW5gYuur1cv",
  "key9": "5NRPLwDpieR1RHDSk7WoLGGsLrx4L3RgftqaB8yB8gQui1pvEL7FAdCSo5kupCvzJNpCiCycGhKSn9TgA7qpPNGe",
  "key10": "47BmxkDrqjZZymxDTJHVrZxf7hDwvq88iR8qdX43XwGLddccwttaLU7Zuv6RY6fYTRfkke94kkazjvTkbddhjfJk",
  "key11": "1ktp6LCqGHVfv1YQ4vEpNk6naXK8pwdxdfDA4ESgx6eExMTw43PwbuaMYTC2TQi9C3NSAJWE1gtGbhSSfC348yD",
  "key12": "4cThrdLPRtZNMhofQJP3HL423Wc5sXcTizZL2pL62MQF15eMQqGUFn67YMvzjB5xTQiwALBqPddiMU6tVYdk8hCD",
  "key13": "igkSSJnsPrhDudzcRThUZh1bUFHxRCZ8Ltfz7H375pcC7zJkrRK7Q9kofLUaDz1iLZ1g48HJgCfyHARqqLmsdkN",
  "key14": "3ELyhb9uAddCyBQ3jqRJ6V5sPFHU71VysmPr57FAnANicP7X4EJGSTQLDvsJvYAU2W2ALq9qLUJ4Rm8TrRcKh3r2",
  "key15": "63sA7RCKwwFeWfChf6TpcCyFU5M1R6jts22JVjwZJWEJoPwBTJAkdxwQ4PCVKdUHDFHjhm5znU7yUsi4REcqrcrM",
  "key16": "5CicoHgi3LYm8durjcHk8DBLADVaT5ymRUDko8cML9q2dq1E7MDDGJiFZeRZbyTjLCuv9Rc2BcL7C76VGV6S7jun",
  "key17": "3BmiSYUrhHTPXEDz7S12kM49MPmAaMZ1j2eUhkk7MjijvLVZZrgYR2ocZkGvRieuoGHC3kBXBZVcRjYkeGBEmdSV",
  "key18": "3Au2ecZ8bHwQnzGhnkc2yRRn1NFmUXdbFo5rnFLDy5eQPHFukYb2VnxXXxhmTiDk15svF3msMUfGqwLQXSgGnXKd",
  "key19": "4favifZsB1WEnH2ApYHD4DdUAnRvJfd6ywMPwtrAWSLrubtNWBkKFDhJsA9Q8mEZ2hogpvaPq9Uos5v9gvQRehjv",
  "key20": "3jRktQdLELi8krJMKXhWuWAiVCGnnBd6smbkxzW2iyeYaj8ZHVmg6RVHNwWGxAitgqmFu8wLaahiGnAHnxSixbW7",
  "key21": "4EfbVnPQ4FUrdsrvzote7ZC8JVDAWHsu5ke1ZvykshvENjLrzzvy7ntUFZdAn7mmoED4C5WSjcwmvn3kSVSiQzZb",
  "key22": "5KZ7MrrP9oieXp3EKgmBdchmfDCge5EZgAm5RnohR2fYDYSRmSycrjkW9P5WMwWshygrJApeB2NNYm3JU8GpSk2o",
  "key23": "3gEKtXq2o8xD9bSr9LVV2yzg2Xsrx6GPgwJ8LJb4xT6Jg6Y1w6VcW6iHGv7YgDSCrCxCLZarZUbai5GQwvnqpFzh",
  "key24": "4aVTRQzKUBn2Fg2NgvSZYTLXa2ec18tTqeWnBJwNhRDYTZxXF8RvvF4ATddd9fQVQ9ishJwqztxnV6Gf4H4jwtwy",
  "key25": "5Kkc6V3jN4RJ1LcmJx54TmqypsdK9cDMTwrznp8RxzQ5gKjnkKRzuFS9D5YQ5hb1LMgnxTY6A7n1RSpme7ebBW6h",
  "key26": "3Di7W8Y4BXGrpE8fGb7XumsDE9cAMnft8QwQLtp9DHegjEqyQJ93MeCaEX78nmhKu8ZpCoqsYoLyF1G7og6P9pPe",
  "key27": "3KfHX3vtBueQcVBRmXy99EnQrd3EetWMm4Veqt3R4dgPBr3Lwr1gceWLZbMvBQ2y6nT3MfqKEsY4uDFfS1bRXHSd",
  "key28": "2dqCFpnKvi2G5ZhHN3cEgvZhAH4528vAkXr5ZDZgo2yW2rYg5z9e5sdS3v2Cw3FWURLh9CZQBs7VNLJ3C8iWc8rE",
  "key29": "4pCCo8M1WdKUB2oPNfq5Zvx2RvRo6QXpbJx9cEdfD5kQuRQNTgtZoXXk9aVCVMw9TbBQVwtpXNCVKvs2L3hT3FC4",
  "key30": "4AyDNNUW5KdNDyMtUwGcSdEivAVYz2zV9GAZcG5CyuG8fCa7UM1icgmqxUnD4rNQxQh2S9YqUH2vD3bauTWbnw1T",
  "key31": "2b59TjnELuLocYaYtuQ9TBe9GyMdgXqd19VFqAzmbiLpQ8NsjxSwhTd5mqSo9Ere1W219B9nyhC4EUULugMR8c9f",
  "key32": "3455MVJzttK7NbNLZz66vc1opc3dtzM3ayKx6Rr9wotGXDbKBPMSK9zoza4f826ERFvH9yZ8fRjzZEpPm9t5kvYY",
  "key33": "3s35EyB6Yv61fuBStNZJXAHThtUjbT5jvRnhiqhkkRaKq9L9UCTzypqQBVPBKANsLsyxjXUQFgqpCTWZHirLK97b",
  "key34": "uAtFim4LWcfQC2DRqSavQiiZjsHERH2zs8QdLr1tWFLziWvcBW33u5BJrfrLVQbHMGzdUXLiAEWvms5HrVw7iH7",
  "key35": "3e1rnn55DjnRrsiLceWvUfy8zpHyi9usTnghAVNg4CBYcNE3Xfqpw3eu2PL1mcy4fjcpyMmV4amH4TSedxqHDqV3"
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
