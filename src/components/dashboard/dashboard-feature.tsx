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
    "2VC428ywiFf32w1aQjpXPJNFKNtZt2CVizdtskrM4vsRMx7uqjfokLPwuUL6xYW5pvSTe2nj8H2LjV4YovAmmZhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4SmAXafKfyBor2N2nTCxLqiu6tLDD55yhmyL9bzmcX4dYuJS6xnuJ4hKbkhnMkBHuzBBiG9jZ3mtBkTfgP9mWU",
  "key1": "3koLo21x97woYNQQZRoQUADCGWbFrPKAqhJ16iB6j585pADBCnkkWZFTB5E4jFzisBudoRZbbNPavCTA7onRcFaZ",
  "key2": "4EPpGPAYTg7cTtP4HZxSvM57Y5rMxUbLUD2dGgv4WfbNzfgfcxgUtatnpPwUjEHd3BciuzJH6cBfwvtWi5GU6jMf",
  "key3": "CWuTmVm9Vpia2w6tbr16sdM5MLdhW4rbSvEkXtBtVBm9qrDNNq4CRnumLzgoZK6gQDbJBspuJ36hUZLJ9xt477R",
  "key4": "4BNhGYvaZozDiaE16TYZEsDpTrcJBSFYZJ28aZz7P668QcLBtDnykJXWkh1JhggVBrbRUbcxiLf7mWn24t2JEZt7",
  "key5": "42d3wVKscqJL1yAmcZfLcGngkb51TM4vSqVx8U4Ye5ZzVotJhHxUEy76PEknGpN1apn6ZXHF2kDsh4J8ph5GmbNX",
  "key6": "5gdvrtnp5gU6ZeSDesPMAqahhqbXZMqF8B9jjQg4uk3rvV1ahoZDkoiSfMRrVtRHMx6fsRe6VcU599SBKPac3kHL",
  "key7": "3ToCnUdWj9tDZ6hEFffBU6WvghLTvcTgojiKUDEN5W3Mp8cHf9YEgwhrvzP4pFtg4sLZ26P59DwHcaN8A8r5w3dh",
  "key8": "3heKHV6RnRu2fnmeGL4q5EyaYRuPcTRUPqDYPDcS4SHoP6GPWCC4CuYaJkwSBv4yVwqwvANPZwmwp814nQpMHQiy",
  "key9": "2YjY9Vk2mdbkQ4W1F7jq6uA12kjXZXtcguXQCrKM9v5xUvUdB8XTNL1NPH1iu92cVmGKYwPuLMN5oZbFjGrY7oAv",
  "key10": "3DsLuhmdkjdDMQ4HBxuH1sZzEEH4DPZRfxH24kmRYaXh881XdxHRL9bzuGgQ2CSTNFfroY4YZZEisk3DW4SHwy92",
  "key11": "5Lbjgvz9sBsLuMm53fxaiG2Yk7U9aRfd65f64yD9Bj1WRGfW593y6RoYNanjMjzBr1qiZ6mj9GZpwTRmbMbY6Ltx",
  "key12": "3qDv1qTR4Rg6JrNymecpQqZm8taiAsQX2BWuoGmpm6QS2dkCk5GVbv52sUsEyqbmhk22usYvJVRH2t8U6H9dc5Wh",
  "key13": "2kSTZi2SvowsFfPaeriqT5WAbqeZ3nEvLR3jjmSQ7w3yhGZLnGJdcCepGz8Tfq7M4eNbfpsLQX1iik4QVTZSiUHQ",
  "key14": "2F16imuXyA9tPGUNFipNbnh5HeCHWvYNmrLx6qC99ipwtyRePuqx5Do4gZnmPtLfxw8rbjqBWdjb9ia2g5URy8ow",
  "key15": "4CfQxHsoNjSATTh6NSEXdbMpb8Q3H66BNbzpNCQQk8GiyzLC628BkYaWzMeNvJUnxqA1CrCe6SNaK5iqvUynErUA",
  "key16": "5wpVMw144QbyAAvyuh8rpS71v9shDJnekeYDiwNnpugpJGFk7r7VF3Ju8TZFG2uJKXGENy1x135W6P2GksrjKpq5",
  "key17": "2jtkUAuTtWp8GNQWLBajpeYgCYrVM8Gc836yxb6K9rL66czECHjXBL4bowga99LGxq3pYF8V7tcnVzgJpnQ7ioLc",
  "key18": "54XgV3EPaSHMPWNhr6n5ux7swjjUL9ZW9jcziHSR9GSDSrT944U2zbbv2RocLuHquHnHYChuCvjsmb6oKPXRnk3T",
  "key19": "37MTtrtYtAG7fjRXReqBzq9Z1SDRPQbs29Y4xA3CaokrFxbBbhruhNW4z7zA3asKYzuKX4drPkf9FP8LpZwgaBgv",
  "key20": "7sPFGHmV5Z1wFTTEjR2Q8suASNwvgYh18gbaBRrtA5XB6X3zGdZ6YBjzhcsC7qdwFn1X5zxSgfSCuqyDbMfjHxQ",
  "key21": "5TrsKwvMadVN7h56EiBsqwv7KGn9JeZRLYP5KrgKDwcaAjVEFtDURrFLEEmxcTJuW8hNornt1jiELR6Z3A82c42k",
  "key22": "5FSnURRXgn2FEzckEYTT6Rm8cw4Ns33CUazvg8usA6qeiJiMzR86uyCS5HGKMRFKrEFbW9QwtKDiThWLV2K82Kjt",
  "key23": "3MNeVxh4atAg9ZQpVZezD7c5wjS9DHotxg9FH7rN4RSPPoR15WWDUCnMebjsbJQxWPVNxWJPwCV9A5DbSrFsFHAZ",
  "key24": "3zoDFk3pNHtiisgKu7AhK6dSks5rHRC7XwTUFKaeAHap1Mb8wBhBtkTEovDRu2knHk6MCRMDC7Jyc3DPV9MHqBLs",
  "key25": "2RpH6HjicZuEbter3gXQ221jKR3mKiVrgHq2zYoJv8BzQW5JazPQ2DNKVgeDAbKv2in5oNXwq62Z7jpoaFsG88Ha",
  "key26": "AxtNAXzN84LRPgiaxByqMh5qKewb6FaNzUL4xkxvShzaotkHt5TFrUaRVLFnunnuzyxrv331uHxCoyPTyvtbmVs",
  "key27": "zUM9AkB2YNAc9rTQcNQYvA6VtKtvdHAbsQSoExqoQF8RHwg6PeTJxtFhDX7rfco15FZEXXFMrypdmR2ZzWBHVxh",
  "key28": "5K8s3gCC7dtFurdy7Rsza2bifrJDwfQyED6zYewnq3JvQHL9NqmL7kYmBSyq9cQQX2EiWoGd88bc18E5dMnsBgCk",
  "key29": "2A8JQWSromcdK3kGjiaF1RfqFuTdgJfG7vdmUTaVSv2G9MzRbs2HnSSzTERJsMcyXQoAU2oQgf52pcB66DV5gJRi",
  "key30": "3wpu5SbVste35e2txPzjGWVPRQmhoshNH68tBHvMd89E1CwZuRFtZhxTKq6h8x2YaHG8sMCjZ5cA3YowZnhJ7jVY"
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
