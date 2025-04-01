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
    "2GrJ4xYinwbU5ZqEatGNmGxQ3iDQjMegokukaojDsMDGkwdUPKCjinirFv4SrPn425fGptZiPvaDktHQLTDgoBVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FKTNfgyqSf6p5V2vZwTX3f3cya3LeXUUvzYhhwcBDNVGTVPE2ZgoLN7Rc2v6BZ9dCsksQCg3MJirBdyZPhiPLCq",
  "key1": "2HSwm7nQ4qkmNuawpy7X7ubEjyHH8t9VjFz86PAQsDCVsCE8QPLZpHUvqXVuVe9bWK6Cq95HNT4ccVGKcxrh3Vy6",
  "key2": "5hNn7f2kzguPeNkkhyw5LHm262T7TJH3PgicvxXfTMBthb7EwmE4ZYD5dTnnhJBNMVgvzQkDoKJiYJMs4vHkEnt1",
  "key3": "NErr97wQZ9ifdz7NaBxGJq1oV6NsRKnhaqWLtDYau6ZeaaKgXc2uw28NcuonTMKanB7HZEvFV2edwGwrHryjv2f",
  "key4": "26rsENMoK4FuTim7T3wkA49ijqL8uEcoA5w1jKguhg1YZiqQZXkVDqK4emR8KL7dFnHXgN9D8q25xX69GaJF9pWp",
  "key5": "3SnFQQ7Gug1eTcRtDQ5z1wgDCAj1HCbumTdJdRKrbYuE9C5njpWJ2QVyZfmuHd71vWBpqbm1UXSjDJNntSbG73H4",
  "key6": "5hpKtukuR84VHXBA6DHpQPEzhaPC8wZ82T1EU3MDMyfbEKWgVg3RqV51wWqH5ow239do2K1E4FfhusXWdFHEy8DN",
  "key7": "2VLJ1ZPJ69js41vBi8chYEg14kxKpUj7qrJbe2WE1r3zztpt5JJVhcJyoXwFQ98fYKfjnZyz4SekmU13fSqwtBFQ",
  "key8": "2UUTwtVEPZMqunfKeMjh44eMy7odeQsMSwcdbCbfkzfafx22Lsq4wq6XYw6citaVDeZ7acXxfWkfgMvNNLCBENRT",
  "key9": "65hvQxBRsy26vQa3p7PwE3H5GUJ9Lz5N9JmXNEVSRya5VuPWiU8RvRRoJa6SBdexidsAs9gvLduUX8YuV7Eodr2g",
  "key10": "WPy8WfCowpnBJ5kQDqMGrWgFt4oGxtDPRkKRqVysCAMLjso8i83wGgXVMEb2MMf2wA8AzWNjM4n1Sw3SUCPpn9K",
  "key11": "44cu2TM2u92BzeZNPj6hk598pdjuWphvs8kPktwaWLPbD8198Gw63uWKEmyrb6J3oip1xPo2cKoXXtr8xqNGcQJ7",
  "key12": "4sudaNGsey6uagQvZzJHRcUGeeEnmtuRFNV7TJv62VvhTDV5xk5myBBrZBQStwjmkEmenvHEQiVpX2qazovArrGi",
  "key13": "2QCrpcgc7RqkHmZKy7iefyFHeAiFLnAozfxEX1Rj2sqhkqC6urYkfBkE8tcTHoDfENy2fAuECe8ZAcDCpcbPrzLv",
  "key14": "tNJwdAfFMv7chdHQii7PTS44QxoBXrcq4xSHqQ9p7crEhXyKvR381Bf15WverjgPYUkqEwyiG2wM19CEDszRpdn",
  "key15": "5mjbx1tL94zLAjvPks2ftxXfzE4NLUuzjwNz8T3uDdPkGjW5nLeLLWYZx8zAgYDJdeh51bxW7RygT5J6bCtda8ZM",
  "key16": "4sWsYYkW541zx5bfaxjBgPo9DfxUrgB3JafdDY9PGpRJXqSWvzb7pqnh7nBavQBupvt89gssiiUWVpFHGwbL65v5",
  "key17": "2i4PZtGNrUx6XgmXNT8rgp1ZhG9Pp31kNUbzLE8Xy5XYu9kJ4jJrG5j1rho8s3pxuKuCS9EEgBsGFSKgr1kBwqU",
  "key18": "3TAuA3Apzry5kTKzajHLiuX514wQ3LFFYoKvBbHmeaQi6nCMtacYkxCG77q3141F1mr4SCaY4yYFzRyRxi7KLH12",
  "key19": "2ZxK7tfKgVLSBuWvjdwbahRr1d86FnE1oa6JaZn3bCQAQE2EjCkK8BGCe6fREMyzEPTurVFxfJVa5gTiZHvC4cto",
  "key20": "24cWX3xhvhsrAFT9ZcxHS7qoEt1QtYNKgwm3orAjwnVx5Wfuerq7Tvp6xo51N1mnynaxGykDTwpxwC91a9oqPPCs",
  "key21": "55iVfXppJqAxE53QkDhiQcbKo3SYcfM1RdiGZhuuSvETCF6GQNKpVhamYb4QKn6fiTcrsBzyU7dvgVw7dLt15Ydk",
  "key22": "41wTqm7R52ekKJwjjCJbbkRwvDDTdZecuRWPfAvKMba6dr7oGnePyxcRXGwUU2siiYncVaXWLdZdjY2hC8PaqeV7",
  "key23": "2ijdorqRcNrinfnMrS2k1Y2G6KGArrsr7tCvjs8WrenRqu1JL9GrpGKgjt4AzwyBKd6Rb6NZCe8LTrWx9PNDyBMM",
  "key24": "iyqZeP4mTFkTdHELSMoJ7SfMewEooDFPds1kePjeWmgeknR5RajMT1wcSZ2DVwcpAVuRBypCZ6oDzfPMox1poUV",
  "key25": "2fwggs6hPEFncUp5pYmNwBkyzob6wtDrJabGwM7H6JciQXz5QmP1KU9Y5hWgGCER7nsHLRBwt4AZ9pQ6a8oH4PKa",
  "key26": "4Q383fpepTB8J8xHEN1j2CwkVMnVtbbxFLbPPmfPVQbvb8nBFHjMXtHmXsy6hGf4J785DpxpMGFjt96HAPnvsJby",
  "key27": "5qoarps6UyDnxecPBZ955JFbqHVrf5sKdXABgTQkpCc8PPhNLYoBCYEXVZ6Tebs5HT3AmYMu5KWZZNAkfkFf8VaN",
  "key28": "4XLFY5Djv7KPhCMki8aRmJpvWjnzsAzGAQEogW7wWVonC1PenwRWrA4ru1zcm76MJ4VZFwT4uCTk1KR8QBDCQZDP",
  "key29": "3fQjC3vGqnYJCW3xW8CUKEcCRhqGbLPJyjBkroGzbifS6CCzWktEmNtcFHsAA7cVf5dmyEuDj2Y6jpEVovpj2RGi",
  "key30": "5iEdLoT8Zk5g7XYMLZPEhonEfpLBgYH26sygW27e63UfmsUWyzc1tJqchNxgsRrAYJeK3NUhErzcQddq8RN7xwWF",
  "key31": "4WhpdPMsJPjpJtTEnpgfKAMPkaq37ZdgeyUbVdjLaznGx7ST3nRpBg6HeiAvKwyTBjiNbQ3YkgjcqaETwhLmJr22",
  "key32": "37r3oURvQoQ9joVNAd6H2GJWG6BwGpZKj2hGeUgWvkEhkLhpuidGpFn81ifcY49xezNK59Tox8qbbHQoLK4ZTqpE",
  "key33": "bJJhAbajSDZQk2zCBmoakiTaEgrZcGXspuXTiYc9AG2guBkaSeikaz1QVavmZ7BCMp8QwHwFHZaWPmVjipWaB9h",
  "key34": "3kVi2jq63TpYZ5TuFemoixq2NuDaQY1QprUWN21QRk7W6Ao2mhBAsujcMHQxAWKsgveHFMnbRXeFPG7DY2MtZjk9",
  "key35": "4B73kAXK39hMHVbzNyEtKVvUyeG8bvefKwKn27eFLKfcMxsfnk9yMPKiqJnp6wgTheMe5DXp33vk2RLb3bZ84Pj8",
  "key36": "5ofw3QtsXBxNW5DoBuGuQf4csmCNdkjT9Qdy1y1TC1EhZUkMGBUfsDJUFi7Gh6YaLgvQ73y7zLELYCv5LMT9dHJa",
  "key37": "3vzAuyTkucL3LeV2UVU6bqhSdKXa4hfn7VyWnLpyzfBG76QB3EwMRNN3Jm2UPQUXKX1WRTdDTzo97FocrRcGtuZM",
  "key38": "2BSpJBK2c5JuFRrrbjF7iBxRouAsbkbpipXRmBKFvfCC4cuTM7BoiTGftGoTyqeFgf1qmuh2ovckzCamitekv8qg",
  "key39": "rKbT8e5MyzfKhSiEMsoEo9irdrqEerN5qouWBXha7TNFFhrNuntHoivsovMuFse32TsnPU5J3qXHNyrwtbGT5xi"
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
