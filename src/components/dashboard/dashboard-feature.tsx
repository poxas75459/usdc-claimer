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
    "3nhRDi4w4vRgaeumggSkodE95yue5EaAJWtruhc7iKxiKn6sGm28AkwThf8gGLpxppjJYaBTmxgYbDEFP6qQbNXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MLpXNj1KcFQcJpwopzTBawv7GmKXv6Gvt4q2ijabqbzcGWtokvz1XAN449aCXspBPwXGav7XAgjNKzVxyLGfwQD",
  "key1": "4u5R9aBMvNnV4ukjEYyoJ9HkHW173iuo3aJYU3xMD58qigXmz12EUXMU28wcx4EE7r8LW6XUwEMcLUSHjVkaPQnu",
  "key2": "Em8wpjYuWHD2poZ9U7Vg3ugEWguv7gA16KnbJecdhb5sYn7z2HHA8Amtb5ibbWHFSehU22Ya5KPGkA3gCgcWWLn",
  "key3": "5hkFfnuZV4RHpinEqXVos3UDmG39vuvhaC9ebiz8CKydQPtZ6mSfd373Zrhzh6n3RfDYnKtAQ83HJZJBssK6Re9n",
  "key4": "3rAmmGnSZtLenTAp5AihiXySERYA3hKeJS5g2tpRE2wXjs75cjBNg5sLedFjtjHq8bK7FNGdqdDNqvMSizD23r9h",
  "key5": "4ati3p78F4zG9QyeKnwi3z5CVyZ5nUZhH6ePqoV84J5fwqfB9T3j7aDWMdBYxdpHkaHsTEV4nzAtMEWCzpvyouYa",
  "key6": "2Vo6MyE1ZU6jLhADKLWEZy5Y54FYr4ADqfiMt4pz1wSGp2iNHJjjkAnehQiWBycCEpjTdzGTx3ksVEoHQ8adP6CN",
  "key7": "5avKdjB2Hf5pc9GxKZsy9G8CEipjy298Fvv2D455ZKsTukJLTFxJKEfMw8A1PpkEhnTBHN52ZNsekWmRYGixDA3A",
  "key8": "2AHHgfMWZHApVvHgqYgVUQcNNwq8FPQwwaBrSqW3uYPT66ee21pmUt4rVgza74ZqoFVfQ6dSjs6NPdV9PqzRSskN",
  "key9": "3Qd9EzNLxXugFEmNRfxFVAdGShgw518k4zc7uZ3GpdJQWRuwKP3b7eV2Z329NqijiveccFjcxZgjBo43etymS7DT",
  "key10": "2iCFGWKWjzDaRVTzwtsjSPbYvHjkvLKrnZPG84Hb9696Fgq26XzL2c8TBuvugZ19F8oiA4FbfLjDhq65qa8iVSkw",
  "key11": "217c3B6N4rZQ8pwRcQ4n2wj7kF56zzjPbuLUWjDeXZpq3ZNmoGZFA29EMWMMei8c99tMsz4ozvHQiYmzaUEeAHJ8",
  "key12": "5QuXgPiQcn3Ds1PFAjPaUeg8fufpgG2eMT2qQLjpg3cU2fJqPLumgLKKSptiJRALv9hwdUY3NJPG3pQnBYE65nWX",
  "key13": "55LBbfj4VW5Pmv5XRiKQ3NYRTn78C6EigMFBAnhiajGQAmf5FubjFNd9yT6U2gtGFP6bEhbaznYp9A8ZbTKyxJaP",
  "key14": "2UN7MR4nknw5XFR9zWBDCcKFkNgavY2t3PsgN8YSZEAsBfNMXx36KFcvE32FanwLuEJ2ieZt6QNoHqRB2kaMoq9s",
  "key15": "3mSwpXvaxU1RMymtyGUeGtTRWfcMKZBXnhTFthCuteuD1biYNkmDRzRK5wGsringujAJY7TcGTqsGKeoGwg2mAW9",
  "key16": "BmE8JpaXuPnJ1MC1eAT2jAn2SkrMufW1bAJXx3kw3neUtyMsZaS4xLKZQinK4Dxq9ZmvwciMT46jLXg8muhLvDR",
  "key17": "5PTvbnVQKz7L2kG2GtaNvPy7qFasS56tMUcfckMZ6NeBMv5RTYws8dZx3sucvKThuctQtv19qC7a6VSEzx6fDWzj",
  "key18": "5FCg642mbMyBDW6HBJrYn6eU9SR2puzgCyp7QVYZZWBKy3f9oFic2Lfs7UZgp856WCUHz2JEiyatXfoBGLCX87Vf",
  "key19": "3v42EDM1uwKuD39KTPt1fwLcJGptbJ4H2sviS7idsv8EupwWHhRUnhT9axVwnoixmFtxKCtcmVnrJ64RPg7NhtrW",
  "key20": "5JRmqMQPMy7sESfV4BjbkrWWvp5iEPkqeoMtaD7JSNFUgHjo56ANTTEadysnoYM75yAHffGF9fRaAYgiJuoyT9FD",
  "key21": "2qba2qMYCAQDkCVrbZQfsVSpSRqHEXqzrfDAKb1Kr1LNEwkaT4h8r5nx2SmNmnf6nkWgxL679MZ1vaVJkbnWefTn",
  "key22": "5XAWnbBZuqmFT6ewCFBtLT7Qi51fYKE5Mirk3Ed5Adpv5598kV8p5xpVByQkoJX4bEvdUcN76MwdT8zQpNdZKVqP",
  "key23": "5SQnKPAQsg3noLmo5uPbntw7n76XuA5sgNcFueAaMTZCP2p7JkhmyyJkBf1tebjBUfNmDmx7QJhYThRSsEkyK6B8",
  "key24": "2RZ8F6su2C7rkRMJw5mRp6xYwD1YsDmyebV7SYE3hvygXh5kzZTQmrbvMbPZVHvbj4ETVLnNJobGhmSfM7nT2N1X",
  "key25": "4f8s1FoiRxUGKpz6hhUa1bsxq5nADHde8cUqVeXtZ3HPDLs8fW6t92WPJqaxUBuFLhA2J5UX3zdgvsBrgcRQhr4h",
  "key26": "5T1wFyYevf5o74SqVbfmrTiVtWsfgz84Bk6vZYVSSbohnuMjCKww3eQJkCiHSvKifNSiM1DEfCt9CmWKXprxiBko",
  "key27": "5r7Fy3q1RGRfUnw6BgSkQAS1ePuNuL3wqEmSac3mBekFEhA6P39axPqpxWi1jL3Sckw7czU7MFtAcWCywuyunPnY",
  "key28": "3N1xeZEYvEQHYX1pK3fWwyj8q89cATxK8EWfHjxKGGw7STx7cxsAW6TVysQSNBd2f1pgaDtDhbsPSAxw4zDzeNTR",
  "key29": "2PsjxGPvExWhyp99GzQLSxwaAxYKQGx91SPszcZp13vFoFXFxWj3TS5yFJGPpgBdQCCGhpye8Sq5qPLpVVZqdCF2",
  "key30": "yhhEYCuasWmFHJpo2vp7MpKmpXzgsNnK3TjWmuEoHHCgSDrFyx46DFm36mzQ1u9euqWCoDQ7rp4f2gYkjXqWqjW",
  "key31": "3S86SukU3ruCjYW6TzwSPPUEB9kadyhNxF6B72vRCped1Qsq2ynERVPQTWshvFNjZTjjKpd91QKgPLwDZMF5J4QV",
  "key32": "2yw8G4kmGTWHjap8C3EUGs5Roarmj8XREBzWBo81MeEcZDgSwFjvQLbg7sJA3qdfQda5AJccdYqeJPn7ox3nKXkE",
  "key33": "vqakEyhN6vjftZhyYsam8VwnLHXPC5wu3zE3BCB9NaXyn2hnHSTeRNMr64qAYJQeR2ZUvNKNqbiUjW4r3QGNgjL",
  "key34": "4VCGEXeGftEvXXw9TkkY9ZdNFcopKSenVF8hdaBLWWzdwWDf2mfMoRAgDFY4KJkXiwGP9KTe4vFK56LhPPQvV3Wd",
  "key35": "5cgr5biAFkAR8Cx7GK7YWvgtFLUJ7nG9TzSYkpoGmue3gtn8BTVr4nqsrX8hh3D5jnXXButugfkY6mU4gnPNAzte",
  "key36": "6TwyvWtuAVZCzUCbQ5aJiuyqt4ZEydjo8m1E292BCzCyASSrXzgXNYFsH8zbpCi7UvMviSPd9YJYaeaHZTLWTiq",
  "key37": "5bMj9jfTHHn1NZvK1czYwsYP72i4cLrNxGMshxPczXckew63XYhuiqsJVf4zXRMUDKhMPrnjSrzzJvdQhmKYGK7M",
  "key38": "jBeVNJG29kWruRZ3k9nuq68eFSvKVYPWmXNDbyyxvTpEZvTndgKKiNDAqaFWME9WWwgUjfFXDXuEpRmZtoBJYJe",
  "key39": "94PSuX2ryinLHJoWjGM92DTkpyvBtbiktvUfVpexCeNS9yszLgLJLNU4CAbFVfbKvXaEDusPkAeVBXCT3QChUuE",
  "key40": "2Ls48NhDpmncL7JTJxbKSgaCK6xVX8jNqKE845JWMh6uuS3TmEqahLF7vhikGMvb2hS3dLTF6YM2NJZip4AU3FtD",
  "key41": "3ywF1DLDpERq15oTgSZQkbgEYo4KJ2F5w2S9auVDvUwFg3b8unsV9qRkADviA3Nbaa1iMbKxhPGHhxWHnkYGMFsJ"
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
