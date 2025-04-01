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
    "4cYHiVYYkBqFTodeMLuqwpkAW52hT8cQf4qAd7RMjX4XhtvuNWchTi4A2nStt5oMGJrTdyMFp4iUivTidwnwCa33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgaPwe4PnMmh585yX3tt5A84Hjd9Jb9JuVs7S5Fin3xodaqMkE2aE9KaVTKjDsVU6HvPEqSnECS6NFCovhHcQvB",
  "key1": "5hutWkiGy5wKjb9uwGkXF3QKDmKDEWKEHAsrfgDFXuRqJHsY66RARyEAeQtz3bkxzVAjEK5aBr7UyNdxwajxXpCP",
  "key2": "qCwuudr8WyZnuFotVSe35rtUbPWJaNiQZ4u3m7RKoNuVJ6QQLpktUeM9quni8bb9Tvxr3MZywptFc9fBwvB1b1x",
  "key3": "5vmP3NUZ6MmawqHmV6wnL1TUK3Ki7f53SQw3N8AazrytD8kHrjk4747ZdXqPNBgg6vALCYmQ64FnFDpdWocvXRR9",
  "key4": "5gjgszHkWF87fqpvwEJrneeiehMMfebBnDUpffTaCPtsUopciQR8VbqAb2QdFF7Zoa61iD8EJLP4CL1FH2eLui6H",
  "key5": "2MMsMnxRGjDivnjwKhqw7JYnyVtMmXAqcTK9rpFRNftwMQ4bHcKJ4vZRY4aFC9ZqhDUzsC146GUGFGceLQRM1UYS",
  "key6": "2FXzziGBu5rW2B9XV8pygG2hi4VkW2NCmzNaRhhysGuUMKyxWZGDDKCcDzAVvEFUFmWpmFkitdAkbzGrKx7VujgF",
  "key7": "2SPYnfparxe4cSATmv1gcBQTTit4Ps72zhkYcUptgfe3pjHUCPeZMS6kCyN2PZvP3sMPxQqkprtuTcwE6nfQ3s1m",
  "key8": "5Lrt8dqDvRG6RtKMC33ChxzHo7WEHGEvhCt7dMAACvQPLeHq2sHpvgj3VsfXiYnfRmZQP9mkJMr1xNtENXyS2q6U",
  "key9": "4uq7NtpUHJJcg3Sbw29F6XxvteWQjsjTnyD9pwQbiFfnt1oM7ASjTnC24Hjj3RcS5aSpcrQFEtN1FFv6GmaTDvZi",
  "key10": "2y7YDsJqv6RfgArE85Sb473ARX6HkuoyVgHQoj7uF52z6XqLi59DjDD95s8tfHsfHbYPzQjU9WXvQ57kroAYfKme",
  "key11": "2qb45ZVJdixPPteWfsKtLd2r3qAC7RSbtcs6oCmhgKvSX7ZkefFvqZNa55BEqhgC3WWT9SQRMsfTPvZ3Urncj1eV",
  "key12": "Zk5ShyFDqTCC5D81qyB6NEr6icCGt6vkrreQYDpBdihNctBLn5BeFkwwjSXvgqaALJ4R2REbLsHNYL2Mk4KSGth",
  "key13": "4kPrMJmf87GEnrijHwLAUpUNjxGPRHcabB7dYn1uDhDfJvKwuX7XYUQ7vZ7KJfXPbrYWd2jNezmWAdB5UdCHjvZy",
  "key14": "W9kEmt7hhmdYdyoMcMvN5XjR3Euzww19GiTARKMmVucsuTTBfbTndaoNP3Q4qT4S2EDyMXvXrGxGmBNL6PmW4Km",
  "key15": "29XsJAan6YZeFCiDRecnR8nWM3fwQpaFb2YHmAz9jU27HrFBXLhzVu4mn8hhi4v5LTSJnQUvzuNYwQ8XUN9kA4q5",
  "key16": "3bPHKmnoL1FVxLKXmdQbsrx9GeST4spoq1oL8EK2UbG9Komf66XPnZ8NB2DcAsc7qusX3BeLHHDDLsRgRoVRDvPD",
  "key17": "2SyiscH3Xwg9xwe7dQZ3yagVUUrzYaJckK5cUxokrZXQWK1U1Wzmd6keUSmDdN26EfxWfseDae2aJLFBTjMMrmgn",
  "key18": "4G193ZVKNx3LvdW2wsg4sNnUx8iBswGqB7Zpx7PKWdcuTH3hmnbkypwsZHeVjNQajoJrabeZasBreMVGCGX1xKpN",
  "key19": "2eJ25QR5kguycxgtrpmToh9H52RCaz5V6SMcKzno1ekBR46eCzB4pJB3sQc75gH9HrFNdFxwWNxLTDCWSwd2Wp2M",
  "key20": "4mxveLY84FUoKDiTCRZrjVvXYoSni1VHeGUHfGDNrVR7TsxMeBvVPeNvPAicYMsFpKLWqUGnrvzuFeFuDLdWw7qW",
  "key21": "4VuDF8Eh8iew4RJVaopGLdSxwZteSxb7Ve2znczEWfn4WMKPuJ4BJdLFXJvNt67qH6zdqvZF6zLooDuhhXeLTgx2",
  "key22": "4kipzhGbNm6fT3LWdAQoZk8X32Av48C2uE8cwsNF3Bg5UXCy4gdemsM3sY8czn4HrRtmSoZDkUN5jVmAAXtmxTLX",
  "key23": "3cnrUhuZhV17utkTxAdbbV2jS6nkjkmXxpXbVKW15TQ75UsZXeyv5N12ehToa6iHtbpXuMpAJW6eije6P6rkqrwy",
  "key24": "39oP1vB195JYwFMCWzsdB8LCcDwqbLNqSYaiZxaR48MYzrK3gov1QMApvYhhqJB53uDB8DPz4YtMZcPMZF1izEP",
  "key25": "3KYafKtVGamX22TnnZAh6AGHp1rbKxJSjC8M9qgHzrkjLFucP1Tv75QnWnWn4BSyFsoXHEk5HfwzpHn5dx8TXoS6",
  "key26": "2fUBMvntBZsDDFgK7BeTGZGXhhp9qeLXQdR9UQ9cUkPkNtq2J69SmWV18rSynZn3D2vpoRhxNCtmgjD5kkKTuPGf",
  "key27": "5tqA6yMx3Qh7DHkdu6KSt6vXjrvUDHrUdkYw4sVwrYV2uz67eQFnawE6Jc93NxV2cuCBo2NRSTmycjCws2tuK7tH"
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
