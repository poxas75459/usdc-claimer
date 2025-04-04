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
    "5NYfMhESezRcem1H9Js29HdTNQr6xExxXp3AZE9DDTBRkVWmMaNwJ6eHpRJeNwVbcWgBW3e2Vviag6dkQ2NZv82q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYptFshdngradx16tLxLLXQf2y9bc6gxMobXBNSAqmbgWZRBvQPnLZZ4oEJMfpriWKTJZee75f53iJG4H7kba7n",
  "key1": "2m92drcxTmyDp2qsruYKEGHoRYoFggSK65nggRyT2b5DxmTXK8uE4qbFkE2mXGnAgkxwjoCJSLFcTSHNuqSsc8PB",
  "key2": "KmfEnbuBw8xK2uPQBK96eEc33WDPpAe88DcH5UewjKHpGh2rMx1o7Q449vQVcgbQpE1ifTojaKkF3kHZVvJ6zFH",
  "key3": "3o7Nt9jSP8pAxxsqtEeDuPc86io4TETRkAzfct2zJfrcWz9YwN2jV6sGQNo4hgggddfPgq6CRgr7vKzYRdEissD4",
  "key4": "29a48oots1mnYAPZfXe4cLtq49ki8Li2VXKJwTDCFH9xRUtGubcu781jJ4j797fZcf7C1V4WQb8mheH5FbW8qSuH",
  "key5": "5c7D4Pz71pmydp5tWExLLHz4DQXDLvxpRZE75TD1QMRZwdj1Pak5QEpUv2wy8tGcFAvzBMR42AxKbYvAHCiqMacM",
  "key6": "3SjGxXZTAXHN3Q4Cmfmk38JXKg8Xsg8EPT5KJrMzmn7PQKHt2g9ipz1fz2tnLz8xGn3ZP5kfKb4s2uGWg82MEqpW",
  "key7": "2m8pNzw4ZLMobiiuUWokpN6T8PZjjd11FAr7xhNFH8tTnxoiCJyeF3jzWEjdgh1ZxxZP2Y6iGJ1q4diymUYbWnD",
  "key8": "4F2hDzcxpgtkPxGrffB6qj5CHDTN7HbrHpNKq9JqE88K8AvFbGCFQV1zjk6aSfpxuZgsZ1AqFSCCz9ifdWi2uo9",
  "key9": "5m8Bm7L2y8fR9rAUUgosmo1FL38NgtdSWfTcRBT7x7gFHyS1TF5CEqdfPFRvrjxYLmyWT7GUiMzt3Bd15Foz84ft",
  "key10": "4Y1rBpQzSV3YvCdXMXEDMqSvkeQwbRX2kionWC6Qmrs29ajvhyrSsuD8RnGzMxxsFPMmU2XCSETm9j3bcY5pw23k",
  "key11": "54bD2CsJYq7qzaujgyPvSYYbfCRMUSmnPzxxkdZPUGSHvb5AE4hhXoQ4keCTwhHXQUQzDiYGQ8Wr1zR77334maMy",
  "key12": "31fvtNbYoiohCw7g7XP9JdyzB2bMRGfkWQq5mFfV3NQgwpbbXEvmGa18JVm1qSY4ergxQgT8ZczgjiMFNUsyzMHH",
  "key13": "4gjNJ2x4k26H6y45gJ9jpRMMfxD9jSxryT6onFA2ykgjmLTDTBUwYgRJwJ2EtRJrRVHSrky7eYoPDhQ5b3XNDwsu",
  "key14": "2CeM2pkP28Y9yhy33j8Q7eqgfkA3M7Cp5j6BYHhcpEvvZ5rq2dt77KjXbUUg6X4ytkaRAUdV3wFyZSTeTrpqzoRz",
  "key15": "4yrke2waq1KqJs8hR1vRp3HGZmQykMewGez4qc4wK7o6KvMaubQvDJxmyp9zfkjivqPeayv1mzWspUhSzLzE5E9C",
  "key16": "2xsDUkdQBGf7HYJugpRBefSzLcWesjZTQHT7aPdpTsnfgggAatT9gp8jcHfx1jsRovrZnqmUyxJmtPQzD9SSezE8",
  "key17": "2BxCX2v1iLeqHJLLzuWiSBzVgSa2cHDVgnqfzMkarFz7yhRTEmxwE5DqSHb6tevk1vLrhHst8GL9cH6jthhNHQuF",
  "key18": "3cNab78ML1sh6YbzGxSpLZaM2Dq1Luhgnni2rzLdf8Nu8yZfPyUYNPkLNfEefY7TgVH1BcxHMvJN7xx9JHB7VPW1",
  "key19": "nKhWP11JEkivjkWki1uBTqjQdTSg3T3qJXwpP5qe42qXmfrn2U2L2ANXhFUTqm3hAEQjm9ZEPLBknyDsi4y8idz",
  "key20": "2oc5Ub3rad6V5eF13tuupe8dKyzxffSdnfYZw1JYTNFM76FvTr5QzMS6a6qDxqUShpE1Cqc9Vjy2DHDjPJ6jixzY",
  "key21": "3QjF2NmDud29rwM1xeTTN1Kb9YEqbqEBp8d3f2bwbV4vfs2JT49w88XDkuE4qgKKNZubvjuU9FNtMS7fjVcN6azD",
  "key22": "3HdXK1cdDEJ1fMi7iUSx82mSA9BaxmoT4wSdVBtizvYdi5cfDk73ac8WGLegFmAXsNP8dwTyTq3Jr72BDbwPND6g",
  "key23": "24ehfv8dTuBfymuC4EmXqsraJmLAxbaAKYwSEHMcuNPmCfpMWeRzspQW6czoeoXPbmEhVa3tfwDB7vhCA483NroF",
  "key24": "Fx7k11Y4sVMm7wbjJy6XjiTm2e9wens7BY5Gm7wr7BAqtBi8FamzypXqghdQFSgJre8UNP6wkFMt8FV8ySt2LsF",
  "key25": "5jtLHpA1e8ozoFebBnk6DSTCPWxo7vQ8qwziuss3orkQfHz3CyJoCudPkFN7PJVCdUEDp3SEK4JLfXDssviwb2S3",
  "key26": "QLWkvqp9jCbvieL8A68Evbj1CFo23BU95htFkfpB6gy32xhqDS6KE7htWZBFhuBrsneo753L6Ut8vjXCBpyAaKM",
  "key27": "3cRiYAkz5yApnRAkGFetb4Tsr3TmCvnpQzkTyUr9a4NCKjQtmASGNrAp8yQe9mZp4GzTnRjkJxUjTi23rBdfmCbB",
  "key28": "2oB4MQtTAu51qLwWjpQxZWoiu5U3WaEXsdDN3B5Gw2FNPZ5nfSYX9ntXsEcNnQ7JhBgb4ZwoDFB2imNfWdCuGM2p",
  "key29": "3M6d9qNacgW7Tku4XTuJwHrEUgYV3S2X4yaeVn9aHfQGgpmafQshDDo1gVfoFbg7ZFKNy8gmFjNuqB8yWZvFHJ3A",
  "key30": "roRuAnGea212dADZF34HNLgGLoASicN7vf5hSoiUtfQBovUmABipLQaoNtASuGZpxkMmCgmXHod8nX5tMxWWj4B",
  "key31": "3PpM7Q5gnJkwubZ11pE2M72azU2N7MhYMxSvQ6eXJyCEDQNq38s4F9b5VaoQ8ryrc44DHuyAfutyhXjLZvLm7UXs",
  "key32": "5DQrfPkRYtfvGFpqNrxGw3MxRBc5x2L5aR3Dj6FDef23onPUptnzw3Z9CTEWFgPL2RNBA8xjS1Ep2Gf9QjSWt49W",
  "key33": "v1zUReQyR9LEsQKRd1mDbjjGASKDBWqbdJD8LYHX95yjwNrpMN3bLcu6Wqd9YpfGywAUrouaQ52YUpSDapsXmsn",
  "key34": "2f7ssJvP5PhamVuL9bBLf6yZZUpsGH1HqHKwEyRVvgidsHAsatgXAqcFRX6KR52F6s3DMZgB7nefxkD3aGATd3k",
  "key35": "3HyZpfeyshjxW6HeutZNKi7tpFFq7BJGXiaKynsdsRRB2qT69q3oksSofkrZFoqERoa33DLDqasXDDWHi6fMfUbC",
  "key36": "ZnWio7v44YQL6oFpFpaPJhvrH47huxag3EMn5asVPQyKYCR5SVyytVtryX35AkwyFd1NkGG7tUU6vzPhnbnLT9B",
  "key37": "NyuwWeLnbHentFqqjiFAUTVREaNkrZX4QT2FU81JmZyp9HnpAEVdDwc2grk2bhG82ZwvUKxYpscxBkbYGmTQHq1"
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
