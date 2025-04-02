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
    "2D5Z2UfNZzHmcFedvUr1Vz8kmNeoLUYEHYeixAzXs327MKaV4wGhtxxucvmz4Nk8Qu7MT276Mx2WVfGMRsas75vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRVe9fGsdGLdv2kyzXL7A4eMQmDsqj7yNZkHpnQssNUrkytYkNLB4N2A9NPJ5zYoxZThzcyY7JZmQ2jv6kAM2h3",
  "key1": "66rUo3iQUHFyWHEq8bHg3BdNh8LtnUGFovn4YzkM78is4AM9J5mHFdnF4cMVNdjDTfCPFpja5Nyfj5TRuG2Q9Dnt",
  "key2": "2NjsovaG2C36FZxfe5zQ7zXBJbyTsyC3Ncqf34KvQLzHjttYWgB9wgWjbGXEJmFmWFDUDDN5k13UvWfAZVMp4qQo",
  "key3": "5Ci7G9Jos1HCJoiHGSW4vTqYMZRbGJTi8rNfpcq167DQnFKQo4fQFrZ9m9SrRPs9huA2mV4RmEb5gsbH5K2ZnqJz",
  "key4": "4n7c8RJb9zpwtcphoeDmXx2d3QkhsXmqbe9RPwrkVUGonU3PwjYaGvusRDQpvQ7VHpQW2YM1uPp3Jybpbit6Umbp",
  "key5": "2RU66Vevov6RZsKeqHCz6ENNZHTCjtPHrmzdKhWpgfYy9pr8CXhuB3Q1PnxdiBp9S7FuHHH2YRFASLYZEobnvMoc",
  "key6": "2MYeGapsa2rG9dE2eicxEkxa4eSU9R3QSPAxqC9MecoXZbTM22KkWVjtMTmFSbFhksziaPbxiRkXzfBewCG8kJG9",
  "key7": "3XguKQg5U5EPBMJG8vmFVkwzg6bsMHGuXZmeZn7mewwcnSydyZcqc1keh8VmjRHEcHKofPmPvy5cNH17y35SLw1Y",
  "key8": "5xN4tjCHZoPVVbvniVamNdYG2i39NaU3X2qXjouM7vwdXx6GA82ZNhV4FkoBdGm91Bze68LYWoXmTVFWdTyCvZhC",
  "key9": "5m7EuERCH7fAgB7JR6nF56SUYDGMVJ57aFMxrDTQEJqefGkmEGH4GpwugwEG3XTJqwLRk5YC2ygqfZWq4UcgEFW8",
  "key10": "39Q87ZgRQy9jzm9mjybpmeByRCw8Nv1LcEZHcSqmftJNanzyuXEtbZ2NiSr8YvRGoZgLeVQw3ypiMiZX6Zyt7Y7U",
  "key11": "5kJWEDwfiNbn9RcgKrKWMWn8eguk4ZMuQJXXK5VR1R2wMMLEraaobfNvMTr2R6Yvevv71yX1QGHTdiwkFsGJ82z9",
  "key12": "4k8FKzHXchFdCt5WvoieJN7mi9odgGdtpdMiJTv2DzN8CswiZY1tzcN9z3gdk6x7bwxnV6p14YBDoFgAUFnKCBr9",
  "key13": "4cqkqQbeA3rnqkCC4b1nP9TsBvfoVSVqL4wndRbkcT5jHDpMYcr8PbDMAgHquombSQqoU731dcrnyHvQP34SUsaL",
  "key14": "3o2aVS2wzsu7KEsd4ndKJGJ4RmEtsLiHbWxTwiqjyVtPFwmbeaz4Lmk1hunqpy3x219Zc45ArYzTyeP315zgnMSn",
  "key15": "5M9j72Qpzond9hLCZmvNGDGG4H4JGtdwLW72zyajHLMyzSa5jD1E1xLFCWDsnzePd9VuKZ1eibpTakEioA9QTd9e",
  "key16": "33wNZQ4YiVfh1nL3ZNeuhxD18tBxWSu6PRNscX4hqhWX19W5q3B8488csjB1jQ6ftoUTdbRWNAc8fb6aS38iRq7q",
  "key17": "3MAeKQvirTYEPu1tjQASTgRxmrpZ8wDrnPgvvHMwAsaGPnMbsCyuNrPrLM4pJh23UskmQMjuBadJzZuQX17siHEz",
  "key18": "33MehN6EqJ6A3FKfvKgWixNoxZGWZ4vM5zrmNpAbgioxcfD4i9uSjZicRPvJhfPy85tqHunGTDQujWsbrV9hfhD9",
  "key19": "62WD93zrkxyhwywA8ms2davMcugafJckc74wYEaBiBzKWUeT63bNShprGth1JvEwEP82Yo9CUdXZQwh2GeYSsv5e",
  "key20": "49LxjfAH76mB92UNVnB6rLQbHz1XccCPZ5Do8QgccDpg5qhRahEXQmqeQC3HB72vAYZDhVahqBPH4K5Csj2fNnSU",
  "key21": "2y4Ec3MxE4PJBnLuZHsKby31owgCB3woLCS6sYRhQQ3iNpMqmiGiggAacGrUiNSdfVvRcwpznuJmdiKY4LFKT8gR",
  "key22": "5fYoyT1bsdM6d7gt7T8Q8HDv1oQZAsU5ebZeTofsyjg9TPE32YWtgp3PZcEZbFeBKHZktgVUBDW8qVTwbxAFaogM",
  "key23": "4FCCHU4prCmHpBnC5UhsmpHcGvr6VaRkk9sH99SbAVjq1MeUiZSG6g5FUmev76qTRqkyonnq3huxCTHDmdgXGjfi",
  "key24": "3eSjarsBfjKuzMfjmBZMGJTz1gFnVtAJe74MvhUaASX1YqPY7ySUTqRvUVTx84MVsTYXEwz3Dobb3fjEoK82sb1c",
  "key25": "4MXmaHGFrXggMPGe929ysiwmdC6fd83o6VZwSk72tEvxM2Mw7eJtJ1Ht9LdsKqShzwSCfAWfR6yJofHzugxscQxz",
  "key26": "3LqyPNbqqjWqoRFKbxYWuM2ywM1ka93rEEMwH5ogtahiSSFTVUex9RnSRty8TCkDjfpgT6wdEYukbak9ipaRAm9r",
  "key27": "4p2NtHYZkQ65Wz6zoLe9XiLd1d1UUQ7ze25Lpd47Dvjh9g9EvnihfZsg1dJkP2pXZkZc1kLULacUHgeNSE2U8ETC",
  "key28": "41eSDWXs8CnaT6sxBG8wyyYZzZkxcfybBfd9yEXkneWQqKKHozyDgCdBEwPmUHKTP6F6DVYFzdfhjTuiz1Sr9NJ1",
  "key29": "335pT5nrh18x7xnDPdnsTs93GN4JxwTWFsds6VCwrcmqQJYa2vNu2jTwDinSD2MaZA28Jt3L1fbzv7a7ESYsp61d",
  "key30": "CnfN3Bn5U1SZUp5TrEW62jPQzAdpPjB2E8Ja24mmoSPEfdEC2rdZ7t1MLnXJihwFRxrFXukPAhVNcBaKVAu7XbP",
  "key31": "3erkbaSVWDxkbGV7LPyi74YPgdVh27JgV6sCQCGHHitgWbjunJrLJWuFJJKUiRqNPawUZm8xBuNDvJ3sp9iGgPaH",
  "key32": "5BtJE1cFF2rEcFRmVkfvsZ1MrKKrd3AjFdj88KYbdePpbLvawkVCwWNsSsGbHarPB8o7YkyRTigLYXA3RZzDf1gB",
  "key33": "5bVEtp1EgezeUu9BQAsidaGzxWo3bcWAxZ5NGeasphxpPZJinxwwnkWVH8qKKZALy5nHevRPypbYKgkxwTR5LLVd",
  "key34": "2oWZUB3oCuG3KSXVLQqkdjhDZcEV8rRQN2Kc7FUGNWoYAQidGNyBWgtthEW8Jdi7CsGgr7eG4jbuCCUZtt1Vf317",
  "key35": "3YXAcaH96x8rQZHU913zCchYru9LboyLHK4zu4Uic5ZeD5rmZ7oowHtt37LSTEE1XVKrPa63sayx6dNeh9eKG6mZ",
  "key36": "5fj3FqTGX2AtoBhDHay7xxWGYRDZrvG31Xzx6RwYnbyssWg2Fx3zgZLP7fQWs2w5U47ykKqWEUxxE75xBoy3Z9i5",
  "key37": "2S7YmHaFCSfSXArWBSte5MrBzzua8wCHvHdSwhruatXWqdKJo1dvCEshRfqGoe989Uf1KHeuk9dQFgkx5Q5tnKjH",
  "key38": "5WN8XqvF465oms2hawPzFzRSTeSBb341gKGAvrq96jUv9S1GTe9VGFL8Ws6S8LLqr6oYdueWbYmP1JpAyib3UGcS",
  "key39": "223yqmGoWRfLNLfHCXPri8moCh6v5pf4n6DBNm4GZWoDEyijWLZwd7pPXFp6NWmyum5uSXC1HkCsRM9SKzSSwmY8",
  "key40": "3NPhB3pYhPHatJZgSTCPLn3gXTUJnxo7zLtpPb9Qct1r8FYEQHm7vrip7jM1NW26S27xtYhn99KbkbYBiHifNGt9",
  "key41": "4RV42QBuz2cSCCdC6ioMfx9899TLChKaZaFzgUUEzdGHnjMDjEc1mutKDTXK1cvioXxWQMkM7UkdWoCHZBFV1PYi",
  "key42": "5BhkqdV2WJDzBPBQ3qbu1nDEkZLMhTwYHnpDjzDce8CE5oxBGjskAeW2u7MGHdk1czEsUz6RMqZpBgHMjtz8HJCY",
  "key43": "3J2vHxdcNeFBxv8a4WYcKDyzKtuSxHgPgfKcVK59yoEhonoTuN6FCxvbx4Lx8emfGpbfqzHFGKhP2qc4fFWUofS",
  "key44": "r26WgN3K2YReek2YBc5WizFwft2QYy6bs7Fm9fr4EPh5qfKH7hSSbRiB8U9WPKvTDLJmHcze8YkKyyR5TN6pgv3"
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
