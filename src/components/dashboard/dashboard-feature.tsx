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
    "38ZuLrjrXq1A4VWsmCzzTDN8t2sKhMGyCGPom5j6pNxHrcaUzVm5G8SLWhJQnrUhgEHfyi5MD9tN99GntBK5cyRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Gz7fVhcFDJbrnebi5KcfLJ1Q2iH6wdkW3LPS6hSpp8EfDwbDoC2DczDALLpivCaKWFGpLVpKGP8Vg1wgt6akgN",
  "key1": "67GyLJbBB1bJ1BGaJvxgkM2J41hHRx5YKHkpX144gWtmoPyESBjFwJwQFhoH1GUVZav3Dy2diT5PgBtwsGhPY2s5",
  "key2": "2TVh6hNPKj4rnmAWTZg9xGrqcNo4U7m92D3wDbWv1uFpMKxRx8HVsYfc5mgg56UdvWnoA3kt5gDwwrQoJt5wDcP",
  "key3": "LZ9yAVFV6kZncJqzU4b6oBy4c86Lhe9V4GMt25eNsTEDE92fhHQ9QSbUwPHXor1yFby7LFsc4V8YTmfSognV24R",
  "key4": "4Qmhq4u5PK4mn6bcQsURF6SFN7ukmkFdEMsziSTAjyMD5iSJoWRSoya2eeV5PfQ4ccuhbmYJsBwkcUveJ9UUEzPd",
  "key5": "3ZGhFqx69MddaDURWvwNoPpfWZ6ZaLm9f1QrR2dNBDHiofAFv6RGkjRQF3Hj4jhJewFwPvsQejn778PKWieRSzAC",
  "key6": "5riZtFfZhwpEtUBrXUn4XEdVodwoiktXCbFVh8f8qhKMLmQ1dUVEjz5Q2mLTUBr4kQPVxdK33ce7efLqNoM8vf8F",
  "key7": "aQgXBb1VsoyqJqXMavrn1DpR92rtBsuNkM8KpHb77LHrcMg1uzWQ2epiRv5wmvu3JMM7ASHRLNBJUxYmP6FeFWx",
  "key8": "qEBXUPdgtXuDYy2uyq2ux5mMADAEh4E33peSdMm3BK3bjMeLEARADoEJcbqpoEUo26rsTtBn39pGRgNEcJuovbq",
  "key9": "4zMvcbiR5dfSZXczgczYEZkRP9eogWLeP6WyZcZ5ySUZed5Vgu8kaehvTvzjFvDJpgVPuyeLEuS1kVZqJULBswgp",
  "key10": "sKkfAaqcpfxqjkkjgxWvCFvzXFzzYGs3BhGiKYPZPh6Py3CRoDJpuHRQqvJo8jHqRAxUBu9uwUb8j78ipXjDXBK",
  "key11": "3QneZU5R8CUnXiHhLLAZ4L3RcpCdVfJoRcGimT2FAEufZtzuVEmphcEVf8AmhWDFq2PJD9Gtcb6mZSuaWqGPnsGW",
  "key12": "up1ybM22KPAGJ7jMbia5EqYezmzKuVBjZxyFxawNBk8apoZ625jrrv5x4Wbbo9Q1kvJd4bhGQc7nrYScFYd6zbZ",
  "key13": "5ymusywJhSZYXt3XxEpggRzLWdoZeiRnQViUZ1cuShL1g7mdcqDox9SRkQiciommsTL3oxnKuMuT4Sd5ahUjjDhg",
  "key14": "2xvFWUsy3XbR1w278bfGpb63KNf1dBsPUKkR76UtsgkuhV6GsCor8ySkxELS4tEX293aA6to8HuMUPEx579pC738",
  "key15": "2eanKabefzP4brTAdVPgvfXSdeGeT296USeFa21UTcTJQG6XzZE2kfXREbUFSRVJC1cemNmKk676BANbfnNZDZsy",
  "key16": "1HR1NKko7eK4hr2iizCHrfqMMh1vhPDxEsmz6jVmY4jztUSBEfHwNazr3PQrqdriGm24VrRXPoJtja4TqLjTcjN",
  "key17": "5qPht6Xa9M78BiXX92Qwb7hLuq7QA8oW5dGFv9wHcfAL8dFnjrS4JsDEAZmqTzVt7UqWCPN7VzsSKtvjQbwbR6dq",
  "key18": "46crY32Eiq9mBndKVY2QEmEkSdoeB9XcJKkHybV84GePnvgRjsUWd7XRvLqJWiYtQJshcLXXB3urysyk9xFN54XX",
  "key19": "5j7GpcF9Uk5V9TfGgHuydkXWzf5ZR1yu4fZNmit8AJdZ29khvwSpqFNKFXpa2g63dshfcSfi6j5tXBgTQuqUz2Dr",
  "key20": "yxjDz3QFBwQ7eESvx5s2jKMgbZbM7j5zjMWND5S5mA5jRmg6dLdS8uwjbdgUXnAqUP4CD21aJB35LdNin4ejS37",
  "key21": "7K9BvzP2oaYRt3s3HgfUA13nmv7UMC9WxmY87J2AeDBPwJBzzCvLwt3upEjh9nxWwAKwiCFigePaUDUa3WsWciv",
  "key22": "3UFp3HP1itQwrFajefkWFgPuXSGBuZdeBTdRSAnEtscYMMZUZDRNC3htjGZDjBnUgvD3XH75BhMi8q4QdFEPLeLk",
  "key23": "5Jp8gbWHe1ErcwUEghTwTz7ccYGUpvFsHcRkurWC1xmWdXXsedjASMHSRY3pPrvxBJG2EXnRaaJ6igq28UJaEnN7",
  "key24": "3DJQnPFZeRR97214ctPrJ4ia6KD2zULt2fp74hPc5WETsQBo2o6vJQQP8CfToMc5BX9UzQk1ykBe5uQrY929uzpi",
  "key25": "HJXYFFoKUmaydd2wPHVVaSSHuyNyNWZUaXvv3RqNs9Pw8apVPkNWquCbbfzHHWwTkgwWQGThg9yEaoBwk1N4V3w",
  "key26": "dWcyqQz6ZMUSaMPb7F92RDDyMzxa4pejcXocHopZ4oUKgxKfMDRyEH8aBVZYoAYTp5uct5WkEriXMEwhv3tgG2d",
  "key27": "412KKBsDQcTZZh4F8AESECNiU7an4n5G7eC5mu5quBkypVoNEBiEZDrrz8YGZH3H3r6zhmrsGsNoFFNAcJ1goJDn",
  "key28": "3ycPQY96DFs8KdfRr6xjCJvSVyKKcPWbthBYxDBcscH9xfVFc1Uxzq7gbCJ6oYQwmZC7Mywdqk59m93PejUZsLkZ"
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
