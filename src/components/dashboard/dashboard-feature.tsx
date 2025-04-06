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
    "2wqJ16KTK3BNR5DWjCu7CJCyPg9RiW8mw1mebp2thxLwDKhFqwaF6srR7XKUebmUqKyqEYF1eQsWxwLqDprjuaFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfKh8zvzfpjxSMALuJc5HzcKueAFpPqRe1WWr25ruz3CsD88naEqbtDJQsoPGNzcCVaY2xMSfLBGxMQw4pbtPKS",
  "key1": "3pi2HczJxudwcmJ9ku5g8ocaL8CMJreAjmqHo1KeQvE86qwax4MZGafSgmAxjA893qy7ehuev6VnQP2w3S59AEmM",
  "key2": "ptAS4FBcsE8BKaBWnrSm2tawsnAPyVBjrrPYyfPkLFFAsTZud9Dn7UVzq7rU1T2kQhctkHhTPF9c6AuCTpCHttf",
  "key3": "2FfjGkXyR25asHZ161tHBaLBfp1YPZqZUURQbJJPSgJmkpdHrQwZj7DQCASA6N1k6MmPcLtLBG8ZfYs9QKpcgatY",
  "key4": "5khEnxtWZ9GMyRD9Sjzqwvj6i8aXPPxCmhJ7FDGdej3ppt3BJfhkSRcbWHaCCvUN1f4CWPXjyRH65fAmU7wpMc4e",
  "key5": "2BbKsXZvSnvh7EZSK2RH47A3rRh4Spcb5b8xGPZEpiYWPYv5LpJPEbWkPZLatJgiV61EaNrA4yhskXUBqYCNZ9kt",
  "key6": "qocy1GXgWMZRrE4ia2DKHixnpNDM5Rj8Wp7tXcYbPWAAsbW7NTBL8B41b6v97PHLkTLQdhX2CqRwQETYWGW5PCX",
  "key7": "2PFeAVX7EA11XwxtgUnqAMt3fQCrG1PjAjLDUhFte1QqnQjehHJN6bPMP5TFhVa3376AFPQLbM5W5vdnzjDLtaTn",
  "key8": "3F8zEqkx476yhZ2q3ExUPAuXtBRjnRNrY6rN7yuYvBq7cyy8JBnPUz1pkNCzVekpk83w2vBtcSeL1MArH4vxTAMv",
  "key9": "hU3rpf4dnSKYHcWhAMRSgWZD1rGaMcUP4b3EYaoHzGsDsvMndC1W3ZQq7e4gcmgGAAFvmiZXxmHVcpiTxDXMrMX",
  "key10": "9Ns3YZhBe2hoSa6x36MhuVszm3HbDDphAFQKJZdMThex3rRq69EuGfL511oEWLmtkeAb5CbzWo1CNcRX3Neoe1G",
  "key11": "3sW4nn4X7iE6baKzqVCM4vXqaTzo3MFvo3SLGHVZ8QGbZoJc9DprJ1TNU1deNrS9nYLJA38d9jinHheAUv8rgENg",
  "key12": "3kH1zDjyYB5XRZPFFyZNW8zuZzB616gwnSSnsXScQEfZz8vrrKLx82hNMDuTnz9GWqZa1femm8t5WAtMy1FZsTKg",
  "key13": "5zP2t5s4pqG1VKgpf8o581GzfkU31qioGxp6x3uCivUbddpkBAKR9hrEJvztxnayDjBSAMXnGvfKndtxCdyHojb4",
  "key14": "2ad243oNqmHKsbvTED9q3sqAjqaKGU7EZHpX9hggNPFycc9JzYJvpvdtsLbndfCohyN8qSPq6Z2GscHy5SmgD3qE",
  "key15": "3cCiWkwJCL4ijRTffFtSwNPJnthcKKZkPsF2hnK3n3xwJgzsLkM59qSFTxsi1nWyiLqRnyUsce4tqBm9DSBQBFK6",
  "key16": "28Udo4oQuJG4ADGc6q9XGQmi9nwioZn9JiVjLY8k2Ze94iK5ofXbP3gPQLGndmS2sbEyvdNZhxmTaKEp8sCFofUe",
  "key17": "4pYK4RFNtuWFwunNtJQY7v7nNgRZqXeVC9Ed1DzWUqgUPvXGkzDoJcZtVW9PWVniUNPqv4uJUjmobrEECZtWU3Ay",
  "key18": "3Hv1qTx5njQEqzFwEc1JMoSLuGCVJwRYL1ihWb5u7ChBbgC9NaKX4ZKxpta7nP138VaS8aSsWGceLzYMgozjCuvZ",
  "key19": "4g4o8RxR92XsEMjVxHxPrK2VoX6sdg93J444NAq7aLun7V68SwSCJcmhZa8C5AQqeV89DDDo1jckyxWMqB9fS98i",
  "key20": "2vDrhNJt2PytfeFcD8JMeNhuY5A6jjpPk6meguKrchb9HfncwMjXCETV88bPmKTjgWHmJiiPeEhSyDoMWXY1DkUk",
  "key21": "2RAk7Yh48trJZFwpuQVnYqpUzAZdotwqhC2YWBiM3qtCkPTQWuNx9pDbk7RNo4tcWQtgsGGX4iT5PtQNGoRaiYZz",
  "key22": "3sqx6LrLcbhzFTtuB5npmMmViVu7eL8Kkd6FbbCiFn31cWd7YmsyVGbv7ZNDWt75mCbzjmLUtumE3XEP6RjEtZJa",
  "key23": "5PmhqQ3PG6j4Qa74bHHitqAtfz4YT74Syyuj3A6BeNxJiTGKddge5BQccyFcJPmcMP2Ha9DKWWCeGpdQDnjfqg2y",
  "key24": "kJYYXTv97R4kJPzMkNQC3hRZ1sKrcqR8qMLmcU4iQAEPquYXd2mAAX2UVLjs8NERhXGQabuwTn7g6CRoRjsVz1f",
  "key25": "56Sbu9qrie1AQWwYPheCK6782W8aHVFzbyxMC8vbA28dgohhhqYmzj9Nvfzxgpw1qt8nxEJmYPjmpRTBAGhsTtds",
  "key26": "3nqqcoE7ottojHgbt2NcM2Jz6CKyN4EQrafNDVggPUGUMWNUtBUMCT6M3Z8TEYe3pkrEfSXS2XRvvYFfZCYQueNg",
  "key27": "hTJgMHMuq8r7PmTDgXqdAh8RZYiWDBcAjLUxj9hg1KjvexnFSeccsXEe3QNuX4E8hr6Tj4f97tczynRhr2s1zMk",
  "key28": "2EpeAmuZfehVL2Evos1RdwcopsKeHUyjDzh5U1AcrbGnqEYNfnq9icgfZ7ctrajQCgeNhX73FnsRzNshQh64WPek",
  "key29": "312hg5CCx2uz9UUtedkS5o7rCSaVTGoup7AeKytV78LUMVTYiRdh6PHXjU67K7imA6BTQMsivodoQtF3ULmddDii",
  "key30": "5vm3he83DrSybn8Rq7WBsXbYinNkBRqUd1PNhkc4ErQfCgGL9hBmbnqewJb2xF4Ws5M8nsZkns2DrGXugo16UZGY",
  "key31": "cPoxWkEupoRbVvXf546n1rmtW9TdZpisoQyndg1zzo4fv4pKCffrLdtEKw14fk2d47YNmzwbakS6pinKyErPgxj",
  "key32": "2cbWH7T9oxokYk8t2wkx9uSVFLd5YDyfH3rnxhL3yDgBCrNKv28kX629E4ZVHypCCkn2cSKTvNuMF5SjM7bsib8J",
  "key33": "3H2TuGA1Gr4h9CQMZWnKkcJpdk3D3k6XTDpuKGnbhhJdMPK6X7uGF5To2KSeLMpvEWdn7esM342KGxmHctEtQN1E",
  "key34": "2kEbe1H5By8pVAFAZ9kCd2QNycd4t7HT9a3zGBA9jPBTHF9Ugih4WnmrurVLiEmai5T6pv9bKKfLNc9LdMQqBcpK",
  "key35": "5her25j8xxrk2ijMKFSUwcQ7Y4x8CX47mDPTBTJGSM5uhajginmEGtMvoxK27X1rG4tX3DZvA82CqvXhB6EAwHbM",
  "key36": "32KUxWsdkEGycGRgFKhj7Y6CyyzKT6jurBtvNWvjxsjvoPfXb9YccHQAjrd51iJu8o78gJ7f4nPSowSyW3tXWRXi",
  "key37": "5q6Jhdv3jPVWg3vBidViekYVjj8t8Q4JrurG1TEuAbM3uD6Psk17VhjvpJfxECDemEXtierrj3dWCt2USgibcr3i",
  "key38": "4GwL3d94LS43ATtrKTJbhXYzRtu4rfYM7Ravqv2wpLxXXLtZ696vd8gJQopQwUN16FYTDnTrg18uYHSRL4EX5Yiw",
  "key39": "2hwhnSofJk36p8W9cEF5Hf16eebuPZNoYyQt6EFyUmt7EqXcH3P9jcshYZQV7TxeYjKMBo2ezFeVQTdvzCF3sZrE",
  "key40": "3gDRji1SCqeKZQfArDpLLtSyVTux3r6p5PeGuXy8cBm4s5jQBjtH3jezjgfJAzpC89S8bFfBUonzBexTLMHR541m",
  "key41": "4tC1XazEBWuNDRpysR8Svy2itfBMdeQ1B6SLSAyPCdo12BD4juXwfzPNc5zmNwGPnfUR5MUhz6kR8iRaWSoGR8XB",
  "key42": "4tJQK2Y9KzSMpMUZ3q5GFM7yzeACEuiaZoTEhdB4Cq8rCsYzR6NBaJNEwekKS6iPpninSiQiokrNUsNA41rez2Rt",
  "key43": "rSunaXHj7qPzMrLf4ohLWkzwkybwXRRUiSKEmqybJ6ENQot87AgMEgbbbzad9e8HEC31jNyZpSQ8hRSeL6vb7gi",
  "key44": "22wHWG5Nsg5AMwGTwTJM685KSgds9vNVFwPUPQubbpCpboiT55s4jzf6oZhqur2bnKNnNjL7ZwTppqSzdg5JEfks",
  "key45": "7Nnr2BA1yvxoSjtFDTKG7e9BeTWjjxEcAhTixWvWUzxxZMTeDMwdHjtQ4ZpWSADL9sDGgXdH7bTKvu15CZL2uZH",
  "key46": "3VAGmHuicn42gbBL2nHX1cEYwYHByrVmmWjWsSBahZKWJWEc48DJvj2UpACfaDJrfyrXKJr212GB3j3endvXJLB1",
  "key47": "eM7ghYwG5pmk4ukTUL9U5qNVvLPAK1DWJ6Dm1RouK3KityNZEZEFtb9HiTzR2ubmhVfN9UNmpYjbKj7vNjrt6xk"
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
