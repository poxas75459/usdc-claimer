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
    "2jtVPQ1JfDsoXUY1YkbXFUYYWJDsE1zDA8MVgXYayNAtkXtsKCVb7dCU36Cg3beWhREYjwhkQ56AA8utEWr4fBpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLiG4xxo2YXjbB2tuwH9gSqUmsUJVdVxqsV6fQL3umgYNrdNZ6Sp4tz5UtCTPgQGVNwruPKDZBs72pGXemXSZDc",
  "key1": "29HGJejFuVXrgUyewB6ndawSYe9ezaQ82kVrvGaoeSsnNaBiinbAd8i192ibx8xN1DALM2czepWtiHm9nrdqDPKy",
  "key2": "79VBxhyVoKy8hjVeqEMba9J5crZGE8K8XDpms6g4PAWbWK9YKvsfMXNnqywcrx1K5VmjZzJAUsWZVbURq1FgRYS",
  "key3": "4FsjpsoURqxSc5ZgpYYNa7RemnwXhFbpHZzmpDXEvvaRFXKyKTWZmPLCtXLPprjfsGcD4crDW75cdSEYtKh6jjaV",
  "key4": "5SBSK5wJ6BcdTxpdKs5ohTTpX8dpAtjPRmXh8yEd2VLLVzRZT6CEiF11GhPcruTKZ4yghKkLLs2we8SRWx5appmH",
  "key5": "GryuRt3zP7kjMkHcme9HmueiCUL4U4cBr1W5fDD3ova3KvoNxfZmBaXpFfJY9WCEDo5RpMDK4TQeLSVEqgnmMpk",
  "key6": "51UZr8DaknBdzh6ao5KY72j1xpwjh53oUTK6W8HsKSA2sHTenGf3tud52PPWNGQxShXPa4dfeSeeQdpuoPW91iHo",
  "key7": "uJGrZuBWohCCoGj8fLb7fscmHauHomu4udpeQwzPeqogdkEDxUU7scY6jE83B3FpHZER78nfnmqyDM6eE3J8G4m",
  "key8": "3Ainw42DQG1ajwLgUwHmY5d5dj9Cs3S7DnB2i3SPDXZj5QXe6U1gYSF7LUfe1mcwsu2Zy9qQaawetHaEJzhJZZGk",
  "key9": "4LyY4crtULmCcgjfJ6Z258EyjwCheMYfyMB8kWWfQTdwM8aT5VvVwRZAikuSgbt7q4u4cQVybFFaGcKYzbzUreSc",
  "key10": "3EAL7VW9vA7HBh73cg1VfTD4rZcqB8WSLZB6U1obLtanM2AAHMd6eBMUNHKEFTm4rovuit7w79deLwKeBoQeS4yj",
  "key11": "itkUT5STTMj9cqJYUVSsxQmbE2BfocFsaz3HzqFUz7zkaNgiPpP1fjsUJg7tf7WrughVr1hGCqewAa4rKSbdUrZ",
  "key12": "3UjhNfvqNFAwQoGagPzHqYtswzsd7HXYyaxDbCMKtrTB6hucmLJmv881fZ2BXbYdazEotagxRLbgu29au7i9J2MH",
  "key13": "399B3HskdjuATk6hcRu4DxANs7XoHyweYX7EoA5BJkbZXM6A4eSVCKHaHW1hpwc993S3JqqK51DGayWAVRRE3g5d",
  "key14": "2pwdhgjySwmaQ8XvF1Pk1Cih8RNfiCy77pqnpcsjRsrn7Nw26kWibyBDPS2XJUa7kcaNXGt9Z4bosJChdxKpyy8Y",
  "key15": "5y97zPDaw3vEyWBi9M7ocbuzUoBET45eN5LNydPMZoqDn9E5engLZhHr8hwNZD4utvMqsn7GDX2Jue5UuDtzUHpL",
  "key16": "F5UqAu4CFv2XhebHMERSDT6pyKQ9p4U624KnJRbrx4c5fjLwsJBBWNv93kMqdmqrhPi7xbuREcnZFxmQQFof6PD",
  "key17": "4WRMMvfEjCktV76JmjshQkUYaUzNVtvD8YU65A1xDLN58RVsiELFK37YYrwxHSnqrrmKGvH3RjuqeLNVzqYsCoR8",
  "key18": "38duUkidYCprjZRe4UeKE7JXnUjB5pwM83WtWB18m4m7KymGDqRrEANwMnbEdyRX2Yk6APELm51V9UD1GrD5BHh7",
  "key19": "5TCdfkyh2P7h4FKEjWmJhy7QFF3dUc828XHz8o3wcJEJZ2uPNz3Y6k4PUoX5XBLYBAbF5ZjZDfKQSUjMLUQjYyaa",
  "key20": "57UtZQo4dMSVchTfgptM3bmcjaPCpssxFdcseqs9KBV6aqsmZ57LE8Dxwk5SkrMnHaB2dsNSwAoVkKYjJQKYKYn3",
  "key21": "4kByZGxxy54xXp8xjWZoUBiQftETpYxosVf7u9sdxZqDhtSXzkqMBSiTZy3woPEU757W6HTVJAD4zWghfi6Q8Vpc",
  "key22": "5dXKiuY5LbJh82N92oWKccnd92J36EDajSPg29nvv8Nd1zzC1pzniZS2UzMHaNP8WTMpBU25xPCNoWKzf1Ta1qGk",
  "key23": "2APxoLtm6Ga7wDqp7hd72kxDcrvZRgW9VJAHRhu6RBFxE4C8ispt8fVNdApUzAejnDmsp6DqJnDEdbYJXK3XEXoo",
  "key24": "pwYvHL1ZAe55H93WgMydsR3MdPJ9HRAh4UosV3M2DfaeTeaMZkEkx99XfEcCd4U9EUt9Yj9dtugStFfRrdyCAoD",
  "key25": "4KbV4vFveRzPNr187XH6BLskW4rT3zLKJc9EJxTzjThM3aQJ6unL4RiCuvkRj4432SXu9giDTfQAvnTu2WDj34fY",
  "key26": "2mPsuG4YBL5HkQBeCqGXg7fowz5VLMxfWpMnoZ7HYE8CFSQDUPE9iZnjWp4Wc6xDP8uPEG9m8xo3gT5nH7aTS6b2",
  "key27": "21YUjY4cRWdVhTyjyKbKrpst9zLxpsyvTQE9wBhJE3xZebUGfAfXjBuJB7tsgq1maJc7NJrSfeLPAaXEWuMBFLE2",
  "key28": "Bz26PLV2yQ1y9MvK6qyUUeUjLG1BcMRZ8jdzYtKW1DjhBZSf2AgJN5KR1yNtmugFsKGUFkMLp1Mr1rKNLthkmAr",
  "key29": "4Mt2TFRAnDcQtPDmZuVCXXBkKStyhpxphbdmSWJ8JiH8CSWsCBXc2UAVYRETBazUsYrp3Q5Ase4LwivQjKQZQWGY",
  "key30": "5J1yn1JB3aAMYNWXoh3oHbVNpLGtG1GL4wV6rsiYEqTdVewVTFhaZJVw21CELGsXg7aZiYAhC9u2s86FwWZXQkha",
  "key31": "3VGBxtQWi4vXZtSMR6GE1ZTMuTEz2bfT9sSvVWrNAdpigJGjqBCHnpLa4xnk9os1xVUVEEkFA21ZkcNBKWjeRLfx",
  "key32": "4Knt9W85NEKSPbpeHxcNdKLSgXRpPaJs5dSL1BeMMRNwiUw2GLw4vDSLBwHxHjuioMWavKGR1729TcdeN9eJGg5Q",
  "key33": "3Z6Dj8abPdQxxYrwL29B5NCdB87ee2J4uamxFbrD9AdicQRxPisRijetL6PdicH5KdSktRaYBDMigL1L1JVF9uHm",
  "key34": "56pt2rxQLeD3KSnXCfcVXsQeMKRNmwaKk5tbvgo2hnZKcUvG85cnK3sErv5bXXzViszJ9ypRZ9ffMyYEq9sR1n9Y"
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
