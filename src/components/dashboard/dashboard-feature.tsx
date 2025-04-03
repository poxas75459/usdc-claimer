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
    "4vsJRsMnA1XNw4DH4pT2bNAz5vY9zbDsBBzNHAPcJh4Y3wCTAb1ruDVxRasW1A45Wn6cC5EFYJjNSN51suuKDVB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5217B9KJJZNZhhbfDuR7zkGrCFvyZfnVbUNX1SKDWE8BHo9y87fkFdMza9rHFg6eK4fKS8rKiuLPBFKMYmpTj4k8",
  "key1": "2868jmuTyuSgTzkmj7u4DVi87KGrwsHJgpSiHJUHWSvsbEaQyv7wopy1baYDPbgMMnKcAHkyeoF8RUQgiEL1Lznv",
  "key2": "5D4ULRyrLKaey2toUvqaEro6nsZrieBCJboKiPSqMoTE2iZHo8TjKWjPUatx1oJ4jbPdF3Um9NecXen3rKdBfcsg",
  "key3": "76QKfw5uosbWKkEmTSpn26tFX8wDkxbMEqrB2hgJpW4S87LHYfQ8CVrrrHCEXZF4k4NBQnFs5G65NrTVQh9aWPT",
  "key4": "5HyW4rfizN1MMu7gqGevCMbRk87PFf2ECyPqMP13jKbGTaebj43mukKTRRwoMhpWAuyuWS9JRW3rWjz823TUV7ge",
  "key5": "34T4HGNnCgFR2y3qYWL8kQ8C2dXPRxX6U7BsMW48kxDQu7rB2NLjs8eXoJ8VqKbBzX6oWYx2FxHM5U9Wqtzb4XjL",
  "key6": "3PaZx2PZ2VaTczyEmw9CrXnP5TDAdv81DgZeRaWfynGcpyQeLY2vErtA7NegppQ2Ndm1xhG2AqMUgDwWaSfazEss",
  "key7": "azB7UjsP6vDJSTWwX3aVQTTuLFkNicanArBQPBjNxJPHMTPPZSW6bScEuRcRFg1L7L2AbP5GML6Tz6A8zisVJuv",
  "key8": "4QKn77v7h4MjLBWRMR77YxWbJxqFGz8MQifh5SDwosL9kCg4cpDmikaQrN6CZn9Sv4mwwthdNvLyTcPzdFu5FxQT",
  "key9": "5UYokcoJwrsDJefNt29qqW3PLiySfBJvfosmVp9QwYF9GRP9gAvfoTxDCKyGxacvFQA2jtD1jtrpDqQj78ifWbr1",
  "key10": "DX6HvuWUoFuZx38F1xPHPUAcPhiNZMyXAKdTNa4KWkWR75546YobzTDkWFfXnnsLdhJPRXknEn6yFqbd345YJHe",
  "key11": "2PW2ENyrGRA8szddRYgCPVSV6JauYjH5S4dQimFMQ3YPtCEZJgtNiYLU5mcw8fKAhuu3bSoLzBKdP7UnvJuLVo4Y",
  "key12": "4cgSdHKUydNtcCq3AERbdXRcE6bLsed8nA9J7xLuyNYz65eoR2WzQNyh5Mhw5m8LaVix7YKBh8nthdZWYXhitgvZ",
  "key13": "35vW1A5eKc7ikRWGfMypRnjfvw3fLJkSK2GckqgqoYHgA48J6xdTnmksuRk87Px8mVos9MsokZjWH3YbK2t9pZbu",
  "key14": "r87pJsNuLRJ3yP6gJJ1A954VCU4cSDrTZ7L5DtRpVctJtkrTtwT3sQbrh12Nsj3FG86y85C3ojGN3fDvMLjKhZL",
  "key15": "3Br5EutCGxAHeSHs5RLMyYUha94e1H4AiDMVDfGYfMYo12Jw3VU92ryquJvjarBnv7qCCq3nxco1smY4RSXef8M8",
  "key16": "2mBH2xL6XghvAxRYnKRmJSx3H4uKxN72uevpKztoDqsejBBm9FgWHMxiyF2WLHxTescCK1AKSb1iseh33nTSzKkP",
  "key17": "NEZqzRhVSaMUYSZX1XpZThYi7aymoQnYhN1yNzhwBj4uPgSuvc3zDtzYQZBT88gb8MU1nHQssKLqQCtCn8GcYJZ",
  "key18": "3iyxtrdUgaV8jSnoxAv85HZx7VfBZKWRVSZDvEbfkbr6sv4jyS7rodtbXiTJB4o4hvf2iHpLRmvqxizPpSzzdv2j",
  "key19": "RbB7zR3cLWYKcXdF9DieMo7oNYzSudB5bZmjkVLL1WpVpmkVXuNCgfG5LGxv6NS8BhYS7uKRsBPRksRErWna82p",
  "key20": "3aRk6WrZ7A6WDRgChHQDH1YtQMUUuTbXfoYQcFLCBJChNW2gA4hLB6XMAE3Z6YLko8x7Yw94HSV19atYEdm8uzr1",
  "key21": "6NiZsrRoJVPWHQKR5mKS6NMPZ1FNAMcTpkDc1qahKaJVjY2ri4z2tGMegiQ4x2Kx3PTv2GQknb7EMssSbegSZ2e",
  "key22": "65DcEKBnb1q8BpD1s49HoR3N8frQpGcKYHtrnrpM79Pw4rhzj5hqRq3A51NsUQUuWF2w5LGVyPSoyR1ZDeYch5SQ",
  "key23": "39JQyZHbeoYVeT9euEmi6Civ2vKL3Q2e324foiLi6Xf8SxudZT5HrHSboz82buWX42thr1ydPGWzECuR3Dar4AN",
  "key24": "5jUYma7ESxpXdoHRvHoSD1dnXswUZC7rBzjcTvYNnAR2HsestLvWpAQLxqV67Zz5yhMUt9VAYJiLXe3LBCo6ViDd",
  "key25": "t4oQQwPu1cKFR8Qj5Am39rGn6Ns53FpoSDU16UWV2imwyLn2w8w4KCRVQmvZ65x4cD5u3NyoGXyQphxfwEWFd95",
  "key26": "24ECPjX5y5mH7iJmLUFp5dZN2zsJQp9C5MTHwNgr4oxfdzwMNS2UWdbAZetd8BtsawvUL5vd1NN2UvCBjYZ8Lv7j",
  "key27": "gkDjiHX7WYeopvERq75jVk3xicZaipJa3E7ie2c3hDSJANavxJjfyVcixp3MV33FStbJ2Ywy54MrLXt1uhKHKLS",
  "key28": "36USAqCPEVqD4YGAkssKzVRS1ovKPXQwbSQAoQeFLnBGpo8BFaA8BV29sz4PFY44dCY8WcWSsUhJpNFfgLitfEK3",
  "key29": "3aqzAppYaLnMM63fS3ifAwixZcYFDAy5EfDzj8X16hXxq1MsAVBRPPr6pwf9aoZrwBFcSYQJvAvDuMNxyEqed4K5",
  "key30": "2h6bjdjpKqJYf3EpPddSNYQhds4svzf7tDqPQ1CZbVYyGK61EcdLpD1rM2ZrTXyvirjZnFsyWudjuVLgM7q3fGSZ",
  "key31": "2C6hRPh4YckP24nThh7s6FvftwK9MUezRwa4VBSR2MzxLzFvqwLsgDfc6i7XGtk5Lcp3QvS8XTRbZUQ4whEko9WX",
  "key32": "5zQKyLDwkgSToxen9scb4e8iCaqikudC7cmtxqgit31kkTaVHyxKHznCCRPpyCnA33himFUCdgURHC3HpK9BffP2",
  "key33": "4vxY1wviSJ5GEzJopD3uPq3P92jwUBfhr3Ku18n7AdRdoyMgGhEBRjoAdM16oDUo9BcZoMJtGnXRNUnnSK3GbJCB",
  "key34": "2mWepePjb34t5wM89FqKNzdDt7S9jWiQvNMDVLvvuHJ3RDgsWhkWz2EoY1orFP6gZS8Y5KWDYJkvZouUvfXxvcRE",
  "key35": "66uXFC6dj3JczdKSFCjFtsQoDWqR8TfDuYU8bt4syzxtwa8iEuiskHnhSht2N2T3xyNoWbhBJLw28hjmcCJcqEiT"
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
