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
    "eK855MSjvv1wH3147YV2Qw3dm8Lv8WNUX69HxzyKXKN29fBx9zTCuAwQJ4L8VXenKuLvEvWMtF6netcFCXQbSHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qa8yEXaLQBg1TSxGw4Sh4cKvjKn4tHsg3qtdgyjWF7KspRvakttMu4opLQ7s6QeHLR1CE3aKnABfcWvkGuopP5U",
  "key1": "56hei3ZgLvx7nJtZ9EhGo4CP2HQJDRd5JkVBzH5XT4Kj6ap1h82VJVZGRUeZ7wvfk2kTWkKpcRieWw3cLXNBp3Yr",
  "key2": "4LSKyZeSunMBmSUvEZwtxnXK9py4KWunKHjau2bJeyE1EdwhezFVKE2PuYPn5BcFW1WNSF69tWHKwazTFqVzJa6H",
  "key3": "ZJvSDZSU56tCELjGRWYod4BcgBCriDkZhH5CczDLR3nAy3R17MNtGmB9qkwmRM138UyadprEXtEegfmM5dN2PyA",
  "key4": "42FqnGiro2uAvXJuEoN8cp2hBrk5ebmXFuUDy2ZsD7sn5CCN28soKksUEifsm1DJSUSqMACfgijrFU96r3coNiaH",
  "key5": "2rRugbkTA1vaVp8HX3T3vhYRx2V6hf5FhNYeDKhyxpmdqXVxkmwNyRDYePHaNFQeY9enKrbja3aBqjii11t4jsZ",
  "key6": "231EE1dzRdumenePevc7Tg7FYd6spX8aTgUegKL2Y64yNvMEKWHEk7QC6Rw4BQxd8MZk3ABHM8EvzNr5LSYPewvi",
  "key7": "59WPdutqjGPzqA8aPGsyzxHWBGJsKZaMbKXrBgCHBMjXPTN46xLtNaeGtUXsgnVnK9qFJG9KBDjPomoANeMUFpm1",
  "key8": "553MUjy2VHhfy8MdajkXH8H4FWW7j9x5kyDwjSPC9VFuhvRGvuvK6hZqDkiUV6D2TFKQQSTbrEkKH4Ce9TwLLL4r",
  "key9": "3fzfmSiVwmeh2NbEzKxyDQ3cmxfZDXmq44EBTwQSm76bivvQQ6b8mn12nyet9Y1y6SisPabMQYVvtkFjZj4SRb8m",
  "key10": "4DkUAiY9rZy1PP6bTftnEYgTN9pNMGzmJbPUVZzZ63zkgWzyd1AK4EobJvfW6xiveME5PvrWozQxo6gxjbngzYmV",
  "key11": "3d9Jc6pmaUTUo1g6kB1PWBfGSsqkXmFJbfmwapiVnD1EPhWmebH12rDEd2PWXazrUtscvuyYVCDfQEaFzufiusSd",
  "key12": "5C9RQ1wADzPdFznm8iYm4qD4S94pckdoiJi3NQJshu76zPhXfnXhCRNgNN6CqGdJNexf9gDwUogjyPLmGgbJpKds",
  "key13": "5HXVM2JrS3zyMwDpR8sE4kTWqynHZaDMEBGSfdtM5WwiY3pNXzWweyVzTyJjCQRxJF8JoYtkcwqSVzcVKfwkwRtQ",
  "key14": "2pc8Hm2Zjurc8Aap5RNLna941uKvTG6TnsMLgZjEGVQiU2VDQAkVHPg7KrsgWxfXb6iGJsACkUiEZ2jAMDVrV24v",
  "key15": "21Q6rqrnLcRPEJHa6dDuxYeTkRLcZwE2tmGHzm1AJY12ycRmYiiG76rzWPGyhvtpPe165DmQBan5scDhGjWmSvDB",
  "key16": "5xGRjL3U7E65y3q4kMie4yD4pW47hv9pz34dxFiK6Dkp3y8PzT2xwLsmRsfu1bJCdbn1zNjuJGnFmic5afEC7cW1",
  "key17": "2bftD8gXjKPtArig7rk8XRrYUozfbTi6aHroYdx1rG8zrkpX1cqui5q3T6EGfZyesvnq7YpnULibZ2QWsuZ8rjHK",
  "key18": "4kkpqixiMDJzPqk2jhJ2526mJwX2hHRAUAsSMKPJYsmTppusR5pYfuJqc2Ph66y7nsWTf4ad5cFmEDzGQmuCmynk",
  "key19": "4HtQcXKGqaFZMv61kWKF1vVmzBCMVQEyp3mecyEL9HfMuKDHUdBT8TfLvhcTqoi5cNDWD98XZncvWfTSrXXuRtdS",
  "key20": "4KfcgoYZY7v23K2MkrNAyETJRh7nfE4fVjWBCndL1wJhh3pyFQzKMewshTWSgRX4jYZYWVFcyinqjQRhYbm5MfZa",
  "key21": "4qM3YzUCmFgfczgqWiDJDcv3UgtMgjjLRLv7YJokmVkkbZG6RLpguEhNnexRYaUdNdfqf2hUMieZSYnyoNVqFPDK",
  "key22": "4dcJYYrzA63BdCLMt2piBST6myMgFKEQfwymPqbcRq76B377UUecTqnBHQmpiwx2Q8kgsgbRMTdWAxr5mHMT6PDB",
  "key23": "3juy9PuyRCA3pqZprDKUeFGwM2WngB5s4ygrDH7PVux51TaaoUhAo1CSctx93rnaWyQH6Sa4ozRYkzsS927iedv7",
  "key24": "64KmKoCcoXaTEdYKA1EboRTGjgF213mExHk9kgWjk8uWNUUppPNbT93BiDNo9J5jwGmg6VEjh8fXu8YTPe16zGh8",
  "key25": "3TZubUDx1EVzqmreAgaKUupV8bss6rkzcTfgWmBvzvo2bQKxFABDTx36uEA9HHHUj9ZNMrRPngaABhKoMjmTqbpZ",
  "key26": "29C9GefKwU6jHJhQ6NmMnkZ1KYXCZjmVPqkEzUG1LBFHqr4TY9hX7THDAsx1eqCTWk5DrjbCkttpwP9WDe51Cn3G",
  "key27": "515whCZw2kU6AyLbuPSfnrS5wWT3Upbq9aiiMPJG5adgzbK57udTj84j6ss3FUpDSWVtz1kNkBXeNfSUHd3xhAy8",
  "key28": "5km4Enr4vLwFzRNCGdd4xYiVzthHWjWccVDzi2DAiD7dxZVNuXPJLi7999WADTnmDEepXTeMy5oyW17wx3RH3j5a",
  "key29": "128JQow9xQyxvLAuxkNUzS5kDAD5gtk18h1B7evH3D7YkV8ezk1qiirqMLGLnB3jRA4GUzhQjypuKTSTgzhNU9A7",
  "key30": "33HKMWcc4kzozCTHwdMips9mLig3yTuYJiPEouodneTQ343rga48x4vU6QwZYuj8koL6qNSK9XGMe21vqsLDRXJ3",
  "key31": "2qXXa2X7GFnfLDufcM8ho7v1QbYaJsS456duKKbu6oPmc8xDGWprjBQTrsk53PL4snirvYMBeW1ErcJeLWpTARN7"
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
