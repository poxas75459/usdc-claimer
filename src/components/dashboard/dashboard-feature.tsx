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
    "264MzMqviv2Krv9kkXsQmUCJ3wuSmWcatvSXjcHvPdcyhmn8FWHasn3aqYF1DPrxvkQX5WdkAEkZTyNwzf8idcWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rzDQiaa4tqWbJTc1sAm9ozrfCxzB6GSMY9uAPXdWwAywv9SJSBSnwXXrdh9AhqueRh7XFyVCd4jr4EAyjLiYduc",
  "key1": "izRnbdsY8zkj12YowcFxS6wcW7HnwYd5XJbx7Sr2ypyGsVwt1PdqCg8GAS5kDMA7df9C2skZ22VJNRTFX3SFVae",
  "key2": "bKtge1FqS82ufmEkhuY8Lpsg9bq1DT9PM7bUdmfWoT6JffjddeLTKEXjwicJDm2crZ9jG9YL2VQRurzypY6z1RW",
  "key3": "3t1mj3fkQf4QUZxxLQUxxAogBmxQUWaFGQSZT5xrjPctgFHKU9EUHkusvrb6LtymCG8KtdABqkxgyPkoxtNEmQTg",
  "key4": "2rjbvNvnjaL7bAQwFo5vCLa2mY8UDR5JsP6f5QUXjokgsWYGQ7C3AF6jcKGvD6M8vjh5oFiTSoaogcweGUtWXNHs",
  "key5": "2uMdBJrQ25JBRW8JeVeErPFSdCU55JPgPkrsBK3moYpSw2JdyZek15pPubtv6o4SCPP5iRjAtEjtsYW3ZePDMFmw",
  "key6": "4awtbjcJMmPWEcRRaVwSRrv72AbRkDrt4eqAdVK8CuG88tutsTwAbXjjvkibtruEw47dBJfwQqwoxdaoiTzdb6si",
  "key7": "2rPjdjXGcBsarJMsxVJuBTrMViic3oMQojjV5pozo7KhANoUnuoYQFP5iyPLzovCdu4eg4WLzWNpRDagUSCgFoVf",
  "key8": "5ABn84PLFAcwGG49WxjuruqnB3ogvNta1y3C9T5bxPg4BuBZ5nd89tTtYjTX3ZVPRzFBJi1F7dnQxXQkpC6CwGuX",
  "key9": "57kYTkpzkBphFYfKtVBv3j7eKAb87V6d24BPx32EB4Gywq8hDy4pSu2XZHzyrAKWJZFapexkfy2FFTRuyeGe7rMG",
  "key10": "5P4RsxSyVcRoNWqUEg81DfaAtr484Ywn7gAcPXLAKFUVGt9abJ1fRK4US9Hikn9E8AsLPe4Qic8SRibSV2ZQajqH",
  "key11": "4MFoaSVVrzfS8M2QfB3ygzTKCX376Ep3p7X6gQhau3BGziPpvtnTYpiiz9pTn7gGNT66Q9LgDrqVep5CK4Spa7oQ",
  "key12": "2zeFP5rmEPfLdRasQR4xvCHfUr8W7Z8BV1AyzA76ZfJEZNhCqyXSurRYRTfdGTCcdr7SCvzEX3jMEwEzhsXraBzk",
  "key13": "4QemJDxc7kYDu9c8p2e15WiPdG3DtvnPfmWjPYmKfxzErN9bcXRMAp4NbB2eT5trqYdnfkSTrfdGfkPuvearBeYX",
  "key14": "RFr3coST69iRwkFyTFuNzAQojDSsN6ojK7dANkMXhKLpSpobsPFUs1Pb8TXwd7VDoEYbcx5mkhaVWC6VKUerWLm",
  "key15": "4iSqoP4cJVcHoHsvZ6K8KwtMQTbvBhXzCnb5ao2jomtDQQ6Gr8vUnSPacb78v3BzBZLS8fspyaZrBNfbtg2E8292",
  "key16": "2kjxENMWWNaLDo42tsfFYZ6SoVHPsQK1KYAhA1KjuTJ5Uko2KtfFJfT2ABWrrswhPwwXL7qG4KPgHrNDjwgqA1Cu",
  "key17": "2j6REzpnSi4j5AkrSragP2JK8TmmQg9f8Q4M6RGFYQmnZ7LPSfPP8D3viEfA1Bgd9rwVe6ane6dikoKYwykzoFSm",
  "key18": "5LWncCtcTgLTehq2j5FQinrgPzfnGmiNqTmebNCHqEsE9f5wzwbmY3fsxK8mGN6LCCWdU9bpbbkq1Ud7JK7h7J1C",
  "key19": "52RyMouhtZEQ89v7PAY8XXg2xdEDkVGtwRMAJ9QeT4kpNdvpDz49zFWRk7r5txD3RdRieeRTxbrauKs29rFpx6Eb",
  "key20": "wm6UUGaFc6zbNs5iQ4Bjh5DJ99hxUP5P6x8N1U543Syc9dvw4qp3eYpb3S2zFqF1PVaRyKnestTdNKvNaVU1Dyv",
  "key21": "MddkVUr46rpi4nQPzK3voQkJ9zJf8D9n8ycnLAdhomoeVavuuukj9L3oMPkeqS1V8pTJGwBJ35sXm2Lhc3kJkX2",
  "key22": "3WwRGCH7Bh7wvjz9LfKLo8wf1LF9xDmh4aeynDYmfUf7p3Ps6TtXGKyt5yTABkxZfFaBT4YZmGXVtQWXwJmK5bbD",
  "key23": "2rCw3vFXmp3dHhmZnU8t8ynqk1cE8eDe1hYUJRZjqfcki2oJFggCP8zmDK19Daz4Cu1fTG2TgmyqwY4hX7fdU5BL",
  "key24": "576Q19ZiNu8V2HF7FdPjsn82vh41UDN7waGb9V3YhDbHDbfp8g3YjU3YD3jj7xwairZ5wfjWRRZjNizPbNitJuyX",
  "key25": "5AKLuMYkT5y4Rgctntksm5D2hP3D7FWvvPQBDFtsWXcxVwFprmeu21JkD3K6LAAn4gh91yywHDkNVeuEE5iqwYeM",
  "key26": "67d8Cahez3Xu4TQLRWofFTe51jbn5gqr8hyhNMFkbtsKa6BCo3CySZz6pamD3hQ1iDnwkvQxXtbzkwa3ZpcecK5W",
  "key27": "3Jn8KmsbSfxBwmMyC81smKgou7Et3GFFrdXVsvFmqCx2ZANREGq4qZQWhEKi3SjcJB5bHxB8PzRW48k2hgj5p8DX",
  "key28": "3o7h3KTMUZF6RQtcGWLVfHCX22yBssMyN3DasbMQ8443NMgsNH7kxtzw8X2gBnrXGdPuwNwt7Axyp2VxeAsUbEkL"
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
