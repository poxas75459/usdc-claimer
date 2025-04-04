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
    "5bSeE5HW9a3rJdhSvc4KXwPL2eEHAerbWJ7CDsArxbKW9zBkvK2JAFMrPEDvBStWqm8X8E6oAap5AYQdEe5RHhRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAxAgYhHzAXGcKjva345NW6NdGavoAJ1hUiRR892rGfkdkk79trWd2DjB18xqChF98P8rQ3o25UVjmiU6ALFadP",
  "key1": "4WFLiFesPNLPDBGGkhnrGNbNhVLgGdLUSGn6xTpQNZs2RjiYfcZzruWM7beqAeYL7aRxpwfGBXM8i3b8L5RRe8CW",
  "key2": "VMto7JMmghH4mtrjtjAk7io26LJjvdfcprNTEMWaeMQrFZ4yDU3VYpLzLq8ebTc7FtWMJ8ZncLjFCg76vPZvomR",
  "key3": "mTHL6GSGGYEG1dj2WZ916RH2wkEGM9vBtEsXAqVS8wkLnjEzeSkWmdErmbyJVhrhkqNrNJFZt14j13wFcjPz3YW",
  "key4": "4MbsVotgYbCj4G4CZieVWDecaXCBnyy9dUYtuognVRizuMMxn8qkoBhzQtcPxHPgnsvYUdDPdLdputrjfkWncYXZ",
  "key5": "5t5yaux7dUqZBsDJVqxpoQ3ZLrcRt9HUXW8SsEvR7Ti1azpT1yCU8HKWNFx1xU1vK4xFYdrnf19NBjc8HCpoKt2n",
  "key6": "2oTGiHjB8o1Z6K6KVzX4xAGQb21Yw4uebjQ3XVy82kPAV4pFAS3bb7XEh3g2mkfwnFxzkD1mX9n5CiFN4ZKVdFdr",
  "key7": "4tc2tz2crkqwwnSggq2jQNA1GSG3zLG6sEbmyWJABCcuQKpzpRz9keLJmcNeJmKnpdd2VzNnHTEDxiQLTx8n9KUR",
  "key8": "47nVnEVjHernJnCPjzDxnbVDNm3DkimDGqCyXCd6X31S5umpucG6pJgRC1vxr7BgJbUXy3QaYKpSZKPU5z2iBNyz",
  "key9": "2wdfMnSuGqDWN7Vm94rBWQj4JEsPVqBgGFdHd27e6upHTRfJEvDNW8XFeqnys6vEkkfW7KGrrq5XeTbSpoxQHrMT",
  "key10": "4fENNXDLBB3ta3XFjfYD3GXqNLqKBLfJtAFSDX8TcmhHDzuG7HvSeDxxC7U1C9qyMV3uXTB6pNLVmBnwZnzeLjTM",
  "key11": "EiVkPREuvZa7wYycBH5JGNaSCCmac6Rv7E5uDWGp5jpy1Uh8Ygc9Nevo3nMDstZHmiY97hipGAqQrtw5FCwtKoL",
  "key12": "4pNdwRg7NY3nBw15SiNFASsPn4uE4dHFhR5ZtUAEfZDBAYfoBvXQujS6PDXtUwaYcKGr77MtnYWa49NVq4TYGTUn",
  "key13": "5saXGK1KuraD7PWGp5r9prWWhsy3dB4975EAooh4fuXvRRXGrrABxa3ehPg1xdtpA3T7FnJn4G8rrsYjkt6hu1HH",
  "key14": "4SVGvKYVwWyCHTqMkRoPXMwAPjNgg5EbwRccyNj7r53tZs1KMrmMAhGGN7SN8ezTTDLrHHzMNm7X9KBdfpLH5C3z",
  "key15": "ZrdS9zzgBGAqG5iiPciGeWxF2opYrQrM4LeoraTABTDS5Xe22gPNBJYZwFgL7693pmhueTbbHKzDqnfDLhZdNNP",
  "key16": "2qkK2aPRVDA4SsA6u2keGx5pco3sjQEm9vLeb5HB3k5jv4WmsEQXq6pS663iPQUL9cv5wMryq6wBYq4by8qU8xCR",
  "key17": "3EQFTBivXJ8pE8N8ECb2UHSbmd4wM9nzGmFVgwnJaiqitFTbSzxz3NtfhVWDJ4gy8spRVgeMHjJpmjqMbc7ECdP6",
  "key18": "34tTre1UGKjhxqUzMtg9rTh7s7VEWpD3bd6y1W77Q4mN7r2wXNJcFxnhCPYQpnQ2gbzRhjVavz4jjJK8QKC1BKUx",
  "key19": "52a8aqMNvkzFqNCGABpNQjV4jZeLpAjn7pUF93sk6Rit6aLX97dGLNS1XX4es662Xjd23fPoXoDAb5xdsZ3KVDA8",
  "key20": "5zcPquGTSbYqwK5mVCXmeyqS61Aws2c2qCrL52VtjSKGEqmCzEX3hAQASq6y8g8yLYCELKBwiak56CfEBAzXP4hP",
  "key21": "3c1MpBxzVzRj4K6kpYMCmzDs2vSpLqr27QH1eAFH97taYgodnQ9J7QDUjKY1aZzWSaKCGq7eUnVSQtbwn3ZKJEzg",
  "key22": "4nxBWZSKiRfdoMjnirjL3sW3bKE3GwtpGPHnWZneskEf4gyjfkrqU5bowpRUCwe1maqH2SyyWDXFbgmZJh3bYayj",
  "key23": "5nNHWLA5hkYbyGZwdTgWeUYEVpkG3cwMrX5hCPgS3jZfvoBevsZqbhj1aRrgY7HTZauu5s5pPFKQdhzF2xBk9hJh",
  "key24": "4oBwg8umJQHiLRPmNJckQPHt8E8iefWc2J6a2qgvqCidgVYNJxjngTtSW6SXkP4Bwg8j1t2yvfUCTM6LgV9YS17K"
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
