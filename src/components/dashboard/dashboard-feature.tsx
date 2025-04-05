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
    "21oYgVpXCmjM8jB2mGT4vmSNCBdfL1g2RkMXDVM2rTY5635tu3ZNq7HRNTspmkYNS7WwGhGzgXtWRD5P5qNYJCvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zebdNxysokcdCa8cKtHa6sLnJLGw5x1iLBTewfQVZF6s66j6Gxd8SFQudRTyuW6RUS75GLo873GLwhBi9Ww1KG",
  "key1": "5kxPJJ4dpnbDVGgx3JnVnibWckxjqAfa8LB8Sq2jgGuoLdDcMKfdVZwd4ygExEVy4nt6Dogte5JwXdhWw4JeaBa9",
  "key2": "59oMdHuEuuRL22cPjUjupPnkaFJ3hbt8JutefXWA6TMaFfjgURrbsVUyEHaHQCMTZSxUsXruZoxWtyyiepuQb6Mf",
  "key3": "2N15R9CFpTGMS4b6Vqi3JETbxEJmpXdCE24BghJGZiWTBLfRp1LSMuZ44EcfDuKYWDMPVwwhjzq7aLAQMJEcY2Xc",
  "key4": "4y9WCfQWSiGj5WYariEg7FJtuhcMimSuZBP5JWn6wgKPw9Ven2NFrNYQTNzX2HBCdKWxaS5jk9UbcZ2vUnYJLEKR",
  "key5": "4gZqM5UmYDHeP8ggtpagrytEBzaVXaGsQhwNwpERYgS9gsWsneRSvTpp2T9pxqvfaP4cfrznmQJTU5yJDCaN2pJv",
  "key6": "2ra6nqBv9c87FgQ5PTAKD5LEzsrUVK1FvWquYMQkSgXfv3dpVR48h2RTJsBuxZwejfryWerma5zNLfqhjJSTbXZe",
  "key7": "4gmRuK1eUENvEMVbZP69qHb1voSmGvZscDkbDhbGApivSZLmxQKp7cxvL8wBJXDvX2WZkMweS4TfnZzicBQdnQ89",
  "key8": "MfYYYLjngFfw9EuX9Z4fy2ZoioMby9PaqdQNns8JuQuBnhFVe3k4krUX1k3hhW9Zi5Xvm1XeEwfaAzhug5EBfMn",
  "key9": "3VjWGG8m2CXvnGS4KRMe1h48kmba2p7LANWN9dLpfrrsVdL3QCABgqV4vdvrrVV7VxKKZyqi6ghRAJ9Ji5rvCLDj",
  "key10": "4Vip8HD9HXdAA7kHgFmy9TqFTiw5qzeqvfc9uoyCSAqwrmXnW3dhZCyTDdDinUJzDrv2dD345495FquTeqAM4rvM",
  "key11": "4ziWvoRGahMT1CVsBhMKV5iA4ydemmTywuiDquYqQCJW2ZXfziJjusDcSE2f68R53xbHQ5zYn52p5xAYbZovjg34",
  "key12": "5mqoKgD1iVFmHDx46SYK4HUTXgRr3a2LM7pEo1wbC4RxMreP49ruLN8Ga48vkwziAudqbwbezWjVWdmxuoNRcP6e",
  "key13": "2gkHpehs2hPzsauendERvHuezjDaaV9P4CsGTdEmPNkF5ox4FV33xUyggwKhLTwchfSMsWqmzYvyzFWxVZFGyNPX",
  "key14": "3dw2rnMH3ZJzSurjwx6XyG6mD2Ej7ux9SaSnnvv44YrzsQZUrKKpBj8ksSHKbyhsa83TbKZ6xA26ai9qjcnxcm9e",
  "key15": "gy73n7u5NcCiDbvExuf4dN5fskT9z7eZgueZkFscJXDdCB6wzeAWLEwo58rQxzStjemkue9JnUnwXr7h1QFQwvq",
  "key16": "2cNwMm66No4K4owKhkewvteSvG2yBoYGaijCHW3yjacyrLXDxiLR3kp8Cy3Dk89PxcnbAsv84ZAvsLL2ijQikmts",
  "key17": "3Uurcxwm8azs7KQCBaPTdmxZz1D9xJL4SQmZapgfeA5hyr6LrjtgPKLKUsSzby5akqxs9arKLDHNK7Le7chbWkGr",
  "key18": "3pmCLAygxR5Wu6TA4UpBjPAftynGzJYbmEDQ6RYo6kCiztor4TzaBwfLm4K1hHZEpxrdTTEnRMqHxHf6og6joXP6",
  "key19": "2x3RNN2KtQ2Axv34b5xCWTcbJkpwpHDYqCf93xQNMkzh8e8owtKS1kmbSJUA3GAdXwY2Re7Hdd7qNNTWx3ge5Uy1",
  "key20": "3Q512mrPnzoJPKjYbJKVHwQ8L7HHueMuhsKu4KgQxTN5Nwq9nLANfedXTZfewFYJLixWk79XRC4nnQaxFp1ECowH",
  "key21": "5pWkckHCFvamfQawHBWZHb3TUaKpWWNJpiCpvzkqCWPTDmtu6nfg1ovr5ueypCcmzLQQ7astSsviYAJUrFVCyF5b",
  "key22": "5KSDTvTnCZeWSy86jXSuT5TG9yDUx2VUHGWtk61gz6Ytyj97MbJYpcpmBYT3EapWSJab1eg9dMJ7N7EoBbaHW1FF",
  "key23": "33euSCzPcqUGPGDfoEjCSM3GexjbrSYFoQBc19nc8vcmLUwfp6wdU4srg4Dsr8df3H1abZ3p6Cb228VrbsGNpdz9",
  "key24": "RP3DLdKDqdJVLbmLCknCK4uPxtU6HxthVS5oc8hS4vjY4dyG6zpEBehzcmm9qXe1aZgwkttYbswRDD4LQKArE9D",
  "key25": "5hMvu5eZHMNcaNykL4MMeZJCJaBSUmRueP1rn24nKW6P5wXCUhegj4BCHJRZKYxiaYbrYVUyd5hALmMWJK2t4Acd",
  "key26": "2KYxkttxmViUDY1vHu8pnti71BDRogiUPFunmKYdcq61E7ajjwy4iJa9KiRuhXRonmjf4vSgvy4kemkNs66pFnB8",
  "key27": "3rBehdeoocB8bj75dKSzqEk2B6UA9L7rWsk4uupRsNubqP9GTqL4cNnsP5K3VEoiz6pdsF81nJjACBxYPUW68SS8",
  "key28": "3M1Yo5a6ywKxPGFL2L8AiiYBmYack9N7rME38jF2WnSuM187ZyHpbEF2bpKAziKedhCXp9iNm4XcooKmUG6CtxrT",
  "key29": "38GtJi5Hcbff2CgTJXk5biyytF821B29zp67LdUppVoYzXVxDejMwEh11zazTFy3NYNv7htsLqZK5GMABLCJ7TFv",
  "key30": "4zgqp8e4dCdZA67tYTHjcCtVeT6xDqVdVBPZMjRGXXcQgesNBgMxRwwCgrtKiUvs6CRE5C75VMckouBVg39WN3yi",
  "key31": "4LJdMvEeDjv88cFkCVrRJeDbfKMoh1aDZueVsNJrtZxSVrAUeVup9nQXpheDq6XywWTcq7onsZVMBfVgbi53xeia",
  "key32": "R1XejAsqksAPiTsG6HszBCZejDBjdnPnU9zFBEovrAu1xKAvppSmjfYbuXWRCe85aSJeyf8x6KgX9EMCwxiwnBk",
  "key33": "4YHy1A4JerMKth76G1uPGmgkMPquDTWVUdS8q2p8fsZ93UtTu15qAs9xHJawZedMbk6Em4o3ZqhrF5SigF3i3ffR",
  "key34": "3Fd2H2KSzYRRUjSY37K8x2FfmNr3VGyUySLxjeh5XX917Hn6Pi1fFZ6LR1EHZTkcnn2dETF3vAHNEc1Q94DBTNXD"
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
