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
    "2ZSTRuuSR7gb4J72wG6mEA34vjEL8DVaaZwnw4eKEZJDxu772oKNLQQRBeEHTckQTPmiTQUFGrUPe4p41cpnGoHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzVutpR8xPi7m4EqUYT9r8aSYNCAYjoeiXT7LwHicsz1dC1Ro979xdwEPabpAv6oCK88XMJr2uTCEoLN61DxLcN",
  "key1": "23fhz4E3rtnSX3Dg4pP47wZmzfeR1yqYPhp17guiRJQ5rfDsL74keVXqXFzxtj7NzbUaCRsA4GVmzCLEZjvhKpoG",
  "key2": "3WERf6aspkLbqawTEsE29cz1CZZthFQuCuEvCJQT2VR7ACFYFXbddtwGxSrszBp2JXwdNXqyu2XKXbqHiXh6KEKQ",
  "key3": "5sWyXKWqt39vJkwTLgSFiaLB4GgdwkvY9ueSCt464LhLGJPZ6cczA3brV7VB16PBCqp3sxMui8VQB5gY8t3AYptV",
  "key4": "msLkFaZAniBBPLem7FoFs927gxyDSaKcxmSZHRzG1NrypE23c9U9HWsUCVHjqjgUzAPi47YzDc1hKHdaCPMFQ6A",
  "key5": "VJMpJrYYHnbeSmveuB8CAR3P8qdPQVvc8jvB3LhdXt7wJ7Vq9TdWMjDmNtCwHnRwXqeWW74oYP6JDTMdmM3AvXA",
  "key6": "snTyKkXC1Qk6fswnYK1R2CPiDjNhxMRHTeZf1A3NL21n1gqS1NeAk9KR4e3VmyJ5Bc86R1dQMjfV9NuRwfZDEUR",
  "key7": "4snzVg1qvhRUixYtrELDG6PsqJfVF9qHWcutfeEtxrurLHDwCPL9UBK1cTvEUpsz1PKFQne8eisaTRBxTKkVHp1E",
  "key8": "3ETCscntxAQXiD6rDi3b1mEazunGFkynLBbbrh1LPjwiQFa7PV5w9Podb91XshxfgugfH7Ccyf4QMB3yiKf3WS97",
  "key9": "2j3nTKB5frnAzaqLXf7PBoJQQFHZpw7qX4n9VMbU3urS6qhTtHuoPVEiQMimA2tYP3f3Fb2QGXrAzqvWukznKUMd",
  "key10": "XbDgyUgoihfomo5J96cDKVphDPeKd8cQxCgRHmtd53Fe1muRRw4MrM4haS5zvFv2C7Bzk86UMQykMB8vjkreJM3",
  "key11": "3mr1hKemmuNstuCHpTYUq9HiqHGyZvr2daPNfUKozjSyyD7YttPYyoZg7AhVRdU4ASynRtmoqs8xo8sCZznK82tF",
  "key12": "5B7wh7mpwnhVqddrEEdMzePUcjJ1kCzpMQXcL1rH9MukFemtFWDMooz2bFKGuG6x88S7b1sxhtjvBZj4TK8Sen8C",
  "key13": "66E4kpjooyLnrY9MT6GJ4XQPucU38VW7TDAPahzYb6Ko66oX23yrKetPDHWVAYPR8cbhA26PcrzKjTobCb9SY7zP",
  "key14": "4caCVGBBAZJJzruegsTNTcMUk7k8kSCHJLcVHsNuZB6JWs8gKkWbwSyavdGNZYGQHcTbpnXiW2j5z7nXsaX8u2WL",
  "key15": "378A9YZvrbMVPpL4eQfivM2fTVLDEQscF8S5jZ5PPXYJzJ8SS3Kvu7Ezef87TXtqdbCepMXtnFRVBzCyxZgoeeUK",
  "key16": "2fpWHnhW1zkR9onUPTVZoawTABMeUhvytS22bCaxk9K6psR84t4zVe1mtHd7efTBvPvY5eT5ZgztFBvUBzRPi9oC",
  "key17": "3wU5LwWUVHXsDssyB9Tc1euRKfSqgU5WFXo9jtZo7oX2SD4akAd94nSmDFbxn6KEk69C1LDph2sYUUFDi9wBdnAE",
  "key18": "1KenH2h7X48jY14SRpRB4Eb1NccGirGB5sCQbutAxQt3J46DC2KFQgfzC9JjhJuMY3HGoqRDsJpQw6Mto8RSC2B",
  "key19": "3Ng72epeFjouCBZnMa5KGMSxsBJG89HUUWfje6gEopjtW4TrHKDVy9QvNRzSkZm8hcPEg7wJZBPgpSHG7Jk32hU9",
  "key20": "3YE5Qbnmg8PxXkjJFoixQXVLK7RQmgxVghCVgPEajk6JynVmgfYQy4ctDKWwq6rxwU4gzxXzPjyBzacHDj4vdMtP",
  "key21": "57wZgcjbF4PRC1818qfADd151G2uPn1a6zVodXfRFFJ6JVWtzfKv4byCsYp8orHA6mHQJTo52zhsGrBoEPAjwLah",
  "key22": "4Kd8FwoehCyh6sLtqWsBXVqFJLuxdvW6QJR9Xe487v38BcciUuwZMXF7PAkhRpyWNpr9za8FLVMnGzaHCeSU32Wf",
  "key23": "u5LGue9ESHCKZYdA2YEKDSJNh2WMcqkXmfJwCr21PxGPdSitY8aFwJs7TooVjHD8JYKCLDrNc16ZQCd8P58bDKC",
  "key24": "8AbqZRQMRRChbQuoSVWwtiBFmVisg1ADz8XzDcHs2Jb6iNzMvBVGtN7cNsS8gnjJFAUMUdLvvUdcDBJsqJEkfS6",
  "key25": "5waspTAwJ9Kyvrw2b482ygbj4VzA5LFFGTwtiuUyQo9Ehe53NsaMec8yG6LANK5nFRurx9QFzB4HoBuq9cwGgzmX",
  "key26": "2xj8pVgj9AEz3hTa5RKkKSqnpN7phJGTF2jyEVvqu2qswYFdcZsGyg1ke8pe5py79i1j6uMsrXnScox6dzP9epcb",
  "key27": "5dDhdfwTaVHPcQ6RJv1YLZ6RLaihpFRy4v5HunjidKgaLXciGbJGaYp8aXYwLpZJThvZCn79A65DpMiRqXYwwoER",
  "key28": "3WYRKUnmfazdQwHpbwwjycyfR9CMAfJNgqs3dg29zCFP2Utw2kX61FksP1eg5mkBqZAjd5AVybyN77ipBPFnTQXi",
  "key29": "369kjeLezjfzhPzrnqyLMDtHS7YKUXkKwh6snJVSS8YZT4SEbPeRN9BrTaENH6aawhFkEkr2YuvFAm1nuS3qd8Lt",
  "key30": "5D578Ua9KQdVkwYj8Bph7SzJmBK19MW3PCftEhNdoiDuD8dERdy8bs8py6AcuPrk5ZaDkTVWwvPVZk9o7CA2YuHh",
  "key31": "Rb9ijbuFSyeRJFsJAhSehxejgqFoPN8YvkuFxNQKKuCBohknXwBQY9TgHWLr2VZcTJXFk7xeNxXWhTAa974xJ7s",
  "key32": "2sBmb3fvpRL3riM3FNQLRrL9fL3jyuqqA3vHahLdrLDhz5NpKDb8ADSochU9zqXntFP7nb8QdhwfPoGvfEGeHexL",
  "key33": "52EWa7n56adbToxK5WwZ5vCqvL1kjp87d1GXAJHGuZWft2jc4PW6utbzk3JC3b3HF6pjBKZteJeKufJHpMiUXz8q",
  "key34": "Wc2cLvaXyD7PJcxjy2x2kCMVQ4gQKwVyQvgG4B3MMJtUrB6x3KgyP4ZZ2uNDmyw74nwiPbY39mHwW348Yboi3b2",
  "key35": "4NnFkC3NWdBAwifj8gEFgCznYCY4Z6gNspr2uHuBFV9mkL6j7Q98DHyGiLuwhgb7x9SzZE41X5DL1deTjFLcwJm4"
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
