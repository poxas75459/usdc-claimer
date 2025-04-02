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
    "5SpMNZV3o9Qrz5hzR32jb93r5nc17NHzAG6ng4YjbstsTUdHVjyaWLL2mS3kH8U9s4HvaNuEXLbEJLhRt3S3jHDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpcWZaUkJnNzMaj2HJy7NCiezWntnkW32ZkZYPhoLbkpQTWQvWPNyAHj3tsLCrzYspp4HhtmV6UPbao5DriDV8N",
  "key1": "5exZbH1ghKst1iiR6DcPa3FvN3Hr5tV4Vo3wuS5kG4RKp1iv98CE2JXbA1CGn6DW9WV4RKTBE7QCfoMS554TmVWs",
  "key2": "3ThwRux166U1N1WoFY3HQg9pHgdztwjdfp1CanK68qiHoVvKFjdqeDuvuEUSAAjQXvWKpVwr9SBq3fK9S7gUeaAn",
  "key3": "2GdNKmFXVXZnieXgJkRg1JdvtBosBfjQu2CHxef7Ba5kVCvP2y67XqR7KAktZknuQ3JhYFtw3n8gdRa5cPdpxdFx",
  "key4": "5t1yerb2kRsbaWQHUXHrwiDAdL2nAz975eVR3rW9qFhS17EUTPbz15DC6LpjFRo8D2V6uqmY53ysQLjDykKvUvNR",
  "key5": "5HHfHdXUFev9bEvxzjwaWt6b3SZY3MeKkmBEV2vj7kriDJ35SdSbuD2EKsLhRbN78WPRcA6RwCHWStr8CkQKTUYP",
  "key6": "G5geRwgcQdG8rn332uS4nBAB6PTgaQJSee81F5E4LqFeSgGa2pRDaJiU2DQdM6SjQaCReMczgrFyHq5nmtGKeCd",
  "key7": "LX9um2AidTw8tEmV13ZvdyDWayZwqz9pevXEaLAkEQnU9rHaNS1MaYSVrkkP3k3rpV3NgAzAG7WAafJWCDMXn16",
  "key8": "4CknwP6scCdCvh7JBHpQSiGWk3NWRcGiiaKGKC7MSRw3pfozKKedQds3x3X5axHVEnnfBeTE8WuNHULwJkcWth82",
  "key9": "cAaH7ATCCUFiqxbNifAq1oCNPEEMhdei2z5HKB4oemTtr1EQAsiAQYczLnF2S4PbbuA4MfrTdQVBpaBK5CFFMBi",
  "key10": "Dr4VPQNYs2M1ezAxKABS2hm6Q6VgR5MrepuQtwMVEuBq1zXh4jXRvXBwSp5CG4XSK3zcsohEVRxTxWeArqEK8AK",
  "key11": "Gfqshhar8rEzG6Kkg2zd7798jkLg6ZE5X6pp215sid2JhPxonJVk7zxgRnE14rhPcDdyaKJbK7Wvh9RuW8rpWhP",
  "key12": "4fRxaoGF2wMQg7CkUqCimeE11fVMJYDC6koBt1crAnCM39N6VMs8nCXZHHgi89NrzKyhrB4YbhfLP4Lkwk436Kk1",
  "key13": "2XY6rnrCA8UUqEhdLjAKg9XjxBug4j19Xwcgs9Efdod3QWg2h1kNytyeudvjGYVxWhG6ghXjrmTzwnAhxGZ19YTs",
  "key14": "4P43zb4YtqPyXotQt3KP9ZjKKKa7TeBmdenwNrejvxWHFaUr3NU9TWR7YJcqfhLiiw3WGuffkaaiWMXZMJSw36zz",
  "key15": "4S4ideDMyAzPJ9imCAx2nJ4Ae56XaKz3rBTqxnxkZ7t9k2stmi6FJGu1geK5bfATL6dVtUjHfwhhu44hhsJiSwfm",
  "key16": "29r7ytxM8ZNhGbe7LASVRaC1gf9Use1FzUrasMt89gQUBDENbFr1pv8mpBCx3wF6oj4meExWV4gVtayGyNrcC3uW",
  "key17": "2x8sRZg2sii6CxEUfSo2ctoHbzhShiFQqxZiAyfABhpgwyNGsb7nc6KVHEgo22YR66RcF9Ngkzi8Mdu9qu4Sxbjr",
  "key18": "4NMJ7ZXqL9QPVBaDvMFnPisFCV9gMyKxpytHGQ6sUj4MQ4RGZ6HtmsUGNyzJsy21rtPPn2PUJ4N2hpJzQ35m4xDU",
  "key19": "67EZhYHz9ePfTbrXnTYH8J8PbaHFsBzbvMUJmyH8AtprHcwZfUbWCQqqeEcwBk91N5KCbCB1v4hTVMSKdKgAY5X7",
  "key20": "4vDQqgz2VoxMhELze53PaQrC6zh7oQRKHi32ApB3f2PapUsXAc7JkHsFYrYie6p2Ve4eUB2oEJY4o9yjdpY5mL1c",
  "key21": "45qEXiQQf1FTfoV38YtasKAtfqgwfD8K5e7NjqNwHLCpWr7Nz6TMY4DoKGtvtJCkYpEYntF9TXJ8wZM8E9mERdWy",
  "key22": "2BcdkpafTrrQDSE42tPkip5FdvrwXtVj78E3YusJMQREe2wmFS95ki7kbKgCUqW1gjjci6jxcbzKLByUe3SMwd2f",
  "key23": "3kiMW5CnS23o5qT6JP5S8QnocmAsBdC6WyZVkBBYH5dwvKsPdFKL5tUVDsk8kiZZQRcFQmq7hJyjcwoDUbsP9tNs",
  "key24": "3h2SYpDJekXJMY3hPx42kCst2JyfH492eWHT5gqWxX9va5DTWFhZg7R62qvpH8nF5NevjjRTHV6VmPEBrsEbPwkz",
  "key25": "4MV1cTYC8SPRii965AQpbtPdW1oo6yL4MWXw1oRGHvV2zVLVV7HxAYaZyS2qaejh9LQXyM6naeAbnRZjgRUGhScA",
  "key26": "3M5q7DK54XUd2fapKpxrHYGeow1niZkFRVRWSyGdSoLLAgXRoyFD8dtub6r3gmgfWWzTFsLGfEGHL5Ktrcxzkscx",
  "key27": "t5Pnik1ipCLLrguUdwKJUrakoQ6uQZD6h6u3ZzvuT5BBAqrWqm9K84xgnH5afNNz8bxfwk6h9VDacny6A7ZHnUv",
  "key28": "4kETdcSpWGtFbGRAvUZC7n7tJwUnVYbBC8KLgKxnN1aoDzuMn4bq5ugy4qjXa6XpP3hZpSA2fmsfxP6i97SzHYgV",
  "key29": "3GN4SxD3PqvZs9J7NUAm4LBrV17fiFFRHKtf7LJstPh1FxHaV4GATXKjX7E2jaApUq9RnQNkDzSzVCSH6JsEyfRN",
  "key30": "5gkADWtwhnCMCDrTAptNpYVKJC43UFoCheHH8ddeWcMGdNTJg3wwWueZFUPVxN3C2GAkhtLEwSJqac9Z3wbqaxXJ",
  "key31": "3F7V46bajhNAxg85WiBybKEpHiBC1zMfEszbhDHiur1oApu5qM4ePPwuXYyMqKhDcpSnMTdjbuz96JanMUuEJEsf",
  "key32": "3zfcxE8korPb1Wfz2QuP4tzQYX3cLAmQFggSm8FXhFc5Z9zwuY8VQux2gBcvz6nZWgfkKu3R13RGiRjNLNTvVUoK",
  "key33": "3fFKLrCbeJKch4U68TZD2u1gJ9v6pj5a43daZHiwSeC3QXDLuVXpDwDsAVsoeYUte9oH5pJgm7xP5Yd7nBQARibn",
  "key34": "5QaWc5W8hP8MgA6Sf1zdARGpVR7qc1mHRxS2stzcLxg12qj9u3qzZnUBa3CK29hpX7WuLX3CDkPAKxnQ87ZsDnSH",
  "key35": "2sYTBxKyboMvRjTUZ2fyVaFXV2Vr4yYtYAgfzrv9Z3YRCt7YpivinxRfaipJsVz5gXU8JEDq444Ruozi1okzuzqH",
  "key36": "5BchcwzsnntVvhbUzBt9qKNBMPU1yQn5iBVZXZqpiNnpDsBnpRvGFqgj4gSkFHGabuSsmash2wLzkfmTFMvCaFsa"
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
