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
    "3RFj5TQJY8ZS26yucVN6s4eMz5uyU2pf2z6DhvkPcuvk32NxjoXJpWoZcghSxEVRuoUZypwtnxsM1bY46vP2KK49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EA3S3nP4UW5sK4Nn7Ph8AGiZL1VJ847mnc7AGFv3Quj3XpuqsSrrfhmtrwJQtvbinyHhB7fAPgfaFQtuBmLe4Qw",
  "key1": "Ncm6KGSRQSwgL3Ko4ABL2Geqh34AnePs3zcUSiYBa97S5fMVA53RonK2RvGmy8a88Vs17kanLs25oRUQPh42iMS",
  "key2": "qYCESmXC2bBn3RXceaYHvLbhAnaY9sB94N7mDbLP6Ue6NSMi7q2RfVLaBHrwu1752yExWgtZEtnfDvbaeHeFopd",
  "key3": "34JE6NEFvUF1MvAEvBV1ARX81NWTEAcEWnhEs7FRk5M4nmkp5K38azZbscGbuCSVzyweqgANPEUfaSi9otsjbakp",
  "key4": "54D7gMZnwPWnwubtB4M2o2Jvo9upANW7gc39LXniLe9Ed6uyWqCqKQJ69xYRo6WRV8zCw1SFBegEppn4naUBJQZy",
  "key5": "3Vn5WWmkK6BqhmpbVELWSGpSCdnQqw1MtkrkwezcG12z71LGQEASajJkSUwa73t1W9dCzwYhvS6QaZ5RZjcv7dwe",
  "key6": "5sxYp3shDRLEgD6cz3HL4qEEHEQjP6ruX8TaRSYYua2Lun9hYfA7t3653edqugNXVjwR4ijUcRG5Tq1bNajz9q21",
  "key7": "2ppeiR4T6uqLqK3Y6Z295Qa68xQ6hgA5xUog2a8XmzEfqhZpzRzY7ZF2QwimHJgiE7m7FD97HR72JqKGu34Ej3WM",
  "key8": "5A1UNnBAFnKfnCqpL1nSBjPKPmoYFjKfzJTtpb2twobByTBf6XRhMZ6PBqDvXkHYPADWNiEwjxAVcAiK9E4AFpVj",
  "key9": "2e5VJgPffeGSX2JzCqbkskHjPV3A8mWy6pGqo5de9J91gD2Fr8sHqMqVLctKsAcqPuq15BnYn47ratGMRqG6cEgB",
  "key10": "2m1id68nuvfqQDnEU5BKR3Lh7JyGoVnZFSuTedFUo7xCeCSWCsRT1dUk2wCyWS2ALBvM1Bmi1ePnhjAdtzLxbgpH",
  "key11": "GcVtpEfGvuLnG4mqZmc4STcdrpMxaZQ6kMqvEdytY8n1wZKRnNes7qR3CGD2ri1P5h7kjj3VJ7PXzBesX7XoBB5",
  "key12": "5L1AP6eKre2xwtFVvpbFp6e22BGEDFcPThgtYYqomGUhXZ61RTpjWFgZssSvPXkLDBZXPCVZottRmrAvujZh1swg",
  "key13": "3KSSZKEn23HFaJLuJWFg95rEektgznjC1TxcWk2LXny9bb6VDEynM7JfSdoToQ56ddVcTaLJjtqSitFimALBWxyQ",
  "key14": "3A4QKZVJKWzutAv3qNkCRV4Xea73rrKfKApk1dgrji9dwrsG5RYWXivdch7bPLgMWmqMz6LJfiEJ67SP2YGaghFp",
  "key15": "3sTfSC7x9yBKCtKv4uXVE8RtWC7EQLgZMvLYcMeyGo59upfbCPKToL2w8gp9DdkQgNjQKXf8E7zR8LgmvNeWAd5i",
  "key16": "3Hwc65eyd3LKMmii2Z1CjQkiXYdGpMJYRxuuVuxNne5e8r8Jbrk6PEjfkejMEv7XJERUa7v7M2Sx6J3qmqyJZYng",
  "key17": "3bZsdHda2Z455ZqFSHx388BSvvjryW8XMnASYi4CsoZbPm27GxikCtkf7M2fHT6nVEVJd8gVbcj7GQSjh1zwXNuT",
  "key18": "4iUix3XFjua7w9e7MBwGQVkh5nb7v7e1EQsDTvkNws6kbcF6nps8J2CJqAVtR9FXFsC6LjqieK7rdnQYMLbNA4ub",
  "key19": "5xrtCzTYf6iW9ParqPqAaU3Lyqg6qXFG3W5gyQQxvG7W77uc4JiDhRaPtLRe2hyLXauHuK2cAMEoiRmpHBZKiEar",
  "key20": "42Qd7UXbLByaSoRzdoJWrJjsqV2rppG6efREa8Bx6s1X9QLyXUXfaqmvXGzfMAkGPQDeU53tG2tfDYv1CMnJwHAa",
  "key21": "4oX9YHaZ9BaeXsSHyYpBaT46P9o3UVwGx86nmh6cSMC5FxGpzE93rz8KJdqiiLuZQ1T24mEnt79uhcKPAym75Jj8",
  "key22": "2LNDCCfU33GxDWZAKiGP1CYZJ71n8XQrCLB21oDNng5uTzPWkvSWgGAKSxBT12uHThYDvAyhhcUT5P18agwNqM5x",
  "key23": "gjhCpMPhVXPFPRmH7AzxvsX6LZ1oY3asFpxaWq7kHg1Jb2dMKsiSvBxY6gzuhX75BAZ5Cn6Yr6zca8RAGCKGKQ6",
  "key24": "4oCAx9CHWotejjSEW811ftnq2CuwNHiMu2CeA3RDowMzkVQpeZW6x6jDaoCztqkjinbX3XwGCkTpnJtj2743vJxE",
  "key25": "2GWghC3G2vHkEHp62YWZFLsdt1FmBz8Pj3aPjPqtMadMy8K8f7JdpSAe1sdhtFpRuqdXtcJCS5pLzy8zU2ofyAHZ",
  "key26": "TJeUCMrLCqd8UsTxuHyUoo4ZxaGqUGqU4gdjM2PhdLLo386zeQkMeu3TV2KwaXrQmz5trtxZ6knBQUzrWoc12G6",
  "key27": "4zsSSKqa4d37ktXfcULd7VYNYgHuCK6g9QKPgN5N8QpL1veo5uVst9DZV1amxctpBC27qLexHgKzXpbVvvMnVN7L",
  "key28": "y9S9sr2PmHZtfKtVTqYaV5i3iYG347sHicaFw9niGNcHc83Hp6Gbxea2j6rGk6W8SwSpoiXzCfJ8eSFtg2fMyKQ",
  "key29": "9UfnLAbCV6ZBZFBBr2tDr1KnTrYTa846fi2WxH57fZf5HWamEDYdfb2a5y2Qo6X4SahnSztAzPF1Y9YZmpzmLRk",
  "key30": "5zNxZfP4vwnGVnujPc9jM19FdrGoP1VTneWy82RfdoXGrLpJmdPekY2PuJmueGoxRjcyrXiYUKESTFZEk8QJfkan",
  "key31": "N6KuwCDjZDQUHHh9arWbBNYT2hk9f4rAVkuDnKne5btWcigiMFEGJaotqDRzLmfctZzH87DRgFhMhxH1tgofe7b",
  "key32": "3Rts72xhk3a6JCsSwvDejeMQWcjnKeh4mJU4jK3ZBmk9CgB9QnGQDdLhDd7TKgy7X61Au5xyGR7Jve3oC8VfoAMH",
  "key33": "2A5xVCGwkyC6ECyj96duXiZcSe62ffLyUzHShicPMLQ94YeAPQru2znaRoEKTSXMpUtrkzFdLhSzYjJJMftzCcKQ",
  "key34": "5Kdr42n6NVRUvqaGa7mZxcAVxFKN164iacEqNN1CwRLAMXUPCeHTDsjgeduWMVRhotzXcbgxoszSd7KnChhe3JAj",
  "key35": "8Tnz73qCMJ3qur2deYMAv8VCUqLmvVn4hpF8UKh3N3uGCuEVPVScAKTqbAwS58u2Z5QXAXKGeLksXx2mR5gD2bM",
  "key36": "2zsrYp4Fhd3StfoapBm7X6JzdpdEu82kcFbNXRr8ZSeWERqo5LFtwhYnd6KVU9zdErJn9oehNxREw4fnUppAmYBc",
  "key37": "39rSgQM3WqSYsuFsyUXVwvuTZiTB1jeMTuiQJr7XDTQ2zBUBtb4dP6Th4kTFEsPafMS4jfgT4yUaZv12irwMsdtm",
  "key38": "2KP52rawLrE9KLW4ot8WG6fC9yjcptgeWC5dSGbmnL3wXFSWhX5ooLWHeyTaDh4PMf8Pz4hHz95QBnaUWhv8oSt3"
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
