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
    "4QYBGqcPP7AZyDcLCEoGMxMzZv1g6XYWzxurzG3KqLQHYN9bA46pLh1YGyQpjtQs5zwMsWrwwRtjXy87vPq86gni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmxDK9wAjkVUFKABC7mmnRgxVwDWXkeYgAGGvcGHfPRP8sMhSxVfJGApQRWH6iuEQHBrYzX4vZ2Lx733UZ8hjth",
  "key1": "MDTKLgDNx8i84xDPNrRyx7sJxjBSRdH1ZBNZUkgwHFsTjkq6EtzJqsZNV7vu2KsaVwyJjWuwtzZrWBsSPCiPEwx",
  "key2": "HrVQoievRmirKVPgD8V2WkRgFVUr4Rzf4FVKhyhCBxW3D3Js2bZiA1uuEmohS25Jnh5bm3KVYvFwCVY4r9E392W",
  "key3": "mSx4pcaT7QVuq3MXRMEAaggaCQripEeuYqBzK8gg5QKR8sGKBJAtdLif7iEjV92qbd5qvwc2ncFrnL9Fccv54j1",
  "key4": "5vzVvXKhmTTCToAsQeKiLMnrhvBNo6nxNjBUTrxnhYXyoejYCu9ucjmu7WToDwF1sWDCFTfmaMCvFLGbW6Su2WMw",
  "key5": "4FaQpAU7zwfRJDeiwRd7mCzcGUUwN33amJX6SgGicrkZ9CiDnxZBKjLSsPwbnPSgjZosjqWBxnkDJSbkBC7cqvd6",
  "key6": "3w476APEJ1tpynBxLvExndijQv4h3zy1NmmBXmitX8YoHxhK2f2rgxczCaMTF4GWMaVhVdwXMwfNk21ZaU8JLPsi",
  "key7": "3TrQpHfFs9Nov6suoZpjdDeZbCTsjDBkQR7jdRh8L2NNY1xxSWF59g6UMTNEMdAJ8XfZ4MrwybdZBM4XjoUeqg6g",
  "key8": "3D1q7PRGnwkoKsCTRNeR43wgQZq3nZx3xs1VeucqxPL1KzyuPyjmAeevGpU9WwQbdgYwgukn9ssSFcDTv8gPngdn",
  "key9": "3uwrYQyY6Rpd8VujnbSvMiDAVMtKRthrnGQsbqxNkeu938jhuiQR8nbXSM4CbsceZKX2qiHEgca6jw8wajJ6MLA3",
  "key10": "5cAsWFQdDiGGxeTTADvztGTMR65ZaARdZrzagDoizfWUcuF2U76ohYLxjaggS64F2Ykf7GwEVtyTPbVq1rongzRw",
  "key11": "TY5ja9ehAtd87e64JJLdphSo3U79FxRo1FJdJmzbLNog1d3oMLtbZxsAP4CYFnhBLYbTihz3UzqedCfzKukPd6f",
  "key12": "41dDotRBcTs3bnAooUiPbbW5fzMjZxvQvZhjMqmMtmMKPqfLFNVMWfZmPeJVhAoWNSXg8gxhUfB4hWS1vez5qSjm",
  "key13": "5TgPctKqa32X1NMP9XPxov7UvM8aeNj622f9DLMfvh3HjZ2a3VVo6WajYVZx3RCiCzcKAmUuoHMgcyeifSjj1NDR",
  "key14": "UyKvGXYTCvrF9Sg1GYeQdbw9vW98oCkbhkVzrMtH3XM2ozivWHr2XVywGpfifcYsh838hAKuEXc4QyLuXR2jz5i",
  "key15": "4m2CYAfT5DNbdCKCybV9DaFEnXFpA9GRwQaVCjsfqCoxB34sR1hygbzDPaDtaD7TjrPn66XnzBVbfvpMjNc5GLLK",
  "key16": "4h4JUCzypHFPUtmK1WgRNFUr7BbojX5BgoBfVVST5sTV4bWCUpAbrwWyB1PTGqgAut67kLC8PNZBWUsnjZA3qXYs",
  "key17": "4LCiZVVevYesBGdP8BU5EqxbfHo3uMiAwSg3b1YfS5Wcx1WHFpS3Rm8wtbnSjkpCSWxqSQPPZ6cqWKjUHFZwdQw8",
  "key18": "5kotfo3dbToZkTmXA5JqG1Ugu1A8xBkZovZZVYS2bxCYqoFmKDpPb7oAfmCjGQf5iXDEyKb1UJFRMneMUwTMhAAv",
  "key19": "5Naci75CUsPxL3v53tRN98CX9hFRjQNHDxctHR6spjQ1TKx6kJCy5szi4RQECzrziimxGLhZwG215qUEhum7tG2S",
  "key20": "4PuBsd8wYMQjbpQye1Zqj9q7zz6f7nV8QEPZAb2vHKwThZvt1EdSEeNUzW2G1QtPpqiQZnnW2DhDEUXBSNRnxsD4",
  "key21": "pMoz5B6SrsPbrA9kwgq7aQzJTgCTnWrfrTwYoL3aSDdz2e6fo2BX6tag1EJRaLSHgft8jXaNg9Dxi7fz5by8Gxr",
  "key22": "3rc2DAcTSMJwZmRGLDT9pwCdSX89Q4mTCjDXfym4mA2dq8qb1kASD3TFzBpNjbFSESaAMivkSehbTA4j2xMKXqRw",
  "key23": "55oUes6V8RkYzLFwHUBYcUxqHbUnMVQapXP8RTZiV5x1zTwZty1xfL86QnuGhHiV7ftzt6Vn6cELSWp2TEfRfqjb",
  "key24": "3pzCn87ttWSEvzMpRPSVjTHLZwhQA2ujXk6LKfMy4sjvTkRVvv9WdGGQR2PKH8MLgUB46Yz1uiWtYJWceGYQmzwD",
  "key25": "2BqdCMSJrLNS8j2aJPsQAcqusaoPXdeLMLCMxDQd2Yh7awmfDBV3zZXXPSyunpSHpub5zuk9ji7h9z8x6mbJtZby",
  "key26": "3gqqay8MyQ8VdKSEsQpNTTBM2vA9QBwBE2BaDwKzxoUw7TZaLxteY5wiBSwos1sgzbYs7tKyHHR3SpY7ECu3Y2zD",
  "key27": "4vRjQcrHK5BZD5d6uXdi2DcpVXv92SPqLLK1K878ovDWPgnGJTZssxf2DLwdKq1XyDcx9d64iDHeZZsFPcyrd4oB",
  "key28": "4zpL2QrmcpsJTPBnd1TcznzYwMwzCKBgm1bE7prkmtv3qYSnVwqZakdbLEoBLwxpCqL9rL5SdA5iGyyvswffZh1K",
  "key29": "2R6okR4AqXAZaLGMPLDvkZFikLtNaviv13ZBoeUbb1zUzzMyvREB8HKbwEq4wvuCLUPTvyy1rfCj1Qv5cNJTLVWM",
  "key30": "4GZs5Qtdiy1BRpamTTTqVu2fBsc4SVs1ULrSQKwwpd8WEBjr8y3jpLsSs6fpWR1J8W71QJqL76XLcVZdH229yVVG",
  "key31": "4JkgXxTZsBKFBaKp2mNKaQ2m3JdxotWYxe7yk2XisYozMQgZk7u4ZNPVTsmuWeoqHWfvZ4gd5uk5sbi1CrPX8TDb",
  "key32": "2MFS1XYbc1pQfNy7YMA1YzJMtRRTYR9RYwUnnCu2fxU43uWHsTxddT2vxApnaj4kvESssymMkRQX34zMCrsCJ3no",
  "key33": "3242Wt5StmWQZZZytuv57shzrwWs2AeoSW5Tj2aTXKf4XK6sVnwAGpkorMTckAKrmbmsnoq3Ssbb1V8RfTUudSkA",
  "key34": "5gF6CoQR8us4TiLcyRT9SPeCgPVJ15X5A77hsFUP4yj7zYCHpJKN1gc3XAtFkQ3UkW5qmF8UHdAytShXLvajfqWD",
  "key35": "FFTCgMyj9sdrZzFecgLhjwFtTGYkQrgPbGurng2Bsj7ML2ZxeJF9WvQUdUbRX4NXewcZPG1GerDgUE1GJgYRP93",
  "key36": "3KSWQW9xp5d95VCP9N2DL1MVMewZ3ELBRM7ehmpHfHRydzqiVGx2NbVvb2SAguJwVFsjE2UEDvJ4YJwLVVXduY2R",
  "key37": "2Pj8TQB2QzDwg9znxFAGykqswXj68CcA88fvSfWTiFr1oyvjYRHDFVBJuWXR6ztWBSiFTU14dwCpqbzfonYmXVfh",
  "key38": "2pTnxDhsRW1dkEDKGVSSXTPJQD1xgR9Ckc61XnptGN4CHQnPqSVZyrFj9xVPquy4Z4w2rAN5k7wUwqKQzhJRn3FF",
  "key39": "2o82dVRxUsaJvKLhLiL8qgv4FZZFJ4QVtAkfGQAc5Epe5r4Xg666RAaLVpFUNeT3gCfsmDTCwg76ti6tWVwp6WPG"
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
