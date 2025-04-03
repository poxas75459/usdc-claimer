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
    "5GX8rxNzG5HDbchi672Fs7Xr4d7VWVv6oLHsyC2VgtNpzC36M5gHvep7u24SGJ4PNRxCAdjRDxQTqavPmAcqFaxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhHM9ypaxuDRCzdBij7sWhBtapLkPqYnhz3AmtSfee7TRpYVh44hRCxq7HdSq3cEfDo8JtAwtdYQyBZx39m2oi6",
  "key1": "28ZFxstDsnRihttcmFDUF274SMeU3Akpqg5zi4TR95SRLwtf8SjkHP6BefDc32H2UiP2YQ7aQCDjgxriG8DdJnXe",
  "key2": "5TqxKPRksHi4ot3BtUeoEzHD57y2iu8Jb9ob8aEsTVC2hSfwsmpBGTDeXS4dn195ogMLw5K7oBhBunaCGB3JrTrg",
  "key3": "M4zfeTdKw3kjzshE3wqfaUA6u6UQvpf1EDosKDJjenMnaPFufNN7punDxxafwz6yBRFz6ueQT2KfbAZbUFp9g4W",
  "key4": "5HGfjV7GNcdpyyXZy2Gz9sqQQPiANg4x6EeRoUZ7z6zhnRfFJDPeHrnB39hLBsHoz2hXfaAg4a2MJwT6k3yFtiaA",
  "key5": "fkrwL57EVhMoqj9EDZzwbMBCTxD3LrWRA28gAjTaZdKbTyCC4PMxNmiytRyvqFfah3Edoke38FSLLDBCBj6RN43",
  "key6": "5jbH33nRkLsG4zJ8Dom9DuxVTF537YoMAXvTQ6kieiWrcBjuhG1E5G7y6e28MFYcdGbjQkwiqxEi7rxMuAGWFZL",
  "key7": "5YNAGgSFpQKmkue6Y1v5LNgyoN9QdqgxXbTWJRXVNGgMrvmaQr2wBb5PXpZP7edQUo6CSQjKAAu55uWnWnd6ZF42",
  "key8": "5cvNzcZqWSs1D7a1C1K8kh2dj9hervDcaTbbzAEeLXvh1368wHyDtmroQWt8v5LUXNavtzsRST2jND88EXterxEA",
  "key9": "21czHMHN51N12BXQhKm2uHiu1Pav63ALrUhA1XtfAdtneNfEfFFDbUFmxndWrxtcNevj22xmHFi1xscRHi48rRJi",
  "key10": "4qcCbT3dxbrbqZbK5xNBsLa9nhsJkar6sZSDdoN9jaaY5Tu9zAK2aT5tXcfEb4HEfpK5ZrhqFRN8KkvvP9GacYov",
  "key11": "WmFGQ35AFRtwayxTraRKozZR4ozphspsgWugho5rkeuTo7SYxaKJyGpapxKhKuM4EshAubTDjmdrftCeV937Xsp",
  "key12": "3vk6Dzbif4jpEtXmnEo6wiiCuSTtSDjW6tjvcdLWXChAhSckRUpu9CnPT3BA3UjhZGujhB6AU1T6TvKxTUpHttjm",
  "key13": "4U7axf6XJFqN6bhTzMzEyM5Kq3cQ6C1nK23jXwLf2FMikSvGZif9yCimJdavgU1uBpdkTWme9uTtsfy3EqvLzDRn",
  "key14": "53swoVACiQuo1LcqbwveDbRwz1ZL5ZUkwmCDhQmiC82G8ppmwirhrYZW6GH4jnKAoNpr47FjkpfvbmF8uHCByR49",
  "key15": "5PX4xyZEJqjwegTD4Q7pZGyMA1HnrbA95n4YKvE22tReY3P99xHvgFejh1q8WoNwu6Ko9MEutnUFodz2UNgnn7xP",
  "key16": "5QCjFTDkewvfoSozVckhaJYECsS31C7nB8B9hEgcpnEapkfZp2Ld2VpLumWzo542VjnxB3yVWeqKUU8rvnBGDsfk",
  "key17": "2sr4UUm5QGWnsZvkQXbGKZXnfwE5pEVacqJ2NiPbrcNrgPss68J64qUCp1UGxpDrtU1CNLuADmVS5xttfv2ugzYJ",
  "key18": "5FW29qz2pVgMRc1tAtAgoxdN6D86vNu17grzpwNXLF3ww7NQegpiBDTCXae9Zcs8BCe4mHwEatLjo4WuqoVv397L",
  "key19": "2hnHePwej25Uekc6vnjKivEEmfoum6dPUbUhHmQ16AJJT5tYhwgdeJWguaPsWKTiFr12UAuVCwm4WCFseaz9to4A",
  "key20": "5KMKXSQS3WEs6oqSmyLqRBZgwyscNwdpG1QCqrYeWwKq3NKYMT6LhYhMD6EKLucmRfGQyYnm4HYTseD7JCv9jvAE",
  "key21": "3w5iw7ffxmXSwbJzeTGxGCS4gcB1DuE8BAEGogrhEyCMvodhytsMa9NVBqPouFJntCErAhisfJgAbeCac5rEr5Ye",
  "key22": "4wpSCT8HSEYTa9aKecegJVA2poVujf3BHTaQJhpejEzvpDSTQwHPWmypMihfxkB8Kcgi66UQ1KDm9Z7eHpLqWxax",
  "key23": "AAtdEnAeG7D8yQaKuzZhuQMCgAWn1rrQWbr3Hcqq5ksDQizFv6MqWBzqQTMRGzTzmx1CSP3oCBCypx4V42Z661p",
  "key24": "4sNmySvmp8AEr7igfDffmKeR1sKpwhKLiq4zazgbk7oFzKQdudXvGAyTgVp1SrUh6sVwW6Rp1sg62UqmoxqJo61n",
  "key25": "SfinWj2tn9qBFP9APXAtjTNRKyFRyGhfydcsfLP8oU8HVWffKgaVuzFqDCLxoTvkL4hZLFoxi5HG5JJxJAkMFYi",
  "key26": "226CVgscDAxJC7PiFjBHbVvCDVp56PFSXTfA47zANnq1wCkb7VupGdXNrufms7vp238Dt7VxBmiGEqs4cjY8RB87",
  "key27": "61ustQAWQjbefejrcENgYHpBv4Zrf3E6rNBG5T5otBCC3M2Ezep8sGRZjcJa4uFmSgiTyDRaRBDVrcXLoyDtZA75",
  "key28": "2j8rTttR7SZJjvQzNZwRyiuWhUAKXShpmgrR6Wfq784eKpUeWUp8c3yEk8b1CyZZ2RgTbHqiMzNiyrUPArp3oaXA",
  "key29": "679qFSQHhTB3F7mvct3v3tmkEF9vMJaigazuQaacEZ1FVXzsPC7fmMbMobd68tY81dVn1KaLLApzghf4nJAXwHM6",
  "key30": "4fhSWMnhJvUQtXDncaUr2AJF59YwumtAHSyMpPgGAZgzzHMioNePfxBeAih8Gnx54Cf1VTAcDYEPnzFvJhwEQxMq",
  "key31": "2n9w7dZvNCEZYtf4GLo8mSer3oDaBW5toGZtzvhKLE62mUWRCQnhnPhuqVubjNCmXiShJ8WJphsp4yLPjaoHmJJi",
  "key32": "5NCs9oAJYiFGeXDVUfzYLSRSHiPpeQfrhRY3vkxetZLJYjJVykmc1VBeeFmKLNHAr8XUKJSoCjM7Y8AYeJtoyrGg",
  "key33": "2rXiND1g2kYtkF3UiMe1VTBPpNzBuPesaBwpiq9bBNsQu7NnXmJMe7Fa1AMWPXocsRBEWdwtsYHEPPM5cGxFYsZw",
  "key34": "5NB6fxJD1Xi9ZYUzk6fx8pMNrakF18E789vg9p9y7Wwtq2s7qYXgTN8L9sUb3K7LMkhwBciZv9W7vqqvfpERL9oR",
  "key35": "E55rvaJM2tXo67XJWJavGxfpn4KBY64PiQ15zFC5V53HU3cvePUa4xXhCVN8mfw33s88YVpWTHfsnQH7FDxsqE8",
  "key36": "2QoknbYeuwhgVJxznLc3STrbiQkzH9LwrUpQNyCi81crjJntDyoXfZ6AEjsNn42DAm7uP6BLTTEhQJzacNcWfwMi",
  "key37": "573cn23CFwbK2Lim4VRns7F6MP2n2VTvM8WZTQs2pgDeDjnmuZRKiu5UAXx9K22LthyWh71agsPov4sSrwnV2r5C",
  "key38": "5oW1CwURxYnwLBNPvgH2VU1aqE5aAGwKHFKCz8FxFe1BwL3guaT2vEQf3ka98RQMZLFLdsy8QG1cgFfeXBNo7K8Y",
  "key39": "5auUtGPmWwJKAo4TtBKyubVsJLVM8fa23aVedKsFWPFWmWyLixSXekGcYAaqE2ED2fTUpkhf2cqSvmZN7bcSwa6t",
  "key40": "3FMbMns8P29jD5qHUM4579dLpcHKJWzKmQceUNfP52QoRfvtgsnUCuxutqchRs5AAbjGL6jcpXBtBabnDPRgfMjs",
  "key41": "2EFioKRC7s9rwK24w6g1S5Aw9n2xgmG3Ka79RTbgmbzYuVKcvhUH2tpwAt5J3CwzmXiMDDuS5wwG19ptjC9gDDtE",
  "key42": "5aR7huMFcrX7dW7NEUy5xn7aS61cd2tPLevCnZ1N2uEi9PPeHXVdTHKo7id8kwG4aFCycLNVCV6XiqSo5x62Wbzk",
  "key43": "3rCHypSRwq5BF1mmjJuUr3kzvu1nWVb9qpvH3ogBbwCcUpdFeD4o5tuBBrL3ejVjmku5gd7JQ9XqLMq1rwfuho8E",
  "key44": "4HgJYJevKwZ2DdnANJPcDBjpzr8GqWbwWwvDJ1Zu1eKNax4DppPQUHaiWwjY5FvNdjxzJNfyyiNK1W3z9WqrCfR7",
  "key45": "63FuVdnqR6JE7W5Vkvw5RdnPNqzEwBHnJmtDkr1V3gwjNXN8w5kWtyj9C1PsTJe7SxvY3ojy91vqaJajzPFDyiFC"
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
