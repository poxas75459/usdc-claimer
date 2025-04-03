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
    "25hPSjgFNxM1KqzxdRzEDqKRZnMmaCWfD64VXDL6a9DrzZR4mqVqT7jPvqxqXQCtoGPzL33gRQPAgRQTaxgQF82f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEEzAnGLUsTgeeWKkRBuQ8hfUeL94bCBDheaoZBgoc2rCSVskkNNKXLRqt5rGiTSjuyMbPz5PTVYgNKzQcVAphP",
  "key1": "4GXzaJJKJPGDw4iy8MQBh8xuUN2iSh61tQGY6g1QBufWHKRmvcQnkzqR9FUrKj8n1NgsiK4mA6W7BMQNoYH2qKTF",
  "key2": "RWdGV3L9FSJ9PszAfwsGgDMp42nnnwEmB3ojp3Zs4Ga4a8xLweEWhfEAJSvzWVsYYRCwzkF3Qninj6cPMsmicwF",
  "key3": "49YgiBWKvbiFLbWQ3DuohEPfKeJf8bFkAWAhCNUHqGmDpqXgdMFCNbX1pU63tRAnRMXbjUA25ziATy35UNd79EiL",
  "key4": "4hFfa4ZGCpoXkAVHmHpoJoCqpikgDnJTACuLJHpPsmQ8gzHDfJ2pFyYspTzbSidWsWx9BhxabwE2bntiCgdZ7mB9",
  "key5": "666HQp81kE5DbsiREkqPYemdA2hE19QhzNdnQ8As36oWf2HEvTZfe6E2tznRcw2mJTFgzxX6ZKNxSfwtvvx7M9bd",
  "key6": "35ZekvJt91Ltz2PWWJk8AX1cBkw1SBLUaYq47rcWNmWrMeBACzoKhFke5Ysmak4xKxVUSgonNEdf3N9Y1t8MBDds",
  "key7": "3kvQJEqMiyeVqk2Csmm1jPmFWbHymng1waYpasw81W7xqVsfRPrNazAdeXwQ5RHYd1U2k2Nhv71qpsz1Tqdhuvu9",
  "key8": "4X1eXnAXNdgYV5Uey6WAYwa1x9DTcTsc8NGurxZhCsW3gidjT31Fub7X4rpKbwKJogE45PRUwXuuGwjdGvsFH5Xv",
  "key9": "4qvcqwoSRvFxm9qosENJ1vDE6pND8nXT7Bt2Er7BZeEGHXhiEv3vRMTZHjGrbxBA46sunUSA7pgR5JMagFfjmcNy",
  "key10": "3VPpoUXuQTD7MK1yq48iBhwj3NgUN4wFXfbXB82xjQsZHsMHEe5n6aKkxDZeMRpkYQtcAHEaNmEUiQiW8BWQN9UU",
  "key11": "2w9P1KoK8cauwGn8xzWpsq2UCGnxZQemgABpKsSWxRzQ8GqXT2ttkKPy7cJu7bwQNKNDYiSt5CRER2ZJYYbYB54u",
  "key12": "4T6EhjSTgzY1eNDHtcvMHzU6qMYh2YedhMTKvmuXGfReWHfZAzZbaHPS5DqL7BwA2KKqe56wmv6qzduGz96mLzTi",
  "key13": "4EYEVgtaV1akMZXPCYcDbdJJ2iShqFZxibHm3fqdCURRZNGR4yXprQQpDJZEq6VPok4CMo1L8g5KffZgJJ86sRby",
  "key14": "4Rs3FPW9MsAU2Keg7BwygFxdfCtxSgrSKfZsWMweJVXgnQZ9UhWLYon62t9bf75Beeim5aZ5kbCi8zwz8YVjqFR2",
  "key15": "38zDTqVohYgqaoqEHYijs6YzYDzq4cVDMXb4umoxN4u2qXW8JL5pVpmGHqPGJArCC6JwcU4TjPmVHGPWzWY89ByG",
  "key16": "2syxGvrakpL24B5ZNdaerADBPFMJdDUAiS2E9aY8uHZXoF8bAJC9rt6ABqmfNTEJLz4LLKfvNA3gmj7wUDXw6Mp8",
  "key17": "2VddCdNAafDodubXHrpUwfEqU9L15MYWLXo95ZG19C1a7q8G8Mu8X8dU7yUcnw31ayNjMJC4DD91MB5zbDgkeC9p",
  "key18": "3sW5iaNBHD5Bga9cRUNy4nW1MNW122ueofoq8nDDMmpDhvST8vvaC82ET26Pcwnh9q1ZDPsm5Di3MJa3yyPLEXGc",
  "key19": "5deUGtc3gPwC76WP2SUEWW9D4HcoDEPftszdQfeWTJhoQZZGcZUbcoGcgqDXjRf26iJKpYS9bzf9BxFFAx1J7o2m",
  "key20": "45YzMX4nYWtXgTgN4vQa2h82JXox34XutatmpND577Nfiy158WipPTCwGmvPbV37K6bC5WMFBYbj2Cmr7WAMCQt2",
  "key21": "2FKdnH2ci7XRo8qqcJV3wfHStaaZq9wbJQXapuUpBJGfuWARG1zHgHTTgerDKcVa9ezHAfXwMejLuywRENTzEF1X",
  "key22": "3WmFGaR3wfmJT6d8qtC9FT2WE4v7jbkmVwNuMzroupCzwqeAbtY1UkCmdEycwvpp2EFmPiLpEqbaWnMW1f1cvAn2",
  "key23": "2o23Lm9ANqFY3XFSc1RvoEX5XGnKQV5BKwDpVbNcjCR4dDr21d7tMkyg3C1qZoqKY3rYS3BU3v1AqNvi96AzCbv3",
  "key24": "5hM7uQoNAMMzUVdjs843UjvaH95fBtWj2RbVshEwdXXspkWLyBpyddzKXVRvKfrQyXNwXh5QeCw4xpFTsaKZWW1e",
  "key25": "PxsPkGfSojMRprotfou48QJT29mMsSMa27Eu7aHL2UzFPAGC5oQXBeJsyRqQ1ochu3biNgSCcTxHyq357ojHxKZ",
  "key26": "5mHYXfgcyfckankCS4M54hunuZGz7wMa1L9oUbiceajqvnYKetmMFbJXrutNF8rbvgrbEtR5h2epY2efPpAARVXu",
  "key27": "5LocmDoXtVANQ5PvRx2573KsVNGD8J6nih2pKcVbyXbsD4DRjWLQipRZLjzShbf2HqaGwurZJwMH6K2pCcSW6Hjm",
  "key28": "4ezemyhdSZSo8r2D5K62wMxNCPA4iBQ1CyDq2hFuGUHVgKcYLSshc1M5vg6xFQ1mdGPxJAsunBLDMq8g3JtpPBPG",
  "key29": "3JHaavSP9u6bHfYxqRQf3h7UkV1qURFDuhTnp8JzRMtWLsmPi3KiySJ4K1JhoXG3dg22K6njvwyiKdKXQcPwqQMP",
  "key30": "CkpGC2DMxFHE9yDQ1HzASN58MGRnAr4Ru7Y8X4p1zLeGEzDbWzVT8ZPrNdhCFPQYczCxiTe4Fda3a1gs7H6trBB",
  "key31": "3ukmizdiLZN4WMynjwedrkYssoJu3J2yNnqUd54QLMnF3Ht46cpwkJ1EqZsKQMWPuRsEWxYeayXVavZZn9eiz751",
  "key32": "4EovWVgbjwXudR2TGudq5d5uaVodAiMPmA8BwkvPd7Tv3Yn3qdD31fnJB7NCa51KA6qXFVef2WL8KZKNyyUd9tZk",
  "key33": "3ciDsyTDVdUbFnhsdx4se9VuhwteAPWGQiv7U7awS66ca4asZY8NR4TZUm2ZTnnuy9xQA4udhQnpNHDzmPxCCiQ9",
  "key34": "xKPHYBR4NFb1NUoqkHR1ESuvahkxcMdoZVDbFh73bddftPpUk3Z9ao7VpfuFA9PkxWwiGZPcZHPWG26ijwxGVXS",
  "key35": "8AXkdkMwPFRsZFDXDkoy8yjVtCa8uMFpD1p1jwCzM9KRcgrDPucV7Dvu7yF22t5Pk3nbm9eEsZj3xtzvBSx3wm2",
  "key36": "5zvBaNUea8ttXyejcSNf6K9vDizMXXKAUFtQxKR26phGgxEZESosTzSKvnkhQeHTzyxJweUKb3dUx8M5iWxznBYF",
  "key37": "37ZsTXs9hPY1KaZaoi21ft74QEbgfJfmPTpTa5z8wYieJ5mh6eseC6TBbDmGcApoQnT1fL9x2nKph6Vj6gx4N12w",
  "key38": "5D3okeJAz49mktS9sPZHyLf7TV128LwaQa8cQ5oqGGQgo7qBPFsfbB3FP4jHo1RPVoRrnBsYnUdaSuzbgZbU3V2z",
  "key39": "2aUKSQuzissb8tioJcPb5a17gMRvMpgCARncu54Ee9Zca5nmMQKkHzAxnYt4MT9GzFKApw4ZvTVskWe1RWHxvafA",
  "key40": "2a9vhpNyuoTVzcbKfyjyhYboY99EHr521TQMve2aKbrVMQzWn43QRPRS4sYP5rPHBkVH2BwnQB3iynQC6ncapea",
  "key41": "Git6AnXnDJ7ES7dxRpMvC26f9drdFeZnSpkKXaGJ6xUxqdd3N9mCQ2qcyLktWCjNBXLCbiDekUVhSs9xspc7Ty1",
  "key42": "4WyAu7KTHfF7rReBDaVdPbwbjT31t3u8iXmfdL5ixfC2f93vHrbaH94SNBgaRxAzKkr2YRKxG7QsboPmVLmFNkBn",
  "key43": "687BQrwkt1Bvx2fGDTPf5FTjUnMRrBfmzVAqWFZiWkmwk32Xzn4yDkXM2y4cMDcr4e2nCBv29P93vwHSYmpM8zf",
  "key44": "44NndTAXzrpK1e6ALcX3i7JNBAjgDmhbk4j1d2UfSVNSa8NQAkAW6p5xZtTNmermXpHtcqR4medWr9fC7TcJmfD8",
  "key45": "VDZ3Fn6eGboToDEJTV59So1d2cqqPtWaa9hQ7B7wAruJ3Y16ytXAmeTbBx6gPJVKPpLA4oQJXg6bYPkAM7yVK6D",
  "key46": "4Vi83peVupMwrtw2vVDAiJCekZWymotfMRwKHiEj6ugUkKraXxcjcafs8ovbBjbaQC4teAy2QFv8qZuXpDUiMVTK"
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
