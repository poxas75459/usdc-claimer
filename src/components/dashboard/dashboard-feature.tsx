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
    "4koANtQAEKrxtjHB68J1QuDSH3uZ2B3Q58ezShFdHKYmLLupA9k8BvdBMFGfXTCdKDMwkQgBUCRpZDwW4BHeqqh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAVw7paqMkYCLDoukFbMBRT8vbkXWSmQHnafdTy66dTQspW94sNGBet5iZmtuVbrWFbuS3E8JAFmBmP8eDJ4hru",
  "key1": "4cmpv3pGpppb1ejZ3njzhV9gni5jaJwxTVQmdFn8PpNo5HRiV9ocwX4RqG9fYTCNXbLvbco5JFiF6GzScTJrHAzX",
  "key2": "5ZEwvaPZ4N8caqkgtVRcDpJ8K1tNCGLms5gsrPfgU4Qr7Y9tTm4MQHb3hW9hNApNeQ3xsaQN8v5q9noo6zEwe3z4",
  "key3": "3mcTki6iKzvAZBbbuj63ewP7dwRKqUxjfytLRSRWcE1inLQ1neo1BCiNM3aUw9u7bRFzn947FyV5k1ZLz5VaoKi3",
  "key4": "SS1oExs8vzJTHBGvFaSPxAsHLVAhCLbY3XftWGZGYsQTHPu1PdRtgpJpdxgedGxEB6wCBsUNBRRsJbaNHdvw8jF",
  "key5": "3ggSAVVhGVnuoRy2YUoALWh6rZZXQLyLZvQpowSiXXpfvsFGHQefhZB2Qe56D4sW2xrxcQfq4wupTPd5CNK4JrMG",
  "key6": "5GiBqqatGs77YudEsbfyD2qEJPRqh6UPQY9Bx6r9xdkhP5V1bQmC4D3JECPTaGDmm2iTCZnHZNQ6Wsp4uXrcfi18",
  "key7": "3vbRdmvuDsCy9oUjU5WUyRBMFe7iZvn73TLAYdv1TgSanzP2nPzvctZRHN9zCJqrj5wF8RbfY7tGFkUXRmcTdKmk",
  "key8": "2ZGjMd2NQuXG12u9WUju3vP8ELKuqnbia4R95iWHznrVrpjV3H8sdyC57eWXsGVdN4JamZgoS53N1KM5MffMVoci",
  "key9": "5NGN9svPkahQgcjvw5J7sQWzh7WqzWiPvJhpch2vLtFc9MDgoS4YepyR8o5LU2VLngTCK2sEyZQuKVF9kAbmr6TM",
  "key10": "4reiK7d9se6hyRrmHtrqSMTocvg2Q14MMU8qguhUvWzjCvtLhQKo1nyzukx9ZYu46Y1XwuZKxx1tDx5MA7Rckjjo",
  "key11": "3rFembAnPZY5S2q2zkNyFFh1QQqHDwpAjgQrMB7ZuBhHqVq45JviKeybhjW42w5cbvjKWvacUUBprLC6mySBzSze",
  "key12": "3rdBrmcWNDnfHu4VkcatGSMkgYagRDxMfsAi6TV3Nn3Gu4WnvpFM4TgvokCTrMv6QrjqBW51Ek3u5mEZVjTtqrX9",
  "key13": "7jzBXPgXpFSFgWQMVPKwC385GyqUfTqjJvKkjfvUZUGatstgzjkzm8jqGwsw3QXGHMsF3PhHd5tS3PML8PFMxJH",
  "key14": "25fzyn92wuwRgiNMgfUAg3Fdy2T6ZDRE9LTaRqkA6JeakCoK2N3w9UArTawV7onMDte6MqrEUomoEeLrySKFSyhZ",
  "key15": "2TgrwUtLXA8zVGLpgkj9HbNLqMqj1wZraFQNFfkXDPRQr3uaBcjitA7NPfveTMnnNf2iSPneLrNyk3YhU3ZdjbMV",
  "key16": "4Lmzbeuxoh344U4kAFSvequos2RuzzBUpZ38iBDChRKb2QFcR8aP23etspiugqqQBpwKjgsoKXD1v4VYfGiKUAW3",
  "key17": "3z86FD3Pb1WcUyYbWL1yeu4pQnbcNW29XZdMhHDFKRPEvDNSfn8gB4N683C9i9Moqs8vD5HaDXb9CBwzCFz6fHvs",
  "key18": "3WkcfaAjxsTBxtRzxJbFXV3QqxPSc1maJ8iyPRyQuoSH9ZKUTG74okHkv8zJZfuoGbkTjG6bzgVdnfYxLySpoEux",
  "key19": "4qf1zZWYu7ota9QkYHHR7Nm2nabNEiwEUyv5WdxkJAan3CZQhKUMXhuBJ7PxuCg9GenUjsSm6RKK2SyB4SJgsQQM",
  "key20": "2xGxNiurJKBPj5Pi673U4p2ovwH2dDWUv5DXLdB9AHDMBQHpfLMoZ1fNfs5nv2Azga3fxCi2mVCip4metwQfLZ65",
  "key21": "4q4Ved4T19sLxWWr36ME38gUbk3fhctmHiJSJbmgDuSUptFLdHAu1rn52um3ReEBioU9suYfoYKUA7czcNa6ZTDq",
  "key22": "ZX2T3cvV3jAMFFyxmjUJgGTB9WHNbuRRh52b3iBre8GmTQvs947fonpNacQMRjnUBUJGEkb8a5kbyPFJSQahTWS",
  "key23": "5mjebp3xp9Q2YF1HefKSYwAeiGfKzJAg6B2CdQYD1dzsvZQDGdiExh9FrcFQDhvGJWvELffuFHMkQJhXpZYqRG7o",
  "key24": "5p24z31Xkw1X4r2f1HBwDnuf3cPH6HBYE6VUMKNTmUfAQM8XncqFaBc4TGre4nwsfUXHv8gZMWcqyH8jNhrddLc8",
  "key25": "3Z77H1k32Fkvj5YyP7aa2nYboPdQ73jthCmY3r7GUPK9LJYMsyrVmdW3vtBweAV6NUmjufbJgkqYxJi2umeVRSoy",
  "key26": "42tuwNyJtHAbSFThxfyEHmQbKMr6gzt2tu35NqVhuqPqRVgwZDG1GME4Me1HZAhPBtafeY9qZUpm74CfNgmYadVD",
  "key27": "2L59jnrk7SkH1qrWMD9dHtfqfxPWzLRzoo3wNoiinERbHz6gyUvzPTngTAenCsmyGJtNKyYj6xkCKDKRurwH2Mv8",
  "key28": "RdvBkHoVwTEaYTmURTJyxgZ4mosQurccu5KRrrNnjnDM5VwheWaERjbRLu9vcCYKqu2arbR2RSUKJvbGHkgJuZ7",
  "key29": "5Hv2qkE8v5MkraUhJJyJWHRFMzqngoK6u1Vj2HN4b3Ypcrm44tAHGjqE5Q2DbaDgij7hpFTkf4rHrbxh9VZjJeXA",
  "key30": "3rK221s1mAnZms3yLwtvJAcMYNL2gVtrArXzAyK3TMRcFwBx1s5GTMnYikexHftyAX9B3vZfGLM2cmbvoYvzpwDa",
  "key31": "2JqRDPwDgL2tJZpLvLDYxp36s86EANtLwzp5JRMadfvjEZwbUbjqfZvygHdYWHT8MKcd2tbUE5qyj9VpYxBx4aoP",
  "key32": "4mBcgXDtujLvSaRGfgTrNvP4aFXQykHQWhaR19CiynbS6AerwXrfKzaLojdjm6TDP1jZiX7A3pCYt8Y2a1pTLmYq"
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
