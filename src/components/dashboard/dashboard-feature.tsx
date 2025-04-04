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
    "2Bm1uBCKGB6fHFydEqYJoaA7Tw8caCte7sHq3ywd5VEAdHWUQSfpF1gjuNiesPwT3cuuDbnEcmY1odSf78zvR3Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZdGToxQx2zoex66admyUu6xKGVaLwa58rLqTJCP6a6vzbgK83ceTkstjLvAtBvjiT24z6y4Cm8WuvdbWk3PSze",
  "key1": "4P9JpuEqDNF7Lob12wu3KgsxvZZPGVUQRrefKXr6NJUbxbLa5oFFQApgdKmuSUP5Q8VAwHK2geqP4iVFm1wpV119",
  "key2": "42jqVE4V6zZsaVm64zXbjBQMkXi8mhhbCnvfqp8uiK6oBHKUS4gan1Fb2fCHnLLZVrErU196H8S5jwB78YuC4fcL",
  "key3": "48UpJULazRRFi7e3dQCMaTjFuZe7vMBAHEkhEwVeyVEgeftD6AbGR3guYSQNbPxX3qqfsm2s91YB73dBeBzswPup",
  "key4": "3vdbNR9UEsQZZHcApcfHm8SB3sqf82a7jWPCUin1JeGZVwiwmvQLwSVgrHSHodjdDnYuE6rSzpsczdw43VM6Zt5Q",
  "key5": "4jzwZ6g1Uy7VWEM6NxsmVgFMRBdrXX6ntCB4ZuWRhFAZFTgkxvThhTbpmBKcritFS72Y7FP6eA3SEZP6ueoXwdkB",
  "key6": "2814t3jQwA76mJz2oobd3kmXCDytUWQ7Q9GJHGepfq9Ju8pxqLfRgKPQARC3gE3df6NTswBgbyJJE1EEkKSfqnUZ",
  "key7": "5RDqy5r41uFjemivJDQxkWPs9xnsx9RmQBmMSYg57K2oeA3TVqwfifioyo8QBhnap1JzYtuQMS2tKM8KKAZF3TJT",
  "key8": "563TKX51AVkVh8PMUPV9yKh9gETsEpoe5sCZ9QZHnTUx8KffytgWEziH2nchbAgZMZYyCG3HTyM4ZPfLKMZvV1G7",
  "key9": "2SRu9fZP3Emzp9dBzHmxSiviZG2CV8yyq4LW4hs9v1gDjPk8xATiwpokVYCufMWofqRsW5qgrtbHgD9HjhtQDEbb",
  "key10": "32QMGN3xSf8ad8KqRKy8R4isKrL9JJGcH3HWeKX99Wnv1rtTVv2cjPyXnrb5jVk7j8F8536mgK4EF7GHMSTJuJ6J",
  "key11": "35XRYgWMc4Sb28nnH9hzVQ63eVL6FjFcrqycFAD4H2zaK53nVSCwSKtYsBqkxK9Xc7EWHwupAUMo3u19hN2s6aUs",
  "key12": "5N7baSntbDPhSkwiycHEtqyqieuaVKBCPrnvKYh6E2GHZQZSbMgpkvpjb5ven3WNGuGrAgPrkX8QtBWpbAUMK6CG",
  "key13": "5cEwe9jnwFpyurtm2XrWMdfr4Z7h1xNWzFouSm5jzbVDorAQqay4TSw8b9gnu5s4FVhfZn4VyRTEPHdkiu8ijXHZ",
  "key14": "5eTHaoysXfzt7YCRzRxKZEQ1rDscVqezsunqBV3CeUKM1BmEk8hQATqz4dz9Pzp5cPHdcKFTybekx98tk9tp9Ub8",
  "key15": "66r2kgdszpJaqqh9gQp1WBvfYCVpJqkYDdGoMBVZYtKPXxwuapNZK74AcaKb9WUUuQ44kn8kbZ6dDGiUomUVNu1S",
  "key16": "2AECcu36DbiQR52tBrmENZJWy155n11EZT2Djhun5GkMpFSWkZegJygEDwAH5AKNmyYFm5QvuuQ4iKfv9fnBGP6s",
  "key17": "urSyyy6zE7ae8b43D52E7u91ronDbjsTpAdoovHoExmi7GzZEKe56ZMK7ZdNWw3TvQThrcsqx5yUc7dUvdEht74",
  "key18": "4jKbgQS4YmaW8Q5hHpd84vxSHMKbGf3vjcNJURKQDBo1qLKuRvRDhmtdxvhpPHf2sGm5niuy9654uEyAN91DUZsQ",
  "key19": "zJFdMM6LLZhA79piZo3Z3XNuVuFLcHEmt6fSXcnKq3mGQWTeG62AqugXCBMDvTuoxfz1bzf14Sh1KRhhQ7sTFs4",
  "key20": "3NLsrDDP3dwbTKaQTgYFq4K2oubYigJv2g7pt9BdSQkG7vU2T8ZBA1DLhfuCSseQtyZCcWCLzPWNSvoG1sRk7m7S",
  "key21": "3n7oTUXex9RxHMnpiF6mgzVJG75V7PqxgdkbcXfxKGo4YGTCYsfQAaTvskaUcAeD5EBXjL5xdUEsJmmKbhwPfzti",
  "key22": "3Hqaxe6BQCtDi1GMZJ7x7w5izeKCEjbHB3q6LhQstvETaw52ZB4QambxkUExoJntkRUkA58a462he5XmSQoVdy6x",
  "key23": "5KvbjVgtB64iyUrufhGSGEbevEMLa2SKNzXeMYk1SemW41Ho3XfwQxuGHPHg19QQuenagW5Hn92JLd8TnT3czqv6",
  "key24": "41ZyyNRj6gXHhDTpwSi2ycqLzGJhqsbPAmMyQemfVQikpGPGNFSXnv2CLBy4Kz1K4icqdTZ4yD7fxWSrYeoHVgmX",
  "key25": "2WRRXetpAFttVMrUJrKikZnHdvDQhADW7rTW2wJ5JrL3ouS7G2xMdfKJimCvtg62p8R39BeYhKTYhf4Q95oaJ9d9",
  "key26": "62k5jAqgx7tS6CAzpcuabTekZL6Np2hqk6rKF8bLq1n5fH6gvehiWFvwBjiTAGBvJgREwkEPqcDoh3n5U56GXB9u",
  "key27": "4qMTMTHGuxoqtgiPqVXaNBKvZdHuMhCfMSrnWaAn5Kh8tqrKpDjiBeEsgRaaq4LGuztPWePoTSHMojRygZ4VztiA",
  "key28": "2nPTgiibXaMGTDHfR3tiZPEzFPMT7VeEGZhLFqJH1PKQZYq8qjpekByxHegvrXNSfkd2vmXejvgw9fGfRfLj8HLT",
  "key29": "v6dGuoGsTXeduKeBVrp2GHVxNGEDPdScmwnXNqn2EDVw4RUqVf8Q9hBxSqVZtjd1LkPw1BEBwN3PfGNnixvG65V"
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
