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
    "4qYL5fKVPtdZKziC8uYMJVQQNLPzE2JNxs1RQMKjSUM5Nd7GAUGVP3Xtd7BWRBLML1SLZU92bYiVMoQJqY8LbXBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZNb4rnQh8awASC8iM5cJGstkM77Qyk3sc3hsvjhamr6FWLQKx2Qj5J3oyrdF8Br6ems1KZqfdanwY7giiV5LjK",
  "key1": "5LXeyxpYj4qcQqxdjz8akkEDBWBvCNFUVKCtXAyxmoKiH1RDDJnrM6jDrxxYePUJBrR8YSSmKuYz7nXTWeTAn9XR",
  "key2": "m9zEqnQr3gF88VqCg58MqvvFNsVtwAYbB9c5WGkD9NVkBQXFrfh8DfPiWr56V24qSKAtPx8VAJCC7xmzA1YioyJ",
  "key3": "2BQWLqjqAjwxkuqtqxP3Bz9nVZyU4m6QmJSzdFWbUdftnEao8pnYLnXP4qK5pqyVhny6WTEf4YEk1XVeVN5VB9ay",
  "key4": "4SbzjhYybNCM7eV2AoAiUwb8GwuJcVaR3DkMenQrX7bgVzc9YSBh1cYhKoRYaQRijikHuxL7EEcjMYxfEZqsdRA",
  "key5": "ec37Y6QqghV3dmm6fAoxNcdgeNYgSmWRmY7PWnUyQa1GaXeuNCnPjSFr28uFYb1k9rDTdD6prW7diUYy7Tqkm1L",
  "key6": "TcrJQ8wutsF7MgdFQyZQU2GaJcA1gNXChK8HHqXGqZP4aR73Bdhb8XNZVM6AwziGqNooc9Dva4xCBiUSwA5t5YU",
  "key7": "5qxrzzdnGy7eFifVjQNowAuAK2sn5w6BkwjihGGWebxn9QHYoPsNC27gfLLz3DmRMkkVdb6ZbZg3o2AFsSSyv7c7",
  "key8": "3XNa8PDmQgAfd6yz7dXYuBSAT5K7h9eAYesLiEysYNYARVG897nRY4XQFUtLuvgny3PTBfYD5wcVPDdxSZv7SQfp",
  "key9": "Nkt1mdJzRGvLc7XiGKEdZjq3gAw2BHa8ecoCLD6Qu4xLfdGBEUM81R5W2bYmNyCuHWxBuAvb2ToBYbT94S7inwi",
  "key10": "3PHmHArgLbNwVc1AAzvXM5ervvwdVCtj9yGUXbFk21gcetZ8NdvNzv1A51BtMPShSaXnZakfe9WJyzHGg6Zh37w1",
  "key11": "5Bga33KYfZfbSZAm4CM2NehCo5GpdDPtDeMJAjT2Gn1Lc5z8qed9usmXfV39cfnhCp6iBQFNQw43QmkGQWJkB5wj",
  "key12": "4Fa9hJrRpDq6n8LgD3GL3ZM48xRstgAiVdGFFv9pPQ1gLpoWEqDqdyAV8nQoNrCaykrPy9Ff9ACP1U6BN24bAiRB",
  "key13": "2oAM6CiXCRbpmmcFKRQ4Z6kXvhYPnuSAaeRahkHDU89Qk7oCcFbgA9cP4ABJzDewfG6rG2mFfBLNy8hK3nNNaRrj",
  "key14": "63Sgte7y5bCUYfg8Wk2Ha5uGo6K7bKbqhj45Pp1Fo6sHu9EBaXnb3odPy47M43bgP9WNgpHtKd65nUt7UXPduBCv",
  "key15": "3wEohj6Hw7K5gQKhMTbX458i95RatpgGj9mRLQJ7T48SVjgXynaxiMacxBkTpmVj3ac8vgTityC6sxtjVJLF6yrg",
  "key16": "3bvEGQk3KnsDQ4csNNxtPk9m2m6mdrrdP39PszvVa8jUonkDr7SrVcEC4tzi6riEe2HJ7VzzuMP5a2CXzPc86spw",
  "key17": "3NKWysg3GaqaA98Z2aZTymwryyoUoaiVvcoioQKp9jwtuizHYyw1xJZ8Rqp7choj2XJrPg8LJnoCWzG8VjmUNcv1",
  "key18": "3gjNUSi42Aaf1qGEH1jdexcaySQk4Kz6vyr7m6RLjpRJXdWuZB55kRT6gBXsZCX3MDuqZnaY4Ss3rXW9UKoRiUVt",
  "key19": "4N3Zd4DK1MUpEoSkivEwCkNMejP4D4C7MK5Eg3D7MXPaEkyanAapW3o1uvXaCB426T7CtErWEeKHJZbcgT5Sf9JU",
  "key20": "254AoTUGPrLoX42phHRwJre8gWvYVvYamktgi7qbe7KPgCx1Ywd9HaVRVeHE2Di7ux49eVPyRMs2n93foD7WUZUN",
  "key21": "3G7Ak2vpWQ4w8JJ6t7n4HB5j9wjLT3BC9kjU4nGAhLDTSG2MAtFTMEg99SLueDAGQ57XG2uRCxdisTDkcur2DTpy",
  "key22": "5HFyyvK3QL2uwo8rXKS79a7NE7ebBSw7tURQ3mA2N9FwURyMh8D5BMZWpwNgEtqVCG997DBZkKxSZ8pAe1rKtmk6",
  "key23": "hD7shigtvKGfBQnHWf98Ydcr4zGdUVMbh9Wzt8hFQK9wRUZTgstReCWgaXQLijtkUrTdc7rbxGreGk4TNJ9hejW",
  "key24": "56dpLLh63ZJX4NkxCagyhoK2tBRPygccTCdNv23iiC9uNQKYbr6Y3p57ujhb8RkZr5RjRBZk3qdemoS2hN5r8DE3",
  "key25": "4Q1aH2MXzEqbdvpfLMiqdUVkvbixAQbdEFvse1e4XTPYb63vNos6evBqUmh5vPEAazx3hDiV78BEdZnDhcbFviSE",
  "key26": "2TXRFKHCHKaz1CnYAoFRcuLKVEQFTG5vr3W1yB2KN4Vqmr5JkFxCCKzjvk6aWQaske27TFeR93RGqSA97D6spktQ",
  "key27": "Sox58Ht78tHVgEwTH8ev86jyk9xnHMUgiFZR5JfW1mScLCrbgfVtgMmUXNfrU6NpVQ4MzWn9LSazN6CsDkvg6M7",
  "key28": "4DzDjv7WNUdT3VX71iLWoBnwwTSwL6UhcPeEopDuvEFE51QDZuevoX48jBQKo1fyL4wSS8dYhtREJTkxMWnF6Hcz",
  "key29": "3VsyMKR1e7g6DRQiySiHtz6caprSh5WuQ8adrd6ugfu1mGbQdMNgbeKfdZ6bfghuoFmmPtSszM1VeqtKEjEaezwq",
  "key30": "4TXM9F2TPim145oBTNi5aHwYiKyxjrzybX25jssPxmQEW1SrHGXiTd2411aWYCAtQQe82iykipG27guoWReaXU76",
  "key31": "5rGiWRisf6yPtxFCgGzFSUs67K9n3kxLrWdoU3kjYdzLyykiiebY3UGT3uRPDBRKmNFqQG9xMbao3jk3MAduoVKC",
  "key32": "5B1qwhNt5o2LFnv6r6nvbjLrxsHfDtaxmQJ39mq1yZAcUfSM14G1mkkWjvNz175yJhus8z6XBWRrtDqTJyYQBYqC",
  "key33": "3vQEe1d26Y1UxxfxRzCx2PcbPnxoPMWiLVEfQZ4ZuCEejNpvPJrUUtPiGAgVUH524GtoKMsuZktDARTUifVq3MYz",
  "key34": "2ES8iVTj75s8dMkEE6VLXkkkcb9vx6p73ror6uRE8MNFDv5YP2PTffLDE1PjKHqUhJ7bTLLwshnrrsohZsVuhKQi",
  "key35": "3QxX8MBBkCqxP3NZSAsKGsZn3GrWhczMisedoD9STf7BsimH8g5BAbkBA54eXY563TtLVt5sdcgkCD25LVYZXytc",
  "key36": "4f3zBwuiwvk7ERaHvpY3JY74U8by4KyjpHT7UiMUB2k5waSF7SwNmW9Q7Rc911pkcARuZmmqaSYPXL56oNc2aWaS",
  "key37": "5mTSD6GPDp9oxR6r6eAkxwhf3Rq5RESt12nCGyuHXStiC8cyLfXZSupb1rTsMWwuR88H5JZwBaHWVWFRG8PyL8N",
  "key38": "65ncCRGWFvhQwAbGQHcWRLLfSgCK53drxxZu9bxyUiwJeeSnFnyxVnvQCCRdpodULvni3TzS9e8CrnWinK9tzUL7",
  "key39": "2foruFKXcuMUE96afyqRaZgi9ZfZ4WhGJjGay4ZHGs6qqeW6qdHZUVq1piW5qJiQHQNbLiFSm54Lcfnw261xk26G",
  "key40": "37Php19qaCGzyDH1c6oFnBzBaf5ygkUUzoc1m8Zef7nPXsEkp9CccbtoTRkjYQYyfD9VndJygy9eFfUjPDDhHy9",
  "key41": "5gPWyjA1n1TcWM4oe3HWPC1nk17cKnm1WcWMTTmXKYD29rd37sr6UsN146fzczxY6v7vLTzSD2g5jLANg4VHE2tK",
  "key42": "3UQbyMkgnLz6pLdknM2ghASDeJ3QeakeHPf4LDGc4JCWhEmSR9TeqS1FXpx68RSKeh3jDQfgsDUp56qcUzbQFdSE",
  "key43": "4GP1cnqtPZeurcSqqM5EgXnSvnsMnKfX4Ym2BDVcCsVbiHoHp9Rrd47JFe6MNtYaZxJ8XQjaKNywntiKaBmA2JGR",
  "key44": "3TQRKu6gdtxUV1JD5bT3HJmPVfHbnk4jCgKJB6t6JfEPKHVRKRQ156hBJLcAnKAqrdpzRNBbUKtvb9udKP5YPyvm",
  "key45": "33eejxVHAtj3DucAhaWikT5kS2mszx9WpUKWAuSyTmuaJNHEkU4JYXEYCLfX9gcWEwEcgUmrTCARAUWo7rFM7Y4c"
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
