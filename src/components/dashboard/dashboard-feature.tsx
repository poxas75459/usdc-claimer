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
    "3p37QvsF3Eji5orYccBXnegALARkmUQfGqxV4QpxaaYr6fxaJMSL6XMLxiUdWoUTKTRCSGJGF4WyB51MfqQoNg2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WACbEyfK9SWdth9M5qGihAm5WpyrnHrcvyAdEFD3abXuZByQTJnxZN9ChHTUAcLWkidcECk87nF5U4AbKP4oZAi",
  "key1": "5JoncVQjexyLDM2jE5zcqJSMhP734RbrWHsTaezcEWwyJMgz7D5X8L3FetNrLFzW9LCcy6dg9Y4AnrtD6LGxMxdi",
  "key2": "FiBThh6vApsc2p5CC3oop4GRd4aM7c8n2Ncotm6DAKYdbtxZcKLqdCaoZvCuTkgfULS7HE6RRnCUwfjQ7ZE3AdJ",
  "key3": "2PTNM9KdApk8irs8njNKgrNSVRt428wQkH6RVGM57wQfCeLd2gNUbXwjzPrcHmVzw5ibrfbZRoXTsyA2yDXzYwRk",
  "key4": "3q1C1jrF3ivcwG81uuJVFQUe22wZuyrm7Fnd7t5KBAzK9kttRMnCCW45mAtt6CFmn1XtJRqG7MAwwe2SDAzJc3aQ",
  "key5": "3416bxJAL5DugMKVS1w8rJFV3iK3K7jpE5LFMy82vy9zDwDzodzDYo5UwDbGX3iqArD1CWseG7p86uP6PXJabBRa",
  "key6": "56eBtRWRtfH74h3HSC3FqoL3vSkNPtpGLDA9oo6fYaAQtWZLbA9tBnJASojrqJZHTSL2XrT5wPF65NwwbocZRXsi",
  "key7": "cJovDvMuR3wcd1mbJkqiYkv9xPqaXbu6za5LY7j7BpxsZKhDzpXP8GosPa5mJcs3r4TtEU2ywVNMktpTDAqZZDy",
  "key8": "65G272EJGKES6D5xecSNuwEP2ggDv5wFmdWUcWZqsP29RRKNgHw2tVDpvwioqRs7kvtLVjEQEC2d9mUJzxQJ2DaX",
  "key9": "4unfksPQCF5G5aVviinxaibFmvYRvmdVaFzPjsqpa6S5misCNGK4pAjiuMFsw7hCSjpLR7y13eTgGgcYxhBHwfe6",
  "key10": "2BHbDAyGMW96DNTVnnqSUXPyVCLiUvSrkyqXSQTXRWf2Zm88mS4E5juPpNcGQAcKfsTgdHTsTa8JoVzJptKC3nqg",
  "key11": "48jWYZwsC4F8ML99tPH2qzYh7fZSQ79UxBZU7AUMaabjNa11ucYnDd7As6JyNC6oCqN5bjSwpp5n7roNWzCo3ncj",
  "key12": "aZNaueDda64nv1jGCFjhLpvBydoAyA2M11ZT7W2VQVSQVY9y1SLGU9ZtpbPhXH5aqpTwJ3vrAHb2hBqQmk8Loq3",
  "key13": "3aN2b8oExHy9FH1TetnGwci2ronzqyjGk1CqacChXpqF3qwrHYtasjuQy4YaQhpxMpZd4y4NRJvTVGhreHBBDpWk",
  "key14": "cFUdkXM6CBxtHdHRzRKLH2CNbZbu46q8qrFSNkj46RN1PntWcJDerpALSLpXgwEqoDq147GnqmUsJhNterX5Hrk",
  "key15": "4dWtv55sPZbNjjbp41vJDjJSCT9S37Xe1gFgbK3AhcqyXbkavsXe5aTuekdPJuj9cPARnkZwaL7a2Y7U3WWUiqia",
  "key16": "5n71haXPZsSET7JitjKmxS35u8863gL3cZLCDCPVqLnQwYQpy1t9U7EbTJCAmvJ6v4omG3Wo5NS7VPfpvCnvKwz",
  "key17": "2sEbcJ9JdJkKd491ZYqWPCDowfsq5KPGyqkGutpSgP5SVxqMeEMVmU12GNDQGYdh3haRCQMkJVAAPXro5hoWcjxQ",
  "key18": "4wq79cWnoW5p9yWrkfwW1MUcTewRWufgr3bMA9mW1GMjeJenXYAVjxCkxY2itqDtije5R65FfqTabUuPvjcjdLM7",
  "key19": "269C82XzKRutSDG9zywbDEzALsmXdYRyZxRiXTBchkbWfagfG9Ra1wV6ffbTMUh5e3N9oAQyGkVkEH79XEkfgUVd",
  "key20": "5Lfqbn1zjYm9ktdLse1nfgLBSCdR4rzn1TKC9Rhwt5iDUyczB2sZRJNN1uydAfRwRKFHNmeDpo1Nz88eqf342s6D",
  "key21": "2XxkwypN3efeBcYkNvwZxj41WbPmGJxbiKACXnnx8C2Y5eeRFywKhd6CjuvkBCRwb9p9GgeyVUEksdsUSSr3NjHp",
  "key22": "2Tcerkozbc3Z7P3scQHzqdCQ5Zwzy9EcDTt2skLwGF9vin2Wd5DGkmN86NSeyUDyjASRStWJ1G4BbHSH8AN7eGzE",
  "key23": "4UXhNNYDC4Pev17hfH5QjyhFq1kTP8JQqK7r24FZea5oLwvHaJ9J6Hm6LhaSD1cnd3WTMAMuJUUEJuXMkhdeYrLR",
  "key24": "P41KQQfRmf7eutWkJnUii2artWgEDZ2FGxSNXHN7yw8PvFNskNqHezfSrrceiNEoVDcJw9zk5s4Eujk7qtNCr5P",
  "key25": "5RwQRxisyGPXzeZDuCrSLJczPErHQSWqWy4n4q29pU8gwvgSNhHMxrdQDXyod9sXMeqzJS24fJdJz56BEx2NaXFr",
  "key26": "4VhZBmc7mxhUYctWUREeK5k3FXFEmhvWy6nKDfvsnmVhxvmxFNJtEtrBTfCPrboPPEaq4KNvphW7WyVvMKP14PhC",
  "key27": "gsds91VXxEYA8nLeppZC6twmWyEKPJnY4aRWZNX72xcQanBWjPEuRxJtiEfmvg2seNt9AfYVuLeDDhuMEuGDoup",
  "key28": "3sEcUNe3jrpRSjR3MrMDpY2rkAVdoYhVc61S4VBybdaAb4PaDrzZHuxy1zs3Ujzs8uKBTVNGkZC2eNcmssQ4MYWU",
  "key29": "32YQ1oxMcPU1wVgLaHaXSBegdAGGoRzxatEb6dGrkQWXykvFCAKJfBr7PBrY2yhcxsJHYF7x1dQo6haggtQZjfNm",
  "key30": "HJNUZHMVzVaCoAjvjVWJxvAQwk5QvstsHm3TRc1S79i8cMu1t9RkyLjst2RqKu2DnaZRPsXbWyrKBSyhyuMfjn3",
  "key31": "4b3yv8VF6enox2AW8gmat49nTDSVKznoXUnxkKqQW8PwXonTmPg4vqBvMEecXFmT3rFMx1mjgRdwbaJ2P4ognYmM",
  "key32": "3vXA6Zon7wEFRFaYqmh5ixji1fLdmDbsdwhX9448EUF1caLQLwr5XrhPbj9bLxpF7XMXaJpQyf9eFPAAoPj393q4",
  "key33": "4pgBKMybkGBYvn7uHf9Di6XcKcZ3cP7XDa9VXC9TV3VWno9YPbt8YzvvYiT4WVHZuQfFug9Ey9WV4RHpTwoFeEVp",
  "key34": "2QA6YCjHMJuianVj3uh9e5q3vmayuyrsSUppSLvjq5j2vYnUFytCqqYjkbVzUnuDkyhUVUfmJwitnwPzRYuACrXM",
  "key35": "5zDNAtELEZ7jp1tccyWMjbziK3Ss8cYDk7s1Rrih7AP8R2yZWCq2tXpcPEMAwhR94akoeLEkGrs4ccD1eAT1pKbF",
  "key36": "3nHv6ojuSt7mAXnb6MPnTPNGhYsgAqRsBULqAzGZiH7LPQ8h6aBPnMWmV2hJQCj54r12brCrjhr78VX469NyeUiB",
  "key37": "4gTi6sfhbmQhB4MWwiegwx5xqAyPt1kw63vFrp3miidf84rYaiWV9a12wqjNVip9GREWWbNguuwDrgBy8yBvqPQB",
  "key38": "vuAAKSCvzxS2ykJdhEKgL6b3JYnrdn2sanw7UrxAwA47oFZpf2uWFCweSJrE5xpVBYqSxvpeGEDBkQErHKesypn",
  "key39": "3ekojXnN7au7Sf43pMBrDuKKM6pViaQPSDmYFiLBSevV4hLCxp7p7zuc4NcnhXHwbNn44ypp9sxjVVVNQxsqXxUP",
  "key40": "4i4WFkN78GAfFbYzp9q3j3nYS1tLpGrFoQu1Bo9UDBRkZ8pRu6vJxVL3xNBcZnVq3fW9hvVDVcHHeQdLcR1TSZJR",
  "key41": "45An8DLjHLeHwqVdk5kvUynghbpvMRPCpotWAtZovPovbhytiJPKzKS7opEwyKXsmiJvEscLE45kWUGNNkXCS8Qt",
  "key42": "3DEcdEYGW6Bw9m7gdQ5NRbRwsBCPnPta5tfFL6MT21885cnYTGzbNe1eA4qDUqTABgEpsDrKnE6eD8kp5UEJmE6V",
  "key43": "3bhAP9UL4Hy7eNZcL8LXPmcv5ZwTHj2etARb3fJf3hRiUUTouRoLSKtror23wFb9C3tSGcTtPuYFCcR51XKZGUW5"
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
