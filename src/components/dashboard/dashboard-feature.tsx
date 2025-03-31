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
    "5qYKr3jAMMQQXpdTjzcn9NfWqq1jqouoB1Rd6y3DbKLLLJGcMizPaibfLsq1kQGPFN7gjPBmHqzsQyN1mgUTrUN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Skv1RJw4RgZbsYLBbH7oW1JTh5XHRcHBu82H5PWvtYXRnmDs7zvPgZCkgUJHerc7mXSTu75HA3BdHuZ8feN4DTj",
  "key1": "24tVrum7z5Ui25iQusArZwNaKLapjUDCjdwzWiCHz1aYyjzRTjfhBszSJdXJLphKrzCufSqTzZBNsHFEEa49KDny",
  "key2": "7dhFeFtV9x2uMTTYz9VRDz2vSiH1cqE8oWxwVKDoVVTsqmdUMLFhZK4wLoZ7pB9z3p6RaMNJkwDqKoQ9ihy2JjM",
  "key3": "4YFSjJpQTZrNJSdurVSj2fYYgmV797CTz6fXDYFHZ3JptG4kDP1KRpqKiU5hpVCscam2tQFS3AT1Hm2SwpuWoV4Y",
  "key4": "5g6yBLzyCXW79SQ6DB3APUZNruRW3hXaBN8B4zk83canYNHkJbxmbL6ix3upwg9KhqQmzySB3q2C2SrKberBfPVv",
  "key5": "4BTXQN8jMi5RXFCRCp4PdSVLMhbrFaPnf3qsyu58ZjMf44Pf4pVQEaCvDp783BXc1kZ9E6TKzis9p85vQrbFHTnS",
  "key6": "5Fcu7T6ejhXmzPgujiRHjZzC8kYnkmRxdQJTJmR6dgsxNuEwdVB3pjSBV3htqWvGYPCyq8bBxbvxssJTxpCzvLHg",
  "key7": "2qkahs6JhviaLa39Jj5KddCUpVqctQ5T2BPzA3wbzs67SmYHdEyZSifMJeEP81WeSz1aKvYet8ZRtQ25dX2pC3D9",
  "key8": "64pcM8Yn2EUcdY4ND15uMP4aQ95ZVzpjw8YhRtMKm39QUqjZcmpmzXLB8T3jbeva36ijALVPXRb9GFVry9CyR5yP",
  "key9": "26RHTDtzdzf3HGVMtMKD47y5iNKWhUU3XgzKqbpFwrTvHqjt8yGEQF5z17tPy9mdk5KBTjA7UmkJepUdRu31kYyR",
  "key10": "2bgHHSkU5AoM7fNpTH7MxSR4iWQUPTt1y8etSjkYecvPawV5nZtrrHSf4se2jtG7UXMYKokY3VLM69RMQkytfvGG",
  "key11": "hJBdemEDmjGf5P4hoorZX1acKzkwdrduSMEaJwNMMiWupvEgcvtRF51ZywfiFhrrbgGM6rwE82CMdEfkpj4KsYd",
  "key12": "DqtCepC1xi6rf7qYf3HFcXixSZAYefDwtpxBWWoS9MNRXsy7eCidrr6cypvzCm9npKaWPdVYJ9VQ3HMNrJmt11k",
  "key13": "25YtSmkbzMczH3d7mxgkK3ZmjCmCgsJNyhTxuBCfbSyDC1dHEepA3kmH7VEAn7zfbh6VSFBa2s5QNNihTN9zY39A",
  "key14": "4PQuqLJeeeYpw2oqTGoiGU8QzsX1ANxbN6vaWwPfNDaxoMZtMmp4weSCEk9XyWgKhwhpjaSD9jE8bvAp3R9kYL7c",
  "key15": "zK8pPiqTbWwE361dCpFhECasZUMDgNQaPorY2c5m9yW6DuSbG12nTjxE4GZUnQrtiqJ3Q7UEGorLuoZ7fHowbub",
  "key16": "3N4w6m3W5MZpYsCqbJRWsBRfxsxc21mcP6kao86fYgChiYM1RqBxcviRRRfsc7kweeZmLqVAcoqy3krU5hpMgd7W",
  "key17": "3quUenvJecZy4Vgeabc8cr7ZSiZZTwiuKS8H2t8fa4obAJ8fT5DBPmzX19Le7uTt5rUw3mKb3hbGngxHXcjsQntA",
  "key18": "45kxrcehhBa62vzpXGYyLkxpwrJx2bv66F7wMMQQ74szRkWeSmJyKscJ9kzEWf6BgR5o48KoTVkB6FUay8Cg71nN",
  "key19": "5UkH8wyffKCtfye2rtYj3paQtvZkEs63aC47FENwkFbzpzoBoU9ZhPT6veKxyaBzFooGEEMhmyb8bnvz6JEGUH5e",
  "key20": "5F49N3K3QD6HJwdiVEQYmyso9qAEzkgR16nynpcQzVDnhTSJcv7iuc3o22VF3Xvwsgy9PcFpR9UdHVxQtNogdjrL",
  "key21": "2f6rihUCRmiWQ3DLEdQ739TM9hnJJ1tWQ6VHpzsyVeWFR4VWFBsQbTHGqBSTQFpKVEvsGWGnhpkzAGrKnMtC5jzZ",
  "key22": "3LX6MpWgymhJeThVd1y8SY9x9tDheHTpn3xN9ftxd5d9eor1qR5p5vsW86EDwSJxXmjPtpUqrbLt6MF3W3ebG5Rd",
  "key23": "5cHfppYhJx73KQ5xaDuDs8ezwLq6t1DaPDNwmXJb4VrdKoCf7poHi95swfhvPyQSGkJ2vEcKeNzZxYcpy2E9MnP4",
  "key24": "61hwEopmebkRwsxoUf7bhPxtmkDHi6zcdZPwqoSyhieZTujahJcEtm2oge4QPHcFTqUecqBnKERpZz4fg1ve5kyL",
  "key25": "4vAtn2R5AMgwwz417rDz26n85ppD3DBDCVVK1ZSzBdqgSwx476wDYmepfYm3pW4v9NhMcbBWrYqrxcP2UF7HhFkr",
  "key26": "4pRTM8SCqpwK8yxdsy4RV384zNv6Q43x5QHmAuoEJU4jHm3QPdNQ991sPPEkmE1r9EkSLB61sdAUhzjhfLZUN8E8",
  "key27": "37m2ZZ7HfBCXeyxwdktprLxQB5PF9ik9hj75BtDn1yMbdaEiFBapNKY3mkGH2P4iLVuGqvvAG23xBpeae58CYAtj",
  "key28": "E3vywbiWeFKiChjEsSmCyVdRvBgjqUZEqweSzskscusRh3eFx7Uj7AmMZYooEruiC97EGQycQB8GXwucHWxX5Nu",
  "key29": "2RF1GF8X34FJimmaygMuUj45hRCaj4BpdaL9HyUMsKa92RzyBRWCWsiN7fwJx8iTT39bQ1yZsbgnePnXAXG3djv1",
  "key30": "3qGPKtLa5jCBUJrHMuwLKTbUmSdENgmRjzGePnBr6gRb6U2bBH672ofQYwpQQFbGjcUMCTPqvu1oH7RMdnWgpudm",
  "key31": "57gKShTqnqBwoYUc7BEwKxh1GKK5Rh9UkKnsAMRBdfRqWrykqVHc9xJTbpb9xfGk277YaD5dVMXmni6yvRjfKffX",
  "key32": "4by2zSVjYnqNNJKxB2ShsMLQvnQCoiLuujLyiumMGgRhGjA9by8cNUGXGQqr5rMdrxUNRFW2buZrMLXXp5j3Fd1R",
  "key33": "3ZkHeWwFScxoKAmL5cXdQV5Z1Fji7uxxWt2rhhk9UDzVE7qVEUHJQ6zhwgbH7oP1ATCpXV6PEF23n1xWt79Aq9YS",
  "key34": "5YMM8J4CPvifJ17QB3aqmm77SfdM64wU9b4BGqTzvnnpVmAXH71HuG4nLr1Ygdytk1H89MoYHrfjipuSkeoF85xY",
  "key35": "5P7sph3dBFqoRc2JWWjSnpdwGWsVkckFDbkYo2Er95P3NmbfrXdkSRdd9oEpnM1gPddjWNUtnNpj527Ez48CFtUb",
  "key36": "4Rdn8FJTG59c2WcHn6pgT88GN1gTGvqr4rWS5DiCeEtaavySyoXfTsLxTfFwZznT9cHuvGmcwaAceunnobLjRo4w",
  "key37": "47fkaKnh5MiAJ5oMnjZyG25UALmXRpkTFM7aPyWqjyBfHysnmuhnigQfKCxwBNKJNmL4QMaqqUvCBrtEmzUgWB5j",
  "key38": "3qaY8nRJ9S3JqgjVFMFCZH1Z5bA69Kv9Pc614sHZ4aVjPeytfBYbrCP7wm7gRXswaRp38BNRSJrFXtdXiBkXytBL"
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
