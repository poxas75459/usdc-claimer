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
    "3QRrZxpe6dzPFzhLSHUZYjMjG8WwA3pUETvJ4RYmynSP5uiSJ4eNs2vHTxGNsc6GWu1iTijdJa1DstAq7Abje5Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqZy1TPo41wfBfW1LJGtjjJ6w9PY5e4WvfAMC5wQVs4CjgAafu5rUSiUXFrnUo5ZacgPtDPfvXgbhRABBJsuenH",
  "key1": "5uzKg2cQ1dDKFYB8un2q4wzpAsBW6tAXUUMTjubk7ig2p2oUdmTFmiXZ5L7w6ZQEPVRB2b3VknMX2cPbUzHkgFF2",
  "key2": "5oL9PPdJZZraAxityeCqaCRhnYY17gbFGaxQJ4bCh7NLNsTc72EQFoyu1kpETjgC1xkkuv6XB42C4vmSUMgw7eyq",
  "key3": "4NRkb2sbHRM9f366W6txpPnXM2BS8DSAzKjw1vnvV6VXdrMMNrPZsRMHzKSyvK5JAQsEdTWQqakCHtv329Nn5Zda",
  "key4": "3HiBfRw6R4dEf93Fi5TBiyeks3jUP4sc5ZEabeRpWqrjZ2k1tBWJYDRhU25naCj9yTWkmzhziU9qR9xxkUgvwAEW",
  "key5": "5BFijWnoecmi5ueqgCqVPuTgBcEtwkq3nMx7ZLxfpuBWXanrwxfUiReF5D54F5K7uyjpRETBZdRD7J4UNHoEr38h",
  "key6": "nA89kPUHRHFto5UhK3YC63gXYJNKcx4Zm6HFuHYrWVW23sqDvmTdALzAGVaEnBYy2c1yNwcWEo3tAyYvPtZNVTu",
  "key7": "2vvJuZDv8wzBPcU4wBw7MRccvR12T2GBVzt9H4RDB1izoEyF49ytfmDiVxCmMrHDzrqkHq3hzRPgZiLXgxwCGuA6",
  "key8": "uCaVjtGjEzhfU5TdKdLKeTWaVZjxd5EPdo9ed2uMPNNvC6Co7vF1CYiidv4x6b8cftyxU4kmcQyZitSYGeUFRYF",
  "key9": "zCVFKFnNC6VxH6hYpc1hMTNtbDnCPcBHfYj7VsUSRP35Tb2c6qqXFczCAcTHLNP7p1LsSoRg8iijGwgQCnFbjDg",
  "key10": "R7RrHtDwemnePEj49GqtnSJvQWag2AMy7jxYTXhSzXiRHmeDoLdnsYgEALc4HyiWuKZbshmA9fwvLkiNexXqpsD",
  "key11": "2XvSTVDtfY3sUJCaTiJFv3WEVsaKGJynKUmJEbPMjtHszSZ8y9tCUhVkQmLxm2Bs8gAjaMCTXnqqJcmDAxpQdQxh",
  "key12": "2Q3hjJGLSz2XoV4sJxBVmLMmie5Mx9hNya6C6Bc2vZcH7YCzopPbEXUBDrH276ps447Q9BnYH6jYRmfmN9TJqZL1",
  "key13": "tC8xS4h9q5kSetUZBPBEFrHWutCgYtVkYEkWiAKUiVBu7QzqZj6NaiRHXjCGSwmQ6f7YsbSnYxsrHBiQZp6Tv6C",
  "key14": "3B73jKV8nF29XREQFjbBUzmwpPyYL24S4K1roqWKcZUEfZmY21vtPzRF3FJdNiBpYSUSwF7zxB9AtFDZtpJQVxzC",
  "key15": "5VpJCtdvPEDcLM464qb2VL8s3qCirMrt1JcaqF2uWrH69U4Be2HM2bhyiiWYrV19awdeCcfjqoTv3YjBgHjNGm6L",
  "key16": "2t883jHypeu9zkHACpZbXWHCx8Q7nNQATNbBG7gRnGfhpvCWuMXGy5L8dQrebjSs4RRedZAiQDzyJey9TxsMjGGm",
  "key17": "2ZThAE6HJMU7Yv6rqZdFREwvsskYsfNVmcbGJb367xtTrtSQwDHNxmiZnKEs6tFU7oJZNPzrDoEfcGngftKKny8T",
  "key18": "5AaUjh453FnXc1BVDn5CHnTXueUfhn3uM2u37uTeeZL7cdznpP19qU4Nuoypo944REx1nLBQctGprGdRFeUWMgd7",
  "key19": "UGXJuMbrRu4iJdivkWUG8rYsA1dmhpmNp5KuFvx3RRCGunNdBezkFsua8SaEqxKg9tGGPqfJxDaMJkqEZKrexTv",
  "key20": "44jQk1v3fHwuBsXCuAQFsKT3VXnZERrkSVmdF11XFmKwW8wEva8d663yqzZWHUXtsmqAFcHum2KarjQifZJ6Um6k",
  "key21": "4u1KNvi6Pco2RshfvZzM3Vaxv6E51KzWhEJv1X673mDBfXpF6GRdQnJzAPNUkAC33qGa4B6MWW5PnWat8MGfLshU",
  "key22": "5B7c59bZ7MQecJ5oBEaVudxBuLejyBTMsZXKP1eRSJ5VKoN2RLwrxALzURydTvfqoH1jJV9PdAFxqxpSBBcqtoVV",
  "key23": "3BPdMu2wsMA8kxwoNP5kpaQXzieCKSpsPk2djY8b4J61PTFCJH1hkfS3S9icdwu983tZXA9oXYJ5LyKkpymbvtyF",
  "key24": "u3WfsEYMLZ3mbbfCt2Yf6Ysq48ftmURoPsQkYDV9RoSpdS48gUunoCixCa3gHjbxBWYrb4ow6ry4w8CPZ1TRkoG",
  "key25": "4rD6ETA1RecBVYzSwNhW5M2StpNEDyCH1i6ZcERMkUiWiHrEUeBUmtgBZNpi49KHRVaE1gkyg9JD58vihmZoWiPc",
  "key26": "mi36iUiW5dwRYzaTBHzLHW3DfsBSZqmDC9YxP59cHyyJ2TL7N8qEEnpoUQidzskiUtj5BRvMYmJEb45hdGBSaiQ",
  "key27": "4ERSLa2RX5yBnboaT3TRiyR55utPvWrfkcQbRGfqxKiTvQETZ2tNejzeVVtgSp48c5Uk9rsMm8jBKjztDiVocLZp",
  "key28": "4ddhQAJaQoNssHpYjB8Y7HScN32gRicsyJpfWyfjasSPokgEpzv3ADKEWTEmxXmC8kxjuC2sJ1Sdi2pKwfCzLaQt",
  "key29": "vTbL768PhEEusPLGkcGrvXWD78Gh5fowwdWGY7hh8gCEK3uLv9q12VmCEvBQ7aF7a4ANAfQM4gq4yztQjn7VCWd",
  "key30": "3i2zUSW7hcwBjE4DhmNuqnng1CaWfHEWujPiRdkTp5fFJVr1KackWSroyBaz8UQafjKK9hUEUKEFyHv3LSDV98Ad",
  "key31": "2mvkH1Jjfp6jV2EHbNiHGXvnNXvHpJBPZVcAAZTLGy5Ub51xg6vr45imMByqJfcQ3hCbwz41hUbNiF6rdV765nnG"
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
