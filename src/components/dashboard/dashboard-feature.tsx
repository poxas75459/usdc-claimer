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
    "2DjHMsDqrCr2rZr6rM68GM3x4imachr5eWvNQejmxCZV7HFvEbuKpXs7AurbFL9Fzf9sYRFvbwyPWgxhL1pdY96L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyUcmcDnGvSjp7D4jCS6DGsvMnWcVGqCqFqoB8NSa3weeucTyt8fxFmxeEpZFC2hDyKqnidV5o2icWAW2MWXDce",
  "key1": "52eB6fNHdfJQrpwNnD8xTMbuPK6xE8N64Qjc8jJHdK59Gh3HSCTnGBe7vQFNARLkiEVJBerWLqfYVjMNQBBwfubN",
  "key2": "5qtztziqJim4ry7XQkN446yZyqNini6FCXCPLszWwfpRiNmKAhqaNVdQaGXYMviy2TVGkb8TbJZpirjLQh8tbNjQ",
  "key3": "VtzWd5jBT6ohWHp6wyRdKhGxjh3obE3MEX3sNcM2N53iY7qdr7v8o4cfveNDoCPTyLcKVuhJRi9XZLak7rLVH1j",
  "key4": "4AEjwi2D7hiLooLWYL9KZsZP7gtU5h1A25oVeEPo2Cfr7ecqFcVokS7p9pYEBuNBS1RpjKfLCkbu3BRvNbehd8A",
  "key5": "2NXLV9xk8FCNtbaQY76ykeKzEuWfkYS6S1DC2uoNUbydTMRmZV9DdB26NtP8Y69qjcgHoww4eDfBycRvFietgjTx",
  "key6": "47LLUyqm64Cguxmrjguuwc8GCJAvXhk62poo8tY6PLFDuqooVYmqZ1e3Xr1K6FjRiLuSYVy4pJaGqusUqBXzFuzD",
  "key7": "4bFV272459kw1x6reLQR7q49pWi1qofmqiSnRBGgEtTLoECkWBP69u7YxDTZeTdKKWjj2vUksmjDf61qhwKWRdM6",
  "key8": "5SBm5AX2GheJDVhVpgXuqxxPnwDkug8J3FTyTSphvxwfwVWYfnUcstk3Q1zJg4tL9xLYNWMM3xw8o3UrHncc86eX",
  "key9": "R4hu9REYYiSgRvFWPckbuqun5khfVgbCkhQyzM3m32YKcUo5rhBUneG41jGWL6L1Sje9nxVZswcm9BnB8RNJ87v",
  "key10": "PgDSX4oAdawFLcGLJA6qEeUezhntNw8SQ4KEfMhuvndFQtTqL92174bJoFWNGwvxBNkbitGpaexCcHJ4v62q4hL",
  "key11": "2L4gGPBRDPPfoPrEfXTKuC5JsRUoEB1hu1JeZVQNpekEkbim4kW59ocTonTiC7qSXGqcUvkvhVsa8oumrex5uzM8",
  "key12": "3Wz278upu73NBuwj2hYe7LyagZNWHooD8HGNnkKV6zgwPwHnGQkr8QeB1mGFxi5raZE5iBimoCz1rLGLEXGW75g5",
  "key13": "5vSrXhyTUjrHECkrtvFtnjwdq12tsxwYLEsrjrZoTf5VTQG5Xq54tBp4r11YHVB3KzjairMS46GxCK2Yi1wxATZM",
  "key14": "MPfmGfqikT78HMAJ9p9AMNQjoxe7m53YQEp5PsJePTjD1YtU3mw7HJEy2EQPSjdAKUz5XFpGRw5jneoPzMPPfSP",
  "key15": "3SkzPrtZoDv1dhw3HeXWbGkznprbNJd6ps7yP1YaHR1LmTRgXVGYWoBjXksHUbFfNuy4NL9R2Gv4fR33p53fLb9J",
  "key16": "2DBGAJjKD7kxQ4FNEhhedR6Dv9m7g4JkpuwRJYvDWDfE6xeLeWm9W48i9wiQHgbqRniMwkUJ2fNRwoSB56PFrpnz",
  "key17": "4UmFJzSFapTh94sEEhxXpNQbrDYBNyqDjtyWcqTztxvzm3g99y4tSpgbTmQZhLLPwZnChQfU4kdZFWRniZwq7y3R",
  "key18": "3Lz3j2F6iSrUx5mtwcZtN77VhD5dEApLq9zyExxBxcihVqAL3iG1VCcp3675ipP2TM3s87fpzdBeVjQRxu68uAAv",
  "key19": "5TMNtPLHxEL6urrr9kwqm85u3ufM2YAUrM4Kib3pRuwEzChQdeNALGgNYr8zst6yaakQ3WgqcZYe51DyqneLiixZ",
  "key20": "2U1dVjANhK7zbdvKFJESBCGhq4SGNkoQw3ymuKasSwSudwWfJr9P9sVXd9MPtTLeQ3N2P6kik8CapaZrjRdyt3Mi",
  "key21": "37NMLU5YwSH1N4aHDRx3yJ7JTyYQVynR26u7zvaAawV5tXdzwYudTJfqzw3jVAXd6eDVKvzpAH5Jr7p52DKTGMW1",
  "key22": "5xLRtZWQEMo2KgD961q2LdYUJRZgNj4idgvs46oAyWcqEPSdkvukzp2cFjuj3jH9jabMxzVpcVsX1ajtrxc53odm",
  "key23": "2hGHbsr2kSPPzhEUceiLHx6fBcyh6PgisPUifSp5GdReuYDVYzxxGAx7phb8FhsoGKyAZ2Z972AbNRUbmdVEKnmX",
  "key24": "3qBbYaTotHwNBzv8zwo2QcsyTftpkQViraHHUrP4doEamw66juZPc7cGfA697geP7skgqVcZWusD6jYmnDwifxkz",
  "key25": "4FTHiVGRaLfzm8KSRDBFUf2e2BEqDEHxVNZWWY1jtybKyPpYde4tEruAa67hnW5ik1bJtkuUbLozVmvf87HRt2vG",
  "key26": "4VjVjE4HoA5FiPJMUSfgER5kmHxbCeocU14hTTwi6M7PFhcW3kxjVK7JHF7kShUiMvfjhs7dYi5iCH7KZhDKgpGK",
  "key27": "5kFfmXVrCM5ZFRcBDU3EqsuhrGkSQxebBtJmxBuvnnV2ByX8TvAoJ9MwYHkz774gBEgNZXz5H5JZYjCqLpJ1r4LJ",
  "key28": "3iAQAbCPLAg1DnmEXU4FxJNj2HbYymC15iqC5h1X9wJaqCLz5wPKcKfVUDjgQnoNZp4Gospy8GvRS4hMGRg46pim",
  "key29": "4c8xe8QjKz63pR6yhvYCVBet27JiFdw25w7syLvgTWbNHN7Da3XMvvZ5tfNaVUinsirJyGBKFx5RfMTa4emtPNiW",
  "key30": "4XZe38zAeteKArmVCCXAPnUNksBcKXEcw5LUzjxsBhNcAcSmtG2cFhezX5Su2zfTsWu79r1U8cZKMy78YwqnWgEH",
  "key31": "5YoN2SjcnV6pY9XKuLUixEcptUAvZTFHWQEH7KR8STj5UhUEUuatAwsNhWSrYvgh8zWgCHaNudE1kVEMEzNr7QBd",
  "key32": "4g4APiH3zvQLmPWrCbdmkz2r4gAwXpfJRUL15rxdytD3ADLnyAuqYJRMZJHVetmqkDhjjuJyJzkv91mhzRoAngra",
  "key33": "vm5WT852EjtPCJU4wTb197pc4RaDcxFNYxQHUaRMyWaAFy5AuNVujijEoJWyPQVE7FFzSATivt3x5DU8zpFc1jU",
  "key34": "3oZKooPxih1Le55Yt5EX1G6rewn17YTUU6baTznZFK4xGHiYbSnuH1tknkt66bAonHveAFkCgCtiWAgaBW9Rkag1",
  "key35": "bypADCdjvYQzbm943R4wr7NnFbwZxwKHiq4PBzcFo5y2otnfb4FCQfeqt7owcGZvk2kjUyQeYsXcNGbh3FdFoGa",
  "key36": "CqrTmuQiaeHL1aJE3YWHo5mQj2GBJU8NPucoPQczux9TyasPr96KuQJuRqF7xe1t4cJxZXBM6PCkZG2xYQh1Kqm",
  "key37": "5CueQ3FrEyJ1XFPEbrQywNWkv43xdwg9MypWq8bwjCDYDkrbpnpJogiEp2GkvZ1C7frAG3NeyhDQ91AFFDazmpDc",
  "key38": "Uoe8XjFW1hAmdUorAGYoYLKznZsHgWdkvHgXQhQJeh1kBfCFLmBwCnK5ssLf13E5mKcPtFDSs6NPbTmXCw4YfEq",
  "key39": "29PKZiwz9FYozqfVKvuCtynxgZWAUBnuP8Nk3g3xsQFaoEzqYAC9TXV8wqsqfYDjrudGhvdQeZGqGh1DeZmU1P2y",
  "key40": "4A68bCxPY2coQ7eAVZyjWybTDDiPgbJEmdPK7twz7oBexqNEbd3ZbyXP5uCcL2VkrebF6fhuZU2e1yR2ZT6eGkMt",
  "key41": "2rF6hXLw9t8djw8Sqe6SzSm6ymXiPRtsxtFcsZiaSwqkRbbNDgWR1kc2EbyZVN8yEPuQueHJXPzeYrWKXN98Hfpa",
  "key42": "Xhrj541PBJjgPsn9ehsmQNoogS63S1bvJaN5JrcHkiH3fX6D3yysMGTXmvHPHKSG5rQMXeJ68knAKh43SY734Q4",
  "key43": "4ykcDg2yWaseAqeJm8HZWxFTu55DZuDmPdTDyBCmmDv4ecBYJGGBWWSSouRYdRayHrqAqnTbQzbJPzDWtTrvbxdT",
  "key44": "2DLB5wi36cyMceH9TQddnkunTbA13Co3mR7kEiUHAWTjrR73MmkXx8eB5NVPStiLyKQo4i7eKvKaEuCLHutWSec7",
  "key45": "42MYR6HuE9Ppzy7RH5sLGCoh2ivVWvs9SMbqEQU3SRpKfcHhcr6re71yriDud1Ma1iq7EfbGyvnYi3VvQRwB6C1r",
  "key46": "2agMCR6gtN7ouCC2ifFeDF6ds6uPqr5Ea1eDW3AdXFPufoWzL3fkB8jkXhXmG1PqLffWeoSXeMkcmYAxoybkzpCM",
  "key47": "1iTyrfnzwA3wxEiEaohiWzrwskkBCh9pEVvuy1ZUvbkkqpzn686qA23uanznBxqwqS7yi1XSMqKVK6ARr1TGTyq",
  "key48": "5dbSQDj4kRPm5DSzRoYT9RW36SUo1WggmEtSbQRwBv5mU5nHPzrFvuPP34cRvzvku9gp5R7a3tk8MxsRSS2bQPED"
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
