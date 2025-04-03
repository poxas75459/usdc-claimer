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
    "5KpoPYjboqNoqA7zs4pHT7hXSC9d97gxjGVnmyhuL3PmwDzPwUnNjh1A1vZTyuGgfExEV6QhMfciakhQw9XPz7P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asSiGzya42XfMqJz5n62Vu2LnbBaA1avqeSEg6Gz4Yth4QyySYpfqUYGvuDQNqX559PSTkamEX9pGZbwJNmK69y",
  "key1": "42qPUetjxdWQB9NAspNd8zX474KYhmXyXszfrxoy8JWaFVJiUrJkDaJ8krHqtF6ww2J93HrDYSMoWMXgBSVem7Yq",
  "key2": "5ARY1J7vUBrqSvnLhSgLERGVBP3DW9zhguhqMFUM9VnyoSeAK45TmHyzMA913WtHCZTGXbmbWWh9Z4ACFFf44UCM",
  "key3": "4gKLt4RND1fFojJ4o6a4BaN3XJUBgfF8CM8nX6XqMAZQgb3z2NcmvJfYST3fewcFW8QHASLE7qyjM8XwvDVhd5No",
  "key4": "2LLzc2ZKXZKfiehjVVWqDou724UitSVSAUxDEYDGH6DgbU1EYvWgyj9TzAjRJdztzA62nHkgQKPU8EHMGHXqNQMP",
  "key5": "7v1E9RWFbb6UUyj8yaTbgBVAmmma4wUpqKYEqJmNZQsiq7JgHxGYoWgcd5a2u8T87qiSvC4mJXJeCK5Dcxi9JvU",
  "key6": "2Pwz25gq2y4jYcsJKjoussHaJXgw2ZgJcsjJBxm4vAb7b14yUwRJDhucXGE5x3onvJ5EwPeKWVgpxp9C8A2ULwCo",
  "key7": "DM3FNXV9VVA2BLc5qY2XKmTtSrD4x8e4cYHy263Nisvagkgytq42janToMBcCNBar9uHDqek1d7iFGZ1AS437Sv",
  "key8": "377rt6Rc6taQwmUJ31RjXf2ShZcfHJpJBcm6DSBdmMtQTt5LUhyb5V8czmU246AgpBGEZgYtWqsduE4LFUpcqD4c",
  "key9": "2FqQfzfSEbRrL44pUqfJ6W9Cj3QBL8bf6YZZKeiK2bsZP6oWD6EnroJ29m6DxqiPnDB1xcgu8FAGvj2E7fbmoSfA",
  "key10": "efirXXYpVr4ShGxrKFF28vje5Sh4YvTctnH5VbZgLxbDamkCpq9vZKpnGUMScmBd4exgFc9HACNmzErhgwfcGmS",
  "key11": "2QsgVU9Z42v83VrDJGTdV4pzs9jwDa9WXcZLoguZe1CoN3oTctLCthhysXwwqyMFL8d4ZEL1CgKPJmFFHtjGgXTG",
  "key12": "21K4vAJ435ST6knobjH2TsvjLau7N3TzDfUMYma2rP8rw3ZbTwNaDu8v8nDYXenW6idfotRBG7VbuFsXjedN5QxV",
  "key13": "4E89EZrtfVC6GewwRx9uq2CwdeEWYRbFTuvWqNXokfmy3j6Eth6BNqDY4tw7hrzXYKXLQTDFajtHewXpk3tuzY2a",
  "key14": "4cQHiaKv9SUe4z1AD85J9Kosyefgb2j4EaZkqATVTqqDuDefqqiRLankTT24Uj8eGx7fG3p7WtTWogd9hPQSkK5A",
  "key15": "4H8BUf7Dbuy4Nd4T71YXx7m1irDSAy3j921AHWVDZXsjX6PX1qC1EtbSjUEBr3jgYAvVenA9WvxhxDqq6sFGKSZU",
  "key16": "37Reirkk995HSntVbFw7jVdMmC581PYjJWwpj3uMt9NFRyRA9ppuB4dTVts4EwspdPymfSm2gV6jFyduEzQ2DZ4J",
  "key17": "4uvUgnRCEPF827Xj1yBqhBZeBGHBptxyr4wDWF4VK7F8kHWyt8JCbkTpxuvi6aQiNXChQ2mapbdn9sNfaBFUCPL6",
  "key18": "53HWKjG85JLqcMNDwQ4UYxQP5X266ry9wVBbUZn6QzyxushkpmafwX51eA56kWWmPwtX6sqJmsmVeJ6ZxDuzPVns",
  "key19": "3FU67WJmygBoC4NK8kF16xFLcHANaUDBzeQ6yYVYpzWiy3wT2oHL8ZBcfWhDY8qaiPto4pnPhTLyArfqdK9i6soa",
  "key20": "56856vcpfthbo7qcUniLu2ULZ66eZGwrWTGm4YtCmDyWu26v4DWXBUjr86hWahasijvMCPBQPK5AaNrJWDksNZWj",
  "key21": "4cWXPfyytvF8TGxu25VwhJAzyypG7a6hsMWm2bZUXHVfJQ7yhRpiaSGpqdJozpJ3eVid5zTF85ovKCQijpekQSqy",
  "key22": "3ymwDdeot1SBtSHpN2ziGsKQ85JEqpfYxT3kF5rPs36Md9Jp3qVDLh5HhefLUSK8HQEZom1QkCtMAV2XTvzB8j5s",
  "key23": "mKLvMPkwhM1duYqMY55BQbWAngU5ycLd8bjQPfwkE5beWFRhDiSYmkxbuSxRCn7Mvtegg2wFL839s1fqEabBJEJ",
  "key24": "5gGeQdeeZpZUteSxePFw5fCrbLAAvukRy4p1xEGK2jqMrNWikw5NHfcJzwk8b5ZpojDPpngVbs5jD5nH2GBT5xxC",
  "key25": "4s5hu9suBcXRpxvLPxXGyi9LkcHNWEc2wcRfCRSRQcypWJHPwR7xhZKy7tygQmEfyLA5zShCmcnGUCSJuSmdjZ2X",
  "key26": "3mDu1KiSNDm8KLngeQHCsxTK5zpQmDh69mZuqtQQb5A52T8aycpVv8mCp8ew6iEUtwKsWxzLKTuQhGXm527gW5gF",
  "key27": "5ieSH4dx7T6qoZxgLiqdCT8rx86UzVCAprc9hW6ccQyTwREC1Qjp1oAA1RRpN1fB2rNcm79Qo8rivvFX38XH9Cxe",
  "key28": "3vy85VkiQEWqwitWgnY871KAQUStYWcKfhFPqxxCNx4cKMarmJ8ABM62nFTwJftpFjXjWKFsyKr8gUjEnMjDGEc4",
  "key29": "4HcUuWn633g1Du22ajuxAaLdgxASfLfWDPWxJXNByMaKQujFoTTiQR7pxWty8ebFLc4ERtQURfyY6eLGCTVBLLj9",
  "key30": "4BsDr7nxmUjsvLngZjAUnUFFvNN9i9PZvVxbqaCkcuqi6r8QbA1PW2H8VBUTBTD5sCcbQxvhAduRzxMVRd5uMi5C",
  "key31": "N6Wqg53SpAkXD72RvreA6Pw4GAuecD49mgszmcP9AY3KMk3aqjKS9YNWiEtQe1n6ib1mhus1jzMG5Gh33R97vSP",
  "key32": "63AHUgkbkskZWRVm5rY1efzWdG8PM1xrMeWNehKdpuMb3fHReBhjVok2gr9mHaM51jsiqwWDh8tCiqY64hL2bNpx",
  "key33": "zms3dsMDB56BxvLPXBcexRRAZfSnLkyb9jFUcPBV3eHrPzzKrGTg5krNs2GxM9PUk2zXK8maBeC1JQ8oPTtPza7",
  "key34": "4qpXaYbJwH3RdwJDK3bR9n7Y82XLhjUkrz1DegANLNd9Fo6w9UNKwJ6H4zjhCYUzP5oAhEqQhvuHwQGJpSeekHZS",
  "key35": "gnVWanpu8Y4R3ipW713NFE7mb5BkEdnmoZaDf1xUXP6UHQSU2KJQk6NnDE9vBwiHo9jiuuuF5pz14AZSg1SqGkB",
  "key36": "3oa2w8o7yhEzZTqcB1Xg9MJzPE8GS9CzA8VKph4rUuVZxwUAyUBLZ89K8FxoYy5GKAqXafeDiYgwiiXaymWCYAnT",
  "key37": "5StnUpmNA9SCmcz51rDvy6PJujp7fcT7BtzGDoBa9CobChFvGmgPqJzpwMXXJtRxZhtLwqUwsVKkro9UhhZVQb73",
  "key38": "5bEyaQmczpac4uKn5d5u4KTqDhrVh7JzcLAq5uJ2A1GS5JG17MYxXrUk6bw3cHpTiwy67n91VoKB9otH1ECmHsMz",
  "key39": "5qGfLezUnrv25kj4SZrrHe1TzMjT8k9ozGxVAEztBEkqDTeM6ycSYkncNsBnr2kWDq3ebGk738CguCeBGdgZ3vEc",
  "key40": "32CgNzkcxGoFgY5kjrS8Aj67QRW2XD9kWU87MmVkBG3mkfTEK7BFU3Rm7qbjqarC8q43BprMzPEV3D8BSsCdn42e",
  "key41": "2k2kKe3qAJ95tpmD6aLovDLSbomkNtF6b4nsPUhHHgzmzbVxQmvwcxqX2ww6Pb5NvVJPLavregX9XPCMVHZ1mUpR",
  "key42": "66xBAJK1MpAyzywYEG6weZZwtzr2zDuSLzhLSFKPDx9jFFRVbVWJpPpfZNTVVbCCjVVGh4HFimLTtrQCRHDuvpcR",
  "key43": "4MKe4AJ9pgK6MucMU3cbdNt4Fu45MXixRRKuECku2RDCgbn1FPEr5kMUXr7FkuumKrpDVE1rCKYC3iqSpUi758MJ",
  "key44": "48izpJrRVxmEtwGBV8WVMPZ8Epe6F28Hyq8W8c6NxKkMTt7Rf1oMgdE3YCsaAs9n2Zfq6FuWMpA5YSXKwKtxwCwb",
  "key45": "AuWKeKcP5hGyhYRZ8VvtCbS5d4FVYF8ro9gLpJoE5EPHoQchsbXyZizFzQFBT5uWC6rKa4QYE5X7GKz2Wm4r6yz",
  "key46": "4fCaPKXQB4ZBG3Dhqx9VqLPG3ksHCnkhuFezf3YuWuuWje4pcTbjcHqDkTJ6wMFQRQE1XfUkD6msD1rdics1xf8J",
  "key47": "4WT4qbbXQcx65aT4tEmv2kxApWFwmoqp5twUm9m7DG289gwRdrBSmRPwTDfGXc7s5cLNauN8h7JNVQHeGCZhPzEH",
  "key48": "j3LTZEwXavDViCuE94mU1FLarYvGKDXKPaZEdUSeMzF6jLKVEid3Kc3zT1Lf5jaKJFjom3ShFBRotq1KcD1RAej"
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
