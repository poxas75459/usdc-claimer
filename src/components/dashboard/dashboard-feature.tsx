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
    "4idkAogkYPnPbsUFo1uryfhGVJzfQ11BKQHzoD7H8wzoddxtHDLUnZkSAmT2p5Xj7iDUwa1afJEJcNmTmQukvXq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XwMZ49RBWzNN2vQuU8nPB9Z1iHADFRDBjs91Vcn4cPg5Bf1h8wiDdF4gKG2DcyY9JDGvEXbYHpbm8ZhQ2hDScZh",
  "key1": "5xGUWx3A9uidLCNnz1fBsKCYRtHRPejWNrwDFXD7yt2d6UoYEbjANDV2UueWf8SdbTWgqoQPceEaDXEN2Drc7Fcz",
  "key2": "3fwAfKchyGLZPaU31L6oan9hd87PQ3zD8gJzacgai2hC8H65JuNiwLvGwzyW6QaxPa5bxYVwDniz3mxPqQmsbKnE",
  "key3": "55We7wg87JGYvxt1AgNW8Sw3PAdyuUkAnBbVsLNq1DuWayqLgdCjYd4Gieu4oSL5W2QXP3ba19G5PuW4WNJ33a1T",
  "key4": "4dnLomfsJmqk8QZJu8HLEBVK93TumJWu44M7TjiSmtZ4GHWJkY5JtkAPSvtHfFm1Aond4aCM1JhHBFQ3sXBdZQWi",
  "key5": "1QG7MwZrpkM8MFEPeDjiwjouhBuZYoEALxwDXGvrWH9CBkYuUUJhbb7WLTzxNRWDg5UkCEXqtjk3yB2KZzbARte",
  "key6": "4axDYwN5M3mQSax413T9D7jDMBkomi61jHkdKLwhgFCPwvzd5uLZVYmmUfqwa8wqrnbfCNFDsC9M95Txde5SLtCM",
  "key7": "5gnV2tPLXV8PxMcCAKEajuiCMipryaKbLFqveEHG8LZe99aHjydANgPbDU38DkWnrZCdNAUz6fBhCoxwW897UXxz",
  "key8": "cPoiMQBJ5hLEWLKCqtw5vikr19w33PUYnnyhV5XMvier7LDTc1ubp6Ac1ERTmaB3G12chpexX4PPYvmLkMWGGR7",
  "key9": "5eM25fWUFHx593YZ6tDHKJbbdktzHhxFdcwPXjB9UvN2tDxzTBdmG3x2io6cekbZDJy31RHRWkQtC64JQUJGf1qM",
  "key10": "29qW6SpmiozL9ikbRsYujswkjxrSaQNh5PnKTMgmtd5LMx7CRPsDGUmW4iADePF1UFZMgtLDPU4HfLX4CCHUZvJ7",
  "key11": "7f336SB682DUNgNPhaDSybAbUHSBnESoVya1bseqU5TCK1msDSs4K9yMuevBUhYDxid1X6ci9Dwxq72qNh5tNwV",
  "key12": "yUcJAC6JDyQpa2ZANprn94sPeHnmSQN3dqEomV5uKjPWrxjrbTeEHukbDBrWKLM4rBLbjqJWHUKvPRkJXQzDT7k",
  "key13": "4zuw25eD88DcXp29xzsYr45iBhUZDv2DQDbfK8uLvR9SBcToWbVhs5btzftgt5Jdhd5JjvN8pxPRWNUvg3Pn3zFW",
  "key14": "4ipv46zQ4WvpvUMY66BMKaMAmE1cyhdZoR1QGS8hqDaNBb2BGot6bnuSdH9qWHkt3LyVrV17nmVrV2z5V7wp15s4",
  "key15": "3utjH2pBHMdJoETeM8mTgXVYf82qDpwfd1ubLmFtpmx29KC5rgiMYMXCExiJGbdo18BQp1CoSqdvEJeWvevw5KFP",
  "key16": "3Wc5QpgQSrjy1PmmEVYRopLDWMVH6Ya4Amc2C85uXCAdXMs6QcTX8tssWt8fTnFv1uSxzGfMu95soRTyCWdqoEWN",
  "key17": "ZCuYMbccvqeAHrxKjUU39wWCDHvD57SXhk81TZzKPoX4imB7Z6tQJ8PxuB9JuTP7cVJADhTXVuRTVbFQQiq9KTz",
  "key18": "31hmV7v8SAweKk9nUrBUUUK31KpwBCtnsNbX1BNWUbTAdVuUzNb2wrNidhRQH8HAEjhaSBReTsjKSUttDXxfH2w2",
  "key19": "4ysDXJbbzxrEnamkrKVpDk28eveTEYAvUWJz6jcnS8TMqz7k3Jwd1Hd4cWphEhfN4RGKsc5rALm8X36hfrEkq9B4",
  "key20": "3mNMFEx8q4fY3WMm5GJBmSi77WWBFsogpTyncRVAJmDxwGAmnLENdapUefGwxcbmBMNPDwEaL2V1WGL7KarLFX4p",
  "key21": "2J7Rv8b7hMK3UsPx7kdQgRwdy89SsQsNbBvCBpEyc8FE2nB1QLQE3WGzd26xDmNrrVuf9ibbPPpCg73XU8RRmjcu",
  "key22": "hSRknbxkrv1DDBVGJDwEVFXznnmvFfHCq3DsvoMFGF2fJxWsxo811xNxmfLsRHayDy8xDWCmLzktoBwii61YiVD",
  "key23": "2xBDbA15BbNZupBvkvHpgrq6ks7KFqnqyGhMSrRjrMP4CV8R9ZohqHwdZvD1eD3Jh68bx4ZDiXP96XucMBrxUDC7",
  "key24": "3uWfPaR4eiLpFvw2k71MpH2c37fGjkisyeW66pCWhaZX8NK4BCfFhiatyZoYGUJQxN5zMjXh9NEXkWbvPaa3q69b",
  "key25": "v5fAfudsGEL2rzxbssmQcMmp41eSmEf7YjvUnHa3hf6nK6FP4ZGWjnd2X9bjTDzny9kFq3RNgoadVTBEnEz76i5",
  "key26": "VikwKcrXDqQJv6sxgrLjWhkarmNtZ2jaVkxmrCZDBr83WEhg57QgWE65KJZXrrCuVjYfC97cKRG8QArRzpQdzWN",
  "key27": "5qqJb1s9R8obESx4GngSdqaxAhsNKbMNjf8UvtZbrtKa9n1xbwyyVPBAKLq9EgWchwZ2chGtb7ywhGB3S6qbyd1b",
  "key28": "5EQnASeV6CNEkkWoQsnow7DgZXaPF8yzoueLUUTHqDh8D1KeeuWFJ8EncDBrZnUm3J3TMHpB59rmWgM9LbxAfqnQ",
  "key29": "5fYySuyNcjmMGfNzbt9xKPAbMVNFTYDupcj365hC4yzHZPKfMBomHeMRhioJbzZxMiG72VnSLyWEdhMPdbd5km5",
  "key30": "43ieL8FjZkA1mG3ZxNaT9bSh62RYHsduZznNA3WvtHy8b4nRseMg4oF9EvjTw6ZC4GgjphmSuZEUU1k1oHWgfs5Y",
  "key31": "4kZzWamSigcdbMR5C99BdNTrNzu5zwC69rD2npBq8XdPkb8hNH5fWMLet9KyYLaWz8SoeCUufBFviELhpUCC3FBR",
  "key32": "5TZYLzPpBQf9Xt1Cv14mi5d9eCY2HGkSjHqycsHjgdawtmv6wzn85A7ov3DuoebvWShxNUWcLkVyaY17X968GYBD",
  "key33": "MuYPawjfiF6C4tfRSNMtFh8gtErPfDKm61PX3hfAnocb8SWZMTVjvHS1KcaoLTx3M6jrt2wHftJHuX9r9G2m9Vi",
  "key34": "4V9pT9wQTJWPruSEbhM4RPUePYTEQdQM6W7iGTyrz3M98DugWB2Yg2GbJfZHPatrfk4tAtM2SE2nGtuz64TvkSSH",
  "key35": "PD3z7Y9mbme1EPVuVio5NkQo7sSMydCb6Mip6Ff1sysoh7ZaoBZKB5kpaBoqDd9LEtEwC3vhwzdp4GYRk3Nn26K"
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
