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
    "3Nr4YDbUnQmN9cga61J4dPY2gtokibAyeUqgJEZ7TeaRhyJjhv3SX9r94ryEAKb8s6VqjpX2H7YL16AT98WLfYdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVfGxWwohUCK7ztPsC1tWfNP5KHUy5TGEgo7MCfawCAptJoYVfm5JkXzeNzM95iGLSCM9pbrfWFpw2MeCaAFy3W",
  "key1": "39bjBGwfgvYWvevRcowtKFRoYofrmLogpY2oWGpwMQgqSE7nnRpJJfD5A1i1mo7a6VjkfcSMmMjWxzGQCszf3tkj",
  "key2": "Y9eDvAJvftyB7vfVUejfxhpU5U2ekjZBPjXDv1yC3Rs6WWPBiYx7qw9BQuF7mgS5Tf5sVXrgwjVGeoHGhb9aWh4",
  "key3": "3qTDan26s9t3kFGDEBLKntCdXYcoUPzZqLWWSKZrce3gnAL23jDQaAQ8vhzBwu73PZozrQNtDHrjXXR28HtVrCSK",
  "key4": "4QoTfKNaimCgqSGtWmzXT9ucuJRXFxLoGNPgFCavUdBirFYBW5QrQ18H7BcC8UqQxPHNsE3DjjwtNrUwggwFDBjN",
  "key5": "ZAMm3X3XF8Kpuq3R2NzsgHS2DJoMBSYZRi85nD6zjpYEaMvavt95hCQt8CoqYZzZ6Yah6nZYG9c79J1vWtgnHCY",
  "key6": "4PTgQ9CYiSxdWYyiMPfqgBy3Up54s9ND9wuzkDY25jufWvJnM9iX5iVshWm9ByVnH6NY7NUycXREbKy2NKQBUzCE",
  "key7": "3szWYn7W4iEwKhcqkwp7ehzDxrcLUz66k4dXSSoV3qqvifqVNJ9v9iyh7uAknvmeVrwd2wDjTbsaEr7NtisSCkG8",
  "key8": "65MQGbrDayGmJjNyXMx6NcvrLVUKri5x3zNpPYdojmEV3wgE4igXEmVD8H8JRahjTLdE2dxbiJ6iAStHaZXujTbL",
  "key9": "4DGFcqBpbJovCdDP2kn744EDp8bdQ7Sp6XwsKHzz2xnqEQZC92CQDhApcFdDGPLbpVADWRp6tHwVmvzytGzcxr3S",
  "key10": "4TZJpMZGjjqRzEJGB1JnSifz1VrHmKyogTaMbJyNiZA1jaZsdpTLCZPLA16XF1mvRGxEdpJA1mzgQnkmX5REi1yQ",
  "key11": "Jmdh7Q2Mnr8j7JUu4kWso5et5R9SpLwpzAgHHeJGCjo1PJqZNZ53ipaRReBRwCdYw9QZj7oYVuCazkmC8vyrgW2",
  "key12": "5QemCmjfZG5C5rAaEXPxTJvu2Ht4jHycUnZr9cDgGCweg9SpH1ZqjcjExsuHxtDWJKzZm62Vhig2nz98BfyU7Xkk",
  "key13": "2M4xi1fyepf3NZN65iKhFA3i1TdFg5nKASzAfTzPZ6kQWjTadCkW37PK79Cz5hTVWc8LgF19nm2fBoSG19kuF6tn",
  "key14": "4ttzvnZhPCrZjSipMrKaKEFYa7Pws3dXrW1NeQfm7pHw3gmkQz7bmj3EvR3Cq5Nf67cxaVqfyqdUyHpZU7BMgJjr",
  "key15": "3FuQ4c1ytQenN1BuJx5aZ94BMHBCN6z7Z9bzbnhM7MxQdbZ6CcUuwQkRY1WgQoHqi1cMYiodRg4Yw21MwYVQcUJW",
  "key16": "2794WHvuapsQZgRyTZW9Nq6tpSpkfTePRS3S5L7w8Sr4nTG2fuw2zSdrbjZqdKABjZyqoxCUx76wFSz1LyQKrmLd",
  "key17": "2qJpbcwvZwomkLa3VqVpZoZKTQMUrG9DJkT7qHdXFPAZeTG6DUdtTwYiGdGKrkooAWDrWMRvMtMpiqDMJPovBUTR",
  "key18": "3qrypbg7ai8DAyF2R9hbzosB3V2AekDq7vCSJATLTTPqNgnmHTCVcyaSTQ8rBxt3KK4ECqZMeL8prMQNVaADsyT6",
  "key19": "5JGGcbaWJDaXGeraDrQKEBzWRbErvu8sq6u867Yri7E9eX6ju5pNPNEVgUdDE6ufTVi2WLxkY6xTHXKwhsmzjUXz",
  "key20": "5Ar8yuCXWeWuRtwsLnQpd4ooJS9Fd2DxW6bcTMnsKPeoXcSt6wnacpzzvBdjuPNkJuHsyDRNLBwVrRzH1W9L9JJN",
  "key21": "5uy4n9hadUcCAfMAQrHoK9gcKmo21Fd8bPvmahkkzjkPMYaGeJEXGMXoVYapQSVXUJofxL1swVfG8No55eewRdoT",
  "key22": "2FoTzJH71ehFzNtpGHF3koDhh9KEFppZVcaGHGMi2yNbu8oAFqnyd7Q9sSWxNom6FzrSKgL4m1Tba4LUKfkS5ukY",
  "key23": "3WKCdcjvgG15P8wUrdKGbyrMstAK7JVckWiTosnZywnCVBHNuSVaTj5TRUmX1V5cx6RVWBjrjpNZjqK7gYEr7XTh",
  "key24": "g6UnkKwfE7Bmcw4Udu95cQSUKq5M2pqBEtoNRaX8XpHgn7eqHBVcDubCnW4MrPvDYwQYeabcibfWUF4pg2W7Y7P",
  "key25": "23amSpfUf9Z16dEJjk4Zpnx8rAyabCrXfAQ6QBMZrcZN3nBy37XscybDUbsmdYX5dRJqzYndKR1ndyMAM1d93UdY",
  "key26": "3Ac3GuTNRoG321TgNHKzXpeByCMrHhk6J4JaWYcbnESQ3hKt3FrsfzCjP6jUy9itZm7XU8JJL1wuC7fm9FeyU66y",
  "key27": "4tSg6zBneXa5pApCxe3jZgCNixCKaf1LEerK9BHDBG9gDecLaudyawSoKiMFQLdC8JLeekhMTRiNsjSZSMTz8Cr4",
  "key28": "2PRCYUKzEgMmNVUxD3ubnfNq91uVAD3JBaNjVptQiHZH5Nhnfyxb27R518rN75e3nAxekobsa1kCqYNaYF3gTHGC",
  "key29": "j5EeKyqshZ2ZwQ9AFMBpj7jMUGsS3pFcae8pgtYzqgZ9UvCPT2z9xR4LuDUzpJEzF3xAtk4vKeSRm57sQGw78Ev",
  "key30": "rgWCvHEL7w9CZAU6YdeWmYHJR9XtkrbU6EgrRjXDSJSHnmCkjVxv4D8DTp9vPcXhkX4jR7FcoAiKLfYemjQdfsH",
  "key31": "2hAYe47YJczBnF2Ck4zZ1nC8PTpZDnMqeHenRTQ2ZouEuVDkUg7H6vzkaFsHhJxektfe3joiBnk7ZXBqJHXpC4GJ",
  "key32": "3xR1eftpGaRjVgpXB5Vk2MbwtnYCUxmYBDDAAi1ry2jnChr1739gnaf3xQgxCjqgv8yG9nd8Efi89yvYAMdnNoTd",
  "key33": "4ePM3LjwqHJPFSiufatcQbtqQwWXB2KW6eMaqjor48D4uUA5MWKVVrzHCwd16BgR35oP4HmeBz2xfnf4tugnQDdD",
  "key34": "5NAtnRpFQy3yh5Vd4Xuo2baXm7KVTij5i6Nwkb7GyUXnByPCKdERjaomMZoKfaJy1iy6d4iVVFcKmoUJVQLfD2wi",
  "key35": "547UKmhXJR8bE7m5EFNAGJPTPxGpanZWMmzSwLHsiZJzoAZEs6Y42ZiMQyk2KVYZNWbCVK4PyV83NNcAHYYq5cz9",
  "key36": "4xewHx7jSj5Fd5T8eB2SfrueZXfCQ8cdcTFnrTimy7BrQ8yBU2KsuTP6tL7bEHZzwztq4pYLpVEBXdyAAME58iRw",
  "key37": "MpqRk7QNaKxjEJXy5Q6GSNPu8R6DFG7xpozqbBpmmSbuBaoNwGnsNvYBFzUw1vduacYi7wQ4F4FQTaRA4YGWxYa",
  "key38": "4RwUG5wuaJqar9pWJ3aw5RJh8h5v3QgScagaxHXJ81W2jgnGU1wWkPgbEy1VC1u7cLngr9XBrLY25nJGna8ALrjC",
  "key39": "2hpN8xV67QoGJhMSHRihgs5H8fnuhkMso3uRTTSXszS3DwNLxiWVcrzQbgjg7A3kvrykMXUs5zkBoUJ5BJXcHQtU",
  "key40": "bVj4Gc6XXxCwnQsteDQF1M5mFiArLNyoZAFLKEVs4BnSmaSCxyv3QAvJR5yGpJFqt2Hp2zXwCvtQgANNzTApc8R",
  "key41": "3HuipDM3kumsSkHhjk514BeKf5iFGr9MkxSGadbQTUsqjUmZpbTWXbEQxJGD5uPFkGCi6Cj2Y9Kj4DLC9mkWjVzp",
  "key42": "3Gvu5uMpRHuqmzzEVACkF69WodxsmeL7w1UaQGS5qqVb9e6NUiUXk2cprMjR59GuYS6pH6cn9TVguQRnHb8Js4oe",
  "key43": "34tKHQmTYSgGL5cTcNXZpDo7YWuuyDzsMGz1FyWS4cNV1PLHPzoZyWghNS46eATS6PMNf61xc1NEGs2FLsMDasbH",
  "key44": "31KsFPrETFSPbB2CFN1j7aVc2p6dduq44G66zDug5rLfTB8uzSFJmeZkbe5dEVWJvTvEELkWU3fgZwbvDQWznXrp",
  "key45": "3Txvf4khYrAkFXQpHDpfZEniKMti5hvKYULvKXoh2Ao4Qb37yhxaf8Ex65XNeyy3qPL34J4bemui2SsSt2KpmBPt",
  "key46": "4BULnRfKx9jSvUNwiX3bpmpdMEW93TwaFuVR99r7n1EfKx4TY3MbVZZagsr86WsovCM4QumarSoe2WHrAihQYusz",
  "key47": "324xzUomtwaB11PwRvzMRXnbWtuz3bYcrTPJy2rVe7xc1m6v6wTpvjfvpPXVeTiQkGo7Lytx8mhAwQhMrHKwkJet",
  "key48": "kao1uUPYzpY3nwHJzWDaFk9hQoP7ArugxocUCMgekxXPCXjn4tnnkKNQFiqVGU7k7aH413qUQyHuFdVdyAhTioW"
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
