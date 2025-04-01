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
    "22c7GZJbT8Cd6DWSmHAQMYNjB6yGci14ohfzyxMfgTYJExsVeSTPy3tboDyULeMrMU1d2shsmXSdtq56kYHsmMbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpDLyGdDx6ywC5N4bqPzE4aW3dfYCufGh5xhb29kZBxgNu3PhXdqzungxtKNHhQogKSH5Nvf2aRrvJieujdnS8q",
  "key1": "4LQ3wMr5PpW64P1UeSvFREuddyYpg3NVYYN6UsaRBHPipAPmGSv8LSpeeTTNPVY7dQXCnu9X8GAQuUpiHdgPBD2K",
  "key2": "5C9ZCBvVqxyKQf8ZLSnPsAUoLtMBvvKZ1QgNjpSskTAuZZTWXYjfujMhMhgTBakQiGVb56nukpPcbaYK5LRQ247f",
  "key3": "3PV2B9SwaEtVoc6bn1oGPsK13bc4LHowhLgpyvP9GH6dLW7cphUWRvp5CtwwUTyKV1Wkqz4uMwXmwcBCSfncBMmP",
  "key4": "VaunGJkg1UVP8zQqdMuHVYnGjq9YF6kaVta12bi5GM78pxadiRi3ZrdjbAQn56yprnfbCRDj6PEV5PEudvCZWJ8",
  "key5": "2TdU5PUZiaotKqYa6FzTJoi8NuJ8NuPNCcGVm9dGXjmg7AvPRfQ1kuTM4toqFcH1nimSRQtS5qFxCJ1a4FgRTcMp",
  "key6": "vkhJX2LMJAmCjy37BDkEMBVVwhc1Smrzw8rB7J8rTaFmHz1iyNRwVqTDje2dLUMYTQygRkZjrRR5MAjUkfAz13g",
  "key7": "sRPbwCCZTJgqP74KmWbNRadHYnCDKEouNi5PChT2TKJh6xHbGC1FQvA4EiU31hbKthHrJyQdduFn8trzhUYspMF",
  "key8": "3n9mYN14jcqm2jWj9HgLDmY4mLQLdJHZwVTmEvgPh3bD6PDQezio1PfWyTEeFsx7J3HijDh7FFaoULLDQmkSXee2",
  "key9": "2f3ArqCqbkWxWyrcRSV7QqjePY1vDcb26WxHv82CwJYVzkuXF1Kq66Fc5UCvkxBTBZGPCMuiaVv6RgSStmQWcWzs",
  "key10": "35WC4gZb26F1zFJckfDL4TyVLzF9GgwHhPeFbLTw7mfawB17eDZgYB7zpiRdDEzxhC2Y1hvByQFT6NueT299wkFy",
  "key11": "3y54oNBrpvnjxAhfUHLHnr3kjvxppnyq8zpXgfB2HNwrPb3vQtbzFwwjU8RB5SDkErWRFDvfqE9Bqc1S3S39e8QR",
  "key12": "45yZoroXmspfUQzHKPi4bABrfu7zsGhwmDDYrNaBzqWD5zQVsUKtNn9JgUdM1e4vX273k68uMZPNXc9AbAnyuuQM",
  "key13": "2HAG8ZBZiqYnWeVQmR4RMBdg8tRvAvucovxmFqsX7kWLQou8AattN8b5K9tB2GuXEUjxeRq2pZ4VgHNWoKNosrHG",
  "key14": "4yKm8zwxjMqoPNr3wLDn15D9NYD4EfpLvyV2pdvEgnpfTDmJP5LxQHugSJWMaHeZNuzFyG41vwyxTo7pdsbcRxUf",
  "key15": "3HPib1K6PRqdwmgHuy3PnJqVUZRr9oR41jfWJBFP2PwrYpHcquhGdYYdbP3TT7i8nCYeL5N9fc9Fzwg8sbHLk6jd",
  "key16": "3T2LChxUtRXTtpvdHKjgSGMjWXinQYprAncYSPKgKDPc9n8X58kEJJCwCHLQECnZ4QNWxbYJS5JDbzZoeLLJvWPQ",
  "key17": "4snZA342fvuGdpy1L6ZHy9NAqE1nY4NuBEureVRWrUQfc3AVjjJ9J5a19sSPr6cZQ9yyEZuKT8zhcp5467g2bC8C",
  "key18": "4vnXx9iEVHn2s4xrdf36NAbVkhvq2kgep7hD74p6bMom2qgR68CPsfw5VgjcBA3tPq7JTMfnLQxxWEF9pmu3AbXk",
  "key19": "4gviHm1VpFPFPD9eY5Wp4SV6SwqdzqWRJxxYNUnW1CYESQkstyTjBWo1sK8QoZ2oEAjG98GLmrfSAoJfU6E37AnD",
  "key20": "621huq8L5tjjMDL7Cvr25EpXeneq8BF3XcuNk4jE7sCQWYqcLfKJtLcsJnLg3evGzoAGECdVL8oVtMdSwz4CWBgE",
  "key21": "3zUMp9uXDo58GUUKpPLTMxmsV8AFjPgGG7KyLjLi76XZs4fjmg3dQ3tq7tT2t5mFgcHxW9eMCggGnDxnQCxg6Mkx",
  "key22": "44FSFsG4dmbARELZvcMiBouQvKwvaHCRan6ZsZxLjyQqGVN5w8gqK4b3v9WXkhyDksfzz2HqvCvPC58212RjjRYc",
  "key23": "MdrBQWknZRXrM8LH8xZ31wa8RuDcgprz2QHWjdjK3tTcP464oh4BsuUq9u8re9HQesUbXNZvwVuTd6oaxNK3nbv",
  "key24": "4NmcGxxvdDaXHhoHTiZ1AmipvAoFgzGNnPt6AULULQ9QvhtEGkV874tnfuaKuwA4qc239bUW4pvySGHRphZ8bdJ3",
  "key25": "xsTLmCNbwYt6XyebChG5abWBw7xT7Q3Jk4WGx95gATk4Zr2WDVu8mqkspDzMmz9ysJzE9Anic1bQNAq9badEx3u",
  "key26": "C1iws2FvpjHkSUHC3EpoQ5C5bRvpNbEKymqUmdLrsiBu3wHjQnwSVYRg2t5GJz5e2TEkw2JaW7jqhfUii4w78TK",
  "key27": "4jV6E5gW5pe6dorgUCKf269hV9GXo2K3aRrShGq6rydX8oQy5SdUd2MjyRqpGaFBwUa19uAVMyfA4pteFu6dZ97g",
  "key28": "ucPnkvxirhPWhwdBiqRqAHTSAZCH2ZBGagX62htFqwthtXYC59AWvbhJtT7SRccQsjKYXYgtcsngdSRgVQssJmP",
  "key29": "vqGRqFUKaMqGXbShEGhFU9vvJD8uBVokT4Eyhr4nZ4vfBZpNzErCZoVJeK9psaxiwG2gwXd9HUE5UdM29XtjJ7i",
  "key30": "52AUx1xirdZRqLLNCta57u9trp93NYcWBSaXi86hqHVeV95A8UEY4WRpHuyxjhGMKWWfxXBvs9cnTvp1zU8enEfU",
  "key31": "4LbpVgjyrmcRVGjYyKYcaRDUqf6f3nxrn9tYfpANRKJnrZiS3fT7KDCTi9nZApjVc55orWubV5Jg8p3qb9USdHGK",
  "key32": "4doxtdPBC6ooyzrqeFyH3Fmpycc75cLt7SANR9y9wC26KZR6E7BPqFY7ov2Yx8LSwBxZHLnaBgSizYEMoTX2jmWY",
  "key33": "2MsgVqHPGSAHDx4FvZ4uEDbA8CzRcBLuitECeSdqS951zJ9rKYyUVbr4LGJw7mfU1iRdfkJzhiibrFApKDoKkFvT",
  "key34": "2NNuD2DmvgkoVnrE5PBfVTaBLnjZvy3WZhFfQ7h8Homksbqd6aCYQr66DNtqomppCDddZ8fRJiyPgNpE3kwHnv1j",
  "key35": "5pW9VYtsCtj4vtLvCFuRdYdTZtNUkEhqQ4jXiAL9qFXeiDBYTicpHPSSxSo7KExnhvAL2NziiLZdCTjELe5ZMR4Y",
  "key36": "2E17vuoWWEkwu7qqLrPNMfQbtXe44SWnAYLbHSxMsDQVtotDs7RgcRBiSEFu7TpwAxJHMEBeruZMvyvQjbYCLc1v",
  "key37": "3J27pSK3oZFDux2ppWd129g26jx9BqgE2SXciGajACE7fLqszyiEfjYLsaYBixdHUMv1mAZaRGVEH33ESENahNMt",
  "key38": "3cWq8MJ8VPcmHJRKCfUeTZiDMifCDrS4xPFuZexH3bZnousD425gpRHsNsx73iNEdF3VcL9BLVrv5gBqzR1NRS84",
  "key39": "WhdUSmAUzmGzHBHdrVrrx5tcn5ZNJaq1SA7U4AYCFffwwGLCJEtBGJYjezonbrKxQ95ag6NKuNdjBDU3gxckUU9",
  "key40": "3HgxDiojvMAuwiStoFGuKanegvbVJBbonSCpPLoGe2gxt3SP9fr7U1jTtKRwQsZTJ8GxTMrufTjvyHv9EAWRxgdF",
  "key41": "2e7EiXUXxRDRY3qJzwN2b2UUgbKiviUqiJjaogAh9YkJM1XP6rMpa2FRerRHj5KE4cJJf7EMvrGfi8VEVQWrnEXx",
  "key42": "53Vo4SVmKKQCwE9Tmhau59q6DaPjg9Pc47LfN82HMnLArWPrNnLDwYtFFc6uDUi1o1QRdSkFcdm9KZoy5DqvdpqM",
  "key43": "5kQy6kLskNjt18maHmi2NBGrkV3KD2SEiYZ2zsYjt2pCF3HgWw3e8MnFFL2z3RccKSCuGYvs7xDpkJaLJpEQkXQ5"
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
