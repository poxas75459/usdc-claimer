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
    "5pjcFo9GPtiXuYDDXkJZpucAKgFV6xZ7PEyzK7AXCuJsTdpoWTGMAjR8Rmxhm5jFKi2zFNLCGMzca8GPrv4WBngZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dg9ca8xGowFN9wV814gTDJVqcNqyEvcpfvneoEpcbfjcbKyefNHhgeet3tooQAp5mxk1iQ16RYU5jVkjquBugSs",
  "key1": "5Z1kivyMirRMPwyojLeogZiFyMksNdgaQaQQtKG9ZuCmTA5Z5Ewdvs5tfu1jSKsbzvsPZD45NBQVqPkL5id9JVAH",
  "key2": "3BZixj4w5oyEe73ZvDFdKthbvEzAtDz6ZNS6zJ7VGoJtaWSwx4sHke7t2AoX8ztVMmAR8m1gDExN35dD1pHhCwBr",
  "key3": "5zWcDApvZRxVYc3xsJHemZCWbYZEnXPfn3xS1Q7cK1vY91V7aC81xpA7UcdJLJXYkT47t817zY7J331WxvAymmPr",
  "key4": "2ydz6CMNJUvV3rgCWViDb6S5hsQieaJ1iEi8SFhkGXx4nmNad2Msqd8aDNw73HnsiuXSEPTjR9f7kqX6kwt6qYwM",
  "key5": "3EG4vMfMmtzfuyECbaopSBA47hawAjhRGt1GrM68cp8DkhMABVEM1Fy9REtMYofSdsKiEscRuoyLaVugeGGfrAs2",
  "key6": "47fcaNWVLuhQPdWPzrnWDHp42zgT3SsW4MWANKe8TH8uAJkZnRvdB1uvhLNnNAskbL3ufQG58yP8eq6ifZhjWeMD",
  "key7": "3YcZDgHRC1pqHd5LwhNQirsmMyxs1wKUzS2A6AWeNDkFXgG6UQTfPKNZs2AhYWNNZyrGbYCYgLpAH63q9652iwFQ",
  "key8": "41nqfLf76kjxvAzSo88qJhqKvvb3n7F5VoFJPxQVwwog8wzcrLboDnPoHy2eY9Wb96dBZcGgLgSzCnzkJDr9kz1j",
  "key9": "57Jv8QMvduahVpSYQwauRcNwy9tpAepWQQbkisNT8cu7ENoziMDUsdsSwvPpKWJNfxMp3YUGd3aiCSNvnuK3K7MK",
  "key10": "2HHMHeadcEBRrjtMSY4a3bXK4wWrsF3bw4sXp9RKM2G619djK5pEWTLRSyTwPokPDXBC171vNFZ5zX2Cs1Fm66D3",
  "key11": "5CMUAAyPBvXpkE1oVtE3bjV8fgUf2pLjQEkoJ4FN2jxLsahaieHXLXsAc8iWhxDVQCLdZ7WARGwchMykwkZg51KV",
  "key12": "1AFNNk8K37Bad1yDvnqSxYfiQutSrCpDx1Zo84XjGGNFJsTwNZ5yrih4ypfogyDhVLByyLyffmEw1uLGVS2Hovk",
  "key13": "2EKQFGPzV12DzVXjnoJmW1TfqidvwazcQSztFAAwpvjdnzxvMTcR9KqxL6VdjLSumh7qcKymC9p3NY2sTvKST4MS",
  "key14": "4FNz72XxUzJVfCDvFrLAKd2VKvaN9r4AnAtKBvs3xWwxHFMS55wSe38dQRer5SH8JkcusiKkj9rs1vjEtjXK66xg",
  "key15": "5peMGoGxyxsnGNqJpxxWA2bvF4hiiM8cXChmz7GKoTVohYKzwN7dX1MVxnRY1HbqtD7kGkchgr5bQjWyr4djTs2u",
  "key16": "2Zrym6Sy52youQKcJV2XcUrnJM1vGq85FZ3WsRY4tRxN6KcShTLnBCTtd5GqdmUjJpCBy64a6eGFVKNQdQg9Mh3j",
  "key17": "2wnEao6WkP6QNZ3GPP36qHrA7KQRSc1AN4XgHmdW3zn7mjw3cDmCedTQSwLK1YGjw9WqZkghgLSmSvZNSFm7Qkqu",
  "key18": "4Td7oBr1BZtTpwWVHjLMy8jBSxZx6FmsMaob4VhWvriJBPXVGVwAQKUtVN6qob7V8HPMgreSznuUdsZW1Wo5w5a5",
  "key19": "56Vp65W2tnXKCzSqVqHkXEyJRudYf23ipvgCFYDCskJHwcDuQX3YFgh7i73g5PZgFSm48jwEto3Myjn73JF8rcpi",
  "key20": "4juhtbQ42VvCLCkSsZ64JT7eNS9TDjUZX9UMDiPG7frTNnDkZxeWzeg8cfBXGp2W24U9DRWS5UVmFjU9UZJqYc3v",
  "key21": "3Gnt6HvPfBsPM6Avub94dV5BcYGsPBzDXSZfvr1FrNptaEsFkyuCbcqf2G5dcpEJhxhYpw8TGnZ5YvmVTiPxHacr",
  "key22": "4gCrwv2Nerm5WLGwt4oPCUSWyKoaUw6hx7wJUTyWWDXyXHBego5WebcUyy3yLtyZ47hwi8daeypxoS1eFTRZ32cc",
  "key23": "2zApZdfZkxhLNFGHZFQte1vEp4CoBSVmTzPKpGxKWDY3zXqeG7tNYLtSuSsAAqUaMsCtgYZnKCx14SkYhNdd2jmP",
  "key24": "4Q7bUcub9HLRp5sMBuQEdDrjDeVE2X8sjAHAuHj7T1f4CRbbVj1H4PWt6S8eiZ2FfSK5KEjFaPJ3HYN2FGQ2BaGE",
  "key25": "3j7ZHJ3dzxUjvKkkBzDe4WXvmHngp974cH3epvez8nELzsMZbNr16pdzTzppcVxyPyFeXcYV1KoXd1Vm7VHNNQsX",
  "key26": "3T4u4MtkzXRqTmkXtQV3PGAuPChR8AwSWAqB2EJ57V3bL6NjdZyWACzzEmoixTBnKsqxW9KPCkjyqXpMBMSpMTdf",
  "key27": "qszeUhQmHoJsBNGH2pQEiXX59kXEG5qLivEeF7GpDDBV7KAUiT19NCtDy93NsSn1ZffYPvW9tyvfL2Gxit7gQ86",
  "key28": "5MbVd3krE4uHoGwwCrs9C4RrLr5oshTX4rucNKkn18WKAybZKUxKRDWbQbRvBYmB4zW5Ue8nhYtoYKAcUbfGkk2R",
  "key29": "4UArpvwP41yQmkqQAh7yc9Ss4eEV81nMCXP9jcymbiTHe8ck9sRLzuGG5mLLCLYh9Lf8ETcfdg5UMcL5hN6QfzVC",
  "key30": "4zGq4T1CBMBuFHXAKCnLvu1FvpdGu3nWmkNAsyZmY7mg6PYyyQuGsmLjt3wvs7SAcs9XCcFpvkoQ7ReRUbbZnRAu",
  "key31": "45qkvSYg56HZWrr9ambsJ1rtqCkCWkyN5PoN5vX847mgbppDkLsvFhSRFfrc6Y2yM4dB9XeTayfgUmEFFtTgqLSh",
  "key32": "38ANGkWNTCj9KziAiMBGkBsTzMtsZa6teHGLPVDXHvVwjcvC3PZF9GUSFukwVwdmKK5BEFi8tDA2wteyuu7vcUh4",
  "key33": "g6opwfetmD5eKZvckHuza1iqybNRuvuWKWNLHmkhxZHfPknwoRrLmbf6TQ2sgK846NWtUfqJTYMB1LcV2rppnye",
  "key34": "5vrAP4ijTy96GfV7nBAUeitLTfk6WcRgsHWnyUAdWdCKpd7jarDqAe5CSBShrojNxMNi7qCmyL7E2MDn7LBWTR8G",
  "key35": "2VLnjm555Nbz2V4su4n2ZJY7bXhnhitumj34VjrLYgFm6UifgSPNgmr8LyY8TkHnCVjYjL1pMboNNFF9pDJa9rha",
  "key36": "5baZtcmtwcBRDFyXkC2VCSGn3VvvvKDqvMFQTEVb6AcqXUm1JiJHun6Dz27KydVo1xNBsnv7Wjktf5rRfn3g5wSN",
  "key37": "5JtWtYyCHQnsj1qqBxMXTW21KSbGCMjLUFGDKtuKGRgoHxJ2ZKCtyPWXg6kJV44Pc7tM2BrBa6mvgxRJRzYKcxmG",
  "key38": "4cHAQpxwov7CrrxJqweaxkTsMLmkeZeTkk6YivYCF3MT7JZLNiV6TceJrMs4f3krtcFGBKJnXMV32nBiu7nGFbHy",
  "key39": "2WZjskeZmbKM1TvtxX5WnpTakZ2aqaSvRHzww7Yc7ar8BV42CeyicMFTMktaAMWMEDQ7PxrARL1Bwn7hyk1Lzu3b",
  "key40": "4QjXTERehR15Vm5yazgZZ3oVPzpZorg3WiX91k4mRsw7Lbp97bF8JqmjvLxcFHdhz5D87fLkiTpzj397kDq7xJHU",
  "key41": "2GPZjs6UqekC8hqTs1MToiLs4sJtzSGYqAhyFaPP7NdEb2cvMvLckFgs8fK6bBuUfXzWnJYqV6b3f3TZpVf7ZF1L",
  "key42": "2agayVGtn4GY7CzNJdYcMd7JdwjaahAmqRKUJnkwUAoaXXYFFFAjwEaNSJQRY693LFBzqxzuAHeK8QerKhdPXvwQ",
  "key43": "5pejAqrtsWQjtphvNMn7T7zK2U7oevynAuXXK4cNqMiXdcoTLs6ARCvugjAcGqqAgo26ExvhorxagfMzc3exGPYa",
  "key44": "4HD1MHHQ17wWB6rB6S2MTPdXjcivrCL9S7RafnCZ3SRhb6asRB7bYXedQkQHR2Kg4PTyD5CjGeRDmyzysivvaZ2J",
  "key45": "5HCpBrg6ZqRMj2fcf6d3kujF88o6CTLyrVdt8FavtQqBxs4h7Zpovh6bx9see5s8oKX9TsDF5JzuoMg6ecszdxuT",
  "key46": "5WZvDg5j947oZ29vq3RF5yxhSBMPEWYpiSppUTwEwqg72AK18wCMh4tvkxWFHxcaj2MzZ2Lfciq3mcCgQc4KdoGi",
  "key47": "4ws6saGNupxCxN7bvmh7Jt2iuPZwZ6XLKcWgYY1ZmnnXwXDejrXhRN5zqyuYYtMKgTahEuwtZwa4LBg3MD5mFZQy",
  "key48": "28p79FF1NrferudcADzZJDX9ruC8JKxvodA9f3PuSPd4ZemqerL43ues3RwioKwPV2rpkGapXssqaLrdvjM6d9Z9"
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
