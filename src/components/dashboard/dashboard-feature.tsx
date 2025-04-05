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
    "5BPC1iuSHd6QZ7x1T5rrz4zcZ4n7e89q8EvRfvwkq1EFjeZWk5AdgH15n72Ckz1cBy4NsC9VH8wfM4AGiQDYFw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Qaaq85wWHo5sHehXv9TQ8HGCs92eUcopZ1h4d5gngUFMUy7LUzrkSsP8RZLcYPZsaaDo56vnyLKS4pHETWSFwY",
  "key1": "2zzJehr8JTaPSYv7VDe9x9FPyPYz5X55ebWqTuNYuYedwtzjgvgsm6LEFhAv6GWabuoJS32tXbpMdZofYMkbWkQr",
  "key2": "3LzgEXoUmZaDSHaCVCbgqBostg6xiyLvvsf14isBVxWfoa6CMWBgC7qVG71ndbgRMwPHf1Nx4PxX4yuVgyYieGqo",
  "key3": "5ysVG4tsjCNZFVrC2yCUYx8HH41U3jkrMEF1Fzz8fhFh63eu4NuiL54VKPwiCvT7ieBYrUk9z748EDR6iRawaFhj",
  "key4": "59X6nA1kegwciXKJFAUsAaNonHuUXYPMb1WfncoknkKPwpudT8KphADraNcgB6o2ek9nNjeZhufAT8GXbNwDNz8U",
  "key5": "AxEe9rprEt515uZEaccMYeJLQN3uDKFKb6y7kzJABKximusGQ4M1hWq6JGZykmcRLuvUnCr1kCdr242rSR64oPY",
  "key6": "4j4ZBTvLtNm7HkxRhdqB9VKUHcm9ga6dNmwc4AxjsuqoTydcnGdqvEbmouo3RKP1yoik2YTbCp1HqyjmFaL7cS7E",
  "key7": "3HhMmLvuSKfbC3SGqqmozH56smizdKsJ4maymJht2Wtuyci57SexJxCifquSxSfFxboqyjYNCFozna6UKMQ47KYn",
  "key8": "5JVpKoczcsQYk4HU4pfejULJwDtqQ7sTH3yLvT4EcASN5vCkDavsjmnUS1vaTaupDj5F1j524MTUdfZynZtkpVDc",
  "key9": "49Ri6jy9R7YVFKCpoF3zAfyztUUeUXSyPjci5ZBEAhsHjAt1tTEGq1JtRc5f6jL88KD7ySDP3G4uEZf9TbWG1RcU",
  "key10": "5U55xow2Dd7qjpjosMJWQFpCnUpXFhwzpiRXUkRbDxJnbVR8e5acZPiqUg3LmmC1apG9KfDEJVjAFe5QEBUQWUSx",
  "key11": "2Zb53Y29Q4pJyk3SfVWoVg3nQDgUpwQ7XxA4pZex29cutvWxyqukQ5L5FtXeAeUo5H7GZhGyppqsepFRqQWofXWE",
  "key12": "4NjxCffY6KC3gUomL74W2jKcLVvi8kNuQ7gTiXTqKd5fWwEtKjNCxJvK4GQMz73hV1G61tR2AbbuiRojXSgjJT8Y",
  "key13": "5yPQ3a8rqUV28YCbUT6SBnzNKVYTGLPULdzEVr3YzmztuHzZJakv6rXYrDRexCzs3CiuHHUV6PRxaZsW5XaZXb3Q",
  "key14": "2vZKYZoZxNcSScZD8dK7FUtVrGusFESQSPLcVXoKQMWpF3z6jW4mfEf9Jaa6bMK3UeV55hyDr2DBfjvMhnw1T7Lu",
  "key15": "1jRWsoyrguLfD8f9yrBEYCeLdYikbaeyc1zEQLKrVbCkWNzC3ojxU6naJsyP6veuUVFLCEbVW3WUShKJoC5s1iR",
  "key16": "56dN5n2qgn89iKVH1pBFAJq6d5jptuSjcKf15sKSHNYQj4D5C6u2km4MEvMba41aN86355hEuL2mMB184Uh9hKeH",
  "key17": "5aLb4GG2mEVHcxkn1qgh2s9riE1MifDacpMWdMuyCXFE1kyL6CXkwsv6yMhzCprMqaiHWD1xxAYuwR2LHpWkP5LN",
  "key18": "5R7q373WW5DQ2qYzeW7bTd46BJ35CBkgJmrna12q7s14Vfqk5vJ31DZ6uFtC9fe6rX7YwmEuCbZBDunapoDpioxr",
  "key19": "vv8opxLoUFk6YTvRXVdCUhD89kQmV3LjHZbGQqQxVTsgHA9CjgTnP4vwZejn7HZHW4GevgkyAux3iQpEPnJidkn",
  "key20": "55b2ug6GL4FxRAMsZbMEiSCFZdDFPDUxiD8DVHst1zRQdF8XMRqPLY3jnA6A2rm3Vyv6JhFSDJxtjnzoZvh43uYR",
  "key21": "4FxeUGfASN51HRL6BboTsxuu3mRUQ9pG7a1FQHC3eJCoaDvqXqfQXdvjw6syTdBUHgR5UcTReZiHDM5maVH5TuKk",
  "key22": "5Bafr1fgU4WdVWCyXAAgJagN6amhCTgqF7aBYyABKrrnE6UXXT7qF3qTH2DqA1pbaJLFeCkVpbFwuutr38EMuRrd",
  "key23": "2P1JcAcFd2j7u2NYMXgB7HEot4YChkRszoc6QVhHW8teNkNXkM31PcG2eBt8r1gJc3TQp2MfusHFTJmAwFWMmUnS",
  "key24": "3xZFsJEomUoGQANkhhY4kmkADV6e9rCGWjpQH2AUGwdzuRH7oUfmjnWmovfWG9FkWnFDXeW3u7zVBsdj6D6B7MNp",
  "key25": "5oMEDfkEj5ua4ird2DWXxFpf1SkmcHuzATh14Hx742S9oQJBSCFQquLqxscPRb671TXBCqktwPfNR224Shnmu2e8",
  "key26": "3kmcxy7T7KmsdJWZiT7osokybqFpW8QLguZe3quLKPaQGkXUS3TmJqu5rrhdpz6pcHqsQheBr2rhjpS7rLMSik3H",
  "key27": "3YirzM41tLrXoPuwhdZkQjMwx4UM1LPkXMg3evJsYMtCrhGDEnDyvPFoyaXDTUw5WCdPWZed74QjvgTjTH8o4h4",
  "key28": "arWW4m9wnmAHmww5fMt3qcHEQ5TzuzRisQSNZ1s7SW3njYeKnR9azMT4hMkDyrjprpdPNkp36D7wcU5N9wEkreg",
  "key29": "2iPpwZ1FiFskMdvU88VFd9YwWmzj29zSQyNFGDihoq76PLwaJHZwCZnQFLM9GMkhhVYyagTHTX2evA8MccHLHV9H",
  "key30": "5E9EndzbBuJzbnQbaqMiU4b2Jz7HXonf4KHD9DxDbcpDR7F7MbtQFNSkamSdxs2ocn5eMp1dTYq44YDrmFouHvtN",
  "key31": "sVqCxd6e2B6djfbk89DZa54iP5iLGk3RvhSDiz93TWqgcTC9SfnYkvoBiBjcRsKBvqxnyVd5UiYAqiPKG2gPZ4h",
  "key32": "5YmMPNaXsaqSFp7aoHD1ATtdewFFRNRe2XNYMCvRHkSfyGiWnQerGbecrRnFwfHW5GHMTrnDRRCPWLrcaZajdR55",
  "key33": "3iaKE3FwE3geBtxvntCxxuUB5dt52A85f6frqiHhoVasDqu9iWY9Vy9dGneYyvJCJ49fZZ9z1wPucQhPjMsjEywR",
  "key34": "5aZ3upajgWuVv7YPF4DmewZ4yaiZWGCq2pnPJHJU9FWnbZo18WwuoqaMjPq6Em3HZRvraPWsZeppK7zqYvoAtNqM",
  "key35": "3CpkQJTVuYXmHmTCw8tnrap744h1GNwWjEeMoJRDLN3WRwY2b1vvFWnxnUpJCpuHQtwwbjL4DKQWAXm6syhrfDZE",
  "key36": "xQS5QLjgeoRa4QHyAUGzQGt7BgFEYQF4wQdrvNpQQgTanKr6jxMgsWVWgJzhzhbQNfGAR6TLjad5pmpfnXHy1sD",
  "key37": "59xX8zfFp1d3gjAmrHCfFKSq5kZv9wwWxmjaSRujDTSc6uTxH9v3ER7ZNGpPxGMitjXdUeUBY1BEhu9JYegNhWfN",
  "key38": "5njYYX48yHJjt1jVVqEhxSNePqzET6ZG5DVghU7HrhiwJ8ofAw6egTbYwqiNrk9tPZy9SoPNR7aYQq9VyeB7fBwH",
  "key39": "RZcJXRrSutSf1Qt7w5vz8ys81W1xLMvS26NvyPnnrDj2UPxTUBS6FBiTEkv7JF2TxNKuMghFS2LXKcGSzPQPaJD",
  "key40": "ytCbVbDtzSjGLoThzRoLdFreRyiR1VYbN5n8K5CeRwVV7egsm6BdSkrjr8mwSe24yTYT6hcnaRputw31e4JFWAD",
  "key41": "5fMB5hJB8P4PXPAL9YXd6JqvVK4YCuYGr9zEQRXzRkC3sdPdnuPcLjXL3xxVtrppHD8CjE7ueezrwee6fxdtWF6T",
  "key42": "5UkfwDfGxHwGpDg4cKh4cXW2pfUTCWpA81mAroL466RibhPcE8U7DTVL5D6xeRyHgibGmkDVqeFJhVq6SQhik2F5"
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
