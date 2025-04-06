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
    "491hAUSb1gCC8BEjWTY5et1bAamPfUVFkq281VnzVJy32g7QWQLTLSXZKqFbzY68tvZVeUYM1156ZHYXx8ahd4u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GpzLiEBXLbiLrguiRtNqZk9c9BEX7FWoCucfdWV18TRA1F39DevEtDykeaFJmqUpzvBeytHsBrxsXuhTjtt5dtC",
  "key1": "2NR3aCGV81sJDqcfDkV1rvwMvJaG3UhCgHnHmvcZN8LKVcf63bH9kAh7sCx8QfEU2nLzYfyroPswa9AivpLvrz3v",
  "key2": "5PvAiBikR5PqhJPp33rPKLoJZXi4Wym8Nf8SFCXaG5fDfTRtx9aggr5gbT2L6v4LE2HoCMfwcihh3aVEPmWuD844",
  "key3": "3ddzNMxVug2vhSsB1aTnof2s8LAvkEfo79KS7bHEK7F742Xxj4DASv7TmKvz8nKSe6o3YLjjhJwkvNeSBqDmub7h",
  "key4": "3wSBteSPgC5RJpZmnJD7T5yN7NZkUHAkj3nVz1U7V7Gcup2wREwi6en82C2iPLAdShDrTHfsfQYbY2stAmcBthvD",
  "key5": "59Ufiro8QAeLJgo2Cg2xR9nh2YcknZ8okBmrPUzyfszbddNc5UQtkq4gTKPNzXR5pZ7SUYDNiKhtG8X7KCL6JeJh",
  "key6": "5VrhDhNUANbfJvyFHgff93dgELeyXcH1BzNXD7kwc1xuaWeEY6fww5UPvshHQshMAo9qem3wKQzaRzPY3qzbC6ND",
  "key7": "38XBLUcCjZu3G5U5gsv45CH7g5XW7Zi8YRpYvDWh93aLnoFH4y67Moagk67EaGwa5ZV47ftg9KnNh7vvQK7uHQTX",
  "key8": "4HcXox3iyt2aMoesoFbqoaGrgp179A39Pe2hXpQKnJJKjRyHJEoZmLg8qiJ2TLkioz13B5hdPkKqa5SnaDTSf1yF",
  "key9": "5MhV1YtDSdjN6SGb9C5viwPT4yhXCKoncpqnWBH5Gg9vGGq6oTMWb3pYiKTi1vwdpJs1r3rCfB7V9Bvmu7pKenEC",
  "key10": "5f2BYiYPKYTU8o9he96iZeK9yzJw4GsVdoWXbpTsLUBEQ8oMio5GcgeSVYobpJR6XcA5uCAuE4MzhkEGoaiPTfKo",
  "key11": "vANx4HxiFjWxf6LECTy2hs8y9Rw36Gxo5HPrTeygMymRbfKiTPVmDkk9Ms5Z4gn8Cm46pxJoseduuheZ4DsoXy3",
  "key12": "25qRPCaGDyHTFdGZKEmhN7HXFHRcpbBWzfTJ7K66rE8X6jVfJ22cojuPcpounrZx7RNeoV79PfFfspDsk1FsaFPm",
  "key13": "TkDDrtW8YW8syHus8SjYMFmjMsTq8QxuPcXBZVQrNFqgxKhZDqUf4HpJKvJUKuvAMKMVUGVN7xyMit3tYKjAMhD",
  "key14": "649g9Fp45ZNjDAwdn2RGXgMLnNAYzoAD1YVbdLPgT9SG1KLJi2t7fxfg2UDvXNBe2QmdzCXaHDui4wQJ1PNSujVe",
  "key15": "wRchTmqtJxnPTLSpZ7suceZojSGYawcVYzEmWDxzEpvvowy7xEQhBe94SMnwfDkeounnxiuPo6WvPwE6vd8M2Hx",
  "key16": "5D6X7pW65dQWkLrr7GVM44duCAJEHgaWggajRNNsjKvUC7zf5ay4xHva9atWa9GGBWz3GmfQRkhtkfMLKix9hJQ9",
  "key17": "QTuNrvALgGf4AJx6TuKQH98SDPAE8rvsYhpV1wNBmCTpz35RaZugUy9PpfnUNu2vvGzsXvn7SorTEH3dc29Gmtv",
  "key18": "3b9JdFrwHc86vx9pc5JPikRTbfhybgWF2jJARP6fjNtpjq6GqKWUqEDb3hLqpXKkooPt3Tr4uztuVpt8mqRrHft6",
  "key19": "4zaoUtSE6adUUjJw6kr5HW4UvdJ7wurZkd7x64BJghATKKrc4wy2QEzMVrHeJNRvAQbnZPW3YmpukVMkJ16rqF4",
  "key20": "anNaVyYY992jV24DbocZtH5k1YN3mD8LfdcZwC6R7NWskRsFFW8L566SCjZVdRSctqn87maKTiFmCFKAxzmuuyU",
  "key21": "26EuSn5XyrKBKKzbgWT5czM6ns3ofMwuYoCDKwTTck3snX6seY1XXuHVQtdYFSQpB6JVtSVHUhvwtowxA6ykXZZM",
  "key22": "4b5m1Qp344PVnq8zzC7gYtDUHkrJRo7RjCYoS3Dn32BurXksSLJDSykxPG4VSAvqFo2fcZBkKprh4yGCLhh2VWkk",
  "key23": "3Sx84YdQgBgJHk1cwMBbb3bYfyPB5jGEh86HjjjoJZtKJXpQWhK1kExDWmdXLEEPbDigrnhD7svW2sqkk4bHw1wK",
  "key24": "2F4hosFkwD97BzCxKD3JqR4kb3DTSnPYqbPFUrk5WX9vejeobHuLUWNFSEMaEEgUd7zszBN4Jh9z84CWf6nJA6ZX"
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
