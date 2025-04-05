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
    "2ywqviNmHPVccYvDqk5N7Qit4uWgR6y9smfL9i6MpYRyWj5RQAuTKUCExfEyrLvR4FuYC7B2g58GVEXY5atvYs1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMCpWVq9mdTfgRLNqgTHzg7FHHQ2sbnDHCMeCpvUsyn8UxayBxf5yrZvh6WmYdoXcnXjSvBuqZ6EjxT62nfPukM",
  "key1": "56us3QqRFYNxkFLDJdHDUkWLumU5vFHGzvuDEszAXeiMk7Xxou2Dd5RTpcXfoJzoBeAYAGDCaKhFieTL5RCMrfzb",
  "key2": "3bKK6zcvRyn5XthLYC266Zx2WgPMtiwp1J741R7Z8DMBLJecMg95YpGkMpnaeGFyUPLkgyCvST9QbE8S1EqkG3av",
  "key3": "2vUKqKqzpPeCipmVX31xAZwwAdpfirwcWSJvinA9dGhoWhETugMURevHHgX5qzps5ZYgm24SASYrGsWUwgjCcLRn",
  "key4": "cLvPFvepXgmi3MehF2E8Czn1sh7ySPeXk5E9Mpw2fbz2i34oNw1fC4yyGQX29ig1jfQMTA6YhSqZWMB3RCp8dQe",
  "key5": "4e5K4iMXQUzyiMrTzVb3Um4PZMpksqfmheniCUVNKkx81BE79eB2wQUkaSLP1QN9dEguu7JS9Q2Z8s3L7FhnHUbo",
  "key6": "3rDKayjEm96ncoeZfSyypENKNbUxwaabbGJc8XMwVbVALShrTpouTiAn2FehHgAQ982xFFiR2ApdQH8UkukpUQ7u",
  "key7": "3qzMncRCsTyMJ14X8XMpYdGp6eRjYe2fGfhUMYfxVtsntUncABFnYCSW4iPNhNufwEhLhaKBmAfyEpMJomVC7eby",
  "key8": "3TZCavTFzjdrCFEhy3RtFB91uUrtDRf84W47bUhZ9RmrtZjWcGFVcru1zSsE3uFmd8QszWGUyeknASLutDRNWZ4P",
  "key9": "4yjzW3U41TenR3CtDQyP9G4DhVW1LQisSg4owRQC8DdZWhHo3vJvZoUdXhj9fiuAyKnUBRnPm9akaFpbyAWMnT3M",
  "key10": "31x5BQRdR5Wup4bpWRNdvi7Y9AUS68YHTLvdhDgMTf8ovj7QK9pfuvjJLjpMqPtPD1VnxisD725nV7AWrRzTW19U",
  "key11": "gH8ZBryqfF5Xek7VPdhR23c9auCfprVbPPNpiRZn9267TfHpQHJV3XJGz7Pn9nikvA4EcRCr8B2fBj2gQ7s11pf",
  "key12": "4pqM2ab5guA8GfQMCLf2tbqdiXjKdsejmx681ftSxewR5vnwGnbnR5WfavtnSGb8YC1P8QVujQK3BjfrrDcf1Avk",
  "key13": "2Sb6H3YjsEGc7hzZzp1eLGA6gyQ5LgL6ScquGY6o4ZvrzmorUSUEK78x2QK2YBYP42L5VVxE8dKjxb1EoC5CsPYq",
  "key14": "NDAnmacQoYzgdo8yMadw3DYXkK3nBpr9uf4KoPny5SsTvbLjd1ZXBu8UQMzQE94Y3PQou5GWA2FVoBmABWxh4w1",
  "key15": "3BEQ8irKTr2s9B7JmxQzKkTZb4K19c3SJqPpHnQzX3tDbSjLQcEVoxPDZ13Kc64eDXiDQrdHPqpAWBzmRuP7hjT7",
  "key16": "3aeq6jmf74WPvd2FxTuFtwtEZxjjXwL72b9vYQtwBzHD2brbAkaVk4E8GJ9u8wsjQKhAQ9TxDXs9gngGxyiB6A36",
  "key17": "5FXMivA8woNXgbBzYVHaqwykTYtzGnWfWzsope8kEHKK6uR3nyEsjRGDhZuVFaqm5uuqNnd8B21SEJmWzApgCSX6",
  "key18": "4viTKYm53rVhc2Q8QdYwHxPnjgCRSwETWAAdZmj27k63XC17XyRbmYAAgxqaRzu7wEjj97ND12PzuV5hwFbSunwD",
  "key19": "51tx1YmYcNZ81DjdXnoHgjiJofCHvwRzhQioWW3FMc3BVmzpEztJnNGq3rvqfEspWifN3pCtyHWm3k6gmighbtKu",
  "key20": "3GwSbzxiCkBupMWs9H6PftnPa6m9YJH3YaRWFKGr5H858Rcrs9fpp5WJ4TJfMRVKBTRaRYcAGNCrk4MDULpo496S",
  "key21": "LwUEdtnaYX3TMBZkGrLV1dpq3wkzuQFjqYksdpsfvP1MPNT3QwTfkHmRtDJ4PogJpSLsykm36ht22bqquLopNYT",
  "key22": "3wYkhDM77dcH6CqkTzfzRrtVAmnWK53VCf6tuzkTQrwX2SZzWRvmQkyfGVoUQZmN6XwJydX8NyBRkePPsXWCFaMM",
  "key23": "4DW8NTwqVV8F4uh7eU53erEuG4Zb49DqUPLaJaiWrbTNxxzFVTH4ehwfmdu42wBE7baWpNUxmEu39bfrveajgGqB",
  "key24": "3iRf16jT3dhT7ZVyH83zFT2P3WazdkKcg7V9ajLnFqBxo2VajLfdGam5oQdxb4Dahb4PvVeutLqBhZisAjXrv77T",
  "key25": "SgXa53EsefZSAcLneKLaYFamKQwoCnAwheBqM8Ga8WNZVBaC46ZbnKyR271DdZK4oJHSWQxPmwyQEknWJYM4ho3",
  "key26": "2XPPNgsFQdzeFtiSvL7Vc9D5yeBLdgDT44V2jcxJURoJcw9Unbvy8UfrJARiRapiiXasabaumCEEsTUkem8MrkB6",
  "key27": "3do2CYKf7cSHsy7kQJY4KhzXWSbqt8DF7ERNXrLAniApso2a8Sv4yEAqKR5sCF5tmtPYHFNMHMT4C16ycE8SWViy",
  "key28": "ZU2t2QQoadA9v2L243TAfzjco34EjJ4eJLApjAHz54w3djZQfmdDhQr7StLDixhWsS5rTKkjoxZYUqf2C6mBYMd",
  "key29": "2mZbmmhnJX6WxPSfvnj1xZKMZZqjWLDTHxSVmsxnWwaqtLvnTEQeXeRuBT9GU4ZfSV97SbicotCvy9HWmfTdHvcf",
  "key30": "5cqNmQLepSpVfUEvfDqGyMeYiYJXcuBsATi8h5GMCuwoQN5ndrEfiaGonQRw8zBmRxKhG6aCo6Zzet29PiRPpQMT",
  "key31": "3PiJZbrx6gampk5H8V1EkGVxLBQkBHjGnkKQMaxZzLoPHzbZ7aqg4vszXDjryAXmdVYW9EcdYZCyBLWynem3aYWT",
  "key32": "2wGzbSgddgbEm5BhA2sDkTGJ5hN8DGwY71pPCASaUTKYjnawpcmYNsm8HAWZjzVqqHjqf6vGKF4swpNBGksVUjgS",
  "key33": "5oXvCmYySZBqpjrevbvPKcjYyDWzQJQTDtB4bco5g8MzSgA1YuksLtwLq4aywuALzdTdRZny31iTis3Qkybea7Na",
  "key34": "YsAdAYx6oGcfZqxA9HPbgKxhjgXfFdWWUyCFNR8kPtGotiqVi8X2EdD7dgKBaDnARn64WepDft47SfH7jUGBbSk",
  "key35": "5kJi1gUag8eUCBH8ux2MRLK5197uQLCc6oonmmT7T3nBWQdfwmJwEmsg7ETUhDn4WcoeVkG4RY3pQgHe5gSLFaqS",
  "key36": "2ARGYRMhuRRtQhJRb5bDgXgAnkAg7srq3dMAEfiGxWGaZuYJGHubMZPS5Y4cyg6HjjkJfHaR8v5ZvLCVbakAKPAJ",
  "key37": "2PJvtHjMnEZTmMutEqJWPqRLJACyxUszskAbqVmqzca9yeq2FM9zpJv6HsAAWRPVuRpEKgHzDDPaUiCrTqq763UD",
  "key38": "3tte2LYPLZFi4JX4CjyYtumk2DgpWasEAKyApWH2XEZt5hD12K6w7Ly2rN8Bfmfkfd5LmCAHrTQXwa7eoWvtBsEY",
  "key39": "3hPS44qyfCerW2b9LD2iWLgQ2JhgEtx6QTSGxWkVy76t34uhWNsRm46DmSbS71pQcTtZbALXNSc3rXc1mYDnHKa3",
  "key40": "2HcirLBG6kQMHbuG3KUahxNKjVkPdKCKgPyQztFCcf8zPfBgRcBonUpTaJpgJXgk26Hnye3PGUt2Xo6BFj4cc9rD",
  "key41": "dwqVzdStzKDdFmn65KCnqYQFB9fbpZvXy6Mdihdjkump6NETYwEidwoidbz9HQpHmcrssfmiKpHiRhe4CLg35WL"
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
