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
    "3Y4uLRmNBL52xVhC2RNVtgs9B8ZQeymhkYREA74YNT336fTaBHtTusBJVJCCKN1ZPHvu9Se953S7uCnLuoZD1NBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mznekvEa4uTZ7fUEYU4xLvKyqoXzgCVje4jK9xNGftGtx17J8FHnaaEa9f7e15cFwMEDzLgQha6TsXEoFaagQd1",
  "key1": "5mipuWUmkdRfjdrt6D8iyYc73ohQFDPDCGDcHFn3xJaqL3TzJWQrdwKxQNXgTPAHY7UfwE6spwaprJzHMVh83Yen",
  "key2": "3oDJb4BaZQucejXz5JbZt8rzJEkREY2EGZAivqeEh53rRBhT1JoKYiGC6JpYv2tXkpXSUyTB6Th5C2xxdbu1CMQj",
  "key3": "5kKEXPcmDpC1X3pjsRt6NtBcVbYCZJUPeewAYkpX5yjRnnCu9VcmkTVx9EuuwmXj4LMGRdoNiz6Ru5f4gyrJDcY7",
  "key4": "5VVLqVAcMqZAvcBrTtoyd5xe7kcsNkQmcjMAHYQdQhoKp7z5GTz8qxiokSCxT2AMGFnNrFhiZPUBWT3KvbUGip7W",
  "key5": "3mroYrbUZs6wVvo7rKQg36XgSKoPSnsjgpSVnQTLoZYxFRYHXepc4PiTjeoRqeiZ3SF3BswaXgEtTaJqVaTGiWBs",
  "key6": "2DK2pccdbKFr52KZXL6sXZ2fC5Yj2HTfAnWbAEBKZ76zsAZaqwKejey8vfvz2xjkRAhWPN2ib8XPgJkr4GVEp7BH",
  "key7": "599Dns5Yf183tWEj9qiuC92ooAizDjXALvqE154VW6LXwBnGWFJp7tRYsb47J1zmB4y3CdDmyYuoVDXV4CFN46sQ",
  "key8": "5xeMqq949QjidHkFHZD1Voy2BLLahLBZYJA8LsLBZ37HPYJGqyFKkYC3n1fd3xbv7x33td2rPpaP13cqKA6cxmsp",
  "key9": "4V78wn3gfTYqFJ75VJ8F5rWoy7tjPAPiqEs4xj2m6YPgtr8ESw4RQHZQhANC2HS2G4tM87QLMcJrwUxZi7XnBtC7",
  "key10": "5KMeaHSsppJVURMRN4pFs5qSL5pnmf3uPWet8ZuPaEjvwQbkvf2hZSuwhC3BpEXrXrpvvEaxMojqTiLEjngYy7fv",
  "key11": "2ox43L38ufbE4V5eA3ap963bKf2rnbYNbAsVzHTZtNumBAZZ4c53RscP2SP4eYzFqYYns3L6gD7U3NirL9YTjYyL",
  "key12": "4ctaBmJdVTjDBfAdegPNmV6EgZwe4LnPGUXFxdWTtZjWVL48j17hHLse9qQ2sFGd7WZhNgGdaxiKFzqZf8iQL4jb",
  "key13": "2D2usJ7kQxmNfSzqxc2guaRRPwN1VdkHpPCTdib93JQZvNqSXNDjHFS2nK1j8S4pZWB1HWrdnTujkpkL1FDn3TQS",
  "key14": "34cV63EKYg8Cbis2JT2vRdm2m9RAf3XSoYAWN56o94qtfbJjLTq4M1UdjeXEAJTAwqfd8LSap3BcZe7P4PWCVb9C",
  "key15": "2Gzmtne8hdmjZ7v9pF8fy6XCVoBUmrThqAfgq2qhibp17RFFouRixCsyCQmRvion3nJ2XJdXCHSdVXoftM92aUm1",
  "key16": "3KaEGp4cDikdX3wJYHJbX8DniTAVSC1tXwjsAHsYPPAxacU9sQcmoVJ9LDBqopNGf5pCaKkTpJLF9Wf4XJn1Xxgm",
  "key17": "2BW5EmPmNzai4bKMNHR6WGYtRZ8Maw6ewc95rejvMbDFDFWD8AhNRQyp5FTrWKGm1DHjPiecD8Mt1LY1Tp3kku1A",
  "key18": "4S3CyVQHEk4kPvTQMqbMJXmpbbRRuUZV9HoeZL4JuuPQuWofyB2NkmtmnWip3HPo7STpY4PCk2UDxzaGz1hezvTG",
  "key19": "3vNDzw4o794kmTCrPE9YjkJ565WimozDYJRs9ocNieGpnRoLmiZxyVE7NRUfcvwTSYsh19cr5KKrah8Xc7s9oMFt",
  "key20": "2PgajfZKoL6g1JWYe2GpUVx4nMCj49Xxyp5z5vBEQxFePyQtmChZpZN1CBNXcAFTv99kZMkNkeTjcce9gRvn3oew",
  "key21": "STDzbgkgprzFjbXrSTNa4eCZA4TNohcEcxf3kAmgbeqAfMiXjub5CC9v6nYNrwJ87vXiJyUdnaXj8myg3pFfjNa",
  "key22": "323pLpE6Bf85d6SnjbGQdpLRK4x65YLSAAScTebRbRzgGXabHWGfJ99keBR7fK6uJjMScGZ951NtZyaDGAGdmxiV",
  "key23": "3nP5JpvNPugmSUrryw1FMM9w8UoMxYhBuAY6Vf5WAsTLiFTvqLPkUM9evDunqYDK5qDjaWq4SEeyvFQ6SMv48dkS",
  "key24": "4KPw4GCKxFtr7ojSfP1F8SiA2D8bSixUd6Y7gUwi7nbeo26sCDX3yT7guDDvEBUjtdbBs5XzEeMGpYks7EZDXE8P",
  "key25": "2cJY9skicB1pm7aB376tae4XnhF9HLWrYHwBC4q7YC9jbgU69eNE5FrnkCNJt3v21LBKQoHJQdfzULHRNZpFTpQN",
  "key26": "V5rnK9Wp8nS7HuGs5QNFWGXBvK4sE4qLWh5xiW2SR89P482YrfUXMBMvtdKwpgvmbwiVDYio1dccFGYaJ4SQW7r",
  "key27": "2EL56fimCVcWXsZyb3Dw892ng6n9fxB8YfrqGHSppVdYLHYGyXbizctqddqVJ41VvjqyHUX3WjAbymuwHMe9uzdA",
  "key28": "5C9mFmcwvQx3ei9euj5rj9GszDEoQQt8jWSVKuDfntF16tBJPP5QZZsuYyXbVkwYp9d6MTdNnfP6hKZk3qjN55st",
  "key29": "hVXY4q8JabEpSSWbYXncg1wX9yezicmhUjCE5Jr3vn3d6xC92Ad446vH1ogRcFu4mRRvMEb2wMsvFDxp7DKTdTy",
  "key30": "4ZnobsfqKW3vLcQgn3hmTzVPwDEMSbz3W6Wrm4cyb6xCBo2DLTmJwj5ZsisGHh4AfBqnGtxELHJ594vbeDAuqsY3",
  "key31": "2nKtBPZC4txBNtUccPSjfKGMfCmTPDpKhVzkJcPwdmhRUHkFRoDq8H4GFhjMHfoTKamzYEMXkzT3Q9ryDrUwDuXH",
  "key32": "5LF6J6Y3Fe2oaDFdfKYsMiaP48rdUiPjy3cDmqEAbSQJMUFfQBYPxvWFAKGeUQ772ok6JazgN9LQPmSfYgR4eKt9",
  "key33": "5soQhh6pHp3VzsFvcvHxVKBssv48EdtLNhkyxaSt22WKeH5HpX4Dv7mEYSBwg1ikKqAVxD2Qs4AnkGriEuscH6Qm",
  "key34": "4dnMm1vde386qzsWSWBYK5PkuGijRUWyHa4YrLTQ33CPskM5oMaVqT75p5Dn2KQ1GRRTbrDx43FE19mRsYFDQPjc"
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
