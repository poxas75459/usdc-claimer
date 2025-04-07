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
    "4kVHxVBXkpdqe5GfvjKEaW7JDrGDDMH8GKbWcjQCQneL6VFfYi3zgVXuY3gEeRy7cjnNZguNJEBr2LWcWHJtN8UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543mFK6RizdieUFhzvghGP2Hz4cXJMNEYFaSYQ594UNNcG2GjpdfAgm1XFBpf69U44ayRoqzhfeLeVuzd3o1WaQz",
  "key1": "ECxeT4H67DLChbwvnC4kAEw4desWvCGm466jjqKbhG38TkFwnnNvJEvD17eszTf1aydzNNMC3BY7hEqVmEbzM6M",
  "key2": "5wEG98hr3ZYbWpLqLAPFCXYryomNWcwo7kRVVSPKLAWHTqx2wHRjmt9BdQq1uDEobrS1CTgtqGzRBKUrid9qLtSX",
  "key3": "3uSwiLjxf8Wmnx3aQExd3gszvq4RdWbHR4d1mJ8NLtXKtWQC7zZmuuaLGDsQQY4ToNbHZyyhXkd72jTUBZDd2f8N",
  "key4": "2bDVHdrPw2xih2ZkNaF2Seyt4rX6utVdGvtuLx2PDG7tbdQZnzTnewDhNmGqWGX65eKFGFDDqcNudMSb18CYGDzm",
  "key5": "4HFPcuncay7xW858op1uXvUZGBmB7Yph8iViCxRtvzRcU552r7phFDu1TbQ31dvMfnpTGQTum4pvu9wm9ERBzfWt",
  "key6": "2EyddZpnVPZVy3LvuLDRYHiLGTg6AKUAxf2ThxMUZWiL29ocwh7rNYEAojaj5R4WHnCBxMyXtoo6DxLkQqVfnaSu",
  "key7": "4NBaAhJN5o4gamzeL6v3yvTNV7MwZKdzJUeY2XrRhwYEuor2wH9xpV4rJdUTbKxKAX4FweJvZuBnJuk9zqumfdsL",
  "key8": "4u5grH2P9GGr5GAnhHLpGdczeJWyL3YKzKiJfgJm5zf8LUvstbT8hJ72onqaH5qBLXivZ9b8RKwsYnPzdVjqrQaY",
  "key9": "4K7zxHm7m4mLZsMqQdFZLox9pX2nGnUM6tZsXHXc3uYncnsCvVBFngD5jZbeK6Gt2h2ZpaqP83kkoo3YNUBCr2ou",
  "key10": "3eycdaGxHn5xKw87jMVgnVULc5BMVbnUBdgJ7php1QSdQoBLQFJdTpYdGB3DKeSsskEZhhJKfUKSjGbHNvpJznhR",
  "key11": "3yyg4pyVjWe4p19Z1HH5ujDpMGoaTW55cguSVSBNy2YbKkZ36siAhWzELYKgjPuA5LhtTdp9zij3mD4L4CvKGyXs",
  "key12": "4cdmN1hkTnGecVScDCi4TRCCZHcG1hcQ4yDx8138m81Aq2PNkMzUiUeYtBjxKT4Sg2p6TX8Thv4smUymfXVids31",
  "key13": "wc1uYAeDLALpw293C2FZ2HhGmnBateZ9Xga7qU7r6gmRXzif6MgGVLsx9Db9mcAJozkLQb9A9vK3ujqEvsfBex3",
  "key14": "3JWDbBhdD8yomg4BStT6TTEjwEpKCQUAKSjqFYV5sc9oHgtZikLwpKjPDc4kMHjrMpNdn7LndLCANMt1U9x5s1Wq",
  "key15": "2BKGzyh5ryewwozSuzGPDnWM8L78rdSbo1pNPT4BcX7sqEaMLh8xJkCXaSzoh4cKYjxxF9Gp9GY4kt4higoxUFjR",
  "key16": "m1LmBzK4ikjVstk8vngvECDYgz27ypfe9VFPnA9wFtNEGYFa6JwZDgH4EtNCqmyuc86H2ZwJBcUvMyDR22SWLLK",
  "key17": "52ff5SPo9UeyLzs9emY8p7WofmrQL3ynPQ6wrnS2ERAfZ7CsntfkRiyLc4FiMJmX1N7fHM1eGunpWsJjGuxdQ8AG",
  "key18": "4FnzR7nzSg1VXdwyFAWhpbePbVndJp8LgoFyRQBMxASE3ERZteNVfjoxEqA9mXdw4FqAVqNJJQkVDYR7hL7rmTC2",
  "key19": "3f1UaqLEVZwwjPjF1tEuf6TMoajp4X3WTwicsP3vMHB9gF5od6LKeCDMiQq72uC6AoekBnGEhGox1evQ1BkccmPo",
  "key20": "rFNW7zDZah4tUYLRDRkppnj3cJRizuZLHvmd5z28j74RWQfNVXMYZ29PKDunRiZZ5rbFRDFed5vJqUJ45zgN7WY",
  "key21": "3XH9e4JgTTZP7PYQhaYNnX745AnTYGzUz47GbsVYJuwdHJLLqQvTpdMPT7xemTSennUdTJQMnv3aoaG5GLB7qvJb",
  "key22": "2zcgMMo3JNzdH6JcMEXSLjQh8B5HrQHXT8S5FEnBGffNRayZdaf68GaNsyE993KkNNvVWte3GidE832gQ3SYSgBG",
  "key23": "2hAB9NDXLs4iosKmfynp8PEeeakqfSyqzwQRucvCpt9KWaLNjzFTVBFgwPxSAHPAkXrx5kx3zUNUQvPEhMEQTawW",
  "key24": "5aEjVA2ztY6bM5uaKk6v8Kc8sGo7fQQ93Vi455w77WgCCpW9AisgiTVpmRa4LHHTX9WXUJKyBbkNSgfqhk2mLsfa",
  "key25": "5gQsHZkqFomq1WMybKszKDsJCXYzGZFn7m1vTN5QBtYjzaV8af3yk8WMEFRoZFPt4R5jnroz7tSbr46Q7LQjidxj",
  "key26": "5Kf6G22ZeP2aY8Yi17Tgy4LJx1ERRUUsXKXcZLnoLHWzpWFVkm7Ry4U1hwjtExTmwDg2mR9jb7qUZeh7VBjvBcLU",
  "key27": "5kdxGbpveMy1csULnTUT8e68RDtpj729ehhmAQMkJ5j893mishArfBB1dvfTLgmBwpvvsGeD6gPG79bWibe2aokR",
  "key28": "32ayQM1idfg3j9FNeDnKWFerQvwMtNnqFfWFBzfMGM6dChz47tJ9fRpvtSPgroYrAUar4mmZebejKJc6Vhr6NCTw",
  "key29": "2oe9zHqoJ1Ga8aZe1ZUUk8w5tddd6auKT1nY3HcQRsBH65ANiQXH3DcAEVEHGyZ5k1UMQSu3XkMBKrjMrMLAjZbz",
  "key30": "21MkGgMxw3XJPaJuQ4oK7ZnciJfD4k1KtSMGrRKUFR8Gyx9GYZVeH259fWgHu95hz2Aikm6c8DwXHijfxqynhG2z",
  "key31": "dgyApiEoPfa72rsAYZSLAqtB6ira4c1rBJyZVVtnp3D7LnR5ijniMyDdJFBK1R7kGPc9CpdBTFxZddbueUsDdC5",
  "key32": "4h2pdFdqa1a1J4Amh4T9CApbBQMH7mUwfjhMvhuRc4B93nrHfUVevviVu6UvcmzzvZKjRufVxVn3FbVyxHqdcYhd",
  "key33": "4doA6Vj1R9EzGEyvNotS2caqgNAABXNef6sDXCy9n1St1ohmfaYUzHeCpsZjQPR4pexuFmRsL9StPAtMDMvKGoXx",
  "key34": "4eFA79kWL4KPJ8chsRF2pJjuNFEe7tFKbQAXViYCDAF76kmnwEHhYzFw8kppQgqVETfCtTt57xsjLEfAQLpz3zPJ",
  "key35": "3JJcmaJ7zA4yE82kFwYknDALoUtx66VHrT3Vs4pMNKtupWdAym1daiJWpzgpUzuSSBUbFNV1oHf1u4KH1gzwGCbz",
  "key36": "31s9MX2EvCuoVCNxR2LYa9Qvmxg1DeVMngkMh8SwfR4FWeQwCrNoNbgpHVAubshtbLxbFS6A4ZLbirpR4aJAXWST",
  "key37": "4JyjEqYwiv39nmxJ6kfdGPyhP1srPv1HWRTXwySajGcLRJHf2CLri5xQqUk32MotXirAanapZUGZvGajtEYcqxtK",
  "key38": "5zBJGJvNgckjtnfFaGSP63yqS79mcPKMbaLU2uAu3UyDBMvkAr5wRRhNcfsPuKsgm3tfZUpnLx5C25rafZ7e2gjG",
  "key39": "5TJRxixzvsPcMemnoB6844ME4CT1S1EpBu9RAZMcEMXYCzSBRgeiMqEBaour4EYNkTTLN3mRKh6CuZQ8Rpj2BxjM",
  "key40": "4CHuwrV567RH7rMyrkWzLDk7wMNsiNqEgERh1zeP1ME2bGQq6hh887RP2vf8W4HXXVGxTc6bLqE9hhf2p36tofTW",
  "key41": "HeDZaJDNKACpRXXN9M6qKwgEGM7A8g4d3QvdnnTQN88QSbj46NvcEvhy5xcEzpBSj56gX9izHVZPgf3TrTkxjs5"
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
