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
    "Wb6MayhPtRQG97Mp2atTu63BAoSt3Z2ByTQotNQZ9ndDh2BeaLf9MsBvEVNNDfDN9EwniVzeHGNqkJPQSbFQPvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5Ez4uVrpJ62DToC2i12JDTXEWmkgs2AiYzAwx7gZ4yFvo3WTSoqAosEGn26rd5zN3sG47pw3p676aUJx9ykijd",
  "key1": "tq2re4xtMsfCLQDrU9SGjqmVif4ZZ8syqfC3JrcQRu99BecW4No1Vt9KuCL63KVyBYrStcFVTh3HfWwL7G6zRmu",
  "key2": "4pW1hGrzrZphKhqNtosnMgSPCFbrg4BP13oiGpbPmevkjyNhqSbpeAQUNK7zyfW5EHCTAewQSausURxC8metNbEf",
  "key3": "483ssgF3VFBMv3HB4fHVxbzfNX5W7Zkfz5c5gAjkicHpBoEuRTFck4YnirUNMMX6614ZFHBBP8mEh6S1BpfWzLUz",
  "key4": "3g9r1opxdJ3PvKc5VqycTtM1Kx9BkFxYJqbSD4PzkGsj9RxYt1K3NVL5dMAdRrMNab21zUDm6mR7fSyQut3S2Lgu",
  "key5": "3Qk5if68hPbFdGY4Fhy85HiFruBWJnHR6AxTHdTfKuwfr5nkHQ58nXNyCHwsWErMTN3Jri5FEYbe49jd8sMd55Zm",
  "key6": "5kFQe5ueR37xFqNY1JfeE1m2FYh9wBSP5H8ziqrikhTWQaXaDA52ArtqX92JJVb69CajoXYEmyUsSedk6xvHiLSg",
  "key7": "66egfi6u7Js4VNKqxaJftZTDyHMGiDdouRX4Pwhp6XqyBoie8MmvwnSYKkgopnnA767qjzcANoy8soDukZrKey6m",
  "key8": "3kfYuQgtW57fXT58eqLbMnUApgMA86xek7wXNLMrYi7KEyJdkCmEKHWEvV4SCovNbegVWGtAmJWej3boJZFGHu9n",
  "key9": "5QA9g5FfEvoKqebKXavvn28uC3aUT5zqPQTwSU854WHLBHEA4ydcdimHD8QCDz1mLCKNnenQHQfUSNrKvtYkAqnc",
  "key10": "QEfYdKnJyU3yyzCCLtg9hWnxDshfeBxkHjdYzMRDTaUpKDPgNqoMzpjFtMCLESRud3Kb1M4BSWzRpfNMrzTBZ2R",
  "key11": "4ze1Ezj23Fx2cgWaCFmNc1GW2hyJGLPhSBc4DwLoBNN1hDooLhnNW9bF91qQ4gpfhruonrrVZYVWph4KDJxEVjg5",
  "key12": "94APNnF81Qy6k5LYEdvN8iGBwkPNZjt155JqPYsVYD1w4tabkeMDjw3GMcKrWLxBF4NV82BRuybkJQbuLPJpx93",
  "key13": "4mpLh2WxsQR3aPuSEqVEACn2XTyE1JLMUern9VuzQps3jKUedfTC7g3wp8RP4eN4X54gBJWkdzfyY15nG1usEx7d",
  "key14": "4Ay7oRZhea1NmY4LSCT1XJL8YavupcsLADaLSv57f4MfHqMuUntn7JjXkWXmQ4PNYzmk4FcPDWhBhNv9AeGG1Goy",
  "key15": "3PULNicsUh6YeP3kPvS6phr4xLDmTK84ASaSNa9yQU4fkybfFiYsnLn8iGThnevrAm7zwMJ2iKYYAsXNYaRzgBWB",
  "key16": "5WFiKEyhJHfBhPTsZ8QQEwZHbUvpivY1KiJZP5hXRE6AsjU1xtkfjJwcstBhNRXRM3u6bFpZKpa7ryFx9dTgiMaE",
  "key17": "3WX41sBwTTUNY13XjDuugDbh7ZpD9gVxExGq2ptuVu2pt9UnSqXgh6MjPGCyBWTUt2xLLMHYhg1W6sb6oQykFAQj",
  "key18": "3Vknb3cYqoiSyCyJ3bx3cNMgkAePWpEywLG4CHAUevLBigVGJwPHtoj5JsiyJbNp8jquRdySr4ok31JmcioRqcUe",
  "key19": "3UsKQ899Qw6nrC7HxjXhq5A45U21MHUuftLHcpLUA7VmGUgPK8XY2zgvPJ61npFZaqC8yutv6SjmwA6YUqfwJE6w",
  "key20": "66qtB5hd9LNhnZiP2V9mh1SydNj1yBPp7jsrdc1qLy7VNqf8NXxnWHMVHm3s4uTVpG5oUuxjtFvmv52VxQa7vU1V",
  "key21": "jH8UmmvCVk5jKS7XPThScKkgbsLMM1FfgXDR2KfpEfSqnxB4XxWzfZz5EXEqMJMgTcvKidHK67tZWtMqifdsn4o",
  "key22": "5PwqmyhnGgBLLe859MdoFeyncwQE3DmeszAEknGoVprRvP4ELJR5Xxd6iL2oaBtCq48B8qRaG57QSeKHk9Z3r1yh",
  "key23": "2SRZXSToyq9PVP8suyofv9q3h2nycQxLx1xzyniLroF5sY4XpZqjVzGNckLegcdqpLnbKqTn4WzhyT6Rbz2wmsQG",
  "key24": "539NVL7XHrf6zWEoQQ49TuVV3WGkYFSLd6eptagZZZVXLTP3sioj7sud6AV9brWg7dZmaAQb1kNRNVppdZHmqset",
  "key25": "3svdaXwWQhdB96xQreB4ijaTHQdEGoKDoK4wZWCCSc1VdqE7Q6rgwcnM92dAn9zMoczj5jf5sAFbphmUArFj8nhN",
  "key26": "2E41Dy6xiZDRnJvtUAU8YB8MMFqu4at2UdWuC2ShQRCnKGpwXm28xJkJBew4a8PiD1boLgkoRLiW8r2EcN5FAioF",
  "key27": "3EKyuyK2goLenBzdAi3n5hJBURcJHtz6B9yhNVJaJZz4mSLRM76jkeLDHuRrx9643Dd5J1oDHFLeC62oDXEyC9tJ",
  "key28": "21drMBeNcdtoTDYz8eyQR1s22ezgrfwB9hiyNsD3TYE33aDa4EPh7zDH8UtH1mP76WzRUTNvVUxH9wzxSxaQYooe",
  "key29": "2rmLvtXTQBvCTV8khBBkmeSKgv2tWCgXqLsWVmQphSYTvcDgWGEE3q3aMk9wpX2fhbJ5cmo3f9vd5rpvNHtVZLjd",
  "key30": "2LGmfgqjbGDAcKnAoeGET8KpKqBBBMNquoELr2iotjaZkZ6yHfzZWxaPjwiUEKxQkEAz3mCH6MTjy6r9cJNY3bVF"
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
