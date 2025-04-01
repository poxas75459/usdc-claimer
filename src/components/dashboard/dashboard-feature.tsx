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
    "35e6axRb6Uhzzn2cghwHmaP5iWrwuAiuzh9ptbhnSj2mmwJuQNwBiCyoAhqP4V65uW8o2VPBbNYYU3uRM7bqLxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wNSqFRs1DDJ4xUjzYEJM8MFkBd1dWr4o7nwzhApUgh11afhCvvqGf7yF3BHc1TruQu6DWe7VRY9X6x7MzvFf468",
  "key1": "4TWfa9jC7c9ARcazGyEdov9QFswb45B5rQoixU9DaCiYKcyz332r4hzNmaRXV9YqSmpkhQ29EskhwqkuR1TL6gZb",
  "key2": "4NMwbNVKr6qVURVfyXWfqiB9cHuUx1M2BhZrHYGsM5t7fk7XZpeNdSS6EPRSv85557ieN9QVpnbh1RgUF99y2GT8",
  "key3": "4spz4izbXUXVyxwbgmWqN5npDudiUjuyKDXfBbuzbZXxznVNmYcYFRTioXiTpNH2jVR86ncYmSf3KxdLejf29vs2",
  "key4": "42vwa4VLeMpHBV7Q6RC1htYYmQ13JD21DqcHSGZnK6wRurgbevBAbTYH2oELLrNxwMjYvGdRCFDqu1uj8LNZBMak",
  "key5": "3AeBywARgte1S5x34CoaMecRHd2e7nPoEmZFuLk9RLCK2qVyaMaSA7UpqJ6EhPVoySAMNj7ZoKq21dVuUE7ctx7j",
  "key6": "34LsVDy6RXUTdmQ9DJ8TzLnTnrYAKBgZeTS971cSE9YRhwNzAUr2v8Z4YggjFYfcXdULrBgevnCSySXPTZnSokoo",
  "key7": "55dPW5MxX2rtLHUVQn6efKjMrLndLg6B94sE7ja2pUMhRie9H6zkPwnRqq9kMvdZ7jGgPKJoTWaK3PEXb2zqiA5c",
  "key8": "uARiD5aYzjCE84Hzkr2y9HgV25s7P1CMHYv6xxw5d26ej1bd3xkmxS7hQA9YBhsTGyUEWkrUTyV5eZQabeuAahz",
  "key9": "3PYi98ccjeXo1BFy1pmnuFcU98pp9g1FuPJvuGqyiveeEw9PcWY2TL6424LXM6B5pJNkN9pKwAhHP6UgxWcuEtBB",
  "key10": "566zANUDMGq9q7cq2mh1WCMb3TM6ow18tcwSuuJdMCeAZkTg27mdkUbZYzuqsP8VeJPxyz8gmdrW4h5CZ65n7ioG",
  "key11": "5GpsvYaByCtMygxeNbdcob2mAr4pjwwArGqagvd8Q9cFpTXCVbdi5hkwNZK3kJXNiD12c2r4Bd8kNJe1kyh7sApt",
  "key12": "5wpkymMwW36NH2pUSHK2kEmF9DqFwNDocGsUHNqkeKU87Uw39uu13kQzYM44GmJDBUrucJcUQuDzQSvUn3UrBBdT",
  "key13": "6FeA8gW8cYMaVGfVjphjJMiyjdwFbaGL8pzr1oLcoS8EtBCMiaDBjkabMQ4pdmf1UFC43HkWLvZPM61iEUjZKJQ",
  "key14": "3tjinWjxTbTUQiWzk2Tdj2aC85iuNYZAREUMXip288mK7e8fQCTMwnPdWeYrDW2tSbMPnTkfqsCNTwPHGdc8dMBG",
  "key15": "3YDKbYadvScmooaFq1THxgje29p71eXSbTtgF7WZAqza2g2SGajeR8vc4rL5kPTWp3bWxU8gX2VeJeGmZFgDtx9j",
  "key16": "uS32QXry9FdQKnSJRHWneqj4NaGj6pNS4dJiHbdkUugH9XpQECyhkrhTAfF33eKfnZJM4RCZXsyb2iLL3qEb3Di",
  "key17": "f68wHQ8dtDQdDfAs8rTJww6k6a38WKaKK75ejKP9vhj6MpzqrVLZX6fm2Ds7rYxPPgf1sTDBSUHDAtMmyy1ci2X",
  "key18": "2FgFKh4KUmpYR1A9XFVQkbGP8h9QgZoBKzArfNuPZTtNQnVKkrpjcnN6frHJaxB772usJ1qMoGGNoPjWZQwHWGUf",
  "key19": "4zK8gMQ1qNVs9hhHYwJJXUFnyGkNDPZUdnoTdMnRdhrY6D9mtptmNWM1VVXB7hdgKbG8nyNyN61iiFqLfCftCiqz",
  "key20": "2dVbvcumeojTWkLFZmMGXhYSpywe2rtLBgeuduPQ7ZPd6qAFa3NTzqmUz9g4xhjvaVthjmJZk2K9xtHdtkjpcHBc",
  "key21": "5E95U1NDcW9gVN28bigeNtyuKGhWv9fLcqSWDdQa4Qh78uGJZqhv6seepsEMiMTuDS39pMVj5CrnQrQKk51E7bV9",
  "key22": "5aqQBWGvhoEphqcg2hp5ETmfDLGo3uwnvQV9nQbwon5JU5vhgUNgqJ8BtjbJxggyNt7jXgt2Ewm4DKSf4S7htdLh",
  "key23": "vQTz7k3ypXfFgNCFSLGR9vdi47nZfpDxibhUWrdhs9Pqt7H3TKXSykaw9zRUz8uoLnCcNdpnMrGibt44hp1imtc",
  "key24": "5bDneGdjjwGxWU8gna6jJumXLoegsdZpjyRmqCWAY22KtDGRFnJoAmPURtSgTfazRXdmGvSbkTdt2PZPozNM6yJ4",
  "key25": "3GyB3ERbS7PUnZhMc6D8xM3pdGAgBsKRzcqKTxdJruBwUcZ8DxZgR4aqRPeoooXcHg8TMSUtSyLV4zbSXEwXvkoE",
  "key26": "3yqVDnaWnEKzeMpcGnYJfdteaM6ukVqZZVwZ7CACusikynNFj8VLXrEZPD9WqPjiEhDpRiaNSy7xnsFc9K7pavjC",
  "key27": "3BCt6rv1wL6P7utvipDzHPyackeirQ1JDbCMCTd7pje8ieDo8U2rJ5UtVqqi3oquC3LhdKBLLXn86cUaGKdzSxfd",
  "key28": "3zEFEwkKUK8gze4aSmL6UX7SRLciMFUewUkcoe3bipn5q12CaEC4kvvrhVSMyR9ohsi8dzCaX2NfNbtkVYVQZuNh",
  "key29": "4QE7VSovf1zVhGVm13ij725pvd4A76Au1jz7FaAP89ZwQtAUBZMRMuV2MUco63QzgzyRX1jGzWikyRA1pibtNBu8",
  "key30": "bJK4sKtrZ8jAzJexggotAEfJJt3eMG7St7XQmVa4EaWT1upkEDd8DQAnsxdguMPxb74e1TwQ41N3CcPmVFtABcB",
  "key31": "4BwsWVKt7TjXv7FgRPLLmDGTux9b1L4wg7r1jdDUgCZnEQoZ74vhoyvYnSghdYdTdQBTM8y44W3kpRKckWRAcgGS",
  "key32": "5qoN4EwQ8Qf7ji7fZegBzvP5qVK2UVENf5PSsjQ5YhXQeM7BAAsDwF9KV5KEek9FkzYT5cPnXc196nGJXwQwdG5S",
  "key33": "4z9cV1YTD5q3EQ9NYCR4mrET63RyaNjR77R65MiXvXgNZkrmdVS9xeoxXccigFDXkTGcgeuftMvAhiWstLogAYJm",
  "key34": "2tuySxkfLRpujgpUe16DDuJKhtFpRgkF9usCexWxFowb9MEcPWUBP1Aw3VfhY36EEDFZJycTooA7cMW316BDLUoq",
  "key35": "2eeLEQBbUcV14fbrVe2Q8viquCkYwkG6qNaKBSjYkCpfu8bEr5Mk2Wb6BR7k7SHLGnn7zi8xepq59KXaCwjgJ54v",
  "key36": "21bWEb17RKKF9W1k434JkyFtaj5eCR8yD2RpAnGE6xttYgKToTutGPxzufCLh5nARsQKRbBCQT8ZqW474JeVmynt",
  "key37": "49xrQn64pn7bHSBZRUDCH8Bv2xkBbyL52guxJPyDr2GEV8xPb3D6zg8LYAaxkX8VrKH5Sk2uTcTW6yQPc6d6Uuhk",
  "key38": "nnjEz5XzWu1iPyKyrG9wuaTrASebdJe4eRD1GUrYWzneScgNugZ47U1D2AGg6oS9KiUL2yvTUYQGaus3CGiCH81",
  "key39": "4fPp7V144nsuFFFmHfpT5StAKfQ7xGr9CkgBoCCuTKva1E4qfSHDPTRZK8bjzSV51Z8nvkF1fkyMiJEeqjAofvcP",
  "key40": "4RPQ2rhZuZyUqG7T6TJrH14gSRJDNPqkHBHmEiCiUfgyf5EtrmmGRghzc3DrNLhtBCcsdcUB3tyg7qqkAe9DSRGs",
  "key41": "41nXY3YCFqZyp3DiQvzsXUfAdFrw3nTJDYs5hGfiPRY6PRPhANrCjr76wsytym9Q9GNVSnf2kewqY7ccFkR41fen",
  "key42": "2YBUHBL3HU6EEGvu1gpBbqC2JLfAHjsRtri2BDyB5y34WHL3JTR1VHjSmktWDrG2TDKMnKmeY2BEHaCDcxPutPXv",
  "key43": "3ZZtPM94zEQkbp4fygQq3Q41p6MaBgEP633UpmQxhS7y6Rvr4CmAsXPTimmwiKQjEXaFYVC6BMJ7x1LX3jsuhNcb",
  "key44": "3tvWnFxEkJqXp2jNukvLrypaVMNoWdCEHwJLbJxLYjfhXFrpnV6SEJRKJS4S8fqHJwVUsUxKFTsRAix3JpJpcfkr"
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
