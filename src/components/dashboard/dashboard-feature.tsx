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
    "Qfb66hM2y3Dk36hjyw5GbxLdmaUkRNvS5SBV2trkDPMmPAEAx7obE2H48NTmnovCufw4mb9BfLSJ3AVmCaYsqLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7zWmvF9fB5vDBvK82qKPLhV69wgWZX5onnsi2Kz6e8HvxevEATh8U5PiNAn3HLkML48TC2q5RfZbxz7VSpihMX",
  "key1": "3mQ9F3bbYLALA5AH3VSDhqLbuvYot87xFNMfsirGArwXBjmC7U9R7nLxfvyT88Bfn8Y9upDAg5TKw3dkWmr5LUCL",
  "key2": "3HTZ2st7KPHaDLsgVLGWyUVu8ZHDVMzoxbAnL9TP8wwKkPRHhDSFCgRHxYZNWDztHxhyEEnUnh3wwFvgtpKN4JLa",
  "key3": "4Y6JXGHoX6YAWdyiwSCgAC6mFfdAroirL8jjZiakpt9rGuS2TCbPMfmppSnDrB8tYKPnFssy7y75RUAzgCUxNnBx",
  "key4": "28jjy9YcKSyRz3jNb4BAVH5oZTgGUh1YTv6hWidiCyFkdV2rh5xiyxxLwRybPDE1BmmhJHcPRjwyWgWCRpQDV5K5",
  "key5": "5hToMJn2ANfK6EmpyV5HMVuyBer1RjureTgaY3UxdDpRcyP1pJnK9joDUMCeqf9zRAxHYi4vZRHVZMB6Ec9uLoto",
  "key6": "4fw8sekD9DpHGytmg8FMArvhSjh4qJsxh5wCAmnt8Ru83WxZQBzJRgNsXcjGVyHRSZ5y1PQ6ZYHaLohr1W8XfeKq",
  "key7": "3FXzxQQpEFfsSy5NEcGYRGFN9geV45q8faZd67MXpiBzY6cCWGizdrvXYcZycwkiE7RMAwM1dpZ5XySD9y59dMAD",
  "key8": "YzPzevucMY3wXwA7vyvoJuREE7TuBmV8cxVSWzfmeVXyitWXV9L8mgenas6BJMM9NBK9ohx3Co9xsnEA28FsuQ8",
  "key9": "49FkDdZjreVk7EuTGvGXcRyAbpfq8pmKZupiVcqhon4G6wbhWkYuUwi8wJsisG5TMS5VBeEY7FYbPH1JnqbkLtCu",
  "key10": "tFhV1kctmStSjvwsTkqgAK8gF7hJKM4AKUEd4jUcPRnbh4yFN3Rw7UQFuhREQqpp2GmmyQVzsvnZxHiDUvHU5LZ",
  "key11": "2YqUFCwwpeqBmxLETULFFx3s4Q4jGNJLdUjxKsoSTDowWybbTRNcsjwmVQM2yu1hsGgMnkAVRmbwkoWrght5BZb4",
  "key12": "39bumwV5oTHLwUNpxVELwj3EDddm1NncpjYiQQswqmAjzMgN9uKhxoJV29oW5C59GVaqpnBc8Zuosfgg7sNMcbwr",
  "key13": "2yjrF47PYcHdcet2oMV3fEg18ZkATFYiAUPt1FtGfX1RQesWmsBocR2bksa9oLiwuLF85aRyXz87b44eJRzxkz1f",
  "key14": "2o8nTB57XGYVe23uTkY4FB8T7NQn3vz2EdocjWFxEMX6e7KX2rbyas5URCtyjWJxaAmxixRPjWUjKGV1U6Q3vvJY",
  "key15": "4nUpKj4kgL1oP4B5NkL8usUdGMU6aK1t9RmgRVu9Z9pk7BU4KpzkHTxPgnrDkp7ZmRW2h5yYhhPAyXBGFC8RBjcu",
  "key16": "4yUgdgkEPDfD6Gho45CopNcy8jFydntbiSG3hCDNPXH9tm8FsjeWqR11Lr3NYBDvCwe732gXoHUs5PDu3GRWon5g",
  "key17": "5qCpan74RMQ6PW9dTXovCBqCCCGQUmc1Znn5p1NUmTJAS3HSTUmxPt4EN9MJPwtsBgBTTQ5ecef6rmQtGD9u3BCP",
  "key18": "3vF7UYX323C7kFts4WSzZVTenaFd6FdFLR5V3pmkAt2W7uQBsBaCX4qF4tpphQsaeTFm6zkBucGHQ1aw3SiDikxz",
  "key19": "5JuNi927YdhFaaBCF8bJjfTuMhJqJNHqBtNWmcinrQuFHiQRBesNTRmfUbF4AZYoXUYgvFxGyr6kpJ6TggSphyaR",
  "key20": "4dbDQrvs3PzskPEbR62raE2gEZwoCjiCqQwydiKfDjrJmKQdzTVfdCerSXTfeoZ3yWVYTgF1FqBx4jznbEFGitmA",
  "key21": "21gCgUDnYe4skxZrQ4Hd9Ur99xCi41brdc45qskMFtF4xTm5ekQ52FmkUv2sr7XKvt1zPdDpA25rYSfWzs7D5NKK",
  "key22": "sF2QUFdMKKdPkyDPztwe8pLqskkdskCw8whEjfKHv6A6FfMSes9urCqG4A29BW7FWaeSLJ1r7rvt5UuTRSSL14g",
  "key23": "4QmiaXW9ddzCwwqUFtiT3cWxy6LZXadghG3nyjDxWtBJ2ghRoaSP12CH2DDcerqnbpMP8MftwLDjk5Wd7BKKB6sW",
  "key24": "5u1orMCoKDKyCyfr5uLur1gJRQs2xVseV4QUaE2NWKg2Fy25cWCBbNhGxagZuyhZdo9D14kdK8vyd6qCQmvAmdMK",
  "key25": "a6AoHZibHS3946BaGn7cQCXBzJKykBiQ5nPA2e9FgQNAPaMNKUob4VX99yaVXpF1CvPizEqhbdwh64PxvU8za1w",
  "key26": "sPtjVa4R4Rjf4rFb4SeixfTrx72BMj5M6wYpYTEZkSAFhiCvHwnKszsvstsK6ix6hBQnbKmbqCvdiBNAZxxmUxm",
  "key27": "4tFgUJouSMquN14wDHzTxsPT9JqiBr8AXE8y3qNi2hfamFbxTjy4FPDD4CdFPnUFZsQGarcHeVXQYLTQjEqpYkdT",
  "key28": "E4x1U9VcfkwLg6aC18T7SSNejK5qegC8ziX74WGkbVx6zscWBFy5f1uZEyGVtp3V3rjwaNTykVkB2bRfC5PQRxu",
  "key29": "21dVg5GrJB5qYiqQoadjQXKz5KHswzbza52diDfpa8QWkrBNdVjbLgMGmjEJJm9gu2oHbn21Ntkydh1Ly7wPffq8",
  "key30": "qaeTqYdAhdmfoG734LmQjGQHQAxYXQunoAYsjvxif9ZkqKYThssvt8Cig5xAwLhYUKgonXgsnpM1fU58PHCGJkF",
  "key31": "JNfXoKmz7VSBXvt4FoYz7Q7tbJzw54apE7B5cdQH1pg1CNvQ4ZnwwwtGziYAjc68u7cky6SMrKK8ZoN5rsmWs8a",
  "key32": "4FgTtmbQohoqeMKVFTZc8MgkK4XiwtANvMJBbmMmtc3CgxGuHchJvgZ84TG3BWs3kXX4LX5ADymyhdBTQoT4146Q",
  "key33": "2NFgkvAzNXDXY3TRYPyZpW2dQyFg57h8TWp4QNjvBbxaTH9ijQhCa51RPACBZRHCWYAP5HHP2tHoTyGwX4L2ZScf",
  "key34": "cZtFx1yDAybGKbnam1cgrnY57oAF6Dy8xTmHDXXE6SykbSpWk3C54iQavheCjSPghdedRS1GAcqo9iTR6sG4DiA",
  "key35": "2CUns94ZHybK2jeSxBV6JtUscmEGaRjLzozg7vcNhtZXHCKFCxbQDjNWcvhh5jFhVgMDXJd11UG4by45Bf1jeY1L",
  "key36": "5bD51SEhzo3pPv6NsFYkdvNkQ5fs3RVL9mVJSEE7vEfLxbxVCyBATFXpRUSi5T9fNJgdM48JXe2THs7myYqTSfvH"
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
