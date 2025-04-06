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
    "566HV6cHdUx5KfBxyQa599tm8paVk5BiqWAYxyDHsHHsQCPixN4ZiHVGMHHNdASMNsZQSn3v6hiFnfUjfV6Tr3Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMxAZysVrF4xCLiAkdTQzP9UYFfPDmfXPZYvrsoNHTXZCehcjMg565DpWva8pQo8xX5AmJQkJUpamN7xN6C8665",
  "key1": "kinmdCPV4LnRRwkdPuv685NXLJsfFCsLiNetqguY38Bo1q71k4MS8TC2JUGwKeYUTqjy6ZDvSHDeg7sBvjKrNzY",
  "key2": "TBCN8ayhv8dHdh8hYnNN5wQaqdogjePbobav5iw7cW3dkAohjBUxwccv6Z5ogb46QfxxUkqWtxUA834MH5ZR74T",
  "key3": "5Yh9EC45Ca3REPNmysEdwYmQKtFZfYeTvBxo7CQqxWhaFHPm9fGMsW3cmgCxrqpEt9xpVPs76wMXj84HVSga6uHR",
  "key4": "4Dy5oyHddMVmrf2sMDgCVsJUpdxBh3x3P2PdoYvVfJQMyHk1HuvVjgqRyAGecem4WMqYkBn523GiAEogXB2bpgE4",
  "key5": "5Bt1xNWwxCyTT5png5kMAaEHxJJPADZ1T6JPmnwWym7PwQbVsqtZSzGDD6KmGRQJVsLMMiwEMrn9L8pTzrXRj3ko",
  "key6": "3h8cUfK49Kun1TZ83fixajHaQR19DyUG8iCGniCUgEpN2xZNj5mZ6kwHwkY5baypyjgtRiDgNdwEM7UnrGQGzWy2",
  "key7": "3XMa1ucG5YNedUYuW18xuLXWe14qs48dsw3kozZShXSamJMDVzZKV4aozde6JvhSNsH2WEsXLPMPQbWgx7Rq6vbh",
  "key8": "5rF5afgL5PbFjNxitsivqEEvM5kXjUvRrSJj2qKn29BBievnoMpgUWAeQgiBSDm5QPre3MMWNhgzFyd9BKv7LxZX",
  "key9": "4fWX6XEhk7WWdjjdwFjMvJg9A9hwHgHohF3242c3LbT6qQ5HWAEgjNyAUZWUZAgg1y9r4SWCbUqaGE4pbd8NXdur",
  "key10": "Gx1Z7nTonhu2d1b1FpdB7YhGrDdHJq8UgDbB1cfG14tsgwxQ722tRGxB4vt6p26kDNnpENNMDztdcRXhGbGWc6b",
  "key11": "62tDntXBXV5A5Kh2VhfCqCVDV642hYdWx19FoXSp9rPDoueVXRhJVEFRzxP3Zjs6axa6H8YYtxaBaVvzM4KPf9HY",
  "key12": "5o9uxA3zckKiWKewmLynvTsxhPj7sVwM6gYRnkgxSXrxJpcHXxRPBSJxf5dDnFZvRocaG3ck6wUNLXcGAV8xkK2e",
  "key13": "3XzTyEaRVRDW1XRp3h15DLMMVT6PfpxU9GskocChhvXLaKp6TFKSahEvx17bH8CQvbmBogzPhy9a3arpgh9T3moh",
  "key14": "4d3dZ9i8psba3tcCzsnWjx4wSodMXBxD8byiBeN5hmfXGoSxYSMWbiNQGTeCSPCZnJtxYiyUeErHEF2skD38BR5W",
  "key15": "2dSRLSe59u75MHLAsWSf69qCr4aDZi97Umxnd6ThbNmrZayR12qVoFxCyc65oy8B29hSk4eDQyFQWUY9Dr8F2rVY",
  "key16": "KCSf5B14d5yLnhLA8mUuKvkdypr2pk7Grqj4UeYnETBq2BmwRQNFQGWPQxn8JRHAPFXkEiWvQPPyhB1MbsW9hTR",
  "key17": "3XG6rvfHdHf8sNDW2Jm14AiJcdi62FvyMWbmiGhPLCcFbQbrTJkgjHQUyyDyVwPoTY7UgkhdLQZ75mNecZCLB2cF",
  "key18": "4KxkNEraJ7voq4ZYquv7DcAUsmxfbJDSCG57wigw6t5sK86ts8dbhf4ZBhKkBK7aHg8cec3dEd4CKN17xsLt3SUM",
  "key19": "2NaeBAekjzY4FtMysfEqjokh78BUVXCz2SA2ZfMqxZuhuRJ6Gx31WPNDkF4EyM6WpkrzdXigcreHtSU7Nj4HheNV",
  "key20": "2GhK6WZrwtKtwnyJq9Q42guXdp2v3YMRezB6qYdhJhJKrp5zC5FF3crWkvdiF8TM3AmBHmBd2719D6XfNjDEnDTp",
  "key21": "3owhZNzhF5DXUM9zkjMEP4Y7cEkVrQWrgTc3FL5y5NcaLdSeUDWxptKFTstAjXqRH9PsdCTYci92rGgSbue7nuhD",
  "key22": "2Qgb8W2fKYvvW4t2Hw7SQJmwGMxUnzXZkEfoGB7iXv9XbNJxkmBWADXRTi7VdiQY9fjd744C739Q691BaXoiXvfG",
  "key23": "3NRfvpWP93TdGCTqq1UyziVLJevohxMYchCGDUewUsLBcJD3bm4eCczRoh3LTPVuPW7TVDpeRRr8Us4dmA4HAaiT",
  "key24": "4dkBN41KzNiYyAaPN9ymiLJBKi6fkoJRAWeA17qZ8vuDRUqDs7noMX7TnKkKRrK4XgfYAKjXN1N6YDVpfESHUdQS",
  "key25": "rZEoSSzibNL3TRT1hDSRJzBVS83wrWGjszTGW2aNayDrxhMdcSvGHECJhibNrgWU3yvust5PX2VRPEA6sSnhpaw",
  "key26": "3PTginTtnPQEoviAdrGskihzywCCpkT6yavL2isLDFgzMC78hQakVvKNEV4N2bTLzxHUEPe1dux5xogy6RuuxVuz",
  "key27": "657hFYgYq8sk9649SHx3vdkoyDWdQtxUJUZod7JKpwkzWaRDquaRGUYQwyXPK6FycQYVGhqgpS2Pzf1DHYLc14Lx",
  "key28": "3aEoWfSor6SHaQH6dkBvpSaMQzn5GvUvfAN9ifCFknojAvkCrJjZkSLz6gBUiG48Z6bye6rf9mJwgQVZuoVvZgof",
  "key29": "4QbDCFVzMhJa7VHnTUtxP2ZxR7Qmwqw3YGHdTXG9j3CkZk3WkW4btdxqUfCiXFNn73hiTJ5aS5kwCT47NqbcVDoZ",
  "key30": "5ab6q6kviAqb3YyWtrwR3UaBbgSrDSm2vUfUCA6jh1kdeQcaj63AFGa53fZogjCS87sRRZQrSHkz8VFErLcYzNh2",
  "key31": "5vQZTocsfsG2emeRxd7ZWWdbq9jtMKuCrrAZ3KwrQ9h9Cj8UvcPrAvmtGKHkjY4LGn8sQYpgxA8GDZgjtGVM8gB9",
  "key32": "47zELkBxKHZaUJnLqyYGiTgFsGs1vKFLEmpJLthNJ9aNvLRqMhs9LaPbYSyfNqMhQ76eYhj1YJgiZ8Cw6u3qNsiR",
  "key33": "4DegAvCdMHgwfAvFWxz3uPVyw8FxqXRksFfbuch3LQ5TzjHCpb6kwxyhyKAr7QsLVoBP3BgWj6LiX3y6CwZX7vd5",
  "key34": "3QrdaRGGsJbDHWz24W2QSs9pqHMTduy1JtbQtTi37Jgw5nQAKpt35PteAwYbbcPPcgyf1uhY2FKK58jbXvoQprxw",
  "key35": "xNYDjdCWcdUETPT7p4tZQnvTaY71vMd4ru3N9hB7T1NUC9si4FUqmqFbc35YrMTaTBNPG8VN34Dk4PVTF7dEU2v",
  "key36": "315JVy6AwCiyfsFK2uBLYq84yFWmi2mn4i2MXHy7dLFhHMLMc2RHdbPjhHdsM2B3pPaqcc6oYVt8zCcwV4jwMfGq",
  "key37": "4VMnfEbLeTKxBiXQhR7TNbQtUCowLWNxBby8L8vTMUvb8mdBKNScN6yAJWzNbdFGpn3xdW2wPw4oVVKLfdKFHXPJ",
  "key38": "3swtsn7n4ShZhtnehwPxyeosgDvKkFwL4npzVBsUHoukC3pcXDCU83u3UbVj5et7nd9BwM5cSMHbQSB6XhFQpf3n",
  "key39": "3GoVP4VrfTEfAsYzSoxexJ4Qk9WVHAaqioATp5ZqaF3wNdXY3ADbs9bmt3Xa7jruhHukxLCGSexq575kET3Xf4ZR",
  "key40": "5XSmKWMEwiPFoWENqRA4skFekFRCjeMKrwYwTaDNWrKcqxdCkSgp6BdQtmXNtgzNn9AhfQBdcGC5cZ23A6DKEiB8"
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
