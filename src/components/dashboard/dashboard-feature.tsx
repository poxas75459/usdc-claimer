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
    "3abx1A6EHYJzu5eVBroNCryY1HdSd99CSaneGzYrSGxTN9acMAQBenhY6UxuU1d8MP2KXzLzhWLVQcF13crzRzeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21qf3ComkjCkW2C72ZkgvE1m1rfS4niN61QCjoH59TjE1ek9uH7Rr2gXP3HZCK9KWHMAxYuBrywHfLEu4tqDUxkr",
  "key1": "5UDoa6wfGodrA6Nj6Dm9M2yGdLdxzkixNn6J6Udy1Kv77pjK4Ked2ezqdKus1Tbvas5Z7qJamRjzf8FxMu4rJWqT",
  "key2": "58DxouFNvTs8Ws7MFmUxgy1qgXBADZbPvwhp3ANBVbFUPbRU4spYufUZLQj5JrxAAbobuqgUCqRSS572DttVBbR1",
  "key3": "4UEDWNVvyrM9kD6kLvfdUpx2ETXXv2DB2oGEh6MFLMJVWVBUbd9x934YBpv9RtT4dJe5x1o6h5JfJhdoJeEoSbx7",
  "key4": "2ES3tGpfDEeXjRH9pjKZJkAj8JsxUT9vcmFfbpL38243hWgJAFBf66Gt3DsHssmTYNGb7C3sv7f7oGT7dWDh9hMb",
  "key5": "2EspwLZziyqWGTqLCGMYE3bjJEN7VBS4bvDQNEt2TvFYJXU1UHRg68m187dAqZ8dzXJ5JdpVKM3LYa6Aj22ibAEK",
  "key6": "3iLreFyASFLz9hYydEa3LgreF6VvWbYeQp1B8L8QBAukw5QxsfBu6MCNNs69QZtmVWnnH112DYMmLkdyLpYtF7Am",
  "key7": "3o7pt2cSaebkJrtpq9t6qd7HufznDVxawwioh1AVXPkZJdm1LysTcFyYh7z1a9wW4gEGZ7Xi86mCaQ2oroV78GwM",
  "key8": "42wHNrJ1LAyk2swM8ufj4TqKprmayb2GHMuK1geWR5RneYbfaSq872cJ4TUqaqMGw4jytA6AmiVxpMTdC82urMq6",
  "key9": "3M1yDMfwB4wwFD8dxF6tbF8swy4R5uwJukgre4GvccppdSfJsMaNVyXZNjUQPMpPSBEtuM7oZjGJxBFF3sP8Kjox",
  "key10": "5HxiFj8y5Jx72CtrdBvawjFBN21PH8tcdPwgMLMdzEYWTMf8eV9hi9BU9uYdrYQTbieG6dqaAYzH16Qs9yBK717W",
  "key11": "4PmChsBvvVcifYSNkiWJZngz7THWTrGodYLxRMNjA2HD43gBiNi2KwK3MEKwkp3X8HSaA8NRyLftcBMCUFfhA6kF",
  "key12": "4omsYWiPJpWBE4e6oSAd6C8bMnb3TsK6cvA4ynxJWQhPpjbbx9t4d4WBNEcUXYtDA4DTjgj1TA11daN4BeMWw7Tw",
  "key13": "wBe7QAtP8U39HtREBRRxU8ezsHT4bxzFfDWmmuFD9ojcNdpM59mNPaKRHAaUX3veAK8chEptwJAkS1NkT7Pir7q",
  "key14": "2kr8LBtFHEYiT6pegn2kxCDBf6EoAYokiHe8vdq2Q25zpQxaMbYTp1TRtihnPKzSvieg6uBzLGamKeeU2dLCtMkb",
  "key15": "59KNAVi1dihGeaT1ruFPEmE5ArwxJPxrzbo5eucCxskKs52E8BrUufQRQu4oRDkuXyJ8L2T6kju8QdhcsqNAikMv",
  "key16": "4WvZZowvCvgYMpwJHNctyUUrtXkWA12Up5HHx1zkUwQwTs5aC6HaQMd5SF68gXaaEyFmWfeV2uQRV2UfRNgzvVaA",
  "key17": "5kcG8Fka8AgJfDPqWnHEE1bmUrGf4eez5ZdboQguJncq8p3wjCc99hoqbk2CLouBgeWSVSySQsjQ8eqU7QhdzhZw",
  "key18": "4VLiPwsuZACLi3Cx6sHorUgPaav6LhHyCXyJ6RtKzxX1c1b1oKLEsiLLoRJTpEPhE7V52V3wCCSiaX5kBNxLGXGB",
  "key19": "62XpBPjnoZV9arrTVa6P1zo3fhmxwg7WJSJmAZPecVKmW5otMAwtSaJiwxgAsHmjuNSwJQpqxfQdjiyLt1v9J1Mt",
  "key20": "2dCj8UGz8aeZgd8PBFSBrUpNAfbvNSRmanap7Sq2xAeeib1FoWbrGE82N2kLw5KhWVDfAbJP8dPRnC6EdrJsMHZi",
  "key21": "64cviwNH1DCrBw6R712gfw4fg64n4oUNAB9jYDdjZtSGDWy1Ps5aeBgoHh8nnN6cSyMBViLbiTEWcXAv9Wieaag5",
  "key22": "2J2G3AGaoz33BaqXTSAn35uH6hBjzfXadEw5nnD6RoUwLQJtHEyC2FAGZF1VvGgJhXKgnQ55eVVKBQabSVzXaujB",
  "key23": "3D2G6aBkkcrXb82Qv5C2yx7kdGugxX4ASMiwTBrdvCQANXtjADMUmBEG213ET63UbTV24yFcCj9jj38b78j18LmA",
  "key24": "2RTLo71EkoUsyRz5yYPm4rJteL48FQqqTvmsviQxYBFBT9RUYm6B4AMM5u8STQgKAuhGqEWCUDjH5c6Dt7n2q8vU",
  "key25": "2xVKAgZbJehXNiiyfht2FFo7YvVm5nYv61QXN3VS9kD1odZDduWW6HDsqo3ji4obd9PJMhA5SyxG5P3y1YgS1D7f"
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
