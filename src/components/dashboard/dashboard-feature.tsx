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
    "4DriPCeC1qH4erjn7x15v4PyEuTE82wfyYAcBxRALgn9xW1iZL6tzpA8o1W8BG3TaMSz8kT6211sKWY5vsqGBMfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anLVdGQGv4dQm8Ec13briciFKEZGRtndiKTcJkB77pp4niftqJerCkE2oUfwzbpSTjgXEHyGGegcnjixrTYncHD",
  "key1": "46x7KAx2uURRjKEiY2Frpb3mZZDrDkv2mWVZY23yX9EN8qaqPARhTszwe2ax3pJfNL95JjKNHjQ5VRCbCSoCmkb2",
  "key2": "2Kvr2j3BSca2Jrybq3AwNL6obwd2RBKqzhaq8YrcYekPeUFT5hE4GpimozbxdmUTYjqsEBagKwTCNdsKWtZwcx7A",
  "key3": "2sbfF8ptb94ojwNaRrCWY4CgBG19QBvLaFEgeNnhQhQL5hNTpV2NX9HEXFLBT3EsERr4Sgd6V4p4YJJmCHfQwzjx",
  "key4": "44XXYn43xMnoyGcCNwqALyyYzbc1X7ULMXiGHcDSSjNJAAsvQmuKYJ9TNpegN6ekdgbd3Wsv2Fnq8fw8zh2aCqte",
  "key5": "2hkLEeGLTg3KsBMZi93tai3xWiePEfjkT2y6MvKkLaKzy5oRVb7s7LkF7bYWASxMJhnstEQLBnuimhmY3FVuf8LS",
  "key6": "2iQaL3GLJR44mZL9BwSU2U5JmagARPDomgEbmjhg2GV7qdTmBsbc8A6mnCYRhmQwde87kor97iQp37VJo7AwEzw5",
  "key7": "4D2UYWFQKBrJd4jH3JALg9W2PDUjTUXsvN3hLSmP23CiAnfNrvvRXuGJBmdxDRUGvJQquZDaR74vYz5C6EnpMe2b",
  "key8": "3CAPx5e1EChb6tPQMdaRdAqdR4Po9q68gVTSjSkHZDV1FRY8JDDBrQTj67D3jp3fbF5KeYcbc411JrJvZqJUA3H7",
  "key9": "5EtX3k6vw8ZHCv5wDzHbeWJs8vFxTaymnazrcTdQwKsmp8XUK73RsAgJMpcYSvhsLQzmGDsboB8y49zSmDTB7iA3",
  "key10": "2s5mCiYaHNLpVnGqCouQTwPHMYYeevaAQ9xX22tgswbzdknBE9A4VpUdpPWEuwx1EjcMPMYL68or2j6XUzKG71nP",
  "key11": "3MVHJLPnPqx5iTtbd4hezATfvG8iS6vVEK8sU5ruDsnM4gbrGk6BKcoZg2Vc73dCzaJoR5E7nwgct5DVvQykpQDL",
  "key12": "Sn8qRA2rfem4yeG2FmyakcQ7fCgSYVJ2o6dqXfLTMfUUdBMYBgKDmHix9EJ8uo4aqMrcV3MR316YrezCNgCDydL",
  "key13": "36HkZpRNmgprwkFSFhZK7yYTc342bPnK8WCdaX6E6Z8mgpGrBXSzxhHsCsMwtQR349fRtkQFcAkc2BGrQDB5qiah",
  "key14": "5YffBWUXZzNbonb6iCAEC4AtMiobrKm6BHB3mdvH3ifgZCSi3cXuvQDyctgmAwwbhjg1uPtrjCxcDDU948yD7HwC",
  "key15": "4J6t9fn948SoKqRnmvfkUqYg1oMwmAmxQxwqL2FRA5kUALiA597PfARXdLpE2XkEkofBqeWMQmbjz1kftKyP9dDP",
  "key16": "2yW6gvEH1C9THEzKaKhUx1tWXHUKyNsBgeGSKXRbDbVyJsD9o3UR69CvEpaFXnqCtba3cniLLcUR78RQgfV6XVr8",
  "key17": "2z7jfVTYrSBdKAxBYqMZDqZkrnpWTxqhGYrf5NiEBdNhSaCbwQWVpqWkCoMSpCa9J1w5tRWdZWrwEjiEENG7G1RQ",
  "key18": "5TKQuYox5k8PWNbChhiZV9djwXykL1n6GcTV3TBCVt3SoQpa24FbNwQM4tEcuaxPkwANAjf6cEwXYXESfy9zs78W",
  "key19": "GWr6yZyyNrGqyzf7bTyC71tRydNtN1FAmSBVLK73NGPdnW1J1wPvCvdjkj4ULWST3YnQexMwUAwGZ4PMF1LHLpb",
  "key20": "5YSR2r9HNWbnqnw3LFcPHXXRYcF3955YaKZC7bZnJvPxRDWZZShSrhxuiEnokcKfDEFHb3kAo5SgVvQsmtEFxLm8",
  "key21": "52BBJW376aJG7Eporvzu7JxutkLrXWqBoZxNcyYDGsZkrVHsPeZmpwiPzH9gC1QSXBXSgrQh8NhPMXC3PVd17zNk",
  "key22": "BwoGuK9WxxNDTmyUCxwc7JSNGLFJzg2FF2j7diwX7zeJzGbe5C9oWxr9jWnFmqAVBf4hKLTCXz1nTkWC1KSrkJ5",
  "key23": "4sF6s5qbaGye4QEERK6PHPaeYojJwFxQxFx887LY1mnagPAhmxVhV3sUF1cG5AZvtga3AqiffqSbPV1jB9WFdanM",
  "key24": "5X7aNG6MKGWYBmwPYZS8LPtc54uRc69aJtajr1QbJCAaEiMdYSDxcrzcRMCT2fVg7XVFETGVb78FHNd9usMeqhb8",
  "key25": "ryBjnjM5G4ZjK5ts18JAAHR6Wa6jKWCCC6wxdtEt4GQ7sG45SCA6B8bB7syVRPoTKdnrHimxVo8CdfVavwPSSN5",
  "key26": "3R3uxXLCSyknffjUnun9XPAEnmBwATvMAP33CRNZe4eePboUhMNCtrx2xaUaTBCXbvENWgMhiFQgjF58npYQzAbX",
  "key27": "2hkcx2oTtbVMjVVAaW7pPmsPG3LrrVzrN8puszDB3BdnoHbjghTiqTBWhF6rE2RQHjMHFgmPaUQMUcdWadoWEPSF",
  "key28": "2gNKBsqEyuo5J9u27YStMJQMzXNezC867uddtpHwCpStBqVSKZuJyt9FEGcDduMijfk5zGK12zNjV55pXv9njMy7",
  "key29": "4GjTukzkf3KKcpUuUPTgTyzyD5XZs4uw3PRS4e5WjSRNtihZsW26q5rEqynLzCSAmDviYToz67EKCbzSExHgTdHV",
  "key30": "57d4EKDUiDSvvsDHXvSRVACCgBBNF4DXRrKkLDqjxHcdwwBYDk934N8CXQRA2LxriC4K41mZ95rSnAPoBwsDFaX4",
  "key31": "4ruFhhZXTTaNgHkUZswD6HWVNRdBuKRBEwKezWJxF7bfJZejqpUzNvEN7tnwvK7uvYDbsx32HfTL48TPrMQZTpcD",
  "key32": "2jU9cNu3GTDPYChSa6UbKPnfuMS3buiRetvXCnnPY4m1kyq2m1LE3P8iUrLvZaM1o7AUfwdvWwyMJfzQMgpneaqn",
  "key33": "31Yq9v7GVuu12g9fiiqFEi66tw8z2DaLbVJGyedEQyserqhXuxrcPxEgsvSX6YS8gtpMte3z6cacr6jCgNNppxoP",
  "key34": "2a4et8LcXFUahca5yPtjcDC8UYuuvUnmmue1c6sD1G65AXSFQyTmaWaYSPPnPi925JyPzWvkx61yfLri42hHum7f",
  "key35": "5eBhquXMncCXPJhxWRxnpUfYfMqCqG5oVK6ReKGo9JN4yXWW1kyrY92ATejBKyzEEsSaBAvkBChoh4unAsnLnyo1",
  "key36": "3vufe9S1tmEQLpFWMZk9rmWocxPwZGMuMm67RepDgsDVoVj125ARgZ8whnaKoj6U1a3xr8QYh2KxoBuCLkX4ZMe2",
  "key37": "5i8f4ZSumPXAA6EWc1UcaBCXeSX7dpVyJWZwuokrQnfPiCcsgQbY6j8o75zh7nEhgExTNVb8hT8ZLc2ChT3WymuY"
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
