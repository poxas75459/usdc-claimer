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
    "3khKt85c72oK85hLbbb38FzxNVP2dWtG9SLGunPCiZyqy69XogBBPTxDpSEhFZrvyQKUjDmzevczzUwi3JTTDe9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QPiK5arSm5JFxggfEE9UoyhdCeokqRTR5yNKvyQp389okQsHPTnzja2WbLrAG9Vfwtxbn2uH474ZB44Fyqi4vRw",
  "key1": "5uuWU6CP4kvUFaxyK3dKcr79pgk5myDP7RjyhppYGxxkNof6TGsriCDHKNae9rZNmxQTW8KDdhbMpfvQMEqL9M4c",
  "key2": "4BbUQ1PwTkGerozKmvgkW5iZQS3CryqLnDd8cAriz4zg63NYhhCQG3mVt5PvzFtoTw1mpmbdtaX6sdYtPXqZXi2Y",
  "key3": "37fkg51qzzocXoe9nwX4QHreTH6CZdtwvDw5pgeoAHJ8boEGRMsqttvQ1swzKY7KK6dmYfGMB8ByhzFYUf3BgKTH",
  "key4": "49y3JYBYyvFA2jFGT4QwYjCVGmvawjETZENSSEDy9P34F3DgPsdez25PwiPC5JLHmuYL2zw46nzGkNfiza68nUHi",
  "key5": "3hTmp3p6dGXYeTPNmzdYR8ogQpu96LoA5kFhP4tgqRrEDfNPENGpWHy1M1VuWQFpKjv6956zY11KNth8exbdALhS",
  "key6": "4SEJBLVNTgsZudfP7oSPf4efrxntZ2PGEiWmQrpwYuo6oeuBah22ShmoQ9hav5cwD7RavmNJ17yPFMmC4eWRy6tE",
  "key7": "3tio3zdqn2oCLSP6dqEyHjxipKMWJyFahCEotLkCnPAZD4D1RYJTokvTSTbuuNwaUyjZoGgv7ZtS4V5mgzvzzjwx",
  "key8": "4rxSCnRbKjQuYzRbLgtffFVygZJF1MigfivGaFxW66bvnT4Ph4ADGPo7XvpdZtdVgXBcGZHoc3nSAmA2kDunTxUA",
  "key9": "s91ERtm3NVTjf8hJaqt3Hq9VFQchuX8uRibNjADYzN9Pr2ynnb1RGxLG23FshqMczX6U1BzTfCxi3dhjbiWHniw",
  "key10": "f7e5CCsmcVAHx1xkDoidxfv84yqfeDWXnoJ65E69BKeQnrN9qtRU4dWXfrMnYeQWbFZQSogvc7jKmKgSedfCfiv",
  "key11": "3ffd9B9HV5fsff5CSCapxwDdSZB1SfgvgaV3ugCxPCDzxX46okqU2FVMUFMcpLFuZA4xzrUYBKZ25vKtCMyvppge",
  "key12": "3XkoUoY8hGBQYxeuToENqEkg7XJAFizie4drvGEFED3QDaGUYqKL2zVcF62jgQzK2tVTGEr6SoRaFmhcRHpmeDu8",
  "key13": "4SZES9BsfCeRYSVHoanyLMdbTdL9xrNL5nm6QYXugimgWXcQCdBvXJxBmX1d59oobqzyxiHtWLDExBiqvpR9jvVk",
  "key14": "3tJxi4BcqVFAtRRfm3raUnDjU9mrgNiXfo6zNac2QhTez1VnYCsNifxbwzGX97nxRjRTRAta2W6CVGtbbRcfnAYv",
  "key15": "5a6V2F8AcHt3jtDDiepWGZAHmo3hwVRc6CqpsewzrQVYv1EmGL6mnv4fn8a2nMp7CYM7EnNmSEjjaNjE9Mhmomsp",
  "key16": "2JfEuypugjAMXYSgVnc7kpJ2vD7LKPkRqMXgrTjJbTsofsphNmnHFLXKVW9GXXKmCz6TKTT8GMhA1FQD4MiS9vFC",
  "key17": "fiMAzod4N2cZU8DvfY1G5REejen4poFLvXZBvX6Aw9r899JnrExFbRraBETw8BzdBDSNHHfkHnhhNnTfFn4KTbz",
  "key18": "379UAsjppaEXTxBdcKuidpfNwk6iFtrkuWKeAfeNBDsSybRy8Gy5QFpW2zvxvzejpvKExsU8PjJn8SyUT36VXqjo",
  "key19": "31yemVUJxH73fhprW1xCxPwHAJHV7Y7hzsjaLoDYBUUX742ebRsjnGVpdhgpS1g8cAuzcsrHM2kdk9wRRNrC6mLe",
  "key20": "yuFzLCCvb3NN6mgfuVXRdBVRAvETrD7eDV9w3UG2iNy5NLzx1teLuaRStihKArFKzNse2ZbTiYEfnXJnT1hF9Vn",
  "key21": "53eaGc4MZMsi45mzvDgwJ1ouPwa4bX9dZEhgYHW8ec6j7aG5LJRJ1eRZ193tc16TMrSBAm4bLjueWm38JWfHDeme",
  "key22": "2hcFukus4qdCFQFnz6yXptK25LT1z3GSUj1vhM1VH5a1DjQpbDPPCeoHa725Va2z1DkrhGyBmrizkmj3arWprbfT",
  "key23": "yb6FmYTaTnRav4SF7pHHP8AGqjBDmwPhyustQyDo9JAtPhzTZNGMPoVf2sQ2i2ZV9BHNSS3p34QggAahsnkuJhc",
  "key24": "APRX4y8NVXDvYKfTsgCjkownPAhy3TPxHsjCQXrrCjc4fGd1XNPkGcnzEjcVNWbTEQf7iU8ABTgEQrFVqWoepaJ",
  "key25": "4jENariw3bAp7JCHmtMuAwXh9VoCEtRPCks6K6eAkf5SRcba4FbThRpLQdN8mH1iLvwD3GxwQq5dmBwriv1jwc1q",
  "key26": "Ygn8ExApeyXtR5pv6V1tdYfuyLLpu1J1jDH6QRHXBJvEVEds8NgLfanyceQkSu2qDZddNbiWFREVJiVbM45WbSJ",
  "key27": "49JqAJEhcqdSdkmc2P3KW1Uu8D8weGNFMfn5bSdFgUuG1p3RoeKqQCLeJvpkaUuTHbcCmGBeh1ZSiu1gSwzytHrC",
  "key28": "3hSj4SJbbjGXhCEo8yeNpsbbw8zgLYf9xjvhk6iZ7NCWRxcpPw7zCJxfCsi4b1oDtyHX9Xu9Qv19cvYX9CMhwwVT",
  "key29": "2pAbcB4NB5U6tArCTBZkMGKTkWxqA83rrL7bmbhJr29brmippuT44ixJMsjsNY2CUPegZuL9nwoKjQQxqmw5Ho3Q",
  "key30": "XiDq3tQjyaCy5ndYuSTbeVvGsCH8BkFTTVQVjy6TMAUdSjHp8h4HeEXmKEXf1azT2wenYuuAMGbmjVeS8Ej8Pns",
  "key31": "5pRAbNu778YT16VaAe8Er8tXctPjPB1XEuTDYcwjbCWLwdM24mwcGqYEU8X9zSdTsvgLWwQZ3mU71VkajLyiiMhB",
  "key32": "55UiXKiwVFMHmf9M1zvWqYzkbBPQRxEYP4m6aR3uDXnt6EQ25wXGNMBMpTvuQY4mtd25uK33tqfNr2cVBPanunpq",
  "key33": "3GNSN5Q81yUL5jjo165cTEPoHRfmrKEXCnZ9gAjScTTn61K7czypWCGk7YZaLadXxuwc3sJAUhXNzU5L24xRjorA",
  "key34": "4x4vQUmztDxbve2Zsa24J99nFtjDHuEzCTEVjkHD1byKrgDVCS8NzXWqzG6kuGhYgMd7m3NVVkPpk25tBrWWgtpE",
  "key35": "4BFemcWh7foko7pL2dEzVEBumsH6SWiKiB3Q6rAN861wVTjaeJWwqLLSmix2sGMRaZB5YZsPWcctnpVUhAE2gRXV"
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
