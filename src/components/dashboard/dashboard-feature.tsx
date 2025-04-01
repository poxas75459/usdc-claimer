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
    "mLt7TVeh7sCLC8JjXiZCbQXBgpisP8xDZoBCA6ewx8rFxe6cqxBG3teRkTGH6jXzahYeDjzJHMedbeK1G5tg23b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iu7ZpVte6D9XY1F2KajvTbnEVLuqe8zMuWmuuXzD6dVMVJ4LK9X6MDRjKV1ZoQNuZTnETNuCVTfdHhp5xLeKfmq",
  "key1": "4mvt2LhkQi6fho24nBuGmzm2Bm9yKKrSMBf2wr1omG674SQifW7RwuBAatd6PaMHLwzQTQTpDEiWv5Fto89Rymok",
  "key2": "xNgykrz3FyRkS92FhMrDVAgMnFx5ZntSDutzyDcxYhtKPCmRGsENWBDN8ge9jFR9FKgAJdD5fRdL8q5wr8N7fQW",
  "key3": "37pFrzouNTpnGrFDhnzvRQHPNqTEmXVLYM174RAjZnSJBf5fN5zXZhsdNDNGoyxcn1wxmK5mnZ5EqQUjfCEdQb7v",
  "key4": "4fXDfd7gT4DLhU2ibB4eoe1jHXQGHNkj4tcYqDJNhZQMvQVCHU5R2aUpD8bUQr6JtGoNcnkE6NX2SDgoxj5cfzDg",
  "key5": "Ypq3GRpuHnKvZxRRyWii8Zsmv2HmRyDXw4o7MaH8gHp6fWkY74R8gRZDhHkXWnTVLi5FaFg4zq5D5azVwm4gekC",
  "key6": "5m3P4Sb73hiLDGbyvWFz5yXQpRkUbZcRui5CCYScSKN5Teq4aNXgwMboaZHbjDKwnrTia5zc43ibv893CiFPvFJ8",
  "key7": "Pw2oAghDnY5dubJDw6TFbUH38rgR4fELisWhKXCoAm3RpYbmTEhaWuMUGn6J95D3nKtgJHV5jhhEa4mpYaXHgfR",
  "key8": "5MfHpxLjsPNSAueVvbpgkGLuab6SkcjB6v1vC5WxNQBxNoXUdJa246jaXrEevrzyngUNtLX3J9KyBUQoXmxFTjBU",
  "key9": "46LNqqd2uz2pEQDTim5Wy6FwFnBJNKBMLNHBN3mDJhf2kgLDayoJgpSGbgrPSoTq116U5k868ZL87ubuJbpR2AWT",
  "key10": "4GbeiHv7zFT4EWWG1uzaKChHx9EzhhvpRX8UpYvo1xzZsv6SAkxPotUnnVpjD5LM5GhKuJZLd8tKV6AZMqsBqbVt",
  "key11": "3cT1GtBfXzVjhzRe5Scgo9zXENb6roiWhmoCsjZwdwPfZucs2UbsiFhCtDdEF3BAwzfjkudCWj7WX85Cf8mxjtu6",
  "key12": "5fQVHc5uvby2yPwDaxDtFMpzjXjDycxMv7QqAgfEAJwTBdz57mzt3h13oivSVx1TJRcsZH3iC7sfyjSZeU1F3y9k",
  "key13": "4Y9J7zFsywr3a1ugpiFpHAVH1WJPZGVEMEQv9WAVRzVU5kUX1Lwt9V82UmpoVBe9VBNDXJDDvkxvEvSDwcieT26f",
  "key14": "2UkEEzU6R1Ts2QGeEYeDXZ86MipG7aJFCxHn8vTi1Uk9xr6piBnxpvfmu6Z1ujyPQoQGfeQwNLHuDeQ8p7jvjpyP",
  "key15": "mQxHT5yNBv6r4SBczWvkXVZydixu3cniGqsuVqgVw4fwsFxjx2f7pGoPonmmhN28UguU2jviVLZF3nvFm3L9cTg",
  "key16": "29pKTbp3PBXXLmfZTrbUBze2xpWTruwAgphpVeGyorUWZiixjoMfSYyAkzYPeydMfbEdNKHL8u4M7uNR4uND13an",
  "key17": "4iKGG1FkifW2yDqXSaspcdMLYpnv2G4whNkwidZg6YR6PeeH2njjBjfve7YoviUScYFteUmWgYQWkVcrXXu7hUou",
  "key18": "4ogUM5xCpHUKhga1t5utnYs5yStWTosgtbk9iLimwats1jrs9XPQsdXAfTTemm7NpeqXxbtmFYMNzfgHcYhHRtE6",
  "key19": "3F1epVrhUfJrVXwrZYfcruHugYwQ5dXSe6JAz2i6DpMBCm1NoJavPDPb7UoRgiowmBPVqaJAZCyWnDdFSRsgyUTN",
  "key20": "RHaWe1U6w7t4SrADkPFtmKvtDV7pqN1JWNs1kzH1SKEkuLoQAdhJRgnqpTUEdc4Fweqxby2eEXrdZQDooK6GdmV",
  "key21": "RvWQRS1R49sXJ2EtYr3yrFhne49AVvqX7dVBDVohZknYQx2nHhQ4h8bEMAr1Awrbn3TThVwEmQapGiYWm6aPnZZ",
  "key22": "5jhjfaAoABFtwEykYY3G4YdvVTDLGQLp2Nw9oEgdoUyY8aF1zLqPnknrJNk2YoMPVedE6SMNPdUf7iv8BekqwPmj",
  "key23": "4tiSdUJJKaXkcyyk3EBvscr1Am1axBWMTGKpEECTHFNxNLi5rRdshZevnnAE9CE6jKGzjGrxwKdRrkD7QgM9Z4pb",
  "key24": "4Qzg6jVjp6ocJzieUqCxtnafkfkoC4x6eu87iJrE35svLUs7KM74JvsLGQYctieMAqjREwGbuzGH8AcMZU1XeDkU",
  "key25": "5XhPDuReLjuwPV6mMcgjwnCaQsuQGp3wa4KBt8UMnJE4woBBMEaSST3YQ59o7bepqsVy9EyDmuR4PK19xxRJNG9V",
  "key26": "557kfRuwPovSgC99eXnNc5hiNvNk94LgoiYJHCgcwACZCocUQTANgegj7Rth9vavFWfG4gLiPfjm4EsHGayao5de",
  "key27": "535oXnanZZSY9Eq7i3ATL48JJmyDD2XomfeuzsmgJX4Kfa12SNo8sj84XZEtTDRrJ6ynMRZg5FFVi9Adiq5u4FGx",
  "key28": "tPEVNA3xbEM8bm59ka1cekXfpdU1zW2sBvtKtiB4qYVDewej7BxMn6wEufPESTenj5mFYVQ6HcVWJBe63WnREKi",
  "key29": "5zZqq6s9tGQFRiGSjNuNnXeotNZAvBMvSdGZWiPwJ4BSsp1Lzc75zCWEdyoizUjqN2Ut5riTR4w1uRPETxH1GV76",
  "key30": "5U3V5bA71RAvnCte63BAwu11PiFYryLbcTdjAEcnxCrmYuAv395999zR654MdVzo3RWrUBo2mYXaEWRZt6rC7rLb",
  "key31": "YVUnipqsnhVyAuM3bUufqnCRgC8AcNE9fPrWCnHVjGVkVvnx5HgCnPifedbLQWaM76Ljv6s1ERYQ7gg1kydVL2h",
  "key32": "21dURugbyJAji4DmCt34CCcuG2SeB65qnWBaakD7dhgxkMrqQQtrY8PM7whZjpQLM4dvUJbTuDEDTkHM2MwE5iMM",
  "key33": "3eEZy4aTQ91DmnJvuM1eXwEzTnmxB5dAK18QepBcLQzN5FELzrcHx9jBmjx1ed3yMUGxgDnaDsnvuj2mrnqhDPat",
  "key34": "RmzrJPWw6Rx8RNixVGs8GgxsTZ8W7TWL1DH4LhdKPZaH17trQmfGYctzNaEhDStDHB3fFfARQieAuT4pnNxhZ2e",
  "key35": "5FiHhXUNyQgfhpzrLpCupbL4qKqbPeWyajKDsSUKCSfXhM4PstJEuGwVZBbcTR7LHYJTRkYnLQhgLcBfc5EN7u5c",
  "key36": "2uPPbKfVPP7zWiAnEWz8CrHJSeDnzPasX8uFsEg2baJRVEbDtdaJFx1X3Sr9r11EXdNXp6FdPavg8vFBJ6g3SVA5",
  "key37": "3X2BB9JEbpsx12Pbi8s6JFGUQGT2fYffyiLszSK17cNksdnGLt4nS9qVScJPbhGrKy35UbAB6EmTgBRKJ57V6daU",
  "key38": "3XVjHKnauf73oC88iVY6oc1mmpo5nLFZ9RPWq6x7VS5En8pfjBmT5HXJ9BPduRviKPaWkMnwpsy6vHoVmS6n1ikP",
  "key39": "4JMkgeWTMau5RnLMthdFiU4tuYLsCJGJnvQZTGCVvHSpAC3qKamQ96TSv3hRdwfQHj9HVhTuJWdoFTyR2YT3vook",
  "key40": "2PLbAeDMjVkVb4GRd3XkfFXJBztwHvVQkY6Qw7oYX4m5nD5w5fwSkk5Jb8aq83j9ZUb6ZvwxYmh6ZF4aqDYKMMCi",
  "key41": "H2VkRGCxxKPwJvCfUiC33fMcR152LBEUCmLHr2MCyCEX3c452ejb1NS2tqyH4m7gseWM9MG4RpyXe6k7YJqCydj",
  "key42": "xE4pLLsT97aLJT8vfgEmB1wf6dr5ijkvVBfzAqRq9oVp4xdqnfMCa2Giw6i1St12D4vC1eBK2eTjhJp5BnK8PvX",
  "key43": "4giqTGBBnZjmR43mE4n233tEWSarAkdpcv62nHY1HTZmHFmzyuayfM1iQVpdJMZWoLQNRFA5g6Jpy3CHU7oz9TAt",
  "key44": "52Jvfah34ihFPjs7TLbxZnwN4pJ8tio5Uvf3hceNakHE4q5DQKuruv97TSUxhMdeDQ7J8uBRBvDu1ZDXAVXho7hk"
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
