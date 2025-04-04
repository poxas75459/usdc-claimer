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
    "237B2AM14EiJRLzUSUQnEnhHPkywd91Y6UVxChDtBq1iPdSy6XobT4LuZaJfcpPio9nfKUxgHa8dgmLmBXSdzmSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKxaYPM9jnGKrWFzF2y289f4t4uVihiNAaxcF58gk6p7fbQVuNvs6PwnVQ4hkk1xtqoQsYEz4yqcVUFomCtgVUG",
  "key1": "tqSeeTXXzWSRawc9USswqNHNezdPem7xBmSpY66awuNhbPfjaX9H1TZM2684a3sj8sZEN39s37ZCzeEeDhtrL68",
  "key2": "2EaB3uUtvV1ZAngyELzNNi9oS2TXmf8NukMa4iG9KgL9VyCk7ivmUzfQz9baRC3xGsiKphzKUKzXGKrRzKCXWSUj",
  "key3": "4yzfKjbmuVBoez924ByxzUpXzJZUAWdUXeh4F7AW4uuQeiiKExLraXXQCPHfmnsJu3jfK7ZsDm9D2oNCYKzSqaRk",
  "key4": "ApFBnYebbntqBdnuMknhckiWHi6x184kKYmHzJnimEJoq2JMfofRkLDPrXBzpVQgZAseip18LFYAbMH2zawnv5d",
  "key5": "4YomAsqFFJedcTWHYx8Acz3p1Y5mUqV6eCREdi2poogPVZr8NgbSgp2mzt3PQbuDiVSZF4Lu85k4dvYCUHhcohL7",
  "key6": "fV1CQormjcKfuWaeYDUvJkeP9rsPv67aDAVDeCrqa86sxDPD13QUPV2B3BU14BqQQTC8D8V4r1P3BM8oahz9JKD",
  "key7": "33RZvG7FJkA2N8SwVxJfScYeapUZ4g2RqAVhA7VaTjEArdJAmrNsXSdhDmg1zmxjbmXiRjrDYnCcRmLNNcPnpKoK",
  "key8": "3NvnsPkz7fsJwYKHTRwAbkyWXV2tGPffmkyjQtE6n8eqPzm62fxMbNmaXKQ1Vvry4PweWQFdowt7DWi31Kzq1TCT",
  "key9": "5fpZ6cxQfMnztYdRkoz8WzPo1N7pRWoW6f1jmo6MdRwMhwD9whhqad8LSTLR9j3Lu6WQMswzCKrftXGd1Tf6Py55",
  "key10": "2j7bYvRcDfSYAddv91QBezeUSCVsQU7KEZEJSyeR941FRpYDsAQYcjmKVcNgKNHSEDfEUq2TEqbJ1yYThUE8j6Bm",
  "key11": "4CBkEvRt5Vwny9NdupV3abzhEAVvYtPa83t1nMH68rTAfEvvHtLvNimgmNRKBgcc8yh2kFL3Vk4GJCWnHhv2ZFGb",
  "key12": "aUGsrEuhEsy9utyhs1ZNpZifPihzsQpr1yauyd34ezBd4ZrBDWnsdgLRmUD62RaoxXJmfBi9WVTeFf5edb62pdD",
  "key13": "3MYB28f9T1Fcc19QY99QVQuFRJaXbaToRD9eb16FxUsUceBksartc7CZYPi1uY53VmMYg15Te9whzF4VfPJpZCoB",
  "key14": "Z7EWnggAhAjFBpuSbr9vHUwb9uy9yyQUfzzkPCZUcC1enbndUkm5BdZy1L4emw4UZFFetQCtoSKPwe8uTgLB2qt",
  "key15": "664oDNU2TLyKoUgL2q5tWNRBr5JZjxvXJMQM38UMa8WynPMPsAtyPvAKq1YkQtz1rzqZeFR8T1TNvEq9WHas8eiY",
  "key16": "57h4RPdbZfefMYpHp6nsTAUC1teXbh2GueikNqC32RzcHwpMfZBTmPVu3RupQXrX5DfssUjMrseoSTZVRrRxW5Ct",
  "key17": "5hidm4D75ELhQdzy7Xe6tSQUNMqyyWxMew44hBDxP9E6MUGkCrqoyVdL9KuHVUgtzxxxztJFBCaZKkwxpLh81LkH",
  "key18": "5FSqaCzVhvacvhH54R1NxswtW7D7AXawaBWMXC6VtiYyVbKNqq47rp3uMjC6XLUgajMhCFjmf3mnoYiEqLTpxvnm",
  "key19": "4roWpZq7DV5hzqXAMzUChV19EfPVP4sxLGW4v62uc7mVhU1aVwNwHizrDFR4UoikEHFtyaiYevyqfWdkffuGwLaQ",
  "key20": "5m6Dt8DXAGvwGWPvYjofXABkoxR9u3NfuviDXVM9xQgDYoT7PNpuvUcjGAY2DRjPZcvqpyRGvVao7urHUUP2aRPn",
  "key21": "3eJauMvSGky7jvWfEZjQiQtJ4K9kVSMVWoMrAGgXhYbqAaiZYuHTkUfDvJYsSmBfRk36dNEhFGik9rEMEZSsKgFU",
  "key22": "3tfYwzT3XZeWT4cz6aYqnrgDRj1anKdpL69P43ncQc6RVPA6MSKEtoVgKJni6QW21kWyXru2VbtjCoHUtMyqDLso",
  "key23": "2C1QGMKC5dy1PUM7hJQyvbZ7mraHErg9z6gAnipieAshkMv4RWnKorhKS5YhKNpZ3ydixfgcjf6NMi7afe4vAsKv",
  "key24": "5FkgVVnEkKUKtasVH4P11iVJHUrSNm9rfZEdNLZwRwVBvzLZgCrniF93hSQBKJD7njABBdJgVLZwq5Lq5VsLm8f6",
  "key25": "5isbjKurZjYS486nDLG6PXQgBcLDKgARMJFeBBUZvX29CiZc3FKF4eDP51ifREcdvjJgZxFpfvcgb64ZPUrWVrfU",
  "key26": "4eWz1wybsCM7XWT1hvumPPk3oVwALU2mGAY2KYmLwWAGMKHESPq7Ejv99tUgYWqBEyFhvu9tBvPwMr6iNxwv2RRg",
  "key27": "2LXU87U1d4C1axocnnics7nuoAYoXcxkzLHPCHd6M8Yj8coYt7kAm8PRq87KiGkxYiqGS8SEJALNw2GVn4zDWQQq",
  "key28": "4ZrJJS3teCoeU7bH1MRL9EsSHNbM83WJoMezFzEuGSDgaiGS5d7cSC3inM9da75LDjgKEF5XFoucoEs4oWisRV84",
  "key29": "55S2g36grfwsUCm3aiX8H4HwfXXQiPE7X6FdAcyVXzNdgnpZZeTtic8TVRxVWDYpSFa7QaT83StYUnaygP7gLUih",
  "key30": "NsLDk66TabcRjAPmHeHJE3vEP3fpN4rveCheZrFzokS36pzweiz9RrM7M3Pknp4CutRf52FVVcEaVtcb6wjUqjk",
  "key31": "5iV4vxvvUJ9beyeaH4vQnybhZHcVXtQkKV4oNN2UwQ41wgoQJPnoNtRoKYLi5dZScUe2UAXxW2hZohmYPdJrYHoL",
  "key32": "2jHnsWVcjm7L3dAM17i4zXBWz1QY13bG4gQ4pPpds1hioNYzDB29Gjj8r4F7jTkL7kH95PwdfDXamYyLbytckKzc",
  "key33": "37WBD5maAuLY7jodHhm46XfepwKhnYpRZh6vFRV5RKmvJkThHGmFoKVdHMb6HGKx1bjmdMhEwVu5p1otmdGE22Z6",
  "key34": "2V7ETBq5na1NgfhizfKdv3ckAHzcKtuzCSGD7xz8bUz3Mdj7dr9fEMgFm2ujkNFvvofk1FLSbiYGwYELc878Rzt4",
  "key35": "5XmZoWzEzPehqxKBtQPy6zWLzze5apWf4BdZujyui2CJWy2ydAduQ54LscZaAbDsFrt6tjc1ECFh7fhqjFFcMrpZ",
  "key36": "2uEjV5M3Vnfx8RTYEu44LonCH73fQmMaNnUJu21aekB1EpwhoZN1mWmVnMSJnaz6TBMmiixcd6hGzBHAKCx8TTRR",
  "key37": "17LqTgDiXsn8mYoeyG7umEksqDoxWdbk8ocidwGDQ8MgZUYDNxPZq2A4BzQX2AuTzCT4CRn4W8PdzgdityNKYn8",
  "key38": "2w4i4vE5nqLorfp2HCVfSy71MPsmu4UQmzSJnxXg4EvWMakb8yjdumdRkb8ymBvq87W4uYbLm55by3aZtgFuA79j",
  "key39": "2NB641HRjekSUZ1J3tqCaXMH6jtqVyUmbq4h9PC7zad4bzQhpHjJpPv8o8gKgyrnHZAuc1y3AxzWvuNxCygbAXfv",
  "key40": "3zhbrTxuyqZPeS8AxKmGZxvUvpAJziW7R5hgyBbhdT8HrbLrJvNAq4o8xNVCD7pRwiUgsKxzzZq9mAqoekMNMW8q",
  "key41": "2BGkA7TdLdsovnR6xXL2F37j3oKRY2dSgL4ryUFGLfDhJN1nncXPvvJG3hKZepJ1m3NWED9CEQgBYZSMWCtjVutr",
  "key42": "bWiJoLQfuKSSzU2jAXhsWmmbLZJ9CU4MCgkULwHhZfbneSHSm2VSBCC8LCTu42FFLcAQTaA9GbsxMB7VzGQbSv3",
  "key43": "4XLpcT7TDcKjn8CRhsvQK3oruj6z1FewNcUWjSemeo5ucH5LAEbYmy8gdsFwi3qCooN7jcXK2F3uKNDECikW5a22",
  "key44": "3ZkuEp4vdRMrBgyJtHtFbURK9koZRpea76MuYUDuyo2rpH5LDmtYWmSFKE3awWZveGkAcEZTXNWnoxw2r3UPk9aS",
  "key45": "WeQSNVtgGFbqtHfrzBEV4i7AZgJHrdcfax8auhYvdat73Z7C9u2PKkNNod6MERkTmJdFGBdGJUDuQ9exiCGMjkt",
  "key46": "3Rw7rF9Lw8DaZKBHssLW5fD6UJXGt5VxHDjVVRr3hm1ZecsC4U5q6HozHo8T5SCoEuKXBfXKgo58scEkaGU1Uc2v"
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
