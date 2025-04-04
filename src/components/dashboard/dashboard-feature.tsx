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
    "3e2nY7ESoUbXJaY8mZ6Am4vgL1KdtEhxC7pjwDYbsxpikRf3zZ99VYF72A61ovvDKXESFsAh8LQMegu5bLh2SjhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491PuTXMnpDj1u8mBTHL9VWJBiaRgZ75E4ChJFmmS6bpE87vjEjCLsZr3edaKLdHWv4TfsSqdBtpAdnmMbiLssn8",
  "key1": "5Qjnp4ayYHD3Ux7u1vvn86e97tb6bXpsaCuBTS3w4b5mmc3BUFySY4ufs7LgS92VAKcdhu2KzZuECG4zEg1pKHA2",
  "key2": "3bEAQtih5kAo3ij4SLzpf88r56DS4pEguvmCGtbarDKng4iffBetbkorgDC9E6rrZ4o7M7pMG7ojZDbwJ84G7rpt",
  "key3": "4ZSqScDKtpSrURRiRgcRReYABUVTHqUHc6LW5SscTef6vsmiyoUzSb631X9ibbRC1s5ksJPu7YXjYnpD3RywEN1e",
  "key4": "P42iwTnSQpFSMf8K4amYkQDsstEqc29QY7bgXDJv33H1JwG1gT9ajim6picrZQiPdw2FGMjKjSSNRb6ikw8Y374",
  "key5": "634z3XygfXZZ3eg2bPUY12FH62mdW7mq8BYEfduE4xFDnDAgkPVS8hGxjcQDmpwHKi7cvpehvUWzUf7WxuQ6udv2",
  "key6": "pHE4Jhj6eTCMPn1hkUp1PFCQpMANLXMzHLTY4b7RXc7WGu35sxZMnP5B6mnHUvqSWPa17GfFwQgt9ibqgSxBqux",
  "key7": "5HyqwnTUZJajCmw3eNcKKQZ3PZDDGQnb26ezw8YkavJsCBvNkNrcR1JydWNZWkWSPctFRx6yArBRKRFo6jpcZGc4",
  "key8": "2q1KsCPWykFsfEjtn2x16Th98cYn4bSt5ZCqA8CF3PnRVEd5cJznyM9JTSpJak2SLg5zvr9eWhNpaCXMwXzuRhyb",
  "key9": "2EVjxQs9a83rDkEKaeotEmRfufBSi8FN2s6bpRe1rDtUjZYZZx3fEGZAGJft9PK5qvoSmfftC6xySy86DTPWGVqE",
  "key10": "4i4B2oEEGE53DAaefPfsCtTFYyXpRbZBeDDrbERkZaBN8c7TehT7N3svc9bNTZH2S4msqw4rpeZJZTd2dSm2Yyyt",
  "key11": "43vgVRcPEprMJbikXGm65eqX9jCCFhUXseaMQ82JBqzW9rLUZxbVkmRgBpcSPNg4a84qeqf6LAq7QYoL1xsb3tuB",
  "key12": "ydnNCvtqMPi6YUwtMhxKMpSiGjit3LbmMXxCBHfi981hFqY6x4FxGgpWnwdbuKAMaqQKDV9jWwMc5Vs3H5ePg4n",
  "key13": "4giZir3N3YCFbrFsbb7fHjB19fRs6wRnpnNoQVYeSE3hQsaahzyr47xFSR2Rf63UQ6ivSshaAcSVfjoRz8ntUyCG",
  "key14": "4L1fBNssh2jsrXVutRMwbUVYtfBaK4WcnW882FLWFBUKDf6EfBd49T7QBJ3hpWm5jKFfWkv8R19bvcpr76buffMS",
  "key15": "2ERarzQ3e3ik9A68HpA9c8yf5adhSMEAp6wyeLCZpzHjbfheTHruknLx7ZKy5PtDsLMBowu6YrAM5ABqyv5KisMt",
  "key16": "5MLJR8VbmVFtzrdkKEoGEAZYbinjH7Mpvn6tuhY9E5Do74qQGWCGnPBSVXoT7GauMHoSPu4gnYSsz4SzYWeNvKVA",
  "key17": "5KdNxt5y4kMKhRo9zSb45e6N2yzAkjButeNiLc2ZCRw3RLyGLeRV7c2ppyTUfgaCN1fYLYuwuohLTbBAPueJ5Vbn",
  "key18": "5QMNrxcq1qFW7nPY434ndSFsiM9GguvSS4CfcFtPH5kWsWLHom6k35WxwJxm7rzAdA5gnYBnx4w9HWJmfdQ49e4J",
  "key19": "CBNTusbrGP1PhP7F5iam9ZfPzpFXcAJiQLWNCUQW6rTicDqqktpJfNpR7bQpgBSFv2gnNn3N1TWXEytJxJVetRh",
  "key20": "3vRhJg1RNyteUrsLxzH2CbWKhE7c79dkQb4DJpmXybw9sR7zLHqcxWVAFRxbtwZJk3VSdNUGfcTJKckrpJwaKwH5",
  "key21": "xtUscN89314YhfaUQzJYJdTZt8qNeAJfUXfSkETABevjhmpKUQVhTKyQdkwhV7DjrsovEvQZQ8rccHzM1XvtSiR",
  "key22": "3N2dqQt77Eso7GW5HkUKgEqLj7Vgqsv3hNq6YebAQuTQhtpugpn7d1FHusu2gJLSBWv9V6EBNcBNT8JkPnF1htud",
  "key23": "5h8K6htLouAiMH8dQm94hi4M8Mk6vEG2MzQRARaDmpwNh7TFRm8bfT9ZXhGAZsKMjcrp9Jkikk3jFbcELSw9uhR9",
  "key24": "53HY9h62PP1Zne2K49aL7SZCAi4Ax852NrvUNxzGxg3aUAsor6w2NPKj4GmjN37ktQrgESDS2nZWqYZJyKgtSfds",
  "key25": "2qJbxM3SSqKUqutrnZKaHbAqdmc5JWHZRreQ8Ff8A86Sh7HpMPfqXkm65KcKGmHRuYbKotW5jDvNS8q2eNd9666y",
  "key26": "4VoAtFrSqocywDeRkbg1UYMQNB2VrmQHTNo3zPCUhxzkNafo5rRDCU3hMrZorAXEeF1tYoQ2da5d5SL5Mgz3nhkv",
  "key27": "3W1VzzNpoq38A3qVNmdBDfPK8fY6d2AMX5hGqVGeHtfkqRvQX7Vn4H9QRMTJUkWSmDh648PCc7ZW6rUoRNLwjutP",
  "key28": "3vkqBhr4qsXMbnxeaw6sGooft4AcCanxVUisr4UfmoevG1bKh82DRdPi4PTFi81G9Hb2emUBdkHvSrjSs6HiQCCH",
  "key29": "Q2jrbhBXfG6SB6SP8Y1uiQDvbGXtoAbwfg8nKPcTzeg66BhnRmaqdaZiknqnzUQhZr3Jk1MRmVvPNDXFsjHRZoE",
  "key30": "4WipkJzoTFQmxMqjB7Ga2vRoP7RN1FpMsGAv6oNeBurFks3pw8BkuF4TLPpE1FXy2Gc7HVf3JmgXtURDuAUVqrBR",
  "key31": "2kZypfvpWcgd16SBJ7vYwuscSoTFQJogx5MA65h69YGRU4waf3hnDPoX8FieBHZnpZPeEDBK1xDJUTHNkLNiDD8M",
  "key32": "5K87fNCjkJz4F2269jZtMTYzevVPGrxmXM4QYWu1RL619y1PSf6pk4D6LmZhdRmWLDHfjnmnu6djoeiuYtWZ9gmb",
  "key33": "4c7zTaudJcNtxiuDZPCELkPxaRWcQWtPx9XWQSvnsu32g2ZR3jA11jKGz2F6aXjHWN7WHPqGTYgsmuEER7pNCnpJ",
  "key34": "2RraprFRioDBiMkaNbfQCU5yC6wVxSHybQhFyvp8DsF93nACFdx3Z9pF5EH4dGpXa4gEwYf5tkezRDoinVorP6x9",
  "key35": "K8i4Ami5ssY7ibTiY5JRPDxZerUR3oZzhs9DQtvdSW9ycFQ4GFAFX4FrLqkpBYSd2JS1RpnYFV5V3aYjqptNteJ",
  "key36": "coy9AtZba4E4oPqcShfGxkKrERiDbbJdL4uVyRWVQEo8aUDPzZ2Smkhi3ey2dbD2ThF2S8WyuDhwb3DB4dgJrup",
  "key37": "2bt68xxL8i2e2fTb9fXG6sJBUhW1MvG4JShGL7yr1kwURfbypPXeRW1EPy9crYrJbsHPztVtbvrCn7YML7X8TY2S",
  "key38": "4jXvjcLbUmbUmPh2pgU3oPMGbPa74b9Aeh38ZrxgWAVr6812ZqSjKCvf2kUZyNPQnoWv36EfnFZHhubLVE3EXX2Z",
  "key39": "2cKzCsWffq7fhNHJAoN6pNuszHWHuCPsm4WkWDnZZh6sLexAWAyLoZ4vPZZjMkPtpsTDw12ho7MVnSKG4xumA6Kw",
  "key40": "4TaTZLuqRYw2zMYF8HkP35A12LUj4fkamd2G8yPKdFnUxmcFUNHL7T2U9zexBtj43iZfxVsf6F9mpRvGhwRpyDx4",
  "key41": "4zwguPynoCyK8xTvqsAj338BSxPdDZiJMJRxZe5EX267NZFkWyYrrjsdUeUwDNMiMzhUpLT898VDSEeCRBA8FhKQ"
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
