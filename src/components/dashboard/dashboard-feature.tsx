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
    "3HfJsfpiKpBsx1jVagGHTnLjqboS23VtZJaL48rxFnt7e4SbuhakyxjFJTFN4WCN1C2bPeUXyu8BHumhQ6N5PRap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MvWPhfqx11n1MoNPLbSnhDGV87v6oh5uUu2XQqmhHPXp3h5tMfyxiWfE5sEqvzim2fg48uqwi4qrWX2FruiAscs",
  "key1": "5THJne691Nd5ckEAK7iDEWZzMLn34STdseoFq4V3HDxvHKAS19KfHsjrq7tNGuB3wS6w3yjznU6kS8RA7n7yqfpm",
  "key2": "2DNpsWuLXBjuDov8EG8bxL2FW3CSPJm1BECL2eSftCxPKMawBvzNF4fEVBdt63WA8ZZJ4z8Fe4W91JHEffWUSQSK",
  "key3": "4FytjFQzQJZ1h7vyrBeyZCMUPgMkxDPATb1RamxxbKXeo6faWLk6wsZRoYHxtHF2b52o2DeirMy5tQFFx7MwHtvA",
  "key4": "633EvRfCyXGBDSGksaRbRuthWkTyQ6EANSjqopCAmxuTjFuFcHcKSyz673E8JZeGm5jo8n8j97Hy88Fz4m1Ypkw",
  "key5": "5jyCEcqWJQiPjyui1WcgGVjWgDLQbDMAmKcSkqUxNJ9qQSv8X7af7tRRzzJr9yNjZEU1jD9B68aYJzoin7d86Fk8",
  "key6": "Z5cGeyLQqYy1JwGHvvxDH4xVdgJ9ipYLid96BkHMnEhmMshDYmNwFRc5zjamq88ibAJoKc9TvTy9bbD65dF7JV7",
  "key7": "cKtuQX79UUYswDBKVTRKSw9xu1JRu9wtKzKo6NqMY16jcR8v3KH84MbHeRGbpDJW5BqfNZrV6oTe8NLmJSJ4Ztt",
  "key8": "Sox35hUKNKBqPi2Zz8QQscfBhQXWpzXba3uXS9yNVWHRpu5uCibGpy6JBvxhe6MN16xzsDvqaxtfkywWd4f8Rdf",
  "key9": "3r7FGHMnQFUUoFdQu64vEFPnTZ9c1HsF3uxoiaXdnjwRvLchchfD2LxCzqYezHDPU3qJ91ToZDh559kb2jpd666D",
  "key10": "3zDM2hfBA2SYT3P6YHDFGKi3EBTiAKh6M9nwsobgRBnBGbygCVEzLAFTH4yK4VDvVi63Wg7zf3g4uvzGudwsQkuM",
  "key11": "3zphUifeRfqKNJe9aQHnUMM9r9ra5fRhEV4KtsFEcsiago3bWtWXm9VXEkQM3uCg8dxxRtVc3vc9MBzH9FdwTd3N",
  "key12": "5MdFCTC3GwmTkDUckisuznPMWBBBC1Pu7et9noarhhKdpFZb6JKfcvGALYWRvEztBPU39G3cNqq7GHy1CMnEMECn",
  "key13": "2WDXVjXztjerw447LsFphLZKPjf1fVEYaJfpmLFQ2zEikXHiubUWG3P2BN4cK51Hkf6yDstEmRBw6hw72L5TccDp",
  "key14": "5uKkSUNC5mk7SVvCbWDxEx7kgkErG7q9C379DYFYX9KSGZKmR2b6m4otf2Y8x2fBLG8eBhPv6FBF2FjLqKezMLMC",
  "key15": "2cnCWGfHNXZ4vdnPMowCfCwZqhbcZYQKLttTRdJTTtNc4Qzhf57zPsLxP1z5TsYPSSvoRBscoK5es98EXiB1dt7Y",
  "key16": "2Pi2yySQ1u4Nug1nrEVu7yp7QaksZtAjH4JXxj8B5cTuQbZQZwHJF3bvhLPyjHLoFw9iDZdPdxaVTnnPJqMbkknY",
  "key17": "4sbdCpbUEweex9nBqbbikNBRTEN2hMywAkQceYvuhoYfMApvBvP2RGUqnK2FbnSrM39BNGv7VRG3PYAiyMsU9MHj",
  "key18": "3bpimdBknxYREYDesfBzLuEPUNJyppYT1M5B8ZvjakTW9kr1FtLZa9qV3TAcDwPqhyGCMuUSPBRj4JDJLd38dp57",
  "key19": "cYk3GBjPjQ6qedo1DWePf33x6CMx6FT5UwKXqQjcJJVdxwTy8upXctcnPiueh5h999tkVYg1WpVekWvcv6ajaFN",
  "key20": "5bSEddstoo2R5BGX6u4gTEi9fhZUBg8NnVU8sxT7nDqUYwEjnzGdSyLzRnve2z7FYxLiscedJTVTyE8K8ndcgPho",
  "key21": "41h8esTsQyVR3ChMmf3QBrpCLJYhXggicEhBWuL7WqKGQwdaKthoTuTfjytbDJXXP2SxmNgGEbir3gA4tBPiMQcX",
  "key22": "3cHy1xKyeCBTJrjzxEC1xgi6Lfym75FrnMf1wqknbtXjKDGETzqSU2GHjUndyrYunf6x5MWuchMVU7CXTzHXC5yi",
  "key23": "c5g6qVVpxcF85oVFXM2QjJ2Xb7At5xFxrndDys5ya8G9CviN1LZ3VGrarAMerTZFb1vdAbVJ4VsvnS9ktmeeLgm",
  "key24": "3xsBamLDUvd58kWnhQFrxcFVDEcw2niGi44Xb1wDNoiJ5moDh18nHDMSZkFP6g2L6Jz5sThPqENKecu6PftHCMCD",
  "key25": "5onXzt5owCJvjt2ZgV1EPBeuJuymvySYGLay2KPR94YDytipeiLzBYbScKXWU4SXragtGPXMt8AVS6pyXd79mQwM",
  "key26": "TvFhL5u7hxxuMtjdv9WwKzkVE91dygen21Fj69QqtC62RsRFbdQnNJZ2ohpWMGkrXrsFj5meCc96um3bGePsMBv",
  "key27": "672kEbmqcnfG7HyCdNLs9NqmB4WGHuwAYDPiEPd2bFvBF3mUMcNM9co7S4CbnvMXuwdXPAoG678GGv82YTpHjH55",
  "key28": "3w7b7xCcTcXFjnnwmedMMwMMzuiAENoZG5C3xHvrYryj9ABpRpy1Jg9uKdLasNEkCDurpMS7WGfK4rUevdhjdXgd",
  "key29": "3VfZPr4pySngNZ8kw1VyPK8L7NY6N7z7x7c8f1n6q6FnuaQcJ144iRHtXF6WTSiTeKqEPLyK5Qwc5bNsrHFXHHmT",
  "key30": "9UtjWmuLrnQJSshi5GEV3cjbBgjkNfXzZDxznEuz7ePZjEmsWtpYzC5mNaULSLF7pnmqv8MVysGtqgz7YovpzBb",
  "key31": "2LavGBX5ZK5aYHswmqeBM9hWdva1bxGDaB1EXmKW1k6h7CTNHNLGAmY4aaUYxezZJCuqyAvAcFULUgvbKhhvjdq1",
  "key32": "6rzuSpqhrckqEzFPQ8z2JoHYEUfUDQyWgXD4tfXkrjWAu6bEMCkrHt8cM2z6tLcK9mHnDx9CQFWCkkMK8SzTqqa",
  "key33": "4FyaKYbtE3ntSw7Vo4BXQpC6n6ER8ubG5NRxDtKMenBVQwLkfj6zhGtg7wSXM7t62FQwzW1GmK9oWCKrgTQKiPkU",
  "key34": "3zCTvTcvguK8LzqdSQzaMnHVFAh6bsnSTurdUJwcLGTfPps7Y1y7ZVffKvTr1SPJqX1MD4Wd63ADSbhkU9n7Y2G6",
  "key35": "5nkcZ2S4U2kh5iXXaaLPFSX5TZBKSiNbZgnMyDyfNrdJT2joaisuU3xRBKwzoDBP4G8o3w2sgQLvth8fHvD4G7NW",
  "key36": "5httaR7ab95khFCZRrbWJ9AtLvkiZSBPQSDECptVdfYbDnCoQUky8XRJz7WJPU3oP6LvvVCkwcRCG7BAqb5RVM1u",
  "key37": "4jB4UTm7rpw1J6rbxV9hx1KjpbjJX4vUfm7rqnxh38pqEwv3SveJ7Qv5RGDYQHcYgYjg6jDkhLPwwZAxgUVDpu2Q",
  "key38": "2cPqZn4Ay4dEUxUEwv4VZpDqRbrwa632d8ZDVuUN8W8QhZuyfWxeMjkfmfB39Zsc33NtK8zvKTwgcu3xGiknCK3d",
  "key39": "2SBsaKjyfBq31D3DSQJa8AiMXa4fVpFcqzAvJV4fNwkSeTNk154jAWbdSkQ44NdimjeejKAmq6RdYtKKqsGGPLco",
  "key40": "2FRTTg94S6Uu5uGW5FYUc33UcK7FAYGPkTuZ2xgu1rUcqpY1BFQZneUcukBVbB89MXgREXx1gM4MQKPD2X2xjPdP",
  "key41": "339Hs4KLe5ro6BgETYhqt6aySxaVjTcwLGFpe4bHxLwBMNwDyASr9EHA7EKbExN4Rxt2uB1AUxbH1MufUEeHfrLc",
  "key42": "5Kke57mqRtD7kvS4J2kCKwyBKJY7PFKsdge2HZXzsHbFWgx3Xc9GFCipSU9FCF7PkgBB8zDreBTaYpqtdK66zYcF",
  "key43": "4DCZd1rKmJeNuvTT5Pe6CvAMz9Wopp3KenV9pkfw6cGvv85p6HAAvoXA46tBvJ6my6DGVuh3dyJirwdC3F6pgrSM",
  "key44": "4K5iC6xGnJRJAK7xRzL6Kb9ir3X1kJ7Q9f1zdi3fU6LcmuAC3YbC2rXZDDs9WcNcUx4Tz3Miz7GM7jpXAakv9148",
  "key45": "597n3Hv1Ck8i8jtY5kVdNpL72hEBzhay1LeYXMC1Y8iXyg2uJDMSmMkdPQXkP3AP39CGAdm7HDN51yhiNhGP6Nw9",
  "key46": "34hk8dimVbZtGW7LhrdxgrpTVkpZms8Nwf4njVALcevpCVYcvSaj4Xe4SL8KeNwvxeiooh8karzq1oxTskH1EFbt",
  "key47": "5ZuHjoHrtCbMn5aEA28ZGhEaTPAbZQGCXneqfZZzh5MnwK4imKX2fJB7SppQvPbX4cEaaNQpNBGm7N2N1Aj7pJbz",
  "key48": "5zKEB9oT2SbPikZvqvw9wjBFBR5bRtYEWajuhAYQt3yfHbeQF73ADrgG2TcrdQLamthsTf1BH3HUeVBPYpd4hvvs",
  "key49": "AvbkzdXfvamGR2YG2M6J5ppTZ1mjfaURDrhUzaaWBBU7gXHXnKVWy9XSaxJ4KYqadKVidZqiETCsS2FsGQaXRnx"
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
