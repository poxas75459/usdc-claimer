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
    "4QcnPPA8C2sBZCzpXJ3wPe1VRo1MKAxEGAyYxwEhDNaTcqcJNHapTgQRFjADpnxzbNByjFyJBSRpYdrcz1B1jxUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XftrtpprKjfLfbUSu4kqd7zfB88om94mnJ9AmhRwZLmbVD3AxNHTohKsESDqqFk6L4J4MtEfGYhYpfGX6dka79",
  "key1": "3516fgEKkmgf7RUbQzxosDZv5Un2orxtspGqgwqmuguE5GW5YsxJmj4YqJJn3mtwo4mEVrrHR526pHHYCLFTndtk",
  "key2": "4SCgFPZR3g71Sru9FPQm8hs5Fg7FqGcP66aUo96W7Xrf3uwgGrczuoWXK5xJAHarzVqqV6u9s5qeCRXVaZcVubkj",
  "key3": "4mFwaBTiUX3jS5GSTbfjAN7RaCYc39dcJyecXbgibZ9qzwZNukESRvUhxk3oF6FCn5VVYFx5Kdc44egiTQEf9brX",
  "key4": "5wVFTrePgN4ccmMP7anUsNLuwKfZvBKrdSxbWzUBqt6U2NeWH7TTxGKndMRgHPgBgSgEU21oXZBWaeAQ6MzNh5pX",
  "key5": "2wgsuyEPmBhd7KEVgioGz2t2ouohjvmo72WrvQY2WGBpVMDxrdQjBstHavyK4iisvXgTAUXxGpHDaaZ7fAoq7uv9",
  "key6": "2CNENfqEVnxswZc9DFSo7wwSfGpRKyL2Y3yRxppNbXiSUg7dZyuvKztQXav1BQXvgvmZac7vtPKhHBTXHTDnP5xZ",
  "key7": "2XeD6wVKuRofJd1fSpeAmuiLrLaFVtnDsgBDgLF3vmnBQu2yx7QNjcQvvZ1hxNFXJyRhy58STaHk6sqogzYfhe6R",
  "key8": "3bg4UxEeyV5ijaUgJZ8gVS1Z7GKMuEsC1dvPy5R7HY3Ykzq1TgKZFJ9At9EMXZpjGU9nxgvMPXTLYkLVmDfKvMQN",
  "key9": "2Q3sU7rWuXwFnPAGtWntbACgLVdQzR1MwFth8W3A74u6eFavHMx8NVweEtmG7dwsatwSggYNt2hSYngzDc4LZQYW",
  "key10": "fMFa3yLU7aLWPXgqrit9yjoaR1Wa78y3ZJidBov3YSVjBHtbpCw6dNCqwepMi7HQLnd1mpMTuD5VCsvj7Z616ni",
  "key11": "6z9cXt4hZFHzbGKGukYojqPdWLarAe7zrHz9GryyHFwHTQgjiq2D94kefb8xLe6UUDECzfX6fbJb8cJ5afnpBVp",
  "key12": "254FcJcnUccG82nCNC1F7eTV54cEo6q1nCq1JATV3LnEmHMrAeV6gszjBhsMDogmaAwxzkE1zKA2MtJyiAUoucLd",
  "key13": "4pT1QBYU5P2Q8qiRFDCeKJoe1weqFp1DCyh58VgMyeYNuvYRt6VTmxW5NxFJFB3KGXrceW55fSQQsuJVM2e9w6pj",
  "key14": "5mFDBvRN1ZZaMe5gmd1Q2DEAZXY42SPcBNN1gZ3jDo92E68ki1PGHSVEXPxEJa2T1G7CnD7BifP491vPCuL7HLkb",
  "key15": "5L1RZzCqejauDNL7in5bE2H3ByqLTmvmSkAXQRAfAkuCVtqGsu5jQnzpG6wWB7HLSrojpCHJDfnZp2w9eW62jdya",
  "key16": "4W7WaMfRkvmcMW5wD6TZB5xJuGqKBzwiEWghNKbRe4my1qyJV7sXSi5nkQVjrvpmVA1TNvN6SyyqQqGFE1Z8rJkX",
  "key17": "4d1Srh2NrmRtg3ZU1pNJYFJu8dZk9NFQUK359FMeLWufrPyPVsa5MtTo4Zor5f87uucfYJe2NsPTinFAokkUZoCS",
  "key18": "C5Xdz3X6LqqjYJU5Dx2LDKLG83akHBbFaqtudshGwHZXsiFw5mccEGQqLgX6UgvwyxFEw8MJkhktzK9jupWzLq9",
  "key19": "7Dy9QrxQb7f4NVAMMmKHJpx7kLnRDGTJEWspVdSA6TMAjhQf8kcHUQEvwQpYnjZWzBjxZiAZihM3TZnxtUvmS7j",
  "key20": "rBwNA6SzNTa42KcVE7C7ehyWjfamDgCJ4AUxmJJuWCzyYM6cL5V2njJfAQt2rGBLuXfz7mYpgr8N5d4MZKNWf2n",
  "key21": "5fSW76kbcgeMuLphhS6EpLL3bCST5nSNi4XqRh5iWdS4a65vBpumD68KVmAYEsyLY2CFnvxRYxVJthrW497CMHFC",
  "key22": "3EUKoF3rYMjFok1FCANzT9XrtY9JzjYSUHLCwPn4QhLcRW61zJJjkb5oJVydYqtManb2hpAWqtZfNEYtuNfhx7Js",
  "key23": "BB1KXonckVkpD8ZYCdTnGK6E2TSGr4WJMaoNEw6MwkqhDoUU4tjhAEqhTNBVioMaXbRmDKLG8uCKnj3iEp3Ezs1",
  "key24": "53yu3b1o6GSXMcdnAwfWqgCkGucbxb9DaLrnMxDYQSBSCysRiwHrJDrgvE6nTPCT9yBazhcbA83DmWYp6Q2hL6dS",
  "key25": "2ZUhkNgFP364dZUBxp8h1E9xveNJTVo4CoojYrTqqxApeXpviNpPoNb7n5nNVVUwydCF5xxvaEi9J61Bnk4S6soe",
  "key26": "67ZGiU1UbLtSKGEcwYGMknDrd3T6twVNAecoLJPD57hb7Q6CCVUkU3ZWbSe3xjz2vtTSnRnF6AtApLdTXgTu7gNE",
  "key27": "3DAQWzacXSpfMpS9e6AK23aAFSdNdyWL7WEaGjmvLKTyU9Ld1X8mNk9xetf7KVZ5w6RHCpHLGSjF4ea7okFDBSzq",
  "key28": "3jwGe1XaN5LDBnmP2hnE6t4Td2JBtjPtcTLmdwp1PJhFHAufzW52ezNCJ3hXr5c7ASkUrdFtxcysq9cyLqAPA293",
  "key29": "4WrLhCbKXi5DK3haXq7wGRQuJXXju5gbxNdzQQbChGoEjwNUMDojj7Q7FNDF18i7hsssrpiaisMUgvUcRFVT2xQF",
  "key30": "3MPwXqiEJt8fhf6JuAyP1q7VkWHEKhVQJgPGQYrtL2woUtmr4yxZZhonAEHmaXBJUw9EEVrpKAzigQHXt8WwNhZN",
  "key31": "tZGJpKUesRbAVLptinG6AJegoxQKYWciLY2bhgJzFHeEU364U6z8HRtU3NS6CKizx3zs3Q6cjQYGg82Zi5XZUxR",
  "key32": "a3XoFFwrTwLWGBrkH7Xf4VdETr4HEgmc8Cmocw9sPyGYAaeExb4F7VDirwbsW8Gc6is51wGDDb7LUH31F68xMwN",
  "key33": "3hsLBFid5oEmKNU4cKNBXDcdh3FBS4uHWsogJgosGXpL1GRnxaGmaaN85qLiL6TK3LHkPcLfV4cZH8katDLPy4Tx",
  "key34": "3V9H8XvBaXr4nzgfpmAmpkmxDWTX8QvCyMYK2uWwJm8hVhaM9FTw3quWRvYNqs5MiqfWya4HLjSAtRX8bWQ72R3K",
  "key35": "4R6XCJLmX3RyrEP4b2tJLT1bQZgMuQQcyQyfypzjCponWduRY4XYC8TCTZyq2tBucs75W8eRQrtPBPR4RnoWdN78",
  "key36": "2nKSFfSEnRWiWvhFRnQXuYU9N6tYqaZGSg2d8WnEckzguuWvLukEXNM74sw38o2krHQmwhhdXPZziAcX83DupQuR"
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
