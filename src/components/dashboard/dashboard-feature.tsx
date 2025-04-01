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
    "QVByYb8Gc32JNW4LihFv9UZVLeYYtZZsF9SsurpiHrC85aGawxgHFYfQnsCSZWDtn6NJNm9oAwfX34ynQ3MCb7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWMMtp4Eq4oTy5jG4wkMN7k9YTsgAz79nHxJ6ah2Ey2KYjseTD1rXPjGexsWmxsnbdnbuZcK7B5RZSH3VGgPuDr",
  "key1": "rE1QMY5owiVe5VC2KBjHSgfLVPAKRGBDgtmX3NEU2Tj6tVTk6LXU4huzJPBP2GV7USNaJ3tUJgr3vyyNovDoAYZ",
  "key2": "XQhe7nqpuJYSJPh6RHny1mcMopjiHseF2sHnajkByFLsLMPyyPSyfqq2Ps54dbLSRk9PBRYs3Pgig1oT8yecB7R",
  "key3": "2aAsVbrpPryCpUiA4WHRrdDkjyxaGPXe4ghvdmTGFW8Coww2noGvmUGNYxhd2W9g7p3arie2coCH7JC1UTGCsCi5",
  "key4": "4nKr4U66G9SdAGXrYq3RufspX2wkt1Jbfams8wZv5ZcoZ7BpYntwbhRj3jyQEUcknQWbHYwpUCTuQVNHM2ygL1x6",
  "key5": "2nkqcAbyn5yRbQESskTcn3zA1JSaiytUZ9GLnCaJbcPqyjWkd4ThiHCi1JiVGW7aqM3yriv6fSirtYsTmQCWuvK5",
  "key6": "21fD6MUr4jQT3WDNeZ7Wh8RdhKtiD77zFNL1Aq7gpPwtWhmnzMV1XyHaa8xoZVeoG1GrmqVw21DsCVbbqLDspeQU",
  "key7": "suHxUL26VwkEitrtn2LRq53obSJBWBwyc7fpV37a6yiPLgBdGVpTrxBNHkig5dn3HMTVKw35VBKuyMwKiZejX7L",
  "key8": "41iw8LrnW2sXko6PTPWWW2Pcqr1E81GTw9hfHyexY4CE1tg3WECRtnkpzNgiX6UUuzDGnA6FednbJxsWuh7j1B32",
  "key9": "4sR8JLZe9ydfBWayZ2i6v9P1caiNeGnwpBdeDetAjpVAJU4q5WoUG6v8yd9dGJqFAyJ7Dou5LDAY5k7WyG5QfaqR",
  "key10": "3g92pL38FfrTgLPV83vFKtM6evt36uX91yUwjTKkeB56hTtckAPm6bhSgHm4NehzWoirrAGofdfJtNratHoVucxA",
  "key11": "kRgWRwWiUbr3YC7xPhRUKwuFay5AEEpHypM8i8XNd7woxb9V4NH8geoe9YsnJiLC3W9KFSjbnE9ABPgsYpa4FKD",
  "key12": "2yM3EewU7yEjr516GXo5bErgoQJX3FovWw7J5YmBcpCJdQD4pXLBT2Dza3k3GAU83kUocweB1G6UctKwapNdFSb8",
  "key13": "Rea3nQtaYbs7UmiN6Z44RTWLiFk7YuajrrF7YiqNJYV4YPeX4BmJ1e2yDNeAgWaDssiUDRy57h7NLJnVDYmPuqr",
  "key14": "4LDrdApQY9ch1cvc6sPktv4FUnwtwB1iqLuaVtyUZfqr5KZagTGmaz4kuCEyxo6NNnh4ycE67zAWGPiwJekB71W9",
  "key15": "2gTtndQP2u4VZyvRHUoVRX4NePL2aNQkwygVT12k78toDLvdDYoSg5raDRAknhXVqdRZfJ4LraesMc51NByzoMfR",
  "key16": "2fGzdsfzYRHRFxvdftLPXAvkUvJyiQSUbG1q9oCCRd5K1PbTKsuMo11q1vma5VLwPwpSPHMEQ6xocELR7wxECz9Z",
  "key17": "54uDB6uL37R7oHJrSE3QtX7LY9B4NuSnGuhAVVrGpTvqPiwkTLyJVzCtueUqqKPueaDMzkYu4ta5FJoK9dpDiS9y",
  "key18": "3dDES1qxfbcC6A19j4X55EPK1beVErE4QoQH79bdBFCFAHw6LJFdoSFUEPgxmvNDdVSKN1kgqutkKgZCRj6M5QiB",
  "key19": "Se9vUrhTsxb8xau57PEansnwD7ppSvYHNocXFCMNTcLjQjPkD1hzMEVW8Fu9ftViTBAHDMVvzarttohw1qy72fX",
  "key20": "8MYDdo56ffFCLwKFKc2UYj1fSLMV841fo2H3W1ttSdfRCDZmfP6BdgM4aTQY1urFE6efxZu4o7kUNguCbSsNN9k",
  "key21": "3swn9Gzv17g43sgDtZUK2qbJv9nmL8mBZ4Tb1bXTUZE3bW7QjqipM2q5pT8arHdU5hAakAtHJ3UL4PGTxTXWFmzD",
  "key22": "3U9oy844M9EFsHqvyws5kNBatk9QQtW4HsQyT6rpCFkTaaUvgNM9jYvdb4cd9Qp2u5fCiE6sKozBmsLFNMFiu7S7",
  "key23": "3w1LKFWqNpxcc6xW4fj4vJ7YEqAuYSZkY5a4mZzwsMzYLwGi6vkLnENChLzsj2RUncJUBQ6cFGJYewdK2RBKZ31W",
  "key24": "2vNgKaffCWc6LGoxyBXBMZRTmyDZvnja3WPMzBueFZiFvZwh227axLVZEXqFLBkZeNGrHk8kTo1yzfgNRgjSUPPb",
  "key25": "mjwskZfYipgzj48Kh8EvHDfiiq7vLTwzmunfbC8cv7VY5b4gW1DkLLmeaLzH9gVESh5bwyeqRZ4HQmDMkWLDdv1",
  "key26": "kDKaq6C6M1Mcm2VSCETCxhKfsvFX7XdJTaQ83RVjuKEUk6uf8AM81p2ybWjiSYqa5AJ6iAi6Ga44H9tgBjMnGqG",
  "key27": "ZGvG9NiqbVXp2f6kfeN8wA3dneyfngQMzdZNAuucNi2GigRyrfy5UJ2L5b7SHgNF9fZsF1BPaymEYMd5xKvrXnN",
  "key28": "3aR6nHxxLpNt9d8f2KusArpz9qYS9YSEviYKUPi5z6M6ZutNkTQYNTeQKBQXLUZYWxHRPyvnwPda7UAZLwaC4PPL",
  "key29": "4fo3tCrxP58LKMafvuUeXKx7rmJZBfU1DvFWADU3bmg99wPcGqo8vP81KBVPsfrg5yFwgyZod76BUW1jM3ZLFeBH",
  "key30": "439eEuwfvf4uQZQYkHWQgnorB6x4vQrF1S7sW65cxUENtj9PvtLduUCZxX8BPLDrpnvMErrRUm7C7saFeu84mnCd",
  "key31": "5ZQCATpxvxgC1Sfs84q9dgGmtd4MCABMjZkR7sqwbYQruVnqe3yC4JgZWGBvb9oY1g9GdSMu9FcB1oSi1ha7THrj",
  "key32": "23sQDk7ugMxuGhuSGm1LNQh3ZRYBYjas5rqeFDozNkvXWcoCXtXVVYGLFDeh3RmzUDcCM9V89bVu2tHWQu7naUgV",
  "key33": "MpN19sg9r67NUVnbPu4q5o79dFyg2GVqvWWPCZfkTEe6mFAx9mapBEfGvfK9JZ3n2VRzTu98Q1iQPTrJMbQrw74",
  "key34": "vneCzyCCWNH9u5TfgrMQuMvGHgSV4xKgawMXxQMRSRAN5B4VEoM4Vks6xiUAgtN9KogFCmPqFTaTCmZrewsgz6y",
  "key35": "kkfUi7ahtgdywqyKddDYztxKxg75Hu4KDAEFcGVFb7aFTGxTg9z7D2v4vXKqgucQzj34L8MgbNEe6hXeT7x2x7j",
  "key36": "jhsWVJsCKvzh6kxFv3nZoPDrSomMEw7n6iNeWRKSUfCTtEJZ662kfZr6soAjE3k1ZT1T9FUPQmtAFYWsDoKxdnN",
  "key37": "LgW9HsMhMJcp8arxLvF5GypNZqdBYCW938Pgrv7S72nff4zyve1Z7Tp5UVzYsx6nd5bfmtwQiqTxKYn33qzPV8i",
  "key38": "2zuprfGZtUJE2a4EsCRuLt1iT1NqMJsTKFPnheXyUhE4N3HmrG1ezU4Ehv2ogxGAeHyYNkppahbPg5sfgasoEBNd",
  "key39": "5aRXa4Ft5S4RzJQ1tC8E9ckdnJF9hF3zwgutRyn9ZvyNgZfg8zrwU4EHbnngUJTT8w6FtJAWs3KGEanQT2QSnCiE",
  "key40": "3BaF6m1GxLya8TJYxG8S8SuWrFrWQM4cvyqRNrgwuUowzoxvkj6ZvD1cku1VjGhbtfUM5xRn5t1Hmu2zAi2kmoNJ",
  "key41": "4eKR7sdExe6cHeBhYJZyYWCzpqFsuuVFFqZCPq2eH1PgU8ue1cq3FeNLu8tc3gUip37UPkpPzm2hyaYhMEqdEZsW",
  "key42": "34mJKViTmzyeLVzMJfmuuVbwx2yakXzVff79aVuZnJCu73TUJtPZJZVZHF3KZYJ2CEEhAnnwXfttsAFdc9ADtnqG",
  "key43": "3rPb3m5pGfCH94mfJ8rur19btw5Btiqd7tBhRD87Gj9Ey8WRo83m6Z1M6PpEgx7PfGWjhQvABZw1mhfCcpefwNXc",
  "key44": "48HqtEJ44zQT7ShkE9DU3hz43L6LuepC3AEwDxJwnXPXveLMaCPo1Ptphk4XT1mJNV1tZAjpgJ36oc11N534Fv5Q",
  "key45": "DZF8Pc2PaokWBmjKWgwMqZ1RwiLugLgL6R2muMnQPfUoUPdro3AE3g9xC3z6nhycfWt1RnfqQU9Dkjszr6ThphG"
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
