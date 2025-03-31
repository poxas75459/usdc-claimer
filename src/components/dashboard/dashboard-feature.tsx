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
    "5s64mrABbvmXWHVDQ69Yuk84waY2NCnWWVW7neQq4e7KFvv4t3jgxQxAbTyKECsFR8WGY2jpxFmCHRvXAtebykgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KT1PNTwBU5To42oaQuyYuuGjiaVkLppQa9hX9w61WThM9GjtDDNhqt97HRFaL9jJnFDd81B1aoyH1XuycUu1svj",
  "key1": "UoSw9xUi8KXqRJ2vWAdd4qZsn16QMHUJJYpwMySMHEwqj75qAstgZmPCyT8oWRkQZEEadfh8iAhGbeNxNyr7wTe",
  "key2": "3JkP8sH3Y2Rr6GTLJmsQ9KUZe2zfP2GNVKfFxjRY3kNXkZPcZfCm9PbdXTFkWMVKWzhGy2HAKUZTLQvaXyTSHYto",
  "key3": "2ALboBWDiZQdPgTdCE8UxYSJCPekBZbHTargPNt1Qj3myzkP4wtkR18bcT4XmEseWKEPo5mrLQQQpHh1Ab6wDBLb",
  "key4": "3WfpXtEvcCX3v5nv6pffCQ5nvogP1KVB7agxyqtWJUFQANQh1btegfaxvAdZNW7ehc5m5jLEi46aE3qVu8BZP635",
  "key5": "U4TkgLTtiKNVH6cSndiPNneeqHpmXbeSoMco7oUVc32sPwNjeabFESq7S7EBEcsDh7SLL9FM8mypKpgqWKaYndr",
  "key6": "8uSRfrsnV1ULDYaHwL1xgCLtLqCvp8ve8suJRVibCbRcLKfEX6hnTp4H5K7KSMdDZi8vqw6EJtiypcAjmC4Ezrx",
  "key7": "5Ztj3iWJBfcP8WPFYAtSMT3oRoCjL1AhpJFuDRn6YMWwqm6XUrVc5AiZSUx5bzp49BSqfauoZkirmTkJuJ9EqEW8",
  "key8": "63Wgj6RaE5WTyFP7iYd3QGkFH2ytZSdWyf29XZ97L8Mp7tcpTqY2y3oVxco2TzDmaxQpx5ytxXUvuzvLqtYby2Lq",
  "key9": "2o1qFAqZdmJxLkGnLKP886kt43xnyYSfomDTy67jE4RMey4mb2J3MAHVXzLzDbHKK3guNXJaNHs8V3LN4hRrrqDE",
  "key10": "wTvNH6dvmNndMZmgGTP7Wigz6cReha56p8insqCzTRZ7hVuE7haJZSfgsifZTNymKFZQwBMJhZ42TR6eKgLTKMr",
  "key11": "5Ry45fRhBKn2TL3saawynH2uiJ3NaTGKr7ivH3Y5ADiijxZTz8ptMnboFZtLUoqB1taeRHUSnTAEpsH6tL5i6nhJ",
  "key12": "3CA8xVMMNA55uFFartu8ZTgy7qycKEMFfryZMedz4Kv52MEVXXZYmFvBBH3xDEkmiLA3kDnzwMjNER91GkB1LkEN",
  "key13": "4s7stnxPtjfTEu5NSYB9Tn26KfHDPdmgi9q2ipjNezkjXyAUmne8C6NjGd2sm82bpwyW4guAGRkt8hAF34BW9QhN",
  "key14": "jDPehdWVpTfb9UhrCXZ34dhq5Wbm2Pf7EX5rJ7TxpZRBT9VWVuHRBDt7adp2pYUNz5vTC6Rt1sPAKzDLdFVNRVZ",
  "key15": "4S7zV3FpD7LANJAgfA64LNq13eRLqoxvVKSDoDE233bbfwyU7eGHnut3t8gaEAabBRcxAFxvUiRVtYKc8zSBCJEt",
  "key16": "2APv66d8tSnuACJ1s5RpurzMtkRJ35vUHV9E2Sp284jLgtDDzwKqqcNmesY5qmALn1UvaoJYYBF7EZiWyaAtqn1z",
  "key17": "31E5jcmE4g8SwFz7vwYBzj8gJnogbDuizj9KHz2NmbQCPm4iWCVaNkxB3a84dxRABpsVZpZpZUwERRJ1fH8yyFmk",
  "key18": "5GCGQAmPWCWnjsUs48dC4kFSzYT78hFR4hzRgWLSPKg9DSiAa2aYUkSRA2jHAphwbzxmVDUZhwoczqojqUMaLjJM",
  "key19": "4TB1HS2J8Ca8JrRQnMi8gVKXJJHvHv3vAiAc7g8Ng5dPNBMd5vQjtpkEnie1Me2E89pcTVZSwDtxLp3c78BcUaLs",
  "key20": "AiF7doE7uvBWQHBTPW9bNJHNEZ2jxaP4hvjwPPFQnvv7PU12aoGoGxCSyqKkxsrwRejvhcuoC7ab8jRcgLTSBYd",
  "key21": "2fAskrN6atBxTPJauNmFcMits6XEjUxENHC2RP2txyDW3kANCoPffmcFyaJsrMEybvLP5RhWLUvQw4fEezYcqire",
  "key22": "3gKznY61i2KRtpvkx9kkWgf2VdQGhz4TpJHd5Q8t4g3zy4xDtuPFgrQXwaSKWo85ojwg4x9Vcj7TqgoaaxFLgeqW",
  "key23": "22Xk7S3qeH5dWgud8DgqSgRJHdXjMZ9xnH3RKTHRxDUSAHA2TWQi1ULL3vWEhtGYM6vQDdmxgLCgkJ3rwE6L85Zu",
  "key24": "FQxXaCxsQXCaXfeaohpnjMfpjfrF1eY4RwLcMADFYSaty98TGbDMESxA3ZYcBZE2pDzCmyDiNHi1NYTTnTPgPLi",
  "key25": "26SaWAJ5rzF7PX82BRosxKZeUtixJzoodYrAXCTM1UzxWxsf3LR2Resr5wfKkXmeNg2CXD1Dfvv2AHcVNoLCEaBK",
  "key26": "26JJP6tmvfBWZKRojp1QGm9kYXBW8a75bR9UHk9R4kQVjBWX5J8XVn8fUTuRsG4qa9e7mrRpzJSUwJgaKBSEspwz",
  "key27": "beh4Aqzs6V93DZ3idmoj2A9b74bPXSDgBNmxufAFDLduNhE5zYwivqaZVL7jtdj2smggP7aVd7WzbFwHTtMLCpF",
  "key28": "o6kaWibKQTY1D4MAHv2PXdpfoyg9JpJeV3z9mpKTudwpTaXcQeCoosCDWzfEX5sAef9UJ4o9m1MZRBy5dWQDFwv",
  "key29": "1JY96Stksw12o8UXQupuqkPo7oQnGudsXpLcQTky3uYb5Dvr834ynFtH13N15C36L6L8gkkELkkUUFiuRmybRcV",
  "key30": "58QSKCmDHJNVb3BHWku43BiUU5m4Ah2U4mPr9cwwSrzekZdFUaFTo3Re3nuBV2G5Uxnmbud2GzS7UypgHa9YtyK3",
  "key31": "PgSTFre5NHFGrmbXpfKX6qUdmkFghQLavavGKe4gYvrua57AcDDD4tmre9Pcv6DYVLoseZG7fJwrUq3FzwhpfQf",
  "key32": "EMGS2qdLEMXopKvJLPispnZoBC25yNfPVKWrbj9m4XDWtpENig3VnyVobSNMBZQNHs7UY16z1ivrvwZxiC3xPCp",
  "key33": "5a2a2uhLny8PeTi5UW9ds6rQ6kuivG7HDrCwEd23VGqBGsU4d8K6W3aa19rUMeU3vr74YCe1TNArhwggpWYoei83",
  "key34": "2vKjf9qntzGKsBQVuqiJqYCvYca9p7Ljntsowv3d4hAVcQF2BA83HyidtAoTNsKz1MraYS1EQ1tQbtPSXNmgeVqQ",
  "key35": "3YRq2hNkns3EJjaKoLMEwFPxFy2iKH36cLhtWwE3wypz3uFHPNrrzrjkcLFbzJ4y1N1LWUiLZMbDsv4QZbUcycKW",
  "key36": "VxqHhsXsdrbYzPHaJdpvscvrHrTxnS8Dcipf7cGQLeG6CkKSuyAGPTUTVHwEuu1xsnrSFPQW8nEQ27TQxvSwA4E",
  "key37": "337XeViLohbo5v9FoeaWtbknKqyZAQ4hV4R6J9HaYYUuSajKvJxhXP6Wg4nKRUkZq6kT2S2ujfa3vBjjPNZwdrLy",
  "key38": "58kaNTnqqkXvFhdJP47ukbE4pFjCXKE7Cf31wNjMRHqn9x3XCCVLo4fnux25XevHcn4fPg3nq3B2bUAHYFnvfjdx",
  "key39": "2Vbk9ENbATBS8gy4j8xwQCCAQMUUrfSMJF2U42ja5BYchoGFwjtNBJKMegqHi2HvBkuoCBSWPX5Ft2YskhG9gFBz",
  "key40": "2S3cFRdaqw9sr4xge88o6rfXECiXTagdjYrispA1L6vaQSXGKh8zh8VrhScDn94F1gj4xH9HhcnGpzFHmwd5rL4A",
  "key41": "41c6MKwZBMevgEoSzioUSiRbEqffrknmfi4WtFp3jJrcrfq97iKx3xPgMqPXqh6Hiqu2RBqrhmD1gG79vmfQsD9M",
  "key42": "WoGSmKQiuuQZZUSWmtWcw2MmhxECcuNNsRVCcRTDrcur4tePZGsvWoo7kZzkK3G3TcCtYjRtYpu45Nnt1WpXotG",
  "key43": "3NgnN6LHwVfeUmzzX6iZgEnkvHsguQngNLLqubja9mwL88CTwBvYEQZEXzAcA5CxY1hRLkwDBFikyDygrqQRCmiB",
  "key44": "44CCQDQpLf8ivtG3eMof7cuxrz944QrM4p9xNZMDyoAQuY25CzcUAYxtySizmtGdupgwy5m8CuCf3P3uxy8MAT1n",
  "key45": "5V22F6fjhDYuuwVBKnkKh4qMCSU67E8QRXyPFVVYyBgXp9XC1thHQGTRa4qcFrqjvHCpR2rtJi9qE5cQiM3a2efy"
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
