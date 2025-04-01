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
    "3RYKwyKofjTCEAsjndKLgBd3YbwZnbYNdiZhYvPaXJK3JkZwq5uqVHHby62DMqoqzWu8iMG5oym9T3R56BRcqPvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fxGAFiWefasMyU53suY3kGdskifBwi7yWqkSbQbAjCGnTuUUuqp1muZiwjaahUokAoUrxcft2UC7s82yAosqbi",
  "key1": "xfmPpDfDvJkM8sV7buN9adQBriUzBMYgMoP7FUbMheiSGELShYpLroYvDZ7MgG78kzQtA3zP9qbXuEGRxJhxgBE",
  "key2": "5NFhfshcgg17nVotzhh7wUjHQybB7EPKxJPXkqGw3gNqZXuvBCVZwoiZpwzfrKcZwxUnENMNbvksz9uGNYvNzi6x",
  "key3": "tjDoRCcKzB6TKxA7J6WyDxtxMsXh9WirxycrTiFk6HAtcBmmAuTsqQfFiT3vCevd4SkZrNdE3yZMKvWFtPzZnPC",
  "key4": "2fMYscToJhnrb6GvgapL2opmKZYwnPUfYorQKfiVHXWYbrq1hBqWH29GHLrmmmA8JmPw979PJ21y3MWyGpsoCPm9",
  "key5": "25iRqVsixd6BJcMnAxPX2yfx478VxhhCQvsstXP8q8HCuumh9a79VPzWnJrc8CaEVSvKGxGg9uzDURmN3EcPTbx2",
  "key6": "5pVUwPLVtYFNzy5Jy1fYu6zeAJifD1xtJmK71C2ckJHoB57Gx5hB5Dg29QhumDNaVBFoJCgeijnyqEMjporn4s1E",
  "key7": "5baM8rNrprcrY3E7v2cimEaazFGzVBeHJ5q975TMxCYLmbhfJmqZKdbAXucFzGwa2AoiQEUiDPrBMTw9Goyeun7f",
  "key8": "JQihzeGyNtGiRX9NSQSXGTbXM7E8fvaHWS9Ct8cv3gXvHjrZ7V7KAJss1jmk8hZMaruinF4e9cMyNxZZBGb57tX",
  "key9": "ieiNsrwxmvUtogCYyX7PG6sycG71MBY2XDiQA5eShxy4nX9LSyuGdAYX6aVb75oQLDaEgrYmdhhpvzioRF6bNoC",
  "key10": "G3PX7T7NzNygmmA5o3TGDrzTMRXERVPk9vinchqSzc6JYbJQdQDKaHKeqNXG82VvQ6zfS175jH3NMaJRXF4Vpjq",
  "key11": "nX9a9JSdcGcCE6PWRMxehqA2KGrDuis6ziSAFXCTJ6xKYgc6Z1qYM6nkF5RRYanKD74x676p7cnWateYRe6rJoA",
  "key12": "2C3YBw3tNCuWnXtn55BpPMzowaJ6VnyzLZnHzkegnxG35M8xRkX8VnBBQGxyXqDhiXuVQeCAPbSEnEAHwHvS8zX6",
  "key13": "35ed9uTCDehe8ngr9dcEVbrWxSZxAgEvoXL8yvnzyMsnRA9wXkk5qE17XGyaomEdP12N3udmZggB5QCJrProD98n",
  "key14": "aUK4CZqEPkhm4ENGNssWuCJ48SYP8EcK3aR75vEJFE1EFSnfx6ykEv9zL9AE76pVFXcy5KWTYSkmzwBxiRbr2tm",
  "key15": "4AosL2YXP2TW9QRp7Fo6Fg9VRQdhir9hsQ57sQa2tbu9xwd9DAhntNZnM7ntFCSSpi3KnVdBKFL17t7TBWk6tVTE",
  "key16": "k6bzHycTqKqhRmrz2KEFifR6W3Yr6nMhgM2M6v3U8vxHHgTXryQFN5T4YPGuXF3niqaHjH3f8scmk1ni2KXt51s",
  "key17": "31WEZEgWsuK6vASCuYz65jsZqcG86BE65BgaGbaZBKdUvkE4ZPBPohumELHagfm2n4JuY2pbyzmJgMmnPHaKbLoA",
  "key18": "2tvCmdAoDJoR4wMCMXZVzmi3fKKqwJK25ZFqYFH1ff23FsKYmz6XooTeSfovDUf26QqJFrZqMUyDXym1XqZGszqc",
  "key19": "3yMqaRfgeidg8brcvWP9favpNxrgUB4kedsoNsMJ7otGuD1GX9XAPQ9kyY39ugAPbYntXaQhqY2nfH3B8LdsnTb2",
  "key20": "2giLWN93ffeWVghpw7ih3U4MfJUCezB8qxW1NTGWphFiGhetq97piChHQJHsRBDmSE3QXtNSdBPDBfXkAdt79R2c",
  "key21": "2PApJ27yGdA8mstyMsV2567pvCvQwwqyiD6fKYsiP7pqtoXSumE7nVm3ToFdHiAj874XoBZ4edagWJ75XD5iVpKv",
  "key22": "5XzkQPDagDfy7HcT1BcKYcayufPrwk1EAGnySMhs4bn3MMXnYZ9VpB8nWs9fN5qBMHCsGgiQEDnsxBn5hX1HbnBg",
  "key23": "27wrDSp7K8Q1mJiAFDnLLEBrHBXsbo2D3RFSCdRERJcSeUb7wYSSFeZZ8wWjTmDTKUZvSrwgBMaarBjLyzW5PiCF",
  "key24": "3Erkmfffqw7wasTJPoZd3UfXSMqNSSqKayf9JKVaPQLpY2tonvDjNdu8GKCTpyKtoYkcgehtbuKryezEe7e9HzW4",
  "key25": "4gA63YQdCi95DVRhro6Rm3MSpVj76yFrgfT4r1nW4up2qHQ5YZfpoTgEZowemyeHeqm9XSHrBWx3yPQHk757dZCd",
  "key26": "5mjDgqGqMNgJkQ6C9ZJgLMRRYmkzhzqG7AwDrqwnMUxW2qi9FDrFm7ckwTGZteNHfAfnfk8Nd3yDWjn7fqiAnWZp",
  "key27": "5CGvmgYTgzm9stJdkK5LXaWcdrFBZSdNFmsFqHYYKx5vw2jHi8iGECmfD6SyvgmnTMYNxqM3d7ZJ3Lp1EyDmfgDt",
  "key28": "64bf78MnDb46eWLZeBeqcvaTtQgPJoW92og1BauxsKiyBM9RSW9wjizMgspXpgFjJ9M556a3vF7zxi14LbAefT3W",
  "key29": "5LoBohLL4T4ViViiDHSfsKQF2vCDLcm7755H2J6pxb8Gs5uXB9Cp4bvi86SjtWiKE2CNbFVLGVgV1eLia7Lbc76G",
  "key30": "5ccfvmztFvn62Csj6jnaBzQp6bjhQYruaFLSp2Mu4YG38ddiQfqw2hrCmD6JaMGb8joE6BF18f2B8J3U4jAfQBEE",
  "key31": "2Mj9EM7DmYJT9WZLhbBfsdDLFMp1rRB2WDy4dz4QNBADsBemGbnaLhKGdn5R2TtXnSMAmNuNVzRcWGbdRm7gCZut",
  "key32": "5SWwpUj3soFBrmXCpNWSpFECFvQJXy1Qv54BtVkhZ8CWrGFgQT8WDBsPYNSEaxu4LRX8m3zhHmU32oRcYnFr8dkL",
  "key33": "2wQEv4cbzNSNocAcW72aPCbwnnNxaEAgkLhFQG5mGs2zB6rGGRXTx7q1fTzFPxocY6bPmdbZLRiETZvDNRkvc8js"
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
