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
    "5tvENnQHLqitEA66deaw13pKQj7Y1PeEBNCJS3KFNCgWjkLZLzhtCuXuaFBgMGvDSUpRMXJ1Vktm4pTd8j93CrR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6CL7BzfJqMujVG5bTmqykPqzEsuMxjqhhi74VpwZaUTnmuUKpH5HAxAFWod89D5JPcngp5d2VQnYMP9wwEEoYw",
  "key1": "58PZJywYhBVKgZKuwYFzyRP62B7g4vQaojTW1EkcnRJjJS56KrZf23fG4zdwrh4toeo6zTF7JyhFei4UsozZNJ1V",
  "key2": "4KZuLLazCfSDbjfgthJqB5EzHYSBiAYJuCvgMiEqZdiw1m9wG9MSYigqXqpkM1uFtJXJzfnBqv2YaSpEye6gnjGV",
  "key3": "msL5hmMdjUt37fj22buK5wc8z78rN8XjgrNdzzdk8Jm4pTZ178cbYsFB34e6iMyHHuiJ9tZERvE6XmCa1L7uDnK",
  "key4": "3BocJmfnneF7AUE62RUdgbdLMofg7yzDCeck1tiXWHnhJAcbEQSqTd8x5Hr3YgbmmyEXmCgQ378jXfGnwJUXkLUZ",
  "key5": "2PkKM4ge6EFYUUfBhDuuhUiJgkBKE1kvxALG9Q2c3n2tKrct8MJ9VG4JkJjPdgB6qX5VoYdihJvr48KLHzxwkHuf",
  "key6": "2Sf6EhbrKPyVHfxhb3tsUYfmsYY3daswLNM3jhnrVfoACuDD8otEjVZNYsDnmnqatUxbCue6bHLqccy2CHEoetqs",
  "key7": "vt5oUmckeShAFS2ydvUaFSygRXrUuqwqBLT8hAMYKnkVHNZ5gxmC52GgLfGS17NLY169QjZ7pcrn26aQkh5kmKQ",
  "key8": "oR52aVbBnDhtpksfUaP8tocEAByjTahkr6HRa33xhqcZHFHpD6iFrDC8Fd9rGPAfT51JFxkHdAEytFsJuxDtZMo",
  "key9": "bs7EcD2CybUYCYAbAo1axBppfEvbuukZ1pLMQ2g5yC9riUBkFZpPRx5S7SY4sWyt1sEb7D1AQC78pg5SW3mF627",
  "key10": "5HmFKYwsM4WY2U9PSUKEB9mKLYyX8uVxRqfcqAck9wk424dKaDeE7eqYfBG2G1yxrwEnFoh7CwVDXeJQT1K8YAJR",
  "key11": "sG8XoSmN7g1HqW6yzJjG1YKoTgwhvu1nzScuLzMBe8V7BnMS4wfa5rrBzQmQ6G8RbgnEEU3JfCdBJ7ERFkd9zv4",
  "key12": "4aL8d3jDs7aGtG6LGrwx5vF5H4ZEVMJXjJ5E8NJwkHosNnDVGgi4YKL2gyP5pzGQZmUSx4Qw2vbx54qNZ7b4ZAZo",
  "key13": "3ibP9aVLPoaiCBiit9ufLBF6MzfPuuTWwMf5uPj32CdBY5u6HNHZnDixn9dEVU81RSLgQGUiKMHqStepGDcjopyF",
  "key14": "2uTwknFddmDeUjqf2UtpPkpWuDjXVhkVz5mVa1goM2zVjoKpNLZLMCT99UX9Cq4GNFUv3yg8ikUQbPRbNAhosBCN",
  "key15": "5ZoQptHbjcrJwDxCCzHbeCT6H2ssvyEFb1JJ8Z5agGbMgyoq2tXMMYn4TvwSw5qiyQJWm3c1FfBsKNynxcLnpZxJ",
  "key16": "5wxRcsbJ6KELvotaDw7hnkierevtWGiaDu28G6963HBA47wAcJ66Jd8taCx7EkBATHSmDJXyVeDEs1edQX3m6aYF",
  "key17": "3mZ4ALPc5ozuVPtPdHWRwHiYP2uyXujArxo8LJ8wGgYwozKZG1mCH2VXVrXAvEgr4nYo15NPnrxkRoPfBKtLZVLD",
  "key18": "41BjSQ7KYu7FNU589Ngo5mt4EpiMcGJBN5t23wxnYHbnvw9totJ8SBmmTNJqzduLNNfzUQTjG3Y3FH3ShKV8Xrfo",
  "key19": "32vEsxbVN8A1dtWKVTuGXpAwH78LYkVt3wR6DzWNJjUX5cMjSS1mddRoGpTnXHiVPWVCqcd6sGnWJxKzdDA7zuEH",
  "key20": "21sRpyfvMP5enneE6Qr7eBAc5CFnK6gsUqHi3Xn6R4XniwJB9tmaeh8Z3qgDTDo8QZcV2pUVbL8N28uLBWpYWw9D",
  "key21": "4SghYXLF2DX8begqN5Y2QdbyeuibxFApCinkvuGn47eGXVDnGJDdCxh2MPVD4n9Pbn5y9bAA89uHhUqzhVdkQqgA",
  "key22": "57QUPAFY4ExJoJBydTJ7rXzwcTNC4cyRtwHLfdPCbXmJE6W139eMgkoJqgdukXd7Vom7fSWU8uvTjME1HXU264cL",
  "key23": "LuM5edKpuj1JaVSoYfRd9Po7znxNYtcfSZkNpdFjbrshzsDTv4mjrX8UypubkBgEpkmTiFvzLBopKcc3jrUQJ45",
  "key24": "5nycShRPHZPUrLsESwkR1LU95CpiQY6CmwnALLRZoYbSqu3GHATychAb3ee4FWGXQQ9gy3pf5eF6ADQUEfkYkRQb",
  "key25": "2QKjqimR5Be1WHZKZcTJLiBNWw2CBweiDK5hKccSoTV2EuYCvJAdq99cNvPXmKfvZbiKirJpvT5JoTTg5aAxoc9m",
  "key26": "4ZfHEyfZ9tgGi7zqGoscC65A2B1tFSujwrG1aAxePcnvwSoz9RAwgGjfd3mtrXEVVFH14tHxVpEd4vsifQhdoSDh",
  "key27": "34aQHo5STeJ57EqeoAvYHVYNPhYbcSGsCmVxgkcdKMoL9hpdjBsNPY1cKhW2KPM9bMTc3mFk8pzaFZajq6i2Hbvr",
  "key28": "sF3UJur9KFpfoMWtCtm4VFM35FfajnUmjxKRX41fpK668ERpmpMbU6s3DkZCxeSNNuNUL9vFaUQdrcgVCY2fxc8"
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
