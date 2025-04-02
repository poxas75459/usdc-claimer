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
    "zTQqDen9jgiVZYZ1oHF87jpjjU9cB55EKtWe52zeksmewJwKJX5TPKCwEejLZDeWSW1PQpVGRht8ZzxkQHME4Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhTKimPgRY2umT8QDKn2oWwG8ZmbbMF6UG52FjXocXLsTA8PRgifoypb3H88w6s1MmA7Uo17j5Pt7SBc11LCMPv",
  "key1": "5nb4vhzWuAJndsPvr57PqitP3WdWHhLdoqkwGprMPKSQaU6TzYamz2ZHPyunKtRd5H9LFog4L7nPtiTpSAjth6AS",
  "key2": "tF2HXv18fKXK8ku6XFYCKRZ1uLkcswPK3B1v2RLQEjZTzzpSSE7cNwUq2faatinFSeayK2ZmaUDcaXnbMZteqaa",
  "key3": "fRh4sLE4c2DCUyAYYpnA7UAso6RssuYSF5f9oxukgU73F4mLAsH1R4XxNwbJY1aQqd5KmZXADcWNfRudUMEky8o",
  "key4": "2KHAJ8ipXWauAUvuTugSzMiZYhdC2NLCovHLGLUi58gnFQH2wY4Qz1nJJAzTxAZurbi8i1BnoAPBL6SDUau6vTQK",
  "key5": "5EmYvUtKuzfS46NpYYRPVo8RU9etM7oP2T9jdfLZt1SFySvEZcDhc1uH9Arfcbn8VvLikKANosxZAVZ6FBENsMjC",
  "key6": "2KUfQLYHxc82Gsf6TqmgzZx6seMgsxPQtsTVnSMfqonyeHxq24GvCgDRv5ZR5zwsJwTYDanPLDsYgFr6ej2Msn7g",
  "key7": "4mDWVgVccEUM3zRQSoLZxupLFMNmPgAD6SZNPeaq7i2xWhqXdQnBogsDKMSMYg5niFmfsoBByown5gsteYwN38TR",
  "key8": "3WCzSeb8PPsDF11i5UAkrzYY9VdjbFarihMrwaQoy6XHngi5UbRDFdvbHsbA2ia2DeXzemLzfMnWCyJu5E3Cx1S4",
  "key9": "65h732aRguEuhRfKwPxfdCwTR9vCSAbDFJBS835LMccPNiybAdsbhcyBZ1VF9u6nGmBPxNxDtcyrczNcQ24smnCq",
  "key10": "3pBBW4kdgz8BZvJ8ickEonq49NziBNixQ4YWumoRegF26jBd7zR7P9jN7ZGm7CAYgVpFPgKy5FeP4N3vQgee3FRs",
  "key11": "7MTMvSX8M4QWmn2ZtgyubA934oNnLtBVDnNWWpaPmjyHjPvy9khoeJAdmZxxwzdve1P1igA7wF2PAoapjrs1Cex",
  "key12": "5e55fzWoNVC9Qw5o2F1UZ3yzqonKp88yosZXFfg7tBdU3g6E8Kmw8eqoF5ukzpjcMepHvJvRsuTNtTKQqEcav56g",
  "key13": "37KWSqWLmKBjmSCphsiZrVct6d1bcZqiL7GuDtag6EkWqeKX763VVToSX5gsYXCbTmfrzszU77kFMPJ5oXiCs3hi",
  "key14": "2CgLf6AupB5cHv54FJHqgc4kNUsdcESmZogNmXx4N6REgYwNXSHDNLzhTLivXtb9GrD5Ga9vKtz7L1Y3iAeAazaF",
  "key15": "3tP6SLn69sTfGYQCoUwq1YiSgixMMaWXx2Ey628rF9vXeGrxrvJnukgYPTNKArCfNAJancCYJ5jprXbCGh7f9CYh",
  "key16": "5rCSJBq6s8x5yaWxqxYriNfqKonqbDA6J8n9hqBbGGYmW2oZvGWjHMYJ5aNby1d9geWXUge2by3JeYpkBwfSX9Nv",
  "key17": "2xv4kQJ3AG1HtYMZCe5NX4SVeJLPDDrSyYAtNeTHe1wAU5hPxNix9mCGFDL6mzgxTe2da9nrVrPec66kVk6TsR1m",
  "key18": "4Tm9YAqYujKFro79cN3ofLsthMiPiUpEkkNZ2Q7VLkfsnbG8Pxcq41w7APRLxzsG6hCHbo3sefeigb49wpLpR66",
  "key19": "4GppPL3zdL3WBhh3h8t6ARvGX1VsYdtKLBryoxvVxxnhkKTAYqqfmCdHiVpJUSyoiT2eK8QNwnvTq6XaQtVDZ9hy",
  "key20": "5M6b7e5M9qdAj1ggaeqkRBGFDWpaSrTVLKdMh9ksB2ikD5ApZuWii4rCu5EcssxpUBB3WaaxLsHCLziu3kx4XJwM",
  "key21": "46c8vuKnGJhbgTgKvtEPi4Q4rZxVcqXEtWY7jYTmTgxKEueSurtU9bPrReW31HF6YsvxrcKWJmmW19kdhHNZJtna",
  "key22": "J51htooGkMhx3f6dKdNekjz2Y1fV17RH3ZpTkaMXC1obPMsqyAgSeUKRV8J44udiAdCNiDJwfZ2kfoENcvxrwGs",
  "key23": "2Ymh4q4PymvHN5v3vqDihktEXKhnyXUMkPMapUovcUFQRpZNsxyGayGW6VA3TxGt1fw1EQqodZdToSkMTw1chhP1",
  "key24": "2c63pm5jnv1vRSaXJ95AsY7e7p7JojZRC25eGrBa93bxiyaJLmEcCqMxMw1xWTdu42V83ChNJYeedbXprBwp62Wb",
  "key25": "5RBdvBkdZWXCdCfMM4GA86AwqtmVUgDMzDw1BC9z6gUDbXFvow6RXjdkzYie3FryGJaAieAPh1dvhtvukbkT8xBU",
  "key26": "4HmRHW4VKmP5sabvdaNvqpn4KbUiy1fzuhv37pczhCVjRaZdddgmfdUzoX5PzhRoutg5SygHTGxzRYZmZxKDWLCN",
  "key27": "3DQQ9x2B9TmMsWyhMwxBXCtU6osJWqqeNB6Vfo1MkVYj1rkaZtnk8RUEUKu6z9p4gmvQcJLDvCPPg3PqRAruf5Rm",
  "key28": "51gP4cWEh7wRe5iJchUXkt3gRhFGFe1uz9GtPzD2UzPL17ryc5exUSNLHDRaH6Uh7B3W3AictiQ3APMUsbmePBJJ",
  "key29": "2nYPYoP8M3jRWGMvhRwL935vqghnXv5Z4Rq7J2GuZpz5i8zNnoKzGn4QxqnZym5KBZG1hNupUnUmeBBejsBJkyQX",
  "key30": "3YXBTtkUbALo5FxD5cZ24u8N96k7zY9fVGMP58EEebjo899NSWs2ibPSXUcRwxmqAxHYybxPwwkDcPzg2FDjReJ4",
  "key31": "2EmX6Df5Tuh8E6JsPpjsi4NBHZ4SDfxiXVRViFJQvRVLwQQJHk61oz8UKbRBdobEgMfhnkMh2zDmj4HAXbdWT7T9",
  "key32": "4NPRLLN1jFbKzJYRjrDdERsfSRzcuCRwh9e7YtUQwfHnf5wgzRiHG6qfVrrZAHvL3yTkqLg5pEVZDE7kuReKDR3a",
  "key33": "j78Mwrf6Bz5xr1cDTUEMZ5gtKn23tiKXMRsZCKNysntMionN7xv4iEJHLQLuv32E4G1gy9P8eeAaVPv8ngZkLL1",
  "key34": "55LK3b44Ura2W2bqbt6HeBoQzyCZigbCQ5BfD6E7j4yk3HonGUqZS3SHGG64bywN7vK8JWAii9GAjgarRKuaF5F2",
  "key35": "A7tyuVnhFdmq2GQc5PbomY6Scy3NRNQrabZDWX1zYq8KChCDHK9M6R8m2CEEoDv8xwZZ8xonoCmEyqp5z2jkfUn",
  "key36": "3XYZ8euV1k75g3r4yhYdnzhKoDXZXZU4YigsKCcb1dtzfAzJ7LQf2WqmmbamNhndQQN4e43S6wUe18J6eddtpcZq",
  "key37": "3V9kFrQbX7ga6an2vb4GWW2GKb4wj6bRzbM9RR82yFnDVLqT1BJiMzepAxMhP3byX6rNmBobvsbN46J65btPrk6f"
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
