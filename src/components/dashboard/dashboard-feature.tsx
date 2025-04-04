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
    "5ruihrWfwAcpNg547KvKMkQvXGBi34LkeFVZsG8ZoQ1eADMG7tBLynKZPoMFHzhhhCCdrP9G9FD2MYJYfeAEyWYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwxBF3xoue8Xq4hwLDNim9QBjrTijdrQzwFmRaq99HcTHJrt2j5HnyQ5S6ahkkzKyvt9XSM6KQpYaSFLv8iQaxk",
  "key1": "5FehrEyi3SgNi6uKapuksFu2Zcnve5ArFArZWXqunEFrDbQQmvcDBS6vhjUAFqPjGdB31pdPF11iTL1VZwbzotAz",
  "key2": "2z4m9kwPRMVE1STELTCkezsY9G1yptLwvDHchfhFYC4we9h562hvcK6XXnYfNRsogXzRRYfPiEGH2qjePvNQMKnW",
  "key3": "4ZEjgNxyzpRyAEZQsGLetuikJySV2U6NwXhjGGTredVh1jrE7K2Rhx76wo4UaQtet3jLnHd4PaYRogcEqhVx5Q4N",
  "key4": "dj9ZWE3P6YrBb6GYLbB7fsJRg8ULC9pGHV3Qq53P9eJwzNNdNctWjWUCgvB1o7ZKFL8rPZ9A7VmWaTXxnAcCRXQ",
  "key5": "5sUaKPNPJB6Q382gtYRfhK96SoykmBPGH7q4RZ1gekmttonV5fCRBF4M1SgXnL8sEZ55tBouDqYsWWyZ7VxmbP77",
  "key6": "5d75u8YuwaAsdKrvsFf21MXHSRgBu5nzy7fE7uJmbCf3oHURGQme1xGu4p4RDMNARddavZcVuHDFiYUdYvTv9HHG",
  "key7": "2uBVf7Sn5ekMrMcFhYH1ZQnYSCuSsuzn8kDEZMKhHN9dMHFv6YjQSxQgjA4utHRGpAmpCjs9UDuG4imPAWkWZAdF",
  "key8": "4jQfEFnjAfQbxGm8vTgPTSBmp6cFGgJr3nC6AxeP69FWDoQ6P3s2rHiXKkQBYntB7Nwihdak85M9frhKfpoSCW2p",
  "key9": "5NobYdy4bQKWv3dUvwKaDXgm3WPocJSewFeaTWuDBQr1ZyviXQUjs14G6DZf7gpbrbWAjwNXiGKie1iobQddv4j9",
  "key10": "2MdAgHzLDsarQuA3Sg87io4XKYqNuRoaaVEKhmBgQZ6WLfA4jmTWCDG56w5ycJAZmaxj9CmUgPFuBQeqPNZ83mZ",
  "key11": "2fZNHMnFp41g9fDNAfGKU9eCk6CQ8GewmW9PfXS1vz6iUk3iDitU92eaMNBsNWvcG7tmPo568y1Qd4BrRvG4YeGL",
  "key12": "2S4uM3SgCa3bhmDNFq87vSKNjWvXrERVwLNdmbfDkb4LWcRm3jcNzYfEiv4AEdk9LCYgWYDAm5p7Pa5tPxpQGkHL",
  "key13": "5Q4b9PLdnkUSNYscxYGiYDtHqjmgQD2SEMYnpiZ8MxKBgwCjChGiY9rqQgtUZ6RmtWjTfE2c5ZyxT7RFr2ze5hd9",
  "key14": "MYGyy5q5qj7ZPyWMo7zzXgWPdZxhn2FjRu8aZiModdHn8MDknX7HdbiAboJoHcDu2U89397rMVvFnvz9g2CfHYB",
  "key15": "5gGoL4Hv8TrykT1TASc7JYFsp9eEhCENfc3rYB3merAsCRNqYRNw2ZzsJYm4cCvppBZyH9eEGv6kp9cdTGvnrtpR",
  "key16": "4Vb7bwuSMM5LhWdUY4r7FXcVFE51ujPydZ6v8VHteZzQzQDFKsNhiPGY4Q9MeSGEA3mYoSTYCD7LJXuCkpykd1GP",
  "key17": "LvUJLLuk1ofcgJtReoKHBykYwM6QwxuyxoRTRbgTfbbWPnGZVTCwTGSz9vGpMhzxpBxrFMoUaNA7tPHsgjaq6dy",
  "key18": "brdzhNzDBLU7TKasodpFpgZJuRwLHv3QRo6mfoUhSw2SuWB7JLrtrgTSgmb2vbu7sLdhpqQCRZiRYfxSYL2mrsA",
  "key19": "5MWngcDwp6zfi6FMme9wGZP2Lej51dq6Yf1DkM6JmsZUnA1efFGgBptB33jwAVMXfqbDYZDqoRdnGDdJY24CUdme",
  "key20": "rvPA55F43CmFpc43SMpFHQygcBywYMXHQk5dzcRmf13D9gDjQ7YBEq43g8kuAjgKReUT99VJAA6VCXS4vmWDd4D",
  "key21": "KyUR1G9bEvLvaa6iyNtCgoce9Lkpr3ry6bVTv5skx2Jy4dhvbSRztB16LeUuBo62WxG4wcWeUBC1d74FcGdj5uv",
  "key22": "t2BVZmoDX4C68Me5ZGfqBXzmzEm6KkVEwWGC14iPw6eniB7Ed4fhfUa3FhUWWJAbV9C5gphrGrQaUMfn3Ta5cnx",
  "key23": "3Hz6XdetjR6JWTFB5ZEJAENkUFLpETy1ffwiujyGyxDikfFWDKszyNjJqSYZUGVYSctoG8BC512TsPJDcrRQrBAa",
  "key24": "4En2FF9rrDZ3JD9F7pffuqSWTF7zzFC7cJXDLKxBuYJCHeHpX3Mni3vYLY5GGKhjXHbxdmNifPLGNdeCixCoZok4",
  "key25": "5nT9d4QvdKUYviqyGfM1XtePgRy8RiasFPrSp1TadfqKAbro8hVcjesePb6Q82d4VMnofZFR2fWE248Qx1nG9uZx",
  "key26": "5XvPmuka7ZNNv5cPUcHecCB3Prkyr3frDU727HTdmjpDobjK68ySmkM9XBxH7LaTKCWiAaq51R4rF1TxeeXU6Z6D",
  "key27": "b6GPeew2ZP9zeqht1v22YfNeG6Qn6MbeP6tvwJfbJF3ueuRak4UtEQe6NcnBTz1y8uNH8MKv9K7ks7euBX4Fhuj",
  "key28": "4psAYesqX8zNzrZ5E6ncpgGoRRfmfULkrE6w4j48LhPEc64GgF18RH1zKVeSTURaQQ95bLXMwm72YXnkheNKSDuc",
  "key29": "sWxn9DCLUvaUsprFjz9bL92Vv8Aij3iHLe3Ee6srka4TFC2EtKMr11Mf74LZHLL7sCMvC4ywicrygUaxdj2r3Cn",
  "key30": "5CgqSEc4qJCuxA6iHAx7mscFWMGcp3jWMhH9aBN7hwfPaNLNq7KRyRrdpqWaXo8PAhE9BQEhJFgxD1Jx9CHKkE6n",
  "key31": "2sryLrxKCARZZHTQAGZrq7SmT9U1CQZVPmZ2r3BLng1Hmm9PsaPnLMui91eo1Acznp7oL9jxPKmMFVwPHDSFbvMG",
  "key32": "pCKxiz4TdLDb4LUtdio8Lr4RBycNVu7RdY67phRG4xPvt2UrE5TLuuWN3C6aQiDDcdKSYru6GCEewS1ZafrfuHZ",
  "key33": "59jy8WQ7XfX1aL6AV5KhTQYDhAubCgXy4mjtJ6n7d9UuLH1LVygGjFcfwQQX7LE9USCpnLhwTx6t5Uqq3xLr7ewi",
  "key34": "wvf4fayBb8pntmbQ1q8iwyDWsriMLVAzYBCT9o1AZHtvuvCYeo9tGP1j2yUTsd6tCehn1J2t24TXLQdaq9GkGkE"
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
