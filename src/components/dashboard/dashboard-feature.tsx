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
    "5CScpJm2YAkEqfz4x2qPzL6oQtroVkCAi4dvsvzPKs3k4AVMrW2nK1B7FE5eFjm4UHmAirKAfwjkU8iDWxovdLYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517niTveKKRGbEaSLmmWBKn6ZbSNT5HBTA7wsWBWzWehC8tBHMbDyFcMezTbFE95VxSd67shP5EWQNmt9kF3KfLo",
  "key1": "2go4SgQaiSqPP15AYBoi7KcoRF2LGgbTy7wphFhggStvWPT7UFBfN9Biok6k4DGXbykfZpx3hHazCrYEPEVMNBM7",
  "key2": "2hegjxf8rqWpaE2kjetkVobuDMxo1WYHmC6EpHTHneWcRzJyjfhQYNvB4xmemhFo8qHeEgSQj5tm5iNtuZYZkCBL",
  "key3": "62fG8ezkxxZCpyDic4eYMm2UbEAeKbYst4qwvmaEWcYpGRzDb6tMfN5hsEpcpYKwXe2THQuDsYj9qNJaUVp6wNoy",
  "key4": "5fLo4dykaFLRvGHvyq9DyH2w38eoYdjSodeRfC3BZKkoyXWW1UqjbREoU1jJSesT7mahUzQgCat9YZRyRfoccDKk",
  "key5": "dvXgNJbKPATStuCBoBTYURt5umysP36DW8apaK13t4ThH394kqqNVtKa2NFQtw39xh35UodJicjTiHT1mWuU5p3",
  "key6": "66oMJnTYM8yRPiTVY9G4A5jErf753WDFfegt9vnHL7U4nSDptaVifj2ig1WGrP7fApk9b5rqDR7p3aK2LC3Dn9qu",
  "key7": "49zwTtDtnP26dEFjewfcbxAhbTfPPeJrk2bj9rrZHmv9u3aZedKLcLxQDVPwyEgdD9m9pMA4wMDSzTZ6n5rYVwFq",
  "key8": "4eARkX77aibTwCKaQVL1A69VcpU9o8TbujJqDEy7y62GgTq2616YPxCFDGURPcbs25CG8bNQzJe4vusmpAomqGjv",
  "key9": "nGsTYNDmLRpoz4dgQD71MGEyjUhQ5fwhxgcbPcSqaubh5a8VLNmsai572qAnZDxQu2cJWki9uMkaJZfc8qvCCyq",
  "key10": "4PV6rS3kduAcmfgespwa5noucA8FQB74nFyv2tsMLzKkd49u4ezR8B6QDi1ryEGYQDSTn1puZK2xvnPrrvVWCrdV",
  "key11": "36xPvkybsMVhQfLUmyBczfmc7RWbkSdcF45jTU6ijZWNnyfK5h8xHz9QVqwCE8LRLKfiD9A4e2pCqrSHuqHy5pn3",
  "key12": "6QtDWDN7AApUj9Hx2r2XSRm7ab9b17z8CsaD11FS83HNHWZ8kT1FyyWmHbXjtGWiaU5WhAizkiBiaUB1FuJNkBG",
  "key13": "9Su9Pbtk4cz1vBiK57X8DkdKhwLqiRGkRJnDKXuyGNJEQMM6qtWpGcEsb6KH7aGqZHPVESL7PPX5Hxhfcs62ZR5",
  "key14": "4nzHNbES68i4SL7xecFcDA8Cn6nw6wqgC771LJDtnesYCU8ALBtYPCpaxKSN38Y3ePF2BXyGPEVNTAFxHDCiv1ii",
  "key15": "4CqZrMi8vukVqTMeVgaJCfk65iTnD9RxMFwaDPKF3KM9ERQ2eVH5Au7k4z7Ly9MSYTUcSKZ4o2n2sW5D1ThiMziN",
  "key16": "2cVQHNqDAqwokc3xTPdYYD1Kai7Jq6vPEUys8yHKHB13DjjnsVuBitMJMLda59vhXFADvvQV9g4eracwgXBMiBXj",
  "key17": "2Gb1upmHEtZwhKCD5ezVxfRZ5yHSKVSW3f432riVm3ZjSFi5GVe9An1Hf1CQvsmNwgSrhMVWnEZZkE9L5dUiA64A",
  "key18": "2KR3ofcvgTqydmGsy4qVfu41bMoqfVRs69kBwraDFa4SVSwULkL9jnb7WdGYa353BA6TUUpasRbZA6rTBVt5Hr5j",
  "key19": "5y2ifFKVUsLy9wRoRGHvcyANN33WjbDLfoSjwhsj4E2GNg8oZoKcppLgphQD3ixrtgEjQ2ZZicAYFUcRzRabwtGE",
  "key20": "4fBRH8GTJoUnuA4aCRVYegwwpEMh1s96aL5WRDzamvU4kDn4W2C55M6239H2yMHwvpoYTDVdQ51upVqzxkcCkf6n",
  "key21": "5ka37sVWd2va7myxEar1Kha9pbn4xfneKufJZpS7iR4USv2Zjt5N3D7MugdgteXMZxmB7UpiaHFttJ7wVDm5R8AS",
  "key22": "3kwx1LoA1Z7F9FaLEuVz1GbBzR2FEA1EwVCSRGjEDsbKZqqR47NKueDvgCevLKgKAMMYbnEVrkjiGSNtMXbYKuEm",
  "key23": "3rL3AX4ZUATjDSUM3nyhrcfTvDCDdpLRG5Mbtq9U269uPxDoEDXd31CoYK9oJtKeUAV7c3WJp4Fk8mgPFCpkDsTF",
  "key24": "3QJDiX899Ajf9UhvJ5YzVXxzTij8a8QtujPeALiP3ThwMgyGuxykYxkxRizoouezEgjzVKrsyxBMoBknSueT357J",
  "key25": "5i3k6hyRpqUBsPpuKAAHKdZcMrnXAGM7vensy7qQ3PiGs3Eachbx5qThFq1JfJ2YmixTMAev2RuBMETBMQrX3J9H",
  "key26": "5gydgz47zWeGuuo2SBkoSESBPbxfeC3mn7qoQA52eZsF7EUSj2VA4mUxfyoFc4CxbEBejfphwCAupBGz2P2QHz5s"
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
