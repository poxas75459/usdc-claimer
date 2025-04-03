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
    "4wopTsYGRsc5a2xsAMExuwKk5ixq3uYvsEwbPnp1vTPWqo8RpFXuwBDzZKxv8sRaQaAjdtU9EzkRKqTs8RgxTevq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVQJL3qxbzEWQTK9a7y446yAqyCZ1RFYJpoed6dvp3dQtEbFSCz9U9ubruuVikYthi4a9vFxCsmKMboKQdUQoq6",
  "key1": "5KZk9wonv6b4FAp9yTxkEkZUUH4Vii8BREonuyVVH1Mg1NgxtQkFwqQPzBzvVr8zvxryJ7NLkyDPpHJ7DQ7PW5nC",
  "key2": "25aiBpYj3Nh1w9k86JCd56FtuBiirUhkU5kPwkHnMfWstLzsvDvfknnDpDfrZuYZnoeZHJHhz16yBq98iwnitasL",
  "key3": "4XfdVdBbeA33k9wyYwjAE29KDWXS8Lz1eCSEyzHEVaS3oGaeTihzvABhjGPPcf76QMfpXscwU1kZCJyttMFa2vPj",
  "key4": "2kVgsRbb8zLeLzSrC1p5UmnDEoYqzS2GGu3G7kgEdTZA7FELH2fUNiDmURKmJ2NfFeycdxDBD9as1QUs9SNmLdG1",
  "key5": "2YiHLyR6N9yN4TXqMrb3yAofwiqKPsh3EtmJkSoBLY3WRPitnXLkihwHYGjF8HoutBw4V2xw929ZgXKk5tpxnjdR",
  "key6": "QevvGfqiciNmZvc753spbSwHaXJSKQFCWupRZMfY68SfpbkjWbQ2GRfdg2Xy8P6uA3YHZk2bByECVdFUQ15fHFL",
  "key7": "U2uwjs9U8LuHxa8JDsoTFSGCKVYAUkefAfJeW7YhkBT34WTSR9TxrUameMFzjJdkSDjfpu63yykwErWB2KHpLQq",
  "key8": "5UYMUhkLA8dTgoFERNs7jat6jdoaMEYpPXBHCZCsCqMu9GpDMWhB1geBCLzdCB1aF9b2etk7B9CuaQkQ1T7fBy9b",
  "key9": "4berJ8JfSVzQoGFbzCfyLmyy4kQcDtyXraJLaS8AFz6SzgzLiKpyHjMosjDPqE8MeWqiaXzbEbbJXARYUSTXPpJP",
  "key10": "2ze5KFzKScwfcLYEmyKioL9pdBJnzBjffTx5CZmARySaj1vWqYF9h3yzHED8ixJ7JRW52RLvdYniqRGjhRxsEr4u",
  "key11": "GT6B9gnH42qNPhQ9YunkWFeEHMLiuZuriQdD6WGuftrforx5zmy9TrHjR9nRLFoQknvfQEQvo2RFz1NC8yhuvZH",
  "key12": "2atcXhS6fHtTPWqtZZweLhEdzUrK8BTwQVnapXjaecQtSMaGg9QMeZtEBswYkKvdd3h6ba4e7gjfAyoDfQwV8rp6",
  "key13": "3U3zsi26BZuxeS6F2yTBoxFiXjUj3BoVGCEAkStCjE39xVrUuDSgyXuCTcQAq2bomAPwp68RWChTvbJRYkcopkoX",
  "key14": "3qTiMPENCFiTY99PsckrKtbTtmiMo5LdVYQd1XU1Dq2Rv9AVC1Zt2oYMAYWUFiS6WBHuoixtGT1LGSsMuK2HGZ4a",
  "key15": "Fao7siFNsoWPnWY2qdaePGCNYjie5BBxXDfcHS9cz6vCpT3zsA6pJ5VLjs7ktQHtb8RE4dRKZ5Auw3AjZBd7Zm8",
  "key16": "2PCHB2a86HpzhHWy2gYD24FKUExBibek7jSbXomTWxrp3Qw5VezbqtmJxLjsFG3CDtdW6BiP438GuJTuujgmu8Ai",
  "key17": "5vbTjZoB1ppy7QuNsTR9WfncLtxdy6d3vN2LyqM5Ayz51Gs73ZyfGGZjbpBh9w6qGYFiwo1g4ADLhwzG4n1GcKtf",
  "key18": "2ntajXoJ4Ego9odNHuf4t8CtUSBZ8tZPymUesoxqb8CzPTXXSbdMzWn59DjqaBGWZuroYELCqo9mwianTp3fiDJs",
  "key19": "5Zg73qkTikLe5GJaqsAUEXaWN9HaeSiJAJEkuwG2YY9rwH77vGsyxk8GDAf5vJrjouZtYbtEX7kmr3axenVRVYT3",
  "key20": "4LXWPJrzfBrc73UrBmtYGCnhyUgvPmetYx6dDL4LFdH4bZEXov6sMstSHEvExZL3EZPS6EHzY9pBn6n7qRodErZ",
  "key21": "2rRGUTAxmUABo9rmJKWZCpXWEJeuZVj9hFf23PMS9KcjiwozgRrnH4XKZbwoov6Hp18hdusHdF69gSdVn1xtDH3F",
  "key22": "5Q2DzZ8nycVCv1SjVUUSduieyGLLBNn4H1Z2C2Zoa291dChmrFt22HUP9VTaD1wiLDu16sjQebPpUA9Sczm4CsAq",
  "key23": "VispwJeBFwvNiznHJcCGhGGKjUj62XaMXVbo6feHFMwFM1HxLEra7krWGhziaF3sGRBPFeRgd5g3u71pd8pUdbd",
  "key24": "2BzocdvM84Ux4ZZRk1pedYTrzbrry5n5f9gXFXru1CDhok4uRAS3Mx3qizXaKmYME6X9dnDSfEFJGigmz3jrUR9V",
  "key25": "4SuZVH3qgoGm3gEa4SGyRXCNM4fkwnijUrtSXfcpKMtvnN3fwHaSum2RBMNy3r3ywJKhLcn9n6u48jxAtfiZyhoA",
  "key26": "27zDgRfZv9DT1sKxrrSTLVoP4eGDzaqoNsi2XMsMENqDSSRJT9MvJm7u94VixDDFdAgJ6LNmcXk7Ddprm4YjidaK",
  "key27": "tdKqYCwpvMiXhWGcWMyLib9Mta2GcEU1uQQMaPWTtQXVDRNnVKue6NSSwBHKxcyMGvt5VNUUbcMm9mUZVwinD9y",
  "key28": "4DP427As2SQnLbBau6X5FY75gTsboeEdgGbtrQw6JdZgq3bcGQg512jb1yyUVjTVYUPSAdKwgyUUrcVWUKSrzeNQ",
  "key29": "6FfYvBBmwMmJUkqfoiTfW2X938BuJ5M9ZJrQ6JL3LzYsZ132E39ZQCa6crT26HV7Ph26MGVL6t7hFU628axZJbB",
  "key30": "3nfcci5tAsezQ4N9XCUyJtqJvDu6XbaV8f1ZGiq1K2PRCWYwTs4qyAHC3huNB69ParkRthhthi9SfpoD6FCnMB3q",
  "key31": "4uZcoyPstxAhDpwUJQdBoWNtSdh6xzUdPmjkfnu9xguqmgRkXJd5G8yMGSBNJDQ9ypM3BJaHPid5VLUWf8xHa8BP",
  "key32": "4ej6qZizNmrRAMY3Yto6mKuwvBV3Kbe6r2AfsNptb3dsMyD6FnsUrp3hPinZdHvSJzCDPhhNh3eTTYpGRRFWxzzd",
  "key33": "GmutiJoKCuziSyNhqFneC4pHFf9huQj7J5dxA9sVkfPy87xrePhQCvT6MjendXcTJDRAreke9qPDawDSJ28M4T3",
  "key34": "2SeCWFC3sqsxKKHwzNAwNgoCGrMPtRLNtLAeCHjBHXvbTyitX1ANPtKF2b87ChignipxggKWu9Nk1fKcpPgg44Z4",
  "key35": "49HF5ApAMgDibqpU9tJDx7YTimxDcj7vyGMvdKFMB28EqrpZWYU2cETABMAhp4AghWhF67RR4jXbzGT4MtuMCFH9",
  "key36": "56isyXBibwWcc1YWXxuSQYrtzZhDW7pvJKgEzrfrWspSjbu8otc1PZZUkGFKrTGgaag5G1kVQ1Q4frr85HkTrNt7",
  "key37": "5DLm9j9sKGXBUFQyCBNnW2hhWrgrGVcL15kC7c8NmTLzbLDr2W7WCwUCD2cMBbdzpHJ5pfPPYaqbEB9mnEtAdjYP",
  "key38": "2p1WVptYHJ3V15y9vFLs6t3NrP7XSUS2V3ihR7XGYX1BdHBuYcWLuMEQUqbSKraXdxetMpANAYDZdCSCt96vTCmK",
  "key39": "4SpCpRyz1mcaUE2z4gkEKWAmatNa8ypB8fQydCbL2yVF99D7PY7PpxjHPRtNuwqqiL1SBwzLDNFJ57m9or2N3K7h",
  "key40": "28RSQSMumn3sVgYQNhyQswvMDQVZbCVCT3Xx6rduA4VLR4KDDBqq336eq9Lq1JPtmZ3AcSeKkfcKVfa8GpPd5NL2",
  "key41": "zfBxDrvWErDM6S4Si65Nx18Uu8n23YGjUjwMVVv9xvFExXnQMgB6S3YLD54sV4zrk2n3QjKvBeuRednAcrrWd16",
  "key42": "24aRqR78CWNYZAA2XoQFsV2PRQhUFZXaXWYaggafCW9e3z5Z7YCF7BpsUCJvbYouxHYeQvoe1sa784XncfXRMxLA",
  "key43": "2bZGKHYstkZAscSCwQBZNF3h7pZGzFuU4qUK6zq7gppTazJZDZaTPbbKjG8XtE8EYamxTk8vWBedpBdvGBXkjyex",
  "key44": "nBmwT4gA8zuVPZH5xxMsCcqL1yMFMNs4ovKhBL3EigUvE7kmFPsS3Qw4gvckvm8WdGkBzXZ9feFmCX6UVA7Gu6G"
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
