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
    "64YfNsDoewrdpiDxr9FkvzCiQyUYMPjKr2SmoZxsxdJfgmbF1RYf7sDQX8jBQcp6TXfFVmSUZoMkc2wjjARrskXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dDejPHBCgw7fAVFxsRnMyPMs4p9LgH8aMmQukbdWbBkbWcpkdkxnh61K9gfBszdbQrMa4BuFKwcyprbNhFtXkkE",
  "key1": "39mdCGLJCis438rjzaDaxY9jnSQs89EhxkoNEM8g2HpFdbKdmJQPzLxTGc9ZfDPRxo9FE4gbFNHFxjB9cK8SEp7T",
  "key2": "2UcGoxeTWt666ybAesDUi4TPCU88tw71rNnradyNnAJNQe1AhHmqKR9mhnKn4Pduff7oBd4dCWJEeekNNsT6tyNY",
  "key3": "39K8VUMpFmQsv9kcpSxRdQAYu9RUv29iT65WqJCjQqgC6GKpsfjAPv3nxaxKBvENp8KHMqtRqdDMDrmLymDtAwu5",
  "key4": "XN3KYCp8aTW2zsQfttvCJp3rR4gM8GEzJYB4RkPS6Qke5f26nN31r9CHCe7qXGctH9bQHw7h1DSY634HaP7zNd1",
  "key5": "5YzgLvWBhWQzRxL8GaNpTruEoDTodhnN3AkmnoPT5w8fR9Li7DWaeyttFH1cBmt3NhwLr2G6BtLxbG6bXSxn56Ri",
  "key6": "5TgteL82PBU6NuHeStPQJJne3mmrV9g74tTS1UH4PHZ3uzwigPwoRj9ySEp3hDua45iPmtosUzzjisJDYYwae29T",
  "key7": "55HJ61f245fxETjF4dRXEDnaZgnLdaHzvY9gHY6YFtLGaQMaPZe9SCG8svwbZ7FKMPr7erNadoBNksPtivUgPyBD",
  "key8": "5M73Lrb3ap9JHjFujLy5ji5t3qxz8YiFg8dn4GLf2VgJccbxpcPhMYAojfot6cep9w45CBswVL6X8bXkPer71CWx",
  "key9": "5ZQ3nAsYiSvjiXuEw98aMSEbmMp757GECz88me1FYjDbtMcHMuEtm5FywYBrQVK62qvJgGXcTEjcVNgzBysQR4Yc",
  "key10": "dqQUnPsfv41MvEpvPxEzT52UKHabQuMvt6XAVi2mMAAerHgVgnxaXnxvy4xVjQoqSB8qi7JR79XJ2NJY2ipWsWS",
  "key11": "4cgkPHDTm1fGqV91WFpwTpx32inNsMKA5S6LuNtTQZLmy7n48qgT1ahTD7J3Ph2nL67eqYqpbr928rFpxT7JrcLN",
  "key12": "5FBHEoHWAXoSJmvEmZ59R5puYUGSQT8qEqJ2LWzRXMUAXGHG3oWHcuMH79Jnp38oPYgTbjikwyPHt1M9RiitPbE5",
  "key13": "4Mbou9KJGHuWtPNkTtoMAQARQpBbgfVZyCs2W535zXiYrHbfbqGzD7LHXbVLvtTpfwpuQfwvUYHaStJicHdR2Sq7",
  "key14": "2RXFSW5gSHcZPLmpdQGYVzTSvVBuz5X5ozCXLAXNmWMC7Wa4pvH9Hygnpd74D1Znc2WZY7SAAzFBEK39hhYznYTY",
  "key15": "22E2GPJdXwi72g3LrFpxjcBAwbgTEt9n16zUgVyNb7ANEiiXEqqqffYBp1kjHoJzuF1dHqPwAeZ796iHdUPn28LC",
  "key16": "3kEFsahDgEqPhCwX4Zz2nYqzcBjtNUYAUjhUNtnYQzBsfpTyMURJdnRL5KgNpBW4itwVnBpoBCF22UBZBjSaHo3b",
  "key17": "3kG7gQQTDWdNsWSsbUXLgRtvZthTaVxP9d56kMFvceoXwuZNsnxCjR3RX4ytxSxUg5F36q1BLCaxismTcobzZt6N",
  "key18": "3o7nqsP6Skerr5dBYvgLmBLEy1zDiFuwaL3W37ffxKdcpCmF31fejHFGhu4hAgTaDVPSb7C6sC6GYiSKkQT5MSXn",
  "key19": "3EWuPN7R3gr33569Yv5esx9kRnnzSuhbGFp1J3TixPfA69pPJ8y3BZngDQ42MpRf2gSab9qdD1kz2QVDc51RD5WF",
  "key20": "WAHkskZ2UDSbB439rvJCCMjQS7qEMpnuc8hoJU86x5gP86ddseZSvsMG1VEBnkbdF6hy4NTbfRNpwz9vbnT8Y9X",
  "key21": "5jL7eGPEmDTkTZrw3aajJkFdzKHYHmHh4yeENwCZEkxFddpFC1rrniZHwVbQyKYQUdYvDCJCGLwid31BKMauGR8W",
  "key22": "3FGLwbjkBNVCAbeU8Y1bBKKMmoZPuoUeVkqFhwPhSqdVLvbkHFciBxMQ1P7qshT5M7uzDDwu7HeoKcjvx8hM2CQ9",
  "key23": "31oUnUKqhh563Pc1zDS7FNG3dxKdi5GhGhHz6XURorJYZqP72vbAoi835KkCWc6obM5Zaw3tYWCct93oT57o3rmX",
  "key24": "58gDQo8o5MJGHBcSjwn3rsaQW5ujpn1kJn1VzBKuoYrc59hhLzsbxHdMFBxuppdc7Sta6HbErwhgo6EW7sZioa1o",
  "key25": "vxQUWP7os1tPBzMDokiiDqb7tfohPfLmTdeXhwUNUJMPeNDSKR3L828bp5CBEZwXKJqU8afxR5i9tAghiNjcfJw",
  "key26": "37eJygJAYLispmZaWeUmkDZamm7oqKgrxFWhR4ATFpT4xizSaV8iPXUQbGv5jseya4FJ4edmY3zSj1iRNZ1FGhme",
  "key27": "2G3kWBgTHn2q2eTSFkibgzChCWU1QatDUAF67vG8RCnLhgsmxi7TwsnHw51UxZCwoR8pmmdpPZyJTeTfttfMBoth",
  "key28": "55QpLojm7rfQTCndJxtsiYWUyUbuASf4GLed5hV75YYcnqqBkWuXv3PKDGFVM6niPuCHTXPKeK9JSWjWNkHSpj9n"
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
