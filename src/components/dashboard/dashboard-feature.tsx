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
    "WL8w2pdejedxjf1KAGfS832JNuAXEzmLR9gmS5x2afartGoxCqdrCTqg8UsUTESNRyiMp7g3sDYP9GTj6LEgyyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShJDsmP1GYUs1CVgYbTPQ6BtvRLRz78LuYshrepNSVHY2V32crTADTNg215nt68zuKh7mXFsr2K2sEZ9DxLY2Bp",
  "key1": "3qsaDLGn6yTAXvNUVidBxpBfQpjznLjYPMa7H4eG9nQWNfwXG8mJjtyCb9CUvfqyTTREfgtKsENUBuThdS5KEd9w",
  "key2": "5NKK2puWDveuLcTVEgHME6nGcXBDg3V4P6gim1ppR6dyiK7S6oMJBquXbUN8Dv8Jwa5UjoajEQZk2Ha8fUJ45scn",
  "key3": "Sx5GrnakHzP2tBq5bnt8jEZzjMEYeqz1BWjvJtQncrdhsvYoYaqi3rv5ywnftdt42VAh2xEpNqqXiNs9xCiDvAo",
  "key4": "5j3zaFHwy58Jvf3wbSuzUN2tYxXRoEVLSQ6bjSCC5mS8YqLC5ZmR7JRa6JVWLbV1yvrBdLhLnbbHSu2d5tZGMcfk",
  "key5": "2wtEUWkFecaWnQ2RHgDSYeDo54GSg7ZfBYpEigY4aFpNPetzar8QeoM37kcM3JBnNtYLTQfn7H7t8tzL5zErmUgq",
  "key6": "29h2GTkirNBCvfBtuSxHusEyNG4nWezez8ZyBPzbE81Fgy7wnZQJ18dVPWxAAkMUjHfgjDahWTaSxeMExibWDVfm",
  "key7": "3pUnWt8JXTDT6S3NGCakpPqXaffexJR5CkrpRyC4gYhybnqcuiuCpeYTehV5UNFYQ4zZGGJ6Z7hXgf1TC1DC4viD",
  "key8": "kQFmu1aFq6yxqdrcZKk4h8qaji2hbcMMQ7iwmq5kNZH7jSn4e29UAVXTVJqiabVcrHYipJCGfropQtvGaZcpHXb",
  "key9": "24pjNcLLDko5sTEGf9q5Fd9HLWQnnUzdHSff2rs8y6pH6fBHFCPBP1Q9PwbVtpNzkHmFuPfESF15AEM2p2gbsECh",
  "key10": "U3yHZV3hdcSF6UkYV6ZtwSFgYkqchqbdSWsnBZPtG3zh676YHoPZzrzzrfEKkWAe4ZohCcY3ZbTjdMBQ3q4xtwn",
  "key11": "3v69UDT4EvqDipKNLMGsfsqcYByesYXMVuJ9AtH2oNAZ7vSpHBAC5JsREyDStAwUw6ZVJiDzAXk2kBy5HgHz2qa8",
  "key12": "j4jHoTN1TfvAJfXZkHv7H7BdszxAmfgtM2YbtvCFmqdk8YEGpgjFcZqg1u9Z9zxo3f4oyz6XCtJ37LuXY4pPcbX",
  "key13": "2j2qVmhxEEgFbFqmdZtDGL48EFu9pS7ENgJuuTLzC5x7MYVSzWUZ1kgzueqd5oGrSfYU5Xrb5MVRtTzKLFu8LB8N",
  "key14": "3tJt4jWh23HPTbwtd912HFysnCUHRTujEFLLiF4LwMeGrHjCoiS9vsbinn61KiaNUtmnf2uFeGGAn9uguNU6DZ17",
  "key15": "PqkXUG3ruNE8pC6rcLMGZFy1KXuiA8hLHXztMiqbSQyzjyMS2QX3GthqhFuUck1ZPx5eeCWfLF1JUZdtiLHgDxJ",
  "key16": "ALfpuQvX9bPRR3GtpsfHDB46KkDuPbqYKHFYpyyJ4iG7VrYrDPicdigs76BggV57sz5DoxTrkE5Xr9SRQ5gaM3F",
  "key17": "2vUzUVZRUEhNvFJRTkZHDXJqKiXAjvL6R4LAuxLtd3Fkb38qoCaM4NfM8Z3tw25EmL4nuCxmWXTfqzRnnCh151DN",
  "key18": "3PqZQ8hv5DuP5adSEbHKWatZoTjXABd82Sj1T1vJiJfrBfF9KoJ4anjwER5U1qGmorX1EqUmAkPF2AXSwzVRU9dS",
  "key19": "4SfwzMk8jTNiCaWPQ4MpAWfw3pAbkYW4zqd1sQivTvBEKuSXt9ibbcCgrY1euiWcj94dUDeVP1vk3F69WaXVmKix",
  "key20": "3TvYRHJCJSk3q85BSYpn4Nxa1Yvpgk8k41h78YwFsCmaz5LwwBXs5MgwZP4aX4nLBJuWino7Yzs8WNjMoDHg1dFn",
  "key21": "5mW5EtFRkLF9QWhwR6QuWfc27yGyYqDvhBtmsNPfTwmgk8mqX3jJopzsW81aAqURZaFK3J3jZoD1gYfUvpjbVg8W",
  "key22": "3FBvwzgCGSarm27rnJ6FXFuBhXaw7NpbJdT2FgKsz4zcvoZDnC3PB5vUf6fSXtZLMVikgQUBd1HnAy8iakWEtgDh",
  "key23": "5JgmRZSyZvob6VPViNvYre2Pxw8sqSQuNFkHzu3dQdrAFC9hQsANZyvr1o91ctfV2PgQENGMxLWxpEHzKwmYYJNZ",
  "key24": "3MtCZA4H1dEAtE1nV13Tav3MBeuUscoUNrDQZHm5cfRHP2N2uBNfGkodGKwcaBgMgSJSYy4qZvy5mrcqTU8M4KN2",
  "key25": "3CafTPmnEKbNhUsKGbf2eTAvddvsCNehVi854ogxeeBns6M5eTfqeSYV1gdvdEoSTDNeAGLf21f5c5JrGq3bG8s1",
  "key26": "5wMHFkg9WzNLKZ17uhpFzHjCyKSqU66RzocqtwL58bXNmtR91EHwfn4Qkg6Ud4ayCRLZPSMAhaug6tFHf39MQV17",
  "key27": "4v4VNdd3pdcUbjuW629M4eTtjH1tQiHS8nanE87iefFxfmRfc49u8FrBG1UCuUdBFBjXdr6ZVXaYxjLfzkrEMFpq",
  "key28": "4Td2cjzjuXBkmJZ26Kq3rqKRZ1iLvUuknoKrQrMhf8zPnPysLk3QYRRoCCsoKrcaB1dcEVvZZw3NExcCx4FrRCrU",
  "key29": "2rpsP64mGVeuEvUcVXb47T4eR9JXuFDurKkq4UawWEGc9BkxdkrAsBcKZAbpQ6ivc8CcXkiftAHMf6W3PJrHPBYA",
  "key30": "3BwQwzSj4qxZUQ7Ws1nZxdrsnahTgFowJRn9j2MawcaFrj4xdJn6v7ze7RULWNw5sRoeu6CTSapQN326gKSASZ81"
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
