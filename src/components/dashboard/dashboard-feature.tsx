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
    "5Xz6pHeWqxG18wABTF24QmaEG9wA2hMHob8eRcEFi4dCHfAYeaWutDJufDriMTES9WE8v29MYKk8qm8AV51UZnK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuFX8sS9ZbSUSzQBjsUjp3RYB7p4358zUEW1fKD8oGVCxmadAk7zdSdNSzooWyk7YRrRZiuGvFHyr2cJzZPYuf5",
  "key1": "3oc54maSxrKKQe5PvBut71mg12H6J9LXQ4AuFA6DLPFkLYWYuKX57vePJavmpQAi4DduuR1wdDA8aqC9Fd6rgp5z",
  "key2": "2frAVBFUFn4XxtmKf1EbTpMQm97jZxr1Dom3THCiq9Emx1QboKTbxzF6vZciMmrzm7k8D6G7MLp45mbRfUNfvN7N",
  "key3": "q8Y8UrQrgfac8sDqZf431ggdKqzYA6nZ3gYbtMqkuLFtU6qicN1GqqQyWRNijYnaS3iYVj9e8TxdetEw2ch45E3",
  "key4": "jfFWpHWdVHG41G6ZnWmNiEH6wapWiJJrxJ1hszoY3no7DJuPD6KbHPqKbRxdn1R9pkjXMXYkt4pHaDs4HEAB9Vy",
  "key5": "2guQVHDaNjnj1ozBr8Q8CLGraJDwvWooTAkkSjASP7fqShfBEdTsBYYNW6M3XWXKP2ze48wMEi4ZotVhGLpJiVrp",
  "key6": "35DwZaUkQuBLUFqF34aMStHFURbiMvMPyodgBHZTVUruk7SikDWAtAdBvqAuCdy39JnKuPnZq6Kfkzg4ik8eFzN8",
  "key7": "4prL8gt1LHB7QRdX9rg2jFRNotrusZZykacQX3vx6dTJyoWFhmKeTzkGUptnxhHwGUJfFaUHNWXRnUVae5Zaf5dp",
  "key8": "3ssJJRgjR9em7wZytmk2p19i1Qjpfq58pZNARcDyCn8yndQnG3MRdf18D3X2o2MxTo4DK7H2bck99AiivRzARiiC",
  "key9": "7Dx6cWDieQgikRtQGNCWb62sRAhLdVyqiQDcqWqTBu438XJrdQwzZTGXMctHqbm5U1hynCkLEpGNkp3FTFEccrc",
  "key10": "2JXWizykNaingt8XJyLqajFncpg6Az9S5yiapwaMSqQg37JLeAJQivHKvJ6LMAX8KY8o3ThMQXGU2amkBqTxqBzS",
  "key11": "s57qnu96jgtjtM2PuTPjvcGjDrJs58WMzuRDGyQbYdK64R2dJE8JxYegD51ELeivxaETK7pRYKzMa95w5rWXE6i",
  "key12": "595aiEqUHJoWUUQpW9Z8JME8ZDe6cibdVJ8TfjWewbRahWfZcQEqcG49MEMQCuYGCirp4rP6KpYt5cHbKqMMxQ15",
  "key13": "RfkGbjxZV72PXw8q8yy2vgjgwh7q3YjRRKMduvSu7o5AmGvwAhTgT8RTHQvRMrVsZzckqm33f8TBuQCRqjihNSZ",
  "key14": "2YKoXScV5hRGW2swCgZtVvGmUPiUSYKPHRJnwvd1sNHdfe7UfsF5mPyqtHqZ3DwgjgwM2WJNgYZwgHz7nLbwN17z",
  "key15": "3qvYKJ3mQ74ci5MDYup31EFQLvn2JGHearpoR3VZV6BJ61tWQtAt4hu3HDEXmY1kLnYhQucNhEMbwgyrqR2bRmY7",
  "key16": "4wN7Ag9oZe3wwwPgWUAJyNbtzEVkcDeBH25gfkTgB2SEGQbJVQPU4uv3GCi1XDKHJwreyRZqFjY6xMeQgpwCnFce",
  "key17": "QQcT2JtT5yGyvmL5DjH79YkeNaJZdgVhmCJDzGTknj6UJaxyQDq7J7iQAJqod8WyAte9UBkaZQqNriNqQGZ9URH",
  "key18": "3BptEPTLQxKVumTravWYjByhkApCwB2Jy73k6zJ3m9QG7X96WPs1PrAkS6n1Rc5LsqqQsjGvzZNsN1VUZUMYuhhe",
  "key19": "29ScqeXbxTHxm6ruBrHF3i2qPfc4sFPJ44ZhftGGEpUhxPg3VFx45QE7NkKnRiHEG5Fpc4ESP3M5N4Jyx2tHsue9",
  "key20": "32phw8ZhfSG13oXtwGj79wqdHu7EZnTPCnCWrfKffnMXH6LxnAqy8Dto2z6VwDANL95B92jZTtkJp5v1qj68kWSQ",
  "key21": "i8YVHWmNdhu3RSyNMkTw9i1hq6dcpzvuLkkYTAn875g9ktnXnB2SicJxwk79LuGcaTmTZ81oXFiN2iQ9u8Cgm7G",
  "key22": "3mRuM2fQCL2M1YqBfVVT2pZNLqjPQvu7Y5MsKBoyVnT49hqDmo5ysD3X7Dvcey1BRCXqF8jP6sfniA5ujxytn2L3",
  "key23": "2zdUXT1BrZ6M5KAHUnrYpzPgzwMw6DStawWWZe87NW2kMRUCFb5HEktcNap2q5QLK9V2ukDqBhRQNUkHiZhZhpW3",
  "key24": "5iuYcibtpsaFWJbSe274kMtWH8RC4WHD4mqVWKY8Ee7CasE1io2NdZEu1ELTdZDuJgt5aqRsjDsxaZji4xuRf3tb",
  "key25": "5hDtnaAG3U2MF3EnDdZ2iCyZRAXHNe1eFM2PL61PHtVnCkhrPjxFoumm5vE7fywpBbKn3J24YKUEvzK3wjJnQFfR",
  "key26": "5mGeBgw4RwaMM59qQu5vxoG5NFSwey5ZTi6dXhXWuGxzR1KW9N4aNESVZeM2Qab67KTNKo1SFzcMJqoAbwwoDUQX",
  "key27": "CEdJouL1ZppG51FjF9fSLUvGgSZLsULxiQUPYguHiQotAAPMcq7v3m3M6oeFWaMJvxueMQNCdqR81GByzsuJdkG",
  "key28": "kpmjzpYXbM1wQ3r77R87xVu6EJo9K1fzRXsshuJuCKzAaCTbCHt4RjXknx3tz5HkSsbc4aA126ZBiAYEKowZEmw",
  "key29": "4AaDBzsXfWWDbtcnx9oo3wKMo1KWg53Extnp6nPWLRUtPFAQKURubkoeYUVHBCXQGZPQdfQ1hsjkzn2muDckPj41",
  "key30": "4qq9ftxp2M8669a9f4AYfFo3fs7azc6jRPWdqHVEMQDDFyhHh9QE6zUSKy4fBfvjGSxGekAPqhULvNfNaZqWuppU",
  "key31": "2U9LZUdSoC3D4y9dhfyGfWKp2VzeHVdRs5DSSuVVjgLekU4zXX1XDXG4rtCTdmoZ2A8hfTicKW9oycqjhZApXNoN",
  "key32": "45yxzRveAYj1Gphd1KUmowc3iqiGw1xSThFdwWYRKrLx1WWsBjPJ7RYs7Wsc7Q1mip8Nf7mDSLuCMpZNAf7LWJJ3",
  "key33": "3W9MjseT9frPioMv5UmRsMSemDy6LT23bxvsUVco7d39bTorehvNRGsUNY6NdNAAj9ob1huXro2pBSYThuvbjbrf",
  "key34": "5cHWtDsGgGbG2h83Kwvpd4kvxBaHhX9E1UqSFe2U2BP4uKxzwkMQu6TDEAuK4CTKCCoPLabJsHEVrb1qrUwt4bFW",
  "key35": "4UnRwS6AbVbEhAZKBd6avvg2XcbHdnqi7E8QxXD9g6qkp2J3F6Vo8Ea8xq5uKrHYrfYdmnzWbo1NHtGWMiPXRXKE"
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
