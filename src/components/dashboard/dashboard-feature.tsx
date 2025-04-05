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
    "2jDM1t7z9XBcdUepzLTonjnDDDkFp2yB9XReFp8WjMBt7vZnemDNcfnRztZgWeN7EgiAWndLu6jS1nrHESPNZuSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KphodTsiAAff6gjg1hk9t6B7Y6bpjwcCf6H5QwFnsA5dXT1E1vwzSCF2uKyz1L4PZQj6ts5d2rKU2Cd1PnuqxCd",
  "key1": "59eKunhkWvL54qTpvg3P7LPGuVo7nYe6mJyybhZayE8puzAX4wB4MHBzTbFMvcXhFQLNk5nB6jgYhHvqv2UzAvDs",
  "key2": "4vnooFWUh6Kekyvi41qo27TDBncceu7Gfw5tg96D7WWYw5R6JVL7TyhdzfvdzQStmd8MBHmAbbxrpkhWcByQBTez",
  "key3": "4KnWFwbuUoxvWV7jEE6svantxeeHwCeBrDG9acpGJDSx2Zz9KnjMJoBYdUjg9tdurdcmXXn4zr5oDcB5YXd4d64E",
  "key4": "2CGiNcK71rbwZjr2f2NEDTp6nspV8j2RCT1maphwjn9r4CRKqcMraVhUZ4zcNQUBwz4xzcQxFYQHePGAf1YEBgTj",
  "key5": "5bKoik2SFfPk2BT9JntCLcEjSy6eHTBjGyqjd5AAFDVjhdEUHcb7EtN5r1MV3kUiU4KKeS888iEqv614KSfxigE3",
  "key6": "4v1esvktD3xox7UTHb94fAZYqZxEd55Cxwqp6XeAeA1DUwPryY5ceBFH39khTNd4e1a7iQBeajrs2XagJ7tLHida",
  "key7": "3DKtymFVS9tYNnDHz8nwMoaNQAS6GPpwQHpu6YTrVaK6dSBAoMktLJndHrA2xQ9CbaX1EU7rzGaQ7Achxz8bqqEA",
  "key8": "21vPBEkjgDxRnh75yBfCVT14r2eZygfwPqDfsmyUfnEd7wikNFWaVZ74zRcyFuodE4x6sVfwBF8SeH1TnHxp1hqi",
  "key9": "EMKyEoDXw9TazBg48J2SVinLRqRXzELEtZhmnGF3KGHMCgzR2uXgYUiFgAecoAzuejUkCxPueB86hd7ohP6RBo7",
  "key10": "5uV5SUCZWDPNkWJ48W1jsW5kNfdog4Qq5VEXrdiZmuXPCdSVSdb3iR4HqXQBwJKaMi3iwHhVcrYebS8tNoRNue1N",
  "key11": "zYFRS7Ct6aAxpLQzCsMCnsT8wPr896RDMMmNi51TmQuj66Mbc2nae4QWD31H43cn6SkboF7cRUTrWaKjadH2wYN",
  "key12": "4QaJXwVtTzaz6kUyAoAGnxr6XkR28P1fT3BKHoC47TpWu57VqvKeVuhJocY4tk1FoLfkrBDFSwaxzsKiZd7EM6Ph",
  "key13": "4pYkqH5eyZ8HRaLDJseeSp4mtV8u4wNvcLxKdE4qKbLBn7UfRMAtgqMN13Hv95orEYuMar5HXK1buUyqRprx6261",
  "key14": "5vyYgMjd9kRKtzGzMYzmokukPM1dG1Udp1Y1H35W6uwVFEtsraGKcTLEvXUqvrQGQrEDVwZpRafLcjDevU6wn6Xg",
  "key15": "2dite5xqtcHHSaDzmnyQrYms1eubL9w6gSKmPMtr5xGXfokjb6bLEYAQZuXaXi2MspFRzdZ4GwZ2377svLvdmvgJ",
  "key16": "5P9qcvncj6kVqjtQxj7TLSXqeaJi8e2XroyczyRPYuj116NrkCaB9JtYSPpn1JR2xVJYXxK55itEXpKSX9bxYVcj",
  "key17": "39kqtwaQWWRt16JvdN71DH1Z1URZMvR3AN95rBr6KYsVZLysmvYXY2zCPXEvr1HGRQN5cyLYA79PbRAJP4CouP79",
  "key18": "62m8bhkYrbpKTzKZUi9c8Lu48iBX5Jy2XVfzrtee2UaJ9qcEfSuzbQyDac55cGnp8xQARkzGZ7mrAYFP7Xr1zJEL",
  "key19": "5wmovMXmC2jQk43iCRkFSLQhoVnUnSkykBTMSMRydki8NMgJyD8wKmFjhX7kMFdafgRnXYczCg84NWquYF362qiL",
  "key20": "47Wvo5k3Grez2d52soerJ6xGQLXVqEgmjqyPbZw73vYLqci6AEHywpQ7DCguaQD5QUno4S8HwjFmmgBdF4FvA6ua",
  "key21": "4491v4N11Ki36ALGEuA5UHG3hC1gGNrqXCNuNX4he6TrZh5WpvdVjz8eoGzYPb85Ak6aG5qTvhJqHWU8d7owwowq",
  "key22": "2wrH7uRz8HJbDvMDNs8AyrgU5NhtC9x9XFLymF643hc7NJxaFTdd8BPc29FDbbBUJNLjEgtGvAU35WBHaJEHiYVZ",
  "key23": "2c4xiVyQpYLBUivy3ec8uzX3C2puWFFjcanR8qQ4xKm4ExzTyjPRoWwYrngiErLSe9sLE2GzpksyJJSVk89859BQ",
  "key24": "5ujTx8EvczB2jTazJYWUzpeTvtU135EEu6RXxAVpVJn61fYBD1TeC6yuCwstaHEmKCGpTXPJ9mMN3gxhSxqhtkQg",
  "key25": "3yFLP5QneS3rfKpZij1iqAuq49JGfEXmosFep812aQrYLpnNjbPeportVmQsc6huKKaCrW6fhJVc5Q3NfAL7geH2",
  "key26": "DE5N1PGPocZTLufmnCUEsfqwDc8D1AGrJaJgxHt7Puu8gTxXh1MrbB9vhAZURGXjogidBqkbfBQ2XpfGxYzpz9i",
  "key27": "5KvhZanToDAeGq7aY4Qszqk9S8ZszVTj5LtahWmxDG1Pu9NGUnp8hcBn1fyYHhkaiF3ytG7gp6GHei7g4YEdTHqZ",
  "key28": "4sSEmW3FH7XmaSZdgwpNfWDg78phuG6AQrj7vgAGaKDqtVrdGpVmugNz7ZWqnXi9cJFryB1zdudmFxtpnPrsvAc5",
  "key29": "2rHdCBomvf3inHyZ3m4jfcuB6HbvSjbfAFbAg2rLM9Qd6ACNiUTNAwyYbMknNwDU7Gpxx1nDBSy4caSoKVohThNU",
  "key30": "2yVWde1GSgAh3KtoLDUKVW4eeDrLGc1a6mCt2pjEoQqDM2xS69KBQ9FrxgJNhdzD5B466SbzDSmZVBabMRMjeaMN",
  "key31": "4PdKQ6PkxenTtLuXWB7bubEmgNjnDhywLFJjSjZG4cahsEhQzcVu7TTvUWFaHeF9FAiEp1ihGo857Jigzu4StHLe",
  "key32": "2TUECX89fGWVd9HfCXR9q4bV5Lg89GZW1NZYhzeA2smYrkR2qH5GbDBXY6JYzUNptLkvdscHLZwRxWc3skBA6qxj",
  "key33": "5BG93EoV18oLvTpmLTofQDH7aroqDb8GAfN2a1aqbBaBLjYVWVZgpppEADHcXR4FWkE58yHhmbj2b5svBqKfJuFC",
  "key34": "258wjygxgeJVt6fvjAavhuqQBiRnmypPmFG3NnwiDiKrSjs6PwmD6r57NCkXbU9SxydmoemgCxqxvdg8k5EBuWt4",
  "key35": "4cFGXGMdyfYS5JJ1HzfgcMmXQ8X5uTFvnoWqHtcDmRALKUHmL6X2KCbdEuCycQBMg91gn6gcELfc77Voy6NBPbgM",
  "key36": "r6xR2C2C2gfhkD9RKKJ9zJkrL67mEr4iLMhut2HEuBPpNELuLZU8CtypErKZGUVmsLqTYitBZNfs4njWQwuNM7C",
  "key37": "5AM5vDLbcNwTSyKyBMRJVY1yfDFaYRMfo9LgdBxQApDYmzY8frDyhjMiWfnFeq7kvWfkkyQzeHXNaaRsY6khkiXX"
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
