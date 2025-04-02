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
    "Dfe8is72iuvPpC7hrq32XirYyDaWGcjxAMqY8ZeW1GAFgYKMN744GdQxSn54xHkDhT5MvRDGhHKnDT9L5gjgDPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KM81rCKbSp5ZSmfSC4G4xQ5E1eoaiFtKejFbLcRDPHCn76z7ec52wjBpHMnoa11RDXDMoqe6pwgzSwJqTfgxB11",
  "key1": "3debsdUaeT58m8qJb6PN9bds18CrZLW33adYgXpSMgKKk1HEFiZFf4HuZpsEZhdvdFVL5Vmg5hsZJTa6d7rL5oHS",
  "key2": "3EgtJMxpxpzjn3bXXKPCnLWDL5Ltnb36ukMG4bd9fW4VWbHG4x3psj8Lnjx5fLMRRqRRbTpxvGFhgiCiwgJFWeZh",
  "key3": "3UdviqTXdfYtoyx84DsbmRBq3xQac6u99aZJVxtHpmk2WbqPJQvhkETe7e9MWpFq5TjiLD7qUNR2wxBDSRsXpBTD",
  "key4": "476UGt8zLUzrBC7Pb225vzV7rw9qiGURLYzkqYRPHoSSZEQU6298tCngg9t4bJHq1zwZRwQkth8EjVJwWKCrKEAP",
  "key5": "8LdyN36SSrpjhjcyaRGDGbTgLYBh7pihHxpBfx4KkFp4Dt2aW9PeafDFPGZLNBx9vm7zZshaDCFh9nbyZDE2XSN",
  "key6": "3rB2svmBESqiMAeeZ1XnxfEvQUdYtfHx8SvKNeeeGxmz2h5vCT91DGERCW4tD5G8v963xmRevcnL86FFaVpCvHry",
  "key7": "2qLrKnbNMLYqtiSH6C6tGdQH6oyvREUKPd2SuUUpaNwKmHXMhpoH4vVNpRzjGoEYLH1hSSgYdhuuJzSVGiVPoL71",
  "key8": "5WTqiHRNHqQEsEXpxJoJPaANXHwy1S3wGH3ECu5UYyP44dUeejjay73A8UkDMvdJes4tVvwxF31TLdAwvQJEETEG",
  "key9": "3tM6QvFvZaB2E53VxRpQqzqXQiQNfwMuDWnM2fXB4D5WYUffBNSZriovyVo1uphpRLf4WrbCpSQp86kkoWXoKTZL",
  "key10": "2gqaLFM5MX7EkURHkoBX3Aey3es8LE3CQWCanW2oeZ3cPS75qqhC8oFn9eRJinW8sZhUPNyJzwTex6uXdJiCyG6m",
  "key11": "5onfiKJpuzBSDgubhY5946EeJFLQ1iaioVzNVdn9xNPVcoie4cmR5R7EnseEZ7k8cCYbGXWfYFJAp9EquCF7fyGY",
  "key12": "3auFzEy3eaU8mpBKQ5BF4ENbx7PZiQkdxGuUcGZRTYNhpSRiC2bjj9NfKAUASoCnxRC8nbD8WEYiUuVCsRevXiGW",
  "key13": "3yjEbW5tnCagQ3inPux1MYo5oeAcYgbiiCNJAPwVzkyH2VikSFe1QXYMqUySs3P83pkTmgUn1VJxR7Z3Npxyx1Rd",
  "key14": "41ak1uPm8uZ1hXqFaKVQvEetAyQSW3tdrkMYxhDuF86hCDzvmkwZUSFsYV2fF13C6zLoKPFvD4KU7sq15WxvW76w",
  "key15": "4CcmQMG6f8cZQGcyrzWkA2TgmhKdMXb5stFYprqRXwC2UBSKvjxZEjkjsc3Mj1mr3yFNTFnw3jFAQVCa9s2ykceH",
  "key16": "51xhcvy9Z5o1wCyVZuQz9vpujMFRaVhkZ5mDuPfrCeq1CE8YG4QfuNKSqQqi6B34RxzjGoi8Yjyon2cXCCFiNjYG",
  "key17": "DRPbvp3xuKt7v5VJ4AHK6ehHPyA1c3wcoDEb3BEUh51epFCGrq1yt5ZVgrGY4Rngj6mVzn3nebGbxTyqpgsB3hC",
  "key18": "3LHBym4xTjQwjU2DYJs3iiCRDkVGkAD8jdM39XHgW9hb9UK7vzNiu3DfCMXU3rPrkQgaZvKeTZFpdwnejCShSeeo",
  "key19": "4DhBuSgceHGHEqYJCuQeQeUS69ThmTtUwa8qxXC7YR53drCaDrFcnidhb61g1dz5sDA7WgsAygMDLwabAdM3EHh3",
  "key20": "eCXkdq8Rmi4bz696T8SAaYZ7JXz2irNQZSVW6MPwqBCtD7NfUGpptWkSdZnQyeN9NwurxVGTNUQG2aSiWTD5k6Y",
  "key21": "mjd3h4WeFvPysr2FraoNvXE2W46R6Umq1bAbC5T2TCjk6VxhjtjMoMku6oFkZHGCG9Kkb8gpnrM6mr6uBai8F1s",
  "key22": "wkrX9gqkWCYKYW1ro1vccjkVHocMnPWm1gkrGUxppH8BJPXAxYhRfcR5U36oRYonVbt4U8PxYPj8FzokjLkmTbq",
  "key23": "gNkJMUzFsxA6bWuWeVoHAtgGdgwZg7z8jSHWggELC3wheLLRH5ZCC3ueRKrafciHADsc9iAaTNPw38zPy34dnP1",
  "key24": "5WKwTd28xvRagVb5Z5bYxPBzqZVy9XET3RK2xg3XzJcgUjUxLUpRuEg16P6Tk8YiGpwWe2HmBjWEEtaEZe4TjwBf",
  "key25": "3Vg5sAinrAexUrTQY2QMt26Lri2zm2PfKK2MJnA88BtH32UMQbtHqY4VGygAjFxaymPv9wB84kPumgVGdbuTinYE",
  "key26": "3WXXLHFzsamPUphdjiP9XNzyULTU9tQdinghFCo376icdD89QWacMMDngotWehjztf3HePp5VSZ3aH7N93mJmWuM",
  "key27": "2UmHHeRLmjjCnqKXqkQb9w9ZS45aJKc7nkdzQzZoqDmuRAPyXSDmAZQXpfHahdyTothUcKWiPoytave9Vc7kj63S",
  "key28": "2adk9P4471wRgQCHqbZ2f3ErpLBxPxqcbTcq7n2kPeGULbsr4VNcbiQCWpFu8BcL4qs7KG7VYWSXu1wsNUAruQS3",
  "key29": "3uBdgLTeXQoxtJqknjYLzZPMFJjGxvHXfD34kajzvDTGvr9S7eHisgEPQrndNtvpExNjR7nVTQnrj8nmycT4PWCW",
  "key30": "5vAWQDgeQKYcpxYqGFGBi5C6VCaeoUhBmWrrpngdM7JUJboM8DzbWWz5JcXt3fRzyoSjpG1Hf1ogw2qVFauoahQV",
  "key31": "3ed1Z5hKtdkTHPTE1gsWpQ8ZfT9AgU7p5W3qW9wSZ8yTtJ7wM4EvT4ZhSfxtNu6nLnn8DnohDThRdBPqH4KQn97a",
  "key32": "32ZsrSm2M2fHcsUKWD6v6s2PnZ8Qwnv96hiz4WB3NE8Bv4RMsEThtnszXqga2DN4756KWTeDbGQMv8nzkpLjarzh",
  "key33": "36tMa5uGCq6tb2FBYCTP8gnizAXVcW3gATxV45ukwEWwrcaQPSQBme2YbBTUd2Gtfp7tavonmtqkTVvEAEALyvTR",
  "key34": "5eiesA3sFPYMmhMt9sgyrKTiDMvraN7NC1tewrHdjP1FSuGPgRcv3GRULQ8rSyHk644Y9iQkpvhZgkizeCq8LX9u",
  "key35": "2GfJPzbkTpwBoAG5GorrNDyfSXF8DFN5huiSDu4BhzCzGuyD5mv6fMnvUnX7eKVT1it96kyrTPtwTuN4XPaPis2e",
  "key36": "5sdpFtaokm5kpFNaUvbvZc3rDAb69ReH6bg67CY6Nr1fd7EifWsr6up1oQhf9a32Yw55BHrvMZuqpZTRCNFxr4QA",
  "key37": "5CQXhrPsRZ1p2y7CWa649wkTXjxL6dBnF25GKv9fYA7AfUBttaDkWJQxYiNREbJRZePxbbaSepcm7L3x5WezyoET",
  "key38": "Dbx6rpYJa2bARfTL4nfQxpiBLhmEspXrE17VSRoNc4Qiy67xMwoQy4KvU1gr2xQLzsDTiV1xh4sHCzTwPQqXpHH",
  "key39": "3r3SmQkaSgW5dvcVhjBQEuiw6z3WcZEnmruCCW3vfidaeCRmzgXJXesiGgvyJ6iwuggQSZU4u7AnKMkcPi9YTDir",
  "key40": "5zoMCCjiygCmJ8TjKnVuDTxRYeWbTzScfd7Z4JvLGAWjR56UNJyeCZTFDSG8JadayZFhRc8rULPSoaVzPCbnyvRX",
  "key41": "4ceCiSzWVrHNi4gLjJJn2DaQGNTgGnAAgnZc3JdzYNCZ7uQSTzm1ibY76msg7xtnN7ShRX7EJVfkfstPihWPQyW7",
  "key42": "9azJdQTcg3ejCMGZ1vWkR3iyPUtNqdfyK5DMqkdYzKR56vFNpgB3CEJoASdcUHE3T1PuoESQgyqfxpSPmJKcwfG",
  "key43": "5Yy7gTkrJWNGJDQ46T9GLCBAXpJMmeURQKbYzKjML2zsJa5HuJ1yPbgfzy99CYi77TmxqexzVBs2bFx4QVQMuXyh"
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
